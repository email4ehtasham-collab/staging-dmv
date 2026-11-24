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
            "description": "Licensed Maryland general contractor providing professional junk removal and debris hauling services in Bethesda, MD. Construction debris removal, residential cleanouts, estate cleanouts, bulk item pickup, and renovation waste hauling. MHIC #156178.",
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
                { "@type": "City", "name": "Bethesda", "sameAs": "https://en.wikipedia.org/wiki/Bethesda,_Maryland" },
                { "@type": "City", "name": "North Bethesda" },
                { "@type": "City", "name": "Chevy Chase" },
                { "@type": "City", "name": "Kensington" },
                { "@type": "City", "name": "Potomac" },
                { "@type": "City", "name": "Rockville" },
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
            "@id": "https://www.dmv-gc.com/service/junk-removal/bethesda-md#service",
            "serviceType": "Junk Removal, Construction Debris Removal, Residential Cleanout, Estate Cleanout, Bulk Item Pickup, Renovation Waste Removal",
            "name": "Junk Removal Services in Bethesda, MD",
            "provider": { "@id": "https://www.dmv-gc.com/#business" },
            "areaServed": {
                "@type": "City",
                "name": "Bethesda",
                "sameAs": "https://en.wikipedia.org/wiki/Bethesda,_Maryland"
            },
            "description": "Professional junk removal and debris hauling for Bethesda homeowners — construction debris, residential cleanouts, estate cleanouts, bulk item pickup, old furniture and appliances, renovation waste, and garage and basement cleanouts. Licensed and insured, MHIC #156178."
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                { "@type": "ListItem", "position": 3, "name": "Junk Removal", "item": "https://www.dmv-gc.com/service/junk-removal" },
                { "@type": "ListItem", "position": 4, "name": "Bethesda, MD", "item": "https://www.dmv-gc.com/service/junk-removal/bethesda-md" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What types of junk does DMV General Contracting Group remove in Bethesda?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DMV General Contracting Group removes construction and renovation debris, old furniture and appliances, household junk, garage and basement clutter, yard waste, and bulk items from Bethesda residential properties. We also handle full estate cleanouts and pre-sale property cleanouts for Bethesda homes being prepared for the market."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can DMV General Contracting Group remove construction debris from a Bethesda renovation?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Construction debris removal is one of our most common junk removal requests in Bethesda — drywall scraps, lumber offcuts, tile, flooring, fixtures, and packaging waste from renovation projects. As a licensed general contractor, we coordinate debris removal as part of remodeling projects or as a standalone service for Bethesda homeowners managing their own renovation."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer estate cleanout services in Bethesda, MD?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. DMV General Contracting Group provides full estate cleanout services for Bethesda properties — removing furniture, appliances, household goods, and accumulated belongings from homes being prepared for sale, transfer, or renovation. We handle the heavy lifting, sorting, and responsible disposal, so families managing an estate transition do not have to."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does junk removal cost in Bethesda, MD?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Junk removal costs in Bethesda depend on the volume and type of material being removed. A single-item pickup starts at $75–$150. A partial load runs $150–$350. A full truck load runs $350–$600+. Estate cleanouts and construction debris removal are priced by scope after a free on-site review. DMV General Contracting Group provides a free estimate before any junk removal work begins."
                    }
                }
            ]
        }
    ]
};

