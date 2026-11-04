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

    .danger-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin: 16px 0 24px; }
    .danger-box { padding: 16px 14px; background: var(--card-style2-bg); border: 1px solid var(--card-style2-border); border-radius: 10px; }
    .danger-box .icon { font-size: 34px; margin-bottom: 8px; }
    .danger-box h3 { font-size: 16px; font-family: sans-serif; font-weight: 700; color: var(--primary-color); margin: 0 0 4px; }
    .danger-box p { font-size: 14px; color: #666; margin: 0; line-height: 1.5; }

    .ev-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 16px 0 24px; }
    .ev-box { padding: 18px 16px; background: var(--card-style2-bg); border: 1px solid var(--card-style2-border); border-radius: 10px; }
    .ev-box h3 { font-size: 14px; font-family: sans-serif; font-weight: 700; color: var(--primary-color); margin: 0 0 6px; }
    .ev-box p { font-size: 13px; color: #555; margin: 0; line-height: 1.6; }


    @media (max-width: 600px) {
        h1 { font-size: 26px; }
        .service-grid { grid-template-columns: 1fr; }
        .trust-grid { grid-template-columns: 1fr; }
        .cat-grid { grid-template-columns: 1fr; }
        .danger-grid { grid-template-columns: 1fr; }
        .ev-grid { grid-template-columns: 1fr; }

        .main-image{height: 250px;}
        .cta-btn {  padding: 12px 12px; font-size: 14px; }
    }
`;

export default function ElectricalServices({ data }) {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const faqData = [
        {
            question: "How much does an electrical panel upgrade cost in Bethesda, MD?",
            answer:
            `An electrical panel upgrade in Bethesda typically costs $3,000–$5,000 for a 100A to 200A upgrade, and $5,000–$9,000 for a 200A to 400A service upgrade. These prices include the new panel, all breakers, Montgomery County permit fees, and the required inspection. Federal Pacific or Zinsco panel replacements run $3,500–$6,000. DMV General Contracting Group provides free electrical estimates for panel work throughout Bethesda and Montgomery County.`
        },
        {
            question: "How much does EV charger installation cost in Bethesda, MD?",
            answer:
            `EV charger installation in Bethesda typically costs $500–$1,500 for a Level 2 (240V) home charger — including a dedicated circuit, all wiring from panel to garage, charger mounting, and all required Montgomery County permits and inspections. If your existing panel needs an upgrade to support the EV charger, that cost is quoted separately. We install all major EV charger brands including Tesla Wall Connector, ChargePoint, JuiceBox, and Emporia.`
        },
        {
            question: "Does DMV General Contracting Group pull electrical permits in Bethesda, MD?",
            answer:
            `Yes — all electrical work performed by DMV General Contracting Group in Bethesda and Montgomery County is fully permitted and inspected. We file all required electrical permits and schedule all county inspections. Permitted electrical work is essential for your homeowner's insurance coverage, your home's resale value, and your family's safety. We never perform unpermitted electrical work.`
        },
        {
            question: "What are signs I need an electrical panel upgrade in my Bethesda home?",
            answer:
            `Key signs include: circuit breakers that trip frequently, lights that flicker or dim when appliances run, a panel that still uses fuses, a 60A or 100A panel with modern appliances, inability to add new circuits for EV chargers or HVAC systems, a Federal Pacific Stab-Lok or Zinsco panel (both fire hazards), or a panel that feels warm to the touch. If your Bethesda home has any of these signs, call DMV General Contracting Group for a free electrical assessment.`
        },
        {
            question: "Can DMV General Contracting Group rewire an older home in Bethesda?",
            answer:
            `Yes. We perform whole-home rewiring projects throughout Bethesda — replacing knob-and-tube wiring, aluminum branch circuit wiring, and other outdated systems with modern copper wiring, new panels, updated outlets, and full GFCI and AFCI protection. Whole-home rewiring in Bethesda typically costs $8,000–$20,000+ depending on home size, story count, and accessibility. We provide free assessments and detailed estimates for all rewiring projects.`
        },
        {
            question: "Does DMV General Contracting Group install whole-home generators in Bethesda?",
            answer:
            `Yes. We install standby whole-home generators throughout Bethesda and Montgomery County — handling the complete installation including generator pad construction, automatic transfer switch, utility coordination, gas line connection, and all required permits and inspections. We install Generac, Kohler, and Briggs & Stratton generators that activate automatically within seconds of a power outage, keeping your Bethesda home powered through any storm.`
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
                        Electrical Services Bethesda, MD
                    </nav>

                    <div className="hero">
                        <h1>Licensed Electrical Services in Bethesda, MD</h1>
                        <div className="hero-meta">
                        <span className="hero-badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="hero-badge">✓ MHIC Licensed & Insured</span>
                            <span className="hero-badge">✓ DLCP Licensed</span>
                        <span className="hero-badge">✓ All Work Permitted & Inspected</span>
                        <span className="hero-badge">✓ Free Electrical Estimate</span>
                        </div>
                    </div>

                    <div className="image-holder main-image">
                        <img src={`.${data.image}`} alt={data.title}/>
                    </div>

                    <div className="intro">
                        Looking for a trusted <strong>licensed electrician in Bethesda, MD</strong>? DMV General Contracting Group provides comprehensive residential electrical services throughout Bethesda and Montgomery County — from electrical panel upgrades and EV charger installation to whole-home rewiring, recessed lighting, generator hookups, and smart home electrical work. As a full-service design-build contractor, our licensed electricians work as part of our in-house team — meaning your electrical work is fully coordinated with any remodeling project, or completed as a standalone service. All electrical work is permitted and inspected per Montgomery County code requirements.
                    </div>

                    <h2>Electrical Services We Offer in Bethesda, MD</h2>
                    <p>
                        DMV General Contracting Group's licensed electrical team handles the full range of residential electrical needs for Bethesda homeowners — from simple circuit additions to full-home rewiring and service upgrades.
                    </p>

                    <div className="service-grid">
                        <div className="service-item">Electrical Panel Upgrade (100A → 200A → 400A)</div>
                        <div className="service-item">EV Charger Installation (Level 2 / 240V)</div>
                        <div className="service-item">Whole-Home Rewiring</div>
                        <div className="service-item">New Circuit Installation</div>
                        <div className="service-item">Recessed Lighting Installation</div>
                        <div className="service-item">Ceiling Fan Installation & Wiring</div>
                        <div className="service-item">Outlet & Switch Replacement</div>
                        <div className="service-item">GFCI & AFCI Outlet Installation</div>
                        <div className="service-item">Dedicated Appliance Circuits</div>
                        <div className="service-item">Whole-Home Generator Installation</div>
                        <div className="service-item">Transfer Switch Installation</div>
                        <div className="service-item">Smart Home Wiring & Device Installation</div>
                        <div className="service-item">Smoke & Carbon Monoxide Detector Wiring</div>
                        <div className="service-item">Outdoor & Landscape Lighting</div>
                        <div className="service-item">Subpanel Installation</div>
                        <div className="service-item">Electrical Inspection & Safety Assessment</div>
                    </div>

                    <h2>Electrical Service Categories — Bethesda Residential</h2>
                    <p>
                        Here's a breakdown of our most in-demand <strong>residential electrical services in Bethesda</strong>, organized by category:
                    </p>

                    <div className="cat-grid">
                        <div className="cat-card">
                        <span className="tag">High Priority</span>
                        <h3>⚡ Panel & Service Upgrades</h3>
                        <ul>
                            <li>100A to 200A panel upgrade</li>
                            <li>200A to 400A service upgrade</li>
                            <li>Federal Pacific / Zinsco panel replacement</li>
                            <li>Fuse box to breaker panel conversion</li>
                            <li>Subpanel installation for additions or garages</li>
                            <li>Utility service entrance upgrade</li>
                        </ul>
                        </div>
                        <div className="cat-card">
                        <span className="tag">Most Requested</span>
                        <h3>🚗 EV Charging & Modern Circuits</h3>
                        <ul>
                            <li>Level 2 EV charger installation (240V)</li>
                            <li>Tesla Wall Connector installation</li>
                            <li>ChargePoint, JuiceBox, Emporia installation</li>
                            <li>Dedicated 20A kitchen or bathroom circuits</li>
                            <li>Dedicated HVAC & appliance circuits</li>
                            <li>Hot tub & pool electrical hookup</li>
                        </ul>
                        </div>
                        <div className="cat-card">
                        <span className="tag">Safety Critical</span>
                        <h3>🏠 Rewiring & Safety Upgrades</h3>
                        <ul>
                            <li>Knob-and-tube wiring replacement</li>
                            <li>Aluminum branch circuit wiring remediation</li>
                            <li>AFCI breaker installation (arc-fault protection)</li>
                            <li>GFCI outlet installation in all wet areas</li>
                            <li>Smoke & CO detector hardwiring</li>
                            <li>Whole-home electrical safety inspection</li>
                        </ul>
                        </div>
                        <div className="cat-card">
                        <span className="tag">Lifestyle Upgrades</span>
                        <h3>💡 Lighting & Smart Home</h3>
                        <ul>
                            <li>Recessed LED lighting installation</li>
                            <li>Under-cabinet lighting wiring</li>
                            <li>Dimmer switch installation</li>
                            <li>Smart switch & outlet installation (Lutron, Leviton)</li>
                            <li>Home automation system wiring</li>
                            <li>Outdoor, patio & landscape lighting</li>
                        </ul>
                        </div>
                        <div className="cat-card">
                        <span className="tag">Backup Power</span>
                        <h3>🔋 Generator & Backup Power</h3>
                        <ul>
                            <li>Whole-home standby generator installation</li>
                            <li>Generac, Kohler & Briggs & Stratton installation</li>
                            <li>Automatic transfer switch installation</li>
                            <li>Manual transfer switch installation</li>
                            <li>Portable generator hookup & interlock</li>
                            <li>Gas line coordination for generator fuel</li>
                        </ul>
                        </div>
                        <div className="cat-card">
                        <span className="tag">Remodel Support</span>
                        <h3>🔨 Renovation Electrical</h3>
                        <ul>
                            <li>Kitchen remodel electrical rough-in</li>
                            <li>Bathroom electrical & exhaust fan wiring</li>
                            <li>Basement finishing electrical</li>
                            <li>Home addition electrical rough-in</li>
                            <li>ADU electrical service installation</li>
                            <li>Garage & workshop electrical</li>
                        </ul>
                        </div>
                    </div>

                    <h2>Electrical Panel Upgrade in Bethesda, MD</h2>
                    <p>
                        One of the most common electrical needs in Bethesda's older housing stock is a <strong>panel upgrade</strong>. Bethesda homes built before 1990 — especially colonials and cape cods in neighborhoods like Edgemoor, Burning Tree, and Wyngate — frequently have 100-amp panels that were adequate for that era but are no longer sufficient for modern electrical demand.
                    </p>

                    <p>Today's Bethesda homes need more capacity for:</p>
                    <ul style={{margin: '12px 0 24px 20px', color: '#333', fontSize: '15px', lineHeight: 2}}>
                        <li>Electric vehicle chargers (Level 2 requires a dedicated 50A circuit)</li>
                        <li>Air source heat pumps and modern HVAC systems</li>
                        <li>Electric ranges, dryers, and induction cooktops</li>
                        <li>Home additions and finished basements</li>
                        <li>Hot tubs, pools, and outdoor entertainment systems</li>
                        <li>Home office setups with multiple high-draw devices</li>
                    </ul>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table panel-table">
                                <tr>
                                <th>Panel Size</th>
                                <th>Best For</th>
                                <th>Typical Bethesda Cost</th>
                                <th>Can Support EV Charger?</th>
                                </tr>
                                <tr>
                                <td><strong>100-Amp Panel</strong></td>
                                <td>Small older homes — no longer recommended as primary service</td>
                                <td>N/A (upgrade needed)</td>
                                <td>⚠️ Marginal — may need upgrade first</td>
                                </tr>
                                <tr>
                                <td><strong>200-Amp Panel</strong></td>
                                <td>Most Bethesda single-family homes — today's standard</td>
                                <td>$3,000 – $5,000</td>
                                <td>✅ Yes — supports Level 2 EV charger</td>
                                </tr>
                                <tr>
                                <td><strong>400-Amp Panel</strong></td>
                                <td>Large Bethesda homes, EVs + heat pumps + pool</td>
                                <td>$5,000 – $9,000</td>
                                <td>✅ Yes — supports multiple EVs & all loads</td>
                                </tr>
                                <tr>
                                <td><strong>Subpanel Addition</strong></td>
                                <td>Garages, additions, ADUs, workshops</td>
                                <td>$1,500 – $3,500</td>
                                <td>✅ Yes — can be sized for EV charging</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="danger-note">
                        🚨 <strong>Federal Pacific & Zinsco Panels — Bethesda Safety Warning:</strong> Many Bethesda homes built between 1950 and 1990 still have Federal Pacific Electric (Stab-Lok) or Zinsco panels — both identified as fire hazards due to breakers that fail to trip during overloads. If your Bethesda home has either of these panels, replacement is strongly recommended regardless of your home's overall electrical capacity. DMV General Contracting Group identifies and replaces these panels regularly throughout Bethesda and Montgomery County.
                    </div>

                    <h2>EV Charger Installation in Bethesda, MD</h2>
                    <p>
                        Electric vehicle ownership in Bethesda has grown dramatically — and <strong>Level 2 EV charger installation</strong> is now one of our most requested electrical services throughout Montgomery County. A Level 2 charger (240V) charges most EVs 5–8x faster than a standard 120V outlet, making it essential for daily home charging.
                    </p>

                    <div className="ev-grid">
                        <div className="ev-box">
                        <h3>Level 1 Charging (120V)</h3>
                        <p>Uses a standard household outlet. Adds approximately 3–5 miles of range per hour — suitable only for PHEVs or drivers with very short daily commutes. No installation required, but very slow for full EVs.</p>
                        </div>
                        <div className="ev-box">
                        <h3>Level 2 Charging (240V) — Recommended</h3>
                        <p>Requires a dedicated 240V circuit installed by a licensed electrician. Adds 20–35 miles of range per hour. Most Bethesda EV owners fully charge overnight with a Level 2 charger. This is the standard home EV charging solution.</p>
                        </div>
                        <div className="ev-box">
                        <h3>EV Charger Brands We Install</h3>
                        <p>Tesla Wall Connector, ChargePoint Home Flex, JuiceBox Pro, Emporia EV Charger, Grizzl-E, Wallbox, and hardwired NEMA 14-50 outlets compatible with all EV brands and portable chargers.</p>
                        </div>
                        <div className="ev-box">
                        <h3>What's Included in Our EV Install</h3>
                        <p>Dedicated 240V circuit from panel to garage, charger mounting, all required Montgomery County permits, inspection scheduling, and final testing. Panel upgrade included if needed and quoted separately.</p>
                        </div>
                    </div>

                    <div className="tip">
                        💡 <strong>Bethesda EV Tax Credit Tip:</strong> The federal EV charger tax credit (30C) allows homeowners to claim 30% of the cost of EV charger installation (up to $1,000) when filing federal taxes. Maryland also offers additional EV equipment incentives. Ask your tax advisor about eligibility when planning your EV charger installation.
                    </div>

                    <h2>Electrical Warning Signs in Bethesda Homes</h2>
                    <p>
                        Many Bethesda homes — particularly those built between 1950 and 1985 — have electrical systems that no longer meet current safety standards. Here are the most important warning signs that your home's electrical system needs professional attention:
                    </p>

                    <div className="danger-grid">
                        <div className="danger-box">
                        <div className="icon">⚡</div>
                        <h3>Frequently Tripping Breakers</h3>
                        <p>Circuit breakers that trip regularly signal that circuits are overloaded — a sign the panel or wiring is undersized for current demand.</p>
                        </div>
                        <div className="danger-box">
                        <div className="icon">💡</div>
                        <h3>Flickering or Dimming Lights</h3>
                        <p>Lights that flicker or dim when appliances run indicate voltage fluctuations — often caused by loose connections, undersized wiring, or a failing panel.</p>
                        </div>
                        <div className="danger-box">
                        <div className="icon">🔌</div>
                        <h3>Outlets That Spark or Feel Warm</h3>
                        <p>Warm, discolored, or sparking outlets are serious fire hazards. Immediate inspection is needed — this is never normal behavior.</p>
                        </div>
                        <div className="danger-box">
                        <div className="icon">👃</div>
                        <h3>Burning Smell from Outlets or Panel</h3>
                        <p>Any burning or electrical smell near outlets, switches, or the panel requires immediate professional attention — this is a fire emergency warning sign.</p>
                        </div>
                        <div className="danger-box">
                        <div className="icon">🏠</div>
                        <h3>Two-Prong Outlets Throughout</h3>
                        <p>Ungrounded two-prong outlets throughout the home indicate very old wiring without a ground — a safety issue that also prevents use of modern three-prong devices safely.</p>
                        </div>
                        <div className="danger-box">
                        <div className="icon">📦</div>
                        <h3>Fuse Box Instead of Breakers</h3>
                        <p>Homes still using a fuse box have electrical systems 60+ years old. Fuse boxes are a fire hazard and insurance companies in Maryland may refuse to insure them.</p>
                        </div>
                    </div>

                    <h2>Whole-Home Rewiring in Bethesda, MD</h2>
                    <p>
                        Many Bethesda homes built before 1980 contain wiring types that are no longer safe or code-compliant. <strong>Whole-home rewiring</strong> is the comprehensive solution — replacing outdated wiring throughout the entire home with modern copper wiring, new outlets, updated panels, and full GFCI/AFCI protection.
                    </p>
                    <p>
                        The two most common outdated wiring types we encounter in Bethesda homes are:
                    </p>
                    <p>
                        <strong>Knob-and-Tube Wiring (pre-1950):</strong> Found in the oldest Bethesda homes — particularly in Edgemoor, Chevy Chase DC, and sections of Battery Park. Knob-and-tube uses ungrounded, uninsulated conductors that were never designed for today's electrical loads. Most Maryland homeowners insurance policies will not cover homes with active knob-and-tube wiring.
                    </p>
                    <p>
                        <strong>Aluminum Branch Circuit Wiring (1965–1973):</strong> During a copper shortage, many homes nationwide were wired with aluminum instead of copper. Aluminum wiring expands and contracts differently than copper, causing connections to loosen over time — a leading cause of electrical fires. Bethesda homes built in this era should be inspected for aluminum wiring. Full replacement or CO/ALR remediation at every connection point is required.
                    </p>

                    <div className="highlight">
                        <p>🏠 <strong>Homeowner Insurance Note:</strong> Many Maryland homeowners insurance carriers charge higher premiums or refuse coverage entirely for homes with knob-and-tube wiring, Federal Pacific panels, or aluminum branch circuit wiring. Rewiring your Bethesda home can directly reduce your insurance costs and improve your home's insurability and resale value.</p>
                    </div>

                    <h2>Electrical Service Cost in Bethesda, MD</h2>
                    <p>
                        Here is a general cost guide for the most common <strong>electrical services in Bethesda, Maryland</strong>. All prices are installed and include Montgomery County permit fees where applicable:
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
                                <td>Panel Upgrade (100A → 200A)</td>
                                <td>$3,000 – $5,000</td>
                                <td>Includes permit, new panel, breakers, and inspection</td>
                                </tr>
                                <tr>
                                <td>Panel Upgrade (200A → 400A)</td>
                                <td>$5,000 – $9,000</td>
                                <td>May require utility coordination and meter upgrade</td>
                                </tr>
                                <tr>
                                <td>Federal Pacific / Zinsco Replacement</td>
                                <td>$3,500 – $6,000</td>
                                <td>Full panel replacement with same capacity upgrade</td>
                                </tr>
                                <tr>
                                <td>EV Charger Installation (Level 2)</td>
                                <td>$500 – $1,500</td>
                                <td>Dedicated 240V circuit + charger mount; panel upgrade extra if needed</td>
                                </tr>
                                <tr>
                                <td>New Circuit Installation</td>
                                <td>$300 – $800 per circuit</td>
                                <td>Varies by distance from panel and accessibility</td>
                                </tr>
                                <tr>
                                <td>Recessed Lighting (per fixture)</td>
                                <td>$150 – $350</td>
                                <td>Includes wiring, dimmer switch, and LED trim kit</td>
                                </tr>
                                <tr>
                                <td>Whole-Home Rewiring</td>
                                <td>$8,000 – $20,000+</td>
                                <td>Depends on home size, story count, and accessibility</td>
                                </tr>
                                <tr>
                                <td>Standby Generator Installation</td>
                                <td>$5,000 – $12,000+</td>
                                <td>Includes transfer switch, pad, gas line; generator cost extra</td>
                                </tr>
                                <tr>
                                <td>GFCI Outlet Installation</td>
                                <td>$150 – $300 per outlet</td>
                                <td>Required in all bathrooms, kitchens, garages, outdoors</td>
                                </tr>
                                <tr>
                                <td>Subpanel Installation</td>
                                <td>$1,500 – $3,500</td>
                                <td>For garages, additions, ADUs, or workshops</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="cta-banner">
                        <h2>Get a Free Electrical Estimate for Your Bethesda Home</h2>
                        <p>Our licensed electricians will assess your electrical system and provide a detailed, no-surprise estimate — at no charge. Available 7 days a week.</p>
                        <Link href="/contact-us" className="cta-btn">Schedule Free Electrical Estimate →</Link>
                    </div>

                    <h2>Why Choose DMV General Contracting Group for Electrical Work in Bethesda</h2>
                    <p>
                        Electrical work is not where you want to cut corners — in Bethesda's older housing stock, improperly done electrical work is a leading cause of house fires and insurance claim denials. DMV General Contracting Group's electricians are licensed, permitted, and inspected on every job.
                    </p>

                    <div className="trust-grid">
                        <div className="trust-box">
                        <div className="icon">📋</div>
                        <strong>All Work Permitted</strong>
                        <span>Every job pulled and inspected per Montgomery County code</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">🔧</div>
                        <strong>In-House Electricians</strong>
                        <span>Our own licensed crew — not subcontracted to unknown parties</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">🏗️</div>
                        <strong>Remodel Coordination</strong>
                        <span>Electrical perfectly timed with any remodel or addition project</span>
                        </div>
                    </div>

                    <div className="highlight">
                        <p>⭐ <strong>4.9-star rated with 97+ reviews.</strong> As a full-service design-build contractor, DMV General Contracting Group is uniquely positioned to handle electrical as part of a larger renovation — or as a standalone service. Our electricians are on the same team as our architects, plumbers, and carpenters — meaning zero coordination issues and no gaps between trades.</p>
                    </div>

                    <h2>Our Electrical Service Process in Bethesda</h2>

                    <div className="steps">
                        <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free Electrical Assessment & Estimate</h3>
                            <p>We visit your Bethesda home, assess your existing electrical panel, wiring, and outlets, discuss your needs (panel upgrade, EV charger, remodel, or safety concerns), and provide a detailed written estimate at no charge.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Permit Application to Montgomery County</h3>
                            <p>For all permitted work (panel upgrades, new circuits, rewiring, generators), we file all required electrical permits with Montgomery County — including load calculations where required. You don't need to contact the county.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Electrical Work Performed</h3>
                            <p>Our licensed electricians complete all work neatly and professionally — protecting walls, cabinets, and finished surfaces throughout. For panel upgrades, we coordinate the brief power outage window with you to minimize disruption to your household.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Montgomery County Inspection</h3>
                            <p>We schedule and manage all required electrical inspections with Montgomery County — rough-in inspections for in-wall wiring and final inspections for panels, circuits, and generators. We address any inspector comments promptly to keep your project on track.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Final Walkthrough & Testing</h3>
                            <p>We test all new circuits, outlets, panels, and devices with you — verifying everything works correctly before we close the job. For EV charger installations, we walk you through operation and confirm charging is functioning on your vehicle.</p>
                        </div>
                        </div>
                    </div>

                    <h2>Electrical Services for Bethesda Remodeling Projects</h2>
                    <p>
                        As Bethesda's full-service design-build contractor, DMV General Contracting Group's in-house electricians support every remodeling project we undertake — and are also available for standalone electrical work. Here's how electrical integrates with common Bethesda renovations:
                    </p>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table panel-table">
                                <tr>
                                <th>Remodel Type</th>
                                <th>Typical Electrical Work Included</th>
                                </tr>
                                <tr>
                                <td><strong>Kitchen Remodel</strong></td>
                                <td>Dedicated 20A circuits for appliances, under-cabinet lighting, recessed lighting, GFCI outlets, island circuits, range hood wiring</td>
                                </tr>
                                <tr>
                                <td><strong>Bathroom Renovation</strong></td>
                                <td>GFCI outlets, exhaust fan wiring, vanity lighting, in-floor heat wiring, dedicated circuits for heated towel bars</td>
                                </tr>
                                <tr>
                                <td><strong>Basement Finishing</strong></td>
                                <td>Subpanel or new circuits, recessed lighting, AFCI protection, outlets throughout, bathroom rough-in electrical</td>
                                </tr>
                                <tr>
                                <td><strong>Home Addition</strong></td>
                                <td>Full electrical rough-in for new square footage, extension of existing panel or new subpanel, all fixtures and outlets</td>
                                </tr>
                                <tr>
                                <td><strong>ADU Construction</strong></td>
                                <td>Dedicated electrical service or subpanel for ADU, kitchen circuits, bathroom circuits, HVAC wiring, EV charger option</td>
                                </tr>
                                <tr>
                                <td><strong>Whole-Home Renovation</strong></td>
                                <td>Panel upgrade, complete rewiring, new lighting plan, smart home integration, and all trade coordination</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <h2>Serving Bethesda and Surrounding Areas for Electrical Services</h2>

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
                        <h3>Panel upgrades & EV charger installation in Chevy Chase & Potomac, MD</h3>
                        <p>Chevy Chase and Potomac have some of the highest concentrations of EV ownership and panel upgrade requests near Bethesda — large homes, multiple EVs, and older electrical infrastructure all drive strong demand. DMV General Contracting Group performs panel upgrades and EV charger installations throughout both communities and is fully familiar with the specific utility requirements (Pepco and SMECO service areas) for each neighborhood.</p>
                    </div>

                    <div className="nearby">
                        <h3>Electrical rewiring & safety upgrades in Kensington & Silver Spring, MD</h3>
                        <p>Kensington and Silver Spring have significant older housing stock — 1940s–1960s colonials and cape cods — with knob-and-tube wiring, Federal Pacific panels, and undersized 60A services. DMV General Contracting Group regularly performs full rewiring and panel replacement projects across both communities, restoring electrical safety and insurability to homes that have been overlooked for decades.</p>
                    </div>

                    <h2>Frequently Asked Questions — Electrical Services in Bethesda, MD</h2>
                    
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
                    <p>DMV General Contracting Group's licensed electricians support every service we offer — and are available for standalone electrical projects:</p>
                    <ul style={{margin: '12px 0 24px 20px', color: '#1a6b9a', fontSize: '15px', lineHeight: 2}}>
                        <li><Link href="/service/kitchen-remodeling" style={{color: '#1a6b9a'}}>Kitchen Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling" style={{color: '#1a6b9a'}}>Bathroom Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/basement-remodeling" style={{color: '#1a6b9a'}}>Basement Finishing & Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/home-additions" style={{color: '#1a6b9a'}}>Home Additions in Bethesda, MD</Link></li>
                        <li><Link href="/service/adu" style={{color: '#1a6b9a'}}>ADU Construction in Bethesda, MD</Link></li>
                        <li><Link href="/service/design-build" style={{color: '#1a6b9a'}}>Design-Build Services in Bethesda, MD</Link></li>
                    </ul>

                    <div className="cta-banner">
                        <h2>Need a Licensed Electrician in Bethesda, MD?</h2>
                        <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free electrical assessment online. Available 7 days a week across Bethesda and the DMV area.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Electrical Estimate →</Link>
                    </div>
                </div>
            </StyledCom>
        </main>
    );
}