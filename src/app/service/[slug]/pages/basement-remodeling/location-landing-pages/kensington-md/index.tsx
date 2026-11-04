'use client';
import { useEffect } from "react";
import Link from "next/link";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
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
      "description": "Licensed design-build general contractor serving Kensington, MD. Specializing in basement remodeling for Victorian, Craftsman, and historic homes — recreation rooms, home offices, guest suites, and full basement finishing.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11810 Grand Park Ave, Suite 500",
        "addressLocality": "North Bethesda",
        "addressRegion": "MD",
        "postalCode": "20852",
        "addressCountry": "US"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 39.0458, "longitude": -77.1139 },
      "areaServed": [
        { "@type": "City", "name": "Kensington", "sameAs": "https://en.wikipedia.org/wiki/Kensington,_Maryland" },
        { "@type": "City", "name": "Chevy Chase" },
        { "@type": "City", "name": "Garrett Park" },
        { "@type": "City", "name": "Silver Spring" },
        { "@type": "City", "name": "Wheaton" }
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "MHIC License", "credentialCategory": "Maryland Home Improvement Contractor License" },
        { "@type": "EducationalOccupationalCredential", "name": "DLCP License", "credentialCategory": "Washington DC Department of Licensing and Consumer Protection" }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "97", "bestRating": "5" },
      "priceRange": "$$$"
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/basement-remodeling/kensington-md#service",
      "serviceType": "Basement Remodeling",
      "name": "Basement Remodeling in Kensington, MD",
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Kensington", "sameAs": "https://en.wikipedia.org/wiki/Kensington,_Maryland" },
      "description": "Full-service basement remodeling in Kensington, MD. Recreation rooms, home offices, guest suites, basement bathrooms, and full finishing for Kensington's Victorian, Craftsman, and mid-century homes — with expertise in older systems assessment and historic home basement construction.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "25000", "maxPrice": "120000", "priceCurrency": "USD" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Basement Remodeling Services Kensington MD",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Basement Finishing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Recreation Room" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Office Buildout" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Basement Guest Suite" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Basement Bathroom Addition" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Egress Window Installation" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Basement Remodeling", "item": "https://www.dmv-gc.com/service/basement-remodeling" },
        { "@type": "ListItem", "position": 4, "name": "Kensington, MD", "item": "https://www.dmv-gc.com/service/basement-remodeling/kensington-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does basement remodeling cost in Kensington, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Basement remodeling in Kensington, MD typically costs between $25,000 and $120,000 depending on scope, basement size, and finish level. A standard basement finishing runs $25,000–$55,000. A mid-range basement with a bathroom and home office runs $50,000–$85,000. A full basement renovation with guest suite and custom finishes can reach $85,000–$120,000. Kensington's older Victorian and Craftsman homes often require additional work addressing older systems — galvanized plumbing, older electrical, and stone or block foundation walls — which should be budgeted for. DMV-GC Group provides free in-home consultations with detailed estimates."
          }
        },
        {
          "@type": "Question",
          "name": "Can DMV-GC Group finish the basement of a Victorian or Craftsman home in Kensington?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group has experience finishing basements in Kensington's Victorian, Queen Anne, and Craftsman homes. These older homes often have lower ceiling heights, rubble stone or block foundation walls that require specific moisture management approaches, and older systems (galvanized plumbing, knob-and-tube wiring) that need assessment and updating before finishing begins. Our team assesses all of these conditions during the free in-home consultation and factors them into a realistic scope and budget."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group handle permits for basement remodeling in Kensington?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Kensington is an incorporated town within Montgomery County. DMV-GC Group's in-house permit team determines whether your specific property requires a Town of Kensington permit, a Montgomery County permit, or both, and manages the entire process from application through final inspection. Kensington homeowners never need to contact the town or county directly."
          }
        },
        {
          "@type": "Question",
          "name": "What ceiling height is needed to finish a Kensington basement?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Montgomery County building code requires a minimum ceiling height of 7 feet for habitable basement space. Many of Kensington's older Victorian and Craftsman homes have basement ceiling heights of 6'6\" to 7'4\" — meaning some rooms may meet code as-is while others may need mechanical systems re-routed to gain clearance. DMV-GC Group measures existing ceiling heights and identifies any areas where ductwork or beam locations affect the finished ceiling height during the initial consultation."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a basement remodel take in Kensington, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most basement renovations in Kensington take 7–14 weeks from construction start to completion. Older homes may take slightly longer if older systems need to be addressed before finishing begins. Permit processing through the Town of Kensington or Montgomery County typically adds 3–5 weeks before construction begins. DMV-GC Group provides a detailed project schedule with every estimate."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for basement remodeling in Kensington, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home renovation work in Kensington and Montgomery County. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every basement remodeling project completed in Kensington."
          }
        }
      ]
    }
  ]
};

