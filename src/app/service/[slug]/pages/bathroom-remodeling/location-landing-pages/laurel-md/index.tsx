import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionBody from 'react-bootstrap/AccordionBody';
import "@/app/service/[slug]/pages/bathroom-remodeling/location-landing-pages/city-service-style.scss";
import "./style.scss";

export default function BathroomLaurelMD() {
    const faqData = [
        {
            question: "How much does a bathroom remodel cost in Laurel, MD?",
            answer: "Bathroom remodeling in Laurel typically costs $6,000\u2013$85,000 depending on type and scope. A powder room runs $6,000\u2013$14,000. A townhome hall bath refresh costs $8,000\u2013$18,000. A tub-to-shower conversion runs $7,000\u2013$18,000. A full hall bath gut renovation costs $18,000\u2013$38,000. A master bathroom mid-range renovation runs $22,000\u2013$45,000. A full luxury master bath renovation can reach $45,000\u2013$85,000. DMV-GC Group provides free in-home consultations with itemized estimates for any Laurel property."
        },
        {
            question: "Does DMV-GC Group handle permits for bathroom remodeling in Laurel?",
            answer: "Yes. Laurel\u2019s permit jurisdiction depends on your property\u2019s exact location \u2014 City of Laurel, Montgomery County, or Prince George\u2019s County. DMV-GC Group verifies the correct jurisdiction for your specific address using parcel data, files all required permits, and manages all correspondence and inspections from start to finish. You never need to figure out which office to call."
        },
        {
            question: "Does DMV-GC Group remodel townhome bathrooms in Laurel?",
            answer: "Yes. Townhome bathroom remodels are the most common project we complete in Laurel. We handle any required HOA documentation alongside the full renovation \u2014 design, permits, and construction all in-house. Tub-to-shower conversions, tile replacements, vanity upgrades, and lighting improvements are our most common townhome bathroom scopes in Laurel."
        },
        {
            question: "Can DMV-GC Group do a tub-to-shower conversion in a Laurel townhome?",
            answer: "Yes. Tub-to-shower conversions are one of our most popular bathroom projects in Laurel\u2019s townhome communities. Our licensed plumbers handle drain relocation, we apply full waterproofing membrane before tile goes in, and our tile setters complete the shower with a frameless glass enclosure. The result consistently transforms even small townhome bathrooms into spaces that feel modern and significantly larger."
        },
        {
            question: "How long does a bathroom remodel take in Laurel, MD?",
            answer: "Most bathroom renovations in Laurel take 3\u20137 weeks from construction start to completion. A townhome bathroom refresh can be done in 2\u20133 weeks. A full master bathroom gut renovation takes 5\u20138 weeks. Permit processing \u2014 through whichever Laurel jurisdiction applies \u2014 typically adds 3\u20135 weeks before construction begins. DMV-GC Group provides a detailed timeline with every estimate."
        },
        {
            question: "Is DMV-GC Group licensed for bathroom remodeling in Laurel, MD?",
            answer: "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license \u2014 valid for all home renovation work in Laurel, regardless of whether your property falls in the City of Laurel, Montgomery County, or Prince George\u2019s County. We are fully bonded, carry comprehensive general liability insurance and workers\u2019 compensation coverage, and provide a 1-year workmanship warranty on every bathroom remodeling project completed in Laurel."
        }
    ];

    return (
        <div className="city-service-detail-page bathroom-laurel-md">
            <div className="container">
                {/* BREADCRUMB */}
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>&rsaquo;</span>
                    <Link href="/services">Services</Link><span>&rsaquo;</span>
                    <Link href="/service/bathroom-remodeling">Bathroom Remodeling</Link><span>&rsaquo;</span>
                    Laurel, MD
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Laurel, MD</div>
                    <h1>Bathroom Remodeling Contractor in Laurel, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">⭐ 4.9 Rating &middot; 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed &amp; Insured</span>
                        <span className="badge">✓ 1-Year Warranty</span>
                        <span className="badge">✓ Free In-Home Consultation</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                {/* LICENSE BANNER */}
                <div className="dlcp-banner">
                    <div className="icon">📋</div>
                    <div>
                        <h3>Serving All Laurel &mdash; City, Montgomery County &amp; Prince George&apos;s County</h3>
                        <p>Laurel&apos;s unique geography spans three permit jurisdictions. DMV-GC Group&apos;s in-house permit team identifies whether your Laurel property falls under City of Laurel, Montgomery County, or Prince George&apos;s County permit requirements &mdash; and manages the entire process from application through final inspection. You never need to figure out which office to call.</p>
                    </div>
                </div>

                {/* INTRO */}
                <div className="intro-box">
                    Looking for a trusted <strong>bathroom remodeling contractor in Laurel, MD</strong>? Laurel is one of the most diverse and accessible communities in the DC metro area &mdash; a city that straddles the border of Montgomery County and Prince George&apos;s County along the I-95 and MARC rail corridor, with a housing stock that includes everything from 1960s ranches and colonials to newer townhome developments and condos. DMV-GC Group&apos;s licensed design-build team serves all of Laurel &mdash; handling every bathroom renovation scope from a quick townhome refresh to a full master bathroom spa transformation, with in-house permit processing for whichever jurisdiction your address falls in.
                </div>

                {/* TRUST BAR */}
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🗺️</div>
                        <strong>All Jurisdictions</strong>
                        <span>City, Montgomery &amp; PG County permits</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>Permits Handled</strong>
                        <span>All Laurel jurisdictions &mdash; fully managed</span>
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

                {/* SERVICES */}
                <h2>Bathroom Remodeling Services We Offer in Laurel, MD</h2>
                <p>
                    Laurel&apos;s housing market spans a wide range &mdash; from affordable townhomes that benefit from practical, well-executed bathroom refreshes to larger single-family homes where master bathroom renovations are major investments. DMV-GC Group handles the full spectrum with the same licensed team, quality standards, and 1-year warranty.
                </p>

                <div className="service-grid">
                    <div className="service-item">Townhome Bathroom Full Renovation</div>
                    <div className="service-item">Master Bathroom Upgrade</div>
                    <div className="service-item">Tub-to-Shower Conversion</div>
                    <div className="service-item">Walk-In Shower Design &amp; Installation</div>
                    <div className="service-item">Hall Bathroom Remodel</div>
                    <div className="service-item">Custom Tile Design &amp; Installation</div>
                    <div className="service-item">Vanity &amp; Custom Cabinetry</div>
                    <div className="service-item">Heated Floor Installation</div>
                    <div className="service-item">Powder Room Remodel</div>
                    <div className="service-item">Bathroom Addition to Existing Space</div>
                    <div className="service-item">Shower Door &amp; Glass Enclosure</div>
                    <div className="service-item">City / County Permit Processing</div>
                </div>

                {/* AUTHOR BOX */}
                <div className="author-box">
                    <div className="author-avatar">🚿</div>
                    <div className="author-info">
                        <h4>About DMV-GC Group &mdash; Laurel&apos;s Licensed Bathroom Remodeling Contractor</h4>
                        <p>DMV-GC Group holds a Maryland MHIC license covering all of Laurel&apos;s jurisdictions &mdash; City of Laurel, Montgomery County, and Prince George&apos;s County. Our in-house team includes licensed plumbers, licensed electricians, and certified tile setters &mdash; every trade a bathroom renovation requires, without relying on subcontractors. We are fully bonded, carry comprehensive general liability insurance, and provide a 1-year workmanship warranty on every Laurel bathroom project.</p>
                        <div className="author-creds">
                            <span className="cred">MHIC Licensed</span>
                            <span className="cred">Licensed Plumbers</span>
                            <span className="cred">Licensed Electricians</span>
                            <span className="cred">4.9★ Rated</span>
                            <span className="cred">1-Year Warranty</span>
                        </div>
                    </div>
                </div>

                {/* JURISDICTION SECTION */}
                <h2>Laurel&apos;s Three-Jurisdiction Permit System &mdash; What Homeowners Need to Know</h2>
                <p>
                    Laurel is one of the few communities in Maryland where a single city name covers properties in three separate permit jurisdictions. This creates real confusion for homeowners &mdash; and for contractors who don&apos;t know the area well. Filing a permit with the wrong jurisdiction causes costly delays and sometimes compliance problems that must be corrected at the homeowner&apos;s expense.
                </p>

                <div className="juris-box">
                    <h3>🗺️ Understanding Laurel&apos;s Permit Jurisdictions</h3>
                    <ul>
                        <li><strong>City of Laurel</strong> &mdash; properties within the incorporated City of Laurel boundaries (roughly the historic downtown core and surrounding neighborhoods) require permits through Laurel&apos;s own Department of Public Works. Many Laurel residents with a &quot;Laurel, MD&quot; mailing address are actually outside the city limits.</li>
                        <li><strong>Montgomery County</strong> &mdash; properties in the northwest portion of greater Laurel that fall within Montgomery County (communities like North Laurel and parts of Burtonsville) require permits through Montgomery County&apos;s Department of Permitting Services (DPS).</li>
                        <li><strong>Prince George&apos;s County</strong> &mdash; properties in the eastern and southeastern portions of greater Laurel that fall within Prince George&apos;s County require permits through Prince George&apos;s County&apos;s Department of Permitting, Inspections and Enforcement (DPIE).</li>
                        <li><strong>What determines your jurisdiction</strong> &mdash; your property&apos;s county and whether it&apos;s within the incorporated city limits. A &quot;Laurel, MD 20707&quot; or &quot;Laurel, MD 20708&quot; mailing address does not definitively tell you which jurisdiction applies &mdash; only the parcel map does.</li>
                        <li>DMV-GC Group verifies the <strong>correct permit jurisdiction</strong> for your specific Laurel address before filing anything &mdash; using parcel data and county boundary mapping, not assumptions based on zip code.</li>
                    </ul>
                </div>

                {/* BATHROOM TYPES */}
                <h2>Bathroom Renovation Types Most Common in Laurel Homes</h2>
                <p>
                    Laurel&apos;s housing stock is notably diverse &mdash; townhomes built in the 1970s through 2000s, single-family colonials and ranches from the 1960s&ndash;80s, newer condos along the Route 1 corridor, and some larger custom homes in North Laurel. Each home type has different bathroom renovation priorities:
                </p>

                <div className="bath-type-grid">
                    <div className="bath-type-box">
                        <div className="icon">🏘️</div>
                        <h3>Townhome Bathrooms</h3>
                        <p>The most common renovation type in Laurel. Townhome bathrooms are typically compact &mdash; 40&ndash;60 sq ft. Tub-to-shower conversions, new tile, vanity upgrades, and improved lighting are the most impactful changes in these spaces.</p>
                    </div>
                    <div className="bath-type-box">
                        <div className="icon">🚿</div>
                        <h3>Master Bathroom Upgrades</h3>
                        <p>Single-family homes in Laurel&apos;s established neighborhoods often have dated master bathrooms from the 1970s&ndash;80s. Full gut renovations with walk-in showers, double vanities, and modern tile are the most common master bath scope.</p>
                    </div>
                    <div className="bath-type-box">
                        <div className="icon">🔄</div>
                        <h3>Tub-to-Shower Conversion</h3>
                        <p>Converting an underused tub to a walk-in shower is the single most popular bathroom upgrade in Laurel&apos;s townhome and older single-family housing &mdash; maximizing usable space and dramatically updating the look.</p>
                    </div>
                    <div className="bath-type-box">
                        <div className="icon">🪥</div>
                        <h3>Hall Bathroom Remodel</h3>
                        <p>Shared hall bathrooms in Laurel&apos;s family homes benefit from new tile, updated vanities, improved lighting, and fresh fixtures &mdash; practical improvements that make a real difference in daily use and resale value.</p>
                    </div>
                    <div className="bath-type-box">
                        <div className="icon">🏢</div>
                        <h3>Condo Bathroom Renovation</h3>
                        <p>Condo bathrooms in Laurel&apos;s Route 1 corridor and newer developments benefit from similar upgrades &mdash; tile, vanity, fixtures &mdash; with building management coordination for elevator access and work-hour compliance handled by DMV-GC Group.</p>
                    </div>
                    <div className="bath-type-box">
                        <div className="icon">➕</div>
                        <h3>Bathroom Addition</h3>
                        <p>Adding a half or full bathroom to a bedroom or basement level is a practical investment in Laurel&apos;s older homes that are often under-bathed relative to their bedroom count. Our in-house structural engineers and plumbers assess feasibility and design the addition.</p>
                    </div>
                </div>

                {/* TOWNHOME FOCUS */}
                <h2>Townhome Bathroom Remodeling in Laurel &mdash; Making the Most of a Compact Space</h2>
                <p>
                    Townhomes make up a significant portion of Laurel&apos;s housing market, and townhome bathroom renovation is where smart design decisions matter most. When you&apos;re working with 45&ndash;60 square feet, every choice &mdash; tile size, vanity depth, shower configuration, storage &mdash; affects how the space feels and functions.
                </p>
                <p>
                    DMV-GC Group&apos;s approach to Laurel townhome bathrooms starts with the footprint. We don&apos;t impose a standard layout; we design for the specific dimensions and plumbing access points of your bathroom. Common improvements in Laurel townhome bathrooms include converting builder-grade tub surrounds to fully tiled walk-in showers, replacing bulky vanities with floating wall-mounted vanities that create visual space, and adding recessed niche storage in the shower to eliminate the clutter of hanging caddies.
                </p>

                <div className="tip">
                    💡 <strong>Laurel Townhome Bathroom Tip:</strong> The single most impactful change in most Laurel townhome bathrooms is the tub-to-shower conversion. Removing a builder-grade tub &mdash; rarely used in many households &mdash; and replacing it with a fully tiled walk-in shower with a frameless glass door makes a compact bathroom feel significantly larger and more modern. It&apos;s also one of the best ROI bathroom investments in the Laurel market.
                </div>

                {/* WHY CHOOSE */}
                <h2>Why Laurel Homeowners Choose DMV-GC Group</h2>
                <p>
                    Laurel sits at the intersection of two major Maryland counties and is served by both MARC commuter rail lines and I-95 &mdash; making it one of the most strategically located communities in the DC metro area. Its diverse housing market and relatively accessible price points mean that bathroom renovations here need to deliver real value &mdash; not just cosmetic changes, but improvements that genuinely enhance daily life and hold up over time.
                </p>
                <p>
                    The permit complexity is the other reason Laurel homeowners benefit from choosing a contractor who knows the area. Getting the permit jurisdiction wrong &mdash; filing with Prince George&apos;s County when the property is actually in the City of Laurel, for example &mdash; causes permit delays that can push a project back by weeks. DMV-GC Group verifies the correct jurisdiction for every Laurel address before beginning any work.
                </p>

                <div className="highlight">
                    <p>🏡 <strong>Laurel Market Insight:</strong> Laurel&apos;s housing market has seen consistent appreciation driven by its commuter rail access, I-95 proximity, and position between two major employment centers. A professionally executed bathroom renovation &mdash; particularly a tub-to-shower conversion or master bath upgrade &mdash; is consistently one of the highest-ROI improvements a Laurel homeowner can make, especially in the townhome segment where updated bathrooms meaningfully influence buyer decisions.</p>
                </div>

                {/* NEIGHBORHOODS */}
                <h2>Serving All Laurel, MD Neighborhoods for Bathroom Remodeling</h2>

                <div className="neighborhood-grid">
                    <div className="neighborhood-card">
                        <h3>Historic Downtown Laurel</h3>
                        <p>The incorporated City of Laurel core &mdash; mix of older single-family homes and some Victorian-era properties. City of Laurel permits apply here. Renovations range from historic character bathrooms to full gut modernizations.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>North Laurel</h3>
                        <p>Unincorporated area in Howard County bordering Montgomery County &mdash; with established single-family neighborhoods. Permit jurisdiction varies; DMV-GC Group verifies the correct authority for each specific address in this area.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Laurel Lakes / Montpelier</h3>
                        <p>Established townhome and single-family communities in the Prince George&apos;s County portion of greater Laurel. Tub-to-shower conversions and master bath renovations are the most common projects in these neighborhoods.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Russett</h3>
                        <p>Planned community in the Anne Arundel County portion of greater Laurel with townhomes and single-family homes. HOA guidelines may apply; DMV-GC Group handles all documentation and coordination.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Bond Mill / Bowling Green</h3>
                        <p>Established residential neighborhoods in the Prince George&apos;s County area of Laurel. Older colonials and ranches here are prime candidates for master bathroom gut renovations and hall bath modernizations.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Route 1 Corridor Condos</h3>
                        <p>Newer condo developments along the US-1 corridor near the MARC station. Condo bathroom renovations here require building management coordination &mdash; COI, elevator scheduling &mdash; all managed by DMV-GC Group.</p>
                    </div>
                </div>

                {/* COST */}
                <h2>Bathroom Remodel Cost in Laurel, MD</h2>
                <p>
                    Laurel&apos;s bathroom remodeling costs reflect the area&apos;s diverse, value-oriented housing market. Here is a realistic cost breakdown for <strong>bathroom remodeling in Laurel, Maryland</strong>:
                </p>

                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>Bathroom Type / Scope</th>
                                    <th>Typical Cost Range</th>
                                    <th>What&apos;s Included</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Powder Room Remodel</td>
                                    <td>$6,000 &ndash; $14,000</td>
                                    <td>New vanity, tile, fixtures, mirror, lighting</td>
                                </tr>
                                <tr>
                                    <td>Townhome Hall Bathroom Refresh</td>
                                    <td>$8,000 &ndash; $18,000</td>
                                    <td>New tile, vanity, tub surround or shower update, fixtures, lighting</td>
                                </tr>
                                <tr>
                                    <td>Tub-to-Shower Conversion</td>
                                    <td>$7,000 &ndash; $18,000</td>
                                    <td>Demo, drain relocation, waterproofing, tile shower, glass enclosure</td>
                                </tr>
                                <tr>
                                    <td>Hall Bathroom Full Gut Renovation</td>
                                    <td>$18,000 &ndash; $38,000</td>
                                    <td>Complete demo, new layout, custom tile, vanity, all fixtures, permits</td>
                                </tr>
                                <tr>
                                    <td>Master Bathroom Mid-Range</td>
                                    <td>$22,000 &ndash; $45,000</td>
                                    <td>Walk-in shower, double vanity, new tile, heated floor, updated plumbing &amp; electrical</td>
                                </tr>
                                <tr>
                                    <td>Master Bathroom Full Renovation</td>
                                    <td>$45,000 &ndash; $85,000</td>
                                    <td>Custom cabinetry, spa shower, soaking tub, large-format tile, premium fixtures</td>
                                </tr>
                                <tr>
                                    <td>Bathroom Addition</td>
                                    <td>$22,000 &ndash; $48,000</td>
                                    <td>Structural assessment, plumbing rough-in, full bathroom build-out, permits</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="note">
                    ⚠️ <strong>Laurel Permit Cost Note:</strong> Permit fees vary between the City of Laurel, Montgomery County, and Prince George&apos;s County &mdash; with Prince George&apos;s County permit fees typically slightly higher than Montgomery County for comparable scopes. DMV-GC Group includes permit fees in every estimate with clear itemization so you know exactly what each cost covers.
                </div>

                {/* MID PAGE CTA */}
                <div className="cta-banner">
                    <h2>Get a Free Bathroom Remodeling Estimate in Laurel</h2>
                    <p>We&apos;ll visit your Laurel home, assess your bathrooms, confirm your permit jurisdiction, and provide a detailed estimate &mdash; at no cost and no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free In-Home Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                {/* PROCESS */}
                <h2>Our Bathroom Remodeling Process in Laurel</h2>

                <div className="steps">
                    {[
                        {num: 1, title: "Free In-Home Consultation & Jurisdiction Confirmation", desc: "We visit your Laurel home, assess your existing bathrooms, discuss your goals and budget \u2014 and verify which permit jurisdiction applies to your specific address. This step alone prevents the delays that catch many Laurel homeowners off guard. No cost, no obligation."},
                        {num: 2, title: "Custom Design & Material Selection", desc: "Our designers develop a layout optimized for your specific bathroom \u2014 whether that\u2019s maximizing a compact townhome bathroom or redesigning a larger master suite. We guide you through tile, fixture, vanity, and glass enclosure selections scaled to your budget and space."},
                        {num: 3, title: "Permit Processing \u2014 Correct Jurisdiction", desc: "We file all required permits with the correct authority \u2014 City of Laurel, Montgomery County DPS, or Prince George\u2019s County DPIE \u2014 based on your property\u2019s actual location. Our permit team manages all correspondence and inspection scheduling throughout the project."},
                        {num: 4, title: "Demolition & Plumbing / Electrical Rough-In", desc: "Our licensed plumbers handle all drain and supply work \u2014 including tub removal and drain relocation for shower conversions. Licensed electricians update bathroom electrical to current code including GFCI protection. All rough-in work is inspected before tile begins."},
                        {num: 5, title: "Waterproofing & Tile Installation", desc: "Continuous waterproofing membrane is applied to all wet areas before any tile is set \u2014 the most important quality step in any bathroom renovation. Our certified tile setters complete all floor, wall, and shower tile with precision leveling and consistent grout joints."},
                        {num: 6, title: "Final Finishes, Walkthrough & 1-Year Warranty", desc: "Vanity, fixtures, mirror, lighting, glass shower door, and all final details are completed and inspected. We conduct a thorough walkthrough with you, address every punch list item, and activate your 1-year workmanship warranty before closing the project."}
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
                <h2>What Laurel Homeowners Say About DMV-GC Group</h2>

                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;Our Laurel townhome bathroom was builder-grade from 1988. DMV-GC Group converted the tub to a full walk-in shower with subway tile and a frameless glass door &mdash; it looks like a completely different bathroom. They also figured out our permit jurisdiction right away, which apparently some contractors get wrong.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Laurel Lakes, MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;We did a full master bathroom gut renovation in our Laurel colonial. DMV-GC Group handled the Prince George&apos;s County permits, replaced all the old galvanized pipes they found, and delivered a stunning bathroom with heated floors and a walk-in shower. On time and on budget.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Bond Mill, Laurel MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;We added a half bath to our basement level and DMV-GC Group handled everything &mdash; figured out the permit jurisdiction, assessed the sewer line, installed the pump system, and built a beautiful powder room. Our house finally has enough bathrooms.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Montpelier, Laurel MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;Really professional team &mdash; they came in, assessed the bathroom, explained what was possible within our budget, and executed exactly what they said they would. The tile work is impeccable. Would absolutely hire again.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Historic Laurel, MD</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews</strong> across Google, Houzz, and Angi. DMV-GC Group serves all of Laurel&apos;s neighborhoods and jurisdictions with the same licensed team, quality standards, and 1-year warranty.</p>
                </div>

                {/* SERVICE AREAS */}
                <h2>Serving Laurel and Surrounding Areas for Bathroom Remodeling</h2>

                <div className="areas-grid">
                    <span className="area-pill">Laurel, MD</span>
                    <span className="area-pill">North Laurel</span>
                    <span className="area-pill">Laurel Lakes</span>
                    <span className="area-pill">Montpelier</span>
                    <span className="area-pill">Russett</span>
                    <span className="area-pill">Bond Mill</span>
                    <span className="area-pill">Savage</span>
                    <span className="area-pill">Beltsville</span>
                    <span className="area-pill">Rockville</span>
                    <span className="area-pill">Silver Spring</span>
                </div>

                <div className="nearby-box">
                    <h3>Also serving Silver Spring, MD &mdash; to the southwest of Laurel</h3>
                    <p>DMV-GC Group completes bathroom renovations throughout Silver Spring, which shares some of Laurel&apos;s diverse housing character and value-oriented market. Silver Spring homeowners benefit from the same licensed design-build process, in-house permits, and 1-year warranty. <Link href="/service/bathroom-remodeling">View our full bathroom remodeling service page &rarr;</Link></p>
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions &mdash; Bathroom Remodeling in Laurel, MD</h2>
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
                    <h2>Explore Our Other Remodeling Services in Laurel</h2>
                    <ul>
                        <li><Link href="/service/kitchen-remodeling">Kitchen Remodeling in Laurel, MD</Link></li>
                        <li><Link href="/service/basement-remodeling">Basement Finishing &amp; Remodeling in Laurel, MD</Link></li>
                        <li><Link href="/service/home-additions">Home Additions in Laurel, MD</Link></li>
                        <li><Link href="/service/flooring-remodeling">Flooring Installation in Laurel, MD</Link></li>
                        <li><Link href="/service/design-build">Design-Build Contractor in Laurel, MD</Link></li>
                        <li><Link href="/service/adu">ADU Construction in Laurel, MD</Link></li>
                    </ul>
                </div>

                {/* FINAL CTA */}
                <div className="cta-banner">
                    <h2>Ready to Remodel Your Laurel Bathroom?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation online. Available 7 days a week throughout all of Laurel and the DMV area.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Bathroom Estimate in Laurel &rarr;</Link>
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
      "description": "Licensed design-build general contractor serving Laurel, MD and the greater DMV area. Specializing in bathroom remodeling across Laurel's diverse housing stock \u2014 townhomes, single-family homes, and condos \u2014 across all three permit jurisdictions.",
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
          "name": "Laurel",
          "sameAs": "https://en.wikipedia.org/wiki/Laurel,_Maryland"
        },
        {"@type": "City", "name": "North Laurel"},
        {"@type": "City", "name": "Beltsville"},
        {"@type": "City", "name": "Savage"},
        {"@type": "City", "name": "Rockville"}
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "MHIC License",
          "credentialCategory": "Maryland Home Improvement Contractor License"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "DLCP License",
          "credentialCategory": "Washington DC Department of Licensing and Consumer Protection"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "97",
        "bestRating": "5",
        "worstRating": "1"
      },
      "priceRange": "$$"
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/bathroom-remodeling/laurel-md#service",
      "serviceType": "Bathroom Remodeling",
      "name": "Bathroom Remodeling in Laurel, MD",
      "provider": {"@id": "https://www.dmv-gc.com/#business"},
      "areaServed": {
        "@type": "City",
        "name": "Laurel",
        "sameAs": "https://en.wikipedia.org/wiki/Laurel,_Maryland"
      },
      "description": "Full-service bathroom remodeling in Laurel, MD. Townhome and single-family bathroom renovations, walk-in shower conversions, master bathroom upgrades, custom tile work, and all trade work \u2014 design through final finishes \u2014 by a licensed design-build contractor serving all Laurel jurisdictions.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "8000",
          "maxPrice": "85000",
          "priceCurrency": "USD"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Bathroom Remodeling Services Laurel MD",
        "itemListElement": [
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Townhome Bathroom Renovation"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Master Bathroom Upgrade"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Tub-to-Shower Conversion"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Hall Bathroom Remodel"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Custom Tile Design & Installation"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Bathroom Addition"}}
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/"},
        {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services"},
        {"@type": "ListItem", "position": 3, "name": "Bathroom Remodeling", "item": "https://www.dmv-gc.com/service/bathroom-remodeling"},
        {"@type": "ListItem", "position": 4, "name": "Laurel, MD", "item": "https://www.dmv-gc.com/service/bathroom-remodeling/laurel-md"}
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a bathroom remodel cost in Laurel, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bathroom remodeling in Laurel, MD typically costs between $8,000 and $85,000 depending on bathroom type, size, and scope. A hall or townhome bathroom refresh starts around $8,000\u2013$18,000. A mid-range master bathroom renovation runs $22,000\u2013$45,000. A full gut renovation with walk-in shower, custom tile, and premium fixtures ranges from $45,000\u2013$85,000. Laurel's diverse housing market \u2014 spanning townhomes, single-family homes, and older colonials \u2014 means renovation scopes vary widely. DMV-GC Group provides free in-home consultations with detailed estimates."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group handle permits for bathroom remodeling in Laurel, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Laurel's permit jurisdiction depends on your property's exact location \u2014 homes within the City of Laurel's incorporated limits require City of Laurel permits, while properties in the surrounding unincorporated areas require either Montgomery County or Prince George's County permits depending on which county they sit in. DMV-GC Group's in-house permit team determines the correct jurisdiction for your specific Laurel address and manages the entire permit process from application through final inspection."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group remodel townhome bathrooms in Laurel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Townhome bathroom remodels are the most common project type we complete in Laurel, where townhomes make up a large portion of the housing stock. Townhome bathroom renovations typically involve working within existing footprints \u2014 new tile, tub-to-shower conversions, vanity upgrades, and layout improvements that maximize a compact space. We also handle any required HOA documentation and coordination for Laurel's townhome communities."
          }
        },
        {
          "@type": "Question",
          "name": "Can DMV-GC Group do a tub-to-shower conversion in a Laurel townhome?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Tub-to-shower conversions are one of the most popular bathroom projects in Laurel's townhome communities. Converting an underused tub to a walk-in shower maximizes the usable space in a small bathroom and significantly updates the look and feel. DMV-GC Group's licensed plumbers handle the drain relocation, our team applies proper waterproofing, and our tile setters install the shower tile and glass enclosure \u2014 all in-house."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a bathroom remodel take in Laurel, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most bathroom renovations in Laurel take 3\u20137 weeks from construction start to completion. A townhome bathroom refresh can be done in 2\u20133 weeks. A full master bathroom gut renovation takes 5\u20138 weeks. Permit processing \u2014 through the City of Laurel, Montgomery County, or Prince George's County depending on your address \u2014 typically adds 3\u20135 weeks before construction begins. DMV-GC Group manages the complete timeline in-house."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for bathroom remodeling in Laurel, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license \u2014 required for all home renovation work in Laurel, whether in Montgomery County, Prince George's County, or the City of Laurel. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every bathroom remodeling project completed in Laurel."
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
