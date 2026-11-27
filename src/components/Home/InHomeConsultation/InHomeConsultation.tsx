import Link from "next/link";
import Container from "@/components/Common/Container";
import styles from "./in-home-consultation.module.scss";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M6.4 3.4 8 7.1l-1.6 1.6a10.4 10.4 0 0 0 5 5l1.6-1.6 3.7 1.6v2.1a1.6 1.6 0 0 1-1.6 1.6C8.8 17.4 2.6 11.2 2.6 4.9a1.6 1.6 0 0 1 1.6-1.6h2.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type InHomeConsultationProps = {
  id?: string;
  headingId?: string;
  title?: string;
  /** "strong" renders the title as bold text instead of an H2 (for long CTA sentences). */
  titleAs?: "h2" | "strong";
  text?: string;
  ctaLabel?: string;
};

export default function InHomeConsultation({
  id = "consultation",
  headingId = "consultation-title",
  title = "Start With A Free In-Home Consultation.",
  titleAs = "h2",
  text = "We look at the space, listen to what you want and talk through your budget and timing. You get a free written estimate afterward.",
  ctaLabel = "Get a Free Estimate",
}: InHomeConsultationProps = {}) {
  return (
    <section id={id} className={styles.section} aria-labelledby={headingId}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.copy}>
            {titleAs === "strong" ? (
              <strong id={headingId} className={`${styles.title} ${styles.titleStrong}`}>
                {title}
              </strong>
            ) : (
              <h2 id={headingId} className={styles.title}>
                {title}
              </h2>
            )}
            <p className={styles.text}>{text}</p>
          </div>

          <div className={styles.actions}>
            <a className={styles.phoneButton} href="tel:+12407301292">
              <PhoneIcon />
              <span>+1 240-730-1292</span>
            </a>
            <Link className={styles.estimateButton} href="/contact-us" data-estimate-trigger>
              <span>{ctaLabel}</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
