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
      "description": "Licensed deck builder serving Garrett Park, MD. Specializing in character-appropriate rear yard deck design for Garrett Park's National Register historic district homes — 1920s–40s bungalows, craftsman cottages, and American Foursquares — with Town of Garrett Park permit expertise.",
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
        { "@type": "City", "name": "Garrett Park", "sameAs": "https://en.wikipedia.org/wiki/Garrett_Park,_Maryland" },
        { "@type": "City", "name": "Kensington" },
        { "@type": "City", "name": "Rockville" },
        { "@type": "City", "name": "North Bethesda" },
        { "@type": "City", "name": "Wheaton" }
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "MHIC License", "credentialCategory": "Maryland Home Improvement Contractor License" }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "97", "bestRating": "5" },
      "priceRange": "$$$"
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/decks/garrett-park-md#service",
      "serviceType": "Deck Building",
      "name": "Deck Building in Garrett Park, MD",
      "alternateName": ["Custom Deck Construction", "Historic District Deck", "Bungalow Deck", "Rear Yard Deck", "Craftsman Deck"],
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Garrett Park", "sameAs": "https://en.wikipedia.org/wiki/Garrett_Park,_Maryland" },
      "description": "Custom deck building in Garrett Park, MD. Character-appropriate rear yard decks for Garrett Park's National Register historic district homes — designed to complement the architectural vocabulary of 1920s–40s bungalows and craftsman cottages, permitted through the Town of Garrett Park, and built with the quality these distinctive homes deserve.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "16000", "maxPrice": "72000", "priceCurrency": "USD" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Decks", "item": "https://www.dmv-gc.com/service/decks" },
        { "@type": "ListItem", "position": 4, "name": "Garrett Park, MD", "item": "https://www.dmv-gc.com/service/decks/garrett-park-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to build a deck in Garrett Park, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deck construction in Garrett Park, MD typically costs between $16,000 and $72,000 depending on size, material, and scope. A modest rear deck for a Garrett Park bungalow in pressure-treated or cedar runs $16,000–$26,000. A composite rear deck costs $22,000–$44,000. A composite deck with pergola or screened porch conversion runs $38,000–$72,000. Garrett Park's small lots constrain maximum deck footprint, but the community's distinctive character and walkable MARC Brunswick Line access make quality outdoor living investments worthwhile. DMV-GC Group provides free in-home consultations with detailed estimates."
          }
        },
        {
          "@type": "Question",
          "name": "Does Garrett Park have its own permit process for deck building?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Garrett Park is an incorporated Town in Montgomery County with its own municipal government and building permit office at 4600 Oxford Street. All deck building permits for properties within the Town of Garrett Park are filed with the Town's permit office — not with Montgomery County DPS. DMV-GC Group handles the Town of Garrett Park permit process in-house for all deck projects within the town boundaries, verifying whether each address is within the town limits or in adjacent unincorporated Montgomery County before any application is filed."
          }
        },
        {
          "@type": "Question",
          "name": "Does Garrett Park's historic district designation affect deck building?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Garrett Park is listed on the National Register of Historic Places as a historic district. For deck construction specifically: interior work and rear yard deck construction that does not alter the primary street-facing facade of the home typically proceeds with standard Town of Garrett Park building permits and does not require Maryland Historical Trust review. However, any exterior modification visible from a public street — a new opening in the front facade, significant changes to a prominent side elevation — would require historic review. DMV-GC Group assesses every Garrett Park deck project for historic district implications during the free consultation and designs rear yard decks to avoid modifications that would trigger historic review."
          }
        },
        {
          "@type": "Question",
          "name": "What deck designs work best for Garrett Park's historic bungalow homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Garrett Park's 1920s–40s bungalows, craftsman cottages, and American Foursquares have a specific architectural vocabulary — natural materials, horizontal lines, overhanging eaves, and covered porches. The most appropriate deck designs for these homes are proportionate in scale, use warm wood tones or natural material references, and employ railing styles that complement rather than clash with the home's period character. Painted wood baluster railings, craftsman-style pergola posts, and cedar or composite in warm brown tones all read naturally on Garrett Park's homes. Cable railing and contemporary composite profiles can look incongruous on 1930s bungalows without careful design consideration. DMV-GC Group designs every Garrett Park deck with the home's architectural period in mind."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for deck building in Garrett Park, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Garrett Park and Montgomery County. We handle the Town of Garrett Park permit process for properties within the town limits and Montgomery County DPS permits for adjacent unincorporated addresses. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every deck project in Garrett Park."
          }
        }
      ]
    }
  ]
};

