export type SeoPageType =
  | "static"
  | "service"
  | "location"
  | "blog"
  | "project"
  | "team";

export type SeoField = "title" | "description" | "canonical" | "noindex" | "ogImage";

export type ScriptSlot =
  | "head"
  | "beforeInteractive"
  | "afterInteractive"
  | "lazyOnload"
  | "bodyEnd";

export type ScriptKind = "json-ld" | "custom";

export const SEO_LIMITS = {
  title: 60,
  description: 158,
} as const;

export const GOOGLE_ID_PATTERNS = {
  ga4: /^G-[A-Z0-9]{4,12}$/,
  gtm: /^GTM-[A-Z0-9]{4,10}$/,
  ads: /^AW-\d{6,14}$/,
  adsConversion: /^AW-\d{6,14}\/[A-Za-z0-9_-]{4,20}$/,
} as const;

export interface PageSeoPatch {
  title?: string | null;
  description?: string | null;
  canonical?: string | null;
  ogTitle?: string | null;
  ogDescription?: string | null;
  ogImage?: string | null;
  twitterHandle?: string | null;
  noindex?: boolean | null;
}

export interface PageSeoOverride extends PageSeoPatch {
  noindex: boolean;
  updatedAt: string;
  updatedBy: string | null;
}

export interface SeoDefaults {
  title: string;
  description: string;
}

export interface PageRecord {
  path: string;
  type: SeoPageType;
  group: string | null;
  sourceFile: string | null;
  defaultTitle: string;
  defaultDescription: string;
}

export interface ResolvedPageSeo extends SeoDefaults {
  canonical: string | null;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  twitterHandle: string | null;
  noindex: boolean;
  overridden: boolean;
  updatedAt: string | null;
  updatedBy: string | null;
}

export interface GoogleConfig {
  ga4Id: string;
  gtmId: string;
  adsId: string;
  adsConversionId: string;
  phoneConversionNumber: string;
  siteVerification: string;
  enableGa4: boolean;
  enableAds: boolean;
  enableGtm: boolean;
}

export interface SiteSettings {
  siteName: string;
  siteUrl: string;
  locale: string;
  defaultOgImage: string;
  twitterHandle: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  };
  google: GoogleConfig;
  defaultNoindex: boolean;
  updatedAt: string;
  updatedBy: string | null;
}

export interface ScriptBlock {
  id: string;
  label: string;
  kind: ScriptKind;
  slot: ScriptSlot;
  enabled: boolean;
  content: string;
  updatedAt: string;
  updatedBy: string | null;
}

export type ScriptBlockPatch = Pick<ScriptBlock, "label" | "kind" | "slot" | "enabled" | "content">;

export interface AuditEntry {
  scope: "page" | "site" | "script";
  target: string;
  field: string;
  previous: string | null;
  next: string | null;
  at: string;
  by: string | null;
}

export type SeoRole = "viewer" | "editor" | "admin";

export interface SeoUser {
  id: string;
  username: string;
  displayName: string;
  email: string | null;
  role: SeoRole;
  passwordHash: string;
  active: boolean;
  createdAt: string;
  lastLoginAt: string | null;
}

export type PublicSeoUser = Omit<SeoUser, "passwordHash">;

export interface SeoSession {
  userId: string;
  username: string;
  role: SeoRole;
}

export interface SeoDatabase {
  pages: Record<string, PageSeoOverride>;
  site: SiteSettings | null;
  scripts: ScriptBlock[];
  audit: AuditEntry[];
  users: SeoUser[];
}

export interface SnapshotResponse {
  pages: Array<PageRecord & { override: PageSeoOverride | null; resolved: ResolvedPageSeo }>;
  site: SiteSettings;
  scripts: ScriptBlock[];
  audit: AuditEntry[];
  storage: "file" | "memory";
  writable: boolean;
  session: SeoSession;
  limits: typeof SEO_LIMITS;
}
