import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../hvac-city-style.scss";

const HvacNorthBethesdaMD = () => {
    const faqData = [
        {
            question: "Does DMV-GC provide HVAC services in North Bethesda?",
            answer: "Yes. HVAC is listed as one of DMV-GC's in-house services."
        },
        {
            question: "Can HVAC be included in a North Bethesda home addition?",
            answer: "Yes. DMV-GC coordinates HVAC extensions during the mechanical rough-in stage of addition projects."
        },
        {
            question: "Can HVAC work be coordinated with a full renovation?",
            answer: "Yes. DMV-GC's North Bethesda design-build workflow includes HVAC modernization alongside structural, electrical, plumbing and finish work."
        },
        {
            question: "Is DMV-GC local to North Bethesda?",
            answer: "Yes. The company is headquartered at 11810 Grand Park Ave. Suite 500 in North Bethesda."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Consultation",
            desc: "Review comfort concerns, existing equipment and project goals."
        },
        {
            num: 2,
            title: "Site Assessment",
            desc: "Evaluate existing conditions, layout and HVAC requirements."
        },
        {
            num: 3,
            title: "System Planning",
            desc: "Develop an HVAC approach appropriate to the home and construction scope."
        },
        {
            num: 4,
            title: "Trade Coordination",
            desc: "Coordinate HVAC with electrical, plumbing, structural and framing work."
        },
        {
            num: 5,
            title: "Installation",
            desc: "Complete HVAC work as part of the planned project."
        },
        {
            num: 6,
            title: "Final Review",
            desc: "Review completed work and prepare the project for final finishes or occupancy."
        }
    ];

    return (
        <div className="city-service-detail-page hvac-north-bethesda-md">
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
                                    "description": "Residential general contractor providing HVAC services as part of its in-house trade services in North Bethesda, Maryland.",
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
                                    "name": "HVAC Services in North Bethesda, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "North Bethesda" },
                                    "serviceType": "Heating, Ventilation and Air Conditioning Services"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "HVAC", "item": "https://www.dmv-gc.com/service/hvac" },
                                        { "@type": "ListItem", "position": 4, "name": "North Bethesda, MD", "item": "https://www.dmv-gc.com/service/hvac/north-bethesda-md" }
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
                    <Link href="/service/hvac">HVAC</Link><span>›</span>
                    North Bethesda, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">🏠 HVAC Contractor • North Bethesda, MD</div>
                    <h1>HVAC Services in North Bethesda, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">✓ North Bethesda Headquarters</span>
                        <span className="badge">✓ MD MHIC #156178</span>
                        <span className="badge">✓ Licensed & Insured</span>
                        <span className="badge">✓ 1-Year Workmanship Warranty</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional residential heating, air conditioning, ventilation and HVAC solutions for North Bethesda homeowners. DMV-GC is headquartered in North Bethesda and coordinates HVAC work with remodeling, home additions, structural, electrical and plumbing services.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>North Bethesda HVAC Expertise:</strong> DMV General Contracting Group is headquartered at 11810 Grand Park Ave. Suite 500 in North Bethesda. Its in-house design-build team coordinates HVAC modernization with architecture, structural engineering, electrical, plumbing and permit management for local renovation and addition projects.
                </div>

                {/* SERVICES */}
                <h2>Complete HVAC Services for North Bethesda Homes</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Heating Services</h3><p>Heating installation, replacement and system upgrades planned around your home's size, layout and comfort requirements.</p></div>
                    <div className="svc-card"><h3>Air Conditioning</h3><p>Residential cooling solutions including new installations, replacement systems and upgrades for remodeled spaces.</p></div>
                    <div className="svc-card"><h3>HVAC Installation</h3><p>New HVAC systems for renovations, basement finishing, additions and other residential construction projects.</p></div>
                    <div className="svc-card"><h3>HVAC Replacement</h3><p>Coordinated replacement planning for aging equipment and changing household comfort needs.</p></div>
                    <div className="svc-card"><h3>Ventilation & Airflow</h3><p>Airflow and ventilation improvements integrated with room layouts, ductwork and renovation plans.</p></div>
                    <div className="svc-card"><h3>HVAC for Remodeling</h3><p>HVAC coordination for kitchens, bathrooms, basements and whole-home renovations while walls and ceilings are open.</p></div>
                    <div className="svc-card"><h3>HVAC for Home Additions</h3><p>Mechanical planning and system extensions for new rooms, rear additions and second-story additions.</p></div>
                    <div className="svc-card"><h3>HVAC Modernization</h3><p>System upgrades coordinated with electrical, insulation and other home modernization work.</p></div>
                </div>

                {/* TABLE */}
                <h2>Common HVAC Needs in North Bethesda</h2>
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
                                    <td><strong>1950s–1970s home renovation</strong></td>
                                    <td>Coordinate HVAC modernization with structural, electrical, plumbing and interior renovation work.</td>
                                </tr>
                                <tr>
                                    <td><strong>Ranch-to-two-story addition</strong></td>
                                    <td>Plan HVAC extensions for expanded square footage during mechanical rough-in.</td>
                                </tr>
                                <tr>
                                    <td><strong>Basement finishing</strong></td>
                                    <td>Integrate heating, cooling and ventilation planning into the new basement layout.</td>
                                </tr>
                                <tr>
                                    <td><strong>Townhome renovation</strong></td>
                                    <td>Coordinate HVAC requirements with the existing structure and project scope.</td>
                                </tr>
                                <tr>
                                    <td><strong>Uneven comfort</strong></td>
                                    <td>Review system configuration, airflow and room usage to identify practical improvements.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* REMODELING */}
                <h2>HVAC for Remodeling & Home Additions</h2>
                <p>North Bethesda's housing includes older ranches, split-levels and colonials as well as newer townhomes and mixed-use residential properties. DMV-GC's local design-build content specifically identifies HVAC modernization and system extensions as part of coordinated renovations and additions.</p>
                <p>For home additions, DMV-GC coordinates HVAC ductwork and other mechanical systems during the rough-in stage with electrical and plumbing work before walls are closed.</p>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group?</h2>
                <div className="trust-bar">
                    <div className="trust-item"><strong>North Bethesda HQ</strong></div>
                    <div className="trust-item"><strong>MD MHIC #156178</strong></div>
                    <div className="trust-item"><strong>1-Year Warranty</strong></div>
                    <div className="trust-item"><strong>In-House HVAC & Trades</strong></div>
                </div>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Local Headquarters</h3><p>DMV-GC is based in North Bethesda, giving the team direct familiarity with local neighborhoods and project requirements.</p></div>
                    <div className="svc-card"><h3>One Coordinated Team</h3><p>HVAC can be coordinated with architecture, structural engineering, electrical, plumbing and construction under one design-build workflow.</p></div>
                    <div className="svc-card"><h3>Licensed & Insured</h3><p>DMV-GC lists Maryland MHIC #156178 and DC DLCP #410526000209 and provides a 1-year workmanship warranty.</p></div>
                    <div className="svc-card"><h3>Permit Coordination</h3><p>Its North Bethesda projects are coordinated with Montgomery County permitting requirements through the company's in-house permit specialists.</p></div>
                </div>

                {/* PROCESS */}
                <h2>Our HVAC Process</h2>
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

                {/* AREAS */}
                <h2>HVAC Service Area</h2>
                <p>DMV General Contracting Group provides residential HVAC and design-build services throughout <strong>North Bethesda, MD</strong>, including Luxmanor, Tilden Woods, Garrett Park Estates, White Flint, Pike District and nearby Montgomery County communities.</p>
                <div className="areas-grid">
                    <span className="area-pill">North Bethesda, MD</span>
                    <span className="area-pill">Luxmanor</span>
                    <span className="area-pill">Tilden Woods</span>
                    <span className="area-pill">Garrett Park Estates</span>
                    <span className="area-pill">White Flint</span>
                    <span className="area-pill">Pike District</span>
                    <span className="area-pill">Bethesda</span>
                    <span className="area-pill">Rockville</span>
                </div>

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
                    <h2>Need HVAC Services in North Bethesda, MD?</h2>
                    <p>Talk with DMV General Contracting Group about HVAC installation, replacement, remodeling or home addition needs.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default HvacNorthBethesdaMD;