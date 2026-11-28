"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";
import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import NavitemActive from "@/components/Common/NavitemActive";
import ClientReviews from "@/components/Home/ClientReviews/ClientReviews";
import SectionHeading from "@/components/Common/SectionHeading";
import BethesdaProjectsReviews from "@/components/ServiceArea/BethesdaProjectsReviews";
import Estimate from "@/components/Home/Estimate/Estimate";
import HomeFaq from "@/components/Home/HomeFaq/HomeFaq";
import InHomeConsultation from "@/components/Home/InHomeConsultation/InHomeConsultation";
import LicensedInsured from "@/components/Home/LicensedInsured/LicensedInsured";
import Permits from "@/components/Home/Permits/Permits";
import { GOOGLE_BUSINESS_PROFILE_URL } from "@/data/home/homePageMedia";
import styles from "../kitchen-remodeling/style.module.scss";
import extras from "./basement-extras.module.scss";

type BasementService = {
    image?: string;
    imageAlt?: string;
};

type BasementUse = {
    title: string;
    text: string;
    icon: "family" | "office" | "gym" | "theater" | "bar" | "guest" | "bath" | "apartment";
};

const basementUses: BasementUse[] = [
    {
        icon: "family",
        title: "Family Room",
        text: "We turn the open part of a basement into a family or play room with durable flooring, recessed lights and outlets placed for screens and games.",
    },
    {
        icon: "office",
        title: "Home Office",
        text: "We frame a quiet office away from household noise. Sound insulation goes in the ceiling, with task lighting and a wired internet drop.",
    },
    {
        icon: "gym",
        title: "Home Gym",
        text: "We build gyms on the concrete slab, which carries heavy equipment well. Rubber flooring, mirrors and a dedicated treadmill circuit finish the room.",
    },
    {
        icon: "theater",
        title: "Home Theater",
        text: "We create media rooms with insulated walls, dimmable lights, pre-wired speaker runs and a layout planned around the screen.",
    },
    {
        icon: "bar",
        title: "Wet Bar",
        text: "We add wet bars with a sink, an under-counter refrigerator and cabinets. The sink ties into existing drain lines where possible to hold down plumbing cost.",
    },
    {
        icon: "guest",
        title: "Guest Suite",
        text: "We design guest suites with a bedroom, a closet and a legal egress window, giving visitors a private floor.",
    },
    {
        icon: "bath",
        title: "Below-Grade Bathroom",
        text: "We install full or half baths below grade. An ejector pump lifts waste when the new fixtures sit lower than the main sewer line.",
    },
    {
        icon: "apartment",
        title: "Apartment or In-Law Suite",
        text: "We build self-contained apartments with a kitchenette, bathroom and separate entrance. A unit you rent out counts as an accessory dwelling unit (ADU) and follows its own rules.",
    },
];

type ConditionIconName = "moisture" | "radon" | "height" | "insulation" | "egress" | "hvac";

type Condition = {
    title: string;
    text: string;
    icon: ConditionIconName;
};

const conditions: Condition[] = [
    {
        icon: "moisture",
        title: "Moisture and Waterproofing",
        text: "We look for water stains, white mineral deposits on the walls and damp spots after rain. The slab gets a moisture test when the signs are unclear. Most problems trace back to grading, gutters or a missing sump pump, and they are fixed before framing.",
    },
    {
        icon: "radon",
        title: "Radon",
        text: "Montgomery County sits in EPA Radon Zone 1, the highest-risk category, according to the county's Office of Consumer Protection. The EPA action level is 4.0 pCi/L. Test before you finish, because a mitigation pipe is far easier to route before drywall goes up.",
    },
    {
        icon: "height",
        title: "Ceiling Height",
        text: "The International Residential Code (section R305) sets a 7-foot minimum ceiling for habitable basement space. Beams and ducts may drop slightly lower. We measure under the lowest duct, as well as the joists.",
    },
    {
        icon: "insulation",
        title: "Insulation and Vapor Control",
        text: "We insulate foundation walls with rigid foam or closed-cell spray foam. Fiberglass against concrete traps condensation, which leads to mold behind the drywall.",
    },
    {
        icon: "egress",
        title: "Egress",
        text: "IRC section R310 requires an emergency escape opening in a basement with living space and in every basement bedroom. A typical egress window has at least 5.7 square feet of clear opening and a sill no higher than 44 inches. Adding one usually means cutting the foundation and digging a window well.",
    },
    {
        icon: "hvac",
        title: "HVAC and Electrical Capacity",
        text: "We check whether the furnace, air conditioner and panel can carry the new space. Some basements need a separate zone, a mini-split or added breaker capacity.",
    },
];

