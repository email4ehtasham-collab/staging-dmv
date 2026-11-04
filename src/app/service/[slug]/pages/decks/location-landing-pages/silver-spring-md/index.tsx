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
      "description": "Licensed deck builder serving Silver Spring, MD. Specializing in custom deck design for Silver Spring's diverse housing stock — split-level rear decks, elevated colonial decks, mid-century ranch decks, and multi-level outdoor living builds — with full Montgomery County permit management.",
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
        { "@type": "City", "name": "Silver Spring", "sameAs": "https://en.wikipedia.org/wiki/Silver_Spring,_Maryland" },
        { "@type": "City", "name": "Wheaton" },
        { "@type": "City", "name": "Kensington" },
        { "@type": "City", "name": "Takoma Park" },
        { "@type": "City", "name": "Bethesda" }
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "MHIC License", "credentialCategory": "Maryland Home Improvement Contractor License" }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "97", "bestRating": "5" },
      "priceRange": "$$$"
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/decks/silver-spring-md#service",
      "serviceType": "Deck Building",
      "name": "Deck Building in Silver Spring, MD",
      "alternateName": ["Custom Deck Construction", "Split-Level Deck", "Composite Deck", "Elevated Deck", "Multi-Level Deck"],
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Silver Spring", "sameAs": "https://en.wikipedia.org/wiki/Silver_Spring,_Maryland" },
      "description": "Custom deck building in Silver Spring, MD. Split-level rear decks, elevated colonial decks, mid-century ranch platform decks, and multi-level outdoor living builds — all permitted through Montgomery County DPS with full structural design and inspection management.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "16000", "maxPrice": "95000", "priceCurrency": "USD" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Decks", "item": "https://www.dmv-gc.com/service/decks" },
        { "@type": "ListItem", "position": 4, "name": "Silver Spring, MD", "item": "https://www.dmv-gc.com/service/decks/silver-spring-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to build a deck in Silver Spring, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deck construction in Silver Spring, MD typically costs between $16,000 and $95,000 depending on size, material, and home type. A pressure-treated rear deck for a split-level or ranch runs $16,000–$28,000. A composite deck on a split-level or colonial costs $26,000–$52,000. An elevated multi-level deck with stairs costs $42,000–$75,000. A full outdoor living build with pergola and built-in features runs $58,000–$95,000. Silver Spring's diverse housing stock — from compact mid-century ranches in Four Corners to larger colonials in Woodside — means project scope and cost vary meaningfully by neighborhood. DMV-GC Group provides free in-home consultations with detailed estimates."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group handle Montgomery County deck permits for Silver Spring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Silver Spring is in unincorporated Montgomery County — all deck permits go through Montgomery County DPS. DMV-GC Group files all required building permits with structural drawings and manages all county correspondence, plan review, and inspection scheduling as a standard part of every Silver Spring deck project. Homeowners never need to contact the county directly."
          }
        },
        {
          "@type": "Question",
          "name": "What deck type works best for Silver Spring split-level homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Silver Spring's 1950s–70s split-level homes are excellent deck candidates. The raised main living floor — typically 4–6 feet above rear grade — creates a naturally elevated deck connection from the living or dining room sliding door, with the deck surface at or just below the main floor threshold. This elevation gives the deck excellent sight lines over the rear yard and natural separation from the ground level. The structural framing is more substantial than a ground-level deck, but the result — an elevated rear deck that functions as a genuine outdoor room off the main living floor — is one of the most functional deck configurations in any housing type. DMV-GC Group has designed and built elevated split-level decks throughout Silver Spring's Woodside, Four Corners, and Sligo Creek neighborhoods."
          }
        },
        {
          "@type": "Question",
          "name": "What deck designs work for Silver Spring's mid-century ranch homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Silver Spring's 1950s–60s ranch homes are at or near grade on all sides — the ideal configuration for a low-profile ground-level deck that connects seamlessly to the rear yard. A platform deck just 12–18 inches above grade is structurally simpler and lower-cost than an elevated deck, and creates a natural indoor-outdoor flow from the ranch's rear door. Mid-century modern design sensibility — horizontal lines, warm wood tones, simple clean railings or no railing at lower heights — suits these homes well. Composite decking in a mid-century-compatible warm grey or cedar tone is a popular choice for Silver Spring ranch decks."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for deck building in Silver Spring, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Silver Spring and Montgomery County. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every deck project completed in Silver Spring."
          }
        }
      ]
    }
  ]
};

