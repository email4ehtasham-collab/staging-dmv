'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const NorthBethesdaMD = () => {
    const { setActiveMenuItem } = useMyContext();

    useEffect(() => {
        setActiveMenuItem("service");
    }, []);

    const faqData = [
        {
            question: "How much does drywall installation cost in North Bethesda, MD?",
            answer: "Drywall pricing depends on surface area, existing conditions, finish level, ceiling work, access, board type and whether the project is part of a larger renovation. For North Bethesda's 1950s\u2013 1970s ranches and split-levels, older plaster or original drywall conditions may affect scope. For newer Pike & Rose and White Flint area townhomes, modern drywall systems are typically in good condition but renovation work still requires careful patch-and-blend matching. DMV General Contracting Group provides a detailed estimate after reviewing the project in person."
        },
        {
            question: "Can DMV General Contracting Group repair water-damaged drywall in North Bethesda?",
            answer: "Yes. The team assesses damaged drywall, coordinates correction of the moisture source with the appropriate trade, removes compromised material, installs replacement drywall, and finishes it to match the surrounding surfaces. For North Bethesda homes with crawlspace moisture conditions, the moisture source is confirmed resolved before new drywall is installed in affected areas."
        },
        {
            question: "What drywall finish level should I choose for my North Bethesda home?",
            answer: "Level 4 is the standard finish for most residential rooms with flat, eggshell or satin paint. Level 5 is the premium option for rooms with strong raking light, high-sheen finishes, or primary suite and main living areas where surface perfection is a priority. Many North Bethesda homeowners upgrading their 1960s\u2013 1970s ranches choose Level 5 for main living areas as part of a whole-home renovation."
        },
        {
            question: "Does DMV General Contracting Group install moisture-resistant and fire-rated drywall in North Bethesda?",
            answer: "Yes. Moisture-resistant board is installed in all bathrooms and kitchens, cement board in tile areas, and Type X fire-rated drywall where required by project design or applicable code \u2014 including in garage walls and ceilings adjacent to living space, which is common in North Bethesda's ranch and colonial attached-garage configurations."
        },
        {
            question: "Is DMV General Contracting Group local to North Bethesda?",
            answer: "Yes \u2014 DMV General Contracting Group is headquartered at 11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852. North Bethesda is our home community. When we do drywall work in North Bethesda, we are working in the same neighborhood where our office is located."
        },
        {
            question: "Can drywall be coordinated with a North Bethesda remodeling or addition project?",
            answer: "Yes. DMV General Contracting Group's design-build workflow coordinates drywall with plumbing, electrical, HVAC, structural work, carpentry, and painting \u2014 so drywall is sequenced correctly after rough-in inspections and handed off paint-ready to the next trade. For North Bethesda's ranch-to-two-story additions, drywall is scoped for both the new addition and the blend with existing rooms at the same time."
        }
    ];

    return (
        <>
            <div className="city-service-detail-page drywall-north-bethesda-md">
                <div className="container">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <Link href="/">Home</Link><span>›</span>
                        <Link href="/services">Services</Link><span>›</span>
                        <Link href="/service/drywall">Drywall</Link><span>›</span>
                        North Bethesda, MD
                    </nav>

                    <div className="hero">
                        <div className="hero-location-tag">📍 Serving North Bethesda, MD & Montgomery County</div>
                        <h1>Drywall Installation & Repair in North Bethesda, MD</h1>
                        <div className="hero-meta">
                            <span className="badge key">🏠 Residential Drywall Specialists</span>
                            <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                            <span className="badge">✓ MHIC Licensed & Insured</span>
                            <span className="badge">✓ DLCP Licensed</span>
                            <span className="badge">✓ 1-Year Warranty</span>
                            <span className="badge">✓ Free Estimate</span>
                        </div>
                    </div>

                    <div className="banner">
                        <div className="icon">🏡</div>
                        <div>
                            <h3>Drywall Services Built for North Bethesda's Two Housing Eras</h3>
                            <p>North Bethesda's housing stock spans two distinct eras — 1950s–1970s ranches and colonials in Luxmanor, Tilden Woods, and Garrett Park Estates, and newer townhomes and attached homes near the Pike & Rose corridor and White Flint area. Each era has different drywall conditions and renovation needs. DMV General Contracting Group serves both, from whole-room skim coating in a 1962 ranch to new drywall in a second-story addition above a single-level footprint. Because we are headquartered here at 11810 Grand Park Ave, Suite 500, we know the community's housing stock in detail — and we are never far from the job.</p>
                        </div>
                    </div>

                    <div className="intro-box">
                        North Bethesda is an unincorporated community in Montgomery County — its housing ranges from 1950s–1970s single-family ranches and split-levels on generous lots in Luxmanor, Tilden Woods, and Garrett Park Estates, to newer townhomes, condos, and mixed-use residential near the Pike & Rose development and the White Flint Metro corridor. Drywall work in North Bethesda reflects that range: older homes may have original plaster, early-generation drywall, or wall conditions that require assessment before new work is scoped; newer properties have modern systems that need careful patch-and-blend matching for renovations and additions. DMV General Contracting Group coordinates drywall with plumbing, electrical, HVAC, framing, and finish work as part of larger North Bethesda renovations — with all permits filed at MoCo DPS at 2425 Reedie Drive, Wheaton, which covers all unincorporated North Bethesda properties.
                    </div>
                    <h2>Drywall Services We Offer in North Bethesda, MD</h2>
                    <p>DMV General Contracting Group handles residential drywall from installation through final preparation for paint, tile, or another finish — for standalone drywall projects and as part of North Bethesda's active renovation and addition market.</p>
                    <div className="service-grid">
                        <div className="service-card"><h3>🏗️ New Drywall Installation</h3><p>Full drywall installation for new rooms, additions, basement finishing, and whole-floor or whole-home renovations. Appropriate board type selected for each application — standard, moisture-resistant, cement board, or fire-rated where required.</p></div>
                        <div className="service-card"><h3>🔧 Drywall Repair & Patching</h3><p>Precision repair of holes, cracks, impact damage, and settlement movement — from small nail-pop repairs to large section replacements — finished to match the surrounding wall and ceiling surface.</p></div>
                        <div className="service-card"><h3>💧 Water Damage Repair</h3><p>Assessment, removal, and replacement of water-damaged drywall — with moisture-source coordination before new material is installed. For North Bethesda homes with crawlspace moisture conditions, the source is confirmed addressed before new drywall proceeds in affected areas.</p></div>
                        <div className="service-card"><h3>🎨 Skim Coating & Smooth Finish</h3><p>Full-wall and full-room skim coating to Level 5 — the premium finish for North Bethesda's main living areas and primary suites undergoing renovation, especially in older ranches where original walls show decades of texture variation.</p></div>
                        <div className="service-card"><h3>🏠 Popcorn & Texture Removal</h3><p>Popcorn ceiling removal and smooth-surface replacement. Pre-1978 textured ceilings are tested or handled per applicable asbestos requirements before any sanding or scraping begins. Common request in North Bethesda's 1960s–1970s ranch stock.</p></div>
                        <div className="service-card"><h3>🔊 Specialty Board Systems</h3><p>Moisture-resistant, cement board for tile areas, Type X fire-rated for garage-to-living-space assemblies, and sound-dampening systems for home offices, primary suites, and multi-family configurations near the Pike & Rose corridor.</p></div>
                        <div className="service-card"><h3>🪜 Ceiling Repair & Installation</h3><p>Ceiling drywall installation and repair including overhead work in vaulted and cathedral ceiling configurations found in North Bethesda's ranch additions and open-plan living areas. Coffered and tray ceiling drywall framing support available.</p></div>
                        <div className="service-card"><h3>🏡 Addition & Second-Story Drywall</h3><p>Complete drywall scope for North Bethesda's ranch-to-two-story additions and rear room additions — new square footage drywalled and finished to match or exceed the existing home's surface quality. Blend with adjacent original rooms handled in the same scope.</p></div>
                    </div>

                    <h2>Drywall Service Categories — North Bethesda Residential</h2>
                    <div className="service-grid">
                        <div className="service-card"><h3>🏗️ New Construction & Additions</h3><ul><li>Ranch-to-two-story additions</li><li>Rear room additions</li><li>Basement finishing</li><li>New rooms and partitions</li><li>Second-floor stairwell drywall</li><li>Blending with existing finish</li></ul></div>
                        <div className="service-card"><h3>🔨 Drywall Repair & Patching</h3><ul><li>Plumbing and electrical access holes</li><li>Impact and doorknob holes</li><li>Settlement cracks and nail pops</li><li>Large section replacement</li><li>Texture matching</li><li>Post-renovation patch-and-blend</li></ul></div>
                        <div className="service-card"><h3>✨ Skim Coating & Smooth Finish</h3><ul><li>Full-wall and full-room skim coats</li><li>Level 5 smooth finishes</li><li>Decades of texture variation resurfacing</li><li>Primary suite finishing</li><li>Main living area upgrades</li><li>Pre-paint inspection</li></ul></div>
                        <div className="service-card"><h3>🏠 Popcorn & Texture Removal</h3><ul><li>Popcorn ceiling removal</li><li>Smooth Level 4 or Level 5 replacement</li><li>Pre-1978 asbestos testing protocol</li><li>1960s–1970s ranch ceilings</li><li>Orange peel and knockdown matching</li><li>Safety-first handling</li></ul></div>
                        <div className="service-card"><h3>🎯 Specialty Board Systems</h3><ul><li>Moisture-resistant board</li><li>Cement board for tile areas</li><li>Type X fire-rated assemblies</li><li>Sound-dampening board</li><li>Resilient channel assemblies</li><li>Garage-to-living-space separation</li></ul></div>
                        <div className="service-card"><h3>🔧 Remodel Support</h3><ul><li>Kitchen remodeling patches</li><li>Bathroom renovation board</li><li>Open-concept conversion patching</li><li>Home office additions</li><li>Whole-home renovation</li><li>Paint-ready delivery</li></ul></div>
                    </div>

                    <div className="trust-bar">
                        <div className="trust-item">MHIC #156178</div>
                        <div className="trust-item">Licensed & Insured</div>
                        <div className="trust-item">1-Year Warranty</div>
                        <div className="trust-item">4.9 Rating · 97+ Reviews</div>
                        <div className="trust-item">Free Estimate</div>
                    </div>
                    <h2>Drywall for North Bethesda's Older Ranch & Colonial Stock</h2>
                    <div className="banner">
                        <div className="icon">🏛️</div>
                        <div>
                            <h3>Older North Bethesda Homes — What Drywall Work Often Involves</h3>
                            <p>North Bethesda's 1950s–1970s ranches and colonials in Luxmanor, Tilden Woods, and Garrett Park Estates may have original plaster walls in some rooms, first-generation drywall installed in the 1970s–1980s, or a mix of both across different areas of the home. Before new drywall work is scoped, we assess what is on the walls — plaster versus drywall, condition, and whether the substrate is sound enough for a finish coat or requires replacement. Popcorn ceilings are common in this housing vintage and frequently tested for asbestos before removal is recommended. Settlement cracks and nail pops are typical conditions in this era's homes and are addressed as part of any skim-coat or patch scope.</p>
                        </div>
                    </div>

                    <h2>Drywall for North Bethesda's Pike & Rose Corridor & Newer Townhomes</h2>
                    <p>Newer North Bethesda properties near the Pike & Rose development, White Flint area, and post-2000 townhome communities have modern drywall systems in good structural condition — but renovation, addition, and remodeling work still requires careful planning for patch-and-blend matching. Open-concept conversions, kitchen expansions, bathroom renovations, and home office additions in newer townhomes all produce wall and ceiling conditions that require precise finishing to match the surrounding undisturbed surfaces. DMV General Contracting Group finishes patch work in North Bethesda's newer properties to match the existing texture, sheen level, and paint preparation standard — so renovation work is invisible at completion.</p>

                    <h2>Drywall Finishing Levels — Which Level Does Your North Bethesda Home Need?</h2>
                    <p>The finish level determines how smooth and paint-ready the surface will be. Choosing the right level helps avoid visible seams, joints and surface variations after painting.</p>
                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead><tr><th>Level</th><th>What It Includes</th><th>Best For in North Bethesda</th></tr></thead>
                                <tbody>
                                    <tr><td>Level 3</td><td>Tape, two coats of compound, one skim coat. Texture can be applied over this level.</td><td>Garage interiors, utility areas, spaces receiving heavy texture.</td></tr>
                                    <tr><td><strong>Level 4</strong></td><td>Tape, three coats of compound, smooth surface ready for flat or low-sheen paint.</td><td>Standard residential rooms in North Bethesda ranches and colonials — the most common specification.</td></tr>
                                    <tr><td><strong>Level 5 ⭐</strong></td><td>Level 4 plus a full skim coat over the entire surface. Highest quality, no surface variation visible under any lighting.</td><td>Primary suites, main living areas, rooms with large windows or strong raking light — increasingly requested in North Bethesda's renovated ranch conversions and additions.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h2>Specialty Drywall Board Types We Install in North Bethesda</h2>
                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead><tr><th>Board Type</th><th>Key Feature</th><th>Typical Application</th></tr></thead>
                                <tbody>
                                    <tr><td>Standard Drywall</td><td>General-purpose wall and ceiling board.</td><td>Most residential rooms and modern townhome construction.</td></tr>
                                    <tr><td>Moisture-Resistant (Green/Purple Board)</td><td>Higher moisture tolerance.</td><td>Bathrooms, kitchens, laundry rooms and spaces with elevated humidity.</td></tr>
                                    <tr><td>Cement Board</td><td>Durable tile-ready substrate.</td><td>Behind tile in showers, tub surrounds and floor tile areas.</td></tr>
                                    <tr><td>Fire-Rated Type X</td><td>Fire-resistant assembly component.</td><td>Garage walls and ceilings adjacent to living space — common in North Bethesda's attached-garage ranch and colonial configurations — and assemblies where code requires fire separation.</td></tr>
                                    <tr><td>Sound-Dampening</td><td>Designed to reduce sound transmission.</td><td>Home offices, primary suites, media rooms and multi-family configurations near the Pike & Rose corridor.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <h2>Popcorn Ceiling Removal in North Bethesda, MD</h2>
                    <p>Popcorn ceilings are among the most common renovation requests in North Bethesda's 1960s–1970s ranch and colonial stock — virtually every home of this era has them, and virtually no homeowner updating the interior wants to keep them. DMV General Contracting Group removes popcorn ceilings and refinishes to a smooth Level 4 or Level 5 surface as a standalone project or as part of a larger renovation scope. Older textured ceiling materials — particularly those installed before 1978 — may contain asbestos, and suspect materials are tested or handled per applicable requirements before any sanding, scraping, or removal begins. We never proceed with popcorn removal in pre-1978 North Bethesda homes without confirming the asbestos status of the ceiling material.</p>
                    <div className="banner">
                        <div className="icon">⚠️</div>
                        <div>
                            <h3>Safety first — pre-1978 popcorn ceilings:</h3>
                            <p>Never sand or scrape an older textured ceiling in a North Bethesda home built before 1978 without first confirming whether asbestos testing or professional abatement handling is required.</p>
                        </div>
                    </div>

                    <h2>Drywall for Remodeling Projects in North Bethesda, MD</h2>
                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead><tr><th>Project Type</th><th>Drywall Work Typically Involved</th></tr></thead>
                                <tbody>
                                    <tr><td>Ranch-to-Two-Story Addition</td><td>Complete new drywall for all second-floor rooms plus stairwell; blend with existing main-level finish at the new interior connection points.</td></tr>
                                    <tr><td>Rear Room Addition</td><td>New drywall for addition square footage plus patch-and-blend where the addition opens into existing rooms.</td></tr>
                                    <tr><td>Kitchen Remodel</td><td>Patching after electrical and plumbing rough-in, backsplash substrate, layout-wall changes where applicable, paint-ready finishing.</td></tr>
                                    <tr><td>Bathroom Renovation</td><td>Moisture-resistant board, cement board in tile areas, ceiling work, patching after fixture and plumbing changes.</td></tr>
                                    <tr><td>Basement Finishing</td><td>Walls and ceilings, appropriate board selection, Type X fire-rated for garage-adjacent assemblies, cement board in any basement bathroom.</td></tr>
                                    <tr><td>Open-Concept Conversion</td><td>Ceiling and wall patching after wall removal, texture and finish blending to match existing undisturbed surfaces.</td></tr>
                                    <tr><td>Home Office Addition or Conversion</td><td>Sound-dampening board options, dedicated circuit access patching, Level 5 finish for professional appearance in video calls and client meetings.</td></tr>
                                    <tr><td>Whole-Home Renovation</td><td>Skim coating throughout, trade-access patching, finish-level selection, and uniform paint-ready surfaces across all renovated areas.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <h2>Drywall Service Cost in North Bethesda, MD</h2>
                    <p>Drywall pricing varies by project size, existing conditions, and finish requirements. The final estimate is affected by surface area, ceiling height, board type, finish level, texture matching, water damage, framing conditions, and coordination with other trades.</p>
                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead><tr><th>Cost Factor</th><th>What Can Change the Price in North Bethesda</th></tr></thead>
                                <tbody>
                                    <tr><td>Project Size</td><td>More wall and ceiling square footage increases labor and material. Ranch-to-two-story additions in North Bethesda are among the largest single-project drywall scopes.</td></tr>
                                    <tr><td>Existing Conditions</td><td>Original plaster in Luxmanor and Tilden Woods homes may require different preparation than standard drywall. Condition of existing substrate assessed at the estimate.</td></tr>
                                    <tr><td>Finish Level</td><td>Level 5 and full-room skim coating require additional material, labor, and surface prep — most requested for primary suites and main living areas in North Bethesda renovations.</td></tr>
                                    <tr><td>Ceiling Work</td><td>Overhead installation and repair require additional labor. Vaulted or cathedral ceiling configurations in ranch additions require staging and more careful installation.</td></tr>
                                    <tr><td>Specialty Board</td><td>Moisture-resistant, cement board, Type X fire-rated (for attached-garage walls), and sound-dampening systems each change material requirements and cost.</td></tr>
                                    <tr><td>Water Damage</td><td>Removal, drying, framing inspection, and moisture-source coordination expand scope. Crawlspace moisture sources in older North Bethesda homes may require remediation before new drywall is installed.</td></tr>
                                    <tr><td>Texture Matching</td><td>Matching existing wall texture in an older North Bethesda home — particularly orange peel or knockdown patterns from the 1970s–1980s — requires additional finishing and blending time.</td></tr>
                                    <tr><td>Popcorn Ceiling Removal</td><td>Testing, removal, and smooth-surface replacement is priced per ceiling area. Pre-1978 materials require asbestos protocol confirmation before pricing is finalized.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <h2>Why Choose DMV General Contracting Group for Drywall in North Bethesda?</h2>
                    <div className="service-grid">
                        <div className="service-card"><h3>📍 We're Based Here</h3><p>Headquartered at 11810 Grand Park Ave, Suite 500 — North Bethesda is our home community, not a distant service area.</p></div>
                        <div className="service-card"><h3>🎯 Seamless Texture Matching</h3><p>Repairs and patches are finished to blend with surrounding wall and ceiling surfaces — invisible at completion.</p></div>
                        <div className="service-card"><h3>🏗️ Integrated With Other Trades</h3><p>Drywall coordinated with plumbing, electrical, HVAC, carpentry, and painting as part of larger North Bethesda renovations.</p></div>
                        <div className="service-card"><h3>🛡️ Licensed & Warrantied</h3><p>Maryland MHIC #156178, DC DLCP #410526000209, fully insured, with a 1-year workmanship warranty on all drywall work.</p></div>
                        <div className="service-card"><h3>⭐ Established Reputation</h3><p>4.9 rating with 97+ verified homeowner reviews across the North Bethesda community and surrounding areas.</p></div>
                        <div className="service-card"><h3>📋 MoCo DPS Permit Expertise</h3><p>All North Bethesda remodeling permits filed at MoCo DPS at 2425 Reedie Drive — filed daily by our in-house permit team.</p></div>
                    </div>

                    <h2>Our Drywall Installation Process in North Bethesda</h2>
                    <div className="steps">
                        <div className="step"><div className="step-num">1</div><div className="step-content"><h3>Free Estimate & Scope Assessment</h3><p>We visit your North Bethesda home, review the drywall scope, assess existing wall and ceiling conditions (plaster vs. drywall, damage extent, moisture history), and determine board type, finish level, and any asbestos testing requirements for pre-1978 textured ceilings. Detailed estimate provided at no charge.</p></div></div>
                        <div className="step"><div className="step-num">2</div><div className="step-content"><h3>Trade Coordination</h3><p>For remodeling projects, drywall is sequenced after required plumbing, electrical, and HVAC rough-in work and MoCo DPS inspections — so walls are not closed before inspections occur and drywall is not installed over unresolved moisture sources.</p></div></div>
                        <div className="step"><div className="step-num">3</div><div className="step-content"><h3>Drywall Hanging</h3><p>Sheets cut and installed using the appropriate board type for each location — standard for dry areas, moisture-resistant in bathrooms and kitchens, cement board for tile substrates, Type X for garage-adjacent fire assemblies. Fastening approach appropriate to each framing configuration.</p></div></div>
                        <div className="step"><div className="step-num">4</div><div className="step-content"><h3>Taping, Mudding & Coat Application</h3><p>Joints, corners, and fasteners finished through the required sequence of compound coats for the specified finish level. Inside and outside corners properly reinforced. Archways and curved details handled with appropriate bead profiles.</p></div></div>
                        <div className="step"><div className="step-num">5</div><div className="step-content"><h3>Sanding, Skim Coat & Final Prep</h3><p>Surfaces sanded and, where Level 5 is specified, skim coated over the entire wall surface. Texture applied where existing rooms call for texture matching. Final surface inspection before handoff.</p></div></div>
                        <div className="step"><div className="step-num">6</div><div className="step-content"><h3>Paint-Ready Delivery</h3><p>Final surfaces inspected and ready for primer and paint, or handed off to the next trade in the project sequence. No visible seams, patches, or rough transitions at project close.</p></div></div>
                    </div>

                    <h2>Serving North Bethesda and Surrounding Areas</h2>
                    <div className="areas-grid">
                        <span className="area-pill">North Bethesda</span><span className="area-pill">Luxmanor</span><span className="area-pill">Tilden Woods</span><span className="area-pill">Garrett Park Estates</span><span className="area-pill">Strathmore</span><span className="area-pill">Old Georgetown Estates</span><span className="area-pill">Pike & Rose</span><span className="area-pill">White Flint</span><span className="area-pill">Cabin John Park</span><span className="area-pill">Bethesda</span><span className="area-pill">Kensington</span><span className="area-pill">Rockville</span><span className="area-pill">Chevy Chase</span><span className="area-pill">Washington, DC</span>
                    </div>

                    <div className="banner">
                        <div className="icon">📍</div>
                        <div>
                            <h3>North Bethesda Local Service Focus</h3>
                            <p>North Bethesda is unincorporated Montgomery County — all construction and remodeling permits for North Bethesda properties are filed with MoCo DPS at 2425 Reedie Drive, Wheaton. Unlike Kensington (Town permit at 3710 Mitchell Street) or Garrett Park (Town permit at 4600 Oxford Street), North Bethesda has no separate municipal permit office. DMV General Contracting Group files at MoCo DPS for all North Bethesda renovation and remodeling projects.</p>
                        </div>
                    </div>

                    <h2>Frequently Asked Questions — Drywall Services in North Bethesda, MD</h2>
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
                        <h2>Explore Our Other Services in North Bethesda, MD</h2>
                        <ul>
                            <li><Link href="/service/home-additions/north-bethesda-md">Home Additions in North Bethesda, MD</Link></li>
                            <li><Link href="/service/kitchen-remodeling/north-bethesda-md">Kitchen Remodeling in North Bethesda, MD</Link></li>
                            <li><Link href="/service/bathroom-remodeling/north-bethesda-md">Bathroom Remodeling in North Bethesda, MD</Link></li>
                            <li><Link href="/service/basement-remodeling/north-bethesda-md">Basement Remodeling in North Bethesda, MD</Link></li>
                            <li><Link href="/service/design-build/north-bethesda-md">Design-Build Contractor in North Bethesda, MD</Link></li>
                            <li><Link href="/service/electrical-services/north-bethesda-md">Electrical Services in North Bethesda, MD</Link></li>
                            <li><Link href="/service/plumbing-services/north-bethesda-md">Plumbing Services in North Bethesda, MD</Link></li>
                            <li><Link href="/service/siding-installation/north-bethesda-md">Siding Installation in North Bethesda, MD</Link></li>
                        </ul>
                    </div>

                    <div className="cta-banner">
                        <h2>Need Drywall Work in North Bethesda, MD?</h2>
                        <p>Get a professional assessment for installation, repair, finishing, skim coating, water damage or remodeling drywall — from your neighbors at 11810 Grand Park Ave.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Estimate →</Link>
                        <Link href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</Link>
                    </div>

                    <div className="source-note">
                        <strong>DMV General Contracting Group LLC</strong><br />
                        11810 Grand Park Ave. Suite 500, North Bethesda, MD 20852<br />
                        MD MHIC #156178 · DC DLCP #410526000209<br />
                        Available 7 Days a Week · 1-Year Workmanship Warranty
                    </div>

                </div>
            </div>
        </>
    );
};

export default NorthBethesdaMD;