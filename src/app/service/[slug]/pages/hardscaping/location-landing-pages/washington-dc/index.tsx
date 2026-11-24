import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../hardscaping-city-style.scss";
import "./style.scss";

const HardscapingWashingtonDC = () => {
    const faqData = [
        {
            question: "Does DMV General Contracting Group hold a DC license for hardscaping work?",
            answer: "Yes. DMV General Contracting Group holds DC DLCP license #410526000209 — required for all contractor work in Washington DC including hardscaping. Maryland MHIC license #156178 covers Maryland work. Both licenses together cover the full DMV area. Always verify a DC contractor's DLCP number before scheduling hardscaping work in the District."
        },
        {
            question: "Where are hardscaping permits filed in Washington DC?",
            answer: "With the DC Department of Buildings (DC DOB) at 1100 4th Street SW, Washington, DC 20024 — not with Montgomery County DPS or any Maryland permit office. Simple ground-level patios and walkways typically do not require a permit. Structural elements — retaining walls, outdoor kitchens with gas or electrical, driveway connections, rooftop terraces — require DC DOB permits. DMV General Contracting Group manages all DC DOB filings and inspection coordination in-house."
        },
        {
            question: "What hardscaping material is most appropriate for a DC rowhouse rear garden?",
            answer: "Brick is the most period-authentic and HPRB-compatible choice for DC rowhouse rear gardens — Capitol Hill Victorians and Georgetown Federals were built in brick, and brick hardscaping feels continuous with the home's character rather than added. Natural bluestone is the premium upgrade choice. Irregular flagstone works for more informal garden settings in Petworth, Columbia Heights, and other neighborhoods where a relaxed garden character is appropriate. Large-format modern porcelain and stamped concrete are not recommended for typical DC rowhouse rear garden contexts."
        },
        {
            question: "Do party walls affect DC hardscaping installation?",
            answer: "Yes. DC rowhouse rear gardens are bounded by shared party walls on both sides. Any hardscape installation adjacent to a party wall requires drainage planning away from the shared wall, waterproofing assessment at the wall junction, and careful construction that does not disturb the shared wall structure. These conditions are specific to DC rowhouse construction and are assessed as standard practice at every DC rear garden hardscape consultation."
        },
        {
            question: "How much does hardscaping cost in Washington DC?",
            answer: "A brick rear garden patio runs $9,000–$20,000+. A natural stone patio runs $13,000–$28,000+. A retaining wall runs $6,000–$22,000+. A compact outdoor kitchen runs $12,000–$35,000+. A rooftop terrace starts at $20,000+. A complete rear garden hardscape runs $25,000–$65,000+. DMV General Contracting Group provides a free estimate after reviewing the DC property in person. All prices include DC DOB permit management and DLCP license documentation."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Free Consultation — DC Property Assessment",
            desc: "We visit your DC property, assess the outdoor space — rear garden dimensions, party wall conditions, grade changes, drainage toward the alley, front courtyard configuration, rooftop conditions if applicable — and discuss your hardscaping vision and budget. Historic district HPRB applicability noted. DLCP license confirmed for your records. Free, no obligation."
        },
        {
            num: 2,
            title: "Design & HPRB Material Selection",
            desc: "Hardscape layout designed for DC's compact rear garden or courtyard dimensions. Materials selected with DC's architectural character and HPRB compatibility in mind — brick, natural stone, and period-appropriate pavers preferred for DC's historic neighborhoods. Party wall setbacks incorporated into the layout before any design is presented."
        },
        {
            num: 3,
            title: "DC DOB Permit Filed at 1100 4th Street SW",
            desc: "All required DC hardscaping permits prepared and filed at DC DOB. DLCP license #410526000209 documented in every DC permit submission. All DC DOB correspondence managed in-house. Permit approval tracked and DC inspections scheduled by our permit team. You do not contact DC DOB."
        },
        {
            num: 4,
            title: "Party Wall & Drainage Assessment",
            desc: "Party wall junctions assessed before excavation begins — drainage planned away from both shared walls and toward the rear of the property per DC drainage requirements. Waterproofing at party wall junctions addressed where any hardscape element is installed adjacent to a shared wall. Foundation drainage not compromised."
        },
        {
            num: 5,
            title: "Hardscape Installation",
            desc: "Patio surface, retaining walls, steps, and raised beds installed within DC's rear garden dimensions per the approved design. Outdoor kitchen installed where included. Gas and electrical connections completed by our licensed DC trades team under DLCP license #410526000209. All work performed in compliance with DC DOB approved plans."
        },
        {
            num: 6,
            title: "DC DOB Inspection, Cleanup & Completion",
            desc: "All required DC DOB inspections scheduled and managed at 1100 4th Street SW. Work area cleaned per DC property and alley requirements. Final walkthrough. Warranty documentation and DLCP license confirmation provided at project close."
        }
    ];

    const neighborhoods = [
        "Capitol Hill",
        "Georgetown",
        "Cleveland Park",
        "Chevy Chase DC",
        "Tenleytown",
        "Dupont Circle",
        "Columbia Heights",
        "Petworth",
        "Bloomingdale",
        "Logan Circle",
        "Woodley Park",
        "Spring Valley",
        "Foxhall",
        "Adams Morgan",
        "Shaw",
        "U Street Corridor",
        "Kalorama",
        "American University Park"
    ];

    return (
        <div className="city-service-detail-page hardscaping-washington-dc hardscaping-page">
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
                                    "description": "Licensed hardscaping contractor serving Washington DC. DLCP licensed #410526000209. DC DOB permits at 1100 4th Street SW. Rear garden patios, courtyard paving, retaining walls, outdoor kitchens, rooftop terraces and party wall coordination for DC rowhouses, Georgetown colonials and Capitol Hill Victorians. HPRB guidance for historic district properties.",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11810 Grand Park Ave. Suite 500",
                                        "addressLocality": "North Bethesda",
                                        "addressRegion": "MD",
                                        "postalCode": "20852",
                                        "addressCountry": "US"
                                    },
                                    "areaServed": { "@type": "City", "name": "Washington, DC" }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Hardscaping Services in Washington DC",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "Place", "name": "Washington, DC" },
                                    "serviceType": "Hardscaping, Rear Garden Patio, Courtyard Paving, Retaining Walls, Driveway Paving, Outdoor Kitchen, Rooftop Terrace, DC Rowhouse Hardscaping"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Hardscaping", "item": "https://www.dmv-gc.com/service/hardscaping" },
                                        { "@type": "ListItem", "position": 4, "name": "Washington, DC", "item": "https://www.dmv-gc.com/service/hardscaping/washington-dc" }
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
                    Washington, DC
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">⚡ Hardscaping Contractor • Washington, DC — DLCP #410526000209</div>
                    <h1>Hardscaping Services in Washington, DC</h1>
                    <div className="hero-meta">
                        <span className="badge">✅ DLCP Licensed #410526000209</span>
                        <span className="badge">📋 DC DOB — 1100 4th St SW</span>
                        <span className="badge">🏛️ HPRB Guidance</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MD MHIC #156178</span>
                        <span className="badge">✓ Free Consultation</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional hardscaping design and installation for Washington DC homeowners — rear garden patios, courtyard paving, retaining walls, steps, driveway paving, outdoor kitchens, and rooftop terraces for DC rowhouses, Capitol Hill Victorians, Georgetown colonials and federals, and detached DC homes. DLCP licensed #410526000209. DC DOB permits at 1100 4th Street SW. HPRB guidance for historic district properties.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Washington DC Hardscaping Expertise:</strong> Hardscaping in DC is fundamentally different from suburban Maryland work — DLCP license required (Maryland MHIC alone is not valid in DC), DC DOB permits at 1100 4th Street SW, HPRB consideration for historic district properties, party wall conditions on both sides of DC rowhouse rear gardens, and the physical constraints of compact rear garden dimensions bounded by shared walls and rear alleys. DMV General Contracting Group holds DC DLCP license #410526000209, files at DC DOB, understands party wall coordination, and designs hardscaping that makes the most of DC&apos;s compact but valuable outdoor spaces.
                </div>

                {/* DLCP LICENSE */}
                <h2>DLCP License — Required for All Hardscaping Work in Washington DC</h2>

                <div className="banner">
                    <strong>⚠️ Maryland MHIC License Is Not Valid for Hardscaping Work in Washington DC:</strong> Washington DC requires a separate DC contractor license — issued by the Department of Licensing and Consumer Protection (DLCP) — for all home improvement and construction work performed in the District, including hardscaping. A Maryland contractor holding only MHIC license is not authorized to perform patio, retaining wall, driveway, or any other hardscape work in DC. DMV General Contracting Group holds DC DLCP license <strong>#410526000209</strong> in addition to Maryland MHIC license #156178 — the complete credential set for the full DMV area. When scheduling any DC hardscaping contractor, always ask for the DLCP license number and verify it with DC DLCP before any work begins or any contract is signed.
                </div>

                {/* SERVICES */}
                <h2>Complete Hardscaping Services for Washington DC Properties</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>🪨 Rear Garden Patio</h3><p>The most common DC hardscaping project — brick or natural stone patio transforming a DC rowhouse rear garden into a functional, attractive outdoor living space. Party wall junctions assessed for drainage before installation. DC DOB permit for structural additions (retaining walls, outdoor kitchen, raised patio footings). HPRB guidance for rear garden features visible from the alley in historic districts.</p></div>
                    <div className="svc-card"><h3>🏛️ Courtyard & Front Garden Paving</h3><p>Front courtyard and entry paving for DC rowhouses with gated front entries — brick, bluestone, or natural stone complementing the rowhouse facade and the street&apos;s architectural character. HPRB review may apply for front-facing features visible from the street in DC historic districts. DC DOB permit for structural courtyard elements.</p></div>
                    <div className="svc-card"><h3>🧱 Retaining Walls & Garden Steps</h3><p>Brick, natural stone, and mortared block retaining walls managing grade changes in DC rear gardens — raising or lowering planting beds, creating terraced levels in sloped rear gardens, and managing the grade transition between the home&apos;s exit level and the garden floor. DC DOB permit required. HPRB review for walls visible from street or alley in historic districts.</p></div>
                    <div className="svc-card"><h3>🚗 Driveway & Parking Pad Paving</h3><p>Driveway paving and rear parking pad installation for DC properties with alley access — brick, concrete pavers, and permeable paver systems. DC DOB permit for driveway work at public road or alley connections. HPRB guidance for driveway additions visible from the street in DC historic districts. Permeable pavers increasingly specified for DC stormwater management requirements.</p></div>
                    <div className="svc-card"><h3>🍳 Outdoor Kitchen & Grill Station</h3><p>Compact outdoor kitchen and built-in grill installations for DC rear gardens — sized efficiently for DC rowhouse rear garden dimensions. Natural stone countertops and brick or stone surround appropriate for DC&apos;s historic district context. Gas line extension from the home managed in-house by our licensed DC trades team. DC DOB permit for gas and electrical connections.</p></div>
                    <div className="svc-card"><h3>🏠 Rooftop Terrace</h3><p>Rooftop outdoor living spaces for DC rowhouses and condos — paver overlay systems on waterproof membranes, composite decking, and built-up rooftop patio systems. DC DOB structural permit required — weight load, waterproofing, and access all reviewed before any rooftop scope is planned. HPRB review for street-visible rooftop additions in DC historic districts.</p></div>
                    <div className="svc-card"><h3>🧱 Party Wall Coordination</h3><p>DC rowhouse hardscaping is bounded by shared party walls on both sides. Any hardscape installation adjacent to a party wall requires assessment of drainage away from the shared wall, waterproofing at the wall junction where moisture could travel into the neighboring property, and careful construction that does not disturb the shared wall structure. These conditions are unique to DC rowhouse construction and are accounted for in every DC hardscape scope.</p></div>
                    <div className="svc-card"><h3>🌿 Raised Planting Beds & Garden Features</h3><p>Brick or natural stone raised planting beds, garden edging, and landscape feature walls in DC rear gardens — adding height, structure, and visual interest to compact rear garden spaces. Period-appropriate materials in DC&apos;s historic neighborhoods. DC DOB permit for structural raised beds with footings. HPRB guidance for features visible from the alley in historic districts.</p></div>
                </div>

                {/* DC ROWHOUSE REAR GARDENS */}
                <h2>DC Rowhouse Rear Gardens — Designing for Compact Hardscape Spaces</h2>
                <div className="banner">
                    <strong>DC Rowhouse Rear Garden Constraints:</strong> Most DC rowhouse rear gardens are 15–25 feet wide (bounded by party walls on both sides) and 15–35 feet deep (to the rear alley). Within these dimensions — typically 300 to 600 square feet total — every hardscape element must be planned for maximum efficiency. DMV General Contracting Group designs DC rear garden hardscaping with these constraints in mind: patio surface covering most of the usable space, retaining or terrace elements managing any grade change between the home&apos;s exit level and the garden, raised beds or low walls creating structure without consuming space, a compact outdoor kitchen or grill station positioned against the rear wall or fence, and steps or a short retaining wall where the grade between the home&apos;s exit level and the garden floor requires management. Party wall junctions on both sides assessed for waterproofing before any installation adjacent to a shared wall begins.
                </div>

                {/* COMMON PROJECTS TABLE */}
                <h2>Common Hardscaping Projects in Washington DC</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Property Type</th>
                                    <th>Typical Scope</th>
                                    <th>DC-Specific Considerations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Capitol Hill Victorian rowhouse</strong></td>
                                    <td>Brick rear garden patio, raised planting beds, garden steps, compact grill station</td>
                                    <td>DC DOB permit for structural elements. HPRB review if features visible from alley in Capitol Hill historic district. Period-appropriate brick strongly preferred — natural stone as upgrade. Party wall junctions on both sides assessed. Drainage away from both shared walls required.</td>
                                </tr>
                                <tr>
                                    <td><strong>Georgetown Federal or Colonial</strong></td>
                                    <td>Bluestone courtyard, formal rear garden hardscape, entry steps, raised beds</td>
                                    <td>DC DOB permit. Georgetown historic district — HPRB review for street or alley-visible features. Natural stone and brick the only appropriate materials. Formal layout preferred for Georgetown&apos;s more structured garden settings. Party wall conditions assessed.</td>
                                </tr>
                                <tr>
                                    <td><strong>Petworth or Columbia Heights rowhouse</strong></td>
                                    <td>Rear garden patio with pavers or stone, raised beds, grill station or small outdoor kitchen</td>
                                    <td>DC DOB permit for structural elements. Less restrictive HPRB context — rear garden improvements generally proceed through standard DC DOB permitting. Brick and natural stone both appropriate; concrete pavers acceptable. Party wall drainage assessed.</td>
                                </tr>
                                <tr>
                                    <td><strong>Cleveland Park or Woodley Park detached home</strong></td>
                                    <td>Larger rear patio, outdoor kitchen, retaining wall where grade requires, front walkway</td>
                                    <td>DC DOB permit. Detached homes with larger lots support fuller outdoor living scopes. HPRB applicable for some Cleveland Park and Woodley Park historic district properties. More layout flexibility than typical rowhouse rear gardens.</td>
                                </tr>
                                <tr>
                                    <td><strong>Rear parking pad / driveway (alley access)</strong></td>
                                    <td>Permeable or standard paver parking pad at rear alley access point</td>
                                    <td>DC DOB permit for connection to public alley. HPRB review for driveway additions visible from the street in historic districts. Permeable pavers increasingly required or preferred for DC stormwater management. Party wall setbacks confirmed before parking pad edges are placed.</td>
                                </tr>
                                <tr>
                                    <td><strong>Rooftop terrace</strong></td>
                                    <td>Paver overlay on membrane, composite deck, or built-up rooftop system</td>
                                    <td>DC DOB structural permit required — weight load, waterproofing, and access reviewed before scope is planned. HPRB review for rooftop elements visible from the street in historic districts. Separate structural assessment before any rooftop hardscape scope is priced.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* DC DOB PERMITS */}
                <h2>DC DOB Permits — 1100 4th Street SW</h2>
                <div className="banner">
                    <strong>All DC hardscaping permits are filed with the DC Department of Buildings (DC DOB) at 1100 4th Street SW, Washington, DC 20024</strong> — not with Montgomery County DPS, not with any Maryland permit office. DC has its own permit system entirely separate from Maryland. Simple ground-level patios and walkways typically do not require a permit in DC. Structural elements — retaining walls, outdoor kitchens with gas or electrical, driveway connections, raised patio footings, and rooftop terraces — require DC DOB permits. DMV General Contracting Group files all required DC hardscaping permits at DC DOB, manages all DC DOB correspondence, and coordinates all required DC inspections in-house. You do not contact DC DOB at any point in the process.
                </div>

                {/* HPRB */}
                <h2>HPRB — Historic Preservation Guidance for DC Hardscaping</h2>
                <div className="banner">
                    <strong>🏛️ When Does DC Hardscaping Require HPRB Review?</strong> Washington DC&apos;s Historic Preservation Review Board governs exterior modifications in DC&apos;s historic districts — Capitol Hill, Georgetown, Dupont Circle, Logan Circle, Kalorama, and others. For hardscaping specifically: <strong>rear garden hardscaping not visible from the street or alley</strong> generally does not require HPRB review and proceeds through standard DC DOB permitting. <strong>Features visible from the street or alley</strong> — front courtyard paving, retaining walls visible from the street, driveway additions, and rooftop elements visible from public ways — may require HPRB review or a Certificate of Appropriateness. <strong>Period-appropriate materials</strong> (brick, natural stone) are HPRB-compatible for most DC historic district hardscaping; large-format contemporary porcelain, stamped concrete, and decorative concrete block are generally not. DMV General Contracting Group discusses HPRB applicability with every DC historic district homeowner at the consultation — before any permit is filed, so there are no surprises in the DC DOB review process.
                </div>

                {/* MATERIALS */}
                <h2>Hardscaping Materials for Washington DC Properties</h2>
                <div className="materials-grid">
                    <div className="material-card"><h3>🧱 Brick ✅ Most Authentic for DC</h3><p>Running bond, herringbone, or basket weave — brick is the most deeply embedded material in DC&apos;s rowhouse character. Capitol Hill Victorians and Georgetown Federals were built in brick; their rear garden hardscaping in brick feels architecturally continuous. HPRB-compatible for DC historic district rear garden installations. Period-appropriate and long-lasting in DC&apos;s climate.</p></div>
                    <div className="material-card"><h3>🪨 Natural Bluestone ✅ Premium Upgrade</h3><p>Uniform-cut or irregular bluestone — cool gray tone complementing DC&apos;s historic rowhouse profiles. Popular premium upgrade from brick for DC homeowners investing in outdoor quality. HPRB-compatible in rear garden applications for DC historic districts. Mortar-set for durability in DC&apos;s freeze-thaw conditions.</p></div>
                    <div className="material-card"><h3>🪨 Irregular Flagstone ✅ Garden Settings</h3><p>Natural irregular stone for DC&apos;s more informal rear garden settings and homes with naturalistic plantings. Wide joints with ground cover integrate naturally with established garden beds in DC&apos;s compact rear spaces. Well suited to Petworth, Columbia Heights, and other DC neighborhoods where a more relaxed garden character is appropriate.</p></div>
                    <div className="material-card"><h3>🧱 Concrete Pavers ⚠️ Rear Garden Only</h3><p>Acceptable for DC rear garden patios where natural stone or brick is cost-prohibitive. Earth-tone tumbled profiles in smaller unit sizes read better in DC&apos;s historic context than large contemporary slabs. Not recommended where HPRB review applies. Not the preferred choice for front-facing or street-visible DC hardscape work.</p></div>
                    <div className="material-card"><h3>🧱 Permeable Pavers ✅ Driveways & Parking</h3><p>Permeable paver systems for DC driveways, rear parking pads, and large patio areas — allowing rainwater to pass through the surface into the subgrade, managing DC&apos;s stormwater requirements and reducing impervious surface area. Increasingly required or preferred for DC driveway and parking applications. DC DOB permit for alley or road connections.</p></div>
                    <div className="material-card"><h3>🏗️ Large Porcelain / Stamped Concrete ❌ Historic Districts</h3><p>Large-format porcelain and stamped concrete are appropriate only for contemporary DC condos, modern construction, and non-historic-district properties where the architectural context supports contemporary materials. Not appropriate or HPRB-compatible for Capitol Hill, Georgetown, or other historic district hardscape applications. Not recommended for typical DC rowhouse contexts.</p></div>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for Hardscaping in Washington DC?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">✅</div>
                        <strong>DLCP #410526000209</strong>
                        <span>Required DC license — verified</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>DC DOB Permits</strong>
                        <span>1100 4th St SW — in-house</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🏛️</div>
                        <strong>HPRB Guidance</strong>
                        <span>Historic applicability confirmed</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9 Rating</strong>
                        <span>97+ verified reviews</span>
                    </div>
                </div>
                <div className="svc-grid">
                    <div className="svc-card"><h3>DLCP Licensed for DC Work</h3><p>DC DLCP license #410526000209 — the license required for all hardscaping work in the District. Maryland MHIC alone is not valid in DC. DMV-GC holds both licenses — full DMV area coverage. Verify the DLCP license number before scheduling any DC hardscaping contractor.</p></div>
                    <div className="svc-card"><h3>DC DOB Permit Management</h3><p>All DC hardscaping permits filed at DC DOB at 1100 4th Street SW. All DC DOB correspondence managed in-house. All required DC inspections scheduled and coordinated. You do not contact DC DOB at any point in the project.</p></div>
                    <div className="svc-card"><h3>Party Wall & Rowhouse Expertise</h3><p>Compact rear garden dimensions, party wall drainage and waterproofing, rear alley conditions, and HPRB historic district considerations — all specific to DC rowhouse construction and accounted for in every DC hardscape scope. Not a suburban Maryland approach applied to a DC property.</p></div>
                    <div className="svc-card"><h3>HPRB Compatibility Planning</h3><p>Historic district material and HPRB applicability discussed at the consultation — before any permit is filed. Period-appropriate material recommendations that are HPRB-compatible from the start. No surprises in the DC DOB review process for Capitol Hill, Georgetown, or other historic district projects.</p></div>
                </div>

                {/* PROCESS */}
                <h2>Our Hardscaping Process in Washington DC</h2>
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
                <h2>Hardscaping Project Costs — Washington DC</h2>
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
                                    <td>Brick rear garden patio</td>
                                    <td>$9,000 – $20,000+</td>
                                    <td>DC rowhouse rear garden dimensions; party wall assessment; DC DOB permit for structural elements</td>
                                </tr>
                                <tr>
                                    <td>Natural stone (bluestone) patio</td>
                                    <td>$13,000 – $28,000+</td>
                                    <td>Premium upgrade; mortar-set; DC DOB permit for structural elements</td>
                                </tr>
                                <tr>
                                    <td>Courtyard / front garden paving</td>
                                    <td>$8,000 – $20,000+</td>
                                    <td>Brick or natural stone; HPRB guidance for historic district properties</td>
                                </tr>
                                <tr>
                                    <td>Retaining wall / garden steps</td>
                                    <td>$6,000 – $22,000+</td>
                                    <td>Natural stone or brick; DC DOB permit required; HPRB for visible walls in historic districts</td>
                                </tr>
                                <tr>
                                    <td>Rear parking pad (alley access)</td>
                                    <td>$7,000 – $18,000+</td>
                                    <td>Permeable or standard pavers; DC DOB permit for alley connection</td>
                                </tr>
                                <tr>
                                    <td>Outdoor kitchen (DC rear garden)</td>
                                    <td>$12,000 – $35,000+</td>
                                    <td>Compact scale for DC dimensions; brick/stone surround; gas + electrical in-house; DC DOB permit</td>
                                </tr>
                                <tr>
                                    <td>Rooftop terrace</td>
                                    <td>$20,000 – $55,000+</td>
                                    <td>DC DOB structural permit; weight load and waterproofing assessment; HPRB for street-visible additions</td>
                                </tr>
                                <tr>
                                    <td>Complete rear garden hardscape</td>
                                    <td>$25,000 – $65,000+</td>
                                    <td>Patio + retaining walls + steps + grill station; all trades in-house; DC DOB permits managed</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p style={{ fontSize: "13px", color: "#555", marginTop: "-20px" }}>* All prices confirmed at free on-site estimate. DLCP license #410526000209 verified. DC DOB permit requirements confirmed before any scope is priced.</p>

                {/* SERVICE AREA */}
                <h2>Serving All Washington DC Neighborhoods for Hardscaping</h2>
                <div className="areas-grid">
                    {neighborhoods.map(neighborhood => (
                        <span className="area-pill" key={neighborhood}>{neighborhood}</span>
                    ))}
                </div>

                <div className="banner">
                    <strong>DC License Reminder:</strong> Maryland MHIC license does not authorize hardscaping work in Washington DC. DC DLCP license #410526000209 is required for all DC contractor work. DMV General Contracting Group holds both — MHIC #156178 for Maryland and DLCP #410526000209 for DC. When scheduling any hardscaping contractor for DC work, confirm their DLCP license number and verify it with DC DLCP before any work begins or any contract is signed.
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Hardscaping in Washington DC</h2>
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
                        <li><Link href="/service/patios/washington-dc">Patio Installation in Washington DC</Link></li>
                        <li><Link href="/service/decks/washington-dc">Deck Building in Washington DC</Link></li>
                        <li><Link href="/service/home-additions/washington-dc">Home Additions in Washington DC</Link></li>
                        <li><Link href="/service/roofing/washington-dc">Roofing Services in Washington DC</Link></li>
                        <li><Link href="/service/design-build/washington-dc">Design-Build Contractor in Washington DC</Link></li>
                        <li><Link href="/service/kitchen-remodeling/washington-dc">Kitchen Remodeling in Washington DC</Link></li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="cta-banner">
                    <h2>Need Hardscaping Services in Washington DC?</h2>
                    <p>Talk with DMV General Contracting Group about rear garden patios, courtyard paving, retaining walls, outdoor kitchens, parking pads, or rooftop terraces for your DC property. DLCP licensed #410526000209. DC DOB permits at 1100 4th Street SW. HPRB guidance for historic districts. Free consultation, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default HardscapingWashingtonDC;