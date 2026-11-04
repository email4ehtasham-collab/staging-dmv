import Link from "next/link";
import NavitemActive from "@/components/Common/NavitemActive";

import "../city-service-style.scss";
import "./style.scss";

const LaurelMD = () => {

    const faqData = [
        {
            question: "How much does a home addition cost in Laurel, MD?",
            answer: "A bump-out runs $40,000–$120,000. A single room addition runs $120,000–$220,000. A master suite addition runs $150,000–$300,000+. A second-story addition runs $200,000–$420,000+. All costs include in-house architectural design, structural engineering, permits, and complete construction through final finishes. Free detailed estimates at the in-home consultation."
        },
        {
            question: "Do I need a permit for a home addition in Laurel, MD?",
            answer: "Yes — all home additions require building permits, zoning approval, architectural drawings, and trade permits for electrical, plumbing, and HVAC. DMV General Contracting Group handles the entire permit approval process from submission to final inspection. You do not need to contact any permit office or manage any paperwork."
        },
        {
            question: "How long does a home addition take in Laurel, MD?",
            answer: "A bump-out takes 2–4 months. A single room addition takes 4–7 months. A master suite addition takes 5–8 months. A second-story addition takes 6–11 months. All timelines include design, permit processing, and construction — managed in-house to minimize delays."
        },
        {
            question: "Is DMV General Contracting Group licensed for home additions in Laurel, MD?",
            answer: "Yes. DMV General Contracting Group holds Maryland MHIC license #156178. Fully bonded, comprehensive general liability and workers' compensation insurance, and 1-year workmanship warranty on every addition project in Laurel, MD."
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
                    Laurel, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Laurel, MD</div>
                    <h1>Home Additions in Laurel, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏘️ City · MoCo · PG County Addition Specialists</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed &amp; Insured</span>
                        <span className="badge">✓ In-House Architects &amp; Engineers</span>
                        <span className="badge">✓ 3-Jurisdiction Permit Expertise</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="intro-box">
                    Need more space in your Laurel, MD home? DMV General Contracting Group is a fully licensed, design-build home addition contractor serving Laurel, MD. We design and build all types of residential additions — room additions, second-story additions, master suite additions, bump-outs, family room expansions, and sunrooms — entirely in-house. Our team of architects, structural engineers, permit specialists, and licensed construction crews handles every stage of your project under one contract, from concept drawings to final inspection. Three-Jurisdiction Permit Expertise makes DMV General Contracting Group the right choice for every Laurel, MD addition project. Free in-home consultation. Call +1 240-730-1292.
                </div>

                <div className="banner">
                    <div className="icon">🏘️</div>
                    <div>
                        <h3>Three-Jurisdiction Permit Expertise — Why It Matters for Your Laurel, MD Addition</h3>
                        <p>Laurel straddles three permit jurisdictions — the City of Laurel (permit office: 8103 Sandy Spring Road), Montgomery County (MoCo DPS at 2425 Reedie Drive for West Laurel and Montpelier), and Prince George&apos;s County (PG County DPS for Laurel Lakes and Russett). Filing a Laurel addition permit with the wrong office produces rejection. DMV General Contracting Group confirms Laurel permit jurisdiction by parcel at the free consultation — the correct permit office is confirmed before any design work begins. We serve all three Laurel jurisdictions with the same in-house permit team and architectural and structural engineering capability.</p>
                    </div>
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">📐</div><strong>In-House Architects</strong><span>Full architectural design &amp; 3D renderings — no outside architect needed</span></div>
                    <div className="trust-item"><div className="icon">🧱</div><strong>Structural Engineers On Staff</strong><span>Load calculations, foundation review — all in-house</span></div>
                    <div className="trust-item"><div className="icon">📋</div><strong>3-Jurisdiction Permit Expertise</strong><span>City of Laurel 8103 Sandy Spring Rd + MoCo DPS + PG County DPS — all three served</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>Permit Authority for Home Additions in Laurel, MD</h2>
                <div className="permit-box">
                    <h3>📋 3-Jurisdiction Permit Expertise</h3>
                    <p>City of Laurel at 8103 Sandy Spring Road (City core). MoCo DPS at 2425 Reedie Drive (West Laurel, Montpelier). PG County DPS (Laurel Lakes, Russett). Jurisdiction confirmed by parcel at every Laurel consultation.</p>
                </div>

                <h2>Home Addition Types We Build in Laurel, MD</h2>
                <div className="addition-grid">
                    <div className="addition-card"><div className="a-tag">Most Common</div><h3>Single Room Addition</h3><p>A new room built onto the side or rear of your existing home — bedroom, family room, or home office — fully integrated with the existing structure, roofline, and interior layout. Foundation, framing, roofing, electrical, HVAC, and all finishes included.</p><div className="addition-meta"><span><strong>Cost:</strong> $120,000 – $220,000</span><span><strong>Timeline:</strong> 4–7 months</span></div></div>
                    <div className="addition-card"><div className="a-tag">Most Value</div><h3>Second-Story Addition</h3><p>Add a complete or partial second floor above your existing home — maximizing square footage without expanding the footprint. Full structural engineering required. Adds the most square footage per dollar of lot used.</p><div className="addition-meta"><span><strong>Cost:</strong> $200,000 – $420,000+</span><span><strong>Timeline:</strong> 6–11 months</span></div></div>
                    <div className="addition-card"><div className="a-tag">Most Popular</div><h3>Master Suite Addition</h3><p>A dedicated primary bedroom and bathroom addition — one of the most popular additions in Laurel, MD. Includes spacious bedroom, walk-in closet, and luxury bathroom. Significant resale value addition.</p><div className="addition-meta"><span><strong>Cost:</strong> $150,000 – $300,000+</span><span><strong>Timeline:</strong> 5–8 months</span></div></div>
                    <div className="addition-card"><div className="a-tag">Lowest Cost</div><h3>Bump-Out Addition</h3><p>A targeted 2–12 foot extension of an existing room — expanding a kitchen, widening a master bath, or creating a breakfast nook. Faster and more affordable than a full room addition.</p><div className="addition-meta"><span><strong>Cost:</strong> $40,000 – $120,000</span><span><strong>Timeline:</strong> 2–4 months</span></div></div>
                    <div className="addition-card"><div className="a-tag">Family Favorite</div><h3>Family Room Addition</h3><p>Expand living space with a dedicated family room or great room off the rear of your home — often combined with kitchen expansion. Vaulted ceilings and large windows are the most popular design choices.</p><div className="addition-meta"><span><strong>Cost:</strong> $130,000 – $260,000</span><span><strong>Timeline:</strong> 4–7 months</span></div></div>
                    <div className="addition-card"><div className="a-tag">Year-Round</div><h3>Four-Season Sunroom</h3><p>A light-filled, fully conditioned addition with expansive windows for year-round use. Full HVAC connection, insulated walls, and heated floors. Perfect for rear yards with garden or wooded views.</p><div className="addition-meta"><span><strong>Cost:</strong> $80,000 – $160,000</span><span><strong>Timeline:</strong> 3–5 months</span></div></div>
                </div>

                <h2>Home Addition Cost in Laurel, MD</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead><tr><th>Addition Type</th><th>Typical Cost Range</th><th>Size</th><th>Timeline</th></tr></thead>
                            <tbody>
                                <tr><td>Bump-Out Addition</td><td>$40,000 – $120,000</td><td>50–300 sq ft</td><td>2–4 months</td></tr>
                                <tr><td>Sunroom / Four-Season Room</td><td>$80,000 – $160,000</td><td>150–400 sq ft</td><td>3–5 months</td></tr>
                                <tr><td>Single Room Addition</td><td>$120,000 – $220,000</td><td>200–600 sq ft</td><td>4–7 months</td></tr>
                                <tr><td>Family Room Addition</td><td>$130,000 – $260,000</td><td>300–700 sq ft</td><td>4–7 months</td></tr>
                                <tr><td>Master Suite Addition</td><td>$150,000 – $300,000+</td><td>400–800 sq ft</td><td>5–8 months</td></tr>
                                <tr><td>In-Law Suite Addition</td><td>$140,000 – $270,000</td><td>400–800 sq ft</td><td>5–8 months</td></tr>
                                <tr><td>Second-Story Addition</td><td>$200,000 – $420,000+</td><td>600–1,800+ sq ft</td><td>6–11 months</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Our Home Addition Process in Laurel, MD</h2>
                <div className="steps">
                    <div className="step"><div className="step-num">1</div><div className="step-content"><h3>Free In-Home Consultation &amp; Feasibility Review</h3><p>We visit your Laurel, MD home, confirm the correct permit jurisdiction, review zoning and setback requirements, assess the existing structure, and discuss which addition types are feasible — at no cost. Realistic budget range provided before any design work begins.</p></div></div>
                    <div className="step"><div className="step-num">2</div><div className="step-content"><h3>Architectural Design &amp; 3D Renderings</h3><p>In-house architects develop concept plans, floor layouts, and 3D renderings refined until they reflect your vision — reviewed by our construction team to ensure buildability within budget.</p></div></div>
                    <div className="step"><div className="step-num">3</div><div className="step-content"><h3>Structural Engineering &amp; Permit Submission</h3><p>In-house structural engineers perform load calculations and specify all structural elements. Complete permit package submitted to the correct Laurel, MD authority. All permit correspondence managed in-house.</p></div></div>
                    <div className="step"><div className="step-num">4</div><div className="step-content"><h3>Foundation, Framing &amp; Exterior Construction</h3><p>Site preparation, footings, foundation, and structural framing completed by our licensed crews. Exterior roofing, siding, and windows installed to match your home&apos;s existing exterior materials and profile.</p></div></div>
                    <div className="step"><div className="step-num">5</div><div className="step-content"><h3>Mechanical Rough-In &amp; Interior Finishes</h3><p>Licensed electricians, plumbers, and HVAC technicians extend all systems into the addition. Interior finishes installed — matching or upgrading your home&apos;s existing standard. All permit inspections managed in-house.</p></div></div>
                    <div className="step"><div className="step-num">6</div><div className="step-content"><h3>Final Inspections, Punch List &amp; Walkthrough</h3><p>All required final inspections scheduled and managed. Thorough punch list walkthrough before project close. Written warranty documentation provided.</p></div></div>
                </div>

                <h2>Frequently Asked Questions — Home Additions in Laurel, MD</h2>
                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <details className="faq-item" key={index} open={index === 0 ? true : undefined}>
                            <summary className="faq-q">{faq.question}</summary>
                            <div className="faq-a">{faq.answer}</div>
                        </details>
                    ))}
                </div>

                <div className="areas-grid">
                    <span className="area-pill">City of Laurel</span>
                    <span className="area-pill">West Laurel</span>
                    <span className="area-pill">Montpelier</span>
                    <span className="area-pill">Laurel Lakes</span>
                    <span className="area-pill">Russett</span>
                    <span className="area-pill">Old Town Laurel</span>
                    <span className="area-pill">Maryland City</span>
                    <span className="area-pill">Bond Mill</span>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Add On to Your Laurel, MD Home?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free consultation. Our architects and permit specialists will review your property and tell you exactly what&apos;s possible — 7 days a week.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Addition Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>

                <div className="internal-links">
                    <h2>Explore Our Other Services in Laurel, MD</h2>
                    <ul>
                        <li><Link href="/service/design-build/laurel-md">Design-Build Contractor in Laurel, MD</Link></li>
                        <li><Link href="/service/adu/laurel-md">ADU Construction in Laurel, MD</Link></li>
                        <li><Link href="/service/kitchen-remodeling/laurel-md">Kitchen Remodeling in Laurel, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/laurel-md">Basement Remodeling in Laurel, MD</Link></li>
                        <li><Link href="/service/siding-installation/laurel-md">Siding Installation in Laurel, MD</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LaurelMD;
