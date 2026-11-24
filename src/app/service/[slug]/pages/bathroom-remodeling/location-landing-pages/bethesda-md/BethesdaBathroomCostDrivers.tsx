import type { ReactNode } from "react";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./bethesda-bathroom-cost-drivers.module.scss";

function DriverIcon({ children }: { children: ReactNode }) {
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

const drivers = [
  {
    title: "Plumbing moves",
    text: "Shifting a toilet or shower in a 1930s to 1960s colonial or Cape Cod often means opening the ceiling below to reroute drains.",
    icon: (
      <DriverIcon>
        <path d="M4 8h4a4 4 0 0 1 4 4 4 4 0 0 0 4 4h4" />
        <path d="m17 13 4 3-4 3M4 5v6" />
      </DriverIcon>
    ),
  },
  {
    title: "The shower itself",
    text: "A tiled shower needs a membrane, a mortar bed sloped to the drain and glass, which together form the biggest line item.",
    icon: (
      <DriverIcon>
        <path d="M4 16h16v4H4zM8 4v8M16 4v8M8 8h8" />
        <path d="M6 16v-2M18 16v-2" />
      </DriverIcon>
    ),
  },
  {
    title: "Vanities and stone",
    text: "A built-to-fit double vanity under a quartzite or marble slab can cost what a whole refresh does elsewhere.",
    icon: (
      <DriverIcon>
        <path d="M3 10h18M3 14h18M5 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
      </DriverIcon>
    ),
  },
  {
    title: "Comfort features",
    text: "Heated floors and steam showers add circuits, controls and extra waterproofing.",
    icon: (
      <DriverIcon>
        <path d="M13 10V3L4 14h7v7l9-11h-7Z" />
      </DriverIcon>
    ),
  },
  {
    title: "Hidden conditions",
    text: "Rotted subfloor under an old toilet or corroded galvanized pipe often appears only after demolition.",
    icon: (
      <DriverIcon>
        <path d="M12 3 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z" />
        <path d="M12 8v4M12 16h.01" />
      </DriverIcon>
    ),
  },
];

export default function BethesdaBathroomCostDrivers() {
  return (
    <section className={styles.section} aria-labelledby="bethesda-bathroom-cost-drivers-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="bethesda-bathroom-cost-drivers-title"
            align="center"
            eyebrow={<Badge>Cost Analysis</Badge>}
            title="What Drives the Cost of a Bethesda Bathroom Remodel?"
            text="Five factors decide where a Bethesda bathroom lands within those ranges:"
          />
        </div>

        <div className={styles.noteBanner}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span>We name the likely ones at the first visit and price a contingency for the rest.</span>
        </div>

        <div className={styles.grid}>
          {drivers.map((driver, index) => (
            <article className={styles.card} key={driver.title}>
              <div className={styles.cardTop}>
                <span className={styles.iconBox}>{driver.icon}</span>
                <span className={styles.step}>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className={`${styles.cardTitle} h3`}>{driver.title}</h3>
              <p className={styles.cardText}>{driver.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
