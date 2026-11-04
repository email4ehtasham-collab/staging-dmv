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

    .repair-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin: 16px 0 24px; }
    .repair-box { padding: 18px 14px; background: var(--card-style1-bg); border: 1px solid var(--card-style1-border); border-radius: 10px; }
    .repair-box .icon { font-size: 34px; margin-bottom: 8px; }
    .repair-box h3 { font-size: 16px; font-family: sans-serif; font-weight: 700; color: var(--primary-color); margin: 0 0 6px; }
    .repair-box p { font-size: 14px; color: #666; margin: 0; line-height: 1.5; }


    @media (max-width: 600px) {
        h1 { font-size: 26px; }
        .service-grid { grid-template-columns: 1fr; }
        .trust-grid { grid-template-columns: 1fr; }
        .cat-grid { grid-template-columns: 1fr; }
        .repair-grid { grid-template-columns: 1fr; }

        .main-image{height: 250px;}
        .cta-btn {  padding: 12px 12px; font-size: 14px; }
    }
`;

export default function Drywall({ data }) {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const faqData = [
        {
            question: "How much does drywall installation cost in Bethesda, MD?",
            answer:
            `New drywall installation in Bethesda typically costs $2.50–$5.00 per square foot installed, including hanging, taping, mudding, and Level 4 finishing. A single room runs $1,000–$2,500. A full basement drywall installation typically costs $3,000–$8,000 depending on size. Ceiling drywall costs slightly more than walls due to the overhead work involved. DMV General Contracting Group provides free, detailed drywall estimates for all Bethesda projects.`
        },
        {
            question: "Can DMV General Contracting Group repair drywall damaged by water in Bethesda?",
            answer:
            `Yes — water damage drywall repair is one of our most common services in Bethesda. We assess the affected area, confirm the moisture source has been resolved (coordinating with plumbing or roofing as needed), remove all damaged drywall, treat for mold if present, and install fresh moisture-resistant drywall finished and textured to match the surrounding area. We never patch over active moisture problems.`
        },
        {
            question: "What is skim coating and when is it needed in Bethesda homes?",
            answer:
            `Skim coating applies a thin layer of joint compound over an entire wall or ceiling to create a perfectly smooth, Level 5 finish. It is commonly needed in older Bethesda homes to smooth over dated textured walls (orange peel, knockdown) before painting, to achieve a semi-gloss-ready surface, or to repair widespread surface damage without full drywall replacement. Many Bethesda homeowners skim coat during renovations to modernize the feel of their walls at a fraction of the cost of full replacement.`
        },
        {
            question: "What are drywall finishing levels and which one do I need?",
            answer:
            `Drywall finishing levels run from Level 0 (no finishing) to Level 5 (full skim coat). Level 4 is the standard for most Bethesda living spaces — adequate for flat, eggshell, or satin paint under normal lighting. Level 5 is recommended for rooms with semi-gloss or gloss paint, strong raking light from large windows, or high-end spaces where any surface variation would be visible. DMV General Contracting Group delivers the appropriate level for each room based on its intended paint finish and lighting conditions.`
        },
        {
            question: "Does DMV General Contracting Group remove popcorn ceilings in Bethesda?",
            answer:
            `Yes. We handle the complete popcorn ceiling removal and replacement process — including asbestos testing coordination for pre-1980 Bethesda homes, safe wet-scrape removal, skim coating or fresh drywall installation, and Level 4 or Level 5 finishing ready for paint. Popcorn ceiling removal typically costs $1.50–$4.00 per square foot in Bethesda. Never attempt to sand or scrape a popcorn ceiling in an older home without asbestos testing first.`
        },
        {
            question: "Does DMV General Contracting Group install moisture-resistant drywall in bathrooms and basements?",
            answer:
            `Yes — using the correct drywall type in each location is a non-negotiable standard for DMV General Contracting Group. We install moisture-resistant greenboard or purple board on all non-tile bathroom walls and in basements, cement board (Durock or HardieBacker) behind all tile in shower and tub surrounds, fire-rated Type X drywall in garages and utility rooms as required by code, and standard drywall in all above-grade living spaces. The right board in the right place prevents mold, structural damage, and code violations.`
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
                        Drywall Services Bethesda, MD
                    </nav>

                    <div className="hero">
                        <h1>Drywall Installation & Repair in Bethesda, MD</h1>
                        <div className="hero-meta">
                        <span className="hero-badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="hero-badge">✓ MHIC Licensed & Insured</span>
                            <span className="hero-badge">✓ DLCP Licensed</span>
                        <span className="hero-badge">✓ 1-Year Warranty</span>
                        <span className="hero-badge">✓ Free Estimate</span>
                        </div>
                    </div>

                    <div className="image-holder main-image">
                        <img src={`.${data.image}`} alt={data.title}/>
                    </div>

                    <div className="intro">
                        Looking for a professional <strong>drywall contractor in Bethesda, MD</strong>? DMV General Contracting Group provides complete drywall installation, repair, and finishing services for Bethesda homeowners — from new construction drywall for additions and basement finishes to water damage repair, skim coating, and Level 5 smooth wall finishing. Our in-house drywall team works seamlessly alongside our plumbing, electrical, painting, and carpentry crews — delivering a finished wall surface that is perfectly prepared for paint, tile, or any final finish you choose.
                    </div>

                    <h2>Drywall Services We Offer in Bethesda, MD</h2>
                    <p>
                        DMV General Contracting Group handles the full range of <strong>residential drywall services in Bethesda</strong> — from new installation in additions and basement finishes to precision repair of existing walls and ceilings.
                    </p>

                    <div className="service-grid">
                        <div className="service-item">New Drywall Installation (Walls & Ceilings)</div>
                        <div className="service-item">Drywall Hanging, Taping & Mudding</div>
                        <div className="service-item">Drywall Finishing (Level 1 through Level 5)</div>
                        <div className="service-item">Skim Coating (Smooth Wall Finish)</div>
                        <div className="service-item">Water Damage Drywall Repair</div>
                        <div className="service-item">Hole & Crack Repair (All Sizes)</div>
                        <div className="service-item">Ceiling Drywall Installation & Repair</div>
                        <div className="service-item">Popcorn Ceiling Removal & Replacement</div>
                        <div className="service-item">Moisture-Resistant Drywall (Bathrooms & Basements)</div>
                        <div className="service-item">Cement Board Installation (Tile Areas)</div>
                        <div className="service-item">Drywall Patching After Plumbing & Electrical</div>
                        <div className="service-item">Texture Matching & Application</div>
                        <div className="service-item">Fire-Rated Drywall Installation</div>
                        <div className="service-item">Sound-Dampening Drywall (QuietRock)</div>
                        <div className="service-item">Plaster Repair & Replacement</div>
                        <div className="service-item">Drywall Preparation for Painting</div>
                    </div>

                    <h2>Drywall Service Categories — Bethesda Residential</h2>
                    <p>
                        Here's how our <strong>drywall services in Bethesda</strong> break down by project type:
                    </p>

                    <div className="cat-grid">
                        <div className="cat-card">
                        <span className="tag">New Construction</span>
                        <h3>🏗️ New Drywall Installation</h3>
                        <ul>
                            <li>Full basement finishing drywall</li>
                            <li>Home addition drywall</li>
                            <li>ADU and in-law suite drywall</li>
                            <li>Garage conversion drywall</li>
                            <li>New room partition walls</li>
                            <li>Ceiling drywall — flat and vaulted</li>
                        </ul>
                        </div>
                        <div className="cat-card">
                        <span className="tag">Most Requested</span>
                        <h3>🔨 Drywall Repair & Patching</h3>
                        <ul>
                            <li>Holes from plumbing & electrical access</li>
                            <li>Impact damage & doorknob holes</li>
                            <li>Settling cracks along seams and corners</li>
                            <li>Nail pops and surface blemishes</li>
                            <li>Patches after pipe repair or rewiring</li>
                            <li>Texture matching on repaired areas</li>
                        </ul>
                        </div>
                        <div className="cat-card">
                        <span className="tag">Water Damage</span>
                        <h3>💧 Water Damage Drywall Repair</h3>
                        <ul>
                            <li>Ceiling drywall from roof or plumbing leaks</li>
                            <li>Wall drywall from pipe bursts or HVAC condensation</li>
                            <li>Mold-affected drywall removal & replacement</li>
                            <li>Moisture-resistant replacement installation</li>
                            <li>Coordination with plumbing & roofing repair</li>
                            <li>Insurance documentation support</li>
                        </ul>
                        </div>
                        <div className="cat-card">
                        <span className="tag">Finishing</span>
                        <h3>✨ Skim Coating & Smooth Finishing</h3>
                        <ul>
                            <li>Full room skim coat (walls & ceilings)</li>
                            <li>Level 5 finish for high-gloss paint</li>
                            <li>Skim coat over existing textured walls</li>
                            <li>Smooth finish preparation for wallpaper</li>
                            <li>Venetian plaster base preparation</li>
                            <li>Pre-paint inspection and touch-ups</li>
                        </ul>
                        </div>
                        <div className="cat-card">
                        <span className="tag">Specialty</span>
                        <h3>🎯 Specialty Drywall Applications</h3>
                        <ul>
                            <li>Popcorn ceiling removal & smooth replacement</li>
                            <li>Fire-rated drywall (Type X) installation</li>
                            <li>Sound-dampening drywall (QuietRock, double-layer)</li>
                            <li>Arched openings & curved wall drywall</li>
                            <li>Coffered & tray ceiling drywall framing</li>
                            <li>Plaster repair in older Bethesda homes</li>
                        </ul>
                        </div>
                        <div className="cat-card">
                        <span className="tag">Remodel Support</span>
                        <h3>🔧 Remodel Drywall Coordination</h3>
                        <ul>
                            <li>Drywall after kitchen remodel (new layout walls)</li>
                            <li>Bathroom drywall & cement board for tile</li>
                            <li>Post-rewiring & repiping patch and finish</li>
                            <li>Open-concept wall removal — patch & blend</li>
                            <li>Basement bathroom & rec room drywall</li>
                            <li>Paint-ready delivery after all trades complete</li>
                        </ul>
                        </div>
                    </div>

                    <h2>Drywall Finishing Levels — Which Level Does Your Bethesda Home Need?</h2>
                    <p>
                        One of the most misunderstood aspects of drywall work is the <strong>finishing level system</strong>. The finish level determines how smooth and prepared the wall surface is before paint — and the wrong level for the intended paint sheen will show every imperfection. Here's what each level means for Bethesda homeowners:
                    </p>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table level-table">
                                <tr>
                                <th>Level</th>
                                <th>Description</th>
                                <th>Best Used For</th>
                                </tr>
                                <tr>
                                <td><strong>Level 0</strong></td>
                                <td>No taping or finishing — bare drywall only</td>
                                <td>Temporary installations, spaces to be tiled over</td>
                                </tr>
                                <tr>
                                <td><strong>Level 1</strong></td>
                                <td>Tape embedded in joint compound — no finishing</td>
                                <td>Fire-rated assemblies, concealed spaces, attics</td>
                                </tr>
                                <tr>
                                <td><strong>Level 2</strong></td>
                                <td>Tape plus one coat of compound; fasteners covered</td>
                                <td>Garages, utility rooms, areas to receive heavy texture</td>
                                </tr>
                                <tr>
                                <td><strong>Level 3</strong></td>
                                <td>Tape plus two coats of compound; medium texture can be applied</td>
                                <td>Areas receiving heavy texture or skip-trowel finishes</td>
                                </tr>
                                <tr>
                                <td><strong>Level 4</strong> <span className="rec">Most Common</span></td>
                                <td>Tape plus three coats of compound; sanded smooth; all fasteners filled</td>
                                <td>Standard finish for flat, eggshell, or satin paint — most living spaces</td>
                                </tr>
                                <tr>
                                <td><strong>Level 5</strong> <span className="rec">Premium</span></td>
                                <td>Full skim coat over entire surface after Level 4; ultimate smooth finish</td>
                                <td>Semi-gloss or gloss paint, strong raking light, high-end spaces</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="tip">
                        💡 <strong>Bethesda Homeowner Tip:</strong> If you plan to paint with eggshell or flat paint in standard lighting — Level 4 is perfect. If you want semi-gloss walls (popular in kitchens and bathrooms), or if your room has large windows with strong side light that rakes across the wall — invest in Level 5 skim coating. Imperfections invisible under flat paint become very obvious under gloss in raking light.
                    </div>

                    <h2>Types of Drywall — Choosing the Right Board for Each Room</h2>
                    <p>
                        Not all drywall is the same. Using the wrong drywall type in the wrong location is one of the most common mistakes in residential construction — leading to mold, structural failure, or code violations. Here's what DMV General Contracting Group installs in each area of your Bethesda home:
                    </p>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table type-table">
                                <tr>
                                <th>Drywall Type</th>
                                <th>Key Feature</th>
                                <th>Where We Use It</th>
                                </tr>
                                <tr>
                                <td><strong>Standard Drywall (White Board)</strong></td>
                                <td>General purpose — 1/2" and 5/8" most common</td>
                                <td>Living rooms, bedrooms, hallways, home offices</td>
                                </tr>
                                <tr>
                                <td><strong>Moisture-Resistant (Green Board / Purple Board)</strong></td>
                                <td>Water-resistant facing paper; higher moisture tolerance</td>
                                <td>Bathrooms (non-tile walls), laundry rooms, basements</td>
                                </tr>
                                <tr>
                                <td><strong>Cement Board (Durock / HardieBacker)</strong></td>
                                <td>Completely waterproof; tile-ready substrate</td>
                                <td>Shower surrounds, tub walls, wet area tile backing</td>
                                </tr>
                                <tr>
                                <td><strong>Fire-Rated Drywall (Type X — 5/8")</strong></td>
                                <td>Glass fiber reinforcement; 1-hour fire rating</td>
                                <td>Garage walls adjacent to living space, utility rooms, required by code</td>
                                </tr>
                                <tr>
                                <td><strong>Sound-Dampening (QuietRock / Double Layer)</strong></td>
                                <td>Viscoelastic polymer layer dampens impact noise</td>
                                <td>Home theaters, master bedrooms above living spaces, ADU party walls</td>
                                </tr>
                                <tr>
                                <td><strong>Lightweight Drywall (UltraLight)</strong></td>
                                <td>30% lighter than standard; same strength</td>
                                <td>Ceilings — reduces installer fatigue and ceiling fastener stress</td>
                                </tr>
                                <tr>
                                <td><strong>Flexible Drywall (FlexBoard)</strong></td>
                                <td>Bends for curved walls without breaking</td>
                                <td>Arched openings, curved accent walls, radius corners</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <h2>Drywall Repair Services in Bethesda, MD</h2>
                    <p>
                        Not every drywall job requires new installation. DMV General Contracting Group handles <strong>drywall repair of all sizes</strong> throughout Bethesda — from small holes and hairline cracks to large sections damaged by water, impact, or access cuts for plumbing and electrical work.
                    </p>

                    <div className="repair-grid">
                        <div className="repair-box">
                        <div className="icon">🔩</div>
                        <h3>Small Hole & Nail Pop Repair</h3>
                        <p>Nail pops, small fastener holes, and minor dings — filled, sanded, and finished to blend seamlessly with existing surface. Typical for pre-sale prep or routine maintenance.</p>
                        </div>
                        <div className="repair-box">
                        <div className="icon">📦</div>
                        <h3>Medium Holes (Up to 6")</h3>
                        <p>Access holes from plumbing, electrical, or cable work — backed, patched, taped, mudded, and finished. Texture matched to existing wall surface.</p>
                        </div>
                        <div className="repair-box">
                        <div className="icon">🚪</div>
                        <h3>Large Holes & Section Replacement</h3>
                        <p>Impact damage, doorknob holes, or large access cuts — new drywall section installed between studs, taped, finished, and textured to match surrounding wall.</p>
                        </div>
                        <div className="repair-box">
                        <div className="icon">〰️</div>
                        <h3>Crack Repair</h3>
                        <p>Hairline cracks from settling, corner bead separations, and tape joint cracking — properly repaired with appropriate compound, sanded, and primed. Not just painted over.</p>
                        </div>
                        <div className="repair-box">
                        <div className="icon">💧</div>
                        <h3>Water Damage Repair</h3>
                        <p>Stained, sagging, or crumbling drywall from roof, plumbing, or HVAC leaks — full removal, moisture source addressed, new moisture-resistant board installed and finished.</p>
                        </div>
                        <div className="repair-box">
                        <div className="icon">🍄</div>
                        <h3>Mold-Affected Drywall</h3>
                        <p>Safe removal of mold-affected drywall, surface treatment per EPA guidelines, moisture barrier installation, and replacement with mold-resistant board.</p>
                        </div>
                    </div>

                    <h2>Water Damage Drywall Repair in Bethesda, MD</h2>
                    <p>
                        Water-damaged drywall is one of the most common repair requests we receive from Bethesda homeowners — caused by roof leaks, burst pipes, HVAC condensation line failures, and bathroom fixture leaks above finished ceilings. Getting it right requires more than just patching the visible damage.
                    </p>

                    <div className="danger-note">
                        🚨 <strong>Important:</strong> Never patch over water-stained drywall without first confirming the water source has been fully resolved. Painting or patching over active moisture traps mold inside your walls — creating a much larger and more expensive problem. DMV General Contracting Group always coordinates with plumbing or roofing crews to confirm the source is fixed before any drywall work begins.
                    </div>

                    <p>
                        Our <strong>water damage drywall repair process in Bethesda</strong> includes:
                    </p>
                    <ul style={{margin: '0 0 20px 22px', color: '#333', fontSize: '15px', lineHeight: 2.2}}>
                        <li>Assessment of affected area and moisture measurement</li>
                        <li>Coordination with plumbing or roofing to address the source</li>
                        <li>Complete removal of all wet, stained, or compromised drywall</li>
                        <li>Inspection of framing and insulation behind the drywall</li>
                        <li>Mold assessment and remediation if present</li>
                        <li>Installation of moisture-resistant replacement drywall where appropriate</li>
                        <li>Taping, finishing, and texture matching to surrounding surfaces</li>
                        <li>Paint-ready delivery — coordinated with painting crew</li>
                    </ul>

                    <h2>Skim Coating in Bethesda, MD — Smooth Walls Without Full Replacement</h2>
                    <p>
                        Many Bethesda homes — particularly those built in the 1970s through 1990s — have textured walls (orange peel, knockdown, or skip-trowel) that look dated and are difficult to paint cleanly. <strong>Skim coating</strong> is the most effective way to transform these textured walls into the smooth, modern wall surfaces that today's Bethesda homeowners prefer — without tearing out and replacing existing drywall.
                    </p>
                    <p>
                        A skim coat applies a thin layer of joint compound over the entire existing wall surface — filling in all texture peaks and valleys — then is sanded perfectly flat before primer and paint. The result is a Level 5 smooth finish that looks like brand-new drywall. Skim coating is also the right solution when walls have widespread minor surface damage, hairline crackling, or worn areas that would look poor under fresh paint without full resurfacing.
                    </p>

                    <div className="highlight">
                        <p>🎨 <strong>Skim Coat Before You Paint:</strong> If your Bethesda home has textured walls and you're planning a full interior repaint — skim coating first adds a modest cost but dramatically improves the final result. Smooth walls make any paint color look more intentional, modern, and high-end. It is one of the highest-impact upgrades per dollar in a home renovation.</p>
                    </div>

                    <h2>Popcorn Ceiling Removal in Bethesda, MD</h2>
                    <p>
                        Popcorn ceilings — that rough, bumpy acoustic texture applied to millions of American ceilings between the 1950s and 1980s — are one of the most dated features found in Bethesda's older homes. Removing popcorn texture and replacing it with a smooth or lightly textured ceiling is one of the most impactful cosmetic upgrades a Bethesda homeowner can make before listing or renovating.
                    </p>
                    <p>
                        DMV General Contracting Group handles the complete popcorn ceiling process: testing for asbestos (required for pre-1980 ceilings in Montgomery County), safe removal, skim coating or fresh drywall installation, and a clean Level 4 or Level 5 finish ready for paint. We protect all floors and fixtures with plastic sheeting and perform a full cleanup upon completion.
                    </p>

                    <div className="danger-note">
                        ⚠️ <strong>Asbestos in Bethesda Popcorn Ceilings:</strong> Popcorn texture applied before 1980 may contain asbestos — a regulated hazardous material that requires licensed abatement before removal. DMV General Contracting Group coordinates asbestos testing as part of our popcorn ceiling process for all pre-1980 Bethesda homes. Never sand or scrape an untested popcorn ceiling in an older home.
                    </div>

                    <h2>Drywall for Remodeling Projects in Bethesda, MD</h2>
                    <p>
                        As Bethesda's full-service design-build contractor, our drywall team is integrated into every remodeling project we complete — and is also available for standalone drywall work. Here's how drywall work integrates with common Bethesda renovations:
                    </p>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table remodel-table">
                                <tr>
                                <th>Project Type</th>
                                <th>Drywall Work Typically Involved</th>
                                </tr>
                                <tr>
                                <td><strong>Kitchen Remodel</strong></td>
                                <td>New layout walls, backsplash backer, patching after electrical and plumbing rough-in, Level 4 finish paint-ready delivery</td>
                                </tr>
                                <tr>
                                <td><strong>Bathroom Renovation</strong></td>
                                <td>Moisture-resistant board on non-tile walls, cement board in shower and tub surround, ceiling finish, patching after fixture changes</td>
                                </tr>
                                <tr>
                                <td><strong>Basement Finishing</strong></td>
                                <td>Full wall and ceiling installation, moisture-resistant board on below-grade exterior walls, bathroom cement board, fire-rated on utility room walls</td>
                                </tr>
                                <tr>
                                <td><strong>Home Addition</strong></td>
                                <td>Complete new installation throughout addition, blending at connection points with existing home, matched finish level throughout</td>
                                </tr>
                                <tr>
                                <td><strong>Open-Concept Conversion</strong></td>
                                <td>Patching ceiling and floor after wall removal, blending texture and finish at removal points, soffit or beam drywall wrap</td>
                                </tr>
                                <tr>
                                <td><strong>Whole-Home Renovation</strong></td>
                                <td>Skim coat existing walls, patch after all trade rough-in, Level 5 finish where specified, uniform surface delivery for painting crew</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <h2>Drywall Service Cost in Bethesda, MD</h2>
                    <p>
                        Here is a general cost guide for common <strong>drywall services in Bethesda, Maryland</strong>:
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
                                <td>New Drywall Installation (per sq ft)</td>
                                <td>$2.50 – $5.00 / sq ft</td>
                                <td>Includes hanging, taping, mudding, Level 4 finish</td>
                                </tr>
                                <tr>
                                <td>Single Room New Drywall</td>
                                <td>$1,000 – $2,500</td>
                                <td>Approx 400 sq ft of wall + ceiling surface</td>
                                </tr>
                                <tr>
                                <td>Basement Drywall (full finish)</td>
                                <td>$3,000 – $8,000</td>
                                <td>Depends on basement size and ceiling height</td>
                                </tr>
                                <tr>
                                <td>Small Hole Repair (under 4")</td>
                                <td>$150 – $400</td>
                                <td>Per repair; texture match included</td>
                                </tr>
                                <tr>
                                <td>Large Hole / Section Repair</td>
                                <td>$400 – $900</td>
                                <td>New board, tape, finish, texture match</td>
                                </tr>
                                <tr>
                                <td>Water Damage Repair</td>
                                <td>$500 – $3,000+</td>
                                <td>Depends on affected area size and mold presence</td>
                                </tr>
                                <tr>
                                <td>Skim Coat — Single Room</td>
                                <td>$800 – $2,000</td>
                                <td>Walls and ceiling; Level 5 finish</td>
                                </tr>
                                <tr>
                                <td>Skim Coat — Whole Home</td>
                                <td>$4,000 – $12,000+</td>
                                <td>Depends on home size and existing condition</td>
                                </tr>
                                <tr>
                                <td>Popcorn Ceiling Removal (per sq ft)</td>
                                <td>$1.50 – $4.00 / sq ft</td>
                                <td>Asbestos testing extra for pre-1980 homes</td>
                                </tr>
                                <tr>
                                <td>Ceiling Drywall Installation (per sq ft)</td>
                                <td>$3.00 – $6.00 / sq ft</td>
                                <td>Higher cost than walls due to overhead work</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="cta-banner">
                        <h2>Get a Free Drywall Estimate for Your Bethesda Home</h2>
                        <p>Our team will assess the scope of your project and provide a detailed, no-surprise estimate — at no charge, with no obligation.</p>
                        <Link href="/contact-us" className="cta-btn">Schedule Free Drywall Estimate →</Link>
                    </div>

                    <h2>Why Choose DMV General Contracting Group for Drywall in Bethesda</h2>
                    <p>
                        The difference between mediocre and excellent drywall work is invisible when done well — but painfully obvious when done poorly. Visible seams, uneven surfaces, texture mismatches, and paint that reveals every imperfection are the results of rushed or unskilled drywall finishing. DMV General Contracting Group's drywall team takes the time to do it right.
                    </p>

                    <div className="trust-grid">
                        <div className="trust-box">
                        <div className="icon">🎯</div>
                        <strong>Seamless Texture Matching</strong>
                        <span>Repairs blend invisibly with existing wall surfaces</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">🏗️</div>
                        <strong>Integrated With All Trades</strong>
                        <span>Drywall coordinated with plumbing, electrical & painting</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">🛡️</div>
                        <strong>Licensed & Warrantied</strong>
                        <span>MHIC licensed, insured, 1-year workmanship warranty</span>
                        </div>
                    </div>

                    <div className="highlight">
                        <p>⭐ <strong>4.9-star rated with 97+ reviews.</strong> As a full-service design-build contractor, DMV General Contracting Group delivers drywall that is paint-ready and seamlessly integrated with every trade that came before it — no visible seams where the drywall crew met the tile crew, no patches that stand out in raking light, and no waiting on separate contractors to show up after the plumber finishes.</p>
                    </div>

                    <h2>Our Drywall Installation Process in Bethesda</h2>

                    <div className="steps">
                        <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free Estimate & Scope Assessment</h3>
                            <p>We visit your Bethesda home, assess the drywall scope — new installation, repair, or skim coat — measure all surfaces, review any special requirements (moisture-resistant, fire-rated, sound-dampening), and provide a detailed written estimate at no charge.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Trade Coordination (For Remodel Projects)</h3>
                            <p>For remodel projects, drywall begins only after all plumbing, electrical, and HVAC rough-in work has passed inspection. Our project manager coordinates the handoff between trades to ensure drywall starts at exactly the right moment — not before inspections, not delayed waiting on another trade.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Drywall Hanging</h3>
                            <p>Drywall sheets are cut to size and hung with the correct fastener pattern for the stud spacing and sheet thickness. Ceilings go first, then walls. We use the appropriate drywall type for each location — standard, moisture-resistant, cement board, or fire-rated as required.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Taping, Mudding & Coat Application</h3>
                            <p>Joints are taped with mesh or paper tape and the first coat of joint compound is applied. After drying and sanding, additional coats are applied as needed to achieve the specified finish level. Corner bead is installed on all outside corners. Each coat requires dry time before the next.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Sanding, Skim Coat (If Specified) & Final Prep</h3>
                            <p>All surfaces are sanded to the specified finish level. For Level 5 specifications, a full skim coat is applied and sanded. All dust is cleaned up thoroughly. A final inspection of every wall and ceiling is done in raking light to identify and address any surface imperfections before primer.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Paint-Ready Delivery</h3>
                            <p>We deliver walls and ceilings that are fully primed and ready for your painting crew — or coordinate directly with our own painting team as the next step in your renovation. No rough edges, no visible seams, no surface issues left for the painter to deal with.</p>
                        </div>
                        </div>
                    </div>

                    <h2>Serving Bethesda and Surrounding Areas for Drywall Services</h2>

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
                        <h3>Skim coating & popcorn ceiling removal in Chevy Chase & Potomac, MD</h3>
                        <p>Chevy Chase and Potomac have significant older housing stock — many 1960s–1980s colonials with textured walls and popcorn ceilings that homeowners want updated before listing or renovating. DMV General Contracting Group performs skim coats and popcorn ceiling removal throughout both communities. For Chevy Chase homes built before 1980, we coordinate asbestos testing as a standard part of our popcorn ceiling process.</p>
                    </div>

                    <div className="nearby">
                        <h3>Drywall repair & water damage restoration in Rockville & Kensington, MD</h3>
                        <p>Rockville and Kensington homeowners frequently need drywall repair after plumbing repairs, roof leaks, and HVAC condensation issues in older homes. DMV General Contracting Group handles drywall repair projects of all sizes throughout both communities — from single-patch repairs to multi-room water damage restoration coordinated with plumbing and roofing crews.</p>
                    </div>

                    <h2>Frequently Asked Questions — Drywall Services in Bethesda, MD</h2>
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
                    <p>DMV General Contracting Group's drywall team supports every renovation we complete — and handles standalone drywall work across Bethesda:</p>
                    <ul style={{margin: '12px 0 24px 20px', color: '#1a6b9a', fontSize: '15px', lineHeight: 2}}>
                        <li><Link href="/service/kitchen-remodeling" style={{color: '#1a6b9a'}}>Kitchen Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling" style={{color: '#1a6b9a'}}>Bathroom Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/basement-remodeling" style={{color: '#1a6b9a'}}>Basement Finishing & Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/home-additions" style={{color: '#1a6b9a'}}>Home Additions in Bethesda, MD</Link></li>
                        <li><Link href="/service/plumbing-services" style={{color: '#1a6b9a'}}>Plumbing Services in Bethesda, MD</Link></li>
                        <li><Link href="/service/electrical-services" style={{color: '#1a6b9a'}}>Electrical Services in Bethesda, MD</Link></li>
                    </ul>

                    <div className="cta-banner">
                        <h2>Need Drywall Work Done in Your Bethesda Home?</h2>
                        <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free estimate online. Available 7 days a week across Bethesda and the DMV area.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Drywall Estimate →</Link>
                    </div>    
                
                </div>
            </StyledCom>
        </main>
    );
}