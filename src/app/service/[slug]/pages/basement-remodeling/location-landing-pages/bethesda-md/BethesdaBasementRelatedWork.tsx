import type { ReactNode } from "react";
import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import styles from "../../../bathroom-remodeling/location-landing-pages/bethesda-md/bethesda-bathroom-related-work.module.scss";

type RelatedWorkItem = {
    label: string;
    text: ReactNode;
    href: string;
    icon: "bathroom" | "electrical" | "plumbing" | "hvac" | "flooring" | "framing";
};

const relatedWorkItems: RelatedWorkItem[] = [
    {
        label: "Bathroom",
        text: "Shower, vanity and toilet placement below grade are worked out with our bathroom remodeling team.",
        href: "/service/bathroom-remodeling",
        icon: "bathroom",
    },
    {
        label: "Electrical",
        text: "Lighting, outlets and a possible subpanel come from our electrical services.",
        href: "/service/electrical-services",
        icon: "electrical",
    },
    {
        label: "Plumbing",
        text: "Bar sinks, laundry moves and apartment kitchens run through our plumbing services.",
        href: "/service/plumbing-services",
        icon: "plumbing",
    },
    {
        label: "Heating and cooling",
        text: "A ductless unit or separate zone from HVAC in Bethesda keeps the space comfortable.",
        href: "/service/hvac/bethesda-md",
        icon: "hvac",
    },
    {
        label: "Flooring",
        text: "LVP and tile handle a concrete slab, and our flooring remodeling team installs both.",
        href: "/service/flooring-remodeling",
        icon: "flooring",
    },
    {
        label: "Framing",
        text: "Insulated stud walls and soffits around ducts are built through framing in Bethesda.",
        href: "/service/framing/bethesda-md",
        icon: "framing",
    },
];

function RelatedWorkIcon({ name }: { name: RelatedWorkItem["icon"] }) {
    if (name === "bathroom") {
        return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M4 11h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Z" />
                <path d="M7 11V6a2 2 0 0 1 4 0M5 21l1-3M19 21l-1-3" />
            </svg>
        );
    }

    if (name === "electrical") {
        return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <rect x="5" y="3" width="14" height="18" rx="2" />
                <path d="m13 7-4 6h4l-2 5 5-7h-4l1-4Z" />
            </svg>
        );
    }

    if (name === "plumbing") {
        return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M4 8h4a4 4 0 0 1 4 4 4 4 0 0 0 4 4h4" />
                <path d="m17 13 4 3-4 3M4 5v6" />
            </svg>
        );
    }

    if (name === "hvac") {
        return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M4 8h9a3 3 0 1 0-3-3M4 12h13a3 3 0 1 1-3 3M4 16h6" />
            </svg>
        );
    }

    if (name === "flooring") {
        return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                <path d="M3 7h18M3 12h18M3 17h18" />
                <path d="M8 7v5M15 12v5M10 17v0" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="M4 20V9l8-5 8 5v11" />
            <path d="M4 9h16M8 9v11M12 9v11M16 9v11" />
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="M6 14 14 6M8 6h6v6" />
        </svg>
    );
}

export default function BethesdaBasementRelatedWork() {
    return (
        <section className={styles.section} aria-labelledby="bethesda-basement-related-title">
            <Container>
                <div className={styles.layout}>
                    <div className={styles.header}>
                        <Badge>Related Work</Badge>
                        <h2 id="bethesda-basement-related-title">What Else to Plan With a Bethesda Basement Project</h2>
                        <div className={styles.intro}>
                            <p>Decide these related jobs before the walls close:</p>
                        </div>
                    </div>

                    <div className={styles.grid}>
                        {relatedWorkItems.map((item) => (
                            <Link key={item.label} href={item.href} className={styles.card}>
                                <span className={styles.iconWrap}>
                                    <RelatedWorkIcon name={item.icon} />
                                </span>
                                <span className={styles.cardBody}>
                                    <span className={styles.label}>{item.label}</span>
                                    <span className={styles.text}>{item.text}</span>
                                </span>
                                <span className={styles.arrow}>
                                    <ArrowIcon />
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div className={styles.intro}>
                        <p>Folded into the basement job, they share the same drawings and inspections.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
