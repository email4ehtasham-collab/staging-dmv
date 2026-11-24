import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../hardscaping-city-style.scss";
import "./style.scss";

const HardscapingPotomacMD = () => {
    const faqData = [
        {
            question: "Does hardscaping in Potomac require a permit?",
            answer: "Simple ground-level patios and walkways typically do not require a permit in unincorporated Montgomery County. Structural hardscape elements — retaining walls over 30 inches, outdoor kitchens with gas or electrical connections, and driveways connecting to county roads — require MoCo DPS permits filed at 2425 Reedie Drive, Wheaton. Potomac is unincorporated Montgomery County, so all permits go to MoCo DPS. Avenel and some other planned Potomac communities also require HOA ARC approval before structural hardscape elements are installed. DMV General Contracting Group confirms both permit and HOA requirements at the free consultation."
        },
        {
            question: "Does Potomac's R-200 zoning affect hardscaping setbacks?",
            answer: "R-200 zoning governs minimum lot size and structure setbacks from property lines in Potomac's low-density residential areas. Open patios at grade level are generally not subject to setback requirements. Structures built on or adjacent to the hardscape — pergolas, pavilions, outdoor kitchens with roofs — may be subject to setback requirements from property lines. DMV General Contracting Group reviews R-200 setback requirements for any Potomac hardscape scope that includes a structure before the design is finalized."
        },
        {
            question: "Does Avenel HOA need to approve hardscaping in Potomac?",
            answer: "Yes. Avenel's HOA Architectural Review Committee typically requires ARC approval for exterior modifications including significant patio additions, retaining walls, driveway changes, and outdoor kitchen structures. DMV General Contracting Group confirms Avenel HOA requirements at the consultation, provides material specifications and design documentation to support the ARC submission, and coordinates the ARC and MoCo DPS permit processes concurrently to avoid project delays."
        },
        {
            question: "How much does hardscaping cost in Potomac, MD?",
            answer: "Potomac hardscaping costs reflect the community's estate scale and premium material standards. A natural stone patio starts at $25,000–$60,000+ for estate-scale installations. A large retaining wall system runs $15,000–$50,000+. A complete driveway repaving runs $15,000–$40,000+. A full outdoor living space with patio, pool surround, outdoor kitchen, retaining walls, and landscape lighting can run $75,000–$250,000+ depending on scope. DMV General Contracting Group provides a free, detailed estimate after a full site review."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Free Consultation & Full Site Assessment",
            desc: "We visit your Potomac estate property and walk the full outdoor scope — topography, grade changes, pool location, existing landscape features, driveway configuration, property line setbacks — and discuss your vision and budget. Avenel HOA and R-200 requirements noted. Free, no obligation."
        },
        {
            num: 2,
            title: "Estate Design & Material Selection",
            desc: "Complete hardscape plan developed — patio zones, pool surround, walkway routing, retaining wall placement, driveway layout, outdoor kitchen location, drainage plan, landscape lighting plan. Materials selected for Potomac's estate character. Avenel ARC-compliant specifications prepared where applicable."
        },
        {
            num: 3,
            title: "HOA Submission & Permit Filing",
            desc: "Avenel ARC documentation prepared and submitted concurrently with MoCo DPS permit application. R-200 setback compliance confirmed. Structural engineering coordinated for walls over 4 feet. All MoCo DPS filings at 2425 Reedie Drive, Wheaton. All correspondence managed in-house."
        },
        {
            num: 4,
            title: "Site Preparation, Grading & Drainage",
            desc: "Existing surfaces removed, site graded per the drainage and terrace plan, retaining wall footings excavated and formed, and drainage infrastructure — French drains, channel drains, catch basins — installed before any surface hardscape material is placed. Engineered base depths per the structural plan."
        },
        {
            num: 5,
            title: "Hardscape Installation — All Trades",
            desc: "Natural stone and pavers installed across the estate scope. Retaining wall systems built to engineered specifications. Pool surround coordinated with pool contractor milestone. Outdoor kitchen constructed. Gas and electrical work completed by licensed in-house trades. Landscape lighting installed per the design plan."
        },
        {
            num: 6,
            title: "Inspection, Sealing & Completion",
            desc: "All required MoCo DPS inspections scheduled and managed. Natural stone and paver surfaces sealed. Drainage tested across the full estate scope. Final walkthrough with you. Project documentation and warranty provided at close."
        }
    ];

    return (
        <div className="city-service-detail-page hardscaping-potomac-md hardscaping-page">
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
                                    "description": "Professional estate-scale hardscaping contractor serving Potomac, MD. Custom natural stone patios, pool surrounds, large retaining walls, driveway paving, outdoor kitchens and complete outdoor living spaces for Potomac's R-200 estate properties. MoCo DPS permits managed in-house. Avenel HOA coordination. MHIC #156178.",
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
                                    "name": "Hardscaping Services in Potomac, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Potomac" },
                                    "serviceType": "Hardscaping, Estate Patio, Pool Surround, Retaining Walls, Driveway Paving, Outdoor Kitchen, Complete Outdoor Living"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Hardscaping", "item": "https://www.dmv-gc.com/service/hardscaping" },
                                        { "@type": "ListItem", "position": 4, "name": "Potomac, MD", "item": "https://www.dmv-gc.com/service/hardscaping/potomac-md" }
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
                    Potomac, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">⚡ Hardscaping Contractor • Potomac, MD — Estate Scale · R-200 & Avenel</div>
                    <h1>Hardscaping Services in Potomac, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                        <span className="badge">DC DLCP #410526000209</span>
                        <span className="badge">Estate-Scale Capacity</span>
                        <span className="badge">Avenel HOA Coordination</span>
                        <span className="badge">MoCo DPS Permits — In-House</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional estate-scale hardscaping design and installation for Potomac&apos;s R-200 properties — natural stone patios, pool surrounds, large retaining wall systems, circular driveways, outdoor kitchens, pavilions, and complete outdoor living spaces. MoCo DPS permits managed in-house. Avenel HOA coordination. Rolling topography and slope management expertise for Potomac&apos;s estate lots.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Potomac Hardscaping Expertise:</strong> Potomac&apos;s R-200 zoned estate properties — in Avenel, Potomac Village, Great Falls Road corridor, and River Road communities — have outdoor spaces that dwarf what standard suburban hardscape crews are equipped to design and build. Large-format natural stone patios integrated with pool surrounds, multi-level retaining wall systems managing significant grade changes on rolling lots, circular driveways in premium paver systems, and complete outdoor living areas spanning thousands of square feet are the standard in Potomac — not the exception. DMV General Contracting Group designs and builds hardscaping at Potomac&apos;s estate scale, coordinating drainage, grading, MoCo DPS permits, and Avenel HOA approvals under one design-build workflow.
                </div>

                {/* SERVICES */}
                <h2>Complete Hardscaping Services for Potomac Estate Properties</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>🪨 Estate-Scale Patio & Outdoor Living</h3><p>Large-format natural stone and paver patios for Potomac&apos;s estate properties — multi-zone outdoor living areas with dining, lounge, outdoor kitchen, and fire feature zones designed as a coordinated whole. Estate scale means thousands of square feet, not hundreds — planned and priced accordingly from the start.</p></div>
                    <div className="svc-card"><h3>🏊 Pool Surround & Coping</h3><p>Pool surround installation coordinated with pool coping material and pool contractor schedule. Travertine, bluestone, and brushed concrete — materials selected for slip resistance, heat absorption characteristics, and aesthetic compatibility with the estate setting. Drainage away from the pool structure and toward appropriate collection points planned as part of the scope.</p></div>
                    <div className="svc-card"><h3>🧱 Large Retaining Wall Systems</h3><p>Multi-level retaining wall systems managing Potomac&apos;s rolling topography — natural fieldstone, cut limestone, and engineered segmental block walls creating level outdoor areas on sloped estate lots. Walls over 4 feet require engineering review and stamped drawings as part of the MoCo DPS permit. DMV-GC coordinates structural engineering in-house.</p></div>
                    <div className="svc-card"><h3>🚗 Circular Driveways & Estate Paving</h3><p>Premium driveway paving for Potomac&apos;s estate properties — circular driveways, motor courts, and large paved surfaces in concrete pavers, natural stone aprons, and permeable paver systems. Properly engineered base for Potomac&apos;s vehicular load requirements. Drainage designed to prevent surface water from accumulating near the home&apos;s foundation.</p></div>
                    <div className="svc-card"><h3>🍳 Outdoor Kitchen & Pavilion</h3><p>Full-scale outdoor kitchen design and installation for Potomac&apos;s entertaining-focused homeowners — complete appliance packages, natural stone countertops, masonry enclosures, and permanent pavilion or pergola structures. Gas line extension and electrical connections managed by our licensed in-house trades team. Estate-level finishes throughout.</p></div>
                    <div className="svc-card"><h3>🚶 Estate Walkways & Garden Paths</h3><p>Natural stone walkways connecting the home&apos;s entry, motor court, patio, pool area, and garden features across Potomac&apos;s large estate lots. Long walkway runs in bluestone or flagstone, properly set for Potomac&apos;s scale and the freeze-thaw demands of Maryland&apos;s climate. Landscape lighting integration planned concurrently.</p></div>
                    <div className="svc-card"><h3>💧 Slope Management & Drainage</h3><p>Potomac&apos;s rolling topography — a defining landscape characteristic — requires comprehensive drainage planning alongside every hardscape scope. Surface grading, French drain systems, channel drains, and catch basins coordinate to manage water on sloped estate lots without erosion, foundation risk, or surface pooling. Engineered drainage where the grade warrants it.</p></div>
                    <div className="svc-card"><h3>💡 Landscape Lighting Integration</h3><p>Low-voltage and line-voltage landscape lighting integrated into hardscape features across Potomac&apos;s large estate lots — path lighting along long walkway runs, uplighting on retaining walls and specimen trees, step lighting, and accent lighting for outdoor kitchen and patio areas. Planned as part of the hardscape design, not added after completion.</p></div>
                </div>

                {/* COMMON PROJECTS TABLE */}
                <h2>Common Hardscaping Projects in Potomac</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Project Type</th>
                                    <th>Potomac Estate-Scale Considerations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Complete outdoor living area</td>
                                    <td>Potomac&apos;s estate properties support multi-zone outdoor living spaces spanning 2,000–5,000+ square feet — patio, pool surround, outdoor kitchen, fire feature, and landscape lighting as a coordinated design-build scope. Multi-trade coordination (gas, electrical, drainage, masonry) managed under one workflow.</td>
                                </tr>
                                <tr>
                                    <td>Pool surround renovation</td>
                                    <td>Existing pool coping and surround replaced with premium travertine or bluestone — material selection accounting for slip resistance, heat absorption, and aesthetic compatibility with the estate setting. Coordinated with pool contractor schedule. Drainage away from pool structure planned and installed.</td>
                                </tr>
                                <tr>
                                    <td>Multi-level retaining wall system</td>
                                    <td>Potomac&apos;s rolling topography frequently requires multi-level retaining wall systems — 3, 4, or more terraced walls creating usable level areas on a significantly sloped estate lot. Engineering review and MoCo DPS permit required for walls over 4 feet. Natural fieldstone or cut limestone preferred for Potomac&apos;s estate aesthetic.</td>
                                </tr>
                                <tr>
                                    <td>Circular driveway repaving</td>
                                    <td>Circular motor court and driveway in concrete pavers or natural stone apron — properly engineered base for heavy vehicle loads on Potomac&apos;s long driveways. Drainage planned to prevent water accumulation at the home&apos;s entry or foundation. Permeable paver option for stormwater management.</td>
                                </tr>
                                <tr>
                                    <td>Avenel HOA hardscape project</td>
                                    <td>Avenel ARC approval required before MoCo DPS permit is filed for significant hardscape additions. Material specifications and design documentation prepared for ARC submission. ARC and MoCo DPS permit processes coordinated concurrently by DMV-GC to minimize project timeline impact.</td>
                                </tr>
                                <tr>
                                    <td>Estate walkway system</td>
                                    <td>Long natural stone walkway runs connecting motor court, entry, patio, pool area, and garden features across Potomac&apos;s large lots. Bluestone or flagstone set on a mortar base for estate-quality durability through Maryland&apos;s freeze-thaw cycles. Landscape lighting integrated along the walkway route.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ESTATE SCALE CALLOUT */}
                <h2>Potomac Hardscaping — Why Estate Scale Requires a Different Approach</h2>
                <div className="banner">
                    <strong>Standard suburban hardscape crews are not equipped for Potomac&apos;s estate scale:</strong> A complete outdoor living project on a Potomac estate property is a multi-month, multi-trade, multi-permit design-build scope — not a weekend patio installation. The drainage engineering for a sloped Potomac lot, the retaining wall systems required to create level outdoor areas, the pool surround coordination with the pool contractor, the Avenel HOA ARC process, and the sheer scale of premium natural stone installation all require a contractor with the capacity, experience, and project management depth to execute at this level. DMV General Contracting Group brings all of it under one design-build workflow.
                </div>

                {/* MATERIALS */}
                <h2>Hardscaping Materials for Potomac Estate Properties</h2>
                <div className="materials-grid">
                    <div className="material-card"><h3>🪨 Natural Bluestone — Estate First Choice</h3><p>Large-format natural bluestone — thermal or sawn profile for estate-scale patio installations. Cool gray tone and natural character that ages well on Potomac&apos;s large lots. Mortar-set on a rigid base for estate-quality durability. Most popular premium patio material for Potomac&apos;s traditional colonials and formal estate settings.</p></div>
                    <div className="material-card"><h3>🪨 Travertine — Pool & Outdoor Kitchen</h3><p>Warm cream and tan tones — the leading choice for Potomac pool surrounds and outdoor kitchen areas. Tumbled profile provides natural slip resistance and stays cooler underfoot in Potomac&apos;s summer heat. Honed profile for more formal contemporary settings. Requires sealing for outdoor kitchen and food-service areas.</p></div>
                    <div className="material-card"><h3>🪨 Limestone & Fieldstone — Retaining Walls</h3><p>Natural cut limestone and local fieldstone for Potomac&apos;s estate retaining wall systems — materials that complement formal estate landscaping and age gracefully into the surrounding natural setting. Natural stone walls read as belonging on a Potomac estate in a way that segmental block cannot match at the high end.</p></div>
                    <div className="material-card"><h3>🧱 Large-Format Concrete Pavers — Driveways</h3><p>Premium large-format concrete pavers for Potomac&apos;s circular driveways and motor courts — properly engineered for vehicular loads, available in earth-tone profiles that complement estate exteriors. Individual units replaceable if damaged — a significant advantage over asphalt at estate scale.</p></div>
                    <div className="material-card"><h3>🧱 Permeable Pavers — Stormwater Management</h3><p>Permeable paver systems for Potomac&apos;s large driveway and patio areas where stormwater management is a design priority. Allows rainwater to pass through the surface into the subgrade — reducing runoff on Potomac&apos;s large impervious surfaces and managing water on sloped lots. Increasingly specified for Potomac driveway renovations.</p></div>
                    <div className="material-card"><h3>🏗️ Porcelain (Large-Format) — Contemporary Estates</h3><p>24&Prime;×48&Prime; and larger porcelain pavers for Potomac&apos;s contemporary and transitional estate homes. Non-porous, stain-resistant, and available in premium stone-look profiles at estate dimensions. Frost-rated for Maryland outdoor use. Preferred for outdoor kitchen counter areas and contemporary pool surrounds where a seamless, refined look is the goal.</p></div>
                </div>

                {/* AVENEL & R-200 */}
                <h2>Avenel & R-200 Zoning — Permit & HOA Requirements</h2>
                <div className="banner">
                    <strong>Avenel HOA + MoCo DPS — Two Processes, Coordinated Concurrently:</strong> Avenel&apos;s HOA Architectural Review Committee requires ARC approval for significant exterior modifications — including large patio additions, retaining wall systems, driveway changes, and outdoor kitchen structures. The ARC approval process must be completed (or run concurrently) before MoCo DPS permits are filed. R-200 setback requirements also govern where structures — pergolas, pavilions, roofed outdoor kitchens — can be placed relative to property lines. DMV General Contracting Group confirms Avenel HOA requirements and R-200 setbacks at the consultation, prepares ARC documentation and submits on your behalf, and coordinates the ARC and MoCo DPS permit processes concurrently so neither creates unnecessary project delay.
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for Hardscaping in Potomac?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏠</div>
                        <strong>Estate-Scale Capacity</strong>
                        <span>Multi-zone, multi-trade projects</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🏘️</div>
                        <strong>Avenel HOA Coordination</strong>
                        <span>ARC + MoCo DPS concurrent</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9 Rating</strong>
                        <span>97+ verified reviews</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🛡️</div>
                        <strong>MD MHIC #156178</strong>
                        <span>Licensed &amp; fully insured</span>
                    </div>
                </div>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Designed for Potomac's Scale</h3><p>Potomac estate hardscape projects are multi-month, multi-trade, multi-permit scopes — not standard suburban installations scaled up. DMV General Contracting Group plans, permits, and executes at Potomac&apos;s estate scale from the start, not a suburban approach stretched to fit a larger lot.</p></div>
                    <div className="svc-card"><h3>Avenel HOA & R-200 Expertise</h3><p>ARC documentation prepared and submitted. R-200 setback requirements reviewed before design is finalized. ARC and MoCo DPS permit processes coordinated concurrently. Homeowners do not manage the ARC or permit process — DMV-GC handles it as part of the project scope.</p></div>
                    <div className="svc-card"><h3>Pool Surround Coordination</h3><p>Pool surround hardscaping coordinated with pool coping, pool contractor schedule, and pool equipment locations — delivered as a cohesive finished outdoor environment rather than separate scopes that don&apos;t align at the edges.</p></div>
                    <div className="svc-card"><h3>All Trades In-House</h3><p>Gas line extensions, electrical connections, structural engineering coordination, drainage design, and hardscape installation — all under one design-build workflow. No separate subcontractors on different schedules managing pieces of a Potomac estate outdoor project.</p></div>
                </div>

                {/* PROCESS */}
                <h2>Our Hardscaping Process in Potomac</h2>
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
                <h2>Hardscaping Project Costs — Potomac, MD</h2>
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
                                    <td>Natural stone patio (estate scale)</td>
                                    <td>$25,000 – $60,000+</td>
                                    <td>Large-format bluestone or travertine, mortar-set, drainage, estate dimensions</td>
                                </tr>
                                <tr>
                                    <td>Pool surround (travertine/bluestone)</td>
                                    <td>$20,000 – $50,000+</td>
                                    <td>Pool surround + coping coordination, drainage, slip-resistant material</td>
                                </tr>
                                <tr>
                                    <td>Retaining wall system</td>
                                    <td>$15,000 – $50,000+</td>
                                    <td>Multi-level systems, engineering for walls over 4ft, natural stone material</td>
                                </tr>
                                <tr>
                                    <td>Circular driveway (pavers)</td>
                                    <td>$15,000 – $40,000+</td>
                                    <td>Engineered base for vehicular load, drainage, premium paver profile</td>
                                </tr>
                                <tr>
                                    <td>Outdoor kitchen (estate)</td>
                                    <td>$20,000 – $60,000+</td>
                                    <td>Full appliance package, natural stone countertop, masonry enclosure, gas + electrical</td>
                                </tr>
                                <tr>
                                    <td>Estate walkway system</td>
                                    <td>$10,000 – $30,000+</td>
                                    <td>Long natural stone runs, mortar-set, landscape lighting integration</td>
                                </tr>
                                <tr>
                                    <td>Complete outdoor living area</td>
                                    <td>$75,000 – $250,000+</td>
                                    <td>Full estate scope — patio, pool surround, kitchen, walls, walkways, lighting, drainage</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p style={{ fontSize: "13px", color: "#555", marginTop: "-20px" }}>* All prices confirmed at free on-site estimate. Potomac estate projects are individually assessed — starting ranges reflect estate scale and premium material standards.</p>

                {/* SERVICE AREA */}
                <h2>Hardscaping Service Area</h2>
                <p>DMV General Contracting Group provides hardscaping services throughout <strong>Potomac, MD</strong>, including Avenel, Potomac Village, Great Falls Road corridor, River Road communities, Persimmon Tree Road area, and surrounding communities including North Bethesda, Bethesda, Rockville, Cabin John, and Chevy Chase.</p>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Hardscaping in Potomac, MD</h2>
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
                    <h2>Explore Our Other Services in Potomac, MD</h2>
                    <ul>
                        <li><Link href="/service/patios/potomac-md">Patio Installation in Potomac, MD</Link></li>
                        <li><Link href="/service/fence-installation/potomac-md">Fence Installation in Potomac, MD</Link></li>
                        <li><Link href="/service/decks/potomac-md">Deck Building in Potomac, MD</Link></li>
                        <li><Link href="/service/home-additions/potomac-md">Home Additions in Potomac, MD</Link></li>
                        <li><Link href="/service/design-build/potomac-md">Design-Build Contractor in Potomac, MD</Link></li>
                        <li><Link href="/service/concrete/potomac-md">Concrete Services in Potomac, MD</Link></li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="cta-banner">
                    <h2>Need Hardscaping Services in Potomac, MD?</h2>
                    <p>Talk with DMV General Contracting Group about estate-scale hardscaping for your Potomac property — natural stone patios, pool surrounds, retaining wall systems, circular driveways, outdoor kitchens, and complete outdoor living areas. Avenel HOA coordination. MoCo DPS permits managed in-house. Free consultation, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default HardscapingPotomacMD;