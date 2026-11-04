'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const PotomacMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Why do Potomac estate homes frequently need 400A electrical service?",
            answer: "Potomac's R-200 estate homes run simultaneous high-draw loads — multiple EV chargers, air source heat pumps, pool pumps, whole-home standby generators, and large kitchen appliances — that can approach or exceed 200A service capacity. A 400A service upgrade installs two 200A panels fed from a single 400A meter base, providing the headroom to run every estate system at full capacity without breaker trips or load conflicts. DMV General Contracting Group assesses your specific Potomac home's load profile at the free estimate and confirms whether 200A or 400A is the right scope."
        },
        {
            question: "How much does a panel upgrade cost in Potomac, MD?",
            answer: "A 100A to 200A upgrade typically costs $3,200–$5,500. A 200A to 400A service upgrade — the most common in Potomac estate homes — runs $5,500–$10,000, including Pepco utility coordination, new meter base, service entrance, and main panel. Federal Pacific or Zinsco replacement runs $3,800–$6,500. All costs include Montgomery County DPS permit fees and the required inspection. DMV General Contracting Group provides free estimates for all Potomac panel projects."
        },
        {
            question: "Are there HOA restrictions on generator placement in Potomac?",
            answer: "Yes — many Potomac HOA communities have covenants requiring specific setbacks, screening, and in some cases ARC pre-approval for standby generator installation. DMV General Contracting Group confirms HOA generator requirements for your specific Potomac neighborhood at the free consultation and designs pad placement to meet HOA, Pepco, and gas line requirements before any permit is submitted. We have installed generators in Potomac's most active HOA communities and know the requirements for each."
        },
        {
            question: "Does DMV General Contracting Group coordinate with Pepco for Potomac electrical upgrades?",
            answer: "Yes. Service upgrades to 400A require Pepco to disconnect and reconnect the utility service during the meter base replacement — a brief planned outage that we coordinate directly with Pepco on your behalf. We manage the Pepco notification, scheduling, and utility compliance requirements for all Potomac service upgrade projects. You do not contact Pepco at any point in the process."
        },
        {
            question: "Does DMV General Contracting Group pull permits for electrical work in Potomac?",
            answer: "Yes — all electrical work we perform in Potomac is fully permitted with Montgomery County DPS and inspected by county inspectors before the job closes. Permitted electrical work is essential for homeowners insurance coverage, resale value, and your family's safety. We file every required permit, manage all county correspondence, and schedule all inspections in-house. We never perform unpermitted electrical work."
        },
        {
            question: "Can DMV General Contracting Group install a whole-home generator in Potomac?",
            answer: "Yes. We install whole-home standby generators throughout Potomac — Generac, Kohler, and Briggs & Stratton units sized for estate homes from 20kW to 38kW+. Full installation includes generator pad, automatic transfer switch, gas line connection, Pepco utility notification, HOA placement coordination, all MoCo DPS permits, and final inspection. Generators activate automatically within seconds of a power outage."
        }
    ];

    return (
        <>
            <div className="city-service-detail-page electrical-potomac-md">
                <div className="container">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <Link href="/">Home</Link><span>›</span>
                        <Link href="/services">Services</Link><span>›</span>
                        <Link href="/service/electrical-services">Electrical Services</Link><span>›</span>
                        Potomac, MD
                    </nav>

                    <div className="hero">
                        <div className="hero-location-tag">📍 Serving Potomac, MD</div>
                        <h1>Licensed Electrical Services in Potomac, MD</h1>
                        <div className="hero-meta">
                            <span className="badge key">⚡ Estate-Scale Electrical Specialists</span>
                            <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                            <span className="badge">✓ MHIC Licensed #156178</span>
                            <span className="badge">✓ All Work Permitted & Inspected</span>
                            <span className="badge">✓ 400A Service Upgrades</span>
                            <span className="badge">✓ Multi-EV Charger Installation</span>
                            <span className="badge dark">📞 +1 240-730-1292</span>
                        </div>
                    </div>

                    <div className="banner">
                        <div className="icon">⚡</div>
                        <div>
                            <h3>Potomac's Estate Homes Have Electrical Demands That Most Montgomery County Properties Never Approach — Multiple EVs, Heat Pumps, Pools, Smart Home Systems, and Standby Generators All on a Single Service That Standard 200A Panels Were Never Designed to Support</h3>
                            <p>Potomac's R-200 estate homes are the largest residential properties in Montgomery County — and their electrical demands match that scale. A 5,000–8,000 sq ft Potomac estate with two EV chargers, an air source heat pump, a pool pump, a home theater, a whole-home automation system, and a standby generator transfer switch is drawing electrical loads that a standard 200A panel — the county minimum for decades — cannot support without constant breaker trips and load conflicts. DMV General Contracting Group installs 400A service upgrades throughout Potomac for estate homes that have added EV charging, electrified HVAC, and standby power on infrastructure that was sized for a different era. We also install Federal Pacific and Zinsco panel replacements — both fire hazards found frequently in Potomac homes built between 1960 and 1985 — whole-home rewiring for older estate properties, multi-charger EV installations in estate garages, and standby generator systems sized for Potomac's large home footprints. All work permitted with Montgomery County DPS. HOA generator placement requirements confirmed before installation begins. Pepco utility coordination handled in-house.</p>
                        </div>
                    </div>

                    <div className="intro-box">
                        Looking for a licensed <strong>electrician in Potomac, MD</strong>? DMV General Contracting Group provides comprehensive residential electrical services for Potomac's estate homeowners — panel upgrades to 200A and 400A, multi-EV charger installation, whole-home rewiring, Federal Pacific and Zinsco panel replacement, standby generator installation, recessed lighting, smart home wiring, and full renovation electrical. In-house licensed electricians. All work permitted with Montgomery County DPS. HOA requirements confirmed. Pepco utility coordination. MHIC licensed #156178, fully insured. Free in-home electrical assessment. Call +1 240-730-1292.
                    </div>

                    <div className="trust-bar">
                        <div className="trust-item"><div className="icon">⚡</div><strong>400A Specialists</strong><span>Estate-scale service upgrades for Potomac's high-load homes</span></div>
                        <div className="trust-item"><div className="icon">🚗</div><strong>Multi-EV Installation</strong><span>Two-car garage EV charger systems — Tesla, ChargePoint, JuiceBox</span></div>
                        <div className="trust-item"><div className="icon">📋</div><strong>All Work Permitted</strong><span>MoCo DPS + Pepco coordination — every job inspected</span></div>
                        <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                    </div>

                    <h2>Electrical Services We Offer in Potomac, MD</h2>

                    <div className="service-grid">
                        <div className="service-cat">
                            <div className="cat-icon">⚡</div>
                            <div className="cat-label">High Priority</div>
                            <h3>Panel & Service Upgrades</h3>
                            <ul>
                                <li>100A → 200A panel upgrade</li>
                                <li>200A → 400A service upgrade</li>
                                <li>Federal Pacific / Zinsco replacement</li>
                                <li>Fuse box to breaker panel conversion</li>
                                <li>Subpanel for garages, ADUs & additions</li>
                                <li>Pepco utility service entrance upgrade</li>
                            </ul>
                        </div>
                        <div className="service-cat">
                            <div className="cat-icon">🚗</div>
                            <div className="cat-label">Most Requested</div>
                            <h3>EV Charging & Modern Circuits</h3>
                            <ul>
                                <li>Level 2 EV charger installation (240V)</li>
                                <li>Multi-charger 2-car garage systems</li>
                                <li>Tesla Wall Connector installation</li>
                                <li>ChargePoint, JuiceBox, Wallbox install</li>
                                <li>Dedicated HVAC & appliance circuits</li>
                                <li>Pool, hot tub & spa electrical hookup</li>
                            </ul>
                        </div>
                        <div className="service-cat">
                            <div className="cat-icon">🏠</div>
                            <div className="cat-label">Safety Critical</div>
                            <h3>Rewiring & Safety Upgrades</h3>
                            <ul>
                                <li>Knob-and-tube wiring replacement</li>
                                <li>Aluminum branch circuit remediation</li>
                                <li>AFCI breaker installation</li>
                                <li>GFCI outlet installation — all wet areas</li>
                                <li>Smoke & CO detector hardwiring</li>
                                <li>Whole-home electrical safety inspection</li>
                            </ul>
                        </div>
                        <div className="service-cat">
                            <div className="cat-icon">💡</div>
                            <div className="cat-label">Lifestyle Upgrades</div>
                            <h3>Lighting & Smart Home</h3>
                            <ul>
                                <li>Recessed LED lighting — estate rooms</li>
                                <li>Under-cabinet & cove lighting wiring</li>
                                <li>Lutron & Leviton smart switch systems</li>
                                <li>Home automation & AV wiring</li>
                                <li>Outdoor, landscape & driveway lighting</li>
                                <li>Pool & terrace accent lighting circuits</li>
                            </ul>
                        </div>
                        <div className="service-cat">
                            <div className="cat-icon">🔋</div>
                            <div className="cat-label">Backup Power</div>
                            <h3>Generator & Backup Power</h3>
                            <ul>
                                <li>Whole-home standby generator install</li>
                                <li>Generac, Kohler & Briggs & Stratton</li>
                                <li>Automatic transfer switch installation</li>
                                <li>HOA-compliant generator pad placement</li>
                                <li>Gas line coordination for generator</li>
                                <li>Pepco utility notification & compliance</li>
                            </ul>
                        </div>
                        <div className="service-cat">
                            <div className="cat-icon">🔨</div>
                            <div className="cat-label">Remodel Support</div>
                            <h3>Renovation Electrical</h3>
                            <ul>
                                <li>Kitchen remodel electrical rough-in</li>
                                <li>Bathroom & primary suite electrical</li>
                                <li>Home addition full electrical scope</li>
                                <li>ADU dedicated electrical service</li>
                                <li>Basement finishing electrical</li>
                                <li>Garage & workshop circuits</li>
                            </ul>
                        </div>
                    </div>

                    <h2>Panel & Service Upgrades in Potomac — Why 400A Is Often the Right Answer</h2>

                    <p>Potomac estate homes regularly need 400A electrical service — not because of any deficiency in the existing panel, but because the home's electrical demands have grown beyond what 200A can support simultaneously. Here is what Potomac homes are running that drives 400A demand:</p>

                    <div className="highlight">
                        <p>⚡ <strong>A typical Potomac estate electrical load profile:</strong> Two Level 2 EV chargers (50A each) + air source heat pump (40–60A) + pool pump (20–30A) + whole-home standby generator transfer switch + home theater and AV systems + electric range and wall ovens + primary suite bathroom radiant floor heat = a simultaneous load that can approach or exceed 200A service capacity. A 400A service upgrade is the permanent solution — two 200A panels fed from a 400A meter base — giving Potomac estate homes the headroom to run every system at full capacity without load conflicts or breaker trips.</p>
                    </div>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead>
                                    <tr><th>Panel Size</th><th>Best For in Potomac</th><th>Potomac Cost</th><th>Supports EV + Heat Pump + Pool?</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>100A Panel</td><td>Small older home — no longer adequate for estate use</td><td>Upgrade needed</td><td>❌ No — insufficient</td></tr>
                                    <tr><td>200A Panel</td><td>Moderate Potomac home; 1 EV, no pool, no heat pump</td><td>$3,200 – $5,500</td><td>⚠️ Marginal — load conflicts likely</td></tr>
                                    <tr><td>400A Service ⭐</td><td>Potomac estate with 2+ EVs, heat pump, pool & generator</td><td>$5,500 – $10,000</td><td>✅ Yes — full capacity for all estate loads</td></tr>
                                    <tr><td>Subpanel Addition</td><td>ADU, garage, guest house, pool house</td><td>$1,800 – $4,000</td><td>✅ Yes — can be sized for EV + pool</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="warning-box">
                        <h3>🚨 Federal Pacific & Zinsco Panels in Potomac — Fire Hazard Warning</h3>
                        <p>Many Potomac homes built between 1960 and 1985 still have Federal Pacific Electric (Stab-Lok) or Zinsco panels — both identified as fire hazards because their breakers frequently fail to trip during overloads, allowing circuits to remain energized past safe amperage levels. These panels are found throughout Potomac's estate neighborhoods — in homes that are otherwise well-maintained and updated — because the panels were installed during original construction and the issue only became widely known later. If your Potomac home has a Federal Pacific or Zinsco panel, replacement is strongly recommended regardless of panel age or apparent condition. DMV General Contracting Group identifies and replaces these panels regularly in Potomac — typically replacing them with a full 200A or 400A upgrade that adds capacity while eliminating the fire hazard. Insurance carriers in Maryland increasingly require documentation of panel replacement for homes with Federal Pacific or Zinsco panels before issuing or renewing coverage.</p>
                    </div>

                    <h2>EV Charger Installation in Potomac, MD — Multi-Charger Estate Garage Systems</h2>

                    <p>Potomac has among the highest EV ownership rates in Montgomery County — and Potomac's multi-car estate garages create specific installation requirements that single-charger suburban installations do not:</p>

                    <div className="historic-box">
                        <h3>🚗 Potomac Multi-EV Garage Installation — What We Plan For</h3>
                        <p>A Potomac estate garage commonly has three, four, or more bays — and multiple EVs that all need overnight charging. A properly planned multi-EV installation calculates the total simultaneous charging load against available panel capacity, specifies whether a 400A service upgrade is needed to support multiple 50A charger circuits, and installs each charger on its own dedicated circuit with the correct wire gauge for the run distance from panel to each garage bay. DMV General Contracting Group installs multi-charger systems throughout Potomac — Tesla Wall Connector dual-charger setups, mixed-brand installations for households with different EV makes, and circuit pre-wiring for future charger expansion when a third vehicle is anticipated. All installations permitted with Montgomery County DPS and inspected. Panel capacity assessment included at the free estimate — we confirm whether your existing panel supports the full multi-charger load or whether a 400A upgrade should be scoped concurrently.</p>
                    </div>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead>
                                    <tr><th>EV Charger Scope</th><th>Potomac Cost</th><th>Notes</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Single Level 2 Charger (240V)</td><td>$550 – $1,600</td><td>Dedicated 50A circuit, charger mount, MoCo permit & inspection</td></tr>
                                    <tr><td>Dual Charger — 2-Bay Garage</td><td>$1,000 – $3,000</td><td>Two dedicated circuits; panel capacity assessed</td></tr>
                                    <tr><td>Tesla Wall Connector (single)</td><td>$600 – $1,400</td><td>Includes dedicated circuit, mount, permit</td></tr>
                                    <tr><td>Multi-Charger + Panel Upgrade</td><td>$6,500 – $13,000</td><td>400A service + 2–3 charger circuits; all-in estate solution</td></tr>
                                    <tr><td>Circuit Pre-Wire for Future EV</td><td>$400 – $800</td><td>Conduit and circuit installed now for future charger</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="tip">
                        💡 <strong>Federal EV Charger Tax Credit (30C):</strong> Potomac homeowners can claim 30% of the cost of EV charger equipment and installation (up to $1,000) as a federal tax credit. Maryland also offers EV equipment incentives. Consult your tax advisor for eligibility. DMV General Contracting Group provides itemized installation invoices that clearly separate equipment and labor for tax credit documentation.
                    </div>

                    <h2>Standby Generator Installation in Potomac, MD — HOA-Compliant Placement</h2>

                    <p>Potomac's estate homes are large enough that a power outage — even a brief one — disrupts multiple HVAC zones, security systems, refrigeration, pool equipment, and home offices simultaneously. Whole-home standby generators sized for Potomac's estate footprints are among our most frequently requested electrical services in the community.</p>

                    <div className="historic-box">
                        <h3>🏘️ HOA Generator Placement in Potomac — Confirmed Before Installation Begins</h3>
                        <p>Many Potomac HOA communities have covenants governing where standby generators can be placed, how they must be screened, and what noise level limits apply. Common HOA requirements in Potomac include minimum setbacks from property lines and neighboring structures, landscaping or solid enclosure screening that conceals the unit from the street and neighboring lots, and in some communities, pre-approval from the HOA Architectural Review Committee before a generator permit can be filed. DMV General Contracting Group confirms HOA generator requirements for your specific Potomac neighborhood at the free consultation — and designs generator pad placement to satisfy HOA setback and screening requirements, Pepco utility clearance requirements, and local gas line routing needs, all before any permit is submitted. We have installed generators in Potomac's most HOA-active planned communities and know the requirements for each.</p>
                    </div>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead>
                                    <tr><th>Generator Scope</th><th>Potomac Cost</th><th>Notes</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Partial-Home Generator (critical circuits)</td><td>$5,000 – $8,000</td><td>Covers HVAC, refrigerators, lights, security — not whole home</td></tr>
                                    <tr><td>Whole-Home Generator — Mid-Size Estate</td><td>$8,000 – $14,000</td><td>20–22kW unit; covers all circuits for 4,000–6,000 sq ft</td></tr>
                                    <tr><td>Whole-Home Generator — Large Estate</td><td>$12,000 – $20,000+</td><td>26–38kW+ unit; full coverage for 6,000–10,000+ sq ft</td></tr>
                                    <tr><td>Automatic Transfer Switch Only</td><td>$1,500 – $3,500</td><td>For existing generator without ATS — adds automatic switchover</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h2>Electrical Warning Signs in Potomac Estate Homes</h2>

                    <div className="signs-grid">
                        <div className="sign-card">
                            <div className="s-icon">⚡</div>
                            <h3>Breakers Tripping When Multiple Systems Run</h3>
                            <p>EV charger, heat pump, or pool pump tripping breakers — panel is undersized for estate electrical load. 400A upgrade indicated.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">💡</div>
                            <h3>Lights Dimming When Appliances Start</h3>
                            <p>Visible dimming when HVAC, EV charger, or range starts — voltage sag indicating inadequate service capacity for simultaneous loads.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">🔥</div>
                            <h3>Federal Pacific or Zinsco Panel</h3>
                            <p>Fire hazard panels common in Potomac homes built 1960–1985. Breakers fail to trip on overload — replacement strongly recommended.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">🔌</div>
                            <h3>Warm Outlets or Discoloration</h3>
                            <p>Warm, discolored, or sparking outlets require immediate inspection — never normal behavior; wiring or connection failure indicated.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">🏠</div>
                            <h3>Two-Prong Outlets in Older Wings</h3>
                            <p>Ungrounded two-prong outlets in original home sections — older wiring without ground, safety issue, and limits use of modern devices.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">👃</div>
                            <h3>Burning Smell Near Panel or Outlets</h3>
                            <p>Any burning or electrical smell near panel, outlets, or switches is a fire emergency warning — immediate professional assessment needed.</p>
                        </div>
                    </div>

                    <h2>Electrical Services for Potomac Remodeling Projects</h2>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead>
                                    <tr><th>Remodel Type</th><th>Typical Electrical Work Included</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Kitchen Remodel</td><td>Dedicated 20A appliance circuits, under-cabinet & cove lighting, recessed lighting, GFCI outlets, island circuits, range hood & oven wiring, induction cooktop circuit (240V)</td></tr>
                                    <tr><td>Primary Suite Addition</td><td>Bathroom radiant floor heat, vanity lighting, GFCI outlets, ceiling fan circuit, walk-in closet lighting, dedicated circuits for heated towel bars and bidet</td></tr>
                                    <tr><td>Home Addition</td><td>Full electrical rough-in for new square footage; extension of existing panel or new subpanel; all fixtures, outlets, and circuits; AFCI protection throughout</td></tr>
                                    <tr><td>Basement Finishing</td><td>Subpanel or new circuits, recessed lighting, AFCI protection, outlets throughout, home theater pre-wire, wet bar circuits</td></tr>
                                    <tr><td>ADU / Guest House</td><td>Dedicated electrical service or subpanel for ADU, kitchen circuits, bathroom circuits, HVAC wiring, EV charger option, separate meter if required</td></tr>
                                    <tr><td>Pool & Outdoor Entertainment</td><td>Pool pump and equipment circuits (240V), pool lighting, outdoor kitchen circuits, terrace lighting, hot tub hookup, GFCI protection throughout outdoor areas</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h2>Our Electrical Service Process in Potomac</h2>

                    <div className="steps">
                        <div className="step">
                            <div className="step-num">1</div>
                            <div className="step-content">
                                <h3>Free In-Home Electrical Assessment — Panel, Load Profile & Estate Needs</h3>
                                <p>We visit your Potomac estate, assess your existing electrical panel (size, brand, condition — Federal Pacific and Zinsco flagged immediately), review your current and planned electrical loads (EV chargers, heat pumps, pool, generator), and provide a detailed written estimate for all recommended work. For 400A service upgrades, we walk through the Pepco coordination process and timeline. For generator installations, we confirm HOA placement requirements at the assessment. No charge, no obligation.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-num">2</div>
                            <div className="step-content">
                                <h3>HOA Confirmation (Where Required) & Pepco Coordination</h3>
                                <p>For generator installations in Potomac HOA communities, we confirm ARC requirements and manage any required HOA submission before permit filing. For 400A service upgrades, we coordinate with Pepco for meter base upgrade scheduling — Pepco must disconnect service during the meter upgrade, which we schedule and manage. HOA and utility coordination completed before permit submission so no delays occur after permits are approved.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-num">3</div>
                            <div className="step-content">
                                <h3>Montgomery County DPS Permit Application</h3>
                                <p>We file all required electrical permits with Montgomery County DPS — including load calculations for service upgrades, all trade permit applications, and generator installation documentation. We manage all county correspondence and track permit approval status. For 400A service upgrades and whole-home generators, permit review typically runs 2–4 weeks at MoCo DPS. You do not contact the county at any point.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-num">4</div>
                            <div className="step-content">
                                <h3>Electrical Work Performed — Minimizing Estate Disruption</h3>
                                <p>Our licensed electricians complete all work with the care appropriate to Potomac's estate homes — protecting finished surfaces, hardwood floors, custom cabinetry, and landscaping throughout. For panel upgrades, we coordinate the required brief Pepco power interruption window with your household to minimize disruption. For generator installations, we complete concrete pad, transfer switch, gas line connection, and electrical commissioning in a planned sequence that minimizes landscape impact.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-num">5</div>
                            <div className="step-content">
                                <h3>Montgomery County Inspection & Final Testing</h3>
                                <p>We schedule and manage all required MoCo DPS electrical inspections — rough-in inspections for in-wall wiring and final inspections for panels, circuits, and generators. Upon passing all inspections, we test all new circuits, outlets, panels, chargers, and generator systems with you — verifying every system operates correctly before closing the job. For EV charger installations, we confirm charging is functioning on your specific vehicle. For generators, we run a full load test.</p>
                            </div>
                        </div>
                    </div>

                    <h2>What Potomac Homeowners Say About DMV General Contracting Group</h2>
                    <div className="review-grid">
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"We upgraded from 200A to 400A service and installed two Tesla Wall Connectors in our three-car garage. DMV General Contracting Group assessed our existing panel, confirmed 400A was the right scope for our home's load, coordinated the Pepco meter upgrade, pulled all MoCo permits, and completed everything in two days. Our two EVs charge simultaneously overnight without any load conflicts. The Pepco coordination was the part I was most uncertain about — they handled it completely."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Avenel, Potomac MD</span></div>
                        </div>
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"We had a Federal Pacific panel in our 1974 Potomac colonial — discovered during an insurance renewal process when our carrier asked for documentation. DMV General Contracting Group replaced it with a full 200A upgrade, pulled the MoCo permit, and had the inspection completed within two weeks. The insurance carrier confirmed the replacement and renewed our policy at the standard rate. Knowing that panel is gone is worth more than the cost of the project."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Bradley Farms, Potomac MD</span></div>
                        </div>
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"We installed a 26kW Generac whole-home generator. Our HOA has specific placement and screening requirements — DMV General Contracting Group confirmed those before the consultation was over, designed the pad placement to meet both HOA and gas line requirements, and prepared the HOA submission for us. The generator was installed and HOA-approved without a single issue. It has run automatically through two power outages since and the house didn't miss a beat either time."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">River Falls, Potomac MD</span></div>
                        </div>
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"We did a complete primary suite addition and the electrical scope was significant — radiant floor heat in two bathrooms, a dedicated HVAC circuit, smart lighting throughout, and recessed lighting in every room. DMV General Contracting Group's electricians were part of the same in-house team as the carpenters and plumbers — they coordinated rough-in timing perfectly and there were no delays waiting for electrical. Everything was permitted and inspected through MoCo DPS."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Potomac Village, Potomac MD</span></div>
                        </div>
                    </div>

                    <div className="highlight">
                        <p>⭐ <strong>4.9-star rated with 97+ verified homeowner reviews.</strong> Potomac homeowners trust DMV General Contracting Group for estate-scale electrical work — 400A service upgrades sized for multi-EV and high-load homes, multi-charger garage installations, Federal Pacific and Zinsco panel replacements, HOA-compliant generator installations with Pepco coordination, and renovation electrical perfectly timed with in-house remodeling teams. All work permitted and inspected with Montgomery County DPS.</p>
                    </div>

                    <div className="cta-banner">
                        <h2>Get a Free Electrical Assessment for Your Potomac Estate</h2>
                        <p>Our licensed electricians will visit your Potomac property, assess your panel and electrical load profile, confirm HOA requirements for generator installation, and provide a detailed estimate — at no charge, no obligation.</p>
                        <Link href="/contact-us" className="cta-btn">Schedule Free Electrical Assessment →</Link>
                        <Link href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</Link>
                    </div>

                    <h2>Serving All Potomac, MD Communities for Electrical Services</h2>
                    <div className="areas-grid">
                        <span className="area-pill">Potomac Village</span>
                        <span className="area-pill">Bradley Farms</span>
                        <span className="area-pill">Avenel</span>
                        <span className="area-pill">River Falls</span>
                        <span className="area-pill">Falconhurst</span>
                        <span className="area-pill">Inverness Forest</span>
                        <span className="area-pill">Glen Mill Estates</span>
                        <span className="area-pill">Hunt Country</span>
                        <span className="area-pill">Bedfordshire</span>
                        <span className="area-pill">Regency Estates</span>
                        <span className="area-pill">MacArthur Blvd Corridor</span>
                        <span className="area-pill">Brickyard Road Corridor</span>
                    </div>

                    <h2>Frequently Asked Questions — Electrical Services in Potomac, MD</h2>
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
                        <h2>Explore Our Other Services in Potomac, MD</h2>
                        <ul>
                            <li><Link href="/service/home-additions/potomac-md">Home Additions in Potomac, MD</Link></li>
                            <li><Link href="/service/design-build/potomac-md">Design-Build Contractor in Potomac, MD</Link></li>
                            <li><Link href="/service/kitchen-remodeling/potomac-md">Kitchen Remodeling in Potomac, MD</Link></li>
                            <li><Link href="/service/bathroom-remodeling/potomac-md">Bathroom Remodeling in Potomac, MD</Link></li>
                            <li><Link href="/service/basement-remodeling/potomac-md">Basement Remodeling in Potomac, MD</Link></li>
                            <li><Link href="/service/adu/potomac-md">ADU Construction in Potomac, MD</Link></li>
                            <li><Link href="/service/siding-installation/potomac-md">Siding Installation in Potomac, MD</Link></li>
                            <li><Link href="/service/plumbing-services/potomac-md">Plumbing Services in Potomac, MD</Link></li>
                        </ul>
                    </div>

                    <div className="cta-banner">
                        <h2>Ready to Upgrade Your Potomac Home's Electrical System?</h2>
                        <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free estimate. 400A service upgrades, multi-EV charger systems, Federal Pacific panel replacement, HOA-compliant generator installation. All work permitted with MoCo DPS. MHIC licensed. Available 7 days a week.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Electrical Estimate in Potomac →</Link>
                        <Link href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PotomacMD;
