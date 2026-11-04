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

export default function InHomeConsultation() {
  return (
    <section className={styles.section} aria-labelledby="consultation-title">
      <Container>
        <div className={styles.inner}>
          <div className={styles.copy}>
            <h2 id="consultation-title" className={styles.title}>
              Start With A Free In-Home Consultation.
            </h2>
            <p className={styles.text}>
              We look at the space, listen to what you want and talk through your budget and timing. You get a free written estimate afterward.
            </p>
          </div>

          <div className={styles.actions}>
            <a className={styles.phoneButton} href="tel:+12407301292">
              <PhoneIcon />
              <span>(240) 730-1292</span>
            </a>
            <Link className={styles.estimateButton} href="/contact-us" data-estimate-trigger>
              <span>Get a Free Estimate</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
