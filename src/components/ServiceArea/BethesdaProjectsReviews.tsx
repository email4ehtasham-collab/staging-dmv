import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import styles from "./bethesda-projects-reviews.module.scss";

const googleReviewsUrl =
  "https://www.google.com/maps/place/DMV+General+Contracting+Group+LLC/@39.0493761,-77.1200241,17z/data=!3m1!4b1!4m6!3m5!1s0x158dd0ef2148a11:0xceda33050d2dcdfb!8m2!3d39.049372!4d-77.1174492!16s%2Fg%2F11v3gbzc44?hl=en&entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D";

type ProjectContent = {
  badgeLabel?: string;
  location?: string;
  image?: string;
  imageAlt?: string;
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

type ReviewsContent = {
  badgeLabel?: string;
  title?: string;
  score?: string;
  text?: ReactNode;
  googleCtaLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

type BethesdaProjectsReviewsProps = {
  project?: ProjectContent;
  reviews?: ReviewsContent;
};

function HardHatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M4 15a8 8 0 0 1 16 0" />
      <path d="M2 15h20v3H2z" />
      <path d="M9 15V6a3 3 0 0 1 6 0v9" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="m10 1.8 2.47 5 5.53.8-4 3.9.94 5.5L10 14.4 5.06 17l.94-5.5-4-3.9 5.53-.8L10 1.8Z" />
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

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M21.8 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.5a4.7 4.7 0 0 1-2 3.1v2.6h3.3c1.9-1.8 3-4.4 3-7.5Z" />
      <path d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.6c-.9.6-2.1 1-3.4 1a5.9 5.9 0 0 1-5.6-4.1H3v2.7A10 10 0 0 0 12 22Z" />
      <path d="M6.4 13.9a6 6 0 0 1 0-3.8V7.4H3a10 10 0 0 0 0 9.2l3.4-2.7Z" />
      <path d="M12 5.9c1.5 0 2.8.5 3.9 1.5l2.9-2.9A9.8 9.8 0 0 0 12 2a10 10 0 0 0-9 5.4l3.4 2.7A5.9 5.9 0 0 1 12 5.9Z" />
    </svg>
  );
}

export default function BethesdaProjectsReviews({
  project = {},
  reviews = {},
}: BethesdaProjectsReviewsProps) {
  const {
    badgeLabel: projectBadgeLabel = "Projects in Bethesda",
    location = "Bethesda, MD",
    image = "/images/projects-galary/condo-renovation-in-bethesda/3.jpg",
    imageAlt = "Full condo renovation in Bethesda, Maryland",
    title: projectTitle = "Full Condo Renovation",
    text: projectText = "We renovated a Bethesda condominium top to bottom as one coordinated project instead of a string of separate jobs.",
    primaryLabel = "View the project",
    primaryHref = "/project/bethesda-condo-full-renovation",
    secondaryLabel = "Our remodeling projects page",
    secondaryHref = "/projects",
  } = project;

  const {
    badgeLabel: reviewsBadgeLabel = "Testimonials",
    title: reviewsTitle = "What Bethesda Homeowners Say",
    score = "4.9",
    text: reviewsText = (
      <>
        Homeowners in Bethesda and across the region give us a 4.9 rating on Google. Read those reviews, and the longer
        write-ups on our{" "}
        <Link href="/testimonials" className={styles.inlineLink}>
          client reviews page
        </Link>
        , before you hire anyone.
      </>
    ),
    googleCtaLabel = "Read Reviews on Google",
    secondaryLabel: reviewsSecondaryLabel = "Client Reviews",
    secondaryHref: reviewsSecondaryHref = "/testimonials",
  } = reviews;

  return (
    <section className={styles.section} aria-label="Bethesda projects and testimonials">
      <Container>
        <div className={styles.grid}>
          <article className={styles.projectCard}>
            <div>
              <div className={styles.media}>
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.image}
                />
                <span className={styles.location}>{location}</span>
              </div>
              <div className={styles.projectBody}>
                <div className={styles.badgeWrap}>
                  <Badge className={`${styles.cardBadge} nostars`} icon={<HardHatIcon />}>
                    {projectBadgeLabel}
                  </Badge>
                </div>
                <h2 className={styles.projectTitle}>{projectTitle}</h2>
                <p className={styles.projectText}>{projectText}</p>
              </div>
            </div>
            <div className={styles.projectFooter}>
              <Link href={primaryHref} className={styles.primaryLink}>
                {primaryLabel} <ArrowIcon />
              </Link>
              {secondaryLabel && secondaryHref ? (
                <Link href={secondaryHref} className={styles.secondaryLink}>
                  {secondaryLabel} <ArrowIcon />
                </Link>
              ) : null}
            </div>
          </article>

          <article className={styles.reviewsCard}>
            <div>
              <div className={styles.badgeWrap}>
                <Badge variant="accent" className={`${styles.cardBadge} nostars`} icon={<StarIcon />}>
                  {reviewsBadgeLabel}
                </Badge>
              </div>
              <h2 className={styles.reviewsTitle}>{reviewsTitle}</h2>

              <div className={styles.rating}>
                <strong className={styles.score}>{score}</strong>
                <div>
                  <div className={styles.stars} aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} />
                    ))}
                  </div>
                  <span className={styles.ratingLabel}>Google rating</span>
                </div>
              </div>

              <div className={styles.reviewsText}>{reviewsText}</div>
            </div>

            <div className={styles.reviewsFooter}>
              <Button
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<GoogleIcon />}
                iconPosition="left"
              >
                {googleCtaLabel}
              </Button>
              {reviewsSecondaryLabel && reviewsSecondaryHref ? (
                <Button
                  href={reviewsSecondaryHref}
                  variant="secondary"
                  className={styles.secondaryButton}
                >
                  {reviewsSecondaryLabel}
                </Button>
              ) : null}
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
