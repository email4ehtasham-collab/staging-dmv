import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../hvac-city-style.scss";

const HvacLaurelMD = () => {
    const faqData = [
        {
            question: "Does DMV-GC provide HVAC services in Laurel, MD?",
            answer: "Yes. HVAC is one of DMV-GC's in-house services, alongside structural, electrical and plumbing work."
        },
        {
            question: "Can you extend HVAC into a Laurel home addition?",
            answer: "Yes. Licensed HVAC technicians can extend systems into additions as part of a coordinated design-build project."
        },
        {
            question: "Can HVAC be included in a Laurel remodeling project?",
            answer: "Yes. HVAC can be coordinated with structural changes, electrical, plumbing, framing and interior finishes during a renovation."
        },
        {
            question: "Is DMV-GC licensed for work in Laurel?",
            answer: "Yes. DMV General Contracting Group holds Maryland MHIC license #156178 and serves Laurel projects across the applicable Maryland jurisdictions."
        },
        {
            question: "Does HVAC permitting vary in Laurel?",
            answer: "Yes. Laurel-area properties may fall under different permit authorities. DMV-GC confirms the correct jurisdiction by parcel before permit-required work begins."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Consultation",
            desc: "Discuss comfort concerns, renovation goals, existing equipment and the home's layout."
        },
        {
            num: 2,
            title: "Site Assessment",
            desc: "Review the existing HVAC system, available space and project conditions."
        },
        {
            num: 3,
            title: "System Planning",
            desc: "Develop an HVAC approach that fits the home's design and construction requirements."
        },
        {
            num: 4,
            title: "Permit Coordination",
            desc: "Coordinate required permit and inspection requirements with the applicable jurisdiction."
        },
        {
            num: 5,
            title: "Installation",
            desc: "Complete HVAC work with the broader construction team and coordinate related trades."
        },
        {
            num: 6,
            title: "Final Review",
            desc: "Review completed work and confirm the HVAC scope is integrated with the finished project."
        }
    ];

    return (
        <div className="city-service-detail-page hvac-laurel-md">
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
                                    "description": "Design-build contractor providing in-house HVAC and other construction services in Laurel, Maryland.",
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
                                    "name": "HVAC Services in Laurel, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Laurel" },
                                    "serviceType": "Heating, Ventilation and Air Conditioning Services"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "HVAC", "item": "https://www.dmv-gc.com/service/hvac" },
                                        { "@type": "ListItem", "position": 4, "name": "Laurel, MD", "item": "https://www.dmv-gc.com/service/hvac/laurel-md" }
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
                    Laurel, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">🏠 HVAC Contractor • Laurel, MD</div>
                    <h1>HVAC Services in Laurel, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ 1-Year Warranty</span>
                        <span className="badge">✓ Free Estimate</span>
                        <span className="badge">✓ Available 7 Days a Week</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional heating, cooling, ventilation and HVAC installation services for Laurel homes, renovations, additions and design-build projects. DMV-GC coordinates HVAC with structural, electrical, plumbing and construction work through an in-house team.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>HVAC for Laurel renovations & additions:</strong> Laurel projects can fall under different permit jurisdictions depending on the parcel. DMV-GC confirms the applicable authority and coordinates HVAC work with the broader construction scope. Our in-house HVAC technicians can extend systems into additions and remodeled areas.
                </div>

                {/* SERVICES */}
                <h2>HVAC Services We Offer in Laurel, MD</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Heating Services</h3><p>Heating system installation, replacement and improvements designed around your home's existing layout, comfort needs and renovation plans.</p></div>
                    <div className="svc-card"><h3>Air Conditioning</h3><p>Cooling solutions for Laurel homes, including system replacement, installation and coordination with remodeled spaces.</p></div>
                    <div className="svc-card"><h3>HVAC Installation</h3><p>New HVAC systems for renovations, additions and other residential construction projects, with mechanical planning integrated into the build.</p></div>
                    <div className="svc-card"><h3>HVAC Replacement</h3><p>Replacement planning for aging or inefficient equipment, including coordination with electrical and structural requirements where needed.</p></div>
                    <div className="svc-card"><h3>Ventilation & Airflow</h3><p>Ductwork, airflow and ventilation planning to help distribute conditioned air effectively throughout updated spaces.</p></div>
                    <div className="svc-card"><h3>HVAC for Remodeling</h3><p>HVAC coordination for kitchens, bathrooms, basements, open-concept conversions and whole-home renovations.</p></div>
                    <div className="svc-card"><h3>HVAC for Home Additions</h3><p>Extend heating and cooling systems into new rooms, rear additions and other expanded living areas while coordinating with the construction team.</p></div>
                    <div className="svc-card"><h3>Indoor Comfort Upgrades</h3><p>System and airflow improvements planned around the home's layout, insulation, electrical capacity and overall renovation scope.</p></div>
                </div>

                {/* TABLE */}
                <h2>Common HVAC Needs in Laurel Homes</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>Project Need</th>
                                    <th>How DMV-GC Helps</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Heating or cooling replacement</strong></td>
                                    <td>Plan equipment replacement as part of a coordinated residential project.</td>
                                </tr>
                                <tr>
                                    <td><strong>Home addition</strong></td>
                                    <td>Extend HVAC systems into new living areas and coordinate mechanical rough-in with framing and finishes.</td>
                                </tr>
                                <tr>
                                    <td><strong>Basement finishing</strong></td>
                                    <td>Plan HVAC distribution for newly finished basement rooms and remodeled areas.</td>
                                </tr>
                                <tr>
                                    <td><strong>Open-concept renovation</strong></td>
                                    <td>Coordinate HVAC with structural changes, electrical work and revised room layouts.</td>
                                </tr>
                                <tr>
                                    <td><strong>Whole-home renovation</strong></td>
                                    <td>Integrate HVAC with plumbing, electrical, structural and finish work through one design-build workflow.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* REMODELING */}
                <h2>HVAC for Remodeling & Home Additions in Laurel</h2>
                <p>Laurel contains established residential neighborhoods with colonial and split-level homes as well as newer residential communities. HVAC work during remodeling or an addition should be coordinated before walls and ceilings are closed. DMV-GC's in-house HVAC technicians work alongside architects, structural engineers, electricians, plumbers and construction crews to plan mechanical systems as part of the project.</p>
                <p>For home additions, licensed HVAC technicians can extend systems into the new space while the project team manages structural work, electrical, plumbing, finishes and required inspections.</p>

                {/* WHY CHOOSE */}
                <div className="banner">
                    <h2>Why Choose DMV-GC for HVAC in Laurel?</h2>
                    <ul>
                        <li><strong>In-house HVAC technicians</strong> integrated with our design-build team.</li>
                        <li><strong>One coordinated project team</strong> for structural, electrical, plumbing and HVAC work.</li>
                        <li><strong>Permit coordination</strong> with the correct Laurel-area authority for the specific property.</li>
                        <li><strong>Maryland MHIC #156178</strong> with licensed and insured construction services.</li>
                        <li><strong>1-year workmanship warranty</strong> on qualifying work.</li>
                        <li><strong>4.9-star rating and 97+ reviews</strong> shown on DMV-GC's Laurel service pages.</li>
                    </ul>
                </div>

                {/* PROCESS */}
                <h2>Our HVAC & Design-Build Process</h2>
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
                <h2>HVAC Service Area in Laurel, MD</h2>
                <p>DMV-GC serves Laurel and nearby residential communities, including <strong>West Laurel, Montpelier, Laurel Lakes, Russett, Old Town Laurel and Bond Mill</strong>. Service availability and permit requirements depend on the specific property.</p>
                <div className="areas-grid">
                    <span className="area-pill">Laurel, MD</span>
                    <span className="area-pill">West Laurel</span>
                    <span className="area-pill">Montpelier</span>
                    <span className="area-pill">Laurel Lakes</span>
                    <span className="area-pill">Russett</span>
                    <span className="area-pill">Old Town Laurel</span>
                    <span className="area-pill">Bond Mill</span>
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
                    <h2>Need HVAC Services in Laurel, MD?</h2>
                    <p>Talk with DMV General Contracting Group about HVAC installation, replacement, remodeling or home-addition needs.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default HvacLaurelMD;