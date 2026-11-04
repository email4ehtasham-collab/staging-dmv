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
      "description": "Licensed deck builder serving Gaithersburg, MD. Custom deck construction across all Gaithersburg neighborhoods — Kentlands, Lakelands, Crown Farm, Washingtonian Woods, and beyond — with City of Gaithersburg and Montgomery County DPS permit expertise and full HOA ARC coordination.",
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
        { "@type": "City", "name": "Gaithersburg", "sameAs": "https://en.wikipedia.org/wiki/Gaithersburg,_Maryland" },
        { "@type": "City", "name": "Rockville" },
        { "@type": "City", "name": "North Bethesda" },
        { "@type": "City", "name": "Germantown" },
        { "@type": "City", "name": "Potomac" }
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "MHIC License", "credentialCategory": "Maryland Home Improvement Contractor License" }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "97", "bestRating": "5" },
      "priceRange": "$$$"
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/decks/gaithersburg-md#service",
      "serviceType": "Deck Building",
      "name": "Deck Building in Gaithersburg, MD",
      "alternateName": ["Custom Deck Construction", "Composite Deck", "Kentlands Deck", "HOA Deck", "Rear Yard Deck"],
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Gaithersburg", "sameAs": "https://en.wikipedia.org/wiki/Gaithersburg,_Maryland" },
      "description": "Full-service deck design and construction in Gaithersburg, MD. Custom composite decks, multi-level decks, and outdoor living builds across all Gaithersburg neighborhoods — with City of Gaithersburg DPW and Montgomery County DPS permit expertise, and Kentlands, Lakelands, Crown Farm, and Washingtonian Woods HOA ARC coordination.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "18000", "maxPrice": "95000", "priceCurrency": "USD" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Decks", "item": "https://www.dmv-gc.com/service/decks" },
        { "@type": "ListItem", "position": 4, "name": "Gaithersburg, MD", "item": "https://www.dmv-gc.com/service/decks/gaithersburg-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to build a deck in Gaithersburg, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deck construction in Gaithersburg, MD typically costs between $18,000 and $95,000 depending on size, material, features, and neighborhood. A pressure-treated rear deck runs $18,000–$30,000. A composite deck costs $28,000–$56,000. A composite deck with pergola and built-in features costs $48,000–$82,000. A full outdoor living build with kitchen and pergola can reach $70,000–$95,000. HOA ARC approval — required in Kentlands, Lakelands, Crown Farm, and Washingtonian Woods — adds timeline but not significant cost. DMV-GC Group provides free in-home consultations with detailed estimates."
          }
        },
        {
          "@type": "Question",
          "name": "Does the City of Gaithersburg have its own deck permit process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The City of Gaithersburg is an incorporated municipality with its own Department of Public Works that issues building permits — separate from Montgomery County DPS. Properties within the City of Gaithersburg's incorporated limits file deck permits with the City DPW, not with Montgomery County. Properties in the unincorporated portions of the Gaithersburg area — Crown Farm, and other areas outside the city limits — file with Montgomery County DPS. Kentlands and Lakelands are within the City of Gaithersburg and file with the City. DMV-GC Group verifies the correct permit authority for every Gaithersburg address before any application is filed."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group handle Kentlands and Lakelands HOA ARC approval for deck projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Kentlands and Lakelands both have active Homeowners Associations with Architectural Review Committees that must approve exterior modifications — including deck construction — before permits are filed. DMV-GC Group prepares all required ARC documentation for Kentlands and Lakelands deck projects: site plan, elevation drawings, material and color specifications. We manage the ARC submission and review process in-house and design decks to ARC standards from the first draft to minimize revision requests."
          }
        },
        {
          "@type": "Question",
          "name": "What deck materials are best for Gaithersburg homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For most Gaithersburg properties, composite decking — Trex, TimberTech, or Azek — is the most popular choice, delivering low maintenance and 25–30 year lifespan. For Kentlands and Lakelands homes where the ARC specifies material or color restrictions, DMV-GC Group works within the ARC's palette while selecting the best composite product available within those parameters. Pressure-treated wood is the most cost-effective entry-level option for homeowners prioritizing budget. Cedar is a mid-range natural wood option for homeowners who want natural wood appearance with moderate maintenance."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for deck building in Gaithersburg, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Gaithersburg. We handle City of Gaithersburg DPW permits for properties within the city limits and Montgomery County DPS permits for unincorporated areas. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every deck project in Gaithersburg."
          }
        }
      ]
    }
  ]
};

