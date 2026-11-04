'use client';

import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../siding-city-style.scss";
import "./style.scss";

const KensingtonMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Does my Kensington siding project require a Town of Kensington building permit?",
            answer: "There's no universal yes or no answer — it depends on the scope. Like-for-like siding replacement on a Kensington home often does not require a permit from the Town of Kensington Permits Office at 3710 Mitchell Street. But projects that widen or reconfigure openings, add rigid foam insulation beyond a half-inch, structurally alter a gable or dormer, or modify building shape frequently do require a Town permit and inspections. The Town's small staff and historic character mean applications are reviewed carefully, and adding work mid-project without scope changes can trigger additional review. DMV General Contracting Group tells you up front at the estimate whether your specific Kensington scope needs a permit, handles the 3710 Mitchell Street filing in-house if it does, and never pads the scope of work if it doesn't."
        },
        {
            question: "What special rules apply to historic Kensington homes when installing new siding?",
            answer: "Kensington's older housing stock — the craftsman bungalows and foursquares built after the 1891 railroad service and the mid-century annex homes built after World War II — is exactly what gives the Town its character, and the Town is protective of it. Repair of existing historic materials falls under different rules than replacement. Where replacement is genuinely needed, we coordinate with current Town review requirements, keep original window and door openings in their true positions, and preserve depth, profile, and plane so the home's historic relationship to the street is not altered. Kensington historic neighborhoods are outside the City of Rockville's Historic Preservation Commission jurisdiction, so HPC review does not apply — but we still document original details before removal so the replacement reads as restful, not as a new build."
        },
        {
            question: "What is the difference between standard vinyl, insulated vinyl, and James Hardie for Kensington homes?",
            answer: "All three are viable in Kensington, but they suit different homeowners. Standard vinyl is the budget-conscious choice with the widest color range, but it does not improve energy performance. Insulated vinyl adds R-2 to R-4 of continuous foam insulation during the same project — valuable on Kensington's older bungalows with minimal original wall insulation, and it installs without changing the building's footprint or window openings, which helps under Town review. James Hardie fiber cement delivers the most authentic look for Kensington's character homes — clean 5.25-inch lap for a ceiling-height bungalow profile or colonial-style details for the annex-era colonials — with a factory finish that holds 15–20 years. We review your home's architecture with you at the estimate and recommend the material that fits both the house and the Town's expectations."
        },
        {
            question: "How much does siding replacement cost in Kensington, MD?",
            answer: "Siding replacement in Kensington typically runs $10,500–$19,500 for standard vinyl, $12,500–$23,500 for insulated vinyl, $13,500–$26,500 for LP SmartSide, and $15,500–$32,500 for James Hardie fiber cement on an average Kensington home. Historic sheathing issues common to the Town's older bungalows — deteriorated original wood sheathing, add-on layers of old siding, or unvented crawl space moisture rot — add $2,000–$7,000 where repair is needed during removal. Town-permitted scopes include the required permit fees. DMV General Contracting Group provides free, detailed in-home estimates for every Kensington project."
        },
        {
            question: "Is DMV General Contracting Group licensed for siding in Kensington, MD?",
            answer: "Yes. DMV General Contracting Group holds Maryland MHIC license #156178 — the State of Maryland license required for all home improvement contracting work in Kensington. The Town of Kensington does not maintain its own separate contractor licensing system; instead, licensed contractors pull Town permits through the 3710 Mitchell Street office when the scope requires one. Fully bonded, comprehensive general liability and workers' compensation insurance, and a 1-year workmanship warranty on every Kensington siding project."
        }
    ];

    return (
        <div className="siding-city-detail-page siding-kensington-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/siding-installation">Siding Installation</Link><span>›</span>
                    Kensington, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Kensington, MD</div>
                    <h1>Siding Installation & Replacement in Kensington, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏠 Historic Bungalow Siding Specialists</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ Town Permit — 3710 Mitchell Street</span>
                        <span className="badge">✓ Old-Home Sheathing Expertise</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">🏠</div>
                    <div>
                        <h3>Kensington Is a Town Proud of Its Older Homes — and That Shows up in Its Permit Desks, Its Housing Stock, and Its Siding Projects</h3>
                        <p>Kensington is an independent incorporated town with its own building codes, its own permit office, and its own inspection calendar. Siding permits are pulled through the Town of Kensington's office at 3710 Mitchell Street — not Montgomery County DPS. That distinction matters because Town permitting is a smaller, hands-on process that runs on its own review timeline, and because a project that would be a simple walk-through under the County can hit different thresholds under the Town's codes, which reference a modified version of Montgomery County's building code. Kensington is also one of the oldest communities in Montgomery County, with its housing stock anchored by craftsman bungalows and foursquares from the town's post-1891 railroad boom, mid-century annex and colonial homes from the post-World War II era, and a hand-built quality that carries real crafting challenges — original wood sheathing, add-on layers of old siding, and steep gable transitions that all show up in the removal phase.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a trusted <strong>siding contractor in Kensington, MD</strong>? DMV General Contracting Group installs and replaces siding for Kensington homeowners — James Hardie fiber cement, insulated vinyl, LP SmartSide engineered wood, and standard vinyl — on craftsman bungalows, foursquares, annex eras, colonials, and post-war ramblers across Kensington's historic neighborhoods. Every project includes old siding removal, walkable sheathing inspection and repair, house wrap installation, town-permit considerations through 3710 Mitchell Street handled up front and in-house where permitted, soffit and fascia work, and attention to keeping original window and door openings and home-to-street character intact. MHIC licensed, fully insured, 1-year workmanship warranty. Free in-home estimate. Call +1 240-730-1292.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">🏠</div><strong>Historic Gentle Touch</strong><span>We preserve original openings, profiles, and home-to-street character</span></div>
                    <div className="trust-item"><div className="icon">🏛️</div><strong>Town Permit Experts</strong><span>3710 Mitchell Street filings handled in-house when your scope needs one</span></div>
                    <div className="trust-item"><div className="icon">🪵</div><strong>Old-Home Sheathing Specialists</strong><span>Original wood sheathing and add-on siding layers handled properly</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>Why Kensington Siding Work Is Different — and Why It Matters</h2>

                <div className="warning-box">
                    <h3>⚠️ A Word About Kensington Permits — 3710 Mitchell Street Works Differently Than the County</h3>
                    <p>Kensington is an incorporated town with its own building codes and its own permit office. If your siding scope requires a permit, it is pulled through the <strong>Town of Kensington at 3710 Mitchell Street</strong> — not Montgomery County DPS. That is not a paperwork technicality: the Town's review is smaller, more careful, and runs on its own calendar, and its codes reference a modified version of the County's building code that can apply different thresholds to the same project. Our honest approach at DMV General Contracting Group is to tell you at the estimate whether your specific scope needs a permit or not, file at 3710 Mitchell Street in-house when it does, and never pad the scope — but also to be blunt that if your project does fall under Town review, it will move on the Town's timeline, and we build that into the schedule.</p>
                </div>

                <p>The rest of this page is written for the three realities that shape Kensington siding work: <strong>Kensington's older housing stock</strong> (craftsman bungalows, foursquares, and post-war homes that wear years of original and add-on siding), <strong>Kensington's small-town character review</strong> (a town that is protective of its historic neighborhoods and reads every exterior change carefully), and <strong>the energy stakes on older Kensington homes</strong> (original walls that were built without modern insulation, where a siding replacement is a rare chance to improve performance).</p>

                <p>From <strong>Glen Echo Heights to South Kensington</strong>, <strong>Bannockburn</strong>, and <strong>Chevy Chase View</strong>, Kensington's neighborhoods are wrapped in the character of their older homes. Replacing that character requires materials and techniques chosen carefully — James Hardie planks sized to match original clapboard rhythm, kept-open original openings, house wrap detailed like a new build, and enough ladder hire and specialty cuts that interior trim stays put. Here is exactly how we get it right.</p>

                <h2>Siding Services We Offer in Kensington, MD</h2>
                <div className="check-grid">
                    <span className="check-item">Full Home Siding Replacement</span>
                    <span className="check-item">Aluminum & Old Siding Removal</span>
                    <span className="check-item">James Hardie Fiber Cement (HardiePlank)</span>
                    <span className="check-item">Insulated Vinyl Siding</span>
                    <span className="check-item">LP SmartSide Engineered Wood</span>
                    <span className="check-item">Standard Vinyl Siding</span>
                    <span className="check-item">Historic Sheathing Inspection & Repair</span>
                    <span className="check-item">Town Permit Processing — 3710 Mitchell Street</span>
                    <span className="check-item">House Wrap & Weather Barrier</span>
                    <span className="check-item">Soffit Enclosure & Fascia Replacement</span>
                    <span className="check-item">Trim, Corner Board & Window Casing</span>
                    <span className="check-item">Steep Gable & Dormer Detail Work</span>
                    <span className="check-item">Storm Damage Siding Repair</span>
                    <span className="check-item">Partial Siding Replacement</span>
                </div>

                <h2>Siding Types for Kensington's Older Homes — Bungalows, Foursquares & Post-War Colonials</h2>

                <div className="material-grid">
                    <div className="material-card">
                        <div className="m-tag">Best ROI</div>
                        <div className="m-icon">🏆</div>
                        <h3>James Hardie Fiber Cement — HardiePlank</h3>
                        <p>The strongest curb appeal upgrade and highest long-term ROI siding choice for Kensington's character homes. HardiePlank in a clean 5.25-inch exposure matches the ceiling-height proportions of Kensington's craftsman bungalows, reading as a quiet modern replacement of the original clapboard rhythm rather than a new addition. On the Town's annex-era colonials, HardiePlank with framed trim details continues the colonial character cleanly. ColorPlus factory finish holds 15–20 years without repainting.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 30–50 yrs</span>
                            <span><strong>Kensington Cost:</strong> $15,500 – $32,500+</span>
                        </div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Best Energy ROI</div>
                        <div className="m-icon">🌡️</div>
                        <h3>Insulated Vinyl Siding</h3>
                        <p>Our most frequently recommended alternative to James Hardie for budget-conscious Kensington projects, especially on the Town's older bungalows and foursquares built with minimal original wall insulation. Insulated vinyl adds R-2 to R-4 of continuous foam insulation in the same project that replaces the exterior — no interior disruption required. Installed dimensionally true to the original profile, insulated vinyl does not alter a home's footprint or opening sizes, which helps keep Town review smooth.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 20–40 yrs</span>
                            <span><strong>Kensington Cost:</strong> $12,500 – $23,500+</span>
                        </div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Wood Look</div>
                        <div className="m-icon">🪵</div>
                        <h3>LP SmartSide Engineered Wood</h3>
                        <p>A strong middle option for Kensington homeowners who want a wood aesthetic on the annex-era and mid-century homes without cedar's maintenance demands. LP SmartSide's texture reads well on the Town's colonials and ramblers, and its paint intervals of 8–10 years beat cedar's 4–7. A good material where the goal is a quiet, traditional look and the energy improvement is secondary.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 25–35 yrs</span>
                            <span><strong>Kensington Cost:</strong> $13,500 – $26,500+</span>
                        </div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Budget Option</div>
                        <div className="m-icon">🏠</div>
                        <h3>Standard Vinyl Siding</h3>
                        <p>Modern standard vinyl is durable, low-maintenance, and available in a wide range of profiles and colors — a practical choice for Kensington homeowners prioritizing cost. Like all non-insulated options, standard vinyl does not improve wall insulation; for the Town's older, poorly insulated homes we recommend insulated vinyl for a modest price difference. Works well on the mid-century ramblers where the original aluminum was never appropriate for the bungalows.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 20–40 yrs</span>
                            <span><strong>Kensington Cost:</strong> $10,500 – $19,500+</span>
                        </div>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Our Recommendation for Kensington:</strong> On Kensington's bungalows and foursquares, where the home's character <em>is</em> much of the value, we lead with <strong>James Hardie HardiePlank</strong> — it restores the original clapboard rhythm with a 30-year+ finish and a clean Town review path. Where budget is the priority and the goal is quiet and traditional, <strong>LP SmartSide</strong> is the cost-conscious alternative. On the annex-era homes and ramblers where energy performance matters, <strong>insulated vinyl</strong> delivers the R-value gain at the best price.
                </div>

                <h2>Siding Material Comparison for Kensington, MD Homes</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="compare-table">
                            <thead>
                                <tr><th>Material</th><th>Durability</th><th>Maintenance</th><th>Energy Improvement</th><th>Town Review Fit</th><th>Cost</th></tr>
                            </thead>
                            <tbody>
                                <tr className="top-pick"><td>James Hardie Fiber Cement ⭐</td><td>Excellent — 30–50 yrs</td><td>Low — 15–20 yr factory finish</td><td>Good with rigid foam</td><td>Best — restores original clapboard rhythm</td><td>$15.5K – $32.5K+</td></tr>
                                <tr><td>Insulated Vinyl</td><td>Good — 20–40 yrs</td><td>Very low — wash only</td><td>Excellent — R-2 to R-4</td><td>Good — fits original profile</td><td>$12.5K – $23.5K+</td></tr>
                                <tr><td>LP SmartSide</td><td>Good — 25–35 yrs</td><td>Medium — 8–10 yr repaint</td><td>Moderate</td><td>Good — traditional texture</td><td>$13.5K – $26.5K+</td></tr>
                                <tr><td>Standard Vinyl</td><td>Good — 20–40 yrs</td><td>Very low — wash only</td><td>Minimal — no foam backer</td><td>Good on ramblers/annex homes</td><td>$10.5K – $19.5K+</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Signs Your Kensington Home Needs New Siding</h2>

                <div className="signs-grid">
                    <div className="sign-card"><div className="s-icon">🔧</div><h3>Failing Original Aluminum</h3><p>Oxidation, dents, or paint failure on the aluminum installed on Kensington's homes in the 1950s–60s — a material that skipped the bungalow era entirely.</p></div>
                    <div className="sign-card"><div className="s-icon">🔍</div><h3>Rot at Window Openings</h3><p>Soft, crumbling wood at sills and jambs — active moisture damage in the sheathing behind the siding at Kensington's older openings.</p></div>
                    <div className="sign-card"><div className="s-icon">🪵</div><h3>Buckled Original Wood Siding</h3><p>Warped, cupped, or cracked original clapboard compressed under decades of add-on layers.</p></div>
                    <div className="sign-card"><div className="s-icon">💧</div><h3>Interior Water Stains</h3><p>Water marks on interior walls near exterior surfaces — active infiltration at failed seams, trim, or weather barrier gaps.</p></div>
                    <div className="sign-card"><div className="s-icon">🌡️</div><h3>Cold Walls & Drafts</h3><p>Interior walls cold to the touch in winter — typical of Kensington's pre-war homes with zero original wall insulation.</p></div>
                    <div className="sign-card"><div className="s-icon">💨</div><h3>Gaps at Gable Transitions</h3><p>Separated or open siding at steep gable and dormer transitions — the most common failure point on Kensington's character homes.</p></div>
                </div>

                <h2>Navigating Kensington's Town Permit Process — 3710 Mitchell Street</h2>

                <div className="highlight">
                    <p>🏛️ <strong>The Kensington Town permitting reality:</strong> If your siding scope requires a permit, it runs through the <strong>Town of Kensington's office at 3710 Mitchell Street</strong> — not Montgomery County DPS. Town review is smaller, more personal, and more careful than County review, and its codes reference a modified version of Montgomery County's building code, so thresholds can sit in different places. Like-for-like replacement of existing siding commonly does not require a permit; adding rigid foam insulation beyond a half-inch, reconfiguring window or door openings, structurally altering a gable or dormer, or modifying the building's shape commonly does. DMV General Contracting Group assesses your specific scope at the estimate — if it needs a Town permit, we file in-house at 3710 Mitchell Street and schedule around the Town's inspection calendar. If it does not, we tell you that clearly, because the correct answer is honesty about scope.</p>
                </div>

                <h2>Our Siding Installation Process in Kensington</h2>

                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free In-Home Estimate — Scope, Permits & Architecture</h3>
                            <p>We visit your Kensington home and assess the full exterior — original siding layers, sheathing condition behind the oldest layers, window and gable transition detailing, and the home's true architecture and proportions. We tell you honestly at this appointment whether your specific scope requires a Town of Kensington permit at 3710 Mitchell Street, and walk you through material options matched to your home's era. No charge, no obligation.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Material Selection — Matched to the Home's Era & Proportions</h3>
                            <p>We bring James Hardie ColorPlus samples, insulated vinyl profiles and colors, LP SmartSide options, and standard vinyl to your Kensington home. For the bungalows and foursquares we emphasize exposure widths that match the original clapboard rhythm; for the annex-era colonials and ramblers we present options that read cleanly against the home's character. Energy performance discussed honestly for each material on your specific walls.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Town Permit Assessment & Filing — 3710 Mitchell Street</h3>
                            <p>Where your scope requires a Town of Kensington permit, we prepare and file the application in-house at 3710 Mitchell Street and schedule for the Town's inspection timeline. Where it does not, we proceed directly without padding the scope — and we document that determination so you have the same answer in writing we gave at the estimate.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Old Siding Removal & Historic Sheathing Inspection</h3>
                            <p>Existing siding layers removed carefully — sometimes multiple layers on Kensington's older homes, from original clapboard up through add-on asphalt and aluminum shingles. Original openings kept true during removal. Sheathing assessed structurally, with deteriorated original wood sheathing repaired before house wrap goes on.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>House Wrap, Insulation, Siding & Trim Installation</h3>
                            <p>Continuous weather-resistant barrier installed across all elevations, individually flashed at every window, door, and penetration. Rigid foam insulation installed where the scope includes an energy upgrade. New siding installed with steep gable and dormer transitions detailed correctly — the specialty of older Kensington homes — plus trim, corner boards, and fascia finished to a consistent standard that respects the home's original proportions.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Final Inspection, Caulking & Exterior Walkthrough</h3>
                            <p>Every seam, transition, and penetration inspected. All exterior joints caulked with flexible, paintable exterior-grade sealant. Full debris removal. Exterior walkthrough on every elevation with you before project close. Written warranty. Town permit and inspections closed where applicable.</p>
                        </div>
                    </div>
                </div>

                <h2>Siding Replacement Cost in Kensington, MD</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr><th>Siding Material</th><th>Typical Cost — Kensington Home</th><th>Per Sq Ft (Installed)</th><th>Notes</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Standard Vinyl</td><td>$10,500 – $19,500+</td><td>$4 – $8 / sq ft</td><td>Budget pick; energy improvement secondary</td></tr>
                                <tr><td>Insulated Vinyl</td><td>$12,500 – $23,500+</td><td>$6 – $10 / sq ft</td><td>Appearance + energy; fits original profile</td></tr>
                                <tr><td>LP SmartSide</td><td>$13,500 – $26,500+</td><td>$7 – $12 / sq ft</td><td>Traditional wood texture; 8–10 yr repaint</td></tr>
                                <tr><td>James Hardie Fiber Cement</td><td>$15,500 – $32,500+</td><td>$8 – $14 / sq ft</td><td>Best character match; best ROI for Kensington</td></tr>
                                <tr><td>Historic Sheathing Repair (if needed)</td><td>$2,000 – $7,000+</td><td>Depends on damage extent</td><td>Original wood sheathing on older homes</td></tr>
                                <tr><td>Town Permit Fee (when permitted)</td><td>Included as required by scope</td><td>—</td><td>3710 Mitchell Street filing in-house</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>The Kensington rule of honesty:</strong> The right answer on a Kensington siding project may be &quot;no permit required&quot; for a like-for-like replacement, or &quot;yes, Town review applies&quot; for a wider scope — and the difference is determined by the specific scope, not by the contractor's convenience. On any Kensington project, the biggest avoidable cost on your invoice is not materials — it is the rework and resubmission that comes from a scope assembled without the Town's expectations in mind. We get it right on the first pass.
                </div>

                <h2>What Kensington Homeowners Say About DMV General Contracting Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our 1920s bungalow on Warner Street had three layers of siding by the time we bought it — original clapboard, asphalt shingles from the 40s, and a failed vinyl job from the 90s on top. DMV General Contracting Group stripped all three, repaired the deteriorated original sheathing on the east gable, and installed HardiePlank in a 5.25-inch exposure. The gauge and window openings stayed exactly as the house was built. It reads as a quiet, restful upgrade — which is exactly what we wanted."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Warner Street, Kensington MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our scope included rigid foam insulation beyond the half-inch threshold, which triggered Town review. DMV General Contracting Group was upfront about it at the estimate, filed at 3710 Mitchell Street in-house, sized the schedule around the Town inspector, and closed the permit at the end. No surprises about permitting — exactly the honesty you want from a contractor in a small town."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Howard Avenue, Kensington MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We chose insulated vinyl for our 1949 annex-era colonial on Montrose near Bannockburn to cut heating costs and finally replace the original 1950s aluminum. The removal showed why — aluminum over old wood sheathing with years of trapped moisture. They repaired the sheathing, installed the weather barrier, and the siding went up tight. First winter heating bill confirmed the difference."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Montrose, Kensington MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"The rear of our South Kensington home's gable had pulled away with a decade of wind-driven weather. DMV General Contracting Group matched the HardiePlank color, flagged the leveling need, and rehung the transition cleanly — the fix reads like it was part of the original finish. Fast, clean, professional."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">South Kensington MD</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Kensington homeowners trust DMV General Contracting Group for siding work that honors older homes — original openings kept true, profiles matched to the house's story, and Town permitting handled honestly and in-house.</p>
                </div>

                <div className="cta-banner">
                    <h2>Get a Free Siding Estimate for Your Kensington Home</h2>
                    <p>Our team will visit your Kensington home, assess the true scope — including whether Town permitting at 3710 Mitchell Street applies — and provide a detailed estimate at no cost, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Siding Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All Kensington, MD Neighborhoods for Siding Installation</h2>
                <div className="areas-grid">
                    <span className="area-pill">Mechanicstown</span>
                    <span className="area-pill">Altadena Park</span>
                    <span className="area-pill">Bannockburn</span>
                    <span className="area-pill">West Kensington</span>
                    <span className="area-pill">South Kensington</span>
                    <span className="area-pill">Glen Echo Heights</span>
                    <span className="area-pill">Chevy Chase View</span>
                    <span className="area-pill">North Kensington</span>
                    <span className="area-pill">Kenwood</span>
                </div>

                <h2>Frequently Asked Questions — Siding Installation in Kensington, MD</h2>
                <Accordion className="faq-list" defaultActiveKey="0">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="internal-links">
                    <h2>Explore Our Other Services in Kensington, MD</h2>
                    <ul>
                        <li><Link href="/service/kitchen-remodeling/kensington-md">Kitchen Remodeling in Kensington, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling/kensington-md">Bathroom Remodeling in Kensington, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/kensington-md">Basement Remodeling in Kensington, MD</Link></li>
                        <li><Link href="/service/adu/kensington-md">ADU Construction in Kensington, MD</Link></li>
                        <li><Link href="/service/decks/kensington-md">Deck Building in Kensington, MD</Link></li>
                        <li><Link href="/service/flooring-remodeling/kensington-md">Flooring Installation in Kensington, MD</Link></li>
                        <li><Link href="/service/design-build/kensington-md">Design-Build Contractor in Kensington, MD</Link></li>
                        <li><Link href="/service/roofing">Roofing in Kensington, MD</Link></li>
                    </ul>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Get Started on Your Kensington Siding Project?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free estimate. We handle Town permitting at 3710 Mitchell Street honestly and in-house, keep original openings true, and detail steep gables correctly. MHIC licensed. 1-year warranty.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Siding Estimate in Kensington →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default KensingtonMD;