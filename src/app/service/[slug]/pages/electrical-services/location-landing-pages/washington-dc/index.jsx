'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const WashingtonDC = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Do I need an electrical permit for work in Washington, DC?",
            answer: "DC Department of Buildings (DOB) requires applicable electrical permits before covered electrical work begins. The exact requirement depends on the scope, so we recommend confirming the project with DC DOB before starting."
        },
        {
            question: "Who handles electrical permits in the City of Washington, DC?",
            answer: "DC Department of Buildings (DOB) handles permitting and inspections. DC DOB provides online permitting and inspection services through its digital systems."
        },
        {
            question: "Can historic-district rules affect my electrical project?",
            answer: "They can, especially when a project involves exterior alterations or other work identified by the City's historic-preservation rules. Washington, DC has extensive historic-preservation requirements, so the property designation and proposed scope should be checked before work begins."
        },
        {
            question: "Does EPA RRP apply to electrical work in an older home?",
            answer: "EPA states that the RRP rule can apply to paid renovation work that disturbs painted surfaces in pre-1978 target housing, and electrical work is one of the covered activity types when the rule's conditions are met. The exact requirements depend on the project and surfaces being disturbed."
        },
        {
            question: "How do I know if my panel needs an upgrade?",
            answer: "Warning signs include frequent breaker trips, insufficient capacity for planned loads, obsolete equipment, overheating, damaged components or a need to add major loads such as an EV charger. A professional load and equipment assessment is the best way to determine whether an upgrade is appropriate."
        },
        {
            question: "Can you install an EV charger without replacing my panel?",
            answer: "Sometimes. The answer depends on the existing service capacity, panel rating, current loads, available breaker space and the proposed charger. We evaluate those factors before recommending a panel upgrade."
        }
    ];

    return (
        <>
            <div className="city-service-detail-page electrical-washington-dc">
                <div className="container">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <Link href="/">Home</Link><span>›</span>
                        <Link href="/services">Services</Link><span>›</span>
                        <Link href="/service/electrical-services">Electrical Services</Link><span>›</span>
                        Washington, DC
                    </nav>

                    <div className="hero">
                        <div className="hero-location-tag">📍 Serving Washington, DC & Surrounding Communities</div>
                        <h1>Licensed Residential Electrical Services in Washington, DC</h1>
                        <div className="hero-meta">
                            <span className="badge key">⚡ Residential Electrical Specialists</span>
                            <span className="badge">✓ MHIC Licensed #156178</span>
                            <span className="badge">✓ Panel Upgrades & Rewiring</span>
                            <span className="badge">✓ EV Charger Installation</span>
                            <span className="badge">✓ Historic-Home Experience</span>
                            <span className="badge dark">📞 +1 240-730-1292</span>
                        </div>
                    </div>

                    <div className="banner">
                        <div className="icon">⚡</div>
                        <div>
                            <h3>Electrical work in Washington, DC requires more than replacing a switch or installing a new circuit.</h3>
                            <p>Washington, DC includes newer neighborhoods as well as older residential properties and locally designated historic districts. The right electrical approach depends on the home's age, existing wiring, panel capacity, renovation scope and, for designated historic properties, whether the proposed work falls under the City's historic-review requirements.</p>
                        </div>
                    </div>

                    <div className="intro-box">
                        Looking for a <strong>residential electrician in Washington, DC</strong>? DMV General Contracting Group provides electrical services for homeowners planning panel upgrades, whole-home or partial rewiring, electrical troubleshooting, EV charger installation, dedicated circuits, lighting upgrades, generator connections and renovation electrical work. We evaluate the existing electrical system first, explain the recommended scope clearly and coordinate applicable permitting and inspections. For older and historic properties, we also consider existing construction materials and lead-safe requirements before disturbing painted surfaces. <strong>Call +1 240-730-1292 for a free electrical assessment.</strong>
                    </div>

                    <div className="trust-bar">
                        <div className="trust-item"><div className="icon">⚡</div><strong>Residential Expertise</strong><span>Repairs, upgrades, circuits, lighting and renovation electrical</span></div>
                        <div className="trust-item"><div className="icon">📋</div><strong>Permit Coordination</strong><span>DC electrical permit and inspection process</span></div>
                        <div className="trust-item"><div className="icon">🏛️</div><strong>Older-Home Care</strong><span>Experience with historic and older residential properties</span></div>
                        <div className="trust-item"><div className="icon">🚗</div><strong>EV Ready</strong><span>Panel assessment and dedicated EV charging circuits</span></div>
                    </div>

                    <h2>Washington, DC Electrical Permits & Inspections</h2>

                    <div className="permit-box">
                        <h3>📋 Start With the Correct Permit Path</h3>
                        <ul>
                            <li><strong>Electrical work may require a permit before construction begins.</strong> DC Department of Buildings (DOB) requires applicable permits for covered electrical work before construction begins.</li>
                            <li><strong>Washington, DC provides a dedicated electrical permit application.</strong> DC DOB describes an Electrical Permit as a permit for repair, replacement or installation of an electrical system.</li>
                            <li><strong>Inspections are part of the permitted-work process.</strong> DC DOB handles construction inspections for completed work performed under electrical permits and provides online inspection scheduling.</li>
                            <li><strong>Historic properties need property-specific review.</strong> For historic properties, DC's Historic Preservation Office (HPO) may review permit applications when applicable. The exact review path depends on the property's designation and the proposed scope.</li>
                        </ul>
                    </div>

                    <h2>Electrical Services We Offer in Washington, DC</h2>

                    <div className="service-grid">
                        <div className="service-cat">
                            <div className="cat-icon">🔌</div><div className="cat-label">Core Electrical</div>
                            <h3>Electrical Repairs & Troubleshooting</h3>
                            <ul>
                                <li>Electrical fault diagnosis</li><li>Outlet and switch repair</li><li>Circuit troubleshooting</li><li>Breaker troubleshooting</li><li>Power-loss diagnosis</li><li>Electrical safety assessments</li>
                            </ul>
                        </div>

                        <div className="service-cat">
                            <div className="cat-icon">⚡</div><div className="cat-label">High Priority</div>
                            <h3>Panel & Service Upgrades</h3>
                            <ul>
                                <li>Panel replacement</li><li>Service capacity evaluation</li><li>Subpanel installation</li><li>Dedicated circuits</li><li>AFCI/GFCI protection</li><li>Load assessment</li>
                            </ul>
                        </div>

                        <div className="service-cat">
                            <div className="cat-icon">🏠</div><div className="cat-label">Older Homes</div>
                            <h3>Rewiring & Electrical Modernization</h3>
                            <ul>
                                <li>Whole-home rewiring</li><li>Partial rewiring</li><li>Older wiring assessment</li><li>Grounding improvements</li><li>Two-prong outlet upgrades</li><li>Renovation wiring</li>
                            </ul>
                        </div>

                        <div className="service-cat">
                            <div className="cat-icon">🚗</div><div className="cat-label">Modern Upgrade</div>
                            <h3>EV Charger Installation</h3>
                            <ul>
                                <li>Level 2 EV charger circuits</li><li>Panel capacity assessment</li><li>Dedicated 240V circuits</li><li>Garage charging solutions</li><li>Charger wiring</li><li>Inspection coordination</li>
                            </ul>
                        </div>

                        <div className="service-cat">
                            <div className="cat-icon">💡</div><div className="cat-label">Lighting</div>
                            <h3>Lighting & Fixture Installation</h3>
                            <ul>
                                <li>Recessed LED lighting</li><li>Interior fixture wiring</li><li>Exterior lighting</li><li>Dimmer switches</li><li>Ceiling fans</li><li>Under-cabinet lighting</li>
                            </ul>
                        </div>

                        <div className="service-cat">
                            <div className="cat-icon">🔋</div><div className="cat-label">Backup Power</div>
                            <h3>Generator & Backup Power</h3>
                            <ul>
                                <li>Generator electrical connections</li><li>Transfer equipment</li><li>Generator circuits</li><li>Interlock solutions</li><li>Portable generator connections</li><li>Load evaluation</li>
                            </ul>
                        </div>
                    </div>

                    <h2>Electrical Conditions We Commonly Evaluate in Older Washington, DC Homes</h2>

                    <div className="wiring-grid">
                        <div className="wiring-card">
                            <h3>🔌 Older or Mixed Wiring</h3>
                            <p>Older homes can contain a combination of original wiring and later electrical updates. During an assessment, we identify the wiring types present, look for damaged or improperly modified components and determine which circuits should be repaired, upgraded or replaced.</p>
                        </div>

                        <div className="wiring-card">
                            <h3>⚡ Outdated Panels & Limited Capacity</h3>
                            <p>A panel may appear functional while still being poorly matched to the home's current electrical demand. We evaluate panel condition, service capacity, breaker configuration and the planned load before recommending an upgrade.</p>
                        </div>

                        <div className="wiring-card">
                            <h3>🔧 Two-Prong or Ungrounded Receptacles</h3>
                            <p>Two-prong outlets can indicate that a branch circuit lacks an equipment grounding conductor. The correct solution depends on the existing wiring and the applicable code requirements. We assess the circuit before recommending replacement or rewiring.</p>
                        </div>

                        <div className="wiring-card">
                            <h3>🏛️ Historic Construction</h3>
                            <p>Washington, DC contains locally designated historic districts with older residential structures. Work on these properties may require additional planning, particularly when exterior features are altered. We identify the property's status and keep the electrical scope aligned with the applicable approval path.</p>
                        </div>
                    </div>

                    <h2>Electrical Work in Washington, DC Historic Districts</h2>

                    <div className="historic-box">
                        <h3>🏛️ Preserve the Property While Modernizing the Electrical System</h3>
                        <p>Washington, DC includes numerous designated historic districts and historic properties, including neighborhoods such as Georgetown, Capitol Hill, Dupont Circle and others. DC's historic-preservation process is intended to ensure that work on historic properties is compatible with their historic character, with preservation review added to the normal building-permit process when applicable. National Register listing and local historic-district designation are not identical, so the property's specific status matters. For electrical projects, we focus on safe modernization while minimizing unnecessary disturbance to historic finishes and coordinating any required approvals before work begins.</p>
                    </div>

                    <div className="highlight">
                        <p><strong>Important:</strong> A property being historic does not automatically mean every interior electrical task needs preservation review. Requirements depend on the property designation and project scope. DC guidance states that historic-preservation review is tied to permit-required work affecting exterior appearance and certain designated historic interiors, so the exact scope should be checked before construction.</p>
                    </div>

                    <h2>EPA RRP & Lead-Safe Practices for Older Washington, DC Homes</h2>

                    <div className="rrp-box">
                        <h3>🧪 Pre-1978 Homes Require Extra Attention When Painted Surfaces Are Disturbed</h3>
                        <p>EPA's Renovation, Repair and Painting rule applies to covered renovation activities in pre-1978 target housing when painted surfaces are disturbed. EPA specifically identifies electrical work among covered activities when the applicable conditions are met. Depending on the project, requirements can include firm certification, trained workers, containment, lead-safe work practices, cleaning and documentation. For older Washington, DC homes, we evaluate the age and condition of affected surfaces before cutting, drilling or opening painted areas and follow the applicable lead-safe requirements.</p>
                    </div>

                    <h2>Panel Upgrade & Electrical Project Cost Factors in Washington, DC</h2>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead>
                                    <tr><th>Project</th><th>Main Cost Factors</th><th>Assessment Focus</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>Panel Upgrade</td><td>Panel type, amperage, service equipment, wiring and permit scope</td><td>Existing load, service condition and future electrical demand</td></tr>
                                    <tr><td>Whole-Home Rewiring</td><td>Home size, access, wiring condition, wall construction and finish repair</td><td>Existing circuits, grounding, access points and project sequence</td></tr>
                                    <tr><td>EV Charger</td><td>Charger type, circuit length, panel capacity and garage location</td><td>Available capacity and route for the dedicated circuit</td></tr>
                                    <tr><td>Dedicated Circuit</td><td>Appliance/load, distance, access and panel space</td><td>Required circuit size and available breaker positions</td></tr>
                                    <tr><td>Lighting Upgrade</td><td>Fixture quantity, wiring access, ceiling construction and controls</td><td>Existing wiring and desired lighting layout</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="tip">
                        💡 <strong>Why we avoid one-size-fits-all electrical pricing:</strong> Two Washington, DC homes can need very different scopes even when the requested service has the same name. A panel upgrade in a newer home is not the same project as a panel upgrade in an older property with limited service capacity, difficult access or outdated wiring. We inspect first and then provide a project-specific estimate.
                    </div>

                    <h2>EV Charger Installation in Washington, DC — Start With a Load Assessment</h2>

                    <div className="highlight">
                        <p>🚗 <strong>Planning to install an EV charger at home?</strong> We first evaluate the existing electrical service, panel capacity, breaker space, wiring route and charger location. If the existing system can support the new load, we design the dedicated circuit accordingly. If an upgrade is needed, we explain the options before installation. The City of Washington, DC also lists residential EV charging outlets in its electrical permit fee schedule.</p>
                    </div>

                    <h2>Electrical Warning Signs Washington, DC Homeowners Should Not Ignore</h2>

                    <div className="signs-grid">
                        <div className="sign-card"><div className="s-icon">🔥</div><h3>Burning Smell</h3><p>A burning or melted-plastic smell near an outlet, switch or panel requires prompt professional attention.</p></div>
                        <div className="sign-card"><div className="s-icon">💡</div><h3>Flickering Lights</h3><p>Persistent flickering can indicate a loose connection, overloaded circuit or other electrical issue.</p></div>
                        <div className="sign-card"><div className="s-icon">⚡</div><h3>Frequent Breaker Trips</h3><p>Repeated trips may indicate overload, a fault, a damaged device or a circuit that needs evaluation.</p></div>
                        <div className="sign-card"><div className="s-icon">🔌</div><h3>Warm Outlets</h3><p>Hot, discolored or buzzing receptacles should be inspected rather than repeatedly reset or replaced.</p></div>
                        <div className="sign-card"><div className="s-icon">🏚️</div><h3>Very Old Wiring</h3><p>Older wiring should be evaluated before major remodeling, EV charging or adding high-load appliances.</p></div>
                        <div className="sign-card"><div className="s-icon">💥</div><h3>Electrical Arcing</h3><p>Sparking, crackling or visible arcing is a safety concern and should be addressed immediately.</p></div>
                    </div>

                    <div className="warning-box">
                        <h3>⚠️ Safety First</h3>
                        <p>If you see smoke, active sparking, flames or smell strong burning from electrical equipment, move away from the hazard and contact emergency services when appropriate. Do not attempt to open or repair energized electrical equipment yourself.</p>
                    </div>

                    <h2>Our Electrical Service Process in Washington, DC</h2>

                    <div className="steps">
                        <div className="step"><div className="step-num">1</div><div className="step-content"><h3>Initial Assessment</h3><p>We discuss the problem or upgrade you are planning, inspect the relevant electrical components and identify the likely scope of work.</p></div></div>
                        <div className="step"><div className="step-num">2</div><div className="step-content"><h3>System & Load Evaluation</h3><p>For panels, EV chargers and new circuits, we evaluate service capacity, panel condition, circuit configuration and future electrical demand.</p></div></div>
                        <div className="step"><div className="step-num">3</div><div className="step-content"><h3>Permit & Scope Coordination</h3><p>Where a permit is required, we prepare the appropriate documentation and coordinate the project with the applicable City of Washington, DC process.</p></div></div>
                        <div className="step"><div className="step-num">4</div><div className="step-content"><h3>Professional Installation</h3><p>Our team completes the electrical work according to the approved scope, with attention to existing finishes, access conditions and the home's construction.</p></div></div>
                        <div className="step"><div className="step-num">5</div><div className="step-content"><h3>Testing & Inspection</h3><p>We test completed work and coordinate required inspections so the project can be properly documented and closed out.</p></div></div>
                    </div>

                    <h2>Why Washington, DC Homeowners Choose a Contractor Who Understands Older Homes</h2>

                    <div className="wiring-grid">
                        <div className="wiring-card"><h3>Experience-Based Assessment</h3><p>Electrical problems are not always visible at the panel. We look at the relationship between wiring, circuits, appliances, construction and the homeowner's planned use.</p></div>
                        <div className="wiring-card"><h3>Clear Recommendations</h3><p>We explain what needs immediate attention, what can be planned later and which upgrades make sense for the property's current and future electrical demand.</p></div>
                        <div className="wiring-card"><h3>Permit-Aware Project Management</h3><p>Where permitting is required, we account for permit and inspection steps as part of the project instead of treating them as an afterthought.</p></div>
                        <div className="wiring-card"><h3>Historic-Property Awareness</h3><p>For designated and older properties, we consider historic-review requirements and lead-safe practices before disturbing surfaces.</p></div>
                    </div>

                    <h2>About DMV General Contracting Group</h2>
                    <p>DMV General Contracting Group provides residential contracting services in the Maryland/DC region, including electrical-related construction and renovation scopes. The company information used on this page identifies MHIC License #156178 and DLCP License #410526000209. For a current project, homeowners should confirm the appropriate license, permit and inspection requirements for their specific scope and property.</p>

                    <div className="highlight">
                        <p><strong>E-E-A-T approach:</strong> This page is written around first-hand service considerations—panel capacity, wiring condition, access, permitting, inspections, older-home construction and project-specific assessment—rather than generic keyword repetition. Regulatory and local-process statements are based on official City of Washington, DC and U.S. EPA information and should be rechecked when regulations or municipal procedures change.</p>
                    </div>

                    <div className="cta-banner">
                        <h2>Get a Free Electrical Assessment in Washington, DC</h2>
                        <p>Planning a panel upgrade, rewiring project, EV charger, lighting upgrade or electrical renovation? Let us evaluate the existing system and explain the best next step for your Washington, DC home.</p>
                        <Link href="/contact-us" className="cta-btn">Schedule Free Electrical Assessment →</Link>
                        <Link href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</Link>
                    </div>

                    <h2>Serving Washington, DC & Nearby Communities</h2>
                    <div className="areas-grid">
                        <span className="area-pill">Downtown Washington, DC</span>
                        <span className="area-pill">West End</span>
                        <span className="area-pill">Lincoln Park</span>
                        <span className="area-pill">Washington, DC Park</span>
                        <span className="area-pill">Georgetown</span>
                        <span className="area-pill">Dupont Circle</span>
                        <span className="area-pill">Brookland</span>
                        <span className="area-pill">Cleveland Park</span>
                        <span className="area-pill">King Farm</span>
                        <span className="area-pill">Croydon Park</span>
                    </div>

                    <h2>Frequently Asked Questions — Electrical Services in Washington, DC</h2>
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
                        <h2>Explore Our Other Services in Washington, DC</h2>
                        <ul>
                            <li><Link href="/service/home-additions/washington-dc">Home Additions in Washington, DC</Link></li>
                            <li><Link href="/service/design-build/washington-dc">Design-Build Contractor in Washington, DC</Link></li>
                            <li><Link href="/service/kitchen-remodeling/washington-dc">Kitchen Remodeling in Washington, DC</Link></li>
                            <li><Link href="/service/bathroom-remodeling/washington-dc">Bathroom Remodeling in Washington, DC</Link></li>
                            <li><Link href="/service/siding-installation/washington-dc">Siding Installation in Washington, DC</Link></li>
                            <li><Link href="/service/flooring-remodeling/washington-dc">Flooring Installation in Washington, DC</Link></li>
                            <li><Link href="/service/plumbing-services/washington-dc">Plumbing Services in Washington, DC</Link></li>
                        </ul>
                    </div>

                    <div className="source-note">
                        <strong>DC regulatory note:</strong> Electrical trade permits are issued to licensed and bonded master trade professionals in DC; historic-property work may require HPO review through the normal DOB permit process.
                        <strong>Research & verification note:</strong> Local permitting and historic-preservation information was checked against City of Washington, DC public resources. Lead-safe/RRP information was checked against current U.S. EPA guidance. This page should be reviewed periodically because municipal procedures, fees, codes and regulatory requirements can change.
                    </div>

                    <div className="cta-banner">
                        <h2>Ready to Improve Your Washington, DC Home's Electrical System?</h2>
                        <p>Call <strong>+1 240-730-1292</strong> or schedule your assessment for panel upgrades, rewiring, EV charging, lighting, dedicated circuits and residential electrical improvements.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Electrical Estimate in Washington, DC →</Link>
                        <Link href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default WashingtonDC;
