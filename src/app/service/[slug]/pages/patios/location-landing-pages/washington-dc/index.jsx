'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const WashingtonDC = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Do I need a permit for a patio in Washington DC?",
            answer: "It depends on the exact scope and property. DC DOB states that certain replacement-in-kind patios may not require a building permit when the property is not in a historic district. Historic properties can have additional preservation-review requirements, and structural features or work in public space can require additional approvals."
        },
        {
            question: "What agency handles patio permits in Washington DC?",
            answer: "The Department of Buildings (DOB) handles construction permitting. If work occupies or affects public space, a DDOT public-space permit may also be required. Historic properties may receive Historic Preservation Office review as part of the building-permit process."
        },
        {
            question: "Can you install a patio at a historic DC property?",
            answer: "Yes. Patio and compatible site alterations can be reviewed through DC's historic-preservation process when applicable. The project should be designed to respect the property's historic character and applicable review standards before the permit application is finalized."
        },
        {
            question: "What patio material works well with a Washington DC rowhouse?",
            answer: "Brick and natural stone are common period-conscious choices for traditional DC properties. The final selection depends on the home's architecture, existing masonry, garden design, drainage and — for historic properties — applicable preservation requirements."
        },
        {
            question: "Does a patio project need a building plat in Washington DC?",
            answer: "Exterior permit work can require a building plat showing existing and proposed improvements. DC's Office of the Surveyor provides building plat services and requires plats for certain exterior permit work."
        },
        {
            question: "How much does patio installation cost in Washington DC?",
            answer: "Patio cost depends on size, access, excavation, drainage, material, site conditions and whether related structures or utility work are included. DMV General Contracting Group provides a free, itemized estimate after reviewing the property and project scope."
        }
    ];

    return (
        <div className="city-service-detail-page patios-washington-dc">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/patios">Patios</Link><span>›</span>
                    Washington, DC
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Washington, DC</div>
                    <h1>Patio Installation &amp; Design in Washington DC</h1>
                    <p>
                        Professional custom patio design and installation for Washington DC homeowners — natural bluestone, travertine, limestone, brick, pergolas and outdoor living spaces suited to rowhouses, detached homes, historic properties and urban gardens. DC permit and historic-property requirements reviewed for every project. Premium materials, thoughtful site planning and professional installation.
                    </p>
                    <div className="hero-meta">
                        <span className="badge">🏛️ DC Permit Requirements — Confirmed by Project Scope</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                        <span className="badge">Licensed &amp; Insured</span>
                        <span className="badge">1-Year Workmanship Warranty</span>
                        <span className="badge">Free Consultation</span>
                    </div>
                </div>

                <div className="patio-banner">
                    <strong>Washington DC Patio Expertise:</strong> Patio projects in the District can involve Department of Buildings (DOB) permitting, public-space requirements and — for historic properties — Historic Preservation Office review. The exact requirements depend on the scope and property. DMV General Contracting Group reviews the site, confirms the applicable DC permit path and coordinates required approvals before structural patio work begins.
                </div>

                <h2>Washington DC Patio Permits — What to Confirm Before Work Begins</h2>

                <p>Washington DC uses a District-wide permitting system rather than separate municipal permit offices. The Department of Buildings (DOB) handles construction permitting, while the District Department of Transportation (DDOT) handles public-space permits when work occupies or affects public space. Historic properties can also require Historic Preservation Office (HPO) review as part of the building-permit process.</p>

                <div className="juris-grid">
                    <div className="juris-card">
                        <h3>🏛️ DC Department of Buildings</h3>
                        <ul>
                            <li>DOB regulates construction activity and issues building permits. Requirements depend on the patio scope, structural elements, site work and applicable residential requirements.</li>
                        </ul>
                    </div>
                    <div className="juris-card">
                        <h3>🏛️ Historic Preservation Office</h3>
                        <ul>
                            <li>Historic properties may require preservation review when permitted work affects exterior appearance. Compatible patio and site alterations can qualify for HPO review pathways.</li>
                        </ul>
                    </div>
                    <div className="juris-card">
                        <h3>🚧 DDOT Public Space</h3>
                        <ul>
                            <li>Work in public space — including certain front patios, sidewalks, retaining walls, fences and construction activity — may require a DDOT public-space permit.</li>
                        </ul>
                    </div>
                    <div className="juris-card">
                        <h3>📐 Building Plat</h3>
                        <ul>
                            <li>Exterior permit work can require a building plat showing existing and proposed improvements. DC's Office of the Surveyor provides building plat services.</li>
                        </ul>
                    </div>
                    <div className="juris-card">
                        <h3>🌳 Site &amp; Tree Planning</h3>
                        <ul>
                            <li>DC building plats can require qualifying existing trees and site improvements to be shown. Patio layouts are reviewed around existing landscape conditions before excavation.</li>
                        </ul>
                    </div>
                    <div className="juris-card">
                        <h3>📋 Project-Specific Review</h3>
                        <ul>
                            <li>Patio scope, retaining walls, pergolas, outdoor kitchens, gas, electrical and other structural work can trigger different permit or trade requirements. The exact scope is confirmed before filing.</li>
                        </ul>
                    </div>
                </div>

                <div className="patio-banner">
                    <strong>Washington DC permit reminder:</strong> DC DOB states that certain replacement-in-kind patios may not require a building permit when the property is not in a historic district. Historic properties can have additional preservation-review requirements. Structural features and work affecting public space may require additional permits or approvals. DMV General Contracting Group confirms the requirements for your specific project before work begins.
                </div>

                <h2>Complete Patio Services for Washington DC Homes</h2>
                <div className="card-grid">
                    <div className="card"><h3>Custom Patio Design</h3><p>Patio layouts designed for Washington DC rowhouses, detached homes, historic properties and compact urban outdoor spaces — including rear patios, garden terraces and entertaining areas.</p></div>
                    <div className="card"><h3>Natural Bluestone Patio</h3><p>Bluestone provides a durable, timeless surface for traditional DC homes and garden settings. Available in irregular natural cleft or formal thermal/sawn profiles depending on the architecture.</p></div>
                    <div className="card"><h3>Travertine Patio &amp; Pool Surround</h3><p>Warm-toned travertine for pool surrounds and outdoor living areas where its texture and surface characteristics are a good fit. Sealing and maintenance are reviewed during material selection.</p></div>
                    <div className="card"><h3>Brick Patio Installation</h3><p>Brick patios work especially well with Washington DC's historic rowhouses and traditional detached homes. Running bond, herringbone and basket-weave patterns can complement existing masonry.</p></div>
                    <div className="card"><h3>Limestone &amp; Fieldstone</h3><p>Natural limestone and fieldstone provide options for garden patios and less formal landscape settings. Material, grading and drainage are considered together before installation.</p></div>
                    <div className="card"><h3>Pergola &amp; Garden Structure</h3><p>Custom wood pergolas and garden structures sized for DC outdoor spaces. Structural elements are reviewed for applicable DOB permit requirements before construction.</p></div>
                    <div className="card"><h3>Outdoor Kitchen &amp; Entertaining Area</h3><p>Built-in grills, counters, outdoor refrigerators, sinks and storage can be integrated into a patio design. Gas, plumbing and electrical work are coordinated with applicable DC requirements.</p></div>
                    <div className="card"><h3>Urban Drainage &amp; Site Planning</h3><p>DC properties often have compact lots and challenging grade transitions. Patio layouts are planned around drainage, access, existing trees and the relationship between the home and rear yard.</p></div>
                </div>

                <h2>Common Patio Needs in Washington DC</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Homeowner Need</th>
                                    <th>Washington DC-Specific Considerations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>New patio for a historic rowhouse</td>
                                    <td>Brick or natural stone can complement traditional DC architecture. Historic-district status should be checked because preservation review may apply.</td>
                                </tr>
                                <tr>
                                    <td>Rear garden patio</td>
                                    <td>Compact-lot planning, drainage, rear-yard access, existing structures and landscape conditions are reviewed together. Permit requirements depend on the exact scope.</td>
                                </tr>
                                <tr>
                                    <td>Formal garden terrace</td>
                                    <td>Stone or brick terrace integrated with existing garden beds, fences and mature trees. Layout is planned around established site features.</td>
                                </tr>
                                <tr>
                                    <td>Outdoor kitchen</td>
                                    <td>Natural stone countertops and durable patio materials can be combined with gas, plumbing and electrical systems. Applicable trade and building requirements are coordinated.</td>
                                </tr>
                                <tr>
                                    <td>Replacing an old patio</td>
                                    <td>Existing surface and subgrade are assessed for settlement and drainage. Replacement-in-kind may qualify for an exemption in certain non-historic situations, while historic properties can have additional review requirements.</td>
                                </tr>
                                <tr>
                                    <td>Pergola or garden structure</td>
                                    <td>Wood pergolas are designed around the home's architecture and lot size. Structural work is reviewed for DOB permitting and, where applicable, historic-preservation requirements.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Patio Materials for Washington DC Homes</h2>
                <p>Washington DC includes historic rowhouses, traditional detached homes, garden properties and newer residences. The right patio material should complement the architecture and landscape rather than compete with it. For historic properties, exterior work may be subject to preservation review. DMV General Contracting Group recommends materials based on the home's architectural profile, site conditions and project scope.</p>
                <div className="card-grid">
                    <div className="card"><h3>🪨 Natural Bluestone</h3><p>A durable, classic option for traditional DC homes and garden patios. Its natural texture works well in formal and informal outdoor settings and can be installed in irregular or uniform profiles.</p></div>
                    <div className="card"><h3>🪨 Travertine</h3><p>Warm cream and tan tones for pool surrounds and outdoor entertaining areas. Texture, slip resistance, sealing and long-term maintenance are considered during selection.</p></div>
                    <div className="card"><h3>🧱 Brick ✅ Traditional Choice</h3><p>Brick is particularly compatible with Washington DC's historic rowhouses and traditional architecture. Running bond and herringbone patterns provide period-conscious options.</p></div>
                    <div className="card"><h3>🪨 Limestone &amp; Fieldstone</h3><p>Natural limestone and fieldstone suit garden properties where a more organic landscape connection is desired. Drainage and base preparation are planned with material selection.</p></div>
                    <div className="card"><h3>🧱 Concrete Pavers</h3><p>Concrete pavers can provide a practical alternative where budget, availability or design requirements call for them. Color, scale, texture and pattern are selected to fit the property.</p></div>
                    <div className="card"><h3>🏗️ Contemporary Materials</h3><p>Large-format porcelain and other contemporary materials can be appropriate for some modern DC properties. For historic properties, compatibility with historic character should be reviewed before selection.</p></div>
                </div>

                <h2>Why Choose DMV General Contracting Group for Patio Work in Washington DC?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏛️</div>
                        <strong>DC Permit Coordination</strong>
                        <span>DOB, historic review &amp; public space</span>
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
                        <strong>DC DLCP #410526000209</strong>
                        <span>Licensed &amp; fully insured</span>
                    </div>
                </div>
                <div className="card-grid">
                    <div className="card"><h3>DC Permit Expertise</h3><p>We coordinate the applicable DC permitting path and review whether DOB, HPO or DDOT requirements apply to the project scope. Requirements are confirmed before structural work begins.</p></div>
                    <div className="card"><h3>Historic-Property Awareness</h3><p>Washington DC has extensive historic properties and districts. Where exterior work requires preservation review, the project is planned around the applicable historic-property process.</p></div>
                    <div className="card"><h3>Urban Site Planning</h3><p>Compact lots, rear-yard access, drainage, existing structures and mature landscaping are considered before the patio layout is finalized.</p></div>
                    <div className="card"><h3>All Trades Coordinated</h3><p>Patio installation, gas, electrical and related outdoor-living work can be coordinated through one design-build workflow, with licensed trades used where required.</p></div>
                </div>

                <h2>Our Patio Installation Process in Washington DC</h2>
                <div className="steps">
                    {[
                        { num: 1, title: "Free Consultation & Site Review", desc: "We visit your DC property, review the outdoor space, architecture, access, drainage, existing trees and proposed patio scope. Historic-district and public-space considerations are identified where applicable." },
                        { num: 2, title: "Design & Material Selection", desc: "Patio layout and materials are selected around the home's architecture, site conditions and intended use. Brick, natural stone and other materials are evaluated for compatibility and maintenance." },
                        { num: 3, title: "DC Permit Path Confirmed", desc: "Where permits are required, the applicable DOB building permit, historic-preservation review and/or DDOT public-space requirements are identified and coordinated before construction." },
                        { num: 4, title: "Site & Base Preparation", desc: "Existing conditions are assessed before excavation. Base preparation, drainage slopes, grading and protection of existing landscape features are addressed before the patio surface is installed." },
                        { num: 5, title: "Patio & Feature Installation", desc: "Stone, brick or selected paving material is installed on the prepared base. Pergolas, outdoor kitchens and related systems are coordinated with applicable structural and trade requirements." },
                        { num: 6, title: "Inspection, Cleanup & Completion", desc: "Required inspections are coordinated, the work area is cleaned, and the completed patio is reviewed with the homeowner. Warranty documentation is provided at project close." }
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
                <p>DMV General Contracting Group provides residential patio installation and outdoor living services throughout <strong>Washington DC</strong>, including residential areas across the District. We also serve nearby Maryland communities including Bethesda, Chevy Chase, Kensington, North Bethesda and Silver Spring.</p>

                <div className="patio-banner">
                    <strong>Washington DC Permit Reminder:</strong> Patio requirements depend on the exact project scope and property. DOB handles construction permits, DDOT handles applicable public-space permits, and historic properties may require HPO review when permitted exterior work affects historic character. DMV General Contracting Group confirms the applicable path before work begins.
                </div>

                <h2>Frequently Asked Questions — Patio Installation in Washington DC</h2>
                <Accordion className="faq-list">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <h2>Explore Our Other Services in Washington, DC</h2>
                <ul className="related-links">
                    <li><Link href="/service/decks/washington-dc">Deck Building in Washington, DC</Link></li>
                    <li><Link href="/service/roofing/washington-dc">Roofing Services in Washington, DC</Link></li>
                    <li><Link href="/service/home-additions/washington-dc">Home Additions in Washington, DC</Link></li>
                    <li><Link href="/service/design-build/washington-dc">Design-Build Contractor in Washington, DC</Link></li>
                    <li><Link href="/service/siding-installation/washington-dc">Siding Installation in Washington, DC</Link></li>
                    <li><Link href="/service/electrical-services/washington-dc">Electrical Services in Washington, DC</Link></li>
                </ul>

                <div className="cta-banner">
                    <h2>Need Patio Installation in Washington, DC?</h2>
                    <p>Talk with DMV General Contracting Group about custom patio design for your Washington DC property — DC permit requirements reviewed for the property, period-appropriate natural stone and brick options, and site conditions assessed. Free consultation, no obligation.</p>
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

export default WashingtonDC;