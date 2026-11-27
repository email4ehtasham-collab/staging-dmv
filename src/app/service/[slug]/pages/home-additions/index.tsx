"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
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
import { GOOGLE_BUSINESS_PROFILE_URL } from "@/data/home/homePageMedia";
import styles from "./style.module.scss";

type AdditionService = {
    image?: string;
    imageAlt?: string;
    title?: string;
};

type ServiceIconName =
    | "renovation"
    | "openConcept"
    | "layout"
    | "refresh"
    | "building"
    | "addition"
    | "island"
    | "custom";

type AdditionServiceItem = {
    title: string;
    text: string;
    icon: ServiceIconName;
};

type RelatedWorkItem = {
    title: string;
    text: ReactNode;
};

type Faq = {
    question: string;
    answer: string;
};

const additionServices: AdditionServiceItem[] = [
    {
        icon: "building",
        title: "Second Story",
        text: "We add a full or partial upper floor, which can double living space without using any yard. Our engineers confirm the walls and foundation can carry the load before design starts.",
    },
    {
        icon: "addition",
        title: "Rear or Ground-Floor Room",
        text: "We extend the house with a family room, office or playroom on a new foundation. Floor height, ceiling lines and trim match the original rooms.",
    },
    {
        icon: "renovation",
        title: "Bump-Out",
        text: "We push one wall out a few feet to enlarge a cramped kitchen, bath or breakfast nook. A small foundation or a cantilever keeps the cost well below a full addition.",
    },
    {
        icon: "island",
        title: "Primary Suite",
        text: "We build a bedroom with its own bathroom and walk-in closet, usually at the back of the ground floor or over a garage. It suits families planning for one-level living.",
    },
    {
        icon: "openConcept",
        title: "Kitchen Extension",
        text: "We enlarge the kitchen into new space for an island, a walk-in pantry or an eat-in area. Cabinets and appliances are designed with the extension, not squeezed in later.",
    },
    {
        icon: "custom",
        title: "Sunroom or Four-Season Room",
        text: "We build insulated, heated and cooled glass rooms for year-round use, unlike a three-season porch.",
    },
    {
        icon: "layout",
        title: "Garage",
        text: "We add attached or detached garages, with the option of a finished room or apartment above.",
    },
    {
        icon: "refresh",
        title: "In-Law Suite",
        text: "We create private suites with a sitting area, a bathroom and often a kitchenette. A suite with its own entrance and full kitchen becomes an accessory dwelling unit (ADU), which follows separate zoning rules.",
    },
];

const buildComparison = [
    {
        factor: "Cost per sq ft",
        up: "Often higher, because of structural reinforcement and a new roof",
        out: "Often lower when the site is level and easy to reach",
    },
    {
        factor: "Foundation",
        up: "The existing foundation must carry the load, sometimes with reinforcement",
        out: "New footings or a slab under the added footprint",
    },
    {
        factor: "Yard space",
        up: "Unchanged",
        out: "Reduced by the new footprint",
    },
    {
        factor: "Zoning limit that matters most",
        up: "Height: 35 ft to the peak in Montgomery County's R-60 zone; 35 ft in DC rowhouse zones",
        out: "Setbacks and lot coverage: 35% in the R-60 zone",
    },
    {
        factor: "Disruption",
        up: "The upper floor is often unusable during construction",
        out: "Most of the house stays in use until the tie-in",
    },
    {
        factor: "Best for",
        up: "Small lots and houses with a sound structure",
        out: "Larger lots and one-level living",
    },
];

const additionCosts = [
    {
        type: "Bump-out",
        size: "50–150 sq ft",
        cost: "About $30,000–$75,000",
    },
    {
        type: "Room addition",
        size: "300–500 sq ft",
        cost: "About $100,000–$200,000",
    },
    {
        type: "Second story",
        size: "800–1,200 sq ft",
        cost: "About $200,000–$450,000+",
    },
];

const movingCosts = [
    {
        cost: "Selling and buying costs",
        adding: "None",
        moving: "Agent commission on the sale, plus buyer closing costs",
    },
    {
        cost: "Transfer taxes",
        adding: "None",
        moving: "1% Montgomery County transfer tax plus 0.5% Maryland transfer tax",
    },
    {
        cost: "Mortgage",
        adding: "Keep your current loan, or add a renovation loan",
        moving: "A new loan at current rates on a larger balance",
    },
    {
        cost: "Neighborhood and schools",
        adding: "Unchanged",
        moving: "Start over",
    },
    {
        cost: "Disruption",
        adding: "Months of construction at home",
        moving: "Packing, moving and settling into a new house",
    },
];

