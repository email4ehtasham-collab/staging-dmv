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
            "description": "Licensed Maryland general contractor providing professional junk removal and debris hauling services in Cabin John, MD. Residential and commercial cleanouts, construction debris removal, bulk item pickup, and property cleanouts. MHIC #156178.",
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
                { "@type": "City", "name": "Cabin John", "sameAs": "https://en.wikipedia.org/wiki/Cabin_John,_Maryland" },
                { "@type": "City", "name": "Glen Echo" },
                { "@type": "City", "name": "Potomac" },
                { "@type": "City", "name": "Bethesda" },
                { "@type": "City", "name": "North Bethesda" },
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
            "@id": "https://www.dmv-gc.com/service/junk-removal/cabin-john-md#service",
            "serviceType": "Junk Removal, Construction Debris Removal, Residential Cleanout, Commercial Cleanup, Bulk Item Pickup, Property Cleanout",
            "name": "Junk Removal Services in Cabin John, MD",
            "provider": { "@id": "https://www.dmv-gc.com/#business" },
            "areaServed": {
                "@type": "City",
                "name": "Cabin John",
                "sameAs": "https://en.wikipedia.org/wiki/Cabin_John,_Maryland"
            },
            "description": "Professional junk removal and cleanout services in Cabin John, MD — residential, commercial, construction debris, bulk item removal, and property cleanouts. Licensed and insured, MHIC #156178."
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                { "@type": "ListItem", "position": 3, "name": "Junk Removal", "item": "https://www.dmv-gc.com/service/junk-removal" },
                { "@type": "ListItem", "position": 4, "name": "Cabin John, MD", "item": "https://www.dmv-gc.com/service/junk-removal/cabin-john-md" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What types of junk can you remove in Cabin John?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DMV General Contracting Group provides removal support for household clutter, bulk items, renovation debris, construction materials, and other unwanted property items in Cabin John, MD, subject to project requirements."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide residential and commercial junk removal in Cabin John?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Our services can support both residential properties and commercial spaces throughout Cabin John, MD."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can junk removal be part of a renovation project in Cabin John?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Junk and debris removal can be coordinated with remodeling, renovation, and other property improvement work for Cabin John homes and businesses."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does junk removal cost in Cabin John, MD?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A single bulk item pickup starts at $75–$150. A partial load runs $150–$350. A full truck load runs $350–$600+. Estate cleanouts and construction debris removal are priced by scope after a free on-site estimate. DMV General Contracting Group provides a firm price before any work begins."
                    }
                }
            ]
        }
    ]
};

