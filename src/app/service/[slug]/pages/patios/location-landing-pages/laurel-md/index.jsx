'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const LaurelMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Do I need a permit for a patio in Laurel, MD?",
            answer: "It depends on the exact scope and property. Montgomery County DPS determines applicable permitting requirements, while designated historic properties or properties in historic districts can have additional Historic Area Work Permit requirements. We review the project before construction."
        },
        {
            question: "What agency handles patio permits in Laurel?",
            answer: "Montgomery County's Department of Permitting Services handles county construction permitting and inspections. Historic properties subject to preservation rules may also require review through Montgomery Planning's Historic Preservation Commission."
        },
        {
            question: "Can you install a patio at a historic Laurel property?",
            answer: "Yes. Where a property is subject to Montgomery County historic-preservation requirements, exterior work can require a Historic Area Work Permit. Montgomery Planning specifically lists installing walkways and patios among work that may require HAWP review."
        },
        {
            question: "What patio material works well for a Laurel home?",
            answer: "Brick, bluestone, limestone, fieldstone and other natural or manufactured paving options can work well. The final selection depends on the home's architecture, landscape, drainage, intended use and applicable historic-preservation requirements."
        },
        {
            question: "Can a patio project include drainage, retaining walls or a pergola?",
            answer: "Yes. These features can be incorporated into a complete outdoor-living design. Because grading, retaining walls and structural elements can create additional requirements, the complete project scope is reviewed before permitting and construction."
        },
        {
            question: "How much does patio installation cost in Laurel, MD?",
            answer: "Patio cost depends on size, access, excavation, drainage, material, grading, base preparation and whether related structures or utility work are included. DMV General Contracting Group provides a free, itemized estimate after reviewing the property and project scope."
        }
    ];

    const processSteps = [
        { num: 1, title: "Free Consultation & Site Review", desc: "We visit your Laurel property, review the outdoor space, architecture, access, drainage, existing trees and proposed patio scope. Historic-property considerations are identified where applicable." },
        { num: 2, title: "Design & Material Selection", desc: "Patio layout and materials are selected around the home's architecture, site conditions and intended use. Brick, natural stone and other materials are evaluated for appearance, durability and maintenance." },
        { num: 3, title: "Montgomery County Permit Path Confirmed", desc: "Where permits are required, the applicable DPS building permit, site requirements and/or historic-preservation review are identified and coordinated before construction." },
        { num: 4, title: "Site & Base Preparation", desc: "Existing conditions are assessed before excavation. Base preparation, drainage slopes, grading and protection of existing landscape features are addressed before the patio surface is installed." },
        { num: 5, title: "Patio & Feature Installation", desc: "Stone, brick or selected paving material is installed on the prepared base. Pergolas, outdoor kitchens and related systems are coordinated with applicable structural and trade requirements." },
        { num: 6, title: "Inspection, Cleanup & Completion", desc: "Required inspections are coordinated, the work area is cleaned, and the completed patio is reviewed with the homeowner. Warranty documentation is provided at project close." }
    ];

    return (
        <div className="city-service-detail-page patios-laurel-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/patios">Patios</Link><span>›</span>
                    Laurel, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Laurel, MD</div>
                    <h1>Patio Installation &amp; Design in Laurel, MD</h1>
                    <p>
                        Professional custom patio design and installation for Laurel homeowners — natural bluestone, travertine, limestone, brick, fieldstone, pergolas and outdoor living spaces designed around the home's architecture, landscape and lot conditions. Montgomery County permit and historic-property requirements are reviewed for every project. Premium materials, careful site planning and professional installation.
                    </p>
                    <div className="hero-meta">
                        <span className="badge">🏛️ Montgomery County Permit Requirements — Confirmed by Project Scope</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                        <span className="badge">Licensed &amp; Insured</span>
                        <span className="badge">1-Year Workmanship Warranty</span>
                        <span className="badge">Free Consultation</span>
                    </div>
                </div>

                <div className="patio-banner">
                    <strong>Laurel Patio Expertise:</strong> Patio projects in Laurel are reviewed through Montgomery County's permitting system. The exact requirements depend on the scope of work, property conditions and whether the property is subject to historic-preservation requirements. DMV General Contracting Group reviews the site, confirms the applicable permit path and coordinates required approvals before construction begins.
                </div>

                <h2>Laurel Patio Permits — What to Confirm Before Work Begins</h2>

                <p>Laurel properties are served through Montgomery County's Department of Permitting Services (DPS). Depending on the project, patio construction can involve building permits, site or grading considerations, inspections and other county requirements. If a property is listed as a historic site or located in a designated historic district, exterior alterations can also require Historic Area Work Permit (HAWP) review through Montgomery Planning.</p>

                <div className="juris-grid">
                    <div className="juris-card">
                        <h3>🏛️ Montgomery County DPS</h3>
                        <p>DPS handles county construction permitting and inspections. Requirements depend on the patio scope, structural elements, grading and other applicable residential regulations.</p>
                    </div>
                    <div className="juris-card">
                        <h3>🏛️ Historic Preservation</h3>
                        <p>Designated historic properties and districts may require Historic Area Work Permit review for exterior alterations, including certain patio and site improvements.</p>
                    </div>
                    <div className="juris-card">
                        <h3>📐 Site &amp; Grading Review</h3>
                        <p>Excavation, grading, retaining walls and significant site changes can create additional review requirements. Existing grades and drainage are evaluated before installation.</p>
                    </div>
                    <div className="juris-card">
                        <h3>🌳 Tree &amp; Landscape Planning</h3>
                        <p>Patio layouts are planned around mature trees, landscape features, drainage patterns and property access before excavation begins.</p>
                    </div>
                    <div className="juris-card">
                        <h3>🚧 Right-of-Way Considerations</h3>
                        <p>Projects that affect public areas or the right-of-way can require additional county authorization. The project scope is reviewed before work starts.</p>
                    </div>
                    <div className="juris-card">
                        <h3>📋 Project-Specific Review</h3>
                        <p>Pergolas, retaining walls, outdoor kitchens, gas, electrical and other structural or utility work can trigger different permit or trade requirements.</p>
                    </div>
                </div>

                <div className="patio-banner">
                    <strong>Laurel permit reminder:</strong> Permit requirements are project-specific. Montgomery County DPS provides online permitting and inspection services, while Montgomery Planning handles Historic Area Work Permit review for applicable historic properties. DMV General Contracting Group confirms the requirements for your specific property before construction begins.
                </div>

                <h2>Complete Patio Services for Laurel Homes</h2>
                <div className="card-grid">
                    <div className="card"><h3>Custom Patio Design</h3><p>Patio layouts designed for Laurel homes, established gardens and residential outdoor spaces — including rear patios, garden terraces, dining areas and entertaining spaces.</p></div>
                    <div className="card"><h3>Natural Bluestone Patio</h3><p>Bluestone provides a durable, timeless surface for traditional and contemporary outdoor spaces. Natural cleft, thermal or sawn profiles can be selected according to the architecture and design.</p></div>
                    <div className="card"><h3>Travertine Patio &amp; Pool Surround</h3><p>Warm-toned travertine for outdoor entertaining areas and pool surrounds where its texture and surface characteristics are a good fit. Maintenance and sealing are reviewed during material selection.</p></div>
                    <div className="card"><h3>Brick Patio Installation</h3><p>Brick patios complement traditional homes and established landscapes. Running bond, herringbone and basket-weave patterns can be selected to coordinate with existing masonry.</p></div>
                    <div className="card"><h3>Limestone &amp; Fieldstone</h3><p>Natural limestone and fieldstone provide a more organic option for garden patios and landscape-focused outdoor spaces. Material, grading and drainage are considered together.</p></div>
                    <div className="card"><h3>Pergola &amp; Garden Structure</h3><p>Custom wood pergolas and garden structures sized for Laurel's outdoor spaces. Structural elements are reviewed for applicable Montgomery County requirements before construction.</p></div>
                    <div className="card"><h3>Outdoor Kitchen &amp; Entertaining Area</h3><p>Built-in grills, counters, outdoor refrigerators, sinks and storage can be integrated into the patio design. Gas, plumbing and electrical work are coordinated with applicable requirements.</p></div>
                    <div className="card"><h3>Drainage &amp; Site Planning</h3><p>Laurel properties can have mature landscaping, changing grades and established site features. Patio layouts are planned around drainage, access, trees and the relationship between the home and yard.</p></div>
                </div>

                <h2>Common Patio Needs in Laurel, MD</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Homeowner Need</th>
                                    <th>Laurel-Specific Considerations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>New backyard patio</strong></td>
                                    <td>Layout, access, grading, drainage, existing trees and the relationship between the house and rear yard are reviewed together before installation.</td>
                                </tr>
                                <tr>
                                    <td><strong>Patio for a traditional home</strong></td>
                                    <td>Brick, bluestone, limestone and fieldstone can complement traditional architecture and established landscapes. Final material selection is based on the property.</td>
                                </tr>
                                <tr>
                                    <td><strong>Garden terrace</strong></td>
                                    <td>Stone or brick terraces can be integrated with garden beds, mature trees, pathways and existing landscape features while maintaining practical drainage.</td>
                                </tr>
                                <tr>
                                    <td><strong>Outdoor kitchen</strong></td>
                                    <td>Natural stone or paver surfaces can be combined with counters, grills, storage, gas, plumbing and electrical systems. Applicable trade requirements are coordinated.</td>
                                </tr>
                                <tr>
                                    <td><strong>Replacing an old patio</strong></td>
                                    <td>Existing surface, subgrade, settlement and drainage are assessed before replacement. Permit requirements are confirmed based on the exact scope and property.</td>
                                </tr>
                                <tr>
                                    <td><strong>Pergola or garden structure</strong></td>
                                    <td>Wood pergolas are designed around the home's architecture and available outdoor space. Structural and permit requirements are reviewed before construction.</td>
                                </tr>
                                <tr>
                                    <td><strong>Patio at a historic property</strong></td>
                                    <td>If the property is designated or located in a historic district, exterior work can require Historic Area Work Permit review. Patio and walkway work are specifically identified by Montgomery Planning as potential HAWP work.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Patio Materials for Laurel Homes</h2>
                <p>Laurel includes established residential properties, mature landscapes and a mix of traditional and contemporary homes. The right patio material should complement the architecture and landscape while also performing well under the site's drainage, grading and maintenance conditions. For designated historic properties, exterior work may be subject to preservation review.</p>
                <div className="card-grid">
                    <div className="card"><h3>🪨 Natural Bluestone</h3><p>A durable, classic option for traditional homes and garden patios. Its natural texture works well in formal and informal outdoor settings and can be installed in irregular or uniform profiles.</p></div>
                    <div className="card"><h3>🪨 Travertine</h3><p>Warm cream and tan tones for pool surrounds and outdoor entertaining areas. Texture, slip resistance, sealing and long-term maintenance are considered during selection.</p></div>
                    <div className="card"><h3>🧱 Brick ✅ Traditional Choice</h3><p>Brick provides a classic appearance that can coordinate with traditional homes, masonry details and established gardens. Running bond and herringbone patterns offer flexible design options.</p></div>
                    <div className="card"><h3>🪨 Limestone &amp; Fieldstone</h3><p>Natural limestone and fieldstone suit garden properties where a more organic landscape connection is desired. Drainage and base preparation are planned with material selection.</p></div>
                    <div className="card"><h3>🧱 Concrete Pavers</h3><p>Concrete pavers can provide a practical alternative where budget, availability or design requirements call for them. Color, scale, texture and pattern are selected to fit the property.</p></div>
                    <div className="card"><h3>🏗️ Contemporary Materials</h3><p>Large-format porcelain and other contemporary materials can work well for some modern properties. Historic properties require additional compatibility review where preservation rules apply.</p></div>
                </div>

                <h2>Why Choose DMV General Contracting Group for Patio Work in Laurel?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏛️</div>
                        <strong>County Permit Coordination</strong>
                        <span>DPS, inspections &amp; historic review</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🪨</div>
                        <strong>Material Knowledge</strong>
                        <span>Bluestone, travertine, brick, limestone</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9 Rating</strong>
                        <span>97+ verified reviews</span>
                    </div>
                    <div className="trust-item">
                        <strong>MD MHIC #156178</strong>
                        <span>Licensed &amp; fully insured</span>
                    </div>
                </div>
                <div className="card-grid">
                    <div className="card"><h3>Montgomery County Permit Expertise</h3><p>We coordinate the applicable Montgomery County permitting path and review whether building, site, historic-preservation or other requirements apply to the project scope.</p></div>
                    <div className="card"><h3>Historic-Property Awareness</h3><p>Where exterior work is subject to Montgomery County historic-preservation requirements, the project is planned around the applicable Historic Area Work Permit process.</p></div>
                    <div className="card"><h3>Landscape &amp; Site Planning</h3><p>Mature trees, drainage, grading, access, existing structures and established landscaping are considered before the patio layout is finalized.</p></div>
                    <div className="card"><h3>All Trades Coordinated</h3><p>Patio installation, gas, electrical and related outdoor-living work can be coordinated through one design-build workflow, with licensed trades used where required.</p></div>
                </div>

                <h2>Our Patio Installation Process in Laurel</h2>
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
                <p>DMV General Contracting Group provides residential patio installation and outdoor living services throughout <strong>Laurel, MD</strong> and nearby Montgomery County communities, including Bethesda, Potomac, Brookmont, Glen Echo, North Bethesda and surrounding areas.</p>

                <div className="patio-banner">
                    <strong>Laurel Permit Reminder:</strong> Patio requirements depend on the exact project scope and property. Montgomery County Department of Permitting Services handles county permitting, while applicable historic properties may require Historic Area Work Permit review through Montgomery Planning. DMV General Contracting Group confirms the applicable path before work begins.
                </div>

                <h2>Frequently Asked Questions — Patio Installation in Laurel, MD</h2>
                <Accordion className="faq-list">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <h2>Explore Our Other Services in Laurel, MD</h2>
                <ul className="related-links">
                    <li><Link href="/service/decks/laurel-md">Deck Building in Laurel, MD</Link></li>
                    <li><Link href="/service/roofing/laurel-md">Roofing Services in Laurel, MD</Link></li>
                    <li><Link href="/service/home-additions/laurel-md">Home Additions in Laurel, MD</Link></li>
                    <li><Link href="/service/design-build/laurel-md">Design-Build Contractor in Laurel, MD</Link></li>
                    <li><Link href="/service/siding-installation/laurel-md">Siding Installation in Laurel, MD</Link></li>
                    <li><Link href="/service/electrical-services/laurel-md">Electrical Services in Laurel, MD</Link></li>
                </ul>

                <div className="cta-banner">
                    <h2>Need Patio Installation in Laurel, MD?</h2>
                    <p>Talk with DMV General Contracting Group about custom patio design for your Laurel property — Montgomery County permit requirements reviewed for the project, natural stone and brick options selected for the home's character, and site conditions assessed before construction. Free consultation, no obligation.</p>
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

export default LaurelMD;