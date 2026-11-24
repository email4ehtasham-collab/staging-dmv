import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../framing-city-style.scss";

const FramingChevyChaseMD = () => {
    const faqData = [
        {
            question: "Does DMV-GC provide framing services in Chevy Chase?",
            answer: "Yes. DMV-GC lists framing among its in-house construction services and provides framing support for residential remodeling, additions and construction projects."
        },
        {
            question: "Can framing be included in a Chevy Chase home addition?",
            answer: "Yes. Framing can be coordinated as part of a home addition project, including structural and exterior framing required for the expanded space."
        },
        {
            question: "Can framing work be coordinated with a full renovation?",
            answer: "Yes. Framing can be coordinated with structural, electrical, plumbing, mechanical and finish work as part of a larger renovation project."
        },
        {
            question: "Does DMV-GC serve areas near Chevy Chase?",
            answer: "Yes. DMV-GC serves Chevy Chase and surrounding communities throughout Montgomery County and the greater DMV area."
        }
    ];

    return (
        <div className="city-service-detail-page framing-chevy-chase-md">
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
                                    "description": "Residential general contractor providing framing services as part of its in-house trade services in Chevy Chase, Maryland.",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11810 Grand Park Ave. Suite 500",
                                        "addressLocality": "North Bethesda",
                                        "addressRegion": "MD",
                                        "postalCode": "20852",
                                        "addressCountry": "US"
                                    },
                                    "areaServed": { "@type": "City", "name": "Chevy Chase" }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Framing Services in Chevy Chase, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Chevy Chase" },
                                    "serviceType": "Residential Wall, Structural, Addition and Basement Framing Services"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Framing", "item": "https://www.dmv-gc.com/service/framing" },
                                        { "@type": "ListItem", "position": 4, "name": "Chevy Chase, MD", "item": "https://www.dmv-gc.com/service/framing/chevy-chase-md" }
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
                    Chevy Chase, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">DMV GENERAL CONTRACTING GROUP</div>
                    <h1>Framing Services in Chevy Chase, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">🏠 Serving Chevy Chase</span>
                        <span className="badge">✓ MD MHIC #156178</span>
                        <span className="badge">✓ Licensed & Insured</span>
                        <span className="badge">✓ 1-Year Workmanship Warranty</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional residential framing and structural framing solutions for Chevy Chase homeowners. DMV-GC provides framing support for renovations, home additions, basement finishing, structural remodeling and new residential construction, with framing coordinated alongside other construction trades.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Chevy Chase Framing Expertise:</strong> DMV General Contracting Group provides residential framing services for renovations, additions, basement projects, structural remodeling and new residential construction in Chevy Chase, coordinating framing with architectural, structural, electrical, plumbing and permit requirements.
                </div>

                {/* SERVICES */}
                <h2>Complete Framing Services for Chevy Chase Homes</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Wall Framing</h3><p>Interior and exterior wall framing for renovations, room reconfiguration, home additions and residential construction projects.</p></div>
                    <div className="svc-card"><h3>Structural Framing</h3><p>Framing support for structural modifications, remodeling projects and construction work that requires coordinated structural changes.</p></div>
                    <div className="svc-card"><h3>Home Addition Framing</h3><p>Framing for rear additions, side additions and second-story expansions designed to create additional living space.</p></div>
                    <div className="svc-card"><h3>Basement Framing</h3><p>Wall and ceiling framing for basement finishing, bedrooms, bathrooms, recreation areas and other finished basement spaces.</p></div>
                    <div className="svc-card"><h3>Roof & Ceiling Framing</h3><p>Framing support for roof modifications, ceiling changes and framing required as part of home additions and remodeling projects.</p></div>
                    <div className="svc-card"><h3>Room & Layout Changes</h3><p>Framing for new partitions, open-concept conversions, closets and redesigned interior layouts.</p></div>
                    <div className="svc-card"><h3>Framing for Remodeling</h3><p>Coordinate framing with plumbing, electrical, mechanical and other construction trades while walls and structural areas are open.</p></div>
                    <div className="svc-card"><h3>Framing Repair & Reinforcement</h3><p>Repair and reinforcement work where existing framing requires correction, strengthening or improvement as part of a larger construction project.</p></div>
                </div>

                {/* COMMON NEEDS */}
                <h2>Common Framing Needs in Chevy Chase</h2>
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
                                    <td>Coordinate new wall and structural framing with the overall remodeling scope and construction plans.</td>
                                </tr>
                                <tr>
                                    <td>Home addition</td>
                                    <td>Plan and install framing for expanded square footage, new rooms and additional living areas.</td>
                                </tr>
                                <tr>
                                    <td>Basement finishing</td>
                                    <td>Frame new rooms, walls, closets and utility areas according to the planned basement layout.</td>
                                </tr>
                                <tr>
                                    <td>Open-concept conversion</td>
                                    <td>Coordinate framing changes with approved structural plans and the desired interior layout.</td>
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
                <p>Chevy Chase homes can include a variety of architectural styles and construction types, making proper framing coordination important when changing an existing layout or adding new space. DMV-GC provides framing support as part of remodeling and design-build projects.</p>
                <p>For home additions and major renovations, framing can be coordinated with structural requirements, electrical, plumbing and other mechanical systems during the construction sequence before walls are closed and interior finishes are installed.</p>

                {/* WHY CHOOSE */}
                <h2>Why Choose DMV General Contracting Group?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏠</div>
                        <strong>Serving Chevy Chase</strong>
                        <span>Local service with Montgomery County familiarity</span>
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
                    <div className="svc-card"><h3>Local Service</h3><p>DMV-GC serves Chevy Chase and surrounding Montgomery County communities, providing coordinated construction services for residential projects.</p></div>
                    <div className="svc-card"><h3>One Coordinated Team</h3><p>Framing can be coordinated with architecture, structural engineering, electrical, plumbing and other construction work under one design-build workflow.</p></div>
                    <div className="svc-card"><h3>Licensed & Insured</h3><p>DMV-GC lists Maryland MHIC #156178 and DC DLCP #410526000209 and provides a 1-year workmanship warranty.</p></div>
                    <div className="svc-card"><h3>Permit Coordination</h3><p>Construction projects can be coordinated with applicable local permitting requirements through the company&apos;s project and permit specialists.</p></div>
                </div>

                {/* PROCESS */}
                <h2>Our Framing Process</h2>
                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Consultation</h3>
                            <p>Discuss your remodeling, addition or construction goals and determine the framing requirements for the project.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Site Assessment</h3>
                            <p>Review existing conditions, layout and framing requirements before construction begins.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Project Planning</h3>
                            <p>Develop a framing approach appropriate for the home and overall construction scope.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Trade Coordination</h3>
                            <p>Coordinate framing with structural, electrical, plumbing and mechanical work as required.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Installation</h3>
                            <p>Complete the planned framing work according to the project scope and construction sequence.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Final Review</h3>
                            <p>Review completed framing work and prepare the project for insulation, drywall, finishes or the next construction stage.</p>
                        </div>
                    </div>
                </div>

                {/* SERVICE AREA */}
                <h2>Framing Service Area</h2>
                <p>DMV General Contracting Group provides residential framing and design-build services throughout <strong>Chevy Chase, MD</strong>, including Chevy Chase Village, Friendship Village, Bethesda, Potomac, North Bethesda, Kensington, Silver Spring, Rockville and surrounding Montgomery County communities.</p>

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
                    <h2>Need Framing Services in Chevy Chase, MD?</h2>
                    <p>Talk with DMV General Contracting Group about framing installation, structural framing, remodeling, basement framing or home addition needs.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default FramingChevyChaseMD;