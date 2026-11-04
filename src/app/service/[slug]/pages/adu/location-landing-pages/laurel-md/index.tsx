'use client';

import "../city-service-style.scss";
import "./style.scss";
import Link from "next/link";
import { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

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
      "description": "Licensed design-build general contractor serving Laurel, MD. Specializing in ADU construction across all three of Laurel's jurisdictions — City of Laurel, Montgomery County, and Prince George's County — with basement ADU conversions, garage conversions, and in-law suite additions for Laurel's diverse housing stock.",
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
        { "@type": "City", "name": "College Park" },
        { "@type": "City", "name": "Beltsville" },
        { "@type": "City", "name": "Jessup" },
        { "@type": "City", "name": "Savage" }
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
      "@id": "https://www.dmv-gc.com/service/adu/laurel-md#service",
      "serviceType": "ADU Construction",
      "name": "ADU Construction in Laurel, MD",
      "alternateName": ["Accessory Dwelling Unit", "In-Law Suite", "Basement Apartment", "Garage Conversion"],
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Laurel", "sameAs": "https://en.wikipedia.org/wiki/Laurel,_Maryland" },
      "description": "Full-service ADU design and construction in Laurel, MD. Basement ADU conversions, garage conversions, and in-law suite additions across all three Laurel jurisdictions — City of Laurel, Montgomery County, and Prince George's County — with full permit management and Certificate of Occupancy for each authority.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "55000", "maxPrice": "190000", "priceCurrency": "USD" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "ADU Construction", "item": "https://www.dmv-gc.com/service/adu" },
        { "@type": "ListItem", "position": 4, "name": "Laurel, MD", "item": "https://www.dmv-gc.com/service/adu/laurel-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to build an ADU in Laurel, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ADU construction in Laurel, MD typically costs between $55,000 and $190,000 depending on ADU type and jurisdiction. A basement ADU conversion runs $58,000–$112,000. A garage conversion ADU costs $55,000–$105,000. An attached in-law suite addition costs $92,000–$190,000. Laurel's accessible price points combined with strong MARC rail and I-95 corridor rental demand make ADU investments here among the strongest in the DMV region. DMV-GC Group provides free in-home consultations with detailed estimates regardless of which jurisdiction your Laurel property falls in."
          }
        },
        {
          "@type": "Question",
          "name": "How many permit jurisdictions does Laurel, MD have for ADU construction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Laurel has three separate permit jurisdictions — making it the most complex jurisdiction landscape in the DMV-GC Group campaign. The City of Laurel (incorporated municipality) issues permits through its own Department of Public Works at 8103 Sandy Spring Road. Properties in the unincorporated Montgomery County portion of the Laurel area use Montgomery County DPS permits. Properties in the unincorporated Prince George's County portion use Prince George's County DPS permits. The jurisdiction is determined by your property's parcel location — not your mailing address. DMV-GC Group verifies the correct permit authority for every Laurel address before any application is filed."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group handle ADU permits in all three Laurel jurisdictions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group handles ADU permit applications with all three Laurel-area permit authorities — the City of Laurel, Montgomery County DPS, and Prince George's County DPS. Each jurisdiction has its own application process, plan review staff, and inspection schedule. Our permit team manages all correspondence with whichever authority governs your specific Laurel property from permit application through Certificate of Occupancy issuance."
          }
        },
        {
          "@type": "Question",
          "name": "What ADU types work best in Laurel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most practical ADU types for Laurel's postwar and mid-century housing stock are basement ADU conversions (most common across all Laurel neighborhoods), garage conversions (where a detached garage exists), and attached in-law suite additions (on lots with sufficient rear yard room). Laurel's split-levels — common in West Laurel and Montpelier — offer the same natural light and ceiling height advantages as split-levels in Silver Spring and Wheaton. Larger lots in Laurel Pines and Montpelier support attached additions in some cases. DMV-GC Group assesses which ADU type is most practical for your specific Laurel property during the free consultation."
          }
        },
        {
          "@type": "Question",
          "name": "What drives ADU rental demand in Laurel, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Laurel's rental demand is driven by its unique position as the northernmost point of the Baltimore-Washington I-95 corridor that offers practical commuting distance to both cities. Three MARC rail stations (Laurel, Muirkirk, and Savage) serve the Penn Line and Camden Line, providing transit access to both Washington Union Station and Baltimore Penn Station. I-95, I-295, and the Baltimore-Washington Parkway (MD-295) provide road access. This dual-city commuter position, combined with accessible home prices and ADU construction costs, gives Laurel one of the strongest ADU rental ROI profiles in the campaign."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for ADU construction in Laurel, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Laurel regardless of which jurisdiction (City, MoCo, or PGC) governs the property. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every ADU project completed in Laurel."
          }
        }
      ]
    }
  ]
};

