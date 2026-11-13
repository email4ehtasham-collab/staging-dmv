import type { ReactNode } from "react";
import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./bethesda-kitchen-services.module.scss";

function ServiceIcon({ children }: { children: ReactNode }) {
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

function ArrowRightIcon() {
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
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

const services = [
  {
    title: "Full gut renovation",
    text: "We take a 1950s or 1960s colonial kitchen down to the framing and rebuild it with new systems, cabinetry and finishes.",
    icon: (
      <ServiceIcon>
        <path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6 4-4" />
        <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
      </ServiceIcon>
    ),
  },
  {
    title: "Layout change",
    text: "We remove the load-bearing wall between kitchen and family room, add a beam and create one open space.",
    icon: (
      <ServiceIcon>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </ServiceIcon>
    ),
  },
  {
    title: "Small or condo kitchen",
    text: "We fit more storage and better lighting into compact kitchens in downtown Bethesda condos and older Cape Cods.",
    icon: (
      <ServiceIcon>
        <path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3" />
        <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      </ServiceIcon>
    ),
  },
  {
    title: "Refresh",
    text: "We reface or replace cabinet doors, install new countertops and update lighting without moving anything.",
    icon: (
      <ServiceIcon>
        <path d="m14.622 17.897-10.68-2.913M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0zM9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" />
      </ServiceIcon>
    ),
  },
  {
    title: "Kitchen island",
    text: "We add or enlarge an island with seating, storage and, where plumbing allows, a prep sink.",
    icon: (
      <ServiceIcon>
        <path d="M2 12h20m-2 0v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8m0-4 16-4M8.86 6.78l-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
      </ServiceIcon>
    ),
  },
  {
    title: "Addition or bump-out",
    text: "We push an exterior wall out a few feet when the existing kitchen is simply too small.",
    icon: (
      <ServiceIcon>
        <path d="m15 15 6 6M15 9l6-6m0 13v5h-5m5-13V3h-5M3 16v5h5m-5 0 6-6M3 8V3h5m1 6L3 3" />
      </ServiceIcon>
    ),
  },
];

export default function BethesdaKitchenServices() {
  return (
    <section className={styles.section} aria-labelledby="bethesda-kitchen-services-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="bethesda-kitchen-services-title"
            align="center"
            eyebrow={<Badge>Services</Badge>}
            title="Bethesda Kitchen Remodeling Services"
            text="Our Bethesda kitchen remodeling team handles six kinds of projects, and each kitchen renovation in Bethesda, MD is shaped around the house it sits in:"
          />
          <Button href="/service/kitchen-remodeling" variant="secondary" className={styles.headerButton}>
            All Kitchen Services
          </Button>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article className={styles.card} key={service.title}>
              <span className={styles.icon}>{service.icon}</span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.note}>
          <p className={styles.noteText}>
            After the consultation we recommend the type of project that fits your goals and budget.
          </p>
          <Button
            href="/contact-us"
            data-estimate-trigger
            icon={<ArrowRightIcon />}
            className={styles.noteButton}
          >
            Book the Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
}
