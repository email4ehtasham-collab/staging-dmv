import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";
import NavitemActive from "@/components/Common/NavitemActive";
import "@/app/service/[slug]/pages/junk-removal/location-landing-pages/city-service-style.scss";
import "./style.scss";

const schemaJsonLd = {
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
            "description": "Licensed Maryland general contractor providing professional junk removal and debris hauling services in Potomac, MD. Large-scale construction debris removal, full estate cleanouts, bulk item pickup, and renovation waste hauling for Potomac's R-200 estate properties. MHIC #156178.",
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
                { "@type": "City", "name": "Potomac", "sameAs": "https://en.wikipedia.org/wiki/Potomac,_Maryland" },
                { "@type": "City", "name": "North Bethesda" },
                { "@type": "City", "name": "Bethesda" },
                { "@type": "City", "name": "Rockville" },
                { "@type": "City", "name": "Cabin John" },
                { "@type": "City", "name": "Chevy Chase" },
                { "@type": "AdministrativeArea", "name": "Montgomery County, MD" }
            ],
            "hasCredential": [
                {
                    "@type": "EducationalOccupationalCredential",
                    "name": "MHIC License",
                    "credentialCategory": "Maryland Home Improvement Contractor License — issued by the Maryland Home Improvement Commission #156178"
                },
                {
                    "@type": "EducationalOccupationalCredential",
                    "name": "DLCP License",
                    "credentialCategory": "Washington DC Department of Licensing and Consumer Protection — Home Improvement Contractor #410526000209"
                }
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "97",
                "bestRating": "5",
                "worstRating": "1"
            },
            "priceRange": "$$",
            "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "08:00",
                "closes": "20:00"
            }
        },
        {
            "@type": "Service",
            "@id": "https://www.dmv-gc.com/service/junk-removal/potomac-md#service",
            "serviceType": "Junk Removal, Construction Debris Removal, Estate Cleanout, Bulk Item Pickup, Renovation Waste Removal, Large-Scale Debris Hauling",
            "name": "Junk Removal Services in Potomac, MD",
            "provider": { "@id": "https://www.dmv-gc.com/#business" },
            "areaServed": {
                "@type": "City",
                "name": "Potomac",
                "sameAs": "https://en.wikipedia.org/wiki/Potomac,_Maryland"
            },
            "description": "Professional junk removal and debris hauling for Potomac's estate properties — large-scale construction debris removal, full estate cleanouts, bulk item pickup, renovation waste hauling, and garage and basement cleanouts. Equipped for Potomac's estate scale. MHIC #156178."
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                { "@type": "ListItem", "position": 3, "name": "Junk Removal", "item": "https://www.dmv-gc.com/service/junk-removal" },
                { "@type": "ListItem", "position": 4, "name": "Potomac, MD", "item": "https://www.dmv-gc.com/service/junk-removal/potomac-md" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Can DMV General Contracting Group handle large-scale debris removal from a Potomac estate renovation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Potomac's estate-scale renovations — whole-home gut remodels, large addition projects, and full outdoor living builds — generate significantly more debris volume than standard suburban renovations. DMV General Contracting Group coordinates large-scale, multi-load debris removal for Potomac renovation projects, with hauls scheduled at project milestones to keep the job site clear throughout. As a licensed general contractor, we manage debris removal as part of the overall renovation workflow or as a standalone service."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide estate cleanout services for Potomac homes being sold or transferred?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. DMV General Contracting Group provides full estate cleanout services for Potomac properties — removing furniture, appliances, household goods, and accumulated belongings from homes being prepared for sale, renovation, or estate transfer. Potomac estate properties are often large homes with decades of accumulated contents — our team handles the full scope efficiently and responsibly, with donation and recycling coordination included where the family wishes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does junk removal in Potomac differ from standard suburban service?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Potomac's R-200 zoned estate properties are typically much larger than standard suburban homes — larger rooms, more storage space, longer driveways, and significantly greater debris volumes from renovation projects. Estate cleanouts in Potomac frequently require multiple truck loads. Renovation debris from a Potomac kitchen remodel or whole-home renovation can far exceed what a standard suburban project generates. DMV General Contracting Group is equipped for Potomac's estate scale — not just standard suburban volumes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does junk removal cost in Potomac, MD?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Junk removal costs in Potomac reflect the community's estate scale. A single bulk item pickup starts at $75–$150. A partial load runs $150–$400. A full truck load runs $400–$700+. Multi-load estate cleanouts and large construction debris projects are priced by scope after a free on-site review. Potomac estate cleanouts frequently require 2–4+ loads — all priced transparently at the free estimate before work begins."
                    }
                }
            ]
        }
    ]
};

