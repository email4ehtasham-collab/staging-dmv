"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";

import "@/sass/seo-dashboard.scss";

type TabKey = "pages" | "site" | "scripts" | "audit";

type PageRow = {
  path: string;
  type: string;
  group: string | null;
  sourceFile: string | null;
  defaultTitle: string;
  defaultDescription: string;
  override: Record<string, unknown> | null;
  resolved: {
    title: string;
    description: string;
    canonical: string | null;
    ogTitle: string | null;
    ogDescription: string | null;
    ogImage: string | null;
    twitterHandle: string | null;
    noindex: boolean;
    overridden: boolean;
    updatedAt: string | null;
    updatedBy: string | null;
  };
};

type SiteSettings = {
  siteName: string;
  siteUrl: string;
  locale: string;
  defaultOgImage: string;
  twitterHandle: string;
  phone: string;
  email: string;
  address: { street: string; city: string; region: string; postalCode: string; country: string };
  google: {
    ga4Id: string;
    gtmId: string;
    adsId: string;
    adsConversionId: string;
    phoneConversionNumber: string;
    siteVerification: string;
    enableGa4: boolean;
    enableAds: boolean;
    enableGtm: boolean;
  };
  defaultNoindex: boolean;
  updatedAt: string;
  updatedBy: string | null;
};

type ScriptBlock = {
  id: string;
  label: string;
  kind: "json-ld" | "custom";
  slot: string;
  enabled: boolean;
  content: string;
  updatedAt: string;
  updatedBy: string | null;
};

type AuditEntry = {
  scope: string;
  target: string;
  field: string;
  previous: string | null;
  next: string | null;
  at: string;
  by: string | null;
};

type Snapshot = {
  pages: PageRow[];
  site: SiteSettings;
  scripts: ScriptBlock[];
  audit: AuditEntry[];
  storage: string;
  writable: boolean;
  limits: { title: number; description: number };
};

type Draft = {
  title: string;
  description: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  twitterHandle: string;
  noindex: boolean;
};

const TYPE_LABELS: Record<string, string> = {
  static: "Static",
  service: "Service",
  location: "Location",
  blog: "Blog",
  project: "Project",
  team: "Team",
};

const SLOT_OPTIONS = [
  "head",
  "beforeInteractive",
  "afterInteractive",
  "lazyOnload",
  "bodyEnd",
];

function draftFrom(row: PageRow): Draft {
  return {
    title: row.resolved.title,
    description: row.resolved.description,
    canonical: row.resolved.canonical ?? "",
    ogTitle: row.resolved.ogTitle ?? "",
    ogDescription: row.resolved.ogDescription ?? "",
    ogImage: row.resolved.ogImage ?? "",
    twitterHandle: row.resolved.twitterHandle ?? "",
    noindex: row.resolved.noindex,
  };
}

function counterClass(length: number, limit: number): string {
  if (length > limit * 2) return "seo-counter is-danger";
  if (length > limit) return "seo-counter is-warn";
  return "seo-counter";
}

function truncate(value: string, max: number): string {
  if (!value) return "â€”";
  return value.length > max ? `${value.slice(0, max)}â€¦` : value;
}

