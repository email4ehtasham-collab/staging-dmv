import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./homes-matrix.module.scss";

export type HomeMatrixRow = {
  type: string;
  find: string;
  project: string;
};

type HomesMatrixProps = {
  eyebrow: string;
  title: string;
  intro: string;
  rows: HomeMatrixRow[];
  whyTitle: string;
  whyText: string;
};

function InfoIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 9v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="10" cy="6.3" r="1" fill="currentColor" />
    </svg>
  );
}

export default function HomesMatrix({
  eyebrow,
  title,
  intro,
  rows,
  whyTitle,
  whyText,
}: HomesMatrixProps) {
  return (
    <section className={styles.section} aria-labelledby="homes-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="homes-title"
            align="center"
            eyebrow={<Badge>{eyebrow}</Badge>}
            title={title}
            text={intro}
          />
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Home Type</th>
                <th scope="col">What We Often Find</th>
                <th scope="col">Typical Project</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.type}>
                  <th scope="row">{row.type}</th>
                  <td>{row.find}</td>
                  <td>{row.project}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.whyCard}>
          <span className={styles.whyIcon}>
            <InfoIcon />
          </span>
          <div>
            <h3>{whyTitle}</h3>
            <p>{whyText}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