const faqData = [
  { eventKey: "0", question: "How much does it cost to build a deck in Gaithersburg, MD?", answer: "Deck construction in Gaithersburg typically costs $18,000–$95,000 depending on neighborhood, size, material, and features. A pressure-treated deck in older city neighborhoods runs $18,000–$30,000. A composite deck in Kentlands or Lakelands costs $28,000–$52,000. A larger Crown Farm composite deck runs $36,000–$62,000. A multi-level deck with stairs costs $48,000–$80,000. A full outdoor living build with kitchen and pergola runs $65,000–$95,000. HOA ARC coordination and City or County permit filing are included in every project scope. DMV-GC Group provides free in-home consultations with detailed estimates." },
  { eventKey: "1", question: "Does the City of Gaithersburg have its own permit process for decks?", answer: "Yes. Properties within the incorporated City of Gaithersburg — including Kentlands and Lakelands — file deck permits with the City's Department of Public Works, not Montgomery County DPS. Crown Farm, being outside the city limits, uses Montgomery County DPS. DMV-GC Group verifies the correct jurisdiction for every Gaithersburg address before any permit application is filed." },
  { eventKey: "2", question: "Does Kentlands HOA need to approve my deck before permits are filed?", answer: "Yes. Kentlands HOA's Architectural Review Committee must approve the deck design before the City of Gaithersburg building permit is filed. The ARC reviews deck size, material, color, placement, and compatibility with the home's and community's architectural character. DMV-GC Group prepares all required ARC documentation — site plan, elevation drawings, material specifications, color samples — and manages the complete review process. We design Kentlands decks to ARC standards from the first draft to minimize revision requests." },
  { eventKey: "3", question: "Does Crown Farm use City of Gaithersburg or Montgomery County permits?", answer: "Crown Farm uses Montgomery County DPS permits — it is located outside the incorporated City of Gaithersburg limits. However, Crown Farm also has its own HOA with ARC review that must approve exterior modifications including decks before the MoCo permit is filed. DMV-GC Group manages both the Crown Farm ARC submission and the Montgomery County DPS permit application — often running simultaneously to minimize total timeline." },
  { eventKey: "4", question: "Is DMV-GC Group licensed for deck building in Gaithersburg, MD?", answer: "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Gaithersburg. We handle City of Gaithersburg DPW permits for properties within the city limits and Montgomery County DPS permits for unincorporated areas. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every deck project in Gaithersburg." }
];

