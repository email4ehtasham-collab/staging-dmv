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
            "description": "Licensed Maryland general contractor providing professional junk removal and debris hauling services in Gaithersburg, MD. Residential cleanouts, commercial spaces, bulky items, renovation debris, and unwanted clutter. MHIC #156178.",
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
                "latitude": 39.1434,
                "longitude": -77.2014
            },
            "areaServed": [
                { "@type": "City", "name": "Gaithersburg", "sameAs": "https://en.wikipedia.org/wiki/Gaithersburg,_Maryland" },
                { "@type": "City", "name": "Kentlands" },
                { "@type": "City", "name": "Lakelands" },
                { "@type": "City", "name": "Crown Farm" },
                { "@type": "City", "name": "Olde Towne" },
                { "@type": "City", "name": "Rockville" },
                { "@type": "City", "name": "Germantown" },
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
            "@id": "https://www.dmv-gc.com/service/junk-removal/gaithersburg-md#service",
            "serviceType": "Junk Removal, Construction Debris Removal, Residential Cleanout, Commercial Cleanup, Bulk Item Pickup, Property Cleanout",
            "name": "Junk Removal in Gaithersburg, MD",
            "provider": { "@id": "https://www.dmv-gc.com/#business" },
            "areaServed": {
                "@type": "City",
                "name": "Gaithersburg",
                "sameAs": "https://en.wikipedia.org/wiki/Gaithersburg,_Maryland"
            },
            "description": "Professional junk removal and debris removal services in Gaithersburg, MD — residential cleanouts, commercial spaces, bulky items, renovation debris, and unwanted clutter. Licensed and insured."
        },
        {
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
                { "@type": "ListItem", "position": 3, "name": "Junk Removal", "item": "https://www.dmv-gc.com/service/junk-removal" },
                { "@type": "ListItem", "position": 4, "name": "Gaithersburg, MD", "item": "https://www.dmv-gc.com/service/junk-removal/gaithersburg-md" }
            ]
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What types of junk can you remove in Gaithersburg?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We handle many common residential and commercial items, general clutter, bulk items, and non-hazardous renovation or construction debris in Gaithersburg, MD. Contact us with the details of your specific items."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide residential junk removal in Gaithersburg?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Our residential junk removal services can help with home cleanouts, garages, basements, renovation cleanup, and general household clutter."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you remove construction debris after a remodeling project?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We provide construction debris removal for applicable renovation and remodeling projects. Share the project details with our team so we can determine the appropriate removal plan."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I schedule junk removal in Gaithersburg, MD?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Call DMV-GC at +1 240-730-1292 or email support@dmv-gc.com to discuss your junk removal needs and arrange the next steps."
                    }
                }
            ]
        }
    ]
};

