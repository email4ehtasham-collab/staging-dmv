import Link from "next/link";
import NavitemActive from "@/components/Common/NavitemActive";

import "../city-service-style.scss";
import "./style.scss";

const NorthBethesdaMD = () => {

    const faqData = [
        {
            question: "Where are home addition permits filed in North Bethesda, MD?",
            answer: "North Bethesda is unincorporated Montgomery County — all addition permits are filed with Montgomery County DPS at 2425 Reedie Drive, Wheaton, MD 20902. North Bethesda has no separate municipal permit office. DMV General Contracting Group files at MoCo DPS routinely and manages the full submission, review, and inspection process in-house — you do not contact the county at any point."
        },
        {
            question: "What is the most popular home addition type in North Bethesda?",
            answer: "Second-story additions converting 1950s–1970s ranches to full two-story homes are the most transformative and most frequently requested addition type in North Bethesda. Master suite additions and rear family room expansions are also very common. North Bethesda's older ranch stock — in Luxmanor, Tilden Woods, and Garrett Park Estates — sits on generous lots that are structurally well-suited to vertical expansion, making ranch-to-two-story one of the strongest investment additions available in the community."
        },
        {
            question: "How much does a home addition cost in North Bethesda, MD?",
            answer: "A bump-out runs $45,000–$120,000. A single room addition runs $120,000–$230,000. A master suite addition runs $150,000–$310,000+. A full second-story addition runs $220,000–$450,000+. All costs include in-house architectural design, structural engineering, MoCo DPS permit fees, and complete construction through final finishes. DMV General Contracting Group provides free, itemized estimates for every North Bethesda property."
        },
        {
            question: "Is DMV General Contracting Group local to North Bethesda?",
            answer: "Yes — DMV General Contracting Group is headquartered at 11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852. We are based in North Bethesda, file permits at MoCo DPS daily, and are familiar with every neighborhood and housing era in the community. When you hire DMV General Contracting Group for a North Bethesda addition, you are hiring your neighbor."
        },
        {
            question: "Do older North Bethesda ranches need electrical upgrades for a home addition?",
            answer: "Frequently, yes. North Bethesda's 1950s–1970s ranches were typically built with 100-amp electrical service — undersized for today's household loads and insufficient to support a significant addition. Upgrading to 200-amp service is commonly included in the addition permit scope and handled by DMV General Contracting Group's in-house licensed electricians as part of the same project."
        },
        {
            question: "Does DMV General Contracting Group handle architectural design in-house for North Bethesda additions?",
            answer: "Yes. DMV General Contracting Group has a full in-house architectural and structural engineering team based in North Bethesda. We design your addition from initial concept through permit-ready construction documents — you do not need to hire a separate architect. Our design-build approach means the same firm that designs your North Bethesda addition also builds it, giving you a single point of contact and full accountability throughout the entire project."
        }
    ];

    const reviewData = [
        {
            text: "We converted our Luxmanor ranch into a two-story home — added a full second story with four bedrooms and two bathrooms above the original single-level footprint. DMV General Contracting Group's structural engineers assessed our foundation first, confirmed it was adequate, and designed a roofline for the second story that makes the house look like it was always two stories. Project took about 10 months.",
            location: "Luxmanor, North Bethesda MD"
        },
        {
            text: "We added a master suite wing to our Tilden Woods colonial — 550 square feet with a primary bedroom, walk-in closet, and a full spa bathroom. DMV General Contracting Group handled everything: design, MoCo DPS permit, construction. They're literally headquartered in North Bethesda. The addition looks like it was always part of the original house.",
            location: "Tilden Woods, North Bethesda MD"
        },
        {
            text: "We had a 1962 ranch in Garrett Park Estates that we loved but had outgrown. DMV General Contracting Group designed a rear family room addition — 420 square feet with vaulted ceilings and a full wall of glass facing our backyard. They upgraded our electrical panel as part of the same permit scope. The addition connects to our kitchen so naturally that guests don't notice where it begins.",
            location: "Garrett Park Estates, North Bethesda MD"
        },
        {
            text: "We own a townhome near Pike & Rose and added a bump-out on our main living level — widened the kitchen by 8 feet to fit an island and breakfast area. DMV General Contracting Group confirmed our HOA's ARC requirements, prepared the submission package, got ARC approval before they filed with MoCo DPS, and built the bump-out in about 10 weeks once permits were in hand.",
            location: "Pike & Rose, North Bethesda MD"
        }
    ];

    return (
        <div className="city-service-detail-page">
            <NavitemActive nav="service" />
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/home-additions">Home Additions</Link><span>›</span>
                    North Bethesda, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving North Bethesda, MD — Our Home Community</div>
                    <h1>Home Additions in North Bethesda, MD</h1>
                    <div className="hero-meta">
                        <span className="badge key">🏠 DMV-GC Headquartered in North Bethesda</span>
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed #156178</span>
                        <span className="badge">✓ In-House Architects &amp; Engineers</span>
                        <span className="badge">✓ MoCo DPS Permit Team</span>
                        <span className="badge">✓ Ranch-to-Two-Story Specialists</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="banner">
                    <div className="icon">🏠</div>
                    <div>
                        <h3>North Bethesda Is Where DMV General Contracting Group Is Headquartered — and Where We Know Every Neighborhood, Every Housing Era, and Every MoCo DPS Permit Requirement That Applies to Home Additions Here</h3>
                        <p>DMV General Contracting Group is based at 11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852 — this is our home community, not a service area we drive to from another county. We know North Bethesda&apos;s housing stock in detail: the 1950s–1970s ranches in Luxmanor, Tilden Woods, and Garrett Park Estates that are the most active addition candidates in the community — undersized by today&apos;s standards, sitting on generous lots, and structurally well-suited to second-story additions that transform a single-level ranch into a full two-story home. We know the newer townhome and attached-home stock near the Pike &amp; Rose corridor and the White Flint area, where bump-outs and lower-level expansions are the more common addition scope. And we file every North Bethesda addition permit with MoCo DPS at 2425 Reedie Drive — the same permit office we use daily for projects across Montgomery County — knowing the reviewers, the submission standards, and the typical approval timeline for North Bethesda projects. If you are adding onto a North Bethesda home, you are hiring your neighbor.</p>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a licensed <strong>home addition contractor in North Bethesda, MD</strong>? DMV General Contracting Group designs and builds all types of home additions for North Bethesda homeowners — room additions, second-story additions, master suite additions, family room expansions, bump-outs, and sunrooms. Full in-house design-build capability: architects, structural engineers, permit specialists, and all construction trades under one contract. All permits filed with MoCo DPS at 2425 Reedie Drive, Wheaton. Ranch-to-two-story conversion specialists for North Bethesda&apos;s 1950s–1970s single-level homes. MHIC licensed #156178, fully insured, 1-year workmanship warranty. Free in-home consultation. Call +1 240-730-1292.
                </div>

                <div className="trust-bar">
                    <div className="trust-item"><div className="icon">📍</div><strong>Headquartered Here</strong><span>11810 Grand Park Ave, Suite 500 — North Bethesda is our home office</span></div>
                    <div className="trust-item"><div className="icon">📐</div><strong>In-House Architects</strong><span>Full addition design &amp; 3D renderings — no outside architect needed</span></div>
                    <div className="trust-item"><div className="icon">📋</div><strong>MoCo DPS Daily</strong><span>2425 Reedie Drive — permits filed here routinely for North Bethesda projects</span></div>
                    <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
                </div>

                <h2>North Bethesda&apos;s Two Housing Eras — Different Addition Approaches</h2>
                <p>North Bethesda&apos;s housing stock spans two meaningfully different eras, each with its own structural profile, addition potential, and design approach:</p>
                <div className="era-grid">
                    <div className="era-card">
                        <h3>🏠 1950s–1970s Ranches &amp; Colonials — The Core Addition Market</h3>
                        <ul>
                            <li><strong>Neighborhoods:</strong> Luxmanor, Tilden Woods, Garrett Park Estates, Strathmore, Old Georgetown Estates</li>
                            <li><strong>Typical home:</strong> 1,400–2,400 sq ft ranch or split-level on a generous lot; often 0.3–0.7 acres</li>
                            <li><strong>Most common addition scope:</strong> Second-story addition converting ranch to two-story; master suite addition; rear family room expansion</li>
                            <li><strong>Structural conditions:</strong> Original electrical panels often 100-amp — typically upgraded during addition scope; load-bearing walls at non-obvious locations in split-level plans; crawlspace or slab foundation assessed before design</li>
                            <li><strong>Addition potential:</strong> High — generous lots, favorable setbacks, homes structurally well-suited to vertical expansion</li>
                            <li><strong>Why add on:</strong> Lot size and neighborhood quality far exceed what is available at comparable prices elsewhere in MoCo; adding on preserves the location at a fraction of moving cost</li>
                        </ul>
                    </div>
                    <div className="era-card">
                        <h3>🏢 Newer Townhomes &amp; Pike &amp; Rose Corridor — Limited But Targeted Addition Scope</h3>
                        <ul>
                            <li><strong>Neighborhoods:</strong> Pike &amp; Rose corridor, White Flint area, newer attached-home communities</li>
                            <li><strong>Typical home:</strong> 1,800–2,800 sq ft townhome or attached home, 3–4 stories; built 2000s–2020s</li>
                            <li><strong>Most common addition scope:</strong> Rooftop deck addition, lower-level expansion, bump-out of main living level; HOA review required in most townhome communities</li>
                            <li><strong>Structural conditions:</strong> Modern construction with engineered lumber framing; structural additions require engineering review of existing floor and roof systems</li>
                            <li><strong>Addition potential:</strong> Moderate — constrained by townhome lot size and HOA covenants but targeted expansions are achievable</li>
                            <li><strong>HOA:</strong> Most Pike &amp; Rose area townhome communities have HOA covenants requiring ARC approval for exterior modifications — managed in-house by DMV General Contracting Group</li>
                        </ul>
                    </div>
                </div>

                <h2>Home Addition Types We Build in North Bethesda, MD</h2>
                <div className="addition-grid">
                    <div className="addition-card"><div className="a-tag">Most Transformative</div><div className="a-icon">🏠</div><h3>Second-Story Addition — Ranch to Two-Story</h3><p>The most impactful addition type in North Bethesda — converting a 1950s–1970s ranch into a full two-story home by adding a complete second floor above the existing single-level footprint. DMV General Contracting Group&apos;s structural engineers assess the existing foundation and bearing walls before design begins, confirming load capacity and specifying any reinforcement needed. The completed second story is designed to continue the existing roofline profile so the home reads as originally two-story from the street.</p><div className="addition-meta"><span><strong>Size:</strong> 700–1,800 sq ft</span><span><strong>Cost:</strong> $220,000 – $450,000+</span><span><strong>Timeline:</strong> 7–12 months</span></div></div>
                    <div className="addition-card"><div className="a-tag">Most Requested</div><div className="a-icon">🛏️</div><h3>Master Suite Addition</h3><p>North Bethesda&apos;s older ranches and colonials were frequently built with primary bedrooms that fall well short of today&apos;s expectations. A master suite addition adds a dedicated primary bedroom wing with walk-in closet, spa-caliber bathroom, and the scale that North Bethesda&apos;s market now expects — designed to integrate with the existing home&apos;s roofline and exterior materials so the addition reads as a natural part of the original structure.</p><div className="addition-meta"><span><strong>Size:</strong> 400–750 sq ft</span><span><strong>Cost:</strong> $150,000 – $310,000+</span><span><strong>Timeline:</strong> 5–8 months</span></div></div>
                    <div className="addition-card"><div className="a-tag">Highest Family Impact</div><div className="a-icon">🛋️</div><h3>Family Room / Great Room Addition</h3><p>A rear-of-home family room or great room addition that extends the main living level into the rear yard — vaulted ceilings, large windows or sliding glass doors, and open connection to the existing kitchen or dining room. DMV General Contracting Group designs North Bethesda family room additions for seamless interior connection — matching flooring, ceiling height, and trim profile to the existing home.</p><div className="addition-meta"><span><strong>Size:</strong> 300–650 sq ft</span><span><strong>Cost:</strong> $130,000 – $260,000</span><span><strong>Timeline:</strong> 4–7 months</span></div></div>
                    <div className="addition-card"><div className="a-tag">Single Room</div><div className="a-icon">🚪</div><h3>Room Addition</h3><p>A new room built onto the side or rear of your North Bethesda home — fully integrated with the existing structure, roofline, and interior layout. Used as a home office, additional bedroom, guest room, or playroom depending on the household&apos;s needs. DMV General Contracting Group performs a full MoCo setback review at the consultation to confirm the buildable envelope before design begins.</p><div className="addition-meta"><span><strong>Size:</strong> 200–500 sq ft</span><span><strong>Cost:</strong> $120,000 – $230,000</span><span><strong>Timeline:</strong> 4–7 months</span></div></div>
                    <div className="addition-card"><div className="a-tag">Targeted Expansion</div><div className="a-icon">📐</div><h3>Bump-Out Addition</h3><p>A small but targeted extension of an existing room — 2–10 feet out from an exterior wall — that solves a specific space problem without the cost of a full addition. Common applications include expanding a kitchen for an island or breakfast nook, widening a primary bathroom, or extending a dining room. Built on a cantilevered or shallow perimeter foundation. Fast, cost-effective, and architecturally seamless.</p><div className="addition-meta"><span><strong>Size:</strong> 50–300 sq ft</span><span><strong>Cost:</strong> $45,000 – $120,000</span><span><strong>Timeline:</strong> 2–4 months</span></div></div>
                    <div className="addition-card"><div className="a-tag">Full Living Space</div><div className="a-icon">🏡</div><h3>In-Law / Guest Suite Addition</h3><p>A self-contained guest or in-law suite addition — bedroom, full bathroom, kitchenette, and separate entrance option — added as an integrated wing of the main residence. North Bethesda&apos;s generous lots in older neighborhoods provide meaningful rear or side footprint for an in-law suite addition that does not read as a detached structure from the street. All permits filed with MoCo DPS.</p><div className="addition-meta"><span><strong>Size:</strong> 350–750 sq ft</span><span><strong>Cost:</strong> $150,000 – $290,000+</span><span><strong>Timeline:</strong> 5–8 months</span></div></div>
                </div>

                <h2>Permits for North Bethesda Home Additions — MoCo DPS at 2425 Reedie Drive</h2>
                <div className="local-box">
                    <h3>📋 North Bethesda Permit Process — What DMV General Contracting Group Manages In-House</h3>
                    <ul>
                        <li><strong>North Bethesda is unincorporated Montgomery County — all permits file with MoCo DPS:</strong> Unlike Kensington, Garrett Park, Gaithersburg, or Rockville, North Bethesda has no separate municipal permit office. All addition building permits, trade permits, and inspections go through MoCo DPS at 2425 Reedie Drive, Wheaton.</li>
                        <li><strong>Zoning and setback review — first step before design:</strong> DMV General Contracting Group performs a full zoning and setback review for every North Bethesda addition project at the free consultation — confirming how large the addition can be, where it can be placed, and whether any FAR constraints apply.</li>
                        <li><strong>Architectural drawings and structural engineering — required for all additions:</strong> MoCo DPS requires permit-ready architectural drawings and stamped structural engineering documents for all addition permits. DMV General Contracting Group&apos;s in-house architects and structural engineers prepare both.</li>
                        <li><strong>Trade permits — electrical, plumbing, HVAC:</strong> Each trade permit is pulled separately from MoCo DPS. For older 1950s–1970s homes, addition scope frequently includes an electrical panel upgrade from 100-amp to 200-amp service — managed in-house.</li>
                        <li><strong>HOA review for townhome communities:</strong> Newer North Bethesda townhome communities near the Pike &amp; Rose corridor may require ARC approval for exterior modifications. DMV General Contracting Group confirms HOA requirements and manages ARC submissions in-house where required.</li>
                        <li><strong>MoCo DPS permit timeline:</strong> Addition permit review typically runs 6–10 weeks for single-family projects; second-story additions with full structural packages may run 8–12 weeks. DMV General Contracting Group tracks status and manages all correspondence — you do not contact MoCo DPS.</li>
                    </ul>
                </div>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="permit-table">
                            <thead><tr><th>Approval Type</th><th>Required For</th><th>Filed With</th></tr></thead>
                            <tbody>
                                <tr><td>Zoning / Setback Review</td><td>All additions</td><td>MoCo DPS — confirmed at free consultation</td></tr>
                                <tr><td>Building Permit</td><td>All additions</td><td>MoCo DPS, 2425 Reedie Drive, Wheaton</td></tr>
                                <tr><td>Architectural Drawings</td><td>All additions</td><td>In-house — included in DMV-GC contract</td></tr>
                                <tr><td>Structural Engineering</td><td>Second-story, load-bearing, large additions</td><td>In-house — stamped, included in contract</td></tr>
                                <tr><td>Electrical Permit</td><td>All additions with new circuits; panel upgrades</td><td>MoCo DPS — in-house electricians</td></tr>
                                <tr><td>Plumbing Permit</td><td>Additions with bathrooms or kitchenettes</td><td>MoCo DPS — in-house plumbers</td></tr>
                                <tr><td>HVAC Permit</td><td>All conditioned additions</td><td>MoCo DPS — in-house HVAC team</td></tr>
                                <tr><td>HOA ARC Review</td><td>Townhome communities where covenants require</td><td>HOA board — managed in-house by DMV-GC</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Home Addition Cost in North Bethesda, MD</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead><tr><th>Addition Type</th><th>North Bethesda Cost Range</th><th>Size</th><th>Timeline</th></tr></thead>
                            <tbody>
                                <tr><td>Bump-Out Addition</td><td>$45,000 – $120,000</td><td>50–300 sq ft</td><td>2–4 months</td></tr>
                                <tr><td>Sunroom / 3-Season Room</td><td>$60,000 – $110,000</td><td>150–350 sq ft</td><td>3–4 months</td></tr>
                                <tr><td>Four-Season / Conditioned Sunroom</td><td>$90,000 – $150,000</td><td>200–400 sq ft</td><td>4–5 months</td></tr>
                                <tr><td>Single Room Addition</td><td>$120,000 – $230,000</td><td>200–500 sq ft</td><td>4–7 months</td></tr>
                                <tr><td>Family Room / Great Room Addition</td><td>$130,000 – $260,000</td><td>300–650 sq ft</td><td>4–7 months</td></tr>
                                <tr><td>In-Law / Guest Suite Addition</td><td>$150,000 – $290,000+</td><td>350–750 sq ft</td><td>5–8 months</td></tr>
                                <tr><td>Master Suite Addition</td><td>$150,000 – $310,000+</td><td>400–750 sq ft</td><td>5–8 months</td></tr>
                                <tr><td>Second-Story Addition (Full)</td><td>$220,000 – $450,000+</td><td>700–1,800 sq ft</td><td>7–12 months</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>North Bethesda ranch-to-two-story — the math:</strong> A typical North Bethesda 1960s ranch sells for $700,000–$950,000. A full second-story addition — converting that ranch to a 2,800–3,600 sq ft two-story home — runs $220,000–$350,000 for most North Bethesda properties. The completed home appraises and sells at $1.1M–$1.4M+ in North Bethesda&apos;s current market. That math is why second-story additions are the most requested addition type DMV General Contracting Group builds in North Bethesda.
                </div>

                <h2>Our Home Addition Process in North Bethesda</h2>
                <div className="steps">
                    <div className="step"><div className="step-num">1</div><div className="step-content"><h3>Free In-Home Consultation — Zoning Review, Housing Era Assessment, Feasibility</h3><p>We visit your North Bethesda home and assess which addition type fits your lot, your home&apos;s structural era, and your household&apos;s needs. For older ranches and split-levels, we identify load-bearing wall locations, assess the electrical panel, and check the foundation. For newer townhomes, we identify HOA requirements and applicable setbacks. Full MoCo zoning and setback review included. No charge, no obligation.</p></div></div>
                    <div className="step"><div className="step-num">2</div><div className="step-content"><h3>Architectural Design &amp; 3D Renderings</h3><p>Our in-house architects develop full design documentation — floor plans, exterior elevations, interior layout, and 3D renderings. For ranch-to-two-story additions, the new second-story roofline is designed to read as originally two-story, not as a floor added on top of a ranch. Construction team reviews every design choice in parallel to confirm buildability.</p></div></div>
                    <div className="step"><div className="step-num">3</div><div className="step-content"><h3>Structural Engineering — Foundation to Roof</h3><p>Our in-house structural engineers assess the existing foundation and bearing wall structure, calculate loads, and specify all beams, headers, and connections. For second-story additions, foundation adequacy is the first assessment. All structural documents stamped and included in the MoCo DPS permit package.</p></div></div>
                    <div className="step"><div className="step-num">4</div><div className="step-content"><h3>MoCo DPS Permit Submission — 2425 Reedie Drive</h3><p>We prepare and submit the complete MoCo DPS permit package and manage all county correspondence. MoCo DPS review typically runs 6–10 weeks for room additions and 8–12 weeks for second-story additions. You do not contact the county at any point.</p></div></div>
                    <div className="step"><div className="step-num">5</div><div className="step-content"><h3>Foundation, Framing &amp; Exterior Shell</h3><p>Construction begins with site preparation and structural framing. For second-story additions, the existing roof is removed and second-story framing rises from the original bearing walls. All framing inspected by MoCo DPS before closing. Exterior clad in materials that match the existing home.</p></div></div>
                    <div className="step"><div className="step-num">6</div><div className="step-content"><h3>Mechanical Rough-In, Interior Finishes &amp; Final Inspections</h3><p>Licensed electricians, plumbers, and HVAC technicians extend all systems — including electrical panel upgrade to 200-amp where required. All rough-in inspected by MoCo DPS. Interior finishes and the connection to the existing home completed. All final inspections scheduled, punch list walkthrough, and written warranty documentation.</p></div></div>
                </div>

                <h2>What North Bethesda Homeowners Say About DMV General Contracting Group</h2>
                <div className="review-grid">
                    {reviewData.map((review, index) => (
                        <div className="review-card" key={index}>
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-author">— Verified Homeowner · <span className="review-location">{review.location}</span></div>
                        </div>
                    ))}
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified homeowner reviews.</strong> North Bethesda homeowners trust DMV General Contracting Group — their neighbor at 11810 Grand Park Ave — for home additions that assess the structural era of the home before design begins, manage the full MoCo DPS permit process without the homeowner contacting the county, and deliver the ranch-to-two-story transformations that North Bethesda&apos;s 1950s–1970s housing stock is uniquely suited for.</p>
                </div>

                <div className="cta-banner">
                    <h2>Find Out What Addition Is Possible on Your North Bethesda Property</h2>
                    <p>Our architects and permit specialists — based right here in North Bethesda — will visit your home, review MoCo zoning and setbacks, assess your home&apos;s structural era, and tell you exactly what is buildable and at what cost. No charge, no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free Addition Consultation →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Serving All North Bethesda, MD Neighborhoods for Home Additions</h2>
                <div className="areas-grid">
                    <span className="area-pill">Luxmanor</span>
                    <span className="area-pill">Tilden Woods</span>
                    <span className="area-pill">Garrett Park Estates</span>
                    <span className="area-pill">Strathmore</span>
                    <span className="area-pill">Old Georgetown Estates</span>
                    <span className="area-pill">Pike &amp; Rose Corridor</span>
                    <span className="area-pill">White Flint</span>
                    <span className="area-pill">Cabin John Park</span>
                    <span className="area-pill">Hungerford</span>
                    <span className="area-pill">Woodmont Country Club Area</span>
                </div>

                <h2>Frequently Asked Questions — Home Additions in North Bethesda, MD</h2>
                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <details className="faq-item" key={index} open={index === 0 ? true : undefined}>
                            <summary className="faq-q">{faq.question}</summary>
                            <div className="faq-a">{faq.answer}</div>
                        </details>
                    ))}
                </div>

                <div className="internal-links">
                    <h2>Explore Our Other Services in North Bethesda, MD</h2>
                    <ul>
                        <li><Link href="/service/design-build/north-bethesda-md">Design-Build Contractor in North Bethesda, MD</Link></li>
                        <li><Link href="/service/adu/north-bethesda-md">ADU Construction in North Bethesda, MD</Link></li>
                        <li><Link href="/service/kitchen-remodeling/north-bethesda-md">Kitchen Remodeling in North Bethesda, MD</Link></li>
                        <li><Link href="/service/bathroom-remodeling/north-bethesda-md">Bathroom Remodeling in North Bethesda, MD</Link></li>
                        <li><Link href="/service/basement-remodeling/north-bethesda-md">Basement Remodeling in North Bethesda, MD</Link></li>
                        <li><Link href="/service/siding-installation/north-bethesda-md">Siding Installation in North Bethesda, MD</Link></li>
                        <li><Link href="/service/decks/north-bethesda-md">Deck Building in North Bethesda, MD</Link></li>
                        <li><Link href="/service/flooring-remodeling/north-bethesda-md">Flooring Installation in North Bethesda, MD</Link></li>
                        <li><Link href="/service/carpet-installation/north-bethesda-md">Carpet Installation in North Bethesda, MD</Link></li>
                    </ul>
                </div>

                <div className="cta-banner">
                    <h2>Ready to Add On to Your North Bethesda Home?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free consultation. We are based in North Bethesda — your neighbor at 11810 Grand Park Ave. In-house architects, MoCo DPS permit team, ranch-to-two-story specialists. MHIC licensed. 1-year warranty.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Addition Consultation in North Bethesda →</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
};

export default NorthBethesdaMD;
