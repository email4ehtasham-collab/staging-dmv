'use client';

import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "./style.scss";
import "../design-build-city-style.scss";

const PotomacMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "How does a design-build approach benefit high-value Potomac homes?",
            answer: "Potomac's luxury market demands precision execution — a $300,000+ addition or whole-home renovation on a $2M–$4M property leaves no margin for error. Design-build eliminates the coordination gap between architect and GC that causes budget overruns and schedule delays in high-value projects. DMV-GC Group's in-house architects and engineers design within your renovation budget from day one, and our construction team prices design in real time — so the budget you approve is the budget you build to. MoCo DPS permit filings are handled entirely in-house, and structural modifications are engineered in-house with no outsourced structural engineer creating coordination friction."
        },
        {
            question: "How does DMV-GC Group handle MoCo DPS permits for Potomac projects?",
            answer: "Potomac is unincorporated Montgomery County — all building permits go through MoCo DPS at 2425 Reedie Drive, Wheaton. DMV-GC Group's in-house permit team handles all MoCo DPS filings, structural plan reviews, zoning submissions, and inspection scheduling for every Potomac project. We file complete packages that do not require supplemental submissions. Potomac homeowners never contact MoCo DPS during their project."
        },
        {
            question: "Can Potomac estate properties support additions and ADU construction?",
            answer: "Potomac's large lot sizes (often 0.5–2+ acres) in MoCo's R-200 and R-90 zoning districts provide substantial addition and ADU potential within the setback, lot coverage, and height limits that our architects assess for each specific parcel. Many Potomac properties have detached garages, guest houses, or outbuildings that are ideal candidates for ADU conversion. Our architects design additions and ADUs that complement the existing estate architecture, and our structural engineers ensure additions are seamlessly integrated into the original construction."
        },
        {
            question: "Is DMV-GC Group licensed for design-build work in Potomac, MD?",
            answer: "Yes. DMV General Contracting Group holds Maryland MHIC license #156178 — required for all home improvement and construction work in Potomac, which is unincorporated Montgomery County. Fully bonded, comprehensive general liability and workers' compensation coverage, and a 1-year workmanship warranty on every Potomac design-build project."
        }
    ];

    return (
        <div className="design-build-city-detail-page design-build-potomac-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/design-build">Design-Build</Link><span>›</span>
                    Potomac, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Potomac, MD</div>
                    <h1>Design-Build Contractor in Potomac, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏛️ In-House Architects & Engineers</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ MoCo DPS — 2425 Reedie Drive</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">📈</div>
                    <div>
                        <h3>Potomac's Estate Properties Are Among the Highest-Value Renovation Projects in Montgomery County — And Design-Build Is the Execution Model That Protects the Budget Accuracy and Craftsmanship Standards These Projects Require</h3>
                        <p>Potomac is Montgomery County's premier residential community — large estate lots, mature landscaping, established neighborhoods bordering the Potomac River and Great Falls Park. Potomac properties are among the highest-value residential real estate in the Washington DC metro area, and renovations on these properties — whether additions, whole-home transformations, or luxury kitchen and bathroom remodels — require a level of design precision, structural engineering, and construction quality that cannot be compromised by coordination failures between separate architects and general contractors. DMV General Contracting Group brings licensed architects, structural engineers, permit specialists, and all licensed trades in-house to Potomac renovation projects — handling everything from concept design through final inspection under one contract, one team, and one point of accountability. MoCo DPS at 2425 Reedie Drive is the permit jurisdiction for all Potomac projects — our permit team files complete packages there regularly, ensuring Potomac renovations proceed without permit-related delays that can be particularly costly on high-value projects.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a trusted <strong>design-build contractor in Potomac, MD</strong>? DMV General Contracting Group brings licensed architects, structural engineers, permit specialists, and all licensed trades in-house to Potomac renovation projects — handling everything from concept drawings through final inspection under one contract. Rear additions that seamlessly extend Potomac estate properties. ADU construction that adds guest quarters, in-law suites, or rental units on Potomac's large estate lots. Whole-home renovations that modernize Potomac interiors while preserving architectural character. Luxury kitchen and bathroom remodels that match Potomac's market expectations. One firm. One contract. Full accountability — at the construction standards Potomac demands.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">📐</div><strong>In-House Architects</strong><span>Designs, renderings & permit drawings — no outside firm</span></div>
                    <div className="trust-item"><div className="icon">🧱</div><strong>Structural Engineers</strong><span>Load-bearing wall assessment, addition engineering — all in-house</span></div>
                    <div className="trust-item"><div className="icon">📋</div><strong>MoCo DPS Permit Ready</strong><span>2425 Reedie Drive — our regular permit office</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>Why Design-Build Is the Right Model for Potomac Renovations</h2>

                <div className="roi-box">
                    <h3>📈 The Design-Build Value Proposition for Potomac Estates</h3>
                    <ul>
                        <li><strong>Budget accuracy for high-value projects:</strong> Potomac renovations routinely exceed $200,000–$500,000+ — on properties valued at $2M–$4M+. At these price points, a 15–20% budget overrun ($30,000–$100,000+) is not just an inconvenience — it undermines the financial rationale for the project. Design-build eliminates the bid-shock scenario where an architect designs to a $350,000 construction budget, the GC bids $420,000, and the homeowner funds a redesign. DMV-GC Group prices construction as design develops, so the budget you approve is the budget you build to.</li>
                        <li><strong>Structural integrity on estate properties:</strong> Potomac's estate homes — often custom-built in the 1970s–1990s with unique structural configurations — require structural engineering that is tightly integrated with architectural design. Our in-house structural engineers collaborate directly with our architects from concept through construction, ensuring additions and structural modifications are engineered to match the original construction quality and specifications.</li>
                        <li><strong>Seamless architectural integration:</strong> Potomac buyers and appraisers expect additions and renovations to match the original estate architecture — same materials, same proportions, same finish quality. Our architects design additions that are visually indistinguishable from the original construction, and our material specialists source matching materials for Potomac's distinctive estate facades.</li>
                        <li><strong>Single-point accountability:</strong> On a $350,000 Potomac renovation, a blame gap between architect and GC — each pointing fingers when the project runs over budget or behind schedule — is not acceptable. Design-build places full responsibility on one firm. If there is a problem, there is one phone call, one solution, one accountable party.</li>
                    </ul>
                </div>

                <h2>What Is Design-Build — And Why It Matters for Potomac Homeowners</h2>
                <p>The design-build method places architectural design and construction under one contract and one firm. For Potomac homeowners whose renovation expectations are high and whose budget accuracy is critical, this matters directly:</p>

                <table className="compare-table">
                    <tr><th>Factor</th><th>Design-Build (DMV-GC Group)</th><th>Traditional (Separate Architect + GC)</th></tr>
                    <tr><td><strong>Budget accuracy</strong></td><td>Construction team prices design in real time — no bid shock</td><td>Architect designs, GC bids higher — redesign costs time and money</td></tr>
                    <tr><td><strong>Structural assessment</strong></td><td>Engineer walks home before design — no mid-demo surprises</td><td>GC discovers structural issue mid-demolition — change order</td></tr>
                    <tr><td><strong>Architectural integration</strong></td><td>Architect and builder collaborate from concept — seamless match</td><td>Architect designs without builder input — integration gaps</td></tr>
                    <tr><td><strong>Permit filing</strong></td><td>In-house team files complete MoCo DPS package first try</td><td>Incomplete package requires resubmission — weeks of delay</td></tr>
                    <tr><td><strong>Accountability</strong></td><td>One firm responsible — no blame gap</td><td>Architect and GC blame each other for overruns and delays</td></tr>
                </table>

                <h2>Our In-House Design-Build Team for Potomac Projects</h2>

                <div className="team-grid">
                    <div className="team-card"><div className="t-icon">📐</div><strong>Architects</strong><span>Floor plans, elevations, 3D renderings, permit-ready construction drawings — designed to Potomac estate architectural standards</span></div>
                    <div className="team-card"><div className="t-icon">🧱</div><strong>Structural Engineers</strong><span>Addition structural design, load-bearing wall modification, foundation engineering for Potomac's custom construction</span></div>
                    <div className="team-card"><div className="t-icon">📋</div><strong>Permit Specialists</strong><span>MoCo DPS at 2425 Reedie Drive — filings managed entirely in-house</span></div>
                    <div className="team-card"><div className="t-icon">⚡</div><strong>Licensed Electricians</strong><span>Panel upgrades, whole-house wiring, smart home integration, landscape lighting</span></div>
                    <div className="team-card"><div className="t-icon">🔧</div><strong>Licensed Plumbers</strong><span>Drain & supply rough-in, fixture installation, gas lines, luxury bathroom plumbing</span></div>
                    <div className="team-card"><div className="t-icon">🌡️</div><strong>HVAC Technicians</strong><span>System extensions, zone additions, luxury HVAC configurations</span></div>
                </div>

                <h2>Design-Build Services We Offer in Potomac, MD</h2>

                <div className="service-grid">
                    <div className="service-card">
                        <div className="s-icon">🏠</div>
                        <h3>Luxury Home Additions</h3>
                        <p>Rear additions, wing additions, and upper-level additions for Potomac's estate properties — designed in-house to match existing architecture and built by our licensed crews. Potomac's large lot sizes in MoCo's R-200 and R-90 zoning districts provide substantial addition potential. Our architects ensure additions are seamlessly integrated with the original estate design.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">📐</div>
                        <h3>Open-Concept Conversion</h3>
                        <p>Load-bearing wall removal and open floor plan creation for Potomac homes with compartmentalized layouts. Our structural engineers assess every wall before any design is finalized — engineering solutions that preserve structural integrity while creating the open, flowing spaces that modern luxury living demands.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏗️</div>
                        <h3>ADU / Guest House Construction</h3>
                        <p>Detached ADUs, guest house conversions, and lower-level ADU conversions for Potomac's large estate lots. Potomac properties are ideal for ADU construction — large lots, existing outbuildings, and proximity to Great Falls and Potomac River amenities that drive rental and guest suite demand.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🍳</div>
                        <h3>Luxury Kitchen Remodeling</h3>
                        <p>Full design-build kitchen renovations for Potomac's estate homes — custom cabinetry, luxury stone countertops, professional-grade appliances, and all trades coordinated in-house. Our architects redesign kitchen layouts to match Potomac's market expectations for luxury entertaining and everyday living.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🛁</div>
                        <h3>Luxury Bathroom Renovation</h3>
                        <p>Primary suite bathrooms, spa bathrooms, and guest bath renovations designed and built in-house. Potomac's luxury market demands spa-quality bathroom finishes — heated floors, rain showers, soaking tubs, and custom tile work — all engineered and executed to the standards Potomac buyers expect.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🪜</div>
                        <h3>Basement Finishing</h3>
                        <p>Complete basement design and finishing for Potomac estates — home theaters, wine cellars, recreation rooms, in-law suites, and gym spaces. Egress compliance, waterproofing, electrical, HVAC, and all finishes under MoCo DPS permit.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏡</div>
                        <h3>Whole-Home Renovation</h3>
                        <p>Complete interior transformations of Potomac's estate properties — coordinating architectural redesign, structural work, all trades, and all luxury finishes under one contract. For Potomac homeowners who purchased an estate property in original or dated condition, the design-build approach delivers a comprehensive transformation without the coordination failures that plague separate architect-and-GC arrangements on high-value projects.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏗️</div>
                        <h3>Structural Modifications</h3>
                        <p>Stair relocation, ceiling height changes, floor plate modifications, and other structural alterations — all handled in-house. For Potomac's custom estate homes with unique structural configurations, in-house engineering eliminates the coordination friction between outsourced structural engineers and the construction team.</p>
                    </div>
                </div>

                <h2>Design-Build Process in Potomac</h2>

                <div className="steps">
                    <div className="step"><div className="step-num">1</div><div className="step-content"><h3>Free Consultation — Estate Assessment & Scope Discussion</h3><p>We visit your Potomac property with our architect and project manager. We walk the home, assess structural conditions, discuss your renovation vision, and for addition or ADU projects, confirm MoCo setback, lot coverage, and height limits on your specific parcel. No cost, no obligation.</p></div></div>
                    <div className="step"><div className="step-num">2</div><div className="step-content"><h3>Concept Design — Luxury Standards and Budget Precision</h3><p>Our architects develop concept options that meet Potomac's luxury market expectations, with our construction team pricing each option in real time. For Potomac projects where architectural quality and finish standards are paramount, we present options with detailed material specifications and expected property value impact.</p></div></div>
                    <div className="step"><div className="step-num">3</div><div className="step-content"><h3>Design Development & Material Selection</h3><p>We refine the approved concept into detailed drawings, 3D renderings, and luxury material selections. Our material specialists source products that match Potomac's estate architectural standards — natural stone, custom millwork, professional appliances, and designer fixtures.</p></div></div>
                    <div className="step"><div className="step-num">4</div><div className="step-content"><h3>MoCo DPS Permit Filing</h3><p>Our permit specialists file all required MoCo DPS permits at 2425 Reedie Drive. For Potomac estate properties with complex structural modifications, our in-house structural engineers produce permit-ready drawings that address MoCo's structural review requirements on the first submission.</p></div></div>
                    <div className="step"><div className="step-num">5</div><div className="step-content"><h3>Construction — Luxury Standards, All Trades In-House</h3><p>Our licensed crews begin construction — demolition, structural framing, electrical, plumbing, HVAC, drywall, tile, cabinetry, flooring, and all luxury finishes. One project manager coordinates all trades on a single schedule. Weekly updates to you throughout the project.</p></div></div>
                    <div className="step"><div className="step-num">6</div><div className="step-content"><h3>MoCo Inspections, Punch List & Permit Close</h3><p>All required MoCo inspections scheduled and managed. Detailed punch list review with you upon completion. Permit closed with MoCo DPS. Written warranty documentation.</p></div></div>
                </div>

                <h2>Design-Build Project Costs in Potomac, MD</h2>

                <table className="cost-table">
                    <tr><th>Project Type</th><th>Typical Design-Build Cost</th><th>Typical Value Added</th></tr>
                    <tr><td>Open-Concept Conversion</td><td>$20,000 – $55,000+</td><td>$30,000 – $65,000</td></tr>
                    <tr><td>Luxury Kitchen Remodel</td><td>$45,000 – $150,000+</td><td>$50,000 – $120,000</td></tr>
                    <tr><td>Luxury Bathroom Renovation</td><td>$25,000 – $80,000+</td><td>$25,000 – $60,000</td></tr>
                    <tr><td>Basement Finishing</td><td>$40,000 – $120,000+</td><td>$50,000 – $100,000</td></tr>
                    <tr><td>Estate Addition</td><td>$120,000 – $400,000+</td><td>$180,000 – $350,000</td></tr>
                    <tr><td>ADU / Guest House</td><td>$80,000 – $250,000+</td><td>$2,000–$3,500/month rental</td></tr>
                    <tr><td>Whole-Home Renovation</td><td>$180,000 – $500,000+</td><td>Significant equity capture</td></tr>
                </table>

                <h2>What Potomac Homeowners Say About DMV-GC Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We added a 1,200 sq ft wing to our Potomac estate — primary suite, office, and screened porch. DMV-GC Group's architect designed the addition to match the existing estate architecture seamlessly. The structural engineering was done in-house, the MoCo permit was approved without supplemental submissions, and the addition was completed in 16 weeks. The appraiser valued the addition at $340,000 above our construction cost."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Potomac, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We renovated our entire Potomac home — kitchen, all three bathrooms, basement finish, and structural modifications to open the main floor. DMV-GC Group managed everything under one contract. Their architect designed the open-concept layout, their structural engineer confirmed every wall, and their licensed crews executed to luxury standards. One project manager, one contract, one accountable firm."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Potomac, MD</span></div>
                    </div>
                </div>

                <div className="cta-banner">
                    <h2>Start Your Design-Build Project in Potomac</h2>
                    <p>Our architect and project manager will visit your Potomac property, assess the renovation and addition potential, confirm MoCo zoning parameters, and discuss the design and budget for each project scope — at no cost, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Design Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All Potomac, MD Neighborhoods for Design-Build</h2>
                <div className="areas-grid">
                    <span className="area-pill">Potomac Village</span>
                    <span className="area-pill">Potomac Falls</span>
                    <span className="area-pill">Hutchison</span>
                    <span className="area-pill">River Road Corridor</span>
                    <span className="area-pill">Great Falls</span>
                    <span className="area-pill">Whitfield</span>
                    <span className="area-pill">Potomac Horse Center</span>
                    <span className="area-pill">Cabin John</span>
                </div>

                <div className="nearby-box">
                    <h3>Also serving Bethesda, MD — directly east of Potomac along the River Road corridor</h3>
                    <p>Bethesda's luxury homes share Potomac's high-value renovation requirements. DMV-GC Group brings the same design-build execution capability to Bethesda estate properties. <Link href="/service/design-build/bethesda-md">View our Bethesda design-build page →</Link></p>
                </div>

                <h2>Frequently Asked Questions — Design-Build in Potomac, MD</h2>
                <Accordion className="faq-list" defaultActiveKey="0">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="cta-banner">
                    <h2>Ready to Build Your Potomac Vision?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free design consultation. We design to Potomac's luxury standards, price accurately from concept, and build with the craftsmanship these estate properties demand.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Design-Build Consultation in Potomac →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default PotomacMD;