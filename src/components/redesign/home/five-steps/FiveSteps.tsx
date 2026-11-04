import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./five-steps.module.scss";

const steps = [
  {
    number: "01",
    title: "Meet",
    side: "left",
    text: "Start with a free in-home consultation. We look at the space, listen to what you want and talk through your budget and timing.",
  },
  {
    number: "02",
    title: "Design",
    side: "right",
    text: "We draw the layout, help you pick materials and finishes, and write a scope that lists exactly what is included. You approve the design and a written estimate before anything is ordered.",
  },
  {
    number: "03",
    title: "Permit",
    side: "left",
    text: "We prepare the permit drawings, file the application and track it until the permit is issued.",
  },
  {
    number: "04",
    title: "Build",
    side: "right",
    text: "One project lead runs the site, coordinates every trade and sends you an update each week.",
  },
  {
    number: "05",
    title: "Inspect and hand over",
    side: "left",
    text: "We pass the final inspection, walk the finished space with you, close out the punch list and start your 1-year warranty.",
  },
];

function SparkIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" focusable="false" className={styles.badgeIcon}>
      <path d="M8 1.5c.5 3.4 2.6 5.5 6 6-3.4.5-5.5 2.6-6 6-.5-3.4-2.6-5.5-6-6 3.4-.5 5.5-2.6 6-6Z" fill="currentColor" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true" focusable="false" className={styles.contactIcon}>
      <path d="M5 14v-2a9 9 0 0 1 18 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 13h3v7H6.5A1.5 1.5 0 0 1 5 18.5V13ZM23 13h-3v7h1.5a1.5 1.5 0 0 0 1.5-1.5V13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M20 20c0 2-1.8 3.5-4 3.5h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function FiveSteps() {
  return (
    <section id="process" className={styles.section} aria-labelledby="process-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="process-title"
            align="center"
            eyebrow={<Badge className={styles.badge} >Process</Badge>}
            title="Our 5-Step Remodeling Process"
            text="Every project we take on follows the same five steps, so you always know what happens next and who is responsible for it:"
          />
        </div>

        <div className={styles.timeline}>
          {steps.map((step) => {
            const marker = (
              <span className={styles.marker} aria-hidden="true">
                {step.number}
              </span>
            );
            const card = (
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardText}>{step.text}</p>
              </article>
            );

            return (
              <div key={step.number} className={`${styles.row} ${step.side === "right" ? styles.rowRight : ""}`}>
                {step.side === "right" ? (
                  <>
                    {marker}
                    {card}
                  </>
                ) : (
                  <>
                    {card}
                    {marker}
                  </>
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.contact}>
          <span className={styles.contactIconWrap}>
            <HeadsetIcon />
          </span>
          <div className={styles.contactCopy}>
            <h3>Single Point of Contact</h3>
            <p>
              Your project lead is your day-to-day contact from the first day of construction to the final walkthrough, so you always know who to call.
            </p>
          </div>
          <Button href="/contact-us" data-estimate-trigger className={styles.contactButton}>Start With Step 1 - It&apos;s Free</Button>
        </div>
      </Container>
    </section>
  );
}