export default function DecksGaithersburgMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => { setActiveMenuItem("service"); }, []);
  return (
    <main>
      <div className="city-service-detail-page decks-gaithersburg-md">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/services">Services</Link><span>›</span>
            <Link href="/service/decks">Deck Building</Link><span>›</span>
            Gaithersburg, MD
          </nav>

          <div className="hero">
            <div className="hero-location-tag">📍 Serving Gaithersburg, MD</div>
            <h1>Deck Building in Gaithersburg, MD — Custom Deck Contractor for Kentlands, Crown Farm &amp; All Neighborhoods</h1>
            <div className="hero-meta">
              <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
              <span className="badge">✓ MHIC Licensed &amp; Insured</span>
              <span className="badge">✓ City &amp; MoCo Permits Handled</span>
              <span className="badge">✓ Kentlands &amp; Lakelands HOA</span>
              <span className="badge dark">📞 +1 240-730-1292</span>
            </div>
          </div>

          <div className="permit-banner">
            <div className="icon">🏛️</div>
            <div>
              <h3>Gaithersburg Has Two Permit Authorities — and Many Neighborhoods Also Require HOA Approval Before Permits Are Filed</h3>
              <p>Gaithersburg is a mosaic of permit jurisdictions and HOA governance structures that most deck contractors in the area do not fully understand. Properties within the incorporated City of Gaithersburg — including Kentlands and Lakelands — file deck permits with the City&apos;s own Department of Public Works. Properties in unincorporated portions of the Gaithersburg area — including Crown Farm — file with Montgomery County DPS. Then, independently of which government issues the permit, many Gaithersburg communities also require HOA Architectural Review Committee approval before any permit is filed — Kentlands, Lakelands, Crown Farm, and Washingtonian Woods all have active ARC processes. Filing with the wrong permit authority, or skipping HOA approval, can invalidate the entire permit and result in required removal. DMV-GC Group verifies jurisdiction and HOA requirements for every Gaithersburg address before any work begins.</p>
            </div>
          </div>

          <div className="intro-box">
            Looking for a trusted <strong>deck contractor in Gaithersburg, MD</strong>? Gaithersburg&apos;s mix of planned new urbanist communities like Kentlands and Lakelands, master-planned developments like Crown Farm, and established older neighborhoods throughout the city creates one of Montgomery County&apos;s most varied deck markets. Each community has different housing styles, lot sizes, permit requirements, and HOA processes — and the contractor who builds your Kentlands deck needs to know all of them. DMV-GC Group handles the complete Gaithersburg deck process in-house: design, City or County permit filing, HOA ARC documentation, construction, and inspection — under one contract.
          </div>

          <div className="trust-bar">
            <div className="trust-item">
              <div className="icon">🏛️</div>
              <strong>Both Permit Authorities</strong>
              <span>City of Gaithersburg + MoCo DPS</span>
            </div>
            <div className="trust-item">
              <div className="icon">📋</div>
              <strong>HOA ARC Coordination</strong>
              <span>Kentlands · Lakelands · Crown Farm</span>
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

          <h2>Deck Building Services in Gaithersburg, MD</h2>

          <div className="service-grid">
            <div className="service-item">Custom Deck Design &amp; Build (All Neighborhoods)</div>
            <div className="service-item">Composite Deck (Trex / TimberTech / Azek)</div>
            <div className="service-item">Pressure-Treated &amp; Cedar Deck</div>
            <div className="service-item">Multi-Level Deck with Stairs</div>
            <div className="service-item">Pergola &amp; Covered Deck Structure</div>
            <div className="service-item">Outdoor Kitchen &amp; Grill Station</div>
            <div className="service-item">Cable &amp; Wood Railing Systems</div>
            <div className="service-item">Built-In Seating &amp; Planter Boxes</div>
            <div className="service-item">Deck Lighting Systems</div>
            <div className="service-item">Deck Replacement &amp; Structural Rebuild</div>
            <div className="service-item">City of Gaithersburg DPW Permit Filing</div>
            <div className="service-item">Montgomery County DPS Permit Filing</div>
            <div className="service-item">Kentlands &amp; Lakelands HOA ARC Documentation</div>
            <div className="service-item">Crown Farm &amp; Washingtonian Woods HOA Coordination</div>
          </div>

          <div className="author-box">
            <div className="author-avatar">🏠</div>
            <div className="author-info">
              <h4>About DMV-GC Group — Gaithersburg&apos;s Licensed Custom Deck Contractor</h4>
              <p>DMV-GC Group is based in nearby North Bethesda and has completed deck builds, kitchen remodels, bathroom renovations, and ADU conversions throughout Gaithersburg&apos;s neighborhoods — Kentlands, Lakelands, Crown Farm, Washingtonian Woods, and older city neighborhoods. We understand the City of Gaithersburg DPW permit process, the Montgomery County DPS process for unincorporated areas, and the specific HOA ARC standards of Kentlands and Lakelands — where design compatibility with the community&apos;s new urbanist aesthetic matters to the review committee. We hold a Maryland MHIC license and back every project with a 1-year workmanship warranty.</p>
              <div className="author-creds">
                <span className="cred">MHIC Licensed</span>
                <span className="cred">City + MoCo Permits</span>
                <span className="cred">Kentlands HOA Expert</span>
                <span className="cred">Licensed Electricians</span>
                <span className="cred">4.9★ Rated</span>
                <span className="cred">1-Year Warranty</span>
              </div>
            </div>
          </div>

          <h2>Types of Decks We Build in Gaithersburg</h2>
          <p>
            Gaithersburg&apos;s housing spans early 20th century bungalows in the historic city core, 1990s–2000s Kentlands and Lakelands townhomes and single-family homes, 2000s–2010s Crown Farm colonials, and everything in between. Here is what we build most commonly:
          </p>

          <div className="deck-type-grid">
            <div className="deck-type-card">
              <span className="deck-tag">Most Requested — Kentlands &amp; Lakelands</span>
              <h3>Composite Rear Deck — HOA Compliant</h3>
              <p>The most popular deck type in Gaithersburg&apos;s planned communities. Trex or TimberTech composite in colors approved by the Kentlands or Lakelands ARC — typically warm earth tones or greys that complement the community&apos;s architectural palette. Built to the specific dimensions that fit within the rear yard setbacks of Kentlands and Lakelands lots — which are more constrained than typical suburban lots given the new urbanist street-front orientation of these communities. ARC documentation, approval management, and City permit filing all included.</p>
              <div className="deck-cost">Typical Cost: $28,000 – $56,000</div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">Crown Farm &amp; Newer Construction</span>
              <h3>Multi-Level Composite Deck</h3>
              <p>Crown Farm&apos;s 2000s–2010s colonials often have larger rear yards and rear-loaded garages — creating more usable rear yard space for multi-level deck builds than is available in Kentlands&apos; front-porch-focused layout. A two-level composite deck with upper dining area and lower grilling zone suits Crown Farm&apos;s colonial housing well. Crown Farm HOA ARC approval required before Montgomery County DPS permit filing. DMV-GC Group manages both processes in-house.</p>
              <div className="deck-cost">Typical Cost: $42,000 – $78,000</div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">Older City Neighborhoods</span>
              <h3>Pressure-Treated or Cedar Rear Deck</h3>
              <p>For Gaithersburg&apos;s older established residential neighborhoods near the historic city center — Washington Grove adjacent areas, older streets off Md-355 — a traditional pressure-treated or cedar deck is often the most appropriate and cost-effective choice. These neighborhoods have less HOA governance and more design latitude. City of Gaithersburg DPW permits required for properties within the city limits; Montgomery County DPS for those outside. DMV-GC Group verifies jurisdiction before filing.</p>
              <div className="deck-cost">Typical Cost: $18,000 – $38,000</div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">Full Outdoor Living</span>
              <h3>Deck with Outdoor Kitchen &amp; Pergola</h3>
              <p>A fully integrated outdoor living build — composite or hardwood deck with built-in outdoor kitchen, shade pergola, and lighting — for Gaithersburg homeowners who want a complete outdoor room. Crown Farm and Washingtonian Woods larger-lot properties are the most common candidates for this scope in Gaithersburg. Gas line, plumbing, and electrical all managed by in-house licensed trades — one contract. HOA ARC approval and City or County permit filing included.</p>
              <div className="deck-cost">Typical Cost: $65,000 – $95,000</div>
            </div>
          </div>

          <h2>City of Gaithersburg vs Montgomery County — Which Permit Authority Governs Your Deck</h2>
          <p>
            This is the most important practical question for any Gaithersburg deck project. The answer depends on your specific parcel&apos;s location — not your mailing address, and not proximity to a neighbor who filed with one authority or the other.
          </p>

          <div className="juris-grid">
            <div className="juris-card city">
              <h3>🏛️ City of Gaithersburg</h3>
              <div className="permit-tag">City DPW Permits</div>
              <ul>
                <li>Permit authority: City of Gaithersburg Dept. of Public Works</li>
                <li>Covers properties within the incorporated city limits</li>
                <li>Kentlands: City permits</li>
                <li>Lakelands: City permits</li>
                <li>Historic city center neighborhoods: City permits</li>
                <li>City has own plan review staff and inspection schedule</li>
                <li>City permits required separately from any HOA ARC approval</li>
                <li>COO issued by City after final inspection</li>
              </ul>
            </div>
            <div className="juris-card county">
              <h3>📋 Montgomery County</h3>
              <div className="permit-tag">MoCo DPS Permits</div>
              <ul>
                <li>Permit authority: Montgomery County DPS</li>
                <li>Covers unincorporated MoCo portions of Gaithersburg area</li>
                <li>Crown Farm: MoCo permits (outside city limits)</li>
                <li>Some Washingtonian Woods addresses: verify by parcel</li>
                <li>Neighborhoods along I-270 corridor outside city: MoCo</li>
                <li>Same MoCo permit process as Rockville, North Bethesda</li>
                <li>MoCo COO required before deck occupancy</li>
              </ul>
            </div>
          </div>

          <div className="warning">
            ⚠️ <strong>Critical for Gaithersburg:</strong> Kentlands and Lakelands are within the City of Gaithersburg — they require City DPW permits, not Montgomery County DPS permits. Crown Farm is outside the city limits — it requires Montgomery County DPS permits. Many Gaithersburg contractors file the wrong permit because they don&apos;t verify parcel-level jurisdiction. DMV-GC Group verifies the correct authority for every Gaithersburg address using parcel boundary data before any application is filed.
          </div>

          <h2>HOA Architectural Review in Gaithersburg — Kentlands, Lakelands, Crown Farm &amp; Washingtonian Woods</h2>
          <p>
            Independent of which government issues the building permit, many of Gaithersburg&apos;s planned communities require HOA Architectural Review Committee approval before any exterior modification — including deck construction — is permitted. This is a separate process from the building permit and must typically be completed before the permit is filed. DMV-GC Group manages both processes simultaneously wherever the HOA allows.
          </p>

          <div className="hoa-grid">
            <div className="hoa-card">
              <h3>Kentlands</h3>
              <div className="hoa-tag">City Permits + ARC Required</div>
              <p>Kentlands&apos; HOA has an active Architectural Review Committee that reviews all exterior modifications. Deck ARC submissions require site plan, elevation drawings, material specifications, and color samples. Kentlands ARC design standards reflect the community&apos;s new urbanist aesthetic — rear yard decks must be compatible in scale and material with the home&apos;s existing character and neighboring properties. City of Gaithersburg DPW permit required after ARC approval. DMV-GC Group prepares all ARC documentation and designs to Kentlands standards from the first draft.</p>
            </div>
            <div className="hoa-card">
              <h3>Lakelands</h3>
              <div className="hoa-tag">City Permits + ARC Required</div>
              <p>Lakelands shares Kentlands&apos; new urbanist design philosophy and has its own HOA with ARC review for exterior modifications including decks. Rear yard deck construction requires Lakelands ARC approval before City of Gaithersburg DPW permits are filed. ARC review considers the deck&apos;s scale, materials, colors, and compatibility with the home&apos;s architecture. DMV-GC Group manages Lakelands ARC submissions in-house with full documentation prepared for first-round approval.</p>
            </div>
            <div className="hoa-card">
              <h3>Crown Farm</h3>
              <div className="hoa-tag">MoCo Permits + ARC Required</div>
              <p>Crown Farm&apos;s HOA also requires ARC approval for deck construction — even though Crown Farm uses Montgomery County DPS permits rather than City of Gaithersburg permits. This is a common source of confusion: the permit authority is the county, but the HOA review is Crown Farm&apos;s own. DMV-GC Group manages Crown Farm ARC submissions and Montgomery County permit filings in-house — both processes handled simultaneously where timing allows.</p>
            </div>
            <div className="hoa-card">
              <h3>Washingtonian Woods</h3>
              <div className="hoa-tag">Verify Jurisdiction + ARC</div>
              <p>Washingtonian Woods has an active HOA with ARC review for exterior modifications. The permit jurisdiction for specific Washingtonian Woods addresses should be verified by parcel — some addresses are within City limits (City permit), others are unincorporated (MoCo permit). DMV-GC Group verifies both jurisdiction and HOA requirements for every Washingtonian Woods address before any work begins.</p>
            </div>
          </div>

          <div className="spec-box">
            <h3>📋 What DMV-GC Group Prepares for Gaithersburg HOA ARC Submissions</h3>
            <ul>
              <li><strong>Site plan:</strong> Survey-based plot plan showing the home footprint, property lines, existing structures, and proposed deck location with dimensions — required by all four Gaithersburg HOAs for deck ARC submissions.</li>
              <li><strong>Elevation drawings:</strong> Front, side, and rear elevation drawings showing the deck&apos;s height relative to the home and ground, railing style, stair location, and visual relationship to the home&apos;s existing exterior. Prepared to ARC submission standards.</li>
              <li><strong>Material and color specifications:</strong> Manufacturer name, product line, SKU, and color swatch for all deck surface, railing, and post materials — required by Kentlands and Lakelands ARC to verify compatibility with community design standards.</li>
              <li><strong>Parallel permit preparation:</strong> While ARC review is underway, DMV-GC Group prepares the City or County building permit application — so that the permit can be filed the same day ARC approval is received, minimizing total pre-construction timeline.</li>
              <li><strong>ARC revision management:</strong> If the ARC requests modifications to the design, DMV-GC Group prepares and resubmits the revised documentation — no additional charge for first-round revision responses.</li>
            </ul>
          </div>

          <h2>Popular Deck Features for Gaithersburg Homes</h2>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="icon">☂️</div>
              <strong>Pergola &amp; Shade</strong>
              <span>Shade for Gaithersburg&apos;s hot summers — wood or aluminum pergola, designed to complement Kentlands&apos; and Lakelands&apos; architectural aesthetic</span>
            </div>
            <div className="feature-box">
              <div className="icon">🍳</div>
              <strong>Outdoor Kitchen</strong>
              <span>Built-in grill, countertop, refrigeration, and sink — in-house licensed gas, electrical, and plumbing trades, one contract</span>
            </div>
            <div className="feature-box">
              <div className="icon">🔩</div>
              <strong>Cable Railing</strong>
              <span>Horizontal cable railing for unobstructed rear yard views — popular on Crown Farm and Washingtonian Woods colonials with deeper lots</span>
            </div>
            <div className="feature-box">
              <div className="icon">🪑</div>
              <strong>Built-In Seating</strong>
              <span>Integrated bench seating — maximizes usable space on Kentlands&apos; and Lakelands&apos; more constrained rear yard footprints</span>
            </div>
            <div className="feature-box">
              <div className="icon">💡</div>
              <strong>Deck Lighting</strong>
              <span>Post cap, step, and rail lighting — evening use extension for Gaithersburg&apos;s spring and fall outdoor seasons</span>
            </div>
            <div className="feature-box">
              <div className="icon">🌿</div>
              <strong>Planter Boxes</strong>
              <span>Built-in deck-edge planters — privacy, greenery, and definition on Kentlands lots where rear yard depth is at a premium</span>
            </div>
          </div>

          <h2>Gaithersburg Neighborhoods We Serve for Deck Building</h2>

          <div className="neighborhood-grid">
            <div className="neighborhood-card">
              <h3>Kentlands</h3>
              <span className="hood-tag">City permits · Kentlands HOA ARC</span>
              <p>Gaithersburg&apos;s landmark new urbanist community — front-porch townhomes, Craftsman singles, and diverse housing types on a traditional street grid. Rear yards are more compact than conventional suburban developments. City of Gaithersburg DPW permits. Kentlands HOA ARC approval required for all exterior modifications including decks. DMV-GC Group has managed multiple Kentlands ARC submissions through to approval.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Lakelands</h3>
              <span className="hood-tag">City permits · Lakelands HOA ARC</span>
              <p>New urbanist community adjacent to Kentlands, centered on Lakelands Lake. Similar housing types and ARC process to Kentlands, with its own HOA governance. City of Gaithersburg DPW permits. Lakelands HOA ARC approval required before permit filing. Rear yard decks sized to the community&apos;s lot configuration. DMV-GC Group manages Lakelands ARC submissions in-house.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Crown Farm</h3>
              <span className="hood-tag">MoCo permits · Crown Farm HOA ARC</span>
              <p>Master-planned community in unincorporated Montgomery County — larger lots than Kentlands/Lakelands, with newer 2000s–2010s colonial construction. Montgomery County DPS permits (not City). Crown Farm HOA ARC required before MoCo permit filing. More rear yard depth than Kentlands supports larger deck footprints and multi-level builds. DMV-GC Group manages both Crown Farm ARC and MoCo permit processes.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Washingtonian Woods</h3>
              <span className="hood-tag">Verify jurisdiction · HOA ARC required</span>
              <p>Established community with mix of townhomes and singles. Jurisdiction (City vs MoCo) varies by specific parcel — DMV-GC Group verifies before any application is filed. Active HOA with ARC review. Good lot sizes in the single-family areas support mid-range deck builds with pergola or built-in features.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Historic City Center / Olde Towne Area</h3>
              <span className="hood-tag">City permits · less HOA governance</span>
              <p>Older established neighborhoods in and around Gaithersburg&apos;s historic downtown — pre-war bungalows, cape cods, and mid-century ranches. City of Gaithersburg DPW permits. Generally less HOA governance than the planned communities — more design latitude for deck style and materials. More affordable construction costs relative to newer planned community builds.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Montgomery Village</h3>
              <span className="hood-tag">MoCo permits · MV Foundation review</span>
              <p>Large planned community in unincorporated Montgomery County along MD-355 — outside City of Gaithersburg limits. Montgomery County DPS permits. Montgomery Village Foundation has its own architectural review process for exterior modifications. Mix of townhomes and single-family homes from the 1970s–90s. Good deck feasibility across the single-family stock.</p>
            </div>
          </div>

          <h2>Our Deck Building Process in Gaithersburg</h2>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Free In-Home Consultation &amp; Jurisdiction Verification</h3>
                <p>We visit your Gaithersburg home, assess the deck opportunity and site conditions, and verify both the correct permit authority (City DPW vs MoCo DPS) and any applicable HOA ARC requirement for your specific address — before any design begins. No cost, no obligation.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Custom Deck Design — HOA and Permit Standards</h3>
                <p>Our design team develops the deck layout, structural plan, railing style, material specification, and site plan — designed from the first draft to meet both the applicable permit authority&apos;s code requirements and the HOA ARC&apos;s design standards. For Kentlands and Lakelands, materials and colors are selected within the ARC&apos;s approved palette. Full plan and elevation drawings prepared for both ARC and permit submissions.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>HOA ARC Submission (Where Required)</h3>
                <p>We prepare and submit all required ARC documentation — site plan, elevation drawings, material specs, color samples — to the applicable HOA (Kentlands, Lakelands, Crown Farm, Washingtonian Woods, or Montgomery Village). We manage all ARC correspondence and any revision requests. Permit application prepared simultaneously so it can be filed immediately upon ARC approval.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>Permit Filing — City DPW or MoCo DPS</h3>
                <p>We file the building permit with the correct authority — City of Gaithersburg DPW or Montgomery County DPS — upon ARC approval (where required) or immediately after design completion (where no ARC is required). Our permit team manages all correspondence, plan review, and inspection scheduling.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">5</div>
              <div className="step-content">
                <h3>Site Prep, Footings &amp; Framing</h3>
                <p>Post holes drilled to frost depth, concrete footings poured and cured, pressure-treated framing installed per structural drawings. Required footing inspection scheduled with the applicable permit authority — City or County.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">6</div>
              <div className="step-content">
                <h3>Decking, Railing, Features &amp; Lighting</h3>
                <p>Composite or wood decking installed in the ARC-approved material and color, railing system assembled, stairs built, pergola framed where included, outdoor kitchen rough-in and finish where included, and lighting wired — coordinated by a dedicated project manager.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">7</div>
              <div className="step-content">
                <h3>Final Inspection, Walkthrough &amp; 1-Year Warranty</h3>
                <p>City DPW or MoCo DPS final inspection managed by our permit team. After approval, thorough walkthrough with you, every punch list item addressed, and 1-year workmanship warranty activated.</p>
              </div>
            </div>
          </div>

          <h2>Deck Building Cost in Gaithersburg, MD</h2>

          <table className="cost-table">
            <tbody>
              <tr>
                <th>Deck Type / Scope</th>
                <th>Typical Cost Range</th>
                <th>Notes for Gaithersburg</th>
              </tr>
              <tr>
                <td>PT Rear Deck — Older City Neighborhoods (200–300 sq ft)</td>
                <td>$18,000 – $30,000</td>
                <td>Traditional pressure-treated with wood railing. City DPW permit included. Less HOA constraint in older neighborhoods.</td>
              </tr>
              <tr>
                <td>Composite Rear Deck — Kentlands / Lakelands (200–280 sq ft)</td>
                <td>$28,000 – $52,000</td>
                <td>ARC-compliant material and color. Rear yard setback constraints in new urbanist communities. City permit + Kentlands/Lakelands ARC coordination included.</td>
              </tr>
              <tr>
                <td>Composite Deck — Crown Farm (280–400 sq ft)</td>
                <td>$36,000 – $62,000</td>
                <td>Larger lots than Kentlands support bigger footprints. Crown Farm HOA ARC + MoCo DPS permit coordination included.</td>
              </tr>
              <tr>
                <td>Multi-Level Composite Deck with Stairs</td>
                <td>$48,000 – $80,000</td>
                <td>Two levels for Crown Farm, Washingtonian Woods, and Montgomery Village colonials with deeper rear yards. Full ARC and permit management.</td>
              </tr>
              <tr>
                <td>Composite Deck with Pergola</td>
                <td>$44,000 – $75,000</td>
                <td>Shade structure over deck — ARC review required in all four planned communities. Wood or aluminum pergola designed for ARC compatibility.</td>
              </tr>
              <tr>
                <td>Full Outdoor Living — Deck + Kitchen + Pergola</td>
                <td>$65,000 – $95,000</td>
                <td>Complete outdoor environment for Crown Farm / Washingtonian Woods larger properties. Gas, electrical, plumbing in-house. HOA + permit included.</td>
              </tr>
              <tr>
                <td>Deck Replacement (Remove &amp; Rebuild)</td>
                <td>$28,000 – $60,000</td>
                <td>Permit required even for same-footprint replacement. HOA ARC review required in all planned communities. City or MoCo permits depending on location.</td>
              </tr>
            </tbody>
          </table>

          <div className="tip">
            💡 <strong>Gaithersburg Deck Value:</strong> A quality composite deck in Kentlands or Crown Farm — designed to HOA standards and fully permitted — adds $25,000–$48,000 to appraised value and meaningfully increases buyer appeal in communities where outdoor living space is actively marketed as a lifestyle feature. Gaithersburg&apos;s strong employment base along the I-270 corridor and active resale market make deck investments here consistently worthwhile.
          </div>

          <div className="cta-banner">
            <h2>Get a Free Deck Consultation in Gaithersburg</h2>
            <p>We&apos;ll visit your home, verify your permit jurisdiction and HOA requirements, design a deck that passes ARC review on the first submission, and handle the complete permit and construction process. No cost, no obligation.</p>
            <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
          </div>

          <h2>What Gaithersburg Homeowners Say About DMV-GC Group</h2>

          <div className="review-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our Kentlands home required HOA ARC approval before the City permit. DMV-GC Group prepared the entire ARC submission — site plan, elevations, material specs — and it was approved on the first review. The composite deck they built in Trex Tiki Torch is exactly what the ARC approved and exactly what we wanted.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Kentlands, Gaithersburg MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;We were confused about whether Crown Farm uses City or County permits. DMV-GC Group confirmed immediately it was Montgomery County — not City of Gaithersburg — and filed with MoCo DPS. The Crown Farm HOA ARC and the MoCo permit were both managed by their team. Our two-level TimberTech deck is outstanding.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Crown Farm, Gaithersburg MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;We wanted a pergola with our Lakelands deck. DMV-GC Group designed the pergola to match our home&apos;s craftsman trim details — the ARC approved it without revision. The City of Gaithersburg permit came through two weeks after ARC approval. We were on the deck with guests the same month we&apos;d hoped.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Lakelands, Gaithersburg MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our Washingtonian Woods home needed both HOA approval and a building permit — and nobody could agree on whether it was City or County. DMV-GC Group checked the parcel data, confirmed it was City jurisdiction, managed both submissions, and built us a beautiful composite deck with outdoor kitchen. Complete project, zero headaches on our end.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Washingtonian Woods, Gaithersburg MD</span></div>
            </div>
          </div>

          <div className="highlight">
            <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Gaithersburg homeowners trust DMV-GC Group for deck projects that navigate the two-jurisdiction permit landscape correctly, manage HOA ARC approvals professionally, and deliver quality outdoor living spaces across every Gaithersburg community — from Kentlands townhomes to Crown Farm colonials.</p>
          </div>

          <h2>Serving All Gaithersburg, MD Neighborhoods for Deck Building</h2>

          <div className="areas-grid">
            <span className="area-pill">Kentlands</span>
            <span className="area-pill">Lakelands</span>
            <span className="area-pill">Crown Farm</span>
            <span className="area-pill">Washingtonian Woods</span>
            <span className="area-pill">Montgomery Village</span>
            <span className="area-pill">Olde Towne Gaithersburg</span>
            <span className="area-pill">Quince Orchard</span>
            <span className="area-pill">Rockville</span>
            <span className="area-pill">North Potomac</span>
            <span className="area-pill">Germantown</span>
          </div>

          <div className="nearby-box">
            <h3>Also serving Rockville, MD — directly south of Gaithersburg</h3>
            <p>DMV-GC Group builds custom decks throughout Rockville, which borders Gaithersburg to the south and shares the City vs County permit complexity — Rockville also has its own incorporated city permit authority separate from Montgomery County DPS. <Link href="/service/decks">View our full deck building service page &rarr;</Link></p>
          </div>

          <h2>Frequently Asked Questions — Deck Building in Gaithersburg, MD</h2>
          <Accordion defaultActiveKey="0" flush>
            {faqData.map((faq) => (
              <Accordion.Item eventKey={faq.eventKey} key={faq.eventKey}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="internal-links">
            <h2>Explore Our Other Services in Gaithersburg</h2>
            <ul>
              <li><Link href="/service/kitchen-remodeling/gaithersburg-md">Kitchen Remodeling in Gaithersburg, MD</Link></li>
              <li><Link href="/service/bathroom-remodeling">Bathroom Remodeling in Gaithersburg, MD</Link></li>
              <li><Link href="/service/basement-remodeling/gaithersburg-md">Basement Remodeling in Gaithersburg, MD</Link></li>
              <li><Link href="/service/adu/gaithersburg-md">ADU Construction in Gaithersburg, MD</Link></li>
              <li><Link href="/service/home-additions">Home Additions in Gaithersburg, MD</Link></li>
              <li><Link href="/service/design-build">Design-Build Contractor in Gaithersburg, MD</Link></li>
            </ul>
          </div>

          <div className="cta-banner">
            <h2>Ready to Build Your Gaithersburg Deck?</h2>
            <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. We&apos;ll verify your jurisdiction — City or County — manage your HOA ARC submission, and build the deck your Gaithersburg home deserves.</p>
            <Link href="/contact-us" className="cta-btn">Get Free Deck Estimate in Gaithersburg &rarr;</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
          </div>

        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
    </main>
  );
}
