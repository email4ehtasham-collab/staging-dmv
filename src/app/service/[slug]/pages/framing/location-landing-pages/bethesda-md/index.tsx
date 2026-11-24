import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../framing-city-style.scss";

const FramingBethesdaMD = () => {
    const faqData = [
        {
            question: "Does framing work require a permit in Bethesda, MD?",
            answer: "Yes. Any structural framing work in Bethesda requires a building permit from Montgomery County DPS at 2425 Reedie Drive, Wheaton. This includes load-bearing wall removal, home addition framing, second-story addition framing, basement finishing with new walls, garage conversions, and dormer framing. Cosmetic work \u2014 moving a non-load-bearing partition \u2014 may not require a permit, but this is confirmed at the consultation. DMV General Contracting Group manages all MoCo DPS permit filings and inspections in-house."
        },
        {
            question: "How do you know if a wall is load-bearing in a Bethesda colonial?",
            answer: "Load-bearing walls in Bethesda's colonials run perpendicular to the floor joists, are positioned over or adjacent to the foundation, and carry the weight of the floor or roof above. In most Bethesda colonials, the wall between the kitchen and dining room and the wall at the center of the home running front-to-back are load-bearing. DMV General Contracting Group assesses load-bearing conditions before any wall removal is scoped or priced \u2014 we do not make assumptions about wall conditions in a home we haven't assessed in person."
        },
        {
            question: "What is temporary shoring and why is it needed for load-bearing wall removal?",
            answer: "Temporary shoring is a system of posts and beams installed on both sides of a load-bearing wall before any part of the wall is cut or removed. It transfers the structural load from the wall to the floor temporarily while the permanent beam is installed. Without temporary shoring, removing a load-bearing wall \u2014 even partially \u2014 can cause the structure above to shift or settle. DMV General Contracting Group installs temporary shoring as a standard step before every load-bearing wall removal, regardless of span or scope."
        },
        {
            question: "Can DMV General Contracting Group handle both the framing and the finish work on a Bethesda remodel?",
            answer: "Yes \u2014 this is the standard workflow. DMV General Contracting Group performs framing as part of the full remodeling project scope: framing, rough electrical and plumbing, HVAC, insulation, drywall, and finish work are all managed under one contractor and one project schedule. You do not need to hire a separate GC after framing is complete \u2014 the same team that frames the addition or opens the wall finishes the space."
        },
        {
            question: "How much does framing cost in Bethesda, MD?",
            answer: "A load-bearing wall removal with beam installation runs $3,500\u2013$8,000+. Basement finishing framing runs $6,000\u2013$18,000+. A home addition framing scope runs $15,000\u2013$35,000+. A second-story addition framing package runs $25,000\u2013$65,000+. All prices include structural engineering coordination and MoCo DPS permit management. Free, itemized estimate provided after reviewing the project scope in person."
        }
    ];

    const framingServices = [
        {
            title: "🏗️ Home Addition Framing",
            desc: "Structural framing for single-story and two-story home additions in Bethesda \u2014 floor joists, exterior wall framing, roof framing, and connection to the existing structure at the addition-to-home interface. Foundation coordinated with framing plan. MoCo DPS building permit required. Structural engineering in-house for addition framing packages above a certain square footage threshold."
        },
        {
            title: "🏠 Second-Story Addition Framing",
            desc: "Full second-story addition framing for Bethesda's single-story ranches and cape cods \u2014 floor system over the existing first floor, exterior wall framing, roof framing, and staircase opening framing. Existing first-floor structure assessed for load capacity before second-story framing begins. MoCo DPS structural permit required. Engineering coordinated in-house."
        },
        {
            title: "🔨 Load-Bearing Wall Removal & Beam Installation",
            desc: "The most common framing scope in Bethesda's 1950s\u20131980s colonials \u2014 removing a load-bearing wall between the kitchen and dining room or living room to create an open-plan first floor. Load-bearing condition identified before any work begins. Correct beam size and connection engineered. Temporary shoring installed during removal. New beam pocket framed and posts installed to carry loads to the foundation. MoCo DPS structural permit required."
        },
        {
            title: "🏚️ Basement Finishing Framing",
            desc: "Stud wall framing for Bethesda basement finishing projects \u2014 perimeter wall framing, interior partition walls, dropped soffit framing around mechanical obstructions, and egress window rough openings. Moisture conditions assessed before framing begins \u2014 pressure-treated lumber specified at slab level throughout. MoCo DPS building permit required for basement finishing scopes."
        },
        {
            title: "🚗 Garage Conversion Framing",
            desc: "Framing for attached garage conversions in Bethesda \u2014 insulated exterior wall system to replace the garage door opening, interior partition walls to define the new living space, and any structural modifications required to integrate the converted space with the adjoining home. MoCo DPS permit required. Thermal envelope and insulation coordinated with framing scope."
        },
        {
            title: "🏔️ Dormer Framing",
            desc: "Shed dormer and gable dormer framing for Bethesda cape cods and older colonials with finished or unfinished upper levels \u2014 increasing headroom, adding windows, and creating usable living space under the existing roofline. Existing roof structure assessed before dormer framing is designed. Structural engineering for dormer framing packages included in-house. MoCo DPS permit required."
        },
        {
            title: "🪟 Window & Door Rough Opening Framing",
            desc: "New window and door rough openings framed in Bethesda home remodels \u2014 correct header size engineered for the span and load above, king studs and trimmer studs properly installed, and rough opening dimensioned to the window or door unit specified. Load-bearing conditions assessed above every new opening before framing begins. MoCo DPS permit where structural modifications are involved."
        },
        {
            title: "🔧 Structural Repairs & Reframing",
            desc: "Structural framing repairs for Bethesda homes with damaged, deteriorated, or undersized framing members \u2014 rotted sill plates, damaged joists, undersized headers, and poorly executed previous remodeling work corrected to current MoCo building code. Assessment report provided before repair scope is agreed. All repair framing inspected by MoCo DPS where permit is required."
        }
    ];

    const framingScopes = [
        {
            project: "1950s\u20131980s colonial \u2014 open-plan conversion",
            scope: "Load-bearing wall removal between kitchen and adjoining room; LVL or steel beam installation; temporary shoring during removal; new posts to foundation",
            notes: "The most common framing request in Bethesda's established colonial stock. Load-bearing condition assessed before scope is agreed. Correct beam sizing engineered in-house. MoCo DPS structural permit required \u2014 managed in-house."
        },
        {
            project: "Single-story addition",
            scope: "Foundation slab or crawl space framing; exterior wall framing; roof framing; connection to existing home at shared wall interface",
            notes: "Addition size and placement confirmed against MoCo setback requirements before framing begins. Structural engineering in-house for additions over a code-defined threshold. MoCo DPS building permit required."
        },
        {
            project: "Second-story addition over existing first floor",
            scope: "First-floor load capacity assessed; floor system installed over existing structure; exterior wall framing; roof framing; staircase opening framed",
            notes: "Existing first-floor structure \u2014 headers, posts, beam spans \u2014 assessed for second-story load before framing package is designed. Engineering included in-house. MoCo DPS structural permit required."
        },
        {
            project: "Basement finishing",
            scope: "Perimeter stud wall framing; interior partitions; soffit framing around HVAC and plumbing; egress window rough openings",
            notes: "Moisture assessment before framing begins \u2014 pressure-treated bottom plates throughout per MoCo code. Egress window rough opening sized per IRC requirements for habitable basement space. MoCo DPS permit required."
        },
        {
            project: "Cape cod dormer",
            scope: "Existing roof opened; dormer framing installed; roof re-framed around dormer; windows rough-framed",
            notes: "Common in Bethesda's cape cod housing stock where upper-level headroom is limited. Structural assessment of existing roof framing before dormer design is finalized. Engineering in-house. MoCo DPS structural permit."
        },
        {
            project: "Garage conversion",
            scope: "Garage door opening closed with insulated stud wall; new windows rough-framed; interior partition walls added; floor system installed over concrete slab",
            notes: "Thermal continuity between garage conversion and adjoining home confirmed during framing \u2014 cold joints at the existing connection point addressed in framing plan. MoCo DPS permit required for garage conversion scope."
        }
    ];

    const framCharsTrust = [
        { icon: "🏗️", title: "All Framing In-House", desc: "No subcontracted framing crews" },
        { icon: "📐", title: "Engineering In-House", desc: "Beam sizing, structural drawings" },
        { icon: "📋", title: "MoCo DPS Permits", desc: "2425 Reedie Drive \u2014 managed in-house" },
        { icon: "⭐", title: "4.9 Rating", desc: "97+ verified reviews" }
    ];

    const whyCards = [
        {
            title: "Licensed General Contractor \u2014 Framing In-House",
            desc: "DMV General Contracting Group is a licensed Maryland general contractor (MHIC #156178) \u2014 framing is performed in-house by our own crew, not subcontracted to a separate framing company. The GC overseeing your project is the same team doing the framing work \u2014 no communication gaps between a GC and a framing sub on your Bethesda job site."
        },
        {
            title: "Structural Engineering Coordinated In-House",
            desc: "Beam sizing, connection details, and structural drawings for load-bearing wall removal, home additions, and second-story additions all coordinated in-house \u2014 not outsourced to a third-party engineer the homeowner has to track down separately. Structural engineering is built into the framing project workflow from the design stage."
        },
        {
            title: "MoCo DPS Permit Management",
            desc: "All Bethesda structural framing permits filed with Montgomery County DPS at 2425 Reedie Drive, Wheaton. All permit applications, structural drawing submissions, inspector scheduling, and county correspondence managed in-house. Framing inspection scheduled and passed before any insulation or drywall is installed. You do not contact MoCo DPS at any point."
        },
        {
            title: "Full-Scope Remodeling Integration",
            desc: "Framing is rarely the only scope in a Bethesda remodeling project. DMV General Contracting Group follows framing with rough electrical, rough plumbing, HVAC, insulation, drywall, and finish work \u2014 all under one contractor. No handoff between a framing company and a separate GC after the walls go up."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Free Consultation & Structural Assessment",
            desc: "We visit your Bethesda property, assess the existing structural conditions \u2014 load-bearing wall locations, floor system capacity, roof framing configuration, foundation type \u2014 and discuss your remodeling goals. Load-bearing conditions identified at this stage before any scope is agreed. Free, no obligation."
        },
        {
            num: 2,
            title: "Framing Design & Engineering",
            desc: "Framing plan developed and beam sizing engineered for load-bearing removals, additions, and second-story scopes. Structural drawings prepared for MoCo DPS permit submission. Floor plan confirmed against MoCo setback and zoning requirements where the scope involves an addition."
        },
        {
            num: 3,
            title: "MoCo DPS Permit Filed at 2425 Reedie Drive",
            desc: "All required structural building permits prepared and filed at MoCo DPS at 2425 Reedie Drive, Wheaton. Structural drawings submitted with the application. All MoCo DPS correspondence managed in-house. Permit approval confirmed before any framing work begins on site."
        },
        {
            num: 4,
            title: "Temporary Shoring & Site Preparation",
            desc: "For load-bearing wall removal scopes \u2014 temporary shoring installed to support the structure above before any framing is cut or removed. For addition scopes \u2014 existing structure prepared for connection to the new addition framing. Utilities identified and protected before framing begins."
        },
        {
            num: 5,
            title: "Structural Framing",
            desc: "New framing installed per the engineered drawings and approved permit plans \u2014 beam installed and posts placed to transfer loads; addition wall and roof framing erected; basement partition walls and soffits framed; rough openings framed for windows and doors. All framing square, plumb, and to MoCo code."
        },
        {
            num: 6,
            title: "MoCo DPS Framing Inspection & Close-In",
            desc: "MoCo DPS framing inspection scheduled and managed at 2425 Reedie Drive. Inspection passed before rough-in mechanical work and insulation begin. Framing corrections, if any, addressed immediately. Close-in authorization confirmed before drywall is ordered or installed."
        }
    ];

    const costRows = [
        {
            project: "Load-bearing wall removal + beam",
            range: "$3,500 \u2013 $8,000+",
            notes: "Includes structural assessment, beam engineering, temporary shoring, beam and post installation, MoCo DPS permit"
        },
        {
            project: "Basement finishing framing",
            range: "$6,000 \u2013 $18,000+",
            notes: "Perimeter walls, partitions, soffit framing, egress rough opening; PT bottom plates throughout"
        },
        {
            project: "Single-story home addition framing",
            range: "$15,000 \u2013 $35,000+",
            notes: "Floor, wall, and roof framing; connection to existing structure; MoCo DPS permit and engineering"
        },
        {
            project: "Second-story addition framing",
            range: "$25,000 \u2013 $65,000+",
            notes: "Full second-story framing package; floor system; structural assessment of existing first floor; engineering in-house"
        },
        {
            project: "Cape cod dormer framing",
            range: "$8,000 \u2013 $20,000+",
            notes: "Shed or gable dormer; existing roof opened and re-framed; windows rough-framed; engineering in-house"
        },
        {
            project: "Garage conversion framing",
            range: "$5,000 \u2013 $14,000+",
            notes: "Garage door opening closed; insulated wall system; interior partitions; floor framing over slab"
        },
        {
            project: "Window or door rough opening",
            range: "$800 \u2013 $2,500+ per opening",
            notes: "Header sized and installed; king and trimmer studs; rough opening to unit dimension; structural permit where required"
        }
    ];

    const otherServices = [
        { href: "/service/drywall/bethesda-md", label: "Drywall Services in Bethesda, MD" },
        { href: "/service/home-additions/bethesda-md", label: "Home Additions in Bethesda, MD" },
        { href: "/service/basement-remodeling/bethesda-md", label: "Basement Remodeling in Bethesda, MD" },
        { href: "/service/design-build/bethesda-md", label: "Design-Build Contractor in Bethesda, MD" },
        { href: "/service/electrical-services/bethesda-md", label: "Electrical Services in Bethesda, MD" },
        { href: "/service/kitchen-remodeling/bethesda-md", label: "Kitchen Remodeling in Bethesda, MD" }
    ];

    return (
        <div className="city-service-detail-page framing-bethesda-md">
            <div className="container">
                {/* SCHEMA JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "LocalBusiness",
                                    "@id": "https://www.dmv-gc.com/#business",
                                    "name": "DMV General Contracting Group LLC",
                                    "url": "https://www.dmv-gc.com/",
                                    "telephone": "+1-240-730-1292",
                                    "email": "support@dmv-gc.com",
                                    "description": "Professional structural framing contractor serving Bethesda, MD. Home additions, second-story additions, room conversions, basement finishing, garage conversions, and whole-home remodels. MoCo DPS permits managed in-house. MHIC #156178.",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11810 Grand Park Ave. Suite 500",
                                        "addressLocality": "North Bethesda",
                                        "addressRegion": "MD",
                                        "postalCode": "20852",
                                        "addressCountry": "US"
                                    },
                                    "areaServed": { "@type": "City", "name": "Bethesda" },
                                    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "97" }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Framing Services in Bethesda, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Bethesda" },
                                    "serviceType": "Structural Framing, Home Addition Framing, Second-Story Addition, Room Conversion, Basement Framing, Garage Conversion, Wall Framing"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Framing", "item": "https://www.dmv-gc.com/service/framing" },
                                        { "@type": "ListItem", "position": 4, "name": "Bethesda, MD", "item": "https://www.dmv-gc.com/service/framing/bethesda-md" }
                                    ]
                                },
                                {
                                    "@type": "FAQPage",
                                    "mainEntity": faqData.map(faq => ({
                                        "@type": "Question",
                                        "name": faq.question,
                                        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                                    }))
                                }
                            ]
                        })
                    }}
                />

                {/* BREADCRUMB */}
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/framing">Framing</Link><span>›</span>
                    Bethesda, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">DMV GENERAL CONTRACTING GROUP · BETHESDA, MD</div>
                    <h1>Framing Services in Bethesda, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">🏗️ Structural Framing Specialists</span>
                        <span className="badge">📋 MoCo DPS — 2425 Reedie Drive</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                        <span className="badge">Licensed &amp; Insured</span>
                        <span className="badge">Free Consultation</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional structural framing for Bethesda homeowners — home additions, second-story additions, first-floor open-plan conversions, load-bearing wall removal, basement finishing, garage conversions, and dormer framing for Bethesda&apos;s colonials, split-levels, and contemporaries. MoCo DPS permits managed in-house. Structural engineering coordinated in-house. One licensed contractor from permit to close-in.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Bethesda Framing Expertise:</strong> Bethesda&apos;s active remodeling market — first-floor open-plan conversions in Woodmont and Edgemoor colonials, second-story additions in Battery Park and Bradley Hills, basement finishing across the community, and full home additions throughout — generates consistent demand for structural framing done correctly. DMV General Contracting Group performs all framing in-house as a licensed general contractor — not subcontracted to a separate crew. Structural engineering, MoCo DPS permits, temporary shoring, beam installation, and final framing inspection are all coordinated under one project team.
                </div>

                {/* SERVICES */}
                <h2>Complete Framing Services for Bethesda Homes</h2>
                <div className="svc-grid">
                    {framingServices.map(service => (
                        <div className="svc-card" key={service.title}><h3>{service.title}</h3><p>{service.desc}</p></div>
                    ))}
                </div>

                {/* COMMON SCOPE TABLE */}
                <h2>Common Framing Scopes in Bethesda Homes</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>Project Type</th>
                                    <th>Typical Scope</th>
                                    <th>Bethesda-Specific Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {framingScopes.map(row => (
                                    <tr key={row.project}>
                                        <td><strong>{row.project}</strong></td>
                                        <td>{row.scope}</td>
                                        <td>{row.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* LOAD-BEARING BANNER */}
                <h2>Load-Bearing Wall Removal — Bethesda&apos;s Most Requested Framing Scope</h2>
                <div className="banner">
                    <strong>Bethesda&apos;s 1950s–1980s colonials were built with compartmentalized floor plans</strong> — separate kitchen, dining room, and living room separated by load-bearing walls that carry the weight of the floor or roof above. Opening these into a contemporary open floor plan is one of the most popular and most structurally consequential remodeling projects in Bethesda. Done correctly, it transforms how the home lives. Done incorrectly — without identifying load-bearing conditions, engineering the correct beam, or installing proper temporary shoring during removal — it creates structural risk that may not be visible until years later. DMV General Contracting Group identifies load-bearing conditions before any wall removal is planned, engineers the correct LVL or steel beam for every span, installs proper temporary shoring to protect the structure during removal, and manages the MoCo DPS structural permit and inspection throughout. No guessing, no skipped steps.
                </div>

                {/* WHY CHOOSE */}
                <h2>Why Choose DMV General Contracting Group for Framing in Bethesda?</h2>
                <div className="trust-bar">
                    {framCharsTrust.map(item => (
                        <div className="trust-item" key={item.title}>
                            <div className="icon">{item.icon}</div>
                            <strong>{item.title}</strong>
                            <span>{item.desc}</span>
                        </div>
                    ))}
                </div>
                <div className="svc-grid">
                    {whyCards.map(card => (
                        <div className="svc-card" key={card.title}><h3>{card.title}</h3><p>{card.desc}</p></div>
                    ))}
                </div>

                {/* PROCESS */}
                <h2>Our Framing Process in Bethesda</h2>
                <div className="steps">
                    {steps.map(step => (
                        <div className="step" key={step.num}>
                            <div className="step-num">{step.num}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* COSTS */}
                <h2>Framing Project Costs — Bethesda, MD</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>Project Type</th>
                                    <th>Starting Price Range</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {costRows.map(row => (
                                    <tr key={row.project}>
                                        <td>{row.project}</td>
                                        <td>{row.range}</td>
                                        <td>{row.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <p style={{ fontSize: "13px", color: "#666", marginTop: "-20px" }}>* All prices confirmed at free on-site consultation. Structural engineering and MoCo DPS permit management included in framing project pricing.</p>

                {/* SERVICE AREA */}
                <h2>Framing Service Area</h2>
                <p>DMV General Contracting Group provides structural framing services throughout <strong>Bethesda, MD</strong>, including Woodmont, Edgemoor, Battery Park, Wyngate, Bradley Hills, East Bethesda, and surrounding communities including North Bethesda, Chevy Chase, Kensington, Potomac, and Washington DC.</p>

                <div className="banner">
                    <strong>Bethesda Structural Note:</strong> Many of Bethesda&apos;s 1950s–1980s homes have undersized headers over existing windows and doors — installed to the building codes of their era, not current IRC standards. When a remodeling project opens walls or removes partitions, these conditions become visible and must be corrected. DMV General Contracting Group identifies and reports all observed structural deficiencies during the framing scope and addresses them as part of the overall project — not left for the homeowner to discover after drywall is installed.
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Framing Services in Bethesda, MD</h2>
                <Accordion defaultActiveKey="0" flush>
                    {faqData.map((faq, index) => (
                        <AccordionItem eventKey={index.toString()} key={index}>
                            <AccordionHeader as="h3">{faq.question}</AccordionHeader>
                            <AccordionBody>{faq.answer}</AccordionBody>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* INTERNAL LINKS */}
                <div className="internal-links">
                    <h2>Explore Our Other Services in Bethesda, MD</h2>
                    <ul>
                        {otherServices.map(service => (
                            <li key={service.href}><Link href={service.href}>{service.label}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* CTA */}
                <div className="cta-banner">
                    <h2>Need Framing Services in Bethesda, MD?</h2>
                    <p>Talk with DMV General Contracting Group about structural framing for your Bethesda home — load-bearing wall removal, home additions, second-story additions, basement finishing, or garage conversions. Structural engineering and MoCo DPS permits managed in-house. Free consultation, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                    <a href="mailto:support@dmv-gc.com" className="cta-btn outline">✉️ Email Us</a>
                </div>
            </div>
        </div>
    );
};

export default FramingBethesdaMD;