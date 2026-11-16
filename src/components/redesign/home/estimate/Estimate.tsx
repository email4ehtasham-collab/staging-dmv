import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import EstimateForm from "./EstimateForm";
import styles from "./estimate.module.scss";

type EstimateVariant = "home" | "kitchen" | "bethesda-kitchen" | "bethesda-bathroom" | "bathroom";

const benefitsByVariant: Record<EstimateVariant, string[]> = {
  home: [
    "Free written estimate after the in-home consultation",
    "No minimum project size - one room to whole home",
    "One contract for design, permits and construction",
    "1-year warranty on every project",
  ],
  kitchen: [
    "Free visit to measure your kitchen",
    "Written estimate with the cost of each part of the job",
    "One contract for design, permits and the build",
    "1-year workmanship warranty on every kitchen",
  ],
  "bethesda-kitchen": [],
  "bethesda-bathroom": [],
  bathroom: [
    "Free bathroom estimate after the walkthrough",
    "One contract for waterproofing, permits and the build",
    "Written scope covering tile, plumbing, fixtures and labor",
    "1-year workmanship warranty on every bathroom",
  ],
};

const trustItemsByVariant: Record<EstimateVariant, string[]> = {
  home: [
    "4.9 on Google",
    "MHIC #156178",
    "DLCP #410526000209",
    "1-year warranty",
  ],
  kitchen: [
    "4.9 on Google",
    "MHIC #156178",
    "DLCP #410526000209",
    "35 years",
  ],
  "bethesda-kitchen": [
    "4.9 on Google",
    "MHIC #156178",
    "DLCP #410526000209",
    "1-year warranty",
  ],
  "bethesda-bathroom": [
    "4.9 on Google",
    "MHIC #156178",
    "DLCP #410526000209",
    "35 years",
  ],
  bathroom: [
    "4.9 on Google",
    "MHIC #156178",
    "DLCP #410526000209",
    "35 years",
  ],
};

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

function ClockIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 5.5V10l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Estimate({ variant = "home" }: { variant?: EstimateVariant }) {
  const isKitchen = variant === "kitchen";
  const isBethesdaKitchen = variant === "bethesda-kitchen";
  const isBethesdaBathroom = variant === "bethesda-bathroom";
  const isBathroom = variant === "bathroom";
  const benefits = benefitsByVariant[variant];
  const trustItems = trustItemsByVariant[variant];

  return (
    <section
      id="estimate"
      className={styles.section}
      data-variant={variant}
      aria-labelledby="estimate-title"
    >
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <SectionHeading
              className={styles.heading}
              id="estimate-title"
              size="large"
              eyebrow={
                isKitchen || isBethesdaKitchen || isBethesdaBathroom || isBathroom ? (
                  <div className={styles.eyebrowRow}>
                    <Badge className={styles.badge}>
                      {isBethesdaKitchen
                        ? "Free In-Home Consultation"
                        : isBethesdaBathroom || isBathroom
                          ? "Free Bathroom Estimate"
                          : "Free Kitchen Estimate"}
                    </Badge>
                    <span className={styles.stars} aria-label="4.9 out of 5 stars">
                      ★★★★★
                    </span>
                  </div>
                ) : (
                  <Badge className={styles.badge}>Free Estimate</Badge>
                )
              }
              title={
                isBethesdaKitchen
                  ? "Start Your Kitchen Remodel in Bethesda, MD"
                  : isBethesdaBathroom
                    ? "Start Your Bathroom Remodel in Bethesda, MD"
                    : isBathroom
                      ? "Start Your Bathroom Remodel in Maryland"
                      : isKitchen
                        ? "Start Your Kitchen Remodel in Maryland"
                        : "Get a Free Estimate From a Maryland General Contractor"
              }
              text={
                isBethesdaKitchen
                  ? "When you are ready for kitchen remodeling in Bethesda, MD, our licensed design-build team handles design, permits and construction so the budget and schedule hold. Book a free in-home consultation to see what your kitchen could become."
                  : isBethesdaBathroom
                    ? "From a powder room to a full primary suite, our licensed team handles bathroom remodeling in Bethesda, MD with waterproofing done right and permits filed on your behalf. The first step is an in-home visit at no charge."
                    : isBathroom
                      ? "Your next shower, vanity and tile job is a single call to DMV General Contracting Group, handling bathroom remodeling in Maryland and Washington, DC. One contract covers waterproofing, permits and the build."
                      : isKitchen
                        ? "A new kitchen is one call away for homeowners seeking kitchen remodeling in Maryland and Washington, DC. DMV General Contracting Group designs, permits and builds it under one license-backed contract. It starts with a no-cost visit to measure your kitchen."
                        : "DMV General Contracting Group is a licensed residential general contractor serving Maryland and Washington, DC, with design-build service from the first drawing to the final inspection. Tell us about your kitchen, bathroom, basement, ADU or addition, and we will set up your free in-home consultation."
              }
            />

            {isBethesdaKitchen ? (
              <p className={styles.contactIntro}>
                To set up the free in-home consultation, use the contact form or phone{" "}
                <a href="tel:+12407301292">(240) 730-1292</a>.
              </p>
            ) : isBethesdaBathroom ? (
              <p className={styles.contactIntro}>
                To set up your free bathroom estimate, ring{" "}
                <a href="tel:+12407301292">(240) 730-1292</a> any day, write to{" "}
                <a href="mailto:support@dmv-gc.com">support@dmv-gc.com</a>, or send the short form on our site.
              </p>
            ) : isBathroom ? (
              <p className={styles.contactIntro}>
                Fill in our short form to get a free bathroom estimate scheduled, or ring{" "}
                <a href="tel:+12407301292">(240) 730-1292</a> seven days a week.
              </p>
            ) : isKitchen ? (
              <p className={styles.contactIntro}>
                Use our form to book a free kitchen estimate, or dial{" "}
                <a href="tel:+12407301292">(240) 730-1292</a> seven days a week.
              </p>
            ) : (
              <p className={styles.contactIntro}>
                Request a free estimate, call or email us. We are open 7 days a week.
              </p>
            )}

            {benefits.length > 0 ? (
              <ul className={styles.benefits}>
                {benefits.map((benefit) => (
                  <li key={benefit}>
                    <CheckIcon />
                    {benefit}
                  </li>
                ))}
              </ul>
            ) : null}

            {isBethesdaKitchen || isBethesdaBathroom ? (
              <div className={styles.contact}>
                <p className={styles.companyName}>DMV General Contracting Group LLC</p>
                <p>
                  <PinIcon />
                  <span>11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852</span>
                </p>
                <p className={styles.contactLine}>
                  <PhoneIcon />
                  <span>
                    <a href="tel:+12407301292">(240) 730-1292</a>
                    <span className={styles.contactDot}>•</span>
                    <a href="mailto:support@dmv-gc.com">support@dmv-gc.com</a>
                  </span>
                </p>
                <p>
                  <ClockIcon />
                  <span>Open 7 days a week</span>
                </p>
              </div>
            ) : !isKitchen && !isBathroom && !isBethesdaBathroom ? (
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
            ) : null}

            <ul className={styles.trust} aria-label="Credentials and ratings">
              {trustItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.formCard}>
            <EstimateForm variant={variant} />
          </div>
        </div>
      </Container>
    </section>
  );
}
