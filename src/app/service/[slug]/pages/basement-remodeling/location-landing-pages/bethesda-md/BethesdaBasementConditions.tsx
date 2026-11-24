import type { ReactNode } from "react";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "../../../bathroom-remodeling/location-landing-pages/bethesda-md/bethesda-bathroom-cost-drivers.module.scss";

function ConditionIcon({ children }: { children: ReactNode }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            {children}
        </svg>
    );
}

const conditions = [
    {
        title: "Water and Drainage",
        text: "Block foundations from the 1930s to the 1960s often seep after heavy rain. We trace the source, whether it is grading, a downspout dumping beside the wall or a missing sump, and fix it before any studs go up.",
        icon: <ConditionIcon><path d="M12 3s6 6.4 6 10.2A6 6 0 0 1 6 13.2C6 9.4 12 3 12 3Z" /></ConditionIcon>,
    },
    {
        title: "Headroom",
        text: "Living space below grade needs roughly 7 feet of clear height under the county's adopted residential code, IRC section R305. Older houses often lose that height under ducts and beams, so we measure at the lowest point, not the joists.",
        icon: <ConditionIcon><path d="M4 20h16M6 20V6h12v14M6 10h12M9 6V4h6v2" /></ConditionIcon>,
    },
    {
        title: "Insulation and Vapor Control",
        text: "Foam board or closed-cell foam against the concrete keeps warm indoor air from condensing on cold walls, which is what causes mold behind finished drywall.",
        icon: <ConditionIcon><path d="M4 5h16v14H4zM4 9h16M4 13h16M8 5v14M16 5v14" /></ConditionIcon>,
    },
    {
        title: "Emergency Escape",
        text: "A basement bedroom needs an egress opening under IRC section R310, usually a window with 5.7 square feet of clear opening, a sill no higher than 44 inches and a well large enough to climb out of.",
        icon: <ConditionIcon><path d="M4 20V6h11v14M15 11h5v9M8 12h3M9 11v2" /></ConditionIcon>,
    },
    {
        title: "Heating, Cooling and Power",
        text: "We confirm whether the existing furnace and panel can serve the new rooms or whether a separate zone, a ductless unit or a subpanel is needed.",
        icon: <ConditionIcon><path d="M4 8h9a3 3 0 1 0-3-3M4 12h13a3 3 0 1 1-3 3M4 16h6" /></ConditionIcon>,
    },
];

export default function BethesdaBasementConditions() {
    return (
        <section className={styles.section} aria-labelledby="bethesda-basement-conditions-title">
            <Container>
                <div className={styles.header}>
                    <SectionHeading
                        id="bethesda-basement-conditions-title"
                        align="center"
                        eyebrow={<Badge>Before you finish</Badge>}
                        title="Before You Finish: Moisture, Ceiling Height and Egress"
                        text="Five conditions decide whether a Bethesda basement is ready to finish, and older colonials and Cape Cods test most of them:"
                    />
                </div>

                <div className={styles.grid}>
                    {conditions.map((condition, index) => (
                        <article className={styles.card} key={condition.title}>
                            <div className={styles.cardTop}>
                                <span className={styles.iconBox}>{condition.icon}</span>
                                <span className={styles.step}>{String(index + 1).padStart(2, "0")}</span>
                            </div>
                            <h3 className={`${styles.cardTitle} h3`}>{condition.title}</h3>
                            <p className={styles.cardText}>{condition.text}</p>
                        </article>
                    ))}
                </div>

                <div className={styles.noteBanner}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>Any fix these checks call for is listed and priced separately, so you can see it before deciding.</span>
                </div>
            </Container>
        </section>
    );
}
