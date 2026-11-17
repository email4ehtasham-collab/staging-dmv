import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./cta-banner.module.scss";

export default function CtaBanner() {
  return (
    <section className={styles.section} aria-labelledby="cta-title">
      <Container>
        <div className={styles.inner}>
          <SectionHeading
            className={styles.heading}
            id="cta-title"
            size="large"
            tone="inverse"
            eyebrow={<Badge className={styles.badge}>Free Consultation</Badge>}
            title="Planning a Home Renovation or Upgrade?"
            text="Speak directly with our project managers & architectural designers today for a complimentary estimate."
          />

          <div className={styles.actions}>
            <Button href="/contact-us" data-estimate-trigger className={styles.estimateButton}>
              Get Free Estimate
            </Button>
            <Button href="tel:+12407301292" variant="secondary" className={styles.phoneButton}>
              (240) 730-1292
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
