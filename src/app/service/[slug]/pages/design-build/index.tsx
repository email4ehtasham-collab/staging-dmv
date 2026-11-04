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

    .team-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; margin: 16px 0 28px; }
    .team-box { padding: 18px 16px; background: #f5fbf5; border: 1px solid #cce6cc; border-radius: 10px; text-align: center; }
    .team-box .icon { font-size: 34px; margin-bottom: 8px; }
    .team-box strong {display: block; font-size: 18px; font-family: sans-serif; margin: 0 0 6px; color: #1a6b9a; font-weight: 700; }
    .team-box p { font-size: 13px; color: #555; margin: 0; line-height: 1.6; }

    .project-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; margin: 16px 0 28px; }
    .project-box { padding: 18px 16px; background: #f5fbf5; border: 1px solid #cce6cc; border-radius: 10px; text-align: center; }
    .project-box .icon { font-size: 34px; margin-bottom: 8px; }
    .project-box strong {display: block; font-size: 18px; font-family: sans-serif; margin: 0 0 6px; color: #1a6b9a; font-weight: 700; }
    .project-box p { font-size: 13px; color: #555; margin: 0; line-height: 1.6; }

    .phase-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0 28px; }
    .phase-card { padding: 22px 18px; background: #f4f7fb; border: 1px solid #d0dcea; border-radius: 12px; position: relative; }
    .phase-num { font-size: 11px; font-family: sans-serif; font-weight: 700; color: #fff; background: #1a3a5c; padding: 2px 10px; border-radius: 20px; display: inline-block; margin-bottom: 10px; letter-spacing: 0.04em; }
    .phase-card h3 { font-size: 16px; font-family: sans-serif; margin: 0 0 8px; color: #111; font-weight: 700; }
    .phase-card p { font-size: 13px; color: #555; margin: 0; line-height: 1.6; }


    @media (max-width: 600px) {
        h1 { font-size: 26px; }
        .service-grid { grid-template-columns: 1fr; }
        .trust-grid { grid-template-columns: 1fr; }
        .cat-grid { grid-template-columns: 1fr; }
        .team-grid { grid-template-columns: 1fr; }
        .project-grid { grid-template-columns: 1fr; }
        .phase-grid { grid-template-columns: 1fr; }

        .main-image{height: 250px;}
        .cta-btn {  padding: 12px 12px; font-size: 14px; }
    }
`;

export default function DesignBuild({ data }) {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const faqData = [
        {
            question: "What is a design-build contractor?",
            answer:
            `A design-build contractor provides both the architectural design and the physical construction of a project under one contract and one team. Unlike the traditional approach — where you hire a separate architect, receive finished plans, and then bid those plans to separate general contractors — a design-build firm like DMV General Contracting Group handles architecture, engineering, permits, and construction in-house. One firm, one contract, complete accountability from concept to completion.`
        },
        {
            question: "What is the advantage of design-build over hiring a separate architect and contractor?",
            answer:
            `Three main advantages: faster timelines (design and preconstruction happen simultaneously), better budget control (your design team knows your budget from day one and designs within it), and single-point accountability (one firm is responsible for everything — no blame-shifting between architect and general contractor). For complex Bethesda renovations — additions, whole-home projects, ADUs — design-build consistently delivers better outcomes and fewer surprises than the traditional separated approach.`
        },
        {
            question: "Does DMV General Contracting Group have in-house architects in Bethesda?",
            answer:
            `Yes. DMV General Contracting Group has an in-house architectural and structural engineering team based in North Bethesda, MD. Our architects produce all construction drawings, 3D renderings, and permit-ready plans for every project we undertake. You do not need to hire or coordinate with a separate architectural firm — our design team is part of your project from day one at no separate billing rate.`
        },
        {
            question: "How much does a design-build remodel cost in Bethesda?",
            answer:
            `Design-build project costs in Bethesda depend entirely on scope. Kitchen remodels start around $35,000. Master bathroom renovations start at $25,000. Home additions typically range from $150,000 to $400,000+. Critically, the design-build method does not cost more than the traditional approach — and often costs less, because the same team that designs your project also builds it, eliminating the costly disconnect that leads to budget overruns in separately managed projects.`
        },
        {
            question: "Does DMV General Contracting Group handle permits as part of design-build projects in Bethesda?",
            answer:
            `Yes — permit processing is a core, included part of every design-build project we undertake. Our in-house permit team handles all Montgomery County and Washington DC building permits, zoning approvals, structural plan reviews, and inspection scheduling. You never need to contact a county office, manage any paperwork, or coordinate between your architect and permit office. We handle all of it as the single responsible party for your project.`
        },
        {
            question: "What types of projects does DMV General Contracting Group handle as a design-build contractor in Bethesda?",
            answer:
            `We handle the full range of residential design-build projects in Bethesda — kitchen remodeling, bathroom renovation, home additions, basement finishing, ADU construction, open-concept conversions, whole-home renovations, exterior renovations, and aging-in-place modifications. Our in-house team covers every discipline required: architecture, structural engineering, electrical, plumbing, HVAC, and all finish work. If it involves your home in Bethesda, we can handle it under one roof.`
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
                        Design-Build Contractor Bethesda, MD
                    </nav>

                    <div className="hero">
                        <h1>Design-Build Contractor in Bethesda, MD</h1>
                        <div className="hero-meta">
                        <span className="hero-badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="hero-badge">✓ MHIC Licensed & Insured</span>
                        <span className="hero-badge">✓ DLCP Licensed</span>
                        <span className="hero-badge">✓ In-House Architects & Engineers</span>
                        <span className="hero-badge">✓ Free In-Home Consultation</span>
                        </div>

                        <div style={{marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                            <span style={{fontSize: '14px', fontWeight: 700, color: '#333', alignSelf: 'center'}}>Design-Build in Your Area:</span>
                            <Link href="/service/design-build/wheaton-md" style={{fontSize: '13px', color: '#1a6b9a', textDecoration: 'none', padding: '4px 12px', background: '#ebf6ff', borderRadius: '20px', border: '1px solid #cbe5fb'}}>Wheaton, MD</Link>
                            <Link href="/service/design-build/silver-spring-md" style={{fontSize: '13px', color: '#1a6b9a', textDecoration: 'none', padding: '4px 12px', background: '#ebf6ff', borderRadius: '20px', border: '1px solid #cbe5fb'}}>Silver Spring, MD</Link>
                            <Link href="/service/design-build/potomac-md" style={{fontSize: '13px', color: '#1a6b9a', textDecoration: 'none', padding: '4px 12px', background: '#ebf6ff', borderRadius: '20px', border: '1px solid #cbe5fb'}}>Potomac, MD</Link>
                            <Link href="/service/design-build/kensington-md" style={{fontSize: '13px', color: '#1a6b9a', textDecoration: 'none', padding: '4px 12px', background: '#ebf6ff', borderRadius: '20px', border: '1px solid #cbe5fb'}}>Kensington, MD</Link>
                            <Link href="/service/design-build/gaithersburg-md" style={{fontSize: '13px', color: '#1a6b9a', textDecoration: 'none', padding: '4px 12px', background: '#ebf6ff', borderRadius: '20px', border: '1px solid #cbe5fb'}}>Gaithersburg, MD</Link>
                            <Link href="/service/design-build/chevy-chase-md" style={{fontSize: '13px', color: '#1a6b9a', textDecoration: 'none', padding: '4px 12px', background: '#ebf6ff', borderRadius: '20px', border: '1px solid #cbe5fb'}}>Chevy Chase, MD</Link>
                            <Link href="/service/design-build/north-bethesda-md" style={{fontSize: '13px', color: '#1a6b9a', textDecoration: 'none', padding: '4px 12px', background: '#ebf6ff', borderRadius: '20px', border: '1px solid #cbe5fb'}}>North Bethesda, MD</Link>
                            <Link href="/service/design-build/rockville-md" style={{fontSize: '13px', color: '#1a6b9a', textDecoration: 'none', padding: '4px 12px', background: '#ebf6ff', borderRadius: '20px', border: '1px solid #cbe5fb'}}>Rockville, MD</Link>
                        </div>
                    </div>

                    <div className="image-holder main-image">
                        <img src={`.${data.image}`} alt={data.title}/>
                    </div>

                    <div className="intro">
                        DMV General Contracting Group is a full-service <strong>design-build contractor in Bethesda, MD</strong> — one of the very few remodeling companies in Montgomery County that handles architectural design, structural engineering, permit processing, and complete construction entirely in-house. From your first consultation to your final walkthrough, one team manages every aspect of your project under a single contract. No separate architect. No separate general contractor. No communication gaps. Just one seamless process — design to completion.
                    </div>

                    <h2>What Is Design-Build — And Why Does It Matter for Bethesda Homeowners?</h2>
                    <p>
                        The <strong>design-build method</strong> is a project delivery approach where a single firm is responsible for both the design and construction of your renovation or addition. This is fundamentally different from the traditional approach where a homeowner hires an architect separately, receives finished plans, bids those plans out to multiple general contractors, and then manages the relationship between two separate firms.
                    </p>
                    <p>
                        For Bethesda homeowners — where renovation projects tend to be complex, high-value, and subject to Montgomery County's detailed permitting requirements — the design-build approach eliminates the coordination friction that causes most renovation projects to go over budget and behind schedule.
                    </p>

                    <div className="highlight">
                        <p>🏗️ <strong>The DMV General Contracting Group Difference:</strong> We are not a general contractor who subcontracts design, nor an architectural firm that hands off to a builder. Our architects, engineers, permit specialists, and licensed tradesmen are all on staff — working together from day one on your Bethesda project.</p>
                    </div>

                    <h2>Design-Build vs. Traditional Method — Full Comparison</h2>
                    <p>
                        Most Bethesda homeowners don't realize there are two fundamentally different ways to approach a major renovation. Here's an honest, side-by-side comparison of the <strong>design-build method vs. the traditional design-bid-build method</strong>:
                    </p>
                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <tr>
                                <th>Factor</th>
                                <th>Design-Build (DMV General Contracting Group)</th>
                                <th>Traditional (Separate Architect + GC)</th>
                                </tr>
                                <tr>
                                <td>Number of contracts</td>
                                <td className="good">One contract, one team</td>
                                <td className="poor">Two or more separate contracts</td>
                                </tr>
                                <tr>
                                <td>Communication</td>
                                <td className="good">Single point of contact throughout</td>
                                <td className="poor">Homeowner mediates between architect & GC</td>
                                </tr>
                                <tr>
                                <td>Budget accuracy</td>
                                <td className="good">Design is built around your budget from day one</td>
                                <td className="mid">Architect designs, then bids often exceed budget</td>
                                </tr>
                                <tr>
                                <td>Project timeline</td>
                                <td className="good">Faster — design and construction prep overlap</td>
                                <td className="poor">Slower — design fully complete before bidding starts</td>
                                </tr>
                                <tr>
                                <td>Accountability</td>
                                <td className="good">One firm responsible for everything</td>
                                <td className="poor">Architect and GC can blame each other for problems</td>
                                </tr>
                                <tr>
                                <td>Permit handling</td>
                                <td className="good">Managed in-house by same team that designed</td>
                                <td className="mid">Often bounced between architect and GC</td>
                                </tr>
                                <tr>
                                <td>Design flexibility during construction</td>
                                <td className="good">Easy — same team makes adjustments</td>
                                <td className="poor">Changes require architect re-engagement and fees</td>
                                </tr>
                                <tr>
                                <td>Best for</td>
                                <td>Complex renovations, additions, ADUs, whole-home projects</td>
                                <td>Highly custom new construction with specific architects</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <h2>Our In-House Design-Build Team in Bethesda</h2>
                    <p>
                        What makes DMV General Contracting Group a true <strong>design-build firm in Bethesda</strong> — not just a general contractor who outsources design — is our complete in-house team. Every discipline required for your project lives under one roof:
                    </p>

                    <div className="team-grid">
                        <div className="team-box">
                        <div className="icon">📐</div>
                        <strong>Architects</strong>
                        <span>Floor plans, elevations, 3D renderings, construction drawings for permits</span>
                        </div>
                        <div className="team-box">
                        <div className="icon">🧱</div>
                        <strong>Structural Engineers</strong>
                        <span>Load calculations, beam sizing, foundation analysis for additions & renovations</span>
                        </div>
                        <div className="team-box">
                        <div className="icon">📋</div>
                        <strong>Permit Specialists</strong>
                        <span>Montgomery County & DC permit filing, zoning review, inspection management</span>
                        </div>
                        <div className="team-box">
                        <div className="icon">⚡</div>
                        <strong>Licensed Electricians</strong>
                        <span>Panel upgrades, circuit additions, recessed lighting, EV chargers, code compliance</span>
                        </div>
                        <div className="team-box">
                        <div className="icon">🔧</div>
                        <strong>Licensed Plumbers</strong>
                        <span>Drain & supply rough-in, fixture installation, gas lines, water heater replacement</span>
                        </div>
                        <div className="team-box">
                        <div className="icon">🌡️</div>
                        <strong>HVAC Technicians</strong>
                        <span>System extensions, zone additions, ductwork for home additions & basement finishes</span>
                        </div>
                    </div>

                    <p>
                        When all of these disciplines work together from the start of your project — rather than being brought in sequentially by separate firms — the result is a faster, smoother, and more cost-predictable renovation experience for Bethesda homeowners.
                    </p>

                    <h2>Design-Build Projects We Handle in Bethesda, MD</h2>
                    <p>
                        DMV General Contracting Group's <strong>design-build services in Bethesda</strong> cover the full spectrum of residential renovation and construction projects. We handle everything from single-room renovations to whole-home transformations:
                    </p>

                    <div className="project-grid">
                        <div className="project-box">
                        <div className="icon">🍳</div>
                        <h3>Kitchen Remodeling</h3>
                        <p>Full design-build kitchen renovations including layout redesign, custom cabinetry, and all trades</p>
                        </div>
                        <div className="project-box">
                        <div className="icon">🛁</div>
                        <h3>Bathroom Renovation</h3>
                        <p>Master bath, guest bath, and powder room renovations — design through final tile and fixture</p>
                        </div>
                        <div className="project-box">
                        <div className="icon">🏠</div>
                        <h3>Home Additions</h3>
                        <p>Room additions, second-story additions, and bump-outs with full architectural and structural design</p>
                        </div>
                        <div className="project-box">
                        <div className="icon">🏗️</div>
                        <h3>ADU Construction</h3>
                        <p>Detached ADUs, garage conversions, and in-law suites — zoning, design, permits, and build</p>
                        </div>
                        <div className="project-box">
                        <div className="icon">🪜</div>
                        <h3>Basement Finishing</h3>
                        <p>Complete basement design and finishing — layout, bathroom addition, electrical, and all finishes</p>
                        </div>
                        <div className="project-box">
                        <div className="icon">🏡</div>
                        <h3>Whole-Home Renovation</h3>
                        <p>Complete interior renovations coordinating all trades and finishes across multiple rooms and floors</p>
                        </div>
                        <div className="project-box">
                        <div className="icon">🌿</div>
                        <h3>Exterior Renovations</h3>
                        <p>Roofing, siding, windows, doors, and hardscaping integrated with interior renovation projects</p>
                        </div>
                        <div className="project-box">
                        <div className="icon">📐</div>
                        <h3>Open-Concept Conversion</h3>
                        <p>Load-bearing wall removal with structural engineering — creating open floor plans in Bethesda homes</p>
                        </div>
                        <div className="project-box">
                        <div className="icon">🛎️</div>
                        <h3>Aging-in-Place Renovations</h3>
                        <p>Accessibility upgrades, grab bars, wider doorways, roll-in showers, and barrier-free design</p>
                        </div>
                    </div>

                    <h2>The Design-Build Process at DMV General Contracting Group — Bethesda</h2>
                    <p>
                        Here is exactly how our <strong>design-build process works for Bethesda homeowners</strong> — from the very first conversation to the day you move back into your finished space:
                    </p>

                    <div className="phase-grid">
                        <div className="phase-card">
                        <div className="phase-num">Phase 1</div>
                        <h3>Discovery & Free Consultation</h3>
                        <p>We meet at your Bethesda home to understand your goals, vision, lifestyle needs, and budget. We assess the existing space and discuss what is structurally and aesthetically possible within your parameters — at no charge.</p>
                        </div>
                        <div className="phase-card">
                        <div className="phase-num">Phase 2</div>
                        <h3>Concept Design & Budget Alignment</h3>
                        <p>Our architects develop initial concept sketches and layout options. Critically, our construction team reviews these concepts in parallel to ensure every design choice is buildable within your stated budget — not just aesthetically ideal.</p>
                        </div>
                        <div className="phase-card">
                        <div className="phase-num">Phase 3</div>
                        <h3>Design Development & Material Selection</h3>
                        <p>We refine the approved concept into detailed drawings, 3D renderings, and material selections. You choose finishes, fixtures, cabinetry, tile, and all visible elements — guided by our designers — before any work begins.</p>
                        </div>
                        <div className="phase-card">
                        <div className="phase-num">Phase 4</div>
                        <h3>Construction Documents & Permit Filing</h3>
                        <p>Our architects and structural engineers produce permit-ready construction documents. Our permit specialists file all required Montgomery County or Washington DC permits — managing the full approval process without involving you.</p>
                        </div>
                        <div className="phase-card">
                        <div className="phase-num">Phase 5</div>
                        <h3>Construction & Trade Coordination</h3>
                        <p>Our licensed crews begin construction — demolition, structural, electrical, plumbing, HVAC, framing, drywall, tile, cabinetry, flooring, and all finishes — coordinated by a dedicated project manager who keeps you updated throughout.</p>
                        </div>
                        <div className="phase-card">
                        <div className="phase-num">Phase 6</div>
                        <h3>Inspections, Punch List & Final Walkthrough</h3>
                        <p>We schedule and manage all required county inspections. Upon completion, we do a detailed punch list review with you — addressing every item before we close the project. Your space is handed over clean, complete, and fully inspected.</p>
                        </div>
                    </div>

                    <div className="cta-banner">
                        <h2>Start Your Design-Build Project in Bethesda</h2>
                        <p>Tell us what you're envisioning — our team will visit your home, assess the space, and walk you through exactly what is possible. No cost, no obligation.</p>
                        <Link href="/contact-us" className="cta-btn">Schedule Free Design Consultation →</Link>
                    </div>

                    <h2>Why Bethesda Homeowners Choose Design-Build for Major Renovations</h2>
                    <p>
                        Bethesda renovation projects are rarely simple. Open-concept conversions require structural engineering. Home additions require zoning approval and architectural drawings. Basement ADUs require separate entrances, plumbing rough-in, and egress compliance. The more complex the project, the more a homeowner benefits from having one firm responsible for all of it.
                    </p>

                    <div className="trust-grid">
                        <div className="trust-box">
                        <div className="icon">⏱️</div>
                        <strong>Faster Start-to-Finish</strong>
                        <span>Design and preconstruction planning happen simultaneously — no waiting</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">💰</div>
                        <strong>Better Budget Control</strong>
                        <span>Design is anchored to your real budget from the very first sketch</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">☎️</div>
                        <strong>One Point of Contact</strong>
                        <span>Your project manager knows every detail — design and construction</span>
                        </div>
                    </div>

                    <div className="highlight">
                        <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Bethesda homeowners consistently cite communication and accountability as the top reasons they recommend DMV General Contracting Group. The design-build model makes both possible.</p>
                    </div>

                    <h2>Design-Build Project Costs in Bethesda, MD</h2>
                    <p>
                        A common question from Bethesda homeowners is whether <strong>design-build costs more</strong> than hiring a separate architect and general contractor. The honest answer: it typically costs the same or less. Here's why — and what to expect for common project types in Bethesda:
                    </p>
                    <p>
                        When you hire a separate architect and general contractor, you pay architect fees (typically 10–15% of total construction cost) plus the general contractor markup on all subcontractor work. With design-build, architectural design is bundled into the project cost at no separate billing rate — and because the construction team is involved in design from day one, costly design errors and mid-project surprises are dramatically reduced.
                    </p>
                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <tr>
                                <th>Project Type</th>
                                <th>Typical Design-Build Cost in Bethesda</th>
                                <th>Design Included</th>
                                </tr>
                                <tr>
                                <td>Kitchen Remodel</td>
                                <td>$35,000 – $120,000+</td>
                                <td>Yes — floor plan, 3D renderings, material selection</td>
                                </tr>
                                <tr>
                                <td>Master Bathroom Renovation</td>
                                <td>$25,000 – $90,000+</td>
                                <td>Yes — layout, tile design, fixture selection</td>
                                </tr>
                                <tr>
                                <td>Basement Finishing</td>
                                <td>$30,000 – $130,000+</td>
                                <td>Yes — full floor plan, egress, electrical layout</td>
                                </tr>
                                <tr>
                                <td>Home Addition</td>
                                <td>$150,000 – $400,000+</td>
                                <td>Yes — architectural drawings, structural engineering, permits</td>
                                </tr>
                                <tr>
                                <td>ADU Construction</td>
                                <td>$75,000 – $300,000+</td>
                                <td>Yes — full ADU design, zoning review, permit package</td>
                                </tr>
                                <tr>
                                <td>Whole-Home Renovation</td>
                                <td>$200,000 – $600,000+</td>
                                <td>Yes — comprehensive interior design plan and trade coordination</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <h2>Design-Build Licensing — What to Look for in Bethesda</h2>
                    <p>
                        Not every company that calls itself a "design-build contractor" in Bethesda actually has licensed architects and engineers in-house. Many are simply general contractors who subcontract design to outside firms — which defeats the purpose of the design-build model.
                    </p>
                    <p>
                        When evaluating a <strong>design-build contractor in Bethesda</strong>, ask these critical questions:
                    </p>
                    <ul style={{margin: '12px 0 24px 20px', color: '#333', fontSize: '15px', lineHeight: 2}}>
                        <li>Do you have licensed architects on staff — or do you outsource design?</li>
                        <li>Do you have in-house structural engineers — or do you hire outside?</li>
                        <li>Does your team handle permits directly — or do you use a third-party permit expediter?</li>
                        <li>Are your electricians, plumbers, and HVAC technicians your own employees?</li>
                        <li>Is there a single project manager who oversees design and construction?</li>
                    </ul>
                    <p>
                        At DMV General Contracting Group, the answer to every one of these questions is yes. Our MHIC Maryland license and DLCP Washington DC license cover both the design and construction aspects of every project we undertake in Bethesda and the greater DMV area.
                    </p>

                    <h2>Serving Bethesda and Surrounding Areas for Design-Build Services</h2>
                    <p>
                        DMV General Contracting Group provides <strong>design-build remodeling and construction services throughout Bethesda, MD</strong> and the greater Montgomery County area:
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
                        <h3>Design-build remodeling in Potomac & Chevy Chase, MD</h3>
                        <p>Potomac and Chevy Chase are two of the most active markets near Bethesda for complex design-build projects — large estates, multi-phase whole-home renovations, and high-value additions that require true in-house design and engineering capability. DMV General Contracting Group has completed multiple major design-build projects across both communities and is deeply familiar with the permit requirements and building standards specific to each area.</p>
                    </div>

                    <div className="nearby">
                        <h3>Design-build services in Washington DC</h3>
                        <p>As one of the few contractors holding both a Maryland MHIC license and a Washington DC DLCP license, DMV General Contracting Group provides full design-build services on both sides of the border. DC homeowners in neighborhoods like Friendship Heights, Tenleytown, Chevy Chase DC, and Spring Valley benefit from our same in-house design-to-construction capability without needing to find a separate DC-licensed architect or contractor.</p>
                    </div>

                    <h2>Frequently Asked Questions — Design-Build in Bethesda, MD</h2>
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

                    <h2>Explore Our Design-Build Services in Bethesda</h2>
                    <p>Explore the specific services our design-build team delivers across Bethesda and the DMV area:</p>
                    <ul style={{margin: '12px 0 24px 20px', color: '#1a6b9a', fontSize: '15px', lineHeight: 2}}>
                        <li><Link href="/service/kitchen-remodeling" style={{color: '#1a6b9a'}}>Kitchen Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling" style={{color: '#1a6b9a'}}>Bathroom Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/home-additions" style={{color: '#1a6b9a'}}>Home Additions in Bethesda, MD</Link></li>
                        <li><Link href="/service/basement-remodeling" style={{color: '#1a6b9a'}}>Basement Finishing & Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/adu" style={{color: '#1a6b9a'}}>ADU Construction in Bethesda, MD</Link></li>
                        <li><Link href="/service/flooring-remodeling" style={{color: '#1a6b9a'}}>Flooring Installation in Bethesda, MD</Link></li>
                        <li><Link href="/service/decks" style={{color: '#1a6b9a'}}>Deck Building in Bethesda, MD</Link></li>
                    </ul>

                    <div className="cta-banner">
                        <h2>Ready to Work with a True Design-Build Contractor in Bethesda?</h2>
                        <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free design consultation online. Our architects and project managers are ready to hear your vision — 7 days a week across Bethesda and the DMV area.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Design-Build Consultation →</Link>
                    </div>
                </div>
            </StyledCom>
        </main>
    );
}