import Link from "next/link";
import NavitemActive from "@/components/Common/NavitemActive";

import "../carpet-city-style.scss";
import "./style.scss";

const WashingtonDC = () => {

    const faqData = [
        {
            question: "Does carpet installation in DC require a DC DOB permit?",
            answer: "No. Carpet installation is interior finish work and does not require a DC Department of Buildings permit. DC DOB permits apply to structural work, electrical, plumbing, and significant interior alterations. Your DC carpet project proceeds directly from estimate to installation with no permit, no DOB filing, and no inspection required."
        },
        {
            question: "Is DMV General Contracting Group licensed to install carpet in Washington DC?",
            answer: "Yes. DMV General Contracting Group holds DC DLCP license #410526000209 — required for all contractor work performed in the District of Columbia. Maryland MHIC license alone does not authorize DC work. We carry both MHIC #156178 for Maryland and DLCP #410526000209 for DC — the complete credential set for the DMV region. Always confirm the DLCP license number before scheduling a DC carpet project with any contractor."
        },
        {
            question: "Does my DC condo board need to approve carpet installation?",
            answer: "Most DC condo and co-op boards do not require board approval for carpet installation — it is generally considered owner-controlled interior finish work. What DC buildings do require is that the contractor meet the building's insurance minimums and complete any contractor registration before working in the building. DMV General Contracting Group handles building contractor registration and insurance documentation in-house, confirms the building's specific requirements at the estimate, and coordinates with building management before scheduling installation day."
        },
        {
            question: "Should I check for original hardwood before recarpeting my DC rowhouse?",
            answer: "Yes — and we check as a standard part of every DC rowhouse estimate. Capitol Hill Victorians, Georgetown colonials, Cleveland Park tudors, and Petworth foursquares were built when hardwood was the standard floor material — many have original oak, pine, or heart pine beneath old carpet that has never been assessed. We tell homeowners honestly what we find under old carpet, including when refinishing makes more sense than recarpeting."
        },
        {
            question: "Why does my DC English basement need moisture-barrier carpet padding?",
            answer: "DC rowhouse English basements sit on below-grade concrete slabs that transmit ground moisture upward year-round. Standard carpet padding directly on a below-grade slab creates mold conditions within 2–5 years — the source of the musty smell English basement tenants and owners experience without visible flooding. Moisture-barrier padding blocks slab moisture from reaching the carpet pad above. DMV General Contracting Group installs moisture-barrier padding on every DC English basement carpet project as standard practice."
        },
        {
            question: "How much does carpet installation cost in Washington DC?",
            answer: "A single bedroom runs $1,000–$3,000. A DC rowhouse staircase runs $1,200–$4,000. An English basement unit runs $3,500–$10,000 with moisture-barrier pad standard. A condo unit full replacement runs $3,000–$9,000+. A whole-home DC rowhouse replacement runs $9,000–$26,000+ depending on size and fiber mix. DMV General Contracting Group provides free, itemized estimates for every DC property."
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
                    Washington DC
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Washington, DC</div>
                    <h1>Carpet Installation & Replacement in Washington, DC</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏛️ DC Rowhouse & Condo Carpet Specialists</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ DLCP Licensed #410526000209</span>
                        <span className="badge">✓ Original Hardwood Assessed First</span>
                        <span className="badge">✓ Condo Board Requirements Navigated</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">🏛️</div>
                    <div>
                        <h3>Washington DC's Rowhouses, Capitol Hill Townhomes, and Georgetown Colonials Were Built When Hardwood Was the Floor Standard — and DC Condos and Co-ops Have Building Requirements That a Contractor Needs to Know Before Scheduling Installation Day</h3>
                        <p>Washington DC's residential housing stock spans two very different carpet project contexts. The first is DC's historic rowhouse stock — Capitol Hill Victorians, Georgetown Federals and colonials, Cleveland Park tudors, Petworth foursquares, and Bloomingdale and Columbia Heights rowhomes — many built in the late 1800s through 1940s when hardwood was the standard floor material. Old carpet in these homes may be covering original pine, oak, or heart pine in refinishable condition that has never been assessed. DMV General Contracting Group checks what is under old carpet at every DC rowhouse estimate before recommending recarpeting as the default path. The second context is DC's condo and co-op building stock — where carpet installation itself typically requires no board approval, but where the contractor working in the building may need to meet the building's insurance requirements, register with the front desk, and reserve the freight elevator for material delivery. DMV General Contracting Group is DLCP licensed for DC work (#410526000209), carries the insurance levels required by DC condo buildings, and navigates building contractor registration in-house before scheduling any installation day. No DC DOB permit required for carpet in either context.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a trusted <strong>carpet installer in Washington, DC</strong>? DMV General Contracting Group installs and replaces carpet for DC homeowners and condo owners — primary and secondary bedrooms, Victorian and colonial staircases, English basement units, finished lower levels, and whole-home replacement projects across Capitol Hill, Georgetown, Cleveland Park, Chevy Chase DC, Tenleytown, Petworth, Columbia Heights, and all DC neighborhoods. Premium wool for period-appropriate rowhouse formal spaces, solution-dyed nylon and triexta for family bedrooms and stair runs, moisture-barrier padding for below-grade English basements. DLCP licensed #410526000209, fully insured, 1-year workmanship warranty. Free in-home estimate. Call +1 240-730-1292.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">📋</div><strong>DLCP Licensed in DC</strong><span>License #410526000209 — required for all DC contractor work</span></div>
                    <div className="trust-item"><div className="icon">🏢</div><strong>Condo Requirements Navigated</strong><span>DC building contractor registration & insurance handled in-house</span></div>
                    <div className="trust-item"><div className="icon">🪵</div><strong>Original Hardwood First</strong><span>Assessed under old carpet before recarpeting recommended — every DC rowhouse</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>DC Carpet Projects — Two Distinct Contexts</h2>

                <div className="roi-box">
                    <h3>🏛️ What Makes Washington DC Carpet Projects Different from Maryland</h3>
                    <ul>
                        <li><strong>DLCP license required for all DC contractor work:</strong> Maryland MHIC license — the standard for Montgomery County contractors — is not valid in Washington DC. DC requires a separate DLCP (Department of Licensing and Consumer Protection) contractor license for all home improvement work performed in the District. DMV General Contracting Group holds DLCP license #410526000209, covering all DC carpet installation, flooring, and home improvement work. A Maryland-only contractor performing carpet installation in DC is working without the required DC license — Chevy Chase MD neighbors are a common source of referrals to unlicensed DC work that homeowners discover only later.</li>
                        <li><strong>DC rowhouses — original hardwood very likely under old carpet:</strong> Capitol Hill Victorians, Georgetown Federals, Cleveland Park tudors, Petworth foursquares, and most DC rowhouses built before 1950 were constructed when oak, pine, and heart pine hardwood were the standard residential floor material. Wall-to-wall carpet came later — typically layered over original flooring in the 1950s through 1980s. Many DC rowhouse owners have never assessed what is beneath their current carpet. DMV General Contracting Group checks at every DC rowhouse estimate — and tells homeowners honestly when what we find is worth refinishing rather than covering again.</li>
                        <li><strong>DC condo and co-op buildings — contractor requirements, not carpet approval:</strong> Most DC condo and co-op boards do not require board approval for carpet installation itself — carpet is generally considered owner-controlled interior finish work. What DC buildings do often require is that contractors working in the building meet specific insurance coverage levels, register with building management before the first installation day, and follow building protocols for elevator reservation and installation hours. DMV General Contracting Group carries the general liability and workers' compensation insurance levels required by DC condo buildings, navigates contractor registration with building management in-house, and confirms all building-specific requirements at the estimate appointment so nothing delays the scheduled installation day.</li>
                        <li><strong>English basements — below-grade moisture management:</strong> DC rowhouses commonly have English basement units — separately rented or owner-occupied below-grade levels that function as independent living spaces. These below-grade units sit on concrete slabs and require the same moisture-barrier padding approach as any other below-grade living space: standard carpet padding directly on a below-grade concrete slab creates mold conditions within 2–5 years in DC's climate, regardless of how dry the English basement appears. Moisture-barrier padding is standard practice on every DC English basement carpet project we install.</li>
                        <li><strong>DC DOB permit not required for carpet installation:</strong> DC Department of Buildings permits are required for structural work, electrical, plumbing, and significant interior alterations — carpet installation is interior finish work and falls entirely outside the DC DOB permit requirement. No DC DOB permit, no inspection, and no filing required for carpet installation anywhere in the District.</li>
                    </ul>
                </div>

                <h2>DC Condo & Co-op Buildings — What Requires Board Approval and What Does Not</h2>

                <div className="dc-box">
                    <h3>🏢 DC Condo Carpet — Board Approval for Carpet Itself vs. Contractor Requirements</h3>
                    <p>Most DC condo and co-op boards distinguish between modifications that require board approval — structural changes, exterior modifications, major alterations — and owner-controlled interior finish work that does not. Carpet installation generally falls in the latter category: you can replace your carpet without submitting an alteration request to the board. What DC buildings do require is that the contractor performing the work meet the building's insurance minimums, register with building management before commencing work, and follow the building's protocols for freight elevator reservation, installation hours, and debris removal. DMV General Contracting Group handles all of this in-house: we carry general liability and workers' compensation coverage meeting DC building requirements, contact building management at the estimate stage to confirm contractor requirements, complete any required contractor registration before scheduling installation, and reserve the freight elevator for material delivery. DC condo owners tell us this coordination — the part most contractors leave to the homeowner — is what separates a smooth installation day from a delayed or interrupted one. We ask about your building's specific requirements at the estimate appointment and manage the process from there.</p>
                </div>

                <h2>Carpet Installation Services We Offer in Washington, DC</h2>
                <div className="check-grid">
                    <span className="check-item">Whole-Home Rowhouse Carpet Replacement</span>
                    <span className="check-item">Primary & Secondary Bedroom Carpet</span>
                    <span className="check-item">Victorian & Colonial Staircase Carpet</span>
                    <span className="check-item">English Basement Carpet</span>
                    <span className="check-item">Condo & Co-op Unit Carpet Installation</span>
                    <span className="check-item">Premium Wool Carpet Installation</span>
                    <span className="check-item">Solution-Dyed Nylon & Triexta Carpet</span>
                    <span className="check-item">Moisture-Barrier Below-Grade Padding</span>
                    <span className="check-item">Old Carpet Removal & Disposal</span>
                    <span className="check-item">Original Hardwood Discovery Assessment</span>
                    <span className="check-item">DC Condo Building Contractor Registration</span>
                    <span className="check-item">Freight Elevator Coordination</span>
                    <span className="check-item">Carpet Stretching & Re-Stretching</span>
                    <span className="check-item">Transition Strip & Threshold Installation</span>
                </div>

                <h2>Carpet Fibers for DC Rowhouses, Condos & English Basements</h2>

                <div className="material-grid">
                    <div className="material-card">
                        <div className="m-tag">Period Appropriate</div>
                        <div className="m-icon">🐑</div>
                        <h3>Wool Carpet</h3>
                        <p>The premium choice for DC rowhouse primary suites, formal parlor-level bedrooms, and Georgetown colonial master rooms — wool's natural warmth and depth complement the architectural character of DC's Victorian, Federal, and colonial rowhouse interiors in ways synthetic fibers approximate only partially. Available in classic tones — ivory, camel, warm charcoal, sage, pewter — that read naturally against DC rowhouse woodwork, built-ins, and original trim. Holds color and pile resilience over decades. Requires professional cleaning; not appropriate for below-grade English basement or below-slab spaces where moisture is a factor.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 20–30+ yrs</span><span><strong>DC Cost:</strong> $9 – $17+ / sq ft installed</span></div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Best Durability</div>
                        <div className="m-icon">💪</div>
                        <h3>Solution-Dyed Nylon</h3>
                        <p>Our most frequent recommendation for DC secondary bedrooms, rowhouse stair runs, and condo unit bedrooms — solution-dyed nylon handles DC household traffic well and holds color at high-wear areas like stair nosings and doorways where surface-dyed fibers fade visibly within years. Available in the warm classic tones that suit DC rowhouse interiors and the range of contemporary colors that work in DC's modern condo stock. The reliable workhorse for most DC bedroom and stair projects — durable, stain-resistant, and available in the full palette range for both historic rowhouses and modern condo units.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 15–25 yrs</span><span><strong>DC Cost:</strong> $4 – $8 / sq ft installed</span></div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Family & Pet Friendly</div>
                        <div className="m-icon">🐾</div>
                        <h3>SmartStrand Triexta</h3>
                        <p>The top recommendation for DC households with pets or young children — permanent built-in stain resistance that does not diminish over time, significantly softer than standard nylon. Particularly well suited to DC condo units and rowhouse lower-level family rooms where the household's daily activity is concentrated. Triexta handles the spills, pet accidents, and tracked-in city grime that come with DC urban living more forgivingly than any other fiber. Available in the full palette range — warm neutrals for rowhouse interiors, contemporary tones for condo units. Moisture-barrier padding standard in all below-grade English basement installations regardless of fiber.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 15–25 yrs</span><span><strong>DC Cost:</strong> $4.50 – $9 / sq ft installed</span></div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Value Option</div>
                        <div className="m-icon">✅</div>
                        <h3>Polyester & PET Carpet</h3>
                        <p>A budget option for DC guest rooms, English basement rental units, or lower-priority spaces where cost is the primary driver. Modern polyester is available in a wide range of colors at a lower price than nylon or triexta. Polyester tends to mat at high-traffic areas — stair nosings, doorways — faster than nylon or triexta, making it less suitable as the primary bedroom and stair run choice in a DC rowhouse or condo where the carpet is expected to perform for 15+ years. We present polyester alongside nylon and triexta at every DC estimate with honest durability comparisons for each room's specific use pattern.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 10–15 yrs</span><span><strong>DC Cost:</strong> $3 – $6 / sq ft installed</span></div>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Our Recommendation for Washington DC:</strong> For DC rowhouse primary suites and formal parlor-level bedrooms, <strong>wool in a warm classic tone</strong> is the most architecturally appropriate choice. For secondary bedrooms and rowhouse stair runs, <strong>solution-dyed nylon in a period-compatible color</strong> delivers durability at a practical price. For DC households with pets or city grime, <strong>SmartStrand triexta</strong> handles urban living better than any alternative. For English basements and below-grade condo levels, <strong>moisture-barrier padding is standard regardless of fiber choice</strong> — below-grade concrete transmits moisture upward in DC's climate as reliably as anywhere in the region.
                </div>

                <h2>Carpet Fiber Comparison for Washington DC Homes</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="compare-table">
                            <thead>
                                <tr><th>Fiber</th><th>Period Character</th><th>Durability</th><th>Stain Resistance</th><th>Best DC Rooms</th><th>Cost</th></tr>
                            </thead>
                            <tbody>
                                <tr className="top-pick"><td>Wool ⭐ (rowhouse formal)</td><td>Highest — period authentic</td><td>Excellent — 20–30+ yrs</td><td>Moderate — needs treatment</td><td>Primary suite, formal rooms</td><td>$9 – $17+ / sq ft</td></tr>
                                <tr><td>Solution-Dyed Nylon ⭐ (secondary)</td><td>Good — classic colors available</td><td>Excellent — 15–25 yrs</td><td>Very good</td><td>Secondary bedrooms, stairs, condos</td><td>$4 – $8 / sq ft</td></tr>
                                <tr><td>SmartStrand Triexta</td><td>Good — full palette available</td><td>Excellent — 15–25 yrs</td><td>Outstanding — permanent</td><td>Pets/kids rooms, English basements</td><td>$4.50 – $9 / sq ft</td></tr>
                                <tr><td>Polyester / PET</td><td>Moderate</td><td>Moderate — 10–15 yrs</td><td>Good — surface treated</td><td>Guest rooms, rental units</td><td>$3 – $6 / sq ft</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>English Basement Carpet — Moisture-Barrier Pad Is Non-Negotiable in DC</h2>

                <div className="highlight">
                    <p>💧 <strong>DC rowhouse English basements and below-grade condo levels sit on concrete slabs</strong> that transmit ground moisture upward year-round — DC's mid-Atlantic climate and urban ground moisture conditions make this as consistent as anywhere in the region. Standard carpet padding on a below-grade concrete slab creates mold conditions within 2–5 years, producing the musty smell that English basement tenants and owners report without obvious flooding. Moisture-barrier padding — with its sealed bottom layer blocking slab moisture transmission — is standard practice on every DC English basement and below-grade carpet project we install. If a previous English basement carpet installation developed mustiness or mold without flooding, standard padding on a concrete slab is almost certainly the cause. DMV General Contracting Group installs moisture-barrier padding in every DC below-grade space without exception — not as an upgrade option, but as the correct installation for that substrate.</p>
                </div>

                <h2>Signs Your DC Home Needs New Carpet</h2>

                <div className="signs-grid">
                    <div className="sign-card"><div className="s-icon">🔍</div><h3>Matting at Doorways & Stairs</h3><p>Permanently flattened pile at DC rowhouse stair nosings and bedroom entries — fiber resilience gone beyond recovery.</p></div>
                    <div className="sign-card"><div className="s-icon">🎨</div><h3>Traffic Lane Fading</h3><p>Lighter paths through rooms along daily walking routes — surface-dyed fiber losing color where solution-dyed would not.</p></div>
                    <div className="sign-card"><div className="s-icon">🤧</div><h3>Persistent Odor</h3><p>Pet or embedded urban odor that cleaning does not resolve — deep in the pad below the carpet surface.</p></div>
                    <div className="sign-card"><div className="s-icon">🌊</div><h3>English Basement Mustiness</h3><p>Musty smell at English basement carpet — standard pad on concrete slab transmitting ground moisture upward.</p></div>
                    <div className="sign-card"><div className="s-icon">🧹</div><h3>Rippling or Buckling</h3><p>Waves across bedroom carpet — stretched beyond proper tension and no longer lying flat against the subfloor.</p></div>
                    <div className="sign-card"><div className="s-icon">🪡</div><h3>Fraying at Stair Nosings</h3><p>Unraveling carpet edges at rowhouse stair steps — structural fiber failure at the highest-wear point.</p></div>
                </div>

                <h2>Our Carpet Installation Process in Washington DC</h2>

                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free In-Home Estimate — Hardwood Assessment, Condo Requirements Confirmed</h3>
                            <p>We visit your DC property — rowhouse, condo, or English basement — and begin with the assessment appropriate to the property type. For rowhouses built before 1950: original hardwood checked at carpet edges before recarpeting is recommended. For condo and co-op units: building contractor requirements confirmed at this appointment — insurance levels, contractor registration process, elevator reservation protocol, and installation hour restrictions. All rooms and stair runs measured. Fiber and color options discussed. No DC DOB permit required — confirmed at the estimate. No charge, no obligation.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Condo Building Coordination (Where Applicable)</h3>
                            <p>For DC condo and co-op units, we contact building management after the estimate to confirm contractor registration requirements, complete any required building contractor registration, confirm insurance documentation, and reserve the freight elevator for installation day material delivery. This coordination happens before installation is scheduled — so installation day proceeds without building management delays, elevator conflicts, or contractor registration issues discovered on site.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Fiber & Color Selection — In-Home Consultation</h3>
                            <p>We bring wool samples in classic DC rowhouse tones, solution-dyed nylon and triexta in both warm classic and contemporary palettes, and polyester for lower-priority spaces — showing colors in your actual DC property lighting. For rowhouses, we discuss period-appropriate color guidance. For condo units, we present the full contemporary range. All carpet ordered from the same production dye lot before installation begins.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Old Carpet Removal — Original Flooring Documented</h3>
                            <p>Existing carpet and pad removed carefully. For DC rowhouses built before 1950, original flooring documented at removal — species, condition, and refinishability communicated to the homeowner before new carpet proceeds. All tack strips and fasteners removed. Subfloor surface prepared. For English basement and below-grade condo installations, concrete slab surface assessed for moisture staining or cracks before moisture-barrier pad is installed.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Pad & Carpet Installation — Moisture-Barrier Below Grade</h3>
                            <p>Premium padding in all above-grade rooms. Moisture-barrier padding in all English basement and below-grade spaces. Carpet installed from top bedroom level downward — rooms first, stair runs top to bottom. Victorian and Federal rowhouse staircases installed with period trim care — tack strip placement calibrated to original stringer profiles. All transitions, threshold strips, and stair nosings installed and secured. Freight elevator used for all material transport in DC condo buildings — no stairwell carries.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Final Stretch, Trim & Debris Removal</h3>
                            <p>All carpet power-stretched to proper tension. Edges trimmed at baseboards. Transition strips secured at all boundaries. Complete debris removal — including from DC building common areas and to the building's designated disposal point where required by building management. Full walkthrough with you before project close. Written warranty documentation provided.</p>
                        </div>
                    </div>
                </div>

                <h2>Carpet Installation Cost in Washington, DC</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr><th>Scope</th><th>Typical Cost — DC Property</th><th>Notes</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Single Bedroom — Nylon or Triexta</td><td>$1,000 – $2,800</td><td>Includes removal, pad, installation</td></tr>
                                <tr><td>Single Bedroom — Wool</td><td>$1,500 – $3,000+</td><td>Period-appropriate for DC rowhouse primary suite</td></tr>
                                <tr><td>DC Rowhouse Staircase</td><td>$1,200 – $4,000</td><td>$90–$240 per step; Victorian/Federal stair trim care</td></tr>
                                <tr><td>English Basement Unit</td><td>$3,500 – $10,000</td><td>Moisture-barrier pad standard on below-grade slab</td></tr>
                                <tr><td>Condo Unit — Full Replacement</td><td>$3,000 – $9,000+</td><td>Includes building coordination; size dependent</td></tr>
                                <tr><td>Whole-Home — DC Rowhouse</td><td>$9,000 – $26,000+</td><td>Wool primary suite + nylon/triexta secondary rooms + stairs</td></tr>
                                <tr><td>Carpet Re-Stretching Only</td><td>$350 – $750</td><td>Per area — no replacement needed</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>DLCP license — why it matters for DC carpet work:</strong> Maryland MHIC license does not authorize contractor work in DC. A Montgomery County contractor performing carpet installation in a DC rowhouse or condo without DLCP license #410526000209 is working unlicensed in the District — a fact that may not surface until a homeowner files an insurance claim or the building management requests license documentation. DMV General Contracting Group holds both Maryland MHIC #156178 and DC DLCP #410526000209 — the full credential set for the DMV area. When scheduling a DC carpet project, confirming the contractor's DLCP license is the first verification step.
                </div>

                <h2>What Washington DC Homeowners Say About DMV General Contracting Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We recarpeted our Capitol Hill Victorian rowhouse — four bedrooms and the main staircase. DMV General Contracting Group found original heart pine in excellent condition under the bedroom carpet and was direct that refinishing made more sense than covering it again, even though that meant less work for them. We refinished the pine in three rooms and only carpeted the fourth. The staircase wool carpet in warm ivory looks exactly right on the Victorian."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Capitol Hill, Washington DC</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We installed new carpet in our Dupont Circle condo — three bedrooms and the hallway. DMV General Contracting Group confirmed our building's contractor requirements at the estimate, handled the building management registration and insurance documentation, and reserved the freight elevator before scheduling installation day. The installation proceeded without a single building management issue. We hadn't realized how much building coordination our previous flooring contractor had left to us."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Dupont Circle, Washington DC</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We had carpet in our Georgetown rowhouse English basement go musty within three years — no flooding, just a persistent smell. DMV General Contracting Group removed it, explained the concrete slab moisture issue with standard padding, installed triexta over moisture-barrier padding, and the English basement has been completely odor-free in two years since. We wished we'd been told about moisture-barrier pad when the first installation was done."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Georgetown, Washington DC</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We hired a Maryland contractor who claimed they could do our Cleveland Park rowhouse — they did not have a DC DLCP license and the building permit office flagged it when we mentioned the work during a separate permit process. DMV General Contracting Group had their DLCP number documented from the first estimate visit, handled everything correctly, and the installation was clean and professional. Get the license number confirmed before signing."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Cleveland Park, Washington DC</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Washington DC homeowners and condo owners trust DMV General Contracting Group for carpet projects that check for original hardwood before recommending recarpeting in DC rowhouses, navigate condo building contractor requirements in-house so installation day proceeds without delays, install moisture-barrier padding in every English basement and below-grade space as standard, and carry DLCP license #410526000209 — the DC contractor credential required for all District carpet installation work.</p>
                </div>

                <div className="cta-banner">
                    <h2>Get a Free Carpet Estimate for Your Washington DC Property</h2>
                    <p>Our team will visit your DC rowhouse, condo, or English basement — assess original hardwood before recarpeting rowhouses, handle condo building contractor registration, and provide a detailed room-by-room estimate at no cost, no obligation. DLCP licensed #410526000209 for all DC work.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Carpet Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All Washington DC Neighborhoods for Carpet Installation</h2>
                <div className="areas-grid">
                    <span className="area-pill">Capitol Hill</span>
                    <span className="area-pill">Georgetown</span>
                    <span className="area-pill">Cleveland Park</span>
                    <span className="area-pill">Chevy Chase DC</span>
                    <span className="area-pill">Tenleytown</span>
                    <span className="area-pill">Dupont Circle</span>
                    <span className="area-pill">Columbia Heights</span>
                    <span className="area-pill">Petworth</span>
                    <span className="area-pill">Bloomingdale</span>
                    <span className="area-pill">Logan Circle</span>
                    <span className="area-pill">Woodley Park</span>
                    <span className="area-pill">Spring Valley</span>
                </div>

                <h2>Frequently Asked Questions — Carpet Installation in Washington DC</h2>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <details className="faq-item" key={index} open={index === 0 ? true : undefined}>
                            <summary className="faq-q">{item.question}</summary>
                            <div className="faq-a">{item.answer}</div>
                        </details>
                    ))}
                </div>

                <div className="internal-links">
                    <h2>Explore Our Other Services in Washington, DC</h2>
                    <ul>
                        <li><Link href="/service/flooring-remodeling/washington-dc">Hardwood, LVP & Tile Flooring in Washington DC</Link></li>
                        <li><Link href="/service/kitchen-remodeling/washington-dc">Kitchen Remodeling in Washington DC</Link></li>
                        <li><Link href="/service/bathroom-remodeling/washington-dc">Bathroom Remodeling in Washington DC</Link></li>
                        <li><Link href="/service/basement-remodeling/washington-dc">Basement Remodeling in Washington DC</Link></li>
                        <li><Link href="/service/siding-installation/washington-dc">Siding Installation in Washington DC</Link></li>
                        <li><Link href="/service/adu/washington-dc">ADU Construction in Washington DC</Link></li>
                        <li><Link href="/service/decks/washington-dc">Deck Building in Washington DC</Link></li>
                        <li><Link href="/service/design-build/washington-dc">Design-Build Contractor in Washington DC</Link></li>
                    </ul>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Install New Carpet in Your Washington DC Property?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free estimate. DLCP licensed #410526000209. Original hardwood assessed in DC rowhouses. Condo building requirements handled in-house. Moisture-barrier padding standard in English basements. 1-year warranty.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Carpet Estimate in Washington DC →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default WashingtonDC;
