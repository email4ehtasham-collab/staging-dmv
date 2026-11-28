// Header navigation: one source for the desktop and mobile menus.
// Every href must be a real page (no "#" anchors). Adding a city = one line in AREA_LINKS.
// src/config/navigationCheck.ts warns at build/dev time if an href has no matching route.

export type NavLink = { label: string; href: string };
export type NavGroup = { title: string; links: NavLink[] };

export const SERVICE_GROUPS: NavGroup[] = [
  {
    title: "Remodeling",
    links: [
      { label: "Kitchen Remodeling", href: "/service/kitchen-remodeling" },
      { label: "Bathroom Remodeling", href: "/service/bathroom-remodeling" },
      { label: "Basement Remodeling", href: "/service/basement-remodeling" },
      { label: "Whole-Home Renovation", href: "/service/whole-home-renovation" },
      { label: "Design-Build", href: "/service/design-build" },
    ],
  },
  {
    title: "Additions & ADUs",
    links: [
      { label: "Home Additions", href: "/service/home-additions" },
      { label: "ADU Construction", href: "/service/adu" },
    ],
  },
  {
    title: "Interior Trades",
    links: [
      { label: "Flooring", href: "/service/flooring-remodeling" },
      { label: "Carpet Installation", href: "/service/carpet-installation" },
      { label: "Drywall", href: "/service/drywall" },
      { label: "Framing", href: "/service/framing" },
      { label: "Electrical Services", href: "/service/electrical-services" },
      { label: "Plumbing Services", href: "/service/plumbing-services" },
      { label: "HVAC", href: "/service/hvac" },
    ],
  },
  {
    title: "Exterior & Outdoor",
    links: [
      { label: "Roofing", href: "/service/roofing" },
      { label: "Siding Installation", href: "/service/siding-installation" },
      { label: "Decks", href: "/service/decks" },
      { label: "Patios", href: "/service/patios" },
      { label: "Hardscaping", href: "/service/hardscaping" },
      { label: "Concrete", href: "/service/concrete" },
      { label: "Fence Installation", href: "/service/fence-installation" },
      { label: "Junk Removal", href: "/service/junk-removal" },
    ],
  },
];

export const SERVICES_PAGE: NavLink = { label: "Services", href: "/services" };
export const VIEW_ALL_SERVICES: NavLink = { label: "View All Services", href: "/services" };

export const AREA_LINKS: NavLink[] = [
  { label: "Bethesda, MD", href: "/service-area/bethesda-md" },
  { label: "Washington, DC", href: "/service-area/washington-dc" },
];

/** Plain links after the two dropdowns, in display order. */
export const MAIN_LINKS: NavLink[] = [
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/testimonials" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Team", href: "/our-team" },
  { label: "FAQs", href: "/faqs" },
];

export const HEADER_PHONE = { label: "+1 240-730-1292", href: "tel:+12407301292" };
export const HEADER_CTA: NavLink = { label: "Get a Free Estimate", href: "/contact-us" };

/** Every page URL the header links to (used by the route check). */
export const ALL_NAV_HREFS: string[] = [
  SERVICES_PAGE.href,
  ...SERVICE_GROUPS.flatMap((group) => group.links.map((link) => link.href)),
  ...AREA_LINKS.map((link) => link.href),
  ...MAIN_LINKS.map((link) => link.href),
  HEADER_CTA.href,
];
