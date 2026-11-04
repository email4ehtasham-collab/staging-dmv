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

    .highlight { background: #ebf6ff; border-left: 4px solid var(--primary-color); padding: 16px 20px; border-radius: 0 8px 8px 0; margin: 20px 0; }
    .highlight p { margin: 0; font-size: 15px; color: var(--primary-color); }

    .style-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0 28px; }
    .style-card { padding: 20px 18px; background: #f9f5fd; border: 1px solid #deccee; border-radius: 12px; }
    .style-card .tag { display: inline-block; font-size: 11px; font-family: sans-serif; font-weight: 700; padding: 2px 8px; border-radius: 20px; background: var(--primary-color); color: #fff; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.04em; }
    .style-card h3 { font-size: 16px; font-family: sans-serif; margin: 0 0 6px; color: #111; font-weight: 700; }
    .style-card p { font-size: 13px; color: #555; margin: 0 0 8px; line-height: 1.6; }
    .style-card .best-for { font-size: 12px; font-family: sans-serif; color: var(--primary-color); font-weight: 600; }

    .pad-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin: 16px 0 24px; }
    .pad-box { padding: 16px 14px; background: #f9f5fd; border: 1px solid #deccee; border-radius: 10px; text-align: center; }
    .pad-box .icon { font-size: 34px; margin-bottom: 8px; }
    .pad-box h3 { font-size: 16px; font-family: sans-serif; font-weight: 700; color: var(--primary-color); margin: 0 0 6px; }
    .pad-box p { font-size: 14px; color: #666; margin: 0; line-height: 1.5; }

    .best { font-size: 10px; font-weight: 700; background: var(--primary-color); color: #fff; padding: 1px 6px; border-radius: 10px; margin-left: 4px; vertical-align: middle; }


    @media (max-width: 600px) {
        h1 { font-size: 26px; }
        .service-grid { grid-template-columns: 1fr; }
        .trust-grid { grid-template-columns: 1fr; }
        .cat-grid { grid-template-columns: 1fr; }
        .style-grid { grid-template-columns: 1fr;}
        .pad-grid {grid-template-columns: 1fr;}

        .main-image{height: 250px;}
        .cta-btn {  padding: 12px 12px; font-size: 14px; }
    }
`;

export default function CarpetInstallation({ data }) {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const faqData = [
        {
            question: "How much does carpet installation cost in Bethesda, MD?",
            answer:
            `Carpet installation in Bethesda typically costs $4–$12 per square foot installed, including padding and labor. A single bedroom runs $800–$2,400. A whole-home carpet installation across 1,500 sq ft typically costs $6,000–$18,000 depending on carpet grade, fiber type, and padding selection. Old carpet removal and disposal are included at no extra charge with DMV General Contracting Group. We provide free, itemized estimates before any work begins.`
        },
        {
            question: "What is the best carpet fiber for a Bethesda home?",
            answer:
            `For most Bethesda homes, nylon carpet is the best all-around choice — the most durable, most stain-resistant, and longest-lasting fiber available. For families with young children or pets, solution-dyed nylon or SmartStrand triexta offers stain protection built directly into the fiber — not just a surface coating. For bedrooms where softness is the priority and traffic is light, a quality polyester provides excellent comfort at a lower price point.`
        },
        {
            question: "How long does carpet installation take in Bethesda?",
            answer:
            `A single bedroom takes approximately half a day to one full day. A whole-home carpet installation across multiple rooms typically takes 1–2 days. Stair carpet adds time depending on step count and installation method. DMV General Contracting Group provides a detailed timeline with every estimate — we schedule installation to minimize disruption to your household and complete each area before moving to the next.`
        },
        {
            question: "Does DMV General Contracting Group remove old carpet before installing new carpet?",
            answer:
            `Yes — old carpet and padding removal and disposal are included at no extra charge with every carpet installation we perform in Bethesda. We also inspect and address the subfloor before installation begins, ensuring your new carpet has a solid, level, squeak-free base to lie on. You don't need to arrange separate removal or disposal.`
        },
        {
            question: "Can carpet be installed in a basement in Bethesda?",
            answer:
            `Yes — with the right product selection. For finished basements in Bethesda, we recommend moisture-resistant carpet paired with a waterproof barrier pad. For basements with any history of water intrusion, carpet tiles are a practical choice since individual tiles can be replaced if moisture damage occurs. We assess your basement's moisture conditions before recommending any carpet product to ensure it performs well long-term.`
        },
        {
            question: "What carpet padding should I choose for my Bethesda home?",
            answer:
            `For most Bethesda bedrooms and living areas, we recommend a minimum 7/16-inch thick, 6–8 lb density rebond foam pad — this is the sweet spot for comfort, carpet longevity, and value. For master bedrooms where maximum softness is the goal, a memory foam pad is an excellent upgrade. For stairs, use a 3/8-inch, 8 lb density pad to prevent premature wear at the stair nose. For basements, always use a moisture-barrier pad. We guide every homeowner through pad selection during the free consultation.`
        }
    ];

    return (
        <main className="page-wrapper">
            <NavitemActive nav="service" />
            <StyledCom className="service-detail-page">
                <div className="container">
                    {/* start */}
                        
                    <nav className="breadcrumb">
                        <Link href="/">Home</Link><span>›</span>
                        <Link href="/services">Services</Link><span>›</span>
                        Carpet Installation Bethesda, MD
                    </nav>

                    <div className="hero">
                        <h1>Carpet Installation & Replacement in Bethesda, MD</h1>
                        <div className="hero-meta">
                        <span className="hero-badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="hero-badge">✓ MHIC Licensed & Insured</span>
                            <span className="hero-badge">✓ DLCP Licensed</span>
                        <span className="hero-badge">✓ 1-Year Warranty</span>
                        <span className="hero-badge">✓ Free In-Home Estimate</span>
                        </div>
                    </div>

                    <div className="image-holder main-image">
                        <img src={`.${data.image}`} alt={data.title}/>
                    </div>

                    <div className="intro">
                        Looking for a professional <strong>carpet installer in Bethesda, MD</strong>? DMV General Contracting Group installs and replaces carpet for Bethesda homeowners across all room types — bedrooms, basements, stairs, home offices, and whole-home installations. From plush cut-pile for master bedrooms to durable loop carpet for high-traffic hallways, our experienced flooring team handles everything: old carpet removal, subfloor inspection and preparation, premium padding selection, and a clean, wrinkle-free installation with properly finished edges and transitions.
                    </div>

                    <h2>Carpet Installation Services We Offer in Bethesda, MD</h2>
                    <p>
                        DMV General Contracting Group provides a complete range of <strong>carpet installation and replacement services in Bethesda</strong>. Whether you're replacing one room or carpeting your entire home, our team delivers a smooth, professional result every time.
                    </p>

                    <div className="service-grid">
                        <div className="service-item">New Carpet Installation (All Styles)</div>
                        <div className="service-item">Full Home Carpet Replacement</div>
                        <div className="service-item">Bedroom Carpet Installation</div>
                        <div className="service-item">Basement Carpet Installation</div>
                        <div className="service-item">Stair Carpet Installation & Replacement</div>
                        <div className="service-item">Hallway & Landing Carpet</div>
                        <div className="service-item">Home Office Carpet Installation</div>
                        <div className="service-item">Old Carpet Removal & Disposal</div>
                        <div className="service-item">Subfloor Inspection & Repair</div>
                        <div className="service-item">Premium Carpet Padding Installation</div>
                        <div className="service-item">Carpet Stretching & Re-stretching</div>
                        <div className="service-item">Transition Strip & Threshold Installation</div>
                    </div>

                    <h2>Carpet Styles We Install in Bethesda, MD</h2>
                    <p>
                        The right carpet style affects how your room looks, feels underfoot, and holds up over time. Here are the main <strong>carpet styles</strong> we install for Bethesda homeowners — along with where each performs best:
                    </p>

                    <div className="style-grid">
                        <div className="style-card">
                        <span className="tag">Most Popular</span>
                        <h3>Plush / Cut Pile Carpet</h3>
                        <p>Soft, dense, and luxurious underfoot — cut pile is the most popular carpet style for Bethesda bedrooms and formal living spaces. The evenly cut fibers create a smooth, velvet-like surface that feels exceptional underfoot and looks elegant in any room.</p>
                        <div className="best-for">Best for: Master bedrooms, guest rooms, formal living rooms</div>
                        </div>
                        <div className="style-card">
                        <span className="tag">Most Durable</span>
                        <h3>Berber / Loop Pile Carpet</h3>
                        <p>Berber carpet uses uncut, looped fibers that are extremely durable and resistant to matting and crushing. Its low-profile, casual texture hides footprints and vacuum marks well — ideal for high-traffic areas. Available in flecked, multi-tone patterns that disguise everyday dirt and wear.</p>
                        <div className="best-for">Best for: Basements, hallways, family rooms, offices</div>
                        </div>
                        <div className="style-card">
                        <span className="tag">Casual & Cozy</span>
                        <h3>Frieze / Twisted Pile Carpet</h3>
                        <p>Frieze carpet features tightly twisted, curled fibers that give it a textured, casual appearance. The twisted construction helps the carpet resist crushing and matting — making it one of the most durable cut-pile styles available. Popular in Bethesda family rooms and kids' rooms.</p>
                        <div className="best-for">Best for: Family rooms, kids' bedrooms, playrooms, hallways</div>
                        </div>
                        <div className="style-card">
                        <span className="tag">Luxury Choice</span>
                        <h3>Patterned / Cut-and-Loop Carpet</h3>
                        <p>Cut-and-loop carpet combines cut and looped fibers to create geometric and sculptural patterns. The pattern variation also helps hide stains and footprints. A popular choice for Bethesda homeowners who want a more decorative carpet that adds visual interest to a room.</p>
                        <div className="best-for">Best for: Dining rooms, formal areas, statement bedrooms</div>
                        </div>
                        <div className="style-card">
                        <span className="tag">Stair Specialist</span>
                        <h3>Stair Carpet (Waterfall & Wrapped)</h3>
                        <p>Stair carpet installation requires specific techniques to ensure safety, durability, and a clean finish. We install both waterfall (carpet flows over the nose of each tread) and wrapped (carpet wraps around each tread and riser) styles — selecting the right pad thickness to prevent premature wear at the stair edge.</p>
                        <div className="best-for">Best for: All stair types — straight, L-shaped, curved</div>
                        </div>
                        <div className="style-card">
                        <span className="tag">Below Grade</span>
                        <h3>Basement Carpet & Carpet Tile</h3>
                        <p>Basements require moisture-aware carpet selection. We install moisture-resistant carpet over waterproof pad for finished basements in Bethesda — and recommend carpet tiles for areas with any history of water intrusion, since individual tiles can be replaced if moisture damage occurs.</p>
                        <div className="best-for">Best for: Finished basements, media rooms, basement bedrooms</div>
                        </div>
                    </div>

                    <h2>Carpet Fiber Comparison — Choosing the Right Material for Your Bethesda Home</h2>
                    <p>
                        The fiber a carpet is made from determines its durability, stain resistance, feel, and longevity. Here's an honest comparison of the most common <strong>carpet fiber types</strong> to help Bethesda homeowners make the right choice:
                    </p>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table fiber-table">
                                <tr>
                                <th>Fiber Type</th>
                                <th>Durability</th>
                                <th>Stain Resistance</th>
                                <th>Softness</th>
                                <th>Cost</th>
                                <th>Best For</th>
                                </tr>
                                <tr>
                                <td><strong>Nylon</strong> <span className="rec">Top Pick</span></td>
                                <td className="good">Excellent</td>
                                <td className="good">Excellent (especially solution-dyed)</td>
                                <td className="mid">Good</td>
                                <td className="mid">$$ – $$$</td>
                                <td>All rooms, high-traffic, stairs, pets</td>
                                </tr>
                                <tr>
                                <td><strong>Triexta (SmartStrand)</strong></td>
                                <td className="good">Excellent</td>
                                <td className="good">Outstanding — stain-proof fiber</td>
                                <td className="good">Very soft</td>
                                <td className="mid">$$ – $$$</td>
                                <td>Families with kids & pets</td>
                                </tr>
                                <tr>
                                <td><strong>Polyester (PET)</strong></td>
                                <td className="mid">Good</td>
                                <td className="good">Good — resists water-based stains</td>
                                <td className="good">Very soft</td>
                                <td className="good">$ – $$</td>
                                <td>Bedrooms, low-traffic rooms</td>
                                </tr>
                                <tr>
                                <td><strong>Olefin / Polypropylene</strong></td>
                                <td className="mid">Moderate</td>
                                <td className="good">Good</td>
                                <td className="mid">Moderate</td>
                                <td className="good">$</td>
                                <td>Basements, outdoor-adjacent areas</td>
                                </tr>
                                <tr>
                                <td><strong>Wool</strong></td>
                                <td className="good">Excellent</td>
                                <td className="mid">Moderate — needs treatment</td>
                                <td className="good">Luxuriously soft</td>
                                <td className="poor">$$$$</td>
                                <td>Luxury bedrooms, formal rooms</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="tip">
                        💡 <strong>Our Recommendation for Bethesda Families:</strong> For homes with children and pets, <strong>solution-dyed nylon or SmartStrand triexta</strong> is the clear winner — the stain resistance is built into the fiber itself, not just a surface coating that wears off. For bedrooms where traffic is light and softness is the priority, a quality polyester provides excellent comfort at a lower price point.
                    </div>

                    <h2>Carpet Padding — Why It Matters More Than Most Homeowners Realize</h2>
                    <p>
                        The carpet pad underneath your carpet is invisible — but it has an enormous impact on how your carpet feels, performs, and how long it lasts. Skimping on padding is one of the most common mistakes homeowners make when replacing carpet in Bethesda. Here's what to know:
                    </p>

                    <div className="pad-grid">
                        <div className="pad-box">
                        <div className="icon">🛋️</div>
                        <h3>Rebond Foam Pad</h3>
                        <p>The most common residential pad. A minimum 6–8 lb density at 7/16" thickness is recommended for Bethesda bedrooms and living areas. Higher density = longer carpet life.</p>
                        </div>
                        <div className="pad-box">
                        <div className="icon">☁️</div>
                        <h3>Memory Foam Pad</h3>
                        <p>Provides the softest, most luxurious underfoot feel. Popular in master bedrooms. Slightly more expensive than rebond but dramatically improves comfort.</p>
                        </div>
                        <div className="pad-box">
                        <div className="icon">🏗️</div>
                        <h3>Fiber / Felt Pad</h3>
                        <p>Dense, flat pad ideal for Berber loop carpet and commercial-style installations. Prevents the loops from snagging on a soft pad surface. Required for most Berber warranties.</p>
                        </div>
                        <div className="pad-box">
                        <div className="icon">💧</div>
                        <h3>Moisture-Barrier Pad</h3>
                        <p>For basements and pet-friendly homes — a plastic moisture barrier on the top surface prevents liquids from soaking through to the subfloor. Essential for below-grade carpet installations.</p>
                        </div>
                        <div className="pad-box">
                        <div className="icon">🪜</div>
                        <h3>Stair Pad</h3>
                        <p>Thinner (3/8"), denser pad specifically for stairs. Prevents the carpet from "bottoming out" on the stair nose with every step — which causes premature wear at the edge.</p>
                        </div>
                        <div className="pad-box">
                        <div className="icon">🔇</div>
                        <h3>Acoustic / Sound-Reduction Pad</h3>
                        <p>For multi-story Bethesda homes — acoustic carpet padding significantly reduces impact sound transmission between floors. Popular in master bedrooms above living spaces.</p>
                        </div>
                    </div>

                    <div className="highlight">
                        <p>💡 <strong>DMV General Contracting Group Padding Policy:</strong> We never install below-minimum padding to cut costs. Every carpet installation in Bethesda gets the right pad for the room, the carpet style, and how the space will be used. A better pad protects your carpet investment — and most carpet manufacturers require a minimum pad specification to honor their warranty.</p>
                    </div>

                    <h2>Which Rooms in Your Bethesda Home Should Have Carpet?</h2>
                    <p>
                        Carpet is not right for every room — but it is the best choice for specific spaces in Bethesda homes. Here's our room-by-room guide:
                    </p>
                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table room-table">
                                <tr>
                                <th>Room</th>
                                <th>Carpet?</th>
                                <th>Recommended Style</th>
                                <th>Notes</th>
                                </tr>
                                <tr>
                                <td><strong>Master Bedroom</strong></td>
                                <td>✅ Yes</td>
                                <td>Plush cut pile, high-end polyester or nylon</td>
                                <td>Warmth and softness underfoot — carpet excels in bedrooms</td>
                                </tr>
                                <tr>
                                <td><strong>Kids' Bedrooms</strong></td>
                                <td>✅ Yes</td>
                                <td>Frieze or solution-dyed nylon</td>
                                <td>Choose stain-resistant fiber for easy cleanup</td>
                                </tr>
                                <tr>
                                <td><strong>Guest Bedroom</strong></td>
                                <td>✅ Yes</td>
                                <td>Plush or frieze, any quality fiber</td>
                                <td>Low traffic — style and comfort can take priority</td>
                                </tr>
                                <tr>
                                <td><strong>Basement / Rec Room</strong></td>
                                <td>✅ Yes (with right product)</td>
                                <td>Moisture-resistant carpet or carpet tile</td>
                                <td>Waterproof pad is essential — assess moisture first</td>
                                </tr>
                                <tr>
                                <td><strong>Stairs</strong></td>
                                <td>✅ Yes</td>
                                <td>Durable nylon or triexta, low-pile</td>
                                <td>High-traffic — use denser pad, avoid plush or loose loops</td>
                                </tr>
                                <tr>
                                <td><strong>Home Office</strong></td>
                                <td>⚠️ Depends</td>
                                <td>Loop/Berber if using a rolling desk chair</td>
                                <td>Plush carpets and rolling chairs don't work well together</td>
                                </tr>
                                <tr>
                                <td><strong>Kitchen</strong></td>
                                <td>❌ No</td>
                                <td>—</td>
                                <td>Moisture and spills — use LVP or tile instead</td>
                                </tr>
                                <tr>
                                <td><strong>Bathroom</strong></td>
                                <td>❌ No</td>
                                <td>—</td>
                                <td>Moisture environment — tile or LVP only</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <h2>Carpet Installation Cost in Bethesda, MD</h2>
                    <p>
                        Here is a detailed breakdown of <strong>carpet installation costs in Bethesda, Maryland</strong> — including old carpet removal, padding, and labor:
                    </p>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <tr>
                                <th>Project</th>
                                <th>Typical Cost Range</th>
                                <th>Notes</th>
                                </tr>
                                <tr>
                                <td>Single Bedroom (approx. 200 sq ft)</td>
                                <td>$800 – $2,400</td>
                                <td>Includes removal, pad, and installation</td>
                                </tr>
                                <tr>
                                <td>Master Bedroom (approx. 300 sq ft)</td>
                                <td>$1,200 – $3,600</td>
                                <td>Higher-grade carpet increases cost significantly</td>
                                </tr>
                                <tr>
                                <td>Basement (approx. 800 sq ft)</td>
                                <td>$3,200 – $8,000</td>
                                <td>Moisture-barrier pad recommended for basements</td>
                                </tr>
                                <tr>
                                <td>Whole-Home Carpet (1,500 sq ft)</td>
                                <td>$6,000 – $18,000</td>
                                <td>Varies widely by carpet grade and fiber type</td>
                                </tr>
                                <tr>
                                <td>Stair Carpet (per step)</td>
                                <td>$75 – $200 per step</td>
                                <td>Wrapped installation costs more than waterfall</td>
                                </tr>
                                <tr>
                                <td>Carpet Stretching / Re-stretching</td>
                                <td>$150 – $500</td>
                                <td>For existing carpet that has buckled or wrinkled</td>
                                </tr>
                                <tr>
                                <td>Old Carpet Removal Only</td>
                                <td>$1 – $2 per sq ft</td>
                                <td>Included free when installing new carpet with us</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <p>
                        Carpet installation costs vary based on carpet grade, fiber type, pad selection, room shape complexity, and furniture moving requirements. DMV General Contracting Group provides <strong>free, detailed carpet estimates</strong> for every Bethesda project — with a full breakdown of carpet, padding, and labor costs before any work begins.
                    </p>

                    <div className="cta-banner">
                        <h2>Get a Free Carpet Estimate for Your Bethesda Home</h2>
                        <p>We'll visit your home, measure every room, help you choose the right carpet and padding, and provide an exact quote — at no cost and no obligation.</p>
                        <Link href="/contact" className="cta-btn">Schedule Free Carpet Consultation →</Link>
                    </div>

                    <h2>Why Bethesda Homeowners Choose DMV General Contracting Group for Carpet Installation</h2>
                    <p>
                        A poor carpet installation — stretched incorrectly, seamed in the wrong place, installed over a bad subfloor, or paired with inadequate padding — shows within months. Buckles, visible seams, premature wear, and soft spots are the hallmarks of a rushed job. DMV General Contracting Group's carpet installers are experienced craftsmen who take the time to do the job right.
                    </p>

                    <div className="trust-grid">
                        <div className="trust-box">
                        <div className="icon">📐</div>
                        <strong>Precise Measuring & Seam Planning</strong>
                        <span>Seams placed where they'll be least visible and least trafficked</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">🔧</div>
                        <strong>Subfloor Prep Included</strong>
                        <span>We inspect and repair squeaks, soft spots, and uneven areas before installation</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">🛡️</div>
                        <strong>Licensed & Warrantied</strong>
                        <span>MHIC licensed, insured, and 1-year workmanship warranty on all installations</span>
                        </div>
                    </div>

                    <h2>Our Carpet Installation Process in Bethesda</h2>
                    <p>
                        Here is exactly how DMV General Contracting Group handles your <strong>carpet installation in Bethesda</strong> — from free estimate to finished room:
                    </p>

                    <div className="steps">
                        <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free In-Home Estimate & Room Measurement</h3>
                            <p>We visit your Bethesda home, measure all rooms accurately (including closets and alcoves), assess your subfloor condition, and walk you through carpet styles, fiber options, and padding grades — at no charge. We bring samples so you can see colors and textures in your home's actual lighting.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Carpet & Padding Selection</h3>
                            <p>We help you choose the right carpet style, fiber, pile height, and color for each room — along with the appropriate padding grade. We provide a detailed written quote showing carpet cost, padding cost, and labor separately so you understand exactly what you're paying for.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Old Carpet Removal & Disposal</h3>
                            <p>On installation day, we remove all existing carpet and padding, pull up tack strips if they need to be replaced, and dispose of all old materials. Old carpet removal and disposal are included at no extra charge when you install new carpet with DMV General Contracting Group.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Subfloor Inspection & Preparation</h3>
                            <p>We inspect the bare subfloor for squeaks, soft spots, raised nail heads, and uneven areas. Any issues are addressed before the pad goes down — a smooth, solid subfloor is essential for a carpet that stays wrinkle-free and performs well long-term.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Padding & Tack Strip Installation</h3>
                            <p>New tack strips are installed around the room perimeter. Padding is cut to fit precisely within the tack strips and secured flat to the subfloor — no overlaps, no gaps, no bubbles. The right pad installation is what gives carpet its smooth, even feel from wall to wall.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Carpet Installation, Seaming & Stretching</h3>
                            <p>We lay the carpet with seams planned to be as invisible as possible — placed in low-traffic areas and following the room's natural light direction. Carpet is power-stretched to the tack strips to eliminate any future buckling. Seams are heat-bonded and hand-blended for the cleanest possible finish.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">7</div>
                        <div className="step-content">
                            <h3>Transitions, Trim & Final Walkthrough</h3>
                            <p>All transition strips and door thresholds between carpet and hard flooring are installed cleanly. We trim any excess carpet at doorways and closet entries, vacuum the new carpet, and do a final walkthrough with you — reviewing every seam and edge before we leave.</p>
                        </div>
                        </div>
                    </div>

                    <h2>Carpet vs. Hardwood — Making the Right Choice for Each Room</h2>
                    <p>
                        A common question among Bethesda homeowners planning a renovation is whether to carpet or hardwood a particular room. Here's the honest answer — and it's not one-size-fits-all:
                    </p>
                    <p>
                        <strong>Carpet wins</strong> in bedrooms for comfort, warmth, acoustic softness (great for sleeping), and cost. There is simply nothing as comfortable underfoot in the morning as quality plush carpet. Carpet also wins in basements for the same reasons — it transforms a cold, hard space into a warm, livable room.
                    </p>
                    <p>
                        <strong>Hardwood wins</strong> in main living areas — living rooms, dining rooms, hallways, and kitchens — for resale value, durability, and ease of cleaning. Bethesda buyers consistently prioritize hardwood in these spaces, and it adds more measurable home value than carpet.
                    </p>
                    <p>
                        The smartest approach for most Bethesda homes: hardwood or LVP in all main living areas and hallways, carpet in all bedrooms and the finished basement. DMV General Contracting Group handles both — and can coordinate a whole-home flooring project that includes both carpet and hardwood in the same timeline.
                    </p>

                    <h2>Serving Bethesda and Surrounding Areas for Carpet Installation</h2>
                    <p>
                        In addition to <strong>carpet installation in Bethesda, MD</strong>, our licensed flooring team serves homeowners throughout Montgomery County and the greater DMV area:
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
                        <h3>Carpet installation in Chevy Chase & Potomac, MD</h3>
                        <p>Chevy Chase and Potomac homeowners frequently request high-end carpet installations — luxury plush for master bedroom suites, premium wool for formal spaces, and durable nylon for finished basements and staircases. DMV General Contracting Group regularly installs carpet throughout both communities and is experienced with the older home construction common in these areas, including concrete subfloors and multi-story configurations that require careful seam planning.</p>
                    </div>

                    <div className="nearby">
                        <h3>Bedroom and basement carpet in Rockville & Silver Spring, MD</h3>
                        <p>We install carpet in bedrooms, basements, and whole-home replacement projects throughout Rockville, Kensington, Silver Spring, and Wheaton — serving the full range of Montgomery County's housing stock. Whether it's a single master bedroom or a complete four-bedroom home recarpeting, DMV General Contracting Group delivers the same quality installation across every project.</p>
                    </div>

                    <h2>Frequently Asked Questions — Carpet Installation in Bethesda, MD</h2>
                    
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

                    <h2>Explore Our Other Flooring Services in Bethesda</h2>
                    <p>DMV General Contracting Group handles all flooring types — carpet and hard surface — for complete home flooring projects across Bethesda:</p>
                    <ul style={{margin: '12px 0 24px 20px', color: '#1a6b9a', fontSize: '15px', lineHeight: 2}}>
                        <li><Link href="/service/flooring-remodeling" style={{color: '#1a6b9a'}}>Hardwood, LVP & Tile Flooring Installation in Bethesda, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling" style={{color: '#1a6b9a'}}>Bathroom Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/basement-remodeling" style={{color: '#1a6b9a'}}>Basement Finishing & Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/kitchen-remodeling" style={{color: '#1a6b9a'}}>Kitchen Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/home-additions" style={{color: '#1a6b9a'}}>Home Additions in Bethesda, MD</Link></li>
                    </ul>

                    <div className="cta-banner">
                        <h2>Ready to Install New Carpet in Your Bethesda Home?</h2>
                        <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home estimate online. Available 7 days a week across Bethesda and the DMV area.</p>
                        <Link href="/contact-us" style={{color: '#1a6b9a', textDecoration: 'underline'}}>Get Free Carpet Installation Estimate →</Link>
                    </div>

                    {/* end */}
                </div>
            </StyledCom>
        </main>
    );
}