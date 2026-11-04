'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

const KensingtonMD = () => {

    const { setActiveMenuItem } = useMyContext();

     useEffect(() => {
        setActiveMenuItem("service");
      }, []);

    const faqData = [
        {
            question: "How much does a kitchen remodel cost in Kensington, MD?",
            answer: "In Kensington, kitchen remodeling typically costs $38,000–$120,000+ depending on scope. A cosmetic update (new cabinets, countertops, backsplash) starts around $18,000–$32,000. A full gut renovation runs $72,000–$110,000. Older Kensington homes sometimes require additional work — pipe replacement, panel upgrades, or subfloor leveling — that can add $3,000–$12,000 to the base cost. DMV-GC Group identifies all of these during our free pre-construction assessment so you have a complete, honest estimate before signing anything."
        },
        {
            question: "Can you remodel a small kitchen in a Kensington cape cod or bungalow?",
            answer: "Yes — small kitchen transformations in Kensington's older homes are one of our specialties. We use strategic layout changes (removing a non-load-bearing wall, adding a peninsula), vertical storage solutions (floor-to-ceiling cabinets), and design techniques (large-format tile, light colors, under-cabinet lighting) to make compact Kensington kitchens feel significantly larger. Our in-house architects design around your specific footprint — not a generic template."
        },
        {
            question: "Do older Kensington homes have special requirements for kitchen remodeling?",
            answer: "Yes. Kensington homes built before 1980 often have galvanized steel supply lines (which restrict flow and corrode internally), undersized 100-amp electrical panels (insufficient for modern kitchen appliances), settled subfloors that need leveling before new flooring, and occasionally plaster walls rather than drywall. DMV-GC Group's in-house plumbing and electrical teams handle all of these as part of your kitchen remodel — and we assess them during the free consultation so there are no surprises mid-project."
        },
        {
            question: "Does DMV-GC Group do open-concept kitchen conversions in Kensington?",
            answer: "Yes. Open-concept conversions are our most requested project in Kensington's older homes. Our in-house structural engineers assess every wall before removal, perform all required load calculations, and specify the correct beam and post configuration. We manage all required Montgomery County structural permits and handle the full conversion — wall removal, beam installation, drywall patching, flooring blend, and all finishes — with our single in-house crew."
        },
        {
            question: "How long does a kitchen remodel take in Kensington?",
            answer: "Most kitchen remodels in Kensington take 6–12 weeks. Simple cosmetic updates take 4–6 weeks. Full gut renovations or open-concept conversions take 8–12 weeks. Older Kensington homes can occasionally have unexpected conditions behind walls — aging pipes, outdated wiring, or uneven framing — that add time. DMV-GC Group builds buffer into every Kensington project schedule based on our pre-construction assessment of your specific home's condition."
        },
        {
            question: "Is a kitchen remodel worth it in Kensington, MD?",
            answer: "Yes. Kensington's desirability has grown significantly — its walkability, MARC train access to DC, Rock Creek Park proximity, and authentic small-town character make it increasingly sought-after in Montgomery County's market. A well-executed kitchen remodel in Kensington typically returns 65–75% of its cost in home value and can be the deciding factor in a competitive sale. For most Kensington homeowners, renovating beats moving — you get the kitchen you want in the community you already love."
        }
    ];

    return (
        <>
            <div className="city-service-detail-page kitchen-kensington-md">
                <div className="container">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <Link href="/">Home</Link><span>›</span>
                        <Link href="/services">Services</Link><span>›</span>
                        <Link href="/service/kitchen-remodeling">Kitchen Remodeling</Link><span>›</span>
                        Kensington, MD
                    </nav>

                    <div className="hero">
                        <div className="hero-location-tag">📍 Serving Kensington, MD</div>
                        <h1>Kitchen Remodeling Contractor in Kensington, MD</h1>
                        <div className="hero-meta">
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ DLCP Licensed & Insured</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ Older Home Specialists</span>
                        <span className="badge">✓ Free In-Home Consultation</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                        </div>
                    </div>

                    <div className="intro-box">
                        Looking for a trusted <strong>kitchen remodeling contractor in Kensington, MD</strong>? Kensington is one of Montgomery County's most charming communities — with tree-lined streets, a walkable historic town center, and a housing stock of cape cods, colonials, bungalows, and split-levels built primarily between the 1940s and 1970s. These homes have tremendous character — and kitchens that, in most cases, were never designed for the way modern families actually cook and live. DMV-GC Group specializes in transforming exactly these kinds of kitchens — small, closed-off, outdated spaces — into open, functional, beautiful kitchens that honor the home's character while meeting the demands of today's lifestyle.
                    </div>

                    <div className="trust-bar">
                        <div className="trust-item">
                        <div className="icon">🏚️</div>
                        <strong>Older Home Experts</strong>
                        <span>Cape cods, colonials & bungalows — we know these homes</span>
                        </div>
                        <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>Permits Handled</strong>
                        <span>All Montgomery County permits managed in-house</span>
                        </div>
                        <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9-Star Rated</strong>
                        <span>97+ verified homeowner reviews</span>
                        </div>
                        <div className="trust-item">
                        <div className="icon">🛡️</div>
                        <strong>MHIC Licensed</strong>
                        <span>Bonded, insured, 1-year warranty</span>
                        </div>
                    </div>

                    <h2>Kitchen Remodeling Services We Offer in Kensington, MD</h2>
                    <p>
                        Whether you want to modernize a cramped galley kitchen, open up a closed-off colonial kitchen, or completely gut and reimagine your Kensington home's cooking space — DMV-GC Group's licensed in-house team handles every aspect of your <strong>kitchen renovation in Kensington</strong> from design and permits through every finish.
                    </p>

                    <div className="service-grid">
                        <div className="service-item">Full Kitchen Gut Renovation</div>
                        <div className="service-item">Galley Kitchen Expansion & Redesign</div>
                        <div className="service-item">Open-Concept Kitchen Conversion</div>
                        <div className="service-item">Kitchen Bump-Out Addition</div>
                        <div className="service-item">Custom Cabinet Design & Installation</div>
                        <div className="service-item">Countertop Replacement (Quartz, Granite)</div>
                        <div className="service-item">Kitchen Electrical Panel & Circuit Upgrades</div>
                        <div className="service-item">Galvanized Pipe Replacement During Remodel</div>
                        <div className="service-item">Subfloor Leveling & Repair</div>
                        <div className="service-item">Backsplash & Tile Installation</div>
                        <div className="service-item">Kitchen Lighting Modernization</div>
                        <div className="service-item">Permit Processing & County Inspections</div>
                    </div>

                    <h2>The Kensington Kitchen Challenge — What Makes These Homes Unique</h2>
                    <p>
                        Kensington's housing stock is one of its biggest selling points — and also its biggest kitchen challenge. Homes built in the 1940s through 1970s were designed around a very different way of living. Kitchens were small, closed, and separate — they were workrooms, not gathering spaces. Here's what DMV-GC Group regularly encounters — and solves — in <strong>Kensington kitchen remodeling projects</strong>:
                    </p>

                    <div className="challenge-grid">
                        <div className="challenge-card">
                        <div className="number">01</div>
                        <h3>Galley Kitchens With No Room to Breathe</h3>
                        <p>Many Kensington cape cods and colonials have narrow galley kitchens — two parallel walls of cabinets with a tight corridor between. Our designers open these up by removing a non-load-bearing wall on one side, creating an L-shape or peninsula layout that feels dramatically more spacious without requiring an addition.</p>
                        </div>
                        <div className="challenge-card">
                        <div className="number">02</div>
                        <h3>Closed-Off Kitchens Disconnected From Living Spaces</h3>
                        <p>Pre-1980 kitchen design assumed cooks worked alone and guests stayed in the living room. Today's Kensington families want to cook, supervise homework, and entertain simultaneously. Open-concept conversions — removing the wall between kitchen and dining or living area — are our most transformative project type in Kensington.</p>
                        </div>
                        <div className="challenge-card">
                        <div className="number">03</div>
                        <h3>Outdated Plumbing & Electrical That Need Attention</h3>
                        <p>Kensington homes built before 1980 frequently have galvanized steel supply lines that restrict water flow and corrode internally, and 100-amp electrical panels that can't safely support modern kitchen appliances. A kitchen remodel is the ideal time to address both — our in-house plumbers and electricians handle these upgrades as part of the project.</p>
                        </div>
                        <div className="challenge-card">
                        <div className="number">04</div>
                        <h3>Uneven Subfloors From Decades of Settlement</h3>
                        <p>Older Kensington homes settle over decades — leaving subfloors that are no longer level. This matters enormously for tile and hardwood flooring installations, which crack or separate if installed over an unlevel surface. DMV-GC Group inspects and levels every subfloor before any new flooring goes down.</p>
                        </div>
                    </div>

                    <div className="warning">
                        ⚠️ <strong>Important for Kensington Homeowners:</strong> Before any kitchen remodel begins in an older Kensington home, our team assesses existing plumbing pipe material, electrical panel capacity, and subfloor condition. Addressing these issues during your kitchen remodel — rather than separately — is almost always more cost-effective and less disruptive than doing them in isolation later.
                    </div>

                    <div className="author-box">
                        <div className="author-avatar">🏠</div>
                        <div className="author-info">
                        <h4>DMV-GC Group — Kitchen Remodeling Specialists for Kensington's Older Homes</h4>
                        <p>DMV-GC Group is a licensed design-build contractor based in North Bethesda — a short drive from Kensington along Connecticut Avenue. Our team has completed kitchen renovations in Kensington and throughout Montgomery County's older neighborhoods. We hold a Maryland MHIC license, carry full general liability insurance, and back every kitchen remodel with a 1-year workmanship warranty.</p>
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

                    <h2>Making Small Kensington Kitchens Work — Our Design Approach</h2>
                    <p>
                        Not every Kensington homeowner has the budget or the footprint for a major addition. DMV-GC Group's designers specialize in making smaller kitchens in Kensington's cape cods and colonials feel significantly larger through smart layout decisions, material choices, and strategic upgrades — without knocking down every wall.
                    </p>

                    <div className="tip-grid">
                        <div className="tip-box">
                        <div className="icon">🪟</div>
                        <h3>Remove One Wall</h3>
                        <p>Opening a single non-load-bearing wall between the kitchen and dining area can double the perceived size of a Kensington galley kitchen without touching the footprint.</p>
                        </div>
                        <div className="tip-box">
                        <div className="icon">📐</div>
                        <h3>Peninsula Instead of Island</h3>
                        <p>A peninsula attached to one wall adds counter space and seating for small Kensington kitchens where a freestanding island would block traffic flow.</p>
                        </div>
                        <div className="tip-box">
                        <div className="icon">📦</div>
                        <h3>Floor-to-Ceiling Cabinets</h3>
                        <p>Extending cabinets to the ceiling maximizes vertical storage in small kitchens — eliminating the visual clutter of open soffits and making the room feel taller.</p>
                        </div>
                        <div className="tip-box">
                        <div className="icon">💡</div>
                        <h3>Under-Cabinet Lighting</h3>
                        <p>LED strip lighting under upper cabinets eliminates shadows on work surfaces and makes a small kitchen feel brighter and larger without any structural changes.</p>
                        </div>
                        <div className="tip-box">
                        <div className="icon">🔲</div>
                        <h3>Large Format Tile</h3>
                        <p>Using larger tile (12×24 or 24×24) on floors reduces grout lines — making a small Kensington kitchen visually larger and easier to clean.</p>
                        </div>
                        <div className="tip-box">
                        <div className="icon">🎨</div>
                        <h3>Light Colors + Contrast</h3>
                        <p>Light cabinet colors with a contrasting island or lower cabinet color creates visual depth — making a small kitchen feel intentional rather than cramped.</p>
                        </div>
                    </div>

                    <h2>Should You Renovate Your Kensington Kitchen or Move?</h2>
                    <p>
                        It's a question many Kensington homeowners wrestle with — especially when the kitchen feels too small, too dated, or too disconnected from how the family actually lives. Here's an honest comparison of both paths in the current Kensington market:
                    </p>

                    <div className="compare-grid">
                        <div className="compare-box stay">
                        <h3>✅ Renovate Your Kensington Kitchen</h3>
                        <ul>
                            <li>Get exactly the kitchen you want in the neighborhood you love</li>
                            <li>Kensington's walkability, MARC train access, and Rock Creek Park proximity are hard to replace</li>
                            <li>A quality kitchen remodel returns 65–75% of cost in home value</li>
                            <li>Avoid today's elevated purchase prices and mortgage rates on a larger home</li>
                            <li>Keep your children's school district and established community connections</li>
                            <li>Full remodel cost: $48,000–$120,000 — far less than moving costs and a new mortgage</li>
                        </ul>
                        </div>
                        <div className="compare-box move">
                        <h3>❌ Moving to a Larger Home</h3>
                        <ul>
                            <li>Montgomery County inventory is tight — finding the right home takes time</li>
                            <li>Agent commissions, closing costs, and moving expenses: $30,000–$60,000+</li>
                            <li>New home may also have a kitchen that needs work</li>
                            <li>Higher mortgage rate on a more expensive property</li>
                            <li>New neighborhood, new school, new commute</li>
                            <li>No guarantee the new kitchen will be what you actually want</li>
                        </ul>
                        </div>
                    </div>

                    <div className="success">
                        ✅ <strong>The Kensington Advantage:</strong> Kensington's desirability has grown steadily — proximity to NIH, Walter Reed, and Washington DC, combined with its small-town character and MARC rail access, makes it an increasingly sought-after address. A renovated kitchen in a Kensington home is an investment in a community that continues to appreciate.
                    </div>

                    <h2>Kitchen Remodel Cost in Kensington, MD</h2>
                    <p>
                        Here is a realistic cost guide for <strong>kitchen remodeling in Kensington, Maryland</strong>. Note that older homes sometimes have hidden conditions — aging pipes, undersized panels, unlevel subfloors — that can add to the base cost. DMV-GC Group identifies these issues during our free pre-construction assessment so there are no surprises mid-project.
                    </p>

                    <div className="table-responsive">
                        <div className="table-holder">
                            <table className="cost-table">
                                <thead>
                                    <tr>
                                    <th>Project Type</th>
                                    <th>Typical Cost Range</th>
                                    <th>What's Included</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>Cosmetic Kitchen Update</td>
                                    <td>$18,000 – $32,000</td>
                                    <td>Cabinet refacing, new countertops, backsplash, fixtures, lighting, paint</td>
                                    </tr>
                                    <tr>
                                    <td>Mid-Range Full Remodel</td>
                                    <td>$38,000 – $70,000</td>
                                    <td>New cabinets, countertops, flooring, appliances, lighting, all trades</td>
                                    </tr>
                                    <tr>
                                    <td>Full Gut Renovation</td>
                                    <td>$72,000 – $110,000</td>
                                    <td>Complete demo, layout redesign, custom cabinetry, premium finishes, all trades</td>
                                    </tr>
                                    <tr>
                                    <td>Open-Concept Conversion + Remodel</td>
                                    <td>$65,000 – $105,000</td>
                                    <td>Wall removal, structural beam, full kitchen remodel, flooring blend</td>
                                    </tr>
                                    <tr>
                                    <td>Kitchen Bump-Out Addition + Remodel</td>
                                    <td>$90,000 – $140,000</td>
                                    <td>Small addition to expand kitchen footprint + full remodel of expanded space</td>
                                    </tr>
                                    <tr>
                                    <td>Plumbing / Electrical Upgrades (During Remodel)</td>
                                    <td>$3,000 – $12,000</td>
                                    <td>Galvanized pipe replacement, panel upgrade, new circuits — most cost-effective when done simultaneously</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="cta-banner">
                        <h2>Get a Free Kitchen Estimate at Your Kensington Home</h2>
                        <p>We'll visit your home, assess your existing kitchen and any older-home conditions, and provide a detailed honest estimate — at no cost and no obligation.</p>
                        <Link href="/contact-us" className="cta-btn">Schedule Free In-Home Consultation</Link>
                        <Link href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</Link>
                    </div>

                    <h2>Our Kitchen Remodeling Process in Kensington</h2>
                    <p>
                        Our process is built specifically to handle the realities of working in older Kensington homes — where surprises behind walls are common and planning ahead makes all the difference.
                    </p>

                    <div className="steps">
                        <div className="step">
                        <div className="step-num">1</div>
                        <div className="step-content">
                            <h3>Free In-Home Consultation & Pre-Construction Assessment</h3>
                            <p>We visit your Kensington home and do more than just measure the kitchen — we check your electrical panel, assess pipe material in accessible areas, inspect the subfloor, and identify any older-home conditions that could affect your project scope or timeline before we write an estimate.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">2</div>
                        <div className="step-content">
                            <h3>Design — Maximizing Your Specific Footprint</h3>
                            <p>Our in-house architects develop layout options specifically suited to your kitchen's footprint and your home's structure. For Kensington homes, this often involves evaluating which walls are load-bearing, where a peninsula could be added, and how to maximize storage in a compact space.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">3</div>
                        <div className="step-content">
                            <h3>Montgomery County Permit Processing</h3>
                            <p>We handle all required permits — building, electrical, plumbing, and structural if wall removal is involved. All Montgomery County permit applications, correspondence, and inspection scheduling are managed by our in-house permit team.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">4</div>
                        <div className="step-content">
                            <h3>Construction — Older Home Aware</h3>
                            <p>Our crews are experienced with the realities of older Kensington homes — working around plaster walls, older framing dimensions, uneven floors, and legacy utility configurations. We document any unexpected conditions immediately and discuss solutions with you before proceeding — no silent surprises.</p>
                        </div>
                        </div>
                        <div className="step">
                        <div className="step-num">5</div>
                        <div className="step-content">
                            <h3>Final Inspections & Detailed Walkthrough</h3>
                            <p>We manage all Montgomery County final inspections and conduct a thorough walkthrough with you — going over every cabinet, every seam, every detail before we consider the project complete and close it out.</p>
                        </div>
                        </div>
                    </div>

                    <h2>What Kensington Area Homeowners Say About DMV-GC Group</h2>

                    <div className="review-grid">
                        <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our 1960s colonial had the classic closed-off galley kitchen. DMV-GC Group opened it up completely — removed the wall, added a peninsula, and modernized everything. The difference is night and day. They found old galvanized pipes during demo and replaced them without making it a drama."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Kensington, MD</span></div>
                        </div>
                        <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We were nervous about remodeling our older cape cod — worried about what they'd find in the walls. DMV-GC Group assessed everything upfront and gave us a clear picture of the full scope before we signed anything. No surprise bills. Honest from day one."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Kensington, MD</span></div>
                        </div>
                        <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"DMV-GC Group transformed what was an impossible little kitchen into something we actually enjoy cooking in. Their designer's idea to remove the wall and add a peninsula was genius — it didn't cost nearly as much as I expected and the result is spectacular."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Kensington, MD</span></div>
                        </div>
                        <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Best decision we made was choosing a contractor who actually knows older homes. They didn't just rip everything out and rebuild — they worked with our home's character. The kitchen looks modern but still feels like it belongs in our 1955 colonial."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Near Kensington, MD</span></div>
                        </div>
                    </div>

                    <div className="highlight">
                        <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> DMV-GC Group is one of the most trusted kitchen remodeling contractors serving Kensington and the surrounding Montgomery County communities.</p>
                    </div>

                    <h2>Serving Kensington and Surrounding Areas for Kitchen Remodeling</h2>
                    <p>In addition to <strong>kitchen remodeling in Kensington, MD</strong>, DMV-GC Group serves homeowners throughout Montgomery County and the greater DMV area:</p>

                    <div className="areas-grid">
                        <span className="area-pill">Kensington, MD</span>
                        <span className="area-pill">Bethesda, MD</span>
                        <span className="area-pill">Chevy Chase</span>
                        <Link href="/service/kitchen-remodeling/silver-spring-md" className="area-pill text-decoration-none">Silver Spring</Link>
                        <span className="area-pill">Rockville</span>
                        <Link href="/service/kitchen-remodeling/wheaton-md" className="area-pill text-decoration-none">Wheaton</Link>
                        <span className="area-pill">North Bethesda</span>
                        <Link href="/service/kitchen-remodeling/garrett-park-md" className="area-pill text-decoration-none">Garrett Park</Link>
                        <Link href="/service/kitchen-remodeling/potomac-md" className="area-pill text-decoration-none">Potomac</Link>
                        <span className="area-pill">Washington DC</span>
                    </div>

                    <div className="nearby-box">
                        <h3>Also serving Silver Spring & Chevy Chase — similar older home stock</h3>
                        <p>Like Kensington, Silver Spring and Chevy Chase have a high concentration of mid-century cape cods, colonials, and split-levels with kitchens that benefit enormously from modernization. DMV-GC Group applies the same older-home expertise across all three communities. <Link href="/service/kitchen-remodeling">View our full kitchen remodeling service page →</Link></p>
                    </div>

                    <h2>Frequently Asked Questions — Kitchen Remodeling in Kensington, MD</h2>
                    <Accordion defaultActiveKey="0" flush>
                        {faqData.map((faq, index) => (
                            <Accordion.Item eventKey={index.toString()} key={index}>
                                <Accordion.Header>
                                {faq.question}
                                </Accordion.Header>
                
                                <Accordion.Body>
                                    <div className="blog-html-content" dangerouslySetInnerHTML={{ __html: faq.answer }}/>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>

                    <div className="internal-links">
                        <h2>Explore Our Other Remodeling Services in Kensington</h2>
                        <p>DMV-GC Group offers complete home renovation services throughout Kensington and Montgomery County:</p>
                        <ul>
                        <li><Link href="/service/bathroom-remodeling">Bathroom Remodeling in Kensington, MD</Link></li>
                        <li><Link href="/service/basement-remodeling">Basement Finishing & Remodeling in Kensington, MD</Link></li>
                        <li><Link href="/service/home-additions">Home Additions in Kensington, MD</Link></li>
                        <li><Link href="/service/electrical-services">Electrical Services in Kensington, MD</Link></li>
                        <li><Link href="/service/plumbing-services">Plumbing Services in Kensington, MD</Link></li>
                        <li><Link href="/service/design-build">Design-Build Contractor in Kensington, MD</Link></li>
                        </ul>
                    </div>

                    <div className="cta-banner">
                        <h2>Ready to Transform Your Kensington Kitchen?</h2>
                        <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation online. Available 7 days a week across Kensington and the DMV area.</p>
                        <Link href="/contact-us" className="cta-btn">Get Free Kitchen Estimate in Kensington →</Link>
                        <Link href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</Link>
                    </div>

                </div>
            </div>
        </>
    );
};

export default KensingtonMD;