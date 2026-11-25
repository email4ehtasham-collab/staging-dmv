import Link from "next/link";
import type { ReactNode } from "react";
import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import type { ServiceLocationHeroData } from "./types";
import styles from "./service-location.module.scss";

type ServiceLocationPageProps = ServiceLocationHeroData & {
  children?: ReactNode;
};

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="m10 2.6 2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L10 2.6Z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false">
      <path d="m4.5 2.5 3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServiceLocationPage({
  serviceName,
  serviceHref,
  locationName,
  badge,
  title,
  titleAccent,
  intro,
  credentials,
  factsTitle,
  factsCtaText,
  factsCtaLabel,
  facts,
  children,
}: ServiceLocationPageProps) {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="service-location-title">
        <Container>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronIcon />
            <Link href="/services">Services</Link>
            <ChevronIcon />
            <Link href={serviceHref}>{serviceName}</Link>
            <ChevronIcon />
            <span aria-current="page">{locationName}</span>
          </nav>

          <div className={styles.heroGrid}>
            <div className={styles.content}>
              <Badge className="nostars">{badge}</Badge>

              <h1 id="service-location-title" className={styles.title}>
                {title}
                {titleAccent ? (
                  <>
                    {" "}
                    <span className={styles.titleAccent}>{titleAccent}</span>
                  </>
                ) : null}
              </h1>

              <p className={styles.intro}>{intro}</p>

              <div className={styles.trustBadges} aria-label="Credentials and ratings">
                {credentials.map((credential) => (
                  <span className={styles.trustBadge} key={credential}>
                    {credential.toLowerCase().includes("google") ? <StarIcon /> : null}
                    <span>{credential}</span>
                  </span>
                ))}
              </div>

              <div className={styles.ctaRow}>
                <Button href="/contact-us" data-estimate-trigger>
                  Book a Free In-Home Consultation
                </Button>
                <a className={styles.phoneLink} href="tel:+12407301292">
                  +1 240-730-1292
                </a>
              </div>
            </div>

            <aside className={styles.factsCard} aria-labelledby="service-location-facts-title">
              <h2 id="service-location-facts-title" className={styles.factsTitle}>
                {factsTitle}
              </h2>

              <ul className={styles.factsList}>
                {facts.map((fact) => (
                  <li key={fact.label}>
                    <span className={styles.factLabel}>{fact.label}</span>
                    <span className={styles.factValue}>{fact.value}</span>
                    {fact.note ? <span className={styles.factNote}>{fact.note}</span> : null}
                  </li>
                ))}
              </ul>

              <div className={styles.factsCta}>
                <p>{factsCtaText}</p>
                <Button
                  href="/contact-us"
                  variant="secondary"
                  data-estimate-trigger
                  className={styles.factsButton}
                >
                  {factsCtaLabel}
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {children}
    </main>
  );
}
