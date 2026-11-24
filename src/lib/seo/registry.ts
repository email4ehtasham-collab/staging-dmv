import fs from "fs";
import path from "path";

import ServiceData from "@/data/services/ServiceData";
import BlogsData from "@/data/blogs/BlogsData";
import ProjectsData from "@/data/projects/ProjectsData";
import locationMetadata from "@/data/services/locationMetadata";
import { TEAM_MEMBERS } from "@/app/our-team/data";

import type { SeoDefaults, PageRecord, SeoPageType } from "./types";

export const APP_DIR = path.join(process.cwd(), "src", "app");
const SERVICE_PAGES_DIR = path.join(APP_DIR, "service", "[slug]", "pages");
const LOCATION_DIR_NAME = "location-landing-pages";

const PAGE_FILES = ["page.tsx", "page.jsx", "page.ts", "page.js"];
const INDEX_FILES = ["index.tsx", "index.jsx"];

const EXCLUDED_ROUTES = new Set([
  "dashboard_login",
  "s_dashboard",
  "seo-dashboard",
  "seo_login",
  "api",
]);

const STATIC_TITLES: Record<string, string> = {
  "": "DMV General Contracting Group",
  "about-us": "about-us",
  "blogs": "blogs",
  "contact-us": "contact-us",
  "faqs": "faqs",
  "our-stories": "our-stories",
  "our-team": "our-team",
  "projects": "projects",
  "services": "services",
  "testimonials": "testimonials",
};

function titleCase(value: string): string {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function titleCaseLocation(location: string): string {
  return location
    .split("-")
    .map((word) =>
      word.toLowerCase() === "md" ? "MD" : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

export function locationFallback(slug: string, location: string): SeoDefaults {
  const service = titleCase(slug);
  const place = titleCaseLocation(location);
  return {
    title: `${service} in ${place} | Licensed Contractor | DMV-GC Group`,
    description: `Licensed ${service.toLowerCase()} contractor in ${place}. Specializing in custom renovations and remodeling. Free in-home consultation.`,
  };
}

export function locationDefaults(slug: string, location: string): SeoDefaults {
  const specific = locationMetadata[`${slug}/${location}`];
  if (specific?.title && specific?.description) {
    return { title: specific.title, description: specific.description };
  }
  return locationFallback(slug, location);
}

function firstExistingFile(dir: string, names: string[]): string | null {
  for (const name of names) {
    const candidate = path.join(dir, name);
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

function readStringLiteral(source: string, key: string): string {
  const match = source.match(
    new RegExp(`${key}\\s*:\\s*(?:\\{\\s*)?["'\`]([^"'\`]*?)["'\`]`, "m")
  );
  return match ? match[1] : "";
}

function buildRecord(
  pagePath: string,
  type: SeoPageType,
  group: string | null,
  sourceFile: string | null,
  defaults: SeoDefaults
): PageRecord {
  return {
    path: pagePath,
    type,
    group,
    sourceFile,
    defaultTitle: defaults.title,
    defaultDescription: defaults.description,
  };
}

export function collectStaticPages(): PageRecord[] {
  const records: PageRecord[] = [];

  const homeFile = firstExistingFile(APP_DIR, PAGE_FILES);
  if (homeFile) {
    const source = fs.readFileSync(homeFile, "utf8");
    records.push(
      buildRecord("/", "static", null, path.relative(process.cwd(), homeFile), {
        title: readStringLiteral(source, "title"),
        description: readStringLiteral(source, "description"),
      })
    );
  }

  for (const dir of fs.readdirSync(APP_DIR, { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;
    if (EXCLUDED_ROUTES.has(dir.name)) continue;
    if (dir.name.startsWith("[") || dir.name.startsWith("(")) continue;

    const pageFile = firstExistingFile(path.join(APP_DIR, dir.name), PAGE_FILES);
    if (!pageFile) continue;

    const source = fs.readFileSync(pageFile, "utf8");
    records.push(
      buildRecord(
        `/${dir.name}`,
        "static",
        STATIC_TITLES[dir.name] ? dir.name : null,
        path.relative(process.cwd(), pageFile),
        {
          title: readStringLiteral(source, "title"),
          description: readStringLiteral(source, "description"),
        }
      )
    );
  }

  return records;
}

export function collectLocationPages(): PageRecord[] {
  const records: PageRecord[] = [];

  if (!fs.existsSync(SERVICE_PAGES_DIR)) return records;

  for (const service of fs.readdirSync(SERVICE_PAGES_DIR, { withFileTypes: true })) {
    if (!service.isDirectory()) continue;

    const locationDir = path.join(SERVICE_PAGES_DIR, service.name, LOCATION_DIR_NAME);
    if (!fs.existsSync(locationDir)) continue;

    for (const city of fs.readdirSync(locationDir, { withFileTypes: true })) {
      if (!city.isDirectory()) continue;

      const pageFile = firstExistingFile(path.join(locationDir, city.name), INDEX_FILES);
      if (!pageFile) continue;

      records.push(
        buildRecord(
          `/service/${service.name}/${city.name}`,
          "location",
          service.name,
          path.relative(process.cwd(), pageFile),
          locationDefaults(service.name, city.name)
        )
      );
    }
  }

  return records;
}

export function collectServicePages(): PageRecord[] {
  return ServiceData.map((service: any) =>
    buildRecord(`/service/${service.slug}`, "service", service.slug, null, {
      title: service.meta_title ?? "",
      description: service.meta_description ?? "",
    })
  );
}

export function collectBlogPages(): PageRecord[] {
  return BlogsData.map((blog: any) =>
    buildRecord(`/blog/${blog.slug}`, "blog", null, null, {
      title: blog.meta_title ?? "",
      description: blog.meta_description ?? "",
    })
  );
}

export function collectProjectPages(): PageRecord[] {
  return ProjectsData.map((project: any) =>
    buildRecord(`/project/${project.slug}`, "project", null, null, {
      title: project.client ?? "",
      description: project.description ?? "",
    })
  );
}

export function collectTeamPages(): PageRecord[] {
  return TEAM_MEMBERS.map((member: any) =>
    buildRecord(`/our-team/${member.slug}`, "team", null, null, {
      title: member.name ?? "",
      description: member.role ?? "",
    })
  );
}

export function collectTeamListingPage(): PageRecord[] {
  const pageFile = firstExistingFile(path.join(APP_DIR, "our-team"), PAGE_FILES);
  if (!pageFile) return [];

  const source = fs.readFileSync(pageFile, "utf8");
  return [
    buildRecord("/our-team", "static", "our-team", path.relative(process.cwd(), pageFile), {
      title: readStringLiteral(source, "title"),
      description: readStringLiteral(source, "description"),
    }),
  ];
}

/**
 * Phase 1 scope: only /our-team pages read overrides at request time.
 * The rest of the site stays statically rendered and keeps the metadata
 * that is hardcoded in its own route file.
 */
export const LIVE_SCOPE: SeoPageType[] = ["team", "static"];

let cached: PageRecord[] | null = null;

export function getPageRegistry(): PageRecord[] {
  if (cached) return cached;

  const seen = new Set<string>();
  const all: PageRecord[] = [];

  const groups = [collectTeamListingPage(), collectTeamPages()];

  for (const record of groups.flat()) {
    if (seen.has(record.path)) continue;
    seen.add(record.path);
    all.push(record);
  }

  cached = all;
  return cached;
}