const budgetTiers = [
    {
        tier: "Basic finish",
        title: "Open and simple",
        price: "$30–$50 per sq ft",
        text: "Insulation, framing, drywall, flooring, lighting and heat in an open layout",
    },
    {
        tier: "Mid-range with bathroom",
        title: "Rooms and a bath",
        price: "$50–$85 per sq ft",
        text: "Separate rooms, a full or half bathroom, better flooring and built-in storage",
    },
    {
        tier: "Premium",
        title: "High-end finishes",
        price: "$85–$110+ per sq ft",
        text: "Wet bar or kitchenette, home theater, custom millwork and high-end finishes",
    },
];

const budgetScenarios = [
    {
        amount: "1,000 sq ft",
        text: "About $30,000 to $85,000 at basic to mid-range finishes, and $85,000 to $110,000 or more at premium finishes.",
    },
    {
        amount: "2,000 sq ft",
        text: "About double: $60,000 to $170,000, or more for premium work.",
    },
];

const basementProcessSteps = [
    {
        number: "01",
        title: "Inspect",
        text: "We test for moisture, measure ceiling height under every duct and check the panel, furnace and drain lines.",
    },
    {
        number: "02",
        title: "Design",
        text: "We lay out the rooms, place egress windows, plan lighting and outlets, and hand you a written estimate.",
    },
    {
        number: "03",
        title: "Permit",
        text: "We submit plans to the county, city or DC and answer reviewer questions until approval.",
    },
    {
        number: "04",
        title: "Build",
        text: "We frame and insulate, run wiring, plumbing and ducts, pass rough-in inspections, then hang drywall and lay flooring.",
    },
    {
        number: "05",
        title: "Hand over",
        text: "After the county or city signs off, we walk the space with you and your 1-year workmanship warranty begins.",
    },
];

type TimelineFilter = "planning" | "construction";
type TimelineIconName = "design" | "permit" | "refresh" | "wrench" | "home";

type TimelineItem = {
    category: TimelineFilter;
    variant: "planning" | "construction";
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
        title: "Inspection and design",
        meta: "2–4 weeks",
        label: "2–4",
        left: 0,
        width: 22,
        icon: "design",
    },
    {
        category: "planning",
        variant: "planning",
        title: "Permit review",
        meta: "2–6 weeks; each city and DC reviews plans on its own timetable",
        label: "2–6",
        left: 12,
        width: 34,
        icon: "permit",
    },
    {
        category: "construction",
        variant: "construction",
        title: "Construction: open basic finish",
        meta: "5–8 weeks",
        label: "5–8",
        left: 20,
        width: 40,
        icon: "refresh",
    },
    {
        category: "construction",
        variant: "construction",
        title: "Construction: rooms plus a bathroom",
        meta: "8–12 weeks",
        label: "8–12",
        left: 28,
        width: 55,
        icon: "wrench",
    },
    {
        category: "construction",
        variant: "construction",
        title: "Construction: apartment or premium finish",
        meta: "10–14 weeks",
        label: "10–14",
        left: 36,
        width: 64,
        icon: "home",
    },
];

const timelineTabs: { key: TimelineFilter; label: string }[] = [
    { key: "planning", label: "Planning and permits" },
    { key: "construction", label: "Construction" },
];

const timelineWeeks = ["0", "2", "4", "6", "8", "10", "12", "14 wks"];

type RelatedWorkItem = {
    title: string;
    text: ReactNode;
};

const relatedWorkItems: RelatedWorkItem[] = [
    {
        title: "A basement bathroom",
        text: "Fixtures below the sewer line need an ejector pump, so the layout is planned around it.",
    },
    {
        title: "New circuits and lighting",
        text: (
            <>
                A finished basement usually needs a subpanel or new dedicated circuits, and our{" "}
                <Link href="/service/electrical-services">electrical services</Link> cover that wiring.
            </>
        ),
    },
    {
        title: "Heating and cooling",
        text: (
            <>
                Basements stay cooler than the floors above, so our{" "}
                <Link href="/service/hvac">HVAC services</Link> size a separate zone or a mini-split.
            </>
        ),
    },
    {
        title: "Flooring that handles moisture",
        text: "Luxury vinyl plank and tile tolerate a concrete slab far better than solid hardwood.",
    },
    {
        title: "Framing and drywall",
        text: (
            <>
                Insulated walls with moisture-resistant drywall form the base for every finished room. See our{" "}
                <Link href="/service/framing">framing and drywall services</Link>.
            </>
        ),
    },
];

