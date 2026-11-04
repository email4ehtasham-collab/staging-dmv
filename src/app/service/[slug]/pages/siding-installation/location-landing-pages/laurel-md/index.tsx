'use client';

import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../siding-city-style.scss";
import "./style.scss";

const LaurelMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Does Laurel have a Historic District Commission that needs to approve siding replacement?",
            answer: "Yes — and this is the single most important thing to check before starting a siding project in Laurel. The City of Laurel Historic District Commission (HDC), established in 1975, has design review authority over seven individual contiguous historic districts in the northern part of the city, mostly around Old Town Laurel and Main Street. If your home sits in one of these districts, any exterior alteration — including siding replacement, material change, or color change — requires a Certificate of Approval from the HDC before a building permit can even be applied for. The Commission typically meets the third Tuesday of each month, and reviews are based on the City's published Historic District Commission Design Guidelines. As of July 2025, residential Certificate of Approval applications carry no filing fee, though a $25 fee applies if an application is submitted incomplete. Whether your specific house counts as a \"contributing\" or \"non-contributing\" resource also affects how strictly certain design elements are reviewed. DMV General Contracting Group checks your address against the City's Historic District maps before recommending materials, and prepares and files the Certificate of Approval application on your behalf."
        },
        {
            question: "What's different about siding replacement on Laurel's Cold War-era boom homes in Fairlawn, West Laurel, or Maryland City?",
            answer: "Laurel saw an extraordinary housing boom from the mid-1950s through the late 1960s, driven by new employment at Fort Meade (including the NSA) and the Goddard Space Flight Center, combined with the opening of the Baltimore-Washington Parkway, the Beltways, and I-95. Most of that construction fell within four areas: the Fairlawn district inside the city limits, West Laurel, the Route 197 corridor, and Maryland City — Levitt & Sons alone built hundreds of houses near the historic Montpelier Mansion starting in 1965. These homes share simple, efficient period frame construction with thinner original wall insulation than modern code requires, which makes insulated vinyl siding, or James Hardie fiber cement with a rigid foam backer, a particularly effective upgrade — homeowners in these neighborhoods often notice the comfort difference more than owners of newer Laurel homes do. DMV General Contracting Group has worked on multiple projects across Fairlawn, West Laurel, and Maryland City and matches siding profiles to each neighborhood's mid-century character."
        },
        {
            question: "Is my Laurel-address home actually inside the City of Laurel's permitting jurisdiction, or the county's?",
            answer: "It depends on your exact address, and this trips up more Laurel homeowners than you'd expect. The City of Laurel's own jurisdiction — where the City's Department of Economic and Community Development and Fire Marshal & Permit Services (FMPS) handle permits — covers only about 4.3 square miles along the Patuxent River in northern Prince George's County. But the broader Laurel community, and many addresses with a \"Laurel, MD\" mailing address across zip codes like 20707, 20708, 20723, and 20724, actually sit outside the municipal boundary in unincorporated Prince George's, Howard, or Anne Arundel County, where permits are filed with the county instead of the City. Filing a siding permit with the wrong jurisdiction can delay a project by weeks. DMV General Contracting Group confirms which jurisdiction your specific parcel falls under against the City of Laurel's official boundary map before filing anything."
        },
        {
            question: "What is the best siding for a home in the Patuxent River floodplain in Laurel?",
            answer: "For Laurel homes near the Patuxent River corridor, roughly 10% of the city sits within a mapped floodplain, and the City has run active floodplain management programs since Tropical Storm Agnes produced the \"flood of record\" for the region in June 1972. For homes in or near this corridor, James Hardie fiber cement is our top recommendation — it does not absorb moisture, rot, or support mold growth the way some other materials can, which matters after any water exposure event, not just a major flood. Homeowners near the river should confirm their FEMA flood zone status before finalizing exterior work, since it can affect other aspects of a renovation scope, permitting, or insurance. Insulated vinyl remains a strong option for Laurel properties away from the immediate river corridor. DMV General Contracting Group discusses site-specific flood and moisture exposure at every Laurel estimate."
        },
        {
            question: "How much does siding replacement cost in Laurel, MD?",
            answer: "Siding replacement in Laurel typically runs $10,500–$19,500 for standard vinyl, $12,500–$23,000 for insulated vinyl, $13,500–$25,500 for LP SmartSide, and $15,000–$30,000 for James Hardie fiber cement on an average Laurel home, reflecting the city's mix of Historic District properties, mid-century boom homes, and newer construction. Sheathing repair adds $1,800–$6,500 where damage is found during removal. Homes inside the Historic District should also budget for the HDC Certificate of Approval review timeline, even though the application itself currently carries no residential filing fee. DMV General Contracting Group provides free, detailed in-home estimates for every Laurel siding project."
        },
        {
            question: "Is DMV General Contracting Group licensed for siding in Laurel, MD?",
            answer: "Yes. DMV General Contracting Group holds Maryland MHIC license #156178 — required for all home improvement work in Laurel, whether the property falls under City of Laurel jurisdiction or Prince George's, Howard, or Anne Arundel County. Fully bonded, comprehensive general liability and workers' compensation insurance, and a 1-year workmanship warranty on every Laurel siding project."
        }
    ];

    return (
        <div className="siding-city-detail-page siding-laurel-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/siding-installation">Siding Installation</Link><span>›</span>
                    Laurel, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Laurel, MD</div>
                    <h1>Siding Installation & Replacement in Laurel, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏛️ Historic District & Cold War-Boom Suburbs — Different Rules for Each</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ HDC Certificate of Approval Filed Correctly</span>
                        <span className="badge">✓ Patuxent Floodplain Moisture-Resistant Materials</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">🏛️</div>
                    <div>
                        <h3>Laurel Spans Four Distinct Housing Eras Across Three Counties — And Its Historic District Requires Sign-Off Before Any Siding Permit</h3>
                        <p>Incorporated in 1870 along the Patuxent River, the City of Laurel's actual municipal jurisdiction covers only about 4.3 square miles in northern Prince George's County — but the wider Laurel community most people mean by "Laurel, MD" spreads into Howard and Anne Arundel Counties too, across zip codes like 20707, 20708, 20723, and 20724. Its housing stock tells the story: Old Town Laurel's early Historic District homes near Main Street, the mid-century Cold War-boom neighborhoods built through the 1950s and '60s for Fort Meade, NSA, and Goddard Space Flight Center workers, and a newer wave of master-planned subdivisions. What makes Laurel different from most nearby communities is that homes inside its seven Historic District boundaries need a Historic District Commission Certificate of Approval before any exterior siding change — and knowing whether your specific address even falls under the City's permitting authority, versus the county's, matters just as much.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a trusted <strong>siding contractor in Laurel, MD</strong>? DMV General Contracting Group installs and replaces all types of exterior siding for Laurel homeowners — James Hardie fiber cement, insulated vinyl, LP SmartSide engineered wood, and standard vinyl — across Old Town Laurel's Historic District, the Cold War-era boom neighborhoods of Fairlawn, West Laurel, and Maryland City, and newer master-planned communities like Russett and Laurel Lakes. Every project includes old siding removal, sheathing inspection and repair, house wrap installation, soffit and fascia work, jurisdiction confirmation, and permit processing — including Historic District Commission Certificate of Approval filing where required. MHIC licensed, fully insured, 1-year workmanship warranty. Free in-home estimate. Call +1 240-730-1292.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">🏛️</div><strong>Historic District Experts</strong><span>HDC Certificate of Approval filed correctly the first time</span></div>
                    <div className="trust-item"><div className="icon">💧</div><strong>Patuxent Flood-Corridor Materials</strong><span>Moisture-resistant siding for the ~10% of Laurel in the floodplain</span></div>
                    <div className="trust-item"><div className="icon">📍</div><strong>Jurisdiction Confirmed First</strong><span>City FMPS vs. Prince George's, Howard & Anne Arundel County</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>Why Laurel Siding Projects Need Local Expertise</h2>

                <div className="roi-box">
                    <h3>🏛️ The Laurel Housing Stock Case — Explained Honestly</h3>
                    <ul>
                        <li><strong>Old Town Laurel's Historic District is a genuinely different process:</strong> The City of Laurel Historic District Commission (HDC), established in 1975, holds design review authority over seven individual, contiguous historic districts concentrated in the northern part of the city, largely around Main Street. Any exterior siding change on a home inside these boundaries requires a Certificate of Approval from the HDC — reviewing material, profile, and color against the City's published design guidelines — before a building permit application can even be submitted. Since July 2025, residential Certificate of Approval applications carry no filing fee.</li>
                        <li><strong>Fairlawn, West Laurel & Maryland City are Cold War-boom construction:</strong> Laurel's population exploded from the mid-1950s through the late 1960s as Fort Meade, the NSA, and the Goddard Space Flight Center drove huge employment growth, and new highways — the Baltimore-Washington Parkway, both Beltways, and I-95 — opened the area to commuters. Levitt & Sons alone built hundreds of houses near the historic Montpelier Mansion starting in 1965. These homes share simple, efficient period frame construction with thinner original wall insulation than today's code, which makes insulated vinyl or James Hardie with a rigid foam backer a particularly effective upgrade.</li>
                        <li><strong>Newer master-planned neighborhoods are a different scope entirely:</strong> Communities like Russett and Laurel Lakes, and newer construction around North Laurel and Scaggsville, are built to modern energy codes already. Siding here is typically chosen for durability, curb appeal, and resale value rather than an insulation retrofit — a different conversation than a Historic District or Cold War-era project.</li>
                        <li><strong>Only part of "Laurel, MD" is actually inside city limits:</strong> The City of Laurel's own jurisdiction covers roughly 4.3 square miles along the Patuxent River. Many Laurel-address homes — across zip codes 20707, 20708, 20723, and 20724 — sit outside that boundary in unincorporated Prince George's, Howard, or Anne Arundel County, and permits for those properties go to the relevant county instead of the City's Fire Marshal & Permit Services department. We confirm which jurisdiction your property falls under before filing anything.</li>
                    </ul>
                </div>

                <h2>Siding Services We Offer in Laurel, MD</h2>
                <div className="check-grid">
                    <span className="check-item">Full Home Siding Replacement</span>
                    <span className="check-item">Historic District & Cold War-Era Siding Removal</span>
                    <span className="check-item">James Hardie Fiber Cement (HardiePlank)</span>
                    <span className="check-item">Insulated Vinyl Siding</span>
                    <span className="check-item">LP SmartSide Engineered Wood</span>
                    <span className="check-item">Standard Vinyl Siding</span>
                    <span className="check-item">Historic District Commission COA Filing</span>
                    <span className="check-item">House Wrap & Weather Barrier</span>
                    <span className="check-item">Soffit Enclosure & Fascia Replacement</span>
                    <span className="check-item">Trim, Corner Board & Window Casing</span>
                    <span className="check-item">Sheathing Inspection & Repair</span>
                    <span className="check-item">Storm & Floodplain Moisture Damage Repair</span>
                    <span className="check-item">Jurisdiction Verification (City vs. County)</span>
                    <span className="check-item">City of Laurel FMPS Permit Processing</span>
                </div>

                <h2>Siding Types for Laurel's Historic District, Cold War-Boom Homes & New Builds</h2>

                <div className="material-grid">
                    <div className="material-card">
                        <div className="m-tag">Best ROI</div>
                        <div className="m-icon">🏆</div>
                        <h3>James Hardie Fiber Cement — HardiePlank</h3>
                        <p>Our top recommendation across Laurel — from Historic District homes to Patuxent-corridor properties. HardiePlank resists moisture, rot, and mold, a real advantage on Laurel's lower-lying lots near the floodplain. ColorPlus factory finish holds 15–20 years without repainting, and profiles can be matched to a Historic District home's original scale or specified fresh for a newer build.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 30–50 yrs</span>
                            <span><strong>Laurel Cost:</strong> $15,000 – $30,000+</span>
                        </div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Best for Cold War-Boom Homes</div>
                        <div className="m-icon">🌡️</div>
                        <h3>Insulated Vinyl Siding</h3>
                        <p>Our most frequently recommended material for Fairlawn, West Laurel, and Maryland City's 1950s–60s homes, where original wall insulation is minimal by today's standard. Insulated vinyl adds R-2 to R-4 of continuous foam insulation during the same replacement project that updates the exterior — a genuinely noticeable improvement on this era's simple frame construction.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 20–40 yrs</span>
                            <span><strong>Laurel Cost:</strong> $12,500 – $23,000+</span>
                        </div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Historic District Character</div>
                        <div className="m-icon">🪵</div>
                        <h3>LP SmartSide Engineered Wood</h3>
                        <p>A strong option for Old Town Laurel's early Historic District homes, where a wood aesthetic helps preserve original character and satisfies HDC design review without cedar's maintenance demands. LP SmartSide's texture suits Main Street's older architecture. Paint intervals of 8–10 years versus cedar's 4–7.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 25–35 yrs</span>
                            <span><strong>Laurel Cost:</strong> $13,500 – $25,500+</span>
                        </div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Budget Option</div>
                        <div className="m-icon">🏠</div>
                        <h3>Standard Vinyl Siding</h3>
                        <p>Modern standard vinyl is durable, low-maintenance, and available in a wide range of profiles and colors — a practical choice where cost is the priority. Standard vinyl does not improve wall insulation or offer the same moisture resistance as fiber cement; for Cold War-era boom homes or properties near the Patuxent, we generally recommend insulated vinyl or James Hardie instead. Note: standard vinyl is rarely approved inside the Historic District.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 20–40 yrs</span>
                            <span><strong>Laurel Cost:</strong> $10,500 – $19,500+</span>
                        </div>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Our Recommendation for Laurel:</strong> For homes inside the <strong>Historic District</strong>, <strong>LP SmartSide</strong> or <strong>James Hardie</strong> typically clears HDC design review most smoothly. For <strong>Fairlawn, West Laurel & Maryland City</strong> homes from Laurel's Cold War-boom era, <strong>insulated vinyl</strong> delivers the strongest energy improvement. For properties near the <strong>Patuxent River corridor</strong>, <strong>James Hardie fiber cement</strong> is our default recommendation for its moisture resistance.
                </div>

                <h2>Siding Material Comparison for Laurel, MD Homes</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="compare-table">
                            <thead>
                                <tr><th>Material</th><th>Durability</th><th>Moisture Resistance</th><th>Best Fit</th><th>Cost</th></tr>
                            </thead>
                            <tbody>
                                <tr className="top-pick"><td>James Hardie Fiber Cement ⭐</td><td>Excellent — 30–50 yrs</td><td>Excellent — won't rot</td><td>Patuxent-corridor lots, Historic District</td><td>$15K – $30K+</td></tr>
                                <tr><td>Insulated Vinyl</td><td>Good — 20–40 yrs</td><td>Good</td><td>Fairlawn, West Laurel & Maryland City energy upgrades</td><td>$12.5K – $23K+</td></tr>
                                <tr><td>LP SmartSide</td><td>Good — 25–35 yrs</td><td>Good with proper finish</td><td>Historic District character</td><td>$13.5K – $25.5K+</td></tr>
                                <tr><td>Standard Vinyl</td><td>Good — 20–40 yrs</td><td>Fair</td><td>Budget-focused, outside the Historic District</td><td>$10.5K – $19.5K+</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Signs Your Laurel Home Needs New Siding</h2>

                <div className="signs-grid">
                    <div className="sign-card"><div className="s-icon">💧</div><h3>Moisture Damage Near the Patuxent</h3><p>Swelling, staining, or soft spots on siding facing the Patuxent River corridor — a pattern the City has tracked closely since Tropical Storm Agnes's 1972 "flood of record."</p></div>
                    <div className="sign-card"><div className="s-icon">🔧</div><h3>Cold War-Era Siding Failure</h3><p>Deteriorated original siding on Fairlawn, West Laurel, and Maryland City's 1950s–60s homes — cracking, gapping, or paint failure consistent with the era.</p></div>
                    <div className="sign-card"><div className="s-icon">🪵</div><h3>Rot on Historic District Trim</h3><p>Soft or crumbling wood at trim and window casings on Old Town Laurel's early Historic District homes — often the first visible sign of moisture behind the siding.</p></div>
                    <div className="sign-card"><div className="s-icon">🎨</div><h3>Severe Color Fade</h3><p>Washed-out, chalky color that cleaning cannot restore — the siding surface has degraded beyond cosmetic remedy.</p></div>
                    <div className="sign-card"><div className="s-icon">🌡️</div><h3>Cold Exterior Walls in Winter</h3><p>Interior wall surfaces cold to the touch — especially common in Laurel's mid-century boom homes with minimal original insulation.</p></div>
                    <div className="sign-card"><div className="s-icon">🍃</div><h3>Algae or Mold Growth</h3><p>Green or black staining on shaded, tree-covered elevations — common throughout Laurel's older wooded lots and a sign siding is holding moisture.</p></div>
                </div>

                <h2>Permitting in Laurel — Two Layers Worth Getting Right</h2>

                <div className="highlight">
                    <p>📍 <strong>The Laurel permitting reality:</strong> Because the City of Laurel's actual jurisdiction covers only about 4.3 square miles, the first question is always whether your property is even inside city limits — many "Laurel, MD" addresses across zip codes 20707, 20708, 20723, and 20724 fall under Prince George's, Howard, or Anne Arundel County instead, and permits go to the county rather than the City's Fire Marshal & Permit Services (FMPS) department. For properties that are inside city limits and also inside one of Laurel's seven Historic Districts, there's a second layer: a Historic District Commission Certificate of Approval is required before FMPS will issue a building permit for exterior siding work, and HDC meetings typically run monthly on the third Tuesday. FMPS permit review itself can take up to 30 business days, longer for complex or Historic District projects. DMV General Contracting Group confirms both your jurisdiction and your Historic District status before filing, so there are no surprises mid-project.</p>
                </div>

                <h2>Our Siding Installation Process in Laurel</h2>

                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free In-Home Estimate — Housing Era & Jurisdiction Assessed</h3>
                            <p>We visit your Laurel home and assess the full exterior — siding condition on all elevations, which of Laurel's housing eras the home belongs to, whether it falls inside city limits or county jurisdiction, and whether it sits within a Historic District. Material samples and color options presented at this appointment. No charge, no obligation.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Material Selection — Matched to Era and Review Requirements</h3>
                            <p>We bring James Hardie ColorPlus samples, insulated vinyl profiles, LP SmartSide options, and standard vinyl to your Laurel home. Recommendations are calibrated to whether your home is a Historic District property, a Fairlawn or West Laurel Cold War-era house, or a newer build, and to how the material will fare in HDC design review if applicable.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Jurisdiction Check, HDC Filing & Permit Submission</h3>
                            <p>We confirm whether your parcel is inside City of Laurel limits or under county authority, and — for Historic District properties — prepare and submit the Certificate of Approval application to the HDC. Once approved (or if your home is outside the Historic District), we file the building permit with the appropriate department.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Old Siding Removal & Sheathing Inspection</h3>
                            <p>Existing siding removed carefully, with extra attention to moisture-related sheathing damage on Patuxent-corridor and floodplain-adjacent homes. Damaged sections replaced before house wrap goes on. Lead-safe disposal practices used on Laurel's older pre-1978 homes, including Historic District properties and Cold War-era boom homes.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>House Wrap, Insulation, Siding & Trim Installation</h3>
                            <p>Continuous weather-resistant barrier installed across all elevations, individually flashed at every window, door, and penetration. Rigid foam insulation installed where the scope includes an energy upgrade. New siding installed with reveal and profile matched to your home's era, plus all corner boards, window casings, and fascia finished to a consistent standard.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Final Inspection, Caulking & Exterior Walkthrough</h3>
                            <p>Every seam, transition, and penetration inspected. All exterior joints caulked with flexible, paintable exterior-grade sealant. Full debris removal. Exterior walkthrough on every elevation with you before project close. Written warranty. Permit and, where applicable, HDC sign-off closed.</p>
                        </div>
                    </div>
                </div>

                <h2>Siding Replacement Cost in Laurel, MD</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr><th>Siding Material</th><th>Typical Cost — Laurel Home</th><th>Per Sq Ft (Installed)</th><th>Notes</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Standard Vinyl</td><td>$10,500 – $19,500+</td><td>$4 – $8 / sq ft</td><td>Best outside the Historic District</td></tr>
                                <tr><td>Insulated Vinyl</td><td>$12,500 – $23,000+</td><td>$6 – $10 / sq ft</td><td>Strongest energy upgrade for Cold War-era boom homes</td></tr>
                                <tr><td>LP SmartSide</td><td>$13,500 – $25,500+</td><td>$7 – $12 / sq ft</td><td>Wood character suited to Historic District review</td></tr>
                                <tr><td>James Hardie Fiber Cement</td><td>$15,000 – $30,000+</td><td>$8 – $14 / sq ft</td><td>Best moisture resistance near the Patuxent</td></tr>
                                <tr><td>Sheathing Repair (if needed)</td><td>$1,800 – $6,500+</td><td>Depends on damage extent</td><td>Common on floodplain-adjacent lots with past moisture exposure</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Laurel's floodplain factor:</strong> Roughly 10% of the City of Laurel sits within a mapped Patuxent River floodplain, and the City has run active floodplain management programs since Tropical Storm Agnes's 1972 flood of record. Homes closer to the river tend to see more moisture-related sheathing damage under old siding than similar homes elsewhere in Laurel. Budgeting for a sheathing inspection allowance up front, and choosing a moisture-resistant material like James Hardie for these lots, typically avoids surprises mid-project rather than after removal.
                </div>

                <h2>What Laurel Homeowners Say About DMV General Contracting Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our home is in the Historic District near Main Street, and we were nervous about the HDC approval process. DMV General Contracting Group handled the Certificate of Approval application for us and knew exactly what the Commission would want to see. Approved on the first submission."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Old Town Laurel, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our house in Fairlawn is from the '60s and had almost no insulation behind the original siding. We went with insulated vinyl and the difference in comfort this winter has been noticeable. They knew right away it was a Cold War-boom-era house just from looking at the construction."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Fairlawn, Laurel, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We assumed our house was inside city limits, but DMV General Contracting Group checked and found we were actually under Prince George's County jurisdiction, not the City's. They filed with the right department the first time and saved us weeks of back-and-forth."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Laurel, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our lot backs up to the Patuxent floodplain and had real moisture damage behind the old siding that we didn't know about until removal. DMV General Contracting Group replaced the damaged sheathing and installed James Hardie, which they explained would hold up much better in our spot."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Laurel, MD</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Laurel homeowners trust DMV General Contracting Group to recognize which of the community's housing eras a home belongs to, navigate Historic District Commission review correctly, confirm the right permitting jurisdiction, and recommend moisture-resistant materials for Patuxent-corridor lots.</p>
                </div>

                <div className="cta-banner">
                    <h2>Get a Free Siding Estimate for Your Laurel Home</h2>
                    <p>Our team will visit your Laurel home, assess your existing siding and site conditions, confirm your permitting jurisdiction and Historic District status, and provide a detailed estimate — at no cost, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Siding Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All Laurel, MD Neighborhoods for Siding Installation</h2>
                <div className="areas-grid">
                    <span className="area-pill">Old Town Laurel / Historic District</span>
                    <span className="area-pill">Fairlawn</span>
                    <span className="area-pill">West Laurel</span>
                    <span className="area-pill">Maryland City</span>
                    <span className="area-pill">North Laurel / Scaggsville</span>
                    <span className="area-pill">South Laurel</span>
                    <span className="area-pill">Russett</span>
                    <span className="area-pill">Montpelier</span>
                    <span className="area-pill">Laurel Lakes</span>
                    <span className="area-pill">Route 197 Corridor</span>
                </div>

                <h2>Frequently Asked Questions — Siding Installation in Laurel, MD</h2>
                <Accordion className="faq-list" defaultActiveKey="0">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="internal-links">
                    <h2>Explore Our Other Services in Laurel, MD</h2>
                    <ul>
                        <li><Link href="/service/kitchen-remodeling/laurel-md">Kitchen Remodeling in Laurel, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling/laurel-md">Bathroom Remodeling in Laurel, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/laurel-md">Basement Remodeling in Laurel, MD</Link></li>
                        <li><Link href="/service/adu/laurel-md">ADU Construction in Laurel, MD</Link></li>
                        <li><Link href="/service/decks/laurel-md">Deck Building in Laurel, MD</Link></li>
                        <li><Link href="/service/flooring-remodeling/laurel-md">Flooring Installation in Laurel, MD</Link></li>
                        <li><Link href="/service/design-build/laurel-md">Design-Build Contractor in Laurel, MD</Link></li>
                        <li><Link href="/service/roofing">Roofing in Laurel, MD</Link></li>
                    </ul>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Get Started on Your Laurel Siding Project?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free estimate. We match materials to your home's era, confirm your permitting jurisdiction, handle Historic District Commission filing where required, and recommend moisture-resistant options for Patuxent-corridor lots. MHIC licensed. 1-year warranty.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Siding Estimate in Laurel →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default LaurelMD;
