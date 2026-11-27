"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
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

type AduService = {
    image?: string;
    imageAlt?: string;
    title?: string;
};

type ServiceIconName = "renovation" | "openConcept" | "layout" | "refresh" | "building" | "addition" | "island" | "custom";
type DesignIconName = "layout" | "cabinets" | "countertops" | "lighting";

type ServiceItem = {
    title: string;
    text: string;
    icon: ServiceIconName;
};

const includedItems = [
    {
        number: "01",
        title: "Aging parents",
        text: "A ground-floor unit keeps parents close while they keep their own front door.",
    },
    {
        number: "02",
        title: "Adult children",
        text: "Grown children get a first place of their own without leaving the area.",
    },
    {
        number: "03",
        title: "Rental income",
        text: "A licensed rental unit helps cover the mortgage on the main house.",
    },
    {
        number: "04",
        title: "Office or studio",
        text: "The space works for work, guests or hobbies before it is rented.",
    },
];

const services: ServiceItem[] = [
    {
        icon: "building",
        title: "Detached Backyard Cottage",
        text: "We build freestanding rear-yard cottages with their own foundation, utilities and entrance. They give the most privacy and the best rental appeal on lots deep enough for setbacks.",
    },
    {
        icon: "addition",
        title: "Apartment Over a Garage",
        text: "We add a carriage-house apartment above a new or existing garage. Yard space stays free where the garage can carry a second floor.",
    },
    {
        icon: "openConcept",
        title: "Attached Unit or In-Law Suite",
        text: "We build attached units with a private door, a kitchenette and a bathroom. Sharing a wall and utilities with the house costs less than a detached cottage.",
    },
    {
        icon: "renovation",
        title: "Basement Unit",
        text: "We turn dry basements into legal apartments with egress windows, fire separation and a separate entrance. A basement with enough height is often the cheapest route to an ADU.",
    },
    {
        icon: "layout",
        title: "Garage Conversion",
        text: "We convert existing garages into studios or one-bedroom units. The work covers insulation, a raised floor where needed, new windows and new plumbing.",
    },
];

const drawbacks = [
    {
        title: "Upfront cost",
        text: "A detached unit can rival a small addition plus site work.",
    },
    {
        title: "Yard space",
        text: "A backyard cottage takes up lawn and garden.",
    },
    {
        title: "Property taxes",
        text: "Added living space raises the assessed value.",
    },
    {
        title: "Landlord duties",
        text: "Renting means a license, inspections and tenant responsibilities.",
    },
    {
        title: "Privacy",
        text: "Two households on one lot need careful placement of doors, windows and paths.",
    },
];

const designDecisions = [
    {
        icon: "layout" as DesignIconName,
        title: "Layout",
        text: "Most of our ADUs are studios of 300 to 500 square feet or one-bedroom units of 500 to 800 square feet. Larger lots can take two bedrooms.",
    },
    {
        icon: "cabinets" as DesignIconName,
        title: "Accessibility",
        text: "For parents, we plan step-free entries, a curbless shower, wider doors and a main-level bedroom.",
    },
    {
        icon: "countertops" as DesignIconName,
        title: "Utilities",
        text: "We decide early whether the unit shares the main house's water, sewer and power or gets its own. Heating and cooling usually come from a ductless mini-split.",
    },
    {
        icon: "lighting" as DesignIconName,
        title: "Privacy and Entrance",
        text: "Windows, doors and the path to the unit are placed so both households keep their privacy. The entrance meets the separate-entry rule.",
    },
];

