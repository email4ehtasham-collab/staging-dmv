import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../hardscaping-city-style.scss";
import "./style.scss";

const HardscapingGarrettParkMD = () => {
    const faqData = [
        {
            question: "Where are hardscaping permits filed in Garrett Park, MD?",
            answer: "With the Town of Garrett Park at 4600 Oxford Street, Garrett Park, MD 20896 — not Montgomery County DPS. Structural hardscaping elements including retaining walls over 30 inches, outdoor kitchens with gas or electrical, and driveway work at public road connections require Town of Garrett Park permits. Simple ground-level patios and walkways typically do not require a permit. DMV General Contracting Group confirms requirements at the free consultation and manages all Town filings in-house."
        },
        {
            question: "What hardscaping material is most appropriate for a Garrett Park craftsman bungalow?",
            answer: "Irregular natural flagstone in a wide-joint sand or mortar setting is the most period-appropriate and visually compatible choice — it integrates with the bungalow's craftsman character and existing garden plantings as if it has always been there. Reclaimed or new brick in a traditional pattern is an excellent alternative for homes with brick exterior details. Pennsylvania bluestone in a more structured layout works for homes with more formal garden settings. Large-format modern concrete slabs, porcelain pavers, and stamped concrete are not recommended for Garrett Park's historic architectural context."
        },
        {
            question: "How does hardscaping near Garrett Park's mature trees work?",
            answer: "Mature tree root zones in Garrett Park extend well beyond the drip line — excavation within that zone can sever major roots and permanently damage or kill the tree. DMV General Contracting Group assesses root zone proximity before any Garrett Park hardscape layout is finalized, adjusts the design to maintain safe setbacks from significant roots where possible, and specifies permeable base or minimal-dig installation methods where hardscape coverage within a root zone is unavoidable. Garrett Park's canopy is worth protecting — every hardscape plan starts with root zone assessment."
        },
        {
            question: "Should I use a fieldstone or concrete block retaining wall in Garrett Park?",
            answer: "For Garrett Park's historic district setting, natural fieldstone is strongly preferred over engineered segmental concrete block. Dry-laid fieldstone walls — where individual stones are set without mortar — have been used in American residential landscape design for over a century, drain naturally without engineered drainage systems, and settle naturally into the surrounding landscape over time. Concrete block walls, even in natural stone facing, read as contemporary additions in Garrett Park's historic setting. For walls that require engineered design due to height or load, mortared natural stone with engineered backing is a better option than exposed segmental block."
        },
        {
            question: "How much does hardscaping cost in Garrett Park, MD?",
            answer: "Garrett Park hardscaping costs reflect the community's preference for natural materials — stone and brick cost more than concrete pavers, and are the right choice for the historic district context. A natural flagstone or bluestone patio starts at $13,000–$30,000+. A fieldstone retaining wall runs $6,000–$22,000+. A natural stone walkway runs $4,500–$10,000+. A complete outdoor living area runs $35,000–$75,000+. DMV General Contracting Group provides a free, detailed estimate after reviewing the site — root zone assessment and period material recommendations included at no charge."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Free Consultation & Root Zone Assessment",
            desc: "We visit your Garrett Park property, assess the outdoor space — mature trees and root zone proximity, grade changes, existing garden features, home's architectural character — and discuss your hardscaping vision and budget. Mature tree locations noted and root zone extents estimated before any layout is discussed. Town permit requirements confirmed. Free, no obligation."
        },
        {
            num: 2,
            title: "Design & Period-Appropriate Material Selection",
            desc: "Hardscape layout designed with Garrett Park's historic character as the guiding framework — natural stone, brick, or period-appropriate pavers. Root zone setbacks incorporated into every element of the layout. Permeable base or minimal-dig installation specified where significant root zones intersect planned hardscape areas. Design that integrates with existing garden plantings rather than replacing them."
        },
        {
            num: 3,
            title: "Town of Garrett Park Permit at 4600 Oxford Street",
            desc: "All required structural hardscaping permits prepared and filed with the Town of Garrett Park at 4600 Oxford Street. All Town correspondence managed in-house. Permit approval tracked and Town inspections scheduled by our permit team. You do not contact the Town office at any point."
        },
        {
            num: 4,
            title: "Root-Aware Excavation & Base Preparation",
            desc: "Excavation approach confirmed after root zone assessment — standard compacted gravel base where away from significant roots; minimal-dig or permeable base where root proximity warrants it. Drainage slope established away from both home and established trees. Existing garden plantings protected and noted for restoration at project completion."
        },
        {
            num: 5,
            title: "Hardscape Installation",
            desc: "Natural stone, brick, or period-appropriate material installed on the prepared base. Fieldstone retaining wall built per plan. Outdoor kitchen constructed with stone or brick surround and natural stone countertop. Gas and electrical work by licensed in-house trades. Established garden plantings protected throughout and restored at completion."
        },
        {
            num: 6,
            title: "Town Inspection, Cleanup & Completion",
            desc: "All required Town of Garrett Park inspections scheduled and managed at 4600 Oxford Street. Work area cleaned — Garrett Park's established gardens protected and restored at completion. Final walkthrough. Warranty documentation provided at project close."
        }
    ];

    return (
        <div className="city-service-detail-page hardscaping-garrett-park-md hardscaping-page">
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
                                    "description": "Professional hardscaping contractor serving Garrett Park, MD. National Register Historic District — period-appropriate materials and exterior compatibility required. Town of Garrett Park permit at 4600 Oxford Street. Natural stone patios, walkways, fieldstone retaining walls, driveways and outdoor living. Root zone assessment. MHIC #156178.",
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
                                    "name": "Hardscaping Services in Garrett Park, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Garrett Park" },
                                    "serviceType": "Hardscaping, Natural Stone Patio, Flagstone Walkways, Fieldstone Retaining Walls, Driveway Paving, Outdoor Kitchen, Historic Home Outdoor Living"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Hardscaping", "item": "https://www.dmv-gc.com/service/hardscaping" },
                                        { "@type": "ListItem", "position": 4, "name": "Garrett Park, MD", "item": "https://www.dmv-gc.com/service/hardscaping/garrett-park-md" }
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
                    Garrett Park, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">DMV GENERAL CONTRACTING GROUP · GARRETT PARK, MD</div>
                    <h1>Hardscaping Services in Garrett Park, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">🏛️ National Register Historic District</span>
                        <span className="badge">📋 Town Permit — 4600 Oxford Street</span>
                        <span className="badge">🌳 Root Zone Assessment</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                        <span className="badge">Free Consultation</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional hardscaping design and installation for Garrett Park homeowners — natural stone patios, flagstone walkways, fieldstone retaining walls, driveway paving, and outdoor kitchens suited to Garrett Park&apos;s National Register Historic District homes. Town of Garrett Park permits filed at 4600 Oxford Street. Mature tree root zones assessed before any excavation begins. Period-appropriate materials — natural stone, brick, and wood — specified for every project.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Garrett Park Hardscaping Expertise:</strong> Garrett Park is one of Montgomery County&apos;s most distinctive communities — a National Register Historic District whose 1900s–1940s craftsman bungalows, American foursquares, and colonial revival homes sit on established lots with mature canopy and settled garden landscapes. Hardscaping here must respect three realities that standard suburban hardscape projects do not face: the community&apos;s historic character calls for period-appropriate materials (natural stone, brick, wood — not stamped concrete or contemporary porcelain); Garrett Park&apos;s mature trees require root zone assessment before any excavation is planned; and all structural hardscaping permits go to the Town of Garrett Park at 4600 Oxford Street — not MoCo DPS. DMV General Contracting Group brings experience with all three.
                </div>

                {/* THREE REALITIES */}
                <h2>Garrett Park&apos;s Three Hardscaping Realities</h2>

                <div className="era-grid">
                    <div className="era-card">
                        <h3>🏛️ What Makes Garrett Park Hardscaping Different From Any Other MoCo Community</h3>
                        <ul>
                            <li><strong>National Register Historic District character:</strong> Garrett Park&apos;s listing on the National Register of Historic Places means the community&apos;s character — intact early 20th century residential architecture, mature tree canopy, established garden landscapes — should guide material and design choices. Natural stone, brick, and wood belong here. Contemporary concrete slabs, modern porcelain pavers, and stamped concrete patterns do not. This is not a regulation that applies to rear garden improvements — it is a design standard that competent hardscape contractors apply voluntarily because the alternative reads as wrong.</li>
                            <li><strong>Mature tree root zones:</strong> Garrett Park&apos;s canopy — oaks, elms, maples, and specimen trees that in some cases pre-date the homes — is a defining community characteristic. Root zones extend well beyond the drip line. Every Garrett Park hardscape layout is assessed for root zone proximity before a single square foot of excavation is planned. Where hardscape coverage within a root zone is unavoidable, permeable base systems and minimal-dig installation methods are specified.</li>
                            <li><strong>Town of Garrett Park permit at 4600 Oxford Street:</strong> All structural hardscaping permits — retaining walls over 30 inches, outdoor kitchens with gas or electrical, driveway work — are filed at the Town of Garrett Park at 4600 Oxford Street, not at MoCo DPS. A contractor who files at the wrong office will be turned away. DMV General Contracting Group files at 4600 Oxford Street as standard practice for every Garrett Park project.</li>
                        </ul>
                    </div>
                </div>

                {/* SERVICES */}
                <h2>Complete Hardscaping Services for Garrett Park Homes</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>🪨 Natural Stone Patio</h3><p>Irregular flagstone, Pennsylvania bluestone, and fieldstone — the most period-appropriate and visually compatible patio surfaces for Garrett Park&apos;s craftsman bungalows and colonial revival homes. Natural variation in color and texture integrates with mature plantings and established garden settings. Root zone assessment before layout is finalized. Town of Garrett Park permit for structural additions.</p></div>
                    <div className="svc-card"><h3>🚶 Flagstone Walkways & Garden Paths</h3><p>Natural flagstone and bluestone walkways connecting the home&apos;s entry, patio, and garden areas — designed to complement the architectural character of Garrett Park&apos;s older homes and integrate with established landscape plantings. Stepping stone paths through garden areas where root proximity requires a lighter, minimal-dig approach.</p></div>
                    <div className="svc-card"><h3>🧱 Fieldstone Retaining Walls</h3><p>Dry-laid or mortared fieldstone retaining walls managing grade changes on Garrett Park&apos;s established lots — the most period-appropriate and naturalistic retaining wall material for this historic district. Fieldstone walls allow water drainage through the wall face in dry-laid construction, reducing hydrostatic pressure. Town of Garrett Park permit at 4600 Oxford Street for walls over 30 inches.</p></div>
                    <div className="svc-card"><h3>🚗 Driveway Paving</h3><p>Driveway repaving for Garrett Park&apos;s established homes — concrete pavers in period-appropriate earth-tone profiles, gravel, or permeable paver systems. Permeable pavers recommended where mature tree root zones are present beneath or adjacent to the driveway surface. Town of Garrett Park permit for public road connection work.</p></div>
                    <div className="svc-card"><h3>🍳 Outdoor Kitchen & Grill Station</h3><p>Compact outdoor kitchen and built-in grill installations for Garrett Park homeowners — natural stone countertops and stone or brick surround preferred for period compatibility with the historic district character. Gas line and electrical connections managed in-house by our licensed trades team. Town of Garrett Park permit for gas and electrical connections.</p></div>
                    <div className="svc-card"><h3>🧱 Brick Paving & Garden Features</h3><p>Reclaimed or new brick for patio surfaces, entry walks, and garden edging — period-appropriate for Garrett Park&apos;s colonials and foursquares with brick exterior details. Traditional running bond, herringbone, and basket weave patterns. Brick hardscaping in Garrett Park&apos;s established neighborhoods reads as historically compatible in a way modern materials cannot.</p></div>
                    <div className="svc-card"><h3>🌿 Permeable Hardscaping</h3><p>Permeable paver and gravel systems for areas where hardscape coverage within mature tree root zones is unavoidable — allowing rainwater to pass through the surface and reach root systems below. Recommended wherever significant trees are within the drip line of planned hardscape areas. Protects Garrett Park&apos;s most valued landscape assets while delivering functional outdoor surfaces.</p></div>
                    <div className="svc-card"><h3>💧 Drainage & Grading</h3><p>Surface drainage planning alongside every hardscape scope — slope, channel drains, and French drains directing water away from the home&apos;s foundation and established tree root zones. Garrett Park&apos;s older lots may have compacted soils and established root systems that affect natural drainage — addressed in the hardscape design from the start.</p></div>
                </div>

                {/* COMMON PROJECTS TABLE */}
                <h2>Common Hardscaping Projects in Garrett Park</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Project Type</th>
                                    <th>Garrett Park-Specific Considerations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Natural stone patio for a craftsman bungalow</td>
                                    <td>Irregular flagstone or bluestone in a wide-joint sand or mortar setting — integrates with the bungalow&apos;s craftsman character and existing garden plantings. Root zones of adjacent trees assessed before layout. Town of Garrett Park permit for structural additions. Large-format concrete slabs and porcelain pavers not appropriate for this architectural context.</td>
                                </tr>
                                <tr>
                                    <td>Fieldstone retaining wall</td>
                                    <td>Dry-laid or mortared fieldstone managing a grade change — the most naturalistic and historically compatible retaining wall material for Garrett Park&apos;s established lots. Town of Garrett Park permit at 4600 Oxford Street for walls over 30 inches. Engineering for walls over 4 feet. Natural stone preferred over segmental concrete block for Garrett Park&apos;s historic district setting.</td>
                                </tr>
                                <tr>
                                    <td>Front entry walkway</td>
                                    <td>Natural bluestone or flagstone entry walk complementing the home&apos;s facade and established foundation plantings. Root zone from mature street trees or front yard specimens assessed before any excavation is planned. Period-appropriate material strongly preferred — modern pavers do not suit Garrett Park&apos;s early 20th century residential character. No permit typically required for a simple walkway.</td>
                                </tr>
                                <tr>
                                    <td>Garden path through mature landscape</td>
                                    <td>Stepping stone or dry-laid flagstone path through Garrett Park&apos;s established garden areas — minimal excavation to avoid root disturbance, stone set on sand or decomposed granite base. Path routing planned around significant root zones. A naturalistic approach that integrates with Garrett Park&apos;s settled garden character.</td>
                                </tr>
                                <tr>
                                    <td>Driveway repaving</td>
                                    <td>Existing asphalt or deteriorated concrete replaced with concrete pavers in period-appropriate profile, gravel, or permeable pavers. Mature tree root zones beneath or adjacent to driveway assessed — permeable pavers specified where roots are present. Town of Garrett Park permit for road connection work at 4600 Oxford Street.</td>
                                </tr>
                                <tr>
                                    <td>Outdoor kitchen with stone surround</td>
                                    <td>Compact built-in grill station with natural stone countertop and fieldstone or brick surround — period-appropriate materials that complement Garrett Park&apos;s historic district character. Town of Garrett Park permit for gas line and electrical connections. Scaled to Garrett Park&apos;s residential lot sizes and outdoor space proportions.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* TOWN PERMIT */}
                <h2>Town of Garrett Park Permit — 4600 Oxford Street</h2>
                <div className="banner">
                    <strong>Garrett Park hardscaping permits are NOT filed at Montgomery County DPS:</strong> Garrett Park is an incorporated municipality with its own permit office at <strong>4600 Oxford Street, Garrett Park, MD 20896</strong> — entirely separate from Montgomery County DPS at 2425 Reedie Drive, Wheaton. Structural hardscaping elements — retaining walls over 30 inches, outdoor kitchens with gas or electrical connections, and driveway work at public road connections — require Town of Garrett Park permits filed at 4600 Oxford Street. A contractor filing these permits at MoCo DPS will be turned away. DMV General Contracting Group files all Garrett Park structural hardscaping permits at 4600 Oxford Street and manages all Town correspondence and inspection coordination in-house — you do not contact the Town permit office at any point in the project.
                </div>

                {/* MATERIALS */}
                <h2>Period-Appropriate Hardscaping Materials for Garrett Park</h2>
                <p>Garrett Park&apos;s National Register Historic District character is best served by hardscaping materials that have always been part of American residential landscape design — stone, brick, and wood. These materials complement the community&apos;s 1900s–1940s homes, age gracefully alongside mature plantings, and belong in Garrett Park&apos;s historic setting in a way that contemporary materials simply do not.</p>
                <div className="materials-grid">
                    <div className="material-card"><h3>🪨 Natural Flagstone ✅ First Choice</h3><p>Irregular Pennsylvania flagstone, bluestone, or quartzite set in a wide-joint sand or mortar bed — the most organically appropriate hardscape surface for Garrett Park&apos;s craftsman bungalows and cottage-style homes. Natural variation integrates seamlessly with established garden plantings. Wide joints planted with creeping thyme or moss reinforce the naturalistic, settled character that defines Garrett Park&apos;s landscape setting.</p></div>
                    <div className="material-card"><h3>🪨 Pennsylvania Bluestone ✅ Recommended</h3><p>Uniform-cut or irregular bluestone — cool gray tone and natural texture complementing both craftsman and colonial revival profiles. More structured than irregular flagstone; appropriate for homes with more formal garden layouts or front entry walks where a defined, clean edge is preferred over an informal organic setting.</p></div>
                    <div className="material-card"><h3>🧱 Reclaimed or New Brick ✅ Recommended</h3><p>Running bond, herringbone, or basket weave — brick is deeply embedded in early American residential character and compatible with Garrett Park&apos;s older colonials and foursquares. Reclaimed brick from a comparable era delivers the most authentic character. Warm tone, durable, repairable. Particularly appropriate for homes with brick exterior details.</p></div>
                    <div className="material-card"><h3>🪨 Fieldstone ✅ Retaining Walls & Garden Features</h3><p>Local fieldstone for retaining walls, garden feature walls, and naturalistic garden edging — the most organic and historically compatible hardscape material for Garrett Park&apos;s established lots. Dry-laid fieldstone walls are especially appropriate — they allow drainage through the wall face and settle naturally into the landscape over time.</p></div>
                    <div className="material-card"><h3>🧱 Concrete Pavers ⚠️ Period Profile Only</h3><p>If budget requires concrete pavers, only earth-tone tumbled or aged-profile units in smaller sizes read as period-compatible in Garrett Park. Large-format modern pavers in contemporary colors do not suit Garrett Park&apos;s early 20th century architectural context. Natural stone and brick are the preferred choices — concrete pavers are a budget compromise, not a design equal.</p></div>
                    <div className="material-card"><h3>🏗️ Stamped Concrete / Large Porcelain ❌ Not Recommended</h3><p>Modern stamped concrete patterns and large-format porcelain pavers are not compatible with Garrett Park&apos;s National Register Historic District character. These materials read as contemporary additions that contrast with the community&apos;s craftsman and colonial architectural setting. Not recommended for any Garrett Park hardscaping project.</p></div>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for Hardscaping in Garrett Park?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏛️</div>
                        <strong>Historic District Knowledge</strong>
                        <span>Period materials, correct permit</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>4600 Oxford Street</strong>
                        <span>Town permit filed correctly</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🌳</div>
                        <strong>Root Zone Assessment</strong>
                        <span>Before any excavation planned</span>
                    </div>
                    <div className="trust-item">
                        <strong>MD MHIC #156178</strong>
                        <span>Licensed & fully insured</span>
                    </div>
                </div>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Historic District Material Knowledge</h3><p>DMV-GC recommends hardscaping materials with Garrett Park&apos;s National Register Historic District character as the primary reference — natural stone, brick, and wood first. Modern materials that conflict with the historic setting are not recommended regardless of cost or convenience. This standard is applied to every Garrett Park project from the first consultation.</p></div>
                    <div className="svc-card"><h3>Correct Permit Office</h3><p>All Garrett Park structural hardscaping permits filed at the Town of Garrett Park at 4600 Oxford Street — not MoCo DPS. Town correspondence and inspection scheduling managed in-house. You do not contact the Town permit office at any point in the project.</p></div>
                    <div className="svc-card"><h3>Root Zone First</h3><p>Every Garrett Park hardscape layout assessed for mature tree root proximity before any design is finalized. Permeable base and minimal-dig installation specified where root protection is warranted. Garrett Park&apos;s century-old trees are worth protecting — every hardscape plan we develop here starts with root zone mapping.</p></div>
                    <div className="svc-card"><h3>All Trades In-House</h3><p>Gas line extensions, electrical connections, drainage, and hardscape installation all coordinated under one design-build workflow — no separate subcontractors managing pieces of your Garrett Park outdoor project on different schedules.</p></div>
                </div>

                {/* PROCESS */}
                <h2>Our Hardscaping Process in Garrett Park</h2>
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
                <h2>Hardscaping Project Costs — Garrett Park, MD</h2>
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
                                    <td>Natural flagstone patio</td>
                                    <td>$13,000 – $28,000+</td>
                                    <td>Irregular or uniform, sand or mortar set, root zone assessment included</td>
                                </tr>
                                <tr>
                                    <td>Pennsylvania bluestone patio</td>
                                    <td>$15,000 – $30,000+</td>
                                    <td>Mortar-set for period-quality installation; drainage included</td>
                                </tr>
                                <tr>
                                    <td>Brick patio</td>
                                    <td>$11,000 – $24,000+</td>
                                    <td>Reclaimed or new brick; traditional pattern; Town permit for structural additions</td>
                                </tr>
                                <tr>
                                    <td>Natural stone walkway</td>
                                    <td>$4,500 – $10,000+</td>
                                    <td>Flagstone or bluestone; root zone assessment along route; minimal-dig where needed</td>
                                </tr>
                                <tr>
                                    <td>Fieldstone retaining wall</td>
                                    <td>$6,000 – $22,000+</td>
                                    <td>Dry-laid or mortared; Town of Garrett Park permit at 4600 Oxford St for walls over 30&apos;&apos;</td>
                                </tr>
                                <tr>
                                    <td>Driveway repaving</td>
                                    <td>$7,000 – $20,000+</td>
                                    <td>Period-appropriate pavers or permeable system; root zone assessment; Town permit for road connection</td>
                                </tr>
                                <tr>
                                    <td>Outdoor kitchen / grill station</td>
                                    <td>$11,000 – $32,000+</td>
                                    <td>Natural stone countertop, stone or brick surround; gas + electrical in-house; Town permit</td>
                                </tr>
                                <tr>
                                    <td>Complete outdoor living area</td>
                                    <td>$35,000 – $75,000+</td>
                                    <td>Patio + walkway + retaining wall + kitchen; all trades in-house; Town permit managed throughout</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p style={{ fontSize: "13px", color: "#555", marginTop: "-20px" }}>* All prices confirmed at free on-site estimate. Root zone assessment and period material recommendations included at no charge.</p>

                {/* SERVICE AREA */}
                <h2>Hardscaping Service Area</h2>
                <p>DMV General Contracting Group provides hardscaping services throughout <strong>Garrett Park, MD</strong> and surrounding communities — including Kensington, North Bethesda, Bethesda, Rockville, Wheaton, Silver Spring, Chevy Chase, and Cabin John.</p>

                <div className="banner">
                    <strong>Garrett Park vs Neighboring Communities — Permit Office Reminder:</strong> Town of Garrett Park at 4600 Oxford Street covers Garrett Park properties. Neighboring Kensington files at the Town of Kensington at 3710 Mitchell Street. Unincorporated areas surrounding both towns file at MoCo DPS at 2425 Reedie Drive, Wheaton. Each is a separate office — filing at the wrong one means no permit is issued. DMV General Contracting Group confirms the correct jurisdiction at every Garrett Park area consultation.
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Hardscaping in Garrett Park, MD</h2>
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
                        <li><Link href="/service/patios/garrett-park-md">Patio Installation in Garrett Park, MD</Link></li>
                        <li><Link href="/service/roofing/garrett-park-md">Roofing Services in Garrett Park, MD</Link></li>
                        <li><Link href="/service/home-additions/garrett-park-md">Home Additions in Garrett Park, MD</Link></li>
                        <li><Link href="/service/design-build/garrett-park-md">Design-Build Contractor in Garrett Park, MD</Link></li>
                        <li><Link href="/service/siding-installation/garrett-park-md">Siding Installation in Garrett Park, MD</Link></li>
                        <li><Link href="/service/electrical-services/garrett-park-md">Electrical Services in Garrett Park, MD</Link></li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="cta-banner">
                    <h2>Need Hardscaping Services in Garrett Park, MD?</h2>
                    <p>Talk with DMV General Contracting Group about natural stone patios, flagstone walkways, fieldstone retaining walls, driveways, or outdoor kitchens for your Garrett Park home. Town of Garrett Park permits filed at 4600 Oxford Street. Mature tree root zones assessed at no charge. Period-appropriate materials for every project. Free consultation, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn">Call +1 240-730-1292</a>
                    <a href="mailto:support@dmv-gc.com" className="cta-btn outline">Email support@dmv-gc.com</a>
                </div>
            </div>
        </div>
    );
};

export default HardscapingGarrettParkMD;