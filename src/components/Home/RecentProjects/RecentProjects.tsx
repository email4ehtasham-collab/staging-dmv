import type { ReactNode } from "react";
import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import ProjectsData from "@/data/projects/ProjectsData";
import ProjectCard, { type ProjectCardData } from "./ProjectCard";
import styles from "./recent-projects.module.scss";

type ProjectSource = {
  slug: string;
  category: string;
  serviceTypes?: string[];
  titles?: string[];
  client?: string;
  description?: string;
  topdesc?: string;
  imageAlt?: string;
  images?: { image?: string }[];
};

const recentProjectSlugs = [
  "dc-townhome-kitchen-first-floor-renovation",
  "primary-bathroom-powder-room-renovation-glover-park",
  "townhouse-renovation-silver-spring",
  "nw-dc-adu-construction",
  "bethesda-condo-full-renovation",
  "robert-b-porch-addition-over-garage",
];

function createSummary(text = "", maxLength = 155) {
  const normalized = text.replace(/\s+/g, " ").trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  const shortened = normalized.slice(0, maxLength);
  const lastSpace = shortened.lastIndexOf(" ");

  return `${shortened.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}...`;
}

export function createProjectCard(project: ProjectSource): ProjectCardData {
  const [categoryTitle, categoryLocation] = project.category
    .split("|")
    .map((part) => part.trim());
  const title = categoryTitle || project.titles?.[0] || project.client || "Recent Project";
  const location = categoryLocation || "Maryland & Washington, DC";

  return {
    title,
    location,
    text: createSummary(project.description || project.topdesc),
    href: `/project/${project.slug}`,
    image: project.images?.[0]?.image || "/images/logo.webp",
    imageAlt: project.imageAlt || `${title} in ${location}`,
  };
}

function getProjects(serviceType?: string): ProjectCardData[] {
  const allProjects = ProjectsData as ProjectSource[];

  if (serviceType) {
    return allProjects
      .filter((project) => project.serviceTypes?.includes(serviceType))
      .reverse()
      .map(createProjectCard);
  }

  return recentProjectSlugs
    .map((slug) => allProjects.find((project) => project.slug === slug))
    .filter((project): project is ProjectSource => Boolean(project))
    .map(createProjectCard);
}

type RecentProjectsProps = {
  serviceType?: string;
  projects?: ProjectCardData[];
  eyebrow?: string;
  title?: ReactNode;
  text?: ReactNode;
  headingId?: string;
  limit?: number;
  ctaLabel?: ReactNode;
  ctaHref?: string;
};

export default function RecentProjects({
  serviceType,
  projects: customProjects,
  eyebrow = "Case Studies & Projects",
  title = "Recent Remodeling Projects in Maryland and DC",
  text = "Each of these projects was planned, permitted and built by our team. See before and after photos of these and other jobs.",
  headingId = "projects-title",
  limit,
  ctaLabel = "View All Projects",
  ctaHref = "/projects",
}: RecentProjectsProps) {
  const projects = (customProjects ?? getProjects(serviceType)).slice(0, limit);

  return (
    <section id="projects" className={styles.section} aria-labelledby={headingId}>
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id={headingId}
            align="center"
            eyebrow={<Badge>{eyebrow}</Badge>}
            title={title}
            text={text}
          />
          <div className={styles.headerAction}>
            <Button href={ctaHref}>{ctaLabel}</Button>
          </div>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.href} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
