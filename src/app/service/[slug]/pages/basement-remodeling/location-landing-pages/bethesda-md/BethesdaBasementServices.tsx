import type { ReactNode } from "react";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import Badge from "@/components/Common/Badge";
import styles from "../../../bathroom-remodeling/location-landing-pages/bethesda-md/bethesda-bathroom-services.module.scss";

function ServiceIcon({ children }: { children: ReactNode }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            {children}
        </svg>
    );
}

function ArrowRightIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
    );
}

const services = [
    {
        title: "Family rooms",
        text: "We give the kids a lower-level den with carpet tiles or LVP, recessed lights and wiring for screens and consoles.",
        icon: <ServiceIcon><path d="M4 11h16v7H4zM7 11V7h10v4M8 18v2M16 18v2" /></ServiceIcon>,
    },
    {
        title: "Home offices",
        text: "We build a quiet office below the main floor, with soundproofing in the joists and a window well that brings in daylight.",
        icon: <ServiceIcon><path d="M4 6h16v12H4zM9 18v2M15 18v2M8 10h3M13 10h3M8 14h3" /></ServiceIcon>,
    },
    {
        title: "Home gyms",
        text: "We create a workout room with impact flooring, wall mirrors, a ceiling fan and power sized for a treadmill.",
        icon: <ServiceIcon><path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12" /></ServiceIcon>,
    },
    {
        title: "Home theaters",
        text: "We insulate for sound, pre-wire speakers and plan dimmable lighting around the screen wall.",
        icon: <ServiceIcon><path d="M4 5h16v12H4zM8 17v2M16 17v2M9 9l5 2-5 2V9Z" /></ServiceIcon>,
    },
    {
        title: "Guest suites",
        text: "We add a bedroom, closet and egress window so visiting family has its own floor.",
        icon: <ServiceIcon><path d="M4 20V7l8-4 8 4v13M9 20v-5h6v5M8 10h2M14 10h2" /></ServiceIcon>,
    },
    {
        title: "Basement bathrooms",
        text: "We tie a new bath into existing drains where possible and use an ejector pump where the fixtures sit too low.",
        icon: <ServiceIcon><path d="M4 11h16v4H4zM7 11V6a2 2 0 0 1 4 0M6 15v5M18 15v5" /></ServiceIcon>,
    },
    {
        title: "Wet bars",
        text: "We fit a bar sink, beverage fridge and cabinets near the entertaining space.",
        icon: <ServiceIcon><path d="M5 6h14v5H5zM7 11v7M17 11v7M12 6V3M9 3h6" /></ServiceIcon>,
    },
    {
        title: "In-law or rental apartments",
        text: "We design a separate unit for a parent, an adult child or a tenant, with cooking space, a bath and a side or rear door, ready for county licensing.",
        icon: <ServiceIcon><path d="M3 20V5h11v15M14 9h7v11M6 8h2M10 8h1M6 12h2M10 12h1M6 16h2M10 16h1M17 13h1" /></ServiceIcon>,
    },
];

export default function BethesdaBasementServices() {
    return (
        <section className={styles.section} aria-labelledby="bethesda-basement-services-title">
            <Container>
                <div className={styles.header}>
                    <SectionHeading
                        id="bethesda-basement-services-title"
                        align="center"
                        eyebrow={<Badge>Services</Badge>}
                        title="Basement Finishing in Bethesda, MD: What We Build"
                        text={
                            <>
                                Our <strong>basement finishing in Bethesda, MD</strong> covers the eight uses Bethesda
                                families most often ask for:
                            </>
                        }
                    />
                    <Button href="/service/basement-remodeling" variant="secondary" className={styles.headerButton}>
                        All Basement Services
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
                        When a 1950s basement is too low to finish, lowering the floor is another option we can price. Any{" "}
                        <strong>basement renovation in Bethesda, MD</strong> we take on begins with a no-cost visit.
                    </p>
                    <Button href="/contact-us" data-estimate-trigger icon={<ArrowRightIcon />} className={styles.noteButton}>
                        Book the Free Visit
                    </Button>
                </div>
            </Container>
        </section>
    );
}
