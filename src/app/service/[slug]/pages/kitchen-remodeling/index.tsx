"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import NavitemActive from "@/components/Common/NavitemActive";
import SectionHeading from "@/components/Common/SectionHeading";
import Estimate from "@/components/Home/Estimate/Estimate";
import HomeFaq from "@/components/Home/HomeFaq/HomeFaq";
import InHomeConsultation from "@/components/Home/InHomeConsultation/InHomeConsultation";
import LicensedInsured from "@/components/Home/LicensedInsured/LicensedInsured";
import Permits from "@/components/Home/Permits/Permits";
import RecentProjects from "@/components/Home/RecentProjects/RecentProjects";
import type { ProjectCardData } from "@/components/Home/RecentProjects/ProjectCard";
import ProjectsData from "@/data/projects/ProjectsData";
import { GOOGLE_BUSINESS_PROFILE_URL } from "@/data/home/homePageMedia";
import styles from "./style.module.scss";

type KitchenService = {
    image?: string;
    imageAlt?: string;
    title?: string;
};

const includedItems = [
    {
        number: "01",
        title: "Design",
        text: "We measure the room, draw the new plan and help you pick cabinets, counters and finishes.",
    },
    {
        number: "02",
        title: "Demolition",
        text: "We strip the old kitchen to the studs or subfloor where needed and seal off dust.",
    },
    {
        number: "03",
        title: "Plumbing and electrical",
        text: "We reroute water lines, drains, gas lines and circuits to suit the new plan and current code.",
    },
    {
        number: "04",
        title: "Cabinets",
        text: "We install new custom or semi-custom boxes, or we reface the sound boxes you already have.",
    },
    {
        number: "05",
        title: "Countertops",
        text: "We template quartz, granite or marble once the cabinets are level and fixed.",
    },
    {
        number: "06",
        title: "Appliances and ventilation",
        text: "We set the range, refrigerator and dishwasher, and vent the range hood outdoors where the house allows.",
    },
    {
        number: "07",
        title: "Flooring, lighting and finishes",
        text: "We close out with flooring, backsplash tile, recessed and under-cabinet lights, paint and hardware.",
    },
];

type ServiceIconName =
    | "renovation"
    | "openConcept"
    | "layout"
    | "refresh"
    | "building"
    | "addition"
    | "island"
    | "custom";

type KitchenServiceItem = {
    title: string;
    text: string;
    icon: ServiceIconName;
    link?: {
        label: string;
        href: string;
    };
    afterLink?: string;
};

const services: KitchenServiceItem[] = [
    {
        icon: "renovation",
        title: "Full Gut Renovation",
        text: "We take out everything down to the framing, then install fresh cabinetry, counters, supply lines, circuits and flooring. It suits a kitchen where the plan, the systems and the finishes are all worn out.",
    },
    {
        icon: "openConcept",
        title: "Wall Removal and Open Concept",
        text: "We open a closed kitchen to the living or dining room by removing or cutting back a wall. Our engineer sizes a new beam when the wall is load-bearing, and the beam goes into the permit drawings.",
    },
    {
        icon: "layout",
        title: "Small and Galley Layouts",
        text: "We rework the small galley kitchens found in 1950s and 1960s Montgomery County ramblers and split-levels. Taller cabinets, better lighting and deeper drawers add storage without adding square feet.",
    },
    {
        icon: "refresh",
        title: "Refresh and Cabinet Refacing",
        text: "We update a kitchen that works but looks dated. New doors, drawer fronts, counters, backsplash, lights and pulls go in while pipes and walls stay put.",
    },
    {
        icon: "building",
        title: "Condo and Townhome Projects",
        text: "We remodel condo and townhome kitchens in Bethesda, Silver Spring and DC. Each job follows the board's approval steps, the building's work hours and its elevator bookings.",
    },
    {
        icon: "addition",
        title: "Additions and Bump-Outs",
        text: "We add floor space with a small bump-out or a rear addition, designed and permitted together with the new kitchen. For a two-room or two-story expansion, see our ",
        link: {
            label: "home additions page",
            href: "/service/home-additions",
        },
        afterLink: ".",
    },
    {
        icon: "island",
        title: "Islands and New Layouts",
        text: "We add or rebuild islands and redraw rooms into L-shape, U-shape or galley plans. An island with a sink or cooktop also gets its own drain, vent and power run.",
    },
    {
        icon: "custom",
        title: "High-End Custom Builds",
        text: "We fit inset or full-overlay cabinetry made to order, slab stone tops and appliances hidden behind matching panels. Lighting is planned around each work zone.",
    },
];

