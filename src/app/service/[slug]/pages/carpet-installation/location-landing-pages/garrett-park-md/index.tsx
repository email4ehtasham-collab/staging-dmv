import Link from "next/link";
import NavitemActive from "@/components/Common/NavitemActive";

import "../carpet-city-style.scss";
import "./style.scss";

const GarrettParkMD = () => {

    const faqData = [
        {
            question: "Should I check for original hardwood before recarpeting my Garrett Park bungalow?",
            answer: "Yes — and we check as a standard part of every Garrett Park estimate, at no additional cost. Garrett Park's 1900s–1940s bungalows were built before wall-to-wall carpet was standard, and original oak, fir, or wide-plank hardwood beneath old carpet is common. Some of that original flooring is in refinishable condition — worth uncovering rather than covering again. We assess what's underneath at every estimate and tell you honestly what we find, including when refinishing makes more sense than recarpeting. We coordinate with our hardwood refinishing team when the original floor warrants it."
        },
        {
            question: "Will carpet installation damage the original trim on my Garrett Park Craftsman staircase?",
            answer: "Not when installed with the methods specific to bungalow-era stair construction. Garrett Park's Craftsman bungalows carry original stringer profiles, newel posts, and trim proportions worth protecting. We size and place tack strips to avoid the original woodwork, test-fit on a representative section first on any stair where the trim's condition is uncertain, and use installation depths calibrated to bungalow-era stair materials rather than applying modern split-level practices to a 1930 Craftsman staircase."
        },
        {
            question: "Does Garrett Park's historic district designation restrict my carpet choices?",
            answer: "No. The Town of Garrett Park's historic preservation framework and the National Register Historic District designation govern exterior modifications only. Interior carpet color, fiber, and style inside your Garrett Park home are entirely your choice — no Town review, no submission, no approval process. You can select any carpet color or fiber and schedule installation immediately after the estimate."
        },
        {
            question: "What carpet fiber is most appropriate for a Garrett Park historic bungalow?",
            answer: "Wool is the most historically authentic choice — the natural fiber used in period carpet from the era these homes were built, and available in warm earth tones that complement Craftsman woodwork. For secondary bedrooms and stair runs where durability and stain resistance matter more than period authenticity, solution-dyed nylon in a period-compatible warm neutral color is our recommended middle path. SmartStrand triexta in the same warm palette is the choice for households with pets or young children. We bring all three in period-appropriate colors to every Garrett Park estimate."
        },
        {
            question: "How much does carpet installation cost in Garrett Park, MD?",
            answer: "A single bedroom in nylon or triexta runs $900–$2,400. A primary suite in wool runs $1,400–$2,800+. A Craftsman staircase runs $1,000–$3,200 ($80–$220 per step, with period trim protection at the higher end). A whole-home replacement across a Garrett Park bungalow — wool primary suite, nylon or triexta secondary rooms — typically runs $8,000–$24,000+ depending on home size and fiber mix. DMV General Contracting Group provides free, itemized in-home estimates for every Garrett Park property."
        },
        {
            question: "Is DMV General Contracting Group licensed for carpet installation in Garrett Park, MD?",
            answer: "Yes. DMV General Contracting Group holds Maryland MHIC license #156178 — required for home improvement work throughout Garrett Park and Montgomery County. Fully bonded, comprehensive general liability and workers' compensation insurance, and a 1-year workmanship warranty on every Garrett Park carpet installation."
        }
    ];

    return (
        <div className="carpet-city-detail-page">
            <NavitemActive nav="service" />
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/carpet-installation">Carpet Installation</Link><span>›</span>
                    Garrett Park, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Garrett Park, MD</div>
                    <h1>Carpet Installation & Replacement in Garrett Park, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏛️ National Register Historic District Specialists</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ Original Hardwood Assessed First</span>
                        <span className="badge">✓ Craftsman Stair Trim Protected</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">🏠</div>
                    <div>
                        <h3>Garrett Park's 1900s–1940s Bungalows Were Built Before Wall-to-Wall Carpet Was Standard — Which Means the Carpet Coming Up May Be Covering Original Hardwood Worth Refinishing, and the Staircase Being Carpeted May Have Craftsman Trim Worth Protecting</h3>
                        <p>Garrett Park is one of Maryland's most architecturally coherent historic communities — a National Register Historic District whose Craftsman bungalows, Victorian cottages, and colonial revivals along the MARC Brunswick Line corridor were built in the era before wall-to-wall carpet was common practice. When old carpet is removed from a 1928 Garrett Park Craftsman bungalow, what lies underneath is not predictable the way it would be in a 1995 Kentlands colonial. It may be original fir or oak hardwood in refinishable condition — flooring worth uncovering rather than covering again. It may be wide-plank subfloor that shows the craft of original construction. Or it may be plywood from a mid-century renovation that proceeded carpet without reservation. DMV General Contracting Group checks what is actually underneath at every Garrett Park estimate — and we tell homeowners honestly what we find, including when refinishing makes more sense than recarpeting. On the staircases of Garrett Park's Craftsman bungalows, original stringer profiles, hand-finished newel posts, and period balusters carry the character of the home — and tack strip placement that would be perfectly appropriate on a 1965 Silver Spring split-level can damage woodwork on a 1930 Garrett Park bungalow that is genuinely irreplaceable. We install stair carpet using methods calibrated to the specific trim profiles of Garrett Park's bungalow era. No historic review process applies to interior carpet — your color, fiber, and style choices are entirely your own.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a trusted <strong>carpet installer in Garrett Park, MD</strong>? DMV General Contracting Group installs and replaces carpet for Garrett Park's historic bungalow and colonial homeowners — primary and secondary bedrooms, Craftsman staircases, finished basements, and whole-home replacement projects. Premium wool for period-appropriate formal spaces, solution-dyed nylon and triexta for family rooms and secondary bedrooms, and moisture-barrier padding for any below-grade spaces. Every Garrett Park project begins with an honest assessment of what is under the existing carpet — original hardwood is identified and brought to your attention before recarpeting is recommended. Original stair trim protected during staircase installation. MHIC licensed, fully insured, 1-year workmanship warranty. Free in-home estimate. Call +1 240-730-1292.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">🪵</div><strong>Original Hardwood First</strong><span>What's under old carpet assessed at every Garrett Park estimate — before recarpeting is recommended</span></div>
                    <div className="trust-item"><div className="icon">🪜</div><strong>Craftsman Stair-Safe</strong><span>Tack strip placement calibrated to Garrett Park's bungalow-era stair trim profiles</span></div>
                    <div className="trust-item"><div className="icon">🏛️</div><strong>No Historic Review for Interior Carpet</strong><span>Town review covers exterior only — any color, any fiber, your choice</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>What Makes Garrett Park Carpet Projects Different</h2>

                <div className="historic-box">
                    <h3>🏠 The Garrett Park Historic Home Carpet Case — What Every Homeowner Should Know First</h3>
                    <ul>
                        <li><strong>Original hardwood is likely under old carpet — and may be worth refinishing:</strong> Garrett Park's 1900s–1940s bungalows and colonial revivals were built when oak, fir, and wide-plank hardwood were standard floor material — wall-to-wall carpet came later, typically as an overlay installed in the 1950s through 1980s over original flooring that was in place from the beginning. When we remove old carpet from a Garrett Park bungalow, we assess the original flooring underneath: its species, width, condition, and refinishability. Some Garrett Park homeowners discover flooring in excellent refinishable condition that they would not have chosen to cover again had they known it was there. We bring that information to the homeowner honestly — even when it means our carpet project becomes a flooring refinishing referral instead.</li>
                        <li><strong>Craftsman stair trim is not interchangeable with modern stair construction:</strong> Garrett Park's bungalow-era staircases carry original stringer profiles, hand-cut newel posts, and period baluster proportions that were designed for the architectural style of the home. Tack strip fasteners placed incorrectly on these staircases — at depths and angles calibrated for modern plywood stair construction — can split original stringer material or damage trim profiles that cannot be exactly replicated. DMV General Contracting Group uses stair installation methods specific to Garrett Park's bungalow-era construction: shallower tack strip placement, hand-fastening at critical trim locations, and a test-fit section on any stair where the woodwork's condition is uncertain before the full run is committed.</li>
                        <li><strong>No historic review applies to interior carpet:</strong> The Town of Garrett Park's historic preservation framework — and the National Register Historic District designation itself — governs exterior modifications: siding, windows, additions, and changes visible from the public street. Carpet material, color, fiber, and style inside your Garrett Park home are entirely your choice with no Town review, no submission process, and no approval timeline. A Garrett Park homeowner in a National Register Historic District property can select any carpet color, any fiber type, and install it on their own schedule without any interaction with the Town of Garrett Park or any historic preservation authority.</li>
                        <li><strong>Period-appropriate carpet choices complement Garrett Park's bungalow character:</strong> While no review governs interior carpet choices, many Garrett Park homeowners want carpet that feels appropriate to a 1930s Craftsman bungalow. Wool in warm earth tones — mushroom, oatmeal, sage, terracotta — reads naturally against Garrett Park bungalow woodwork and period trim. Solution-dyed nylon and triexta are available in the same color families for homeowners who want the period-appropriate color palette with better stain resistance. DMV General Contracting Group brings samples in both fiber types in colors suited to the Garrett Park bungalow interior aesthetic at every in-home estimate.</li>
                    </ul>
                </div>

                <h2>Carpet Installation Services We Offer in Garrett Park, MD</h2>
                <div className="check-grid">
                    <span className="check-item">Whole-Home Carpet Replacement</span>
                    <span className="check-item">Primary & Secondary Bedroom Carpet</span>
                    <span className="check-item">Craftsman Staircase Carpet Installation</span>
                    <span className="check-item">Finished Basement Carpet</span>
                    <span className="check-item">Original Hardwood Discovery Assessment</span>
                    <span className="check-item">Premium Wool Carpet Installation</span>
                    <span className="check-item">Solution-Dyed Nylon & Triexta Carpet</span>
                    <span className="check-item">Moisture-Barrier Basement Padding</span>
                    <span className="check-item">Old Carpet Removal & Disposal</span>
                    <span className="check-item">Bungalow Subfloor Inspection</span>
                    <span className="check-item">Period-Appropriate Color Consultation</span>
                    <span className="check-item">Transition Strip & Threshold Installation</span>
                    <span className="check-item">Carpet Stretching & Re-Stretching</span>
                    <span className="check-item">Stair Trim Protection — Test-Fit Included</span>
                </div>

                <h2>Carpet Fibers for Garrett Park's Historic Bungalows</h2>

                <div className="material-grid">
                    <div className="material-card">
                        <div className="m-tag">Period Appropriate</div>
                        <div className="m-icon">🐑</div>
                        <h3>Wool Carpet</h3>
                        <p>The most historically authentic carpet choice for Garrett Park's bungalow-era homes — wool has been the premium residential carpet fiber since the period these homes were built, and its warm depth and natural texture complement Craftsman woodwork, period trim, and the architectural character of Garrett Park's historic streetscape in ways synthetic fibers approximate but do not match. In warm earth tones — mushroom, oatmeal, heather, sage — wool reads as entirely natural in a 1928 Garrett Park Craftsman. Holds color and resilience over decades. Requires professional cleaning and should be avoided in below-grade spaces.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 20–30+ yrs</span><span><strong>Garrett Park Cost:</strong> $9 – $17+ / sq ft installed</span></div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Best Durability</div>
                        <div className="m-icon">💪</div>
                        <h3>Solution-Dyed Nylon</h3>
                        <p>Our most frequent recommendation for Garrett Park secondary bedrooms, hallways, and stair runs where durability and stain resistance matter more than period authenticity of fiber. Solution-dyed nylon is available in the warm, muted color palette — oatmeal, linen, sage, terra cotta — that suits Garrett Park bungalow interiors, while providing the stain resistance and traffic durability that wool does not. For Garrett Park homeowners who want the bungalow-appropriate colors without wool's maintenance requirements or price premium, solution-dyed nylon in a period-compatible color is our recommended middle path.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 15–25 yrs</span><span><strong>Garrett Park Cost:</strong> $4 – $8 / sq ft installed</span></div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Family Friendly</div>
                        <div className="m-icon">🐾</div>
                        <h3>SmartStrand Triexta</h3>
                        <p>The preferred choice for Garrett Park homeowners with pets or young children — SmartStrand triexta's permanent built-in stain resistance handles the everyday spills and accidents of a lived-in family home with significantly less anxiety than wool or standard nylon. Available in the warm, natural color palette that complements Garrett Park's bungalow aesthetic. A practical choice for secondary bedrooms and lower-level family rooms in Garrett Park homes where the period-appropriate look matters but so does surviving daily family life. Pairs well with wool in the primary suite — different fibers in different rooms calibrated to how each is actually used.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 15–25 yrs</span><span><strong>Garrett Park Cost:</strong> $4.50 – $9 / sq ft installed</span></div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Value Option</div>
                        <div className="m-icon">✅</div>
                        <h3>Polyester & PET Carpet</h3>
                        <p>A budget-conscious option for Garrett Park homeowners replacing carpet in guest rooms or lower-priority spaces where cost is the primary driver. Modern polyester is available in warm neutral tones compatible with bungalow interiors. We present polyester alongside nylon, triexta, and wool at every Garrett Park estimate — with honest durability comparisons, including polyester's tendency to mat at high-traffic areas faster than nylon or triexta. For stair runs and primary bedrooms in Garrett Park's bungalow-era homes, nylon or triexta is the more appropriate long-term choice.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 10–15 yrs</span><span><strong>Garrett Park Cost:</strong> $3 – $6 / sq ft installed</span></div>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Our Recommendation for Garrett Park:</strong> For Garrett Park's primary suites and formal spaces where the Craftsman character of the home is most felt, <strong>wool in a warm earth tone</strong> is the most authentically appropriate choice. For secondary bedrooms, stair runs, and family rooms where daily traffic demands durability, <strong>solution-dyed nylon in a period-compatible color</strong> delivers the bungalow aesthetic at better stain resistance and lower cost. For households with pets or young children, <strong>SmartStrand triexta</strong> in the same warm palette is our recommended alternative to nylon. In any below-grade spaces, <strong>moisture-barrier padding</strong> is standard regardless of fiber choice.
                </div>

                <h2>Carpet Fiber Comparison for Garrett Park, MD Historic Homes</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="compare-table">
                            <thead>
                                <tr><th>Fiber</th><th>Period Authenticity</th><th>Durability</th><th>Stain Resistance</th><th>Best Garrett Park Rooms</th><th>Cost</th></tr>
                            </thead>
                            <tbody>
                                <tr className="top-pick"><td>Wool ⭐ (primary spaces)</td><td>Highest — original era fiber</td><td>Excellent — 20–30+ yrs</td><td>Moderate — needs treatment</td><td>Primary suite, formal rooms</td><td>$9 – $17+ / sq ft</td></tr>
                                <tr><td>Solution-Dyed Nylon ⭐ (secondary)</td><td>Good — period-compatible colors</td><td>Excellent — 15–25 yrs</td><td>Very good</td><td>Secondary bedrooms, stairs</td><td>$4 – $8 / sq ft</td></tr>
                                <tr><td>SmartStrand Triexta</td><td>Good — period-compatible colors</td><td>Excellent — 15–25 yrs</td><td>Outstanding — permanent</td><td>Family rooms, kids' rooms</td><td>$4.50 – $9 / sq ft</td></tr>
                                <tr><td>Polyester / PET</td><td>Moderate</td><td>Moderate — 10–15 yrs</td><td>Good — surface treated</td><td>Guest rooms, lower priority spaces</td><td>$3 – $6 / sq ft</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>The Historic District Question — What Applies to Interior Carpet and What Does Not</h2>

                <div className="highlight">
                    <p>🏛️ <strong>The Town of Garrett Park's historic preservation framework and the National Register Historic District designation govern exterior modifications only</strong> — siding materials and colors, window replacement, additions, and changes visible from the public street. Interior carpet material, color, fiber, and style inside your Garrett Park home are entirely your choice with no Town review process, no submission requirement, and no approval timeline of any kind. You can select any carpet color — including colors that would not be approved for the exterior — and schedule installation immediately after your estimate. The historic review process that governs Garrett Park's exterior character does not touch what goes on your floors inside the house. DMV General Contracting Group confirms this for every Garrett Park carpet project at the initial estimate visit.</p>
                </div>

                <h2>Signs Your Garrett Park Bungalow Needs New Carpet</h2>

                <div className="signs-grid">
                    <div className="sign-card">
                        <div className="s-icon">🔍</div>
                        <h3>Matting at High-Traffic Areas</h3>
                        <p>Permanently crushed carpet at doorways, stair nosings, and hallway paths — fiber has lost its resilience beyond recovery.</p>
                    </div>
                    <div className="sign-card">
                        <div className="s-icon">🎨</div>
                        <h3>Color Loss in Traffic Lanes</h3>
                        <p>Visible lighter paths through rooms where foot traffic has faded surface-dyed fiber — uneven color that cleaning cannot restore.</p>
                    </div>
                    <div className="sign-card">
                        <div className="s-icon">🤧</div>
                        <h3>Persistent Odor</h3>
                        <p>Musty or embedded pet odor that cleaning does not resolve — deep in the pad or original subfloor beneath the carpet.</p>
                    </div>
                    <div className="sign-card">
                        <div className="s-icon">🧹</div>
                        <h3>Rippling or Buckling</h3>
                        <p>Waves or loose areas across bedroom or stair carpet — stretched beyond proper tension and no longer lying flat.</p>
                    </div>
                    <div className="sign-card">
                        <div className="s-icon">🪡</div>
                        <h3>Fraying at Stair Nosings</h3>
                        <p>Unraveling carpet edges at stair steps — structural fiber failure at the highest-wear point in a Garrett Park bungalow.</p>
                    </div>
                    <div className="sign-card">
                        <div className="s-icon">🏚️</div>
                        <h3>Dated Color or Style</h3>
                        <p>Carpet color or texture that no longer suits the home's character — a straightforward update with no historic review required.</p>
                    </div>
                </div>

                <h2>Our Carpet Installation Process in Garrett Park</h2>

                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free In-Home Estimate — Hardwood Assessment Before Carpet Is Recommended</h3>
                            <p>We visit your Garrett Park home and begin by assessing what is under the existing carpet at the edges and in less visible areas — looking for evidence of original hardwood or wide-plank fir subfloor that may be in refinishable condition. We measure every room and stair run, note the stair trim profiles and woodwork condition on the bungalow staircase, and discuss fiber and color options alongside the honest assessment of what we found under the carpet. No charge, no obligation — and no automatic recommendation to recarpet if what's underneath tells a different story.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Fiber & Color Selection — Period-Appropriate Options Presented</h3>
                            <p>We bring wool samples in warm earth tones, solution-dyed nylon in period-compatible colors, and SmartStrand triexta in the same palette to your Garrett Park home — showing colors against your existing trim, woodwork, and window light in each room. We discuss fiber recommendations by room and use: wool for primary suites and formal spaces, nylon or triexta for secondary bedrooms, stair runs, and family rooms. Period-appropriate color guidance included at no additional charge.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Old Carpet Removal — Hardwood Condition Documented</h3>
                            <p>Existing carpet and pad removed carefully. Original flooring underneath documented — species, condition, and refinishability noted and shared with the homeowner. If the original floor is in refinishable condition and the homeowner prefers that path, we coordinate with our hardwood refinishing team rather than proceeding with new carpet over original flooring that has value worth preserving. All tack strips, staples, and fasteners removed from the subfloor before new installation begins.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Subfloor Prep & Pad Installation</h3>
                            <p>Subfloor surface assessed and prepared — Garrett Park's bungalow-era construction may include original wide-plank subfloor boards that need leveling or securing before new carpet is installed. Premium carpet padding in all above-grade rooms. Moisture-barrier padding in any below-grade spaces. New tack strips installed at all room perimeters — sized and placed appropriately for the subfloor material found in each room.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Carpet Installation — Stair Trim Protected Throughout</h3>
                            <p>Carpet installed in all bedroom and above-grade rooms first. Stair run installed with Craftsman-appropriate methods — tack strip placement and fastener depth calibrated to the bungalow stair's specific trim profiles, with a test-fit section on any stair where the original woodwork's condition warrants extra care. Waterfall or wrapped stair installation depending on stair nosing profile and homeowner preference. All transitions, threshold strips, and landing details installed and secured.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Final Stretch, Trim & Walkthrough</h3>
                            <p>All carpet power-stretched to proper tension. All edges trimmed cleanly at baseboards. Transition strips secured at all hard-surface boundaries. Full walkthrough on every level — checking every seam, stair nosing, and transition detail — with particular attention to stair trim condition after installation. Written warranty documentation provided.</p>
                        </div>
                    </div>
                </div>

                <h2>Carpet Installation Cost in Garrett Park, MD</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr><th>Scope</th><th>Typical Cost — Garrett Park Bungalow</th><th>Notes</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Single Bedroom — Nylon or Triexta</td><td>$900 – $2,400</td><td>Includes removal, pad, installation</td></tr>
                                <tr><td>Single Bedroom — Wool</td><td>$1,400 – $2,800+</td><td>Premium fiber; period-appropriate for primary suite</td></tr>
                                <tr><td>Craftsman Staircase</td><td>$1,000 – $3,200</td><td>$80–$220 per step; higher end with period trim protection</td></tr>
                                <tr><td>Finished Basement</td><td>$3,500 – $11,000</td><td>Moisture-barrier pad standard on below-grade concrete</td></tr>
                                <tr><td>Whole-Home — Garrett Park Bungalow</td><td>$8,000 – $24,000+</td><td>Wool primary suite + nylon/triexta secondary rooms</td></tr>
                                <tr><td>Carpet Re-Stretching Only</td><td>$300 – $700</td><td>Per area — no replacement needed</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Wool + nylon combination — the most common Garrett Park whole-home approach:</strong> Most Garrett Park homeowners doing a whole-home carpet replacement end up with wool in the primary suite and solution-dyed nylon or triexta in the secondary bedrooms and stair runs. Wool in the primary suite delivers the period-authentic feel and depth where it is most noticed daily. Nylon or triexta in the secondary rooms provides durability and stain resistance where family traffic demands it — at a fraction of the wool cost per square foot. DMV General Contracting Group coordinates both fibers from color families that read consistently through the upper hallway so the whole-home result feels intentional, not inconsistent.
                </div>

                <h2>What Garrett Park Homeowners Say About DMV General Contracting Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We called DMV General Contracting Group to recarpet our 1932 Garrett Park bungalow — four bedrooms and the staircase. At the estimate, they lifted a corner of the bedroom carpet and found original fir hardwood in excellent condition underneath. They were upfront that refinishing made more sense than recovering it, even though it meant no carpet work for them in those rooms. We ended up refinishing three bedrooms and only carpeting the fourth. Genuinely honest advice."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Garrett Park, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We had our original bungalow staircase carpeted — the newel post and balusters are original 1927 Craftsman work that we were very protective of. DMV General Contracting Group explained exactly how they'd place the tack strips before starting, did a test section at the bottom of the staircase first, and everything came through completely undamaged. The wool stair carpet in a warm sage tone looks exactly right on our bungalow."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Garrett Park, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We did wool in the primary suite and solution-dyed nylon in the three secondary bedrooms — DMV General Contracting Group recommended the combination at the estimate based on how each room is used. They brought samples in colors from the same warm neutral family so the upstairs reads consistently. The wool in the primary suite is noticeably better underfoot and the nylon in the kids' rooms has held up to everything."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Garrett Park, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We weren't sure whether the historic district designation meant we needed approval to change our carpet color. DMV General Contracting Group confirmed immediately that Town review only applies to the exterior, so we picked our color — a warm terracotta that suits the bungalow perfectly — without any submission process at all. Project scheduled and done within two weeks of the estimate."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Garrett Park, MD</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Garrett Park homeowners trust DMV General Contracting Group to assess original hardwood under old carpet before recommending recarpeting, protect Craftsman stair trim during staircase installation, present period-appropriate fiber and color options suited to bungalow-era interiors, and confirm clearly that no historic review process applies to interior carpet choices.</p>
                </div>

                <div className="cta-banner">
                    <h2>Get a Free Carpet Estimate for Your Garrett Park Home</h2>
                    <p>Our team will visit your Garrett Park bungalow or colonial, assess what's under your existing carpet before recommending recarpeting, protect original stair trim during staircase installation, and provide a detailed room-by-room estimate — at no cost, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Carpet Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All Garrett Park, MD for Carpet Installation</h2>
                <div className="areas-grid">
                    <span className="area-pill">Garrett Park Historic District</span>
                    <span className="area-pill">Strathmore Avenue</span>
                    <span className="area-pill">Rokeby Avenue</span>
                    <span className="area-pill">Oxford Street Area</span>
                    <span className="area-pill">Keswick Street</span>
                    <span className="area-pill">MARC Station Corridor</span>
                    <span className="area-pill">Kenilworth Avenue</span>
                </div>

                <h2>Frequently Asked Questions — Carpet Installation in Garrett Park, MD</h2>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <details className="faq-item" key={index} open={index === 0 ? true : undefined}>
                            <summary className="faq-q">{item.question}</summary>
                            <div className="faq-a">{item.answer}</div>
                        </details>
                    ))}
                </div>

                <div className="internal-links">
                    <h2>Explore Our Other Services in Garrett Park, MD</h2>
                    <ul>
                        <li><Link href="/service/flooring-remodeling/garrett-park-md">Hardwood, LVP & Tile Flooring in Garrett Park, MD</Link></li>
                        <li><Link href="/service/kitchen-remodeling/garrett-park-md">Kitchen Remodeling in Garrett Park, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling/garrett-park-md">Bathroom Remodeling in Garrett Park, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/garrett-park-md">Basement Remodeling in Garrett Park, MD</Link></li>
                        <li><Link href="/service/siding-installation/garrett-park-md">Siding Installation in Garrett Park, MD</Link></li>
                        <li><Link href="/service/adu/garrett-park-md">ADU Construction in Garrett Park, MD</Link></li>
                        <li><Link href="/service/decks/garrett-park-md">Deck Building in Garrett Park, MD</Link></li>
                        <li><Link href="/service/design-build/garrett-park-md">Design-Build Contractor in Garrett Park, MD</Link></li>
                    </ul>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Install New Carpet in Your Garrett Park Home?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free estimate. We check what's under your old carpet first, protect original Craftsman stair trim, and present period-appropriate fiber and color options. No historic review needed for interior carpet. MHIC licensed. 1-year warranty.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Carpet Estimate in Garrett Park →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default GarrettParkMD;
