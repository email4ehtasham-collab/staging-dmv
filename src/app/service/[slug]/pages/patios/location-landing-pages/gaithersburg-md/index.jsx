'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const GaithersburgMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Which permit office covers my Gaithersburg patio project?",
            answer: "It depends on your community. Kentlands and Lakelands file with the City of Gaithersburg DPW. Crown Farm, Washingtonian Woods, and most other Gaithersburg communities file with MoCo DPS at 2425 Reedie Drive, Wheaton. Your mailing address and zip code alone do not determine which office applies. DMV General Contracting Group confirms the correct permit jurisdiction for your specific Gaithersburg address at the free consultation before any permit is prepared."
        },
        {
            question: "Does my Kentlands patio need ARC approval?",
            answer: "Yes, in most cases. Kentlands' Architectural Review Committee requires approval for exterior modifications including structural patio elements — pergolas, outdoor kitchens, and features visible from the street or neighboring properties. DMV General Contracting Group prepares all ARC documentation, submits on your behalf, and coordinates the ARC and City of Gaithersburg DPW permit processes concurrently."
        },
        {
            question: "What patio material is most appropriate for a Kentlands home?",
            answer: "Brick and natural bluestone are the most architecturally compatible choices for Kentlands' new urbanist character — they reference the community's brick-heavy streetscapes and traditional building vocabulary. Concrete pavers in earth-tone, tumbled profiles are a practical lower-cost alternative. Large-format modern porcelain slabs generally do not suit Kentlands' traditional architectural character. DMV General Contracting Group discusses material options with each Kentlands home's specific profile in mind."
        },
        {
            question: "My Gaithersburg townhome has a small rear courtyard — can a patio still work?",
            answer: "Yes. Kentlands and Lakelands townhome rear courtyards are compact, but a well-designed patio transforms them into genuinely usable outdoor space. DMV General Contracting Group specializes in small-space outdoor design — efficient layouts, a compact pergola or trellis structure for vertical interest, built-in seating where applicable, and material choices that make a small space feel complete and intentional rather than leftover."
        },
        {
            question: "How much does patio installation cost in Gaithersburg, MD?",
            answer: "Costs vary by community, lot size, material, and features. Kentlands and Lakelands townhome patios are typically smaller in scope — $7,000–$18,000 for a well-designed courtyard patio with pavers or stone. Crown Farm and Washingtonian Woods single-family home patios run $12,000–$35,000+ for natural stone or pavers. A pergola or outdoor kitchen adds $10,000–$35,000+ depending on scope. DMV General Contracting Group provides a free, itemized estimate after reviewing the site."
        }
    ];

    return (
        <div className="city-service-detail-page patios-gaithersburg-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/patios">Patios</Link><span>›</span>
                    Gaithersburg, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Gaithersburg, MD</div>
                    <h1>Patio Installation &amp; Design in Gaithersburg, MD</h1>
                    <p>
                        Professional custom patio design and installation for Gaithersburg homeowners across all communities — Kentlands, Lakelands, Crown Farm, Washingtonian Woods, and established Gaithersburg neighborhoods. Dual permit jurisdiction expertise: City of Gaithersburg DPW for Kentlands and Lakelands; MoCo DPS for Crown Farm and Washingtonian Woods. Kentlands ARC coordination included.
                    </p>
                    <div className="hero-meta">
                        <span className="badge">⚖️ Dual Permit Jurisdiction — Confirmed by Address</span>
                        <span className="badge">🏘️ Kentlands ARC Coordination</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                        <span className="badge">Licensed &amp; Insured</span>
                        <span className="badge">1-Year Workmanship Warranty</span>
                    </div>
                </div>

                <div className="patio-banner">
                    <strong>Gaithersburg Patio Expertise:</strong> Gaithersburg's planned communities — Kentlands, Lakelands, Crown Farm, and Washingtonian Woods — each have their own character, lot configurations, and HOA requirements. And critically, Gaithersburg has two separate permit jurisdictions: Kentlands and Lakelands properties file permits with the City of Gaithersburg DPW, while most other Gaithersburg communities file with MoCo DPS. Filing at the wrong office means no permit is issued — and an unpermitted patio structure creates resale and insurance documentation gaps. DMV General Contracting Group confirms the correct permit authority for every Gaithersburg address at the free consultation and manages all permit filings in-house.
                </div>

                <h2>Gaithersburg's Two Permit Jurisdictions — Confirmed Before Any Work Begins</h2>

                <div className="juris-grid">
                    <div className="juris-card">
                        <h3>🏛️ City of Gaithersburg DPW — Kentlands &amp; Lakelands</h3>
                        <ul>
                            <li><strong>Communities covered:</strong> Kentlands, Lakelands</li>
                            <li>All structural patio permits — pergolas, outdoor kitchens with gas/electrical, retaining walls — filed with City of Gaithersburg DPW</li>
                            <li>Separate from MoCo DPS — the county does not accept permit applications for City of Gaithersburg properties</li>
                            <li><strong>Kentlands ARC approval</strong> also required for exterior modifications before permit is filed</li>
                            <li>DMV-GC files at City DPW and coordinates ARC submissions concurrently</li>
                        </ul>
                    </div>
                    <div className="juris-card">
                        <h3>🏛️ Montgomery County DPS — Crown Farm, Washingtonian Woods &amp; Others</h3>
                        <ul>
                            <li><strong>Communities covered:</strong> Crown Farm, Washingtonian Woods, Flower Hill, Montgomery Village, and most Gaithersburg communities outside city limits</li>
                            <li>All structural patio permits filed with MoCo DPS at 2425 Reedie Drive, Wheaton</li>
                            <li>Separate from City of Gaithersburg DPW — city office does not cover these properties</li>
                            <li>HOA requirements vary by community — Crown Farm and Washingtonian Woods HOAs may have their own ARC processes</li>
                            <li>DMV-GC confirms jurisdiction by address and files at MoCo DPS for covered properties</li>
                        </ul>
                    </div>
                </div>

                <div className="patio-banner">
                    <strong>Important:</strong> A Gaithersburg mailing address and zip code do not determine which permit office applies. Two adjacent homes in Gaithersburg may file at different offices depending on which community their parcel falls within. DMV General Contracting Group confirms the correct permit jurisdiction for every Gaithersburg address at the free consultation — before any permit is prepared.
                </div>

                <h2>Complete Patio Services for Gaithersburg Homes</h2>
                <div className="card-grid">
                    <div className="card"><h3>Custom Patio Design</h3><p>Patio design tailored to your Gaithersburg community — compact, well-organized layouts for Kentlands and Lakelands townhome rear yards; larger outdoor living area plans for Crown Farm and Washingtonian Woods single-family homes.</p></div>
                    <div className="card"><h3>Natural Stone Patio</h3><p>Bluestone, travertine, and flagstone — natural stone complements Gaithersburg's neo-traditional and contemporary planned community homes. Traditional brick and bluestone particularly well suited to Kentlands' period-inspired architectural character.</p></div>
                    <div className="card"><h3>Concrete Paver Patio</h3><p>Durable, repairable, and available in earth-tone profiles — concrete pavers are the most popular choice across all Gaithersburg communities. Appropriate for both Kentlands townhome courtyards and Crown Farm single-family rear yards.</p></div>
                    <div className="card"><h3>Brick Patio Installation</h3><p>Reclaimed or new brick in running bond, herringbone, or basket weave patterns — the most period-appropriate choice for Kentlands' new urbanist aesthetic, where traditional materials reference the community's architectural vision.</p></div>
                    <div className="card"><h3>Pergola &amp; Shade Structure</h3><p>Custom pergolas scaled to each Gaithersburg community's lot size — from compact Kentlands townhome rear yard structures to full-scale pavilions on Crown Farm lots. Kentlands ARC and City DPW permit coordinated concurrently.</p></div>
                    <div className="card"><h3>Outdoor Kitchen &amp; Grill</h3><p>Built-in grill stations and outdoor kitchen installations for Gaithersburg homeowners — scaled appropriately to the community and lot. Gas line and electrical work managed in-house by our licensed trades team. Permit jurisdiction confirmed before scope is finalized.</p></div>
                    <div className="card"><h3>Fire Pit Installation</h3><p>Custom gas or wood-burning fire pits for Gaithersburg's outdoor spaces. Gas fire pit installations require the appropriate jurisdiction's permit for the gas line extension — City DPW for Kentlands/Lakelands; MoCo DPS for other communities.</p></div>
                    <div className="card"><h3>Courtyard &amp; Small-Space Patio Design</h3><p>Kentlands and Lakelands townhomes often have compact rear courtyards rather than open yards. DMV-GC specializes in maximizing small outdoor spaces — efficient layouts, vertical pergola elements, and built-in seating that make compact areas feel complete.</p></div>
                </div>

                <h2>Common Patio Needs by Gaithersburg Community</h2>
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
                                    <td><strong>Kentlands</strong></td>
                                    <td>Compact courtyard patio, brick or bluestone, pergola or trellis structure</td>
                                    <td>Kentlands ARC approval required before permit. City of Gaithersburg DPW permit. Period-appropriate materials (brick, natural stone) strongly preferred over modern large-format pavers.</td>
                                </tr>
                                <tr>
                                    <td><strong>Lakelands</strong></td>
                                    <td>Rear yard patio with pergola, natural stone or pavers, fire pit</td>
                                    <td>City of Gaithersburg DPW permit. Lakelands HOA ARC requirements confirmed before scope is finalized. Lakelands lots tend to be slightly larger than Kentlands — more room for a complete outdoor living setup.</td>
                                </tr>
                                <tr>
                                    <td><strong>Crown Farm</strong></td>
                                    <td>Larger rear yard patio, full outdoor kitchen, pergola or pavilion</td>
                                    <td>MoCo DPS permit at 2425 Reedie Drive. Crown Farm HOA ARC requirements confirmed. Newer single-family homes support larger outdoor living investments.</td>
                                </tr>
                                <tr>
                                    <td><strong>Washingtonian Woods</strong></td>
                                    <td>Rear yard patio, outdoor kitchen, pergola, fire feature</td>
                                    <td>MoCo DPS permit. Washingtonian Woods HOA requirements confirmed. Established community with generous lot sizes suited to complete outdoor living areas.</td>
                                </tr>
                                <tr>
                                    <td><strong>Older Gaithersburg neighborhoods</strong></td>
                                    <td>Patio replacement, new pavers or stone, simple pergola or fire pit</td>
                                    <td>MoCo DPS permit for most. Some older communities may have no HOA. Old concrete slab replacement common in 1970s–1980s housing stock.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Patio Materials for Gaithersburg's Planned Communities</h2>
                <p>Gaithersburg's planned communities have distinct architectural characters — Kentlands' neo-traditional brick and shingle-style homes call for different patio materials than Crown Farm's contemporary colonials or Washingtonian Woods' traditional profiles. DMV General Contracting Group discusses material options with each community's character as the starting framework.</p>
                <div className="card-grid">
                    <div className="card"><h3>🧱 Brick (Kentlands-First Choice)</h3><p>Reclaimed or new brick in running bond or herringbone — the most period-appropriate and architecturally compatible choice for Kentlands' new urbanist vision. References the community's brick-heavy streetscapes and traditional building character. Warm tone, durable, repairable.</p></div>
                    <div className="card"><h3>🪨 Natural Bluestone</h3><p>Uniform-cut or irregular bluestone — works across all Gaithersburg communities. The cool gray tone and natural texture complement both neo-traditional (Kentlands) and contemporary (Crown Farm) architectural profiles. Most popular upgrade material in Gaithersburg.</p></div>
                    <div className="card"><h3>🧱 Concrete Pavers</h3><p>Earth-tone tumbled or natural-finish pavers — the most practical and cost-effective choice across all Gaithersburg communities. Wide range of profiles allows matching to the specific community's architectural character. Repairable and durable through Maryland's seasons.</p></div>
                    <div className="card"><h3>🪨 Travertine</h3><p>Warm cream and tan tones — popular for Crown Farm and Washingtonian Woods outdoor kitchen areas and contemporary home profiles. Tumbled travertine for informal settings; honed for more contemporary profiles.</p></div>
                    <div className="card"><h3>🧱 Large-Format Porcelain</h3><p>Contemporary choice for Crown Farm and newer Gaithersburg homes — non-porous, stain-resistant, and available in stone-look profiles. Less appropriate for Kentlands' traditional architectural character. Frost-rated porcelain required for Maryland outdoor installation.</p></div>
                    <div className="card"><h3>🏗️ Stamped Concrete</h3><p>Cost-effective for larger Gaithersburg patio areas. Cobblestone and slate patterns in earth tones work best with the community's traditional architectural character. Less repairable than unit pavers. Generally more appropriate for older Gaithersburg neighborhoods than Kentlands or Crown Farm.</p></div>
                </div>

                <h2>Kentlands ARC — What Patio Projects Require Approval</h2>
                <div className="patio-banner">
                    <strong>Kentlands Architectural Review Committee (ARC):</strong> Kentlands is a carefully planned new urbanist community where exterior modifications — including patio additions, pergola structures, outdoor kitchens, and fencing visible from the street or neighboring properties — typically require ARC approval before City of Gaithersburg DPW permits are issued. The ARC process requires submission of design plans, material specifications, and sometimes color samples. DMV General Contracting Group prepares all required ARC documentation, submits on your behalf, and coordinates the ARC and City DPW permit processes concurrently so neither creates unnecessary project delay. If you are unsure whether your specific Kentlands patio scope requires ARC review, we confirm at the free consultation.
                </div>

                <h2>Why Choose DMV General Contracting Group for Patio Work in Gaithersburg?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">⚖️</div>
                        <strong>Dual Jurisdiction</strong>
                        <span>Correct office confirmed by address</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🏘️</div>
                        <strong>Kentlands ARC</strong>
                        <span>ARC coordination included</span>
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
                    <div className="card"><h3>Dual Permit Jurisdiction Expertise</h3><p>City of Gaithersburg DPW for Kentlands and Lakelands; MoCo DPS for Crown Farm and Washingtonian Woods. Correct office confirmed by address at the free consultation — never assumed by neighborhood name or zip code.</p></div>
                    <div className="card"><h3>Kentlands &amp; Lakelands ARC Coordination</h3><p>ARC submission documentation prepared, submitted, and coordinated concurrently with City DPW permit process. Homeowners do not need to manage the ARC process independently — DMV-GC handles it as part of the project scope.</p></div>
                    <div className="card"><h3>Community-Appropriate Design</h3><p>Material and design recommendations that fit each Gaithersburg community's architectural character — brick and natural stone for Kentlands; contemporary pavers and porcelain for Crown Farm. Not a one-size-fits-all approach.</p></div>
                    <div className="card"><h3>All Trades In-House</h3><p>Gas line extensions, electrical connections, and patio installation all coordinated under one design-build workflow — no separate subcontractors on different schedules across your Gaithersburg patio project.</p></div>
                </div>

                <h2>Our Patio Installation Process in Gaithersburg</h2>
                <div className="steps">
                    {[
                        { num: 1, title: "Free Consultation & Jurisdiction Confirmation", desc: "We visit your Gaithersburg home, assess the outdoor space, and confirm the correct permit jurisdiction for your specific address — City of Gaithersburg DPW or MoCo DPS. Kentlands and Lakelands ARC requirements also noted at this stage." },
                        { num: 2, title: "Design, Layout & Material Selection", desc: "Patio layout and materials selected with your community's architectural character as the guiding framework. Compact courtyard designs for Kentlands and Lakelands townhomes; larger outdoor living plans for Crown Farm and Washingtonian Woods single-family homes." },
                        { num: 3, title: "ARC Submission & Permit Filing", desc: "For Kentlands and Lakelands: ARC documentation prepared and submitted; City of Gaithersburg DPW permit prepared concurrently. For Crown Farm and Washingtonian Woods: MoCo DPS permit filed at 2425 Reedie Drive. All correspondence managed in-house." },
                        { num: 4, title: "Excavation, Grading & Base", desc: "Existing surface removed, grade adjusted where required, and compacted gravel base installed to the correct depth for the chosen patio material. Drainage slope planned away from the home's foundation and any adjacent structures." },
                        { num: 5, title: "Patio Installation & Features", desc: "Patio material installed on prepared base — brick, natural stone, or pavers per the community-appropriate design. Pergola, outdoor kitchen, and fire feature built where included in scope. Gas and electrical work by licensed in-house trades." },
                        { num: 6, title: "Inspection, Cleanup & Completion", desc: "All required inspections — City DPW or MoCo DPS as applicable — scheduled and managed. Work area cleaned. Final walkthrough with you. Warranty documentation provided at project close." }
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
                <p>DMV General Contracting Group provides residential patio installation and outdoor living services throughout <strong>Gaithersburg, MD</strong> — including Kentlands, Lakelands, Crown Farm, Washingtonian Woods, Flower Hill, Montgomery Village, and surrounding Montgomery County communities including Rockville, North Bethesda, Kensington, Wheaton, and Garrett Park.</p>

                <div className="patio-banner">
                    <strong>Gaithersburg Permit Summary:</strong> Kentlands and Lakelands → City of Gaithersburg DPW + Kentlands/Lakelands ARC. Crown Farm, Washingtonian Woods, and most other Gaithersburg communities → MoCo DPS at 2425 Reedie Drive, Wheaton. Your Gaithersburg mailing address does not determine which office applies — parcel location does. DMV General Contracting Group confirms the correct jurisdiction at every Gaithersburg consultation.
                </div>

                <h2>Frequently Asked Questions — Patio Installation in Gaithersburg, MD</h2>
                <Accordion className="faq-list">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <h2>Explore Our Other Services in Gaithersburg, MD</h2>
                <ul className="related-links">
                    <li><Link href="/service/decks/gaithersburg-md">Deck Building in Gaithersburg, MD</Link></li>
                    <li><Link href="/service/fence-installation/gaithersburg-md">Fence Installation in Gaithersburg, MD</Link></li>
                    <li><Link href="/service/home-additions/gaithersburg-md">Home Additions in Gaithersburg, MD</Link></li>
                    <li><Link href="/service/design-build/gaithersburg-md">Design-Build Contractor in Gaithersburg, MD</Link></li>
                    <li><Link href="/service/siding-installation/gaithersburg-md">Siding Installation in Gaithersburg, MD</Link></li>
                    <li><Link href="/service/concrete/gaithersburg-md">Concrete Services in Gaithersburg, MD</Link></li>
                </ul>

                <div className="cta-banner">
                    <h2>Need Patio Installation in Gaithersburg, MD?</h2>
                    <p>Talk with DMV General Contracting Group about custom patio design for your Gaithersburg community — Kentlands ARC coordination, dual permit jurisdiction confirmed, community-appropriate materials. Free consultation, no obligation.</p>
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

export default GaithersburgMD;