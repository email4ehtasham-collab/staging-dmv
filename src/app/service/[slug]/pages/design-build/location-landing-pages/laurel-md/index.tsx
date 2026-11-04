'use client';

import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "./style.scss";
import "../design-build-city-style.scss";

const LaurelMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "How many permit jurisdictions does Laurel, MD have and which one covers my home?",
            answer: "Laurel has three permit jurisdictions: the City of Laurel (permit office at 8103 Sandy Spring Road, Laurel, MD 20707) for incorporated city properties; Montgomery County DPS (2425 Reedie Drive, Wheaton) for unincorporated MoCo addresses including West Laurel and Montpelier; and Prince George's County DPS for unincorporated PG County addresses including Laurel Lakes and Russett. The correct jurisdiction for your property cannot be determined from the street address or ZIP code alone — parcel-level lookup is required. DMV-GC Group confirms the correct jurisdiction for every Laurel project at the free consultation before any permit-required scope begins."
        },
        {
            question: "Does DMV-GC Group serve both MoCo and PG County addresses in Laurel?",
            answer: "Yes. DMV-GC Group holds Maryland MHIC license #156178 — valid for home improvement and construction work throughout Maryland, including all three Laurel permit jurisdictions: City of Laurel, unincorporated Montgomery County, and unincorporated Prince George's County. We file with whichever of the three authorities governs your specific parcel — City of Laurel at 8103 Sandy Spring Road, MoCo DPS at 2425 Reedie Drive, or PG County DPS — and manage the full permit process in-house for each jurisdiction."
        },
        {
            question: "How much does a design-build renovation cost in Laurel, MD?",
            answer: "Design-build costs in Laurel depend on scope. Open-concept conversions run $15,000–$48,000+. Kitchen remodels run $30,000–$95,000+. Bathroom renovations run $20,000–$65,000+. Basement finishing runs $28,000–$90,000+. Rear additions range from $90,000–$270,000+. ADU construction runs $65,000–$220,000+. Whole-home renovations range from $115,000–$380,000+. Architectural design, structural engineering, and permit processing with the correct jurisdiction are all included — no separate architect billing rate."
        },
        {
            question: "Can I build an ADU on my Laurel property?",
            answer: "ADU eligibility in Laurel depends on which jurisdiction governs your parcel. City of Laurel, Montgomery County, and Prince George's County each implement Maryland's 2021 ADU reforms with jurisdiction-specific rules governing ADU size, setback, owner-occupancy requirements, and eligible lot types. Our architects confirm ADU eligibility under the specific rules that apply to your parcel at the free consultation — not by assuming MoCo or PG County rules apply uniformly across all Laurel addresses."
        },
        {
            question: "Is DMV-GC Group licensed for design-build in Laurel, MD?",
            answer: "Yes. DMV General Contracting Group holds Maryland MHIC license #156178 — required for all home improvement and construction work in Laurel across all three permit jurisdictions. Fully bonded, comprehensive general liability and workers' compensation coverage, and a 1-year workmanship warranty on every Laurel design-build project."
        }
    ];

    return (
        <div className="design-build-city-detail-page design-build-laurel-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/design-build">Design-Build</Link><span>›</span>
                    Laurel, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Laurel, MD</div>
                    <h1>Design-Build Contractor in Laurel, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏛️ In-House Architects & Engineers</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ All 3 Laurel Permit Jurisdictions</span>
                        <span className="badge">✓ City · MoCo DPS · PG County</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">📋</div>
                    <div>
                        <h3>Laurel Is the Only Community in the DMV Region That Straddles Two County Lines and Contains an Incorporated City — Producing Three Separate Permit Jurisdictions That Most Contractors Cannot Navigate Correctly</h3>
                        <p>Laurel sits at the boundary of Montgomery County and Prince George's County, with the incorporated City of Laurel overlapping both. The result is a tri-jurisdiction permit landscape that is unique in Maryland: properties within the City of Laurel file permits at 8103 Sandy Spring Road, Laurel, MD 20707; unincorporated Montgomery County addresses — West Laurel, Montpelier, and areas north and west of the city limits — file with MoCo DPS at 2425 Reedie Drive, Wheaton; and unincorporated Prince George's County addresses — Laurel Lakes, Russett, and areas south and east of the city line — file with PG County DPS. Three permit offices. Three sets of zoning rules. Three inspection processes. One ZIP code that covers all three. A contractor who assumes all Laurel addresses file with the same authority will get two out of three wrong. DMV General Contracting Group confirms the correct jurisdiction for every Laurel project by parcel address before any permit-required scope begins — filing with the City of Laurel, MoCo DPS, or PG County DPS as the specific parcel requires. One firm, one contract, all three jurisdictions navigated correctly.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a trusted <strong>design-build contractor in Laurel, MD</strong>? DMV General Contracting Group brings licensed architects, structural engineers, permit specialists, and all licensed trades in-house for Laurel renovation projects — covering all three permit jurisdictions under one Maryland MHIC license. Home additions and ADUs for Laurel's 1960s–1980s colonials and split-levels. Open-concept conversions that transform compartmentalized postwar floor plans. Whole-home renovations that address the old-home conditions in Laurel's established neighborhoods. Kitchen and bathroom renovations designed and built in-house. One firm. One contract. Full accountability — and the correct permit office for your specific Laurel address, confirmed before any design begins.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">📋</div><strong>All 3 Jurisdictions</strong><span>City of Laurel · MoCo DPS · PG County — all confirmed by parcel</span></div>
                    <div className="trust-item"><div className="icon">📐</div><strong>In-House Architects</strong><span>Laurel colonial & split-level addition and renovation design</span></div>
                    <div className="trust-item"><div className="icon">🧱</div><strong>Structural Engineers</strong><span>Load-bearing assessment & addition foundations for postwar Laurel homes</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>Laurel's Three Permit Jurisdictions — The Most Complex Permit Landscape Per Acre in Maryland</h2>
                <p>No other single community in Maryland presents three distinct permit authorities within the same named place. Understanding which one governs your specific Laurel address is not optional — it is the first step in every design-build project:</p>

                <div className="juris-grid">
                    <div className="juris-card city">
                        <h3>🏛️ City of Laurel</h3>
                        <div className="juris-tag">8103 Sandy Spring Road</div>
                        <ul>
                            <li>Incorporated city with own permit office at 8103 Sandy Spring Road, Laurel, MD 20707</li>
                            <li>Covers most of historic Laurel, Laurel Town Center, and areas within incorporated city limits straddling both counties</li>
                            <li>All building permits for city-limit properties — additions, ADUs, structural work, significant kitchen/bath renovations — filed here</li>
                            <li>City zoning governs setback, lot coverage, and ADU eligibility for city-limit parcels</li>
                            <li>Neighbor to both MoCo and PG County zoning at city boundary</li>
                        </ul>
                    </div>
                    <div className="juris-card moco">
                        <h3>🏛️ MoCo DPS</h3>
                        <div className="juris-tag">2425 Reedie Drive, Wheaton</div>
                        <ul>
                            <li>Serves unincorporated Montgomery County addresses with Laurel mailing addresses</li>
                            <li>Covers West Laurel, Montpelier, and unincorporated MoCo areas north and west of city limits</li>
                            <li>MoCo zoning — R-200, R-90, or other MoCo residential districts depending on parcel</li>
                            <li>MoCo DPS structural plan review required for addition and ADU permits</li>
                            <li>Same permit office serving Wheaton, Silver Spring, and most of unincorporated MoCo</li>
                        </ul>
                    </div>
                    <div className="juris-card pg">
                        <h3>🏛️ PG County DPS</h3>
                        <div className="juris-tag">PG County Permit Office</div>
                        <ul>
                            <li>Serves unincorporated Prince George's County addresses with Laurel mailing addresses</li>
                            <li>Covers Laurel Lakes, Russett, and unincorporated PG areas south and east of city limits</li>
                            <li>PG County zoning governs setback, lot coverage, and ADU rules for these parcels</li>
                            <li>PG County DPS inspection process separate from City and MoCo processes</li>
                            <li>Distinct from both City of Laurel and MoCo DPS in review timeline and requirements</li>
                        </ul>
                    </div>
                </div>

                <div className="tip">
                    📋 <strong>Why parcel-level confirmation is the only reliable method in Laurel:</strong> The City of Laurel, Montgomery County, and Prince George's County boundaries do not follow street lines in Laurel. Adjacent houses on the same block can be in different jurisdictions. The mailing address, ZIP code, and even the neighborhood name do not reliably indicate which permit authority governs a property. DMV-GC Group confirms the correct jurisdiction for every Laurel project by parcel address lookup at the free consultation — before any permit-required scope begins, before any design is presented, and before any timeline is quoted. A contractor who assumes jurisdiction without confirming will file with the wrong authority — receiving a rejection and losing 4–8 weeks of permit timeline on a project where that delay costs construction season.
                </div>

                <h2>Laurel's Housing Stock — What Design-Build Delivers for 1960s–1980s Colonials and Split-Levels</h2>

                <div className="highlight">
                    <p>🏘️ <strong>Laurel's postwar housing opportunity:</strong> Laurel's established neighborhoods — Laurel Lakes, West Laurel, Montpelier, Russett, and the historic city core — contain predominantly 1960s–1980s colonials, split-levels, and cape cods that represent one of the strongest design-build renovation opportunities in the Maryland suburbs. These homes were built at a construction quality that holds up well after 40–60 years, but with floor plans and finish levels that are firmly dated. Compartmentalized main floors that do not connect kitchen to living areas. Builder bathrooms with original 5×8 layouts. Unfinished or partially finished basements. 100-amp panels in the oldest homes. The design-build opportunity is a comprehensive upgrade: open the floor plan, gut the kitchen and bathrooms, finish the basement, add an ADU or rear addition — all under one contract, one team, and one permit filing with whichever of the three Laurel jurisdictions governs the specific parcel.</p>
                </div>

                <h2>Our In-House Design-Build Team for Laurel Projects</h2>

                <div className="team-grid">
                    <div className="team-card"><div className="t-icon">📐</div><strong>Architects</strong><span>Laurel colonial & split-level addition design, open-concept layouts, permit-ready drawings</span></div>
                    <div className="team-card"><div className="t-icon">🧱</div><strong>Structural Engineers</strong><span>Load-bearing wall assessment, addition foundations, beam sizing for Laurel's postwar homes</span></div>
                    <div className="team-card"><div className="t-icon">📋</div><strong>Permit Specialists</strong><span>City of Laurel · MoCo DPS · PG County DPS — confirmed by parcel, filed correctly every time</span></div>
                    <div className="team-card"><div className="t-icon">⚡</div><strong>Licensed Electricians</strong><span>100A→200A panel upgrades, circuits, recessed lighting for Laurel renovations</span></div>
                    <div className="team-card"><div className="t-icon">🔧</div><strong>Licensed Plumbers</strong><span>Kitchen & bath rough-in, galvanized supply replacement where needed</span></div>
                    <div className="team-card"><div className="t-icon">🌡️</div><strong>HVAC Technicians</strong><span>Zone additions for Laurel rear additions and basement finishes</span></div>
                </div>

                <div className="author-box">
                    <div className="author-avatar">🏗️</div>
                    <div className="author-info">
                        <h4>About DMV-GC Group — Laurel's Design-Build Contractor</h4>
                        <p>DMV General Contracting Group holds Maryland MHIC license #156178 — valid for design-build work in Laurel across all three permit jurisdictions: City of Laurel, unincorporated Montgomery County, and unincorporated Prince George's County. We have completed kitchen remodels, open-concept conversions, rear additions, ADU constructions, bathroom renovations, and whole-home renovations throughout Laurel's established neighborhoods. We confirm jurisdiction by parcel at the consultation and file with the correct authority — City of Laurel at 8103 Sandy Spring Road, MoCo DPS at 2425 Reedie Drive, or PG County DPS — before any permit-required scope begins. One firm, one contract, all three Laurel jurisdictions served correctly.</p>
                        <div className="author-creds">
                            <span className="cred">MHIC #156178</span>
                            <span className="cred">City of Laurel — 8103 Sandy Spring Rd</span>
                            <span className="cred">MoCo DPS & PG County DPS</span>
                            <span className="cred">In-House Architects & Engineers</span>
                            <span className="cred">4.9★ Rated</span>
                            <span className="cred">1-Year Warranty</span>
                        </div>
                    </div>
                </div>

                <h2>Design-Build Services We Offer in Laurel, MD</h2>

                <div className="service-grid">
                    <div className="service-card">
                        <div className="s-icon">📐</div>
                        <h3>Open-Concept Conversion</h3>
                        <p>Load-bearing wall removal and open floor plan creation — Laurel's most requested single design-build scope. The compartmentalized main floors of Laurel's 1960s–1980s colonials and split-levels — formal living room, separate dining room, isolated kitchen — do not match how families live in these homes today. Our structural engineers assess every planned conversion wall before design is finalized, specify the correct LVL or steel beam, and file the structural permit with the confirmed correct authority. The open main floor that results adds more perceived livability per dollar than any other Laurel renovation scope. Permit filed with whichever jurisdiction governs your specific Laurel parcel.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏠</div>
                        <h3>Home Additions</h3>
                        <p>Rear additions, side additions, and second-story additions for Laurel's colonials and split-levels — designed in-house and permitted through the correct jurisdiction (City of Laurel, MoCo DPS, or PG County DPS) confirmed by parcel at the consultation. Laurel's typical lot sizes (6,000–9,500 sq ft) provide meaningful addition potential within the applicable zoning's setback and lot coverage requirements. Our architects assess your parcel's specific parameters before any design investment is made — no addition designed that cannot be permitted on your specific lot under your specific jurisdiction's zoning rules.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏗️</div>
                        <h3>ADU Construction</h3>
                        <p>Detached ADUs, garage conversions, and lower-level ADU conversions for Laurel lots that qualify under applicable zoning. ADU eligibility in Laurel depends on which jurisdiction governs your parcel — City of Laurel, MoCo, and PG County each have different ADU rules implementing Maryland's 2021 ADU reforms. Our architects confirm ADU eligibility under the specific rules that apply to your parcel, design units appropriate for Laurel's residential character, and manage the complete permit process with the correct authority. Laurel ADUs near the MARC Penn Line station corridor achieve strong rental income — one-bedroom units typically $1,500–$2,000/month.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🍳</div>
                        <h3>Kitchen Remodeling</h3>
                        <p>Full design-build kitchen renovations for Laurel's 1960s–1980s colonials and split-levels — layout redesign, custom cabinetry, island or peninsula where the floor plan permits, and all trades (electrical panel upgrade where 100A panels are present, plumbing rough-in reconfiguration, HVAC adjustment) coordinated in-house. Our architects identify opportunities to expand Laurel's undersized builder kitchens into adjacent dining space where open-concept conversion is also part of the scope — combining kitchen renovation and structural wall removal under a single permit filing with the correct jurisdiction.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🛁</div>
                        <h3>Bathroom Renovation</h3>
                        <p>Primary bath, guest bath, and powder room renovations for Laurel's postwar colonials and split-levels. Original 5×8 bathroom layouts from 1965–1985 are prime candidates for layout expansion — our architects identify adjacent closet or hallway space that can be absorbed to create primary baths appropriate for a renovated Laurel home. All plumbing rough-in reconfiguration handled by in-house plumbers. Galvanized supply replacement within scope where plumbing walls are open. Permit filed with the correct Laurel jurisdiction — City, MoCo, or PG County as applicable.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🪜</div>
                        <h3>Basement Finishing</h3>
                        <p>Complete basement design and finishing for Laurel's colonials and split-levels with unfinished lower levels. Laurel's 1960s–1980s homes frequently have large unfinished basements — 800–1,200 sq ft of below-grade space — that add significant livable area when properly finished. Egress compliance, electrical and plumbing for lower-level bathroom addition, LVP flooring (always below grade — hardwood is never correct on concrete slab), and all finishes under the applicable jurisdiction's permit. A finished Laurel basement adds $35,000–$65,000 to appraised value on a $28,000–$70,000 construction investment — consistently positive ROI in Laurel's active resale market.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏡</div>
                        <h3>Whole-Home Renovation</h3>
                        <p>Complete interior transformations of Laurel's 1960s–1980s colonials and split-levels — open-concept structural work, kitchen gut, bathroom renovation, basement finishing, flooring, and all finishes under one contract. For Laurel homeowners who purchased a home in original or dated condition intending to renovate fully, the design-build model converts a multi-contractor, multi-permit, multi-schedule project into a single streamlined engagement managed by one project manager with one permit filing at the correct Laurel authority. Old-home conditions — 100A panels, older plumbing — assessed at consultation and incorporated into scope before signing.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">⚡</div>
                        <h3>Electrical Panel Upgrade</h3>
                        <p>Laurel's 1960s–1970s homes frequently have 100-amp electrical service that cannot support modern kitchen appliances, EV chargers, or HVAC systems without panel upgrade. In-house licensed electricians upgrade to 200-amp service when renovation opens walls — at a fraction of the cost of opening those walls a second time for a standalone electrician to complete the same work. Panel upgrade absorbed into kitchen renovation scope whenever both are planned — the most cost-efficient sequencing DMV-GC Group's integrated team delivers routinely.</p>
                    </div>
                </div>

                <h2>Design-Build Process for Laurel Homes</h2>

                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free Consultation — Jurisdiction Confirmed First, Then Home Assessment</h3>
                            <p>We visit your Laurel home with our architect and project manager. First: confirm which of the three permit jurisdictions governs your specific parcel — City of Laurel (8103 Sandy Spring Road), MoCo DPS (2425 Reedie Drive, Wheaton), or PG County DPS — by parcel address lookup. Second: walk the home — assess electrical panel capacity, plumbing age, load-bearing walls in planned conversion areas, and for addition/ADU projects, assess the lot's zoning parameters under the applicable jurisdiction. All of this happens before any design is discussed — so the design we present is designed for your specific home, your specific lot, and your specific permit authority. No cost, no obligation.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Concept Design — Jurisdiction-Accurate and Budget-Anchored</h3>
                            <p>Our architects develop concept designs based on the consultation findings — including the zoning parameters of the confirmed jurisdiction. Addition setbacks, lot coverage limits, and ADU rules differ between City, MoCo, and PG County — the concept we present is designed within the correct rules for your parcel. Construction team prices concepts in real time. You see options that are zoning-compliant, structurally feasible, and priced accurately — not a design that needs to be revised when the permit review identifies a zoning non-compliance.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Design Development & Material Selection</h3>
                            <p>Detailed drawings, 3D renderings, and material selections. For Laurel's 1960s–1980s homes, material packages calibrated to the renovated colonial aesthetic — wide-plank LVP or hardwood above grade, Shaker cabinetry, quartz counters, large-format tile in bathrooms. Old-home conditions identified at consultation — panel upgrade need, older plumbing — documented in construction drawings and included in the contract scope before signing.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Permit Filing — Correct Jurisdiction, First Time</h3>
                            <p>Complete permit packages filed with the confirmed correct authority — City of Laurel at 8103 Sandy Spring Road, MoCo DPS at 2425 Reedie Drive, or PG County DPS — including all structural engineering drawings, MEP documentation, and supporting materials. Each jurisdiction's review process, timeline, and supplemental request patterns managed in-house. Homeowners never contact any Laurel permit office during their project. We are the single point of contact with whichever authority governs your parcel — from initial filing through permit close.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Construction — All Trades In-House</h3>
                            <p>Demolition, structural framing (including beam installation for open-concept and addition scopes), electrical (panel upgrade where needed, circuits, lighting), plumbing (rough-in reconfiguration, galvanized replacement where scoped, fixture installation), HVAC zone extension for additions and basements, drywall, tile, cabinetry, flooring (hardwood above grade, LVP below grade and in kitchens), and all finishes. One project manager. One schedule. Weekly updates to you throughout construction.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Inspections, Punch List & Permit Close</h3>
                            <p>All required inspections scheduled and managed through the correct permit authority — City of Laurel, MoCo DPS, or PG County DPS, as applicable. Detailed punch list review upon completion. Permit closed with the correct jurisdiction. Written warranty documentation. Your Laurel renovation is fully inspected, fully compliant, and delivering the equity and livability value that justified the investment.</p>
                        </div>
                    </div>
                </div>

                <h2>Design-Build Project Costs in Laurel, MD</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr><th>Project Type</th><th>Typical Design-Build Cost in Laurel</th><th>Permit Jurisdiction Note</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Open-Concept Conversion (load-bearing)</td><td>$15,000 – $48,000+</td><td>City · MoCo · PG County — confirmed by parcel</td></tr>
                                <tr><td>Kitchen Remodel</td><td>$30,000 – $95,000+</td><td>Panel upgrade absorbed if walls open</td></tr>
                                <tr><td>Bathroom Renovation (primary)</td><td>$20,000 – $65,000+</td><td>Layout expansion option assessed at consultation</td></tr>
                                <tr><td>Basement Finishing</td><td>$28,000 – $90,000+</td><td>LVP only below grade — always</td></tr>
                                <tr><td>Rear or Side Addition</td><td>$90,000 – $270,000+</td><td>Zoning parameters per confirmed jurisdiction</td></tr>
                                <tr><td>ADU Construction</td><td>$65,000 – $220,000+</td><td>Eligibility confirmed under applicable jurisdiction rules</td></tr>
                                <tr><td>Whole-Home Renovation</td><td>$115,000 – $380,000+</td><td>One permit filing with correct Laurel authority</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Laurel's MARC Penn Line ADU advantage:</strong> Laurel is served by the MARC Penn Line at Laurel station — one of the strongest commuter rail connections in the Maryland suburbs, providing direct service to Union Station in Washington DC. This rail access drives consistent rental demand for Laurel ADUs from commuters who want suburban space with DC-accessible transit. One-bedroom ADUs near the Laurel MARC station corridor typically achieve $1,500–$2,000/month — on a construction investment of $65,000–$130,000, representing a 14–22% annual gross return. Our architects confirm ADU eligibility under whichever of the three Laurel jurisdictions governs your parcel and design units that command the top of the local rental range.
                </div>

                <h2>What Laurel Homeowners Say About DMV-GC Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We did an open-concept conversion in our 1972 West Laurel colonial. DMV-GC Group confirmed our address is Montgomery County DPS jurisdiction — not City of Laurel — and filed at 2425 Reedie Drive in Wheaton. A previous contractor had assumed we were City of Laurel and quoted us a City permit timeline. DMV-GC Group's structural engineer identified the load-bearing wall in the kitchen-dining conversion before any design was drawn. MoCo permit approved in four weeks. The main floor feels completely different now."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">West Laurel, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We added a rear family room to our Laurel Lakes colonial — PG County DPS jurisdiction, which DMV-GC Group confirmed at the first visit. They filed with PG County, not the City of Laurel, and the permit was approved in six weeks. The structural engineer assessed the existing rear wall and designed the addition on a proper foundation. Two other contractors we spoke with didn't know Laurel Lakes was PG County — they both assumed City of Laurel. That assumption would have cost us weeks of delay."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Laurel Lakes, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We renovated our City of Laurel colonial — kitchen gut, primary bathroom expansion, and lower-level finish. DMV-GC Group filed a single City of Laurel permit at 8103 Sandy Spring Road covering all three scopes. One permit. One inspection process. One project manager for all three. The kitchen and bathroom were done in ten weeks; the lower level finished the following month. The panel upgrade happened during the kitchen renovation when the walls were already open — saved us thousands compared to doing it separately."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">City of Laurel, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We converted our Montpelier attached garage into a one-bedroom ADU — MoCo DPS jurisdiction, filed at Reedie Drive. DMV-GC Group confirmed MoCo ADU rules applied, designed a unit with a separate entrance and full kitchen, and built the ADU in four months. We're three miles from the Laurel MARC station and rent it for $1,800/month. The permit was filed correctly on first submission — the project manager said MoCo DPS is their regular permit office. It showed in how smoothly the review went."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Montpelier, MD</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Laurel homeowners across all three jurisdictions trust DMV-GC Group for design-build projects that confirm the correct permit authority — City of Laurel, MoCo DPS, or PG County DPS — by parcel before any filing, apply structural engineering to open-concept and addition scope before demolition begins, and deliver renovations on budget and on schedule regardless of which of Laurel's three permit landscapes governs the project.</p>
                </div>

                <div className="cta-banner">
                    <h2>Start Your Design-Build Project in Laurel</h2>
                    <p>Our architect and project manager will visit your Laurel home, confirm which of the three permit jurisdictions governs your parcel, assess renovation and addition potential, and explain exactly what is possible — at no cost, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Design Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All Laurel, MD Neighborhoods for Design-Build</h2>
                <div className="areas-grid">
                    <span className="area-pill">West Laurel</span>
                    <span className="area-pill">Montpelier</span>
                    <span className="area-pill">Laurel Lakes</span>
                    <span className="area-pill">Russett</span>
                    <span className="area-pill">City of Laurel</span>
                    <span className="area-pill">Historic Laurel</span>
                    <span className="area-pill">Laurel Town Center</span>
                    <span className="area-pill">Bond Mill</span>
                    <span className="area-pill">South Laurel</span>
                    <span className="area-pill">Laurel Park</span>
                </div>

                <div className="nearby-box">
                    <h3>Also serving Silver Spring and Wheaton, MD — MoCo communities sharing the same MoCo DPS permit office</h3>
                    <p>West Laurel and Montpelier share MoCo DPS jurisdiction with Silver Spring and Wheaton — the same permit office at 2425 Reedie Drive, Wheaton. DMV-GC Group serves the full MoCo DPS corridor from Silver Spring north through Wheaton and east to West Laurel under the same in-house permit expertise. <Link href="/service/design-build/silver-spring-md">View our Silver Spring design-build page →</Link></p>
                </div>

                <h2>Frequently Asked Questions — Design-Build in Laurel, MD</h2>
                <Accordion className="faq-list" defaultActiveKey="0">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="internal-links">
                    <h2>Explore Our Other Services in Laurel, MD</h2>
                    <ul>
                        <li><Link href="/service/kitchen-remodeling/laurel-md">Kitchen Remodeling in Laurel, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling/laurel-md">Bathroom Remodeling in Laurel, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/laurel-md">Basement Remodeling in Laurel, MD</Link></li>
                        <li><Link href="/service/adu/laurel-md">ADU Construction in Laurel, MD</Link></li>
                        <li><Link href="/service/decks/laurel-md">Deck Building in Laurel, MD</Link></li>
                        <li><Link href="/service/flooring-remodeling/laurel-md">Flooring Installation in Laurel, MD</Link></li>
                        <li><Link href="/service/home-additions">Home Additions in Laurel, MD</Link></li>
                    </ul>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Work with a True Design-Build Contractor in Laurel?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free consultation. We confirm your permit jurisdiction — City of Laurel, MoCo DPS, or PG County DPS — before filing anything. We design within the correct zoning rules. And we build under one contract, one team, full accountability across all three Laurel permit landscapes.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Design-Build Consultation in Laurel →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default LaurelMD;