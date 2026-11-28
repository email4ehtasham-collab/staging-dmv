// Header dropdown menus. Only list pages that are live (checked against the
// sitemap and a 200 response on 2026-11-26). Add a city here when its page goes live.

export type NavLink = { label: string; href: string };

export const serviceGroups: { title: string; links: NavLink[] }[] = [
  {
    title: "Remodeling",
    links: [
      { label: "Kitchen Remodeling", href: "/service/kitchen-remodeling" },
      { label: "Bathroom Remodeling", href: "/service/bathroom-remodeling" },
      { label: "Basement Remodeling", href: "/service/basement-remodeling" },
      { label: "Whole-Home Renovation", href: "/service/whole-home-renovation" },
      { label: "Home Additions", href: "/service/home-additions" },
      { label: "ADU Builder", href: "/service/adu" },
      { label: "Design-Build", href: "/service/design-build" },
    ],
  },
  {
    title: "Trades",
    links: [
      { label: "Electrical Services", href: "/service/electrical-services" },
      { label: "Plumbing Services", href: "/service/plumbing-services" },
      { label: "HVAC", href: "/service/hvac" },
      { label: "Framing", href: "/service/framing" },
      { label: "Drywall", href: "/service/drywall" },
      { label: "Flooring", href: "/service/flooring-remodeling" },
      { label: "Carpet Installation", href: "/service/carpet-installation" },
      { label: "Roofing", href: "/service/roofing" },
      { label: "Siding Installation", href: "/service/siding-installation" },
    ],
  },
  {
    title: "Outdoor",
    links: [
      { label: "Decks", href: "/service/decks" },
      { label: "Patios", href: "/service/patios" },
      { label: "Fence Installation", href: "/service/fence-installation" },
      { label: "Concrete", href: "/service/concrete" },
      { label: "Hardscaping", href: "/service/hardscaping" },
      { label: "Junk Removal", href: "/service/junk-removal" },
    ],
  },
];

const CITY_NAMES: Record<string, string> = {
  "bethesda-md": "Bethesda, MD",
  "cabin-john-md": "Cabin John, MD",
  "chevy-chase-md": "Chevy Chase, MD",
  "gaithersburg-md": "Gaithersburg, MD",
  "garrett-park-md": "Garrett Park, MD",
  "kensington-md": "Kensington, MD",
  "laurel-md": "Laurel, MD",
  "north-bethesda-md": "North Bethesda, MD",
  "potomac-md": "Potomac, MD",
  "rockville-md": "Rockville, MD",
  "silver-spring-md": "Silver Spring, MD",
  "washington-dc": "Washington, DC",
  "wheaton-md": "Wheaton, MD",
};

const SERVICE_CITIES: { service: string; slug: string; cities: string[] }[] = [
  {
    service: "Kitchen Remodeling",
    slug: "kitchen-remodeling",
    cities: ["bethesda-md", "cabin-john-md", "chevy-chase-md", "gaithersburg-md", "garrett-park-md", "kensington-md", "potomac-md", "rockville-md", "silver-spring-md", "washington-dc", "wheaton-md"],
  },
  {
    service: "Bathroom Remodeling",
    slug: "bathroom-remodeling",
    cities: ["bethesda-md", "cabin-john-md", "chevy-chase-md", "gaithersburg-md", "garrett-park-md", "laurel-md", "north-bethesda-md", "potomac-md", "rockville-md", "silver-spring-md", "washington-dc", "wheaton-md"],
  },
  {
    service: "Basement Remodeling",
    slug: "basement-remodeling",
    cities: ["bethesda-md", "cabin-john-md", "chevy-chase-md", "gaithersburg-md", "garrett-park-md", "kensington-md", "laurel-md", "north-bethesda-md", "potomac-md", "rockville-md", "silver-spring-md", "washington-dc", "wheaton-md"],
  },
  {
    service: "ADU Builder",
    slug: "adu",
    cities: ["bethesda-md", "cabin-john-md", "chevy-chase-md", "gaithersburg-md", "garrett-park-md", "kensington-md", "laurel-md", "north-bethesda-md", "potomac-md", "rockville-md", "silver-spring-md", "washington-dc", "wheaton-md"],
  },
  {
    service: "Home Additions",
    slug: "home-additions",
    cities: ["bethesda-md", "cabin-john-md", "chevy-chase-md", "gaithersburg-md", "garrett-park-md", "laurel-md", "north-bethesda-md", "potomac-md", "rockville-md", "silver-spring-md", "washington-dc", "wheaton-md"],
  },
  {
    service: "Design-Build",
    slug: "design-build",
    cities: ["cabin-john-md", "chevy-chase-md", "gaithersburg-md", "kensington-md", "laurel-md", "north-bethesda-md", "potomac-md", "rockville-md", "silver-spring-md", "wheaton-md"],
  },
];

// Anchor text names the service and the city, so no anchor points to two pages.
export const servicesByArea = SERVICE_CITIES.map(({ service, slug, cities }) => ({
  service,
  hubHref: `/service/${slug}`,
  links: cities.map((city) => ({
    label: `${service} in ${CITY_NAMES[city]}`,
    href: `/service/${slug}/${city}`,
  })),
}));

export const areaLinks: NavLink[] = [{ label: "Bethesda, MD", href: "/service-area/bethesda-md" }];
