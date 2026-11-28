// Link to a service's page for one city, when that city page is registered;
// otherwise fall back to the service hub. Server-side only (reads the route registry).
import { getLocationStaticParams } from "@/app/service/getDynamicLocationComponent";

const cityPages = new Set(
  (getLocationStaticParams() as { slug: string; location: string }[]).map(({ slug, location }) => `${slug}/${location}`)
);

export function cityServiceHref(slug: string, citySlug?: string): string {
  return citySlug && cityPages.has(`${slug}/${citySlug}`) ? `/service/${slug}/${citySlug}` : `/service/${slug}`;
}
