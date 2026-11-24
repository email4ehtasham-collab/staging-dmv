import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../roofing-city-style.scss";
import "./style.scss";

const RoofingCabinJohnMD = () => {
    const faqData = [
        {
            question: "Why does Cabin John's environment shorten roofing lifespan?",
            answer: "The C&O Canal and Cabin John Creek maintain elevated ambient moisture year-round, and the community's dense tree canopy keeps roofs shaded — preventing the natural UV-driven drying that arrests algae and moss growth on open suburban roofs. Sustained dampness under shade creates ideal conditions for algae, moss, and lichen establishment and progression. Standard shingles in Cabin John's conditions reach end of service life significantly earlier than their rated lifespan suggests."
        },
        {
            question: "What roofing material should I choose for my Cabin John home?",
            answer: "Algae-resistant architectural shingles with copper-infused granules are our top recommendation for most Cabin John replacement projects — the correct base specification for this environment, not an upgrade. Metal roofing (standing seam or metal shingles) is the best long-term option: it does not support algae or moss growth and has the longest service life in high-moisture conditions. Standard shingles without algae resistance are not recommended for full replacement in Cabin John."
        },
        {
            question: "Where are roofing permits filed in Cabin John, MD?",
            answer: "With Montgomery County DPS at 2425 Reedie Drive, Wheaton, MD 20902. Cabin John is unincorporated Montgomery County with no separate municipal permit office. DMV General Contracting Group files all Cabin John roofing permits at MoCo DPS and manages the full permit and inspection process in-house."
        },
        {
            question: "How often should I have my Cabin John roof inspected?",
            answer: "Annually — more frequently than most MoCo communities. Cabin John's moisture and shade conditions accelerate deterioration faster, making early detection of algae, moss, and granule loss significantly more valuable here than elsewhere. Catching algae early and treating it promptly can extend shingle service life by years relative to allowing it to progress to moss and lichen."
        },
        {
            question: "Does DMV General Contracting Group handle storm damage roofing in Cabin John?",
            answer: "Yes. Storm-related tree and branch damage is the most common roofing emergency in Cabin John. DMV General Contracting Group provides emergency roofing response throughout Cabin John 7 days a week — including debris removal coordination, structural damage assessment, and temporary weatherproofing before permanent repairs are permitted and completed."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Inspection — Moisture, Algae, Moss & Shade Mapping",
            desc: "We inspect the complete roofing system with Cabin John's specific conditions as the framework: algae and moss coverage mapped by roof section with severity rating, granule retention assessed in gutters and on shingles, sheathing moisture noted where accessible, flashing condition at chimney and all transition points, ventilation assessment, and an honest evaluation of remaining service life given the actual conditions present. Shadiest north-facing and canopy-covered sections assessed first — they deteriorate fastest."
        },
        {
            num: 2,
            title: "Repair vs. Replacement — Honest Assessment with Cabin John Conditions in Mind",
            desc: "We give an honest answer on whether repair and treatment or full replacement is the more cost-effective path for the specific conditions we find — not a default to replacement for any roof showing organic growth. For Cabin John roofs with early algae and sound shingles, treatment and targeted repair is often the right recommendation. For roofs with advanced moss and widespread granule loss, replacement with the correct algae-resistant or metal material is the appropriate scope."
        },
        {
            num: 3,
            title: "Material Selection — Algae-Resistant or Metal as the Correct Specification",
            desc: "Algae-resistant shingles with copper-infused granules or metal roofing (standing seam or metal shingles) presented as the correct base specifications for Cabin John's conditions — with honest performance comparison against standard shingles so the homeowner understands exactly why the specification matters in this specific community."
        },
        {
            num: 4,
            title: "MoCo DPS Permit Filed at 2425 Reedie Drive",
            desc: "All required roofing permits filed with MoCo DPS at 2425 Reedie Drive, Wheaton. All county correspondence managed in-house. Permit approval tracked and inspections coordinated. You do not contact MoCo DPS at any point."
        },
        {
            num: 5,
            title: "Tear-Off, Sheathing Check & Installation — Tree-Aware Staging",
            desc: "Existing roofing removed. Sheathing assessed for moisture damage after tear-off — Cabin John's ground moisture conditions can affect roof deck condition from below in homes with crawlspace moisture issues. Any deteriorated sheathing replaced before new underlayment. New roofing installed with staging appropriate to Cabin John's wooded lots — protecting landscaping, managing debris, and coordinating with any overhanging branch conditions."
        },
        {
            num: 6,
            title: "MoCo DPS Inspection, Cleanup & Maintenance Plan",
            desc: "All required MoCo DPS inspections scheduled and managed. Complete debris removal including from landscaping around wooded Cabin John properties. Final walkthrough. Written warranty documentation. Annual inspection and treatment schedule recommended for Cabin John's conditions — including specific guidance on what to watch for between inspections in this community's demanding environment."
        }
    ];

    return (
        <div className="city-service-detail-page roofing-cabin-john-md">
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
                                    "description": "Licensed and insured general contractor providing residential roofing inspection, repair, replacement and emergency roofing in Cabin John, MD. C&O Canal and Cabin John Creek proximity creates elevated moisture and heavy shade conditions that accelerate shingle and flashing deterioration faster than anywhere else in Montgomery County. MoCo DPS permit experts.",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "11810 Grand Park Ave. Suite 500",
                                        "addressLocality": "North Bethesda",
                                        "addressRegion": "MD",
                                        "postalCode": "20852",
                                        "addressCountry": "US"
                                    },
                                    "areaServed": { "@type": "City", "name": "Cabin John" }
                                },
                                {
                                    "@type": "Service",
                                    "name": "Roofing Services in Cabin John, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Cabin John" },
                                    "serviceType": "Residential Roof Inspection, Repair, Replacement, Emergency Roofing and Maintenance"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Roofing", "item": "https://www.dmv-gc.com/service/roofing" },
                                        { "@type": "ListItem", "position": 4, "name": "Cabin John, MD", "item": "https://www.dmv-gc.com/service/roofing/cabin-john-md" }
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
                    <Link href="/service/roofing">Roofing</Link><span>›</span>
                    Cabin John, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">💧 Roofing Contractor • Cabin John, MD — Moisture-First Approach</div>
                    <h1>Roofing Services in Cabin John, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ MoCo DPS Permit — 2425 Reedie Drive</span>
                        <span className="badge">✓ Algae & Moisture-Resistant Material Guidance</span>
                        <span className="badge">✓ 1-Year Warranty</span>
                        <span className="badge">✓ Free Consultation</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="intro-box">
                    DMV General Contracting Group provides professional <strong>roofing inspection, repair, replacement, emergency roofing and maintenance for Cabin John homeowners</strong> — with a moisture-first approach that accounts for the C&O Canal and Cabin John Creek conditions that make this community's roofs deteriorate faster than anywhere else in Montgomery County. All permits filed with MoCo DPS at 2425 Reedie Drive, Wheaton.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Cabin John Roofing — The C&O Canal and Cabin John Creek Create Roofing Conditions That No Other Montgomery County Community Has to the Same Degree:</strong> Heavy shade from Cabin John's dense canopy keeps roofs damp for days after rain. Elevated ambient moisture from two permanent water features feeds algae and moss year-round. The result is that Cabin John roofs reach end of service life years earlier than equivalent roofs in open, sunny MoCo communities — and standard shingles without algae resistance perform worst of all in these conditions.
                </div>

                {/* WHY CABIN JOHN */}
                <h2>Why Cabin John's Environment Ages Roofs Faster Than Any Other MoCo Community</h2>

                <div className="moisture-box">
                    <h3>💧 The Cabin John Roofing Moisture Problem — The Full Picture</h3>
                    <p>Every roofing recommendation DMV General Contracting Group makes for a Cabin John property begins with an honest understanding of what Cabin John's specific environment does to roofing materials over time — because the conditions here are genuinely different from those in Wheaton, Rockville, or Gaithersburg:</p>
                    <ul>
                        <li><strong>Dense canopy shade — the primary accelerant:</strong> Cabin John's mature tree canopy — the wooded character that defines the community and makes it one of the most beautiful residential environments in Montgomery County — keeps most roofs in shade for the majority of the day throughout the year. Shade prevents the UV-driven drying that naturally arrests algae and moss growth on open suburban roofs. A shingle that dries quickly in direct sunlight after rain can remain damp in Cabin John's shade for 12–36 hours after the same rain event — creating the sustained moisture conditions that algae, moss, and lichen need to establish and spread.</li>
                        <li><strong>C&O Canal and Cabin John Creek — elevated ambient moisture baseline:</strong> Cabin John's proximity to two permanent water features maintains ambient humidity in the community's microclimate at levels consistently higher than in open Montgomery County communities. This elevated baseline moisture — independent of rain events — compounds the shade effect by keeping roofing materials in a sustained high-humidity environment that accelerates organic growth and deterioration year-round, not just during wet seasons.</li>
                        <li><strong>Algae, moss, and lichen — the progression on Cabin John roofs:</strong> In Cabin John's conditions, algae establishes on shingle surfaces first — appearing as the dark black-gray streaking visible on the shadiest sections of the roof. Left untreated, algae creates the moisture-retaining surface conditions that moss needs to take hold. Moss holds water against shingle surfaces, accelerating granule loss and shingle degradation beneath. Lichen — the most damaging of the three — bonds directly to shingle granules and etches the asphalt layer beneath when removed. The progression from algae to moss to lichen on a Cabin John roof happens significantly faster than on an equivalent roof in a less shaded community.</li>
                        <li><strong>What this means for roofing decisions in Cabin John:</strong> A standard architectural shingle with a 30-year warranty installed on a Cabin John home may perform for 18–22 years in practice — the shade and moisture conditions effectively reduce the real-world service life below the rated lifespan. This is why DMV General Contracting Group recommends algae-resistant shingles with copper-infused granules, or metal roofing, as the default for Cabin John replacement projects — not as premium upgrades, but as the correct material specification for this specific environment.</li>
                    </ul>
                </div>

                {/* SERVICES */}
                <h2>Roofing Services We Offer in Cabin John, MD</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Roof Inspection & Assessment</h3><p>Full inspection with specific attention to Cabin John's moisture-driven conditions — algae and moss coverage mapping, granule retention in gutters and on shingles, flashing condition, sheathing moisture assessment, and ventilation adequacy. Shadiest roof sections assessed first — they deteriorate fastest in Cabin John's conditions.</p></div>
                    <div className="svc-card"><h3>Roof Repair</h3><p>Localized repair for storm damage, flashing failures, moss-damaged shingles, and chimney conditions. For Cabin John roofs where moss has taken hold in specific sections, honest assessment of whether targeted repair or full replacement is the more cost-effective path for the specific conditions present.</p></div>
                    <div className="svc-card"><h3>Roof Replacement</h3><p>Complete replacement with algae-resistant shingles or metal roofing — the material specifications that perform correctly in Cabin John's shaded, high-moisture environment. Standard shingles without algae resistance are not recommended for full replacement in Cabin John's conditions. MoCo DPS permit managed in-house.</p></div>
                    <div className="svc-card"><h3>Algae & Moss Treatment</h3><p>Professional treatment of existing algae and moss on Cabin John roofs — low-pressure washing, zinc or copper sulfate application, and preventive treatment to slow re-establishment. Treatment extends service life on roofs that are otherwise sound but show early-to-moderate organic growth common in Cabin John's conditions.</p></div>
                    <div className="svc-card"><h3>Emergency Roofing</h3><p>Urgent response for storm damage and active leaks in Cabin John homes — where falling trees and branches in the community's wooded setting are a primary storm damage source in addition to wind and hail. Assessment and temporary protection before permanent repairs. Available 7 days a week.</p></div>
                    <div className="svc-card"><h3>Chimney Flashing & Repair</h3><p>Chimney flashing assessment and replacement — a common leak source in Cabin John's older homes where sustained moisture exposure accelerates flashing deterioration faster than in drier communities.</p></div>
                    <div className="svc-card"><h3>Roof Maintenance & Annual Inspection</h3><p>Annual inspection specifically calibrated to Cabin John's conditions — algae and moss monitoring, granule loss assessment, flashing integrity, and gutter performance. More critical in Cabin John than in most MoCo communities because deterioration progresses faster and earlier detection saves significantly more.</p></div>
                    <div className="svc-card"><h3>Metal Roofing Installation</h3><p>Standing seam and metal shingle roofing — the longest-service and lowest-organic-growth option for Cabin John's shaded conditions. Metal does not support algae, moss, or lichen growth, and performs exceptionally in high-moisture environments. The premium upfront investment with the best long-term performance in Cabin John's specific conditions.</p></div>
                </div>

                {/* MATERIALS */}
                <h2>Roofing Materials for Cabin John — Moisture Performance Comes First</h2>
                <p>
                    In most Montgomery County communities, roofing material selection is primarily about durability, aesthetics, and budget. In Cabin John, <strong>moisture and organic growth performance is the first criterion</strong> — because standard roofing materials underperform in Cabin John's shaded, high-moisture conditions in ways that do not apply in open suburban communities:
                </p>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>Material</th>
                                    <th>Cabin John Performance</th>
                                    <th>Recommendation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Algae-Resistant Architectural Shingles (Copper-Infused)</strong></td>
                                    <td>Good — copper granules inhibit algae and moss establishment from day one</td>
                                    <td>✅ Top recommendation for most Cabin John replacements. Not an upgrade — the correct base specification for this environment.</td>
                                </tr>
                                <tr>
                                    <td><strong>Standing Seam Metal Roofing</strong></td>
                                    <td>Excellent — does not support any organic growth; outstanding moisture performance</td>
                                    <td>✅ Best long-term option for Cabin John. Higher upfront cost; lowest maintenance and longest service life in these conditions. 40–70 year lifespan.</td>
                                </tr>
                                <tr>
                                    <td><strong>Metal Shingles</strong></td>
                                    <td>Excellent — same organic growth resistance as standing seam; shingle profile</td>
                                    <td>✅ Good option where standing seam profile is not preferred. Same moisture performance benefits.</td>
                                </tr>
                                <tr>
                                    <td><strong>Standard Architectural Shingles (No Algae Resistance)</strong></td>
                                    <td>Poor in Cabin John — algae within 3–5 years; moss within 5–8 years in shadiest sections</td>
                                    <td>⚠️ Not recommended for full replacement in Cabin John. May be acceptable for small isolated repairs if algae-resistant stock is unavailable.</td>
                                </tr>
                                <tr>
                                    <td><strong>Natural or Synthetic Slate</strong></td>
                                    <td>Good — does not support algae/moss as readily as asphalt; heavy and costly</td>
                                    <td>✅ Appropriate for Cabin John's older homes where slate is architecturally appropriate. Long service life and good moisture performance.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="banner">
                    <strong>Cabin John Material Recommendation:</strong> DMV General Contracting Group specifies algae-resistant shingles with copper-infused granules as the standard — not the premium upgrade — for every Cabin John shingle replacement project. In Cabin John's conditions, installing standard shingles is a decision to repeat the replacement project significantly sooner than the rated lifespan suggests. The cost difference between standard and algae-resistant shingles is modest relative to the service life difference in this specific environment.
                </div>

                {/* PERMITS */}
                <h2>Permits for Cabin John Roofing — MoCo DPS at 2425 Reedie Drive</h2>
                <div className="permit-box">
                    <h3>📋 Cabin John Roofing Permits — MoCo DPS, 2425 Reedie Drive, Wheaton</h3>
                    <p>Cabin John is unincorporated Montgomery County — all roofing permits are filed with Montgomery County DPS at 2425 Reedie Drive, Wheaton, MD 20902. Cabin John has no separate municipal permit office, unlike neighboring Garrett Park (Town of Garrett Park at 4600 Oxford Street) and Kensington (Town of Kensington at 3710 Mitchell Street). All Cabin John roofing permits go to MoCo DPS. DMV General Contracting Group files at MoCo DPS for all Cabin John roofing projects, manages all county correspondence, and coordinates all required MoCo DPS inspections in-house. You do not contact the county permit office at any point in the process.</p>
                </div>

                {/* STORM */}
                <h2>Storm Damage Roofing in Cabin John — Trees Are the Primary Hazard</h2>
                <div className="banner">
                    <strong>Cabin John's Tree Canopy — the Community's Greatest Asset and Its Most Common Roofing Emergency Source:</strong> The mature trees that define Cabin John's wooded character are also the primary source of storm damage roofing emergencies in the community. High-wind events bring down branches — and sometimes entire trees — onto Cabin John rooftops with regularity during the region's summer thunderstorm season and fall wind events. C&O Canal corridor storms frequently produce localized high-wind conditions in Cabin John that cause disproportionate tree-related damage compared to open communities on the same storm track. DMV General Contracting Group provides emergency roofing response for storm-related tree and branch damage throughout Cabin John — available 7 days a week — including debris removal coordination, structural damage assessment, and temporary weatherproofing before permanent repairs are permitted and completed.
                </div>

                {/* REPAIR VS REPLACE */}
                <h2>Roof Repair vs. Roof Replacement in Cabin John, MD</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Repair — When It Makes Sense in Cabin John</h3><p>Repair is appropriate when storm damage is isolated and the overall shingle system is otherwise sound, when algae and moss coverage is early-stage and treatment can extend service life meaningfully, or when flashing failure is the single active issue on a roof with serviceable shingles. For Cabin John roofs with algae-resistant shingles that are under 15 years old, targeted repair and treatment is typically more cost-effective than full replacement.</p></div>
                    <div className="svc-card"><h3>Replacement — When It Makes Sense in Cabin John</h3><p>Replacement is warranted when moss has established across significant roof sections and granule loss is widespread, when shingles are approaching or past their real-world service life in Cabin John's conditions (typically 18–22 years for standard shingles, 22–28 years for algae-resistant), or when multiple flashing failures indicate a roof that has reached systemic end of life. Replacement is also the right time to upgrade from standard to algae-resistant shingles or to metal roofing.</p></div>
                    <div className="svc-card"><h3>Honest Assessment — No Default to Replacement</h3><p>DMV General Contracting Group does not default to replacement for Cabin John roofs showing algae and moss — we assess whether treatment and targeted repair can extend service life cost-effectively before recommending full replacement. A Cabin John roof with early algae, sound shingles, and good granule retention may have 8–12 years of remaining life with proper treatment and maintenance — worth preserving before a full replacement is warranted.</p></div>
                </div>

                {/* QUALITY INSTALLATION */}
                <h2>What Makes a Quality Roofing Installation in Cabin John?</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>💧 Moisture-First Material Specification</h3><p>Algae-resistant shingles or metal roofing as the default — not the upgrade — for Cabin John's shaded, high-moisture conditions.</p></div>
                    <div className="svc-card"><h3>🌲 Tree-Aware Installation</h3><p>Overhanging branch clearance assessment, careful staging on wooded lots, and debris management in Cabin John's heavily landscaped properties.</p></div>
                    <div className="svc-card"><h3>🔍 Full Moisture Assessment</h3><p>Sheathing moisture condition checked at tear-off — elevated crawlspace and ground moisture in Cabin John can affect roof deck condition from below in some properties.</p></div>
                    <div className="svc-card"><h3>📋 MoCo DPS Permit at 2425 Reedie Drive</h3><p>All Cabin John roofing permits filed correctly at MoCo DPS — not at Garrett Park or Kensington town offices, which do not cover Cabin John.</p></div>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for Roofing in Cabin John?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">💧</div>
                        <strong>Moisture-First Approach</strong>
                        <span>C&O Canal conditions understood — not treated like generic suburban roofing</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🌲</div>
                        <strong>Wooded Lot Expertise</strong>
                        <span>Tree staging, branch management, emergency response for storm damage</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>MoCo DPS Daily</strong>
                        <span>2425 Reedie Drive — permits filed here routinely for Cabin John projects</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9-Star Reputation</strong>
                        <span>97+ verified homeowner reviews</span>
                    </div>
                </div>

                {/* PROCESS */}
                <h2>Our Roofing Process in Cabin John</h2>
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

                {/* MAINTENANCE */}
                <h2>Roof Maintenance for Cabin John Homeowners — More Critical Here Than Anywhere in MoCo</h2>
                <p>
                    Cabin John's elevated moisture and dense shade conditions make annual roof maintenance more valuable here than in virtually any other Montgomery County community. The difference between catching early algae and treating it promptly versus allowing it to progress to moss and then lichen can be 5–10 years of additional shingle service life — or the difference between a $400 treatment and a $12,000–$20,000 replacement. DMV General Contracting Group's Cabin John maintenance visits include: algae and moss coverage assessment by roof section, granule retention check in gutters and downspouts, flashing condition at all transition points, ventilation assessment, gutter clearing, and a specific recommendation for whether treatment is warranted in the current season. Annual inspection is our standard recommendation for every Cabin John homeowner — regardless of roof age.
                </p>

                {/* AREAS */}
                <h2>Serving Cabin John and Surrounding Areas</h2>
                <div className="areas-grid">
                    <span className="area-pill">Cabin John, MD</span>
                    <span className="area-pill">Potomac</span>
                    <span className="area-pill">North Bethesda</span>
                    <span className="area-pill">Bethesda</span>
                    <span className="area-pill">Kensington</span>
                    <span className="area-pill">Garrett Park</span>
                    <span className="area-pill">Chevy Chase</span>
                    <span className="area-pill">Rockville</span>
                    <span className="area-pill">Silver Spring</span>
                    <span className="area-pill">Washington, DC</span>
                </div>
                <div className="banner">
                    <strong>Cabin John Permit Note:</strong> Cabin John is unincorporated Montgomery County — roofing permits file with MoCo DPS at 2425 Reedie Drive, Wheaton. Neighboring Garrett Park files at the Town of Garrett Park at 4600 Oxford Street. Neighboring Kensington files at the Town of Kensington at 3710 Mitchell Street. If you are unsure which permit office applies to your property, DMV General Contracting Group confirms the correct jurisdiction at the free consultation.
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Roofing Services in Cabin John, MD</h2>
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
                    <h2>Explore Our Other Services in Cabin John, MD</h2>
                    <p>DMV General Contracting Group provides a complete range of home services for Cabin John homeowners:</p>
                    <ul>
                        <li><Link href="/service/siding-installation/cabin-john-md">Siding Installation in Cabin John, MD</Link></li>
                        <li><Link href="/service/home-additions/cabin-john-md">Home Additions in Cabin John, MD</Link></li>
                        <li><Link href="/service/electrical-services/cabin-john-md">Electrical Services in Cabin John, MD</Link></li>
                        <li><Link href="/service/carpet-installation/cabin-john-md">Carpet Installation in Cabin John, MD</Link></li>
                        <li><Link href="/service/kitchen-remodeling/cabin-john-md">Kitchen Remodeling in Cabin John, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/cabin-john-md">Basement Remodeling in Cabin John, MD</Link></li>
                        <li><Link href="/service/design-build/cabin-john-md">Design-Build Contractor in Cabin John, MD</Link></li>
                        <li><Link href="/service/decks/cabin-john-md">Deck Building in Cabin John, MD</Link></li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="cta-banner">
                    <h2>Ready for a Roofing Project in Cabin John?</h2>
                    <p>Schedule a professional roof assessment — C&O Canal moisture conditions understood, algae-resistant and metal roofing recommended for this environment, MoCo DPS permits filed at 2425 Reedie Drive. Free consultation, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default RoofingCabinJohnMD;