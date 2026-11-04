"use client";

import NavitemActive from "@/components/Common/NavitemActive";
import Link from "next/link";
import { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import styled from "styled-components";

const StyledCom = styled.div`
    --card-style1-bg: #f0f7f0;
    --card-style1-border: #b8ddb8;
    --card-style2-bg: #ebf6ff;
    --card-style2-border: #cbe5fb;

    padding-top: 20px;

    /* BREADCRUMB */
    .breadcrumb { font-size: 13px; color: #888; margin-bottom: 28px; }
    .breadcrumb a { color: var(--primary-color); text-decoration: none; }
    .breadcrumb span { margin: 0 6px; }

    /* HERO */
    .hero { border-left: 4px solid var(--primary-color); padding-left: 20px; margin-bottom: 36px; }
    h1 { font-size: 34px; font-weight: 700; line-height: 1.2; color: #111; margin-bottom: 12px; }
    .hero-meta { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 14px; }
    .hero-badge { font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 20px; background: #ebf6ff; color: var(--primary-color); border: 1px solid #cbe5fb; }

    .main-image{margin-bottom: 32px; height: 500px; border-radius: 20px; overflow: hidden}

    /* INTRO */
    .intro { font-size: 17px; line-height: 1.8; color: #333; margin-bottom: 32px; padding: 20px 24px; background: #ebf6ff; border-radius: 8px; border: 1px solid #cbe5fb; }

    /* SECTIONS */
    h2 { font-size: 24px; font-weight: 700; color: #111; margin: 40px 0 14px; border-bottom: 2px solid #cbe5fb; padding-bottom: 8px; }
    h3 { font-size: 18px; font-weight: 700; color: #222; margin: 24px 0 10px; }
    p { margin-bottom: 16px; color: #333; }

    /* SERVICE LIST */
    .service-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0 24px; }
    .service-item { padding: 14px 16px; background: #fafafa; border: 1px solid #e8e8e8; border-radius: 8px; font-size: 15px; color: #222; display: flex; align-items: flex-start; gap: 10px; }
    .service-item::before { content: "✓"; color: var(--primary-color); font-weight: 700; flex-shrink: 0; }

    /* PROCESS STEPS */
    .steps { display: flex; flex-direction: column; gap: 0; margin: 16px 0 24px; }
    .step { display: flex; gap: 16px; align-items: flex-start; padding: 16px 0; border-bottom: 1px solid #f0f0f0; }
    .step:last-child { border-bottom: none; }
    .step-num { width: 36px; height: 36px; background: var(--primary-color); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 15px; flex-shrink: 0; }
    .step-content h3 { margin: 0 0 4px; font-size: 16px; }
    .step-content p { margin: 0; font-size: 14px; color: #555; }

    /* COST TABLE */
    .cost-table { width: 100%; border-collapse: collapse; margin: 16px 0 24px; font-size: 14px; }
    .cost-table th { background: var(--primary-color); color: #fff; padding: 10px 14px; text-align: left; }
    .cost-table td { padding: 10px 14px; border: 1px solid #ccc; color: #333; }
    .cost-table tr:nth-child(even) td { background: #fafafa; }

    .table-responsive{
        width: 100%;
        overflow-x: auto;
    }
    .table-holder{
        min-width: 600px;
    }

    /* AREAS */
    .areas-grid { display: flex; flex-wrap: wrap; gap: 8px; margin: 14px 0 24px; }
    .area-pill { padding: 6px 14px; background: #ebf6ff; border: 1px solid #cbe5fb; border-radius: 20px; font-size: 13px; color: var(--primary-color); font-weight: 500; }

    h2.accordion-header{margin: 0; border: 0; padding-bottom: 0; }

    /* TRUST BOXES */
    .trust-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 16px 0 28px; }
    .trust-box { text-align: center; padding: 18px 12px; background: #ebf6ff; border: 1px solid #cbe5fb; border-radius: 8px; }
    .trust-box .icon { font-size: 34px; margin-bottom: 8px; }
    .trust-box strong { display: block; font-size: 18px; font-weight: 700; color: #111; }
    .trust-box span { font-size: 14px; color: #777; }

    .cat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0 28px; }
    .cat-card { padding: 22px 18px; background: var(--card-style1-bg); border: 1px solid var(--card-style1-border); border-radius: 12px; }
    .cat-card .tag { display: inline-block; font-size: 11px; font-family: sans-serif; font-weight: 700; padding: 2px 8px; border-radius: 20px; background: var(--primary-color); color: #fff; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.04em; }
    .cat-card h3 { font-size: 16px; font-family: sans-serif; margin: 0 0 8px; color: #111; font-weight: 700; }
    .cat-card ul { margin: 0; padding: 0 0 0 18px; }
    .cat-card ul li { font-size: 13px; color: #555; margin-bottom: 4px; line-height: 1.5; }


    /* CTA BANNER */
    .cta-banner { background: var(--primary-color); color: #fff; padding: 28px 32px; border-radius: 10px; margin: 36px 0; text-align: center; }
    .cta-banner h2 { color: #fff; border: none; font-size: 22px; margin: 0 0 8px; }
    .cta-banner p { color: rgba(255,255,255,0.88); margin: 0 0 18px; font-size: 15px; }
    .cta-btn { display: inline-block; background: #fff; color: var(--primary-color); padding: 12px 28px; border-radius: 6px; font-weight: 700; font-size: 15px; text-decoration: none; }

    /* NEARBY CITIES */
    .nearby { background: #f9f9f9; border: 1px solid #e8e8e8; border-radius: 8px; padding: 20px 24px; margin: 24px 0; }
    .nearby h3 { margin: 0 0 10px; font-size: 16px; }
    .nearby p { margin: 0; font-size: 14px; color: #555; }

    .tip { background: #f0f7f0; border-left: 4px solid #2e7d32; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 20px 0; font-size: 14px; color: #1b4d1e; font-family: sans-serif; line-height: 1.6; }
    .note { background: #fffbf0; border-left: 4px solid #f59e0b; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 20px 0; font-size: 14px; color: #7a4f00; font-family: sans-serif; line-height: 1.6; }

    .highlight { background: #ebf6ff; border-left: 4px solid var(--primary-color); padding: 16px 20px; border-radius: 0 8px 8px 0; margin: 20px 0; }
    .highlight p { margin: 0; font-size: 15px; color: var(--primary-color); }

    .danger-note { background: #fff0f0; border-left: 4px solid #dc2626; padding: 14px 18px; border-radius: 0 8px 8px 0; margin: 20px 0; font-size: 14px; color: #7f1d1d; font-family: sans-serif; line-height: 1.6; }
    .rec { font-size: 10px; font-weight: 700; background: var(--primary-color); color: #fff; padding: 1px 6px; border-radius: 10px; margin-left: 4px; vertical-align: middle; white-space: nowrap; }
    ul{list-style-type: disc;}

    .project-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0 28px; }
    .project-card { padding: 22px 18px; background: var(--card-style1-bg); border: 1px solid var(--card-style1-border); border-radius: 12px; }
    .project-card .tag { display: inline-block; font-size: 11px; font-family: sans-serif; font-weight: 700; padding: 2px 8px; border-radius: 20px; background: var(--primary-color); color: #fff; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.04em; }
    .project-card h3 { font-size: 16px; font-family: sans-serif; margin: 0 0 8px; color: #111; font-weight: 700; }
    .project-card p { font-size: 13px; color: #555; margin: 0 0 10px; line-height: 1.6; }
    .project-card .meta { display: flex; flex-direction: column; gap: 3px; }
    .project-card .meta span { font-size: 12px; font-family: sans-serif; color: #777; }
    .project-card .meta strong { color: var(--primary-color); }

    .finish-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin: 16px 0 24px; }
    .finish-box { padding: 18px 14px; background: var(--card-style2-bg); border: 1px solid var(--card-style2-border); border-radius: 10px; }
    .finish-box .icon { font-size: 34px; margin-bottom: 8px; }
    .finish-box h3 { font-size: 16px; font-family: sans-serif; font-weight: 700; color: var(--primary-color); margin: 0 0 6px; }
    .finish-box p { font-size: 14px; color: #666; margin: 0; line-height: 1.5; }

    .quality-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 16px 0 24px; }
    .quality-box { padding: 18px 16px; background: var(--card-style2-bg); border: 1px solid var(--card-style2-border); border-radius: 10px; }
    .quality-box h3 { font-size: 16px; font-family: sans-serif; font-weight: 700; color: var(--primary-color); margin: 0 0 6px; }
    .quality-box p { font-size: 14px; color: #555; margin: 0; line-height: 1.6; }



    @media (max-width: 600px) {
        h1 { font-size: 26px; }
        .service-grid { grid-template-columns: 1fr; }
        .trust-grid { grid-template-columns: 1fr; }
        .cat-grid { grid-template-columns: 1fr; }
        .project-grid { grid-template-columns: 1fr; }
        .finish-grid { grid-template-columns: 1fr; }
        .quality-grid { grid-template-columns: 1fr; }

        .main-image{height: 250px;}
        .cta-btn {  padding: 12px 12px; font-size: 14px; }
    }
`;

export default function Concrete({ data }) {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const faqData = [
        {
            question: "How much does a concrete driveway cost in Bethesda, MD?",
            answer:
            `A concrete driveway in Bethesda typically costs $8–$12 per square foot for standard broom-finished concrete, $10–$15 for exposed aggregate, and $14–$22 for stamped decorative concrete — all fully installed including excavation, gravel base, rebar, concrete, and finishing. A standard 2-car driveway (600 sq ft) runs $5,000–$13,200 depending on finish type. DMV General Contracting Group provides free on-site estimates with exact, itemized pricing for every driveway project.`
        },
        {
            question: "How long does a concrete driveway last in Bethesda, MD?",
            answer:
            `A properly installed concrete driveway in Bethesda lasts 30–50 years with basic maintenance — far longer than asphalt (15–20 years) and comparable to pavers. Key longevity factors are proper base preparation, minimum 4,000 PSI air-entrained concrete, steel reinforcement, correct control joint spacing, and sealing every 3–5 years. Avoid chloride-based ice melts on new concrete for the first winter — they accelerate surface scaling.`
        },
        {
            question: "What is stamped concrete and is it a good choice for Bethesda patios?",
            answer:
            `Stamped concrete uses rubber stamps to imprint patterns (slate, cobblestone, brick, wood plank) into freshly poured concrete, combined with integral color for a realistic natural material appearance. It is an excellent choice for Bethesda patios — offering the look of natural stone or pavers at 30–50% less cost, with a seamless surface (no joints for weeds) and durability in Maryland's climate. It requires resealing every 2–3 years to maintain color and sheen. DMV General Contracting Group installs stamped concrete patios throughout Bethesda.`
        },
        {
            question: "Do I need a permit for concrete work in Bethesda, MD?",
            answer:
            `Standard driveway replacement and patio installations in Montgomery County typically do not require a building permit. However, permits are required for retaining walls over 30 inches, significant changes to grading or drainage, and new impervious surfaces in sensitive watershed or drainage areas. All structural concrete (footings, foundation slabs, retaining walls requiring engineering) requires a permit. DMV General Contracting Group evaluates permit requirements for every concrete project and handles all required permits in-house.`
        },
        {
            question: "Concrete vs. pavers — which is better for a Bethesda driveway or patio?",
            answer:
            `Both are excellent choices. Concrete is more affordable upfront ($8–$18/sq ft vs $15–$40/sq ft for pavers), more seamless, and lasts 30–50 years with minimal maintenance. Pavers offer easier individual repair, better drainage, and a more premium appearance that Bethesda buyers tend to prefer at the high end of the market. Stamped concrete bridges the gap — delivering a paver-like appearance at closer to concrete pricing. DMV General Contracting Group installs both and provides an honest recommendation based on your goals and budget during the free consultation.`
        },
        {
            question: "How long does concrete take to cure in Bethesda?",
            answer:
            `Concrete reaches approximately 70% strength in 7 days and full design strength at 28 days. Foot traffic is safe after 24–48 hours. Vehicle traffic should wait 7 days minimum. Heavy vehicles should wait the full 28-day cure. In cold Maryland weather, concrete pours require special cold-weather precautions — DMV General Contracting Group uses heated enclosures, insulating blankets, and accelerating admixtures when necessary to ensure proper curing regardless of temperature.`
        }
    ];

    return (
        <main className="page-wrapper">
            <NavitemActive nav="service" />
            <StyledCom className="service-detail-page">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link href="/">Home</Link><span>›</span>
                        <Link href="/services">Services</Link><span>›</span>
                        Concrete Services Bethesda, MD
                    </nav>

                    <div className="hero">
                        <h1>Concrete Services in Bethesda, MD — Driveways, Patios, Walkways & More</h1>
                        <div className="hero-meta">
                        <span className="hero-badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="hero-badge">✓ MHIC Licensed & Insured</span>
                            <span className="hero-badge">✓ DLCP Licensed</span>
                        <span className="hero-badge">✓ 1-Year Warranty</span>
                        <span className="hero-badge">✓ Free On-Site Estimate</span>
                        </div>
                    </div>

                    <div className="image-holder main-image">
                        <img src={`.${data.image}`} alt={data.title}/>
                    </div>

                    <div className="intro">
                        Looking for a trusted <strong>concrete contractor in Bethesda, MD</strong>? DMV General Contracting Group provides professional concrete installation services throughout Bethesda and Montgomery County — driveways, patios, walkways, steps, retaining walls, and foundation concrete. Whether you want plain broom-finished concrete, decorative stamped concrete with a natural stone pattern, or exposed aggregate for added texture and grip, our experienced concrete crew delivers a properly prepared, reinforced, and finished result built to last 30–50 years in Maryland's demanding climate.
                    </div>

                    <h2>Concrete Services We Offer in Bethesda, MD</h2>
                    <p>
                        DMV General Contracting Group handles the full range of <strong>residential concrete work in Bethesda</strong> — from small walkway replacements to full driveway pours and structural foundation concrete.
                    </p>

                    <div className="service-grid">
                        <div className="service-item">Concrete Driveway Installation & Replacement</div>
                        <div className="service-item">Concrete Patio Installation</div>
                        <div className="service-item">Concrete Walkway & Sidewalk Installation</div>
                        <div className="service-item">Concrete Steps & Stoops</div>
                        <div className="service-item">Stamped Concrete (Patterns & Colors)</div>
                        <div className="service-item">Exposed Aggregate Concrete</div>
                        <div className="service-item">Colored / Integral Color Concrete</div>
                        <div className="service-item">Concrete Retaining Walls</div>
                        <div className="service-item">Concrete Curbing & Edging</div>
                        <div className="service-item">Pool Surround Concrete</div>
                        <div className="service-item">Garage Floor Concrete</div>
                        <div className="service-item">Foundation Footings & Slabs</div>
                        <div className="service-item">Concrete Repair & Resurfacing</div>
                        <div className="service-item">Driveway Apron Repair & Replacement</div>
                        <div className="service-item">Control Joint Cutting & Sealing</div>
                        <div className="service-item">Concrete Sealing & Waterproofing</div>
                    </div>

                    <h2>Concrete Projects We Complete in Bethesda, MD</h2>
                    <p>
                        Here are the most common <strong>concrete projects</strong> DMV General Contracting Group completes for Bethesda homeowners — with typical sizes, costs, and what makes each project unique in the Bethesda market:
                    </p>

                    <div className="project-grid">
                        <div className="project-card">
                        <span className="tag">Most Requested</span>
                        <h3>Concrete Driveway</h3>
                        <p>New concrete driveways and full replacements are one of our most common concrete projects in Bethesda. A properly installed concrete driveway with proper base preparation, reinforcement, control joints, and minimum 4,000 PSI concrete lasts 30–50 years — dramatically outlasting asphalt. Available in broom finish, exposed aggregate, or stamped decorative finishes.</p>
                        <div className="meta">
                            <span><strong>Typical Size:</strong> 400–800 sq ft (1–2 car)</span>
                            <span><strong>Cost:</strong> $8–$18 per sq ft installed</span>
                            <span><strong>Lifespan:</strong> 30–50 years</span>
                        </div>
                        </div>
                        <div className="project-card">
                        <span className="tag">Outdoor Living</span>
                        <h3>Concrete Patio</h3>
                        <p>Concrete patios are an affordable, durable foundation for Bethesda outdoor living spaces. Plain broom-finished concrete provides a clean, neutral backdrop. Stamped and colored concrete can mimic slate, flagstone, or brick at a fraction of the cost of natural materials. Concrete patios pair beautifully with a deck above or pergola overhead.</p>
                        <div className="meta">
                            <span><strong>Typical Size:</strong> 200–600 sq ft</span>
                            <span><strong>Cost:</strong> $8–$20 per sq ft installed</span>
                            <span><strong>Lifespan:</strong> 25–50 years</span>
                        </div>
                        </div>
                        <div className="project-card">
                        <span className="tag">Curb Appeal</span>
                        <h3>Concrete Walkways & Steps</h3>
                        <p>Front walkways and entry steps are among the first things visitors and potential buyers notice about a Bethesda home. Cracked, settled, or stained concrete walkways dramatically affect curb appeal. New concrete walkways — especially with a decorative broom finish, exposed aggregate, or subtle stamped border — make an immediate and lasting impression.</p>
                        <div className="meta">
                            <span><strong>Typical Size:</strong> 50–200 sq ft</span>
                            <span><strong>Cost:</strong> $10–$22 per sq ft installed</span>
                            <span><strong>Lifespan:</strong> 30–50 years</span>
                        </div>
                        </div>
                        <div className="project-card">
                        <span className="tag">Decorative</span>
                        <h3>Stamped Concrete Patio & Driveway</h3>
                        <p>Stamped concrete is the most popular decorative concrete option in Bethesda — offering the appearance of natural stone, brick, or slate at 30–50% less cost than the real materials. Popular patterns include Ashlar slate, cobblestone, herringbone brick, and wood plank. Color is integral to the mix and reinforced with surface release agent for depth and variation.</p>
                        <div className="meta">
                            <span><strong>Cost Premium:</strong> +$4–$10 per sq ft over plain</span>
                            <span><strong>Maintenance:</strong> Reseal every 2–3 years</span>
                            <span><strong>Lifespan:</strong> 25–40 years with sealing</span>
                        </div>
                        </div>
                        <div className="project-card">
                        <span className="tag">Slope Management</span>
                        <h3>Concrete Retaining Walls</h3>
                        <p>Many Bethesda properties — particularly in Cabin John, Potomac, and wooded sections of Chevy Chase — have sloped terrain that requires retaining walls to manage grade changes, prevent erosion, and create usable flat outdoor space. Concrete block and poured concrete retaining walls are durable, low-maintenance solutions for grade management in Maryland's clay-heavy soil.</p>
                        <div className="meta">
                            <span><strong>Cost:</strong> $30–$65 per sq ft of wall face</span>
                            <span><strong>Permit:</strong> Required for walls over 30 inches</span>
                            <span><strong>Lifespan:</strong> 40–75 years</span>
                        </div>
                        </div>
                        <div className="project-card">
                        <span className="tag">Foundation Work</span>
                        <h3>Footings, Slabs & Foundation Concrete</h3>
                        <p>As a full-service design-build contractor, DMV General Contracting Group pours structural foundation concrete for home additions, ADUs, deck footings, garage slabs, and outbuilding foundations. All structural concrete is designed by our in-house engineers, mixed to appropriate PSI specifications, and reinforced with steel rebar as required by Montgomery County building code.</p>
                        <div className="meta">
                            <span><strong>Permit:</strong> Always required for structural work</span>
                            <span><strong>Design:</strong> In-house structural engineering</span>
                            <span><strong>Lifespan:</strong> 50–100+ years</span>
                        </div>
                        </div>
                    </div>

                    <h2>Concrete Finish Options for Bethesda Homeowners</h2>
                    <p>
                        The finish applied to concrete dramatically changes its appearance, texture, slip resistance, and maintenance needs. Here are the most popular <strong>concrete finish types</strong> we install in Bethesda:
                    </p>

                    <div className="finish-grid">
                        <div className="finish-box">
                        <div className="icon">🧹</div>
                        <h3>Broom Finish</h3>
                        <p>The standard residential finish — a broomed texture applied while wet. Provides slip resistance, a clean neutral look, and minimal maintenance. Most affordable option. Best for driveways and utilitarian surfaces.</p>
                        </div>
                        <div className="finish-box">
                        <div className="icon">🪨</div>
                        <h3>Exposed Aggregate</h3>
                        <p>The surface cement paste is washed away after pour to reveal decorative stone aggregate beneath. Provides excellent texture and grip. Popular for pool surrounds and sloped driveways in Bethesda. Natural, timeless appearance.</p>
                        </div>
                        <div className="finish-box">
                        <div className="icon">🎨</div>
                        <h3>Stamped Concrete</h3>
                        <p>Rubber stamps imprint patterns (slate, cobblestone, brick, wood) into wet concrete. Combined with integral color and surface release agent for realistic depth. The premium decorative option — requires resealing every 2–3 years.</p>
                        </div>
                        <div className="finish-box">
                        <div className="icon">🖌️</div>
                        <h3>Colored / Integral Color</h3>
                        <p>Color pigment mixed into the concrete before pour — producing consistent color throughout the slab, not just on the surface. Can be used alone or with stamped patterns. Fade-resistant and does not chip like surface-applied coatings.</p>
                        </div>
                        <div className="finish-box">
                        <div className="icon">✨</div>
                        <h3>Salt Finish</h3>
                        <p>Rock salt is pressed into wet concrete surface and removed after curing — leaving subtle pitted texture. Creates a softer, more organic look than broom finish. Popular for pool decks and casual patio areas around Bethesda homes.</p>
                        </div>
                        <div className="finish-box">
                        <div className="icon">🔲</div>
                        <h3>Smooth / Trowel Finish</h3>
                        <p>A steel trowel produces an ultra-smooth, hard surface. Used for garage floors, basement slabs, and indoor applications. Very smooth surfaces can be slippery when wet — not recommended for outdoor driveways or patios without anti-slip coating.</p>
                        </div>
                    </div>

                    <h2>Concrete vs. Pavers vs. Asphalt — What's Best for Bethesda?</h2>
                    <p>
                        Bethesda homeowners frequently ask us to compare <strong>concrete, pavers, and asphalt</strong> for driveways and patios. Here is an honest, detailed comparison based on performance in Maryland's climate:
                    </p>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table comp-table">
                                <tr>
                                <th>Factor</th>
                                <th>Concrete <span className="rec">Our Top Pick</span></th>
                                <th>Pavers (Brick / Bluestone)</th>
                                <th>Asphalt</th>
                                </tr>
                                <tr>
                                <td><strong>Lifespan</strong></td>
                                <td className="good">30–50 years</td>
                                <td className="good">25–50+ years (individual units)</td>
                                <td className="poor">15–20 years</td>
                                </tr>
                                <tr>
                                <td><strong>Upfront Cost</strong></td>
                                <td className="good">$8–$18 / sq ft</td>
                                <td className="poor">$15–$40 / sq ft</td>
                                <td className="good">$3–$7 / sq ft</td>
                                </tr>
                                <tr>
                                <td><strong>Maintenance</strong></td>
                                <td className="good">Seal every 5 years; minimal repairs</td>
                                <td className="mid">Re-sand joints; reset settled units</td>
                                <td className="poor">Seal every 3 yrs; crack/pothole repairs</td>
                                </tr>
                                <tr>
                                <td><strong>Maryland Climate Performance</strong></td>
                                <td className="good">Excellent — handles freeze-thaw well</td>
                                <td className="good">Excellent — flexible base accommodates movement</td>
                                <td className="mid">Moderate — softens in summer heat, cracks in cold</td>
                                </tr>
                                <tr>
                                <td><strong>Repairability</strong></td>
                                <td className="mid">Difficult — patches visible</td>
                                <td className="good">Easy — individual units replaceable</td>
                                <td className="mid">Moderate — patches blend better than concrete</td>
                                </tr>
                                <tr>
                                <td><strong>Appearance</strong></td>
                                <td className="good">Clean; decorative options available</td>
                                <td className="good">Premium; high-end curb appeal</td>
                                <td className="poor">Basic; no decorative options</td>
                                </tr>
                                <tr>
                                <td><strong>Curb Appeal / Resale Value</strong></td>
                                <td className="good">Good — especially stamped</td>
                                <td className="good">Highest — buyers notice and value pavers</td>
                                <td className="poor">Lowest</td>
                                </tr>
                                <tr>
                                <td><strong>Best For</strong></td>
                                <td>Driveways, patios, walkways on budget</td>
                                <td>Front yards, premium patios, high-end homes</td>
                                <td>Large driveways where cost is the main driver</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="tip">
                        💡 <strong>DMV General Contracting Group's Recommendation:</strong> For most Bethesda driveways, <strong>concrete is the best long-term value</strong> — it outlasts asphalt significantly and costs far less than pavers. For front walkways and patio areas where appearance and curb appeal are the priority, <strong>pavers or stamped concrete</strong> are worth the additional investment. DMV General Contracting Group installs all three — and can help you decide during a free on-site consultation.
                    </div>

                    <h2>What Makes a Quality Concrete Installation in Bethesda</h2>
                    <p>
                        Not all concrete work is equal. The difference between concrete that lasts 40 years and concrete that cracks and spalls within 5 years comes down to preparation and execution — most of which is invisible once the concrete is poured. Here's what DMV General Contracting Group does on every project to ensure long-lasting results in Bethesda's demanding climate:
                    </p>

                    <div className="quality-grid">
                        <div className="quality-box">
                        <h3>🔍 Proper Sub-Base Preparation</h3>
                        <p>We excavate to the correct depth, remove all organic material, compact native soil, and install a compacted gravel sub-base (typically 4–6 inches for driveways). Maryland's clay-heavy soil is particularly prone to movement — a proper compacted base is what keeps concrete from settling and cracking over time.</p>
                        </div>
                        <div className="quality-box">
                        <h3>💪 Correct Concrete Mix & PSI</h3>
                        <p>We specify minimum 4,000 PSI concrete for driveways (most residential concrete is only 3,000 PSI — not enough for vehicle traffic in Maryland's climate). Air-entrained concrete is used for all exterior applications — the air bubbles protect against freeze-thaw damage, which is critical in Bethesda where temperatures cycle above and below freezing dozens of times each winter.</p>
                        </div>
                        <div className="quality-box">
                        <h3>🔩 Steel Reinforcement</h3>
                        <p>All DMV General Contracting Group driveways include steel rebar or wire mesh reinforcement — a step that budget contractors often skip to reduce costs. Reinforcement holds cracked concrete sections together and dramatically reduces the severity and progression of cracking over the slab's lifetime.</p>
                        </div>
                        <div className="quality-box">
                        <h3>✂️ Control Joint Placement</h3>
                        <p>Control joints are intentional weakened lines cut or tooled into the concrete surface that direct cracking to occur at planned locations rather than randomly across the slab. Proper control joint spacing (every 10–12 feet for driveways) is one of the most critical factors in preventing unsightly random cracking in Bethesda's freeze-thaw climate.</p>
                        </div>
                        <div className="quality-box">
                        <h3>💧 Proper Curing</h3>
                        <p>Concrete must cure slowly and evenly — if it dries too fast (hot sunny days) or freezes before it gains strength (cold weather pours), it loses significant strength and durability. We use curing compounds, wet burlap, and insulating blankets as appropriate for weather conditions to ensure your concrete reaches its full design strength.</p>
                        </div>
                        <div className="quality-box">
                        <h3>🛡️ Sealing</h3>
                        <p>We recommend sealing all exterior concrete surfaces 28–30 days after pour, once the concrete has fully cured. A penetrating concrete sealer waterproofs the surface, reduces staining, and provides freeze-thaw protection. Resealing every 3–5 years adds decades of life to any concrete surface in Maryland's climate.</p>
                        </div>
                    </div>

                    <h2>Concrete vs. Asphalt Driveway — Bethesda Specific Considerations</h2>
                    <p>
                        For Bethesda homeowners choosing between a concrete and asphalt driveway, the local factors matter:
                    </p>
                    <p>
                        <strong>Maryland's climate is hard on asphalt.</strong> Summer temperatures in Bethesda regularly reach 90°F+, causing asphalt to soften and deform under vehicle weight (especially near the street where cars turn). In winter, freeze-thaw cycles penetrate asphalt surface cracks — widening them each cycle. Asphalt driveways in Bethesda typically need crack filling every 2–3 years and full resurfacing every 10–15 years.
                    </p>
                    <p>
                        <strong>Concrete handles Bethesda's climate better.</strong> Concrete does not soften in summer heat or crack under normal vehicle loads the way asphalt does. Air-entrained concrete handles freeze-thaw cycles significantly better than asphalt when properly mixed and installed. A concrete driveway in Bethesda properly maintained with sealing typically needs no major work for 30–50 years — far outlasting multiple asphalt cycles.
                    </p>
                    <p>
                        <strong>Resale value.</strong> In Bethesda's upscale real estate market, concrete or paver driveways are strongly preferred by buyers. Asphalt driveways are viewed as a lower-end finish in this market — something many buyers plan to replace after purchase. A concrete driveway is a feature that adds perceived and real value.
                    </p>

                    <h2>Concrete Service Cost in Bethesda, MD</h2>
                    <p>
                        Here is a detailed breakdown of <strong>concrete installation costs in Bethesda, Maryland</strong> — all prices are fully installed including excavation, base preparation, formwork, concrete, finishing, and cleanup:
                    </p>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <tr>
                                <th>Project Type</th>
                                <th>Cost per Sq Ft</th>
                                <th>Typical Project Estimate</th>
                                <th>Notes</th>
                                </tr>
                                <tr>
                                <td>Plain Concrete Driveway (Broom)</td>
                                <td>$8 – $12</td>
                                <td>$5,000 – $9,600 (600 sq ft)</td>
                                <td>Standard 2-car driveway; 4" thick, rebar included</td>
                                </tr>
                                <tr>
                                <td>Exposed Aggregate Driveway</td>
                                <td>$10 – $15</td>
                                <td>$6,000 – $12,000 (600 sq ft)</td>
                                <td>Decorative stone aggregate surface</td>
                                </tr>
                                <tr>
                                <td>Stamped Concrete Driveway</td>
                                <td>$14 – $22</td>
                                <td>$8,400 – $13,200 (600 sq ft)</td>
                                <td>Pattern + color + sealant included</td>
                                </tr>
                                <tr>
                                <td>Plain Concrete Patio</td>
                                <td>$8 – $13</td>
                                <td>$2,400 – $5,200 (300 sq ft)</td>
                                <td>Standard broom or salt finish</td>
                                </tr>
                                <tr>
                                <td>Stamped Concrete Patio</td>
                                <td>$14 – $22</td>
                                <td>$4,200 – $8,800 (300 sq ft)</td>
                                <td>Pattern + color + sealant; most popular decorative option</td>
                                </tr>
                                <tr>
                                <td>Concrete Walkway</td>
                                <td>$10 – $18</td>
                                <td>$1,000 – $3,600 (100–200 sq ft)</td>
                                <td>Front walks, side paths; decorative finish adds cost</td>
                                </tr>
                                <tr>
                                <td>Concrete Steps (per step)</td>
                                <td>$300 – $700 per step</td>
                                <td>$1,500 – $3,500 (5 steps)</td>
                                <td>Formed, poured, and broom or stamped finished</td>
                                </tr>
                                <tr>
                                <td>Concrete Retaining Wall</td>
                                <td>$30 – $65 per sq ft wall face</td>
                                <td>Varies by height and length</td>
                                <td>Permit required for walls over 30"; engineering included</td>
                                </tr>
                                <tr>
                                <td>Garage Floor Slab</td>
                                <td>$6 – $10</td>
                                <td>$2,400 – $5,000 (400 sq ft)</td>
                                <td>Smooth trowel finish; optional epoxy coating extra</td>
                                </tr>
                                <tr>
                                <td>Concrete Resurfacing / Overlay</td>
                                <td>$3 – $8</td>
                                <td>$1,500 – $4,800 (600 sq ft)</td>
                                <td>For structurally sound concrete needing surface refresh</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="cta-banner">
                        <h2>Get a Free Concrete Estimate for Your Bethesda Property</h2>
                        <p>We'll visit your property, assess existing conditions, measure the project area, and provide a detailed itemized estimate — at no cost and no obligation.</p>
                        <Link href="/contact-us" className="cta-btn">Schedule Free Concrete Consultation →</Link>
                    </div>

                    <h2>Why Choose DMV General Contracting Group for Concrete Work in Bethesda</h2>
                    <p>
                        The difference between concrete that lasts decades and concrete that cracks and flakes within a few years comes down to the quality of the crew and the details of the pour. DMV General Contracting Group's concrete team uses proper mix specifications, correct base preparation, and appropriate reinforcement on every project — not just the upsell jobs.
                    </p>

                    <div className="trust-grid">
                        <div className="trust-box">
                        <div className="icon">🔩</div>
                        <strong>Rebar on Every Job</strong>
                        <span>We reinforce all driveways and slabs — no shortcuts</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">🌡️</div>
                        <strong>Weather-Aware Pours</strong>
                        <span>Proper curing in hot summers and cold Maryland winters</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">🛡️</div>
                        <strong>Licensed & Warrantied</strong>
                        <span>MHIC licensed, insured, 1-year workmanship warranty</span>
                        </div>
                    </div>

                    <div className="highlight">
                        <p>⭐ <strong>4.9-star rated with 97+ reviews.</strong> As a full-service design-build contractor, DMV General Contracting Group integrates concrete work into complete outdoor renovation projects — coordinating driveway, walkway, patio, and retaining wall work with decks, fencing, and landscaping for a fully unified outdoor transformation.</p>
                    </div>

                    <h2>Our Concrete Installation Process in Bethesda</h2>

                    <div className="steps">
                        <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free On-Site Estimate & Assessment</h3>
                            <p>We visit your Bethesda property, assess existing conditions (old concrete, drainage, grade), measure the project area, discuss finish options, and provide a detailed written estimate. For retaining walls and structural work, we review slope conditions and soil type before recommending a design approach.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Call 811 & Permit Review</h3>
                            <p>We contact Maryland 811 (Miss Utility) to mark underground utilities before any excavation begins. We also assess permit requirements for the specific project — retaining walls over 30 inches, new impervious surfaces in sensitive drainage areas, and structural footings always require Montgomery County permits, which we handle in-house.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Excavation & Old Concrete Removal</h3>
                            <p>We remove existing concrete (if any), excavate to the correct depth for the project type and base thickness, and haul all debris away. Sub-grade soil is inspected for soft spots, organic material, or drainage issues that need to be addressed before the base goes in.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Sub-Base Installation & Compaction</h3>
                            <p>A properly graded and compacted gravel sub-base is installed to the specified depth — typically 4 inches for patios and walkways, 6 inches for driveways. We compact in lifts to ensure uniform density. For projects in Bethesda's clay-heavy soil areas, we may add a geotextile fabric layer beneath the gravel to prevent sub-grade migration.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Formwork & Reinforcement</h3>
                            <p>Forms are set to the correct grade and level (with appropriate slope for drainage — minimum 1/8" per foot away from structures). Steel rebar or wire mesh is placed and tied at the correct height within the form. Control joint locations are planned and marked before the pour.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Concrete Pour & Finishing</h3>
                            <p>Ready-mix concrete is ordered to our specified PSI and admixture requirements (air-entrained for exterior applications). Concrete is poured, struck off, floated, and finished to the chosen surface texture — broom, exposed aggregate, stamped, or smooth. Control joints are cut or tooled at specified intervals before the concrete sets. Curing compound is applied immediately after finishing.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">7</div>
                        <div className="step-content">
                            <h3>Curing, Form Removal & Cleanup</h3>
                            <p>We allow adequate cure time before form removal and opening to traffic — 24–48 hours for foot traffic, 7 days for vehicles. All forms, debris, and excess material are removed and the site is cleaned up completely. For stamped concrete, sealer is applied after the recommended cure period (typically 28–30 days).</p>
                        </div>
                        </div>
                    </div>

                    <h2>Concrete Repair & Resurfacing in Bethesda, MD</h2>
                    <p>
                        Not all concrete problems require full replacement. DMV General Contracting Group assesses every concrete situation honestly — recommending repair or resurfacing when that is the right answer, and full replacement when the concrete is beyond economical repair.
                    </p>
                    <p>
                        <strong>Repair is appropriate</strong> for isolated cracks, spalling on an otherwise structurally sound slab, settlement of a section that can be mudjacked or foam-lifted, or surface scaling caused by de-icer salt damage. Crack repair and surface sealing can extend the life of existing concrete significantly.
                    </p>
                    <p>
                        <strong>Resurfacing</strong> — applying a thin concrete overlay to an existing slab — is a cost-effective option when the underlying concrete is structurally sound but has widespread surface deterioration. A concrete overlay can also transform plain concrete into a stamped or colored decorative surface without full replacement.
                    </p>
                    <p>
                        <strong>Full replacement is recommended</strong> when concrete has deep structural cracks through the full thickness, when it has heaved significantly from tree roots or frost, when the sub-base has failed and settlement is ongoing, or when the existing slab is simply too thin or poorly mixed to provide a solid base for overlay. In Bethesda's high-value real estate market, replacing a failing driveway before listing is almost always worth the investment.
                    </p>

                    <div className="note">
                        ⚠️ <strong>De-Icer Warning for Bethesda Homeowners:</strong> Chloride-based ice melts (rock salt, calcium chloride) are one of the most common causes of concrete surface scaling and spalling in Maryland. They penetrate the concrete surface and cause the near-surface paste to deteriorate — especially on concrete less than 1 year old. Use sand or kitty litter for traction on new concrete for the first full winter. DMV General Contracting Group uses air-entrained concrete mixes specifically to minimize de-icer damage risk.
                    </div>

                    <h2>Serving Bethesda and Surrounding Areas for Concrete Services</h2>

                    <div className="areas-grid">
                        <span className="area-pill">Bethesda, MD</span>
                        <span className="area-pill">North Bethesda</span>
                        <span className="area-pill">Potomac</span>
                        <span className="area-pill">Chevy Chase</span>
                        <span className="area-pill">Rockville</span>
                        <span className="area-pill">Kensington</span>
                        <span className="area-pill">Silver Spring</span>
                        <span className="area-pill">Wheaton</span>
                        <span className="area-pill">Gaithersburg</span>
                        <span className="area-pill">Garrett Park</span>
                        <span className="area-pill">Cabin John</span>
                        <span className="area-pill">Washington DC</span>
                        <span className="area-pill">Laurel</span>
                    </div>

                    <div className="nearby">
                        <h3>Concrete driveways and stamped patios in Chevy Chase & Potomac, MD</h3>
                        <p>Chevy Chase and Potomac are two of the most active concrete markets near Bethesda — high home values and large properties make driveway replacement, stamped patio installations, and retaining wall projects especially common. DMV General Contracting Group regularly completes full driveway replacements and decorative stamped concrete patio projects throughout both communities, and is experienced with the drainage management requirements specific to Potomac's sloped, wooded terrain.</p>
                    </div>

                    <div className="nearby">
                        <h3>Retaining walls and walkways in Cabin John & Garrett Park, MD</h3>
                        <p>Cabin John and Garrett Park properties frequently have sloped lots and aging walkway concrete that needs replacement. Our team is experienced with retaining wall design and installation on challenging wooded terrain — and with the delicate work of installing walkways and steps on steep grade transitions while protecting mature trees and root systems near the work area.</p>
                    </div>

                    <h2>Frequently Asked Questions — Concrete Services in Bethesda, MD</h2>
                    <Accordion defaultActiveKey="0" flush>
                        {faqData.map((faq, index) => (
                            <Accordion.Item eventKey={index.toString()} key={index}>
                                <Accordion.Header>
                                {faq.question}
                                </Accordion.Header>
                
                                <Accordion.Body>
                                    <div className="blog-html-content" dangerouslySetInnerHTML={{ __html: faq.answer }}/>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>

                    <h2>Explore Our Other Outdoor Services in Bethesda</h2>
                    <p>DMV General Contracting Group integrates concrete with complete outdoor and home renovation projects across Bethesda:</p>
                    <ul style={{margin: '12px 0 24px 20px', color: '#1a6b9a', fontSize: '15px', lineHeight: 2}}>
                        <li><Link href="/service/decks" style={{color: '#1a6b9a'}}>Deck Building in Bethesda, MD</Link></li>
                        <li><Link href="/service/fence-installation" style={{color: '#1a6b9a'}}>Fence Installation in Bethesda, MD</Link></li>
                        <li><Link href="/service/home-additions" style={{color: '#1a6b9a'}}>Home Additions in Bethesda, MD</Link></li>
                        <li><Link href="/service/adu" style={{color: '#1a6b9a'}}>ADU Construction in Bethesda, MD</Link></li>
                        <li><Link href="/service/basement-remodeling" style={{color: '#1a6b9a'}}>Basement Remodeling in Bethesda, MD</Link></li>
                    </ul>

                    <div className="cta-banner">
                        <h2>Ready to Start Your Concrete Project in Bethesda?</h2>
                        <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free on-site estimate online. Available 7 days a week across Bethesda and the DMV area.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Concrete Estimate →</Link>
                    </div>
                
                </div>
            </StyledCom>
        </main>
    );
}