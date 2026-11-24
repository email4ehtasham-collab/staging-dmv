import Image from "next/image";
import Link from "next/link";
import styles from "./services.module.scss";

export type ServiceCardData = {
  slug: string;
  eyebrow?: string;
  title: string;
  href?: string;
  image: string;
  imageAlt?: string;
  desc: string;
  ctaLabel?: string;
};

type ServiceCardProps = {
  service: ServiceCardData;
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" className={styles.arrowIcon}>
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={service.href ?? `/service/${service.slug}`}
      className={styles.card}
      aria-label={`View ${service.title} service`}
    >
      <div className={styles.media}>
        <Image
          src={service.image.replace(/^\./, "")}
          alt={service.imageAlt ?? service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 460px"
          className={styles.image}
        />
      </div>
      <div className={styles.body}>
        {service.eyebrow ? <span className={styles.cardEyebrow}>{service.eyebrow}</span> : null}
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardText}>{service.desc}</p>
        <span className={styles.details}>
          {service.ctaLabel ?? "View Details"}
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}