export default function BasementKensingtonMD() {
  const { setActiveMenuItem } = useMyContext();

  useEffect(() => {
    setActiveMenuItem("service");
  }, []);

  return (
    <div className="city-service-detail-page basement-kensington-md">
      <div className="container">

        {/* BREADCRUMB */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>&rsaquo;</span>
          <Link href="/services">Services</Link><span>&rsaquo;</span>
          <Link href="/service/basement-remodeling">Basement Remodeling</Link><span>&rsaquo;</span>
          Kensington, MD
        </nav>

        {/* HERO */}
        <div className="hero">
          <div className="hero-location-tag">📍 Serving Kensington, MD</div>
          <h1>Basement Remodeling Contractor in Kensington, MD</h1>
          <div className="hero-meta">
            <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
            <span className="badge">✓ MHIC Licensed &amp; Insured</span>
            <span className="badge">✓ 1-Year Warranty</span>
            <span className="badge">✓ Free In-Home Consultation</span>
            <span className="badge dark">📞 +1 240-730-1292</span>
          </div>
        </div>

        {/* INTRO */}
        <div className="intro-box">
          Looking for a trusted <strong>basement remodeling contractor in Kensington, MD</strong>? Kensington&apos;s Victorian-era homes — many built between the 1890s and 1930s — have basements with character and history, but also with challenges that newer construction doesn&apos;t present: rubble stone or block foundation walls, low ceiling heights, older galvanized plumbing running through the space, and sometimes knob-and-tube wiring that needs assessment before any renovation begins. DMV-GC Group&apos;s licensed design-build team brings the specific expertise that Kensington&apos;s historic housing stock requires — assessing older systems honestly, addressing moisture conditions before finishing begins, and delivering completed basements that feel like a natural extension of the home above.
        </div>

        {/* TRUST BAR */}
        <div className="trust-bar">
          <div className="trust-item">
            <div className="icon">🏛️</div>
            <strong>Historic Home Experience</strong>
            <span>Victorian, Craftsman &amp; Colonial Revival</span>
          </div>
          <div className="trust-item">
            <div className="icon">📋</div>
            <strong>Permits Handled</strong>
            <span>Town of Kensington &amp; Montgomery County</span>
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
        <h2>Basement Remodeling Services We Offer in Kensington, MD</h2>
        <p>
          Kensington&apos;s housing stock spans Victorian cottages, Craftsman bungalows, Colonial Revival homes, and mid-century ranches — each with a different basement configuration and different renovation considerations. DMV-GC Group handles the full range, with particular depth of experience in the older homes that define Kensington&apos;s character.
        </p>

        <div className="service-grid">
          <div className="service-item">Full Basement Finishing</div>
          <div className="service-item">Recreation Room &amp; Family Room</div>
          <div className="service-item">Home Office Buildout</div>
          <div className="service-item">Basement Guest Suite</div>
          <div className="service-item">Basement Bathroom Addition</div>
          <div className="service-item">Egress Window Installation</div>
          <div className="service-item">Wet Bar &amp; Entertainment Area</div>
          <div className="service-item">Home Gym Space</div>
          <div className="service-item">Waterproofing &amp; Moisture Management</div>
          <div className="service-item">Galvanized Plumbing Replacement</div>
          <div className="service-item">Electrical Panel &amp; Wiring Updates</div>
          <div className="service-item">Town of Kensington &amp; County Permits</div>
        </div>

        {/* AUTHOR BOX */}
        <div className="author-box">
          <div className="author-avatar">🏠</div>
          <div className="author-info">
            <h4>About DMV-GC Group — Kensington&apos;s Licensed Basement Remodeling Contractor</h4>
            <p>DMV-GC Group is based in North Bethesda — minutes from Kensington&apos;s historic town center. Our team has completed renovation projects throughout Kensington&apos;s Victorian, Craftsman, and Colonial Revival homes and understands how older construction affects basement renovation scope and cost. We hold a Maryland MHIC license, carry full general liability insurance, and back every project with a 1-year workmanship warranty. Our in-house team includes licensed plumbers, licensed electricians, and waterproofing specialists.</p>
            <div className="author-creds">
              <span className="cred">MHIC Licensed</span>
              <span className="cred">Licensed Plumbers</span>
              <span className="cred">Licensed Electricians</span>
              <span className="cred">4.9★ Rated</span>
              <span className="cred">1-Year Warranty</span>
            </div>
          </div>
        </div>

        {/* HISTORIC HOMES */}
        <h2>Finishing Basements in Kensington&apos;s Historic Homes — What&apos;s Different</h2>
        <p>
          Kensington was incorporated in 1894 and built out through the early 20th century. The basements in its oldest homes were built as utility spaces — unheated storage and mechanical areas, not living space. Finishing one of these basements for habitable use requires addressing conditions that simply don&apos;t exist in newer construction.
        </p>

        <div className="historic-box">
          <h3>🏛️ What DMV-GC Group Assesses in Kensington&apos;s Older Basements</h3>
          <ul>
            <li><strong>Foundation wall type:</strong> Many of Kensington&apos;s oldest homes have rubble stone or unreinforced block foundation walls — not poured concrete. These walls have different moisture characteristics than modern poured foundations. They are more porous, more prone to efflorescence and seepage, and require a different approach to moisture management (typically interior drainage channels and waterproofing membrane rather than exterior waterproofing).</li>
            <li><strong>Ceiling height:</strong> Victorian and Craftsman basements in Kensington frequently have ceiling heights of 6&apos;4&quot;–7&apos;0&quot; — sometimes below the 7-foot minimum required for habitable space in Montgomery County code. We measure every area during consultation and identify where ductwork, pipes, or beams reduce clearance, so the finished ceiling height is known before design is finalized.</li>
            <li><strong>Galvanized plumbing:</strong> Homes built before the 1950s in Kensington often have galvanized steel supply pipes running through the basement. These pipes corrode internally over decades, reducing water pressure and eventually leaking. A basement renovation is the best opportunity to replace exposed galvanized supply in the basement area — our licensed plumbers assess and replace during renovation.</li>
            <li><strong>Knob-and-tube wiring:</strong> Present in some of Kensington&apos;s oldest homes, particularly those built before 1940. A licensed electrician must assess any existing wiring in the basement before renovation begins — and any new circuits must meet current Montgomery County electrical code.</li>
            <li><strong>Existing mechanical equipment:</strong> Older oil-to-gas converted furnaces, older water heaters, and older panel boxes are common in Kensington&apos;s historic homes. Where mechanical equipment is being relocated or upgraded as part of the basement renovation, our team coordinates all necessary permits and inspections.</li>
            <li><strong>Moisture history:</strong> Stone and block foundations absorb water differently than poured concrete. We look for efflorescence, staining, mineral deposits, and any history of seepage or flooding before designing the moisture management strategy.</li>
          </ul>
        </div>

        {/* CEILING HEIGHT */}
        <h2>Ceiling Height in Kensington Basements — What the Code Requires</h2>
        <p>
          Ceiling height is one of the most common constraints in Kensington&apos;s older basement renovations. Montgomery County building code requires a minimum ceiling height of <strong>7 feet</strong> for habitable basement space (rooms where people will spend time). This affects how the space is designed and what can be created within it.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>📏 When Height Is Sufficient (7&apos;0&quot;+)</h3>
            <p>Areas with 7-foot or greater ceiling clearance can be finished as any habitable room — bedroom, family room, home office, or gym. Standard framing and drywall approaches apply. The goal is maximizing finished ceiling height by routing mechanical systems efficiently.</p>
          </div>
          <div className="feature-card">
            <h3>⚠️ When Height Is Borderline (6&apos;6&quot;–7&apos;0&quot;)</h3>
            <p>Areas between 6&apos;6&quot; and 7&apos;0&quot; may still work depending on where the constraint occurs. Beams and ductwork can sometimes be boxed in and routed along walls rather than ceilings. Our team identifies creative routing solutions that preserve the maximum possible clearance before finalizing the design.</p>
          </div>
          <div className="feature-card">
            <h3>🛠️ Mechanical Rerouting</h3>
            <p>The most common ceiling height constraint in Kensington basements is HVAC ductwork running at low points. Rerouting ducts to run along walls or in a more compact configuration — while maintaining proper airflow — can recover 6–12 inches of ceiling height in problem areas.</p>
          </div>
          <div className="feature-card">
            <h3>🪵 Exposed Beam Design</h3>
            <p>Where ceiling height is limited, leaning into the aesthetic rather than fighting it is often the best design choice. Exposed structural beams, open-concept design, and lower-profile lighting create a character-rich space that feels intentional — rather than a low ceiling that feels like a limitation.</p>
          </div>
        </div>

        <div className="note">
          ⚠️ <strong>Kensington Ceiling Height Note:</strong> If your Kensington basement has ceiling heights below 6&apos;6&quot; in any area, those areas typically cannot be finished as habitable space under Montgomery County code. However, they can often be used for storage, mechanical rooms, or utility purposes — and the remaining areas with adequate height can still be fully finished. DMV-GC Group maps the ceiling heights of your entire basement during the consultation so you have an accurate picture before any design decisions are made.
        </div>

        {/* USE TYPES */}
        <h2>Most Popular Basement Uses in Kensington Homes</h2>
        <p>
          Kensington&apos;s homes are typically smaller than Potomac estates but still have meaningful basement square footage — often 600–1,000 sq ft in older homes, up to 1,200 sq ft in larger colonials. Here are the basement renovation types we complete most often:
        </p>

        <div className="use-type-grid">
          <div className="use-type-box">
            <div className="icon">🎮</div>
            <h3>Family / Recreation Room</h3>
            <p>The most common Kensington basement project — a comfortable, carpeted or LVP-floored family space for kids, TV, and casual entertaining. Open-plan design maximizes the feeling of space in smaller footprints.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">💼</div>
            <h3>Home Office</h3>
            <p>Dedicated work-from-home space with built-in shelving, good lighting, and sound separation from the main living floors. The basement is the ideal location for a home office in Kensington&apos;s smaller historic homes where upper floor square footage is limited.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🛏️</div>
            <h3>Guest Suite</h3>
            <p>A bedroom with egress window plus bathroom addition creates a self-contained guest suite — adding a legal bedroom to the home&apos;s bedroom count and meaningfully increasing appraised value.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🏋️</div>
            <h3>Home Gym</h3>
            <p>Rubber flooring, mirror wall panels, and a dedicated ventilation upgrade create a functional gym in even a modest basement footprint. Popular in Kensington where outdoor gym commutes are increasingly replaced by home fitness.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🎨</div>
            <h3>Hobby / Art Studio</h3>
            <p>Kensington&apos;s creative community makes art studios and hobby spaces a unique basement use — concrete or sealed floors, utility sink, extra electrical circuits, and good task lighting create a functional creative workspace.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">📚</div>
            <h3>Library / Study</h3>
            <p>Built-in bookshelves floor-to-ceiling, reading nooks, and warm lighting create a library or study that suits the character of Kensington&apos;s Victorian and Craftsman homes — a quiet, character-rich retreat from the main living areas.</p>
          </div>
        </div>

        {/* WATERPROOFING */}
        <h2>Basement Waterproofing in Kensington&apos;s Stone &amp; Block Foundation Homes</h2>
        <p>
          Moisture management is more complex in Kensington&apos;s oldest homes than in any newer construction in Montgomery County. Rubble stone foundations and unreinforced block walls absorb and transmit moisture differently than poured concrete, and the exterior waterproofing systems used in modern construction often don&apos;t exist in homes built before World War II.
        </p>
        <p>
          This doesn&apos;t mean these basements can&apos;t be finished — it means the moisture management strategy needs to be designed for the actual foundation type rather than assumed to be standard. DMV-GC Group&apos;s approach for stone and block foundation basements:
        </p>

        <div className="historic-box">
          <h3>💧 Moisture Strategy for Kensington&apos;s Older Basements</h3>
          <ul>
            <li><strong>Interior drainage channel:</strong> A perimeter drainage channel at the base of the foundation wall, leading to a sump pit and pump, is the most reliable solution for managing water that enters through stone or block walls. This system captures water at the point of entry and directs it away rather than trying to stop it at the wall.</li>
            <li><strong>Dimple mat / drainage board:</strong> A dimple mat installed against the foundation wall before framing creates a drainage plane that allows any wall seepage to drain down to the perimeter channel rather than contacting the framing. This is particularly important for stone and old block foundations.</li>
            <li><strong>Vapor barrier on floor:</strong> A continuous 6-mil poly vapor barrier under any flooring applied to the slab addresses moisture vapor transmission through the concrete floor — especially important in basement areas where the slab is directly on soil.</li>
            <li><strong>Sump pump with battery backup:</strong> Essential for any finished Kensington basement. The battery backup is critical — power outages during storms are precisely when the sump pump is working hardest and when a failure causes the most damage.</li>
            <li><strong>Dehumidifier-ready electrical circuit:</strong> A dedicated 20-amp circuit for a basement dehumidifier is included in every Kensington basement renovation — basements in older homes typically need active dehumidification to maintain comfortable humidity levels in humid Maryland summers.</li>
            <li>DMV-GC Group provides a written assessment of existing moisture conditions and the recommended management approach before any finishing work is designed or priced.</li>
          </ul>
        </div>

        {/* PERMITS */}
        <h2>Permits for Basement Remodeling in the Town of Kensington</h2>
        <p>
          As an incorporated town within Montgomery County, Kensington has its own local government — and properties within the town limits may require permits from the <strong>Town of Kensington</strong> in addition to, or instead of, standard Montgomery County permits. This is a jurisdiction detail that catches many contractors off guard and causes permit delays and compliance problems.
        </p>
        <p>
          DMV-GC Group identifies the correct permit jurisdiction for your specific Kensington address before filing anything — using parcel data and boundary mapping rather than assuming based on zip code. For basement renovations, the required permits typically include building, electrical, and plumbing — all handled by our in-house permit team.
        </p>

        {/* WHY CHOOSE */}
        <h2>Why Kensington Homeowners Choose DMV-GC Group</h2>
        <p>
          Kensington homeowners have typically chosen their community for its historic character, walkability, and distinctiveness within Montgomery County. They value quality and authenticity — and they approach renovation decisions with the same care they brought to choosing Kensington as a place to live.
        </p>
        <p>
          The most common mistake contractors make in Kensington basement renovations is underestimating the work involved in the pre-finishing phase — assessing and addressing the older systems, moisture conditions, and ceiling height constraints that are specific to these homes. DMV-GC Group&apos;s approach starts with an honest assessment of what&apos;s there before any design work begins, so the budget and scope reflect reality rather than best-case assumptions.
        </p>

        <div className="highlight">
          <p>🏡 <strong>Kensington Basement ROI:</strong> A finished basement in Kensington adds meaningful square footage to homes that are often smaller than neighboring communities. Adding a legal bedroom via egress window plus a bathroom in the basement can increase a home&apos;s bedroom count — which directly affects appraised value and buyer interest in this market. Even a simple recreation room finishing adds 15–20% to the effective usable square footage of many Kensington homes.</p>
        </div>

        {/* NEIGHBORHOODS */}
        <h2>Serving All Kensington, MD Neighborhoods for Basement Remodeling</h2>

        <div className="neighborhood-grid">
          <div className="neighborhood-card">
            <h3>Historic Town Core</h3>
            <p>The original Victorian-era streets near the MARC station and antique district. Homes here have the oldest basements — stone and early block foundations, lowest ceiling heights, and the greatest need for systems assessment before renovation. Town of Kensington permits may apply.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Kensington Heights</h3>
            <p>Residential area north and east of the historic core with mid-century homes. Basements here are more straightforward — poured concrete or block foundations, standard ceiling heights, and fewer older system concerns than the historic core.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Rock Creek Hills</h3>
            <p>Established area near the town&apos;s southern border with Colonial Revival and mid-century homes. Mix of older and mid-century construction means variable basement conditions — assessment always recommended before finalizing scope.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Garrett Park Border Area</h3>
            <p>Homes bordering Garrett Park to the north share similar Victorian and Craftsman character — and similar basement renovation considerations. The natural slope of the terrain in this area means some homes have partial walkout basements with natural light.</p>
          </div>
        </div>

        {/* COST TABLE */}
        <h2>Basement Remodeling Cost in Kensington, MD</h2>
        <p>
          Here is a realistic cost breakdown for <strong>basement remodeling in Kensington, Maryland</strong>. Costs for older historic homes typically run 10–20% higher than comparable projects in newer construction — reflecting additional systems work and moisture management requirements:
        </p>

        <div className="table-responsive">
          <div className="table-holder">
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Scope / Space Type</th>
                  <th>Typical Cost Range</th>
                  <th>What&apos;s Included</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Standard Basement Finishing (per sq ft)</td>
                  <td>$30 – $55/sq ft</td>
                  <td>Framing, insulation, drywall, flooring, lighting, electrical — no bathroom</td>
                </tr>
                <tr>
                  <td>Full Basement Finishing (600–900 sq ft)</td>
                  <td>$25,000 – $55,000</td>
                  <td>Full framing, drywall, LVP or carpet, recessed lighting, electrical, HVAC extension</td>
                </tr>
                <tr>
                  <td>Moisture Management System</td>
                  <td>$6,000 – $18,000</td>
                  <td>Interior drainage channel, sump pump with battery backup, dimple mat, vapor barrier</td>
                </tr>
                <tr>
                  <td>Basement Bathroom Addition</td>
                  <td>$18,000 – $38,000</td>
                  <td>Below-grade plumbing, full bathroom build-out, tile, fixtures, permits</td>
                </tr>
                <tr>
                  <td>Egress Window Installation</td>
                  <td>$4,000 – $8,500</td>
                  <td>Concrete or masonry cutting, window well, drainage, window, interior finishing</td>
                </tr>
                <tr>
                  <td>Galvanized Plumbing Replacement</td>
                  <td>$3,500 – $10,000</td>
                  <td>Replacement of galvanized supply lines in the basement area with copper or PEX</td>
                </tr>
                <tr>
                  <td>Mid-Range Full Renovation with Bathroom</td>
                  <td>$50,000 – $85,000</td>
                  <td>Moisture management, full finishing, bathroom, egress window, permits</td>
                </tr>
                <tr>
                  <td>Full Renovation with Guest Suite</td>
                  <td>$75,000 – $120,000</td>
                  <td>All of above plus guest bedroom, custom finishes, wet bar or kitchenette</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="tip">
          💡 <strong>Kensington Budget Tip:</strong> For Kensington&apos;s older homes, always budget a 10–15% contingency above the base estimate. Discovery of older galvanized plumbing, lower-than-expected ceiling heights in some areas, or additional moisture management needs are common during demolition in homes built before 1950. DMV-GC Group communicates every discovery immediately and provides clear options before proceeding.
        </div>

        {/* MID PAGE CTA */}
        <div className="cta-banner">
          <h2>Get a Free Basement Remodeling Estimate in Kensington</h2>
          <p>We&apos;ll visit your Kensington home, assess your basement honestly — older systems, ceiling heights, moisture conditions — and provide a detailed, realistic estimate. No cost, no obligation.</p>
          <Link href="/contact-us" className="cta-btn">Schedule Free In-Home Consultation</Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
        </div>

        {/* PROCESS */}
        <h2>Our Basement Remodeling Process in Kensington</h2>

        <div className="steps">
          {[
            {
              num: 1,
              title: "Free In-Home Consultation & Systems Assessment",
              desc: "We visit your Kensington home, measure all basement ceiling heights, assess foundation wall type and moisture condition, evaluate existing plumbing and electrical, and identify any knob-and-tube or galvanized concerns. This assessment shapes the scope and budget before any design work begins. No cost, no obligation."
            },
            {
              num: 2,
              title: "Moisture Management (If Needed)",
              desc: "For stone and block foundation basements with moisture history, we design and install the appropriate system — interior drainage channel, sump pump with battery backup, dimple mat, vapor barrier — before any framing or finishing begins. Finishing a wet basement without addressing moisture first is the most common and costly basement renovation mistake."
            },
            {
              num: 3,
              title: "Systems Updates — Plumbing & Electrical",
              desc: "Galvanized plumbing replacement and any required electrical updates (panel upgrade, new circuits, removal of knob-and-tube where present) are completed before framing begins. This is the correct sequence — updating systems is far easier before walls are up."
            },
            {
              num: 4,
              title: "Permit Processing — Town of Kensington or Montgomery County",
              desc: "We determine the correct permit jurisdiction for your specific property and file all required building, electrical, and plumbing permits. Our permit team handles all correspondence and inspection scheduling from application through final sign-off."
            },
            {
              num: 5,
              title: "Framing, Mechanical Rough-In & Insulation",
              desc: "All framing, electrical rough-in, plumbing rough-in, HVAC extension, and insulation are completed and inspected before drywall. Egress window installation, if included, happens at this stage — cutting through the foundation wall is framing-stage work."
            },
            {
              num: 6,
              title: "Drywall, Flooring & Finish Work",
              desc: "Drywall, paint, flooring, cabinetry, lighting trim-out, bathroom tile and fixtures, and all final finishes are completed by our in-house crew. A dedicated project manager coordinates every trade throughout."
            },
            {
              num: 7,
              title: "Final Inspection, Walkthrough & 1-Year Warranty",
              desc: "We manage all required final inspections, conduct a thorough walkthrough with you, address every punch list item, and activate your 1-year workmanship warranty before closing the project."
            }
          ].map((step) => (
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
        <h2>What Kensington Homeowners Say About DMV-GC Group</h2>

        <div className="review-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;Our 1910 Victorian had a stone foundation basement that everyone told us couldn&apos;t be finished. DMV-GC Group assessed it, installed a proper interior drainage system, and built us a beautiful family room and home office. Two years later, zero moisture issues. They did it right.&quot;</p>
            <div className="review-author">&mdash; Verified Homeowner · <span className="review-location">Historic Core, Kensington MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;The ceiling height in our Kensington bungalow basement was a concern — some areas were only 6&apos;8&quot;. DMV-GC Group rerouted the ductwork along the walls and we ended up with 7&apos;2&quot; in most of the space. The finished basement feels completely normal — you&apos;d never guess there was a constraint.&quot;</p>
            <div className="review-author">&mdash; Verified Homeowner · <span className="review-location">Kensington Heights, MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;They found galvanized pipes during the initial assessment and explained why replacing them was worth doing during the renovation. Our water pressure throughout the whole house improved after they were replaced. The basement renovation is beautiful and now the whole house works better.&quot;</p>
            <div className="review-author">&mdash; Verified Homeowner · <span className="review-location">Rock Creek Hills, Kensington MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;DMV-GC Group immediately knew whether our property needed Town of Kensington permits or county permits — which apparently trips up a lot of contractors in this area. No delays, no confusion, permits sorted from day one. The basement guest suite they built is perfect.&quot;</p>
            <div className="review-author">&mdash; Verified Homeowner · <span className="review-location">Town of Kensington, MD</span></div>
          </div>
        </div>

        <div className="highlight">
          <p>⭐ <strong>4.9-star rated with 97+ verified reviews</strong> across Google, Houzz, and Angi. DMV-GC Group is trusted by Kensington homeowners for honest basement assessments and quality renovations that respect the character of the town&apos;s historic homes.</p>
        </div>

        {/* SERVICE AREAS */}
        <h2>Serving Kensington and Surrounding Areas for Basement Remodeling</h2>

        <div className="areas-grid">
          <span className="area-pill">Kensington, MD</span>
          <span className="area-pill">Garrett Park</span>
          <span className="area-pill">Chevy Chase</span>
          <span className="area-pill">Silver Spring</span>
          <span className="area-pill">Wheaton</span>
          <span className="area-pill">Bethesda</span>
          <span className="area-pill">North Bethesda</span>
          <span className="area-pill">Rockville</span>
          <span className="area-pill">Washington DC</span>
        </div>

        <div className="nearby-box">
          <h3>Also serving Garrett Park, MD — Kensington&apos;s neighboring historic town</h3>
          <p>DMV-GC Group completes basement renovations throughout Garrett Park, which borders Kensington to the north and shares the same concentration of Victorian and Craftsman homes with similar basement renovation considerations. <Link href="/service/basement-remodeling">View our full basement remodeling service page &rarr;</Link></p>
        </div>

        {/* FAQ */}
        <h2>Frequently Asked Questions — Basement Remodeling in Kensington, MD</h2>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How much does basement remodeling cost in Kensington, MD?</Accordion.Header>
            <Accordion.Body>
              Basement remodeling in Kensington typically costs $25,000–$120,000 depending on scope and finish level. Standard finishing runs $30–$55 per sq ft. A full 600–900 sq ft finishing costs $25,000–$55,000. Adding moisture management adds $6,000–$18,000. A bathroom addition adds $18,000–$38,000. A full renovation with guest suite can reach $75,000–$120,000. Historic homes typically add 10–20% for older systems work. DMV-GC Group provides free in-home consultations with itemized estimates.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Can DMV-GC Group finish the basement of a Victorian or Craftsman home in Kensington?</Accordion.Header>
            <Accordion.Body>
              Yes. DMV-GC Group has experience finishing basements in Kensington&apos;s Victorian, Queen Anne, and Craftsman homes. These older homes often have lower ceiling heights, stone or block foundation walls that require specific moisture management, and older systems that need assessment and updating before finishing begins. We assess all of these conditions during the free consultation and factor them into a realistic scope and budget.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What ceiling height is needed to finish a Kensington basement?</Accordion.Header>
            <Accordion.Body>
              Montgomery County building code requires a minimum ceiling height of 7 feet for habitable basement space. Many of Kensington&apos;s older homes have ceiling heights of 6&apos;6&quot;–7&apos;0&quot;. DMV-GC Group measures all basement ceiling heights during the consultation and identifies where ductwork rerouting can recover clearance — often gaining 6–12 inches in constrained areas.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Does DMV-GC Group handle permits for basement remodeling in Kensington?</Accordion.Header>
            <Accordion.Body>
              Yes. Kensington is an incorporated town within Montgomery County, and permits may be required from the Town of Kensington, Montgomery County, or both — depending on your property&apos;s exact location. DMV-GC Group verifies the correct jurisdiction for your specific address and manages the entire permit process from application through final inspection.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Do I need to worry about moisture before finishing my Kensington basement?</Accordion.Header>
            <Accordion.Body>
              Yes — especially in Kensington&apos;s older stone and block foundation homes. Finishing a basement with unaddressed moisture issues is the most common and costly renovation mistake. DMV-GC Group provides a written moisture assessment with findings and recommendations before any design or pricing is finalized. Addressing moisture before finishing — not after — is always the correct sequence.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Is DMV-GC Group licensed for basement remodeling in Kensington, MD?</Accordion.Header>
            <Accordion.Body>
              Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home renovation work in Kensington and Montgomery County. We employ licensed plumbers and electricians in-house, are fully bonded, carry comprehensive general liability insurance and workers&apos; compensation coverage, and provide a 1-year workmanship warranty on every basement project.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* INTERNAL LINKS */}
        <div className="internal-links">
          <h2>Explore Our Other Remodeling Services in Kensington</h2>
          <ul>
            <li><Link href="/service/kitchen-remodeling">Kitchen Remodeling in Kensington, MD</Link></li>
            <li><Link href="/service/bathroom-remodeling/kensington-md">Bathroom Remodeling in Kensington, MD</Link></li>
            <li><Link href="/service/home-additions">Home Additions in Kensington, MD</Link></li>
            <li><Link href="/service/electrical-services">Electrical Services for Historic Homes in Kensington</Link></li>
            <li><Link href="/service/plumbing-services">Plumbing Services for Older Homes in Kensington</Link></li>
            <li><Link href="/service/design-build">Design-Build Contractor in Kensington, MD</Link></li>
          </ul>
        </div>

        {/* FINAL CTA */}
        <div className="cta-banner">
          <h2>Ready to Finish Your Kensington Basement?</h2>
          <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. We&apos;ll give you an honest assessment of your basement&apos;s potential — and a realistic plan to get there.</p>
          <Link href="/contact-us" className="cta-btn">Get Free Basement Estimate in Kensington &rarr;</Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
        </div>

        {/* SCHEMA JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </div>
    </div>
  );
}
