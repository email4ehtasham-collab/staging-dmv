"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import NavitemActive from "@/components/Common/NavitemActive";
import SectionHeading from "@/components/Common/SectionHeading";
import Estimate from "@/components/redesign/home/estimate/Estimate";
import HomeFaq from "@/components/redesign/home/home-faq/HomeFaq";
import InHomeConsultation from "@/components/redesign/home/in-home-consultation/InHomeConsultation";
import LicensedInsured from "@/components/redesign/home/licensed-insured/LicensedInsured";
import Permits from "@/components/redesign/home/permits/Permits";
import RecentProjects from "@/components/redesign/home/recent-projects/RecentProjects";
import type { ProjectCardData } from "@/components/redesign/home/recent-projects/ProjectCard";
import styles from "./style.module.scss";

type BathroomService = {
    image?: string;
    imageAlt?: string;
    title?: string;
};

const includedItems = [
    {
        number: "01",
        title: "Tear-out",
        text: "We remove old tile, fixtures and drywall and seal the doorway against dust.",
    },
    {
        number: "02",
        title: "Plumbing",
        text: "We replace or relocate supply lines, drains and valves, and swap out corroded pipe found in the walls.",
    },
    {
        number: "03",
        title: "Waterproofing",
        text: "We apply a membrane behind shower tile and pitch the shower floor to the drain.",
    },
    {
        number: "04",
        title: "Tile",
        text: "We set floor and wall tile, including niches and built-in benches.",
    },
    {
        number: "05",
        title: "Vanity and storage",
        text: "We mount the vanity, top, sink, faucet and any recessed medicine cabinet.",
    },
    {
        number: "06",
        title: "Lighting and ventilation",
        text: "We add vanity and ceiling lights and an exhaust fan ducted outdoors.",
    },
    {
        number: "07",
        title: "Fixtures and glass",
        text: "We finish with the toilet, shower trim, glass panels, mirror and accessories.",
    },
];

type ServiceIconName =
    | "renovation"
    | "shower"
    | "layout"
    | "refresh"
    | "building"
    | "addition"
    | "accessible"
    | "custom";

type BathroomServiceItem = {
    title: string;
    text: string;
    icon: ServiceIconName;
    link?: {
        label: string;
        href: string;
    };
    afterLink?: string;
};

const services: BathroomServiceItem[] = [
    {
        icon: "custom",
        title: "Primary Suites",
        text: "We enlarge primary bathrooms with bigger showers, double vanities and extra storage. Space often comes from a closet or hall next door.",
    },
    {
        icon: "refresh",
        title: "Guest and Hall Baths",
        text: "We rebuild shared baths with hard-wearing tile, a new tub or shower and a vanity sized to the room. These rooms take daily use from kids and visitors.",
    },
    {
        icon: "layout",
        title: "Powder Rooms and New Half Baths",
        text: "We update powder rooms and add half baths on the main floor. A new fixture means new drain and water lines plus a plumbing permit.",
    },
    {
        icon: "shower",
        title: "Tub-to-Shower Conversions",
        text: "We swap an unused tub for a walk-in shower. The new pan, membrane and drain are built from scratch so water stays out of the framing.",
    },
    {
        icon: "renovation",
        title: "Walk-In and Curbless Showers",
        text: "We build walk-in and curbless showers with frameless glass, niches and thermostatic valves. A curbless floor must be recessed or sloped, and we plan that before demolition.",
    },
    {
        icon: "accessible",
        title: "Accessible and Aging-in-Place Designs",
        text: "We add curbless entries, grab bars over solid blocking, comfort-height toilets and slip-resistant tile. Doorways are widened where the framing allows.",
    },
    {
        icon: "building",
        title: "Condo Projects",
        text: "Condo bathroom work takes us into Bethesda, Silver Spring and District buildings. Each job follows board approvals, building work hours and the shared stacks that serve the units above and below.",
    },
    {
        icon: "addition",
        title: "Added Bathrooms",
        text: "We add a full or half bath inside an existing room, in a basement or within a new addition. New drains, vents, water lines and permits are part of the scope.",
    },
];

const budgetTiers = [
    {
        tier: "Refresh",
        title: "Refresh",
        price: "$10,000–$20,000",
        text: "New vanity, toilet, fixtures, lighting, paint and flooring with the plumbing left in place",
    },
    {
        tier: "Full remodel",
        title: "Full remodel",
        price: "$25,000–$45,000",
        text: "New tiled shower or tub, waterproofing, plumbing updates, vanity, lighting and exhaust fan",
    },
    {
        tier: "Primary or luxury",
        title: "Primary or luxury",
        price: "$50,000–$80,000+",
        text: "Larger layout changes, custom vanities, stone or large-format tile, frameless glass and features like heated floors",
    },
];

