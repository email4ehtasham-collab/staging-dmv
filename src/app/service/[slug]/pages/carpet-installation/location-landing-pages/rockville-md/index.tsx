import Link from "next/link";
import NavitemActive from "@/components/Common/NavitemActive";

import "../carpet-city-style.scss";
import "./style.scss";

const RockvilleMD = () => {

    const faqData = [
        {
            question: "Does carpet installation in Rockville require a permit?",
            answer: "No. Carpet installation is interior finish work and does not require a building permit in Rockville under any jurisdiction — neither the City of Rockville at 111 Maryland Avenue nor MoCo DPS at 2425 Reedie Drive. Rockville's dual-jurisdiction permit process applies to structural and construction work. Your carpet project proceeds directly from estimate to scheduling with no permit filing or inspection required."
        },
        {
            question: "Should I check for original hardwood before recarpeting my Twinbrook or West End home?",
            answer: "Yes — and we check as a standard part of every estimate on Rockville's older homes. Twinbrook and West End homes built in the 1950s–1960s frequently have original hardwood subfloor under old carpet. Some of that flooring is in refinishable condition — worth uncovering rather than covering again. We assess what's underneath at every older Rockville home estimate and tell you honestly what we find, including when refinishing makes more sense than recarpeting."
        },
        {
            question: "What is the best carpet for a King Farm or Congressional home in Rockville?",
            answer: "Solution-dyed nylon is our top recommendation for bedrooms and stair runs in King Farm and Congressional colonials — excellent durability and color retention under family home traffic. SmartStrand triexta is our preferred recommendation for households with pets or young children. Wool is the premium choice for primary suites. Moisture-barrier padding is standard in all below-grade basement and lower-level spaces regardless of fiber choice."
        },
        {
            question: "How does carpet installation work on a Twinbrook split-level with two stair runs?",
            answer: "We measure both stair runs individually at the estimate, order all carpet for the full project from the same production dye lot, and install stair runs in sequence from top to bottom — so transitions at each landing are coordinated and the color reads consistently between runs. All Twinbrook and West End split-level stair runs are treated as one coordinated project, not two separate stair jobs."
        },
        {
            question: "How much does carpet installation cost in Rockville, MD?",
            answer: "A single bedroom runs $900–$2,700. A finished basement runs $4,000–$13,000 with moisture-barrier pad standard. A single colonial stair run runs $1,200–$3,500. A split-level with two stair runs runs $2,000–$5,500. A whole-home replacement on a Rockville colonial or split-level typically runs $8,500–$23,000 depending on size and fiber grade. DMV General Contracting Group provides free, itemized in-home estimates for every Rockville property."
        },
        {
            question: "Is DMV General Contracting Group licensed for carpet installation in Rockville, MD?",
            answer: "Yes. DMV General Contracting Group holds Maryland MHIC license #156178 — required for home improvement work throughout Rockville in both the City of Rockville and unincorporated Montgomery County. Fully bonded, comprehensive general liability and workers' compensation insurance, and a 1-year workmanship warranty on every Rockville carpet installation."
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
                    Rockville, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Rockville, MD</div>
                    <h1>Carpet Installation & Replacement in Rockville, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏘️ King Farm · Twinbrook · West End Specialists</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ Two Housing Eras — Both Served</span>
                        <span className="badge">✓ Moisture-Barrier Basement Pad Standard</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">🏘️</div>
                    <div>
                        <h3>Rockville's Housing Stock Spans Two Genuinely Different Construction Eras — King Farm and Congressional's Modern Planned-Community Colonials, and Twinbrook and West End's 1950s–1960s Split-Levels and Cape Cods — and What to Expect Under Old Carpet Depends Entirely on Which One You're In</h3>
                        <p>Rockville is Montgomery County's county seat and one of its most diverse residential communities — a city that contains both the new urbanist planning of King Farm (built 1999–2007) and Congressional (built through the 1990s and 2000s), with their modern plywood subfloors and standard colonial stair configurations, and the established postwar neighborhoods of Twinbrook and West End, built in the 1950s and 1960s with the split-levels, cape cods, and ranchers that define that era of Montgomery County residential construction. A carpet project in a 2003 King Farm townhome is a different assessment than a carpet project in a 1958 Twinbrook split-level — different subfloor conditions, different stair configurations, and in the case of Twinbrook's older homes, the real possibility of original hardwood under old carpet worth assessing before recommending recarpeting. DMV General Contracting Group serves both Rockville housing eras with the assessment approach each requires — subfloor check on older homes before carpet is the default recommendation, multi-run stair measurement on split-levels, moisture-barrier padding in every below-grade basement regardless of era, and no permit required for carpet installation under any Rockville jurisdiction.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a trusted <strong>carpet installer in Rockville, MD</strong>? DMV General Contracting Group installs and replaces carpet for Rockville homeowners across King Farm, Congressional, Twinbrook, West End, Fallsgrove, and all Rockville communities — primary and secondary bedrooms, staircases, finished basements, lower-level family rooms, and whole-home replacement projects. Premium solution-dyed nylon, SmartStrand triexta, and wool carpet with free in-home color consultation. Old carpet removal, subfloor inspection, moisture-barrier basement padding, and full installation — no City of Rockville or MoCo DPS permit required for carpet. MHIC licensed, fully insured, 1-year workmanship warranty. Free in-home estimate. Call +1 240-730-1292.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">🏘️</div><strong>Two-Era Expertise</strong><span>King Farm modern colonials & Twinbrook 1950s split-levels — both assessed correctly</span></div>
                    <div className="trust-item"><div className="icon">🪵</div><strong>Subfloor Check First</strong><span>Older Rockville homes assessed for original hardwood before recarpeting recommended</span></div>
                    <div className="trust-item"><div className="icon">💧</div><strong>Moisture-Barrier Pad Standard</strong><span>Below-grade basement concrete — moisture-barrier padding on every basement project</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>Rockville's Two Housing Eras — What Each Means for Carpet Installation</h2>
                <p>Understanding which Rockville housing era your home belongs to changes the carpet project assessment — subfloor conditions, stair configuration, and what may be worth uncovering before recarpeting are all era-dependent:</p>

                <div className="era-grid">
                    <div className="era-card modern">
                        <h3>🏗️ King Farm, Congressional & Fallsgrove</h3>
                        <div className="era-tag">Modern Planned Communities — 1990s–2010s</div>
                        <ul>
                            <li>Standard modern plywood subfloor — no hidden-era surprises under old carpet</li>
                            <li>Colonial stair configuration — typically one primary stair run from entry to bedroom level</li>
                            <li>Finished basements on below-grade concrete slab — moisture-barrier padding required as standard</li>
                            <li>First-generation builder carpet now 15–25 years old and at natural replacement cycle</li>
                            <li>Predictable installation conditions — faster assessment, fewer unknowns</li>
                            <li>No HOA review for interior carpet choices in any Rockville planned community</li>
                        </ul>
                    </div>
                    <div className="era-card postwar">
                        <h3>🏠 Twinbrook, West End & Lincoln Park</h3>
                        <div className="era-tag">Postwar Neighborhoods — 1950s–1960s</div>
                        <ul>
                            <li>Original hardwood possible under old carpet — assessed at estimate before recarpeting recommended</li>
                            <li>Split-level stair configurations — may have two separate stair runs requiring coordinated measurement</li>
                            <li>Below-grade family rooms and basements — moisture-barrier padding standard on all concrete slab spaces</li>
                            <li>Subfloor conditions more variable — older construction assessed more carefully at removal</li>
                            <li>Cape cod attic bedroom stairs — narrow profile requires specific installation approach</li>
                            <li>No permit required for carpet regardless of home era or jurisdiction</li>
                        </ul>
                    </div>
                </div>

                <h2>Carpet Installation Services We Offer in Rockville, MD</h2>
                <div className="check-grid">
                    <span className="check-item">Whole-Home Carpet Replacement</span>
                    <span className="check-item">Primary & Secondary Bedroom Carpet</span>
                    <span className="check-item">Colonial & Split-Level Staircase Carpet</span>
                    <span className="check-item">Finished Basement Carpet</span>
                    <span className="check-item">Lower-Level Family Room Carpet</span>
                    <span className="check-item">Premium Wool Carpet Installation</span>
                    <span className="check-item">Solution-Dyed Nylon & Triexta Carpet</span>
                    <span className="check-item">Moisture-Barrier Basement Padding</span>
                    <span className="check-item">Old Carpet Removal & Disposal</span>
                    <span className="check-item">Original Hardwood Discovery Assessment</span>
                    <span className="check-item">Multi-Room Dye-Lot Coordination</span>
                    <span className="check-item">Transition Strip & Threshold Installation</span>
                    <span className="check-item">Carpet Stretching & Re-Stretching</span>
                    <span className="check-item">Seam Planning for Open Floor Plans</span>
                </div>

                <h2>Carpet Fibers for Rockville Homes</h2>

                <div className="material-grid">
                    <div className="material-card">
                        <div className="m-tag">Most Durable</div>
                        <div className="m-icon">💪</div>
                        <h3>Solution-Dyed Nylon</h3>
                        <p>Our most frequent recommendation across both Rockville housing eras — solution-dyed nylon handles the foot traffic of family bedrooms, stair runs, and lower-level rooms well. Color is embedded through the full fiber rather than coating the surface, resisting fading, bleach spots, and the traffic-lane color loss that appears in cheaper fibers over time. In King Farm and Congressional colonials, nylon in the bedrooms and on the staircase is the reliable workhorse choice. In Twinbrook and West End split-levels, nylon handles the stair run traffic that these homes generate across multiple levels. Available in a wide range of colors for both Rockville's modern and traditional home aesthetics.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 15–25 yrs</span><span><strong>Rockville Cost:</strong> $4 – $8 / sq ft installed</span></div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Best for Families</div>
                        <div className="m-icon">🐾</div>
                        <h3>SmartStrand Triexta</h3>
                        <p>The top recommendation for Rockville families with pets or young children — permanent built-in stain resistance that does not diminish over time, significantly softer than standard nylon, and highly effective in the lower-level family rooms and finished basements that are among the most-used casual spaces in both King Farm colonials and Twinbrook split-levels. Triexta's stain resistance is engineered into the fiber itself — not a topical treatment that wears off with cleaning — making it particularly appropriate for Rockville households where the lower level sees daily heavy-use traffic from children and pets.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 15–25 yrs</span><span><strong>Rockville Cost:</strong> $4.50 – $9 / sq ft installed</span></div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Premium Choice</div>
                        <div className="m-icon">🐑</div>
                        <h3>Wool Carpet</h3>
                        <p>The premium fiber for Rockville homeowners who want the best appearance and underfoot feel in primary suites and formal living areas. Wool holds color depth and resilience over decades of use in ways synthetic alternatives only approximate. Particularly well suited to King Farm and Congressional colonials with larger primary suites, and to Twinbrook and West End homes where the primary bedroom is a meaningful retreat space. Wool should be avoided in below-grade basement spaces where moisture exposure is a risk — for Rockville's finished basements, nylon or triexta with moisture-barrier padding is the correct specification.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 20–30+ yrs</span><span><strong>Rockville Cost:</strong> $9 – $17+ / sq ft installed</span></div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Value Option</div>
                        <div className="m-icon">✅</div>
                        <h3>Polyester & PET Carpet</h3>
                        <p>A budget-conscious option for Rockville homeowners replacing carpet in guest rooms or lower-priority spaces. Modern polyester is available in a wide range of colors and textures at a lower price than nylon or triexta. Polyester tends to mat at high-traffic areas — stair runs and bedroom doorways — faster than nylon or triexta over time, making it less suitable as the primary bedroom and stair run choice in Rockville's typical family home. We present polyester alongside nylon and triexta at every Rockville estimate with honest long-term durability comparisons.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 10–15 yrs</span><span><strong>Rockville Cost:</strong> $3 – $6 / sq ft installed</span></div>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Our Recommendation for Rockville:</strong> For King Farm, Congressional, and Fallsgrove bedrooms and stair runs, <strong>solution-dyed nylon</strong> is our top recommendation — predictable modern construction, standard installation, excellent durability. For Twinbrook and West End homes, we assess subfloor conditions at the estimate first — original hardwood under old carpet in these older homes is worth identifying before nylon goes on top of it. For households with pets or young children in either era, <strong>SmartStrand triexta</strong> is our preferred upgrade. In all below-grade basement spaces across all Rockville communities, <strong>moisture-barrier padding is standard</strong>.
                </div>

                <h2>Carpet Fiber Comparison for Rockville, MD Homes</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="compare-table">
                            <thead>
                                <tr><th>Fiber</th><th>Durability</th><th>Stain Resistance</th><th>Best Rockville Rooms</th><th>Cost</th></tr>
                            </thead>
                            <tbody>
                                <tr className="top-pick">
                                    <td>Solution-Dyed Nylon ⭐</td>
                                    <td>Excellent — 15–25 yrs</td>
                                    <td>Very good</td>
                                    <td>Bedrooms, stairs, family rooms — all eras</td>
                                    <td>$4 – $8 / sq ft</td>
                                </tr>
                                <tr>
                                    <td>SmartStrand Triexta</td>
                                    <td>Excellent — 15–25 yrs</td>
                                    <td>Outstanding — permanent</td>
                                    <td>Pets/kids rooms, basement, lower level</td>
                                    <td>$4.50 – $9 / sq ft</td>
                                </tr>
                                <tr>
                                    <td>Wool</td>
                                    <td>Excellent — 20–30+ yrs</td>
                                    <td>Moderate — needs treatment</td>
                                    <td>Primary suite, formal spaces above grade</td>
                                    <td>$9 – $17+ / sq ft</td>
                                </tr>
                                <tr>
                                    <td>Polyester / PET</td>
                                    <td>Moderate — 10–15 yrs</td>
                                    <td>Good — surface treated</td>
                                    <td>Guest rooms, lower-priority spaces</td>
                                    <td>$3 – $6 / sq ft</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Finished Basement Carpet in Rockville — Moisture-Barrier Pad Is Standard</h2>

                <div className="highlight">
                    <p>💧 <strong>Rockville's finished basements — in King Farm colonials and Twinbrook split-levels alike — sit on below-grade concrete slabs</strong> that transmit ground moisture upward year-round, regardless of how dry the basement appears. Standard carpet padding on a below-grade slab creates conditions for mold and mildew growth within 2–5 years in Maryland's climate, producing the musty basement smell that is one of the most common carpet complaints in Rockville. DMV General Contracting Group installs moisture-barrier padding on every Rockville basement carpet project as standard practice — the sealed foam bottom layer blocks moisture transmission from the concrete slab while providing normal padding cushion and insulation. If you have previously had basement carpet go musty without visible flooding, standard padding on a below-grade slab is almost certainly the cause. Moisture-barrier pad is a fixed part of every DMV-GC Rockville basement carpet project — not an upgrade conversation at installation.</p>
                </div>

                <h2>Signs Your Rockville Home Needs New Carpet</h2>

                <div className="signs-grid">
                    <div className="sign-card">
                        <div className="s-icon">🔍</div>
                        <h3>Matting at Doorways & Stairs</h3>
                        <p>Permanently flattened carpet at high-traffic entries and stair nosings — fiber resilience is gone beyond recovery.</p>
                    </div>
                    <div className="sign-card">
                        <div className="s-icon">🎨</div>
                        <h3>Traffic Lane Color Loss</h3>
                        <p>Visible lighter paths through rooms along daily walking routes — surface-dyed fiber fading where solution-dyed would not.</p>
                    </div>
                    <div className="sign-card">
                        <div className="s-icon">🤧</div>
                        <h3>Persistent Odor</h3>
                        <p>Pet or musty smell that cleaning does not resolve — embedded below the carpet surface in the pad or subfloor.</p>
                    </div>
                    <div className="sign-card">
                        <div className="s-icon">🌊</div>
                        <h3>Musty Basement Carpet</h3>
                        <p>Dampness or mold smell at basement carpet edges — standard pad on concrete slab transmitting ground moisture upward.</p>
                    </div>
                    <div className="sign-card">
                        <div className="s-icon">🧹</div>
                        <h3>Rippling or Buckling</h3>
                        <p>Waves or loose areas in bedroom or stair carpet — stretched beyond proper tension and no longer lying flat.</p>
                    </div>
                    <div className="sign-card">
                        <div className="s-icon">🪡</div>
                        <h3>Fraying at Transitions</h3>
                        <p>Carpet edges unraveling at doorways, stair nosings, or transition strips — structural fiber failure needing replacement.</p>
                    </div>
                </div>

                <h2>Our Carpet Installation Process in Rockville</h2>

                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free In-Home Estimate — Era-Appropriate Assessment</h3>
                            <p>We visit your Rockville home and assess based on its construction era. For King Farm, Congressional, and Fallsgrove homes: standard measurement of all rooms and stair runs, basement moisture-barrier pad confirmed, dye lot scope planned. For Twinbrook, West End, and Lincoln Park homes: subfloor assessment at carpet edges to check for original hardwood, multi-run stair measurement if split-level configuration, same basement moisture evaluation. You receive a detailed room-by-room estimate calibrated to your specific home's conditions — no charge, no obligation.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Fiber & Color Selection — In-Home Consultation</h3>
                            <p>We bring solution-dyed nylon, SmartStrand triexta, wool, and polyester samples to your Rockville home — showing colors in your actual lighting conditions in each room. Fiber recommendations are made by room and use: nylon or triexta for bedrooms and stair runs, wool for primary suites where feel matters, triexta for lower-level family rooms and basement where stain resistance is the priority. All carpet for the full project ordered from the same production dye lot before installation begins.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Old Carpet Removal — Subfloor Documented</h3>
                            <p>Existing carpet and pad removed from all project areas. For Twinbrook and West End homes, original flooring underneath documented at removal — species, condition, and refinishability assessed and reported to the homeowner before new carpet proceeds. All tack strips, staples, and fasteners removed. Subfloor surface inspected and prepared for new installation. Damaged subfloor boards secured or replaced where needed before pad installation.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Pad Installation — Moisture-Barrier Below Grade</h3>
                            <p>Premium carpet padding in all above-grade rooms and stair runs. Moisture-barrier padding in all below-grade spaces — finished basements and lower-level rooms on concrete slab — across all Rockville housing eras. New tack strips installed around all perimeters. Moisture-barrier pad sealed at bottom to prevent concrete slab moisture from reaching the carpet pad layer above.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Carpet Installation — Top Down, All Runs Coordinated</h3>
                            <p>Carpet installed from the top bedroom level downward — bedrooms first, stair runs top to bottom, lower-level rooms and basement last. For Twinbrook and West End split-levels with multiple stair runs, all runs installed in sequence from the same dye lot with transitions coordinated at each landing. Seams placed away from high-traffic paths. All transitions, threshold strips, and stair nosings installed and secured at each room boundary and landing.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Final Stretch, Trim & Walkthrough</h3>
                            <p>All carpet power-stretched to proper tension across every room. Edges trimmed cleanly at baseboards. Transition strips secured at all hard-surface boundaries. Full walkthrough on every level — every seam, stair nosing, and transition detail reviewed. Written warranty documentation provided.</p>
                        </div>
                    </div>
                </div>

                <h2>Carpet Installation Cost in Rockville, MD</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr><th>Scope</th><th>Typical Cost — Rockville Home</th><th>Notes</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Single Bedroom</td><td>$900 – $2,700</td><td>Includes removal, pad, installation</td></tr>
                                <tr><td>Finished Basement</td><td>$4,000 – $13,000</td><td>Moisture-barrier pad included as standard</td></tr>
                                <tr><td>Staircase (Colonial — single run)</td><td>$1,200 – $3,500</td><td>$75–$200 per step; waterfall or wrapped</td></tr>
                                <tr><td>Split-Level — All Stair Runs</td><td>$2,000 – $5,500</td><td>Two runs from same dye lot; Twinbrook & West End</td></tr>
                                <tr><td>Lower-Level Family Room</td><td>$2,500 – $7,500</td><td>Moisture-barrier pad if below grade</td></tr>
                                <tr><td>Whole-Home — Rockville Colonial or Split-Level</td><td>$8,500 – $23,000+</td><td>Bedrooms + stairs + basement; fiber grade dependent</td></tr>
                                <tr><td>Carpet Re-Stretching Only</td><td>$300 – $700</td><td>Per level or area — no replacement needed</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>No permit required for carpet in Rockville — any jurisdiction:</strong> Carpet installation is interior finish work and does not require a building permit in Rockville — neither from the City of Rockville at 111 Maryland Avenue nor from MoCo DPS at 2425 Reedie Drive. Rockville's dual-jurisdiction permit landscape applies to construction and structural work — carpet installation falls entirely outside that process. Your Rockville carpet project proceeds directly from estimate approval to scheduling, with no permit filing, no inspection, and no waiting period under any Rockville jurisdiction.
                </div>

                <h2>What Rockville Homeowners Say About DMV General Contracting Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We replaced all the carpet in our 2002 King Farm colonial — five bedrooms, the staircase, and the finished basement. DMV General Contracting Group confirmed moisture-barrier padding was needed in the basement as standard practice, which we hadn't been told by the original installer years ago. The whole project was done in two days, the dye lot is consistent throughout, and the basement no longer has the slight mustiness it always had with the old carpet."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">King Farm, Rockville MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We had DMV General Contracting Group come to our 1957 Twinbrook split-level to recarpet. At the estimate, they lifted the bedroom carpet edge and found original oak hardwood in good condition underneath. They told us honestly it was worth refinishing rather than covering — even though it meant less work for them. We refinished three rooms and only carpeted the lower-level family room. Exactly the advice you want from a contractor."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Twinbrook, Rockville MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We went with SmartStrand triexta throughout our Congressional-area home — two dogs and three kids made the stain resistance the only real priority. DMV General Contracting Group brought samples to the house and let us see the colors in our actual lighting, which was much more useful than looking at tiny swatches in a showroom. The triexta has been through 14 months of genuinely heavy family use and looks excellent."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Congressional, Rockville MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We replaced carpet on both stair runs of our West End split-level — the main stairs and the lower run to the basement family room. DMV General Contracting Group measured both runs at the estimate, ordered from the same dye lot, and installed them in sequence so the color reads consistently from top to bottom. Previous contractors had quoted them separately and couldn't guarantee a color match. The coordination made the difference."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">West End, Rockville MD</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Rockville homeowners trust DMV General Contracting Group to apply the right assessment approach to each housing era — subfloor check before recarpeting in older Twinbrook and West End homes, coordinated multi-run stair measurement on split-levels, moisture-barrier padding standard in every below-grade basement, and honest fiber recommendations by room across all of Rockville's diverse housing stock.</p>
                </div>

                <div className="cta-banner">
                    <h2>Get a Free Carpet Estimate for Your Rockville Home</h2>
                    <p>Our team will visit your Rockville home, assess subfloor conditions in older homes before recommending recarpeting, measure every stair run individually, and provide a detailed room-by-room estimate — at no cost, no obligation. No permit required. Available across all Rockville communities.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Carpet Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All Rockville, MD Communities for Carpet Installation</h2>
                <div className="areas-grid">
                    <span className="area-pill">King Farm</span>
                    <span className="area-pill">Congressional</span>
                    <span className="area-pill">Fallsgrove</span>
                    <span className="area-pill">Twinbrook</span>
                    <span className="area-pill">West End</span>
                    <span className="area-pill">Lincoln Park</span>
                    <span className="area-pill">Hungerford</span>
                    <span className="area-pill">Horizon Hill</span>
                    <span className="area-pill">Rockshire</span>
                    <span className="area-pill">Woodley Gardens</span>
                </div>

                <h2>Frequently Asked Questions — Carpet Installation in Rockville, MD</h2>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <details className="faq-item" key={index} open={index === 0 ? true : undefined}>
                            <summary className="faq-q">{item.question}</summary>
                            <div className="faq-a">{item.answer}</div>
                        </details>
                    ))}
                </div>

                <div className="internal-links">
                    <h2>Explore Our Other Services in Rockville, MD</h2>
                    <ul>
                        <li><Link href="/service/flooring-remodeling/rockville-md">Hardwood, LVP & Tile Flooring in Rockville, MD</Link></li>
                        <li><Link href="/service/kitchen-remodeling/rockville-md">Kitchen Remodeling in Rockville, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling/rockville-md">Bathroom Remodeling in Rockville, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/rockville-md">Basement Remodeling in Rockville, MD</Link></li>
                        <li><Link href="/service/siding-installation/rockville-md">Siding Installation in Rockville, MD</Link></li>
                        <li><Link href="/service/adu/rockville-md">ADU Construction in Rockville, MD</Link></li>
                        <li><Link href="/service/decks/rockville-md">Deck Building in Rockville, MD</Link></li>
                        <li><Link href="/service/design-build/rockville-md">Design-Build Contractor in Rockville, MD</Link></li>
                    </ul>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Install New Carpet in Your Rockville Home?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free estimate. Subfloor assessed in older homes before recarpeting recommended. Moisture-barrier basement padding standard. Multi-run stair coordination. No permit required. MHIC licensed. 1-year warranty.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Carpet Estimate in Rockville →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default RockvilleMD;
