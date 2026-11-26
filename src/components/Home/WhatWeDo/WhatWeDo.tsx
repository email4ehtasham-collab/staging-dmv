import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./what-we-do.module.scss";

const jobs = [
  {
    number: "01",
    title: "Plan and design",
    text: <>Our <strong>in-house architecture and engineering</strong> team turns your goals into <strong>drawings and a written scope</strong> before any demolition starts.</>,
  },
  {
    number: "02",
    title: "Permits and inspections",
    text: <>We <strong>file the applications</strong>, answer the reviewers&apos; comments and <strong>book every inspection</strong> with the county, the city or DC.</>,
  },
  {
    number: "03",
    title: "Trades and schedule",
    text: <>We line up <strong>carpenters, electricians, plumbers and HVAC technicians</strong> in the right order, so no trade sits waiting on another.</>,
  },
  {
    number: "04",
    title: "Quality and handover",
    text: <>We check each stage against the plans and the <strong>building code</strong>, walk the finished space with you and start your <strong>warranty</strong>.</>,
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

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className={styles.section} aria-labelledby="what-we-do-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="what-we-do-title"
            align="center"
            eyebrow={<Badge>The Job</Badge>}
            title="What Does a Residential General Contractor Do for Your Remodel?"
            text={
              <>
                A residential{" "}
                <a href="https://en.wikipedia.org/wiki/General_contractor" target="_blank" rel="noopener noreferrer">
                  general contractor
                </a>{" "}
                is a <strong>licensed builder</strong> who runs a home remodel from start to finish: design, permits, trades, schedule, inspections and the final walkthrough. Instead of hiring a plumber, an electrician, a framer and a tile setter one at a time, you sign <strong>one contract</strong> and deal with <strong>one company</strong>.
              </>
            }
          />
          <p className={styles.introStrong}>As your general contractor, we handle four jobs:</p>
        </div>

        <div className={styles.grid}>
          {jobs.map((job) => (
            <article key={job.number} className={styles.card}>
              <span className={styles.number}>{job.number}</span>
              <h3 className={styles.cardTitle}>{job.title}</h3>
              <p className={styles.cardText}>{job.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.note}>
          <InfoIcon />
          <p>
            When a project needs both design and construction, our{" "}
            <Link href="/service/design-build">design-build remodeling service</Link> keeps the architect, the engineer and the builder on the same team.
          </p>
        </div>
      </Container>
    </section>
  );
}
