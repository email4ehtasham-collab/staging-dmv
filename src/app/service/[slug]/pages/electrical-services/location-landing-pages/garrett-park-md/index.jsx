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
            question: "Where are electrical permits filed in Garrett Park, MD?",
            answer: "Electrical permits in Garrett Park are filed with the Town of Garrett Park at 4600 Oxford Street, Garrett Park, MD 20896 — not with Montgomery County DPS. Garrett Park is an incorporated municipality with its own permit office. A contractor filing at MoCo DPS for Garrett Park work will be turned away and no permit will be issued. DMV General Contracting Group files all Garrett Park electrical permits at 4600 Oxford Street as standard practice."
        },
        {
            question: "Does my Garrett Park home have knob-and-tube wiring?",
            answer: "If your Garrett Park home was built before 1945 — which describes most of the town's housing stock — there is a meaningful probability it has original or partially original knob-and-tube wiring. Visible ceramic knobs and tubes in the attic are the most obvious sign. Two-prong ungrounded outlets throughout the home also indicate original wiring is still active. Many Garrett Park homes have hybrid systems where some rooms have been updated and others retain original wiring. DMV General Contracting Group assesses knob-and-tube presence and activity at the free estimate before any remediation scope is recommended."
        },
        {
            question: "Is EPA RRP compliance required for electrical work in Garrett Park?",
            answer: "Yes — for any electrical work that disturbs painted surfaces in a Garrett Park home built before 1978, which is virtually all of them. EPA RRP rules require a certified renovator on-site, containment, proper debris disposal, and post-work cleaning verification. DMV General Contracting Group is EPA RRP certified and follows all required protocols for Garrett Park electrical work as standard practice — not as an optional add-on."
        },
        {
            question: "Why does rewiring in Garrett Park cost more than in newer communities?",
            answer: "Garrett Park's pre-1940s homes have original plaster walls and balloon framing — both require significantly more care and time to work through than modern drywall and platform framing. Plaster cannot be cut and patched invisibly like drywall. Balloon framing creates different routing challenges. EPA RRP setup and cleanup adds time. These factors make Garrett Park rewiring more expensive per room than equivalent work in a Silver Spring split-level or Wheaton colonial — and our estimates reflect this honestly rather than discovering it on site."
        },
        {
            question: "Does the National Register Historic District designation affect interior electrical work in Garrett Park?",
            answer: "Interior electrical work — rewiring, panel replacement, outlet installation — does not require historic district review beyond the standard Town of Garrett Park electrical permit. The National Register designation governs exterior modifications and changes to the building envelope. Interior work, including all electrical work, proceeds through the standard Town permit process at 4600 Oxford Street."
        }
    ];

    return (
        <>
            <div className="city-service-detail-page electrical-garrett-park-md">
                <div className="container">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <Link href="/">Home</Link><span>›</span>
                        <Link href="/services">Services</Link><span>›</span>
                        <Link href="/service/electrical-services">Electrical Services</Link><span>›</span>
                        Garrett Park, MD
                    </nav>

                    <div className="hero">
                        <div className="hero-location-tag">📍 Serving Garrett Park, MD — National Register Historic District</div>
                        <h1>Licensed Electrical Services in Garrett Park, MD</h1>
                        <div className="hero-meta">
                            <span className="badge key">🏛️ Historic Home Electrical Specialists</span>
                            <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                            <span className="badge">✓ MHIC Licensed #156178</span>
                            <span className="badge">✓ Permits: Town of Garrett Park — 4600 Oxford St</span>
                            <span className="badge">✓ Knob-and-Tube Rewiring</span>
                            <span className="badge">✓ EPA RRP Certified</span>
                            <span className="badge dark">📞 +1 240-730-1292</span>
                        </div>
                    </div>

                    <div className="banner">
                        <div className="icon">🏛️</div>
                        <div>
                            <h3>Garrett Park Is a National Register Historic District — Its 1900s–1940s Bungalows, Foursquares, and Colonial Revival Homes Carry Electrical Conditions That Require a Contractor Who Knows the Town Permit Office, EPA RRP Protocols, and How to Work Inside Historic Plaster Walls Without Destroying What Makes These Homes Worth Preserving</h3>
                            <p>Garrett Park is one of the most architecturally distinctive communities in Montgomery County — a National Register Historic District whose compact, tree-shaded streets are lined with early 20th century bungalows, craftsman foursquares, and colonial revival homes built between the 1890s and 1940s. The electrical systems in these homes reflect that age: knob-and-tube wiring routed through balloon framing, 60-amp fuse boxes that have never been updated, and original plaster walls that cannot be opened and patched like modern drywall without visible damage to the home's historic fabric. Electrical work in Garrett Park requires a contractor who understands all three realities simultaneously — the Town of Garrett Park permit office at 4600 Oxford Street (not MoCo DPS, which cannot accept Garrett Park permit applications), EPA RRP lead paint compliance for the pre-1978 painted surfaces that all electrical work will disturb, and the skill to route new wiring through historic balloon-framed walls with the minimum of plaster disruption. DMV General Contracting Group brings all three to every Garrett Park electrical project — and files every permit at 4600 Oxford Street, the only correct permit office for electrical work within Garrett Park's town limits.</p>
                        </div>
                    </div>

                    <div className="intro-box">
                        Looking for a licensed <strong>electrician in Garrett Park, MD</strong>? DMV General Contracting Group provides comprehensive residential electrical services for Garrett Park homeowners — knob-and-tube wiring assessment and replacement, Federal Pacific and Zinsco panel replacement, 200A panel upgrades, EV charger installation, GFCI and AFCI protection, whole-home rewiring, recessed lighting, and renovation electrical. All permits filed with the Town of Garrett Park at 4600 Oxford Street. EPA RRP certified for Garrett Park's pre-1978 historic homes. Historic plaster wall techniques used throughout. MHIC licensed #156178, fully insured. Free in-home electrical assessment. Call +1 240-730-1292.
                    </div>

                    <div className="trust-bar">
                        <div className="trust-item"><div className="icon">🏛️</div><strong>Historic Home Expertise</strong><span>Balloon framing, plaster walls, knob-and-tube — Garrett Park's specific conditions</span></div>
                        <div className="trust-item"><div className="icon">📋</div><strong>Town of Garrett Park Permits</strong><span>Filed at 4600 Oxford Street — not MoCo DPS; correct office every time</span></div>
                        <div className="trust-item"><div className="icon">🧪</div><strong>EPA RRP Certified</strong><span>Lead paint protocols on every pre-1978 Garrett Park electrical project</span></div>
                        <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                    </div>

                    <h2>Permits for Garrett Park Electrical Work — Town of Garrett Park at 4600 Oxford Street</h2>

                    <div className="permit-box">
                        <h3>🏛️ Why 4600 Oxford Street Is the Only Correct Permit Office for Garrett Park Electrical Work</h3>
                        <ul>
                            <li><strong>Garrett Park is an incorporated town with its own permit office — completely separate from MoCo DPS:</strong> The Town of Garrett Park at 4600 Oxford Street, Garrett Park, MD 20896 is the sole permit authority for all construction and electrical work performed within Garrett Park's town limits. Montgomery County DPS at 2425 Reedie Drive, Wheaton does not accept permit applications for work within incorporated Garrett Park — a contractor who files there for a Garrett Park project will be turned away, and the permit will not be issued. This is not a technicality — an electrical project performed without a Garrett Park Town permit has no permit at all, regardless of what the contractor represents.</li>
                            <li><strong>Two towns in close proximity — both with their own permit offices:</strong> Garrett Park and Kensington are neighboring incorporated towns, each with its own permit office. Garrett Park: 4600 Oxford Street. Kensington: 3710 Mitchell Street. Neither files with MoCo DPS. A contractor serving both communities needs to know both addresses and confirm by parcel which town's office applies before submitting any permit application. DMV General Contracting Group files at the Town of Garrett Park for every Garrett Park project — confirmed at the free consultation.</li>
                            <li><strong>Town of Garrett Park inspection process:</strong> The Town conducts its own electrical inspections for all permitted work — rough-in inspections for in-wall wiring and final inspections for panels, circuits, and devices. DMV General Contracting Group schedules and manages all Town of Garrett Park inspections in-house, coordinates inspector access with your household, and addresses any inspection comments before the project closes.</li>
                            <li><strong>National Register Historic District considerations:</strong> Garrett Park's historic district designation governs exterior modifications — additions, new construction, and changes to building envelopes. Interior electrical work — rewiring, panel replacement, outlet installation — does not require historic district review beyond the standard Town electrical permit. DMV General Contracting Group confirms which scope elements, if any, require additional review at the free consultation.</li>
                        </ul>
                    </div>

                    <h2>Electrical Services We Offer in Garrett Park, MD</h2>

                    <div className="service-grid">
                        <div className="service-cat">
                            <div className="cat-icon">🔌</div>
                            <div className="cat-label">Most Critical</div>
                            <h3>Historic Home Wiring</h3>
                            <ul>
                                <li>Knob-and-tube wiring assessment</li>
                                <li>Knob-and-tube full replacement</li>
                                <li>Partial knob-and-tube remediation</li>
                                <li>Fuse box to breaker panel conversion</li>
                                <li>Federal Pacific / Zinsco replacement</li>
                                <li>Aluminum branch circuit remediation</li>
                            </ul>
                        </div>
                        <div className="service-cat">
                            <div className="cat-icon">⚡</div>
                            <div className="cat-label">High Priority</div>
                            <h3>Panel & Service Upgrades</h3>
                            <ul>
                                <li>60A → 100A → 200A panel upgrade</li>
                                <li>Subpanel for additions or garages</li>
                                <li>Service entrance upgrade</li>
                                <li>AFCI breaker installation</li>
                                <li>GFCI outlet installation — all wet areas</li>
                                <li>Smoke & CO detector hardwiring</li>
                            </ul>
                        </div>
                        <div className="service-cat">
                            <div className="cat-icon">🚗</div>
                            <div className="cat-label">Modern Upgrades</div>
                            <h3>EV Charging & New Circuits</h3>
                            <ul>
                                <li>Level 2 EV charger installation (240V)</li>
                                <li>Tesla, ChargePoint, JuiceBox install</li>
                                <li>Dedicated kitchen appliance circuits</li>
                                <li>Home office dedicated circuits</li>
                                <li>New circuit additions throughout home</li>
                                <li>Outdoor & garage circuits</li>
                            </ul>
                        </div>
                        <div className="service-cat">
                            <div className="cat-icon">💡</div>
                            <div className="cat-label">Lighting Upgrades</div>
                            <h3>Lighting & Period-Appropriate Fixtures</h3>
                            <ul>
                                <li>Recessed LED lighting installation</li>
                                <li>Period-appropriate fixture wiring</li>
                                <li>Dimmer switch installation</li>
                                <li>Porch & exterior lighting circuits</li>
                                <li>Under-cabinet lighting wiring</li>
                                <li>Ceiling fan installation & wiring</li>
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
                                <li>Home addition full electrical scope</li>
                                <li>Plaster wall wiring techniques</li>
                                <li>Historic home circuit additions</li>
                                <li>ADU & carriage house electrical</li>
                            </ul>
                        </div>
                    </div>

                    <h2>What Electrical Conditions We Find in Garrett Park's Historic Homes</h2>

                    <div className="wiring-grid">
                        <div className="wiring-card">
                            <h3>🔌 Knob-and-Tube Wiring — Garrett Park's Most Common Electrical Condition</h3>
                            <p>Garrett Park's bungalows and foursquares were built in the era when knob-and-tube was the residential wiring standard — and many retain original wiring either fully active or partially replaced. Knob-and-tube in Garrett Park's historic homes is frequently found routed through balloon framing — the continuous stud cavities that run floor-to-ceiling in pre-1940s construction, making wire routing dramatically different from platform-framed modern homes. Balloon framing allows wire to travel vertically through walls without the blocking that stops wires in modern construction — which simplifies some aspects of rewiring but complicates others, particularly at floor penetrations and where original wiring changes direction through framing members. DMV General Contracting Group's experience with Garrett Park's specific framing and wiring conditions means we can map existing knob-and-tube accurately and route replacement wiring with the minimum disruption to original plaster and historic fabric.</p>
                        </div>
                        <div className="wiring-card">
                            <h3>🧱 Original Plaster Walls — Rewiring Without Destroying Them</h3>
                            <p>Garrett Park's historic homes have original plaster walls — a three-coat lime plaster system applied to wood lath that is structurally different from modern drywall in every relevant way. Plaster cannot be cut, patched, and painted invisibly the way drywall can — plaster patches are visible if not done with significant skill, and aggressive cutting for wire routing can cause surrounding plaster to crack and delaminate from the lath. DMV General Contracting Group uses fishing techniques, strategic junction box placement, and selective access points to route new wiring through Garrett Park's plaster walls with the minimum number of openings — and patches all openings with period-appropriate materials when openings are unavoidable. Rewiring a Garrett Park bungalow requires more care and time than rewiring a Silver Spring split-level for this reason — and our estimates for Garrett Park projects reflect that reality honestly.</p>
                        </div>
                        <div className="wiring-card">
                            <h3>⚡ 60A Fuse Boxes — Still Active in Some Garrett Park Homes</h3>
                            <p>The oldest Garrett Park homes that have never had electrical updates may still have original 60-amp fuse boxes — the two-fuse service that was standard for early 20th century residential construction. A 60A fuse box cannot safely support any modern household load combination and is a fire risk under the demands placed on it by today's appliances. It is also essentially uninsurable in Maryland today — carriers refuse coverage or charge prohibitive premiums for homes still on 60A service. Upgrading to a 200A breaker panel — permitted with the Town of Garrett Park at 4600 Oxford Street — is the foundational electrical improvement for any Garrett Park home still on original fuse box service.</p>
                        </div>
                        <div className="wiring-card">
                            <h3>🔶 Federal Pacific Panels — Mid-Century Updates That Created New Problems</h3>
                            <p>Many Garrett Park homes that received electrical updates in the 1960s and 1970s were given Federal Pacific Electric Stab-Lok panels as their "upgrade" — replacing a 60A fuse box with a panel whose breakers have since been identified as fire hazards. A Garrett Park homeowner whose home was partially updated decades ago may have had the fuse box replaced without knowing the replacement panel introduced its own safety risk. DMV General Contracting Group identifies Federal Pacific panels at every Garrett Park free estimate — and replaces them with full 200A upgrades that provide both the fire hazard elimination and the capacity the home needs, all permitted at 4600 Oxford Street.</p>
                        </div>
                    </div>

                    <h2>EPA RRP Compliance in Garrett Park's Historic Homes</h2>

                    <div className="rrp-box">
                        <h3>🧪 EPA RRP — Required for All Electrical Work in Garrett Park's Pre-1978 Homes</h3>
                        <p>Garrett Park is a National Register Historic District and virtually all of its homes were built before 1978 — the year lead paint was banned in residential construction. Electrical work that disturbs painted surfaces in these homes — installing new outlet boxes, running wire through walls, opening junction box locations, cutting plaster for panel access — is subject to EPA RRP (Renovation, Repair and Painting) rules. These rules require a certified renovator on-site during the work, containment of the work area to prevent lead dust spread, proper collection and disposal of lead-containing debris, and post-work cleaning verification. The failure to follow EPA RRP protocols in Garrett Park's pre-1978 homes leaves homeowners with undisclosed lead dust exposure and potential legal liability for non-compliant renovation work — and many electricians performing work in historic homes do not follow these protocols. DMV General Contracting Group is EPA RRP certified and applies all required protocols as standard practice on every Garrett Park electrical project where pre-1978 painted surfaces will be disturbed. This is not an add-on service or an optional upgrade — it is the legally required and ethically correct approach to electrical work in Garrett Park's historic homes.</p>
                    </div>

                    <div className="historic-box">
                        <h3>🏛️ Working Inside a National Register Historic Home — What That Means for Electrical Work</h3>
                        <p>The National Register designation that covers Garrett Park governs the community's exterior character — additions, demolitions, and changes to building envelopes that are visible from the street are subject to historic review. Interior work, including electrical rewiring and panel replacement, does not require historic district approval beyond the standard Town of Garrett Park electrical permit. However, the physical reality of working inside a National Register historic home — original plaster, balloon framing, period trim, and the knowledge that every surface touched matters — requires a different standard of care than standard residential electrical work. DMV General Contracting Group brings that standard to every Garrett Park project: minimum wall openings, period-appropriate finish materials where patches are required, and full documentation of all work performed for the homeowner's historic property records.</p>
                    </div>

                    <h2>Panel Upgrade & Rewiring Cost in Garrett Park, MD</h2>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead>
                                    <tr><th>Service</th><th>Garrett Park Cost</th><th>Permit Filed With</th><th>Notes</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>60A Fuse Box → 200A Panel Upgrade</td><td>$3,200 – $5,500</td><td>Town of Garrett Park, 4600 Oxford St</td><td>Foundational upgrade; most needed in oldest homes</td></tr>
                                    <tr><td>100A → 200A Panel Upgrade ⭐</td><td>$3,000 – $5,200</td><td>Town of Garrett Park, 4600 Oxford St</td><td>Today's standard; supports EV charger & modern loads</td></tr>
                                    <tr><td>Federal Pacific / Zinsco Replacement</td><td>$3,500 – $6,500</td><td>Town of Garrett Park, 4600 Oxford St</td><td>Fire hazard eliminated; insurance documentation provided</td></tr>
                                    <tr><td>Whole-Home Knob-and-Tube Rewiring</td><td>$10,000 – $24,000+</td><td>Town of Garrett Park, 4600 Oxford St</td><td>Plaster wall techniques; EPA RRP; size dependent</td></tr>
                                    <tr><td>Partial Knob-and-Tube Remediation</td><td>$3,500 – $9,000</td><td>Town of Garrett Park, 4600 Oxford St</td><td>Active circuits only; scoped after full assessment</td></tr>
                                    <tr><td>Level 2 EV Charger Installation</td><td>$550 – $1,700</td><td>Town of Garrett Park, 4600 Oxford St</td><td>Panel capacity assessed first</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="tip">
                        💡 <strong>Why Garrett Park rewiring costs more than Silver Spring or Wheaton:</strong> Garrett Park's pre-1940s homes have original plaster walls and balloon framing — neither of which can be treated the same way as the drywall and platform framing of a 1960s Silver Spring split-level. Routing wire through plaster walls without visible damage requires fishing techniques and selective access points that take more time. Plaster patching requires period-appropriate materials and skill. Balloon framing creates different routing challenges at floor levels. EPA RRP setup and cleanup adds time and cost. The result is a project that takes longer and costs more per room than equivalent work in a newer home — and our Garrett Park estimates reflect these realities honestly rather than quoting a standard residential rate and discovering the complications on site.
                    </div>

                    <h2>EV Charger Installation in Garrett Park — Panel Assessment First</h2>

                    <div className="highlight">
                        <p>🚗 <strong>EV charger installation in Garrett Park begins the same way as in Kensington</strong> — with an honest assessment of whether the existing panel can support a dedicated 50A EV charger circuit. Garrett Park's oldest homes on 60A or 100A service need panel upgrades before EV charging is feasible. Homes that received mid-century panel updates to 100A may have marginal capacity depending on existing loads. Homes on 200A service — either original or from a prior upgrade — can typically support a single EV charger without panel work. DMV General Contracting Group assesses panel capacity at the free estimate and quotes charger plus any needed upgrade together. All EV charger installations permitted at 4600 Oxford Street and inspected by Town of Garrett Park inspectors before closing.</p>
                    </div>

                    <h2>Electrical Warning Signs in Garrett Park's Historic Homes</h2>

                    <div className="signs-grid">
                        <div className="sign-card">
                            <div className="s-icon">🏚️</div>
                            <h3>Visible Knob-and-Tube in Attic</h3>
                            <p>Ceramic knobs and tubes visible in unfinished attic framing — original wiring that may still be active in finished areas of the home.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">💣</div>
                            <h3>Fuse Box Still in Service</h3>
                            <p>Screw-in fuses instead of breakers — the home is on 60A original service, uninsurable and insufficient for any modern electrical demand.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">🔥</div>
                            <h3>Federal Pacific Panel</h3>
                            <p>A mid-century "upgrade" that introduced a new fire hazard — Stab-Lok breakers that fail to trip on overload; common in Garrett Park's 1960s–70s updates.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">🔌</div>
                            <h3>Two-Prong Outlets Throughout</h3>
                            <p>Ungrounded outlets in every room — original knob-and-tube wiring without a ground conductor still serving the home's branch circuits.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">💡</div>
                            <h3>Lights Flickering or Dimming</h3>
                            <p>Voltage fluctuation — aging knob-and-tube connections losing integrity or undersized service struggling with modern simultaneous loads.</p>
                        </div>
                        <div className="sign-card">
                            <div className="s-icon">👃</div>
                            <h3>Burning Smell Near Panel or Outlets</h3>
                            <p>Any burning or electrical smell — fire emergency warning sign requiring immediate assessment; particularly serious in balloon-framed homes where fire spreads rapidly through open stud cavities.</p>
                        </div>
                    </div>

                    <h2>Our Electrical Service Process in Garrett Park</h2>

                    <div className="steps">
                        <div className="step">
                            <div className="step-num">1</div>
                            <div className="step-content">
                                <h3>Free In-Home Assessment — Wiring Type, Plaster Condition, Lead Paint Status & Panel</h3>
                                <p>We visit your Garrett Park home and assess the complete picture: panel type and capacity (fuse box, Federal Pacific, or standard panel), knob-and-tube presence in attic and basement, outlet grounding, plaster wall condition in areas where electrical work will be needed, and pre-1978 status for EPA RRP purposes. We confirm the correct permit office is the Town of Garrett Park at 4600 Oxford Street. We discuss your electrical goals — panel upgrade, EV charger, rewiring, renovation — and provide a detailed estimate calibrated to Garrett Park's historic home conditions. No charge, no obligation.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-num">2</div>
                            <div className="step-content">
                                <h3>EPA RRP Setup — Lead Paint Containment Before Any Wall Work Begins</h3>
                                <p>For Garrett Park homes where electrical work will disturb painted surfaces — which is virtually all of them — we set up EPA RRP-compliant containment before any work begins: sealing the work area, setting up proper collection for lead-containing debris, and briefing all workers on lead-safe work practices. This step is non-negotiable for Garrett Park's pre-1978 historic homes and is standard practice on every project we perform here.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-num">3</div>
                            <div className="step-content">
                                <h3>Town of Garrett Park Permit Application — 4600 Oxford Street</h3>
                                <p>We prepare and file all electrical permits at the Town of Garrett Park at 4600 Oxford Street — the only correct permit office for Garrett Park electrical work. For panel upgrades, rewiring, and EV charger installations, we include all required load calculations and documentation. We track permit approval and manage all Town correspondence. Town of Garrett Park permit review typically runs 1–3 weeks for standard electrical projects.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-num">4</div>
                            <div className="step-content">
                                <h3>Electrical Work — Historic Plaster and Balloon-Frame Techniques Throughout</h3>
                                <p>Our licensed electricians perform all work with the care Garrett Park's historic homes require: minimum wall openings, fishing techniques through balloon-framed stud cavities, plaster patching with period-appropriate materials at all access points, protection of original hardwood floors and period trim throughout. EPA RRP protocols maintained during all wall work. For knob-and-tube replacement, each circuit is identified, deactivated, and replaced individually with new copper wiring routed to minimize plaster disruption. For panel replacements, the brief power interruption is coordinated with your household.</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="step-num">5</div>
                            <div className="step-content">
                                <h3>Town of Garrett Park Inspection, Post-Work RRP Verification & Final Testing</h3>
                                <p>We schedule and manage all required Town of Garrett Park electrical inspections. For EPA RRP projects, we complete post-work cleaning verification and provide documentation of RRP compliance — the record that confirms all required protocols were followed. We test all circuits, outlets, and panels with you and provide written warranty documentation at project close. Full documentation of all work performed provided for your historic property records.</p>
                            </div>
                        </div>
                    </div>

                    <h2>What Garrett Park Homeowners Say About DMV General Contracting Group</h2>

                    <div className="review-grid">
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"We have a 1924 Garrett Park bungalow with original knob-and-tube wiring throughout. DMV General Contracting Group assessed the home thoroughly, mapped which circuits were still active, and provided a complete rewiring scope. They filed the permit at the Town of Garrett Park — not MoCo DPS — and rewired the entire home with remarkable care for our plaster walls. The number of visible patches is minimal. Our insurance carrier accepted the completion documentation and our premium dropped significantly."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Garrett Park, MD</span></div>
                        </div>
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"We discovered a Federal Pacific panel in our 1938 Garrett Park colonial during a pre-sale inspection — the buyers flagged it as a condition. DMV General Contracting Group replaced it with a 200A upgrade within two weeks, filed with the Town of Garrett Park, and provided the inspection documentation the buyers' agent required. The buyers removed the electrical condition and the sale proceeded. The EPA RRP setup they did before opening the wall area was something no other contractor we'd spoken with had even mentioned."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Garrett Park, MD</span></div>
                        </div>
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"We installed a Level 2 EV charger in our detached garage. Our Garrett Park home had been upgraded to 200A previously, so DMV confirmed at the free estimate that panel capacity was fine. They ran the circuit to the garage, installed a ChargePoint charger, pulled the Town of Garrett Park permit, and had the inspection scheduled the same week. The permit process at 4600 Oxford Street was completely handled by DMV — we didn't make a single call to the Town."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Garrett Park, MD</span></div>
                        </div>
                        <div className="review-card">
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"We did a kitchen renovation in our 1912 Garrett Park foursquare — new dedicated circuits for modern appliances. DMV General Contracting Group set up EPA RRP containment before touching a single wall. They fished new circuits through the balloon framing without opening more than three small access holes in the kitchen. Those holes were patched with lime plaster that matches the surrounding wall almost perfectly. Their electrician had clearly worked in historic homes before."</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">Garrett Park, MD</span></div>
                        </div>
                    </div>

                    <div className="highlight">
                        <p>⭐ <strong>4.9-star rated with 97+ verified homeowner reviews.</strong> Garrett Park homeowners trust DMV General Contracting Group for historic home electrical work that files every permit at the Town of Garrett Park at 4600 Oxford Street, applies EPA RRP lead paint protocols as standard practice on every pre-1978 project, routes new wiring through original plaster and balloon framing with minimum wall disruption, and delivers the insurance and resale documentation that Garrett Park's historic properties require.</p>
                    </div>

                    <div className="cta-banner">
                        <h2>Get a Free Electrical Assessment for Your Garrett Park Home</h2>
                        <p>Our licensed electricians will visit your Garrett Park historic home, assess knob-and-tube wiring, panel type, plaster condition, and lead paint status — and provide a detailed estimate calibrated to Garrett Park's specific conditions. All permits filed at Town of Garrett Park, 4600 Oxford Street.</p>
                        <Link href="/contact-us" className="cta-btn">Schedule Free Electrical Assessment →</Link>
                        <Link href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</Link>
                    </div>

                    <h2>Serving All Garrett Park, MD for Electrical Services</h2>
                    <div className="areas-grid">
                        <span className="area-pill">Garrett Park Historic District</span>
                        <span className="area-pill">Oxford Street Corridor</span>
                        <span className="area-pill">Strathmore Avenue Area</span>
                        <span className="area-pill">Keswick Avenue Area</span>
                        <span className="area-pill">Rokeby Avenue Area</span>
                        <span className="area-pill">Clermont Avenue Area</span>
                    </div>

                    <h2>Frequently Asked Questions — Electrical Services in Garrett Park, MD</h2>
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
                        <h2>Explore Our Other Services in Garrett Park, MD</h2>
                        <ul>
                            <li><Link href="/service/home-additions/garrett-park-md">Home Additions in Garrett Park, MD</Link></li>
                            <li><Link href="/service/design-build/garrett-park-md">Design-Build Contractor in Garrett Park, MD</Link></li>
                            <li><Link href="/service/kitchen-remodeling/garrett-park-md">Kitchen Remodeling in Garrett Park, MD</Link></li>
                            <li><Link href="/service/bathroom-remodeling/garrett-park-md">Bathroom Remodeling in Garrett Park, MD</Link></li>
                            <li><Link href="/service/siding-installation/garrett-park-md">Siding Installation in Garrett Park, MD</Link></li>
                            <li><Link href="/service/flooring-remodeling/garrett-park-md">Flooring Installation in Garrett Park, MD</Link></li>
                            <li><Link href="/service/carpet-installation/garrett-park-md">Carpet Installation in Garrett Park, MD</Link></li>
                            <li><Link href="/service/plumbing-services/garrett-park-md">Plumbing Services in Garrett Park, MD</Link></li>
                        </ul>
                    </div>

                    <div className="cta-banner">
                        <h2>Ready to Update Your Garrett Park Home's Electrical System?</h2>
                        <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free assessment. Knob-and-tube assessment, Federal Pacific replacement, 200A panel upgrade, EV charger installation. All permits filed at Town of Garrett Park, 4600 Oxford Street. EPA RRP certified. Historic plaster techniques. MHIC licensed. Available 7 days a week.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Electrical Estimate in Garrett Park →</Link>
                        <Link href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default GarrettParkMD;
