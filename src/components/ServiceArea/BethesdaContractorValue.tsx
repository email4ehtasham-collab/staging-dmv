import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./bethesda-contractor-value.module.scss";

function BuildingShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M4 21V7l8-4 8 4v14" />
      <path d="M9 21v-5h6v5" />
      <path d="m12 7 4 1.5V12c0 2.5-1.7 4-4 5-2.3-1-4-2.5-4-5V8.5L12 7Z" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-3-3 2.3-2.3Z" />
    </svg>
  );
}

export default function BethesdaContractorValue() {
  return (
    <section id="contractor-value" className={styles.section} aria-labelledby="contractor-value-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="contractor-value-title"
            align="center"
            eyebrow={<Badge>General Contractor Value</Badge>}
            title="Is It Worth Getting a General Contractor?"
            text={
              <>
                <strong>Yes, once a job spans several trades or needs a permit.</strong> A general contractor usually charges{" "}
                10% to 20% of the project cost, and up to 25% or 30% on complex work. That fee covers hiring and scheduling the trades, pulling permits and standing behind the result. For a single-trade repair, such as a faucet or a wall patch, hiring that trade directly is usually cheaper.
              </>
            }
          />
        </div>

        <div className={styles.layout}>
          <div className={styles.feeCard}>
            <div>
              <span className={styles.feeLabel}>Typical General Contractor Fee</span>
              <span className={styles.feeValue}>10%–20%</span>
              <p className={styles.feeText}>of the project cost — up to 25% or 30% on complex work</p>
            </div>
            <div className={styles.feeFooter}>Covers scheduling, trade coordination, permits &amp; warranty.</div>
          </div>

          <div className={styles.compare}>
            <article className={`${styles.compareCard} ${styles.compareCardActive}`}>
              <div>
                <span className={styles.compareIcon}>
                  <BuildingShieldIcon />
                </span>
                <span className={styles.compareLabel}>Recommended When</span>
                <h3>Hire a GC</h3>
                <p>Several trades or a permit</p>
              </div>
              <div className={styles.compareFooter}>Full project management &amp; accountability</div>
            </article>

            <article className={styles.compareCard}>
              <div>
                <span className={`${styles.compareIcon} ${styles.compareIconNeutral}`}>
                  <WrenchIcon />
                </span>
                <span className={`${styles.compareLabel} ${styles.compareLabelNeutral}`}>Alternative When</span>
                <h3>Hire the Trade</h3>
                <p>A faucet or a wall patch</p>
              </div>
              <div className={styles.compareFooter}>Cheaper for single-trade small repairs</div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
