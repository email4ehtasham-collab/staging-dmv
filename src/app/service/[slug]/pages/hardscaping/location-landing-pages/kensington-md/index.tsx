import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../hardscaping-city-style.scss";
import "./style.scss";

const HardscapingKensingtonMD = () => {
    const faqData = [
        {
            question: "Where are hardscaping permits filed in Kensington, MD?",
            answer: "With the Town of Kensington at 3710 Mitchell Street, Kensington, MD 20895 — not Montgomery County DPS. Structural hardscaping elements including retaining walls over 30 inches, outdoor kitchens with gas or electrical, and driveway work at public road connections require Town of Kensington permits. Simple ground-level patios and walkways typically do not. DMV General Contracting Group confirms requirements at the free consultation and manages all Town filings in-house."
        },
        {
            question: "How does hardscaping near mature trees work in Kensington?",
            answer: "Mature tree root zones extend well beyond the drip line — shallow hardscape excavation within that zone can sever major roots and permanently damage or kill the tree. DMV General Contracting Group assesses root zone proximity before any Kensington hardscape layout is finalized, adjusts the design to maintain safe setbacks from significant roots where possible, and specifies permeable paver or minimal-dig base systems where hardscape coverage within a root zone is unavoidable. Kensington's mature canopy is worth protecting — we design accordingly."
        },
        {
            question: "What hardscaping material is most appropriate for a Kensington craftsman bungalow?",
            answer: "Irregular natural flagstone in a wide-joint sand or mortar setting is the most period-appropriate and visually compatible choice — it integrates with the bungalow's craftsman character and existing garden plantings as if it has always been there. Reclaimed or new brick in a traditional pattern is an excellent alternative for homes with brick exterior details. Pennsylvania bluestone in a more structured layout works well for homes with more formal garden settings. Large-format modern concrete slabs and porcelain pavers are not recommended for Kensington's pre-1950 architectural context."
        },
        {
            question: "Do I need a permit for a driveway repaving in Kensington?",
            answer: "Driveway work that connects to a public road — replacing or modifying the curb cut or connection point — typically requires a Town of Kensington permit at 3710 Mitchell Street. Driveway resurfacing that does not change the connection point may not require a permit. DMV General Contracting Group confirms driveway permit requirements for your specific Kensington property at the free consultation before any work is scoped or priced."
        },
        {
            question: "How much does hardscaping cost in Kensington, MD?",
            answer: "A natural stone walkway starts at $4,000–$9,000. A flagstone or bluestone patio runs $12,000–$28,000+. A fieldstone retaining wall runs $5,000–$20,000+. A complete outdoor living area with patio, walkway, and outdoor kitchen runs $30,000–$70,000+. DMV General Contracting Group provides a free, detailed estimate after reviewing the site — root zone assessment and period material recommendations included at no charge."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Free Consultation & Root Zone Assessment",
            desc: "We visit your Kensington property, assess the outdoor space — mature trees, root zone proximity, grade changes, existing landscape features, home's architectural character — and discuss your hardscaping vision and budget. Significant tree locations noted and root zone extents estimated before any layout is discussed. Free, no obligation."
        },
        {
            num: 2,
            title: "Design & Period-Appropriate Material Selection",
            desc: "Hardscape layout designed with Kensington's architectural character as the guiding framework — natural stone, brick, or period-appropriate pavers. Root zone setbacks incorporated into every element of the layout. Permeable base or no-dig installation specified where significant root zones intersect the planned hardscape."
        },
        {
            num: 3,
            title: "Town of Kensington Permit at 3710 Mitchell Street",
            desc: "Permit requirements confirmed for your specific project. All required Town of Kensington structural permits prepared and filed at 3710 Mitchell Street. All Town correspondence and inspection coordination managed in-house. You do not contact the Town office."
        },
        {
            num: 4,
            title: "Root-Aware Excavation & Base Preparation",
            desc: "Excavation approach confirmed after root zone assessment — standard compacted gravel base where away from significant roots; minimal-dig or no-dig permeable base where root proximity warrants it. Drainage slope established away from both home and established trees. Existing garden plantings protected throughout."
        },
        {
            num: 5,
            title: "Hardscape Installation",
            desc: "Natural stone, brick, or period-appropriate pavers installed on the prepared base. Fieldstone retaining wall built where included. Outdoor kitchen constructed with stone or brick surround and natural stone countertop. Gas and electrical work by licensed in-house trades. Landscape and garden plantings protected and restored throughout."
        },
        {
            num: 6,
            title: "Town Inspection, Cleanup & Completion",
            desc: "All required Town of Kensington inspections scheduled and managed. Work area cleaned — Kensington's established gardens respected and restored at completion. Final walkthrough. Warranty documentation provided at project close."
        }
    ];

    return (
        <div className="city-service-detail-page hardscaping-kensington-md hardscaping-page">
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
                                    "description": "Professional hardscaping contractor serving Kensington, MD. Natural stone patios, walkways, retaining walls, and driveways for Kensington's pre-1950 bungalows, foursquares and colonials. Town of Kensington permit at 3710 Mitchell Street. Mature tree root zone assessment. Period-appropriate materials. MHIC #156178.",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11810 Grand Park Ave. Suite 500",
                                        "addressLocality": "North Bethesda",
                                        "addressRegion": "MD",
                                        "postalCode": "20852",
                                        "addressCountry": "US"
                                    },
                                    "areaServed": { "@type": "City", "name": "Kensington" }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Hardscaping Services in Kensington, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Kensington" },
                                    "serviceType": "Hardscaping, Natural Stone Patio, Walkways, Retaining Walls, Driveway Paving, Outdoor Kitchen, Permeable Pavers"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Hardscaping", "item": "https://www.dmv-gc.com/service/hardscaping" },
                                        { "@type": "ListItem", "position": 4, "name": "Kensington, MD", "item": "https://www.dmv-gc.com/service/hardscaping/kensington-md" }
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
                    Kensington, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">DMV GENERAL CONTRACTING GROUP · KENSINGTON, MD</div>
                    <h1>Hardscaping Services in Kensington, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">🏛️ Town Permit — 3710 Mitchell Street</span>
                        <span className="badge">🌳 Root Zone Assessment</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                        <span className="badge">Licensed & Insured</span>
                        <span className="badge">Free Consultation</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional hardscaping design and installation for Kensington homeowners — natural stone patios, flagstone walkways, retaining walls, driveway paving, and outdoor living spaces suited to Kensington&apos;s pre-1950 bungalows, foursquares, and colonials. Town of Kensington permits filed at 3710 Mitchell Street. Mature tree root zones assessed before any excavation begins.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Kensington Hardscaping Expertise:</strong> Kensington&apos;s pre-1950 housing stock — craftsman bungalows, American foursquares, and traditional colonials on established lots with mature tree canopy — presents hardscaping conditions that differ meaningfully from newer suburban communities. Mature tree root zones affect where hardscape can be excavated. Period-appropriate materials (natural stone, brick) complement the community&apos;s architectural character in a way modern concrete slabs cannot. And all structural hardscaping permits go to the Town of Kensington at 3710 Mitchell Street — not MoCo DPS. DMV General Contracting Group brings experience with all three to every Kensington hardscaping project.
                </div>

                {/* UNIQUE CONDITIONS */}
                <h2>Kensington&apos;s Unique Hardscaping Conditions</h2>

                <div className="era-grid">
                    <div className="era-card">
                        <h3>🌳 Mature Tree Root Zones — The Most Important Assessment Before Any Kensington Hardscape Excavation</h3>
                        <p>Kensington&apos;s mature tree canopy — oaks, maples, elms, and specimen trees that in some cases pre-date the homes they shade — is one of the community&apos;s most valued characteristics. Mature tree root zones extend well beyond the drip line: a large oak with a 30-foot canopy spread may have significant roots extending 40–60 feet from the trunk. Hardscape excavation within that zone — even shallow base preparation for a patio or walkway — can sever major roots and permanently damage or kill the tree. DMV General Contracting Group assesses mature tree proximity and root zone extent before any Kensington hardscape layout is finalized. Patio and walkway positions are adjusted to maintain safe setbacks from significant roots where possible. Where hardscape coverage within a root zone is unavoidable and the homeowner accepts the proximity, permeable paver systems with a no-dig or minimal-dig installation method are specified to minimize root disturbance.</p>
                    </div>
                </div>

                {/* SERVICES */}
                <h2>Complete Hardscaping Services for Kensington Homes</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>🪨 Natural Stone Patio</h3><p>Irregular flagstone, Pennsylvania bluestone, and fieldstone — the most period-appropriate patio surfaces for Kensington&apos;s craftsman bungalows and colonial revival homes. Natural variation in color and texture integrates with mature plantings and established garden settings. Root zone assessment before layout is finalized. Town of Kensington permit for structural additions.</p></div>
                    <div className="svc-card"><h3>🚶 Stone Walkways & Garden Paths</h3><p>Natural flagstone and bluestone walkways connecting the home&apos;s entry, patio, and garden areas — designed to complement the architectural character of Kensington&apos;s older homes and integrate with established landscape plantings rather than cut through them. Stepping stone paths through garden areas where root proximity requires a lighter approach.</p></div>
                    <div className="svc-card"><h3>🧱 Retaining Walls</h3><p>Natural fieldstone and cut stone retaining walls managing grade changes on Kensington&apos;s established residential lots. Period-appropriate dry-laid or mortared fieldstone walls complement Kensington&apos;s older homes and mature garden settings in a way that segmental concrete block cannot. Town of Kensington permit required for walls over 30 inches.</p></div>
                    <div className="svc-card"><h3>🚗 Driveway Paving & Repair</h3><p>Driveway repaving for Kensington&apos;s established homes — concrete pavers in period-appropriate profiles, brick, or permeable paver systems. Driveway work connecting to public roads requires Town of Kensington permit at 3710 Mitchell Street. Permeable pavers recommended where mature tree root zones are present beneath or adjacent to the driveway surface.</p></div>
                    <div className="svc-card"><h3>🍳 Outdoor Kitchen & Grill Station</h3><p>Compact outdoor kitchen and built-in grill installations scaled to Kensington&apos;s residential lots — natural stone countertops and stone or brick surround preferred for period compatibility. Gas line and electrical connections managed in-house by our licensed trades team. Town of Kensington permit required for gas and electrical connections.</p></div>
                    <div className="svc-card"><h3>🌿 Permeable Hardscaping</h3><p>Permeable paver systems that allow rainwater to pass through the surface into the soil below — recommended where hardscape installation is near mature tree root zones. Protects root zones from moisture deprivation and soil compaction while delivering an attractive, durable hardscape surface. Also reduces surface runoff on Kensington&apos;s established lots.</p></div>
                    <div className="svc-card"><h3>💧 Drainage & Grading</h3><p>Surface drainage planning alongside every hardscape scope — slope, channel drains, and French drains directing water away from the home&apos;s foundation and away from established tree root zones. Kensington&apos;s older lots may have compacted soils and established root systems that affect natural drainage — addressed in the hardscape design from the start.</p></div>
                    <div className="svc-card"><h3>🧱 Brick Paving & Edging</h3><p>Reclaimed or new brick for patio surfaces, entry walks, and garden edging — period-appropriate for Kensington&apos;s colonials and foursquares with brick exterior details. Traditional running bond, herringbone, and basket weave patterns. Brick paving in Kensington&apos;s older neighborhoods reads as historically compatible in a way modern materials do not.</p></div>
                </div>

                {/* COMMON NEEDS TABLE */}
                <h2>Common Hardscaping Needs in Kensington</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Project Type</th>
                                    <th>Kensington-Specific Considerations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Front entry walkway</td>
                                    <td>Natural bluestone or flagstone entry walk complementing the home&apos;s facade and established foundation plantings. Root zone from mature street trees or front yard specimens assessed before any excavation is planned. No permit typically required — confirmed at consultation. Period-appropriate material strongly preferred over modern pavers.</td>
                                </tr>
                                <tr>
                                    <td>Rear garden patio</td>
                                    <td>Irregular flagstone or bluestone patio integrated with Kensington&apos;s established rear garden plantings and mature tree canopy. Root zones of adjacent trees assessed before layout is finalized. Town of Kensington permit for structural patio additions (pergola, outdoor kitchen). Permeable base where patio falls within root zone.</td>
                                </tr>
                                <tr>
                                    <td>Retaining wall — grade change</td>
                                    <td>Natural fieldstone or cut stone retaining wall managing a slope on a Kensington residential lot. Period-appropriate material complementing the home and existing landscape. Town of Kensington permit at 3710 Mitchell Street for walls over 30 inches. Engineering review for walls over 4 feet.</td>
                                </tr>
                                <tr>
                                    <td>Driveway repaving</td>
                                    <td>Existing asphalt or deteriorated concrete driveway replaced with concrete pavers in a period-appropriate profile or permeable paver system. Mature tree root zones beneath or adjacent to the driveway assessed — permeable pavers specified where roots are present. Town of Kensington permit for driveway work at public road connection.</td>
                                </tr>
                                <tr>
                                    <td>Garden path through mature landscape</td>
                                    <td>Stepping stone or dry-laid flagstone path through Kensington&apos;s established garden areas — minimal excavation to avoid root disturbance, stone set on a sand or decomposed granite base rather than a deep compacted gravel base. Path routing planned around significant root zones.</td>
                                </tr>
                                <tr>
                                    <td>Outdoor kitchen addition</td>
                                    <td>Compact built-in grill station or outdoor kitchen with natural stone countertop and brick or stone surround — scaled to Kensington&apos;s residential lots and period-appropriate in material. Town of Kensington permit for gas line and electrical connections at 3710 Mitchell Street.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* TOWN PERMIT */}
                <h2>Town of Kensington Permit — 3710 Mitchell Street</h2>
                <div className="banner">
                    <strong>Kensington hardscaping permits are NOT filed at Montgomery County DPS:</strong> Kensington is an incorporated municipality with its own permit office at <strong>3710 Mitchell Street, Kensington, MD 20895</strong> — entirely separate from Montgomery County DPS at 2425 Reedie Drive, Wheaton. Structural hardscaping elements — retaining walls over 30 inches, outdoor kitchens with gas or electrical connections, and driveway work at public road connections — require Town of Kensington permits filed at 3710 Mitchell Street. A contractor filing Kensington permits at MoCo DPS will be turned away. Simple ground-level patios and walkways typically do not require a permit. DMV General Contracting Group confirms permit requirements for your specific Kensington project at the free consultation and files all required permits at the correct Town office — you do not contact the Town permit office at any point.
                </div>

                {/* MATERIALS */}
                <h2>Period-Appropriate Hardscaping Materials for Kensington</h2>
                <p>Kensington&apos;s pre-1950 bungalows, foursquares, and colonials have a distinct architectural character that is best served by hardscaping materials with roots in early American residential design — natural stone, brick, and wood. These materials complement the community&apos;s older homes, age well alongside mature plantings, and belong on a Kensington lot in a way that modern concrete slabs and porcelain tiles simply do not.</p>
                <div className="materials-grid">
                    <div className="material-card"><h3>🪨 Irregular Flagstone ✅ First Choice</h3><p>Natural irregular stone in a wide-joint sand or mortar setting — the most organic and period-appropriate hardscape surface for Kensington&apos;s craftsman bungalows and cottage-style homes. Natural variation in color and texture integrates seamlessly with established garden plantings. Wide joints planted with ground cover or gravel reinforce the naturalistic, settled character that suits Kensington&apos;s mature landscape settings.</p></div>
                    <div className="material-card"><h3>🪨 Pennsylvania Bluestone ✅ Recommended</h3><p>Uniform-cut or irregular bluestone — cool gray tone and natural texture complementing both craftsman and colonial revival profiles. More structured than irregular flagstone; appropriate for homes with more formal garden layouts or for front entry walks where a cleaner, more defined edge is preferred.</p></div>
                    <div className="material-card"><h3>🧱 Brick ✅ Period Authentic</h3><p>Reclaimed or new brick in running bond, herringbone, or basket weave — deeply embedded in early American residential character and architecturally compatible with Kensington&apos;s older colonials and foursquares. Reclaimed brick from a comparable era delivers the most authentic character. Warm tone, durable, and repairable.</p></div>
                    <div className="material-card"><h3>🪨 Fieldstone ✅ Retaining Walls</h3><p>Local fieldstone in dry-laid or mortared settings for retaining walls and garden feature walls — the most naturalistic and historically compatible retaining wall material for Kensington&apos;s established lots. Dry-laid fieldstone walls allow water to drain through the wall face, reducing hydrostatic pressure without engineered drainage systems.</p></div>
                    <div className="material-card"><h3>🧱 Concrete Pavers ⚠️ Period Profile Only</h3><p>If budget requires concrete pavers, only earth-tone tumbled or aged-profile units in smaller sizes read as period-compatible in Kensington. Large-format modern pavers in contemporary colors do not suit Kensington&apos;s pre-1950 architectural context. Even appropriate pavers are a compromise — natural stone and brick are the preferred choices.</p></div>
                    <div className="material-card"><h3>🏗️ Stamped Concrete / Large Porcelain ❌ Not Recommended</h3><p>Modern stamped concrete patterns and large-format porcelain pavers are not compatible with Kensington&apos;s pre-1950 housing character. These materials read as contemporary additions that contrast with — rather than complement — the community&apos;s craftsman and colonial architectural setting. Not recommended for Kensington properties.</p></div>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for Hardscaping in Kensington?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏛️</div>
                        <strong>Town Permit 3710 Mitchell St</strong>
                        <span>Correct office, every time</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🌳</div>
                        <strong>Root Zone Assessment</strong>
                        <span>Before any excavation planned</span>
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
                    <div className="svc-card"><h3>Kensington Character Knowledge</h3><p>Pre-1950 homes, established lots, mature canopy — DMV-GC recommends hardscaping materials and designs that complement Kensington&apos;s architectural character rather than contrast with it. Period-appropriate materials first, always.</p></div>
                    <div className="svc-card"><h3>Correct Permit Office</h3><p>All Kensington structural hardscaping permits filed at the Town of Kensington at 3710 Mitchell Street — not MoCo DPS. Town correspondence and inspection scheduling managed in-house. You do not contact the Town permit office at any point.</p></div>
                    <div className="svc-card"><h3>Root Zone First</h3><p>Every Kensington hardscape layout assessed for mature tree root proximity before design is finalized. Permeable base systems specified where root protection is the priority. No significant root damage on our Kensington projects.</p></div>
                    <div className="svc-card"><h3>All Trades In-House</h3><p>Gas line extensions, electrical connections, drainage, and hardscape installation all coordinated under one design-build workflow — no separate subcontractors on different schedules managing pieces of your Kensington outdoor project.</p></div>
                </div>

                {/* PROCESS */}
                <h2>Our Hardscaping Process in Kensington</h2>
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
                <h2>Hardscaping Project Costs — Kensington, MD</h2>
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
                                    <td>Natural stone walkway</td>
                                    <td>$4,000 – $9,000+</td>
                                    <td>Flagstone or bluestone, root zone assessment included, period-appropriate installation</td>
                                </tr>
                                <tr>
                                    <td>Flagstone or bluestone patio</td>
                                    <td>$12,000 – $28,000+</td>
                                    <td>Irregular or uniform cut, sand or mortar set, drainage, root zone assessment</td>
                                </tr>
                                <tr>
                                    <td>Brick patio</td>
                                    <td>$10,000 – $22,000+</td>
                                    <td>Reclaimed or new brick, traditional pattern, mortar or sand set</td>
                                </tr>
                                <tr>
                                    <td>Fieldstone retaining wall</td>
                                    <td>$5,000 – $20,000+</td>
                                    <td>Dry-laid or mortared, Town of Kensington permit for walls over 30 inches</td>
                                </tr>
                                <tr>
                                    <td>Driveway repaving</td>
                                    <td>$7,000 – $20,000+</td>
                                    <td>Period-appropriate pavers or permeable system; Town permit for public road connection</td>
                                </tr>
                                <tr>
                                    <td>Outdoor kitchen / grill station</td>
                                    <td>$10,000 – $30,000+</td>
                                    <td>Natural stone countertop, stone or brick surround, gas + electrical; Town permit required</td>
                                </tr>
                                <tr>
                                    <td>Complete outdoor living area</td>
                                    <td>$30,000 – $70,000+</td>
                                    <td>Patio + walkway + retaining wall + outdoor kitchen; all trades in-house</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p style={{ fontSize: "13px", color: "#555", marginTop: "-20px" }}>* All prices confirmed at free on-site estimate before work begins. Root zone assessment and period material recommendations included at no charge.</p>

                {/* SERVICE AREA */}
                <h2>Hardscaping Service Area</h2>
                <p>DMV General Contracting Group provides hardscaping services throughout <strong>Kensington, MD</strong> and surrounding communities — including Chevy Chase, North Bethesda, Bethesda, Silver Spring, Wheaton, Garrett Park, Rockville, and Washington DC.</p>

                <div className="banner">
                    <strong>Kensington vs Neighboring Communities — Permit Reminder:</strong> Town of Kensington at 3710 Mitchell Street covers Kensington hardscaping permits. Neighboring Garrett Park files at the Town of Garrett Park at 4600 Oxford Street. Unincorporated Montgomery County areas surrounding Kensington file at MoCo DPS at 2425 Reedie Drive, Wheaton. Each is a separate office — filing at the wrong one means no permit is issued. DMV General Contracting Group confirms the correct jurisdiction for every project at the free consultation.
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Hardscaping in Kensington, MD</h2>
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
                    <h2>Explore Our Other Services in Kensington, MD</h2>
                    <ul>
                        <li><Link href="/service/patios/kensington-md">Patio Installation in Kensington, MD</Link></li>
                        <li><Link href="/service/fence-installation/kensington-md">Fence Installation in Kensington, MD</Link></li>
                        <li><Link href="/service/decks/kensington-md">Deck Building in Kensington, MD</Link></li>
                        <li><Link href="/service/home-additions/kensington-md">Home Additions in Kensington, MD</Link></li>
                        <li><Link href="/service/design-build/kensington-md">Design-Build Contractor in Kensington, MD</Link></li>
                        <li><Link href="/service/concrete/kensington-md">Concrete Services in Kensington, MD</Link></li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="cta-banner">
                    <h2>Need Hardscaping Services in Kensington, MD?</h2>
                    <p>Talk with DMV General Contracting Group about natural stone patios, walkways, retaining walls, driveways, or outdoor kitchens for your Kensington home. Town of Kensington permits filed at 3710 Mitchell Street. Mature tree root zones assessed at no charge. Period-appropriate materials recommended for every project. Free consultation, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn">Call +1 240-730-1292</a>
                    <a href="mailto:support@dmv-gc.com" className="cta-btn outline">Email support@dmv-gc.com</a>
                </div>
            </div>
        </div>
    );
};

export default HardscapingKensingtonMD;