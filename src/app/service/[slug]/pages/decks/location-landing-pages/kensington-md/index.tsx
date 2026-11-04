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
      "description": "Licensed deck builder serving Kensington, MD. Specializing in custom deck design for Kensington's historic 1920s–40s bungalows and craftsman homes — small-lot deck solutions, rear yard decks, and character-appropriate designs — with Town of Kensington permit expertise.",
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
        { "@type": "City", "name": "Silver Spring" },
        { "@type": "City", "name": "Wheaton" },
        { "@type": "City", "name": "North Bethesda" },
        { "@type": "City", "name": "Garrett Park" }
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "MHIC License", "credentialCategory": "Maryland Home Improvement Contractor License" }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "97", "bestRating": "5" },
      "priceRange": "$$$"
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/decks/kensington-md#service",
      "serviceType": "Deck Building",
      "name": "Deck Building in Kensington, MD",
      "alternateName": ["Custom Deck Construction", "Composite Deck", "Rear Yard Deck", "Bungalow Deck", "Small Lot Deck"],
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Kensington", "sameAs": "https://en.wikipedia.org/wiki/Kensington,_Maryland" },
      "description": "Custom deck building in Kensington, MD. Rear yard decks, bungalow-appropriate designs, and small-lot deck solutions for Kensington's historic 1920s–40s homes — designed to complement the character of the community, permitted through the Town of Kensington, and built with quality finishes appropriate to this distinctive neighborhood.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "14000", "maxPrice": "75000", "priceCurrency": "USD" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Decks", "item": "https://www.dmv-gc.com/service/decks" },
        { "@type": "ListItem", "position": 4, "name": "Kensington, MD", "item": "https://www.dmv-gc.com/service/decks/kensington-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to build a deck in Kensington, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deck construction in Kensington, MD typically costs between $14,000 and $75,000 depending on size, material, and features. A modest rear deck sized for Kensington's smaller lots runs $14,000–$28,000 in pressure-treated or cedar. A composite rear deck costs $22,000–$48,000. A larger composite deck with pergola or railing upgrade costs $42,000–$75,000. Kensington's smaller lots constrain maximum deck footprint compared to Potomac or Bethesda estate properties, but the community's character and MARC Brunswick Line access make quality outdoor living investments worthwhile. DMV-GC Group provides free in-home consultations with detailed estimates."
          }
        },
        {
          "@type": "Question",
          "name": "Does Kensington have its own permit process for deck building?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Kensington is an incorporated Town in Montgomery County with its own municipal government and building permit process — separate from Montgomery County DPS. All deck permits in the Town of Kensington are filed with the Town's permit office at 3710 Mitchell Street, not with Montgomery County. DMV-GC Group handles the Town of Kensington permit process in-house for all deck projects within the town boundaries, and verifies whether each Kensington-area address is within the town limits or in unincorporated Montgomery County before any application is filed."
          }
        },
        {
          "@type": "Question",
          "name": "What deck designs work best for Kensington's historic bungalow homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kensington's 1920s–40s bungalows and craftsman homes call for deck designs that respect the home's original character — proportionate in scale, with materials and railing styles that complement rather than clash with the existing architecture. Painted or stained pressure-treated decks with craftsman-style wood railings are a traditional choice that fits the bungalow aesthetic naturally. Composite decking in warm brown or grey tones is increasingly popular as a lower-maintenance alternative that also reads appropriately on these homes. Heavy-gauge aluminum or cable railing — commonly seen on contemporary homes — can look out of place on a 1930s bungalow without careful design consideration. DMV-GC Group designs every Kensington deck with the home's existing architectural character in mind."
          }
        },
        {
          "@type": "Question",
          "name": "How does a small lot affect deck design in Kensington?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kensington's lots — typically 5,000–8,000 sq ft — are smaller than most Montgomery County communities, and rear yard setback requirements further constrain the usable deck footprint. For a typical Kensington home, a rear deck of 200–350 sq ft is often the practical range after setbacks, side clearances, and existing landscaping are accounted for. Within that footprint, design efficiency matters: built-in seating eliminates the need for bulky furniture, integrated planter boxes frame the space without consuming additional yard, and a well-chosen railing creates enclosure and privacy without making the deck feel cramped. DMV-GC Group is experienced in designing decks that feel generous and functional within Kensington's smaller rear yard footprints."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for deck building in Kensington, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Kensington. We handle the Town of Kensington permit process for properties within the town limits and Montgomery County DPS permits for unincorporated addresses. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every deck project."
          }
        }
      ]
    }
  ]
};

