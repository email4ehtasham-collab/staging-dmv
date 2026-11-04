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
      "description": "Licensed deck builder serving Rockville, MD. Custom deck construction across all Rockville neighborhoods — King Farm, Fallsgrove, Congressional, Twinbrook, Rockshire, and beyond — with City of Rockville and Montgomery County DPS permit expertise and full HOA ARC coordination.",
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
        { "@type": "City", "name": "Rockville", "sameAs": "https://en.wikipedia.org/wiki/Rockville,_Maryland" },
        { "@type": "City", "name": "Gaithersburg" },
        { "@type": "City", "name": "North Bethesda" },
        { "@type": "City", "name": "Potomac" },
        { "@type": "City", "name": "Germantown" }
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "MHIC License", "credentialCategory": "Maryland Home Improvement Contractor License" }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "97", "bestRating": "5" },
      "priceRange": "$$$"
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/decks/rockville-md#service",
      "serviceType": "Deck Building",
      "name": "Deck Building in Rockville, MD",
      "alternateName": ["Custom Deck Construction", "Composite Deck", "King Farm Deck", "HOA Deck", "Multi-Level Deck"],
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Rockville", "sameAs": "https://en.wikipedia.org/wiki/Rockville,_Maryland" },
      "description": "Full-service deck design and construction in Rockville, MD. Custom composite decks, multi-level decks, and outdoor living builds across all Rockville neighborhoods — with City of Rockville DPS and Montgomery County DPS permit expertise, and King Farm, Fallsgrove, Congressional, and Rockshire HOA ARC coordination.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "19000", "maxPrice": "98000", "priceCurrency": "USD" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Decks", "item": "https://www.dmv-gc.com/service/decks" },
        { "@type": "ListItem", "position": 4, "name": "Rockville, MD", "item": "https://www.dmv-gc.com/service/decks/rockville-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to build a deck in Rockville, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deck construction in Rockville, MD typically costs between $19,000 and $98,000 depending on neighborhood, size, material, and features. A pressure-treated rear deck for an older Rockville colonial or split-level runs $19,000–$32,000. A composite deck costs $30,000–$58,000. A multi-level composite deck with pergola costs $50,000–$82,000. A full outdoor living build with outdoor kitchen runs $68,000–$98,000. King Farm and Fallsgrove's newer construction with larger lots often supports larger deck footprints than older Rockville neighborhoods. DMV-GC Group provides free in-home consultations with detailed estimates for every Rockville neighborhood."
          }
        },
        {
          "@type": "Question",
          "name": "Does the City of Rockville have its own deck permit process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The City of Rockville is an incorporated municipality with its own permit authority — the City of Rockville Department of Planning and Development Services at 111 Maryland Avenue. Properties within the City of Rockville's incorporated limits file deck permits with the City, not with Montgomery County DPS. Properties in unincorporated portions of the Rockville area — some Congressional area neighborhoods, Fallsgrove, and other areas — may use Montgomery County DPS. DMV-GC Group verifies the correct permit authority for every Rockville address before any application is filed."
          }
        },
        {
          "@type": "Question",
          "name": "Does King Farm HOA require approval for deck construction in Rockville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. King Farm's Homeowners Association has an active Architectural Review Committee that must approve exterior modifications — including deck construction — before building permits are filed. The King Farm ARC reviews deck size, material, color, placement, and compatibility with the home's architectural character. DMV-GC Group prepares all required ARC documentation for King Farm deck projects — site plan, elevation drawings, material and color specifications — and manages the submission and review process in-house. We design King Farm decks to ARC standards from the first draft to minimize revision requests."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group handle permits for deck building in all Rockville neighborhoods?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group handles deck permits with both the City of Rockville DPS (for properties within the city limits) and Montgomery County DPS (for unincorporated areas). We also manage HOA ARC submissions for King Farm, Fallsgrove, Congressional area communities, and Rockshire where applicable. Our permit team manages all correspondence with the applicable authority from application through final inspection — homeowners never need to contact either the city or county directly."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for deck building in Rockville, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Rockville. We handle City of Rockville permits for properties within the city limits and Montgomery County DPS permits for unincorporated areas. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every deck project in Rockville."
          }
        }
      ]
    }
  ]
};

