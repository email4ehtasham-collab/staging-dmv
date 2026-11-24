import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "../../../kitchen-remodeling/location-landing-pages/bethesda-md/bethesda-kitchen-permits.module.scss";

const rows = [
  {
    factor: "Cost per sq ft",
    up: "Usually more, since a new story means stronger walls, new stairs and a full roof",
    out: "Lower on a level lot with easy access",
  },
  {
    factor: "Zoning limit",
    up: "Height, 35 feet in the R-60 and R-90 zones",
    out: "Lot coverage, 35 percent in R-60 and 30 percent in R-90, plus setbacks",
  },
  {
    factor: "Yard",
    up: "Kept",
    out: "Reduced by the new footprint",
  },
  {
    factor: "Living at home",
    up: "Difficult for several weeks",
    out: "Easier until the final tie-in",
  },
  {
    factor: "Best fit",
    up: "Cape Cods and ramblers on smaller lots",
    out: "Colonials with deep rear yards",
  },
];

export default function BethesdaHomeAdditionUpOrOut() {
  return (
    <section className={styles.section} aria-labelledby="bethesda-home-addition-up-or-out-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="bethesda-home-addition-up-or-out-title"
            align="center"
            title="Should You Build Up or Build Out in Bethesda?"
            text="Building out is usually cheaper per square foot when the setbacks and lot coverage allow it, while building up keeps the yard but needs structural checks and a new roof. On a typical Bethesda lot they compare like this:"
          />
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Factor</th>
                <th scope="col">Build up</th>
                <th scope="col">Build out</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.factor}>
                  <th scope="row">{row.factor}</th>
                  <td>{row.up}</td>
                  <td>{row.out}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.note}>
          <p>
            Many owners weigh an addition against buying a bigger house. Once commissions, closing costs and Maryland
            and Montgomery County transfer taxes are counted, adding on often costs less than trading up within
            Bethesda, and you keep the street and schools you chose.
          </p>
        </div>
      </Container>
    </section>
  );
}
