import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../hardscaping-city-style.scss";
import "./style.scss";

const HardscapingRockvilleMD = () => {
    const faqData = [
        {
            question: "Where are hardscaping permits filed in Rockville, MD?",
            answer: "Most established Rockville neighborhoods — Twinbrook, West End, Lincoln Park, and most King Farm properties — file structural hardscaping permits with the City of Rockville at 111 Maryland Avenue, Rockville, MD 20850. Properties outside city limits file with MoCo DPS at 2425 Reedie Drive, Wheaton. The correct office is confirmed by parcel — not by mailing address or zip code. DMV General Contracting Group confirms the correct jurisdiction at every Rockville consultation before any permit is prepared."
        },
        {
            question: "Does my King Farm hardscaping project need HOA approval?",
            answer: "Yes — in most cases. King Farm's HOA Architectural Review Committee requires ARC approval for exterior modifications including patio additions, retaining walls, driveway changes, and outdoor kitchens. Material colors and structural specifications must align with HOA approved specifications before any permit is filed or material is ordered. DMV General Contracting Group confirms King Farm HOA requirements, prepares ARC documentation, and coordinates the ARC and City of Rockville permit processes concurrently."
        },
        {
            question: "What is the best hardscaping material for a Twinbrook 1960s colonial?",
            answer: "Concrete pavers in earth-tone, clean-lined profiles are the most practical and popular choice for Twinbrook's mid-century colonials — durable, repairable, and a natural complement to 1960s colonial architecture. Uniform-cut bluestone is a step up in quality for homeowners seeking a more refined appearance. There is no HOA in Twinbrook — full material freedom applies. Large-format modern porcelain and stamped concrete in contemporary patterns generally do not suit Twinbrook's mid-century colonial profile."
        },
        {
            question: "My Rockville property is in Fallsgrove — which permit office applies?",
            answer: "It depends on your specific parcel — some Fallsgrove properties are within the City of Rockville and file at 111 Maryland Avenue; others are outside city limits and file with MoCo DPS at 2425 Reedie Drive, Wheaton. The correct office cannot be determined by the Fallsgrove community name alone. DMV General Contracting Group confirms the correct permit jurisdiction for your specific Fallsgrove parcel at the free consultation."
        },
        {
            question: "How much does hardscaping cost in Rockville, MD?",
            answer: "Twinbrook and West End patio projects typically run $8,000–$18,000+ for pavers or bluestone. King Farm and Congressional patios run $14,000–$35,000+ for natural stone or HOA-approved pavers. A retaining wall runs $5,000–$20,000+. A driveway repaving runs $7,500–$25,000+ depending on community and HOA specifications. A complete outdoor living area runs $35,000–$75,000+. DMV General Contracting Group provides a free, itemized estimate after reviewing the site and confirming the permit jurisdiction and HOA requirements."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Free Consultation & Jurisdiction Confirmation",
            desc: "We visit your Rockville property, assess the outdoor space — grade, drainage, existing landscape, architectural character — and confirm the correct permit jurisdiction for your specific parcel. King Farm and Congressional HOA requirements also confirmed at this stage. HOA approved materials noted. Free, no obligation."
        },
        {
            num: 2,
            title: "Design & HOA-Compatible Materials",
            desc: "Hardscape layout and materials selected for your community's architectural character and HOA specifications. King Farm and Congressional HOA approved materials and colors confirmed before any design is presented. Twinbrook and West End designs reflect mid-century colonial character with full material freedom."
        },
        {
            num: 3,
            title: "HOA Submission & Permit Filing",
            desc: "For King Farm and Congressional: ARC documentation prepared and submitted; City of Rockville permit prepared concurrently. For Twinbrook and West End: City of Rockville permit filed directly at 111 Maryland Avenue. For unincorporated parcels: MoCo DPS permit filed at 2425 Reedie Drive. All correspondence managed in-house."
        },
        {
            num: 4,
            title: "Excavation, Grading & Base Preparation",
            desc: "Existing surface removed, grade adjusted where required, and appropriate base installed for each hardscape element. Drainage infrastructure installed before surface material is placed. Retaining wall footings prepared per the structural design. Slope management planned and executed before paving begins."
        },
        {
            num: 5,
            title: "Hardscape Installation",
            desc: "HOA-approved pavers or natural stone installed on the prepared base. Retaining walls built per specifications. Outdoor kitchen installed where included. Gas and electrical rough-in completed by licensed in-house trades. Landscape lighting wired before patio surface is completed where included in scope."
        },
        {
            num: 6,
            title: "Inspection, Cleanup & Completion",
            desc: "All required City of Rockville or MoCo DPS inspections scheduled and managed at the confirmed correct office. Work area cleaned. Drainage tested. Final walkthrough. Warranty documentation provided at project close."
        }
    ];

    return (
        <div className="city-service-detail-page hardscaping-rockville-md hardscaping-page">
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
                                    "description": "Professional hardscaping contractor serving Rockville, MD. Dual permit jurisdiction — City of Rockville at 111 Maryland Avenue for Twinbrook and most King Farm properties; MoCo DPS for properties outside city limits. King Farm and Congressional HOA coordination. Custom patios, walkways, retaining walls, driveways and outdoor kitchens. MHIC #156178.",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11810 Grand Park Ave. Suite 500",
                                        "addressLocality": "North Bethesda",
                                        "addressRegion": "MD",
                                        "postalCode": "20852",
                                        "addressCountry": "US"
                                    },
                                    "areaServed": { "@type": "City", "name": "Rockville" }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Hardscaping Services in Rockville, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Rockville" },
                                    "serviceType": "Hardscaping, Patio, Walkways, Retaining Walls, Driveway Paving, Outdoor Kitchen, Outdoor Living"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Hardscaping", "item": "https://www.dmv-gc.com/service/hardscaping" },
                                        { "@type": "ListItem", "position": 4, "name": "Rockville, MD", "item": "https://www.dmv-gc.com/service/hardscaping/rockville-md" }
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
                    Rockville, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">⚡ Hardscaping Contractor • Rockville, MD — Twinbrook to King Farm</div>
                    <h1>Hardscaping Services in Rockville, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">⚖️ Dual Permit — City of Rockville & MoCo DPS</span>
                        <span className="badge">🏘️ King Farm HOA Coordination</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MD MHIC #156178</span>
                        <span className="badge">✓ Licensed & Insured</span>
                        <span className="badge">✓ Free Consultation</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional hardscaping design and installation for all Rockville communities — Twinbrook, West End, King Farm, Congressional, Fallsgrove, and established Rockville neighborhoods. Dual permit jurisdiction expertise: City of Rockville at 111 Maryland Avenue for most city properties; MoCo DPS for parcels outside city limits. King Farm and Congressional HOA coordination included. Two housing eras — one experienced hardscape team.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Rockville Hardscaping Expertise:</strong> Rockville&apos;s two distinct housing eras — Twinbrook and West End&apos;s 1950s–1960s mid-century colonials and King Farm and Congressional&apos;s 1999–2015 planned community homes — each call for different hardscaping approaches in terms of scale, materials, and HOA requirements. And Rockville has two separate permit jurisdictions: most established city neighborhoods file with the City of Rockville at 111 Maryland Avenue, while some properties outside city limits file with MoCo DPS. DMV General Contracting Group confirms the correct permit authority for every Rockville address at the free consultation, coordinates King Farm and Congressional HOA approvals concurrently, and designs hardscaping appropriate to each community&apos;s architectural character and scale.
                </div>

                {/* PERMIT JURISDICTIONS */}
                <h2>Rockville&apos;s Two Permit Jurisdictions — Confirmed by Parcel Before Any Work Begins</h2>

                <div className="juris-grid">
                    <div className="juris-card">
                        <h3>🏛️ City of Rockville — 111 Maryland Avenue</h3>
                        <ul>
                            <li><strong>Communities covered:</strong> Twinbrook, West End, Lincoln Park, most established Rockville city neighborhoods, most King Farm parcels</li>
                            <li>All structural hardscaping permits — retaining walls over 30&apos;&apos;, outdoor kitchens with gas or electrical, driveway road connections — filed with City of Rockville at 111 Maryland Avenue, Rockville, MD 20850</li>
                            <li>City of Rockville conducts its own inspections — separate from MoCo inspectors</li>
                            <li><strong>Filing at MoCo DPS for a City property = no permit issued</strong></li>
                            <li>King Farm HOA ARC approval also required for most exterior modifications — coordinated concurrently with City permit</li>
                        </ul>
                    </div>
                    <div className="juris-card">
                        <h3>🏛️ Montgomery County DPS — 2425 Reedie Drive, Wheaton</h3>
                        <ul>
                            <li><strong>Communities covered:</strong> Properties with Rockville mailing addresses outside city limits — some Fallsgrove, Rockshire, and King Farm edge parcels</li>
                            <li>All structural hardscaping permits filed with MoCo DPS at 2425 Reedie Drive, Wheaton, MD 20902</li>
                            <li>MoCo DPS inspectors cover these properties — separate from City of Rockville</li>
                            <li><strong>Filing at City of Rockville for an unincorporated property = no permit issued</strong></li>
                            <li>HOA requirements vary by community — confirmed at consultation</li>
                        </ul>
                    </div>
                </div>

                <div className="banner">
                    <strong>Parcel confirmation is essential — not neighborhood name:</strong> Most King Farm properties are within the City of Rockville and file at 111 Maryland Avenue — but some edge parcels fall outside city limits and file with MoCo DPS. Your mailing address and zip code do not determine which office applies. DMV General Contracting Group confirms the correct permit jurisdiction by parcel number at every Rockville hardscaping consultation.
                </div>

                {/* SERVICES */}
                <h2>Complete Hardscaping Services for Rockville Homes</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>🪨 Patio Installation</h3><p>Concrete pavers and natural bluestone for Twinbrook and West End mid-century colonials; natural stone, contemporary pavers, and porcelain for King Farm and Congressional&apos;s newer profiles. King Farm HOA approved colors confirmed before any material is ordered. City of Rockville or MoCo DPS permit confirmed by parcel before any structural patio element is included in the scope.</p></div>
                    <div className="svc-card"><h3>🚶 Walkways & Entry Paths</h3><p>Natural stone and paver walkways for all Rockville communities — front entry walks complementing each home&apos;s facade, rear walkways connecting patio to garage or side yard. King Farm HOA specifications confirmed for street-visible walks. Grade changes along walkway routes managed with flush steps where needed. City of Rockville or MoCo DPS permit confirmed by parcel.</p></div>
                    <div className="svc-card"><h3>🧱 Retaining Walls</h3><p>Retaining walls managing grade changes on Rockville residential lots — segmental block for practical cost-effective walls, natural stone for visible high-quality applications. King Farm HOA approved wall materials confirmed before design is finalized. City of Rockville or MoCo DPS permit over 30 inches confirmed by parcel. Engineering review for walls over 4 feet.</p></div>
                    <div className="svc-card"><h3>🚗 Driveway Paving & Repair</h3><p>Old Twinbrook and West End asphalt driveways replaced with concrete pavers or permeable systems. King Farm driveway material and color changes require HOA ARC approval before City of Rockville permit is filed. Concrete pavers preferred for long-term repairability — individual units replaceable if damaged, surface liftable to access utilities.</p></div>
                    <div className="svc-card"><h3>🍳 Outdoor Kitchen & Grill Station</h3><p>Outdoor kitchens for all Rockville communities — scaled to each lot and community&apos;s character. King Farm HOA approved countertop materials and enclosure specifications confirmed before scope is finalized. Gas line extension and electrical work managed by our licensed in-house trades team. City of Rockville or MoCo DPS permit confirmed by parcel before gas or electrical scope begins.</p></div>
                    <div className="svc-card"><h3>💧 Drainage & Slope Management</h3><p>Surface drainage planning for Rockville&apos;s varied topography — proper slope, French drains, and channel drains directing water away from home foundations and off hardscape surfaces. Old Twinbrook lots may have compacted soils and drainage challenges from decades of established landscape — addressed in the hardscape design from the start.</p></div>
                    <div className="svc-card"><h3>💡 Landscape Lighting</h3><p>Low-voltage path lighting, step lighting on retaining walls, and accent lighting for outdoor kitchen and patio areas across all Rockville communities. Wiring routed before patio surface is installed so lighting is integrated into the overall hardscape composition rather than surface-mounted as an afterthought.</p></div>
                    <div className="svc-card"><h3>🏘️ King Farm HOA Coordination</h3><p>ARC documentation prepared, submitted, and tracked. King Farm and Congressional HOA approved materials, colors, and structural specifications confirmed before any design is finalized. HOA and City of Rockville permit processes coordinated concurrently — homeowners do not manage the ARC process independently at any stage.</p></div>
                </div>

                {/* COMMUNITY TABLE */}
                <h2>Hardscaping by Rockville Community</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Community</th>
                                    <th>Typical Hardscape Scope</th>
                                    <th>Permit & HOA Considerations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Twinbrook</strong></td>
                                    <td>Concrete paver or bluestone patio, front entry walk, old asphalt driveway replacement, simple retaining wall where grade requires</td>
                                    <td>City of Rockville permit at 111 Maryland Avenue. No HOA — full material freedom. Mid-century colonial rear yards well suited to clean-lined paver patio + pergola combination. Old 1960s asphalt driveway replacement is the most common Twinbrook hardscape project DMV-GC handles.</td>
                                </tr>
                                <tr>
                                    <td><strong>West End</strong></td>
                                    <td>Natural stone or paver patio, outdoor kitchen, retaining wall, upgraded front entry walk</td>
                                    <td>City of Rockville permit. No HOA. West End homeowners renovating and upgrading frequently invest in complete outdoor living spaces — patio, outdoor kitchen, and landscape lighting as a coordinated scope alongside interior renovation.</td>
                                </tr>
                                <tr>
                                    <td><strong>King Farm</strong></td>
                                    <td>Natural stone or HOA-approved paver patio, outdoor kitchen, pergola, retaining wall where grade requires, upgraded driveway</td>
                                    <td>City of Rockville permit (most parcels — confirm by parcel). King Farm HOA ARC approval required — material colors and structural specifications confirmed before permit is filed or material is ordered. DMV-GC prepares ARC documentation and submits concurrently with City permit.</td>
                                </tr>
                                <tr>
                                    <td><strong>Congressional</strong></td>
                                    <td>Rear patio with outdoor kitchen, pergola, landscaping integration, retaining wall</td>
                                    <td>City of Rockville permit (confirm by parcel). Congressional HOA ARC requirements confirmed before scope. Newer homes support contemporary patio designs and larger outdoor living investments. HOA approved materials confirmed before any design is finalized.</td>
                                </tr>
                                <tr>
                                    <td><strong>Fallsgrove / Rockshire</strong></td>
                                    <td>Patio, walkway, retaining wall, driveway upgrade</td>
                                    <td>Permit jurisdiction confirmed by parcel — some properties file with City of Rockville, others with MoCo DPS. HOA requirements confirmed by community. Do not assume based on neighborhood name alone.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* HOA */}
                <h2>King Farm HOA — Hardscaping Approval Process</h2>
                <div className="banner">
                    <strong>King Farm HOA ARC — Material Colors and Specifications Must Be Confirmed Before Any Permit Is Filed:</strong> King Farm&apos;s Architectural Review Committee governs exterior modifications including patio additions, retaining walls, driveway changes, and outdoor kitchen structures. HOA approved material colors — particularly for paving surfaces and wall materials — must be confirmed against the community&apos;s current specifications before any material is ordered and before any City of Rockville permit application is submitted. Installing a hardscape in a non-approved color — even if the design and construction are otherwise code-compliant — may result in an HOA violation notice requiring correction. DMV General Contracting Group confirms King Farm HOA requirements at the consultation, prepares material specification documentation for your ARC submission, and coordinates the ARC and City of Rockville permit processes concurrently to minimize project timeline impact.
                </div>

                {/* MATERIALS */}
                <h2>Hardscaping Materials for Rockville&apos;s Two Housing Eras</h2>
                <p>Twinbrook and West End&apos;s mid-century colonials and King Farm and Congressional&apos;s newer planned community homes call for different hardscaping material approaches — both in terms of architectural compatibility and HOA constraints. DMV General Contracting Group discusses materials with the community&apos;s specific character as the starting framework.</p>
                <div className="materials-grid">
                    <div className="material-card"><h3>🧱 Concrete Pavers — Both Eras</h3><p>Most versatile choice across all Rockville communities. Earth-tone tumbled profiles for Twinbrook and West End; cleaner contemporary profiles for King Farm and Congressional. King Farm HOA approved colors confirmed before ordering. Durable, repairable, and excellent value — the most practical choice for Rockville&apos;s range of residential lot sizes and budgets.</p></div>
                    <div className="material-card"><h3>🪨 Bluestone — Both Eras</h3><p>Uniform-cut bluestone for King Farm and Congressional contemporary profiles; irregular bluestone for Twinbrook and West End&apos;s more informal settings. Cool gray tone works across Rockville&apos;s range of architectural styles. Most popular upgrade from concrete pavers for Rockville homeowners investing in outdoor quality. King Farm HOA confirmed for color compatibility.</p></div>
                    <div className="material-card"><h3>🪨 Travertine — King Farm & Congressional</h3><p>Warm cream and tan tones — well suited to King Farm and Congressional&apos;s contemporary colonial and transitional profiles. King Farm HOA approved colors confirmed before material selection. Less appropriate for Twinbrook and West End&apos;s mid-century profiles where warmer tones may conflict with 1960s colonial character.</p></div>
                    <div className="material-card"><h3>🧱 Large-Format Porcelain — Newer Homes</h3><p>Contemporary choice for King Farm and Congressional — non-porous, stain-resistant, stone-look profiles at large format. King Farm HOA approved profiles confirmed before selection. Frost-rated for Maryland outdoor use. Not recommended for Twinbrook and West End where mid-century colonial profiles are not well served by large contemporary slabs.</p></div>
                    <div className="material-card"><h3>🧱 Segmental Retaining Block</h3><p>Most cost-effective retaining wall option for Rockville&apos;s sloped lots — available in earth-tone finishes and structurally engineered for height. Natural stone veneer available for visible wall surfaces. King Farm HOA approved wall materials and colors confirmed. City of Rockville or MoCo DPS permit over 30 inches — confirmed by parcel.</p></div>
                    <div className="material-card"><h3>🏗️ Stamped Concrete</h3><p>Cost-effective for larger Twinbrook and West End patio areas where pavers or natural stone are cost-prohibitive at scale. No HOA restrictions in these communities. Cobblestone and slate patterns in earth tones. Not recommended for King Farm or Congressional where HOA material specifications apply and stamped concrete may not meet ARC color or texture standards.</p></div>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for Hardscaping in Rockville?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">⚖️</div>
                        <strong>Dual Permit Expertise</strong>
                        <span>City 111 Maryland Ave vs MoCo DPS</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🏘️</div>
                        <strong>King Farm HOA</strong>
                        <span>ARC coordination in-house</span>
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
                    <div className="svc-card"><h3>Dual Jurisdiction Permit Expertise</h3><p>City of Rockville at 111 Maryland Avenue for most city properties; MoCo DPS for parcels outside city limits. Correct office confirmed by parcel at the free consultation — never assumed by neighborhood name or zip code. Filing at the wrong office means no permit is issued and no inspection can be scheduled.</p></div>
                    <div className="svc-card"><h3>King Farm & Congressional HOA Management</h3><p>ARC documentation prepared and submitted. Material colors and specifications confirmed against HOA approved specifications before any material is ordered. HOA and City of Rockville permit processes coordinated concurrently. Homeowners do not manage the ARC process at any stage — DMV-GC handles it as part of the project scope.</p></div>
                    <div className="svc-card"><h3>Both Housing Eras Understood</h3><p>Twinbrook and West End&apos;s mid-century colonials and King Farm and Congressional&apos;s newer planned community homes have different hardscape needs, material preferences, and HOA constraints. DMV General Contracting Group brings the right approach to each community rather than applying a one-size-fits-all solution across Rockville&apos;s full housing range.</p></div>
                    <div className="svc-card"><h3>All Trades In-House</h3><p>Gas line extensions, electrical connections, drainage, retaining wall construction, and hardscape installation all coordinated under one design-build workflow — no separate subcontractors on different schedules managing pieces of your Rockville outdoor project.</p></div>
                </div>

                {/* PROCESS */}
                <h2>Our Hardscaping Process in Rockville</h2>
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
                <h2>Hardscaping Project Costs — Rockville, MD</h2>
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
                                    <td>Twinbrook / West End paver patio</td>
                                    <td>$8,000 – $18,000+</td>
                                    <td>Earth-tone pavers; mid-century colonial rear yard; City of Rockville permit; no HOA</td>
                                </tr>
                                <tr>
                                    <td>King Farm natural stone patio</td>
                                    <td>$14,000 – $35,000+</td>
                                    <td>HOA approved materials; bluestone or travertine; City of Rockville permit; ARC coordinated</td>
                                </tr>
                                <tr>
                                    <td>Natural stone walkway</td>
                                    <td>$4,000 – $9,500+</td>
                                    <td>All communities; HOA confirmed for King Farm street-visible walks</td>
                                </tr>
                                <tr>
                                    <td>Retaining wall</td>
                                    <td>$5,000 – $20,000+</td>
                                    <td>City of Rockville or MoCo DPS permit over 30&apos;&apos;; HOA approved materials for King Farm; engineering over 4ft</td>
                                </tr>
                                <tr>
                                    <td>Driveway repaving — Twinbrook asphalt</td>
                                    <td>$7,500 – $20,000+</td>
                                    <td>Old 1960s asphalt replaced with concrete pavers; City of Rockville permit for road connection</td>
                                </tr>
                                <tr>
                                    <td>King Farm driveway upgrade</td>
                                    <td>$10,000 – $25,000+</td>
                                    <td>HOA approved material and color confirmed before ordering; City of Rockville permit</td>
                                </tr>
                                <tr>
                                    <td>Outdoor kitchen</td>
                                    <td>$12,000 – $38,000+</td>
                                    <td>HOA approved materials for King Farm; gas + electrical in-house; permit confirmed by parcel</td>
                                </tr>
                                <tr>
                                    <td>Complete outdoor living area</td>
                                    <td>$35,000 – $75,000+</td>
                                    <td>All trades in-house; dual jurisdiction permit managed; HOA coordination throughout</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p style={{ fontSize: "13px", color: "#555", marginTop: "-20px" }}>* All prices confirmed at free on-site estimate. Permit jurisdiction and HOA requirements confirmed before any material is priced or ordered.</p>

                {/* SERVICE AREA */}
                <h2>Hardscaping Service Area</h2>
                <p>DMV General Contracting Group provides hardscaping services throughout <strong>Rockville, MD</strong> — including Twinbrook, West End, Lincoln Park, King Farm, Congressional, Fallsgrove, Rockshire, Horizon Hill, and surrounding communities including North Bethesda, Gaithersburg, Kensington, Wheaton, and Bethesda.</p>

                <div className="banner">
                    <strong>Rockville Permit Summary:</strong> City of Rockville at 111 Maryland Avenue covers Twinbrook, West End, and most King Farm parcels. MoCo DPS at 2425 Reedie Drive covers parcels outside city limits. Your mailing address does not determine which office applies — parcel location does. DMV General Contracting Group confirms the correct jurisdiction at every Rockville hardscaping consultation before any permit is prepared or any material is ordered.
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Hardscaping in Rockville, MD</h2>
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
                    <h2>Explore Our Other Services in Rockville, MD</h2>
                    <ul>
                        <li><Link href="/service/patios/rockville-md">Patio Installation in Rockville, MD</Link></li>
                        <li><Link href="/service/fence-installation/rockville-md">Fence Installation in Rockville, MD</Link></li>
                        <li><Link href="/service/decks/rockville-md">Deck Building in Rockville, MD</Link></li>
                        <li><Link href="/service/home-additions/rockville-md">Home Additions in Rockville, MD</Link></li>
                        <li><Link href="/service/design-build/rockville-md">Design-Build Contractor in Rockville, MD</Link></li>
                        <li><Link href="/service/roofing/rockville-md">Roofing Services in Rockville, MD</Link></li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="cta-banner">
                    <h2>Need Hardscaping Services in Rockville, MD?</h2>
                    <p>Talk with DMV General Contracting Group about hardscaping for your Rockville community — permit jurisdiction confirmed by parcel, King Farm HOA coordination, community-appropriate materials for every project. Free consultation, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default HardscapingRockvilleMD;