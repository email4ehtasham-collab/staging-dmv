import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionBody from 'react-bootstrap/AccordionBody';
import "@/app/service/[slug]/pages/bathroom-remodeling/location-landing-pages/city-service-style.scss";
import "./style.scss";

export default function BathroomWashingtonDC() {
    const faqData = [
        {
            question: "How much does a bathroom remodel cost in Washington, DC?",
            answer: "Bathroom remodeling in DC typically costs $8,000&ndash;$110,000 depending on type and scope. A powder room runs $8,000&ndash;$18,000. A rowhouse hall bath refresh costs $12,000&ndash;$24,000. A full hall bath gut renovation runs $24,000&ndash;$45,000. A master bathroom renovation costs $32,000&ndash;$65,000. A luxury master renovation can reach $65,000&ndash;$110,000. An English basement bathroom addition runs $18,000&ndash;$40,000. Condo renovations run $14,000&ndash;$45,000. DMV-GC Group provides free in-home consultations with itemized estimates."
        },
        {
            question: "Is DMV-GC Group licensed to do bathroom remodeling in Washington, DC?",
            answer: "Yes. DMV-GC Group holds a DLCP license from the DC Department of Licensing and Consumer Protection &mdash; the license required to legally perform residential renovation work in Washington, DC. We also hold a Maryland MHIC license, employ licensed plumbers and electricians in-house, and provide a 1-year workmanship warranty on every DC bathroom project."
        },
        {
            question: "Can DMV-GC Group add a bathroom to an English basement in a DC rowhouse?",
            answer: "Yes. Adding a bathroom to a DC rowhouse English basement is one of our most common projects. It requires a sewer elevation assessment to determine whether gravity drainage is possible or whether an ejector pump is needed. DMV-GC Group&apos;s licensed plumbers assess this during the free consultation and design the correct drainage system. All DOB plumbing permits are included and handled in-house."
        },
        {
            question: "Does DMV-GC Group handle DC permits for bathroom remodeling?",
            answer: "Yes. DMV-GC Group handles all required DC Department of Buildings (DOB) permits for bathroom remodeling &mdash; building, plumbing, and electrical. For historic district properties where exterior changes may trigger HPRB review, we manage that process as well. DC homeowners never need to navigate the permit process themselves."
        },
        {
            question: "Can DMV-GC Group renovate a bathroom in a DC condo or co-op?",
            answer: "Yes. DMV-GC Group has experience renovating bathrooms in DC&apos;s condo buildings and co-ops &mdash; including building management coordination (COI submission, elevator scheduling, work-hour compliance) and co-op board documentation where required. We manage all building coordination as a standard part of every DC condo bathroom project."
        },
        {
            question: "How long does a bathroom remodel take in Washington, DC?",
            answer: "Most bathroom renovations in DC take 4&ndash;8 weeks from construction start to completion. A hall bathroom refresh takes 2&ndash;3 weeks. A full master bathroom gut renovation takes 5&ndash;8 weeks. An English basement bathroom addition takes 6&ndash;10 weeks. DC DOB permit processing typically adds 4&ndash;6 weeks before construction begins. DMV-GC Group provides a detailed timeline with every estimate."
        }
    ];

    return (
        <div className="city-service-detail-page bathroom-washington-dc">
            <div className="container">
                {/* BREADCRUMB */}
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>&rsaquo;</span>
                    <Link href="/services">Services</Link><span>&rsaquo;</span>
                    <Link href="/service/bathroom-remodeling">Bathroom Remodeling</Link><span>&rsaquo;</span>
                    Washington, DC
                </nav>

                {/* HERO */}
                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Washington, DC</div>
                    <h1>Bathroom Remodeling Contractor in Washington, DC</h1>
                    <div className="hero-meta">
                        <span className="badge red">⭐ 4.9 Rating &middot; 97+ Reviews</span>
                        <span className="badge">✓ DLCP Licensed &amp; Insured</span>
                        <span className="badge">✓ 1-Year Warranty</span>
                        <span className="badge">✓ Free In-Home Consultation</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                {/* DLCP BANNER */}
                <div className="dlcp-banner">
                    <div className="icon">🏛️</div>
                    <div>
                        <h3>DLCP-Licensed Home Improvement Contractor for Washington, DC</h3>
                        <p>DMV-GC Group holds a license issued by the DC Department of Licensing and Consumer Protection (DLCP) &mdash; the license required to legally perform residential renovation work in Washington, DC. We hold both a DLCP license for DC and an MHIC license for Maryland &mdash; so whether your rowhouse or condo is in the District or just across the line, we&apos;re properly licensed for the work.</p>
                    </div>
                </div>

                {/* INTRO */}
                <div className="intro-box">
                    Looking for a trusted <strong>bathroom remodeling contractor in Washington, DC</strong>? DC&apos;s rowhouse-dominated housing stock creates a specific set of bathroom renovation needs that differ from any other market in the DMV &mdash; narrow bathrooms tucked into the upper floors of century-old homes, English basement units that need new bathroom additions below grade, co-op buildings with board approval requirements, and historic district properties where exterior changes require HPRB review. DMV-GC Group&apos;s DLCP-licensed design-build team manages every aspect of your <strong>DC bathroom renovation</strong> &mdash; from DOB permits to plumbing rough-in to final tile &mdash; under one contract, start to finish.
                </div>

                {/* TRUST BAR */}
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏛️</div>
                        <strong>DLCP Licensed</strong>
                        <span>Properly licensed for DC renovation work</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>DOB Permits Handled</strong>
                        <span>DC Department of Buildings &mdash; fully managed</span>
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
                <h2>Bathroom Remodeling Services We Offer in Washington, DC</h2>
                <p>
                    From rowhouse master bathrooms and hall baths to English basement bathroom additions and condo unit renovations, DMV-GC Group&apos;s DLCP-licensed team handles the full range of bathroom renovation needs across the District.
                </p>

                <div className="service-grid">
                    <div className="service-item">Rowhouse Bathroom Full Renovation</div>
                    <div className="service-item">English Basement Bathroom Addition</div>
                    <div className="service-item">Master Bathroom Gut Renovation</div>
                    <div className="service-item">Tub-to-Shower Conversion</div>
                    <div className="service-item">Walk-In Shower Design &amp; Installation</div>
                    <div className="service-item">Custom Tile Design &amp; Installation</div>
                    <div className="service-item">Vanity &amp; Custom Cabinetry</div>
                    <div className="service-item">Condo &amp; Co-op Bathroom Renovation</div>
                    <div className="service-item">Heated Floor Installation</div>
                    <div className="service-item">Powder Room Remodel</div>
                    <div className="service-item">Knob-and-Tube &amp; Old Wiring Upgrade</div>
                    <div className="service-item">DC Department of Buildings Permit Processing</div>
                </div>

                {/* AUTHOR BOX */}
                <div className="author-box">
                    <div className="author-avatar">🚿</div>
                    <div className="author-info">
                        <h4>About DMV-GC Group &mdash; DC&apos;s DLCP-Licensed Bathroom Remodeling Contractor</h4>
                        <p>DMV-GC Group holds a DLCP license from the DC Department of Licensing and Consumer Protection &mdash; the credential required to legally perform bathroom renovation work in Washington, DC. Our team has renovated bathrooms throughout DC&apos;s rowhouse neighborhoods, from Capitol Hill to Petworth to Dupont Circle, and understands the specific considerations of DC construction: older plumbing systems, party wall limitations, English basement drainage, and the DOB permit process. We employ licensed plumbers and licensed electricians in-house and back every project with a 1-year workmanship warranty.</p>
                        <div className="author-creds">
                            <span className="cred">DLCP Licensed</span>
                            <span className="cred">MHIC Licensed</span>
                            <span className="cred">Licensed Plumbers</span>
                            <span className="cred">Licensed Electricians</span>
                            <span className="cred">4.9★ Rated</span>
                            <span className="cred">1-Year Warranty</span>
                        </div>
                    </div>
                </div>

                {/* ROWHOUSE BATHROOMS */}
                <h2>Bathroom Remodeling in DC Rowhouses &mdash; What&apos;s Different</h2>
                <p>
                    DC&apos;s residential fabric is built on the rowhouse &mdash; narrow, deep homes typically 14&ndash;20 feet wide, built in tight blocks across every neighborhood. Bathrooms in these homes were usually added in the 1920s&ndash;1940s, carved out of existing bedroom space. They tend to be compact, and they come with a specific set of considerations that don&apos;t apply to newer construction.
                </p>

                <div className="rowhouse-box">
                    <h3>🏠 What DC Rowhouse Bathroom Renovations Typically Involve</h3>
                    <ul>
                        <li><strong>Small footprints</strong> &mdash; most original rowhouse bathrooms are 35&ndash;55 sq ft. Layout optimization within a tight space &mdash; efficient storage, correct fixture sizing, and smart tile choices &mdash; matters more here than anywhere else.</li>
                        <li><strong>Cast iron drain stacks</strong> &mdash; most DC rowhouses have original cast iron plumbing stacks running vertically through the home. These are durable but sometimes need section replacement if corroded. Our plumbers inspect and advise during the consultation.</li>
                        <li><strong>Galvanized supply lines</strong> &mdash; older rowhouses often still have galvanized steel supply pipes that restrict water pressure. A bathroom renovation is the best opportunity to replace galvanized with copper or PEX in the affected area.</li>
                        <li><strong>Older electrical</strong> &mdash; many DC rowhouses have electrical panels and wiring that predate modern bathroom code requirements (GFCI protection, dedicated circuits for certain appliances). Our licensed electricians assess and update during renovation.</li>
                        <li><strong>Party walls</strong> &mdash; shared structural walls with neighboring rowhouses limit where plumbing can be relocated. Our plumbers and structural team assess party wall conditions before any layout change is finalized.</li>
                        <li><strong>Knob-and-tube wiring</strong> &mdash; present in some older DC rowhouses, especially in NW and NE neighborhoods. Must be assessed by a licensed electrician before renovation begins &mdash; and bathroom GFCI requirements must be met in the updated space.</li>
                    </ul>
                </div>

                {/* ENGLISH BASEMENT */}
                <h2>English Basement Bathroom Additions in DC Rowhouses</h2>
                <p>
                    One of the most common &mdash; and most valuable &mdash; bathroom projects DMV-GC Group completes in Washington, DC is adding a full bathroom to an English basement unit. An English basement (also called a garden-level or lower-level unit) is a semi-below-grade level in a DC rowhouse that is increasingly converted to a separate rental unit or in-law suite. A bathroom is essential to make these units functional and legal as rental spaces.
                </p>
                <p>
                    The central challenge in a below-grade bathroom addition is drainage. Unlike an above-grade bathroom where gravity carries wastewater to the drain stack naturally, a below-grade bathroom may sit below the level of the main sewer line &mdash; meaning gravity drainage isn&apos;t possible without additional engineering.
                </p>

                <div className="rowhouse-box">
                    <h3>🔧 How Below-Grade Bathroom Drainage Works in DC Rowhouses</h3>
                    <ul>
                        <li><strong>Gravity drain (preferred)</strong> &mdash; if the basement floor elevation is above the street sewer line, standard gravity drainage can be used. Our plumbers verify this with a sewer elevation assessment at your specific property.</li>
                        <li><strong>Ejector pump system</strong> &mdash; if the basement floor is below the sewer line, an ejector pump (macerator pump) is required. The ejector pump grinds waste and pumps it up to the main drain stack under pressure. DMV-GC Group installs ejector systems as a standard part of below-grade bathroom additions when needed.</li>
                        <li><strong>Permit requirements</strong> &mdash; all below-grade bathroom additions in DC require DOB plumbing permits, and the drainage approach must be specified in the permit drawings. We handle all of this in-house.</li>
                        <li><strong>Trenching for floor drain</strong> &mdash; connecting a basement bathroom drain to the existing drain stack often requires cutting through the concrete basement floor to run new drain lines. DMV-GC Group&apos;s crew handles concrete cutting and patching as part of the bathroom addition scope.</li>
                        <li><strong>Waterproofing</strong> &mdash; below-grade bathrooms require especially robust waterproofing given the moisture conditions at or near grade. We apply a continuous membrane system to all shower and wet areas.</li>
                    </ul>
                </div>

                {/* BATHROOM TYPES */}
                <h2>Bathroom Renovation Types Most Common in Washington, DC</h2>

                <div className="bath-type-grid">
                    <div className="bath-type-box">
                        <div className="icon">🏠</div>
                        <h3>Rowhouse Hall Bath</h3>
                        <p>The shared bathroom on the upper floor of a DC rowhouse &mdash; typically the home&apos;s original bathroom. New tile, tub or shower conversion, updated vanity and fixtures. Most common renovation in DC.</p>
                    </div>
                    <div className="bath-type-box">
                        <div className="icon">🚿</div>
                        <h3>Rowhouse Master Bath</h3>
                        <p>Many DC rowhouse owners carve a master en-suite from adjacent bedroom or closet space. Walk-in shower, custom tile, and a double or floating vanity are the typical scope.</p>
                    </div>
                    <div className="bath-type-box">
                        <div className="icon">🏘️</div>
                        <h3>English Basement Addition</h3>
                        <p>Adding a full bathroom to a DC rowhouse&apos;s English basement unit &mdash; one of the highest-ROI projects in DC real estate. Requires below-grade plumbing assessment and often an ejector pump system.</p>
                    </div>
                    <div className="bath-type-box">
                        <div className="icon">🏢</div>
                        <h3>Condo / Co-op Bath</h3>
                        <p>Bathroom renovations in DC&apos;s condo and co-op buildings &mdash; requires building management coordination (COI, elevator scheduling, work-hour compliance) and sometimes co-op board approval.</p>
                    </div>
                    <div className="bath-type-box">
                        <div className="icon">🔄</div>
                        <h3>Tub-to-Shower Conversion</h3>
                        <p>Converting an underused tub to a walk-in shower is extremely popular in DC rowhouses where bathroom space is limited. Maximizes usable shower space in a compact footprint.</p>
                    </div>
                    <div className="bath-type-box">
                        <div className="icon">🪞</div>
                        <h3>Powder Room</h3>
                        <p>Half-bath additions or refreshes in DC rowhouses and condos. Often the most visible bathroom in the home for guests &mdash; a design-forward powder room adds real value in any DC home.</p>
                    </div>
                </div>

                {/* HISTORIC DISTRICTS */}
                <h2>Bathroom Renovations in DC&apos;s Historic Districts</h2>
                <p>
                    Many of DC&apos;s most desirable rowhouse neighborhoods &mdash; Capitol Hill, Georgetown, Dupont Circle, Logan Circle, Kalorama, and others &mdash; are designated historic districts where exterior changes require review by the Historic Preservation Review Board (HPRB). Interior bathroom renovations that don&apos;t affect the home&apos;s exterior typically don&apos;t require HPRB review. However, bathroom additions that would require changes to exterior walls, windows, or rear facades may trigger the process.
                </p>

                <div className="note">
                    ⚠️ <strong>HPRB Note for DC Bathroom Projects:</strong> A bathroom addition that requires a new window opening on an exterior wall, or changes to a rear facade visible from a public alley, may require HPRB review if your property is in a historic district. DMV-GC Group determines whether your specific project scope triggers HPRB review during the initial consultation &mdash; and manages that process if it does, as part of the overall project timeline.
                </div>

                {/* MARKET CONTEXT */}
                <h2>Why Washington DC Homeowners Choose DMV-GC Group</h2>
                <p>
                    DC&apos;s bathroom renovation market has a persistent problem: contractors who advertise in DC but only hold Maryland licenses, are unfamiliar with DC&apos;s DOB permit process, and haven&apos;t worked on the specific construction type &mdash; century-old rowhouses with cast iron drains, galvanized supply, and shared party walls &mdash; that dominates the DC residential market.
                </p>
                <p>
                    DMV-GC Group holds a proper DLCP license, employs licensed plumbers who understand below-grade drainage and DC drain stack configurations, and has navigated the DC DOB permit process across multiple projects and neighborhoods. When you hire us for a DC bathroom renovation, you&apos;re getting a team that actually knows DC construction &mdash; not a Maryland contractor guessing their way through it.
                </p>

                <div className="highlight">
                    <p>🏡 <strong>Washington DC Bathroom ROI:</strong> An English basement bathroom addition in a DC rowhouse &mdash; enabling legal rental of the basement unit &mdash; is one of the highest-ROI projects available to DC homeowners, frequently returning 100&ndash;130% of the renovation cost in added property value and rental income potential. A master bathroom renovation in a DC rowhouse typically returns 65&ndash;80% of its cost in immediate property value.</p>
                </div>

                {/* NEIGHBORHOODS */}
                <h2>Serving Washington DC Neighborhoods for Bathroom Remodeling</h2>

                <div className="neighborhood-grid">
                    <div className="neighborhood-card">
                        <h3>Capitol Hill</h3>
                        <p>DC&apos;s largest historic district &mdash; rowhouses from the 1880s&ndash;1920s. Hall bath renovations, master en-suite carve-outs, and English basement bathroom additions are the most common projects. HPRB review applies to exterior changes.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Georgetown</h3>
                        <p>DC&apos;s oldest neighborhood with strict historic preservation requirements. Interior bathroom renovations are straightforward; any exterior-affecting additions require HPRB coordination, which we manage.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Petworth / Park View</h3>
                        <p>Active renovation market with classic rowhouse stock. Full bathroom gut renovations and English basement additions are extremely common here as homeowners modernize their homes.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Dupont Circle / Logan Circle</h3>
                        <p>Dense historic rowhouse and condo neighborhoods. Bathroom renovations range from condo unit remodels to rowhouse master en-suite conversions, with historic district review for some exterior work.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Columbia Heights / Mount Pleasant</h3>
                        <p>Mix of rowhouses and apartment buildings. Full bathroom gut renovations and English basement additions are common renovation investments in these neighborhoods.</p>
                    </div>
                    <div className="neighborhood-card">
                        <h3>Brookland / Trinidad / NE DC</h3>
                        <p>Growing renovation market. Full bathroom modernizations and English basement bathroom additions are increasingly common as homeowners invest in these neighborhoods.</p>
                    </div>
                </div>

                {/* COST */}
                <h2>Bathroom Remodel Cost in Washington, DC</h2>
                <p>
                    Here is a realistic cost breakdown for <strong>bathroom remodeling in Washington, DC</strong>. DC costs are comparable to or slightly above Montgomery County given the additional permit process complexity and older construction considerations:
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
                                    <td>$8,000 &ndash; $18,000</td>
                                    <td>New vanity, tile, fixtures, mirror, lighting</td>
                                </tr>
                                <tr>
                                    <td>Rowhouse Hall Bathroom Refresh</td>
                                    <td>$12,000 &ndash; $24,000</td>
                                    <td>New tile, vanity, tub/shower surround, fixtures, lighting</td>
                                </tr>
                                <tr>
                                    <td>Hall Bathroom Full Gut Renovation</td>
                                    <td>$24,000 &ndash; $45,000</td>
                                    <td>Complete demo, new layout, custom tile, vanity, all fixtures, DOB permits</td>
                                </tr>
                                <tr>
                                    <td>Tub-to-Shower Conversion</td>
                                    <td>$8,000 &ndash; $20,000</td>
                                    <td>Demo, drain relocation, waterproofing, tile shower, glass enclosure</td>
                                </tr>
                                <tr>
                                    <td>Master Bathroom Renovation</td>
                                    <td>$32,000 &ndash; $65,000</td>
                                    <td>Walk-in shower, vanity, custom tile, heated floor, all plumbing &amp; electrical</td>
                                </tr>
                                <tr>
                                    <td>Master Bathroom Full Luxury Renovation</td>
                                    <td>$65,000 &ndash; $110,000</td>
                                    <td>Custom cabinetry, spa shower, freestanding tub, large-format tile, premium fixtures</td>
                                </tr>
                                <tr>
                                    <td>English Basement Bathroom Addition</td>
                                    <td>$18,000 &ndash; $40,000</td>
                                    <td>Below-grade plumbing assessment, ejector pump if needed, full bathroom build-out, DOB permits</td>
                                </tr>
                                <tr>
                                    <td>Condo / Co-op Bathroom Renovation</td>
                                    <td>$14,000 &ndash; $45,000</td>
                                    <td>New tile, vanity, fixtures, building coordination (COI, elevator, work hours)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>English Basement Addition Value:</strong> Adding a bathroom to a DC English basement unit &mdash; enabling legal rental &mdash; is consistently one of the highest-ROI renovations available to DC homeowners. A $20,000&ndash;$35,000 bathroom addition can enable $1,500&ndash;$2,500/month in basement rental income, making payback timelines of 12&ndash;24 months common in DC&apos;s rental market.
                </div>

                {/* MID PAGE CTA */}
                <div className="cta-banner">
                    <h2>Get a Free Bathroom Remodeling Estimate in Washington, DC</h2>
                    <p>We&apos;ll visit your DC rowhouse or condo, assess your bathrooms and any below-grade considerations, and provide a detailed estimate &mdash; at no cost and no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free In-Home Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                {/* PROCESS */}
                <h2>Our Bathroom Remodeling Process in Washington, DC</h2>

                <div className="steps">
                    {[
                        {num: 1, title: "Free In-Home Consultation & Systems Assessment", desc: "We visit your DC home, assess your existing bathrooms, evaluate plumbing supply type and drain stack condition, check electrical for any knob-and-tube concerns, and \u2014 for basement bathroom additions \u2014 assess sewer elevation to determine the drainage approach. No cost, no obligation."},
                        {num: 2, title: "Historic District Determination", desc: "We confirm whether your property is in one of DC\u2019s historic districts and whether your project scope would trigger HPRB review. Interior bathroom renovations rarely do \u2014 but additions affecting exterior walls may, and we address this upfront."},
                        {num: 3, title: "Custom Design & Material Selection", desc: "Our designers develop a layout optimized for your specific bathroom footprint \u2014 a 40 sq ft rowhouse bath needs a fundamentally different approach than a 120 sq ft master suite. We guide you through tile, fixture, vanity, and glass enclosure selections calibrated to your space and budget."},
                        {num: 4, title: "DC Department of Buildings Permit Processing", desc: "We file all required DOB permits \u2014 building, plumbing, and electrical. For English basement additions, we specify the drainage system in permit drawings. For condo projects, we submit all required building management documentation simultaneously."},
                        {num: 5, title: "Demo, Plumbing & Electrical", desc: "Our licensed plumbers handle all drain and supply work \u2014 including ejector pump installation, cast iron stack repairs, and galvanized pipe replacement where needed. Licensed electricians update all bathroom electrical to current DC code including GFCI protection throughout."},
                        {num: 6, title: "Waterproofing, Tile & Final Finishes", desc: "Continuous waterproofing membrane is applied before any tile \u2014 non-negotiable on every bathroom project. Our certified tile setters complete all floor, wall, and shower tile. Vanity, fixtures, mirror, lighting, and glass enclosure complete the project before our final walkthrough and 1-year warranty activation."}
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
                <h2>What Washington DC Homeowners Say About DMV-GC Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;We added a bathroom to our English basement on Capitol Hill to make it a legal rental unit. DMV-GC Group assessed the sewer line, installed an ejector pump, and built a beautiful bathroom that makes the basement a fully functional apartment. It rented the first week we listed it.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Capitol Hill, Washington DC</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;Our Petworth rowhouse hall bathroom was original 1920s &mdash; tiny and dated. DMV-GC Group did a full gut renovation, converted the tub to a large walk-in shower, and it went from embarrassing to our favorite room in the house. They handled the DOB permit without us having to do anything.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Petworth, Washington DC</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;We&apos;re in a co-op in Dupont Circle and were nervous about getting board approval and managing the building requirements. DMV-GC Group had clearly done this before &mdash; they prepared all the documentation, scheduled the elevator, and there wasn&apos;t a single complaint from the building. Beautiful bathroom.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Dupont Circle, Washington DC</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">&quot;When they opened up our Georgetown bathroom wall they found the galvanized pipes had basically closed off from corrosion &mdash; our water pressure was terrible. They replaced everything and now the shower actually works properly. And the renovation itself is stunning &mdash; large format marble tile throughout.&quot;</p>
                        <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Georgetown, Washington DC</span></div>
                    </div>
                </div>

                <div className="highlight">
                    <p>⭐ <strong>4.9-star rated with 97+ verified reviews</strong> across Google, Houzz, and Angi. DMV-GC Group is a DLCP-licensed bathroom remodeling contractor trusted by DC homeowners from Capitol Hill to Georgetown to Brookland.</p>
                </div>

                {/* SERVICE AREAS */}
                <h2>Serving Washington DC and Surrounding Areas for Bathroom Remodeling</h2>
                <div className="areas-grid">
                    <span className="area-pill">Washington, DC</span>
                    <span className="area-pill">Capitol Hill</span>
                    <span className="area-pill">Georgetown</span>
                    <span className="area-pill">Petworth</span>
                    <span className="area-pill">Dupont Circle</span>
                    <span className="area-pill">Columbia Heights</span>
                    <span className="area-pill">Brookland</span>
                    <span className="area-pill">Chevy Chase, MD</span>
                    <span className="area-pill">Silver Spring, MD</span>
                    <span className="area-pill">Bethesda, MD</span>
                </div>

                <div className="nearby-box">
                    <h3>Also serving Chevy Chase, MD &mdash; directly across the DC line</h3>
                    <p>DMV-GC Group completes bathroom renovations throughout Chevy Chase, MD, which borders Washington DC&apos;s Chevy Chase neighborhood. Whether your property is in the District or just across the line in Maryland, we hold the proper license for either jurisdiction. <Link href="/service/bathroom-remodeling">View our full bathroom remodeling service page &rarr;</Link></p>
                </div>

                {/* FAQ */}
                <h2>Frequently Asked Questions &mdash; Bathroom Remodeling in Washington, DC</h2>
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
                    <h2>Explore Our Other Remodeling Services in Washington, DC</h2>
                    <ul>
                        <li><Link href="/service/kitchen-remodeling/washington-dc">Kitchen Remodeling in Washington, DC</Link></li>
                        <li><Link href="/service/basement-remodeling">Basement Finishing &amp; Remodeling in Washington, DC</Link></li>
                        <li><Link href="/service/home-additions">Home Additions &amp; Rear Additions in Washington, DC</Link></li>
                        <li><Link href="/service/design-build">Design-Build Contractor in Washington, DC</Link></li>
                        <li><Link href="/service/electrical-services">Electrical Services for DC Rowhouses</Link></li>
                        <li><Link href="/service/plumbing-services">Plumbing Services for DC Rowhouses</Link></li>
                    </ul>
                </div>

                {/* FINAL CTA */}
                <div className="cta-banner">
                    <h2>Ready to Remodel Your Washington DC Bathroom?</h2>
                    <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation online. DLCP-licensed and available 7 days a week throughout Washington, DC.</p>
                    <Link href="/contact-us" className="cta-btn">Get Free Bathroom Estimate in DC &rarr;</Link>
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
      "description": "Licensed design-build general contractor serving Washington, DC and the greater DMV area. Specializing in bathroom remodeling for DC rowhouses, English basement units, condo renovations, and historic home bathrooms.",
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
          "@type": "AdministrativeArea",
          "name": "Washington, DC",
          "sameAs": "https://en.wikipedia.org/wiki/Washington,_D.C."
        },
        {"@type": "City", "name": "Chevy Chase"},
        {"@type": "City", "name": "Silver Spring"},
        {"@type": "City", "name": "Bethesda"}
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "DLCP License",
          "credentialCategory": "Washington DC Department of Licensing and Consumer Protection \u2014 Home Improvement Contractor"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "MHIC License",
          "credentialCategory": "Maryland Home Improvement Contractor License"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "97",
        "bestRating": "5",
        "worstRating": "1"
      },
      "priceRange": "$$$$"
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/bathroom-remodeling/washington-dc#service",
      "serviceType": "Bathroom Remodeling",
      "name": "Bathroom Remodeling in Washington, DC",
      "provider": {"@id": "https://www.dmv-gc.com/#business"},
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Washington, DC",
        "sameAs": "https://en.wikipedia.org/wiki/Washington,_D.C."
      },
      "description": "Full-service bathroom remodeling in Washington, DC. Rowhouse bathroom renovations, English basement bathroom additions, condo bathroom remodels, walk-in shower conversions, custom tile work, and all trade work \u2014 design through final finishes \u2014 by a DLCP-licensed design-build contractor.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "12000",
          "maxPrice": "110000",
          "priceCurrency": "USD"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Bathroom Remodeling Services Washington DC",
        "itemListElement": [
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Rowhouse Bathroom Renovation"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "English Basement Bathroom Addition"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Master Bathroom Renovation"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Condo Bathroom Remodel"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Tub-to-Shower Conversion"}},
          {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Custom Tile Design & Installation"}}
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/"},
        {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services"},
        {"@type": "ListItem", "position": 3, "name": "Bathroom Remodeling", "item": "https://www.dmv-gc.com/service/bathroom-remodeling"},
        {"@type": "ListItem", "position": 4, "name": "Washington, DC", "item": "https://www.dmv-gc.com/service/bathroom-remodeling/washington-dc"}
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a bathroom remodel cost in Washington, DC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bathroom remodeling in Washington, DC typically costs between $12,000 and $110,000 depending on bathroom type, size, and scope. A hall or rowhouse bathroom refresh starts around $12,000\u2013$22,000. A mid-range master bathroom renovation runs $32,000\u2013$60,000. A full luxury gut renovation with custom tile and premium fixtures ranges from $65,000\u2013$110,000. An English basement bathroom addition runs $18,000\u2013$40,000. DMV-GC Group provides free in-home consultations with detailed estimates for any DC home type."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed to do bathroom remodeling in Washington, DC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a license from the DC Department of Licensing and Consumer Protection (DLCP) as a Home Improvement Contractor \u2014 the license required to perform residential renovation work in Washington, DC. We also hold a Maryland MHIC license. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every bathroom remodeling project in DC."
          }
        },
        {
          "@type": "Question",
          "name": "Can DMV-GC Group add a bathroom to an English basement in a DC rowhouse?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Adding a bathroom to an English basement unit is one of the most common and highest-value projects we complete in DC rowhouses. A basement bathroom requires below-slab plumbing \u2014 either a gravity drain if the sewer elevation allows, or an ejector pump system for below-grade drainage. DMV-GC Group's licensed plumbers assess the sewer elevation at your specific property during the consultation phase and recommend the correct drainage approach."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group handle DC permits for bathroom remodeling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group handles all required permits through the DC Department of Buildings (DOB) for bathroom remodeling projects \u2014 building, plumbing, and electrical permits included. For bathroom additions or structural changes, we also manage any required zoning review. DC homeowners never need to navigate the permit process themselves."
          }
        },
        {
          "@type": "Question",
          "name": "Can DMV-GC Group renovate a bathroom in a DC condo or co-op?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group has experience renovating bathrooms in DC condo buildings and co-ops, including building management coordination \u2014 certificate of insurance submission, freight elevator scheduling, work-hour compliance, and co-op board documentation where required. We manage all building coordination as a standard part of every DC condo bathroom project."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a bathroom remodel take in Washington, DC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most bathroom renovations in DC take 4\u20138 weeks from construction start to completion. A hall bathroom refresh can be done in 2\u20133 weeks. A full master bathroom gut renovation takes 5\u20138 weeks. An English basement bathroom addition takes 6\u201310 weeks. DC permit processing through the Department of Buildings typically adds 4\u20136 weeks before construction begins. DMV-GC Group provides a detailed timeline with every DC bathroom estimate."
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