// Basement hub areas: 11 Montgomery County communities, Laurel and DC, with zip codes.
const areaLinks: { label: string; zips: string; href?: string; wide?: boolean }[] = [
    { label: "Bethesda", zips: "20814, 20816, 20817", href: "/service/basement-remodeling/bethesda-md" },
    { label: "North Bethesda", zips: "20852", href: "/service/basement-remodeling/north-bethesda-md" },
    { label: "Rockville", zips: "20850, 20851, 20852, 20853", href: "/service/basement-remodeling/rockville-md" },
    { label: "Potomac", zips: "20854", href: "/service/basement-remodeling/potomac-md" },
    { label: "Chevy Chase", zips: "20815", href: "/service/basement-remodeling/chevy-chase-md" },
    { label: "Gaithersburg", zips: "20877, 20878, 20879, 20882", href: "/service/basement-remodeling/gaithersburg-md" },
    { label: "Kensington", zips: "20895", href: "/service/basement-remodeling/kensington-md" },
    { label: "Silver Spring", zips: "20901, 20902, 20903, 20904, 20905, 20906, 20910", href: "/service/basement-remodeling/silver-spring-md" },
    { label: "Wheaton", zips: "20902, 20906", href: "/service/basement-remodeling/wheaton-md" },
    { label: "Garrett Park", zips: "20896", href: "/service/basement-remodeling/garrett-park-md" },
    { label: "Cabin John", zips: "20818", href: "/service/basement-remodeling/cabin-john-md" },
    { label: "Laurel", zips: "20707, 20708, 20723, 20724", href: "/service/basement-remodeling/laurel-md" },
    { label: "DC", zips: "20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20015, 20016, 20017, 20018, 20019, 20020, 20024, 20032, 20036, 20037", href: "/service/basement-remodeling/washington-dc", wide: true },
];

const SERVICE_AREA_MAP_EMBED_URL =
    "https://www.google.com/maps/d/u/0/embed?mid=18yZmZjXwVotzSHlIUaeEYMgoXUZnUI0&ehbc=2E312F&noprof=1";

// Basement-hub-only image copies (public/images/basement-remodeling/), each used once on this page.
// EXIF GPS points to the Google Business Profile pin.
const basementHeroImage = {
    src: "/images/basement-remodeling/basement-remodeling-family-room-kitchenette.webp",
    alt: "Basement remodeling: finished basement family room with a sectional sofa, a fireplace wall and a kitchenette",
};

const basementFaqs = [
    {
        question: "Do I need an egress window in a finished basement?",
        answer: "Yes, in most finished basements. IRC section R310 requires an emergency escape opening for a basement with living space and for each basement bedroom. The opening needs at least 5.7 square feet of clear area. Existing windows get measured on day one, and a new well is priced if one is missing.",
    },
    {
        question: "How do you deal with a damp basement before finishing it?",
        answer: "We find the water source first, then fix it before any framing. Most damp Maryland basements trace back to downspouts, poor grading or a missing sump pump. Once the fix is in, we confirm the walls and slab stay dry through rain before insulation goes up.",
    },
    {
        question: "Which part of a basement project costs the most?",
        answer: "A bathroom or kitchenette usually costs the most, because of new plumbing and sometimes an ejector pump. Waterproofing and new egress windows come next. Leaving these out of the first phase is the simplest way to lower the price.",
    },
    {
        question: "Can I rent out my finished basement?",
        answer: "Yes, if it meets the rules for a second unit. In Montgomery County, the Department of Housing and Community Affairs registers and licenses the unit. District landlords need both an occupancy certificate and a rental license. Rules change, so we verify them for your lot first.",
    },
    {
        question: "Should I test for radon before finishing my basement?",
        answer: "Yes. Montgomery County is in EPA Radon Zone 1, and the EPA advises action at 4.0 pCi/L or higher. A short-term test kit costs about $15. A mitigation pipe is far easier to route before the walls and ceiling are closed.",
    },
];

