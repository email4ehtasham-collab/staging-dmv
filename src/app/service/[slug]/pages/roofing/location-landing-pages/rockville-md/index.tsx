import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";

import "../roofing-city-style.scss";
import "./style.scss";

const RoofingRockvilleMD = () => {
    const faqData = [
        {
            question: "Where are roofing permits filed in Rockville, MD?",
            answer: "Most established Rockville neighborhoods file with the City of Rockville at 111 Maryland Avenue, Rockville, MD 20850. Properties outside city limits file with MoCo DPS at 2425 Reedie Drive, Wheaton. The correct office is determined by parcel location — not mailing address or zip code. DMV General Contracting Group confirms the correct office before any permit is submitted."
        },
        {
            question: "My Twinbrook home has a very old roof — what should I expect at inspection?",
            answer: "For Twinbrook and West End homes with roofs that have not been replaced in 20+ years, the inspection will assess shingle layer count (multiple layers must be torn off before replacement), flashing condition at chimney and valleys, attic ventilation adequacy, and sheathing condition. Many mid-century Twinbrook homes have all four of these as active concerns — the inspection identifies which need to be addressed and what the complete project scope should be."
        },
        {
            question: "Does King Farm's HOA have roofing color requirements?",
            answer: "King Farm and other Rockville planned communities typically specify approved shingle colors and materials for roofing replacement. DMV General Contracting Group confirms the community's current approved specifications, provides material and color documentation for your HOA application where ARC approval is required, and coordinates the HOA process concurrently with the City of Rockville permit process."
        },
        {
            question: "How much does roof replacement cost in Rockville, MD?",
            answer: "Roofing costs vary by roof size, pitch, shingle layer count, sheathing condition, complexity (chimneys, dormers, valleys), material grade, and permit fees. Twinbrook and West End full tear-off replacements run higher than single-layer replacements on King Farm homes because of the multi-layer removal requirement. DMV General Contracting Group provides a project-specific estimate after inspecting the roof in person."
        },
        {
            question: "Does DMV General Contracting Group provide emergency roofing in Rockville?",
            answer: "Yes. Emergency roofing response is available throughout Rockville 7 days a week — including assessment and temporary protective measures before permanent repairs. For older Twinbrook and West End homes, we provide an honest assessment of whether emergency repair or replacement is the more cost-effective response to an active leak on an aging roof."
        }
    ];

    const steps = [
        {
            num: 1,
            title: "Inspection & Assessment — Era-Appropriate Evaluation",
            desc: "We inspect the full roof system with attention to the conditions specific to your Rockville home's era: for Twinbrook and West End, we assess shingle layer count, flashing age, ventilation adequacy, and chimney conditions; for King Farm and Congressional, we assess current shingle life, granule loss, and isolated failure patterns. Full written findings provided."
        },
        {
            num: 2,
            title: "Permit Jurisdiction Confirmed",
            desc: "Before any permit is filed, we confirm whether your specific Rockville parcel files at the City of Rockville at 111 Maryland Avenue or MoCo DPS at 2425 Reedie Drive. This is confirmed by parcel — not by neighborhood name, mailing address, or zip code."
        },
        {
            num: 3,
            title: "HOA Requirements Confirmed (King Farm, Congressional, Fallsgrove)",
            desc: "For homes in Rockville's planned communities, we confirm HOA roofing requirements — approved shingle colors, approved materials, and whether ARC submission is required before installation. We provide material specification documentation for your HOA application and coordinate HOA and permit processes concurrently."
        },
        {
            num: 4,
            title: "Material Selection & Scope Agreement",
            desc: "Roofing materials selected for your home's specific conditions, architectural profile, and budget — within HOA-approved specifications where applicable. For Twinbrook and West End, we present options at different quality grades with honest longevity and performance comparisons for Maryland's climate."
        },
        {
            num: 5,
            title: "Permit Filed — City of Rockville or MoCo DPS",
            desc: "We prepare and file the roofing permit at the correct office for your Rockville parcel. We manage all correspondence and track approval. You do not contact either permit office at any point in the process."
        },
        {
            num: 6,
            title: "Tear-Off, Sheathing Assessment & Installation",
            desc: "Existing roofing removed — all layers for Twinbrook and West End homes where multiple layers are present. Sheathing condition assessed after tear-off and any deteriorated boards replaced before underlayment and new shingles are installed. All flashing replaced at chimneys, valleys, and transition points. New roofing installed to manufacturer specifications."
        },
        {
            num: 7,
            title: "Inspection, Cleanup & Completion",
            desc: "All required City of Rockville or MoCo DPS inspections scheduled and managed. Complete debris cleanup including shingle material from landscaping. Final walkthrough with you. Written warranty documentation provided."
        }
    ];

    return (
        <div className="city-service-detail-page roofing-rockville-md">
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
                                    "description": "Licensed and insured general contractor providing residential roofing inspection, repair, replacement, emergency roofing and maintenance services in Rockville, Maryland. Dual permit jurisdiction expertise: City of Rockville at 111 Maryland Avenue and MoCo DPS at 2425 Reedie Drive.",
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
                                    "name": "Roofing Services in Rockville, MD",
                                    "provider": { "@type": "LocalBusiness", "name": "DMV General Contracting Group LLC", "telephone": "+1-240-730-1292", "url": "https://www.dmv-gc.com/" },
                                    "areaServed": { "@type": "City", "name": "Rockville" },
                                    "serviceType": "Residential Roof Inspection, Repair, Replacement, Emergency Roofing and Maintenance"
                                },
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                                        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                                        { "@type": "ListItem", "position": 3, "name": "Roofing", "item": "https://www.dmv-gc.com/service/roofing" },
                                        { "@type": "ListItem", "position": 4, "name": "Rockville, MD", "item": "https://www.dmv-gc.com/service/roofing/rockville-md" }
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
                    Rockville, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">⚡ Roofing Contractor • Rockville, MD — Twinbrook to King Farm</div>
                    <h1>Roofing Services in Rockville, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ City of Rockville & MoCo DPS Permits</span>
                        <span className="badge">✓ HOA Roofing Coordination</span>
                        <span className="badge">✓ 1-Year Warranty</span>
                        <span className="badge">✓ Free Consultation</span>
                    </div>
                </div>

                <div className="intro-box">
                    DMV General Contracting Group provides professional <strong>roofing inspection, repair, replacement, emergency roofing and maintenance for all Rockville homeowners</strong> — from Twinbrook and West End&apos;s 1950s–1960s colonials to King Farm, Congressional, and Fallsgrove&apos;s newer planned community homes. Dual permit jurisdiction expertise: City of Rockville at 111 Maryland Avenue and MoCo DPS at 2425 Reedie Drive. Correct office confirmed by parcel at every consultation.
                </div>

                {/* CALLOUT */}
                <div className="banner">
                    <strong>Rockville Roofing — Two Distinct Housing Eras, Two Different Roofing Profiles, and Two Permit Jurisdictions:</strong> Twinbrook and West End&apos;s mid-century homes have different roofing conditions — and different roofing needs — than King Farm and Congressional&apos;s 1999–2015 planned community homes. And both may file permits at different offices. DMV General Contracting Group brings the right expertise for each and confirms the correct permit office before any work is scoped.
                </div>

                {/* SERVICES */}
                <h2>Roofing Services We Offer in Rockville, MD</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Roof Inspection & Assessment</h3><p>Detailed inspection of shingles, sheathing, flashing, ventilation, chimney conditions, dormers, and gutters — for both Rockville&apos;s mid-century homes and newer planned community properties.</p></div>
                    <div className="svc-card"><h3>Roof Repair</h3><p>Professional repair for leaks, damaged shingles, flashing failures, chimney flashing, and storm damage. Localized repairs for King Farm and Congressional homes approaching first replacement; flashing and multi-layer assessment for Twinbrook and West End.</p></div>
                    <div className="svc-card"><h3>Roof Replacement</h3><p>Complete replacement of aging or damaged roofs — with tear-off assessment for Twinbrook and West End homes that may have multiple shingle layers, and HOA material and color coordination for King Farm and Congressional communities.</p></div>
                    <div className="svc-card"><h3>Emergency Roofing</h3><p>Urgent response for storm damage and active leaks throughout Rockville — assessment and temporary protection before permanent repairs. Available 7 days a week.</p></div>
                    <div className="svc-card"><h3>Roof Maintenance</h3><p>Routine inspections, cleaning and minor repairs to extend roof service life. For Twinbrook and West End homes with original or first-replacement roofs, annual inspection catches small problems before they become expensive emergencies.</p></div>
                    <div className="svc-card"><h3>Shingle Replacement</h3><p>Replacement of damaged or missing shingles — color and profile matched to existing roof. For King Farm and Congressional HOA communities, material and color confirmed against HOA approved specifications before replacement.</p></div>
                    <div className="svc-card"><h3>Flashing & Chimney Work</h3><p>Step flashing, counter-flashing, valley flashing, and chimney crown repair — common issues in Twinbrook and West End&apos;s mid-century homes where original flashing is aging.</p></div>
                    <div className="svc-card"><h3>Ventilation Assessment & Improvement</h3><p>Inadequate attic ventilation accelerates shingle aging and contributes to ice dams. Common in Twinbrook and West End&apos;s 1950s–1960s construction — assessed and corrected as part of full replacement projects.</p></div>
                </div>

                {/* PERMIT JURISDICTIONS */}
                <h2>Rockville&apos;s Two Permit Jurisdictions — Confirmed by Parcel Before Any Work Begins</h2>

                <div className="juris-grid">
                    <div className="juris-card">
                        <h3>🏛️ City of Rockville — 111 Maryland Avenue</h3>
                        <ul>
                            <li><strong>Permit office:</strong> City of Rockville, 111 Maryland Avenue, Rockville, MD 20850</li>
                            <li><strong>Communities:</strong> Twinbrook, West End, Lincoln Park, most established Rockville neighborhoods within city limits</li>
                            <li><strong>All roofing permits filed here</strong> for covered properties — not MoCo DPS</li>
                            <li>City of Rockville conducts its own inspections — separate from MoCo inspectors</li>
                            <li><strong>Filing at MoCo DPS for a City of Rockville property = no permit issued</strong></li>
                            <li>DMV General Contracting Group files at City of Rockville for all in-city roofing projects</li>
                        </ul>
                    </div>
                    <div className="juris-card">
                        <h3>🏛️ Montgomery County DPS — 2425 Reedie Drive</h3>
                        <ul>
                            <li><strong>Permit office:</strong> MoCo DPS, 2425 Reedie Drive, Wheaton, MD 20902</li>
                            <li><strong>Communities:</strong> Properties with Rockville mailing addresses outside city limits; some King Farm edge parcels</li>
                            <li><strong>All roofing permits filed here</strong> for covered properties — not City of Rockville</li>
                            <li>MoCo DPS inspectors cover all unincorporated Rockville-area roofing inspections</li>
                            <li><strong>Filing at City of Rockville for an unincorporated property = no permit issued</strong></li>
                            <li>DMV General Contracting Group confirms parcel jurisdiction before any permit submission</li>
                        </ul>
                    </div>
                </div>

                <p style={{ fontSize: "14px", color: "#555", fontStyle: "italic" }}>Note: Most King Farm properties are within the City of Rockville and file at 111 Maryland Avenue — but some edge parcels fall outside city limits and file with MoCo DPS. Mailing address and zip code do not determine which office applies. DMV General Contracting Group confirms by parcel at the free consultation.</p>

                {/* TWO HOUSING ERAS */}
                <h2>Rockville&apos;s Two Housing Eras — Different Roofing Profiles</h2>

                <div className="era-grid">
                    <div className="era-card">
                        <h3>🏚️ Twinbrook & West End (1950s–1960s) — Mid-Century Roofing Conditions</h3>
                        <ul>
                            <li><strong>Multiple shingle layers likely:</strong> Homes reshingled once or twice since original construction may have 2–3 layers — which must be fully torn off before a new roof can be properly installed. Tear-off adds to project cost but is necessary for a durable result.</li>
                            <li><strong>Original or aging flashing:</strong> Chimney step flashing, valley flashing, and roof-to-wall junctions in Twinbrook and West End homes are often original or from early updates — deteriorated flashing is a primary leak source assessed at every inspection.</li>
                            <li><strong>Inadequate ventilation common:</strong> 1950s–1960s homes were built without modern ridge and soffit ventilation systems. Inadequate ventilation shortens shingle life significantly and is addressed as part of full replacement projects.</li>
                            <li><strong>Wood sheathing in oldest homes:</strong> The earliest Twinbrook construction may have original wood board sheathing rather than plywood — condition assessed when existing roofing is removed.</li>
                            <li><strong>Permit: City of Rockville, 111 Maryland Avenue</strong></li>
                        </ul>
                    </div>
                    <div className="era-card">
                        <h3>🏘️ King Farm, Congressional & Fallsgrove (1999–2015) — Modern Roofing, HOA Coordination</h3>
                        <ul>
                            <li><strong>Approaching first replacement cycle:</strong> Homes built 1999–2015 with original 25–30 year architectural shingles are now 10–25 years old — many approaching or reaching end of service life, showing granule loss, curling edges, and isolated failures after storms.</li>
                            <li><strong>Modern sheathing and ventilation:</strong> Plywood or OSB sheathing and code-compliant ventilation make replacement more straightforward than older Twinbrook properties — single layer tear-off, sound sheathing, and adequate ventilation already in place.</li>
                            <li><strong>HOA material and color approval:</strong> King Farm, Congressional, and Fallsgrove HOA communities typically specify approved shingle colors and materials. Replacement outside approved specifications — even for the same original material — may require ARC approval before installation begins.</li>
                            <li><strong>Permit: City of Rockville, 111 Maryland Ave (most); MoCo DPS (some edge parcels)</strong></li>
                        </ul>
                    </div>
                </div>

                {/* HOA */}
                <h2>HOA Roofing Approval in Rockville&apos;s Planned Communities</h2>
                <div className="banner">
                    <strong>King Farm, Congressional & Fallsgrove — HOA Color and Material Requirements:</strong> Rockville&apos;s planned new urbanist communities have HOA architectural standards that commonly specify approved shingle colors and materials for roofing replacement. Installing a replacement roof in a non-approved color — even if it is the same material as the original — may result in an HOA violation notice after the fact. DMV General Contracting Group confirms HOA roofing requirements at the consultation, obtains the community&apos;s approved material and color specifications, provides those specifications for your HOA application where ARC approval is required, and coordinates the HOA process concurrently with the City of Rockville permit process so neither creates unnecessary delay.
                </div>

                {/* MATERIALS */}
                <h2>Roofing Materials for Rockville Homes</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>Roofing Material</th>
                                    <th>Best For in Rockville</th>
                                    <th>Key Consideration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Architectural Asphalt Shingles</strong></td>
                                    <td>Most Rockville homes across both eras</td>
                                    <td>Most practical and widely used option. For King Farm and Congressional, color must align with HOA approved specifications. For Twinbrook and West End, color selection is open but quality grade matters for Maryland&apos;s climate.</td>
                                </tr>
                                <tr>
                                    <td><strong>Impact-Resistant Shingles</strong></td>
                                    <td>All Rockville homes — particularly after storm damage</td>
                                    <td>Class 4 impact-resistant shingles may qualify for insurance premium discounts in Maryland. Good option for full replacement projects where long-term durability and storm resistance are priorities.</td>
                                </tr>
                                <tr>
                                    <td><strong>Metal Roofing (Standing Seam)</strong></td>
                                    <td>Twinbrook and West End — where appropriate architectural profile</td>
                                    <td>Excellent longevity (40–70 years) and low maintenance. HOA approval required in King Farm and Congressional before installation. Not universally appropriate for all Rockville home styles.</td>
                                </tr>
                                <tr>
                                    <td><strong>Premium Asphalt (Designer/Luxury)</strong></td>
                                    <td>Larger Rockville colonials and West End properties</td>
                                    <td>Thicker, heavier shingles with enhanced weather performance and more dimensional appearance. Good upgrade option for Twinbrook and West End homeowners making a long-term investment in the property.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* REPAIR VS REPLACE */}
                <h2>Roof Repair vs. Roof Replacement in Rockville, MD</h2>
                <div className="svc-grid">
                    <div className="svc-card"><h3>Repair — When It Makes Sense</h3><p>Repair is appropriate when damage is localized — isolated storm damage on a roof with sound shingles elsewhere, a single flashing failure, or minor chimney crown repair. For King Farm and Congressional homes with roofs under 15 years old and one isolated issue, repair extends useful roof life without full replacement cost.</p></div>
                    <div className="svc-card"><h3>Replacement — When It Makes Sense</h3><p>Replacement is appropriate when shingles are at or past their service life, when multiple shingle layers must be torn off regardless, when flashing failures are widespread across multiple locations, or when granule loss is extensive. For Twinbrook and West End homes with 25+ year old roofs, replacement is typically more cost-effective than ongoing repair.</p></div>
                    <div className="svc-card"><h3>Professional Inspection First</h3><p>An inspection identifies whether the issue is localized or systemic, whether multiple shingle layers are present, and the condition of flashing, sheathing, and ventilation — giving you the information needed to make a repair-versus-replacement decision based on actual conditions rather than guesswork.</p></div>
                </div>

                {/* QUALITY INSTALLATION */}
                <h2>What Makes a Quality Roofing Installation in Rockville?</h2>
                <div className="svc-grid">
                    <div className="svc-card"><strong>🔍 Full System Assessment</strong><p>Shingle condition, sheathing, flashing, ventilation, chimneys, and gutter integration assessed before any scope is recommended — for both Rockville housing eras.</p></div>
                    <div className="svc-card"><strong>🏛️ Correct Permit Office</strong><p>City of Rockville at 111 Maryland Avenue or MoCo DPS — confirmed by parcel before any permit is filed. No assumption by neighborhood name or zip code.</p></div>
                    <div className="svc-card"><strong>🏘️ HOA Coordination</strong><p>King Farm and Congressional HOA material and color specifications confirmed and provided for your ARC application before installation begins.</p></div>
                    <div className="svc-card"><strong>💧 Complete Flashing Replacement</strong><p>All chimney, valley, dormer, and roof-to-wall flashing replaced during full replacement projects — not left from the previous roof installation.</p></div>
                </div>

                {/* TRUST */}
                <h2>Why Choose DMV General Contracting Group for Roofing in Rockville?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">⚡</div>
                        <strong>Both Rockville Eras</strong>
                        <span>Twinbrook mid-century conditions and King Farm modern HOA coordination</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🏛️</div>
                        <strong>Dual Permit Expertise</strong>
                        <span>City of Rockville 111 Maryland Ave & MoCo DPS — correct office by parcel</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🛡️</div>
                        <strong>MHIC Licensed & Insured</strong>
                        <span>License #156178 · 1-year workmanship warranty</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9-Star Reputation</strong>
                        <span>97+ verified homeowner reviews</span>
                    </div>
                </div>

                {/* PROCESS */}
                <h2>Our Roofing Process in Rockville</h2>
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

                {/* EMERGENCY */}
                <h2>Emergency Roof Repair in Rockville, MD</h2>
                <p>Storm damage and active leaks in Rockville homes require prompt response — water intrusion that is not addressed quickly damages ceilings, walls, insulation, and structural members. DMV General Contracting Group provides emergency roofing response throughout Rockville — available 7 days a week — including damage assessment and temporary protective measures before permanent repairs are completed. For Twinbrook and West End homes where an active leak may indicate that the overall roof is at end of life, we provide an honest assessment of whether emergency repair or immediate replacement is the more cost-effective path.</p>

                {/* MAINTENANCE */}
                <h2>Roof Maintenance for Rockville Homeowners</h2>
                <p>Regular roof maintenance helps Rockville homeowners identify small problems before they become expensive emergency repairs. For Twinbrook and West End homes with older roofing systems, annual inspection of flashing conditions, chimney crown integrity, granule retention, and gutter integration is particularly valuable — these homes are in the age range where problems accelerate quickly once the shingle system begins to fail. For King Farm and Congressional homeowners, maintenance inspection identifies isolated shingle failures and granule loss patterns that signal when a full replacement should be scheduled before leaks develop.</p>

                {/* AREAS */}
                <h2>Serving All Rockville, MD Communities for Roofing</h2>
                <div className="areas-grid">
                    <span className="area-pill">Twinbrook</span>
                    <span className="area-pill">West End</span>
                    <span className="area-pill">Lincoln Park</span>
                    <span className="area-pill">King Farm</span>
                    <span className="area-pill">Congressional</span>
                    <span className="area-pill">Fallsgrove</span>
                    <span className="area-pill">Rockshire</span>
                    <span className="area-pill">Horizon Hill</span>
                    <span className="area-pill">Hungerford</span>
                    <span className="area-pill">Downtown Rockville</span>
                    <span className="area-pill">North Bethesda</span>
                    <span className="area-pill">Kensington</span>
                    <span className="area-pill">Gaithersburg</span>
                </div>
                <div className="banner">
                    <strong>Rockville Roofing Permit Note:</strong> Most established Rockville neighborhoods — Twinbrook, West End, Lincoln Park — file at the City of Rockville at 111 Maryland Avenue. Some communities with Rockville mailing addresses that are outside city limits file at MoCo DPS at 2425 Reedie Drive. Most King Farm properties are within city limits, but some edge parcels are not. DMV General Contracting Group confirms the correct permit office by parcel at every Rockville consultation.
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions — Roofing Services in Rockville, MD</h2>
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
                        <li><Link href="/service/siding-installation/rockville-md">Siding Installation in Rockville, MD</Link></li>
                        <li><Link href="/service/home-additions/rockville-md">Home Additions in Rockville, MD</Link></li>
                        <li><Link href="/service/electrical-services/rockville-md">Electrical Services in Rockville, MD</Link></li>
                        <li><Link href="/service/kitchen-remodeling/rockville-md">Kitchen Remodeling in Rockville, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling/rockville-md">Bathroom Remodeling in Rockville, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/rockville-md">Basement Remodeling in Rockville, MD</Link></li>
                        <li><Link href="/service/design-build/rockville-md">Design-Build Contractor in Rockville, MD</Link></li>
                        <li><Link href="/service/plumbing-services/rockville-md">Plumbing Services in Rockville, MD</Link></li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="cta-banner">
                    <h2>Ready for a Roofing Project in Rockville?</h2>
                    <p>Schedule a professional roof assessment — Twinbrook mid-century conditions and King Farm HOA coordination both handled. Permit jurisdiction confirmed at the consultation. Free estimate, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default RoofingRockvilleMD;
