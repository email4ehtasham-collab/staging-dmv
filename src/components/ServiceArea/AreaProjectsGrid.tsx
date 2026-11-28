import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import ProjectCard from "@/components/Home/RecentProjects/ProjectCard";
import { createProjectCard } from "@/components/Home/RecentProjects/RecentProjects";
import recentStyles from "@/components/Home/RecentProjects/recent-projects.module.scss";
import projectData from "@/data/projects/ProjectsData";
import AreaProjectsShowMore from "./AreaProjectsShowMore";

type AreaProjectsGridProps = {
  badgeLabel: string;
  title: string;
  text?: string;
  /** Project slugs, in display order. */
  slugs: string[];
  /** Cards shown before "Show more" (all cards stay in the HTML). */
  initialCount?: number;
};

type ProjectSource = Parameters<typeof createProjectCard>[0];

// Project cards for a service-area page, in the same design as the hubs' "Recent Projects".
export default function AreaProjectsGrid({ badgeLabel, title, text, slugs, initialCount = 6 }: AreaProjectsGridProps) {
  const projects = slugs
    .map((slug) => (projectData as ProjectSource[]).find((project) => project.slug === slug))
    .filter((project): project is ProjectSource => Boolean(project))
    .map(createProjectCard);

  return (
    <section id="projects" className={recentStyles.section} aria-labelledby="area-projects-title">
      <Container>
        <div className={recentStyles.header}>
          <SectionHeading
            id="area-projects-title"
            align="center"
            eyebrow={<Badge>{badgeLabel}</Badge>}
            title={title}
            text={text}
          />
          <div className={recentStyles.headerAction}>
            <Button href="/projects">View All Projects</Button>
          </div>
        </div>

        <AreaProjectsShowMore initialCount={initialCount} gridClassName={recentStyles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.href} project={project} />
          ))}
        </AreaProjectsShowMore>
      </Container>
    </section>
  );
}
