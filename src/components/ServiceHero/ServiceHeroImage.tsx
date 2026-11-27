import Link from "next/link";
import ResponsiveImage from "@/components/Common/ResponsiveImage";
import styles from "./service-hero-image.module.scss";

type ServiceHeroImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  showReviewCard?: boolean;
};

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/DMV+General+Contracting+Group+LLC/@39.0493761,-77.1200241,17z/data=!3m1!4b1!4m6!3m5!1s0x158dd0ef2148a11:0xceda33050d2dcdfb!8m2!3d39.049372!4d-77.1174492!16s%2Fg%2F11v3gbzc44?hl=en&entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D";

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false" className={styles.star}>
      <path d="m10 1.7 2.5 5.1 5.6.8-4.1 4 1 5.6-5-2.6-5 2.6 1-5.6-4.1-4 5.6-.8L10 1.7Z" fill="currentColor" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" className={styles.arrowIcon}>
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ServiceHeroImage({
  src,
  alt,
  priority = true,
  sizes = "(max-width: 1024px) 100vw, 560px",
  showReviewCard = true,
}: ServiceHeroImageProps) {
  return (
    <div className={styles.heroMedia}>
      <div className={styles.mediaFrame}>
        <ResponsiveImage
          src={src}
          alt={alt}
          className={styles.heroImage}
          priority={priority}
          sizes={sizes}
        />
        <div className={styles.mediaOverlay} />
      </div>

      {showReviewCard ? (
        <aside className={styles.reviewCard} aria-label="Google review rating">
          <div className={styles.reviewTop}>
            <span className={styles.rating}>4.9</span>
            <span className={styles.stars} role="img" aria-label="Rated 5 out of 5">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
          </div>
          <p className={styles.reviewText}>Homeowners rate us 4.9 out of 5 on Google.</p>
          <Link href={GOOGLE_REVIEWS_URL} className={styles.reviewLink}>
            <span>Read reviews</span>
            <ArrowIcon />
          </Link>
        </aside>
      ) : null}
    </div>
  );
}