const budgetTiers = [
    {
        tier: "Tier 1",
        title: "Cosmetic Refresh",
        price: "$15,000–$30,000",
        text: "Refaced or new stock cabinets, counters, backsplash, lighting and hardware in the same layout.",
    },
    {
        tier: "Tier 2",
        title: "Mid-Range",
        price: "$35,000–$75,000",
        text: "New semi-custom cabinets, quartz counters, new appliances, flooring and limited plumbing and electrical work.",
    },
    {
        tier: "Tier 3",
        title: "Full Custom",
        price: "$75,000–$120,000+",
        text: "Custom cabinets, layout changes, wall removal, new plumbing and wiring, and a panel upgrade if needed.",
    },
    {
        tier: "Tier 4",
        title: "High-End",
        price: "$120,000+",
        text: "Custom millwork, pro-grade appliances, structural changes or a kitchen addition.",
    },
];

const budgetScenarios = [
    {
        amount: "$30,000",
        text: "Refaced or stock boxes, counters, tiled backsplash, new light fixtures",
    },
    {
        amount: "$20,000",
        text: "Reface, replace counters and change hardware",
    },
    {
        amount: "$10,000",
        text: "A small kitchen gets paint, hardware and one new counter",
    },
];

const costDrivers = [
    {
        title: "Cabinets",
        text: "Cabinets are usually the largest single cost in a kitchen remodel.",
    },
    {
        title: "Countertops",
        text: "Stone is priced by the square foot, so a large island raises the total.",
    },
    {
        title: "Appliances and Ventilation",
        text: "A pro-grade range and a ducted hood cost far more than a standard package.",
    },
    {
        title: "Flooring",
        text: "Carrying new floors through the main level costs more but avoids a seam at the doorway.",
    },
    {
        title: "Plumbing, Electrical and Lighting",
        text: "Older Maryland homes with 100-amp service often need a panel upgrade for new appliances.",
    },
    {
        title: "Design, Permits and Inspections",
        text: "These take a small share of the budget and prevent failed inspections.",
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
        icon: "layout",
        title: "Layouts",
        text: "We design galley, L-shape, U-shape and island layouts. Galleys suit narrow rowhouses and condos, and L-shapes open well to a family room. U-shapes give the most counter space. An island needs about 42 inches of walkway on each side, per the National Kitchen and Bath Association.",
    },
    {
        icon: "cabinets",
        title: "Cabinets",
        text: "We install custom, semi-custom and stock cabinets, and we reface boxes that are still sound. Custom boxes fit the uneven walls of older homes. Semi-custom lines suit most mid-Range budgets.",
    },
    {
        icon: "countertops",
        title: "Countertops",
        text: "Quartz needs no sealing and resists stains. Granite and marble are natural stone and need periodic sealing. Marble can also etch when lemon juice or vinegar sits on it.",
    },
    {
        icon: "lighting",
        title: "Appliances and Lighting",
        text: "We plan appliance openings, gas and power lines and a ducted hood as one system. Recessed, pendant and under-cabinet lights then cover every work zone.",
    },
];

