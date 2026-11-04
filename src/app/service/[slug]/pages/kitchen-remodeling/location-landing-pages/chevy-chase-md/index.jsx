'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const ChevyChaseMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "How much does a kitchen remodel cost in Chevy Chase, MD?",
            answer: "Kitchen remodeling in Chevy Chase, MD typically costs between $50,000 and $200,000+ depending on home size, scope, and finish level. A mid-range remodel runs $60,000–$100,000. A full luxury renovation with custom cabinetry, premium appliances, and natural stone surfaces ranges from $120,000 to $200,000+. Chevy Chase's high property values mean kitchen renovations here typically involve premium materials and finishes that align with the quality of the home. DMV-GC Group provides free in-home consultations with detailed estimates."
        },
        {
            question: "Does DMV-GC Group work in Chevy Chase Village and the special taxing areas?",
            answer: "Yes. Chevy Chase is made up of several distinct incorporated villages and special taxing areas — including Chevy Chase Village, Section 3, Section 5, Martin's Additions, and others — each with its own local government and, in some cases, additional permit or design review requirements. DMV-GC Group is experienced working across these jurisdictions and identifies the specific requirements that apply to each property before beginning design work."
        },
        {
            question: "Can DMV-GC Group renovate a kitchen in a historic Chevy Chase home?",
            answer: "Yes. Many homes in Chevy Chase — particularly in Chevy Chase Village and Section 3 — were built in the early 1900s and feature Colonial Revival, Tudor, and Craftsman architecture. DMV-GC Group has experience renovating kitchens in these homes, balancing modern functionality with the architectural character that defines Chevy Chase's historic neighborhoods. We assess original structural elements, plaster, and older systems as part of every renovation in these homes."
        },
        {
            question: "Does DMV-GC Group handle permits for kitchen remodeling in Chevy Chase?",
            answer: "Yes. DMV-GC Group's in-house permit team handles all required permits for kitchen remodels in Chevy Chase. Because several Chevy Chase communities are independently incorporated villages with their own building codes in addition to Montgomery County requirements, we determine the specific permit and design review process that applies to each property and manage the entire process from application through final inspection."
        },
        {
            question: "What is the ROI of a kitchen remodel in Chevy Chase, MD?",
            answer: "A professionally renovated kitchen in Chevy Chase typically returns 70–80% of its cost in immediate property value. Given Chevy Chase's position as one of the highest-value real estate markets in Montgomery County — with median home values frequently exceeding $1.5 million — an updated kitchen is often considered essential rather than optional by buyers in this market. Homes with dated kitchens in Chevy Chase often face significant price reductions or extended time on market relative to comparable renovated properties."
        },
        {
            question: "Is DMV-GC Group licensed for kitchen remodeling in Chevy Chase, MD?",
            answer: "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home renovation work in Chevy Chase and Montgomery County. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every kitchen remodeling project completed in Chevy Chase."
        }
    ];

    return (
        <div className="city-service-detail-page kitchen-chevy-chase-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/kitchen-remodeling">Kitchen Remodeling</Link><span>›</span>
                    Chevy Chase, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Chevy Chase, MD</div>
                    <h1>Kitchen Remodeling Contractor in Chevy Chase, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ DLCP Licensed & Insured</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ 1-Year Warranty</span>
                        <span className="badge">✓ Free In-Home Consultation</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a kitchen remodeling contractor who understands <strong>Chevy Chase's premium real estate market</strong>? Chevy Chase is one of the most prestigious and historically significant communities in Montgomery County — a collection of distinct villages including Chevy Chase Village, Section 3, Section 5, and Martin's Additions. DMV-GC Group's licensed design-build team brings the expertise, attention to detail, and project management this market demands — managing your kitchen renovation from design through every applicable jurisdiction's permit process to final finishes, all under one contract.
                </div>

                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏗️</div>
                        <strong>Design-Build In-House</strong>
                        <span>Architects, engineers & builders — one team</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>Permits Handled</strong>
                        <span>Chevy Chase villages & Montgomery County</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9-Star Rated</strong>
                        <span>97+ verified homeowner reviews</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🛡️</div>
                        <strong>MHIC Licensed</strong>
                        <span>Bonded, insured, 1-year warranty</span>
                    </div>
                </div>

                <h2>Kitchen Remodeling Services We Offer in Chevy Chase, MD</h2>
                <p>
                    Chevy Chase homeowners expect a level of craftsmanship and design sophistication that matches the quality of their homes and neighborhoods. DMV-GC Group delivers exactly that — from full luxury kitchen renovations in grand estate homes to thoughtful historic renovations that preserve the character of Chevy Chase's early 20th-century housing stock.
                </p>

                <div className="service-grid">
                    <div className="service-item">Luxury Kitchen Renovation</div>
                    <div className="service-item">Historic Home Kitchen Remodel</div>
                    <div className="service-item">Open-Concept Kitchen Conversion</div>
                    <div className="service-item">Custom Cabinet Design & Installation</div>
                    <div className="service-item">Kitchen Addition / Rear Bump-Out</div>
                    <div className="service-item">Premium Countertop Installation (Marble, Quartzite, Quartz)</div>
                    <div className="service-item">Kitchen Island & Butler's Pantry Design</div>
                    <div className="service-item">Kitchen Layout Redesign & Space Planning</div>
                    <div className="service-item">High-End Appliance Integration (Sub-Zero, Wolf, Miele)</div>
                    <div className="service-item">Kitchen Electrical & Designer Lighting</div>
                    <div className="service-item">Plumbing Relocation & Premium Fixtures</div>
                    <div className="service-item">Multi-Jurisdiction Permit Processing</div>
                </div>

                <div className="author-box">
                    <div className="author-avatar">🏠</div>
                    <div className="author-info">
                        <h4>About DMV-GC Group — Chevy Chase's Licensed Kitchen Remodeling Contractor</h4>
                        <p>DMV-GC Group is based in North Bethesda — minutes from Chevy Chase. Our team has completed kitchen renovations throughout Chevy Chase's distinct villages and is experienced navigating the additional local requirements that apply in incorporated communities like Chevy Chase Village. We understand the architectural character that defines Chevy Chase's historic neighborhoods and design renovations that honor it while delivering the function and finish quality this market demands.</p>
                        <div className="author-creds">
                            <span className="cred">MHIC Licensed</span>
                            <span className="cred">DLCP Licensed</span>
                            <span className="cred">Fully Insured</span>
                            <span className="cred">Bonded</span>
                            <span className="cred">4.9★ Rated</span>
                            <span className="cred">1-Year Warranty</span>
                        </div>
                    </div>
                </div>

                <h2>Renovating in Chevy Chase's Distinct Villages</h2>
                <div className="village-box">
                    <h3>🏛️ Chevy Chase's Incorporated Villages — Key Points</h3>
                    <ul>
                        <li><strong>Chevy Chase Village</strong> — one of the oldest and most architecturally distinguished areas. Some exterior modifications may require additional village-level review.</li>
                        <li><strong>Town of Chevy Chase (Section 3, Section 4, etc.)</strong> — a separately incorporated municipality with its own local government.</li>
                        <li><strong>Martin's Additions</strong> — a small incorporated village with its own council, located between Chevy Chase Village and Bethesda.</li>
                        <li><strong>Section 5 and other unincorporated sections</strong> — fall under standard Montgomery County jurisdiction.</li>
                        <li>DMV-GC Group identifies which jurisdiction applies to your specific Chevy Chase property and manages <strong>all required permits and reviews</strong>.</li>
                    </ul>
                </div>

                <h2>Kitchen Remodeling for Chevy Chase's Historic Architecture</h2>
                <p>
                    Chevy Chase was developed beginning in the 1890s. Much of the original housing stock reflects the architectural styles popular during that era. <strong>Colonial Revival homes</strong> are among the most common, typically featuring symmetrical facades and formal floor plans. <strong>Tudor Revival and Craftsman homes</strong> often feature substantial original millwork and distinctive window proportions. Kitchen renovations in these homes benefit from custom cabinetry that echoes the home's original woodwork.
                </p>

                <div className="highlight">
                    <p>🏡 <strong>Chevy Chase Market Insight:</strong> Median home values in Chevy Chase frequently exceed $1.5 million. A professionally executed kitchen renovation typically returns 70–80% of its cost in immediate property value — and is one of the most impactful investments a Chevy Chase homeowner can make.</p>
                </div>

                <h2>Serving All Chevy Chase, MD Neighborhoods</h2>
                <div className="neighborhood-grid">
                    <div className="neighborhood-card">
                        <h3>Chevy Chase Village</h3>
                        <p>The original and most architecturally significant section. Renovations here require the most careful attention to period-appropriate design.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Section 3 & 4</h3>
                        <p>A separately incorporated municipality with a mix of historic and mid-century homes. Kitchen renovations range from preservation-minded to full modern gut renovations.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Martin's Additions</h3>
                        <p>A small, tight-knit incorporated village. Homes range from early 1900s cottages to larger rebuilds — renovation approaches vary significantly.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Connecticut Avenue Corridor</h3>
                        <p>Larger homes with significant lot sizes that accommodate substantial kitchen additions and bump-outs as part of a broader renovation strategy.</p>
                    </div>
                </div>

                <h2>Kitchen Remodel Cost in Chevy Chase, MD</h2>
                <div className="table-responsive">
                    <div className="table-holder">
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
                                    <td>Mid-Range Kitchen Remodel</td>
                                    <td>$60,000 – $100,000</td>
                                    <td>New cabinets, premium countertops, appliances, lighting, finishes</td>
                                </tr>
                                <tr>
                                    <td>Full Gut Renovation</td>
                                    <td>$100,000 – $150,000</td>
                                    <td>Complete demo, layout redesign, custom cabinetry, premium finishes, all trade work</td>
                                </tr>
                                <tr>
                                    <td>Historic Home Renovation</td>
                                    <td>$95,000 – $145,000</td>
                                    <td>Period-appropriate cabinetry & millwork, system upgrades, custom finishes</td>
                                </tr>
                                <tr>
                                    <td>Kitchen Addition / Bump-Out</td>
                                    <td>$130,000 – $190,000+</td>
                                    <td>New foundation, framing integration, full build-out, exterior finish matching</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="cta-banner">
                    <h2>Get a Free Kitchen Remodeling Estimate in Chevy Chase</h2>
                    <p>We'll visit your Chevy Chase home, assess your kitchen's potential, and provide a detailed itemized estimate.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free In-Home Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Our Kitchen Remodeling Process in Chevy Chase</h2>
                <div className="steps">
                    {[
                        { num: 1, title: "Free In-Home Consultation", desc: "We visit your home, assess the architectural style, and identify which village or jurisdiction applies." },
                        { num: 2, title: "Design Development", desc: "Our architects develop a design tailored to your home's character — whether period-appropriate or contemporary." },
                        { num: 3, title: "Multi-Jurisdiction Permit Review", desc: "We determine which permitting and design review processes apply and file all required applications." },
                        { num: 4, title: "Material Selection", desc: "We guide you through premium material selections — custom cabinetry, natural stone, and high-end appliances." },
                        { num: 5, title: "Construction", desc: "Our licensed in-house crews handle all demolition, structural work, and final finishes." },
                        { num: 6, title: "Final Walkthrough", desc: "We manage all required final inspections and activate your 1-year workmanship warranty." }
                    ].map(step => (
                        <div className="step" key={step.num}>
                            <div className="step-num">{step.num}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h2>What Chevy Chase Area Homeowners Say</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our home is in Chevy Chase Village and we were concerned about the additional review requirements. DMV-GC Group handled it seamlessly."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Chevy Chase Village, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our 1920s Colonial Revival had a tiny original kitchen. DMV-GC Group reconfigured the space into a stunning, expanded kitchen. Exceptional craftsmanship."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Section 3, Chevy Chase MD</span></div>
                    </div>
                </div>

                <h2>Frequently Asked Questions — Kitchen Remodeling in Chevy Chase, MD</h2>
                <Accordion className="faq-list">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="cta-banner">
                    <h2>Ready to Remodel Your Chevy Chase Kitchen?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation online.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Kitchen Estimate in Chevy Chase →</Link>
                </div>
            </div>
        </div>
    );
};

export default ChevyChaseMD;
