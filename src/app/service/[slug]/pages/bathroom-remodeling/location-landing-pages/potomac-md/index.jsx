import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionHeader from 'react-bootstrap/AccordionHeader';
import AccordionBody from 'react-bootstrap/AccordionBody';
import "@/app/service/[slug]/pages/bathroom-remodeling/location-landing-pages/city-service-style.scss";
import "./style.scss";

export const metadata = {
    title: "Bathroom Remodeling in Potomac, MD | Licensed Contractor Near You | DMV-GC Group",
    description: "Expert bathroom remodeling in Potomac, MD. Licensed design-build contractor serving Avenel, Travilah & River Road estates. Master bath, spa shower & luxury renovations. 4.9★ rated. Free in-home consultation. Call +1 240-730-1292!",
};

export default function BathroomPotomacMD() {
    const faqData = [
        {
            question: "How much does a bathroom remodel cost in Potomac, MD?",
            answer: "Bathroom remodeling in Potomac typically costs $8,000–$120,000+ depending on bathroom type, size, and finish level."
        },
        {
            question: "How long does a bathroom remodel take in Potomac?",
            answer: "Most bathroom renovations in Potomac take 4–8 weeks from construction start to completion."
        },
        {
            question: "Does DMV-GC Group design master bathroom suites in Potomac?",
            answer: "Yes. Master bathroom design and renovation is one of our most requested services in Potomac."
        },
        {
            question: "Does DMV-GC Group handle permits for bathroom remodeling in Potomac?",
            answer: "Yes. DMV-GC Group handles all required Montgomery County permits for bathroom remodels in Potomac."
        },
        {
            question: "Can DMV-GC Group add a bathroom to an existing bedroom in a Potomac home?",
            answer: "Yes. Adding an en-suite bathroom to an existing bedroom is a common project in Potomac's larger homes."
        },
        {
            question: "Is DMV-GC Group licensed for bathroom remodeling in Potomac, MD?",
            answer: "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license."
        }
    ];

    return (
        <div className="city-service-detail-page bathroom-potomac-md">
            <div className="container">
                <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link><span>›</span>
                    <Link href="/services">Services</Link><span>›</span>
                    <Link href="/service/bathroom-remodeling">Bathroom Remodeling</Link><span>›</span>
                    Potomac, MD
                </nav>

                <div className="hero">
                    <div className="hero-location-tag">📍 Serving Potomac, MD</div>
                    <h1>Bathroom Remodeling Contractor in Potomac, MD</h1>
                    <div className="hero-meta">
                        <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
                        <span className="badge">✓ MHIC Licensed & Insured</span>
                        <span className="badge">✓ DLCP Licensed</span>
                        <span className="badge">✓ 1-Year Warranty</span>
                        <span className="badge">✓ Free In-Home Consultation</span>
                        <span className="badge dark">📞 +1 240-730-1292</span>
                    </div>
                </div>

                <div className="intro-box">
                    Looking for a trusted <strong>bathroom remodeling contractor in Potomac, MD</strong>? From the grand estate homes of Avenel and Travilah to the colonials along River Road and Bradley Boulevard, Potomac homeowners expect bathrooms that match the quality of their homes — master spa suites with walk-in showers and freestanding tubs, beautifully tiled guest baths, and powder rooms that make an impression. DMV-GC Group's licensed design-build team handles every aspect of your <strong>bathroom renovation in Potomac</strong> — from concept and tile selection to plumbing and permit — all under one contract, managed by our in-house team from first design through Montgomery County final inspection.
                </div>

                <div className="trust-bar">
                    <div className="trust-item">
                        <div className="icon">🏗️</div>
                        <strong>Design-Build In-House</strong>
                        <span>Architects, plumbers & tile setters — one team</span>
                    </div>
                    <div className="trust-item">
                        <div className="icon">📋</div>
                        <strong>Permits Handled</strong>
                        <span>Montgomery County permits — fully managed</span>
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

                <h2>Bathroom Remodeling Services We Offer in Potomac, MD</h2>
                <p>
                    Potomac's estate homes and large colonials typically have multiple bathrooms — each presenting its own renovation opportunity. DMV-GC Group handles all bathroom types, from primary suite transformations to hall bath updates to powder room refreshes.
                </p>

                <div className="service-grid">
                    <div className="service-item">Master Bathroom Full Gut Renovation</div>
                    <div className="service-item">Luxury Spa Shower Design & Installation</div>
                    <div className="service-item">Freestanding & Soaking Tub Installation</div>
                    <div className="service-item">Double Vanity Design & Custom Cabinetry</div>
                    <div className="service-item">Custom Tile Design & Installation</div>
                    <div className="service-item">Heated Floor Installation (Radiant Heat)</div>
                    <div className="service-item">Hall Bathroom Remodel</div>
                    <div className="service-item">Guest Bathroom Renovation</div>
                    <div className="service-item">Powder Room Remodel</div>
                    <div className="service-item">Bathroom Addition to Existing Bedroom</div>
                    <div className="service-item">Shower Conversion (Tub-to-Shower)</div>
                    <div className="service-item">Montgomery County Permit Processing</div>
                </div>

                <div className="author-box">
                    <div className="author-avatar">🚿</div>
                    <div className="author-info">
                        <h4>About DMV-GC Group — Potomac's Licensed Bathroom Remodeling Contractor</h4>
                        <p>DMV-GC Group is headquartered in North Bethesda — minutes from Potomac. Our team has completed bathroom renovations throughout Potomac's neighborhoods including Avenel, Travilah, and the River Road corridor. We hold a Maryland MHIC license, carry full general liability insurance, and back every bathroom project with a 1-year workmanship warranty. Our in-house team includes licensed plumbers, licensed electricians, and certified tile setters — all the trades your bathroom renovation requires, without subcontracting coordination headaches.</p>
                        <div className="author-creds">
                            <span className="cred">MHIC Licensed</span>
                            <span className="cred">Licensed Plumbers</span>
                            <span className="cred">Licensed Electricians</span>
                            <span className="cred">4.9★ Rated</span>
                            <span className="cred">1-Year Warranty</span>
                        </div>
                    </div>
                </div>

                <h2>Bathroom Renovation Types Most Common in Potomac Homes</h2>
                <div className="bath-type-grid">
                    <div className="bath-type-box">
                        <div className="icon">🛁</div>
                        <h3>Primary / Master Suite</h3>
                        <p>The most invested bathroom in Potomac homes — typically 150–300+ sq ft with separate tub and shower, double vanity, water closet, and luxury finishes. Spa-inspired renovations with heated floors, body spray systems, and custom tile are the standard expectation here.</p>
                    </div>
                    <div className="bath-type-box">
                        <div className="icon">🚿</div>
                        <h3>Secondary Suite Bathrooms</h3>
                        <p>En-suite bathrooms for secondary bedrooms in Potomac's larger homes. Often renovated as part of a guest suite upgrade — new tile, updated fixtures, and frameless glass shower enclosures are the most common scope.</p>
                    </div>
                    <div className="bath-type-box">
                        <div className="icon">🪥</div>
                        <h3>Hall Bathrooms</h3>
                        <p>Shared hall baths serving multiple bedrooms. Renovation focus is typically on durability, storage, and a fresh aesthetic — new tile, updated vanity, and improved lighting go a long way in a hall bath.</p>
                    </div>
                    <div className="bath-type-box">
                        <div className="icon">🪞</div>
                        <h3>Powder Rooms</h3>
                        <p>Half baths near the main living areas. In Potomac's high-end homes, powder rooms are design statements — statement wallcovering, vessel sinks, custom vanity, and designer fixtures make a strong impression in a small space.</p>
                    </div>
                    <div className="bath-type-box">
                        <div className="icon">🏊</div>
                        <h3>Pool / Cabana Bathrooms</h3>
                        <p>Many Potomac estates have pool-adjacent bathrooms or cabana bath/changing room combinations. These spaces require materials rated for high-moisture environments and seamless indoor-outdoor flow.</p>
                    </div>
                    <div className="bath-type-box">
                        <div className="icon">➕</div>
                        <h3>Bathroom Additions</h3>
                        <p>Adding a bathroom to an existing bedroom or converting a large closet into an en-suite is a common project in Potomac's larger homes. Our in-house structural engineers and plumbers assess feasibility and design the addition.</p>
                    </div>
                </div>

                <h2>Luxury Bathroom Features Popular in Potomac, MD</h2>
                <div className="feature-grid">
                    <div className="feature-card">
                        <h3>🚿 Walk-In Spa Shower</h3>
                        <p>Large-format tile, frameless glass enclosure, multiple showerheads including ceiling rain head and body spray system, niche storage, bench seating, and steam generator option.</p>
                    </div>
                    <div className="feature-card">
                        <h3>🛁 Freestanding Soaking Tub</h3>
                        <p>Freestanding soaking tubs — acrylic, stone resin, or natural stone — are a signature feature of luxury master bathrooms in Potomac.</p>
                    </div>
                    <div className="feature-card">
                        <h3>🌡️ Radiant Heated Floors</h3>
                        <p>Electric radiant heat under tile or stone flooring is one of the most consistently loved upgrades in bathroom renovations.</p>
                    </div>
                    <div className="feature-card">
                        <h3>🪞 Custom Vanity & Cabinetry</h3>
                        <p>Double vanities with custom cabinetry are standard in Potomac master bathrooms.</p>
                    </div>
                    <div className="feature-card">
                        <h3>🔲 Large-Format & Custom Tile</h3>
                        <p>Large-format porcelain tile, natural marble, book-matched stone slabs, and custom mosaic accents are the tile choices that define premium Potomac bathrooms.</p>
                    </div>
                    <div className="feature-card">
                        <h3>💡 Designer Lighting & Smart Home</h3>
                        <p>Layered lighting — ambient, task, and accent — with dimmer controls, lighted mirrors, and optional smart home integration.</p>
                    </div>
                </div>

                <h2>Why Potomac Homeowners Choose DMV-GC Group for Bathroom Remodeling</h2>
                <p>
                    Potomac's luxury real estate market — with median home values consistently above $1.2 million — means a bathroom renovation here is a meaningful investment that needs to be done correctly. A poorly executed bathroom renovation in a Potomac estate home doesn't just fail aesthetically; it creates moisture problems, tile failures, plumbing leaks, and code violations that can be expensive to correct.
                </p>
                <div className="highlight">
                    <p>🏡 <strong>Potomac Bathroom ROI:</strong> A professionally renovated master bathroom in Potomac typically returns 60–75% of its cost in immediate property value.</p>
                </div>

                <h2>Serving All Potomac, MD Neighborhoods for Bathroom Remodeling</h2>
                <div className="areas-grid">
                    <span className="area-pill">Avenel</span>
                    <span className="area-pill">Travilah</span>
                    <span className="area-pill">Potomac Village</span>
                    <span className="area-pill">River Road Corridor</span>
                    <span className="area-pill">Brickyard Road Area</span>
                    <span className="area-pill">Potomac Falls</span>
                    <span className="area-pill">Glen Falls</span>
                    <span className="area-pill">Bradley Boulevard Area</span>
                </div>

                <h2>Bathroom Remodel Cost in Potomac, MD</h2>
                <div className="table-responsive">
                    <div className="table-holder">
                        <table className="cost-table">
                            <thead>
                                <tr>
                                    <th>Bathroom Type / Scope</th>
                                    <th>Typical Cost Range</th>
                                    <th>What's Included</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Powder Room Remodel</td>
                                    <td>$8,000 – $18,000</td>
                                    <td>New vanity, tile, fixtures, mirror, lighting, paint</td>
                                </tr>
                                <tr>
                                    <td>Hall Bathroom Refresh</td>
                                    <td>$12,000 – $22,000</td>
                                    <td>New tile, vanity, tub/shower surround, fixtures, lighting</td>
                                </tr>
                                <tr>
                                    <td>Hall Bathroom Full Gut</td>
                                    <td>$22,000 – $40,000</td>
                                    <td>Complete demo, new layout, custom tile, vanity, all fixtures</td>
                                </tr>
                                <tr>
                                    <td>Secondary Suite Bathroom</td>
                                    <td>$28,000 – $55,000</td>
                                    <td>Frameless glass shower, custom tile, vanity, fixtures</td>
                                </tr>
                                <tr>
                                    <td>Master Bathroom Mid-Range</td>
                                    <td>$35,000 – $65,000</td>
                                    <td>Walk-in shower, double vanity, new tile, soaking tub, heated floor</td>
                                </tr>
                                <tr>
                                    <td>Master Bathroom Full Luxury Renovation</td>
                                    <td>$70,000 – $120,000+</td>
                                    <td>Spa shower system, freestanding tub, custom cabinetry, large-format natural stone, steam, smart home</td>
                                </tr>
                                <tr>
                                    <td>Bathroom Addition to Bedroom</td>
                                    <td>$35,000 – $65,000</td>
                                    <td>New plumbing rough-in, structural work, full bathroom build-out, permits</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="tip">
                    💡 <strong>Potomac vs Bethesda Pricing:</strong> Bathroom remodels in Potomac typically run 10–20% higher than comparable projects in Bethesda — reflecting larger bathroom footprints in estate homes and higher expectations for premium materials and finishes.
                </div>

                <div className="cta-banner">
                    <h2>Get a Free Bathroom Remodeling Estimate in Potomac</h2>
                    <p>We'll visit your Potomac home, walk your existing bathrooms, and provide a detailed estimate — at no cost and no obligation.</p>
                    <Link href="/contact-us" className="cta-btn">Schedule Free In-Home Consultation</Link>
                    <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
                </div>

                <h2>Our Bathroom Remodeling Process in Potomac</h2>
                <div className="steps">
                    {[
                        {num: 1, title: "Free In-Home Consultation at Your Potomac Home", desc: "We visit your Potomac home, assess your existing bathrooms, discuss your vision and priorities, and provide a realistic budget range."},
                        {num: 2, title: "Custom Design, Layout & Material Selection", desc: "Our in-house designers develop detailed layout plans and guide you through tile selection, fixture choices, vanity styles, shower configuration, and lighting design."},
                        {num: 3, title: "Montgomery County Permit Processing", desc: "We handle all required Montgomery County building, plumbing, and electrical permits. Our permit team manages all county correspondence and inspection scheduling."},
                        {num: 4, title: "Demolition & Waterproofing", desc: "Proper waterproofing is the most important step in any bathroom renovation. DMV-GC Group applies industry-standard waterproofing membrane systems to all shower floors and walls before any tile goes up."},
                        {num: 5, title: "Plumbing, Electrical & Tile", desc: "Our licensed plumbers and electricians complete all rough-in work before tile begins. Our certified tile setters then complete all tile installation."},
                        {num: 6, title: "Final Finishes, Walkthrough & 1-Year Warranty", desc: "Vanity installation, fixture trim-out, mirror and lighting installation, glass shower door installation, and all final finishes are completed and inspected."}
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

                <h2>Why Waterproofing Is the Most Important Step in Your Potomac Bathroom</h2>
                <p>The single most important quality indicator in a bathroom renovation is something you'll never see after the project is complete — the waterproofing.</p>
                <div className="note">
                    ⚠️ <strong>What to Watch For:</strong> The most common sign of a poorly waterproofed shower is grout cracking and tile loosening within 2–5 years of installation — caused by water getting behind the tile and expanding the substrate.
                </div>

                <h2>What Potomac Homeowners Say About DMV-GC Group</h2>
                <div className="review-grid">
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our Avenel master bathroom renovation is absolutely stunning. DMV-GC Group designed the entire spa shower and freestanding tub layout, handled all the permits, and delivered exactly what we envisioned."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Avenel, Potomac MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"We renovated three bathrooms in our Travilah home with DMV-GC Group — the master suite, a secondary en-suite, and the hall bath. All three came out perfectly, coordinated finishes across all three, and the whole project ran smoothly."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Travilah, Potomac MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"Our old shower had been leaking for years — previous contractor had not waterproofed it properly. DMV-GC Group demo'd it completely and rebuilt it right. They walked us through every waterproofing step, which gave us real confidence."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">River Road Corridor, Potomac MD</span></div>
                    </div>
                    <div className="review-card">
                        <div className="review-stars">★★★★★</div>
                        <p className="review-text">"The powder room they designed for our Potomac home is a showstopper. Vessel sink, custom floating vanity, statement tile — everyone who visits comments on it."</p>
                        <div className="review-author">— Verified Homeowner · <span className="review-location">Potomac Village, MD</span></div>
                    </div>
                </div>

                <h2>Frequently Asked Questions — Bathroom Remodeling in Potomac, MD</h2>
                <Accordion defaultActiveKey="0" flush>
                    {faqData.map((faq, index) => (
                        <AccordionItem eventKey={index.toString()} key={index}>
                            <AccordionHeader>{faq.question}</AccordionHeader>
                            <AccordionBody>{faq.answer}</AccordionBody>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}