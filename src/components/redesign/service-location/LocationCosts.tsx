import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import type { ServiceLocationCostsData } from "./types";
import styles from "./location-sections.module.scss";

export default function LocationCosts({
  eyebrow,
  title,
  text,
  featured,
  rows,
  note,
  ctaLabel,
}: ServiceLocationCostsData) {
  return (
    <section
      id="service-location-pricing"
      className={`${styles.section} ${styles.sectionSoft}`}
      aria-labelledby="service-location-cost-title"
    >
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="service-location-cost-title"
            align="center"
            eyebrow={<Badge>{eyebrow}</Badge>}
            title={title}
            text={text}
          />
        </div>

        {featured ? (
          <div className={styles.costFeatured}>
            <strong>{featured.range}</strong>
            <span>{featured.label}</span>
          </div>
        ) : null}

        <div className={styles.costGrid}>
          {rows.map((row) => (
            <article className={styles.costCard} key={row.level}>
              {row.badge ? <span className={styles.costBadge}>{row.badge}</span> : null}
              <span className={styles.costLevel}>{row.level}</span>
              <h3 className={styles.costTitle}>{row.title}</h3>
              <strong className={styles.costRange}>{row.range}</strong>
              <p className={styles.costText}>{row.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.costFooter}>
          <p>{note}</p>
          {ctaLabel ? (
            <Button href="/contact-us" data-estimate-trigger>
              {ctaLabel}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