const systemConnections = [
    {
        title: "Foundation and Framing",
        text: "New footings are sized for your soil and the load above. New framing is fastened to existing walls and floors so both parts settle together.",
    },
    {
        title: "Roof Tie-In",
        text: "We join the new roof to the old at a matching pitch where possible and flash every intersection. An old roof near the end of its life gets replaced, so both sides age together.",
    },
    {
        title: "Siding and Windows",
        text: "We match existing siding, brick or trim. New windows line up with the originals in size, style and head height.",
    },
    {
        title: "Heating, Cooling and Electrical",
        text: "We confirm the furnace, AC and panel have spare capacity before the design is final. Short capacity means added duct runs, a ductless mini-split or a bigger panel.",
    },
];

const processSteps = [
    {
        number: "01",
        title: "Feasibility and zoning.",
        text: "We measure the house, check setbacks and confirm what your lot allows.",
    },
    {
        number: "02",
        title: "Design with 3D renderings.",
        text: "You see the addition in 3D first, so changes happen on screen rather than on site.",
    },
    {
        number: "03",
        title: "Engineering.",
        text: "Our in-house engineers size the foundation, beams and framing and prepare structural drawings.",
    },
    {
        number: "04",
        title: "Permits.",
        text: "We submit drawings to the right office, answer every review comment and schedule each inspection.",
    },
    {
        number: "05",
        title: "Construction.",
        text: "We pour the foundation, frame walls and roof, rough in systems, close walls and install finishes.",
    },
    {
        number: "06",
        title: "Handover.",
        text: "After final approval, the rooms are yours, backed by a 1-year workmanship warranty.",
    },
];

const timelineRows = [
    {
        phase: "Feasibility and design",
        duration: "1–3 months",
    },
    {
        phase: "Engineering and permits",
        duration: "1–3 months, varying by permit office",
    },
    {
        phase: "Construction: bump-out or small room",
        duration: "2–3 months",
    },
    {
        phase: "Construction: large room or second story",
        duration: "4–6 months",
    },
];

const relatedWorkItems: RelatedWorkItem[] = [
    {
        title: "Kitchen remodels.",
        text: "An addition that opens into the kitchen is the moment to remodel it so old and new spaces work as one room.",
    },
    {
        title: "New bathrooms.",
        text: "A primary suite or in-law addition usually needs a bathroom designed with it.",
    },
    {
        title: "Roof replacement.",
        text: "An aging roof is best replaced during the tie-in, and our roofing crew matches both sides.",
    },
    {
        title: "Exterior matching.",
        text: "New siding installation across the house is sometimes simpler than matching faded siding.",
    },
    {
        title: "Heating and cooling.",
        text: "Our HVAC services extend ductwork or add a mini-split for the new rooms.",
    },
];

// Home additions hub areas: 11 Montgomery County communities, Laurel and DC, with zip codes.
// Kensington has no home additions page yet, so it is listed without a link.
const areaLinks: { label: string; zips: string; href?: string; wide?: boolean }[] = [
    { label: "Bethesda", zips: "20814, 20816, 20817", href: "/service/home-additions/bethesda-md" },
    { label: "North Bethesda", zips: "20852", href: "/service/home-additions/north-bethesda-md" },
    { label: "Rockville", zips: "20850, 20851, 20852, 20853", href: "/service/home-additions/rockville-md" },
    { label: "Potomac", zips: "20854", href: "/service/home-additions/potomac-md" },
    { label: "Chevy Chase", zips: "20815", href: "/service/home-additions/chevy-chase-md" },
    { label: "Gaithersburg", zips: "20877, 20878, 20879, 20882", href: "/service/home-additions/gaithersburg-md" },
    { label: "Kensington", zips: "20895" },
    { label: "Silver Spring", zips: "20901, 20902, 20903, 20904, 20905, 20906, 20910", href: "/service/home-additions/silver-spring-md" },
    { label: "Wheaton", zips: "20902, 20906", href: "/service/home-additions/wheaton-md" },
    { label: "Garrett Park", zips: "20896", href: "/service/home-additions/garrett-park-md" },
    { label: "Cabin John", zips: "20818", href: "/service/home-additions/cabin-john-md" },
    { label: "Laurel", zips: "20707, 20708, 20723, 20724", href: "/service/home-additions/laurel-md" },
    { label: "DC", zips: "20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20015, 20016, 20017, 20018, 20019, 20020, 20024, 20032, 20036, 20037", href: "/service/home-additions/washington-dc", wide: true },
];

