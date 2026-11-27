import type { ReactNode } from "react";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import tableStyles from "../../../kitchen-remodeling/location-landing-pages/bethesda-md/bethesda-kitchen-permits.module.scss";
import styles from "../../../kitchen-remodeling/location-landing-pages/bethesda-md/bethesda-kitchen-cost-drivers.module.scss";

const costRows = [
  {
    type: "Bump-out",
    size: "50–150 sq ft",
    cost: "About $30,000–$75,000",
  },
  {
    type: "Rear room or primary suite",
    size: "300–500 sq ft",
    cost: "About $100,000–$200,000",
  },
  {
    type: "Second story",
    size: "800–1,200 sq ft",
    cost: "About $200,000–$450,000+",
  },
];

function CostIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

const notes = [
  {
    title: "What Is the 30% Rule in Remodeling?",
    text: "Planners treat it as a ceiling, keeping the whole renovation budget under roughly three-tenths of current market value. Because Bethesda home values are high, most single additions fit well within it, though a second story plus a new kitchen can come close.",
    icon: (
      <CostIcon>
        <path d="M12 3v18M5 8h14M5 16h14" />
      </CostIcon>
    ),
  },
  {
    title: "How Much Does a 12x12 or 20x20 Addition Cost?",
    text: "At $200 to $400 per square foot, a 12x12 room of 144 square feet costs roughly $29,000 to $58,000, a 20x20 room of 400 square feet roughly $80,000 to $160,000, and 1,000 added square feet about $200,000 to $400,000. Small rooms often run above these per-foot figures, since the foundation, roof work and permits cost about the same whatever the size.",
    icon: (
      <CostIcon>
        <path d="M4 4h16v16H4zM4 10h16M10 4v16" />
      </CostIcon>
    ),
  },
];

export default function BethesdaHomeAdditionCosts() {
  return (
    <section id="service-location-pricing" className={tableStyles.section} aria-labelledby="bethesda-home-addition-cost-title">
      <Container>
        <div className={tableStyles.header}>
          <SectionHeading
            id="bethesda-home-addition-cost-title"
            align="center"
            eyebrow={<Badge>Cost and Pricing</Badge>}
            title="How Much Does a Home Addition Cost in Bethesda?"
            text={
              <>
                <strong>Most home additions in Bethesda cost $200 to $400 per finished square foot.</strong> Local
                projects usually land in the upper half of that range because of finish levels and older structures.
                This table shows typical totals by type:
              </>
            }
          />
        </div>

        <div className={tableStyles.tableWrap}>
          <table className={tableStyles.table}>
            <thead>
              <tr>
                <th scope="col">Addition type</th>
                <th scope="col">Typical size</th>
                <th scope="col">Typical cost</th>
              </tr>
            </thead>
            <tbody>
              {costRows.map((row) => (
                <tr key={row.type}>
                  <th scope="row">{row.type}</th>
                  <td>{row.size}</td>
                  <td>{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={tableStyles.note}>
          <p>Each trade, the drawings, the engineering and the county fees get their own line in your written price.</p>
        </div>

        <div className={styles.grid}>
          {notes.map((note) => (
            <article className={styles.card} key={note.title}>
              <div className={styles.cardTop}>
                <span className={styles.iconBox}>{note.icon}</span>
              </div>
              <h3 className={`${styles.cardTitle} h3`}>{note.title}</h3>
              <p className={styles.cardText}>{note.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
