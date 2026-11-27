import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./bethesda-kitchen-design.module.scss";

const layouts = [
  {
    title: "Galley",
    text: "Two parallel runs, common in smaller colonials and condos.",
    graphic: (
      <svg viewBox="0 0 160 90" fill="none" aria-hidden="true" focusable="false">
        <rect className={styles.counterPrimary} x="15" y="10" width="130" height="20" rx="3" />
        <rect className={styles.counterDetail} x="20" y="13" width="30" height="14" rx="2" />
        <rect className={styles.counterPrimary} x="15" y="60" width="130" height="20" rx="3" />
        <circle className={styles.counterDetail} cx="120" cy="70" r="6" />
        <path className={styles.walkway} d="M 40 45 L 120 45" />
      </svg>
    ),
  },
  {
    title: "L-shape",
    text: "Cabinets on two walls, leaving room for a table or island.",
    graphic: (
      <svg viewBox="0 0 160 90" fill="none" aria-hidden="true" focusable="false">
        <path className={styles.counterPrimary} d="M 15 10 H 145 V 30 H 35 V 80 H 15 Z" />
        <rect className={styles.counterDetail} x="45" y="13" width="35" height="14" rx="2" />
        <circle className={styles.counterDetail} cx="25" cy="55" r="6" />
      </svg>
    ),
  },
  {
    title: "U-shape",
    text: "Three walls of storage for serious cooks.",
    graphic: (
      <svg viewBox="0 0 160 90" fill="none" aria-hidden="true" focusable="false">
        <path className={styles.counterPrimary} d="M 15 10 H 145 V 80 H 125 V 30 H 35 V 80 H 15 Z" />
        <rect className={styles.counterDetail} x="62" y="13" width="35" height="14" rx="2" />
        <circle className={styles.counterDetail} cx="25" cy="55" r="6" />
      </svg>
    ),
  },
  {
    title: "Island",
    text: "Extra prep space and seating where the room is at least about 12 feet wide.",
    graphic: (
      <svg viewBox="0 0 160 90" fill="none" aria-hidden="true" focusable="false">
        <rect className={styles.counterPrimary} x="15" y="10" width="130" height="20" rx="3" />
        <rect className={styles.counterDetail} x="25" y="13" width="30" height="14" rx="2" />
        <rect className={styles.island} x="35" y="50" width="90" height="24" rx="4" />
        <circle className={styles.islandDetail} cx="80" cy="62" r="6" />
      </svg>
    ),
  },
];

const choices = [
  {
    number: "02",
    title: "Cabinets",
    text: "Cabinet options run from custom-built to refaced boxes. Custom gives any size and finish, semi-custom offers good choice at a lower price, and refacing keeps sound boxes while replacing doors and drawer fronts.",
  },
  {
    number: "03",
    title: "Countertops",
    text: "Quartz is the low-maintenance favorite, granite brings natural pattern and heat resistance, and marble suits gourmet kitchens where its patina is welcome.",
  },
  {
    number: "04",
    title: "Appliances and Lighting",
    text: "We plan circuits, venting and clearances for the appliances you choose, then layer recessed, under-cabinet and pendant lighting so the room works day and night.",
  },
];

export default function BethesdaKitchenDesign() {
  return (
    <section className={styles.section} aria-labelledby="bethesda-kitchen-design-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="bethesda-kitchen-design-title"
            align="center"
            eyebrow={<Badge className={`nostars ${styles.designTag}`}>Design</Badge>}
            title="Kitchen Design and Materials"
            text="The design phase gives you a measured layout, 3D renderings and a full selection list, so you know exactly what will be built before demolition. Four choices shape the result:"
          />
        </div>

        <div className={styles.layoutContainer}>
          <div className={styles.subsectionHeader}>
            <span className={styles.stepNumber}>01</span>
            <h3 className={`${styles.subsectionTitle} h3`}>Layout</h3>
          </div>
          <p className={styles.subsectionIntro}>Bethesda kitchens most often use one of these four layouts:</p>

          <div className={styles.layoutGrid}>
            {layouts.map((layout) => (
              <article className={styles.layoutCard} key={layout.title}>
                <div className={styles.floorplan}>{layout.graphic}</div>
                <strong className={styles.layoutTitle}>{layout.title}</strong>
                <p>{layout.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.trafficNote}>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span>We test each option against your traffic flow before choosing one.</span>
          </div>
        </div>

        <div className={styles.choicesGrid}>
          {choices.map((choice) => (
            <article className={styles.choiceCard} key={choice.number}>
              <div className={styles.choiceHeader}>
                <span className={styles.choiceNumber}>{choice.number}</span>
                <h3>{choice.title}</h3>
              </div>
              <p>{choice.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
