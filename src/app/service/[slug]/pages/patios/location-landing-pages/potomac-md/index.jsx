'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const PotomacMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Does patio installation in Potomac require a permit?",
            answer: "For basic ground-level patios, typically no permit is required in unincorporated Montgomery County. However, pergolas, pavilions, outdoor kitchens with gas or electrical, pool coping, raised patios with footings, and retaining walls over 30 inches require MoCo DPS permits filed at 2425 Reedie Drive, Wheaton. DMV General Contracting Group confirms what requires a permit for your specific Potomac project at the free consultation."
        },
        {
            question: "Does Potomac's R-200 zoning affect where I can install a patio or pergola?",
            answer: "R-200 zoning governs setbacks from property lines for structures. Open patios at grade level are generally not subject to setback requirements, but roofed structures — pavilions, covered pergolas with solid roofs — are typically treated as accessory structures with setback requirements from property lines. DMV General Contracting Group reviews R-200 setback requirements for any Potomac patio scope that includes a structure before the design is finalized."
        },
        {
            question: "What patio material works best for a pool surround in Potomac?",
            answer: "Tumbled travertine is the most popular choice for Potomac pool surrounds — its porous surface provides natural slip resistance when wet, it stays cooler underfoot than darker stone in summer heat, and its warm tones complement formal pool environments. Brushed concrete and large-format porcelain pavers are also used for Potomac pool areas. DMV General Contracting Group coordinates pool surround installation with your pool contractor's schedule."
        },
        {
            question: "Does my Avenel HOA need to approve a patio addition?",
            answer: "Avenel's HOA Architectural Review Committee typically requires ARC approval for exterior modifications including significant patio additions, pergola structures, and outdoor kitchens. DMV General Contracting Group confirms HOA requirements for your specific Avenel property at the consultation and can provide material specifications and design documentation to support your ARC submission."
        },
        {
            question: "How much does patio installation cost in Potomac, MD?",
            answer: "Potomac patio projects are typically larger in scale than standard suburban installations. A natural stone patio for a Potomac estate home generally starts at $25,000–$50,000 for patio work alone. A complete outdoor living space with pavilion, outdoor kitchen, pool surround, and fire feature can run $75,000–$200,000+ depending on scope, materials, and features. DMV General Contracting Group provides a free, detailed estimate after a full site review."
        }
    ];

    const processSteps = [
        { num: 1, title: "Free Consultation & Site Assessment", desc: "We visit your Potomac property, assess the outdoor space in full — topography, drainage patterns, existing landscape features, pool adjacency, views — and discuss your design vision, intended use, and budget. Free, no obligation." },
        { num: 2, title: "Design, Layout & Material Selection", desc: "Our team develops a full outdoor living plan — patio zones, material selection, pergola or pavilion placement, outdoor kitchen layout, fire feature location, lighting plan, and drainage approach — scaled to your Potomac property and its architecture." },
        { num: 3, title: "HOA & Permit Confirmation", desc: "HOA ARC requirements confirmed where applicable for Avenel and other planned communities. All required MoCo DPS permits prepared and filed at 2425 Reedie Drive before any installation begins. Structural, gas, and electrical permits managed in-house." },
        { num: 4, title: "Site Prep, Grading & Base Installation", desc: "Existing surface removed, topography graded per the drainage plan, retaining walls installed where the scope requires, and compacted gravel base installed to the depth required for the chosen material and anticipated load at the project's scale." },
        { num: 5, title: "Patio Installation & Feature Construction", desc: "Natural stone or pavers installed on the prepared base, mortar-set or sand-set per the material specification. Pergola or pavilion structure built, outdoor kitchen installed, gas and electrical rough-in completed by licensed in-house trades, fire feature constructed. Landscape lighting installed where included in scope." },
        { num: 6, title: "Inspection, Sealing & Completion", desc: "All required MoCo DPS inspections scheduled and managed. Stone or paver surfaces sealed where applicable. Final walkthrough with you — drainage tested, all surfaces inspected, lighting tested. Project documentation and warranty provided at close." }
    ];

    return (
        <div className="city-service-detail-page patios-potomac-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/patios">Patios</Link><span>›</span>
                    Potomac, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Potomac, MD</div>
                    <h1>Patio Installation &amp; Design in Potomac, MD</h1>
                    <p>
                        Professional custom patio design and installation for Potomac's estate-scale properties — natural stone patios, large-format paver patios, pool surrounds, outdoor kitchens, pavilions, fire features, and complete outdoor living spaces. DMV-GC coordinates patio work with grading, drainage, electrical, gas, landscape integration, and MoCo DPS permit requirements for Potomac's expansive lots.
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
                    <strong>Potomac Patio Expertise:</strong> Potomac's R-200 zoned estate properties — in neighborhoods like Avenel, Potomac Village, Great Falls Road corridor, and River Road communities — sit on large lots with generous outdoor space that Potomac homeowners invest in seriously. Patios here are rarely small projects: pool surrounds, multi-zone outdoor living areas, outdoor kitchens with full appliance packages, and custom pavilions are the norm. DMV General Contracting Group designs and installs outdoor living spaces at the scale and quality Potomac properties demand — coordinating all trades under one design-build workflow and managing MoCo DPS permits in-house.
                </div>

                <h2>Complete Patio Services for Potomac Homes</h2>
                <div className="card-grid">
                    <div className="card"><h3>Custom Patio Design</h3><p>Work with our design team to create an outdoor living space scaled to your Potomac property — whether a formal entertaining terrace, a resort-style pool surround, or a multi-zone outdoor room with dining, lounge, and kitchen areas.</p></div>
                    <div className="card"><h3>Natural Stone Patio Installation</h3><p>Bluestone, travertine, limestone, and flagstone — natural stone is the material of choice for Potomac's estate properties. Properly set on a rigid mortar base or compacted sand-and-gravel system for long-term stability across Maryland's freeze-thaw seasons.</p></div>
                    <div className="card"><h3>Large-Format Paver Patio</h3><p>Concrete and porcelain pavers in large formats — 24"×24", 24"×48", and larger — deliver a refined, contemporary appearance at competitive cost for Potomac's expansive patio areas. Durable, repairable, and available in a wide range of colors and textures.</p></div>
                    <div className="card"><h3>Pool Surround &amp; Coping</h3><p>Patio installation coordinated with pool coping, decking material selection, and pool contractor schedule. Travertine, bluestone, and brushed concrete are the most requested pool surround materials for Potomac properties. Slip resistance and heat absorption both considered in material selection.</p></div>
                    <div className="card"><h3>Pavilion &amp; Pergola Installation</h3><p>Custom wood, aluminum, or structural pergolas and pavilions — from open shade structures to fully roofed outdoor rooms with ceiling fans, lighting, and weatherproofing. Designed to complement the scale and architecture of Potomac's larger homes.</p></div>
                    <div className="card"><h3>Outdoor Kitchen &amp; Grill Station</h3><p>Complete outdoor kitchen design and installation — built-in grills, smokers, pizza ovens, side burners, outdoor refrigerators, sinks, countertops, and cabinetry. Gas line extension and electrical work managed by our licensed in-house trades team. A standard request on Potomac estate properties.</p></div>
                    <div className="card"><h3>Fire Pit &amp; Outdoor Fireplace</h3><p>Custom gas or wood-burning fire pits and outdoor fireplaces — designed as focal points for Potomac's outdoor entertaining areas. Gas line extensions permitted and installed in-house. Stone, stucco, and brick surround options available to complement the home's exterior materials.</p></div>
                    <div className="card"><h3>Grading, Drainage &amp; Retaining Walls</h3><p>Potomac's rolling topography frequently requires grading coordination, drainage planning, and retaining wall integration alongside patio installation. Improper drainage on sloped Potomac lots directs water toward foundations — addressed as part of every patio scope we plan.</p></div>
                </div>

                <h2>Common Patio Needs in Potomac</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Homeowner Need</th>
                                    <th>Potomac-Specific Considerations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Estate-scale outdoor living area</strong></td>
                                    <td>Potomac properties support multi-zone outdoor spaces — patio, dining area, lounge, kitchen, and fire feature as separate but connected zones. Scale, material quality, and landscape integration are all planned together rather than as isolated elements.</td>
                                </tr>
                                <tr>
                                    <td><strong>Pool surround patio</strong></td>
                                    <td>Material selection for pool surrounds balances aesthetics, slip resistance, and heat absorption — travertine and brushed concrete stay cooler underfoot than dark stone in Potomac's summer heat. Coordinated with pool coping and pool contractor schedule.</td>
                                </tr>
                                <tr>
                                    <td><strong>Outdoor kitchen addition</strong></td>
                                    <td>Full outdoor kitchen with gas grill, side burners, outdoor refrigerator, sink, and countertops — gas line extension from the home and electrical connections managed by our licensed in-house team. MoCo DPS permit required for gas and electrical.</td>
                                </tr>
                                <tr>
                                    <td><strong>Sloped lot patio with retaining walls</strong></td>
                                    <td>Potomac's rolling topography often requires a combination of retaining walls and patio terracing to create usable flat outdoor space. Walls over 30 inches require MoCo DPS permits and engineering review. DMV-GC coordinates both in-house.</td>
                                </tr>
                                <tr>
                                    <td><strong>Patio replacement on established property</strong></td>
                                    <td>Existing cracked or settled patio removed, subgrade assessed and improved, drainage corrected, and new premium material installed. Mature landscaping protected and integrated with new patio layout rather than removed and replaced.</td>
                                </tr>
                                <tr>
                                    <td><strong>HOA-governed patio scope</strong></td>
                                    <td>Some Avenel and planned Potomac communities have HOA ARC approval requirements for patio additions and exterior modifications. DMV-GC confirms HOA requirements at the consultation before any scope is finalized.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Patio Materials for Potomac Estate Properties</h2>
                <p>Potomac's large-lot estate homes — R-200 zoning, formal landscaping, and premium construction standards — call for patio materials matched to that level of investment. DMV General Contracting Group discusses material options at the free consultation and recommends based on the home's architecture, the project's intended use, pool adjacency, and the homeowner's long-term maintenance preferences.</p>
                <div className="card-grid">
                    <div className="card"><h3>🪨 Natural Bluestone</h3><p>The most popular choice for Potomac's traditional colonials and formal estates — cool gray tone, natural cleft or thermal finish, timeless appearance. Properly mortared for estate-scale patio installations. Holds up exceptionally well through Maryland's freeze-thaw cycles when correctly installed.</p></div>
                    <div className="card"><h3>🪨 Travertine</h3><p>Warm cream and tan tones with natural variation — the leading choice for Potomac's pool surrounds and outdoor kitchen areas. Tumbled travertine's porous surface provides natural slip resistance around pools. Requires sealing to prevent staining in outdoor kitchen areas.</p></div>
                    <div className="card"><h3>🪨 Limestone &amp; Fieldstone</h3><p>Natural limestone and local fieldstone complement Potomac's larger traditional and craftsman-style homes. Fieldstone is particularly well suited to naturalistic landscape settings where a more organic, less formal patio aesthetic is appropriate.</p></div>
                    <div className="card"><h3>🧱 Large-Format Porcelain Pavers</h3><p>24"×24" and 24"×48" porcelain in wood-look, stone-look, and solid-color finishes — a contemporary choice for Potomac's modern and transitional properties. Frost-rated porcelain required for outdoor use in Maryland. Non-porous surface is stain-resistant and easy to maintain.</p></div>
                    <div className="card"><h3>🏗️ Concrete Pavers (Large Format)</h3><p>Premium concrete pavers in large formats deliver the scale appropriate to Potomac's estate properties. Individual unit replacement is possible if damage occurs — an advantage over monolithic poured concrete at large scale. Wide color and texture range available.</p></div>
                    <div className="card"><h3>🪟 Stamped Concrete</h3><p>Custom stamped patterns and integral color — a cost-effective option for Potomac's very large pool decks and driveway aprons where natural stone is cost-prohibitive at scale. Properly sealed and periodically resealed. Less repairable than unit pavers if surface damage occurs.</p></div>
                </div>

                <h2>Why Choose DMV General Contracting Group for Patio Work in Potomac?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9 Rating</strong>
                        <span>97+ verified reviews</span>
                    </div>
                    <div className="trust-item">
                        <strong>MD MHIC #156178</strong>
                        <span>Licensed &amp; fully insured</span>
                    </div>
                    <div className="trust-item">
                        <strong>1-Year Warranty</strong>
                        <span>Workmanship guaranteed</span>
                    </div>
                    <div className="trust-item">
                        <strong>Estate-Scale Experience</strong>
                        <span>Potomac lots require it</span>
                    </div>
                </div>
                <div className="card-grid">
                    <div className="card"><h3>Estate-Scale Project Experience</h3><p>Potomac properties are not standard suburban lots. The scale, topography, mature tree canopy, formal landscaping, and premium construction standards of these homes require a contractor who has worked at this level — not a standard residential patio crew scaling up.</p></div>
                    <div className="card"><h3>All Trades In-House</h3><p>Gas line extensions, electrical connections, structural pergola footings, drainage, and grading — all coordinated under one design-build workflow. No separate subcontractors managing pieces of your outdoor project on different schedules.</p></div>
                    <div className="card"><h3>MoCo DPS Permit Expertise</h3><p>All Potomac patio permits filed with MoCo DPS at 2425 Reedie Drive, Wheaton — the correct office for unincorporated Potomac. Permit requirements confirmed at consultation. All filings and inspection coordination managed in-house.</p></div>
                    <div className="card"><h3>HOA &amp; R-200 Zoning Familiarity</h3><p>Avenel and other planned Potomac communities may have HOA ARC requirements for patio additions. R-200 setback requirements for structures. DMV-GC confirms all requirements before scope is finalized — no surprises after installation begins.</p></div>
                </div>

                <h2>Our Patio Installation Process in Potomac</h2>
                <div className="steps">
                    {processSteps.map(step => (
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
                <p>DMV General Contracting Group provides residential patio installation and outdoor living services throughout <strong>Potomac, MD</strong>, including Avenel, Potomac Village, Great Falls Road corridor, River Road communities, Persimmon Tree Road area, and surrounding Montgomery County communities including North Bethesda, Bethesda, Rockville, Cabin John, Chevy Chase, and Washington DC.</p>

                <div className="patio-banner">
                    <strong>Potomac Permit &amp; HOA Note:</strong> Potomac is unincorporated Montgomery County — all permits file with MoCo DPS at 2425 Reedie Drive, Wheaton. Avenel and some other planned Potomac communities have HOA Architectural Review Committee (ARC) requirements for exterior modifications including patio additions. DMV General Contracting Group confirms both permit and HOA requirements at the free consultation before any Potomac patio scope is finalized.
                </div>

                <h2>Frequently Asked Questions — Patio Installation in Potomac, MD</h2>
                <Accordion className="faq-list">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <h2>Explore Our Other Services in Potomac, MD</h2>
                <ul className="related-links">
                    <li><Link href="/service/decks/potomac-md">Deck Building in Potomac, MD</Link></li>
                    <li><Link href="/service/fence-installation/potomac-md">Fence Installation in Potomac, MD</Link></li>
                    <li><Link href="/service/home-additions/potomac-md">Home Additions in Potomac, MD</Link></li>
                    <li><Link href="/service/design-build/potomac-md">Design-Build Contractor in Potomac, MD</Link></li>
                    <li><Link href="/service/roofing/potomac-md">Roofing Services in Potomac, MD</Link></li>
                    <li><Link href="/service/concrete/potomac-md">Concrete Services in Potomac, MD</Link></li>
                </ul>

                <div className="cta-banner">
                    <h2>Need Patio Installation in Potomac, MD?</h2>
                    <p>Talk with DMV General Contracting Group about custom patio design, natural stone installation, pool surrounds, outdoor kitchens, pavilions, or a complete outdoor living space for your Potomac estate property. Free consultation, no obligation.</p>
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

export default PotomacMD;