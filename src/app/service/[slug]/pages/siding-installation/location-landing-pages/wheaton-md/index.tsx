'use client';

import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../siding-city-style.scss";
import "./style.scss";

const WheatonMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Why does Wheaton offer strong siding ROI compared to Bethesda or Silver Spring?",
            answer: "Wheaton home prices are priced below Silver Spring and Bethesda equivalents despite sharing the same school district, Metro Red Line access, and DC proximity. This price gap means exterior improvements produce a higher percentage return on investment — the same siding project that adds $20,000 in appraised value represents a larger percentage gain on a $550,000 Wheaton home than on a $900,000 Bethesda colonial. Additionally, Wheaton's buyer market is consistently undersupplied with updated, well-maintained homes — a Wheaton split-level with new James Hardie siding stands out sharply in a market where most comparable homes still have original aluminum or faded 1980s vinyl."
        },
        {
            question: "What is the difference between standard vinyl and insulated vinyl for Wheaton homes?",
            answer: "Standard vinyl siding has no foam backer — it installs directly over the house wrap and provides no additional insulation value. Insulated vinyl has a rigid foam backer permanently bonded to the back of each panel, adding R-2 to R-4 of continuous insulation to the wall assembly. For Wheaton's postwar split-levels and colonials where wall insulation is minimal, insulated vinyl is the significantly better choice — it improves comfort, reduces energy costs, and adds structural rigidity to the panel. The price difference between standard and insulated vinyl on a full Wheaton home is typically $1,500–$3,000. We recommend insulated vinyl for virtually all Wheaton full-replacement projects."
        },
        {
            question: "Does DMV General Contracting Group handle MoCo DPS permits for Wheaton siding?",
            answer: "Yes. MoCo DPS at 2425 Reedie Drive, Wheaton is our home permit office — we file there routinely for Wheaton renovation and construction projects. Like-for-like siding replacement typically does not require a MoCo permit. Projects involving structural sheathing repair or continuous insulation addition may trigger the permit requirement. We assess permit requirements for every Wheaton siding project and handle all MoCo DPS filing, review response, and inspection scheduling in-house when a permit is required. Wheaton homeowners never contact MoCo DPS during their siding project."
        },
        {
            question: "How much does siding replacement cost in Wheaton, MD?",
            answer: "Siding replacement in Wheaton runs $10,000–$19,000 for standard vinyl, $12,000–$23,000 for insulated vinyl, $13,000–$26,000 for LP SmartSide, and $15,000–$32,000 for James Hardie fiber cement on an average Wheaton split-level or colonial. Sheathing repair adds $2,000–$7,000 where damage is found during removal. Soffit enclosure for open rafter tails adds $2,000–$6,500. DMV General Contracting Group provides free, detailed in-home estimates for every Wheaton project."
        },
        {
            question: "Is DMV General Contracting Group licensed for siding in Wheaton, MD?",
            answer: "Yes. DMV General Contracting Group holds Maryland MHIC license #156178 — required for all home improvement work in Wheaton, which is unincorporated Montgomery County. Fully bonded, comprehensive general liability and workers' compensation insurance, and a 1-year workmanship warranty on every Wheaton siding project."
        }
    ];

    return (
        <div className="siding-city-detail-page siding-wheaton-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/siding-installation">Siding Installation</Link><span>›</span>
                    Wheaton, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Wheaton, MD</div>
                    <h1>Siding Installation & Replacement in Wheaton, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">📈 Strongest Siding ROI in MoCo</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ MoCo DPS — Our Home Permit Office</span>
                        <span className="badge">✓ Insulated Vinyl Energy Upgrade Specialists</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">📈</div>
                    <div>
                        <h3>New Siding in Wheaton Delivers One of the Strongest Return-on-Investment Cases in Montgomery County — Because Wheaton Home Prices Are Undervalued Relative to Location, and Updated Exterior Siding Captures a Disproportionate Share of That Gap</h3>
                        <p>Wheaton's homes are priced below comparable Silver Spring, Kensington, and Bethesda properties despite sharing Montgomery County schools, Metro Red Line access at Wheaton station, and DC proximity. That price gap — driven by Wheaton's community identity and commercial corridor rather than any underlying location deficiency — creates a renovation ROI opportunity that is difficult to find elsewhere in the county. A $15,000–$22,000 James Hardie siding installation on a Wheaton split-level that has been carrying faded aluminum since the Carter administration transforms the home's curb appeal, addresses decades of air infiltration, and positions the property at the leading edge of a Wheaton buyer market that is consistently undersupplied with updated, well-maintained homes. Wheaton buyers notice and value updated siding because so many comparable homes in the community still have original aluminum or first-generation vinyl. DMV General Contracting Group serves Wheaton's siding market with the same ROI-focused perspective we bring to every Wheaton renovation project — and with the MoCo DPS permit team that literally works down the street from the Wheaton homes we install siding on. 2425 Reedie Drive is our home permit office.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a trusted <strong>siding contractor in Wheaton, MD</strong>? DMV General Contracting Group installs and replaces all types of exterior siding for Wheaton homeowners — James Hardie fiber cement, insulated vinyl, LP SmartSide engineered wood, and standard vinyl — across Wheaton's 1950s–1970s split-levels, colonials, and cape cods. Every project includes aluminum or old vinyl removal, sheathing inspection and repair, house wrap installation, split-level transition detailing, soffit and fascia work, and MoCo DPS permit processing when required. MHIC licensed, fully insured, 1-year workmanship warranty. Free in-home estimate. Call +1 240-730-1292.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">📈</div><strong>Strongest MoCo ROI</strong><span>Wheaton prices + Metro access = highest siding return per dollar</span></div>
                    <div className="trust-item"><div className="icon">🌡️</div><strong>Energy Upgrade Specialists</strong><span>Insulated vinyl on postwar Wheaton homes — meaningful R-value improvement</span></div>
                    <div className="trust-item"><div className="icon">📋</div><strong>MoCo DPS — Down the Street</strong><span>2425 Reedie Drive is our home permit office — Wheaton projects filed routinely</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>Why Wheaton Siding ROI Is the Strongest in Montgomery County</h2>

                <div className="roi-box">
                    <h3>📈 The Wheaton Siding ROI Case — Explained Honestly</h3>
                    <ul>
                        <li><strong>The price gap creates the opportunity:</strong> Wheaton homes are priced $80,000–$200,000 below comparable Silver Spring and Kensington properties despite sharing the same county school district, Metro Red Line access at Wheaton station, and DC employment proximity. That gap is narrowing as Wheaton's trajectory improves — and exterior improvements that bring a Wheaton home's presentation up to the standard of its underlying location value capture a disproportionate share of that appreciation. New siding is the exterior improvement that makes the most immediate visual impact on a Wheaton home's curb appeal — and in a market where buyers are comparing homes on the same street, the home with updated James Hardie siding stands out sharply against neighbors with faded 1970s aluminum.</li>
                        <li><strong>Wheaton buyers are undersupplied with updated homes:</strong> A consistent feature of the Wheaton resale market is that buyers who want a move-in-ready, updated home in Wheaton cannot find one — the supply of Wheaton homes with updated exteriors, kitchens, and bathrooms consistently falls short of buyer demand. A Wheaton split-level with new James Hardie siding, updated exterior trim, and correct soffit and fascia work presents differently from the street than any comparable home on the block with original aluminum — and that differentiation translates directly to faster sale and higher offer prices in Wheaton's active buyer market.</li>
                        <li><strong>The energy savings compound the ROI:</strong> Wheaton's postwar split-levels and colonials were built with 2×4 framing and minimal wall insulation. A full siding replacement with insulated vinyl (R-2 to R-4 continuous) or James Hardie with rigid foam backer (R-3 to R-6) adds meaningful thermal resistance to walls that have been poorly insulated since original construction. On a Wheaton home where heating and cooling account for a significant portion of monthly utility costs, that insulation improvement produces annual energy savings that compound the renovation ROI beyond the one-time curb appeal benefit.</li>
                        <li><strong>Construction cost anchors to Wheaton prices — not Bethesda prices:</strong> The same James Hardie siding installation costs roughly the same in Wheaton as in Bethesda — but the return on investment is higher in Wheaton because the construction cost represents a larger percentage gain on a lower-priced home base. A $16,000 siding project that adds $22,000 in appraised value is a strong investment at any price point — but the 37% gain is more impactful in Wheaton's market than the equivalent project in Bethesda, where the same value gain disappears into a much higher existing price base.</li>
                    </ul>
                </div>

                <h2>Siding Services We Offer in Wheaton, MD</h2>
                <div className="check-grid">
                    <span className="check-item">Full Home Siding Replacement</span>
                    <span className="check-item">Aluminum & Old Vinyl Removal</span>
                    <span className="check-item">James Hardie Fiber Cement (HardiePlank)</span>
                    <span className="check-item">Insulated Vinyl Siding</span>
                    <span className="check-item">LP SmartSide Engineered Wood</span>
                    <span className="check-item">Standard Vinyl Siding</span>
                    <span className="check-item">Split-Level Transition Detailing</span>
                    <span className="check-item">House Wrap & Weather Barrier</span>
                    <span className="check-item">Soffit Enclosure & Fascia Replacement</span>
                    <span className="check-item">Trim, Corner Board & Window Casing</span>
                    <span className="check-item">Sheathing Inspection & Repair</span>
                    <span className="check-item">Storm Damage Siding Repair</span>
                    <span className="check-item">Partial Siding Replacement</span>
                    <span className="check-item">MoCo DPS Permit Processing</span>
                </div>

                <h2>Siding Types for Wheaton's Split-Levels and Colonials</h2>

                <div className="material-grid">
                    <div className="material-card">
                        <div className="m-tag">Best ROI</div>
                        <div className="m-icon">🏆</div>
                        <h3>James Hardie Fiber Cement — HardiePlank</h3>
                        <p>The strongest curb appeal upgrade and the highest long-term ROI siding choice for Wheaton. HardiePlank lap siding in 6-inch or 7-inch exposure installs cleanly on Wheaton's split-level and colonial elevations — including the multi-zone transitions that split-level architecture creates. ColorPlus factory finish holds 15–20 years without repainting — eliminating the 5–8 year repaint cycle that original aluminum requires and that original vinyl requires after the factory color fades. In Wheaton's buyer market, James Hardie siding is a visible, recognized quality signal that buyers respond to. The Wheaton home with HardiePlank stands out from the aluminum-clad neighbor in a way that buyers immediately notice and price into their offers.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 30–50 yrs</span>
                            <span><strong>Wheaton Cost:</strong> $15,000 – $32,000+</span>
                        </div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Best Energy ROI</div>
                        <div className="m-icon">🌡️</div>
                        <h3>Insulated Vinyl Siding</h3>
                        <p>The strongest value siding choice for Wheaton homeowners focused on energy efficiency improvement alongside curb appeal — and our most frequently recommended alternative to James Hardie for budget-conscious Wheaton projects. Wheaton's postwar split-levels and colonials have some of the worst-insulated exterior walls in Montgomery County — 2×4 framing, minimal cavity fill, no continuous insulation. Insulated vinyl adds R-2 to R-4 of continuous foam insulation to every exterior wall simultaneously during the siding replacement — at no additional disruption to the home interior. On a Wheaton split-level with 900–1,200 sq ft of exterior wall area, that insulation improvement produces meaningful annual heating and cooling savings while delivering a clean, updated exterior appearance.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 20–40 yrs</span>
                            <span><strong>Wheaton Cost:</strong> $12,000 – $23,000+</span>
                        </div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Wood Look</div>
                        <div className="m-icon">🪵</div>
                        <h3>LP SmartSide Engineered Wood</h3>
                        <p>A strong middle option for Wheaton homeowners who want a wood aesthetic without cedar's maintenance demands. LP SmartSide in lap profiles reads well on Wheaton's colonial and craftsman homes — the wood texture and grain print more closely match the original look of wood-sided Wheaton homes than vinyl profiles do. Paint intervals of 8–10 years versus cedar's 4–7. Treated against rot and fungal decay for Maryland's humid climate. Popular on Wheaton colonials where the wood exterior character is a priority and the premium cost of James Hardie is above budget.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 25–35 yrs</span>
                            <span><strong>Wheaton Cost:</strong> $13,000 – $26,000+</span>
                        </div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Budget Option</div>
                        <div className="m-icon">🏠</div>
                        <h3>Standard Vinyl Siding</h3>
                        <p>Modern standard vinyl is durable, low-maintenance, and available in a wide range of profiles and colors — a practical choice for Wheaton homeowners focused on cost where energy improvement and premium curb appeal are secondary priorities. Standard vinyl without the foam backer does not improve wall insulation — for Wheaton's postwar homes where the energy deficiency is significant, we recommend upgrading to insulated vinyl for the R-value improvement. The cost difference between standard and insulated vinyl is typically $1,500–$3,000 on a full Wheaton home — a modest premium for a meaningful, permanent insulation benefit.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 20–40 yrs</span>
                            <span><strong>Wheaton Cost:</strong> $10,000 – $19,000+</span>
                        </div>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Our Recommendation for Wheaton:</strong> For Wheaton homeowners focused on maximum ROI, <strong>James Hardie HardiePlank</strong> delivers the strongest curb appeal upgrade and the clearest buyer-market differentiation. For homeowners where budget is the primary driver, <strong>insulated vinyl</strong> is our recommended alternative — it improves energy efficiency, updates the exterior appearance, and keeps the project cost well below James Hardie while still delivering positive Wheaton ROI. We present both options with honest ROI context at every Wheaton estimate.
                </div>

                <h2>Siding Material Comparison for Wheaton, MD Homes</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="compare-table">
                            <thead>
                                <tr><th>Material</th><th>Durability</th><th>Maintenance</th><th>Energy Improvement</th><th>Wheaton ROI</th><th>Cost</th></tr>
                            </thead>
                            <tbody>
                                <tr className="top-pick"><td>James Hardie Fiber Cement ⭐</td><td>Excellent — 30–50 yrs</td><td>Low — 15–20 yr factory finish</td><td>Good with rigid foam</td><td>Strongest curb appeal premium</td><td>$15K – $32K+</td></tr>
                                <tr><td>Insulated Vinyl</td><td>Good — 20–40 yrs</td><td>Very low — wash only</td><td>Excellent — R-2 to R-4</td><td>Strong — energy savings + appearance</td><td>$12K – $23K+</td></tr>
                                <tr><td>LP SmartSide</td><td>Good — 25–35 yrs</td><td>Medium — 8–10 yr repaint</td><td>Moderate</td><td>Good — wood character retained</td><td>$13K – $26K+</td></tr>
                                <tr><td>Standard Vinyl</td><td>Good — 20–40 yrs</td><td>Very low — wash only</td><td>Minimal — no foam backer</td><td>Moderate — appearance only</td><td>$10K – $19K+</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Signs Your Wheaton Home Needs New Siding</h2>

                <div className="signs-grid">
                    <div className="sign-card"><div className="s-icon">🔧</div><h3>Oxidized Aluminum</h3><p>Chalky white oxidation, dents, or paint failure on original 1960s–70s aluminum — at or past end of serviceable life.</p></div>
                    <div className="sign-card"><div className="s-icon">🔍</div><h3>Cracking First-Gen Vinyl</h3><p>Cracks, brittleness, or panels separating at seams on 1980s–90s vinyl — the original replacement siding is now failing.</p></div>
                    <div className="sign-card"><div className="s-icon">🎨</div><h3>Severe Color Fade</h3><p>Washed-out, chalky color that cleaning cannot restore — the siding surface has degraded beyond cosmetic remedy.</p></div>
                    <div className="sign-card"><div className="s-icon">💧</div><h3>Interior Water Stains</h3><p>Water marks on interior walls near exterior surfaces — active infiltration at failed siding seams or transitions.</p></div>
                    <div className="sign-card"><div className="s-icon">🌡️</div><h3>Cold Exterior Walls in Winter</h3><p>Interior wall surfaces cold to the touch in winter — postwar Wheaton homes with no wall insulation behind failing siding.</p></div>
                    <div className="sign-card"><div className="s-icon">💨</div><h3>Gaps at Split-Level Transitions</h3><p>Separated or open siding at floor-level transitions on split-levels — infiltration at the most common failure point.</p></div>
                </div>

                <h2>New Siding & Energy Efficiency for Wheaton's Postwar Homes</h2>

                <div className="highlight">
                    <p>🌡️ <strong>The Wheaton energy upgrade opportunity:</strong> Wheaton's 1950s–1970s split-levels and colonials were built with 2×4 exterior framing and no continuous wall insulation — a standard for the era that produces wall assemblies with R-values of R-4 to R-8 in today's assessment. Full siding replacement is the only practical opportunity to add continuous insulation to these walls from the exterior without removing interior drywall. Insulated vinyl provides R-2 to R-4 of continuous foam. Rigid foam under James Hardie provides R-3 to R-6. On a typical Wheaton split-level, that insulation layer eliminates the thermal bridging at each stud — the primary heat loss pathway in 2×4 framing — improving both comfort and annual energy costs. MoCo DPS permit is not required for standard siding replacement, but rigid foam addition may trigger a permit in some cases — our permit team advises on this at the estimate.</p>
                </div>

                <h2>Our Siding Installation Process in Wheaton</h2>

                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free In-Home Estimate — ROI Context Included</h3>
                            <p>We visit your Wheaton home and assess the full exterior — siding condition on all elevations, aluminum or vinyl age and failure mode, split-level transition and soffit conditions, sheathing condition at exposed edges, and insulation improvement opportunity. We also discuss the Wheaton siding ROI case for your specific home — which material delivers the best return relative to your home's current value and your project budget. Material samples and color options presented at this appointment. No charge, no obligation.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Material Selection — ROI and Energy Efficiency Compared Honestly</h3>
                            <p>We bring James Hardie ColorPlus samples, insulated vinyl profiles and colors, LP SmartSide options, and standard vinyl to your Wheaton home. We present each material with an honest comparison of cost, ROI, energy improvement, and maintenance commitment — so you can make a fully informed material decision calibrated to your specific Wheaton goals. For homeowners with a fixed budget, we show exactly what James Hardie costs versus insulated vinyl and what the difference delivers in return.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Old Siding Removal — Aluminum, Vinyl, or Layered</h3>
                            <p>Existing aluminum or vinyl removed carefully — with attention to aluminum-over-wood layering where present on Wheaton's older split-levels. Sheathing condition assessed after removal. Damaged sheathing sections replaced before house wrap is installed. Lead-safe disposal practices for aluminum siding on Wheaton homes built before 1978 where lead paint in the siding finish or paint layers is possible.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>House Wrap, Insulation & Soffit Work</h3>
                            <p>Continuous weather-resistant barrier installed across all elevations — individually flashed at every window, door, and penetration. Rigid foam insulation installed where insulation upgrade is part of the scope. Soffit enclosure completed where open rafter tails are present at Wheaton split-level overhangs. MoCo DPS permit filed in Wheaton — our home permit office down the street — when structural or insulation scope triggers the requirement.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Siding, Trim & Transition Installation</h3>
                            <p>New siding installed across all zones — with split-level horizontal band board transitions, soffit returns, and wall plane offsets flashed and detailed before adjacent panel installation. All corner boards, window casings, door surrounds, and fascia finished to a consistent standard. MoCo DPS framing or sheathing inspection scheduled where scope required a permit — 2425 Reedie Drive, Wheaton, our regular permit office.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Final Inspection, Caulking & Exterior Walkthrough</h3>
                            <p>Every seam, transition, and penetration inspected. All exterior joints caulked with flexible, paintable exterior-grade sealant. Full debris removal. Exterior walkthrough on every elevation with you before project close. Written warranty. MoCo DPS permit closed where applicable.</p>
                        </div>
                    </div>
                </div>

                <h2>Siding Replacement Cost in Wheaton, MD</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr><th>Siding Material</th><th>Typical Cost — Wheaton Home</th><th>Per Sq Ft (Installed)</th><th>ROI Category</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Standard Vinyl</td><td>$10,000 – $19,000+</td><td>$4 – $8 / sq ft</td><td>Moderate — appearance only</td></tr>
                                <tr><td>Insulated Vinyl</td><td>$12,000 – $23,000+</td><td>$6 – $10 / sq ft</td><td>Strong — appearance + energy savings</td></tr>
                                <tr><td>LP SmartSide</td><td>$13,000 – $26,000+</td><td>$7 – $12 / sq ft</td><td>Good — wood character + durability</td></tr>
                                <tr><td>James Hardie Fiber Cement</td><td>$15,000 – $32,000+</td><td>$8 – $14 / sq ft</td><td>Strongest — premium curb appeal</td></tr>
                                <tr><td>Sheathing Repair (if needed)</td><td>$2,000 – $7,000+</td><td>Depends on damage extent</td><td>Required for durable installation</td></tr>
                                <tr><td>Soffit Enclosure</td><td>$2,000 – $6,500+</td><td>Varies by linear footage</td><td>Energy + appearance improvement</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Wheaton siding + insulated vinyl energy math:</strong> On a typical 1,100 sq ft Wheaton split-level with exterior walls currently at R-6 (2×4 framing, minimal insulation), adding R-3 continuous insulation via insulated vinyl improves the effective wall assembly to approximately R-9. That improvement reduces heating and cooling load by 15–25% on the wall surface area — translating to $250–$500 annual energy savings on a typical Wheaton utility bill. Over 20 years, that's $5,000–$10,000 in energy savings on a $12,000–$15,000 siding investment — before accounting for the curb appeal and value increase the new siding delivers at resale.
                </div>

                <h2>What Wheaton Homeowners Say About DMV General Contracting Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We replaced the original aluminum siding on our 1963 Wheaton Hills split-level with James Hardie HardiePlank in Iron Gray. The transformation is dramatic — the house looked tired and dated; now it's one of the best-looking homes on the block. DMV General Contracting Group handled the aluminum removal, found and replaced damaged sheathing on the rear elevation, installed house wrap, and detailed the split-level transitions that the previous aluminum installation had left open. MoCo DPS permit was filed at 2425 Reedie Drive — literally down the street. Project done in 9 days."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Wheaton Hills, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We went with insulated vinyl on our Glenmont area colonial — our primary goal was energy efficiency improvement since our heating bills have always been high. DMV General Contracting Group explained the R-value improvement we'd get from the insulated vinyl backer very clearly at the estimate. After the first winter with the new siding, our gas bill was noticeably lower — the walls actually feel warmer in winter. The curb appeal upgrade was a bonus we hadn't fully anticipated."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Glenmont Area, Wheaton MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We had first-generation vinyl from the mid-1990s that was cracking on the south elevation and pulling away at the seams at the split-level transitions. DMV General Contracting Group replaced the full exterior with LP SmartSide in a warm cedar tone. The wood texture reads much more naturally than vinyl on our 1960s colonial. The split-level transition detailing is clean — no gaps where the previous vinyl had separated. Three neighbors have asked for their contact info since we finished."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Arcola, Wheaton MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We had storm damage on the east elevation — a large section of vinyl siding torn off in a wind event. DMV General Contracting Group matched the existing vinyl profile and color, replaced the damaged section cleanly, and repaired the soffit that was also damaged. Insurance documentation handled professionally. The repair area is undetectable. Two days from start to finish. MoCo permit not required for the partial scope — they confirmed that at the estimate rather than charging for an unnecessary permit."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Wheaton, MD</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Wheaton homeowners trust DMV General Contracting Group for siding projects that honestly explain the ROI case for each material choice, detail split-level transitions correctly, improve wall insulation with insulated siding options, and file with MoCo DPS — our literal home permit office two blocks from many Wheaton job sites — when permits are required.</p>
                </div>

                <div className="cta-banner">
                    <h2>Get a Free Siding Estimate for Your Wheaton Home</h2>
                    <p>Our team will visit your Wheaton split-level or colonial, assess your existing siding, explain the ROI case for each material option, and provide a detailed estimate — at no cost, no obligation. MoCo DPS permit expertise included.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Siding Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All Wheaton, MD Neighborhoods for Siding Installation</h2>
                <div className="areas-grid">
                    <span className="area-pill">Wheaton Hills</span>
                    <span className="area-pill">Glenmont</span>
                    <span className="area-pill">Arcola</span>
                    <span className="area-pill">Kemp Mill Estates</span>
                    <span className="area-pill">Wheaton Forest</span>
                    <span className="area-pill">Rolling Hills</span>
                    <span className="area-pill">Georgia Avenue Corridor</span>
                    <span className="area-pill">Viers Mill</span>
                    <span className="area-pill">University Hills</span>
                </div>

                <h2>Frequently Asked Questions — Siding Installation in Wheaton, MD</h2>
                <Accordion className="faq-list" defaultActiveKey="0">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="internal-links">
                    <h2>Explore Our Other Services in Wheaton, MD</h2>
                    <ul>
                        <li><Link href="/service/kitchen-remodeling/wheaton-md">Kitchen Remodeling in Wheaton, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling/wheaton-md">Bathroom Remodeling in Wheaton, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/wheaton-md">Basement Remodeling in Wheaton, MD</Link></li>
                        <li><Link href="/service/adu/wheaton-md">ADU Construction in Wheaton, MD</Link></li>
                        <li><Link href="/service/decks/wheaton-md">Deck Building in Wheaton, MD</Link></li>
                        <li><Link href="/service/flooring-remodeling/wheaton-md">Flooring Installation in Wheaton, MD</Link></li>
                        <li><Link href="/service/design-build/wheaton-md">Design-Build Contractor in Wheaton, MD</Link></li>
                        <li><Link href="/service/roofing">Roofing in Wheaton, MD</Link></li>
                    </ul>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Capture Wheaton's Siding ROI?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free estimate. We explain the ROI honestly, detail split-level transitions correctly, improve energy efficiency with insulated siding options, and file with MoCo DPS down the street when permits are required. MHIC licensed. 1-year warranty.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Siding Estimate in Wheaton →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default WheatonMD;