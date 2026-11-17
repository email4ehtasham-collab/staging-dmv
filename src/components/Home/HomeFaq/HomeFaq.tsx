import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./home-faq.module.scss";

type Faq = {
  question: string;
  answer: string;
};

const homeFaqs: Faq[] = [
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

const kitchenFaqs: Faq[] = [
  {
    question: "Does a kitchen remodel add value to a home?",
    answer: "Yes, a modest one recoups the most. The JLC Cost vs. Value Report puts a midrange minor kitchen remodel at about 113% of its cost at resale. A midrange major remodel recoups about 51%. Plan a refresh if you expect to sell within a few years. A full remodel pays back mostly in daily use.",
  },
  {
    question: "Should I reface or replace my kitchen cabinets?",
    answer: "Reface them if the boxes are solid and the layout works. Refacing swaps doors, drawer fronts and veneer, and it costs well below new cabinets. Replace them if the boxes are water-damaged, sagging or the wrong size for the new plan. We check the boxes at the first visit and price both options.",
  },
  {
    question: "What happens if you find mold or old wiring behind the walls?",
    answer: "We stop, show you the problem and price the fix in writing before any extra work starts. Older Maryland and DC homes can hide ungrounded wiring, galvanized pipe or old leak damage. Maryland law requires changes to a home improvement contract in writing, so you approve each change order first.",
  },
  {
    question: "Can I remove a wall to open up my kitchen?",
    answer: "Yes, in most homes. A load-bearing wall needs an engineered beam and a building permit. A wall can also hide plumbing, ductwork or wiring that must be rerouted first. We check the wall at the first visit and include any beam and reroute costs in the estimate.",
  },
  {
    question: "Can we live at home during a kitchen remodel?",
    answer: "Yes, most families stay at home. We seal the work area with plastic barriers to control dust. A temporary kitchen with the refrigerator and a microwave keeps meals simple during 6 to 14 weeks of construction.",
  },
];

const bethesdaFaqs: Faq[] = [
  {
    question: "Are you licensed to work in Bethesda, MD?",
    answer: "Yes. Maryland Home Improvement Commission license #156178 covers our home improvement work in Bethesda and every other Maryland county. The state's license search shows it as active. General liability insurance is in force on all Bethesda sites.",
  },
  {
    question: "Who issues building permits in Bethesda?",
    answer: "Montgomery County DPS issues building permits in Bethesda, and WSSC Water issues plumbing and gas permits. Homes in incorporated towns such as Somerset also need a town permit. Historic districts add a Historic Area Work Permit for exterior changes.",
  },
  {
    question: "How much does a general contractor cost?",
    answer: "Usually 10% to 20% of the project cost, and up to 25% or 30% on complex custom work. The fee is built into the total on your estimate, not added later. It pays for scheduling trades, permits, supervision and responsibility for the result.",
  },
  {
    question: "What is the difference between a contractor and a general contractor?",
    answer: "The word contractor often means one specialist, like a tile setter or roofer. A general contractor signs one agreement for the full job and schedules, supervises and pays each specialist. In Maryland, both need an MHIC license for home improvement work.",
  },
  {
    question: "What is the best way to find a general contractor?",
    answer: "Look up the company's MHIC number in the state database first. Then compare written estimates from two or three contractors and read their recent reviews. Ask to see finished projects similar to yours before you sign.",
  },
];

function PlusIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M8 2.5v11M2.5 8h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

type HomeFaqProps = {
  variant?: "home" | "kitchen" | "bethesda";
  eyebrow?: string;
  title?: string;
  text?: string;
  faqs?: Faq[];
};

export default function HomeFaq({
  variant = "home",
  eyebrow = "FAQs",
  title = "Frequently Asked Questions",
  text,
  faqs: customFaqs,
}: HomeFaqProps = {}) {
  const isKitchen = variant === "kitchen";
  const isBethesda = variant === "bethesda";
  const faqs = customFaqs ?? (isKitchen ? kitchenFaqs : isBethesda ? bethesdaFaqs : homeFaqs);

  return (
    <section id="faq" className={styles.section} data-variant={variant} aria-labelledby="faq-title">
      <Container>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <SectionHeading
              id="faq-title"
              align="left"
              eyebrow={<Badge>{eyebrow}</Badge>}
              title={title}
              text={
                text ??
                (isKitchen
                  ? "Have a kitchen question that isn't here? Call us 7 days a week."
                  : "Have a question that isn't here? Call us 7 days a week.")
              }
            />

            <div className={styles.callBox}>
              <Button href="/contact-us" className={styles.callButton}>
                Book a Call
              </Button>
              <a className={styles.phone} href="tel:+12407301292">
                (240) 730-1292
              </a>
            </div>
          </div>

          <div className={styles.list}>
            {faqs.map((faq) => (
              <details key={faq.question} className={styles.item}>
                <summary className={styles.summary}>
                  <span className={styles.question}>{faq.question}</span>
                  <span className={styles.icon}>
                    <PlusIcon />
                  </span>
                </summary>
                <p className={styles.answer}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
