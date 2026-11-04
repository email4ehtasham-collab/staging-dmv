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
        "description": "DLCP-licensed deck builder serving Washington, DC. Custom rear yard decks for DC rowhouses — Capitol Hill, Petworth, Columbia Heights, Georgetown, Shaw, and all DC neighborhoods — with DC DOB permit expertise, HPRB historic district coordination, and English basement deck integration.",
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
            "name": "Washington",
            "sameAs": "https://en.wikipedia.org/wiki/Washington,_D.C."
          }
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "MHIC License",
            "credentialCategory": "Maryland Home Improvement Contractor License"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "DLCP License",
            "credentialCategory": "Washington DC Department of Licensing and Consumer Protection"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "97",
          "bestRating": "5"
        },
        "priceRange": "$$$$"
      },
      {
        "@type": "Service",
        "@id": "https://www.dmv-gc.com/service/decks/washington-dc#service",
        "serviceType": "Deck Building",
        "name": "Deck Building in Washington, DC",
        "alternateName": [
          "Custom Deck Construction",
          "Rowhouse Rear Deck",
          "DC Backyard Deck",
          "English Basement Deck",
          "Historic District Deck"
        ],
        "provider": {
          "@id": "https://www.dmv-gc.com/#business"
        },
        "areaServed": {
          "@type": "City",
          "name": "Washington",
          "sameAs": "https://en.wikipedia.org/wiki/Washington,_D.C."
        },
        "description": "Custom deck building in Washington, DC. Rear yard decks for DC rowhouses, multi-level rear yard structures, English basement deck integration, and rooftop terrace builds — with DLCP license, DC DOB permit management, and HPRB historic district coordination across all DC neighborhoods.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "22000",
            "maxPrice": "120000",
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
            "name": "Washington, DC",
            "item": "https://www.dmv-gc.com/service/decks/washington-dc"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does it cost to build a deck in Washington, DC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Deck construction in Washington, DC typically costs between $22,000 and $120,000 depending on size, type, material, and features. A rear yard deck for a DC rowhouse runs $22,000–$48,000 in pressure-treated or composite. A multi-level rear yard deck with English basement integration costs $38,000–$72,000. A rooftop terrace build runs $45,000–$95,000. An Ipe hardwood rear yard deck costs $35,000–$78,000. DC's urban construction premium — logistics, DLCP permit fees, DC DOB processing — adds 15–25% over comparable Maryland suburban projects. DMV-GC Group provides free in-home consultations with detailed estimates for every DC neighborhood."
            }
          },
          {
            "@type": "Question",
            "name": "Does DMV-GC Group hold a DC DLCP license for deck building in Washington, DC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. DMV-GC Group holds a Washington DC DLCP (Department of Licensing and Consumer Protection) license — legally required for all home improvement and construction work in the District of Columbia, including deck construction. A Maryland MHIC license alone does not authorize deck work in DC. DMV-GC Group holds both MHIC (Maryland) and DLCP (DC) licenses — one of the relatively small number of contractors in the DMV area fully licensed to build decks in both jurisdictions. Before hiring any contractor for DC deck work, verify their DLCP license at DC's online licensing portal."
            }
          },
          {
            "@type": "Question",
            "name": "Does DC historic district designation affect rear yard deck construction?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For rear yard deck construction that does not alter the primary street-facing facade — which is the case for virtually all DC rowhouse rear decks — HPRB review is typically not required. HPRB reviews exterior changes visible from public streets, not rear yard construction. Standard DC DOB permits are filed for rear yard deck projects in DC historic districts. However, any deck modification that involves the front or side facade visible from a public street may require HPRB review or a Certificate of No Objection. DMV-GC Group assesses every DC deck project for HPRB implications during the consultation and designs to avoid modifications that would trigger historic review."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best deck design for a DC rowhouse rear yard?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DC rowhouse rear yards are typically 15–30 feet wide and 20–40 feet deep — smaller than most suburban lots but capable of supporting a meaningful outdoor living space. A rear yard deck for a DC rowhouse is typically 200–320 sq ft, accessed from the rear of the main living floor or from the English basement level, with composite or Ipe hardwood decking, cable or wood railing, and optional pergola shade structure. Multi-level designs that incorporate both a main-floor deck and an English basement level landing can make excellent use of DC rowhouse rear yards without consuming additional footprint. DMV-GC Group designs DC rowhouse decks to maximize usable outdoor space within the specific rear yard constraints of each property."
            }
          },
          {
            "@type": "Question",
            "name": "Does DC require a permit for a rear yard deck?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. A DC Department of Buildings permit is required for any new deck in Washington, DC — attached or freestanding — that is over 30 inches above grade, larger than 200 sq ft, or attached to the home. DC DOB permit processing for decks typically takes 3–6 weeks before construction can begin. DMV-GC Group files all required DC DOB permits with our DLCP license and manages all permit correspondence, plan review, and inspection scheduling as a standard part of every DC deck project."
            }
          }
        ]
      }
    ]
  };

