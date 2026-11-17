import Image from "next/image";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import type { ServiceLocationOverviewData } from "./types";
import styles from "./location-sections.module.scss";

function CheckIcon() {
  return (
    <svg viewBox="0 0 18 18" fill="none" aria-hidden="true" focusable="false">
      <circle cx="9" cy="9" r="8" fill="currentColor" opacity="0.1" />
      <path d="m5.5 9.2 2.2 2.2 4.8-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function LocationOverview({
  eyebrow,
  title,
  text,
  paragraphs,
  itemsTitle,
  items,
  image,
  imageAlt,
  imageBadge,
  imageCaption,
  mediaFacts,
  note,
}: ServiceLocationOverviewData) {
  return (
    <section className={styles.section} aria-labelledby="service-location-overview-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="service-location-overview-title"
            align="center"
            eyebrow={<Badge>{eyebrow}</Badge>}
            title={title}
            text={text}
          />
        </div>

        <div className={styles.overviewGrid}>
          <div className={styles.copy}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <h3 className={styles.itemsTitle}>{itemsTitle}</h3>

            <ul className={styles.serviceList}>
              {items.map((item) => (
                <li className={styles.serviceItem} key={item.title}>
                  <span className={styles.serviceCheck}>
                    <CheckIcon />
                  </span>
                  <div>
                    <strong>{item.title}</strong>
                    {item.text ? <span>{item.text}</span> : null}
                  </div>
                </li>
              ))}
            </ul>

            <p className={styles.note}>{note}</p>
          </div>

          <aside className={styles.mediaCard}>
            <div className={styles.imageWrap}>
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                className={styles.image}
              />
            </div>
            <div className={styles.mediaBody}>
              <span className={styles.mediaBadge}>{imageBadge}</span>
              <p className={styles.mediaCaption}>{imageCaption}</p>
              <dl className={styles.mediaFacts}>
                {mediaFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
