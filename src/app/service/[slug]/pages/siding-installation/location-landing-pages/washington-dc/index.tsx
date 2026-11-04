'use client';

import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../siding-city-style.scss";
import "./style.scss";

const WashingtonDC = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Does my Washington DC home need Historic Preservation Review Board approval for new siding?",
            answer: "Very possibly. DC has 54 historic districts covering roughly 27,000 buildings, and exterior work — including siding replacement — on a property in one of them requires historic preservation review before a Department of Buildings permit is issued. More than 95 percent of these cases go through the Historic Preservation Office's Expedited Review, with same-day clearance possible for in-kind repairs using matching materials. Larger changes, such as replacing original wood siding with a different material on a front facade, can require full Historic Preservation Review Board review, which meets twice monthly. Skipping this step is not a minor risk: the 2024 Protecting Historic Homes Amendment Act allows fines up to $25,000 per violation for unpermitted work in a historic district. DMV General Contracting Group checks a property's historic status before recommending any material and handles the HPO or HPRB filing directly."
        },
        {
            question: "Can I install James Hardie fiber cement siding on my DC rowhouse's front facade?",
            answer: "It depends on the district and the elevation. DC's Historic Preservation Office has generally not approved fiber-cement products like James Hardie for front-facing elevations in historic districts, based on documented staff guidance, though it is more readily accepted on rear and side elevations not visible from the public right-of-way. Some districts have their own specific rules — Kingman Park's design guidelines, for example, explicitly allow new cementitious siding on frame houses and do not require wood-for-wood replacement. Outside DC's historic districts, James Hardie fiber cement can be installed on any elevation without this restriction. DMV General Contracting Group confirms your property's historic status and district-specific guidelines before recommending a front-facade material, and reserves James Hardie for rear and side elevations or non-historic properties where HPO restrictions don't apply."
        },
        {
            question: "Is siding review in Georgetown different from the rest of Washington, DC?",
            answer: "Yes. Georgetown is the one DC historic district where the DC Historic Preservation Review Board is not the primary reviewing authority. Exterior work visible from public space in the Georgetown Historic District, including siding, is reviewed by the US Commission of Fine Arts through its Old Georgetown Board — a federal review process distinct from the HPRB process used everywhere else in the city. A Georgetown siding project still needs a DC Department of Buildings permit, but the design review step runs through this separate federal channel. DMV General Contracting Group prepares Old Georgetown Board submissions specifically, rather than filing them as a standard DC HPRB case."
        },
        {
            question: "How much does siding replacement cost in Washington, DC?",
            answer: "Siding replacement on a typical DC rowhouse's rear and side elevations runs $9,000–$16,000 for insulated vinyl and $12,000–$24,000 for James Hardie fiber cement. Front-facade work on a historic-district property using an HPO-approved wood or wood-look material typically runs $15,000–$28,000, reflecting narrower rowhouse widths but higher labor and material costs for historic-compliant work. Sheathing repair adds $2,000–$7,000 where damage is found. HPO or HPRB, and where applicable Old Georgetown Board, submission prep is included at no added fee. DMV General Contracting Group provides free, detailed in-home estimates for every DC siding project."
        },
        {
            question: "Is DMV General Contracting Group licensed for siding work in Washington, DC?",
            answer: "Yes. DMV General Contracting Group holds a DC Department of Licensing and Consumer Protection (DLCP) Home Improvement Contractor license, along with Maryland MHIC license #156178 for work across the wider DMV region. Fully bonded, comprehensive general liability and workers' compensation insurance, and a 1-year workmanship warranty on every DC siding project."
        }
    ];

    return (
        <div className="siding-city-detail-page siding-washington-dc">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/siding-installation">Siding Installation</Link><span>›</span>
                    Washington, DC
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Washington, DC</div>
                    <h1>Siding Installation & Replacement in Washington, DC</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏛️ 54 Historic District Experts</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ DC Licensed & Insured</span>
                        <span className="badge">✓ HPRB & Old Georgetown Board Specialists</span>
                        <span className="badge">✓ Rowhouse Front-Facade Compliance Experts</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">🏛️</div>
                    <div>
                        <h3>DC Has 54 Historic Districts Covering About 27,000 Buildings — and the Rule Most Homeowners Get Wrong Is That Standard Fiber Cement Siding Isn't Approved on Front-Facing Rowhouse Elevations in Most of Them</h3>
                        <p>Washington, DC's rowhouse-dominated housing stock means historic preservation review touches an enormous share of the city — 54 designated historic districts cover roughly 27,000 buildings, and exterior work on any of them, including siding replacement, generally needs sign-off from the DC Historic Preservation Office (HPO) or the Historic Preservation Review Board (HPRB) before the Department of Buildings will issue a permit. The detail that catches homeowners off guard: based on documented HPO staff guidance, standard fiber-cement products like James Hardie have not been approved for a historic rowhouse's front-facing elevation, even though they're commonly accepted on rear and side walls not visible from the street. Georgetown adds a further wrinkle — its historic district isn't reviewed by DC's HPRB at all, but by the US Commission of Fine Arts' Old Georgetown Board, a distinct federal process. Skipping preservation review isn't a paperwork formality either: DC's 2024 Protecting Historic Homes Amendment Act allows fines up to $25,000 per violation for unpermitted historic-district work. DMV General Contracting Group checks a DC property's historic status, applicable district guidelines, and correct reviewing body before recommending a single material.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a trusted <strong>siding contractor in Washington, DC</strong>? DMV General Contracting Group installs and replaces exterior siding for DC homeowners citywide — James Hardie fiber cement, wood and wood-look siding, insulated vinyl, and LP SmartSide engineered wood — across rowhouse neighborhoods including Capitol Hill, Petworth, Cleveland Park, Kingman Park, and Georgetown. Every project includes old siding removal, sheathing inspection and repair, house wrap installation, Historic Preservation Office or full HPRB submission prep where required, Old Georgetown Board coordination for Georgetown properties, and DC Department of Buildings permit processing. DC-licensed, fully insured, 1-year workmanship warranty. Free in-home estimate. Call +1 240-730-1292.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">🏛️</div><strong>54-District Experts</strong><span>We check historic status and the correct review body before we file anything</span></div>
                    <div className="trust-item"><div className="icon">🏘️</div><strong>Front-Facade Compliance</strong><span>HPO-approved materials for street-facing rowhouse elevations</span></div>
                    <div className="trust-item"><div className="icon">🏗️</div><strong>Old Georgetown Board Specialists</strong><span>Federal CFA review handled separately from standard HPRB cases</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>Why DC Siding Projects Need Local Preservation Expertise</h2>

                <div className="roi-box">
                    <h3>🏛️ The DC Historic Preservation & Rowhouse Case — Explained Honestly</h3>
                    <ul>
                        <li><strong>Most of DC's older rowhouse fabric sits inside a historic district:</strong> With 54 historic districts covering roughly 27,000 buildings, neighborhoods like Capitol Hill, Georgetown, Dupont Circle, Cleveland Park, Kingman Park, and large sections of Petworth are subject to preservation review for exterior work. More than 95 percent of cases are cleared through the HPO's Expedited Review, with same-day approval possible for in-kind repairs — but a full siding replacement using a different material is more likely to need full HPRB review, which meets only twice a month.</li>
                        <li><strong>Front-facade material rules are stricter than most homeowners expect:</strong> Documented HPO staff guidance has held that fiber-cement products like James Hardie are not approved for a historic rowhouse's front-facing elevation, even as they're routinely accepted on rear and side walls. Some districts carve out their own exceptions — Kingman Park's design guidelines specifically permit new cementitious siding on frame houses and don't require strict wood-for-wood replacement, reflecting that district's own preservation priorities. Getting the material recommendation wrong on a front elevation means a rejected application and a redesign.</li>
                        <li><strong>Georgetown runs on an entirely separate review process:</strong> Georgetown is the one DC historic district where the city's own HPRB is not the primary authority. The US Commission of Fine Arts, through its Old Georgetown Board, reviews exterior work visible from public space — a federal process layered on top of, not instead of, the standard DC Department of Buildings permit. A Georgetown siding project filed as a standard HPRB case is filed with the wrong body entirely.</li>
                        <li><strong>The stakes for skipping review are real:</strong> The 2024 Protecting Historic Homes Amendment Act allows the city to fine unpermitted historic-district work up to $25,000 per violation. This isn't a rule DC treats as symbolic — proper sequencing of HPO or HPRB review before a Department of Buildings permit application matters on every historic rowhouse project.</li>
                    </ul>
                </div>

                <h2>Siding Services We Offer in Washington, DC</h2>
                <div className="check-grid">
                    <span className="check-item">Full Rowhouse Siding Replacement</span>
                    <span className="check-item">Front, Rear & Side Elevation Material Matching</span>
                    <span className="check-item">James Hardie Fiber Cement (HardiePlank)</span>
                    <span className="check-item">Wood & Wood-Look Historic Siding</span>
                    <span className="check-item">LP SmartSide Engineered Wood</span>
                    <span className="check-item">Insulated Vinyl Siding (Non-Historic Properties)</span>
                    <span className="check-item">HPO Expedited Review & Full HPRB Submission Prep</span>
                    <span className="check-item">Old Georgetown Board Submission Prep</span>
                    <span className="check-item">House Wrap & Weather Barrier</span>
                    <span className="check-item">Cornice, Trim & Window Casing Restoration</span>
                    <span className="check-item">Sheathing Inspection & Repair</span>
                    <span className="check-item">Party-Wall & Shared-Facade Detailing</span>
                    <span className="check-item">Storm Damage Siding Repair</span>
                    <span className="check-item">DC Department of Buildings Permit Processing</span>
                </div>

                <h2>Siding Types for DC's Historic Rowhouses</h2>

                <div className="material-grid">
                    <div className="material-card">
                        <div className="m-tag">Front Facade Approved</div>
                        <div className="m-icon">🏛️</div>
                        <h3>Wood & Wood-Look Historic Siding</h3>
                        <p>Our recommended material for street-facing elevations of a rowhouse inside a DC historic district. Traditional wood clapboard or shingle, or a wood-look substitute where HPO precedent allows one, is the default expectation for front facades under most district guidelines, since fiber cement has generally not been approved for this elevation. Profile, reveal, and paint color matched to the district's design guidelines and any existing HPO precedent.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 20–35 yrs</span>
                            <span><strong>DC Cost:</strong> $15,000 – $28,000+</span>
                        </div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Rear & Side Elevations</div>
                        <div className="m-icon">🏆</div>
                        <h3>James Hardie Fiber Cement — HardiePlank</h3>
                        <p>Our top recommendation for rear and side elevations not visible from the public right-of-way, and for any elevation on non-historic DC properties. HardiePlank's durability and 15–20 year factory finish make it the strongest long-term value where HPO restrictions on front-facing fiber cement don't apply. Kingman Park's own guidelines explicitly allow cementitious siding on frame houses, including street-facing walls in that district.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 30–50 yrs</span>
                            <span><strong>DC Cost:</strong> $12,000 – $24,000+</span>
                        </div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Non-Historic Properties</div>
                        <div className="m-icon">🌡️</div>
                        <h3>Insulated Vinyl Siding</h3>
                        <p>A strong value option for DC rowhouses outside the 54 historic districts, particularly on frame-construction homes with minimal original wall insulation. Insulated vinyl adds R-2 to R-4 of continuous foam insulation during the same replacement project. Not typically permitted on historic-district front facades, but a straightforward option elsewhere in the city.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 20–40 yrs</span>
                            <span><strong>DC Cost:</strong> $9,000 – $16,000+</span>
                        </div>
                    </div>
                    <div className="material-card">
                        <div className="m-tag">Wood Alternative</div>
                        <div className="m-icon">🪵</div>
                        <h3>LP SmartSide Engineered Wood</h3>
                        <p>A middle option for both rear/side elevations and, in some districts with flexible substitute-material guidelines, front facades — HPO staff evaluate engineered wood products case by case where true wood replication isn't feasible. LP SmartSide's grain texture suits DC's Victorian and Federal-style rowhouse stock. Paint intervals of 8–10 years.</p>
                        <div className="material-meta">
                            <span><strong>Lifespan:</strong> 25–35 yrs</span>
                            <span><strong>DC Cost:</strong> $13,000 – $25,000+</span>
                        </div>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Our Recommendation for DC:</strong> For a historic-district rowhouse's <strong>front facade</strong>, we lead with <strong>wood or an HPO-precedented wood-look material</strong> to keep the review straightforward. For <strong>rear and side elevations</strong> on the same property — and for any elevation on a non-historic DC home — <strong>James Hardie fiber cement</strong> delivers the strongest durability and value. In Kingman Park specifically, cementitious siding is an option on street-facing frame houses too.
                </div>

                <h2>Siding Material Comparison for Washington, DC Homes</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="compare-table">
                            <thead>
                                <tr><th>Material</th><th>Durability</th><th>Front-Facade Historic District</th><th>Rear/Side or Non-Historic</th><th>Cost</th></tr>
                            </thead>
                            <tbody>
                                <tr className="top-pick"><td>Wood / Wood-Look ⭐</td><td>Good — 20–35 yrs</td><td>Default expectation, HPO-precedented</td><td>Fine, though rarely necessary</td><td>$15K – $28K+</td></tr>
                                <tr><td>James Hardie Fiber Cement</td><td>Excellent — 30–50 yrs</td><td>Generally not approved (Kingman Park excepted)</td><td>Readily approved</td><td>$12K – $24K+</td></tr>
                                <tr><td>LP SmartSide</td><td>Good — 25–35 yrs</td><td>Case-by-case HPO review</td><td>Readily approved</td><td>$13K – $25K+</td></tr>
                                <tr><td>Insulated Vinyl</td><td>Good — 20–40 yrs</td><td>Not typically approved</td><td>Readily approved</td><td>$9K – $16K+</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Signs Your DC Home Needs New Siding</h2>

                <div className="signs-grid">
                    <div className="sign-card"><div className="s-icon">🔍</div><h3>Delaminating Wood Shingles</h3><p>Peeling, curling, or delaminating original wood shingle or clapboard siding on Capitol Hill and Cleveland Park's Victorian and early-20th-century rowhouses.</p></div>
                    <div className="sign-card"><div className="s-icon">🔧</div><h3>Deteriorated Non-Original Siding</h3><p>Swelling, crumbling, or rot on non-original aluminum, masonite, or vinyl added during a prior renovation — common on DC frame houses.</p></div>
                    <div className="sign-card"><div className="s-icon">🎨</div><h3>Severe Color Fade</h3><p>Washed-out, chalky color that cleaning or repainting cannot restore — the siding surface has degraded beyond cosmetic remedy.</p></div>
                    <div className="sign-card"><div className="s-icon">💧</div><h3>Interior Water Stains</h3><p>Water marks on interior walls near exterior surfaces — active infiltration at failed siding seams, often worse on party-wall rowhouses.</p></div>
                    <div className="sign-card"><div className="s-icon">🪵</div><h3>Rot at Cornices & Trim</h3><p>Soft or crumbling wood at cornices, window casings, and door surrounds — a frequent early sign of moisture behind aging DC rowhouse siding.</p></div>
                    <div className="sign-card"><div className="s-icon">🌡️</div><h3>Cold Exterior Walls in Winter</h3><p>Interior wall surfaces cold to the touch on frame-construction DC rowhouses with minimal original wall insulation.</p></div>
                </div>

                <h2>Navigating DC's Historic Preservation Review Process</h2>

                <div className="highlight">
                    <p>🏛️ <strong>The DC preservation reality:</strong> Before recommending a material, we confirm whether a DC property sits within one of the city's 54 historic districts, and if so, which review path applies. For straightforward in-kind repairs, the HPO's Expedited Review can clear a Department of Buildings permit application same-day. For a fuller siding replacement changing material or profile, the case may need full Historic Preservation Review Board review, which meets twice monthly — so we build that timeline into the project schedule from the start. In Georgetown, we prepare a submission for the US Commission of Fine Arts' Old Georgetown Board instead of a standard HPRB case, since that district's review authority is federal rather than local. Once preservation approval is secured, we file the DC Department of Buildings permit with the approved plans attached.</p>
                </div>

                <h2>Our Siding Installation Process in Washington, DC</h2>

                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free In-Home Estimate — Historic Status & Elevation Review Included</h3>
                            <p>We visit your DC rowhouse and assess the full exterior — siding condition and material on each elevation, age and failure mode, sheathing condition, and insulation opportunity. We confirm whether the property sits within a historic district, which review body applies, and which elevations face front-facade material restrictions. Material samples and district-specific precedent presented at this appointment. No charge, no obligation.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Material Selection — Matched by Elevation and District</h3>
                            <p>We recommend wood or wood-look material for street-facing elevations on historic-district properties, and James Hardie, LP SmartSide, or insulated vinyl for rear and side elevations or non-historic homes. Options presented with an honest comparison of cost, durability, and the realistic preservation-review path for each.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>HPO, HPRB, or Old Georgetown Board Submission</h3>
                            <p>Where required, we file through the HPO's Expedited Review for in-kind or precedented work, or prepare a full HPRB submission with elevation drawings and material specifications for larger changes. For Georgetown properties, we prepare the corresponding Old Georgetown Board submission instead. Once preservation approval is secured, we file the separate DC Department of Buildings building permit.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Old Siding Removal & Sheathing Inspection</h3>
                            <p>Existing wood, aluminum, masonite, or vinyl siding removed carefully, with attention to shared party walls common on DC rowhouses. Sheathing condition assessed after removal, with damaged sections replaced before house wrap is installed. Lead-safe disposal practices used on DC's older pre-1978 homes.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>House Wrap, Siding & Trim Installation</h3>
                            <p>Continuous weather-resistant barrier installed across all elevations, individually flashed at every window, door, and penetration. New siding installed to the reveal and profile specified in the approved preservation plans where applicable, with cornices, window casings, and trim restored or matched to the home's architectural period.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Final Inspection, Caulking & Exterior Walkthrough</h3>
                            <p>Every seam, transition, and penetration inspected. All exterior joints caulked with flexible, paintable exterior-grade sealant. Full debris removal, coordinated with DC's rowhouse alley access where applicable. Exterior walkthrough with you before project close. Written warranty. Preservation conditions of approval and permit sign-off closed out where applicable.</p>
                        </div>
                    </div>
                </div>

                <h2>Siding Replacement Cost in Washington, DC</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr><th>Siding Material</th><th>Typical Cost — DC Rowhouse</th><th>Per Sq Ft (Installed)</th><th>Notes</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Insulated Vinyl</td><td>$9,000 – $16,000+</td><td>$6 – $10 / sq ft</td><td>Non-historic properties only</td></tr>
                                <tr><td>James Hardie Fiber Cement</td><td>$12,000 – $24,000+</td><td>$8 – $14 / sq ft</td><td>Rear/side elevations; front facade restricted in most districts</td></tr>
                                <tr><td>LP SmartSide</td><td>$13,000 – $25,000+</td><td>$8 – $13 / sq ft</td><td>Case-by-case for historic front facades</td></tr>
                                <tr><td>Wood / Wood-Look Historic Siding</td><td>$15,000 – $28,000+</td><td>$10 – $18 / sq ft</td><td>Front-facade default in historic districts</td></tr>
                                <tr><td>Sheathing Repair (if needed)</td><td>$2,000 – $7,000+</td><td>Depends on damage extent</td><td>Required for durable installation</td></tr>
                                <tr><td>HPO / HPRB / Old Georgetown Board Prep</td><td>Included at no added fee</td><td>—</td><td>Elevation drawings, material specs & filing handled in-house</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>DC preservation review math:</strong> An HPO Expedited Review clearance can happen same-day for straightforward in-kind repairs, but a front-facade material change routed to full HPRB review only meets twice a month — missing a submission deadline can mean a 2–4 week wait for the next hearing. Presenting a front-facade material with existing HPO or district precedent, rather than a novel substitute, meaningfully improves the odds of Expedited Review clearance instead of a full board hearing. We build the realistic review timeline into every DC historic-district estimate at no added cost.
                </div>

                <h2>What Washington, DC Homeowners Say About DMV General Contracting Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our Capitol Hill rowhouse's front facade had deteriorated original wood siding. DMV General Contracting Group was upfront that James Hardie wasn't going to get approved on the street-facing wall, and steered us to a wood-look material with real precedent in our district instead. HPO cleared it through Expedited Review — no full board hearing needed."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Capitol Hill, Washington DC</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We're in Georgetown and had no idea the review process was totally different from the rest of the city until DMV General Contracting Group explained the Old Georgetown Board and the Commission of Fine Arts process. They prepared that submission specifically instead of treating it like a standard HPRB case, which saved us from a filing that would have gone to the wrong body."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Georgetown, Washington DC</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our Kingman Park frame house needed full siding replacement, and DMV General Contracting Group knew our district's guidelines specifically allow cementitious siding on frame houses — no wood-for-wood requirement. We got James Hardie on the front facade, which I understand isn't typical in most DC historic districts."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Kingman Park, Washington DC</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our Petworth rowhouse isn't in a historic district, so DMV General Contracting Group confirmed that upfront and we moved straight to James Hardie across every elevation without any preservation review at all. Simple, fast permit, ten days start to finish."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Petworth, Washington DC</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> DC homeowners trust DMV General Contracting Group to correctly identify historic district status, navigate HPO Expedited Review, full HPRB review, or Old Georgetown Board review as the case requires, and recommend front-facade materials with real preservation-review precedent behind them.</p>
                </div>

                <div className="cta-banner">
                    <h2>Get a Free Siding Estimate for Your DC Home</h2>
                    <p>Our team will visit your DC home, confirm historic district status and the correct review path, assess your existing siding by elevation, and provide a detailed estimate — at no cost, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Siding Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All Washington, DC Neighborhoods for Siding Installation</h2>
                <div className="areas-grid">
                    <span className="area-pill">Capitol Hill</span>
                    <span className="area-pill">Georgetown</span>
                    <span className="area-pill">Dupont Circle</span>
                    <span className="area-pill">Cleveland Park</span>
                    <span className="area-pill">Kingman Park</span>
                    <span className="area-pill">Petworth</span>
                    <span className="area-pill">LeDroit Park</span>
                    <span className="area-pill">Chevy Chase DC</span>
                    <span className="area-pill">Anacostia Historic District</span>
                </div>

                <h2>Frequently Asked Questions — Siding Installation in Washington, DC</h2>
                <Accordion className="faq-list" defaultActiveKey="0">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="internal-links">
                    <h2>Explore Our Other Services in Washington, DC</h2>
                    <ul>
                        <li><Link href="/service/kitchen-remodeling/washington-dc">Kitchen Remodeling in Washington, DC</Link></li>
                        <li><Link href="/service/bathroom-remodeling/washington-dc">Bathroom Remodeling in Washington, DC</Link></li>
                        <li><Link href="/service/basement-remodeling/washington-dc">Basement Remodeling in Washington, DC</Link></li>
                        <li><Link href="/service/adu/washington-dc">ADU Construction in Washington, DC</Link></li>
                        <li><Link href="/service/decks/washington-dc">Deck Building in Washington, DC</Link></li>
                        <li><Link href="/service/flooring-remodeling/washington-dc">Flooring Installation in Washington, DC</Link></li>
                        <li><Link href="/service/design-build/washington-dc">Design-Build Contractor in Washington, DC</Link></li>
                        <li><Link href="/service/roofing">Roofing in Washington, DC</Link></li>
                    </ul>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Get Started on Your DC Siding Project?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free estimate. We confirm historic district status and the correct review path, match materials by elevation, and coordinate HPRB or Old Georgetown Board review where required. DC licensed. 1-year warranty.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Siding Estimate in Washington, DC →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default WashingtonDC;
