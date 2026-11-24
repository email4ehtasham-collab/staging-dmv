import type { Metadata } from "next";

import { getPageRegistry, locationDefaults } from "./registry";
import { normalizePathname } from "./path";
import { readScriptBlocks, readSiteSettings, getSeoStore } from "./store";

import type {
  PageRecord,
  PageSeoOverride,
  ResolvedPageSeo,
  ScriptBlock,
  SeoDefaults,
  SiteSettings,
} from "./types";

export function resolveFromOverride(
  record: PageRecord,
  override: PageSeoOverride | null
): ResolvedPageSeo {
  const title = override?.title ?? record.defaultTitle;
  const description = override?.description ?? record.defaultDescription;

  return {
    title,
    description,
    canonical: override?.canonical ?? null,
    ogTitle: override?.ogTitle ?? null,
    ogDescription: override?.ogDescription ?? null,
    ogImage: override?.ogImage ?? null,
    twitterHandle: override?.twitterHandle ?? null,
    noindex: Boolean(override?.noindex),
    overridden: Boolean(
      override &&
        (override.title ||
          override.description ||
          override.canonical ||
          override.ogTitle ||
          override.ogDescription ||
          override.ogImage ||
          override.twitterHandle ||
          override.noindex)
    ),
    updatedAt: override?.updatedAt ?? null,
    updatedBy: override?.updatedBy ?? null,
  };
}

export async function seoFor(
  pagePath: string,
  fallback: SeoDefaults
): Promise<ResolvedPageSeo> {
  const normalized = normalizePathname(pagePath);
  const record: PageRecord = {
    path: normalized,
    type: "static",
    group: null,
    sourceFile: null,
    defaultTitle: fallback.title,
    defaultDescription: fallback.description,
  };

  const db = await getSeoStore().read();
  return resolveFromOverride(record, db.pages[normalized] ?? null);
}

export async function seoForLocation(
  slug: string,
  location: string
): Promise<ResolvedPageSeo> {
  return seoFor(
    `/service/${slug}/${location}`,
    locationDefaults(slug, location)
  );
}

export function robotsFor(noindex: boolean): Metadata["robots"] {
  return noindex ? { index: false, follow: false } : undefined;
}

export function toMetadata(
  seo: ResolvedPageSeo,
  canonicalPath: string
): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    robots: robotsFor(seo.noindex),
    alternates: { canonical: seo.canonical ?? canonicalPath },
    openGraph: {
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      url: seo.canonical ?? canonicalPath,
      ...(seo.ogImage ? { images: [{ url: seo.ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle ?? seo.title,
      description: seo.ogDescription ?? seo.description,
      ...(seo.twitterHandle ? { site: seo.twitterHandle } : {}),
    },
  };
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return readSiteSettings();
}

export async function getActiveScriptBlocks(): Promise<ScriptBlock[]> {
  const blocks = await readScriptBlocks();
  return blocks.filter((block) => block.enabled);
}

export function getAllPages(): PageRecord[] {
  return getPageRegistry();
}
