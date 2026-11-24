import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./licensed-insured.module.scss";

type IconName = "verified" | "compliance" | "protected" | "fairness" | "experience" | "warranty" | "inHouse" | "local";

const homeReasons = [
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

const kitchenReasons = [
  {
    icon: "verified" as IconName,
    label: "Verified",
    title: "Licensed and Insured",
    text: "Our Maryland Home Improvement Commission license is #156178. Our DC Department of Licensing and Consumer Protection license is #410526000209. General liability insurance covers every job.",
  },
  {
    icon: "fairness" as IconName,
    label: "One Contract",
    title: "One Contract From Design to Final Inspection",
    text: "Drawings, permits, pipes, wiring, cabinets and finishes sit in a single contract. One company answers for the whole kitchen.",
  },
  {
    icon: "experience" as IconName,
    label: "Experience",
    title: "35 Years of Experience",
    text: "Our crews have spent 35 years in residential construction, from cabinet refreshes to full guts with new layouts.",
  },
  {
    icon: "compliance" as IconName,
    label: "Compliance",
    title: "Permits Handled in Every Area We Serve",
    text: "We know the permit office for every county, city and town on our map. Plans are drawn to those rules before we file.",
  },
  {
    icon: "warranty" as IconName,
    label: "Warranty",
    title: "Workmanship Warranty and Small Jobs Welcome",
    text: "Labor defects in any kitchen we finish are covered for a year after handover. A $10,000 refresh gets the same care as a $100,000 remodel.",
  },
];

const aduReasons = [
  {
    icon: "verified" as IconName,
    label: "Verified",
    title: "Licensed and Insured",
    text: "Our Maryland Home Improvement Commission license is #156178. Our DC DLCP license is #410526000209. General liability insurance covers every ADU job.",
  },
  {
    icon: "fairness" as IconName,
    label: "One Contract",
    title: "Zoning, Design, Licenses, Permits and Build Together",
    text: "The feasibility check, drawings, DHCA or DC paperwork and construction sit in one contract. One company answers for the whole ADU.",
  },
  {
    icon: "compliance" as IconName,
    label: "Compliance",
    title: "Rules Checked for Your Exact Address",
    text: "Montgomery County, Rockville, Gaithersburg and DC each write their own ADU rules. We confirm setbacks, lot coverage, parking and utility routes before we draw.",
  },
  {
    icon: "experience" as IconName,
    label: "Experience",
    title: "35 Years of Residential Construction",
    text: "Our crews have spent 35 years building and remodeling Maryland and DC homes, from basement apartments to detached backyard cottages.",
  },
  {
    icon: "warranty" as IconName,
    label: "Warranty",
    title: "1-Year Workmanship Warranty",
    text: "Labor on every ADU we finish is covered for a year after handover, and you get a line-item estimate before any work starts.",
  },
];

const homeAdditionReasons = [
  {
    icon: "inHouse" as IconName,
    label: "Engineers",
    title: "Engineers on Our Own Team",
    text: "Structural questions are answered in-house, so a beam size never waits in an outside firm's queue.",
  },
  {
    icon: "experience" as IconName,
    label: "Addition",
    title: "An Addition That Matches the House",
    text: "Our carpenters carry the existing trim, flooring and exterior materials into the new rooms.",
  },
  {
    icon: "compliance" as IconName,
    label: "Permits",
    title: "Permits in Every Local Jurisdiction",
    text: "We file with Montgomery County, Rockville, Gaithersburg, the Chevy Chase towns and DC, and draw to each office's rules.",
  },
  {
    icon: "verified" as IconName,
    label: "Licensed",
    title: "Licensed and Insured",
    text: "Maryland additions run under MHIC license #156178 and District jobs under DLCP license #410526000209, with general liability coverage on each.",
  },
  {
    icon: "warranty" as IconName,
    label: "Warranty",
    title: "35 Years of Building and a Workmanship Warranty",
    text: "Our team has built and remodeled homes for 35 years, and every addition carries a 1-year workmanship warranty.",
  },
];

const bethesdaHomeAdditionReasons = [
  {
    icon: "compliance" as IconName,
    label: "Zoning Checked Before Design",
    title: "Zoning Checked Before Design",
    text: "Setbacks, coverage and height are confirmed for your lot first, so the design fits on the first submission.",
  },
  {
    icon: "inHouse" as IconName,
    label: "Engineers on Staff",
    title: "Engineers on Staff",
    text: "Structural questions are answered inside our team, which keeps second-story projects moving.",
  },
  {
    icon: "local" as IconName,
    label: "Minutes Away",
    title: "Minutes Away",
    text: "Our North Bethesda office makes site meetings and inspection visits easy to schedule.",
  },
];

const bethesdaReasons = [
  {
    icon: "verified" as IconName,
    label: "Verified",
    title: "Licensed in Maryland and DC",
    text: "Maryland lists our firm as MHIC #156178, and the District lists us as DLCP #410526000209. Check either number with the state or DC before signing.",
  },
  {
    icon: "inHouse" as IconName,
    label: "In-House",
    title: "Design, Engineering and Trades Under One Roof",
    text: "Our architects, engineers, electricians, plumbers and HVAC technicians are on our own payroll. Nobody waits on an outside firm to redraw a plan.",
  },
  {
    icon: "experience" as IconName,
    label: "Experience",
    title: "35 Years of Residential Experience",
    text: "Three and a half decades of building and remodeling homes mean we know what hides behind Bethesda's plaster walls.",
  },
  {
    icon: "local" as IconName,
    label: "Local",
    title: "Close to Your House",
    text: "Our Grand Park Avenue office sits a few miles north of downtown Bethesda, so site visits and inspections are easy to schedule.",
  },
  {
    icon: "warranty" as IconName,
    label: "Warranty",
    title: "Line-Item Pricing and Warranty Coverage",
    text: "You see a line-item estimate before work begins and keep a 1-year workmanship warranty after it ends.",
  },
];

const bathroomReasons = [
  {
    icon: "verified" as IconName,
    label: "Licensed",
    title: "Licensed and Insured",
    text: "Our MHIC number, 156178, and our DC DLCP number, 410526000209, can both be checked on the state and District lookup sites. A general liability policy backs each project.",
  },
  {
    icon: "protected" as IconName,
    label: "Waterproofing",
    title: "Waterproofing Done Right",
    text: "Every shower gets a membrane, a sloped floor and a ducted fan. The plumbing passes inspection before the walls close.",
  },
  {
    icon: "experience" as IconName,
    label: "Experience",
    title: "35 Years of Experience",
    text: "Three and a half decades in home building mean our crews have tiled everything from half baths to spa-style suites.",
  },
  {
    icon: "inHouse" as IconName,
    label: "One Contract",
    title: "One Contract and One Project Lead",
    text: "Plumbing, wiring, tile and finishes sit in one contract, with one person to call from tear-out to sign-off.",
  },
  {
    icon: "warranty" as IconName,
    label: "Warranty",
    title: "Workmanship Warranty With No Minimum Size",
    text: "Labor on each finished bath is guaranteed for twelve months under our 1-year workmanship warranty. A vanity swap gets the same attention as a primary suite.",
  },
];

const basementReasons = [
  {
    icon: "verified" as IconName,
    label: "Licensed",
    title: "Licensed in Maryland and DC",
    text: "Our MHIC license #156178 and DC DLCP license #410526000209 cover basement work on both sides of the District line. Each basement job is covered by our general liability policy.",
  },
  {
    icon: "protected" as IconName,
    label: "Dry First",
    title: "Water Problems Fixed First",
    text: "We never frame over a damp wall. Grading, drainage or sump issues are solved before finish work starts.",
  },
  {
    icon: "compliance" as IconName,
    label: "Compliant",
    title: "Code-Compliant Egress and Height",
    text: "Bedrooms get legal escape windows, and every room meets the IRC ceiling height rule. Both protect you at resale and in an emergency.",
  },
  {
    icon: "experience" as IconName,
    label: "Experience",
    title: "Three and a Half Decades of Building",
    text: "Our crew's 35 years of residential work include basements in 1950s ramblers, split-levels, newer colonials and DC rowhouses.",
  },
  {
    icon: "warranty" as IconName,
    label: "Warranty",
    title: "Small Jobs Welcome, Backed by a Workmanship Warranty",
    text: "From a single basement bathroom to a full apartment, the work carries the same 1-year workmanship warranty.",
  },
];

const bethesdaBathroomReasons = [
  {
    icon: "local" as IconName,
    label: "Local",
    title: "Close to Home",
    text: "Our office in North Bethesda is minutes away, so site visits, inspections and punch-list trips happen quickly.",
  },
  {
    icon: "protected" as IconName,
    label: "Waterproofing",
    title: "Waterproofing You Never See",
    text: "Membranes, sloped shower floors and exhaust fans ducted outdoors are standard on every job, and we check them before tile goes on.",
  },
  {
    icon: "inHouse" as IconName,
    label: "In-House",
    title: "Trades on Staff",
    text: "Our in-house plumbers and electricians handle the rough-in work, so county and WSSC inspections stay on schedule.",
  },
];

const bethesdaBasementReasons = [
  {
    icon: "protected" as IconName,
    label: "Dry First",
    title: "Dry Before Drywall",
    text: "Walls only go up on a foundation that has stayed dry through rain, so drainage and sump fixes always come first.",
  },
  {
    icon: "compliance" as IconName,
    label: "Code",
    title: "Code Built In",
    text: "Headroom, egress and fire separation are designed from the first drawing, which protects you at resale and makes a rental unit licensable.",
  },
  {
    icon: "local" as IconName,
    label: "Local",
    title: "Nearby and On Call",
    text: "Our North Bethesda office keeps site visits and inspections quick, and the same lead handles your project start to finish.",
  },
];

const bethesdaKitchenReasons = [
  {
    icon: "local" as IconName,
    label: "Local",
    title: "An Office a Short Drive Away",
    text: "We drive in from 11810 Grand Park Avenue, minutes up Rockville Pike, which keeps selection meetings and inspection days simple to book.",
  },
  {
    icon: "fairness" as IconName,
    label: "Fairness",
    title: "Budgets That Hold",
    text: "Your estimate lists every line before work starts, and we check the panel, pipes and walls first. Any change is priced in writing before we do it.",
  },
  {
    icon: "verified" as IconName,
    label: "Verified",
    title: "Licensed and Well Reviewed",
    text: "We hold MHIC #156178 and average 4.9 on Google, and one project lead stays with your kitchen from design to final inspection.",
  },
];

function BethesdaReasonIcon({ name }: { name: IconName }) {
  if (name === "verified") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z" />
        <path d="m8.5 12 2.5 2.5 4.5-5" />
      </svg>
    );
  }

  if (name === "inHouse") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }

  if (name === "experience") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="5" />
        <path d="m8.2 12.3-1.2 9.7 5-3 5 3-1.2-9.7" />
      </svg>
    );
  }

  if (name === "local") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="m9 15 2 2 4-4" />
    </svg>
  );
}

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

  if (name === "inHouse") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11 12 4l9 7" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-5h6v5" />
        <path d="M9 12h6" />
      </svg>
    );
  }

  if (name === "local") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-5.5 7-12a7 7 0 1 0-14 0c0 6.5 7 12 7 12Z" />
        <circle cx="12" cy="9" r="2.5" />
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