const faqData = [
  { eventKey: "0", question: "How much does it cost to build a deck in Garrett Park, MD?", answer: "Deck construction in Garrett Park typically costs $16,000–$72,000 depending on size, material, and scope. A small cedar or pressure-treated rear deck (160–220 sq ft) runs $16,000–$26,000. A composite rear deck (200–300 sq ft) costs $22,000–$44,000. A composite deck with craftsman pergola runs $36,000–$60,000. A screened porch addition costs $40,000–$72,000. A deck replacement runs $20,000–$50,000. Town of Garrett Park permit included in every scope. DMV-GC Group provides free in-home consultations with detailed estimates." },
  { eventKey: "1", question: "Does the Town of Garrett Park have its own permit process for decks?", answer: "Yes. Garrett Park is an incorporated Town with its own permit office at 4600 Oxford Street — separate from Montgomery County DPS. Properties within the town limits file with the Town; properties just outside the town boundary (some Garrett Park-area addresses) use Montgomery County DPS. DMV-GC Group verifies the correct authority for every address and manages the Town of Garrett Park permit process in-house, including structural drawings, correspondence, and inspection scheduling." },
  { eventKey: "2", question: "Does Garrett Park's National Register historic district designation prevent deck building?", answer: "No — not for rear yard deck construction. Garrett Park's National Register listing recognizes the community's historic significance but does not impose local design review requirements on private property owners for rear yard construction that does not alter the primary street-facing facade. Rear yard decks, screened porch additions at the rear, and pergolas in the rear yard proceed with standard Town of Garrett Park building permits without historic design review in virtually all cases. DMV-GC Group assesses every project for historic district implications during the consultation and designs to avoid any scope that would trigger review." },
  { eventKey: "3", question: "What deck design suits a Garrett Park craftsman bungalow?", answer: "A proportionate rear deck — 160–280 sq ft — in warm-tone composite or stained cedar, with painted square-baluster wood railing matching the home's trim, and 2–4 steps to the rear yard. Optional craftsman-style pergola with square columns and simple brackets. Built-in bench seating and deck-edge planter boxes to maximize the smaller lot footprint. This is the design vocabulary that belongs on Garrett Park's 1920s–40s homes — it complements rather than clashes with the home's existing architectural character." },
  { eventKey: "4", question: "Is DMV-GC Group licensed for deck building in Garrett Park, MD?", answer: "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Garrett Park. We manage the Town of Garrett Park permit process for properties within the town limits and Montgomery County DPS permits for adjacent unincorporated addresses. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every Garrett Park deck project." }
];

