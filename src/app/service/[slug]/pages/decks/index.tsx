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

    .deck-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0 28px; }
    .deck-card { padding: 22px 18px; background: #ebf6ff; border: 1px solid #cbe5fb; border-radius: 12px; }
    .deck-card .tag { display: inline-block; font-size: 11px; font-family: sans-serif; font-weight: 700; padding: 2px 8px; border-radius: 20px; background: var(--primary-color); color: #fff; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.04em; }
    .deck-card h3 { font-size: 16px; font-family: sans-serif; margin: 0 0 8px; color: #111; font-weight: 700; }
    .deck-card p { font-size: 13px; color: #555; margin: 0 0 10px; line-height: 1.6; }
    .deck-card .cost { font-size: 13px; font-family: sans-serif; font-weight: 600; color: var(--primary-color); }

    .feature-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin: 16px 0 28px; }
    .feature-box { text-align: center; padding: 20px 14px; background: #faf5fd; border: 1px solid #e0c8f0; border-radius: 10px; }
    .feature-box .icon { font-size: 34px; margin-bottom: 10px; }
    .feature-box strong { display: block; font-size: 15px; font-family: sans-serif; font-weight: 700; color: #111; margin-bottom: 4px; }
    .feature-box span { font-size: 14px; color: #777; font-family: sans-serif; line-height: 1.5; display: block; }

    .material-table tbody tr > td:nth-child(1) {min-width: 350px}
    .best { font-size: 10px; font-weight: 700; background: var(--primary-color); color: #fff; padding: 1px 6px; border-radius: 10px; margin-left: 4px; vertical-align: middle; }


    @media (max-width: 600px) {
        h1 { font-size: 26px; }
        .service-grid { grid-template-columns: 1fr; }
        .trust-grid { grid-template-columns: 1fr; }
        .cat-grid { grid-template-columns: 1fr; }
        .deck-grid { grid-template-columns: 1fr;}
        .feature-grid {grid-template-columns: 1fr;}

        .main-image{height: 250px;}
        .cta-btn {  padding: 12px 12px; font-size: 14px; }
    }
`;

export default function Decks({ data }) {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const faqData = [
        {
            question: "How much does a deck cost in Bethesda, MD?",
            answer:
            `Deck construction in Bethesda typically ranges from $12,000 for a basic pressure-treated wood deck to $100,000+ for a full multi-level composite deck with pergola and outdoor kitchen. A mid-range composite deck in Bethesda averages $25,000–$45,000. DMV General Contracting Group provides free in-home consultations with detailed, itemized estimates so you know exactly what to expect before any work begins.`
        },
        {
            question: "Do I need a permit to build a deck in Bethesda, MD?",
            answer:
            `Yes. Montgomery County requires a building permit for any deck attached to the home, over 30 inches above grade, or 200 square feet or larger. Building without a permit can result in fines and required demolition — and will create problems when you sell your home. DMV General Contracting Group handles all required Montgomery County deck permits on every project at no additional charge.`
        },
        {
            question: "What is the best deck material for Bethesda, Maryland?",
            answer:
            `For Bethesda's climate — hot humid summers, heavy rain, and cold winters — composite decking (Trex, TimberTech, or Azek) is the most popular and practical choice. It requires no annual sealing or staining, resists moisture, mold, and UV fading, and typically outlasts wood by 10–15 years. Pressure-treated wood is a solid budget option. Ipe hardwood is the premium choice for longevity and natural beauty.`
        },
        {
            question: "How long does it take to build a deck in Bethesda?",
            answer:
            `Most deck builds in Bethesda take 3–6 weeks of construction time once permits are approved. Simple single-level decks can be completed in 2–3 weeks. Large multi-level decks with pergolas and custom features take 5–8 weeks. Montgomery County permit processing typically adds 2–4 weeks to the overall project timeline. DMV General Contracting Group manages permits and scheduling to keep your project moving efficiently.`
        },
        {
            question: "Does DMV General Contracting Group build Trex composite decks in Bethesda?",
            answer:
            `Yes. DMV General Contracting Group installs Trex, TimberTech, Azek, and other leading composite brands across Bethesda and Montgomery County. We are experienced with all current composite product lines and can help you choose the right color, finish, and railing system for your home's exterior. We also build with pressure-treated lumber, cedar, and Ipe hardwood.`
        },
        {
            question: "What is the best time of year to build a deck in Bethesda?",
            answer:
            `Spring and early fall are the most popular seasons for deck construction in Bethesda — the weather is mild and most homeowners want their deck ready for summer. However, deck building happens year-round in Maryland. Starting your project in late fall or winter means your deck is permitted, designed, and ready to build the moment spring arrives — giving you a head start on the busy season.`
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
                        Deck Building Bethesda, MD
                    </nav>

                    <div className="hero">
                        <h1>Deck Building & Installation in Bethesda, MD</h1>
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
                        Looking for a trusted <strong>deck contractor in Bethesda, MD</strong>? DMV General Contracting Group designs and builds custom decks for Bethesda homeowners — from simple ground-level wood decks to large multi-level composite decks with pergolas, built-in seating, and outdoor kitchens. Our licensed in-house team handles everything: design, Montgomery County permits, structural work, and all finishes. If you want a deck that looks beautiful, holds up to Maryland's climate, and is built to code from day one, DMV General Contracting Group is the team for the job.
                    </div>

                    <h2>Deck Building Services We Offer in Bethesda, MD</h2>
                    <p>
                        Whether you're starting from scratch or replacing an old rotting deck, DMV General Contracting Group offers a full range of <strong>deck construction services in Bethesda</strong>. Every deck we build is custom-designed for your home's architecture, yard layout, and how you plan to use the space.
                    </p>

                    <div className="service-grid">
                        <div className="service-item">Custom Deck Design & Build</div>
                        <div className="service-item">Single-Level Ground Deck</div>
                        <div className="service-item">Multi-Level & Elevated Decks</div>
                        <div className="service-item">Composite Deck Installation (Trex, TimberTech, Azek)</div>
                        <div className="service-item">Pressure-Treated Wood Deck</div>
                        <div className="service-item">Hardwood Deck (Ipe, Cedar, Redwood)</div>
                        <div className="service-item">Deck Replacement & Rebuild</div>
                        <div className="service-item">Pergola & Shade Structure Addition</div>
                        <div className="service-item">Built-In Bench & Storage Seating</div>
                        <div className="service-item">Outdoor Kitchen & Grill Station</div>
                        <div className="service-item">Deck Railing Systems (Cable, Glass, Metal, Wood)</div>
                        <div className="service-item">Deck Lighting Installation</div>
                        <div className="service-item">Staircase Design & Construction</div>
                        <div className="service-item">Deck Waterproofing (Under-Deck Systems)</div>
                        <div className="service-item">Permit Processing & Inspections</div>
                        <div className="service-item">Deck Repair & Structural Reinforcement</div>
                    </div>

                    <h2>Types of Decks We Build in Bethesda</h2>
                    <p>
                        Bethesda homes range from wooded lots in Burning Tree and Landon to flat suburban yards in Wyngate and Bradley Hills — each requiring a different deck design approach. Here are the most popular <strong>deck types</strong> we build for Bethesda homeowners:
                    </p>

                    <div className="deck-grid">
                        <div className="deck-card">
                        <span className="tag">Most Popular</span>
                        <h3>Composite Deck</h3>
                        <p>Low-maintenance, weather-resistant decking using Trex, TimberTech, or Azek. No staining, no warping, no splinters. Ideal for Bethesda's hot summers and wet winters. Available in dozens of colors and finishes.</p>
                        <div className="cost">Starting from $25,000</div>
                        </div>
                        <div className="deck-card">
                        <span className="tag">Best Value</span>
                        <h3>Pressure-Treated Wood Deck</h3>
                        <p>The most affordable deck material. Pressure-treated lumber is strong, widely available, and easy to customize. Requires periodic sealing and staining to maintain appearance and longevity in Maryland's climate.</p>
                        <div className="cost">Starting from $12,000</div>
                        </div>
                        <div className="deck-card">
                        <span className="tag">Premium Look</span>
                        <h3>Hardwood Deck (Ipe / Cedar)</h3>
                        <p>Natural hardwood decking like Brazilian Ipe or Western Red Cedar delivers unmatched beauty and durability. Ipe is one of the hardest, most weather-resistant woods available — a Bethesda luxury favorite.</p>
                        <div className="cost">Starting from $35,000</div>
                        </div>
                        <div className="deck-card">
                        <span className="tag">Max Space</span>
                        <h3>Multi-Level Deck</h3>
                        <p>Two or more connected deck levels — perfect for sloped Bethesda lots or homes where you want to define separate outdoor zones for dining, lounging, and entertaining. Can be combined with any material type.</p>
                        <div className="cost">Starting from $40,000</div>
                        </div>
                    </div>

                    <h2>Deck Material Comparison — What's Best for Bethesda, MD?</h2>
                    <p>
                        Choosing the right <strong>deck material for your Bethesda home</strong> depends on your budget, maintenance preferences, and how you'll use the space. Maryland's climate — hot, humid summers, frequent rain, and cold winters — affects each material differently. Here's a side-by-side comparison to help you decide:
                    </p>
                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table material-table">
                                <tr>
                                <th>Material</th>
                                <th>Lifespan</th>
                                <th>Maintenance</th>
                                <th>Cost (Installed)</th>
                                <th>Best For</th>
                                </tr>
                                <tbody>

                                    <tr>
                                    <td><strong>Composite (Trex / TimberTech)</strong> <span className="best">Most Popular</span></td>
                                    <td>25–30 years</td>
                                    <td>Very Low — occasional cleaning only</td>
                                    <td>$30–$60/sq ft</td>
                                    <td>Homeowners who want zero maintenance</td>
                                    </tr>
                                    <tr>
                                    <td><strong>Pressure-Treated Wood</strong></td>
                                    <td>15–20 years</td>
                                    <td>Medium — seal/stain every 2–3 years</td>
                                    <td>$15–$30/sq ft</td>
                                    <td>Budget-conscious builds with DIY upkeep</td>
                                    </tr>
                                    <tr>
                                    <td><strong>Cedar</strong></td>
                                    <td>20–25 years</td>
                                    <td>Medium — annual sealing recommended</td>
                                    <td>$25–$45/sq ft</td>
                                    <td>Natural look with moderate maintenance</td>
                                    </tr>
                                    <tr>
                                    <td><strong>Ipe Hardwood</strong></td>
                                    <td>40–75 years</td>
                                    <td>Low — oil every 1–2 years</td>
                                    <td>$40–$75/sq ft</td>
                                    <td>Luxury builds with exceptional longevity</td>
                                    </tr>
                                    <tr>
                                    <td><strong>PVC / Azek</strong></td>
                                    <td>30+ years</td>
                                    <td>Very Low — soap and water only</td>
                                    <td>$35–$65/sq ft</td>
                                    <td>Waterfront/shaded areas, no fading</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="tip">
                        💡 <strong>DMV General Contracting Group's Recommendation for Bethesda:</strong> For most Bethesda homeowners, <strong>composite decking (Trex or TimberTech)</strong> offers the best balance of appearance, durability, and long-term value. Maryland's climate is hard on wood — composite eliminates the annual maintenance while looking just as beautiful. Ask us about current composite options during your free consultation.
                    </div>

                    <h2>Popular Deck Features & Add-Ons for Bethesda Homeowners</h2>
                    <p>
                        A great <strong>deck in Bethesda</strong> is more than just boards and rails. Our team can design and build a fully integrated outdoor living space tailored to your lifestyle. Here are the most popular features Bethesda homeowners add to their decks:
                    </p>

                    <div className="feature-grid">
                        <div className="feature-box">
                        <div className="icon">🍳</div>
                        <strong>Outdoor Kitchen</strong>
                        <span>Built-in grill, countertop, sink, and storage — entertain like a pro</span>
                        </div>
                        <div className="feature-box">
                        <div className="icon">🌿</div>
                        <strong>Pergola & Shade</strong>
                        <span>Custom pergola or shade sail for comfortable outdoor living in summer heat</span>
                        </div>
                        <div className="feature-box">
                        <div className="icon">💡</div>
                        <strong>Deck Lighting</strong>
                        <span>Post cap lights, rail lighting, step lights, and string light integration</span>
                        </div>
                        <div className="feature-box">
                        <div className="icon">🪑</div>
                        <strong>Built-In Seating</strong>
                        <span>Custom bench seating with hidden storage underneath — clean and functional</span>
                        </div>
                        <div className="feature-box">
                        <div className="icon">🔒</div>
                        <strong>Cable & Glass Railings</strong>
                        <span>Modern cable or frameless glass railings for unobstructed views</span>
                        </div>
                        <div className="feature-box">
                        <div className="icon">🌧️</div>
                        <strong>Under-Deck Waterproofing</strong>
                        <span>Convert the space under your elevated deck into a dry, usable patio area</span>
                        </div>
                    </div>

                    <h2>Do You Need a Permit to Build a Deck in Bethesda, MD?</h2>
                    <p>
                        Yes — and this is one of the most important things to understand before starting a <strong>deck project in Bethesda</strong>. Montgomery County requires a building permit for decks that are:
                    </p>
                    <ul className="text-content" style={{margin: '12px 0 24px 20px', fontSize: '15px', lineHeight: 2}}>
                        <li>Attached to the primary residence</li>
                        <li>More than 30 inches above grade at any point</li>
                        <li>200 square feet or larger</li>
                        <li>Supporting any structure (pergola, roof, covered area)</li>
                    </ul>
                    <p>
                        Building a deck without the required permit in Montgomery County can result in fines, required demolition, and complications when selling your home. DMV General Contracting Group handles all required <strong>Montgomery County deck permits</strong> on every project — you don't need to visit any county office or manage any paperwork.
                    </p>

                    <div className="note">
                        ⚠️ <strong>Bethesda Homeowner Warning:</strong> Many homeowners have purchased Bethesda properties only to discover an unpermitted deck that must be demolished or brought up to code before closing. Always use a licensed, permit-pulling contractor for your deck build. DMV General Contracting Group handles every permit as a standard part of our process.
                    </div>

                    <h2>Deck Construction Cost in Bethesda, MD</h2>
                    <p>
                        Here is a detailed breakdown of <strong>deck building costs in Bethesda, Maryland</strong>. These ranges reflect current material and labor costs in the Montgomery County market:
                    </p>

                    <table className="cost-table">
                        <tr>
                        <th>Deck Type</th>
                        <th>Typical Cost Range</th>
                        <th>Size Estimate</th>
                        </tr>
                        <tr>
                        <td>Basic Pressure-Treated Wood Deck</td>
                        <td>$12,000 – $22,000</td>
                        <td>200–400 sq ft, single level</td>
                        </tr>
                        <tr>
                        <td>Mid-Range Composite Deck</td>
                        <td>$25,000 – $45,000</td>
                        <td>300–500 sq ft with railings & stairs</td>
                        </tr>
                        <tr>
                        <td>Hardwood Deck (Cedar / Ipe)</td>
                        <td>$35,000 – $60,000</td>
                        <td>300–500 sq ft, premium finish</td>
                        </tr>
                        <tr>
                        <td>Multi-Level Composite Deck</td>
                        <td>$45,000 – $75,000</td>
                        <td>500–800 sq ft, multiple levels</td>
                        </tr>
                        <tr>
                        <td>Deck with Pergola & Outdoor Kitchen</td>
                        <td>$60,000 – $100,000+</td>
                        <td>Full outdoor living space build-out</td>
                        </tr>
                        <tr>
                        <td>Deck Replacement (Remove & Rebuild)</td>
                        <td>$18,000 – $50,000</td>
                        <td>Depends on size & new material choice</td>
                        </tr>
                    </table>

                    <p>
                        A well-built deck in Bethesda typically <strong>returns 65–75% of its cost</strong> in added home value — and significantly increases your home's appeal to buyers who want functional outdoor living space. Contact DMV General Contracting Group for a free, itemized estimate for your specific deck project.
                    </p>

                    <div className="cta-banner">
                        <h2>Get a Free Deck Design Consultation in Bethesda</h2>
                        <p>Tell us what you're envisioning — we'll visit your property, assess your yard and home, and provide a detailed estimate at no cost and with no obligation.</p>
                        <Link href="/contact-us" className="cta-btn">Schedule Free Consultation →</Link>
                    </div>

                    <h2>Why Bethesda Homeowners Choose DMV General Contracting Group for Deck Building</h2>
                    <p>
                        Bethesda homeowners have high expectations for outdoor living spaces — and for good reason. A deck is a visible, high-use part of your home that directly impacts curb appeal, daily enjoyment, and resale value. Here's why they trust DMV General Contracting Group:
                    </p>

                    <div className="trust-grid">
                        <div className="trust-box">
                        <div className="icon">📐</div>
                        <strong>Custom Design Included</strong>
                        <span>We design your deck around your home, yard, and lifestyle</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">📋</div>
                        <strong>All Permits Handled</strong>
                        <span>Montgomery County deck permits managed start to finish</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">🛡️</div>
                        <strong>MHIC Licensed & Insured</strong>
                        <span>Fully bonded with 1-year workmanship warranty on every deck</span>
                        </div>
                    </div>

                    <div className="highlight">
                        <p>⭐ <strong>4.9-star rated with 97+ verified reviews</strong> — DMV General Contracting Group is one of the most trusted deck builders serving Bethesda, Potomac, and Chevy Chase, MD.</p>
                    </div>

                    <h2>Our Deck Building Process in Bethesda</h2>
                    <p>
                        Here's exactly how DMV General Contracting Group manages your <strong>deck project in Bethesda</strong> — from first call to your first cookout:
                    </p>

                    <div className="steps">
                        <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free In-Home Consultation & Site Assessment</h3>
                            <p>We visit your Bethesda home, walk your yard, assess the terrain, discuss your vision and budget, and walk you through material options and design possibilities — at no charge.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Custom Deck Design & Material Selection</h3>
                            <p>We create a detailed deck layout, structural plan, and 3D design concept. You choose your decking material, railing style, stair configuration, and any add-on features like a pergola or built-in seating.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Montgomery County Permit Filing</h3>
                            <p>We submit all required building permits to Montgomery County — including structural drawings if required. We manage all county correspondence and inspection scheduling throughout the project.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Site Prep, Footings & Framing</h3>
                            <p>Our crew handles post hole digging, concrete footing installation, and structural framing. All footings are sized and placed to Montgomery County code requirements for your specific deck design and load.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Decking, Railings, Stairs & Features</h3>
                            <p>We install your chosen decking boards, railing system, stair stringers and treads, lighting, and any add-on features — all with precision and clean finishing details that set a DMV General Contracting Group deck apart.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Final Inspection & Walkthrough</h3>
                            <p>Montgomery County performs a final structural inspection. Once approved, we do a thorough walkthrough with you — reviewing every detail and answering any questions before we consider the project complete.</p>
                        </div>
                        </div>
                    </div>

                    <h2>Deck Repair vs. Deck Replacement — Which Do You Need?</h2>
                    <p>
                        Many Bethesda homeowners come to us with an existing deck that needs attention. The question is whether to repair it or replace it entirely. Here's how we help you decide:
                    </p>
                    <p>
                        <strong>Repair makes sense</strong> when: the structural frame and posts are solid, only a few boards are rotting or damaged, the deck is less than 10 years old, and the repairs are cosmetic or limited in scope. Common repairs we handle include board replacement, railing replacement, stair repair, and ledger board reinforcement.
                    </p>
                    <p>
                        <strong>Replacement makes more sense</strong> when: the structural framing shows widespread rot or termite damage, the deck is more than 15–20 years old, the deck was built without permits (a common issue in Bethesda's older housing stock), or when you want to upgrade from wood to composite. In most cases, replacing an old failing deck costs less in the long run than repeated repairs — and gives you a brand-new, warrantied structure.
                    </p>
                    <p>
                        DMV General Contracting Group assesses every deck honestly during the free consultation — we'll tell you what's worth fixing and when a full replacement is the smarter investment.
                    </p>

                    <h2>Serving Bethesda and Surrounding Areas for Deck Building</h2>
                    <p>
                        In addition to <strong>deck construction in Bethesda, MD</strong>, our licensed team builds decks throughout Montgomery County and the greater DMV area:
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
                        <h3>Deck building in Potomac & Chevy Chase, MD</h3>
                        <p>Potomac and Chevy Chase are two of the most popular areas near Bethesda for custom deck builds — large wooded lots, elevated terrain, and high-value homes make them ideal for multi-level and premium composite deck projects. DMV General Contracting Group regularly builds decks across both communities and is deeply familiar with the specific terrain and permit requirements of each area.</p>
                    </div>

                    <div className="nearby">
                        <h3>Deck construction in Cabin John & Garrett Park, MD</h3>
                        <p>Cabin John and Garrett Park homeowners often have wooded, sloped lots that benefit from elevated or multi-level deck designs that take full advantage of the natural surroundings. Our team designs decks that complement these unique settings — maximizing views, managing grade changes, and preserving mature trees where possible.</p>
                    </div>

                    <h2>Frequently Asked Questions — Deck Building in Bethesda, MD</h2>
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

                    <h2>Explore Our Other Outdoor & Remodeling Services in Bethesda</h2>
                    <p>DMV General Contracting Group offers a full range of outdoor and home remodeling services across Bethesda and the DMV area:</p>
                    <ul style={{margin: '12px 0 24px 20px', color: '#1a6b9a', fontSize: '15px', lineHeight: 2}}>
                        <li><Link href="/service/patios" style={{color: '#1a6b9a'}}>Patio Installation in Bethesda, MD</Link></li>
                        <li><Link href="/service/fencing" style={{color: '#1a6b9a'}}>Fence Installation in Bethesda, MD</Link></li>
                        <li><Link href="/service/home-additions" style={{color: '#1a6b9a'}}>Home Additions in Bethesda, MD</Link></li>
                        <li><Link href="/service/basement-remodeling" style={{color: '#1a6b9a'}}>Basement Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/kitchen-remodeling" style={{color: '#1a6b9a'}}>Kitchen Remodeling in Bethesda, MD</Link></li>
                    </ul>

                    <div className="cta-banner">
                        <h2>Ready to Build Your Bethesda Deck?</h2>
                        <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free design consultation online. Available 7 days a week across Bethesda and the DMV area.</p>
                        <Link href="/contact-us" className="cta-btn">Get Your Free Deck Estimate →</Link>
                    </div>
                    {/* end */}
                </div>
            </StyledCom>
        </main>
    );
}
