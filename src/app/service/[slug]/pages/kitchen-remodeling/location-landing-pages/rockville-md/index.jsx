'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const RockvilleMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "How much does a kitchen remodel cost in Rockville, MD?",
            answer: "Kitchen remodeling in Rockville, MD typically costs between $25,000 and $150,000 depending on home type, scope, and finishes. A cosmetic refresh starts around $15,000–$28,000. A mid-range remodel with new cabinets and countertops runs $32,000–$68,000. A full gut renovation with custom cabinetry costs $70,000–$120,000. Luxury renovations in larger single-family homes near King Farm or Fallsgrove can reach $120,000–$150,000+. DMV-GC Group provides free in-home consultations with detailed, itemized estimates for any Rockville home type."
        },
        {
            question: "Does DMV-GC Group remodel kitchens in Rockville condos and high-rises?",
            answer: "Yes. DMV-GC Group has experience renovating kitchens in Rockville's condo buildings and high-rises, particularly in Rockville Town Center and along the Pike District. Condo kitchen renovations require building management coordination, certificate of insurance submission, freight elevator scheduling, and adherence to building work-hour policies. We manage all of this coordination as part of every condo kitchen project."
        },
        {
            question: "Does DMV-GC Group handle permits for kitchen remodeling in Rockville?",
            answer: "Yes. Rockville is an incorporated city with its own permitting department — separate from Montgomery County. DMV-GC Group's in-house permit team determines whether your property requires a City of Rockville permit or a Montgomery County permit based on its exact location, and files all required building, electrical, and plumbing permits accordingly. Rockville homeowners never need to contact the city or county directly."
        },
        {
            question: "Can DMV-GC Group remodel a townhome kitchen in King Farm or Fallsgrove?",
            answer: "Yes. Townhome kitchen remodels in King Farm, Fallsgrove, and Twinbrook are among our most common Rockville projects. These newer planned communities often have HOA guidelines covering exterior changes, contractor parking, and work hours. DMV-GC Group handles all required HOA documentation and coordination as a standard part of every project in these communities, alongside the full design, permit, and construction process."
        },
        {
            question: "How long does a kitchen remodel take in Rockville, MD?",
            answer: "Most kitchen renovations in Rockville take 6–12 weeks from construction start to completion. A cosmetic refresh can be done in 3–5 weeks. A full gut renovation with layout changes takes 9–13 weeks. Permit processing — through the City of Rockville or Montgomery County depending on location — typically adds 3–6 weeks before construction begins. Condo projects may take slightly longer due to building access scheduling. DMV-GC Group manages the complete timeline in-house."
        },
        {
            question: "Is DMV-GC Group licensed for kitchen remodeling in Rockville, MD?",
            answer: "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home renovation work in Rockville. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every kitchen remodeling project completed in Rockville."
        }
    ];

    return (
        <div className="city-service-detail-page kitchen-rockville-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/kitchen-remodeling">Kitchen Remodeling</Link><span>›</span>
                    Rockville, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Rockville, MD</div>
                    <h1>Kitchen Remodeling Contractor in Rockville, MD</h1>
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
                    Looking for a trusted <strong>kitchen remodeling contractor in Rockville, MD</strong>? As Montgomery County's seat of government and one of Maryland's largest cities, Rockville has one of the most varied housing markets in the region — from the high-rise condos of Rockville Town Center and the planned communities of King Farm and Fallsgrove to the established single-family neighborhoods of Twinbrook and the West End. DMV-GC Group's licensed design-build team has the experience and breadth to handle any kitchen renovation in Rockville.
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
                        <span>City of Rockville & Montgomery County</span>
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

                <h2>Kitchen Remodeling Services We Offer in Rockville, MD</h2>
                <p>
                    Rockville's housing stock spans nearly every type found in Montgomery County — from postwar Cape Cods and split-levels to 1990s and 2000s townhome communities to modern high-rise condos in Rockville Town Center. DMV-GC Group's licensed team is equipped to handle the full range, with specific experience in townhome HOA coordination and condo building management requirements.
                </p>

                <div className="service-grid">
                    <div className="service-item">Full Kitchen Gut Renovation</div>
                    <div className="service-item">Townhome Kitchen Remodel</div>
                    <div className="service-item">Condo & High-Rise Kitchen Renovation</div>
                    <div className="service-item">Open-Concept Kitchen Conversion</div>
                    <div className="service-item">Custom Cabinet Design & Installation</div>
                    <div className="service-item">Countertop Replacement (Quartz, Granite, Marble)</div>
                    <div className="service-item">Kitchen Island & Breakfast Bar Addition</div>
                    <div className="service-item">Kitchen Layout Redesign & Space Planning</div>
                    <div className="service-item">Backsplash Tile Design & Installation</div>
                    <div className="service-item">Kitchen Electrical & Lighting Upgrades</div>
                    <div className="service-item">Plumbing Relocation & Fixture Replacement</div>
                    <div className="service-item">City of Rockville & Montgomery County Permits</div>
                </div>

                <div className="author-box">
                    <div className="author-avatar">🏠</div>
                    <div className="author-info">
                        <h4>About DMV-GC Group — Rockville's Licensed Kitchen Remodeling Contractor</h4>
                        <p>DMV-GC Group is headquartered in North Bethesda — directly adjacent to Rockville. Our licensed team has completed kitchen renovations throughout Rockville's diverse housing market, from single-family homes in Twinbrook to townhomes in King Farm to condo units in Rockville Town Center. We are familiar with both City of Rockville and Montgomery County permit processes — an important distinction given Rockville's status as an incorporated city.</p>
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

                <h2>Kitchen Remodeling for Rockville's Diverse Home Types</h2>
                <div className="home-type-grid">
                    <div className="home-type-box">
                        <div className="icon">🏙️</div>
                        <h3>Town Center Condos</h3>
                        <p>High-rise condos in Rockville Town Center. Kitchen renovations here require building management coordination — COI submission, freight elevator scheduling, and more.</p>
                    </div>
                    <div className="home-type-box">
                        <div className="icon">🏘️</div>
                        <h3>King Farm Townhomes</h3>
                        <p>King Farm townhome kitchens are typically galley or L-shaped — renovations focus on cabinet upgrades and countertop replacement within HOA guidelines.</p>
                    </div>
                    <div className="home-type-box">
                        <div className="icon">🏡</div>
                        <h3>Fallsgrove Single-Family</h3>
                        <p>Newer single-family homes in Fallsgrove. Renovations here focus on upgrading to custom cabinetry, premium countertops, and high-end appliance packages.</p>
                    </div>
                    <div className="home-type-box">
                        <div className="icon">🏠</div>
                        <h3>Twinbrook Cape Cods</h3>
                        <p>Established postwar neighborhood. Twinbrook kitchens are prime candidates for open-concept conversions — removing walls to connect areas.</p>
                    </div>
                </div>

                <div className="condo-box">
                    <h3>🏙️ What Condo Kitchen Renovations in Rockville Require</h3>
                    <ul>
                        <li><strong>Certificate of Insurance (COI)</strong> naming the building/HOA as additional insured.</li>
                        <li><strong>Freight elevator reservations</strong> for material delivery and debris removal.</li>
                        <li><strong>Work-hour restrictions</strong> — many buildings restrict construction noise to specific hours.</li>
                        <li><strong>Floor protection requirements</strong> for common hallways and elevators.</li>
                        <li>DMV-GC Group handles <strong>all building coordination</strong> as a standard part of every project.</li>
                    </ul>
                </div>

                <div className="note">
                    ⚠️ <strong>Condo Plumbing Note:</strong> In many Rockville high-rises, kitchen plumbing connects to shared building risers — meaning any change to plumbing locations may require coordination.
                </div>

                <div className="highlight">
                    <p>🏡 <strong>Rockville Market Insight:</strong> Across all segments, a professionally renovated kitchen typically returns 65–80% of its cost in immediate property value — making kitchen investment one of the most consistently reliable renovations in the Rockville market.</p>
                </div>

                <h2>Serving All Rockville, MD Neighborhoods</h2>
                <div className="neighborhood-grid">
                    <div className="neighborhood-card">
                        <h3>Rockville Town Center / Pike District</h3>
                        <p>High-rise condos and newer apartments. Renovations here require building management coordination handled by DMV-GC Group.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>King Farm</h3>
                        <p>A mix of townhomes, single-family homes, and condos. King Farm HOA guidelines cover exterior changes and contractor access.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Fallsgrove</h3>
                        <p>Newer single-family and townhome community. Kitchens here benefit significantly from custom cabinetry and premium countertop upgrades.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Twinbrook</h3>
                        <p>Established postwar neighborhood near the Metro. Open-concept conversions and full kitchen modernizations are common here.</p>
                    </div>
                </div>

                <h2>Kitchen Remodel Cost in Rockville, MD</h2>
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
                                    <td>$14,000 – $28,000</td>
                                    <td>Cabinet painting, new countertops, backsplash, hardware, fixtures</td>
                                </tr>
                                <tr>
                                    <td>Condo Kitchen Renovation</td>
                                    <td>$25,000 – $55,000</td>
                                    <td>New cabinets, countertops, appliances, building coordination</td>
                                </tr>
                                <tr>
                                    <td>Townhome Kitchen Upgrade</td>
                                    <td>$30,000 – $65,000</td>
                                    <td>New cabinets, countertops, island, backsplash, HOA coordination</td>
                                </tr>
                                <tr>
                                    <td>Full Gut Renovation</td>
                                    <td>$70,000 – $120,000</td>
                                    <td>Complete demo, layout redesign, custom cabinetry, premium finishes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="cta-banner">
                    <h2>Get a Free Kitchen Remodeling Estimate in Rockville</h2>
                    <p>We'll visit your Rockville home or condo, assess your kitchen's potential, and provide a detailed itemized estimate.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free In-Home Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Our Kitchen Remodeling Process in Rockville</h2>
                <div className="steps">
                    {[
                        { num: 1, title: "Free In-Home Consultation", desc: "We visit your home or condo, assess your existing kitchen, and identify any specific considerations." },
                        { num: 2, title: "Building / HOA Coordination", desc: "We prepare and submit all required building management or HOA documentation before design finalization." },
                        { num: 3, title: "Design & Material Selection", desc: "Our architects develop floor plans and renderings while guiding you through material selections." },
                        { num: 4, title: "Permit Processing", desc: "We determine the correct jurisdiction — City of Rockville or Montgomery County — and file all required permits." },
                        { num: 5, title: "Construction", desc: "Our licensed in-house crews handle all demolition, structural work, and final finishes." },
                        { num: 6, title: "Final Walkthrough", desc: "We manage all required city or county final inspections and activate your 1-year warranty." }
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

                <h2>What Rockville Area Homeowners Say</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We live in a high-rise in Rockville Town Center. DMV-GC Group handled the COI and building coordination perfectly."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Rockville Town Center, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our Twinbrook Cape Cod had a tiny closed-off kitchen. DMV-GC Group opened it up and the transformation is incredible."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Twinbrook, Rockville MD</span></div>
                    </div>
                </div>

                <h2>Frequently Asked Questions — Kitchen Remodeling in Rockville, MD</h2>
                <Accordion className="faq-list">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="cta-banner">
                    <h2>Ready to Remodel Your Rockville Kitchen?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation online.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Kitchen Estimate in Rockville →</Link>
                </div>
            </div>
        </div>
    );
};

export default RockvilleMD;