export default function DecksGarrettParkMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => { setActiveMenuItem("service"); }, []);
  return (
    <main>
      <div className="city-service-detail-page decks-garrett-park-md">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/services">Services</Link><span>›</span>
            <Link href="/service/decks">Deck Building</Link><span>›</span>
            Garrett Park, MD
          </nav>

          <div className="hero">
            <div className="hero-location-tag">📍 Serving Garrett Park, MD</div>
            <h1>Deck Building in Garrett Park, MD — Custom Deck Contractor for Historic Homes</h1>
            <div className="hero-meta">
              <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
              <span className="badge">✓ MHIC Licensed &amp; Insured</span>
              <span className="badge">✓ Town of Garrett Park Permits</span>
              <span className="badge">✓ Historic District Design Expertise</span>
              <span className="badge dark">📞 +1 240-730-1292</span>
            </div>
          </div>

          <div className="historic-banner">
            <div className="icon">🏛️</div>
            <div>
              <h3>Garrett Park Is on the National Register of Historic Places — Every Deck Project Here Starts with Understanding What That Means in Practice</h3>
              <p>Garrett Park is one of a small number of residential communities in Montgomery County listed on the National Register of Historic Places as a historic district — a recognition of its intact collection of late Victorian, craftsman, and bungalow architecture clustered around the MARC Brunswick Line station. That designation matters to deck building in a specific, practical way: rear yard deck construction that does not alter the primary street-facing facade of the home proceeds with standard Town of Garrett Park building permits and does not require Maryland Historical Trust review. But any exterior modification visible from a public street — a new opening in the front elevation, changes to a prominent facade — triggers historic review. DMV-GC Group assesses every Garrett Park deck project for historic district implications before any design is finalized, and defaults to rear yard siting that avoids triggering historic review in virtually every case.</p>
            </div>
          </div>

          <div className="intro-box">
            Looking for a trusted <strong>deck contractor in Garrett Park, MD</strong>? Garrett Park&apos;s collection of 1890s–1940s craftsman cottages, bungalows, and Victorian homes along Strathmore Avenue and Oxford Street form one of the most architecturally coherent small communities in Montgomery County. A deck here requires a contractor who understands the Town of Garrett Park&apos;s own permit office at 4600 Oxford Street, the practical implications of the National Register historic district designation for rear yard construction, the small lot constraints that define Garrett Park&apos;s residential scale, and the design sensibility that these homes deserve. DMV-GC Group brings all of this — designing character-appropriate rear decks, handling the Town permit process in-house, and building to the quality standard that Garrett Park&apos;s distinctive homes warrant.
          </div>

          <div className="trust-bar">
            <div className="trust-item">
              <div className="icon">🏛️</div>
              <strong>Historic District Expertise</strong>
              <span>National Register — rear deck design strategy</span>
            </div>
            <div className="trust-item">
              <div className="icon">📋</div>
              <strong>Town Permits — 4600 Oxford St</strong>
              <span>Town of Garrett Park — not MoCo DPS</span>
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

          <h2>Deck Building Services in Garrett Park, MD</h2>

          <div className="service-grid">
            <div className="service-item">Custom Rear Yard Deck Design &amp; Build</div>
            <div className="service-item">Composite Deck (Trex / TimberTech)</div>
            <div className="service-item">Cedar &amp; Pressure-Treated Deck</div>
            <div className="service-item">Screened Porch Addition</div>
            <div className="service-item">Craftsman-Style Pergola</div>
            <div className="service-item">Deck Replacement &amp; Structural Rebuild</div>
            <div className="service-item">Wood Baluster &amp; Cable Railing Systems</div>
            <div className="service-item">Built-In Seating &amp; Planter Boxes</div>
            <div className="service-item">Deck Lighting Systems</div>
            <div className="service-item">Town of Garrett Park Permit Filing</div>
            <div className="service-item">Historic District Implication Assessment</div>
            <div className="service-item">Structural Assessment of Existing Decks</div>
          </div>

          <div className="author-box">
            <div className="author-avatar">🏠</div>
            <div className="author-info">
              <h4>About DMV-GC Group — Garrett Park&apos;s Licensed Deck Contractor</h4>
              <p>DMV-GC Group is based in nearby North Bethesda and has completed deck builds, basement renovations, kitchen and bathroom remodels throughout Garrett Park&apos;s historic neighborhood. We understand the Town of Garrett Park permit process at 4600 Oxford Street, the practical implications of the National Register historic district designation for rear yard construction, the small lot constraints typical of Garrett Park homes, and the design sensibility appropriate to this community&apos;s craftsman and bungalow architectural character. We hold a Maryland MHIC license and back every project with a 1-year workmanship warranty.</p>
              <div className="author-creds">
                <span className="cred">MHIC Licensed</span>
                <span className="cred">Town of Garrett Park Permits</span>
                <span className="cred">Historic District Strategy</span>
                <span className="cred">Craftsman Design Expertise</span>
                <span className="cred">4.9★ Rated</span>
                <span className="cred">1-Year Warranty</span>
              </div>
            </div>
          </div>

          <h2>Types of Decks We Build in Garrett Park, MD</h2>
          <p>
            Garrett Park&apos;s small lots and historic architectural character shape every deck project here. These are the deck types that work best in this distinctive community:
          </p>

          <div className="deck-type-grid">
            <div className="deck-type-card">
              <span className="deck-tag">Most Appropriate — All Garrett Park Homes</span>
              <h3>Rear Yard Deck — Period-Appropriate Design</h3>
              <p>A rear yard deck sized to Garrett Park&apos;s typical lot footprint — 160–300 sq ft — and designed with materials and details that complement the home&apos;s craftsman or bungalow architecture. Accessed from the kitchen or rear living space. Painted wood baluster railing in a style consistent with the home&apos;s trim. Warm-tone composite or stained cedar decking. Two to four steps to the rear yard. This is the deck that looks like it belongs to a 1930s craftsman home — because the design started with the home&apos;s character, not with a generic catalog page. Town of Garrett Park permit included.</p>
              <div className="deck-cost">Typical Cost: $16,000 – $40,000</div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">Best Investment on Smaller Lots</span>
              <h3>Composite Rear Deck — Low Maintenance</h3>
              <p>Trex or TimberTech composite in warm brown or cedar-tone finishes on a pressure-treated frame. The low maintenance of composite is particularly valuable in Garrett Park, where many homeowners are long-term residents who want outdoor space they can enjoy without annual maintenance commitments. Composite also holds its color in Garrett Park&apos;s partially shaded rear yards — an advantage over pressure-treated or cedar that can grey and check in dappled sun conditions. Paired with painted wood railings for the most period-compatible result.</p>
              <div className="deck-cost">Typical Cost: $22,000 – $44,000</div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">Historically Authentic Addition</span>
              <h3>Screened Porch Addition</h3>
              <p>A screened porch built off the rear of the home is among the most historically appropriate additions possible on a Garrett Park bungalow or craftsman cottage — these structures were commonly built with sleeping porches and side porches as original features. A rear screened porch extends living space into the yard, provides protection from summer mosquitoes, and reads as a natural extension of the home&apos;s original porch-building tradition. Requires Town of Garrett Park building permit and structural engineering for the roof. DMV-GC Group designs screened porches to match the home&apos;s existing exterior material and trim profile.</p>
              <div className="deck-cost">Typical Cost: $40,000 – $72,000</div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">Where Deck Exists</span>
              <h3>Deck Replacement &amp; Structural Rebuild</h3>
              <p>Many of Garrett Park&apos;s older homes have existing wood decks — some built decades ago, some without Town permits, and many with structural members that have deteriorated in the community&apos;s partially shaded, periodically wet rear yard conditions. DMV-GC Group performs structural assessments of existing Garrett Park decks before any replacement is scoped — identifying what can be reused and what requires full replacement. Town of Garrett Park permit required for structural deck replacement regardless of footprint change. Replacement is often the opportunity to upgrade material to composite and refresh the design for period compatibility.</p>
              <div className="deck-cost">Typical Cost: $20,000 – $50,000</div>
            </div>
          </div>

          <h2>Garrett Park&apos;s National Register Historic District — What It Means for Your Deck Project</h2>
          <p>
            Garrett Park&apos;s historic district listing is frequently misunderstood — homeowners sometimes assume it prevents all exterior construction, and contractors sometimes ignore it entirely. The reality is more specific and more practical than either extreme. Here is what it actually means for deck building:
          </p>

          <div className="historic-grid">
            <div className="historic-card">
              <h3>✅ What Typically Does NOT Require Historic Review</h3>
              <p>Rear yard deck construction that does not alter the primary street-facing facade of the home. This includes: a new deck accessed from the rear of the home, egress steps from a rear door to the yard, a pergola or shade structure in the rear yard, a screened porch addition at the rear, and railing installation on the rear deck. These projects proceed with standard Town of Garrett Park building permits. National Register listing alone — without a local historic district ordinance — does not give local government authority to block rear yard construction.</p>
            </div>
            <div className="historic-card">
              <h3>⚠️ What May Require Additional Review</h3>
              <p>Any exterior modification visible from a public street — a new opening in the front or side facade visible from the street, significant changes to the primary elevation, removal of original architectural features on the primary facades. For deck projects specifically, these scenarios are unusual — rear decks don&apos;t typically require front facade modification. DMV-GC Group assesses every Garrett Park deck project during the consultation and designs to avoid any scope that would trigger historic review.</p>
            </div>
            <div className="historic-card">
              <h3>🏛️ Federal vs Local Historic Designation</h3>
              <p>National Register listing is a federal recognition of historic significance — it does not automatically impose local design review requirements on private property owners. Maryland does have state historic tax credit programs tied to the National Register, but these are voluntary incentives, not restrictions. The relevant permit authority for Garrett Park deck projects is the Town of Garrett Park at 4600 Oxford Street — which issues standard building permits for rear yard construction without historic design review.</p>
            </div>
            <div className="historic-card">
              <h3>🎯 DMV-GC Group&apos;s Default Design Strategy</h3>
              <p>Regardless of whether a specific Garrett Park deck project technically requires historic review, DMV-GC Group designs every deck here with the home&apos;s historic character as the starting point. A period-appropriate deck that respects the craftsman or bungalow vocabulary of the home is both better architecture and better investment — it enhances rather than undermines the home&apos;s historic value in a community that attracted buyers specifically because of its architectural character.</p>
            </div>
          </div>

          <h2>Town of Garrett Park Building Permits — What Homeowners Need to Know</h2>

          <div className="spec-box">
            <h3>📋 Town of Garrett Park Permit Process for Decks</h3>
            <ul>
              <li><strong>Permit authority:</strong> Town of Garrett Park, 4600 Oxford Street, Garrett Park, MD 20896. All building permits for properties within the town limits are filed here — not with Montgomery County DPS. Garrett Park is an incorporated Town with its own municipal permit authority.</li>
              <li><strong>Town vs County jurisdiction:</strong> The Town of Garrett Park&apos;s boundaries are small and specific — not all addresses with a Garrett Park mailing address are within the town limits. Some properties on the periphery of the community are in unincorporated Montgomery County and require MoCo DPS permits. DMV-GC Group verifies the correct permit authority for every Garrett Park-area address using parcel boundary data before any application is filed.</li>
              <li><strong>What requires a permit:</strong> Any new deck attached to the home, any deck over 30 inches above grade, any deck 200 sq ft or larger, and any structural deck replacement or rebuild. Routine deck maintenance and minor repair typically does not require a permit.</li>
              <li><strong>Structural drawings required:</strong> Town of Garrett Park deck permits require structural drawings showing footing design, framing plan, and connection details. DMV-GC Group&apos;s team prepares all required structural documentation for permit submission.</li>
              <li><strong>Setback requirements:</strong> The Town of Garrett Park has specific rear and side yard setback requirements. Garrett Park&apos;s lots — typically 7,000–10,000 sq ft — are modest in size, and setbacks meaningfully constrain the maximum rear deck footprint. DMV-GC Group calculates the buildable envelope for every Garrett Park lot during the consultation before any deck is designed.</li>
              <li><strong>Inspection schedule:</strong> The Town conducts required footing and framing inspections. DMV-GC Group schedules and manages all required Town inspections as a standard part of every Garrett Park project.</li>
            </ul>
          </div>

          <div className="note">
            ⚠️ <strong>Common Mistake:</strong> Garrett Park and Kensington are neighboring towns — both are incorporated with their own permit offices. A contractor who files a Garrett Park permit with Montgomery County DPS (or with Kensington&apos;s Town office) produces an invalid permit with no valid inspection record. DMV-GC Group has verified jurisdiction for every Garrett Park and Kensington project and catches this error before any application is filed.
          </div>

          <h2>Choosing Deck Materials for Garrett Park&apos;s Historic Homes</h2>
          <p>
            Material selection for a Garrett Park deck is as much an architectural decision as a performance one. The right material reinforces the home&apos;s historic character; the wrong one undermines it, regardless of how well the deck is built.
          </p>

          <div className="material-grid">
            <div className="material-card">
              <h3>🟤 Composite — Warm Tones (Recommended)</h3>
              <p>Trex or TimberTech composite in warm brown or cedar tones is the most practical choice for most Garrett Park homes — low maintenance, long-lived, and available in finishes that reference natural wood convincingly. Specify a wood-grain texture profile (not smooth/contemporary) for the most period-compatible appearance. Pair with painted wood baluster railings to complete the craftsman aesthetic. Shaded rear yards in Garrett Park benefit from composite&apos;s stable coloring — composite does not grey and check the way exposed cedar does in dappled conditions.</p>
            </div>
            <div className="material-card">
              <h3>🌲 Cedar (Traditional Natural Choice)</h3>
              <p>Stained or painted cedar is the most historically consistent material choice for Garrett Park bungalows — natural wood, appropriate grain, available in any stain color to match the home&apos;s trim. Requires staining or sealing every 2–3 years. In Garrett Park&apos;s partially shaded conditions, cedar maintenance is more frequent than in full-sun suburban yards. Best for homeowners who specifically want the natural wood look and are committed to the maintenance schedule.</p>
            </div>
            <div className="material-card">
              <h3>🔩 Painted Wood Baluster Railing (Recommended)</h3>
              <p>Square-baluster wood railing — pressure-treated or composite post-and-rail system — painted to match the home&apos;s trim color is the most architecturally appropriate railing style for Garrett Park&apos;s bungalows and craftsman homes. Simple, period-correct, and reads as an intentional extension of the home&apos;s existing exterior vocabulary. The single most important railing choice for historic character compatibility in Garrett Park.</p>
            </div>
            <div className="material-card">
              <h3>⚙️ Cable Railing (Use Selectively)</h3>
              <p>Horizontal cable railing is popular for its modern aesthetic and unobstructed views — but on a 1920s craftsman bungalow it can look conspicuously anachronistic without careful overall design framing. DMV-GC Group will build cable railing on a Garrett Park home when a client specifically requests it, but we share our honest design assessment first. In most cases, painted wood baluster railing produces a more appropriate and timeless result on these homes.</p>
            </div>
          </div>

          <h2>Deck Features That Suit Garrett Park Homes</h2>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="icon">🌿</div>
              <strong>Craftsman Pergola</strong>
              <span>Square columns, simple brackets, horizontal beam lines — a pergola that reads as an authentic craftsman addition, not a generic kit structure</span>
            </div>
            <div className="feature-box">
              <div className="icon">🪑</div>
              <strong>Built-In Bench Seating</strong>
              <span>Integrated seating on smaller Garrett Park lots maximizes function without furniture clutter — seat 6–8 guests in a 220 sq ft deck</span>
            </div>
            <div className="feature-box">
              <div className="icon">🌱</div>
              <strong>Planter Boxes</strong>
              <span>Deck-edge planters bring Garrett Park&apos;s garden tradition onto the deck — greenery, privacy, and definition within the small lot footprint</span>
            </div>
            <div className="feature-box">
              <div className="icon">💡</div>
              <strong>Period-Style Lighting</strong>
              <span>Post cap lights and step lighting in bronze or black finishes — consistent with craftsman hardware traditions and appropriate for Garrett Park&apos;s quiet residential character</span>
            </div>
            <div className="feature-box">
              <div className="icon">🚪</div>
              <strong>Screened Porch Conversion</strong>
              <span>Screening an existing or new rear deck to create a screened porch — one of the most historically authentic upgrades on a Garrett Park bungalow</span>
            </div>
            <div className="feature-box">
              <div className="icon">🔒</div>
              <strong>Privacy Screening</strong>
              <span>Lattice or board-and-batten privacy panels on the deck railing — consistent with craftsman material vocabulary and practical on Garrett Park&apos;s closer-spaced lots</span>
            </div>
          </div>

          <h2>Our Deck Building Process in Garrett Park</h2>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Free In-Home Consultation — Historic District &amp; Lot Assessment</h3>
                <p>We visit your Garrett Park home, walk the rear yard, assess the home&apos;s architectural character and rear elevation, evaluate lot dimensions and setback constraints, review any existing deck condition, and identify the correct permit authority (Town of Garrett Park vs unincorporated MoCo). We also assess whether any proposed deck scope has historic district implications — and advise accordingly. No cost, no obligation.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Jurisdiction Verification &amp; Setback Calculation</h3>
                <p>We confirm whether the address is within the Town of Garrett Park limits (Town permit at 4600 Oxford St) or in unincorporated MoCo (county permit), and calculate the maximum buildable footprint after rear and side setbacks for the specific lot. This is the foundation of every Garrett Park deck design.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>Character-Appropriate Deck Design</h3>
                <p>Our design team develops a deck layout, structural plan, material specification, and railing style that suits the specific home&apos;s craftsman, bungalow, or Victorian character. For most Garrett Park homes: warm-tone composite decking, painted wood baluster railing, proportionate scale. Full plan and elevation drawings prepared for Town permit submission.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>Town of Garrett Park Permit Filing</h3>
                <p>We file the building permit with the Town at 4600 Oxford Street, including all required structural drawings. Our permit team manages all Town correspondence, plan review responses, and inspection scheduling throughout the project.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">5</div>
              <div className="step-content">
                <h3>Footings, Framing &amp; Town Inspections</h3>
                <p>Post holes drilled to frost depth, concrete footings poured, Town footing inspection scheduled and managed. Pressure-treated framing installed to structural drawings. Town framing inspection coordinated at the appropriate stage.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">6</div>
              <div className="step-content">
                <h3>Decking, Railing, Features &amp; Lighting</h3>
                <p>Composite or cedar decking installed, wood baluster railing assembled, stairs built, pergola or screened porch framed where included, built-in seating and planters installed, and lighting wired — all coordinated by a project manager familiar with Garrett Park&apos;s character expectations.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">7</div>
              <div className="step-content">
                <h3>Town Final Inspection, Walkthrough &amp; 1-Year Warranty</h3>
                <p>Town of Garrett Park final inspection managed by our permit team. After approval, thorough walkthrough with you, every punch list item addressed, and 1-year workmanship warranty activated.</p>
              </div>
            </div>
          </div>

          <h2>Deck Building Cost in Garrett Park, MD</h2>

          <table className="cost-table">
            <tbody>
              <tr>
                <th>Deck Type / Scope</th>
                <th>Typical Cost Range</th>
                <th>Notes for Garrett Park</th>
              </tr>
              <tr>
                <td>Small Rear Deck — Cedar or PT (160–220 sq ft)</td>
                <td>$16,000 – $26,000</td>
                <td>Period-appropriate scale. Painted wood railing. Town of Garrett Park permit included. Traditional look for bungalow and craftsman homes.</td>
              </tr>
              <tr>
                <td>Composite Rear Deck — Warm Tone (200–300 sq ft)</td>
                <td>$22,000 – $44,000</td>
                <td>Trex or TimberTech, wood-grain texture. Painted baluster railing. Low maintenance for Garrett Park&apos;s shaded rear yards. Town permit included.</td>
              </tr>
              <tr>
                <td>Composite Deck with Craftsman Pergola</td>
                <td>$36,000 – $60,000</td>
                <td>Square columns, simple brackets — architecturally appropriate for craftsman homes. Shade, structure, and character. Town permit included.</td>
              </tr>
              <tr>
                <td>Screened Porch Addition</td>
                <td>$40,000 – $72,000</td>
                <td>Rear porch structure with screened walls and roof — most historically authentic addition for Garrett Park bungalows. Town permit + structural engineering.</td>
              </tr>
              <tr>
                <td>Deck Replacement — Remove &amp; Rebuild</td>
                <td>$20,000 – $50,000</td>
                <td>Demolition + disposal + new composite or cedar deck. Opportunity to upgrade material and refresh design. Town permit required. Structural assessment included.</td>
              </tr>
              <tr>
                <td>Built-In Seating &amp; Planters (add-on)</td>
                <td>$2,800 – $6,500</td>
                <td>Integrated bench seating with storage and deck-edge planters — highly recommended on Garrett Park&apos;s smaller lot footprints.</td>
              </tr>
            </tbody>
          </table>

          <div className="tip">
            💡 <strong>Garrett Park Deck Value:</strong> A quality rear deck on a Garrett Park home — designed to complement the home&apos;s period character, permitted through the Town, and built in composite or cedar — adds $20,000–$38,000 in appraised value and meaningfully enhances resale appeal in a community where buyers pay a premium specifically for architectural character. A deck that looks like it belongs to the home amplifies that premium; one that clashes with it undermines it.
          </div>

          <div className="cta-banner">
            <h2>Get a Free Deck Consultation in Garrett Park</h2>
            <p>We&apos;ll visit your Garrett Park home, assess the historic district implications, calculate your lot&apos;s buildable footprint, and design a deck that suits your home&apos;s craftsman character. Town permit expertise included. No cost, no obligation.</p>
            <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
          </div>

          <h2>What Garrett Park Homeowners Say About DMV-GC Group</h2>

          <div className="review-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our 1928 craftsman on Strathmore Avenue needed a rear deck that didn&apos;t look like it came from a big box store catalog. DMV-GC Group designed a Trex deck in a warm cedar tone with painted wood railings that match our trim exactly. The Town of Garrett Park permit was handled entirely by their team. The deck looks like it grew out of the house.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Strathmore Avenue, Garrett Park MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;We were worried that being in a National Register historic district meant we couldn&apos;t add a deck without months of historic review. DMV-GC Group explained clearly that rear yard construction doesn&apos;t require that review — filed the Town permit at Oxford Street and built us a screened porch that looks like it was part of the original 1935 design.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Oxford Street, Garrett Park MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our old deck had no permit — we discovered that when we went to sell. DMV-GC Group assessed it, confirmed it needed full replacement to get a proper Town permit, and rebuilt it in composite with built-in bench seating. The Town inspector passed it on the first final inspection. Sold the house six weeks later.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Keswick Avenue, Garrett Park MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;The craftsman pergola DMV-GC Group designed for our deck is the detail that makes the whole thing special — square columns, proper proportions, painted to match the house. Three neighbors have asked us who built it. The Town permit process at 4600 Oxford was seamless — we never had to deal with the Town directly at all.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Montrose Avenue, Garrett Park MD</span></div>
            </div>
          </div>

          <div className="highlight">
            <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Garrett Park homeowners trust DMV-GC Group for deck projects that understand the National Register historic district context, navigate the Town of Garrett Park permit process correctly, and deliver designs that genuinely complement the craftsman and bungalow character that makes this community one of Montgomery County&apos;s most distinctive.</p>
          </div>

          <h2>Serving Garrett Park and Surrounding Areas for Deck Building</h2>

          <div className="areas-grid">
            <span className="area-pill">Garrett Park, MD</span>
            <span className="area-pill">Strathmore Avenue</span>
            <span className="area-pill">Oxford Street</span>
            <span className="area-pill">Keswick Avenue</span>
            <span className="area-pill">Montrose Avenue</span>
            <span className="area-pill">Kensington</span>
            <span className="area-pill">Rockville</span>
            <span className="area-pill">North Bethesda</span>
            <span className="area-pill">Wheaton</span>
            <span className="area-pill">Gaithersburg</span>
          </div>

          <div className="nearby-box">
            <h3>Also serving Kensington, MD — Garrett Park&apos;s neighbor on the Brunswick Line</h3>
            <p>Kensington sits directly east of Garrett Park on the MARC Brunswick Line, with a similarly historic housing stock and its own Town permit authority. DMV-GC Group builds custom decks in Kensington with the same historic-home design sensitivity and Town permit expertise. <Link href="/service/decks/kensington-md">View our Kensington deck page →</Link></p>
          </div>

          <h2>Frequently Asked Questions — Deck Building in Garrett Park, MD</h2>
          <Accordion defaultActiveKey="0" flush>
            {faqData.map((faq) => (
              <Accordion.Item eventKey={faq.eventKey} key={faq.eventKey}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="internal-links">
            <h2>Explore Our Other Services in Garrett Park</h2>
            <ul>
              <li><Link href="/service/kitchen-remodeling">Kitchen Remodeling in Garrett Park, MD</Link></li>
              <li><Link href="/service/bathroom-remodeling">Bathroom Remodeling in Garrett Park, MD</Link></li>
              <li><Link href="/service/basement-remodeling/garrett-park-md">Basement Remodeling in Garrett Park, MD</Link></li>
              <li><Link href="/service/adu/garrett-park-md">ADU Construction in Garrett Park, MD</Link></li>
              <li><Link href="/service/home-additions">Home Additions in Garrett Park, MD</Link></li>
              <li><Link href="/service/design-build">Design-Build Contractor in Garrett Park, MD</Link></li>
            </ul>
          </div>

          <div className="cta-banner">
            <h2>Ready to Build Your Garrett Park Deck?</h2>
            <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. We&apos;ll assess the historic district context, design a deck that belongs on your craftsman home, and handle the Town of Garrett Park permit from start to finish.</p>
            <Link href="/contact-us" className="cta-btn">Get Free Deck Estimate in Garrett Park →</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
          </div>

        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
    </main>
  );
}
