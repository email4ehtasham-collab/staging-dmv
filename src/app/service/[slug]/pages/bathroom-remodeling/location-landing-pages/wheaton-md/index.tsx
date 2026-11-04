import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionBody from 'react-bootstrap/AccordionBody';
import "@/app/service/[slug]/pages/bathroom-remodeling/location-landing-pages/city-service-style.scss";
import "./style.scss";

export default function BathroomWheatonMD() {
    const faqData = [
        {
            question: "How much does a bathroom remodel cost in Wheaton, MD?",
            answer: "Bathroom remodeling in Wheaton, MD typically costs between $8,000 and $120,000 depending on bathroom type, scope, and finishes. A powder room or half-bath refresh starts around $8,000–$18,000. A hall or guest bath remodel runs $18,000–$35,000. A tub-to-shower conversion runs $12,000–$25,000. A primary (master) bath renovation costs $35,000–$70,000, and a luxury primary bath can reach $70,000–$120,000+. Adding a new basement bathroom runs $20,000–$45,000. DMV-GC Group provides free in-home consultations with detailed estimates for any Wheaton home."
        },
        {
            question: "Is DMV-GC Group licensed to do bathroom remodeling in Wheaton, MD?",
            answer: "Yes. DMV-GC Group holds a Maryland Home Improvement Contractor (MHIC) license issued by the Maryland Home Improvement Commission — the license required to legally perform residential renovation work in Wheaton and throughout Maryland. We are fully bonded and insured, and provide a 1-year workmanship warranty on every bathroom remodeling project completed in Montgomery County."
        },
        {
            question: "Do I need a permit to remodel a bathroom in Wheaton / Montgomery County?",
            answer: "In most cases, yes. Any bathroom remodel in Wheaton that involves moving plumbing, adding or relocating electrical, or structural changes requires permits. In Montgomery County, building and electrical permits are issued by the Department of Permitting Services (DPS), while plumbing and gas permits are issued through WSSC Water. DMV-GC Group's permit team handles all of this for you — homeowners never need to navigate DPS or WSSC themselves."
        },
        {
            question: "Can DMV-GC Group convert my tub to a walk-in shower?",
            answer: "Yes. Tub-to-shower conversions are one of the most popular bathroom projects we complete in Wheaton, especially in mid-century homes with original cast-iron tubs. We remove the existing tub, rebuild the wet area with proper waterproofing, and install a custom tile or low-maintenance walk-in shower — including curbless and accessible designs for aging-in-place. Most conversions are completed in 2–3 weeks."
        },
        {
            question: "How long does a bathroom remodel take in Wheaton, MD?",
            answer: "Most bathroom renovations in Wheaton take 2–5 weeks from construction start to completion. A powder room refresh can be done in 1–2 weeks. A tub-to-shower conversion takes 2–3 weeks. A full primary bath renovation takes 4–6 weeks, and a new basement bathroom typically takes 3–5 weeks. Permit processing through Montgomery County DPS and WSSC usually adds 2–4 weeks before construction begins. DMV-GC Group factors realistic timelines into every project plan."
        },
        {
            question: "Can DMV-GC Group add a bathroom in my basement or primary suite?",
            answer: "Yes. Adding a bathroom is one of the highest-value upgrades for Wheaton homes, where many mid-century houses were built with only one or two bathrooms. We design and build new basement bathrooms, primary-suite ensuites, and main-level powder rooms — handling plumbing rough-in, waterproofing, ventilation, and the full DPS and WSSC permit process from start to finish."
        }
    ];

    return (
        <div className="city-service-detail-page bathroom-wheaton-md">
            <div className="container">
                {/* BREADCRUMB */}
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>&rsaquo;</span>
                    <Link href="/services">Services</Link><span>&rsaquo;</span>
                    <Link href="/service/bathroom-remodeling">Bathroom Remodeling</Link><span>&rsaquo;</span>
                    Wheaton, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Wheaton, MD</div>
                    <h1>Bathroom Remodeling Contractor in Wheaton, MD</h1>
                    <div className="hero-meta">
                        <span className="badge red">⭐ 4.9 Rating &middot; 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed &amp; Insured</span>
                        <span className="badge">✓ DLCP Licensed</span>
                        <span className="badge">✓ 1-Year Warranty</span>
                        <span className="badge">✓ Free In-Home Consultation</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                {/* MHIC BANNER */}
                <div className="dlcp-banner">
                    <div className="icon">🏛️</div>
                    <div>
                        <h3>MHIC-Licensed Home Improvement Contractor for Wheaton, MD</h3>
                        <p>DMV-GC Group holds a Maryland Home Improvement Contractor (MHIC) license issued by the Maryland Home Improvement Commission &mdash; the license required to legally perform residential bathroom renovation work in Wheaton and throughout Montgomery County. We are fully bonded, insured, and back every project with a 1-year workmanship warranty. Always verify an MHIC number before hiring any bathroom contractor in Maryland.</p>
                    </div>
                </div>

                {/* INTRO */}
                <div className="intro-box">
                    Looking for a <strong>bathroom remodeling contractor in Wheaton, MD</strong>? Wheaton&apos;s neighborhoods are defined by established post-war homes &mdash; Cape Cods, ramblers, split-levels, and brick colonials built largely between the 1940s and 1960s &mdash; many of which still have their original small hall baths, single-bathroom layouts, and dated cast-iron tubs. DMV-GC Group&apos;s MHIC-licensed design-build team specializes in exactly this kind of renovation &mdash; managing Montgomery County DPS and WSSC permit requirements, waterproofing and ventilation done right, and the full bathroom remodel from design through final inspection, all under one contract.
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
                        <strong>DPS &amp; WSSC Permits</strong>
                        <span>Montgomery County permits &mdash; fully managed</span>
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
                <h2>Bathroom Remodeling Services We Offer in Wheaton, MD</h2>
                <p>
                    Wheaton&apos;s housing stock is overwhelmingly detached single-family homes &mdash; Cape Cods, ramblers, colonials, and split-levels built across the mid-20th century, plus a growing number of downtown condos. Most were built with compact bathrooms and minimal ventilation by today&apos;s standards. DMV-GC Group&apos;s MHIC-licensed team specializes in renovating, expanding, and adding bathrooms throughout Wheaton and Montgomery County.
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
                    <div className="service-item">Bathroom Layout Redesign &amp; Space Planning</div>
                    <div className="service-item">Plumbing Relocation &amp; Fixture Upgrades</div>
                    <div className="service-item">Montgomery County DPS &amp; WSSC Permit Processing</div>
                </div>

                {/* AUTHOR BOX */}
                <div className="author-box">
                    <div className="author-avatar">🛁</div>
                    <div className="author-info">
                        <h4>About DMV-GC Group &mdash; Wheaton&apos;s MHIC-Licensed Bathroom Remodeling Contractor</h4>
                        <p>DMV-GC Group holds a Maryland Home Improvement Contractor (MHIC) license issued by the Maryland Home Improvement Commission, and a DC DLCP license for cross-border work. Our team has renovated bathrooms in Wheaton&apos;s mid-century homes across multiple neighborhoods, and we understand Montgomery County&apos;s permitting structure &mdash; building and electrical permits through the Department of Permitting Services (DPS) and plumbing permits through WSSC Water. We carry full general liability insurance and back every bathroom remodel with a 1-year workmanship warranty.</p>
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
                <h2>Bathroom Remodeling for Wheaton&apos;s Mid-Century Housing Stock</h2>
                <p>
                    More than anything else, Wheaton&apos;s residential character is defined by its established post-war neighborhoods &mdash; streets of detached Cape Cods, ramblers, brick colonials, and split-levels built mostly between the 1940s and 1960s as the area grew into an auto-and-streetcar suburb. Understanding how these modest homes were originally plumbed and framed is essential to a successful bathroom renovation, and it&apos;s where DMV-GC Group&apos;s experience makes a real difference.
                </p>

                <div className="rowhouse-box">
                    <h3>🛁 What Makes Wheaton Bathrooms Different</h3>
                    <ul>
                        <li><strong>Compact original layouts</strong> &mdash; many mid-century homes were built with a single small hall bath (often just 5&times;8 feet) shared by the whole household</li>
                        <li><strong>One-bathroom homes</strong> &mdash; adding a second bath, an ensuite, or a basement bathroom is one of the highest-return upgrades available in Wheaton</li>
                        <li><strong>Cast-iron tubs &amp; original tile</strong> &mdash; vintage steel and cast-iron tubs and mid-century wall tile are common, and removal must be planned for narrow stairwells and doorways</li>
                        <li><strong>Older plumbing systems</strong> &mdash; galvanized supply lines and cast-iron drain stacks are frequent in homes this age and often need updating during a remodel</li>
                        <li><strong>Moisture &amp; ventilation</strong> &mdash; many original bathrooms lack proper exhaust ventilation, leading to hidden moisture damage that we address as part of the rebuild</li>
                        <li><strong>Slab vs. crawlspace vs. basement</strong> &mdash; how the home was built directly affects how plumbing can be relocated for a new layout or added bathroom</li>
                    </ul>
                </div>

                {/* TUB TO SHOWER */}
                <h2>Tub-to-Shower Conversions, Walk-In Showers &amp; Added Bathrooms</h2>
                <p>
                    For Wheaton homeowners whose bathrooms feel dated or cramped, three projects deliver the biggest impact: converting an unused tub to a modern walk-in shower, upgrading to an accessible aging-in-place layout, or adding an entirely new bathroom to a one-bath home.
                </p>
                <p>
                    <strong>Tub-to-shower conversions</strong> are especially popular in mid-century homes where the original tub is rarely used. We remove the existing tub, rebuild the wet area with a proper waterproofing system (such as a fully bonded membrane), and install a custom tile or low-maintenance walk-in shower &mdash; including frameless glass, niches, and bench seating.
                </p>
                <p>
                    <strong>Adding a bathroom</strong> &mdash; whether a basement bath, a primary-suite ensuite, or a main-level powder room &mdash; requires careful planning of plumbing rough-in, drainage, and ventilation. DMV-GC Group&apos;s team assesses how your home is built (slab, crawlspace, or basement) before designing the most cost-effective way to run new lines, then manages the full DPS and WSSC permit process.
                </p>

                <div className="note">
                    ♿ <strong>Aging-in-Place Note:</strong> Wheaton has many long-term homeowners planning to stay in place. We design accessible bathrooms with curbless (zero-threshold) showers, comfort-height fixtures, slip-resistant tile, and reinforced blocking for grab bars &mdash; built to look like a high-end remodel, not a medical retrofit. We can also incorporate Universal Design features into any standard renovation on request.
                </div>

                {/* WHY CHOOSE */}
                <h2>Why Wheaton Homeowners Choose DMV-GC Group</h2>
                <p>
                    Wheaton is one of Montgomery County&apos;s most active and fast-changing renovation markets &mdash; a diverse, transit-rich community (anchored by the Wheaton Metro and major redevelopment around the town center) where families invest in their post-war houses rather than move. Bathroom renovations are consistently among the highest-return projects: whether it&apos;s a Wheaton Hills rambler getting its first second bathroom, a Glenmont split-level being modernized, or a Kemp Mill home updated for long-term living, an updated bathroom is one of the most impactful upgrades for both daily comfort and resale value.
                </p>
                <p>
                    Montgomery County&apos;s permit process &mdash; building and electrical through the Department of Permitting Services (DPS), and plumbing through WSSC Water &mdash; has its own structure that catches many homeowners and out-of-area contractors off guard. DMV-GC Group holds a proper MHIC license and has navigated Montgomery County&apos;s permitting across many bathroom projects, so nothing about your remodel is left to chance or unpermitted.
                </p>

                <div className="highlight">
                    <p>🏡 <strong>Wheaton Market Insight:</strong> Wheaton is one of inside-the-Beltway Montgomery County&apos;s more attainable markets, with single-family home values commonly ranging from the low-$400,000s into the $600,000s and up &mdash; a strong value-add zone where renovation dollars stretch further than in pricier neighboring areas. Because so many Wheaton homes were built with just one bathroom, the addition of a second or third bathroom &mdash; or a clean, modern remodel of the original hall bath &mdash; is among the highest-ROI improvements a homeowner can make, reflecting how heavily Maryland buyers weigh bathroom count and condition.</p>
                </div>

                {/* NEIGHBORHOODS */}
                <h2>Serving Wheaton Neighborhoods for Bathroom Remodeling</h2>
                <p>
                    DMV-GC Group completes <strong>bathroom remodeling projects throughout Wheaton, MD</strong>. Our team understands the housing styles, plumbing systems, and renovation patterns specific to each area:
                </p>
                <div className="neighborhood-grid">
                    <div className="neighborhood-card">
                        <h3>Wheaton Hills / Wheaton Woods</h3>
                        <p>Core Wheaton neighborhoods of post-war ramblers, Cape Cods, and split-levels. Tub-to-shower conversions and adding a second bathroom are among the most common projects in these compact mid-century homes.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Glenmont / Glenmont Forest</h3>
                        <p>Established post-war housing near the Glenmont Metro. Renovations often pair a full hall-bath redesign with updating original galvanized supply and cast-iron drain lines.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Kemp Mill</h3>
                        <p>Consistent 1950s&ndash;1960s ranch and split-level housing. Accessible aging-in-place baths, ventilation upgrades, and second-bathroom additions are increasingly requested here.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Georgian Forest / Arcola</h3>
                        <p>Mid-century colonials and ramblers with strong renovation activity. Hall-bath remodels and primary-bath additions are frequent as families modernize one-bath layouts.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Aspen Hill / Wheaton Crest</h3>
                        <p>Adjacent post-war neighborhoods of detached single-family homes. Basement bathroom additions and full primary-bath renovations are popular value-add projects.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Downtown Wheaton (Metro / Triangle)</h3>
                        <p>A redeveloping town center with newer condos and apartments alongside older homes. Bathroom renovations here focus on condo-friendly remodels coordinated with building management and HOA requirements.</p>
                    </div>
                </div>

                {/* COST */}
                <h2>Bathroom Remodel Cost in Wheaton, MD</h2>
                <p>
                    Bathroom remodeling costs in Wheaton reflect the area&apos;s mid-century housing &mdash; hall-bath remodels and tub-to-shower conversions are the most common projects, while primary-bath renovations and added bathrooms represent larger investments. Here is a realistic cost breakdown for <strong>bathroom remodeling in Wheaton, MD</strong>:
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
                    💡 <strong>Montgomery County Permit Timing Note:</strong> Permit timelines matter in project planning. Standard bathroom remodel permits through Montgomery County DPS, plus the plumbing permit through WSSC Water, typically take 2&ndash;4 weeks to process before construction can begin. Projects involving structural changes or an added bathroom may take longer. DMV-GC Group factors realistic permit timelines into every Wheaton project schedule from the start &mdash; and pulls every permit your project requires.
                </div>

                {/* MID PAGE CTA */}
                <div className="cta-banner">
                    <h2>Get a Free Bathroom Remodeling Estimate in Wheaton, MD</h2>
                    <p>We&apos;ll visit your Wheaton home, assess your bathroom&apos;s potential, and provide a detailed itemized estimate &mdash; at no cost and no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free In-Home Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>

                {/* PROCESS */}
                <h2>Our Bathroom Remodeling Process in Wheaton, MD</h2>
                <p>
                    Our design-build process is adapted to Wheaton&apos;s mid-century housing stock and Montgomery County&apos;s specific permit and inspection requirements.
                </p>
                <div className="steps">
                    {[
                        {num: 1, title: "Free In-Home Consultation & Site Assessment", desc: "We visit your Wheaton home, assess your existing bathroom, discuss your goals and budget, and &mdash; for added bathrooms or layout changes &mdash; review how your home is built (slab, crawlspace, or basement) to determine what's feasible for plumbing and drainage. No cost, no obligation."},
                        {num: 2, title: "Plumbing, Ventilation & Waterproofing Plan", desc: "We evaluate your existing supply and drain lines, exhaust ventilation, and substrate &mdash; common pain points in mid-century homes &mdash; and plan the rebuild around a proper waterproofing system so the bathroom lasts decades, not years."},
                        {num: 3, title: "Custom Design, Layout & Material Selection", desc: "Our in-house designers develop detailed layouts and 3D renderings &mdash; whether that's maximizing a compact hall bath, designing a spa-style primary suite, or adding a new bathroom. We guide you through tile, vanity, fixture, glass, and lighting selections."},
                        {num: 4, title: "Montgomery County DPS & WSSC Permit Processing", desc: "We file all required permits &mdash; building and electrical through the Department of Permitting Services (DPS), and plumbing through WSSC Water. Our permit team handles all correspondence and inspection scheduling throughout the project."},
                        {num: 5, title: "Construction &mdash; Demo Through Final Finishes", desc: "Our licensed in-house crews handle all demolition, plumbing, electrical, waterproofing, tile, cabinetry, glass, flooring, and final finishes &mdash; coordinated by a dedicated project manager who keeps your project on schedule and your home protected."},
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
                <h2>What Wheaton Homeowners Say About DMV-GC Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;Our Wheaton Hills rambler only had one full bath for four people. DMV-GC Group added a primary-suite bathroom and the whole house functions differently now. They handled every DPS and WSSC permit &mdash; we didn&apos;t have to deal with the county at all.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Wheaton Hills, Wheaton</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;We had the original 1950s cast-iron tub and pink tile in our Glenmont split-level. They did a clean tub-to-shower conversion with frameless glass and it looks like a completely different house. Done in under three weeks, exactly as quoted.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Glenmont, Wheaton</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;We checked the MHIC number before hiring &mdash; DMV-GC Group is properly licensed and insured, which several handymen we talked to were not. The remodel itself was excellent: on time, on budget, and the waterproofing was done the right way.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Kemp Mill, Wheaton</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;When they opened the wall they found rotted framing from years of moisture behind the old tub. They showed us, explained it, and fixed it properly as part of the project &mdash; no surprise add-on fee later. Honest, professional work from start to finish.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Georgian Forest, Wheaton</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews</strong> across Google, Houzz, and Angi. DMV-GC Group is an MHIC-licensed, trusted bathroom remodeling contractor serving homes throughout Wheaton and Montgomery County, MD.</p>
                </div>

                {/* SERVICE AREAS */}
                <h2>Serving Wheaton and Surrounding Areas for Bathroom Remodeling</h2>
                <div className="areas-grid">
                    <span className="area-pill">Wheaton, MD</span>
                    <span className="area-pill">Wheaton Hills</span>
                    <span className="area-pill">Glenmont</span>
                    <span className="area-pill">Kemp Mill</span>
                    <span className="area-pill">Georgian Forest</span>
                    <span className="area-pill">Downtown Wheaton</span>
                    <span className="area-pill">Aspen Hill, MD</span>
                    <span className="area-pill">Silver Spring, MD</span>
                    <span className="area-pill">Kensington, MD</span>
                    <span className="area-pill">Forest Glen, MD</span>
                </div>

                <div className="nearby-box">
                    <h3>Also serving Kensington, MD &mdash; directly adjacent to Wheaton</h3>
                    <p>DMV-GC Group completes bathroom renovations throughout Kensington, MD, which borders Wheaton to the southwest. The Town of Kensington blends older bungalows and Victorians within its local historic district alongside post-war homes &mdash; calling for a contractor who understands both Maryland permitting and careful work in older homes. Our team holds the proper MHIC license and brings the same design-build process and 1-year warranty to every project. <Link href="/service/bathroom-remodeling/kensington-md">View our Kensington, MD bathroom remodeling page &rarr;</Link></p>
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions &mdash; Bathroom Remodeling in Wheaton, MD</h2>
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
                    <h2>Explore Our Other Remodeling Services in Wheaton, MD</h2>
                    <p>DMV-GC Group offers a complete range of home renovation services for Wheaton homes and condos:</p>
                    <ul>
                        <li><Link href="/service/kitchen-remodeling/wheaton-md">Kitchen Remodeling in Wheaton, MD</Link></li>
                        <li><Link href="/service/basement-remodeling">Basement Finishing &amp; Remodeling in Wheaton, MD</Link></li>
                        <li><Link href="/service/home-additions">Home Additions in Wheaton, MD</Link></li>
                        <li><Link href="/service/design-build">Design-Build Contractor in Wheaton, MD</Link></li>
                        <li><Link href="/service/electrical-services">Electrical Services in Wheaton, MD</Link></li>
                        <li><Link href="/service/drywall">Drywall &amp; Plaster Repair in Wheaton, MD</Link></li>
                    </ul>
                </div>

                {/* FINAL CTA */}
                <div className="cta-banner">
                    <h2>Ready to Remodel Your Wheaton Bathroom?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation online. MHIC-licensed and available 7 days a week throughout Wheaton and Montgomery County.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Bathroom Estimate in Wheaton &rarr;</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
                </div>
            </div>
        </div>
    );
}
