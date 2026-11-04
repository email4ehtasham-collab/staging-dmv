'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const WheatonMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "How much does a kitchen remodel cost in Wheaton, MD?",
            answer: "Kitchen remodeling in Wheaton typically costs $12,000–$130,000 depending on scope and finishes. A cosmetic refresh starts around $12,000–$25,000. A mid-range remodel with new cabinets and countertops runs $30,000–$58,000. A full gut renovation costs $60,000–$100,000. Wheaton is generally 10–15% less expensive than Silver Spring for comparable projects — making it one of the strongest renovation ROI markets in Montgomery County. DMV-GC Group provides free in-home consultations with detailed, itemized estimates."
        },
        {
            question: "Can DMV-GC Group remodel a split-level kitchen in Wheaton?",
            answer: "Yes — split-level kitchen remodels are one of our most common project types in Wheaton. Split-level homes have kitchens on an intermediate floor level, often closed off from the main living areas. We assess the structural configuration of your split-level, recommend the best layout improvement approach for your specific floor plan, and manage the complete renovation — from structural engineering through final finishes and county inspection."
        },
        {
            question: "Is a kitchen remodel a good investment in Wheaton, MD?",
            answer: "Yes. Wheaton is one of the best ROI markets in Montgomery County for kitchen renovation. Rising home values — driven by proximity to Silver Spring and Bethesda plus the planned Purple Line light rail — mean that kitchen investments here build equity quickly. A mid-range kitchen remodel in Wheaton typically returns 70–80% of its cost in immediate property value. Homes with renovated kitchens in Wheaton sell faster and at stronger prices than comparable homes with dated kitchens."
        },
        {
            question: "How long does a kitchen remodel take in Wheaton, MD?",
            answer: "Most kitchen renovations in Wheaton take 6–10 weeks from construction start to completion. A cosmetic refresh can be completed in 3–5 weeks. A full gut renovation with layout changes takes 8–12 weeks. Add 3–5 weeks for Montgomery County permit processing before construction begins. DMV-GC Group manages the complete timeline in-house to minimize delays and keep your project on schedule."
        },
        {
            question: "Does DMV-GC Group handle permits for kitchen remodeling in Wheaton?",
            answer: "Yes. DMV-GC Group handles all required Montgomery County permits for kitchen remodels in Wheaton — building, electrical, and plumbing permits included. Our in-house permit team manages every step from application submission through final inspection scheduling. Wheaton homeowners never need to contact the county or manage any paperwork throughout the project."
        },
        {
            question: "Is DMV-GC Group licensed for kitchen remodeling in Wheaton, MD?",
            answer: "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home renovation work in Wheaton and Montgomery County. We are fully bonded, carry comprehensive general liability and workers' compensation insurance, and provide a 1-year workmanship warranty on every kitchen remodeling project completed in Wheaton."
        }
    ];

    return (
        <div className="city-service-detail-page kitchen-wheaton-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/kitchen-remodeling">Kitchen Remodeling</Link><span>›</span>
                    Wheaton, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Wheaton, MD</div>
                    <h1>Kitchen Remodeling Contractor in Wheaton, MD</h1>
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
                    Looking for a trusted <strong>kitchen remodeling contractor in Wheaton, MD</strong>? DMV-GC Group transforms kitchens throughout Wheaton — from the postwar split-levels and ranches in Wheaton Hills and Glenmont to the brick colonials near Georgia Avenue and the newer townhomes off University Boulevard. As a fully licensed design-build contractor based in nearby North Bethesda, our in-house team of architects, engineers, permit specialists, and construction crews handles your entire kitchen renovation under one contract — from first consultation through final county inspection — so you get a seamless experience without coordinating multiple contractors.
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
                        <span>Montgomery County permits — fully managed</span>
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

                <h2>Kitchen Remodeling Services We Offer in Wheaton, MD</h2>
                <p>
                    Wheaton's housing stock is dominated by mid-century split-levels, ranches, and Cape Cods — homes with strong bones and good layouts, but kitchens that were designed for a different era. DMV-GC Group specializes in modernizing these kitchens — opening up closed floor plans, replacing decades-old cabinetry, and transforming cramped original kitchens into the open, functional spaces Wheaton homeowners deserve.
                </p>

                <div className="service-grid">
                    <div className="service-item">Full Kitchen Gut Renovation</div>
                    <div className="service-item">Split-Level Kitchen Remodel & Redesign</div>
                    <div className="service-item">Open-Concept Kitchen Conversion</div>
                    <div className="service-item">Galley Kitchen Expansion</div>
                    <div className="service-item">Custom Cabinet Design & Installation</div>
                    <div className="service-item">Countertop Replacement (Quartz, Granite, Butcher Block)</div>
                    <div className="service-item">Kitchen Island & Breakfast Bar Addition</div>
                    <div className="service-item">Kitchen Layout Redesign & Space Planning</div>
                    <div className="service-item">Backsplash Tile Design & Installation</div>
                    <div className="service-item">Kitchen Electrical & Lighting Upgrades</div>
                    <div className="service-item">Plumbing Relocation & Fixture Replacement</div>
                    <div className="service-item">Montgomery County Permit Processing</div>
                </div>

                <div className="author-box">
                    <div className="author-avatar">🏠</div>
                    <div className="author-info">
                        <h4>About DMV-GC Group — Wheaton's Licensed Kitchen Remodeling Contractor</h4>
                        <p>DMV-GC Group is headquartered in North Bethesda — just minutes from Wheaton. Our licensed team has completed kitchen renovations throughout Wheaton and the broader Montgomery County area. We are well-versed in the structural configurations of Wheaton's common home types — split-levels, ranches, Cape Cods, and brick colonials — and understand exactly what each requires for a successful kitchen renovation. We hold a Maryland MHIC license and carry full general liability insurance, backing every project with a 1-year workmanship warranty.</p>
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

                <h2>Kitchen Remodeling for Wheaton's Most Common Home Types</h2>
                <p>
                    Wheaton grew primarily between the 1940s and 1970s — producing a dense concentration of postwar homes that are now among the most sought-after renovation candidates in Montgomery County. Each home type has specific kitchen characteristics that require a different renovation approach. Here's how DMV-GC Group approaches the most common Wheaton home types:
                </p>

                <div className="home-type-grid">
                    <div className="home-type-box">
                        <div className="icon">🏠</div>
                        <h3>Split-Level Homes</h3>
                        <p>Wheaton's most common home type. Split-level kitchens sit on a middle floor between living and sleeping levels — often closed off and disconnected. We redesign the layout to improve sightlines and flow, often by opening the wall toward the lower living level.</p>
                    </div>
                    <div className="home-type-box">
                        <div className="icon">🏡</div>
                        <h3>Ranch Homes</h3>
                        <p>Single-story ranches offer excellent open-concept conversion potential. Removing a non-load-bearing interior wall between the kitchen and living area creates a dramatic transformation — one of the highest-ROI renovations we complete in Wheaton.</p>
                    </div>
                    <div className="home-type-box">
                        <div className="icon">🏘️</div>
                        <h3>Cape Cod Homes</h3>
                        <p>Wheaton's postwar Cape Cods typically have tight, galley-style kitchens. We specialize in expanding these kitchens by reconfiguring walls into adjacent dining rooms — creating the open-plan layouts today's buyers expect.</p>
                    </div>
                    <div className="home-type-box">
                        <div className="icon">🏛️</div>
                        <h3>Brick Colonials</h3>
                        <p>Larger colonials in Wheaton's established areas offer full gut renovation opportunities. These kitchens benefit most from complete layout redesigns — new custom cabinetry, island additions, and premium countertops that match the home's character.</p>
                    </div>
                    <div className="home-type-box">
                        <div className="icon">🏢</div>
                        <h3>Townhomes</h3>
                        <p>Newer townhomes near Wheaton Plaza and University Boulevard typically have L-shaped or galley kitchens on the main level. Upgrades here focus on custom cabinetry, countertop replacement, and finish packages that modernize the space efficiently.</p>
                    </div>
                    <div className="home-type-box">
                        <div className="icon">🔨</div>
                        <h3>Older Bi-Levels</h3>
                        <p>Bi-level homes — common in Wheaton's Glenmont area — have kitchens that feel elevated and separate. We design renovation solutions that visually connect the kitchen to the rest of the home while maximizing the available footprint.</p>
                    </div>
                </div>

                <h2>Why Wheaton Homeowners Are Investing in Kitchen Remodeling Now</h2>
                <p>
                    Wheaton is at an inflection point. The community has long been one of Montgomery County's most affordable and diverse neighborhoods — but its proximity to Silver Spring, Kensington, and Bethesda, combined with planned infrastructure investment, is driving a significant increase in home values and buyer interest.
                </p>
                <div className="highlight">
                    <p>🏡 <strong>Wheaton Investment Insight:</strong> Wheaton's median home values — currently in the $450,000–$650,000 range — are rising steadily as the neighborhood attracts first-time buyers, young families, and investors priced out of neighboring Silver Spring and Bethesda. A mid-range kitchen remodel in Wheaton ($30,000–$60,000) typically returns 70–80% of its cost in immediate property value — and significantly reduces time on market.</p>
                </div>

                <h2>Serving All Wheaton, MD Neighborhoods</h2>
                <div className="neighborhood-grid">
                    <div className="neighborhood-card">
                        <h3>Wheaton Hills</h3>
                        <p>One of Wheaton's most established neighborhoods — a mix of split-levels, ranches, and brick colonials. Wheaton Hills homeowners frequently invest in full gut renovations that modernize the kitchen while respecting the neighborhood's traditional architectural character.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Glenmont</h3>
                        <p>Adjacent to the Glenmont Metro station on the Red Line — a high-demand location for renters and buyers. Glenmont's bi-level and split-level homes are prime candidates for open-concept kitchen conversions that dramatically increase livability and resale value.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Arcola</h3>
                        <p>Quiet residential area with a strong mix of ranches and Cape Cods. Arcola homeowners often pursue mid-range kitchen remodels — new cabinets, quartz countertops, and updated appliances — that deliver significant visual impact without a full gut renovation price tag.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Shorefield</h3>
                        <p>Established neighborhood with larger lot colonials and split-levels. Shorefield kitchens typically have more square footage to work with — renovations here often include island additions and layout expansions that maximize the available footprint.</p>
                    </div>
                </div>

                <h2>Kitchen Remodel Cost in Wheaton, MD</h2>
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
                                    <td>$12,000 – $25,000</td>
                                    <td>Cabinet painting/refacing, countertops, backsplash, hardware, fixtures, paint</td>
                                </tr>
                                <tr>
                                    <td>Mid-Range Kitchen Remodel</td>
                                    <td>$30,000 – $58,000</td>
                                    <td>New semi-custom cabinets, quartz countertops, appliances, backsplash, lighting</td>
                                </tr>
                                <tr>
                                    <td>Full Gut Renovation</td>
                                    <td>$60,000 – $100,000</td>
                                    <td>Complete demo, layout redesign, custom cabinetry, premium finishes, all trade work</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Wheaton vs Silver Spring Pricing:</strong> Kitchen remodels in Wheaton run roughly 10–15% lower than comparable projects in Silver Spring — reflecting Wheaton's slightly smaller average kitchen footprints and more moderate finish expectations.
                </div>

                <div className="cta-banner">
                    <h2>Get a Free Kitchen Remodeling Estimate in Wheaton</h2>
                    <p>We'll visit your Wheaton home, walk your kitchen, and provide a detailed honest estimate — at no cost and no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free In-Home Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Our Kitchen Remodeling Process in Wheaton</h2>
                <div className="steps">
                    {[
                        { num: 1, title: "Free In-Home Consultation", desc: "We visit your Wheaton home, walk your existing kitchen, and discuss your goals and budget." },
                        { num: 2, title: "Structural Assessment", desc: "Our in-house structural engineer assesses your home's structural system before design begins." },
                        { num: 3, title: "Design & Selection", desc: "Our architects develop detailed plans and guide you through every material selection." },
                        { num: 4, title: "Permit Processing", desc: "We handle all required Montgomery County permits — building, electrical, and plumbing." },
                        { num: 5, title: "Construction", desc: "Our licensed in-house crews handle everything from demo to final finishes." },
                        { num: 6, title: "Final Walkthrough", desc: "We manage inspections, conduct a final walkthrough, and activate your 1-year warranty." }
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

                <h2>What Wheaton Area Homeowners Say</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our split-level in Wheaton Hills had the original 1960s kitchen — completely closed off and dark. DMV-GC Group opened the wall and completely transformed the space."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Wheaton Hills, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"I was nervous about the permit process. DMV-GC Group handled absolutely everything. The kitchen looks incredible and passed every inspection first try."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Glenmont, Wheaton MD</span></div>
                    </div>
                </div>

                <h2>Frequently Asked Questions — Kitchen Remodeling in Wheaton, MD</h2>
                <Accordion className="faq-list">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="cta-banner">
                    <h2>Ready to Remodel Your Wheaton Kitchen?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation online.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Kitchen Estimate in Wheaton →</Link>
                </div>
            </div>
        </div>
    );
};

export default WheatonMD;