const faqData = [
  { eventKey: "0", question: "How much does it cost to build a deck in Rockville, MD?", answer: "Deck construction in Rockville typically costs $19,000–$98,000 depending on neighborhood, size, material, and features. A pressure-treated deck for an older Twinbrook home runs $19,000–$32,000. A composite deck in King Farm or Fallsgrove costs $30,000–$58,000. A multi-level deck with pergola runs $55,000–$88,000. A full outdoor living build with kitchen costs $68,000–$98,000. HOA ARC coordination and City or County permit filing are included in every scope. DMV-GC Group provides free in-home consultations with detailed estimates." },
  { eventKey: "1", question: "Does the City of Rockville have its own deck permit process?", answer: "Yes. Properties within the incorporated City of Rockville — including King Farm, Fallsgrove, Twinbrook (most of it), and the Town Center area — file deck permits with the City\'s Department of Planning and Development Services at 111 Maryland Avenue, not Montgomery County DPS. Properties outside the city limits use Montgomery County DPS. DMV-GC Group verifies the correct jurisdiction for every Rockville address before any permit application is filed." },
  { eventKey: "2", question: "Does King Farm HOA need to approve my deck before permits are filed?", answer: "Yes. King Farm\'s HOA Architectural Review Committee must approve the deck design before the City of Rockville building permit is filed. The ARC reviews size, material, color, and placement. DMV-GC Group prepares all required ARC documentation — site plan, elevation drawings, material specifications, and color samples — and manages the complete review process in-house. We design King Farm decks to ARC standards from the first draft to minimize revision requests, and run the City permit preparation in parallel so it\'s ready to file the day ARC approval is received." },
  { eventKey: "3", question: "Is the Congressional area in Rockville governed by City or County permits?", answer: "It depends on the specific parcel. The City of Rockville boundary runs through the Congressional area in a way that is not obvious from street addresses — some parcels are within city limits (City DPS permits), others are in unincorporated Montgomery County (MoCo DPS permits). DMV-GC Group verifies the specific jurisdiction for every Congressional area address using parcel boundary data before any design or permit work begins. This is one of the most jurisdiction-complex areas in the Rockville service region." },
  { eventKey: "4", question: "Is DMV-GC Group licensed for deck building in Rockville, MD?", answer: "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Rockville. We handle City of Rockville DPS permits for properties within the city limits and Montgomery County DPS permits for unincorporated areas. We are fully bonded, carry comprehensive general liability insurance and workers\' compensation coverage, and provide a 1-year workmanship warranty on every deck project in Rockville." }
];

