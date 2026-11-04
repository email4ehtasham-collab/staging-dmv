'use client';

import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../siding-city-style.scss";
import "./style.scss";

const GaithersburgMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Does my Gaithersburg siding project need a City permit or a County permit?",
            answer: "It depends on your exact address. Gaithersburg is an incorporated city, and homes within the official city limits pull permits through City of Gaithersburg Permitting & Inspections at 31 South Summit Avenue rather than Montgomery County DPS. However, many addresses with a Gaithersburg mailing address and zip code — including parts of North Potomac, Darnestown, Washingtonian, and Montgomery Village — sit in unincorporated Montgomery County and are permitted through MoCo DPS in Wheaton instead. Like-for-like siding replacement often does not require a permit either way, but sheathing repair, insulation additions, or soffit and fascia work can trigger the requirement under whichever jurisdiction actually governs the property. DMV General Contracting Group verifies which authority applies before filing anything, and handles the filing and inspections in-house."
        },
        {
            question: "Do Kentlands and Lakelands require HOA approval for new siding?",
            answer: "Yes. Kentlands and Lakelands are governed by active architectural review boards that require homeowners to submit siding material, profile, and color selections for approval before installation begins — a step that does not exist in older, non-HOA Gaithersburg neighborhoods like Olde Towne, Diamond Farm, or Washingtonian Woods. Rejected or incomplete submissions are a common cause of project delays in these communities. DMV General Contracting Group prepares Kentlands and Lakelands ARC submission packages with manufacturer spec sheets and color samples that match each community's approved materials list, so the review moves through cleanly on the first pass."
        },
        {
            question: "What is the difference between standard vinyl and insulated vinyl for Gaithersburg homes?",
            answer: "Standard vinyl siding has no foam backer — it installs directly over the house wrap and provides no additional insulation value. Insulated vinyl has a rigid foam backer permanently bonded to each panel, adding R-2 to R-4 of continuous insulation to the wall assembly. For Gaithersburg's older split-levels and colonials with minimal original wall insulation, insulated vinyl is the significantly better choice — it improves comfort, reduces energy costs, and is generally pre-approved under Kentlands and Lakelands HOA guidelines as well. The price difference on a full Gaithersburg home is typically $1,500–$3,000."
        },
        {
            question: "How much does siding replacement cost in Gaithersburg, MD?",
            answer: "Siding replacement in Gaithersburg typically runs $10,500–$19,500 for standard vinyl, $12,500–$23,500 for insulated vinyl, $13,500–$26,500 for LP SmartSide, and $15,500–$32,500 for James Hardie fiber cement on an average Gaithersburg home. Sheathing repair adds $2,000–$7,000 where damage is found during removal. Kentlands and Lakelands HOA submission prep is included at no added fee. DMV General Contracting Group provides free, detailed in-home estimates for every Gaithersburg project."
        },
        {
            question: "Is DMV General Contracting Group licensed for siding in Gaithersburg, MD?",
            answer: "Yes. DMV General Contracting Group holds Maryland MHIC license #156178 — required for all home improvement work in Gaithersburg, whether the property falls under City of Gaithersburg or Montgomery County jurisdiction. Fully bonded, comprehensive general liability and workers' compensation insurance, and a 1-year workmanship warranty on every Gaithersburg siding project."
        }
    ];

    return (
        <div className="siding-city-detail-page siding-gaithersburg-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/siding-installation">Siding Installation</Link><span>›</span>
                    Gaithersburg, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Gaithersburg, MD</div>
                    <h1>Siding Installation & Replacement in Gaithersburg, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏛️ City & County Permit Experts</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ Kentlands & Lakelands HOA-Approved</span>
                        <span className="badge">✓ Insulated Vinyl Energy Upgrade Specialists</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">🏛️</div>
                    <div>
                        <h3>Gaithersburg Is the Only MoCo Market Split Between Two Permitting Authorities — and Two HOA-Governed New Urbanism Communities — Which Is Why Local Jurisdiction Knowledge Matters More Here Than Almost Anywhere Else in the County</h3>
                        <p>Gaithersburg is one of the few incorporated cities in Montgomery County, which means some Gaithersburg addresses pull siding permits through City of Gaithersburg Permitting & Inspections at 31 South Summit Avenue, while other addresses that share the same Gaithersburg mailing address and zip code — parts of North Potomac, Darnestown, Washingtonian, and Montgomery Village — are actually unincorporated county land permitted through Montgomery County DPS instead. On top of that, Kentlands and Lakelands operate active homeowners' association architectural review boards that require siding material, profile, and color approval before any installation begins — a step that simply doesn't exist in older, non-HOA neighborhoods like Olde Towne, Diamond Farm, and Washingtonian Woods. Getting either piece wrong costs Gaithersburg homeowners weeks of delay. DMV General Contracting Group verifies which jurisdiction and which HOA rules actually apply to your specific address before a single panel goes up.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a trusted <strong>siding contractor in Gaithersburg, MD</strong>? DMV General Contracting Group installs and replaces all types of exterior siding for Gaithersburg homeowners — James Hardie fiber cement, insulated vinyl, LP SmartSide engineered wood, and standard vinyl — across Gaithersburg's 1960s–1980s split-levels and colonials in Olde Towne, Diamond Farm, and Washingtonian Woods, and its HOA-governed New Urbanism townhome communities in Kentlands and Lakelands. Every project includes old siding removal, sheathing inspection and repair, house wrap installation, HOA architectural review submission where required, soffit and fascia work, and City of Gaithersburg or Montgomery County DPS permit processing depending on your address. MHIC licensed, fully insured, 1-year workmanship warranty. Free in-home estimate. Call +1 240-730-1292.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">🏛️</div><strong>Dual-Jurisdiction Experts</strong><span>We confirm City of Gaithersburg vs. MoCo DPS before we file anything</span></div>
                    <div className="trust-item"><div className="icon">🎨</div><strong>HOA ARC Specialists</strong><span>Kentlands & Lakelands submission packages prepared to pass on the first review</span></div>
                    <div className="trust-item"><div className="icon">🌡️</div><strong>Energy Upgrade Specialists</strong><span>Insulated vinyl on Gaithersburg's older split-levels — meaningful R-value gains</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>Why Gaithersburg Siding Projects Need Local Jurisdiction Expertise</h2>

                <div className="roi-box">
                    <h3>🏛️ The Gaithersburg Permitting & HOA Case — Explained Honestly</h3>
                    <ul>
                        <li><strong>Gaithersburg is genuinely split between two permitting authorities:</strong> Unlike most Montgomery County communities, Gaithersburg is an incorporated municipality with its own Permitting & Inspections department at City Hall. Homes inside the official city limits are permitted by the City. But zip codes like 20877, 20878, 20879, 20882, and 20886 also cover pockets of unincorporated county land — parts of North Potomac, Darnestown, Washingtonian, and Montgomery Village — where Montgomery County DPS is the actual authority. A homeowner filing with the wrong office loses weeks. We confirm jurisdiction against the property record before submitting anything.</li>
                        <li><strong>Kentlands and Lakelands add a second layer — HOA architectural review:</strong> Both communities were built as Traditional Neighborhood Developments with active architectural review boards that govern exterior materials, siding profiles, and approved color palettes. A siding replacement that would need no sign-off in Olde Towne or Diamond Farm requires a full ARC submission — material spec sheets, color samples, sometimes a site plan — in Kentlands or Lakelands, and incomplete submissions are a common cause of stalled projects in these neighborhoods.</li>
                        <li><strong>Gaithersburg's housing stock spans two very different eras:</strong> Older sections like Olde Towne, Diamond Farm, and Washingtonian Woods date to the 1960s–1980s and carry original aluminum or first-generation vinyl that's well past its service life. Kentlands and Lakelands, built from the 1990s onward, have newer siding that's typically failing for different reasons — factory finish fade, seam separation, or storm damage — rather than age alone. The right material recommendation and the right permitting path depend on knowing which Gaithersburg you're actually in.</li>
                        <li><strong>The energy case still applies to Gaithersburg's older homes:</strong> Gaithersburg's postwar-era split-levels and colonials were framed with minimal wall insulation, the same as much of inner Montgomery County. Insulated vinyl or James Hardie with a rigid foam backer adds continuous R-value to these walls during the same project that replaces the aging siding — compounding the curb appeal upgrade with real annual energy savings.</li>
                    </ul>
                </div>

                <h2>Siding Services We Offer in Gaithersburg, MD</h2>
                <div className="check-grid">
                    <span className="check-item">Full Home Siding Replacement</span>
                    <span className="check-item">Aluminum & Old Vinyl Removal</span>
                    <span className="check-item">James Hardie Fiber Cement (HardiePlank)</span>
                    <span className="check-item">Insulated Vinyl Siding</span>
                    <span className="check-item">LP SmartSide Engineered Wood</span>
                    <span className="check-item">Standard Vinyl Siding</span>
                    <span className="check-item">Kentlands & Lakelands HOA/ARC Submission Prep</span>
                    <span className="check-item">House Wrap & Weather Barrier</span>
                    <span className="check-item">Soffit Enclosure & Fascia Replacement</span>
                    <span className="check-item">Trim, Corner Board & Window Casing</span>
                    <span className="check-item">Sheathing Inspection & Repair</span>
                    <span className="check-item">Storm Damage Siding Repair</span>
                    <span className="check-item">Partial Siding Replacement</span>
                    <span className="check-item">City of Gaithersburg & MoCo DPS Permit Processing</span>
                </div>

                <h2>Siding Types for Gaithersburg's Homes — From Olde Towne to Kentlands</h2>

                <div className="material-grid">
                    <div className="material-card">
                        <div className="m-tag">Best ROI</div>
                        <div className="m-icon">🏆</div>
                        <h3>James Hardie Fiber Cement — HardiePlank</h3>
                        <p>The strongest curb appeal upgrade and highest long-term ROI siding choice for Gaithersburg. HardiePlank lap siding in 6-inch or 7-inch exposure installs cleanly on the split-level and colonial elevations found throughout Olde Towne, Diamond Farm, and Washingtonian Woods. ColorPlus factory finish holds 15–20 years without repainting. In Kentlands and Lakelands, HardiePlank is also on the HOA-approved materials list for most sections, making it a straightforward ARC approval when the color matches community guidelines.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 30–50 yrs</span>
                            <span><strong>Gaithersburg Cost:</strong> $15,500 – $32,500+</span>
                        </div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Best Energy ROI</div>
                        <div className="m-icon">🌡️</div>
                        <h3>Insulated Vinyl Siding</h3>
                        <p>Our most frequently recommended alternative to James Hardie for budget-conscious Gaithersburg projects, especially on older Olde Towne and Diamond Farm homes with minimal original wall insulation. Insulated vinyl adds R-2 to R-4 of continuous foam insulation during the same replacement project that updates the exterior appearance — no interior disruption required. Kentlands and Lakelands ARC boards generally approve insulated vinyl in community-standard colors without issue.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 20–40 yrs</span>
                            <span><strong>Gaithersburg Cost:</strong> $12,500 – $23,500+</span>
                        </div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Wood Look</div>
                        <div className="m-icon">🪵</div>
                        <h3>LP SmartSide Engineered Wood</h3>
                        <p>A strong middle option for Gaithersburg homeowners who want a wood aesthetic without cedar's maintenance demands. LP SmartSide's wood texture reads well on Washingtonian Woods and Diamond Farm colonials, and its grain profiles are frequently on Kentlands' approved materials list for sections built to evoke traditional wood-sided architecture. Paint intervals of 8–10 years versus cedar's 4–7.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 25–35 yrs</span>
                            <span><strong>Gaithersburg Cost:</strong> $13,500 – $26,500+</span>
                        </div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Budget Option</div>
                        <div className="m-icon">🏠</div>
                        <h3>Standard Vinyl Siding</h3>
                        <p>Modern standard vinyl is durable, low-maintenance, and available in a wide range of profiles and colors — a practical choice where cost is the priority and energy improvement is secondary. Standard vinyl does not improve wall insulation; for Gaithersburg's older, poorly insulated homes we recommend upgrading to insulated vinyl for a modest cost difference. In Kentlands and Lakelands, standard vinyl color options are more limited under HOA guidelines than insulated vinyl or James Hardie.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 20–40 yrs</span>
                            <span><strong>Gaithersburg Cost:</strong> $10,500 – $19,500+</span>
                        </div>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Our Recommendation for Gaithersburg:</strong> For Olde Towne, Diamond Farm, and Washingtonian Woods homeowners focused on maximum ROI, <strong>James Hardie HardiePlank</strong> delivers the strongest curb appeal upgrade with a straightforward permit path. For Kentlands and Lakelands homeowners, we lead with whichever material and color combination is already on your section's <strong>HOA-approved list</strong> to keep the ARC review simple. For budget-first projects anywhere in Gaithersburg, <strong>insulated vinyl</strong> is our recommended alternative for its energy performance and lower cost.
                </div>

                <h2>Siding Material Comparison for Gaithersburg, MD Homes</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="compare-table">
                            <thead>
                                <tr><th>Material</th><th>Durability</th><th>Maintenance</th><th>Energy Improvement</th><th>Kentlands/Lakelands HOA</th><th>Cost</th></tr>
                            </thead>
                            <tbody>
                                <tr className="top-pick"><td>James Hardie Fiber Cement ⭐</td><td>Excellent — 30–50 yrs</td><td>Low — 15–20 yr factory finish</td><td>Good with rigid foam</td><td>Usually pre-approved</td><td>$15.5K – $32.5K+</td></tr>
                                <tr><td>Insulated Vinyl</td><td>Good — 20–40 yrs</td><td>Very low — wash only</td><td>Excellent — R-2 to R-4</td><td>Usually pre-approved</td><td>$12.5K – $23.5K+</td></tr>
                                <tr><td>LP SmartSide</td><td>Good — 25–35 yrs</td><td>Medium — 8–10 yr repaint</td><td>Moderate</td><td>Often pre-approved</td><td>$13.5K – $26.5K+</td></tr>
                                <tr><td>Standard Vinyl</td><td>Good — 20–40 yrs</td><td>Very low — wash only</td><td>Minimal — no foam backer</td><td>Limited color options</td><td>$10.5K – $19.5K+</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Signs Your Gaithersburg Home Needs New Siding</h2>

                <div className="signs-grid">
                    <div className="sign-card"><div className="s-icon">🔧</div><h3>Oxidized Aluminum</h3><p>Chalky white oxidation, dents, or paint failure on original 1960s–80s aluminum in Olde Towne and Diamond Farm — at or past end of service life.</p></div>
                    <div className="sign-card"><div className="s-icon">🔍</div><h3>Cracking or Separating Vinyl</h3><p>Cracks, brittleness, or seams pulling apart — common on both older Washingtonian Woods vinyl and first-generation Kentlands siding.</p></div>
                    <div className="sign-card"><div className="s-icon">🎨</div><h3>Severe Color Fade</h3><p>Washed-out, chalky color that cleaning cannot restore — the siding surface has degraded beyond cosmetic remedy.</p></div>
                    <div className="sign-card"><div className="s-icon">💧</div><h3>Interior Water Stains</h3><p>Water marks on interior walls near exterior surfaces — active infiltration at failed siding seams or trim.</p></div>
                    <div className="sign-card"><div className="s-icon">🌡️</div><h3>Cold Exterior Walls in Winter</h3><p>Interior wall surfaces cold to the touch — typical in Gaithersburg's older homes with minimal original wall insulation.</p></div>
                    <div className="sign-card"><div className="s-icon">💨</div><h3>Gaps at Split-Level Transitions</h3><p>Separated or open siding at floor-level transitions — the most common failure point on Gaithersburg's split-level homes.</p></div>
                </div>

                <h2>Navigating Gaithersburg's Dual Permitting System</h2>

                <div className="highlight">
                    <p>🏛️ <strong>The Gaithersburg permitting reality:</strong> Because Gaithersburg is an incorporated city surrounded by, and interwoven with, unincorporated Montgomery County, two homes on the same street can technically fall under different permitting authorities — City of Gaithersburg Permitting & Inspections at 31 South Summit Avenue, or Montgomery County DPS in Wheaton. Like-for-like siding replacement typically does not require a permit under either jurisdiction, but sheathing repair, rigid foam insulation addition, and soffit or fascia reconfiguration can trigger the requirement — and the correct office to file with depends entirely on whether your specific parcel sits inside the city limits. DMV General Contracting Group checks jurisdiction against the property record before filing, and where Kentlands or Lakelands HOA approval is also required, we prepare that ARC submission alongside the permit paperwork so nothing holds up the project start date.</p>
                </div>

                <h2>Our Siding Installation Process in Gaithersburg</h2>

                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free In-Home Estimate — Jurisdiction & HOA Check Included</h3>
                            <p>We visit your Gaithersburg home and assess the full exterior — siding condition on all elevations, age and failure mode, sheathing condition at exposed edges, and insulation improvement opportunity. We also confirm whether your address falls under City of Gaithersburg or Montgomery County DPS permitting, and whether Kentlands or Lakelands HOA architectural review applies. Material samples and color options presented at this appointment. No charge, no obligation.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Material Selection — Matched to Jurisdiction and HOA Rules</h3>
                            <p>We bring James Hardie ColorPlus samples, insulated vinyl profiles and colors, LP SmartSide options, and standard vinyl to your Gaithersburg home. For Kentlands and Lakelands, we lead with materials and colors already on your section's HOA-approved list to streamline review. For Olde Towne, Diamond Farm, and Washingtonian Woods, we present each material with an honest cost, durability, and energy comparison.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>HOA Submission & Permit Filing</h3>
                            <p>Where Kentlands or Lakelands ARC approval is required, we prepare and submit the full package — material spec sheets, color samples, and any requested site details. In parallel, we confirm and file for a City of Gaithersburg or Montgomery County DPS permit, whichever jurisdiction actually governs your property, when the project scope requires one.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Old Siding Removal & Sheathing Inspection</h3>
                            <p>Existing aluminum or vinyl removed carefully. Sheathing condition assessed after removal, with damaged sections replaced before house wrap goes on. Lead-safe disposal practices used on pre-1978 Gaithersburg homes where lead paint in the original siding finish is possible.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>House Wrap, Insulation, Siding & Trim Installation</h3>
                            <p>Continuous weather-resistant barrier installed across all elevations, individually flashed at every window, door, and penetration. Rigid foam insulation installed where the scope includes an energy upgrade. New siding installed with split-level transitions, soffit returns, and wall plane offsets detailed correctly, plus all corner boards, window casings, and fascia finished to a consistent standard.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Final Inspection, Caulking & Exterior Walkthrough</h3>
                            <p>Every seam, transition, and penetration inspected. All exterior joints caulked with flexible, paintable exterior-grade sealant. Full debris removal. Exterior walkthrough on every elevation with you before project close. Written warranty. Permit and HOA sign-off closed where applicable.</p>
                        </div>
                    </div>
                </div>

                <h2>Siding Replacement Cost in Gaithersburg, MD</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr><th>Siding Material</th><th>Typical Cost — Gaithersburg Home</th><th>Per Sq Ft (Installed)</th><th>Notes</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Standard Vinyl</td><td>$10,500 – $19,500+</td><td>$4 – $8 / sq ft</td><td>Limited HOA color options in Kentlands/Lakelands</td></tr>
                                <tr><td>Insulated Vinyl</td><td>$12,500 – $23,500+</td><td>$6 – $10 / sq ft</td><td>Appearance + energy savings; usually HOA pre-approved</td></tr>
                                <tr><td>LP SmartSide</td><td>$13,500 – $26,500+</td><td>$7 – $12 / sq ft</td><td>Wood character; often HOA pre-approved</td></tr>
                                <tr><td>James Hardie Fiber Cement</td><td>$15,500 – $32,500+</td><td>$8 – $14 / sq ft</td><td>Premium curb appeal; usually HOA pre-approved</td></tr>
                                <tr><td>Sheathing Repair (if needed)</td><td>$2,000 – $7,000+</td><td>Depends on damage extent</td><td>Required for durable installation</td></tr>
                                <tr><td>HOA ARC Submission Prep (Kentlands/Lakelands)</td><td>Included at no added fee</td><td>—</td><td>Spec sheets, samples & filing handled in-house</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Gaithersburg permitting math:</strong> On a full siding replacement, confirming the correct permitting authority up front typically saves 1–3 weeks compared to filing with the wrong office and having to refile. On Kentlands or Lakelands projects, a complete first-pass HOA submission commonly saves an additional 2–4 weeks compared to a resubmission after a rejected or incomplete application. We build both checks into every Gaithersburg estimate at no added cost.
                </div>

                <h2>What Gaithersburg Homeowners Say About DMV General Contracting Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We replaced the original aluminum siding on our 1970s Diamond Farm split-level with James Hardie HardiePlank in Iron Gray. DMV General Contracting Group handled the removal, found and replaced damaged sheathing on the rear elevation, installed house wrap, and confirmed our address was actually unincorporated county land — so the permit went to MoCo DPS, not the City, which we would not have known on our own. Project done in 9 days."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Diamond Farm, Gaithersburg MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our Kentlands townhome needed new siding and we were dreading the HOA review process after hearing horror stories from neighbors. DMV General Contracting Group put together the full ARC package with the exact HardiePlank color already on our section's approved list, and it was approved on the first submission. The installation itself was clean and fast once approval came through."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Kentlands, Gaithersburg MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We went with insulated vinyl on our Washingtonian Woods colonial for the energy efficiency improvement — our heating bills have always been high in that older section. The R-value improvement was explained clearly at the estimate, and after the first winter our gas bill was noticeably lower."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Washingtonian Woods, Gaithersburg MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We had storm damage on our Olde Towne home's east elevation. DMV General Contracting Group matched the existing vinyl profile and color, replaced the damaged section, and confirmed a City of Gaithersburg permit wasn't required for the partial scope — they told us that up front instead of charging for an unnecessary filing. Two days from start to finish."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Olde Towne, Gaithersburg MD</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Gaithersburg homeowners trust DMV General Contracting Group to correctly identify whether City of Gaithersburg or Montgomery County DPS permitting applies, prepare Kentlands and Lakelands HOA submissions that pass on the first review, and recommend materials calibrated to each neighborhood's age and energy needs.</p>
                </div>

                <div className="cta-banner">
                    <h2>Get a Free Siding Estimate for Your Gaithersburg Home</h2>
                    <p>Our team will visit your Gaithersburg home, confirm the correct permitting jurisdiction and any HOA requirements, assess your existing siding, and provide a detailed estimate — at no cost, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Siding Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All Gaithersburg, MD Neighborhoods for Siding Installation</h2>
                <div className="areas-grid">
                    <span className="area-pill">Olde Towne</span>
                    <span className="area-pill">Diamond Farm</span>
                    <span className="area-pill">Washingtonian Woods</span>
                    <span className="area-pill">Kentlands</span>
                    <span className="area-pill">Lakelands</span>
                    <span className="area-pill">Flower Hill</span>
                    <span className="area-pill">Quince Orchard Park</span>
                    <span className="area-pill">Crown / Crown Farm</span>
                    <span className="area-pill">Montgomery Village Border</span>
                </div>

                <h2>Frequently Asked Questions — Siding Installation in Gaithersburg, MD</h2>
                <Accordion className="faq-list" defaultActiveKey="0">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="internal-links">
                    <h2>Explore Our Other Services in Gaithersburg, MD</h2>
                    <ul>
                        <li><Link href="/service/kitchen-remodeling/gaithersburg-md">Kitchen Remodeling in Gaithersburg, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling/gaithersburg-md">Bathroom Remodeling in Gaithersburg, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/gaithersburg-md">Basement Remodeling in Gaithersburg, MD</Link></li>
                        <li><Link href="/service/adu/gaithersburg-md">ADU Construction in Gaithersburg, MD</Link></li>
                        <li><Link href="/service/decks/gaithersburg-md">Deck Building in Gaithersburg, MD</Link></li>
                        <li><Link href="/service/flooring-remodeling/gaithersburg-md">Flooring Installation in Gaithersburg, MD</Link></li>
                        <li><Link href="/service/design-build/gaithersburg-md">Design-Build Contractor in Gaithersburg, MD</Link></li>
                        <li><Link href="/service/roofing">Roofing in Gaithersburg, MD</Link></li>
                    </ul>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Get Started on Your Gaithersburg Siding Project?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free estimate. We confirm your correct permitting jurisdiction, handle Kentlands and Lakelands HOA submissions, and detail split-level transitions correctly. MHIC licensed. 1-year warranty.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Siding Estimate in Gaithersburg →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default GaithersburgMD;