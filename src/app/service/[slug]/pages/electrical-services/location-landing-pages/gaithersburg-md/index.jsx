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
            question: "Where are electrical permits filed in Gaithersburg, MD?",
            answer: "It depends on your property's location. Kentlands and Lakelands are within the City of Gaithersburg — permits file with the City of Gaithersburg Department of Public Works. Crown Farm, Washingtonian Woods, and other unincorporated areas file with MoCo DPS at 2425 Reedie Drive, Wheaton. Your mailing address and zip code do not determine which office applies — parcel location does. DMV General Contracting Group confirms the correct jurisdiction at the free consultation before any permit is prepared."
        },
        {
            question: "Does the Kentlands HOA require approval for generator installation?",
            answer: "Kentlands Community Association's ARC governs exterior modifications, and standby generator installation typically requires ARC confirmation before installation begins — covering pad placement, setbacks, and screening requirements. DMV General Contracting Group confirms Kentlands ARC requirements at the free consultation and designs generator placement to meet ARC standards before filing the City of Gaithersburg permit. ARC and permit processes run concurrently so generator approval does not delay the overall project timeline."
        },
        {
            question: "Does my Kentlands home need a 400A service upgrade for two EV chargers?",
            answer: "Possibly — it depends on your home's total electrical load. Kentlands homes were built with 200A service, which supports most household loads plus one EV charger comfortably. Adding a second EV charger while also running a heat pump and modern kitchen loads can push a 200A panel toward capacity. DMV General Contracting Group assesses your specific load profile at the free estimate and gives you an honest answer — whether 200A supports your planned additions or whether 400A is warranted. We quote both scenarios together so you can make an informed decision."
        },
        {
            question: "What electrical issues should I expect in an older Gaithersburg home?",
            answer: "Older Gaithersburg homes built before 1985 commonly have: undersized 100A panels that cannot support modern EV chargers and heat pumps; Federal Pacific Electric Stab-Lok panels (fire hazard) in homes built 1960–1982; aluminum branch circuit wiring in homes built 1965–1973; and absent GFCI protection in kitchens, bathrooms, and garages. DMV General Contracting Group assesses all of these at the free estimate for older Gaithersburg homes and scopes remediation that restores safety and supports modern electrical demand."
        },
        {
            question: "How much does an EV charger installation cost in Gaithersburg, MD?",
            answer: "A single Level 2 EV charger in Gaithersburg typically costs $550–$1,600, including the dedicated circuit, charger mount, and all required permits and inspections. For Kentlands and Lakelands homes with 200A service, one charger can usually be added without a panel upgrade. For homes adding two chargers or running high additional loads, we assess panel capacity and quote the charger and any needed upgrade together. All Gaithersburg EV charger installations are permitted with the correct jurisdiction and inspected before closing."
        }
    ];

    return (
        <>
            <div className="city-service-detail-page electrical-gaithersburg-md">
                <div className="container">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <Link href="/">Home</Link><span>›</span>
                        <Link href="/services">Services</Link><span>›</span>
                        <Link href="/service/electrical-services">Electrical Services</Link><span>›</span>
                        Gaithersburg, MD
                    </nav>

                    <div className="hero">
                        <div className="hero-location-tag">📍 Serving Gaithersburg, MD — City & MoCo Jurisdictions</div>
                        <h1>Licensed Electrical Services in Gaithersburg, MD</h1>
                        <div className="hero-meta">
                            <span className="badge key">🏘️ Kentlands, Crown Farm & All Gaithersburg</span>
                            <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                            <span className="badge">✓ MHIC Licensed #156178</span>
                            <span className="badge">✓ City DPW & MoCo DPS — Both Jurisdictions</span>
                            <span className="badge">✓ EV Charger Installation</span>
                            <span className="badge">✓ Smart Home & Generator Specialists</span>
                            <span className="badge dark">📞 +1 240-730-1292</span>
                        </div>
                    </div>

                    <div className="banner">
                        <div className="icon">🏘️</div>
                        <div>
                            <h3>Gaithersburg Has Two Separate Permit Jurisdictions for Electrical Work — and Filing at the Wrong One Means No Permit Is Issued, No Inspection Is Scheduled, and the Work Is Legally Unpermitted Regardless of What the Contractor Tells You</h3>
                            <p>Gaithersburg's residential communities are split between two permit jurisdictions that apply based on where within Gaithersburg your property sits — not on your mailing address or zip code. Kentlands and Lakelands, the planned new urbanist communities along Kentlands Boulevard, are within the incorporated City of Gaithersburg — their electrical permits are filed with the City of Gaithersburg Department of Public Works. Crown Farm, Washingtonian Woods, and communities outside the city limits are in unincorporated Montgomery County — their electrical permits are filed with MoCo DPS at 2425 Reedie Drive, Wheaton. A contractor who does not know this distinction — or who assumes all Gaithersburg properties file with the county — will file at the wrong office for Kentlands and Lakelands projects. The permit is not issued, the work proceeds without one, and the Gaithersburg homeowner is left with unpermitted electrical work that creates insurance and resale problems down the road. DMV General Contracting Group confirms the correct permit authority by parcel at the free consultation, before any work is scoped or any permit is prepared — and files at the correct office for every Gaithersburg community we serve.</p>
                        </div>
                    </div>

                    <div className="intro-box">
                        Looking for a licensed <strong>electrician in Gaithersburg, MD</strong>? DMV General Contracting Group provides comprehensive residential electrical services for all Gaithersburg communities — Kentlands, Lakelands, Crown Farm, Washingtonian Woods, Quince Orchard, and beyond. Panel upgrades, EV charger installation, smart home wiring, standby generator installation, whole-home rewiring, GFCI and AFCI protection, recessed lighting, and full renovation electrical. Dual permit jurisdiction expertise: City of Gaithersburg DPW for Kentlands and Lakelands; MoCo DPS for Crown Farm and unincorporated areas. MHIC licensed #156178, fully insured. Free in-home electrical assessment. Call +1 240-730-1292.
                    </div>

                    <div className="trust-bar">
                        <div className="trust-item"><div className="icon">🏛️</div><strong>Dual Jurisdiction Expertise</strong><span>City DPW (Kentlands) & MoCo DPS (Crown Farm) — correct office every time</span></div>
                        <div className="trust-item"><div className="icon">🚗</div><strong>EV Charger Specialists</strong><span>Kentlands & Crown Farm EV charger installations — all brands & panel types</span></div>
                        <div className="trust-item"><div className="icon">🏘️</div><strong>HOA Generator Guidance</strong><span>Kentlands ARC requirements confirmed before any generator permit is filed</span></div>
                        <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                    </div>

                    <h2>Gaithersburg's Two Permit Jurisdictions — Which One Applies to Your Property</h2>

                    <div className="wiring-grid">
                        <div className="wiring-card">
                            <h3>🏛️ City of Gaithersburg DPW — Kentlands & Lakelands</h3>
                            <ul>
                                <li><strong>Communities:</strong> Kentlands, Lakelands, and other properties within City of Gaithersburg limits</li>
                                <li><strong>Permit office:</strong> City of Gaithersburg Department of Public Works</li>
                                <li><strong>All electrical permits filed here</strong> for covered properties — not MoCo DPS</li>
                                <li><strong>HOA:</strong> Kentlands Community Association ARC governs exterior modifications — generator placement typically requires ARC confirmation</li>
                                <li><strong>Filing at MoCo DPS for a Kentlands property = permit not issued</strong></li>
                                <li>DMV General Contracting Group files at City DPW for all Kentlands and Lakelands electrical projects</li>
                            </ul>
                        </div>
                        <div className="wiring-card">
                            <h3>🏛️ Montgomery County DPS — Crown Farm & Unincorporated Areas</h3>
                            <ul>
                                <li><strong>Communities:</strong> Crown Farm, Washingtonian Woods, Quince Orchard, and unincorporated Gaithersburg areas</li>
                                <li><strong>Permit office:</strong> MoCo DPS, 2425 Reedie Drive, Wheaton, MD 20902</li>
                                <li><strong>All electrical permits filed here</strong> for covered properties — not City DPW</li>
                                <li><strong>HOA:</strong> Crown Farm and Washingtonian Woods HOAs may have exterior modification requirements — confirmed at consultation</li>
                                <li><strong>Filing at City DPW for a Crown Farm property = permit not issued</strong></li>
                                <li>DMV General Contracting Group files at MoCo DPS for all Crown Farm and unincorporated Gaithersburg electrical projects</li>
                            </ul>
                        </div>
                    </div>

                    <div className="tip">
                        💡 <strong>How we confirm your jurisdiction:</strong> Gaithersburg mailing address and zip code do not determine which permit office applies — parcel location relative to city limits does. DMV General Contracting Group confirms the correct permit authority by parcel number at the free consultation, before any permit is prepared. If you are unsure which jurisdiction your property falls in, this is the first question we answer — at no charge — before any electrical work is discussed.
                    </div>

                    <h2>Electrical Services We Offer in Gaithersburg, MD</h2>

                    <div className="service-grid">
                        <div className="service-cat">
                            <div className="cat-icon">⚡</div>
                            <div className="cat-label">Most Common</div>
                            <h3>Panel & Service Upgrades</h3>
                            <ul>
                                <li>100A → 200A panel upgrade</li>
                                <li>200A → 400A service upgrade</li>
                                <li>Federal Pacific / Zinsco replacement</li>
                                <li>Subpanel for garages & additions</li>
                                <li>AFCI breaker installation</li>
                                <li>Service entrance upgrade</li>
                            </ul>
                        </div>
                        <div className="service-cat">
                            <div className="cat-icon">🚗</div>
                            <div className="cat-label">Most Requested</div>
                            <h3>EV Charging & Modern Circuits</h3>
                            <ul>
                                <li>Level 2 EV charger installation (240V)</li>
                                <li>Tesla, ChargePoint, JuiceBox install</li>
                                <li>Multi-charger garage systems</li>
                                <li>Dedicated kitchen appliance circuits</li>
                                <li>Heat pump & HVAC circuits</li>
                                <li>400A upgrade for EV + heat pump</li>
                            </ul>
                        </div>
                        <div className="service-cat">
                            <div className="cat-icon">💡</div>
                            <div className="cat-label">Smart Home</div>
                            <h3>Lighting & Smart Home Wiring</h3>
                            <ul>
                                <li>Recessed LED lighting installation</li>
                                <li>Lutron & Leviton smart switch systems</li>
                                <li>Home automation wiring</li>
                                <li>Under-cabinet & cove lighting</li>
                                <li>Outdoor & landscape lighting</li>
                                <li>AV & structured wiring</li>
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
                                <li>HOA-compliant pad placement</li>
                                <li>Gas line coordination</li>
                                <li>Portable generator hookup</li>
                            </ul>
                        </div>
                        <div className="service-cat">
                            <div className="cat-icon">🏠</div>
                            <div className="cat-label">Safety Upgrades</div>
                            <h3>Wiring & Safety</h3>
                            <ul>
                                <li>Federal Pacific / Zinsco replacement</li>
                                <li>Aluminum wiring remediation</li>
                                <li>GFCI outlet installation — all wet areas</li>
                                <li>Smoke & CO detector hardwiring</li>
                                <li>Whole-home electrical safety inspection</li>
                                <li>Knob-and-tube assessment & replacement</li>
                            </ul>
                        </div>
                        <div className="service-cat">
                            <div className="cat-icon">🔨</div>
                            <div className="cat-label">Remodel Support</div>
                            <h3>Renovation Electrical</h3>
                            <ul>
                                <li>Kitchen remodel electrical rough-in</li>
                                <li>Bathroom electrical & exhaust fan</li>
                                <li>Home addition full electrical scope</li>
                                <li>Basement finishing electrical</li>
                                <li>ADU electrical service installation</li>
                                <li>Home office wiring & circuits</li>
                            </ul>
                        </div>
                    </div>

                    <h2>Gaithersburg's Two Housing Eras — Different Electrical Needs</h2>

                    <div className="wiring-grid">
                        <div className="wiring-card">
                            <h3>🏘️ Kentlands, Lakelands & Planned Communities (1988–2010s) — Modern Stock, Modern Upgrades</h3>
                            <ul>
                                <li><strong>Built with 200A service as standard</strong> — adequate baseline for most household loads</li>
                                <li><strong>Most common upgrade: EV charger</strong> — dedicated 240V circuit; panel capacity usually supports one charger without upgrade</li>
                                <li><strong>400A upgrade</strong> when two EVs + heat pump + garage workshop push beyond 200A capacity</li>
                                <li><strong>Smart home wiring</strong> — Lutron, Leviton, and home automation increasingly common in this community</li>
                                <li><strong>Standby generator</strong> — popular in Kentlands; HOA ARC placement requirements confirmed before permit filing</li>
                                <li><strong>Permit: City of Gaithersburg DPW</strong> — not MoCo DPS</li>
                            </ul>
                        </div>
                        <div className="wiring-card">
                            <h3>🏚️ Older Gaithersburg Homes (Pre-1985) — Mid-Century Electrical Conditions</h3>
                            <ul>
                                <li><strong>100A panels common</strong> — undersized for today's EV chargers, heat pumps, and modern kitchens</li>
                                <li><strong>Federal Pacific panels</strong> — found in Gaithersburg homes built or updated 1960–1982; fire hazard requiring replacement</li>
                                <li><strong>Aluminum branch circuit wiring</strong> — homes built 1965–1973; assessed at every free estimate for this vintage</li>
                                <li><strong>GFCI protection absent</strong> — kitchens, bathrooms, and garages in pre-1985 homes frequently lack required GFCI protection</li>
                                <li><strong>Permit: MoCo DPS or City DPW</strong> — depends on location; confirmed by parcel</li>
                            </ul>
                        </div>
                    </div>

                    <h2>EV Charger Installation in Gaithersburg — Kentlands, Crown Farm & All Communities</h2>

                    <div className="highlight">
                        <p>🚗 <strong>Gaithersburg's planned communities have among the highest EV adoption rates in Montgomery County</strong> — and Level 2 home charging is now the standard expectation for Gaithersburg homeowners. For Kentlands and Lakelands homes built with 200A service, a single EV charger installation is typically straightforward — the panel has capacity and the dedicated 50A circuit runs to the attached garage. For homes with two EVs or an EV plus a heat pump, a 400A service upgrade may be warranted to avoid chronic load conflicts. For older Gaithersburg homes on 100A service, panel upgrade is typically the first step before EV charger installation can be properly supported. DMV General Contracting Group assesses panel capacity at the free estimate for every Gaithersburg EV project and quotes the full scope — charger plus any needed panel upgrade — together.</p>
                    </div>

                    <h2>Standby Generator Installation in Gaithersburg — HOA Requirements in Kentlands</h2>

                    <div className="historic-box">
                        <h3>🏘️ Kentlands ARC & Generator Placement — Confirmed Before Any Permit Is Filed</h3>
                        <p>The Kentlands Community Association's Architectural Review Committee governs exterior modifications in the community — and standby generator installation, which involves a permanent exterior concrete pad, visible equipment, and an audible engine, is subject to ARC review in many Kentlands situations. Typical ARC considerations include generator placement relative to property lines and neighboring homes, screening or enclosure requirements, and noise level compliance. DMV General Contracting Group confirms Kentlands ARC requirements for generator placement at the free consultation — designing the pad location and any required screening to satisfy ARC standards before any permit is filed with the City of Gaithersburg DPW. We have installed generators in Kentlands and are familiar with the community's generator review process. For Crown Farm and other MoCo DPS communities, we confirm HOA requirements at the consultation and manage any required submissions before filing with MoCo DPS.</p>
                    </div>

                    <h2>Panel Upgrade Cost in Gaithersburg, MD</h2>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead>
                                    <tr><th>Panel Upgrade</th><th>Gaithersburg Cost</th><th>EV Ready?</th><th>Permit Filed With</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>100A → 200A Upgrade</td><td>$3,000 – $5,200</td><td>✅ Yes — single EV charger</td><td>City DPW (Kentlands) or MoCo DPS (Crown Farm)</td></tr>
                                    <tr><td>200A → 400A Service Upgrade ⭐</td><td>$5,200 – $9,500</td><td>✅ Yes — 2 EVs + heat pump</td><td>City DPW (Kentlands) or MoCo DPS (Crown Farm)</td></tr>
                                    <tr><td>Federal Pacific / Zinsco Replacement</td><td>$3,300 – $6,000</td><td>✅ Yes — if upgraded to 200A</td><td>City DPW (Kentlands) or MoCo DPS (Crown Farm)</td></tr>
                                    <tr><td>Subpanel Addition</td><td>$1,600 – $3,500</td><td>✅ Yes — can be sized for EV</td><td>City DPW (Kentlands) or MoCo DPS (Crown Farm)</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead>
                                    <tr><th>Service</th><th>Gaithersburg Cost</th><th>Notes</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Level 2 EV Charger Installation</td><td>$550 – $1,600</td><td>Dedicated 50A circuit; panel capacity assessed first</td></tr>
                                    <tr><td>400A Upgrade + Dual EV Chargers</td><td>$6,500 – $13,000</td><td>Complete solution for 2-EV + heat pump households</td></tr>
                                    <tr><td>Standby Generator — Mid-Size Home</td><td>$5,500 – $10,000</td><td>Includes ARC confirmation, transfer switch, gas line</td></tr>
                                    <tr><td>Smart Home Wiring Package</td><td>$1,500 – $5,000</td><td>Lutron/Leviton switches, automation wiring, AV</td></tr>
                                    <tr><td>Recessed Lighting (per fixture)</td><td>$150 – $350</td><td>Includes wiring, dimmer switch, LED trim kit</td></tr>
                                    <tr><td>New Circuit Installation</td><td>$300 – $800</td><td>Per circuit; distance and access dependent</td></tr>
                                    <tr><td>GFCI Outlet Installation</td><td>$150 – $300 per outlet</td><td>Kitchens, bathrooms, garages, outdoors</td></tr>
                                    <tr><td>Aluminum Wiring CO/ALR Remediation</td><td>$2,500 – $5,800</td><td>All outlets and switches; pre-1985 older Gaithersburg homes</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h2>Our Electrical Service Process in Gaithersburg</h2>

                    <div className="steps">
                        <div className="step">
                            <div className="step-num">1</div>
                            <div className="step-content">
                                <h3>Free In-Home Assessment — Jurisdiction Confirmed, Panel & Needs Assessed</h3>
                                <p>We visit your Gaithersburg home and begin by confirming your permit jurisdiction — City of Gaithersburg DPW or MoCo DPS — by parcel before any electrical discussion begins. We then assess your panel size and brand, outlet grounding, planned electrical additions (EV charger, generator, smart home, renovation), and HOA requirements for any exterior work. For Kentlands and Lakelands, we note ARC requirements for generators. For older Gaithersburg homes, we check for Federal Pacific panels and aluminum wiring. Detailed written estimate at no charge, no obligation.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-num">2</div>
                            <div className="step-content">
                                <h3>HOA ARC Confirmation (Kentlands & Other Communities Where Required)</h3>
                                <p>For generator installations in Kentlands and other HOA communities, we confirm ARC requirements and manage any required notification or submission before permit filing. Generator pad placement is designed to satisfy ARC setback and screening requirements before we proceed to permit submission — so HOA approval and permit approval run concurrently rather than sequentially.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-num">3</div>
                            <div className="step-content">
                                <h3>Permit Application — Correct Office for Your Gaithersburg Community</h3>
                                <p>We prepare and file all electrical permits at the correct office — City of Gaithersburg DPW for Kentlands and Lakelands; MoCo DPS at 2425 Reedie Drive for Crown Farm, Washingtonian Woods, and unincorporated areas. Complete submission packages prepared in-house. We manage all correspondence and track permit approval. You do not contact either permit office at any point in the process.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-num">4</div>
                            <div className="step-content">
                                <h3>Electrical Work & Inspection — Full Coordination In-House</h3>
                                <p>Our licensed electricians complete all work and we schedule all required inspections with the applicable permit office. For Kentlands and Lakelands, inspections are coordinated with City of Gaithersburg inspectors. For Crown Farm and unincorporated areas, MoCo DPS inspectors. We are present at all inspections and address any inspector comments before the project closes. Final testing with you and written warranty documentation at project close.</p>
                            </div>
                        </div>
                    </div>

                    <h2>What Gaithersburg Homeowners Say About DMV General Contracting Group</h2>

                    <div className="review-grid">
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"We installed two EV chargers in our Kentlands garage — one for each car. DMV General Contracting Group assessed our 200A panel, confirmed it could support both chargers without an upgrade, pulled the permit with the City of Gaithersburg DPW (not MoCo DPS — our previous quote was from a contractor who didn't know the difference), and installed both Tesla Wall Connectors in one day. Both cars charge overnight without any load issues."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Kentlands, Gaithersburg MD</span></div>
                        </div>
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"We wanted a whole-home Generac generator in Kentlands. DMV General Contracting Group confirmed the Kentlands ARC requirements for generator placement first — pad location, setbacks from property lines, and screening — designed the installation to meet those standards, then filed the City of Gaithersburg permit. The ARC confirmation and permit submission happened concurrently. The generator was installed and ARC-compliant from day one."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Kentlands, Gaithersburg MD</span></div>
                        </div>
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"Our Crown Farm home needed a 400A service upgrade — two EVs, a heat pump, and the house was pushing 200A capacity constantly. DMV General Contracting Group upgraded us to 400A, added a dedicated circuit for each EV charger, and handled all the MoCo DPS permits. They knew immediately that Crown Farm files with MoCo DPS, not the City. The 400A upgrade was the right scope — we haven't had a single load conflict since."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Crown Farm, Gaithersburg MD</span></div>
                        </div>
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"We bought an older Gaithersburg home off Quince Orchard Road and discovered a Federal Pacific panel at inspection. DMV General Contracting Group replaced it with a 200A upgrade, added GFCI protection in the kitchen and bathrooms, and installed an EV charger circuit in the garage — all under one MoCo DPS permit. They confirmed our property was MoCo jurisdiction, not City, and filed accordingly. Inspection passed first time."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Quince Orchard, Gaithersburg MD</span></div>
                        </div>
                    </div>

                    <div className="highlight">
                        <p>⭐ <strong>4.9-star rated with 97+ verified homeowner reviews.</strong> Gaithersburg homeowners trust DMV General Contracting Group for electrical work that confirms the correct permit jurisdiction before any work begins — City of Gaithersburg DPW for Kentlands and Lakelands, MoCo DPS for Crown Farm and unincorporated areas — manages HOA ARC requirements for Kentlands generator installations, and serves both Gaithersburg's newer planned communities and its older housing stock with equal expertise.</p>
                    </div>

                    <div className="cta-banner">
                        <h2>Get a Free Electrical Assessment for Your Gaithersburg Home</h2>
                        <p>Our licensed electricians will visit your Gaithersburg property, confirm your permit jurisdiction (City DPW or MoCo DPS), assess panel condition, and provide a detailed estimate — at no charge, no obligation. Serving Kentlands, Lakelands, Crown Farm, Washingtonian Woods, and all Gaithersburg communities.</p>
                        <Link href="/contact-us" className="cta-btn">Schedule Free Electrical Assessment →</Link>
                        <Link href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</Link>
                    </div>

                    <h2>Serving All Gaithersburg, MD Communities for Electrical Services</h2>
                    <div className="areas-grid">
                        <span className="area-pill">Kentlands</span>
                        <span className="area-pill">Lakelands</span>
                        <span className="area-pill">Crown Farm</span>
                        <span className="area-pill">Washingtonian Woods</span>
                        <span className="area-pill">Quince Orchard</span>
                        <span className="area-pill">Shady Grove</span>
                        <span className="area-pill">Montgomery Village</span>
                        <span className="area-pill">Flower Hill</span>
                        <span className="area-pill">Downtown Gaithersburg</span>
                        <span className="area-pill">Goshen</span>
                    </div>

                    <h2>Frequently Asked Questions — Electrical Services in Gaithersburg, MD</h2>
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
                        <h2>Explore Our Other Services in Gaithersburg, MD</h2>
                        <ul>
                            <li><Link href="/service/home-additions/gaithersburg-md">Home Additions in Gaithersburg, MD</Link></li>
                            <li><Link href="/service/design-build/gaithersburg-md">Design-Build Contractor in Gaithersburg, MD</Link></li>
                            <li><Link href="/service/kitchen-remodeling/gaithersburg-md">Kitchen Remodeling in Gaithersburg, MD</Link></li>
                            <li><Link href="/service/bathroom-remodeling/gaithersburg-md">Bathroom Remodeling in Gaithersburg, MD</Link></li>
                            <li><Link href="/service/basement-remodeling/gaithersburg-md">Basement Remodeling in Gaithersburg, MD</Link></li>
                            <li><Link href="/service/siding-installation/gaithersburg-md">Siding Installation in Gaithersburg, MD</Link></li>
                            <li><Link href="/service/adu/gaithersburg-md">ADU Construction in Gaithersburg, MD</Link></li>
                            <li><Link href="/service/plumbing-services/gaithersburg-md">Plumbing Services in Gaithersburg, MD</Link></li>
                        </ul>
                    </div>

                    <div className="cta-banner">
                        <h2>Ready to Upgrade Your Gaithersburg Home's Electrical System?</h2>
                        <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free assessment. Jurisdiction confirmed first — City DPW or MoCo DPS. EV charger installation, 400A upgrades, generator with HOA coordination. Kentlands, Crown Farm, and all Gaithersburg communities. MHIC licensed. Available 7 days a week.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Electrical Estimate in Gaithersburg →</Link>
                        <Link href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default GaithersburgMD;
