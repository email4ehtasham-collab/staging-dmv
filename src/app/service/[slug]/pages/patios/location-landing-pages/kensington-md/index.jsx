'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const KensingtonMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Where are patio-related permits filed in Kensington, MD?",
            answer: "With the Town of Kensington at 3710 Mitchell Street, Kensington, MD 20895 — not Montgomery County DPS. Simple ground-level patios typically do not require a permit. Pergolas, outdoor kitchens with gas or electrical connections, and retaining walls require Town of Kensington permits. DMV General Contracting Group confirms requirements at the free consultation and manages all filings in-house."
        },
        {
            question: "Can a patio be installed near the mature trees in my Kensington yard?",
            answer: "Yes, with proper planning. Mature tree root zones extend well beyond the drip line — excavation too close to significant roots can permanently damage or kill the tree. DMV General Contracting Group assesses root zone proximity before any patio layout is finalized, adjusts the design to maintain safe setbacks where possible, and recommends permeable paver systems for areas where patio coverage within the root zone is unavoidable."
        },
        {
            question: "What patio material is most appropriate for a Kensington bungalow?",
            answer: "Irregular flagstone or Pennsylvania bluestone set in sand or mortar is the most period-appropriate and architecturally compatible choice for Kensington's craftsman bungalows — natural texture, organic appearance, and a look that ages well alongside mature landscaping. Reclaimed brick is also an excellent option for homes with brick exterior details. Concrete pavers in earth-tone, tumbled profiles are a practical lower-cost alternative. Large-format modern concrete slabs are generally not recommended for homes of this era and character."
        },
        {
            question: "Does my patio need drainage planning in Kensington?",
            answer: "Yes. Kensington's older lots often have compacted soils and established root systems that affect drainage. A new patio creates an impermeable surface that redirects rainwater — drainage slope must be planned away from the home's foundation. Where mature trees are adjacent, permeable paver systems allow water to continue reaching root zones. DMV General Contracting Group plans drainage as part of every Kensington patio scope."
        },
        {
            question: "How much does patio installation cost in Kensington, MD?",
            answer: "Kensington patio costs reflect the community's lot sizes — smaller and more intimate than Potomac estates, larger projects are less common. A concrete paver patio starts in the $7,000–$14,000 range. A natural flagstone or bluestone patio runs $14,000–$28,000+. A pergola or fire pit addition runs $10,000–$25,000+ depending on scope. DMV General Contracting Group provides a free, itemized estimate after reviewing the site."
        }
    ];

    return (
        <div className="city-service-detail-page patios-kensington-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/patios">Patios</Link><span>›</span>
                    Kensington, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Kensington, MD</div>
                    <h1>Patio Installation &amp; Design in Kensington, MD</h1>
                    <p>
                        Professional custom patio design and installation for Kensington homeowners — natural stone patios, flagstone, concrete pavers, pergolas, outdoor kitchens, and fire pits suited to Kensington's established lots and pre-1950 homes. Town of Kensington permits filed at 3710 Mitchell Street. Mature tree root zones assessed before any excavation begins.
                    </p>
                    <div className="hero-meta">
                        <span className="badge">🏛️ Town of Kensington Permit — 3710 Mitchell St</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                        <span className="badge">Licensed &amp; Insured</span>
                        <span className="badge">1-Year Workmanship Warranty</span>
                        <span className="badge">Free Consultation</span>
                    </div>
                </div>

                <div className="patio-banner">
                    <strong>Kensington Patio Expertise:</strong> Kensington's established residential lots — lined with mature tree canopy, original garden beds, and pre-1950 homes — present patio installation conditions that differ from newer suburban communities. Root zones from large trees affect excavation depth and patio placement. Smaller, more intimate lot sizes call for thoughtful space planning rather than large-format layouts. And the architectural character of Kensington's bungalows, foursquares, and colonials is best complemented by natural stone and period-appropriate materials. DMV General Contracting Group designs and installs patios that fit Kensington's character — and files all structural permits with the Town of Kensington at 3710 Mitchell Street, not MoCo DPS.
                </div>

                <h2>Complete Patio Services for Kensington Homes</h2>
                <div className="card-grid">
                    <div className="card"><h3>Custom Patio Design</h3><p>Work with our design team to create a patio that fits your Kensington lot, respects mature trees and existing garden beds, and complements your home's architectural character — whether a craftsman bungalow, a colonial, or a foursquare.</p></div>
                    <div className="card"><h3>Flagstone &amp; Natural Stone Patio</h3><p>Irregular bluestone, Pennsylvania bluestone, and flagstone set in sand or mortar — the most period-appropriate choice for Kensington's older homes. Natural variation in color and texture complements mature landscape settings and craftsman architectural details.</p></div>
                    <div className="card"><h3>Concrete Paver Patio</h3><p>Durable and repairable, concrete pavers in natural stone profiles offer a lower-cost alternative to natural stone while delivering a similar aesthetic. A practical choice for Kensington homeowners balancing budget and appearance.</p></div>
                    <div className="card"><h3>Brick Patio Installation</h3><p>Reclaimed or new brick in running bond, herringbone, or basket weave patterns — a period-authentic choice for Kensington's older colonials and foursquares, particularly for homes with original brick exterior details or chimneys.</p></div>
                    <div className="card"><h3>Pergola &amp; Shade Structure</h3><p>Custom wood or aluminum pergolas scaled to Kensington's smaller residential lots — providing shade, a defined outdoor room, and a complementary architectural element to the home. Town of Kensington permit required for structural pergolas.</p></div>
                    <div className="card"><h3>Outdoor Kitchen &amp; Grill</h3><p>Built-in grill stations and outdoor kitchen installations for Kensington homeowners — scaled appropriately to the lot and patio area. Gas line extension and electrical connections managed by our licensed in-house trades team.</p></div>
                    <div className="card"><h3>Fire Pit Installation</h3><p>Custom gas or wood-burning fire pits that create a gathering focal point in Kensington's intimate outdoor spaces. Gas line extensions permitted and installed in-house. Stone and brick surround options to complement existing home materials.</p></div>
                    <div className="card"><h3>Root Zone Protection &amp; Drainage</h3><p>Kensington's mature tree canopy is a defining characteristic of the community. Patio excavation assessed for proximity to tree root zones, with permeable patio options recommended where root protection is a priority. Drainage planned away from both the home and established trees.</p></div>
                </div>

                <h2>Common Patio Needs in Kensington</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Homeowner Need</th>
                                    <th>Kensington-Specific Considerations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>New patio for a pre-1950 bungalow or colonial</td>
                                    <td>Material selection that complements the home's architectural character — natural flagstone, bluestone, or brick rather than modern large-format pavers. Patio scale appropriate to Kensington's smaller residential lots.</td>
                                </tr>
                                <tr>
                                    <td>Patio installation near mature trees</td>
                                    <td>Root zone proximity assessed before excavation is planned. Permeable paver systems recommended where patio placement is within the drip line of significant trees. Excavation depth adjusted to avoid major root damage.</td>
                                </tr>
                                <tr>
                                    <td>Pergola or covered patio structure</td>
                                    <td>Town of Kensington permit required at 3710 Mitchell Street — not MoCo DPS. Structure scaled to complement the home and lot proportions typical of Kensington's established residential neighborhoods.</td>
                                </tr>
                                <tr>
                                    <td>Replacing a cracked or settled old patio</td>
                                    <td>Existing patio removed, subgrade assessed for drainage and soil conditions, base improved, and new material installed with correct drainage slope away from the home's foundation. Root intrusion from adjacent trees assessed if the original patio settled unevenly.</td>
                                </tr>
                                <tr>
                                    <td>Outdoor kitchen or fire pit addition</td>
                                    <td>Gas line extensions require Town of Kensington permits and coordination with the licensed gas trade. Scale planned to fit Kensington's lot sizes — full estate-scale outdoor kitchens are rare; functional built-in grill stations and compact fire features are the common request.</td>
                                </tr>
                                <tr>
                                    <td>Drainage improvement alongside patio</td>
                                    <td>Kensington's older lots may have drainage issues from decades of soil compaction and established root systems. New patio installation is an opportunity to correct drainage grades and protect the home's foundation at the same time.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Patio Materials That Suit Kensington's Character</h2>
                <p>Kensington's pre-1950 housing stock has a distinct architectural character — craftsman bungalows, American foursquares, and traditional colonials with mature landscaping and established garden settings. The right patio material reads as a natural extension of these homes; the wrong material reads as an addition that doesn't belong. DMV General Contracting Group discusses material options at the free consultation with Kensington's architectural character as the starting point.</p>
                <div className="card-grid">
                    <div className="card"><h3>🪨 Irregular Flagstone</h3><p>Natural irregular stone set in sand or mortar — the most organic-looking and period-appropriate choice for Kensington's craftsman and cottage-style homes. Wide joints filled with moss or creeping thyme integrate naturally into established garden settings. Available in bluestone, Pennsylvania flagstone, and quartzite.</p></div>
                    <div className="card"><h3>🪨 Pennsylvania Bluestone</h3><p>Cut in uniform rectangles or irregular shapes — bluestone's cool gray tone and natural texture complement Kensington's traditional colonials and foursquares. More formal than irregular flagstone; appropriate for homes with more structured garden layouts.</p></div>
                    <div className="card"><h3>🧱 Reclaimed or New Brick</h3><p>Running bond, herringbone, or basket weave patterns — brick is the most period-authentic choice for Kensington's older colonials and foursquares with brick details. Reclaimed brick from the same era as the home delivers the most authentic character.</p></div>
                    <div className="card"><h3>🧱 Concrete Pavers (Natural Stone Profile)</h3><p>Pavers in tumbled, aged, or natural stone textures — a durable, repairable alternative to natural stone at lower cost. Best choices for Kensington are earth-tone pavers in smaller unit sizes that read as period-appropriate rather than modern large-format slabs.</p></div>
                    <div className="card"><h3>🏗️ Stamped Concrete</h3><p>Stamped patterns and integral color — suitable for Kensington patio areas where budget is the primary driver. Cobblestone and slate patterns in warm earth tones read most naturally with Kensington's older homes. Less repairable than unit pavers if surface damage occurs.</p></div>
                    <div className="card"><h3>🌿 Permeable Pavers</h3><p>Permeable paver systems allow rainwater to pass through the patio surface into the soil below — recommended where patio installation is near the drip line of significant mature trees. Protects root zones while delivering an attractive, functional patio surface.</p></div>
                </div>

                <h2>Town of Kensington Permit — 3710 Mitchell Street</h2>
                <div className="patio-banner">
                    <strong>Kensington patio permits are NOT filed at Montgomery County DPS:</strong> Kensington is an incorporated municipality with its own permit office at <strong>3710 Mitchell Street, Kensington, MD 20895</strong> — separate from Montgomery County DPS at 2425 Reedie Drive, Wheaton. Structural elements of a patio project — pergolas, outdoor kitchens with gas or electrical connections, retaining walls over a certain height — require Town of Kensington building permits filed at 3710 Mitchell Street. A contractor filing these permits at MoCo DPS will be turned away. Simple ground-level patios typically do not require a permit. DMV General Contracting Group confirms permit requirements for every Kensington patio project at the free consultation and manages all Town filings in-house.
                </div>

                <h2>Why Choose DMV General Contracting Group for Patio Work in Kensington?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏛️</div>
                        <strong>Town Permit at 3710 Mitchell St</strong>
                        <span>Correct office, every time</span>
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
                    <div className="trust-item">
                        <div className="icon">🌳</div>
                        <strong>Root Zone Aware</strong>
                        <span>Mature tree protection</span>
                    </div>
                </div>
                <div className="card-grid">
                    <div className="card"><h3>Kensington Character Knowledge</h3><p>DMV-GC understands Kensington's architectural character — pre-1950 homes, established lots, mature canopy — and recommends patio materials and designs that complement these homes rather than clash with them.</p></div>
                    <div className="card"><h3>Correct Permit Office</h3><p>All Kensington structural patio permits filed at the Town of Kensington at 3710 Mitchell Street. We manage all Town correspondence, inspector scheduling, and permit tracking in-house. You do not contact the Town permit office.</p></div>
                    <div className="card"><h3>Mature Tree Assessment</h3><p>Root zones from Kensington's large mature trees assessed before any excavation is planned. Permeable paver options recommended where root protection is a priority. No significant root damage from patio installation on our watch.</p></div>
                    <div className="card"><h3>All Trades In-House</h3><p>Gas line extensions, electrical connections, and drainage coordination all managed by our licensed in-house trades team — not farmed out to separate subcontractors on different schedules.</p></div>
                </div>

                <h2>Our Patio Installation Process in Kensington</h2>
                <div className="steps">
                    {[
                        { num: 1, title: "Free Consultation & Site Visit", desc: "We visit your Kensington home, assess the outdoor space — lot size, existing landscape, mature trees, drainage conditions, home architecture — and discuss your patio vision and budget. Mature tree proximity noted at this stage. Free, no obligation." },
                        { num: 2, title: "Design & Material Selection", desc: "Patio layout designed to fit Kensington's lot proportions and complement the home's architectural character. Material selected with period-appropriateness in mind — natural stone, brick, or pavers appropriate to the home's era and style. Root zone setbacks incorporated into the layout where applicable." },
                        { num: 3, title: "Permit Confirmation & Filing", desc: "We confirm which elements of your Kensington patio project require Town of Kensington permits at 3710 Mitchell Street. All required permit applications prepared and filed before any installation begins. Town correspondence and inspection scheduling managed in-house." },
                        { num: 4, title: "Root Zone & Base Assessment", desc: "Before excavation begins, any mature tree root proximity is assessed and excavation approach adjusted accordingly. Permeable base system specified where root protection is the priority. Standard compacted gravel base for areas away from significant root zones." },
                        { num: 5, title: "Patio Installation", desc: "Natural stone, brick, or pavers installed on the prepared base per the design plan. Pergola or fire feature built out where included in scope. Gas and electrical rough-in completed by licensed in-house trades. Drainage integrated with the surrounding landscape." },
                        { num: 6, title: "Inspection & Completion", desc: "All required Town of Kensington inspections scheduled and managed. Work area cleaned — Kensington's established gardens protected during installation and restored at completion. Final walkthrough. Warranty documentation provided." }
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
                <p>DMV General Contracting Group provides residential patio installation and outdoor living services throughout <strong>Kensington, MD</strong> and surrounding communities — including Chevy Chase, North Bethesda, Bethesda, Silver Spring, Wheaton, Garrett Park, Rockville, and Washington DC.</p>

                <div className="patio-banner">
                    <strong>Kensington vs Neighboring Towns — Permit Office Reminder:</strong> The Town of Kensington permit office is at 3710 Mitchell Street. Neighboring Garrett Park files at 4600 Oxford Street (Town of Garrett Park). Unincorporated areas of Montgomery County surrounding Kensington file at MoCo DPS at 2425 Reedie Drive, Wheaton. If you are unsure which permit office applies to your property, DMV General Contracting Group confirms the correct jurisdiction at the free consultation.
                </div>

                <h2>Frequently Asked Questions — Patio Installation in Kensington, MD</h2>
                <Accordion className="faq-list">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <h2>Explore Our Other Services in Kensington, MD</h2>
                <ul className="related-links">
                    <li><Link href="/service/decks/kensington-md">Deck Building in Kensington, MD</Link></li>
                    <li><Link href="/service/fence-installation/kensington-md">Fence Installation in Kensington, MD</Link></li>
                    <li><Link href="/service/home-additions/kensington-md">Home Additions in Kensington, MD</Link></li>
                    <li><Link href="/service/design-build/kensington-md">Design-Build Contractor in Kensington, MD</Link></li>
                    <li><Link href="/service/electrical-services/kensington-md">Electrical Services in Kensington, MD</Link></li>
                    <li><Link href="/service/concrete/kensington-md">Concrete Services in Kensington, MD</Link></li>
                </ul>

                <div className="cta-banner">
                    <h2>Need Patio Installation in Kensington, MD?</h2>
                    <p>Talk with DMV General Contracting Group about custom patio design, natural stone or brick installation, pergolas, or outdoor kitchens for your Kensington home. Town of Kensington permits filed at 3710 Mitchell Street. Mature tree root zones assessed. Free consultation, no obligation.</p>
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

export default KensingtonMD;
