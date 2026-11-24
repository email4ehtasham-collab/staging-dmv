import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../hvac-city-style.scss";

const HvacBethesdaMD = () => {
    const faqData = [
        {
            question: "Does DMV General Contracting Group provide HVAC services in Bethesda?",
            answer: "Yes. DMV General Contracting Group identifies HVAC as one of its in-house services alongside structural, electrical and plumbing work."
        },
        {
            question: "Can HVAC be included in a Bethesda home renovation?",
            answer: "Yes. HVAC can be coordinated with remodeling, additions and other residential construction work so mechanical systems are planned alongside the overall project."
        },
        {
            question: "Can HVAC be coordinated with a home addition?",
            answer: "Yes. New additions may require HVAC planning, mechanical rough-in and coordination with the existing home system."
        },
        {
            question: "What does HVAC include?",
            answer: "HVAC stands for heating, ventilation and air conditioning. Residential HVAC work can involve heating, cooling, airflow, ventilation and related mechanical-system coordination."
        },
        {
            question: "Does DMV coordinate HVAC with other trades?",
            answer: "Yes. DMV General Contracting Group states that its services are handled in-house and include structural, electrical, plumbing and HVAC, supporting coordination across residential projects."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Consultation & Project Assessment",
            desc: "We discuss the home's comfort needs and determine how HVAC fits into the overall project."
        },
        {
            num: 2,
            title: "System & Scope Planning",
            desc: "HVAC requirements are coordinated with the property's existing conditions and the planned construction or renovation scope."
        },
        {
            num: 3,
            title: "Mechanical Coordination",
            desc: "HVAC work is coordinated with structural, electrical, plumbing, framing and other project activities."
        },
        {
            num: 4,
            title: "Installation & Rough-In",
            desc: "Where applicable, HVAC components and ductwork are installed or roughed in according to the project plan."
        },
        {
            num: 5,
            title: "Integration With the Home",
            desc: "The HVAC system is integrated with the renovated, remodeled or newly constructed areas."
        },
        {
            num: 6,
            title: "Project Completion",
            desc: "The completed HVAC scope is reviewed as part of the overall construction or remodeling project."
        }
    ];

    return (
        <div className="city-service-detail-page hvac-bethesda-md">
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
                                    "description": "Residential general contractor providing HVAC services as part of its in-house trade services in Bethesda, Maryland.",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11810 Grand Park Ave. Suite 500",
                                        "addressLocality": "North Bethesda",
                                        "addressRegion": "MD",
                                        "postalCode": "20852",
                                        "addressCountry": "US"
                                    },
                                    "areaServed": { "@type": "City", "name": "Bethesda" }
                                },
                                {
                                    "@type": "Service",
                                    "name": "HVAC Services in Bethesda, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Bethesda" },
                                    "serviceType": "Heating, Ventilation and Air Conditioning Services"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "HVAC", "item": "https://www.dmv-gc.com/service/hvac" },
                                        { "@type": "ListItem", "position": 4, "name": "Bethesda, MD", "item": "https://www.dmv-gc.com/service/hvac/bethesda-md" }
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
                    Bethesda, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">🏠 HVAC Contractor • Bethesda, MD</div>
                    <h1>HVAC Services in Bethesda, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ 1-Year Warranty</span>
                        <span className="badge">✓ Free In-Home Consultation</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="intro-box">
                    DMV General Contracting Group provides HVAC services for Bethesda homeowners as part of its in-house residential construction and remodeling capabilities. Our HVAC work supports comfortable, functional homes with coordinated heating, cooling and ventilation solutions.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Bethesda HVAC Services:</strong> Reliable heating, cooling and ventilation are essential to year-round comfort. DMV General Contracting Group coordinates HVAC work with remodeling, renovation and construction projects throughout Bethesda and nearby Montgomery County communities.
                </div>

                {/* SERVICES */}
                <h2>HVAC Services We Offer in Bethesda, MD</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Heating Services</h3><p>HVAC solutions designed to support dependable home heating and comfortable indoor temperatures during Maryland winters.</p></div>
                    <div className="svc-card"><h3>Air Conditioning</h3><p>Cooling solutions for Bethesda homes, with attention to system performance, comfort and integration with the home's existing layout.</p></div>
                    <div className="svc-card"><h3>HVAC Installation</h3><p>HVAC installation coordinated with residential construction, renovation and remodeling projects where new or updated mechanical systems are required.</p></div>
                    <div className="svc-card"><h3>HVAC Replacement</h3><p>Replacement planning for aging or outdated HVAC equipment, with the system selected around the home's needs and project scope.</p></div>
                    <div className="svc-card"><h3>Ventilation</h3><p>Ventilation planning and coordination to support airflow and indoor comfort as part of a residential HVAC project.</p></div>
                    <div className="svc-card"><h3>HVAC Coordination for Remodeling</h3><p>HVAC work can be coordinated with structural, electrical, plumbing, drywall and other renovation trades through DMV's design-build workflow.</p></div>
                    <div className="svc-card"><h3>New HVAC for Additions</h3><p>HVAC rough-in and system coordination for home additions so new living areas can be integrated with the home's mechanical systems.</p></div>
                    <div className="svc-card"><h3>Indoor Comfort Upgrades</h3><p>HVAC improvements planned around comfort, airflow and the overall goals of a home renovation or construction project.</p></div>
                </div>

                {/* TABLE */}
                <h2>HVAC Solutions for Bethesda Homes</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>HVAC Need</th>
                                    <th>Typical Project Focus</th>
                                    <th>Key Consideration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Heating</strong></td>
                                    <td>Winter comfort and dependable indoor temperatures</td>
                                    <td>System condition, home layout and heating requirements</td>
                                </tr>
                                <tr>
                                    <td><strong>Cooling</strong></td>
                                    <td>Summer comfort and temperature control</td>
                                    <td>Existing system, home size and cooling requirements</td>
                                </tr>
                                <tr>
                                    <td><strong>Ventilation</strong></td>
                                    <td>Airflow and indoor comfort</td>
                                    <td>Existing ductwork, layout and project scope</td>
                                </tr>
                                <tr>
                                    <td><strong>Replacement</strong></td>
                                    <td>Updating aging HVAC equipment</td>
                                    <td>System compatibility and overall project requirements</td>
                                </tr>
                                <tr>
                                    <td><strong>Renovation Integration</strong></td>
                                    <td>Coordinating HVAC with remodeling or additions</td>
                                    <td>Mechanical rough-in must be sequenced with other trades</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* REMODELING */}
                <h2>HVAC for Bethesda Remodeling & Home Additions</h2>
                <p>HVAC is often an important part of a larger home renovation or addition. DMV General Contracting Group's in-house services include HVAC alongside structural, electrical and plumbing work. This allows mechanical systems to be coordinated with the construction sequence instead of being treated as a separate afterthought.</p>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Home Additions</h3><p>New spaces may require HVAC planning and ductwork coordination so the addition works with the home's overall mechanical system.</p></div>
                    <div className="svc-card"><h3>Whole-Home Remodeling</h3><p>HVAC can be coordinated with electrical, plumbing, framing, drywall and finishes during a comprehensive renovation.</p></div>
                    <div className="svc-card"><h3>Space Reconfiguration</h3><p>When walls, rooms or layouts change, HVAC planning can help maintain appropriate comfort and airflow throughout the updated space.</p></div>
                </div>

                {/* QUALITY */}
                <h2>What Makes a Quality HVAC Project?</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>🏠 Proper Planning</h3><p>HVAC requirements are considered alongside the home's layout, renovation scope and mechanical needs.</p></div>
                    <div className="svc-card"><h3>🌡️ Comfort Focus</h3><p>Heating and cooling solutions are planned around comfortable indoor temperatures and practical use of the home.</p></div>
                    <div className="svc-card"><h3>💨 Airflow & Ventilation</h3><p>Ventilation and ductwork coordination are considered where the project requires changes to airflow or room layout.</p></div>
                    <div className="svc-card"><h3>🔧 Trade Coordination</h3><p>HVAC work is coordinated with other in-house construction trades to support an organized project sequence.</p></div>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for HVAC in Bethesda?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏠</div>
                        <strong>Residential Construction Experience</strong>
                        <span>HVAC is handled as part of DMV's broader residential construction and remodeling capabilities.</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🛠️</div>
                        <strong>In-House Trade Coordination</strong>
                        <span>DMV states that its in-house services include structural, electrical, plumbing and HVAC.</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9-Star Reputation</strong>
                        <span>97+ reviews and a full-service design-build approach.</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📞</div>
                        <strong>Responsive Service</strong>
                        <span>Available 7 days a week for residential project consultations.</span>
                    </div>
                </div>

                {/* PROCESS */}
                <h2>Our HVAC Project Process in Bethesda</h2>
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
                <h2>Serving Bethesda and Surrounding Areas</h2>
                <div className="areas-grid">
                    <span className="area-pill">Bethesda, MD</span>
                    <span className="area-pill">North Bethesda</span>
                    <span className="area-pill">Chevy Chase</span>
                    <span className="area-pill">Garrett Park</span>
                    <span className="area-pill">Rockville</span>
                    <span className="area-pill">Cabin John</span>
                    <span className="area-pill">Potomac</span>
                    <span className="area-pill">Silver Spring</span>
                    <span className="area-pill">Washington, DC</span>
                </div>
                <div className="banner">
                    <strong>Bethesda HVAC Contractor:</strong> DMV General Contracting Group serves homeowners in Bethesda and nearby communities with residential HVAC coordination, heating, cooling, ventilation and remodeling-related mechanical services.
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions — HVAC Services in Bethesda, MD</h2>
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
                    <h2>Ready for an HVAC Project in Bethesda?</h2>
                    <p>Talk with DMV General Contracting Group about HVAC for your home renovation, addition, construction project or comfort upgrade.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default HvacBethesdaMD;
