import type { ReactNode } from "react";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./bethesda-kitchen-cost-drivers.module.scss";

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
    title: "Layout and Wall Changes",
    text: "Moving or removing walls brings structural work, an engineer and a permit.",
    icon: (
      <DriverIcon>
        <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
      </DriverIcon>
    ),
  },
  {
    title: "Cabinet Grade",
    text: "Stock, semi-custom, custom and refacing sit at very different price points.",
    icon: (
      <DriverIcon>
        <path d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm0 10a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4ZM9 7h1m0 10h1" />
      </DriverIcon>
    ),
  },
  {
    title: "Countertops",
    text: "Quartz, granite and marble vary widely by slab, edge and square footage.",
    icon: (
      <DriverIcon>
        <path d="M3 10h18M3 14h18M5 6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
      </DriverIcon>
    ),
  },
  {
    title: "Appliances",
    text: "A professional range or built-in refrigerator can cost as much as the cabinets.",
    icon: (
      <DriverIcon>
        <path d="M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2ZM6 8h12" />
      </DriverIcon>
    ),
  },
  {
    title: "Older-House Upgrades",
    text: "Many Bethesda homes need a panel upgrade, new wiring or plaster repair once walls open.",
    icon: (
      <DriverIcon>
        <path d="M13 10V3L4 14h7v7l9-11h-7Z" />
      </DriverIcon>
    ),
  },
  {
    title: "Design, Permits & Inspections",
    text: "Drawings, county fees and inspection visits are part of every permitted job.",
    icon: (
      <DriverIcon>
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
      </DriverIcon>
    ),
  },
];

export default function BethesdaKitchenCostDrivers() {
  return (
    <section className={styles.section} aria-labelledby="bethesda-kitchen-cost-drivers-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="bethesda-kitchen-cost-drivers-title"
            align="center"
            eyebrow={<Badge>Cost Analysis</Badge>}
            title="What Drives the Cost of a Bethesda Kitchen Remodel?"
            text="These six factors account for most of the difference between a modest and a major Bethesda kitchen budget:"
          />
        </div>

        <div className={styles.noteBanner}>
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span>Your written estimate shows which of these apply and how much each adds.</span>
        </div>

        <div className={styles.grid}>
          {drivers.map((driver, index) => (
            <article className={styles.card} key={driver.title}>
              <div className={styles.cardTop}>
                <span className={styles.iconBox}>{driver.icon}</span>
                <span className={styles.step}>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className={styles.cardTitle}>{driver.title}</h3>
              <p className={styles.cardText}>{driver.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
