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


    @media (max-width: 600px) {
        h1 { font-size: 26px; }
        .service-grid { grid-template-columns: 1fr; }
        .trust-grid { grid-template-columns: 1fr; }
        .cat-grid { grid-template-columns: 1fr; }

        .main-image{height: 250px;}
        .cta-btn {  padding: 12px 12px; font-size: 14px; }
    }
`;

export default function KitchenRemodeling({ data, location }) {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const faqData = [
        {
            question: "How much does a kitchen remodel cost in Bethesda, MD?",
            answer:
            `In Bethesda, kitchen remodeling costs typically range from $15,000 for a minor refresh to $120,000+ for a full custom gut renovation. A mid-range kitchen remodel in Bethesda averages $35,000–$70,000 depending on materials, layout changes, and scope. DMV General Contracting Group offers free in-home consultations with itemized cost estimates so you know exactly what to expect before any work begins.`
        },
        {
            question: "How long does a kitchen renovation take in Bethesda?",
            answer:
            `Most kitchen renovations in Bethesda take 6–12 weeks from project start to completion. Minor updates (countertops, backsplash, fixtures) can be done in 2–4 weeks. Full gut renovations typically take 10–14 weeks. Because DMV General Contracting Group handles design, permits, and construction in-house, there are fewer delays compared to contractors who rely on multiple subcontractors.`
        },
        {
            question: "Does DMV General Contracting Group handle permits for kitchen remodeling in Maryland?",
            answer:
            `Yes. Our in-house permit processing team handles all required Montgomery County and Maryland building permits — including structural, electrical, and plumbing permits. You don't need to visit any county office or manage any paperwork. We handle it all as part of our full-service kitchen remodeling process in Bethesda.`
        },
        {
            question: "Is DMV General Contracting Group licensed and insured in Maryland?",
            answer:
            `Yes. DMV General Contracting Group is MHIC licensed, DLCP licensed, bonded, and fully insured in Maryland and Washington DC. We carry comprehensive general liability insurance and workers' compensation coverage on every kitchen remodeling project in Bethesda and throughout the DMV area.`
        },
        {
            question: "Do you offer a warranty on kitchen remodeling work?",
            answer:
            `Yes. Every kitchen remodel completed by DMV General Contracting Group comes with a 1-year workmanship warranty. We stand behind our work long after your project is complete. Our commitment to Bethesda homeowners extends beyond the final walkthrough.`
        },
        {
            question: "Can you remodel a small kitchen in a Bethesda home?",
            answer:
            `Absolutely. Many Bethesda homes — especially older colonials and Cape Cods — have compact kitchens that can be dramatically improved without major structural changes. Our designers specialize in maximizing space, improving layout flow, and creating functional kitchens even in smaller footprints.`
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
                        Kitchen Remodeling Bethesda, MD
                    </nav>

                    <div className="hero">
                        <h1>Kitchen Remodeling Contractor in Bethesda, MD</h1>
                        <div className="hero-meta">
                        <span className="hero-badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="hero-badge">✓ MHIC Licensed & Insured</span>
                        <span className="hero-badge">✓ DLCP Licensed</span>
                        <span className="hero-badge">✓ 1-Year Warranty</span>
                        <span className="hero-badge">✓ Free In-Home Consultation</span>
                        </div>
                    </div>

                    {!location && (
                        <div className="image-holder main-image">
                            <img src={`.${data.image}`} alt={data.title}/>
                        </div>
                    )}

                    <div className="intro">
                        Looking for a trusted <strong>kitchen remodeling contractor in Bethesda, MD</strong>? DMV General Contracting Group is a fully licensed, design-build general contractor serving Bethesda homeowners with complete kitchen renovation solutions — from concept and design to permits, construction, and final finishes. Whether you want a cosmetic refresh or a full gut renovation, our in-house team handles everything under one roof.
                    </div>

                    <h2>Our Kitchen Remodeling Services in Bethesda, MD</h2>
                    <p>
                        At DMV General Contracting Group, we offer a full range of <strong>kitchen remodeling services in Bethesda</strong> tailored to your home's style, layout, and budget. Our team combines traditional craftsmanship with modern design to create kitchens that look stunning and function effortlessly for everyday living.
                    </p>

                    <div className="service-grid">
                        <div className="service-item">Full Kitchen Gut Renovation</div>
                        <div className="service-item">Custom Cabinet Design & Installation</div>
                        <div className="service-item">Countertop Replacement (Quartz, Granite, Marble)</div>
                        <div className="service-item">Kitchen Layout Redesign & Space Planning</div>
                        <div className="service-item">Kitchen Island Addition</div>
                        <div className="service-item">Backsplash Tile Installation</div>
                        <div className="service-item">Kitchen Electrical & Lighting Upgrades</div>
                        <div className="service-item">Plumbing Relocation & Fixture Replacement</div>
                        <div className="service-item">Flooring Installation (Hardwood, Tile, LVP)</div>
                        <div className="service-item">Open-Concept Kitchen Conversion</div>
                        <div className="service-item">Appliance Installation & Integration</div>
                        <div className="service-item">Permit Processing & Inspections</div>
                    </div>

                    <p>
                        Every <strong>kitchen renovation in Bethesda</strong> we complete is backed by our in-house architectural, engineering, electrical, plumbing, and HVAC teams — meaning faster timelines, clearer communication, and zero coordination headaches for you.
                    </p>

                    <h2>Why Bethesda Homeowners Choose DMV General Contracting Group</h2>
                    <p>
                        Bethesda is one of Maryland's most desirable neighborhoods — from Woodmont Triangle and Edgemoor to Battery Park and Bethesda Row. Homeowners here expect the highest standards of design and craftsmanship. That's exactly what we deliver.
                    </p>

                    <div className="trust-grid">
                        <div className="trust-box">
                        <div className="icon">🏗️</div>
                        <strong>Design-Build Under One Roof</strong>
                        <span>Architects, engineers & builders — all in-house</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">📋</div>
                        <strong>We Handle All Permits</strong>
                        <span>Montgomery County & DC permits managed by us</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">🛡️</div>
                        <strong>MHIC Licensed & Insured</strong>
                        <span>Fully bonded with 1-year workmanship warranty</span>
                        </div>
                    </div>

                    <p>
                        Unlike contractors who subcontract work to third parties, DMV General Contracting Group manages every aspect of your <strong>Bethesda kitchen remodel</strong> in-house. This means consistent quality control from day one to the final walkthrough. With a 4.9-star rating and 97+ verified reviews, our reputation across Bethesda and the greater DMV area speaks for itself.
                    </p>

                    <h2>Kitchen Remodel Cost in Bethesda, MD</h2>
                    <p>
                        One of the most common questions we hear from Bethesda homeowners is: <em>"How much does a kitchen remodel cost?"</em> The answer depends on scope, materials, and layout changes. Below is a general cost guide for <strong>kitchen renovations in Bethesda, Maryland</strong>:
                    </p>

                    <table className="cost-table">
                        <thead>
                            <tr>
                                <th>Remodel Type</th>
                                <th>Typical Cost Range</th>
                                <th>What's Included</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Minor Kitchen Refresh</td>
                                <td>$15,000 – $30,000</td>
                                <td>Cabinet refacing, new countertops, fixtures, hardware, paint</td>
                            </tr>
                            <tr>
                                <td>Mid-Range Kitchen Remodel</td>
                                <td>$35,000 – $70,000</td>
                                <td>New cabinets, countertops, flooring, appliances, backsplash, lighting</td>
                            </tr>
                            <tr>
                                <td>Full Gut Renovation</td>
                                <td>$75,000 – $120,000+</td>
                                <td>Complete demo, layout redesign, custom cabinetry, high-end finishes, electrical & plumbing</td>
                            </tr>
                            <tr>
                                <td>Luxury / Custom Kitchen</td>
                                <td>$120,000+</td>
                                <td>Premium materials, custom millwork, smart appliances, structural changes</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        Keep in mind that Bethesda's upscale real estate market means kitchen renovations often deliver strong ROI — a well-executed kitchen remodel can add significant value to your home. Contact us for a free in-home estimate tailored to your specific Bethesda property.
                    </p>

                    <h2>Our Kitchen Renovation Process in Bethesda</h2>
                    <p>
                        We believe a successful <strong>kitchen remodel in Bethesda</strong> starts with a clear process and transparent communication. Here's how we work:
                    </p>

                    <div className="steps">
                        <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free In-Home Consultation</h3>
                            <p>We visit your Bethesda home, assess your kitchen, discuss your goals and budget, and walk you through ideas and possibilities — at no cost.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Design & Planning</h3>
                            <p>Our in-house architects and designers create a detailed kitchen layout, 3D renderings, and material selections customized for your home and lifestyle.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Permits & Approvals</h3>
                            <p>We handle all required Montgomery County and Maryland building permits for your kitchen renovation — you don't lift a finger.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Construction & Renovation</h3>
                            <p>Our licensed crews handle demolition, structural work, electrical, plumbing, cabinetry, tiling, and all finishes with precision and care.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Final Inspection & Walkthrough</h3>
                            <p>We complete inspections, do a detailed walkthrough with you, and ensure every detail meets your expectations before we consider the project done.</p>
                        </div>
                        </div>
                    </div>

                    <div className="cta-banner">
                        <h2>Ready to Transform Your Bethesda Kitchen?</h2>
                        <p>Get a free in-home consultation with our licensed kitchen remodeling team. No pressure. No obligation.</p>
                        <Link href={"/contact-us"} className="cta-btn">Schedule Free Consultation in Bethesda →</Link>
                    </div>

                    <h2>Recent Kitchen Remodeling Projects Near Bethesda</h2>
                    <p>
                        Our portfolio includes completed <strong>kitchen renovations across Bethesda and surrounding Maryland communities</strong> — from modern open-concept kitchens in Edgemoor to traditional custom kitchens in Battery Park. Each project is approached with the same attention to craftsmanship and detail, regardless of size or budget.
                    </p>
                    <p>
                        We also serve homeowners in nearby Chevy Chase, Potomac, and North Bethesda who want the same quality design-build experience. Browse our project gallery to see real before-and-after transformations from homes just like yours.
                    </p>

                    <h2>Serving Bethesda and Surrounding Areas</h2>
                    <p>
                        In addition to <strong>kitchen remodeling in Bethesda, MD</strong>, our licensed team proudly serves homeowners throughout Montgomery County and the greater DMV region:
                    </p>

                    <div className="areas-grid">
                        <span className="area-pill">Bethesda, MD</span>
                        <span className="area-pill">North Bethesda</span>
                        <Link href="/service/kitchen-remodeling/potomac-md" className="area-pill text-decoration-none">Potomac</Link>
                        <Link href="/service/kitchen-remodeling/chevy-chase-md" className="area-pill text-decoration-none">Chevy Chase</Link>
                        <Link href="/service/kitchen-remodeling/rockville-md" className="area-pill text-decoration-none">Rockville</Link>
                        <Link href="/service/kitchen-remodeling/kensington-md" className="area-pill text-decoration-none">Kensington</Link>
                        <Link href="/service/kitchen-remodeling/silver-spring-md" className="area-pill text-decoration-none">Silver Spring</Link>
                        <Link href="/service/kitchen-remodeling/wheaton-md" className="area-pill text-decoration-none">Wheaton</Link>
                        <Link href="/service/kitchen-remodeling/gaithersburg-md" className="area-pill text-decoration-none">Gaithersburg</Link>
                        <Link href="/service/kitchen-remodeling/garrett-park-md" className="area-pill text-decoration-none">Garrett Park</Link>
                        <span className="area-pill">Cabin John</span>
                        <span className="area-pill">Washington DC</span>
                        <span className="area-pill">Laurel</span>
                    </div>

                    <div className="nearby">
                        <h3>Also remodeling kitchens in Chevy Chase & Potomac</h3>
                        <p>DMV General Contracting Group is one of the most trusted kitchen remodeling contractors in Chevy Chase, MD and Potomac, MD — two of Bethesda's most sought-after neighboring communities. Our in-house design-build team handles projects of all sizes in these areas with the same quality and professionalism.</p>
                    </div>

                    <h2>Frequently Asked Questions — Kitchen Remodeling in Bethesda</h2>
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
                    <p>
                        Beyond <strong>Kitchen finishing and remodeling in Bethesda</strong>, DMV General Contracting Group offers a full range of home renovation services across the DMV area:
                    </p>
                    <ul style={{margin: '12px 0 24px 20px', color: '#1a6b9a', fontSize: '15px', lineHeight: 2}}>
                        <li><Link href="/service/bathroom-remodeling" style={{color: '#1a6b9a'}}>Bathroom Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/home-additions" style={{color: '#1a6b9a'}}>Home Additions in Bethesda, MD</Link></li>
                        <li><Link href="/service/design-build" style={{color: '#1a6b9a'}}>Design-Build Services in Bethesda, MD</Link></li>
                        <li><Link href="/service/adu" style={{color: '#1a6b9a'}}>ADU Construction in Bethesda, MD</Link></li>
                    </ul>

                    <div className="cta-banner">
                        <h2>Start Your Bethesda Kitchen Remodel Today</h2>
                        <p>Call us at <strong><Link className="text-decoration-none" href="tel:+1 (240) 730-1292">+1 240-730-1292</Link></strong> or schedule your free in-home consultation online. Available 7 days a week.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Estimate →</Link>
                    </div>
                </div>
            </StyledCom>
        </main>
    );
}