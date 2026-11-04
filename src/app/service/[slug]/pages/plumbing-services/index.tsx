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

    .warn-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin: 16px 0 24px; }
    .warn-box { padding: 16px 14px; background: var(--card-style1-bg); border: 1px solid var(--card-style1-border); border-radius: 10px; }
    .warn-box .icon { font-size: 34px; margin-bottom: 8px; }
    .warn-box h3 { font-size: 16px; font-family: sans-serif; font-weight: 700; color: var(--primary-color); margin: 0 0 4px; }
    .warn-box p { font-size: 14px; color: #666; margin: 0; line-height: 1.5; }


    @media (max-width: 600px) {
        h1 { font-size: 26px; }
        .service-grid { grid-template-columns: 1fr; }
        .trust-grid { grid-template-columns: 1fr; }
        .cat-grid { grid-template-columns: 1fr; }
        .warn-grid { grid-template-columns: 1fr; }

        .main-image{height: 250px;}
        .cta-btn {  padding: 12px 12px; font-size: 14px; }
    }
`;

export default function PlumbingServices({ data }) {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const faqData = [
        {
            question: "How much does water heater replacement cost in Bethesda, MD?",
            answer:
            `Water heater replacement in Bethesda typically costs $1,200–$2,200 for a standard gas tank water heater fully installed and permitted. A tankless gas water heater runs $2,800–$5,500. A heat pump water heater costs $1,800–$3,500 installed. All DMV General Contracting Group water heater installations include the Montgomery County permit and inspection — and we dispose of your old unit. We provide free water heater estimates for Bethesda homeowners.`
        },
        {
            question: "Does DMV General Contracting Group handle plumbing for bathroom remodels in Bethesda?",
            answer:
            `Yes — bathroom plumbing rough-in and finish work is one of our most common services. Our licensed in-house plumbers handle shower valve installation, tub rough-in, toilet rough-in and relocation, vanity supply and drain connections, and all required permits. Because our plumbers are on the same team as our tile setters and electricians, there are no scheduling conflicts or coordination gaps during your Bethesda bathroom remodel.`
        },
        {
            question: "Does DMV General Contracting Group handle whole-home repiping in Bethesda?",
            answer:
            `Yes. We perform whole-home repiping projects throughout Bethesda — replacing galvanized steel, polybutylene, and other outdated pipe materials with modern PEX or copper. A typical 3-bedroom Bethesda home PEX repipe costs $5,000–$9,000 including all permits. We coordinate drywall patching after pipe installation so your home is fully restored when we're done. We provide free repiping assessments for Bethesda homeowners.`
        },
        {
            question: "Does DMV General Contracting Group pull plumbing permits in Bethesda, MD?",
            answer:
            `Yes — all plumbing work we perform in Bethesda and Montgomery County is fully permitted and inspected per Maryland state plumbing code. We file all required plumbing permits with Montgomery County and schedule all inspections. Permitted plumbing protects your homeowner's insurance coverage, your home's resale value, and ensures work is done safely and to code. We never perform unpermitted plumbing work.`
        },
        {
            question: "How much does it cost to repipe a house in Bethesda, MD?",
            answer:
            `Whole-home repiping in Bethesda typically costs $5,000–$9,000 for PEX pipe on a 3-bedroom home, and $8,000–$15,000 for copper. Costs vary based on home size, number of bathrooms, pipe accessibility, and how much drywall needs to be opened. DMV General Contracting Group provides free, detailed repiping estimates — we inspect your existing pipe material and condition before providing any quote.`
        },
        {
            question: "What is the best water heater for a Bethesda home?",
            answer:
            `For most Bethesda homes, a tankless gas water heater or a heat pump water heater offers the best long-term value. Tankless water heaters provide unlimited hot water on demand and are 20–30% more efficient than tank models. Heat pump water heaters are the most energy-efficient option and may qualify for a 30% federal tax credit. Standard tank water heaters remain the most affordable upfront option for straightforward replacements. DMV General Contracting Group installs all types and recommends the best fit for your home's size, fuel type, and hot water demand.`
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
                        Plumbing Services Bethesda, MD
                    </nav>

                    <div className="hero">
                        <h1>Licensed Plumbing Services in Bethesda, MD</h1>
                        <div className="hero-meta">
                        <span className="hero-badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="hero-badge">✓ MHIC Licensed & Insured</span>
                            <span className="hero-badge">✓ DLCP Licensed</span>
                        <span className="hero-badge">✓ All Work Permitted & Inspected</span>
                        <span className="hero-badge">✓ Free Plumbing Estimate</span>
                        </div>
                    </div>

                    <div className="image-holder main-image">
                        <img src={`.${data.image}`} alt={data.title}/>
                    </div>

                    <div className="intro">
                        Looking for a trusted <strong>licensed plumber in Bethesda, MD</strong>? DMV General Contracting Group provides comprehensive residential plumbing services throughout Bethesda and Montgomery County — water heater installation and replacement, whole-home repiping, bathroom and kitchen plumbing rough-in, sump pump installation, fixture replacement, and full remodel plumbing support. As a design-build contractor with licensed plumbers on staff, we handle plumbing as part of any renovation project or as a standalone service. All work is permitted and inspected per Maryland state plumbing code and Montgomery County requirements.
                    </div>

                    <h2>Plumbing Services We Offer in Bethesda, MD</h2>
                    <p>
                        DMV General Contracting Group's licensed plumbing team covers the full range of residential plumbing needs for Bethesda homeowners — from routine fixture replacements to complex whole-home repiping and remodel rough-in work.
                    </p>

                    <div className="service-grid">
                        <div className="service-item">Water Heater Installation & Replacement</div>
                        <div className="service-item">Tankless Water Heater Installation</div>
                        <div className="service-item">Heat Pump Water Heater Installation</div>
                        <div className="service-item">Whole-Home Repiping (PEX & Copper)</div>
                        <div className="service-item">Bathroom Plumbing Rough-In & Finish</div>
                        <div className="service-item">Kitchen Plumbing Rough-In & Finish</div>
                        <div className="service-item">Toilet Installation & Replacement</div>
                        <div className="service-item">Shower & Bathtub Valve Installation</div>
                        <div className="service-item">Faucet & Fixture Replacement</div>
                        <div className="service-item">Sump Pump Installation & Replacement</div>
                        <div className="service-item">Sewage Ejector Pump Installation</div>
                        <div className="service-item">Garbage Disposal Installation</div>
                        <div className="service-item">Dishwasher Plumbing Connection</div>
                        <div className="service-item">Whole-Home Water Filtration</div>
                        <div className="service-item">Outdoor Hose Bib Installation</div>
                        <div className="service-item">Plumbing Permit Processing & Inspections</div>
                    </div>

                    <h2>Plumbing Service Categories — Bethesda Residential</h2>
                    <p>
                        Here's a breakdown of our most in-demand <strong>residential plumbing services in Bethesda</strong>, organized by category:
                    </p>

                    <div className="cat-grid">
                        <div className="cat-card">
                        <span className="tag">Most Requested</span>
                        <h3>🔥 Water Heater Services</h3>
                        <ul>
                            <li>Tank water heater replacement (gas & electric)</li>
                            <li>Tankless water heater installation (gas & electric)</li>
                            <li>Heat pump water heater installation</li>
                            <li>Water heater expansion tank installation</li>
                            <li>Water heater permit & inspection</li>
                            <li>Water heater relocation (remodel support)</li>
                        </ul>
                        </div>
                        <div className="cat-card">
                        <span className="tag">Older Homes</span>
                        <h3>🔧 Pipe Replacement & Repiping</h3>
                        <ul>
                            <li>Full home repiping (PEX — most popular)</li>
                            <li>Full home repiping (copper)</li>
                            <li>Galvanized steel pipe replacement</li>
                            <li>Polybutylene pipe replacement</li>
                            <li>Lead service line identification</li>
                            <li>Partial pipe repair & section replacement</li>
                        </ul>
                        </div>
                        <div className="cat-card">
                        <span className="tag">Remodel Support</span>
                        <h3>🚿 Bathroom & Kitchen Plumbing</h3>
                        <ul>
                            <li>Shower valve & body spray rough-in</li>
                            <li>Freestanding tub supply & drain rough-in</li>
                            <li>Toilet rough-in & relocation</li>
                            <li>Vanity supply & drain connections</li>
                            <li>Kitchen sink & faucet installation</li>
                            <li>Pot filler installation</li>
                        </ul>
                        </div>
                        <div className="cat-card">
                        <span className="tag">Basement Critical</span>
                        <h3>💧 Drainage & Pump Systems</h3>
                        <ul>
                            <li>Sump pump installation & replacement</li>
                            <li>Battery backup sump pump installation</li>
                            <li>Sewage ejector pump installation</li>
                            <li>Floor drain installation</li>
                            <li>French drain & interior drainage</li>
                            <li>Basement bathroom rough-in plumbing</li>
                        </ul>
                        </div>
                        <div className="cat-card">
                        <span className="tag">Fixture & Appliance</span>
                        <h3>🛠️ Fixture & Appliance Connections</h3>
                        <ul>
                            <li>Toilet, faucet & showerhead replacement</li>
                            <li>Garbage disposal installation</li>
                            <li>Dishwasher supply & drain connection</li>
                            <li>Refrigerator ice maker line</li>
                            <li>Washing machine hookup</li>
                            <li>Outdoor hose bib & irrigation hookup</li>
                        </ul>
                        </div>
                        <div className="cat-card">
                        <span className="tag">Water Quality</span>
                        <h3>💎 Water Treatment & Filtration</h3>
                        <ul>
                            <li>Whole-home water softener installation</li>
                            <li>Whole-home water filtration system</li>
                            <li>Under-sink reverse osmosis system</li>
                            <li>Sediment filter installation</li>
                            <li>Water pressure regulator installation</li>
                            <li>Expansion tank installation</li>
                        </ul>
                        </div>
                    </div>

                    <h2>Water Heater Installation & Replacement in Bethesda, MD</h2>
                    <p>
                        Water heater replacement is one of the most common plumbing calls we receive from Bethesda homeowners. The average water heater lasts 10–15 years — and Bethesda's hard water can shorten that lifespan considerably. If your water heater is over 10 years old, making noise, producing rusty water, or running out of hot water faster than usual, it is likely time for a replacement.
                    </p>
                    <p>
                        Here's a comparison of the most popular <strong>water heater types for Bethesda homes</strong> to help you choose the right replacement:
                    </p>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table wh-table">
                                <tr>
                                <th>Type</th>
                                <th>Efficiency</th>
                                <th>Hot Water Supply</th>
                                <th>Bethesda Installed Cost</th>
                                <th>Best For</th>
                                </tr>
                                <tr>
                                <td><strong>Tank Water Heater (Gas)</strong></td>
                                <td className="mid">Moderate — EF 0.60–0.70</td>
                                <td className="mid">Limited by tank size (40–75 gal)</td>
                                <td>$1,200 – $2,200</td>
                                <td>Budget replacement, existing gas line</td>
                                </tr>
                                <tr>
                                <td><strong>Tank Water Heater (Electric)</strong></td>
                                <td className="mid">Moderate — EF 0.90–0.95</td>
                                <td className="mid">Limited by tank size</td>
                                <td>$1,000 – $1,800</td>
                                <td>Homes without gas, simple replacement</td>
                                </tr>
                                <tr>
                                <td><strong>Tankless (Gas)</strong> <span className="rec">Popular</span></td>
                                <td className="good">High — 20–30% more efficient</td>
                                <td className="good">Unlimited hot water on demand</td>
                                <td>$2,800 – $5,500</td>
                                <td>Large families, high hot water demand</td>
                                </tr>
                                <tr>
                                <td><strong>Tankless (Electric)</strong></td>
                                <td className="good">High — very efficient</td>
                                <td className="good">Unlimited, but flow rate limited</td>
                                <td>$1,800 – $3,500</td>
                                <td>Smaller homes, point-of-use applications</td>
                                </tr>
                                <tr>
                                <td><strong>Heat Pump Water Heater</strong> <span className="rec">Most Efficient</span></td>
                                <td className="good">Very High — EF 3.0–4.0+</td>
                                <td className="good">Large tank, high recovery rate</td>
                                <td>$1,800 – $3,500</td>
                                <td>Max efficiency, may qualify for tax credit</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="tip">
                        💡 <strong>Federal Tax Credit:</strong> Heat pump water heaters installed in Bethesda homes may qualify for a 30% federal tax credit (up to $2,000) under the Inflation Reduction Act's Energy Efficient Home Improvement Credit. Ask your tax advisor about eligibility — and ask us about heat pump water heater options during your free estimate.
                    </div>

                    <h2>Whole-Home Repiping in Bethesda, MD</h2>
                    <p>
                        Many Bethesda homes built before 1990 have plumbing materials that are now outdated, failing, or have been linked to health and safety concerns. <strong>Whole-home repiping</strong> — replacing all supply lines from the main shutoff throughout the entire home — is the permanent solution.
                    </p>

                    <div className="danger-note">
                        🚨 <strong>Polybutylene Pipe Warning for Bethesda Homeowners:</strong> Bethesda homes built between 1978 and 1995 may contain polybutylene (PB) plastic pipes — a material that was installed in millions of US homes before being linked to catastrophic failure. PB pipes react with chlorine in municipal water, becoming brittle and prone to sudden leaks and ruptures. If your Bethesda home has gray plastic supply pipes, DMV General Contracting Group strongly recommends a professional assessment. Full replacement is the only permanent solution.
                    </div>

                    <p>
                        Here's a comparison of the pipe materials DMV General Contracting Group uses for whole-home repiping in Bethesda:
                    </p>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table pipe-table">
                                <tr>
                                <th>Pipe Material</th>
                                <th>Lifespan</th>
                                <th>Cost (Full Home)</th>
                                <th>Pros</th>
                                <th>Best For</th>
                                </tr>
                                <tr>
                                <td><strong>PEX (Cross-linked Polyethylene)</strong> <span className="rec">Most Popular</span></td>
                                <td>50+ years</td>
                                <td>$5,000 – $9,000</td>
                                <td>Flexible, frost-resistant, fast install, lower cost</td>
                                <td>Most Bethesda whole-home repipes</td>
                                </tr>
                                <tr>
                                <td><strong>Copper</strong></td>
                                <td>50–70+ years</td>
                                <td>$8,000 – $15,000</td>
                                <td>Premium material, antimicrobial, proven longevity</td>
                                <td>Homes requiring premium materials</td>
                                </tr>
                                <tr>
                                <td><strong>CPVC</strong></td>
                                <td>30–50 years</td>
                                <td>$6,000 – $10,000</td>
                                <td>Rigid, handles high temps, good for hot water lines</td>
                                <td>Specific applications — less common than PEX</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <h2>Plumbing Warning Signs in Bethesda Homes</h2>
                    <p>
                        Don't wait for a plumbing emergency before addressing these common warning signs found in Bethesda's older housing stock:
                    </p>

                    <div className="warn-grid">
                        <div className="warn-box">
                        <div className="icon">🟤</div>
                        <h3>Discolored or Rusty Water</h3>
                        <p>Brown or orange water from taps — especially hot water — signals corroding galvanized steel pipes or a failing water heater tank. Needs immediate attention.</p>
                        </div>
                        <div className="warn-box">
                        <div className="icon">📉</div>
                        <h3>Low Water Pressure</h3>
                        <p>Reduced pressure throughout the home typically indicates corrosion buildup inside old galvanized pipes restricting flow — repiping is the permanent fix.</p>
                        </div>
                        <div className="warn-box">
                        <div className="icon">💧</div>
                        <h3>Visible Pipe Corrosion</h3>
                        <p>Green staining (copper), white mineral deposits, or flaking rust on visible pipes in the basement or utility room are signs of active pipe deterioration.</p>
                        </div>
                        <div className="warn-box">
                        <div className="icon">🌊</div>
                        <h3>Recurring Leaks</h3>
                        <p>Multiple leaks in different parts of the home within a short period indicate systemic pipe failure — not isolated incidents. Repiping is more cost-effective than repeated repairs.</p>
                        </div>
                        <div className="warn-box">
                        <div className="icon">🔊</div>
                        <h3>Banging or Rattling Pipes</h3>
                        <p>"Water hammer" — banging pipes when water is shut off — indicates loose pipes, pressure issues, or failing water hammer arrestors that need attention.</p>
                        </div>
                        <div className="warn-box">
                        <div className="icon">💰</div>
                        <h3>Unexplained High Water Bills</h3>
                        <p>A sudden spike in your WSSC water bill without a change in usage is a classic sign of a hidden leak — in walls, under slabs, or in supply lines.</p>
                        </div>
                    </div>

                    <h2>Sump Pump Installation in Bethesda, MD</h2>
                    <p>
                        Bethesda's terrain — with many homes on sloped lots above rock-shelf soil — creates drainage challenges that make sump pump systems essential for any finished basement. Maryland's frequent heavy rain events and seasonal snowmelt make a functioning sump pump one of the most important plumbing components in a Bethesda home.
                    </p>
                    <p>
                        DMV General Contracting Group installs and replaces sump pumps throughout Bethesda and Montgomery County. We install primary sump pumps, battery backup systems (critical for power outages during storms), and combination primary-plus-backup systems for maximum protection. We also install sewage ejector pumps for basement bathrooms that sit below the main drain line — a common requirement for finished basements in Bethesda's older housing stock.
                    </p>

                    <div className="highlight">
                        <p>⚡ <strong>Battery Backup Sump Pump — Strongly Recommended for Bethesda:</strong> The most common time a sump pump is needed is during a heavy storm — and that is exactly when power outages occur. A battery backup sump pump continues operating during power failures, protecting your finished basement from flooding when your primary pump loses power. DMV General Contracting Group installs battery backup systems for primary sump pumps throughout Bethesda.</p>
                    </div>

                    <h2>Plumbing for Remodeling Projects in Bethesda, MD</h2>
                    <p>
                        As Bethesda's full-service design-build contractor, DMV General Contracting Group's licensed plumbers support every remodeling project we undertake — and are also available for standalone plumbing work. Here's how plumbing integrates with common Bethesda renovations:
                    </p>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table remodel-table">
                                <tr>
                                <th>Project Type</th>
                                <th>Typical Plumbing Work Included</th>
                                </tr>
                                <tr>
                                <td><strong>Bathroom Remodel</strong></td>
                                <td>Shower valve rough-in, tub drain and overflow, toilet rough-in, vanity supply and drain, pot filler, exhaust fan drain (steam showers)</td>
                                </tr>
                                <tr>
                                <td><strong>Kitchen Remodel</strong></td>
                                <td>Sink supply and drain relocation, dishwasher hookup, garbage disposal installation, pot filler installation, filtered water line</td>
                                </tr>
                                <tr>
                                <td><strong>Basement Finishing</strong></td>
                                <td>Basement bathroom rough-in (below-grade drainage), sewage ejector pump, floor drain, wet bar plumbing</td>
                                </tr>
                                <tr>
                                <td><strong>Home Addition</strong></td>
                                <td>Supply and drain extension into new addition, bathroom rough-in, water heater upgrade if capacity needed</td>
                                </tr>
                                <tr>
                                <td><strong>ADU Construction</strong></td>
                                <td>Dedicated water service or shared service split, kitchen and bathroom rough-in, water heater for ADU unit</td>
                                </tr>
                                <tr>
                                <td><strong>Whole-Home Renovation</strong></td>
                                <td>Full repipe during renovation (most cost-effective time), new fixtures throughout, water heater replacement</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <h2>Plumbing Service Cost in Bethesda, MD</h2>
                    <p>
                        Here is a general cost guide for the most common <strong>plumbing services in Bethesda, Maryland</strong>. All prices include labor, materials, and Montgomery County permit fees where applicable:
                    </p>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <tr>
                                <th>Service</th>
                                <th>Typical Cost Range</th>
                                <th>Notes</th>
                                </tr>
                                <tr>
                                <td>Tank Water Heater Replacement (Gas)</td>
                                <td>$1,200 – $2,200</td>
                                <td>Standard 40–50 gallon; includes permit and disposal</td>
                                </tr>
                                <tr>
                                <td>Tankless Water Heater (Gas)</td>
                                <td>$2,800 – $5,500</td>
                                <td>Includes gas line upgrade if needed; permit included</td>
                                </tr>
                                <tr>
                                <td>Heat Pump Water Heater</td>
                                <td>$1,800 – $3,500</td>
                                <td>May qualify for 30% federal tax credit</td>
                                </tr>
                                <tr>
                                <td>Whole-Home Repipe (PEX)</td>
                                <td>$5,000 – $9,000</td>
                                <td>3-bed home typical; includes permit and drywall patching coordination</td>
                                </tr>
                                <tr>
                                <td>Whole-Home Repipe (Copper)</td>
                                <td>$8,000 – $15,000</td>
                                <td>Premium material; longer install time</td>
                                </tr>
                                <tr>
                                <td>Sump Pump Installation</td>
                                <td>$600 – $1,200</td>
                                <td>Primary pump; basin included if needed</td>
                                </tr>
                                <tr>
                                <td>Battery Backup Sump Pump</td>
                                <td>$400 – $900</td>
                                <td>Added to existing primary pump installation</td>
                                </tr>
                                <tr>
                                <td>Bathroom Rough-In (New Bath)</td>
                                <td>$2,000 – $5,000</td>
                                <td>Supply, drain, vent; full permit included</td>
                                </tr>
                                <tr>
                                <td>Toilet Replacement</td>
                                <td>$350 – $700</td>
                                <td>Standard replacement; includes wax ring and supply line</td>
                                </tr>
                                <tr>
                                <td>Faucet / Fixture Replacement</td>
                                <td>$200 – $500</td>
                                <td>Per fixture; homeowner-supplied or contractor-supplied</td>
                                </tr>
                                <tr>
                                <td>Garbage Disposal Installation</td>
                                <td>$250 – $500</td>
                                <td>Includes electrical coordination if needed</td>
                                </tr>
                                <tr>
                                <td>Water Softener Installation</td>
                                <td>$800 – $2,000</td>
                                <td>Unit cost additional; Bethesda's hard water makes this popular</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="cta-banner">
                        <h2>Get a Free Plumbing Estimate for Your Bethesda Home</h2>
                        <p>Our licensed plumbers will assess your plumbing system and provide a detailed, no-surprise estimate — at no charge. Available 7 days a week.</p>
                        <Link href="/contact-us" className="cta-btn">Schedule Free Plumbing Estimate →</Link>
                    </div>

                    <h2>Why Choose DMV General Contracting Group for Plumbing in Bethesda</h2>
                    <p>
                        Plumbing work in Bethesda's older homes requires experience — older pipe configurations, tight crawl spaces, concrete slab penetrations, and below-grade basement bathrooms all demand a plumber who has seen these challenges before. DMV General Contracting Group's in-house plumbing team handles all of it.
                    </p>

                    <div className="trust-grid">
                        <div className="trust-box">
                        <div className="icon">📋</div>
                        <strong>All Work Permitted</strong>
                        <span>Every job permitted and inspected per Montgomery County code</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">🔧</div>
                        <strong>In-House Licensed Plumbers</strong>
                        <span>Our own licensed crew — not subcontracted to outside parties</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">🏗️</div>
                        <strong>Remodel Coordination</strong>
                        <span>Plumbing perfectly timed with tile, electrical, and carpentry crews</span>
                        </div>
                    </div>

                    <div className="highlight">
                        <p>⭐ <strong>4.9-star rated with 97+ reviews.</strong> As a full-service design-build contractor, DMV General Contracting Group coordinates plumbing with every other trade on your renovation project — no scheduling conflicts, no gaps between plumber and tile setter, and no change orders from coordination mistakes between separate contractors.</p>
                    </div>

                    <h2>Our Plumbing Service Process in Bethesda</h2>

                    <div className="steps">
                        <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free Plumbing Assessment & Estimate</h3>
                            <p>We visit your Bethesda home, assess your existing plumbing system — pipes, water heater, fixtures, and drainage — discuss your needs, and provide a detailed written estimate at no charge. For repiping projects, we inspect all accessible pipe in the basement and utility areas to identify pipe material and condition.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Permit Application</h3>
                            <p>For all permitted plumbing work (water heaters, repiping, new bathrooms, new rough-in), we file all required Montgomery County plumbing permits before work begins. We handle all county correspondence and inspection scheduling — you don't need to contact the county at any point.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Plumbing Work Performed</h3>
                            <p>Our licensed plumbers complete all work cleanly and professionally — protecting finishes, walls, and cabinets throughout. For repiping projects, we open only the walls and ceilings necessary to access and replace pipes, and coordinate drywall patching and painting as a follow-on step.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Montgomery County Inspection</h3>
                            <p>We schedule and manage all required plumbing inspections — rough-in inspections for in-wall pipes and final inspections for fixtures, water heaters, and completed systems. We address any inspector comments promptly to keep your project on track.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Final Testing & Walkthrough</h3>
                            <p>We test all new plumbing — running water at every fixture, checking for leaks at every connection, verifying water heater operation and temperature, and confirming drainage is functioning correctly. We do a complete walkthrough with you before closing the job.</p>
                        </div>
                        </div>
                    </div>

                    <h2>Serving Bethesda and Surrounding Areas for Plumbing Services</h2>

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
                        <h3>Water heater replacement & repiping in Chevy Chase & Potomac, MD</h3>
                        <p>Chevy Chase and Potomac have significant older housing stock — many colonials and cape cods with galvanized steel pipes and aging tank water heaters that are well overdue for replacement. DMV General Contracting Group regularly performs water heater replacements, polybutylene repipes, and whole-home PEX repiping projects throughout both communities. We are fully familiar with WSSC (Washington Suburban Sanitary Commission) requirements that apply to plumbing work in these areas.</p>
                    </div>

                    <div className="nearby">
                        <h3>Sump pump & basement plumbing in Kensington & Silver Spring, MD</h3>
                        <p>Kensington, Silver Spring, and Wheaton homeowners frequently need sump pump installations and basement bathroom rough-in work — the terrain and older infrastructure in these communities create drainage challenges that require experienced plumbers who understand below-grade plumbing in Maryland's climate. DMV General Contracting Group handles all basement plumbing needs across Montgomery County.</p>
                    </div>

                    <h2>Frequently Asked Questions — Plumbing Services in Bethesda, MD</h2>
                    
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
                    <p>DMV General Contracting Group's licensed plumbers support every renovation we undertake — and handle standalone plumbing projects across Bethesda:</p>
                    <ul style={{margin: '12px 0 24px 20px', color: '#1a6b9a', fontSize: '15px', lineHeight: 2}}>
                        <li><Link href="/service/bathroom-remodeling" style={{color: '#1a6b9a'}}>Bathroom Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/kitchen-remodeling" style={{color: '#1a6b9a'}}>Kitchen Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/basement-remodeling" style={{color: '#1a6b9a'}}>Basement Finishing & Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/home-additions" style={{color: '#1a6b9a'}}>Home Additions in Bethesda, MD</Link></li>
                        <li><Link href="/service/adu" style={{color: '#1a6b9a'}}>ADU Construction in Bethesda, MD</Link></li>
                        <li><Link href="/service/electrical-services" style={{color: '#1a6b9a'}}>Electrical Services in Bethesda, MD</Link></li>
                    </ul>

                    <div className="cta-banner">
                        <h2>Need a Licensed Plumber in Bethesda, MD?</h2>
                        <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free plumbing assessment online. Available 7 days a week across Bethesda and the DMV area.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Plumbing Estimate →</Link>
                    </div>
                </div>
            </StyledCom>
        </main>
    );
}