const costDrivers = [
    {
        title: "Plumbing moves",
        text: "Relocating a toilet, shower or sink means new drains and supply lines, often cut through the subfloor.",
    },
    {
        title: "Tiled showers",
        text: "Membrane, sloped pan, tile and glass form the largest single line item.",
    },
    {
        title: "Custom vanities",
        text: "A custom double vanity with a stone top costs far more than a stock unit.",
    },
    {
        title: "Stone and large-format tile",
        text: "These cost more per square foot and take more labor to set flat.",
    },
];

type DesignIconName = "layout" | "cabinets" | "countertops" | "lighting";

type DesignDecision = {
    title: string;
    text: string;
    icon: DesignIconName;
};

const designDecisions: DesignDecision[] = [
    {
        icon: "countertops",
        title: "Tile",
        text: "Porcelain is durable and easy to clean. Natural stone looks richer but needs sealing. Large-format tile leaves fewer grout lines on floors and shower walls.",
    },
    {
        icon: "cabinets",
        title: "Vanities",
        text: "We install floating vanities that free up floor space and double vanities for shared primary baths. Built-to-measure cabinets suit odd alcoves and out-of-plumb plaster.",
    },
    {
        icon: "layout",
        title: "Showers",
        text: "Our showers use frameless glass, recessed niches and thermostatic valves that hold water temperature steady.",
    },
    {
        icon: "lighting",
        title: "Ventilation and Waterproofing",
        text: "Each shower gets a membrane, a floor pitched to the drain and a fan ducted outside. These hidden layers decide whether water stays out of the walls and the ceiling below.",
    },
];

const bathroomProcessSteps = [
    {
        number: "01",
        title: "Measure",
        text: "We size the room, check the pipes, vent and fan duct, and agree on a budget.",
    },
    {
        number: "02",
        title: "Select",
        text: "Together we pick tile, vanity and fixtures, and you approve a drawn layout plus an itemized price.",
    },
    {
        number: "03",
        title: "Permit",
        text: "We file plumbing permits with WSSC Water, Rockville or DC, plus building and electrical permits when walls or circuits change.",
    },
    {
        number: "04",
        title: "Build",
        text: "Tear-out comes first, then plumbing rough-in, inspection, waterproofing, tile and fixtures.",
    },
    {
        number: "05",
        title: "Close out",
        text: "With the final inspection passed, we run every fixture with you. Open items get fixed, and your 1-year workmanship warranty begins.",
    },
];

type TimelineFilter = "planning" | "construction";
type TimelineBarVariant = "planning" | "lead" | "construction";
type TimelineIconName = "design" | "permit" | "cabinet" | "refresh" | "wrench" | "home";

type TimelineItem = {
    category: "planning" | "construction";
    variant: TimelineBarVariant;
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
        title: "Design and selections",
        meta: "1–3 weeks",
        label: "1–3",
        left: 0,
        width: 20,
        icon: "design",
    },
    {
        category: "planning",
        variant: "planning",
        title: "Permit review",
        meta: "1–4 weeks, varying by county, city or DC",
        label: "1–4",
        left: 10,
        width: 33,
        icon: "permit",
    },
    {
        category: "construction",
        variant: "construction",
        title: "Construction: refresh",
        meta: "1–2 weeks",
        label: "1–2",
        left: 25,
        width: 18,
        icon: "refresh",
    },
    {
        category: "construction",
        variant: "construction",
        title: "Construction: full remodel",
        meta: "3–6 weeks",
        label: "3–6",
        left: 25,
        width: 45,
        icon: "wrench",
    },
    {
        category: "construction",
        variant: "construction",
        title: "Construction: primary or luxury bathroom",
        meta: "5–8 weeks",
        label: "5–8",
        left: 32,
        width: 58,
        icon: "home",
    },
];

const timelineTabs: { key: TimelineFilter; label: string }[] = [
    { key: "planning", label: "Planning and permit review" },
    { key: "construction", label: "Construction" },
];

const timelineWeeks = ["0", "1", "2", "3", "4", "5", "6", "7", "8 wks"];

const areaLinks: { label: string; href?: string }[] = [
    { label: "Bathroom remodeling in Washington, DC", href: "/service/bathroom-remodeling/washington-dc" },
    { label: "Bathroom remodeling in Bethesda", href: "/service/bathroom-remodeling/bethesda-md" },
    { label: "Bathroom remodeling in North Bethesda", href: "/service/bathroom-remodeling/north-bethesda-md" },
    { label: "Bathroom remodeling in Rockville", href: "/service/bathroom-remodeling/rockville-md" },
    { label: "Bathroom remodeling in Kensington" },
    { label: "Bathroom remodeling in Potomac", href: "/service/bathroom-remodeling/potomac-md" },
    { label: "Bathroom remodeling in Wheaton", href: "/service/bathroom-remodeling/wheaton-md" },
    { label: "Bathroom remodeling in Silver Spring", href: "/service/bathroom-remodeling/silver-spring-md" },
    { label: "Bathroom remodeling in Gaithersburg", href: "/service/bathroom-remodeling/gaithersburg-md" },
    { label: "Bathroom remodeling in Garrett Park", href: "/service/bathroom-remodeling/garrett-park-md" },
    { label: "Bathroom remodeling in Chevy Chase", href: "/service/bathroom-remodeling/chevy-chase-md" },
    { label: "Bathroom remodeling in Cabin John", href: "/service/bathroom-remodeling/cabin-john-md" },
    { label: "Bathroom remodeling in Laurel", href: "/service/bathroom-remodeling/laurel-md" },
];

