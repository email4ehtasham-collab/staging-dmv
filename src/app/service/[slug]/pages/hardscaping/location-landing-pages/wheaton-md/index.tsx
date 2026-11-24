import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../hardscaping-city-style.scss";
import "./style.scss";

const HardscapingWheatonMD = () => {
    const faqData = [
        {
            question: "Where are hardscaping permits filed in Wheaton, MD?",
            answer: "With Montgomery County DPS at 2425 Reedie Drive, Wheaton, MD 20902 — the MoCo permit office is physically located in Wheaton. Retaining walls over 30 inches, outdoor kitchens with gas or electrical, and driveway work at public road connections require MoCo DPS permits. Simple ground-level patios and walkways typically do not require a permit. DMV General Contracting Group files all Wheaton hardscaping permits at 2425 Reedie Drive and manages all county correspondence in-house."
        },
        {
            question: "Is hardscaping a good investment in Wheaton, MD?",
            answer: "Yes — Wheaton is one of Montgomery County's strongest ROI communities for home improvement. A well-designed patio, walkway system, or outdoor kitchen in Wheaton adds functional outdoor square footage and measurable property value at a cost-to-value ratio that is strong relative to comparable improvements in higher-priced MoCo communities. DMV General Contracting Group discusses the return profile of different hardscape scopes at the free consultation."
        },
        {
            question: "What is the most popular hardscaping scope for Wheaton homeowners?",
            answer: "A concrete paver patio with a wood or aluminum pergola is the most requested hardscape combination for Wheaton's colonial and split-level stock — creating a complete outdoor room with shade at a project cost that delivers strong ROI in Wheaton's active real estate market. A gas fire pit is the most common add-on to this combination. DMV General Contracting Group can scope the patio, pergola, and fire pit as a single coordinated project."
        },
        {
            question: "My Wheaton home is a split-level — how does that affect my patio or retaining wall options?",
            answer: "Split-level grade transitions are common in Wheaton — the main living level exits 3 to 6 feet above the rear yard on many of Wheaton's 1960s–1970s homes. DMV General Contracting Group measures the grade difference at your property during the free consultation and presents layout options: upper terrace, lower patio with steps, multi-level patio, or deck + hardscape combination. All options are priced at the estimate before any scope is agreed."
        },
        {
            question: "How much does hardscaping cost in Wheaton, MD?",
            answer: "A concrete paver patio starts at $7,000–$16,000+. A patio + pergola combination runs $16,000–$35,000+. A retaining wall runs $5,000–$18,000+. A driveway repaving runs $6,500–$18,000+. A full outdoor kitchen + patio runs $18,000–$45,000+. All prices confirmed at the free on-site estimate — no surprise charges at completion. Split-level grade transitions may increase patio costs depending on the elevation difference and chosen layout."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Free Consultation & Grade Assessment",
            desc: "We visit your Wheaton property, assess the outdoor space — grade changes, split-level elevation difference measured, drainage conditions, existing features — and discuss your hardscaping vision and budget. ROI-focused scoping discussion included. MoCo DPS permit requirements noted for your scope. Free, no obligation."
        },
        {
            num: 2,
            title: "Design, Layout & Material Selection",
            desc: "Hardscape layout designed for your Wheaton lot — split-level grade addressed, retaining walls and steps designed as integrated elements, patio and outdoor kitchen positioned for functional use and visual appeal. Material selected for Wheaton's mid-century architectural character and the homeowner's budget and ROI priorities."
        },
        {
            num: 3,
            title: "MoCo DPS Permit Filed at 2425 Reedie Drive",
            desc: "All required MoCo DPS hardscaping permits prepared and filed at 2425 Reedie Drive, Wheaton — the permit office is local, and our team files there regularly. Retaining walls, outdoor kitchen gas and electrical, and driveway road connections all permitted before installation begins. All county correspondence managed in-house."
        },
        {
            num: 4,
            title: "Excavation, Grading & Base Preparation",
            desc: "Existing surface removed, grade adjusted per the drainage and terrace plan, retaining wall footings prepared, and appropriate base installed for each hardscape element. French drains and channel drains installed before surface material is placed. Split-level step foundations prepared."
        },
        {
            num: 5,
            title: "Hardscape Installation",
            desc: "Pavers or natural stone installed on the prepared base. Retaining walls built. Steps constructed as integrated hardscape elements. Outdoor kitchen installed where included. Gas and electrical rough-in completed by licensed in-house trades. Landscape lighting wired before patio surface is completed."
        },
        {
            num: 6,
            title: "Inspection, Cleanup & Completion",
            desc: "All required MoCo DPS inspections scheduled and managed at 2425 Reedie Drive, Wheaton. Work area cleaned. Drainage tested. Final walkthrough with you. Project documentation and warranty provided at project close."
        }
    ];

    return (
        <div className="city-service-detail-page hardscaping-wheaton-md hardscaping-page">
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
                                    "description": "Professional hardscaping contractor serving Wheaton, MD. Patios, walkways, retaining walls, driveways and outdoor kitchens for Wheaton's colonials and split-levels. MoCo DPS permit office is located in Wheaton at 2425 Reedie Drive. ROI-focused design for Wheaton's strong home improvement market. MHIC #156178.",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11810 Grand Park Ave. Suite 500",
                                        "addressLocality": "North Bethesda",
                                        "addressRegion": "MD",
                                        "postalCode": "20852",
                                        "addressCountry": "US"
                                    },
                                    "areaServed": { "@type": "City", "name": "Wheaton" }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Hardscaping Services in Wheaton, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Wheaton" },
                                    "serviceType": "Hardscaping, Patio, Walkways, Retaining Walls, Driveway Paving, Outdoor Kitchen, Outdoor Living"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Hardscaping", "item": "https://www.dmv-gc.com/service/hardscaping" },
                                        { "@type": "ListItem", "position": 4, "name": "Wheaton, MD", "item": "https://www.dmv-gc.com/service/hardscaping/wheaton-md" }
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
                    Wheaton, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">⚡ Hardscaping Contractor • Wheaton, MD — MoCo DPS Right Here</div>
                    <h1>Hardscaping Services in Wheaton, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">📋 MoCo DPS — 2425 Reedie Drive, Wheaton</span>
                        <span className="badge">💰 ROI-Focused Design</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MD MHIC #156178</span>
                        <span className="badge">✓ Licensed & Insured</span>
                        <span className="badge">✓ Free Consultation</span>
                    </div>
                </div>

                <div className="intro-box">
                    Professional hardscaping design and installation for Wheaton homeowners — patios, natural stone walkways, retaining walls, driveway paving, and outdoor kitchens for Wheaton&apos;s 1950s–1970s colonials, split-levels, and cape cods. MoCo DPS permit office is right here in Wheaton at 2425 Reedie Drive. ROI-focused design for Wheaton&apos;s strong home improvement market.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Wheaton Hardscaping Expertise:</strong> Wheaton is unincorporated Montgomery County, and the MoCo DPS permit office is physically located here at 2425 Reedie Drive — our team files Wheaton hardscaping permits at this office regularly. Wheaton&apos;s 1950s–1970s colonials, split-levels, and cape cods have rear yards well suited to functional outdoor living upgrades — patios, walkways, retaining walls, and outdoor kitchens that extend usable square footage into the backyard. And Wheaton&apos;s reputation as one of MoCo&apos;s strongest ROI communities for home improvement means a well-designed hardscape delivers real value — both in daily quality of life and in property value at sale. DMV General Contracting Group designs and installs hardscaping for Wheaton homeowners at every budget level, with all permits filed locally at 2425 Reedie Drive.
                </div>

                {/* SERVICES */}
                <h2>Complete Hardscaping Services for Wheaton Homes</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>🪨 Patio Installation</h3><p>Concrete pavers, natural bluestone, and flagstone patios for Wheaton&apos;s mid-century colonial and split-level rear yards. Clean-lined paver systems for colonial profiles; informal flagstone for more garden-oriented settings. Split-level grade transitions assessed and addressed in every Wheaton patio design. MoCo DPS permit for structural patio additions filed right here in Wheaton.</p></div>
                    <div className="svc-card"><h3>📐 Split-Level Grade Solutions</h3><p>Multi-level patio designs, connecting stone steps, and retaining elements that address Wheaton&apos;s split-level grade transitions — connecting the home&apos;s walkout level to the rear yard below. Grade difference measured at the free consultation. Multiple layout options presented before any scope is agreed. The most common Wheaton hardscape design challenge and our most requested scope in this community.</p></div>
                    <div className="svc-card"><h3>🚶 Walkways & Entry Paths</h3><p>Natural stone and paver walkways for Wheaton&apos;s colonials and cape cods — front entry walks in concrete pavers or bluestone complementing the home&apos;s facade, rear walkways connecting patio to garage or side yard, and garden paths through established plantings. Grade changes along walkway routes managed with flush steps where needed.</p></div>
                    <div className="svc-card"><h3>🧱 Retaining Walls</h3><p>Retaining walls managing Wheaton&apos;s sloped residential lots — creating level outdoor areas where the natural grade would otherwise limit usable space. Segmental block for practical, cost-effective walls; natural stone veneer for visible wall surfaces where appearance is a priority. MoCo DPS permit at 2425 Reedie Drive for walls over 30 inches. Engineering review for walls over 4 feet.</p></div>
                    <div className="svc-card"><h3>🚗 Driveway Repaving</h3><p>Old cracked asphalt driveways from the 1960s–1970s replaced with concrete pavers, new asphalt, or permeable paver systems. Concrete pavers are the preferred upgrade for Wheaton homeowners investing in long-term durability — individual units replaceable, surface liftable to access utilities. MoCo DPS permit for public road connection work filed at 2425 Reedie Drive.</p></div>
                    <div className="svc-card"><h3>🍳 Outdoor Kitchen & Grill Station</h3><p>Built-in grill stations and outdoor kitchen installations for Wheaton homeowners — sized appropriately to the mid-century lot and patio area. Gas line extension and electrical connections managed in-house by our licensed trades team. MoCo DPS permit required for gas and electrical connections — filed at 2425 Reedie Drive, a short distance from most Wheaton properties.</p></div>
                    <div className="svc-card"><h3>💧 Drainage & Slope Management</h3><p>Surface drainage planning for Wheaton&apos;s sloped and split-level lots — proper slope, French drains, and channel drains directing water away from the home&apos;s foundation and off hardscape surfaces. Drainage designed as part of every Wheaton hardscape scope from the design stage, not added after pooling problems appear.</p></div>
                    <div className="svc-card"><h3>💡 Landscape Lighting</h3><p>Low-voltage path lighting along Wheaton walkways, step lighting on retaining walls and grade transition steps, and accent lighting for outdoor kitchen and patio areas. Planned as part of the hardscape design — wiring routed before patio surface is installed so lighting is integrated, not surface-mounted as an afterthought.</p></div>
                </div>

                {/* COMMON PROJECTS TABLE */}
                <h2>Common Hardscaping Projects in Wheaton</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Project Type</th>
                                    <th>Wheaton-Specific Considerations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Patio + pergola combination</strong></td>
                                    <td>The most popular Wheaton hardscape investment — a concrete paver patio with a wood or aluminum pergola delivers defined outdoor space, shade, and a complete outdoor room at a project cost that provides strong ROI in Wheaton&apos;s active real estate market. Gas fire pit often added as a third element in the same coordinated scope.</td>
                                </tr>
                                <tr>
                                    <td><strong>Split-level grade transition patio</strong></td>
                                    <td>Grade difference between walkout door and rear yard measured at consultation. Layout options presented: upper terrace, lower patio with steps, multi-level, or deck + hardscape combination. Retaining elements and steps designed as integrated hardscape features. MoCo DPS permit for walls over 30 inches — filed right here in Wheaton.</td>
                                </tr>
                                <tr>
                                    <td><strong>Sloped lot terracing</strong></td>
                                    <td>Multi-tier retaining wall system creating level usable areas on Wheaton&apos;s hillier lots in Wheaton Hills and Glenmont. Segmental block for taller practical walls; natural stone veneer for visible upper walls. Engineering for walls over 4 feet. MoCo DPS permit required — Wheaton permit office is at 2425 Reedie Drive.</td>
                                </tr>
                                <tr>
                                    <td><strong>Old asphalt driveway replacement</strong></td>
                                    <td>1960s–1970s asphalt driveways cracked and deteriorated — replaced with concrete pavers for long-term durability and improved appearance. Curb and road connection per MoCo standards. MoCo DPS permit for road connection work. Drainage grading corrected as part of the repaving scope.</td>
                                </tr>
                                <tr>
                                    <td><strong>Front entry walkway</strong></td>
                                    <td>New front entry walk in concrete pavers or bluestone connecting the driveway to the home&apos;s front door. Grade change managed with flush stone steps where needed. No permit typically required for a simple walkway — confirmed at consultation. ROI value: curb appeal improvement at modest cost for Wheaton&apos;s active buyer market.</td>
                                </tr>
                                <tr>
                                    <td><strong>Outdoor kitchen + patio scope</strong></td>
                                    <td>Patio + built-in grill station — one of Wheaton&apos;s most popular combined hardscape scopes. Gas fire pit often included as a third element. Gas line extension requires MoCo DPS permit — filed at 2425 Reedie Drive. Full scope coordinated under one design-build workflow with gas and electrical work by licensed in-house trades.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ROI */}
                <h2>Wheaton&apos;s Home Improvement ROI — Why Hardscaping Delivers Here</h2>
                <div className="banner">
                    <strong>Wheaton is one of Montgomery County&apos;s strongest ROI communities for hardscaping investment:</strong> The community&apos;s proximity to the Wheaton Metro, its ongoing revitalization, and its well-established residential neighborhoods make outdoor living improvements — patios, walkways, retaining walls — strong value-add projects in Wheaton&apos;s active real estate market. A well-designed patio and pergola combination adds functional outdoor square footage to a Wheaton colonial or split-level and delivers measurable property value at a cost-to-value ratio that is strong relative to comparable improvements in higher-priced MoCo communities. DMV General Contracting Group discusses the return profile of different hardscape scopes at the free consultation — helping Wheaton homeowners make investment decisions that make sense for their specific property and timeline.
                </div>

                {/* MATERIALS */}
                <h2>Hardscaping Materials for Wheaton&apos;s Mid-Century Homes</h2>
                <div className="materials-grid">
                    <div className="material-card"><h3>🧱 Concrete Pavers — Most Popular</h3><p>The most practical and popular choice for Wheaton&apos;s mid-century colonials and cape cods — durable, repairable, and available in earth-tone profiles that complement 1950s–1970s architecture. Clean lines suit Wheaton&apos;s traditional profiles. Individual units replaceable if damaged. Best value choice for Wheaton homeowners balancing quality and ROI.</p></div>
                    <div className="material-card"><h3>🪨 Bluestone (Uniform Cut)</h3><p>A step up in quality and character for Wheaton homeowners wanting a more refined patio or walkway appearance. Cool gray tone and clean edges complement traditional colonial and cape cod profiles. Mortar-set for long-term stability through Maryland&apos;s freeze-thaw cycles. Popular among Wheaton homeowners who plan to stay long-term and want premium durability.</p></div>
                    <div className="material-card"><h3>🪨 Irregular Flagstone</h3><p>Natural irregular stone for Wheaton&apos;s more informal, garden-integrated backyard settings. Wide joints with ground cover integrate naturally with established garden beds and mature landscaping. Well suited to Wheaton&apos;s residential lots where an organic, settled character is preferred over a more formal hardscape layout.</p></div>
                    <div className="material-card"><h3>🧱 Segmental Retaining Block</h3><p>Engineered segmental block for retaining walls on Wheaton&apos;s sloped lots — practical, structurally reliable, and available in earth-tone finishes that complement the surrounding landscape. Most cost-effective choice for taller or longer retaining walls. Natural stone veneer available for visible wall surfaces where appearance is a priority.</p></div>
                    <div className="material-card"><h3>🧱 Permeable Pavers</h3><p>Permeable paver systems for Wheaton driveways and larger patio areas — allowing rainwater to pass through the surface into the subgrade, reducing runoff on sloped lots and managing water near the home&apos;s foundation. Increasingly popular for Wheaton driveway replacements where drainage improvement is a secondary goal alongside appearance upgrade.</p></div>
                    <div className="material-card"><h3>🏗️ Stamped Concrete</h3><p>Cost-effective for larger Wheaton patio areas where pavers or natural stone are cost-prohibitive at scale. Cobblestone and slate patterns in earth tones suit Wheaton&apos;s mid-century profiles. Sealed for Maryland&apos;s climate. Less repairable than unit pavers. Most appropriate for rear utility areas rather than front-of-home hardscaping where long-term appearance matters most.</p></div>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for Hardscaping in Wheaton?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>MoCo DPS Right Here</strong>
                        <span>2425 Reedie Drive, Wheaton</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">💰</div>
                        <strong>ROI-Aware Design</strong>
                        <span>Wheaton&apos;s strong value market</span>
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
                    <div className="svc-card"><h3>MoCo DPS Is in Wheaton</h3><p>The permit office that covers Wheaton is at 2425 Reedie Drive, Wheaton — DMV General Contracting Group files Wheaton hardscaping permits there regularly. All county correspondence, inspector scheduling, and permit tracking managed in-house. You do not contact MoCo DPS at any point in the project.</p></div>
                    <div className="svc-card"><h3>ROI-Conscious Scoping</h3><p>In Wheaton&apos;s strong home improvement ROI market, we help homeowners scope projects that deliver real value — not oversized for the property or undersized to the point of underperforming. The patio + pergola combination is frequently our top hardscape recommendation for Wheaton&apos;s colonial and split-level stock.</p></div>
                    <div className="svc-card"><h3>Split-Level & Slope Expertise</h3><p>Split-level grade transitions and sloped lots are the most common hardscape design challenges in Wheaton. DMV General Contracting Group brings specific experience — multiple layout options presented, retaining elements and steps designed as integrated hardscape features, not added as afterthoughts.</p></div>
                    <div className="svc-card"><h3>All Trades In-House</h3><p>Gas line extensions, electrical connections, drainage, retaining wall construction, and hardscape installation all coordinated under one design-build workflow. No separate subcontractors on different schedules managing pieces of your Wheaton outdoor project.</p></div>
                </div>

                {/* PROCESS */}
                <h2>Our Hardscaping Process in Wheaton</h2>
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
                <h2>Hardscaping Project Costs — Wheaton, MD</h2>
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
                                    <td>$7,000 – $16,000+</td>
                                    <td>Mid-century colonial rear yard, earth-tone pavers, drainage included</td>
                                </tr>
                                <tr>
                                    <td>Patio + pergola combination</td>
                                    <td>$16,000 – $35,000+</td>
                                    <td>Most popular Wheaton scope — paver patio with wood or aluminum pergola</td>
                                </tr>
                                <tr>
                                    <td>Bluestone or flagstone patio</td>
                                    <td>$12,000 – $25,000+</td>
                                    <td>Natural stone, mortar or sand set, drainage included</td>
                                </tr>
                                <tr>
                                    <td>Split-level multi-level patio</td>
                                    <td>$14,000 – $30,000+</td>
                                    <td>Grade transition steps and retaining elements; cost varies with elevation difference</td>
                                </tr>
                                <tr>
                                    <td>Natural stone walkway</td>
                                    <td>$4,000 – $8,500+</td>
                                    <td>Front entry or rear yard; flush steps where grade changes along route</td>
                                </tr>
                                <tr>
                                    <td>Retaining wall</td>
                                    <td>$5,000 – $18,000+</td>
                                    <td>Segmental block or natural stone; MoCo DPS permit over 30&apos;&apos;; engineering over 4ft</td>
                                </tr>
                                <tr>
                                    <td>Driveway repaving (pavers)</td>
                                    <td>$6,500 – $18,000+</td>
                                    <td>Replaces cracked 1960s–70s asphalt; MoCo DPS permit for road connection</td>
                                </tr>
                                <tr>
                                    <td>Outdoor kitchen + patio</td>
                                    <td>$18,000 – $45,000+</td>
                                    <td>Patio + grill station or full kitchen; gas and electrical in-house</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p style={{ fontSize: "13px", color: "#555", marginTop: "-20px" }}>* All prices confirmed at free on-site estimate before work begins. Split-level grade transitions may increase patio and retaining wall costs depending on elevation difference and chosen layout approach.</p>

                {/* SERVICE AREA */}
                <h2>Hardscaping Service Area</h2>
                <p>DMV General Contracting Group provides hardscaping services throughout <strong>Wheaton, MD</strong>, including Wheaton Hills, Glenmont, Forest Glen, Arcola, Kemp Mill, and surrounding communities including Silver Spring, Kensington, Rockville, Gaithersburg, North Bethesda, and Bethesda.</p>

                <div className="banner">
                    <strong>Wheaton Permit Note:</strong> MoCo DPS at 2425 Reedie Drive, Wheaton is the permit office for Wheaton and all unincorporated Montgomery County. Neighboring Kensington files at the Town of Kensington at 3710 Mitchell Street. Neighboring Garrett Park files at the Town of Garrett Park at 4600 Oxford Street. DMV General Contracting Group confirms the correct permit jurisdiction for every project at the free consultation — Wheaton properties always file at MoCo DPS right here in town.
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Hardscaping in Wheaton, MD</h2>
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
                    <h2>Explore Our Other Services in Wheaton, MD</h2>
                    <ul>
                        <li><Link href="/service/patios/wheaton-md">Patio Installation in Wheaton, MD</Link></li>
                        <li><Link href="/service/fence-installation/wheaton-md">Fence Installation in Wheaton, MD</Link></li>
                        <li><Link href="/service/decks/wheaton-md">Deck Building in Wheaton, MD</Link></li>
                        <li><Link href="/service/home-additions/wheaton-md">Home Additions in Wheaton, MD</Link></li>
                        <li><Link href="/service/design-build/wheaton-md">Design-Build Contractor in Wheaton, MD</Link></li>
                        <li><Link href="/service/electrical-services/wheaton-md">Electrical Services in Wheaton, MD</Link></li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="cta-banner">
                    <h2>Need Hardscaping Services in Wheaton, MD?</h2>
                    <p>Talk with DMV General Contracting Group about patios, walkways, retaining walls, driveway repaving, or outdoor kitchens for your Wheaton home. MoCo DPS permits filed right here in Wheaton at 2425 Reedie Drive. ROI-focused design for Wheaton&apos;s strong home improvement market. Free consultation, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default HardscapingWheatonMD;