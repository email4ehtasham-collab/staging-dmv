'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const WashingtonDC = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "How much does a kitchen remodel cost in Washington, DC?",
            answer: "Kitchen remodeling in DC typically costs $20,000–$180,000+ depending on home type, scope, and finishes. A galley kitchen refresh starts around $20,000–$35,000. A mid-range renovation runs $40,000–$75,000. A full gut renovation costs $80,000–$130,000. Open-concept conversions run $70,000–$130,000, and a rear addition or pop-back can range from $100,000–$180,000+. Condo kitchen renovations run $28,000–$60,000. DMV-GC Group provides free in-home consultations with detailed estimates specific to your property."
        },
        {
            question: "Is DMV-GC Group licensed to do kitchen remodeling in Washington, DC?",
            answer: "Yes. DMV-GC Group holds a license from the DC Department of Licensing and Consumer Protection (DLCP) as a Home Improvement Contractor — the license required to legally perform residential renovation work in Washington, DC. We also hold a Maryland MHIC license. We are fully bonded and insured, and provide a 1-year workmanship warranty on every kitchen remodeling project completed in DC."
        },
        {
            question: "Can DMV-GC Group add a rear addition or pop-back to expand my DC rowhouse kitchen?",
            answer: "Yes. Rear additions — often called 'pop-backs' — are one of the most common ways to expand a kitchen in a DC rowhouse. DMV-GC Group's in-house architects design additions that maximize usable kitchen space within DC's zoning regulations, including lot occupancy and rear yard setback requirements. We handle the full permit process through the DC Department of Buildings (DOB), including any required zoning review and HPRB review if your property is in a historic district."
        },
        {
            question: "Does DMV-GC Group handle DC permits for kitchen remodeling?",
            answer: "Yes. DMV-GC Group's in-house permit team handles all required permits through the DC Department of Buildings (DOB) for kitchen remodeling projects — including building, electrical, and plumbing permits. For projects involving additions or structural changes, we also manage any required zoning review and HPRB submissions for historic districts. DC homeowners never need to navigate the permit process themselves."
        },
        {
            question: "Can DMV-GC Group remodel a galley kitchen in a DC rowhouse?",
            answer: "Yes. Galley kitchen remodels are one of the most common projects we complete in DC, where the vast majority of homes are rowhouses with narrow galley-style kitchens — often only 8 to 10 feet wide. We specialize in maximizing these spaces through smart cabinet configurations, opening walls into adjacent dining rooms where structurally feasible (accounting for shared party walls), and designing layouts that make the most of every square foot."
        },
        {
            question: "How long does a kitchen remodel take in Washington, DC?",
            answer: "Most kitchen renovations in DC take 6–12 weeks from construction start to completion. A galley kitchen refresh can be done in 3–5 weeks. A full gut renovation takes 9–13 weeks. A rear addition or pop-back typically takes 12–18 weeks total. DC permit processing through DOB typically adds 4–8 weeks before construction begins — longer for projects requiring HPRB or zoning review. DMV-GC Group factors realistic timelines into every project plan from the start."
        }
    ];

    return (
        <div className="city-service-detail-page kitchen-washington-dc">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/kitchen-remodeling">Kitchen Remodeling</Link><span>›</span>
                    Washington, DC
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Washington, DC</div>
                    <h1>Kitchen Remodeling Contractor in Washington, DC</h1>
                    <div className="hero-meta">
                        <span className="badge red">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ DLCP Licensed & Insured</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ 1-Year Warranty</span>
                        <span className="badge">✓ Free In-Home Consultation</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="dlcp-banner">
                    <div className="icon">🏛️</div>
                    <div>
                        <h3>DLCP-Licensed Home Improvement Contractor for Washington, DC</h3>
                        <p>DMV-GC Group holds a license issued by the DC Department of Licensing and Consumer Protection (DLCP) — the license required to legally perform residential renovation work in Washington, DC. Many contractors who advertise in DC only hold Maryland licenses and are not properly licensed for DC work. We hold both.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a <strong>kitchen remodeling contractor in Washington, DC</strong>? DC's housing stock is dominated by rowhouses — narrow, deep homes with distinctive galley kitchens, rear additions ("pop-backs"), and a layout pattern that's consistent from Capitol Hill to Cleveland Park to Petworth, even as architectural styles vary. DMV-GC Group's DLCP-licensed design-build team specializes in exactly this kind of renovation — managing DC permit requirements through the Department of Buildings, zoning considerations for additions, and the full kitchen renovation from design through final inspection, all under one contract.
                </div>

                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏛️</div>
                        <strong>DLCP Licensed</strong>
                        <span>Properly licensed for DC renovation work</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>DOB Permits Handled</strong>
                        <span>DC Department of Buildings — fully managed</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9-Star Rated</strong>
                        <span>97+ verified homeowner reviews</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🛡️</div>
                        <strong>Fully Insured</strong>
                        <span>Bonded, insured, 1-year warranty</span>
                    </div>
                </div>

                <h2>Kitchen Remodeling Services We Offer in Washington, DC</h2>
                <p>
                    DC's housing stock is overwhelmingly rowhouses — narrow, deep homes built between the late 1800s and early 1900s, with a consistent layout pattern that places the kitchen at the rear of the home. DMV-GC Group's DLCP-licensed team specializes in renovating these spaces, along with condo and apartment kitchen renovations throughout the District.
                </p>

                <div className="service-grid">
                    <div className="service-item">Rowhouse Kitchen Renovation</div>
                    <div className="service-item">Rear Addition / Pop-Back Construction</div>
                    <div className="service-item">Galley Kitchen Expansion & Redesign</div>
                    <div className="service-item">Open-Concept Kitchen Conversion</div>
                    <div className="service-item">Condo Kitchen Renovation</div>
                    <div className="service-item">Custom Cabinet Design & Installation</div>
                    <div className="service-item">Countertop Replacement (Quartz, Granite, Marble)</div>
                    <div className="service-item">Kitchen Layout Redesign & Space Planning</div>
                    <div className="service-item">Backsplash Tile Design & Installation</div>
                    <div className="service-item">Kitchen Electrical & Lighting Upgrades</div>
                    <div className="service-item">Plumbing Relocation & Fixture Replacement</div>
                    <div className="service-item">DC Department of Buildings Permit Processing</div>
                </div>

                <div className="author-box">
                    <div className="author-avatar">🏠</div>
                    <div className="author-info">
                        <h4>About DMV-GC Group — DC's DLCP-Licensed Kitchen Remodeling Contractor</h4>
                        <p>DMV-GC Group holds a license from the DC Department of Licensing and Consumer Protection (DLCP) as a Home Improvement Contractor, in addition to our Maryland MHIC license. Our team has experience renovating kitchens in DC rowhouses across multiple neighborhoods, and we understand the DC Department of Buildings permit process — including zoning considerations for rear additions, which differ significantly from Maryland's permit requirements. We carry full general liability insurance and back every project with a 1-year workmanship warranty.</p>
                        <div className="author-creds">
                            <span className="cred">DLCP Licensed</span>
                            <span className="cred">MHIC Licensed</span>
                            <span className="cred">Fully Insured</span>
                            <span className="cred">Bonded</span>
                            <span className="cred">4.9★ Rated</span>
                            <span className="cred">1-Year Warranty</span>
                        </div>
                    </div>
                </div>

                <h2>Kitchen Remodeling for DC's Rowhouse Housing Stock</h2>
                <p>
                    More than any other jurisdiction in the DMV area, Washington DC's residential character is defined by the rowhouse — narrow, deep homes typically 14-20 feet wide, built shoulder-to-shoulder in long blocks across nearly every DC neighborhood. Understanding rowhouse construction is essential to a successful kitchen renovation in DC, and it's where DMV-GC Group's experience makes a real difference.
                </p>

                <div className="rowhouse-box">
                    <h3>🏠 What Makes DC Rowhouse Kitchens Different</h3>
                    <ul>
                        <li><strong>Narrow galley layouts</strong> — most original rowhouse kitchens are 8-10 feet wide, located at the rear of the home on the main level</li>
                        <li><strong>Shared party walls</strong> — rowhouses share structural walls with neighboring homes, which limits where walls can be removed without engineering review</li>
                        <li><strong>Rear additions ("pop-backs")</strong> — extending the kitchen into the rear yard is one of the most common and effective ways to gain space, subject to DC zoning lot occupancy and setback rules</li>
                        <li><strong>Basement-level kitchens</strong> — many DC rowhouses have a secondary or English basement kitchen, often part of a separate rental unit, with its own renovation considerations</li>
                        <li><strong>Older systems</strong> — knob-and-tube wiring, galvanized plumbing, and balloon framing are common in DC's century-old rowhouse stock and often need attention during renovation</li>
                        <li><strong>Historic district considerations</strong> — many DC neighborhoods (Capitol Hill, Georgetown, Dupont Circle, and others) are historic districts where exterior changes require HPRB (Historic Preservation Review Board) review</li>
                    </ul>
                </div>

                <h2>Rear Additions & Pop-Backs — Expanding Your DC Kitchen</h2>
                <p>
                    For DC rowhouse owners whose kitchens feel cramped, a rear addition — commonly called a "pop-back" — is one of the most popular and effective renovation strategies. By extending the rear of the home into the existing yard, homeowners can dramatically expand the kitchen footprint, often adding an eat-in area, larger island, or improved flow to an adjacent family room.
                </p>
                <p>
                    Pop-backs are governed by DC zoning regulations — primarily <strong>lot occupancy limits</strong> (the maximum percentage of a lot that can be covered by structure) and <strong>rear yard setback requirements</strong> (minimum distance from the rear property line). These vary by zone designation, and whether an addition requires zoning relief (a variance) depends on the specific lot's existing conditions and the proposed addition's footprint.
                </p>
                <p>
                    DMV-GC Group's in-house architects assess each rowhouse's specific zoning situation before designing an addition — determining the maximum feasible footprint as-of-right, and advising on the process and timeline if zoning relief would be required for a larger addition. We then manage the full permit process through the DC Department of Buildings.
                </p>

                <div className="note-box">
                    ⚠️ <strong>Historic District Note:</strong> If your rowhouse is in one of DC's many historic districts — including Capitol Hill, Georgetown, Dupont Circle, Logan Circle, and others — a rear addition visible from a public alley or adjacent properties may require review by the Historic Preservation Review Board (HPRB) in addition to standard DOB permits. DMV-GC Group determines whether HPRB review applies to your specific property and manages that process as part of the overall permit timeline.
                </div>

                <h2>Why Washington DC Homeowners Choose DMV-GC Group</h2>
                <p>
                    Washington DC's real estate market is one of the most active and competitive in the country — and kitchen renovations are consistently among the highest-impact investments DC homeowners can make. Whether it's a Capitol Hill rowhouse being prepared for sale, a Cleveland Park family home being renovated for long-term living, or a Petworth rowhouse undergoing a full modernization, an updated kitchen is frequently the single most important room for both daily life and resale value.
                </p>

                <div className="highlight-box">
                    <p>🏡 <strong>Washington DC Market Insight:</strong> DC rowhouse values vary enormously by neighborhood — from $500,000 in parts of Petworth and Brookland to $1.5 million+ in Capitol Hill, Georgetown, and Cleveland Park. Across this range, a professionally renovated kitchen typically returns 70–85% of its cost in immediate property value — among the highest renovation ROI of any room, reflecting how central kitchen quality is to DC buyers' decision-making.</p>
                </div>

                <h2>Serving Washington DC Neighborhoods for Kitchen Remodeling</h2>
                <div className="neighborhood-grid">
                    <div className="neighborhood-card">
                        <h3>Capitol Hill</h3>
                        <p>One of DC's largest historic districts, with rowhouses dating to the 1880s-1900s. Kitchen renovations here often involve HPRB review for rear additions, alongside galley kitchen expansions and full modernizations within the existing footprint.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Georgetown</h3>
                        <p>DC's oldest neighborhood, with strict historic preservation requirements. Kitchen renovations require careful navigation of HPRB review, particularly for any exterior-visible changes or rear additions.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Cleveland Park / Woodley Park</h3>
                        <p>Mix of larger rowhouses and detached homes. These properties often have more flexibility for kitchen additions and open-concept conversions than smaller rowhouse blocks elsewhere in the city.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Petworth / Park View</h3>
                        <p>Classic DC rowhouse neighborhoods with strong renovation activity. Galley kitchen expansions and rear pop-backs are extremely common here, often as part of broader full-home renovations.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Dupont Circle / Logan Circle</h3>
                        <p>Dense historic rowhouse and condo neighborhoods. Kitchen renovations range from condo unit remodels to rowhouse galley expansions, with historic district review applying to many properties.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Brookland / Trinidad / NE DC</h3>
                        <p>Growing renovation markets with classic rowhouse stock. Full kitchen modernizations and rear additions are increasingly common as these neighborhoods continue to see investment.</p>
                    </div>
                </div>

                <h2>Kitchen Remodel Cost in Washington, DC</h2>
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
                            <td>Galley Kitchen Refresh</td>
                            <td>$20,000 – $35,000</td>
                            <td>Cabinet painting/refacing, new countertops, backsplash, hardware, fixtures, paint</td>
                        </tr>
                        <tr>
                            <td>Mid-Range Galley Renovation</td>
                            <td>$40,000 – $75,000</td>
                            <td>New cabinets, quartz countertops, appliances, lighting, layout improvements</td>
                        </tr>
                        <tr>
                            <td>Full Gut Renovation</td>
                            <td>$80,000 – $130,000</td>
                            <td>Complete demo, layout redesign, custom cabinetry, premium finishes, all trade work</td>
                        </tr>
                        <tr>
                            <td>Open-Concept Conversion + Remodel</td>
                            <td>$70,000 – $130,000</td>
                            <td>Party wall / structural assessment, opening to dining room, full remodel, flooring blend</td>
                        </tr>
                        <tr>
                            <td>Rear Addition / Pop-Back</td>
                            <td>$100,000 – $180,000+</td>
                            <td>New foundation, framing, full kitchen build-out, zoning & DOB permits, exterior finish</td>
                        </tr>
                        <tr>
                            <td>Condo Kitchen Renovation</td>
                            <td>$28,000 – $60,000</td>
                            <td>New cabinets, countertops, appliances, lighting, building coordination</td>
                        </tr>
                    </tbody>
                </table>

                <div className="tip-box">
                    💡 <strong>DC Permit Timing Note:</strong> Permit timelines in DC are an important factor in project planning. Standard kitchen renovation permits through DOB typically take 4-6 weeks. Projects requiring HPRB review (historic districts) or zoning review (additions requiring variances) can add significant additional time — sometimes 8-12 weeks or more. DMV-GC Group factors realistic permit timelines into every DC project schedule from the start.
                </div>

                <h2>Frequently Asked Questions — Kitchen Remodeling in Washington, DC</h2>
                <Accordion defaultActiveKey="0" className="faq-accordion">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index}>
                            <Accordion.Header>{item.question}</Accordion.Header>
                            <Accordion.Body>{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="cta-banner">
                    <h2>Ready to Remodel Your Washington DC Kitchen?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation online. DLCP-licensed and available 7 days a week throughout Washington, DC.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Kitchen Estimate in DC →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default WashingtonDC;