const faqData = [
  { eventKey: "0", question: "How much does it cost to build a deck in Washington, DC?", answer: "Deck construction in DC typically costs $22,000–$120,000 depending on type, material, and scope. A rear yard composite deck (200–300 sq ft) runs $28,000–$50,000. An Ipe hardwood deck costs $38,000–$72,000. A multi-level deck with English basement integration runs $38,000–$72,000. A composite deck with pergola costs $40,000–$78,000. A rooftop terrace build runs $45,000–$95,000. DC's urban construction premium — logistics, DLCP permit fees, DC DOB processing — adds 15–25% over comparable Maryland suburban projects. All DC DOB permit fees and DLCP license management are included in every scope." },
  { eventKey: "1", question: "Does DMV-GC Group have a DC DLCP license for deck construction?", answer: "Yes. DMV-GC Group holds a Washington DC DLCP license — legally required for all home improvement work in DC including deck construction. We also hold a Maryland MHIC license. A Maryland-only contractor without a DLCP license cannot legally perform deck work in DC, cannot pull DC permits in their own name, and cannot obtain DC DOB inspections. Verify any contractor's DLCP license at DC's online licensing portal before signing any contract for DC deck work." },
  { eventKey: "2", question: "Does DC historic district designation prevent rear yard deck construction?", answer: "No — not for standard rear yard deck construction. DC's HPRB reviews exterior changes visible from public streets, not rear yard construction. A standard rear yard deck on a DC rowhouse — accessed from the rear of the home, not visible from the front street — proceeds with standard DC DOB permits regardless of historic district status. DMV-GC Group assesses every DC deck project for HPRB implications during the consultation and designs to keep all scope at the rear, avoiding modifications that would trigger historic review." },
  { eventKey: "3", question: "What are the size limits for a deck in a DC rowhouse rear yard?", answer: "DC rowhouse rear yard deck size is constrained by the rear yard width between party walls (typically 15–22 feet), DC zoning rear setback requirements (varying by zone designation), and side setback requirements where applicable. The usable deck footprint after these constraints is typically 180–320 sq ft for a standard DC rowhouse rear yard deck. DMV-GC Group measures the exact usable envelope for every DC property during the free consultation — not after design is complete." },
  { eventKey: "4", question: "Can DMV-GC Group integrate a deck with my DC English basement ADU?", answer: "Yes — and a multi-level rear deck integrating both main floor and English basement access is one of the most practical and valuable deck configurations for DC rowhouses with ADUs. An upper deck off the main living floor, a lower landing at the English basement level, and a stair connecting the two creates a complete outdoor system that serves both the homeowner and the ADU tenant independently. DC DOB permits for this configuration are filed and managed by our DLCP-licensed permit team." }
];

