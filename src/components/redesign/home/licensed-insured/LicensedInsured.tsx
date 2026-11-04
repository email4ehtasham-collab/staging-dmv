import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./licensed-insured.module.scss";

type IconName = "verified" | "compliance" | "protected" | "fairness" | "experience" | "warranty";

const reasons = [
  {
    icon: "verified" as IconName,
    label: "Verified",
    title: "Licensed in Maryland and DC",
    text: "We hold Maryland Home Improvement Commission (MHIC) license #156178 and DC Department of Licensing and Consumer Protection (DLCP) license #410526000209. In Maryland, only MHIC-licensed contractors may sign home improvement contracts with homeowners, and doing this work without a license is a crime. You can check our number, or any contractor's, in the Maryland Department of Labor's MHIC license search.",
  },
  {
    icon: "protected" as IconName,
    label: "Protected",
    title: "Insured and Covered by the Guaranty Fund",
    text: "We carry the general liability insurance that the MHIC requires of every licensed home improvement contractor. Because we are licensed, our clients can also file a claim with the Maryland Home Improvement Guaranty Fund if work goes wrong. The fund does not cover work by unlicensed contractors.",
  },
  {
    icon: "experience" as IconName,
    label: "Experience",
    title: "35 Years of Experience",
    text: "Our team brings 35 years of residential construction experience to every project, from a small bathroom update to a second-story addition.",
  },
  {
    icon: "compliance" as IconName,
    label: "Compliance",
    title: "We Follow the Rules of Every Area We Work In",
    text: "We know which office issues permits in each community we serve, and we design to the local zoning, historic district and HOA rules before we file. That keeps inspections on schedule and avoids redesigns halfway through a project.",
  },
  {
    icon: "fairness" as IconName,
    label: "Fairness",
    title: "Fair Contracts and Written Estimates",
    text: "Every contract shows our license number, as Maryland law requires, and the deposit at signing is never more than one-third of the contract price, the legal limit for home improvement contracts in Maryland. You approve a written estimate before any work starts.",
  },
  {
    icon: "warranty" as IconName,
    label: "Warranty",
    title: "1-Year Warranty and No Minimum Project Size",
    text: "Every project we build comes with a 1-year warranty. There is no minimum job size, so a single-room update gets the same care as a whole-home renovation.",
  },
];

function ReasonIcon({ name }: { name: IconName }) {
  if (name === "verified") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z"/>
        <path d="m8.5 12 2.3 2.3 4.8-5"/>
        <path d="M9 6.5h6"/>
      </svg>
    );
  }

  if (name === "compliance") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18M5 7h14M7 7l-3 6h6L7 7Zm10 0-3 6h6l-3-6Z"/>
        <path d="M8 21h8"/>
      </svg>
    );
  }

  if (name === "protected") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z"/>
        <path d="M12 8v8M8.5 12h7"/>
      </svg>    
    );
  }

  if (name === "fairness") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h9l4 4v14H6z"/>
        <path d="M15 3v5h4M9 12h7M9 16h7"/>
        <path d="m9 8 1.5 1.5L13 7"/>
      </svg>
    );
  }

  if (name === "experience") {
    return (
      <svg width="67" height="55" viewBox="0 0 67 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.79273 9.35693H10.3924V54.8182H4.79273C2.15373 54.8182 0 52.6492 0 49.9915V14.1782C0 11.5259 2.15373 9.35693 4.79273 9.35693ZM28.5382 0H38.0746C41.0408 0 43.4671 2.44356 43.4671 5.43075V8.33008H40.0321V5.41977C40.0321 4.37096 39.1815 3.51434 38.1401 3.51434H28.4728C27.4314 3.51434 26.5808 4.37096 26.5808 5.41977V8.33008H23.1458V5.43075C23.1458 2.44356 25.5721 0 28.5382 0ZM13.2386 9.35693H53.1235V54.8182H13.2386V9.35693ZM55.9697 9.35693H62.2073C64.8408 9.35693 67 11.5259 67 14.1836V49.9969C67 52.6492 64.8463 54.8237 62.2073 54.8237H55.9697V9.35693Z" fillRule="evenodd" clipRule="evenodd" fill="currentColor"/>
        <path d="M33.5007 46.6967C41.9105 46.6967 48.728 39.8793 48.728 31.4695C48.728 23.0597 41.9105 16.2422 33.5007 16.2422C25.0909 16.2422 18.2734 23.0597 18.2734 31.4695C18.2734 39.8793 25.0909 46.6967 33.5007 46.6967Z" fill="#F8FAFC" strokeLinecap="round" strokeLinejoin="round" stroke="white"/>
        <path d="M33.5 22.3345V31.4708L39.5909 34.5163" fill="#F8FAFC" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
      </svg>

    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z"/>
      <path d="M12 7v5l3 2"/>
      <path d="M8 3.8 6 2M16 3.8 18 2"/>
    </svg>
  );
}

export default function LicensedInsured() {
  return (
    <section id="licensed-insured" className={styles.section} aria-labelledby="licensed-title">
      <Container>
          <div className={styles.header}>
            <SectionHeading
              id="licensed-title"
              align="center"
              eyebrow={<Badge>Why choose us</Badge>}
              title="Licensed and Insured in Maryland and Washington, DC"
              text="Hiring a contractor to work inside your home is a big decision. These are the reasons homeowners in Maryland and Washington, DC choose us:"
            />
          </div>

          <div className={styles.grid}>
            {reasons.map((reason) => (
              <article key={reason.label} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.icon}>
                    <ReasonIcon name={reason.icon} />
                  </span>
                  <span className={styles.label}>{reason.label}</span>
                </div>
                <h3 className={styles.cardTitle}>{reason.title}</h3>
                <p className={styles.cardText}>{reason.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.footer}>
            <p>
              Our five-step process below shows what working with us looks like, from the first visit to the final walkthrough.
            </p>
            <div className={styles.actions}>
              <Button href="/license/MHIC-License.pdf" variant="primary" target="_blank" rel="noopener noreferrer">
                View MHIC License
              </Button>
              <Button href="/license/DC-License-2026.pdf" variant="secondary" target="_blank" rel="noopener noreferrer">
                View DC License
              </Button>
            </div>
          </div>
      </Container>
    </section>
  );
}
