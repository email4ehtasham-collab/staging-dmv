import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../roofing-city-style.scss";
import "./style.scss";

const RoofingPotomacMD = () => {
    const faqData = [
        {
            question: "How do I know if my Potomac roof needs repair or replacement?",
            answer: "The decision depends on the extent of damage, roof age, condition of surrounding materials and whether problems are recurring. A roof inspection can help determine the appropriate scope."
        },
        {
            question: "Can you repair a leaking roof?",
            answer: "Yes. We can assess visible leak-related damage and identify common problem areas such as damaged shingles, flashing and roof penetrations before recommending the repair."
        },
        {
            question: "Do you handle storm-damaged roofs?",
            answer: "Yes. We can assess storm-related roofing damage and help protect exposed areas while permanent repairs or replacement are planned."
        },
        {
            question: "How often should a residential roof be inspected?",
            answer: "Regular inspections can help identify developing problems before they become larger repairs. Inspection frequency can vary based on roof age, material, weather exposure and previous issues."
        },
        {
            question: "Do you provide roof maintenance?",
            answer: "Yes. Maintenance can include routine inspection, cleaning and minor repairs intended to help keep the roof in serviceable condition."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Initial Consultation",
            desc: "We discuss the roofing concern, project goals, visible symptoms and any previous repair history."
        },
        {
            num: 2,
            title: "Roof Inspection",
            desc: "The roof and accessible problem areas are evaluated to identify visible damage and determine the appropriate scope."
        },
        {
            num: 3,
            title: "Repair or Replacement Plan",
            desc: "We explain the recommended approach, materials and project considerations before work begins."
        },
        {
            num: 4,
            title: "Professional Installation",
            desc: "Our team completes the approved roofing work with attention to preparation, material installation and roof details."
        },
        {
            num: 5,
            title: "Final Review",
            desc: "The completed work is reviewed to confirm that the agreed scope has been addressed and the property is left in proper condition."
        }
    ];

    return (
        <div className="city-service-detail-page roofing-potomac-md">
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
                                    "description": "Licensed and insured general contractor providing residential roofing inspections, repairs, replacement, storm damage response and maintenance in Potomac, Maryland.",
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
                                    "name": "Roofing Services in Potomac, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Potomac" },
                                    "serviceType": "Residential Roofing"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Roofing", "item": "https://www.dmv-gc.com/service/roofing" },
                                        { "@type": "ListItem", "position": 4, "name": "Potomac, MD", "item": "https://www.dmv-gc.com/service/roofing/potomac-md" }
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
                    <Link href="/service/roofing">Roofing</Link><span>›</span>
                    Potomac, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Potomac, MD & Montgomery County</div>
                    <h1>Roofing Services in Potomac, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">🏠 Residential Roofing</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="intro-box">
                    Protect your Potomac home with dependable roof inspection, repair, replacement, emergency response and maintenance services from DMV General Contracting Group. We focus on practical solutions, quality materials and professional installation for residential roofing projects.
                </div>

                {/* ABOUT */}
                <h2>Potomac Roofing Services Built Around Your Home</h2>
                <div className="intro-box">
                    Potomac homes can have complex rooflines, multiple elevations and exterior details that make roofing more than a simple repair. Our team evaluates the condition of the roof, identifies the source of problems and recommends a repair or replacement approach based on the property's needs.
                </div>
                <p>Whether you are dealing with a leak, aging shingles, storm damage or a roof that needs regular maintenance, DMV General Contracting Group can coordinate the roofing work from assessment through completion.</p>

                {/* SERVICES */}
                <h2>Roofing Services We Offer in Potomac, MD</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>🔎 Roof Inspection & Assessment</h3><p>We inspect visible roofing components and problem areas to help determine the condition of the roof and identify issues that may require repair or replacement.</p></div>
                    <div className="svc-card"><h3>🔨 Roof Repair</h3><p>Repair solutions can address leaks, damaged shingles, flashing problems and other localized roofing issues before they develop into larger problems.</p></div>
                    <div className="svc-card"><h3>🏠 Roof Replacement</h3><p>When repair is no longer the practical option, we can coordinate a complete roof replacement using materials selected around the home's architecture, performance requirements and project budget.</p></div>
                    <div className="svc-card"><h3>⛈️ Emergency Roofing</h3><p>Storm damage and active leaks can expose a home to further water intrusion. Emergency response focuses on assessing the issue and protecting the property while permanent work is planned.</p></div>
                    <div className="svc-card"><h3>🧰 Roof Maintenance</h3><p>Routine inspections, cleaning and minor repairs can help homeowners identify developing problems earlier and maintain the roof between larger projects.</p></div>
                    <div className="svc-card"><h3>🏗️ Roofing for Renovation Projects</h3><p>Roofing can be coordinated with additions, remodeling and other exterior construction so roof work integrates properly with the broader project.</p></div>
                </div>

                {/* PROBLEMS */}
                <h2>Common Roofing Problems We Address</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Roof Leaks</h3><p>Leaks around shingles, flashing, penetrations or roof transitions can allow moisture into the attic and interior. Identifying the source is the first step toward an appropriate repair.</p></div>
                    <div className="svc-card"><h3>Storm Damage</h3><p>Wind and severe weather can damage roofing materials and expose vulnerable areas. A post-storm inspection can help document visible issues and determine next steps.</p></div>
                    <div className="svc-card"><h3>Aging Roofing</h3><p>Older roofs may develop recurring repairs, worn materials and reduced weather resistance. An assessment can help determine whether maintenance, repair or replacement makes sense.</p></div>
                    <div className="svc-card"><h3>Flashing & Detail Issues</h3><p>Roof-to-wall transitions, penetrations and other details require careful attention because failures in these areas can lead to localized water intrusion.</p></div>
                </div>

                {/* REPAIR VS REPLACE */}
                <h2>Roof Repair vs. Roof Replacement</h2>
                <p>The right solution depends on the age and condition of the roofing system, the extent of the damage and the likelihood of recurring problems. We evaluate the existing roof before recommending the scope of work.</p>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>Situation</th>
                                    <th>Potential Approach</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Small, localized damage</td>
                                    <td>Targeted repair may be appropriate when the surrounding roofing remains in good condition.</td>
                                </tr>
                                <tr>
                                    <td>Recurring leaks or widespread deterioration</td>
                                    <td>A broader repair or replacement evaluation may be warranted.</td>
                                </tr>
                                <tr>
                                    <td>Severe storm damage</td>
                                    <td>Inspection and immediate protection can be followed by the required permanent repair or replacement work.</td>
                                </tr>
                                <tr>
                                    <td>Older roof nearing the end of its service life</td>
                                    <td>Replacement may provide a more dependable long-term solution than repeated repairs.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* PROCESS */}
                <h2>Our Roofing Process in Potomac</h2>
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

                {/* WHY CHOOSE */}
                <h2>Why Potomac Homeowners Choose DMV General Contracting Group</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Licensed & Insured</h3><p>DMV General Contracting Group is a Maryland MHIC-licensed contractor and carries appropriate insurance for residential contracting work.</p></div>
                    <div className="svc-card"><h3>In-House Coordination</h3><p>Our company also works across structural, electrical, plumbing, HVAC and other construction scopes, allowing roofing work to be coordinated with broader renovation projects.</p></div>
                    <div className="svc-card"><h3>Clear Communication</h3><p>We keep homeowners informed about the condition of the roof, recommended work and project progress.</p></div>
                    <div className="svc-card"><h3>Long-Term Approach</h3><p>Our goal is not simply to address today's roofing issue but to provide a practical solution that supports the home's ongoing protection.</p></div>
                </div>

                {/* AREAS */}
                <h2>Roofing Service Area</h2>
                <div className="areas-grid">
                    <span className="area-pill">Potomac, MD</span>
                    <span className="area-pill">North Bethesda</span>
                    <span className="area-pill">Bethesda</span>
                    <span className="area-pill">Cabin John</span>
                    <span className="area-pill">Chevy Chase</span>
                    <span className="area-pill">Rockville</span>
                    <span className="area-pill">Kensington</span>
                    <span className="area-pill">Garrett Park</span>
                    <span className="area-pill">Silver Spring</span>
                    <span className="area-pill">Wheaton</span>
                    <span className="area-pill">Gaithersburg</span>
                    <span className="area-pill">Laurel</span>
                </div>
                <p>DMV General Contracting Group provides residential roofing services in Potomac and nearby Montgomery County communities.</p>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Roofing in Potomac, MD</h2>
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
                    <h2>Need Roofing Services in Potomac, MD?</h2>
                    <p>Contact DMV General Contracting Group to discuss your roof repair, replacement, inspection or maintenance project.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default RoofingPotomacMD;