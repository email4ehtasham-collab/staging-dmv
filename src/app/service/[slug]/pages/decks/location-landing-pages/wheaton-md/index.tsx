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
      "description": "Licensed deck builder serving Wheaton, MD. Specializing in elevated split-level decks and custom composite decks for Wheaton's 1950s–70s housing stock — with concrete block foundation expertise, Montgomery County permit management, and under-deck space conversion.",
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
        { "@type": "City", "name": "Wheaton", "sameAs": "https://en.wikipedia.org/wiki/Wheaton,_Maryland" },
        { "@type": "City", "name": "Silver Spring" },
        { "@type": "City", "name": "Kensington" },
        { "@type": "City", "name": "Glenmont" },
        { "@type": "City", "name": "Rockville" }
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "MHIC License", "credentialCategory": "Maryland Home Improvement Contractor License" }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "97", "bestRating": "5" },
      "priceRange": "$$$"
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/decks/wheaton-md#service",
      "serviceType": "Deck Building",
      "name": "Deck Building in Wheaton, MD",
      "alternateName": ["Custom Deck Construction", "Split-Level Deck", "Composite Deck", "Elevated Deck", "Concrete Block Foundation Deck"],
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Wheaton", "sameAs": "https://en.wikipedia.org/wiki/Wheaton,_Maryland" },
      "description": "Custom deck building in Wheaton, MD. Elevated split-level decks, composite rear decks, and under-deck dry space conversions for Wheaton's 1950s–70s housing stock — with concrete block foundation expertise, Montgomery County DPS permit management, and in-house structural engineering.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "17000", "maxPrice": "88000", "priceCurrency": "USD" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Decks", "item": "https://www.dmv-gc.com/service/decks" },
        { "@type": "ListItem", "position": 4, "name": "Wheaton, MD", "item": "https://www.dmv-gc.com/service/decks/wheaton-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to build a deck in Wheaton, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deck construction in Wheaton, MD typically costs between $17,000 and $88,000 depending on size, material, and home type. A pressure-treated rear deck for a split-level runs $17,000–$29,000. A composite deck on a split-level costs $28,000–$54,000. An elevated split-level deck with under-deck drainage system costs $46,000–$76,000. A multi-level deck with pergola and built-in features runs $55,000–$88,000. Wheaton's predominantly 1950s–70s split-level and colonial housing makes elevated rear decks the most common project type. DMV-GC Group provides free in-home consultations with detailed estimates."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group handle Montgomery County deck permits for Wheaton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Wheaton is in unincorporated Montgomery County — all deck permits go through Montgomery County DPS. DMV-GC Group files all required building permits with structural drawings and manages all county correspondence, plan review, and inspection scheduling as a standard part of every Wheaton deck project. Homeowners never need to contact the county directly."
          }
        },
        {
          "@type": "Question",
          "name": "How does a concrete block foundation affect deck attachment in Wheaton homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wheaton's 1950s–60s split-levels were commonly built with concrete block (CMU) foundation walls rather than poured concrete. Attaching a deck ledger board to a concrete block wall requires a different fastener approach than poured concrete or wood-frame rim joist — masonry anchors or through-bolts into solid block sections must be used, and the block wall must be assessed for structural integrity before attachment. DMV-GC Group's crew assesses concrete block foundation condition and specifies the correct ledger attachment method before any deck framing begins on Wheaton homes with CMU foundations."
          }
        },
        {
          "@type": "Question",
          "name": "What deck type works best for Wheaton's split-level homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wheaton's 1950s–70s split-levels share the same elevated deck opportunity as Silver Spring's Four Corners neighborhood — the main living floor sits 4–6 feet above rear grade, creating a natural elevated deck connection from the living or dining room. An elevated composite or pressure-treated rear deck with stairs to the lower yard is the most functional configuration. At 4–6 feet of clearance, the space below the deck can be converted to a covered dry patio using an under-deck drainage system. DMV-GC Group has built elevated split-level decks throughout Wheaton's Glenmont, Wheaton Hills, and Georgia Avenue corridor neighborhoods."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for deck building in Wheaton, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Wheaton and Montgomery County. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every deck project completed in Wheaton."
          }
        }
      ]
    }
  ]
};

