import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import styles from "./bethesda-projects-reviews.module.scss";

const projects = [
  {
    location: "Northwest DC",
    image: "/images/service-area/washington-dc/adu-northwest-washington-dc.webp",
    imageAlt: "New accessory dwelling unit in Northwest Washington, DC",
    title: "New Accessory Dwelling Unit",
    text: "A second, self-contained home now stands on this Northwest Washington lot, built by our team through DOB review to final approval.",
    href: "/project/nw-dc-adu-construction",
  },
  {
    location: "DC Townhome",
    image: "/images/service-area/washington-dc/townhome-kitchen-renovation-washington-dc.webp",
    imageAlt: "Kitchen and first-floor renovation in a Washington, DC townhome",
    title: "Kitchen and First-Floor Renovation",
    text: "This townhome's entire main level was redone, with the kitchen rebuilt as part of one connected renovation.",
    href: "/project/dc-townhome-kitchen-first-floor-renovation",
  },
];

function HardHatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M4 15a8 8 0 0 1 16 0" />
      <path d="M2 15h20v3H2z" />
      <path d="M9 15V6a3 3 0 0 1 6 0v9" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export default function DcProjectsReviews() {
  return (
    <section className={styles.section} aria-label="Washington, DC projects">
      <Container>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article className={styles.projectCard} key={project.href}>
              <div>
                <div className={styles.media}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={styles.image}
                  />
                  <span className={styles.location}>{project.location}</span>
                </div>
                <div className={styles.projectBody}>
                  <div className={styles.badgeWrap}>
                    <Badge className={`${styles.cardBadge} nostars`} icon={<HardHatIcon />}>
                      Case Studies &amp; Projects
                    </Badge>
                  </div>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectText}>{project.text}</p>
                </div>
              </div>
              <div className={styles.projectFooter}>
                <Link href={project.href} className={styles.primaryLink}>
                  View the project <ArrowIcon />
                </Link>
                <Link href="/projects" className={styles.secondaryLink}>
                  Our remodeling projects page <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