export default function JunkRemovalPotomacMD() {
    const faqData = [
        {
            question: "How many truck loads does a typical Potomac estate cleanout require?",
            answer: "Potomac estate homes — typically 5,000–10,000+ square feet with 3-car garages, large basements, and sometimes pool houses or guest structures — frequently require 3–6 or more truck loads for a full cleanout. The exact number is assessed at the free on-site estimate after we walk through the full property. All loads are priced transparently before work begins."
        },
        {
            question: "Can you remove construction debris from an ongoing Potomac renovation?",
            answer: "Yes — and this is one of the most common requests we receive for Potomac estate renovations. DMV General Contracting Group schedules debris hauls at key project milestones to keep large Potomac job sites clear and safe throughout the renovation. As a licensed general contractor, we coordinate debris removal as part of the overall renovation workflow or as a standalone service for Potomac homeowners working with another contractor."
        },
        {
            question: "Do you handle hardscape debris removal — old concrete, pavers, stone?",
            answer: "Yes. Potomac's outdoor living renovation projects — pool surround replacement, patio renovation, retaining wall removal — generate heavy hardscape debris that standard junk haulers are often not equipped to handle. DMV General Contracting Group removes old concrete, pavers, natural stone, and landscape debris from Potomac outdoor renovation projects."
        },
        {
            question: "Do you donate usable items from Potomac estate cleanouts?",
            answer: "Yes. Usable furniture, appliances, and household goods from Potomac estate cleanouts are sorted and directed to donation partners where the family wishes. Potomac estate cleanouts often include high-quality furniture and goods that are well suited for donation. Donation receipts provided where available."
        },
        {
            question: "How much does junk removal cost in Potomac, MD?",
            answer: "Single bulk item pickup starts at $75–$150. Full truck loads run $400–$700+. Potomac estate cleanouts requiring multiple loads are priced by full scope at the free on-site estimate — all loads priced transparently before work begins. Construction debris and renovation waste are priced by volume after on-site review. No surprise charges at completion."
        }
    ];

    return (
        <div className="city-service-detail-page junk-removal junk-removal-potomac-md">
            <NavitemActive nav="service" />

            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/junk-removal">Junk Removal</Link><span>›</span>
                    Potomac, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Potomac, MD</div>
                    <h1>Junk Removal Services in Potomac, MD</h1>
                    <p>
                        Professional junk removal and debris hauling for Potomac&apos;s estate properties — large-scale construction debris removal, full estate cleanouts, bulk item pickup, renovation waste hauling, and garage and basement cleanouts. Equipped for Potomac&apos;s estate scale — not just standard suburban volumes. Serving Avenel, Potomac Village, Great Falls Road corridor, and River Road communities.
                    </p>
                    <div className="hero-meta">
                        <span className="badge">⭐ 4.9 Rating &middot; 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                        <span className="badge">DC DLCP #410526000209</span>
                        <span className="badge">Licensed &amp; Insured</span>
                        <span className="badge">Estate-Scale Capacity</span>
                        <span className="badge">Multi-Load Projects</span>
                        <span className="badge">Free Estimate</span>
                    </div>
                </div>

                <div className="patio-banner">
                    <strong>Potomac Junk Removal Expertise:</strong> Potomac&apos;s R-200 zoned estate properties are among Montgomery County&apos;s largest residential homes — with square footage, storage capacity, and renovation debris volumes that far exceed what standard suburban junk removal crews are equipped to handle. A whole-home renovation on a Potomac estate generates multiple truck loads of debris. A full estate cleanout on a large Potomac property can take multiple days and multiple crews. DMV General Contracting Group is equipped for Potomac&apos;s scale — with the capacity, experience, and responsible disposal practices that estate-level junk removal in Potomac requires.
                </div>

                <h2>Complete Junk Removal Services for Potomac Homes</h2>
                <div className="card-grid">
                    <div className="card"><h3>🏗️ Large-Scale Construction Debris Removal</h3><p>Multi-load debris hauling for Potomac&apos;s estate renovation projects — whole-home gut remodels, large addition projects, kitchen and bath renovations at estate scale. Hauls scheduled at project milestones to keep Potomac job sites clear throughout the renovation. Multiple loads managed efficiently on a single project timeline.</p></div>
                    <div className="card"><h3>🏠 Full Estate Cleanout</h3><p>Complete estate cleanout for Potomac&apos;s large homes — removing furniture, appliances, household goods, stored items, and accumulated belongings across multiple rooms, garages, basements, and outbuildings. Potomac estate cleanouts frequently require multiple loads and multiple days — we plan accordingly and execute completely.</p></div>
                    <div className="card"><h3>🏺 Pre-Sale Estate Preparation</h3><p>Full property cleared for sale or listing — furniture, personal property, stored items, and decades of accumulated belongings removed from Potomac estate homes being prepared for the market. Property left empty and clean for staging, photography, or renovation before listing.</p></div>
                    <div className="card"><h3>🛋️ Bulk Item &amp; Furniture Pickup</h3><p>Large-scale furniture removal from Potomac estate homes — dining room sets, bedroom suites, oversized sofas and sectionals, antique pieces, and large-format items that require multiple movers and careful handling through Potomac&apos;s large home layouts and long driveways.</p></div>
                    <div className="card"><h3>🍳 Appliance Removal</h3><p>Old appliances removed from Potomac kitchens, laundry rooms, and garages — refrigerators, double ovens, wine coolers, washers, dryers, and outdoor kitchen appliances. Common during kitchen renovations and appliance upgrades in Potomac&apos;s estate kitchens. Responsible disposal and recycling where applicable.</p></div>
                    <div className="card"><h3>🔨 Renovation Waste Hauling</h3><p>Post-renovation cleanout for Potomac homeowners after a kitchen remodel, addition project, outdoor living build, or whole-home renovation — all remaining debris, packaging, and waste cleared so the finished Potomac estate space is ready for enjoyment without a construction cleanup burden.</p></div>
                    <div className="card"><h3>🏡 Garage, Basement &amp; Outbuilding Cleanout</h3><p>Decades of accumulated storage cleared from Potomac&apos;s large garages (frequently 3-car), finished and unfinished basements, pool houses, and storage outbuildings. A common first step before a garage conversion, basement renovation, or ADU construction begins on a Potomac estate property.</p></div>
                    <div className="card"><h3>🔁 Ongoing Renovation Site Cleanup</h3><p>Scheduled debris removal throughout a long-running Potomac renovation project — not just a single end-of-project haul. Milestone-based cleanup scheduling keeps large Potomac job sites safe, organized, and accessible to tradespeople throughout the renovation duration.</p></div>
                </div>

                <h2>Common Junk Removal Needs in Potomac</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr><th>Situation</th><th>Potomac-Specific Scale &amp; Considerations</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Whole-home estate renovation debris</td><td>Potomac estate renovations generate significantly more debris than standard suburban projects — multiple rooms, larger square footage, higher-volume material removal. Multi-load hauls scheduled at project milestones. DMV-GC coordinates debris removal as part of the overall renovation workflow.</td></tr>
                                <tr><td>Full estate cleanout</td><td>Large Potomac properties — 5,000–10,000+ square feet across multiple floors, 3-car garages, finished basements, and sometimes pool houses or guest cottages — require multi-day, multi-load cleanout planning. We assess the full scope at the free on-site estimate before any work begins.</td></tr>
                                <tr><td>Pre-sale preparation</td><td>Potomac estate homes being prepared for listing — often after decades of ownership — require complete clearing of accumulated belongings, stored items, and furniture before staging, photography, or renovation can begin. We clear the property completely and leave it ready for the next step.</td></tr>
                                <tr><td>Outdoor living renovation debris</td><td>Potomac&apos;s large-scale outdoor living projects — pool surround replacement, patio renovation, outdoor kitchen rebuild — generate significant hardscape debris including concrete, stone, tile, and landscape waste. Multi-load hauling coordinated with outdoor project timeline.</td></tr>
                                <tr><td>3-car garage cleanout</td><td>Potomac&apos;s estate properties typically have oversized garages with extensive storage — decades of accumulated sporting equipment, tools, holiday items, and stored furniture. A multi-load cleanout project before a garage conversion or renovation begins.</td></tr>
                                <tr><td>Appliance suite replacement</td><td>Potomac kitchen renovations often involve replacing a full suite of high-end appliances — double refrigerators, professional ranges, multiple dishwashers, wine coolers, warming drawers. Coordinated removal of the full outgoing appliance set before new equipment arrives.</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Why Potomac&apos;s Estate Scale Requires a Different Approach</h2>
                <p><strong>Standard suburban junk removal crews are not equipped for Potomac&apos;s estate scale:</strong> A Potomac estate renovation generates 3–5x the debris volume of a standard suburban remodel. A Potomac estate cleanout requires moving furniture through large floor plans, down long driveways, and loading multiple truck loads — not a single-crew, single-haul job. DMV General Contracting Group plans Potomac junk removal projects with the estate scale in mind: multi-crew capacity where needed, multiple hauls planned and priced at the estimate, and scheduling that works with the property&apos;s size and layout rather than treating it like a standard suburban cleanout.</p>

                <h2>Why Potomac Homeowners Choose DMV General Contracting Group</h2>
                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">⭐</div>
                        <strong>4.9 Rating</strong>
                        <span>97+ verified reviews</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>MD MHIC #156178</strong>
                        <span>Licensed &amp; fully insured</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🏠</div>
                        <strong>Estate-Scale Capacity</strong>
                        <span>Multi-load, multi-crew projects</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🔄</div>
                        <strong>Responsible Disposal</strong>
                        <span>Donation &amp; recycling coordination</span>
                    </div>
                </div>
                <div className="card-grid">
                    <div className="card"><h3>Licensed General Contractor — Not Just a Hauler</h3><p>DMV General Contracting Group is a licensed Maryland general contractor (MHIC #156178). When junk removal is part of a Potomac renovation, the same team that removes the debris completes the remodel. One team, one workflow — no handoff between a hauling company and a separate contractor.</p></div>
                    <div className="card"><h3>Estate-Scale Capacity</h3><p>Multi-load hauls, multi-crew scheduling, and estate-scale planning for Potomac&apos;s large properties. We assess the full scope at the free on-site estimate and plan the removal accordingly — not a one-size-fits-all suburban approach applied to a 7,000-square-foot estate home.</p></div>
                    <div className="card"><h3>Responsible Disposal</h3><p>Materials sorted for donation, recycling, and responsible disposal. Usable furniture and goods from Potomac estate cleanouts directed to donation partners where the family wishes. Renovation materials recycled where applicable. No illegal dumping — licensed, insured, and responsible at every step.</p></div>
                    <div className="card"><h3>Discrete &amp; Professional</h3><p>Potomac&apos;s established neighborhoods require a crew that works efficiently, respects the property and its surroundings, and does not leave debris on long driveways or block neighboring lots. DMV-GC operates with the professionalism that Potomac estate properties expect.</p></div>
                </div>

                <h2>Our Junk Removal Process in Potomac</h2>
                <div className="steps">
                    {[
                        { num: 1, title: "Free On-Site Estimate", desc: "We visit your Potomac property, walk through the full scope — all rooms, garages, outbuildings, and exterior areas — assess the total volume and number of loads required, and provide a firm, transparent price before any work begins. Estate-scale scope fully accounted for at the estimate." },
                        { num: 2, title: "Scheduling & Planning", desc: "Multi-load and multi-day cleanout projects planned and scheduled around your timeline. Renovation debris hauls scheduled at project milestones. We work around your Potomac property's schedule — including HOA or Avenel community requirements if applicable." },
                        { num: 3, title: "Sorting & Loading", desc: "Materials sorted for donation, recycling, and disposal before loading. Usable furniture and goods set aside for donation where requested. All remaining material loaded efficiently — multi-crew where the estate scope requires. You do not lift anything." },
                        { num: 4, title: "Responsible Multi-Load Hauling", desc: "All material hauled to appropriate disposal, recycling, or donation facilities. Multiple loads managed on the same project — each load properly disposed of. No illegal dumping, no materials left on the property overnight without agreement." },
                        { num: 5, title: "Site Cleanup", desc: "Work area swept and left clean at each load completion. For interior cleanouts — all floors swept, no debris left behind in any room. For construction debris — job site left clear and ready for the next phase. Driveway cleaned before departure." },
                        { num: 6, title: "Completion & Confirmation", desc: "Final walkthrough with you at completion to confirm all agreed items have been removed and all areas are clean. Donation receipts provided where applicable. Job complete — Potomac property clear and ready for its next stage." }
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

                <h2>Junk Removal Pricing — Potomac, MD</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr><th>Service</th><th>Starting Price</th><th>Notes</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Single bulk item pickup</td><td>$75 – $150</td><td>Single oversized item — sofa, appliance, mattress, exercise equipment</td></tr>
                                <tr><td>Partial truck load</td><td>$150 – $400</td><td>Several items — furniture, boxes, mixed household junk</td></tr>
                                <tr><td>Full truck load</td><td>$400 – $700+</td><td>Full load of mixed residential junk, furniture, or light construction debris</td></tr>
                                <tr><td>Multi-load estate cleanout</td><td>By scope — free estimate</td><td>Potomac estate properties typically require 2–6+ loads — full scope priced after on-site walkthrough</td></tr>
                                <tr><td>Construction debris — renovation project</td><td>By volume — free estimate</td><td>Multi-load debris from Potomac estate renovations priced by scope after on-site review. Milestone hauls available for ongoing projects.</td></tr>
                                <tr><td>Garage / basement / outbuilding cleanout</td><td>By scope — free estimate</td><td>Potomac&apos;s oversized garages and large storage areas priced after on-site assessment of full scope</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p className="price-note">* All prices confirmed at free on-site estimate before work begins. Price at estimate is price at completion — no surprise charges.</p>

                <h2>What We Accept — and What We Don&apos;t</h2>
                <div className="card-grid">
                    <div className="card">
                        <h3>✅ We Remove</h3>
                        <ul className="accept-list">
                            <li>Furniture — full estate suites, oversized sofas, antiques</li>
                            <li>Appliances — refrigerators, ovens, wine coolers, washers, dryers</li>
                            <li>Construction debris — drywall, lumber, tile, stone, flooring</li>
                            <li>Hardscape debris — old concrete, pavers, stone, pool coping</li>
                            <li>Garage contents — tools, sports equipment, stored items</li>
                            <li>Basement and attic contents — boxes, furniture, stored goods</li>
                            <li>Outdoor furniture and patio items</li>
                            <li>Electronics (e-waste at appropriate facility)</li>
                            <li>Mattresses, box springs, and bedding</li>
                            <li>Exercise and sporting equipment</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>❌ We Do Not Remove</h3>
                        <ul className="refuse-list">
                            <li>Hazardous waste — chemicals, solvents, liquid paint</li>
                            <li>Asbestos-containing materials (requires certified abatement)</li>
                            <li>Medical or biohazard waste</li>
                            <li>Propane tanks (full or partially full)</li>
                            <li>Automotive fluids or oil</li>
                            <li>Lead paint chips (requires certified handling)</li>
                            <li>Explosive or flammable materials</li>
                        </ul>
                        <p className="list-note">If your Potomac property has any of these materials, we can refer you to appropriate licensed specialists for safe handling and disposal.</p>
                    </div>
                </div>

                <h2>Junk Removal Service Area</h2>
                <p>DMV General Contracting Group provides residential junk removal services throughout <strong>Potomac, MD</strong>, including Avenel, Potomac Village, Great Falls Road corridor, River Road communities, Persimmon Tree Road area, and surrounding communities including North Bethesda, Bethesda, Rockville, Cabin John, and Chevy Chase.</p>
                <div className="areas-grid">
                    <span className="area-pill">Potomac, MD</span>
                    <span className="area-pill">Avenel</span>
                    <span className="area-pill">Potomac Village</span>
                    <span className="area-pill">Great Falls Road</span>
                    <span className="area-pill">River Road</span>
                    <span className="area-pill">Persimmon Tree Road</span>
                    <span className="area-pill">North Bethesda, MD</span>
                    <span className="area-pill">Bethesda, MD</span>
                    <span className="area-pill">Rockville, MD</span>
                    <span className="area-pill">Cabin John, MD</span>
                    <span className="area-pill">Chevy Chase, MD</span>
                </div>

                <h2>Frequently Asked Questions — Junk Removal in Potomac, MD</h2>
                <Accordion className="faq-list">
                    {faqData.map((item, index) => (
                        <AccordionItem eventKey={index.toString()} key={index} className="faq-item">
                            <AccordionHeader as="h3" className="faq-q">{item.question}</AccordionHeader>
                            <AccordionBody className="faq-a">{item.answer}</AccordionBody>
                        </AccordionItem>
                    ))}
                </Accordion>

                <h2>Explore Our Other Services in Potomac, MD</h2>
                <p>DMV-GC Group offers a complete range of home renovation services for Potomac homes:</p>
                <ul className="related-links">
                    <li><Link href="/service/home-additions/potomac-md">Home Additions in Potomac, MD</Link></li>
                    <li><Link href="/service/design-build/potomac-md">Design-Build Contractor in Potomac, MD</Link></li>
                    <li><Link href="/service/patios/potomac-md">Patio Installation in Potomac, MD</Link></li>
                    <li><Link href="/service/roofing/potomac-md">Roofing Services in Potomac, MD</Link></li>
                    <li><Link href="/service/kitchen-remodeling/potomac-md">Kitchen Remodeling in Potomac, MD</Link></li>
                    <li><Link href="/service/concrete/potomac-md">Concrete Services in Potomac, MD</Link></li>
                </ul>

                <div className="cta-banner">
                    <h2>Need Junk Removal in Potomac, MD?</h2>
                    <p>Call DMV General Contracting Group for estate-scale junk removal in Potomac — large-scale construction debris, full estate cleanouts, multi-load hauling, and renovation waste removal. Equipped for Potomac&apos;s estate scale. Free on-site estimate.</p>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn">📞 Call +1 240-730-1292</a>
                    <a href="mailto:support@dmv-gc.com" className="cta-btn outline">Email support@dmv-gc.com</a>
                </div>

                <div className="page-footer">
                    <strong>DMV General Contracting Group LLC</strong>
                    <p>11810 Grand Park Ave. Suite 500, North Bethesda, MD 20852</p>
                    <p>MD MHIC #156178 · DC DLCP #410526000209</p>
                    <p>Available 7 Days a Week · 1-Year Workmanship Warranty</p>
                    <p>Phone: +1 240-730-1292 · Email: support@dmv-gc.com</p>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
            />
        </div>
    );
}