const SERVICE_AREA_MAP_EMBED_URL =
    "https://www.google.com/maps/d/u/0/embed?mid=18yZmZjXwVotzSHlIUaeEYMgoXUZnUI0&ehbc=2E312F&noprof=1";

// Home-additions-hub-only image copies (public/images/home-additions/), each used once on this page.
// Both come from our Chevy Chase porch addition. EXIF GPS points to the Google Business Profile pin.
const additionHeroImage = {
    src: "/images/home-additions/home-additions-maryland-chevy-chase-porch-over-garage.webp",
    alt: "Home additions in Montgomery County, Maryland: screened porch addition built above a garage in Chevy Chase",
};

const additionProjects: ProjectCardData[] = [
    {
        title: "Screened Porch Addition Above Garage",
        location: "Chevy Chase, Maryland",
        text: "We transformed the garage area into a functional porch, managing every step from permits to final inspection.",
        href: "/project/robert-b-porch-addition-over-garage",
        image: "/images/home-additions/chevy-chase-screened-porch-addition-interior.webp",
        imageAlt: "Inside the screened porch addition above a garage in Chevy Chase, MD, with a ceiling fan and white railings",
    },
];

const additionFaqs: Faq[] = [
    {
        question: "Do I need a permit for an addition?",
        answer: "Yes. No jurisdiction we serve lets an addition go up without a building permit. Plans must meet setback, height and lot coverage limits, and historic districts add a separate review. A new bathroom adds a plumbing permit, which we file along with the building permit.",
    },
    {
        question: "Can we live at home while you build the addition?",
        answer: "Yes, for most ground-floor additions. The new space stays sealed off until the final tie-in to the house. For a second story, some families move out while the roof is open. We set the schedule with you before construction starts.",
    },
    {
        question: "Can I bring my own architect or plans?",
        answer: "Yes. We build from your architect's drawings, or our in-house designers and engineers take the design from there. Our engineers still verify every beam and footing on outside plans. Outside drawings sometimes need revisions to meet local setback or coverage rules.",
    },
    {
        question: "What is included in your estimate?",
        answer: "A line-item breakdown of design, engineering, permits, labor and materials. You see exactly where each dollar goes before construction starts. Any change later goes into a written change order, as Maryland home improvement law requires.",
    },
    {
        question: "Is it cheaper to build an addition or buy a bigger house?",
        answer: "Often the addition, once you count moving costs. Selling means agent commission, and buying in Montgomery County means a 1% county transfer tax plus 0.5% to the state. An addition also keeps your current mortgage rate, school and neighborhood.",
    },
];

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.6" />
            <path d="m6 10 2.5 2.5L14 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ArrowIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function StarIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="m12 2 2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2Z" />
        </svg>
    );
}

function ServiceIcon({ name }: { name: ServiceIconName }) {
    const props = {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.6,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
    };

    switch (name) {
        case "building":
            return (
                <svg {...props}>
                    <path d="M4 21V7l8-4 8 4v14M9 21v-5h6v5M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
                </svg>
            );
        case "addition":
            return (
                <svg {...props}>
                    <path d="M3 21V9l9-6 9 6v12M3 21h18M9 21v-6h6v6M3 12h18" />
                </svg>
            );
        case "renovation":
            return (
                <svg {...props}>
                    <path d="m14 4 6 6-3 3-6-6 3-3ZM11 7l-7 7v4h4l7-7" />
                </svg>
            );
        case "island":
            return (
                <svg {...props}>
                    <path d="M3 10h18v7H3zM6 10V6h12v4M9 17v4M15 17v4" />
                </svg>
            );
        case "openConcept":
            return (
                <svg {...props}>
                    <path d="M3 21V8l7-4 7 4v13M17 12h4v9M3 21h18M9 21v-5h4v5" />
                </svg>
            );
        case "layout":
            return (
                <svg {...props}>
                    <path d="M4 4h16v16H4zM4 11h16M11 4v16" />
                </svg>
            );
        case "refresh":
            return (
                <svg {...props}>
                    <path d="M20 7v5h-5M4 17v-5h5M19 12a7 7 0 0 0-12-4L4 11M5 12a7 7 0 0 0 12 4l3-3" />
                </svg>
            );
        default:
            return (
                <svg {...props}>
                    <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4" />
                </svg>
            );
    }
}

