"use client";

import { useState } from "react";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "../../../bathroom-remodeling/location-landing-pages/bethesda-md/bethesda-bathroom-timeline.module.scss";

type TimelineFilter = "planning" | "construction";
type TimelineIconName = "design" | "permit" | "refresh" | "wrench" | "home";

type TimelineItem = {
    category: TimelineFilter;
    variant: TimelineFilter;
    title: string;
    meta: string;
    label: string;
    left: number;
    width: number;
    icon: TimelineIconName;
};

const timelineItems: TimelineItem[] = [
    {
        category: "planning",
        variant: "planning",
        title: "Assessment and design",
        meta: "2–4 weeks",
        label: "2–4",
        left: 0,
        width: 20,
        icon: "design",
    },
    {
        category: "planning",
        variant: "planning",
        title: "DPS and WSSC review",
        meta: "About 3–6 weeks",
        label: "3–6",
        left: 12,
        width: 38,
        icon: "permit",
    },
    {
        category: "construction",
        variant: "construction",
        title: "Construction: open finish",
        meta: "5–8 weeks",
        label: "5–8",
        left: 22,
        width: 40,
        icon: "refresh",
    },
    {
        category: "construction",
        variant: "construction",
        title: "Construction: rooms plus a bathroom",
        meta: "8–12 weeks",
        label: "8–12",
        left: 30,
        width: 55,
        icon: "wrench",
    },
    {
        category: "construction",
        variant: "construction",
        title: "Construction: accessory apartment or premium finish",
        meta: "10–14 weeks",
        label: "10–14",
        left: 38,
        width: 64,
        icon: "home",
    },
];

const timelineTabs: { key: TimelineFilter; label: string }[] = [
    { key: "planning", label: "Planning and permit review" },
    { key: "construction", label: "Construction" },
];

const timelineWeeks = ["0", "2", "4", "6", "8", "10", "12", "14 wks"];

function ClockIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function TimelineIcon({ name }: { name: TimelineIconName }) {
    const props = {
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": true,
    } as const;

    if (name === "design") {
        return (
            <svg {...props}>
                <path d="M4 20h4L19 9l-4-4L4 16v4ZM13 7l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }

    if (name === "permit") {
        return (
            <svg {...props}>
                <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6ZM14 3v6h6M9 14l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }

    if (name === "refresh") {
        return (
            <svg {...props}>
                <path d="m14 4 6 6-3 3-6-6 3-3ZM11 7l-7 7v4h4l7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }

    if (name === "wrench") {
        return (
            <svg {...props}>
                <path d="M14.5 6.5a4 4 0 0 0-5.7 4.7l-5 5 3.8 3.8 5-5a4 4 0 0 0 4.7-5.7l-3 3-3.8-3.8 3-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }

    return (
        <svg {...props}>
            <path d="M3 11 12 4l9 7v9H3v-9ZM9 20v-6h6v6M8 11l4 5 4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ProTipIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2v.1h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function BethesdaBasementTimeline() {
    const [timelineFilter, setTimelineFilter] = useState<TimelineFilter>("planning");

    return (
        <section id="basement-timeline" className={styles.section} aria-labelledby="bethesda-basement-timeline-title">
            <Container>
                <div className={styles.header}>
                    <SectionHeading
                        id="bethesda-basement-timeline-title"
                        align="center"
                        eyebrow={<Badge icon={<ClockIcon />}>Timeline</Badge>}
                        title="How Long Does It Take to Finish a Basement in Bethesda?"
                        text="Expect roughly 6 to 12 weeks of construction once the permit is issued, after about 3 to 6 weeks of county review. Typical phases:"
                    />
                </div>

                <div className={styles.timelineControls}>
                    <div className={styles.timelineLegend}>
                        <span>
                            <span className={`${styles.legendDot} ${styles.legendPlanning}`} />
                            Planning and permits
                        </span>
                        <span>
                            <span className={`${styles.legendDot} ${styles.legendConstruction}`} />
                            Construction
                        </span>
                    </div>

                    <div className={styles.timelineTabs} role="group" aria-label="Filter timeline phases">
                        {timelineTabs.map((tab) => (
                            <button
                                key={tab.key}
                                type="button"
                                className={`${styles.timelineTab} ${timelineFilter === tab.key ? styles.timelineTabActive : ""}`}
                                aria-pressed={timelineFilter === tab.key}
                                onClick={() => setTimelineFilter(tab.key)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.timelineChart}>
                    <div className={styles.timelineScroller}>
                        <div className={styles.timelineInner}>
                            <div className={styles.timelineHeader}>
                                <span className={styles.timelineHeaderTitle}>Phase</span>
                                <div className={styles.timelineWeeks}>
                                    {timelineWeeks.map((week) => (
                                        <span key={week}>{week}</span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.timelineRows}>
                                {timelineItems.map((item) => {
                                    const barClass =
                                        item.variant === "planning" ? styles.timelineBarPlanning : styles.timelineBarConstruction;

                                    return (
                                        <div className={styles.timelineRow} key={item.title} hidden={timelineFilter !== item.category}>
                                            <div className={styles.timelineInfo}>
                                                <strong>{item.title}</strong>
                                                <span>{item.meta}</span>
                                            </div>
                                            <div className={styles.timelineTrack}>
                                                <div className={`${styles.timelineBar} ${barClass}`} style={{ left: `${item.left}%`, width: `${item.width}%` }}>
                                                    <TimelineIcon name={item.icon} />
                                                    <span>{item.label}</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.timelineTip}>
                    <span className={styles.timelineTipIcon}>
                        <ProTipIcon className={styles.timelineTipSvg} />
                    </span>
                    <div className={styles.timelineTipCopy}>
                        <span className={styles.timelineTipLabel}>Tip</span>
                        <p>A 1,000-square-foot basement with a bathroom usually lands in the middle of the construction range.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
