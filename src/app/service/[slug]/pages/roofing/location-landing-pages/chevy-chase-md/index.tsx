import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../roofing-city-style.scss";
import "./style.scss";

const RoofingChevyChaseMD = () => {
    const faqData = [
        {
            question: "How many permit jurisdictions cover roofing in Chevy Chase, MD?",
            answer: "Six. Village of Chevy Chase, Chevy Chase Section 3, Chevy Chase Section 5, Village of Somerset, Village of Friendship Heights, and unincorporated Montgomery County each have separate permit offices. The correct office is determined by parcel location — not mailing address or zip code. DMV General Contracting Group confirms the correct jurisdiction by parcel at every Chevy Chase roofing consultation."
        },
        {
            question: "My Chevy Chase home has a slate roof — should I repair or replace it?",
            answer: "Slate roof decisions require a dedicated assessment — individual slate condition, failure rate, remaining thickness, flashing condition, and ridge integrity are each evaluated before any recommendation is made. Many Chevy Chase slate roofs that appear to need full replacement have significant remaining service life with targeted repair. DMV General Contracting Group performs slate assessment as a standard part of every Chevy Chase roof inspection on homes of the appropriate vintage. Full replacement is recommended only when the assessment clearly supports it."
        },
        {
            question: "What roofing materials are most appropriate for Chevy Chase's historic homes?",
            answer: "Natural slate is the most authentic material for Chevy Chase's 1910s–1940s colonials and tudors. Synthetic slate is an excellent lower-cost alternative with period-authentic appearance. Premium architectural asphalt in charcoal, weathered wood, or slate gray tones is appropriate when budget or weight loading makes slate impractical. Bright or light-colored asphalt shingles are generally not compatible with Chevy Chase's historic architectural character. DMV General Contracting Group discusses material compatibility with each home's specific style at the consultation."
        },
        {
            question: "Why is chimney flashing so commonly the source of leaks in Chevy Chase homes?",
            answer: "Chevy Chase's 1910s–1940s brick chimneys have mortar, crown, and flashing systems that are now 80–110 years old. Step flashing at the chimney-to-roof junction, counter-flashing embedded in chimney mortar, and chimney crown concrete all deteriorate over time — and all are common failure points in homes of this age. DMV General Contracting Group performs a dedicated chimney assessment at every Chevy Chase roof inspection because chimney failure is the single most common active leak source in these properties."
        },
        {
            question: "How much does roof replacement cost in Chevy Chase, MD?",
            answer: "Roofing costs in Chevy Chase vary by roof size, pitch, complexity (dormers, multiple planes, steep pitches increase cost), existing material (slate removal costs more than asphalt tear-off), sheathing condition, material selection, and the applicable village or county permit fees. The complex rooflines and estate scale of Chevy Chase's historic homes typically result in higher per-square costs than simpler residential profiles. DMV General Contracting Group provides a project-specific estimate after inspecting the roof."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Inspection & Assessment — Slate, Chimney & Full Roofline Evaluation",
            desc: "We inspect the complete roofing system — slate or shingle condition, sheathing type, chimney crown and mortar, all flashing points, dormer and valley conditions, steep-pitch junctions, ventilation, and gutters. For homes with slate, we assess individual slate condition, failure rate, remaining thickness, and ridge integrity before making any repair versus replacement recommendation."
        },
        {
            num: 2,
            title: "Permit Jurisdiction Confirmed by Parcel",
            desc: "Before any permit is prepared, we confirm which of Chevy Chase's six permit jurisdictions applies to your specific property. Village of Chevy Chase, Section 3, Section 5, Somerset, Friendship Heights, or unincorporated MoCo — confirmed by parcel number, not by address or neighborhood name."
        },
        {
            num: 3,
            title: "Material Selection — Architectural Compatibility Discussed",
            desc: "Roofing material and color selected with the home's specific architectural character as the governing reference — natural slate, synthetic slate, premium architectural asphalt in period-appropriate tones, or standing seam metal where appropriate. For Chevy Chase's tudor revivals and georgian colonials, material compatibility is as important as performance specification."
        },
        {
            num: 4,
            title: "Permit Filed at the Correct Jurisdiction Office",
            desc: "Roofing permit prepared and filed at the confirmed correct office — whichever of the six Chevy Chase jurisdictions applies. All correspondence managed in-house. You do not contact the permit office at any point."
        },
        {
            num: 5,
            title: "Tear-Off, Sheathing Assessment & Installation",
            desc: "Existing roofing removed — slate carefully handled where repair or selective replacement is planned. Sheathing assessed after tear-off; deteriorated boards or plank sheathing gaps addressed before new underlayment. All flashing replaced at every chimney, valley, dormer, and transition point. New roofing installed to manufacturer specifications and architectural standards appropriate to the home."
        },
        {
            num: 6,
            title: "Jurisdiction Inspection, Cleanup & Completion",
            desc: "All required inspections scheduled and managed with the applicable permit jurisdiction — Village, Section, or MoCo. Complete debris removal from landscaping and grounds. Final walkthrough. Written warranty documentation and maintenance recommendations for the specific roofing system installed."
        }
    ];

    return (
        <div className="city-service-detail-page roofing-chevy-chase-md">
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
                                    "description": "Licensed and insured general contractor providing residential roofing inspection, repair, replacement and emergency roofing services in Chevy Chase, MD. Six permit jurisdictions — Village of Chevy Chase, Section 3, Section 5, Village of Somerset, Village of Friendship Heights, and unincorporated MoCo — confirmed by parcel at every consultation. MHIC licensed #156178.",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11810 Grand Park Ave. Suite 500",
                                        "addressLocality": "North Bethesda",
                                        "addressRegion": "MD",
                                        "postalCode": "20852",
                                        "addressCountry": "US"
                                    },
                                    "areaServed": { "@type": "City", "name": "Chevy Chase" }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Roofing Services in Chevy Chase, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Chevy Chase" },
                                    "serviceType": "Residential Roof Inspection, Repair, Replacement, Emergency Roofing and Maintenance"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Roofing", "item": "https://www.dmv-gc.com/service/roofing" },
                                        { "@type": "ListItem", "position": 4, "name": "Chevy Chase, MD", "item": "https://www.dmv-gc.com/service/roofing/chevy-chase-md" }
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
                    Chevy Chase, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">🏛️ Roofing Contractor • Chevy Chase, MD — Six Permit Jurisdictions</div>
                    <h1>Roofing Services in Chevy Chase, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ Six Permit Jurisdictions — Correct Office by Parcel</span>
                        <span className="badge">✓ Slate & Historic Roofing Expertise</span>
                        <span className="badge">✓ 1-Year Warranty</span>
                        <span className="badge">✓ Free Consultation</span>
                    </div>
                </div>

                <div className="intro-box">
                    DMV General Contracting Group provides professional <strong>roofing inspection, repair, replacement, emergency roofing and maintenance for Chevy Chase homeowners</strong> — with expertise in the community&apos;s six permit jurisdictions, its estate-level historic colonials and tudors, and the slate and complex-roofline conditions that define Chevy Chase&apos;s distinctive housing stock. Permit jurisdiction confirmed by parcel at every consultation.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Chevy Chase Roofing — The Most Complex Permit Landscape in Montgomery County, and Some of Its Most Architecturally Significant Homes:</strong> Chevy Chase has six separate permit authorities — each an independent municipality or county jurisdiction with its own permit office. And its 1910s–1940s colonials, tudors, and georgian revival homes have roofline geometry, slate conditions, and chimney profiles that require a contractor who can assess them accurately. DMV General Contracting Group navigates both.
                </div>

                {/* PERMIT JURISDICTIONS */}
                <h2>Chevy Chase&apos;s Six Permit Jurisdictions — The Most Important Thing to Confirm Before Any Roofing Work Begins</h2>

                <p>Chevy Chase is not a single municipality — it is a collection of independent villages and unincorporated county territory, each with its own permit authority. A contractor who does not know which jurisdiction applies to your specific parcel will file at the wrong office, fail to obtain a permit, and leave you with unpermitted roofing work regardless of what they represent. DMV General Contracting Group confirms the correct permit authority by parcel number at the free consultation — before any scope is discussed or any permit is prepared.</p>

                <div className="juris-grid">
                    <div className="juris-card">
                        <h3>🏛️ Village of Chevy Chase</h3>
                        <p>Oldest and largest Chevy Chase village. Own municipal permit office. All roofing permits for Village of Chevy Chase properties filed here — not MoCo DPS.</p>
                    </div>
                    <div className="juris-card">
                        <h3>🏛️ Chevy Chase Section 3</h3>
                        <p>Separate incorporated village with its own permit authority. Roofing permits filed with Section 3&apos;s municipal office — distinct from the Village of Chevy Chase.</p>
                    </div>
                    <div className="juris-card">
                        <h3>🏛️ Chevy Chase Section 5</h3>
                        <p>Another independent incorporated section. Own permit office for all construction including roofing. Not the same office as Section 3 or the Village.</p>
                    </div>
                    <div className="juris-card">
                        <h3>🏛️ Village of Somerset</h3>
                        <p>Small incorporated village within the Chevy Chase area. Own permit authority for roofing and all construction work performed within Somerset&apos;s limits.</p>
                    </div>
                    <div className="juris-card">
                        <h3>🏛️ Village of Friendship Heights</h3>
                        <p>Incorporated village bordering DC. Own permit office for roofing and construction. Not to be confused with the DC neighborhood of the same name.</p>
                    </div>
                    <div className="juris-card">
                        <h3>🏛️ Unincorporated MoCo</h3>
                        <p>Some Chevy Chase-area properties fall outside all village limits. These file roofing permits with MoCo DPS at 2425 Reedie Drive, Wheaton.</p>
                    </div>
                </div>

                <div className="banner">
                    <strong>Why parcel confirmation matters — not neighborhood name:</strong> Two adjacent homes in Chevy Chase with identical mailing addresses may file roofing permits at different offices depending on which village boundary their parcels fall within. A contractor who files by neighborhood name rather than parcel location will get it wrong for a meaningful percentage of Chevy Chase properties. DMV General Contracting Group confirms jurisdiction by parcel at the free consultation — no assumptions, no guessing.
                </div>

                {/* SERVICES */}
                <h2>Roofing Services We Offer in Chevy Chase, MD</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Roof Inspection & Assessment</h3><p>Full inspection of shingles or slate, sheathing, flashing, chimney conditions, dormers, steep-pitch geometry, and ventilation — with special attention to the slate and complex roofline conditions common in Chevy Chase&apos;s 1910s–1940s historic estate homes.</p></div>
                    <div className="svc-card"><h3>Roof Repair</h3><p>Localized repair for active leaks, damaged or missing shingles, slate repair, chimney flashing replacement, valley repair, and dormer junction waterproofing. Chimney flashing failure is the most common single-point repair source in Chevy Chase&apos;s historic colonials and tudors.</p></div>
                    <div className="svc-card"><h3>Roof Replacement</h3><p>Complete replacement with material selection appropriate to each home&apos;s architectural character — slate, synthetic slate, premium architectural asphalt, or standing seam metal — and all required permit filing with the correct Chevy Chase jurisdiction.</p></div>
                    <div className="svc-card"><h3>Slate Roofing Assessment & Repair</h3><p>Slate condition assessment — individual slate replacement, flashing repair, and ridge work — for Chevy Chase homes with original or replacement slate that may have decades of remaining service life if properly maintained.</p></div>
                    <div className="svc-card"><h3>Emergency Roofing</h3><p>Urgent response for storm damage and active leaks in Chevy Chase&apos;s historic homes — where water intrusion threatens original plaster, hardwood, and period millwork. Assessment and temporary protection before permanent repairs.</p></div>
                    <div className="svc-card"><h3>Chimney Flashing & Crown Work</h3><p>Dedicated chimney assessment and repair — step flashing, counter-flashing, crown repair, and mortar repointing where chimney conditions are contributing to roof leaks. Especially important in Chevy Chase&apos;s century-old homes with original brick chimneys.</p></div>
                    <div className="svc-card"><h3>Roof Maintenance</h3><p>Annual inspection of slate condition, flashing integrity, chimney crown, valley waterproofing, and gutter integration — the maintenance schedule that maximizes service life on Chevy Chase&apos;s complex historic rooflines.</p></div>
                    <div className="svc-card"><h3>Flashing & Valley Work</h3><p>Complete flashing system replacement or repair at all dormers, valleys, skylights, and roof-to-wall junctions — the transition points most likely to fail on Chevy Chase&apos;s steeply pitched multi-plane historic rooflines.</p></div>
                </div>

                {/* HISTORIC CONDITIONS */}
                <h2>Chevy Chase&apos;s Historic Home Roofing Conditions — What We Assess</h2>

                <div className="historic-box">
                    <h3>🏛️ Chevy Chase&apos;s 1910s–1940s Colonials, Tudors & Georgian Revivals — Specific Roofing Conditions</h3>
                    <p>Chevy Chase&apos;s estate-level historic homes are among the most architecturally significant residential properties in Montgomery County — and their rooflines reflect the architectural ambitions of their era. The roofing conditions we assess in these homes are consistently different from those in standard mid-century suburban construction:</p>
                    <ul>
                        <li><strong>Slate roofing — still present on many Chevy Chase historic homes:</strong> A significant number of Chevy Chase&apos;s oldest colonials and tudors still have original or early-replacement slate — which may have 30–60+ years of remaining service life if assessed correctly and maintained. Slate assessment is a specialized evaluation: individual slate failure, deteriorated flashing, and ridge condition are each assessed separately to determine whether targeted repair or full replacement is warranted. DMV General Contracting Group performs slate assessment as a standard part of every Chevy Chase roof inspection on homes of the appropriate vintage.</li>
                        <li><strong>Steep pitches and complex geometry:</strong> Chevy Chase&apos;s tudor revival homes — with their characteristic cross-gables, steep pitches, half-timbered dormers, and multiple roof planes — create significantly more flashing and transition points per square foot of roof than a simple gable. Each transition is a potential leak source. The steep pitch also increases installation complexity and labor relative to lower-slope residential roofing.</li>
                        <li><strong>Original chimneys — mortar, crown, and flashing conditions:</strong> Chevy Chase&apos;s brick chimneys from the 1910s–1940s commonly have deteriorated mortar joints, cracked or absent chimney crowns, and failed step and counter-flashing — making the chimney the single most common active leak source in these homes. Every Chevy Chase roof inspection includes a dedicated chimney assessment.</li>
                        <li><strong>Wood plank sheathing in oldest homes:</strong> The earliest Chevy Chase construction predates plywood — original 1×6 or 1×8 diagonal board sheathing is present beneath existing roofing on some of the town&apos;s oldest homes. Condition assessed after tear-off; gaps between boards affect new shingle fastening and may require overlay or replacement before new installation.</li>
                        <li><strong>Period-appropriate material expectations:</strong> Chevy Chase&apos;s historic streetscapes have a visual consistency — dark slate tones, weathered wood profiles, and muted colors — that asphalt shingles in bright or commercial colors disrupt visually. Material and color selection that respects the home&apos;s architectural character is discussed at every Chevy Chase consultation.</li>
                    </ul>
                </div>

                {/* MATERIALS */}
                <h2>Roofing Materials for Chevy Chase&apos;s Historic Estate Homes</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>Material</th>
                                    <th>Chevy Chase Suitability</th>
                                    <th>Key Consideration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Natural Slate</strong></td>
                                    <td>Most authentic for Chevy Chase&apos;s historic homes</td>
                                    <td>100–150+ year lifespan when properly installed and maintained. Most appropriate material for Chevy Chase&apos;s 1910s–1940s colonials and tudors where original slate may still be present. Higher cost; requires skilled installation and periodic maintenance.</td>
                                </tr>
                                <tr>
                                    <td><strong>Synthetic Slate</strong></td>
                                    <td>Excellent — period-authentic appearance, modern performance</td>
                                    <td>Engineered to replicate the appearance of natural slate at lower weight and cost. Excellent choice for Chevy Chase homes where natural slate replacement is desired but weight loading or budget makes full slate impractical. 40–50 year lifespan.</td>
                                </tr>
                                <tr>
                                    <td><strong>Premium Architectural Asphalt</strong></td>
                                    <td>Good — appropriate grades and colors only</td>
                                    <td>Heavyweight architectural shingles in charcoal, weathered wood, or slate gray tones read appropriately on Chevy Chase&apos;s historic homes. Bright whites, reds, or light tans are less architecturally compatible. 30–40 year lifespan at premium grades.</td>
                                </tr>
                                <tr>
                                    <td><strong>Standing Seam Metal</strong></td>
                                    <td>Appropriate for select Chevy Chase architectural profiles</td>
                                    <td>Standing seam in dark bronze, charcoal, or slate gray can be appropriate on certain colonial and georgian revival profiles. Profile and color selection discussed at consultation for compatibility with the specific home&apos;s architectural character.</td>
                                </tr>
                                <tr>
                                    <td><strong>Cedar Shake</strong></td>
                                    <td>Period-authentic for craftsman and certain colonial profiles</td>
                                    <td>Authentic material for some Chevy Chase colonial profiles. Requires fire-retardant treatment in Maryland and periodic maintenance. Higher cost than asphalt but appropriate for homes where wood-shake appearance is period-correct.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* REPAIR VS REPLACE */}
                <h2>Roof Repair vs. Roof Replacement in Chevy Chase, MD</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Repair — When It Makes Sense</h3><p>For Chevy Chase homes with slate roofing, targeted repair — replacing individual failed slates, repairing chimney flashing, resealing valleys — can extend a well-maintained slate roof&apos;s service life by decades at a fraction of full replacement cost. For homes with asphalt shingles under 15 years old, localized storm damage or a single flashing failure is typically repairable without full replacement.</p></div>
                    <div className="svc-card"><h3>Replacement — When It Makes Sense</h3><p>Replacement is warranted when slate is deteriorated beyond targeted repair, when asphalt shingles are at end of service life with widespread granule loss, when multiple leak sources exist across the roof, or when the sheathing condition warrants full access. The complexity of Chevy Chase&apos;s historic rooflines means that a professional assessment — not appearance from the ground — is required to make this determination accurately.</p></div>
                    <div className="svc-card"><h3>Slate-Specific Assessment</h3><p>Slate replacement decisions require specialized evaluation: individual slate failure rate, remaining slate thickness, flashing condition, and ridge deterioration are each assessed separately. Many Chevy Chase slate roofs that appear to need full replacement have 30+ years of remaining service life with targeted repair. Accurate slate assessment requires physically inspecting the roof — not estimating from the ground.</p></div>
                </div>

                {/* QUALITY INSTALLATION */}
                <h2>What Makes a Quality Roofing Installation in Chevy Chase?</h2>
                <div className="svc-grid">
                    <div className="svc-card"><strong>🏛️ Six-Jurisdiction Permit Expertise</strong><p>Correct permit office confirmed by parcel — not neighborhood name. Village of Chevy Chase, Section 3, Section 5, Somerset, Friendship Heights, and MoCo each have separate offices.</p></div>
                    <div className="svc-card"><strong>🔍 Slate Assessment Capability</strong><p>Dedicated slate evaluation — individual slate condition, flashing, ridge — before recommending repair versus replacement for Chevy Chase&apos;s historic homes.</p></div>
                    <div className="svc-card"><strong>🏠 Architectural Material Guidance</strong><p>Material and color selection appropriate to each home&apos;s specific architectural character — not a generic contractor default.</p></div>
                    <div className="svc-card"><strong>💧 Complete Chimney & Flashing System</strong><p>All chimney flashing, valley flashing, dormer junctions, and steep-pitch transitions addressed — the highest-risk locations on Chevy Chase&apos;s complex historic rooflines.</p></div>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for Roofing in Chevy Chase?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏛️</div>
                        <strong>Six-Jurisdiction Expertise</strong>
                        <span>Correct permit office confirmed by parcel — every time</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🪨</div>
                        <strong>Slate Assessment</strong>
                        <span>Repair vs. replace evaluation for Chevy Chase&apos;s historic slate roofs</span>
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
                <h2>Our Roofing Process in Chevy Chase</h2>
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
                <h2>Emergency Roof Repair in Chevy Chase, MD</h2>
                <p>Active leaks in Chevy Chase&apos;s historic estate homes present particular urgency — original plaster ceilings, hardwood floors, period millwork, and antique fixtures are all at risk from water intrusion that is not addressed promptly. DMV General Contracting Group provides emergency roofing response for Chevy Chase homeowners facing urgent situations, available 7 days a week. We provide accurate leak-source assessment for Chevy Chase&apos;s complex historic rooflines — recognizing that chimney flashing, steep valley junctions, and dormer transitions are the most common emergency leak points in these properties — and install temporary protective measures before permanent repairs are completed.</p>

                {/* MAINTENANCE */}
                <h2>Roof Maintenance for Chevy Chase Homeowners</h2>
                <p>Chevy Chase&apos;s historic estate homes benefit substantially from regular roof maintenance — the complex rooflines, original chimneys, steep pitches, and in many cases slate roofing systems all require periodic inspection to identify deterioration before it becomes a leak. Annual inspection of chimney condition, flashing integrity at all transition points, slate condition where applicable, valley waterproofing, and gutter performance is our standard maintenance recommendation for Chevy Chase properties. A $400–$800 annual maintenance inspection on a Chevy Chase historic home regularly prevents $5,000–$25,000 emergency repairs that result from undetected flashing failures reaching interior plaster and timber framing.</p>

                {/* AREAS */}
                <h2>Serving All Chevy Chase Communities for Roofing</h2>
                <div className="areas-grid">
                    <span className="area-pill">Village of Chevy Chase</span>
                    <span className="area-pill">Chevy Chase Section 3</span>
                    <span className="area-pill">Chevy Chase Section 5</span>
                    <span className="area-pill">Village of Somerset</span>
                    <span className="area-pill">Village of Friendship Heights</span>
                    <span className="area-pill">Unincorporated Chevy Chase</span>
                    <span className="area-pill">Bethesda</span>
                    <span className="area-pill">North Bethesda</span>
                    <span className="area-pill">Kensington</span>
                    <span className="area-pill">Silver Spring</span>
                    <span className="area-pill">Washington, DC</span>
                </div>
                <div className="banner">
                    <strong>Chevy Chase Permit Reminder:</strong> Six separate permit offices cover Chevy Chase-area roofing work. Two adjacent properties with identical mailing addresses may file at different offices based on which village boundary their parcels fall within. DMV General Contracting Group confirms the correct permit authority by parcel at every Chevy Chase roofing consultation — not by street name or zip code.
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Roofing Services in Chevy Chase, MD</h2>
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
                    <h2>Explore Our Other Services in Chevy Chase, MD</h2>
                    <ul>
                        <li><Link href="/service/siding-installation/chevy-chase-md">Siding Installation in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/home-additions/chevy-chase-md">Home Additions in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/electrical-services/chevy-chase-md">Electrical Services in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/kitchen-remodeling/chevy-chase-md">Kitchen Remodeling in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling/chevy-chase-md">Bathroom Remodeling in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/chevy-chase-md">Basement Remodeling in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/flooring-remodeling/chevy-chase-md">Flooring Installation in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/design-build/chevy-chase-md">Design-Build Contractor in Chevy Chase, MD</Link></li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="cta-banner">
                    <h2>Ready for a Roofing Project in Chevy Chase?</h2>
                    <p>Schedule a professional roof assessment — slate evaluation, chimney assessment, six-jurisdiction permit confirmed, and period-appropriate material guidance. Free consultation, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default RoofingChevyChaseMD;
