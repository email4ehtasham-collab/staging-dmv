import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import { getFallbackHeroImage } from "@/components/ServiceHero/resolveServiceHeroImage";
import heroStyles from "./area-hero.module.scss";
import styles from "./service-area.module.scss";

/** One item in the stats bar under the hero (same layout as the service hubs). */
export type ServiceAreaGlanceItem = {
  label: string;
  value: ReactNode;
};

type ServiceAreaPageProps = {
  areaName: string;
  badgeLabel?: string;
  title: string;
  titleAccent?: string;
  intro: ReactNode;
  credentials: string[];
  /** Up to 4 items for the stats bar. */
  glance: ServiceAreaGlanceItem[];
  glanceLink?: { label: string; href: string };
  /** Text on the Google rating card over the hero photo. */
  reviewText: string;
  heroImage?: string;
  heroImageAlt?: string;
  /** Show "Service Areas" as the middle breadcrumb (off on the /service-area hub itself). */
  showParentCrumb?: boolean;
  children?: ReactNode;
};

function CheckIcon() {
  return (
    <svg className={heroStyles.trustIcon} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4.5 10.5 8 14l7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Stars() {
  return (
    <span className={heroStyles.stars} aria-label="5 out of 5 stars">
      ★★★★★
    </span>
  );
}

export default function ServiceAreaPage({
  areaName,
  badgeLabel = "Licensed General Contractor",
  title,
  titleAccent,
  intro,
  credentials,
  glance,
  glanceLink,
  reviewText,
  heroImage,
  heroImageAlt,
  showParentCrumb = true,
  children,
}: ServiceAreaPageProps) {
  const fallbackHero = getFallbackHeroImage();
  const heroSrc = heroImage || fallbackHero.src;
  const heroAlt = heroImageAlt || fallbackHero.alt;

  return (
    <main className={styles.page}>
      <section className={heroStyles.hero} aria-labelledby="service-area-title">
        <Container>
          <nav className={heroStyles.breadcrumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            {showParentCrumb ? (
              <>
                <Link href="/service-area">Service Areas</Link>
                <span aria-hidden="true">/</span>
              </>
            ) : null}
            <span aria-current="page">{areaName}</span>
          </nav>

          <div className={heroStyles.heroGrid}>
            <div className={heroStyles.heroContent}>
              <Badge className="nostars">{badgeLabel}</Badge>

              <h1 id="service-area-title" className={heroStyles.heroTitle}>
                {title}
                {titleAccent ? (
                  <>
                    {" "}
                    <span>{titleAccent}</span>
                  </>
                ) : null}
              </h1>

              <p className={heroStyles.heroText}>{intro}</p>

              <div className={heroStyles.heroActions}>
                <Button href="/contact-us" data-estimate-trigger icon={<ArrowIcon />}>
                  Get a Free Estimate
                </Button>
                <Button href="tel:+12407301292" variant="secondary">
                  +1 240-730-1292
                </Button>
              </div>

              <div className={heroStyles.trustRow} aria-label="Credentials and ratings">
                {credentials.map((credential) => (
                  <div className={heroStyles.trustItem} key={credential}>
                    {credential.toLowerCase().includes("google") ? <Stars /> : <CheckIcon />}
                    <span>{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={heroStyles.heroMedia}>
              <div className={heroStyles.heroImageWrap}>
                <Image
                  src={heroSrc}
                  alt={heroAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 699px"
                  className={heroStyles.image}
                />
              </div>

              <aside className={heroStyles.heroReview} aria-label="Google review rating">
                <div className={heroStyles.heroReviewTop}>
                  <span className={heroStyles.heroReviewScore}>4.9</span>
                  <Stars />
                </div>
                <p className={heroStyles.heroReviewText}>{reviewText}</p>
                <span className={heroStyles.heroReviewMeta}>Based on verified client feedback</span>
              </aside>
            </div>
          </div>

          <div className={heroStyles.heroGlance}>
            {glance.map((item) => (
              <div className={heroStyles.glanceItem} key={item.label}>
                <span>{item.label}</span>
                <span className={heroStyles.glanceValue}>{item.value}</span>
              </div>
            ))}
            {glanceLink ? (
              <Link href={glanceLink.href} className={heroStyles.glanceLink}>
                {glanceLink.label}
                <ArrowIcon />
              </Link>
            ) : null}
          </div>
        </Container>
      </section>

      {children}
    </main>
  );
}
