import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionBody from 'react-bootstrap/AccordionBody';
import "@/app/service/[slug]/pages/bathroom-remodeling/location-landing-pages/city-service-style.scss";
import "./style.scss";

export default function BathroomChevyChaseMD() {
    const faqData = [
        {
            question: "How much does a bathroom remodel cost in Chevy Chase, MD?",
            answer: "Bathroom remodeling in Chevy Chase typically costs $8,000\u2013$120,000+ depending on bathroom type, scope, and finishes. A powder room or half-bath starts around $8,000\u2013$18,000. A hall or guest bath remodel runs $18,000\u2013$35,000. A tub-to-shower conversion runs $12,000\u2013$25,000. A primary (master) bath renovation costs $35,000\u2013$70,000, and a luxury primary bath can reach $70,000\u2013$120,000+. A new basement bathroom runs $20,000\u2013$45,000. DMV-GC Group provides free in-home consultations with detailed estimates specific to your home."
        },
        {
            question: "Is DMV-GC Group licensed to do bathroom remodeling in Chevy Chase, MD?",
            answer: "Yes. DMV-GC Group holds a Maryland Home Improvement Contractor (MHIC) license issued by the Maryland Home Improvement Commission \u2014 the license required to legally perform residential renovation work in Chevy Chase and throughout Maryland. We also hold a DC DLCP license for cross-border work. We are fully bonded and insured, and provide a 1-year workmanship warranty on every bathroom remodeling project. You can verify our MHIC number before hiring."
        },
        {
            question: "Do I need a permit to remodel a bathroom in Chevy Chase / Montgomery County?",
            answer: "In most cases, yes. Any bathroom remodel that involves moving plumbing, adding or relocating electrical, or making structural changes requires permits. In Chevy Chase, building and electrical permits are issued by Montgomery County DPS and plumbing through WSSC Water. Importantly, \u201CChevy Chase\u201D is not one town but several incorporated municipalities \u2014 Chevy Chase Village, the Town of Chevy Chase, Sections 3 and 5, Martin\u2019s Additions, Chevy Chase View, and North Chevy Chase \u2014 and several (notably Chevy Chase Village) require their own additional building, architectural, or tree-removal review on top of county permits. These mostly affect exterior work and trees rather than interior bathroom remodels, but DMV-GC Group confirms exactly which municipality and approvals apply to your address and handles every permit for you."
        },
        {
            question: "Can DMV-GC Group convert my tub to a walk-in shower?",
            answer: "Yes. Tub-to-shower conversions are a popular project in Chevy Chase\u2019s older homes, where original or retrofitted bathrooms often have tubs that go unused. We remove the existing tub, rebuild the wet area with a proper bonded waterproofing system, and install a custom tile or stone walk-in shower \u2014 including high-end frameless glass, niches, benches, and curbless accessible designs \u2014 while respecting the character and scale of these early-1900s homes. Most conversions are completed in 2\u20133 weeks."
        },
        {
            question: "Can DMV-GC Group add a bathroom in my basement or primary suite?",
            answer: "Yes. Adding a bathroom is a high-value upgrade for Chevy Chase homes \u2014 many of the area\u2019s large early-1900s houses have surprisingly few bathrooms for their size, so a primary-suite ensuite, a main-level powder room, or a basement bath makes them far more livable. We assess how the older home is built before planning the most efficient plumbing rough-in, then handle drainage, ventilation, waterproofing, the full Montgomery County DPS and WSSC permit process, and any village or town review that applies."
        },
        {
            question: "How long does a bathroom remodel take in Chevy Chase, MD?",
            answer: "Most bathroom renovations in Chevy Chase take 2\u20135 weeks from construction start to completion. A powder room refresh can be done in 1\u20132 weeks. A tub-to-shower conversion takes 2\u20133 weeks. A full primary bath renovation takes 4\u20136 weeks, and a new basement bathroom typically takes 3\u20135 weeks. Permit processing through Montgomery County DPS and WSSC usually adds 2\u20134 weeks before construction begins. DMV-GC Group factors realistic timelines into every project plan from the start."
        }
    ];

    return (
        <div className="city-service-detail-page bathroom-chevy-chase-md">
            <div className="container">
                {/* BREADCRUMB */}
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>&rsaquo;</span>
                    <Link href="/services">Services</Link><span>&rsaquo;</span>
                    <Link href="/service/bathroom-remodeling">Bathroom Remodeling</Link><span>&rsaquo;</span>
                    Chevy Chase, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Chevy Chase, MD</div>
                    <h1>Bathroom Remodeling Contractor in Chevy Chase, MD</h1>
                    <div className="hero-meta">
                        <span className="badge red">⭐ 4.9 Rating &middot; 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed &amp; Insured</span>
                        <span className="badge">✓ 1-Year Warranty</span>
                        <span className="badge">✓ Free In-Home Consultation</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                {/* MHIC BANNER */}
                <div className="dlcp-banner">
                    <div className="icon">🏛️</div>
                    <div>
                        <h3>MHIC-Licensed Home Improvement Contractor for Chevy Chase, MD</h3>
                        <p>DMV-GC Group holds a Maryland Home Improvement Contractor (MHIC) license issued by the Maryland Home Improvement Commission &mdash; the license required to legally perform residential bathroom renovation work in Chevy Chase and throughout Montgomery County. We are fully bonded, insured, and back every project with a 1-year workmanship warranty. Always verify an MHIC number before hiring any bathroom contractor in Maryland.</p>
                    </div>
                </div>

                {/* INTRO */}
                <div className="intro-box">
                    Looking for a <strong>bathroom remodeling contractor in Chevy Chase, MD</strong>? Chevy Chase is one of the Washington region&apos;s most prestigious historic communities &mdash; a collection of leafy, tree-lined municipalities developed from the 1890s by the Chevy Chase Land Company as one of America&apos;s first streetcar suburbs along Connecticut Avenue. Its large Colonial Revivals, Tudors, Queen Anne Victorians, and foursquares are beautiful but often have bathrooms that are original, retrofitted, or undersized for the home&apos;s scale. DMV-GC Group&apos;s MHIC-licensed design-build team specializes in high-end, period-sensitive renovation &mdash; modernizing systems while respecting a home&apos;s era, navigating Montgomery County DPS and WSSC permits (plus the individual village and town reviews that &quot;Chevy Chase&quot; entails), and delivering the full bathroom remodel from design through final inspection under one contract.
                </div>

                {/* TRUST BAR */}
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏛️</div>
                        <strong>MHIC Licensed</strong>
                        <span>Properly licensed for Maryland renovation work</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>County &amp; Village Permits</strong>
                        <span>DPS, WSSC &amp; village/town review</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9-Star Rated</strong>
                        <span>97+ verified homeowner reviews</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🛡️</div>
                        <strong>Fully Insured</strong>
                        <span>Bonded, insured, 1-year warranty</span>
                    </div>
                </div>

                {/* SERVICES */}
                <h2>Bathroom Remodeling Services We Offer in Chevy Chase, MD</h2>
                <p>
                    Chevy Chase&apos;s housing is overwhelmingly older, high-end, character-rich detached homes &mdash; large Colonial Revivals, Tudors, Queen Anne Victorians, foursquares, and bungalows built largely between the 1890s and 1930s as the streetcar suburb grew, with some mid-century and newer infill. Many still have original or dated bathrooms, older plumbing and wiring, plaster walls, and layouts modest relative to the home&apos;s scale. DMV-GC Group&apos;s MHIC-licensed team specializes in sensitively renovating, modernizing, and adding bathrooms in these homes throughout Chevy Chase and Montgomery County.
                </p>

                <div className="service-grid">
                    <div className="service-item">Master / Primary Bathroom Renovation</div>
                    <div className="service-item">Hall &amp; Guest Bathroom Remodel</div>
                    <div className="service-item">Powder Room / Half-Bath Remodel</div>
                    <div className="service-item">Tub-to-Shower Conversion</div>
                    <div className="service-item">Walk-In &amp; Curbless Shower Installation</div>
                    <div className="service-item">Basement Bathroom Addition</div>
                    <div className="service-item">Accessible / Aging-in-Place Bathroom</div>
                    <div className="service-item">Custom Tile &amp; Shower Waterproofing</div>
                    <div className="service-item">Vanity, Countertop &amp; Fixture Replacement</div>
                    <div className="service-item">Period-Sensitive &amp; Historic-Home Renovation</div>
                    <div className="service-item">Bathroom Layout Redesign &amp; Space Planning</div>
                    <div className="service-item">Older-Home Plumbing &amp; Wiring Updates</div>
                    <div className="service-item">Montgomery County DPS &amp; WSSC Permit Processing</div>
                </div>

                {/* AUTHOR BOX */}
                <div className="author-box">
                    <div className="author-avatar">🛁</div>
                    <div className="author-info">
                        <h4>About DMV-GC Group &mdash; Chevy Chase&apos;s MHIC-Licensed Bathroom Remodeling Contractor</h4>
                        <p>DMV-GC Group holds a Maryland Home Improvement Contractor (MHIC) license issued by the Maryland Home Improvement Commission, and a DC DLCP license for cross-border work. Our team has renovated bathrooms in older, high-end homes across Montgomery County &mdash; exactly the kind of work Chevy Chase&apos;s Colonial Revivals, Tudors, and Victorians call for. We understand the local permitting structure: building and electrical permits through Montgomery County DPS, plumbing through WSSC Water, and the additional building, architectural, or tree review that individual Chevy Chase municipalities &mdash; especially Chevy Chase Village &mdash; require for certain work. We carry full general liability insurance and back every bathroom remodel with a 1-year workmanship warranty.</p>
                        <div className="author-creds">
                            <span className="cred">MHIC Licensed</span>
                            <span className="cred">DLCP Licensed</span>
                            <span className="cred">Fully Insured</span>
                            <span className="cred">Bonded</span>
                            <span className="cred">4.9★ Rated</span>
                            <span className="cred">1-Year Warranty</span>
                        </div>
                    </div>
                </div>

                {/* HOUSING STOCK */}
                <h2>Bathroom Remodeling for Chevy Chase&apos;s Historic Housing Stock</h2>
                <p>
                    More than anything else, Chevy Chase&apos;s residential character is defined by its grand early-streetcar-suburb homes &mdash; large Colonial Revivals, Tudors, Queen Anne Victorians, and foursquares built mostly between the 1890s and 1930s, with mid-century and newer infill mixed in. These are substantial, high-end homes, but their bathrooms are frequently original, retrofitted, or modest relative to the house. Understanding how they were originally plumbed, wired, and framed &mdash; and how to renovate them sensitively at a high level of finish &mdash; is essential to a successful bathroom project, and it&apos;s where DMV-GC Group&apos;s experience makes a real difference.
                </p>

                <div className="rowhouse-box">
                    <h3>🛁 What Makes Chevy Chase Bathrooms Different</h3>
                    <ul>
                        <li><strong>Bathrooms retrofitted into older homes</strong> &mdash; many homes predate modern plumbing, so original baths are tucked into awkward or undersized spaces that benefit from a smart, high-end redesign</li>
                        <li><strong>Few baths for the home&apos;s size</strong> &mdash; large early-1900s houses often have surprisingly few bathrooms, so adding an ensuite, powder room, or basement bath is a high-return upgrade</li>
                        <li><strong>Aging plumbing &amp; wiring</strong> &mdash; galvanized supply lines, cast-iron drain stacks, and outdated electrical are common in homes this age and often need updating during a remodel</li>
                        <li><strong>Plaster walls &amp; older subfloors</strong> &mdash; period construction calls for careful demolition and the right substrate prep so new tile and waterproofing last</li>
                        <li><strong>High-end, period-sensitive finishes</strong> &mdash; Chevy Chase homeowners expect luxury results that modernize systems while honoring a home&apos;s classic character</li>
                        <li><strong>A patchwork of jurisdictions</strong> &mdash; &quot;Chevy Chase&quot; spans several villages and towns, some (like Chevy Chase Village) with their own permit, architectural, and tree review we account for from the start</li>
                    </ul>
                </div>

                {/* TUB TO SHOWER */}
                <h2>Tub-to-Shower Conversions, Walk-In Showers &amp; Added Bathrooms</h2>
                <p>
                    For Chevy Chase homeowners whose bathrooms feel dated or undersized, three projects deliver the biggest impact: converting an unused tub into a luxurious walk-in shower, upgrading to an accessible aging-in-place layout, or adding a bathroom to a large home that was built with only one or two.
                </p>
                <p>
                    <strong>Tub-to-shower conversions</strong> are popular throughout Chevy Chase&apos;s older homes, where original tubs often go unused. We remove the existing tub, rebuild the wet area with a proper bonded waterproofing system, and install a custom tile or stone walk-in shower &mdash; with frameless glass, niches, and bench seating &mdash; designed to suit the character and high finish level of the home.
                </p>
                <p>
                    <strong>Adding a bathroom</strong> &mdash; whether a basement bath, a primary-suite ensuite, or a main-level powder room &mdash; requires careful planning of plumbing rough-in, drainage, and ventilation, especially in older construction. DMV-GC Group&apos;s team assesses how your home is built before designing the most efficient way to run new lines, then manages the full Montgomery County DPS and WSSC permit process plus any village or town approvals.
                </p>

                <div className="note">
                    ♿ <strong>Aging-in-Place Note:</strong> Chevy Chase has many long-term residents who plan to stay in their homes. We design accessible bathrooms with curbless (zero-threshold) showers, comfort-height fixtures, slip-resistant tile, and reinforced blocking for grab bars &mdash; built to look like a high-end remodel, not a medical retrofit, and sympathetic to an older home&apos;s style. We can also incorporate Universal Design features into any standard renovation on request.
                </div>

                {/* WHY CHOOSE */}
                <h2>Why Chevy Chase Homeowners Choose DMV-GC Group</h2>
                <p>
                    Chevy Chase is a prestigious, leafy, tight-knit set of communities where homeowners are deeply invested in their historic houses and renovate to a high standard rather than move. Bathroom projects here reward a contractor who respects a home&apos;s era and delivers luxury results: whether it&apos;s a Colonial Revival getting a refined primary suite, a Victorian&apos;s awkward original bath reworked, or a Tudor updated for long-term living, a beautifully executed bathroom is one of the most impactful upgrades for both daily comfort and resale value.
                </p>
                <p>
                    Chevy Chase&apos;s permitting has a wrinkle that catches many out-of-area contractors off guard: &quot;Chevy Chase&quot; is not a single town but several incorporated municipalities &mdash; Chevy Chase Village, the Town of Chevy Chase, Sections 3 and 5, Martin&apos;s Additions, Chevy Chase View, and North Chevy Chase &mdash; plus unincorporated areas. Building and electrical permits run through <strong>Montgomery County DPS</strong> and plumbing through <strong>WSSC Water</strong>, but several of these municipalities (notably <strong>Chevy Chase Village</strong>) require their own additional building, architectural, or tree review on top of county permits. DMV-GC Group holds a proper MHIC license, knows exactly which approvals apply to your address, and handles them all, so nothing about your remodel is left to chance or unpermitted.
                </p>

                <div className="highlight">
                    <p>🏡 <strong>Chevy Chase Market Insight:</strong> Chevy Chase is one of the wealthiest communities in the country, with single-family home values commonly running from around $1 million into the $3&ndash;5 million range in Chevy Chase Village and the most established sections, plus high-end condos in Friendship Heights. In a market this discerning, a luxury, period-sensitive bathroom that modernizes systems without losing the home&apos;s character is both expected and one of the highest-ROI improvements a homeowner can make &mdash; and a frequent dealmaker at resale.</p>
                </div>

                {/* NEIGHBORHOODS */}
                <h2>Serving the Communities of Chevy Chase for Bathroom Remodeling</h2>
                <p>
                    DMV-GC Group completes <strong>bathroom remodeling projects throughout Chevy Chase, MD</strong> &mdash; across the several villages and towns that share the name. Our team understands the historic homes, plumbing, and the specific permitting and review rules of each community:
                </p>
                <div className="neighborhood-grid">
                    <div className="neighborhood-card">
                        <h3>Chevy Chase Village</h3>
                        <p>The original, most prestigious enclave of grand early-1900s Colonial Revivals and Tudors. High-end, period-sensitive renovations &mdash; and we handle the Village&apos;s own building, architectural, and tree review.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Town of Chevy Chase (Section 4)</h3>
                        <p>Established streets of large historic homes. Luxury primary-suite renovations and careful updates to original plumbing and layouts are common here.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Chevy Chase Sections 3 &amp; 5</h3>
                        <p>Incorporated villages of early-20th-century homes. Full bathroom redesigns, ensuite additions, and tub-to-shower conversions are frequently requested.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Martin&apos;s Additions</h3>
                        <p>A small village of charming older homes near the DC line. Period-sensitive hall-bath and powder-room remodels and accessibility upgrades.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Chevy Chase View &amp; North Chevy Chase</h3>
                        <p>Leafy residential communities of established homes. Modernizing dated baths, adding bathrooms, and updating older systems are popular projects.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Friendship Heights &amp; Somerset</h3>
                        <p>Adjacent communities mixing high-rise condos with single-family homes. Condo-friendly remodels coordinated with building management, plus full home-bath renovations.</p>
                    </div>
                </div>

                {/* COST */}
                <h2>Bathroom Remodel Cost in Chevy Chase, MD</h2>
                <p>
                    Bathroom remodeling costs in Chevy Chase reflect the area&apos;s older, high-end homes &mdash; period-sensitive remodels, updating original plumbing and wiring, and reconfiguring historic layouts are common, and projects here often land in the upper tiers given the level of finish homeowners expect. The ranges below are a realistic starting framework for <strong>bathroom remodeling in Chevy Chase, MD</strong>; a detailed in-home estimate is the best way to price your specific project:
                </p>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>Remodel Type</th>
                                    <th>Typical Cost Range</th>
                                    <th>What&apos;s Included</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Powder Room / Half-Bath</td>
                                    <td>$8,000 &ndash; $18,000</td>
                                    <td>New vanity, toilet, flooring, lighting, fixtures, paint, ventilation</td>
                                </tr>
                                <tr>
                                    <td>Hall / Guest Bath Remodel</td>
                                    <td>$18,000 &ndash; $35,000</td>
                                    <td>New tub or shower, tile, vanity, toilet, flooring, fixtures, exhaust fan</td>
                                </tr>
                                <tr>
                                    <td>Tub-to-Shower Conversion</td>
                                    <td>$12,000 &ndash; $25,000</td>
                                    <td>Tub removal, walk-in shower, full waterproofing, tile, glass, fixtures</td>
                                </tr>
                                <tr>
                                    <td>Primary (Master) Bath Renovation</td>
                                    <td>$35,000 &ndash; $70,000</td>
                                    <td>Custom shower, double vanity, soaking tub, tile, lighting, layout work</td>
                                </tr>
                                <tr>
                                    <td>Luxury Primary Bath</td>
                                    <td>$70,000 &ndash; $120,000+</td>
                                    <td>Spa shower, freestanding tub, premium stone/tile, heated floors, custom cabinetry</td>
                                </tr>
                                <tr>
                                    <td>Basement / Added Bathroom</td>
                                    <td>$20,000 &ndash; $45,000</td>
                                    <td>New plumbing rough-in, drainage, fixtures, waterproofing, permits, full build-out</td>
                                </tr>
                                <tr>
                                    <td>Accessible / Aging-in-Place Bath</td>
                                    <td>$25,000 &ndash; $50,000</td>
                                    <td>Curbless shower, grab-bar blocking, comfort-height fixtures, slip-resistant tile</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Chevy Chase Permit Note:</strong> &quot;Chevy Chase&quot; covers several municipalities, and which one your home sits in determines the review process. Building and electrical permits go through Montgomery County DPS and plumbing through WSSC Water everywhere, but municipalities like Chevy Chase Village require their own additional building, architectural, or tree-removal approval &mdash; most relevant for exterior work and trees. Standard interior bathroom permits typically take 2&ndash;4 weeks to process; village or town review can add time. DMV-GC Group confirms exactly which jurisdiction and approvals apply to your address, pulls every permit, and builds realistic timelines into your project schedule.
                </div>

                {/* MID PAGE CTA */}
                <div className="cta-banner">
                    <h2>Get a Free Bathroom Remodeling Estimate in Chevy Chase, MD</h2>
                    <p>We&apos;ll visit your Chevy Chase home, assess your bathroom&apos;s potential, and provide a detailed itemized estimate &mdash; at no cost and no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free In-Home Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                {/* PROCESS */}
                <h2>Our Bathroom Remodeling Process in Chevy Chase, MD</h2>
                <p>
                    Our design-build process is adapted to Chevy Chase&apos;s older, high-end homes and to Montgomery County&apos;s permit and inspection requirements, plus the individual village and town reviews that apply across Chevy Chase&apos;s communities.
                </p>
                <div className="steps">
                    {[
                        {num: 1, title: "Free In-Home Consultation & Site Assessment", desc: "We visit your Chevy Chase home, assess your existing bathroom, discuss your goals and budget, and \u2014 for added bathrooms or layout changes \u2014 review how your home is built (slab, crawlspace, or basement) to determine what's feasible for plumbing and drainage. No cost, no obligation."},
                        {num: 2, title: "Plumbing, Ventilation & Waterproofing Plan", desc: "We evaluate your existing supply and drain lines, exhaust ventilation, and substrate \u2014 and in Chevy Chase's older homes, the condition of original plumbing, wiring, and plaster \u2014 then plan the rebuild around a proper waterproofing system so the bathroom lasts decades, not years."},
                        {num: 3, title: "Custom Design, Layout & Material Selection", desc: "Our in-house designers develop detailed layouts and 3D renderings \u2014 whether that's maximizing a compact hall bath, designing a spa-style primary suite, or adding a new bathroom. We guide you through tile, vanity, fixture, glass, and lighting selections."},
                        {num: 4, title: "Permits \u2014 Montgomery County DPS, WSSC & Village/Town Review", desc: "We file all required permits \u2014 building and electrical through Montgomery County DPS, and plumbing through WSSC Water \u2014 and coordinate any additional village or town review (such as Chevy Chase Village's building, architectural, or tree approval) that applies to your address. Our permit team handles all correspondence and inspection scheduling throughout the project."},
                        {num: 5, title: "Construction \u2014 Demo Through Final Finishes", desc: "Our licensed in-house crews handle all demolition, plumbing, electrical, waterproofing, tile, cabinetry, glass, flooring, and final finishes \u2014 coordinated by a dedicated project manager who keeps your project on schedule and your home protected."},
                        {num: 6, title: "Final Inspection, Walkthrough & 1-Year Warranty", desc: "We manage all required county inspections, conduct a thorough walkthrough with you, address every punch-list item, and activate your 1-year workmanship warranty before closing the project."}
                    ].map(step => (
                        <div className="step" key={step.num}>
                            <div className="step-num">{step.num}</div>
                            <div className="step-content">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* REVIEWS */}
                <h2>What Chevy Chase Homeowners Say About DMV-GC Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;Our Chevy Chase Village Colonial had a primary bath that was tiny for the size of the house. DMV-GC Group reworked the layout into a true spa suite &mdash; beautiful, modern, but completely in keeping with the period. They handled the county permits and the Village&apos;s own approvals too.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Chevy Chase Village</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;Our 1920s Tudor&apos;s only upstairs bathroom was original and awkward. They reconfigured it into a beautiful walk-in shower setup without losing an ounce of the home&apos;s character. Careful, respectful work on an old house &mdash; exactly what we hoped for.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Chevy Chase Section 5</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;We checked the MHIC number before hiring &mdash; DMV-GC Group is properly licensed and insured, which several handymen we talked to were not. The remodel itself was excellent: on time, on budget, and the waterproofing was done the right way.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Martin&apos;s Additions, Chevy Chase</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;When they opened the wall they found rotted framing from years of moisture behind the old tub. They showed us, explained it, and fixed it properly as part of the project &mdash; no surprise add-on fee later. Honest, professional work from start to finish.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Town of Chevy Chase</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews</strong> across Google, Houzz, and Angi. DMV-GC Group is an MHIC-licensed, trusted bathroom remodeling contractor serving homes throughout Chevy Chase and Montgomery County, MD.</p>
                </div>

                {/* SERVICE AREAS */}
                <h2>Serving Chevy Chase and Surrounding Areas for Bathroom Remodeling</h2>
                <div className="areas-grid">
                    <span className="area-pill">Chevy Chase, MD</span>
                    <span className="area-pill">Chevy Chase Village</span>
                    <span className="area-pill">Town of Chevy Chase</span>
                    <span className="area-pill">Section 3 &amp; Section 5</span>
                    <span className="area-pill">Martin&apos;s Additions</span>
                    <span className="area-pill">North Chevy Chase</span>
                    <span className="area-pill">Friendship Heights, MD</span>
                    <span className="area-pill">Somerset, MD</span>
                    <span className="area-pill">Bethesda, MD</span>
                    <span className="area-pill">Kensington, MD</span>
                </div>

                <div className="nearby-box">
                    <h3>Also serving Bethesda, MD &mdash; directly adjacent to Chevy Chase</h3>
                    <p>DMV-GC Group completes bathroom renovations throughout Bethesda, MD, which borders Chevy Chase to the west. Bethesda blends grand older homes with newer construction and downtown condos, and &mdash; like Chevy Chase &mdash; sits in unincorporated Montgomery County for permitting (DPS and WSSC), so knowing the local requirements matters. Our team holds the proper MHIC license and brings the same high-end, design-build process and 1-year warranty to every project. <Link href="/service/bathroom-remodeling/bethesda-md">View our Bethesda, MD bathroom remodeling page &rarr;</Link></p>
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions &mdash; Bathroom Remodeling in Chevy Chase, MD</h2>
                <Accordion defaultActiveKey="0" flush>
                    {faqData.map((faq, index) => (
                        <AccordionItem eventKey={index.toString()} key={index}>
                            <AccordionHeader>{faq.question}</AccordionHeader>
                            <AccordionBody>{faq.answer}</AccordionBody>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* INTERNAL LINKS */}
                <div className="internal-links">
                    <h2>Explore Our Other Remodeling Services in Chevy Chase, MD</h2>
                    <p>DMV-GC Group offers a complete range of home renovation services for Chevy Chase homes and condos:</p>
                    <ul>
                        <li><Link href="/service/kitchen-remodeling/chevy-chase-md">Kitchen Remodeling in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/basement-remodeling">Basement Finishing &amp; Remodeling in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/home-additions">Home Additions in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/design-build">Design-Build Contractor in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/electrical-services">Electrical Services in Chevy Chase, MD</Link></li>
                        <li><Link href="/service/drywall">Drywall &amp; Plaster Repair in Chevy Chase, MD</Link></li>
                    </ul>
                </div>

                {/* FINAL CTA */}
                <div className="cta-banner">
                    <h2>Ready to Remodel Your Chevy Chase Bathroom?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation online. MHIC-licensed and available 7 days a week throughout Chevy Chase and Montgomery County.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Bathroom Estimate in Chevy Chase &rarr;</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>

                {/* SCHEMA JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.dmv-gc.com/#business",
      "name": "DMV-GC Group",
      "alternateName": "DMV General Contracting Group LLC",
      "image": "https://www.dmv-gc.com/logo.png",
      "url": "https://www.dmv-gc.com",
      "telephone": "+12407301292",
      "email": "support@dmv-gc.com",
      "foundingDate": "2018",
      "description": "Licensed design-build general contractor serving Chevy Chase, MD and the greater Montgomery County area. Specializing in bathroom remodeling, master bath renovations, tub-to-shower conversions, basement bathroom additions, and aging-in-place remodels.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11810 Grand Park Ave, Suite 500",
        "addressLocality": "North Bethesda",
        "addressRegion": "MD",
        "postalCode": "20852",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 39.0458,
        "longitude": -77.1139
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Chevy Chase",
          "sameAs": "https://en.wikipedia.org/wiki/Chevy_Chase,_Maryland"
        },
        {"@type": "City", "name": "Bethesda"},
        {"@type": "City", "name": "Friendship Heights"},
        {"@type": "City", "name": "Somerset"},
        {"@type": "City", "name": "Kensington"},
        {"@type": "City", "name": "North Bethesda"},
        {"@type": "AdministrativeArea", "name": "Montgomery County, MD"}
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "MHIC License",
          "credentialCategory": "Maryland Home Improvement Contractor License \u2014 issued by the Maryland Home Improvement Commission"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "DLCP License",
          "credentialCategory": "Washington DC Department of Licensing and Consumer Protection \u2014 Home Improvement Contractor"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "97",
        "bestRating": "5",
        "worstRating": "1"
      },
      "priceRange": "$$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/bathroom-remodeling/chevy-chase-md#service",
      "serviceType": "Bathroom Remodeling",
      "name": "Bathroom Remodeling in Chevy Chase, MD",
      "provider": {"@id": "https://www.dmv-gc.com/#business"},
      "areaServed": {
        "@type": "City",
        "name": "Chevy Chase",
        "sameAs": "https://en.wikipedia.org/wiki/Chevy_Chase,_Maryland"
      },
      "description": "Full-service bathroom remodeling in Chevy Chase, MD. Master and primary bath renovations, hall and guest bath remodels, powder rooms, tub-to-shower conversions, walk-in showers, basement bathroom additions, and accessible aging-in-place baths \u2014 design through final finishes \u2014 by an MHIC-licensed design-build contractor.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "8000",
          "maxPrice": "120000",
          "priceCurrency": "USD"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Bathroom Remodeling Services Chevy Chase MD",
        "itemListElement": [
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Master / Primary Bath Renovation"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Hall & Guest Bathroom Remodel"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Tub-to-Shower Conversion"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Walk-In & Curbless Shower Installation"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Basement Bathroom Addition"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Accessible / Aging-in-Place Bathroom"}}
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/"},
        {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services"},
        {"@type": "ListItem", "position": 3, "name": "Bathroom Remodeling", "item": "https://www.dmv-gc.com/service/bathroom-remodeling"},
        {"@type": "ListItem", "position": 4, "name": "Chevy Chase, MD", "item": "https://www.dmv-gc.com/service/bathroom-remodeling/chevy-chase-md"}
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a bathroom remodel cost in Chevy Chase, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bathroom remodeling in Chevy Chase, MD typically costs between $8,000 and $120,000 depending on bathroom type, scope, and finishes. A powder room or half-bath refresh starts around $8,000\u2013$18,000. A hall or guest bath remodel runs $18,000\u2013$35,000. A tub-to-shower conversion runs $12,000\u2013$25,000. A primary (master) bath renovation costs $35,000\u2013$70,000, and a luxury primary bath can reach $70,000\u2013$120,000+. Adding a new basement bathroom runs $20,000\u2013$45,000. DMV-GC Group provides free in-home consultations with detailed estimates for any Chevy Chase home."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed to do bathroom remodeling in Chevy Chase, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland Home Improvement Contractor (MHIC) license issued by the Maryland Home Improvement Commission \u2014 the license required to legally perform residential renovation work in Chevy Chase and throughout Maryland. We are fully bonded and insured, and provide a 1-year workmanship warranty on every bathroom remodeling project completed in Montgomery County."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need a permit to remodel a bathroom in Chevy Chase / Montgomery County?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In most cases, yes. Any bathroom remodel that involves moving plumbing, adding or relocating electrical, or structural changes requires permits. In Chevy Chase, building and electrical permits are issued by Montgomery County DPS and plumbing permits through WSSC Water. Importantly, 'Chevy Chase' is not one town but several incorporated municipalities \u2014 Chevy Chase Village, the Town of Chevy Chase, Sections 3 and 5, Martin's Additions, Chevy Chase View, and North Chevy Chase \u2014 and several of them (notably Chevy Chase Village) require their own additional building, architectural, or tree-removal review on top of county permits. These mostly affect exterior work and trees rather than interior bathroom remodels, but we confirm exactly which municipality and approvals apply to your address and handle every permit for you."
          }
        },
        {
          "@type": "Question",
          "name": "Can DMV-GC Group convert my tub to a walk-in shower?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Tub-to-shower conversions are a popular project in Chevy Chase's older homes, where original or retrofitted bathrooms often have tubs that are rarely used. We remove the existing tub, rebuild the wet area with proper waterproofing, and install a custom tile or low-maintenance walk-in shower \u2014 including high-end frameless-glass, curbless, and accessible designs for aging-in-place \u2014 while respecting the character and scale of these early-1900s homes. Most conversions are completed in 2\u20133 weeks."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a bathroom remodel take in Chevy Chase, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most bathroom renovations in Chevy Chase take 2\u20135 weeks from construction start to completion. A powder room refresh can be done in 1\u20132 weeks. A tub-to-shower conversion takes 2\u20133 weeks. A full primary bath renovation takes 4\u20136 weeks, and a new basement bathroom typically takes 3\u20135 weeks. Permit processing through Montgomery County DPS and WSSC usually adds 2\u20134 weeks before construction begins. DMV-GC Group factors realistic timelines into every project plan."
          }
        },
        {
          "@type": "Question",
          "name": "Can DMV-GC Group add a bathroom in my basement or primary suite?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Adding a bathroom is a high-value upgrade for Chevy Chase homes \u2014 many of the area's large early-1900s houses were built with few bathrooms relative to their size, so adding a primary-suite ensuite, a main-level powder room, or a basement bath makes them far more livable. We assess how the older home is built before planning the most efficient plumbing rough-in, then handle drainage, ventilation, waterproofing, the full Montgomery County DPS and WSSC permit process, and any village or town review that applies."
          }
        }
      ]
    }
  ]
}`
                    }}
                />
            </div>
        </div>
    );
}
