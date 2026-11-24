import type { ReactNode } from "react";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "../../../kitchen-remodeling/location-landing-pages/bethesda-md/bethesda-kitchen-cost-drivers.module.scss";

function StructureIcon({ children }: { children: ReactNode }) {
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

const connections = [
  {
    title: "Footings and Framing",
    text: "Footings are designed for the clay common under Bethesda lots, and new joists and studs are bolted to the old plates so the two halves act as one.",
    icon: (
      <StructureIcon>
        <path d="M4 21V9l8-5 8 5v12" />
        <path d="M4 9h16M8 21v-7h8v7" />
      </StructureIcon>
    ),
  },
  {
    title: "Roofline",
    text: "On a Cape Cod or rambler going up, the whole roof is rebuilt; on a rear addition, the new roof meets the old at a matching pitch with flashing at every joint.",
    icon: (
      <StructureIcon>
        <path d="m3 11 9-7 9 7" />
        <path d="M5 10v10h14V10" />
      </StructureIcon>
    ),
  },
  {
    title: "Brick, Siding and Windows",
    text: "Bethesda colonials are often brick, so we source matching brick or plan a deliberate change of material, and line up window sizes and head heights with the originals.",
    icon: (
      <StructureIcon>
        <path d="M4 4h16v16H4zM4 10h16M4 15h16M10 4v6M15 10v5" />
      </StructureIcon>
    ),
  },
  {
    title: "Heating, Cooling and Power",
    text: "We check the furnace, air conditioner and panel for spare capacity and add ductwork, a ductless system or a service upgrade where they fall short.",
    icon: (
      <StructureIcon>
        <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" />
      </StructureIcon>
    ),
  },
];

export default function BethesdaHomeAdditionStructure() {
  return (
    <section className={styles.section} aria-labelledby="bethesda-home-addition-structure-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="bethesda-home-addition-structure-title"
            align="center"
            title="Structure, Roof and Systems"
            text="An addition has to join the existing house, its roof, its siding and its systems so the new part looks original. We engineer four connections:"
          />
        </div>

        <div className={styles.grid}>
          {connections.map((connection) => (
            <article className={styles.card} key={connection.title}>
              <div className={styles.cardTop}>
                <span className={styles.iconBox}>{connection.icon}</span>
              </div>
              <h3 className={`${styles.cardTitle} h3`}>{connection.title}</h3>
              <p className={styles.cardText}>{connection.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.noteBanner}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span>Done well, nobody walking past can tell where the old house stops.</span>
        </div>
      </Container>
    </section>
  );
}