const faqData = [
  { eventKey: "0", question: "How much does it cost to build a deck in Kensington, MD?", answer: "Deck construction in Kensington typically costs $14,000–$75,000 depending on size, material, and features. A small pressure-treated rear deck (160–220 sq ft) runs $14,000–$22,000. A composite rear deck (200–350 sq ft) costs $22,000–$48,000. A composite deck with pergola runs $36,000–$62,000. A screened porch addition costs $38,000–$72,000. Town of Kensington permit is included in every scope. DMV-GC Group provides free in-home consultations with detailed estimates." },
  { eventKey: "1", question: "Does the Town of Kensington have its own permit process for decks?", answer: "Yes. Kensington is an incorporated town with its own permit authority at 3710 Mitchell Street — separate from Montgomery County DPS. Properties within the town limits file with the Town; properties outside the limits (some Kensington-area addresses) use Montgomery County DPS. DMV-GC Group verifies the correct authority for every address and manages the Town of Kensington permit process in-house, including all structural drawings, correspondence, and inspection scheduling." },
  { eventKey: "2", question: "What deck design works best for Kensington's historic bungalows?", answer: "Proportionate rear decks with painted wood baluster railings and composite or cedar decking in warm tones are the most architecturally appropriate choice for Kensington's 1920s–40s bungalows and craftsman homes. Craftsman-style pergolas with square columns and simple brackets read naturally on these homes. Contemporary elements like horizontal cable railing or smooth-profile composite can work, but require more careful design consideration to avoid looking incongruous on older homes. DMV-GC Group designs every Kensington deck with the home's existing architecture as the starting point." },
  { eventKey: "3", question: "How does a small lot affect deck size in Kensington?", answer: "Kensington's typical lots (5,000–8,000 sq ft) combined with rear and side setback requirements often limit practical deck footprints to 160–350 sq ft. Within that range, design efficiency makes a significant difference — built-in seating, integrated planters, and thoughtful layout can make a 220 sq ft deck feel generous and functional for a family of four. DMV-GC Group calculates your specific lot's buildable footprint during the free consultation and designs to maximize it." },
  { eventKey: "4", question: "Can DMV-GC Group build a screened porch on a Kensington bungalow?", answer: "Yes — and a screened porch is one of the most historically appropriate additions possible on a Kensington craftsman or bungalow home. DMV-GC Group designs and builds complete screened porch additions — foundation, framing, roof structure, screening, and trim — with Town of Kensington permits and structural engineering included. A well-designed screened porch on a Kensington bungalow looks as though it was part of the original design." },
  { eventKey: "5", question: "Is DMV-GC Group licensed for deck building in Kensington, MD?", answer: "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Kensington. We manage the Town of Kensington permit process for properties within the town limits and Montgomery County DPS permits for unincorporated addresses. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every deck project in Kensington." }
];

