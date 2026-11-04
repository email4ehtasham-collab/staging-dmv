import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./home-faq.module.scss";

const faqs = [
  {
    question: "Are you licensed in Maryland and DC?",
    answer: "Yes. We hold Maryland Home Improvement Commission license #156178 and DC Department of Licensing and Consumer Protection license #410526000209.",
  },
  {
    question: "Which areas do you serve?",
    answer: "We serve Washington, DC and 12 Maryland communities: Bethesda, North Bethesda, Rockville, Potomac, Chevy Chase, Gaithersburg, Kensington, Silver Spring, Wheaton, Garrett Park, Cabin John and Laurel.",
  },
  {
    question: "Do you handle permits?",
    answer: "Yes. We prepare the drawings, file the applications, track them and book the inspections with Montgomery County DPS, WSSC Water, the City of Rockville, the City of Gaithersburg, the City of Laurel, Prince George's County DPIE and the DC Department of Buildings.",
  },
  {
    question: "Are you a general contractor or a design-build firm?",
    answer: "Both. We can build from plans your architect has already drawn, or we can design and build your project under one contract.",
  },
  {
    question: "What is your minimum project size?",
    answer: "There is none. We take on single-room updates as well as additions and whole-home renovations.",
  },
  {
    question: "How do I check a contractor's license in Maryland?",
    answer: "Search the contractor's name or license number in the Maryland Department of Labor's online MHIC license search. The result shows whether the license is active. If a contractor can't give you a number, don't sign.",
  },
];

function PlusIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M8 2.5v11M2.5 8h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function HomeFaq() {
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="faq-title"
            align="center"
            eyebrow={<Badge>FAQs</Badge>}
            title="Frequently Asked Questions"
            text="Have a question that isn't here? Call us 7 days a week."
          />
        </div>

        <div className={styles.grid}>
          {faqs.map((faq) => (
            <details key={faq.question} className={styles.item}>
              <summary className={styles.summary}>
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  <PlusIcon />
                </span>
              </summary>
              <p className={styles.answer}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
