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
        "description": "Licensed deck builder serving Cabin John, MD. Specializing in walkout basement deck conversions, elevated rear decks, and multi-level outdoor living builds for Cabin John's wooded, sloped-lot homes — with tree-aware construction, Montgomery County permit management, and design that connects the home to Cabin John's extraordinary natural setting.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "11810 Grand Park Ave, Suite 500",
          "addressLocality": "North Bethesda",
          "addressRegion": "MD",
          "postalCode": "20852",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 39.0458,
          "longitude": -77.1139
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Cabin John",
            "sameAs": "https://en.wikipedia.org/wiki/Cabin_John,_Maryland"
          },
          {
            "@type": "City",
            "name": "Bethesda"
          },
          {
            "@type": "City",
            "name": "Potomac"
          },
          {
            "@type": "City",
            "name": "North Bethesda"
          },
          {
            "@type": "City",
            "name": "Chevy Chase"
          }
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "MHIC License",
            "credentialCategory": "Maryland Home Improvement Contractor License"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "97",
          "bestRating": "5"
        },
        "priceRange": "$$$"
      },
      {
        "@type": "Service",
        "@id": "https://www.dmv-gc.com/service/decks/cabin-john-md#service",
        "serviceType": "Deck Building",
        "name": "Deck Building in Cabin John, MD",
        "alternateName": [
          "Custom Deck Construction",
          "Walkout Deck",
          "Elevated Rear Deck",
          "Wooded Lot Deck",
          "Sloped Lot Deck"
        ],
        "provider": {
          "@id": "https://www.dmv-gc.com/#business"
        },
        "areaServed": {
          "@type": "City",
          "name": "Cabin John",
          "sameAs": "https://en.wikipedia.org/wiki/Cabin_John,_Maryland"
        },
        "description": "Custom deck building in Cabin John, MD. Walkout basement decks, elevated rear decks, multi-level wooded landscape builds, and rear terrace additions for Cabin John's sloped, tree-covered lots along MacArthur Boulevard — with tree-aware construction practices and Montgomery County permit management.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "28000",
            "maxPrice": "110000",
            "priceCurrency": "USD"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.dmv-gc.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://www.dmv-gc.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Decks",
            "item": "https://www.dmv-gc.com/service/decks"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Cabin John, MD",
            "item": "https://www.dmv-gc.com/service/decks/cabin-john-md"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does it cost to build a deck in Cabin John, MD?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Deck construction in Cabin John, MD typically costs between $28,000 and $110,000 depending on deck type, terrain, and scope. A walkout basement deck accessed from an existing rear door runs $28,000–$55,000. An elevated rear deck on a sloped lot costs $36,000–$68,000. A multi-level deck with rear terrace integration runs $52,000–$88,000. A full outdoor living build with pergola and outdoor kitchen on a larger Cabin John property can reach $70,000–$110,000. Site conditions — slope, tree proximity, terrain — vary more in Cabin John than in flat suburban communities and affect cost accordingly. DMV-GC Group visits every property before any estimate is prepared."
            }
          },
          {
            "@type": "Question",
            "name": "How does tree protection affect deck construction in Cabin John?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Significantly. Cabin John's mature tree canopy is the community's defining characteristic and is protected under Montgomery County's Forest Conservation Law. Any deck footing installation, post hole drilling, or other excavation near significant trees must be assessed for proximity to the tree's Critical Root Zone — approximately 1 foot of radius per inch of trunk diameter. DMV-GC Group identifies all significant trees near any proposed deck footings before design is finalized, and uses extended joist spans to jump root zones where possible rather than relocating or removing footings from optimal structural positions."
            }
          },
          {
            "@type": "Question",
            "name": "What deck types work best on Cabin John's sloped lots?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cabin John's terrain along the Potomac River palisades creates excellent elevated deck opportunities — particularly where homes have walkout basements or significant rear grade drops. A walkout basement deck (accessed from the existing rear door at basement level, with the deck surface at or just above grade on the downhill side) is the most natural and cost-effective deck configuration for Cabin John's sloped lots. Where the main living floor is elevated above the rear grade, an elevated rear deck off the main floor — with post heights varying to follow the slope — is the most functional configuration. Multi-level decks that step down with the terrain are also highly effective on Cabin John's steeply sloped properties."
            }
          },
          {
            "@type": "Question",
            "name": "Does DMV-GC Group handle Montgomery County deck permits for Cabin John?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Cabin John is in unincorporated Montgomery County — all deck permits go through Montgomery County DPS. DMV-GC Group files all required building permits with structural drawings and manages all county correspondence, plan review, and inspection scheduling as a standard part of every Cabin John deck project. Significant trees near proposed construction are documented on permit drawings as required under Montgomery County's Forest Conservation Law."
            }
          },
          {
            "@type": "Question",
            "name": "Is DMV-GC Group licensed for deck building in Cabin John, MD?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Cabin John and Montgomery County. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every deck project in Cabin John."
            }
          }
        ]
      }
    ]
  };