const kitchenProcessSteps = [
    {
        number: "01",
        title: "Site visit",
        text: "We measure the kitchen, check the walls, pipes and electrical panel, and set a budget with you.",
    },
    {
        number: "02",
        title: "Design",
        text: "We draw the plan, help you pick cabinets, counters, appliances and lights, and send a written estimate.",
    },
    {
        number: "03",
        title: "Permits",
        text: "We file for the building, electrical and plumbing permits with the right county, city or DC office.",
    },
    {
        number: "04",
        title: "Construction",
        text: "Demolition comes first, then rough-in, inspections, cabinets, counters and finishes.",
    },
    {
        number: "05",
        title: "Handover",
        text: "After final approval, you test every drawer and burner with us. We fix anything left, and the 1-year workmanship warranty starts.",
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
        meta: "2–4 weeks",
        label: "2–4",
        left: 0,
        width: 28,
        icon: "design",
    },
    {
        category: "planning",
        variant: "planning",
        title: "Permit review",
        meta: "2–6 weeks; each jurisdiction sets its own review pace",
        label: "2–6",
        left: 14,
        width: 43,
        icon: "permit",
    },
    {
        category: "planning",
        variant: "lead",
        title: "Cabinet lead time",
        meta: "4–10 weeks, ordered during permit review",
        label: "4–10",
        left: 28,
        width: 50,
        icon: "cabinet",
    },
    {
        category: "construction",
        variant: "construction",
        title: "Construction: refresh",
        meta: "2–4 weeks",
        label: "2–4",
        left: 28,
        width: 28,
        icon: "refresh",
    },
    {
        category: "construction",
        variant: "construction",
        title: "Construction: mid-Range remodel",
        meta: "6–10 weeks",
        label: "6–10",
        left: 42,
        width: 45,
        icon: "wrench",
    },
    {
        category: "construction",
        variant: "construction",
        title: "Construction: full gut with layout changes",
        meta: "10–14 weeks",
        label: "10–14",
        left: 56,
        width: 44,
        icon: "home",
    },
];

const timelineTabs: { key: TimelineFilter; label: string }[] = [
    { key: "planning", label: "Planning and lead time" },
    { key: "construction", label: "Construction" },
];

const timelineWeeks = ["0", "2", "4", "6", "8", "10", "12", "14 wks"];

// Kitchen hub areas: 11 Montgomery County communities, Laurel and DC, with zip codes.
// Areas without a kitchen page yet (North Bethesda, Laurel) are listed without a link.
type KitchenArea = {
    label: string;
    zips: string;
    href?: string;
    wide?: boolean;
};

const kitchenAreas: KitchenArea[] = [
    { label: "Bethesda", zips: "20814, 20816, 20817", href: "/service/kitchen-remodeling/bethesda-md" },
    { label: "North Bethesda", zips: "20852" },
    { label: "Rockville", zips: "20850, 20851, 20852, 20853", href: "/service/kitchen-remodeling/rockville-md" },
    { label: "Potomac", zips: "20854", href: "/service/kitchen-remodeling/potomac-md" },
    { label: "Chevy Chase", zips: "20815", href: "/service/kitchen-remodeling/chevy-chase-md" },
    { label: "Gaithersburg", zips: "20877, 20878, 20879, 20882", href: "/service/kitchen-remodeling/gaithersburg-md" },
    { label: "Kensington", zips: "20895", href: "/service/kitchen-remodeling/kensington-md" },
    { label: "Silver Spring", zips: "20901, 20902, 20903, 20904, 20905, 20906, 20910", href: "/service/kitchen-remodeling/silver-spring-md" },
    { label: "Wheaton", zips: "20902, 20906", href: "/service/kitchen-remodeling/wheaton-md" },
    { label: "Garrett Park", zips: "20896", href: "/service/kitchen-remodeling/garrett-park-md" },
    { label: "Cabin John", zips: "20818", href: "/service/kitchen-remodeling/cabin-john-md" },
    { label: "Laurel", zips: "20707, 20708, 20723, 20724" },
    { label: "DC", zips: "20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20015, 20016, 20017, 20018, 20019, 20020, 20024, 20032, 20036, 20037", href: "/service/kitchen-remodeling/washington-dc", wide: true },
];

const SERVICE_AREA_MAP_EMBED_URL =
    "https://www.google.com/maps/d/u/0/embed?mid=18yZmZjXwVotzSHlIUaeEYMgoXUZnUI0&ehbc=2E312F&noprof=1";

