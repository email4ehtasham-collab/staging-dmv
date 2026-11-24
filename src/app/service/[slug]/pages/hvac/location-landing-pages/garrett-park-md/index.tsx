import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../hvac-city-style.scss";

const HvacGarrettParkMD = () => {
    const faqData = [
        {
            question: "Does DMV-GC provide HVAC as part of remodeling projects?",
            answer: "Yes. DMV-GC states that HVAC is one of its in-house services and coordinates HVAC with other trades on residential construction and remodeling projects."
        },
        {
            question: "Can HVAC be included in a Garrett Park home addition?",
            answer: "Yes. Home additions can require mechanical planning and HVAC coordination. DMV-GC's Garrett Park addition service specifically describes in-house coordination of the project's design, structural and construction stages."
        },
        {
            question: "Is DMV-GC licensed in Maryland?",
            answer: "Yes. DMV General Contracting Group lists Maryland MHIC license #156178."
        },
        {
            question: "Can HVAC work be coordinated with electrical and plumbing?",
            answer: "Yes. DMV-GC identifies Structural, Electrical, Plumbing and HVAC as in-house services, allowing these scopes to be coordinated within broader projects."
        },
        {
            question: "Does Garrett Park have special considerations for home projects?",
            answer: "Yes. DMV-GC's Garrett Park pages emphasize the community's historic character and the need to coordinate renovation work with existing building conditions."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Consultation",
            desc: "Review your home's comfort concerns, current system and project goals."
        },
        {
            num: 2,
            title: "Site Assessment",
            desc: "Evaluate the existing conditions, layout and HVAC requirements."
        },
        {
            num: 3,
            title: "System Planning",
            desc: "Develop an HVAC approach appropriate to the home's scope and construction needs."
        },
        {
            num: 4,
            title: "Trade Coordination",
            desc: "Coordinate HVAC with electrical, plumbing, structural and framing requirements."
        },
        {
            num: 5,
            title: "Installation",
            desc: "Complete the HVAC work as part of the planned residential construction scope."
        },
        {
            num: 6,
            title: "Final Review",
            desc: "Review the completed work and confirm the project is ready for the next phase or final finish."
        }
    ];

    return (
        <div className="city-service-detail-page hvac-garrett-park-md">
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
                                    "description": "Residential general contractor providing HVAC services as part of its in-house trade services in Garrett Park, Maryland.",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11810 Grand Park Ave. Suite 500",
                                        "addressLocality": "North Bethesda",
                                        "addressRegion": "MD",
                                        "postalCode": "20852",
                                        "addressCountry": "US"
                                    },
                                    "areaServed": { "@type": "City", "name": "Garrett Park" }
                                },
                                {
                                    "@type": "Service",
                                    "name": "HVAC Services in Garrett Park, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Garrett Park" },
                                    "serviceType": "Heating, Ventilation and Air Conditioning Services"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "HVAC", "item": "https://www.dmv-gc.com/service/hvac" },
                                        { "@type": "ListItem", "position": 4, "name": "Garrett Park, MD", "item": "https://www.dmv-gc.com/service/hvac/garrett-park-md" }
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
                    Garrett Park, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">🏠 HVAC Contractor • Garrett Park, MD</div>
                    <h1>HVAC Services in Garrett Park, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">✓ MD MHIC #156178</span>
                        <span className="badge">✓ Licensed & Insured</span>
                        <span className="badge">✓ 1-Year Workmanship Warranty</span>
                        <span className="badge">✓ Available 7 Days a Week</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional residential heating, air conditioning, ventilation and HVAC solutions for homeowners in Garrett Park, MD. DMV-GC coordinates HVAC with remodeling, additions and other in-house trades for a complete project.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Local Garrett Park HVAC Expertise:</strong> Garrett Park includes older homes and a historic community context where HVAC work may need careful coordination with existing electrical, plumbing, framing and architectural conditions. DMV-GC provides HVAC as part of an in-house design-build team, helping keep related trades coordinated.
                </div>

                {/* SERVICES */}
                <h2>Complete HVAC Services for Garrett Park Homes</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Heating Services</h3><p>Heating-system installation, replacement, troubleshooting and upgrades designed around your home's size, layout and comfort requirements.</p></div>
                    <div className="svc-card"><h3>Air Conditioning</h3><p>Residential cooling solutions including AC installation, replacement, system improvements and airflow-focused comfort upgrades.</p></div>
                    <div className="svc-card"><h3>HVAC Installation</h3><p>New HVAC systems for renovations, additions, finished basements and other residential construction projects.</p></div>
                    <div className="svc-card"><h3>HVAC Replacement</h3><p>Planned replacement of aging or inefficient equipment with properly sized systems and coordinated installation.</p></div>
                    <div className="svc-card"><h3>Ventilation & Airflow</h3><p>Airflow and ventilation improvements that support balanced comfort throughout the home.</p></div>
                    <div className="svc-card"><h3>HVAC for Remodeling</h3><p>HVAC coordination during kitchen, bathroom, basement and whole-home renovations where walls and ceilings may be opened.</p></div>
                    <div className="svc-card"><h3>HVAC for Home Additions</h3><p>Mechanical planning for new rooms, expanded living areas and additions, coordinated with structural and electrical work.</p></div>
                    <div className="svc-card"><h3>Indoor Comfort Upgrades</h3><p>Practical improvements to help address hot or cold rooms, airflow concerns and changing comfort needs.</p></div>
                </div>

                {/* TABLE */}
                <h2>Common HVAC Needs in Garrett Park</h2>
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
                                    <td><strong>Uneven temperatures</strong></td>
                                    <td>Review airflow, room usage and system configuration to identify practical comfort improvements.</td>
                                </tr>
                                <tr>
                                    <td><strong>Older HVAC equipment</strong></td>
                                    <td>Evaluate condition and replacement options based on the home's needs and project scope.</td>
                                </tr>
                                <tr>
                                    <td><strong>Remodeling</strong></td>
                                    <td>Coordinate HVAC with electrical, plumbing, structural and finish work so mechanical requirements are planned before closing walls.</td>
                                </tr>
                                <tr>
                                    <td><strong>Home additions</strong></td>
                                    <td>Plan HVAC requirements for expanded square footage and coordinate mechanical rough-ins with the addition construction.</td>
                                </tr>
                                <tr>
                                    <td><strong>Basement finishing</strong></td>
                                    <td>Integrate HVAC planning into basement renovation layouts and ceiling/wall assemblies.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* REMODELING */}
                <h2>HVAC for Remodeling & Home Additions</h2>
                <p>For Garrett Park projects, HVAC is often part of a larger construction scope. DMV-GC's design-build approach keeps mechanical work coordinated with the other trades involved in a renovation or addition. Its Garrett Park home-addition service describes an in-house team of architects, structural engineers, permit specialists and licensed construction crews handling projects under one contract.</p>
                <p>This is especially useful when existing walls or ceilings are opened for electrical, plumbing, structural or HVAC work. The goal is to complete the mechanical scope before finished surfaces are restored, reducing avoidable conflicts and rework. DMV-GC states that its services are in-house, including Structural, Electrical, Plumbing and HVAC.</p>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group?</h2>
                <div className="trust-bar">
                    <div className="trust-item"><strong>4.9 Rating</strong><span>97+ Reviews</span></div>
                    <div className="trust-item"><strong>MD MHIC #156178</strong></div>
                    <div className="trust-item"><strong>1-Year Warranty</strong></div>
                    <div className="trust-item"><strong>In-House HVAC & Trades</strong></div>
                </div>
                <div className="svc-grid">
                    <div className="svc-card"><h3>One Coordinated Team</h3><p>HVAC can be coordinated with structural, electrical, plumbing and other construction work through one design-build team.</p></div>
                    <div className="svc-card"><h3>Garrett Park Experience</h3><p>Local project pages emphasize the special considerations of Garrett Park's older and historic homes, including coordination with existing systems and architectural conditions.</p></div>
                    <div className="svc-card"><h3>Licensed & Insured</h3><p>DMV-GC lists Maryland MHIC #156178 and DC DLCP #410526000209, with a 1-year workmanship warranty.</p></div>
                    <div className="svc-card"><h3>Free In-Home Consultation</h3><p>Discuss your comfort concerns, remodeling plans or addition requirements with the team before construction begins.</p></div>
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
                <p>DMV General Contracting Group provides residential HVAC and design-build services in <strong>Garrett Park, MD</strong>, including projects around the historic district, Strathmore Avenue, Rokeby Avenue, Oxford Street, the MARC station corridor and nearby Montgomery County communities.</p>
                <div className="areas-grid">
                    <span className="area-pill">Garrett Park, MD</span>
                    <span className="area-pill">Historic District</span>
                    <span className="area-pill">Strathmore Avenue</span>
                    <span className="area-pill">Rokeby Avenue</span>
                    <span className="area-pill">Oxford Street</span>
                    <span className="area-pill">MARC Station Corridor</span>
                    <span className="area-pill">Kensington</span>
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
                    <h2>Need HVAC Services in Garrett Park, MD?</h2>
                    <p>Talk with DMV General Contracting Group about your HVAC repair, replacement, remodeling or home addition project.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default HvacGarrettParkMD;