const faqData = [
  { eventKey: "0", question: "How much does it cost to build a deck in Cabin John, MD?", answer: "Deck construction in Cabin John typically costs $28,000–$110,000 depending on type, terrain, and scope. A walkout-level composite deck runs $28,000–$50,000. An Ipe walkout deck costs $38,000–$65,000. An elevated main-floor deck on a sloped lot runs $38,000–$68,000. A deck with rear terrace costs $36,000–$68,000. A multi-level terrain-following deck runs $52,000–$90,000. Extended beam spans to bridge significant tree root zones add $1,500–$4,500 per span. Site conditions — terrain slope and tree proximity — affect cost more in Cabin John than in flat suburban communities. DMV-GC Group visits every property before any estimate is prepared." },
  { eventKey: "1", question: "How does DMV-GC Group protect trees during deck construction in Cabin John?", answer: "Tree protection is a mandatory first step on every Cabin John deck project — not an afterthought. We map the Critical Root Zone (CRZ) of every significant tree near the proposed deck footprint before any post locations are proposed. We design extended beam spans to bridge root zones where possible, use hand tools within CRZs where excavation is unavoidable, plan equipment access routes to avoid driving over root zones, and document significant trees on permit drawings as required by the Montgomery County Forest Conservation Law." },
  { eventKey: "2", question: "What deck type works best for Cabin John's sloped lots?", answer: "It depends on where your home's rear door sits relative to the grade. For walkout basement homes — where an existing door opens at basement level to the downhill rear yard — a walkout-level deck is the most natural and cost-effective option. For homes where the main living floor is significantly elevated above the rear grade, an elevated rear deck with variable-height posts following the slope is the most functional configuration. Multi-level decks that step between both levels are the most complete solution for homes with both configurations. DMV-GC Group assesses your specific terrain configuration during the free consultation." },
  { eventKey: "3", question: "Is Ipe hardwood a good choice for Cabin John decks?", answer: "Yes — particularly for homeowners who want a material that ages into the Cabin John landscape rather than maintaining an artificially maintained suburban look. Ipe's warm brown weathers to a distinguished silver-grey over 12–18 months if left unfinished — a color that integrates beautifully with Cabin John's grey-brown bark and stone. Its 40–75 year lifespan, Class A fire resistance, and genuine natural wood character make it well-suited to this setting. Pre-drilling every fastener location and sealing every cut end are essential correct Ipe installation practices — DMV-GC Group's carpenters are trained in both." },
  { eventKey: "4", question: "Does DMV-GC Group handle Montgomery County deck permits for Cabin John?", answer: "Yes. Cabin John is in unincorporated Montgomery County — all deck permits go through Montgomery County DPS. DMV-GC Group files all required building permits with complete structural drawings, including significant tree documentation as required under the Forest Conservation Law. Our permit team manages all county correspondence, plan review responses, and inspection scheduling from permit application through final inspection." }
];

