import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  getPageRegistry,
} from "@/lib/seo/registry";
import { canEdit } from "@/lib/seo/auth";
import { getSeoUser, sessionFrom } from "@/lib/seo/session";
import { normalizePathname } from "@/lib/seo/path";
import { resolveFromOverride } from "@/lib/seo/resolve";
import {
  getSeoStore,
  readScriptBlocks,
  readSiteSettings,
} from "@/lib/seo/store";
import {
  validatePageSeoPatch,
  validateScriptBlock,
  validateSiteSettings,
} from "@/lib/seo/validate";
import { SEO_LIMITS } from "@/lib/seo/types";

import type {
  AuditEntry,
  PageSeoOverride,
  ScriptBlock,
  SiteSettings,
  SnapshotResponse,
} from "@/lib/seo/types";

export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

function readOnly() {
  return NextResponse.json(
    { error: "Your role has read-only access" },
    { status: 403 }
  );
}

function fail(message: string, warnings: string[] = [], status = 400) {
  return NextResponse.json({ error: message, warnings }, { status });
}

function isKnownPath(pathname: string): boolean {
  const normalized = normalizePathname(pathname);
  return getPageRegistry().some((page) => page.path === normalized);
}

export async function GET(request: NextRequest) {
  const user = await getSeoUser(request);
  if (!user) return unauthorized();

  const store = getSeoStore();
  const db = await store.read();
  const site = await readSiteSettings();
  const scripts = await readScriptBlocks();

  const pages = getPageRegistry().map((record) => {
    const override = db.pages[record.path] ?? null;
    return { ...record, override, resolved: resolveFromOverride(record, override) };
  });

  const payload: SnapshotResponse = {
    pages,
    site,
    scripts,
    audit: db.audit,
    storage: store.isWritable() ? "file" : "memory",
    writable: store.isWritable(),
    session: sessionFrom(user),
    limits: SEO_LIMITS,
  };

  return NextResponse.json(payload);
}

