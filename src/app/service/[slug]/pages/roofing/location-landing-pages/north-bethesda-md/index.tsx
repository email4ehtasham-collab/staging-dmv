import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../roofing-city-style.scss";

const RoofingNorthBethesdaMD = () => {
    const faqData = [
        {
            question: "How much does roof replacement cost in North Bethesda, MD?",
            answer: "Roofing costs vary by roof size, pitch, existing material, tear-off requirements, decking condition, flashing, ventilation and selected roofing material. DMV General Contracting Group provides a project-specific estimate after inspecting the roof and property."
        },
        {
            question: "How do I know if my North Bethesda roof needs repair or replacement?",
            answer: "A professional inspection can identify leaks, damaged shingles, flashing failures, aging materials, ventilation problems and underlying concerns. Localized damage may be repairable, while widespread deterioration or an aging roof may make replacement more practical."
        },
        {
            question: "Does DMV General Contracting Group provide emergency roofing in North Bethesda?",
            answer: "Yes. Emergency roofing response is available for urgent problems such as storm damage and active leaks, including assessment and temporary protection before permanent repairs."
        },
        {
            question: "What roofing materials are available in North Bethesda, MD?",
            answer: "Options can include traditional asphalt shingles, metal roofing and other premium roofing materials. The best choice depends on the home's architecture, local conditions, performance goals and budget."
        },
        {
            question: "Does DMV General Contracting Group provide roof maintenance in North Bethesda?",
            answer: "Yes. Roof maintenance can include routine inspections, cleaning and minor repairs intended to identify problems early and extend roof service life."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Inspection & Consultation",
            desc: "We assess the roof, discuss concerns and identify visible issues affecting performance."
        },
        {
            num: 2,
            title: "Repair or Replacement Recommendation",
            desc: "We explain whether localized repair, maintenance or a complete replacement is appropriate for the property's condition."
        },
        {
            num: 3,
            title: "Material & Scope Selection",
            desc: "Roofing materials, project scope and installation details are selected around the home's architecture, needs and budget."
        },
        {
            num: 4,
            title: "Preparation & Existing Roof Removal",
            desc: "When replacement is required, the existing roofing system is prepared and removed as needed before installation."
        },
        {
            num: 5,
            title: "Roof Installation",
            desc: "New roofing materials and associated components are installed with attention to weather protection and project specifications."
        },
        {
            num: 6,
            title: "Inspection, Cleanup & Completion",
            desc: "The completed roof is reviewed, the work area is cleaned and the project is handed over with the next maintenance considerations explained."
        }
    ];

    return (
        <div className="city-service-detail-page roofing-north-bethesda-md">
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
                                    "description": "Licensed and insured general contractor providing residential roofing inspection, repair, replacement, emergency roofing and maintenance services in North Bethesda, Maryland.",
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
                                    "name": "Roofing Services in North Bethesda, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "North Bethesda" },
                                    "serviceType": "Residential Roof Inspection, Repair, Replacement, Emergency Roofing and Maintenance"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Roofing", "item": "https://www.dmv-gc.com/service/roofing" },
                                        { "@type": "ListItem", "position": 4, "name": "North Bethesda, MD", "item": "https://www.dmv-gc.com/service/roofing/north-bethesda-md" }
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
                    North Bethesda, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">Roofing Contractor • North Bethesda, MD</div>
                    <h1>Roofing Services in North Bethesda, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ 1-Year Warranty</span>
                        <span className="badge">✓ Free Consultation</span>
                    </div>
                </div>

                <div className="intro-box">
                    DMV General Contracting Group provides professional roofing inspection, repair, replacement, emergency roofing and maintenance services for homeowners throughout North Bethesda and surrounding Montgomery County communities. We focus on durable materials, expert installation and practical roofing solutions for Maryland homes.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>North Bethesda Roofing Experts:</strong> From leaking roofs and storm damage to complete roof replacement, our team helps North Bethesda homeowners protect their homes with professionally planned roofing solutions.
                </div>

                {/* SERVICES */}
                <h2>Roofing Services We Offer in North Bethesda, MD</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Roof Inspection & Assessment</h3><p>Detailed inspection of roofing materials, structure and integrity to identify leaks, wear, storm damage and potential problems.</p></div>
                    <div className="svc-card"><h3>Roof Repair</h3><p>Professional repair for leaks, damaged shingles, flashing problems and other localized roofing issues.</p></div>
                    <div className="svc-card"><h3>Roof Replacement</h3><p>Complete replacement of aging or severely damaged roofs with durable materials selected for the home, climate and budget.</p></div>
                    <div className="svc-card"><h3>Emergency Roofing</h3><p>Urgent response for storm damage, active leaks and other roofing emergencies, including temporary protection when needed.</p></div>
                    <div className="svc-card"><h3>Roof Maintenance</h3><p>Routine inspections, cleaning and minor repairs designed to catch problems early and extend roof life.</p></div>
                    <div className="svc-card"><h3>Shingle Replacement</h3><p>Replacement of damaged or missing shingles to restore weather protection and reduce the risk of further roof damage.</p></div>
                    <div className="svc-card"><h3>Flashing Repair</h3><p>Inspection and repair of vulnerable flashing areas around roof penetrations and transitions where water intrusion can occur.</p></div>
                    <div className="svc-card"><h3>Storm Damage Roofing</h3><p>Assessment of roof damage after severe weather with recommendations for temporary protection, repair or replacement.</p></div>
                    <div className="svc-card"><h3>Roof Ventilation</h3><p>Evaluation of ventilation conditions as part of a roofing project to support roof performance and moisture management.</p></div>
                </div>

                {/* MATERIALS */}
                <h2>Roofing Materials for North Bethesda Homes</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>Roofing Material</th>
                                    <th>Best For</th>
                                    <th>Key Consideration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Asphalt Shingles</td>
                                    <td>Most residential homes</td>
                                    <td>Versatile appearance, practical installation and broad style options</td>
                                </tr>
                                <tr>
                                    <td>Metal Roofing</td>
                                    <td>Homeowners seeking long-term durability</td>
                                    <td>Material selection, detailing and installation quality are important</td>
                                </tr>
                                <tr>
                                    <td>Premium Roofing Materials</td>
                                    <td>Architectural and higher-end homes</td>
                                    <td>Higher material investment with attention to architectural compatibility</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p>DMV General Contracting Group helps North Bethesda homeowners select roofing materials based on the home's architecture, local weather exposure, expected performance, maintenance needs and budget.</p>

                {/* REPAIR VS REPLACE */}
                <h2>Roof Repair vs. Roof Replacement in North Bethesda, MD</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Roof Repair</h3><p>Repair can make sense when damage is localized, such as a limited leak, damaged shingles or a flashing issue, and the overall roofing system remains serviceable.</p></div>
                    <div className="svc-card"><h3>Roof Replacement</h3><p>Replacement may be more practical when the roof is aging, deterioration is widespread, recurring leaks are present or the roofing system can no longer provide reliable protection.</p></div>
                    <div className="svc-card"><h3>Professional Inspection</h3><p>An inspection helps identify the source and extent of the problem so homeowners can make a more informed repair-versus-replacement decision.</p></div>
                </div>

                {/* QUALITY INSTALLATION */}
                <h2>What Makes a Quality Roofing Installation?</h2>
                <div className="svc-grid">
                    <div className="svc-card"><strong>🔍 Thorough Inspection</strong><p>Roof condition, materials, flashing and visible structural concerns are assessed before work is recommended.</p></div>
                    <div className="svc-card"><strong>🏠 Quality Materials</strong><p>Materials are selected according to the property's architecture, performance requirements and project budget.</p></div>
                    <div className="svc-card"><strong>💧 Water Protection</strong><p>Proper detailing around vulnerable areas helps reduce the risk of water intrusion and premature roofing failure.</p></div>
                    <div className="svc-card"><strong>🛡️ Professional Installation</strong><p>Careful installation and project management help deliver a durable, weather-resistant roofing system.</p></div>
                </div>

                {/* PERMITS */}
                <h2>North Bethesda Roofing Permit Considerations</h2>
                <div className="banner">
                    <strong>Montgomery County guidance:</strong> The County's home-improvement guidance states that replacing existing shingles or adding a second layer does not require a permit. Other roofing scopes can have different requirements, so the exact project should be reviewed before work begins.
                </div>
                <p>For North Bethesda properties, DMV General Contracting Group reviews the project scope and applicable Montgomery County requirements. Permit considerations can differ for simple shingle work, structural changes, rooftop additions and work on historic properties.</p>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for Roofing in North Bethesda?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏠</div>
                        <strong>Residential Roofing Experience</strong>
                        <span>Roof inspection, repair, replacement and maintenance services for homeowners.</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🛡️</div>
                        <strong>Licensed & Insured</strong>
                        <span>MHIC licensed and insured contractor with a 1-year workmanship warranty.</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9-Star Reputation</strong>
                        <span>97+ reviews and a full-service design-build team.</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📞</div>
                        <strong>Responsive Service</strong>
                        <span>Available 7 days a week with emergency roofing support for urgent issues.</span>
                    </div>
                </div>

                {/* PROCESS */}
                <h2>Our Roofing Process in North Bethesda</h2>
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

                {/* EMERGENCY */}
                <h2>Emergency Roof Repair in North Bethesda, MD</h2>
                <p>A sudden leak or storm-related roof problem can expose your home to additional water damage. DMV General Contracting Group provides emergency roofing response for urgent situations, including damage assessment and temporary repairs designed to protect the property until permanent work can be completed.</p>

                {/* MAINTENANCE */}
                <h2>Roof Maintenance for North Bethesda Homeowners</h2>
                <p>Regular roof maintenance can help identify small issues before they become expensive repairs. Our maintenance services include routine inspections, cleaning and minor repairs to help keep your roof in good condition throughout the year.</p>

                {/* AREAS */}
                <h2>Serving North Bethesda and Surrounding Areas</h2>
                <div className="areas-grid">
                    <span className="area-pill">North Bethesda, MD</span>
                    <span className="area-pill">Bethesda</span>
                    <span className="area-pill">Garrett Park</span>
                    <span className="area-pill">Rockville</span>
                    <span className="area-pill">Chevy Chase</span>
                    <span className="area-pill">Cabin John</span>
                    <span className="area-pill">Washington, DC</span>
                    <span className="area-pill">Laurel</span>
                    <span className="area-pill">Gaithersburg</span>
                </div>
                <div className="banner">
                    <strong>North Bethesda Roofing & Roof Replacement:</strong> Our team serves residential properties throughout North Bethesda and nearby Montgomery County communities with roofing inspection, repair, replacement, emergency and maintenance services.
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Roofing Services in North Bethesda, MD</h2>
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
                    <h2>Ready for a Roofing Project in North Bethesda?</h2>
                    <p>Schedule a professional roof assessment for repair, replacement, emergency roofing or ongoing maintenance.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default RoofingNorthBethesdaMD;