export default function DecksRockvilleMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => { setActiveMenuItem("service"); }, []);
  return (
    <main>
      <div className="city-service-detail-page decks-rockville-md">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/services">Services</Link><span>›</span>
            <Link href="/service/decks">Deck Building</Link><span>›</span>
            Rockville, MD
          </nav>

          <div className="hero">
            <div className="hero-location-tag">📍 Serving Rockville, MD</div>
            <h1>Deck Building in Rockville, MD — Custom Deck Contractor for King Farm, Fallsgrove &amp; All Neighborhoods</h1>
            <div className="hero-meta">
              <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
              <span className="badge">✓ MHIC Licensed &amp; Insured</span>
              <span className="badge">✓ City &amp; MoCo Permits Handled</span>
              <span className="badge">✓ King Farm &amp; Fallsgrove HOA</span>
              <span className="badge dark">📞 +1 240-730-1292</span>
            </div>
          </div>

          <div className="permit-banner">
            <div className="icon">🏛️</div>
            <div>
              <h3>Rockville Has Two Permit Authorities — and Its Most Active Deck Markets Also Require HOA ARC Approval</h3>
              <p>Rockville&apos;s deck permit landscape mirrors Gaithersburg&apos;s complexity: properties within the incorporated City of Rockville file deck permits with the City&apos;s Department of Planning and Development Services at 111 Maryland Avenue — not with Montgomery County. Properties outside the city limits file with Montgomery County DPS. Then, independently of which government issues the permit, Rockville&apos;s most active deck markets — King Farm, Fallsgrove, Congressional area communities, and Rockshire — all have active HOA Architectural Review Committees that must approve deck designs before any permit is filed. A contractor who doesn&apos;t know which authority governs your specific Rockville address, or who skips the HOA step, produces invalid permits or unapproved exterior work. DMV-GC Group verifies jurisdiction and HOA requirements for every Rockville address before any design or application work begins.</p>
            </div>
          </div>

          <div className="intro-box">
            Looking for a trusted <strong>deck contractor in Rockville, MD</strong>? Rockville&apos;s housing ranges from 1950s–70s colonials and split-levels in Twinbrook and Rockshire, to 1990s–2000s planned communities in King Farm and Fallsgrove, to larger homes in the Congressional area and along the I-270 corridor. Each community has different lot sizes, housing styles, permit requirements, and HOA processes. DMV-GC Group handles the complete Rockville deck project in-house — design, City or County permit filing, HOA ARC documentation, construction, and inspection — across every Rockville neighborhood, under one contract.
          </div>

          <div className="trust-bar">
            <div className="trust-item">
              <div className="icon">🏛️</div>
              <strong>Both Permit Authorities</strong>
              <span>City of Rockville + MoCo DPS</span>
            </div>
            <div className="trust-item">
              <div className="icon">📋</div>
              <strong>HOA ARC Coordination</strong>
              <span>King Farm · Fallsgrove · Congressional</span>
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

          <h2>Deck Building Services in Rockville, MD</h2>

          <div className="service-grid">
            <div className="service-item">Custom Deck Design &amp; Build (All Neighborhoods)</div>
            <div className="service-item">Composite Deck (Trex / TimberTech / Azek)</div>
            <div className="service-item">Pressure-Treated &amp; Cedar Deck</div>
            <div className="service-item">Multi-Level Deck with Stairs</div>
            <div className="service-item">Outdoor Kitchen &amp; Grill Station</div>
            <div className="service-item">Pergola &amp; Covered Deck Structure</div>
            <div className="service-item">Cable &amp; Wood Railing Systems</div>
            <div className="service-item">Built-In Seating &amp; Storage</div>
            <div className="service-item">Under-Deck Drainage System</div>
            <div className="service-item">Deck Lighting Systems</div>
            <div className="service-item">Deck Replacement &amp; Structural Rebuild</div>
            <div className="service-item">City of Rockville DPS Permit Filing</div>
            <div className="service-item">Montgomery County DPS Permit Filing</div>
            <div className="service-item">King Farm, Fallsgrove &amp; HOA ARC Coordination</div>
          </div>

          <div className="author-box">
            <div className="author-avatar">🏠</div>
            <div className="author-info">
              <h4>About DMV-GC Group — Rockville&apos;s Licensed Custom Deck Contractor</h4>
              <p>DMV-GC Group is based in nearby North Bethesda and has completed deck builds, ADU conversions, kitchen remodels, and bathroom renovations throughout Rockville&apos;s neighborhoods — King Farm, Fallsgrove, Twinbrook, Rockshire, Congressional, and beyond. We understand the City of Rockville DPS permit process at 111 Maryland Avenue, the Montgomery County DPS process for unincorporated areas, and the HOA ARC requirements of King Farm, Fallsgrove, and other Rockville communities. We hold a Maryland MHIC license and back every project with a 1-year workmanship warranty.</p>
              <div className="author-creds">
                <span className="cred">MHIC Licensed</span>
                <span className="cred">City + MoCo Permits</span>
                <span className="cred">King Farm HOA Expert</span>
                <span className="cred">Licensed Electricians</span>
                <span className="cred">4.9★ Rated</span>
                <span className="cred">1-Year Warranty</span>
              </div>
            </div>
          </div>

          <h2>Types of Decks We Build in Rockville, MD</h2>
          <p>
            Rockville&apos;s housing spans 1950s–70s postwar neighborhoods, 1990s–2000s master-planned communities, and larger custom homes in the Congressional corridor. Each creates different deck opportunities:
          </p>

          <div className="deck-type-grid">
            <div className="deck-type-card">
              <span className="deck-tag">King Farm &amp; Fallsgrove — Most Requested</span>
              <h3>Composite Rear Deck — HOA Compliant</h3>
              <p>Trex or TimberTech composite in ARC-approved colors — the most popular deck type in Rockville&apos;s newer planned communities. King Farm and Fallsgrove lots are generous by planned community standards, allowing deck footprints of 250–400 sq ft in many cases. ARC documentation, City of Rockville permit filing (King Farm is within city limits), and construction all managed under one contract. DMV-GC Group designs King Farm and Fallsgrove decks to ARC standards from the first draft to minimize revision requests and move from ARC approval to construction as quickly as possible.</p>
              <div className="deck-cost">Typical Cost: $30,000 – $58,000</div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">Congressional &amp; Larger Lots</span>
              <h3>Multi-Level Composite Deck with Pergola</h3>
              <p>The Congressional area and other larger-lot Rockville neighborhoods — including parts of Rockshire and properties along the I-270 corridor — support ambitious multi-level deck builds. Two connected levels, outdoor kitchen integration, pergola shade structure, cable railing for long rear yard views, and integrated lighting. These are the Rockville deck builds that rival Potomac in scope but at a different price point appropriate to Rockville&apos;s market. Permit filed with City DPS or MoCo DPS depending on jurisdiction — confirmed before design begins.</p>
              <div className="deck-cost">Typical Cost: $55,000 – $92,000</div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">Twinbrook &amp; Older Rockville</span>
              <h3>Elevated Split-Level or Colonial Deck</h3>
              <p>Twinbrook and other older Rockville neighborhoods — 1950s–70s colonials and split-levels along Veirs Mill Road and Randolph Road — have the same elevated rear deck opportunity as Silver Spring&apos;s Four Corners and Wheaton&apos;s Glenmont. Main living floors 4–6 feet above rear grade, concrete block foundations in some 1950s–60s construction, and generous rear yards relative to lot size. Elevated composite deck with stairs to lower yard is the dominant project type. City of Rockville permit if within city limits; MoCo DPS if outside.</p>
              <div className="deck-cost">Typical Cost: $32,000 – $62,000</div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">Full Outdoor Living</span>
              <h3>Deck with Outdoor Kitchen &amp; Pergola</h3>
              <p>A complete outdoor living environment — composite or hardwood deck with built-in outdoor kitchen, shade pergola, cable or glass railing, and integrated lighting — for Rockville homeowners who want a finished outdoor room. Most common in King Farm, Fallsgrove, Congressional area, and Rockshire single-family homes. Gas line, plumbing, and electrical managed by in-house licensed trades. HOA ARC approval and City or County permit filing included. One contract from design to final inspection.</p>
              <div className="deck-cost">Typical Cost: $68,000 – $98,000</div>
            </div>
          </div>

          <h2>City of Rockville vs Montgomery County — Which Permit Authority Governs Your Deck</h2>
          <p>
            Rockville&apos;s permit jurisdiction is one of the most frequently misunderstood in Montgomery County — even by experienced contractors. The City of Rockville has its own incorporated government and its own permit authority, separate from the county. Which one governs your specific property depends on your parcel&apos;s location, not your mailing address.
          </p>

          <div className="juris-grid">
            <div className="juris-card city">
              <h3>🏛️ City of Rockville</h3>
              <div className="permit-tag">City DPS Permits — 111 Maryland Ave</div>
              <ul>
                <li>Permit authority: City of Rockville Dept. of Planning &amp; Development Services</li>
                <li>Address: 111 Maryland Avenue, Rockville, MD 20850</li>
                <li>King Farm: City of Rockville permits</li>
                <li>Fallsgrove: City of Rockville permits</li>
                <li>Rockville Town Center area: City permits</li>
                <li>Twinbrook (most of it): City permits — verify by parcel</li>
                <li>City has own plan review staff, structural review, and inspection schedule</li>
                <li>City permit processing timeline differs from MoCo — typically 3–5 weeks for deck permits</li>
              </ul>
            </div>
            <div className="juris-card county">
              <h3>📋 Montgomery County</h3>
              <div className="permit-tag">MoCo DPS Permits</div>
              <ul>
                <li>Permit authority: Montgomery County DPS</li>
                <li>Covers unincorporated MoCo portions of the Rockville area</li>
                <li>Congressional area: verify by parcel — some addresses are City, some MoCo</li>
                <li>Rockshire: verify by parcel</li>
                <li>Properties along I-270 and MD-28 corridor outside city: typically MoCo</li>
                <li>Same MoCo permit process as North Bethesda, Gaithersburg, and Wheaton</li>
                <li>MoCo COO required before deck occupancy</li>
              </ul>
            </div>
          </div>

          <div className="warning">
            ⚠️ <strong>Congressional Area Note:</strong> The Congressional area is one of Rockville&apos;s most jurisdiction-complex neighborhoods — some parcels are within the City of Rockville limits, others are in unincorporated Montgomery County, and the boundary runs through the neighborhood in a way that is not obvious from street addresses or neighborhood names. DMV-GC Group verifies the specific jurisdiction for every Congressional area address using parcel boundary data before any permit application is filed. Never assume — always verify.
          </div>

          <h2>HOA Architectural Review in Rockville — King Farm, Fallsgrove, Congressional &amp; Rockshire</h2>
          <p>
            Several of Rockville&apos;s most active deck markets have HOA Architectural Review Committees that must approve exterior modifications before permits are filed. This is a separate process from the building permit and adds timeline — but DMV-GC Group manages both in parallel to minimize total pre-construction time.
          </p>

          <div className="hoa-grid">
            <div className="hoa-card">
              <h3>King Farm</h3>
              <div className="hoa-tag city">City Permits + ARC Required</div>
              <p>King Farm&apos;s master-planned community has an active HOA with ARC review for all exterior modifications including decks. Deck designs must be compatible in material, color, and scale with King Farm&apos;s new urbanist community aesthetic — rear yard orientation, appropriate proportions, ARC-approved composite colors. City of Rockville DPS permits required after ARC approval. DMV-GC Group has managed multiple King Farm ARC submissions through to approval and designs to ARC standards from the first draft.</p>
            </div>
            <div className="hoa-card">
              <h3>Fallsgrove</h3>
              <div className="hoa-tag city">City Permits + ARC Required</div>
              <p>Fallsgrove&apos;s HOA requires ARC approval for deck construction before City of Rockville permits are filed. Fallsgrove&apos;s homes are newer construction — 2000s colonials and townhomes on generously sized lots that support larger deck footprints than older Rockville neighborhoods. ARC review considers scale, material, and color compatibility with the home and community. DMV-GC Group manages Fallsgrove ARC submissions and City permit filings in-house.</p>
            </div>
            <div className="hoa-card">
              <h3>Congressional Area Communities</h3>
              <div className="hoa-tag county">Verify Permits + ARC Varies</div>
              <p>Several Congressional area communities have HOA governance with ARC review — but coverage varies by specific community. Permit jurisdiction also varies by parcel (City or MoCo). DMV-GC Group verifies both jurisdiction and HOA requirements for every Congressional area address during the consultation before any work begins. Where ARC review applies, documentation and submission are managed in-house.</p>
            </div>
            <div className="hoa-card">
              <h3>Rockshire</h3>
              <div className="hoa-tag county">Verify Permits + HOA Review</div>
              <p>Rockshire is an established community with its own HOA that reviews exterior modifications. Permit jurisdiction should be verified by parcel — some Rockshire properties are within City of Rockville limits, others are in unincorporated Montgomery County. Good rear yard depths in the single-family sections support mid-range to larger deck builds. DMV-GC Group verifies jurisdiction and manages HOA documentation for every Rockshire deck project.</p>
            </div>
          </div>

          <h2>Building a Deck in King Farm, Rockville — What to Know</h2>
          <p>
            King Farm is Rockville&apos;s most active single-family deck market — a 2000s master-planned community with generously sized lots, newer colonial construction, and an active HOA ARC. Here is what makes King Farm deck projects specific:
          </p>

          <div className="spec-box">
            <h3>🏘️ King Farm Deck Project — Key Considerations</h3>
            <ul>
              <li><strong>City of Rockville permits:</strong> King Farm is within the incorporated City of Rockville — all deck permits are filed with City DPS at 111 Maryland Avenue, not with Montgomery County. City permit processing for decks typically runs 3–5 weeks for plan review before construction can begin.</li>
              <li><strong>King Farm HOA ARC — required first:</strong> The King Farm HOA&apos;s Architectural Review Committee must approve the deck design before the City permit is filed. ARC submission requires site plan, elevation drawings, material specifications, and color samples. DMV-GC Group prepares all required documentation and submits to the King Farm ARC. We run permit preparation in parallel so the City application is ready to file the day ARC approval is received.</li>
              <li><strong>ARC-approved materials and colors:</strong> The King Farm ARC has specific preferences regarding deck material and color compatibility with the home&apos;s exterior. Composite decking in warm earthy tones — complementing King Farm&apos;s colonial architectural palette — is the most commonly approved direction. DMV-GC Group works within the ARC&apos;s design standards while selecting the best available composite product within those parameters.</li>
              <li><strong>Lot size advantage:</strong> King Farm&apos;s single-family lots are larger than most planned community developments in Montgomery County — allowing deck footprints of 280–420 sq ft in many cases without lot coverage issues. This is a meaningful advantage over Kentlands or Lakelands where smaller lots constrain deck footprint.</li>
              <li><strong>Newer construction rough-ins:</strong> King Farm&apos;s 2000s colonials were often built with sliding door or French door openings designed for future deck addition — meaning the structural connection point and door threshold height are already in place. This reduces deck connection complexity compared to retrofitting an older home without a planned deck opening.</li>
              <li><strong>Foundation type:</strong> King Farm homes are predominantly poured concrete foundation — a favorable ledger attachment substrate compared to the concrete block foundations found in Rockville&apos;s 1950s–60s stock. Standard ledger attachment per structural drawings, with proper flashing at the ledger-foundation interface.</li>
            </ul>
          </div>

          <h2>Popular Deck Features for Rockville Homes</h2>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="icon">☂️</div>
              <strong>Pergola &amp; Shade</strong>
              <span>Wood or aluminum pergola over the main deck area — shade for Rockville&apos;s hot summers and support for string lights and climbing vines</span>
            </div>
            <div className="feature-box">
              <div className="icon">🍳</div>
              <strong>Outdoor Kitchen</strong>
              <span>Built-in grill, countertops, refrigeration, and sink — in-house licensed gas, electrical, and plumbing, one contract from design to finish</span>
            </div>
            <div className="feature-box">
              <div className="icon">🔩</div>
              <strong>Cable Railing</strong>
              <span>Horizontal cable railing for unobstructed views — popular on Congressional area and Fallsgrove homes with deep rear yards</span>
            </div>
            <div className="feature-box">
              <div className="icon">🌧️</div>
              <strong>Under-Deck Drainage</strong>
              <span>For Twinbrook and older Rockville elevated split-level decks — convert the space below to a dry covered patio</span>
            </div>
            <div className="feature-box">
              <div className="icon">💡</div>
              <strong>Integrated Lighting</strong>
              <span>Post cap, step, and rail lighting on low-voltage systems — evening use for Rockville&apos;s outdoor-friendly spring and fall seasons</span>
            </div>
            <div className="feature-box">
              <div className="icon">🪑</div>
              <strong>Built-In Seating</strong>
              <span>Integrated bench seating — seats more guests without furniture clutter, particularly valuable on planned community lots with setback constraints</span>
            </div>
          </div>

          <h2>Rockville Neighborhoods We Serve for Deck Building</h2>

          <div className="neighborhood-grid">
            <div className="neighborhood-card">
              <h3>King Farm</h3>
              <span className="hood-tag">City permits · King Farm HOA ARC · Shady Grove Metro</span>
              <p>Rockville&apos;s most active deck market. 2000s colonials on generous lots with planned sliding door openings for deck addition. Poured concrete foundations. City of Rockville DPS permits. King Farm ARC required before permit. Shady Grove Metro proximity supports strong property values. DMV-GC Group has completed multiple King Farm ARC-approved deck projects.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Fallsgrove</h3>
              <span className="hood-tag">City permits · Fallsgrove HOA ARC</span>
              <p>Newer 2000s–2010s construction with larger lot depths than King Farm in many sections. Colonial and craftsman homes with good rear yard room for substantial deck builds. City of Rockville DPS permits. Fallsgrove HOA ARC required. Cable railing and multi-level builds are popular in this community&apos;s newer architectural vocabulary.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Twinbrook</h3>
              <span className="hood-tag">Mostly City permits · 1950s–70s housing</span>
              <p>One of Rockville&apos;s oldest established neighborhoods — 1950s ranches and split-levels on tree-lined streets. City of Rockville DPS permits for most addresses. Split-level elevated deck opportunity similar to Wheaton and Silver Spring. Concrete block foundations in some 1950s–60s stock — DMV-GC Group assesses ledger attachment approach during consultation.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Rockshire</h3>
              <span className="hood-tag">Verify jurisdiction · HOA review</span>
              <p>Established community from the 1970s–80s with colonials and split-levels on good-sized lots. Jurisdiction varies by parcel — City or MoCo. HOA with review for exterior modifications. Rear yard depths in the single-family sections support mid to larger deck footprints. DMV-GC Group verifies jurisdiction before any application is filed.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Congressional Area</h3>
              <span className="hood-tag">Verify jurisdiction · HOA varies</span>
              <p>Rockville&apos;s most jurisdiction-complex area — parcels straddle the City/MoCo boundary in a non-obvious way. Mix of 1960s–80s colonials and larger custom homes. Some of Rockville&apos;s most substantial rear yards, supporting ambitious multi-level deck builds and outdoor kitchen integration. DMV-GC Group verifies specific parcel jurisdiction before any design begins.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Rockville Town Center Adjacent</h3>
              <span className="hood-tag">City permits · compact lots</span>
              <p>Neighborhoods immediately adjacent to Rockville Town Center and the Rockville Metro station. Townhomes and smaller single-family homes — deck scope is constrained by smaller lot sizes. A well-designed compact rear deck significantly enhances outdoor living on these Metro-proximate properties. City of Rockville permits. Red Line access supports strong property values.</p>
            </div>
          </div>

          <h2>Our Deck Building Process in Rockville</h2>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Free In-Home Consultation &amp; Jurisdiction Verification</h3>
                <p>We visit your Rockville home, assess the deck opportunity and site conditions, and verify both the correct permit authority (City DPS at 111 Maryland Ave vs MoCo DPS) and any applicable HOA ARC requirement for your specific address — before any design begins. No cost, no obligation.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Custom Deck Design — HOA and Permit Standards</h3>
                <p>Full deck layout, structural plan, elevation drawings, railing style, material specification, and site plan — designed to meet both the applicable permit code requirements and any HOA ARC design standards from the first draft. For King Farm and Fallsgrove, materials and colors are selected within ARC-approved parameters. Permit application prepared in parallel with ARC submission for King Farm and Fallsgrove projects.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>HOA ARC Submission (Where Required)</h3>
                <p>We prepare and submit all required ARC documentation — site plan, elevation drawings, material and color specifications — to King Farm, Fallsgrove, Rockshire, or Congressional area HOA as applicable. We manage all ARC correspondence and any revision requests. City or County permit application is ready to file the same day ARC approval is received.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>Permit Filing — City DPS or MoCo DPS</h3>
                <p>We file the building permit with the correct authority — City of Rockville DPS at 111 Maryland Avenue or Montgomery County DPS — upon ARC approval or immediately after design completion where no ARC is required. Our permit team manages all correspondence, plan review responses, and inspection scheduling.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">5</div>
              <div className="step-content">
                <h3>Foundation Assessment &amp; Footings</h3>
                <p>For Twinbrook and older Rockville homes, the foundation wall type is assessed before ledger attachment is specified — concrete block foundations in 1950s–60s stock require the same masonry anchor approach as Wheaton&apos;s split-levels. For King Farm and Fallsgrove homes, poured concrete foundations use standard ledger attachment with proper flashing. Post holes drilled, footings poured, required footing inspection managed with City or County.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">6</div>
              <div className="step-content">
                <h3>Framing, Decking, Features &amp; Lighting</h3>
                <p>Framing installed per structural drawings, then decking boards in ARC-approved material and color, railing system, stairway, pergola where included, outdoor kitchen rough-in and finish where included, and lighting — coordinated by a project manager throughout. City or County framing inspection managed.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">7</div>
              <div className="step-content">
                <h3>Final Inspection, Walkthrough &amp; 1-Year Warranty</h3>
                <p>City DPS or MoCo DPS final inspection managed. Thorough walkthrough, every punch list item addressed, and 1-year workmanship warranty activated. Your Rockville deck is legally complete and ready for use.</p>
              </div>
            </div>
          </div>

          <h2>Deck Building Cost in Rockville, MD</h2>

          <table className="cost-table">
            <tbody>
              <tr>
                <th>Deck Type / Scope</th>
                <th>Typical Cost Range</th>
                <th>Notes for Rockville</th>
              </tr>
              <tr>
                <td>PT Rear Deck — Twinbrook / Older Rockville (220–300 sq ft)</td>
                <td>$19,000 – $32,000</td>
                <td>Elevated or ground-level PT deck. CMU foundation assessment included for 1950s–60s homes. City or MoCo permit confirmed before filing.</td>
              </tr>
              <tr>
                <td>Composite Rear Deck — King Farm / Fallsgrove (260–380 sq ft)</td>
                <td>$30,000 – $58,000</td>
                <td>ARC-compliant material and color. King Farm or Fallsgrove HOA ARC + City of Rockville permit coordination. Newer construction rough-ins often in place.</td>
              </tr>
              <tr>
                <td>Elevated Split-Level Composite Deck — Twinbrook</td>
                <td>$36,000 – $64,000</td>
                <td>4–6 ft elevation. CMU assessment if applicable. Stairs to lower yard. Under-deck drainage system option. City or MoCo permit.</td>
              </tr>
              <tr>
                <td>Multi-Level Deck with Pergola — Congressional / Rockshire</td>
                <td>$55,000 – $88,000</td>
                <td>Two levels for larger-lot properties. Shade structure over upper deck. Cable railing for rear yard views. Jurisdiction verified before design.</td>
              </tr>
              <tr>
                <td>Full Outdoor Living — Deck + Kitchen + Pergola</td>
                <td>$68,000 – $98,000</td>
                <td>Complete outdoor environment. In-house gas, electrical, plumbing. HOA ARC + City or MoCo permit. One contract from design to final inspection.</td>
              </tr>
              <tr>
                <td>Deck Replacement (Remove &amp; Rebuild)</td>
                <td>$30,000 – $65,000</td>
                <td>Permit required even for same-footprint replacement. HOA ARC required in all planned communities. City or MoCo permit depending on location.</td>
              </tr>
              <tr>
                <td>Under-Deck Drainage System (add-on)</td>
                <td>$8,000 – $18,000</td>
                <td>For Twinbrook and older split-level elevated decks with 4–6 ft clearance — converts under-deck space to dry covered patio.</td>
              </tr>
            </tbody>
          </table>

          <div className="tip">
            💡 <strong>Rockville Deck Value:</strong> A quality composite deck in King Farm or Fallsgrove — ARC approved, City permitted, and properly built — adds $28,000–$50,000 to appraised value and significantly increases buyer appeal in communities where outdoor living is a marketed lifestyle feature. Rockville&apos;s strong I-270 corridor employment base, Red Line Metro access at Rockville and Shady Grove, and active resale market make deck investments here consistently return-positive.
          </div>

          <div className="cta-banner">
            <h2>Get a Free Deck Consultation in Rockville</h2>
            <p>We&apos;ll visit your home, verify your jurisdiction and HOA requirements, design a deck that passes ARC review on the first submission, and handle the complete permit and construction process. No cost, no obligation.</p>
            <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
          </div>

          <h2>What Rockville Homeowners Say About DMV-GC Group</h2>

          <div className="review-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;We&apos;re in King Farm — HOA ARC approval was required before the City permit. DMV-GC Group handled the entire ARC submission, got first-round approval, filed with the City of Rockville DPS the same week, and built us a 340 sq ft Trex deck with cable railing. The whole process was completely managed by their team.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">King Farm, Rockville MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our Congressional area home had unclear jurisdiction — we&apos;d heard different answers from three contractors. DMV-GC Group checked the parcel data and confirmed we were in unincorporated MoCo, not the City. Filed with Montgomery County DPS. The two-level TimberTech deck with pergola came out beautifully.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Congressional Area, Rockville MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our Twinbrook split-level has a concrete block foundation — DMV-GC Group assessed it during the consultation, confirmed the solid block zones for the ledger, and used the correct masonry anchors. The elevated composite deck has no movement whatsoever. City of Rockville permit was managed completely by their permit team.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Twinbrook, Rockville MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;We added an outdoor kitchen to our Fallsgrove deck build — gas line, sink, refrigeration, the full setup. DMV-GC Group&apos;s own plumbers, electricians, and gas techs did all of it. The Fallsgrove HOA approved the design first try. One contract, one team, zero subcontractor coordination on our end.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Fallsgrove, Rockville MD</span></div>
            </div>
          </div>

          <div className="highlight">
            <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Rockville homeowners trust DMV-GC Group for deck projects that navigate the two-jurisdiction permit landscape, manage HOA ARC processes professionally across King Farm, Fallsgrove, and Congressional area communities, and address the concrete block foundation realities of Twinbrook&apos;s older housing stock — all under one contract.</p>
          </div>

          <h2>Serving All Rockville, MD Neighborhoods for Deck Building</h2>

          <div className="areas-grid">
            <span className="area-pill">King Farm</span>
            <span className="area-pill">Fallsgrove</span>
            <span className="area-pill">Twinbrook</span>
            <span className="area-pill">Rockshire</span>
            <span className="area-pill">Congressional Area</span>
            <span className="area-pill">Rockville Town Center</span>
            <span className="area-pill">Hungerford</span>
            <span className="area-pill">North Bethesda</span>
            <span className="area-pill">Gaithersburg</span>
            <span className="area-pill">Potomac</span>
          </div>

          <div className="nearby-box">
            <h3>Also serving Gaithersburg, MD — directly north of Rockville</h3>
            <p>Rockville and Gaithersburg share the same dual-jurisdiction complexity — City permits vs MoCo DPS — and many of the same HOA ARC challenges in their planned communities. DMV-GC Group builds custom decks throughout Gaithersburg&apos;s Kentlands, Lakelands, and Crown Farm neighborhoods with the same permit and ARC expertise. <Link href="/service/decks/gaithersburg-md">View our Gaithersburg deck page →</Link></p>
          </div>

          <h2>Frequently Asked Questions — Deck Building in Rockville, MD</h2>
          <Accordion defaultActiveKey="0" flush>
            {faqData.map((faq) => (
              <Accordion.Item eventKey={faq.eventKey} key={faq.eventKey}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="internal-links">
            <h2>Explore Our Other Services in Rockville</h2>
            <ul>
              <li><Link href="/service/kitchen-remodeling/rockville-md">Kitchen Remodeling in Rockville, MD</Link></li>
              <li><Link href="/service/bathroom-remodeling">Bathroom Remodeling in Rockville, MD</Link></li>
              <li><Link href="/service/basement-remodeling/rockville-md">Basement Remodeling in Rockville, MD</Link></li>
              <li><Link href="/service/adu/rockville-md">ADU Construction in Rockville, MD</Link></li>
              <li><Link href="/service/home-additions">Home Additions in Rockville, MD</Link></li>
              <li><Link href="/service/design-build">Design-Build Contractor in Rockville, MD</Link></li>
            </ul>
          </div>

          <div className="cta-banner">
            <h2>Ready to Build Your Rockville Deck?</h2>
            <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. We&apos;ll verify your jurisdiction — City or County — manage your HOA ARC submission, and build the deck your Rockville home deserves.</p>
            <Link href="/contact-us" className="cta-btn">Get Free Deck Estimate in Rockville →</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
          </div>

        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
    </main>
  );
}
