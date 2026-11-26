// Homepage-only images. These files are copies made for the homepage, so no
// photo appears twice on the page and none is shared with another page.
// Geotags (EXIF GPS) point to the Google Business Profile pin in North Bethesda, MD.
import ProjectsData from "@/data/projects/ProjectsData";
import type { ServiceCardOverride } from "@/components/Home/Services/Services";
import type { ProjectCardData } from "@/components/Home/RecentProjects/ProjectCard";

export const GOOGLE_BUSINESS_PROFILE_URL =
  "https://www.google.com/maps/place/DMV+General+Contracting+Group+LLC/@39.0493761,-77.1200241,17z/data=!3m1!4b1!4m6!3m5!1s0x158dd0ef2148a11:0xceda33050d2dcdfb!8m2!3d39.049372!4d-77.1174492!16s%2Fg%2F11v3gbzc44?hl=en";

export const homeServiceOverrides: ServiceCardOverride[] = [
  {
    slug: "kitchen-remodeling",
    image: "/images/home/kitchen-remodeling-galley-kitchen-washington-dc.webp",
    imageAlt: "Kitchen remodeling: galley kitchen with blue lower cabinets and white uppers in Washington, DC",
  },
  {
    slug: "bathroom-remodeling",
    image: "/images/home/bathroom-remodeling-marble-double-vanity.webp",
    imageAlt: "Bathroom remodeling: marble bathroom with a double vanity and a frameless glass shower",
  },
  {
    slug: "basement-remodeling",
    image: "/images/home/basement-remodeling-finished-family-room.webp",
    imageAlt: "Basement remodeling: finished basement family room with an electric fireplace and kitchenette",
  },
  {
    slug: "adu",
    image: "/images/home/adu-builder-accessory-dwelling-unit.webp",
    imageAlt: "Accessory dwelling unit (ADU) project built by DMV General Contracting Group",
  },
  {
    slug: "whole-home-renovation",
    image: "/images/home/whole-home-renovation-staircase-silver-spring-md.webp",
    imageAlt: "Whole-home renovation: new oak staircase with black iron balusters in a Silver Spring, MD townhouse",
  },
  {
    slug: "home-additions",
    image: "/images/home/home-addition-folding-glass-doors.webp",
    imageAlt: "Home addition with folding wood-and-glass doors opening to the yard",
  },
  {
    slug: "design-build",
    image: "/images/home/design-build-remodel-floor-plans.webp",
    imageAlt: "Design-build planning: drawing remodel floor plans before construction",
  },
];

const homeProjectImages: Record<string, { image: string; imageAlt: string }> = {
  "dc-townhome-kitchen-first-floor-renovation": {
    image: "/images/home/townhome-kitchen-renovation-washington-dc.webp",
    imageAlt: "Townhome kitchen with white cabinets and a wood island after a first-floor renovation in Washington, DC",
  },
  "primary-bathroom-powder-room-renovation-glover-park": {
    image: "/images/home/primary-bathroom-renovation-glover-park-dc.webp",
    imageAlt: "Primary bathroom with a double vanity and glass shower in Glover Park, Washington, DC",
  },
  "townhouse-renovation-silver-spring": {
    image: "/images/home/townhouse-renovation-silver-spring-md.webp",
    imageAlt: "Open first floor and new kitchen after a complete townhouse renovation in Silver Spring, MD",
  },
  "nw-dc-adu-construction": {
    image: "/images/home/adu-construction-northwest-washington-dc.webp",
    imageAlt: "Two-story ADU built behind a rowhouse in Northwest Washington, DC",
  },
  "bethesda-condo-full-renovation": {
    image: "/images/home/condo-kitchen-renovation-bethesda-md.webp",
    imageAlt: "Condo kitchen with white cabinets and stainless appliances after a full renovation in Bethesda, MD",
  },
  "robert-b-porch-addition-over-garage": {
    image: "/images/home/screened-porch-addition-chevy-chase-md.webp",
    imageAlt: "Screened porch addition built above a garage in Chevy Chase, MD",
  },
};

type ProjectSource = {
  slug: string;
  category: string;
  titles?: string[];
  client?: string;
  description?: string;
  topdesc?: string;
};

// Same card text as the RecentProjects default; only the image and alt differ.
function createSummary(text = "", maxLength = 155) {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) {
    return normalized;
  }
  const shortened = normalized.slice(0, maxLength);
  const lastSpace = shortened.lastIndexOf(" ");
  return `${shortened.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}...`;
}

export const homeRecentProjects: ProjectCardData[] = Object.keys(homeProjectImages)
  .map((slug) => (ProjectsData as ProjectSource[]).find((project) => project.slug === slug))
  .filter((project): project is ProjectSource => Boolean(project))
  .map((project) => {
    const [categoryTitle, categoryLocation] = project.category.split("|").map((part) => part.trim());
    return {
      title: categoryTitle || project.titles?.[0] || project.client || "Recent Project",
      location: categoryLocation || "Maryland & Washington, DC",
      text: createSummary(project.description || project.topdesc),
      href: `/project/${project.slug}`,
      ...homeProjectImages[project.slug],
    };
  });
