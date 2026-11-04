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
      "description": "Licensed design-build general contractor serving Laurel, MD. Specializing in basement remodeling across Laurel's three-jurisdiction landscape — City of Laurel, Montgomery County, and Prince George's County — with in-house permit expertise for all three authorities.",
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
        { "@type": "City", "name": "Laurel", "sameAs": "https://en.wikipedia.org/wiki/Laurel,_Maryland" },
        { "@type": "City", "name": "Beltsville" },
        { "@type": "City", "name": "Savage" },
        { "@type": "City", "name": "Burtonsville" },
        { "@type": "City", "name": "College Park" }
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "MHIC License", "credentialCategory": "Maryland Home Improvement Contractor License" },
        { "@type": "EducationalOccupationalCredential", "name": "DLCP License", "credentialCategory": "Washington DC Department of Licensing and Consumer Protection" }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "97", "bestRating": "5" },
      "priceRange": "$$"
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/basement-remodeling/laurel-md#service",
      "serviceType": "Basement Remodeling",
      "name": "Basement Remodeling in Laurel, MD",
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Laurel", "sameAs": "https://en.wikipedia.org/wiki/Laurel,_Maryland" },
      "description": "Full-service basement remodeling in Laurel, MD. Recreation rooms, home offices, guest suites, ADU conversions, and full basement finishing — serving City of Laurel, Montgomery County, and Prince George's County areas with in-house permit expertise for all three jurisdictions.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "16000", "maxPrice": "105000", "priceCurrency": "USD" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Basement Remodeling", "item": "https://www.dmv-gc.com/service/basement-remodeling" },
        { "@type": "ListItem", "position": 4, "name": "Laurel, MD", "item": "https://www.dmv-gc.com/service/basement-remodeling/laurel-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does basement remodeling cost in Laurel, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Basement remodeling in Laurel, MD typically costs between $16,000 and $105,000 depending on scope, home type, and finish level. A basic basement finishing runs $16,000–$36,000. A mid-range basement with bathroom and home office runs $34,000–$65,000. A full ADU conversion with egress windows, separate entrance, kitchen, and bathroom typically costs $60,000–$105,000. Laurel's value-oriented housing market means basement renovations here offer strong ROI percentages. DMV-GC Group provides free in-home consultations with detailed estimates."
          }
        },
        {
          "@type": "Question",
          "name": "Does Laurel require City permits or County permits for basement remodeling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your property's exact location. Laurel sits at the intersection of three jurisdictions: the City of Laurel (incorporated), Montgomery County (unincorporated areas north and west of the city), and Prince George's County (unincorporated areas south and east of the city). Properties within the City of Laurel require City of Laurel permits. Properties outside the city limits require Montgomery County or Prince George's County permits depending on which county the property falls in. DMV-GC Group verifies the correct permit jurisdiction for every Laurel address before filing any permit application."
          }
        },
        {
          "@type": "Question",
          "name": "Can DMV-GC Group convert a Laurel basement into a legal ADU?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. ADU basement conversions are popular in Laurel given the area's strong rental market, access to the MARC Penn Line at Laurel station, and mix of Montgomery County and Prince George's County rental markets. A legal basement ADU requires egress windows in sleeping areas, a separate entrance, a full kitchen or kitchenette, a full bathroom, fire-rated separation, and a Certificate of Occupancy from the correct jurisdiction — City of Laurel, Montgomery County, or Prince George's County depending on your property's location. DMV-GC Group handles the entire process in-house."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group serve both Montgomery County and Prince George's County Laurel addresses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Many contractors only serve one county and turn away Laurel homeowners whose address falls in the other. DMV-GC Group serves the entire Laurel area — City of Laurel, Montgomery County portions, and Prince George's County portions — with the same licensed team, same quality standards, and the permit expertise to handle whichever jurisdiction applies to your specific property."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a basement remodel take in Laurel, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Laurel basement renovations take 6–12 weeks from construction start to completion. A basic finishing takes 5–8 weeks. A full ADU conversion takes 10–14 weeks. Permit processing — through the City of Laurel, Montgomery County, or Prince George's County — typically adds 3–6 weeks before construction begins. DMV-GC Group manages the complete timeline in-house regardless of which jurisdiction applies."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for basement remodeling in Laurel, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home renovation work in Laurel, regardless of whether the property is in the City of Laurel, Montgomery County, or Prince George's County. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every basement remodeling project completed in Laurel."
          }
        }
      ]
    }
  ]
};

