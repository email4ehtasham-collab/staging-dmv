import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../roofing-city-style.scss";
import "./style.scss";

const RoofingGarrettParkMD = () => {
    const faqData = [
        {
            question: "Where are roofing permits filed in Garrett Park, MD?",
            answer: "With the Town of Garrett Park at 4600 Oxford Street, Garrett Park, MD 20896 — not with Montgomery County DPS. Garrett Park is an incorporated municipality with its own permit office. DMV General Contracting Group files all Garrett Park roofing permits at 4600 Oxford Street and manages the full permit and inspection process in-house."
        },
        {
            question: "Does the National Register Historic District designation affect roofing in Garrett Park?",
            answer: "Garrett Park's historic district designation governs the community's exterior visual character. While standard roof replacement using appropriate materials does not require separate historic district review beyond the Town roofing permit, material and color choices that are compatible with Garrett Park's historic architectural character are recommended — and discussed at every consultation. Unusual materials or colors on highly visible rooflines may attract Town review comment even if not formally required."
        },
        {
            question: "What roofing conditions are common in Garrett Park's older homes?",
            answer: "Original wood plank sheathing beneath existing shingles, complex rooflines with multiple dormers and chimneys, century-old chimney flashing conditions that are a primary leak source, and in some homes original slate roofing. DMV General Contracting Group assesses all of these conditions at the free inspection before any replacement recommendation is made."
        },
        {
            question: "How much does roof replacement cost in Garrett Park, MD?",
            answer: "Roofing costs vary by roof size, pitch, complexity (dormers, valleys, chimneys), sheathing condition, material selection, and Town of Garrett Park permit fees. The complex rooflines of Garrett Park's historic homes typically cost more per square foot to roof than simple gable configurations. DMV General Contracting Group provides a project-specific estimate after inspecting the roof in person."
        },
        {
            question: "Does DMV General Contracting Group provide emergency roofing in Garrett Park?",
            answer: "Yes. Emergency roofing response is available for storm damage and active leaks in Garrett Park — with temporary protective measures before permanent repairs. We are familiar with Garrett Park's historic home construction and can accurately assess the chimney, dormer, and flashing conditions that are most commonly the source of emergency leaks in these homes."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Inspection & Consultation — Historic Home Conditions Assessed",
            desc: "We inspect the full roof system: shingle condition, sheathing type (wood plank vs. plywood), chimney crown and mortar, all flashing points, dormer conditions, ventilation, and gutters. For Garrett Park's complex historic rooflines, this assessment takes longer than a simple gable inspection and is worth the time — identifying all contributing factors before recommending a scope."
        },
        {
            num: 2,
            title: "Repair or Replacement Recommendation — Honest Assessment",
            desc: "We explain whether localized repair, full replacement, or a combination is appropriate for the specific conditions found. For Garrett Park homes where chimney flashing is the primary leak source but shingles are otherwise serviceable, we recommend flashing repair rather than unnecessary full replacement."
        },
        {
            num: 3,
            title: "Material & Color Selection — Architectural Compatibility Discussed",
            desc: "Roofing materials and colors are selected with Garrett Park's historic architectural character in mind — darker, muted tones for craftsman bungalows; slate or synthetic slate for homes that originally had slate; materials and profiles that read correctly on the specific home's style."
        },
        {
            num: 4,
            title: "Town of Garrett Park Permit Filed at 4600 Oxford Street",
            desc: "All required roofing permits are filed with the Town of Garrett Park at 4600 Oxford Street. We prepare the submission, manage all Town correspondence, and track permit approval. You do not contact the Town permit office."
        },
        {
            num: 5,
            title: "Preparation, Tear-Off & Sheathing Assessment",
            desc: "When replacement is required, existing roofing is removed and the sheathing condition is assessed before new material is installed. For Garrett Park homes with original wood plank sheathing, we confirm board condition and spacing before proceeding. Any deteriorated sheathing is replaced before new underlayment and shingles are installed."
        },
        {
            num: 6,
            title: "Roof Installation — Flashing, Chimneys & All Transitions",
            desc: "New roofing materials installed with full attention to every flashing point — chimney step and counter-flashing, valley flashing, dormer flashing, and all roof-to-wall junctions. For Garrett Park's historic homes, these transitions receive the same attention as the field shingles — because they are the most likely future leak source."
        },
        {
            num: 7,
            title: "Town Inspection, Cleanup & Completion",
            desc: "Town of Garrett Park inspection scheduled and managed. Work area cleaned — including all shingle debris from landscaping around the home. Final walkthrough with you. Warranty documentation provided. Maintenance recommendations for the specific roofing system installed."
        }
    ];

    return (
        <div className="city-service-detail-page roofing-garrett-park-md">
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
                                    "description": "Licensed and insured general contractor providing residential roofing inspection, repair, replacement, emergency roofing and maintenance services in Garrett Park, Maryland — a National Register Historic District. Town of Garrett Park permit office at 4600 Oxford Street.",
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
                                    "name": "Roofing Services in Garrett Park, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Garrett Park" },
                                    "serviceType": "Residential Roof Inspection, Repair, Replacement, Emergency Roofing and Maintenance"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Roofing", "item": "https://www.dmv-gc.com/service/roofing" },
                                        { "@type": "ListItem", "position": 4, "name": "Garrett Park, MD", "item": "https://www.dmv-gc.com/service/roofing/garrett-park-md" }
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
                    Garrett Park, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">🏛️ Roofing Contractor • Garrett Park, MD — National Register Historic District</div>
                    <h1>Roofing Services in Garrett Park, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ Town of Garrett Park Permit — 4600 Oxford St</span>
                        <span className="badge">✓ 1-Year Warranty</span>
                        <span className="badge">✓ Free Consultation</span>
                    </div>
                </div>

                <div className="intro-box">
                    DMV General Contracting Group provides professional <strong>roofing inspection, repair, replacement, emergency roofing and maintenance for Garrett Park homeowners</strong> — with expertise in the specific roofing conditions of the town&apos;s 1900s–1940s bungalows, foursquares, and colonial revival homes. Town of Garrett Park permits filed at 4600 Oxford Street. Architectural material compatibility discussed at every consultation.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Garrett Park Roofing — Historic Homes Require a Contractor Who Knows the Town Permit Office and the Conditions Inside These Roofs:</strong> Garrett Park&apos;s National Register Historic District homes were built in an era when wood plank sheathing, slate, and early asphalt were the roofing standards. Today&apos;s replacement projects require honest assessment of what is beneath the existing roof before a material recommendation is made.
                </div>

                {/* SERVICES */}
                <h2>Roofing Services We Offer in Garrett Park, MD</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Roof Inspection & Assessment</h3><p>Detailed inspection of roofing materials, sheathing condition, flashing, chimney crowns, valleys, and dormers — the complex geometry common in Garrett Park&apos;s bungalows and foursquares requires thorough assessment of every transition point.</p></div>
                    <div className="svc-card"><h3>Roof Repair</h3><p>Professional repair for leaks, damaged shingles, flashing failures, chimney flashing, valley repairs, and other localized roofing issues. Chimney flashing is among the most common repair source in Garrett Park&apos;s century-old homes.</p></div>
                    <div className="svc-card"><h3>Roof Replacement</h3><p>Complete replacement of aging or severely damaged roofs — with material selection calibrated to Garrett Park&apos;s architectural character and the specific sheathing conditions beneath existing roofing.</p></div>
                    <div className="svc-card"><h3>Emergency Roofing</h3><p>Urgent response for storm damage, active leaks, and other roofing emergencies — including assessment and temporary protection. Familiar with Garrett Park&apos;s historic home construction so leak sources can be accurately identified.</p></div>
                    <div className="svc-card"><h3>Roof Maintenance</h3><p>Routine inspections, cleaning, and minor repairs to extend roof service life. For Garrett Park&apos;s older homes, annual inspection of chimney flashing, valley condition, and gutter integration is particularly valuable.</p></div>
                    <div className="svc-card"><h3>Shingle Replacement</h3><p>Replacement of damaged or missing shingles with materials that match the existing roof in color and profile — important in Garrett Park&apos;s historic streetscape where visible rooflines contribute to neighborhood character.</p></div>
                    <div className="svc-card"><h3>Chimney Flashing & Repair</h3><p>Chimney flashing is the most common leak source in Garrett Park&apos;s century-old homes. Deteriorated step flashing, failed counter-flashing, and cracked chimney crowns are assessed and repaired as a standalone scope or part of a larger roofing project.</p></div>
                    <div className="svc-card"><h3>Flashing & Valley Work</h3><p>Proper flashing at dormers, valleys, skylights, and roof-to-wall junctions is critical in Garrett Park&apos;s complex historic rooflines. All flashing replaced or resealed during roof replacement projects.</p></div>
                </div>

                {/* HISTORIC CONDITIONS */}
                <h2>Garrett Park&apos;s Historic Homes — What We Find When We Inspect These Roofs</h2>

                <div className="historic-box">
                    <h3>🏛️ Roofing Conditions Specific to Garrett Park&apos;s 1900s–1940s Housing Stock</h3>
                    <p>Garrett Park&apos;s bungalows, craftsman foursquares, and colonial revival homes were built in the era before modern plywood sheathing, synthetic underlayments, and architectural shingles existed. When we inspect roofs on these homes, we commonly find conditions that require honest assessment before any replacement recommendation is made:</p>
                    <ul>
                        <li><strong>Original wood plank sheathing:</strong> Many Garrett Park homes have original 1×6 or 1×8 diagonal wood board sheathing beneath existing shingles rather than modern OSB or plywood. Wood plank sheathing is generally still sound after decades of service, but gaps between boards affect how new shingles are fastened and whether solid sheathing is needed before new installation.</li>
                        <li><strong>Complex roofline geometry:</strong> Garrett Park&apos;s craftsman bungalows and foursquares frequently have multiple roof planes, dormers, eyebrow windows, and prominent chimneys — all of which create more flashing and transition points than a simple gable roof. Each transition is a potential leak source and requires individual attention during both inspection and replacement.</li>
                        <li><strong>Century-old chimney conditions:</strong> Chimneys on Garrett Park&apos;s oldest homes often have deteriorated mortar joints, cracked chimney crowns, and failed or absent step and counter-flashing — making the chimney the most common source of roof leaks in these properties. Chimney assessment is a standard part of every Garrett Park roof inspection.</li>
                        <li><strong>Original slate or early asphalt:</strong> Some Garrett Park homes still have original slate roofing — either fully intact, partially repaired, or overlaid with asphalt. Slate assessment requires evaluation of whether the remaining slate is repairable, whether replacement slates can be matched, and whether full replacement with modern materials is more practical.</li>
                        <li><strong>Ventilation conditions:</strong> Garrett Park&apos;s older homes were built without modern attic ventilation systems. Inadequate ventilation accelerates shingle aging and can contribute to ice dam formation in winter. Ventilation assessment is included in every Garrett Park roof inspection.</li>
                    </ul>
                </div>

                {/* PERMITS */}
                <h2>Permits for Garrett Park Roofing — Town of Garrett Park at 4600 Oxford Street</h2>

                <div className="permit-box">
                    <h3>📋 Why 4600 Oxford Street Is the Only Correct Permit Office for Garrett Park Roofing Work</h3>
                    <p>Garrett Park is an incorporated municipality with its own permit office at <strong>4600 Oxford Street, Garrett Park, MD 20896</strong> — completely separate from Montgomery County DPS at 2425 Reedie Drive, Wheaton. Roofing permits for work within Garrett Park&apos;s town limits must be filed at 4600 Oxford Street. A contractor filing a Garrett Park roofing permit at MoCo DPS will be turned away — the county system does not accept permit applications for work within incorporated Garrett Park. An unpermitted roof replacement in Garrett Park creates insurance and resale documentation gaps that cannot be corrected after the fact without repeating the inspection process.</p>
                    <p>DMV General Contracting Group files all Garrett Park roofing permits at 4600 Oxford Street, manages all Town correspondence, and coordinates all required Town of Garrett Park inspections in-house. You do not contact the Town permit office at any point in the process.</p>
                </div>

                {/* MATERIALS */}
                <h2>Roofing Materials for Garrett Park&apos;s Historic Homes</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>Roofing Material</th>
                                    <th>Garrett Park Suitability</th>
                                    <th>Key Consideration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Architectural Asphalt Shingles</strong></td>
                                    <td>Most appropriate for most Garrett Park homes</td>
                                    <td>Color selection matters — darker, muted tones (charcoal, weathered wood, slate gray) read as period-appropriate on craftsman and colonial revival architecture; bright or commercial colors are less appropriate for the historic streetscape</td>
                                </tr>
                                <tr>
                                    <td><strong>Slate (Natural or Synthetic)</strong></td>
                                    <td>Excellent for Garrett Park&apos;s older homes</td>
                                    <td>Natural slate is the most authentic material for Garrett Park&apos;s historic homes; synthetic slate offers a similar appearance with lower weight and cost; both require assessment of sheathing condition beneath</td>
                                </tr>
                                <tr>
                                    <td><strong>Metal Roofing (Standing Seam)</strong></td>
                                    <td>Good for appropriate architectural styles</td>
                                    <td>Standing seam metal in dark tones can be appropriate on certain Garrett Park craftsman profiles; color and profile selection discussed at consultation for compatibility with the specific home&apos;s architectural character</td>
                                </tr>
                                <tr>
                                    <td><strong>Cedar Shake / Wood Shingles</strong></td>
                                    <td>Period-authentic for Garrett Park bungalows</td>
                                    <td>Most authentic material for craftsman bungalow profiles; requires fire-retardant treatment in Maryland and periodic maintenance; higher cost than asphalt</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <p>DMV General Contracting Group discusses material compatibility with Garrett Park&apos;s historic architectural character at every consultation — recommending materials and colors that are appropriate for the specific home&apos;s style and that respect the National Register Historic District&apos;s visual character.</p>

                {/* REPAIR VS REPLACE */}
                <h2>Roof Repair vs. Roof Replacement in Garrett Park, MD</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Roof Repair</h3><p>Repair is appropriate for Garrett Park homes when damage is localized — a flashing failure at a chimney, a small section of damaged shingles after a storm, or a valley that needs resealing. Many Garrett Park roofs with otherwise sound shingles have chimney or flashing issues that can be corrected without full replacement.</p></div>
                    <div className="svc-card"><h3>Roof Replacement</h3><p>Replacement is warranted when shingles are at or past their service life, when granule loss is widespread, when multiple leaks recur despite repairs, or when the underlying sheathing condition warrants full access. For Garrett Park&apos;s oldest homes, a roof that has not been replaced in 25+ years warrants honest assessment.</p></div>
                    <div className="svc-card"><h3>Professional Inspection First</h3><p>For Garrett Park&apos;s historic homes, an inspection is particularly important before recommending repair versus replacement — the complexity of these roofs means that a single apparent leak may have multiple contributing sources that must all be identified to be effectively addressed.</p></div>
                </div>

                {/* QUALITY INSTALLATION */}
                <h2>What Makes a Quality Roofing Installation in Garrett Park?</h2>
                <div className="svc-grid">
                    <div className="svc-card"><strong>🔍 Historic Home Assessment</strong><p>Sheathing condition, chimney, dormers, valleys, and all transition points assessed before any recommendation is made for Garrett Park&apos;s complex historic rooflines.</p></div>
                    <div className="svc-card"><strong>🏛️ Architectural Compatibility</strong><p>Material and color selections discussed for compatibility with Garrett Park&apos;s National Register Historic District character — not just default contractor preferences.</p></div>
                    <div className="svc-card"><strong>💧 Complete Flashing System</strong><p>All chimneys, valleys, dormers, and roof-to-wall junctions properly flashed — the most common point of failure in Garrett Park&apos;s century-old homes.</p></div>
                    <div className="svc-card"><strong>📋 Town Permit at 4600 Oxford St</strong><p>All Garrett Park roofing permits filed at the correct office — Town of Garrett Park, not MoCo DPS — with all Town inspections coordinated in-house.</p></div>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for Roofing in Garrett Park?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏛️</div>
                        <strong>Historic Home Experience</strong>
                        <span>Familiar with Garrett Park&apos;s bungalows, foursquares and colonial revival rooflines</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>Town Permit Filed Correctly</strong>
                        <span>4600 Oxford Street — not MoCo DPS</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🛡️</div>
                        <strong>MHIC Licensed & Insured</strong>
                        <span>License #156178 · 1-year workmanship warranty</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9-Star Reputation</strong>
                        <span>97+ verified homeowner reviews</span>
                    </div>
                </div>

                {/* PROCESS */}
                <h2>Our Roofing Process in Garrett Park</h2>
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
                <h2>Emergency Roof Repair in Garrett Park, MD</h2>
                <p>A sudden leak or storm damage in a Garrett Park historic home can be particularly concerning — original plaster ceilings, hardwood floors, and period millwork are all at risk from water intrusion that is not immediately stopped. DMV General Contracting Group provides emergency roofing response for Garrett Park homeowners facing urgent situations, including damage assessment and temporary protective measures before permanent repairs are scheduled. Because we are familiar with Garrett Park&apos;s historic home construction, we can assess leak sources accurately — recognizing that chimney flashing, dormer junctions, and valley conditions are the most common emergency leak points in these homes.</p>

                {/* MAINTENANCE */}
                <h2>Roof Maintenance for Garrett Park Homeowners</h2>
                <p>Garrett Park&apos;s older homes benefit particularly from regular roof maintenance — the complex rooflines, prominent chimneys, and century-old flashing conditions mean that small problems left unaddressed can become significant water intrusion events. Annual inspection of chimney flashing, step flashing at dormers, valley conditions, and gutter integration is our standard maintenance recommendation for Garrett Park homes. Minor repairs identified during routine maintenance are far less expensive than emergency repairs after a leak has reached interior plaster and trim.</p>

                {/* AREAS */}
                <h2>Serving Garrett Park and Surrounding Areas</h2>
                <div className="areas-grid">
                    <span className="area-pill">Garrett Park, MD</span>
                    <span className="area-pill">Kensington</span>
                    <span className="area-pill">North Bethesda</span>
                    <span className="area-pill">Bethesda</span>
                    <span className="area-pill">Rockville</span>
                    <span className="area-pill">Wheaton</span>
                    <span className="area-pill">Silver Spring</span>
                    <span className="area-pill">Chevy Chase</span>
                    <span className="area-pill">Cabin John</span>
                    <span className="area-pill">Washington, DC</span>
                </div>
                <div className="banner">
                    <strong>Garrett Park Roofing Note:</strong> All roofing permits for Garrett Park properties are filed with the Town of Garrett Park at 4600 Oxford Street — not with Montgomery County DPS. Neighboring Kensington files at the Town of Kensington at 3710 Mitchell Street. If you are not certain which permit office applies to your property, DMV General Contracting Group confirms the correct jurisdiction at the free consultation.
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Roofing Services in Garrett Park, MD</h2>
                <Accordion defaultActiveKey="0" flush>
                    {faqData.map((faq, index) => (
                        <AccordionItem eventKey={index.toString()} key={index}>
                            <AccordionHeader as="h3">{faq.question}</AccordionHeader>
                            <AccordionBody>{faq.answer}</AccordionBody>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* INTERNAL LINKS */}
                <div className="internal-links">
                    <h2>Explore Our Other Services in Garrett Park, MD</h2>
                    <ul>
                        <li><Link href="/service/siding-installation/garrett-park-md">Siding Installation in Garrett Park, MD</Link></li>
                        <li><Link href="/service/home-additions/garrett-park-md">Home Additions in Garrett Park, MD</Link></li>
                        <li><Link href="/service/electrical-services/garrett-park-md">Electrical Services in Garrett Park, MD</Link></li>
                        <li><Link href="/service/kitchen-remodeling/garrett-park-md">Kitchen Remodeling in Garrett Park, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling/garrett-park-md">Bathroom Remodeling in Garrett Park, MD</Link></li>
                        <li><Link href="/service/design-build/garrett-park-md">Design-Build Contractor in Garrett Park, MD</Link></li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="cta-banner">
                    <h2>Ready for a Roofing Project in Garrett Park?</h2>
                    <p>Schedule a professional roof assessment — historic home conditions assessed, Town of Garrett Park permit expertise, architectural material compatibility discussed. Free consultation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default RoofingGarrettParkMD;
