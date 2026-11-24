import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./bethesda-bathroom-permits.module.scss";

const authorities = [
  {
    label: "Building & Electrical",
    value: "Montgomery County DPS",
  },
  {
    label: "Plumbing",
    value: "WSSC Water",
  },
];

const permitRows = [
  {
    work: "Recaulking a tub or shower",
    permit: "No",
    issuedBy: "Not required",
  },
  {
    work: "New floor covering",
    permit: "No",
    issuedBy: "Not required",
  },
  {
    work: "Installing or replacing a vanity cabinet",
    permit: "No",
    issuedBy: "Not required",
  },
  {
    work: "Enlarging the bathroom into a closet or hall",
    permit: "Yes",
    issuedBy: "Montgomery County DPS",
  },
  {
    work: "Wiring for radiant floor heat, extra lights or a bigger fan",
    permit: "Yes",
    issuedBy: "Montgomery County DPS",
  },
  {
    work: "Moving or adding a toilet, sink or shower",
    permit: "Yes",
    issuedBy: "WSSC Water",
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

export default function BethesdaBathroomPermits() {
  return (
    <section id="permits" className={styles.section} aria-labelledby="bethesda-bathroom-permits-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="bethesda-bathroom-permits-title"
            align="center"
            eyebrow={<Badge>Permits</Badge>}
            title="Do You Need a Permit to Remodel a Bathroom in Bethesda?"
            text="A permit comes into play as soon as a pipe is relocated, a wall shifts or a circuit is added. Because Bethesda is unincorporated, there is no town hall involved: the county's permitting department reviews structure and wiring, and the regional water utility, WSSC, signs off on plumbing. Typical bathroom tasks, checked against Montgomery County's 2024 list of what does and does not need a permit:"
          />
        </div>

        <div className={styles.authorities}>
          {authorities.map((authority) => (
            <article className={styles.authorityCard} key={authority.label}>
              <span>{authority.label}</span>
              <strong>{authority.value}</strong>
            </article>
          ))}
        </div>

        <div className={styles.note}>
          <InfoIcon />
          <p>We file both, schedule each inspection and keep the approved plans on site.</p>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Bathroom work</th>
                <th scope="col">Permit?</th>
                <th scope="col">Issued by</th>
              </tr>
            </thead>
            <tbody>
              {permitRows.map((row) => (
                <tr key={row.work}>
                  <th scope="row">{row.work}</th>
                  <td data-label="Permit?">
                    <span className={row.permit === "Yes" ? styles.yes : styles.no}>{row.permit}</span>
                  </td>
                  <td data-label="Issued by">{row.issuedBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.note}>
          <InfoIcon />
          <p>Homes in the Chevy Chase municipalities or a county historic district may need extra approval for exterior work such as a new bathroom window, and we check your address before design is final.</p>
        </div>
      </Container>
    </section>
  );
}