export async function PUT(request: NextRequest) {
  const user = await getSeoUser(request);
  if (!user) return unauthorized();
  if (!canEdit(user.role)) return readOnly();

  let body: {
    resource?: "page" | "site" | "script";
    path?: string;
    patch?: Record<string, unknown>;
  };

  try {
    body = await request.json();
  } catch {
    return fail("Invalid JSON body");
  }

  const store = getSeoStore();
  const by = user.username;
  const now = new Date().toISOString();

  if (body.resource === "page") {
    if (!body.path) return fail("path is required");
    const pagePath = normalizePathname(body.path);
    if (!isKnownPath(pagePath)) return fail(`Unknown page: ${pagePath}`, [], 404);

    const db = await store.read();
    const before = db.pages[pagePath];
    const patch = (body.patch ?? {}) as Record<string, unknown>;

    const merged = {
      title: (patch.title as string | null | undefined) ?? before?.title ?? null,
      description:
        (patch.description as string | null | undefined) ?? before?.description ?? null,
      canonical:
        (patch.canonical as string | null | undefined) ?? before?.canonical ?? null,
      ogTitle: (patch.ogTitle as string | null | undefined) ?? before?.ogTitle ?? null,
      ogDescription:
        (patch.ogDescription as string | null | undefined) ?? before?.ogDescription ?? null,
      ogImage: (patch.ogImage as string | null | undefined) ?? before?.ogImage ?? null,
      twitterHandle:
        (patch.twitterHandle as string | null | undefined) ?? before?.twitterHandle ?? null,
      noindex: (patch.noindex as boolean | undefined) ?? before?.noindex ?? false,
    };

    const validation = validatePageSeoPatch(merged);
    if (validation.errors.length > 0) {
      return fail(validation.errors.join("; "), validation.warnings);
    }

    const override: PageSeoOverride = { ...merged, updatedAt: now, updatedBy: by };
    await store.writePage(pagePath, override);

    const audit: AuditEntry[] = [];
    if (before?.title !== override.title) {
      audit.push({ scope: "page", target: pagePath, field: "title", previous: before?.title ?? null, next: override.title, at: now, by });
    }
    if (before?.description !== override.description) {
      audit.push({ scope: "page", target: pagePath, field: "description", previous: before?.description ?? null, next: override.description, at: now, by });
    }
    if (before?.canonical !== override.canonical) {
      audit.push({ scope: "page", target: pagePath, field: "canonical", previous: before?.canonical ?? null, next: override.canonical, at: now, by });
    }
    if (Boolean(before?.noindex) !== override.noindex) {
      audit.push({ scope: "page", target: pagePath, field: "noindex", previous: String(Boolean(before?.noindex)), next: String(override.noindex), at: now, by });
    }
    await store.pushAudit(audit);

    return NextResponse.json({ ok: true, resource: "page", path: pagePath, override, warnings: validation.warnings });
  }

  if (body.resource === "site") {
    const current = await readSiteSettings();
    const incoming = { ...current, ...(body.patch as Partial<SiteSettings>) } as SiteSettings;

    if ((body.patch as Partial<SiteSettings>)?.address) {
      incoming.address = { ...current.address, ...(body.patch as any).address };
    }
    if ((body.patch as Partial<SiteSettings>)?.google) {
      incoming.google = { ...current.google, ...(body.patch as any).google };
    }

    const validation = validateSiteSettings(incoming);
    if (validation.errors.length > 0) {
      return fail(validation.errors.join("; "), validation.warnings);
    }

    const audit: AuditEntry[] = [];
    for (const key of Object.keys(incoming.google) as Array<keyof SiteSettings["google"]>) {
      const previous = String(current.google[key] ?? "");
      const next = String(incoming.google[key] ?? "");
      if (previous !== next) {
        audit.push({ scope: "site", target: "google", field: key, previous, next, at: now, by });
      }
    }

    const next_site: SiteSettings = { ...incoming, updatedAt: now, updatedBy: by };
    await store.writeSite(next_site);
    await store.pushAudit(audit);

    return NextResponse.json({ ok: true, resource: "site", site: next_site, warnings: validation.warnings });
  }

  if (body.resource === "script") {
    const patch = (body.patch ?? {}) as Partial<ScriptBlock>;
    const id = (patch.id as string) ?? "";

    if (!id) return fail("script id is required");

    const existing = (await readScriptBlocks()).find((item) => item.id === id);
    const merged: ScriptBlock = {
      id,
      label: (patch.label as string) ?? existing?.label ?? id,
      kind: (patch.kind as ScriptBlock["kind"]) ?? existing?.kind ?? "json-ld",
      slot: (patch.slot as ScriptBlock["slot"]) ?? existing?.slot ?? "bodyEnd",
      enabled: (patch.enabled as boolean) ?? existing?.enabled ?? true,
      content: (patch.content as string) ?? existing?.content ?? "",
      updatedAt: now,
      updatedBy: by,
    };

    const validation = validateScriptBlock(merged);
    if (validation.errors.length > 0) {
      return fail(validation.errors.join("; "), validation.warnings);
    }

    await store.writeScript(merged);
    await store.pushAudit([
      {
        scope: "script",
        target: id,
        field: "content",
        previous: existing?.content ?? null,
        next: merged.content,
        at: now,
        by,
      },
    ]);

    return NextResponse.json({ ok: true, resource: "script", block: merged, warnings: validation.warnings });
  }

  return fail("resource must be one of: page, site, script");
}

export async function DELETE(request: NextRequest) {
  const user = await getSeoUser(request);
  if (!user) return unauthorized();
  if (!canEdit(user.role)) return readOnly();

  const by = user.username;
  const { searchParams } = new URL(request.url);
  const resource = searchParams.get("resource");
  const target = searchParams.get("path") ?? searchParams.get("id");

  if (!target) return fail("path or id query param is required");

  const store = getSeoStore();

  if (resource === "page") {
    const pagePath = normalizePathname(target);
    if (!isKnownPath(pagePath)) return fail(`Unknown page: ${pagePath}`, [], 404);

    const before = (await store.read()).pages[pagePath];
    await store.clearPage(pagePath);
    await store.pushAudit(
      before
        ? [
            { scope: "page", target: pagePath, field: "title", previous: before.title, next: null, at: new Date().toISOString(), by },
            { scope: "page", target: pagePath, field: "description", previous: before.description, next: null, at: new Date().toISOString(), by },
          ]
        : []
    );

    return NextResponse.json({ ok: true, resource: "page", path: pagePath, override: null });
  }

  if (resource === "script") {
    await store.deleteScript(target);
    return NextResponse.json({ ok: true, resource: "script", id: target });
  }

  return fail("resource must be one of: page, script");
}
