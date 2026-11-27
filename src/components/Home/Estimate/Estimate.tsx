import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import EstimateForm from "./EstimateForm";
import styles from "./estimate.module.scss";

type EstimateVariant = "home" | "services" | "kitchen" | "bethesda-kitchen" | "bethesda-bathroom" | "bethesda-basement" | "bathroom" | "basement" | "adu" | "home-additions" | "bethesda-home-additions";

const benefitsByVariant: Record<EstimateVariant, string[]> = {
  home: [
    "Free written estimate after the in-home consultation",
    "No minimum project size - one room to whole home",
    "One contract for design, permits and construction",
    "1-year warranty on every project",
  ],
  services: [],
  kitchen: [
    "Free visit to measure your kitchen",
    "Written estimate with the cost of each part of the job",
    "One contract for design, permits and the build",
    "1-year workmanship warranty on every kitchen",
  ],
  adu: [
    "Free ADU feasibility check for your lot",
    "Written estimate with zoning, design, licenses and permits itemized",
    "One contract for the full ADU project",
    "1-year workmanship warranty on every ADU",
  ],
  "home-additions": [],
  "bethesda-home-additions": [],
  "bethesda-kitchen": [],
  "bethesda-bathroom": [],
  "bethesda-basement": [],
  basement: [
    "Free visit to test the slab and measure headroom",
    "Written estimate with moisture, egress and finish costs itemized",
    "One contract for design, permits and construction",
    "1-year workmanship warranty on every basement",
  ],
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
  services: [
    "MHIC #156178",
    "DC DLCP #410526000209",
    "1-year warranty",
    "No minimum project size",
  ],
  kitchen: [
    "4.9 on Google",
    "MHIC #156178",
    "DLCP #410526000209",
    "35 years",
  ],
  adu: [
    "4.9 on Google",
    "MHIC #156178",
    "DLCP #410526000209",
    "1-year warranty",
  ],
  "home-additions": [
    "4.9 on Google",
    "MHIC #156178",
    "DLCP #410526000209",
    "1-year warranty",
  ],
  "bethesda-home-additions": [
    "4.9 on Google",
    "MHIC #156178",
    "DLCP #410526000209",
    "1-year warranty",
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
  "bethesda-basement": [
    "4.9 on Google",
    "MHIC #156178",
    "DLCP #410526000209",
    "1-year warranty",
  ],
  basement: [
    "4.9 on Google",
    "MHIC #156178",
    "DLCP #410526000209",
    "1-year warranty",
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
  const isServices = variant === "services";
  const isKitchen = variant === "kitchen";
  const isAdu = variant === "adu";
  const isAddition = variant === "home-additions";
  const isBethesdaAddition = variant === "bethesda-home-additions";
  const isBethesdaKitchen = variant === "bethesda-kitchen";
  const isBethesdaBathroom = variant === "bethesda-bathroom";
  const isBethesdaBasement = variant === "bethesda-basement";
  const isBathroom = variant === "bathroom";
  const isBasement = variant === "basement";
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
                isKitchen || isAdu || isAddition || isBethesdaAddition || isBethesdaKitchen || isBethesdaBathroom || isBethesdaBasement || isBathroom || isBasement ? (
                  <div className={styles.eyebrowRow}>
                    <Badge className={styles.badge}>
                      {isBethesdaAddition || isAddition
                        ? "Free Addition Estimate"
                        : isAdu
                          ? "Free ADU Estimate"
                          : isBethesdaBasement || isBasement
                          ? "Free Basement Estimate"
                          : isBethesdaKitchen
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
                isServices
                  ? "Get a Free Estimate for Any Home Remodeling Service in Maryland"
                  : isBethesdaAddition
                  ? "Plan Your Home Addition in Bethesda, MD"
                  : isAddition
                  ? "Plan Your Home Addition in Maryland"
                  : isAdu
                    ? "Talk to an ADU Builder in Maryland"
                  : isBethesdaBasement
                    ? "Start Your Basement Project in Bethesda, MD"
                  : isBasement
                    ? "Start Your Basement Finishing Project in Maryland"
                  : isBethesdaKitchen
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
                isServices
                  ? "Whatever the size of the job, our home remodeling services in Maryland and Washington, DC come from one licensed general contractor and design-build team with no minimum project size."
                  : isBethesdaAddition
                  ? "A Bethesda addition starts with a look at your lot and a plan for the traffic and noise that come with construction. We check zoning first, price every line of the work in writing, and keep one crew and one schedule from demolition to the final county inspection."
                  : isAddition
                  ? "Home additions in Maryland and DC start with zoning. DMV General Contracting Group handles zoning, engineering and permits in-house, so your project keeps moving from the first sketch."
                  : isAdu
                    ? "Whether your lot can take a second home is the first question we answer. As an ADU builder in Maryland and DC, we review zoning, design the unit and handle every license and permit."
                  : isBethesdaBasement
                    ? "Our licensed team handles basement remodeling and basement finishing in Bethesda, MD, making sure the space is dry and the egress is legal before the first wall goes up. Book a free assessment to find out what your basement can become."
                  : isBasement
                    ? "Finishing costs $30 to $85 per square foot, against $200 to $400 for an addition. Bare concrete becomes finished rooms with DMV General Contracting Group, your crew for basement remodeling and finishing across Maryland and DC."
                  : isBethesdaKitchen
                    ? "When you are ready for kitchen remodeling in Bethesda, MD, our licensed design-build team handles design, permits and construction so the budget and schedule hold. Book a free in-home consultation to see what your kitchen could become."
                    : isBethesdaBathroom
                      ? "From a powder room to a full primary suite, our licensed team handles bathroom remodeling in Bethesda, MD with waterproofing done right and permits filed on your behalf. The first step is an in-home visit at no charge."
                      : isBathroom
                        ? "Your next shower, vanity and tile job is a single call to DMV General Contracting Group, handling bathroom remodeling in Maryland and DC. One contract covers waterproofing, permits and the build."
                        : isKitchen
                          ? "A new kitchen is one call away for homeowners seeking kitchen remodeling in Maryland and DC. DMV General Contracting Group designs, permits and builds it under one license-backed contract. It starts with a no-cost visit to measure your kitchen."
                          : "DMV General Contracting Group is a licensed residential general contractor serving Maryland and DC, with design-build service from the first drawing to the final inspection. Tell us about your kitchen, bathroom, basement, ADU or addition, and we will set up your free in-home consultation."
              }
            />

            {isServices ? (
              <p className={styles.contactIntro}>
                Use the online form to ask for a free estimate, or dial{" "}
                <a href="tel:+12407301292">+1 240-730-1292</a>; the line is staffed daily.
              </p>
            ) : isBethesdaAddition ? (
              <p className={styles.contactIntro}>
                Setting up a free feasibility visit is quick: email{" "}
                <a href="mailto:support@dmv-gc.com">support@dmv-gc.com</a>, or use the form. A builder calls you back
                within one business day to set a time.
              </p>
            ) : isAddition ? (
              <p className={styles.contactIntro}>
                A free addition estimate is one form or one call away: +1 240-730-1292, answered every day.
              </p>
            ) : isAdu ? (
              <p className={styles.contactIntro}>
                Book a free ADU feasibility check online, or call{" "}
                <a href="tel:+12407301292">+1 240-730-1292</a> on any day.
              </p>
            ) : isBethesdaBasement ? (
              <p className={styles.contactIntro}>
                Any of three routes gets you a free basement assessment: the phone at{" "}
                <a href="tel:+12407301292">+1 240-730-1292</a>, which we pick up daily, a note to{" "}
                <a href="mailto:support@dmv-gc.com">support@dmv-gc.com</a>, or the site form.
              </p>
            ) : isBasement ? (
              <p className={styles.contactIntro}>
                Schedule your free basement estimate online, or phone{" "}
                <a href="tel:+12407301292">+1 240-730-1292</a> any day of the week.
              </p>
            ) : isBethesdaKitchen ? (
              <p className={styles.contactIntro}>
                To set up the free in-home consultation, use the contact form or phone{" "}
                <a href="tel:+12407301292">+1 240-730-1292</a>.
              </p>
            ) : isBethesdaBathroom ? (
              <p className={styles.contactIntro}>
                To set up your free bathroom estimate, ring{" "}
                <a href="tel:+12407301292">+1 240-730-1292</a> any day, write to{" "}
                <a href="mailto:support@dmv-gc.com">support@dmv-gc.com</a>, or send the short form on our site.
              </p>
            ) : isBathroom ? (
              <p className={styles.contactIntro}>
                Fill in our short form to get a free bathroom estimate scheduled, or ring{" "}
                <a href="tel:+12407301292">+1 240-730-1292</a> seven days a week.
              </p>
            ) : isKitchen ? (
              <p className={styles.contactIntro}>
                Use our form to book a free kitchen estimate, or dial{" "}
                <a href="tel:+12407301292">+1 240-730-1292</a> seven days a week.
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

            {isBethesdaAddition || isBethesdaKitchen || isBethesdaBathroom || isBethesdaBasement ? (
              <div className={styles.contact}>
                <p className={styles.companyName}>DMV General Contracting Group LLC</p>
                <p>
                  <PinIcon />
                  <span>11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852</span>
                </p>
                <p className={styles.contactLine}>
                  <PhoneIcon />
                  <span>
                    <a href="tel:+12407301292">+1 240-730-1292</a>
                    <span className={styles.contactDot}>•</span>
                    <a href="mailto:support@dmv-gc.com">support@dmv-gc.com</a>
                  </span>
                </p>
                <p>
                  <ClockIcon />
                  <span>Open 7 days a week</span>
                </p>
              </div>
            ) : !isServices && !isKitchen && !isAdu && !isAddition && !isBathroom && !isBethesdaBathroom ? (
              <div className={styles.contact}>
                <a href="tel:+12407301292">
                  <PhoneIcon />
                  <span>+1 240-730-1292</span>
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
            <EstimateForm variant={isServices || variant === "home-additions" || variant === "bethesda-home-additions" ? "home" : variant} />
          </div>
        </div>
      </Container>
    </section>
  );
}