const faqData = [
  { eventKey: "0", question: "How much does it cost to build a deck in Silver Spring, MD?", answer: "Deck construction in Silver Spring typically costs $16,000–$95,000 depending on home type, elevation, material, and features. A ground-level ranch platform deck runs $16,000–$26,000 in pressure-treated. A composite ground-level deck costs $24,000–$44,000. An elevated split-level composite deck runs $38,000–$65,000. An elevated deck with under-deck drainage system costs $48,000–$78,000. A multi-level deck with stairs costs $52,000–$88,000. Montgomery County permits are included in every scope. DMV-GC Group provides free in-home consultations with detailed estimates." },
  { eventKey: "1", question: "What is the best deck type for a Silver Spring split-level home?", answer: "An elevated rear deck off the main living floor — accessed from a sliding or French door — is the most functional deck configuration for Silver Spring&apos;s split-levels. The deck surface sits at roughly the same level as the main living and dining areas, creating a genuine indoor-outdoor connection. At 4–6 feet of elevation, the space below the deck can be converted to a covered patio using an under-deck drainage system. Stairs connect the deck to the lower yard level. Composite decking with cable or wood railing is the most popular material choice for Four Corners and Burnt Mills split-levels." },
  { eventKey: "2", question: "Does DMV-GC Group handle Montgomery County deck permits for Silver Spring?", answer: "Yes. Silver Spring is in unincorporated Montgomery County — all deck permits go through Montgomery County DPS. DMV-GC Group files all required building permits with complete structural drawings and manages all county correspondence, plan review, and inspection scheduling. Homeowners never need to contact the county directly." },
  { eventKey: "3", question: "What is an under-deck drainage system and should I add one to my Silver Spring split-level deck?", answer: "An under-deck drainage system is a waterproof ceiling installed beneath an elevated deck that channels rain water away through gutters and downspouts — converting the space beneath the deck from an exposed, wet area to a functional covered patio or outdoor workspace. For Silver Spring&apos;s Four Corners split-levels with 4–6 feet of clearance below the deck, an under-deck system adds meaningful usable outdoor space and is one of our most requested add-ons. DMV-GC Group installs complete under-deck systems as part of new deck builds or as a retrofit to existing elevated decks." },
  { eventKey: "4", question: "Is DMV-GC Group licensed for deck building in Silver Spring, MD?", answer: "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Silver Spring and Montgomery County. We are fully bonded, carry comprehensive general liability insurance and workers&apos; compensation coverage, and provide a 1-year workmanship warranty on every Silver Spring deck project." }
];