// Kitchen-hub-only image copies (public/images/kitchen-remodeling/). Each photo appears once on this
// page and is not shared with another page. EXIF GPS points to the Google Business Profile pin.
const kitchenHeroImage = {
    src: "/images/kitchen-remodeling/kitchen-remodeling-maryland-bethesda-condo.webp",
    alt: "Kitchen remodeling in Montgomery County, Maryland: Bethesda condo kitchen with white cabinets, a stainless range and a vented hood",
};

const kitchenProjectImages: Record<string, { image: string; imageAlt: string }> = {
    "ronnie-r-kitchen-revival-plumbing-crisis": {
        image: "/images/kitchen-remodeling/rockville-kitchen-restoration-white-cabinets.webp",
        imageAlt: "Rockville, MD kitchen restoration with white cabinets, a double-oven range and wood-look flooring",
    },
    "bethesda-condo-full-renovation": {
        image: "/images/kitchen-remodeling/bethesda-condo-kitchen-renovation.webp",
        imageAlt: "Bethesda condo kitchen renovation with white cabinets, a tile backsplash and recessed lighting",
    },
    "townhouse-renovation-silver-spring": {
        image: "/images/kitchen-remodeling/silver-spring-townhouse-open-kitchen.webp",
        imageAlt: "Open kitchen with a peninsula after a complete townhouse renovation in Silver Spring, MD",
    },
};

type ProjectSource = {
    slug: string;
    category: string;
    titles?: string[];
    client?: string;
    description?: string;
    topdesc?: string;
};

// Same card text as the RecentProjects default; only the projects (Maryland kitchens) and images differ.
function createSummary(text = "", maxLength = 155) {
    const normalized = text.replace(/\s+/g, " ").trim();
    if (normalized.length <= maxLength) {
        return normalized;
    }
    const shortened = normalized.slice(0, maxLength);
    const lastSpace = shortened.lastIndexOf(" ");
    return `${shortened.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}...`;
}

const kitchenRecentProjects: ProjectCardData[] = Object.keys(kitchenProjectImages)
    .map((slug) => (ProjectsData as ProjectSource[]).find((project) => project.slug === slug))
    .filter((project): project is ProjectSource => Boolean(project))
    .map((project) => {
        const [categoryTitle, categoryLocation] = project.category.split("|").map((part) => part.trim());
        return {
            title: categoryTitle || project.titles?.[0] || project.client || "Recent Project",
            location: categoryLocation || "Maryland",
            text: createSummary(project.description || project.topdesc),
            href: `/project/${project.slug}`,
            ...kitchenProjectImages[project.slug],
        };
    });

const googleReviewsUrl =
    "https://www.google.com/maps/place/DMV+General+Contracting+Group+LLC/@39.0493761,-77.1200241,17z/data=!3m1!4b1!4m6!3m5!1s0x158dd0ef2148a11:0xceda33050d2dcdfb!8m2!3d39.049372!4d-77.1174492!16s%2Fg%2F11v3gbzc44?hl=en&entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D";

type RelatedWorkItem = {
    title: string;
    text: ReactNode;
};

