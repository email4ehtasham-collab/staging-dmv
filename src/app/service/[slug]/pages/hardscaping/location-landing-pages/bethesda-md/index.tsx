import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../hardscaping-city-style.scss";
import "./style.scss";

const HardscapingBethesdaMD = () => {
    const faqData = [
        {
            question: "Does hardscaping require a permit in Bethesda, MD?",
            answer: "Simple ground-level patios and walkways typically do not require a permit in unincorporated Montgomery County. Retaining walls over 30 inches, outdoor kitchens with gas or electrical connections, and driveways connecting to county roads require MoCo DPS permits filed at 2425 Reedie Drive, Wheaton. DMV General Contracting Group confirms permit requirements for your specific Bethesda project at the free consultation and manages all filings in-house."
        },
        {
            question: "What is the best patio material for a Bethesda colonial?",
            answer: "Natural bluestone is the most popular premium choice for Bethesda's traditional colonials — cool gray tone, natural texture, and a character that ages well alongside mature plantings and formal gardens. Travertine is popular for outdoor kitchen areas and contemporary home profiles. Concrete pavers are the most practical choice for larger areas where natural stone is cost-prohibitive at scale. DMV General Contracting Group discusses all options at the free consultation."
        },
        {
            question: "Do I need an engineer for a retaining wall in Bethesda?",
            answer: "Retaining walls over 4 feet typically require engineering review and stamped drawings as part of the MoCo DPS permit process. Walls between 30 inches and 4 feet require a MoCo DPS permit but may not require a full engineering stamp depending on the specific scope and soil conditions. DMV General Contracting Group confirms engineering requirements for your specific Bethesda retaining wall at the consultation."
        },
        {
            question: "How does Bethesda's clay soil affect hardscaping design?",
            answer: "Clay-heavy soils expand when wet and contract when dry — creating movement that can shift and crack improperly designed hardscape installations. Proper base preparation (adequate compacted gravel depth), drainage planning (slope and French drains where needed), and appropriate joint spacing in paver systems all address clay-soil conditions. DMV General Contracting Group designs every Bethesda hardscape project with the local soil conditions in mind — not a generic approach applied regardless of site conditions."
        },
        {
            question: "Can DMV General Contracting Group design and build a complete outdoor living area in Bethesda?",
            answer: "Yes. DMV General Contracting Group designs and installs complete outdoor living spaces for Bethesda homeowners — patio, walkways, retaining walls, outdoor kitchen, pergola, fire feature, and landscape lighting designed as a coordinated whole. Gas line and electrical work managed by our licensed in-house trades team. All MoCo DPS permits filed and managed in-house. Free consultation to discuss your vision and budget."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Free Consultation & Site Assessment",
            desc: "We visit your Bethesda property, assess the outdoor space — topography, drainage conditions, existing landscape features, home architecture — and discuss your hardscaping vision and budget. Drainage conditions and soil type noted. Material recommendations appropriate to the home's character discussed. Free, no obligation."
        },
        {
            num: 2,
            title: "Design, Layout & Material Selection",
            desc: "Hardscape layout designed for your Bethesda property — patio zones, walkway routing, retaining wall placement, driveway layout, drainage plan. Materials selected based on the home's architectural character and the homeowner's priorities. Complete outdoor living areas designed as a coordinated whole."
        },
        {
            num: 3,
            title: "Permit Confirmation & Filing",
            desc: "MoCo DPS permit requirements confirmed for your specific project scope. Retaining walls, outdoor kitchens with gas or electrical, and structural elements permitted before installation begins. All MoCo DPS applications filed at 2425 Reedie Drive, Wheaton. All county correspondence managed in-house."
        },
        {
            num: 4,
            title: "Excavation, Grading & Base Preparation",
            desc: "Existing surface removed, grade adjusted per the drainage plan, and appropriate base installed for each hardscape element — compacted gravel base for patios and walkways, engineered backfill for retaining walls, aggregate base for driveway paving. Drainage infrastructure installed before surface materials are placed."
        },
        {
            num: 5,
            title: "Hardscape Installation & Feature Build-Out",
            desc: "Natural stone or pavers installed on the prepared base. Retaining walls built to specification. Outdoor kitchen constructed with natural stone countertop and masonry surround. Gas and electrical rough-in completed by licensed in-house trades. Steps, terracing, and landscape lighting installed per the design plan."
        },
        {
            num: 6,
            title: "Inspection, Sealing & Completion",
            desc: "All required MoCo DPS inspections scheduled and managed. Stone and paver surfaces sealed where applicable. Drainage tested — water flows correctly away from the home. Final walkthrough with you. Project documentation and warranty provided at close."
        }
    ];

    return (
        <div className="city-service-detail-page hardscaping-bethesda-md hardscaping-page">
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
                                    "description": "Professional hardscaping contractor serving Bethesda, MD. Custom patios, walkways, retaining walls, driveways, and outdoor kitchens for Bethesda's upscale colonials and established neighborhoods. MoCo DPS permits managed in-house. Natural stone specialists. MHIC #156178.",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11810 Grand Park Ave. Suite 500",
                                        "addressLocality": "North Bethesda",
                                        "addressRegion": "MD",
                                        "postalCode": "20852",
                                        "addressCountry": "US"
                                    },
                                    "areaServed": { "@type": "City", "name": "Bethesda" }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Hardscaping Services in Bethesda, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Bethesda" },
                                    "serviceType": "Hardscaping, Patio Installation, Walkways, Retaining Walls, Driveway Paving, Outdoor Kitchen, Outdoor Living"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Hardscaping", "item": "https://www.dmv-gc.com/service/hardscaping" },
                                        { "@type": "ListItem", "position": 4, "name": "Bethesda, MD", "item": "https://www.dmv-gc.com/service/hardscaping/bethesda-md" }
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
                    Bethesda, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">DMV GENERAL CONTRACTING GROUP · BETHESDA, MD</div>
                    <h1>Hardscaping Services in Bethesda, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                        <span className="badge">DC DLCP #410526000209</span>
                        <span className="badge">Licensed &amp; Insured</span>
                        <span className="badge">MoCo DPS Permits — In-House</span>
                        <span className="badge">Free Consultation</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional hardscaping design and installation for Bethesda homeowners — custom patios, natural stone walkways, retaining walls, driveway paving, outdoor kitchens, and complete outdoor living spaces for Bethesda&apos;s upscale colonials and established neighborhoods. MoCo DPS permits managed in-house. Natural stone specialists. Drainage expertise for Bethesda&apos;s clay-soil lots.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Bethesda Hardscaping Expertise:</strong> Bethesda homeowners — in Woodmont, Edgemoor, Battery Park, Wyngate, and Bradley Hills — invest in outdoor spaces that match the quality and character of their homes. Hardscaping here means natural stone patios, bluestone walkways, cut-stone retaining walls, and complete outdoor living areas — not stamped concrete and pressure-treated wood. DMV General Contracting Group designs and installs hardscaping for Bethesda properties at the material quality and design standard these homes expect, coordinating drainage, grading, and MoCo DPS permit requirements under one design-build workflow.
                </div>

                {/* SERVICES */}
                <h2>Complete Hardscaping Services for Bethesda Homes</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>🪨 Patio &amp; Outdoor Living Spaces</h3><p>Custom patio design and installation — natural bluestone, travertine, flagstone, and concrete pavers — creating outdoor gathering spaces that complement Bethesda&apos;s upscale colonial and contemporary architectural profiles. Multi-zone outdoor living areas with dining, lounge, kitchen, and fire feature zones designed as a coordinated whole.</p></div>
                    <div className="svc-card"><h3>🚶 Walkways &amp; Pathways</h3><p>Natural stone and paver walkways connecting the home&apos;s entry, driveway, patio, and garden areas — designed for both functionality and visual flow. Bluestone, flagstone, and concrete pavers in patterns appropriate to Bethesda&apos;s traditional and contemporary home profiles. Front entry walks set to complement the home&apos;s facade and landscaping.</p></div>
                    <div className="svc-card"><h3>🧱 Retaining Walls</h3><p>Custom retaining walls managing slopes, preventing soil erosion, and creating level usable areas on Bethesda&apos;s rolling residential lots. Natural fieldstone, cut limestone, and segmental block walls — material selected to complement the home&apos;s exterior character and the surrounding landscape. Walls over 30 inches require MoCo DPS permits managed in-house.</p></div>
                    <div className="svc-card"><h3>🚗 Driveways &amp; Paved Surfaces</h3><p>Driveway repaving and new driveway installation — concrete pavers, natural stone aprons, and permeable paver systems for Bethesda&apos;s established residential properties. Driveway design that improves curb appeal and manages surface drainage away from the home&apos;s foundation. Concrete paver driveways are repairable — individual units replaced if damaged.</p></div>
                    <div className="svc-card"><h3>🍳 Outdoor Kitchens &amp; Hardscape Features</h3><p>Built-in grills, countertops, outdoor refrigerators, sinks, fire pits, and custom outdoor kitchen installations — designed and built as permanent hardscape features of the Bethesda outdoor living space. Natural stone countertops and masonry surround preferred for Bethesda&apos;s quality-conscious homeowners. Gas line and electrical work managed in-house.</p></div>
                    <div className="svc-card"><h3>🌿 Steps, Terracing &amp; Grade Management</h3><p>Stone and masonry steps connecting grade changes throughout Bethesda&apos;s established residential lots — entry steps, garden steps, and terrace steps designed as visual and functional elements of the overall hardscape plan. Terracing to create level usable outdoor areas on sloped Bethesda lots.</p></div>
                    <div className="svc-card"><h3>💧 Drainage &amp; Grading</h3><p>Proper slope, surface drainage channels, and French drain integration prevent water from pooling on hardscape surfaces or migrating toward the home&apos;s foundation — essential on Bethesda&apos;s clay-soil lots where surface water management is a consistent challenge. Drainage designed as part of every hardscape scope, not added after problems appear.</p></div>
                    <div className="svc-card"><h3>💡 Landscape Lighting Integration</h3><p>Low-voltage landscape lighting integrated into hardscape features — path lights along walkways, uplighting on retaining walls, step lighting, and accent lighting for outdoor kitchen and patio areas. Lighting planned as part of the hardscape design rather than added as an afterthought to a completed project.</p></div>
                </div>

                {/* COMMUNITY TABLE */}
                <h2>Common Hardscaping Needs in Bethesda</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Project Type</th>
                                    <th>Bethesda-Specific Considerations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Natural stone patio</strong></td>
                                    <td>Bluestone or travertine set on a rigid mortar base for estate-quality installation. Drainage slope planned away from the home&apos;s foundation — critical on Bethesda&apos;s clay-soil lots. MoCo DPS permit required for structural additions (pergola, outdoor kitchen with gas or electrical). Neighborhoods: Woodmont, Edgemoor, Battery Park, Wyngate.</td>
                                </tr>
                                <tr>
                                    <td><strong>Front entry walkway</strong></td>
                                    <td>Natural bluestone or flagstone entry walk designed to complement the home&apos;s facade and front landscaping. Grade change from street to entry door managed with stone steps where necessary. No permit typically required for a simple walkway — confirmed at consultation.</td>
                                </tr>
                                <tr>
                                    <td><strong>Retaining wall — sloped lot</strong></td>
                                    <td>Cut limestone, natural fieldstone, or segmental block retaining wall managing a slope on a Bethesda residential lot. MoCo DPS permit required for walls over 30 inches. Engineering review for walls over 4 feet. Material selected to complement home&apos;s exterior character.</td>
                                </tr>
                                <tr>
                                    <td><strong>Driveway repaving</strong></td>
                                    <td>Existing asphalt or deteriorated concrete driveway replaced with concrete pavers or natural stone apron. Permeable paver option for Bethesda properties where stormwater management is a concern or an HOA requirement. Curb and street connection per MoCo road access standards.</td>
                                </tr>
                                <tr>
                                    <td><strong>Complete outdoor living area</strong></td>
                                    <td>Patio + walkway + retaining wall + outdoor kitchen + landscape lighting designed and built as a coordinated scope. Gas line and electrical connections managed in-house. MoCo DPS permits for structural and utility elements. One design-build team from concept to completion.</td>
                                </tr>
                                <tr>
                                    <td><strong>Drainage correction alongside hardscape</strong></td>
                                    <td>New hardscape installation is an opportunity to correct existing drainage problems — regrading surfaces, installing French drains, and directing surface water away from the home&apos;s foundation. Bethesda&apos;s clay-soil lots hold water near the surface — drainage planning is standard on every hardscape project.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* MATERIALS */}
                <h2>Hardscaping Materials for Bethesda Homes</h2>
                <p>Bethesda&apos;s upscale colonials, contemporaries, and traditional homes call for hardscaping materials that match the quality and architectural character of the property. DMV General Contracting Group discusses material options at the free consultation based on the home&apos;s style, the project&apos;s intended use, and the homeowner&apos;s long-term maintenance preferences.</p>
                <div className="materials-grid">
                    <div className="material-card"><h3>🪨 Natural Bluestone</h3><p>The most popular premium hardscaping material for Bethesda&apos;s traditional colonials — cool gray tone, natural texture, timeless character. Used for patios, walkways, steps, and entry features. Available in irregular (natural cleft) and uniform (thermal or sawn) profiles. Properly mortar-set for long-term stability through Maryland&apos;s freeze-thaw cycles.</p></div>
                    <div className="material-card"><h3>🪨 Travertine</h3><p>Warm cream and tan tones — popular for Bethesda&apos;s pool surrounds, outdoor kitchen areas, and contemporary home profiles. Tumbled travertine for informal settings; honed for contemporary profiles. Requires periodic sealing for outdoor kitchen and food-service areas. Stays cooler underfoot than darker stone in summer.</p></div>
                    <div className="material-card"><h3>🪨 Natural Fieldstone &amp; Limestone</h3><p>For retaining walls and garden features — dry-laid fieldstone for naturalistic settings; cut limestone for more formal retaining applications. Natural stone retaining walls complement Bethesda&apos;s established garden settings and mature tree canopy in a way that concrete block cannot.</p></div>
                    <div className="material-card"><h3>🧱 Concrete Pavers</h3><p>Durable, repairable, and available in a wide range of profiles and earth-tone colors. The most practical choice for larger patio areas, driveways, and walkways where natural stone is cost-prohibitive at scale. Individual pavers can be replaced if damaged — a significant advantage over poured concrete or asphalt for Bethesda&apos;s residential driveways.</p></div>
                    <div className="material-card"><h3>🧱 Permeable Pavers</h3><p>Permeable paver systems allow rainwater to pass through the surface into the subgrade below — reducing surface runoff, managing stormwater on Bethesda&apos;s clay-soil lots, and meeting any applicable stormwater management requirements. Increasingly popular for Bethesda driveway and large patio applications.</p></div>
                    <div className="material-card"><h3>🏗️ Stamped Concrete</h3><p>Cost-effective for large patio and driveway areas where natural stone or unit pavers are cost-prohibitive at scale. Custom stamped patterns in earth tones. Properly sealed for Maryland&apos;s climate. Less repairable than unit pavers if surface damage occurs. Generally more appropriate for utility areas than front-of-home hardscaping in Bethesda&apos;s quality-conscious neighborhoods.</p></div>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for Hardscaping in Bethesda?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9 Rating</strong>
                        <span>97+ verified reviews</span>
                    </div>
                    <div className="trust-item">
                        <strong>MD MHIC #156178</strong>
                        <span>Licensed &amp; fully insured</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🪨</div>
                        <strong>Natural Stone Specialists</strong>
                        <span>Bluestone, travertine, limestone</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">💧</div>
                        <strong>Drainage Expertise</strong>
                        <span>Clay-soil Bethesda lots</span>
                    </div>
                </div>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Design-Build Under One Roof</h3><p>Hardscape design, permit coordination, grading, drainage, stone and paver installation, outdoor kitchen construction, electrical, and gas line work — all coordinated under one design-build workflow. No separate subcontractors managing different pieces of your Bethesda outdoor project.</p></div>
                    <div className="svc-card"><h3>MoCo DPS Permit Expertise</h3><p>Retaining walls over 30 inches, outdoor kitchens with gas or electrical, and driveways connecting to county roads require MoCo DPS permits filed at 2425 Reedie Drive, Wheaton. DMV General Contracting Group confirms requirements at the consultation and manages all filings in-house.</p></div>
                    <div className="svc-card"><h3>Bethesda Material Standards</h3><p>We understand what Bethesda homeowners expect in material quality, design character, and project management — and we deliver to that standard. Natural stone first, concrete pavers where scale requires, and always with drainage designed as part of the scope.</p></div>
                    <div className="svc-card"><h3>Drainage — Designed In, Not Added After</h3><p>Bethesda&apos;s clay-soil lots hold water near the surface. Every hardscape project DMV-GC installs in Bethesda includes drainage planning from the design stage — not corrected after pooling problems appear. Surface slope, French drains, and channel drains planned before installation begins.</p></div>
                </div>

                {/* PROCESS */}
                <h2>Our Hardscaping Process in Bethesda</h2>
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
                <h2>Hardscaping Project Costs — Bethesda, MD</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>Project Type</th>
                                    <th>Starting Price Range</th>
                                    <th>Key Cost Factors</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Natural stone walkway</td>
                                    <td>$4,000 – $10,000+</td>
                                    <td>Length, material (bluestone vs flagstone), base preparation, step count</td>
                                </tr>
                                <tr>
                                    <td>Concrete paver patio</td>
                                    <td>$8,000 – $18,000+</td>
                                    <td>Square footage, paver profile and color, base depth, drainage</td>
                                </tr>
                                <tr>
                                    <td>Natural stone patio (bluestone/travertine)</td>
                                    <td>$15,000 – $40,000+</td>
                                    <td>Square footage, stone type, mortar-set vs sand-set, base, drainage</td>
                                </tr>
                                <tr>
                                    <td>Retaining wall</td>
                                    <td>$6,000 – $25,000+</td>
                                    <td>Height, length, material (fieldstone vs segmental block), engineering requirement</td>
                                </tr>
                                <tr>
                                    <td>Driveway repaving (pavers)</td>
                                    <td>$8,000 – $25,000+</td>
                                    <td>Driveway area, paver grade, existing surface removal, base preparation</td>
                                </tr>
                                <tr>
                                    <td>Outdoor kitchen</td>
                                    <td>$12,000 – $40,000+</td>
                                    <td>Appliance package, countertop material, gas and electrical connections, enclosure</td>
                                </tr>
                                <tr>
                                    <td>Complete outdoor living area</td>
                                    <td>$40,000 – $100,000+</td>
                                    <td>Full scope — patio, walkway, retaining wall, outdoor kitchen, lighting, drainage</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p style={{ fontSize: "13px", color: "#555", marginTop: "-20px" }}>* All prices are starting estimates. Final price provided at free on-site estimate. Price at estimate is price at completion.</p>

                {/* SERVICE AREA */}
                <h2>Hardscaping Service Area</h2>
                <p>DMV General Contracting Group provides hardscaping services throughout <strong>Bethesda, MD</strong>, including Woodmont, Edgemoor, Battery Park, Wyngate, Bradley Hills, East Bethesda, and surrounding communities including North Bethesda, Chevy Chase, Kensington, Potomac, Rockville, Silver Spring, and Washington DC.</p>

                <div className="banner">
                    <strong>Bethesda Drainage Note:</strong> Bethesda&apos;s clay-heavy soils hold surface water near the grade rather than absorbing it quickly. Every hardscape project DMV General Contracting Group installs in Bethesda includes drainage slope analysis and, where needed, French drain or channel drain integration — designed in from the start, not addressed after standing water problems appear on a newly installed patio or driveway.
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Hardscaping in Bethesda, MD</h2>
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
                    <h2>Explore Our Other Services in Bethesda, MD</h2>
                    <ul>
                        <li><Link href="/service/patios/bethesda-md">Patio Installation in Bethesda, MD</Link></li>
                        <li><Link href="/service/fence-installation/bethesda-md">Fence Installation in Bethesda, MD</Link></li>
                        <li><Link href="/service/decks/bethesda-md">Deck Building in Bethesda, MD</Link></li>
                        <li><Link href="/service/home-additions/bethesda-md">Home Additions in Bethesda, MD</Link></li>
                        <li><Link href="/service/design-build/bethesda-md">Design-Build Contractor in Bethesda, MD</Link></li>
                        <li><Link href="/service/concrete/bethesda-md">Concrete Services in Bethesda, MD</Link></li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="cta-banner">
                    <h2>Need Hardscaping Services in Bethesda, MD?</h2>
                    <p>Talk with DMV General Contracting Group about patios, walkways, retaining walls, driveways, outdoor kitchens, or a complete outdoor living space for your Bethesda home. Natural stone specialists. MoCo DPS permits managed in-house. Drainage expertise for Bethesda&apos;s clay-soil lots. Free consultation, no obligation.</p>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn">Call +1 240-730-1292</a>
                    <a href="mailto:support@dmv-gc.com" className="cta-btn outline">Email support@dmv-gc.com</a>
                </div>
            </div>
        </div>
    );
};

export default HardscapingBethesdaMD;