const faqData = [
  { eventKey: "0", question: "How much does it cost to build an ADU in Laurel, MD?", answer: "ADU construction in Laurel typically costs $55,000–$190,000 depending on type and jurisdiction. A split-level lower-level ADU runs $55,000–$105,000. A basement ADU costs $58,000–$112,000. A garage conversion runs $55,000–$105,000. An attached in-law suite addition costs $92,000–$190,000. Laurel&apos;s accessible price points combined with strong dual-city rental demand produce some of the best ADU ROI ratios in the campaign. DMV-GC Group provides free in-home consultations with detailed estimates regardless of which jurisdiction your Laurel property falls in." },
  { eventKey: "1", question: "How many permit jurisdictions does Laurel, MD have for ADU construction?", answer: "Three — the most of any community in the DMV-GC Group campaign. The City of Laurel (permits at 8103 Sandy Spring Road), unincorporated Montgomery County (Montgomery County DPS), and unincorporated Prince George&apos;s County (PGC DPS). Your permit authority is determined by your parcel&apos;s location — not your mailing address. DMV-GC Group verifies the correct jurisdiction for every Laurel address using parcel boundary data before any application is filed." },
  { eventKey: "2", question: "Does DMV-GC Group handle all three Laurel permit jurisdictions?", answer: "Yes. DMV-GC Group files ADU permit applications with the City of Laurel, Montgomery County DPS, and Prince George&apos;s County DPS — whichever is correct for your specific parcel. Each has a different application process, plan review timeline, and inspection schedule. Our permit team manages all correspondence with the applicable authority from permit application through Certificate of Occupancy issuance." },
  { eventKey: "3", question: "What makes Laurel a strong ADU investment market?", answer: "Laurel is the only community in the campaign with dual-city MARC rail access to both Washington DC and Baltimore — on the Penn and Camden Lines through Muirkirk, Laurel, and Savage stations. Combined with Fort Meade/NSA proximity via MD-32 and I-95 access to the BW Corridor tech employers, Laurel has the broadest employment catchment area of any community we serve. This creates rental demand from multiple distinct commuter pools simultaneously — supporting strong occupancy and ADU rents of $1,350–$1,900/month at accessible construction price points." },
  { eventKey: "4", question: "Do ADU zoning rules differ between Montgomery County and Prince George's County in Laurel?", answer: "Yes. Montgomery County and Prince George&apos;s County have separate ADU ordinances with potentially different lot size minimums, ADU size limits, setback requirements, and owner-occupancy rules. DMV-GC Group confirms the specific zoning rules of the applicable county for every Laurel ADU project before any design is finalized — ensuring the ADU is designed to the correct standards from the start." },
  { eventKey: "5", question: "Is DMV-GC Group licensed for ADU construction in Laurel, MD?", answer: "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Laurel regardless of which of the three jurisdictions governs the property. We employ licensed plumbers and electricians in-house, are fully bonded, carry comprehensive general liability insurance and workers&apos; compensation coverage, and provide a 1-year workmanship warranty on every ADU project in Laurel." }
];

