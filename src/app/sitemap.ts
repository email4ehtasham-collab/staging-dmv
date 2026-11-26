import { execFileSync } from "child_process";
import fs from "fs";
import path from "path";
import { MetadataRoute } from "next";
import ServiceData from "@/data/services/ServiceData";
import BlogsData from "@/data/blogs/BlogsData";
import ProjectsData from "@/data/projects/ProjectsData";
import { TEAM_MEMBERS } from "@/app/our-team/data";

export const dynamic = "force-static";

const SITE_URL = "https://www.dmv-gc.com";

const APP_DIR = path.join(process.cwd(), "src", "app");
const SERVICE_PAGES_DIR = path.join(APP_DIR, "service", "[slug]", "pages");
const LOCATION_DIR_NAME = "location-landing-pages";
const SERVICE_AREA_DIR = path.join(APP_DIR, "service-area");

const PAGE_FILES = ["page.tsx", "page.jsx", "page.ts", "page.js"];
const INDEX_FILES = ["index.tsx", "index.jsx"];

const EXCLUDED_ROUTES = new Set(["dashboard_login", "s_dashboard", "seo-dashboard", "seo_login"]);

const STATIC_META: Record<
  string,
  { priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }
> = {
  "": { priority: 1.0, changeFrequency: "weekly" },
  "about-us": { priority: 0.8, changeFrequency: "monthly" },
  "contact-us": { priority: 0.9, changeFrequency: "monthly" },
  "services": { priority: 0.9, changeFrequency: "weekly" },
  "projects": { priority: 0.8, changeFrequency: "weekly" },
  "blogs": { priority: 0.8, changeFrequency: "weekly" },
  "our-stories": { priority: 0.7, changeFrequency: "monthly" },
  "testimonials": { priority: 0.8, changeFrequency: "monthly" },
  "our-team": { priority: 0.7, changeFrequency: "monthly" },
  "faqs": { priority: 0.6, changeFrequency: "monthly" },
};

const DEFAULT_STATIC_META = {
  priority: 0.5,
  changeFrequency: "monthly",
} as const;

// Last-modified dates come from git history, not file system times: a fresh
// checkout gives every file the same time, which teaches Google to ignore them.
// If git history is not available (for example a shallow clone), the date is
// left out instead of guessed.
let gitDates: Map<string, Date> | null = null;

function loadGitDates(): Map<string, Date> {
  const dates = new Map<string, Date>();
  try {
    const log = execFileSync("git", ["log", "--format=@%cI", "--name-only", "--no-renames", "--", "src"], {
      cwd: process.cwd(),
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
      stdio: ["ignore", "pipe", "ignore"],
    });
    let current: Date | null = null;
    for (const line of log.split(/\r?\n/)) {
      if (line.startsWith("@")) {
        current = new Date(line.slice(1));
      } else if (line && current && !dates.has(line)) {
        dates.set(line, current);
      }
    }
  } catch {
    // git not available: dates are omitted
  }
  return dates;
}

function mtimeOf(file: string): Date | undefined {
  if (!gitDates) gitDates = loadGitDates();
  const relative = path.relative(process.cwd(), file).split(path.sep).join("/");
  return gitDates.get(relative);
}

function firstExistingFile(dir: string, names: string[]): string | null {
  for (const name of names) {
    const candidate = path.join(dir, name);
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

function getStaticPages(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const homeFile = firstExistingFile(APP_DIR, PAGE_FILES);
  entries.push({
    url: `${SITE_URL}/`,
    lastModified: homeFile ? mtimeOf(homeFile) : undefined,
    changeFrequency: STATIC_META[""].changeFrequency,
    priority: STATIC_META[""].priority,
  });

  for (const dir of fs.readdirSync(APP_DIR, { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;
    if (EXCLUDED_ROUTES.has(dir.name)) continue;
    if (dir.name.startsWith("[") || dir.name.startsWith("(")) continue;

    const pageFile = firstExistingFile(path.join(APP_DIR, dir.name), PAGE_FILES);
    if (!pageFile) continue;

    const meta = STATIC_META[dir.name] ?? DEFAULT_STATIC_META;
    entries.push({
      url: `${SITE_URL}/${dir.name}`,
      lastModified: mtimeOf(pageFile),
      changeFrequency: meta.changeFrequency,
      priority: meta.priority,
    });
  }

  return entries;
}

function getLocationPages(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  if (!fs.existsSync(SERVICE_PAGES_DIR)) return entries;

  for (const service of fs.readdirSync(SERVICE_PAGES_DIR, { withFileTypes: true })) {
    if (!service.isDirectory()) continue;

    const locationDir = path.join(SERVICE_PAGES_DIR, service.name, LOCATION_DIR_NAME);
    if (!fs.existsSync(locationDir)) continue;

    for (const city of fs.readdirSync(locationDir, { withFileTypes: true })) {
      if (!city.isDirectory()) continue;

      const pageFile = firstExistingFile(path.join(locationDir, city.name), INDEX_FILES);
      if (!pageFile) continue;

      entries.push({
        url: `${SITE_URL}/service/${service.name}/${city.name}`,
        lastModified: mtimeOf(pageFile),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}

function getServiceAreaPages(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  if (!fs.existsSync(SERVICE_AREA_DIR)) return entries;

  for (const area of fs.readdirSync(SERVICE_AREA_DIR, { withFileTypes: true })) {
    if (!area.isDirectory()) continue;
    if (area.name.startsWith("[") || area.name.startsWith("(")) continue;

    const pageFile = firstExistingFile(path.join(SERVICE_AREA_DIR, area.name), PAGE_FILES);
    if (!pageFile) continue;

    entries.push({
      url: `${SITE_URL}/service-area/${area.name}`,
      lastModified: mtimeOf(pageFile),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    ...getStaticPages(),
    ...getServiceAreaPages(),
    ...getLocationPages(),
  ];

  for (const service of ServiceData) {
    const serviceFile = firstExistingFile(path.join(SERVICE_PAGES_DIR, service.slug), INDEX_FILES);
    entries.push({
      url: `${SITE_URL}/service/${service.slug}`,
      lastModified: serviceFile ? mtimeOf(serviceFile) : undefined,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  for (const blog of BlogsData) {
    entries.push({
      url: `${SITE_URL}/blog/${blog.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const project of ProjectsData) {
    entries.push({
      url: `${SITE_URL}/project/${project.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const member of TEAM_MEMBERS) {
    entries.push({
      url: `${SITE_URL}/our-team/${member.slug}`,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  return entries;
}
