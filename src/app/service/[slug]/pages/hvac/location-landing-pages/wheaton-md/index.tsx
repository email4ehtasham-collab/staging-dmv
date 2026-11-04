import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../hvac-city-style.scss";

const HvacWheatonMD = () => {
    const faqData = [
        {
            question: "Does DMV-GC provide HVAC services in Wheaton, MD?",
            answer: "Yes. DMV General Contracting Group lists HVAC among its in-house services, and its Wheaton design-build page specifically identifies HVAC technicians for local projects."
        },
        {
            question: "Can HVAC be included with a Wheaton home addition?",
            answer: "Yes. DMV-GC's Wheaton home-addition service identifies HVAC as an in-house trade, allowing HVAC work to be coordinated with the addition and other construction."
        },
        {
            question: "Can you add HVAC zones to a basement?",
            answer: "Yes. DMV-GC's Wheaton design-build service specifically mentions HVAC system extensions and zone additions for basement finishes."
        },
        {
            question: "Do you coordinate Montgomery County permits?",
            answer: "DMV-GC states that its Wheaton permit specialists file applicable MoCo DPS permits and manage the inspection process for projects. Specific HVAC permit requirements depend on the scope of work."
        },
        {
            question: "Is DMV-GC licensed in Maryland?",
            answer: "Yes. DMV-GC lists Maryland MHIC license #156178 on its website."
        },
        {
            question: "How do I request a Wheaton HVAC consultation?",
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
            desc: "Coordinate applicable Montgomery County permit and inspection requirements."
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
        <div className="city-service-detail-page hvac-wheaton-md">
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
                                    "description": "Residential general contractor providing HVAC services as part of its in-house trade services in Wheaton, Maryland.",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11810 Grand Park Ave. Suite 500",
                                        "addressLocality": "North Bethesda",
                                        "addressRegion": "MD",
                                        "postalCode": "20852",
                                        "addressCountry": "US"
                                    },
                                    "areaServed": { "@type": "City", "name": "Wheaton" }
                                },
                                {
                                    "@type": "Service",
                                    "name": "HVAC Services in Wheaton, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Wheaton" },
                                    "serviceType": "Heating, Ventilation and Air Conditioning Services"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "HVAC", "item": "https://www.dmv-gc.com/service/hvac" },
                                        { "@type": "ListItem", "position": 4, "name": "Wheaton, MD", "item": "https://www.dmv-gc.com/service/hvac/wheaton-md" }
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
                    Wheaton, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">🏠 HVAC Contractor • Wheaton, MD</div>
                    <h1>HVAC Services in Wheaton, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">✓ MD MHIC #156178</span>
                        <span className="badge">✓ Licensed & Insured</span>
                        <span className="badge">✓ 1-Year Workmanship Warranty</span>
                        <span className="badge">✓ Available 7 Days a Week</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="intro-box">
                    Reliable residential heating, cooling, ventilation, installation and replacement services for Wheaton homeowners. DMV General Contracting Group coordinates HVAC work with remodeling, additions and other in-house trades.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Wheaton HVAC projects, coordinated under one team:</strong> DMV-GC lists HVAC technicians among its in-house trades and coordinates HVAC with structural, electrical, plumbing and remodeling work.
                </div>

                {/* SERVICES */}
                <h2>HVAC Services We Offer in Wheaton, MD</h2>
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
                <h2>Common HVAC Needs in Wheaton Homes</h2>
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
                <h2>HVAC for Remodeling & Home Additions in Wheaton</h2>
                <div className="banner">
                    <p>DMV General Contracting Group's Wheaton design-build service specifically identifies HVAC technicians for system extensions and zone additions for Wheaton additions and basement finishes. Its home-addition service also lists HVAC among the in-house services available for Wheaton projects.</p>
                    <p>For remodeling projects, HVAC can be coordinated with structural, electrical, plumbing, drywall and other trades so mechanical routing and equipment requirements fit the updated floor plan.</p>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for HVAC?</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>In-House HVAC Technicians</h3><p>DMV-GC identifies HVAC technicians as part of its in-house trade team for Wheaton projects.</p></div>
                    <div className="svc-card"><h3>Licensed Maryland Contractor</h3><p>DMV-GC lists Maryland MHIC license #156178 and serves residential construction and home improvement projects in Wheaton.</p></div>
                    <div className="svc-card"><h3>One-Team Coordination</h3><p>HVAC can be coordinated with additions, basement finishes, remodeling and other construction work through one project team.</p></div>
                    <div className="svc-card"><h3>Montgomery County Permit Support</h3><p>DMV-GC states that its Wheaton permit team files applicable MoCo DPS permits and manages inspection scheduling for projects.</p></div>
                </div>

                {/* PROCESS */}
                <h2>Our Wheaton HVAC Process</h2>
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
                <p>DMV General Contracting Group provides residential HVAC and construction services throughout Wheaton and nearby Montgomery County communities. Its Wheaton design-build service references Wheaton Hills, Glenmont, Arcola and neighborhoods around the Wheaton Metro station, and identifies HVAC technicians as part of its in-house trade team.</p>
                <p>We can coordinate HVAC with home additions, remodeling, kitchens, bathrooms, basements and other residential construction projects.</p>
                <div className="areas-grid">
                    <span className="area-pill">Wheaton, MD</span>
                    <span className="area-pill">Wheaton Hills</span>
                    <span className="area-pill">Glenmont</span>
                    <span className="area-pill">Arcola</span>
                    <span className="area-pill">Wheaton Metro Station</span>
                    <span className="area-pill">Silver Spring</span>
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
                    <h2>Ready to Improve Your Wheaton Home's HVAC?</h2>
                    <p>Talk with DMV General Contracting Group about heating, cooling, ventilation, HVAC replacement, installation or HVAC coordination for your next renovation or addition.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default HvacWheatonMD;