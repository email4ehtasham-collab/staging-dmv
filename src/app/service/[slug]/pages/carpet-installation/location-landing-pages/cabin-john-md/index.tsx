import Link from "next/link";
import NavitemActive from "@/components/Common/NavitemActive";

import "../carpet-city-style.scss";
import "./style.scss";

const CabinJohnMD = () => {

    const faqData = [
        {
            question: "What is the best carpet fiber for a Cabin John home?",
            answer: "For most Cabin John homes, solution-dyed nylon or SmartStrand triexta is the strongest all-around choice — excellent durability, outstanding stain resistance, and a soft feel that holds up whether you're carpeting a cozy Cabin John Gardens cottage bedroom or a larger newer home off Persimmon Tree Road or MacArthur Boulevard. Wool remains a premium option for formal living areas and primary suites in larger homes, with an unmatched natural softness, though it requires stain treatment and costs more than synthetic fibers. For lower levels and any room close to grade — common throughout Cabin John Gardens and along streets nearer the C&O Canal floodplain — we generally recommend nylon or triexta paired with a moisture-barrier pad rather than wool. We bring fiber samples to every Cabin John estimate so you can compare feel and appearance in your home's actual lighting."
        },
        {
            question: "Does my Cabin John neighborhood or co-op need to approve carpet color or style?",
            answer: "In most Cabin John neighborhoods, no. Interior finishes, including carpet material, color, and style, are the homeowner's choice and are not subject to architectural review, since Cabin John's community guidelines — including the long-standing Cabin John Community Plan — govern exterior character, tree canopy, and visible changes rather than interior finishes. The one notable exception is Cabin John Gardens, which was originally established as a housing cooperative and may carry its own governing documents depending on how a given property is currently held. If your home is part of that cooperative or any other shared-ownership structure in Cabin John, we recommend confirming your specific documents before ordering carpet, and DMV General Contracting Group is happy to help you check."
        },
        {
            question: "How much does carpet installation cost in Cabin John, MD?",
            answer: "Carpet installation costs in Cabin John vary more than in a typical single-style neighborhood because home sizes range from cozy 1930s–40s cottages to substantially larger newer construction on the same streets. A single bedroom typically runs $900–$2,800 including removal, pad, and installation. A finished lower level or basement, common throughout Cabin John Gardens and older Cabin John Park homes, runs $4,000–$12,000 depending on size and moisture-barrier pad selection. A whole-home carpet project across a larger 4–6 bedroom Cabin John property typically runs $9,000–$26,000+ depending on carpet grade and fiber. DMV General Contracting Group provides free, itemized in-home estimates with exact room-by-room pricing for every Cabin John property, cottage or new build alike."
        },
        {
            question: "Can carpet be installed in an older Cabin John Gardens or Cabin John Park lower level?",
            answer: "Yes, and it's one of our most common Cabin John projects — many of the neighborhood's original cottages date to the 1930s and '40s, and a meaningful share of their basements and lower levels still carry decades-old carpet that has never been replaced. For these spaces, we recommend moisture-resistant carpet fiber (nylon or triexta, not wool) paired with a waterproof barrier pad, since older slabs and crawl spaces near the Potomac and C&O Canal corridor can carry moisture even without visible water intrusion. For any lower level with a prior water history, carpet tile is a practical option since individual tiles can be replaced without recarpeting the whole room. We assess your specific home's moisture conditions at the estimate appointment before recommending any product."
        },
        {
            question: "How long does carpet installation take for a typical Cabin John home?",
            answer: "A single bedroom takes approximately half a day. A finished basement or lower level typically takes one to two days depending on size and layout complexity. A larger whole-home project — several bedrooms plus a staircase and a finished lower level — commonly takes 2–5 days depending on total square footage and how many rooms require furniture to be moved and reset. DMV General Contracting Group provides a detailed day-by-day schedule at the time of estimate, whether your Cabin John home is an original cottage footprint or a larger newer build."
        },
        {
            question: "Is DMV General Contracting Group licensed for carpet installation in Cabin John, MD?",
            answer: "Yes. DMV General Contracting Group holds Maryland MHIC license #156178 — required for home improvement work throughout Cabin John and Montgomery County. Fully bonded, comprehensive general liability and workers' compensation insurance, and a 1-year workmanship warranty on every Cabin John carpet installation."
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
                    Cabin John, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Cabin John, MD</div>
                    <h1>Carpet Installation & Replacement in Cabin John, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏡 Cottage & New-Build Carpet Specialists</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ Interior Carpet Rarely Needs Approval</span>
                        <span className="badge">✓ Lower-Level & Crawl-Space Moisture Aware</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">🌳</div>
                    <div>
                        <h3>Cabin John Mixes 1930s–40s Canal-Side Cottages with Larger New Construction — Carpet Sourcing Has to Span Both Ends of the Spectrum</h3>
                        <p>Cabin John's defining neighborhoods — Cabin John Park (subdivided starting in 1937, with home sizes ranging from small original cottages up past 6,500 square feet where lots have been rebuilt), Cabin John Gardens (built in 1942 as Navy-employee housing near the old David Taylor Model Basin, later purchased and held as a resident cooperative), and the Carver Road and MacArthur Boulevard corridor closer to the C&O Canal — share a wooded, semi-rural character the community has actively protected since the 1971 Cabin John Community Plan. That preservation means the housing stock itself is unusually varied: cozy original brick cottages sit on the same streets as substantially larger newer homes, and a carpet project here is rarely one-size-fits-all. Lower levels and crawl spaces near the Potomac River and canal corridor also need moisture-aware fiber and pad selection regardless of how recently a home was built.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a trusted <strong>carpet installer in Cabin John, MD</strong>? DMV General Contracting Group installs and replaces carpet for Cabin John homeowners across all room types — primary bedrooms, secondary bedrooms, staircases, finished basements and lower levels, and full whole-home replacement projects. Whether your home is an original Cabin John Gardens cottage or a larger newer build off Persimmon Tree Road or MacArthur Boulevard, we bring the right fiber for the space: premium wool and solution-dyed nylon for formal living areas, and moisture-aware fiber with waterproof-barrier padding for lower levels near the river and canal corridor. Our experienced flooring team handles everything: old carpet removal, subfloor inspection and preparation, premium padding selection, and a clean, wrinkle-free installation with properly finished edges and transitions. MHIC licensed, fully insured, 1-year workmanship warranty. Free in-home estimate. Call +1 240-730-1292.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">🏡</div><strong>Cottage-to-New-Build Range</strong><span>Comfortable sourcing for both original and rebuilt Cabin John homes</span></div>
                    <div className="trust-item"><div className="icon">🧶</div><strong>Premium Fiber Specialists</strong><span>Wool, solution-dyed nylon & triexta sourcing and installation</span></div>
                    <div className="trust-item"><div className="icon">💧</div><strong>Lower-Level & Crawl-Space Experts</strong><span>Moisture-aware carpet near the Potomac & C&O Canal corridor</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>Why Cabin John Carpet Projects Need a Flexible, Neighborhood-Aware Approach</h2>

                <div className="roi-box">
                    <h3>🌳 The Cabin John Carpet Case — Explained Honestly</h3>
                    <ul>
                        <li><strong>Home sizes vary more here than in most single-style neighborhoods:</strong> Cabin John Park has been developing since 1937, and its lots now range from original cottage footprints to homes well over 6,000 square feet where rebuilding has taken place — meaning fiber, padding, and budget recommendations that work for one Cabin John home may not fit the next one on the same street.</li>
                        <li><strong>Cabin John Gardens' original cottages often still carry decades-old lower-level carpet:</strong> Built in 1942 as housing for civilian employees of the nearby Naval Surface Warfare Center's predecessor, and later purchased by residents as a cooperative, many of these compact brick homes have basements or crawl-adjacent lower rooms whose carpet has never been replaced. We assess slab and moisture conditions before recommending fiber or pad rather than assuming a modern build.</li>
                        <li><strong>Interior carpet generally isn't subject to architectural review — with one notable exception:</strong> Cabin John's community guidelines focus on preserving the neighborhood's tree canopy and exterior character rather than interior finishes. The one area worth double-checking is Cabin John Gardens, given its cooperative history — we recommend confirming your specific property's governing documents before ordering carpet.</li>
                        <li><strong>Proximity to the Potomac River and C&O Canal towpath affects lower-level moisture:</strong> Homes closer to the canal corridor and river floodplain, particularly along and near MacArthur Boulevard and Carver Road, deserve a closer look at slab and crawl-space moisture before any lower-level carpet goes down, regardless of the home's age.</li>
                    </ul>
                </div>

                <h2>Carpet Installation Services We Offer in Cabin John, MD</h2>
                <div className="check-grid">
                    <span className="check-item">Whole-Home Carpet Replacement</span>
                    <span className="check-item">Primary & Secondary Bedroom Carpet</span>
                    <span className="check-item">Staircase Carpet Installation</span>
                    <span className="check-item">Finished Basement & Lower-Level Carpet</span>
                    <span className="check-item">Premium Wool Carpet Installation</span>
                    <span className="check-item">Solution-Dyed Nylon & Triexta Carpet</span>
                    <span className="check-item">Old Carpet Removal & Disposal</span>
                    <span className="check-item">Subfloor Inspection & Repair</span>
                    <span className="check-item">Moisture-Barrier Pad for Below-Grade Rooms</span>
                    <span className="check-item">Carpet Stretching & Re-Stretching</span>
                    <span className="check-item">Multi-Room Dye-Lot & Seam Planning</span>
                    <span className="check-item">Transition Strip & Threshold Installation</span>
                </div>

                <h2>Carpet Styles for Cabin John's Cottages, New Builds & Lower Levels</h2>

                <div className="material-grid">
                    <div className="material-card">
                        <div className="m-tag">Premium Choice</div>
                        <div className="m-icon">🐑</div>
                        <h3>Wool Carpet</h3>
                        <p>The premium fiber of choice for Cabin John homeowners who want the softest, most natural look and feel in formal living areas and primary suites, especially in larger newer homes. Wool holds color beautifully and resists crushing, but needs stain treatment and should be avoided below-grade or anywhere moisture exposure is a risk.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 20–30+ yrs</span><span><strong>Cabin John Cost:</strong> $9 – $18+ /sq ft installed</span></div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Most Versatile</div>
                        <div className="m-icon">🧶</div>
                        <h3>Solution-Dyed Nylon / SmartStrand Triexta</h3>
                        <p>Our most frequently recommended fiber across Cabin John, whether the home is an original Cabin John Gardens cottage or a newer build — excellent durability, outstanding stain resistance built into the fiber itself, and a soft feel that performs well regardless of home size. The default choice for lower levels and any below-grade Cabin John room.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 15–25 yrs</span><span><strong>Cabin John Cost:</strong> $5 – $11+ /sq ft installed</span></div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Staircase Pick</div>
                        <div className="m-icon">🪜</div>
                        <h3>Stair Carpet — Waterfall & Wrapped</h3>
                        <p>Newer, larger Cabin John homes often carry longer staircases where installation technique matters as much as fiber choice. We install both waterfall (carpet flows over the tread nose) and fully wrapped stair styles, selecting a denser pad specifically to prevent premature wear at the stair edge.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 10–20 yrs</span><span><strong>Cabin John Cost:</strong> $85 – $250+ /step</span></div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Lower-Level Specialist</div>
                        <div className="m-icon">💧</div>
                        <h3>Basement Carpet & Carpet Tile</h3>
                        <p>For Cabin John Gardens and Cabin John Park's original lower levels, and any home near the Potomac or C&O Canal corridor, we install moisture-resistant nylon or triexta over a waterproof barrier pad. For rooms with any history of water intrusion, carpet tile is a practical alternative — individual tiles can be replaced without recarpeting the whole room.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 15–20 yrs</span><span><strong>Cabin John Cost:</strong> $4.50 – $9+ /sq ft installed</span></div>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Our Recommendation for Cabin John:</strong> For <strong>primary suites and formal living areas</strong> in larger homes, premium <strong>wool or plush solution-dyed nylon</strong> delivers the look and feel homeowners want. For <strong>lower levels</strong> in Cabin John Gardens, Cabin John Park, or anywhere near the canal corridor, <strong>nylon or triexta over a moisture-barrier pad</strong> is the safer long-term choice — wool and moisture do not mix well. For <strong>staircases</strong> in newer, larger homes, a denser low-pile fiber with a stair-specific pad holds up best against daily traffic.
                </div>

                <h2>Carpet Fiber Comparison for Cabin John, MD Homes</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="compare-table">
                            <thead>
                                <tr><th>Fiber</th><th>Durability</th><th>Stain Resistance</th><th>Best Fit in Cabin John</th><th>Cost</th></tr>
                            </thead>
                            <tbody>
                                <tr className="top-pick">
                                    <td>Solution-Dyed Nylon / Triexta ⭐</td>
                                    <td>Excellent</td>
                                    <td>Excellent — built into fiber</td>
                                    <td>Whole-home, lower levels, high-traffic areas</td>
                                    <td>$5 – $11+ /sq ft</td>
                                </tr>
                                <tr>
                                    <td>Wool</td>
                                    <td>Excellent</td>
                                    <td>Moderate — needs treatment</td>
                                    <td>Primary suites, formal living areas (above grade only)</td>
                                    <td>$9 – $18+ /sq ft</td>
                                </tr>
                                <tr>
                                    <td>Polyester (PET)</td>
                                    <td>Good</td>
                                    <td>Good — resists water-based stains</td>
                                    <td>Secondary bedrooms, guest rooms</td>
                                    <td>$4 – $8 /sq ft</td>
                                </tr>
                                <tr>
                                    <td>Olefin / Polypropylene</td>
                                    <td>Moderate</td>
                                    <td>Good</td>
                                    <td>Budget-conscious secondary rooms</td>
                                    <td>$3 – $6 /sq ft</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Which Rooms in Your Cabin John Home Should Have Carpet?</h2>

                <div className="signs-grid">
                    <div className="sign-card">
                        <div className="s-icon">🛏️</div>
                        <h3>Primary Suite</h3>
                        <p>Wool or premium plush nylon — comfort and softness underfoot are the priority, especially in larger newer Cabin John homes.</p>
                    </div>
                    <div className="sign-card">
                        <div className="s-icon">🧒</div>
                        <h3>Kids' & Guest Bedrooms</h3>
                        <p>Solution-dyed nylon or polyester — durable, stain-resistant, and comfortable in both cottage-scale and larger bedrooms.</p>
                    </div>
                    <div className="sign-card">
                        <div className="s-icon">🪜</div>
                        <h3>Staircase</h3>
                        <p>Low-pile durable nylon with a dense stair pad — especially useful in Cabin John's longer, newer-construction staircases.</p>
                    </div>
                    <div className="sign-card">
                        <div className="s-icon">🏡</div>
                        <h3>Finished Basement / Lower Level</h3>
                        <p>Nylon or triexta over a moisture-barrier pad — essential for Cabin John Gardens, Cabin John Park, and any home near the canal corridor.</p>
                    </div>
                    <div className="sign-card">
                        <div className="s-icon">💼</div>
                        <h3>Home Office</h3>
                        <p>Loop or low-pile carpet if using a rolling desk chair — plush styles wear unevenly under repeated chair traffic.</p>
                    </div>
                    <div className="sign-card">
                        <div className="s-icon">🚫</div>
                        <h3>Kitchens & Bathrooms</h3>
                        <p>Not recommended — moisture and spills call for hardwood, LVP, or tile in these rooms instead of carpet.</p>
                    </div>
                </div>

                <h2>Carpet Padding — Especially Important in Cabin John's Older Lower Levels</h2>

                <div className="highlight">
                    <p>💧 <strong>The Cabin John lower-level factor:</strong> A meaningful share of Cabin John's original housing stock — including Cabin John Gardens, built in 1942 for Navy-employee families and later purchased by residents as a cooperative — has a finished lower level whose original carpet has never been replaced. Homes near the Potomac and C&O Canal corridor can carry moisture even without any visible water history, which makes a waterproof moisture-barrier pad essential under any new lower-level carpet, not optional. We assess your specific home's slab and moisture conditions at the estimate appointment before recommending fiber or pad.</p>
                </div>

                <h2>Interior Carpet & Cabin John Community Requirements — What Homeowners Should Know</h2>

                <div className="highlight">
                    <p>📍 <strong>Interior carpet generally doesn't require approval:</strong> Cabin John's community guidelines, including the long-standing Cabin John Community Plan, focus on preserving the neighborhood's tree canopy and exterior character rather than governing interior finishes. Carpet material, color, and style inside your Cabin John home are typically your choice with no review process to plan around. The one area worth checking is Cabin John Gardens, given its history as a resident-purchased cooperative — governing documents can vary by property. DMV General Contracting Group can help you confirm your specific situation if you'd like certainty before ordering carpet.</p>
                </div>

                <h2>Carpet Installation Cost in Cabin John, MD</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr><th>Project</th><th>Typical Cabin John Cost</th><th>Notes</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Primary Bedroom (approx. 300–450 sq ft)</td><td>$1,400 – $3,800+</td><td>Wool or premium nylon common in larger homes</td></tr>
                                <tr><td>Secondary Bedroom (approx. 150–280 sq ft)</td><td>$900 – $2,800+</td><td>Nylon or polyester, dye-lot matched across the home</td></tr>
                                <tr><td>Finished Basement / Lower Level (900–1,600+ sq ft)</td><td>$4,000 – $12,000+</td><td>Moisture-barrier pad required</td></tr>
                                <tr><td>Staircase (per step)</td><td>$85 – $250+ per step</td><td>Wrapped installation costs more than waterfall</td></tr>
                                <tr><td>Whole-Home Project (4–6 bedrooms + lower level)</td><td>$9,000 – $26,000+</td><td>Sequenced multi-day project; varies by fiber grade</td></tr>
                                <tr><td>Carpet Stretching / Re-Stretching</td><td>$180 – $600+</td><td>For existing carpet that has buckled or wrinkled</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Our Carpet Installation Process in Cabin John</h2>

                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free In-Home Estimate & Full-Home Measurement</h3>
                            <p>We visit your Cabin John home, measure every room that needs carpet — bedrooms, staircases, and any finished lower level — assess subfloor and moisture conditions, and walk you through fiber, style, and padding options suited to your home's age and layout. Fiber samples brought to the appointment. No charge, no obligation.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Fiber, Style & Padding Selection Across Every Room</h3>
                            <p>We help you choose the right fiber and pile for each room type — premium wool or plush nylon for the primary suite, durable nylon for secondary bedrooms and the staircase, and moisture-appropriate fiber for any lower level — along with a detailed written quote broken out by room.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Old Carpet Removal & Lower-Level Moisture Assessment</h3>
                            <p>All existing carpet and padding removed and disposed of at no extra charge. For finished basements and lower levels, especially in older Cabin John Gardens and Cabin John Park homes, we inspect the slab for moisture history before selecting a replacement pad and fiber.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Subfloor Inspection & Preparation</h3>
                            <p>We inspect the subfloor in every room — squeaks, soft spots, raised nail heads, uneven areas — and address issues before the pad goes down, across the full scope of your Cabin John project.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Padding, Seaming & Power-Stretch Installation</h3>
                            <p>Tack strips and padding installed room by room, with moisture-barrier pad used in every below-grade space. Carpet is power-stretched to eliminate future buckling, with seams planned in low-traffic areas and heat-bonded for the cleanest possible finish across every room.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Transitions, Trim & Full-Home Walkthrough</h3>
                            <p>All transition strips and thresholds installed cleanly between carpet and hard flooring. Full debris removal. Complete walkthrough with you across every room before project close, checking seams, edges, and stair installations. Written warranty provided.</p>
                        </div>
                    </div>
                </div>

                <h2>What Cabin John Homeowners Say About DMV General Contracting Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our Cabin John Gardens cottage still had the original basement carpet from when the house was built in the 1940s. DMV General Contracting Group checked the slab, recommended a moisture-barrier pad, and installed nylon carpet that feels completely different from what we had for eighty years."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Cabin John Gardens, Cabin John, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We rebuilt our home a few years ago and needed carpet across five bedrooms plus the main staircase. DMV General Contracting Group sequenced the whole project so we only had one or two rooms out of use at a time, and the dye lot matched perfectly across every bedroom."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Cabin John Park, Cabin John, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We wanted wool carpet in the primary suite of our home near MacArthur Boulevard and were told by another contractor it would take weeks to source. DMV General Contracting Group got samples to us within days and the installation was flawless — no visible seams anywhere in the room."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">MacArthur Boulevard area, Cabin John, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We weren't sure if our co-op needed to approve new carpet color. DMV General Contracting Group helped us confirm what our specific documents actually required, and we ended up picking exactly what we wanted with almost no back-and-forth."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Cabin John, MD</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Cabin John homeowners trust DMV General Contracting Group to work across the full range of the neighborhood's homes — from original cottages to larger new construction — source and install premium fiber correctly, and get lower levels right with moisture-aware materials the first time.</p>
                </div>

                <div className="cta-banner">
                    <h2>Get a Free Carpet Estimate for Your Cabin John Home</h2>
                    <p>Our team will visit your Cabin John home, measure every room, assess your lower level's moisture conditions, and provide a detailed room-by-room estimate — at no cost, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Carpet Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All Cabin John, MD Neighborhoods for Carpet Installation</h2>
                <div className="areas-grid">
                    <span className="area-pill">Cabin John Park</span>
                    <span className="area-pill">Cabin John Gardens</span>
                    <span className="area-pill">Carver Road</span>
                    <span className="area-pill">MacArthur Boulevard Corridor</span>
                    <span className="area-pill">Persimmon Tree Road</span>
                    <span className="area-pill">Seven Locks Road Area</span>
                    <span className="area-pill">C&O Canal / River Corridor</span>
                    <span className="area-pill">Glen Echo Heights Border</span>
                </div>

                <h2>Frequently Asked Questions — Carpet Installation in Cabin John, MD</h2>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <details className="faq-item" key={index} open={index === 0 ? true : undefined}>
                            <summary className="faq-q">{item.question}</summary>
                            <div className="faq-a">{item.answer}</div>
                        </details>
                    ))}
                </div>

                <div className="internal-links">
                    <h2>Explore Our Other Services in Cabin John, MD</h2>
                    <ul>
                        <li><Link href="/service/flooring-remodeling/cabin-john-md">Hardwood, LVP & Tile Flooring in Cabin John, MD</Link></li>
                        <li><Link href="/service/kitchen-remodeling/cabin-john-md">Kitchen Remodeling in Cabin John, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling/cabin-john-md">Bathroom Remodeling in Cabin John, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/cabin-john-md">Basement Remodeling in Cabin John, MD</Link></li>
                        <li><Link href="/service/siding-installation/cabin-john-md">Siding Installation in Cabin John, MD</Link></li>
                        <li><Link href="/service/adu/cabin-john-md">ADU Construction in Cabin John, MD</Link></li>
                        <li><Link href="/service/decks/cabin-john-md">Deck Building in Cabin John, MD</Link></li>
                        <li><Link href="/service/design-build/cabin-john-md">Design-Build Contractor in Cabin John, MD</Link></li>
                    </ul>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Install New Carpet in Your Cabin John Home?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free estimate. We measure every room, source premium fiber, handle lower-level moisture correctly, and sequence projects to minimize disruption — whether your home is an original cottage or a larger new build. MHIC licensed. 1-year warranty.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Carpet Estimate in Cabin John →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default CabinJohnMD;