export default function DecksSilverSpringMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => { setActiveMenuItem("service"); }, []);
  return (
    <main>
      <div className="city-service-detail-page decks-silver-spring-md">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/services">Services</Link><span>›</span>
            <Link href="/service/decks">Deck Building</Link><span>›</span>
            Silver Spring, MD
          </nav>

          <div className="hero">
            <div className="hero-location-tag">📍 Serving Silver Spring, MD</div>
            <h1>Deck Building in Silver Spring, MD — Custom Deck Contractor for Every Home Type</h1>
            <div className="hero-meta">
              <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
              <span className="badge">✓ MHIC Licensed &amp; Insured</span>
              <span className="badge">✓ MoCo Permits Handled</span>
              <span className="badge">✓ Split-Level Specialists</span>
              <span className="badge dark">📞 +1 240-730-1292</span>
            </div>
          </div>

          <div className="diversity-banner">
            <div className="icon">🏘️</div>
            <div>
              <h3>Silver Spring&apos;s Housing Diversity Means Your Deck Needs a Contractor Who Knows Every Home Type — Not Just One</h3>
              <p>Silver Spring is one of Montgomery County&apos;s most architecturally diverse communities — 1920s–30s Tudors in Woodside, 1950s–60s split-levels throughout Four Corners, mid-century ranches in Hillandale and Burnt Mills, and newer colonials in Kemp Mill and White Oak. Each home type presents different deck connection points, different elevation challenges, different structural requirements, and different design sensibilities. A split-level deck built 5 feet off the ground behind a Four Corners home is a completely different project from a ground-level ranch platform in Hillandale. DMV-GC Group has designed and built custom decks across Silver Spring&apos;s full range of home types — and we approach each one based on what the specific home, lot, and homeowner actually needs.</p>
            </div>
          </div>

          <div className="intro-box">
            Looking for a trusted <strong>deck contractor in Silver Spring, MD</strong>? Whether you&apos;re building an elevated rear deck off a Four Corners split-level, adding a ground-level platform deck to a Hillandale ranch, replacing a deteriorating wood deck on a Woodside colonial, or designing a full outdoor room with pergola and built-in features for a Kemp Mill backyard, DMV-GC Group&apos;s licensed design-build team understands the specific home types, lot conditions, and Montgomery County permit requirements that Silver Spring deck projects involve. We design decks that work with your home — not against it — and build them to last.
          </div>

          <div className="trust-bar">
            <div className="trust-item">
              <div className="icon">🏘️</div>
              <strong>Every Home Type</strong>
              <span>Split-levels, ranches, colonials &amp; more</span>
            </div>
            <div className="trust-item">
              <div className="icon">📋</div>
              <strong>MoCo Permits &amp; COO</strong>
              <span>Montgomery County — fully managed</span>
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

          <h2>Deck Building Services in Silver Spring, MD</h2>

          <div className="service-grid">
            <div className="service-item">Custom Deck Design &amp; Build (All Home Types)</div>
            <div className="service-item">Elevated Split-Level Deck Construction</div>
            <div className="service-item">Ground-Level Ranch Platform Deck</div>
            <div className="service-item">Composite Deck (Trex / TimberTech / Azek)</div>
            <div className="service-item">Pressure-Treated &amp; Cedar Deck</div>
            <div className="service-item">Multi-Level Deck with Stairs</div>
            <div className="service-item">Pergola &amp; Covered Deck Structure</div>
            <div className="service-item">Cable &amp; Wood Railing Systems</div>
            <div className="service-item">Built-In Seating &amp; Storage Benches</div>
            <div className="service-item">Under-Deck Drainage &amp; Dry Space</div>
            <div className="service-item">Deck Lighting Systems</div>
            <div className="service-item">Deck Replacement &amp; Structural Rebuild</div>
            <div className="service-item">Structural Assessment of Existing Decks</div>
            <div className="service-item">Montgomery County Permit Processing</div>
          </div>

          <div className="author-box">
            <div className="author-avatar">🏠</div>
            <div className="author-info">
              <h4>About DMV-GC Group — Silver Spring&apos;s Licensed Custom Deck Contractor</h4>
              <p>DMV-GC Group is based in nearby North Bethesda and has completed deck builds, kitchen remodels, bathroom renovations, basement ADUs, and whole-home renovations throughout Silver Spring&apos;s neighborhoods — Woodside, Four Corners, Hillandale, Kemp Mill, Burnt Mills, White Oak, and beyond. We understand the structural demands of elevated split-level decks, the design sensibility of mid-century ranch homes, and the Montgomery County DPS permit process for every deck type. We hold a Maryland MHIC license and back every project with a 1-year workmanship warranty.</p>
              <div className="author-creds">
                <span className="cred">MHIC Licensed</span>
                <span className="cred">Split-Level Deck Specialists</span>
                <span className="cred">MoCo Permit Experts</span>
                <span className="cred">Licensed Electricians</span>
                <span className="cred">4.9★ Rated</span>
                <span className="cred">1-Year Warranty</span>
              </div>
            </div>
          </div>

          <h2>Silver Spring&apos;s Home Types — What Each One Means for Deck Design</h2>
          <p>
            Silver Spring&apos;s housing diversity is its defining characteristic — and it means deck design here is not one-size-fits-all. Here is how the community&apos;s main home types shape the deck project:
          </p>

          <div className="home-type-grid">
            <div className="home-type-card">
              <h3>1950s–70s Split-Level</h3>
              <span className="hood-tag">Four Corners · Burnt Mills · Sligo Creek area</span>
              <p>Silver Spring&apos;s most common deck candidate. The main living floor sits 4–6 feet above rear grade — a sliding or French door from the living room or dining room opens to a naturally elevated deck position. The deck structure is more substantial than a ground-level build, with longer posts, heavier beams, and stair access to the lower yard. Under-deck space is often usable as a covered patio. This elevated rear deck is the most functional deck configuration in Silver Spring — it creates a genuine outdoor living room at the same level as the interior.</p>
            </div>
            <div className="home-type-card">
              <h3>1950s–60s Ranch / Cape Cod</h3>
              <span className="hood-tag">Hillandale · White Oak · Kemp Mill</span>
              <p>Ranch homes are at or near grade on all sides — the ideal configuration for a low-profile ground-level deck. A platform deck 12–18 inches above grade is structurally simpler and lower-cost, and creates seamless indoor-outdoor flow from the rear door. No railing required at lower heights — which makes the deck feel more connected to the yard. Mid-century compatible materials and clean horizontal lines suit these homes naturally.</p>
            </div>
            <div className="home-type-card">
              <h3>1920s–40s Tudor &amp; Colonial</h3>
              <span className="hood-tag">Woodside · Woodside Park · Downtown adjacent</span>
              <p>Silver Spring&apos;s older Tudors and colonials have rear elevations that vary by specific home — some have walk-out basements creating two-level opportunities, others are at moderate elevation. These homes have established architectural character that rewards thoughtful deck design. Painted wood railings, natural wood tones, and proportionate deck scale read best here. DMV-GC Group assesses the specific home elevation and rear yard before designing for any older Silver Spring home.</p>
            </div>
            <div className="home-type-card">
              <h3>1980s–2000s Colonial &amp; Contemporary</h3>
              <span className="hood-tag">Kemp Mill · White Oak · Colesville Road corridor</span>
              <p>Newer Silver Spring colonials typically have larger rear yards and may have walk-out or daylight basement conditions on sloped lots. These homes support multi-level deck builds — upper deck off the main living floor, lower deck or patio at ground level — with the full range of composite and hardwood material options. Contemporary homes in this category are also candidates for cable or glass railing, pergola additions, and outdoor kitchen integration.</p>
            </div>
          </div>

          <h2>Elevated Split-Level Decks in Silver Spring — Design and Structural Considerations</h2>
          <p>
            Silver Spring&apos;s 1950s–70s split-levels represent the largest deck opportunity in the community — and the one that requires the most structural attention. Here is what makes elevated split-level decks different from ground-level builds, and what DMV-GC Group does to get them right:
          </p>

          <div className="spec-box">
            <h3>🏗️ Split-Level Deck Structural Considerations — Silver Spring Specific</h3>
            <ul>
              <li><strong>Post height and foundation:</strong> Elevated decks on Silver Spring split-levels typically require posts of 4–7 feet — longer than ground-level builds. These posts bear significant loads and must be set in concrete footings sized for the elevation and the deck&apos;s total tributary load. DMV-GC Group&apos;s in-house structural team sizes every footing and post for the specific elevation and deck plan.</li>
              <li><strong>Ledger board connection:</strong> The deck ledger — the board that attaches the deck to the home&apos;s rim joist — is the most critical structural connection on any attached deck. On Silver Spring&apos;s 1950s–70s homes, the rim joist and house wrap condition must be assessed before the ledger is attached. DMV-GC Group inspects the ledger attachment zone on every Silver Spring elevated deck before framing begins.</li>
              <li><strong>Beam sizing for elevated spans:</strong> Longer post heights require deeper beams to carry the joist loads across wider spans. DMV-GC Group specifies beam dimensions based on actual calculated loads — not rule-of-thumb estimates — for every Silver Spring elevated deck.</li>
              <li><strong>Stair design and code compliance:</strong> A 4–6 foot elevation requires a proper stair run — tread depth, riser height, handrail height, and intermediate landing placement all governed by Montgomery County code. DMV-GC Group designs code-compliant stair runs that fit the specific lot dimensions of each Silver Spring property.</li>
              <li><strong>Under-deck utilization:</strong> At 4–6 feet of clearance, the space beneath an elevated Silver Spring split-level deck is practical for use — as a covered patio, storage area, or outdoor workspace. DMV-GC Group can integrate an under-deck drainage and ceiling system that converts this space from a mud trap to a genuinely usable covered area below. Popular in Silver Spring&apos;s Four Corners neighborhood.</li>
              <li><strong>Railing height at elevation:</strong> Decks 30 inches or more above grade require guardrail systems — a fixed requirement for all Silver Spring elevated decks. DMV-GC Group designs railing systems that meet height and baluster spacing requirements while contributing positively to the deck&apos;s overall aesthetic.</li>
            </ul>
          </div>

          <h2>Popular Deck Features for Silver Spring Homes</h2>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="icon">☂️</div>
              <strong>Pergola &amp; Shade Structure</strong>
              <span>Shade for Silver Spring&apos;s hot summers — wood or aluminum pergola adds structure, character, and support for string lights or outdoor curtains</span>
            </div>
            <div className="feature-box">
              <div className="icon">🪑</div>
              <strong>Built-In Seating</strong>
              <span>Integrated benches along the deck perimeter — seat more guests in the same footprint without crowding the deck with furniture</span>
            </div>
            <div className="feature-box">
              <div className="icon">💡</div>
              <strong>Deck Lighting</strong>
              <span>Post cap, step, rail, and recessed deck lighting — extend usable hours into the evening in Silver Spring&apos;s outdoor-friendly climate</span>
            </div>
            <div className="feature-box">
              <div className="icon">🔩</div>
              <strong>Cable Railing</strong>
              <span>Horizontal cable railing preserves sightlines across Silver Spring&apos;s rear yards and wooded lots — popular on contemporary and mid-century homes</span>
            </div>
            <div className="feature-box">
              <div className="icon">🌧️</div>
              <strong>Under-Deck Drainage System</strong>
              <span>Convert the space beneath an elevated Four Corners split-level deck into a dry, covered patio — usable in rain, practical for storage, and a genuine space addition</span>
            </div>
            <div className="feature-box">
              <div className="icon">🍳</div>
              <strong>Grill Station / Outdoor Kitchen</strong>
              <span>Built-in grill station with countertop, storage, and optional refrigeration — managed by in-house licensed gas, electrical, and plumbing trades</span>
            </div>
          </div>

          <h2>Serving All Silver Spring Neighborhoods for Deck Building</h2>
          <p>
            Silver Spring&apos;s neighborhoods span a wide geographic and architectural range. DMV-GC Group has built decks across all of them:
          </p>

          <div className="home-type-grid">
            <div className="home-type-card">
              <h3>Woodside &amp; Woodside Park</h3>
              <span className="hood-tag">Historic Tudors &amp; colonials</span>
              <p>Silver Spring&apos;s oldest residential neighborhoods adjacent to downtown. 1920s–40s Tudors and colonials with established trees and rear yards. Deck designs here emphasize architectural compatibility with older homes — painted wood railings, natural material tones, proportionate scale. MoCo permits required.</p>
            </div>
            <div className="home-type-card">
              <h3>Four Corners</h3>
              <span className="hood-tag">Split-levels · most active deck market</span>
              <p>Silver Spring&apos;s most active deck renovation neighborhood — 1950s–70s split-levels with main living floors 4–6 feet above rear grade. Elevated rear deck off the living room is the dominant project type. Under-deck dry space systems are popular here. MoCo permits required.</p>
            </div>
            <div className="home-type-card">
              <h3>Hillandale &amp; Burnt Mills</h3>
              <span className="hood-tag">Mid-century ranches &amp; split-levels</span>
              <p>Mix of ranch homes and split-levels from the 1950s–60s. Ranch properties ideal for ground-level platform decks in mid-century compatible materials. Sloped lots toward Sligo Creek create split-level deck opportunities on many streets. MoCo permits required.</p>
            </div>
            <div className="home-type-card">
              <h3>Kemp Mill</h3>
              <span className="hood-tag">1970s–80s colonials</span>
              <p>Larger colonials from the 1970s–80s with more substantial rear yards. Multi-level deck builds are more feasible here than in the older, denser Silver Spring neighborhoods. Composite decking and cable railing are popular choices. MoCo permits required.</p>
            </div>
            <div className="home-type-card">
              <h3>White Oak &amp; Calverton</h3>
              <span className="hood-tag">Diverse 1960s–90s housing</span>
              <p>Eastern Silver Spring neighborhoods with diverse housing including ranches, split-foyers, and colonials from multiple decades. Good rear yard depth on many properties supports larger deck footprints. MoCo permits required. Purple Line proximity adds future transit value to these neighborhoods.</p>
            </div>
            <div className="home-type-card">
              <h3>Downtown Silver Spring Adjacent</h3>
              <span className="hood-tag">Rowhouses &amp; small lots</span>
              <p>Neighborhoods immediately adjacent to downtown Silver Spring have smaller lots and often rowhouse or semi-detached configurations. Deck scope is constrained by lot size and attached neighbor conditions. A modest rear deck or rooftop deck (where structurally feasible) can significantly enhance outdoor living on these compact urban properties.</p>
            </div>
          </div>

          <h2>Our Deck Building Process in Silver Spring</h2>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Free In-Home Consultation &amp; Home Type Assessment</h3>
                <p>We visit your Silver Spring home, identify the home type and rear elevation, walk the deck area, assess terrain and existing conditions, and discuss your vision, intended use, and budget. For split-level homes, we assess the main floor elevation and ledger attachment zone. For ranch homes, we assess grade conditions and drainage. No cost, no obligation.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Custom Deck Design — Home-Type Appropriate</h3>
                <p>Our design team develops a deck layout, structural plan, elevation drawings, railing style, and material specification that suits your specific Silver Spring home. For split-levels, structural beam and post sizing is calculated from actual loads. For ranches, the design maximizes the indoor-outdoor connection at grade. Full plan drawings produced for Montgomery County permit submission.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>Montgomery County Permit Filing</h3>
                <p>We file all required building permits with Montgomery County DPS, including complete structural drawings. Our permit team manages all county correspondence, plan review responses, and inspection scheduling from application through final inspection.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>Footing Installation &amp; Ledger Attachment</h3>
                <p>Post holes drilled to frost depth, footings poured and cured. For elevated split-level decks, the ledger is attached to the home&apos;s rim joist with proper flashing and fastener pattern per structural drawings — the most critical structural step on any attached deck. County footing inspection scheduled at this stage.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">5</div>
              <div className="step-content">
                <h3>Framing, Decking &amp; Features</h3>
                <p>Pressure-treated framing, beam installation, joist layout, then decking boards, railing system, stair construction, pergola framing where included, built-in seating, and lighting wiring — coordinated by a project manager throughout. County framing inspection scheduled at the appropriate stage.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">6</div>
              <div className="step-content">
                <h3>County Final Inspection, Walkthrough &amp; 1-Year Warranty</h3>
                <p>Montgomery County final inspection managed by our permit team. After approval, thorough walkthrough with the homeowner, every punch list item addressed, and 1-year workmanship warranty activated.</p>
              </div>
            </div>
          </div>

          <h2>Deck Building Cost in Silver Spring, MD</h2>
          <p>
            Costs vary meaningfully in Silver Spring based on home type and elevation. Here is a realistic breakdown:
          </p>

          <table className="cost-table">
            <tbody>
              <tr>
                <th>Deck Type / Scope</th>
                <th>Typical Cost Range</th>
                <th>Notes for Silver Spring</th>
              </tr>
              <tr>
                <td>Ground-Level Ranch Platform Deck — PT (200–280 sq ft)</td>
                <td>$16,000 – $26,000</td>
                <td>Low-profile, simple structure, no railing required at lower heights. Hillandale, Burnt Mills ranch homes. MoCo permit included.</td>
              </tr>
              <tr>
                <td>Ground-Level Composite Deck (200–300 sq ft)</td>
                <td>$24,000 – $44,000</td>
                <td>Trex or TimberTech on PT frame. Low maintenance, mid-century compatible tones. Ranch and split-foyer homes.</td>
              </tr>
              <tr>
                <td>Elevated Split-Level Deck — Composite (280–400 sq ft)</td>
                <td>$38,000 – $65,000</td>
                <td>Four Corners and Burnt Mills split-levels. Larger posts, beams, footings for elevation. Stair to lower yard included. Railing required.</td>
              </tr>
              <tr>
                <td>Elevated Deck with Under-Deck System</td>
                <td>$48,000 – $78,000</td>
                <td>Elevated split-level deck + drainage ceiling system converting space below to usable covered patio. Popular in Four Corners.</td>
              </tr>
              <tr>
                <td>Multi-Level Deck (Upper + Lower) with Stairs</td>
                <td>$52,000 – $88,000</td>
                <td>Two connected levels for colonials and split-levels with deeper lots. Kemp Mill and White Oak properties. Full composite or hardwood.</td>
              </tr>
              <tr>
                <td>Composite Deck with Pergola (300–400 sq ft)</td>
                <td>$44,000 – $75,000</td>
                <td>Shade structure over main deck area. Wood or aluminum pergola. Popular across Four Corners, Woodside, and Kemp Mill.</td>
              </tr>
              <tr>
                <td>Deck Replacement (Remove &amp; Rebuild)</td>
                <td>$24,000 – $58,000</td>
                <td>Demolition + disposal of existing structure + new deck. MoCo permit required. Structural ledger reassessment included.</td>
              </tr>
            </tbody>
          </table>

          <div className="tip">
            💡 <strong>Silver Spring Deck ROI:</strong> Silver Spring&apos;s proximity to the Red Line Metro, its strong employment base, and its active housing market make quality deck additions a solid investment. A well-built elevated composite deck on a Four Corners split-level — the community&apos;s most common home type — typically adds $28,000–$45,000 in appraised value and meaningfully shortens time-on-market at resale. Buyers in this price range actively compare outdoor living space as a decision factor.
          </div>

          <div className="cta-banner">
            <h2>Get a Free Deck Consultation in Silver Spring</h2>
            <p>We&apos;ll visit your Silver Spring home, assess your home type and elevation, discuss the deck design that works best for your specific property, and provide a detailed estimate. No cost, no obligation.</p>
            <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
          </div>

          <h2>What Silver Spring Homeowners Say About DMV-GC Group</h2>

          <div className="review-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our Four Corners split-level has the main living room about five feet above the back yard. DMV-GC Group built us an elevated Trex deck off the sliding door — with cable railing for the view and stairs down to the yard. They also put in the under-deck drainage system so we have a covered patio below. Best outdoor upgrade we&apos;ve done.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Four Corners, Silver Spring MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;We have a 1958 ranch in Hillandale — basically at grade on all sides. DMV-GC Group designed a low-profile composite platform deck that&apos;s seamlessly connected to the rear door. No railing needed at that height. It looks like it was always part of the house. MoCo permit handled start to finish.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Hillandale, Silver Spring MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;We wanted a pergola over our deck for shade — Silver Spring summers are brutal. DMV-GC Group integrated the pergola into the deck structure from day one. The craftsman-style posts match our 1930s Woodside Tudor. Montgomery County permit was filed and managed by their team without us having to do anything.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Woodside, Silver Spring MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our old PT deck had a compromised ledger — we didn&apos;t know until DMV-GC Group&apos;s assessment showed us the deterioration behind the flashing. They replaced the whole deck with a two-level TimberTech build — upper deck off the living room, lower landing near the yard. The structural honesty before the project saved us from a real safety issue.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Kemp Mill, Silver Spring MD</span></div>
            </div>
          </div>

          <div className="highlight">
            <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Silver Spring homeowners trust DMV-GC Group for deck projects that understand the structural demands of elevated split-level builds, the design sensibility of mid-century ranches, the permit process at Montgomery County DPS, and the full range of home types across this diverse community.</p>
          </div>

          <h2>Serving All Silver Spring, MD Neighborhoods for Deck Building</h2>

          <div className="areas-grid">
            <span className="area-pill">Four Corners</span>
            <span className="area-pill">Woodside</span>
            <span className="area-pill">Woodside Park</span>
            <span className="area-pill">Hillandale</span>
            <span className="area-pill">Burnt Mills</span>
            <span className="area-pill">Kemp Mill</span>
            <span className="area-pill">White Oak</span>
            <span className="area-pill">Calverton</span>
            <span className="area-pill">Sligo Creek</span>
            <span className="area-pill">Downtown Silver Spring</span>
          </div>

          <div className="nearby-box">
            <h3>Also serving Wheaton, MD — directly west of Silver Spring</h3>
            <p>DMV-GC Group builds custom decks throughout Wheaton, which shares Silver Spring&apos;s split-level housing stock and Montgomery County permit process. <Link href="/service/decks">View our full deck building service page &rarr;</Link></p>
          </div>

          <h2>Frequently Asked Questions — Deck Building in Silver Spring, MD</h2>
          <Accordion defaultActiveKey="0" flush>
            {faqData.map((faq) => (
              <Accordion.Item eventKey={faq.eventKey} key={faq.eventKey}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="internal-links">
            <h2>Explore Our Other Services in Silver Spring</h2>
            <ul>
              <li><Link href="/service/kitchen-remodeling/silver-spring-md">Kitchen Remodeling in Silver Spring, MD</Link></li>
              <li><Link href="/service/bathroom-remodeling">Bathroom Remodeling in Silver Spring, MD</Link></li>
              <li><Link href="/service/basement-remodeling/silver-spring-md">Basement Remodeling in Silver Spring, MD</Link></li>
              <li><Link href="/service/adu/silver-spring-md">ADU Construction in Silver Spring, MD</Link></li>
              <li><Link href="/service/home-additions">Home Additions in Silver Spring, MD</Link></li>
              <li><Link href="/service/design-build">Design-Build Contractor in Silver Spring, MD</Link></li>
            </ul>
          </div>

          <div className="cta-banner">
            <h2>Ready to Build Your Silver Spring Deck?</h2>
            <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. We&apos;ll assess your home type, design the right deck for your property, and manage the Montgomery County permit process from start to finish.</p>
            <Link href="/contact-us" className="cta-btn">Get Free Deck Estimate in Silver Spring &rarr;</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
          </div>

        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
    </main>
  );
}
