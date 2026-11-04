'use client';

import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "./style.scss";
import "../design-build-city-style.scss";

const WheatonMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Why does Wheaton offer strong renovation ROI compared to other Montgomery County communities?",
            answer: "Wheaton's home prices are priced below comparable Silver Spring, Kensington, and Bethesda properties despite sharing the same Montgomery County school district, Metro Red Line access at Wheaton station, and proximity to DC employment. This gap between Wheaton's current prices and its underlying location value means renovation returns are measured against a lower cost base — the same construction investment that produces a modest percentage gain on a $900,000 Bethesda home produces a significant percentage gain on a $600,000 Wheaton home. As Wheaton's community trajectory continues improving through the Wheaton Sector Plan and surrounding development, renovation-driven equity growth compounds that advantage further."
        },
        {
            question: "How does DMV-GC Group handle MoCo DPS permits for Wheaton projects?",
            answer: "Wheaton is unincorporated Montgomery County — all building permits go through MoCo DPS at 2425 Reedie Drive, Wheaton. Our permit office is literally in Wheaton. DMV-GC Group's in-house permit team handles all MoCo DPS permit filings, structural plan reviews, zoning submissions, and inspection scheduling for every Wheaton project. We file complete packages that do not require supplemental submissions. Wheaton homeowners never contact MoCo DPS during their project — we are the single point of contact with the county from initial filing through permit close."
        },
        {
            question: "How much does a design-build renovation cost in Wheaton, MD?",
            answer: "Design-build costs in Wheaton depend on scope. Open-concept conversions with load-bearing wall removal run $18,000–$50,000+. Kitchen remodels run $30,000–$90,000+. Bathroom renovations run $20,000–$65,000+. Basement finishing runs $30,000–$90,000+. Rear additions range from $90,000–$270,000+. ADU construction runs $65,000–$200,000+. Whole-home renovations range from $120,000–$380,000+. Architectural design, structural engineering, and permit processing are included in the project cost — no separate billing rate for any of these functions."
        },
        {
            question: "Can my Wheaton split-level support an open-concept conversion?",
            answer: "In most cases, yes — but only when the load-bearing status of walls in the conversion area is confirmed by a structural engineer before any demolition begins. Wheaton's 1950s–1970s split-levels have load-bearing walls at locations that are not always visually obvious, and the multi-level floor plate creates structural conditions that differ from single-story or two-story construction. DMV-GC Group's in-house structural engineers walk Wheaton homes and assess load-bearing wall conditions before any design is finalized — so the open-concept layout you approve is one that can actually be built without mid-project structural discoveries."
        },
        {
            question: "Is DMV-GC Group licensed for design-build work in Wheaton, MD?",
            answer: "Yes. DMV General Contracting Group holds Maryland MHIC license #156178 — required for all home improvement and construction work in Wheaton, which is unincorporated Montgomery County. Fully bonded, comprehensive general liability and workers' compensation coverage, and a 1-year workmanship warranty on every Wheaton design-build project."
        }
    ];

    return (
        <div className="design-build-city-detail-page design-build-wheaton-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/design-build">Design-Build</Link><span>›</span>
                    Wheaton, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Wheaton, MD</div>
                    <h1>Design-Build Contractor in Wheaton, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏛️ In-House Architects & Engineers</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ MoCo DPS — 2425 Reedie Drive</span>
                        <span className="badge">✓ Strongest Renovation ROI in MoCo</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">📈</div>
                    <div>
                        <h3>Wheaton Offers One of the Strongest Renovation Return-on-Investment Cases in All of Montgomery County — Because Wheaton Home Prices Are Undervalued Relative to Their Location, and a Well-Executed Design-Build Renovation Captures That Gap</h3>
                        <p>Wheaton is directly served by the Metro Red Line at Wheaton station — one of the deepest stations in the Washington Metro system — and sits squarely within Montgomery County's school district, minutes from Silver Spring, Kensington, and DC employment corridors. Despite these location attributes, Wheaton home prices consistently run below Silver Spring, Kensington, and Bethesda equivalents in the same county. That gap is the renovation ROI opportunity. A Wheaton homeowner who invests $120,000–$180,000 in a well-designed rear addition and whole-home renovation is not paying the premium that the same renovation costs in Bethesda — they are paying Wheaton construction prices and capturing Wheaton-to-Silver-Spring appreciation as the community's trajectory continues upward. DMV General Contracting Group has completed design-build renovations throughout Wheaton's established residential neighborhoods — Wheaton Hills, Glenmont, Arcola, and the neighborhoods surrounding the Wheaton Metro station — delivering additions, open-concept conversions, ADU constructions, and whole-home renovations under one contract, one team, and one point of accountability. MoCo DPS at 2425 Reedie Drive is literally down the street from many Wheaton projects — our permit team files there regularly and knows the Wheaton permitting landscape.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a trusted <strong>design-build contractor in Wheaton, MD</strong>? DMV General Contracting Group brings licensed architects, structural engineers, permit specialists, and all licensed trades in-house to Wheaton renovation projects — handling everything from concept drawings through final inspection under one contract. Rear additions that expand Wheaton's compact 1950s–1970s footprints. ADU construction that generates Wheaton rental income at Metro-adjacent prices. Open-concept conversions that transform split-level compartmentalized layouts. Whole-home renovations that close the gap between Wheaton's purchase price and its actual location value. One firm. One contract. Full accountability — at construction costs calibrated to Wheaton's market, not Bethesda's.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">📈</div><strong>Strongest MoCo ROI</strong><span>Wheaton construction costs + Metro-adjacent appreciation</span></div>
                    <div className="trust-item"><div className="icon">📐</div><strong>In-House Architects</strong><span>Designs, renderings & permit drawings — no outside firm</span></div>
                    <div className="trust-item"><div className="icon">📋</div><strong>MoCo DPS — Down the Street</strong><span>2425 Reedie Drive, Wheaton — our regular permit office</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>Why Wheaton Has the Strongest Renovation ROI in Montgomery County</h2>

                <div className="roi-box">
                    <h3>📈 The Wheaton Renovation ROI Case — Explained Honestly</h3>
                    <ul>
                        <li><strong>The location value gap:</strong> Wheaton shares Montgomery County's school district, Wheaton Metro Red Line access, and proximity to Silver Spring, Kensington, and DC employment with its surrounding communities — yet Wheaton single-family home prices consistently run $100,000–$250,000 below comparable Silver Spring and Kensington properties in the same zip code range. This gap is not explained by school or transit access — it reflects Wheaton's community identity and commercial corridor, which have been actively improving through the Wheaton Sector Plan and adjacent development. The gap is closing — slowly, but measurably.</li>
                        <li><strong>Construction cost anchors to purchase price:</strong> In Bethesda or Chevy Chase, a $150,000 renovation is added on top of a $900,000+ purchase price — the percentage return is compressed by the already-high base. In Wheaton, a $150,000 renovation is added on top of a $550,000–$650,000 purchase price. The renovation represents a larger percentage increase to the total property value, and Wheaton's trajectory means that increase is not immediately consumed by ceiling-effect compression. Wheaton homeowners who renovate well are building equity that Bethesda homeowners cannot find at that price point.</li>
                        <li><strong>What a well-executed Wheaton design-build renovation adds:</strong> An architect-designed rear addition ($100,000–$180,000) on a Wheaton split-level or colonial typically adds $140,000–$240,000 to appraised value. An open-concept conversion ($18,000–$40,000) adds $30,000–$60,000. A finished basement ($35,000–$75,000) adds $40,000–$80,000. These return multiples are not unusual in Montgomery County — but they are particularly reliable in Wheaton, where buyer demand for updated homes with modern layouts consistently outstrips the supply of renovated inventory. Wheaton buyers are not finding renovated homes — they are finding 1960s split-levels in original condition or with 1990s updates. A well-designed contemporary renovation stands out sharply in that market.</li>
                        <li><strong>ADU income at Metro-adjacent rents:</strong> Wheaton Metro station walkability drives Wheaton ADU rental rates into the $1,500–$2,000/month range for one-bedroom accessory units — and at Wheaton's construction costs ($65,000–$150,000 for a garage conversion or detached ADU), the ROI on ADU construction in Wheaton is among the strongest in Montgomery County.</li>
                        <li><strong>Why design-build captures more of this ROI than traditional contracting:</strong> A Wheaton renovation that goes 20% over budget due to mid-project structural surprises, design errors discovered after bidding, or mismanaged permits compresses the ROI significantly. The design-build model — where the same team designs and builds, budget accuracy is built in from the concept phase, and MoCo permits are managed in-house — is the execution model most likely to deliver Wheaton renovations on budget and on schedule, preserving the ROI rather than eroding it through the coordination failures that characterize separate architect-and-GC arrangements.</li>
                    </ul>
                </div>

                <h2>What Is Design-Build — And Why It Matters for Wheaton Homeowners</h2>
                <p>The design-build method places architectural design and construction under one contract and one firm. For Wheaton homeowners whose renovation ROI depends on budget accuracy and schedule adherence, this matters directly:</p>

                <div className="highlight">
                    <p>🏗️ <strong>The design-build ROI protection for Wheaton:</strong> Every dollar of cost overrun in a Wheaton renovation reduces the ROI that made the project financially compelling. When an architect designs without knowing what a GC will charge to build, and a GC bids higher than the architect estimated, and the homeowner funds a redesign, and the permit comes back incomplete — all of that costs money and time that directly erodes renovation return. DMV-GC Group designs within your budget from day one, prices construction as design is developed, and files complete MoCo DPS permit packages that do not come back for supplemental submissions. Budget accuracy is how design-build protects Wheaton renovation ROI.</p>
                </div>

                <table className="compare-table">
                    <tr><th>Factor</th><th>Design-Build (DMV-GC Group)</th><th>Traditional (Separate Architect + GC)</th></tr>
                    <tr><td><strong>Budget accuracy</strong></td><td>Construction team prices design in real time — no bid shock</td><td>Architect designs, GC bids higher — redesign costs time and money</td></tr>
                    <tr><td><strong>Structural assessment</strong></td><td>Engineer walks home before design — no mid-demo surprises</td><td>GC discovers load-bearing wall mid-demolition — change order</td></tr>
                    <tr><td><strong>Permit filing</strong></td><td>In-house team files complete MoCo DPS package first try</td><td>Incomplete package requires resubmission — weeks of delay</td></tr>
                    <tr><td><strong>Accountability</strong></td><td>One firm responsible — no blame gap between architect and GC</td><td>Architect and GC blame each other for overruns and delays</td></tr>
                    <tr><td><strong>ROI impact</strong></td><td>Budget-accurate project preserves renovation return</td><td>Every overrun directly compresses the ROI</td></tr>
                </table>

                <h2>Our In-House Design-Build Team for Wheaton Projects</h2>

                <div className="team-grid">
                    <div className="team-card"><div className="t-icon">📐</div><strong>Architects</strong><span>Floor plans, elevations, 3D renderings, permit-ready construction drawings for Wheaton's split-levels and colonials</span></div>
                    <div className="team-card"><div className="t-icon">🧱</div><strong>Structural Engineers</strong><span>Load-bearing wall assessment, beam sizing, addition structural design for postwar Wheaton construction</span></div>
                    <div className="team-card"><div className="t-icon">📋</div><strong>Permit Specialists</strong><span>MoCo DPS at 2425 Reedie Drive — our home permit office, filings managed entirely in-house</span></div>
                    <div className="team-card"><div className="t-icon">⚡</div><strong>Licensed Electricians</strong><span>Panel upgrades from 100A to 200A, circuits, recessed lighting, EV chargers</span></div>
                    <div className="team-card"><div className="t-icon">🔧</div><strong>Licensed Plumbers</strong><span>Drain & supply rough-in, fixture installation, gas lines for kitchen and bathroom renovations</span></div>
                    <div className="team-card"><div className="t-icon">🌡️</div><strong>HVAC Technicians</strong><span>System extensions, zone additions for Wheaton additions and basement finishes</span></div>
                </div>

                <div className="author-box">
                    <div className="author-avatar">🏗️</div>
                    <div className="author-info">
                        <h4>About DMV-GC Group — Wheaton's Design-Build Contractor</h4>
                        <p>DMV General Contracting Group holds Maryland MHIC license #156178 and is based in North Bethesda — adjacent to Wheaton on the Georgia Avenue corridor. MoCo DPS at 2425 Reedie Drive, Wheaton is our primary permit office for Montgomery County projects — our permit team files there regularly and knows the Wheaton permit review landscape. We have completed kitchen remodels, open-concept conversions, rear additions, ADU constructions, and whole-home renovations throughout Wheaton's established residential neighborhoods. One firm, one contract, full accountability for Wheaton homeowners.</p>
                        <div className="author-creds">
                            <span className="cred">MHIC #156178</span>
                            <span className="cred">MoCo DPS — Our Home Office</span>
                            <span className="cred">In-House Architects & Engineers</span>
                            <span className="cred">Wheaton ROI Specialists</span>
                            <span className="cred">4.9★ Rated</span>
                            <span className="cred">1-Year Warranty</span>
                        </div>
                    </div>
                </div>

                <h2>Design-Build Services We Offer in Wheaton, MD</h2>

                <div className="service-grid">
                    <div className="service-card">
                        <div className="s-icon">🏠</div>
                        <h3>Home Additions</h3>
                        <p>Rear additions, side additions, and upper-level additions for Wheaton's 1950s–1970s colonials and split-levels — designed in-house, permitted through MoCo DPS, and built by our licensed crews. Wheaton's typical lot sizes (6,000–9,000 sq ft) in MoCo's R-60 zoning district provide meaningful rear addition potential within the setback and lot coverage limits our architects assess for your specific parcel. A well-designed rear addition on a Wheaton colonial — adding a family room, primary suite, or expanded kitchen — adds $140,000–$240,000 to appraised value on a $100,000–$180,000 construction investment, representing one of the strongest addition ROI cases in Montgomery County.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">📐</div>
                        <h3>Open-Concept Conversion</h3>
                        <p>Load-bearing wall removal and open floor plan creation for Wheaton's compartmentalized 1950s–1970s layouts — Wheaton's most requested single design-build scope. Wheaton's split-level and colonial floor plans were designed for an era of separate formal rooms, not the continuous living-kitchen-dining space that modern families use. Our structural engineers walk your home and assess every wall in the conversion area before any design is finalized — no load-bearing wall surprises mid-demolition, no field changes that delay the permit. The open-concept main floor that results from a correctly executed Wheaton conversion adds $30,000–$60,000 to appraised value at $18,000–$40,000 in construction cost — the highest ROI per dollar in the Wheaton renovation menu.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏗️</div>
                        <h3>ADU Construction</h3>
                        <p>Detached ADUs, garage conversions, and lower-level ADU conversions for Wheaton lots. Wheaton Metro station walkability drives ADU rental rates into the $1,500–$2,000/month range — and at Wheaton's construction costs ($65,000–$150,000 for a garage conversion or detached unit), the annual gross return on ADU construction regularly exceeds 15–20%. Our architects assess ADU eligibility on your specific Wheaton lot under MoCo's ADU zoning rules, design units that complement the primary home, and manage the full MoCo DPS permit process from submission through inspection.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🍳</div>
                        <h3>Kitchen Remodeling</h3>
                        <p>Full design-build kitchen renovations for Wheaton's postwar colonials and split-levels — layout redesign, custom cabinetry, island or peninsula where the floor plan permits, and all trades (electrical panel upgrade where needed, plumbing rough-in reconfiguration, HVAC grille relocation) coordinated in-house. Wheaton kitchens in 1960s–1970s construction are frequently undersized and compartmentalized — our architects redesign the kitchen footprint where adjacent dining or utility space can be absorbed, creating open, functional kitchen spaces that Wheaton buyers strongly prefer over original layouts.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🛁</div>
                        <h3>Bathroom Renovation</h3>
                        <p>Primary bath, guest bath, and powder room renovations designed and built in-house. Wheaton's 1960s–1970s bathrooms — frequently the original 5×8 full bath layout with tub-shower combo, pedestal sink, and limited storage — are prime candidates for layout expansion and full gut renovation. Our architects identify opportunities to expand into adjacent closet space or narrow hallway areas, and our in-house plumbers handle all rough-in reconfiguration without a separate subcontractor engagement adding cost and schedule uncertainty.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🪜</div>
                        <h3>Basement Finishing</h3>
                        <p>Complete basement design and finishing for Wheaton's split-levels and colonials with unfinished lower levels. Egress compliance, waterproofing, electrical and plumbing for lower-level bathroom, LVP flooring (always below grade — never hardwood), and all finishes under MoCo DPS permit where scope requires. A finished Wheaton basement adds $40,000–$80,000 to appraised value on a $35,000–$75,000 construction investment — consistently positive ROI in Wheaton's market where buyers actively seek turnkey homes with finished lower levels.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏡</div>
                        <h3>Whole-Home Renovation</h3>
                        <p>Complete interior transformations of Wheaton's 1950s–1970s colonials and split-levels — coordinating architectural redesign, structural work, all trades, and all finishes under one contract. For Wheaton homeowners who purchased a home in original or dated condition intending to renovate fully, the design-build approach converts what would be an 18-month multi-contract ordeal into a streamlined process managed by one project manager. All old-home conditions — wiring capacity, plumbing age, insulation — assessed before the contract is signed and incorporated into the design and budget, not treated as surprise change orders.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏗️</div>
                        <h3>Structural Modifications</h3>
                        <p>Stair relocation, ceiling height changes, floor plate modifications, and other structural alterations that require engineering drawings and MoCo DPS structural plan review — all handled in-house. Wheaton's split-level homes frequently have stair configurations that compromise the main-level flow, and our structural engineers assess relocation feasibility, design the structural solution, and produce the permit-ready drawings that MoCo's structural reviewers accept without supplemental submission requests. No outsourced structural engineer, no coordination gap between the engineer and the GC.</p>
                    </div>
                </div>

                <h2>Design-Build Process in Wheaton</h2>

                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free Consultation — ROI Assessment & Structural Walk</h3>
                            <p>We visit your Wheaton home with our architect and project manager. We walk every level, identify load-bearing walls in planned conversion areas, assess electrical panel capacity and plumbing age, and for addition or ADU projects, walk the exterior to confirm MoCo setback, lot coverage, and height limits on your parcel. We also discuss the renovation ROI case for your specific home and scope — which projects pencil best on your lot in Wheaton's current market. No cost, no obligation.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Concept Design — ROI-Anchored and Budget-Accurate</h3>
                            <p>Our architects develop concept options based on the consultation assessment, with our construction team reviewing in parallel to price each option in real time. For Wheaton projects where ROI is a primary driver, we present design options at multiple price points and discuss the expected return on each — so you can make an informed decision about scope and investment level before any permit is filed or construction dollar is spent.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Design Development & Material Selection</h3>
                            <p>We refine the approved concept into detailed drawings, 3D renderings, and material selections. For Wheaton renovations where resale value is a consideration, we advise on material selections that photograph well and appeal to Wheaton's buyer pool — durable, contemporary, and distinctive — rather than the generic builder-grade finishes that do not differentiate a renovated Wheaton home from one that was simply updated.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>MoCo DPS Permit Filing — 2425 Reedie Drive, Wheaton</h3>
                            <p>Our architects and structural engineers produce permit-ready construction documents. Our permit specialists file all required MoCo DPS permits at 2425 Reedie Drive — the permit office directly serving Wheaton — managing the full review process, structural plan review, and inspection scheduling. We file complete packages that do not require supplemental submissions. Wheaton homeowners never contact MoCo DPS during their project.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Construction — All Trades In-House</h3>
                            <p>Our licensed crews begin construction: demolition, structural framing, electrical (panel upgrade to 200A where needed, circuits, lighting), plumbing (rough-in reconfiguration, fixture installation), HVAC (zone extension for additions and basements), drywall, tile, cabinetry, flooring (hardwood above grade, LVP below grade), and all finishes. One project manager coordinates all trades on a single schedule. Weekly updates to you throughout the project.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>MoCo Inspections, Punch List & Permit Close</h3>
                            <p>All required MoCo inspections scheduled and managed — framing, electrical, plumbing, insulation, final. Detailed punch list review with you upon completion. Permit closed with MoCo DPS. Written warranty documentation. Your Wheaton home is fully renovated, fully inspected, and equity-building from day one of occupancy.</p>
                        </div>
                    </div>
                </div>

                <h2>Design-Build Project Costs in Wheaton, MD</h2>

                <table className="cost-table">
                    <tr><th>Project Type</th><th>Typical Design-Build Cost in Wheaton</th><th>Typical Value Added</th></tr>
                    <tr><td>Open-Concept Conversion (load-bearing)</td><td>$18,000 – $50,000+</td><td>$30,000 – $60,000 appraised value</td></tr>
                    <tr><td>Kitchen Remodel</td><td>$30,000 – $90,000+</td><td>$35,000 – $80,000 appraised value</td></tr>
                    <tr><td>Bathroom Renovation (primary)</td><td>$20,000 – $65,000+</td><td>$20,000 – $50,000 appraised value</td></tr>
                    <tr><td>Basement Finishing</td><td>$30,000 – $90,000+</td><td>$40,000 – $80,000 appraised value</td></tr>
                    <tr><td>Rear or Side Addition</td><td>$90,000 – $270,000+</td><td>$140,000 – $240,000 appraised value</td></tr>
                    <tr><td>ADU Construction</td><td>$65,000 – $200,000+</td><td>$1,500–$2,000/month rental income</td></tr>
                    <tr><td>Whole-Home Renovation</td><td>$120,000 – $380,000+</td><td>Significant equity capture vs. comparable unrenovated homes</td></tr>
                </table>

                <div className="tip">
                    💡 <strong>Design is included — no separate architect billing rate.</strong> In every Wheaton design-build project with DMV-GC Group, architectural design, structural engineering, 3D renderings, and permit-ready construction documents are bundled into the project cost. You do not pay separate architect fees (typically 10–15% of construction cost in the traditional model). On a $150,000 Wheaton renovation, that saves $15,000–$22,500 in architecture fees alone — money that goes toward construction quality or stays in your pocket.
                </div>

                <h2>What Wheaton Homeowners Say About DMV-GC Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We bought our Wheaton Hills split-level specifically to renovate. DMV-GC Group did the open-concept conversion on the main floor, gut kitchen, and primary bathroom — all under one contract. The structural engineer walked the home at the first visit and identified both load-bearing walls in our planned conversion before any design was drawn. The MoCo permit was filed at Reedie Drive and approved in three weeks. The renovation is complete and our appraiser put the value increase at $180,000 over our all-in cost."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Wheaton Hills, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We added a rear family room to our 1963 Wheaton colonial. DMV-GC Group's architect designed the addition to match the existing roofline and siding exactly. The MoCo DPS permit was filed by their team at 2425 Reedie Drive — which is literally three blocks from our house — and approved in five weeks. The addition was framed, roofed, dried in, and finished in eleven weeks. Our neighbors with a separate architect and GC have been waiting two years for their addition to be complete."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Glenmont Area, Wheaton MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We converted our attached garage into a one-bedroom ADU. DMV-GC Group confirmed eligibility on our lot, designed a unit with its own entrance and full kitchen, filed the MoCo permit, and built the ADU in four months. We're three blocks from the Wheaton Metro and renting it for $1,850/month. The payback period on the construction cost is under seven years. I wish we'd done it when we bought the house fifteen years ago."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Wheaton, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our Arcola-area split-level needed a full lower-level finish — family room, bathroom, laundry room, and proper egress window. DMV-GC Group designed the layout, confirmed the egress requirements, filed the MoCo permit, and finished the lower level in eight weeks. They specified LVP for the floor from the start — their project manager explained that below-grade hardwood fails in the DC climate regardless of installation quality. The finished lower level added two usable rooms to our home for $58,000."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Arcola, Wheaton MD</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Wheaton homeowners trust DMV-GC Group for design-build projects that are budget-accurate from concept, structurally assessed before design is finalized, permitted correctly with MoCo DPS, and delivered on schedule — preserving the renovation ROI that makes Wheaton one of Montgomery County's most compelling value-creation opportunities.</p>
                </div>

                <div className="cta-banner">
                    <h2>Start Your Design-Build Project in Wheaton</h2>
                    <p>Our architect and project manager will visit your Wheaton home, assess the renovation and addition potential, confirm MoCo zoning parameters, and discuss the ROI case for each project scope — at no cost, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Design Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All Wheaton, MD Neighborhoods for Design-Build</h2>
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
                    <span className="area-pill">Wheaton Metro Area</span>
                </div>

                <div className="nearby-box">
                    <h3>Also serving Silver Spring, MD — directly south of Wheaton on Georgia Avenue</h3>
                    <p>Silver Spring's 1950s–1970s split-levels and colonials share Wheaton's postwar construction character and MoCo DPS permit process. DMV-GC Group brings the same split-level structural expertise and design-build execution capability south along the Georgia Avenue corridor. <Link href="/service/design-build/silver-spring-md">View our Silver Spring design-build page →</Link></p>
                </div>

                <h2>Frequently Asked Questions — Design-Build in Wheaton, MD</h2>
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
                        <li><Link href="/service/home-additions">Home Additions in Wheaton, MD</Link></li>
                    </ul>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Capture Wheaton's Renovation ROI?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free design consultation. We file with MoCo DPS down the street, design on budget from day one, and build the open-concept, addition, and ADU projects that make Wheaton's value equation work.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Design-Build Consultation in Wheaton →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default WheatonMD;