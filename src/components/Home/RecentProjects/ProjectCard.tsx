import Image from "next/image";
import Link from "next/link";
import styles from "./recent-projects.module.scss";

export type ProjectCardData = {
  location: string;
  title: string;
  text: string;
  href: string;
  image: string;
  imageAlt: string;
};

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className={styles.tagIcon}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className={styles.linkIcon}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProjectCard({ project }: { project: ProjectCardData }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
          className={styles.image}
        />
        <div className={styles.mediaLabels} aria-hidden="true">
          <span className={`${styles.badge} ${styles.badgeBefore}`}>Before</span>
          <span className={`${styles.badge} ${styles.badgeAfter}`}>After</span>
        </div>
      </div>
      <div className={styles.content}>
        <span className={styles.tag}>
          <LocationIcon />
          {project.location}
        </span>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardText}>{project.text}</p>
        <Link href={project.href} className={styles.details}>
          View project
          <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
