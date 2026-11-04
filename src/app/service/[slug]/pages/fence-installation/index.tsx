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

    .purpose-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin: 16px 0 24px; }
    .purpose-box { padding: 18px 14px; background: var(--card-style1-bg); border: 1px solid var(--card-style1-border); border-radius: 10px; text-align: center; }
    .purpose-box .icon { font-size: 34px; margin-bottom: 8px; }
    .purpose-box h3 { font-size: 16px; font-family: sans-serif; font-weight: 700; color: var(--primary-color); margin: 0 0 6px; }
    .purpose-box p { font-size: 14px; color: #666; margin: 0; line-height: 1.5; }

    .fence-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0 28px; }
    .fence-card { padding: 22px 18px; background: var(--card-style2-bg); border: 1px solid var(--card-style2-border); border-radius: 12px; }
    .fence-card .tag { display: inline-block; font-size: 11px; font-family: sans-serif; font-weight: 700; padding: 2px 8px; border-radius: 20px; background: var(--primary-color); color: #fff; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.04em; }
    .fence-card h3 { font-size: 16px; font-family: sans-serif; margin: 0 0 8px; color: #111; font-weight: 700; }
    .fence-card p { font-size: 13px; color: #555; margin: 0 0 10px; line-height: 1.6; }
    .fence-card .meta { display: flex; flex-direction: column; gap: 3px; }
    .fence-card .meta span { font-size: 12px; font-family: sans-serif; color: #777; }
    .fence-card .meta strong { color: var(--primary-color); }

    .hoa-box { background: #f4f9f6; border: 1px solid #cce5d8; border-radius: 10px; padding: 20px 22px; margin: 20px 0; }
    .hoa-box h3 { font-size: 16px; font-family: sans-serif; font-weight: 700; color: var(--primary-color); margin: 0 0 10px; }
    .hoa-box ul { margin: 0; padding: 0 0 0 20px; }
    .hoa-box ul li { font-size: 13px; color: #555; margin-bottom: 6px; line-height: 1.6; }


    @media (max-width: 600px) {
        h1 { font-size: 26px; }
        .service-grid { grid-template-columns: 1fr; }
        .trust-grid { grid-template-columns: 1fr; }
        .cat-grid { grid-template-columns: 1fr; }
        .purpose-grid { grid-template-columns: 1fr; }
        .fence-grid { grid-template-columns: 1fr; }

        .main-image{height: 250px;}
        .cta-btn {  padding: 12px 12px; font-size: 14px; }
    }
`;

export default function FenceInstallation({ data }) {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const faqData = [
        {
            question: "How much does fence installation cost in Bethesda, MD?",
            answer:
            `Fence installation in Bethesda typically costs $15–$60 per linear foot depending on material and height. Chain link starts around $15–$22 per linear foot. Wood privacy fence runs $25–$50 per linear foot. Vinyl privacy fence costs $38–$60 per linear foot. Aluminum ornamental fence runs $30–$50 per linear foot. For a typical 150-foot backyard perimeter, expect to pay $3,750–$9,000 for a wood or vinyl privacy fence fully installed. DMV General Contracting Group provides free on-site estimates with exact, itemized pricing.`
        },
        {
            question: "Do I need a permit to install a fence in Bethesda, MD?",
            answer:
            `In Montgomery County, a fence permit is required for fences over 4 feet in front yards and over 7 feet in side and rear yards. Pool safety fences always require a permit and inspection regardless of height. DMV General Contracting Group handles all required Montgomery County fence permits as part of our standard service — you never need to contact the county directly. We also support your HOA application process with documentation if your community requires HOA approval.`
        },
        {
            question: "What is the best fence material for a home in Bethesda, MD?",
            answer:
            `For backyard privacy in Bethesda, cedar wood or vinyl are the top choices. Cedar gives a warm, natural look and holds stain well — vinyl is completely maintenance-free and performs excellently in Maryland's climate. For front yards and decorative boundary fencing, aluminum ornamental is our top recommendation — elegant, rust-proof, and virtually maintenance-free. For pet containment on a budget, chain link or split rail with wire mesh is the most practical solution.`
        },
        {
            question: "Does DMV General Contracting Group install fences for HOA communities in Bethesda?",
            answer:
            `Yes. Many Bethesda neighborhoods — particularly in Chevy Chase, North Bethesda, and Potomac — have HOA restrictions on fence height, material, color, and placement. DMV General Contracting Group is familiar with common HOA fence requirements throughout Montgomery County and provides material specification sheets, product samples, and height diagrams to support your HOA application. We recommend obtaining HOA approval before scheduling installation — and we can help you prepare your documentation.`
        },
        {
            question: "How long does fence installation take in Bethesda?",
            answer:
            `Most residential fence installations in Bethesda take 1–3 days for a standard yard perimeter. Larger properties or fences with multiple gates or complex terrain take 3–5 days. Post-setting requires 24–48 hours of concrete cure time before panels are installed — so a 1-day installation typically spans 2 calendar days. DMV General Contracting Group provides a detailed project timeline with every estimate.`
        },
        {
            question: "Does DMV General Contracting Group install automatic gate openers in Bethesda?",
            answer:
            `Yes. DMV General Contracting Group installs automatic gate openers for driveway gates throughout Bethesda and Montgomery County. We install swing gate openers and slide gate openers from leading brands, with keypad, remote, and intercom options. Gate opener installation requires a dedicated electrical circuit — our in-house electricians handle the wiring as part of the gate installation. We also install manual walk gates and drive gates with standard self-latching hardware.`
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
                        Fence Installation Bethesda, MD
                    </nav>

                    <div className="hero">
                        <h1>Fence Installation & Replacement in Bethesda, MD</h1>
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
                        Looking for a trusted <strong>fence contractor in Bethesda, MD</strong>? DMV General Contracting Group installs and replaces all types of residential fencing for Bethesda homeowners — wood privacy fences, vinyl fences, aluminum decorative fences, chain link, and custom gate installations. Whether you need a full backyard privacy fence, a decorative front yard boundary fence, pet containment, or pool safety fencing, our licensed team handles everything: design, property line verification, Montgomery County permit filing, professional installation, and a clean finished product that enhances your home's curb appeal and value.
                    </div>

                    <h2>Fence Installation Services We Offer in Bethesda, MD</h2>
                    <p>
                        DMV General Contracting Group provides a complete range of <strong>residential fence installation services in Bethesda</strong> — from full perimeter fencing to accent sections, gates, and fence replacement.
                    </p>

                    <div className="service-grid">
                        <div className="service-item">Wood Privacy Fence Installation</div>
                        <div className="service-item">Vinyl Fence Installation</div>
                        <div className="service-item">Aluminum Fence Installation</div>
                        <div className="service-item">Chain Link Fence Installation</div>
                        <div className="service-item">Cedar & Pressure-Treated Wood Fencing</div>
                        <div className="service-item">Picket Fence Installation</div>
                        <div className="service-item">Split Rail Fence Installation</div>
                        <div className="service-item">Pool Safety Fence Installation</div>
                        <div className="service-item">Pet Containment Fence</div>
                        <div className="service-item">Walk Gate & Drive Gate Installation</div>
                        <div className="service-item">Automatic Gate Opener Installation</div>
                        <div className="service-item">Fence Removal & Replacement</div>
                        <div className="service-item">Fence Repair & Post Replacement</div>
                        <div className="service-item">Property Line Verification Support</div>
                        <div className="service-item">Montgomery County Permit Processing</div>
                        <div className="service-item">HOA Documentation Support</div>
                    </div>

                    <h2>Why Bethesda Homeowners Install Fences</h2>
                    <p>
                        Bethesda homeowners install fences for a variety of reasons — and the right fence type depends heavily on what you're trying to achieve. Here are the most common purposes behind fence installation requests in Bethesda:
                    </p>

                    <div className="purpose-grid">
                        <div className="purpose-box">
                        <div className="icon">🔒</div>
                        <h3>Privacy</h3>
                        <p>Screen your backyard from neighbors and the street. 6-foot wood or vinyl privacy fences are the most popular choice in Bethesda.</p>
                        </div>
                        <div className="purpose-box">
                        <div className="icon">🐕</div>
                        <h3>Pet Containment</h3>
                        <p>Safely contain dogs and other pets in the yard. Height and gap spacing depend on the breed — we help you choose the right configuration.</p>
                        </div>
                        <div className="purpose-box">
                        <div className="icon">🌿</div>
                        <h3>Curb Appeal</h3>
                        <p>Decorative aluminum or picket fences define your property line and add character to Bethesda's colonial and craftsman homes.</p>
                        </div>
                        <div className="purpose-box">
                        <div className="icon">🏊</div>
                        <h3>Pool Safety</h3>
                        <p>Montgomery County requires compliant pool barrier fencing. We install code-compliant pool safety fences with self-closing, self-latching gates.</p>
                        </div>
                        <div className="purpose-box">
                        <div className="icon">👨‍👩‍👧</div>
                        <h3>Child Safety</h3>
                        <p>Keep children safely in the yard and away from roads or water features. Fence height and gate hardware are critical for child safety applications.</p>
                        </div>
                        <div className="purpose-box">
                        <div className="icon">📈</div>
                        <h3>Property Value</h3>
                        <p>A quality fence adds to Bethesda home value — especially privacy fencing in rear yards and decorative fencing that enhances street presence.</p>
                        </div>
                    </div>

                    <h2>Fence Types We Install in Bethesda, MD</h2>
                    <p>
                        DMV General Contracting Group installs all major fence types throughout Bethesda and Montgomery County. Here are the most popular options for Bethesda homeowners — with costs, lifespans, and best-use guidance:
                    </p>

                    <div className="fence-grid">
                        <div className="fence-card">
                        <span className="tag">Most Popular</span>
                        <h3>Wood Privacy Fence</h3>
                        <p>The most popular privacy fence in Bethesda — cedar or pressure-treated pine boards installed vertically for a solid 6-foot privacy screen. Cedar is naturally rot-resistant and holds stain beautifully. Pressure-treated pine is the more affordable option. Both require periodic staining or sealing to maintain appearance and longevity in Maryland's climate.</p>
                        <div className="meta">
                            <span><strong>Lifespan:</strong> 15–25 years (with maintenance)</span>
                            <span><strong>Cost:</strong> $25–$45 per linear foot</span>
                            <span><strong>Maintenance:</strong> Stain/seal every 2–3 years</span>
                        </div>
                        </div>
                        <div className="fence-card">
                        <span className="tag">Zero Maintenance</span>
                        <h3>Vinyl / PVC Fence</h3>
                        <p>Vinyl fencing is the top low-maintenance option for Bethesda homeowners who want a privacy or decorative fence without annual upkeep. It never needs painting, staining, or sealing — just occasional soap-and-water cleaning. Available in white, tan, gray, and wood-grain finishes. Premium vinyl holds up well to Maryland's freeze-thaw cycles and UV exposure.</p>
                        <div className="meta">
                            <span><strong>Lifespan:</strong> 25–40 years</span>
                            <span><strong>Cost:</strong> $35–$60 per linear foot</span>
                            <span><strong>Maintenance:</strong> Very low — occasional washing only</span>
                        </div>
                        </div>
                        <div className="fence-card">
                        <span className="tag">Decorative Choice</span>
                        <h3>Aluminum Fence</h3>
                        <p>Aluminum ornamental fencing is the most elegant boundary fence for Bethesda's colonial and traditional homes. It defines property lines beautifully without blocking views, is 100% rust-proof, and requires essentially no maintenance. Available in black, bronze, and custom colors. Popular for front yards, pool enclosures, and formal garden areas throughout Bethesda.</p>
                        <div className="meta">
                            <span><strong>Lifespan:</strong> 30–50 years</span>
                            <span><strong>Cost:</strong> $30–$55 per linear foot</span>
                            <span><strong>Maintenance:</strong> None — powder coat finish is permanent</span>
                        </div>
                        </div>
                        <div className="fence-card">
                        <span className="tag">Best Value</span>
                        <h3>Chain Link Fence</h3>
                        <p>Chain link is the most cost-effective fencing solution for Bethesda homeowners focused on pet containment, property delineation, or rear yard security without a large budget. Galvanized or vinyl-coated chain link is durable and low-maintenance. Black vinyl-coated chain link blends more naturally into landscaping than bare galvanized. Not typically appropriate for front yards in Bethesda's upscale neighborhoods.</p>
                        <div className="meta">
                            <span><strong>Lifespan:</strong> 20–30 years</span>
                            <span><strong>Cost:</strong> $15–$30 per linear foot</span>
                            <span><strong>Maintenance:</strong> Very low</span>
                        </div>
                        </div>
                        <div className="fence-card">
                        <span className="tag">Classic Look</span>
                        <h3>Picket Fence</h3>
                        <p>Traditional wood or vinyl picket fences are perfect for defining front yard boundaries on Bethesda's craftsman and colonial homes without fully blocking street views. Available in flat-top and dog-ear styles in 3-foot and 4-foot heights. Wood picket requires painting or staining; vinyl picket is maintenance-free. A classic curb-appeal addition to older Bethesda neighborhoods.</p>
                        <div className="meta">
                            <span><strong>Lifespan:</strong> 15–30 years (material dependent)</span>
                            <span><strong>Cost:</strong> $20–$45 per linear foot</span>
                            <span><strong>Maintenance:</strong> Low (vinyl) to moderate (wood)</span>
                        </div>
                        </div>
                        <div className="fence-card">
                        <span className="tag">Rural & Wooded</span>
                        <h3>Split Rail Fence</h3>
                        <p>Split rail fencing is popular on larger, wooded Bethesda lots — particularly in Cabin John, Garrett Park, and Potomac — where a natural, rustic boundary marker suits the landscape better than a solid privacy fence. Available in 2-rail and 3-rail configurations. Can be combined with wire mesh for pet containment. Cedar split rail blends beautifully with wooded settings.</p>
                        <div className="meta">
                            <span><strong>Lifespan:</strong> 15–25 years</span>
                            <span><strong>Cost:</strong> $15–$30 per linear foot</span>
                            <span><strong>Maintenance:</strong> Low — natural weathering is expected</span>
                        </div>
                        </div>
                    </div>

                    <h2>Fence Material Comparison — What's Best for Bethesda, MD?</h2>
                    <p>
                        Here's a direct side-by-side comparison of the most popular <strong>fence materials for Bethesda homes</strong> — factoring in Maryland's climate, maintenance demands, and typical use cases:
                    </p>
                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table comp-table">
                                <tr>
                                <th>Material</th>
                                <th>Privacy</th>
                                <th>Maintenance</th>
                                <th>Durability (MD Climate)</th>
                                <th>Cost</th>
                                <th>Best For</th>
                                </tr>
                                <tr>
                                <td><strong>Cedar Wood</strong> <span className="rec">Top Pick</span></td>
                                <td className="good">Full privacy</td>
                                <td className="mid">Stain every 2–3 yrs</td>
                                <td className="good">Good — rot resistant</td>
                                <td className="mid">$$</td>
                                <td>Privacy, natural look, classic Bethesda style</td>
                                </tr>
                                <tr>
                                <td><strong>Vinyl / PVC</strong></td>
                                <td className="good">Full privacy</td>
                                <td className="good">Wash only</td>
                                <td className="good">Excellent — won't rot or fade</td>
                                <td className="mid">$$ – $$$</td>
                                <td>Low-maintenance privacy, white colonial look</td>
                                </tr>
                                <tr>
                                <td><strong>Aluminum</strong></td>
                                <td className="poor">Decorative only</td>
                                <td className="good">None required</td>
                                <td className="good">Excellent — rust-proof</td>
                                <td className="mid">$$</td>
                                <td>Front yards, pools, decorative boundary</td>
                                </tr>
                                <tr>
                                <td><strong>Pressure-Treated Pine</strong></td>
                                <td className="good">Full privacy</td>
                                <td className="mid">Stain every 2–3 yrs</td>
                                <td className="mid">Good — treated for rot</td>
                                <td className="good">$</td>
                                <td>Budget privacy fence, rear yards</td>
                                </tr>
                                <tr>
                                <td><strong>Chain Link</strong></td>
                                <td className="poor">None</td>
                                <td className="good">Very low</td>
                                <td className="good">Good — galvanized is durable</td>
                                <td className="good">$</td>
                                <td>Pet containment, rear yards, budget</td>
                                </tr>
                                <tr>
                                <td><strong>Split Rail</strong></td>
                                <td className="poor">Boundary only</td>
                                <td className="good">Low</td>
                                <td className="mid">Moderate</td>
                                <td className="good">$</td>
                                <td>Wooded lots, rural character, landscaping</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="tip">
                        💡 <strong>DMV General Contracting Group's Recommendation for Bethesda:</strong> For backyard privacy, <strong>cedar wood</strong> or <strong>vinyl</strong> are our top recommendations. Cedar gives a warm, natural look that suits Bethesda's established neighborhoods — vinyl eliminates the maintenance. For front yards and decorative purposes, <strong>aluminum</strong> is our top pick — it is elegant, maintenance-free, and suits Bethesda's colonial and traditional architectural styles perfectly.
                    </div>

                    <h2>Permits & HOA Requirements for Fences in Bethesda, MD</h2>
                    <p>
                        Before any fence installation in Bethesda, two things need to be addressed: <strong>Montgomery County permit requirements</strong> and, if applicable, <strong>HOA approval</strong>. DMV General Contracting Group handles both.
                    </p>

                    <div className="hoa-box">
                        <h3>🏛️ Montgomery County Fence Permit Rules — Key Facts</h3>
                        <ul>
                        <li><strong>Front yard fences over 4 feet tall</strong> require a building permit in Montgomery County</li>
                        <li><strong>Side and rear yard fences over 7 feet tall</strong> require a permit</li>
                        <li>Fences must respect <strong>minimum setbacks</strong> from property lines — typically 1–2 feet in most Bethesda zones</li>
                        <li><strong>Pool safety fences</strong> must meet specific height (minimum 4 feet) and gate requirements under Maryland law</li>
                        <li>Fence permits typically do not require architectural drawings — but location on the lot must be verifiable</li>
                        <li>DMV General Contracting Group files all required permits and coordinates all inspections for every Bethesda fence project</li>
                        </ul>
                    </div>

                    <div className="hoa-box" >
                        <h3>🏘️ HOA Fence Rules — What to Know Before You Start</h3>
                        <ul>
                        <li>Many Bethesda planned communities and neighborhoods have HOA covenants that restrict fence <strong>height, material, color, and placement</strong></li>
                        <li>Common HOA restrictions include: no chain link in front yards, specific approved colors for vinyl fencing, maximum 6-foot height, and front yard fence prohibitions entirely</li>
                        <li>HOA approval is typically required <strong>before installation begins</strong> — not after</li>
                        <li>DMV General Contracting Group provides <strong>specification documentation</strong> (material spec sheets, color samples, height diagrams) to support your HOA application</li>
                        <li>We recommend confirming HOA approval before scheduling your fence installation — DMV General Contracting Group can assist with the documentation process</li>
                        </ul>
                    </div>

                    <div className="note">
                        ⚠️ <strong>Property Line Verification:</strong> Installing a fence even a few inches over your property line can result in disputes with neighbors and costly removal. DMV General Contracting Group recommends having your property lines verified by a licensed surveyor before fence installation if your lot corners are not clearly marked. We can recommend licensed surveyors who work regularly in the Bethesda area.
                    </div>

                    <h2>Pool Safety Fence in Bethesda, MD</h2>
                    <p>
                        Montgomery County, Maryland requires compliant pool barrier fencing around all in-ground and above-ground pools with water depth of 24 inches or more. <strong>Pool safety fence requirements</strong> in Bethesda include:
                    </p>
                    <ul style={{margin: '10px 0 20px 22px', color: '#333', fontSize: '15px', lineHeight: '2.2'}}>
                        <li>Minimum fence height of <strong>4 feet</strong> on all sides</li>
                        <li>Openings in fence must not allow passage of a <strong>4-inch sphere</strong></li>
                        <li>All gates must be <strong>self-closing and self-latching</strong> with latches on the pool side</li>
                        <li>Gates must open <strong>outward</strong> away from the pool</li>
                        <li>No gaps or footholds that could allow a child to climb the fence</li>
                        <li>All pool barrier fencing requires a <strong>Montgomery County permit and inspection</strong></li>
                    </ul>
                    <p>
                        DMV General Contracting Group installs pool safety fencing that meets all Montgomery County and Maryland state requirements — and handles the full permit and inspection process. We typically use aluminum pool fencing for its combination of code compliance, durability, low maintenance, and attractive appearance around Bethesda pool areas.
                    </p>

                    <h2>Fence Installation Cost in Bethesda, MD</h2>
                    <p>
                        Here is a detailed breakdown of <strong>fence installation costs in Bethesda, Maryland</strong>. All prices are per linear foot installed, including posts, concrete footings, panels, and hardware:
                    </p>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <tr>
                                <th>Fence Type</th>
                                <th>Cost per Linear Foot</th>
                                <th>150 LF Estimate</th>
                                <th>Notes</th>
                                </tr>
                                <tr>
                                <td>Chain Link (Galvanized, 4 ft)</td>
                                <td>$15 – $22</td>
                                <td>$2,250 – $3,300</td>
                                <td>Most affordable; vinyl-coated costs slightly more</td>
                                </tr>
                                <tr>
                                <td>Split Rail (Cedar, 2-rail)</td>
                                <td>$15 – $25</td>
                                <td>$2,250 – $3,750</td>
                                <td>Add wire mesh for pet containment +$3–5/lf</td>
                                </tr>
                                <tr>
                                <td>Picket Fence (Wood, 4 ft)</td>
                                <td>$20 – $35</td>
                                <td>$3,000 – $5,250</td>
                                <td>Cedar costs more than pressure-treated pine</td>
                                </tr>
                                <tr>
                                <td>Wood Privacy Fence (PT Pine, 6 ft)</td>
                                <td>$25 – $38</td>
                                <td>$3,750 – $5,700</td>
                                <td>Most common privacy fence in Bethesda</td>
                                </tr>
                                <tr>
                                <td>Wood Privacy Fence (Cedar, 6 ft)</td>
                                <td>$32 – $50</td>
                                <td>$4,800 – $7,500</td>
                                <td>Premium wood; better longevity and appearance</td>
                                </tr>
                                <tr>
                                <td>Aluminum Fence (4 ft, ornamental)</td>
                                <td>$30 – $50</td>
                                <td>$4,500 – $7,500</td>
                                <td>Pool-grade aluminum is code-compliant</td>
                                </tr>
                                <tr>
                                <td>Vinyl Privacy Fence (6 ft)</td>
                                <td>$38 – $60</td>
                                <td>$5,700 – $9,000</td>
                                <td>Higher upfront cost, zero maintenance</td>
                                </tr>
                                <tr>
                                <td>Walk Gate (Single, wood or vinyl)</td>
                                <td>$400 – $900 each</td>
                                <td>Per gate</td>
                                <td>Self-closing hardware available</td>
                                </tr>
                                <tr>
                                <td>Double Drive Gate</td>
                                <td>$900 – $2,500</td>
                                <td>Per gate</td>
                                <td>Sized for vehicle access; opener optional</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <p>
                        Fence costs vary based on terrain (sloped yards cost more), existing fence removal, rock soil (post drilling adds cost), and gate complexity. DMV General Contracting Group provides <strong>free on-site fence estimates</strong> — we walk your property, measure the perimeter, assess soil and terrain, and give you an exact, itemized quote.
                    </p>

                    <div className="cta-banner">
                        <h2>Get a Free On-Site Fence Estimate in Bethesda</h2>
                        <p>We'll walk your property, review your goals and HOA requirements, and provide a detailed material-by-material quote — at no cost and no obligation.</p>
                        <Link href="/contact-us" className="cta-btn">Schedule Free Fence Consultation →</Link>
                    </div>

                    <h2>Why Bethesda Homeowners Choose DMV General Contracting Group for Fence Installation</h2>
                    <p>
                        Fence installation looks simple — but a fence that is not plumb, not set at the correct depth, or not properly anchored in concrete will lean, warp, and fail within a few years. DMV General Contracting Group's fence crews set every post correctly, anchor in concrete to proper depth, and install panels true and level regardless of terrain.
                    </p>

                    <div className="trust-grid">
                        <div className="trust-box">
                        <div className="icon">📋</div>
                        <strong>Permits Handled</strong>
                        <span>Montgomery County fence permits managed for you</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">🏠</div>
                        <strong>HOA Experience</strong>
                        <span>Familiar with Bethesda HOA requirements & documentation</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">🛡️</div>
                        <strong>Licensed & Warrantied</strong>
                        <span>MHIC licensed, insured, 1-year workmanship warranty</span>
                        </div>
                    </div>

                    <div className="highlight">
                        <p>⭐ <strong>4.9-star rated with 97+ reviews.</strong> As a full-service design-build contractor, DMV General Contracting Group installs fencing as part of complete outdoor renovation projects — coordinating with deck, patio, and hardscaping work for a fully integrated backyard transformation — or as a standalone fence installation project.</p>
                    </div>

                    <h2>Our Fence Installation Process in Bethesda</h2>

                    <div className="steps">
                        <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free On-Site Estimate & Property Walk</h3>
                            <p>We visit your Bethesda property, walk the intended fence line, discuss your privacy, security, and aesthetic goals, assess terrain and soil conditions, and provide a detailed material-by-material estimate at no charge.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Material Selection & HOA/Permit Review</h3>
                            <p>We help you choose the right fence material and height for your goals and neighborhood. We review any HOA requirements, provide specification documentation for your HOA application, and determine whether a Montgomery County permit is required for your specific project.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Call 811 — Underground Utility Marking</h3>
                            <p>Before any post hole is dug, we contact Maryland 811 (Miss Utility) to have all underground utilities marked on your property. This is a legal requirement and a critical safety step — digging into an unmarked utility line can be deadly and results in costly repairs. This is always done at no extra charge.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Post Setting & Concrete Anchoring</h3>
                            <p>Posts are set at the correct spacing for your fence panel size, dug to the appropriate depth for post height and soil conditions (typically 1/3 of total post length plus 6 inches below frost line), and anchored in concrete. Posts are checked for plumb before concrete sets. Concrete cures 24–48 hours before panels are installed.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Panel, Rail & Picket Installation</h3>
                            <p>Fence panels, rails, and pickets are installed true, level, and at consistent height — even on sloped terrain (stepped or raked installation depending on grade and style). All fasteners are galvanized or stainless steel to prevent rust staining on wood or vinyl surfaces.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Gate Installation & Hardware</h3>
                            <p>Walk gates and drive gates are hung with heavy-duty hinges sized for the gate weight, adjusted for level swing, and fitted with the specified latch hardware. Pool safety gates receive self-closing and self-latching hardware per Montgomery County pool code requirements.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">7</div>
                        <div className="step-content">
                            <h3>Final Inspection & Cleanup</h3>
                            <p>We walk the entire fence line with you, check every panel for plumb and level, test all gate operation, clean up all concrete debris and packaging, and confirm you are satisfied with the completed installation before we close the project.</p>
                        </div>
                        </div>
                    </div>

                    <h2>Fence Repair vs. Full Fence Replacement in Bethesda</h2>
                    <p>
                        Many Bethesda homeowners have existing fences that need attention. Here is how DMV General Contracting Group helps you decide whether to repair or replace:
                    </p>
                    <p>
                        <strong>Repair makes sense</strong> when damage is limited to a few posts or panels, the fence is less than 10 years old and structurally sound, and replacement panels can match the existing fence material and color. Common repairs include leaning post re-setting, rotted board replacement, gate rehang, and hardware replacement.
                    </p>
                    <p>
                        <strong>Full replacement makes sense</strong> when the fence is more than 15 years old with widespread rot or structural deterioration, when repair costs exceed 50% of replacement cost, when you want to upgrade material (wood to vinyl), or when you're undertaking other backyard work (deck, patio, landscaping) where a new fence completes the renovation. Replacing during a larger project also saves on mobilization costs.
                    </p>
                    <p>
                        DMV General Contracting Group provides honest assessments — recommending repair when that is the right answer and full replacement only when it genuinely makes more sense for your Bethesda property and budget.
                    </p>

                    <h2>Serving Bethesda and Surrounding Areas for Fence Installation</h2>

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
                        <h3>Privacy fence and pool fence installation in Chevy Chase & Potomac, MD</h3>
                        <p>Chevy Chase and Potomac are among the most active fence markets near Bethesda — large lots, pools, and active HOA communities all drive demand for quality fence installation. DMV General Contracting Group is experienced with the specific HOA fence restrictions common in Chevy Chase (which often limit front yard fencing and specify approved materials) and Potomac's larger estate lots where perimeter fencing involves significant linear footage. We provide HOA documentation support as a standard part of every project in HOA-governed neighborhoods.</p>
                    </div>

                    <div className="nearby">
                        <h3>Split rail and wood fence installation in Cabin John & Garrett Park, MD</h3>
                        <p>Cabin John and Garrett Park have a high concentration of wooded, naturalistic lots where split rail cedar fencing and natural wood privacy fences suit the landscape better than vinyl or aluminum. Our team is experienced installing fences on sloped, tree-rooted terrain — common throughout both communities — and takes care to protect mature trees near the fence line during post-setting and installation.</p>
                    </div>

                    <h2>Frequently Asked Questions — Fence Installation in Bethesda, MD</h2>
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
                    <p>DMV General Contracting Group installs fencing as part of complete outdoor renovation projects across Bethesda:</p>
                    <ul style={{margin: '12px 0 24px 20px', color: '#1a6b9a', fontSize: '15px', lineHeight: 2}}>
                        <li><Link href="/service/decks" style={{ color: '#1a6b9a' }}>Deck Building in Bethesda, MD</Link></li>
                        <li><Link href="/service/patios" style={{ color: '#1a6b9a' }}>Patio Installation in Bethesda, MD</Link></li>
                        <li><Link href="/service/home-additions" style={{ color: '#1a6b9a' }}>Home Additions in Bethesda, MD</Link></li>
                        <li><Link href="/service/adu" style={{ color: '#1a6b9a' }}>ADU Construction in Bethesda, MD</Link></li>
                        <li><Link href="/service/siding" style={{ color: '#1a6b9a' }}>Siding Installation in Bethesda, MD</Link></li>
                    </ul>

                    <div className="cta-banner">
                        <h2>Ready to Install a Fence at Your Bethesda Home?</h2>
                        <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free on-site estimate online. Available 7 days a week across Bethesda and the DMV area.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Fence Estimate →</Link>
                    </div>
                
                </div>
            </StyledCom>
        </main>
    );
}