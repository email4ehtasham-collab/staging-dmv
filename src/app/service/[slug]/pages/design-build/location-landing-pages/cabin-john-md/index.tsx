'use client';

import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "./style.scss";
import "../design-build-city-style.scss";

const CabinJohnMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "Why does Cabin John have higher crawlspace moisture than other MoCo communities?",
            answer: "Cabin John sits between two permanent water features — the C&O Canal to the south and Cabin John Creek to the east. The Canal maintains a consistent year-round water level, and the Creek's drainage basin keeps soil moisture elevated throughout the Cabin John area. Homes with crawlspaces experience moisture intrusion that is more persistent and more severe than comparable homes in Bethesda, Rockville, or Silver Spring — because the water table influence from the Canal and Creek is continuous, not seasonal. This makes crawlspace moisture assessment the first step in every Cabin John design-build consultation — not a secondary consideration."
        },
        {
            question: "Can I install hardwood floors in my Cabin John home?",
            answer: "Potentially, but only after the crawlspace moisture conditions are conclusively assessed and addressed. Solid hardwood over an unaddressed moisture-affected crawlspace will cup, buckle, and require replacement — typically within one to two seasons in Cabin John's conditions. The correct default specification for Cabin John homes is LVP (fully waterproof, dimensionally stable) until crawlspace encapsulation is completed and moisture levels are confirmed to be within hardwood installation tolerances. Where encapsulation is performed correctly and moisture is brought under control, engineered hardwood becomes a viable option. Solid hardwood is the highest-risk specification in Cabin John and should only be considered where moisture has been conclusively addressed."
        },
        {
            question: "Does crawlspace encapsulation need to happen before a kitchen renovation in Cabin John?",
            answer: "In most Cabin John homes with elevated crawlspace moisture — which is the majority — yes. Encapsulation before kitchen flooring installation prevents the flooring failure that occurs when moisture from below affects a new floor installed over an unaddressed crawlspace. The encapsulation scope is typically $8,000–$25,000 depending on the crawlspace size and system design. That investment protects the kitchen renovation investment above it — a kitchen that costs $45,000–$90,000 is worth protecting with the precondition scope that makes it durable. DMV-GC Group presents encapsulation recommendations based on what we find at the consultation, not as a default upsell."
        },
        {
            question: "How much does a design-build renovation cost in Cabin John, MD?",
            answer: "Design-build costs in Cabin John depend on scope. Crawlspace encapsulation runs $8,000–$25,000+. Kitchen remodels run $32,000–$98,000+. Bathroom renovations run $22,000–$70,000+. Open-concept conversions run $18,000–$55,000+. Rear additions range from $115,000–$360,000+. ADU construction runs $70,000–$250,000+. Whole-home renovations range from $130,000–$430,000+. Design, structural engineering, moisture assessment, and MoCo DPS permit processing are all included."
        },
        {
            question: "Is DMV-GC Group licensed for design-build in Cabin John, MD?",
            answer: "Yes. DMV General Contracting Group holds Maryland MHIC license #156178 — required for all home improvement and construction work in Cabin John, which is unincorporated Montgomery County served by MoCo DPS at 2425 Reedie Drive, Wheaton. Fully bonded, comprehensive general liability and workers' compensation coverage, and a 1-year workmanship warranty on every Cabin John design-build project."
        }
    ];

    return (
        <div className="design-build-city-detail-page design-build-cabin-john-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/design-build">Design-Build</Link><span>›</span>
                    Cabin John, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Cabin John, MD</div>
                    <h1>Design-Build Contractor in Cabin John, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">🌿 C&O Canal Moisture — Assessed First</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ MoCo DPS Permit Experts</span>
                        <span className="badge">✓ Historic Cottage & Colonial Expertise</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">🌿</div>
                    <div>
                        <h3>Cabin John Sits Between the C&O Canal and Cabin John Creek — and That Location Gives It the Highest Crawlspace Moisture Conditions in Montgomery County. Every Design-Build Project Here Starts With a Moisture Assessment, Not a Floor Plan</h3>
                        <p>Cabin John is one of the most distinctive and tightly-knit communities in Montgomery County — a small enclave of 1930s–1960s cottages, colonials, and Cape Cods nestled between the C&O Canal National Historical Park to the south and Cabin John Creek to the east. The same geography that makes Cabin John exceptional — mature tree canopy, creek-side proximity, canal corridor access — creates the highest sustained crawlspace moisture conditions in the county. The C&O Canal maintains a permanent water table influence throughout the Cabin John floodplain, and Cabin John Creek's drainage basin keeps soil moisture elevated year-round in ways that Bethesda, Rockville, and Silver Spring homes simply do not experience. For Cabin John homeowners planning design-build renovations, this is not a minor footnote — it is the first thing that must be assessed. Flooring specification, subfloor condition, addition foundation design, and basement waterproofing decisions all depend on the moisture conditions specific to your Cabin John property. DMV General Contracting Group walks the crawlspace at the free consultation for every Cabin John project. We assess moisture before we design anything. The floor plan comes second. The moisture reality comes first.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a trusted <strong>design-build contractor in Cabin John, MD</strong>? DMV General Contracting Group brings licensed architects, structural engineers, permit specialists, and all licensed trades in-house for Cabin John renovation and addition projects — assessing C&O Canal crawlspace moisture conditions before any design specification is made, filing with MoCo DPS at 2425 Reedie Drive for all permit-required scope, and designing additions that complement Cabin John's distinctive cottage and colonial character. Kitchen and bathroom renovations with moisture-appropriate flooring specifications. Rear additions with properly encapsulated crawlspace extensions. ADU construction designed for Cabin John's small lots and architectural vocabulary. One firm. One contract. Moisture-first, design-second — every time.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">💧</div><strong>Moisture-First Approach</strong><span>C&O Canal crawlspace assessed before any design or spec begins</span></div>
                    <div className="trust-item"><div className="icon">📐</div><strong>In-House Architects</strong><span>Cottage-scale addition design that fits Cabin John's character</span></div>
                    <div className="trust-item"><div className="icon">📋</div><strong>MoCo DPS Permits</strong><span>2425 Reedie Drive, Wheaton — all filings managed in-house</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>Cabin John's Crawlspace Moisture — The Condition That Shapes Every Design Decision</h2>

                <div className="moisture-box">
                    <h3>💧 C&O Canal & Cabin John Creek Moisture — What It Means for Design-Build</h3>
                    <ul>
                        <li><strong>Why Cabin John has the highest crawlspace moisture in MoCo:</strong> Cabin John is bounded by two permanent water features — the C&O Canal to the south and Cabin John Creek to the east. The Canal maintains a consistent water level year-round, and the Creek's drainage basin keeps the surrounding soil moisture elevated through wet and dry seasons alike. Homes with crawlspaces in the lowest-elevation parts of Cabin John experience moisture intrusion that is more persistent and more severe than any comparable community in Montgomery County. Even homes on higher ground within Cabin John are influenced by the area's elevated water table compared to the surrounding uplands.</li>
                        <li><strong>How crawlspace moisture affects flooring decisions:</strong> Solid hardwood flooring requires a moisture-stable subfloor and crawlspace environment. In Cabin John homes where crawlspace moisture is unaddressed, solid hardwood installation above the affected subfloor will cup, buckle, and fail — sometimes within one or two seasons. The correct flooring specification for Cabin John's moisture-affected areas is LVP (luxury vinyl plank), which is fully waterproof and dimensionally stable regardless of moisture conditions below. Where crawlspace encapsulation is performed correctly and moisture is brought under control, engineered hardwood becomes viable. Solid hardwood is the highest-risk flooring specification in Cabin John and should only be installed where moisture has been conclusively addressed — not assumed to be manageable.</li>
                        <li><strong>How crawlspace moisture affects subfloor condition assessment:</strong> Cabin John homes that have had unaddressed crawlspace moisture for years or decades frequently have subfloor damage — soft spots, delaminated plywood, rotted joists — that must be assessed and repaired before any renovation work above the subfloor begins. Laying new flooring, cabinetry, or tile over a compromised subfloor produces failures that surface months after the renovation is complete. DMV-GC Group's in-house structural team assesses subfloor and joist condition during the crawlspace walk at the free consultation.</li>
                        <li><strong>How crawlspace moisture affects addition foundation design:</strong> Rear additions on Cabin John homes with crawlspace foundations require particular attention to the new foundation's moisture management. An addition built on a standard crawlspace adjacent to an existing moisture-affected crawlspace will introduce the same moisture conditions into the new space. DMV-GC Group's structural engineers design addition foundations with encapsulated crawlspaces or concrete slab-on-grade where moisture conditions warrant — preventing the new addition from inheriting the same moisture problems that may already exist in the original home.</li>
                        <li><strong>Crawlspace encapsulation as part of the renovation scope:</strong> In many Cabin John design-build projects, crawlspace encapsulation — a complete vapor barrier system covering the crawlspace floor and walls, with a dehumidification system maintaining interior relative humidity — is the first line of the project scope, executed before any finish work begins above. Encapsulation addresses the root cause rather than the symptoms, making subsequent flooring, cabinetry, and finish work far more durable. DMV-GC Group includes crawlspace encapsulation assessment in every Cabin John consultation and incorporates it into the project scope where conditions warrant.</li>
                    </ul>
                </div>

                <h2>Cabin John's Homes — Construction Conditions Beyond Moisture</h2>

                <div className="highlight">
                    <p>🏠 <strong>What Cabin John's 1930s–1960s cottages and colonials present for design-build:</strong> Beyond the moisture conditions that are unique to Cabin John's geography, the community's older construction presents the same old-home conditions that affect all pre-1960 Montgomery County housing: knob-and-tube wiring in homes built before 1940 (assessed and replaced when renovation opens walls); galvanized supply plumbing in pre-1950 construction (replaced within kitchen and bathroom renovation scope when walls are open); diagonal plank subfloors in oldest homes (uncoupling membrane mandatory under any tile installation, and compatibility with hardwood assessed carefully in light of moisture conditions); and load-bearing walls at locations that require structural engineering assessment before any open-concept conversion begins. All of these conditions are assessed in-house before any design is presented — the same team that walks the crawlspace also walks the home.</p>
                </div>

                <h2>What Is Design-Build — And Why It Matters for Cabin John Homeowners</h2>
                <p>The design-build approach places architectural design and construction under one contract and one firm. For Cabin John homeowners, where moisture conditions create a layer of complexity that affects every design and material decision, this integration is particularly valuable:</p>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="compare-table">
                            <thead>
                                <tr><th>Factor</th><th>Design-Build (DMV-GC Group)</th><th>Traditional (Separate Architect + GC)</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Moisture assessment</strong></td><td>Crawlspace walked before design begins — conditions shape every specification</td><td>Architect designs without crawlspace knowledge — flooring fails post-installation</td></tr>
                                <tr><td><strong>Flooring specification</strong></td><td>LVP or encapsulation-first approach — correct for Cabin John moisture reality</td><td>Solid hardwood specified without moisture check — buckling within 2 seasons</td></tr>
                                <tr><td><strong>Addition foundation</strong></td><td>Structural engineer designs moisture-managed foundation for new addition</td><td>Standard crawlspace foundation inherits existing moisture problem</td></tr>
                                <tr><td><strong>Subfloor condition</strong></td><td>Assessed at consultation — damage repaired before finish work begins</td><td>Discovered when new flooring fails — reopening and remediation after project</td></tr>
                                <tr><td><strong>MoCo DPS permit</strong></td><td>In-house team files with 2425 Reedie Drive — complete package first time</td><td>Incomplete structural package — MoCo reviewer requests supplemental</td></tr>
                                <tr><td><strong>Accountability</strong></td><td>One firm responsible for moisture assessment through final finish</td><td>Architect and GC blame each other when moisture-related failures occur</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Our In-House Design-Build Team for Cabin John Projects</h2>

                <div className="team-grid">
                    <div className="team-card"><div className="t-icon">💧</div><strong>Moisture Assessors</strong><span>Crawlspace walk, moisture measurement, encapsulation scope, dehumidification sizing</span></div>
                    <div className="team-card"><div className="t-icon">📐</div><strong>Architects</strong><span>Cottage-scale addition design, MoCo zoning compliance, permit-ready construction drawings</span></div>
                    <div className="team-card"><div className="t-icon">🧱</div><strong>Structural Engineers</strong><span>Subfloor & joist assessment, addition foundation design, load-bearing wall analysis</span></div>
                    <div className="team-card"><div className="t-icon">📋</div><strong>Permit Specialists</strong><span>MoCo DPS at 2425 Reedie Drive — all filings, reviews & inspections managed in-house</span></div>
                    <div className="team-card"><div className="t-icon">⚡</div><strong>Licensed Electricians</strong><span>Knob-and-tube assessment, panel upgrades, circuit additions for Cabin John homes</span></div>
                    <div className="team-card"><div className="t-icon">🔧</div><strong>Licensed Plumbers</strong><span>Galvanized supply replacement, kitchen & bath rough-in within renovation scope</span></div>
                </div>

                <div className="author-box">
                    <div className="author-avatar">🌿</div>
                    <div className="author-info">
                        <h4>About DMV-GC Group — Cabin John's Design-Build Contractor</h4>
                        <p>DMV General Contracting Group holds Maryland MHIC license #156178 and operates from North Bethesda — adjacent to Cabin John on the MacArthur Boulevard corridor. We have completed kitchen remodels, bathroom renovations, flooring installations, rear additions, ADU constructions, and whole-home renovations throughout Cabin John's cottage and colonial neighborhoods. We walk the crawlspace at every Cabin John consultation. We assess moisture before specifying flooring. We design addition foundations that manage the moisture conditions rather than inherit them. We file with MoCo DPS at 2425 Reedie Drive for all permit-required scope. One firm, one contract, moisture-first — every Cabin John project.</p>
                        <div className="author-creds">
                            <span className="cred">MHIC #156178</span>
                            <span className="cred">C&O Canal Moisture Expertise</span>
                            <span className="cred">MoCo DPS Permit Office</span>
                            <span className="cred">In-House Architects & Engineers</span>
                            <span className="cred">4.9★ Rated</span>
                            <span className="cred">1-Year Warranty</span>
                        </div>
                    </div>
                </div>

                <h2>Design-Build Services We Offer in Cabin John, MD</h2>

                <div className="service-grid">
                    <div className="service-card">
                        <div className="s-icon">💧</div>
                        <h3>Crawlspace Encapsulation & Moisture Remediation</h3>
                        <p>Complete vapor barrier installation covering crawlspace floor and walls, with mechanical dehumidification sized for Cabin John's moisture load — the foundational scope that makes every subsequent renovation durable. DMV-GC Group includes crawlspace assessment in every Cabin John consultation and performs encapsulation as the first phase of any project where moisture conditions warrant it. A Cabin John kitchen renovation or flooring installation performed over an encapsulated crawlspace lasts decades. The same work performed over an unaddressed crawlspace fails within seasons. Moisture remediation is not an optional add-on in Cabin John — it is the precondition for durable renovation.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏠</div>
                        <h3>Home Additions</h3>
                        <p>Rear additions, side additions, and second-story additions for Cabin John's cottages and colonials — designed in-house with moisture-managed foundation design and permitted through MoCo DPS. Cabin John's typical lot sizes (6,500–10,000 sq ft) provide meaningful addition potential within MoCo's setback and lot coverage constraints. Every Cabin John addition foundation is designed by our structural engineers with the site's specific moisture conditions addressed — encapsulated crawlspace extension or slab-on-grade foundation where conditions warrant — rather than a standard crawlspace that inherits existing moisture problems into the new construction.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏗️</div>
                        <h3>ADU Construction</h3>
                        <p>Detached ADUs, garage conversions, and lower-level ADU conversions for Cabin John lots that qualify under MoCo ADU zoning. ADU design in Cabin John requires architectural sensitivity to the community's cottage-scale character — accessory structures designed to complement the primary home's vocabulary rather than compete with it. Foundation design for detached Cabin John ADUs includes moisture management as a design requirement, not an afterthought. Cabin John's MacArthur Boulevard corridor and C&O Canal proximity drive steady ADU rental demand — one-bedroom units typically achieve $1,700–$2,100/month.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🍳</div>
                        <h3>Kitchen Remodeling</h3>
                        <p>Full design-build kitchen renovations for Cabin John's 1930s–1960s cottages and colonials — layout redesign, custom cabinetry, and all trades coordinated in-house. Flooring in Cabin John kitchens is always specified only after crawlspace moisture conditions are confirmed — LVP is the default recommendation for kitchens over moisture-affected crawlspaces, regardless of what the homeowner originally intended. Knob-and-tube wiring and galvanized supply replacement absorbed into kitchen scope when walls are open. MoCo DPS permit for all kitchen scopes that cross the permit threshold.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🛁</div>
                        <h3>Bathroom Renovation</h3>
                        <p>Primary bath, guest bath, and powder room renovations for Cabin John's historic homes — with uncoupling membrane specified as standard on all tile work over diagonal plank subfloor, and subfloor condition assessed before any tile is installed. Galvanized supply plumbing replacement within scope when bathroom walls are open. Cabin John bathroom renovations benefit particularly from the design-build model's moisture awareness — a standalone tile contractor who does not assess the crawlspace before tiling may install beautiful tile over a compromised subfloor that fails within two years.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">📐</div>
                        <h3>Open-Concept Conversion</h3>
                        <p>Load-bearing wall removal and open floor plan creation for Cabin John's compact cottage and colonial layouts. Cabin John's 1930s–1960s homes were built with compartmentalized floor plans that feel tight by modern standards — open-concept conversions that connect the kitchen, dining, and living areas transform these homes' livability. Our structural engineers confirm load-bearing status before design is finalized; our crews install the correct beam under MoCo DPS structural permit. For Cabin John's smaller footprints, an open-concept conversion is frequently the highest-impact single renovation scope — transforming how the home feels without expanding its footprint.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🏡</div>
                        <h3>Whole-Home Renovation</h3>
                        <p>Complete interior transformations of Cabin John's 1930s–1960s cottages and colonials — beginning with crawlspace encapsulation, then coordinating architectural redesign, structural work, electrical rewiring where knob-and-tube is present, galvanized supply replacement, kitchen and bathroom renovation, flooring (moisture-appropriate specification throughout), and all finishes under one contract. The design-build model is most valuable in Cabin John whole-home renovations because the moisture conditions, old-home systems, and structural realities are all assessed by the same team that designs and builds the renovation — preventing the cascade of post-installation failures that occurs when these conditions are not assessed before renovation begins.</p>
                    </div>
                    <div className="service-card">
                        <div className="s-icon">🪜</div>
                        <h3>Basement & Lower Level</h3>
                        <p>Basement assessment, waterproofing, and finishing for Cabin John homes with below-grade space. Cabin John basements and lower levels in the community's oldest homes may have active moisture intrusion from the elevated water table — waterproofing assessment is the prerequisite for any finishing scope. Interior drainage systems, sump pump installation, and wall waterproofing where needed before any finish work begins. LVP flooring always below grade. Basement finishing in Cabin John that skips the waterproofing assessment produces finished spaces that develop moisture damage and mold within seasons of completion.</p>
                    </div>
                </div>

                <h2>Design-Build Process for Cabin John Homes — Moisture First</h2>

                <div className="steps">
                    <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free Consultation — Crawlspace Walk Before Floor Plan Discussion</h3>
                            <p>We visit your Cabin John home with our architect, project manager, and structural assessor. The crawlspace walk happens before we discuss floor plans, layouts, or materials. We assess moisture levels with a calibrated meter, inspect the vapor barrier condition (or absence), check joist and subfloor condition for moisture damage, and note any active water infiltration points. We also assess the home's old-home conditions — knob-and-tube wiring, galvanized plumbing, diagonal plank subfloor — and for addition projects, walk the exterior to assess lot parameters under MoCo zoning. The moisture assessment findings shape every subsequent design and material recommendation.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Moisture Remediation Plan — Before Design Concept Is Presented</h3>
                            <p>Based on the crawlspace assessment, we present a moisture remediation recommendation — encapsulation scope, dehumidification sizing, subfloor repair where needed — and discuss whether it is phased as a preconstruction scope or integrated into the full renovation project. Only after the moisture plan is established do we present design concepts — because flooring specifications, subfloor treatment, and addition foundation design all depend on the moisture remediation approach. Design-build is particularly valuable here: the same firm that assessed moisture presents the design that responds to it.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Concept Design — Moisture-Appropriate, Cabin John-Scaled</h3>
                            <p>Our architects develop concept designs calibrated to Cabin John's cottage and colonial character — additions that read as compatible extensions of the original home, not oversized appendages on a small lot. Material selections are moisture-appropriate from the first concept: LVP in moisture-affected zones, engineered hardwood where encapsulation makes it viable, tile with uncoupling membrane on diagonal plank subfloors. Budget-accurate from day one — encapsulation scope priced alongside renovation scope in the same concept presentation.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>MoCo DPS Permit Filing — 2425 Reedie Drive, Wheaton</h3>
                            <p>Complete permit packages filed with MoCo DPS at 2425 Reedie Drive for all Cabin John permit-required scope — structural engineering drawings for additions and open-concept conversions, MEP drawings, energy documentation. All review managed in-house. Homeowners never contact MoCo DPS during their project. Inspection scheduling coordinated directly with county inspectors. For crawlspace encapsulation scope that does not require a MoCo permit, our crews execute independently of the permit timeline.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Construction — Crawlspace Encapsulation First, Then Finish Work</h3>
                            <p>Where crawlspace encapsulation is in scope, it is executed first — before any finish work above begins. Vapor barrier installation, dehumidification system commissioning, and subfloor repair where needed. Only then: structural framing (for additions), electrical (panel upgrade and rewiring where walls are open), plumbing (galvanized replacement, rough-in reconfiguration), HVAC, drywall, tile (uncoupling membrane on old subfloors — always), cabinetry, flooring (LVP in moisture-managed zones; hardwood above grade only where moisture is addressed), and all finishes. One project manager. One schedule.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-num">6</div>
                        <div className="step-content">
                            <h3>MoCo Inspections, Punch List & Permit Close</h3>
                            <p>All required MoCo DPS inspections scheduled and managed. Detailed punch list review upon completion. Permit closed with MoCo DPS. Written warranty documentation. Your Cabin John renovation is fully inspected, moisture-managed from the crawlspace up, and built to last in one of Montgomery County's most distinctive and moisture-challenging communities.</p>
                        </div>
                    </div>
                </div>

                <h2>Design-Build Project Costs in Cabin John, MD</h2>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr><th>Project Type</th><th>Typical Design-Build Cost in Cabin John</th><th>Notes</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Crawlspace Encapsulation</td><td>$8,000 – $25,000+</td><td>Prerequisite scope — always assessed first</td></tr>
                                <tr><td>Kitchen Remodel</td><td>$32,000 – $98,000+</td><td>Moisture-appropriate flooring spec included</td></tr>
                                <tr><td>Bathroom Renovation (primary)</td><td>$22,000 – $70,000+</td><td>Uncoupling membrane on diagonal subfloor; subfloor assessed</td></tr>
                                <tr><td>Open-Concept Conversion (load-bearing)</td><td>$18,000 – $55,000+</td><td>Structural engineering, beam spec, MoCo permit</td></tr>
                                <tr><td>Rear Addition</td><td>$115,000 – $360,000+</td><td>Moisture-managed foundation design included</td></tr>
                                <tr><td>ADU Construction</td><td>$70,000 – $250,000+</td><td>Cottage-compatible design; moisture-appropriate foundation</td></tr>
                                <tr><td>Basement Waterproofing & Finishing</td><td>$40,000 – $120,000+</td><td>Waterproofing assessment first; LVP flooring always</td></tr>
                                <tr><td>Whole-Home Renovation</td><td>$130,000 – $430,000+</td><td>Encapsulation first; all old-home conditions addressed</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Cabin John renovation investment protection — moisture first:</strong> A Cabin John renovation that skips the crawlspace moisture assessment is a renovation that may need to be partially redone within 2–5 years. Hardwood flooring that cups over an unencapsulated crawlspace. Tile that cracks over a moisture-damaged subfloor. An addition foundation that develops condensation in the new crawlspace space. Each of these failures costs more to remediate than it would have cost to prevent at the outset. DMV-GC Group's moisture-first approach is not an upcharge — it is the minimum responsible practice for renovation work in a community with Cabin John's water table conditions. The encapsulation cost is the insurance premium that protects every other dollar spent on the renovation above it.
                </div>

                <h2>What Cabin John Homeowners Say About DMV-GC Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We renovated our 1948 Cabin John cottage — kitchen gut, two bathrooms, and LVP flooring throughout. DMV-GC Group walked the crawlspace at the first visit and found elevated moisture throughout, with some subfloor softness near the kitchen. They encapsulated the crawlspace and repaired the damaged subfloor before any finish work began. The renovation has been in place for three years — no buckling, no soft spots, no issues. A neighbor who renovated the same year with a different contractor specified hardwood over an unaddressed crawlspace. She replaced it within 18 months."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Cabin John, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We added a rear family room to our 1955 Cabin John colonial. DMV-GC Group's structural engineer designed the addition on an encapsulated crawlspace foundation — not a standard open crawlspace — because the existing crawlspace under the house showed significant moisture. The addition is bone dry. The MoCo permit was filed at Reedie Drive and approved in five weeks. The addition matches the original colonial exactly. We've had contractors from other firms come through and assume it was original."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Cabin John, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We did an open-concept conversion in our 1939 Cabin John cottage — removed the wall between the kitchen and the living room. DMV-GC Group's structural engineer assessed the wall first, confirmed it was load-bearing, specified the LVL beam, and filed the MoCo structural permit. Before the conversion, they also encapsulated the crawlspace — the flooring we'd installed a decade earlier had started to cup in the dining room. The new flooring after encapsulation has been stable for four years. The cottage feels completely different now — twice the space in the same footprint."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Cabin John, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We converted our Cabin John detached garage into a one-bedroom ADU. DMV-GC Group assessed the garage slab — it was in good condition with no active moisture issues — and designed the conversion with a full kitchen, bathroom, and separate entrance. The unit looks like a cottage outbuilding that belongs on our 1940s property. The MoCo permit was filed and approved. We rent it for $1,900/month. The design attention to Cabin John's architectural character is what makes it rent at that level — it doesn't look like a converted garage."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Cabin John, MD</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Cabin John homeowners trust DMV-GC Group for design-build projects that start with the crawlspace — assessing C&O Canal moisture conditions before any flooring is specified, any subfloor is covered, or any addition foundation is designed. The moisture assessment is not an optional consultation item in Cabin John. It is the first thing we do, and everything else follows from what we find.</p>
                </div>

                <div className="cta-banner">
                    <h2>Start Your Design-Build Project in Cabin John</h2>
                    <p>Our architect, project manager, and structural assessor will visit your Cabin John home — crawlspace first, floor plan second. MoCo DPS permits filed correctly. Moisture-appropriate specifications throughout. Call +1 240-730-1292 or schedule your free consultation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Design Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All Cabin John, MD Neighborhoods for Design-Build</h2>
                <div className="areas-grid">
                    <span className="area-pill">Cabin John Village</span>
                    <span className="area-pill">MacArthur Boulevard</span>
                    <span className="area-pill">C&O Canal Adjacent</span>
                    <span className="area-pill">Cabin John Creek Corridor</span>
                    <span className="area-pill">Seven Locks Road Area</span>
                    <span className="area-pill">Ericsson Road</span>
                    <span className="area-pill">Persimmon Tree Road</span>
                </div>

                <div className="nearby-box">
                    <h3>Also serving Potomac, MD — immediately west of Cabin John on MacArthur Boulevard</h3>
                    <p>Potomac's estate-scale homes share Cabin John's MacArthur Boulevard corridor but present a very different design-build opportunity — larger lots, larger homes, R-200 zoning, and $200K–$800K project scopes. DMV-GC Group serves both communities with the same in-house design-build expertise. <Link href="/service/design-build/potomac-md">View our Potomac design-build page →</Link></p>
                </div>

                <h2>Frequently Asked Questions — Design-Build in Cabin John, MD</h2>
                <Accordion className="faq-list" defaultActiveKey="0">
                    {faqData.map((item, index) => (
                        <Accordion.Item eventKey={index.toString()} key={index} className="faq-item">
                            <Accordion.Header as="h3" className="faq-q">{item.question}</Accordion.Header>
                            <Accordion.Body className="faq-a">{item.answer}</Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div className="internal-links">
                    <h2>Explore Our Other Services in Cabin John, MD</h2>
                    <ul>
                        <li><Link href="/service/kitchen-remodeling/cabin-john-md">Kitchen Remodeling in Cabin John, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling/cabin-john-md">Bathroom Remodeling in Cabin John, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/cabin-john-md">Basement Remodeling in Cabin John, MD</Link></li>
                        <li><Link href="/service/adu/cabin-john-md">ADU Construction in Cabin John, MD</Link></li>
                        <li><Link href="/service/decks/cabin-john-md">Deck Building in Cabin John, MD</Link></li>
                        <li><Link href="/service/flooring-remodeling/cabin-john-md">Flooring Installation in Cabin John, MD</Link></li>
                        <li><Link href="/service/home-additions">Home Additions in Cabin John, MD</Link></li>
                    </ul>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Work with a True Design-Build Contractor in Cabin John?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free consultation. We walk the crawlspace first — every time, every project. MoCo DPS permit filed correctly. Moisture-appropriate specifications that protect your renovation investment for decades.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Design-Build Consultation in Cabin John →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default CabinJohnMD;