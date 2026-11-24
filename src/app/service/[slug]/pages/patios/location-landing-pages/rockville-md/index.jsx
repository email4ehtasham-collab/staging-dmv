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
            question: "Where are patio permits filed in Rockville, MD?",
            answer: "Most established Rockville neighborhoods — Twinbrook, West End, Lincoln Park, and most King Farm properties — file with the City of Rockville at 111 Maryland Avenue, Rockville, MD 20850. Properties outside city limits file with MoCo DPS at 2425 Reedie Drive, Wheaton. The correct office is confirmed by parcel — not by mailing address or zip code. DMV General Contracting Group confirms the correct jurisdiction at every Rockville consultation."
        },
        {
            question: "Does my King Farm patio need HOA approval?",
            answer: "Yes — in most cases. King Farm's HOA Architectural Review Committee governs exterior modifications including patio additions, pergola structures, and outdoor kitchens. Material colors and structural specifications must be confirmed against HOA approved specifications before any permit is filed or material is ordered. DMV General Contracting Group confirms King Farm HOA requirements, prepares ARC documentation, and submits on your behalf — coordinated concurrently with the City of Rockville permit process."
        },
        {
            question: "What patio material works best for a Twinbrook colonial?",
            answer: "Concrete pavers in earth-tone profiles are the most practical and popular choice for Twinbrook's mid-century colonials — clean-lined, durable, and appropriately scaled. Uniform-cut bluestone is a step up in quality for Twinbrook homeowners wanting a more refined appearance. Irregular flagstone works well for more informal, garden-integrated settings. There is no HOA in Twinbrook — material choice is fully open."
        },
        {
            question: "Can I install a natural stone patio in King Farm if HOA has color restrictions?",
            answer: "Yes — natural stone is typically an approved material in King Farm, but specific stone types and color ranges may need to align with HOA approved specifications. DMV General Contracting Group confirms which natural stone colors and profiles are approved for your specific King Farm address and presents compliant material options at the consultation."
        },
        {
            question: "How much does patio installation cost in Rockville, MD?",
            answer: "Twinbrook and West End patio projects typically run $8,000–$20,000 for pavers or natural stone on mid-sized lots. King Farm and Congressional single-family home patios run $12,000–$35,000+ for natural stone or pavers. A pergola or outdoor kitchen adds $10,000–$35,000+ depending on scope and appliance package. DMV General Contracting Group provides a free, itemized estimate after reviewing the site and confirming the permit jurisdiction."
        }
    ];

    return (
        <div className="city-service-detail-page patios-rockville-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/patios">Patios</Link><span>›</span>
                    Rockville, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Rockville, MD</div>
                    <h1>Patio Installation &amp; Design in Rockville, MD</h1>
                    <p>
                        Professional custom patio design and installation for all Rockville communities — Twinbrook, West End, King Farm, Congressional, Fallsgrove, and established Rockville neighborhoods. Dual permit jurisdiction expertise: City of Rockville at 111 Maryland Avenue for most city properties; MoCo DPS for properties outside city limits. King Farm and Congressional HOA coordination included.
                    </p>
                    <div className="hero-meta">
                        <span className="badge">⚖️ Dual Permit — City of Rockville &amp; MoCo DPS</span>
                        <span className="badge">🏘️ King Farm HOA Coordination</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                        <span className="badge">Licensed &amp; Insured</span>
                        <span className="badge">1-Year Workmanship Warranty</span>
                    </div>
                </div>

                <div className="patio-banner">
                    <strong>Rockville Patio Expertise:</strong> Rockville's two distinct housing eras — Twinbrook and West End's 1950s–1960s mid-century colonials and King Farm and Congressional's 1999–2015 planned community homes — each call for different patio approaches. And Rockville has two separate permit jurisdictions: most established city neighborhoods file with the City of Rockville at 111 Maryland Avenue, while some properties outside city limits file with MoCo DPS. Filing at the wrong office means no permit is issued. DMV General Contracting Group confirms the correct permit authority for every Rockville address at the free consultation — and coordinates King Farm and Congressional HOA approvals concurrently with the permit process.
                </div>

                <h2>Rockville's Two Permit Jurisdictions — Confirmed by Parcel Before Any Work Begins</h2>

                <div className="juris-grid">
                    <div className="juris-card">
                        <h3>🏛️ City of Rockville — 111 Maryland Avenue</h3>
                        <ul>
                            <li><strong>Communities covered:</strong> Twinbrook, West End, Lincoln Park, most established Rockville city neighborhoods</li>
                            <li>All structural patio permits — pergolas, outdoor kitchens with gas/electrical, retaining walls over 30" — filed with City of Rockville at 111 Maryland Avenue, Rockville, MD 20850</li>
                            <li>City of Rockville conducts its own inspections — separate from MoCo inspectors</li>
                            <li>Most King Farm properties are within city limits and file here</li>
                            <li><strong>Filing at MoCo DPS for a City property = no permit issued</strong></li>
                            <li>DMV-GC files at City of Rockville for all in-city patio projects</li>
                        </ul>
                    </div>
                    <div className="juris-card">
                        <h3>🏛️ Montgomery County DPS — 2425 Reedie Drive, Wheaton</h3>
                        <ul>
                            <li><strong>Communities covered:</strong> Properties with Rockville mailing addresses outside city limits; some King Farm edge parcels</li>
                            <li>All structural patio permits filed with MoCo DPS at 2425 Reedie Drive, Wheaton, MD 20902</li>
                            <li>MoCo DPS inspectors cover these properties — separate from City of Rockville</li>
                            <li><strong>Filing at City of Rockville for an unincorporated property = no permit issued</strong></li>
                            <li>Some Fallsgrove and Rockshire properties may fall in this category</li>
                            <li>DMV-GC confirms jurisdiction by parcel before any permit is submitted</li>
                        </ul>
                    </div>
                </div>

                <div className="patio-banner">
                    <strong>Why parcel confirmation matters — not neighborhood name:</strong> Most King Farm properties are within the City of Rockville and file at 111 Maryland Avenue — but some edge parcels fall outside city limits and file with MoCo DPS. Your mailing address and zip code do not determine which office applies. DMV General Contracting Group confirms the correct permit jurisdiction by parcel number at every Rockville patio consultation.
                </div>

                <h2>Complete Patio Services for Rockville Homes</h2>
                <div className="card-grid">
                    <div className="card"><h3>Custom Patio Design</h3><p>Patio designs tailored to each Rockville community — compact and clean for Twinbrook and West End mid-century colonials; larger, more feature-complete outdoor living setups for King Farm and Congressional single-family homes.</p></div>
                    <div className="card"><h3>Natural Stone Patio</h3><p>Bluestone, travertine, flagstone, and limestone — natural stone complements both Rockville's mid-century and newer planned community architectural profiles. King Farm HOA approved stone colors and profiles confirmed before material is ordered.</p></div>
                    <div className="card"><h3>Concrete Paver Patio</h3><p>Durable, repairable, and available in a wide range of earth-tone profiles — concrete pavers are the most popular choice across all Rockville communities. King Farm HOA approved paver colors confirmed before installation. Good value for Twinbrook and West End projects.</p></div>
                    <div className="card"><h3>Large-Format Paver &amp; Porcelain</h3><p>Contemporary large-format concrete pavers and porcelain slabs — appropriate for King Farm and Congressional's newer architectural profiles. King Farm HOA specifications confirmed before material selection. Frost-rated porcelain required for Maryland outdoor use.</p></div>
                    <div className="card"><h3>Pergola &amp; Shade Structure</h3><p>Custom pergolas scaled to each community's lot and architectural character. King Farm and Congressional HOA approval required and coordinated concurrently with City of Rockville permit. City of Rockville or MoCo DPS permit confirmed by parcel before filing.</p></div>
                    <div className="card"><h3>Outdoor Kitchen &amp; Grill</h3><p>Built-in grill stations and outdoor kitchen installations for Rockville homeowners — King Farm and Congressional outdoor kitchens frequently include full appliance packages. Gas line and electrical work managed by our licensed in-house trades team. HOA and permit requirements confirmed before scope is finalized.</p></div>
                    <div className="card"><h3>Fire Pit Installation</h3><p>Custom gas or wood-burning fire pits for Rockville's outdoor spaces. Gas fire pits require the applicable jurisdiction permit for gas line extension — City of Rockville or MoCo DPS depending on the parcel. Stone and concrete block surrounds available.</p></div>
                    <div className="card"><h3>Grading, Steps &amp; Retaining Walls</h3><p>Grade management for Rockville lots — retaining walls, steps, and terracing for sloped lots in Twinbrook and West End. Walls over 30 inches require the applicable jurisdiction permit. King Farm lots tend to be flatter and better graded than older Twinbrook properties.</p></div>
                </div>

                <h2>Common Patio Needs by Rockville Community</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Community</th>
                                    <th>Typical Patio Scope</th>
                                    <th>Key Consideration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Twinbrook</strong></td>
                                    <td>Concrete paver or bluestone patio, simple pergola, fire pit replacement of old concrete slab</td>
                                    <td>City of Rockville permit at 111 Maryland Avenue. Mid-century colonial rear yards well suited to functional patio + pergola combination. Old 1960s concrete slab replacement common. No HOA.</td>
                                </tr>
                                <tr>
                                    <td><strong>West End</strong></td>
                                    <td>Natural stone or paver patio, pergola, outdoor kitchen for renovating colonials</td>
                                    <td>City of Rockville permit. West End homeowners renovating and upgrading frequently invest in complete outdoor living spaces alongside interior renovation. No HOA.</td>
                                </tr>
                                <tr>
                                    <td><strong>King Farm</strong></td>
                                    <td>Larger patio, full outdoor kitchen, pergola or pavilion, fire feature</td>
                                    <td>City of Rockville permit (most parcels). King Farm HOA ARC approval required — material colors and structural elements subject to ARC specifications. Confirm HOA requirements before any scope is finalized.</td>
                                </tr>
                                <tr>
                                    <td><strong>Congressional</strong></td>
                                    <td>Rear patio with outdoor kitchen, pergola, landscaping integration</td>
                                    <td>City of Rockville permit (confirm by parcel). Congressional HOA ARC requirements confirmed before scope. Newer homes support contemporary patio designs and larger outdoor living investments.</td>
                                </tr>
                                <tr>
                                    <td><strong>Fallsgrove &amp; Rockshire</strong></td>
                                    <td>Patio replacement or new installation, pergola, fire pit</td>
                                    <td>Permit jurisdiction confirmed by parcel — some properties file with City of Rockville, others with MoCo DPS. HOA requirements confirmed by community. Do not assume based on neighborhood name alone.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>King Farm &amp; Congressional HOA — Patio Approval Process</h2>
                <div className="patio-banner">
                    <strong>King Farm and Congressional HOA ARC Requirements:</strong> King Farm and Congressional are planned communities with active HOA Architectural Review Committees that govern exterior modifications — including patio additions, pergola structures, outdoor kitchens, and any features visible from common areas or neighboring properties. HOA approved material colors (especially for paving surfaces) and structural specifications must be confirmed before any patio material is ordered or any permit is filed. Installing a patio in a non-approved color or with a non-approved material — even if it is otherwise code-compliant — may result in an HOA violation notice requiring correction. DMV General Contracting Group confirms King Farm and Congressional HOA requirements at the consultation, provides material specification documentation for your ARC submission, and coordinates the HOA and City of Rockville permit processes concurrently to avoid project delays.
                </div>

                <h2>Patio Materials for Rockville's Two Housing Eras</h2>
                <p>Rockville's mid-century Twinbrook and West End colonials and its 1999–2015 King Farm and Congressional planned community homes call for different approaches to material selection — both in terms of architectural compatibility and HOA constraints.</p>
                <div className="card-grid">
                    <div className="card"><h3>🧱 Concrete Pavers — Both Eras</h3><p>Most versatile choice across all Rockville communities. Earth-tone tumbled profiles for Twinbrook and West End mid-century homes; cleaner contemporary profiles for King Farm and Congressional. King Farm HOA approved colors confirmed before ordering. Durable, repairable, and excellent value.</p></div>
                    <div className="card"><h3>🪨 Bluestone — Both Eras</h3><p>Uniform-cut bluestone for King Farm and Congressional contemporary profiles; irregular bluestone for Twinbrook and West End's more informal settings. Cool gray tone works across Rockville's range of architectural styles. Popular upgrade from concrete pavers for Rockville homeowners investing in outdoor quality.</p></div>
                    <div className="card"><h3>🪨 Travertine — King Farm &amp; Congressional</h3><p>Warm cream and tan tones well suited to King Farm and Congressional's contemporary colonial and transitional homes. Tumbled travertine for informal settings; honed for contemporary profiles. King Farm HOA approved colors confirmed before material selection.</p></div>
                    <div className="card"><h3>🧱 Large-Format Porcelain — Newer Homes</h3><p>24"×24" and larger porcelain pavers — contemporary choice for King Farm and Congressional homes. Non-porous, stain-resistant, and available in stone-look profiles. Frost-rated for Maryland outdoor use. King Farm HOA approved profiles confirmed. Generally not recommended for Twinbrook and West End's mid-century profiles.</p></div>
                    <div className="card"><h3>🪨 Flagstone — Twinbrook &amp; West End</h3><p>Irregular natural flagstone for Twinbrook and West End's more informal, garden-integrated settings. Wide joints with ground cover integrate well with mid-century homes and established landscape plantings. Less formal than uniform-cut bluestone; well suited to relaxed colonial rear yard settings.</p></div>
                    <div className="card"><h3>🏗️ Stamped Concrete — Budget Option</h3><p>Cost-effective for larger Rockville patio areas where natural stone or unit pavers are cost-prohibitive at scale. Cobblestone and slate patterns in earth tones. Most appropriate for Twinbrook and West End where there is no HOA color restriction. Not recommended where King Farm HOA specifications apply.</p></div>
                </div>

                <h2>Why Choose DMV General Contracting Group for Patio Work in Rockville?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">⚖️</div>
                        <strong>Dual Permit Expertise</strong>
                        <span>City of Rockville &amp; MoCo DPS by parcel</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🏘️</div>
                        <strong>King Farm HOA Coordination</strong>
                        <span>ARC submissions managed in-house</span>
                    </div>
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
                </div>
                <div className="card-grid">
                    <div className="card"><h3>Dual Jurisdiction Permit Expertise</h3><p>City of Rockville at 111 Maryland Avenue for most city properties; MoCo DPS at 2425 Reedie Drive for parcels outside city limits. Correct office confirmed by parcel at the free consultation — never assumed by neighborhood name or zip code.</p></div>
                    <div className="card"><h3>King Farm &amp; Congressional HOA Management</h3><p>ARC submission documentation prepared and submitted. Material specifications and color documentation provided for HOA review. HOA and City permit processes coordinated concurrently. Homeowners do not manage the ARC process independently.</p></div>
                    <div className="card"><h3>Both Housing Eras Understood</h3><p>Twinbrook and West End's mid-century colonials and King Farm and Congressional's newer planned community homes have different patio needs, material preferences, and HOA constraints. DMV-GC brings the right approach to each.</p></div>
                    <div className="card"><h3>All Trades In-House</h3><p>Gas line extensions, electrical connections, retaining walls, and patio installation all coordinated under one design-build workflow — no separate subcontractors on different schedules managing pieces of your Rockville patio project.</p></div>
                </div>

                <h2>Our Patio Installation Process in Rockville</h2>
                <div className="steps">
                    {[
                        { num: 1, title: "Free Consultation & Jurisdiction Confirmation", desc: "We visit your Rockville home, assess the outdoor space, and confirm the correct permit jurisdiction for your specific parcel — City of Rockville at 111 Maryland Avenue or MoCo DPS at 2425 Reedie Drive. King Farm and Congressional HOA requirements also confirmed at this stage." },
                        { num: 2, title: "Design, Layout & Material Selection", desc: "Patio layout and materials selected for your community's architectural character and HOA specifications. King Farm and Congressional approved materials and colors confirmed before any material is ordered. Multiple design options presented for approval before scope is agreed." },
                        { num: 3, title: "HOA Submission & Permit Filing", desc: "For King Farm and Congressional: ARC documentation prepared and submitted. City of Rockville or MoCo DPS permit prepared and filed concurrently. All correspondence managed in-house. For Twinbrook and West End: permit filed directly with City of Rockville at 111 Maryland Avenue." },
                        { num: 4, title: "Excavation, Grading & Base Preparation", desc: "Existing surface removed, grade adjusted where required, and compacted gravel base installed to the correct depth for the chosen patio material. Drainage slope established away from the home's foundation and any adjacent HOA common area." },
                        { num: 5, title: "Patio Installation & Features", desc: "Patio material installed on the prepared base per the approved HOA specifications and design plan. Pergola framed, outdoor kitchen installed, and gas and electrical rough-in completed by licensed in-house trades where applicable. Steps and retaining elements finished." },
                        { num: 6, title: "Inspection, Cleanup & Completion", desc: "All required City of Rockville or MoCo DPS inspections scheduled and managed. Work area cleaned. Final walkthrough with you. Warranty documentation provided at project close." }
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
                <p>DMV General Contracting Group provides residential patio installation and outdoor living services throughout <strong>Rockville, MD</strong> — including Twinbrook, West End, Lincoln Park, King Farm, Congressional, Fallsgrove, Rockshire, Horizon Hill, and surrounding Montgomery County communities including North Bethesda, Kensington, Gaithersburg, Wheaton, and Bethesda.</p>

                <div className="patio-banner">
                    <strong>Rockville Permit Summary:</strong> City of Rockville at 111 Maryland Avenue covers most established Rockville neighborhoods including Twinbrook, West End, and most King Farm parcels. MoCo DPS at 2425 Reedie Drive covers properties with Rockville addresses outside city limits. Your mailing address does not determine which office applies — parcel location does. DMV General Contracting Group confirms the correct jurisdiction at every Rockville patio consultation.
                </div>

                <h2>Frequently Asked Questions — Patio Installation in Rockville, MD</h2>
                <Accordion className="faq-list">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <h2>Explore Our Other Services in Rockville, MD</h2>
                <ul className="related-links">
                    <li><Link href="/service/decks/rockville-md">Deck Building in Rockville, MD</Link></li>
                    <li><Link href="/service/fence-installation/rockville-md">Fence Installation in Rockville, MD</Link></li>
                    <li><Link href="/service/home-additions/rockville-md">Home Additions in Rockville, MD</Link></li>
                    <li><Link href="/service/roofing/rockville-md">Roofing Services in Rockville, MD</Link></li>
                    <li><Link href="/service/design-build/rockville-md">Design-Build Contractor in Rockville, MD</Link></li>
                    <li><Link href="/service/concrete/rockville-md">Concrete Services in Rockville, MD</Link></li>
                </ul>

                <div className="cta-banner">
                    <h2>Need Patio Installation in Rockville, MD?</h2>
                    <p>Talk with DMV General Contracting Group about custom patio design for your Rockville community — permit jurisdiction confirmed by parcel, King Farm HOA coordination, community-appropriate materials. Free consultation, no obligation.</p>
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

export default RockvilleMD;