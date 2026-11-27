import Link from "next/link";
import type { ReactNode } from "react";
import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import ServiceHeroImage from "@/components/ServiceHero/ServiceHeroImage";
import { getFallbackHeroImage } from "@/components/ServiceHero/resolveServiceHeroImage";
import styles from "./service-area.module.scss";

export type ServiceAreaFact = {
  label: string;
  value: ReactNode;
};

type ServiceAreaPageProps = {
  areaName: string;
  badgeLabel?: string;
  title: string;
  titleAccent?: string;
  intro: string;
  credentials: string[];
  factsTitle: string;
  factsSubtitle: string;
  facts: ServiceAreaFact[];
  heroImage?: string;
  heroImageAlt?: string;
  children?: ReactNode;
};

function ShieldIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M10 2.5 16 5v4.5c0 4-2.6 6.9-6 8-3.4-1.1-6-4-6-8V5l6-2.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="m7 10 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M6.5 3.5 8 7l-1.5 1.5a10 10 0 0 0 5 5L13 12l3.5 1.5v2A1.5 1.5 0 0 1 15 17C8.9 17 3 11.1 3 5a1.5 1.5 0 0 1 1.5-1.5h2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="m10 2.6 2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L10 2.6Z" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <rect x="4.5" y="4" width="11" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 4V3.2c0-.4.3-.7.7-.7h3.6c.4 0 .7.3.7.7V4" stroke="currentColor" strokeWidth="1.5" />
      <path d="m7.5 10 1.5 1.5 3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path d="M3.5 10h13M11.5 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServiceAreaPage({
  areaName,
  badgeLabel = "Licensed General Contractor",
  title,
  titleAccent,
  intro,
  credentials,
  factsTitle,
  factsSubtitle,
  facts,
  heroImage,
  heroImageAlt,
  children,
}: ServiceAreaPageProps) {
  const fallbackHero = getFallbackHeroImage();
  const heroSrc = heroImage || fallbackHero.src;
  const heroAlt = heroImageAlt || fallbackHero.alt;

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="service-area-title">
        <Container>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronIcon />
            <Link href="/#areas">Service Areas</Link>
            <ChevronIcon />
            <span aria-current="page">{areaName}</span>
          </nav>

          <div className={styles.heroGrid}>
            <div className={styles.content}>
              <Badge className="nostars" icon={<ShieldIcon />}>
                {badgeLabel}
              </Badge>

              <h1 id="service-area-title" className={styles.title}>
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
                <Button href="/contact-us" data-estimate-trigger icon={<ArrowIcon />} variant="secondary">
                  Get a Free Estimate
                </Button>
                <Button
                  href="tel:+12407301292"
                  icon={<PhoneIcon />}
                  iconPosition="left"
                >
                  +1 240-730-1292
                </Button>
              </div>
            </div>

            <ServiceHeroImage src={heroSrc} alt={heroAlt} />
          </div>
        </Container>
      </section>

      <section className={styles.factsSection} aria-label={factsTitle}>
        <Container>
          <aside className={styles.factsCard} aria-labelledby="facts-title">
            <div className={styles.factsHeader}>
              <span className={styles.factsIcon}>
                <ClipboardIcon />
              </span>
              <div>
                <h2 id="facts-title">{factsTitle}</h2>
                <p>{factsSubtitle}</p>
              </div>
            </div>

            <ul className={styles.factsList}>
              {facts.map((fact) => (
                <li key={fact.label}>
                  <span className={styles.factLabel}>{fact.label}</span>
                  <span className={styles.factValue}>
                    {fact.label.toLowerCase().includes("google") ? <StarIcon /> : null}
                    {fact.value}
                  </span>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>

      {children}
    </main>
  );
}
