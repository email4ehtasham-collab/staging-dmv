import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionBody from 'react-bootstrap/AccordionBody';
import "@/app/service/[slug]/pages/bathroom-remodeling/location-landing-pages/city-service-style.scss";
import "./style.scss";

const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "LocalBusiness",
            "@id": "https://www.dmv-gc.com/#business",
            "name": "DMV-GC Group",
            "alternateName": "DMV General Contracting Group LLC",
            "image": "https://www.dmv-gc.com/logo.png",
            "url": "https://www.dmv-gc.com",
            "telephone": "+12407301292",
            "email": "support@dmv-gc.com",
            "foundingDate": "2018",
            "description": "Licensed design-build general contractor serving Rockville, MD and the greater Montgomery County area. Specializing in bathroom remodeling, master bath renovations, tub-to-shower conversions, basement bathroom additions, and aging-in-place remodels.",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "11810 Grand Park Ave, Suite 500",
                "addressLocality": "North Bethesda",
                "addressRegion": "MD",
                "postalCode": "20852",
                "addressCountry": "US"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.0458,
                "longitude": -77.1139
            },
            "areaServed": [
                { "@type": "City", "name": "Rockville", "sameAs": "https://en.wikipedia.org/wiki/Rockville,_Maryland" },
                { "@type": "City", "name": "North Bethesda" },
                { "@type": "City", "name": "Potomac" },
                { "@type": "City", "name": "Gaithersburg" },
                { "@type": "City", "name": "Bethesda" },
                { "@type": "City", "name": "Kensington" },
                { "@type": "AdministrativeArea", "name": "Montgomery County, MD" }
            ],
            "hasCredential": [
                {
                    "@type": "EducationalOccupationalCredential",
                    "name": "MHIC License",
                    "credentialCategory": "Maryland Home Improvement Contractor License — issued by the Maryland Home Improvement Commission"
                },
                {
                    "@type": "EducationalOccupationalCredential",
                    "name": "DLCP License",
                    "credentialCategory": "Washington DC Department of Licensing and Consumer Protection — Home Improvement Contractor"
                }
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "97",
                "bestRating": "5",
                "worstRating": "1"
            },
            "priceRange": "$$$",
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "08:00",
                "closes": "20:00"
            }
        },
        {
            "@type": "Service",
            "@id": "https://www.dmv-gc.com/service/bathroom-remodeling/rockville-md#service",
            "serviceType": "Bathroom Remodeling",
            "name": "Bathroom Remodeling in Rockville, MD",
            "provider": { "@id": "https://www.dmv-gc.com/#business" },
            "areaServed": {
                "@type": "City",
                "name": "Rockville",
                "sameAs": "https://en.wikipedia.org/wiki/Rockville,_Maryland"
            },
            "description": "Full-service bathroom remodeling in Rockville, MD. Master and primary bath renovations, hall and guest bath remodels, powder rooms, tub-to-shower conversions, walk-in showers, basement bathroom additions, and accessible aging-in-place baths — design through final finishes — by an MHIC-licensed design-build contractor.",
            "offers": {
                "@type": "Offer",
                "priceCurrency": "USD",
                "priceSpecification": {
                    "@type": "PriceSpecification",
                    "minPrice": "8000",
                    "maxPrice": "120000",
                    "priceCurrency": "USD"
                }
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Bathroom Remodeling Services Rockville MD",
                "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Master / Primary Bath Renovation" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hall & Guest Bathroom Remodel" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tub-to-Shower Conversion" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Walk-In & Curbless Shower Installation" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Basement Bathroom Addition" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Accessible / Aging-in-Place Bathroom" } }
                ]
            }
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                { "@type": "ListItem", "position": 3, "name": "Bathroom Remodeling", "item": "https://www.dmv-gc.com/service/bathroom-remodeling" },
                { "@type": "ListItem", "position": 4, "name": "Rockville, MD", "item": "https://www.dmv-gc.com/service/bathroom-remodeling/rockville-md" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How much does a bathroom remodel cost in Rockville, MD?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Bathroom remodeling in Rockville, MD typically costs between $8,000 and $120,000 depending on bathroom type, scope, and finishes. A powder room or half-bath refresh starts around $8,000–$18,000. A hall or guest bath remodel runs $18,000–$35,000. A tub-to-shower conversion runs $12,000–$25,000. A primary (master) bath renovation costs $35,000–$70,000, and a luxury primary bath can reach $70,000–$120,000+. Adding a new basement bathroom runs $20,000–$45,000. DMV-GC Group provides free in-home consultations with detailed estimates for any Rockville home."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is DMV-GC Group licensed to do bathroom remodeling in Rockville, MD?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. DMV-GC Group holds a Maryland Home Improvement Contractor (MHIC) license issued by the Maryland Home Improvement Commission — the license required to legally perform residential renovation work in Rockville and throughout Maryland. We are fully bonded and insured, and provide a 1-year workmanship warranty on every bathroom remodeling project completed in Montgomery County."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do I need a permit to remodel a bathroom in Rockville / Montgomery County?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "In most cases, yes. Any bathroom remodel that involves moving plumbing, adding or relocating electrical, or structural changes requires permits. In Rockville the jurisdiction depends on location: homes inside the City of Rockville permit through the City's own permitting office, while the many Rockville-address homes in unincorporated areas — such as North Bethesda and Derwood — permit through Montgomery County DPS. Plumbing permits go through WSSC Water in both cases. DMV-GC Group identifies the correct jurisdiction and handles every permit and inspection for you, plus any HOA approvals."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can DMV-GC Group convert my tub to a walk-in shower?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Tub-to-shower conversions are one of the most popular bathroom projects we complete in Rockville — from older tubs in Twinbrook's 1950s homes and the historic West End, to oversized jetted or garden tubs in 1990s–2000s King Farm and Fallsgrove primary baths. We remove the existing tub, rebuild the wet area with proper waterproofing, and install a custom tile or low-maintenance walk-in shower — including curbless and accessible designs for aging-in-place. Most conversions are completed in 2–3 weeks."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does a bathroom remodel take in Rockville, MD?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most bathroom renovations in Rockville take 2–5 weeks from construction start to completion. A powder room refresh can be done in 1–2 weeks. A tub-to-shower conversion takes 2–3 weeks. A full primary bath renovation takes 4–6 weeks, and a new basement bathroom typically takes 3–5 weeks. Permit processing through the City of Rockville or Montgomery County DPS, plus WSSC, usually adds 2–4 weeks before construction begins, and HOA approval may add time in planned communities. DMV-GC Group factors realistic timelines into every project plan."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can DMV-GC Group add a bathroom in my basement or primary suite?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Adding a bathroom is a popular upgrade for Rockville homes — most often a full or half bath in a finished basement, or reconfiguring a primary suite for more space. We design and build new basement bathrooms, primary-suite ensuites, and main-level powder rooms — assessing how your home is built to plan the most cost-effective plumbing rough-in, then handling drainage, ventilation, waterproofing, HOA approvals, and the full City of Rockville or DPS permit process from start to finish."
                    }
                }
            ]
        }
    ]
};