export default function JunkRemovalCabinJohnMD() {
    const faqData = [
        {
            question: "What types of junk can you remove?",
            answer: "We provide removal support for household clutter, bulk items, renovation debris, construction materials, and other unwanted property items in Cabin John, MD, subject to project requirements."
        },
        {
            question: "Do you provide residential and commercial junk removal?",
            answer: "Yes. Our services can support both residential properties and commercial spaces throughout Cabin John, MD."
        },
        {
            question: "Can junk removal be part of a renovation project?",
            answer: "Yes. Junk and debris removal can be coordinated with remodeling, renovation, and other property improvement work for Cabin John homes and businesses."
        },
        {
            question: "Do you offer home cleanouts?",
            answer: "Yes. We provide home, garage, basement, and general property cleanout support across Cabin John, MD."
        },
        {
            question: "How can I request junk removal service?",
            answer: "Contact DMV General Contracting Group to discuss your project and the areas or materials that need to be cleared. Call +1 240-730-1292 or email support@dmv-gc.com."
        }
    ];

    return (
        <div className="city-service-detail-page junk-removal junk-removal-cabin-john-md">
            <NavitemActive nav="service" />

            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/junk-removal">Junk Removal</Link><span>›</span>
                    Cabin John, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Cabin John, MD</div>
                    <h1>Junk Removal Services in Cabin John, MD</h1>
                    <p>Clear unwanted items, household clutter, renovation debris, and other materials with dependable junk removal services from DMV General Contracting Group.</p>
                    <div className="hero-meta">
                        <span className="badge">Residential &amp; Commercial</span>
                        <span className="badge">Construction Debris</span>
                        <span className="badge">Bulk Item Removal</span>
                        <span className="badge">⭐ 4.9 Rating &middot; 97+ Reviews</span>
                        <span className="badge">MD MHIC #156178</span>
                        <span className="badge">DC DLCP #410526000209</span>
                        <span className="badge">Licensed &amp; Insured</span>
                    </div>
                </div>

                <div className="patio-banner">
                    <strong>Serving Cabin John, MD:</strong> Residential cleanouts, commercial cleanup, renovation debris removal, bulk item pickup, garage and basement cleanouts, and general clutter removal. DMV General Contracting Group provides organized junk removal and cleanout services throughout Cabin John, MD.
                </div>

                <h2>Complete Junk Removal Services for Cabin John Homes</h2>
                <div className="card-grid">
                    <div className="card"><h3>🏠 Residential Junk Removal</h3><p>Remove unwanted household items and clutter while helping restore usable space in your Cabin John home.</p></div>
                    <div className="card"><h3>🏢 Commercial Junk Removal</h3><p>Clear unwanted materials from offices, commercial spaces, and other properties with an organized removal process.</p></div>
                    <div className="card"><h3>🏗️ Construction Debris Removal</h3><p>Help clear renovation and construction debris so your Cabin John project area stays more manageable.</p></div>
                    <div className="card"><h3>🛋️ Bulk Item Pickup</h3><p>Remove large unwanted items that are difficult to handle through regular disposal methods.</p></div>
                    <div className="card"><h3>🏡 Home Cleanouts</h3><p>Comprehensive cleanout support for rooms, properties, and other areas that need to be cleared.</p></div>
                    <div className="card"><h3>🧰 Garage &amp; Basement Cleanouts</h3><p>Clear accumulated household items and clutter from garages, basements, storage areas, and similar spaces.</p></div>
                    <div className="card"><h3>🔨 Renovation Cleanup</h3><p>Remove leftover materials and debris after remodeling or renovation work is completed.</p></div>
                    <div className="card"><h3>♻️ General Clutter Removal</h3><p>Make your space more usable by clearing unwanted items and accumulated clutter.</p></div>
                </div>

                <h2>Common Junk Removal Needs in Cabin John</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr><th>Service Need</th><th>Typical Application</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Home Cleanouts</td><td>Clearing unwanted household belongings and accumulated items.</td></tr>
                                <tr><td>Garage Cleanouts</td><td>Removing stored materials, old items, and general garage clutter.</td></tr>
                                <tr><td>Renovation Cleanup</td><td>Clearing debris and unwanted materials after improvement projects.</td></tr>
                                <tr><td>Commercial Cleanup</td><td>Removing unwanted items from offices and commercial spaces.</td></tr>
                                <tr><td>Bulk Item Removal</td><td>Handling large unwanted household or property items.</td></tr>
                                <tr><td>Construction Debris</td><td>Clearing project-related debris from renovation and construction areas.</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Why Cabin John Homeowners Choose DMV General Contracting Group</h2>
                <p>DMV General Contracting Group is a licensed Maryland general contractor (MHIC #156178) providing junk removal and cleanout services throughout Cabin John, MD — with the in-house structural, electrical, plumbing, and HVAC capabilities to handle debris removal as part of a larger property project.</p>

                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">👷</div>
                        <strong>Experienced Team</strong>
                        <span>Professional support for property cleanup projects</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🏗️</div>
                        <strong>Design-Build Expertise</strong>
                        <span>Debris removal that complements larger property projects</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🔧</div>
                        <strong>In-House Services</strong>
                        <span>Structural, electrical, plumbing &amp; HVAC capabilities</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📅</div>
                        <strong>7 Days a Week</strong>
                        <span>Scheduling support available seven days a week</span>
                    </div>
                </div>
                <div className="card-grid">
                    <div className="card"><h3>Licensed General Contractor — Not Just a Hauler</h3><p>DMV General Contracting Group is a licensed Maryland general contractor (MHIC #156178). When junk removal is part of a Cabin John renovation, the same team that removes the debris completes the remodel. One team, one workflow — no handoff between a hauling company and a contractor.</p></div>
                    <div className="card"><h3>Responsible Disposal</h3><p>Materials are sorted for donation, recycling, and responsible disposal — not just dumped at the nearest landfill. Usable furniture and household goods are directed to local donation partners where the homeowner wishes.</p></div>
                    <div className="card"><h3>In-House Residential &amp; Commercial Services</h3><p>Junk removal support that works alongside DMV-GC&apos;s broader structural, electrical, plumbing, and HVAC capabilities — one contractor for the cleanup and the larger property project.</p></div>
                    <div className="card"><h3>Free Estimate, No Surprises</h3><p>All Cabin John junk removal projects begin with a free on-site estimate — priced by volume and material type before any work begins. No vague quotes over the phone that increase when the truck arrives.</p></div>
                </div>

                <h2>Our Junk Removal Process in Cabin John</h2>
                <div className="steps">
                    {[
                        { num: 1, title: "Discuss Your Project", desc: "Tell us what needs to be removed and which areas of your Cabin John property need attention." },
                        { num: 2, title: "Plan the Removal", desc: "We organize the scope of work and removal approach for your property." },
                        { num: 3, title: "Prepare the Area", desc: "The work area is prepared for safe and efficient removal." },
                        { num: 4, title: "Remove & Load", desc: "Our team removes and loads the identified unwanted materials." },
                        { num: 5, title: "Clear the Space", desc: "We help leave the designated area cleared and more usable." },
                        { num: 6, title: "Project Completion", desc: "We review the completed removal work and wrap up the project." }
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

                <h2>Junk Removal Pricing — Cabin John, MD</h2>
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
                                <tr><td>Commercial / property cleanout</td><td>By scope — free estimate</td><td>Offices, commercial spaces, and property cleanouts priced after on-site review</td></tr>
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
                        <p className="list-note">If your Cabin John property has any of these materials, we can refer you to appropriate licensed specialists for safe handling and disposal.</p>
                    </div>
                </div>

                <h2>Junk Removal Service Area</h2>
                <p>DMV General Contracting Group provides residential and commercial junk removal services in <strong>Cabin John, MD</strong> and surrounding communities in the Washington, DC metropolitan area, including Glen Echo, Brookmont, Carderock, Potomac, and Bethesda.</p>
                <div className="areas-grid">
                    <span className="area-pill">Cabin John, MD</span>
                    <span className="area-pill">Glen Echo</span>
                    <span className="area-pill">Brookmont</span>
                    <span className="area-pill">Carderock</span>
                    <span className="area-pill">Potomac, MD</span>
                    <span className="area-pill">Bethesda, MD</span>
                    <span className="area-pill">North Bethesda, MD</span>
                    <span className="area-pill">Chevy Chase, MD</span>
                </div>

                <h2>Frequently Asked Questions — Junk Removal in Cabin John, MD</h2>
                <Accordion className="faq-list">
                    {faqData.map((item, index) => (
                        <AccordionItem eventKey={index.toString()} key={index} className="faq-item">
                            <AccordionHeader as="h3" className="faq-q">{item.question}</AccordionHeader>
                            <AccordionBody className="faq-a">{item.answer}</AccordionBody>
                        </AccordionItem>
                    ))}
                </Accordion>

                <h2>Explore Our Other Services in Cabin John, MD</h2>
                <p>DMV-GC Group offers a complete range of home renovation services for Cabin John properties:</p>
                <ul className="related-links">
                    <li><Link href="/service/kitchen-remodeling/cabin-john-md">Kitchen Remodeling in Cabin John, MD</Link></li>
                    <li><Link href="/service/concrete/cabin-john-md">Concrete Services in Cabin John, MD</Link></li>
                    <li><Link href="/service/fence-installation/cabin-john-md">Fence Installation in Cabin John, MD</Link></li>
                    <li><Link href="/service/roofing/cabin-john-md">Roofing Services in Cabin John, MD</Link></li>
                    <li><Link href="/service/home-additions/cabin-john-md">Home Additions in Cabin John, MD</Link></li>
                    <li><Link href="/service/patios/cabin-john-md">Patio Installation in Cabin John, MD</Link></li>
                </ul>

                <div className="cta-banner">
                    <h2>Need Junk Removal in Cabin John, MD?</h2>
                    <p>Contact DMV General Contracting Group for dependable junk removal in Cabin John — residential cleanouts, commercial cleanup, construction debris, bulk item removal, and property cleanouts. Free on-site estimate.</p>
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