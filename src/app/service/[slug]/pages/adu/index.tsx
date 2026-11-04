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

    .adu-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0 28px; }
    .adu-card { padding: 22px 18px; background: #ebf6ff; border: 1px solid #cbe5fb; border-radius: 12px; }
    .adu-card .tag { display: inline-block; font-size: 11px; font-family: sans-serif; font-weight: 700; padding: 2px 8px; border-radius: 20px; background: var(--primary-color); color: #fff; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.04em; }
    .adu-card h3 { font-size: 16px; font-family: sans-serif; margin: 0 0 8px; color: #111; font-weight: 700; }
    .adu-card p { font-size: 13px; color: #555; margin: 0 0 10px; line-height: 1.6; }
    .adu-card .cost { font-size: 13px; font-family: sans-serif; font-weight: 600; color: var(--primary-color); }

    .benefit-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin: 16px 0 28px; }
    .benefit-box { text-align: center; padding: 20px 14px; background: #faf5fd; border: 1px solid #e0c8f0; border-radius: 10px; }
    .benefit-box .icon { font-size: 34px; margin-bottom: 10px; }
    .benefit-box strong { display: block; font-size: 15px; font-family: sans-serif; font-weight: 700; color: #111; margin-bottom: 4px; }
    .benefit-box span { font-size: 14px; color: #777; font-family: sans-serif; line-height: 1.5; display: block; }

    .zoning-box { background: #ebf6ff; border: 1px solid #cbe5fb; border-radius: 10px; padding: 20px 22px; margin: 20px 0; }
    .zoning-box h3 { font-size: 16px; font-family: sans-serif; margin: 0 0 12px; color: var(--primary-color); }
    .zoning-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .zoning-row { font-size: 13px; color: #333; display: flex; gap: 8px; align-items: flex-start; padding: 6px 0; border-bottom: 1px solid #eaddf5; }
    .zoning-row:last-child { border-bottom: none; }
    .zoning-row .label { font-weight: 600; color: #555; min-width: 130px; font-family: sans-serif; }


    @media (max-width: 600px) {
        h1 { font-size: 26px; }
        .service-grid { grid-template-columns: 1fr; }
        .trust-grid { grid-template-columns: 1fr; }
        .cat-grid { grid-template-columns: 1fr; }
        .benefit-grid {grid-template-columns: 1fr; }
        .adu-grid { grid-template-columns: 1fr;}
        .zoning-grid { grid-template-columns: 1fr ;  }

        .main-image{height: 250px;}
        .cta-btn {  padding: 12px 12px; font-size: 14px; }
    }
`;

export default function Adu({ data }) {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const faqData = [
        {
            question: "Are ADUs allowed in Bethesda, MD?",
            answer:
            `Yes. Montgomery County — which includes Bethesda — permits Accessory Dwelling Units on single-family residential lots under the county's ADU ordinance. Both detached ADUs and attached ADUs (basement apartments, garage conversions, in-law suites) are allowed, subject to zoning classification, lot size, and setback requirements. DMV General Contracting Group handles the full zoning review and permit process for every ADU project in Bethesda.`
        },
        {
            question: "How much does it cost to build an ADU in Bethesda, MD?",
            answer:
            `ADU costs in Bethesda range from $60,000–$120,000 for a garage conversion to $150,000–$300,000+ for a new detached ADU. A basement ADU conversion typically runs $75,000–$130,000 and offers the best cost-per-square-foot value. DMV General Contracting Group provides free, detailed ADU cost estimates during our in-home feasibility consultation.`
        },
        {
            question: "How long does it take to build an ADU in Bethesda?",
            answer:
            `ADU timelines in Bethesda range from 3–4 months for a garage conversion to 6–10 months for a new detached ADU build. Montgomery County permit processing typically adds 4–8 weeks to any ADU project. DMV General Contracting Group manages the entire process in-house — design, permits, and construction — to minimize delays and keep your project on schedule.`
        },
        {
            question: "Do I need a permit to build an ADU in Montgomery County?",
            answer:
            `Yes. All ADU projects in Montgomery County require a building permit, zoning approval, and inspections for structural, electrical, plumbing, and HVAC work. A Certificate of Occupancy is required before any ADU can be legally rented or occupied. DMV General Contracting Group handles all permitting and inspection coordination from start to finish — you don't need to contact the county directly.`
        },
        {
            question: "Can I rent out my ADU in Bethesda?",
            answer:
            `Yes. A properly permitted ADU in Bethesda can be rented as a long-term residential unit. Given Bethesda's location near DC, NIH, and major employers, rental demand is strong — expect $1,800–$3,500/month depending on ADU size and finishes. Short-term vacation rentals (Airbnb/VRBO) require a separate Montgomery County license.`
        },
        {
            question: "Do I need to live on the property to build an ADU in Bethesda?",
            answer:
            `No. Montgomery County removed its owner-occupancy requirement for ADUs as part of its 2022 zoning updates. Homeowners are no longer required to occupy the primary residence to build or rent an ADU on their Bethesda property. However, the property must be a single-family residential lot in a permitted zoning district.`
        },
        
    ];

    return (
        <main className="page-wrapper">
                <NavitemActive nav="service" />

                <StyledCom className="service-detail-page ">
                    <div className="container">
                        {/* start */}
                        <nav className="breadcrumb">
                            <Link href="/">Home</Link><span>›</span>
                            <Link href="/services">Services</Link><span>›</span>
                            ADU Construction Bethesda, MD
                        </nav>

                        <div className="hero">
                            <h1>ADU Construction in Bethesda, MD — Accessory Dwelling Unit</h1>
                            <div className="hero-meta">
                            <span className="hero-badge">⭐ 4.9 Rating · 97+ Reviews</span>
                            <span className="hero-badge">✓ MHIC Licensed & Insured</span>
                            <span className="hero-badge">✓ DLCP Licensed</span>
                            <span className="hero-badge">✓ In-House Architects & Permits</span>
                            <span className="hero-badge">✓ Free In-Home Consultation</span>
                            </div>
                        </div>

                        <div className="image-holder main-image">
                            <img src={`.${data.image}`} alt={data.title}/>
                        </div>

                        <div className="intro">
                            Planning to build an <strong>ADU in Bethesda, MD</strong>? DMV General Contracting Group is a fully licensed, design-build general contractor specializing in Accessory Dwelling Unit construction throughout Bethesda and Montgomery County. Whether you want to build a detached backyard cottage, convert your garage, finish your basement into a legal apartment, or add an attached in-law suite, our in-house team handles everything — architectural design, Montgomery County zoning approvals, permits, construction, and final inspections — all under one roof.
                        </div>

                        <h2>What Is an ADU? (Accessory Dwelling Unit)</h2>
                        <p>
                            An <strong>Accessory Dwelling Unit (ADU)</strong> — also called an in-law suite, granny flat, carriage house, or backyard cottage — is a secondary residential unit built on the same lot as a primary single-family home. ADUs are fully self-contained living spaces with their own bedroom, bathroom, and kitchen or kitchenette.
                        </p>
                        <p>
                            In Bethesda and throughout Montgomery County, ADUs are legal under the county's updated ADU ordinance and are growing in popularity among homeowners who want to generate rental income, house aging parents or adult children, or add significant value to their property.
                        </p>

                        <div className="highlight">
                            <p>💡 <strong>Bethesda ADU Opportunity:</strong> With its proximity to Washington DC, NIH, Walter Reed, and major corporate employers, Bethesda has one of the strongest ADU rental markets in Maryland — long-term rental demand is high and vacancy rates are low.</p>
                        </div>

                        <h2>Types of ADUs We Build in Bethesda, MD</h2>
                        <p>
                            DMV General Contracting Group builds all types of <strong>ADUs in Bethesda and Montgomery County</strong>. Here are the four main ADU types we specialize in, along with typical cost ranges for the Bethesda market:
                        </p>

                        <div className="adu-grid">
                            <div className="adu-card">
                            <span className="tag">Most Popular</span>
                            <h3>Detached ADU (Backyard Cottage)</h3>
                            <p>A brand-new, standalone structure built in your backyard — separate from the main house. Full kitchen, bathroom, bedroom, and private entrance. Maximum privacy for tenants or family members.</p>
                            <div className="cost">Typical Cost: $150,000 – $300,000+</div>
                            </div>
                            <div className="adu-card">
                            <span className="tag">Best ROI</span>
                            <h3>Basement ADU Conversion</h3>
                            <p>Convert your existing unfinished basement into a fully legal, permitted apartment. Includes egress window, kitchenette, full bath, bedroom, and separate entrance. Lowest cost per square foot.</p>
                            <div className="cost">Typical Cost: $75,000 – $130,000</div>
                            </div>
                            <div className="adu-card">
                            <span className="tag">Quick Build</span>
                            <h3>Garage Conversion ADU</h3>
                            <p>Transform an attached or detached garage into a comfortable, legal living space. We handle insulation, HVAC, plumbing rough-in, flooring, and all finishes while maintaining curb appeal.</p>
                            <div className="cost">Typical Cost: $60,000 – $120,000</div>
                            </div>
                            <div className="adu-card">
                            <span className="tag">For In-Laws</span>
                            <h3>Attached In-Law Suite Addition</h3>
                            <p>A new addition built onto your existing home — sharing a wall but with a completely separate entrance, living area, kitchen, and bathroom. Ideal for multigenerational living in Bethesda.</p>
                            <div className="cost">Typical Cost: $100,000 – $220,000</div>
                            </div>
                        </div>

                        <h2>Benefits of Building an ADU on Your Bethesda Property</h2>
                        <p>
                            Bethesda homeowners are increasingly turning to ADUs as one of the smartest investments they can make in their property. Here's why:
                        </p>

                        <div className="benefit-grid">
                            <div className="benefit-box">
                            <div className="icon">💰</div>
                            <strong>Rental Income</strong>
                            <span>Generate $1,800–$3,500/month in rental income in the Bethesda market</span>
                            </div>
                            <div className="benefit-box">
                            <div className="icon">📈</div>
                            <strong>Home Value Increase</strong>
                            <span>ADUs typically add $100,000–$250,000+ to Bethesda property values</span>
                            </div>
                            <div className="benefit-box">
                            <div className="icon">👨‍👩‍👧</div>
                            <strong>Multigenerational Living</strong>
                            <span>House aging parents or adult children with privacy and independence</span>
                            </div>
                            <div className="benefit-box">
                            <div className="icon">🏠</div>
                            <strong>Flexible Use</strong>
                            <span>Rent it, use it for guests, or create a dedicated home office space</span>
                            </div>
                            <div className="benefit-box">
                            <div className="icon">🌿</div>
                            <strong>No Extra Land Needed</strong>
                            <span>Build on your existing lot — no land purchase required</span>
                            </div>
                            <div className="benefit-box">
                            <div className="icon">⚡</div>
                            <strong>Fast ROI</strong>
                            <span>Many Bethesda ADUs break even within 3–5 years through rental income</span>
                            </div>
                        </div>

                        <h2>ADU Zoning Rules in Bethesda & Montgomery County, MD</h2>
                        <p>
                            One of the most important parts of building an <strong>ADU in Bethesda</strong> is understanding Montgomery County's zoning requirements. DMV General Contracting Group's in-house architects and permit team are experts in local ADU regulations and handle the entire approval process for you. Here's a summary of the key rules:
                        </p>

                        <div className="zoning-box">
                            <h3>Montgomery County ADU Zoning Quick Reference</h3>
                            <div className="zoning-grid">
                            <div>
                                <div className="zoning-row"><span className="label">Zones Allowed:</span> R-60, R-90, R-200 and most single-family residential zones</div>
                                <div className="zoning-row"><span className="label">Max ADU Size:</span> Up to 1,200 sq ft (detached); up to 50% of primary home (attached)</div>
                                <div className="zoning-row"><span className="label">Setbacks:</span> Minimum 5 ft side/rear for detached ADU (varies by zone)</div>
                            </div>
                            <div>
                                <div className="zoning-row"><span className="label">Owner Occupancy:</span> Not required as of 2022 Montgomery County update</div>
                                <div className="zoning-row"><span className="label">Parking:</span> 1 additional space typically required</div>
                                <div className="zoning-row"><span className="label">Permits Required:</span> Building, electrical, plumbing, HVAC + zoning approval</div>
                            </div>
                            </div>
                        </div>

                        <div className="note">
                            ⚠️ <strong>Important:</strong> ADU regulations in Montgomery County were updated in 2022 and continue to evolve. Lot size, zoning classification, and existing structure conditions all affect what is permitted on your specific Bethesda property. DMV General Contracting Group performs a full zoning and feasibility review as part of every free consultation — at no cost to you.
                        </div>

                        <h2>ADU Construction Cost in Bethesda, MD</h2>
                        <p>
                            Here is a detailed breakdown of <strong>ADU construction costs in Bethesda, Maryland</strong>. These ranges reflect the Bethesda/Montgomery County market, where labor, material, and permit costs are higher than national averages:
                        </p>
                        <div className="table-responsive">
                            <div className="table-holder">
                                <table className="cost-table">
                                    <tr>
                                    <th>ADU Type</th>
                                    <th>Typical Cost Range</th>
                                    <th>Timeline</th>
                                    <th>Notes</th>
                                    </tr>
                                    <tr>
                                    <td>Basement ADU Conversion</td>
                                    <td>$75,000 – $130,000</td>
                                    <td>3–5 months</td>
                                    <td>Lowest cost option; uses existing foundation & structure</td>
                                    </tr>
                                    <tr>
                                    <td>Garage Conversion ADU</td>
                                    <td>$60,000 – $120,000</td>
                                    <td>3–4 months</td>
                                    <td>Cost varies based on attached vs detached garage</td>
                                    </tr>
                                    <tr>
                                    <td>Attached In-Law Suite Addition</td>
                                    <td>$100,000 – $220,000</td>
                                    <td>5–8 months</td>
                                    <td>New addition built onto existing home structure</td>
                                    </tr>
                                    <tr>
                                    <td>Detached ADU (New Build)</td>
                                    <td>$150,000 – $300,000+</td>
                                    <td>6–10 months</td>
                                    <td>Full new construction on your lot; highest cost & value</td>
                                    </tr>
                                </table>
                            </div>
                        </div>

                        <p>
                            These costs include architectural design, all Montgomery County permit fees, full construction, and final inspections. In Bethesda's real estate market, a detached ADU can add <strong>$200,000–$300,000+</strong> to your property value — making the investment highly favorable for most homeowners.
                        </p>

                        <div className="cta-banner">
                            <h2>Is an ADU Right for Your Bethesda Property?</h2>
                            <p>Our team will visit your home, review your zoning and lot, and tell you exactly what ADU options are available — free of charge, with no obligation.</p>
                            <Link href="/contact-us" className="cta-btn">Get Free ADU Feasibility Review →</Link>
                        </div>

                        <h2>Why Choose DMV General Contracting Group for Your Bethesda ADU Project</h2>
                        <p>
                            Building an <strong>ADU in Bethesda</strong> is more complex than a standard remodeling project. It involves zoning review, architectural design, structural engineering, multiple permit types, and coordination of all trades. You need a contractor with real ADU experience — not one learning on your project.
                        </p>

                        <div className="trust-grid">
                            <div className="trust-box">
                            <div className="icon">📐</div>
                            <strong>In-House Architects</strong>
                            <span>We design your ADU — no outside architect needed</span>
                            </div>
                            <div className="trust-box">
                            <div className="icon">📋</div>
                            <strong>Zoning & Permit Experts</strong>
                            <span>We manage the full Montgomery County ADU approval process</span>
                            </div>
                            <div className="trust-box">
                            <div className="icon">🔨</div>
                            <strong>All Trades In-House</strong>
                            <span>Structural, electrical, plumbing, HVAC — no subcontracting</span>
                            </div>
                        </div>

                        <p>
                            DMV General Contracting Group is one of the few contractors in the Bethesda area that offers <strong>true design-build ADU services</strong> — meaning our architects design your unit, our engineers approve the structure, our permit team files all paperwork, and our licensed crews build it. One team, one contract, complete accountability.
                        </p>

                        <h2>Our ADU Construction Process in Bethesda</h2>
                        <p>
                            Here is exactly how DMV General Contracting Group manages your <strong>ADU project in Bethesda</strong> from first conversation to move-in ready:
                        </p>

                        <div className="steps">
                            <div className="step">
                            <div className="step-num">1</div>
                            <div className="step-content">
                                <h3>Free Feasibility Consultation & Site Visit</h3>
                                <p>We visit your Bethesda property, review your lot size and zoning classification, assess existing structures (basement, garage), and determine which ADU types are feasible — at no charge.</p>
                            </div>
                            </div>
                            <div className="step">
                            <div className="step-num">2</div>
                            <div className="step-content">
                                <h3>Architectural Design & 3D Renderings</h3>
                                <p>Our in-house architects design your ADU floor plan, elevations, and 3D renderings. You review and approve the design before any permits are filed. We refine until you're completely satisfied.</p>
                            </div>
                            </div>
                            <div className="step">
                            <div className="step-num">3</div>
                            <div className="step-content">
                                <h3>Montgomery County Zoning & Permit Processing</h3>
                                <p>We submit all required zoning applications and building, electrical, plumbing, and mechanical permits to Montgomery County on your behalf. We manage all back-and-forth with the county reviewers.</p>
                            </div>
                            </div>
                            <div className="step">
                            <div className="step-num">4</div>
                            <div className="step-content">
                                <h3>Site Prep & Foundation (Detached ADUs)</h3>
                                <p>For new detached ADUs, we handle site grading, utility connections, and foundation work before vertical construction begins. All work is inspected and approved by Montgomery County at each phase.</p>
                            </div>
                            </div>
                            <div className="step">
                            <div className="step-num">5</div>
                            <div className="step-content">
                                <h3>Full Construction — Framing Through Finishes</h3>
                                <p>Our licensed crews handle all construction phases: structural framing, roofing, insulation, drywall, flooring, electrical, plumbing, HVAC, cabinetry, tile, fixtures, and all interior and exterior finishes.</p>
                            </div>
                            </div>
                            <div className="step">
                            <div className="step-num">6</div>
                            <div className="step-content">
                                <h3>Final Inspections & Certificate of Occupancy</h3>
                                <p>We schedule and manage all required Montgomery County final inspections. Upon passing all inspections, you receive a Certificate of Occupancy — making your ADU fully legal to rent or occupy.</p>
                            </div>
                            </div>
                        </div>

                        <h2>ADU vs. Home Addition — What's Right for Your Bethesda Home?</h2>
                        <p>
                            Bethesda homeowners sometimes ask whether they should build an ADU or do a traditional home addition. The key difference is <strong>independence</strong>: an ADU is a fully separate, self-contained dwelling unit with its own entrance, kitchen, and bathroom — it can be rented or occupied independently. A home addition simply expands the primary home's square footage without creating a separate living unit.
                        </p>
                        <p>
                            If your goal is <strong>rental income</strong>, housing a family member independently, or maximizing long-term property value, an ADU is the better investment. If your goal is simply more space within your existing home, a home addition or room expansion may be more appropriate. DMV General Contracting Group builds both — and can help you determine which option makes more sense for your specific Bethesda property during your free consultation.
                        </p>

                        <h2>Serving Bethesda and Surrounding Areas for ADU Construction</h2>
                        <p>
                            In addition to <strong>ADU construction in Bethesda, MD</strong>, our licensed team serves homeowners throughout Montgomery County and the greater DMV area:
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
                            <h3>ADU construction in Chevy Chase & Potomac, MD</h3>
                            <p>Chevy Chase and Potomac are among the most popular areas for ADU construction near Bethesda — large lots, high property values, and strong rental demand make ADUs an especially attractive investment. DMV General Contracting Group regularly builds ADUs across both communities and is fully familiar with their specific Montgomery County zoning conditions.</p>
                        </div>

                        <div className="nearby">
                            <h3>ADU construction in Washington DC</h3>
                            <p>DMV General Contracting Group holds both a Maryland MHIC license and a Washington DC DLCP license. We build ADUs on both sides of the border — whether your property is in Bethesda or DC neighborhoods like Chevy Chase DC, Friendship Heights, or Tenleytown, our team can help.</p>
                        </div>

                        <h2>Frequently Asked Questions — ADU Construction in Bethesda, MD</h2>
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

                        <h2>Explore Our Other Services in Bethesda</h2>
                        <p>Beyond ADU construction, DMV General Contracting Group offers a full range of home remodeling and addition services across Bethesda and the DMV area:</p>
                        <ul style={{margin: '12px 0 24px 20px', color: '#1a6b9a', fontSize: '15px', lineHeight: 2}}>
                            <li><Link href="/service/home-additions" style={{color: '#1a6b9a'}}>Home Additions in Bethesda, MD</Link></li>
                            <li><Link href="/service/basement-remodeling" style={{color: '#1a6b9a'}}>Basement Finishing & Remodeling in Bethesda, MD</Link></li>
                            <li><Link href="/service/kitchen-remodeling" style={{color: '#1a6b9a'}}>Kitchen Remodeling in Bethesda, MD</Link></li>
                            <li><Link href="/service/bathroom-remodeling" style={{color: '#1a6b9a'}}>Bathroom Remodeling in Bethesda, MD</Link></li>
                            <li><Link href="/service/design-build" style={{color: '#1a6b9a'}}>Design-Build Services in Bethesda, MD</Link></li>
                        </ul>

                        <div className="cta-banner">
                            <h2>Ready to Build an ADU on Your Bethesda Property?</h2>
                            <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free feasibility review online. We'll tell you exactly what's possible on your lot — no cost, no obligation. Available 7 days a week.</p>
                            <Link href="/contact-us" className="cta-btn">Schedule Free ADU Consultation →</Link>
                        </div>
                        {/* end */}
                    </div>
            </StyledCom>
        </main>
    );
}