const googleReviewsUrl =
    "https://www.google.com/maps/place/DMV+General+Contracting+Group+LLC/@39.0493761,-77.1200241,17z/data=!3m1!4b1!4m6!3m5!1s0x158dd0ef2148a11:0xceda33050d2dcdfb!8m2!3d39.049372!4d-77.1174492!16s%2Fg%2F11v3gbzc44?hl=en&entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D";

const bathroomProjects: ProjectCardData[] = [
    {
        location: "Washington, DC",
        title: "Primary Bathroom and Entry Powder Room Renovation",
        text: "This project rebuilt a primary bathroom and the entry powder room together.",
        href: "/project/primary-bathroom-powder-room-renovation-glover-park",
        image: "/images/projects-galary/primary-bathroom-entry-powder-room/1.jpg",
        imageAlt: "Primary bathroom and entry powder room renovation in Glover Park",
    },
    {
        location: "Chevy Chase, Maryland",
        title: "Luxury Primary Bath and Entry Powder Room",
        text: "A luxury primary bath was finished alongside a matching powder room by the front door.",
        href: "/project/teresa-f-modern-bathroom-transformation",
        image: "/images/projects-galary/teresa-faria/1.jpg",
        imageAlt: "Modern primary bathroom transformation in Chevy Chase",
    },
    {
        location: "Silver Spring, Maryland",
        title: "Modern Bathroom Remodel",
        text: "A dated full bath was rebuilt with a modern layout, clean-lined tile and new fixtures.",
        href: "/project/dave-bathroom-reimagined",
        image: "/images/projects-galary/dave-rardin/updated/1.jpg",
        imageAlt: "Modern bathroom remodel in Silver Spring",
    },
    {
        location: "Washington, DC",
        title: "Dual Bathroom Remodel",
        text: "Two bathrooms in one home were redone on one schedule and one contract.",
        href: "/project/michelle-r-dual-bathroom-transformation",
        image: "/images/projects-galary/michelle-rieff/8.jpg",
        imageAlt: "Dual bathroom remodel in Washington, DC",
    },
];

const relatedWorkItems: { title: string; text: ReactNode }[] = [
    {
        title: "Pipe replacement",
        text: (
            <>
                Galvanized or leaking pipe is easiest to replace while walls are open, and our{" "}
                <Link href="/service/plumbing-services">plumbing services</Link> cover it.
            </>
        ),
    },
    {
        title: "New circuits",
        text: (
            <>
                Heated floors, lights and fans need dedicated circuits from our{" "}
                <Link href="/service/electrical-services">electrical services</Link>.
            </>
        ),
    },
    {
        title: "Hallway flooring",
        text: "New hall flooring outside the door lets the two floors meet at one clean threshold.",
    },
    {
        title: "Basement bathrooms",
        text: "A new bath below grade often needs an ejector pump, which we plan with the layout.",
    },
];

const bathroomFaqs = [
    {
        question: "What are the bathroom remodel trends for 2026?",
        answer:
            "Bigger showers, hotel-style finishes and smart fixtures lead 2026. The NKBA 2026 Bath Trends Report found 77% of designers seeing more hotel-style design. More than half of homeowners now prefer a larger shower to a tub. Light neutral colors, wood vanities and large-format floor tile round out the list.",
    },
    {
        question: "Does a bathroom remodel add value to a home?",
        answer:
            "Yes, and midrange baths pay back best. National 2025 Cost vs. Value data puts midrange bath payback near 80%, against about 42% for upscale baths. Sellers on a short timeline get the best return from mid-grade finishes.",
    },
    {
        question: "Can I keep using my bathroom during the remodel?",
        answer:
            "No, the room is out of service while we work. In a one-bath home, we sequence the work so the toilet returns as quickly as possible. Plan on 3 to 6 weeks without the shower, and tell us early so we can schedule around it.",
    },
    {
        question: "What if you find water damage under the old tile?",
        answer:
            "Work pauses, you see the damage, and a written repair price comes before anything else. Rotted subfloor and old drain leaks can turn up in older Maryland and DC homes. Maryland home improvement contracts require written change orders, so nothing extra is built without your approval.",
    },
    {
        question: "Can you make a bathroom accessible for aging in place?",
        answer:
            "Yes. We build curbless showers, mount grab bars over solid blocking and install comfort-height toilets and slip-resistant tile. Doorways are widened where the framing allows. The 2025 Cost vs. Value Report prices a universal design bath at about $42,183 nationally.",
    },
];

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4.5 10.5 8 14l7.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ArrowIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function StarIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="m10 1.8 2.47 5 5.53.8-4 3.9.94 5.5L10 14.4 5.06 17l.94-5.5-4-3.9 5.53-.8L10 1.8Z" fill="currentColor" />
        </svg>
    );
}

