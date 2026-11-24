import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../framing-city-style.scss";

const FramingLaurelMD = () => {
    const faqData = [
        {
            question: "Does DMV-GC provide framing services in Laurel?",
            answer: "Yes. Residential framing is listed as an in-house service and can be provided as a standalone scope or as part of a larger renovation or addition."
        },
        {
            question: "Can framing be included in a Laurel home addition?",
            answer: "Yes. DMV-GC coordinates addition framing with structural requirements and the other construction stages involved in the project."
        },
        {
            question: "Can framing work be coordinated with a full renovation?",
            answer: "Yes. Framing can be coordinated with structural, electrical, plumbing, HVAC, drywall and finish work through the design-build workflow."
        },
        {
            question: "Does permit jurisdiction matter for framing work in Laurel?",
            answer: "It can for permit-required construction. Laurel-area properties may fall under different authorities, so the applicable jurisdiction should be confirmed before permit filing."
        },
        {
            question: "Is DMV-GC licensed for framing work in Maryland?",
            answer: "DMV General Contracting Group lists Maryland MHIC license #156178 and serves Laurel-area projects across the applicable Maryland jurisdictions."
        }
    ];

    return (
        <div className="city-service-detail-page framing-laurel-md">
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
                                    "description": "Residential general contractor providing framing services as part of its in-house trade services in Laurel, Maryland.",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11810 Grand Park Ave. Suite 500",
                                        "addressLocality": "North Bethesda",
                                        "addressRegion": "MD",
                                        "postalCode": "20852",
                                        "addressCountry": "US"
                                    },
                                    "areaServed": { "@type": "City", "name": "Laurel" }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Framing Services in Laurel, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Laurel" },
                                    "serviceType": "Residential Wall, Structural, Addition and Basement Framing Services"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Framing", "item": "https://www.dmv-gc.com/service/framing" },
                                        { "@type": "ListItem", "position": 4, "name": "Laurel, MD", "item": "https://www.dmv-gc.com/service/framing/laurel-md" }
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
                    Laurel, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">DMV GENERAL CONTRACTING GROUP</div>
                    <h1>Framing Services in Laurel, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">🏠 Laurel Area</span>
                        <span className="badge">✓ MD MHIC #156178</span>
                        <span className="badge">✓ Licensed & Insured</span>
                        <span className="badge">✓ 1-Year Workmanship Warranty</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional residential framing and structural framing solutions for Laurel homeowners. DMV-GC coordinates framing with remodeling, home additions, structural, electrical, plumbing and other in-house construction services throughout Laurel and surrounding Maryland communities.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Laurel Framing Expertise:</strong> DMV General Contracting Group provides residential framing support for renovations, additions, basements, structural remodeling and new residential construction in Laurel, coordinating framing with architectural, structural, electrical, plumbing and permit requirements. Because Laurel addresses can fall under different permit authorities, the applicable jurisdiction is confirmed before construction begins.
                </div>

                {/* SERVICES */}
                <h2>Complete Framing Services for Laurel Homes</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Wall Framing</h3><p>Interior and exterior wall framing for renovations, room reconfiguration, additions and residential construction.</p></div>
                    <div className="svc-card"><h3>Structural Framing</h3><p>Framing support for structural modifications and larger remodeling projects.</p></div>
                    <div className="svc-card"><h3>Home Addition Framing</h3><p>Framing for rear additions, side additions and second-story expansions.</p></div>
                    <div className="svc-card"><h3>Basement Framing</h3><p>Wall and ceiling framing for basement finishing, bedrooms, bathrooms and recreation areas.</p></div>
                    <div className="svc-card"><h3>Roof & Ceiling Framing</h3><p>Framing support for roof modifications, ceiling changes and addition construction.</p></div>
                    <div className="svc-card"><h3>Room & Layout Changes</h3><p>Framing changes that help create new rooms, wider openings and updated interior layouts.</p></div>
                    <div className="svc-card"><h3>Framing for Remodeling</h3><p>Framing modernization coordinated with demolition, structural work and interior renovation.</p></div>
                    <div className="svc-card"><h3>Framing Repair & Reinforcement</h3><p>Repair and reinforcement support when existing framing needs to be modified or strengthened.</p></div>
                </div>

                {/* COMMON NEEDS */}
                <h2>Common Framing Needs in Laurel</h2>
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
                <p>Framing is often one stage of a larger renovation. DMV-GC can coordinate the framing stage with design, structural engineering, electrical, plumbing, HVAC, drywall and finish work.</p>
                <p>For Laurel properties, the existing home&apos;s construction, access, lower-level conditions and project requirements are reviewed before the framing approach is finalized.</p>

                {/* WHY CHOOSE */}
                <h2>Why Choose DMV General Contracting Group?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏠</div>
                        <strong>Laurel Area</strong>
                        <span>Experience serving Laurel-area residential projects</span>
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
                    <div className="svc-card"><h3>Laurel Area Experience</h3><p>DMV-GC serves Laurel-area residential projects and surrounding Maryland communities.</p></div>
                    <div className="svc-card"><h3>One Coordinated Team</h3><p>Framing can be coordinated with architecture, structural engineering, electrical, plumbing and construction under one design-build workflow.</p></div>
                    <div className="svc-card"><h3>Licensed & Insured</h3><p>DMV-GC lists Maryland MHIC #156178 and DC DLCP #410526000209 and provides a 1-year workmanship warranty.</p></div>
                    <div className="svc-card"><h3>Permit Coordination</h3><p>Its Laurel projects are coordinated with applicable permit authorities through the company&apos;s in-house permit specialists.</p></div>
                </div>

                {/* PROCESS */}
                <h2>Our Framing Process</h2>
                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Consultation</h3>
                            <p>Discuss your renovation, addition or structural framing needs and establish the project scope.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Site Assessment</h3>
                            <p>Review existing conditions, access, layout and framing requirements at the property.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>System Planning</h3>
                            <p>Coordinate framing with drawings, structural requirements and related trade work.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Trade Coordination</h3>
                            <p>Plan electrical, plumbing, HVAC and other rough-ins before walls and ceilings are closed.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Installation</h3>
                            <p>Install the planned framing components according to the project scope and construction requirements.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Final Review</h3>
                            <p>Review completed framing and coordinate the transition into the next construction stage.</p>
                        </div>
                    </div>
                </div>

                {/* SERVICE AREA */}
                <h2>Framing Service Area</h2>
                <p>DMV-GC serves Laurel-area residential projects and surrounding Maryland communities, including the City of Laurel, West Laurel, North Laurel, South Laurel, Laurel Lakes and Russett.</p>

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
                    <h2>Need Framing Services in Laurel, MD?</h2>
                    <p>Talk with DMV General Contracting Group about framing installation, replacement, remodeling or home addition needs.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default FramingLaurelMD;