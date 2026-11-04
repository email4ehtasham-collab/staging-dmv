'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const CabinJohnMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "How much does concrete services cost in Cabin John, MD?",
            answer: "Pricing depends on surface area, scope of work (driveways vs. decorative patios), concrete finish, terrain, existing concrete removal, and permitting requirements. DMV-GC Group provides a free on-site estimate with project-specific, itemized pricing."
        },
        {
            question: "Do I need a permit to install concrete in Cabin John, MD?",
            answer: "Most new residential concrete projects require a permit through the Montgomery County Department of Permitting Services. DMV-GC Group handles the entire process — from project assessment and permit application to managing inspections — ensuring all work complies with Montgomery County codes."
        },
        {
            question: "What is the best concrete finish for a Cabin John home?",
            answer: "The best finish depends on the application. Broom finish is durable and slip-resistant for driveways; stamped and exposed aggregate provide high-end, decorative looks for patios; and smooth finishes are ideal for garages. We help Cabin John homeowners select the right finish for both aesthetics and functionality."
        },
        {
            question: "Does DMV-GC Group install pool safety concrete surrounds?",
            answer: "Yes. DMV-GC Group installs pool decks and concrete surrounds designed to meet all applicable safety standards, including appropriate texture for slip resistance, correct drainage, and gate hardware compliance. We manage all required permits and inspections."
        },
        {
            question: "Does DMV-GC Group work with HOA requirements in Cabin John?",
            answer: "Yes. Some Cabin John properties may have neighborhood or HOA requirements that affect exterior improvements, materials, colors or placement. We can provide project specifications and other documentation to support an HOA review when applicable."
        }
    ];

    return (
        <>
            <div className="city-service-detail-page concrete-cabin-john-md">
                <div className="container">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <Link href="/">Home</Link><span>›</span>
                        <Link href="/services">Services</Link><span>›</span>
                        <Link href="/service/concrete">Concrete Services</Link><span>›</span>
                        Cabin John, MD
                    </nav>

                    <div className="hero">
                        <div className="hero-location-tag">📍 Concrete Contractor · Cabin John, MD</div>
                        <h1>Concrete Services in Cabin John, MD</h1>
                        <div className="hero-meta">
                            <span className="badge key">🏠 Residential Concrete Specialists</span>
                            <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                            <span className="badge">✓ MHIC Licensed & Insured</span>
                            <span className="badge">✓ 1-Year Warranty</span>
                            <span className="badge">✓ Free On-Site Estimate</span>
                        </div>
                    </div>

                    <div className="banner">
                        <div className="icon">🏗️</div>
                        <div>
                            <h3>Cabin John Concrete Experts</h3>
                            <p>Driveways, patios, walkways, retaining walls, steps, slabs and decorative concrete — professionally planned and installed for Maryland conditions.</p>
                        </div>
                    </div>

                    <div className="intro-box">
                        For Cabin John, MD homeowners, well-planned concrete work can improve access, outdoor living space and curb appeal. DMV General Contracting Group handles new pours, replacements and repairs with attention to grading, drainage, surface finish and long-term durability.
                    </div>

                    <h2>Concrete Services We Offer in Cabin John, MD</h2>
                    <p>We install and restore hardscape surfaces for everyday use, including driveway approaches, patios, pedestrian paths, stoops, slabs and other exterior concrete features.</p>
                    <div className="service-grid">
                        <div className="service-card"><h3>Concrete Driveways</h3><p>New driveway installation, replacement, reinforcement, control joints and decorative finishes.</p></div>
                        <div className="service-card"><h3>Concrete Patios</h3><p>Durable outdoor living surfaces in broom, salt, exposed aggregate, colored and stamped finishes.</p></div>
                        <div className="service-card"><h3>Walkways & Sidewalks</h3><p>Front walks, side paths, entry approaches and replacement of cracked or settled concrete.</p></div>
                        <div className="service-card"><h3>Concrete Steps & Stoops</h3><p>Formed and poured entry steps designed for safe access, drainage and long-term durability.</p></div>
                        <div className="service-card"><h3>Stamped Concrete</h3><p>Slate, cobblestone, brick and wood-look patterns with integral color and protective sealer.</p></div>
                        <div className="service-card"><h3>Exposed Aggregate</h3><p>Textured decorative aggregate finishes for driveways, patios and pool surrounds.</p></div>
                        <div className="service-card"><h3>Retaining Walls</h3><p>Concrete and block retaining solutions for grade changes, erosion control and usable outdoor space.</p></div>
                        <div className="service-card"><h3>Slabs & Footings</h3><p>Garage slabs, addition footings, outbuilding foundations and other structural concrete work.</p></div>
                        <div className="service-card"><h3>Concrete Repair & Resurfacing</h3><p>Crack repair, spalling repair, resurfacing, overlays and replacement assessments.</p></div>
                        <div className="service-card"><h3>Pool Surrounds</h3><p>Slip-conscious concrete surfaces with appropriate texture, drainage and decorative options.</p></div>
                        <div className="service-card"><h3>Driveway Aprons</h3><p>Repair and replacement of driveway approaches where they meet the street or sidewalk.</p></div>
                        <div className="service-card"><h3>Sealing & Waterproofing</h3><p>Protective sealing to reduce staining, moisture intrusion and freeze-thaw deterioration.</p></div>
                    </div>

                    <h2>Popular Concrete Projects in Cabin John, MD</h2>
                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead><tr><th>Project</th><th>Typical Size</th><th>Typical Cost</th><th>Key Consideration</th></tr></thead>
                                <tbody>
                                    <tr><td>Concrete Driveway</td><td>400–800 sq ft</td><td>$8–$18 / sq ft</td><td>Base preparation, reinforcement, drainage and control joints</td></tr>
                                    <tr><td>Concrete Patio</td><td>200–600 sq ft</td><td>$8–$20 / sq ft</td><td>Finish, slope, drainage and outdoor-use durability</td></tr>
                                    <tr><td>Walkways & Steps</td><td>50–200+ sq ft</td><td>$10–$22 / sq ft</td><td>Safe grades, entry transitions and curb appeal</td></tr>
                                    <tr><td>Stamped Concrete</td><td>Varies</td><td>+$4–$10 / sq ft premium</td><td>Pattern, integral color and periodic resealing</td></tr>
                                    <tr><td>Retaining Wall</td><td>Site-specific</td><td>$30–$65 / sq ft wall face</td><td>Grade, drainage, engineering and permitting</td></tr>
                                    <tr><td>Garage / Structural Slab</td><td>Site-specific</td><td>Project-specific</td><td>Engineering, reinforcement and applicable permits</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h2>Concrete Finish Options for Cabin John Homeowners</h2>
                    <div className="service-grid">
                        <div className="service-card"><h3>🧹 Broom Finish</h3><p>A practical textured finish offering slip resistance and a clean appearance. A strong choice for driveways and walkways.</p></div>
                        <div className="service-card"><h3>🪨 Exposed Aggregate</h3><p>Reveals decorative stone aggregate for added texture and a natural appearance, especially useful around pools and slopes.</p></div>
                        <div className="service-card"><h3>🎨 Stamped Concrete</h3><p>Imprints patterns such as slate, cobblestone, brick and wood while allowing integral color for a decorative finish.</p></div>
                        <div className="service-card"><h3>🖌️ Colored / Integral Color</h3><p>Pigment is mixed into the concrete for consistent color throughout the slab and can be combined with stamping.</p></div>
                        <div className="service-card"><h3>✨ Salt Finish</h3><p>A subtle textured surface created by pressing rock salt into wet concrete and removing it after curing.</p></div>
                        <div className="service-card"><h3>🔲 Smooth / Trowel Finish</h3><p>A hard smooth finish commonly used for garage floors and interior slabs where an ultra-smooth surface is appropriate.</p></div>
                    </div>

                    <h2>Concrete vs. Pavers vs. Asphalt — What's Best for Cabin John, MD?</h2>
                    <p>Choosing the right surface material depends on budget, lifespan, maintenance and appearance. The comparison below helps Cabin John homeowners weigh the options.</p>
                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead><tr><th>Factor</th><th>Concrete</th><th>Pavers</th><th>Asphalt</th></tr></thead>
                                <tbody>
                                    <tr><td>Lifespan</td><td>30–50 years</td><td>25–50+ years</td><td>15–20 years</td></tr>
                                    <tr><td>Upfront Cost</td><td>$8–$18 / sq ft</td><td>$15–$40 / sq ft</td><td>$3–$7 / sq ft</td></tr>
                                    <tr><td>Maintenance</td><td>Periodic sealing and limited repairs</td><td>Joint maintenance and unit resetting</td><td>Crack repair and periodic sealing</td></tr>
                                    <tr><td>Repairability</td><td>Repairs can be visible</td><td>Individual units are replaceable</td><td>Moderate</td></tr>
                                    <tr><td>Appearance</td><td>Clean with decorative options</td><td>Premium, highly customizable</td><td>Basic</td></tr>
                                    <tr><td>Best For</td><td>Driveways, patios and walkways</td><td>Premium patios and high-end hardscapes</td><td>Budget-focused large driveways</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="icon">✅</div>
                        <div>
                            <h3>DMV-GC Recommendation</h3>
                            <p>Concrete is often the best long-term value for Cabin John driveways and patios when you want durability, a clean finished appearance and multiple decorative options. Pavers can be ideal where individual repairability and premium appearance are priorities.</p>
                        </div>
                    </div>

                    <h2>What Makes a Quality Concrete Installation?</h2>
                    <div className="service-grid">
                        <div className="service-card"><h3>🔍 Proper Sub-Base Preparation</h3><p>Unsuitable material is removed and the subgrade is prepared with a properly compacted aggregate base appropriate to the project.</p></div>
                        <div className="service-card"><h3>💪 Correct Mix & Reinforcement</h3><p>Concrete strength, air entrainment and reinforcement are selected for the intended use and Maryland exterior conditions.</p></div>
                        <div className="service-card"><h3>💧 Drainage & Control Joints</h3><p>Grades and control-joint locations are planned to direct water away from structures and help manage shrinkage cracking.</p></div>
                        <div className="service-card"><h3>🛡️ Proper Curing & Sealing</h3><p>Appropriate curing time and exterior sealing help protect the finished concrete from moisture, staining and freeze-thaw deterioration.</p></div>
                    </div>

                    <h2>Concrete Service Cost in Cabin John, MD</h2>
                    <p>Concrete pricing varies by project type, size and site conditions. The table below provides typical installed cost ranges for common Cabin John projects.</p>
                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead><tr><th>Project Type</th><th>Cost per Sq Ft</th><th>Typical Example</th><th>Notes</th></tr></thead>
                                <tbody>
                                    <tr><td>Plain Concrete Driveway</td><td>$8–$12</td><td>$5,000–$9,600 (600 sq ft)</td><td>Standard broom finish; base and reinforcement included</td></tr>
                                    <tr><td>Exposed Aggregate Driveway</td><td>$10–$15</td><td>$6,000–$12,000 (600 sq ft)</td><td>Decorative aggregate surface</td></tr>
                                    <tr><td>Stamped Concrete Driveway</td><td>$14–$22</td><td>$8,400–$13,200 (600 sq ft)</td><td>Pattern, color and sealant</td></tr>
                                    <tr><td>Plain Concrete Patio</td><td>$8–$13</td><td>$2,400–$5,200 (300 sq ft)</td><td>Broom or salt finish</td></tr>
                                    <tr><td>Stamped Concrete Patio</td><td>$14–$22</td><td>$4,200–$8,800 (300 sq ft)</td><td>Pattern, color and sealant</td></tr>
                                    <tr><td>Concrete Walkway</td><td>$10–$18</td><td>$1,000–$3,600 (100–200 sq ft)</td><td>Finish and site access affect cost</td></tr>
                                    <tr><td>Concrete Steps</td><td>$300–$700 / step</td><td>$1,500–$3,500 (5 steps)</td><td>Formed, poured and finished</td></tr>
                                    <tr><td>Retaining Wall</td><td>$30–$65 / sq ft wall face</td><td>Varies by site</td><td>Engineering and permitting may apply</td></tr>
                                    <tr><td>Garage Floor Slab</td><td>$6–$10</td><td>$2,400–$5,000 (400 sq ft)</td><td>Smooth finish; coatings optional</td></tr>
                                    <tr><td>Resurfacing / Overlay</td><td>$3–$8</td><td>$1,500–$4,800 (600 sq ft)</td><td>Only where existing concrete is structurally sound</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h2>Why Choose DMV General Contracting Group for Concrete Work in Cabin John, MD?</h2>
                    <div className="service-grid">
                        <div className="service-card"><h3>🔩 Reinforced Concrete</h3><p>Driveways and slabs are reinforced according to project requirements rather than using shortcuts.</p></div>
                        <div className="service-card"><h3>🌡️ Maryland-Ready Installation</h3><p>Exterior pours account for freeze-thaw cycles, drainage, curing and weather conditions.</p></div>
                        <div className="service-card"><h3>🛡️ Licensed & Warrantied</h3><p>MHIC licensed, insured and backed by a 1-year workmanship warranty.</p></div>
                        <div className="service-card"><h3>⭐ 4.9-Star Reputation</h3><p>97+ reviews and a full-service design-build team for coordinated exterior projects.</p></div>
                    </div>

                    <h2>Our Concrete Installation Process in Cabin John, MD</h2>
                    <div className="steps">
                        <div className="step"><div className="step-num">1</div><div className="step-content"><h3>Free On-Site Estimate & Assessment</h3><p>We inspect the property, measure the work area, review existing concrete and discuss finish and design options.</p></div></div>
                        <div className="step"><div className="step-num">2</div><div className="step-content"><h3>Utility, Site & Permit Review</h3><p>We review site conditions, applicable permitting and utility-marking requirements before excavation.</p></div></div>
                        <div className="step"><div className="step-num">3</div><div className="step-content"><h3>Excavation & Removal</h3><p>Existing concrete is removed when required, unsuitable soil is addressed and the excavation is prepared for the new base.</p></div></div>
                        <div className="step"><div className="step-num">4</div><div className="step-content"><h3>Sub-Base Installation & Compaction</h3><p>A properly graded aggregate base is installed and compacted in lifts for uniform support.</p></div></div>
                        <div className="step"><div className="step-num">5</div><div className="step-content"><h3>Formwork & Reinforcement</h3><p>Forms are set to grade, drainage slopes are established, and rebar or mesh is positioned as required.</p></div></div>
                        <div className="step"><div className="step-num">6</div><div className="step-content"><h3>Concrete Pour & Finishing</h3><p>Concrete is placed, struck off, floated and finished to the selected broom, aggregate, stamped, salt or smooth texture.</p></div></div>
                        <div className="step"><div className="step-num">7</div><div className="step-content"><h3>Curing, Sealing & Cleanup</h3><p>We allow appropriate cure time, remove forms and debris, and complete sealing when the concrete reaches the recommended cure stage.</p></div></div>
                    </div>

                    <h2>Concrete Repair & Resurfacing in Cabin John, MD</h2>
                    <p>Not every damaged slab needs complete replacement. We assess cracks, spalling, surface scaling and settlement to determine whether repair, resurfacing or replacement makes the most sense.</p>
                    <div className="service-grid">
                        <div className="service-card"><h3>Repair</h3><p>Appropriate for isolated cracks, localized spalling and some surface deterioration when the underlying slab remains structurally sound.</p></div>
                        <div className="service-card"><h3>Resurfacing</h3><p>A cost-effective option for structurally sound concrete with widespread surface wear that needs a refreshed appearance.</p></div>
                        <div className="service-card"><h3>Replacement</h3><p>Recommended when the slab has major structural cracking, severe settlement, heaving, failed sub-base conditions or inadequate original construction.</p></div>
                    </div>

                    <h2>Serving Cabin John, MD and Surrounding Areas</h2>
                    <p>Our team works on residential concrete projects throughout Cabin John and nearby Montgomery County communities, including sloped and wooded properties where drainage, grade and site access require careful planning.</p>
                    <div className="areas-grid">
                        <span className="area-pill">Cabin John</span><span className="area-pill">North Bethesda</span><span className="area-pill">Bethesda</span><span className="area-pill">Chevy Chase</span><span className="area-pill">Rockville</span><span className="area-pill">Kensington</span><span className="area-pill">Silver Spring</span><span className="area-pill">Wheaton</span><span className="area-pill">Gaithersburg</span><span className="area-pill">Garrett Park</span><span className="area-pill">Potomac</span><span className="area-pill">Washington, DC</span>
                    </div>

                    <h2>Frequently Asked Questions — Concrete Services in Cabin John, MD</h2>
                    <Accordion defaultActiveKey="0" flush>
                        {faqData.map((faq, index) => (
                            <Accordion.Item eventKey={index.toString()} key={index}>
                                <Accordion.Header>{faq.question}</Accordion.Header>
                                <Accordion.Body>
                                    <div className="blog-html-content" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>

                    <div className="internal-links">
                        <h2>Explore Our Other Services in Cabin John</h2>
                        <ul>
                            <li><Link href="/service/fence-installation/cabin-john-md">Fence Installation in Cabin John, MD</Link></li>
                            <li><Link href="/service/decks/cabin-john-md">Decks & Porches in Cabin John, MD</Link></li>
                            <li><Link href="/service/siding-installation/cabin-john-md">Siding Installation in Cabin John, MD</Link></li>
                            <li><Link href="/service/kitchen-remodeling/cabin-john-md">Kitchen Remodeling in Cabin John, MD</Link></li>
                            <li><Link href="/service/bathroom-remodeling/cabin-john-md">Bathroom Remodeling in Cabin John, MD</Link></li>
                            <li><Link href="/service/design-build/cabin-john-md">Design-Build Contractor in Cabin John, MD</Link></li>
                        </ul>
                    </div>

                    <div className="cta-banner">
                        <h2>Ready for a Concrete Project in Cabin John?</h2>
                        <p>Get a professional on-site assessment and a detailed estimate for your driveway, patio, walkway, retaining wall, steps or other concrete project.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Estimate →</Link>
                        <Link href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</Link>
                    </div>

                    <div className="source-note">
                        <strong>DMV General Contracting Group LLC</strong><br />
                        11810 Grand Park Ave. Suite 500, North Bethesda, MD 20852<br />
                        MD MHIC #156178 · DC DLCP #410526000209<br />
                        Available 7 Days a Week · 1-Year Workmanship Warranty
                    </div>

                </div>
            </div>
        </>
    );
};

export default CabinJohnMD;