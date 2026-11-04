'use client';

import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "./style.scss";
import "../design-build-city-style.scss";

const ChevyChaseMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "How many permit jurisdictions does Chevy Chase have, and which one governs my property?",
            answer: "Chevy Chase has six permit jurisdictions: the Village of Chevy Chase, Chevy Chase Section 3, Chevy Chase Section 5, the Village of Somerset, the Village of Friendship Heights, and unincorporated Montgomery County (MoCo DPS). Every incorporated village has its own permit office independent of MoCo DPS. The correct jurisdiction for your property cannot be reliably determined from the street address or ZIP code alone — neighboring houses on the same street can be in different jurisdictions. DMV-GC Group determines the correct permit authority for every Chevy Chase project by parcel address lookup at the free consultation, before any permit-required scope begins."
        },
        {
            question: "Does DMV-GC Group preserve original hardwood floors in Chevy Chase renovations?",
            answer: "Preservation is always our default. Chevy Chase's original old-growth heart pine, Douglas fir, and wide-plank white oak floors — species that are no longer available in the densities present in pre-1950 homes — are assessed for remaining sanding cycles, board stability, and finish condition at the consultation. In most cases, refinishing to natural or period-appropriate finish restores the original floors to better-than-new condition. Replacement is recommended only when damage, moisture, or structural modification makes refinishing impossible. When replacement is required in a specific area, we source period-compatible species and profiles to maintain visual continuity with the preserved original sections throughout the home."
        },
        {
            question: "How much does a design-build renovation cost in Chevy Chase, MD?",
            answer: "Chevy Chase design-build costs reflect the estate-level quality and historic construction complexity these homes present. Kitchen remodels run $55,000–$175,000+. Primary bathroom expansions run $45,000–$130,000+. Open-concept conversions run $25,000–$70,000+. Rear or second-story additions range from $200,000–$700,000+. ADU or carriage house construction runs $100,000–$350,000+. Whole-home renovations range from $250,000–$900,000+. All costs include architectural design, structural engineering, historic detail preservation planning, and permit filing with the correct village jurisdiction. No separate architect billing rate."
        },
        {
            question: "Is DMV-GC Group licensed for design-build in Chevy Chase, MD?",
            answer: "Yes. DMV General Contracting Group holds Maryland MHIC license #156178 — required for all home improvement and construction work in Chevy Chase across all six permit jurisdictions. Fully bonded, comprehensive general liability and workers' compensation coverage, and a 1-year workmanship warranty on every Chevy Chase design-build project."
        }
    ];

    return (
        <div className="design-build-city-detail-page design-build-chevy-chase-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/design-build">Design-Build</Link><span>›</span>
                    Chevy Chase, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Chevy Chase, MD</div>
                    <h1>Design-Build Contractor in Chevy Chase, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏛️ In-House Architects & Engineers</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ All 6 Chevy Chase Permit Jurisdictions</span>
                        <span className="badge">✓ Estate-Level Historic Home Expertise</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">🏛️</div>
                    <div>
                        <h3>Chevy Chase Has Six Separate Permit Jurisdictions — More Than Any Other Community in Montgomery County — and Every One of Them Is Different from MoCo DPS in Wheaton</h3>
                        <p>The community known as "Chevy Chase, Maryland" is not a single municipality. It is a collection of five incorporated villages — the Village of Chevy Chase, Chevy Chase Section 3, Chevy Chase Section 5, the Village of Somerset, and the Village of Friendship Heights — each with its own municipal government and its own building permit office, plus a surrounding area of unincorporated Montgomery County served by MoCo DPS in Wheaton. Six permit authorities govern a community that most people address with a single ZIP code and a single name. A contractor who assumes that Chevy Chase means "file with MoCo DPS" is wrong for every incorporated village — and a contractor who knows one village's permit process but not another's will get the boundary-area addresses wrong. Beyond the permit complexity: Chevy Chase's 1920s–1950s colonials, tudors, and cape cods are among the most architecturally significant residential homes in Maryland — estates with original old-growth hardwood floors, hand-crafted millwork, and historic details that require architects who understand what to preserve and what to upgrade. DMV General Contracting Group knows all six Chevy Chase permit jurisdictions, confirms the correct one for every project, and designs additions and renovations worthy of the homes — and the community — they are built for.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a trusted <strong>design-build contractor in Chevy Chase, MD</strong>? DMV General Contracting Group brings licensed architects, structural engineers, permit specialists, and all licensed trades in-house — covering all six Chevy Chase permit jurisdictions under one MHIC license. Estate-scale rear additions and second-story additions for Chevy Chase's 1920s–1950s colonials and tudors. ADU construction designed to complement Chevy Chase's architectural character. Whole-home renovations that preserve original old-growth hardwood and historic millwork while delivering modern function. Open-concept conversions with structural engineering completed before demolition begins. One firm. One contract. Full accountability for Chevy Chase's most discerning homeowners.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">📋</div><strong>All 6 Jurisdictions</strong><span>Every Chevy Chase village + unincorporated MoCo — all filed correctly</span></div>
                    <div className="trust-item"><div className="icon">🏛️</div><strong>Estate-Level Design</strong><span>Additions & renovations worthy of Chevy Chase's historic homes</span></div>
                    <div className="trust-item"><div className="icon">🌳</div><strong>Old-Growth Hardwood</strong><span>Original heart pine & Douglas fir floors — preserved, not replaced</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>Chevy Chase's Six Permit Jurisdictions — The Most Complex Permit Landscape in Montgomery County</h2>
                <p>No other community in the DMV region presents a more complex permit landscape than Chevy Chase. Understanding which jurisdiction governs your property is the first thing DMV-GC Group does for every Chevy Chase project — before any design work begins:</p>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="juris-table">
                            <thead>
                                <tr><th>Jurisdiction</th><th>Type</th><th>Notable Neighborhoods / Streets</th><th>How We Confirm</th></tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Village of Chevy Chase</strong></td>
                                    <td>Incorporated village — own permit office</td>
                                    <td>Chevy Chase Circle area, Manor Road, Grafton Street, East/West of Connecticut Ave north of the DC line</td>
                                    <td className="confirm">✓ Parcel address lookup at consultation</td>
                                </tr>
                                <tr>
                                    <td><strong>Chevy Chase Section 3</strong></td>
                                    <td>Incorporated village — own permit office</td>
                                    <td>Drummond Avenue, Leland Street, Willard Avenue corridors</td>
                                    <td className="confirm">✓ Parcel address lookup at consultation</td>
                                </tr>
                                <tr>
                                    <td><strong>Chevy Chase Section 5</strong></td>
                                    <td>Incorporated village — own permit office</td>
                                    <td>McKinley Street, Oliver Street, Patterson Street area</td>
                                    <td className="confirm">✓ Parcel address lookup at consultation</td>
                                </tr>
                                <tr>
                                    <td><strong>Village of Somerset</strong></td>
                                    <td>Incorporated village — own permit office</td>
                                    <td>Somerset area along Wisconsin Avenue corridor north of DC</td>
                                    <td className="confirm">✓ Parcel address lookup at consultation</td>
                                </tr>
                                <tr>
                                    <td><strong>Village of Friendship Heights</strong></td>
                                    <td>Incorporated village — own permit office</td>
                                    <td>Friendship Heights area near Wisconsin Ave / Western Ave</td>
                                    <td className="confirm">✓ Parcel address lookup at consultation</td>
                                </tr>
                                <tr>
                                    <td><strong>Unincorporated MoCo</strong></td>
                                    <td>MoCo DPS — 2425 Reedie Drive, Wheaton</td>
                                    <td>Chevy Chase addresses outside all five village limits</td>
                                    <td className="confirm">✓ Parcel address lookup at consultation</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    📋 <strong>Why parcel-level confirmation is mandatory in Chevy Chase:</strong> The five incorporated villages are geographically interspersed — neighboring houses on the same street can be in different jurisdictions. The street address and ZIP code do not reliably indicate which village, if any, governs a property. The only reliable confirmation is a parcel-level address lookup against the specific village and county boundaries. DMV-GC Group performs this confirmation for every Chevy Chase project before any permit-required scope begins — preventing the rejection, resubmission, and 4–8 week timeline penalty that occurs when a contractor assumes the wrong jurisdiction.
                </div>

                <h2>Chevy Chase's Historic Homes — What Design-Build Must Preserve and What It Modernizes</h2>

                <div className="highlight">
                    <p>🏠 <strong>The Chevy Chase estate renovation philosophy:</strong> Chevy Chase's 1920s–1950s colonials, tudors, and cape cods contain original details that are genuinely irreplaceable — old-growth heart pine and Douglas fir hardwood floors denser and more stable than anything available today; hand-crafted door and window millwork profiles that mass production cannot replicate; plaster walls with a finish quality that modern drywall does not match. The renovation philosophy that DMV-GC Group brings to Chevy Chase projects starts with identification and preservation of these details, then layers in the modern function — open kitchen-to-family-room connection, primary bath expansion, HVAC modernization, electrical upgrade — that the home's bones can support. Additions designed to complement the original architecture. Interiors that honor the home's character while delivering what a 2020s family needs. Chevy Chase homeowners invest significantly in these homes; their design-build projects deserve architects who understand what makes the investment worth protecting.</p>
                </div>

                <h2>Our In-House Design-Build Team for Chevy Chase Projects</h2>

                <div className="team-grid">
                    <div className="team-card"><div className="t-icon">📐</div><strong>Architects</strong><span>Estate-scale addition design, historic character preservation, period-appropriate exterior additions</span></div>
                    <div className="team-card"><div className="t-icon">🧱</div><strong>Structural Engineers</strong><span>Foundation assessment, load-bearing walls, beam sizing for large-span additions in historic homes</span></div>
                    <div className="team-card"><div className="t-icon">📋</div><strong>Permit Specialists</strong><span>All 6 Chevy Chase jurisdictions — correct village or MoCo DPS confirmed and filed every time</span></div>
                    <div className="team-card"><div className="t-icon">⚡</div><strong>Licensed Electricians</strong><span>Panel upgrades from 100A to 200A+, knob-and-tube assessment, EV charger installation</span></div>
                    <div className="team-card"><div className="t-icon">🔧</div><strong>Licensed Plumbers</strong><span>Galvanized supply replacement, kitchen & bath rough-in, gas lines for Chevy Chase historic homes</span></div>
                    <div className="team-card"><div className="t-icon">🌳</div><strong>Hardwood Specialists</strong><span>Old-growth heart pine & Douglas fir assessment, refinishing, period-compatible new installation</span></div>
                </div>

                <div className="author-box">
                    <div className="author-avatar">🏗️</div>
                    <div className="author-info">
                        <h4>About DMV-GC Group — Chevy Chase's Design-Build Contractor</h4>
                        <p>DMV General Contracting Group holds Maryland MHIC license #156178 and operates from North Bethesda — immediately adjacent to Chevy Chase on the I-495 corridor. We have completed kitchen remodels, primary bathroom expansions, rear and second-story additions, ADU constructions, and whole-home renovations throughout Chevy Chase's five incorporated villages and unincorporated county areas. We confirm permit jurisdiction by parcel at the consultation — not by assumption — and file with the correct authority every time. Our architects understand Chevy Chase's architectural vocabulary, and our construction crews treat original old-growth hardwood, historic millwork, and plaster walls with the care these details deserve.</p>
                        <div className="author-creds">
                            <span className="cred">MHIC #156178</span>
                            <span className="cred">All 6 Chevy Chase Jurisdictions</span>
                            <span className="cred">In-House Architects & Engineers</span>
                            <span className="cred">Historic Home Specialists</span>
                            <span className="cred">4.9★ Rated</span>
                            <span className="cred">1-Year Warranty</span>
                        </div>
                    </div>
                </div>

                <h2>Design-Build Services We Offer in Chevy Chase, MD</h2>

                <div className="service-grid">
                    <div className="service-card">
                        <div className="s-icon">🏠</div>
                        <h3>Home Additions</h3>
                        <p>Rear additions, side additions, and second-story additions for Chevy Chase's historic colonials, tudors, and cape cods — at the estate scale these homes and lots support. Chevy Chase's typical lot sizes (8,000–20,000+ sq ft) provide substantial addition potential within the applicable village or county zoning setback and lot coverage requirements. Our architects design additions that are indistinguishable in character from the original home — matched roofline profiles, period-appropriate windows and cladding, exterior materials that read as part of the original construction. Every addition project begins with the correct village permit office confirmed and the structural engineering assessment completed before concept design is presented.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🍳</div>
                        <h3>Kitchen Remodeling</h3>
                        <p>Full design-build kitchen renovations for Chevy Chase's historic homes — at a quality level the homes deserve. Original galley kitchens in 1930s colonials redesigned into open kitchen-family room connections; butler's pantry spaces incorporated into expanded kitchen footprints; custom cabinetry, quartzite or marble countertops, and professional-grade appliances specified by our architects and installed by our in-house trades. Knob-and-tube wiring and galvanized supply assessed at consultation and addressed in scope — not discovered mid-construction. All trades in-house. Village or MoCo permit as confirmed by parcel.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🛁</div>
                        <h3>Bathroom Renovation</h3>
                        <p>Primary suite bathroom expansions, guest bath renovations, and powder room redesigns for Chevy Chase's estate homes — at the finish level these homes merit. Chevy Chase primary baths in 1930s–1950s colonials are frequently under-scaled relative to the home's overall size — our architects identify expansion into adjacent dressing rooms, closet space, or hallway areas, designing primary bathroom suites that match the scale and character of Chevy Chase's finest homes. Heated tile floors, freestanding soaking tubs, frameless glass, custom vanity millwork. All plumbing in-house; galvanized supply replaced when walls are open.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">📐</div>
                        <h3>Open-Concept Conversion</h3>
                        <p>Load-bearing wall removal and open floor plan creation for Chevy Chase's formal colonial layouts — done with the structural engineering and historic sensitivity these homes require. Chevy Chase's 1920s–1940s colonials were designed with formal room separation that does not suit modern family life — but removing walls in homes with 100-year-old structural conditions requires engineering that confirms load-bearing status, specifies the correct beam for the span, and designs the structural solution to minimize ceiling disruption in rooms with original plaster and period millwork. Our structural engineers walk Chevy Chase homes and assess every condition before any design is finalized. Permits filed with the correct village office.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏗️</div>
                        <h3>ADU Construction</h3>
                        <p>Detached ADUs, carriage house conversions, and lower-level ADU units for Chevy Chase's larger lots — designed with the architectural sensitivity Chevy Chase's historic character demands. ADUs in Chevy Chase require design that complements the primary home's period vocabulary — carriage-house scaled structures with compatible materials, rooflines, and window proportions that belong in a Chevy Chase historic neighborhood. Our architects design Chevy Chase ADUs to look like they were planned alongside the original home. Village permit coordination for exterior scope on incorporated village properties.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🌳</div>
                        <h3>Historic Hardwood Preservation</h3>
                        <p>Assessment, repair, and refinishing of Chevy Chase's original old-growth heart pine, Douglas fir, and white oak hardwood floors — species that are no longer available in the widths and densities present in pre-1950 Chevy Chase homes. Our hardwood specialists assess remaining floor depth (sanding cycles available), board stability, and finish condition before any recommendation is made. Refinishing to natural or period-appropriate stain is always the preferred option where the floor can support it — replacement is a last resort, and when replacement is necessary, we source period-compatible species and profiles to maintain visual continuity with preserved original sections.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏡</div>
                        <h3>Whole-Home Renovation</h3>
                        <p>Complete interior transformations of Chevy Chase's 1920s–1950s historic colonials and tudors — preserving original details while systematically modernizing what the home's systems require. Coordinating architectural redesign, structural modifications, full electrical rewiring where knob-and-tube is present, galvanized supply replacement, HVAC modernization, kitchen and bathroom renovation, hardwood refinishing or selective replacement, and all finishes under one contract. The design-build model is most valuable in Chevy Chase whole-home renovations where a single project manager coordinating all in-house trades — rather than a homeowner managing separate architect, GC, electrician, plumber, and hardwood contractor — is the difference between a renovation that honors the home and one that fragments it.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">⚡</div>
                        <h3>Electrical & Systems Modernization</h3>
                        <p>Chevy Chase's pre-1940 homes frequently have original knob-and-tube wiring and 60–100-amp service that cannot support modern kitchens, HVAC systems, EV chargers, or home technology installations without full electrical upgrade. Our in-house licensed electricians assess the existing system at the consultation, include the full upgrade scope in the project contract, and execute panel replacement to 200-amp service and complete rewiring when walls are open during renovation — not as a separately priced, separately scheduled engagement that requires reopening completed walls.</p>
                    </div>
                </div>

                <h2>Design-Build Process for Chevy Chase Historic Homes</h2>

                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free Consultation — Jurisdiction Confirmed, Historic Conditions Assessed</h3>
                            <p>We visit your Chevy Chase home with our architect and project manager. First: confirm permit jurisdiction by parcel address — which of the five villages, or unincorporated MoCo. Second: walk the home with full historic sensitivity — noting original hardwood species and condition, original millwork profiles worth preserving, plaster wall condition, knob-and-tube wiring presence, galvanized plumbing where visible, load-bearing walls in planned conversion areas. For addition projects, walk the exterior and assess the lot's zoning parameters under the applicable jurisdiction. No cost, no obligation — and no assumption about jurisdiction.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Concept Design — Historic Character Central, Not An Afterthought</h3>
                            <p>Our architects develop concept designs with Chevy Chase's historic architectural vocabulary integrated from the first sketch. For additions: period-appropriate rooflines, window proportions, and exterior materials specified in the concept — not applied as a correction after the homeowner rejects a generic design. For interior renovations: original detail preservation plan established before design direction is set — which original floors are refinished, which millwork profiles are replicated in new work, which plaster walls are preserved. Budget-accurate from day one — old-home conditions assessed at consultation are priced into the concept, not discovered at bid.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Design Development & Estate-Level Material Selection</h3>
                            <p>Detailed drawings, 3D renderings, and material selections calibrated to Chevy Chase's quality expectations. Quartzite or marble countertops. Custom painted inset cabinetry. Unlacquered brass or oil-rubbed bronze hardware. Wide-plank white oak or period-compatible hardwood where new flooring is specified. Natural stone tile in primary bathrooms. Specifications that match the home's character — not builder-grade finishes dressed up with a premium price.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Permit Filing — Correct Village, First Time</h3>
                            <p>Complete permit packages filed with the confirmed correct jurisdiction — the specific Chevy Chase village permit office or MoCo DPS at 2425 Reedie Drive, as determined by parcel lookup at the consultation. Structural drawings, energy documentation, and all required supporting materials included in the initial submission. Village permit review processes managed in-house — homeowners never contact any village permit office during their project. Review responses, supplemental requests, and inspection scheduling all managed by DMV-GC Group from filing through permit close.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Construction — Historic Sensitivity Maintained Throughout</h3>
                            <p>Demolition executed with historic details protected — original hardwood floors covered and protected from construction traffic; original millwork removed and stored where it will be reinstalled; plaster walls preserved where not in scope. Structural framing, electrical (full rewiring and panel upgrade where scoped), plumbing (galvanized supply replacement, rough-in reconfiguration), HVAC modernization, drywall or plaster repair, tile, custom cabinetry, flooring (original hardwood refinished; new installation in period-compatible species where required), and all finishes. One project manager. Weekly updates.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>Village Inspections, Punch List & Permit Close</h3>
                            <p>All required inspections scheduled and managed through the correct village or county permit authority. Detailed punch list review upon completion — at Chevy Chase's finish level, the punch list review is thorough. Permit closed with the correct jurisdiction. Written warranty documentation. Your Chevy Chase historic home is fully renovated, fully permitted, and maintained in the character that makes it worth the investment.</p>
                        </div>
                    </div>
                </div>

                <h2>Design-Build Project Costs in Chevy Chase, MD</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr><th>Project Type</th><th>Typical Design-Build Cost in Chevy Chase</th><th>Design & Permits Included</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Kitchen Remodel (estate quality)</td><td>$55,000 – $175,000+</td><td>Layout, renderings, custom spec, village permit</td></tr>
                                <tr><td>Primary Bathroom Expansion</td><td>$45,000 – $130,000+</td><td>Layout expansion, custom vanity spec, village permit</td></tr>
                                <tr><td>Open-Concept Conversion (load-bearing)</td><td>$25,000 – $70,000+</td><td>Structural engineering, beam spec, village permit</td></tr>
                                <tr><td>Rear or Second-Story Addition</td><td>$200,000 – $700,000+</td><td>Historic-sensitive arch. drawings, structural eng., village permit</td></tr>
                                <tr><td>ADU / Carriage House</td><td>$100,000 – $350,000+</td><td>Period-compatible design, zoning review, village permit</td></tr>
                                <tr><td>Electrical Modernization (within scope)</td><td>$10,000 – $35,000+</td><td>Panel upgrade to 200A+, full rewiring where walls open</td></tr>
                                <tr><td>Historic Hardwood Refinishing</td><td>$4,000 – $18,000+</td><td>Depth assessment, species-compatible stain, period finish</td></tr>
                                <tr><td>Whole-Home Renovation</td><td>$250,000 – $900,000+</td><td>Comprehensive design, all old-home conditions, village permit</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Chevy Chase design-build — what the permit complexity costs when done wrong:</strong> A Chevy Chase homeowner whose contractor files with the wrong village permit office — or with MoCo DPS when a village permit is required — loses 4–8 weeks of permit timeline. On a construction season that is already compressed by weather, contractor scheduling, and material lead times, that loss can push a project from spring completion to fall. It delays the homeowner's occupancy of their newly renovated home by months. It costs money in carrying costs. And it is entirely avoidable — by confirming jurisdiction at the consultation and filing with the correct authority from day one.
                </div>

                <h2>What Chevy Chase Homeowners Say About DMV-GC Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We added a rear addition to our 1938 Chevy Chase tudor — new primary suite, expanded mudroom, and breakfast room off the kitchen. DMV-GC Group confirmed our address was Village of Chevy Chase — not MoCo DPS — and filed the permit with the Village. The architect designed the addition to match our original slate roof, stone foundation, and casement windows exactly. Every neighbor has said the addition looks like it was original to the house. It is the best money we have ever spent on this property."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Village of Chevy Chase, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our 1929 Chevy Chase Section 3 colonial had the original knob-and-tube wiring, galvanized supply pipes, and a 60-amp fused panel that was a fire hazard. DMV-GC Group did our full kitchen renovation and absorbed the complete electrical upgrade — new 200-amp panel, full rewiring of the first floor, new circuits for the kitchen appliances — into the kitchen scope, executed while the walls were already open. The electrical upgrade alone would have cost $25,000 as a standalone project requiring its own wall openings. As part of the kitchen, it added $11,000 to our contract."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Chevy Chase Section 3, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We did a whole-home renovation of our 1935 Somerset colonial — kitchen, three bathrooms, open-concept conversion on the main floor, and finished basement. DMV-GC Group filed with the Village of Somerset permit office. Their hardwood specialist refinished our original Douglas fir floors rather than replacing them — the floors are now the best feature in the house. Three other contractors we interviewed had recommended replacement. Every original detail that could be preserved was."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Village of Somerset, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We built a detached carriage house ADU behind our 1941 Chevy Chase colonial. DMV-GC Group designed the unit to look like a 1940s outbuilding — board-and-batten wood siding, divided-light windows, copper gutters matching the main house. Our Section 5 village permit was filed correctly on first submission. We rent the ADU for $2,400/month. The design quality is what makes it rent at that level — it reads as a premium accessory structure on a premium Chevy Chase property."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Chevy Chase Section 5, MD</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Chevy Chase homeowners trust DMV-GC Group for design-build projects that confirm the correct permit jurisdiction across all six Chevy Chase authorities, design additions and renovations with the historic sensitivity these homes require, preserve original old-growth hardwood and historic millwork where possible, and deliver estate-quality results worthy of Montgomery County's most architecturally significant residential community.</p>
                </div>

                <div className="cta-banner">
                    <h2>Start Your Design-Build Project in Chevy Chase</h2>
                    <p>Our architect and project manager will visit your Chevy Chase home, confirm your permit jurisdiction by parcel, assess the historic construction conditions, and design an addition or renovation worthy of one of Maryland's most distinguished residential communities.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Design Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All Chevy Chase, MD Villages and Neighborhoods</h2>
                <div className="areas-grid">
                    <span className="area-pill">Village of Chevy Chase</span>
                    <span className="area-pill">Chevy Chase Section 3</span>
                    <span className="area-pill">Chevy Chase Section 5</span>
                    <span className="area-pill">Village of Somerset</span>
                    <span className="area-pill">Village of Friendship Heights</span>
                    <span className="area-pill">Unincorporated Chevy Chase</span>
                    <span className="area-pill">Manor Road</span>
                    <span className="area-pill">Grafton Street</span>
                    <span className="area-pill">Drummond Avenue</span>
                    <span className="area-pill">Wisconsin Avenue Corridor</span>
                    <span className="area-pill">Connecticut Avenue Corridor</span>
                </div>

                <div className="nearby-box">
                    <h3>Also serving Bethesda, MD — immediately west of Chevy Chase</h3>
                    <p>Bethesda's estate-level homes share Chevy Chase's architectural vintage and quality expectations. DMV-GC Group brings the same historic-home design-build expertise and estate-level finish standards west along Bradley Boulevard, Millwood Road, and the full Bethesda residential corridor. <Link href="/service/design-build">View our full design-build service page →</Link></p>
                </div>

                <h2>Frequently Asked Questions — Design-Build in Chevy Chase, MD</h2>
                <Accordion className="faq-list" defaultActiveKey="0">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="internal-links">
                    <h2>Explore Our Other Services in Chevy Chase, MD</h2>
                    <ul>
                        <li><Link href="/service/kitchen-remodeling/chevy-chase-md">Kitchen Remodeling in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling/chevy-chase-md">Bathroom Remodeling in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/chevy-chase-md">Basement Remodeling in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/adu/chevy-chase-md">ADU Construction in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/decks/chevy-chase-md">Deck Building in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/flooring-remodeling/chevy-chase-md">Flooring Installation in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/home-additions">Home Additions in Chevy Chase, MD</Link></li>
                    </ul>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Work with a True Design-Build Contractor in Chevy Chase?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free design consultation. We confirm your permit jurisdiction across all six Chevy Chase authorities, preserve the original details that make your historic home exceptional, and deliver estate-quality additions and renovations on budget and on schedule.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Design-Build Consultation in Chevy Chase →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default ChevyChaseMD;
