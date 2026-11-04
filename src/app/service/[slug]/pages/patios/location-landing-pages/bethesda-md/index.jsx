'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const BethesdaMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Does patio installation in Bethesda require a permit?",
            answer: "It depends on the scope. A basic ground-level patio typically does not require a permit in Montgomery County. Structural elements — pergolas, outdoor kitchens with gas or electrical, raised patio footings, or retaining walls over 30 inches — require MoCo DPS permits. DMV General Contracting Group confirms permit requirements at the free consultation and files all required permits at MoCo DPS at 2425 Reedie Drive, Wheaton."
        },
        {
            question: "What patio material is best for a Bethesda colonial home?",
            answer: "Natural bluestone is the most popular choice for Bethesda's traditional colonials — the cool gray tone and natural texture complement traditional architecture and age beautifully. Travertine is popular for more contemporary homes and pool areas. Concrete pavers are a durable, practical choice for larger patio areas where budget is a consideration. DMV General Contracting Group discusses all material options at the free consultation."
        },
        {
            question: "Can DMV General Contracting Group build an outdoor kitchen in Bethesda?",
            answer: "Yes. We design and install complete outdoor kitchens — built-in grills, countertops, outdoor refrigerators, sinks, and storage. Gas line and electrical connections are managed in-house by our licensed trades team. All required MoCo DPS permits are filed before installation begins."
        },
        {
            question: "How much does patio installation cost in Bethesda, MD?",
            answer: "Patio costs vary by size, material, and features. A concrete paver patio starts in the $8,000–$15,000 range. A natural stone patio runs $15,000–$35,000+. A full outdoor living space with pergola, outdoor kitchen, and fire feature can run $40,000–$100,000+ depending on scope. DMV General Contracting Group provides a free, itemized estimate after reviewing the site in person."
        },
        {
            question: "Is DMV General Contracting Group licensed for patio work in Maryland?",
            answer: "Yes. DMV General Contracting Group holds Maryland MHIC license #156178 and DC DLCP license #410526000209. All patio projects are fully insured and backed by a 1-year workmanship warranty."
        }
    ];

    return (
        <div className="city-service-detail-page patios-bethesda-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/patios">Patios</Link><span>›</span>
                    Bethesda, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Bethesda, MD</div>
                    <h1>Patio Installation &amp; Design in Bethesda, MD</h1>
                    <p>
                        Professional custom patio design and installation for Bethesda homeowners — natural stone patios, concrete patios, outdoor kitchens, pergolas, fire pits, and complete outdoor living spaces. DMV-GC coordinates patio work with landscape grading, drainage, electrical, gas, and permit requirements for Bethesda properties.
                    </p>
                    <div className="hero-meta">
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                        <span className="badge">DC DLCP #410526000209</span>
                        <span className="badge">Licensed &amp; Insured</span>
                        <span className="badge">1-Year Workmanship Warranty</span>
                        <span className="badge">Free Consultation</span>
                    </div>
                </div>

                <div className="patio-banner">
                    <strong>Bethesda Patio Expertise:</strong> Bethesda homeowners — in neighborhoods like Woodmont, Edgemoor, Battery Park, Wyngate, and Bradley Hills — invest in outdoor living spaces that match the quality and character of their homes. DMV General Contracting Group designs and installs patios, outdoor kitchens, pergolas, and complete outdoor living areas for Bethesda properties, coordinating grading, drainage, electrical, gas line work, and MoCo DPS permit requirements under one design-build workflow.
                </div>

                <h2>Complete Patio Services for Bethesda Homes</h2>
                <div className="card-grid">
                    <div className="card"><h3>Custom Patio Design</h3><p>Work with our design team to create a patio that complements your Bethesda home's architecture and fits your outdoor lifestyle — whether a quiet private retreat or a large-scale entertaining area.</p></div>
                    <div className="card"><h3>Natural Stone Patio Installation</h3><p>Bluestone, travertine, flagstone, and slate — natural stone is the preferred choice for Bethesda's upscale colonials and contemporaries. Properly set on a sand-and-gravel base or mortar bed for long-term stability in Maryland's freeze-thaw climate.</p></div>
                    <div className="card"><h3>Concrete Paver Patio</h3><p>Durable, attractive, and repairable — concrete pavers offer a wide range of profiles, colors, and layouts at a lower cost than natural stone. A popular choice for larger Bethesda patio areas where budget and scale are both considerations.</p></div>
                    <div className="card"><h3>Stamped Concrete Patio</h3><p>Custom stamped patterns and integral color — stamped concrete delivers a finished look for expansive patio areas and pool surrounds at competitive cost. Properly sealed for Maryland's climate conditions.</p></div>
                    <div className="card"><h3>Pergola &amp; Patio Cover Installation</h3><p>Extend the usability of your Bethesda patio with a custom pergola, shade structure, or covered outdoor living area. Wood, aluminum, and vinyl pergola systems available — designed to complement the home's existing architectural character.</p></div>
                    <div className="card"><h3>Outdoor Kitchen &amp; Grill Installation</h3><p>Built-in grills, countertops, outdoor refrigerators, sinks, and storage — complete outdoor kitchen design and installation for Bethesda's entertaining-focused homeowners. Gas line and electrical coordination managed in-house.</p></div>
                    <div className="card"><h3>Fire Pit &amp; Outdoor Fireplace</h3><p>Custom fire pits and outdoor fireplaces — gas or wood-burning — that extend your Bethesda patio season and create an inviting focal point for outdoor gatherings. Gas line extensions permitted and installed by our licensed team.</p></div>
                    <div className="card"><h3>Drainage &amp; Grading</h3><p>Proper slope, drainage channels, and French drain integration prevent water from pooling on or migrating toward the home from the patio area — essential in Bethesda's clay-soil lots where drainage is a consistent concern.</p></div>
                </div>

                <h2>Common Patio Needs in Bethesda</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Homeowner Need</th>
                                    <th>How We Help</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>New patio for a Bethesda colonial</td>
                                    <td>Design a patio that complements the home's traditional architecture — natural bluestone or travertine, clean edge details, integration with existing landscaping and garden beds.</td>
                                </tr>
                                <tr>
                                    <td>Outdoor entertaining space</td>
                                    <td>Design and install a complete outdoor living area — patio, pergola, outdoor kitchen, and seating area — scaled to the lot and the homeowner's entertaining style.</td>
                                </tr>
                                <tr>
                                    <td>Patio replacement / renovation</td>
                                    <td>Remove existing cracked or settled patio, assess and improve the base, and install new patio material with proper drainage slope away from the foundation.</td>
                                </tr>
                                <tr>
                                    <td>Pool patio / coping</td>
                                    <td>Coordinate patio installation with pool coping, decking material, and pool contractor schedule to deliver a cohesive finished outdoor area.</td>
                                </tr>
                                <tr>
                                    <td>Fire feature addition</td>
                                    <td>Design and install a custom fire pit or outdoor fireplace — including gas line extension from the home where applicable — as a standalone project or as part of a larger patio renovation.</td>
                                </tr>
                                <tr>
                                    <td>Drainage problem correction</td>
                                    <td>Assess existing patio drainage issues, reslope the surface, add drainage channels or French drains, and prevent water from reaching the home's foundation or basement.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Patio Materials for Bethesda Homes</h2>
                <p>Bethesda's upscale housing stock — colonials, contemporaries, and larger traditional homes — calls for patio materials that match the quality and architectural character of the home. DMV General Contracting Group discusses material options at the free consultation and recommends based on the home's style, the intended use, and the project budget.</p>
                <div className="card-grid">
                    <div className="card"><h3>🪨 Natural Bluestone</h3><p>The most popular choice for Bethesda's traditional colonials — cool gray tone, natural texture, timeless appearance. Properly set and sealed for Maryland's freeze-thaw cycles. Available in irregular (natural cleft) and uniform (thermaled or sawn) finishes.</p></div>
                    <div className="card"><h3>🪨 Travertine</h3><p>Warm tan and cream tones with natural variation — a popular choice for contemporary Bethesda homes and those with pool areas. Tumbled travertine has a natural, aged appearance; honed travertine offers a cleaner, more modern profile.</p></div>
                    <div className="card"><h3>🪨 Flagstone</h3><p>Natural irregular stone set in sand or mortar — a classic landscape aesthetic that works well with Bethesda's mature tree canopy and established garden settings. Wide variety of stone types and color ranges available.</p></div>
                    <div className="card"><h3>🧱 Concrete Pavers</h3><p>Durable, repairable, and available in a wide range of profiles, textures, and colors. Individual pavers can be replaced if damaged — an advantage over poured concrete. A practical choice for larger Bethesda patio areas and driveways.</p></div>
                    <div className="card"><h3>🏗️ Stamped Concrete</h3><p>Poured concrete stamped with custom patterns and integrally colored — a cost-effective option for large patio areas and pool surrounds. Requires proper sealing and occasional resealing in Maryland's climate to prevent surface wear.</p></div>
                    <div className="card"><h3>🪟 Porcelain Tile</h3><p>Large-format porcelain pavers — 24"×24" and larger — deliver a contemporary, refined look for covered outdoor areas, outdoor kitchens, and screened porch floors. Frost-rated porcelain required for outdoor installation in Maryland.</p></div>
                </div>

                <h2>Why Choose DMV General Contracting Group for Patio Work in Bethesda?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9 Rating</strong>
                        <span>97+ verified reviews</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>MD MHIC #156178</strong>
                        <span>Licensed &amp; fully insured</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🛡️</div>
                        <strong>1-Year Warranty</strong>
                        <span>Workmanship guaranteed</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🔧</div>
                        <strong>In-House Trades</strong>
                        <span>Design, permits, installation</span>
                    </div>
                </div>
                <div className="card-grid">
                    <div className="card"><h3>Design-Build Under One Roof</h3><p>Patio design, permit coordination, grading, drainage, hardscape installation, electrical, and gas line work — all coordinated under one design-build workflow. No separate subcontractors managing different pieces of your outdoor project.</p></div>
                    <div className="card"><h3>Permit Expertise</h3><p>Pergolas, outdoor kitchens with gas lines, and retaining walls require MoCo DPS permits. DMV General Contracting Group confirms permit requirements at the consultation and manages all MoCo DPS filings at 2425 Reedie Drive, Wheaton, in-house.</p></div>
                    <div className="card"><h3>Bethesda Market Experience</h3><p>We understand what Bethesda homeowners expect in materials quality, design character, and project management — and we deliver accordingly. Our work in Bethesda neighborhoods reflects the standards these homes and their owners expect.</p></div>
                    <div className="card"><h3>Licensed &amp; Warrantied</h3><p>Maryland MHIC #156178, DC DLCP #410526000209, fully insured, and backed by a 1-year workmanship warranty on every patio project completed in Bethesda.</p></div>
                </div>

                <h2>Our Patio Installation Process</h2>
                <div className="steps">
                    {[
                        { num: 1, title: "Free Consultation & Site Visit", desc: "We visit your Bethesda home, assess the outdoor space, review grading and drainage conditions, discuss your design vision and budget, and walk you through material and layout options at no charge." },
                        { num: 2, title: "Design & Material Selection", desc: "Our team develops a patio layout plan — dimensions, material selection, feature placement (pergola, kitchen, fire pit), and drainage approach — tailored to your Bethesda home's architecture and your outdoor lifestyle." },
                        { num: 3, title: "Permit Confirmation & Filing", desc: "We confirm which elements of your patio project require MoCo DPS permits and file all required applications at 2425 Reedie Drive, Wheaton. Structural elements, gas lines, and electrical connections are permitted before installation begins." },
                        { num: 4, title: "Excavation, Base Prep & Grading", desc: "Existing surface removed, subgrade excavated to appropriate depth, and a compacted gravel base installed to the thickness required for the chosen patio material and the expected load. Drainage slope established away from the home's foundation." },
                        { num: 5, title: "Patio Installation & Feature Build-Out", desc: "Patio material installed on the prepared base — natural stone set and jointed, pavers laid and compacted, concrete poured and finished, or stamped pattern applied. Pergola, outdoor kitchen, fire pit, and lighting installed concurrently where applicable." },
                        { num: 6, title: "Final Review & Walkthrough", desc: "Completed patio inspected and reviewed with you. Drainage tested, all surfaces cleaned, and any required sealing applied. Project documentation and warranty information provided at project close." }
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

                <h2>Patio Service Area</h2>
                <p>DMV General Contracting Group provides residential patio installation and outdoor living services throughout <strong>Bethesda, MD</strong>, including Woodmont, Edgemoor, Battery Park, Wyngate, Bradley Hills, Bethesda Row, Chevy Chase Village, and surrounding Montgomery County communities including North Bethesda, Potomac, Rockville, Kensington, Chevy Chase, Silver Spring, and Washington DC.</p>

                <div className="patio-banner">
                    <strong>Permit Note for Bethesda Patio Projects:</strong> Simple ground-level patios typically do not require a permit in unincorporated Montgomery County. However, pergolas, outdoor kitchens with gas or electrical connections, retaining walls over 30 inches, and raised patios with footings do require MoCo DPS permits filed at 2425 Reedie Drive, Wheaton. DMV General Contracting Group confirms permit requirements for every Bethesda patio project at the free consultation.
                </div>

                <h2>Frequently Asked Questions — Patio Installation in Bethesda, MD</h2>
                <Accordion className="faq-list">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <h2>Explore Our Other Services in Bethesda, MD</h2>
                <ul className="related-links">
                    <li><Link href="/service/decks/bethesda-md">Deck Building in Bethesda, MD</Link></li>
                    <li><Link href="/service/fence-installation/bethesda-md">Fence Installation in Bethesda, MD</Link></li>
                    <li><Link href="/service/home-additions/bethesda-md">Home Additions in Bethesda, MD</Link></li>
                    <li><Link href="/service/design-build/bethesda-md">Design-Build Contractor in Bethesda, MD</Link></li>
                    <li><Link href="/service/kitchen-remodeling/bethesda-md">Kitchen Remodeling in Bethesda, MD</Link></li>
                    <li><Link href="/service/concrete/bethesda-md">Concrete Services in Bethesda, MD</Link></li>
                </ul>

                <div className="cta-banner">
                    <h2>Need Patio Installation in Bethesda, MD?</h2>
                    <p>Talk with DMV General Contracting Group about custom patio design, natural stone installation, outdoor kitchens, pergolas, or a complete outdoor living space for your Bethesda home. Free consultation, no obligation.</p>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn">📞 Call +1 240-730-1292</a>
                    <a href="mailto:support@dmv-gc.com" className="cta-btn outline">Email support@dmv-gc.com</a>
                </div>

                <div className="page-footer">
                    <div className="container">
                        <strong>DMV General Contracting Group LLC</strong>
                        <p>11810 Grand Park Ave. Suite 500, North Bethesda, MD 20852</p>
                        <p>MD MHIC #156178 · DC DLCP #410526000209</p>
                        <p>Available 7 Days a Week · 1-Year Workmanship Warranty</p>
                        <p>Phone: +1 240-730-1292 · Email: support@dmv-gc.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BethesdaMD;