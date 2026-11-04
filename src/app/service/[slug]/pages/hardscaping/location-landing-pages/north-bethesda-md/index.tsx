import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../hardscaping-city-style.scss";
import "./style.scss";

const HardscapingNorthBethesdaMD = () => {
    const faqData = [
        {
            question: "Why is North Bethesda's hardscaping environment more demanding than other MoCo communities?",
            answer: "North Bethesda's mature residential neighborhoods and varied terrain creates consistently elevated ambient humidity across the entire residential area. Combined with dense mature tree canopy that reduces sunlight and slows surface drying after rain, North Bethesda's hardscape surfaces stay wet significantly longer than comparable surfaces in open suburban MoCo communities. These conditions create ideal algae growth conditions — making drainage, algae-resistant material selection, and proper sealing essential components of every North Bethesda hardscape project, not optional upgrades."
        },
        {
            question: "What patio material works best in North Bethesda's conditions?",
            answer: "Thermal-finish bluestone is the top choice for North Bethesda patios — the micro-textured thermal surface provides slip resistance even when damp or carrying algae film, and the thermal process slightly seals the stone's pores, slowing moisture absorption and algae colonization. Tumbled flagstone is the naturalistic alternative. Smooth sawn bluestone and polished or honed porcelain surfaces are not recommended — they become dangerously slippery in North Bethesda's wet conditions."
        },
        {
            question: "Does every North Bethesda hardscape project need drainage engineering?",
            answer: "Yes — drainage design is the single most important element of any North Bethesda hardscape project. In North Bethesda's moisture-rich environment, inadequate drainage slope means standing water on hardscape surfaces, accelerated algae growth, and potential moisture migration toward the home's foundation. DMV General Contracting Group designs every North Bethesda hardscape drainage-first — slope, French drains, and channel drains planned before any surface material is selected."
        },
        {
            question: "Where are hardscaping permits filed in North Bethesda, MD?",
            answer: "North Bethesda is unincorporated Montgomery County — structural hardscaping permits are filed with MoCo DPS at 2425 Reedie Drive, Wheaton. Retaining walls over 30 inches, outdoor kitchens with gas or electrical, and driveway work at public road connections require MoCo DPS permits. Simple ground-level patios and walkways typically do not. DMV General Contracting Group confirms requirements at the free consultation and manages all filings in-house."
        },
        {
            question: "How much does hardscaping cost in North Bethesda, MD?",
            answer: "A natural stone walkway starts at $4,500–$10,000. A flagstone or thermal bluestone patio runs $13,000–$30,000+. A fieldstone retaining wall runs $6,000–$22,000+. A combined drainage correction and patio replacement runs $18,000–$40,000+. A complete outdoor living area runs $35,000–$80,000+. All prices include drainage engineering and algae-resistant material specification. Free estimate after site review."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Free Consultation — Moisture & Drainage Assessment",
            desc: "We visit your North Bethesda property and assess drainage conditions, surface moisture patterns, existing algae growth on hardscape surfaces, mature tree root zones, and grade changes — in addition to discussing your hardscape vision and budget. Moisture exposure and drainage needs documented before any material is recommended. Free, no obligation."
        },
        {
            num: 2,
            title: "Design — Drainage First, Materials Second",
            desc: "Drainage plan developed first — slope, French drains, channel drains, and subgrade drainage all planned before any surface material is selected. Algae-resistant materials then selected appropriate to North Bethesda's moisture conditions. Root zone setbacks incorporated. Textured surface profiles specified throughout."
        },
        {
            num: 3,
            title: "MoCo DPS Permit at 2425 Reedie Drive",
            desc: "Permit requirements confirmed for your project scope. All required MoCo DPS applications prepared and filed at 2425 Reedie Drive, Wheaton. All county correspondence managed in-house. Retaining walls, outdoor kitchens, and road connections permitted before installation begins."
        },
        {
            num: 4,
            title: "Excavation, Drainage Infrastructure & Base",
            desc: "Existing surface removed, grade corrected per the drainage plan, French drain system and channel drains installed before any base material is placed. Proper subgrade drainage established. Root zones protected during excavation. Compacted gravel base installed to correct depth for chosen material and drainage requirements."
        },
        {
            num: 5,
            title: "Hardscape Installation & Sealing",
            desc: "Algae-resistant stone or pavers installed on the prepared base with correct drainage slope. Fieldstone retaining walls built where included. Outdoor kitchen installed where applicable. All exposed stone surfaces sealed with algae-inhibiting penetrating sealer at installation — not as a follow-up step."
        },
        {
            num: 6,
            title: "Inspection, Drainage Test & Completion",
            desc: "All required MoCo DPS inspections scheduled and managed. Drainage tested with water — confirmed flowing correctly away from home and off all hardscape surfaces without pooling. Annual resealing with algae-inhibiting product recommended and schedule discussed with homeowner. Warranty documentation provided at close."
        }
    ];

    return (
        <div className="city-service-detail-page hardscaping-north-bethesda-md hardscaping-page">
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
                                    "description": "Professional hardscaping contractor serving North Bethesda, MD. Natural stone patios, walkways, fieldstone retaining walls and driveways for wooded North Bethesda lots along Rock Creek and North Bethesda's established residential neighborhoods. MoCo DPS permits. Moisture & Drainage Expertise — drainage, sealing, and algae-resistant material expertise. MHIC #156178.",
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
                                    "name": "Hardscaping Services in North Bethesda, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "North Bethesda" },
                                    "serviceType": "Hardscaping, Natural Stone Patio, Flagstone Walkways, Retaining Walls, Driveway Paving, Outdoor Kitchen, Drainage Design"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Hardscaping", "item": "https://www.dmv-gc.com/service/hardscaping" },
                                        { "@type": "ListItem", "position": 4, "name": "North Bethesda, MD", "item": "https://www.dmv-gc.com/service/hardscaping/north-bethesda-md" }
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
                    North Bethesda, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">⚡ Hardscaping Contractor • North Bethesda, MD — Rock Creek & Established Wooded Neighborhoods</div>
                    <h1>Hardscaping Services in North Bethesda, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">💧 Rock Creek and established wooded neighborhoods Moisture Expertise</span>
                        <span className="badge">🌿 Algae-Resistant Materials</span>
                        <span className="badge">🌳 Root Zone Assessment</span>
                        <span className="badge">📋 MoCo DPS — 2425 Reedie Drive</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional hardscaping design and installation for North Bethesda homeowners — natural stone patios, flagstone walkways, fieldstone retaining walls, driveway paving, and outdoor kitchens for North Bethesda&apos;s wooded lots along the Rock Creek and North Bethesda&apos;s established residential neighborhoods. Moisture & Drainage Expertise — drainage design, algae-resistant materials, and proper sealing are standard on every North Bethesda hardscape project. MoCo DPS permits managed in-house.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>North Bethesda Hardscaping Expertise:</strong> North Bethesda&apos;s location between the Rock Creek and North Bethesda&apos;s established residential neighborhoods — with dense mature tree canopy shading most residential lots — creates the highest ambient moisture conditions of any residential community in Montgomery County. Hardscape surfaces here stay damp longer after rain, receive less drying UV exposure, and are exposed to the consistent humidity generated by adjacent waterways. Algae, moss, and lichen growth on patio and walkway surfaces is not an occasional maintenance issue in North Bethesda — it is a predictable condition that every hardscape must be designed and specified to manage. DMV General Contracting Group brings North Bethesda-specific knowledge to every hardscape project here: algae-resistant material selection, proper drainage slope, penetrating sealer with algae inhibitors, and textured surface profiles that maintain slip resistance even when moisture and algae film are present.
                </div>

                {/* UNIQUE CONDITIONS */}
                <h2>North Bethesda&apos;s Unique Hardscaping Conditions — Why This Community Is Different</h2>
                <div className="banner">
                    <strong>💧 Rock Creek and established wooded neighborhoods Proximity + Dense Canopy = Highest Moisture & Algae Conditions in MoCo</strong>
                    <p>North Bethesda&apos;s hardscape conditions are more demanding than any other community in Montgomery County. Three factors combine to create persistent moisture on outdoor surfaces:</p>
                    <p><strong>1. Rock Creek and North Bethesda&apos;s established residential neighborhoods proximity:</strong> Both waterways generate consistently elevated ambient humidity across the entire North Bethesda residential area — not just properties immediately adjacent to the water. Moisture in the air settles on horizontal hardscape surfaces and stays there longer than in less humid MoCo communities.</p>
                    <p><strong>2. Dense mature tree canopy:</strong> North Bethesda&apos;s wooded residential lots receive significantly less direct sunlight than open suburban lots. Less sunlight means slower evaporation from wet hardscape surfaces after rain — surfaces stay damp for hours longer than they would on an open Bethesda or Wheaton lot.</p>
                    <p><strong>3. Combined effect — algae and moss growth:</strong> Persistent moisture + reduced UV exposure = ideal conditions for algae, moss, and lichen colonization on stone and paver surfaces. On North Bethesda patios and walkways, algae growth is not an occasional issue — it is a predictable annual condition that must be addressed in both material selection and maintenance planning. DMV General Contracting Group specifies algae-resistant materials, algae-inhibiting penetrating sealers, and textured surface profiles for every North Bethesda hardscape project — not as optional upgrades, but as standard requirements for surfaces that will perform safely and attractively over time in this environment.</p>
                </div>

                {/* SERVICES */}
                <h2>Complete Hardscaping Services for North Bethesda Homes</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>🪨 Natural Stone Patio</h3><p>Thermal-finish or tumbled bluestone, tumbled flagstone, and textured natural stone — surface profiles selected for North Bethesda&apos;s moisture conditions. Textured finishes provide slip resistance even when algae film is present. Proper drainage slope away from the home&apos;s foundation. Algae-inhibiting penetrating sealer applied at installation. MoCo DPS permit for structural additions.</p></div>
                    <div className="svc-card"><h3>🚶 Stone Walkways & Garden Paths</h3><p>Flagstone and bluestone walkways through North Bethesda&apos;s wooded residential lots — textured surface profiles for wet-condition slip resistance. Root zone assessment for mature trees along the walkway route. Proper cross-slope drainage so walkways do not retain standing water. Algae-inhibiting sealer applied at installation.</p></div>
                    <div className="svc-card"><h3>🧱 Fieldstone Retaining Walls</h3><p>Natural fieldstone retaining walls managing grade changes on North Bethesda&apos;s sloped wooded lots — dry-laid fieldstone allows water drainage through the wall face, reducing hydrostatic pressure from North Bethesda&apos;s consistently moist soils. Natural stone reads as belonging in North Bethesda&apos;s wooded environment in a way that concrete block cannot. MoCo DPS permit for walls over 30 inches.</p></div>
                    <div className="svc-card"><h3>🚗 Driveway Paving</h3><p>Permeable paver systems strongly recommended for North Bethesda driveways — allowing water to pass through the surface rather than sheet-flowing across it. Permeable drainage reduces algae growth potential by keeping the surface drier between rain events. Concrete pavers in textured profiles where permeable is not the preferred option. MoCo DPS permit for public road connection work.</p></div>
                    <div className="svc-card"><h3>🍳 Outdoor Kitchen & Grill Station</h3><p>Compact outdoor kitchen and grill stations for North Bethesda homeowners — natural stone countertops preferred for durability in North Bethesda&apos;s moisture-rich environment. Stainless steel appliances with proper weather protection. Gas line and electrical connections managed in-house. MoCo DPS permit for gas and electrical connections.</p></div>
                    <div className="svc-card"><h3>💧 Drainage Engineering</h3><p>Comprehensive drainage design is the most important element of any North Bethesda hardscape project. French drain systems, channel drains across patio surfaces, and properly graded subgrades that direct water away from the home&apos;s foundation and off hardscape surfaces quickly — reducing standing water duration and the algae growth that standing water encourages.</p></div>
                    <div className="svc-card"><h3>🌳 Root Zone Protection</h3><p>North Bethesda&apos;s mature wooded lots have significant root zones from large trees — oaks, maples, and other mature specimens that define the community&apos;s character. Root zones assessed before any hardscape layout is finalized. Permeable base systems and minimal-dig installation methods specified where hardscape coverage within a root zone is unavoidable.</p></div>
                    <div className="svc-card"><h3>🌿 Algae Management & Sealing</h3><p>All North Bethesda hardscape surfaces sealed at installation with a penetrating sealer containing algae inhibitors. Proper drainage slope reduces standing water duration — the primary driver of algae growth. Textured surface profiles specified over smooth or polished finishes throughout. Annual resealing recommended to maintain algae inhibitor effectiveness in North Bethesda&apos;s high-moisture environment.</p></div>
                </div>

                {/* COMMON PROJECTS TABLE */}
                <h2>Common Hardscaping Projects in North Bethesda</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Project Type</th>
                                    <th>North Bethesda-Specific Considerations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Natural stone patio</td>
                                    <td>Thermal or tumbled finish for slip resistance in wet conditions. Drainage slope minimum 1.5–2% away from home — steeper than standard suburban minimum to ensure quick surface drying on North Bethesda&apos;s moisture-prone lots. Algae-inhibiting penetrating sealer at installation. MoCo DPS permit for structural patio additions.</td>
                                </tr>
                                <tr>
                                    <td>Flagstone walkway through wooded lot</td>
                                    <td>Textured irregular flagstone with wide joints — allows water to drain between stones rather than pooling on the surface. Root zone assessment along the entire walkway route. Algae-inhibiting sealer. Proper cross-slope drainage — walkways should never be level in North Bethesda&apos;s conditions.</td>
                                </tr>
                                <tr>
                                    <td>Fieldstone retaining wall</td>
                                    <td>Dry-laid fieldstone preferred — drainage through the wall face reduces hydrostatic pressure from North Bethesda&apos;s consistently moist soils. Wall base well-drained to prevent frost heave in wet winter soil conditions. MoCo DPS permit at 2425 Reedie Drive for walls over 30 inches.</td>
                                </tr>
                                <tr>
                                    <td>Driveway repaving</td>
                                    <td>Permeable pavers strongly recommended — pass-through drainage reduces surface moisture duration and algae growth potential. Concrete pavers in textured profile as alternative. Old asphalt driveways with drainage problems are extremely common in North Bethesda — the new driveway scope is an opportunity to correct drainage grade simultaneously. MoCo DPS permit for road connection.</td>
                                </tr>
                                <tr>
                                    <td>Outdoor kitchen on wooded lot</td>
                                    <td>Natural stone countertop with proper weatherproofing — stone performs better than composite in North Bethesda&apos;s persistent moisture. Stainless steel appliances with weather covers when not in use. Gas line extension from the home managed in-house. MoCo DPS permit for gas and electrical connections.</td>
                                </tr>
                                <tr>
                                    <td>Complete drainage correction + hardscape</td>
                                    <td>Many North Bethesda homeowners combine a hardscape project with a long-overdue drainage correction. The two scopes complement each other — proper French drain installation and grade correction are most economically done when the existing surface is already being removed for hardscape replacement.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ALGAE RESISTANT MATERIALS */}
                <h2>Algae-Resistant Hardscaping — North Bethesda Material Selection</h2>
                <p>In North Bethesda&apos;s high-moisture environment, material selection has a direct impact on how quickly algae colonizes a hardscape surface and how safe the surface remains over time. These are the material choices DMV General Contracting Group recommends for North Bethesda — and why.</p>
                <div className="materials-grid">
                    <div className="material-card"><h3>🪨 Thermal-Finish Bluestone ✅ Top Choice</h3><p>Thermal finish creates a consistent micro-textured surface that provides slip resistance even when wet or carrying algae film — unlike smooth sawn bluestone which becomes dangerously slippery when damp. The thermal process also seals the stone&apos;s pores slightly, reducing the rate of moisture absorption and the speed of algae colonization. The top choice for North Bethesda patios and walkways.</p></div>
                    <div className="material-card"><h3>🪨 Tumbled Flagstone ✅ Naturalistic Settings</h3><p>Tumbled irregular flagstone — natural variation in surface texture provides inherent slip resistance in wet conditions. Wide joints between stones allow drainage and prevent surface water from pooling. The informal, naturalistic character of tumbled flagstone suits North Bethesda&apos;s wooded residential character. Algae-inhibiting sealer applied at installation.</p></div>
                    <div className="material-card"><h3>🪨 Tumbled Travertine ✅ Where Applicable</h3><p>Tumbled travertine&apos;s porous, non-slip surface — already recommended for pool surrounds — performs well in North Bethesda&apos;s wet conditions for the same reason: the porous surface provides grip even when wet. Requires consistent sealing with algae-inhibiting product. Best suited to North Bethesda&apos;s outdoor kitchen and dining areas where aesthetic warmth is a priority.</p></div>
                    <div className="material-card"><h3>🧱 Permeable Pavers ✅ Driveways & Large Areas</h3><p>Permeable paver systems drain water downward through the surface rather than allowing it to sheet across the paver top — significantly reducing the surface moisture duration that drives algae growth. The most effective drainage solution for North Bethesda&apos;s large driveway and patio areas. Reduces algae maintenance burden substantially compared to impermeable surfaces.</p></div>
                    <div className="material-card"><h3>🪨 Smooth Sawn Bluestone ⚠️ Use With Caution</h3><p>Sawn bluestone delivers a refined, formal appearance — but its smooth surface becomes extremely slippery when damp or carrying even a light algae film. Not recommended for North Bethesda walkways or steps where wet-condition slip resistance is a safety requirement. Acceptable only for covered patio areas with good overhead protection from rain and moisture.</p></div>
                    <div className="material-card"><h3>🏗️ Stamped Concrete / Smooth Porcelain ❌ Not Recommended</h3><p>Smooth stamped concrete and polished or honed porcelain surfaces are dangerous in North Bethesda&apos;s conditions — they become extremely slippery when carrying algae film, which is a predictable annual occurrence in this environment. Not recommended for any exposed North Bethesda hardscape surface. Textured porcelain (R11 or higher slip rating) is acceptable where porcelain is preferred.</p></div>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for Hardscaping in North Bethesda?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">💧</div>
                        <strong>Rock Creek and established wooded neighborhoods Moisture Knowledge</strong>
                        <span>Highest MoCo moisture conditions</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🌿</div>
                        <strong>Algae-Resistant Specs</strong>
                        <span>Standard on every North Bethesda project</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9 Rating</strong>
                        <span>97+ verified reviews</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🛡️</div>
                        <strong>MD MHIC #156178</strong>
                        <span>Licensed & fully insured</span>
                    </div>
                </div>
                <div className="svc-grid">
                    <div className="svc-card"><h3>North Bethesda Moisture Expertise</h3><p>Rock Creek and established wooded neighborhoods proximity + dense canopy = the highest moisture and algae conditions in MoCo. DMV General Contracting Group specifies materials, drainage, and sealing appropriate to North Bethesda&apos;s specific conditions — not a generic suburban approach applied to a wooded waterway-adjacent community.</p></div>
                    <div className="svc-card"><h3>MoCo DPS Permit Management</h3><p>All North Bethesda structural hardscaping permits filed at MoCo DPS at 2425 Reedie Drive, Wheaton — the appropriate county permitting office for applicable projects. All permit applications, inspector scheduling, and county correspondence managed in-house.</p></div>
                    <div className="svc-card"><h3>Drainage as the Primary Design Element</h3><p>In North Bethesda, drainage is not a supporting element of the hardscape design — it is the primary design element. Every North Bethesda project is designed drainage-first: where does water go? How quickly? How do we keep surfaces dry enough to inhibit algae? The hardscape follows the drainage plan, not the other way around.</p></div>
                    <div className="svc-card"><h3>Root Zone & Wooded Lot Experience</h3><p>North Bethesda&apos;s mature wooded lots — with large oaks, maples, and other significant trees — require root zone assessment before any hardscape excavation is planned. Permeable base systems and minimal-dig installation specified where root proximity warrants it. North Bethesda&apos;s trees are as much a part of the community&apos;s character as its waterways.</p></div>
                </div>

                {/* PROCESS */}
                <h2>Our Hardscaping Process in North Bethesda</h2>
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
                <h2>Hardscaping Project Costs — North Bethesda, MD</h2>
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
                                    <td>Thermal bluestone patio</td>
                                    <td>$14,000 – $30,000+</td>
                                    <td>Thermal finish for slip resistance; algae-inhibiting sealer; drainage engineering included</td>
                                </tr>
                                <tr>
                                    <td>Tumbled flagstone patio</td>
                                    <td>$13,000 – $26,000+</td>
                                    <td>Textured surface; wide joints; algae sealer; root zone assessment</td>
                                </tr>
                                <tr>
                                    <td>Stone walkway (wooded lot)</td>
                                    <td>$4,500 – $10,000+</td>
                                    <td>Textured stone; root zone assessment along route; drainage cross-slope; algae sealer</td>
                                </tr>
                                <tr>
                                    <td>Fieldstone retaining wall</td>
                                    <td>$6,000 – $22,000+</td>
                                    <td>Dry-laid preferred; drainage through face; MoCo DPS permit over 30&apos;&apos;</td>
                                </tr>
                                <tr>
                                    <td>Permeable driveway</td>
                                    <td>$9,000 – $24,000+</td>
                                    <td>Permeable pavers strongly recommended for North Bethesda; drainage reduction; MoCo DPS permit for road connection</td>
                                </tr>
                                <tr>
                                    <td>Drainage correction + patio</td>
                                    <td>$18,000 – $40,000+</td>
                                    <td>Combined drainage system installation and patio replacement — most cost-effective when done together</td>
                                </tr>
                                <tr>
                                    <td>Outdoor kitchen</td>
                                    <td>$12,000 – $35,000+</td>
                                    <td>Natural stone countertop; weather-appropriate appliances; gas + electrical in-house; MoCo DPS permit</td>
                                </tr>
                                <tr>
                                    <td>Complete outdoor living area</td>
                                    <td>$35,000 – $80,000+</td>
                                    <td>Drainage-first design; algae-resistant materials throughout; all trades in-house</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p style={{ fontSize: "13px", color: "#555", marginTop: "-20px" }}>* All prices confirmed at free on-site estimate. Drainage assessment and algae-resistant material recommendations included at no charge.</p>

                {/* SERVICE AREA */}
                <h2>Hardscaping Service Area</h2>
                <p>DMV General Contracting Group provides hardscaping services throughout <strong>North Bethesda, MD</strong> and surrounding communities — including Potomac, Bethesda, North Bethesda, Chevy Chase, Rockville, and Washington DC.</p>

                <div className="banner">
                    <strong>North Bethesda Maintenance Note:</strong> Even the best-specified hardscape in North Bethesda&apos;s high-moisture environment will develop some algae growth over time — the conditions are simply too favorable for algae colonization. Annual resealing with an algae-inhibiting penetrating sealer significantly slows the recolonization rate. Power washing with a dilute bleach solution removes established algae without damaging properly sealed natural stone surfaces. DMV General Contracting Group discusses a maintenance schedule appropriate to your specific North Bethesda installation at project close.
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Hardscaping in North Bethesda, MD</h2>
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
                    <h2>Explore Our Other Services in North Bethesda, MD</h2>
                    <ul>
                        <li><Link href="/service/patios/north-bethesda-md">Patio Installation in North Bethesda, MD</Link></li>
                        <li><Link href="/service/roofing/north-bethesda-md">Roofing Services in North Bethesda, MD</Link></li>
                        <li><Link href="/service/home-additions/north-bethesda-md">Home Additions in North Bethesda, MD</Link></li>
                        <li><Link href="/service/design-build/north-bethesda-md">Design-Build Contractor in North Bethesda, MD</Link></li>
                        <li><Link href="/service/decks/north-bethesda-md">Deck Building in North Bethesda, MD</Link></li>
                        <li><Link href="/service/fence-installation/north-bethesda-md">Fence Installation in North Bethesda, MD</Link></li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="cta-banner">
                    <h2>Need Hardscaping Services in North Bethesda, MD?</h2>
                    <p>Talk with DMV General Contracting Group about natural stone patios, walkways, fieldstone retaining walls, driveways, or outdoor kitchens for your North Bethesda home. Rock Creek and established wooded neighborhoods moisture expertise. Algae-resistant materials standard. Drainage-first design. MoCo DPS permits at 2425 Reedie Drive. Free consultation, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default HardscapingNorthBethesdaMD;