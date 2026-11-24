'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const WheatonMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Where are patio permits filed in Wheaton, MD?",
            answer: "With Montgomery County DPS at 2425 Reedie Drive, Wheaton, MD 20902 — the MoCo permit office is physically located in Wheaton. Structural patio elements including pergolas, outdoor kitchens with gas or electrical, and retaining walls over 30 inches require MoCo DPS permits. Simple ground-level patios typically do not require a permit. DMV General Contracting Group confirms requirements at the free consultation and manages all filings in-house."
        },
        {
            question: "Is Wheaton a good area to invest in a patio or outdoor living space?",
            answer: "Yes — Wheaton is one of Montgomery County's strongest ROI communities for home improvement. The community's proximity to the Wheaton Metro, the area's ongoing revitalization, and its well-established residential character make it a strong value-for-investment market. A well-designed patio or outdoor living space adds functional square footage to a Wheaton home and delivers measurable value at a favorable cost-to-value ratio."
        },
        {
            question: "My Wheaton home is a split-level — what are my patio options?",
            answer: "Split-level grade transitions are common in Wheaton. DMV General Contracting Group assesses the grade difference at your home during the free consultation and presents options: a multi-level patio with steps connecting the two levels; a single lower-level patio with a stair from the door; a raised deck at the upper level with a patio below; or a combination approach. Each option has different cost implications and we walk you through all before any scope is agreed."
        },
        {
            question: "What is the most popular patio combination for Wheaton homeowners?",
            answer: "A concrete paver patio with a wood or aluminum pergola is the most requested combination for Wheaton's colonial and split-level stock — it creates a defined outdoor room with shade at a project cost that delivers strong ROI in Wheaton's active real estate market. Fire pit addition is the next most common add-on. DMV General Contracting Group can scope the patio, pergola, and fire feature as a single coordinated project."
        },
        {
            question: "How much does patio installation cost in Wheaton, MD?",
            answer: "A concrete paver patio in Wheaton starts in the $6,500–$13,000 range. A natural stone patio runs $12,000–$26,000+. A pergola addition runs $9,000–$22,000+. An outdoor kitchen or fire pit adds $8,000–$28,000+ depending on scope and materials. DMV General Contracting Group provides a free, itemized estimate after reviewing the site in person."
        }
    ];

    return (
        <div className="city-service-detail-page patios-wheaton-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/patios">Patios</Link><span>›</span>
                    Wheaton, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Wheaton, MD</div>
                    <h1>Patio Installation &amp; Design in Wheaton, MD</h1>
                    <p>
                        Professional custom patio design and installation for Wheaton homeowners — concrete pavers, natural stone, flagstone, pergolas, outdoor kitchens, and fire pits suited to Wheaton's colonials, split-levels, and cape cods. MoCo DPS permit office is right here in Wheaton at 2425 Reedie Drive — all permits filed and managed in-house.
                    </p>
                    <div className="hero-meta">
                        <span className="badge">📋 MoCo DPS — 2425 Reedie Drive, Wheaton</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                        <span className="badge">Licensed &amp; Insured</span>
                        <span className="badge">1-Year Workmanship Warranty</span>
                        <span className="badge">Free Consultation</span>
                    </div>
                </div>

                <div className="patio-banner">
                    <strong>Wheaton Patio Expertise:</strong> Wheaton is unincorporated Montgomery County, and MoCo DPS — the permit office that covers Wheaton — is physically located here at 2425 Reedie Drive. Wheaton's 1950s–1970s housing stock of colonials, split-levels, and cape cods has rear yards well sized for functional outdoor living spaces. And Wheaton's reputation as one of MoCo's strongest ROI communities for home improvement means a well-designed patio, pergola, or outdoor kitchen delivers real value — both in daily quality of life and in property value. DMV General Contracting Group designs and installs patios for Wheaton homeowners at every budget level, with all permits filed at MoCo DPS a short distance away at 2425 Reedie Drive.
                </div>

                <h2>Complete Patio Services for Wheaton Homes</h2>
                <div className="card-grid">
                    <div className="card"><h3>Custom Patio Design</h3><p>Work with our design team to create a patio layout that fits your Wheaton lot — flat colonial rear yard, split-level grade transition, or a sloped lot requiring steps and terracing to create usable outdoor space.</p></div>
                    <div className="card"><h3>Concrete Paver Patio</h3><p>The most popular choice for Wheaton's mid-century colonials and cape cods — durable, repairable, available in a wide range of earth-tone profiles. Good value relative to natural stone while delivering a clean, attractive appearance that holds up through Maryland's seasons.</p></div>
                    <div className="card"><h3>Natural Stone Patio</h3><p>Bluestone, flagstone, and travertine for Wheaton homeowners seeking a step up in material quality and character. Uniform-cut bluestone for more formal layouts; irregular flagstone for informal garden-integrated settings. Mortar-set for estate-quality installations.</p></div>
                    <div className="card"><h3>Multi-Level Patio &amp; Steps</h3><p>Wheaton's split-level homes frequently need multi-level patio designs that manage the grade change between the main level walkout and the rear yard. Steps, retaining elements, and terraced patio areas designed to feel natural and functional.</p></div>
                    <div className="card"><h3>Pergola &amp; Shade Structure</h3><p>Custom wood or aluminum pergolas scaled to Wheaton's residential lots — creating a defined outdoor room, shade, and a complementary architectural element. MoCo DPS permit required for structural pergolas filed right here in Wheaton.</p></div>
                    <div className="card"><h3>Outdoor Kitchen &amp; Grill Station</h3><p>Built-in grill stations and outdoor kitchen setups for Wheaton homeowners — from a simple countertop and grill to a full outdoor kitchen with refrigerator, sink, and storage. Gas line and electrical work managed in-house by our licensed trades team.</p></div>
                    <div className="card"><h3>Fire Pit Installation</h3><p>Custom gas or wood-burning fire pits that add a year-round gathering focal point to Wheaton's backyard spaces. Gas fire pits require MoCo DPS-permitted gas line extensions managed in-house. Stone and concrete block surround options available.</p></div>
                    <div className="card"><h3>Grading, Steps &amp; Retaining Walls</h3><p>Grade management for Wheaton's sloped and split-level lots — retaining walls, steps, and terracing that create functional flat outdoor areas where the natural grade would otherwise limit outdoor living options. Walls over 30 inches MoCo DPS permitted.</p></div>
                </div>

                <h2>Common Patio Needs in Wheaton</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr>
                                    <th>Homeowner Need</th>
                                    <th>Wheaton-Specific Considerations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>New patio for a 1960s colonial</td>
                                    <td>Clean concrete pavers or uniform-cut bluestone complement Wheaton's mid-century colonial profiles well. Rear yard layout planned around the home's walkout door position and existing landscape features. MoCo DPS permits filed at 2425 Reedie Drive for any structural additions.</td>
                                </tr>
                                <tr>
                                    <td>Split-level patio with grade change</td>
                                    <td>Grade transition between walkout level and rear yard assessed at consultation. Multi-level patio with connecting steps, or a single lower patio accessed by stairs — design determined by the specific grade and the homeowner's preference. Retaining walls permitted where over 30 inches.</td>
                                </tr>
                                <tr>
                                    <td>Patio + pergola combination</td>
                                    <td>A paver patio with a wood or aluminum pergola is one of the most popular combinations for Wheaton homeowners — adding defined outdoor space and shade at a project cost that delivers strong ROI in Wheaton's active real estate market.</td>
                                </tr>
                                <tr>
                                    <td>Fire pit addition</td>
                                    <td>Gas fire pits require a MoCo DPS permit for the gas line extension — filed at 2425 Reedie Drive. Wood-burning fire pits are simpler with no gas permit required. Both installed by DMV-GC as standalone or part of a larger patio scope.</td>
                                </tr>
                                <tr>
                                    <td>Old concrete slab replacement</td>
                                    <td>Original 1960s–1970s concrete slab removed, subgrade assessed and improved, drainage slope corrected away from the home's foundation, and new paver or stone surface installed with proper base preparation.</td>
                                </tr>
                                <tr>
                                    <td>ROI-focused outdoor improvement</td>
                                    <td>Wheaton homeowners renovating for property value frequently choose a patio + pergola scope as the highest-return outdoor investment — creating functional outdoor space that directly adds to the home's appeal and market value in MoCo's competitive housing market.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Wheaton's Home Improvement ROI — Why a Patio Makes Sense Here</h2>
                <div className="patio-banner">
                    <strong>Wheaton is one of Montgomery County's strongest ROI communities for home improvement:</strong> Homes in Wheaton have appreciated substantially — the community's proximity to the Wheaton Metro, downtown Wheaton's revitalization, and its well-established residential neighborhoods make it one of MoCo's best value-for-investment markets. A well-designed patio that adds functional outdoor living space to a Wheaton colonial or split-level delivers both immediate quality-of-life improvement and measurable property value addition at a cost-to-value ratio that is strong relative to comparable improvements in higher-priced Montgomery County communities. DMV General Contracting Group discusses the return profile of different patio scopes at the free consultation — helping Wheaton homeowners make investment decisions that make sense for their specific property and their timeline.
                </div>

                <h2>Patio Materials for Wheaton Homes</h2>
                <div className="card-grid">
                    <div className="card"><h3>🧱 Concrete Pavers</h3><p>Most popular for Wheaton's mid-century housing stock — durable, repairable, and available in earth-tone profiles that complement 1950s–1970s architecture. Individual units replaceable if damaged. Best value choice for Wheaton homeowners balancing quality and budget.</p></div>
                    <div className="card"><h3>🪨 Bluestone (Uniform Cut)</h3><p>Uniform-cut Pennsylvania bluestone in running bond or stacked pattern — a step up in quality and character. Cool gray tone and clean edges work well with Wheaton's traditional colonial and cape cod profiles. Mortar-set for long-term stability.</p></div>
                    <div className="card"><h3>🪨 Irregular Flagstone</h3><p>Natural irregular stone in an informal layout — suited to Wheaton's more garden-oriented backyard settings. Wide joints planted with ground cover integrate naturally with established garden beds and mature landscaping.</p></div>
                    <div className="card"><h3>🏗️ Stamped Concrete</h3><p>Cost-effective for larger Wheaton patio areas. Custom patterns in earth tones. Properly sealed for Maryland's climate. Best for homeowners on tighter budgets where the patio area is large and natural stone or unit pavers would be cost-prohibitive at scale.</p></div>
                    <div className="card"><h3>🪨 Travertine</h3><p>Warm cream and tan tones — works well for Wheaton's transitional and contemporary homes and for outdoor kitchen areas. Tumbled travertine for informal settings. Requires sealing in outdoor kitchen and food-service areas.</p></div>
                    <div className="card"><h3>🧱 Large-Format Porcelain</h3><p>Contemporary choice for Wheaton's newer and renovated properties — non-porous, stain-resistant, and available in stone-look profiles. Frost-rated porcelain required for Maryland outdoor installation. Practical for outdoor kitchen countertop areas.</p></div>
                </div>

                <h2>Why Choose DMV General Contracting Group for Patio Work in Wheaton?</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>MoCo DPS Right Here</strong>
                        <span>2425 Reedie Drive, Wheaton</span>
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
                        <div className="icon">💰</div>
                        <strong>ROI-Aware Design</strong>
                        <span>Wheaton's strong value market</span>
                    </div>
                </div>
                <div className="card-grid">
                    <div className="card"><h3>MoCo DPS Is in Wheaton</h3><p>The Montgomery County permit office that covers Wheaton is physically located at 2425 Reedie Drive, Wheaton — DMV General Contracting Group files permits there regularly for Wheaton projects. All county correspondence, inspector scheduling, and permit tracking managed in-house.</p></div>
                    <div className="card"><h3>Mid-Century Home Experience</h3><p>Wheaton's 1950s–1970s colonials, split-levels, and cape cods are our most common project type in this community. Grade transitions, old concrete slab replacements, and coordinated patio-plus-pergola scopes are standard work for our team in Wheaton.</p></div>
                    <div className="card"><h3>All Trades In-House</h3><p>Gas line extensions, electrical connections, retaining wall construction, drainage, and patio installation — all coordinated under one design-build workflow. No separate subcontractors on different schedules managing pieces of your project.</p></div>
                    <div className="card"><h3>ROI-Conscious Scoping</h3><p>In Wheaton's strong home improvement ROI market, we help homeowners scope projects that deliver real value — not oversized or undersized for the property. The patio + pergola combination is frequently our top recommendation for Wheaton's colonial and split-level stock.</p></div>
                </div>

                <h2>Our Patio Installation Process in Wheaton</h2>
                <div className="steps">
                    {[
                        { num: 1, title: "Free Consultation & Site Visit", desc: "We visit your Wheaton home, assess the outdoor space — lot configuration, grade, existing features, drainage — and discuss your patio vision and budget. Split-level grade difference measured and noted. ROI-focused scoping discussion included. Free, no obligation." },
                        { num: 2, title: "Design, Layout & Material Selection", desc: "Patio layout designed for your specific Wheaton lot. Material selected based on the home's architectural character and the homeowner's budget and priorities. Multiple layout options for split-level homes presented before scope is agreed." },
                        { num: 3, title: "Permit Filing at MoCo DPS", desc: "Permit requirements confirmed for your project scope. All required MoCo DPS applications prepared and filed at 2425 Reedie Drive, Wheaton — the permit office is local, and our team files there regularly. All county correspondence managed in-house." },
                        { num: 4, title: "Excavation, Grading & Base", desc: "Existing surface removed, grade adjusted where required, retaining walls installed where the scope calls for it, and compacted gravel base installed to the correct depth for the chosen patio material and soil conditions at the site." },
                        { num: 5, title: "Patio Installation & Features", desc: "Patio material installed on the prepared base. Pergola framed where included. Outdoor kitchen or fire feature built out. Gas and electrical rough-in completed by our licensed in-house trades team where applicable. Steps and retaining elements finished." },
                        { num: 6, title: "Inspection, Cleanup & Completion", desc: "All required MoCo DPS inspections scheduled and managed at 2425 Reedie Drive. Work area cleaned. Final walkthrough with you — drainage confirmed, all surfaces inspected. Warranty documentation provided at project close." }
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
                <p>DMV General Contracting Group provides residential patio installation and outdoor living services throughout <strong>Wheaton, MD</strong>, including Wheaton Hills, Glenmont, Forest Glen, Arcola, Kemp Mill, and surrounding communities including Silver Spring, Kensington, Rockville, Gaithersburg, North Bethesda, and Bethesda.</p>

                <div className="patio-banner">
                    <strong>Wheaton Permit Note:</strong> MoCo DPS at 2425 Reedie Drive, Wheaton is the permit office for Wheaton and all unincorporated Montgomery County. Neighboring Kensington files at the Town of Kensington at 3710 Mitchell Street. Neighboring Garrett Park files at the Town of Garrett Park at 4600 Oxford Street. DMV General Contracting Group confirms the correct permit jurisdiction for every project at the free consultation — Wheaton properties always file at MoCo DPS.
                </div>

                <h2>Frequently Asked Questions — Patio Installation in Wheaton, MD</h2>
                <Accordion className="faq-list">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <h2>Explore Our Other Services in Wheaton, MD</h2>
                <ul className="related-links">
                    <li><Link href="/service/decks/wheaton-md">Deck Building in Wheaton, MD</Link></li>
                    <li><Link href="/service/fence-installation/wheaton-md">Fence Installation in Wheaton, MD</Link></li>
                    <li><Link href="/service/home-additions/wheaton-md">Home Additions in Wheaton, MD</Link></li>
                    <li><Link href="/service/design-build/wheaton-md">Design-Build Contractor in Wheaton, MD</Link></li>
                    <li><Link href="/service/electrical-services/wheaton-md">Electrical Services in Wheaton, MD</Link></li>
                    <li><Link href="/service/concrete/wheaton-md">Concrete Services in Wheaton, MD</Link></li>
                </ul>

                <div className="cta-banner">
                    <h2>Need Patio Installation in Wheaton, MD?</h2>
                    <p>Talk with DMV General Contracting Group about custom patio design, concrete pavers, natural stone, pergolas, outdoor kitchens, or fire pits for your Wheaton home. MoCo DPS permits filed right here in Wheaton. Free consultation, no obligation.</p>
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

export default WheatonMD;