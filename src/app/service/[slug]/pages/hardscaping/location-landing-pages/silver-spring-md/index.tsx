import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../hardscaping-city-style.scss";
import "./style.scss";

const HardscapingSilverSpringMD = () => {
    const faqData = [
        {
            question: "Where are hardscaping permits filed in Silver Spring, MD?",
            answer: "With Montgomery County DPS at 2425 Reedie Drive, Wheaton, MD 20902 — Silver Spring is unincorporated Montgomery County. Retaining walls over 30 inches, outdoor kitchens with gas or electrical, and driveway work at public road connections require MoCo DPS permits. Simple ground-level patios and walkways typically do not. DMV General Contracting Group confirms requirements at the free consultation and manages all MoCo DPS filings in-house."
        },
        {
            question: "My Silver Spring home is a split-level — what hardscaping options do I have for the rear yard?",
            answer: "Split-level grade transitions are the most common hardscape design challenge in Silver Spring. DMV General Contracting Group measures the grade difference at your property during the free consultation and presents all options: a multi-level patio with stone steps connecting the two elevations; a single lower-level patio with steps from the walkout door; a raised terrace at the walkout level retained by a stone wall; or a deck at the upper level with a hardscape patio at the lower level. Each option has different cost implications — all presented before any scope is agreed."
        },
        {
            question: "What is the best material for a retaining wall on a Silver Spring sloped lot?",
            answer: "For walls under 3 feet visible from the rear yard, natural stone veneer or dry-laid fieldstone provides the best aesthetic result. For taller walls or longer runs where cost is the primary driver, engineered segmental concrete block is structurally reliable and available in earth-tone finishes. Walls over 30 inches require MoCo DPS permits, and walls over 4 feet require engineering review. DMV General Contracting Group recommends the right material for each wall's height, visibility, and the home's architectural character."
        },
        {
            question: "Should I replace my Silver Spring asphalt driveway with concrete pavers?",
            answer: "For Silver Spring homeowners with cracked or deteriorated 1960s–1970s asphalt, concrete pavers are the most practical long-term upgrade — individual units can be replaced if damaged, and the surface can be lifted to access utilities without breaking out a full slab. Pavers also improve drainage when installed with appropriate base and joint material. MoCo DPS permit required for driveway work at the public road connection. DMV General Contracting Group discusses driveway options at the free consultation."
        },
        {
            question: "How much does hardscaping cost in Silver Spring, MD?",
            answer: "A concrete paver patio starts at $8,000–$18,000+. A natural stone patio runs $13,000–$28,000+. A multi-level split-level patio with steps and retaining elements starts at $15,000–$35,000+ depending on the grade difference. A retaining wall runs $5,000–$20,000+. A driveway repaving runs $7,000–$20,000+. DMV General Contracting Group provides a free, detailed estimate after reviewing the Silver Spring property — split-level grade difference measured and all layout options priced at no charge."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Free Consultation & Grade Assessment",
            desc: "We visit your Silver Spring property, assess the outdoor space — grade changes, split-level elevation difference measured, drainage conditions, existing landscape features — and discuss your hardscaping vision and budget. Split-level grade difference measured and documented at this stage. Free, no obligation."
        },
        {
            num: 2,
            title: "Design, Layout & Material Selection",
            desc: "Hardscape layout designed for your Silver Spring lot — split-level grade transition addressed in the design, multiple options presented for split-level homes. Retaining walls, steps, and patio levels designed as integrated elements. Material selected based on the home's mid-century architectural character and the homeowner's budget."
        },
        {
            num: 3,
            title: "MoCo DPS Permit Filing",
            desc: "Permit requirements confirmed for your project scope. All required MoCo DPS applications prepared and filed at 2425 Reedie Drive, Wheaton — retaining walls over 30 inches, outdoor kitchens with gas or electrical, and driveway road connections all permitted before installation begins. All county correspondence managed in-house."
        },
        {
            num: 4,
            title: "Excavation, Grading & Base Preparation",
            desc: "Existing surface removed, grade adjusted per the drainage and terrace plan, retaining wall footings prepared, and appropriate base installed for each hardscape element. Drainage infrastructure — French drains, channel drains — installed before any surface material is placed. Split-level step and wall foundations prepared."
        },
        {
            num: 5,
            title: "Hardscape Installation",
            desc: "Pavers or natural stone installed on the prepared base. Retaining walls built. Steps constructed as integrated hardscape elements connecting grade levels. Outdoor kitchen installed where included. Gas and electrical rough-in completed by licensed in-house trades. Landscape lighting wired before patio surface is completed."
        },
        {
            num: 6,
            title: "Inspection, Cleanup & Completion",
            desc: "All required MoCo DPS inspections scheduled and managed at 2425 Reedie Drive. Work area cleaned. Drainage tested — water confirmed flowing correctly away from the home and off all hardscape surfaces. Final walkthrough. Warranty documentation provided at project close."
        }
    ];

    return (
        <div className="city-service-detail-page hardscaping-silver-spring-md hardscaping-page">
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
                                    "description": "Professional hardscaping contractor serving Silver Spring, MD. Patios, walkways, retaining walls, driveways and outdoor kitchens for Silver Spring's 1950s–1970s colonials and split-level homes. Grade transition and slope management specialists. MoCo DPS permits filed at 2425 Reedie Drive, Wheaton. MHIC #156178.",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11810 Grand Park Ave. Suite 500",
                                        "addressLocality": "North Bethesda",
                                        "addressRegion": "MD",
                                        "postalCode": "20852",
                                        "addressCountry": "US"
                                    },
                                    "areaServed": { "@type": "City", "name": "Silver Spring" }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Hardscaping Services in Silver Spring, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Silver Spring" },
                                    "serviceType": "Hardscaping, Patio, Walkways, Retaining Walls, Driveway Paving, Outdoor Kitchen, Grade Transition, Slope Management"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Hardscaping", "item": "https://www.dmv-gc.com/service/hardscaping" },
                                        { "@type": "ListItem", "position": 4, "name": "Silver Spring, MD", "item": "https://www.dmv-gc.com/service/hardscaping/silver-spring-md" }
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
                    Silver Spring, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">⚡ Hardscaping Contractor • Silver Spring, MD — Split-Level Grade Specialists</div>
                    <h1>Hardscaping Services in Silver Spring, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">📐 Split-Level Grade Specialists</span>
                        <span className="badge">📋 MoCo DPS — 2425 Reedie Drive</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MD MHIC #156178</span>
                        <span className="badge">✓ Licensed & Insured</span>
                        <span className="badge">✓ Free Consultation</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional hardscaping design and installation for Silver Spring homeowners — patios, natural stone walkways, retaining walls, driveway paving, outdoor kitchens, and grade transition solutions for Silver Spring&apos;s 1950s–1970s colonials, split-levels, and cape cods. Split-level grade assessment included at every free consultation. MoCo DPS permits managed in-house at 2425 Reedie Drive, Wheaton.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Silver Spring Hardscaping Expertise:</strong> Silver Spring&apos;s 1950s–1970s colonials, cape cods, and split-levels — in Four Corners, Woodside, Hillandale, and the Colesville Road corridor — present hardscaping challenges that require genuine local knowledge. Split-level homes have main levels that exit 3 to 6 feet above the rear yard, creating grade transitions that affect every element of patio and retaining wall design. Sloped lots in Four Corners and Woodside require multi-tier retaining wall systems before usable flat outdoor areas can be created. And old asphalt driveways from the 1960s and 70s — cracked, settled, and well past their service life — are one of the most common Silver Spring hardscaping replacement projects DMV General Contracting Group handles. All with MoCo DPS permits filed at 2425 Reedie Drive, Wheaton.
                </div>

                {/* SPLIT-LEVEL GRADE TRANSITIONS */}
                <h2>Silver Spring&apos;s Primary Hardscaping Challenge — Split-Level Grade Transitions</h2>

                <div className="banner">
                    <strong>Split-Level Grade Transition — The Most Common Hardscaping Design Question in Silver Spring:</strong> Silver Spring has one of the highest concentrations of 1950s–1970s split-level homes in Montgomery County. The defining characteristic for hardscaping: the main living level walkout door exits 3 to 6 feet above the rear yard grade. Every hardscape element installed at the back of the home must address this elevation difference. DMV General Contracting Group assesses the specific grade change at every Silver Spring split-level property during the free consultation and presents all options before any scope is agreed: a multi-level patio connecting the two elevations with steps; a single lower-level patio with a stone stair from the door; a raised terrace at the walkout level retained by a stone or block wall; or a combination of deck at the upper level and hardscape patio below. Each approach has different cost and construction implications — all presented clearly before any commitment is made.
                </div>

                {/* SERVICES */}
                <h2>Complete Hardscaping Services for Silver Spring Homes</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>🪨 Patio Installation</h3><p>Concrete pavers, natural bluestone, flagstone, and travertine patios for Silver Spring&apos;s mid-century colonial and split-level lots. Grade transition between the home&apos;s walkout door and the rear yard addressed in every Silver Spring patio design — multi-level layouts, connecting steps, and retaining elements designed as part of the patio scope, not added as an afterthought.</p></div>
                    <div className="svc-card"><h3>📐 Multi-Level Patio & Grade Solutions</h3><p>Split-level grade transitions managed with multi-level patio designs, stone steps, and retaining elements that connect the home&apos;s walkout level to the rear yard below. Multiple layout options presented at the free consultation — upper-level terrace, lower-level patio with steps, or combination approach. The most common Silver Spring hardscape scope we design.</p></div>
                    <div className="svc-card"><h3>🚶 Walkways & Entry Paths</h3><p>Natural stone and paver walkways for Silver Spring&apos;s colonials and cape cods — front entry walks complementing the home&apos;s facade, rear walkways connecting the patio to the garage or side yard, and garden paths through established plantings. Grade changes along the walkway route managed with flush steps or ramps where needed.</p></div>
                    <div className="svc-card"><h3>🧱 Retaining Walls</h3><p>Retaining walls managing Silver Spring&apos;s sloped residential lots — creating level outdoor areas on lots where the natural grade would otherwise limit outdoor living options. Natural stone, segmental block, and concrete block options based on wall height, visibility, and the home&apos;s architectural character. MoCo DPS permit required for walls over 30 inches. Engineering for walls over 4 feet.</p></div>
                    <div className="svc-card"><h3>🚗 Driveway Repaving</h3><p>Old 1960s–1970s asphalt and deteriorated concrete driveways replaced with concrete pavers, new asphalt, or permeable paver systems. Concrete pavers are repairable — individual units can be replaced if damaged, and the surface can be lifted to access utilities without breaking out a full concrete slab. MoCo DPS permit for driveway work at public road connections.</p></div>
                    <div className="svc-card"><h3>🍳 Outdoor Kitchen & Grill Station</h3><p>Built-in grill stations and outdoor kitchen installations for Silver Spring homeowners — sized appropriately to the mid-century lot and scaled to the patio area. Gas line extension and electrical connections managed in-house by our licensed trades team. MoCo DPS permit required for gas and electrical connections.</p></div>
                    <div className="svc-card"><h3>💧 Drainage & Slope Management</h3><p>Surface drainage planning for Silver Spring&apos;s sloped and split-level lots — proper slope, French drains, and channel drains directing water away from the home&apos;s foundation and off patio and walkway surfaces. Drainage designed as part of every Silver Spring hardscape scope, not addressed after pooling problems appear.</p></div>
                    <div className="svc-card"><h3>💡 Landscape Lighting</h3><p>Low-voltage path lighting along Silver Spring walkways, step lighting on retaining walls and grade transition steps, and accent lighting for outdoor kitchen and patio areas. Planned as part of the hardscape design rather than added after completion — wiring routed before patio surface is installed.</p></div>
                </div>

                {/* COMMON PROJECTS TABLE */}
                <h2>Common Hardscaping Projects in Silver Spring</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Project Type</th>
                                    <th>Silver Spring-Specific Considerations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Split-level patio with grade transition</strong></td>
                                    <td>Grade difference between walkout door and rear yard measured at consultation — typically 3–6 feet. Layout options presented: upper terrace, lower patio with steps, multi-level, or deck + hardscape combination. Steps and retaining elements designed as integrated hardscape features. MoCo DPS permit for retaining walls over 30 inches.</td>
                                </tr>
                                <tr>
                                    <td><strong>Sloped rear yard terracing</strong></td>
                                    <td>Multi-tier retaining wall system creating level outdoor areas on Silver Spring&apos;s hillier lots in Four Corners and Woodside. Natural stone or segmental block walls per height and visibility requirements. Engineering for walls over 4 feet. MoCo DPS permit required. Usable flat outdoor areas created from previously unusable sloped ground.</td>
                                </tr>
                                <tr>
                                    <td><strong>Old asphalt driveway replacement</strong></td>
                                    <td>1960s–1970s asphalt driveways cracked, heaved, and deteriorated — replaced with concrete pavers or new asphalt. Concrete pavers are the preferred upgrade for Silver Spring homeowners investing in long-term durability and appearance. MoCo DPS permit for public road connection work. Drainage grading corrected as part of the repaving scope.</td>
                                </tr>
                                <tr>
                                    <td><strong>Front entry walkway</strong></td>
                                    <td>New front entry walk in bluestone or concrete pavers connecting the driveway to the home&apos;s front door. Grade change from driveway to entry door managed with flush stone steps where needed. No permit typically required for a simple walkway — confirmed at consultation. Material selected to complement the home&apos;s 1960s–1970s colonial facade.</td>
                                </tr>
                                <tr>
                                    <td><strong>Outdoor kitchen + patio</strong></td>
                                    <td>Concrete paver or bluestone patio with a built-in grill station or compact outdoor kitchen — the most popular hardscape investment for Silver Spring homeowners renovating their outdoor space. Gas line extension required for gas grill station — MoCo DPS permit filed in-house. Patio and kitchen designed together as a coordinated scope.</td>
                                </tr>
                                <tr>
                                    <td><strong>Drainage correction</strong></td>
                                    <td>Surface drainage problems on Silver Spring&apos;s sloped lots corrected alongside new hardscape installation — regrading patio surfaces, adding French drains in low areas, and installing channel drains across driveway aprons where water sheet-flows across the surface. Drainage planned from the design stage, not retrofitted after installation.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* MATERIALS */}
                <h2>Hardscaping Materials for Silver Spring&apos;s Mid-Century Homes</h2>
                <p>Silver Spring&apos;s 1950s–1970s colonials, cape cods, and split-levels have a mid-century architectural character that calls for clean-lined, durable hardscaping materials — not the estate-scale natural stone of Potomac or the pre-1950 period-authentic brick of Kensington. The right materials complement Silver Spring&apos;s mid-century profiles without conflicting with them.</p>
                <div className="materials-grid">
                    <div className="material-card"><h3>🧱 Concrete Pavers — Most Popular</h3><p>The most practical and popular choice for Silver Spring&apos;s mid-century housing stock — durable, repairable, and available in earth-tone profiles that complement 1960s colonial architecture. Clean lines work well with Silver Spring&apos;s traditional profiles. Individual units replaceable if damaged — a significant advantage over poured concrete for long-term driveway and patio maintenance.</p></div>
                    <div className="material-card"><h3>🪨 Bluestone (Uniform Cut)</h3><p>Uniform-cut Pennsylvania bluestone — a step up in quality for Silver Spring homeowners seeking a more refined patio or walkway appearance. Cool gray tone and clean edges complement traditional colonial and cape cod profiles. Mortar-set for long-term stability through Maryland&apos;s freeze-thaw cycles.</p></div>
                    <div className="material-card"><h3>🪨 Irregular Flagstone</h3><p>Natural irregular stone for Silver Spring&apos;s more informal, garden-integrated settings and homes with naturalistic plantings. Wide joints with ground cover integrate naturally with established garden beds. Well suited to Silver Spring&apos;s mature residential lots where an organic, settled character is preferred over a more formal hardscape layout.</p></div>
                    <div className="material-card"><h3>🧱 Segmental Retaining Block</h3><p>Allan Block or comparable engineered segmental block for retaining walls on Silver Spring&apos;s sloped lots — practical, structurally reliable, and available in earth-tone finishes. Most cost-effective choice for taller or longer retaining walls where natural stone would be cost-prohibitive. Natural stone facing available for visible wall surfaces where appearance is a priority.</p></div>
                    <div className="material-card"><h3>🧱 Permeable Pavers</h3><p>Permeable paver systems for Silver Spring driveways and large patio areas — allowing rainwater to pass through the surface into the subgrade, reducing runoff on Silver Spring&apos;s sloped lots and managing water near the home&apos;s foundation. Increasingly popular for Silver Spring driveway replacements where drainage improvement is a secondary goal.</p></div>
                    <div className="material-card"><h3>🏗️ Stamped Concrete</h3><p>Cost-effective for large Silver Spring patio areas where pavers or natural stone are cost-prohibitive at scale. Cobblestone and slate patterns in earth tones. Sealed for Maryland&apos;s climate. Less repairable than unit pavers if surface damage occurs. Most appropriate for rear yard areas where long-term appearance is less critical than front-of-home hardscaping.</p></div>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for Hardscaping in Silver Spring?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">📐</div>
                        <strong>Split-Level Grade Experts</strong>
                        <span>Most common SS hardscape challenge</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>MoCo DPS Permits</strong>
                        <span>2425 Reedie Drive — in-house</span>
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
                    <div className="svc-card"><h3>Split-Level Grade Expertise</h3><p>Silver Spring&apos;s split-level grade transitions are the most common hardscape design challenge in this community — and we bring specific experience to every consultation. Multiple layout options presented at the free consultation before any scope is agreed. No one-size-fits-all approach to a Silver Spring split-level rear yard.</p></div>
                    <div className="svc-card"><h3>MoCo DPS Permit Management</h3><p>All Silver Spring structural hardscaping permits filed at MoCo DPS at 2425 Reedie Drive, Wheaton — the correct office for unincorporated Silver Spring. All permit applications, inspector scheduling, and county correspondence managed in-house. Neighboring Kensington files at 3710 Mitchell Street; neighboring Garrett Park at 4600 Oxford Street — DMV-GC knows the difference.</p></div>
                    <div className="svc-card"><h3>Slope & Drainage Expertise</h3><p>Silver Spring&apos;s sloped lots and split-level grade changes require drainage planning from the design stage — not corrected after pooling problems appear. Surface grading, French drains, and channel drains designed into every Silver Spring hardscape scope as standard, not as add-ons.</p></div>
                    <div className="svc-card"><h3>All Trades In-House</h3><p>Gas line extensions, electrical connections, drainage, retaining wall construction, and hardscape installation all coordinated under one design-build workflow — no separate subcontractors managing pieces of your Silver Spring outdoor project on different schedules.</p></div>
                </div>

                {/* PROCESS */}
                <h2>Our Hardscaping Process in Silver Spring</h2>
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
                <h2>Hardscaping Project Costs — Silver Spring, MD</h2>
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
                                    <td>Concrete paver patio</td>
                                    <td>$8,000 – $18,000+</td>
                                    <td>Mid-century colonial rear yard, earth-tone pavers, drainage included</td>
                                </tr>
                                <tr>
                                    <td>Bluestone or flagstone patio</td>
                                    <td>$13,000 – $28,000+</td>
                                    <td>Natural stone, mortar or sand set, drainage, root zones assessed</td>
                                </tr>
                                <tr>
                                    <td>Multi-level split-level patio</td>
                                    <td>$15,000 – $35,000+</td>
                                    <td>Grade transition steps and retaining elements; cost increases with elevation difference</td>
                                </tr>
                                <tr>
                                    <td>Natural stone walkway</td>
                                    <td>$4,000 – $9,000+</td>
                                    <td>Bluestone or flagstone, flush steps where grade changes along route</td>
                                </tr>
                                <tr>
                                    <td>Retaining wall</td>
                                    <td>$5,000 – $20,000+</td>
                                    <td>Segmental block or natural stone; MoCo DPS permit over 30&apos;&apos;; engineering over 4 feet</td>
                                </tr>
                                <tr>
                                    <td>Driveway repaving (pavers)</td>
                                    <td>$7,000 – $20,000+</td>
                                    <td>Replaces cracked 1960s–1970s asphalt; MoCo DPS permit for road connection</td>
                                </tr>
                                <tr>
                                    <td>Outdoor kitchen + patio</td>
                                    <td>$20,000 – $50,000+</td>
                                    <td>Patio + built-in grill station or full kitchen; gas and electrical in-house</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p style={{ fontSize: "13px", color: "#555", marginTop: "-20px" }}>* All prices confirmed at free on-site estimate. Split-level grade transitions may increase patio and retaining wall costs depending on elevation difference and chosen layout approach.</p>

                {/* SERVICE AREA */}
                <h2>Hardscaping Service Area</h2>
                <p>DMV General Contracting Group provides hardscaping services throughout <strong>Silver Spring, MD</strong>, including Four Corners, Woodside, Hillandale, Colesville Road corridor, Wheaton Hills, Forest Glen, and surrounding communities including Wheaton, Kensington, Chevy Chase, Takoma Park, North Bethesda, Bethesda, and Washington DC.</p>

                <div className="banner">
                    <strong>Silver Spring Permit Note:</strong> Silver Spring is unincorporated Montgomery County — all structural hardscaping permits file with MoCo DPS at 2425 Reedie Drive, Wheaton. Neighboring Kensington files at the Town of Kensington at 3710 Mitchell Street. Neighboring Garrett Park files at the Town of Garrett Park at 4600 Oxford Street. Filing at the wrong office means no permit is issued. DMV General Contracting Group confirms the correct jurisdiction for every Silver Spring area project at the free consultation.
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Hardscaping in Silver Spring, MD</h2>
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
                    <h2>Explore Our Other Services in Silver Spring, MD</h2>
                    <ul>
                        <li><Link href="/service/patios/silver-spring-md">Patio Installation in Silver Spring, MD</Link></li>
                        <li><Link href="/service/fence-installation/silver-spring-md">Fence Installation in Silver Spring, MD</Link></li>
                        <li><Link href="/service/decks/silver-spring-md">Deck Building in Silver Spring, MD</Link></li>
                        <li><Link href="/service/home-additions/silver-spring-md">Home Additions in Silver Spring, MD</Link></li>
                        <li><Link href="/service/design-build/silver-spring-md">Design-Build Contractor in Silver Spring, MD</Link></li>
                        <li><Link href="/service/electrical-services/silver-spring-md">Electrical Services in Silver Spring, MD</Link></li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="cta-banner">
                    <h2>Need Hardscaping Services in Silver Spring, MD?</h2>
                    <p>Talk with DMV General Contracting Group about patios, walkways, retaining walls, driveway repaving, or outdoor kitchens for your Silver Spring home. Split-level grade transitions assessed at no charge. MoCo DPS permits managed in-house. Free consultation, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default HardscapingSilverSpringMD;