const googleReviewsUrl =
    "https://www.google.com/maps/place/DMV+General+Contracting+Group+LLC/@39.0493761,-77.1200241,17z/data=!3m1!4b1!4m6!3m5!1s0x158dd0ef2148a11:0xceda33050d2dcdfb!8m2!3d39.049372!4d-77.1174492!16s%2Fg%2F11v3gbzc44?hl=en&entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D";

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

function Stars() {
    return (
        <span className={styles.stars} aria-label="5 out of 5 stars">
            ★★★★★
        </span>
    );
}

function BasementUseIcon({ name }: { name: BasementUse["icon"] }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {name === "family" ? <path d="M4 11h16v7H4zM7 11V7h10v4M8 18v2M16 18v2" /> : null}
            {name === "office" ? <path d="M4 6h16v12H4zM9 18v2M15 18v2M8 10h3M13 10h3M8 14h3" /> : null}
            {name === "gym" ? <path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12" /> : null}
            {name === "theater" ? <path d="M4 5h16v12H4zM8 17v2M16 17v2M9 9l5 2-5 2V9Z" /> : null}
            {name === "bar" ? <path d="M5 6h14v5H5zM7 11v7M17 11v7M12 6V3M9 3h6" /> : null}
            {name === "guest" ? <path d="M4 20V7l8-4 8 4v13M9 20v-5h6v5M8 10h2M14 10h2" /> : null}
            {name === "bath" ? <path d="M4 11h16v4H4zM7 11V6a2 2 0 0 1 4 0M6 15v5M18 15v5" /> : null}
            {name === "apartment" ? <path d="M3 20V5h11v15M14 9h7v11M6 8h2M10 8h1M6 12h2M10 12h1M6 16h2M10 16h1M17 13h1" /> : null}
        </svg>
    );
}

