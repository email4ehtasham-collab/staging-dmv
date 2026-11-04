'use client';

import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "./style.scss";
import "../design-build-city-style.scss";

const KensingtonMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Why does Kensington offer strong renovation ROI compared to Bethesda and Chevy Chase?",
            answer: "Kensington's home prices are priced below Bethesda and Chevy Chase equivalents despite sharing the same Montgomery County school district, the same Metro Red Line access at Kensington station (or nearby Bethesda/Silver Spring stations), and comparable proximity to DC employment. This gap between Kensington's current prices and its underlying location value means renovation dollars build equity against a lower base — a well-executed design-build renovation on a $650,000 Kensington home produces a stronger percentage return than the same renovation on a $900,000 Bethesda home. As Kensington's community trajectory continues improving through its historic town center and surrounding development, renovation-driven equity gains compound that advantage further."
        },
        {
            question: "How does DMV-GC Group handle MoCo DPS permits for Kensington projects?",
            answer: "Kensington is unincorporated Montgomery County — all building permits go through MoCo DPS at 2425 Reedie Drive, Wheaton. DMV-GC Group's in-house permit team handles all MoCo DPS filings, structural plan reviews, zoning submissions, and inspection scheduling for every Kensington project. We file complete packages that do not require supplemental submissions. Kensington homeowners never contact MoCo DPS during their project."
        },
        {
            question: "Can Kensington's historic homes support open-concept conversions and additions?",
            answer: "In most cases, yes — but Kensington's older housing stock (many homes built in the 1920s–1950s) requires careful structural assessment before any open-concept conversion. DMV-GC Group's in-house structural engineers walk Kensington homes and assess load-bearing wall conditions before any design is finalized — accounting for the framing methods and construction standards of the era in which the home was built. For properties within Kensington's historic districts, our permit team coordinates with Montgomery County Historic Preservation as needed."
        },
        {
            question: "Is DMV-GC Group licensed for design-build work in Kensington, MD?",
            answer: "Yes. DMV General Contracting Group holds Maryland MHIC license #156178 — required for all home improvement and construction work in Kensington, which is unincorporated Montgomery County. Fully bonded, comprehensive general liability and workers' compensation coverage, and a 1-year workmanship warranty on every Kensington design-build project."
        }
    ];

    return (
        <div className="design-build-city-detail-page design-build-kensington-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/design-build">Design-Build</Link><span>›</span>
                    Kensington, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Kensington, MD</div>
                    <h1>Design-Build Contractor in Kensington, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏛️ In-House Architects & Engineers</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ MoCo DPS — 2425 Reedie Drive</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">📈</div>
                    <div>
                        <h3>Kensington's Charming Character and Strong Location Value Make It One of Montgomery County's Best Opportunities for Design-Build Renovations That Close the Gap Between Current Prices and Underlying Location Value</h3>
                        <p>Kensington offers a unique combination: a charming historic town center, established residential neighborhoods with mature trees and generous lot sizes, Montgomery County school district access, and proximity to DC via the Metro Red Line — all at home prices that consistently run below comparable Bethesda and Chevy Chase properties. That price gap is the renovation ROI opportunity. DMV General Contracting Group has completed design-build renovations throughout Kensington's residential neighborhoods — North Kensington, South Kensington, and the established communities surrounding Kensington station — delivering additions, open-concept conversions, ADU constructions, and whole-home renovations under one contract, one team, and one point of accountability. MoCo DPS at 2425 Reedie Drive is the permit jurisdiction for all Kensington projects — our permit team files complete packages there regularly.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a trusted <strong>design-build contractor in Kensington, MD</strong>? DMV General Contracting Group brings licensed architects, structural engineers, permit specialists, and all licensed trades in-house to Kensington renovation projects — handling everything from concept drawings through final inspection under one contract. Rear additions that extend Kensington's charming colonials and bungalows. Open-concept conversions that transform compartmentalized mid-century layouts. ADU construction that adds guest suites or rental income on Kensington's generous lots. Whole-home renovations that modernize interiors while preserving Kensington's distinctive character. One firm. One contract. Full accountability.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">📈</div><strong>Strong MoCo ROI</strong><span>Kensington construction costs + improving location value</span></div>
                    <div className="trust-item"><div className="icon">📐</div><strong>In-House Architects</strong><span>Designs, renderings & permit drawings — no outside firm</span></div>
                    <div className="trust-item"><div className="icon">📋</div><strong>MoCo DPS Permit Ready</strong><span>2425 Reedie Drive — our regular permit office</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>Why Kensington Offers Strong Renovation ROI in Montgomery County</h2>

                <div className="roi-box">
                    <h3>📈 The Kensington Renovation ROI Case</h3>
                    <ul>
                        <li><strong>The location value gap:</strong> Kensington shares Montgomery County's school district and proximity to DC with Bethesda and Chevy Chase — yet Kensington home prices consistently run $100,000–$200,000 below comparable Bethesda properties. This gap reflects Kensington's quieter community identity and housing stock age, and it represents a measurable equity capture opportunity for homeowners who renovate well.</li>
                        <li><strong>Generous lot sizes for additions and ADUs:</strong> Kensington's residential lots are often larger than those in closer-in Silver Spring and Bethesda neighborhoods, providing meaningful rear addition and ADU potential within MoCo's zoning setback and lot coverage limits. Our architects assess your specific parcel and design additions that maximize the lot's potential.</li>
                        <li><strong>Strong buyer demand for renovated inventory:</strong> Kensington buyers are actively seeking updated homes with modern layouts — and there is limited renovated inventory in Kensington's established neighborhoods. A well-designed contemporary renovation stands out sharply in Kensington's market.</li>
                        <li><strong>ADU income potential:</strong> Kensington's proximity to Silver Spring and Bethesda employment corridors, combined with its quiet residential character, drives ADU rental demand. Detached garage conversions and accessory units on Kensington's larger lots generate meaningful rental income at construction costs that deliver strong annual returns.</li>
                    </ul>
                </div>

                <h2>What Is Design-Build — And Why It Matters for Kensington Homeowners</h2>
                <p>The design-build method places architectural design and construction under one contract and one firm. For Kensington homeowners whose renovation ROI depends on budget accuracy and quality execution:</p>

                <table className="compare-table">
                    <tr><th>Factor</th><th>Design-Build (DMV-GC Group)</th><th>Traditional (Separate Architect + GC)</th></tr>
                    <tr><td><strong>Budget accuracy</strong></td><td>Construction team prices design in real time — no bid shock</td><td>Architect designs, GC bids higher — redesign costs time and money</td></tr>
                    <tr><td><strong>Structural assessment</strong></td><td>Engineer walks home before design — no mid-demo surprises</td><td>GC discovers load-bearing wall mid-demolition — change order</td></tr>
                    <tr><td><strong>Permit filing</strong></td><td>In-house team files complete MoCo DPS package first try</td><td>Incomplete package requires resubmission — weeks of delay</td></tr>
                    <tr><td><strong>Accountability</strong></td><td>One firm responsible — no blame gap</td><td>Architect and GC blame each other for overruns</td></tr>
                    <tr><td><strong>ROI impact</strong></td><td>Budget-accurate project preserves renovation return</td><td>Every overrun directly compresses the ROI</td></tr>
                </table>

                <h2>Design-Build Services We Offer in Kensington, MD</h2>

                <div className="service-grid">
                    <div className="service-card">
                        <div className="s-icon">🏠</div>
                        <h3>Home Additions</h3>
                        <p>Rear additions, side additions, and upper-level additions for Kensington's colonials, bungalows, and mid-century homes — designed in-house to match existing architecture. Kensington's lot sizes provide meaningful addition potential within MoCo's setback and lot coverage limits.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">📐</div>
                        <h3>Open-Concept Conversion</h3>
                        <p>Load-bearing wall removal and open floor plan creation for Kensington's compartmentalized layouts. Our structural engineers account for the framing methods and construction standards of Kensington's 1920s–1950s housing stock before any design is finalized.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏗️</div>
                        <h3>ADU Construction</h3>
                        <p>Detached ADUs, garage conversions, and lower-level ADU conversions for Kensington lots. Kensington's proximity to Silver Spring and Bethesda employment corridors drives ADU rental demand on its generous residential lots.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🍳</div>
                        <h3>Kitchen Remodeling</h3>
                        <p>Full design-build kitchen renovations for Kensington's postwar homes — layout redesign, custom cabinetry, and all trades coordinated in-house. Our architects redesign kitchen footprints to match modern living standards.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🛁</div>
                        <h3>Bathroom Renovation</h3>
                        <p>Primary bath, guest bath, and powder room renovations designed and built in-house. Kensington's older bathrooms are prime candidates for layout expansion and full gut renovation.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🪜</div>
                        <h3>Basement Finishing</h3>
                        <p>Complete basement design and finishing for Kensington's colonials and bungalows with unfinished lower levels. Egress compliance, waterproofing, electrical, plumbing, and all finishes under MoCo DPS permit.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏡</div>
                        <h3>Whole-Home Renovation</h3>
                        <p>Complete interior transformations of Kensington's charming homes — coordinating architectural redesign, structural work, all trades, and all finishes under one contract. For homeowners who purchased in original or dated condition, the design-build approach delivers a comprehensive transformation efficiently.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏗️</div>
                        <h3>Structural Modifications</h3>
                        <p>Stair relocation, ceiling height changes, floor plate modifications — all handled in-house. For Kensington's older homes with unique structural configurations, in-house engineering eliminates coordination friction.</p>
                    </div>
                </div>

                <h2>Design-Build Project Costs in Kensington, MD</h2>

                <table className="cost-table">
                    <tr><th>Project Type</th><th>Typical Design-Build Cost</th><th>Typical Value Added</th></tr>
                    <tr><td>Open-Concept Conversion</td><td>$18,000 – $48,000+</td><td>$30,000 – $58,000</td></tr>
                    <tr><td>Kitchen Remodel</td><td>$30,000 – $85,000+</td><td>$35,000 – $75,000</td></tr>
                    <tr><td>Bathroom Renovation</td><td>$20,000 – $62,000+</td><td>$20,000 – $48,000</td></tr>
                    <tr><td>Basement Finishing</td><td>$30,000 – $85,000+</td><td>$40,000 – $75,000</td></tr>
                    <tr><td>Rear or Side Addition</td><td>$90,000 – $260,000+</td><td>$140,000 – $230,000</td></tr>
                    <tr><td>ADU Construction</td><td>$65,000 – $190,000+</td><td>$1,500–$2,000/month rental</td></tr>
                    <tr><td>Whole-Home Renovation</td><td>$110,000 – $350,000+</td><td>Significant equity capture</td></tr>
                </table>

                <div className="tip">
                    💡 <strong>Design is included — no separate architect billing rate.</strong> In every Kensington design-build project with DMV-GC Group, architectural design, structural engineering, 3D renderings, and permit-ready construction documents are bundled into the project cost. You do not pay separate architect fees. On a $150,000 Kensington renovation, that saves $15,000–$22,500 in architecture fees alone.
                </div>

                <h2>What Kensington Homeowners Say About DMV-GC Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We bought our North Kensington colonial specifically to renovate. DMV-GC Group did the open-concept conversion on the main floor, gut kitchen, and primary bathroom — all under one contract. The structural engineer assessed our 1940s framing before any design was drawn. The MoCo permit was approved in three weeks. Our appraiser put the value increase at $165,000 over our all-in cost."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">North Kensington, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We added a rear family room to our 1952 Kensington bungalow. DMV-GC Group's architect designed the addition to complement the original bungalow architecture. The MoCo DPS permit was filed and approved without supplemental submissions. The addition was completed in ten weeks. Our neighbors with a separate architect and GC are still waiting."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">South Kensington, MD</span></div>
                    </div>
                </div>

                <div className="cta-banner">
                    <h2>Start Your Design-Build Project in Kensington</h2>
                    <p>Our architect and project manager will visit your Kensington home, assess the renovation and addition potential, confirm MoCo zoning parameters, and discuss the ROI case for each project scope — at no cost, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Design Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All Kensington, MD Neighborhoods for Design-Build</h2>
                <div className="areas-grid">
                    <span className="area-pill">North Kensington</span>
                    <span className="area-pill">South Kensington</span>
                    <span className="area-pill">Kensington Park</span>
                    <span className="area-pill">Colonial Village</span>
                    <span className="area-pill">Rock Creek Hills</span>
                    <span className="area-pill">Goldenrod</span>
                    <span className="area-pill">Kensington Station Area</span>
                </div>

                <div className="nearby-box">
                    <h3>Also serving Wheaton, MD — directly north of Kensington on Georgia Avenue</h3>
                    <p>Wheaton's 1950s–1970s split-levels share Kensington's renovation opportunity. DMV-GC Group brings the same design-build execution capability along the Georgia Avenue corridor. <Link href="/service/design-build/wheaton-md">View our Wheaton design-build page →</Link></p>
                </div>

                <h2>Frequently Asked Questions — Design-Build in Kensington, MD</h2>
                <Accordion className="faq-list" defaultActiveKey="0">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="cta-banner">
                    <h2>Ready to Capture Kensington's Renovation ROI?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free design consultation. We design to Kensington's standards, price accurately from day one, and build the open-concept, addition, and ADU projects that make Kensington's value equation work.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Design-Build Consultation in Kensington →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default KensingtonMD;