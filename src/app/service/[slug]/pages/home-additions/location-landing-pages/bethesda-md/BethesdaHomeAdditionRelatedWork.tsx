import Link from "next/link";
import Container from "@/components/Common/Container";
import styles from "../../../kitchen-remodeling/location-landing-pages/bethesda-md/bethesda-kitchen-related-work.module.scss";
import noteStyles from "../../../kitchen-remodeling/location-landing-pages/bethesda-md/bethesda-kitchen-services.module.scss";

const points = [
  {
    title: "License.",
    text: "Search the contractor's name on the state's MHIC license lookup and confirm the license is active.",
  },
  {
    title: "Insurance.",
    text: "Request insurance certificates naming you, covering both liability and injured workers.",
  },
  {
    title: "Delivery model.",
    text: "Decide between design-build under one contract or an architect plus a separate builder.",
  },
  {
    title: "Permit in the contractor's name.",
    text: "The builder, not you, should hold the DPS permit.",
  },
  {
    title: "Written schedule.",
    text: "Get start, milestone and finish dates in the contract.",
  },
];

export default function BethesdaHomeAdditionRelatedWork() {
  return (
    <section className={styles.section} aria-labelledby="bethesda-home-addition-contractor-title">
      <Container>
        <div className={styles.layout}>
          <div className={styles.header}>
            <h2 className="h2" id="bethesda-home-addition-contractor-title">
              How Do You Find the Right Contractor for a Home Addition?
            </h2>
            <div className={styles.intro}>
              <p>Start with a licensed, insured contractor who handles design, engineering and permits, then check these five points before you sign:</p>
            </div>
          </div>

          <div className={styles.grid}>
            {points.map((point) => (
              <article className={styles.card} key={point.title}>
                <span className={styles.label}>{point.title}</span>
                <span className={styles.text}>{point.text}</span>
              </article>
            ))}
          </div>
        </div>

        <p className={noteStyles.noteText}>
          An addition often brings other rooms into play as well. Owners frequently pair it with{" "}
          <Link href="/service/kitchen-remodeling/bethesda-md">kitchen remodeling in Bethesda</Link>, a new bath through{" "}
          <Link href="/service/bathroom-remodeling/bethesda-md">bathroom remodeling in Bethesda</Link>, or finishing the
          level below with <Link href="/service/basement-remodeling/bethesda-md">basement remodeling in Bethesda</Link>.
        </p>
      </Container>
    </section>
  );
}
