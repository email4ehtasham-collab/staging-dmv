'use client';

import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "./style.scss";
import "../design-build-city-style.scss";

const NorthBethesdaMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "How do the three North Bethesda zoning districts affect my home renovation project?",
            answer: "Three zoning districts govern most North Bethesda properties: R-60 (quarter-acre+ lots, the historic housing stock), PD-15 and PD-21 (planned development districts, townhomes and condos), and CR zones (commercial-residential mixed-use, high-rise residential). Zoning determines what can be built — additions in R-60 districts are governed by lot coverage, setback, and FAR limits, while PD districts are governed by the specific approved development plan for each community. MoCo DPS at 2425 Reedie Drive issues all Montgomery County building permits, but the applicable zoning rules — and the maximum buildable footprint — are determined by the district governing your specific property. DMV-GC Group confirms your property's zoning district at the consultation before any design work begins."
        },
        {
            question: "Does DMV-GC Group build accessory dwelling units (ADUs) in North Bethesda?",
            answer: "Yes. ADUs are governed by Montgomery County law (Chapter 59 Section 3.2.17A) and require: a MoCo DPS building permit, a Use and Occupancy (U&amp;O) Certificate, and a Montgomery County Rental Facility License — issued separately by the Department of Permitting Services. The three North Bethesda zoning districts have different ADU requirements, especially for detached units and minimum lot sizes. DMV-GC Group handles MoCo DPS permitting, designs the ADU to satisfy the county's dimensional standards, coordinates the separate Rental Facility License, and delivers a finished, rentable unit."
        },
        {
            question: "How much does a design-build renovation cost in North Bethesda, MD?",
            answer: "North Bethesda design-build projects span the range of its housing stock. Kitchen remodels: $45,000–$150,000+ for townhomes, $60,000–$175,000+ for single-family R-60 homes. Primary bathrooms: $30,000–$80,000+. Basement remodels and ADUs: $50,000–$150,000+. Detached additions and ADUs. Whole-home renovations: $150,000–$650,000+. All costs include architectural design, structural engineering, MoCo DPS permitting, and construction by licensed in-house trades."
        },
        {
            question: "Is DMV-GC Group licensed and insured for design-build work in North Bethesda, MD?",
            answer: "Yes. DMV General Contracting Group has held Maryland MHIC license #156178 since 2019, is fully bonded with comprehensive general liability and workers' compensation coverage, and provides a 1-year workmanship warranty on all North Bethesda design-build projects. MoCo DPS permits are actively managed by our in-house permit specialists from application through closing."
        }
    ];

    return (
        <div className="design-build-city-detail-page design-build-north-bethesda-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/design-build">Design-Build</Link><span>›</span>
                    North Bethesda, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving North Bethesda, MD</div>
                    <h1>Design-Build Contractor in North Bethesda, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏛️ In-House Architects & Engineers</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ All 3 North Bethesda Zoning Districts</span>
                        <span className="badge">✓ MoCo DPS-Permitted ADUs</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">🏠</div>
                    <div>
                        <h3>North Bethesda's Design-Build Partner — From Constructed MD 355 Corridor Townhomes to Modern R-60 Detached Homes</h3>
                        <p>North Bethesda is a distinct Montgomery County community — roughly bounded by Rockville to the north, Bethesda to the south, I-495/I-270 to the east, and the Cabin John Creek valley to the west — built around the White Flint Metro Station and the 355/Nicholson Lane commercial corridor. Its residential character spans three zoning districts: R-60 single-family neighborhoods with roomy lots and established detached homes; PD-15 and PD-21 planned development districts with modern townhomes and condos; and CR mixed-use properties that blend residential with commercial. The community is also one of the leading hubs nationally for accessory dwelling units (ADUs) that boost housing and rental income. That range means the ideal North Bethesda design-build partner has to know how to add square footage to a detached post-war home on a quarter-acre lot, renovate a townhome within HOA-managed planned development rules, and build a complete, rentable ADU from foundation to U&amp;O Certificate. DMV General Contracting Group does all three — and our company is headquartered here in North Bethesda.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a <strong>design-build contractor in North Bethesda, MD</strong> with a full team of licensed architects, structural engineers, permit specialists, and in-house trades? DMV General Contracting Group has been building in North Bethesda — and is headquartered just off the 355 corridor — since 2019. Kitchen remodels, basement renovations, primary suites, house additions, and MoCo DPS-permitted ADU construction. One contract. One accountable team. Full design-build clarity from inception through permit close.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">🏢</div><strong>Local HQ</strong><span>Based in North Bethesda off MD 355 — we build where we live</span></div>
                    <div className="trust-item"><div className="icon">🏗️</div><strong>All 3 Zoning Districts</strong><span>R-60, PD-15, PD-21, and CR — confirmed before design</span></div>
                    <div className="trust-item"><div className="icon">🏘️</div><strong>ADU Specialists</strong><span>Rental-licensed, MoCo DPS-permitted accessory units</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>North Bethesda's Three Zoning Districts — R-60, PD-15/PD-21, and CR</h2>
                <p>One of the most common misconceptions about North Bethesda is that all its neighborhoods are the same. They are not — the community is made up of three distinct zoning districts, each with different rules for what can be built, how large a footprint is allowed, and what permits are required. Every North Bethesda design-build project begins with confirming which district governs your property:</p>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="zoning-table">
                            <thead>
                                <tr><th>Zoning District</th><th>Housing Types</th><th>What It Means for Design-Build</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>R-60</strong></td><td>Detached single-family homes on quarter-acre+ lots</td><td>Additions governed by lot coverage, setbacks, and FAR limits. Room for rear and second-story additions. Established 1950s–1980s detached home stock.</td></tr>
                                <tr><td><strong>PD-15 / PD-21</strong></td><td>Townhomes and condominiums in planned development districts</td><td>Renovations governed by each community's approved development plan. HOA approval coordination. Interior kitchen/bath/basement work and select exterior changes.</td></tr>
                                <tr><td><strong>CR Zones</strong></td><td>High-rise residential and mixed-use</td><td>Additions limited; focus on high-design interior renovations coordinated with building management. Premium residential finishes.</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    📋 <strong>Zoning confirmation before design:</strong> In North Bethesda, what you can build is determined by the zoning district governing your specific property — not by what your neighbors built. Our team confirms your district at the free consultation (via MoCo zoning records and parcel data), then designs within that district's footprint and lot coverage rules — so your project is buildable and approvable from the first drawing.
                </div>

                <h2>Dominate the White Flint & 355 Corridor Build Community</h2>
                <div className="highlight">
                    <p>🏗️ <strong>MD 355 knows us as the general contractor for North Bethesda.</strong> From the old Grade "A" office quadrant around White Flint Metro, to the new walkable residential and mixed-use community rising around RIO Washingtonian Center and Pike &amp; Rose, DMV-GC has a track record across the redevelopment corridor: <strong>industry-savvy general contractors, a full-service architecture and engineering team, and our own in-house construction crews.</strong> Whether your project sits on a leafy R-60 block off Linden Lane or a newer PD district off Old Georgetown Road, the same standard applies — design-build clarity from inception through permit close.</p>
                </div>

                <h2>Our In-House Design-Build Team for North Bethesda Projects</h2>

                <div className="team-grid">
                    <div className="team-card"><div className="t-icon">📐</div><strong>In-House Architects</strong><span>R-60 addition design, basement-first layout, ADU design to MoCo standards</span></div>
                    <div className="team-card"><div className="t-icon">🧱</div><strong>Structural Engineers</strong><span>Load-bearing walls, beam sizing, foundation and crawl space assessment</span></div>
                    <div className="team-card"><div className="t-icon">📋</div><strong>Permit Specialists</strong><span>MoCo DPS applications, U&amp;O Certificates, ADU Rental Facility License</span></div>
                    <div className="team-card"><div className="t-icon">⚡</div><strong>Licensed Electricians</strong><span>Panel upgrades, rewiring, EV chargers, whole-home generators</span></div>
                    <div className="team-card"><div className="t-icon">🔧</div><strong>Licensed Plumbers</strong><span>Basement bath rough-in, kitchen reconfiguration, tankless water heaters</span></div>
                    <div className="team-card"><div className="t-icon">🛠️</div><strong>Finish Carpenters</strong><span>Trim packages, built-ins, and millwork calibrated to your home's character</span></div>
                </div>

                <div className="author-box">
                    <div className="author-avatar">🏗️</div>
                    <div className="author-info">
                        <h4>About DMV-GC Group — North Bethesda's Design-Build Contractor</h4>
                        <p>DMV General Contracting Group holds Maryland MHIC license #156178 and is headquartered in North Bethesda — our projects and our team are local. We have completed kitchen remodels, basement renovations, primary suites, house additions, and ADU constructions throughout North Bethesda's R-60 neighborhoods, PD-15 and PD-21 planned development districts, and CR properties. We confirm your zoning district at consultation, design within its rules, manage MoCo DPS permitting in-house, and — for ADUs — coordinate your separate Rental Facility License so you have a legal, rentable unit on day one.</p>
                        <div className="author-creds">
                            <span className="cred">MHIC #156178</span>
                            <span className="cred">All 3 North Bethesda Zoning Districts</span>
                            <span className="cred">In-House Architects & Engineers</span>
                            <span className="cred">MoCo DPS ADU Specialists</span>
                            <span className="cred">4.9★ Rated</span>
                            <span className="cred">1-Year Warranty</span>
                        </div>
                    </div>
                </div>

                <h2>Design-Build Services We Offer in North Bethesda, MD</h2>

                <div className="service-grid">
                    <div className="service-card">
                        <div className="s-icon">🍳</div>
                        <h3>Kitchen Remodeling</h3>
                        <p>Full design-build kitchen renovations across North Bethesda's range of housing — for 1970s R-60 colonial kitchens, townhome galley kitchens, and condo kitchens alike. Our architects redesign the layout, specify custom cabinetry, quartz or granite counters, and premium appliances, and our in-house trades handle everything from electrical and plumbing to tile and trim. Structural work (load-bearing walls for open-concept kitchens) engineered before demolition.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🛌</div>
                        <h3>Primary Suite & Bathroom Renovation</h3>
                        <p>Primary bedroom suite and bathroom upgrades for North Bethesda homes — expansions that reclaim underused space, spa-quality primary baths with heated tile floors and freestanding tubs, walk-in closets, and layout redesigns. For PD district townhomes, we coordinate with the HOA on permissions; for R-60 homes, we maximize the allowable footprint.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🛖</div>
                        <h3>Basement Remodeling</h3>
                        <p>Finished basements across North Bethesda — home theaters, gyms, bars, rental suites, and in-law spaces. In R-60 homes this frequently includes egress window installation and below-grade bathroom rough-ins. In PD district townhomes, we work within the community's renovation rules. Basement remodeling adds the most valuable bonus square footage to North Bethesda homes.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏘️</div>
                        <h3>House Additions</h3>
                        <p>Rear additions, second-story additions, and side additions for North Bethesda's R-60 detached homes — with the structural engineering and zoning compliance the community requires. Addition projects are designed within your specific district's lot coverage, setback, and FAR limits, so the extra square footage is buildable and approvable. Matched rooflines, windows, and exterior finishes.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏗️</div>
                        <h3>ADU Construction</h3>
                        <p>Accessory dwelling units in North Bethesda — detached ADUs and converted garages for R-60 homes, lower-level units where zoning permits. MoCo DPS permits, U&amp;O Certificate, and the separate county Rental Facility License all coordinated in-house. High-demand rental income for North Bethesda homeowners. Say the phrase and we know exactly what it means.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏡</div>
                        <h3>Whole-Home Renovation</h3>
                        <p>Comprehensive transformation of North Bethesda single-family homes — kitchen, bathrooms, basement, flooring, electrical upgrade, HVAC modernization, and finishes under one coordinated contract. The design-build model keeps a single accountable team across a full renovation, avoiding the fragmentation of managing separate contractors.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">⚡</div>
                        <h3>Electrical & Systems Upgrade</h3>
                        <p>Panel upgrades from 100A to 200A+, full or partial rewiring, EV charger installation, whole-home generators, and smart-home wiring across North Bethesda. Our in-house electricians bundle system modernization into renovation scope so panel and wiring work happens while walls are already open.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">💧</div>
                        <h3>Plumbing & Mechanical</h3>
                        <p>Kitchen and bath reconfiguration, basement bath rough-ins, tankless water heater installation, and full galvanized-supply replacement where old piping needs replacement. Licensed, in-house plumbing ensures your North Bethesda renovation's water systems are code-compliant and durable.</p>
                    </div>
                </div>

                <h2>Design-Build — Where North Bethesda Rents Are Highest</h2>

                <div className="housing-section">
                    <p>North Bethesda's location at the junction of the Red Line, I-270, and the 355 corridor makes it a permanent rental market with a strong renter pool, and accessory dwelling units are a primary way homeowners add real, rentable income. Where ADU rents are highest:</p>
                    <div className="housing-grid">
                        <div className="housing-card">
                            <div className="housing-tag">HIGHEST RENT</div>
                            <h4>R-60 Neighborhoods / White Flint</h4>
                            <p>Detached-unit ADUs near the White Flint Metro Station and 355 corridor command the highest rents in North Bethesda — attaching or converting square footage in R-60 single-family districts.</p>
                        </div>
                        <div className="housing-card">
                            <div className="housing-tag">STRONG</div>
                            <h4>Downtown / Metropolitan Grove</h4>
                            <p>The Market Square and Metropolitan Grove housing areas produce strong rents in attached single-family homes and townhome-style layouts near the commercial corridor.</p>
                        </div>
                        <div className="housing-card">
                            <div className="housing-tag">RENTABLE</div>
                            <h4>Luxembourg / Fallsgrove</h4>
                            <p>These established R-60 neighborhoods offer solid rents on well-designed additions and converted spaces without premium Metro proximity.</p>
                        </div>
                        <div className="housing-card">
                            <div className="housing-tag">LOCAL FAVORITE</div>
                            <h4>Rio / Old Georgetown Rd</h4>
                            <p>The community around Rio Washingtonian Center is a local favorite for ADU and rental-suite builds, with demand driven by the commercial mixed-use area.</p>
                        </div>
                    </div>
                    <div className="hq-box">
                        <h4>🏢 DMV-GC Group HQ — North Bethesda, MD</h4>
                        <p>We are headquartered in North Bethesda, and it shows in the work. Our local team knows the neighborhoods, the communities, and MoCo DPS. When you hire a North Bethesda design-build contractor who is actually based in North Bethesda, your project is built by a team that lives in the community it serves.</p>
                        <ul>
                            <li>Local permitting and inspection coordination</li>
                            <li>Neighborhood and HOA familiarity</li>
                            <li>MoCo DPS relationships and process mastery</li>
                            <li>Close to your project site for daily supervision</li>
                        </ul>
                    </div>
                </div>

                <h2>Design-Build Process for North Bethesda Homes</h2>

                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free Consultation — Zoning Confirmed, Scope Discussed</h3>
                            <p>We visit your North Bethesda home and confirm your zoning district — R-60, PD-15/PD-21, or CR — from MoCo records. We assess structure, systems, and layout, and discuss your goals: kitchen, primary suite, basement, addition, or ADU. For ADU projects we confirm the county's dimensional standards apply to your lot. No cost, no obligation.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Concept Design & Budget</h3>
                            <p>Our architects develop concept designs tailored to your home and zoning — kitchen layouts, addition massing within setback and lot coverage limits, basement floor plans, or ADU designs meeting MoCo dimensional standards. We deliver an accurate design-build budget covering design, permits, and construction.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Design Development & Material Selection</h3>
                            <p>Detailed construction drawings and material selections — cabinetry, countertops, tile, flooring, fixtures, and finishes. For additions, structural engineering of foundations, beams, and framing. For ADUs, full drawings to MoCo DPS standards including the required energy and dimensional documentation.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Permit Filing — MoCo DPS, Managed In-House</h3>
                            <p>Complete permit package filed with MoCo DPS, with all supporting drawings and documentation. We manage review, responses, and approval — homeowners never navigate the county process alone. For ADUs, we additionally coordinate the separate Rental Facility License from Montgomery County.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Construction by Licensed In-House Trades</h3>
                            <p>Demolition, framing, electrical, plumbing, HVAC, drywall, tile, cabinetry, flooring, and finishes — executed by our own licensed trades. For PD district townhomes, we coordinate neighborhood rules and HOA requirements throughout. One project manager. Weekly updates.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Inspections, Punch List & Permit Close</h3>
                            <p>All MoCo DPS inspections scheduled and managed through final approval. Detailed punch list review, permit close, written warranty documentation. For ADUs: final U&amp;O Certificate obtained so your rental is fully legal.</p>
                        </div>
                    </div>
                </div>

                <h2>Design-Build Project Costs in North Bethesda, MD</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr><th>Project Type</th><th>Typical Design-Build Cost in North Bethesda</th><th>Design & Permits Included</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Kitchen Remodel (townhome)</td><td>$45,000 – $150,000+</td><td>Layout, renderings, custom spec, MoCo DPS permit</td></tr>
                                <tr><td>Kitchen Remodel (R-60 single-family)</td><td>$60,000 – $175,000+</td><td>Layout, structural assessment, custom spec, permit</td></tr>
                                <tr><td>Primary Bathroom Renovation</td><td>$30,000 – $80,000+</td><td>Layout, fixtures, tile spec, MoCo DPS permit</td></tr>
                                <tr><td>Basement Remodel</td><td>$50,000 – $150,000+</td><td>Floor plan, egress/bath specs, MoCo DPS permit</td></tr>
                                <tr><td>House Addition (R-60)</td><td>$250,000 – $800,000+</td><td>Zoning-compliant arch. drawings, structural eng., permit</td></tr>
                                <tr><td>ADU Construction</td><td>$80,000 – $250,000+</td><td>MoCo-standard design, DPS permit, Rental Facility License</td></tr>
                                <tr><td>Whole-Home Renovation</td><td>$150,000 – $650,000+</td><td>Comprehensive design, systems upgrade, permit</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>North Bethesda design-build — get the zoning right first:</strong> A homeowner who assumes their property is governed the same way as a neighbor's risks an unbuildable design and permit rejection. Each district — R-60, PD-15/PD-21, and CR — has different footprint, setback, and approval rules. Confirming your district at consultation means your design is buildable and approvable from the first drawing, saving weeks and avoiding redesign costs.
                </div>

                <h2>What North Bethesda Homeowners Say About DMV-GC Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"DMV-GC Group did a complete ADU conversion of our detached garage in our North Bethesda R-60 home. They handled everything — architecture, engineering, the MoCo DPS permit, construction, and the separate Rental Facility License. We now rent the finished unit for $2,100/month. The process was entirely turn-key; we never touched a permit form."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">North Bethesda, MD (White Flint)</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our 1972 North Bethesda colonial needed a full kitchen remodel and a panel upgrade from 100A to 200A with a new EV charger. DMV-GC Group bundled the electrical work into the kitchen scope while walls were open. The finished remodel is beautiful, and we saved thousands on the electrical portion compared to doing it as a separate job."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">North Bethesda, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We live in a townhome in a PD-21 community off Old Georgetown Road. DMV-GC Group handled the HOA approvals, then did our kitchen and both bathrooms. They understood the community's renovation process completely and the workmanship is excellent. They made the whole thing easy."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">North Bethesda, MD (PD-21)</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"DMV-GC Group finished our basement with a full second bathroom and egress window on our R-60 lot. Design, permits, construction — all in-house and on schedule. It added real value and usable space to our home. Highly recommend them to any North Bethesda homeowner."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">North Bethesda, MD (Rockville Pike)</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> North Bethesda homeowners choose DMV-GC Group because we are local, in-house, and design-build — a single accountable team across architecture, engineering, permitting, and construction, across all three North Bethesda zoning districts, including MoCo DPS-permitted ADU construction.</p>
                </div>

                <div className="cta-banner">
                    <h2>Start Your Design-Build Project in North Bethesda</h2>
                    <p>Our local North Bethesda team will confirm your zoning district, assess your home, and develop a design-build plan for your kitchen, primary suite, basement, addition, or ADU. In-house architects, engineers, permit specialists, and trades — one contract, full accountability.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Design Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving North Bethesda, MD Neighborhoods</h2>
                <div className="areas-grid">
                    <span className="area-pill">White Flint</span>
                    <span className="area-pill">Twinbrook</span>
                    <span className="area-pill">Rockville Pike / 355 Corridor</span>
                    <span className="area-pill">Nicholson Lane</span>
                    <span className="area-pill">Old Georgetown Road</span>
                    <span className="area-pill">Grosvenor Park</span>
                    <span className="area-pill">Luxembourg</span>
                    <span className="area-pill">Fallsgrove</span>
                    <span className="area-pill">Market Square</span>
                    <span className="area-pill">Rio Washingtonian Center</span>
                    <span className="area-pill">Pike &amp; Rose</span>
                </div>

                <div className="nearby-box">
                    <h3>Also serving Rockville, MD — immediately north</h3>
                    <p>Rockville shares North Bethesda's Montgomery County building codes and MoCo DPS permitting. DMV-GC Group brings the same design-build expertise northward across a community of distinct, evolving neighborhoods. <Link href="/service/design-build">View our full design-build service page →</Link></p>
                </div>

                <h2>Frequently Asked Questions — Design-Build in North Bethesda, MD</h2>
                <Accordion className="faq-list" defaultActiveKey="0">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="internal-links">
                    <h2>Explore Our Other Services in North Bethesda, MD</h2>
                    <ul>
                        <li><Link href="/service/kitchen-remodeling/north-bethesda-md">Kitchen Remodeling in North Bethesda, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling/north-bethesda-md">Bathroom Remodeling in North Bethesda, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/north-bethesda-md">Basement Remodeling in North Bethesda, MD</Link></li>
                        <li><Link href="/service/adu/north-bethesda-md">ADU Construction in North Bethesda, MD</Link></li>
                        <li><Link href="/service/home-additions">Home Additions in North Bethesda, MD</Link></li>
                        <li><Link href="/service/design-build">Design-Build in North Bethesda, MD</Link></li>
                    </ul>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Work with a True Design-Build Contractor in North Bethesda?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free consultation. Local, licensed, and in-house — we will confirm your zoning district and build your North Bethesda kitchen, basement, addition, or ADU on budget and on schedule.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Design-Build Consultation in North Bethesda →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default NorthBethesdaMD;
