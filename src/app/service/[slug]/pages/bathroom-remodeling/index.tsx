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

    .bath-types { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin: 16px 0 28px; }
    .bath-card { padding: 18px; background: var(--card-style1-bg); border: 1px solid var(--card-style1-border); border-radius: 10px; }
    .bath-card h3 { font-size: 15px; font-family: sans-serif; margin: 0 0 6px; color: #1a6b9a; }
    .bath-card p { font-size: 13px; color: #555; margin: 0; line-height: 1.6; }


    @media (max-width: 600px) {
        h1 { font-size: 26px; }
        .service-grid { grid-template-columns: 1fr; }
        .trust-grid { grid-template-columns: 1fr; }
        .cat-grid { grid-template-columns: 1fr; }
            
        .bath-types { grid-tem plate-columns:  1fr;  }

        .main-image{height: 250px;}
        .cta-btn {  padding: 12px 12px; font-size: 14px; }
    }
`;

export default function KitchenRemodeling({ data }) {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const faqData = [
        {
            question: "How much does a bathroom remodel cost in Bethesda, MD?",
            answer:
            `In Bethesda, bathroom remodeling costs typically range from $5,000 for a powder room update to $90,000+ for a full luxury master bathroom renovation. A mid-range master bath remodel in Bethesda averages $25,000–$50,000 depending on size, materials, and layout changes. DMV General Contracting Group provides free in-home consultations with a detailed, itemized estimate so you have a clear picture of costs before any work begins.`
        },
        {
            question: "How long does a bathroom renovation take in Bethesda?",
            answer:
            `Most bathroom renovations in Bethesda take between 3 and 8 weeks. A simple guest bath update (tile, vanity, fixtures) can be completed in 2–3 weeks. A full master bathroom gut renovation typically takes 6–10 weeks. Because DMV General Contracting Group manages all trades — plumbing, tile, electrical — in-house, we avoid the delays that come with coordinating multiple subcontractors.`
        },
        {
            question: "Does DMV General Contracting Group handle permits for bathroom remodeling in Maryland?",
            answer:
            `Yes. Our in-house permit processing team handles all required Montgomery County building, plumbing, and electrical permits for your Bethesda bathroom renovation. You don't need to contact the county or manage any paperwork — we take care of everything from permit application through final inspection.`
        },
        {
            question: "Can you convert a tub to a walk-in shower in my Bethesda home?",
            answer:
            `Yes — tub-to-shower conversions are one of the most popular requests from Bethesda homeowners. Our team handles the entire conversion: plumbing rerouting, waterproofing membrane installation, custom tile work, niche shelving, and frameless glass enclosure. We also handle any permits required for the plumbing changes.`
        },
        {
            question: "Do you remodel small bathrooms in Bethesda?",
            answer:
            `Absolutely. Many Bethesda homes have compact hall baths, powder rooms, or older master baths that can be dramatically improved. Our designers use strategies like large-format tiles, floating vanities, frameless glass, and smart storage to make small bathrooms look and feel significantly larger. No bathroom is too small to improve.`
        },
        {
            question: "Is DMV General Contracting Group licensed and insured for bathroom remodeling in Maryland?",
            answer:
            `Yes. DMV General Contracting Group is fully MHIC licensed, DLCP licensed, bonded, and insured in both Maryland and Washington DC. Every bathroom remodeling project in Bethesda is covered by our comprehensive general liability insurance and workers' compensation, and backed by our 1-year workmanship warranty.`
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
                        Bathroom Remodeling Bethesda, MD
                    </nav>

                    <div className="hero">
                        <h1>Bathroom Remodeling Contractor in Bethesda, MD</h1>
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
                        Looking for a trusted <strong>bathroom remodeling contractor in Bethesda, MD</strong>? DMV General Contracting Group is a fully licensed, design-build general contractor delivering complete bathroom renovation solutions to Bethesda homeowners. From a simple guest bath refresh to a full spa-style master bathroom gut renovation, our in-house team manages everything — design, permits, plumbing, tile, electrical, and final finishes — all under one roof.
                    </div>

                    <h2>Our Bathroom Remodeling Services in Bethesda, MD</h2>
                    <p>
                        Our licensed team offers a comprehensive range of <strong>bathroom renovation services in Bethesda</strong>. Whether you're updating a compact powder room, expanding a master bath, or adding a brand-new bathroom to your home, we have the expertise to bring your vision to life with precision and craftsmanship.
                    </p>

                    <div className="service-grid">
                        <div className="service-item">Full Master Bathroom Gut Renovation</div>
                        <div className="service-item">Walk-In Shower Design & Installation</div>
                        <div className="service-item">Bathtub Replacement & Freestanding Tub Installation</div>
                        <div className="service-item">Tub-to-Shower Conversion</div>
                        <div className="service-item">Custom Tile & Mosaic Work</div>
                        <div className="service-item">Vanity & Cabinet Installation</div>
                        <div className="service-item">Double Vanity & His-and-Hers Sinks</div>
                        <div className="service-item">Heated Flooring Installation</div>
                        <div className="service-item">Frameless Glass Shower Enclosure</div>
                        <div className="service-item">Bathroom Lighting & Exhaust Fan Upgrades</div>
                        <div className="service-item">Toilet Replacement & Bidet Installation</div>
                        <div className="service-item">Bathroom Addition & Layout Expansion</div>
                    </div>

                    <p>
                        Every <strong>bathroom renovation in Bethesda</strong> we complete is handled entirely by our in-house team — architects, designers, licensed plumbers, electricians, and tile specialists — so there's no waiting on outside subcontractors and no gaps in accountability.
                    </p>

                    <h2>Types of Bathroom Remodels We Complete in Bethesda</h2>
                    <p>
                        Bethesda homes vary widely — from classic colonials in Edgemoor to contemporary builds near Bethesda Row. Our team is experienced with all bathroom sizes and styles. Here are the most common <strong>bathroom remodeling projects</strong> we complete for Bethesda homeowners:
                    </p>

                    <div className="bath-types">
                        <div className="bath-card">
                        <h3>Master Bathroom Renovation</h3>
                        <p>Full gut renovations with spa-inspired features — walk-in showers, soaking tubs, double vanities, heated floors, and premium tile finishes tailored to your style.</p>
                        </div>
                        <div className="bath-card">
                        <h3>Guest & Hall Bathroom Remodel</h3>
                        <p>Updated fixtures, new tile, fresh vanity, and improved lighting to make shared bathrooms feel modern, clean, and functional for the whole family.</p>
                        </div>
                        <div className="bath-card">
                        <h3>Powder Room / Half Bath Update</h3>
                        <p>High-impact updates in a small footprint — new vanity, statement tile, upgraded fixtures, and fresh paint to impress guests without a large budget.</p>
                        </div>
                        <div className="bath-card">
                        <h3>Jack-and-Jill Bathroom Remodel</h3>
                        <p>Smart layout solutions for shared bathrooms between bedrooms — double sinks, separate toilet areas, and efficient storage design for busy households.</p>
                        </div>
                        <div className="bath-card">
                        <h3>Tub-to-Shower Conversion</h3>
                        <p>Replace an unused bathtub with a custom walk-in shower. Includes full plumbing rerouting, waterproofing, custom tile work, and glass enclosure installation.</p>
                        </div>
                        <div className="bath-card">
                        <h3>Bathroom Addition</h3>
                        <p>Add a brand-new bathroom to your Bethesda home — in-law suite, basement bath, or primary suite expansion. Our in-house architects handle design and permits.</p>
                        </div>
                    </div>


                    <h2>Why Bethesda Homeowners Trust DMV General Contracting Group</h2>
                    <p>
                        Bethesda is home to some of Maryland's most discerning homeowners — in neighborhoods like Battery Park, Woodmont, Wyngate, and Bradley Hills. When they invest in a <strong>bathroom remodel in Bethesda</strong>, they expect quality that matches their home's value. Here's why they choose us:
                    </p>

                    <div className="trust-grid">
                        <div className="trust-box">
                        <div className="icon">🏗️</div>
                        <strong>Design-Build Under One Roof</strong>
                        <span>Architects, designers & licensed tradesmen — all in-house</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">📋</div>
                        <strong>Permit Processing Included</strong>
                        <span>We handle all Montgomery County permits for you</span>
                        </div>
                        <div className="trust-box">
                        <div className="icon">🛡️</div>
                        <strong>MHIC Licensed & Insured</strong>
                        <span>Bonded, insured & 1-year workmanship warranty</span>
                        </div>
                    </div>

                    <div className="highlight">
                        <p>⭐ <strong>4.9-star rated with 97+ verified reviews</strong> — DMV General Contracting Group is one of the most trusted bathroom remodeling contractors serving Bethesda, MD and the greater Montgomery County area.</p>
                    </div>

                    <p>
                        Unlike bathroom contractors who outsource tile work, plumbing, or electrical to separate crews, DMV General Contracting Group manages every trade in-house. This means tighter timelines, consistent quality, and a single point of contact throughout your entire <strong>Bethesda bathroom renovation</strong>.
                    </p>


                    <div className="cta-banner">
                        <h2>Get a Free Bathroom Remodeling Estimate in Bethesda</h2>
                        <p>Schedule your free in-home consultation today. Our team will visit your home, assess the space, and provide a detailed estimate at no cost.</p>
                        <Link href="/contact-us" className="cta-btn">Schedule Free Consultation →</Link>
                    </div>


                    <h2>Bathroom Remodel Cost in Bethesda, MD</h2>
                    <p>
                        Wondering how much a <strong>bathroom renovation costs in Bethesda, Maryland</strong>? Costs vary depending on the size of the bathroom, scope of work, and material choices. Here's a general guide to help you plan your budget:
                    </p>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <tr>
                                <th>Remodel Type</th>
                                <th>Typical Cost Range</th>
                                <th>What's Included</th>
                                </tr>
                                <tr>
                                <td>Powder Room / Half Bath Update</td>
                                <td>$5,000 – $12,000</td>
                                <td>New vanity, toilet, tile, fixtures, lighting, paint</td>
                                </tr>
                                <tr>
                                <td>Guest / Hall Bathroom Remodel</td>
                                <td>$12,000 – $25,000</td>
                                <td>New tub/shower, tile, vanity, flooring, lighting, fixtures</td>
                                </tr>
                                <tr>
                                <td>Mid-Range Master Bath Remodel</td>
                                <td>$25,000 – $50,000</td>
                                <td>Walk-in shower, freestanding tub, double vanity, heated floors, premium tile</td>
                                </tr>
                                <tr>
                                <td>Luxury / Spa Master Bathroom</td>
                                <td>$55,000 – $90,000+</td>
                                <td>Custom tile, steam shower, soaking tub, radiant heat, designer fixtures, full gut</td>
                                </tr>
                                <tr>
                                <td>Bathroom Addition</td>
                                <td>$40,000 – $80,000+</td>
                                <td>New bathroom build-out, plumbing rough-in, all finishes, permits</td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <p>
                        Bethesda's real estate market means a well-executed <strong>bathroom remodel adds measurable value</strong> to your home. Master bathroom renovations in particular consistently rank among the highest-ROI home improvement projects in the Maryland market. Contact DMV General Contracting Group for a free, itemized estimate for your specific project.
                    </p>


                    <h2>Our Bathroom Renovation Process in Bethesda</h2>
                    <p>
                        We've refined our process to make <strong>bathroom remodeling in Bethesda</strong> as stress-free as possible. Here's what to expect when you work with DMV General Contracting Group:
                    </p>

                    <div className="steps">
                        <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free In-Home Consultation</h3>
                            <p>We visit your Bethesda home, evaluate your current bathroom, discuss your goals, timeline, and budget — completely free and with no obligation.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Custom Design & Material Selection</h3>
                            <p>Our in-house designers create detailed layout plans, 3D renderings, and guide you through tile, fixture, vanity, and finish selections suited to your style and home.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Permits & Approvals</h3>
                            <p>We handle all required Montgomery County building, plumbing, and electrical permits for your bathroom renovation. Zero paperwork for you.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Demolition & Construction</h3>
                            <p>Our licensed crews handle demo, waterproofing, plumbing rough-in, electrical, tile installation, vanity, fixtures, and all finishes with meticulous attention to detail.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Final Inspection & Walkthrough</h3>
                            <p>We complete all required inspections, do a thorough walkthrough with you, and ensure every detail of your new Bethesda bathroom meets your expectations before we close out the project.</p>
                        </div>
                        </div>
                    </div>


                    <h2>Recent Bathroom Remodeling Projects Near Bethesda</h2>
                    <p>
                        Our portfolio includes completed <strong>bathroom renovations across Bethesda and surrounding Maryland communities</strong> — from spa-style master bathrooms in Edgemoor and Battery Park to elegant guest bath updates in Wyngate and Bradley Hills. Every project reflects our commitment to craftsmanship, clean execution, and designs that stand the test of time.
                    </p>
                    <p>
                        We also regularly complete bathroom remodels in nearby Chevy Chase, Potomac, and North Bethesda for homeowners who want the same level of design-build quality. Browse our project gallery to see real before-and-after transformations from homes across the Bethesda area.
                    </p>


                    <h2>Serving Bethesda and Surrounding Areas for Bathroom Renovations</h2>
                    <p>
                        In addition to <strong>bathroom remodeling in Bethesda, MD</strong>, our licensed team proudly serves homeowners throughout Montgomery County and the greater DMV area:
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
                        <h3>Also remodeling bathrooms in Chevy Chase & Potomac</h3>
                        <p>DMV General Contracting Group is one of the most trusted bathroom remodeling contractors serving Chevy Chase, MD and Potomac, MD — two of Bethesda's most sought-after neighboring communities. Our in-house design-build team delivers the same quality and professionalism on every project across both areas.</p>
                    </div>

                    <div className="nearby">
                        <h3>Bathroom remodeling in Washington DC</h3>
                        <p>We hold both a MHIC Maryland license and a DLCP Washington DC license, making us one of the few contractors fully licensed to remodel bathrooms on both sides of the border. Whether your home is in Bethesda or Northwest DC, DMV General Contracting Group has you covered.</p>
                    </div>


                    <h2>Frequently Asked Questions — Bathroom Remodeling in Bethesda, MD</h2>
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
                        In addition to <strong>bathroom renovation in Bethesda</strong>, DMV General Contracting Group offers a full range of home remodeling services across the DMV area. Explore our other popular services for Bethesda homeowners:
                    </p>
                    <ul style={{margin: '12px 0 24px 20px', color: '#1a6b9a', fontSize: '15px', lineHeight: 2}}>
                        <li><Link href="/service/kitchen-remodeling" style={{color: '#1a6b9a'}}>Kitchen Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/basement-remodeling" style={{color: '#1a6b9a'}}>Basement Finishing & Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/home-additions" style={{color: '#1a6b9a'}}>Home Additions in Bethesda, MD</Link></li>
                        <li><Link href="/service/design-build" style={{color: '#1a6b9a'}}>Design-Build Services in Bethesda, MD</Link></li>
                    </ul>


                    <div className="cta-banner">
                        <h2>Ready to Transform Your Bethesda Bathroom?</h2>
                        <p>Call us at <strong><Link href="tel:+1 (240) 730-1292" className="text-decoration-none">+1 240-730-1292</Link></strong> or schedule your free in-home consultation online. Available 7 days a week across Bethesda and the DMV area.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Estimate in Bethesda →</Link>
                    </div>
                </div>
            </StyledCom>
        </main>
    );
}