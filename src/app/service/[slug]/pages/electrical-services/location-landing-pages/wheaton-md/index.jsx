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
            question: "Where are electrical permits filed in Wheaton, MD?",
            answer: "Electrical permits in Wheaton are filed with Montgomery County DPS at 2425 Reedie Drive, Wheaton, MD 20902 — the MoCo DPS office is located in Wheaton itself. Wheaton is unincorporated Montgomery County with no separate municipal permit office. DMV General Contracting Group files at MoCo DPS at 2425 Reedie Drive routinely — for Wheaton projects, we are filing at an office in the same community where we are working."
        },
        {
            question: "Does my Wheaton home have a Federal Pacific panel?",
            answer: "If your Wheaton home was built between the late 1950s and early 1980s, there is a meaningful probability it has a Federal Pacific Electric Stab-Lok panel — they were among the most commonly installed panels in Montgomery County residential construction of that era. The panel can be identified by the \"Federal Pacific Electric\" or \"Stab-Lok\" label on the panel door. DMV General Contracting Group identifies Federal Pacific panels at the free estimate and replaces them with full 200A upgrades permitted at MoCo DPS with complete inspection documentation for Maryland insurance carriers."
        },
        {
            question: "How much does a panel upgrade cost in Wheaton, MD?",
            answer: "A 100A to 200A panel upgrade in Wheaton typically costs $2,900–$5,000. Federal Pacific or Zinsco replacement runs $3,200–$5,800. A combined panel upgrade and EV charger installation runs $3,500–$6,500. All costs include MoCo DPS permit fees and required inspection. DMV General Contracting Group provides free, itemized estimates for all Wheaton electrical projects."
        },
        {
            question: "Why do electrical upgrades return so much in Wheaton compared to other MoCo communities?",
            answer: "Wheaton offers the strongest home improvement ROI in Montgomery County because home prices are significantly undervalued relative to the community's location and Metro access. Electrical objections — Federal Pacific panels, aluminum wiring, 100A service — suppress Wheaton home prices and give buyers negotiating leverage at inspection. Resolving these issues proactively before listing removes them from the inspection report entirely. The cost of a comprehensive electrical update in Wheaton ($5,500–$9,000) is routinely recovered many times over by eliminating buyer objections and positioning the home as move-in ready."
        },
        {
            question: "Can DMV General Contracting Group install an EV charger in my Wheaton home?",
            answer: "Yes. EV charger installation is one of our most requested services in Wheaton — particularly for Metro commuters who have switched to EVs and need reliable overnight home charging. We assess panel capacity at the free estimate and quote the charger and any needed panel upgrade together. All Wheaton EV charger installations are permitted with MoCo DPS at 2425 Reedie Drive and inspected before closing."
        }
    ];

    return (
        <>
            <div className="city-service-detail-page electrical-wheaton-md">
                <div className="container">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <Link href="/">Home</Link><span>›</span>
                        <Link href="/services">Services</Link><span>›</span>
                        <Link href="/service/electrical-services">Electrical Services</Link><span>›</span>
                        Wheaton, MD
                    </nav>

                    <div className="hero">
                        <div className="hero-location-tag">📍 Serving Wheaton, MD — MoCo DPS Is Located Here</div>
                        <h1>Licensed Electrical Services in Wheaton, MD</h1>
                        <div className="hero-meta">
                            <span className="badge key">🏠 Mid-Century Home Electrical Specialists</span>
                            <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                            <span className="badge">✓ MHIC Licensed #156178</span>
                            <span className="badge">✓ MoCo DPS — 2425 Reedie Drive, Wheaton</span>
                            <span className="badge">✓ Federal Pacific Panel Replacement</span>
                            <span className="badge">✓ Aluminum Wiring Remediation</span>
                            <span className="badge dark">📞 +1 240-730-1292</span>
                        </div>
                    </div>

                    <div className="banner">
                        <div className="icon">🏠</div>
                        <div>
                            <h3>Wheaton Is Where Montgomery County DPS Is Located — and Where DMV General Contracting Group Files Permits Daily. For Wheaton Homeowners, Our Permit Team Is Literally Working in Your Community Every Week</h3>
                            <p>Montgomery County DPS — the permit office for all unincorporated Montgomery County electrical work — is located at 2425 Reedie Drive, Wheaton, MD 20902. Wheaton is the permit office's home community, which means that when DMV General Contracting Group files electrical permits for Wheaton projects, we are filing permits at an office in the same neighborhood where the work is being done. Our permit team files at MoCo DPS routinely — we know the reviewers, the submission requirements, and the typical turnaround for Wheaton electrical permits. For Wheaton homeowners, this local permit familiarity translates directly into faster permit cycles and no surprises in the county review process. Wheaton's 1950s–1970s housing stock — ranches, split-levels, and colonials in Glenmont, Arcola, Kemp Mill, and Wheaton Forest — carries the same mid-century electrical conditions that require attention throughout Montgomery County: undersized 100A panels, Federal Pacific Stab-Lok fire hazard panels, and aluminum branch circuit wiring in homes built between 1965 and 1973. DMV General Contracting Group assesses all three at the free estimate, provides honest remediation recommendations, and manages the full MoCo DPS permit process for every Wheaton electrical project.</p>
                        </div>
                    </div>

                    <div className="intro-box">
                        Looking for a licensed <strong>electrician in Wheaton, MD</strong>? DMV General Contracting Group provides comprehensive residential electrical services for Wheaton homeowners — panel upgrades from 100A to 200A, Federal Pacific and Zinsco panel replacement, aluminum branch circuit remediation, EV charger installation, whole-home rewiring, GFCI and AFCI protection, recessed lighting, smart home wiring, standby generator installation, and full renovation electrical. All permits filed with Montgomery County DPS at 2425 Reedie Drive, Wheaton — our regular permit office. MHIC licensed #156178, fully insured. Free in-home electrical assessment. Call +1 240-730-1292.
                    </div>

                    <div className="trust-bar">
                        <div className="trust-item"><div className="icon">📋</div><strong>MoCo DPS Is in Wheaton</strong><span>2425 Reedie Drive — we file permits here daily for Wheaton projects</span></div>
                        <div className="trust-item"><div className="icon">🔥</div><strong>Federal Pacific Specialists</strong><span>High concentration in Wheaton's 1960s–70s stock — replacement experts</span></div>
                        <div className="trust-item"><div className="icon">📈</div><strong>Strongest MoCo ROI</strong><span>Electrical upgrades return more in Wheaton than anywhere in the county</span></div>
                        <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                    </div>

                    <h2>Permits for Wheaton Electrical Work — MoCo DPS at 2425 Reedie Drive, Right Here in Wheaton</h2>

                    <div className="permit-box">
                        <h3>📋 Why Wheaton Homeowners Benefit From Our MoCo DPS Familiarity</h3>
                        <ul>
                            <li><strong>MoCo DPS is located in Wheaton — and we file there constantly:</strong> Montgomery County DPS at 2425 Reedie Drive is Wheaton's own permit office — located in the same community as the homes we are working on. DMV General Contracting Group's permit team files at MoCo DPS multiple times per week across all of our Montgomery County service area. For Wheaton projects specifically, we are filing at the office in your own neighborhood — knowing the current reviewers, the preferred submission format, and the typical review timeline for Wheaton residential electrical permits. This familiarity translates into correctly prepared submissions that go through review without back-and-forth, and accurate timeline expectations we set from the start.</li>
                            <li><strong>Wheaton is unincorporated Montgomery County — no separate municipal office:</strong> Unlike Kensington (Town of Kensington at 3710 Mitchell Street), Garrett Park (Town of Garrett Park at 4600 Oxford Street), Gaithersburg (City of Gaithersburg DPW), or Rockville (City of Rockville at 111 Maryland Avenue), Wheaton has no separate municipal permit office. All Wheaton electrical permits go to MoCo DPS. This is the correct single destination for all electrical work in Wheaton — and DMV General Contracting Group files there for every Wheaton project without exception.</li>
                            <li><strong>What we file for Wheaton electrical permits:</strong> Panel upgrade permits include load calculations, new panel specifications, and trade permit applications. Rewiring permits include circuit-by-circuit documentation and panel documentation. EV charger permits include dedicated circuit specifications and panel capacity confirmation. Generator permits include transfer switch specifications, pad location, and gas line documentation. We prepare complete packages — county reviewers receive everything needed to approve in a single review cycle.</li>
                            <li><strong>Inspection coordination:</strong> MoCo DPS inspectors cover all Wheaton electrical inspections. DMV General Contracting Group schedules all required inspections — rough-in for in-wall wiring and final inspections for panels and circuits — and coordinates inspector access with your household. We are present at all inspections and address any inspector comments before the project closes.</li>
                        </ul>
                    </div>

                    <h2>Electrical Services We Offer in Wheaton, MD</h2>

                    <div className="service-grid">
                        <div className="service-cat">
                            <div className="cat-icon">⚡</div>
                            <div className="cat-label">Most Common</div>
                            <h3>Panel & Service Upgrades</h3>
                            <ul>
                                <li>100A → 200A panel upgrade</li>
                                <li>Federal Pacific / Zinsco replacement</li>
                                <li>Fuse box to breaker panel conversion</li>
                                <li>200A → 400A service upgrade</li>
                                <li>Subpanel for garages & additions</li>
                                <li>AFCI breaker installation</li>
                            </ul>
                        </div>
                        <div className="service-cat">
                            <div className="cat-icon">🔶</div>
                            <div className="cat-label">Safety Critical</div>
                            <h3>Wiring & Safety Upgrades</h3>
                            <ul>
                                <li>Aluminum branch circuit remediation</li>
                                <li>CO/ALR device installation</li>
                                <li>Whole-home copper rewiring</li>
                                <li>GFCI outlet installation — all wet areas</li>
                                <li>Smoke & CO detector hardwiring</li>
                                <li>Whole-home electrical safety inspection</li>
                            </ul>
                        </div>
                        <div className="service-cat">
                            <div className="cat-icon">🚗</div>
                            <div className="cat-label">Most Requested</div>
                            <h3>EV Charging & New Circuits</h3>
                            <ul>
                                <li>Level 2 EV charger installation (240V)</li>
                                <li>Tesla, ChargePoint, JuiceBox install</li>
                                <li>Dedicated kitchen appliance circuits</li>
                                <li>Home office dedicated circuits</li>
                                <li>Heat pump & HVAC circuits</li>
                                <li>Garage & outdoor circuits</li>
                            </ul>
                        </div>
                        <div className="service-cat">
                            <div className="cat-icon">💡</div>
                            <div className="cat-label">Lifestyle Upgrades</div>
                            <h3>Lighting & Smart Home</h3>
                            <ul>
                                <li>Recessed LED lighting installation</li>
                                <li>Under-cabinet lighting wiring</li>
                                <li>Dimmer & smart switch installation</li>
                                <li>Lutron & Leviton smart systems</li>
                                <li>Ceiling fan installation & wiring</li>
                                <li>Outdoor & landscape lighting</li>
                            </ul>
                        </div>
                        <div className="service-cat">
                            <div className="cat-icon">🔋</div>
                            <div className="cat-label">Backup Power</div>
                            <h3>Generator & Backup Power</h3>
                            <ul>
                                <li>Whole-home standby generator install</li>
                                <li>Generac, Kohler installation</li>
                                <li>Automatic transfer switch</li>
                                <li>Manual transfer switch & interlock</li>
                                <li>Portable generator hookup</li>
                                <li>Gas line coordination</li>
                            </ul>
                        </div>
                        <div className="service-cat">
                            <div className="cat-icon">🔨</div>
                            <div className="cat-label">Remodel Support</div>
                            <h3>Renovation Electrical</h3>
                            <ul>
                                <li>Kitchen remodel electrical rough-in</li>
                                <li>Bathroom electrical & exhaust fan</li>
                                <li>Home addition electrical scope</li>
                                <li>Basement finishing electrical</li>
                                <li>ADU electrical service installation</li>
                                <li>Home office wiring & circuits</li>
                            </ul>
                        </div>
                    </div>

                    <h2>Wheaton's Mid-Century Electrical Conditions — What We Find at the Free Estimate</h2>

                    <p>Wheaton's housing stock is concentrated in the 1950s–1970s construction window that produced the most common residential electrical issues in Montgomery County. Here is what our electricians assess at every Wheaton free estimate:</p>

                    <div className="warning-box">
                        <h3>🚨 Federal Pacific Stab-Lok Panels — Heavily Concentrated in Wheaton's 1960s–1970s Construction</h3>
                        <p>Federal Pacific Electric was among the most commonly specified panel manufacturers for Montgomery County residential construction in the 1960s and 1970s — and Wheaton's concentration of homes from this exact era means Federal Pacific panels appear frequently throughout the community. The Stab-Lok breaker design has been identified as a fire hazard: breakers fail to trip during overloads at a rate that significantly exceeds acceptable safety standards, allowing circuits to carry current past safe amperage without the protection the breaker is supposed to provide. A Wheaton home with a Federal Pacific panel may have had it in place for 50+ years without an obvious incident — the failure mode is not that the panel fails constantly, but that it fails to protect when protection is needed. Maryland insurance carriers have become significantly more aggressive about Federal Pacific panels in recent years, with many requiring replacement documentation before policy renewal. DMV General Contracting Group identifies Federal Pacific panels at every Wheaton free estimate and replaces them with full 200A upgrades — permitting through MoCo DPS at 2425 Reedie Drive and providing complete inspection documentation for insurance carriers.</p>
                    </div>

                    <div className="highlight">
                        <p>🔶 <strong>Aluminum branch circuit wiring in Wheaton's 1965–1973 homes:</strong> Wheaton has a significant number of homes built in the aluminum wiring era — the 8-year window when copper prices spiked and aluminum was substituted for branch circuit wiring throughout the country. Aluminum wiring loosens at outlet and switch connections over time, creating arcing that is a leading fire cause in homes of this vintage. Wheaton homeowners who know their home was built between 1965 and 1973 should request an aluminum wiring assessment at the free estimate — it cannot be confirmed without opening outlet boxes, but it is the single most important electrical safety check for homes of that specific vintage. CO/ALR device remediation ($2,500–$5,500 for most Wheaton homes) or full copper rewiring ($9,000–$19,000+) are the two remediation paths DMV General Contracting Group presents with honest cost and risk comparisons at every Wheaton estimate.</p>
                    </div>

                    <h2>Panel Upgrade Cost in Wheaton, MD</h2>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead>
                                    <tr><th>Panel Upgrade</th><th>Wheaton Cost</th><th>EV Ready?</th><th>Notes</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>100A Panel (existing — 1950s–60s standard)</td><td>Upgrade recommended</td><td>⚠️ Marginal</td><td>Cannot reliably support EV + heat pump + modern kitchen</td></tr>
                                    <tr><td>100A → 200A Upgrade ⭐</td><td>$2,900 – $5,000</td><td>✅ Yes</td><td>Today's standard; supports all modern Wheaton home loads</td></tr>
                                    <tr><td>Federal Pacific / Zinsco Replacement</td><td>$3,200 – $5,800</td><td>✅ Yes — if upgraded to 200A</td><td>Fire hazard eliminated; insurance documentation provided</td></tr>
                                    <tr><td>200A → 400A Service Upgrade</td><td>$5,000 – $9,000</td><td>✅ Yes — multiple EVs</td><td>Larger Wheaton homes with high simultaneous loads</td></tr>
                                    <tr><td>Subpanel Addition</td><td>$1,500 – $3,200</td><td>✅ Yes — can be sized for EV</td><td>Detached garages, additions, ADUs</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h2>Why Electrical Upgrades Return More in Wheaton Than Anywhere Else in MoCo</h2>

                    <div className="highlight">
                        <p>📈 <strong>Wheaton's Electrical Investment Math — Strongest ROI in Montgomery County:</strong> Wheaton consistently offers the strongest return on home improvement investment in Montgomery County — Metro Red Line access, proximity to DC, and home prices significantly below comparable communities in Bethesda, Chevy Chase, and Potomac mean that every improvement dollar returns more here than almost anywhere in the county. Electrical upgrades are among the highest-ROI improvements available to Wheaton homeowners for a specific reason: they directly address the conditions that suppress Wheaton home prices and create buyer objections at inspection. A Wheaton home with a Federal Pacific panel, aluminum wiring, and a 100A service will receive inspection report items that cost sellers negotiating leverage. The same home with a new 200A panel, CO/ALR remediation, and an EV charger circuit arrives at settlement with no electrical objections — and an EV-ready feature that buyers in Wheaton's active market value. The total cost of these upgrades combined ($5,500–$9,000 for most Wheaton homes) is recovered many times over in a Wheaton resale transaction where electrical objections are removed from the negotiating table.</p>
                    </div>

                    <h2>EV Charger Installation in Wheaton</h2>

                    <div className="highlight">
                        <p>🚗 <strong>Wheaton's Metro Red Line access and DC commuter demographics make EV ownership a natural fit</strong> — and Level 2 home charging is increasingly expected by Wheaton homebuyers. A dedicated 240V EV charger circuit allows full overnight charging for most EVs, eliminating range anxiety for daily DC commuters. As with Silver Spring's mid-century homes, the first step for a Wheaton EV charger installation is confirming panel capacity: a 100A panel already handling a modern kitchen, air conditioning, and home office loads may have limited headroom for a dedicated 50A EV circuit. DMV General Contracting Group assesses panel load at the free estimate and quotes the charger alongside any required panel upgrade — so you know the full project cost before committing. All Wheaton EV charger installations permitted with MoCo DPS at 2425 Reedie Drive and inspected before the project closes.</p>
                    </div>

                    <h2>Electrical Warning Signs in Wheaton's Mid-Century Homes</h2>

                    <div className="signs-grid">
                        <div className="sign-card">
                            <div className="s-icon">🔥</div>
                            <h3>Federal Pacific Panel</h3>
                            <p>Fire hazard in Wheaton's 1960s–70s homes. Stab-Lok breakers fail to trip on overload — common throughout Wheaton's mid-century construction era.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">⚡</div>
                            <h3>Breakers Tripping Under Normal Load</h3>
                            <p>100A panel at capacity — running AC, microwave, and home office simultaneously trips breakers. Panel upgrade to 200A is the permanent fix.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">🔶</div>
                            <h3>Silver Wire at Outlets</h3>
                            <p>Silver-colored wire visible at outlet boxes in 1965–1973 Wheaton homes — aluminum branch circuit wiring that requires assessment and remediation.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">💡</div>
                            <h3>Lights Dimming When Appliances Start</h3>
                            <p>Voltage sag when HVAC or large appliances start — undersized 100A service struggling with simultaneous loads common in Wheaton's older homes.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">🔌</div>
                            <h3>Two-Prong Outlets Throughout</h3>
                            <p>Ungrounded outlets in most rooms — original mid-century wiring; safety issue and prevents safe use of three-prong modern devices.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">👃</div>
                            <h3>Burning Smell Near Panel or Outlets</h3>
                            <p>Any burning or electrical smell near the panel, outlets, or switches — fire emergency warning sign requiring immediate professional assessment.</p>
                        </div>
                    </div>

                    <h2>Our Electrical Service Process in Wheaton</h2>

                    <div className="steps">
                        <div className="step">
                            <div className="step-num">1</div>
                            <div className="step-content">
                                <h3>Free In-Home Electrical Assessment — Panel, Wiring Type & Load Profile</h3>
                                <p>We visit your Wheaton home and assess the full electrical picture: panel size and brand (Federal Pacific flagged immediately), evidence of aluminum wiring for 1965–1973 construction, outlet grounding status, and current load versus panel capacity. We discuss planned additions — EV charger, heat pump, renovation, or addition — and confirm whether the existing panel supports the planned load. Detailed written estimate at no charge, no obligation.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-num">2</div>
                            <div className="step-content">
                                <h3>MoCo DPS Permit Application — 2425 Reedie Drive, Right Here in Wheaton</h3>
                                <p>We prepare and file all electrical permits with MoCo DPS at 2425 Reedie Drive — the permit office in your community. Complete submission packages prepared in-house: load calculations, panel specifications, trade permit applications, and all required documentation. We manage all county correspondence and track permit approval. MoCo DPS electrical permit review for Wheaton projects typically runs 1–3 weeks for panel projects. You do not contact the county at any point.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-num">3</div>
                            <div className="step-content">
                                <h3>Electrical Work — Mid-Century Home Conditions Managed</h3>
                                <p>Our licensed electricians complete all work with care for Wheaton's mid-century homes — protecting original hardwood floors, plaster and drywall surfaces, and period details. For Federal Pacific panel replacements, we coordinate the brief power interruption window with your household. For aluminum wiring CO/ALR remediation, we open every outlet and switch box in the home, install CO/ALR-rated devices, apply anti-oxidant compound at each connection, and document every location. For panel upgrades, new panel and breakers installed cleanly with all circuits labeled.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-num">4</div>
                            <div className="step-content">
                                <h3>MoCo DPS Inspection & Final Testing</h3>
                                <p>We schedule and manage all required MoCo DPS electrical inspections — rough-in and final. All inspections take place at 2425 Reedie Drive's inspection scheduling system — the office we work with daily. Upon passing inspection, we test all circuits, outlets, and panels with you and provide written documentation of all work completed for insurance carriers and future reference. Written warranty at project close.</p>
                            </div>
                        </div>
                    </div>

                    <h2>What Wheaton Homeowners Say About DMV General Contracting Group</h2>

                    <div className="review-grid">
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"We had a Federal Pacific Stab-Lok panel in our 1965 Wheaton split-level — found it when we got a new homeowners insurance quote and the inspector flagged it. DMV General Contracting Group replaced it with a full 200A upgrade and added an EV charger circuit for our new car at the same time. One combined MoCo DPS permit, one inspection, done in a day and a half. Insurance renewed without the Federal Pacific surcharge. The EV charger works perfectly."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Glenmont, Wheaton MD</span></div>
                        </div>
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"Our 1969 Wheaton colonial had aluminum branch circuit wiring throughout — discovered at a home inspection before we listed it for sale. DMV General Contracting Group came within two days, assessed every circuit, and performed CO/ALR remediation at every outlet and switch in the house. They provided written documentation of every location completed. Our buyer's inspector found the documentation at the re-inspection and passed the electrical system without comment. We avoided a $15,000 price reduction on a $2,900 project."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Arcola, Wheaton MD</span></div>
                        </div>
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"We're renovating our Wheaton ranch — kitchen, basement, and a rear addition — and DMV General Contracting Group is handling all the electrical as part of the same project. They upgraded our 100A panel to 200A, wired the addition and new basement, installed recessed lighting throughout, and ran the EV charger circuit to the garage. All under one MoCo DPS permit package. Knowing their permit team files at 2425 Reedie Drive regularly gave us confidence the permit wouldn't get stuck in review."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Wheaton Forest, Wheaton MD</span></div>
                        </div>
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"We bought a 1958 Wheaton ranch with a 100A panel and two-prong outlets in every room. DMV General Contracting Group upgraded the panel to 200A, added GFCI protection in all bathrooms and the kitchen, installed AFCI breakers throughout, and added recessed lighting in the main floor. The house feels like a completely different electrical environment. Everything is permitted and inspected through MoCo DPS. I didn't have to make a single call to the county."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Kemp Mill, Wheaton MD</span></div>
                        </div>
                    </div>

                    <div className="highlight">
                        <p>⭐ <strong>4.9-star rated with 97+ verified homeowner reviews.</strong> Wheaton homeowners trust DMV General Contracting Group for mid-century electrical work that identifies Federal Pacific panels and aluminum wiring at the free estimate, files all permits at MoCo DPS at 2425 Reedie Drive — in Wheaton itself — manages the full inspection process in-house, and delivers the documentation needed for insurance compliance and resale confidence. Wheaton's strong ROI market means every electrical upgrade invested here returns more than anywhere else in Montgomery County.</p>
                    </div>

                    <div className="cta-banner">
                        <h2>Get a Free Electrical Assessment for Your Wheaton Home</h2>
                        <p>Our licensed electricians will visit your Wheaton home, assess panel condition, check for Federal Pacific and aluminum wiring, and provide a detailed estimate — no charge, no obligation. Permits filed at MoCo DPS, 2425 Reedie Drive — right here in Wheaton.</p>
                        <Link href="/contact-us" className="cta-btn">Schedule Free Electrical Assessment →</Link>
                        <Link href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</Link>
                    </div>

                    <h2>Serving All Wheaton, MD Communities for Electrical Services</h2>
                    <div className="areas-grid">
                        <span className="area-pill">Glenmont</span>
                        <span className="area-pill">Arcola</span>
                        <span className="area-pill">Kemp Mill</span>
                        <span className="area-pill">Wheaton Forest</span>
                        <span className="area-pill">Shorefield</span>
                        <span className="area-pill">Norbeck Grove</span>
                        <span className="area-pill">Layhill Road Corridor</span>
                        <span className="area-pill">Grandview Avenue Area</span>
                    </div>

                    <h2>Frequently Asked Questions — Electrical Services in Wheaton, MD</h2>
                    <Accordion defaultActiveKey="0" flush>
                        {faqData.map((faq, index) => (
                            <Accordion.Item eventKey={index.toString()} key={index}>
                                <Accordion.Header>{faq.question}</Accordion.Header>
                                <Accordion.Body>
                                    <div className="blog-html-content" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>

                    <div className="internal-links">
                        <h2>Explore Our Other Services in Wheaton, MD</h2>
                        <ul>
                            <li><Link href="/service/home-additions/wheaton-md">Home Additions in Wheaton, MD</Link></li>
                            <li><Link href="/service/design-build/wheaton-md">Design-Build Contractor in Wheaton, MD</Link></li>
                            <li><Link href="/service/kitchen-remodeling/wheaton-md">Kitchen Remodeling in Wheaton, MD</Link></li>
                            <li><Link href="/service/bathroom-remodeling/wheaton-md">Bathroom Remodeling in Wheaton, MD</Link></li>
                            <li><Link href="/service/basement-remodeling/wheaton-md">Basement Remodeling in Wheaton, MD</Link></li>
                            <li><Link href="/service/siding-installation/wheaton-md">Siding Installation in Wheaton, MD</Link></li>
                            <li><Link href="/service/flooring-remodeling/wheaton-md">Flooring Installation in Wheaton, MD</Link></li>
                            <li><Link href="/service/plumbing-services/wheaton-md">Plumbing Services in Wheaton, MD</Link></li>
                        </ul>
                    </div>

                    <div className="source-note">
                        <strong>Research & verification note:</strong> Local permitting and historic-preservation information was checked against Montgomery County public resources. Lead-safe/RRP information was checked against current U.S. EPA guidance. This page should be reviewed periodically because municipal procedures, fees, codes and regulatory requirements can change.
                    </div>

                    <div className="cta-banner">
                        <h2>Ready to Update Your Wheaton Home's Electrical System?</h2>
                        <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free assessment. Panel upgrades, Federal Pacific replacement, aluminum wiring remediation, EV charger installation. Permits filed at MoCo DPS — right here at 2425 Reedie Drive in Wheaton. MHIC licensed. Available 7 days a week.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Electrical Estimate in Wheaton →</Link>
                        <Link href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default WheatonMD;