export default function DecksKensingtonMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => { setActiveMenuItem("service"); }, []);
  return (
    <main>
      <div className="city-service-detail-page decks-kensington-md">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/services">Services</Link><span>›</span>
            <Link href="/service/decks">Deck Building</Link><span>›</span>
            Kensington, MD
          </nav>

          <div className="hero">
            <div className="hero-location-tag">📍 Serving Kensington, MD</div>
            <h1>Deck Building in Kensington, MD — Custom Deck Contractor for Historic Homes</h1>
            <div className="hero-meta">
              <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
              <span className="badge">✓ MHIC Licensed &amp; Insured</span>
              <span className="badge">✓ Town of Kensington Permits</span>
              <span className="badge">✓ Historic Home Design Expertise</span>
              <span className="badge dark">📞 +1 240-730-1292</span>
            </div>
          </div>

          <div className="character-banner">
            <div className="icon">🏡</div>
            <div>
              <h3>Kensington&apos;s 1920s–40s Bungalows and Craftsman Homes Deserve a Deck That Belongs — Not One That Clashes</h3>
              <p>Kensington is one of Montgomery County&apos;s most architecturally cohesive communities — a compact, walkable town of 1920s–40s bungalows, craftsman cottages, and American Foursquares built around the MARC Brunswick Line station. A deck here is not just a platform — it is an extension of a home with genuine architectural character. The wrong deck — oversized for the lot, wrong material, wrong railing style — can look conspicuously out of place on a 1930s bungalow. The right deck, designed to complement the home&apos;s proportions, roofline, and details, enhances both the home&apos;s livability and its curb appeal in a community that values its historic character. DMV-GC Group designs every Kensington deck with the home&apos;s existing architecture as the starting point — not as an afterthought.</p>
            </div>
          </div>

          <div className="intro-box">
            Looking for a trusted <strong>deck contractor in Kensington, MD</strong>? Whether you&apos;re adding a rear deck to a Connecticut Avenue bungalow, replacing a deteriorating wood deck on a Detrick Avenue craftsman, or designing a screened porch addition to take advantage of Kensington&apos;s tree-lined rear yards, DMV-GC Group&apos;s licensed design-build team understands the specific constraints and opportunities that Kensington&apos;s homes present — small lots, Town of Kensington permits (not Montgomery County), older foundations, mature rear yard trees, and the architectural character that makes this community distinctive. We design decks that fit Kensington and build them to last.
          </div>

          <div className="trust-bar">
            <div className="trust-item">
              <div className="icon">🏡</div>
              <strong>Historic Home Design</strong>
              <span>Decks that suit Kensington&apos;s character</span>
            </div>
            <div className="trust-item">
              <div className="icon">📋</div>
              <strong>Town Permits Handled</strong>
              <span>Town of Kensington — 3710 Mitchell St</span>
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

          <h2>Deck Building Services in Kensington, MD</h2>
          <p>
            From a modest rear yard platform on a Kensington bungalow to a fully designed screened porch addition, DMV-GC Group offers the full range of deck and outdoor living construction:
          </p>

          <div className="service-grid">
            <div className="service-item">Custom Rear Yard Deck Design &amp; Build</div>
            <div className="service-item">Composite Deck (Trex / TimberTech)</div>
            <div className="service-item">Pressure-Treated &amp; Cedar Deck</div>
            <div className="service-item">Screened Porch Addition</div>
            <div className="service-item">Deck Replacement &amp; Structural Rebuild</div>
            <div className="service-item">Pergola &amp; Shade Structure</div>
            <div className="service-item">Wood &amp; Cable Railing Systems</div>
            <div className="service-item">Built-In Seating &amp; Planter Boxes</div>
            <div className="service-item">Deck Step &amp; Landing Construction</div>
            <div className="service-item">Deck Lighting (Post, Step, Recessed)</div>
            <div className="service-item">Town of Kensington Permit Processing</div>
            <div className="service-item">Structural Assessment of Existing Decks</div>
          </div>

          <div className="author-box">
            <div className="author-avatar">🏠</div>
            <div className="author-info">
              <h4>About DMV-GC Group — Kensington&apos;s Licensed Custom Deck Contractor</h4>
              <p>DMV-GC Group is headquartered in nearby North Bethesda and has completed deck builds, basement renovations, kitchen remodels, and bathroom renovations throughout Kensington&apos;s historic neighborhoods. We understand the Town of Kensington permit process at 3710 Mitchell Street, the setback constraints on Kensington&apos;s smaller lots, the construction considerations of older bungalow foundations, and the design sensibility that makes Kensington&apos;s architectural character worth preserving. We hold a Maryland MHIC license and back every project with a 1-year workmanship warranty.</p>
              <div className="author-creds">
                <span className="cred">MHIC Licensed</span>
                <span className="cred">Town of Kensington Permits</span>
                <span className="cred">Bungalow Design Expertise</span>
                <span className="cred">Small-Lot Specialists</span>
                <span className="cred">4.9★ Rated</span>
                <span className="cred">1-Year Warranty</span>
              </div>
            </div>
          </div>

          <h2>Types of Decks We Build in Kensington, MD</h2>
          <p>
            Kensington&apos;s smaller lots and distinctive architectural character shape the deck types that work best here. Here is an honest assessment of what is practical and what looks right:
          </p>

          <div className="deck-type-grid">
            <div className="deck-type-card">
              <span className="deck-tag">Most Common in Kensington</span>
              <h3>Rear Yard Deck — Bungalow Scale</h3>
              <p>The most practical deck type for Kensington&apos;s typical home — a rear deck sized appropriately for the lot, at a scale that is proportionate to the 1920s–40s bungalow or craftsman above it. Typically 160–300 sq ft, accessed from the rear door of the kitchen or informal living space, with 2–4 steps to the yard. A bungalow-scale rear deck designed with period-appropriate details — square-topped baluster railings, painted to match the home&apos;s trim, with simple clean lines — looks as though it has always belonged there.</p>
              <div className="deck-cost">Typical Cost: $14,000 – $38,000</div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">Low-Maintenance Upgrade</span>
              <h3>Composite Rear Deck</h3>
              <p>Trex or TimberTech composite decking on a pressure-treated frame — the most popular choice for Kensington homeowners who want a deck that doesn&apos;t require annual staining or sealing. Composite&apos;s 25–30 year lifespan and minimal maintenance make it a smart choice for the busy professionals and families who make up much of Kensington&apos;s homeowner base. Available in warm brown and grey tones that read naturally on Kensington&apos;s older homes. DMV-GC Group specifies composite colors that complement each home&apos;s existing paint palette.</p>
              <div className="deck-cost">Typical Cost: $22,000 – $48,000</div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">Maximize Outdoor Living</span>
              <h3>Screened Porch Addition</h3>
              <p>A screened porch built off the rear of the home — extending the livable square footage into the rear yard while providing protection from Kensington&apos;s summer mosquitoes and afternoon sun. Screened porches read naturally on Kensington&apos;s craftsman and bungalow homes — they are a historically appropriate addition that enhances the home&apos;s character. Requires a building permit from the Town of Kensington and structural engineering for the roof and foundation. DMV-GC Group designs and builds complete screened porch additions from foundation to roofline.</p>
              <div className="deck-cost">Typical Cost: $38,000 – $72,000</div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">Where Deck Exists</span>
              <h3>Deck Replacement &amp; Structural Rebuild</h3>
              <p>Many of Kensington&apos;s older homes have existing wood decks — some built decades ago, some without permits, and many with deteriorating structural members that look acceptable on the surface but have compromised posts, ledger connections, or footing conditions below. DMV-GC Group performs honest structural assessments of existing Kensington decks before any replacement is scoped — identifying which components can be reused and which require full replacement, and filing the required Town of Kensington permit for the rebuild.</p>
              <div className="deck-cost">Typical Cost: $18,000 – $52,000</div>
            </div>
          </div>

          <h2>Small-Lot Deck Design in Kensington — Making the Most of What&apos;s There</h2>
          <p>
            Kensington&apos;s lots — typically 5,000–8,000 sq ft — are among the smaller in Montgomery County. Rear yard setback requirements and existing mature trees further constrain the buildable footprint. Within these constraints, design efficiency is the primary skill that determines whether a Kensington deck feels generous or cramped. Here are the approaches DMV-GC Group uses to maximize every square foot:
          </p>

          <div className="small-lot-grid">
            <div className="small-lot-box">
              <div className="icon">🪑</div>
              <h3>Built-In Seating</h3>
              <p>Integrated bench seating along one or two deck edges eliminates the need for bulky outdoor furniture that consumes half the deck area. A well-designed bench — with optional storage beneath — seats 6–8 guests comfortably in the same space where four chairs would fit nothing else.</p>
            </div>
            <div className="small-lot-box">
              <div className="icon">🌿</div>
              <h3>Integrated Planter Boxes</h3>
              <p>Planter boxes built into the railing or deck edge define the space, add privacy, bring greenery onto the deck, and avoid the visual clutter of freestanding containers crowding a smaller deck. On a 200 sq ft Kensington deck, planters frame the space without consuming any of it.</p>
            </div>
            <div className="small-lot-box">
              <div className="icon">📐</div>
              <h3>Right-Sized Proportions</h3>
              <p>A deck that is the right size for the lot and the home looks better than a deck that maxes out every inch of the setback envelope. DMV-GC Group designs Kensington decks to proportions that feel natural on the property — not to an arbitrary maximum.</p>
            </div>
            <div className="small-lot-box">
              <div className="icon">🌳</div>
              <h3>Tree-Aware Layout</h3>
              <p>Kensington&apos;s rear yards often have mature trees whose root zones limit where footings can be placed. DMV-GC Group identifies significant trees and their root zones during the consultation and designs the deck layout to avoid root conflicts — sometimes using longer joist spans to clear root zones without impacting the deck surface plan.</p>
            </div>
            <div className="small-lot-box">
              <div className="icon">🚪</div>
              <h3>Multiple Door Access</h3>
              <p>Where the home&apos;s rear layout allows, designing deck access from both the kitchen and the main living area makes the deck feel more integrated into daily life — not an occasionally visited appendage but a genuine extension of the home&apos;s interior flow.</p>
            </div>
            <div className="small-lot-box">
              <div className="icon">💡</div>
              <h3>Lighting for Evening Use</h3>
              <p>Step lighting, post cap lights, and low-voltage string lights extend the usable hours of a Kensington deck significantly — important when the deck&apos;s limited square footage means you want to use every hour of good weather it provides.</p>
            </div>
          </div>

          <h2>Choosing the Right Deck Material for Kensington&apos;s Historic Homes</h2>
          <p>
            Kensington&apos;s 1920s–40s bungalows and craftsman homes have a specific architectural vocabulary — horizontal lines, natural materials, covered porches, and painted trim. The deck material and railing style you choose either reinforces that vocabulary or works against it. Here is an honest guide:
          </p>

          <div className="material-grid">
            <div className="material-card">
              <h3>🟤 Composite Decking (Recommended)</h3>
              <p>Trex or TimberTech in warm brown tones reads naturally on Kensington&apos;s bungalows — it does not look conspicuously modern or suburban. The 25–30 year lifespan and no-stain maintenance make it the most practical choice for most Kensington homeowners. Specify a natural wood-grain texture rather than a smooth contemporary profile for the best fit with older homes. Pair with painted wood railings for a cohesive bungalow aesthetic.</p>
            </div>
            <div className="material-card">
              <h3>🌲 Pressure-Treated / Cedar (Traditional)</h3>
              <p>Painted pressure-treated or stained cedar is the most historically consistent material for Kensington&apos;s bungalows — it is what these homes would have had originally, and it looks correct when painted to match the home&apos;s trim color. Requires sealing or staining every 2–3 years to prevent weathering. The lower initial cost relative to composite is offset by higher long-term maintenance. Best choice where the client specifically wants the traditional painted wood look.</p>
            </div>
            <div className="material-card">
              <h3>🔩 Railing: Wood Baluster (Recommended for Bungalows)</h3>
              <p>Painted square-baluster wood railing — whether pressure-treated or composite post-and-rail systems — is the most architecturally appropriate railing style for Kensington&apos;s craftsman and bungalow homes. Simple, sturdy, period-appropriate. Painted to match the home&apos;s trim color it reads as intentional and integrated rather than as a generic builder deck component.</p>
            </div>
            <div className="material-card">
              <h3>⚙️ Railing: Cable or Glass (Use with Caution)</h3>
              <p>Horizontal cable railing and frameless glass — popular on contemporary and mid-century modern homes — can look incongruous on Kensington&apos;s 1920s–30s craftsman homes. Where a client specifically wants cable or glass railing, DMV-GC Group designs the overall deck aesthetic to ensure the railing choice reads as an intentional modern contrast rather than a stylistic mismatch.</p>
            </div>
          </div>

          <h2>Town of Kensington Building Permits — What Homeowners Need to Know</h2>
          <p>
            Kensington is an incorporated Town in Montgomery County with its own municipal government and building permit authority — distinct from Montgomery County DPS. Many Kensington homeowners — and some contractors — mistakenly file deck permits with Montgomery County rather than with the Town.
          </p>

          <div className="spec-box">
            <h3>📋 Town of Kensington Permit Process for Decks</h3>
            <ul>
              <li><strong>Permit authority:</strong> Town of Kensington, 3710 Mitchell Street, Kensington, MD 20895. All building permits for properties within the town limits are filed here — not with Montgomery County DPS.</li>
              <li><strong>What requires a permit:</strong> Any new deck attached to the home, any deck over 30 inches above grade, any deck over 200 sq ft, and any structural deck replacement or rebuild. Routine deck repair and minor maintenance typically does not require a permit — but any structural modification does.</li>
              <li><strong>Town vs County jurisdiction:</strong> The Town of Kensington&apos;s boundaries do not cover all addresses with a Kensington mailing address. Some properties on the periphery of the community are in unincorporated Montgomery County and require MoCo DPS permits. DMV-GC Group verifies the correct permit authority for every Kensington-area address using parcel boundary data before any application is filed.</li>
              <li><strong>Setback requirements:</strong> The Town of Kensington has specific rear and side yard setback requirements for accessory structures. On Kensington&apos;s smaller lots — typically 5,000–8,000 sq ft — the rear setback in particular can meaningfully constrain the usable deck depth. DMV-GC Group confirms the applicable setback requirements and calculates the maximum buildable footprint for your specific lot during the consultation.</li>
              <li><strong>Structural drawings:</strong> Town of Kensington deck permits require structural drawings. DMV-GC Group&apos;s in-house team prepares all required structural documentation for permit submission.</li>
              <li><strong>Inspection schedule:</strong> The Town conducts required footing and framing inspections during construction. DMV-GC Group schedules and manages all required Town of Kensington inspections as a standard part of every project.</li>
            </ul>
          </div>

          <div className="note">
            ⚠️ <strong>Permit Jurisdiction Alert:</strong> Filing a deck permit with Montgomery County DPS when your property is within the Town of Kensington — or vice versa — produces an invalid permit and no valid inspection record. DMV-GC Group has verified this distinction on every Kensington project we have managed and catches jurisdiction errors before any permit is filed.
          </div>

          <h2>Deck Features That Work on Kensington Homes</h2>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="icon">🌿</div>
              <strong>Pergola &amp; Shade</strong>
              <span>A wood pergola off the rear of a Kensington bungalow is architecturally natural — craftsman-style brackets and square columns complement the home&apos;s horizontal lines</span>
            </div>
            <div className="feature-box">
              <div className="icon">💡</div>
              <strong>Low-Voltage Lighting</strong>
              <span>Post cap lights, step lights, and understated string lighting — evening use without disrupting Kensington&apos;s quiet residential character</span>
            </div>
            <div className="feature-box">
              <div className="icon">🪑</div>
              <strong>Built-In Bench Seating</strong>
              <span>Integrated seating maximizes usable space on smaller Kensington lots — freeing the deck surface of furniture clutter while seating more guests</span>
            </div>
            <div className="feature-box">
              <div className="icon">🌱</div>
              <strong>Planter Boxes</strong>
              <span>Deck-edge planter boxes bring Kensington&apos;s garden character onto the deck — privacy, greenery, and definition without consuming square footage</span>
            </div>
            <div className="feature-box">
              <div className="icon">🚪</div>
              <strong>Screened Porch Upgrade</strong>
              <span>Adding screening to a rear deck or building a new screened porch addition — a historically natural move for Kensington&apos;s craftsman homes</span>
            </div>
            <div className="feature-box">
              <div className="icon">🔒</div>
              <strong>Privacy Screening</strong>
              <span>Lattice panels, privacy screens, or dense plantings along the deck railing — important on Kensington&apos;s closer lot spacing where neighbors are nearby</span>
            </div>
          </div>

          <h2>Our Deck Building Process in Kensington</h2>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Free In-Home Consultation &amp; Site Assessment</h3>
                <p>We visit your Kensington home, walk the rear yard, note the home&apos;s architectural character, assess the lot for setback constraints and mature trees, review any existing deck condition, and discuss your vision, priorities, and budget. No cost, no obligation.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Jurisdiction &amp; Setback Verification</h3>
                <p>We confirm whether your Kensington address is within the Town limits (Town permit) or in unincorporated MoCo (county permit), and calculate the maximum buildable footprint after setbacks for your specific lot. This shapes the deck design from the first draft.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>Custom Deck Design — Character-Appropriate</h3>
                <p>Our design team develops a deck layout, railing style, material specification, and feature plan that complements your Kensington home&apos;s existing architectural character. For bungalows and craftsman homes, we default to proportionate scale, painted wood railings, and warm-tone composite or wood decking — unless the client directs otherwise. Full plan and elevation drawings produced for permit submission.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>Town of Kensington Permit Filing</h3>
                <p>We file the building permit application with the Town of Kensington at 3710 Mitchell Street, including all required structural drawings. Our team manages all Town correspondence, plan review responses, and inspection scheduling throughout the project.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">5</div>
              <div className="step-content">
                <h3>Site Prep, Footings &amp; Framing</h3>
                <p>Post holes drilled to frost depth, sized and located to avoid significant tree root zones. Concrete footings poured and cured. Pressure-treated framing installed per structural drawings, with Town footing inspection scheduled before concrete is poured.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">6</div>
              <div className="step-content">
                <h3>Decking, Railing, Features &amp; Lighting</h3>
                <p>Decking boards installed, railing system assembled, stairs built, built-in seating or planters installed, pergola framed where included, and lighting wired. Town framing inspection scheduled at the appropriate stage.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">7</div>
              <div className="step-content">
                <h3>Town Final Inspection, Walkthrough &amp; 1-Year Warranty</h3>
                <p>Town of Kensington final inspection managed by our permit team. After inspection approval, we conduct a thorough walkthrough with you, address every punch list item, and activate your 1-year workmanship warranty.</p>
              </div>
            </div>
          </div>

          <h2>Deck Building Cost in Kensington, MD</h2>
          <p>
            Here is a realistic cost breakdown for <strong>deck construction in Kensington, Maryland</strong>. Costs reflect Kensington&apos;s typical smaller lot scale and the quality finish level appropriate to these distinctive homes:
          </p>

          <table className="cost-table">
            <tbody>
              <tr>
                <th>Deck Type / Scope</th>
                <th>Typical Cost Range</th>
                <th>Notes for Kensington</th>
              </tr>
              <tr>
                <td>Small Rear Deck — Pressure-Treated (160–220 sq ft)</td>
                <td>$14,000 – $22,000</td>
                <td>Painted PT with wood baluster railing. Town permit included. Bungalow-appropriate scale and proportion.</td>
              </tr>
              <tr>
                <td>Rear Deck — Cedar with Painted Railing (200–300 sq ft)</td>
                <td>$20,000 – $34,000</td>
                <td>Traditional material, natural wood look. Stain or paint to match home trim. Town permit included.</td>
              </tr>
              <tr>
                <td>Composite Rear Deck — Trex or TimberTech (200–350 sq ft)</td>
                <td>$22,000 – $48,000</td>
                <td>Low-maintenance, 25–30 year lifespan. Warm brown tone recommended for bungalow character. Town permit included.</td>
              </tr>
              <tr>
                <td>Composite Deck with Pergola (250–350 sq ft)</td>
                <td>$36,000 – $62,000</td>
                <td>Craftsman-style wood pergola with square columns — architecturally natural on Kensington homes. Shade + structure + character.</td>
              </tr>
              <tr>
                <td>Screened Porch Addition</td>
                <td>$38,000 – $72,000</td>
                <td>New rear porch structure with screened walls, roof, and floor — extends living space into rear yard. Historically appropriate for bungalow homes. Town permit + structural engineering.</td>
              </tr>
              <tr>
                <td>Deck Replacement (Remove &amp; Rebuild)</td>
                <td>$18,000 – $52,000</td>
                <td>Demolition and disposal of existing structure + new deck. Permit required even for same-footprint replacement. Structural assessment included.</td>
              </tr>
              <tr>
                <td>Built-In Seating (add-on)</td>
                <td>$2,500 – $6,000</td>
                <td>Integrated bench seating with optional storage — highly recommended for Kensington&apos;s smaller deck footprints.</td>
              </tr>
            </tbody>
          </table>

          <div className="tip">
            💡 <strong>Kensington Deck Value:</strong> A well-designed composite deck on a Kensington bungalow — proportionate to the lot, with a railing style that suits the home — adds genuine value in a community where outdoor living space is at a premium on smaller lots. MARC Brunswick Line walkability and Kensington&apos;s antique row character attract buyers who value the community specifically; a quality deck enhances the home&apos;s appeal to exactly those buyers at resale.
          </div>

          <div className="cta-banner">
            <h2>Get a Free Deck Consultation in Kensington</h2>
            <p>We&apos;ll visit your Kensington home, assess the lot and setbacks, discuss design options that suit your home&apos;s character, and provide a detailed estimate. Town of Kensington permit expertise included. No cost, no obligation.</p>
            <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
          </div>

          <h2>What Kensington Homeowners Say About DMV-GC Group</h2>

          <div className="review-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our 1932 bungalow on Connecticut Avenue needed a rear deck that didn&apos;t look out of place. DMV-GC Group designed a Trex deck with painted wood railings that matches our trim exactly. The Town of Kensington permit was handled by their team. It looks like it&apos;s always been part of the house.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Connecticut Avenue, Kensington MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;We had an old PT deck that was sagging — built in the 1990s without a permit. DMV-GC Group assessed it, confirmed it needed full replacement, filed the Town permit correctly, and built us a new composite deck with a small pergola. The craftsman brackets on the pergola suit the house perfectly.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Detrick Avenue, Kensington MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our lot is only 6,000 sq ft — we thought there wasn&apos;t room for a useful deck. DMV-GC Group showed us how built-in seating and planters along the edges could make a 220 sq ft deck feel generous. They were right. We use it every weekend. The Town permit came through without any issues.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Plyers Mill Road, Kensington MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Another contractor filed our permit with Montgomery County DPS instead of the Town. DMV-GC Group caught it immediately, withdrew the wrong application, and filed with the Town of Kensington correctly. That alone saved us months of delays. The deck itself is excellent — cedar painted sage green to match the house.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Howard Avenue, Kensington MD</span></div>
            </div>
          </div>

          <div className="highlight">
            <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Kensington homeowners trust DMV-GC Group for deck projects that understand the Town&apos;s permit process, respect the small-lot constraints, and deliver designs that genuinely suit the architectural character of this distinctive historic community.</p>
          </div>

          <h2>Serving Kensington and Surrounding Areas for Deck Building</h2>

          <div className="areas-grid">
            <span className="area-pill">Kensington, MD</span>
            <span className="area-pill">Connecticut Avenue</span>
            <span className="area-pill">Detrick Avenue</span>
            <span className="area-pill">Howard Avenue</span>
            <span className="area-pill">Plyers Mill Road</span>
            <span className="area-pill">Garrett Park</span>
            <span className="area-pill">North Bethesda</span>
            <span className="area-pill">Wheaton</span>
            <span className="area-pill">Silver Spring</span>
            <span className="area-pill">Rockville</span>
          </div>

          <div className="nearby-box">
            <h3>Also serving Garrett Park, MD — Kensington&apos;s neighbor on the Brunswick Line</h3>
            <p>Garrett Park sits directly west of Kensington on the MARC Brunswick Line, with a similarly historic housing stock and its own Town permit authority. DMV-GC Group builds custom decks in Garrett Park with the same historic-home design sensitivity and Town permit expertise. <Link href="/service/decks">View our full deck building service page &rarr;</Link></p>
          </div>

          <h2>Frequently Asked Questions — Deck Building in Kensington, MD</h2>
          <Accordion defaultActiveKey="0" flush>
            {faqData.map((faq) => (
              <Accordion.Item eventKey={faq.eventKey} key={faq.eventKey}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="internal-links">
            <h2>Explore Our Other Services in Kensington</h2>
            <ul>
              <li><Link href="/service/kitchen-remodeling">Kitchen Remodeling in Kensington, MD</Link></li>
              <li><Link href="/service/bathroom-remodeling/kensington-md">Bathroom Remodeling in Kensington, MD</Link></li>
              <li><Link href="/service/basement-remodeling/kensington-md">Basement Remodeling in Kensington, MD</Link></li>
              <li><Link href="/service/adu/kensington-md">ADU Construction in Kensington, MD</Link></li>
              <li><Link href="/service/home-additions">Home Additions in Kensington, MD</Link></li>
              <li><Link href="/service/design-build">Design-Build Contractor in Kensington, MD</Link></li>
            </ul>
          </div>

          <div className="cta-banner">
            <h2>Ready to Build Your Kensington Deck?</h2>
            <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. We&apos;ll design a deck that suits your Kensington home&apos;s character, confirm the Town permit requirements, and build it to last.</p>
            <Link href="/contact-us" className="cta-btn">Get Free Deck Estimate in Kensington &rarr;</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
          </div>

        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
    </main>
  );
}