function ServiceIcon({ name, className }: { name: ServiceIconName; className?: string }) {
    const props = {
        className,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": true,
    } as const;

    switch (name) {
        case "renovation":
            return (
                <svg {...props}>
                    <path d="m12 3-8 4.5 8 4.5 8-4.5L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="m4 12 8 4.5 8-4.5M4 16.5l8 4.5 8-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
            );
        case "shower":
            return (
                <svg {...props}>
                    <path d="M4 6h9v6H4zM4 15h9M13 6h7v15M8 3v3M8 9V3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 9v2M16 13v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
            );
        case "layout":
            return (
                <svg {...props}>
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M9 4v16M15 4v10" stroke="currentColor" strokeWidth="1.6" />
                </svg>
            );
        case "refresh":
            return (
                <svg {...props}>
                    <path d="M20 11a8 8 0 0 0-14-4L4 9M4 4v5h5M4 13a8 8 0 0 0 14 4l2-2M20 20v-5h-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "building":
            return (
                <svg {...props}>
                    <path d="M4 20V5h10v15M14 9h6v11M3 20h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 8h4M7 12h4M7 16h4M17 12h1M17 16h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
            );
        case "addition":
            return (
                <svg {...props}>
                    <path d="M3 11.5 10 5l7 6.5V20H3v-8.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M17 5v6M14 8h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
            );
        case "accessible":
            return (
                <svg {...props}>
                    <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 7v6h5M8 10h4M9 21l1.5-5H15l2 5M6 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "custom":
            return (
                <svg {...props}>
                    <path d="m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
            );
        default:
            return null;
    }
}

function DesignIcon({ name, className }: { name: DesignIconName; className?: string }) {
    const props = {
        className,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": true,
    } as const;

    switch (name) {
        case "layout":
            return (
                <svg {...props}>
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M3 10h18M9 10v10M15 4v6" stroke="currentColor" strokeWidth="1.6" />
                </svg>
            );
        case "cabinets":
            return (
                <svg {...props}>
                    <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 3v18M7 8h1.5M15.5 8H17M7 12h1.5M15.5 12H17M7 16h1.5M15.5 16H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
            );
        case "countertops":
            return (
                <svg {...props}>
                    <path d="M3 9h18v3H3zM7 9V6h10v3M5 12v8M19 12v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "lighting":
            return (
                <svg {...props}>
                    <path d="M12 3v4M7 7h10l-2 6H9L7 7ZM12 13v4M8 17h8M7 20h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        default:
            return null;
    }
}

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

    switch (name) {
        case "design":
            return (
                <svg {...props}>
                    <path d="M4 20h4L19 9l-4-4L4 16v4ZM13 7l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "permit":
            return (
                <svg {...props}>
                    <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6ZM14 3v6h6M9 14l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "cabinet":
            return (
                <svg {...props}>
                    <path d="m12 3 8 4-8 4-8-4 8-4ZM4 12l8 4 8-4M4 17l8 4 8-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "refresh":
            return (
                <svg {...props}>
                    <path d="m14 4 6 6-3 3-6-6 3-3ZM11 7l-7 7v4h4l7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "wrench":
            return (
                <svg {...props}>
                    <path d="M14.5 6.5a4 4 0 0 0-5.7 4.7l-5 5 3.8 3.8 5-5a4 4 0 0 0 4.7-5.7l-3 3-3.8-3.8 3-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "home":
            return (
                <svg {...props}>
                    <path d="M3 11 12 4l9 7v9H3v-9ZM9 20v-6h6v6M8 11l4 5 4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        default:
            return null;
    }
}

function ProTipIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2v.1h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ProcessAlertIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M8 3v4M16 3v4M3 10h18M9 15l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function Stars() {
    return (
        <span className={styles.stars} aria-label="5 out of 5 stars">
            ★★★★★
        </span>
    );
}

export default function BathroomRemodeling({ data }: { data?: BathroomService }) {
    const [timelineFilter, setTimelineFilter] = useState<TimelineFilter>("planning");
    const heroImage = data?.image?.replace(/^\./, "") || "/images/services/bathroom.webp";
    const heroAlt = data?.imageAlt || "Bathroom remodeling project in Maryland and Washington, DC";

    return (
        <main className={`page-wrapper ${styles.page}`}>
            <NavitemActive nav="service" />

            <section className={styles.hero}>
                <Container>
                    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
                        <Link href="/">Home</Link>
                        <span aria-hidden="true">/</span>
                        <Link href="/services">Services</Link>
                        <span aria-hidden="true">/</span>
                        <span aria-current="page">Bathroom Remodeling</span>
                    </nav>

                    <div className={styles.heroGrid}>
                        <div className={styles.heroContent}>
                            <Badge className="nostars">Bathroom Remodeling · Maryland &amp; DC</Badge>

                            <h1 className={styles.heroTitle}>
                                Bathroom Remodeling in <span>Maryland &amp; Washington, DC</span>
                            </h1>

                            <p className={styles.heroText}>
                                DMV General Contracting Group provides bathroom remodeling in Maryland and Washington,
                                DC as a licensed general contractor. We design, permit, waterproof and tile the room
                                under one contract. Thirty-five years of hands-on building have taught our crew where
                                bathrooms in older Maryland houses tend to hide trouble.
                            </p>

                            <div className={styles.heroActions}>
                                <Button href="#estimate" icon={<ArrowIcon />}>
                                    Book a Free Bathroom Estimate
                                </Button>
                                <Button href="tel:+12407301292" variant="secondary">
                                    (240) 730-1292
                                </Button>
                            </div>

                            <div className={styles.trustRow}>
                                <div className={styles.trustItem}>
                                    <Stars />
                                    <span>
                                        <strong>4.9</strong> on Google
                                    </span>
                                </div>
                                <div className={styles.trustItem}>
                                    <CheckIcon className={styles.trustIcon} />
                                    <span>MHIC #156178</span>
                                </div>
                                <div className={styles.trustItem}>
                                    <CheckIcon className={styles.trustIcon} />
                                    <span>DLCP #410526000209</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.heroMedia}>
                            <div className={styles.heroImageWrap}>
                                <Image
                                    src={heroImage}
                                    alt={heroAlt}
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 699px"
                                    className={styles.image}
                                />
                                <div className={styles.mediaOverlay} />
                                <div className={styles.heroFeatured}>
                                    <Badge variant="accent" className="nostars">
                                        Featured project
                                    </Badge>
                                    <p className={styles.heroFeaturedTitle}>
                                        Primary Bathroom and Entry Powder Room Renovation
                                    </p>
                                    <p className={styles.heroFeaturedMeta}>
                                        This project rebuilt a primary bathroom and the entry powder room together.
                                    </p>
                                </div>
                            </div>

                            <aside className={styles.heroReview} aria-label="Google review rating">
                                <div className={styles.heroReviewTop}>
                                    <strong>4.9</strong>
                                    <Stars />
                                </div>
                                <p className={styles.heroReviewText}>
                                    Homeowners rate our bathroom remodels 4.9 out of 5 on Google.
                                </p>
                                <span className={styles.heroReviewMeta}>Based on verified client feedback</span>
                            </aside>
                        </div>
                    </div>

                    <div className={styles.heroGlance}>
                        <div className={styles.glanceItem}>
                            <span>Starting from</span>
                            <strong>$10,000</strong>
                        </div>
                        <div className={styles.glanceItem}>
                            <span>Construction time</span>
                            <strong>3–6 weeks</strong>
                        </div>
                        <div className={styles.glanceItem}>
                            <span>Design and permits</span>
                            <strong>2–7 weeks</strong>
                        </div>
                        <div className={styles.glanceItem}>
                            <span>Workmanship warranty</span>
                            <strong>1 year</strong>
                        </div>
                        <Link href="#pricing" className={styles.glanceLink}>
                            See Bathroom Pricing
                            <ArrowIcon />
                        </Link>
                    </div>
                </Container>
            </section>

            <section className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="included-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="included-title"
                            align="center"
                            eyebrow={<Badge>What’s Included</Badge>}
                            title={
                                <>
                                    What&apos;s Included in a <span>Bathroom Remodel?</span>
                                </>
                            }
                            text="In a bathroom remodel, old fixtures and surfaces come out, and the floor plan may change too. Behind the tile it renews the supply lines, drains, shower membrane, wiring and exhaust duct. Being a licensed general contractor in Maryland lets our staff handle every trade in the room. No plumber, tile setter or electrician is yours to schedule."
                        />
                    </div>

                    <div className={styles.includedGrid}>
                        <div className={styles.includedAside}>
                            <div className={styles.includedFeature}>
                                <Image
                                    src="/images/services/cover/bathroom.jpg"
                                    alt="Remodeled bathroom with a tiled shower and double vanity"
                                    fill
                                    sizes="(max-width: 900px) 100vw, 38vw"
                                    className={styles.featureImage}
                                />
                            </div>
                            <div className={styles.remodelOptions}>
                                <article className={styles.remodelCard}>
                                    <h3>Refresh</h3>
                                    <p>A refresh keeps every fixture in its current spot.</p>
                                </article>
                                <article className={`${styles.remodelCard} ${styles.remodelCardDark}`}>
                                    <h3>Full remodel</h3>
                                    <p>A full remodel opens the walls so pipes and waterproofing can be rebuilt.</p>
                                </article>
                            </div>
                        </div>

                        <div className={styles.includedCards}>
                            <p className={styles.includedLabel}>Seven trades meet in a full bathroom remodel:</p>
                            {includedItems.map((item) => (
                                <article className={styles.includeCard} key={item.number}>
                                    <span className={styles.number}>{item.number}</span>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardText}>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <p className={styles.costNote}>
                        A refresh keeps every fixture in its current spot. A full remodel opens the walls so pipes and
                        waterproofing can be rebuilt, and our crews do both.
                    </p>
                </Container>
            </section>

            <section className={styles.section} aria-labelledby="bathroom-services-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="bathroom-services-title"
                            align="center"
                            eyebrow={<Badge>Our Services</Badge>}
                            title="Bathroom Remodels We Build"
                            text="Our DC & Maryland bathroom remodeling work covers eight project types. During a no-cost walkthrough we point out which project type matches your room and spending limit."
                        />
                        <Button href="#estimate" variant="secondary">
                            Book a Free Site Visit
                        </Button>
                    </div>

                    <div className={styles.servicesGrid}>
                        {services.map((service) => (
                            <article className={styles.serviceCard} key={service.title}>
                                <span className={styles.serviceIcon}>
                                    <ServiceIcon name={service.icon} />
                                </span>
                                <div className={styles.serviceBody}>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceText}>
                                        {service.text}
                                        {service.link ? (
                                            <>
                                                <Link href={service.link.href} className={styles.serviceTextLink}>
                                                    {service.link.label}
                                                </Link>
                                                {service.afterLink}
                                            </>
                                        ) : null}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <p className="mt-4 text-center fw-bold">
                        Every one of these eight types gets the same membrane, slope and fan checks before tile goes up.
                    </p>
                </Container>
            </section>

            <section id="pricing" className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="bathroom-pricing-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="bathroom-pricing-title"
                            align="center"
                            eyebrow={<Badge>Cost and Pricing</Badge>}
                            title={
                                <>
                                    How Much Does a Bathroom Remodel <span>Cost in Maryland?</span>
                                </>
                            }
                            text="A full bathroom remodel in Maryland usually runs $25,000 to $45,000. Surface-only updates land between $10,000 and $20,000. Primary or luxury suites start near $50,000 and can pass $80,000. Here is the Maryland bathroom price ladder by scope:"
                        />
                    </div>

                    <div className={styles.budgetBand}>
                        <span>Full remodel</span>
                        <strong>$25,000–$45,000</strong>
                    </div>

                    <div className={styles.pricingGrid}>
                        {budgetTiers.map((tier) => (
                            <article className={styles.tierCard} key={tier.tier}>
                                <span className={styles.tierLevel}>Tier</span>
                                <h3 className={styles.tierTitle}>{tier.title}</h3>
                                <div className={styles.tierPrice}>
                                    <strong>{tier.price}</strong>
                                </div>
                                <p className={styles.tierText}>{tier.text}</p>
                            </article>
                        ))}
                    </div>

                    <p className={styles.costNote}>
                        For a national benchmark, the 2025 Cost vs. Value Report puts a midrange bath remodel at
                        $26,138. After the walkthrough, you receive an itemized quote covering tile, plumbing, fixtures
                        and labor.
                    </p>

                    <div className={styles.budgetCheck}>
                        <div className={styles.budgetCheckHead}>
                            <h3>Is $10,000 Enough for a Bathroom Remodel?</h3>
                            <p>
                                Yes for a cosmetic refresh, and no for a new tiled shower. $10,000 covers a small bath
                                that keeps its plumbing in place. A $5,000 to $10,000 budget buys a vanity, toilet,
                                faucets, paint and flooring. Moving a drain or rebuilding the shower pushes the job into
                                the full-remodel tier.
                            </p>
                        </div>
                    </div>

                    <div className={styles.driversBlock}>
                        <div className={styles.driversHead}>
                            <h3>What Is the Most Expensive Part of a Bathroom Remodel?</h3>
                            <p>The tiled shower and any plumbing moves cost the most. Four items drive most bathroom budgets:</p>
                        </div>

                        <div className={styles.driversGrid}>
                            {costDrivers.map((driver, index) => (
                                <article className={styles.driverCard} key={driver.title}>
                                    <span className={styles.driverNumber}>{String(index + 1).padStart(2, "0")}</span>
                                    <h4>{driver.title}</h4>
                                    <p>{driver.text}</p>
                                </article>
                            ))}
                        </div>

                        <div className={styles.tipCard}>
                            <span className={styles.tipLabel}>TIP</span>
                            <p>
                                Holding the toilet, shower and sink in their current spots is the surest way to protect
                                the budget.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <InHomeConsultation
                id="bathroom-estimate-cta"
                headingId="bathroom-estimate-cta-title"
                title="Get an itemized quote after the walkthrough."
                text="After the walkthrough, you receive an itemized quote covering tile, plumbing, fixtures and labor."
                ctaLabel="Book a Free Bathroom Estimate"
            />

            <section className={styles.section} aria-labelledby="bathroom-design-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="bathroom-design-title"
                            align="center"
                            eyebrow={<Badge>Design</Badge>}
                            title="Bathroom Materials, Fixtures and Features"
                            text="Design fixes the layout, finishes and fixtures before demolition. Four selection areas shape every bathroom we design:"
                        />
                    </div>

                    <div className={styles.designGrid}>
                        <figure className={styles.designMedia}>
                            <div className={styles.designImageWrap}>
                                <Image
                                    src="/images/services/modern-bathroom.webp"
                                    alt="Modern bathroom with a tiled walk-in shower and floating vanity"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 46vw"
                                    className={styles.designImage}
                                />
                            </div>
                            <figcaption className={styles.designCaption}>
                                <p>
                                    Heated floors and steam showers are planned into the wiring and waterproofing from
                                    day one.
                                </p>
                            </figcaption>
                        </figure>

                        <div className={styles.designCards}>
                            {designDecisions.map((item) => (
                                <article className={styles.designCard} key={item.title}>
                                    <span className={styles.designIcon}>
                                        <DesignIcon name={item.icon} />
                                    </span>
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <section id="bathroom-process" className={styles.section} aria-labelledby="bathroom-process-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="bathroom-process-title"
                            align="center"
                            eyebrow={<Badge>Process</Badge>}
                            title="Our Bathroom Remodeling Process"
                            text="Bathroom remodeling with us follows a five-stage sequence under a single project lead:"
                        />
                    </div>

                    <div className={styles.processTimeline}>
                        {bathroomProcessSteps.map((step, index) => {
                            const isRight = index % 2 === 1;
                            const marker = (
                                <span className={styles.processMarker} aria-hidden="true">
                                    {step.number}
                                </span>
                            );
                            const card = (
                                <article className={styles.processCard}>
                                    <h3 className={styles.processCardTitle}>{step.title}</h3>
                                    <p className={styles.processCardText}>{step.text}</p>
                                </article>
                            );

                            return (
                                <div
                                    key={step.number}
                                    className={`${styles.processRow} ${isRight ? styles.processRowRight : ""}`}
                                >
                                    {isRight ? (
                                        <>
                                            {marker}
                                            {card}
                                        </>
                                    ) : (
                                        <>
                                            {card}
                                            {marker}
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className={styles.processAlert}>
                        <span className={styles.processAlertIconWrap}>
                            <ProcessAlertIcon className={styles.processAlertIcon} />
                        </span>
                        <div className={styles.processAlertCopy}>
                            <h3>Weekly Project Updates</h3>
                            <p>A weekly update from your project lead lists finished work and the next trade on site.</p>
                        </div>
                        <Button href="#estimate" icon={<ArrowIcon />} className={styles.processAlertButton}>
                            Start With a Site Visit
                        </Button>
                    </div>
                </Container>
            </section>

            <section className={styles.section} aria-labelledby="bathroom-timeline-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="bathroom-timeline-title"
                            align="center"
                            eyebrow={<Badge icon={<ClockIcon />}>Timeline</Badge>}
                            title={
                                <>
                                    How Long Does a <span>Bathroom Remodel Take?</span>
                                </>
                            }
                            text={
                                <>
                                    A full bathroom remodel takes <strong>3 to 6 weeks of construction</strong>.
                                    Selections and permit review come first and add <strong>2 to 7 weeks</strong>.
                                    Maryland and DC bathroom schedules split like this:
                                </>
                            }
                        />
                    </div>

                    <div className={styles.timelineControls}>
                        <div className={styles.timelineLegend}>
                            <span>
                                <span className={`${styles.legendDot} ${styles.legendPlanning}`} />
                                Planning &amp; permits
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
                                    className={`${styles.timelineTab} ${
                                        timelineFilter === tab.key ? styles.timelineTabActive : ""
                                    }`}
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
                                            item.variant === "planning"
                                                ? styles.timelineBarPlanning
                                                : item.variant === "lead"
                                                  ? styles.timelineBarLead
                                                  : styles.timelineBarConstruction;

                                        return (
                                            <div
                                                className={styles.timelineRow}
                                                key={item.title}
                                                hidden={timelineFilter !== item.category}
                                            >
                                                <div className={styles.timelineInfo}>
                                                    <strong>{item.title}</strong>
                                                    <span>{item.meta}</span>
                                                </div>
                                                <div className={styles.timelineTrack}>
                                                    <div
                                                        className={`${styles.timelineBar} ${barClass}`}
                                                        style={{ left: `${item.left}%`, width: `${item.width}%` }}
                                                    >
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
                            <p>
                                Tell us at the first visit if the house has only one bathroom. The schedule is then set
                                so the toilet is out for as few days as possible.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <Permits variant="bathroom" />

            <LicensedInsured variant="bathroom" />

            <RecentProjects
                projects={bathroomProjects}
                eyebrow="Case Studies & Projects"
                title="Bathroom Remodeling Projects"
                text="Our team designed, permitted and built these four bathroom projects: Finished-room photos for all four bathrooms are on our remodeling projects page."
            />

            <section id="reviews" className={styles.section} aria-labelledby="bathroom-reviews-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="bathroom-reviews-title"
                            align="center"
                            eyebrow={<Badge>Testimonials</Badge>}
                            title="What Homeowners Say"
                        />
                    </div>

                    <div className={styles.reviewPanel}>
                        <div className={styles.reviewScore}>
                            <strong>4.9</strong>
                            <span>Google review average</span>
                            <div className={styles.reviewStars} aria-label="4.9 out of 5 stars">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <StarIcon key={index} />
                                ))}
                            </div>
                        </div>

                        <div className={styles.reviewCopy}>
                            <p>
                                Bathroom remodeling clients and other homeowners give us a 4.9 average on Google.
                                Bathroom owners share fuller feedback on our{" "}
                                <Link href="/testimonials">client reviews page</Link>.
                            </p>
                            <div className={styles.reviewActions}>
                                <Button
                                    href={googleReviewsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="primary"
                                >
                                    Read Every Review on Google
                                </Button>
                                <Button
                                    href="/testimonials"
                                    className="fw-bold"
                                    rel="noopener noreferrer"
                                    variant="white"
                                >
                                    Client Stories
                                    <ArrowIcon />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="related-work-title">
                <Container>
                    <div className={styles.relatedWorkHeader}>
                        <Badge>Related Work</Badge>
                        <h2 id="related-work-title">What Else Changes When You Remodel a Bathroom?</h2>
                        <p>
                            Bathroom work often reaches the pipes, circuits and floors around the room. We handle four
                            related jobs in the same contract:
                        </p>
                    </div>

                    <div className={styles.relatedWorkGrid}>
                        {relatedWorkItems.map((item, index) => (
                            <article className={styles.relatedWorkCard} key={item.title}>
                                <span className={styles.relatedWorkNumber}>
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>

                    <p className={styles.relatedWorkNote}>One design and one permit set cover all four jobs.</p>
                </Container>
            </section>

            <section className={styles.section} aria-labelledby="areas-title">
                <Container>
                    <div className={styles.areasLayout}>
                        <div className={styles.areasHeader}>
                            <Badge>Areas We Serve</Badge>
                            <h2 id="areas-title">
                                Bathroom Remodeling in Montgomery County, Laurel and Washington, DC
                            </h2>
                            <p>
                                Bathroom remodeling crews from our office reach every Montgomery County town, plus
                                Laurel and the District. These 13 local pages cover each area's homes, permit offices and
                                bathroom costs:
                            </p>
                            <span className={styles.areasCount}>13 service areas</span>
                        </div>

                        <div className={styles.areasGrid}>
                            {areaLinks.map((area, index) =>
                                area.href ? (
                                    <Link href={area.href} className={styles.areaCard} key={area.label}>
                                        <span className={styles.areaNumber}>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span className={styles.areaLabel}>{area.label}</span>
                                        <ArrowIcon className={styles.areaArrow} />
                                    </Link>
                                ) : (
                                    <div className={`${styles.areaCard} ${styles.areaCardStatic}`} key={area.label}>
                                        <span className={styles.areaNumber}>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span className={styles.areaLabel}>{area.label}</span>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>

                    <div className={styles.areasNote}>
                        <p>
                            DC jobs are mostly rowhouse and condo baths with tight footprints. Across Montgomery County
                            we often pull out pink or mint 1950s tile, and we also update baths in new infill houses.
                        </p>
                    </div>
                </Container>
            </section>

            <HomeFaq
                variant="kitchen"
                eyebrow="FAQs"
                title="Frequently Asked Questions"
                text="Have a bathroom question that isn't here? Call us 7 days a week."
                faqs={bathroomFaqs}
            />

            <Estimate variant="bathroom" />
        </main>
    );
}
