import type { ReactNode } from "react";
import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./bethesda-bathroom-services.module.scss";

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
    title: "Primary suites",
    text: "We enlarge a 1950s primary bath into an adjoining closet or hall, then fit a walk-in shower, a double vanity and a separate toilet room where space allows.",
    icon: (
      <ServiceIcon>
        <path d="M3 11h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" />
        <path d="M6 11V6a2 2 0 0 1 4 0M5 21l1-3M19 21l-1-3" />
      </ServiceIcon>
    ),
  },
  {
    title: "Hall and kids' baths",
    text: "We rebuild the shared upstairs bath with a tub that survives bath time, tile that cleans easily and storage for three or four people.",
    icon: (
      <ServiceIcon>
        <path d="M4 12h16v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-5Z" />
        <path d="M7 12V5a2 2 0 0 1 4 0M9 3v2M3 8h4M17 8h4" />
      </ServiceIcon>
    ),
  },
  {
    title: "Powder rooms",
    text: "We refresh the main-floor half bath guests actually see, or add one where the house never had it.",
    icon: (
      <ServiceIcon>
        <path d="M5 10h14v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-7Z" />
        <path d="M8 10V6a2 2 0 0 1 4 0v4M12 10V4M7 20v1M17 20v1" />
      </ServiceIcon>
    ),
  },
  {
    title: "Tub-to-shower conversions",
    text: "We take out a built-in tub and build a walk-in shower on a properly sloped, membrane-covered floor.",
    icon: (
      <ServiceIcon>
        <path d="M5 12h14v6H5zM7 12V7a2 2 0 0 1 4 0v5M5 18v2M19 18v2" />
        <path d="M12 6h5" />
      </ServiceIcon>
    ),
  },
  {
    title: "Walk-in and curbless showers",
    text: "We lower or rebuild the subfloor so a zero-threshold shower drains without spilling into the room.",
    icon: (
      <ServiceIcon>
        <path d="M4 16h16v4H4zM8 4v8M16 4v8M8 8h8" />
        <path d="M6 16v-2M18 16v-2" />
      </ServiceIcon>
    ),
  },
  {
    title: "Basement bathroom additions",
    text: "We add a full bath to a finished lower level, with an ejector pump where the drain sits below the sewer line.",
    icon: (
      <ServiceIcon>
        <path d="M3 11 12 4l9 7v9H3v-9ZM9 20v-6h6v6" />
        <path d="M14 16h4" />
      </ServiceIcon>
    ),
  },
  {
    title: "Aging-in-place baths",
    text: "We plan for the next twenty years in the house: a level shower entry, wider doorways, taller toilets and backing in the walls for future grab bars.",
    icon: (
      <ServiceIcon>
        <path d="M10 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 8v6l3 3M7 11h5l3 3M5 14h4" />
        <path d="M16 8h4M16 12h4M16 16h4" />
      </ServiceIcon>
    ),
  },
  {
    title: "Downtown condo baths",
    text: "We work within building rules near Bethesda Row and Woodmont Triangle, including elevator bookings and set work hours.",
    icon: (
      <ServiceIcon>
        <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3" />
      </ServiceIcon>
    ),
  },
];

export default function BethesdaBathroomServices() {
  return (
    <section className={styles.section} aria-labelledby="bethesda-bathroom-services-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="bethesda-bathroom-services-title"
            align="center"
            eyebrow={<Badge>Services</Badge>}
            title="Bethesda Bathroom Remodeling Services"
            text={
              <>
                <strong>Bethesda bathroom remodeling</strong> for us falls into eight project types, drawn from our wider
                bathroom remodeling in Maryland and DC and fitted to local colonials, Cape Cods and infill houses:
              </>
            }
          />
          <Button href="/service/bathroom-remodeling" variant="secondary" className={styles.headerButton}>
            All Bathroom Services
          </Button>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <article className={styles.card} key={service.title}>
              <span className={styles.icon}>{service.icon}</span>
              <h3 className={`${styles.cardTitle} h3`}>{service.title}</h3>
              <p className={styles.cardText}>{service.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.note}>
          <p className={styles.noteText}>
            Every <strong>bathroom renovation in Bethesda, MD</strong> begins with a free visit, and our{" "}
            <Link href="/service-area/bethesda-md">general contractor in Bethesda page</Link> covers the other
            projects we handle locally.
          </p>
          <Button
            href="/contact-us"
            data-estimate-trigger
            icon={<ArrowRightIcon />}
            className={styles.noteButton}
          >
            Book the Free Visit
          </Button>
        </div>
      </Container>
    </section>
  );
}