export default function BathroomRockvilleMD() {
    const faqData = [
        {
            question: "How much does a bathroom remodel cost in Rockville, MD?",
            answer: "Bathroom remodeling in Rockville typically costs $8,000–$120,000+ depending on bathroom type, scope, and finishes. A powder room or half-bath starts around $8,000–$18,000. A hall or guest bath remodel runs $18,000–$35,000. A tub-to-shower conversion runs $12,000–$25,000. A primary (master) bath renovation costs $35,000–$70,000, and a luxury primary bath can reach $70,000–$120,000+. A new basement bathroom runs $20,000–$45,000. DMV-GC Group provides free in-home consultations with detailed estimates specific to your home."
        },
        {
            question: "Is DMV-GC Group licensed to do bathroom remodeling in Rockville, MD?",
            answer: "Yes. DMV-GC Group holds a Maryland Home Improvement Contractor (MHIC) license issued by the Maryland Home Improvement Commission — the license required to legally perform residential renovation work in Rockville and throughout Maryland. We also hold a DC DLCP license for cross-border work. We are fully bonded and insured, and provide a 1-year workmanship warranty on every bathroom remodeling project. You can verify our MHIC number before hiring."
        },
        {
            question: "Do I need a permit to remodel a bathroom in Rockville / Montgomery County?",
            answer: "In most cases, yes. Any bathroom remodel that involves moving plumbing, adding or relocating electrical, or making structural changes requires permits. In Rockville the jurisdiction depends on location: homes inside the City of Rockville permit through the City's own permitting office, while the many Rockville-address homes in unincorporated areas (such as North Bethesda and Derwood) permit through Montgomery County DPS — with plumbing permits through WSSC Water in both cases. DMV-GC Group identifies the correct jurisdiction and handles every permit, inspection, and HOA approval for you."
        },
        {
            question: "Can DMV-GC Group convert my tub to a walk-in shower?",
            answer: "Yes. Tub-to-shower conversions are one of the most common bathroom projects we complete in Rockville — from the small cast-iron tubs in Twinbrook's 1950s baths and the historic West End, to oversized jetted or garden tubs in 1990s–2000s King Farm and Fallsgrove primary suites. We remove the existing tub, rebuild the wet area with a proper bonded waterproofing system, and install a custom tile or low-maintenance walk-in shower — including frameless glass, niches, benches, and curbless accessible designs. Most conversions are completed in 2–3 weeks."
        },
        {
            question: "Can DMV-GC Group add a bathroom in my basement or primary suite?",
            answer: "Yes. Adding a bathroom is a popular upgrade for Rockville homes — most often a full or half bath in a finished basement, or reconfiguring a primary suite for more space. We design and build new basement bathrooms, primary-suite ensuites, and main-level powder rooms — assessing your home's construction to plan the most cost-effective plumbing rough-in, then handling drainage, ventilation, waterproofing, HOA approvals, and the full City of Rockville or DPS permit process."
        },
        {
            question: "How long does a bathroom remodel take in Rockville, MD?",
            answer: "Most bathroom renovations in Rockville take 2–5 weeks from construction start to completion. A powder room refresh can be done in 1–2 weeks. A tub-to-shower conversion takes 2–3 weeks. A full primary bath renovation takes 4–6 weeks, and a new basement bathroom typically takes 3–5 weeks. Permit processing through the City of Rockville or Montgomery County DPS, plus WSSC, usually adds 2–4 weeks before construction begins, and HOA approval may add time in planned communities. DMV-GC Group factors realistic timelines into every project plan from the start."
        }
    ];

    return (
        <div className="city-service-detail-page bathroom-rockville-md">
            <div className="container">
                {/* BREADCRUMB */}
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>&rsaquo;</span>
                    <Link href="/services">Services</Link><span>&rsaquo;</span>
                    <Link href="/service/bathroom-remodeling">Bathroom Remodeling</Link><span>&rsaquo;</span>
                    Rockville, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Rockville, MD</div>
                    <h1>Bathroom Remodeling Contractor in Rockville, MD</h1>
                    <div className="hero-meta">
                        <span className="badge red">⭐ 4.9 Rating &middot; 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed &amp; Insured</span>
                        <span className="badge">✓ 1-Year Warranty</span>
                        <span className="badge">✓ Free In-Home Consultation</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                {/* MHIC BANNER */}
                <div className="dlcp-banner">
                    <div className="icon">🏛️</div>
                    <div>
                        <h3>MHIC-Licensed Home Improvement Contractor for Rockville, MD</h3>
                        <p>DMV-GC Group holds a Maryland Home Improvement Contractor (MHIC) license issued by the Maryland Home Improvement Commission &mdash; the license required to legally perform residential bathroom renovation work in Rockville and throughout Montgomery County. We are fully bonded, insured, and back every project with a 1-year workmanship warranty. Always verify an MHIC number before hiring any bathroom contractor in Maryland.</p>
                    </div>
                </div>

                {/* INTRO */}
                <div className="intro-box">
                    Looking for a <strong>bathroom remodeling contractor in Rockville, MD</strong>? As Montgomery County&apos;s seat, Rockville spans an unusually wide range of homes &mdash; the historic Victorians of the West End and Lincoln Park, the vast 1950s post-war neighborhoods of Twinbrook and East Rockville, mid-century New Mark Commons, and the newer New Urbanist communities of King Farm and Fallsgrove, plus condos and townhomes around Town Center and North Bethesda. Bathrooms in these homes range from tiny original baths to dated builder-grade and garden-tub layouts. DMV-GC Group&apos;s MHIC-licensed design-build team renovates them all &mdash; navigating City of Rockville and Montgomery County DPS permitting, waterproofing and ventilation done right, and the full bathroom remodel from design through final inspection, all under one contract.
                </div>

                {/* TRUST BAR */}
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏛️</div>
                        <strong>MHIC Licensed</strong>
                        <span>Properly licensed for Maryland renovation work</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>City &amp; County Permits</strong>
                        <span>City of Rockville, DPS &amp; WSSC &mdash; fully managed</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9-Star Rated</strong>
                        <span>97+ verified homeowner reviews</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🛡️</div>
                        <strong>Fully Insured</strong>
                        <span>Bonded, insured, 1-year warranty</span>
                    </div>
                </div>

                {/* SERVICES */}
                <h2>Bathroom Remodeling Services We Offer in Rockville, MD</h2>
                <p>
                    Rockville&apos;s housing stock is one of the most varied in the county &mdash; historic West End and Lincoln Park Victorians, the sprawling 1950s post-war Cape Cods and ramblers of Twinbrook and East Rockville, 1960s&ndash;70s mid-century homes like New Mark Commons, and the 1990s&ndash;2000s New Urbanist neighborhoods of King Farm and Fallsgrove, plus Town Center and North Bethesda condos. Bathrooms range from cramped original baths to dated builder-grade and garden-tub layouts. DMV-GC Group&apos;s MHIC-licensed team specializes in renovating, modernizing, and adding bathrooms across every one of these.
                </p>

                <div className="service-grid">
                    <div className="service-item">Master / Primary Bathroom Renovation</div>
                    <div className="service-item">Hall &amp; Guest Bathroom Remodel</div>
                    <div className="service-item">Powder Room / Half-Bath Remodel</div>
                    <div className="service-item">Tub-to-Shower Conversion</div>
                    <div className="service-item">Walk-In &amp; Curbless Shower Installation</div>
                    <div className="service-item">Basement Bathroom Addition</div>
                    <div className="service-item">Accessible / Aging-in-Place Bathroom</div>
                    <div className="service-item">Custom Tile &amp; Shower Waterproofing</div>
                    <div className="service-item">Vanity, Countertop &amp; Fixture Replacement</div>
                    <div className="service-item">Garden-Tub &amp; Corner-Tub Removal</div>
                    <div className="service-item">Bathroom Layout Redesign &amp; Space Planning</div>
                    <div className="service-item">Plumbing Relocation &amp; Fixture Upgrades</div>
                    <div className="service-item">City of Rockville / DPS &amp; WSSC Permit Processing</div>
                </div>

                {/* AUTHOR BOX */}
                <div className="author-box">
                    <div className="author-avatar">🛁</div>
                    <div className="author-info">
                        <h4>About DMV-GC Group &mdash; Rockville&apos;s MHIC-Licensed Bathroom Remodeling Contractor</h4>
                        <p>DMV-GC Group holds a Maryland Home Improvement Contractor (MHIC) license issued by the Maryland Home Improvement Commission, and a DC DLCP license for cross-border work. Our team has renovated bathrooms across Rockville&apos;s many communities &mdash; from the historic West End and Twinbrook to King Farm and North Bethesda &mdash; and we understand Rockville&apos;s permitting structure: building and electrical permits through either the City of Rockville (for homes inside the city limits) or Montgomery County DPS (for unincorporated Rockville-address homes like North Bethesda and Derwood), and plumbing permits through WSSC Water. We carry full general liability insurance and back every bathroom remodel with a 1-year workmanship warranty.</p>
                        <div className="author-creds">
                            <span className="cred">MHIC Licensed</span>
                            <span className="cred">DLCP Licensed</span>
                            <span className="cred">Fully Insured</span>
                            <span className="cred">Bonded</span>
                            <span className="cred">4.9★ Rated</span>
                            <span className="cred">1-Year Warranty</span>
                        </div>
                    </div>
                </div>

                {/* HOUSING STOCK */}
                <h2>Bathroom Remodeling for Rockville&apos;s Diverse Housing Stock</h2>
                <p>
                    Rockville is one of Montgomery County&apos;s oldest and most varied communities &mdash; incorporated in 1860, with everything from the late-1800s Victorians of the West End historic district and the historic Lincoln Park neighborhood, to the vast 1950s post-war Cape Cods and ramblers of Twinbrook and East Rockville, to mid-century New Mark Commons, to the 1990s&ndash;2000s New Urbanist streets of King Farm and Fallsgrove, plus Town Center and North Bethesda condos. Knowing how each era and community was built &mdash; and what its HOA or historic district allows &mdash; is essential to a successful bathroom renovation, and it&apos;s where DMV-GC Group&apos;s experience makes a real difference.
                </p>

                <div className="rowhouse-box">
                    <h3>🛁 What Makes Rockville Bathrooms Different</h3>
                    <ul>
                        <li><strong>1950s post-war baths</strong> &mdash; Twinbrook and East Rockville homes often keep small original hall baths with cast-iron tubs and aging plumbing that benefit from a full rebuild</li>
                        <li><strong>Historic West End &amp; Lincoln Park homes</strong> &mdash; older Victorians and early-1900s houses near the core need careful, period-sensitive work on older plumbing and framing</li>
                        <li><strong>Garden &amp; corner tubs</strong> &mdash; King Farm, Fallsgrove, and other 1990s&ndash;2000s primary baths often have oversized jetted tubs owners convert into spacious walk-in showers</li>
                        <li><strong>Dated builder-grade finishes</strong> &mdash; many newer homes still have original oak vanities, cultured-marble tops, and builder tile ready for a modern update</li>
                        <li><strong>Townhome &amp; condo bathrooms</strong> &mdash; King Farm, Fallsgrove, Town Center, and North Bethesda have extensive townhome/condo stock with HOA design rules we coordinate around</li>
                        <li><strong>Finished-basement potential</strong> &mdash; adding a basement bathroom is a popular, high-value upgrade in Rockville&apos;s larger colonials and split-levels</li>
                    </ul>
                </div>

                {/* TUB TO SHOWER */}
                <h2>Tub-to-Shower Conversions, Walk-In Showers &amp; Bathroom Updates</h2>
                <p>
                    For Rockville homeowners whose bathrooms feel dated or cramped, three projects deliver the biggest impact: converting an unused tub into a spacious walk-in shower, fully modernizing an original or builder-grade bath, or adding a bathroom to a finished basement.
                </p>
                <p>
                    <strong>Tub-to-shower conversions</strong> span the whole city &mdash; from the small cast-iron tubs in Twinbrook&apos;s 1950s baths to the oversized garden and jetted tubs in King Farm and Fallsgrove primary suites. We remove the existing tub, rebuild the wet area with a proper bonded waterproofing system, and install a custom tile or low-maintenance walk-in shower &mdash; often with frameless glass, niches, and bench seating &mdash; reclaiming the footprint for a true spa shower.
                </p>
                <p>
                    <strong>Adding or reconfiguring a bathroom</strong> &mdash; most often a full or half bath in a finished basement, or reworking a primary suite &mdash; requires careful planning of plumbing rough-in, drainage, and ventilation. DMV-GC Group&apos;s team assesses how your home is built before designing the most cost-effective approach, then manages the full City of Rockville or Montgomery County DPS permit process and any HOA approvals.
                </p>

                <div className="note">
                    ♿ <strong>Aging-in-Place Note:</strong> Many Rockville homeowners plan to stay in place long-term. We design accessible bathrooms with curbless (zero-threshold) showers, comfort-height fixtures, slip-resistant tile, and reinforced blocking for grab bars &mdash; built to look like a high-end remodel, not a medical retrofit. We can also incorporate Universal Design features into any standard renovation on request.
                </div>

                {/* WHY CHOOSE */}
                <h2>Why Rockville Homeowners Choose DMV-GC Group</h2>
                <p>
                    As the county seat, Rockville is one of Montgomery County&apos;s most active and stable renovation markets &mdash; a large, central, transit-rich city where homeowners invest in their houses rather than move. Bathroom renovations are consistently among the highest-return projects: whether it&apos;s a Twinbrook rambler getting its dated 1950s bath rebuilt, a King Farm townhome shedding its builder-grade primary bath, or a historic West End home carefully updated, an updated bathroom is one of the most impactful upgrades for both daily comfort and resale value.
                </p>
                <p>
                    Rockville&apos;s permitting adds a wrinkle that catches many homeowners and out-of-area contractors off guard: homes inside the city limits permit through the <strong>City of Rockville</strong>, which runs its own permitting office, while the many Rockville-address homes in unincorporated areas &mdash; such as North Bethesda and Derwood &mdash; permit through <strong>Montgomery County DPS</strong>, with plumbing through <strong>WSSC Water</strong> either way. DMV-GC Group holds a proper MHIC license and works across both systems (plus HOA or historic-district review where it applies), so nothing about your remodel is left to chance or unpermitted.
                </p>

                <div className="highlight">
                    <p>🏡 <strong>Rockville Market Insight:</strong> Rockville spans a wide range &mdash; from condos and townhomes in the $300,000s&ndash;$500,000s around Town Center and North Bethesda, to single-family homes in Twinbrook and East Rockville in the $550,000s&ndash;$750,000s, to King Farm, Fallsgrove, and historic West End homes well above $900,000. Across every tier, a professionally renovated bathroom &mdash; converting a dated tub into a modern walk-in shower or modernizing an original or builder-grade bath &mdash; is among the highest-ROI improvements a homeowner can make, reflecting how heavily Maryland buyers weigh bathroom condition.</p>
                </div>

                {/* NEIGHBORHOODS */}
                <h2>Serving Rockville Neighborhoods for Bathroom Remodeling</h2>
                <p>
                    DMV-GC Group completes <strong>bathroom remodeling projects throughout Rockville, MD</strong>. Our team understands the housing styles, plumbing systems, and renovation patterns specific to each area:
                </p>
                <div className="neighborhood-grid">
                    <div className="neighborhood-card">
                        <h3>Twinbrook</h3>
                        <p>Rockville&apos;s largest post-war community of 1950s Cape Cods and ramblers. Rebuilding small original baths, tub-to-shower conversions, and adding bathrooms are the most common projects here.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>West End (Historic District) &amp; Lincoln Park</h3>
                        <p>The historic core of Rockville &mdash; Victorians and early-1900s homes. Period-sensitive renovations that update older plumbing and framing while preserving character.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>East Rockville &amp; College Gardens</h3>
                        <p>Established mid-century and post-war single-family neighborhoods near Town Center. Full hall-bath redesigns and primary-bath renovations are frequent.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>King Farm &amp; Fallsgrove</h3>
                        <p>1990s&ndash;2000s New Urbanist neighborhoods of single-family homes and townhomes. Garden-tub-to-shower conversions, designer hall baths, and HOA-coordinated remodels are common.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>New Mark Commons, Woodley Gardens &amp; Rockshire</h3>
                        <p>Mid-century and established neighborhoods with distinctive housing. Modernizing dated baths and adding basement bathrooms are popular value-add projects.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Town Center &amp; North Bethesda</h3>
                        <p>Condos and apartments around Rockville Town Square, Pike &amp; Rose, and White Flint. Condo-friendly remodels coordinated with building management and HOA rules are typical.</p>
                    </div>
                </div>

                {/* COST */}
                <h2>Bathroom Remodel Cost in Rockville, MD</h2>
                <p>
                    Bathroom remodeling costs in Rockville reflect the city&apos;s broad housing mix &mdash; rebuilding small post-war baths, converting tubs to walk-in showers, and modernizing dated or builder-grade baths are among the most common projects, while primary-bath renovations and basement bathroom additions represent larger investments. Here is a realistic cost breakdown for <strong>bathroom remodeling in Rockville, MD</strong>:
                </p>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>Remodel Type</th>
                                    <th>Typical Cost Range</th>
                                    <th>What&apos;s Included</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Powder Room / Half-Bath</td>
                                    <td>$8,000 &ndash; $18,000</td>
                                    <td>New vanity, toilet, flooring, lighting, fixtures, paint, ventilation</td>
                                </tr>
                                <tr>
                                    <td>Hall / Guest Bath Remodel</td>
                                    <td>$18,000 &ndash; $35,000</td>
                                    <td>New tub or shower, tile, vanity, toilet, flooring, fixtures, exhaust fan</td>
                                </tr>
                                <tr>
                                    <td>Tub-to-Shower Conversion</td>
                                    <td>$12,000 &ndash; $25,000</td>
                                    <td>Tub removal, walk-in shower, full waterproofing, tile, glass, fixtures</td>
                                </tr>
                                <tr>
                                    <td>Primary (Master) Bath Renovation</td>
                                    <td>$35,000 &ndash; $70,000</td>
                                    <td>Custom shower, double vanity, soaking tub, tile, lighting, layout work</td>
                                </tr>
                                <tr>
                                    <td>Luxury Primary Bath</td>
                                    <td>$70,000 &ndash; $120,000+</td>
                                    <td>Spa shower, freestanding tub, premium stone/tile, heated floors, custom cabinetry</td>
                                </tr>
                                <tr>
                                    <td>Basement / Added Bathroom</td>
                                    <td>$20,000 &ndash; $45,000</td>
                                    <td>New plumbing rough-in, drainage, fixtures, waterproofing, permits, full build-out</td>
                                </tr>
                                <tr>
                                    <td>Accessible / Aging-in-Place Bath</td>
                                    <td>$25,000 &ndash; $50,000</td>
                                    <td>Curbless shower, grab-bar blocking, comfort-height fixtures, slip-resistant tile</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Rockville Permit Note:</strong> Permit timelines &mdash; and the right jurisdiction &mdash; matter in project planning. Homes inside the City of Rockville permit through the City&apos;s own permitting office; Rockville-address homes in unincorporated areas (such as North Bethesda and Derwood) permit through Montgomery County DPS &mdash; with plumbing through WSSC Water in both cases. Standard bathroom remodel permits typically take 2&ndash;4 weeks to process before construction begins, and HOA or historic-district review may add time in communities like King Farm, Fallsgrove, and the West End. DMV-GC Group identifies the correct jurisdiction, pulls every permit your project requires, and factors realistic timelines into every Rockville project schedule.
                </div>

                {/* MID PAGE CTA */}
                <div className="cta-banner">
                    <h2>Get a Free Bathroom Remodeling Estimate in Rockville, MD</h2>
                    <p>We&apos;ll visit your Rockville home, assess your bathroom&apos;s potential, and provide a detailed itemized estimate &mdash; at no cost and no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free In-Home Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                {/* PROCESS */}
                <h2>Our Bathroom Remodeling Process in Rockville, MD</h2>
                <p>
                    Our design-build process is adapted to Rockville&apos;s varied housing &mdash; from historic West End Victorians to Twinbrook ramblers to King Farm townhomes &mdash; and to the City of Rockville and Montgomery County permit and inspection requirements.
                </p>
                <div className="steps">
                    {[
                        {num: 1, title: "Free In-Home Consultation & Site Assessment", desc: "We visit your Rockville home, assess your existing bathroom, discuss your goals and budget, and &mdash; for added bathrooms or layout changes &mdash; review how your home is built (slab, crawlspace, or basement) to determine what's feasible for plumbing and drainage. No cost, no obligation."},
                        {num: 2, title: "Plumbing, Ventilation & Waterproofing Plan", desc: "We evaluate your existing supply and drain lines, exhaust ventilation, and substrate &mdash; and in older West End and Twinbrook homes, the condition of original plumbing &mdash; then plan the rebuild around a proper waterproofing system so the bathroom lasts decades, not years."},
                        {num: 3, title: "Custom Design, Layout & Material Selection", desc: "Our in-house designers develop detailed layouts and 3D renderings &mdash; whether that's maximizing a compact hall bath, designing a spa-style primary suite, or adding a new bathroom. We guide you through tile, vanity, fixture, glass, and lighting selections."},
                        {num: 4, title: "Permits &mdash; City of Rockville or DPS, Plus HOA", desc: "We confirm whether your home permits through the City of Rockville or Montgomery County DPS, file all required building and electrical permits, handle plumbing permits through WSSC Water, and manage any HOA approvals &mdash; handling all correspondence and inspection scheduling throughout the project."},
                        {num: 5, title: "Construction &mdash; Demo Through Final Finishes", desc: "Our licensed in-house crews handle all demolition, plumbing, electrical, waterproofing, tile, cabinetry, glass, flooring, and final finishes &mdash; coordinated by a dedicated project manager who keeps your project on schedule and your home protected."},
                        {num: 6, title: "Final Inspection, Walkthrough & 1-Year Warranty", desc: "We manage all required county inspections, conduct a thorough walkthrough with you, address every punch-list item, and activate your 1-year workmanship warranty before closing the project."}
                    ].map(step => (
                        <div className="step" key={step.num}>
                            <div className="step-num">{step.num}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* REVIEWS */}
                <h2>What Rockville Homeowners Say About DMV-GC Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;Our King Farm townhome still had the original oak vanities and a giant jetted tub nobody ever used. DMV-GC Group converted the tub into a huge frameless-glass walk-in shower and modernized everything. They even handled the HOA approval for us.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">King Farm, Rockville</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;Our 1950s Twinbrook rambler still had the original tiny bathroom with a cast-iron tub and pink tile. They rebuilt it completely with a walk-in shower and it feels like a brand-new house. They handled the county permit and inspections start to finish.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Twinbrook, Rockville</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;We checked the MHIC number before hiring &mdash; DMV-GC Group is properly licensed and insured, which several handymen we talked to were not. In our older West End home the waterproofing and the work on the original plumbing were both done the right way.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">West End, Rockville</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;When they opened the wall they found rotted framing behind the old garden tub from years of slow leaks. They showed us, explained it, and fixed it properly as part of the project &mdash; no surprise add-on fee later. Honest, professional work from start to finish.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Fallsgrove, Rockville</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews</strong> across Google, Houzz, and Angi. DMV-GC Group is an MHIC-licensed, trusted bathroom remodeling contractor serving homes throughout Rockville and Montgomery County, MD.</p>
                </div>

                {/* SERVICE AREAS */}
                <h2>Serving Rockville and Surrounding Areas for Bathroom Remodeling</h2>
                <div className="areas-grid">
                    <span className="area-pill">Rockville, MD</span>
                    <span className="area-pill">Twinbrook</span>
                    <span className="area-pill">West End</span>
                    <span className="area-pill">King Farm</span>
                    <span className="area-pill">Fallsgrove</span>
                    <span className="area-pill">East Rockville</span>
                    <span className="area-pill">North Bethesda, MD</span>
                    <span className="area-pill">Potomac, MD</span>
                    <span className="area-pill">Derwood, MD</span>
                    <span className="area-pill">Kensington, MD</span>
                </div>

                <div className="nearby-box">
                    <h3>Also serving North Bethesda, MD &mdash; adjacent to Rockville</h3>
                    <p>DMV-GC Group completes bathroom renovations throughout North Bethesda, MD, just south of Rockville near Pike &amp; Rose and White Flint. Many North Bethesda homes carry a &quot;Rockville&quot; mailing address but sit in unincorporated Montgomery County &mdash; so they permit through Montgomery County DPS rather than the City of Rockville. Knowing which jurisdiction applies is exactly the kind of detail we handle for you. Our team holds the proper MHIC license and brings the same design-build process and 1-year warranty to every project. <Link href="/service/bathroom-remodeling/north-bethesda-md">View our North Bethesda, MD bathroom remodeling page &rarr;</Link></p>
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions &mdash; Bathroom Remodeling in Rockville, MD</h2>
                <Accordion defaultActiveKey="0" flush>
                    {faqData.map((faq, index) => (
                        <AccordionItem eventKey={index.toString()} key={index}>
                            <AccordionHeader>{faq.question}</AccordionHeader>
                            <AccordionBody>{faq.answer}</AccordionBody>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* INTERNAL LINKS */}
                <div className="internal-links">
                    <h2>Explore Our Other Remodeling Services in Rockville, MD</h2>
                    <p>DMV-GC Group offers a complete range of home renovation services for Rockville homes and condos:</p>
                    <ul>
                        <li><Link href="/service/kitchen-remodeling/rockville-md">Kitchen Remodeling in Rockville, MD</Link></li>
                        <li><Link href="/service/basement-remodeling">Basement Finishing &amp; Remodeling in Rockville, MD</Link></li>
                        <li><Link href="/service/home-additions">Home Additions in Rockville, MD</Link></li>
                        <li><Link href="/service/design-build">Design-Build Contractor in Rockville, MD</Link></li>
                        <li><Link href="/service/electrical-services">Electrical Services in Rockville, MD</Link></li>
                        <li><Link href="/service/drywall">Drywall &amp; Plaster Repair in Rockville, MD</Link></li>
                    </ul>
                </div>

                {/* FINAL CTA */}
                <div className="cta-banner">
                    <h2>Ready to Remodel Your Rockville Bathroom?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation online. MHIC-licensed and available 7 days a week throughout Rockville and Montgomery County.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Bathroom Estimate in Rockville &rarr;</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>

                {/* SCHEMA JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
                />
            </div>
        </div>
    );
}
