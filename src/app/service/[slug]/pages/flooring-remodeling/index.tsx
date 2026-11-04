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

    .floor-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0 28px; }
    .floor-card { padding: 20px 18px; background: #f5fbf5; border: 1px solid #cce6cc; border-radius: 12px; }
    .floor-card .tag { display: inline-block; font-size: 11px; font-family: sans-serif; font-weight: 700; padding: 2px 8px; border-radius: 20px; background: var(--primary-color); color: #fff; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.04em; }
    .floor-card h3 { font-size: 16px; font-family: sans-serif; margin: 0 0 6px; color: #111; font-weight: 700; }
    .floor-card p { font-size: 13px; color: #555; margin: 0 0 10px; line-height: 1.6; }
    .floor-card .meta { display: flex; gap: 14px; flex-wrap: wrap; }
    .floor-card .meta span { font-size: 12px; font-family: sans-serif; color: #777; }
    .floor-card .meta strong { color: #5D4037; }



    @media (max-width: 600px) {
        h1 { font-size: 26px; }
        .service-grid { grid-template-columns: 1fr; }
        .trust-grid { grid-template-columns: 1fr; }
        .cat-grid { grid-template-columns: 1fr; }
        .floor-grid { grid-template-columns: 1fr; }


        .main-image{height: 250px;}
        .cta-btn {  padding: 12px 12px; font-size: 14px; }
    }
`;

export default function FlooringRemodeling({ data }) {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const faqData = [
        {
            question: "How much does hardwood flooring installation cost in Bethesda, MD?",
            answer:
            `In Bethesda, hardwood flooring installation typically costs $8–$15 per square foot installed for solid hardwood, and $6–$12 per square foot for engineered hardwood. For a typical 1,000 sq ft main floor, expect to pay $8,000–$15,000 for solid hardwood fully installed. Costs vary based on wood species, grade, subfloor condition, and room layout. DMV General Contracting Group provides free in-home estimates with exact, itemized pricing before any work begins.`
        },
        {
            question: "What is the best flooring for a Bethesda home?",
            answer:
            `The best flooring for your Bethesda home depends on the room and your priorities. Hardwood adds the most resale value and works beautifully in living rooms, dining rooms, and bedrooms. LVP is the most practical choice for kitchens, bathrooms, and basements — it's 100% waterproof and extremely durable. Porcelain tile is the top choice for bathrooms and mudrooms. Our recommendation: hardwood in main living areas, LVP in wet/below-grade areas. This combination gives you the best of both worlds.`
        },
        {
            question: "Can hardwood floors be installed in a basement in Bethesda?",
            answer:
            `Solid hardwood is not recommended for basements due to moisture concerns — it will swell, warp, and buckle below grade. Engineered hardwood can work with proper moisture barriers. However, luxury vinyl plank (LVP) is the clear best choice for Bethesda basements — it is 100% waterproof, handles temperature fluctuations, and looks virtually identical to real hardwood. Most Bethesda homeowners who want a wood look in their finished basement choose LVP.`
        },
        {
            question: "How long does flooring installation take in Bethesda?",
            answer:
            `A single room typically takes 1–2 days. A whole-home flooring replacement across 1,500–3,000 sq ft usually takes 3–7 days depending on the material and subfloor condition. Hardwood refinishing takes 3–5 days including dry time between coats. DMV General Contracting Group provides a detailed schedule at the time of your estimate so you know exactly what to expect.`
        },
        {
            question: "Does DMV General Contracting Group refinish hardwood floors in Bethesda?",
            answer:
            `Yes. We offer professional hardwood floor refinishing throughout Bethesda and Montgomery County. If your existing hardwood floors are structurally sound but look worn, scratched, or dated, refinishing is a cost-effective alternative to full replacement. We sand, stain (any color), and apply fresh coats of polyurethane or oil finish — transforming worn floors to like-new condition for $3–$6 per square foot.`
        },
        {
            question: "Is LVP flooring a good choice for Bethesda homes?",
            answer:
            `Yes — LVP is one of the most popular flooring choices for Bethesda homeowners right now, and for good reason. It is 100% waterproof, scratch-resistant, easy to clean, comfortable underfoot, and available in highly realistic wood and stone looks. It performs exceptionally well in every room of the house and costs significantly less than hardwood. For families with kids and pets in Bethesda, LVP is often the smartest choice for the main living areas as well.`
        },
        
    ];

    return (
        <main className="page-wrapper">
                <NavitemActive nav="service" />
            <StyledCom className="service-detail-page">
                <div className="container">
            
                    <nav className="breadcrumb">
                        <Link href="/">Home</Link><span>›</span>
                        <Link href="/services">Services</Link><span>›</span>
                        Flooring Installation Bethesda, MD
                    </nav>

                    <div className="hero">
                        <h1>Flooring Installation & Replacement in Bethesda, MD</h1>
                        <div className="hero-meta">
                        <span className="hero-badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="hero-badge">✓ MHIC Licensed & Insured</span>
                            <span className="hero-badge">✓ DLCP Licensed</span>
                        <span className="hero-badge">✓ 1-Year Warranty</span>
                        <span className="hero-badge">✓ Free In-Home Consultation</span>
                        </div>
                    </div>

                    <div className="image-holder main-image">
                        <img src={`.${data.image}`} alt={data.title}/>
                    </div>

                    <div className="intro">
                        Looking for a trusted <strong>flooring contractor in Bethesda, MD</strong>? DMV General Contracting Group installs, replaces, and refinishes all types of flooring for Bethesda homeowners — hardwood, luxury vinyl plank (LVP), porcelain and ceramic tile, laminate, and carpet. Whether you're replacing worn floors throughout your entire home or upgrading a single room, our experienced flooring team delivers clean, precise installations with zero shortcuts. We handle everything from subfloor prep to final trim and transitions.
                    </div>

                    <h2>Flooring Services We Offer in Bethesda, MD</h2>
                    <p>
                        DMV General Contracting Group provides a complete range of <strong>flooring installation and replacement services in Bethesda</strong>. Our in-house flooring team has the experience to work with every major flooring type — and the knowledge to recommend the right material for each room, your lifestyle, and your budget.
                    </p>

                    <div className="service-grid">
                        <div className="service-item">Hardwood Floor Installation (Solid & Engineered)</div>
                        <div className="service-item">Hardwood Floor Refinishing & Resanding</div>
                        <div className="service-item">Luxury Vinyl Plank (LVP) Installation</div>
                        <div className="service-item">Laminate Flooring Installation</div>
                        <div className="service-item">Porcelain & Ceramic Tile Installation</div>
                        <div className="service-item">Natural Stone Tile (Marble, Travertine, Slate)</div>
                        <div className="service-item">Carpet Installation & Replacement</div>
                        <div className="service-item">Floor Removal & Subfloor Repair</div>
                        <div className="service-item">Radiant Heated Floor Installation</div>
                        <div className="service-item">Whole-Home Flooring Replacement</div>
                        <div className="service-item">Stair Tread & Riser Replacement</div>
                        <div className="service-item">Transition Strip & Threshold Installation</div>
                    </div>

                    <h2>Flooring Types We Install in Bethesda, MD</h2>
                    <p>
                        Choosing the right flooring type is one of the most impactful decisions you can make for your Bethesda home — it affects how your space looks, feels, and holds up over time. Here are the main <strong>flooring materials</strong> we install across Bethesda and Montgomery County:
                    </p>

                    <div className="floor-grid">
                        <div className="floor-card">
                        <span className="tag">Most Valuable</span>
                        <h3>Hardwood Flooring</h3>
                        <p>Solid or engineered hardwood is the gold standard for Bethesda homes. It adds timeless beauty, warmth, and measurable resale value. Available in oak, maple, walnut, hickory, and more — in dozens of stain colors and finishes. Solid hardwood can be refinished multiple times over its lifetime.</p>
                        <div className="meta">
                            <span><strong>Lifespan:</strong> 50–100 years</span>
                            <span><strong>Cost:</strong> $8–$15/sq ft installed</span>
                        </div>
                        </div>
                        <div className="floor-card">
                        <span className="tag">Most Popular Now</span>
                        <h3>Luxury Vinyl Plank (LVP)</h3>
                        <p>The fastest-growing flooring choice in Bethesda. 100% waterproof, scratch-resistant, comfortable underfoot, and available in ultra-realistic wood and stone looks. Perfect for kitchens, bathrooms, basements, and homes with pets or children. Significantly less expensive than hardwood.</p>
                        <div className="meta">
                            <span><strong>Lifespan:</strong> 20–30 years</span>
                            <span><strong>Cost:</strong> $5–$10/sq ft installed</span>
                        </div>
                        </div>
                        <div className="floor-card">
                        <span className="tag">Best for Wet Areas</span>
                        <h3>Porcelain & Ceramic Tile</h3>
                        <p>The top choice for bathrooms, kitchens, mudrooms, and laundry rooms in Bethesda. Porcelain is harder, less porous, and more durable than ceramic — ideal for high-traffic areas. Available in wood-look, stone-look, and modern large-format designs up to 24"×48".</p>
                        <div className="meta">
                            <span><strong>Lifespan:</strong> 50+ years</span>
                            <span><strong>Cost:</strong> $8–$18/sq ft installed</span>
                        </div>
                        </div>
                        <div className="floor-card">
                        <span className="tag">Budget Friendly</span>
                        <h3>Laminate Flooring</h3>
                        <p>A cost-effective alternative to hardwood with a realistic wood appearance. Modern laminate is durable, easy to maintain, and available in a wide range of styles. Best for above-grade living areas, bedrooms, and home offices in Bethesda homes.</p>
                        <div className="meta">
                            <span><strong>Lifespan:</strong> 15–25 years</span>
                            <span><strong>Cost:</strong> $4–$8/sq ft installed</span>
                        </div>
                        </div>
                        <div className="floor-card">
                        <span className="tag">Bedroom Comfort</span>
                        <h3>Carpet</h3>
                        <p>Carpet remains a popular choice for Bethesda bedrooms and finished basements — soft underfoot, warm, and sound-absorbing. Available in a wide range of pile styles, colors, and fibers (nylon, polyester, wool). We install carpet with professional-grade pad for maximum comfort and longevity.</p>
                        <div className="meta">
                            <span><strong>Lifespan:</strong> 10–15 years</span>
                            <span><strong>Cost:</strong> $4–$10/sq ft installed</span>
                        </div>
                        </div>
                        <div className="floor-card">
                        <span className="tag">Luxury Option</span>
                        <h3>Natural Stone (Marble & Travertine)</h3>
                        <p>Marble, travertine, slate, and limestone tile for Bethesda homeowners who want the ultimate in luxury and uniqueness. Each piece is naturally one-of-a-kind. Most popular in master bathrooms, entryways, and high-end kitchen installations across Bethesda's upscale neighborhoods.</p>
                        <div className="meta">
                            <span><strong>Lifespan:</strong> 50–100 years</span>
                            <span><strong>Cost:</strong> $12–$25/sq ft installed</span>
                        </div>
                        </div>
                    </div>

                    <h2>Best Flooring by Room — Guide for Bethesda Homeowners</h2>
                    <p>
                        Not every flooring type works in every room. Here's our room-by-room guide to help Bethesda homeowners choose the <strong>best flooring for each space</strong> in their home:
                    </p>
                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <tr>
                                <th>Room</th>
                                <th>Best Choice</th>
                                <th>Why</th>
                                <th>Avoid</th>
                                </tr>
                                <tr>
                                <td><strong>Living Room</strong></td>
                                <td>Hardwood <span className="rec">Top Pick</span></td>
                                <td>Adds the most value; timeless look; refinishable for decades</td>
                                <td>Carpet (harder to clean)</td>
                                </tr>
                                <tr>
                                <td><strong>Kitchen</strong></td>
                                <td>LVP or Porcelain Tile <span className="rec">Top Pick</span></td>
                                <td>Waterproof, easy to clean, stands up to heavy foot traffic and spills</td>
                                <td>Solid hardwood, carpet</td>
                                </tr>
                                <tr>
                                <td><strong>Master Bedroom</strong></td>
                                <td>Hardwood or Carpet</td>
                                <td>Hardwood for value; carpet for warmth and quiet underfoot comfort</td>
                                <td>Tile (cold, hard)</td>
                                </tr>
                                <tr>
                                <td><strong>Bathroom</strong></td>
                                <td>Porcelain Tile <span className="rec">Top Pick</span></td>
                                <td>Waterproof, slip-resistant, hygienic, and virtually maintenance-free</td>
                                <td>Hardwood, laminate, carpet</td>
                                </tr>
                                <tr>
                                <td><strong>Basement</strong></td>
                                <td>LVP <span className="rec">Top Pick</span></td>
                                <td>100% waterproof, handles moisture and temperature swings, realistic wood look</td>
                                <td>Solid hardwood, laminate</td>
                                </tr>
                                <tr>
                                <td><strong>Mudroom / Entryway</strong></td>
                                <td>Porcelain Tile or LVP</td>
                                <td>Durability against dirt, water, and heavy foot traffic from outside</td>
                                <td>Carpet, hardwood (scratches easily)</td>
                                </tr>
                                <tr>
                                <td><strong>Kids' Bedroom</strong></td>
                                <td>LVP or Carpet</td>
                                <td>LVP for durability; carpet for softness and play comfort</td>
                                <td>Natural stone (hard, expensive)</td>
                                </tr>
                                <tr>
                                <td><strong>Home Office</strong></td>
                                <td>Hardwood or LVP</td>
                                <td>Professional look; easy to keep clean; works well with desk chairs</td>
                                <td>Carpet (chair wheels sink in)</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <h2>Hardwood vs. LVP — Which Is Right for Your Bethesda Home?</h2>
                    <p>
                        The most common question we hear from Bethesda homeowners is: <strong><em>"Should I go with hardwood or LVP?"</em></strong> Both are excellent choices — but the right answer depends on your situation. Here's an honest comparison:
                    </p>

                    <table className="cost-table">
                        <tr>
                        <th>Factor</th>
                        <th>Solid Hardwood</th>
                        <th>Luxury Vinyl Plank (LVP)</th>
                        </tr>
                        <tr>
                        <td><strong>Cost (installed)</strong></td>
                        <td className="mid">$8–$15/sq ft</td>
                        <td className="good">$5–$10/sq ft</td>
                        </tr>
                        <tr>
                        <td><strong>Water resistance</strong></td>
                        <td className="poor">Low — swells with moisture</td>
                        <td className="good">100% waterproof</td>
                        </tr>
                        <tr>
                        <td><strong>Durability (scratches)</strong></td>
                        <td className="mid">Moderate — shows wear over time</td>
                        <td className="good">High — scratch-resistant wear layer</td>
                        </tr>
                        <tr>
                        <td><strong>Refinishable</strong></td>
                        <td className="good">Yes — multiple times</td>
                        <td className="poor">No — must replace when worn</td>
                        </tr>
                        <tr>
                        <td><strong>Lifespan</strong></td>
                        <td className="good">50–100 years with refinishing</td>
                        <td className="mid">20–30 years</td>
                        </tr>
                        <tr>
                        <td><strong>Home resale value</strong></td>
                        <td className="good">Higher — buyers prefer hardwood</td>
                        <td className="mid">Good — modern buyers accept LVP</td>
                        </tr>
                        <tr>
                        <td><strong>Best rooms</strong></td>
                        <td>Living room, dining room, bedrooms</td>
                        <td>Kitchen, bath, basement, all rooms</td>
                        </tr>
                        <tr>
                        <td><strong>Pet & kid friendly</strong></td>
                        <td className="mid">Moderate</td>
                        <td className="good">Excellent</td>
                        </tr>
                    </table>

                    <div className="tip">
                        💡 <strong>Our Recommendation for Bethesda:</strong> If budget allows, install <strong>hardwood in main living areas</strong> (living room, dining room, hallways) and <strong>LVP in the kitchen, bathrooms, and basement</strong>. This gives you the resale value of hardwood where buyers will notice it most, and the practical benefits of LVP in moisture-prone areas. This combination is the most popular whole-home flooring approach among Bethesda homeowners we work with.
                    </div>

                    <h2>Hardwood Floor Refinishing in Bethesda, MD</h2>
                    <p>
                        If your Bethesda home has existing hardwood floors that look worn, faded, scratched, or dated, <strong>hardwood floor refinishing</strong> may be all you need — no full replacement required. DMV General Contracting Group offers professional hardwood refinishing throughout Bethesda and Montgomery County.
                    </p>
                    <p>
                        Our refinishing process includes thorough sanding to remove the old finish, stain, and surface scratches, followed by your choice of new stain color (from natural/clear to rich dark walnut) and multiple coats of fresh polyurethane or oil finish. The result is floors that look brand new at a fraction of the cost of replacement.
                    </p>

                    <div className="highlight">
                        <p>💰 <strong>Refinishing vs. Replacement:</strong> Hardwood refinishing in Bethesda typically costs <strong>$3–$6 per square foot</strong> — compared to $8–$15 per square foot for new hardwood installation. If your existing hardwood is structurally sound, refinishing is almost always the smarter financial choice.</p>
                    </div>

                    <h2>Flooring Installation Cost in Bethesda, MD</h2>
                    <p>
                        Here is a detailed cost guide for <strong>flooring installation in Bethesda, Maryland</strong>. All prices are installed costs (materials + labor) and reflect current Montgomery County market rates:
                    </p>

                    <table className="cost-table">
                        <tr>
                        <th>Flooring Type</th>
                        <th>Installed Cost (per sq ft)</th>
                        <th>1,000 Sq Ft Estimate</th>
                        </tr>
                        <tr>
                        <td>Solid Hardwood</td>
                        <td>$8 – $15</td>
                        <td>$8,000 – $15,000</td>
                        </tr>
                        <tr>
                        <td>Engineered Hardwood</td>
                        <td>$6 – $12</td>
                        <td>$6,000 – $12,000</td>
                        </tr>
                        <tr>
                        <td>Luxury Vinyl Plank (LVP)</td>
                        <td>$5 – $10</td>
                        <td>$5,000 – $10,000</td>
                        </tr>
                        <tr>
                        <td>Laminate</td>
                        <td>$4 – $8</td>
                        <td>$4,000 – $8,000</td>
                        </tr>
                        <tr>
                        <td>Porcelain / Ceramic Tile</td>
                        <td>$8 – $18</td>
                        <td>$8,000 – $18,000</td>
                        </tr>
                        <tr>
                        <td>Natural Stone (Marble / Travertine)</td>
                        <td>$12 – $25</td>
                        <td>$12,000 – $25,000</td>
                        </tr>
                        <tr>
                        <td>Carpet</td>
                        <td>$4 – $10</td>
                        <td>$4,000 – $10,000</td>
                        </tr>
                        <tr>
                        <td>Hardwood Refinishing</td>
                        <td>$3 – $6</td>
                        <td>$3,000 – $6,000</td>
                        </tr>
                    </table>

                    <p>
                        Flooring costs vary based on subfloor condition, room complexity, furniture moving requirements, and the specific product selected. DMV General Contracting Group provides <strong>free, detailed flooring estimates</strong> for every project — with no hidden fees and no surprises on your final invoice.
                    </p>

                    <div className="cta-banner">
                        <h2>Get a Free Flooring Estimate in Bethesda</h2>
                        <p>Our team will visit your home, measure every room, assess your subfloor, and provide a detailed material-by-material estimate — free of charge, with no obligation.</p>
                        <Link href="/contact-us" className="cta-btn">Schedule Free Flooring Consultation →</Link>
                    </div>

                    <h2>Why Bethesda Homeowners Choose DMV General Contracting Group for Flooring</h2>
                    <p>
                        Flooring is one of the most visible elements in your home — and a poor installation shows immediately. Gaps, uneven seams, hollow spots, and crooked patterns are signs of a rushed job. DMV General Contracting Group's flooring installers are detail-focused craftsmen who take pride in every floor they put down.
                    </p>

                    <div className="trust-grid">
                        <div className="trust-box">
                        <div className="icon">🔨</div>
                        <strong>Expert Installation</strong>
                        <span>Experienced in hardwood, LVP, tile, laminate, and carpet</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">📐</div>
                        <strong>Subfloor Prep Included</strong>
                        <span>We assess and repair subfloor issues before installation begins</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">🛡️</div>
                        <strong>Licensed & Warrantied</strong>
                        <span>MHIC licensed, insured, and 1-year workmanship warranty</span>
                        </div>
                    </div>

                    <p>
                        As a full-service design-build contractor, DMV General Contracting Group is uniquely positioned to handle flooring as part of a larger renovation — or as a standalone flooring-only project. If you're remodeling your kitchen or bathroom at the same time, we coordinate flooring installation seamlessly with the rest of your project so trades don't conflict and your timeline stays on track.
                    </p>

                    <h2>Our Flooring Installation Process in Bethesda</h2>
                    <p>
                        Here's exactly how DMV General Contracting Group handles your <strong>flooring project in Bethesda</strong> — from first visit to final trim:
                    </p>

                    <div className="steps">
                        <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free In-Home Consultation & Measurement</h3>
                            <p>We visit your Bethesda home, measure all rooms, assess your existing subfloor condition, and walk through material options with you — in person, at no charge. We bring samples so you can see colors in your own lighting.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Material Selection & Detailed Estimate</h3>
                            <p>We provide a detailed written estimate broken down by room and material. Once you approve, we order your materials — we work with trusted suppliers to source quality flooring at competitive prices.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Subfloor Preparation</h3>
                            <p>Before any new flooring goes down, we remove old flooring, inspect and repair the subfloor, fill any gaps or soft spots, and ensure the surface is level. A properly prepared subfloor is the foundation of a long-lasting installation.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Professional Installation</h3>
                            <p>Our experienced installers lay your flooring with precise cuts, tight seams, proper expansion gaps, and clean transitions between rooms and materials. We protect your walls, cabinets, and furniture throughout the process.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Trim, Transitions & Final Cleanup</h3>
                            <p>We install all baseboards, quarter rounds, transition strips, and thresholds for a polished, finished look. We do a thorough cleanup of all debris and dust before our final walkthrough with you.</p>
                        </div>
                        </div>
                    </div>

                    <h2>Serving Bethesda and Surrounding Areas for Flooring Installation</h2>
                    <p>
                        In addition to <strong>flooring installation in Bethesda, MD</strong>, our licensed team serves homeowners throughout Montgomery County and the greater DMV area:
                    </p>

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
                        <h3>Hardwood flooring installation in Chevy Chase & Potomac, MD</h3>
                        <p>Chevy Chase and Potomac homeowners have some of the highest demand for premium hardwood flooring near Bethesda. We regularly install and refinish hardwood floors throughout both communities — from traditional oak in classic colonials to wide-plank white oak in contemporary builds. Our team is familiar with the older home stock in both areas and the specific subfloor challenges they present.</p>
                    </div>

                    <div className="nearby">
                        <h3>LVP and tile flooring in Rockville & Kensington, MD</h3>
                        <p>We install luxury vinyl plank, laminate, and tile flooring throughout Rockville, Kensington, and Silver Spring for homeowners looking for durable, cost-effective flooring solutions. Whether it's a single room or a whole-home replacement, DMV General Contracting Group delivers the same quality and attention to detail across every project.</p>
                    </div>

                    <h2>Frequently Asked Questions — Flooring Installation in Bethesda, MD</h2>

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

                    <h2>Explore Our Other Remodeling Services in Bethesda</h2>
                    <p>DMV General Contracting Group offers a full range of home remodeling and renovation services across Bethesda and the DMV area:</p>
                    <ul style={{margin: '12px 0 24px 20px', color: '#1a6b9a', fontSize: '15px', lineHeight: 2}}>
                        <li><Link href="/service/kitchen-remodeling" style={{color: '#1a6b9a'}}>Kitchen Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling" style={{color: '#1a6b9a'}}>Bathroom Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/basement-remodeling" style={{color: '#1a6b9a'}}>Basement Finishing & Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/home-additions" style={{color: '#1a6b9a'}}>Home Additions in Bethesda, MD</Link></li>
                        <li><Link href="/service/decks" style={{color: '#1a6b9a'}}>Deck Building in Bethesda, MD</Link></li>
                    </ul>

                    <div className="cta-banner">
                        <h2>Ready to Transform Your Bethesda Home's Floors?</h2>
                        <p>Call us at <strong>+1 240-730-1292</strong> or book your free in-home flooring consultation online. Available 7 days a week across Bethesda and the DMV area.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Flooring Estimate →</Link>
                    </div>
                </div>
            </StyledCom>
        </main>
    );
}