export default function JunkRemovalGaithersburgMD() {
    const faqData = [
        {
            question: "What types of junk can you remove?",
            answer: "We handle many common residential and commercial items, general clutter, bulk items, and non-hazardous renovation or construction debris. Contact us with the details of your specific items."
        },
        {
            question: "Do you provide residential junk removal in Gaithersburg?",
            answer: "Yes. Our residential junk removal services can help with home cleanouts, garages, basements, renovation cleanup, and general household clutter."
        },
        {
            question: "Can you remove construction debris after a remodeling project?",
            answer: "Yes. We provide construction debris removal for applicable renovation and remodeling projects. Share the project details with our team so we can determine the appropriate removal plan."
        },
        {
            question: "Do you remove large or bulky items?",
            answer: "Yes. Our bulk item pickup service is designed for large unwanted items that may be difficult to move without assistance."
        },
        {
            question: "How do I schedule junk removal in Gaithersburg, MD?",
            answer: "Call DMV-GC at +1 240-730-1292 or email support@dmv-gc.com to discuss your junk removal needs and arrange the next steps."
        }
    ];

    return (
        <div className="city-service-detail-page junk-removal junk-removal-gaithersburg-md">
            <NavitemActive nav="service" />

            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/junk-removal">Junk Removal</Link><span>›</span>
                    Gaithersburg, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Gaithersburg, MD</div>
                    <h1>Junk Removal Services in Gaithersburg, MD</h1>
                    <p>Clear unwanted items, household clutter, renovation debris, and bulky materials with dependable junk removal services from DMV General Contracting Group. We help homeowners and businesses in Gaithersburg keep their properties clean, organized, and ready for what comes next.</p>
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

                <h2>Reliable Junk Removal for Gaithersburg Properties</h2>
                <p>Whether you are cleaning out a home, preparing for a renovation, clearing a commercial space, or dealing with accumulated clutter, professional junk removal can make the process easier. DMV-GC provides practical removal and hauling solutions designed around the scope of your project.</p>

                <div className="patio-banner">
                    <strong>Serving Gaithersburg, MD:</strong> Our junk removal services cover household items, unwanted furniture, renovation waste, construction debris, and other non-hazardous materials that need to be cleared from your property.
                </div>

                <h2>Our Junk Removal Services in Gaithersburg</h2>
                <div className="card-grid">
                    <div className="card"><h3>🏠 Residential Junk Removal</h3><p>Clear unwanted household items, clutter, furniture, and general debris from homes, garages, basements, attics, and other residential spaces.</p></div>
                    <div className="card"><h3>🏢 Commercial Junk Removal</h3><p>Help keep offices, retail spaces, rental properties, and other commercial areas clean by removing unwanted items and accumulated debris.</p></div>
                    <div className="card"><h3>🏗️ Construction Debris Removal</h3><p>Remove leftover materials and job-site debris after remodeling, renovation, repair, or construction work so the area is cleaner and easier to use.</p></div>
                    <div className="card"><h3>🛋️ Bulk Item Pickup</h3><p>Get help with large unwanted items such as old furniture and other bulky materials that are difficult to move on your own.</p></div>
                    <div className="card"><h3>🏡 Home Cleanouts</h3><p>Streamline whole-room or property cleanouts by consolidating unwanted items and preparing the space for its next use.</p></div>
                    <div className="card"><h3>🧰 Garage &amp; Basement Cleanouts</h3><p>Reclaim storage and usable space by removing accumulated clutter and unwanted materials from garages, basements, and utility areas.</p></div>
                    <div className="card"><h3>🔨 Renovation Cleanup</h3><p>After a remodeling project, we can help clear remaining debris and unwanted materials so your newly improved space can be enjoyed sooner.</p></div>
                    <div className="card"><h3>♻️ General Clutter Removal</h3><p>For smaller property cleanups or larger decluttering projects, our team can help remove unwanted items and leave the area more organized.</p></div>
                </div>

                <h2>Common Junk Removal Needs in Gaithersburg</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="plain-table">
                            <thead>
                                <tr><th>Project Type</th><th>What We Can Help Remove</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Home Cleanouts</td><td>Household clutter, furniture, boxes, and unwanted items.</td></tr>
                                <tr><td>Garage Cleanouts</td><td>Stored materials, old equipment, furniture, and general clutter.</td></tr>
                                <tr><td>Renovation Cleanup</td><td>Non-hazardous renovation waste, leftover materials, and project debris.</td></tr>
                                <tr><td>Commercial Cleanup</td><td>Unwanted office, retail, rental, or property-maintenance items.</td></tr>
                                <tr><td>Bulk Item Removal</td><td>Large unwanted furniture and other bulky materials.</td></tr>
                                <tr><td>Construction Debris</td><td>General job-site debris and leftover construction materials.</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h2>Junk Removal for Remodeling &amp; Renovation Projects</h2>
                <p>Junk removal is often an important part of a larger remodeling or renovation project. DMV-GC can help clear unwanted materials and debris so your property is ready for the next stage of work. From individual room cleanups to broader renovation-related debris removal, we coordinate the cleanup around the needs of your project.</p>

                <h2>Why Choose DMV-GC for Junk Removal?</h2>

                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🤝</div>
                        <strong>Experienced Team</strong>
                        <span>Organized work with a focus on property care</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">💡</div>
                        <strong>Design-Build Expertise</strong>
                        <span>Cleanup needs connected to renovation &amp; remodeling projects</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">🔧</div>
                        <strong>In-House Services</strong>
                        <span>Structural, electrical, plumbing &amp; HVAC capabilities</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📅</div>
                        <strong>7 Days a Week</strong>
                        <span>Available seven days a week to discuss your cleanup</span>
                    </div>
                </div>
                <div className="card-grid">
                    <div className="card"><h3>Licensed General Contractor — Not Just a Hauler</h3><p>DMV General Contracting Group is a licensed Maryland general contractor (MHIC #156178). When junk removal is part of a Gaithersburg renovation, the same team that removes the debris completes the remodel. One team, one workflow — no handoff between a hauling company and a contractor.</p></div>
                    <div className="card"><h3>Responsible Disposal</h3><p>Materials are sorted for donation, recycling, and responsible disposal — not just dumped at the nearest landfill. Usable furniture and household goods are directed to local donation partners where the homeowner wishes.</p></div>
                    <div className="card"><h3>In-House Residential &amp; Commercial Services</h3><p>Junk removal support that works alongside DMV-GC&apos;s broader structural, electrical, plumbing, and HVAC capabilities — one contractor for the cleanup and the larger property project.</p></div>
                    <div className="card"><h3>Free Estimate, No Surprises</h3><p>All Gaithersburg junk removal projects begin with a free on-site estimate — priced by volume and material type before any work begins. No vague quotes over the phone that increase when the truck arrives.</p></div>
                </div>

                <h2>Our Junk Removal Process in Gaithersburg</h2>
                <div className="steps">
                    {[
                        {num: 1, title: "Discuss Your Project", desc: "Tell us what needs to be removed, where it is located, and the type of cleanup you need."},
                        {num: 2, title: "Plan the Removal", desc: "We review the project scope and organize the work around your property and removal requirements."},
                        {num: 3, title: "Prepare the Area", desc: "Items are identified and organized so the removal can proceed efficiently."},
                        {num: 4, title: "Remove & Load", desc: "Our team handles the lifting, removal, and loading of the approved items and debris."},
                        {num: 5, title: "Clear the Space", desc: "We work to leave the relevant area cleaner, more accessible, and ready for its next use."},
                        {num: 6, title: "Project Completion", desc: "We review the completed cleanup with you and make sure the agreed removal work is addressed."}
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

                <h2>Junk Removal Pricing — Gaithersburg, MD</h2>
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

                <h2>What We Accept — and What We Don&apos;t</h2>
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
                        <p className="list-note">If your Gaithersburg property has any of these materials, we can refer you to appropriate licensed specialists for safe handling and disposal.</p>
                    </div>
                </div>

                <h2>Junk Removal Service Area</h2>
                <p>DMV General Contracting Group serves homeowners and businesses throughout <strong>Gaithersburg, MD</strong> and surrounding Montgomery County communities. If you are unsure whether your property is within our service area, contact our team and we can discuss your project.</p>
                <div className="areas-grid">
                    <span className="area-pill">Gaithersburg, MD</span>
                    <span className="area-pill">Kentlands</span>
                    <span className="area-pill">Lakelands</span>
                    <span className="area-pill">Crown Farm</span>
                    <span className="area-pill">Olde Towne</span>
                    <span className="area-pill">Rockville, MD</span>
                    <span className="area-pill">Germantown, MD</span>
                    <span className="area-pill">Clarksburg, MD</span>
                </div>

                <h2>Frequently Asked Questions — Junk Removal in Gaithersburg, MD</h2>
                <Accordion className="faq-list">
                    {faqData.map((item, index) => (
                        <AccordionItem eventKey={index.toString()} key={index} className="faq-item">
                            <AccordionHeader as="h3" className="faq-q">{item.question}</AccordionHeader>
                            <AccordionBody className="faq-a">{item.answer}</AccordionBody>
                        </AccordionItem>
                    ))}
                </Accordion>

                <h2>Explore Our Other Services in Gaithersburg, MD</h2>
                <p>DMV-GC Group offers a complete range of home renovation services for Gaithersburg properties:</p>
                <ul className="related-links">
                    <li><Link href="/service/kitchen-remodeling/gaithersburg-md">Kitchen Remodeling in Gaithersburg, MD</Link></li>
                    <li><Link href="/service/concrete/gaithersburg-md">Concrete Services in Gaithersburg, MD</Link></li>
                    <li><Link href="/service/fence-installation/gaithersburg-md">Fence Installation in Gaithersburg, MD</Link></li>
                    <li><Link href="/service/roofing/gaithersburg-md">Roofing Services in Gaithersburg, MD</Link></li>
                    <li><Link href="/service/home-additions/gaithersburg-md">Home Additions in Gaithersburg, MD</Link></li>
                    <li><Link href="/service/patios/gaithersburg-md">Patio Installation in Gaithersburg, MD</Link></li>
                </ul>

                <div className="cta-banner">
                    <h2>Need Junk Removal in Gaithersburg, MD?</h2>
                    <p>Let DMV General Contracting Group help you clear unwanted items, clutter, and project debris from your property. Free on-site estimate.</p>
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