import type { ReactNode } from "react";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "../../../kitchen-remodeling/location-landing-pages/bethesda-md/bethesda-kitchen-services.module.scss";

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

const services = [
  {
    title: "Second stories on Cape Cods and ramblers.",
    text: "We lift a one-and-a-half or one-story house into a full two stories, adding bedrooms without losing yard.",
    icon: (
      <ServiceIcon>
        <path d="M3 11 12 4l9 7v9H3v-9Z" />
        <path d="M3 11h18M9 20v-6h6v6" />
      </ServiceIcon>
    ),
  },
  {
    title: "Rear family-room additions.",
    text: "We open the back of a colonial into a new family room that connects to the kitchen.",
    icon: (
      <ServiceIcon>
        <path d="M4 20V9l8-5 8 5v11" />
        <path d="M4 9h16M9 20v-7h6v7" />
      </ServiceIcon>
    ),
  },
  {
    title: "Primary suites.",
    text: "We add a bedroom, bath and walk-in closet on the ground floor for one-level living, or above an existing wing.",
    icon: (
      <ServiceIcon>
        <path d="M3 18V8l9-5 9 5v10" />
        <path d="M8 18v-5h8v5M12 7v2" />
      </ServiceIcon>
    ),
  },
  {
    title: "Kitchen extensions.",
    text: "We borrow yard space so a cramped 1950s kitchen can finally hold an island and a table.",
    icon: (
      <ServiceIcon>
        <path d="M3 10h18v9H3zM7 10V6h10v4M9 19v2M15 19v2" />
      </ServiceIcon>
    ),
  },
  {
    title: "Bump-outs.",
    text: "We extend a single wall a few feet to enlarge a mudroom, bath or dining area.",
    icon: (
      <ServiceIcon>
        <path d="M4 20V9l8-5 8 5v11" />
        <path d="M12 4v16M4 14h16" />
      </ServiceIcon>
    ),
  },
  {
    title: "Sunrooms.",
    text: "We build insulated, heated and cooled glass rooms that work in January as well as June.",
    icon: (
      <ServiceIcon>
        <path d="M4 20V8l8-5 8 5v12" />
        <path d="M4 12h16M12 3v17" />
      </ServiceIcon>
    ),
  },
  {
    title: "Garages with a suite above.",
    text: "We add a garage and finish the space over it as an office, guest room or apartment.",
    icon: (
      <ServiceIcon>
        <path d="M3 20V10l9-6 9 6v10" />
        <path d="M7 20v-7h10v7M3 13h18" />
      </ServiceIcon>
    ),
  },
  {
    title: "In-law suites.",
    text: "We create a private wing where a grandparent can live close by with a separate door, bath and bedroom.",
    icon: (
      <ServiceIcon>
        <path d="M3 20V9l9-6 9 6v11" />
        <path d="M9 20v-6h6v6M3 13h18" />
      </ServiceIcon>
    ),
  },
];

export default function BethesdaHomeAdditionServices() {
  return (
    <section className={styles.section} aria-labelledby="bethesda-home-addition-services-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="bethesda-home-addition-services-title"
            align="center"
            eyebrow={<Badge>Services</Badge>}
            title="Bethesda Home Addition Contractor for Every Type of Addition"
            text={
              <>
                As a <strong>Bethesda home addition contractor</strong>, we build eight kinds of additions, the same
                range behind our home additions in Maryland and DC, fitted to the 1930s to 1960s houses that fill most
                neighborhoods here:
              </>
            }
          />
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
            Working as your <strong>home addition contractor in Bethesda, MD</strong>, we can cost two of these side by
            side, and the
            rest of what we build nearby is listed on our general contractor in Bethesda page.
          </p>
        </div>
      </Container>
    </section>
  );
}