export default function DecksWashingtonDC() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => { setActiveMenuItem("service"); }, []);
  return (
    <main>
      <div className="city-service-detail-page decks-washington-dc">
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
            Washington, DC
          </nav>
          <div className="hero">
            <div className="hero-location-tag">
              📍 Serving Washington, DC
            </div>
            <h1>
              Deck Building in Washington, DC — Rear Yard Deck Contractor for DC Rowhouses
            </h1>
            <div className="hero-meta">
              <span className="badge red">
                ✓ DLCP Licensed — Washington DC
              </span>
              <span className="badge">
                ✓ MHIC Licensed — Maryland
              </span>
              <span className="badge">
                ⭐ 4.9 Rating · 97+ Reviews
              </span>
              <span className="badge">
                ✓ DC DOB Permits Handled
              </span>
              <span className="badge dark">
                📞 +1 240-730-1292
              </span>
            </div>
          </div>
          <div className="dlcp-banner">
            <div className="icon">
              🏛️
            </div>
            <div>
              <h3>
                DC Deck Construction Requires a DLCP License — A Maryland MHIC Alone Is Not Enough
              </h3>
              <p>
                Washington DC is a separate jurisdiction from Maryland — a Maryland MHIC license does not authorize deck construction or any other home improvement work in the District of Columbia. All contractors performing deck work in DC must hold a valid DLCP (Department of Licensing and Consumer Protection) license issued by DC. DMV-GC Group holds both a Maryland MHIC license and a Washington DC DLCP license — one of the relatively small number of contractors in the DMV area fully licensed to build decks in both Maryland and DC. Before hiring any contractor for a DC deck project, verify their DLCP license at DC&apos;s online licensing portal. A contractor without a DLCP license cannot pull DC permits, cannot schedule DC DOB inspections, and cannot legally complete deck work in DC.
              </p>
            </div>
          </div>
          <div className="intro-box">
            Looking for a trusted
            <strong>
              deck contractor in Washington, DC
            </strong>
            ? DC&apos;s rowhouse neighborhoods — Capitol Hill, Petworth, Columbia Heights, Shaw, Georgetown, Bloomingdale, Dupont Circle, and dozens more — sit on some of the most valuable residential real estate on the East Coast. The rear yard of a DC rowhouse is one of its most distinctive and underutilized assets: a private outdoor space in a dense urban setting where private outdoor space is rare and valuable. A well-designed rear yard deck transforms that space into a genuine outdoor room — adding daily livability and meaningful value to a home where the primary residence may be worth $800,000 to $2,000,000 or more. DMV-GC Group&apos;s DLCP-licensed design-build team manages the complete DC deck process — design, DC DOB permits, HPRB historic district assessment where relevant, and construction — across every DC neighborhood.
          </div>
          <div className="trust-bar">
            <div className="trust-item">
              <div className="icon">
                🏛️
              </div>
              <strong>
                DLCP Licensed — DC
              </strong>
              <span>
                Legally required for all DC deck work
              </span>
            </div>
            <div className="trust-item">
              <div className="icon">
                📋
              </div>
              <strong>
                DC DOB Permits
              </strong>
              <span>
                Full DC permit process managed
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
                1-Year Warranty
              </strong>
              <span>
                Bonded, insured, licensed
              </span>
            </div>
          </div>
          <h2>
            Deck Building Services in Washington, DC
          </h2>
          <div className="service-grid">
            <div className="service-item">
              Rear Yard Deck Design &amp; Build (Rowhouses)
            </div>
            <div className="service-item">
              Composite Deck (Trex / TimberTech / Azek)
            </div>
            <div className="service-item">
              Ipe Hardwood Rear Yard Deck
            </div>
            <div className="service-item">
              Pressure-Treated Deck
            </div>
            <div className="service-item">
              Multi-Level Rear Yard Deck
            </div>
            <div className="service-item">
              English Basement Deck Integration
            </div>
            <div className="service-item">
              Rooftop Terrace Build
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
              DC DOB Permit Filing (DLCP License)
            </div>
            <div className="service-item">
              HPRB Historic District Assessment
            </div>
          </div>
          <div className="author-box">
            <div className="author-avatar">
              🏠
            </div>
            <div className="author-info">
              <h4>
                About DMV-GC Group — Washington DC&apos;s DLCP-Licensed Deck Contractor
              </h4>
              <p>
                DMV-GC Group holds a Washington DC DLCP license and a Maryland MHIC license — making us one of the few design-build contractors in the DMV area fully authorized to complete deck construction in both jurisdictions. Our team has built rear yard decks and outdoor living spaces throughout DC&apos;s rowhouse neighborhoods — managing DC DOB permits, HPRB historic district assessments, and the specific design challenges of urban rear yard construction. We back every DC deck project with a 1-year workmanship warranty.
              </p>
              <div className="author-creds">
                <span className="cred red">
                  DLCP Licensed — DC
                </span>
                <span className="cred">
                  MHIC Licensed — MD
                </span>
                <span className="cred">
                  DC DOB Permit Experts
                </span>
                <span className="cred">
                  HPRB Assessment
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
            Types of Decks We Build for DC Rowhouses
          </h2>
          <p>
            DC&apos;s rowhouse form — attached on both sides, built to or near the lot line, with a rear yard ranging from 15 to 40 feet in depth — shapes which deck types are practical and which are not. Here is an honest assessment:
          </p>
          <div className="deck-type-grid">
            <div className="deck-type-card">
              <span className="deck-tag">
                Most Common DC Deck
              </span>
              <h3>
                Rear Yard Deck — Main Floor Access
              </h3>
              <p>
                A rear yard deck accessed from the main living floor of the rowhouse — typically the parlor level or the first above-grade floor — with stairs descending to the rear yard below. DC rowhouses have varying rear elevations depending on the specific home and lot grade: some are at or near grade at the rear, others are 3–6 feet above grade. The deck size is constrained by the rear yard width (typically 15–22 feet between party walls) and the DC zoning setback requirements. A well-designed DC rowhouse rear deck of 180–300 sq ft in composite or Ipe hardwood transforms the rear yard from an underused strip into the home&apos;s primary outdoor living space.
              </p>
              <div className="deck-cost">
                Typical Cost: $22,000 – $48,000
              </div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">
                English Basement Integration
              </span>
              <h3>
                Multi-Level Rear Yard Deck
              </h3>
              <p>
                Many DC rowhouses with English basements benefit from a multi-level rear yard deck — an upper level accessed from the main floor, and a lower landing at the English basement level that creates a separate entrance to the ADU or basement. This configuration uses the vertical dimension of the rear yard intelligently, gives the English basement tenant a private outdoor area at their level, and creates a visual connection between the two levels that makes the entire rear of the home feel more resolved. Composite or Ipe surface, cable railing for each level, and stair connecting the two. DC DOB permits and DLCP license included.
              </p>
              <div className="deck-cost">
                Typical Cost: $38,000 – $72,000
              </div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">
                Premium Natural Choice
              </span>
              <h3>
                Ipe Hardwood Rear Yard Deck
              </h3>
              <p>
                Brazilian Ipe is the premium material choice for DC rowhouse rear decks — its 40–75 year lifespan, Class A fire resistance, and deep warm color are well-suited to the premium rowhouse neighborhoods where it is most commonly requested. On a Capitol Hill, Dupont Circle, or Georgetown rowhouse worth $1–2M+, an Ipe deck is proportionate to the home&apos;s overall investment level. Pre-drilling at every fastener location, hidden fastener systems, and end-grain sealing on every cut are essential correct Ipe installation practices — DMV-GC Group&apos;s finish carpenters are experienced with all of them.
              </p>
              <div className="deck-cost">
                Typical Cost: $35,000 – $78,000
              </div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">
                For Eligible Properties
              </span>
              <h3>
                Rooftop Terrace
              </h3>
              <p>
                Some DC rowhouses — particularly 2.5–3 story homes with flat or low-pitched roofs — have rooftop terrace potential. A rooftop terrace build requires structural assessment of the existing roof structure (load capacity for live load plus deck materials and occupants), waterproof deck membrane, low-profile composite or Ipe decking, cable or glass railing with proper anchoring, and DC DOB structural permits. Rooftop terraces command significant value in DC&apos;s urban market — private outdoor space with city views in a dense neighborhood. Feasibility depends entirely on the specific home&apos;s roof structure and HOA or condominium rules where applicable.
              </p>
              <div className="deck-cost">
                Typical Cost: $45,000 – $95,000
              </div>
            </div>
          </div>
          <h2>
            Designing a Rear Yard Deck for a DC Rowhouse — The Specific Constraints
          </h2>
          <p>
            DC rowhouse rear yard deck design has constraints that differ meaningfully from suburban deck design in Maryland. Understanding these constraints before design begins is essential to a successful project.
          </p>
          <div className="rowhouse-grid">
            <div className="rowhouse-card">
              <h3>
                📐 Rear Yard Width — The Primary Constraint
              </h3>
              <p>
                DC rowhouse rear yards are bounded on both sides by party walls — the shared walls with neighboring rowhouses. Rear yard width is typically 15–22 feet between the party walls, and DC zoning setback requirements further reduce the usable deck footprint. DMV-GC Group measures the exact usable deck width for every DC rowhouse project during the consultation, accounting for both the party wall proximity and any DC zoning side setback that applies to the specific zone designation. This measured footprint — not an assumed standard — is what every DC deck is designed to.
              </p>
            </div>
            <div className="rowhouse-card">
              <h3>
                📏 Rear Yard Depth — Setback from the Alley
              </h3>
              <p>
                DC zoning also imposes a rear yard setback — a minimum distance between any structure (including a deck) and the rear lot line, which typically abuts an alley. This setback varies by DC zoning designation. DMV-GC Group confirms the applicable rear setback for every DC deck project before design begins, ensuring the proposed deck does not encroach on the required rear yard setback. In some DC rear yards, this setback meaningfully limits the deck&apos;s depth.
              </p>
            </div>
            <div className="rowhouse-card">
              <h3>
                🔧 Party Wall &amp; Foundation Considerations
              </h3>
              <p>
                DC rowhouse foundations abut party walls — the shared masonry walls between adjacent homes. Any deck ledger attachment to the rear of the home must be assessed for the rear foundation wall type. DC rowhouses from the 1880s–1930s commonly have brick or rubble stone rear walls; those from the 1940s–1960s may have concrete block; newer construction has poured concrete or wood frame. DMV-GC Group assesses the rear foundation wall type and specifies the correct ledger attachment approach for each DC rowhouse — the same foundation-type awareness we apply to Wheaton&apos;s CMU homes, applied to DC&apos;s older masonry.
              </p>
            </div>
            <div className="rowhouse-card">
              <h3>
                🚧 Construction Logistics — Urban Site Access
              </h3>
              <p>
                DC deck projects have urban construction logistics that suburban projects do not: material delivery through the alley (or carried through the house where alley access is blocked), equipment restrictions on narrow residential streets, parking permits for crew vehicles, and coordination with neighboring rowhouse owners for any work near the party walls. DMV-GC Group plans DC construction logistics during the consultation — not on day one of construction when logistics problems become cost problems.
              </p>
            </div>
          </div>
          <h2>
            DC Historic Districts — What They Mean for Rear Yard Deck Construction
          </h2>
          <p>
            A significant portion of DC&apos;s most active deck markets — Capitol Hill, Georgetown, Dupont Circle, Logan Circle, Shaw — are in designated historic districts under the DC Historic Preservation Review Board (HPRB). Understanding what HPRB review actually covers for deck projects is essential — the reality is more specific and more practical than many DC homeowners assume.
          </p>
          <div className="hprb-grid">
            <div className="hprb-card">
              <h3>
                ✅ What Does NOT Require HPRB Review
              </h3>
              <p>
                Rear yard deck construction that does not alter any facade visible from a public street. This covers virtually all standard DC rowhouse rear decks — the rear yard is not visible from the street, and a deck built there triggers no HPRB review. Interior work (English basement finishing, structural modifications inside the home) also does not require HPRB review. Standard DC DOB permits apply to these projects regardless of historic district status.
              </p>
            </div>
            <div className="hprb-card">
              <h3>
                ⚠️ What May Require HPRB Review
              </h3>
              <p>
                Any exterior modification visible from a public street — a new opening in the front or side facade, significant changes to the street-facing elevation. For deck projects specifically, this is unusual — rear decks don&apos;t require street-facade modification. However, where a proposed rooftop terrace adds visible rooftop structures, or where a side elevation modification is needed for access, HPRB may apply. DMV-GC Group assesses every DC deck project for HPRB implications during the consultation.
              </p>
            </div>
            <div className="hprb-card">
              <h3>
                🎯 Design Strategy — Rear Siting Avoids Review
              </h3>
              <p>
                DMV-GC Group&apos;s standard approach for every DC deck project is to site all construction at the rear of the property, away from any public-street-facing facade. This is both the most practical location for a DC rowhouse deck and the approach that keeps the project on a standard DC DOB permit path without HPRB historic review timeline in the vast majority of cases.
              </p>
            </div>
            <div className="hprb-card">
              <h3>
                🏛️ DC Historic Districts — Where Decks Are Most Common
              </h3>
              <p>
                Capitol Hill HD, Georgetown HD, Dupont Circle HD, Logan Circle HD, U Street HD, Shaw HD — all active DC deck markets. In all of these, standard rear yard composite or Ipe decks proceed with DC DOB permits without HPRB review. DMV-GC Group has completed DC deck projects in multiple historic districts without triggering historic review, by keeping all scope at the rear and assessing each project&apos;s implications during the consultation.
              </p>
            </div>
          </div>
          <h2>
            DC Department of Buildings Permits for Deck Construction
          </h2>
          <div className="spec-box">
            <h3>
              📋 DC DOB Deck Permit Requirements — What Homeowners Need to Know
            </h3>
            <ul>
              <li>
                <strong>
                  DC DOB permit required for:
                </strong>
                Any new deck attached to the home; any freestanding deck over 200 sq ft; any deck over 30 inches above grade; and any structural deck replacement or rebuild. Routine deck maintenance and minor repairs typically do not require a DC DOB permit.
              </li>
              <li>
                <strong>
                  DLCP license required to pull permits:
                </strong>
                Only contractors holding a valid DC DLCP license can apply for DC DOB building permits for deck construction. A Maryland-only contractor cannot pull DC permits regardless of their Maryland licensure. DMV-GC Group&apos;s DLCP license is on file with DC DOB and is used for every DC deck permit application we file.
              </li>
              <li>
                <strong>
                  Structural drawings required:
                </strong>
                DC DOB deck permit applications require structural drawings showing footing design, framing plan, ledger attachment detail, and connection specifications. DMV-GC Group prepares all required structural documentation for every DC deck permit submission.
              </li>
              <li>
                <strong>
                  DC DOB plan review timeline:
                </strong>
                DC DOB permit processing for deck projects typically takes 3–6 weeks from complete application submission to permit issuance. DMV-GC Group files permit applications as early as possible in the project timeline and manages all plan review correspondence to minimize total pre-construction timeline.
              </li>
              <li>
                <strong>
                  DC DOB inspections required:
                </strong>
                DC DOB requires footing inspection before concrete is poured, framing inspection after structural framing is complete, and final inspection before the deck can be used. DMV-GC Group schedules and manages all required DC DOB inspections as a standard part of every project — homeowners never need to contact DC DOB directly.
              </li>
              <li>
                <strong>
                  Permit fees:
                </strong>
                DC DOB deck permit fees vary by project scope and valuation. DMV-GC Group includes permit fee estimates in every DC deck project proposal — no surprise permit fees at the time of filing.
              </li>
            </ul>
          </div>
          <h2>
            Popular Deck Features for DC Rowhouses
          </h2>
          <div className="feature-grid">
            <div className="feature-box">
              <div className="icon">
                🌿
              </div>
              <strong>
                Pergola &amp; Shade
              </strong>
              <span>
                Shade structure for DC&apos;s hot summers — wood or aluminum pergola creates a covered outdoor room in the rowhouse rear yard
              </span>
            </div>
            <div className="feature-box">
              <div className="icon">
                🔩
              </div>
              <strong>
                Cable Railing
              </strong>
              <span>
                Horizontal cable railing maximizes sightlines in the compact DC rear yard — the most popular railing choice for urban rowhouse decks
              </span>
            </div>
            <div className="feature-box">
              <div className="icon">
                🪑
              </div>
              <strong>
                Built-In Seating
              </strong>
              <span>
                Integrated bench seating along the party walls — maximizes guest capacity without furniture consuming the limited rear yard deck footprint
              </span>
            </div>
            <div className="feature-box">
              <div className="icon">
                🌱
              </div>
              <strong>
                Planter Boxes
              </strong>
              <span>
                Built-in deck-edge planters bring greenery and privacy to DC rear yard decks where the adjacent party walls create a canyon-like enclosure
              </span>
            </div>
            <div className="feature-box">
              <div className="icon">
                💡
              </div>
              <strong>
                Deck Lighting
              </strong>
              <span>
                Post cap, step, and string lighting — essential for DC rear yard decks used through the evening in all three outdoor seasons
              </span>
            </div>
            <div className="feature-box">
              <div className="icon">
                🍳
              </div>
              <strong>
                Compact Grill Station
              </strong>
              <span>
                Built-in countertop with gas grill and storage — urban-scaled outdoor kitchen that fits within DC&apos;s constrained rear yard footprint
              </span>
            </div>
          </div>
          <h2>
            Serving All Washington, DC Neighborhoods for Deck Building
          </h2>
          <div className="neighborhood-grid">
            <div className="neighborhood-card">
              <h3>
                Capitol Hill
              </h3>
              <div className="hist-tag">
                Historic District
              </div>
              <p>
                DC&apos;s most active rowhouse deck market. Victorian and Federal rowhouses with rear yards of 18–28 ft depth. Standard rear yard composite or Ipe decks proceed with DC DOB permits — HPRB not required for rear yard construction. Cable railing and multi-level English basement integration popular. DLCP-licensed contractor required. Rents strong for ADU tenants who also benefit from English basement deck landing access.
              </p>
            </div>
            <div className="neighborhood-card">
              <h3>
                Petworth
              </h3>
              <span className="hood-tag">
                No historic district — DC DOB permits
              </span>
              <p>
                Northwest DC&apos;s most active non-historic-district deck market. 1900s–1920s rowhouses with rear yards offering good deck potential. No HPRB review required — standard DC DOB permits only. Composite rear yard decks are the dominant type here. DLCP license required for all contractors. Strong property appreciation supports deck investment ROI.
              </p>
            </div>
            <div className="neighborhood-card">
              <h3>
                Columbia Heights
              </h3>
              <span className="hood-tag">
                Mixed historic district coverage
              </span>
              <p>
                Dense NW DC neighborhood with varied rowhouse stock from multiple eras. Rear yard decks proceed with DC DOB permits for most properties. Some blocks in historic district overlay — assessed during consultation. Columbia Heights Metro access supports strong property values and buyer appeal. DLCP license required.
              </p>
            </div>
            <div className="neighborhood-card">
              <h3>
                Georgetown
              </h3>
              <div className="hist-tag">
                Historic District
              </div>
              <p>
                DC&apos;s most stringent historic district — all exterior modifications require HPRB review. Rear yard deck construction is not a street-visible modification and proceeds with DC DOB permits for standard rear yard builds. Georgetown rear yard decks command premium value — home values of $1.5–$3M+ make Ipe hardwood the natural material choice. DLCP license required.
              </p>
            </div>
            <div className="neighborhood-card">
              <h3>
                Shaw / Bloomingdale
              </h3>
              <span className="hood-tag">
                Parts in historic district
              </span>
              <p>
                Victorian rowhouse neighborhoods with active renovation markets. Rear yard decks are among the most-requested outdoor improvements. Parts of Shaw are in historic district overlay — rear siting keeps most projects on standard DC DOB permit path. Cable railing and Ipe are popular choices in these premium NW DC neighborhoods. DLCP required.
              </p>
            </div>
            <div className="neighborhood-card">
              <h3>
                Dupont Circle / Logan Circle
              </h3>
              <div className="hist-tag">
                Historic District
              </div>
              <p>
                Prestigious NW DC historic districts with late Victorian rowhouses. Rear yard decks proceed with DC DOB permits — HPRB review not required for rear yard construction. Premium rowhouse values ($1–2M+) support Ipe hardwood and high-specification composite deck builds. Strong rental market for English basement ADU tenants who benefit from lower-level deck landing. DLCP required.
              </p>
            </div>
            <div className="neighborhood-card">
              <h3>
                Takoma DC / 16th Street Heights
              </h3>
              <span className="hood-tag">
                Mix of detached &amp; rowhouse
              </span>
              <p>
                NW DC neighborhoods bordering Maryland with mix of detached homes and rowhouses. Detached homes have more rear yard flexibility than rowhouses — wider lots and more depth. DC DOB permits. Some historic district overlay. Good deck feasibility across both housing types.
              </p>
            </div>
            <div className="neighborhood-card">
              <h3>
                Brookland / Trinidad / NE DC
              </h3>
              <span className="hood-tag">
                Northeast DC · Growing market
              </span>
              <p>
                NE DC rowhouse neighborhoods with growing renovation markets. More accessible entry price points than premium NW DC neighborhoods. Composite rear yard decks are the dominant type — practical, attractive, long-lived. DC DOB permits. Limited historic district overlay in most of NE DC. DLCP license required for all contractors.
              </p>
            </div>
          </div>
          <h2>
            Our Deck Building Process in Washington, DC
          </h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">
                1
              </div>
              <div className="step-content">
                <h3>
                  Free In-Home Consultation — Rear Yard Assessment &amp; HPRB Check
                </h3>
                <p>
                  We visit your DC rowhouse, measure the rear yard dimensions (width between party walls, usable depth after setbacks), assess the rear elevation and foundation wall type, identify whether the property is in a historic district and if the proposed scope requires HPRB review, and discuss the deck design, material choice, and budget. No cost, no obligation.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                2
              </div>
              <div className="step-content">
                <h3>
                  Custom Rear Yard Deck Design
                </h3>
                <p>
                  Our design team develops a deck layout within the confirmed rear yard dimensions and setback constraints — maximizing usable area within the available footprint. For multi-level designs integrating English basement access, both levels are designed as a unified system. Material, railing style, stair configuration, and features are specified. Full structural drawings and site plan prepared for DC DOB permit submission.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                3
              </div>
              <div className="step-content">
                <h3>
                  DC DOB Permit Filing — DLCP License
                </h3>
                <p>
                  We file the building permit with the DC Department of Buildings using our DLCP license. All required structural drawings, site plan, and application materials are prepared and submitted by our permit team. DC DOB plan review typically takes 3–6 weeks — our permit team manages all plan review correspondence and any revision requests.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                4
              </div>
              <div className="step-content">
                <h3>
                  Construction Logistics Planning
                </h3>
                <p>
                  Material delivery route (alley access or through house), crew parking permits, equipment restrictions, party wall proximity protocols — all planned before construction begins. Urban site logistics that suburban projects never encounter are addressed during pre-construction, not on day one when logistics problems become cost problems.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                5
              </div>
              <div className="step-content">
                <h3>
                  Foundation Assessment, Footings &amp; Ledger Attachment
                </h3>
                <p>
                  The rear foundation wall type is assessed — brick, rubble stone, concrete block, or poured concrete — and the ledger attachment method is specified accordingly. Post holes drilled for any freestanding posts, footings poured, DC DOB footing inspection managed. Ledger attached to rear wall with correct fastener type and flashing.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                6
              </div>
              <div className="step-content">
                <h3>
                  Framing, Decking &amp; Features
                </h3>
                <p>
                  Framing per structural drawings, then composite or Ipe decking (with pre-drilling and hidden fasteners for Ipe), cable or wood railing, stairway, pergola where included, built-in seating and planters, and lighting. DC DOB framing inspection managed. For Ipe: end-grain sealing on every cut during installation.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                7
              </div>
              <div className="step-content">
                <h3>
                  DC DOB Final Inspection, Walkthrough &amp; 1-Year Warranty
                </h3>
                <p>
                  DC DOB final inspection managed by our permit team. Thorough walkthrough after approval, every punch list item addressed, and 1-year workmanship warranty activated. Your DC rear yard deck is legally complete.
                </p>
              </div>
            </div>
          </div>
          <h2>
            Deck Building Cost in Washington, DC
          </h2>
          <p>
            DC deck costs reflect the urban construction premium — logistics, DLCP permit fees, DC DOB processing timeline, and the premium market context of DC rowhouse neighborhoods:
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
                  Notes for Washington DC
                </th>
              </tr>
              <tr>
                <td>
                  Rear Yard Deck — PT (180–260 sq ft)
                </td>
                <td>
                  $22,000 – $36,000
                </td>
                <td>
                  Standard pressure-treated with wood railing. DC DOB permit + DLCP license included. Party wall setback confirmed during consultation.
                </td>
              </tr>
              <tr>
                <td>
                  Rear Yard Deck — Composite (200–300 sq ft)
                </td>
                <td>
                  $28,000 – $50,000
                </td>
                <td>
                  Trex or TimberTech. Cable or wood railing. DC DOB permit + DLCP. 25–30 yr lifespan. Most popular DC rowhouse deck material choice.
                </td>
              </tr>
              <tr>
                <td>
                  Ipe Hardwood Rear Yard Deck (200–280 sq ft)
                </td>
                <td>
                  $38,000 – $72,000
                </td>
                <td>
                  Pre-drilling, hidden fasteners, end-grain sealing. 40–75 yr lifespan. Capitol Hill, Georgetown, Dupont Circle premium market choice. DC DOB permit + DLCP.
                </td>
              </tr>
              <tr>
                <td>
                  Multi-Level Deck with English Basement Integration
                </td>
                <td>
                  $38,000 – $72,000
                </td>
                <td>
                  Upper main-floor deck + lower English basement landing. Cable railing on both levels, stair connecting. DC DOB permit + DLCP. Ideal for homes with ADU.
                </td>
              </tr>
              <tr>
                <td>
                  Rear Yard Deck with Pergola
                </td>
                <td>
                  $40,000 – $78,000
                </td>
                <td>
                  Shade structure over main deck area. Wood or aluminum. DC DOB permit — rear yard siting means HPRB not typically required. DLCP included.
                </td>
              </tr>
              <tr>
                <td>
                  Rooftop Terrace Build
                </td>
                <td>
                  $45,000 – $95,000
                </td>
                <td>
                  Structural roof assessment required. Waterproof membrane, low-profile composite or Ipe, cable/glass railing. DC DOB structural permit + DLCP. Feasibility depends on roof structure.
                </td>
              </tr>
              <tr>
                <td>
                  Deck Replacement (Remove &amp; Rebuild)
                </td>
                <td>
                  $28,000 – $62,000
                </td>
                <td>
                  DC DOB permit required. Foundation type reassessed before new ledger. Opportunity to upgrade to Ipe or composite. DLCP contractor required.
                </td>
              </tr>
            </tbody>
          </table>
          <div className="tip">
            💡
            <strong>
              DC Deck ROI:
            </strong>
            A quality composite or Ipe rear yard deck on a DC rowhouse typically adds $35,000–$65,000 in appraised value — and in the premium neighborhoods (Capitol Hill, Georgetown, Dupont Circle) where DC deck investment is most common, that absolute dollar return reflects DC&apos;s premium home values. More importantly, DC&apos;s private outdoor space scarcity means a quality rear yard deck significantly shortens time-on-market and expands the buyer pool at resale — buyers who actively seek outdoor space in a dense urban setting are willing to pay specifically for it.
          </div>
          <div className="cta-banner">
            <h2>
              Get a Free DC Deck Consultation
            </h2>
            <p>
              We&apos;ll visit your DC rowhouse, measure the rear yard, assess the historic district implications, design the deck that maximizes your outdoor space, and manage the DC DOB permit process with our DLCP license. No cost, no obligation.
            </p>
            <Link href="/contact-us" className="cta-btn">
              Schedule Free Consultation
            </Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">
              📞 Call +1 240-730-1292
            </a>
          </div>
          <h2>
            What Washington, DC Homeowners Say About DMV-GC Group
          </h2>
          <div className="review-grid">
            <div className="review-card">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-text">
                &quot;We have a Capitol Hill rowhouse with an English basement ADU. DMV-GC Group built us a two-level rear deck — upper deck off our main living room, lower landing for the ADU tenant. Cable railing on both levels. The DC DOB permit was filed with their DLCP license and handled without us contacting the city once. Our ADU tenant loves having her own outdoor space.&quot;
              </p>
              <div className="review-author">
                — Verified Homeowner ·
                <span className="review-location">
                  Capitol Hill, Washington DC
                </span>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-text">
                &quot;We&apos;re in the Dupont Circle historic district and were worried about HPRB issues. DMV-GC Group confirmed immediately that rear yard deck construction doesn&apos;t require HPRB review — filed with DC DOB and built our Ipe deck without any historic review complications. The pre-drilling for every Ipe fastener was done correctly. Three years in, no movement, no cracking.&quot;
              </p>
              <div className="review-author">
                — Verified Homeowner ·
                <span className="review-location">
                  Dupont Circle, Washington DC
                </span>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-text">
                &quot;Two contractors we interviewed only had Maryland licenses — no DLCP. DMV-GC Group is actually licensed for DC. The difference showed throughout: DC DOB permits filed correctly, all inspections passed, no permit violations. Our Petworth composite deck with pergola is exactly what we designed together. Properly done from the first permit to the final inspection.&quot;
              </p>
              <div className="review-author">
                — Verified Homeowner ·
                <span className="review-location">
                  Petworth, Washington DC
                </span>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-text">
                &quot;Our Georgetown rowhouse rear yard is 19 feet wide. DMV-GC Group measured it precisely, designed a deck within the exact setback envelope, and used cable railing to make the space feel open rather than enclosed. The material delivery came through the alley — pre-planned, no damage to anything. DC DOB passed every inspection on the first visit.&quot;
              </p>
              <div className="review-author">
                — Verified Homeowner ·
                <span className="review-location">
                  Georgetown, Washington DC
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
              Washington DC homeowners trust DMV-GC Group for deck projects that require the DLCP license Maryland-only contractors cannot provide, DC DOB permit expertise, HPRB historic district assessment, and the urban construction logistics that make DC deck projects genuinely different from suburban Maryland builds.
            </p>
          </div>
          <h2>
            Serving All Washington, DC Neighborhoods for Deck Building
          </h2>
          <div className="areas-grid">
            <span className="area-pill">
              Capitol Hill
            </span>
            <span className="area-pill">
              Petworth
            </span>
            <span className="area-pill">
              Columbia Heights
            </span>
            <span className="area-pill">
              Georgetown
            </span>
            <span className="area-pill">
              Shaw
            </span>
            <span className="area-pill">
              Bloomingdale
            </span>
            <span className="area-pill">
              Dupont Circle
            </span>
            <span className="area-pill">
              Logan Circle
            </span>
            <span className="area-pill">
              U Street
            </span>
            <span className="area-pill">
              16th Street Heights
            </span>
            <span className="area-pill">
              Takoma DC
            </span>
            <span className="area-pill">
              Brookland
            </span>
            <span className="area-pill">
              Trinidad
            </span>
            <span className="area-pill">
              Northeast DC
            </span>
          </div>
          <div className="nearby-box">
            <h3>
              Also serving Chevy Chase, MD — directly north of DC on Connecticut Avenue
            </h3>
            <p>
              DMV-GC Group builds custom decks throughout Chevy Chase, MD — immediately north of DC, sharing the Connecticut Avenue corridor. Chevy Chase&apos;s Colonial Revival homes and multi-village permit structure are served by the same licensed design-build team with premium material expertise.
              <Link href="/service/decks/chevy-chase-md">
                View our Chevy Chase deck page &rarr;
              </Link>
            </p>
          </div>
          <h2>
            Frequently Asked Questions — Deck Building in Washington, DC
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
              Explore Our Other Services in Washington, DC
            </h2>
            <ul>
              <li>
                <Link href="/service/kitchen-remodeling/washington-dc">
                  Kitchen Remodeling in Washington, DC
                </Link>
              </li>
              <li>
                <Link href="/service/bathroom-remodeling/washington-dc">
                  Bathroom Remodeling in Washington, DC
                </Link>
              </li>
              <li>
                <Link href="/service/basement-remodeling/washington-dc">
                  Basement Remodeling in Washington, DC
                </Link>
              </li>
              <li>
                <Link href="/service/adu/washington-dc">
                  ADU Construction in Washington, DC
                </Link>
              </li>
              <li>
                <Link href="/service/home-additions">
                  Home Additions in Washington, DC
                </Link>
              </li>
              <li>
                <Link href="/service/design-build">
                  Design-Build Contractor in Washington, DC
                </Link>
              </li>
            </ul>
          </div>
          <div className="cta-banner">
            <h2>
              Ready to Build Your Washington, DC Deck?
            </h2>
            <p>
              Call us at
              <strong>
                +1 240-730-1292
              </strong>
              or schedule your free in-home consultation. DLCP-licensed, DC DOB permit expertise, and rear yard design experience across all DC neighborhoods — from first measurement to final inspection.
            </p>
            <Link href="/contact-us" className="cta-btn">
              Get Free DC Deck Estimate &rarr;
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