export default function JunkRemovalBethesdaMD() {
    const faqData = [
        {
            question: "Do I need to be home for junk removal in Bethesda?",
            answer: "For outdoor or garage cleanouts where access does not require entering the home, you do not need to be present. For interior cleanouts, a responsible adult should be present to confirm which items are to be removed. We can discuss access arrangements at the time of scheduling."
        },
        {
            question: "How quickly can you schedule junk removal in Bethesda?",
            answer: "Same-day service is available for many Bethesda junk removal requests depending on schedule availability. Next-day and scheduled pickup are available for all standard requests. Estate cleanouts and large construction debris projects are scheduled after the free on-site estimate. Call +1 240-730-1292 to check availability."
        },
        {
            question: "Can you remove construction debris from an ongoing renovation in Bethesda?",
            answer: "Yes — and this is one of the most common requests we receive in Bethesda. As a licensed general contractor, DMV General Contracting Group coordinates debris removal during and after renovation projects. We schedule debris hauls at key project milestones to keep the job site clean and safe throughout the renovation — not just at the end."
        },
        {
            question: "Do you donate usable items from Bethesda cleanouts?",
            answer: "Yes. Usable furniture, household goods, and appliances from Bethesda cleanouts are sorted and directed to local donation partners where the homeowner or family wishes. We provide donation receipts where available. Not all items are accepted by all donation partners — we confirm at the on-site estimate what can be donated and what must be disposed of."
        },
        {
            question: "How much does junk removal cost in Bethesda, MD?",
            answer: "Single bulk item pickup starts at $75–$150. A partial load runs $150–$350. A full truck load runs $350–$600+. Estate cleanouts and construction debris projects are priced by scope at the free on-site estimate. All prices are confirmed before work begins — no surprise charges at completion."
        }
    ];

    return (
        <div className="city-service-detail-page junk-removal junk-removal-bethesda-md">
            <NavitemActive nav="service" />

            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/junk-removal">Junk Removal</Link><span>›</span>
                    Bethesda, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Bethesda, MD</div>
                    <h1>Junk Removal Services in Bethesda, MD</h1>
                    <p>
                        Professional junk removal and debris hauling for Bethesda homeowners — construction debris, residential cleanouts, estate cleanouts, bulk item pickup, old furniture and appliances, renovation waste, and garage and basement cleanouts. Fast, responsible, and fully licensed. Serving Bethesda's Woodmont, Edgemoor, Battery Park, Wyngate, and surrounding neighborhoods.
                    </p>
                    <div className="hero-meta">
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                        <span className="badge">DC DLCP #410526000209</span>
                        <span className="badge">Licensed &amp; Insured</span>
                        <span className="badge">Same-Day &amp; Scheduled Service</span>
                        <span className="badge">Free Estimate</span>
                        <span className="badge">Responsible Disposal</span>
                    </div>
                </div>

                <div className="patio-banner">
                    <strong>Bethesda Junk Removal Expertise:</strong> Bethesda's active remodeling market — high-end kitchen and bathroom renovations, whole-home gut remodels, pre-sale cleanouts in Woodmont and Edgemoor, and estate transitions in Battery Park and Bradley Hills — generates significant volumes of debris and unwanted material that needs to be removed quickly, responsibly, and without disruption to neighbors or the surrounding community. DMV General Contracting Group provides licensed, insured junk removal for Bethesda residential properties — from single bulk item pickup to full estate cleanouts and multi-load construction debris hauling.
                </div>

                <h2>Complete Junk Removal Services for Bethesda Homes</h2>
                <div className="card-grid">
                    <div className="card"><h3>🏗️ Construction Debris Removal</h3><p>Drywall, lumber, tile, flooring, insulation, packaging, and renovation waste removed from Bethesda remodeling projects — during or after the renovation. As a licensed general contractor, DMV-GC coordinates debris removal as part of the overall project workflow or as a standalone service after another contractor's work is complete.</p></div>
                    <div className="card"><h3>🏠 Residential Cleanout</h3><p>Full residential cleanout services for Bethesda homes being decluttered, downsized, renovated, or prepared for sale. We remove accumulated furniture, household goods, stored items, and general clutter — leaving the home clear and ready for its next stage.</p></div>
                    <div className="card"><h3>🏺 Estate Cleanout</h3><p>Compassionate and efficient full estate cleanouts for Bethesda families managing a property transition. We remove furniture, appliances, household goods, and accumulated belongings — sorting for donation, recycling, and disposal — so families are not left managing the physical process of clearing a home during a difficult time.</p></div>
                    <div className="card"><h3>🛋️ Bulk Item Pickup</h3><p>Single or multiple bulk items removed from Bethesda homes — old sofas, mattresses, dining sets, armoires, exercise equipment, and oversized items that cannot go out with regular trash collection. We handle the heavy lifting and responsible disposal.</p></div>
                    <div className="card"><h3>🍳 Appliance Removal</h3><p>Old refrigerators, washers, dryers, dishwashers, ovens, and other appliances removed and hauled from Bethesda homes. Appliances removed as part of a kitchen or laundry renovation, or as standalone pickup when upgrading to new equipment. Responsible disposal and recycling where applicable.</p></div>
                    <div className="card"><h3>🔨 Renovation Waste Hauling</h3><p>Post-renovation cleanout for Bethesda homeowners after a kitchen remodel, bathroom renovation, basement finishing, or whole-home renovation. All remaining debris, packaging, and waste material cleared so the finished space can be enjoyed without a construction cleanup burden.</p></div>
                    <div className="card"><h3>🏡 Garage &amp; Basement Cleanout</h3><p>Decades of accumulated storage cleared from Bethesda garages, basements, and attics — sports equipment, old tools, stored furniture, boxes, and household goods sorted and removed. A common first step before a basement finishing or garage conversion project begins.</p></div>
                    <div className="card"><h3>🏢 Pre-Sale Property Cleanout</h3><p>Property prepared for listing with a full cleanout of unwanted furniture, personal property, and clutter. Common in Bethesda's active real estate market where sellers want the property staged-ready without the physical burden of managing decades of accumulated belongings before listing.</p></div>
                </div>

                <h2>Common Junk Removal Needs in Bethesda</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr><th>Situation</th><th>What We Remove</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Kitchen or bathroom remodel debris</td><td>Old cabinets, countertops, tile, fixtures, drywall scraps, packaging from new appliances, flooring, and all renovation waste left after a Bethesda kitchen or bathroom project is complete.</td></tr>
                                <tr><td>Whole-home renovation cleanout</td><td>Multi-room renovation debris — drywall, lumber, insulation, old flooring, plumbing and electrical fixtures, and all packaging and waste from a full Bethesda home remodel. Coordinated with renovation schedule to keep the job site clear throughout the project.</td></tr>
                                <tr><td>Estate cleanout — selling a Bethesda home</td><td>Full property cleared — furniture, appliances, kitchen contents, bedroom furnishings, stored items, and accumulated belongings. Property left clean and empty, ready for renovation, staging, or sale. Donation and recycling coordination included where the family wishes.</td></tr>
                                <tr><td>Downsizing / moving</td><td>Furniture, appliances, and household goods that will not be moving to the new home removed and hauled before or during the move. We work around the moving schedule to minimize disruption to the Bethesda household transition.</td></tr>
                                <tr><td>Garage or basement conversion prep</td><td>Accumulated stored items cleared before a garage conversion, basement finishing, or ADU construction begins. A common first step before DMV-GC begins the remodeling scope itself — one team handles both the cleanout and the renovation.</td></tr>
                                <tr><td>Bulk item — single pickup</td><td>One or a few large items removed — old sofa, mattress, dining table, exercise equipment, broken appliance — that cannot go out with regular Bethesda curbside trash collection.</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Why Bethesda Homeowners Choose DMV General Contracting Group</h2>
                <p>Bethesda's high-end remodeling market — whole-home gut remodels, estate-to-renovation transitions, and pre-sale property preparations in Woodmont, Edgemoor, and Battery Park — demands a junk removal service that understands the renovation context, handles materials responsibly, and works without disruption to neighbors or the surrounding community. DMV General Contracting Group brings all three.</p>

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
                        <div className="icon">🔄</div>
                        <strong>Responsible Disposal</strong>
                        <span>Donation &amp; recycling coordination</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🏗️</div>
                        <strong>Contractor Advantage</strong>
                        <span>Debris removal + renovation, one team</span>
                    </div>
                </div>
                <div className="card-grid">
                    <div className="card"><h3>Licensed General Contractor — Not Just a Hauler</h3><p>DMV General Contracting Group is a licensed Maryland general contractor (MHIC #156178) — not a standalone junk hauling company. When junk removal is part of a renovation project, the same team that removes the debris completes the remodel. No handoff between a hauling company and a contractor. One team, one workflow.</p></div>
                    <div className="card"><h3>Responsible Disposal</h3><p>Materials are sorted for donation, recycling, and responsible disposal — not just dumped at the nearest landfill. Usable furniture and household goods from Bethesda estate cleanouts are directed to local donation partners where the family wishes. Renovation materials are recycled where applicable.</p></div>
                    <div className="card"><h3>Bethesda Neighborhood Awareness</h3><p>Junk removal in Bethesda's established neighborhoods requires awareness of parking, access, and neighbor impact. Our crews work efficiently, do not block driveways unnecessarily, and leave the property and surrounding area clean at completion. No debris left on the curb or in the alley overnight.</p></div>
                    <div className="card"><h3>Free Estimate, No Surprises</h3><p>All Bethesda junk removal projects begin with a free on-site estimate — priced by volume and material type before any work begins. No vague quotes over the phone that increase when the truck arrives. The price agreed at the estimate is the price at completion.</p></div>
                </div>

                <h2>Our Junk Removal Process in Bethesda</h2>
                <div className="steps">
                    {[
                        { num: 1, title: "Free On-Site Estimate", desc: "We visit your Bethesda property, assess the volume and type of material to be removed, and provide a firm price before any work begins. No phone guessing — the estimate is based on what we actually see at the property. Free, no obligation." },
                        { num: 2, title: "Scheduling", desc: "Same-day or scheduled service available for Bethesda properties. We work around your schedule — before a move, during a renovation, or after a renovation is complete. Weekend and weekday availability." },
                        { num: 3, title: "Sorting & Loading", desc: "Our crew sorts materials for donation, recycling, and disposal before loading — materials that can be donated are set aside, recyclable materials separated. All remaining junk loaded efficiently and completely. You do not lift anything." },
                        { num: 4, title: "Responsible Hauling", desc: "All material hauled from your Bethesda property to appropriate disposal, recycling, or donation facilities. No illegal dumping, no materials left on the curb or alley. Licensed, insured, and responsible at every step." },
                        { num: 5, title: "Site Cleanup", desc: "Work area swept and left clean at completion. For interior cleanouts — floors swept, no debris left behind. For construction debris — job site left clear and ready for the next phase of work or for move-in." },
                        { num: 6, title: "Completion & Confirmation", desc: "Walkthrough with you at completion to confirm all items agreed upon have been removed. Any donation receipts provided where applicable. Job complete — property clean and clear." }
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

                <h2>Junk Removal Pricing — Bethesda, MD</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr><th>Service</th><th>Starting Price</th><th>Notes</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Single bulk item pickup</td><td>$75 – $150</td><td>Sofa, mattress, appliance, exercise equipment, or single oversized item</td></tr>
                                <tr><td>Partial truck load (¼ – ½ load)</td><td>$150 – $350</td><td>Several items — a few pieces of furniture, boxes, mixed household junk</td></tr>
                                <tr><td>Full truck load</td><td>$350 – $600+</td><td>Full load of mixed residential junk, furniture, or light construction debris</td></tr>
                                <tr><td>Construction debris removal</td><td>By volume — free estimate</td><td>Drywall, tile, flooring, lumber, renovation waste — priced by load after on-site review</td></tr>
                                <tr><td>Residential cleanout</td><td>By scope — free estimate</td><td>Full home or room-by-room cleanout priced after on-site walkthrough</td></tr>
                                <tr><td>Estate cleanout</td><td>By scope — free estimate</td><td>Full property cleared — all contents removed, property left empty and clean</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <p className="price-note">* All prices are starting estimates. Final price confirmed at free on-site estimate before work begins. Price at estimate is price at completion — no surprise charges.</p>

                <h2>What We Accept — and What We Don't</h2>
                <div className="card-grid">
                    <div className="card">
                        <h3>✅ We Remove</h3>
                        <ul className="accept-list">
                            <li>Furniture — sofas, beds, tables, chairs, dressers</li>
                            <li>Appliances — refrigerators, washers, dryers, ovens</li>
                            <li>Construction debris — drywall, lumber, tile, flooring</li>
                            <li>Boxes, bags, and general household junk</li>
                            <li>Garage contents — tools, sports equipment, stored items</li>
                            <li>Basement and attic cleanout items</li>
                            <li>Yard waste and outdoor furniture</li>
                            <li>Electronics (e-waste disposal at appropriate facility)</li>
                            <li>Mattresses and box springs</li>
                            <li>Exercise equipment</li>
                        </ul>
                    </div>
                    <div className="card">
                        <h3>❌ We Do Not Remove</h3>
                        <ul className="refuse-list">
                            <li>Hazardous waste (chemicals, solvents, paint cans with liquid)</li>
                            <li>Asbestos-containing materials (requires certified abatement)</li>
                            <li>Medical waste or biohazard materials</li>
                            <li>Propane tanks (full or partially full)</li>
                            <li>Automotive fluids or oil</li>
                            <li>Lead paint chips (requires certified handling)</li>
                            <li>Explosive or flammable materials</li>
                        </ul>
                        <p className="list-note">If your Bethesda home has any of these materials, we can refer you to appropriate licensed specialists for safe handling and disposal.</p>
                    </div>
                </div>

                <h2>Junk Removal Service Area</h2>
                <p>DMV General Contracting Group provides residential junk removal services throughout <strong>Bethesda, MD</strong>, including Woodmont, Edgemoor, Battery Park, Wyngate, Bradley Hills, East Bethesda, and surrounding Montgomery County communities.</p>
                <div className="areas-grid">
                    <span className="area-pill">Bethesda, MD</span>
                    <span className="area-pill">Woodmont</span>
                    <span className="area-pill">Edgemoor</span>
                    <span className="area-pill">Battery Park</span>
                    <span className="area-pill">Wyngate</span>
                    <span className="area-pill">Bradley Hills</span>
                    <span className="area-pill">East Bethesda</span>
                    <span className="area-pill">North Bethesda, MD</span>
                    <span className="area-pill">Chevy Chase, MD</span>
                    <span className="area-pill">Kensington, MD</span>
                    <span className="area-pill">Potomac, MD</span>
                    <span className="area-pill">Rockville, MD</span>
                    <span className="area-pill">Silver Spring, MD</span>
                    <span className="area-pill">Washington DC</span>
                </div>

                <p className="tip"><strong>Permit &amp; disposal note:</strong> Bethesda junk removal generally does not require a permit — but construction debris from permitted renovation work must be hauled by a licensed, insured contractor and disposed of at an approved facility. DMV General Contracting Group handles that documentation for every Bethesda debris haul.</p>

                <h2>Frequently Asked Questions — Junk Removal in Bethesda, MD</h2>
                <Accordion className="faq-list">
                    {faqData.map((item, index) => (
                        <AccordionItem eventKey={index.toString()} key={index} className="faq-item">
                            <AccordionHeader as="h3" className="faq-q">{item.question}</AccordionHeader>
                            <AccordionBody className="faq-a">{item.answer}</AccordionBody>
                        </AccordionItem>
                    ))}
                </Accordion>

                <h2>Explore Our Other Services in Bethesda, MD</h2>
                <ul className="related-links">
                    <li><Link href="/service/kitchen-remodeling/bethesda-md">Kitchen Remodeling in Bethesda, MD</Link></li>
                    <li><Link href="/service/patios/bethesda-md">Patio Installation in Bethesda, MD</Link></li>
                    <li><Link href="/service/hvac/bethesda-md">HVAC Services in Bethesda, MD</Link></li>
                    <li><Link href="/service/framing/bethesda-md">Framing Services in Bethesda, MD</Link></li>
                </ul>

                <div className="cta-banner">
                    <h2>Need Junk Removal in Bethesda, MD?</h2>
                    <p>Call DMV General Contracting Group for fast, responsible junk removal in Bethesda — construction debris, estate cleanouts, bulk item pickup, residential cleanouts, and renovation waste hauling. Free on-site estimate. Same-day service available.</p>
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
