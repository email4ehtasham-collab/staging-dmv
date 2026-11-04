'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const SilverSpringMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Where are electrical permits filed in Silver Spring, MD?",
            answer: "Silver Spring is unincorporated Montgomery County — all electrical permits are filed with Montgomery County DPS at 2425 Reedie Drive, Wheaton, MD 20902. Silver Spring has no separate municipal permit office. DMV General Contracting Group files all Silver Spring electrical permits at MoCo DPS and manages the full permit and inspection process in-house — you do not contact the county at any point."
        },
        {
            question: "How do I know if my Silver Spring home has aluminum branch circuit wiring?",
            answer: "If your Silver Spring home was built between 1965 and 1973, there is a meaningful probability it has aluminum branch circuit wiring. It cannot be confirmed without opening outlet boxes or inspecting the panel — aluminum-wired circuits have silver-colored conductors labeled \"AL\" on the wire jacket. DMV General Contracting Group checks for aluminum wiring at the free estimate for every Silver Spring home in this construction window — confirming presence and recommending CO/ALR remediation or full rewiring based on what we find."
        },
        {
            question: "What is the difference between CO/ALR remediation and full rewiring for aluminum wiring?",
            answer: "CO/ALR remediation replaces every outlet, switch, and device in the home with CO/ALR-rated devices designed for aluminum wiring, and applies anti-oxidant compound at every connection point. This addresses the loosening connection hazard without replacing the wire itself — a recognized CPSC-approved remediation. Full rewiring replaces all aluminum branch circuit wiring with copper throughout the home, eliminating the hazard completely. Full rewiring is more comprehensive but significantly more expensive. DMV General Contracting Group presents both options with honest cost and risk comparisons for each Silver Spring project."
        },
        {
            question: "Does my Silver Spring 100A panel need to be upgraded before installing an EV charger?",
            answer: "Possibly — it depends on how much of the existing 100A capacity is already in use. A Level 2 EV charger requires a dedicated 50A circuit. If your existing loads are already using 60–70A of your 100A panel's capacity, adding a 50A EV circuit will consistently push the panel into overload. DMV General Contracting Group assesses your panel's current load at the free estimate and tells you honestly whether a panel upgrade is needed before the charger installation — quoting both scopes together so you have the complete project cost."
        },
        {
            question: "How much does a panel upgrade cost in Silver Spring, MD?",
            answer: "A 100A to 200A panel upgrade in Silver Spring typically costs $3,000–$5,200, including the new panel, all breakers, MoCo DPS permit fees, and required inspection. Federal Pacific or Zinsco panel replacement runs $3,400–$6,000. A 200A to 400A service upgrade runs $5,200–$9,500. DMV General Contracting Group provides free, itemized estimates for all Silver Spring panel projects."
        }
    ];

    return (
        <>
            <div className="city-service-detail-page electrical-silver-spring-md">
                <div className="container">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <Link href="/">Home</Link><span>›</span>
                        <Link href="/services">Services</Link><span>›</span>
                        <Link href="/service/electrical-services">Electrical Services</Link><span>›</span>
                        Silver Spring, MD
                    </nav>

                    <div className="hero">
                        <div className="hero-location-tag">📍 Serving Silver Spring, MD</div>
                        <h1>Licensed Electrical Services in Silver Spring, MD</h1>
                        <div className="hero-meta">
                            <span className="badge key">⚡ Split-Level & Colonial Electrical Specialists</span>
                            <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                            <span className="badge">✓ MHIC Licensed #156178</span>
                            <span className="badge">✓ MoCo DPS Permitted — All Work Inspected</span>
                            <span className="badge">✓ Aluminum Wiring Remediation</span>
                            <span className="badge">✓ Federal Pacific Panel Replacement</span>
                            <span className="badge dark">📞 +1 240-730-1292</span>
                        </div>
                    </div>

                    <div className="banner">
                        <div className="icon">⚡</div>
                        <div>
                            <h3>Silver Spring's 1950s–1970s Split-Levels and Colonials Were Built During the Era That Produced Three of the Most Common Residential Electrical Hazards in Montgomery County — and Many Have All Three Still Active Today</h3>
                            <p>Silver Spring's residential core is defined by mid-century housing — 1950s cape cods and ranches in Woodside, 1960s split-levels in Burnt Mills and Four Corners, 1970s colonials across Springbrook and Colesville — built during the era that gave American homeowners three persistent electrical problems. First: undersized 100A panels that were appropriate for the era but cannot support today's EV chargers, heat pumps, and modern kitchen loads. Second: Federal Pacific Electric Stab-Lok panels installed across a large portion of Montgomery County's 1960s–1970s housing stock — panels whose breakers fail to trip during overloads at a rate that has led to their identification as fire hazards. Third: aluminum branch circuit wiring, used between 1965 and 1973 when copper prices spiked, which loosens at connection points over time and creates arcing conditions that are a leading cause of house fires in homes of this vintage. Silver Spring is unincorporated Montgomery County — all electrical permits file with MoCo DPS at 2425 Reedie Drive, Wheaton. DMV General Contracting Group assesses all three conditions at the free estimate, provides honest remediation recommendations, and manages the full MoCo DPS permit and inspection process in-house.</p>
                        </div>
                    </div>

                    <div className="intro-box">
                        Looking for a licensed <strong>electrician in Silver Spring, MD</strong>? DMV General Contracting Group provides comprehensive residential electrical services for Silver Spring homeowners — panel upgrades from 100A to 200A and 400A, Federal Pacific and Zinsco panel replacement, aluminum branch circuit remediation, EV charger installation, whole-home rewiring, GFCI and AFCI protection, recessed lighting, smart home wiring, standby generator installation, and full renovation electrical. All permits filed with Montgomery County DPS at 2425 Reedie Drive, Wheaton. MHIC licensed #156178, fully insured. Free in-home electrical assessment. Call +1 240-730-1292.
                    </div>

                    <div className="trust-bar">
                        <div className="trust-item"><div className="icon">🏠</div><strong>Split-Level Expertise</strong><span>Mid-century Silver Spring homes assessed correctly — structural & electrical together</span></div>
                        <div className="trust-item"><div className="icon">🔶</div><strong>Aluminum Wiring Specialists</strong><span>1965–1973 homes assessed & remediated — CO/ALR or full replacement</span></div>
                        <div className="trust-item"><div className="icon">📋</div><strong>MoCo DPS Permitted</strong><span>All permits filed at 2425 Reedie Drive — every job inspected</span></div>
                        <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                    </div>

                    <h2>Silver Spring's Three Most Common Electrical Conditions — Assessed at Every Free Estimate</h2>

                    <div className="permit-box">
                        <h3>⚡ The Mid-Century Electrical Trifecta in Silver Spring's 1950s–1970s Homes</h3>
                        <ul>
                            <li><strong>Undersized 100A panels — the baseline problem across Silver Spring's mid-century stock:</strong> Silver Spring homes built in the 1950s through early 1970s were typically wired with 100A electrical service — the standard for that era. A 100A panel was adequate when the home was built, when the largest electrical loads were a refrigerator, a washer, and a few window air conditioners. Today's Silver Spring household runs an EV charger (50A dedicated circuit), a heat pump or central air system (30–60A), a modern kitchen with induction or electric range (50A), a home office with multiple workstations, and potentially a home addition or finished basement with its own electrical demand. The combination pushes consistently against 100A service limits — chronic breaker trips, inability to add the EV charger circuit, and the frustration of managing loads to avoid outages. A 200A panel upgrade is the permanent solution.</li>
                            <li><strong>Federal Pacific Electric Stab-Lok panels — found throughout Silver Spring's 1960s–1970s housing stock:</strong> Federal Pacific Electric supplied panels to a very large portion of Montgomery County's 1960s and 1970s housing construction. Their Stab-Lok breaker design has been identified as a fire hazard — the breakers fail to trip during overloads at a rate significantly higher than acceptable safety standards. A Silver Spring home built between 1960 and 1982 has a meaningful probability of having a Federal Pacific panel if it has not been replaced. The panel will not necessarily show obvious external signs of failure — it may look functional — but the internal breaker design is the issue. Maryland insurance carriers increasingly require documentation of Federal Pacific replacement before issuing or renewing homeowners coverage on affected properties.</li>
                            <li><strong>Aluminum branch circuit wiring — concentrated in Silver Spring's 1965–1973 construction:</strong> Aluminum branch circuit wiring is the most fire-risk electrical condition in Silver Spring homes of this specific vintage. Unlike knob-and-tube (which is older and more obvious), aluminum wiring looks like normal wiring — it is simply silver-colored rather than copper-colored — and is active in homes that appear otherwise well-maintained and updated. Aluminum expands and contracts differently than copper, causing connections at outlets, switches, and junction boxes to work loose over years of thermal cycling. Loose connections arc. Arcing generates heat. Heat in a wall cavity causes fires. The remedy is either full replacement with copper wiring or, where that is not feasible, CO/ALR-rated devices at every connection point in the home with anti-oxidant compound applied at each connection. DMV General Contracting Group assesses aluminum wiring presence at the free estimate — checking the panel for aluminum-labeled conductors and inspecting outlet boxes for the telltale silver wire color.</li>
                        </ul>
                    </div>

                    <h2>Electrical Services We Offer in Silver Spring, MD</h2>

                    <div className="service-grid">
                        <div className="service-cat">
                            <div className="cat-icon">⚡</div>
                            <div className="cat-label">Most Common</div>
                            <h3>Panel & Service Upgrades</h3>
                            <ul>
                                <li>100A → 200A panel upgrade</li>
                                <li>200A → 400A service upgrade</li>
                                <li>Federal Pacific / Zinsco replacement</li>
                                <li>Fuse box to breaker panel conversion</li>
                                <li>Subpanel for additions & garages</li>
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
                                <li>Outdoor & garage circuits</li>
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
                                <li>Split-level addition electrical scope</li>
                                <li>Basement finishing electrical</li>
                                <li>ADU electrical service installation</li>
                                <li>Home office wiring & circuits</li>
                            </ul>
                        </div>
                    </div>

                    <h2>Aluminum Branch Circuit Wiring in Silver Spring — The Full Picture</h2>

                    <div className="wiring-grid">
                        <div className="wiring-card">
                            <h3>🔶 How to Identify Aluminum Wiring in Your Silver Spring Home</h3>
                            <p>Aluminum branch circuit wiring cannot be identified from outside the home without opening outlet boxes or inspecting the panel. At the panel, aluminum-wired circuits have conductors labeled "AL" on the wire jacket and are silver-colored rather than copper-colored. At outlet boxes, the wire feeding outlets and switches is silver rather than orange-copper in color. A licensed electrician can identify aluminum wiring definitively by opening a representative sample of outlet boxes and inspecting the panel. DMV General Contracting Group checks for aluminum wiring at the free estimate for every Silver Spring home built between 1965 and 1973 — confirming presence before any remediation scope is recommended.</p>
                        </div>
                        <div className="wiring-card">
                            <h3>🔧 Aluminum Wiring Remediation — Two Approaches</h3>
                            <p><strong>Full replacement with copper wiring</strong> is the most comprehensive solution — removing all aluminum branch circuit wiring and replacing with copper throughout the home. This eliminates the hazard completely and is the preferred approach for whole-home renovations or when wall access is available. Cost: $9,000–$20,000+ depending on home size. <strong>CO/ALR device remediation</strong> is the alternative where full replacement is not feasible — replacing every outlet, switch, and connection point with CO/ALR-rated devices designed for aluminum wiring, and applying anti-oxidant compound at every connection. This is a recognized CPSC-approved remediation that addresses the loosening connection hazard without rewiring. Cost: $2,500–$6,000 depending on home size. DMV General Contracting Group presents both options with honest cost and risk comparisons at the Silver Spring estimate.</p>
                        </div>
                        <div className="wiring-card">
                            <h3>⚠️ What Aluminum Wiring Does NOT Mean</h3>
                            <p>Aluminum wiring in branch circuits is different from aluminum service entrance wiring — the large conductors that bring power from the utility to the panel. Aluminum service entrance wiring is standard, code-compliant, and used by all utilities today for service connections. The hazard is specifically with aluminum branch circuit wiring — the smaller gauge wire running from the panel to outlets, switches, and fixtures throughout the home. Many Silver Spring homeowners are told their home "has aluminum wiring" without this distinction being made clear. DMV General Contracting Group identifies exactly which circuits and locations are affected and scopes remediation accordingly — not as a blanket whole-home rewire when targeted remediation is the appropriate solution.</p>
                        </div>
                        <div className="wiring-card">
                            <h3>🏦 Insurance & Resale Implications</h3>
                            <p>Maryland homeowners insurance carriers vary significantly in how they handle aluminum branch circuit wiring: some require remediation before issuing coverage, some charge higher premiums for affected homes, and some accept CO/ALR remediation documentation as sufficient. At resale, home inspectors identify aluminum wiring in inspection reports — and buyers' agents frequently use it as a negotiating point. Proactive CO/ALR remediation or full rewiring before listing removes aluminum wiring from the inspection report entirely, eliminating it as a buyer objection. DMV General Contracting Group provides full documentation of remediation completed — scope, permits, and inspection sign-off — for insurance and resale purposes.</p>
                        </div>
                    </div>

                    <h2>Panel Upgrades in Silver Spring — What Your Home Actually Needs</h2>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead>
                                    <tr><th>Panel Type / Upgrade</th><th>Silver Spring Cost</th><th>EV Charger Ready?</th><th>Notes</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>100A Panel (existing — common 1950s–60s)</td><td>Upgrade recommended</td><td>⚠️ Marginal — likely needs upgrade</td><td>Cannot reliably support EV + heat pump + modern kitchen</td></tr>
                                    <tr><td>100A → 200A Upgrade ⭐</td><td>$3,000 – $5,200</td><td>✅ Yes — standard for Silver Spring</td><td>Today's standard; supports all modern loads</td></tr>
                                    <tr><td>Federal Pacific / Zinsco Replacement</td><td>$3,400 – $6,000</td><td>✅ Yes — if upgraded to 200A</td><td>Fire hazard eliminated; insurance compliance restored</td></tr>
                                    <tr><td>200A → 400A Service Upgrade</td><td>$5,200 – $9,500</td><td>✅ Yes — multiple EVs + heat pump</td><td>For larger Silver Spring homes with high simultaneous loads</td></tr>
                                    <tr><td>Subpanel Addition</td><td>$1,600 – $3,500</td><td>✅ Yes — can be sized for EV</td><td>For detached garages, additions, or ADUs</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="warning-box">
                        <h3>🚨 Federal Pacific Panels in Silver Spring — Check Before Your Insurance Renews</h3>
                        <p>Federal Pacific Electric Stab-Lok panels were installed in a very large number of Silver Spring homes built between the late 1950s and early 1980s — they were among the most commonly specified panels for Montgomery County residential construction in that era. Maryland insurance carriers have become significantly more stringent about Federal Pacific panels in recent years: carriers that previously ignored the issue are now requiring panel replacement documentation before renewal, and some are non-renewing policies where the panel has not been replaced. If your Silver Spring home has a Federal Pacific panel and your insurance is coming up for renewal, having the panel replaced proactively — before your carrier requires it or declines to renew — puts you in control of the timeline. DMV General Contracting Group replaces Federal Pacific panels throughout Silver Spring, files all permits with MoCo DPS, and provides the inspection documentation Maryland insurance carriers require.</p>
                    </div>

                    <h2>EV Charger Installation in Silver Spring</h2>

                    <div className="highlight">
                        <p>🚗 <strong>Silver Spring's EV ownership has grown dramatically</strong> — and a Level 2 home charger (240V) is now the standard expectation for daily EV use in the community. The most important first step for a Silver Spring EV charger installation is confirming that the existing panel can support a dedicated 50A circuit without pushing the panel to capacity. Many Silver Spring 100A panels are already running close to their limit — adding a 50A EV charger circuit to an already-loaded 100A panel creates chronic breaker trips and may require a panel upgrade before the charger can operate reliably. DMV General Contracting Group assesses panel load at the free estimate and quotes the charger and any required panel upgrade together as a complete solution — so you know the full project cost before committing to either scope. All Silver Spring EV charger installations permitted with MoCo DPS at 2425 Reedie Drive and inspected before closing.</p>
                    </div>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead>
                                    <tr><th>Service</th><th>Silver Spring Cost</th><th>Notes</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Level 2 EV Charger Installation</td><td>$550 – $1,600</td><td>Dedicated 50A circuit; panel capacity confirmed first</td></tr>
                                    <tr><td>Panel Upgrade + EV Charger (combined)</td><td>$3,600 – $6,800</td><td>200A upgrade + charger circuit; complete solution</td></tr>
                                    <tr><td>Aluminum Wiring — CO/ALR Remediation</td><td>$2,500 – $6,000</td><td>All outlets & switches; anti-oxidant compound applied</td></tr>
                                    <tr><td>Aluminum Wiring — Full Copper Rewire</td><td>$9,000 – $20,000+</td><td>Complete replacement; size and access dependent</td></tr>
                                    <tr><td>Federal Pacific Panel Replacement</td><td>$3,400 – $6,000</td><td>Includes MoCo DPS permit & inspection</td></tr>
                                    <tr><td>New Circuit Installation</td><td>$300 – $800</td><td>Per circuit; varies by distance and accessibility</td></tr>
                                    <tr><td>Recessed Lighting (per fixture)</td><td>$150 – $350</td><td>Includes wiring, dimmer switch, LED trim kit</td></tr>
                                    <tr><td>Standby Generator Installation</td><td>$5,500 – $13,000+</td><td>Includes transfer switch, pad, gas line, MoCo permit</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h2>Electrical Warning Signs in Silver Spring's Mid-Century Homes</h2>

                    <div className="signs-grid">
                        <div className="sign-card">
                            <div className="s-icon">⚡</div>
                            <h3>Breakers Tripping Under Normal Load</h3>
                            <p>100A panel reaching capacity — running microwave, AC, and home office simultaneously trips breakers. Panel upgrade needed.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">🔥</div>
                            <h3>Federal Pacific Panel</h3>
                            <p>Fire hazard in Silver Spring's 1960s–80s homes. Stab-Lok breakers fail to trip on overload — insurance carriers increasingly requiring replacement.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">🔶</div>
                            <h3>Silver Wire at Outlets (Aluminum)</h3>
                            <p>Silver-colored wire at outlet boxes in 1965–1973 homes — aluminum branch circuit wiring that loosens at connections over time.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">💡</div>
                            <h3>Flickering or Dimming Lights</h3>
                            <p>Voltage fluctuation when large appliances run — common in Silver Spring's 100A homes with modern load demands approaching panel limits.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">🔌</div>
                            <h3>Two-Prong Ungrounded Outlets</h3>
                            <p>Ungrounded outlets in most rooms — original mid-century wiring without ground; safety issue and limits use of modern three-prong devices.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">🌡️</div>
                            <h3>Warm Outlet Covers or Face Plates</h3>
                            <p>Warmth at outlet covers — possible aluminum wiring loose connection or overloaded circuit generating heat in the wall cavity.</p>
                        </div>
                    </div>

                    <h2>Our Electrical Service Process in Silver Spring</h2>

                    <div className="steps">
                        <div className="step">
                            <div className="step-num">1</div>
                            <div className="step-content">
                                <h3>Free In-Home Electrical Assessment — Panel, Wiring Type & Load Profile</h3>
                                <p>We visit your Silver Spring home and assess the complete electrical picture: panel size, brand, and condition (Federal Pacific flagged immediately); aluminum wiring check for 1965–1973 construction; outlet grounding status; current load versus panel capacity. We discuss your planned additions to the electrical system — EV charger, heat pump, home addition, or renovation — and confirm whether the existing panel supports the planned load or whether an upgrade is the right first step. Detailed written estimate at no charge, no obligation.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-num">2</div>
                            <div className="step-content">
                                <h3>Montgomery County DPS Permit Application — 2425 Reedie Drive</h3>
                                <p>We prepare and file all electrical permits with MoCo DPS at 2425 Reedie Drive, Wheaton — including load calculations for panel upgrades, all trade permit applications, and aluminum wiring remediation documentation where applicable. Silver Spring is unincorporated Montgomery County with no separate municipal permit office. MoCo DPS electrical permit review typically runs 1–3 weeks for panel projects. We manage all county correspondence and track permit status — you do not contact the county at any point.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-num">3</div>
                            <div className="step-content">
                                <h3>Electrical Work — Mid-Century Home Conditions Managed</h3>
                                <p>Our licensed electricians complete all work with care for Silver Spring's mid-century homes — protecting original hardwood floors, plaster walls, and period trim while accessing the electrical system. For panel upgrades, we coordinate the brief power interruption with your household. For aluminum wiring remediation, we open every outlet and switch box in the home, install CO/ALR-rated devices, apply anti-oxidant compound at each connection, and document every location completed. For full rewiring, we plan routing to minimize wall openings and patch all penetrations.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-num">4</div>
                            <div className="step-content">
                                <h3>MoCo DPS Inspection & Final Testing</h3>
                                <p>We schedule and manage all required MoCo DPS electrical inspections — rough-in and final. Upon passing inspection, we test all circuits, outlets, and panels with you — confirming every system operates correctly before closing the job. For aluminum wiring remediation, we provide written documentation of every location addressed — the record that insurance carriers and future buyers' inspectors need to confirm the work was completed. Written warranty documentation provided at project close.</p>
                            </div>
                        </div>
                    </div>

                    <h2>What Silver Spring Homeowners Say About DMV General Contracting Group</h2>

                    <div className="review-grid">
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"We bought a 1968 Silver Spring split-level and discovered during the home inspection that it had aluminum branch circuit wiring throughout. DMV General Contracting Group came to assess it and recommended CO/ALR remediation as the right scope — they opened every outlet and switch box in the house, installed CO/ALR devices, and provided a written record of every location. Our insurance carrier accepted the documentation immediately. The whole project took two days."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Four Corners, Silver Spring MD</span></div>
                        </div>
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"We had a Federal Pacific Stab-Lok panel in our 1972 Silver Spring colonial — our insurance company flagged it during a home inspection and required replacement within 90 days. DMV General Contracting Group replaced it with a full 200A upgrade, pulled the MoCo DPS permit, and had the inspection completed in two weeks. The insurance company received the documentation and renewed our policy at the standard rate with no surcharge."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Burnt Mills, Silver Spring MD</span></div>
                        </div>
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"We wanted to install a Level 2 EV charger in our garage. DMV General Contracting Group assessed our 100A panel and told us it was already running at about 80% of capacity — adding a 50A EV circuit would push it into chronic overload. They upgraded us to 200A at the same time as the charger installation, pulled one combined MoCo DPS permit, and completed both in one visit. We should have done the panel upgrade years ago — everything in the house runs more stably now."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Woodside, Silver Spring MD</span></div>
                        </div>
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"We did a full kitchen renovation in our 1959 Silver Spring cape cod and needed dedicated circuits for the new appliances. DMV General Contracting Group discovered the existing panel was 100A and Federal Pacific — they scoped the panel replacement and new circuits as a combined project. The kitchen now has the dedicated circuits it needs, the Federal Pacific hazard is gone, and the MoCo DPS permit and inspection were handled completely by DMV. No involvement needed from us on the permit side."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Springbrook, Silver Spring MD</span></div>
                        </div>
                    </div>

                    <div className="highlight">
                        <p>⭐ <strong>4.9-star rated with 97+ verified homeowner reviews.</strong> Silver Spring homeowners trust DMV General Contracting Group for mid-century electrical work that identifies all three common conditions — undersized panels, Federal Pacific hazards, and aluminum branch circuit wiring — at the free estimate, provides honest remediation recommendations with clear cost comparisons, manages the full MoCo DPS permit and inspection process, and delivers the documentation Maryland insurance carriers require for coverage reinstatement.</p>
                    </div>

                    <div className="cta-banner">
                        <h2>Get a Free Electrical Assessment for Your Silver Spring Home</h2>
                        <p>Our licensed electricians will visit your Silver Spring property, assess panel condition, check for Federal Pacific and aluminum wiring, and provide a detailed estimate — at no charge, no obligation. All permits filed with MoCo DPS at 2425 Reedie Drive.</p>
                        <Link href="/contact-us" className="cta-btn">Schedule Free Electrical Assessment →</Link>
                        <Link href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</Link>
                    </div>

                    <h2>Serving All Silver Spring, MD Communities for Electrical Services</h2>
                    <div className="areas-grid">
                        <span className="area-pill">Woodside</span>
                        <span className="area-pill">Four Corners</span>
                        <span className="area-pill">Burnt Mills</span>
                        <span className="area-pill">Springbrook</span>
                        <span className="area-pill">Colesville</span>
                        <span className="area-pill">White Oak</span>
                        <span className="area-pill">Kemp Mill</span>
                        <span className="area-pill">Hillandale</span>
                        <span className="area-pill">North Hills</span>
                        <span className="area-pill">Downtown Silver Spring</span>
                    </div>

                    <h2>Frequently Asked Questions — Electrical Services in Silver Spring, MD</h2>
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
                        <h2>Explore Our Other Services in Silver Spring, MD</h2>
                        <ul>
                            <li><Link href="/service/home-additions/silver-spring-md">Home Additions in Silver Spring, MD</Link></li>
                            <li><Link href="/service/design-build/silver-spring-md">Design-Build Contractor in Silver Spring, MD</Link></li>
                            <li><Link href="/service/kitchen-remodeling/silver-spring-md">Kitchen Remodeling in Silver Spring, MD</Link></li>
                            <li><Link href="/service/bathroom-remodeling/silver-spring-md">Bathroom Remodeling in Silver Spring, MD</Link></li>
                            <li><Link href="/service/basement-remodeling/silver-spring-md">Basement Remodeling in Silver Spring, MD</Link></li>
                            <li><Link href="/service/siding-installation/silver-spring-md">Siding Installation in Silver Spring, MD</Link></li>
                            <li><Link href="/service/flooring-remodeling/silver-spring-md">Flooring Installation in Silver Spring, MD</Link></li>
                            <li><Link href="/service/plumbing-services/silver-spring-md">Plumbing Services in Silver Spring, MD</Link></li>
                        </ul>
                    </div>

                    <div className="cta-banner">
                        <h2>Ready to Update Your Silver Spring Home's Electrical System?</h2>
                        <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free assessment. Panel upgrades, Federal Pacific replacement, aluminum wiring remediation, EV charger installation. All permits filed with MoCo DPS. MHIC licensed. Available 7 days a week.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Electrical Estimate in Silver Spring →</Link>
                        <Link href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SilverSpringMD;
