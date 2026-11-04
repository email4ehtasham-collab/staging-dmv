import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import EstimateForm from "./EstimateForm";
import styles from "./estimate.module.scss";

const benefits = [
  "Free written estimate after the in-home consultation",
  "No minimum project size - one room to whole home",
  "One contract for design, permits and construction",
  "1-year warranty on every project",
];

const trustItems = [
  "4.9 on Google",
  "MHIC #156178",
  "DLCP #410526000209",
  "1-year warranty",
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="9" fill="#fff0df" />
      <path d="m6 10.2 2.5 2.5L14 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path d="M6.5 3.5 8 7l-1.5 1.5a10 10 0 0 0 5 5L13 12l3.5 1.5v2A1.5 1.5 0 0 1 15 17C8.9 17 3 11.1 3 5a1.5 1.5 0 0 1 1.5-1.5h2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m3.5 5.5 6.5 5 6.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path d="M10 17s5.5-5 5.5-9.5a5.5 5.5 0 1 0-11 0C4.5 12 10 17 10 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="10" cy="7.5" r="1.8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default function Estimate() {
  return (
    <section id="estimate" className={styles.section} aria-labelledby="estimate-title">
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <SectionHeading
              className={styles.heading}
              id="estimate-title"
              size="large"
              eyebrow={<Badge className={styles.badge}>Free Estimate</Badge>}
              title="Get a Free Estimate From a Maryland General Contractor"
              text="DMV General Contracting Group is a licensed residential general contractor serving Maryland and Washington, DC, with design-build service from the first drawing to the final inspection. Tell us about your kitchen, bathroom, basement, ADU or addition, and we will set up your free in-home consultation."
            />

            <p className={styles.contactIntro}>Request a free estimate, call or email us. We are open 7 days a week.</p>

            <ul className={styles.benefits}>
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <CheckIcon />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className={styles.contact}>
              <a href="tel:+12407301292">
                <PhoneIcon />
                <span>(240) 730-1292</span>
              </a>
              <a href="mailto:support@dmv-gc.com">
                <MailIcon />
                <span>support@dmv-gc.com</span>
              </a>
              <p>
                <PinIcon />
                <span>11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852</span>
              </p>
            </div>

            <ul className={styles.trust} aria-label="Credentials and ratings">
              {trustItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.formCard}>
            <EstimateForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
