import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./recent-projects.module.scss";

const projects = [
  {
    location: "Washington, DC",
    title: "Townhome Kitchen Renovation",
    text: "A 1970s kitchen opened up with a brighter layout, smarter storage and better circulation.",
    href: "/project/dc-townhome-kitchen-first-floor-renovation",
    image: "/images/projects-galary/calvert-st-kitchen/1.jpg",
  },
  {
    location: "Glover Park, Washington, D.C",
    title: "Bathroom Remodeling",
    text: "A primary bath and powder room refresh with a freestanding tub and improved layout.",
    href: "/project/primary-bathroom-powder-room-renovation-glover-park",
    image: "/images/services/bathroom.webp",
  },
  {
    location: "Silver Spring, Maryland",
    title: "Complete Townhouse Renovation",
    text: "A four-bedroom townhouse rebuilt with new floors, an open kitchen and a finished basement.",
    href: "/project/townhouse-renovation-silver-spring",
    image: "/images/projects-galary/townhouse-renovation-silver-spring/1.jpg",
  },
  {
    location: "Northwest Washington, DC",
    title: "ADU Construction",
    text: "A detached garage converted into a bright, fully functional accessory dwelling unit.",
    href: "/project/nw-dc-adu-construction",
    image: "/images/projects-galary/57-washignton-garage/main.jpg",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function RecentProjects() {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="projects-title"
            align="center"
            eyebrow={<Badge>Case Studies &amp; Projects</Badge>}
            title="Recent Remodeling Projects in Maryland and DC"
            text={
              <>
                Each of these projects was planned, permitted and built by our team. See before and after photos of these and other jobs on our{" "}
                <Link href="/projects">remodeling projects page</Link>.
              </>
            }
          />
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <Link key={project.title} href={project.href} className={styles.card}>
              <Image
                src={project.image}
                alt={`${project.title} in ${project.location}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 345px"
                className={styles.image}
              />
              <div className={styles.overlay} />
              <div className={styles.content}>
                <span className={styles.location}>{project.location}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardText}>{project.text}</p>
                <span className={styles.details}>
                  View Details
                  <ArrowIcon />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
