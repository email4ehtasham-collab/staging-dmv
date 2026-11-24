import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../framing-city-style.scss";

const FramingNorthBethesdaMD = () => {
    const faqData = [
        {
            question: "Does DMV-GC provide framing services in North Bethesda?",
            answer: "Yes. DMV-GC provides residential framing for renovations, additions, basements, layout changes and related construction projects in North Bethesda, MD."
        },
        {
            question: "Can framing be included with a North Bethesda home addition?",
            answer: "Yes. Framing can be coordinated with foundation, roofing, electrical, plumbing, HVAC and finishing work when the addition is part of a larger construction project."
        },
        {
            question: "Can you frame a basement renovation in North Bethesda?",
            answer: "Yes. Basement framing can include new partitions, room layouts and framing needed for a complete lower-level renovation."
        },
        {
            question: "Can framing be coordinated with other trades?",
            answer: "Yes. DMV-GC states that its services include in-house structural, electrical, plumbing and HVAC capabilities, allowing related work to be coordinated within larger projects."
        },
        {
            question: "Is DMV-GC licensed for construction work in North Bethesda?",
            answer: "DMV General Contracting Group lists Maryland MHIC license #156178 and provides a 1-year workmanship warranty. DMV-GC is headquartered in North Bethesda."
        }
    ];

    return (
        <div className="city-service-detail-page framing-north-bethesda-md">
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
                                    "description": "Residential general contractor providing framing services as part of its in-house trade services in North Bethesda, Maryland.",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11810 Grand Park Ave. Suite 500",
                                        "addressLocality": "North Bethesda",
                                        "addressRegion": "MD",
                                        "postalCode": "20852",
                                        "addressCountry": "US"
                                    },
                                    "areaServed": { "@type": "City", "name": "North Bethesda" }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Framing Services in North Bethesda, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "North Bethesda" },
                                    "serviceType": "Residential Wall, Structural, Addition and Basement Framing Services"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Framing", "item": "https://www.dmv-gc.com/service/framing" },
                                        { "@type": "ListItem", "position": 4, "name": "North Bethesda, MD", "item": "https://www.dmv-gc.com/service/framing/north-bethesda-md" }
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
                    North Bethesda, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">DMV GENERAL CONTRACTING GROUP</div>
                    <h1>Framing Services in North Bethesda, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">🏠 Bethesda Headquarters</span>
                        <span className="badge">✓ MD MHIC #156178</span>
                        <span className="badge">✓ Licensed & Insured</span>
                        <span className="badge">✓ 1-Year Workmanship Warranty</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional residential framing and structural framing solutions for North Bethesda homeowners. DMV-GC is headquartered at 11810 Grand Park Ave. Suite 500 in North Bethesda and coordinates framing work with remodeling, home additions, structural, electrical and plumbing services.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>North Bethesda Framing Expertise:</strong> DMV General Contracting Group is headquartered in North Bethesda. Its in-house design-build team coordinates framing modernization with architecture, structural engineering, electrical, plumbing and permit management for local renovation and addition projects.
                </div>

                {/* SERVICES */}
                <h2>Complete Framing Services for North Bethesda Homes</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Wall Framing</h3><p>Interior and exterior wall framing for renovations, room reconfiguration, additions and residential construction.</p></div>
                    <div className="svc-card"><h3>Structural Framing</h3><p>Framing support for structural modifications and larger remodeling projects.</p></div>
                    <div className="svc-card"><h3>Home Addition Framing</h3><p>Framing for rear additions, side additions and second-story expansions.</p></div>
                    <div className="svc-card"><h3>Basement Framing</h3><p>Wall and ceiling framing for basement finishing, bedrooms, bathrooms and recreation areas.</p></div>
                    <div className="svc-card"><h3>Roof & Ceiling Framing</h3><p>Framing support for roof modifications, ceiling changes and addition construction.</p></div>
                    <div className="svc-card"><h3>Room & Layout Changes</h3><p>Framing for new partitions, open-concept conversions, closets and redesigned layouts.</p></div>
                    <div className="svc-card"><h3>Framing for Remodeling</h3><p>Coordinate framing with plumbing, electrical, mechanical and other trades while walls are open.</p></div>
                    <div className="svc-card"><h3>Framing Repair & Reinforcement</h3><p>Repair and reinforcement where existing framing requires correction or improvement.</p></div>
                </div>

                {/* COMMON NEEDS */}
                <h2>Common Framing Needs in North Bethesda</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>Homeowner Need</th>
                                    <th>How We Help</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Home renovation</td>
                                    <td>Coordinate new wall and structural framing with the overall remodeling scope.</td>
                                </tr>
                                <tr>
                                    <td>Home addition</td>
                                    <td>Plan and install framing for expanded square footage and new living areas.</td>
                                </tr>
                                <tr>
                                    <td>Basement finishing</td>
                                    <td>Frame new rooms, walls, closets and utility areas around the basement layout.</td>
                                </tr>
                                <tr>
                                    <td>Open-concept conversion</td>
                                    <td>Coordinate framing changes with approved structural and layout plans.</td>
                                </tr>
                                <tr>
                                    <td>Second-story addition</td>
                                    <td>Coordinate new structural and exterior framing with the addition design and construction sequence.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* REMODELING & ADDITIONS */}
                <h2>Framing for Remodeling & Home Additions</h2>
                <p>North Bethesda&apos;s housing includes established homes, newer townhomes and mixed-use residential properties. DMV-GC&apos;s local design-build team specifically coordinates framing modernization and system extensions as part of renovations and additions.</p>
                <p>For home additions, DMV-GC coordinates framing rough-in alongside electrical and plumbing work before walls are closed.</p>

                {/* WHY CHOOSE */}
                <h2>Why Choose DMV General Contracting Group?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏠</div>
                        <strong>North Bethesda HQ</strong>
                        <span>Local team with direct neighborhood familiarity</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🛠️</div>
                        <strong>MD MHIC #156178</strong>
                        <span>Licensed, bonded and insured</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">✓</div>
                        <strong>1-Year Warranty</strong>
                        <span>1-year workmanship warranty on every project</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🔧</div>
                        <strong>In-House Trades</strong>
                        <span>Framing, electrical, plumbing and construction under one roof</span>
                    </div>
                </div>

                <div className="svc-grid">
                    <div className="svc-card"><h3>Local Headquarters</h3><p>DMV-GC is based in North Bethesda, giving the team direct familiarity with local neighborhoods and project requirements.</p></div>
                    <div className="svc-card"><h3>One Coordinated Team</h3><p>Framing can be coordinated with architecture, structural engineering, electrical, plumbing and construction under one design-build workflow.</p></div>
                    <div className="svc-card"><h3>Licensed & Insured</h3><p>DMV-GC lists Maryland MHIC #156178 and DC DLCP #410526000209 and provides a 1-year workmanship warranty.</p></div>
                    <div className="svc-card"><h3>Permit Coordination</h3><p>Its North Bethesda projects are coordinated with Montgomery County permitting requirements through the company&apos;s in-house permit specialists.</p></div>
                </div>

                {/* PROCESS */}
                <h2>Our Framing Process</h2>
                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Consultation</h3>
                            <p>Discuss the project scope, layout changes and construction goals.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Site Assessment</h3>
                            <p>Evaluate existing conditions, layout and framing requirements.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>System Planning</h3>
                            <p>Develop a framing approach appropriate to the home and construction scope.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Trade Coordination</h3>
                            <p>Coordinate framing with electrical, plumbing and structural work.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Installation</h3>
                            <p>Complete framing work as part of the planned project.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Final Review</h3>
                            <p>Review completed work and prepare the project for final finishes or occupancy.</p>
                        </div>
                    </div>
                </div>

                {/* SERVICE AREA */}
                <h2>Framing Service Area</h2>
                <p>DMV General Contracting Group provides residential framing and design-build services throughout <strong>North Bethesda, MD</strong>, including Pike & Rose, White Flint, Luxmanor, Tilden Woods and nearby Montgomery County communities.</p>

                {/* FAQ */}
                <h2>Frequently Asked Questions</h2>
                <Accordion defaultActiveKey="0" flush>
                    {faqData.map((faq, index) => (
                        <AccordionItem eventKey={index.toString()} key={index}>
                            <AccordionHeader as="h3">{faq.question}</AccordionHeader>
                            <AccordionBody>{faq.answer}</AccordionBody>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* CTA */}
                <div className="cta-banner">
                    <h2>Need Framing Services in North Bethesda, MD?</h2>
                    <p>Talk with DMV General Contracting Group about framing installation, replacement, remodeling or home addition needs.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default FramingNorthBethesdaMD;