'use client';

import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../siding-city-style.scss";
import "./style.scss";

const RockvilleMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Does my Rockville siding project need a City permit or a County permit?",
            answer: "It depends on your exact address. Rockville is an incorporated city with its own Community Planning and Development Services Department, and homes inside the official city limits pull building permits from City of Rockville Inspection Services at 111 Maryland Avenue rather than Montgomery County DPS. But many properties with a Rockville mailing address and zip code — including parts of North Bethesda, Aspen Hill, and Potomac — sit in unincorporated Montgomery County and are permitted through MoCo DPS in Wheaton instead. Like-for-like siding replacement often does not require a permit under either jurisdiction, but sheathing repair, insulation additions, or soffit and fascia reconfiguration can trigger the requirement. DMV General Contracting Group verifies which authority applies before filing anything, and manages the filing and inspections in-house."
        },
        {
            question: "Does King Farm require architectural approval for new siding?",
            answer: "Yes. King Farm is governed by the King Farm Citizens Assembly, whose Architectural Design Trust committee reviews and approves exterior changes, including siding material, profile, and color, before installation begins. Design review applications are due at least seven days ahead of the committee's monthly meeting, which means timing the submission correctly matters for keeping a project on schedule. Fallsgrove's planned-community HOA has similar exterior guidelines. Neither requirement exists in older, non-HOA Rockville neighborhoods like Twinbrook, Woodley Gardens, or College Gardens. DMV General Contracting Group prepares King Farm ADT submissions with manufacturer spec sheets and color samples timed to the monthly review cycle."
        },
        {
            question: "What is the difference between standard vinyl and insulated vinyl for Rockville homes?",
            answer: "Standard vinyl siding has no foam backer — it installs directly over the house wrap and provides no additional insulation value. Insulated vinyl has a rigid foam backer permanently bonded to each panel, adding R-2 to R-4 of continuous insulation to the wall assembly. For Rockville's older split-levels and colonials with minimal original wall insulation, insulated vinyl is the significantly better choice — it improves comfort, reduces energy costs, and is generally acceptable under King Farm and Fallsgrove design guidelines as well. The price difference on a full Rockville home is typically $1,500–$3,000."
        },
        {
            question: "How much does siding replacement cost in Rockville, MD?",
            answer: "Siding replacement in Rockville typically runs $10,500–$19,500 for standard vinyl, $12,500–$23,500 for insulated vinyl, $13,500–$26,500 for LP SmartSide, and $15,500–$32,500 for James Hardie fiber cement on an average Rockville home. Sheathing repair adds $2,000–$7,000 where damage is found during removal. King Farm and Fallsgrove HOA submission prep is included at no added fee. DMV General Contracting Group provides free, detailed in-home estimates for every Rockville project."
        },
        {
            question: "Is DMV General Contracting Group licensed for siding in Rockville, MD?",
            answer: "Yes. DMV General Contracting Group holds Maryland MHIC license #156178 — required for all home improvement work in Rockville, whether the property falls under City of Rockville or Montgomery County jurisdiction. Fully bonded, comprehensive general liability and workers' compensation insurance, and a 1-year workmanship warranty on every Rockville siding project."
        }
    ];

    return (
        <div className="siding-city-detail-page siding-rockville-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/siding-installation">Siding Installation</Link><span>›</span>
                    Rockville, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Rockville, MD</div>
                    <h1>Siding Installation & Replacement in Rockville, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏛️ City & County Permit Experts</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ King Farm ADT-Approved</span>
                        <span className="badge">✓ Insulated Vinyl Energy Upgrade Specialists</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">🏛️</div>
                    <div>
                        <h3>Rockville Is a City Government Seat Split Between Two Permitting Authorities — and Home to a Planned Community with One of the DMV's Most Structured Architectural Review Processes — Which Is Why Local Jurisdiction Knowledge Matters More Here Than in Most of MoCo</h3>
                        <p>Rockville is the county seat and one of Montgomery County's few incorporated cities, which means homes inside the official city limits pull siding permits through City of Rockville Community Planning and Development Services at 111 Maryland Avenue, while properties that share a Rockville mailing address and zip code — parts of North Bethesda, Aspen Hill, and Potomac — are actually unincorporated county land permitted through Montgomery County DPS in Wheaton instead. Layered on top of that, King Farm operates under the King Farm Citizens Assembly's Architectural Design Trust, a committee that meets monthly and requires siding material, profile, and color approval — with applications due at least seven days before the review meeting — before any installation can begin. Fallsgrove's planned-community HOA carries similar exterior guidelines. Getting either piece wrong costs Rockville homeowners weeks. DMV General Contracting Group verifies which jurisdiction and which HOA calendar actually applies to your address before a single panel goes up.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a trusted <strong>siding contractor in Rockville, MD</strong>? DMV General Contracting Group installs and replaces all types of exterior siding for Rockville homeowners — James Hardie fiber cement, insulated vinyl, LP SmartSide engineered wood, and standard vinyl — across Rockville's 1950s–1970s split-levels and colonials in Twinbrook, Woodley Gardens, and College Gardens, and its planned HOA communities in King Farm and Fallsgrove. Every project includes old siding removal, sheathing inspection and repair, house wrap installation, King Farm Architectural Design Trust submission where required, soffit and fascia work, and City of Rockville or Montgomery County DPS permit processing depending on your address. MHIC licensed, fully insured, 1-year workmanship warranty. Free in-home estimate. Call +1 240-730-1292.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">🏛️</div><strong>Dual-Jurisdiction Experts</strong><span>We confirm City of Rockville vs. MoCo DPS before we file anything</span></div>
                    <div className="trust-item"><div className="icon">🎨</div><strong>King Farm ADT Specialists</strong><span>Design review packages timed to the monthly committee meeting</span></div>
                    <div className="trust-item"><div className="icon">🌡️</div><strong>Energy Upgrade Specialists</strong><span>Insulated vinyl on Rockville's older split-levels — meaningful R-value gains</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>Why Rockville Siding Projects Need Local Jurisdiction Expertise</h2>

                <div className="roi-box">
                    <h3>🏛️ The Rockville Permitting & HOA Case — Explained Honestly</h3>
                    <ul>
                        <li><strong>Rockville is genuinely split between two permitting authorities:</strong> As the Montgomery County seat and an incorporated municipality, Rockville runs its own Community Planning and Development Services Department for building permits. Homes inside the official city limits are permitted by the City. But Rockville zip codes like 20850 through 20855 also cover pockets of unincorporated county land — parts of North Bethesda, Aspen Hill, and Potomac — where Montgomery County DPS is the actual authority. A homeowner filing with the wrong office loses weeks. We confirm jurisdiction against the property record before submitting anything.</li>
                        <li><strong>King Farm runs one of the DMV's most structured architectural review processes:</strong> King Farm is governed by the King Farm Citizens Assembly, whose Architectural Design Trust committee meets monthly and reviews design applications for exterior changes, including siding. Applications are due at least seven days ahead of the meeting date — miss that window and the project waits another full month for the next review cycle. Fallsgrove's HOA carries comparable exterior guidelines. Neither step exists in older, non-HOA neighborhoods like Twinbrook, Woodley Gardens, or College Gardens.</li>
                        <li><strong>Rockville's housing stock spans several distinct eras:</strong> Older sections like Twinbrook, Woodley Gardens, and College Gardens date to the 1950s–1970s and carry original aluminum or first-generation vinyl well past its service life. King Farm and Fallsgrove, built primarily from the late 1990s through the mid-2000s, have newer construction where siding failure tends to come from factory finish fade, seam separation, or storm damage rather than age alone. The right material recommendation and the right approval path depend on knowing which Rockville you're actually in.</li>
                        <li><strong>The energy case still applies to Rockville's older homes:</strong> Rockville's postwar-era split-levels and colonials were framed with minimal wall insulation, consistent with much of inner Montgomery County. Insulated vinyl or James Hardie with a rigid foam backer adds continuous R-value to these walls during the same project that replaces the aging siding — compounding the curb appeal upgrade with real annual energy savings.</li>
                    </ul>
                </div>

                <h2>Siding Services We Offer in Rockville, MD</h2>
                <div className="check-grid">
                    <span className="check-item">Full Home Siding Replacement</span>
                    <span className="check-item">Aluminum & Old Vinyl Removal</span>
                    <span className="check-item">James Hardie Fiber Cement (HardiePlank)</span>
                    <span className="check-item">Insulated Vinyl Siding</span>
                    <span className="check-item">LP SmartSide Engineered Wood</span>
                    <span className="check-item">Standard Vinyl Siding</span>
                    <span className="check-item">King Farm ADT & Fallsgrove HOA Submission Prep</span>
                    <span className="check-item">House Wrap & Weather Barrier</span>
                    <span className="check-item">Soffit Enclosure & Fascia Replacement</span>
                    <span className="check-item">Trim, Corner Board & Window Casing</span>
                    <span className="check-item">Sheathing Inspection & Repair</span>
                    <span className="check-item">Storm Damage Siding Repair</span>
                    <span className="check-item">Partial Siding Replacement</span>
                    <span className="check-item">City of Rockville & MoCo DPS Permit Processing</span>
                </div>

                <h2>Siding Types for Rockville's Homes — From Twinbrook to King Farm</h2>

                <div className="material-grid">
                    <div className="material-card">
                        <div className="m-tag">Best ROI</div>
                        <div className="m-icon">🏆</div>
                        <h3>James Hardie Fiber Cement — HardiePlank</h3>
                        <p>The strongest curb appeal upgrade and highest long-term ROI siding choice for Rockville. HardiePlank lap siding in 6-inch or 7-inch exposure installs cleanly on the split-level and colonial elevations found throughout Twinbrook, Woodley Gardens, and College Gardens. ColorPlus factory finish holds 15–20 years without repainting. In King Farm, HardiePlank is frequently on the Architectural Design Trust's approved materials list, making it a straightforward review when the color matches community guidelines.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 30–50 yrs</span>
                            <span><strong>Rockville Cost:</strong> $15,500 – $32,500+</span>
                        </div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Best Energy ROI</div>
                        <div className="m-icon">🌡️</div>
                        <h3>Insulated Vinyl Siding</h3>
                        <p>Our most frequently recommended alternative to James Hardie for budget-conscious Rockville projects, especially on older Twinbrook and Woodley Gardens homes with minimal original wall insulation. Insulated vinyl adds R-2 to R-4 of continuous foam insulation during the same replacement project that updates the exterior appearance — no interior disruption required. King Farm's ADT and Fallsgrove's HOA generally approve insulated vinyl in community-standard colors without issue.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 20–40 yrs</span>
                            <span><strong>Rockville Cost:</strong> $12,500 – $23,500+</span>
                        </div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Wood Look</div>
                        <div className="m-icon">🪵</div>
                        <h3>LP SmartSide Engineered Wood</h3>
                        <p>A strong middle option for Rockville homeowners who want a wood aesthetic without cedar's maintenance demands. LP SmartSide's wood texture reads well on Woodley Gardens and College Gardens colonials, and its grain profiles are frequently acceptable under King Farm and Fallsgrove design guidelines for sections built to evoke traditional wood-sided architecture. Paint intervals of 8–10 years versus cedar's 4–7.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 25–35 yrs</span>
                            <span><strong>Rockville Cost:</strong> $13,500 – $26,500+</span>
                        </div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Budget Option</div>
                        <div className="m-icon">🏠</div>
                        <h3>Standard Vinyl Siding</h3>
                        <p>Modern standard vinyl is durable, low-maintenance, and available in a wide range of profiles and colors — a practical choice where cost is the priority and energy improvement is secondary. Standard vinyl does not improve wall insulation; for Rockville's older, poorly insulated homes we recommend upgrading to insulated vinyl for a modest cost difference. In King Farm, standard vinyl color options are more limited under Architectural Design Trust guidelines than insulated vinyl or James Hardie.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 20–40 yrs</span>
                            <span><strong>Rockville Cost:</strong> $10,500 – $19,500+</span>
                        </div>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Our Recommendation for Rockville:</strong> For Twinbrook, Woodley Gardens, and College Gardens homeowners focused on maximum ROI, <strong>James Hardie HardiePlank</strong> delivers the strongest curb appeal upgrade with a straightforward permit path. For King Farm and Fallsgrove homeowners, we lead with whichever material and color combination is already familiar to the community's design review committee, timed to the monthly meeting schedule. For budget-first projects anywhere in Rockville, <strong>insulated vinyl</strong> is our recommended alternative for its energy performance and lower cost.
                </div>

                <h2>Siding Material Comparison for Rockville, MD Homes</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="compare-table">
                            <thead>
                                <tr><th>Material</th><th>Durability</th><th>Maintenance</th><th>Energy Improvement</th><th>King Farm/Fallsgrove HOA</th><th>Cost</th></tr>
                            </thead>
                            <tbody>
                                <tr className="top-pick"><td>James Hardie Fiber Cement ⭐</td><td>Excellent — 30–50 yrs</td><td>Low — 15–20 yr factory finish</td><td>Good with rigid foam</td><td>Usually pre-approved</td><td>$15.5K – $32.5K+</td></tr>
                                <tr><td>Insulated Vinyl</td><td>Good — 20–40 yrs</td><td>Very low — wash only</td><td>Excellent — R-2 to R-4</td><td>Usually pre-approved</td><td>$12.5K – $23.5K+</td></tr>
                                <tr><td>LP SmartSide</td><td>Good — 25–35 yrs</td><td>Medium — 8–10 yr repaint</td><td>Moderate</td><td>Often approved</td><td>$13.5K – $26.5K+</td></tr>
                                <tr><td>Standard Vinyl</td><td>Good — 20–40 yrs</td><td>Very low — wash only</td><td>Minimal — no foam backer</td><td>Limited color options</td><td>$10.5K – $19.5K+</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Signs Your Rockville Home Needs New Siding</h2>

                <div className="signs-grid">
                    <div className="sign-card"><div className="s-icon">🔧</div><h3>Oxidized Aluminum</h3><p>Chalky white oxidation, dents, or paint failure on original 1950s–70s aluminum in Twinbrook and Woodley Gardens — at or past end of service life.</p></div>
                    <div className="sign-card"><div className="s-icon">🔍</div><h3>Cracking or Separating Vinyl</h3><p>Cracks, brittleness, or seams pulling apart — common on both older College Gardens vinyl and first-generation King Farm siding.</p></div>
                    <div className="sign-card"><div className="s-icon">🎨</div><h3>Severe Color Fade</h3><p>Washed-out, chalky color that cleaning cannot restore — the siding surface has degraded beyond cosmetic remedy.</p></div>
                    <div className="sign-card"><div className="s-icon">💧</div><h3>Interior Water Stains</h3><p>Water marks on interior walls near exterior surfaces — active infiltration at failed siding seams or trim.</p></div>
                    <div className="sign-card"><div className="s-icon">🌡️</div><h3>Cold Exterior Walls in Winter</h3><p>Interior wall surfaces cold to the touch — typical in Rockville's older homes with minimal original wall insulation.</p></div>
                    <div className="sign-card"><div className="s-icon">💨</div><h3>Gaps at Split-Level Transitions</h3><p>Separated or open siding at floor-level transitions — the most common failure point on Rockville's split-level homes.</p></div>
                </div>

                <h2>Navigating Rockville's Dual Permitting System</h2>

                <div className="highlight">
                    <p>🏛️ <strong>The Rockville permitting reality:</strong> Because Rockville is an incorporated city surrounded by, and interwoven with, unincorporated Montgomery County, two homes with the same Rockville mailing address can fall under different permitting authorities — City of Rockville Community Planning and Development Services at 111 Maryland Avenue, or Montgomery County DPS in Wheaton. Like-for-like siding replacement typically does not require a permit under either jurisdiction, but sheathing repair, rigid foam insulation addition, and soffit or fascia reconfiguration can trigger the requirement — and the correct office to file with depends entirely on whether your specific parcel sits inside the city limits. DMV General Contracting Group checks jurisdiction against the property record before filing, and where King Farm ADT or Fallsgrove HOA approval is also required, we time that submission to the community's review calendar so nothing holds up the project start date.</p>
                </div>

                <h2>Our Siding Installation Process in Rockville</h2>

                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free In-Home Estimate — Jurisdiction & HOA Check Included</h3>
                            <p>We visit your Rockville home and assess the full exterior — siding condition on all elevations, age and failure mode, sheathing condition at exposed edges, and insulation improvement opportunity. We also confirm whether your address falls under City of Rockville or Montgomery County DPS permitting, and whether King Farm or Fallsgrove architectural review applies. Material samples and color options presented at this appointment. No charge, no obligation.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Material Selection — Matched to Jurisdiction and HOA Rules</h3>
                            <p>We bring James Hardie ColorPlus samples, insulated vinyl profiles and colors, LP SmartSide options, and standard vinyl to your Rockville home. For King Farm and Fallsgrove, we lead with materials and colors familiar to each community's review committee to streamline approval. For Twinbrook, Woodley Gardens, and College Gardens, we present each material with an honest cost, durability, and energy comparison.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>HOA Submission & Permit Filing</h3>
                            <p>Where King Farm ADT or Fallsgrove HOA approval is required, we prepare and submit the full design review package — material spec sheets, color samples, and any requested details — timed at least seven days ahead of the relevant meeting. In parallel, we confirm and file for a City of Rockville or Montgomery County DPS permit, whichever jurisdiction actually governs your property, when the project scope requires one.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Old Siding Removal & Sheathing Inspection</h3>
                            <p>Existing aluminum or vinyl removed carefully. Sheathing condition assessed after removal, with damaged sections replaced before house wrap goes on. Lead-safe disposal practices used on pre-1978 Rockville homes where lead paint in the original siding finish is possible.</p>
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

                <h2>Siding Replacement Cost in Rockville, MD</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr><th>Siding Material</th><th>Typical Cost — Rockville Home</th><th>Per Sq Ft (Installed)</th><th>Notes</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Standard Vinyl</td><td>$10,500 – $19,500+</td><td>$4 – $8 / sq ft</td><td>Limited HOA color options in King Farm</td></tr>
                                <tr><td>Insulated Vinyl</td><td>$12,500 – $23,500+</td><td>$6 – $10 / sq ft</td><td>Appearance + energy savings; usually HOA pre-approved</td></tr>
                                <tr><td>LP SmartSide</td><td>$13,500 – $26,500+</td><td>$7 – $12 / sq ft</td><td>Wood character; often HOA pre-approved</td></tr>
                                <tr><td>James Hardie Fiber Cement</td><td>$15,500 – $32,500+</td><td>$8 – $14 / sq ft</td><td>Premium curb appeal; usually HOA pre-approved</td></tr>
                                <tr><td>Sheathing Repair (if needed)</td><td>$2,000 – $7,000+</td><td>Depends on damage extent</td><td>Required for durable installation</td></tr>
                                <tr><td>King Farm ADT / Fallsgrove HOA Submission Prep</td><td>Included at no added fee</td><td>—</td><td>Spec sheets, samples & filing handled in-house</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Rockville permitting math:</strong> On a full siding replacement, confirming the correct permitting authority up front typically saves 1–3 weeks compared to filing with the wrong office and having to refile. On King Farm projects, missing the seven-day-ahead submission deadline for the monthly Architectural Design Trust meeting pushes the review to the following month — commonly a 3–4 week delay. We build both checks into the project timeline for every Rockville estimate at no added cost.
                </div>

                <h2>What Rockville Homeowners Say About DMV General Contracting Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We replaced the original aluminum siding on our 1960s Twinbrook split-level with James Hardie HardiePlank in Iron Gray. DMV General Contracting Group handled the removal, found and replaced damaged sheathing on the rear elevation, installed house wrap, and confirmed our address was actually inside city limits — so the permit went to City of Rockville, not the county, which we wouldn't have sorted out ourselves. Project done in 9 days."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Twinbrook, Rockville MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our King Farm townhome needed new siding and we were nervous about the Architectural Design Trust process after hearing it could take months. DMV General Contracting Group got the design review package in a full week ahead of the committee's monthly meeting with the exact HardiePlank color already familiar to the community, and it was approved on the first review. Installation was quick once approval came through."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">King Farm, Rockville MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We went with insulated vinyl on our Woodley Gardens colonial for the energy efficiency improvement — our heating bills have always been high in that older section. The R-value improvement was explained clearly at the estimate, and after the first winter our gas bill was noticeably lower."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Woodley Gardens, Rockville MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We had storm damage on our College Gardens home's east elevation. DMV General Contracting Group matched the existing vinyl profile and color, replaced the damaged section, and confirmed a City of Rockville permit wasn't required for the partial scope — they told us that up front instead of charging for an unnecessary filing. Two days from start to finish."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">College Gardens, Rockville MD</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Rockville homeowners trust DMV General Contracting Group to correctly identify whether City of Rockville or Montgomery County DPS permitting applies, prepare King Farm and Fallsgrove HOA submissions timed to each community's review calendar, and recommend materials calibrated to each neighborhood's age and energy needs.</p>
                </div>

                <div className="cta-banner">
                    <h2>Get a Free Siding Estimate for Your Rockville Home</h2>
                    <p>Our team will visit your Rockville home, confirm the correct permitting jurisdiction and any HOA requirements, assess your existing siding, and provide a detailed estimate — at no cost, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Siding Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All Rockville, MD Neighborhoods for Siding Installation</h2>
                <div className="areas-grid">
                    <span className="area-pill">Twinbrook</span>
                    <span className="area-pill">Woodley Gardens</span>
                    <span className="area-pill">College Gardens</span>
                    <span className="area-pill">King Farm</span>
                    <span className="area-pill">Fallsgrove</span>
                    <span className="area-pill">West End</span>
                    <span className="area-pill">Lincoln Park</span>
                    <span className="area-pill">Hungerford</span>
                    <span className="area-pill">Rockville Town Center</span>
                </div>

                <h2>Frequently Asked Questions — Siding Installation in Rockville, MD</h2>
                <Accordion className="faq-list" defaultActiveKey="0">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="internal-links">
                    <h2>Explore Our Other Services in Rockville, MD</h2>
                    <ul>
                        <li><Link href="/service/kitchen-remodeling/rockville-md">Kitchen Remodeling in Rockville, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling/rockville-md">Bathroom Remodeling in Rockville, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/rockville-md">Basement Remodeling in Rockville, MD</Link></li>
                        <li><Link href="/service/adu/rockville-md">ADU Construction in Rockville, MD</Link></li>
                        <li><Link href="/service/decks/rockville-md">Deck Building in Rockville, MD</Link></li>
                        <li><Link href="/service/flooring-remodeling/rockville-md">Flooring Installation in Rockville, MD</Link></li>
                        <li><Link href="/service/design-build/rockville-md">Design-Build Contractor in Rockville, MD</Link></li>
                        <li><Link href="/service/roofing">Roofing in Rockville, MD</Link></li>
                    </ul>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Get Started on Your Rockville Siding Project?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free estimate. We confirm your correct permitting jurisdiction, handle King Farm and Fallsgrove HOA submissions, and detail split-level transitions correctly. MHIC licensed. 1-year warranty.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Siding Estimate in Rockville →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default RockvilleMD;