export default function DecksCabinJohnMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => { setActiveMenuItem("service"); }, []);
  return (
    <main>
      <div className="city-service-detail-page decks-cabin-john-md">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">
              Home
            </Link>
            <span>
              ›
            </span>
            <Link href="/services">
              Services
            </Link>
            <span>
              ›
            </span>
            <Link href="/service/decks">
              Deck Building
            </Link>
            <span>
              ›
            </span>
            Cabin John, MD
          </nav>
          <div className="hero">
            <div className="hero-location-tag">
              📍 Serving Cabin John, MD
            </div>
            <h1>
              Deck Building in Cabin John, MD — Walkout Deck &amp; Elevated Rear Deck Contractor for Wooded Sloped Lots
            </h1>
            <div className="hero-meta">
              <span className="badge">
                ⭐ 4.9 Rating · 97+ Reviews
              </span>
              <span className="badge">
                ✓ MHIC Licensed &amp; Insured
              </span>
              <span className="badge">
                ✓ Tree-Aware Construction
              </span>
              <span className="badge">
                ✓ MoCo Permits Handled
              </span>
              <span className="badge dark">
                📞 +1 240-730-1292
              </span>
            </div>
          </div>
          <div className="terrain-banner">
            <div className="icon">
              🌲
            </div>
            <div>
              <h3>
                Cabin John&apos;s Terrain Creates Deck Opportunities That Flat Suburban Lots Simply Cannot — But Building Here Requires a Contractor Who Understands the Trees
              </h3>
              <p>
                Cabin John&apos;s dramatic topography along the Potomac River palisades — sloped lots carved by the Cabin John Creek valley, mature tree canopies that define the community&apos;s character, and rear yards that drop away dramatically from the home&apos;s main level — creates elevated and multi-level deck opportunities that are genuinely rare in Montgomery County. A walkout basement deck here opens directly to the wooded rear landscape. An elevated main-floor deck commands views across treetops and down toward the C&amp;O Canal corridor. But every footing, every post hole, every excavation near the foundation must be assessed for proximity to the mature trees that make Cabin John worth living in. DMV-GC Group designs Cabin John decks that take full advantage of the terrain and the landscape — and builds them with the tree-aware construction approach that this community&apos;s canopy demands.
              </p>
            </div>
          </div>
          <div className="intro-box">
            Looking for a trusted
            <strong>
              deck contractor in Cabin John, MD
            </strong>
            ? Cabin John&apos;s wooded, sloped-lot homes along MacArthur Boulevard and Seven Locks Road — adjacent to the C&amp;O Canal National Historical Park and the Cabin John Creek stream valley — are among the most distinctive residential settings in Montgomery County. A deck here is more than an outdoor platform: it is the structure that mediates between the home and an extraordinary natural landscape. Designing it correctly requires understanding Cabin John&apos;s specific terrain types (walkout, daylight, and below-grade basements), identifying significant trees before any footing is placed, and choosing materials and orientations that connect to rather than compete with the wooded setting. DMV-GC Group brings this understanding to every Cabin John deck project — from the first consultation through the Montgomery County COO.
          </div>
          <div className="trust-bar">
            <div className="trust-item">
              <div className="icon">
                🌲
              </div>
              <strong>
                Tree-Aware Construction
              </strong>
              <span>
                CRZ assessment before every footing
              </span>
            </div>
            <div className="trust-item">
              <div className="icon">
                📋
              </div>
              <strong>
                MoCo Permits Handled
              </strong>
              <span>
                Montgomery County DPS — fully managed
              </span>
            </div>
            <div className="trust-item">
              <div className="icon">
                ⭐
              </div>
              <strong>
                4.9-Star Rated
              </strong>
              <span>
                97+ verified homeowner reviews
              </span>
            </div>
            <div className="trust-item">
              <div className="icon">
                🛡️
              </div>
              <strong>
                MHIC Licensed
              </strong>
              <span>
                Bonded, insured, 1-year warranty
              </span>
            </div>
          </div>
          <h2>
            Deck Building Services in Cabin John, MD
          </h2>
          <div className="service-grid">
            <div className="service-item">
              Walkout Basement Deck Design &amp; Build
            </div>
            <div className="service-item">
              Elevated Rear Deck on Sloped Lot
            </div>
            <div className="service-item">
              Multi-Level Deck — Stepping with Terrain
            </div>
            <div className="service-item">
              Composite Deck (Trex / TimberTech / Azek)
            </div>
            <div className="service-item">
              Ipe Hardwood Deck
            </div>
            <div className="service-item">
              Cedar &amp; Pressure-Treated Deck
            </div>
            <div className="service-item">
              Rear Terrace at Walkout Level
            </div>
            <div className="service-item">
              Pergola &amp; Shade Structure
            </div>
            <div className="service-item">
              Cable &amp; Wood Railing Systems
            </div>
            <div className="service-item">
              Built-In Seating &amp; Planter Boxes
            </div>
            <div className="service-item">
              Deck Lighting Systems
            </div>
            <div className="service-item">
              Deck Replacement &amp; Structural Rebuild
            </div>
            <div className="service-item">
              Tree &amp; CRZ Assessment (Pre-Design)
            </div>
            <div className="service-item">
              Montgomery County Permit Processing
            </div>
          </div>
          <div className="author-box">
            <div className="author-avatar">
              🏠
            </div>
            <div className="author-info">
              <h4>
                About DMV-GC Group — Cabin John&apos;s Licensed Deck Contractor
              </h4>
              <p>
                DMV-GC Group is based in nearby North Bethesda — minutes from Cabin John along MacArthur Boulevard. We have completed deck builds, basement ADU conversions, kitchen remodels, and bathroom renovations throughout Cabin John&apos;s wooded neighborhood. We understand the terrain types these homes present, the construction approach required within significant tree root zones, and the Montgomery County permit process for sloped-lot deck projects. We hold a Maryland MHIC license and back every Cabin John project with a 1-year workmanship warranty.
              </p>
              <div className="author-creds">
                <span className="cred">
                  MHIC Licensed
                </span>
                <span className="cred">
                  Sloped-Lot Specialists
                </span>
                <span className="cred">
                  Tree-Aware Construction
                </span>
                <span className="cred">
                  Walkout Deck Experts
                </span>
                <span className="cred">
                  4.9★ Rated
                </span>
                <span className="cred">
                  1-Year Warranty
                </span>
              </div>
            </div>
          </div>
          <h2>
            Cabin John&apos;s Three Terrain Configurations — What Each Means for Your Deck
          </h2>
          <p>
            Cabin John&apos;s sloped terrain creates three distinct rear-of-home configurations that each present different deck opportunities and different construction approaches. Understanding which configuration your home has is the essential first step in any Cabin John deck project.
          </p>
          <div className="terrain-type-grid">
            <div className="terrain-box">
              <div className="icon">
                🚪
              </div>
              <h3>
                Walkout Configuration
              </h3>
              <p>
                Full above-grade rear wall on the downhill side — an existing door opens at basement level to the sloping rear yard. The deck connects at this existing door level. No new entrance cut needed. Existing rear windows provide natural light above the deck. The most natural and cost-effective deck configuration in Cabin John. Common on steeply sloped lots along MacArthur Boulevard.
              </p>
            </div>
            <div className="terrain-box">
              <div className="icon">
                ☀️
              </div>
              <h3>
                Elevated Main-Floor Configuration
              </h3>
              <p>
                The main living floor sits 4–8 feet or more above the sloping rear grade — creating an elevated deck opportunity off a sliding door or French door at the main living level. Post heights vary with the slope to maintain a level deck surface. Extended spans between posts can bridge over significant tree root zones. Views across the wooded rear landscape from the elevated deck level.
              </p>
            </div>
            <div className="terrain-box">
              <div className="icon">
                🏔️
              </div>
              <h3>
                Multi-Level Opportunity
              </h3>
              <p>
                Many Cabin John homes have both configurations — a main floor elevated above the rear grade AND a walkout basement below. A multi-level deck stepping from the main floor down to the walkout basement level, following the terrain, creates the most complete outdoor living system — dining above, lounging below, connected by stairs that work with the landscape rather than against it.
              </p>
            </div>
          </div>
          <h2>
            Types of Decks We Build in Cabin John, MD
          </h2>
          <div className="deck-type-grid">
            <div className="deck-type-card">
              <span className="deck-tag">
                Most Natural — Walkout Lots
              </span>
              <h3>
                Walkout Level Deck
              </h3>
              <p>
                A deck built at the walkout basement level — accessed from the existing rear door, surface at or just above the downhill grade, with the wooded rear landscape opening directly from the deck edge. This is Cabin John&apos;s most natural deck type: the existing door becomes the entrance, existing above-grade windows provide natural light to the space inside, and the deck connects the home to the wooded landscape without the visual disruption of tall posts. Composite or Ipe decking, cable railing for unobstructed views into the trees, optional rear terrace extending the deck footprint toward the landscape.
              </p>
              <div className="deck-cost">
                Typical Cost: $28,000 – $55,000
              </div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">
                Views Over Treetops
              </span>
              <h3>
                Elevated Main-Floor Deck on Sloped Lot
              </h3>
              <p>
                An elevated rear deck off the main living level — where Cabin John&apos;s slope means posts of varying heights to accommodate the falling grade below. On steeply sloped lots, the main-floor deck may be 8–14 feet above the lowest point of the rear yard — a significant elevation that requires structural attention to post heights, beam sizing, and diagonal bracing, but rewards with exceptional views across Cabin John&apos;s tree canopy and toward the C&amp;O Canal corridor below. Post heights designed to span over significant tree root zones where possible, eliminating root conflicts through structural span rather than tree proximity.
              </p>
              <div className="deck-cost">
                Typical Cost: $38,000 – $72,000
              </div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">
                Following the Terrain
              </span>
              <h3>
                Multi-Level Deck — Stepping with the Slope
              </h3>
              <p>
                Two or more deck levels connected by stairs, each level at a different elevation to follow Cabin John&apos;s sloping rear terrain. Upper level off the main living floor — dining, entertaining, elevated views. Lower level nearer grade or at walkout basement level — lounge, fire pit area, direct landscape connection. Stairs between levels integrated with the natural slope rather than fighting it. Cable railing on both levels for unobstructed views through the tree canopy. The most ambitious and most satisfying deck configuration for Cabin John&apos;s most dramatically sloped properties.
              </p>
              <div className="deck-cost">
                Typical Cost: $52,000 – $90,000
              </div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">
                Landscape Integration
              </span>
              <h3>
                Deck with Rear Terrace
              </h3>
              <p>
                A deck at the walkout or near-grade level, extended by a rear terrace of pavers or gravel that transitions from the deck edge to the natural landscape below. The terrace dissolves the boundary between the built deck and the natural rear yard — important on Cabin John properties where the wooded landscape is the reason people live here. The terrace adds usable outdoor space without the additional deck structure footprint. Tree proximity constraints are assessed during consultation before the terrace extent is designed.
              </p>
              <div className="deck-cost">
                Typical Cost: $36,000 – $68,000
              </div>
            </div>
          </div>
          <h2>
            Tree-Aware Deck Construction in Cabin John — Non-Negotiable
          </h2>
          <p>
            Cabin John&apos;s mature tree canopy — oaks, tulip poplars, beeches, and maples along the Potomac palisades — is the defining characteristic of the community and is protected under Montgomery County&apos;s Forest Conservation Law. Every Cabin John deck project that involves post hole drilling or other excavation near the foundation must be assessed for tree proximity before design is finalized. DMV-GC Group makes this assessment a mandatory first step on every Cabin John project — before any drawing is produced.
          </p>
          <div className="spec-box">
            <h3>
              🌳 Tree-Aware Deck Construction — DMV-GC Group&apos;s Cabin John Standard
            </h3>
            <ul>
              <li>
                <strong>
                  Critical Root Zone assessment before design:
                </strong>
                The CRZ of any significant tree is approximately 1 foot of radius per inch of trunk diameter at breast height — a 30-inch diameter oak has a 30-foot radius CRZ. DMV-GC Group identifies all significant trees near the proposed deck footprint and maps their CRZs before any post locations are proposed. Post locations are designed around CRZs, not retrofitted to accommodate trees discovered during construction.
              </li>
              <li>
                <strong>
                  Extended span strategy:
                </strong>
                Where a significant tree&apos;s CRZ falls within the ideal post grid layout, DMV-GC Group designs an extended beam span that bridges the root zone — placing posts on either side of the CRZ rather than within it. This requires a larger beam to carry the extended span, but preserves both the deck&apos;s structural integrity and the tree&apos;s root system. This is the preferred solution wherever the structural calculations support it.
              </li>
              <li>
                <strong>
                  Hand tools within CRZ:
                </strong>
                Any excavation that must occur within a significant tree&apos;s CRZ — post hole drilling near an unavoidable root zone, utility work, drainage — is performed using hand tools rather than mechanical augers or excavators. Mechanical equipment compacts soil and severs roots within CRZs; hand tools minimize this impact.
              </li>
              <li>
                <strong>
                  Equipment access routes planned in advance:
                </strong>
                Cabin John&apos;s sloped lots and narrow driveways often require equipment to access the rear yard for material delivery and post installation. DMV-GC Group identifies and plans equipment access routes during the consultation — specifically to avoid driving over significant tree root zones, which causes soil compaction that can kill a tree over multiple seasons even when the tree appears unaffected immediately after construction.
              </li>
              <li>
                <strong>
                  Forest Conservation documentation:
                </strong>
                For Cabin John deck projects involving exterior construction near significant trees, significant trees are documented on Montgomery County permit drawings as required under the Forest Conservation Law. DMV-GC Group prepares this documentation as a standard part of every applicable Cabin John permit submission.
              </li>
              <li>
                <strong>
                  Post-construction tree health observation:
                </strong>
                Following any Cabin John deck construction that occurred near (but not within) significant tree CRZs, DMV-GC Group recommends a 12-month tree health observation period — watching for canopy thinning, early leaf drop, or crown dieback that can indicate root zone disturbance during construction, even when CRZ protocols were followed.
              </li>
            </ul>
          </div>
          <h2>
            Designing a Deck That Belongs in Cabin John&apos;s Natural Setting
          </h2>
          <p>
            Cabin John homeowners have a specific relationship with the natural landscape — it is the primary reason they chose this community. A deck here has the opportunity to enhance that relationship rather than interrupt it. DMV-GC Group&apos;s design approach for Cabin John decks starts with the landscape as the asset:
          </p>
          <div className="design-grid">
            <div className="design-card">
              <h3>
                🌿 Orient Toward the Landscape
              </h3>
              <p>
                The primary outdoor living areas — seating, dining — are oriented toward the wooded rear landscape, not toward the home&apos;s interior. On Cabin John&apos;s sloped lots, this means the deck&apos;s main use areas face the downhill view into the trees, not the uphill view toward the house rear. Cable railing on the view-facing perimeter eliminates any visual obstruction between the deck user and the landscape. The deck becomes a viewing platform for Cabin John&apos;s natural setting as much as an outdoor living space.
              </p>
            </div>
            <div className="design-card">
              <h3>
                🎨 Materials That Reference the Setting
              </h3>
              <p>
                Cabin John&apos;s natural palette — grey-brown bark, deep green foliage, silver-grey lichen on stone — informs material choice for decks that belong here. Ipe hardwood&apos;s warm brown that weathers to grey fits this setting naturally. Composite in cedar or weathered wood tones also reads well. Bright white or contemporary grey composites can look conspicuous against Cabin John&apos;s woodland backdrop. Natural bronze or black hardware rather than chrome. DMV-GC Group&apos;s designers assess each home&apos;s specific setting before specifying material colors.
              </p>
            </div>
            <div className="design-card">
              <h3>
                🔒 Privacy Framing vs Openness
              </h3>
              <p>
                Cabin John&apos;s wooded setting creates natural privacy — mature trees screen adjacent properties in ways that suburban landscaping cannot. This natural privacy means Cabin John decks rarely need artificial privacy screening along the party sides, which can feel incongruous with the natural setting. Instead, the deck can be open on all sides, using cable railing that disappears visually into the treeline. The natural landscape provides the enclosure and privacy that screening panels would manufacture artificially.
              </p>
            </div>
            <div className="design-card">
              <h3>
                🌙 Evening Lighting — Subtle by Design
              </h3>
              <p>
                Cabin John&apos;s character is quiet and natural — the kind of community where ambient light is genuinely low at night and the natural darkness is part of the appeal. Deck lighting here should enhance evening use without disrupting that character: warm-tone LED post cap lights (2700K), recessed step lighting, and low-output string lights create a gentle evening atmosphere rather than the bright suburban-deck lighting that would look out of place in Cabin John&apos;s wooded setting.
              </p>
            </div>
          </div>
          <h2>
            Deck Features That Work in Cabin John&apos;s Natural Setting
          </h2>
          <div className="feature-grid">
            <div className="feature-box">
              <div className="icon">
                🔩
              </div>
              <strong>
                Cable Railing
              </strong>
              <span>
                Horizontal cable railing disappears visually into Cabin John&apos;s treeline — the most landscape-compatible railing for wooded rear yard views
              </span>
            </div>
            <div className="feature-box">
              <div className="icon">
                🌿
              </div>
              <strong>
                Ipe Hardwood Decking
              </strong>
              <span>
                Warm brown that weathers to natural grey — materials that age into the landscape rather than against it
              </span>
            </div>
            <div className="feature-box">
              <div className="icon">
                🌲
              </div>
              <strong>
                Rear Terrace Extension
              </strong>
              <span>
                Pavers or gravel terrace extending from the deck edge — dissolves the boundary between the built deck and the natural wooded rear yard
              </span>
            </div>
            <div className="feature-box">
              <div className="icon">
                ☂️
              </div>
              <strong>
                Natural Wood Pergola
              </strong>
              <span>
                Cedar or Douglas fir pergola — natural material that ages into the woodland setting without the conspicuousness of aluminum in a forested context
              </span>
            </div>
            <div className="feature-box">
              <div className="icon">
                💡
              </div>
              <strong>
                Warm-Tone Evening Lighting
              </strong>
              <span>
                2700K LED post cap and step lighting — gentle evening illumination that enhances use without disrupting Cabin John&apos;s natural darkness
              </span>
            </div>
            <div className="feature-box">
              <div className="icon">
                🪑
              </div>
              <strong>
                Built-In Seating Facing the View
              </strong>
              <span>
                Integrated bench seating oriented toward the wooded landscape — the permanent seating that makes the landscape-viewing function of a Cabin John deck intentional
              </span>
            </div>
          </div>
          <h2>
            Our Deck Building Process in Cabin John
          </h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">
                1
              </div>
              <div className="step-content">
                <h3>
                  Free In-Home Consultation — Terrain &amp; Tree Assessment First
                </h3>
                <p>
                  We visit your Cabin John home, assess the terrain configuration (walkout, elevated, or multi-level opportunity), walk the proposed deck area, identify all significant trees near proposed footing locations, assess equipment access routes, and evaluate drainage patterns on the sloped rear yard. The tree and terrain assessment happens before any deck design begins — because both shape every design decision that follows. No cost, no obligation.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                2
              </div>
              <div className="step-content">
                <h3>
                  CRZ Mapping &amp; Post Location Strategy
                </h3>
                <p>
                  We map the Critical Root Zones of all significant trees near the proposed deck footprint and identify which post locations fall within CRZs. For each conflict, we determine whether an extended beam span can bridge the root zone (preferred), whether the post can be relocated outside the CRZ without compromising the deck layout, or whether hand-tool excavation within the CRZ is unavoidable. This mapping shapes the structural design from the first drawing.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                3
              </div>
              <div className="step-content">
                <h3>
                  Deck Design — Terrain-Following &amp; Landscape-Connecting
                </h3>
                <p>
                  Our design team develops the deck layout, level configuration, structural design (including extended spans over root zones), material specification, railing style, and landscape connection (rear terrace where included). Post heights are individually specified to follow the slope and maintain a level deck surface. Full structural drawings prepared for Montgomery County permit submission with significant tree documentation.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                4
              </div>
              <div className="step-content">
                <h3>
                  Montgomery County Permit Filing
                </h3>
                <p>
                  We file all required building permits with Montgomery County DPS, including structural drawings with significant tree documentation as required under the Forest Conservation Law. Our permit team manages all county correspondence, plan review, and inspection scheduling throughout the project.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                5
              </div>
              <div className="step-content">
                <h3>
                  Tree-Aware Footings &amp; Framing
                </h3>
                <p>
                  Post holes drilled to frost depth — hand tools within any CRZ that construction must approach. Equipment access routes maintained away from significant root zones throughout construction. Footings poured with MoCo footing inspection managed. Framing with variable-height posts accommodating the slope, extended beams spanning over root zones where designed.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                6
              </div>
              <div className="step-content">
                <h3>
                  Decking, Railing, Rear Terrace &amp; Lighting
                </h3>
                <p>
                  Composite or Ipe decking installed (pre-drilling and hidden fasteners for Ipe), cable railing, stairs between levels where multi-level, pergola where included, rear terrace pavers or gravel where included, and warm-tone LED lighting — all coordinated to enhance the natural landscape connection rather than compete with it.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                7
              </div>
              <div className="step-content">
                <h3>
                  MoCo Final Inspection, Walkthrough &amp; 1-Year Warranty
                </h3>
                <p>
                  Montgomery County final inspection managed by our permit team. Thorough walkthrough, every punch list item addressed, and 1-year workmanship warranty activated. We also advise on the 12-month tree health observation protocol for any trees near which construction occurred.
                </p>
              </div>
            </div>
          </div>
          <h2>
            Deck Building Cost in Cabin John, MD
          </h2>
          <p>
            Cabin John deck costs vary meaningfully by terrain configuration and tree situation. Site conditions here affect cost more than in flat suburban communities:
          </p>
          <table className="cost-table">
            <tbody>
              <tr>
                <th>
                  Deck Type / Scope
                </th>
                <th>
                  Typical Cost Range
                </th>
                <th>
                  Notes for Cabin John
                </th>
              </tr>
              <tr>
                <td>
                  Walkout Level Deck — Composite (220–320 sq ft)
                </td>
                <td>
                  $28,000 – $50,000
                </td>
                <td>
                  Existing door = entrance. Standard post height at walkout level. Cable railing. CRZ assessment included. MoCo permit.
                </td>
              </tr>
              <tr>
                <td>
                  Walkout Level Deck — Ipe Hardwood (220–300 sq ft)
                </td>
                <td>
                  $38,000 – $65,000
                </td>
                <td>
                  Premium natural material that weathers into Cabin John&apos;s landscape setting. Pre-drilling, hidden fasteners. CRZ assessment included.
                </td>
              </tr>
              <tr>
                <td>
                  Elevated Main-Floor Deck on Sloped Lot (260–360 sq ft)
                </td>
                <td>
                  $38,000 – $68,000
                </td>
                <td>
                  Variable-height posts following slope. Extended beams over root zones where required. Structural engineering for elevation. Cable railing. MoCo permit.
                </td>
              </tr>
              <tr>
                <td>
                  Deck with Rear Terrace Extension
                </td>
                <td>
                  $36,000 – $68,000
                </td>
                <td>
                  Deck at walkout level + paver or gravel terrace extending toward natural landscape. Tree proximity assessment for terrace extent. MoCo permit.
                </td>
              </tr>
              <tr>
                <td>
                  Multi-Level Deck — Following the Terrain
                </td>
                <td>
                  $52,000 – $90,000
                </td>
                <td>
                  Two levels stepping with the slope — main floor above, walkout or near-grade below. Stairs integrated with terrain. Cable railing on both levels. CRZ mapping for all footings. MoCo permit.
                </td>
              </tr>
              <tr>
                <td>
                  Multi-Level Deck with Pergola &amp; Outdoor Kitchen
                </td>
                <td>
                  $70,000 – $110,000
                </td>
                <td>
                  Full outdoor living environment on a significantly sloped Cabin John property. Natural wood pergola, gas grill station, integrated lighting. In-house licensed trades. MoCo permit.
                </td>
              </tr>
              <tr>
                <td>
                  Extended Beam Span (tree CRZ avoidance)
                </td>
                <td>
                  $1,500 – $4,500 (per span)
                </td>
                <td>
                  Structural beam span extended to bridge over significant tree root zone — preserves tree and deck structural integrity. Cost depends on span length and load.
                </td>
              </tr>
            </tbody>
          </table>
          <div className="tip">
            💡
            <strong>
              Cabin John Deck ROI:
            </strong>
            A quality walkout-level or elevated deck on a Cabin John property — in Ipe or composite, cable railing, opening to the wooded rear landscape — typically adds $32,000–$58,000 to appraised value and significantly enhances buyer appeal in a community where the natural setting is the primary draw. Cabin John buyers specifically seek the landscape connection these properties offer; a deck that frames and celebrates that landscape rather than ignoring it amplifies the home&apos;s most distinctive characteristic.
          </div>
          <div className="cta-banner">
            <h2>
              Get a Free Deck Consultation in Cabin John
            </h2>
            <p>
              We&apos;ll visit your Cabin John home, assess your terrain configuration, map the significant trees near proposed footing locations, and design the deck that works with your wooded sloped lot. No cost, no obligation.
            </p>
            <Link href="/contact-us" className="cta-btn">
              Schedule Free Consultation
            </Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">
              📞 Call +1 240-730-1292
            </a>
          </div>
          <h2>
            What Cabin John Homeowners Say About DMV-GC Group
          </h2>
          <div className="review-grid">
            <div className="review-card">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-text">
                &quot;Our MacArthur Boulevard home has a walkout basement and a steeply sloped rear yard. DMV-GC Group assessed the trees first — three significant oaks near where footings would go. They designed extended beam spans to bridge two of them and placed the third footing just outside the CRZ. The multi-level Ipe deck is stunning and every tree is healthy two years later.&quot;
              </p>
              <div className="review-author">
                — Verified Homeowner ·
                <span className="review-location">
                  MacArthur Boulevard, Cabin John MD
                </span>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-text">
                &quot;We wanted a walkout deck at the basement level that opened to the woods behind the house. DMV-GC Group oriented the main seating toward the trees, used cable railing that disappears into the treeline, and added a rear terrace of natural stone pavers that transitions from the deck to the landscape. We spend more time out there than inside.&quot;
              </p>
              <div className="review-author">
                — Verified Homeowner ·
                <span className="review-location">
                  Seven Locks Road Area, Cabin John MD
                </span>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-text">
                &quot;Our lot drops about 12 feet from the main floor to the rear yard. DMV-GC Group built a two-level deck — upper dining off the living room, lower lounge at grade level, stairs following the slope. The equipment access was pre-planned to avoid the big tulip poplar. The Montgomery County permit was handled entirely by their team. Best outdoor investment we&apos;ve made.&quot;
              </p>
              <div className="review-author">
                — Verified Homeowner ·
                <span className="review-location">
                  Cabin John Creek Valley, MD
                </span>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-text">
                &quot;We chose Ipe because we wanted a material that would age into the Cabin John landscape rather than look suburban. DMV-GC Group&apos;s crew clearly knew how to work with it — pre-drilled every fastener location, used hidden fasteners throughout, sealed every cut end. Three years in, it&apos;s weathering to a beautiful grey that suits the woods perfectly.&quot;
              </p>
              <div className="review-author">
                — Verified Homeowner ·
                <span className="review-location">
                  C&amp;O Canal Adjacent, Cabin John MD
                </span>
              </div>
            </div>
          </div>
          <div className="highlight">
            <p>
              ⭐
              <strong>
                4.9-star rated with 97+ verified reviews.
              </strong>
              Cabin John homeowners trust DMV-GC Group for deck projects that work with rather than against the wooded sloped-lot terrain, protect the mature trees that define the community&apos;s character, and create outdoor spaces that genuinely connect the home to one of Montgomery County&apos;s most extraordinary natural settings.
            </p>
          </div>
          <h2>
            Serving Cabin John and Surrounding Areas for Deck Building
          </h2>
          <div className="areas-grid">
            <span className="area-pill">
              Cabin John, MD
            </span>
            <span className="area-pill">
              MacArthur Boulevard
            </span>
            <span className="area-pill">
              Seven Locks Road
            </span>
            <span className="area-pill">
              C&amp;O Canal Adjacent
            </span>
            <span className="area-pill">
              Cabin John Creek Valley
            </span>
            <span className="area-pill">
              Bethesda
            </span>
            <span className="area-pill">
              Potomac
            </span>
            <span className="area-pill">
              North Bethesda
            </span>
            <span className="area-pill">
              Chevy Chase
            </span>
          </div>
          <div className="nearby-box">
            <h3>
              Also serving Bethesda, MD and Potomac, MD — adjacent to Cabin John
            </h3>
            <p>
              DMV-GC Group builds custom decks throughout Bethesda (east of Cabin John) and Potomac (west of Cabin John). Potomac&apos;s estate-scale deck projects and Bethesda&apos;s diverse housing stock both benefit from the same licensed team and tree-aware construction expertise.
              <Link href="/service/decks">
                View our full deck building service page &rarr;
              </Link>
            </p>
          </div>
          <h2>
            Frequently Asked Questions — Deck Building in Cabin John, MD
          </h2>
          <Accordion defaultActiveKey="0" flush>
            {faqData.map((faq) => (
    <Accordion.Item eventKey={faq.eventKey} key={faq.eventKey}>
      <Accordion.Header>{faq.question}</Accordion.Header>
      <Accordion.Body>{faq.answer}</Accordion.Body>
    </Accordion.Item>
            ))}
          </Accordion>
          <div className="internal-links">
            <h2>
              Explore Our Other Services in Cabin John
            </h2>
            <ul>
              <li>
                <Link href="/service/kitchen-remodeling/cabin-john-md">
                  Kitchen Remodeling in Cabin John, MD
                </Link>
              </li>
              <li>
                <Link href="/service/bathroom-remodeling/cabin-john-md">
                  Bathroom Remodeling in Cabin John, MD
                </Link>
              </li>
              <li>
                <Link href="/service/basement-remodeling/cabin-john-md">
                  Basement Remodeling in Cabin John, MD
                </Link>
              </li>
              <li>
                <Link href="/service/adu/cabin-john-md">
                  ADU Construction in Cabin John, MD
                </Link>
              </li>
              <li>
                <Link href="/service/home-additions">
                  Home Additions in Cabin John, MD
                </Link>
              </li>
              <li>
                <Link href="/service/design-build">
                  Design-Build Contractor in Cabin John, MD
                </Link>
              </li>
            </ul>
          </div>
          <div className="cta-banner">
            <h2>
              Ready to Build Your Cabin John Deck?
            </h2>
            <p>
              Call us at
              <strong>
                +1 240-730-1292
              </strong>
              or schedule your free in-home consultation. We&apos;ll assess your terrain, map your trees, design a deck that belongs in Cabin John&apos;s natural setting, and manage the Montgomery County permit from start to finish.
            </p>
            <Link href="/contact-us" className="cta-btn">
              Get Free Deck Estimate in Cabin John &rarr;
            </Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">
              📞 +1 240-730-1292
            </a>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
    </main>
  );
}