const faqData = [
  { eventKey: "0", question: "How much does it cost to build a deck in Wheaton, MD?", answer: "Deck construction in Wheaton typically costs $17,000–$88,000 depending on type and scope. A ground-level platform deck runs $17,000–$28,000. An elevated split-level deck in pressure-treated costs $28,000–$48,000. An elevated composite deck runs $38,000–$62,000. Adding an under-deck drainage system brings that to $46,000–$76,000. A multi-level deck with pergola costs $55,000–$88,000. CMU foundation assessment is included in every consultation at no charge. Montgomery County permits are included in every project scope." },
  { eventKey: "1", question: "Why does a concrete block foundation matter for deck building in Wheaton?", answer: "Wheaton's 1950s–60s split-levels were commonly built with concrete block (CMU) foundations. Attaching a deck ledger to CMU requires a different fastener approach than poured concrete — masonry anchors must be placed into solid block zones, not hollow cores, and the block must be structurally sound enough to accept the load. A contractor who doesn't assess the foundation type first risks attaching the ledger improperly, which can result in the deck pulling away from the house. DMV-GC Group identifies foundation type and assesses CMU condition on every Wheaton deck project before any ledger design is specified." },
  { eventKey: "2", question: "What is an under-deck drainage system and is it worth adding in Wheaton?", answer: "An under-deck drainage system is a waterproof ceiling installed beneath an elevated deck that channels rain through gutters and downspouts — converting the under-deck area from a wet, exposed space into a functional covered patio. For Wheaton's split-level homes with 4–6 feet of clearance beneath the deck, this is consistently the most popular add-on — adding meaningful usable outdoor space that works even in rain. DMV-GC Group installs complete under-deck systems as part of new deck builds or as a retrofit to existing elevated decks." },
  { eventKey: "3", question: "Does DMV-GC Group handle Montgomery County deck permits for Wheaton?", answer: "Yes. Wheaton is in unincorporated Montgomery County — all deck permits go through Montgomery County DPS. DMV-GC Group files all required building permits with complete structural drawings and manages all county correspondence, plan review, and inspection scheduling. Homeowners never need to contact the county directly for any part of the permit process." },
  { eventKey: "4", question: "Is DMV-GC Group licensed for deck building in Wheaton, MD?", answer: "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Wheaton and Montgomery County. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every deck project completed in Wheaton." }
];

