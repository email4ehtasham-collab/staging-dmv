import fs from "fs";
import path from "path";
import ServiceData from "@/data/services/ServiceData";
import { ALL_NAV_HREFS } from "./navigation";

// Build/dev check: warns once per process if a header link has no matching route.
// Runs on the server (called from the root layout); it never changes the page.
let checked = false;

function routeExists(href: string): boolean {
  if (!href.startsWith("/") || href.includes("#")) return false;
  const appDir = path.join(process.cwd(), "src", "app");
  const pageFiles = ["page.tsx", "page.ts", "page.jsx", "page.js"];
  if (pageFiles.some((file) => fs.existsSync(path.join(appDir, href, file)))) return true;
  const hub = href.match(/^\/service\/([^/]+)$/);
  if (hub) return (ServiceData as { slug: string }[]).some((service) => service.slug === hub[1]);
  return false;
}

export function checkNavigationRoutes(): void {
  if (checked) return;
  checked = true;
  try {
    const missing = ALL_NAV_HREFS.filter((href) => !routeExists(href));
    if (missing.length) {
      console.warn(`[navigation] Header links with no matching page (would 404): ${missing.join(", ")}`);
    }
  } catch {
    // The check is advisory only.
  }
}
