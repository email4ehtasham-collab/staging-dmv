'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const SilverSpringMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "How much does a kitchen remodel cost in Silver Spring, MD?",
            answer: "Kitchen remodeling in Silver Spring typically costs $15,000–$160,000 depending on scope and finishes. A cosmetic refresh (cabinet paint, countertops, backsplash) starts around $15,000–$30,000. A mid-range remodel with new cabinets runs $35,000–$65,000. A full gut renovation with custom cabinetry and premium finishes costs $65,000–$110,000. Silver Spring is generally 15–25% less expensive than comparable projects in Potomac or Bethesda — making it one of the best ROI markets in Montgomery County for kitchen investment."
        },
        {
            question: "How long does a kitchen remodel take in Silver Spring?",
            answer: "Most kitchen renovations in Silver Spring take 6–12 weeks from construction start to completion. A cosmetic refresh with no structural changes can be done in 4–6 weeks. A full gut renovation with layout changes takes 10–14 weeks. Add 4–6 weeks for Montgomery County permit processing before construction begins. DMV-GC Group manages the complete timeline in-house — design, permits, and construction — to minimize delays."
        },
        {
            question: "Can DMV-GC Group remodel a galley kitchen in a Silver Spring home?",
            answer: "Yes — galley kitchen remodels and expansions are one of our most common projects in Silver Spring, where postwar Cape Cods and split-levels frequently have narrow, closed-off original kitchens. We assess load-bearing walls, recommend the best expansion or open-concept approach for your specific floor plan, handle all required permits, and manage the full structural and finish work to transform a cramped galley into a spacious, functional kitchen."
        },
        {
            question: "Does DMV-GC Group handle permits for kitchen remodeling in Silver Spring?",
            answer: "Yes. DMV-GC Group handles all required Montgomery County permits for kitchen remodels in Silver Spring — building, electrical, and plumbing permits included. Our in-house permit team manages every step from application to final inspection. Silver Spring homeowners never need to contact the county or manage any permit paperwork."
        },
        {
            question: "What is the ROI of a kitchen remodel in Silver Spring, MD?",
            answer: "A professionally renovated kitchen in Silver Spring typically returns 65–80% of its cost in immediate property value. Silver Spring's strong DC-area demand and Metro access make updated kitchens one of the most sought-after features by buyers. Mid-range kitchen remodels in Silver Spring — $35,000–$65,000 — consistently deliver the best ROI relative to investment in this market. Homes with renovated kitchens also tend to sell faster and closer to asking price than comparable homes with dated kitchens."
        },
        {
            question: "Is DMV-GC Group licensed to do kitchen remodeling in Silver Spring, MD?",
            answer: "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home renovation work in Silver Spring and Montgomery County. We are fully bonded, carry comprehensive general liability insurance and workers' compensation, and provide a 1-year workmanship warranty on every kitchen remodeling project we complete in Silver Spring."
        }
    ];

    return (
        <div className="city-service-detail-page kitchen-silver-spring-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/kitchen-remodeling">Kitchen Remodeling</Link><span>›</span>
                    Silver Spring, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Silver Spring, MD</div>
                    <h1>Kitchen Remodeling Contractor in Silver Spring, MD</h1>
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
                    Searching for a trusted <strong>kitchen remodeling contractor in Silver Spring, MD</strong>? DMV-GC Group transforms kitchens across Silver Spring — from the mid-century Cape Cods in Woodside and Four Corners to the brick colonials along Sligo Creek Parkway and the newer townhomes near Downtown Silver Spring. As a fully licensed design-build contractor, our in-house team of architects, engineers, permit specialists, and construction crews handles your entire kitchen renovation under one contract — from first design concept to final inspection — so you never deal with the coordination headaches of managing multiple contractors.
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

                <h2>Kitchen Remodeling Services We Offer in Silver Spring, MD</h2>
                <p>
                    Silver Spring's housing stock is one of the most diverse in Montgomery County — a mix of 1940s–1960s Cape Cods, split-levels, brick colonials, newer townhomes, and mid-rise condos. Each home type presents its own kitchen remodeling opportunities and challenges. DMV-GC Group's licensed team is experienced with all of them — from tight galley kitchen expansions in postwar Cape Cods to full gut renovations in Silver Spring's larger colonial homes.
                </p>

                <div className="service-grid">
                    <div className="service-item">Full Kitchen Gut Renovation</div>
                    <div className="service-item">Galley Kitchen Expansion & Redesign</div>
                    <div className="service-item">Custom Cabinet Design & Installation</div>
                    <div className="service-item">Open-Concept Kitchen Conversion</div>
                    <div className="service-item">Countertop Replacement (Quartz, Granite, Marble)</div>
                    <div className="service-item">Kitchen Island & Breakfast Bar Addition</div>
                    <div className="service-item">Kitchen Layout Redesign & Space Planning</div>
                    <div className="service-item">Backsplash Tile Design & Installation</div>
                    <div className="service-item">Kitchen Electrical & Lighting Upgrades</div>
                    <div className="service-item">Plumbing Relocation & Fixture Replacement</div>
                    <div className="service-item">Appliance Integration & Built-In Installation</div>
                    <div className="service-item">Montgomery County Permit Processing</div>
                </div>

                <div className="author-box">
                    <div className="author-avatar">🏠</div>
                    <div className="author-info">
                        <h4>About DMV-GC Group — Silver Spring's Licensed Kitchen Remodeling Contractor</h4>
                        <p>DMV-GC Group is headquartered in North Bethesda — less than 4 miles from Silver Spring. Our team has completed kitchen renovations throughout Silver Spring's neighborhoods and is familiar with the specific home types, layout challenges, and permit requirements common in this area. We hold a Maryland MHIC license, carry full general liability insurance, and back every project with a 1-year workmanship warranty.</p>
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

                <h2>Kitchen Remodeling for Silver Spring's Unique Home Types</h2>
                <p>
                    Silver Spring grew rapidly in the post-WWII era, producing a dense concentration of mid-century homes that are now prime candidates for kitchen renovation. Understanding how to renovate these specific home types is something DMV-GC Group brings to every Silver Spring project.
                </p>

                <div className="home-type-grid">
                    <div className="home-type-box">
                        <div className="icon">🏡</div>
                        <h3>Cape Cod Homes</h3>
                        <p>Silver Spring has hundreds of postwar Cape Cods with small, closed-off galley kitchens. We specialize in expanding these kitchens by opening walls into dining rooms — creating the open-concept flow modern buyers expect.</p>
                    </div>
                    <div className="home-type-box">
                        <div className="icon">🏠</div>
                        <h3>Brick Colonials</h3>
                        <p>Silver Spring's colonials often have larger kitchen footprints but dated layouts from the 1960s–80s. Full gut renovations with new cabinetry, countertops, and layout redesign deliver the biggest transformation in these homes.</p>
                    </div>
                    <div className="home-type-box">
                        <div className="icon">🏘️</div>
                        <h3>Split-Level Homes</h3>
                        <p>Split-levels present unique layout challenges — kitchens that feel disconnected from living areas. We design solutions that improve sightlines and flow without requiring major structural changes.</p>
                    </div>
                    <div className="home-type-box">
                        <div className="icon">🏢</div>
                        <h3>Townhomes</h3>
                        <p>Newer Silver Spring townhomes near Downtown and White Oak often have galley or L-shaped kitchens that benefit from cabinet upgrades, island additions, and modern finish packages.</p>
                    </div>
                    <div className="home-type-box">
                        <div className="icon">🏗️</div>
                        <h3>Ranch Homes</h3>
                        <p>Silver Spring ranches often have the structural flexibility for dramatic open-concept kitchen expansions — removing interior walls to create combined kitchen-living-dining spaces.</p>
                    </div>
                    <div className="home-type-box">
                        <div className="icon">🏙️</div>
                        <h3>Condos & Co-ops</h3>
                        <p>Downtown Silver Spring condos require HOA coordination and careful scope management. We handle association documentation, noise restriction scheduling, and building access logistics.</p>
                    </div>
                </div>

                <h2>Why Silver Spring Homeowners Choose DMV-GC Group</h2>
                <p>
                    Silver Spring is one of the most dynamic real estate markets in the Washington DC metro area. The city's proximity to DC, access to the Red Line Metro, and increasingly affluent buyer pool have made kitchen renovations here a strong investment.
                </p>
                <div className="highlight">
                    <p>🏡 <strong>Silver Spring Market Insight:</strong> Silver Spring's median home values have grown significantly over the past decade — driven by DC-area demand and continued neighborhood revitalization. A professionally renovated kitchen in Silver Spring returns 65–80% of its cost in immediate property value.</p>
                </div>

                <h2>Serving All Silver Spring, MD Neighborhoods</h2>
                <div className="neighborhood-grid">
                    <div className="neighborhood-card">
                        <h3>Woodside</h3>
                        <p>One of Silver Spring's most desirable neighborhoods — a mix of Cape Cods, colonials, and ranches. Woodside kitchens frequently benefit from open-concept conversions.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Four Corners</h3>
                        <p>Established neighborhood with larger colonial and split-level homes. Four Corners kitchen remodels often involve full gut renovations with custom cabinetry.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Kemp Mill</h3>
                        <p>Dense residential area with a mix of split-levels and ranches built in the 1960s–70s. Kemp Mill kitchens are prime candidates for layout expansion.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Sligo Creek Area</h3>
                        <p>Eclectic housing mix with Craftsman, Colonial Revival, and Cape Cod styles. Renovation here tends to blend modern function with the home's original architectural character.</p>
                    </div>
                </div>

                <h2>Kitchen Remodel Cost in Silver Spring, MD</h2>
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
                                    <td>$15,000 – $30,000</td>
                                    <td>Cabinet painting/refacing, new countertops, backsplash, hardware, fixtures</td>
                                </tr>
                                <tr>
                                    <td>Mid-Range Kitchen Remodel</td>
                                    <td>$35,000 – $65,000</td>
                                    <td>New semi-custom cabinets, quartz countertops, new appliances, backsplash</td>
                                </tr>
                                <tr>
                                    <td>Full Gut Renovation</td>
                                    <td>$65,000 – $110,000</td>
                                    <td>Complete demo, layout redesign, custom cabinetry, premium finishes</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Silver Spring vs Potomac Pricing:</strong> Kitchen remodels in Silver Spring typically run 15–25% lower than comparable projects in Potomac or Bethesda.
                </div>

                <div className="cta-banner">
                    <h2>Get a Free Kitchen Remodeling Estimate in Silver Spring</h2>
                    <p>We'll visit your Silver Spring home, assess your kitchen's possibilities, and provide a detailed, honest estimate.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free In-Home Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Our Kitchen Remodeling Process in Silver Spring</h2>
                <div className="steps">
                    {[
                        { num: 1, title: "Free In-Home Consultation", desc: "We visit your Silver Spring home, assess your kitchen's current layout and structural constraints." },
                        { num: 2, title: "Structural Assessment", desc: "Our in-house structural engineer assesses load-bearing walls before any design is finalized." },
                        { num: 3, title: "Design & Selection", desc: "Our architects develop detailed plans and guide you through cabinet styles and material selections." },
                        { num: 4, title: "Permit Processing", desc: "We handle all required permits for your Silver Spring kitchen — building, electrical, and plumbing." },
                        { num: 5, title: "Construction", desc: "Our licensed in-house crews handle demo, structural, trade work, and final finishes." },
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

                <h2>What Silver Spring Area Homeowners Say</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our Silver Spring Cape Cod had the original 1952 kitchen. DMV-GC Group opened up the wall and gave us a beautiful open-concept kitchen."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Woodside, Silver Spring MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Professional from start to finish. They handled our Montgomery County permits without us having to do a single thing."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Kemp Mill, Silver Spring MD</span></div>
                    </div>
                </div>

                <h2>Frequently Asked Questions — Kitchen Remodeling in Silver Spring, MD</h2>
                <Accordion className="faq-list">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="cta-banner">
                    <h2>Ready to Remodel Your Silver Spring Kitchen?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation online.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Kitchen Estimate in Silver Spring →</Link>
                </div>
            </div>
        </div>
    );
};

export default SilverSpringMD;