const aduProcessSteps = [
    {
        number: "01",
        title: "Zoning and site check",
        text: "We confirm setbacks, lot coverage, utility routes and the ADU rules for your address.",
    },
    {
        number: "02",
        title: "Design",
        text: "We draw the plan, elevations and site layout, and price the job line by line.",
    },
    {
        number: "03",
        title: "License and permits",
        text: "In Montgomery County we apply for the DHCA ADU license first, then file with DPS, Rockville, Gaithersburg or DC DOB.",
    },
    {
        number: "04",
        title: "Build",
        text: "We pour the foundation or prepare the space, frame, rough in the systems, pass inspections and finish the interior.",
    },
    {
        number: "05",
        title: "Final inspection",
        text: "After sign-off, DHCA inspects for the license, and your 1-year workmanship warranty starts.",
    },
];

// ADU hub areas: 11 Montgomery County communities, Laurel and DC, with zip codes.
const areaLinks: { label: string; zips: string; href?: string; wide?: boolean }[] = [
    { label: "Bethesda", zips: "20814, 20816, 20817", href: "/service/adu/bethesda-md" },
    { label: "North Bethesda", zips: "20852", href: "/service/adu/north-bethesda-md" },
    { label: "Rockville", zips: "20850, 20851, 20852, 20853", href: "/service/adu/rockville-md" },
    { label: "Potomac", zips: "20854", href: "/service/adu/potomac-md" },
    { label: "Chevy Chase", zips: "20815", href: "/service/adu/chevy-chase-md" },
    { label: "Gaithersburg", zips: "20877, 20878, 20879, 20882", href: "/service/adu/gaithersburg-md" },
    { label: "Kensington", zips: "20895", href: "/service/adu/kensington-md" },
    { label: "Silver Spring", zips: "20901, 20902, 20903, 20904, 20905, 20906, 20910", href: "/service/adu/silver-spring-md" },
    { label: "Wheaton", zips: "20902, 20906", href: "/service/adu/wheaton-md" },
    { label: "Garrett Park", zips: "20896", href: "/service/adu/garrett-park-md" },
    { label: "Cabin John", zips: "20818", href: "/service/adu/cabin-john-md" },
    { label: "Laurel", zips: "20707, 20708, 20723, 20724", href: "/service/adu/laurel-md" },
    { label: "DC", zips: "20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20015, 20016, 20017, 20018, 20019, 20020, 20024, 20032, 20036, 20037", href: "/service/adu/washington-dc", wide: true },
];

const SERVICE_AREA_MAP_EMBED_URL =
    "https://www.google.com/maps/d/u/0/embed?mid=18yZmZjXwVotzSHlIUaeEYMgoXUZnUI0&ehbc=2E312F&noprof=1";

// ADU-hub-only image copies (public/images/adu/), each used once on this page. All four come from
// our Northwest DC ADU project. EXIF GPS points to the Google Business Profile pin.
const aduImages = {
    hero: {
        src: "/images/adu/adu-builder-detached-adu-northwest-dc.webp",
        alt: "ADU builder project: two-story detached accessory dwelling unit behind a fenced yard in Northwest DC",
    },
    included: {
        src: "/images/adu/adu-over-garage-alley-northwest-dc.webp",
        alt: "Alley side of a two-story ADU with a garage door in Northwest DC",
    },
    design: {
        src: "/images/adu/adu-interior-skylights-kitchenette-northwest-dc.webp",
        alt: "Inside a Northwest DC ADU: living area with skylights, a kitchenette and a stair railing",
    },
};

const aduProjects: ProjectCardData[] = [
    {
        title: "Northwest DC: ADU Construction",
        location: "Northwest DC",
        text: "We built an accessory dwelling unit on a residential lot in Northwest DC, from DOB permitting through final inspection.",
        href: "/project/nw-dc-adu-construction",
        image: "/images/adu/adu-construction-rear-yard-northwest-dc.webp",
        imageAlt: "Finished ADU with a balcony at the end of a landscaped rear yard in Northwest DC",
    },
];

const googleReviewsUrl =
    "https://www.google.com/maps/place/DMV+General+Contracting+Group+LLC/@39.0493761,-77.1200241,17z/data=!3m1!4b1!4m6!3m5!1s0x158dd0ef2148a11:0xceda33050d2dcdfb!8m2!3d39.049372!4d-77.1174492!16s%2Fg%2F11v3gbzc44?hl=en&entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D";