export default function DecksWheatonMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => { setActiveMenuItem("service"); }, []);
  return (
    <main>
      <div className="city-service-detail-page decks-wheaton-md">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/services">Services</Link><span>›</span>
            <Link href="/service/decks">Deck Building</Link><span>›</span>
            Wheaton, MD
          </nav>

          <div className="hero">
            <div className="hero-location-tag">📍 Serving Wheaton, MD</div>
            <h1>Deck Building in Wheaton, MD — Elevated Split-Level &amp; Custom Deck Contractor</h1>
            <div className="hero-meta">
              <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
              <span className="badge">✓ MHIC Licensed &amp; Insured</span>
              <span className="badge">✓ MoCo Permits Handled</span>
              <span className="badge">✓ Concrete Block Foundation Expertise</span>
              <span className="badge dark">📞 +1 240-730-1292</span>
            </div>
          </div>

          <div className="splitlvl-banner">
            <div className="icon">🏗️</div>
            <div>
              <h3>Wheaton&apos;s Split-Level Homes Were Built for Elevated Rear Decks — But the Concrete Block Foundation Changes How You Attach One</h3>
              <p>Wheaton&apos;s predominantly 1950s–70s split-level housing stock creates one of the highest concentrations of elevated rear deck opportunities in Montgomery County — the main living floor typically sits 4–6 feet above rear grade, with a rear door opening that practically asks for a deck. But Wheaton&apos;s split-levels have a structural detail that many contractors overlook: a significant proportion were built with concrete block (CMU) foundation walls rather than poured concrete. Attaching a deck ledger to a CMU wall requires a fundamentally different fastener approach than poured concrete or wood-frame rim joist — and getting it wrong creates a structural liability that typically isn&apos;t visible until the deck has already failed. DMV-GC Group assesses the foundation wall type on every Wheaton deck project before any ledger attachment is designed or quoted.</p>
            </div>
          </div>

          <div className="intro-box">
            Looking for a trusted <strong>deck contractor in Wheaton, MD</strong>? Wheaton&apos;s 1950s–70s split-levels, colonials, and ranches throughout Glenmont, Wheaton Hills, the Georgia Avenue corridor, and Layhill Road neighborhoods are excellent deck candidates — and the community&apos;s dual Red Line and Purple Line transit access makes quality outdoor living investments here particularly worthwhile. DMV-GC Group&apos;s licensed design-build team understands Wheaton&apos;s specific construction characteristics — concrete block foundations, split-level elevations, and the Montgomery County permit process — and builds elevated rear decks that are structurally sound, properly permitted, and designed to get maximum use out of Wheaton&apos;s rear yards.
          </div>

          <div className="trust-bar">
            <div className="trust-item">
              <div className="icon">🏗️</div>
              <strong>CMU Foundation Expertise</strong>
              <span>Concrete block ledger attachment — done right</span>
            </div>
            <div className="trust-item">
              <div className="icon">📋</div>
              <strong>MoCo Permits Handled</strong>
              <span>Montgomery County DPS — fully managed</span>
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

          <h2>Deck Building Services in Wheaton, MD</h2>

          <div className="service-grid">
            <div className="service-item">Elevated Split-Level Deck Design &amp; Build</div>
            <div className="service-item">Composite Deck (Trex / TimberTech / Azek)</div>
            <div className="service-item">Pressure-Treated Wood Deck</div>
            <div className="service-item">Ground-Level Ranch Platform Deck</div>
            <div className="service-item">Multi-Level Deck with Stairs</div>
            <div className="service-item">Under-Deck Drainage &amp; Dry Space System</div>
            <div className="service-item">Pergola &amp; Covered Deck Structure</div>
            <div className="service-item">Cable &amp; Wood Railing Systems</div>
            <div className="service-item">Built-In Seating &amp; Storage</div>
            <div className="service-item">Deck Lighting Systems</div>
            <div className="service-item">Deck Replacement &amp; Structural Rebuild</div>
            <div className="service-item">CMU Foundation Ledger Assessment</div>
            <div className="service-item">Structural Assessment of Existing Decks</div>
            <div className="service-item">Montgomery County Permit Processing</div>
          </div>

          <div className="author-box">
            <div className="author-avatar">🏠</div>
            <div className="author-info">
              <h4>About DMV-GC Group — Wheaton&apos;s Licensed Custom Deck Contractor</h4>
              <p>DMV-GC Group is based in nearby North Bethesda and has completed deck builds, basement ADU conversions, kitchen remodels, and bathroom renovations throughout Wheaton&apos;s neighborhoods — Glenmont, Wheaton Hills, Layhill Road, and the Georgia Avenue corridor. We understand the concrete block foundation conditions common in Wheaton&apos;s 1950s–60s split-levels, the elevated deck structural requirements at 4–6 foot post heights, and the Montgomery County DPS permit process for all deck types. We hold a Maryland MHIC license and back every project with a 1-year workmanship warranty.</p>
              <div className="author-creds">
                <span className="cred">MHIC Licensed</span>
                <span className="cred">CMU Foundation Expertise</span>
                <span className="cred">Elevated Deck Specialists</span>
                <span className="cred">MoCo Permit Experts</span>
                <span className="cred">4.9★ Rated</span>
                <span className="cred">1-Year Warranty</span>
              </div>
            </div>
          </div>

          <h2>Types of Decks We Build in Wheaton, MD</h2>
          <p>
            Wheaton&apos;s housing stock is dominated by postwar split-levels and colonials — and the deck opportunities here reflect that. Here is what we build most commonly in Wheaton:
          </p>

          <div className="deck-type-grid">
            <div className="deck-type-card">
              <span className="deck-tag">Most Common in Wheaton</span>
              <h3>Elevated Split-Level Rear Deck</h3>
              <p>The dominant deck type in Wheaton — an elevated rear deck accessed from the main living floor&apos;s rear door, sitting 4–6 feet above grade. The structure requires taller posts, deeper beams, sized footings, and a correctly attached ledger board — with the CMU foundation type assessed before any design is finalized. The result is a genuine outdoor living room at the same level as the home&apos;s main living and dining areas, with stairs connecting to the lower yard. At 4–6 feet of clearance, the space beneath can also be converted to a covered dry patio with an under-deck drainage system.</p>
              <div className="deck-cost">Typical Cost: $32,000 – $65,000</div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">Low-Maintenance Choice</span>
              <h3>Composite Deck — Trex or TimberTech</h3>
              <p>Composite decking on a pressure-treated frame is the most popular material choice for Wheaton&apos;s elevated split-level decks — delivering 25–30 year lifespan without the annual staining, sealing, or board replacement that pressure-treated wood decks require after 8–12 years. Trex Transcend and TimberTech Legacy in warm brown or grey tones are the most requested composites for Wheaton homes. Paired with cable railing for unobstructed rear yard views, or with painted wood railing for a more traditional look.</p>
              <div className="deck-cost">Typical Cost: $28,000 – $58,000</div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">Covered Space Below</span>
              <h3>Elevated Deck with Under-Deck System</h3>
              <p>At 4–6 feet of clearance beneath a Wheaton split-level deck, installing an under-deck drainage ceiling system converts what would be a muddy, exposed crawl space into a functional covered patio — usable for outdoor dining in rain, storage, or an additional outdoor work area. The system channels rainwater through concealed gutters and downspouts rather than dripping through the deck boards above. One of the most popular and practical add-ons for Wheaton&apos;s elevated deck builds.</p>
              <div className="deck-cost">Typical Cost: $46,000 – $76,000</div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">For Ranch &amp; Lower Homes</span>
              <h3>Ground-Level Platform Deck</h3>
              <p>For Wheaton&apos;s ranch homes and any split-level where the rear door is near grade — a low-profile platform deck of 12–18 inches is structurally simpler, lower-cost, and creates seamless indoor-outdoor flow without a significant stair descent. No railing required at lower heights. Composite or pressure-treated. Sized to the specific lot&apos;s rear yard dimensions and setback requirements. DMV-GC Group assesses the grade condition at every Wheaton rear door before recommending elevated vs ground-level deck configuration.</p>
              <div className="deck-cost">Typical Cost: $17,000 – $38,000</div>
            </div>
          </div>

          <h2>Concrete Block Foundations in Wheaton — The Detail That Changes Deck Attachment</h2>
          <p>
            Wheaton&apos;s 1950s–60s split-levels were frequently built with concrete masonry unit (CMU) block foundations — a construction method common in postwar Montgomery County that differs meaningfully from poured concrete and from the wood-frame rim joist attachment used on newer homes. When a contractor who doesn&apos;t know this attaches a deck ledger to a CMU wall the same way they would to poured concrete or wood — drilling standard anchor bolts into random block locations — the result is a ledger attached to hollow block cores that can pull out under load. This is the most common structural failure point on Wheaton decks built by contractors unfamiliar with the community&apos;s housing stock.
          </p>

          <div className="cmu-box">
            <h3>🧱 DMV-GC Group&apos;s Concrete Block Ledger Assessment — Wheaton Standard Process</h3>
            <ul>
              <li><strong>Foundation type identification:</strong> Before any deck design is finalized for a Wheaton split-level, DMV-GC Group identifies the foundation wall type — poured concrete, CMU block, or wood-frame rim joist — by visual inspection of the visible foundation exterior and, where needed, the basement or crawlspace interior. This is a non-negotiable first step for every Wheaton deck project.</li>
              <li><strong>CMU block condition assessment:</strong> Wheaton&apos;s 1950s–60s CMU foundations range from fully sound to partially deteriorated depending on moisture exposure history. We assess visible block condition, mortar joint integrity, and any evidence of water infiltration or spalling before specifying any ledger attachment into the CMU wall.</li>
              <li><strong>Solid vs hollow block identification:</strong> CMU block walls have alternating solid and hollow sections in the core layout. Ledger anchor bolts must bear into solid block material — not hollow core sections that can crack or pull out under the loads a deck applies. DMV-GC Group locates solid block zones using probing before any fastener locations are marked.</li>
              <li><strong>Correct fastener specification:</strong> Where CMU ledger attachment is required, DMV-GC Group specifies heavy-duty masonry anchors or through-bolts of the correct diameter, embedment depth, and spacing for the calculated ledger loads — not generic anchor bolts that meet minimum code on poured concrete but are inadequate for block masonry under higher loads.</li>
              <li><strong>Ledger flashing:</strong> The ledger-to-foundation interface is the primary water infiltration point on any attached deck — poured concrete or CMU. DMV-GC Group installs proper flashing tape and sill seal at every Wheaton ledger connection to prevent moisture migration behind the ledger and into the foundation wall.</li>
              <li><strong>Post-to-footing alternative:</strong> Where CMU wall condition makes ledger attachment inadvisable, DMV-GC Group designs the deck as a freestanding structure — supported entirely on post-and-footing framing without a ledger connection to the house — and connects it to the home with only a joist hanger at the house side without structural load transfer to the wall. This approach eliminates the CMU attachment risk entirely.</li>
            </ul>
          </div>

          <h2>Wheaton&apos;s Dual Transit — Why Deck Investments Here Make Financial Sense</h2>
          <p>
            Wheaton&apos;s appeal as a community — and the financial case for deck investment here — is underpinned by transit access that most Montgomery County communities cannot match. Wheaton is one of the few communities in the county served by two separate Metro lines, making it unusually attractive to commuters and homebuyers alike.
          </p>

          <div className="transit-grid">
            <div className="transit-card">
              <h3>🚇 Red Line — Wheaton &amp; Glenmont Stations</h3>
              <p>Wheaton Metro station and Glenmont Metro station — both Red Line — serve the community with direct access to Silver Spring, Bethesda, Friendship Heights, and downtown DC. Red Line access is within walking or short driving distance for most Wheaton residential neighborhoods, making Wheaton attractive to DC-area commuters who want suburban square footage at accessible price points.</p>
            </div>
            <div className="transit-card">
              <h3>🚇 Purple Line — Future Wheaton Area Station</h3>
              <p>The Purple Line light rail — under construction — will add a Wheaton area station connecting to the existing Red Line and extending east-west connectivity across Montgomery and Prince George&apos;s Counties. Purple Line access significantly expands the commuter catchment area for Wheaton properties and is expected to support property value appreciation in the surrounding neighborhoods on completion.</p>
            </div>
          </div>

          <div className="tip">
            💡 <strong>Wheaton Deck ROI:</strong> Wheaton&apos;s strong transit access — Red Line now, Purple Line on the horizon — and its active residential resale market make quality deck additions a sound investment. An elevated composite deck on a Wheaton split-level in Glenmont or Wheaton Hills typically adds $26,000–$42,000 to appraised value and meaningfully increases buyer interest at resale in a community where outdoor living space is a primary decision factor.
          </div>

          <h2>Popular Deck Features for Wheaton Homes</h2>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="icon">🌧️</div>
              <strong>Under-Deck Drainage System</strong>
              <span>Convert the space beneath your Wheaton split-level deck into a dry, usable covered patio — Wheaton&apos;s most popular deck add-on</span>
            </div>
            <div className="feature-box">
              <div className="icon">🔩</div>
              <strong>Cable Railing</strong>
              <span>Horizontal cable railing preserves sightlines over Wheaton&apos;s rear yards — popular on split-levels where the elevated deck commands good views</span>
            </div>
            <div className="feature-box">
              <div className="icon">☂️</div>
              <strong>Pergola &amp; Shade</strong>
              <span>Shade structure over the main deck area — wood or aluminum pergola for Wheaton&apos;s hot humid summers, with support for string lights</span>
            </div>
            <div className="feature-box">
              <div className="icon">🪑</div>
              <strong>Built-In Bench Seating</strong>
              <span>Integrated benches along the deck edge — seat more guests without crowding the deck surface with furniture</span>
            </div>
            <div className="feature-box">
              <div className="icon">💡</div>
              <strong>Deck Lighting</strong>
              <span>Post cap, step, and rail lighting — extend evening use in Wheaton&apos;s outdoor-friendly spring and fall seasons</span>
            </div>
            <div className="feature-box">
              <div className="icon">🍳</div>
              <strong>Grill Station</strong>
              <span>Built-in grill counter with storage — gas line, electrical, and countertop all managed in-house by licensed trades</span>
            </div>
          </div>

          <h2>Wheaton Neighborhoods We Serve for Deck Building</h2>

          <div className="neighborhood-grid">
            <div className="neighborhood-card">
              <h3>Glenmont</h3>
              <span className="hood-tag">Red Line · Split-levels &amp; colonials</span>
              <p>Wheaton&apos;s most transit-accessible neighborhood — immediately adjacent to Glenmont Metro station. Dense concentration of 1960s–70s split-levels and colonials, many with concrete block foundations and 4–6 foot rear elevations. Elevated composite deck with under-deck system is the dominant project type here. MoCo permits.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Wheaton Hills</h3>
              <span className="hood-tag">Split-levels on sloped terrain</span>
              <p>Established neighborhood with 1950s–60s split-levels on hilly terrain — some properties have significant rear grade drops that create deck opportunities even beyond the standard split-level elevation. Concrete block foundation assessment particularly important in Wheaton Hills&apos; older stock. MoCo permits.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Georgia Avenue Corridor</h3>
              <span className="hood-tag">Mixed housing · walkable to Wheaton Metro</span>
              <p>The corridor along Georgia Avenue and adjacent streets offers mixed housing from multiple decades — 1950s ranches, 1960s–70s split-levels, and some newer construction. Deck type varies significantly by home age and configuration. Ground-level platform decks for ranches; elevated builds for split-levels. MoCo permits.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Layhill Road Area</h3>
              <span className="hood-tag">1960s–80s colonials &amp; split-levels</span>
              <p>Residential neighborhoods along Layhill Road with 1960s–80s colonials and split-levels on good-sized lots. More rear yard depth available for multi-level deck builds or deck-plus-pergola combinations. Some newer construction with poured concrete foundations. MoCo permits.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Bauer Drive / Kemp Road Area</h3>
              <span className="hood-tag">Established single-family</span>
              <p>Established single-family neighborhoods with a mix of 1960s–70s construction. Split-levels dominate with the elevated deck opportunity — concrete block foundations common. Good rear yard sizes on many properties support larger deck footprints. MoCo permits.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Near Wheaton Regional Park</h3>
              <span className="hood-tag">Wooded lots · varied terrain</span>
              <p>Properties adjacent to Wheaton Regional Park often have wooded rear yards and sloped terrain — creating elevated deck opportunities and sometimes tree-aware construction considerations similar to Cabin John. Deck orientation toward the wooded backdrop rather than toward neighboring homes. MoCo permits.</p>
            </div>
          </div>

          <h2>Our Deck Building Process in Wheaton</h2>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Free In-Home Consultation &amp; Foundation Assessment</h3>
                <p>We visit your Wheaton home, walk the rear yard, assess the home&apos;s rear elevation, and — critically — identify the foundation wall type. For split-levels with CMU block foundations, we note the block condition and identify the correct ledger attachment approach before any design begins. No cost, no obligation.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>CMU Foundation Assessment (Where Applicable)</h3>
                <p>For Wheaton homes with concrete block foundations, we assess block condition, mortar joint integrity, and solid vs hollow core zones before specifying any ledger attachment method. Where CMU condition makes ledger attachment inadvisable, we design a freestanding deck structure that eliminates the attachment risk entirely.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>Custom Deck Design</h3>
                <p>Floor plan, structural design, elevation drawings, railing style, material selection, stair layout, and under-deck system design (where included) — all produced with your specific Wheaton home&apos;s foundation type, elevation, and lot dimensions as the starting constraints. Full structural drawings prepared for Montgomery County permit submission.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>Montgomery County Permit Filing</h3>
                <p>We file all required building permits with Montgomery County DPS, including complete structural drawings. Our permit team manages all county correspondence, plan review, and inspection scheduling from application through final approval.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">5</div>
              <div className="step-content">
                <h3>Footings, Ledger &amp; Structural Framing</h3>
                <p>Post holes drilled to frost depth, footings poured and cured. Ledger attached using the correct method for the foundation type — masonry anchors into solid CMU zones with proper flashing, or freestanding post framing where CMU attachment is not advisable. County footing inspection before pour. Beams and joists installed to structural drawings.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">6</div>
              <div className="step-content">
                <h3>Decking, Railing, Stairs &amp; Features</h3>
                <p>Decking boards, railing system, stairway, under-deck drainage system (where included), pergola, built-in seating, and lighting — installed and coordinated by a project manager. County framing inspection scheduled at the appropriate stage.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">7</div>
              <div className="step-content">
                <h3>County Final Inspection, Walkthrough &amp; 1-Year Warranty</h3>
                <p>Montgomery County final inspection managed by our permit team. After approval, thorough walkthrough with you, every punch list item addressed, and 1-year workmanship warranty activated.</p>
              </div>
            </div>
          </div>

          <h2>Deck Building Cost in Wheaton, MD</h2>

          <table className="cost-table">
            <tbody>
              <tr>
                <th>Deck Type / Scope</th>
                <th>Typical Cost Range</th>
                <th>Notes for Wheaton</th>
              </tr>
              <tr>
                <td>Ground-Level Platform Deck — PT (200–280 sq ft)</td>
                <td>$17,000 – $28,000</td>
                <td>Low-profile, ranch or near-grade split-level. No railing required at lower heights. MoCo permit included.</td>
              </tr>
              <tr>
                <td>Elevated Split-Level Deck — PT (280–380 sq ft)</td>
                <td>$28,000 – $48,000</td>
                <td>4–6 ft elevation. CMU ledger assessment included. Taller posts, beams, footings. Stairs to lower yard. Railing required. MoCo permit.</td>
              </tr>
              <tr>
                <td>Elevated Split-Level Deck — Composite (280–380 sq ft)</td>
                <td>$38,000 – $62,000</td>
                <td>Trex or TimberTech on PT frame. 25–30 year lifespan, low maintenance. CMU assessment included. MoCo permit.</td>
              </tr>
              <tr>
                <td>Elevated Composite Deck + Under-Deck System</td>
                <td>$46,000 – $76,000</td>
                <td>Adds waterproof ceiling, channel drains, and downspouts beneath the deck — creates dry covered patio below. Most popular Wheaton combination.</td>
              </tr>
              <tr>
                <td>Multi-Level Deck with Pergola (upper + lower)</td>
                <td>$55,000 – $88,000</td>
                <td>Two connected deck levels plus shade structure. Layhill Road and larger-lot Wheaton properties. Composite or cedar. MoCo permit.</td>
              </tr>
              <tr>
                <td>Deck Replacement (Remove Old &amp; Rebuild)</td>
                <td>$26,000 – $58,000</td>
                <td>Demolition + disposal + new composite deck. CMU ledger reassessment included. MoCo permit required even for same-footprint replacement.</td>
              </tr>
              <tr>
                <td>CMU Foundation Ledger Assessment (standalone)</td>
                <td>Included with consultation</td>
                <td>Free assessment for every Wheaton home with concrete block foundation — included in the consultation, not a separate charge.</td>
              </tr>
            </tbody>
          </table>

          <div className="cta-banner">
            <h2>Get a Free Deck Consultation in Wheaton</h2>
            <p>We&apos;ll visit your Wheaton home, assess the foundation type and rear elevation, discuss your deck design options, and provide a detailed estimate. Concrete block foundation expertise included — no extra charge. No obligation.</p>
            <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
          </div>

          <h2>What Wheaton Homeowners Say About DMV-GC Group</h2>

          <div className="review-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our Glenmont split-level has a concrete block foundation — the first contractor we called didn&apos;t mention it at all. DMV-GC Group&apos;s crew assessed the block, found that one section had some deterioration, and designed the ledger attachment into the solid zones on either side. The elevated Trex deck has been solid for two years with no movement.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Glenmont, Wheaton MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;We added the under-deck drainage system to our Wheaton Hills split-level deck — it was the best decision we made on the whole project. The covered space below is where we actually spend most of our time in summer — out of the direct sun. DMV-GC Group integrated it seamlessly from day one of the design.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Wheaton Hills, MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our old PT deck had pulled away from the house slightly — we later learned the ledger bolts had been drilled into hollow CMU cores on our block foundation. DMV-GC Group replaced the whole deck, relocated the ledger connection into solid block zones with proper masonry anchors, and installed the correct flashing. It&apos;s not just a new deck — it&apos;s a correctly built one.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Georgia Avenue Area, Wheaton MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;DMV-GC Group built us a two-level composite deck off our Layhill Road colonial — upper deck off the kitchen slider, lower landing near the yard — with a pergola on the upper level for shade. The cable railing gives us a clear view across the entire rear yard. Montgomery County permit handled without us lifting a finger.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Layhill Road, Wheaton MD</span></div>
            </div>
          </div>

          <div className="highlight">
            <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Wheaton homeowners trust DMV-GC Group for deck projects that address the concrete block foundation correctly, handle Montgomery County permits completely, and deliver elevated split-level decks that are structurally sound and built for Wheaton&apos;s decades of outdoor use.</p>
          </div>

          <h2>Serving All Wheaton, MD Neighborhoods for Deck Building</h2>

          <div className="areas-grid">
            <span className="area-pill">Glenmont</span>
            <span className="area-pill">Wheaton Hills</span>
            <span className="area-pill">Georgia Avenue Corridor</span>
            <span className="area-pill">Layhill Road</span>
            <span className="area-pill">Bauer Drive Area</span>
            <span className="area-pill">Kemp Road</span>
            <span className="area-pill">Wheaton Regional Park Area</span>
            <span className="area-pill">Silver Spring</span>
            <span className="area-pill">Kensington</span>
            <span className="area-pill">Rockville</span>
          </div>

          <div className="nearby-box">
            <h3>Also serving Silver Spring, MD — directly east of Wheaton</h3>
            <p>DMV-GC Group builds custom decks throughout Silver Spring, which shares Wheaton&apos;s split-level housing stock and Montgomery County permit process. Silver Spring&apos;s Four Corners neighborhood has the same elevated deck opportunities and similar CMU foundation considerations as Wheaton&apos;s Glenmont. <Link href="/service/decks/silver-spring-md">View our Silver Spring deck page &rarr;</Link></p>
          </div>

          <h2>Frequently Asked Questions — Deck Building in Wheaton, MD</h2>
          <Accordion defaultActiveKey="0" flush>
            {faqData.map((faq) => (
              <Accordion.Item eventKey={faq.eventKey} key={faq.eventKey}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="internal-links">
            <h2>Explore Our Other Services in Wheaton</h2>
            <ul>
              <li><Link href="/service/kitchen-remodeling/wheaton-md">Kitchen Remodeling in Wheaton, MD</Link></li>
              <li><Link href="/service/bathroom-remodeling">Bathroom Remodeling in Wheaton, MD</Link></li>
              <li><Link href="/service/basement-remodeling/wheaton-md">Basement Remodeling in Wheaton, MD</Link></li>
              <li><Link href="/service/adu/wheaton-md">ADU Construction in Wheaton, MD</Link></li>
              <li><Link href="/service/home-additions">Home Additions in Wheaton, MD</Link></li>
              <li><Link href="/service/design-build">Design-Build Contractor in Wheaton, MD</Link></li>
            </ul>
          </div>

          <div className="cta-banner">
            <h2>Ready to Build Your Wheaton Deck?</h2>
            <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. We&apos;ll assess your foundation type, design the right elevated deck for your split-level, and manage the Montgomery County permit from start to finish.</p>
            <Link href="/contact-us" className="cta-btn">Get Free Deck Estimate in Wheaton &rarr;</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
          </div>

        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
    </main>
  );
}