export default function BasementLaurelMD() {
  const { setActiveMenuItem } = useMyContext();

  useEffect(() => {
    setActiveMenuItem("service");
  }, []);

  return (
    <div className="city-service-detail-page basement-laurel-md">
      <div className="container">

        {/* BREADCRUMB */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>&rsaquo;</span>
          <Link href="/services">Services</Link><span>&rsaquo;</span>
          <Link href="/service/basement-remodeling">Basement Remodeling</Link><span>&rsaquo;</span>
          Laurel, MD
        </nav>

        {/* HERO */}
        <div className="hero">
          <div className="hero-location-tag">📍 Serving Laurel, MD</div>
          <h1>Basement Remodeling Contractor in Laurel, MD</h1>
          <div className="hero-meta">
            <span className="badge">⭐ 4.9 Rating &middot; 97+ Reviews</span>
            <span className="badge">✓ MHIC Licensed &amp; Insured</span>
            <span className="badge">✓ 1-Year Warranty</span>
            <span className="badge">✓ All Three Jurisdictions Served</span>
            <span className="badge dark">📞 +1 240-730-1292</span>
          </div>
        </div>

        {/* THREE JURISDICTION BANNER */}
        <div className="jurisdiction-banner">
          <div className="icon">🗺️</div>
          <div>
            <h3>Laurel&apos;s Three-Jurisdiction Permit Challenge — We Handle All Three</h3>
            <p>Laurel is unique in Maryland: the &ldquo;Laurel, MD&rdquo; address spans three separate permit jurisdictions — the City of Laurel, Montgomery County, and Prince George&apos;s County. Which authority issues your basement renovation permit depends entirely on your property&apos;s exact location, not your mailing address or zip code. Many contractors only know one jurisdiction and turn away homeowners in the others. DMV-GC Group verifies the correct permit authority for every Laurel address and manages all three jurisdictions in-house — City of Laurel, Montgomery County DPS, and Prince George&apos;s County DPS.</p>
          </div>
        </div>

        {/* INTRO */}
        <div className="intro-box">
          Looking for a trusted <strong>basement remodeling contractor in Laurel, MD</strong>? Laurel sits at a unique crossroads in the Maryland suburbs — a city that straddles the Montgomery County and Prince George&apos;s County border along the I-95 corridor, with its own incorporated city government and a diverse housing stock that spans postwar colonials, townhome communities, and newer single-family construction. Basements throughout Laurel represent practical renovation opportunities: family rooms, home offices, guest suites, and income-generating ADU units for a rental market strengthened by MARC rail access and I-95 connectivity. DMV-GC Group&apos;s licensed team serves every part of Laurel&apos;s three-jurisdiction landscape with the same quality, the same licensed crews, and the same 1-year warranty — regardless of which authority issues your permit.
        </div>

        {/* TRUST BAR */}
        <div className="trust-bar">
          <div className="trust-item">
            <div className="icon">🗺️</div>
            <strong>3 Jurisdictions Served</strong>
            <span>City, MoCo &amp; PG County — all handled</span>
          </div>
          <div className="trust-item">
            <div className="icon">📋</div>
            <strong>Permits Handled</strong>
            <span>Correct authority — always verified</span>
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
        <h2>Basement Remodeling Services We Offer in Laurel, MD</h2>
        <p>
          Laurel&apos;s housing stock spans 1960s–70s colonials and split-levels, 1980s–90s townhome communities, and newer single-family construction — each with different basement configurations and renovation potential. DMV-GC Group handles every basement renovation scope in Laurel, across all three jurisdictions.
        </p>

        <div className="service-grid">
          <div className="service-item">Full Basement Finishing</div>
          <div className="service-item">ADU Basement Conversion (Legal Rental)</div>
          <div className="service-item">Recreation Room &amp; Family Room</div>
          <div className="service-item">Home Office Buildout</div>
          <div className="service-item">Basement Guest Suite with Egress</div>
          <div className="service-item">Basement Bathroom Addition</div>
          <div className="service-item">Egress Window Installation</div>
          <div className="service-item">Kitchenette / Wet Bar Installation</div>
          <div className="service-item">Separate Entrance Addition</div>
          <div className="service-item">Waterproofing &amp; Moisture Management</div>
          <div className="service-item">Home Gym Space</div>
          <div className="service-item">City / County Permit Processing</div>
        </div>

        {/* AUTHOR BOX */}
        <div className="author-box">
          <div className="author-avatar">🏠</div>
          <div className="author-info">
            <h4>About DMV-GC Group — Laurel&apos;s Licensed Basement Remodeling Contractor</h4>
            <p>DMV-GC Group is based in North Bethesda and serves the full Laurel area across all three permit jurisdictions — City of Laurel, Montgomery County, and Prince George&apos;s County. Our permit team verifies the correct jurisdiction for every Laurel address and manages the full permit process in whichever authority applies. We hold a Maryland MHIC license, carry full general liability insurance, and back every project with a 1-year workmanship warranty.</p>
            <div className="author-creds">
              <span className="cred">MHIC Licensed</span>
              <span className="cred">Licensed Plumbers</span>
              <span className="cred">Licensed Electricians</span>
              <span className="cred">ADU Specialists</span>
              <span className="cred">4.9★ Rated</span>
              <span className="cred">1-Year Warranty</span>
            </div>
          </div>
        </div>

        {/* THREE JURISDICTION SECTION */}
        <h2>Laurel&apos;s Three Permit Jurisdictions — What Every Homeowner Needs to Know</h2>
        <p>
          No other community in the DMV-GC Group service area has Laurel&apos;s jurisdictional complexity. The &ldquo;Laurel, MD&rdquo; mailing address covers properties in three entirely separate government jurisdictions, each with its own building department, permit process, fee schedule, and inspection staff. Filing with the wrong authority doesn&apos;t just cause delays — it results in permits that cannot be inspected, leaving renovation work with unresolved code compliance issues.
        </p>

        <div className="jurisdiction-grid">
          <div className="jurisdiction-card city">
            <h3>City of Laurel</h3>
            <div className="auth">City Permits</div>
            <p>Properties within the incorporated City of Laurel use the City&apos;s own Department of Public Works, 8103 Sandy Spring Road. The City has its own plan review, inspection staff, and fee schedule separate from either county. Historic Laurel, Downtown Laurel, and much of Laurel Lakes falls within city limits.</p>
          </div>
          <div className="jurisdiction-card moco">
            <h3>Montgomery County Areas</h3>
            <div className="auth">MoCo DPS Permits</div>
            <p>Properties in the Laurel area north and west of the city limits — including parts of Laurel Lakes, Russett, and communities along MD-198 toward Burtonsville — fall in unincorporated Montgomery County and require Montgomery County DPS permits, not City permits.</p>
          </div>
          <div className="jurisdiction-card pgco">
            <h3>Prince George&apos;s County Areas</h3>
            <div className="auth">PG County Permits</div>
            <p>Properties south and east of the city limits — including communities along US-1 south of Laurel, Montpelier, and areas toward Beltsville — fall in Prince George&apos;s County and require Prince George&apos;s County DPS permits. A separate contractor license endorsement is required for PG County work.</p>
          </div>
        </div>

        <div className="spec-box">
          <h3>📋 How DMV-GC Group Handles Laurel&apos;s Jurisdiction Complexity</h3>
          <ul>
            <li><strong>Parcel-level verification:</strong> Before any design or pricing begins, DMV-GC Group looks up your specific parcel in boundary data to determine which of the three jurisdictions applies. We never assume based on zip code, street name, or mailing address — these are unreliable indicators in Laurel&apos;s patchwork boundary structure.</li>
            <li><strong>City of Laurel process:</strong> For City properties, all permits are filed with the City&apos;s Department of Public Works at 8103 Sandy Spring Road. Plan review, fee payment, and inspection scheduling run through the City&apos;s own system. DMV-GC Group manages this process in full.</li>
            <li><strong>Montgomery County process:</strong> For MoCo properties, permits go through Montgomery County DPS. Our team is highly experienced with MoCo&apos;s online permit portal, plan review requirements, and inspection scheduling. ADU projects in MoCo also require a Montgomery County Certificate of Occupancy.</li>
            <li><strong>Prince George&apos;s County process:</strong> For PG County properties, permits go through Prince George&apos;s County DPS. DMV-GC Group manages PG County permit applications, plan review, and inspection scheduling — including the Certificate of Occupancy process for ADU conversions in PG County.</li>
            <li><strong>Contractor licensing:</strong> The Maryland MHIC license covers work throughout all three Laurel jurisdictions — City, MoCo, and PG County. DMV-GC Group holds the correct licensing for every part of the Laurel area.</li>
            <li><strong>ADU Certificate of Occupancy:</strong> For ADU conversions, the COO is issued by whichever jurisdiction your property is in — City of Laurel, Montgomery County, or Prince George&apos;s County. The specific requirements are similar across all three but the issuing authority and process differ. DMV-GC Group manages whichever COO process applies.</li>
          </ul>
        </div>

        <div className="note">
          ⚠️ <strong>Common Laurel Permit Mistake:</strong> Many contractors who work primarily in Montgomery County file all Laurel permits with MoCo DPS — even for properties within the City of Laurel or in Prince George&apos;s County. City inspectors won&apos;t inspect work permitted by the county, and vice versa. If your previous contractor filed your permit with the wrong authority, your renovation work has not been properly inspected — a problem that surfaces at resale. DMV-GC Group eliminates this risk by verifying jurisdiction at the start of every Laurel project.
        </div>

        {/* ADU SECTION */}
        <h2>ADU Basement Conversions in Laurel — MARC Rail &amp; I-95 Drive Rental Demand</h2>
        <p>
          Laurel&apos;s position along the I-95 / US-1 corridor — with MARC Penn Line service at the Laurel station connecting riders to Baltimore and DC — creates consistent rental demand that makes basement ADU conversions a strong investment for Laurel homeowners. The area&apos;s relatively accessible home values and the dual-county rental market (MoCo and PG County tenants both draw on Laurel) mean rental demand is broad and sustained.
        </p>
        <p>
          A legal basement ADU in Laurel requires the same core components regardless of which jurisdiction applies — egress windows, separate entrance, kitchen or kitchenette, full bathroom, fire-rated separation — but the Certificate of Occupancy is issued by the City of Laurel, Montgomery County, or Prince George&apos;s County depending on your property&apos;s location. DMV-GC Group manages the complete ADU buildout and COO process for all three jurisdictions.
        </p>

        <div className="tip">
          💡 <strong>Laurel ADU ROI:</strong> A basement ADU conversion in Laurel typically costs $58,000–$90,000 fully built and permitted. At $1,200–$1,700/month in rental income (depending on size, finishes, and location), the renovation pays for itself in approximately 4–6 years — and adds $70,000–$100,000 to the home&apos;s appraised value. MARC rail access at Laurel station is the strongest single rental demand driver in the area.
        </div>

        {/* USE TYPES */}
        <h2>Most Popular Basement Uses in Laurel Homes</h2>

        <div className="use-type-grid">
          <div className="use-type-box">
            <div className="icon">🏘️</div>
            <h3>ADU Rental Unit</h3>
            <p>Legal, COO-permitted rental unit — the highest-ROI basement project in Laurel&apos;s MARC corridor and I-95 rental market. Payback of 4–6 years at current Laurel rents.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🎮</div>
            <h3>Family / Recreation Room</h3>
            <p>The most common non-ADU project in Laurel — an open, comfortable family space that adds immediate livability to homes where the basement is the largest underutilized space.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">💼</div>
            <h3>Home Office</h3>
            <p>Dedicated remote work space with built-in shelving, task lighting, dedicated circuits, and sound separation from the main living floors. Very popular in Laurel&apos;s growing remote-worker community.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🛏️</div>
            <h3>Guest Suite</h3>
            <p>Bedroom with egress window plus bathroom — adds a legal bedroom to the home&apos;s count and appeals strongly to buyers needing space for extended family or multigenerational living.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🏋️</div>
            <h3>Home Gym</h3>
            <p>Rubber flooring, mirror wall, and ventilation upgrade — practical in even a modest basement footprint. Popular in Laurel&apos;s active, young-professional community.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🎨</div>
            <h3>Creative Studio</h3>
            <p>Art studio, music room, or hobby space with utility sink, sealed floors, task lighting, and acoustic treatment where needed. Laurel&apos;s diverse community makes creative basement spaces a consistently requested project type.</p>
          </div>
        </div>

        {/* WATERPROOFING */}
        <h2>Basement Moisture Assessment in Laurel Homes</h2>
        <p>
          Laurel&apos;s position in the Patuxent River watershed — with relatively flat terrain and clay-heavy soils common in the Maryland piedmont region — means some Laurel basements have more active groundwater conditions than homes in higher-elevation communities. Combined with a housing stock that includes many 1960s–70s homes built with block foundations, moisture assessment before finishing is essential.
        </p>

        <div className="spec-box">
          <h3>💧 Pre-Renovation Moisture Check — What We Assess in Laurel</h3>
          <ul>
            <li><strong>Foundation wall type:</strong> Many Laurel homes from the 1960s–70s have concrete block foundations — more porous than poured concrete and more prone to seepage at mortar joints, particularly in homes near low-lying terrain or areas with high water tables.</li>
            <li><strong>Efflorescence and staining:</strong> White mineral deposits on walls, watermarks at the floor-wall joint, and musty odor are all indicators of historical moisture movement requiring investigation before finishing.</li>
            <li><strong>Sump pit and pump:</strong> Presence, age, cycling frequency, and battery backup status. Laurel&apos;s proximity to the Patuxent River and its tributaries means some properties have elevated seasonal groundwater conditions that require active sump management.</li>
            <li><strong>Grading and downspouts:</strong> Ground sloping toward the foundation and downspouts discharging within 4 feet of the foundation wall are the most common correctable causes of moisture in Laurel&apos;s postwar housing stock.</li>
            <li><strong>Window well drainage:</strong> Clogged window well drains are a frequent moisture source in Laurel&apos;s 1960s–80s homes — easily addressed but important to clear before finishing begins.</li>
            <li>DMV-GC Group provides a written moisture assessment with specific findings and recommendations before any design or pricing is finalized for any Laurel basement renovation.</li>
          </ul>
        </div>

        {/* NEIGHBORHOODS */}
        <h2>Serving All Laurel, MD Neighborhoods for Basement Remodeling</h2>

        <div className="neighborhood-grid">
          <div className="neighborhood-card">
            <h3>Historic Laurel / Downtown</h3>
            <div className="jur-tag city">City of Laurel</div>
            <p>Older homes near Main Street and the historic core — some pre-WWII construction with older foundation systems. City of Laurel permits. Assessment of ceiling heights and foundation type recommended before finalizing scope.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Laurel Lakes</h3>
            <div className="jur-tag city">City / MoCo — varies</div>
            <p>Mixed jurisdiction — some Laurel Lakes addresses fall within the City of Laurel while others are in unincorporated Montgomery County. DMV-GC Group verifies the specific parcel for every Laurel Lakes address. Mix of townhomes and single-family homes with varied basement footprints.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Russett</h3>
            <div className="jur-tag moco">Montgomery County</div>
            <p>Planned community with 1990s townhomes and single-family homes in unincorporated Montgomery County. Montgomery County DPS permits apply. HOA coordination included. Full finishing and ADU conversions are common project types.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Montpelier</h3>
            <div className="jur-tag pgco">Prince George&apos;s County</div>
            <p>Established neighborhood in Prince George&apos;s County with 1970s–80s colonials and townhomes. PG County DPS permits apply. Recreation rooms, home offices, and guest suite additions are the most common basement project types here.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Laurel Beltsville Area (US-1 Corridor)</h3>
            <div className="jur-tag pgco">Prince George&apos;s County</div>
            <p>Communities along the US-1 corridor south of the city in Prince George&apos;s County. Mix of older single-family homes and townhomes. ADU conversions are particularly popular given the area&apos;s rental demand from commuters using the MARC station.</p>
          </div>
          <div className="neighborhood-card">
            <h3>North Laurel / MD-198 Area</h3>
            <div className="jur-tag moco">Montgomery County</div>
            <p>Communities along MD-198 in unincorporated Montgomery County. Mix of 1970s–90s construction. Montgomery County DPS permits. Full basement finishing, recreation rooms, and home offices are the most common project types.</p>
          </div>
        </div>

        {/* COST TABLE */}
        <h2>Basement Remodeling Cost in Laurel, MD</h2>
        <p>
          Here is a realistic cost breakdown for <strong>basement remodeling in Laurel, Maryland</strong>. Costs are consistent across all three jurisdictions — permit fees vary slightly but construction costs do not:
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
                  <td>Basic Basement Finishing (600–900 sq ft)</td>
                  <td>$16,000 – $36,000</td>
                  <td>Framing, drywall, LVP or carpet, recessed lighting, electrical, paint</td>
                </tr>
                <tr>
                  <td>Full Basement Finishing (900–1,200 sq ft)</td>
                  <td>$28,000 – $55,000</td>
                  <td>Full framing, drywall, flooring, lighting, electrical, HVAC extension</td>
                </tr>
                <tr>
                  <td>Basement Bathroom Addition</td>
                  <td>$15,000 – $32,000</td>
                  <td>Below-grade plumbing (ejector pump if needed), full bathroom build-out, tile, fixtures</td>
                </tr>
                <tr>
                  <td>Egress Window Installation</td>
                  <td>$3,500 – $7,500</td>
                  <td>Concrete or block cutting, window well, drainage, window, interior finishing, permit</td>
                </tr>
                <tr>
                  <td>Kitchenette Installation</td>
                  <td>$7,000 – $16,000</td>
                  <td>Cabinetry, countertop, sink, refrigerator, countertop cooking, plumbing &amp; electrical</td>
                </tr>
                <tr>
                  <td>Separate Entrance Addition</td>
                  <td>$4,500 – $11,000</td>
                  <td>New exterior door, steps, landing, exterior finishing, permit</td>
                </tr>
                <tr>
                  <td>Mid-Range Basement with Bathroom &amp; Office</td>
                  <td>$34,000 – $65,000</td>
                  <td>Full finishing, bathroom addition, home office buildout, egress window, permits</td>
                </tr>
                <tr>
                  <td>Full ADU Basement Conversion</td>
                  <td>$60,000 – $105,000</td>
                  <td>Full finishing, egress windows, separate entrance, kitchen, bathroom, fire separation, COO</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="tip">
          💡 <strong>Laurel ADU Jurisdiction Tip:</strong> If your Laurel property falls in Prince George&apos;s County, the ADU Certificate of Occupancy process runs through PG County DPS rather than Montgomery County or the City. PG County&apos;s COO process has its own requirements and timeline — typically 3–4 weeks for final inspection scheduling after construction is complete. DMV-GC Group manages this process for PG County ADU projects exactly as we do for Montgomery County and City of Laurel projects — homeowners never need to navigate any government office directly.
        </div>

        {/* MID PAGE CTA */}
        <div className="cta-banner">
          <h2>Get a Free Basement Remodeling Estimate in Laurel</h2>
          <p>We&apos;ll visit your Laurel home, confirm your permit jurisdiction, assess your basement&apos;s potential, and provide a detailed estimate — at no cost and no obligation.</p>
          <Link href="/contact-us" className="cta-btn">Schedule Free In-Home Consultation</Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
        </div>

        {/* PROCESS */}
        <h2>Our Basement Remodeling Process in Laurel</h2>

        <div className="steps">
          {[
            {
              num: 1,
              title: "Free In-Home Consultation & Jurisdiction Verification",
              desc: "We visit your Laurel home, assess the existing basement — ceiling heights, foundation type, moisture conditions, existing plumbing rough-ins — and immediately verify which of the three jurisdictions governs your property. This verification is step one of every Laurel project. No cost, no obligation."
            },
            {
              num: 2,
              title: "Moisture Assessment & Remediation Plan",
              desc: "We assess moisture conditions and provide written findings before any design begins. Any required moisture management — sump pump upgrade, window well drainage, block foundation waterproofing — is designed and priced before finishing scope is finalized."
            },
            {
              num: 3,
              title: "Custom Design & Space Planning",
              desc: "Our designers develop a floor plan maximizing usable space within your footprint. For ADU projects, the design incorporates all required components — egress windows, entrance, kitchen, bathroom, fire separation — while optimizing the layout for liveability."
            },
            {
              num: 4,
              title: "Permit Filing — Correct Jurisdiction",
              desc: "We file all required permits with the correct authority — City of Laurel, Montgomery County DPS, or Prince George's County DPS — based on your verified property location. Our permit team manages all correspondence, plan review, and inspection scheduling throughout the project."
            },
            {
              num: 5,
              title: "Construction — Egress, Framing, Mechanicals, Finishes",
              desc: "Egress window installation happens first if included. Then framing, electrical, plumbing, HVAC, drywall, flooring, kitchenette, bathroom, and all finish work — managed by a dedicated project manager throughout and inspected at each required stage by the correct authority."
            },
            {
              num: 6,
              title: "Final Inspections, COO & 1-Year Warranty",
              desc: "We manage all required final inspections — including the Certificate of Occupancy for ADU projects, issued by whichever of the three jurisdictions applies. After sign-off, we conduct a final walkthrough, address every punch list item, and activate your 1-year workmanship warranty."
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
        <h2>What Laurel Homeowners Say About DMV-GC Group</h2>

        <div className="review-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&ldquo;We&apos;re in the Russett community — Montgomery County, not the City. DMV-GC Group knew this immediately and filed with MoCo DPS. The contractor we talked to before didn&apos;t even know there was a difference. The finished ADU has been renting for $1,450/month since we got the Certificate of Occupancy.&rdquo;</p>
            <div className="review-author">&mdash; Verified Homeowner · <span className="review-location">Russett, Laurel MD (Montgomery County)</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&ldquo;Our house on the Montpelier side is in Prince George&apos;s County. DMV-GC Group handles PG County permits too — which almost no one in Montgomery County does. They built us a beautiful recreation room and home office, handled the PG County permit process entirely, and the project went flawlessly.&rdquo;</p>
            <div className="review-author">&mdash; Verified Homeowner · <span className="review-location">Montpelier, Laurel MD (Prince George&apos;s County)</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&ldquo;Our Downtown Laurel colonial is in the City of Laurel. The contractor before DMV-GC Group filed our permit with Montgomery County — which turned out to be wrong. DMV-GC Group caught the error, filed correctly with the City, and our project proceeded without any inspection issues. Very professional.&rdquo;</p>
            <div className="review-author">&mdash; Verified Homeowner · <span className="review-location">Historic Laurel, MD (City of Laurel)</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&ldquo;Full basement finishing — family room, home office, half bath — in our Laurel Lakes home. The moisture assessment they did upfront found a block foundation seepage issue we hadn&apos;t noticed. They fixed it before touching the finish work. Two years later, completely dry. Very glad they caught it.&rdquo;</p>
            <div className="review-author">&mdash; Verified Homeowner · <span className="review-location">Laurel Lakes, Laurel MD</span></div>
          </div>
        </div>

        <div className="highlight">
          <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> DMV-GC Group is one of the only licensed contractors serving all three of Laurel&apos;s permit jurisdictions — City of Laurel, Montgomery County, and Prince George&apos;s County — with the same team, same quality standards, and same 1-year warranty on every project.</p>
        </div>

        {/* SERVICE AREAS */}
        <h2>Serving Laurel and Surrounding Areas for Basement Remodeling</h2>

        <div className="areas-grid">
          <span className="area-pill">Laurel, MD</span>
          <span className="area-pill">Historic Laurel</span>
          <span className="area-pill">Russett</span>
          <span className="area-pill">Laurel Lakes</span>
          <span className="area-pill">Montpelier</span>
          <span className="area-pill">Beltsville</span>
          <span className="area-pill">Burtonsville</span>
          <span className="area-pill">College Park</span>
          <span className="area-pill">Silver Spring</span>
          <span className="area-pill">Wheaton</span>
        </div>

        <div className="nearby-box">
          <h3>Also serving Beltsville, MD — south of Laurel in Prince George&apos;s County</h3>
          <p>DMV-GC Group completes basement renovations throughout Beltsville and the US-1 corridor south of Laurel — serving PG County homeowners with the same licensed team and quality standards. <Link href="/service/basement-remodeling">View our full basement remodeling service page &rarr;</Link></p>
        </div>

        {/* FAQ */}
        <h2>Frequently Asked Questions — Basement Remodeling in Laurel, MD</h2>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How much does basement remodeling cost in Laurel, MD?</Accordion.Header>
            <Accordion.Body>
              Basement remodeling in Laurel typically costs $16,000–$105,000 depending on scope. A basic finishing runs $16,000–$36,000. A full finishing costs $28,000–$55,000. A mid-range renovation with bathroom and office runs $34,000–$65,000. A full ADU conversion costs $60,000–$105,000. Costs are consistent across all three Laurel jurisdictions — City, MoCo, and PG County. DMV-GC Group provides free in-home consultations with itemized estimates for any scope.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Does Laurel require City permits or County permits for basement remodeling?</Accordion.Header>
            <Accordion.Body>
              It depends on your property&apos;s exact location. Laurel addresses span three jurisdictions: City of Laurel (City DPW permits), unincorporated Montgomery County (MoCo DPS permits), and unincorporated Prince George&apos;s County (PG County DPS permits). Your mailing address or zip code does not determine your jurisdiction — only your parcel&apos;s actual boundary location does. DMV-GC Group verifies the correct jurisdiction for every Laurel address before filing any permit.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Does DMV-GC Group serve Prince George&apos;s County Laurel addresses?</Accordion.Header>
            <Accordion.Body>
              Yes. Many contractors who work primarily in Montgomery County don&apos;t serve PG County Laurel addresses. DMV-GC Group serves all of Laurel — City, MoCo, and PG County — with the same licensed team, same quality standards, and the permit expertise to handle PG County&apos;s DPS process, including the PG County Certificate of Occupancy for ADU conversions.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Can DMV-GC Group convert a Laurel basement into a legal ADU?</Accordion.Header>
            <Accordion.Body>
              Yes. ADU basement conversions are a popular project in Laurel given the area&apos;s MARC rail access and strong rental market. A legal ADU requires egress windows, a separate entrance, kitchen or kitchenette, full bathroom, fire-rated separation, and a Certificate of Occupancy from the correct jurisdiction. DMV-GC Group manages the entire process — including the COO application and all required inspections — regardless of whether your property is in the City, MoCo, or PG County.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>How does Laurel&apos;s three-jurisdiction structure affect basement renovation permits?</Accordion.Header>
            <Accordion.Body>
              Each jurisdiction has its own building department, plan review process, fee schedule, and inspection staff. Filing with the wrong authority produces a permit that the correct jurisdiction&apos;s inspectors cannot enforce — leaving renovation work without valid inspections. This creates code compliance issues that surface at resale and can be expensive to resolve. DMV-GC Group eliminates this risk by verifying jurisdiction at the start of every Laurel project, before any design or filing begins.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Is DMV-GC Group licensed for basement remodeling in Laurel, MD?</Accordion.Header>
            <Accordion.Body>
              Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home renovation work throughout Laurel, regardless of jurisdiction. We employ licensed plumbers and electricians in-house, are fully bonded, carry comprehensive general liability insurance and workers&apos; compensation coverage, and provide a 1-year workmanship warranty on every basement project in Laurel.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        {/* INTERNAL LINKS */}
        <div className="internal-links">
          <h2>Explore Our Other Remodeling Services in Laurel</h2>
          <ul>
            <li><Link href="/service/kitchen-remodeling">Kitchen Remodeling Near Laurel, MD</Link></li>
            <li><Link href="/service/bathroom-remodeling/laurel-md">Bathroom Remodeling in Laurel, MD</Link></li>
            <li><Link href="/service/home-additions">Home Additions in Laurel, MD</Link></li>
            <li><Link href="/service/adu">ADU Construction in Laurel, MD</Link></li>
            <li><Link href="/service/flooring-remodeling">Flooring Installation in Laurel, MD</Link></li>
            <li><Link href="/service/design-build">Design-Build Contractor in Laurel, MD</Link></li>
          </ul>
        </div>

        {/* FINAL CTA */}
        <div className="cta-banner">
          <h2>Ready to Transform Your Laurel Basement?</h2>
          <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. Available 7 days a week throughout all of Laurel — City, Montgomery County, and Prince George&apos;s County.</p>
          <Link href="/contact-us" className="cta-btn">Get Free Basement Estimate in Laurel &rarr;</Link>
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
