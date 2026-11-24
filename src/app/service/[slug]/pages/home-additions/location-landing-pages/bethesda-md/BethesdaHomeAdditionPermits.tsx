import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "../../../kitchen-remodeling/location-landing-pages/bethesda-md/bethesda-kitchen-permits.module.scss";

const rows = [
  {
    standard: "Front setback",
    r60: "25 feet",
    r90: "30 feet or the established building line",
  },
  {
    standard: "Rear setback",
    r60: "20 feet",
    r90: "25 feet",
  },
  {
    standard: "Side setbacks",
    r60: "8 feet one side, 18 feet combined",
    r90: "8 feet one side, 25 feet combined",
  },
  {
    standard: "Lot coverage",
    r60: "35 percent",
    r90: "30 percent, lower on large infill lots",
  },
  {
    standard: "Height",
    r60: "35 feet",
    r90: "35 feet to the peak, or 30 feet to the mean on pitched roofs",
  },
];

function InfoIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false" className={styles.noteIcon}>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 9v4.2M10 6.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function BethesdaHomeAdditionPermits() {
  return (
    <section id="permits" className={styles.section} aria-labelledby="bethesda-home-addition-permits-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="bethesda-home-addition-permits-title"
            align="center"
            eyebrow={<Badge>Permits</Badge>}
            title="Zoning and Permits for Bethesda Home Additions"
            text="Yes, every addition needs a building permit from Montgomery County DPS and must meet the zone's setbacks, height and lot coverage, while any new bath or kitchen plumbing goes through WSSC Water. Bethesda's two most common zones set these limits:"
          />
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Standard</th>
                <th scope="col">R-60 zone</th>
                <th scope="col">R-90 zone</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.standard}>
                  <th scope="row">{row.standard}</th>
                  <td>{row.r60}</td>
                  <td>{row.r90}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.note}>
          <InfoIcon />
          <p>
            Older lots can have different side and rear figures, and homes in the Chevy Chase towns or a county historic
            district need extra approvals for exterior work. We confirm your zone and lot record with Montgomery
            Planning before design starts.
          </p>
        </div>
      </Container>
    </section>
  );
}