function Stars() {
    return (
        <span className={styles.stars} aria-label="5 out of 5 stars">
            ★★★★★
        </span>
    );
}

export default function HomeAdditions(_props: { data?: AdditionService }) {
    // The hub uses its own hero copy; data.image stays for the services listing.
    const heroImage = additionHeroImage.src;
    const heroAlt = additionHeroImage.alt;

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
                        <span aria-current="page">Home Additions</span>
                    </nav>

                    <div className={styles.heroGrid}>
                        <div className={styles.heroContent}>
                            <h1 className={styles.heroTitle}>
                                Maryland Home Additions: <span>More Space Without Moving</span>
                            </h1>

                            <p className={styles.heroText}>
                                Growing households gain room without moving when DMV General Contracting Group builds their <strong>home additions in Maryland</strong>, across <strong>Montgomery County</strong>, <strong>Laurel</strong> and <strong>DC</strong>. One contract covers the <strong>zoning check</strong>, <strong>structural engineering</strong>, <strong>permits</strong> and <strong>construction</strong>. Most additions cost $200 to $400 per square foot finished.
                            </p>


                            <div className={styles.heroActions}>
                                <Button href="#estimate" icon={<ArrowIcon />}>
                                    Get a free addition estimate
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
                                    <p className={styles.heroFeaturedTitle}>Screened porch addition above a garage in Chevy Chase</p>
                                    <p className={styles.heroFeaturedMeta}>
                                        Framing, concrete, roofing and electrical, from permits to final inspection.
                                    </p>
                                </div>
                            </div>

                            <aside className={styles.heroReview} aria-label="Google review rating">
                                <div className={styles.heroReviewTop}>
                                    <strong>4.9</strong>
                                    <Stars />
                                </div>
                                <p className={styles.heroReviewText}>
                                    Google reviewers give us 4.9 stars out of 5.
                                </p>
                            </aside>
                        </div>
                    </div>

                    <div className={styles.heroGlance}>
                        <div className={styles.glanceItem}>
                            <span>Typical cost</span>
                            <strong>$200–$400 per sq ft</strong>
                        </div>
                        <div className={styles.glanceItem}>
                            <span>Timeline</span>
                            <strong>4–12 months</strong>
                        </div>
                        <div className={styles.glanceItem}>
                            <span>Warranty</span>
                            <strong>1 year</strong>
                        </div>
                        <Link href="#pricing" className={styles.glanceLink}>
                            How Much Does a Home Addition Cost in Maryland?
                            <ArrowIcon />
                        </Link>
                    </div>
                </Container>
            </section>

            <section className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="addition-facts-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="addition-facts-title"
                            align="center"
                            eyebrow={<Badge>At a glance</Badge>}
                            title="Home Additions at a Glance"
                            text="These five facts frame most Maryland and DC addition projects:"
                        />
                    </div>
                    <div className={styles.contentTableWrap}>
                        <table className={styles.contentTable}>
                            <thead>
                                <tr>
                                    <th scope="col">Item</th>
                                    <th scope="col">Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Typical cost</th>
                                    <td>$200–$400 per sq ft finished</td>
                                </tr>
                                <tr>
                                    <th scope="row">Timeline</th>
                                    <td>4–12 months from design to final walkthrough</td>
                                </tr>
                                <tr>
                                    <th scope="row">Zoning and permits</th>
                                    <td>Checked, drawn to and filed by our team</td>
                                </tr>
                                <tr>
                                    <th scope="row">Warranty</th>
                                    <td>1 year on workmanship</td>
                                </tr>
                                <tr>
                                    <th scope="row">Service area</th>
                                    <td>Montgomery County, Laurel and DC</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Container>
            </section>

            <InHomeConsultation
                id="addition-estimate-cta"
                headingId="addition-estimate-cta-title"
                titleAs="strong"
                title="Get a free addition estimate, and we will walk your lot and tell you what zoning allows."
                text=""
                ctaLabel="Get a free addition estimate"
            />

            <section className={styles.section} aria-labelledby="addition-services-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="addition-services-title"
                            align="center"
                            eyebrow={<Badge>Services</Badge>}
                            title="Types of Home Additions We Build"
                            text={
                                <>
                                    Eight addition types come from our team, a licensed <strong>room addition contractor</strong> in <strong>Maryland</strong>. <strong>Lot shape</strong>, <strong>budget</strong> and <strong>daily routine</strong> point to the right one:
                                </>
                            }
                        />
                    </div>

                    <div className={styles.servicesGrid}>
                        {additionServices.map((service) => (
                            <article className={styles.serviceCard} key={service.title}>
                                <span className={styles.serviceIcon}>
                                    <ServiceIcon name={service.icon} />
                                </span>
                                <div className={styles.serviceBody}>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceText}>{service.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <p className="mt-4 text-center fw-bold">We price both options during one site visit when two types fit.</p>
                </Container>
            </section>

            <section className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="build-up-out-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="build-up-out-title"
                            align="center"
                            title="Should You Build Up or Build Out?"
                            text="Build out when your lot has room, because it usually costs less per square foot. Building up keeps the yard but needs a structural check, a new roof and protection for the rooms below. The trade-offs for a Maryland or DC house compare this way:"
                        />
                    </div>
                    <div className={styles.contentTableWrap}>
                        <table className={styles.contentTable}>
                            <thead>
                                <tr>
                                    <th scope="col">Factor</th>
                                    <th scope="col">Build up (second story)</th>
                                    <th scope="col">Build out (ground floor)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {buildComparison.map((row) => (
                                    <tr key={row.factor}>
                                        <th scope="row">{row.factor}</th>
                                        <td>{row.up}</td>
                                        <td>{row.out}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className={styles.costNote}>
                        On a typical R-60 lot, coverage settles the question. A house already near the 35% limit can only gain space by going up.
                    </p>
                </Container>
            </section>

            <section id="pricing" className={styles.section} aria-labelledby="addition-pricing-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="addition-pricing-title"
                            align="center"
                            eyebrow={<Badge>Cost and Pricing</Badge>}
                            title="How Much Does a Home Addition Cost in Maryland?"
                            text="Most home additions in Maryland cost $200 to $400 per square foot finished. The type and size of the addition set the Maryland total:"
                        />
                    </div>

                    <div className={styles.contentTableWrap}>
                        <table className={styles.contentTable}>
                            <thead>
                                <tr>
                                    <th scope="col">Addition type</th>
                                    <th scope="col">Typical size</th>
                                    <th scope="col">Typical cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                {additionCosts.map((row) => (
                                    <tr key={row.type}>
                                        <th scope="row">{row.type}</th>
                                        <td>{row.size}</td>
                                        <td>{row.cost}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className={styles.costNote}>
                        A new bathroom or kitchen, structural steel, a complex roof tie-in and high-end finishes push a project to the top of the range. A plain room on a level lot sits near the bottom.
                    </p>

                    <div className={styles.driversBlock}>
                        <div className={styles.driversHead}>
                            <h3>How Much Does a 12x12 or 20x20 Addition Cost?</h3>
                            <p>
                                A 12x12 addition (144 sq ft) costs about $29,000 to $58,000. A 20x20 addition (400 sq ft) costs about $80,000 to $160,000. Small additions often cost more per square foot, because foundation, roof tie-in, permits and design are fixed costs.
                            </p>
                        </div>
                        <div className={styles.driversHead}>
                            <h3>How Much Does It Cost to Add 1,000 sq ft?</h3>
                            <p>
                                About $200,000 to $400,000. At that size, most Maryland owners build up. A 1,000 square foot footprint rarely fits setback and coverage limits.
                            </p>
                        </div>
                        <div className={styles.driversHead}>
                            <h3>Are Home Additions Worth It?</h3>
                            <p>Yes, when zoning allows the space you need and building costs less than the price gap to a bigger house nearby. Moving has costs of its own:</p>
                        </div>
                        <div className={styles.contentTableWrap}>
                            <table className={styles.contentTable}>
                                <thead>
                                    <tr>
                                        <th scope="col">Cost</th>
                                        <th scope="col">Adding on</th>
                                        <th scope="col">Moving to a bigger house</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {movingCosts.map((row) => (
                                        <tr key={row.cost}>
                                            <th scope="row">{row.cost}</th>
                                            <td>{row.adding}</td>
                                            <td>{row.moving}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className={styles.costNote}>
                            Additions rarely pay back their full cost at resale. The 2025 Cost vs. Value Report puts a midrange primary suite addition at $170,517, with about 32% recouped. The real return is staying in a home and neighborhood you like, with the room you need.
                        </p>
                    </div>
                </Container>
            </section>

            <Permits variant="home-additions" />

            <section className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="addition-systems-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="addition-systems-title"
                            align="center"
                            title="Structure, Roof and Systems"
                            text="An addition must tie into the house so the seams disappear inside and out. We plan four connections:"
                        />
                    </div>
                    <div className={styles.driversGrid}>
                        {systemConnections.map((item) => (
                            <article className={styles.driverCard} key={item.title}>
                                <h4>{item.title}</h4>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                    <p className="mt-4 text-center fw-bold">These four details keep an addition from looking added on.</p>
                </Container>
            </section>

            <section className={styles.section} aria-labelledby="addition-process-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="addition-process-title"
                            align="center"
                            eyebrow={<Badge>Process</Badge>}
                            title="Our Home Addition Process and Timeline"
                            text="Every addition moves through six stages, and you know the price before construction starts:"
                        />
                    </div>

                    <div className={styles.processTimeline}>
                        {processSteps.map((step, index) => {
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

                    <p className={styles.includedLabel}>
                        Most additions take 4 to 12 months from the first design meeting to the final walkthrough in Maryland or DC:
                    </p>
                    <div className={styles.contentTableWrap}>
                        <table className={styles.contentTable}>
                            <thead>
                                <tr>
                                    <th scope="col">Phase</th>
                                    <th scope="col">Typical duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                {timelineRows.map((row) => (
                                    <tr key={row.phase}>
                                        <th scope="row">{row.phase}</th>
                                        <td>{row.duration}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className={styles.costNote}>
                        Permit review is the stage we control least, so we submit complete drawings to avoid extra comment rounds.
                    </p>
                </Container>
            </section>

            <LicensedInsured variant="home-additions" />

            <RecentProjects
                projects={additionProjects}
                eyebrow="Case Studies & Projects"
                title="Home Addition Projects"
                text="Finished rooms we have added to existing homes appear in our remodeling projects gallery."
                limit={3}
            />

            <section id="reviews" className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="addition-reviews-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading
                            id="addition-reviews-title"
                            align="center"
                            eyebrow={<Badge>Testimonials</Badge>}
                            title="What Homeowners Say"
                        />
                    </div>
                    <p className={styles.relatedWorkNote}>
                        Google reviewers give us 4.9 stars out of 5. Read fuller client stories on our{" "}
                        <Link href="/testimonials">client reviews page</Link> before you pick anyone to build your addition.
                    </p>
                </Container>
            </section>

            <section className={styles.section} aria-labelledby="related-work-title">
                <Container>
                        <div className={styles.relatedWorkHeader}>
                            <h2 id="related-work-title">What Else Changes When You Add On?</h2>
                        <p>An addition often brings five related jobs, and we handle each in the same contract:</p>
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
                        Bundling them puts everything under one permit set and one crew.
                    </p>
                </Container>
            </section>

            <section className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="areas-title">
                <Container>
                    <div className={styles.areasLayout}>
                        <div className={styles.areasHeader}>
                            <Badge>Areas We Serve</Badge>
                            <h2 id="areas-title">
                                Home Additions in Montgomery County, MD
                            </h2>
                            <p>
                                Our <strong>home additions in Montgomery County</strong> cover{" "}
                                <strong>11 communities</strong>, plus <strong>Laurel</strong> and <strong>DC</strong>,
                                from our <strong>North Bethesda</strong> office. DC rowhouse additions face a 35-foot
                                height limit and historic review in many neighborhoods. All 13 areas are listed with
                                their zip codes:
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
                            Each area page covers its <strong>permit office</strong>, <strong>lot sizes</strong> and typical addition types.
                        </p>
                    </div>

                    <div className={styles.areasMap}>
                        <iframe
                            src={SERVICE_AREA_MAP_EMBED_URL}
                            title="DMV General Contracting Group LLC | Home Additions in Montgomery County, Maryland"
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
                                Get a Free Addition Estimate
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            <HomeFaq variant="home" eyebrow="FAQs" title="Frequently Asked Questions" text="" faqs={additionFaqs} />

            <Estimate variant="home-additions" />
        </main>
    );
}