type LicensedInsuredProps = {
  variant?: "home" | "kitchen" | "bethesda" | "bethesda-kitchen" | "bethesda-bathroom" | "bethesda-basement" | "bathroom" | "basement" | "adu" | "home-additions" | "bethesda-home-additions";
};

export default function LicensedInsured({ variant = "home" }: LicensedInsuredProps) {
  const isKitchen = variant === "kitchen";
  const isAdu = variant === "adu";
  const isAddition = variant === "home-additions";
  const isBethesdaAddition = variant === "bethesda-home-additions";
  const isBethesda = variant === "bethesda";
  const isBethesdaKitchen = variant === "bethesda-kitchen";
  const isBethesdaBathroom = variant === "bethesda-bathroom";
  const isBethesdaBasement = variant === "bethesda-basement";
  const isBathroom = variant === "bathroom";
  const isBasement = variant === "basement";
  const reasons = isBethesdaAddition
    ? bethesdaHomeAdditionReasons
    : isAddition
    ? homeAdditionReasons
    : isBethesdaBasement
    ? bethesdaBasementReasons
    : isAdu
      ? aduReasons
      : isBasement
      ? basementReasons
      : isBethesdaBathroom
      ? bethesdaBathroomReasons
      : isBathroom
        ? bathroomReasons
        : isBethesdaKitchen
          ? bethesdaKitchenReasons
          : isKitchen
            ? kitchenReasons
            : isBethesda
              ? bethesdaReasons
              : homeReasons;

  return (
    <section
      id="licensed-insured"
      className={styles.section}
      aria-labelledby="licensed-title"
      data-variant={variant}
    >
      <Container>
          <div className={styles.header}>
            <SectionHeading
              id="licensed-title"
              align="center"
              eyebrow={
                <Badge>{isKitchen || isAdu || isBethesda || isBethesdaKitchen || isBethesdaBathroom || isBethesdaBasement || isBathroom || isBasement ? "Why Choose Us" : "Why choose us"}</Badge>
              }
              title={
                isBethesdaAddition
                  ? "Why Bethesda Families Add On With Us"
                  : isAddition
                  ? "Why Families Trust Us With Their Addition"
                  : isBethesdaBasement
                    ? "Why Bethesda Families Choose Us for Basements"
                  : isAdu
                    ? "Why Homeowners Choose Us for Their ADU"
                    : isBasement
                    ? "Why Maryland Homeowners Pick Us to Finish Their Basements"
                  : isBethesdaBathroom
                    ? "Reasons Bethesda Clients Pick Our Bathroom Team"
                    : isBathroom
                    ? "Why Homeowners Choose Us for Their Bathroom Remodel"
                    : isBethesdaKitchen
                      ? "Why Bethesda Homeowners Choose Us for Kitchens"
                      : isKitchen
                        ? "Why Homeowners Choose Us for Their Kitchen Remodel"
                        : isBethesda
                          ? "Why Bethesda Homeowners Hire Us"
                          : "Licensed and Insured in Maryland and Washington, DC"
              }
              text={
                isBethesdaAddition
                  ? "On a Bethesda addition, three of our habits save the most time:"
                  : isAddition
                  ? "Families choose us for home additions for five reasons:"
                  : isBethesdaBasement
                    ? "Three things matter most below grade:"
                  : isAdu
                    ? "ADUs need more approvals than most remodels. Five things set our ADU crews apart:"
                    : isBasement
                    ? "Five habits set our basement remodeling crews apart:"
                  : isBethesdaBathroom
                    ? "Clients tend to mention the same three things:"
                    : isBathroom
                    ? "Five strengths bring Maryland and DC families to us for bathroom remodeling:"
                    : isBethesdaKitchen
                      ? "Bethesda owners tend to give us three reasons for hiring us."
                      : isKitchen
                        ? "Homeowners in Maryland and DC pick us for kitchen remodeling for five reasons:"
                        : isBethesda
                          ? "Five things set us apart for Bethesda owners:"
                          : "Hiring a contractor to work inside your home is a big decision. These are the reasons homeowners in Maryland and Washington, DC choose us:"
              }
            />
          </div>

          <div className={styles.grid}>
            {reasons.map((reason) => (
              <article key={reason.label} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.icon}>
                    {isBethesda ? <BethesdaReasonIcon name={reason.icon} /> : <ReasonIcon name={reason.icon} />}
                  </span>
                  <span className={styles.label}>{reason.label}</span>
                </div>
                <h3 className={styles.cardTitle}>{reason.title}</h3>
                <p className={styles.cardText}>{reason.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.footer}>
            {isBethesdaAddition ? (
              <p>Thirty-five years in residential building sit behind every Bethesda addition, and our labor on it is guaranteed for twelve months.</p>
            ) : isAddition ? (
              <p>One company answers for the design, the structure and the finish.</p>
            ) : isBethesdaBasement ? (
              <>
                <p>Our team brings 35 years of residential experience to each lower level, and the labor on yours carries a twelve-month guarantee.</p>
                <div className={styles.actions}>
                  <Button href="/contact-us" data-estimate-trigger>
                    Get a Free Estimate
                  </Button>
                </div>
              </>
            ) : isBasement ? (
              <>
                <p>The first visit tells you whether your basement is worth finishing before you spend anything.</p>
                <div className={styles.actions}>
                  <Button href="/contact-us" data-estimate-trigger>
                    Get a Free Estimate
                  </Button>
                </div>
              </>
            ) : isBethesdaBathroom ? (
              <>
                <p>Thirty-five years of house work and a one-year guarantee on our labor stand behind it.</p>
                <div className={styles.actions}>
                  <Button href="/contact-us" data-estimate-trigger>
                    Get a Free Estimate
                  </Button>
                </div>
              </>
            ) : isBethesdaKitchen ? (
              <>
                <p>Twelve months of workmanship coverage starts the day your Bethesda kitchen passes its final.</p>
                <div className={styles.actions}>
                  <Button href="/contact-us" data-estimate-trigger>
                    Get a Free Estimate
                  </Button>
                </div>
              </>
            ) : isBethesda ? (
              <>
                <p>One company stays accountable from the first sketch to the final inspection.</p>
                <div className={styles.actions}>
                  <Button href="/contact-us" data-estimate-trigger>
                    Get a Free Estimate
                  </Button>
                </div>
              </>
            ) : isAdu ? (
              <p>The ADU and remodeling projects in the next section show that approach in finished homes.</p>
            ) : isBathroom ? (
              <p>The four bathrooms in the next section show that work in finished homes.</p>
            ) : isKitchen ? (
              <p>These kitchens show that approach in finished homes.</p>
            ) : (
              <>
                <p>
                  Our five-step process below shows what working with us looks like, from the first visit to the final
                  walkthrough.
                </p>
                <div className={styles.actions}>
                  <Button href="/license/MHIC-License.pdf" variant="primary" target="_blank" rel="noopener noreferrer">
                    View MHIC License
                  </Button>
                  <Button href="/license/DC-License-2026.pdf" variant="secondary" target="_blank" rel="noopener noreferrer">
                    View DC License
                  </Button>
                </div>
              </>
            )}
          </div>
      </Container>
    </section>
  );
}
