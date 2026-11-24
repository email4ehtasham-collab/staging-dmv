import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "../../../kitchen-remodeling/location-landing-pages/bethesda-md/bethesda-kitchen-permits.module.scss";
import noteStyles from "../../../kitchen-remodeling/location-landing-pages/bethesda-md/bethesda-kitchen-services.module.scss";
import bethesdaHomeAdditionContent from "./content";

const rows = [
  {
    phase: "Feasibility and design",
    duration: "1–3 months",
  },
  {
    phase: "Engineering and county permits",
    duration: "1–3 months",
  },
  {
    phase: "Construction: bump-out or single room",
    duration: "2–3 months",
  },
  {
    phase: "Construction: primary suite or rear wing",
    duration: "3–5 months",
  },
  {
    phase: "Construction: second story",
    duration: "4–6 months",
  },
];

export default function BethesdaHomeAdditionTimeline() {
  return (
    <section id="home-addition-timeline" className={styles.section} aria-labelledby="bethesda-home-addition-timeline-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="bethesda-home-addition-timeline-title"
            align="center"
            eyebrow={<Badge>Timeline</Badge>}
            title="How Long Does a Home Addition Take in Bethesda?"
            text="From the kickoff meeting to moving furniture in, a Bethesda addition generally runs 4 to 12 months. Stage by stage:"
          />
        </div>

        <p className={noteStyles.noteText}>{bethesdaHomeAdditionContent.process.note}</p>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Phase</th>
                <th scope="col">Typical duration</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.phase}>
                  <th scope="row">{row.phase}</th>
                  <td>{row.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.note}>
          <p>Complete drawings at submission are the best way to keep county review short.</p>
        </div>
      </Container>
    </section>
  );
}
