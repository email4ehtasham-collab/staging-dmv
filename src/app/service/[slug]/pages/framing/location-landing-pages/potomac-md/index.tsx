import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../framing-city-style.scss";

const FramingPotomacMD = () => {
    const faqData = [
        {
            question: "Does DMV-GC provide framing services in Potomac?",
            answer: "Yes. Framing is listed as one of DMV-GC's in-house services."
        },
        {
            question: "Can framing be included in a Potomac home addition?",
            answer: "Yes. DMV-GC coordinates framing extensions during the framing and structural construction stage of addition projects."
        },
        {
            question: "Can framing work be coordinated with a full renovation?",
            answer: "Yes. DMV-GC's Potomac design-build workflow includes framing modernization alongside structural, electrical, plumbing and finish work."
        },
        {
            question: "Is DMV-GC local to the Potomac area?",
            answer: "Yes. The company is headquartered at 11810 Grand Park Ave. Suite 500 in North Bethesda, a short distance from Potomac."
        }
    ];

    return (
        <div className="city-service-detail-page framing-potomac-md">
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
                                    "description": "Residential general contractor providing framing services as part of its in-house trade services in Potomac, Maryland.",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11810 Grand Park Ave. Suite 500",
                                        "addressLocality": "North Bethesda",
                                        "addressRegion": "MD",
                                        "postalCode": "20852",
                                        "addressCountry": "US"
                                    },
                                    "areaServed": { "@type": "City", "name": "Potomac" }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Framing Services in Potomac, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Potomac" },
                                    "serviceType": "Residential Wall, Structural, Addition and Basement Framing Services"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Framing", "item": "https://www.dmv-gc.com/service/framing" },
                                        { "@type": "ListItem", "position": 4, "name": "Potomac, MD", "item": "https://www.dmv-gc.com/service/framing/potomac-md" }
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
                    Potomac, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">DMV GENERAL CONTRACTING GROUP</div>
                    <h1>Framing Services in Potomac, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">🏡 Potomac Area</span>
                        <span className="badge">✓ MD MHIC #156178</span>
                        <span className="badge">✓ Licensed & Insured</span>
                        <span className="badge">✓ 1-Year Workmanship Warranty</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional residential framing and structural framing solutions for Potomac homeowners. DMV-GC is based in North Bethesda and coordinates framing work with remodeling, home additions, structural, electrical and plumbing services throughout Potomac and surrounding Montgomery County communities.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Potomac Framing Expertise:</strong> DMV General Contracting Group provides residential framing support for renovations, additions, basements, structural remodeling and new residential construction in Potomac, coordinating framing with architectural, structural, electrical, plumbing and permit requirements.
                </div>

                {/* SERVICES */}
                <h2>Complete Framing Services for Potomac Homes</h2>
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
                <h2>Common Framing Needs in Potomac</h2>
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
                <p>Potomac's housing includes older ranches, split-levels and colonials as well as newer townhomes and residential properties. DMV-GC's local design-build team specifically coordinates framing modernization and system extensions as part of renovations and additions.</p>
                <p>For home additions, DMV-GC coordinates framing rough-in alongside electrical and plumbing work before walls are closed.</p>

                {/* WHY CHOOSE */}
                <h2>Why Choose DMV General Contracting Group?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏡</div>
                        <strong>Potomac Area</strong>
                        <span>Familiarity with local homes and neighborhoods</span>
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
                    <div className="svc-card"><h3>Local Presence</h3><p>DMV-GC is based in North Bethesda, giving the team direct familiarity with Potomac neighborhoods and project requirements.</p></div>
                    <div className="svc-card"><h3>One Coordinated Team</h3><p>Framing can be coordinated with architecture, structural engineering, electrical, plumbing and construction under one design-build workflow.</p></div>
                    <div className="svc-card"><h3>Licensed & Insured</h3><p>DMV-GC lists Maryland MHIC #156178 and DC DLCP #410526000209 and provides a 1-year workmanship warranty.</p></div>
                    <div className="svc-card"><h3>Permit Coordination</h3><p>Its Potomac projects are coordinated with Montgomery County permitting requirements through the company's in-house permit specialists.</p></div>
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
                <p>DMV General Contracting Group provides residential framing and design-build services throughout <strong>Potomac, MD</strong>, including Potomac Village, Avenel, Cabin John, North Bethesda, Bethesda, Chevy Chase, Rockville, Gaithersburg and surrounding Montgomery County communities.</p>

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
                    <h2>Need Framing Services in Potomac, MD?</h2>
                    <p>Talk with DMV General Contracting Group about framing installation, replacement, remodeling or home addition needs.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default FramingPotomacMD;