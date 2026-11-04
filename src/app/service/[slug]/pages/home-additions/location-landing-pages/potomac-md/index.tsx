import Link from "next/link";
import NavitemActive from "@/components/Common/NavitemActive";

import "../city-service-style.scss";
import "./style.scss";

const PotomacMD = () => {

    const faqData = [
        {
            question: "What zoning applies to home additions in Potomac, MD?",
            answer: "Most of Potomac is zoned R-200 — a low-density estate residential classification requiring approximately 2-acre minimum lot size and setting minimum setbacks of 50 feet front, 25 feet per side, and 35 feet rear. R-200 setbacks define the buildable envelope within which any addition must fit. On most Potomac estate lots, these setbacks leave substantial buildable area for rear and side additions. DMV General Contracting Group performs a full R-200 setback and FAR review at the free consultation — at no charge — to confirm what is buildable on your specific parcel before design begins."
        },
        {
            question: "Do I need HOA approval for a home addition in Potomac?",
            answer: "Many Potomac communities require HOA Architectural Review Committee (ARC) approval for additions and exterior modifications — including rear additions not visible from the street. The ARC submission typically includes architectural drawings, exterior elevations, material specifications, and a site plan. ARC approval is typically required before MoCo DPS permit filing. DMV General Contracting Group prepares and manages the complete HOA ARC submission in-house, initiating the process in parallel with permit document preparation so HOA and county review run concurrently rather than sequentially."
        },
        {
            question: "Where are Potomac home addition permits filed?",
            answer: "Potomac is unincorporated Montgomery County — all home addition permits are filed with Montgomery County DPS at 2425 Reedie Drive, Wheaton, MD 20902. Unlike Kensington, Garrett Park, Gaithersburg, or Rockville, Potomac has no separate municipal permit office. MoCo DPS handles all structural, electrical, plumbing, and HVAC permits for Potomac additions. DMV General Contracting Group's in-house permit team manages the full submission and all county correspondence — you do not contact the county at any point in the process."
        },
        {
            question: "How much does a home addition cost in Potomac, MD?",
            answer: "Potomac addition costs are at the upper end of the Montgomery County range, reflecting estate-scale homes and premium exterior material requirements. A bump-out runs $55,000–$140,000. A single room addition runs $140,000–$260,000. A master suite addition runs $180,000–$380,000+. A full second-story addition runs $280,000–$550,000+. All costs include in-house architectural design, structural engineering, MoCo DPS permit fees, and complete construction through final finishes. DMV General Contracting Group provides free, detailed estimates for every Potomac property."
        },
        {
            question: "How long does a home addition take in Potomac, MD?",
            answer: "A bump-out takes 3–5 months. A single room or family room addition takes 5–8 months. A master suite addition takes 5–9 months. A second-story addition takes 8–14 months. These timelines include design, HOA ARC review (where required), MoCo DPS permit processing (8–12 weeks for Potomac estate-scale additions), and construction. DMV General Contracting Group manages all phases in-house to minimize delays between stages."
        },
        {
            question: "Does DMV General Contracting Group handle architectural design in-house for Potomac additions?",
            answer: "Yes. DMV General Contracting Group has a full in-house architectural and structural engineering team based in North Bethesda. We design your Potomac addition from initial concept through permit-ready construction documents — and through the HOA ARC submission package where required. You do not need to hire a separate architect. Our design-build approach means the same firm that designs your Potomac addition also builds it, giving you a single point of contact and full accountability throughout."
        }
    ];

    const reviewData = [
        {
            text: "We added a master suite wing to our Potomac colonial — about 650 square feet with a primary bedroom, spa bathroom, and walk-in closet. DMV General Contracting Group handled the HOA ARC submission for our neighborhood, prepared the full architectural package for MoCo DPS, and built the addition in brick that matches our existing home's coursing exactly. Standing in the rear yard, you cannot tell where the original house ends. The ARC approval was the part we had dreaded most — DMV handled it entirely.",
            location: "Potomac, MD"
        },
        {
            text: "We converted our Potomac ranch into a two-story estate — a full second-story addition above the original single-level footprint. DMV General Contracting Group's structural engineers assessed our existing foundation first, confirmed it could carry the load, and designed a roofline for the second story that continues the original home's pitch. The result is a home that looks as if it was always two stories. The project ran 11 months start to finish, including the MoCo permit process.",
            location: "Potomac, MD"
        },
        {
            text: "Our Potomac home needed a family room addition — the original floor plan ended abruptly at the rear and we always felt the living space was undersized for the lot. DMV General Contracting Group added a 550 sq ft great room with coffered ceilings, a full wall of windows onto the rear terrace, and an open connection to our existing kitchen. The addition has the same hardwood as the rest of the main level and the same trim profile. Every person who sees it assumes it was original.",
            location: "Potomac, MD"
        },
        {
            text: "We looked at three contractors for our in-law suite addition in Potomac. The other two outsourced architectural design to a separate firm. DMV General Contracting Group brought their in-house architect to the first consultation, walked our lot, identified the setback constraints on our R-200 parcel, and had schematic plans for us within two weeks. The addition was designed, permitted through MoCo DPS, and built without us ever contacting the county once.",
            location: "Potomac, MD"
        }
    ];

    return (
        <div className="city-service-detail-page">
            <NavitemActive nav="service" />
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/home-additions">Home Additions</Link><span>›</span>
                    Potomac, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Potomac, MD</div>
                    <h1>Home Additions in Potomac, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏛️ Estate-Scale Addition Specialists</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed #156178</span>
                        <span className="badge">✓ In-House Architects &amp; Engineers</span>
                        <span className="badge">✓ R-200 Zoning &amp; HOA Review Experts</span>
                        <span className="badge">✓ MoCo DPS Permit Team</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">🏛️</div>
                    <div>
                        <h3>Home Additions in Potomac Are Estate-Scale Projects on R-200 Lots — Where the Homes Are Large, the Architecture Demands Precise Integration, HOA Architectural Review Precedes the County Permit, and Getting Every Step Right Matters More Than Anywhere Else in Montgomery County</h3>
                        <p>Potomac is Montgomery County&apos;s premier estate community — R-200 zoning, multi-acre lots, 5,000–10,000 sq ft homes, and a residential market where design standards and architectural expectations are uniformly high. A home addition in Potomac is not simply a construction project: it is a design exercise that must integrate seamlessly with an existing estate-scale home&apos;s roofline, exterior materials, window proportions, and interior flow — without looking like an addition at all. Many Potomac communities also have HOA Architectural Review Committees that must approve exterior modifications before a Montgomery County DPS permit can be filed. DMV General Contracting Group brings in-house architects, structural engineers, and a dedicated MoCo DPS permit team to every Potomac addition project. We prepare and manage HOA ARC submissions before permit filing begins. From a rear family room addition that expands the main living level on a wooded Potomac lot, to a master suite addition that completes a primary wing the original builder left undersized, to a full second-story addition that transforms a sprawling ranch into a two-level estate — DMV General Contracting Group handles every phase in-house, under one contract, with the same team from design through final inspection.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a licensed <strong>home addition contractor in Potomac, MD</strong>? DMV General Contracting Group designs and builds all types of home additions for Potomac&apos;s estate properties — room additions, second-story additions, master suite additions, family room expansions, bump-outs, sunrooms, and in-law suite additions. Full in-house design-build capability: architects, structural engineers, permit specialists, and all construction trades under one contract. R-200 zoning and setback review included. HOA Architectural Review Committee submissions prepared and managed in-house. All permits filed with MoCo DPS at 2425 Reedie Drive. MHIC licensed #156178, fully insured, 1-year workmanship warranty. Free in-home consultation. Call +1 240-730-1292.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">📐</div><strong>In-House Architects</strong><span>Estate-scale addition design — no outside architect needed</span></div>
                    <div className="trust-item"><div className="icon">🏛️</div><strong>HOA ARC Submission</strong><span>Potomac HOA Architectural Review managed in-house before permit filing</span></div>
                    <div className="trust-item"><div className="icon">📋</div><strong>MoCo DPS Permit Team</strong><span>All permits filed at 2425 Reedie Drive, Wheaton — tracked in-house</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>Home Addition Types We Build in Potomac, MD</h2>
                <div className="addition-grid">
                    <div className="addition-card"><div className="a-tag">Most Requested</div><div className="a-icon">🛏️</div><h3>Master Suite Addition</h3><p>Potomac&apos;s estate homes are large — but many were built with primary suites that no longer match contemporary expectations for size, closet space, or bathroom quality. A master suite addition designed by DMV General Contracting Group&apos;s architects for a Potomac estate home is a fully integrated wing — generous primary bedroom, spa-caliber bathroom with walk-in shower, soaking tub, and double vanity, and a walk-in closet system designed to the primary owner&apos;s specification.</p><div className="addition-meta"><span><strong>Size:</strong> 500–900 sq ft</span><span><strong>Cost:</strong> $180,000 – $380,000+</span><span><strong>Timeline:</strong> 5–9 months</span></div></div>
                    <div className="addition-card"><div className="a-tag">Highest Square Footage</div><div className="a-icon">🏠</div><h3>Second-Story Addition</h3><p>For Potomac ranches and single-level estates where expanding the footprint is constrained by lot features, setbacks, or landscape investments, a second-story addition adds the most new square footage per dollar of lot used. DMV General Contracting Group&apos;s structural engineers assess the existing foundation and wall structure for load capacity, design the second-story framing and roofline to continue the existing home&apos;s profile, and integrate the new level so the transition between old and new is architecturally invisible from inside and out.</p><div className="addition-meta"><span><strong>Size:</strong> 800–2,500+ sq ft</span><span><strong>Cost:</strong> $280,000 – $550,000+</span><span><strong>Timeline:</strong> 8–14 months</span></div></div>
                    <div className="addition-card"><div className="a-tag">Highest Family Impact</div><div className="a-icon">🛋️</div><h3>Family Room / Great Room Addition</h3><p>A rear-of-home family room or great room addition is among the most transformative single additions on a Potomac estate — extending the main living level into the rear yard with vaulted or coffered ceilings, a full wall of windows or sliding glass doors opening to the terrace, and an open connection to the existing kitchen or dining room. DMV General Contracting Group designs Potomac family room additions to the estate home&apos;s interior language — architectural millwork, custom cabinetry, wood beam ceilings.</p><div className="addition-meta"><span><strong>Size:</strong> 400–900 sq ft</span><span><strong>Cost:</strong> $160,000 – $300,000+</span><span><strong>Timeline:</strong> 5–8 months</span></div></div>
                    <div className="addition-card"><div className="a-tag">Full Living Space</div><div className="a-icon">🏡</div><h3>In-Law / Guest Suite Addition</h3><p>A fully self-contained guest or in-law suite addition — bedroom, full bathroom, kitchenette, and separate entrance — adds multi-generational living capacity to a Potomac estate home without the exterior character of a detached ADU. Designed as an integrated wing of the main residence with interior connection, privacy-appropriate layout, and exterior appearance that reads as a seamless part of the estate.</p><div className="addition-meta"><span><strong>Size:</strong> 450–900 sq ft</span><span><strong>Cost:</strong> $175,000 – $320,000+</span><span><strong>Timeline:</strong> 6–9 months</span></div></div>
                    <div className="addition-card"><div className="a-tag">Targeted Expansion</div><div className="a-icon">📐</div><h3>Bump-Out Addition</h3><p>A precision extension of an existing room — 3–12 feet out from an existing exterior wall — that solves a specific space problem without the scope of a full addition. Common Potomac bump-out applications include expanding a primary bathroom into a walk-in shower and freestanding tub configuration, widening a kitchen for an island or breakfast room, or extending a dining room for a larger table.</p><div className="addition-meta"><span><strong>Size:</strong> 60–350 sq ft</span><span><strong>Cost:</strong> $55,000 – $140,000</span><span><strong>Timeline:</strong> 3–5 months</span></div></div>
                    <div className="addition-card"><div className="a-tag">Year-Round</div><div className="a-icon">☀️</div><h3>Sunroom &amp; Four-Season Room</h3><p>A light-filled addition designed for Potomac&apos;s wooded rear yards — full glass walls and ceiling structure that brings the landscape indoors year-round. Three-season sunrooms at the lower cost end; fully insulated and HVAC-connected four-season rooms for year-round comfortable use. DMV General Contracting Group designs sunroom additions with architectural proportions appropriate to Potomac&apos;s estate homes.</p><div className="addition-meta"><span><strong>Size:</strong> 200–500 sq ft</span><span><strong>Cost:</strong> $70,000 – $180,000+</span><span><strong>Timeline:</strong> 3–6 months</span></div></div>
                </div>

                <h2>R-200 Zoning &amp; Permitting for Potomac Home Additions</h2>
                <div className="permit-box">
                    <h3>📋 Potomac Permit Process — What Every Addition Requires</h3>
                    <ul>
                        <li><strong>R-200 zoning setback review — first step before any design:</strong> Potomac is predominantly zoned R-200 — requiring minimum lot size of approximately 2 acres, front setback of 50 feet, side setbacks of 25 feet per side, and rear setback of 35 feet. These setbacks define the maximum buildable envelope within which the addition must fit. DMV General Contracting Group performs this review at the free consultation.</li>
                        <li><strong>HOA Architectural Review Committee (ARC) — required before MoCo DPS permit in many Potomac communities:</strong> Many Potomac neighborhoods require HOA ARC approval for any exterior modification including additions, before the Montgomery County DPS permit can be filed. DMV General Contracting Group prepares and manages the full HOA ARC submission in-house, including attending ARC meetings where required.</li>
                        <li><strong>Montgomery County DPS building permit — filed at 2425 Reedie Drive, Wheaton:</strong> All Potomac building permits are filed with Montgomery County DPS. Potomac is unincorporated Montgomery County with no separate municipal permit office. MoCo DPS addition permit review typically takes 8–12 weeks for Potomac estate-scale projects.</li>
                        <li><strong>Structural engineering — required for all load-bearing additions:</strong> All Potomac additions involving load-bearing wall removal, second-story additions, or large room additions require stamped structural engineering documents as part of the MoCo DPS permit package. DMV General Contracting Group&apos;s in-house structural engineers provide all stamped drawings.</li>
                        <li><strong>Trade permits — electrical, plumbing, HVAC:</strong> Each trade permit is pulled separately from MoCo DPS and requires its own rough-in inspection before walls close. DMV General Contracting Group&apos;s in-house licensed electricians, plumbers, and HVAC technicians pull and manage their own trade permits.</li>
                    </ul>
                </div>

                <div className="hoa-box">
                    <h3>🏘️ HOA ARC Review in Potomac — What DMV General Contracting Group Prepares</h3>
                    <p>Many Potomac homeowners are surprised to learn that their HOA requires ARC approval for a rear addition that is not visible from the street. DMV General Contracting Group prepares complete HOA ARC submission packages for every Potomac addition project where HOA review is required: full architectural drawings, exterior elevation renderings, site plan, material specifications, and color samples. We attend ARC meetings when required, address committee questions in writing, and track approval status. The typical HOA ARC process in Potomac runs 4–8 weeks — and DMV General Contracting Group initiates this submission as soon as schematic design is approved so HOA and county approval processes run concurrently rather than sequentially.</p>
                </div>

                <h2>Home Addition Cost in Potomac, MD</h2>
                <p>Home addition costs in Potomac reflect the estate-scale homes, premium exterior materials (brick, stone, James Hardie, cedar), and higher finish standards of the Potomac market. All costs below include in-house architectural design, structural engineering, MoCo DPS permit fees, and complete construction through final finishes:</p>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead><tr><th>Addition Type</th><th>Potomac Cost Range</th><th>Size</th><th>Timeline</th></tr></thead>
                            <tbody>
                                <tr><td>Bump-Out Addition</td><td>$55,000 – $140,000</td><td>60–350 sq ft</td><td>3–5 months</td></tr>
                                <tr><td>Sunroom / 3-Season Room</td><td>$70,000 – $130,000</td><td>200–400 sq ft</td><td>3–5 months</td></tr>
                                <tr><td>Four-Season / Conditioned Sunroom</td><td>$110,000 – $180,000+</td><td>250–500 sq ft</td><td>4–6 months</td></tr>
                                <tr><td>Single Room Addition</td><td>$140,000 – $260,000</td><td>300–700 sq ft</td><td>5–8 months</td></tr>
                                <tr><td>Family Room / Great Room Addition</td><td>$160,000 – $300,000+</td><td>400–900 sq ft</td><td>5–8 months</td></tr>
                                <tr><td>In-Law / Guest Suite Addition</td><td>$175,000 – $320,000+</td><td>450–900 sq ft</td><td>6–9 months</td></tr>
                                <tr><td>Master Suite Addition</td><td>$180,000 – $380,000+</td><td>500–900 sq ft</td><td>5–9 months</td></tr>
                                <tr><td>Second-Story Addition (Full)</td><td>$280,000 – $550,000+</td><td>800–2,500+ sq ft</td><td>8–14 months</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Why Potomac addition costs are higher than MoCo average:</strong> Potomac&apos;s estate homes require exterior materials — brick, stone, James Hardie lap in premium profiles, cedar trim — that are significantly more expensive than vinyl or standard fiber cement. Additionally, Potomac&apos;s estate homes typically have more complex roofline geometry, higher ceiling heights, and interior finish expectations calibrated to the home&apos;s overall character rather than to builder-grade standard.
                </div>

                <h2>Why Potomac Homeowners Add On Instead of Moving</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="compare-table">
                            <thead><tr><th>Factor</th><th>Adding On in Potomac</th><th>Buying Larger in Potomac</th></tr></thead>
                            <tbody>
                                <tr><td>Cost of space gained</td><td>$140K–$380K for significant addition</td><td>$300K–$600K+ premium for larger estate</td></tr>
                                <tr><td>Transaction costs</td><td>None — you stay in your home</td><td>Agent fees, closing costs, movers: $100K–$200K+</td></tr>
                                <tr><td>Mortgage rate</td><td>Keep your existing rate</td><td>Finance larger purchase at current rates</td></tr>
                                <tr><td>Location &amp; schools</td><td>Keep your lot, neighbors, and school assignment</td><td>New home may not match current school or lot character</td></tr>
                                <tr><td>Property value impact</td><td>Addition returns 55–75% in appraised value, compounds over time</td><td>Immediate depreciation from transaction costs</td></tr>
                                <tr><td>HOA &amp; community</td><td>Stay in your established community</td><td>May move to a different HOA or community context</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Architectural Integration — Why It Matters More in Potomac Than Anywhere</h2>
                <div className="highlight">
                    <p>🏛️ <strong>Potomac estate homes have architectural character that an addition must match precisely</strong> — or the result is an expensive addition that devalues the home&apos;s appearance rather than completing it. Mismatched rooflines, different brick coursing, inconsistent window proportions, and abrupt material transitions are immediately visible on a Potomac estate. DMV General Contracting Group&apos;s architects design every Potomac addition to continue the existing home&apos;s roofline pitch and profile, match the exterior material at the level of course pattern and color, mirror the window style used throughout the home, and connect to the interior with flooring, ceiling height, and millwork that flows naturally from the existing rooms.</p>
                </div>

                <h2>Our Home Addition Process in Potomac</h2>
                <div className="steps">
                    <div className="step"><div className="step-num">1</div><div className="step-content"><h3>Free In-Home Consultation — R-200 Setback Review &amp; Feasibility on Your Lot</h3><p>We visit your Potomac estate, walk the property, and perform a complete R-200 zoning and setback review to identify the buildable envelope on your specific lot. We assess the existing home&apos;s structural condition, roofline, exterior materials, and interior layout. We identify whether your community&apos;s HOA requires ARC review. We walk you through a realistic budget range before any design work begins.</p></div></div>
                    <div className="step"><div className="step-num">2</div><div className="step-content"><h3>HOA ARC Submission — Managed In-House Before Permit Filing</h3><p>Where your Potomac community&apos;s HOA requires Architectural Review Committee approval, we initiate the ARC submission as soon as schematic design is approved — preparing full architectural drawings, exterior elevations, site plan, and material and color specifications for the committee. We attend ARC meetings where required and track approval status.</p></div></div>
                    <div className="step"><div className="step-num">3</div><div className="step-content"><h3>Architectural Design &amp; 3D Renderings — Estate Scale</h3><p>Our in-house architects develop full design documentation for your Potomac addition — floor plans, exterior elevations, interior layout, and full 3D renderings. Design decisions are made with the existing estate home&apos;s roofline, material palette, window proportions, and interior character as the governing reference.</p></div></div>
                    <div className="step"><div className="step-num">4</div><div className="step-content"><h3>Structural Engineering — Foundation to Roof</h3><p>Our in-house structural engineers review the existing foundation and bearing wall structure, calculate loads for the new addition, specify all beams, headers, and connections, and provide stamped engineering documents for the MoCo DPS permit package.</p></div></div>
                    <div className="step"><div className="step-num">5</div><div className="step-content"><h3>MoCo DPS Permit Submission — Filed at 2425 Reedie Drive</h3><p>We prepare and submit the complete MoCo DPS permit package and manage all county correspondence through approval. MoCo DPS review for estate-scale Potomac additions typically runs 8–12 weeks. You do not contact the county or manage any paperwork.</p></div></div>
                    <div className="step"><div className="step-num">6</div><div className="step-content"><h3>Foundation, Framing &amp; Exterior Shell</h3><p>Construct begins with site preparation — excavation, new footings and foundation, waterproofing, and structural framing. Roofline extended and shingled to match the estate home&apos;s existing roof. Exterior walls clad in materials that match the home&apos;s existing exterior.</p></div></div>
                    <div className="step"><div className="step-num">7</div><div className="step-content"><h3>Mechanical Rough-In, Insulation &amp; Interior Finishes</h3><p>Licensed electricians, plumbers, and HVAC technicians extend all systems into the new addition. All rough-in work inspected by MoCo DPS. Interior finishes — flooring, tile, cabinetry, millwork, fixtures — installed to the estate home&apos;s standard.</p></div></div>
                    <div className="step"><div className="step-num">8</div><div className="step-content"><h3>Final Inspections, Punch List &amp; Walkthrough</h3><p>All required MoCo DPS final inspections scheduled and managed. Upon passing all inspections, a thorough punch list walkthrough with you — every detail addressed before project close. Written warranty documentation.</p></div></div>
                </div>

                <h2>What Potomac Homeowners Say About DMV General Contracting Group</h2>
                <div className="review-grid">
                    {reviewData.map((review, index) => (
                        <div className="review-card" key={index}>
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">{review.location}</span></div>
                        </div>
                    ))}
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Potomac homeowners trust DMV General Contracting Group for estate-scale home additions that integrate architecturally with the existing home, navigate HOA ARC review in-house before permit filing, and manage the full MoCo DPS permit process under one contract.</p>
                </div>

                <div className="cta-banner">
                    <h2>Find Out What Addition Is Possible on Your Potomac Estate</h2>
                    <p>Our architects and permit specialists will visit your Potomac property, perform a full R-200 setback review, assess HOA requirements, and tell you exactly what is buildable and at what cost — at no charge, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Addition Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All Potomac, MD Communities for Home Additions</h2>
                <div className="areas-grid">
                    <span className="area-pill">Potomac Village</span>
                    <span className="area-pill">Bradley Farms</span>
                    <span className="area-pill">Avenel</span>
                    <span className="area-pill">Falconhurst</span>
                    <span className="area-pill">River Falls</span>
                    <span className="area-pill">Inverness Forest</span>
                    <span className="area-pill">Glen Mill Estates</span>
                    <span className="area-pill">Bedfordshire</span>
                    <span className="area-pill">Hunt Country</span>
                    <span className="area-pill">Regency Estates</span>
                    <span className="area-pill">Brickyard Road Corridor</span>
                    <span className="area-pill">MacArthur Boulevard Corridor</span>
                </div>

                <h2>Frequently Asked Questions — Home Additions in Potomac, MD</h2>
                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <details className="faq-item" key={index} open={index === 0 ? true : undefined}>
                            <summary className="faq-q">{faq.question}</summary>
                            <div className="faq-a">{faq.answer}</div>
                        </details>
                    ))}
                </div>

                <div className="internal-links">
                    <h2>Explore Our Other Services in Potomac, MD</h2>
                    <ul>
                        <li><Link href="/service/design-build/potomac-md">Design-Build Contractor in Potomac, MD</Link></li>
                        <li><Link href="/service/adu/potomac-md">ADU Construction in Potomac, MD</Link></li>
                        <li><Link href="/service/kitchen-remodeling/potomac-md">Kitchen Remodeling in Potomac, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling/potomac-md">Bathroom Remodeling in Potomac, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/potomac-md">Basement Remodeling in Potomac, MD</Link></li>
                        <li><Link href="/service/siding-installation/potomac-md">Siding Installation in Potomac, MD</Link></li>
                        <li><Link href="/service/decks/potomac-md">Deck Building in Potomac, MD</Link></li>
                        <li><Link href="/service/flooring-remodeling/potomac-md">Flooring Installation in Potomac, MD</Link></li>
                        <li><Link href="/service/carpet-installation/potomac-md">Carpet Installation in Potomac, MD</Link></li>
                    </ul>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Add On to Your Potomac Estate?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free consultation. Our architects will visit your Potomac property, review R-200 setbacks and HOA requirements, and tell you exactly what is possible — 7 days a week.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Addition Consultation in Potomac →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default PotomacMD;
