import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../hvac-city-style.scss";

const HvacGaithersburgMD = () => {
    const faqData = [
        {
            question: "Does DMV-GC provide HVAC services in Gaithersburg, MD?",
            answer: "Yes. DMV General Contracting Group identifies HVAC as one of its in-house services and coordinates HVAC with residential design-build and remodeling projects."
        },
        {
            question: "Can HVAC be included with a Gaithersburg home addition?",
            answer: "Yes. HVAC can be coordinated with the structural, electrical and plumbing work required for a home addition or major renovation."
        },
        {
            question: "Can you coordinate HVAC with a basement remodel?",
            answer: "Yes. HVAC routing and system requirements can be planned alongside basement framing, electrical, plumbing, drywall and finishing work."
        },
        {
            question: "Can HVAC be coordinated with other remodeling trades?",
            answer: "Yes. DMV-GC's Gaithersburg remodeling content specifically describes HVAC coordination with framing, plumbing, electrical and interior finishing."
        },
        {
            question: "Is DMV-GC licensed in Maryland?",
            answer: "Yes. DMV-GC lists Maryland MHIC license #156178 on its website."
        },
        {
            question: "How do I request a Gaithersburg HVAC consultation?",
            answer: "Call +1 240-730-1292 or email support@dmv-gc.com to discuss your HVAC or remodeling project."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Consultation",
            desc: "Discuss your home's comfort needs, project scope and HVAC goals."
        },
        {
            num: 2,
            title: "Project Assessment",
            desc: "Review the existing layout, planned changes and HVAC coordination requirements."
        },
        {
            num: 3,
            title: "Planning",
            desc: "Develop the HVAC approach alongside related construction and trade requirements."
        },
        {
            num: 4,
            title: "Permits & Coordination",
            desc: "Coordinate applicable permitting and inspection requirements for the project."
        },
        {
            num: 5,
            title: "Installation",
            desc: "Complete HVAC work and coordinate with other trades according to the project schedule."
        },
        {
            num: 6,
            title: "Final Review",
            desc: "Review completed work, address punch-list items and finalize the project."
        }
    ];

    return (
        <div className="city-service-detail-page hvac-gaithersburg-md">
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
                                    "description": "Residential general contractor providing HVAC services as part of its in-house trade services in Gaithersburg, Maryland.",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11810 Grand Park Ave. Suite 500",
                                        "addressLocality": "North Bethesda",
                                        "addressRegion": "MD",
                                        "postalCode": "20852",
                                        "addressCountry": "US"
                                    },
                                    "areaServed": { "@type": "City", "name": "Gaithersburg" }
                                },
                                {
                                    "@type": "Service",
                                    "name": "HVAC Services in Gaithersburg, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Gaithersburg" },
                                    "serviceType": "Heating, Ventilation and Air Conditioning Services"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "HVAC", "item": "https://www.dmv-gc.com/service/hvac" },
                                        { "@type": "ListItem", "position": 4, "name": "Gaithersburg, MD", "item": "https://www.dmv-gc.com/service/hvac/gaithersburg-md" }
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
                    Gaithersburg, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">🏠 HVAC Contractor • Gaithersburg, MD</div>
                    <h1>HVAC Services in Gaithersburg, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">✓ MD MHIC #156178</span>
                        <span className="badge">✓ Licensed & Insured</span>
                        <span className="badge">✓ 1-Year Workmanship Warranty</span>
                        <span className="badge">✓ Available 7 Days a Week</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="intro-box">
                    Reliable residential heating, cooling, ventilation, installation and replacement services for Gaithersburg homeowners. DMV General Contracting Group coordinates HVAC work with remodeling, additions and other in-house trades.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Gaithersburg HVAC projects, coordinated under one team:</strong> DMV-GC lists HVAC among its in-house services alongside structural, electrical and plumbing work, helping coordinate mechanical systems with residential construction projects.
                </div>

                {/* SERVICES */}
                <h2>HVAC Services We Offer in Gaithersburg, MD</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Heating Services</h3><p>Heating system installation, replacement and project coordination designed around your home's comfort needs and existing infrastructure.</p></div>
                    <div className="svc-card"><h3>Air Conditioning</h3><p>Residential cooling solutions for seasonal comfort, including new system installation, replacement and integration with renovation projects.</p></div>
                    <div className="svc-card"><h3>HVAC Installation</h3><p>Plan and install HVAC systems as part of new construction, major renovations, additions or whole-home upgrades.</p></div>
                    <div className="svc-card"><h3>HVAC Replacement</h3><p>Replace aging or outdated equipment while coordinating equipment placement, ductwork, electrical requirements and related construction.</p></div>
                    <div className="svc-card"><h3>Ventilation & Airflow</h3><p>Improve airflow and ventilation as part of an HVAC upgrade, remodeling project or home addition.</p></div>
                    <div className="svc-card"><h3>HVAC for Remodeling</h3><p>Coordinate HVAC routing and equipment requirements with walls, ceilings, electrical, plumbing and structural changes.</p></div>
                    <div className="svc-card"><h3>HVAC for Home Additions</h3><p>Extend or configure HVAC systems for new living areas while coordinating rough-ins and construction sequencing.</p></div>
                    <div className="svc-card"><h3>Indoor Comfort Upgrades</h3><p>Upgrade heating, cooling and ventilation as part of a broader home improvement plan focused on comfort and functionality.</p></div>
                </div>

                {/* TABLE */}
                <h2>Common HVAC Needs in Gaithersburg Homes</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>HVAC Need</th>
                                    <th>What We Can Coordinate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>New HVAC System</strong></td>
                                    <td>System planning, installation coordination and integration with the home's existing construction.</td>
                                </tr>
                                <tr>
                                    <td><strong>Heating or Cooling Replacement</strong></td>
                                    <td>Equipment replacement with attention to electrical, airflow, ductwork and construction requirements.</td>
                                </tr>
                                <tr>
                                    <td><strong>Home Addition</strong></td>
                                    <td>HVAC extension or new configuration for added rooms and remodeled living space.</td>
                                </tr>
                                <tr>
                                    <td><strong>Whole-Home Renovation</strong></td>
                                    <td>HVAC planning alongside structural, electrical, plumbing and interior construction work.</td>
                                </tr>
                                <tr>
                                    <td><strong>Basement Finish</strong></td>
                                    <td>HVAC zone extension and system coordination for newly finished basement living areas.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* REMODELING */}
                <h2>HVAC for Remodeling & Home Additions in Gaithersburg</h2>
                <div className="banner">
                    <p>Gaithersburg includes established neighborhoods as well as planned communities such as Kentlands, Lakelands and Crown Farm. DMV-GC's local remodeling content describes HVAC coordination with framing, plumbing, electrical and interior finishing as part of larger renovation projects.</p>
                    <p>For additions and renovations, HVAC can be coordinated with structural, electrical and plumbing work so mechanical routing, equipment placement and rough-ins fit the updated floor plan.</p>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for HVAC?</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>In-House HVAC Capability</h3><p>DMV-GC identifies HVAC as one of its in-house services alongside structural, electrical and plumbing work.</p></div>
                    <div className="svc-card"><h3>Licensed Maryland Contractor</h3><p>DMV-GC lists Maryland MHIC license #156178 and serves residential construction and home improvement projects in Gaithersburg.</p></div>
                    <div className="svc-card"><h3>One-Team Coordination</h3><p>HVAC can be coordinated with additions, basement finishes, remodeling and other construction work through one project team.</p></div>
                    <div className="svc-card"><h3>Permit & Project Coordination</h3><p>DMV-GC provides design-build, permit processing and project management as part of its in-house residential construction services.</p></div>
                </div>

                {/* PROCESS */}
                <h2>Our Gaithersburg HVAC Process</h2>
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
                <p>DMV General Contracting Group provides residential construction services in Gaithersburg and surrounding Montgomery County communities. Its Gaithersburg service content references local communities including Kentlands, Lakelands and Crown Farm and describes HVAC coordination with other renovation trades.</p>
                <p>We can coordinate HVAC with home additions, remodeling, kitchens, bathrooms, basements and other residential construction projects.</p>
                <div className="areas-grid">
                    <span className="area-pill">Gaithersburg, MD</span>
                    <span className="area-pill">Kentlands</span>
                    <span className="area-pill">Lakelands</span>
                    <span className="area-pill">Crown Farm</span>
                    <span className="area-pill">Rockville</span>
                    <span className="area-pill">North Bethesda</span>
                    <span className="area-pill">Silver Spring</span>
                    <span className="area-pill">Washington, DC</span>
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
                    <h2>Ready to Improve Your Gaithersburg Home's HVAC?</h2>
                    <p>Talk with DMV General Contracting Group about heating, cooling, ventilation, HVAC replacement, installation or HVAC coordination for your next renovation or addition.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default HvacGaithersburgMD;