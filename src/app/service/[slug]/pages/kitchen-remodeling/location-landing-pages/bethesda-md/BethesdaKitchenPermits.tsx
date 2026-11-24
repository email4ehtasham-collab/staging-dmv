import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./bethesda-kitchen-permits.module.scss";

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
    work: "Replacing cabinets or floor coverings",
    permit: "No",
    issuedBy: "Not required",
  },
  {
    work: "Removing or moving an interior wall",
    permit: "Yes",
    issuedBy: "Montgomery County DPS",
  },
  {
    work: "Adding circuits for new appliances",
    permit: "Yes",
    issuedBy: "Montgomery County DPS",
  },
  {
    work: "Relocating the sink, dishwasher or gas range",
    permit: "Yes",
    issuedBy: "WSSC Water",
  },
  {
    work: "Kitchen bump-out or addition",
    permit: "Yes",
    issuedBy: "Montgomery County DPS",
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

export default function BethesdaKitchenPermits() {
  return (
    <section id="permits" className={styles.section} aria-labelledby="bethesda-kitchen-permits-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="bethesda-kitchen-permits-title"
            align="center"
            eyebrow={<Badge>Permits</Badge>}
            title="Do You Need a Permit to Remodel a Kitchen in Bethesda?"
            text="A permit is needed when walls, wiring or plumbing change, but swapping cabinets or flooring alone does not require one. Bethesda is unincorporated, so Montgomery County DPS issues building permits and WSSC Water handles plumbing, as shown in the county's 2024 Permits Required / No Permits Required list:"
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
          <p>We file and track every permit for you and schedule each inspection.</p>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Work</th>
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
      </Container>
    </section>
  );
}