type RelatedWorkItem = {
    title: string;
    text: ReactNode;
};

const relatedWorkItems: RelatedWorkItem[] = [
    {
        title: "Basement apartment",
        text: "A dry basement with enough height avoids a new structure.",
    },
    {
        title: "Garage conversion",
        text: "An existing garage becomes a studio for far less than new construction.",
    },
    {
        title: "Home addition",
        text: (
            <>
                For space for your own family, our{" "}
                <Link href="/service/home-additions">home additions team</Link> builds rear and second-story additions.
            </>
        ),
    },
    {
        title: "Utility upgrade",
        text: (
            <>
                A new unit may need bigger electrical service or new water and sewer lines from our{" "}
                <Link href="/service/electrical-services">electrical services</Link> and{" "}
                <Link href="/service/plumbing-services">plumbing services</Link>.
            </>
        ),
    },
];

const aduFaqs = [
    {
        question: "Can you have an ADU in Montgomery County, MD?",
        answer: "Yes. Montgomery County allows one attached or detached ADU on lots with a single-family detached home. Since October 5, 2026, the unit can be up to 75% of the size of the main house. You apply to DHCA for an ADU license before the building permit. Short-term rentals are not allowed on the lot.",
    },
    {
        question: "Can you build an ADU in DC?",
        answer: "Yes. DC allows accessory apartments by right in most residential zones, inside the house or in an accessory building such as a garage. Rowhouse lots usually suit a basement or carriage-house unit. Renting the unit requires a certificate of occupancy and a rental business license.",
    },
    {
        question: "Do I need a license to rent out an ADU?",
        answer: "Yes. Montgomery County requires a DHCA ADU license, and a Class 3 license applies to rentals. DC requires a certificate of occupancy and a rental business license. We file the county paperwork with your permit set, so the unit is ready to rent after final inspection.",
    },
    {
        question: "Can my parents live in an ADU on my property?",
        answer: "Yes. Housing family members is one of the most common reasons to build an ADU. Montgomery County still requires the ADU license for the unit itself, so we include it in the permit process. We also design for aging in place, with step-free entries and a curbless shower.",
    },
    {
        question: "Can I build an ADU on a small lot?",
        answer: "Yes, on most lots that meet setbacks. Lot coverage and parking decide what fits. Lots within 1 mile of Metro, Purple Line or MARC need no extra parking space. On tight lots, an attached, basement or garage ADU is usually the answer.",
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
        default:
            return (
                <svg {...props}>
                    <path d="m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
            );
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
        default:
            return (
                <svg {...props}>
                    <path d="M12 3v4M7 7h10l-2 6H9L7 7ZM12 13v4M8 17h8M7 20h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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

export default function Adu(_props: { data?: AduService }) {
    // The hub uses its own image copies; data.image stays for the services listing.
    const heroImage = aduImages.hero.src;
    const heroAlt = aduImages.hero.alt;

    return (
        <main className={`page-wrapper ${styles.page}`}>
            <NavitemActive nav="service" />

            <section className={styles.hero}>
                <Container>
                    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
                        <Link href="/">Home</Link><span aria-hidden="true">/</span>
                        <Link href="/services">Services</Link><span aria-hidden="true">/</span>
                        <span aria-current="page">ADU Builder</span>
                    </nav>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroContent}>
                            <Badge className="nostars">ADU Builder · Maryland</Badge>
                            <h1 className={styles.heroTitle}>Maryland ADU Builder: <span>Zoning and Permits Handled</span></h1>
                            <p className={styles.heroText}><strong>Accessory dwelling units</strong> are allowed by right on single-family lots in <strong>Montgomery County</strong>. DC has allowed them in most residential zones since 2016. As an <strong>ADU builder in Maryland</strong>, DMV General Contracting Group <strong>checks your lot</strong>, <strong>designs the unit</strong>, <strong>files the permits</strong> and <strong>builds it</strong> under one contract. Most new ADUs cost <strong>$150,000 to $300,000</strong>.</p>
                            <div className={styles.heroActions}>
                                <Button href="#estimate" icon={<ArrowIcon />}>Request a Free ADU Feasibility Check</Button>
                                <Button href="tel:+12407301292" variant="secondary">+1 240-730-1292</Button>
                            </div>
                            <div className={styles.trustRow}>
                                <div className={styles.trustItem}><Stars /><span><strong>4.9</strong> on Google</span></div>
                                <div className={styles.trustItem}><CheckIcon className={styles.trustIcon} /><span>MHIC #156178</span></div>
                                <div className={styles.trustItem}><CheckIcon className={styles.trustIcon} /><span>DLCP #410526000209</span></div>
                            </div>
                        </div>
                        <div className={styles.heroMedia}>
                            <div className={styles.heroImageWrap}>
                                <Image src={heroImage} alt={heroAlt} fill priority
                                    sizes="(max-width: 1024px) 100vw, 699px" className={styles.image} />
                                <div className={styles.mediaOverlay} />
                                <div className={styles.heroFeatured}>
                                    <Badge variant="accent" className="nostars">Featured project</Badge>
                                    <p className={styles.heroFeaturedTitle}>Northwest DC: ADU construction</p>
                                    <p className={styles.heroFeaturedMeta}>We built an accessory dwelling unit on a residential lot in Northwest DC, from DOB permitting through final inspection.</p>
                                </div>
                            </div>
                            <aside className={styles.heroReview} aria-label="Google review rating">
                                <div className={styles.heroReviewTop}><strong>4.9</strong><Stars /></div>
                                <p className={styles.heroReviewText}>Homeowners rate our ADU and remodeling work 4.9 out of 5 on Google.</p>
                                <span className={styles.heroReviewMeta}>Based on verified client feedback</span>
                            </aside>
                        </div>
                    </div>
                    <div className={styles.heroGlance}>
                        <div className={styles.glanceItem}><span>Detached new build</span><strong>$150,000–$300,000</strong></div>
                        <div className={styles.glanceItem}><span>Garage or basement conversion</span><strong>$60,000–$150,000</strong></div>
                        <div className={styles.glanceItem}><span>License and permits</span><strong>4–12 weeks</strong></div>
                        <div className={styles.glanceItem}><span>Workmanship warranty</span><strong>1 year</strong></div>
                        <Link href="#pricing" className={styles.glanceLink}>See ADU Pricing<ArrowIcon /></Link>
                    </div>
                </Container>
            </section>

            <section className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="adu-included-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading id="adu-included-title" align="center"
                            eyebrow={<Badge>What Is an ADU</Badge>}
                            title={<>What Is an <span>Accessory Dwelling Unit?</span></>}
                            text="An accessory dwelling unit is a second, self-contained home on a single-family lot, with its own kitchen, bathroom and entrance. It differs from an Affordable Dwelling Unit or an MPDU, which are county housing programs. Homeowners hire us, a licensed general contractor in Maryland, to build ADUs for four reasons:" />
                    </div>
                    <div className={styles.includedGrid}>
                        <div className={styles.includedAside}>
                            <div className={styles.includedFeature}>
                                <Image src={aduImages.included.src}
                                    alt={aduImages.included.alt}
                                    fill sizes="(max-width: 900px) 100vw, 38vw" className={styles.featureImage} />
                            </div>
                            <div className={styles.remodelOptions}>
                                <article className={styles.remodelCard}>
                                    <strong className={styles.remodelTitle}>ADU</strong><p>A second home on your lot, privately owned by you.</p>
                                </article>
                                <article className={`${styles.remodelCard} ${styles.remodelCardDark}`}>
                                    <strong className={styles.remodelTitle}>MPDU</strong><p>A county affordable-housing program with deed restrictions.</p>
                                </article>
                            </div>
                        </div>
                        <div className={styles.includedCards}>
                            <p className={styles.includedLabel}>Homeowners hire us for four reasons:</p>
                            {includedItems.map((item) => (
                                <article className={styles.includeCard} key={item.number}>
                                    <span className={styles.number}>{item.number}</span>
                                    <strong className={styles.cardTitle}>{item.title}</strong>
                                    <p className={styles.cardText}>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                    <p className="mt-4 text-center fw-bold">Uses change over time, so we design units that can shift from family use to rental.</p>
                </Container>
            </section>

            <section className={styles.section} aria-labelledby="adu-rules-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading id="adu-rules-title" align="center"
                            eyebrow={<Badge>Rules</Badge>}
                            title={<>Can You Build an ADU <span>in Maryland?</span></>}
                            text="Yes, on most lots with a single-family detached home. Maryland's HB 1466 required every county to allow ADUs up to 75% of the main house by October 1, 2026. Montgomery County adopted that standard through ZTA 26-06, effective October 5, 2026. The current rules in Montgomery County and DC compare like this:" />
                    </div>
                    <div className={styles.contentTableWrap}>
                        <table className={styles.contentTable}>
                            <thead>
                                <tr>
                                    <th scope="col">Rule</th>
                                    <th scope="col">Montgomery County</th>
                                    <th scope="col">DC</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Where allowed</th>
                                    <td>One attached or detached ADU per lot with a single-family detached home</td>
                                    <td>By right in most residential (R) zones, inside the house or in an accessory building</td>
                                </tr>
                                <tr>
                                    <th scope="row">Size limit</th>
                                    <td>Up to 75% of the main house</td>
                                    <td>Must stay smaller than the main home; limits vary by zone</td>
                                </tr>
                                <tr>
                                    <th scope="row">Licensing</th>
                                    <td>DHCA ADU license, applied for before the building permit</td>
                                    <td>Certificate of occupancy and a rental business license to rent</td>
                                </tr>
                                <tr>
                                    <th scope="row">Parking</th>
                                    <td>None within 1 mile of Metrorail, Purple Line or MARC; elsewhere 1 on-site space, with a waiver option</td>
                                    <td>Depends on the zone; we confirm it for your lot</td>
                                </tr>
                                <tr>
                                    <th scope="row">Short-term rental</th>
                                    <td>Not allowed on a lot that has an ADU</td>
                                    <td>Separate DC short-term rental rules apply</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-center fw-bold">Rockville and Gaithersburg write their own zoning, so we check those cities' ADU rules separately. Every design starts with the rules for your exact address, per the Montgomery County DPS ADU guidelines.</p>
                </Container>
            </section>

            <section className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="adu-types-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading id="adu-types-title" align="center"
                            eyebrow={<Badge>Services</Badge>}
                            title={<>Types of ADUs <span>We Build</span></>}
                            text={<>We build five types of <strong>accessory dwelling unit in Maryland</strong> and DC. Your <strong>lot</strong>, <strong>budget</strong> and <strong>planned use</strong> decide which one fits:</>} />
                        <Button href="/contact-us" variant="secondary">Book a Free Feasibility Visit</Button>
                    </div>
                    <div className={styles.servicesGrid}>
                        {services.map((service) => (
                            <article className={styles.serviceCard} key={service.title}>
                                <span className={styles.serviceIcon}><ServiceIcon name={service.icon} /></span>
                                <div className={styles.serviceBody}>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceText}>{service.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <p className="mt-4 text-center fw-bold">Our feasibility visit compares two or three of these options for your lot side by side.</p>
                </Container>
            </section>

            <section id="pricing" className={styles.section} aria-labelledby="adu-pricing-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading id="adu-pricing-title" align="center"
                            eyebrow={<Badge>Cost and Pricing</Badge>}
                            title={<>How Much Does It Cost to Build an ADU <span>in Maryland?</span></>}
                            text={<>Most <strong>new ADUs in Maryland</strong> cost <strong>$150,000 to $300,000</strong>. Converting a garage or basement costs <strong>$60,000 to $150,000</strong>. The type of unit moves the price far more than finishes do in Maryland:</>} />
                    </div>
                    <div className={styles.budgetBand}>
                        <span>Typical new Maryland ADU</span><strong>$150,000–$300,000</strong>
                    </div>
                    <div className={styles.contentTableWrap}>
                        <table className={styles.contentTable}>
                            <thead>
                                <tr>
                                    <th scope="col">ADU type</th>
                                    <th scope="col">Typical cost</th>
                                    <th scope="col">Cost per sq ft</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Garage or basement conversion</th>
                                    <td>$60,000–$150,000</td>
                                    <td>Lower, because the shell already exists</td>
                                </tr>
                                <tr>
                                    <th scope="row">Attached ADU or in-law suite</th>
                                    <td>$120,000–$250,000</td>
                                    <td>About $200–$350</td>
                                </tr>
                                <tr>
                                    <th scope="row">Detached new build</th>
                                    <td>$150,000–$300,000+</td>
                                    <td>About $200–$400</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className={styles.costNote}>Site work is the cost homeowners miss most. Water, sewer and electric runs to a backyard unit, plus a new foundation, can add tens of thousands of dollars. Each appears as its own estimate line.</p>
                    <div className={styles.budgetCheck}>
                        <div className={styles.budgetCheckHead}>
                            <h3>How Much Does an 800 sq ft ADU Cost?</h3>
                            <p>About $160,000 to $320,000 for a new detached 800 square foot unit at $200 to $400 per square foot. The same space inside a basement or garage costs considerably less.</p>
                        </div>
                    </div>
                    <div className={styles.driversBlock}>
                        <div className={styles.driversHead}>
                            <h3>Is It Cheaper to Add On or Build an ADU?</h3>
                            <p>Yes, an addition is usually cheaper per square foot. It shares walls, a roof and systems with the house. A detached ADU costs more but creates a separate home you can rent:</p>
                        </div>
                        <div className={styles.contentTableWrap}>
                            <table className={styles.contentTable}>
                                <thead>
                                    <tr>
                                        <th scope="col">Question</th>
                                        <th scope="col">Home addition</th>
                                        <th scope="col">Detached ADU</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Cost per sq ft</th>
                                        <td>Usually lower</td>
                                        <td>Usually higher</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Separate entrance and kitchen</th>
                                        <td>Optional</td>
                                        <td>Required</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Can be rented as a unit</th>
                                        <td>Only if built as an attached ADU</td>
                                        <td>Yes, with a rental license</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Best for</th>
                                        <td>More room for your own household</td>
                                        <td>Independent living or rental income</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className={styles.costNote}>For more space for your own family, our <Link href="/service/home-additions">home additions in Maryland</Link> may fit better.</p>
                    </div>
                </Container>
            </section>

            <InHomeConsultation
                id="adu-estimate-cta"
                headingId="adu-estimate-cta-title"
                title="Request a free ADU feasibility check, or call +1 240-730-1292 any day."
                text="As an ADU builder in Maryland and DC, we review zoning, design the unit and handle every license and permit."
                ctaLabel="Request a free ADU feasibility check"
            />

            <section className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="adu-design-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading id="adu-design-title" align="center"
                            eyebrow={<Badge>Design</Badge>}
                            title={<>Designing an ADU: <span>Size, Layout and Utilities</span></>}
                            text="Zoning sets the ADU's maximum size, now 75% of the main house in Montgomery County. Within that cap, four design decisions shape the unit:" />
                    </div>
                    <div className={styles.designGrid}>
                        <figure className={styles.designMedia}>
                            <div className={styles.designImageWrap}>
                                <Image src={aduImages.design.src} alt={aduImages.design.alt}
                                    fill sizes="(max-width: 1024px) 100vw, 46vw" className={styles.designImage} />
                            </div>
                            <figcaption className={styles.designCaption}>
                                <strong>Inside a detached ADU in Northwest DC</strong>
                                <p>Our team draws the floor plans and elevations in-house, so permit drawings match what we build.</p>
                            </figcaption>
                        </figure>
                        <div className={styles.designCards}>
                            {designDecisions.map((item) => (
                                <article className={styles.designCard} key={item.title}>
                                    <span className={styles.designIcon}><DesignIcon name={item.icon} /></span>
                                    <h3>{item.title}</h3><p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <section id="adu-process" className={styles.section} aria-labelledby="adu-process-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading id="adu-process-title" align="center"
                            eyebrow={<Badge>Process</Badge>}
                            title={<>Our ADU Process, <span>From Zoning Check to Move-In</span></>}
                            text="An ADU needs more approvals than most remodels, so we follow five fixed steps:" />
                    </div>
                    <div className={styles.processTimeline}>
                        {aduProcessSteps.map((step, index) => {
                            const isRight = index % 2 === 1;
                            const marker = <span className={styles.processMarker} aria-hidden="true">{step.number}</span>;
                            const card = (
                                <article className={styles.processCard}>
                                    <h3 className={styles.processCardTitle}>{step.title}</h3>
                                    <p className={styles.processCardText}>{step.text}</p>
                                </article>
                            );
                            return (
                                <div key={step.number}
                                    className={`${styles.processRow} ${isRight ? styles.processRowRight : ""}`}>
                                    {isRight ? <>{marker}{card}</> : <>{card}{marker}</>}
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </section>

            <section className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="adu-tradeoffs-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading id="adu-tradeoffs-title" align="center"
                            eyebrow={<Badge>Trade-offs</Badge>}
                            title={<>What Are the <span>Drawbacks of an ADU?</span></>}
                            text="The biggest drawback is the upfront cost for the space you get. Five trade-offs are worth weighing:" />
                    </div>
                    <div className={styles.driversGrid}>
                        {drawbacks.map((item, index) => (
                            <article className={styles.driverCard} key={item.title}>
                                <span className={styles.driverNumber}>{String(index + 1).padStart(2, "0")}</span>
                                <strong className={styles.driverTitle}>{item.title}</strong><p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                    <div className={styles.tipCard}>
                        <span className={styles.tipLabel}>PRIVACY</span>
                        <p>Orienting the unit away from the main house's living areas solves most privacy concerns.</p>
                    </div>
                    <div className={styles.budgetCheck}>
                        <div className={styles.budgetCheckHead}>
                            <h3>Does an ADU Increase Home Value?</h3>
                            <p>Yes, in most cases, because it adds finished living space and rental income. The size of the gain depends on the appraiser, the neighborhood and whether the unit is permitted and licensed. That is why every ADU we build carries full permits. Rent from a licensed unit is a second, ongoing return.</p>
                        </div>
                    </div>
                </Container>
            </section>

            <section className={styles.section} aria-labelledby="adu-timeline-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading id="adu-timeline-title" align="center"
                            eyebrow={<Badge>Timeline</Badge>}
                            title={<>How Long Does It Take to <span>Build an ADU?</span></>}
                            text="These are typical durations from first visit to move-in in Maryland and DC:" />
                    </div>
                    <div className={styles.contentTableWrap}>
                        <table className={styles.contentTable}>
                            <thead>
                                <tr>
                                    <th scope="col">Phase</th>
                                    <th scope="col">Typical duration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Zoning check and design</th>
                                    <td>4–8 weeks</td>
                                </tr>
                                <tr>
                                    <th scope="row">License and permits</th>
                                    <td>4–12 weeks, depending on jurisdiction and utilities</td>
                                </tr>
                                <tr>
                                    <th scope="row">Construction: conversion</th>
                                    <td>8–14 weeks</td>
                                </tr>
                                <tr>
                                    <th scope="row">Construction: detached new build</th>
                                    <td>4–6 months</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.tipCard}>
                        <span className={styles.tipLabel}>TIP</span>
                        <p>Utility hookups and permit review usually set the pace more than construction does.</p>
                    </div>
                </Container>
            </section>

            <Permits variant="adu" />

            <LicensedInsured variant="adu" />

            <RecentProjects
                projects={aduProjects}
                eyebrow="Case Studies & Projects"
                title="Our ADU Projects"
                text={<>This ADU from our portfolio shows the full permit-to-move-in path:<br />Our remodeling projects page shows the rest of our residential portfolio.</>}
                limit={3}
            />

            <section id="reviews" className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="adu-reviews-title">
                <Container>
                    <div className={styles.sectionHeader}>
                        <SectionHeading id="adu-reviews-title" align="center"
                            eyebrow={<Badge>Testimonials</Badge>}
                            title="What Homeowners Say" />
                    </div>
                    <div className={styles.reviewPanel}>
                        <div className={styles.reviewScore}>
                            <strong>4.9</strong><span>Google review average</span>
                            <div className={styles.reviewStars} aria-label="4.9 out of 5 stars">
                                {Array.from({ length: 5 }).map((_, index) => <StarIcon key={index} />)}
                            </div>
                        </div>
                        <div className={styles.reviewCopy}>
                            <p>Our Google average stands at 4.9 stars. ADU and remodeling clients describe the experience on our <Link href="/testimonials">client reviews page</Link>.</p>
                            <div className={styles.reviewActions}>
                                <Button href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" variant="primary">
                                    Read Every Review on Google
                                </Button>
                                <Button href={"/testimonials"} className="fw-bold" rel="noopener noreferrer" variant="white">
                                    Client Stories<ArrowIcon />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <section className={styles.section} aria-labelledby="related-work-title">
                <Container>
                    <div className={styles.relatedWorkHeader}>
                        <Badge>Related Work</Badge>
                        <h2 id="related-work-title">Other Ways to Add Living Space</h2>
                        <p>An ADU is one of four ways to gain room, and one of the others may suit you better:</p>
                    </div>
                    <div className={styles.relatedWorkGrid}>
                        {relatedWorkItems.map((item, index) => (
                            <article className={styles.relatedWorkCard} key={item.title}>
                                <span className={styles.relatedWorkNumber}>{String(index + 1).padStart(2, "0")}</span>
                                <h3>{item.title}</h3><p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                    <p className={styles.relatedWorkNote}>We price an ADU and its alternatives side by side so you can compare cost and use.</p>
                </Container>
            </section>

            <section className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="areas-title">
                <Container>
                    <div className={styles.areasLayout}>
                        <div className={styles.areasHeader}>
                            <Badge>Areas We Serve</Badge>
                            <h2 id="areas-title">
                                ADU Builder in Montgomery County, MD
                            </h2>
                            <p>
                                Our <strong>ADU building in Montgomery County</strong> covers{" "}
                                <strong>11 communities</strong>, plus <strong>Laurel</strong> and <strong>DC</strong>,
                                from our <strong>North Bethesda</strong> office. Each local page explains lot sizes and
                                unit rules for that area. All 13 areas are listed with their zip codes:
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
                            Large lots in <strong>Potomac</strong> and <strong>Gaithersburg</strong> suit detached cottages. <strong>DC</strong> rowhouses usually suit basement or carriage-house units.
                        </p>
                    </div>

                    <div className={styles.areasMap}>
                        <iframe
                            src={SERVICE_AREA_MAP_EMBED_URL}
                            title="DMV General Contracting Group LLC | ADU Builder in Montgomery County, Maryland"
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
                                Request a Free ADU Feasibility Check
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            <HomeFaq variant="adu" faqs={aduFaqs} />

            <Estimate variant="adu" />
        </main>
    );
}
