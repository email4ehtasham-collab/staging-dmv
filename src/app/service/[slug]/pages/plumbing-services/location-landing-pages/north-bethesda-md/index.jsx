'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const NorthBethesdaMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "What plumbing services do you provide in North Bethesda?",
            answer: "We provide water heater installation and replacement, whole-home repiping, pipe replacement, bathroom and kitchen plumbing, sump and sewage ejector pumps, fixtures and appliance connections, water filtration and remodel plumbing."
        },
        {
            question: "Do you handle plumbing permits in North Bethesda?",
            answer: "We coordinate applicable permits and inspections for the plumbing projects we perform. Depending on the scope, WSSC requirements may apply in Montgomery County."
        },
        {
            question: "Can you replace old galvanized or polybutylene pipes?",
            answer: "Yes. We assess accessible piping and can perform partial repairs or whole-home repiping with modern PEX or copper when replacement is appropriate."
        },
        {
            question: "Can you handle plumbing during a bathroom or kitchen remodel?",
            answer: "Yes. Our plumbing team can handle rough-in and finish plumbing and coordinate with the other renovation trades."
        },
        {
            question: "How do I know whether I need repiping or a repair?",
            answer: "Recurring leaks, widespread corrosion, low pressure, deteriorating pipe material and repeated repairs can indicate a larger system issue. We inspect the accessible system and explain whether localized repair or repiping makes more sense."
        },
        {
            question: "Do you install tankless and heat pump water heaters?",
            answer: "Yes. We install multiple water-heating options and evaluate the home's fuel type, electrical capacity, available space and hot-water demand before recommending a system."
        }
    ];

    return (
        <>
            <div className="city-service-detail-page plumbing-north-bethesda-md">
                <div className="container">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <Link href="/">Home</Link><span>›</span>
                        <Link href="/services">Services</Link><span>›</span>
                        <Link href="/service/plumbing-services">Plumbing Services</Link><span>›</span>
                        North Bethesda, MD
                    </nav>

                    <div className="hero">
                        <div className="hero-location-tag">📍 Serving North Bethesda, MD & Montgomery County</div>
                        <h1>Licensed Plumbing Services in North Bethesda, MD</h1>
                        <div className="hero-meta">
                            <span className="badge key">🔧 Residential Plumbing Specialists</span>
                            <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                            <span className="badge">✓ MHIC Licensed & Insured</span>
                            <span className="badge">✓ Licensed Plumbers on Staff</span>
                            <span className="badge">✓ Permit & Inspection Coordination</span>
                            <span className="badge">✓ Free Plumbing Estimate</span>
                        </div>
                    </div>

                    <div className="highlight">
                        <p><strong>North Bethesda Plumbing & Permit Note:</strong> North Bethesda is within the WSSC Water service area. WSSC provides permits and inspections for plumbing and natural-gas piping and appliance installations, while Montgomery County inspections can depend on the broader project scope. We coordinate the applicable permit and inspection steps rather than leaving homeowners to navigate the process themselves.</p>
                    </div>

                    <div className="banner">
                        <div className="icon">🏡</div>
                        <div>
                            <h3>Plumbing Expertise for North Bethesda's Established Homes, Renovations & High-Value Residential Properties</h3>
                            <p>North Bethesda homeowners may encounter aging supply piping, water-heater replacement needs, basement drainage issues and complex plumbing requirements during kitchen and bathroom renovations. DMV General Contracting Group combines residential plumbing expertise with design-build coordination, so plumbing can be handled as a standalone project or integrated with remodeling, electrical, tile and other trades.</p>
                        </div>
                    </div>

                    <div className="intro-box">
                        Looking for a trusted plumber in North Bethesda, MD? DMV General Contracting Group provides comprehensive residential plumbing services throughout North Bethesda and Montgomery County — from water heater replacement and whole-home repiping to bathroom and kitchen plumbing, sump pumps, fixture installation, water filtration and remodel rough-ins. Our team focuses on code-conscious installation, clear project communication, protection of your home and complete testing before the job is closed.
                    </div>

                    <div className="trust-bar">
                        <div className="trust-item">Licensed & Insured</div>
                        <div className="trust-item">In-House Plumbing Team</div>
                        <div className="trust-item">Permit Coordination</div>
                        <div className="trust-item">Free Written Estimates</div>
                    </div>

                    <h2>Plumbing Services We Offer in North Bethesda, MD</h2>
                    <div className="service-grid">
                        <div className="service-card"><h3>🔥 Water Heater Services</h3><ul><li>Gas & electric tank replacement</li><li>Tankless water heaters</li><li>Heat pump water heaters</li><li>Expansion tanks</li><li>Water heater relocation</li></ul></div>
                        <div className="service-card"><h3>🔧 Repiping & Pipe Replacement</h3><ul><li>Whole-home PEX repiping</li><li>Copper repiping</li><li>Galvanized pipe replacement</li><li>Polybutylene replacement</li><li>Localized pipe repairs</li></ul></div>
                        <div className="service-card"><h3>🚿 Bathroom & Kitchen Plumbing</h3><ul><li>Bathroom rough-in & finish</li><li>Shower and tub valves</li><li>Toilet rough-in & relocation</li><li>Kitchen sink & faucet connections</li><li>Remodel plumbing coordination</li></ul></div>
                        <div className="service-card"><h3>💧 Drainage & Pump Systems</h3><ul><li>Sump pump installation</li><li>Battery backup pumps</li><li>Sewage ejector pumps</li><li>Floor drains</li><li>Basement bathroom plumbing</li></ul></div>
                        <div className="service-card"><h3>🛠️ Fixtures & Appliances</h3><ul><li>Toilets, faucets & showerheads</li><li>Garbage disposals</li><li>Dishwasher connections</li><li>Refrigerator ice-maker lines</li><li>Washer hookups & hose bibs</li></ul></div>
                        <div className="service-card"><h3>💎 Water Treatment</h3><ul><li>Whole-home filtration</li><li>Water softeners</li><li>Under-sink RO systems</li><li>Sediment filters</li><li>Pressure regulators</li></ul></div>
                    </div>

                    <h2>Whole-Home Repiping in North Bethesda, MD</h2>
                    <p>Older plumbing systems can develop recurring leaks, corrosion, restricted flow and poor water pressure. Our plumbers inspect accessible supply piping to identify the existing material and condition before recommending a solution. When replacement is appropriate, we can install modern PEX or copper supply piping and coordinate necessary wall access and restoration.</p>
                    <div className="highlight">
                        <p><strong>Polybutylene pipe warning:</strong> Gray plastic polybutylene supply piping can be found in some homes built during the late 20th century. If you see gray plastic water-supply pipes or experience repeated leaks, schedule an assessment before a localized failure becomes a larger water-damage event.</p>
                    </div>

                    <h2>Plumbing Warning Signs in North Bethesda Homes</h2>
                    <div className="warning-grid">
                        <div className="warning"><h3>🟤 Discolored Water</h3><p>Brown, orange or rusty water can indicate pipe corrosion or water-heater problems and deserves professional evaluation.</p></div>
                        <div className="warning"><h3>📉 Low Water Pressure</h3><p>Reduced pressure throughout the house can be associated with corrosion, restricted piping or pressure-control issues.</p></div>
                        <div className="warning"><h3>💧 Visible Corrosion</h3><p>Green staining, mineral deposits or rust on exposed piping may indicate deterioration or an active plumbing issue.</p></div>
                        <div className="warning"><h3>🌊 Recurring Leaks</h3><p>Repeated leaks in different areas can point to aging plumbing rather than one isolated fitting.</p></div>
                        <div className="warning"><h3>🔊 Banging Pipes</h3><p>Water hammer, rattling or unusual pipe noise may indicate pressure, support or flow-related problems.</p></div>
                        <div className="warning"><h3>💰 Unexplained Water Bills</h3><p>A sudden increase in water use can be a warning sign of a hidden leak that needs investigation.</p></div>
                    </div>

                    <h2>Water Heater Installation & Replacement in North Bethesda, MD</h2>
                    <p>Choosing the right water heater depends on household size, fuel availability, hot-water demand, installation location and long-term efficiency goals. We assess the existing setup and explain the practical options before installation.</p>
                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead><tr><th>Water Heater Type</th><th>Typical Use</th><th>Key Consideration</th></tr></thead>
                                <tbody>
                                    <tr><td>Gas Tank</td><td>Straightforward replacement</td><td>Existing gas and venting configuration</td></tr>
                                    <tr><td>Electric Tank</td><td>Homes without gas service</td><td>Electrical capacity and tank size</td></tr>
                                    <tr><td>Tankless</td><td>On-demand hot water</td><td>Flow demand, gas/electrical requirements and venting</td></tr>
                                    <tr><td>Heat Pump</td><td>High efficiency</td><td>Available space, electrical service and installation conditions</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h2>Plumbing for North Bethesda Bathroom & Kitchen Remodeling</h2>
                    <p>Remodeling often requires more than installing a new fixture. A bathroom or kitchen renovation may involve relocating supply lines, drains, vents, shower valves, toilets, sinks, appliances or specialty fixtures. Our design-build approach allows plumbing work to be coordinated with other trades so rough-in work happens at the correct stage and finished surfaces are protected.</p>

                    <h2>Basement Plumbing & Sump Pump Services in North Bethesda</h2>
                    <p>Finished basements often require reliable drainage and properly designed plumbing for bathrooms, laundry areas, utility rooms and wet bars. We install and replace sump pumps, battery backup systems, sewage ejector pumps and basement plumbing rough-ins based on the home's layout and drainage requirements.</p>

                    <h2>Permit & Inspection Coordination</h2>
                    <p>Plumbing permitting in the North Bethesda/Montgomery County service area can involve the Washington Suburban Sanitary Commission (WSSC), depending on the type and scope of plumbing work. Montgomery County guidance specifically identifies plumbing as an area where Montgomery County and WSSC permits and inspections apply. We coordinate the applicable permit and inspection steps for the projects we perform and keep documentation organized from application through final testing.</p>
                    <div className="highlight">
                        <p><strong>E-E-A-T focus:</strong> We do not treat permitting as an afterthought. Before work starts, the project scope is reviewed for the applicable permit/inspection requirements; during installation, the plumbing is tested and documented; and at completion, required inspections are coordinated so the homeowner has a clear record of the work.</p>
                    </div>

                    <h2>Why Choose DMV General Contracting Group for Plumbing in North Bethesda?</h2>
                    <div className="service-grid">
                        <div className="service-card"><h3>Licensed & Insured</h3><p>DMV General Contracting Group presents itself as a licensed and insured contractor, with licensed plumbers on staff for residential plumbing work.</p></div>
                        <div className="service-card"><h3>In-House Coordination</h3><p>Plumbing can be coordinated with electrical, tile, carpentry and remodeling crews instead of relying on disconnected project schedules.</p></div>
                        <div className="service-card"><h3>Clear Estimates</h3><p>We inspect accessible conditions, explain options and provide a written estimate before proceeding with the work.</p></div>
                        <div className="service-card"><h3>Code-Conscious Work</h3><p>Projects are planned around applicable Maryland, Montgomery County and WSSC requirements where they apply.</p></div>
                        <div className="service-card"><h3>Home Protection</h3><p>We protect cabinets, walls, flooring and finished surfaces during plumbing access and installation work.</p></div>
                        <div className="service-card"><h3>Final Testing</h3><p>New plumbing is tested for leaks, fixture operation, water flow, drainage and water-heater performance before completion.</p></div>
                    </div>

                    <h2>Our Plumbing Service Process in North Bethesda</h2>
                    <div className="steps">
                        <div className="step"><div className="step-num">1</div><div className="step-content"><h3>Free Plumbing Assessment</h3><p>We evaluate the existing pipes, fixtures, water heater, drainage and accessible plumbing areas, then discuss your goals and provide a written estimate.</p></div></div>
                        <div className="step"><div className="step-num">2</div><div className="step-content"><h3>Scope & Permit Review</h3><p>We determine the work required and coordinate applicable permit and inspection requirements for the North Bethesda/Montgomery County service area.</p></div></div>
                        <div className="step"><div className="step-num">3</div><div className="step-content"><h3>Professional Installation</h3><p>Our plumbing team completes the approved work while protecting finished areas and coordinating access with other trades when needed.</p></div></div>
                        <div className="step"><div className="step-num">4</div><div className="step-content"><h3>Inspection & Corrections</h3><p>Where inspections are required, we coordinate scheduling and respond to applicable inspector comments.</p></div></div>
                        <div className="step"><div className="step-num">5</div><div className="step-content"><h3>Testing & Homeowner Walkthrough</h3><p>We check connections for leaks, verify fixture and water-heater operation, confirm drainage and review the completed work with you.</p></div></div>
                    </div>

                    <h2>Serving North Bethesda, MD and Nearby Communities</h2>
                    <div className="areas-grid">
                        <span className="area-pill">North Bethesda</span>
                        <span className="area-pill">North North Bethesda</span>
                        <span className="area-pill">North Bethesda</span>
                        <span className="area-pill">Bethesda</span>
                        <span className="area-pill">Rockville</span>
                        <span className="area-pill">Cabin John</span>
                        <span className="area-pill">Chevy Chase</span>
                        <span className="area-pill">Garrett Park</span>
                        <span className="area-pill">North Bethesda</span>
                        <span className="area-pill">North Bethesda</span>
                        <span className="area-pill">Wheaton</span>
                    </div>

                    <h2>Frequently Asked Questions — Plumbing Services in North Bethesda, MD</h2>
                    <Accordion defaultActiveKey="0" flush>
                        {faqData.map((faq, index) => (
                            <Accordion.Item eventKey={index.toString()} key={index}>
                                <Accordion.Header>{faq.question}</Accordion.Header>
                                <Accordion.Body>
                                    <div className="blog-html-content" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>

                    <div className="cta-banner">
                        <h2>Get a Free Plumbing Assessment for Your North Bethesda Home</h2>
                        <p>Tell us what is happening with your plumbing system, water heater, pipes, drainage or remodel. We'll assess the project, explain your options and provide a clear estimate.</p>
                        <Link href="/contact-us" className="cta-btn">Schedule Free Plumbing Assessment →</Link>
                        <Link href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</Link>
                    </div>

                    <div className="internal-links">
                        <h2>Explore More DMV General Contracting Group Services</h2>
                        <ul>
                            <li><Link href="/service/electrical-services">Electrical Services</Link></li>
                            <li><Link href="/service/plumbing-services">Plumbing Services</Link></li>
                            <li><Link href="/service/kitchen-remodeling">Kitchen Remodeling</Link></li>
                            <li><Link href="/service/bathroom-remodeling">Bathroom Remodeling</Link></li>
                            <li><Link href="/service/basement-remodeling">Basement Remodeling</Link></li>
                            <li><Link href="/service/home-additions">Home Additions</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
};

export default NorthBethesdaMD;
