import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../roofing-city-style.scss";
import "./style.scss";

const RoofingWashingtonDC = () => {
    const faqData = [
        {
            question: "Does DMV General Contracting Group hold a DC license for roofing work?",
            answer: "Yes. DMV General Contracting Group holds DC DLCP license #410526000209 — required for all contractor work in the District of Columbia, including roofing. Maryland MHIC license #156178 covers Maryland work. Both licenses together cover the full DMV area. Always verify a contractor's DLCP license number before scheduling DC roofing work."
        },
        {
            question: "Where are roofing permits filed in Washington DC?",
            answer: "With the DC Department of Buildings (DC DOB) at 1100 4th Street SW, Washington, DC 20024. DC has its own permit system entirely separate from Maryland. DMV General Contracting Group files all DC roofing permits at DC DOB and manages the full permit and inspection process in-house."
        },
        {
            question: "Does my DC rowhouse have a flat roof section in addition to the sloped section?",
            answer: "Most DC rowhouses have both — a steeply pitched front-facing roof visible from the street, and a flat or low-slope rear section over the back of the home. These are two different roofing systems requiring separate assessment, separate materials, and separate maintenance schedules. DMV General Contracting Group assesses both sections at every DC rowhouse roof inspection."
        },
        {
            question: "Does replacing my DC historic district roof require HPRB review?",
            answer: "Like-for-like replacement in the same material and color generally proceeds through standard DC DOB permitting without HPRB review. Material or color changes on street-visible sloped sections of historic district properties may require HPRB review. Rear flat roof replacement generally does not trigger HPRB review. DMV General Contracting Group discusses the specific scope with DC historic district homeowners at the consultation to confirm what applies before any permit is filed."
        },
        {
            question: "How much does roof replacement cost in Washington DC?",
            answer: "DC rowhouse roofing costs vary by property type, sloped section size and pitch, flat section size and membrane type, chimney conditions, existing material (slate removal costs more than asphalt tear-off), DC DOB permit fees, and material selection. Sloped and flat sections are typically priced separately. DMV General Contracting Group provides a project-specific estimate after inspecting the DC property in person."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Inspection — Sloped Section, Flat Section, Chimney & Party Walls",
            desc: "We inspect the complete DC rowhouse or detached home roofing system — sloped front pitch, flat rear membrane, chimney conditions, party wall junction flashing, parapet flashing, drainage, and gutter integration. Both sections assessed and reported separately with clear findings on each."
        },
        {
            num: 2,
            title: "HPRB Scope Discussion (Historic District Properties)",
            desc: "For DC historic district properties, we discuss the planned material and color scope at the consultation to confirm whether like-for-like replacement proceeds through standard DC DOB permitting or whether HPRB review applies. This conversation happens before any permit is prepared — so the permit process runs without unexpected review delays."
        },
        {
            num: 3,
            title: "Material Selection — Sloped and Flat Systems Separately",
            desc: "Roofing material selected separately for the sloped section (shingles, slate, or metal appropriate to the home's architectural era) and the flat section (modified bitumen, TPO, or EPDM appropriate to DC's climate and the section's drainage conditions). Materials discussed for HPRB compatibility on historic district properties."
        },
        {
            num: 4,
            title: "DC DOB Permit Filed at 1100 4th Street SW",
            desc: "All required DC roofing permits prepared and filed at DC DOB. We manage all DC DOB correspondence, respond to reviewer comments, and track permit approval. DLCP license #410526000209 documented in every submission. You do not contact DC DOB at any point."
        },
        {
            num: 5,
            title: "Tear-Off, Sheathing Assessment & Installation",
            desc: "Existing roofing removed from affected sections. Sheathing or decking assessed — original wood plank sheathing addressed on DC's oldest properties. All chimney flashing replaced. Party wall junction flashing re-detailed. Sloped and flat sections installed with the specific attention to their different requirements and transition between the two systems."
        },
        {
            num: 6,
            title: "DC DOB Inspection, Cleanup & Completion",
            desc: "All required DC DOB inspections scheduled and managed. Debris removed from DC property and sidewalk per DC requirements. Final walkthrough covering both roof sections. Written warranty documentation and maintenance recommendations — including flat roof maintenance schedule — provided at project close."
        }
    ];

    return (
        <div className="city-service-detail-page roofing-washington-dc">
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
                                    "description": "Licensed and insured general contractor providing residential roofing inspection, repair, replacement and emergency roofing in Washington DC. DLCP licensed #410526000209 — required for all DC contractor work. DC DOB permit experts. HPRB guidance for historic district properties.",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11810 Grand Park Ave. Suite 500",
                                        "addressLocality": "North Bethesda",
                                        "addressRegion": "MD",
                                        "postalCode": "20852",
                                        "addressCountry": "US"
                                    },
                                    "areaServed": { "@type": "Place", "name": "Washington, DC" },
                                    "hasCredential": [
                                        { "@type": "EducationalOccupationalCredential", "name": "MHIC License #156178" },
                                        { "@type": "EducationalOccupationalCredential", "name": "DC DLCP License #410526000209" }
                                    ]
                                },
                                {
                                    "@type": "Service",
                                    "name": "Roofing Services in Washington DC",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "Place", "name": "Washington, DC" },
                                    "serviceType": "Residential Roof Inspection, Repair, Replacement, Emergency Roofing and Maintenance"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Roofing", "item": "https://www.dmv-gc.com/service/roofing" },
                                        { "@type": "ListItem", "position": 4, "name": "Washington, DC", "item": "https://www.dmv-gc.com/service/roofing/washington-dc" }
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
                    Washington, DC
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">🏛️ Roofing Contractor • Washington DC — DLCP Licensed #410526000209</div>
                    <h1>Roofing Services in Washington, DC</h1>
                    <div className="hero-meta">
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ DLCP Licensed #410526000209</span>
                        <span className="badge">✓ DC DOB Permit — 1100 4th St SW</span>
                        <span className="badge">✓ HPRB Guidance for Historic Districts</span>
                        <span className="badge">✓ 1-Year Warranty</span>
                        <span className="badge">✓ Free Consultation</span>
                    </div>
                </div>

                <div className="intro-box">
                    DMV General Contracting Group provides professional <strong>roofing inspection, repair, replacement, emergency roofing and maintenance for Washington DC homeowners</strong> — Capitol Hill Victorians, Georgetown colonials and federals, Petworth foursquares, Cleveland Park tudors, English basement rowhouses, and DC condos. DLCP licensed #410526000209 for all DC contractor work. DC DOB permits filed at 1100 4th Street SW. HPRB guidance where applicable for historic district properties.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Washington DC Roofing — DLCP License Required, DC DOB Permits, and Rowhouse Conditions That Maryland Contractors Are Not Always Prepared For:</strong> Roofing work in DC requires a separate DC contractor license — Maryland MHIC alone is not valid in the District. DC has its own permit office at 1100 4th Street SW with its own inspection system. And DC&apos;s rowhouses, with their combination of sloped front-facing pitches and flat rear membrane sections, have roofing conditions unlike anything in suburban Montgomery County. DMV General Contracting Group holds DLCP license #410526000209, files at DC DOB, and is experienced with DC&apos;s rowhouse roofing profile.
                </div>

                {/* DLCP LICENSE */}
                <h2>DLCP License — The Credential Every DC Roofing Contractor Must Hold</h2>

                <div className="license-box">
                    <h3>⚠️ Maryland MHIC License Is Not Valid for Roofing Work in Washington DC</h3>
                    <p>Washington DC requires a separate DC contractor license — issued by the Department of Licensing and Consumer Protection (DLCP) — for all home improvement and construction work performed within the District, including roofing. A Maryland contractor holding only MHIC license is not authorized to perform roofing work in DC. A Maryland-only contractor who performs roofing in DC is working unlicensed in the District — a fact that may not surface until a homeowner files an insurance claim, sells the property, or the permit office requests license documentation. DMV General Contracting Group holds DC DLCP license <strong>#410526000209</strong> in addition to Maryland MHIC license #156178 — the complete credential set for the DMV area. When scheduling a DC roofing project, always ask the contractor for their DLCP license number and verify it before work begins.</p>
                </div>

                {/* SERVICES */}
                <h2>Roofing Services We Offer in Washington, DC</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Roof Inspection & Assessment</h3><p>Full inspection of DC rowhouse and detached home roofing — sloped sections, flat membrane sections, chimney conditions, parapet walls, gutters, and all transition points. Both the sloped and flat roof sections on DC rowhouses assessed in the same inspection.</p></div>
                    <div className="svc-card"><h3>Roof Repair</h3><p>Localized repair for active leaks, membrane punctures on flat sections, shingle damage on sloped sections, chimney flashing replacement, parapet wall flashing, and storm damage. DC rowhouse chimney flashing and flat-to-slope transition joints are the most common single-point repair sources.</p></div>
                    <div className="svc-card"><h3>Roof Replacement — Sloped Sections</h3><p>Full replacement of sloped shingle or slate sections on DC rowhouses and detached homes — material selection appropriate to the home&apos;s architectural era and DC historic district character where applicable. DC DOB permit filed and inspected.</p></div>
                    <div className="svc-card"><h3>Flat Roof Replacement</h3><p>Replacement of flat membrane roofing on DC rowhouse rear sections — modified bitumen, TPO, or EPDM membrane systems appropriate for DC&apos;s climate. Proper drainage slope and parapet integration critical for flat roof longevity in DC&apos;s freeze-thaw cycle.</p></div>
                    <div className="svc-card"><h3>Emergency Roofing</h3><p>Urgent response for storm damage and active leaks in DC rowhouses and homes — where water intrusion threatens original plaster, hardwood floors, and period millwork. Available 7 days a week. Temporary protection before permanent repairs.</p></div>
                    <div className="svc-card"><h3>Chimney Flashing & Crown</h3><p>DC rowhouse chimneys — original brick from the Victorian era through the 1940s — commonly have failed step flashing, deteriorated counter-flashing, and cracked crowns. Dedicated chimney assessment and repair as standalone scope or part of full replacement.</p></div>
                    <div className="svc-card"><h3>Flat Roof Maintenance & Coating</h3><p>Flat roof inspection, drain clearing, membrane recoating, and minor repair to extend service life on DC rowhouse rear flat sections. Annual maintenance is the most cost-effective protection for DC flat roofs exposed to full UV and freeze-thaw cycling.</p></div>
                    <div className="svc-card"><h3>Roof Maintenance</h3><p>Annual inspection of DC rowhouse roofing — sloped shingle condition, flat membrane status, chimney conditions, parapet flashing, and gutter integration. Small issues identified in maintenance prevent large leak emergencies in DC&apos;s demanding climate.</p></div>
                </div>

                {/* DC ROWHOUSE */}
                <h2>DC Rowhouse Roofing — A Unique Profile Unlike Suburban Maryland</h2>

                <div className="dc-box">
                    <h3>🏛️ What Makes DC Rowhouse Roofing Different from Suburban MD Homes</h3>
                    <p>DC&apos;s rowhouses — Capitol Hill Victorians, Georgetown Federals, Petworth foursquares, Cleveland Park tudors, and Bloomingdale colonials — have a roofing profile that combines elements not found in typical Montgomery County suburban homes:</p>
                    <ul>
                        <li><strong>Dual roof system — sloped front pitch + flat rear section:</strong> Most DC rowhouses have a steeply pitched front-facing roof visible from the street, and a flat or low-slope rear section over the back of the home and any rear addition. These are two completely different roofing systems requiring different materials, different installation approaches, and different maintenance schedules — and both are assessed at every DC rowhouse roof inspection. A contractor who inspects only the sloped section and misses the flat rear section leaves the most common DC rowhouse leak source uninspected.</li>
                        <li><strong>Party wall conditions at the roof edge:</strong> DC rowhouses share party walls with adjacent homes on both sides — and the roof edges at these shared walls create specific conditions for water infiltration, especially where flashing meets the party wall and where adjacent homes have different roof heights or profiles. Proper flashing at party wall junctions is critical and commonly the source of interior leaks in DC rowhouses that appear to have no obvious roof damage.</li>
                        <li><strong>Original brick chimneys — Victorian-era conditions:</strong> Capitol Hill Victorians and Georgetown colonials have brick chimneys from the late 1800s and early 1900s with mortar joints, crowns, and flashing that are now 80–130 years old. Chimney conditions in DC rowhouses are among the most advanced deterioration profiles we assess anywhere in the DMV area — and chimney failure is the single most common active leak source in these properties.</li>
                        <li><strong>Slate or early asphalt on the oldest DC homes:</strong> Georgetown Federals and early Capitol Hill Victorians may still have original slate or very early asphalt roofing on their sloped sections — requiring the same slate-assessment approach used for Chevy Chase&apos;s historic homes before any replacement recommendation is made.</li>
                        <li><strong>Historic district visibility:</strong> Many DC rowhouses are in historic districts where roofing material and color on street-visible surfaces is subject to HPRB review. Like-for-like replacement generally does not require HPRB review; material or color changes may. DC DOB permit required for all roofing regardless of historic district status.</li>
                    </ul>
                </div>

                {/* PERMITS */}
                <h2>Permits for DC Roofing — DC DOB at 1100 4th Street SW</h2>
                <div className="banner">
                    <strong>DC roofing permits are filed with the DC Department of Buildings (DC DOB) at 1100 4th Street SW, Washington, DC 20024</strong> — not with Montgomery County DPS, not with any Maryland permit office. Washington DC has its own permit system entirely separate from Maryland. All DC roofing permits, all DC roofing inspections, and all DC contractor license requirements operate under DC authority. DMV General Contracting Group files all DC roofing permits at DC DOB, manages all DC DOB correspondence, and coordinates all required DC inspections in-house. You do not contact DC DOB at any point in the process.
                </div>

                {/* HPRB */}
                <h2>HPRB — Historic Preservation Review in DC&apos;s Historic Districts</h2>

                <div className="hprb-box">
                    <h3>🏛️ When Does DC Roofing Require HPRB Review?</h3>
                    <p>Washington DC&apos;s Historic Preservation Review Board (HPRB) has authority over exterior modifications to properties in DC&apos;s historic districts — which includes much of Capitol Hill, Georgetown, Dupont Circle, Logan Circle, and other established DC neighborhoods. For roofing specifically: <strong>like-for-like replacement</strong> (same material, same color, same profile as the existing roof) generally proceeds through the standard DC DOB permit process without HPRB review. <strong>Material or color changes</strong> on the street-visible pitched roof sections of a DC historic district property may require HPRB review or a Certificate of Appropriateness before DC DOB will issue the permit. Rear flat roof replacement generally does not trigger HPRB review as it is not visible from the street. DMV General Contracting Group discusses the specific material scope with every DC historic district homeowner at the consultation — confirming whether HPRB review applies before any permit is filed, so there are no surprises in the DC DOB process.</p>
                </div>

                {/* MATERIALS */}
                <h2>Roofing Materials for Washington DC Properties</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>Material</th>
                                    <th>DC Application</th>
                                    <th>Key Consideration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Architectural Asphalt Shingles</strong></td>
                                    <td>Sloped sections on most DC rowhouses and detached homes</td>
                                    <td>Most widely used for DC sloped roofs. Color selection matters for historic district properties — charcoal, slate gray, and weathered wood tones are most commonly appropriate. Like-for-like replacement in same color generally does not trigger HPRB review.</td>
                                </tr>
                                <tr>
                                    <td><strong>Natural or Synthetic Slate</strong></td>
                                    <td>Georgetown Federals, early Capitol Hill Victorians, historic detached homes</td>
                                    <td>Most appropriate material for DC&apos;s oldest and most architecturally significant properties. Slate assessment required before recommending replacement on homes where original slate may still be serviceable.</td>
                                </tr>
                                <tr>
                                    <td><strong>Modified Bitumen (Flat Roof)</strong></td>
                                    <td>DC rowhouse rear flat sections</td>
                                    <td>Most common flat roofing system for DC rowhouses. Torch-down or self-adhered modified bitumen provides good performance in DC&apos;s freeze-thaw climate. Proper drainage slope and parapet flashing are critical.</td>
                                </tr>
                                <tr>
                                    <td><strong>TPO Membrane (Flat Roof)</strong></td>
                                    <td>DC rowhouse rear flat sections and low-slope areas</td>
                                    <td>Single-ply thermoplastic membrane — excellent UV and heat resistance. Good option for DC flat roofs with adequate drainage. White TPO reflects heat; black EPDM absorbs it — color choice has meaningful impact on DC&apos;s summer cooling loads.</td>
                                </tr>
                                <tr>
                                    <td><strong>EPDM Rubber (Flat Roof)</strong></td>
                                    <td>DC rowhouse rear flat sections</td>
                                    <td>Durable single-ply membrane with excellent weathering resistance. Very long service life when properly installed and maintained. Black color absorbs heat — relevant for DC homeowners focused on energy performance.</td>
                                </tr>
                                <tr>
                                    <td><strong>Standing Seam Metal</strong></td>
                                    <td>Select DC architectural profiles; bay window roofs</td>
                                    <td>Appropriate for certain DC architectural details — bay window roofs, portico roofs, and select colonial and federal profiles. HPRB may have preferences for historic district properties.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* REPAIR VS REPLACE */}
                <h2>Roof Repair vs. Roof Replacement in Washington DC</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Sloped Section — Repair vs. Replace</h3><p>Repair is appropriate for localized storm damage, isolated shingle failures, or single flashing issues on a roof with serviceable shingles elsewhere. Replacement is warranted when shingles are at end of service life, when granule loss is widespread, or when multiple leak sources exist. For DC rowhouses with original or early-replacement slate, targeted slate repair may extend service life significantly before full replacement is needed.</p></div>
                    <div className="svc-card"><h3>Flat Section — Repair vs. Replace</h3><p>DC rowhouse flat roof sections typically have shorter service cycles than sloped sections — modified bitumen and single-ply membranes in DC&apos;s climate typically last 15–25 years before replacement is warranted. Repair is appropriate for isolated punctures, seam failures, or drain blockage issues on membranes with otherwise sound condition. Widespread membrane cracking, blistering, or ponding water that cannot be resolved with drainage correction indicates replacement.</p></div>
                    <div className="svc-card"><h3>Professional Inspection — Both Sections</h3><p>DC rowhouse roof inspection must cover both the sloped front section and the flat rear section separately — they have different conditions, different remaining service lives, and different remediation needs. An inspection that addresses only one section gives an incomplete picture of the home&apos;s roofing situation.</p></div>
                </div>

                {/* QUALITY INSTALLATION */}
                <h2>What Makes a Quality Roofing Project in Washington DC?</h2>
                <div className="svc-grid">
                    <div className="svc-card"><strong>📋 DLCP License #410526000209</strong><p>The only contractor license that authorizes roofing work in DC. Maryland MHIC alone is not valid. Verify the DLCP number before any DC roofing work begins.</p></div>
                    <div className="svc-card"><strong>🏛️ DC DOB Permit Filed</strong><p>All DC roofing permits filed at 1100 4th Street SW. All DC DOB inspections scheduled and managed in-house. No involvement required from the homeowner.</p></div>
                    <div className="svc-card"><strong>🔍 Both Roof Sections Assessed</strong><p>DC rowhouse sloped front pitch and flat rear section both assessed in the same inspection — the complete picture of the home&apos;s roofing condition.</p></div>
                    <div className="svc-card"><strong>🏘️ HPRB Guidance</strong><p>Historic district material and color implications discussed before any DC DOB permit is filed — no surprises in the permit review process for historic district homeowners.</p></div>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for Roofing in Washington DC?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>DLCP Licensed in DC</strong>
                        <span>#410526000209 — required for all DC roofing work</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🏛️</div>
                        <strong>DC DOB Permit Team</strong>
                        <span>1100 4th St SW — filed and managed in-house</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🛡️</div>
                        <strong>MHIC Licensed & Insured</strong>
                        <span>#156178 · Full DC & MD coverage · 1-year warranty</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9-Star Reputation</strong>
                        <span>97+ verified homeowner reviews</span>
                    </div>
                </div>

                {/* PROCESS */}
                <h2>Our Roofing Process in Washington DC</h2>
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
                <h2>Emergency Roof Repair in Washington DC</h2>
                <p>Active leaks in DC rowhouses present particular urgency — original plaster ceilings, hardwood floors, period millwork, and in some cases historically significant interior elements are all at risk from water intrusion that is not stopped quickly. DMV General Contracting Group provides emergency roofing response for DC homeowners facing urgent situations, available 7 days a week. We are experienced with DC rowhouse roofing conditions — recognizing that chimney flashing, flat-to-slope transition joints, parapet flashing, and party wall junctions are the most common emergency leak sources in these properties — and install temporary protective measures before permanent repairs are scheduled and permitted through DC DOB.</p>

                {/* MAINTENANCE */}
                <h2>Roof Maintenance for Washington DC Homeowners</h2>
                <p>DC rowhouse roofing maintenance is more important — and more specific — than suburban home maintenance. The flat rear section requires annual inspection of membrane condition, drain performance, and parapet flashing integrity. The sloped front section requires shingle and flashing assessment. The chimney requires mortar, crown, and flashing evaluation annually. DMV General Contracting Group&apos;s DC roofing maintenance program covers all three elements in a single annual visit — identifying the small conditions that cause large leaks in DC&apos;s demanding climate before they reach the interior.</p>

                {/* AREAS */}
                <h2>Serving All Washington DC Neighborhoods for Roofing</h2>
                <div className="areas-grid">
                    <span className="area-pill">Capitol Hill</span>
                    <span className="area-pill">Georgetown</span>
                    <span className="area-pill">Cleveland Park</span>
                    <span className="area-pill">Chevy Chase DC</span>
                    <span className="area-pill">Tenleytown</span>
                    <span className="area-pill">Dupont Circle</span>
                    <span className="area-pill">Columbia Heights</span>
                    <span className="area-pill">Petworth</span>
                    <span className="area-pill">Bloomingdale</span>
                    <span className="area-pill">Logan Circle</span>
                    <span className="area-pill">Woodley Park</span>
                    <span className="area-pill">Spring Valley</span>
                    <span className="area-pill">Foxhall</span>
                    <span className="area-pill">Adams Morgan</span>
                    <span className="area-pill">Shaw</span>
                    <span className="area-pill">U Street Corridor</span>
                </div>
                <div className="banner">
                    <strong>DC Roofing License Note:</strong> Maryland MHIC license does not authorize roofing work in Washington DC. DC DLCP license #410526000209 is required for all DC contractor work. DMV General Contracting Group holds both — the complete credential set for the DMV area. When scheduling DC roofing work with any contractor, confirm their DLCP license number and verify it with DC DLCP before work begins.
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Roofing Services in Washington DC</h2>
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
                    <h2>Explore Our Other Services in Washington, DC</h2>
                    <ul>
                        <li><Link href="/service/siding-installation/washington-dc">Siding Installation in Washington DC</Link></li>
                        <li><Link href="/service/home-additions/washington-dc">Home Additions in Washington DC</Link></li>
                        <li><Link href="/service/electrical-services/washington-dc">Electrical Services in Washington DC</Link></li>
                        <li><Link href="/service/kitchen-remodeling/washington-dc">Kitchen Remodeling in Washington DC</Link></li>
                        <li><Link href="/service/bathroom-remodeling/washington-dc">Bathroom Remodeling in Washington DC</Link></li>
                        <li><Link href="/service/basement-remodeling/washington-dc">Basement Remodeling in Washington DC</Link></li>
                        <li><Link href="/service/adu/washington-dc">ADU Construction in Washington DC</Link></li>
                        <li><Link href="/service/carpet-installation/washington-dc">Carpet Installation in Washington DC</Link></li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="cta-banner">
                    <h2>Ready for a Roofing Project in Washington DC?</h2>
                    <p>Schedule a professional roof assessment — DLCP licensed #410526000209, DC DOB permits filed at 1100 4th Street SW, sloped and flat sections both assessed, HPRB guidance for historic district properties. Free consultation, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default RoofingWashingtonDC;
