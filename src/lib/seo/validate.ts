import { GOOGLE_ID_PATTERNS, SEO_LIMITS } from "./types";

import type {
  PageSeoPatch,
  ScriptBlockPatch,
  SiteSettings,
} from "./types";

export interface ValidationResult {
  errors: string[];
  warnings: string[];
}

const HARD_TITLE_MAX = SEO_LIMITS.title * 2;
const HARD_DESCRIPTION_MAX = SEO_LIMITS.description * 2;

const BLOCKED_SCRIPT_PATTERNS: Array<[RegExp, string]> = [
  [/\bdocument\.cookie\b/i, "document.cookie access"],
  [/\blocalStorage\b/i, "localStorage access"],
  [/\beval\s*\(/i, "eval()"],
  [/\bnew\s+Function\s*\(/i, "new Function()"],
  [/\bdocument\.write\b/i, "document.write"],
  [/\bfetch\s*\(\s*["'`]/i, "hardcoded fetch() URL"],
  [/import\s*\(/i, "dynamic import()"],
];

function checkUrl(
  value: string,
  label: string,
  errors: string[],
  allowRelative: boolean
): void {
  if (!value) return;
  if (value.startsWith("/")) {
    if (!allowRelative) errors.push(`${label} must be an absolute URL`);
    return;
  }
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    errors.push(`${label} is not a valid URL: ${value}`);
    return;
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    errors.push(`${label} must use http or https, got "${parsed.protocol}"`);
  }
}

export function validateJsonLd(content: string): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!content.trim()) {
    return { errors: ["Schema content is empty"], warnings };
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(content);
  } catch (error) {
    errors.push(`Invalid JSON: ${(error as Error).message}`);
    return { errors, warnings };
  }

  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    errors.push("Schema must be a JSON object");
    return { errors, warnings };
  }

  const node = parsed as Record<string, unknown>;
  const graph = node["@graph"];

  if (Array.isArray(graph)) {
    if (graph.length === 0) errors.push("@graph is empty");
    graph.forEach((item, index) => {
      const entry = item as Record<string, unknown>;
      if (!entry?.["@type"]) errors.push(`@graph[${index}] is missing "@type"`);
    });
  } else {
    if (!node["@context"]) errors.push('Missing "@context" (use "https://schema.org")');
    if (!node["@type"]) errors.push('Missing "@type"');
  }

  return { errors, warnings };
}

export function validateScriptBlock(patch: ScriptBlockPatch): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!patch.label?.trim()) errors.push("Label is required");

  if (patch.kind === "json-ld") {
    const result = validateJsonLd(patch.content ?? "");
    errors.push(...result.errors);
    warnings.push(...result.warnings);
    return { errors, warnings };
  }

  const allowCustom = process.env.SEO_ALLOW_CUSTOM_SCRIPTS === "true";
  if (!allowCustom) {
    errors.push(
      "Custom scripts are disabled. Use a JSON-LD block, or set SEO_ALLOW_CUSTOM_SCRIPTS=true to enable."
    );
    return { errors, warnings };
  }

  const content = patch.content ?? "";
  for (const [pattern, label] of BLOCKED_SCRIPT_PATTERNS) {
    if (pattern.test(content)) errors.push(`Blocked pattern detected: ${label}`);
  }

  if (content.length > 20000) errors.push("Script exceeds 20,000 characters");

  return { errors, warnings };
}

export function validatePageSeoPatch(patch: PageSeoPatch): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (patch.title != null) {
    const title = patch.title.trim();
    if (title.length > HARD_TITLE_MAX) {
      errors.push(`Title exceeds ${HARD_TITLE_MAX} characters`);
    } else if (title.length > SEO_LIMITS.title) {
      warnings.push(`Title is ${title.length} characters, Google may truncate past ~${SEO_LIMITS.title}`);
    }
  }

  if (patch.description != null) {
    const description = patch.description.trim();
    if (description.length > HARD_DESCRIPTION_MAX) {
      errors.push(`Description exceeds ${HARD_DESCRIPTION_MAX} characters`);
    } else if (description.length > SEO_LIMITS.description) {
      warnings.push(
        `Description is ${description.length} characters, Google may truncate past ~${SEO_LIMITS.description}`
      );
    }
  }

  checkUrl(patch.canonical ?? "", "Canonical", errors, true);
  checkUrl(patch.ogImage ?? "", "OG image", errors, true);

  if (patch.twitterHandle && !/^@?[A-Za-z0-9_]{1,15}$/.test(patch.twitterHandle)) {
    errors.push("Twitter handle must be 1-15 letters, numbers or underscore");
  }

  return { errors, warnings };
}

export function validateSiteSettings(site: SiteSettings): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  checkUrl(site.siteUrl, "Site URL", errors, false);
  checkUrl(site.defaultOgImage, "Default OG image", errors, true);

  if (!site.siteName?.trim()) errors.push("Site name is required");

  const { google } = site;

  if (google.enableGa4 && google.ga4Id && !GOOGLE_ID_PATTERNS.ga4.test(google.ga4Id)) {
    errors.push(`GA4 ID looks wrong: "${google.ga4Id}" (expected G-XXXXXXXXXX)`);
  }
  if (google.enableGtm && google.gtmId && !GOOGLE_ID_PATTERNS.gtm.test(google.gtmId)) {
    errors.push(`GTM ID looks wrong: "${google.gtmId}" (expected GTM-XXXXXXX)`);
  }
  if (google.enableAds && google.adsId && !GOOGLE_ID_PATTERNS.ads.test(google.adsId)) {
    errors.push(`Google Ads ID looks wrong: "${google.adsId}" (expected AW-XXXXXXXXXX)`);
  }
  if (
    google.enableAds &&
    google.adsConversionId &&
    !GOOGLE_ID_PATTERNS.adsConversion.test(google.adsConversionId)
  ) {
    errors.push(
      `Ads conversion ID looks wrong: "${google.adsConversionId}" (expected AW-XXXXXXX/YYYY)`
    );
  }
  if (google.enableAds && google.adsId && google.adsConversionId) {
    const prefix = google.adsConversionId.split("/")[0];
    if (prefix !== google.adsId) {
      warnings.push(
        `Conversion ID prefix (${prefix}) does not match Ads ID (${google.adsId})`
      );
    }
  }

  if (google.enableGa4 && google.gtmId && google.ga4Id === google.gtmId) {
    warnings.push("GA4 ID and GTM ID are identical, tags will double-fire");
  }

  return { errors, warnings };
}