export default function ADULaurelMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => { setActiveMenuItem("service"); }, []);
  return (
    <main>
      <div className="city-service-detail-page adu-laurel-md">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/services">Services</Link><span>›</span>
            <Link href="/service/adu">ADU Construction</Link><span>›</span>
            Laurel, MD
          </nav>

          <div className="hero">
            <div className="hero-location-tag">📍 Serving Laurel, MD</div>
            <h1>ADU Construction in Laurel, MD — Accessory Dwelling Unit Contractor</h1>
            <div className="hero-meta">
              <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
              <span className="badge">✓ MHIC Licensed &amp; Insured</span>
              <span className="badge">✓ All 3 Jurisdictions Handled</span>
              <span className="badge">✓ Free In-Home Consultation</span>
              <span className="badge dark">📞 +1 240-730-1292</span>
            </div>
          </div>

          <div className="jurisdiction-banner">
            <div className="icon">🏛️</div>
            <div>
              <h3>Laurel Has Three Different ADU Permit Jurisdictions — The Most Complex in the Campaign</h3>
              <p>Laurel sits at the junction of three separate permit authorities — the City of Laurel (incorporated municipality with its own permit office at 8103 Sandy Spring Road), unincorporated Montgomery County (governed by Montgomery County DPS), and unincorporated Prince George&apos;s County (governed by PG County DPS). Your mailing address alone does not determine which authority governs your ADU project — your parcel&apos;s location within or outside the city limits, and on which county&apos;s side of the border, determines it. Filing an ADU permit with the wrong authority means invalid permits, uninspected work, and no Certificate of Occupancy. DMV-GC Group verifies the correct permit jurisdiction for every Laurel address using parcel boundary data before any design or application work begins.</p>
            </div>
          </div>

          <div className="intro-box">
            Planning to build an <strong>ADU in Laurel, MD</strong>? Laurel occupies a unique position in the DMV area — a community straddling the Montgomery County and Prince George&apos;s County line, split further by the incorporated City of Laurel, all along the I-95 and MARC rail corridor that connects Washington and Baltimore. This three-jurisdiction complexity requires a contractor who knows how to navigate all three permit systems. And Laurel&apos;s ADU rental market is among the most compelling in the campaign — driven by MARC Penn and Camden Line access to both cities, I-95 corridor employment, and home prices that allow ADU investment costs to represent a meaningful share of total property value. DMV-GC Group handles all three jurisdictions and manages the complete ADU process from design through Certificate of Occupancy.
          </div>

          <div className="trust-bar">
            <div className="trust-item">
              <div className="icon">🏛️</div>
              <strong>3 Jurisdictions</strong>
              <span>City · MoCo · PG County — all managed</span>
            </div>
            <div className="trust-item">
              <div className="icon">🚂</div>
              <strong>MARC Rail Market</strong>
              <span>DC + Baltimore dual-city rental demand</span>
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

          <h2>Types of ADUs We Build in Laurel, MD</h2>
          <p>
            Laurel&apos;s housing stock spans a wide range — from 1960s–80s split-levels and colonials in West Laurel and Montpelier to 1950s–70s ranches and Capes in older City of Laurel neighborhoods to newer townhome construction in Laurel Lakes and Russett. Each presents different ADU opportunities:
          </p>

          <div className="adu-type-grid">
            <div className="adu-type-card">
              <span className="adu-tag">Most Practical Across All Laurel</span>
              <h3>Basement ADU Conversion</h3>
              <p>Laurel&apos;s single-family homes across all three jurisdictions have basements well-suited to ADU conversion. Split-levels in West Laurel and Montpelier offer the same natural light and ceiling height advantages seen in Silver Spring and Wheaton. Full below-grade basements in older City of Laurel colonials and Cape Cods provide 600–900 sq ft of potential ADU space. Includes egress windows, separate entrance, kitchen, bathroom, fire separation, and COO from whichever authority governs your parcel — City, MoCo, or PGC.</p>
              <div className="adu-cost">Typical Cost: $58,000 – $112,000</div>
            </div>
            <div className="adu-type-card">
              <span className="adu-tag">Split-Level Advantage</span>
              <h3>Split-Level Lower-Level ADU</h3>
              <p>West Laurel and Montpelier — both in unincorporated Montgomery County — have a significant concentration of 1960s–80s split-level homes. The partially above-grade lower level offers natural light from side windows, ceiling heights of 7&apos;4&quot;–8&apos;2&quot;, and often an existing side entrance — making split-level ADU conversions the fastest and most cost-effective path for these properties. Many also have existing lower-level plumbing rough-ins that reduce bathroom addition costs. DMV-GC Group checks for rough-ins during every West Laurel and Montpelier consultation.</p>
              <div className="adu-cost">Typical Cost: $55,000 – $105,000</div>
            </div>
            <div className="adu-type-card">
              <span className="adu-tag">Where Garage Exists</span>
              <h3>Garage Conversion ADU</h3>
              <p>Where a detached or attached garage exists — common in older City of Laurel neighborhoods and some Montpelier properties — conversion to an ADU is often a fast, cost-effective path. Includes insulation, HVAC, plumbing, egress, interior finishes, kitchen, and bathroom — all with the correct jurisdiction&apos;s permits and Certificate of Occupancy. Feasibility depends on garage size, ceiling height, and utility connection distance from the main house.</p>
              <div className="adu-cost">Typical Cost: $55,000 – $105,000</div>
            </div>
            <div className="adu-type-card">
              <span className="adu-tag">For Larger Lots</span>
              <h3>Attached In-Law Suite Addition</h3>
              <p>A new addition with separate entrance, bedroom, bathroom, and kitchen. Most feasible on larger parcels in Laurel Pines, Montpelier, and some West Laurel areas where rear yard depth is sufficient after setbacks. PG County and MoCo setback requirements vary — DMV-GC Group confirms rear yard feasibility for your specific parcel&apos;s jurisdiction during the free consultation before any addition is designed.</p>
              <div className="adu-cost">Typical Cost: $92,000 – $190,000</div>
            </div>
          </div>

          <div className="author-box">
            <div className="author-avatar">🏠</div>
            <div className="author-info">
              <h4>About DMV-GC Group — Laurel&apos;s Licensed ADU Construction Contractor</h4>
              <p>DMV-GC Group has completed basement renovations, ADU conversions, and kitchen and bathroom remodels throughout Laurel&apos;s neighborhoods across all three jurisdictions. We understand the City of Laurel permit process at 8103 Sandy Spring Road, the Montgomery County DPS process for West Laurel and Montpelier, and the Prince George&apos;s County DPS process for Laurel Lakes, Russett, and east Laurel neighborhoods. We hold a Maryland MHIC license and back every project with a 1-year workmanship warranty.</p>
              <div className="author-creds">
                <span className="cred">MHIC Licensed</span>
                <span className="cred">City + MoCo + PGC Permits</span>
                <span className="cred">Licensed Plumbers</span>
                <span className="cred">Licensed Electricians</span>
                <span className="cred">4.9★ Rated</span>
                <span className="cred">1-Year Warranty</span>
              </div>
            </div>
          </div>

          <h2>Laurel&apos;s Three ADU Permit Jurisdictions — The Most Complex in the Campaign</h2>
          <p>
            No other community in the DMV-GC Group campaign has three separate ADU permit authorities. Laurel&apos;s position at the intersection of the City of Laurel, Montgomery County, and Prince George&apos;s County creates a permit landscape that requires explicit parcel-level jurisdiction verification before any ADU project can begin.
          </p>

          <div className="jurisdiction-grid">
            <div className="jurisdiction-card city">
              <h3>🏛️ City of Laurel</h3>
              <div className="permit-source">City Permits</div>
              <ul>
                <li>Permit authority: City of Laurel Dept. of Public Works, 8103 Sandy Spring Road</li>
                <li>Covers: Properties within incorporated city limits</li>
                <li>Neighborhoods typically in City: Historic Laurel town center, Main Street corridor, older established residential areas north and south of downtown</li>
                <li>City has own plan review and inspection staff</li>
                <li>City ADU rules must comply with whichever county&apos;s zoning (MoCo or PGC) the property falls under for zoning purposes</li>
                <li>COO issued by City after final inspection</li>
              </ul>
            </div>
            <div className="jurisdiction-card moco">
              <h3>📋 Montgomery County</h3>
              <div className="permit-source">MoCo DPS Permits</div>
              <ul>
                <li>Permit authority: Montgomery County DPS</li>
                <li>Covers: Unincorporated MoCo portions of Laurel area</li>
                <li>Neighborhoods typically in MoCo: West Laurel, Montpelier, parts of Laurel Pines</li>
                <li>Montgomery County ADU ordinance governs zoning requirements</li>
                <li>MoCo COO required before ADU occupancy</li>
                <li>Same MoCo permit process as Wheaton, Silver Spring, Gaithersburg</li>
              </ul>
            </div>
            <div className="jurisdiction-card pgco">
              <h3>📋 Prince George&apos;s County</h3>
              <div className="permit-source">PGC DPS Permits</div>
              <ul>
                <li>Permit authority: Prince George&apos;s County DPS</li>
                <li>Covers: Unincorporated PG County portions of Laurel area</li>
                <li>Neighborhoods typically in PGC: Laurel Lakes, Russett, parts of Snowden River Pkwy area</li>
                <li>Prince George&apos;s County ADU ordinance governs zoning requirements</li>
                <li>PGC COO required before ADU occupancy</li>
                <li>PGC ADU rules may differ from Montgomery County&apos;s — DMV-GC Group confirms applicable rules for each PGC property</li>
              </ul>
            </div>
          </div>

          <div className="warning">
            ⚠️ <strong>Campaign&apos;s Most Complex Jurisdiction:</strong> Laurel is the only community in the DMV-GC Group campaign with three separate permit authorities. A contractor who files with the wrong authority produces invalid permits and no valid COO — regardless of how good the construction is. DMV-GC Group verifies the correct jurisdiction for every Laurel address using parcel boundary data before filing anything. This verification is free, takes less than one business day, and is the most important step in any Laurel ADU project.
          </div>

          <h2>MARC Rail &amp; I-95 Corridor — Laurel&apos;s Unique Dual-City ADU Rental Market</h2>
          <p>
            Laurel&apos;s rental market is defined by a position that no other community in the campaign occupies: practical transit and highway access to <em>both</em> Washington DC and Baltimore. This dual-city reach creates rental demand from commuters to both metro areas simultaneously — expanding the potential tenant pool well beyond what single-city communities can offer.
          </p>

          <div className="marc-grid">
            <div className="marc-box">
              <div className="icon">🚂</div>
              <h3>MARC Penn Line</h3>
              <p>Muirkirk station (Penn Line) provides service to Washington Union Station and Baltimore Penn Station. Direct access to both downtown employment corridors — the most direct expression of Laurel&apos;s dual-city advantage. Commuters to either city can live in Laurel on one train line.</p>
            </div>
            <div className="marc-box">
              <div className="icon">🚉</div>
              <h3>MARC Camden Line</h3>
              <p>Laurel station (Camden Line) provides additional MARC service to Washington Union Station via the CSX corridor. Two MARC lines serving Laurel gives renters multiple schedule options — a meaningful practical advantage for daily commuters.</p>
            </div>
            <div className="marc-box">
              <div className="icon">🛣️</div>
              <h3>I-95 / I-295 / BW Pkwy</h3>
              <p>Laurel&apos;s position at the I-95 / MD-32 interchange gives auto commuters direct access to DC (via I-95/I-295 south), Baltimore (via I-95 north), Fort Meade/NSA (via MD-32), and the entire BW Corridor employment spine — the broadest highway access of any community in the campaign.</p>
            </div>
          </div>

          <div className="spec-box">
            <h3>🏢 Employment Demand Drivers for Laurel ADU Rentals</h3>
            <ul>
              <li><strong>Fort Meade / NSA:</strong> The National Security Agency and Fort Meade military installation — directly accessible via MD-32 from Laurel — employ tens of thousands of workers, many of whom seek rental housing within reasonable commuting distance. NSA and defense contractor employees are among the most stable, high-income tenant pools in the region.</li>
              <li><strong>BW Corridor tech employers:</strong> The Baltimore-Washington technology corridor along I-95 and MD-295 includes major employers in Annapolis Junction, Columbia, and Hanover — all within practical commuting distance from Laurel. Federal contractors, cybersecurity firms, and defense technology companies in this corridor drive demand for quality rental housing.</li>
              <li><strong>Washington DC federal employment:</strong> MARC Penn and Camden Line service to Union Station gives Laurel renters a one-seat ride to DC&apos;s federal employment core — accessible to the broad federal government workforce without the premium rents of closer-in Maryland communities.</li>
              <li><strong>Baltimore employment:</strong> MARC service to Baltimore Penn Station gives Laurel access to Baltimore&apos;s Johns Hopkins University, University of Maryland Medical System, and downtown Baltimore employers — a renter pool that Silver Spring and Wheaton cannot reach as efficiently.</li>
              <li><strong>University of Maryland:</strong> The College Park campus of the University of Maryland is approximately 10 miles from central Laurel — within practical commuting distance for graduate students and faculty seeking more affordable rental options than closer-in College Park.</li>
            </ul>
          </div>

          <h2>Benefits of Building an ADU in Laurel</h2>

          <div className="benefit-grid">
            <div className="benefit-box">
              <div className="icon">💰</div>
              <strong>Strong Rental Income</strong>
              <span>$1,350–$1,900/month for quality basement and split-level ADUs — driven by MARC rail and I-95 corridor dual-city demand</span>
            </div>
            <div className="benefit-box">
              <div className="icon">📈</div>
              <strong>Property Value Addition</strong>
              <span>A permitted ADU adds $75,000–$125,000 to Laurel property values — strong proportional return given Laurel&apos;s accessible base home prices</span>
            </div>
            <div className="benefit-box">
              <div className="icon">🚂</div>
              <strong>Dual-City MARC Access</strong>
              <span>Washington DC and Baltimore both reachable by MARC rail — the only community in the campaign with this dual-city transit advantage</span>
            </div>
            <div className="benefit-box">
              <div className="icon">🏢</div>
              <strong>Fort Meade / NSA Proximity</strong>
              <span>NSA and Fort Meade employment base via MD-32 — the most stable, high-income tenant pool in the Laurel rental market</span>
            </div>
            <div className="benefit-box">
              <div className="icon">💵</div>
              <strong>Best ADU ROI Ratio</strong>
              <span>Laurel&apos;s accessible construction costs relative to rental income produce some of the strongest ROI ratios in the campaign — payback in approximately 4–5 years</span>
            </div>
            <div className="benefit-box">
              <div className="icon">👨‍👩‍👧</div>
              <strong>Multigenerational Living</strong>
              <span>In-law suites and basement ADUs give Laurel&apos;s established family communities a path to multigenerational living without relocation</span>
            </div>
          </div>

          <h2>Serving All Laurel, MD Neighborhoods for ADU Construction</h2>

          <div className="neighborhood-grid">
            <div className="neighborhood-card">
              <h3>West Laurel</h3>
              <div className="juris-tag moco">MoCo Permits</div>
              <p>Established 1970s–80s single-family neighborhood in unincorporated Montgomery County — split-levels and colonials on generous lots. Split-level lower-level ADU conversions are the dominant type here — natural light, code ceiling heights, and often existing side entrances reduce complexity and cost. Montgomery County DPS permits. Close to Montpelier and accessible to MD-29 and I-95.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Montpelier</h3>
              <div className="juris-tag moco">MoCo Permits</div>
              <p>Established planned community in unincorporated Montgomery County with 1970s–80s single-family homes on larger lots. Full basements and split-levels both present — good ADU feasibility across both types. Some Montpelier homes have Montpelier Community Association governance — HOA coordination may be required for exterior modifications. Montgomery County DPS permits.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Historic Laurel / Main Street Area</h3>
              <div className="juris-tag city">City Permits</div>
              <p>Older established neighborhoods within the City of Laurel limits around the historic Main Street corridor. Mix of early-to-mid 20th century construction — some homes may have older systems requiring assessment. City of Laurel permits at 8103 Sandy Spring Road. Walking distance to Laurel MARC station (Camden Line).</p>
            </div>
            <div className="neighborhood-card">
              <h3>Laurel Lakes / Russett</h3>
              <div className="juris-tag pgco">PGC Permits</div>
              <p>Planned communities in unincorporated Prince George&apos;s County east of I-95. Mix of townhomes and single-family homes from the 1980s–2000s. PGC DPS permits — different from both City and MoCo. Some communities have active HOAs with design review. Proximity to I-95 and Muirkirk MARC station supports strong rental demand.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Laurel Pines</h3>
              <div className="juris-tag moco">Verify Jurisdiction</div>
              <p>Established single-family neighborhood — jurisdiction should be verified by parcel, as the MoCo/PGC border runs through this area. Some Laurel Pines addresses are MoCo; others are PGC. Full basements and generous lots support ADU feasibility. DMV-GC Group verifies the specific jurisdiction for every Laurel Pines address before any permit work begins.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Snowden River Pkwy Area</h3>
              <div className="juris-tag pgco">PGC Permits</div>
              <p>Mixed residential and commercial corridor in Prince George&apos;s County along Snowden River Parkway. Residential areas here are newer construction with good basement configurations — often higher ceilings and poured concrete foundations. PGC DPS permits. Strong access to MD-32 and Fort Meade/NSA employment corridor.</p>
            </div>
          </div>

          <h2>Our ADU Construction Process in Laurel</h2>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Free In-Home Consultation &amp; Feasibility Assessment</h3>
                <p>We visit your Laurel home and assess all ADU options — split-level or basement configuration, ceiling heights, existing entrance and rough-in presence, garage feasibility, lot size for addition. For Montpelier homes, we note any HOA requirements. No cost, no obligation.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Jurisdiction Verification — City, MoCo, or PGC</h3>
                <p>We confirm which of the three permit authorities governs your specific Laurel parcel using parcel boundary data — City of Laurel, Montgomery County DPS, or Prince George&apos;s County DPS. This is the single most important step in any Laurel ADU project and eliminates the most costly permitting mistake in this community. Free, less than one business day.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>ADU Zoning Rules Confirmation</h3>
                <p>ADU zoning rules differ between Montgomery County and Prince George&apos;s County — lot size minimums, ADU size limits, setback requirements, and owner-occupancy rules are each confirmed for the specific county&apos;s ordinance that governs your parcel before any design is finalized.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>ADU Design Development</h3>
                <p>Floor plan, egress layout, separate entrance design, kitchen and bathroom configuration — designed within the confirmed constraints of your Laurel home and your parcel&apos;s specific zoning rules. For split-levels, we check for existing rough-ins and incorporate them into the bathroom design where present.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">5</div>
              <div className="step-content">
                <h3>Permit Filing with Correct Authority</h3>
                <p>We file all required permits with the correct authority — City of Laurel, Montgomery County DPS, or Prince George&apos;s County DPS — and manage all correspondence with that authority throughout the project. Each has a different application format, plan review timeline, and inspection schedule. Our permit team handles all three.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">6</div>
              <div className="step-content">
                <h3>Construction — Egress, Mechanicals &amp; Finishes</h3>
                <p>Egress window installation where needed, then electrical, plumbing, HVAC, framing, drywall, flooring, kitchen, bathroom, and all finish work — coordinated by a dedicated project manager and inspected at each required stage by the correct permit authority.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">7</div>
              <div className="step-content">
                <h3>Inspections, COO &amp; 1-Year Warranty</h3>
                <p>We manage all required inspections with the correct authority and the Certificate of Occupancy process — from the City of Laurel, MoCo, or PGC depending on jurisdiction. After COO issuance, we conduct a final walkthrough, address every punch list item, and activate your 1-year workmanship warranty.</p>
              </div>
            </div>
          </div>

          <h2>ADU Construction Cost in Laurel, MD</h2>
          <p>
            Here is a realistic cost breakdown for <strong>ADU construction in Laurel, Maryland</strong>. Laurel&apos;s accessible price points — combined with the strongest dual-city rental demand in the campaign — produce some of the best ADU ROI ratios in the entire DMV area:
          </p>

          <table className="cost-table">
            <tbody>
              <tr>
                <th>ADU Type</th>
                <th>Typical Cost Range</th>
                <th>Notes for Laurel</th>
              </tr>
              <tr>
                <td>Split-Level Lower-Level ADU (West Laurel / Montpelier)</td>
                <td>$55,000 – $105,000</td>
                <td>Most cost-effective Laurel option. Natural light, ceiling height, and often existing entrance reduce complexity. Rough-in completion saves $5K–$10K where present. MoCo permits.</td>
              </tr>
              <tr>
                <td>Basement ADU — City of Laurel Neighborhoods</td>
                <td>$58,000 – $112,000</td>
                <td>Full scope: egress, entrance, kitchen, bathroom, fire separation, City COO. Older construction may need systems assessment. City of Laurel permits at 8103 Sandy Spring Road.</td>
              </tr>
              <tr>
                <td>Basement ADU — PG County (Laurel Lakes / Russett)</td>
                <td>$60,000 – $112,000</td>
                <td>Newer 1980s–2000s construction — often good ceiling heights and poured concrete. PGC DPS permits and COO. PGC ADU zoning rules confirmed before design.</td>
              </tr>
              <tr>
                <td>Garage Conversion ADU</td>
                <td>$55,000 – $105,000</td>
                <td>Feasibility depends on garage size, ceiling height, and utility distance. Jurisdiction-specific permits from whichever of the three authorities governs the property.</td>
              </tr>
              <tr>
                <td>Attached In-Law Suite Addition</td>
                <td>$92,000 – $190,000</td>
                <td>Setback requirements vary by county (MoCo vs PGC) — confirmed during consultation. Most common on Laurel Pines and Montpelier lots with sufficient rear yard depth.</td>
              </tr>
              <tr>
                <td>Separate Electrical Meter (BGE or Pepco)</td>
                <td>$2,000 – $4,500</td>
                <td>Utility provider varies by part of Laurel — BGE serves most of Laurel, Pepco serves some western areas. DMV-GC Group coordinates the correct utility for each project.</td>
              </tr>
            </tbody>
          </table>

          <div className="tip">
            💡 <strong>Laurel ADU ROI — Dual-City Advantage:</strong> A split-level ADU in West Laurel at $60,000–$80,000 renting to an NSA contractor or MARC commuter at $1,500–$1,700/month reaches full payback in approximately 4–5 years in rental income — and adds $80,000–$110,000 to appraised value at COO issuance. No other community in the campaign offers the combination of accessible ADU construction cost, dual-city MARC commuter access, and Fort Meade/NSA employment proximity that makes Laurel&apos;s ADU investment case so compelling. The proportional ROI here — investment relative to rental income — is among the strongest in the entire campaign.
          </div>

          <div className="cta-banner">
            <h2>Get a Free ADU Consultation in Laurel</h2>
            <p>We&apos;ll visit your Laurel home, verify your permit jurisdiction (City / MoCo / PGC), assess your basement or split-level for ADU feasibility, and give you a realistic estimate. No cost, no obligation.</p>
            <Link href="/contact-us" className="cta-btn">Schedule Free ADU Consultation</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
          </div>

          <h2>What Laurel Homeowners Say About DMV-GC Group</h2>

          <div className="review-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our West Laurel split-level had a side entrance on the lower level and a half-bath rough-in. DMV-GC Group verified we needed MoCo permits, completed the rough-in as part of the ADU bathroom, and converted the lower level to a legal ADU. Our NSA contractor tenant pays $1,650/month and hasn&apos;t missed a payment.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">West Laurel, MD (MoCo)</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Three contractors didn&apos;t know that our Russett address uses PG County permits, not City of Laurel. DMV-GC Group identified it immediately, filed with PGC DPS, and we had zero permit delays. The basement ADU got its COO on the first final inspection. MARC commuter is renting it now at $1,500/month.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Russett, Laurel MD (PGC)</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our City of Laurel home near Main Street had older construction. DMV-GC Group assessed the basement, handled the City permit process at Sandy Spring Road, and converted it to a one-bedroom ADU. Our MARC Camden Line commuter tenant leaves for Union Station every morning. Rental income covers our mortgage.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Historic Laurel, MD (City Permits)</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our Laurel Pines home was on the MoCo/PGC border — we weren&apos;t sure which county we were in. DMV-GC Group looked up our parcel and confirmed it was Montgomery County. Filed with MoCo DPS. Everything clean. That jurisdiction knowledge saved us from a potential mess. The ADU is rented and generating income.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Laurel Pines, MD (MoCo)</span></div>
            </div>
          </div>

          <div className="highlight">
            <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Laurel homeowners trust DMV-GC Group for ADU projects that navigate the three-jurisdiction permit complexity correctly — filing with City of Laurel, Montgomery County DPS, or Prince George&apos;s County DPS based on where your parcel actually sits — and delivering legal, rentable units that capitalize on the MARC rail and I-95 corridor&apos;s dual-city rental demand.</p>
          </div>

          <h2>Serving All Laurel, MD Neighborhoods for ADU Construction</h2>

          <div className="areas-grid">
            <span className="area-pill">West Laurel (MoCo)</span>
            <span className="area-pill">Montpelier (MoCo)</span>
            <span className="area-pill">Historic Laurel (City)</span>
            <span className="area-pill">Laurel Lakes (PGC)</span>
            <span className="area-pill">Russett (PGC)</span>
            <span className="area-pill">Laurel Pines</span>
            <span className="area-pill">Snowden River Pkwy (PGC)</span>
            <span className="area-pill">Savage</span>
            <span className="area-pill">Jessup</span>
            <span className="area-pill">Beltsville</span>
          </div>

          <div className="nearby-box">
            <h3>Jurisdiction note for Savage and Jessup addresses</h3>
            <p>Properties in Savage and Jessup with Laurel mailing addresses are typically in unincorporated Howard County or Prince George&apos;s County — outside City of Laurel and outside Montgomery County. DMV-GC Group verifies the specific jurisdiction for every address in the broader Laurel area before any permit work begins. <Link href="/service/adu">View our full ADU construction service page &rarr;</Link></p>
          </div>

          <h2>Frequently Asked Questions — ADU Construction in Laurel, MD</h2>
          <Accordion defaultActiveKey="0" flush>
            {faqData.map((faq) => (
              <Accordion.Item eventKey={faq.eventKey} key={faq.eventKey}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="internal-links">
            <h2>Explore Our Other Services in Laurel</h2>
            <ul>
              <li><Link href="/service/kitchen-remodeling/laurel-md">Kitchen Remodeling in Laurel, MD</Link></li>
              <li><Link href="/service/bathroom-remodeling">Bathroom Remodeling in Laurel, MD</Link></li>
              <li><Link href="/service/basement-remodeling/laurel-md">Basement Remodeling in Laurel, MD</Link></li>
              <li><Link href="/service/home-additions">Home Additions in Laurel, MD</Link></li>
              <li><Link href="/service/flooring-remodeling">Flooring Installation in Laurel, MD</Link></li>
              <li><Link href="/service/design-build">Design-Build Contractor in Laurel, MD</Link></li>
            </ul>
          </div>

          <div className="cta-banner">
            <h2>Ready to Build Your Laurel ADU?</h2>
            <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. We&apos;ll verify your jurisdiction — City, MoCo, or PGC — assess your ADU options, and design the investment that takes full advantage of Laurel&apos;s dual-city rental market.</p>
            <Link href="/contact-us" className="cta-btn">Get Free ADU Consultation in Laurel &rarr;</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
          </div>

        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
    </main>
  );
}
