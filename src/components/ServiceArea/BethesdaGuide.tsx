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
  required: boolean;
  issuedBy: string;
};

type CostRow = {
  project: string;
  maryland: string;
  bethesda: string;
};

const neighborhoods: Neighborhood[] = [
  {
    name: "Edgemoor",
    description:
      "Walter Tuckerman began developing Edgemoor in 1912 just west of downtown. Older brick and Tudor houses sit beside newer custom homes, and projects run to high-end kitchens and additions.",
    tag: "Since 1912",
    icon: "landmark",
  },
  {
    name: "Bradley Hills",
    description:
      "Established homes off Bradley Boulevard often need primary suites, updated baths and finished lower levels.",
    tag: "Bradley Blvd",
    icon: "trees",
  },
  {
    name: "Wood Acres",
    description:
      "This neighborhood of brick colonials sees steady demand for rear additions, kitchens and basement finishing.",
    tag: "Brick colonials",
    icon: "house",
  },
  {
    name: "Downtown Bethesda",
    description:
      "Around Bethesda Row and Woodmont Triangle, most work is condo and townhome renovation under building rules.",
    tag: "Condos",
    icon: "city",
  },
];

const permitRows: PermitRow[] = [
  {
    work: "Addition or new deck",
    required: true,
    issuedBy: "Montgomery County DPS",
  },
  {
    work: "Interior alteration, such as moving walls, a kitchen or bath remodel or basement finishing",
    required: true,
    issuedBy: "Montgomery County DPS",
  },
  {
    work: "New or relocated plumbing and gas lines",
    required: true,
    issuedBy: "WSSC Water",
  },
  {
    work: "Electrical work",
    required: true,
    issuedBy: "Montgomery County DPS",
  },
  {
    work: "Window or door with a larger opening",
    required: true,
    issuedBy: "Montgomery County DPS",
  },
  {
    work: "Replacing cabinets, floor coverings, siding or roof covering",
    required: false,
    issuedBy: "Not required in most cases",
  },
];

const costRows: CostRow[] = [
  {
    project: "Kitchen remodel",
    maryland: "$35,000–$75,000 for mid-range",
    bethesda: "$75,000–$120,000+ for full custom",
  },
  {
    project: "Bathroom remodel",
    maryland: "$25,000–$45,000",
    bethesda: "$50,000–$80,000+ for a primary or luxury bath",
  },
  {
    project: "Basement finishing",
    maryland: "$30–$85 per sq ft",
    bethesda: "$85–$110+ per sq ft with premium finishes",
  },
  {
    project: "Home addition",
    maryland: "$200–$400 per sq ft",
    bethesda: "Upper end for two-story or high-finish additions",
  },
  {
    project: "ADU",
    maryland: "$150,000–$300,000",
    bethesda: "Upper end for detached new builds",
  },
  {
    project: "Whole-home renovation",
    maryland: "$100–$250 per sq ft",
    bethesda: "Upper end for full gut renovations",
  },
];

