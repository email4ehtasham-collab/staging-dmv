import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./bethesda-guide.module.scss";

type NeighborhoodIcon = "landmark" | "trees" | "house" | "city";

type Neighborhood = {
  name: string;
  description: string;
  tag: string;
  icon: NeighborhoodIcon;
};

type PermitRow = {
  work: string;
  permit: string;
  reviewer: string;
  yes: boolean;
};

type CostRow = {
  project: string;
  range: string;
};

const neighborhoods: Neighborhood[] = [
  {
    name: "Capitol Hill",
    description:
      "Victorian rowhouses sit inside the Capitol Hill Historic District, where exterior changes go through historic review.",
    tag: "Historic district",
    icon: "landmark",
  },
  {
    name: "Georgetown",
    description:
      "Federal and Victorian rowhouses here have exterior work reviewed by the Commission of Fine Arts under the Old Georgetown Act.",
    tag: "Old Georgetown Act",
    icon: "landmark",
  },
  {
    name: "Chevy Chase DC",
    description:
      "Detached colonials and Tudors on tree-lined streets are often ready for new kitchens, baths and additions.",
    tag: "Tree-lined streets",
    icon: "trees",
  },
  {
    name: "The Palisades",
    description:
      "Bungalows, colonials and newer homes above the Potomac make additions and whole-house updates common.",
    tag: "Above the Potomac",
    icon: "house",
  },
  {
    name: "Forest Hills",
    description:
      "Larger detached houses near Rock Creek Park suit whole-home renovations and additions.",
    tag: "Rock Creek Park",
    icon: "trees",
  },
];

const permitRows: PermitRow[] = [
  {
    work: "Addition or pop-up",
    permit: "Yes",
    reviewer: "DOB and zoning, plus historic review where it applies",
    yes: true,
  },
  {
    work: "Interior alteration, such as moving walls",
    permit: "Yes",
    reviewer: "DOB",
    yes: true,
  },
  {
    work: "New plumbing, electrical or HVAC",
    permit: "Yes",
    reviewer: "DOB, with work by licensed trades",
    yes: true,
  },
  {
    work: "Painting, tile, carpet, cabinets or countertops",
    permit: "Usually no, except in historic districts",
    reviewer: "DOB when a permit is required",
    yes: false,
  },
  {
    work: "Exterior change in a historic district",
    permit: "Yes",
    reviewer: "DOB plus the Historic Preservation Office or Commission of Fine Arts",
    yes: true,
  },
  {
    work: "Any work in a condo",
    permit: "Depends on the scope",
    reviewer: "Condo board or management, plus DOB when a permit applies",
    yes: false,
  },
];

const costRows: CostRow[] = [
  {
    project: "Kitchen remodel",
    range: "$35,000–$75,000 mid-range",
  },
  {
    project: "Bathroom remodel",
    range: "$25,000–$45,000",
  },
  {
    project: "Basement finishing",
    range: "$30–$85 per sq ft",
  },
  {
    project: "ADU",
    range: "$150,000–$300,000",
  },
  {
    project: "Home addition",
    range: "$200–$400 per sq ft",
  },
  {
    project: "Whole-home renovation",
    range: "$100–$250 per sq ft",
  },
];

function NeighborhoodIcon({ icon }: { icon: NeighborhoodIcon }) {
  if (icon === "landmark") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="m3 9 9-5 9 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "trees") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="M12 21v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 3 6 11h3l-2 3h10l-2-3h3L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }

  if (icon === "house") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="m3 11 9-7 9 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10v10h14V10" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M4 20V8l5-3v15M9 20V9l6-3v14M15 20V8l5-3v15M2 20h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M12 3 2.8 20h18.4L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 9v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

export default function DcGuide() {
  return (
    <>
      <section id="neighborhoods" className={`${styles.section} ${styles.neighborhoods}`} aria-labelledby="dc-neighborhoods-title">
        <Container>
          <SectionHeading
            className={styles.heading}
            id="dc-neighborhoods-title"
            align="center"
            eyebrow={<Badge>Neighborhoods</Badge>}
            title="Neighborhoods We Serve in DC"
            text="We work throughout the District, including these five neighborhoods:"
          />

          <div className={styles.neighborhoodGrid}>
            {neighborhoods.map((neighborhood) => (
              <article className={styles.neighborhoodCard} key={neighborhood.name}>
                <div className={styles.neighborhoodTag}>{neighborhood.tag}</div>
                <div>
                  <span className={styles.neighborhoodIcon}>
                    <NeighborhoodIcon icon={neighborhood.icon} />
                  </span>
                  <h3>{neighborhood.name}</h3>
                  <p>{neighborhood.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.confirmBanner}>
            <p>
              Homes in every other ward are welcome too; mention your address when you get in touch.
            </p>
            <Button href="/contact-us" className={styles.confirmButton}>
              Confirm My Address
            </Button>
          </div>
        </Container>
      </section>

      <section id="permits" className={`${styles.section} ${styles.permits}`} aria-labelledby="dc-permits-title">
        <Container>
          <SectionHeading
            className={styles.heading}
            id="dc-permits-title"
            align="center"
            eyebrow={<Badge>Permits</Badge>}
            title="Who Issues Building Permits in Washington, DC?"
            text={
              <>
                The DC Department of Buildings (DOB) issues building permits in Washington, DC. That covers additions, interior alterations and new plumbing, electrical or HVAC work. DOB&apos;s list exempts finish work such as painting, tiling, carpeting, cabinets and countertops, but only outside historic districts. Inside one, the Historic Preservation Office, or the Commission of Fine Arts in Georgetown, also reviews exterior changes. Common District jobs and their reviewers:
              </>
            }
          />

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Work</th>
                  <th scope="col">Permit?</th>
                  <th scope="col">Who reviews</th>
                </tr>
              </thead>
              <tbody>
                {permitRows.map((row) => (
                  <tr key={row.work}>
                    <th scope="row">{row.work}</th>
                    <td>
                      <span className={row.yes ? styles.statusYes : styles.statusNo}>{row.permit}</span>
                    </td>
                    <td>
                      <span className={row.yes ? undefined : styles.notRequired}>{row.reviewer}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.noteCard}>
            <span className={styles.noteIcon}>
              <AlertIcon />
            </span>
            <div>
              <h3>Licenses and Posted Permits</h3>
              <p>
                A DC permit stays posted at the home until the work is complete. You can confirm it was issued on DOB&apos;s public dashboard or in Scout. DC&apos;s Department of Licensing and Consumer Protection (DLCP) licenses general contractors and home improvement contractors, and electricians, plumbers and HVAC mechanics hold separate trade licenses. A home improvement license is required for residential contracts over $300. Look up any business in Scout or the DLCP portal before you pay a deposit.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="costs" className={`${styles.section} ${styles.costs}`} aria-labelledby="dc-costs-title">
        <Container>
          <SectionHeading
            className={styles.heading}
            id="dc-costs-title"
            align="center"
            eyebrow={<Badge>Cost and Pricing</Badge>}
            title="What Does a Remodel Cost in Washington, DC?"
            text="District budgets start from our published 2026 Maryland figures. Older rowhouses and historic homes often add structural or restoration costs on top. Typical ranges by project:"
          />

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Project</th>
                  <th scope="col">Typical range</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row) => (
                  <tr key={row.project}>
                    <th scope="row">{row.project}</th>
                    <td>
                      <span className={styles.amount}>{row.range}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.tableNote}>
            Party-wall work, underpinning a basement and historic window restoration are the line items that most often push a District job past these ranges.
          </p>
        </Container>
      </section>
    </>
  );
}
