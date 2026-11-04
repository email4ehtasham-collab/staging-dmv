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

    .add-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0 28px; }
    .add-card { padding: 22px 18px; background: #ebf6ff; border: 1px solid #cbe5fb; border-radius: 12px; }
    .add-card .tag { display: inline-block; font-size: 11px; font-family: sans-serif; font-weight: 700; padding: 2px 8px; border-radius: 20px; background: var(--primary-color); color: #fff; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.04em; }
    .add-card h3 { font-size: 16px; font-family: sans-serif; margin: 0 0 8px; color: #111; font-weight: 700; }
    .add-card p { font-size: 13px; color: #555; margin: 0 0 10px; line-height: 1.6; }
    .add-card .meta { display: flex; flex-direction: column; gap: 4px; }
    .add-card .meta span { font-size: 12px; font-family: sans-serif; color: #777; }
    .add-card .meta strong { color: var(--primary-color); }

    .roi-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 16px 0 24px; }
    .roi-box { padding: 18px 16px; background: #f0f7f0; border: 1px solid #b8ddb8; border-radius: 10px; }
    .roi-box h3 { font-size: 14px; font-family: sans-serif; font-weight: 700; color: var(--primary-color); margin: 0 0 6px; }
    .roi-box p { font-size: 13px; color: #555; margin: 0; line-height: 1.6; }

    .team-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin: 16px 0 28px; }
    .team-box { text-align: center; padding: 18px 12px; background: #ebf6ff; border: 1px solid #cbe5fb; border-radius: 8px; }
    .team-box .icon { font-size: 34px; margin-bottom: 8px; }
    .team-box strong { display: block; font-size: 16px; font-family: sans-serif; font-weight: 700; color: #111; margin-bottom: 4px; }
    .team-box span { font-size: 14px; color: #777; font-family: sans-serif; line-height: 1.5; display: block; }


    .material-table tbody tr > td:nth-child(1) {min-width: 350px}
    .best { font-size: 10px; font-weight: 700; background: var(--primary-color); color: #fff; padding: 1px 6px; border-radius: 10px; margin-left: 4px; vertical-align: middle; }


    @media (max-width: 600px) {
        h1 { font-size: 26px; }
        .service-grid { grid-template-columns: 1fr; }
        .trust-grid { grid-template-columns: 1fr; }
        .cat-grid { grid-template-columns: 1fr; }
        .add-grid { grid-template-columns: 1fr;}
        .roi-grid {grid-template-columns: 1fr;}
        .team-grid {grid-template-columns: 1fr;}

        .main-image{height: 250px;}
        .cta-btn {  padding: 12px 12px; font-size: 14px; }
    }
`;

export default function HomeAdditions({ data }) {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const faqData = [
        {
            question: "How much does a home addition cost in Bethesda, MD?",
            answer:
            `Home addition costs in Bethesda range from $40,000–$120,000 for a small bump-out to $250,000–$450,000+ for a full second-story addition. A single room addition typically runs $120,000–$220,000. A master suite addition costs $150,000–$300,000+. All DMV General Contracting Group addition costs include in-house architectural design, structural engineering, all Montgomery County permits, and complete construction through final finishes. We provide free, detailed estimates during our in-home consultation.`
        },
        {
            question: "Do I need a permit for a home addition in Bethesda, MD?",
            answer:
            `Yes — all home additions in Montgomery County require building permits, zoning approval, architectural drawings, and trade permits for electrical, plumbing, and HVAC work. DMV General Contracting Group's in-house permit team handles the entire Montgomery County approval process from submission to final inspection. You do not need to contact the county, manage any paperwork, or coordinate between different permit types — we handle it all under one contract.`
        },
        {
            question: "How long does a home addition take in Bethesda?",
            answer:
            `Home addition timelines depend on type and size. A bump-out takes 2–4 months total. A single room addition takes 4–7 months. A master suite addition takes 5–8 months. A full second-story addition typically takes 8–12 months. These timelines include design, permit processing (6–10 weeks in Montgomery County), and construction. DMV General Contracting Group manages all phases in-house to minimize delays between stages.`
        },
        {
            question: "Does DMV General Contracting Group handle architectural design for home additions in Bethesda?",
            answer:
            `Yes. DMV General Contracting Group has a full in-house architectural and structural engineering team based in North Bethesda. We design your addition from initial concept through permit-ready construction documents — you do not need to hire a separate architect. Our design-build approach means the same firm that designs your Bethesda addition also builds it, giving you a single point of contact and complete accountability throughout the entire project.`
        },
        {
            question: "What is the ROI on a home addition in Bethesda, MD?",
            answer:
            `Home additions in Bethesda typically return 50–75% of their cost in added property value, depending on addition type and current market conditions. Master suite additions and family room additions tend to have the highest ROI in Bethesda's upscale market. Beyond the financial return, adding onto your home eliminates moving costs (typically $150,000–$300,000+ in Bethesda's market), lets you keep your location and schools, and avoids today's elevated mortgage rates on a larger purchase.`
        },
        {
            question: "Can DMV General Contracting Group match the addition to my existing home's architecture?",
            answer:
            `Yes — seamless architectural integration is a core part of every home addition DMV General Contracting Group builds in Bethesda. Our architects design additions to continue your existing roofline, match your exterior materials, mirror your window style, and connect naturally to your interior layout and finishes. We source matching brick, siding, shingles, and trim to ensure visual continuity so the addition looks like it was always part of the original home — not an afterthought attached to the back.`
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
                        Home Additions Bethesda, MD
                    </nav>

                    <div className="hero">
                        <h1>Home Addition Contractor in Bethesda, MD</h1>
                        <div className="hero-meta">
                        <span className="hero-badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="hero-badge">✓ MHIC Licensed & Insured</span>
                        <span className="hero-badge">✓ DLCP Licensed</span>
                        <span className="hero-badge">✓ In-House Architects & Engineers</span>
                        <span className="hero-badge">✓ Free In-Home Consultation</span>
                        </div>
                    </div>

                    <div className="image-holder main-image">
                        <img src={`.${data.image}`} alt={data.title}/>
                    </div>

                    <div className="intro">
                        Need more space in your Bethesda home? DMV General Contracting Group is a fully licensed, design-build home addition contractor serving Bethesda and Montgomery County, MD. We design and build all types of residential additions — room additions, second-story additions, bump-outs, master suite additions, sunrooms, and family room expansions — entirely in-house. Our team of architects, structural engineers, permit specialists, and licensed construction crews handles every stage of your project under one contract, from concept drawings to final inspection. No separate architect. No coordination headaches. Just one team, one contract, and a finished addition that looks like it was always part of your home.
                    </div>

                    <h2>Home Addition Services We Offer in Bethesda, MD</h2>
                    <p>
                        DMV General Contracting Group handles the full range of <strong>home addition types in Bethesda</strong>. Whether you need one new room or a complete second floor, our design-build team manages every discipline required to complete your project correctly and on time.
                    </p>

                    <div className="service-grid">
                        <div className="service-item">Single Room Addition</div>
                        <div className="service-item">Second-Story Addition (Full & Partial)</div>
                        <div className="service-item">Bump-Out / Micro-Addition</div>
                        <div className="service-item">Master Suite Addition</div>
                        <div className="service-item">Family Room Addition</div>
                        <div className="service-item">Kitchen Expansion Addition</div>
                        <div className="service-item">Sunroom & Four-Season Room Addition</div>
                        <div className="service-item">In-Law Suite Addition (Attached)</div>
                        <div className="service-item">Mudroom Addition</div>
                        <div className="service-item">Garage Addition</div>
                        <div className="service-item">Home Office Addition</div>
                        <div className="service-item">Architectural Design & 3D Renderings</div>
                        <div className="service-item">Structural Engineering</div>
                        <div className="service-item">Montgomery County Permit Processing</div>
                        <div className="service-item">Foundation Work & Framing</div>
                        <div className="service-item">All Interior Finishes (Electrical, Plumbing, HVAC)</div>
                    </div>

                    <h2>Types of Home Additions We Build in Bethesda, MD</h2>
                    <p>
                        Every Bethesda home is different — lot size, zoning setbacks, existing structure, and family needs all determine which addition type makes the most sense. Here are the most common <strong>home addition types</strong> DMV General Contracting Group builds throughout Bethesda and Montgomery County:
                    </p>

                    <div className="add-grid">
                        <div className="add-card">
                        <span className="tag">Most Common</span>
                        <h3>Single Room Addition</h3>
                        <p>A new room built onto the side or rear of your existing home — fully integrated with the existing structure, roofline, and interior layout. Can be used as a bedroom, family room, home office, or any space your household needs. Foundation, framing, roofing, electrical, HVAC, and all finishes included.</p>
                        <div className="meta">
                            <span><strong>Size:</strong> 200–600 sq ft typical</span>
                            <span><strong>Cost:</strong> $120,000 – $220,000</span>
                            <span><strong>Timeline:</strong> 4–7 months</span>
                        </div>
                        </div>
                        <div className="add-card">
                        <span className="tag">Most Value</span>
                        <h3>Second-Story Addition</h3>
                        <p>Add a complete second floor — or a partial second-story addition above one wing of your home — without expanding your footprint. Ideal for Bethesda lots with limited yard space or setback restrictions. Adds the most square footage per dollar of lot used. Requires full structural engineering to verify the existing foundation and walls can support the new load.</p>
                        <div className="meta">
                            <span><strong>Size:</strong> 600–2,000+ sq ft</span>
                            <span><strong>Cost:</strong> $200,000 – $450,000+</span>
                            <span><strong>Timeline:</strong> 6–12 months</span>
                        </div>
                        </div>
                        <div className="add-card">
                        <span className="tag">Lowest Cost</span>
                        <h3>Bump-Out Addition</h3>
                        <p>A small but impactful extension of an existing room — typically 2–10 feet out from an exterior wall. A bump-out can expand a kitchen to add an island, widen a master bath, or create a breakfast nook without the cost of a full addition. Often built on a cantilevered or shallow foundation — making it faster and more affordable than a full room addition.</p>
                        <div className="meta">
                            <span><strong>Size:</strong> 50–300 sq ft</span>
                            <span><strong>Cost:</strong> $40,000 – $120,000</span>
                            <span><strong>Timeline:</strong> 2–4 months</span>
                        </div>
                        </div>
                        <div className="add-card">
                        <span className="tag">Most Popular</span>
                        <h3>Master Suite Addition</h3>
                        <p>A dedicated primary bedroom and bathroom addition — one of the most sought-after home additions among Bethesda homeowners. Typically includes a spacious bedroom, walk-in closet, and a luxury bathroom with walk-in shower, soaking tub, and double vanity. Adds significant value to Bethesda's upscale real estate market.</p>
                        <div className="meta">
                            <span><strong>Size:</strong> 400–800 sq ft</span>
                            <span><strong>Cost:</strong> $150,000 – $300,000+</span>
                            <span><strong>Timeline:</strong> 5–8 months</span>
                        </div>
                        </div>
                        <div className="add-card">
                        <span className="tag">Family Favorite</span>
                        <h3>Family Room Addition</h3>
                        <p>Expand your living space with a dedicated family room, great room, or open-plan living addition off the back of your Bethesda home. Often combined with a kitchen expansion or mudroom addition for a complete rear-of-home transformation. Vaulted ceilings, large windows, and open connection to the kitchen are the most popular design choices.</p>
                        <div className="meta">
                            <span><strong>Size:</strong> 300–700 sq ft</span>
                            <span><strong>Cost:</strong> $130,000 – $250,000</span>
                            <span><strong>Timeline:</strong> 4–7 months</span>
                        </div>
                        </div>
                        <div className="add-card">
                        <span className="tag">Year-Round Living</span>
                        <h3>Sunroom & Four-Season Room</h3>
                        <p>A light-filled addition with expansive windows and glass — designed to bring the outdoors in year-round. A three-season sunroom is the most affordable option; a four-season room is fully insulated and HVAC-connected for year-round use. Perfect for Bethesda homes with wooded or garden-facing rear yards.</p>
                        <div className="meta">
                            <span><strong>Size:</strong> 150–400 sq ft</span>
                            <span><strong>Cost:</strong> $60,000 – $150,000</span>
                            <span><strong>Timeline:</strong> 3–5 months</span>
                        </div>
                        </div>
                    </div>

                    <h2>Addition vs. Moving — Why Bethesda Homeowners Choose to Add On</h2>
                    <p>
                        One of the most common conversations we have with Bethesda homeowners is whether to add onto their existing home or sell and buy a larger one. Here's the honest financial and practical comparison:
                    </p>

                    <div className="roi-grid">
                        <div className="roi-box">
                        <h3>Cost of Moving in Bethesda</h3>
                        <p>The average Bethesda home sells for $900,000–$1.5M+. Agent commissions, closing costs, moving expenses, and the premium you pay for a larger home in the same neighborhood typically total $150,000–$300,000+ — before you've gained a single square foot. You also lose your established neighborhood, school district, and the specific location you chose.</p>
                        </div>
                        <div className="roi-box">
                        <h3>Cost of Adding On in Bethesda</h3>
                        <p>A well-executed home addition in Bethesda typically costs $120,000–$300,000 for a significant space increase — and adds directly to your home's appraised value. You keep your location, your neighbors, your children's school, and your mortgage rate. An addition is often the financially superior choice for Bethesda homeowners who love where they live.</p>
                        </div>
                        <div className="roi-box">
                        <h3>Property Value Impact</h3>
                        <p>Home additions in Bethesda typically return 50–75% of their cost in immediate property value — and that return compounds over time as the local market appreciates. A master suite addition or family room addition on a Bethesda home can add $100,000–$200,000+ to appraised value, depending on the current market and comparable sales.</p>
                        </div>
                        <div className="roi-box">
                        <h3>Avoiding Today's Market</h3>
                        <p>In Bethesda's competitive housing market, inventory is consistently tight and prices remain elevated. Financing a $200,000 addition at your existing mortgage rate is often significantly more cost-effective than purchasing a larger home at today's rates. Many Bethesda homeowners are choosing to invest in their current home rather than trade up in a challenging buy environment.</p>
                        </div>
                    </div>

                    <h2>Home Addition Cost in Bethesda, MD</h2>
                    <p>
                        Here is a detailed cost guide for <strong>home additions in Bethesda, Maryland</strong>. These ranges reflect current design, permit, and construction costs in the Montgomery County market — all-in, including architectural design and permits:
                    </p>
                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <tr>
                                <th>Addition Type</th>
                                <th>Typical Cost Range</th>
                                <th>Size</th>
                                <th>Timeline</th>
                                </tr>
                                <tr>
                                <td>Bump-Out Addition</td>
                                <td>$40,000 – $120,000</td>
                                <td>50–300 sq ft</td>
                                <td>2–4 months</td>
                                </tr>
                                <tr>
                                <td>Sunroom / 3-Season Room</td>
                                <td>$60,000 – $100,000</td>
                                <td>150–350 sq ft</td>
                                <td>3–4 months</td>
                                </tr>
                                <tr>
                                <td>Four-Season / Conditioned Sunroom</td>
                                <td>$90,000 – $150,000</td>
                                <td>200–400 sq ft</td>
                                <td>4–5 months</td>
                                </tr>
                                <tr>
                                <td>Single Room Addition</td>
                                <td>$120,000 – $220,000</td>
                                <td>200–600 sq ft</td>
                                <td>4–7 months</td>
                                </tr>
                                <tr>
                                <td>Family Room Addition</td>
                                <td>$130,000 – $250,000</td>
                                <td>300–700 sq ft</td>
                                <td>4–7 months</td>
                                </tr>
                                <tr>
                                <td>Master Suite Addition</td>
                                <td>$150,000 – $300,000+</td>
                                <td>400–800 sq ft</td>
                                <td>5–8 months</td>
                                </tr>
                                <tr>
                                <td>In-Law Suite Addition</td>
                                <td>$150,000 – $280,000</td>
                                <td>400–800 sq ft</td>
                                <td>5–8 months</td>
                                </tr>
                                <tr>
                                <td>Second-Story Addition (Full)</td>
                                <td>$250,000 – $450,000+</td>
                                <td>800–2,000+ sq ft</td>
                                <td>8–12 months</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <p>
                        All cost estimates above include in-house architectural design, structural engineering, Montgomery County permit fees, complete construction, and all interior finishes. Contact DMV General Contracting Group for a free, detailed estimate tailored to your specific Bethesda property and addition goals.
                    </p>

                    <h2>Permits & Zoning for Home Additions in Bethesda, MD</h2>
                    <p>
                        Every home addition in Bethesda requires Montgomery County approval — and navigating the county's permitting process is one of the most complex aspects of any addition project. Here's what's involved:
                    </p>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table comp-table">
                                <tr>
                                <th>Approval Type</th>
                                <th>Required For</th>
                                <th>Who Handles It</th>
                                </tr>
                                <tr>
                                <td><strong>Zoning / Setback Review</strong></td>
                                <td>All additions — must confirm minimum setbacks from property lines are met</td>
                                <td>DMV General Contracting Group in-house permit team</td>
                                </tr>
                                <tr>
                                <td><strong>Building Permit</strong></td>
                                <td>All additions — required for any structural construction</td>
                                <td>DMV General Contracting Group in-house permit team</td>
                                </tr>
                                <tr>
                                <td><strong>Architectural Drawings</strong></td>
                                <td>All additions — permit-ready floor plans and elevations required</td>
                                <td>DMV General Contracting Group in-house architects</td>
                                </tr>
                                <tr>
                                <td><strong>Structural Engineering</strong></td>
                                <td>Second-story additions, load-bearing wall changes, large additions</td>
                                <td>DMV General Contracting Group in-house engineers</td>
                                </tr>
                                <tr>
                                <td><strong>Electrical Permit</strong></td>
                                <td>All additions with new electrical circuits or panels</td>
                                <td>DMV General Contracting Group in-house electricians</td>
                                </tr>
                                <tr>
                                <td><strong>Plumbing Permit</strong></td>
                                <td>Additions with bathrooms, kitchens, or wet bars</td>
                                <td>DMV General Contracting Group in-house plumbers</td>
                                </tr>
                                <tr>
                                <td><strong>HVAC Permit</strong></td>
                                <td>All conditioned additions requiring heating and cooling</td>
                                <td>DMV General Contracting Group in-house HVAC team</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="note">
                        ⚠️ <strong>Bethesda Setback Rules:</strong> Most residential zones in Bethesda require minimum setbacks of 5–25 feet from side and rear property lines depending on your specific zoning classification. These setbacks directly determine how large your addition can be and where it can be placed. DMV General Contracting Group performs a full zoning and setback review for every addition project during our free consultation — at no charge to you.
                    </div>

                    <div className="cta-banner">
                        <h2>Find Out What Addition Is Possible on Your Bethesda Property</h2>
                        <p>Our architects and permit specialists will review your lot, zoning, and setbacks — and tell you exactly what is buildable. Free, no-obligation consultation.</p>
                        <Link href="/contact-us" className="cta-btn">Schedule Free Addition Consultation →</Link>
                    </div>

                    <h2>Why Choose DMV General Contracting Group for Your Bethesda Home Addition</h2>
                    <p>
                        A home addition is one of the largest construction investments a Bethesda homeowner will ever make. Choosing the right contractor — one with true in-house design, engineering, and construction capability — is the single most important decision in the process. Here's what sets DMV General Contracting Group apart:
                    </p>

                    <div className="team-grid">
                        <div className="team-box">
                        <div className="icon">📐</div>
                        <strong>In-House Architects</strong>
                        <span>Full architectural design & 3D renderings — no outside architect needed</span>
                        </div>
                        <div className="team-box">
                        <div className="icon">🧱</div>
                        <strong>Structural Engineers On Staff</strong>
                        <span>Load calculations, beam sizing, foundation review — all in-house</span>
                        </div>
                        <div className="team-box">
                        <div className="icon">📋</div>
                        <strong>Permit Team Included</strong>
                        <span>We manage the entire Montgomery County approval process for you</span>
                        </div>
                        <div className="team-box">
                        <div className="icon">⚡</div>
                        <strong>All Trades In-House</strong>
                        <span>Electrical, plumbing, HVAC — licensed crews, no subcontracting</span>
                        </div>
                        <div className="team-box">
                        <div className="icon">🏠</div>
                        <strong>Seamless Integration</strong>
                        <span>Additions designed to match your home's existing style and materials</span>
                        </div>
                        <div className="team-box">
                        <div className="icon">🛡️</div>
                        <strong>MHIC Licensed & Warrantied</strong>
                        <span>Fully licensed, insured, and 1-year workmanship warranty</span>
                        </div>
                    </div>

                    <div className="highlight">
                        <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> DMV General Contracting Group is one of the only true design-build addition contractors in the Bethesda area — our architects, engineers, and builders work as one team from your first consultation to your final walkthrough.</p>
                    </div>

                    <h2>Our Home Addition Process in Bethesda</h2>
                    <p>
                        Here is exactly how DMV General Contracting Group manages your <strong>home addition project in Bethesda</strong> — from first conversation to the day you move into your new space:
                    </p>

                    <div className="steps">
                        <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free In-Home Consultation & Feasibility Review</h3>
                            <p>We visit your Bethesda home, walk the property, review your zoning and setback requirements, assess the existing structure, and discuss which addition types are feasible on your specific lot — at no cost. We also walk you through a realistic budget range before any design work begins.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Architectural Design & 3D Renderings</h3>
                            <p>Our in-house architects develop concept plans, floor layouts, and detailed 3D renderings of your addition — inside and out. You review and refine the design until it perfectly reflects your vision. Critically, our construction team reviews every design choice in parallel to ensure it is buildable within your budget.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Structural Engineering</h3>
                            <p>Our in-house structural engineers review the existing foundation and wall structure, perform load calculations for the new addition, and specify all beams, headers, and connections required. For second-story additions, this step also includes a foundation adequacy assessment.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Montgomery County Permit Submission & Approval</h3>
                            <p>We prepare and submit a complete permit package to Montgomery County — including architectural drawings, structural calculations, and all trade permit applications. We manage all county correspondence, respond to reviewer comments, and track approval status. Montgomery County permit processing typically takes 6–10 weeks for addition projects.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Site Prep, Foundation & Framing</h3>
                            <p>Once permits are approved, our crews begin site preparation — excavation, new footings and foundation, waterproofing, and structural framing of the addition. All framing is inspected by Montgomery County before the next phase begins. We protect your existing home and landscaping throughout the process.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Roofing, Exterior & Weatherproofing</h3>
                            <p>New roof structure is framed and shingled to match your existing roof. Exterior walls are sheathed, house-wrapped, and sided with materials that match your home's existing exterior — so the addition blends seamlessly with the original structure from the street and the yard.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">7</div>
                        <div className="step-content">
                            <h3>Mechanical Rough-In (Electrical, Plumbing, HVAC)</h3>
                            <p>Our licensed electricians, plumbers, and HVAC technicians rough in all systems — extending your home's existing electrical panel, plumbing supply and drain lines, and HVAC ductwork into the new addition. All rough-in work is inspected by Montgomery County before walls are closed.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">8</div>
                        <div className="step-content">
                            <h3>Insulation, Drywall & Interior Finishes</h3>
                            <p>Insulation, drywall, painting, trim, flooring, cabinetry, tile, fixtures, and all interior finishes are installed — matched to your existing home's style or upgraded to a new standard throughout. We also open up and connect the addition to the existing home, repairing any disturbance to adjacent rooms.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">9</div>
                        <div className="step-content">
                            <h3>Final Inspections, Punch List & Walkthrough</h3>
                            <p>We schedule and manage all required Montgomery County final inspections — structural, electrical, plumbing, and HVAC. Upon passing all inspections, we do a thorough punch list walkthrough with you, addressing every detail before we hand over your completed addition.</p>
                        </div>
                        </div>
                    </div>

                    <h2>Architectural Integration — Making Your Addition Look Like It Was Always There</h2>
                    <p>
                        The biggest mistake homeowners make with home additions is choosing a contractor who treats the new construction as a separate structure — resulting in an addition that is obviously bolted onto the original home. Mismatched rooflines, different siding profiles, different window styles, and abrupt interior transitions are all signs of poor integration.
                    </p>
                    <p>
                        At DMV General Contracting Group, <strong>seamless architectural integration</strong> is a non-negotiable part of every home addition we build in Bethesda. Our architects design the addition's roofline to continue the pitch and profile of the existing roof. We source matching brick, siding, shingles, trim, and window styles to ensure visual continuity from every angle. Interior transitions — flooring, ceiling height, trim profile, and paint — are carefully managed so walking into the addition feels natural and connected, not like entering a different building.
                    </p>
                    <p>
                        The goal of every addition DMV General Contracting Group builds in Bethesda is simple: a neighbor walking past your home should not be able to tell where the original house ends and the addition begins.
                    </p>

                    <h2>Serving Bethesda and Surrounding Areas for Home Additions</h2>
                    <p>
                        In addition to <strong>home addition construction in Bethesda, MD</strong>, our licensed design-build team serves homeowners throughout Montgomery County and the greater DMV area:
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
                        <h3>Home additions in Chevy Chase & Potomac, MD</h3>
                        <p>Chevy Chase and Potomac are two of the most active markets for home additions near Bethesda — large lots, high home values, and strong community ties mean many homeowners prefer to build onto their existing home rather than move. DMV General Contracting Group has completed room additions, master suite additions, and second-story additions throughout both communities. We are fully familiar with the specific setback requirements and architectural review processes in each area, including HOA guidelines common in planned communities.</p>
                    </div>

                    <div className="nearby">
                        <h3>Home additions in Cabin John & Garrett Park, MD</h3>
                        <p>Cabin John and Garrett Park homeowners often have unique wooded lots and older home stock that require careful architectural sensitivity in addition design. Our team is experienced building additions on challenging terrain and integrating new construction seamlessly with the craftsman, colonial, and cape cod styles common throughout these communities.</p>
                    </div>

                    <h2>Frequently Asked Questions — Home Additions in Bethesda, MD</h2>
                    
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

                    <h2>Explore Our Related Services in Bethesda</h2>
                    <p>DMV General Contracting Group handles complete home additions and the interior renovations that often accompany them:</p>
                    <ul style={{margin: '12px 0 24px 20px', color: '#1a6b9a', fontSize: '15px', lineHeight: 2}}>
                        <li><Link href="/service/design-build" style={{color: '#1a6b9a'}}>Design-Build Services in Bethesda, MD</Link></li>
                        <li><Link href="/service/adu" style={{color: '#1a6b9a'}}>ADU Construction in Bethesda, MD</Link></li>
                        <li><Link href="/service/kitchen-remodeling" style={{color: '#1a6b9a'}}>Kitchen Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling" style={{color: '#1a6b9a'}}>Bathroom Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/basement-remodeling" style={{color: '#1a6b9a'}}>Basement Finishing & Remodeling in Bethesda, MD</Link></li>
                    </ul>

                    <div className="cta-banner">
                        <h2>Ready to Add On to Your Bethesda Home?</h2>
                        <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free consultation online. Our architects and permit specialists are ready to review your property and tell you exactly what's possible — 7 days a week across Bethesda and the DMV area.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Addition Consultation →</Link>
                    </div>
                    
                    {/* end */}
                </div>
            </StyledCom>
        </main>
    );
}