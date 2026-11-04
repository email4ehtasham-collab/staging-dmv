'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const GaithersburgMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "How much does a kitchen remodel cost in Gaithersburg, MD?",
            answer: "Kitchen remodeling in Gaithersburg, MD typically costs between $25,000 and $140,000 depending on scope, home type, and finishes. A cosmetic refresh starts around $15,000–$28,000. A mid-range remodel with new cabinets and countertops runs $32,000–$65,000. A full gut renovation with custom cabinetry costs $70,000–$140,000. Gaithersburg's diverse housing stock — from Kentlands townhomes to larger single-family homes in Lakelands — means costs vary significantly by property type. DMV-GC Group provides free in-home consultations with detailed, itemized estimates."
        },
        {
            question: "Does DMV-GC Group work with HOAs in Gaithersburg?",
            answer: "Yes. Many Gaithersburg communities — including Kentlands, Lakelands, and Rio — have active HOAs with specific renovation guidelines covering exterior changes, noise restrictions, contractor parking, and building access. DMV-GC Group is experienced working within HOA-governed communities throughout Gaithersburg. We provide HOA documentation support, coordinate with property management, and schedule work to comply with community noise and access restrictions."
        },
        {
            question: "Do I need a City of Gaithersburg or Montgomery County permit for my kitchen remodel?",
            answer: "It depends on your property's exact location. Gaithersburg is an incorporated city — properties within city limits require City of Gaithersburg permits. However, many properties with 'Gaithersburg' mailing addresses are actually in unincorporated Montgomery County and require county permits instead. DMV-GC Group identifies the correct jurisdiction for your specific property before filing — preventing the costly delays that come from filing with the wrong authority."
        },
        {
            question: "Can DMV-GC Group remodel a townhome kitchen in Kentlands or Lakelands?",
            answer: "Yes. Townhome kitchen remodels in Kentlands and Lakelands are one of our most common project types in Gaithersburg. We handle all Kentlands Citizens Assembly and Lakelands HOA coordination — including pre-approval documentation, insurance certificates, noise scheduling, and contractor registration. Our design team specializes in maximizing townhome kitchen spaces through smart cabinet configurations, island additions where dimensions allow, and finish upgrades that make a dramatic visual impact within the existing footprint."
        },
        {
            question: "How long does a kitchen remodel take in Gaithersburg, MD?",
            answer: "Most kitchen renovations in Gaithersburg take 6–11 weeks from construction start to completion. Add 3–5 weeks for permit processing (City of Gaithersburg or Montgomery County depending on location) and, for HOA communities, 2–4 weeks for HOA pre-approval before construction begins. DMV-GC Group manages the complete timeline in-house and coordinates HOA and permit timelines simultaneously to minimize overall project duration."
        },
        {
            question: "Is DMV-GC Group licensed for kitchen remodeling in Gaithersburg, MD?",
            answer: "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home renovation work in Gaithersburg. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every kitchen remodeling project completed in Gaithersburg."
        }
    ];

    return (
        <div className="city-service-detail-page kitchen-gaithersburg-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/kitchen-remodeling">Kitchen Remodeling</Link><span>›</span>
                    Gaithersburg, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Gaithersburg, MD</div>
                    <h1>Kitchen Remodeling Contractor in Gaithersburg, MD</h1>
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
                    Looking for a trusted <strong>kitchen remodeling contractor in Gaithersburg, MD</strong>? DMV-GC Group transforms kitchens throughout Gaithersburg — from the planned communities of Kentlands and Lakelands to the single-family homes in Washington Grove and the newer builds near Crown and Rio. As a fully licensed design-build contractor, our in-house architects, engineers, permit specialists, and construction crews manage your entire kitchen renovation under one contract — handling HOA documentation, City of Gaithersburg permits, and every trade from demo to final finishes.
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
                        <span>City of Gaithersburg & Montgomery County</span>
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

                <h2>Kitchen Remodeling Services We Offer in Gaithersburg, MD</h2>
                <p>
                    Gaithersburg is one of the most diverse housing markets in Montgomery County — a city where planned new-urbanist communities like Kentlands sit alongside older established neighborhoods and newer master-planned developments near Rio. DMV-GC Group's licensed team is equipped to handle all of them.
                </p>

                <div className="service-grid">
                    <div className="service-item">Full Kitchen Gut Renovation</div>
                    <div className="service-item">Townhome Kitchen Remodel & Upgrade</div>
                    <div className="service-item">Open-Concept Kitchen Conversion</div>
                    <div className="service-item">HOA-Compliant Kitchen Renovation</div>
                    <div className="service-item">Custom Cabinet Design & Installation</div>
                    <div className="service-item">Countertop Replacement (Quartz, Granite, Marble)</div>
                    <div className="service-item">Kitchen Island & Breakfast Bar Addition</div>
                    <div className="service-item">Kitchen Layout Redesign & Space Planning</div>
                    <div className="service-item">Backsplash Tile Design & Installation</div>
                    <div className="service-item">Kitchen Electrical & Lighting Upgrades</div>
                    <div className="service-item">Plumbing Relocation & Fixture Replacement</div>
                    <div className="service-item">City of Gaithersburg Permit Processing</div>
                </div>

                <div className="author-box">
                    <div className="author-avatar">🏠</div>
                    <div className="author-info">
                        <h4>About DMV-GC Group — Gaithersburg's Licensed Kitchen Remodeling Contractor</h4>
                        <p>DMV-GC Group is based in North Bethesda — less than 10 miles from Gaithersburg's city center. Our licensed team has completed kitchen renovations throughout Gaithersburg and is familiar with the permitting requirements of both the City of Gaithersburg and unincorporated Montgomery County. We hold a Maryland MHIC license, carry full general liability insurance, and back every project with a 1-year workmanship warranty.</p>
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

                <h2>Kitchen Remodeling for Gaithersburg's Diverse Home Types</h2>
                <div className="home-type-grid">
                    <div className="home-type-box">
                        <div className="icon">🏘️</div>
                        <h3>Kentlands & Lakelands Townhomes</h3>
                        <p>Townhome kitchens here are typically L-shaped or galley layouts — renovations focus on cabinet upgrades, countertops, island additions, and finish packages that respect HOA guidelines.</p>
                    </div>
                    <div className="home-type-box">
                        <div className="icon">🏡</div>
                        <h3>Single-Family Colonials</h3>
                        <p>Larger colonial homes in established neighborhoods offer full gut renovation opportunities — complete layout redesigns with custom cabinetry and premium countertops.</p>
                    </div>
                    <div className="home-type-box">
                        <div className="icon">🏠</div>
                        <h3>Split-Levels & Ranches</h3>
                        <p>Older neighborhoods like Flower Hill contain many split-levels and ranches. Open-concept conversions and layout expansions deliver the highest ROI in these home types.</p>
                    </div>
                    <div className="home-type-box">
                        <div className="icon">🏙️</div>
                        <h3>Crown & Rio Newer Builds</h3>
                        <p>Newer construction often has open-plan kitchens. Renovations here focus on upgrading builder-grade finishes — custom cabinetry and high-end appliance packages.</p>
                    </div>
                </div>

                <h2>HOA Kitchen Renovations in Gaithersburg's Planned Communities</h2>
                <div className="hoa-box">
                    <h3>🏘️ What Gaithersburg HOA Renovations Require — Key Points</h3>
                    <ul>
                        <li><strong>Pre-approval may be required</strong> for renovations that affect exterior elements (vent placement, etc.)</li>
                        <li><strong>Contractor insurance certificates</strong> must be submitted to the HOA property manager</li>
                        <li><strong>Noise and work hour restrictions</strong> are common in Kentlands and Lakelands</li>
                        <li><strong>Dumpster and material staging</strong> rules apply in many Gaithersburg planned communities</li>
                        <li>DMV-GC Group handles <strong>all HOA documentation</strong> as a standard part of every project</li>
                    </ul>
                </div>

                <div className="note">
                    ⚠️ <strong>City vs County Permits:</strong> many properties within city limits require permits from the City of Gaithersburg, not Montgomery County. DMV-GC Group identifies the correct jurisdiction for every Gaithersburg property.
                </div>

                <h2>Why Gaithersburg Homeowners Are Investing in Kitchen Remodeling</h2>
                <div className="highlight">
                    <p>🏡 <strong>Gaithersburg Market Insight:</strong> Gaithersburg's median home values mean kitchen renovation ROI varies by property type. Mid-range kitchen remodels ($32,000–$65,000) consistently return 68–78% of their cost in property value.</p>
                </div>

                <h2>Serving All Gaithersburg, MD Neighborhoods</h2>
                <div className="neighborhood-grid">
                    <div className="neighborhood-card">
                        <h3>Kentlands</h3>
                        <p>Governed by the Kentlands Citizens Assembly HOA. Renovations here require HOA pre-approval and strict adherence to noise and access scheduling.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Lakelands</h3>
                        <p>Similar to Kentlands. Lakelands townhomes benefit most from cabinet upgrades, island additions, and open-concept layouts.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Crown</h3>
                        <p>One of Gaithersburg's newest communities. Renovations here focus on upgrading builder-grade finishes and adding custom cabinetry.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Montgomery Village</h3>
                        <p>A large community with homes from the 1970s–80s. Kitchens here are among the strongest renovation investment opportunities in Gaithersburg.</p>
                    </div>
                </div>

                <h2>Kitchen Remodel Cost in Gaithersburg, MD</h2>
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
                                    <td>Cosmetic Kitchen Refresh</td>
                                    <td>$13,000 – $28,000</td>
                                    <td>Cabinet painting/refacing, new countertops, backsplash, hardware, fixtures</td>
                                </tr>
                                <tr>
                                    <td>Mid-Range Kitchen Remodel</td>
                                    <td>$32,000 – $65,000</td>
                                    <td>New semi-custom cabinets, quartz countertops, appliances, updated lighting</td>
                                </tr>
                                <tr>
                                    <td>Full Gut Renovation</td>
                                    <td>$68,000 – $115,000</td>
                                    <td>Complete demo, layout redesign, custom cabinetry, premium finishes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="cta-banner">
                    <h2>Get a Free Kitchen Remodeling Estimate in Gaithersburg</h2>
                    <p>We'll visit your Gaithersburg home, assess your kitchen's potential, and provide a detailed itemized estimate.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free In-Home Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Our Kitchen Remodeling Process in Gaithersburg</h2>
                <div className="steps">
                    {[
                        { num: 1, title: "Free In-Home Consultation", desc: "We visit your home, assess your existing kitchen, and identify HOA or structural considerations." },
                        { num: 2, title: "HOA Documentation", desc: "We prepare and submit all required HOA documentation for pre-approval." },
                        { num: 3, title: "Design & Selection", desc: "Our architects develop detailed plans and guide you through every material selection." },
                        { num: 4, title: "Permit Processing", desc: "We determine the correct permit jurisdiction — City or County — and file all required permits." },
                        { num: 5, title: "Construction", desc: "Our licensed in-house crews handle demo, structural work, and final finishes." },
                        { num: 6, title: "Final Walkthrough", desc: "We manage inspections, conduct a walkthrough, and activate your 1-year warranty." }
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

                <h2>What Gaithersburg Area Homeowners Say</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We live in Kentlands and DMV-GC Group handled every single piece of HOA documentation. Incredible service."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Kentlands, Gaithersburg MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our Montgomery Village colonial was completely transformed into a bright, modern kitchen. Team was professional and clean."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Montgomery Village, Gaithersburg MD</span></div>
                    </div>
                </div>

                <h2>Frequently Asked Questions — Kitchen Remodeling in Gaithersburg, MD</h2>
                <Accordion className="faq-list">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="cta-banner">
                    <h2>Ready to Remodel Your Gaithersburg Kitchen?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation online.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Kitchen Estimate in Gaithersburg →</Link>
                </div>
            </div>
        </div>
    );
};

export default GaithersburgMD;