const relatedWorkItems: RelatedWorkItem[] = [
    {
        title: "Wall Removal",
        text: "Taking out a wall needs new framing, and a load-bearing wall also needs a beam.",
    },
    {
        title: "Panel Upgrades",
        text: (
            <>
                Induction ranges and extra outlets can max out a 100-amp panel, so our{" "}
                <Link href="/service/electrical-services">electrical services</Link> raise the service size.
            </>
        ),
    },
    {
        title: "Plumbing Moves",
        text: (
            <>
                A relocated sink, an island sink or a gas range needs new lines from our{" "}
                <Link href="/service/plumbing-services">plumbing services</Link>.
            </>
        ),
    },
    {
        title: "Matching Floors",
        text: "New kitchen flooring often runs into the dining and living rooms for one continuous surface.",
    },
    {
        title: "Bathroom Remodels",
        text: "A bathroom done in the same project shares one setup, one dumpster and one crew.",
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
        case "openConcept":
            return (
                <svg {...props}>
                    <rect x="3" y="5" width="7" height="14" rx="1" stroke="currentColor" strokeWidth="1.6" />
                    <rect x="14" y="5" width="7" height="14" rx="1" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M10 12h4M12 10l2 2-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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
        case "island":
            return (
                <svg {...props}>
                    <path d="M4 10h16v4H4zM6 14v6M18 14v6M8 10V7h8v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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

export default function KitchenRemodeling(_props: { data?: KitchenService }) {
    const [timelineFilter, setTimelineFilter] = useState<TimelineFilter>("planning");
    // The hub uses its own hero copy; data.image stays for the services listing.
    const heroImage = kitchenHeroImage.src;
    const heroAlt = kitchenHeroImage.alt;

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
                        <span aria-current="page">Kitchen Remodeling</span>
                    </nav>

                    <div className={styles.heroGrid}>
                        <div className={styles.heroContent}>
                            <Badge className="nostars">Kitchen Remodeling · Maryland</Badge>

                            <h1 className={styles.heroTitle}>
                                Maryland Kitchen Remodeling Under <span>One Contract</span>
                            </h1>

                            <p className={styles.heroText}>
                                DMV General Contracting Group is a licensed <strong>design-build</strong> firm for <strong>kitchen remodeling in Maryland</strong>. One contract covers the <strong>design</strong>, the <strong>permits</strong> and the <strong>build</strong>, from a <strong>cabinet refresh</strong> to a <strong>full gut renovation</strong>, and every kitchen comes with a <strong>1-year warranty</strong>. Our team brings 35 years of residential construction experience to kitchens across <strong>Montgomery County</strong>, <strong>Laurel</strong> and <strong>DC</strong>.
                            </p>

                            <div className={styles.heroActions}>
                                <Button href="#estimate" icon={<ArrowIcon />}>
                                    Book a Free Kitchen Estimate
                                </Button>
                                <Button href="tel:+12407301292" variant="secondary">
                                    +1 240-730-1292
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
                                    <p className={styles.heroFeaturedTitle}>Bethesda condo kitchen renovation</p>
                                    <p className={styles.heroFeaturedMeta}>
                                        Cabinetry, countertops, backsplash, appliances and recessed lighting
                                    </p>
                                </div>
                            </div>

                            <aside className={styles.heroReview} aria-label="Google review rating">
                                <div className={styles.heroReviewTop}>
                                    <strong>4.9</strong>
                                    <Stars />
                                </div>
                                <p className={styles.heroReviewText}>
                                    Homeowners rate our kitchen remodels 4.9 out of 5 on Google.
                                </p>
                                <span className={styles.heroReviewMeta}>Based on verified client feedback</span>
                            </aside>
                        </div>
                    </div>

                    <div className={styles.heroGlance}>
                        <div className={styles.glanceItem}>
                            <span>Starting from</span>
                            <strong>$15,000</strong>
                        </div>
                        <div className={styles.glanceItem}>
                            <span>Construction time</span>
                            <strong>6–14 weeks</strong>
                        </div>
                        <div className={styles.glanceItem}>
                            <span>Design and permits</span>
                            <strong>4–8 weeks</strong>
                        </div>
                        <div className={styles.glanceItem}>
                            <span>Workmanship warranty</span>
                            <strong>1 year</strong>
                        </div>
                        <Link href="#pricing" className={styles.glanceLink}>
                            See Kitchen Pricing
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
                                    What&apos;s Included in a <span>Kitchen Remodel?</span>
                                </>
                            }
                            text="A kitchen remodel replaces the cabinets, counters, appliances and finishes, and often the layout. It also updates the pipes, wiring, lighting and vent ducts behind them. Our team runs every trade involved, because we are a licensed general contractor in Maryland. You never hire a cabinet shop, plumber or electrician separately."
                        />
                    </div>

                    <div className={styles.includedGrid}>
                        <div className={styles.includedAside}>
                            <div className={styles.includedFeature}>
                                <Image
                                    src="/images/kitchen-remodeling/kitchen-renovation-galley-rockville-md.webp"
                                    alt="Galley kitchen in Rockville, MD after a full kitchen renovation, with white cabinets, stone countertops and new flooring"
                                    fill
                                    sizes="(max-width: 900px) 100vw, 38vw"
                                    className={styles.featureImage}
                                />
                            </div>
                            <div className={styles.remodelOptions}>
                                <article className={styles.remodelCard}>
                                    <h2 className="h3">Refresh</h2>
                                    <p>Keeps the plan and swaps the surfaces.</p>
                                </article>
                                <article className={`${styles.remodelCard} ${styles.remodelCardDark}`}>
                                    <h3>Full remodel</h3>
                                    <p>Moves the plan and the systems inside the walls.</p>
                                </article>
                            </div>
                        </div>

                        <div className={styles.includedCards}>
                            <p className={styles.includedLabel}>A full kitchen remodel covers seven parts:</p>
                            {includedItems.map((item) => (
                                <article className={styles.includeCard} key={item.number}>
                                    <span className={styles.number}>{item.number}</span>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardText}>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <section className={styles.section} aria-labelledby="kitchen-services-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="kitchen-services-title"
                            align="center"
                            eyebrow={<Badge>Our Services</Badge>}
                            title={
                                <>
                                    Kitchen Remodels <span>We Build</span>
                                </>
                            }
                            text={
                                <>
                                    DMV General Contracting Group offers <strong>8 types of kitchen renovation in Maryland</strong> and DC. A <strong>free site visit</strong> shows which type suits your room and budget.
                                </>
                            }
                        />
                    <Button href="/" variant="secondary">
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
                    <p className="mt-4 text-center fw-bold">Each of these eight types runs under one contract, with one team for drawings, permits and the build.</p>
                </Container>
            </section>

            <section id="pricing" className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="kitchen-pricing-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="kitchen-pricing-title"
                            align="center"
                            eyebrow={<Badge>Cost and Pricing</Badge>}
                            title={
                                <>
                                    How Much Does a Kitchen Remodel <span>Cost in Maryland?</span>
                                </>
                            }
                            text={
                                <>
                                    A <strong>kitchen remodel in Maryland</strong> costs between <strong>$15,000 and $75,000</strong>. A cosmetic refresh runs $15,000 to $30,000. A full custom kitchen costs $75,000 to $120,000 or more. This table shows what each Maryland budget tier buys:
                                </>
                            }
                        />
                    </div>

                    <div className={styles.budgetBand}>
                        <span>Typical Maryland kitchen remodel</span>
                        <strong>$15,000–$75,000</strong>
                    </div>

                    <div className={styles.priceTableWrap}>
                        <table className={styles.priceTable}>
                            <caption className="visually-hidden">Maryland kitchen remodel cost by budget tier</caption>
                            <thead>
                                <tr>
                                    <th scope="col">Budget tier</th>
                                    <th scope="col">Typical cost</th>
                                    <th scope="col">What it buys</th>
                                </tr>
                            </thead>
                            <tbody>
                                {budgetTiers.map((tier) => (
                                    <tr key={tier.tier}>
                                        <th scope="row" data-label="Budget tier">
                                            <span className={styles.priceTableTag}>{tier.tier}</span>
                                            {tier.title}
                                        </th>
                                        <td data-label="Typical cost" className={styles.priceTableCost}>
                                            <strong>{tier.price}</strong>
                                        </td>
                                        <td data-label="What it buys">{tier.text}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className={styles.costNote}>
                        Kitchen remodeling depends on room size, cabinet grade and layout changes. After the visit, you get a free written estimate that lists the cost of each part of the job.
                    </p>

                    <div className={styles.budgetCheck}>
                        <div className={styles.budgetCheckHead}>
                            <h3>Is $30,000 Enough for a Kitchen Remodel?</h3>
                            <p>
                                <strong>Yes, $30,000 is enough</strong> for a kitchen remodel if you keep the current layout. You get refaced or stock boxes, fresh counters, a tiled backsplash and new light fixtures. It does not cover moving walls or plumbing. This table shows what three smaller Maryland kitchen budgets cover:
                            </p>
                        </div>

                        <div className={`${styles.priceTableWrap} ${styles.amountTableWrap}`}>
                            <table className={styles.priceTable}>
                                <caption className="visually-hidden">What a $10,000 to $30,000 kitchen budget covers</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">Budget</th>
                                        <th scope="col">What it covers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {budgetScenarios.map((scenario) => (
                                        <tr key={scenario.amount}>
                                            <th scope="row" data-label="Budget" className={styles.priceTableCost}>
                                                <strong>{scenario.amount}</strong>
                                            </th>
                                            <td data-label="What it covers">{scenario.text}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className={styles.costNote}>
                            Each of these budgets keeps the current layout. Layout changes start in the full custom tier at $75,000.
                        </p>
                    </div>

                    <div className={styles.driversBlock}>
                        <div className={styles.driversHead}>
                            <h3>What Drives the Cost?</h3>
                            <p>Six line items make up most of a kitchen budget:</p>
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
                                The cheapest change is no change to the work triangle. Leaving the sink, range and refrigerator in place avoids new pipes, gas lines and ducts.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <InHomeConsultation
                id="kitchen-estimate-cta"
                headingId="kitchen-estimate-cta-title"
                title="Get a written price for every part of your kitchen."
                text="After the free site visit, you get a written estimate that lists the cost of each part of the job."
                ctaLabel="Book a Free Kitchen Estimate"
            />

            <section className={styles.section} aria-labelledby="kitchen-design-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="kitchen-design-title"
                            align="center"
                            eyebrow={<Badge>Design</Badge>}
                            title={
                                <>
                                    Kitchen <span>Design and Materials</span>
                                </>
                            }
                            text="Design ends with a measured plan, drawings and a full selections list. Your price then rests on real products rather than allowances. You make four main design decisions with us:"
                        />
                    </div>

                    <div className={styles.designGrid}>
                        <figure className={styles.designMedia}>
                            <div className={styles.designImageWrap}>
                                <Image
                                    src="/images/kitchen-remodeling/peninsula-kitchen-under-cabinet-lighting-silver-spring-md.webp"
                                    alt="Kitchen with a white peninsula counter, white cabinets and under-cabinet lighting in a Silver Spring, MD townhouse"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 46vw"
                                    className={styles.designImage}
                                />
                            </div>
                            <figcaption className={styles.designCaption}>
                                <strong>Peninsula kitchen with under-cabinet lighting in Silver Spring, MD</strong>
                                <p>
                                    Long-lead items such as cabinets are ordered right after you approve the design, so they reach the site on schedule.
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

            <section id="kitchen-process" className={styles.section} aria-labelledby="kitchen-process-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="kitchen-process-title"
                            align="center"
                            eyebrow={<Badge>Process</Badge>}
                            title={
                                <>
                                    Our Kitchen <span>Remodeling Process</span>
                                </>
                            }
                            text="Our kitchen remodeling process runs in five steps, with one project lead as your contact from demolition to handover:"
                        />
                    </div>

                    <div className={styles.processTimeline}>
                        {kitchenProcessSteps.map((step, index) => {
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
                            <p>Every week your project lead tells you what was finished and what the crew does next.</p>
                        </div>
                        <Button href="#estimate" icon={<ArrowIcon />} className={styles.processAlertButton}>
                            Start With a Site Visit
                        </Button>
                    </div>
                </Container>
            </section>

            <section className={styles.section} aria-labelledby="kitchen-timeline-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="kitchen-timeline-title"
                            align="center"
                            eyebrow={
                                <Badge icon={<ClockIcon />}>Timeline</Badge>
                            }
                            title={
                                <>
                                    How Long Does a <span>Kitchen Remodel Take?</span>
                                </>
                            }
                            text={
                                <>
                                    Most kitchen remodels take <strong>6 to 14 weeks of construction</strong>, after{" "}
                                    <strong>4 to 8 weeks of design and permits</strong>. A refresh can finish in 2 to 4
                                    weeks. A full gut with a new layout takes 10 to 14 weeks. This table splits a
                                    Maryland or DC kitchen schedule by phase:
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
                                <span className={`${styles.legendDot} ${styles.legendLead}`} />
                                Lead time
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
                                The sink and range are out of use for most of the build. Set up a temporary kitchen in
                                another room with the refrigerator, a microwave and a small table.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <Permits variant="kitchen" />

            <LicensedInsured variant="kitchen" />

            <RecentProjects
                projects={kitchenRecentProjects}
                eyebrow="Case Studies & Projects"
                title="Our Kitchen Remodeling Projects"
                text="Our crews took these three kitchens from first drawing to final inspection. Each linked project page has photos of the finished room:"
                limit={3}
            />

            <section id="reviews" className={styles.section} aria-labelledby="kitchen-reviews-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="kitchen-reviews-title"
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
                                Across our Google reviews, past clients give our kitchen remodeling and other work a
                                4.9 average. Kitchen owners describe their projects at length on our{" "}
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
                                href={"/testimonials"}
                                className="fw-bold"
                                rel="noopener noreferrer"
                                variant="white">
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
                        <h2 id="related-work-title">What Else Changes When You Remodel a Kitchen?</h2>
                        <p>
                            A new kitchen often touches the rooms and systems around it. Our crews take on five
                            related jobs inside the same kitchen contract:
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

                    <p className={styles.relatedWorkNote}>
                        Doing them together saves a second mobilization and a second permit round.
                    </p>
                </Container>
            </section>

            <section className={styles.section} aria-labelledby="areas-title">
                <Container>
                    <div className={styles.areasLayout}>
                        <div className={styles.areasHeader}>
                            <Badge>Areas We Serve</Badge>
                            <h2 id="areas-title">
                                Kitchen Remodeling in Montgomery County, MD
                            </h2>
                            <p>
                                Our <strong>kitchen remodeling in Montgomery County</strong> covers{" "}
                                <strong>11 communities</strong>, plus <strong>Laurel</strong> and <strong>DC</strong>,
                                from our <strong>North Bethesda</strong> office. Linked towns have their own page with
                                local housing, permit rules and kitchen prices. All 13 areas are listed with their zip
                                codes:
                            </p>
                            <span className={styles.areasCount}>13 service areas</span>
                        </div>

                        <div className={styles.areasGrid}>
                            {kitchenAreas.map((area, index) => {
                                const number = (
                                    <span className={styles.areaNumber}>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                );
                                const text = (
                                    <span className={styles.areaText}>
                                        <span className={styles.areaLabel}>{area.label}</span>
                                        <strong className={styles.areaZips}>{area.zips}</strong>
                                    </span>
                                );
                                const wide = area.wide ? ` ${styles.areaCardWide}` : "";

                                return area.href ? (
                                    <Link href={area.href} className={`${styles.areaCard}${wide}`} key={area.label}>
                                        {number}
                                        {text}
                                        <ArrowIcon className={styles.areaArrow} />
                                    </Link>
                                ) : (
                                    <div className={`${styles.areaCard} ${styles.areaCardStatic}${wide}`} key={area.label}>
                                        {number}
                                        {text}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className={styles.areasNote}>
                        <p>
                            <strong>Montgomery County</strong> jobs range from 1950s colonials and ramblers to new infill homes.
                            In <strong>DC</strong> we mostly remodel kitchens in rowhouses, townhomes and condos.
                        </p>
                    </div>

                    <div className={styles.areasMap}>
                        <iframe
                            src={SERVICE_AREA_MAP_EMBED_URL}
                            title="DMV General Contracting Group LLC | Kitchen Remodeling in Montgomery County, Maryland"
                            className={styles.areasMapFrame}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                        <div className={styles.areasNap}>
                            <h3>Our North Bethesda Office</h3>
                            <Link href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                                <strong>DMV General Contracting Group LLC</strong>
                            </Link>
                            <address>
                                <Link href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                                    11810 Grand Park Ave #500, North Bethesda, MD 20852
                                </Link>
                            </address>
                            <span><strong>Phone: </strong><a href="tel:+12407301292">+1 240-730-1292</a></span>
                            <span>Open 7 days a week</span>
                            <Button href="#estimate" icon={<ArrowIcon />}>
                                Book a Free Kitchen Estimate
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            <HomeFaq variant="kitchen" />

            <Estimate variant="kitchen" />
        </main>
    );
}
