import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./trades-comparison.module.scss";

const columns = [
  "One general contractor (design-build)",
  "Architect plus separate trades",
  "Handyman",
];

const rows = [
  {
    question: "Who coordinates the work?",
    answers: ["The general contractor", "You, or the architect for an extra fee", "You"],
  },
  {
    question: "Who pulls the permits?",
    answers: ["The general contractor", "Each trade pulls its own, or you do", "Usually no one, because handyman work is mostly small jobs that need no permit"],
  },
  {
    question: "Who is responsible if something goes wrong?",
    answers: ["One company, under one contract", "Split between the architect and each trade", "The handyman, for that one repair"],
  },
  {
    question: "Best for",
    answers: ["Remodels with several trades or a permit", "Custom designs where you want an independent architect", "Small repairs and one-trade fixes"],
  },
];

function InfoIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false" className={styles.noteIcon}>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 9v4.2M10 6.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function TradesComparison() {
  return (
    <section id="one-contractor" className={styles.section} aria-labelledby="trades-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="trades-title"
            align="center"
            eyebrow={<Badge>One Contractor vs Separate Trades</Badge>}
            title="Why Hire One General Contractor Instead of Separate Trades?"
            text="For any remodel that touches more than one trade or needs a permit, one general contractor is simpler: one contract, one schedule and one party responsible for the result."
          />
        </div>

        <div className={styles.compare} role="table" aria-label="General contractor comparison">
          <div className={`${styles.row} ${styles.head}`} role="row">
            <div className={styles.question} role="columnheader">Question</div>
            {columns.map((column) => (
              <div key={column} className={styles.optionHead} role="columnheader">
                {column}
              </div>
            ))}
          </div>

          {rows.map((row) => (
            <div key={row.question} className={styles.row} role="row">
              <h3 className={styles.question} role="rowheader">{row.question}</h3>
              {row.answers.map((answer, index) => (
                <div key={columns[index]} className={styles.option} role="cell">
                  <span className={styles.optionLabel}>{columns[index]}</span>
                  {answer}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.note}>
          <InfoIcon />
          <p>
            A contractor and a general contractor are not always the same thing. A contractor can be a single trade, such as a plumber or an electrician. A general contractor holds the main contract with you and hires and manages all of the trades on the job.
          </p>
        </div>
      </Container>
    </section>
  );
}