function ConditionIcon({ name }: { name: ConditionIconName }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {name === "moisture" ? <path d="M12 3s6 6.4 6 10.2A6 6 0 0 1 6 13.2C6 9.4 12 3 12 3Z" /> : null}
            {name === "radon" ? <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2v.1h5v-.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3ZM9 19h6M10 21h4" /> : null}
            {name === "height" ? <path d="M4 20h16M6 20V6h12v14M6 10h12M9 6V4h6v2" /> : null}
            {name === "insulation" ? <path d="M4 5h16v14H4zM4 9h16M4 13h16M8 5v14M16 5v14" /> : null}
            {name === "egress" ? <path d="M4 20V6h11v14M15 11h5v9M8 12h3M9 11v2" /> : null}
            {name === "hvac" ? <path d="M4 8h9a3 3 0 1 0-3-3M4 12h13a3 3 0 1 1-3 3M4 16h6" /> : null}
        </svg>
    );
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
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {name === "design" ? <path d="M4 20h4L19 9l-4-4L4 16v4ZM13 7l4 4" /> : null}
            {name === "permit" ? <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6ZM14 3v6h6M9 14l2 2 4-4" /> : null}
            {name === "refresh" ? <path d="m14 4 6 6-3 3-6-6 3-3ZM11 7l-7 7v4h4l7-7" /> : null}
            {name === "wrench" ? <path d="M14.5 6.5a4 4 0 0 0-5.7 4.7l-5 5 3.8 3.8 5-5a4 4 0 0 0 4.7-5.7l-3 3-3.8-3.8 3-3Z" /> : null}
            {name === "home" ? <path d="M3 11 12 4l9 7v9H3v-9ZM9 20v-6h6v6M8 11l4 5 4-5" /> : null}
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

function ProcessAlertIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M8 3v4M16 3v4M3 10h18M9 15l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function BasementRemodeling(_props: { data?: BasementService }) {
    const [timelineFilter, setTimelineFilter] = useState<TimelineFilter>("planning");
    // The hub uses its own hero copy; data.image stays for the services listing.
    const heroImage = basementHeroImage.src;
    const heroAlt = basementHeroImage.alt;

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
                        <span aria-current="page">Basement Remodeling</span>
                    </nav>

                    <div className={styles.heroGrid}>
                        <div className={styles.heroContent}>
                            <Badge className="nostars">Basement Remodeling · Maryland</Badge>

                            <h1 className={styles.heroTitle}>
                                Maryland Basement Remodeling <span>That Stays Dry and Legal</span>
                            </h1>

                            <p className={styles.heroText}>
                                <strong>Basement remodeling in Maryland</strong> starts with a <strong>moisture test</strong> at DMV General Contracting Group, for homes across <strong>Montgomery County</strong>, <strong>Laurel</strong> and <strong>DC</strong>. After that, our licensed team <strong>designs</strong>, <strong>permits</strong> and <strong>finishes</strong> the space on a <strong>single contract</strong>. With 35 years in residential building behind our crew, we know how a below-grade room behaves through a Maryland summer and a wet spring.
                            </p>

                            <div className={styles.heroActions}>
                                <Button href="#estimate" icon={<ArrowIcon />}>
                                    Book a Free Basement Estimate
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
                                    <p className={styles.heroFeaturedTitle}>Finished basement with rooms and a wet bar</p>
                                    <p className={styles.heroFeaturedMeta}>
                                        Moisture checks, egress planning, framing, permits, HVAC and finishes
                                    </p>
                                </div>
                            </div>

                            <aside className={styles.heroReview} aria-label="Google review rating">
                                <div className={styles.heroReviewTop}>
                                    <strong>4.9</strong>
                                    <Stars />
                                </div>
                                <p className={styles.heroReviewText}>
                                    Homeowners rate our basement remodeling and other projects 4.9 out of 5 on Google.
                                </p>
                                <span className={styles.heroReviewMeta}>Based on verified client feedback</span>
                            </aside>
                        </div>
                    </div>

                    <div className={styles.heroGlance}>
                        <div className={styles.glanceItem}>
                            <span>Starting from</span>
                            <strong>$30 per sq ft</strong>
                        </div>
                        <div className={styles.glanceItem}>
                            <span>Construction time</span>
                            <strong>6–14 weeks</strong>
                        </div>
                        <div className={styles.glanceItem}>
                            <span>Design and permits</span>
                            <strong>4–10 weeks</strong>
                        </div>
                        <div className={styles.glanceItem}>
                            <span>Workmanship warranty</span>
                            <strong>1 year</strong>
                        </div>
                        <Link href="#pricing" className={styles.glanceLink}>
                            See Basement Pricing
                            <ArrowIcon />
                        </Link>
                    </div>
                </Container>
            </section>

            <section className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="finishing-vs-remodeling-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="finishing-vs-remodeling-title"
                            align="center"
                            eyebrow={<Badge>Finishing vs remodeling</Badge>}
                            title={
                                <>
                                    Basement Finishing vs Basement Remodeling: <span>What&apos;s the Difference?</span>
                                </>
                            }
                            text={
                                <>
                                    Basement finishing turns bare concrete into living space with insulation, framing, drywall, flooring, lighting and HVAC. Basement remodeling, also called <strong>basement renovation</strong>, updates a basement that is already finished, often with a new layout or a bathroom. Our licensed general contractor in Maryland team does both, and this table compares them for Maryland homes:
                                </>
                            }
                        />
                    </div>

                    <div className={extras.comparisonGrid}>
                        <article className={extras.comparisonCard}>
                            <h3>Basement finishing</h3>
                            <div className={extras.comparisonRow}>
                                <strong>Starting point</strong>
                                <span>Bare concrete walls and floor, exposed joists</span>
                            </div>
                            <div className={extras.comparisonRow}>
                                <strong>Typical scope</strong>
                                <span>Insulation, framing, wiring, ductwork, drywall, flooring, lighting</span>
                            </div>
                            <div className={extras.comparisonRow}>
                                <strong>Permit</strong>
                                <span>Building permit, plus electrical and plumbing permits</span>
                            </div>
                            <div className={extras.comparisonRow}>
                                <strong>Typical cost</strong>
                                <span>$30–$85 per sq ft for most projects</span>
                            </div>
                        </article>

                        <article className={extras.comparisonCard}>
                            <h3>Basement remodeling</h3>
                            <div className={extras.comparisonRow}>
                                <strong>Starting point</strong>
                                <span>Existing finished rooms that are dated or poorly laid out</span>
                            </div>
                            <div className={extras.comparisonRow}>
                                <strong>Typical scope</strong>
                                <span>Demolition of old finishes, new layout, upgraded materials, often a new bathroom</span>
                            </div>
                            <div className={extras.comparisonRow}>
                                <strong>Permit</strong>
                                <span>Building permit whenever the layout, circuits or pipes are altered</span>
                            </div>
                            <div className={extras.comparisonRow}>
                                <strong>Typical cost</strong>
                                <span>Depends on how much is torn out; often similar per sq ft</span>
                            </div>
                        </article>
                    </div>

                    <p className={styles.costNote}>
                        Bare or tired, every basement gets the same water, height, radon and exit checks first, covered further down this page.
                    </p>
                </Container>
            </section>

            <section className={styles.section} aria-labelledby="basement-uses-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="basement-uses-title"
                            align="center"
                            eyebrow={<Badge>Services</Badge>}
                            title={
                                <>
                                    What Can a <span>Finished Basement</span> Become?
                                </>
                            }
                            text={
                                <>
                                    Our <strong>basement finishing in Maryland</strong> covers <strong>eight main uses</strong>, and we have built each of them:
                                </>
                            }
                        />
                    </div>

                    <div className={styles.servicesGrid}>
                        {basementUses.map((use) => (
                            <article className={styles.serviceCard} key={use.title}>
                                <span className={styles.serviceIcon}>
                                    <BasementUseIcon name={use.icon} />
                                </span>
                                <div className={styles.serviceBody}>
                                    <h3 className={styles.serviceTitle}>{use.title}</h3>
                                    <p className={styles.serviceText}>{use.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <p className={styles.costNote}>
                        Most projects combine two or three of these uses, so we lay out every room in one plan before framing starts.
                    </p>
                </Container>
            </section>

            <section className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="before-you-finish-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="before-you-finish-title"
                            align="center"
                            eyebrow={<Badge>Before you finish</Badge>}
                            title={
                                <>
                                    Before You Finish: Moisture, Radon, Ceiling Height <span>and Egress</span>
                                </>
                            }
                            text={<>Six conditions decide whether a basement can be finished or a <strong>basement renovation</strong> can go ahead, and we check each one at the first visit:</>}
                        />
                    </div>

                    <div className={styles.designGrid}>
                        <figure className={styles.designMedia}>
                            <div className={styles.designImageWrap}>
                                <Image
                                    src="/images/basement-remodeling/silver-spring-townhouse-oak-stairs.webp"
                                    alt="New oak stairs with black iron balusters in a Silver Spring, MD townhouse renovation that included a finished basement"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 46vw"
                                    className={styles.designImage}
                                />
                            </div>
                            <figcaption className={styles.designCaption}>
                                <strong>Every finished room starts below the drywall</strong>
                                <p>
                                    Moisture, headroom, radon, egress and capacity are checked before the first wall goes up.
                                </p>
                            </figcaption>
                        </figure>

                        <div className={styles.designCards}>
                            {conditions.map((condition) => (
                                <article className={styles.designCard} key={condition.title}>
                                    <span className={styles.designIcon}>
                                        <ConditionIcon name={condition.icon} />
                                    </span>
                                    <h3>{condition.title}</h3>
                                    <p>{condition.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className={extras.infoPanel}>
                        <p>Any of these six that needs work shows up as its own line in the estimate.</p>
                    </div>
                </Container>
            </section>

            <section id="pricing" className={styles.section} aria-labelledby="basement-pricing-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="basement-pricing-title"
                            align="center"
                            eyebrow={<Badge>Cost and Pricing</Badge>}
                            title={
                                <>
                                    How Much Does It Cost to Finish a Basement <span>in Maryland?</span>
                                </>
                            }
                            text={
                                <>
                                    <strong>Finishing a basement in Maryland</strong> costs <strong>$30 to $85 per square foot</strong>, or about <strong>$30,000 to $90,000</strong> for most projects. Premium finishes reach $85 to $110 or more per square foot. This table shows the three Maryland basement finish levels:
                                </>
                            }
                        />
                    </div>

                    <div className={styles.budgetBand}>
                        <span>Typical Maryland basement finish</span>
                        <strong>$30–$85 per sq ft</strong>
                    </div>

                    <div className={styles.priceTableWrap}>
                        <table className={styles.priceTable}>
                            <caption className="visually-hidden">Maryland basement finishing cost by finish level</caption>
                            <thead>
                                <tr>
                                    <th scope="col">Finish level</th>
                                    <th scope="col">Cost per sq ft</th>
                                    <th scope="col">What it covers</th>
                                </tr>
                            </thead>
                            <tbody>
                                {budgetTiers.map((tier) => (
                                    <tr key={tier.tier}>
                                        <th scope="row" data-label="Finish level">
                                            <span className={styles.priceTableTag}>{tier.tier}</span>
                                            {tier.title}
                                        </th>
                                        <td data-label="Cost per sq ft" className={styles.priceTableCost}>
                                            <strong>{tier.price}</strong>
                                        </td>
                                        <td data-label="What it covers">{tier.text}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.budgetCheck}>
                        <div className={styles.budgetCheckHead}>
                            <h3>How Much Does It Cost to Finish a 1,000 sq ft Basement?</h3>
                            <p>
                                <strong>About $30,000 to $85,000</strong> at basic to mid-range finishes. This table shows typical Maryland totals by basement size:
                            </p>
                        </div>

                        <div className={`${styles.priceTableWrap} ${styles.amountTableWrap}`}>
                            <table className={styles.priceTable}>
                                <caption className="visually-hidden">Maryland basement finishing cost by basement size</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">Basement size</th>
                                        <th scope="col">Typical total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {budgetScenarios.map((scenario) => (
                                        <tr key={scenario.amount}>
                                            <th scope="row" data-label="Basement size" className={styles.priceTableCost}>
                                                <strong>{scenario.amount}</strong>
                                            </th>
                                            <td data-label="Typical total">{scenario.text}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className={styles.costNote}>
                            A bathroom, kitchenette, egress window or waterproofing moves either size toward the top of its range.
                        </p>
                    </div>

                    <div className={extras.infoPanel}>
                        <h3>Is Finishing a Basement Worth the Money?</h3>
                        <p>
                            Yes, when the basement is dry, tall enough and has legal egress for any bedroom. The 2025 Cost vs. Value Report puts a national basement remodel at $52,012, with about 71% recovered at resale. You also gain the use of the space every day you live there.
                        </p>
                    </div>

                    <div className={styles.driversBlock}>
                        <div className={styles.driversHead}>
                            <h3>What Moves the Price Up?</h3>
                            <p>A bathroom, kitchenette, egress window or waterproofing each moves a project up the scale.</p>
                        </div>

                        <div className={styles.tipCard}>
                            <span className={styles.tipLabel}>NOTE</span>
                            <p>Each one appears as a separate line in your written estimate.</p>
                        </div>
                    </div>
                </Container>
            </section>

            <InHomeConsultation
                id="basement-estimate-cta"
                headingId="basement-estimate-cta-title"
                title="Get a written price for every part of your basement."
                text="The first visit tells you whether your basement is worth finishing before you spend anything."
                ctaLabel="Book a Free Basement Estimate"
            />

            <Permits variant="basement" />

            <section className={styles.section} aria-labelledby="dc-basements-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="dc-basements-title"
                            align="center"
                            eyebrow={<Badge>Rowhouse basements</Badge>}
                            title={
                                <>
                                    Rowhouse Basements: <span>Underpinning and English Basements</span>
                                </>
                            }
                            text={
                                <>
                                    Rowhouse basements in <strong>DC</strong> work differently because many are <strong>English basements</strong>. These half-sunken levels have low ceilings, shared party walls and frequently their own street door. Two projects come up most:
                                </>
                            }
                        />
                    </div>

                    <div className={extras.dcGrid}>
                        <article className={extras.dcCard}>
                            <h3>Lowering a Basement by Underpinning</h3>
                            <p>
                                We lower a floor that is too low for code by underpinning. Crews dig below the footings in sections and pour new concrete beneath them. The work needs engineered drawings, a DOB permit and careful sequencing beside a neighbor&apos;s wall.
                            </p>
                        </article>

                        <article className={extras.dcCard}>
                            <h3>Creating an English Basement Apartment</h3>
                            <p>
                                We convert English basements into separate apartments with their own entrance, kitchen and bathroom. Each one is built to the fire separation and egress rules for a second unit.
                            </p>
                        </article>
                    </div>

                    <p className={styles.costNote}>
                        Our page on{" "}
                        <Link href="/service/basement-remodeling/washington-dc">basement remodeling in DC</Link>{" "}
                        covers rowhouse projects in more detail.
                    </p>
                </Container>
            </section>

            <section id="basement-process" className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="basement-process-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="basement-process-title"
                            align="center"
                            eyebrow={<Badge>Process</Badge>}
                            title={
                                <>
                                    Our <span>Basement Finishing</span> Process
                                </>
                            }
                            text="We finish every basement in five stages, in a fixed order that keeps problems from getting sealed behind drywall:"
                        />
                    </div>

                    <div className={styles.processTimeline}>
                        {basementProcessSteps.map((step, index) => {
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
                            <h3>One Project Lead</h3>
                            <p>The same project lead stays on your job from the moisture test to the walkthrough.</p>
                        </div>
                        <Button href="#estimate" icon={<ArrowIcon />} className={styles.processAlertButton}>
                            Start With a Site Visit
                        </Button>
                    </div>
                </Container>
            </section>

            <section className={styles.section} aria-labelledby="basement-timeline-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="basement-timeline-title"
                            align="center"
                            eyebrow={<Badge icon={<ClockIcon />}>Timeline</Badge>}
                            title={
                                <>
                                    How Long Does It Take to <span>Finish a Basement?</span>
                                </>
                            }
                            text="Most basements take 6 to 12 weeks of construction once the permit is issued. Design and permit review add 4 to 10 weeks before work starts in Maryland or DC:"
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
                                    <span className={styles.timelineHeaderTitle}>Stage</span>
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
                                Waterproofing or a new egress window adds time at the start, since both come before framing.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <ClientReviews id="home-reviews" />

            <LicensedInsured variant="basement" />

            <BethesdaProjectsReviews
                project={{
                    badgeLabel: "Case Studies & Projects",
                    location: "Silver Spring, Maryland",
                    image: "/images/basement-remodeling/silver-spring-townhouse-stair-handrail.webp",
                    imageAlt: "Oak stair treads and a handrail in a Silver Spring, MD townhouse renovation that included a finished basement",
                    title: "Basement Remodeling Projects",
                    text: "This Silver Spring townhouse renovation included a fully finished basement with a new bathroom. More finished basements and other jobs are on our remodeling projects page.",
                    primaryLabel: "See the Silver Spring project",
                    primaryHref: "/project/townhouse-renovation-silver-spring",
                    secondaryLabel: "Browse remodeling projects",
                    secondaryHref: "/projects",
                }}
                reviews={{
                    badgeLabel: "Testimonials",
                    title: "What Homeowners Say",
                    score: "4.9",
                    text: (
                        <>
                            Our Google rating stands at 4.9 out of 5 across basement remodeling and other projects. Basement owners recount their projects on our{" "}
                            <Link href="/testimonials" className={styles.serviceTextLink}>client reviews page</Link>.
                        </>
                    ),
                    googleCtaLabel: "Read Reviews on Google",
                    secondaryLabel: "Client Reviews",
                    secondaryHref: "/testimonials",
                }}
            />

            <section className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="basement-related-title">
                <Container>
                    <div className={styles.relatedWorkHeader}>
                        <Badge>Related Work</Badge>
                        <h2 id="basement-related-title">What Else to Plan With a Basement Project</h2>
                        <p>
                            Five trades meet in a basement, and these related jobs are best decided before drywall:
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
                        Settling these choices at the design stage avoids opening finished walls later.
                    </p>
                </Container>
            </section>

            <section className={styles.section} aria-labelledby="areas-title">
                <Container>
                    <div className={styles.areasLayout}>
                        <div className={styles.areasHeader}>
                            <Badge>Areas We Serve</Badge>
                            <h2 id="areas-title">
                                Basement Remodeling in Montgomery County, MD
                            </h2>
                            <p>
                                Our <strong>basement remodeling in Montgomery County</strong> covers{" "}
                                <strong>11 communities</strong>, plus <strong>Laurel</strong> and <strong>DC</strong>,
                                from our <strong>North Bethesda</strong> office. Each town&apos;s page covers its housing,
                                soil and permit rules. All 13 areas are listed with their zip codes:
                            </p>
                            <span className={styles.areasCount}>13 service areas</span>
                        </div>

                        <div className={styles.areasGrid}>
                            {areaLinks.map((area, index) => {
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
                            Older <strong>Montgomery County</strong> homes often have full basements with low ductwork. Newer houses tend to have taller walk-out basements that are easier to finish.
                        </p>
                    </div>

                    <div className={styles.areasMap}>
                        <iframe
                            src={SERVICE_AREA_MAP_EMBED_URL}
                            title="DMV General Contracting Group LLC | Basement Remodeling in Montgomery County, Maryland"
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
                                Book a Free Basement Estimate
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            <HomeFaq
                variant="home"
                eyebrow="Frequently Asked Questions"
                title="Frequently Asked Questions"
                text="Have a basement question that is not here? Call us seven days a week."
                faqs={basementFaqs}
            />

            <Estimate variant="basement" />
        </main>
    );
}
