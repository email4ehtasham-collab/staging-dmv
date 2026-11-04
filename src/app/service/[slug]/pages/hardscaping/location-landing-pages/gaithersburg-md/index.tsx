import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../hardscaping-city-style.scss";
import "./style.scss";

const HardscapingGaithersburgMD = () => {
    const faqData = [
        {
            question: "Which permit office covers hardscaping in Gaithersburg, MD?",
            answer: "It depends on your community. Kentlands and Lakelands file structural hardscaping permits with the City of Gaithersburg DPW. Crown Farm, Washingtonian Woods, and most other Gaithersburg communities file with MoCo DPS at 2425 Reedie Drive, Wheaton. Your mailing address and zip code alone do not determine which office applies — parcel location does. DMV General Contracting Group confirms the correct permit jurisdiction for your specific Gaithersburg address at the free consultation before any permit is prepared."
        },
        {
            question: "Does my Kentlands hardscaping project need ARC approval?",
            answer: "Yes — in most cases. Kentlands' Architectural Review Committee requires approval for exterior modifications including patio additions, retaining walls, driveway changes, and outdoor kitchen structures visible from the street or neighboring properties. DMV General Contracting Group prepares all ARC documentation, submits on your behalf, and coordinates the ARC and City of Gaithersburg DPW permit processes concurrently. ARC-compatible materials (brick, natural stone, wood) are specified from the design stage — not selected and then changed after ARC rejection."
        },
        {
            question: "What hardscaping material is most appropriate for a Kentlands home?",
            answer: "Brick is the most architecturally compatible and ARC-compatible choice for Kentlands — it references the community's brick streetscapes and traditional building character. Natural bluestone in a traditional cut profile is an excellent alternative. Concrete pavers in earth-tone, smaller-unit profiles are a practical lower-cost option. Large-format modern porcelain and stamped concrete in contemporary patterns are not appropriate for Kentlands' traditional architectural character and are unlikely to receive ARC approval."
        },
        {
            question: "My Gaithersburg townhome has a small rear courtyard — can meaningful hardscaping be done?",
            answer: "Yes. Kentlands and Lakelands townhome rear courtyards are compact, but well-designed hardscaping transforms them into genuinely functional outdoor spaces. DMV General Contracting Group specializes in small-space hardscape design for Gaithersburg townhomes — efficient patio layouts in period-appropriate materials, compact pergola or trellis structures for vertical interest, and built-in seating or grill station where space allows. Small outdoor spaces well done have a significant impact on daily quality of life."
        },
        {
            question: "How much does hardscaping cost in Gaithersburg, MD?",
            answer: "Kentlands and Lakelands townhome projects are typically $10,000–$22,000 for a well-designed courtyard patio with brick or stone. Crown Farm and Washingtonian Woods single-family home patios run $12,000–$30,000+. Retaining walls run $5,000–$20,000+. A complete outdoor living area runs $30,000–$70,000+. All prices confirmed at the free on-site estimate after jurisdiction and HOA requirements are confirmed. Kentlands ARC documentation preparation included at no additional charge."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Free Consultation & Jurisdiction Confirmation",
            desc: "We visit your Gaithersburg property, assess the outdoor space, and confirm the correct permit jurisdiction for your specific parcel — City of Gaithersburg DPW or MoCo DPS. Kentlands and Lakelands ARC requirements also confirmed at this stage. HOA specifications noted for Crown Farm and Washingtonian Woods. Free, no obligation."
        },
        {
            num: 2,
            title: "Design & Community-Appropriate Materials",
            desc: "Hardscape layout and materials selected with your community's architectural character and HOA specifications as the guiding framework. Kentlands ARC-compatible materials specified from the design stage. Crown Farm and Washingtonian Woods HOA approved materials confirmed before ordering."
        },
        {
            num: 3,
            title: "ARC Submission & Permit Filing",
            desc: "For Kentlands and Lakelands: ARC documentation prepared and submitted; City of Gaithersburg DPW permit prepared concurrently. For Crown Farm and Washingtonian Woods: MoCo DPS permit filed at 2425 Reedie Drive. All correspondence managed in-house — you do not contact any permit office or HOA committee directly."
        },
        {
            num: 4,
            title: "Excavation, Grading & Base Preparation",
            desc: "Existing surface removed, grade adjusted where required, and appropriate base installed for each hardscape element. Drainage infrastructure installed before any surface material is placed. Slope and drainage managed away from home foundation and any adjacent HOA common area."
        },
        {
            num: 5,
            title: "Hardscape Installation",
            desc: "Brick, natural stone, or community-appropriate pavers installed on the prepared base per the ARC-approved design. Retaining walls built. Outdoor kitchen installed where included. Gas and electrical work completed by licensed in-house trades. Landscape lighting wired before patio surface is completed."
        },
        {
            num: 6,
            title: "Inspection, Cleanup & Completion",
            desc: "All required City DPW or MoCo DPS inspections scheduled and managed. Work area cleaned. Final walkthrough. Warranty documentation provided at project close."
        }
    ];

    return (
        <div className="city-service-detail-page hardscaping-gaithersburg-md hardscaping-page">
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
                                    "description": "Professional hardscaping contractor serving Gaithersburg, MD. Dual permit jurisdiction expertise — City of Gaithersburg DPW for Kentlands and Lakelands; MoCo DPS for Crown Farm and Washingtonian Woods. Kentlands ARC coordination. Custom patios, walkways, retaining walls, driveways and outdoor kitchens. MHIC #156178.",
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
                                    "name": "Hardscaping Services in Gaithersburg, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Gaithersburg" },
                                    "serviceType": "Hardscaping, Patio, Walkways, Retaining Walls, Driveway Paving, Outdoor Kitchen, Outdoor Living"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Hardscaping", "item": "https://www.dmv-gc.com/service/hardscaping" },
                                        { "@type": "ListItem", "position": 4, "name": "Gaithersburg, MD", "item": "https://www.dmv-gc.com/service/hardscaping/gaithersburg-md" }
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
                    Gaithersburg, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">DMV GENERAL CONTRACTING GROUP · GAITHERSBURG, MD</div>
                    <h1>Hardscaping Services in Gaithersburg, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">⚖️ Dual Permit Jurisdiction — Confirmed by Parcel</span>
                        <span className="badge">🏘️ Kentlands ARC Coordination</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                        <span className="badge">Licensed & Insured</span>
                        <span className="badge">Free Consultation</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional hardscaping design and installation for all Gaithersburg communities — Kentlands, Lakelands, Crown Farm, Washingtonian Woods, and established Gaithersburg neighborhoods. Dual permit jurisdiction expertise: City of Gaithersburg DPW for Kentlands and Lakelands; MoCo DPS for Crown Farm and Washingtonian Woods. Kentlands ARC coordination included. Community-appropriate materials for every project.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Gaithersburg Hardscaping Expertise:</strong> Gaithersburg&apos;s planned communities — Kentlands, Lakelands, Crown Farm, and Washingtonian Woods — each have their own character, lot configurations, and HOA requirements. And critically, Gaithersburg has two separate permit jurisdictions: Kentlands and Lakelands properties file structural hardscaping permits with the City of Gaithersburg DPW, while most other Gaithersburg communities file with MoCo DPS. Filing at the wrong office means no permit is issued — and an unpermitted retaining wall or outdoor kitchen creates resale and insurance documentation problems. DMV General Contracting Group confirms the correct permit authority for every Gaithersburg address at the free consultation and manages all filings in-house.
                </div>

                {/* PERMIT JURISDICTIONS */}
                <h2>Gaithersburg&apos;s Two Permit Jurisdictions — Confirmed Before Any Work Begins</h2>

                <div className="juris-grid">
                    <div className="juris-card">
                        <h3>🏛️ City of Gaithersburg DPW — Kentlands & Lakelands</h3>
                        <ul>
                            <li><strong>Communities covered:</strong> Kentlands, Lakelands</li>
                            <li>Retaining walls over 30&apos;&apos;, outdoor kitchens with gas or electrical, and driveway road connections filed with City of Gaithersburg DPW</li>
                            <li>Separate from MoCo DPS — county does not accept permit applications for City of Gaithersburg properties</li>
                            <li><strong>Kentlands ARC approval</strong> also required for exterior modifications before City DPW permit is filed</li>
                            <li>DMV-GC files at City DPW and coordinates ARC submissions concurrently</li>
                        </ul>
                    </div>
                    <div className="juris-card">
                        <h3>🏛️ Montgomery County DPS — Crown Farm, Washingtonian Woods & Others</h3>
                        <ul>
                            <li><strong>Communities covered:</strong> Crown Farm, Washingtonian Woods, Flower Hill, Montgomery Village, and most Gaithersburg communities outside city limits</li>
                            <li>All structural hardscaping permits filed with MoCo DPS at 2425 Reedie Drive, Wheaton</li>
                            <li>Separate from City of Gaithersburg DPW — city office does not cover these properties</li>
                            <li>HOA requirements vary by community — Crown Farm and Washingtonian Woods HOAs may have their own ARC processes</li>
                            <li>DMV-GC confirms jurisdiction by address and files at MoCo DPS for covered properties</li>
                        </ul>
                    </div>
                </div>

                <div className="banner">
                    <strong>Important — Gaithersburg mailing address alone does not determine which permit office applies.</strong> Two adjacent homes with identical Gaithersburg addresses may file at different offices depending on which community their parcel falls within. DMV General Contracting Group confirms the correct permit jurisdiction for every Gaithersburg hardscaping project at the free consultation — by parcel, not by neighborhood name or zip code.
                </div>

                {/* SERVICES */}
                <h2>Complete Hardscaping Services for Gaithersburg Homes</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>🪨 Patio Installation</h3><p>Brick and natural bluestone for Kentlands&apos; new urbanist character; concrete pavers and natural stone for Crown Farm and Washingtonian Woods&apos; newer profiles. Compact courtyard patio designs for Kentlands and Lakelands townhomes; larger outdoor living layouts for Crown Farm and Washingtonian Woods single-family homes.</p></div>
                    <div className="svc-card"><h3>🚶 Walkways & Garden Paths</h3><p>Natural stone and paver walkways connecting home entries, driveways, patios, and garden areas across all Gaithersburg communities. Brick in traditional patterns for Kentlands — consistent with the community&apos;s streetscape character. Concrete pavers in contemporary profiles for Crown Farm and Washingtonian Woods.</p></div>
                    <div className="svc-card"><h3>🧱 Retaining Walls</h3><p>Retaining walls managing grade changes on Gaithersburg residential lots — natural stone and segmental block options. Kentlands ARC-compliant materials confirmed before any wall design is finalized. City of Gaithersburg DPW or MoCo DPS permit confirmed by parcel for walls over 30 inches.</p></div>
                    <div className="svc-card"><h3>🚗 Driveway Paving & Repair</h3><p>Driveway repaving for all Gaithersburg communities — concrete pavers, permeable paver systems, and decorative aprons. Kentlands ARC confirmation for driveway material changes where visible from the street. Correct permit jurisdiction confirmed before road connection work begins.</p></div>
                    <div className="svc-card"><h3>🍳 Outdoor Kitchen & Grill Station</h3><p>Outdoor kitchen installations scaled to each Gaithersburg community&apos;s lot and HOA specifications. Kentlands ARC-approved materials for countertops and enclosures. Gas line and electrical work managed in-house. Permit jurisdiction confirmed before any gas or electrical scope begins.</p></div>
                    <div className="svc-card"><h3>🏘️ Courtyard & Small-Space Hardscaping</h3><p>Kentlands and Lakelands townhome rear courtyards optimized for maximum function — efficient patio layouts, compact pergola or trellis structures, built-in seating, and vertical elements that make compact outdoor spaces feel complete and intentional. Small-space hardscape design is a specialty for our Kentlands work.</p></div>
                    <div className="svc-card"><h3>💧 Drainage & Grading</h3><p>Surface drainage planning for all Gaithersburg communities — proper slope, French drains, and channel drains directing water away from home foundations and off hardscape surfaces. Drainage designed as part of every hardscape scope, not added after pooling problems appear on newly installed patios or driveways.</p></div>
                    <div className="svc-card"><h3>💡 Landscape Lighting</h3><p>Low-voltage path lighting along Gaithersburg walkways, step lighting on retaining walls, and accent lighting for outdoor kitchen and patio areas. Planned as part of the hardscape design — wiring routed before patio surface is installed so lighting is integrated into the overall hardscape composition.</p></div>
                </div>

                {/* COMMUNITY TABLE */}
                <h2>Hardscaping by Gaithersburg Community</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Community</th>
                                    <th>Typical Hardscape Scope</th>
                                    <th>Key Permit & HOA Considerations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Kentlands</strong></td>
                                    <td>Compact courtyard patio in brick or bluestone, pergola or trellis, built-in grill station, front entry walk in period-appropriate material</td>
                                    <td>Kentlands ARC approval required before City of Gaithersburg DPW permit. Brick and natural stone strongly preferred — large-format modern materials not appropriate for Kentlands&apos; traditional character. DMV-GC prepares and submits ARC documentation in-house.</td>
                                </tr>
                                <tr>
                                    <td><strong>Lakelands</strong></td>
                                    <td>Rear patio with pavers or natural stone, pergola, fire pit, entry walkway</td>
                                    <td>City of Gaithersburg DPW permit. Lakelands HOA ARC requirements confirmed before scope is finalized. Lakelands lots slightly larger than Kentlands — more room for a complete outdoor living setup.</td>
                                </tr>
                                <tr>
                                    <td><strong>Crown Farm</strong></td>
                                    <td>Larger rear patio, full outdoor kitchen, pergola or pavilion, retaining wall where grade requires</td>
                                    <td>MoCo DPS permit at 2425 Reedie Drive. Crown Farm HOA ARC requirements confirmed. Newer single-family homes support larger outdoor living investments and contemporary material choices.</td>
                                </tr>
                                <tr>
                                    <td><strong>Washingtonian Woods</strong></td>
                                    <td>Rear patio, outdoor kitchen, retaining wall, driveway upgrade</td>
                                    <td>MoCo DPS permit. Washingtonian Woods HOA requirements confirmed. Established community with generous lot sizes suited to complete outdoor living areas.</td>
                                </tr>
                                <tr>
                                    <td><strong>Older Gaithersburg neighborhoods</strong></td>
                                    <td>Patio replacement, new pavers or stone, simple walkway or retaining wall</td>
                                    <td>MoCo DPS permit for most. Some older communities may have no HOA. Old concrete slab and asphalt replacement common in 1970s–1980s housing stock.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* HOA */}
                <h2>Kentlands ARC — What Hardscaping Requires Approval</h2>
                <div className="banner">
                    <strong>Kentlands Architectural Review Committee (ARC):</strong> Kentlands is a carefully planned new urbanist community where exterior modifications — including patio additions, retaining wall installations, driveway changes, and outdoor kitchen structures visible from the street or neighboring properties — typically require ARC approval before City of Gaithersburg DPW permits are issued. The ARC process requires submission of design plans, material specifications, and color documentation. DMV General Contracting Group prepares all required ARC documentation, submits on your behalf, and coordinates the ARC and City DPW permit processes concurrently so neither creates unnecessary project delay. Kentlands ARC-compatible materials (brick, natural stone, wood) are specified from the design stage — not selected and then changed after ARC rejection.
                </div>

                {/* MATERIALS */}
                <h2>Hardscaping Materials by Gaithersburg Community</h2>
                <p>Gaithersburg&apos;s planned communities have distinct architectural characters — Kentlands&apos; neo-traditional brick and shingle-style homes call for different hardscaping materials than Crown Farm&apos;s contemporary colonials or Washingtonian Woods&apos; traditional profiles. DMV General Contracting Group recommends materials for each community with the architectural character and HOA specifications as the guiding framework.</p>
                <div className="materials-grid">
                    <div className="material-card"><h3>🧱 Brick — Kentlands First Choice</h3><p>Reclaimed or new brick in running bond, herringbone, or basket weave — the most period-appropriate and ARC-compatible hardscaping material for Kentlands&apos; new urbanist character. References the community&apos;s brick-heavy streetscapes. Warm tone, durable, repairable. Most likely to pass Kentlands ARC review without revision.</p></div>
                    <div className="material-card"><h3>🪨 Natural Bluestone — All Communities</h3><p>Uniform-cut or irregular bluestone works across all Gaithersburg communities. Most popular upgrade material in Gaithersburg. ARC-compatible for Kentlands in traditional cut profiles. Contemporary profiles work for Crown Farm and Washingtonian Woods. Cool gray tone and natural texture complement both neo-traditional and contemporary architectural profiles.</p></div>
                    <div className="material-card"><h3>🧱 Concrete Pavers — Practical Choice</h3><p>Earth-tone tumbled or natural-finish pavers for all Gaithersburg communities. For Kentlands, smaller unit sizes in warm earth tones read as more period-compatible than large contemporary slabs. For Crown Farm and Washingtonian Woods, larger contemporary profiles are appropriate. HOA approved colors confirmed before ordering for all communities.</p></div>
                    <div className="material-card"><h3>🪨 Travertine — Crown Farm & Washingtonian Woods</h3><p>Warm cream and tan tones — popular for Crown Farm and Washingtonian Woods outdoor kitchen areas and contemporary home profiles. Less period-authentic than brick or bluestone for Kentlands&apos; traditional character, but appropriate for newer Gaithersburg communities where contemporary materials are acceptable.</p></div>
                    <div className="material-card"><h3>🧱 Large-Format Porcelain — Newer Homes Only</h3><p>Appropriate for Crown Farm and Washingtonian Woods&apos; newer contemporary homes. Not appropriate or ARC-compatible for Kentlands&apos; traditional character. Non-porous, stain-resistant, and available in premium stone-look profiles. Frost-rated for Maryland outdoor use. HOA approved profiles confirmed before selection.</p></div>
                    <div className="material-card"><h3>🏗️ Stamped Concrete — Older Neighborhoods</h3><p>Most appropriate for older Gaithersburg neighborhoods where there is no HOA color restriction and budget is the primary driver. Cobblestone and slate patterns in earth tones. Not recommended for Kentlands or Crown Farm where HOA specifications apply. Sealed for Maryland&apos;s climate.</p></div>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for Hardscaping in Gaithersburg?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">⚖️</div>
                        <strong>Dual Jurisdiction Expertise</strong>
                        <span>City DPW vs MoCo DPS by parcel</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🏘️</div>
                        <strong>Kentlands ARC Coordination</strong>
                        <span>Documentation prepared in-house</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9 Rating</strong>
                        <span>97+ verified reviews</span>
                    </div>
                    <div className="trust-item">
                        <strong>MD MHIC #156178</strong>
                        <span>Licensed & fully insured</span>
                    </div>
                </div>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Dual Permit Jurisdiction Expertise</h3><p>City of Gaithersburg DPW for Kentlands and Lakelands; MoCo DPS for Crown Farm and Washingtonian Woods. Correct office confirmed by parcel at the free consultation — never assumed by neighborhood name or zip code. Filing at the wrong office means no permit is issued.</p></div>
                    <div className="svc-card"><h3>Kentlands & Lakelands ARC Management</h3><p>ARC submission documentation prepared, submitted, and coordinated concurrently with City DPW permit process. ARC-compatible materials specified from the design stage. Homeowners do not manage the ARC process independently — DMV-GC handles it as part of the project scope.</p></div>
                    <div className="svc-card"><h3>Community-Appropriate Design</h3><p>Material and design recommendations that fit each Gaithersburg community&apos;s architectural character and HOA specifications — brick and natural stone for Kentlands; contemporary pavers and porcelain for Crown Farm. Not a one-size-fits-all approach applied across all Gaithersburg communities.</p></div>
                    <div className="svc-card"><h3>All Trades In-House</h3><p>Gas line extensions, electrical connections, drainage, and hardscape installation all coordinated under one design-build workflow — no separate subcontractors on different schedules managing pieces of your Gaithersburg outdoor project.</p></div>
                </div>

                {/* PROCESS */}
                <h2>Our Hardscaping Process in Gaithersburg</h2>
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

                {/* COSTS */}
                <h2>Hardscaping Project Costs — Gaithersburg, MD</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>Project Type</th>
                                    <th>Starting Price Range</th>
                                    <th>Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Kentlands courtyard patio (brick/stone)</td>
                                    <td>$10,000 – $22,000+</td>
                                    <td>Compact townhome courtyard; brick or bluestone; ARC + City DPW permit</td>
                                </tr>
                                <tr>
                                    <td>Crown Farm / Washingtonian Woods patio</td>
                                    <td>$12,000 – $30,000+</td>
                                    <td>Larger single-family lot; pavers or natural stone; MoCo DPS permit</td>
                                </tr>
                                <tr>
                                    <td>Natural stone walkway</td>
                                    <td>$4,000 – $9,000+</td>
                                    <td>All communities; ARC confirmation for Kentlands street-visible walks</td>
                                </tr>
                                <tr>
                                    <td>Retaining wall</td>
                                    <td>$5,000 – $20,000+</td>
                                    <td>City DPW or MoCo DPS permit over 30&apos;&apos;; engineering over 4ft</td>
                                </tr>
                                <tr>
                                    <td>Driveway repaving</td>
                                    <td>$7,000 – $20,000+</td>
                                    <td>Jurisdiction confirmed; ARC for Kentlands driveway material changes</td>
                                </tr>
                                <tr>
                                    <td>Outdoor kitchen</td>
                                    <td>$10,000 – $35,000+</td>
                                    <td>ARC-compatible materials for Kentlands; gas + electrical in-house</td>
                                </tr>
                                <tr>
                                    <td>Complete outdoor living area</td>
                                    <td>$30,000 – $70,000+</td>
                                    <td>All trades in-house; dual jurisdiction permit managed throughout</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p style={{ fontSize: "13px", color: "#555", marginTop: "-20px" }}>* All prices confirmed at free on-site estimate. Kentlands ARC documentation preparation included at no additional charge.</p>

                {/* SERVICE AREA */}
                <h2>Hardscaping Service Area</h2>
                <p>DMV General Contracting Group provides hardscaping services throughout <strong>Gaithersburg, MD</strong> — including Kentlands, Lakelands, Crown Farm, Washingtonian Woods, Flower Hill, Montgomery Village, and surrounding communities including Rockville, North Bethesda, Kensington, Wheaton, and Garrett Park.</p>

                <div className="banner">
                    <strong>Gaithersburg Permit Summary:</strong> Kentlands and Lakelands → City of Gaithersburg DPW + Kentlands/Lakelands ARC. Crown Farm, Washingtonian Woods, and most other Gaithersburg communities → MoCo DPS at 2425 Reedie Drive, Wheaton. Your Gaithersburg mailing address does not determine which office applies — parcel location does. DMV General Contracting Group confirms the correct jurisdiction at every Gaithersburg hardscaping consultation.
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Hardscaping in Gaithersburg, MD</h2>
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
                    <h2>Explore Our Other Services in Gaithersburg, MD</h2>
                    <ul>
                        <li><Link href="/service/patios/gaithersburg-md">Patio Installation in Gaithersburg, MD</Link></li>
                        <li><Link href="/service/fence-installation/gaithersburg-md">Fence Installation in Gaithersburg, MD</Link></li>
                        <li><Link href="/service/decks/gaithersburg-md">Deck Building in Gaithersburg, MD</Link></li>
                        <li><Link href="/service/home-additions/gaithersburg-md">Home Additions in Gaithersburg, MD</Link></li>
                        <li><Link href="/service/design-build/gaithersburg-md">Design-Build Contractor in Gaithersburg, MD</Link></li>
                        <li><Link href="/service/siding-installation/gaithersburg-md">Siding Installation in Gaithersburg, MD</Link></li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="cta-banner">
                    <h2>Need Hardscaping Services in Gaithersburg, MD?</h2>
                    <p>Talk with DMV General Contracting Group about hardscaping for your Gaithersburg community — dual permit jurisdiction confirmed by parcel, Kentlands ARC coordination, community-appropriate materials for every project. Free consultation, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn">Call +1 240-730-1292</a>
                    <a href="mailto:support@dmv-gc.com" className="cta-btn outline">Email support@dmv-gc.com</a>
                </div>
            </div>
        </div>
    );
};

export default HardscapingGaithersburgMD;