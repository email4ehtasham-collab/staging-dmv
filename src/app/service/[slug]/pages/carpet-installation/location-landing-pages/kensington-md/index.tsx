import Link from "next/link";
import NavitemActive from "@/components/Common/NavitemActive";

import "../carpet-city-style.scss";
import "./style.scss";

const KensingtonMD = () => {

    const faqData = [
        {
            question: "What is the best carpet for a Kensington Victorian-era home?",
            answer: "For Kensington's 1890s–1920s Victorians and foursquares in the Historic District — homes on streets like Prospect Street, Calvert Place, and Montgomery — solution-dyed nylon or SmartStrand triexta is our most frequent recommendation for secondary rooms, offering durability and stain resistance well suited to a family home. For a primary suite or formal room where feel matters most, wool remains the premium choice. What differs on Kensington's oldest homes is the subfloor underneath: original wide-plank flooring and balloon framing are common, and we assess what's actually there before installing rather than assuming a modern plywood subfloor. For Kensington's mid-century homes in Rock Creek Hills, Kensington Heights, and Parkwood, subfloor conditions are typically more straightforward, and the same fiber recommendations apply."
        },
        {
            question: "Will installing new carpet on my Kensington home's original staircase damage the historic trim?",
            answer: "Not when installed correctly, which is exactly the concern on Kensington's older Victorian homes. Original staircases in the Historic District often carry balloon-framed construction, hand-finished trim, and stair details worth preserving — the same features architects working in Kensington specifically flag as worth protecting during any renovation. We install carpet using tack strips and fasteners sized and placed to avoid damaging original stair stringers, risers, and trim profiles, and we test-fit on a small area first on any home where the original woodwork's condition is uncertain. On Kensington's mid-century homes in Rock Creek Hills and Kensington Heights, staircases are typically standard mid-20th-century construction and this is less of a concern."
        },
        {
            question: "Does Kensington's Historic District Commission need to approve interior carpet?",
            answer: "No. The Town of Kensington's historic preservation review, like every historic district review process, governs exterior changes — siding, roofing, windows, additions, and similar modifications visible from the street. Carpet material, color, and style inside your Kensington home, including inside a Historic District property, are entirely your choice and are not subject to that review. DMV General Contracting Group can confirm your specific property's historic status and any relevant considerations if you'd like certainty before ordering carpet, but the review process itself won't slow down an interior carpet project."
        },
        {
            question: "What's likely under my old carpet, and should I consider refinishing hardwood instead?",
            answer: "It depends on your home's era. In Kensington's Historic District, original wide-plank hardwood subflooring is common under old carpet, since wall-to-wall carpet wasn't standard when these 1890s–1920s homes were built — some homeowners find flooring in good enough condition to refinish rather than cover again, which changes both the scope and the look of the finished room. In the mid-century neighborhoods of Rock Creek Hills, Kensington Heights, and Parkwood, subfloor is more likely to be plywood without the same refinishing potential. DMV General Contracting Group checks what's actually underneath at the estimate appointment before recommending carpet as the default path, and can bring in our flooring team if refinishing is the better fit for your home."
        },
        {
            question: "How much does carpet installation cost in Kensington, MD?",
            answer: "A single bedroom in a Kensington home typically runs $900–$2,800 including removal, pad, and installation, depending on room size and fiber grade. A finished basement, common throughout Rock Creek Hills and Kensington Heights, runs $4,500–$13,000 depending on size. A formal staircase runs $80–$220 per step depending on wrapped versus waterfall installation, with historic-home staircases sometimes running toward the higher end due to the extra care required around original trim. A whole-home carpet project across a 4–6 bedroom Kensington home typically runs $9,000–$26,000+ depending on carpet grade and fiber. DMV General Contracting Group provides free, itemized in-home estimates with exact room-by-room pricing for every Kensington property."
        },
        {
            question: "Is DMV General Contracting Group licensed for carpet installation in Kensington, MD?",
            answer: "Yes. DMV General Contracting Group holds Maryland MHIC license #156178 — required for home improvement work throughout Kensington and Montgomery County. Fully bonded, comprehensive general liability and workers' compensation insurance, and a 1-year workmanship warranty on every Kensington carpet installation."
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
                    Kensington, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Kensington, MD</div>
                    <h1>Carpet Installation & Replacement in Kensington, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏛️ Victorian & Mid-Century Home Specialists</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ Original-Stair-Safe Installation</span>
                        <span className="badge">✓ No Historic Review Needed for Interior Carpet</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">🏛️</div>
                    <div>
                        <h3>Kensington's Carpet Story Splits Across Two Genuinely Different Housing Eras — 1890s–1920s Victorians in the Historic District and 1950s–60s Mid-Century Homes Throughout Rock Creek Hills and Kensington Heights — and What's Actually Under Your Old Carpet Depends on Which One You're In</h3>
                        <p>Founded in the 1890s by developer Brainard Warner as a Victorian-era retreat along the B&O Railroad line, Kensington's historic core still carries the Queen Anne, Georgian Revival, and Victorian Cottage homes visible today on streets like Prospect Street, Calvert Place, and Montgomery — many built with original wide-plank subflooring, balloon framing, and hand-finished stair trim worth protecting during any renovation. Surrounding neighborhoods like Rock Creek Hills, Kensington Heights, and Parkwood took shape later, largely in the postwar boom of the 1950s and 1960s, with more straightforward mid-century construction underneath. A Kensington carpet project should start with knowing which era a home belongs to — it changes what we expect to find under the old carpet, and how carefully we need to work around original woodwork.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a trusted <strong>carpet installer in Kensington, MD</strong>? DMV General Contracting Group installs and replaces carpet for Kensington homeowners across every room type — primary and secondary bedrooms, formal staircases, finished basements, and full whole-home replacement projects — in both the town's Victorian-era Historic District homes and its mid-century neighborhoods like Rock Creek Hills, Kensington Heights, and Parkwood. From premium wool for formal spaces to durable nylon and triexta for family bedrooms and basements, our experienced flooring team handles everything: old carpet removal, subfloor inspection with special care on Kensington's older homes, premium padding selection, and a clean, wrinkle-free installation that protects original stair trim where it's present. MHIC licensed, fully insured, 1-year workmanship warranty. Free in-home estimate. Call +1 240-730-1292.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">🏛️</div><strong>Victorian Home Experience</strong><span>Subfloor-aware installation for Kensington's 1890s–1920s homes</span></div>
                    <div className="trust-item"><div className="icon">🪜</div><strong>Historic-Stair-Safe Fastening</strong><span>Tack strip placement that protects original trim and stringers</span></div>
                    <div className="trust-item"><div className="icon">🧶</div><strong>Premium Fiber Specialists</strong><span>Wool, solution-dyed nylon & triexta sourcing and installation</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>Why Kensington Carpet Projects Need Local Expertise</h2>

                <div className="roi-box">
                    <h3>🏛️ The Kensington Two-Era Housing Case — Explained Honestly</h3>
                    <ul>
                        <li><strong>The Historic District's Victorian homes often hide original hardwood under old carpet:</strong> Kensington's 1890s–1920s Queen Anne, Georgian Revival, and Victorian Cottage homes were commonly built with wide-plank hardwood subfloors, since wall-to-wall carpet wasn't standard practice when these homes were constructed. Before recommending a full recarpet, we check what's actually underneath — some Kensington homeowners discover original flooring worth refinishing rather than covering again, which changes the scope of the project entirely.</li>
                        <li><strong>Original staircases and trim need careful handling:</strong> Balloon-framed construction, hand-finished stair stringers, and original trim profiles are common in Kensington's older homes — the same features local architects specifically flag as worth preserving during any renovation work. We size and place tack strips and fasteners to avoid damaging this woodwork, and test-fit on older homes where the trim's condition is uncertain before committing to a full installation.</li>
                        <li><strong>Mid-century neighborhoods have a different, more straightforward profile:</strong> Rock Creek Hills and Kensington Heights took their current form largely in the 1950s and 1960s postwar building boom, with standard mid-20th-century subfloor and stair construction. Carpet projects here move faster since there's less need for the extra care required in the historic core.</li>
                        <li><strong>Historic District review does not extend to interior carpet:</strong> The Town of Kensington's preservation review governs exterior changes — siding, roofing, additions, and similar modifications visible from the street. Carpet material, color, and style inside your home, even inside a Historic District property, are entirely your choice with no review process to plan around.</li>
                    </ul>
                </div>

                <h2>Carpet Installation Services We Offer in Kensington, MD</h2>
                <div className="check-grid">
                    <span className="check-item">Whole-Home Carpet Replacement</span>
                    <span className="check-item">Primary & Secondary Bedroom Carpet</span>
                    <span className="check-item">Historic Staircase Carpet Installation</span>
                    <span className="check-item">Finished Basement Carpet</span>
                    <span className="check-item">Premium Wool Carpet Installation</span>
                    <span className="check-item">Solution-Dyed Nylon & Triexta Carpet</span>
                    <span className="check-item">Old Carpet Removal & Disposal</span>
                    <span className="check-item">Victorian-Era Subfloor Inspection</span>
                    <span className="check-item">Original Hardwood Discovery Assessment</span>
                    <span className="check-item">Carpet Stretching & Re-Stretching</span>
                    <span className="check-item">Multi-Room Dye-Lot & Seam Planning</span>
                    <span className="check-item">Transition Strip & Threshold Installation</span>
                </div>

                <h2>Carpet Styles for Kensington's Historic & Mid-Century Homes</h2>

                <div className="material-grid">
                    <div className="material-card">
                        <div className="m-tag">Premium Choice</div>
                        <div className="m-icon">🐑</div>
                        <h3>Wool Carpet</h3>
                        <p>The premium fiber of choice for Kensington homeowners who want the softest, most natural look and feel for formal living areas and primary suites — a fitting complement to a Historic District Victorian's original character, or a mid-century Rock Creek Hills home's more formal rooms. Wool holds color beautifully and resists crushing, but needs stain treatment and should be avoided anywhere moisture exposure is a risk.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 20–30+ yrs</span><span><strong>Kensington Cost:</strong> $9 – $17+ /sq ft installed</span></div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Most Versatile</div>
                        <div className="m-icon">🧶</div>
                        <h3>Solution-Dyed Nylon / SmartStrand Triexta</h3>
                        <p>Our most frequently recommended fiber across Kensington's family homes — excellent durability, outstanding stain resistance built into the fiber itself, and a soft feel that holds up across everyday household traffic. The default choice for secondary bedrooms, family rooms, and any Kensington basement.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 15–25 yrs</span><span><strong>Kensington Cost:</strong> $5 – $10+ /sq ft installed</span></div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Historic Staircase Pick</div>
                        <div className="m-icon">🪜</div>
                        <h3>Stair Carpet — Waterfall & Wrapped</h3>
                        <p>Kensington's Victorian-era homes often carry original staircases where installation technique matters as much as fiber choice. We install both waterfall and fully wrapped stair styles, using fastening methods sized to avoid damaging original stringers and trim, with a denser pad to prevent premature wear at the stair edge on heavily used staircases.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 10–20 yrs</span><span><strong>Kensington Cost:</strong> $80 – $220+ /step</span></div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Basement Specialist</div>
                        <div className="m-icon">💧</div>
                        <h3>Basement Carpet & Carpet Tile</h3>
                        <p>For finished basements throughout Rock Creek Hills, Kensington Heights, and Parkwood, we install moisture-resistant nylon or triexta over a waterproof barrier pad. For rooms with any history of water intrusion, carpet tile is a practical alternative, since individual tiles can be replaced without recarpeting the whole room.</p>
                        <div className="material-meta"><span><strong>Lifespan:</strong> 15–20 yrs</span><span><strong>Kensington Cost:</strong> $4.50 – $8.50+ /sq ft installed</span></div>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Our Recommendation for Kensington:</strong> In the <strong>Historic District</strong>, we check what's under the existing carpet first — original hardwood is common enough that refinishing, not recarpeting, is sometimes the better move. Where carpet is the right call, <strong>wool or premium nylon</strong> suits the character of these homes, installed with fastening that protects original stair trim. In <strong>Rock Creek Hills, Kensington Heights, and Parkwood</strong>, <strong>nylon or triexta</strong> is our default recommendation for durability across busy family homes.
                </div>

                <h2>Carpet Fiber Comparison for Kensington, MD Homes</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="compare-table">
                            <thead>
                                <tr><th>Fiber</th><th>Durability</th><th>Stain Resistance</th><th>Best Fit in Kensington</th><th>Cost</th></tr>
                            </thead>
                            <tbody>
                                <tr className="top-pick"><td>Solution-Dyed Nylon / Triexta ⭐</td><td>Excellent</td><td>Excellent — built into fiber</td><td>Family bedrooms, basements, high-traffic areas</td><td>$5 – $10+ /sq ft</td></tr>
                                <tr><td>Wool</td><td>Excellent</td><td>Moderate — needs treatment</td><td>Historic District formal rooms, primary suites</td><td>$9 – $17+ /sq ft</td></tr>
                                <tr><td>Polyester (PET)</td><td>Good</td><td>Good — resists water-based stains</td><td>Secondary bedrooms, guest rooms</td><td>$4 – $7.50 /sq ft</td></tr>
                                <tr><td>Olefin / Polypropylene</td><td>Moderate</td><td>Good</td><td>Budget-conscious secondary rooms</td><td>$3 – $5.50 /sq ft</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Which Rooms in Your Kensington Home Should Have Carpet?</h2>

                <div className="signs-grid">
                    <div className="sign-card">
                        <div className="s-icon">🛏️</div>
                        <h3>Primary Suite</h3>
                        <p>Wool or premium plush nylon — comfort and softness underfoot for Kensington's primary bedrooms, whether Victorian-era or mid-century.</p>
                    </div>
                    <div className="sign-card">
                        <div className="s-icon">🧒</div>
                        <h3>Kids' & Guest Bedrooms</h3>
                        <p>Solution-dyed nylon or polyester — durable, stain-resistant, and comfortable for family homes throughout Rock Creek Hills and Kensington Heights.</p>
                    </div>
                    <div className="sign-card">
                        <div className="s-icon">🪜</div>
                        <h3>Original Staircase</h3>
                        <p>Low-pile durable nylon with a dense stair pad and historic-safe fastening — protects original Victorian trim while handling daily traffic.</p>
                    </div>
                    <div className="sign-card">
                        <div className="s-icon">🏠</div>
                        <h3>Finished Basement</h3>
                        <p>Nylon or triexta over a moisture-barrier pad — the right choice for any Kensington lower level, regardless of the home's age.</p>
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

                <h2>What's Under the Carpet? A Kensington-Specific Question</h2>

                <div className="highlight">
                    <p>🪵 <strong>The Kensington hardwood factor:</strong> A meaningful share of Kensington's Historic District homes were built in the 1890s–1920s with wide-plank hardwood subflooring, from an era before wall-to-wall carpet was standard. When we remove old carpet in these homes, we sometimes find original flooring in good enough condition to refinish rather than cover again — a different scope and often a different budget than a straight recarpet. We assess this at the estimate appointment before recommending carpet as the default path, and can connect you with our flooring team if refinishing turns out to be the better option for your specific home.</p>
                </div>

                <h2>Interior Carpet & Kensington Historic District — What Homeowners Should Know</h2>

                <div className="highlight">
                    <p>📍 <strong>No historic review needed for interior carpet:</strong> The Town of Kensington's preservation review governs exterior changes to a home — siding, roofing, additions, and similar modifications visible from the street. Carpet material, color, and style inside your Kensington home, including inside a designated Historic District property, are your choice and are not subject to that review process. DMV General Contracting Group can confirm your specific property's historic status if you'd like certainty before ordering carpet, but it won't add a review step to an interior project.</p>
                </div>

                <h2>Carpet Installation Cost in Kensington, MD</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr><th>Project</th><th>Typical Kensington Cost</th><th>Notes</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Primary Bedroom (approx. 300–450 sq ft)</td><td>$1,400 – $3,800+</td><td>Wool or premium nylon common for this room</td></tr>
                                <tr><td>Secondary Bedroom (approx. 150–250 sq ft)</td><td>$900 – $2,800+</td><td>Nylon or polyester, dye-lot matched across the home</td></tr>
                                <tr><td>Finished Basement (800–1,600+ sq ft)</td><td>$4,500 – $13,000+</td><td>Moisture-barrier pad required</td></tr>
                                <tr><td>Staircase (per step)</td><td>$80 – $220+ per step</td><td>Historic-home stairs cost more due to trim protection</td></tr>
                                <tr><td>Whole-Home Project (4–6 bedrooms + basement)</td><td>$9,000 – $26,000+</td><td>Sequenced multi-day project; varies by fiber grade</td></tr>
                                <tr><td>Carpet Stretching / Re-Stretching</td><td>$180 – $600+</td><td>For existing carpet that has buckled or wrinkled</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Our Carpet Installation Process in Kensington</h2>

                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free In-Home Estimate & Full-Home Measurement</h3>
                            <p>We visit your Kensington home, measure every room that needs carpet, assess subfloor conditions — with particular attention to what's underneath in Historic District homes — and walk you through fiber, style, and padding options. Fiber samples brought to the appointment. No charge, no obligation.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Fiber, Style & Subfloor Assessment</h3>
                            <p>We help you choose the right fiber and pile for each room, and for Historic District homes, we check whether original hardwood is present under existing carpet before finalizing the plan — sometimes changing the recommendation from recarpet to refinish.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Old Carpet Removal & Trim Protection Planning</h3>
                            <p>All existing carpet and padding removed and disposed of at no extra charge. On original Kensington staircases, we plan fastening placement in advance to protect stair stringers and trim before any tack strips go down.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Subfloor Inspection & Preparation</h3>
                            <p>We inspect the subfloor in every room — squeaks, soft spots, raised nail heads, uneven areas — with extra care on Kensington's older balloon-framed homes where floor conditions can vary from room to room.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Padding, Seaming & Power-Stretch Installation</h3>
                            <p>Tack strips and padding installed room by room, with moisture-barrier pad used in any basement space. Carpet is power-stretched to eliminate future buckling, with seams planned in low-traffic areas and heat-bonded for the cleanest possible finish.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Transitions, Trim & Full-Home Walkthrough</h3>
                            <p>All transition strips and thresholds installed cleanly between carpet and hard flooring. Full debris removal. Complete walkthrough with you across every room before project close, confirming original trim and woodwork are undamaged. Written warranty provided.</p>
                        </div>
                    </div>
                </div>

                <h2>What Kensington Homeowners Say About DMV General Contracting Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We pulled up decades-old carpet in our 1905 Historic District home expecting to just recarpet, and DMV General Contracting Group found original hardwood in great shape underneath. They were upfront that refinishing made more sense than covering it again, even though it meant less carpet work for them. We ended up doing both — refinished hardwood downstairs, new wool carpet in the bedrooms."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Kensington Historic District, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our original staircase has beautiful hand-finished trim we were nervous about damaging. DMV General Contracting Group explained exactly how they'd place the tack strips to avoid the woodwork before starting, and everything came through completely undamaged. The stair carpet itself looks fantastic."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Prospect Street, Kensington, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We did a full whole-home recarpet in our Rock Creek Hills house — four bedrooms plus the finished basement. DMV General Contracting Group sequenced it so we only had one room out of use at a time, and the basement carpet with the moisture-barrier pad has held up great."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Rock Creek Hills, Kensington, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We weren't sure if the Historic District designation meant we needed approval for new carpet. DMV General Contracting Group confirmed that review only applies to the exterior, so we picked our carpet with no submission process at all."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Kensington, MD</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Kensington homeowners trust DMV General Contracting Group to recognize what's actually under old carpet in the town's Victorian-era homes, protect original stair trim during installation, and get mid-century basements right with moisture-aware materials the first time.</p>
                </div>

                <div className="cta-banner">
                    <h2>Get a Free Carpet Estimate for Your Kensington Home</h2>
                    <p>Our team will visit your Kensington home, measure every room, assess subfloor and trim conditions, and provide a detailed room-by-room estimate — at no cost, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Carpet Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All Kensington, MD Neighborhoods for Carpet Installation</h2>
                <div className="areas-grid">
                    <span className="area-pill">Kensington Historic District</span>
                    <span className="area-pill">Rock Creek Hills</span>
                    <span className="area-pill">Kensington Heights</span>
                    <span className="area-pill">Chevy Chase View</span>
                    <span className="area-pill">Parkwood</span>
                    <span className="area-pill">Homewood</span>
                    <span className="area-pill">Byeford Knolls</span>
                    <span className="area-pill">Rock Creek Highlands</span>
                </div>

                <h2>Frequently Asked Questions — Carpet Installation in Kensington, MD</h2>
                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <details className="faq-item" key={index} open={index === 0 ? true : undefined}>
                            <summary className="faq-q">{item.question}</summary>
                            <div className="faq-a">{item.answer}</div>
                        </details>
                    ))}
                </div>

                <div className="internal-links">
                    <h2>Explore Our Other Services in Kensington, MD</h2>
                    <ul>
                        <li><Link href="/service/flooring-remodeling/kensington-md">Hardwood, LVP & Tile Flooring in Kensington, MD</Link></li>
                        <li><Link href="/service/kitchen-remodeling/kensington-md">Kitchen Remodeling in Kensington, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling/kensington-md">Bathroom Remodeling in Kensington, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/kensington-md">Basement Remodeling in Kensington, MD</Link></li>
                        <li><Link href="/service/siding-installation/kensington-md">Siding Installation in Kensington, MD</Link></li>
                        <li><Link href="/service/adu/kensington-md">ADU Construction in Kensington, MD</Link></li>
                        <li><Link href="/service/decks/kensington-md">Deck Building in Kensington, MD</Link></li>
                        <li><Link href="/service/design-build/kensington-md">Design-Build Contractor in Kensington, MD</Link></li>
                    </ul>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Install New Carpet in Your Kensington Home?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free estimate. We check what's under your old carpet, protect original trim on historic staircases, and sequence whole-home projects to minimize disruption. MHIC licensed. 1-year warranty.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Carpet Estimate in Kensington →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default KensingtonMD;
