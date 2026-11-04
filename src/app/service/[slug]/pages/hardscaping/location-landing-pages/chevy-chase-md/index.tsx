import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../hardscaping-city-style.scss";
import "./style.scss";

const HardscapingChevyChaseMD = () => {
    const faqData = [
        {
            question: "How many permit jurisdictions cover hardscaping in Chevy Chase, MD?",
            answer: "Six. Village of Chevy Chase, Chevy Chase Section 3, Chevy Chase Section 5, Village of Somerset, Village of Friendship Heights, and unincorporated Montgomery County each have separate permit offices for structural hardscaping work. The correct office is confirmed by parcel location — not mailing address, neighborhood name, or zip code. DMV General Contracting Group confirms the applicable jurisdiction at every Chevy Chase hardscaping consultation."
        },
        {
            question: "What hardscaping material is most appropriate for a Chevy Chase colonial or tudor?",
            answer: "Natural bluestone is the first choice for most Chevy Chase colonials and tudor revivals — the cool gray tone and natural texture complement both architectural profiles and age gracefully in Chevy Chase's established garden settings. Fieldstone is the most period-appropriate choice for retaining walls. Brick in a traditional pattern is excellent for homes with brick exterior details. Modern large-format porcelain, stamped concrete, and contemporary segmental block are not recommended for Chevy Chase's estate architectural context."
        },
        {
            question: "How does hardscaping near Chevy Chase's century-old trees work?",
            answer: "Chevy Chase's mature oaks, maples, and specimen trees — some over 100 years old — have root zones that extend 40 to 60 feet or more from the trunk. Hardscape excavation within those zones can sever major roots and permanently damage or kill trees that are often the most valued features on a Chevy Chase estate property. DMV General Contracting Group assesses root zone proximity before any layout is finalized, adjusts designs to maintain safe setbacks, and specifies permeable or minimal-dig base systems where coverage within a root zone is unavoidable."
        },
        {
            question: "Do I need a permit for a natural stone patio in Chevy Chase?",
            answer: "A basic ground-level patio without structural elements typically does not require a permit in any Chevy Chase jurisdiction. Structural additions — pergolas, outdoor kitchens with gas or electrical, retaining walls over 30 inches, and raised patio footings — require permits filed at the correct village or county office. DMV General Contracting Group confirms permit requirements for your specific Chevy Chase scope at the free consultation and manages all filings in-house."
        },
        {
            question: "How much does hardscaping cost in Chevy Chase, MD?",
            answer: "Chevy Chase hardscaping costs reflect the community's estate-level properties and preference for premium natural materials. A natural bluestone patio starts at $18,000–$45,000+. A fieldstone retaining wall runs $7,000–$28,000+. A complete outdoor living area runs $50,000–$120,000+. DMV General Contracting Group provides a free, detailed estimate after reviewing the site and confirming the applicable permit jurisdiction."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Free Consultation & Jurisdiction Confirmation",
            desc: "We visit your Chevy Chase property, walk the full outdoor scope, assess mature tree locations and root zone proximity, and confirm the correct permit jurisdiction for your specific parcel — Village of Chevy Chase, Section 3, Section 5, Somerset, Friendship Heights, or unincorporated MoCo. Period-appropriate material recommendations discussed. Free, no obligation."
        },
        {
            num: 2,
            title: "Design & Estate-Appropriate Materials",
            desc: "Hardscape layout designed with Chevy Chase's estate architectural character as the primary framework — natural stone, brick, fieldstone, and wood. Root zone setbacks incorporated into every element. Formal and informal garden features integrated into the design rather than replaced by hardscape."
        },
        {
            num: 3,
            title: "Village Permit Filed at the Correct Office",
            desc: "All required structural hardscaping permits prepared and filed at the confirmed correct village or county permit office. All village correspondence managed in-house. Permit approval tracked and inspections scheduled by our permit team. You do not contact any permit office at any point in the project."
        },
        {
            num: 4,
            title: "Root-Aware Excavation & Base Preparation",
            desc: "Excavation approach confirmed after root zone assessment — standard compacted gravel base where away from significant roots; permeable or minimal-dig base where root proximity warrants it. Drainage infrastructure installed before surface material is placed. Existing formal garden plantings protected throughout."
        },
        {
            num: 5,
            title: "Hardscape Installation — All Trades",
            desc: "Natural stone, brick, or fieldstone installed on the prepared base. Retaining walls built to specification. Outdoor kitchen constructed with natural stone countertop and period-appropriate enclosure. Gas and electrical work completed by licensed in-house trades. Established garden plantings protected and restored at completion."
        },
        {
            num: 6,
            title: "Village Inspection, Cleanup & Completion",
            desc: "All required village or MoCo DPS inspections scheduled and managed at the correct office. Work area cleaned — Chevy Chase's formal gardens protected and restored at project completion. Final walkthrough. Warranty documentation provided at close."
        }
    ];

    return (
        <div className="city-service-detail-page hardscaping-chevy-chase-md hardscaping-page">
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
                                    "description": "Professional hardscaping contractor serving Chevy Chase, MD. Six permit jurisdictions — Village of Chevy Chase, Section 3, Section 5, Village of Somerset, Village of Friendship Heights, and unincorporated MoCo — confirmed by parcel. Estate-level natural stone patios, walkways, fieldstone retaining walls, and driveways for Chevy Chase's historic colonials and tudors. Root zone assessment. MHIC #156178.",
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
                                    "name": "Hardscaping Services in Chevy Chase, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Chevy Chase" },
                                    "serviceType": "Hardscaping, Natural Stone Patio, Walkways, Fieldstone Retaining Walls, Driveway Paving, Outdoor Kitchen, Estate Outdoor Living"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Hardscaping", "item": "https://www.dmv-gc.com/service/hardscaping" },
                                        { "@type": "ListItem", "position": 4, "name": "Chevy Chase, MD", "item": "https://www.dmv-gc.com/service/hardscaping/chevy-chase-md" }
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
                    Chevy Chase, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">DMV GENERAL CONTRACTING GROUP · CHEVY CHASE, MD</div>
                    <h1>Hardscaping Services in Chevy Chase, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">🏛️ Six Permit Jurisdictions — Confirmed by Parcel</span>
                        <span className="badge">🌳 Root Zone Assessment</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                        <span className="badge">Licensed &amp; Insured</span>
                        <span className="badge">Free Consultation</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional estate-level hardscaping design and installation for Chevy Chase homeowners — natural bluestone patios, limestone and fieldstone retaining walls, flagstone walkways, driveway paving, outdoor kitchens, and complete outdoor living spaces for Chevy Chase&apos;s 1910s–1940s colonials, tudors, and georgian revival homes. Six permit jurisdictions confirmed by parcel. Mature tree root zones assessed before any excavation begins.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Chevy Chase Hardscaping Expertise:</strong> Chevy Chase is not a single municipality — it is a collection of six independent villages and unincorporated county territory, each with its own permit office. It is also home to some of Montgomery County&apos;s most architecturally significant residential properties — 1910s–1940s colonials, tudors, and georgian revivals on estate lots with mature tree canopy and established formal gardens. Hardscaping here requires a contractor who knows which of six permit offices applies to the specific parcel, understands what materials complement the community&apos;s estate-level architectural character, and respects the mature landscape that defines these properties. DMV General Contracting Group brings all three to every Chevy Chase hardscaping project.
                </div>

                {/* PERMIT JURISDICTIONS */}
                <h2>Chevy Chase&apos;s Six Permit Jurisdictions — Confirmed by Parcel Before Any Work Begins</h2>
                <p>Two adjacent Chevy Chase homes with identical mailing addresses may file hardscaping permits at different offices depending on which village boundary their parcels fall within. A contractor who files by neighborhood name or zip code will get it wrong for a significant percentage of Chevy Chase properties. DMV General Contracting Group confirms the correct permit authority by parcel at every Chevy Chase hardscaping consultation.</p>

                <div className="juris-grid">
                    <div className="juris-card">
                        <h3>🏛️ Village of Chevy Chase</h3>
                        <p>Oldest and largest village. Own municipal permit office for all structural hardscaping — retaining walls, outdoor kitchens, driveway work. Not MoCo DPS.</p>
                    </div>
                    <div className="juris-card">
                        <h3>🏛️ Chevy Chase Section 3</h3>
                        <p>Separate incorporated village with its own permit office. Distinct from the Village — filing at the wrong office results in no permit issued.</p>
                    </div>
                    <div className="juris-card">
                        <h3>🏛️ Chevy Chase Section 5</h3>
                        <p>Another independent incorporated section with its own permit authority — separate from both the Village and Section 3.</p>
                    </div>
                    <div className="juris-card">
                        <h3>🏛️ Village of Somerset</h3>
                        <p>Small incorporated village within the Chevy Chase area. Own permit authority for all construction including structural hardscape elements.</p>
                    </div>
                    <div className="juris-card">
                        <h3>🏛️ Village of Friendship Heights</h3>
                        <p>Incorporated village bordering DC. Own permit office for hardscaping and construction work — not MoCo DPS, not DC DOB.</p>
                    </div>
                    <div className="juris-card">
                        <h3>🏛️ Unincorporated MoCo</h3>
                        <p>Some Chevy Chase-area properties fall outside all village limits. These file structural hardscaping permits with MoCo DPS at 2425 Reedie Drive, Wheaton.</p>
                    </div>
                </div>

                <div className="banner">
                    <strong>Simple ground-level patios and walkways</strong> typically do not require a permit in any Chevy Chase jurisdiction. Structural elements — retaining walls over 30 inches, outdoor kitchens with gas or electrical connections, driveway work at public road connections, and raised patio footings — require permits filed at the correct village or county office. DMV General Contracting Group confirms permit requirements for your specific Chevy Chase project at the free consultation.
                </div>

                {/* SERVICES */}
                <h2>Complete Hardscaping Services for Chevy Chase Homes</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>🪨 Estate Natural Stone Patio</h3><p>Large-format natural bluestone, travertine, limestone, and flagstone patios for Chevy Chase&apos;s estate properties — formal terraces adjacent to the home, garden patios integrated with established plantings, and multi-zone outdoor living areas. Materials selected for estate-level quality and compatibility with the home&apos;s architectural character. Root zone assessment before any layout is finalized.</p></div>
                    <div className="svc-card"><h3>🚶 Stone Walkways &amp; Garden Paths</h3><p>Natural stone walkways connecting entry, driveway, patio, and garden areas across Chevy Chase&apos;s estate lots — bluestone, flagstone, and limestone in formal and informal profiles. Stepping stone paths through established garden areas where root proximity requires a lighter approach. Period-appropriate materials that complement the home&apos;s century-old character.</p></div>
                    <div className="svc-card"><h3>🧱 Fieldstone &amp; Natural Stone Retaining Walls</h3><p>Fieldstone and cut limestone retaining walls managing grade changes on Chevy Chase&apos;s established lots — natural materials that complement the community&apos;s estate gardens and mature tree canopy. Dry-laid fieldstone for naturalistic settings; cut stone for formal applications. Village permit required for walls over 30 inches at the correct office confirmed by parcel.</p></div>
                    <div className="svc-card"><h3>🚗 Driveway Paving &amp; Motor Court</h3><p>Premium driveway paving for Chevy Chase&apos;s estate properties — concrete pavers in estate-appropriate profiles, natural stone aprons, and permeable systems. Long driveway runs engineered for proper surface drainage. Village permit required for public road connection work. Permeable pavers recommended where mature tree root zones are beneath or adjacent to the driveway surface.</p></div>
                    <div className="svc-card"><h3>🍳 Outdoor Kitchen &amp; Entertaining Area</h3><p>Estate-level outdoor kitchen design and installation for Chevy Chase homeowners — natural stone countertops, brick or stone enclosures, built-in grills, outdoor refrigerators, and sinks. Period-appropriate materials throughout. Gas line and electrical work managed in-house by our licensed trades team. Village permit required for gas and electrical connections.</p></div>
                    <div className="svc-card"><h3>🌿 Garden Terracing &amp; Formal Steps</h3><p>Cut stone and natural stone steps connecting grade changes throughout Chevy Chase&apos;s formal estate lots — entry steps, garden terrace steps, and steps between patio levels designed as architectural elements of the overall hardscape plan. Natural stone steps complement Chevy Chase&apos;s 1910s–1940s homes in a way that poured concrete steps cannot.</p></div>
                    <div className="svc-card"><h3>🌳 Permeable &amp; Root-Protective Hardscaping</h3><p>Permeable paver and gravel systems for areas near mature tree root zones — allowing rainwater to reach root systems and preventing soil compaction around Chevy Chase&apos;s century-old specimen trees. Recommended wherever significant trees are within the planned hardscape area. Protects the most valuable landscape assets on Chevy Chase estate properties.</p></div>
                    <div className="svc-card"><h3>💧 Drainage &amp; Grade Management</h3><p>Comprehensive drainage planning for Chevy Chase&apos;s established estate lots — surface grading, French drains, and channel drains designed to manage water away from foundations and established plantings. Drainage designed as part of every hardscape scope from the start, not addressed after pooling problems appear on a newly completed estate patio or driveway.</p></div>
                </div>

                {/* COMMUNITY TABLE */}
                <h2>Common Hardscaping Projects in Chevy Chase</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Project Type</th>
                                    <th>Chevy Chase Estate-Specific Considerations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Formal garden terrace for a 1920s colonial</strong></td>
                                    <td>Natural bluestone or cut limestone terrace integrated with the home&apos;s formal garden layout and rear facade. Mortar-set for estate-quality durability. Root zones of adjacent specimen trees assessed and setbacks incorporated into the layout. Village permit confirmed by parcel for any structural additions to the terrace scope.</td>
                                </tr>
                                <tr>
                                    <td><strong>Fieldstone retaining wall</strong></td>
                                    <td>Dry-laid or mortared fieldstone managing a grade change on a Chevy Chase estate lot — the most naturalistic and period-compatible retaining material for this historic community. Village permit at the correct office (confirmed by parcel) for walls over 30 inches. Engineering review for walls over 4 feet.</td>
                                </tr>
                                <tr>
                                    <td><strong>Estate driveway repaving</strong></td>
                                    <td>Long driveway run in premium concrete pavers or natural stone apron — properly engineered base for the full driveway length. Permeable pavers specified where mature tree root zones are present beneath or adjacent to the driveway. Village permit for public road connection work at the correct village office.</td>
                                </tr>
                                <tr>
                                    <td><strong>Outdoor kitchen on estate property</strong></td>
                                    <td>Natural stone countertop, brick or stone enclosure, full appliance package. Period-appropriate materials throughout — not contemporary stainless steel and porcelain on an estate with 1920s Tudor character. Gas line extension and electrical connections managed in-house. Village permit at the correct office for gas and electrical.</td>
                                </tr>
                                <tr>
                                    <td><strong>Front entry walk &amp; steps</strong></td>
                                    <td>Natural bluestone or limestone entry walk with cut stone steps complementing the home&apos;s front facade and established foundation plantings. Root zones from street trees or front yard specimens assessed before any excavation. No permit typically required for a simple walkway — confirmed at consultation. Period materials strongly preferred.</td>
                                </tr>
                                <tr>
                                    <td><strong>Complete outdoor living area</strong></td>
                                    <td>Patio + retaining walls + walkway + outdoor kitchen + landscape lighting as a coordinated estate-scale scope. Multiple village permits coordinated where the scope spans different elements — all managed in-house. One design-build team from concept to completion across all trades.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* MATERIALS */}
                <h2>Period-Appropriate Hardscaping Materials for Chevy Chase</h2>
                <p>Chevy Chase&apos;s 1910s–1940s colonials, tudors, and georgian revivals represent some of the most architecturally significant residential properties in Montgomery County. The right hardscaping material complements this character; the wrong one contrasts with it in a way that is immediately visible to anyone who knows the community.</p>
                <div className="materials-grid">
                    <div className="material-card"><h3>🪨 Natural Bluestone ✅ First Choice</h3><p>The most popular estate hardscaping material for Chevy Chase&apos;s traditional colonials and georgian revivals — cool gray tone, natural texture, timeless character. Mortar-set in large-format slabs for formal terraces; irregular in sand-set for garden settings. Ages beautifully alongside Chevy Chase&apos;s mature plantings and formal gardens.</p></div>
                    <div className="material-card"><h3>🪨 Limestone &amp; Travertine ✅ Premium</h3><p>Cut limestone for formal steps, terrace edging, and retaining wall cap stones; tumbled travertine for informal garden patio settings. Warm cream tones complement both tudor and georgian revival architectural profiles. Travertine used for outdoor kitchen areas and pool surrounds on Chevy Chase&apos;s larger estate properties.</p></div>
                    <div className="material-card"><h3>🧱 Reclaimed or New Brick ✅ Period Authentic</h3><p>The most architecturally authentic hardscaping choice for Chevy Chase&apos;s older colonials and tudor revivals with brick exterior details. Reclaimed brick from a comparable era delivers the most authentic character. Traditional patterns — running bond, herringbone — read as genuinely period rather than decorative imitation.</p></div>
                    <div className="material-card"><h3>🪨 Fieldstone ✅ Retaining Walls &amp; Garden Features</h3><p>Local fieldstone for retaining walls, garden feature walls, and stone edging — the most natural and historically compatible hardscape material for Chevy Chase&apos;s established estate gardens. Dry-laid fieldstone settles naturally into the landscape over time, gaining a character that no engineered concrete block wall can replicate.</p></div>
                    <div className="material-card"><h3>🧱 Concrete Pavers ⚠️ Estate Profile Only</h3><p>Acceptable on Chevy Chase estate properties only in premium earth-tone profiles scaled appropriately to the estate setting. Large-format contemporary slabs in bright or unusual colors are not appropriate. Natural stone and brick are the preferred choices — concrete pavers are a budget consideration, not a design equal, in Chevy Chase&apos;s estate context.</p></div>
                    <div className="material-card"><h3>🏗️ Stamped Concrete / Modern Porcelain ❌ Not Recommended</h3><p>Contemporary stamped concrete patterns and large-format porcelain pavers are not compatible with Chevy Chase&apos;s estate architectural character. These materials read as modern additions that contrast with — rather than complement — the community&apos;s 1910s–1940s colonial and tudor streetscapes. Not recommended for any Chevy Chase hardscaping project.</p></div>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for Hardscaping in Chevy Chase?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏛️</div>
                        <strong>Six-Jurisdiction Expertise</strong>
                        <span>Correct permit office by parcel</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🌳</div>
                        <strong>Root Zone Assessment</strong>
                        <span>Century-old trees protected</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9 Rating</strong>
                        <span>97+ verified reviews</span>
                    </div>
                    <div className="trust-item">
                        <strong>MD MHIC #156178</strong>
                        <span>Licensed &amp; fully insured</span>
                    </div>
                </div>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Six-Jurisdiction Permit Expertise</h3><p>Village of Chevy Chase, Section 3, Section 5, Somerset, Friendship Heights, and unincorporated MoCo — six separate permit offices. Correct office confirmed by parcel at the free consultation. All village correspondence, inspector scheduling, and permit tracking managed in-house. You never contact any permit office directly.</p></div>
                    <div className="svc-card"><h3>Estate-Level Material Standards</h3><p>Natural bluestone, limestone, fieldstone, travertine, and brick specified as primary choices for Chevy Chase&apos;s historic estate homes. Modern materials that conflict with the community&apos;s architectural character are not recommended — even where cost savings would be available. Design standard applied from the first consultation.</p></div>
                    <div className="svc-card"><h3>Century-Old Tree Protection</h3><p>Chevy Chase&apos;s oaks, maples, and specimen trees — some over a century old — are assessed for root zone proximity before any hardscape layout is finalized. Permeable base and minimal-dig installation methods specified where root proximity warrants them. These trees are often the most valuable features on a Chevy Chase property — every design starts with protecting them.</p></div>
                    <div className="svc-card"><h3>All Trades In-House</h3><p>Gas line extensions, electrical connections, drainage engineering, and hardscape installation all coordinated under one design-build workflow — no separate subcontractors on different schedules managing pieces of your Chevy Chase estate outdoor project.</p></div>
                </div>

                {/* PROCESS */}
                <h2>Our Hardscaping Process in Chevy Chase</h2>
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
                <h2>Hardscaping Project Costs — Chevy Chase, MD</h2>
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
                                    <td>Natural bluestone patio (estate)</td>
                                    <td>$18,000 – $45,000+</td>
                                    <td>Large-format mortar-set; estate dimensions; root zone assessment; village permit</td>
                                </tr>
                                <tr>
                                    <td>Travertine or limestone patio</td>
                                    <td>$20,000 – $48,000+</td>
                                    <td>Premium estate material; outdoor kitchen area or pool surround; village permit</td>
                                </tr>
                                <tr>
                                    <td>Natural stone walkway</td>
                                    <td>$5,000 – $12,000+</td>
                                    <td>Bluestone or flagstone; root zone assessment along route; period-appropriate</td>
                                </tr>
                                <tr>
                                    <td>Fieldstone retaining wall</td>
                                    <td>$7,000 – $28,000+</td>
                                    <td>Dry-laid or mortared; village permit over 30&quot;; engineering over 4ft</td>
                                </tr>
                                <tr>
                                    <td>Brick patio</td>
                                    <td>$14,000 – $30,000+</td>
                                    <td>Reclaimed or new brick; traditional pattern; period-authentic for tudor and colonial profiles</td>
                                </tr>
                                <tr>
                                    <td>Estate driveway repaving</td>
                                    <td>$12,000 – $35,000+</td>
                                    <td>Long estate driveway; premium pavers; permeable where root zones present; village permit</td>
                                </tr>
                                <tr>
                                    <td>Outdoor kitchen (estate)</td>
                                    <td>$15,000 – $45,000+</td>
                                    <td>Natural stone countertop; period-appropriate enclosure; gas + electrical in-house</td>
                                </tr>
                                <tr>
                                    <td>Complete outdoor living area</td>
                                    <td>$50,000 – $120,000+</td>
                                    <td>Estate-scale patio + walls + kitchen + walkways + lighting; all trades in-house</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p style={{ fontSize: "13px", color: "#555", marginTop: "-20px" }}>* All prices confirmed at free on-site estimate. Permit jurisdiction confirmed by parcel before any material is priced.</p>

                {/* SERVICE AREA */}
                <h2>Hardscaping Service Area</h2>
                <p>DMV General Contracting Group provides hardscaping services throughout <strong>Chevy Chase, MD</strong> — including Village of Chevy Chase, Chevy Chase Section 3, Chevy Chase Section 5, Village of Somerset, Village of Friendship Heights, and surrounding communities including Bethesda, Kensington, North Bethesda, Silver Spring, and Washington DC.</p>

                <div className="banner">
                    <strong>Chevy Chase Permit Reminder — Six Offices, One Right Answer:</strong> Two adjacent Chevy Chase properties with identical mailing addresses may file at different permit offices. The correct office is determined by parcel location — not street name, neighborhood name, or zip code. DMV General Contracting Group confirms the correct permit authority for every Chevy Chase hardscaping project at the free consultation. This single step — parcel-level jurisdiction confirmation — is the most important thing that happens before any Chevy Chase structural hardscape project begins.
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Hardscaping in Chevy Chase, MD</h2>
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
                        <li><Link href="/service/patios/chevy-chase-md">Patio Installation in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/roofing/chevy-chase-md">Roofing Services in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/home-additions/chevy-chase-md">Home Additions in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/design-build/chevy-chase-md">Design-Build Contractor in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/fence-installation/chevy-chase-md">Fence Installation in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/electrical-services/chevy-chase-md">Electrical Services in Chevy Chase, MD</Link></li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="cta-banner">
                    <h2>Need Hardscaping Services in Chevy Chase, MD?</h2>
                    <p>Talk with DMV General Contracting Group about natural stone patios, fieldstone retaining walls, estate walkways, driveways, or outdoor kitchens for your Chevy Chase property. Six permit jurisdictions confirmed by parcel. Century-old tree root zones assessed. Period-appropriate materials for every project. Free consultation, no obligation.</p>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn">Call +1 240-730-1292</a>
                    <a href="mailto:support@dmv-gc.com" className="cta-btn outline">Email support@dmv-gc.com</a>
                </div>
            </div>
        </div>
    );
};

export default HardscapingChevyChaseMD;