export default function SeoDashboard() {
  const [tab, setTab] = useState<TabKey>("pages");
  const [data, setData] = useState<Snapshot | null>(null);
  const [loading, setLoading] = useState(true);
  const [busyPath, setBusyPath] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [groupFilter, setGroupFilter] = useState("all");
  const [onlyOverridden, setOnlyOverridden] = useState(false);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const [draft, setDraft] = useState<Draft | null>(null);

  const [site, setSite] = useState<SiteSettings | null>(null);
  const [siteWarnings, setSiteWarnings] = useState<string[]>([]);
  const [scriptDrafts, setScriptDrafts] = useState<Record<string, ScriptBlock>>({});
  const [scriptMessages, setScriptMessages] = useState<Record<string, { errors: string[]; warnings: string[] }>>({});

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/seo", { cache: "no-store" });
      if (res.status === 401) {
        setError("Not authorised. Please sign in again.");
        return;
      }
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const json: Snapshot = await res.json();
      setData(json);
      setSite(json.site);
      setScriptDrafts(
        json.scripts.reduce<Record<string, ScriptBlock>>((acc, block) => {
          acc[block.id] = { ...block };
          return acc;
        }, {})
      );
      setError(null);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    document.body.classList.add("dashboard-mode");
    load();
    return () => { document.body.classList.remove("dashboard-mode"); document.documentElement.classList.remove("dashboard-mode"); };
  }, [load]);

  async function send(method: "PUT" | "DELETE", body: unknown, url?: string) {
    const res = await fetch(url ?? "/api/seo", {
      method,
      headers: { "Content-Type": "application/json" },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(json.error ?? `Request failed: ${res.status}`);
    }
    return json;
  }

  async function logout() {
    try {
      await fetch("/api/seo/auth/logout", { method: "POST" });
    } finally {
      window.location.href = "/seo_login";
    }
  }

  async function savePage(path: string, next: Draft) {
    setBusyPath(path);
    setError(null);
    setNotice(null);
    try {
      const json = await send("PUT", { resource: "page", path, patch: next });
      setNotice(
        json.warnings?.length
          ? `Saved with warnings: ${json.warnings.join(" ")}`
          : "Saved."
      );
      setOpenPath(null);
      setDraft(null);
      await load();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusyPath(null);
    }
  }

  async function resetPage(path: string) {
    setBusyPath(path);
    setError(null);
    try {
      await send("DELETE", null, `/api/seo?resource=page&path=${encodeURIComponent(path)}`);
      setNotice("Reset to the value defined in code.");
      setOpenPath(null);
      setDraft(null);
      await load();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusyPath(null);
    }
  }

  async function saveSite() {
    if (!site) return;
    setBusyPath("site");
    setError(null);
    setSiteWarnings([]);
    try {
      const json = await send("PUT", { resource: "site", patch: site });
      setSiteWarnings(json.warnings ?? []);
      setNotice("Site settings saved.");
      await load();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setBusyPath(null);
    }
  }

  async function saveScript(id: string) {
    const block = scriptDrafts[id];
    if (!block) return;
    setBusyPath(id);
    setError(null);
    try {
      const json = await send("PUT", { resource: "script", patch: block });
      setScriptMessages((prev) => ({
        ...prev,
        [id]: { errors: [], warnings: json.warnings ?? [] },
      }));
      setNotice("Block saved.");
      await load();
    } catch (err) {
      setScriptMessages((prev) => ({
        ...prev,
        [id]: { errors: [(err as Error).message], warnings: [] },
      }));
    } finally {
      setBusyPath(null);
    }
  }

  const groups = useMemo(() => {
    if (!data) return [];
    return Array.from(new Set(data.pages.map((page) => page.group).filter(Boolean))) as string[];
  }, [data]);

  const filtered = useMemo(() => {
    if (!data) return [];
    const term = search.trim().toLowerCase();
    return data.pages.filter((page) => {
      if (typeFilter !== "all" && page.type !== typeFilter) return false;
      if (groupFilter !== "all" && page.group !== groupFilter) return false;
      if (onlyOverridden && !page.resolved.overridden) return false;
      if (!term) return true;
      return (
        page.path.toLowerCase().includes(term) ||
        page.resolved.title.toLowerCase().includes(term)
      );
    });
  }, [data, search, typeFilter, groupFilter, onlyOverridden]);

  const stats = useMemo(() => {
    if (!data) return { total: 0, overridden: 0, noindex: 0, overTitle: 0, overDesc: 0 };
    return {
      total: data.pages.length,
      overridden: data.pages.filter((p) => p.resolved.overridden).length,
      noindex: data.pages.filter((p) => p.resolved.noindex).length,
      overTitle: data.pages.filter((p) => p.resolved.title.length > data.limits.title).length,
      overDesc: data.pages.filter(
        (p) => p.resolved.description.length > data.limits.description
      ).length,
    };
  }, [data]);

  const titles = useMemo(() => {
    const map = new Map<string, string[]>();
    for (const page of data?.pages ?? []) {
      const key = page.resolved.title.trim().toLowerCase();
      if (!key) continue;
      map.set(key, [...(map.get(key) ?? []), page.path]);
    }
    return Array.from(map.entries()).filter(([, paths]) => paths.length > 1);
  }, [data]);

  if (loading) {
    return <main className="seo-dashboard-main"><div className="seo-empty">Loadingâ€¦</div></main>;
  }

  if (!data || !site) {
    return (
      <main className="seo-dashboard-main">
        <div className="seo-empty">{error ?? "Could not load SEO data."}</div>
      </main>
    );
  }

  return (
    <main className="seo-dashboard-main">
      <header className="seo-header">
        <div>
          <h1>SEO Control Panel</h1>
          <p>
            Meta titles, descriptions, Google tags and schema.{" "}
            {data.writable
              ? "Changes are stored on the server and apply immediately."
              : "Storage is read-only on this host, changes will not persist."}
          </p>
        </div>
        <div className="seo-stats">
          <div className="seo-stat"><span>Pages</span><strong>{stats.total}</strong></div>
          <div className="seo-stat"><span>Customised</span><strong>{stats.overridden}</strong></div>
          <div className="seo-stat"><span>Noindex</span><strong>{stats.noindex}</strong></div>
          <div className="seo-stat"><span>Title too long</span><strong>{stats.overTitle}</strong></div>
          <div className="seo-stat"><span>Desc too long</span><strong>{stats.overDesc}</strong></div>
          <button className="seo-button" onClick={load} type="button">Refresh</button>
          <button className="seo-button is-logout" onClick={logout} type="button">Logout</button>
        </div>
      </header>

      <div className="seo-scope-note">
        <strong>Phase 1 â€” our-team only.</strong> Saved changes apply live to the{" "}
        {stats.total} team pages below. Every other page on the site still uses
        the hardcoded metadata in its own route file, and the site-wide Google
        tags in <code>layout.tsx</code> are untouched, so the site stays
        statically rendered.
      </div>

      {error && <div className="seo-messages is-error" style={{ marginTop: 16 }}>{error}</div>}
      {notice && <div className="seo-messages is-warn" style={{ marginTop: 16 }}>{notice}</div>}

      <div className="seo-toolbar">
        <div className="seo-tabs">
          {(["pages", "site", "scripts", "audit"] as TabKey[]).map((key) => (
            <button
              key={key}
              type="button"
              className={`seo-tab${tab === key ? " is-active" : ""}`}
              onClick={() => setTab(key)}
            >
              {key === "pages" ? "Pages" : key === "site" ? "Site & Tags" : key === "scripts" ? "Schema & Scripts" : "Audit Log"}
            </button>
          ))}
        </div>
      </div>

      {tab === "pages" && (
        <>
          <div className="seo-toolbar">
            <input
              className="seo-input seo-input-search"
              placeholder="Search by path or titleâ€¦"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select className="seo-select" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
              <option value="all">All types</option>
              {Object.keys(TYPE_LABELS).map((key) => (
                <option key={key} value={key}>{TYPE_LABELS[key]}</option>
              ))}
            </select>
            <select className="seo-select" value={groupFilter} onChange={(e) => setGroupFilter(e.target.value)}>
              <option value="all">All services</option>
              {groups.map((group) => (
                <option key={group} value={group}>{group}</option>
              ))}
            </select>
            <label className="seo-checkbox">
              <input
                type="checkbox"
                checked={onlyOverridden}
                onChange={(e) => setOnlyOverridden(e.target.checked)}
              />
              Only customised
            </label>
            <span className="seo-hint">
              {filtered.length} of {data.pages.length} pages
            </span>
          </div>

          {titles.length > 0 && (
            <div className="seo-messages is-warn">
              <strong>{titles.length} duplicate title group(s) detected.</strong>
              <ul>
                {titles.slice(0, 5).map(([title, paths]) => (
                  <li key={title}>{truncate(title, 70)} â€” {paths.length} pages</li>
                ))}
              </ul>
            </div>
          )}

          <div className="seo-table-wrap">
            <table className="seo-table">
              <colgroup>
                <col className="seo-col-path" />
                <col className="seo-col-type" />
                <col />
                <col />
                <col className="seo-actions-cell" />
              </colgroup>
              <thead>
                <tr>
                  <th>Path</th>
                  <th>Type</th>
                  <th>Meta title</th>
                  <th>Meta description</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {filtered.map((page) => (
                  <React.Fragment key={page.path}>
                    <tr>
                      <td>
                        <div className="seo-path">{page.path}</div>
                        {page.resolved.updatedAt && (
                          <div className="seo-meta">
                            edited {new Date(page.resolved.updatedAt).toLocaleString()}
                            {page.resolved.updatedBy ? ` by ${page.resolved.updatedBy}` : ""}
                          </div>
                        )}
                      </td>
                      <td>
                        <span className={`seo-badge${page.type === "location" ? " is-soft" : ""}`}>
                          {TYPE_LABELS[page.type] ?? page.type}
                        </span>
                      </td>
                      <td>
                        <div>{truncate(page.resolved.title, 90)}</div>
                        <div className="seo-meta">
                          {page.resolved.title.length} chars
                          {page.resolved.overridden && " Â· customised"}
                        </div>
                      </td>
                      <td>
                        <div>{truncate(page.resolved.description, 110)}</div>
                        <div className="seo-meta">
                          {page.resolved.description.length} chars
                          {page.resolved.noindex && " Â· noindex"}
                        </div>
                      </td>
                      <td>
                        <button
                          className="seo-button"
                          type="button"
                          onClick={() => {
                            setOpenPath(page.path === openPath ? null : page.path);
                            setDraft(draftFrom(page));
                          }}
                        >
                          {page.path === openPath ? "Close" : "Edit"}
                        </button>
                      </td>
                    </tr>

                    {page.path === openPath && draft && (
                      <tr className="seo-row-editor">
                        <td colSpan={5}>
                          <div className="seo-field">
                            <label htmlFor={`t-${page.path}`}>
                              Meta title
                              <span className={counterClass(draft.title.length, data.limits.title)}>
                                {draft.title.length} / {data.limits.title}
                              </span>
                            </label>
                            <input
                              id={`t-${page.path}`}
                              className="seo-input"
                              style={{ width: "100%" }}
                              value={draft.title}
                              onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                            />
                          </div>

                          <div className="seo-field">
                            <label htmlFor={`d-${page.path}`}>
                              Meta description
                              <span className={counterClass(draft.description.length, data.limits.description)}>
                                {draft.description.length} / {data.limits.description}
                              </span>
                            </label>
                            <textarea
                              id={`d-${page.path}`}
                              className="seo-textarea"
                              value={draft.description}
                              onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                            />
                          </div>

                          <div className="seo-field-grid">
                            <div className="seo-field">
                              <label htmlFor={`c-${page.path}`}>Canonical</label>
                              <input
                                id={`c-${page.path}`}
                                className="seo-input"
                                style={{ width: "100%" }}
                                placeholder={page.path}
                                value={draft.canonical}
                                onChange={(e) => setDraft({ ...draft, canonical: e.target.value })}
                              />
                            </div>
                            <div className="seo-field">
                              <label htmlFor={`og-${page.path}`}>OG image</label>
                              <input
                                id={`og-${page.path}`}
                                className="seo-input"
                                style={{ width: "100%" }}
                                placeholder={site.defaultOgImage}
                                value={draft.ogImage}
                                onChange={(e) => setDraft({ ...draft, ogImage: e.target.value })}
                              />
                            </div>
                            <div className="seo-field">
                              <label htmlFor={`ogt-${page.path}`}>OG title</label>
                              <input
                                id={`ogt-${page.path}`}
                                className="seo-input"
                                style={{ width: "100%" }}
                                placeholder="Defaults to meta title"
                                value={draft.ogTitle}
                                onChange={(e) => setDraft({ ...draft, ogTitle: e.target.value })}
                              />
                            </div>
                            <div className="seo-field">
                              <label htmlFor={`ogd-${page.path}`}>OG description</label>
                              <input
                                id={`ogd-${page.path}`}
                                className="seo-input"
                                style={{ width: "100%" }}
                                placeholder="Defaults to meta description"
                                value={draft.ogDescription}
                                onChange={(e) => setDraft({ ...draft, ogDescription: e.target.value })}
                              />
                            </div>
                            <div className="seo-field">
                              <label htmlFor={`tw-${page.path}`}>Twitter handle</label>
                              <input
                                id={`tw-${page.path}`}
                                className="seo-input"
                                style={{ width: "100%" }}
                                placeholder={site.twitterHandle || "@handle"}
                                value={draft.twitterHandle}
                                onChange={(e) => setDraft({ ...draft, twitterHandle: e.target.value })}
                              />
                            </div>
                          </div>

                          <div className="seo-serp">
                            <span>https://www.dmv-gc.com{page.path}</span>
                            <strong>{draft.title || "Empty title"}</strong>
                            <p>{draft.description || "Empty description"}</p>
                          </div>

                          <div className="seo-actions">
                            <button
                              className="seo-button is-primary"
                              type="button"
                              disabled={busyPath === page.path}
                              onClick={() => savePage(page.path, draft)}
                            >
                              {busyPath === page.path ? "Savingâ€¦" : "Save"}
                            </button>
                            <button
                              className="seo-button is-danger"
                              type="button"
                              disabled={busyPath === page.path || !page.resolved.overridden}
                              onClick={() => resetPage(page.path)}
                            >
                              Reset to code
                            </button>
                            <label className="seo-checkbox">
                              <input
                                type="checkbox"
                                checked={draft.noindex}
                                onChange={(e) => setDraft({ ...draft, noindex: e.target.checked })}
                              />
                              noindex this page
                            </label>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}

                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={5} className="seo-empty">No pages match these filters.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}

      {tab === "site" && (
        <>
          <section className="seo-card">
            <h2>Brand &amp; defaults</h2>
            <p>Used for schema markup, Open Graph fallbacks and sitemap URLs.</p>
            <div className="seo-field-grid">
              <div className="seo-field">
                <label htmlFor="s-name">Site name</label>
                <input id="s-name" className="seo-input" style={{ width: "100%" }} value={site.siteName} onChange={(e) => setSite({ ...site, siteName: e.target.value })} />
              </div>
              <div className="seo-field">
                <label htmlFor="s-url">Site URL</label>
                <input id="s-url" className="seo-input" style={{ width: "100%" }} value={site.siteUrl} onChange={(e) => setSite({ ...site, siteUrl: e.target.value })} />
              </div>
              <div className="seo-field">
                <label htmlFor="s-og">Default OG image</label>
                <input id="s-og" className="seo-input" style={{ width: "100%" }} value={site.defaultOgImage} onChange={(e) => setSite({ ...site, defaultOgImage: e.target.value })} />
              </div>
              <div className="seo-field">
                <label htmlFor="s-tw">Twitter handle</label>
                <input id="s-tw" className="seo-input" style={{ width: "100%" }} placeholder="@handle" value={site.twitterHandle} onChange={(e) => setSite({ ...site, twitterHandle: e.target.value })} />
              </div>
              <div className="seo-field">
                <label htmlFor="s-phone">Phone (NAP)</label>
                <input id="s-phone" className="seo-input" style={{ width: "100%" }} value={site.phone} onChange={(e) => setSite({ ...site, phone: e.target.value })} />
              </div>
              <div className="seo-field">
                <label htmlFor="s-email">Email</label>
                <input id="s-email" className="seo-input" style={{ width: "100%" }} value={site.email} onChange={(e) => setSite({ ...site, email: e.target.value })} />
              </div>
            </div>

            <h2 style={{ marginTop: 18 }}>Business address (NAP)</h2>
            <div className="seo-field-grid">
              <div className="seo-field">
                <label htmlFor="a-street">Street</label>
                <input id="a-street" className="seo-input" style={{ width: "100%" }} value={site.address.street} onChange={(e) => setSite({ ...site, address: { ...site.address, street: e.target.value } })} />
              </div>
              <div className="seo-field">
                <label htmlFor="a-city">City</label>
                <input id="a-city" className="seo-input" style={{ width: "100%" }} value={site.address.city} onChange={(e) => setSite({ ...site, address: { ...site.address, city: e.target.value } })} />
              </div>
              <div className="seo-field">
                <label htmlFor="a-region">Region</label>
                <input id="a-region" className="seo-input" style={{ width: "100%" }} value={site.address.region} onChange={(e) => setSite({ ...site, address: { ...site.address, region: e.target.value } })} />
              </div>
              <div className="seo-field">
                <label htmlFor="a-post">Postal code</label>
                <input id="a-post" className="seo-input" style={{ width: "100%" }} value={site.address.postalCode} onChange={(e) => setSite({ ...site, address: { ...site.address, postalCode: e.target.value } })} />
              </div>
            </div>
          </section>

          <section className="seo-card">
            <h2>Google tags</h2>
            <p>Enter the ID only. The script is generated for you, so it cannot be broken.</p>

            <div className="seo-field">
              <label className="seo-checkbox">
                <input type="checkbox" checked={site.google.enableGa4} onChange={(e) => setSite({ ...site, google: { ...site.google, enableGa4: e.target.checked } })} />
                Enable GA4
              </label>
            </div>
            <div className="seo-field">
              <label htmlFor="g-ga4">GA4 measurement ID</label>
              <input id="g-ga4" className="seo-input" style={{ width: "100%" }} placeholder="G-XXXXXXXXXX" value={site.google.ga4Id} onChange={(e) => setSite({ ...site, google: { ...site.google, ga4Id: e.target.value } })} />
            </div>

            <div className="seo-field">
              <label className="seo-checkbox">
                <input type="checkbox" checked={site.google.enableGtm} onChange={(e) => setSite({ ...site, google: { ...site.google, enableGtm: e.target.checked } })} />
                Enable Google Tag Manager
              </label>
            </div>
            <div className="seo-field">
              <label htmlFor="g-gtm">GTM container ID</label>
              <input id="g-gtm" className="seo-input" style={{ width: "100%" }} placeholder="GTM-XXXXXXX" value={site.google.gtmId} onChange={(e) => setSite({ ...site, google: { ...site.google, gtmId: e.target.value } })} />
            </div>

            <div className="seo-field">
              <label className="seo-checkbox">
                <input type="checkbox" checked={site.google.enableAds} onChange={(e) => setSite({ ...site, google: { ...site.google, enableAds: e.target.checked } })} />
                Enable Google Ads
              </label>
            </div>
            <div className="seo-field-grid">
              <div className="seo-field">
                <label htmlFor="g-ads">Ads ID</label>
                <input id="g-ads" className="seo-input" style={{ width: "100%" }} placeholder="AW-XXXXXXXXXX" value={site.google.adsId} onChange={(e) => setSite({ ...site, google: { ...site.google, adsId: e.target.value } })} />
              </div>
              <div className="seo-field">
                <label htmlFor="g-adsconv">Ads conversion ID</label>
                <input id="g-adsconv" className="seo-input" style={{ width: "100%" }} placeholder="AW-XXXXXXXXXX/YYYYYY" value={site.google.adsConversionId} onChange={(e) => setSite({ ...site, google: { ...site.google, adsConversionId: e.target.value } })} />
              </div>
              <div className="seo-field">
                <label htmlFor="g-phone">Phone conversion number</label>
                <input id="g-phone" className="seo-input" style={{ width: "100%" }} value={site.google.phoneConversionNumber} onChange={(e) => setSite({ ...site, google: { ...site.google, phoneConversionNumber: e.target.value } })} />
              </div>
            </div>

            <div className="seo-field">
              <label htmlFor="g-verify">Google site verification token</label>
              <input id="g-verify" className="seo-input" style={{ width: "100%" }} value={site.google.siteVerification} onChange={(e) => setSite({ ...site, google: { ...site.google, siteVerification: e.target.value } })} />
            </div>

            {siteWarnings.length > 0 && (
              <div className="seo-messages is-warn">
                <ul>{siteWarnings.map((w) => <li key={w}>{w}</li>)}</ul>
              </div>
            )}

            <div className="seo-actions">
              <button className="seo-button is-primary" type="button" disabled={busyPath === "site"} onClick={saveSite}>
                {busyPath === "site" ? "Savingâ€¦" : "Save site settings"}
              </button>
            </div>
          </section>
        </>
      )}

      {tab === "scripts" && (
        <>
          {Object.values(scriptDrafts).map((block) => {
            const messages = scriptMessages[block.id];
            return (
              <section className="seo-card" key={block.id}>
                <h2>{block.label}</h2>
                <p>
                  Slot: <code>{block.slot}</code> Â· type: <code>{block.kind}</code> Â· id: <code>{block.id}</code>
                </p>

                <div className="seo-field-grid">
                  <div className="seo-field">
                    <label htmlFor={`l-${block.id}`}>Label</label>
                    <input
                      id={`l-${block.id}`}
                      className="seo-input"
                      style={{ width: "100%" }}
                      value={block.label}
                      onChange={(e) => setScriptDrafts({ ...scriptDrafts, [block.id]: { ...block, label: e.target.value } })}
                    />
                  </div>
                  <div className="seo-field">
                    <label htmlFor={`s-${block.id}`}>Slot</label>
                    <select
                      id={`s-${block.id}`}
                      className="seo-select"
                      style={{ width: "100%" }}
                      value={block.slot}
                      onChange={(e) => setScriptDrafts({ ...scriptDrafts, [block.id]: { ...block, slot: e.target.value } })}
                    >
                      {SLOT_OPTIONS.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="seo-field">
                  <label className="seo-checkbox">
                    <input
                      type="checkbox"
                      checked={block.enabled}
                      onChange={(e) => setScriptDrafts({ ...scriptDrafts, [block.id]: { ...block, enabled: e.target.checked } })}
                    />
                    Enabled
                  </label>
                </div>

                <div className="seo-field">
                  <label htmlFor={`c-${block.id}`}>
                    {block.kind === "json-ld" ? "JSON-LD (validated)" : "Script"}
                  </label>
                  <textarea
                    id={`c-${block.id}`}
                    className="seo-textarea is-mono"
                    value={block.content}
                    onChange={(e) => setScriptDrafts({ ...scriptDrafts, [block.id]: { ...block, content: e.target.value } })}
                  />
                </div>

                {messages && messages.errors.length > 0 && (
                  <div className="seo-messages is-error">
                    <ul>{messages.errors.map((e) => <li key={e}>{e}</li>)}</ul>
                  </div>
                )}
                {messages && messages.warnings.length > 0 && (
                  <div className="seo-messages is-warn">
                    <ul>{messages.warnings.map((w) => <li key={w}>{w}</li>)}</ul>
                  </div>
                )}

                <div className="seo-actions">
                  <button className="seo-button is-primary" type="button" disabled={busyPath === block.id} onClick={() => saveScript(block.id)}>
                    {busyPath === block.id ? "Savingâ€¦" : "Save block"}
                  </button>
                </div>
              </section>
            );
          })}
        </>
      )}

      {tab === "audit" && (
        <div className="seo-table-wrap">
          <table className="seo-audit">
            <thead>
              <tr>
                <th>When</th>
                <th>Scope</th>
                <th>Target</th>
                <th>Field</th>
                <th>Previous</th>
                <th>New</th>
                <th>By</th>
              </tr>
            </thead>
            <tbody>
              {data.audit.map((entry, index) => (
                <tr key={`${entry.at}-${index}`}>
                  <td>{new Date(entry.at).toLocaleString()}</td>
                  <td>{entry.scope}</td>
                  <td className="seo-path">{entry.target}</td>
                  <td>{entry.field}</td>
                  <td>{truncate(entry.previous ?? "â€”", 60)}</td>
                  <td>{truncate(entry.next ?? "â€”", 60)}</td>
                  <td>{entry.by ?? "â€”"}</td>
                </tr>
              ))}
              {data.audit.length === 0 && (
                <tr>
                  <td colSpan={7} className="seo-empty">No changes recorded yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}

