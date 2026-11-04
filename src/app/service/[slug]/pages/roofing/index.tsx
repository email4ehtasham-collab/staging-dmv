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

export default function Roofing({ data, location }) {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const faqData = [
        {
            question: "What roofing services do you provide in Bethesda, MD?",
            answer:
            `We provide roof inspections, roof repair, roof replacement, emergency roofing support, roof maintenance, and roofing services connected to renovation or new construction projects.`
        },
        {
            question: "How do I know if my roof needs repair or replacement?",
            answer:
            `Recurring leaks, missing or damaged shingles, visible water stains, aging materials, sagging areas, and storm damage may indicate that your roof needs professional attention. An inspection can help determine the appropriate next step.`
        },
        {
            question: "Do you offer emergency roofing services?",
            answer:
            `We can help assess urgent roofing issues such as active leaks and storm-related damage. Temporary protective measures may be recommended while permanent repairs are arranged.`
        },
        {
            question: "Can you help me select roofing materials?",
            answer:
            `Yes. Our team can discuss roofing material options such as asphalt shingles, metal roofing, and other suitable systems based on the property's design, project needs, durability goals, and budget.`
        },
        {
            question: "How can I schedule a roofing consultation?",
            answer:
            `Call DMV General Contracting Group at <strong>+1 240-730-1292</strong> or email <strong>support@dmv-gc.com</strong> to discuss your roofing project.`
        }
    ];

    const servicesData = [
        { icon: "🔍", title: "Roof Inspection & Assessment", desc: "A detailed roof inspection helps identify visible damage, wear, moisture concerns, aging materials, and potential problem areas. Our team assesses the roof's condition and discusses whether repair, maintenance, or replacement may be appropriate." },
        { icon: "🛠️", title: "Roof Repair", desc: "We help address roofing problems such as leaks, damaged shingles, flashing concerns, and weather-related wear. Timely roof repairs can help prevent minor issues from developing into more extensive damage." },
        { icon: "🏠", title: "Roof Replacement", desc: "When a roof has reached the end of its useful service life or has extensive damage, replacement may be the right solution. We can help evaluate replacement needs and discuss suitable roofing options." },
        { icon: "⛈️", title: "Emergency Roofing Services", desc: "Unexpected leaks and storm damage require prompt attention. Our team can help assess urgent roofing concerns and discuss temporary protective measures while permanent work is planned." },
        { icon: "🧰", title: "Roof Maintenance", desc: "Regular inspections, appropriate cleaning, and minor repairs can help maintain the condition of your roofing system and identify concerns earlier." },
        { icon: "🏡", title: "Roofing for Renovation Projects", desc: "Roofing work is often part of a larger home improvement or remodeling project. Our design-build experience allows roofing requirements to be considered alongside other construction needs." },
        { icon: "🌧️", title: "Leak Detection & Moisture Concerns", desc: "Water stains, damp areas, and recurring leaks should be assessed promptly. We help identify visible roofing concerns and recommend appropriate next steps." },
        { icon: "🏗️", title: "New Roof Installation", desc: "For new construction and custom home projects, roofing installation should be coordinated with the building design, structure, materials, and overall construction plan." }
    ];

    const steps = [
        { title: "Discuss Your Needs", desc: "Tell us about your roof concern, renovation, leak, storm damage, or replacement goals." },
        { title: "Inspect the Roof", desc: "We review the visible condition of the roofing system and identify potential problem areas." },
        { title: "Review Options", desc: "We explain suitable repair, maintenance, or replacement approaches based on the project." },
        { title: "Plan the Work", desc: "Project requirements, materials, scheduling, and related construction considerations are reviewed." },
        { title: "Complete Roofing Work", desc: "Our team carries out the agreed roofing services with attention to workmanship and site conditions." },
        { title: "Final Review", desc: "We review the completed work and discuss relevant maintenance or follow-up recommendations." }
    ];

    return (
        <main className="page-wrapper">
            <NavitemActive nav="service" />
            <StyledCom className="service-detail-page">
                <div className="container">
                    <nav className="breadcrumb">
                        <Link href="/">Home</Link><span>›</span>
                        <Link href="/services">Services</Link><span>›</span>
                        Roofing Services in Bethesda, MD
                    </nav>

                    <div className="hero">
                        <h1>Roofing Services in Bethesda, MD</h1>
                        <div className="hero-meta">
                            <span className="hero-badge">✓ Roof Inspection</span>
                            <span className="hero-badge">✓ Roof Repair</span>
                            <span className="hero-badge">✓ Roof Replacement</span>
                            <span className="hero-badge">✓ Emergency Roofing</span>
                            <span className="hero-badge">✓ Available 7 Days a Week</span>
                        </div>
                    </div>

                    {!location && (
                        <div className="image-holder main-image">
                            <img src={`.${data.image}`} alt={data.title}/>
                        </div>
                    )}

                    <div className="intro">
                        Protect your <strong>Bethesda home</strong> with dependable roofing solutions from DMV General Contracting Group. We provide roof inspections, roof repairs, roof replacements, emergency roofing support, and maintenance-focused services designed to improve roof performance, durability, and long-term protection.
                    </div>

                    <h2>Reliable Roofing for Bethesda Homes</h2>
                    <p>
                        Your roof is one of the most important protective systems in your home. It helps defend your property against rain, wind, seasonal weather, moisture, and everyday wear. DMV General Contracting Group provides professional roofing services in Bethesda, MD, with a focus on quality workmanship, clear communication, and practical solutions for each property.
                    </p>
                    <p>
                        Whether you are dealing with a roof leak, damaged shingles, an aging roof, storm-related concerns, or a planned home improvement project, our team can help you understand the condition of your roofing system and identify the next steps.
                    </p>

                    <div className="highlight">
                        <p><strong>Serving Bethesda, MD:</strong> Roofing solutions for residential properties, home renovations, roof maintenance needs, storm-related damage, and roof replacement projects.</p>
                    </div>

                    <h2>Complete Roofing Services in Bethesda</h2>
                    <p>
                        From routine inspections to complete roof replacements, DMV General Contracting Group handles every aspect of your roofing project with licensed, experienced teams and quality materials.
                    </p>

                    <div className="cat-grid">
                        {servicesData.map((service, index) => (
                            <div className="cat-card" key={index}>
                                <span className="tag">{service.icon}</span>
                                <h3>{service.title}</h3>
                                <ul>
                                    <li>{service.desc}</li>
                                </ul>
                            </div>
                        ))}
                    </div>

                    <h2>Why Choose DMV General Contracting Group?</h2>
                    <div className="trust-grid">
                        <div className="trust-box">
                            <div className="icon">👷</div>
                            <strong>Experienced Team</strong>
                            <span>Skilled roofers you can rely on</span>
                        </div>
                        <div className="trust-box">
                            <div className="icon">🏅</div>
                            <strong>Quality Craftsmanship</strong>
                            <span>Attention to every roofing detail</span>
                        </div>
                        <div className="trust-box">
                            <div className="icon">🏗️</div>
                            <strong>In-House Services</strong>
                            <span>Structural, electrical, plumbing & HVAC</span>
                        </div>
                        <div className="trust-box">
                            <div className="icon">📅</div>
                            <strong>Available 7 Days a Week</strong>
                            <span>Prompt roofing support when you need it</span>
                        </div>
                    </div>
                    <p>
                        DMV General Contracting Group focuses on dependable communication, quality workmanship, and practical construction solutions. Our in-house capabilities include structural, electrical, plumbing, and HVAC services, allowing roofing requirements to be considered within coordinated construction projects.
                    </p>

                    <h2>Common Roofing Needs in Bethesda</h2>
                    <p>
                        Every roof and property is different. Here's how we can help with the most common roofing situations homeowners face:
                    </p>

                    <div className="table-responsive">
                        <table className="cost-table table-holder">
                            <thead>
                                <tr>
                                    <th>Roofing Situation</th>
                                    <th>How DMV-GC Can Help</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Recurring roof leaks</td>
                                    <td>Assess visible leak-related concerns, inspect relevant roofing components, and discuss repair or replacement options.</td>
                                </tr>
                                <tr>
                                    <td>Missing or damaged shingles</td>
                                    <td>Review damaged areas and determine whether localized repairs or broader roofing work may be required.</td>
                                </tr>
                                <tr>
                                    <td>Aging roofing system</td>
                                    <td>Evaluate the roof's overall condition and explain whether maintenance, repair, or replacement should be considered.</td>
                                </tr>
                                <tr>
                                    <td>Storm-related roof damage</td>
                                    <td>Assess visible storm damage, identify urgent concerns, and discuss temporary protection and permanent repair solutions.</td>
                                </tr>
                                <tr>
                                    <td>Home renovation</td>
                                    <td>Coordinate roofing considerations with remodeling, structural work, exterior improvements, and other construction requirements.</td>
                                </tr>
                                <tr>
                                    <td>New construction or addition</td>
                                    <td>Support roofing installation planning as part of a broader design-build and construction workflow.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2>Our Roofing Process</h2>
                    <p>
                        A clear process means better communication and a smoother project. Here's how we work with you from start to finish:
                    </p>

                    <div className="steps">
                        {steps.map((step, index) => (
                            <div className="step" key={index}>
                                <div className="step-num">{index + 1}</div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cta-banner">
                        <h2>Need Roofing Services in Bethesda, MD?</h2>
                        <p>Contact DMV General Contracting Group to discuss your roof inspection, repair, replacement, or maintenance needs.</p>
                        <Link href={"/contact-us"} className="cta-btn">Schedule Free Consultation →</Link>
                    </div>

                    <h2>Roofing for Bethesda Remodeling & Construction Projects</h2>
                    <p>
                        Roofing is often connected to larger home improvement projects. A home addition, upper-level renovation, structural modification, exterior upgrade, or new construction project may require roofing work to be planned alongside other trades.
                    </p>
                    <p>
                        DMV General Contracting Group provides design-build and project management capabilities with in-house structural, electrical, plumbing, and HVAC services. This broader experience can support coordination when roofing is part of a larger construction or renovation scope.
                    </p>

                    <h2>Roofing Service Area</h2>
                    <p>
                        DMV General Contracting Group serves Bethesda, MD, and surrounding communities throughout the Montgomery County and Washington, DC metropolitan area. Contact our team to discuss your property location and roofing requirements.
                    </p>

                    <div className="areas-grid">
                        <span className="area-pill">Bethesda, MD</span>
                        <Link href="/service/roofing/north-bethesda-md" className="area-pill text-decoration-none">North Bethesda</Link>
                        <Link href="/service/roofing/rockville-md" className="area-pill text-decoration-none">Rockville</Link>
                        <Link href="/service/roofing/potomac-md" className="area-pill text-decoration-none">Potomac</Link>
                        <Link href="/service/roofing/chevy-chase-md" className="area-pill text-decoration-none">Chevy Chase</Link>
                        <Link href="/service/roofing/kensington-md" className="area-pill text-decoration-none">Kensington</Link>
                        <Link href="/service/roofing/gaithersburg-md" className="area-pill text-decoration-none">Gaithersburg</Link>
                        <Link href="/service/roofing/garrett-park-md" className="area-pill text-decoration-none">Garrett Park</Link>
                        <Link href="/service/roofing/wheaton-md" className="area-pill text-decoration-none">Wheaton</Link>
                        <Link href="/service/roofing/cabin-john-md" className="area-pill text-decoration-none">Cabin John</Link>
                        <Link href="/service/roofing/washington-dc" className="area-pill text-decoration-none">Washington DC</Link>
                        <span className="area-pill">Laurel</span>
                        <span className="area-pill">Silver Spring</span>
                    </div>

                    <h2>Frequently Asked Questions — Roofing in Bethesda</h2>
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

                    <h2>Explore Our Other Services</h2>
                    <p>
                        Beyond <strong>roofing in Bethesda</strong>, DMV General Contracting Group offers a full range of home renovation services across the DMV area:
                    </p>
                    <ul style={{margin: '12px 0 24px 20px', color: '#1a6b9a', fontSize: '15px', lineHeight: 2}}>
                        <li><Link href="/service/kitchen-remodeling" style={{color: '#1a6b9a'}}>Kitchen Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling" style={{color: '#1a6b9a'}}>Bathroom Remodeling in Bethesda, MD</Link></li>
                        <li><Link href="/service/home-additions" style={{color: '#1a6b9a'}}>Home Additions in Bethesda, MD</Link></li>
                        <li><Link href="/service/design-build" style={{color: '#1a6b9a'}}>Design-Build Services in Bethesda, MD</Link></li>
                    </ul>

                    <div className="cta-banner">
                        <h2>Ready to Protect Your Home with Quality Roofing?</h2>
                        <p>Call us at <strong><Link className="text-decoration-none" href="tel:+1 (240) 730-1292">+1 240-730-1292</Link></strong> or schedule your free consultation online. Available 7 days a week.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Estimate →</Link>
                    </div>
                </div>
            </StyledCom>
        </main>
    );
}