function NeighborhoodIcon({ icon }: { icon: NeighborhoodIcon }) {
  if (icon === "landmark") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <path d="m3 9 9-5 9 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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

export default function BethesdaGuide() {
  return (
    <>
      <section id="neighborhoods" className={`${styles.section} ${styles.neighborhoods}`} aria-labelledby="neighborhoods-title">
        <Container>
          <SectionHeading
            className={styles.heading}
            id="neighborhoods-title"
            align="center"
            eyebrow={<Badge>Neighborhoods</Badge>}
            title="Bethesda Neighborhoods We Serve"
            text={
              <>
                We work across Bethesda&apos;s <strong>20814, 20816 and 20817</strong> ZIP codes, including these four neighborhoods:
              </>
            }
          />

          <div className={styles.stats}>
            <div className={styles.statCard} aria-label="ZIP code 20814">
              <strong className={styles.statValue}>20814</strong>
            </div>
            <div className={styles.statCard} aria-label="ZIP code 20816">
              <strong className={styles.statValue}>20816</strong>
            </div>
            <div className={styles.statCard} aria-label="ZIP code 20817">
              <strong className={styles.statValue}>20817</strong>
            </div>
            <div className={`${styles.statCard} ${styles.statFeatured}`} aria-label="Population about 68,000 people">
              <span className={styles.statValue}>~68,000 people</span>
            </div>
          </div>

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
              Bethesda is an unincorporated area of about 68,000 people, so county agencies handle its permits. Mention your address when you call and we confirm coverage.
            </p>
            <Button href="/contact-us" className={styles.confirmButton}>
              Confirm My Address
            </Button>
          </div>
        </Container>
      </section>

      <section id="permits" className={`${styles.section} ${styles.permits}`} aria-labelledby="permits-title">
        <Container>
          <SectionHeading
            className={styles.heading}
            id="permits-title"
            align="center"
            eyebrow={<Badge>Permits</Badge>}
            title="Who Issues Building Permits in Bethesda?"
            text={
              <>
                <strong>Montgomery County&apos;s Department of Permitting Services (DPS) issues building permits in Bethesda, because Bethesda has no city government.</strong> Plumbing and gas permits come from WSSC Water. Under the DPS permit list, common Bethesda remodeling jobs break down this way:
              </>
            }
          />

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Work</th>
                  <th scope="col">Permit needed?</th>
                  <th scope="col">Issued by</th>
                </tr>
              </thead>
              <tbody>
                {permitRows.map((row) => (
                  <tr key={row.work}>
                    <th scope="row">{row.work}</th>
                    <td>
                      <span className={row.required ? styles.statusYes : styles.statusNo}>
                        {row.required ? "Yes" : "Usually no"}
                      </span>
                    </td>
                    <td>
                      <span className={row.required ? undefined : styles.notRequired}>{row.issuedBy}</span>
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
              <h3>Special Municipal & Historic Requirements</h3>
              <p>
                Homes inside incorporated towns such as Somerset or the Chevy Chase municipalities also need a town permit. Houses in a designated historic district need a Historic Area Work Permit before exterior changes. We check your address for both before design.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="costs" className={`${styles.section} ${styles.costs}`} aria-labelledby="costs-title">
        <Container>
          <SectionHeading
            className={styles.heading}
            id="costs-title"
            align="center"
            eyebrow={<Badge>Cost and Pricing</Badge>}
            title="What Does a Remodel Cost in Bethesda?"
            text={
              <>
                <strong>Most Bethesda remodels land in the upper half of Maryland&apos;s ranges, because owners choose custom cabinetry, natural stone and bigger layout changes.</strong> This table compares Maryland ranges with where Bethesda projects often land:
              </>
            }
          />

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">Project</th>
                  <th scope="col">Typical Maryland range</th>
                  <th scope="col">Where Bethesda projects often land</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row) => (
                  <tr key={row.project}>
                    <th scope="row">{row.project}</th>
                    <td>{row.maryland}</td>
                    <td>
                      <span className={styles.amount}>{row.bethesda}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.tableNote}>
            After a site visit, these broad bands become exact figures for each part of your job.
          </p>

          <div className={styles.demoCard}>
            <span className={styles.demoEyebrow}>Market Demographics</span>
            <h3>Is Bethesda, MD a Wealthy Area?</h3>
            <p>
              Yes. The U.S. Census Bureau reports a median household income of $192,237 in Bethesda and a median owner-occupied home value of $1,169,900 (ACS 2020–2024). For remodeling, that means custom finishes, careful protection of valuable homes and close attention to neighbors.
            </p>

            <div className={styles.demoStats}>
              <div className={styles.demoStat}>
                <span>Median Household Income</span>
                <span className={styles.demoStatValue}>$192,237</span>
              </div>
              <div className={styles.demoStat}>
                <span>Median Home Value</span>
                <span className={styles.demoStatValue}>$1,169,900</span>
              </div>
            </div>

            <div className={styles.demoSource}>Source: U.S. Census Bureau, ACS 2020–2024</div>
          </div>
        </Container>
      </section>
    </>
  );
}
