import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../hardscaping-city-style.scss";
import "./style.scss";

const HardscapingLaurelMD = () => {
    const faqData = [
        {
            question: "What hardscaping services do you provide in Laurel?",
            answer: "We provide patio installation, pavers, walkways, pathways, retaining walls, outdoor living spaces, landscape borders, and custom hardscape construction."
        },
        {
            question: "Can you design a custom patio?",
            answer: "Yes. We can discuss layout, materials, property conditions, and your outdoor living goals."
        },
        {
            question: "Do you install pavers?",
            answer: "Yes. Pavers can be installed for patios, walkways, paths, and other outdoor surfaces based on site requirements."
        },
        {
            question: "Are retaining walls suitable for every property?",
            answer: "Requirements depend on elevation, soil, drainage, site conditions, and applicable requirements. A project assessment is recommended."
        },
        {
            question: "How can I schedule a consultation?",
            answer: "Call +1 240-730-1292 or email support@dmv-gc.com."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Discuss Your Ideas",
            desc: "Review your goals, preferred features, property needs, and intended use."
        },
        {
            num: 2,
            title: "Review the Site",
            desc: "Consider layout, access, slope, surface conditions, and site requirements."
        },
        {
            num: 3,
            title: "Plan the Design",
            desc: "Discuss materials, dimensions, features, and overall outdoor layout."
        },
        {
            num: 4,
            title: "Prepare the Area",
            desc: "Complete required site preparation and installation planning."
        },
        {
            num: 5,
            title: "Build the Hardscape",
            desc: "Install planned features with attention to alignment, stability, and finish."
        },
        {
            num: 6,
            title: "Final Walkthrough",
            desc: "Review the completed project and discuss care recommendations."
        }
    ];

    return (
        <div className="city-service-detail-page hardscaping-laurel-md hardscaping-page">
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
                                    "description": "Professional hardscaping services in Laurel, MD including patios, pavers, walkways, retaining walls, and outdoor living spaces.",
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
                                    "name": "Hardscaping Services in Laurel, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Laurel" },
                                    "serviceType": "Hardscaping, Patio Installation, Paver Installation, Walkways, Retaining Walls, Outdoor Living"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Hardscaping", "item": "https://www.dmv-gc.com/service/hardscaping" },
                                        { "@type": "ListItem", "position": 4, "name": "Laurel, MD", "item": "https://www.dmv-gc.com/service/hardscaping/laurel-md" }
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
                    <Link href="/service/hardscaping">Hardscaping</Link><span>›</span>
                    Laurel, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">⚡ Hardscaping Contractor • Laurel, MD — Patios, Pavers & Outdoor Living</div>
                    <h1>Hardscaping Services in Laurel, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">Patio Installation</span>
                        <span className="badge">Paver Installation</span>
                        <span className="badge">Walkways</span>
                        <span className="badge">Retaining Walls</span>
                        <span className="badge">Outdoor Living</span>
                    </div>
                </div>

                <div className="intro-box">
                    Enhance your outdoor property with professional hardscaping services from DMV General Contracting Group. We provide patios, paver installation, walkways, retaining walls, outdoor living spaces, and custom hardscape construction.
                </div>

                {/* INTRO SECTION */}
                <h2>Reliable Hardscaping for Laurel Properties</h2>
                <p>Hardscaping adds structure, usability, and visual appeal to outdoor areas. DMV General Contracting Group provides hardscaping solutions for homeowners in Laurel, MD, including patios, pathways, pavers, retaining walls, and outdoor gathering spaces.</p>
                <p>Our team can help plan outdoor improvements that complement your home&apos;s architecture, property layout, drainage requirements, and landscaping goals.</p>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Serving Laurel, MD:</strong> Custom hardscaping for patios, walkways, pavers, retaining walls, outdoor entertaining areas, and exterior improvements.
                </div>

                {/* SERVICES */}
                <h2>Complete Hardscaping Services in Laurel</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>🧱 Patio Installation</h3><p>Create an outdoor area for relaxing, dining, and entertaining with a patio layout suited to your property.</p></div>
                    <div className="svc-card"><h3>🔲 Paver Installation</h3><p>Install attractive and functional pavers for patios, walkways, paths, and outdoor gathering areas.</p></div>
                    <div className="svc-card"><h3>🚶 Walkways & Pathways</h3><p>Improve access around your property with thoughtfully designed walkways and garden paths.</p></div>
                    <div className="svc-card"><h3>🧱 Retaining Walls</h3><p>Plan retaining walls that help define outdoor spaces and address suitable elevation and landscape needs.</p></div>
                    <div className="svc-card"><h3>🔥 Outdoor Living Spaces</h3><p>Create hardscape zones for seating, dining, entertaining, fire-pit areas, and outdoor recreation.</p></div>
                    <div className="svc-card"><h3>🌿 Landscape Edging</h3><p>Use hardscape borders to separate planting beds, paths, patios, and lawn spaces.</p></div>
                    <div className="svc-card"><h3>🏡 Front Entry Improvements</h3><p>Upgrade entrances with steps, pathways, pavers, landing areas, and coordinated exterior features.</p></div>
                    <div className="svc-card"><h3>🏗️ Custom Hardscape Construction</h3><p>Coordinate larger outdoor improvements with broader design-build and construction requirements.</p></div>
                </div>

                {/* COMMON NEEDS TABLE */}
                <h2>Common Hardscaping Needs in Laurel</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Project Type</th>
                                    <th>How DMV-GC Can Help</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Patio upgrades</td>
                                    <td>Plan and construct outdoor patio areas for seating, dining, and entertaining.</td>
                                </tr>
                                <tr>
                                    <td>Uneven outdoor areas</td>
                                    <td>Review layout, grading, steps, walkways, and access considerations.</td>
                                </tr>
                                <tr>
                                    <td>Worn or outdated pavers</td>
                                    <td>Discuss repair, replacement, or updated layout options.</td>
                                </tr>
                                <tr>
                                    <td>Outdoor entertaining</td>
                                    <td>Develop hardscape zones for seating, gathering, and recreation.</td>
                                </tr>
                                <tr>
                                    <td>Elevation changes</td>
                                    <td>Consider retaining walls, steps, and related site features where appropriate.</td>
                                </tr>
                                <tr>
                                    <td>Renovation projects</td>
                                    <td>Coordinate hardscaping with additions, exterior improvements, and construction work.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">✓</div>
                        <strong>Experienced Team</strong>
                        <span></span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">✓</div>
                        <strong>Quality Workmanship</strong>
                        <span></span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">✓</div>
                        <strong>Design-Build Expertise</strong>
                        <span></span>
                    </div>
                </div>
                <p>DMV General Contracting Group focuses on dependable communication, quality craftsmanship, and practical construction solutions. Our broader in-house capabilities include structural, electrical, plumbing, and HVAC services.</p>

                {/* PROCESS */}
                <h2>Our Hardscaping Process</h2>
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

                {/* RENOVATIONS */}
                <h2>Hardscaping for Laurel Outdoor Renovations</h2>
                <p>Patios, walkways, retaining walls, steps, and outdoor gathering areas can be planned alongside additions, structural improvements, landscaping, and other property upgrades. DMV-GC can help coordinate hardscape features with broader project goals.</p>

                {/* SERVICE AREA */}
                <h2>Hardscaping Service Area</h2>
                <p>DMV General Contracting Group serves Laurel, MD, and surrounding communities throughout Maryland and the Washington, DC metropolitan area.</p>

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
                    <h2>Need Hardscaping Services in Laurel, MD?</h2>
                    <p>Contact DMV General Contracting Group to discuss your outdoor construction project.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default HardscapingLaurelMD;