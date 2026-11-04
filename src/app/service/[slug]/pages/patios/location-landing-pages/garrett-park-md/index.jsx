'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const GarrettParkMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Where are patio permits filed in Garrett Park, MD?",
            answer: "With the Town of Garrett Park at 4600 Oxford Street, Garrett Park, MD 20896 — not Montgomery County DPS. Simple ground-level patios typically do not require a permit. Structural elements — pergolas, outdoor kitchens with gas or electrical, retaining walls — require Town of Garrett Park permits. DMV General Contracting Group files all Garrett Park permits at 4600 Oxford Street and manages the full permit and inspection process in-house."
        },
        {
            question: "Does Garrett Park's historic district status affect my patio design choices?",
            answer: "It should — even where formal historic review is not required. Garrett Park's National Register Historic District character is best served by period-appropriate materials: natural stone, brick, and wood. Modern large-format porcelain, stamped concrete in contemporary patterns, and aluminum or vinyl structures contrast with — rather than complement — the community's historic character. DMV General Contracting Group recommends materials at the free consultation with Garrett Park's historic setting as the primary reference."
        },
        {
            question: "What patio material is most appropriate for a Garrett Park craftsman bungalow?",
            answer: "Irregular natural flagstone in a wide-joint sand or mortar setting is the most period-appropriate and visually compatible choice — it integrates with the bungalow's craftsman character and existing garden plantings as if it has always been there. Brick in running bond or herringbone is an excellent alternative, particularly for homes with brick exterior details. Pennsylvania bluestone in a more structured layout works well for homes with more formal garden settings."
        },
        {
            question: "My Garrett Park lot has large mature trees — will that affect patio installation?",
            answer: "Yes — root zone proximity is assessed at every Garrett Park patio consultation. Mature oak, maple, and elm root zones extend well beyond the drip line and can be damaged by excavation within that zone. DMV General Contracting Group adjusts the patio layout to maintain safe setbacks from significant roots where possible, and specifies permeable paving base systems where patio coverage within a root zone is unavoidable and the homeowner accepts the root proximity."
        },
        {
            question: "How much does patio installation cost in Garrett Park, MD?",
            answer: "Garrett Park patio costs reflect the community's preference for natural materials — stone and brick cost more than concrete pavers, and are the right choice for the historic district context. A natural flagstone or bluestone patio starts at $13,000–$28,000+. A brick patio runs $12,000–$25,000+. A wood pergola addition runs $10,000–$25,000+. DMV General Contracting Group provides a free, itemized estimate after reviewing the site."
        }
    ];

    return (
        <div className="city-service-detail-page patios-garrett-park-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/patios">Patios</Link><span>›</span>
                    Garrett Park, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Garrett Park, MD</div>
                    <h1>Patio Installation &amp; Design in Garrett Park, MD</h1>
                    <p>
                        Professional custom patio design and installation for Garrett Park homeowners — natural stone, flagstone, brick, and period-appropriate outdoor living spaces suited to Garrett Park's National Register Historic District homes. Town of Garrett Park permits filed at 4600 Oxford Street. Historic district character respected in every material and design recommendation.
                    </p>
                    <div className="hero-meta">
                        <span className="badge">🏛️ National Register Historic District</span>
                        <span className="badge">📋 Town Permit — 4600 Oxford Street</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                        <span className="badge">Licensed &amp; Insured</span>
                        <span className="badge">1-Year Workmanship Warranty</span>
                    </div>
                </div>

                <div className="patio-banner">
                    <strong>Garrett Park Patio Expertise:</strong> Garrett Park is one of Montgomery County's most distinctive communities — a National Register Historic District whose 1900s–1940s craftsman bungalows, American foursquares, and colonial revival homes sit on established lots with mature canopy and settled gardens. Patio installation here is not a standard suburban project. Materials must complement the community's historic character. Permit applications go to the Town of Garrett Park at 4600 Oxford Street — not MoCo DPS. And the mature trees and established root systems common on Garrett Park lots affect where and how excavation can proceed. DMV General Contracting Group designs and installs patios that belong in Garrett Park — and files every permit at the correct Town office.
                </div>

                <h2>Garrett Park's Historic District — What It Means for Patio Design</h2>

                <div className="patio-banner">
                    <strong>🏛️ National Register Historic District — Patio Design Considerations</strong><br />
                    Garrett Park's listing on the National Register of Historic Places reflects the community's remarkably intact collection of early 20th century residential architecture. While patio installation in rear yards and not visible from the street generally does not trigger formal historic review, the community's character calls for design and material choices that respect — rather than contrast with — its historic setting:
                    <ul style={{ marginTop: '10px', marginBottom: '0' }}>
                        <li><strong>Period-appropriate materials are the right starting point:</strong> Natural stone, brick, and wood have been part of Garrett Park's landscape for over a century. These materials age well, complement mature plantings, and read as belonging in a historic district. Modern large-format concrete slabs, contemporary porcelain tiles, and stamped concrete in bright or unusual colors do not.</li>
                        <li><strong>Structures visible from the street warrant additional care:</strong> Front yard features, street-visible pergola structures, and prominently placed outdoor elements should be designed with the community's historic streetscape in mind — not just the individual home. Natural wood pergolas and stone or brick features read as consistent with Garrett Park's character; aluminum and vinyl structures generally do not.</li>
                        <li><strong>Mature trees and root zones:</strong> Garrett Park's canopy — one of the community's defining characteristics — means mature tree root zones are present on most lots. Patio placement and excavation depth are assessed with root proximity in mind before any scope is finalized.</li>
                        <li><strong>Town of Garrett Park permit at 4600 Oxford Street:</strong> All structural patio elements require Town of Garrett Park permits — not MoCo DPS. DMV General Contracting Group files at the correct office as standard practice for every Garrett Park project.</li>
                    </ul>
                </div>

                <h2>Complete Patio Services for Garrett Park Homes</h2>
                <div className="card-grid">
                    <div className="card"><h3>Custom Patio Design</h3><p>Patio designs tailored to Garrett Park's historic home character — natural stone, brick, and wood as the primary material palette. Layouts that integrate with established garden settings and mature plantings rather than replacing them.</p></div>
                    <div className="card"><h3>Natural Stone Patio</h3><p>Bluestone, fieldstone, flagstone, and limestone — the most period-appropriate and architecturally compatible choices for Garrett Park's craftsman bungalows and colonial revival homes. Set in sand or mortar depending on the application and base conditions.</p></div>
                    <div className="card"><h3>Brick Patio Installation</h3><p>Reclaimed or new brick in traditional patterns — running bond, herringbone, or basket weave. Brick is deeply embedded in Garrett Park's architectural character and makes a natural, period-authentic patio surface for homes with brick exterior details or chimneys.</p></div>
                    <div className="card"><h3>Flagstone Stepping &amp; Garden Patio</h3><p>Irregular flagstone in wide-joint settings planted with ground cover or moss — the most naturalistic and garden-integrated patio option for Garrett Park's mature landscape settings. Looks as if it has been there as long as the home itself.</p></div>
                    <div className="card"><h3>Wood Pergola Installation</h3><p>Natural wood pergolas — cedar, pressure-treated, or ipe — that complement Garrett Park's craftsman and colonial architectural profiles. Town of Garrett Park permit required. Wood reads as period-appropriate in Garrett Park where aluminum and vinyl structures do not.</p></div>
                    <div className="card"><h3>Outdoor Kitchen &amp; Grill</h3><p>Built-in grill stations and outdoor kitchen installations scaled to Garrett Park's lots. Natural stone countertops and wood or stone surround preferred for compatibility with the historic district character. Gas line and electrical work managed in-house.</p></div>
                    <div className="card"><h3>Fire Pit Installation</h3><p>Custom stone or brick fire pits — gas or wood-burning — that serve as natural gathering points in Garrett Park's garden settings. Stone and brick surround materials match the period-appropriate palette. Town permit required for gas line extensions.</p></div>
                    <div className="card"><h3>Root Zone &amp; Drainage Planning</h3><p>Garrett Park's mature canopy means root zone assessment is standard before any patio excavation is planned. Permeable paving options recommended where patio placement falls within the drip line of significant trees. Drainage planned to protect both home and trees.</p></div>
                </div>

                <h2>Common Patio Needs in Garrett Park</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Homeowner Need</th>
                                    <th>Garrett Park-Specific Considerations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>New patio for a craftsman bungalow</td>
                                    <td>Natural flagstone or irregular bluestone in a wide-joint setting is the most period-appropriate and visually compatible choice — integrates with the bungalow's craftsman character and existing garden plantings. Brick is also an excellent option where the home has brick details.</td>
                                </tr>
                                <tr>
                                    <td>Rear garden patio with mature trees</td>
                                    <td>Root zones from mature oaks, maples, and elms assessed before excavation is planned. Patio layout adjusted to preserve root zones where possible. Permeable paver base specified where patio coverage within the root zone is unavoidable.</td>
                                </tr>
                                <tr>
                                    <td>Pergola addition</td>
                                    <td>Natural wood pergola in cedar or ipe — Town of Garrett Park permit at 4600 Oxford Street. Structure designed to complement the home's architectural profile and the community's historic character. Aluminum and vinyl structures not recommended for Garrett Park's historic setting.</td>
                                </tr>
                                <tr>
                                    <td>Fire pit or outdoor fireplace</td>
                                    <td>Stone or brick surround in natural materials consistent with the period-appropriate palette. Gas fire pit requires Town of Garrett Park permit for gas line extension. Wood-burning fire pit with a stone or brick surround is the most authentic option for Garrett Park's historic setting.</td>
                                </tr>
                                <tr>
                                    <td>Replacing an old concrete or bluestone patio</td>
                                    <td>Existing surface removed, subgrade assessed, drainage corrected, and new period-appropriate material installed. Where the original patio was bluestone or brick, replacement in the same material maintains the historic character of the outdoor space.</td>
                                </tr>
                                <tr>
                                    <td>Front yard patio or terrace</td>
                                    <td>Front yard features visible from the street warrant careful material selection for compatibility with Garrett Park's historic streetscape. Natural stone and brick are appropriate; modern materials that contrast with the community's character are not. Town of Garrett Park permit required for structural elements.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Town of Garrett Park Permit — 4600 Oxford Street</h2>
                <div className="patio-banner">
                    <strong>Garrett Park patio permits are NOT filed at Montgomery County DPS:</strong> Garrett Park is an incorporated municipality with its own permit office at <strong>4600 Oxford Street, Garrett Park, MD 20896</strong> — entirely separate from Montgomery County DPS at 2425 Reedie Drive, Wheaton. Structural patio elements — pergolas, outdoor kitchens with gas or electrical connections, retaining walls — require Town of Garrett Park permits filed at 4600 Oxford Street. A contractor filing Garrett Park permits at MoCo DPS will be turned away. Simple ground-level patios typically do not require a permit. DMV General Contracting Group files all Garrett Park structural patio permits at 4600 Oxford Street and manages all Town correspondence and inspection coordination in-house — you do not contact the Town permit office.
                </div>

                <h2>Period-Appropriate Patio Materials for Garrett Park</h2>
                <p>Garrett Park's historic district character is best served by materials that have always been part of American residential landscape design — stone, brick, and wood. These materials complement the community's 1900s–1940s homes, age gracefully alongside mature plantings, and belong in a National Register Historic District in a way that contemporary materials simply do not.</p>
                <div className="card-grid">
                    <div className="card"><h3>🪨 Natural Flagstone ✅ Most Recommended</h3><p>Irregular Pennsylvania flagstone, bluestone, or quartzite set in a wide-joint sand or mortar bed — the most organically appropriate patio material for Garrett Park's garden-oriented lots. Natural variation in color and texture integrates seamlessly with established plantings and mature canopy. Wide joints planted with creeping thyme or moss reinforce the naturalistic character.</p></div>
                    <div className="card"><h3>🪨 Pennsylvania Bluestone ✅ Recommended</h3><p>Uniform-cut or irregular bluestone — cool gray tone and natural texture that complement both craftsman and colonial revival architectural profiles. More formal than irregular flagstone; appropriate for homes with more structured garden layouts or for rear terraces adjacent to the home's primary door.</p></div>
                    <div className="card"><h3>🧱 Reclaimed or New Brick ✅ Recommended</h3><p>Running bond, herringbone, or basket weave patterns in reclaimed or new brick — deeply embedded in early American residential character and architecturally compatible with Garrett Park's homes. Reclaimed brick from a comparable era delivers the most authentic character. Warm tone, durable, repairable.</p></div>
                    <div className="card"><h3>🪨 Fieldstone ✅ Naturalistic Settings</h3><p>Local fieldstone in dry-laid or mortared settings — the most naturalistic and least formal option for Garrett Park's garden settings. Well suited to homes with naturalistic landscape designs and lots where an organic, settled character is the goal.</p></div>
                    <div className="card"><h3>🧱 Concrete Pavers ⚠️ Period Profile Only</h3><p>If budget requires concrete pavers, only earth-tone tumbled or aged-profile units in smaller sizes read as period-compatible in Garrett Park. Large-format modern pavers in contemporary colors are not appropriate. Even with the right pavers, natural stone and brick are the preferred choices for the historic district context.</p></div>
                    <div className="card"><h3>🏗️ Stamped Concrete / Porcelain ❌ Not Recommended</h3><p>Modern stamped concrete patterns and large-format porcelain pavers are not compatible with Garrett Park's National Register Historic District character. These materials read as contemporary additions that contrast with — rather than complement — the community's historic architectural setting.</p></div>
                </div>

                <h2>Why Choose DMV General Contracting Group for Patio Work in Garrett Park?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏛️</div>
                        <strong>Historic District Experience</strong>
                        <span>Period materials, correct permit office</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>4600 Oxford Street</strong>
                        <span>Town permit filed correctly</span>
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
                    <div className="card"><h3>Historic District Material Knowledge</h3><p>DMV-GC recommends patio materials with Garrett Park's National Register Historic District character as the primary reference — natural stone, brick, and wood first. Modern materials that conflict with the historic setting are not recommended, regardless of cost or convenience.</p></div>
                    <div className="card"><h3>Correct Permit Office</h3><p>All Garrett Park structural patio permits filed at the Town of Garrett Park at 4600 Oxford Street — not MoCo DPS. Town correspondence and inspection scheduling managed in-house. You do not contact the Town permit office at any point.</p></div>
                    <div className="card"><h3>Root Zone Assessment</h3><p>Garrett Park's mature tree canopy is a defining community characteristic. Root zones assessed before any patio layout is finalized. Permeable paving options recommended where tree proximity warrants it. No significant root damage on our projects.</p></div>
                    <div className="card"><h3>All Trades In-House</h3><p>Gas line extensions, electrical connections, and patio installation all coordinated under one design-build workflow. No separate subcontractors managing different pieces of your Garrett Park patio project on different schedules.</p></div>
                </div>

                <h2>Our Patio Installation Process in Garrett Park</h2>
                <div className="steps">
                    {[
                        { num: 1, title: "Free Consultation & Historic Assessment", desc: "We visit your Garrett Park home, assess the outdoor space — lot character, mature trees, existing garden features, architectural profile — and discuss material options appropriate to the historic district setting. Town permit requirements confirmed. Root zone proximity noted. Free, no obligation." },
                        { num: 2, title: "Design & Period-Appropriate Material Selection", desc: "Patio layout and materials selected with Garrett Park's historic character as the guiding framework — natural stone, brick, or wood preferred. Root zone setbacks incorporated into the layout. Design that integrates with existing garden plantings rather than replacing them." },
                        { num: 3, title: "Town of Garrett Park Permit at 4600 Oxford Street", desc: "All required structural patio permits prepared and filed with the Town of Garrett Park at 4600 Oxford Street. Town correspondence managed in-house. Permit approval tracked and Town inspections scheduled by our permit team. You do not contact the Town office." },
                        { num: 4, title: "Root Zone & Base Preparation", desc: "Tree root proximity assessed before excavation begins. Excavation adjusted to maintain safe setback from significant roots. Standard compacted gravel base where away from roots; permeable base where root zone protection warrants it. Drainage slope established away from both home and trees." },
                        { num: 5, title: "Patio & Feature Installation", desc: "Natural stone, brick, or period-appropriate pavers installed on the prepared base. Wood pergola framed where included. Stone or brick fire feature constructed. Gas and electrical work completed by licensed in-house trades where applicable. Existing garden plantings protected throughout installation." },
                        { num: 6, title: "Town Inspection, Cleanup & Completion", desc: "All required Town of Garrett Park inspections scheduled and managed. Work area cleaned — Garrett Park's established gardens protected during installation and restored at completion. Final walkthrough. Warranty documentation provided at project close." }
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
                <p>DMV General Contracting Group provides residential patio installation and outdoor living services throughout <strong>Garrett Park, MD</strong> and surrounding communities — including Kensington, North Bethesda, Bethesda, Rockville, Wheaton, Silver Spring, Chevy Chase, and Cabin John.</p>

                <div className="patio-banner">
                    <strong>Garrett Park vs Neighboring Communities — Permit Office Reminder:</strong> Town of Garrett Park at 4600 Oxford Street covers Garrett Park properties. Neighboring Kensington files at the Town of Kensington at 3710 Mitchell Street. Unincorporated Montgomery County areas surrounding both towns file at MoCo DPS at 2425 Reedie Drive, Wheaton. Each is a separate office — filing at the wrong one means no permit is issued. DMV General Contracting Group confirms the correct jurisdiction for every project at the free consultation.
                </div>

                <h2>Frequently Asked Questions — Patio Installation in Garrett Park, MD</h2>
                <Accordion className="faq-list">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <h2>Explore Our Other Services in Garrett Park, MD</h2>
                <ul className="related-links">
                    <li><Link href="/service/decks/garrett-park-md">Deck Building in Garrett Park, MD</Link></li>
                    <li><Link href="/service/roofing/garrett-park-md">Roofing Services in Garrett Park, MD</Link></li>
                    <li><Link href="/service/home-additions/garrett-park-md">Home Additions in Garrett Park, MD</Link></li>
                    <li><Link href="/service/siding-installation/garrett-park-md">Siding Installation in Garrett Park, MD</Link></li>
                    <li><Link href="/service/design-build/garrett-park-md">Design-Build Contractor in Garrett Park, MD</Link></li>
                    <li><Link href="/service/electrical-services/garrett-park-md">Electrical Services in Garrett Park, MD</Link></li>
                </ul>

                <div className="cta-banner">
                    <h2>Need Patio Installation in Garrett Park, MD?</h2>
                    <p>Talk with DMV General Contracting Group about period-appropriate patio design for your Garrett Park home — natural stone, brick, and wood materials; Town of Garrett Park permit at 4600 Oxford Street; mature tree root zones assessed. Free consultation, no obligation.</p>
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

export default GarrettParkMD;
