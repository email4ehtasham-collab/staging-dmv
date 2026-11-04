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
        "description": "Licensed deck builder headquartered in North Bethesda, MD at 11810 Grand Park Ave. Custom deck construction across all North Bethesda neighborhoods — White Flint Farm, Luxmanor, Tilden Woods, Pike District — with elevated split-level deck expertise, Montgomery County permit management, and HOA coordination where applicable.",
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
            "name": "North Bethesda",
            "sameAs": "https://en.wikipedia.org/wiki/North_Bethesda,_Maryland"
          },
          {
            "@type": "City",
            "name": "Bethesda"
          },
          {
            "@type": "City",
            "name": "Rockville"
          },
          {
            "@type": "City",
            "name": "Garrett Park"
          },
          {
            "@type": "City",
            "name": "Kensington"
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
        "@id": "https://www.dmv-gc.com/service/decks/north-bethesda-md#service",
        "serviceType": "Deck Building",
        "name": "Deck Building in North Bethesda, MD",
        "alternateName": [
          "Custom Deck Construction",
          "Split-Level Deck",
          "Composite Deck",
          "Elevated Deck",
          "White Flint Deck"
        ],
        "provider": {
          "@id": "https://www.dmv-gc.com/#business"
        },
        "areaServed": {
          "@type": "City",
          "name": "North Bethesda",
          "sameAs": "https://en.wikipedia.org/wiki/North_Bethesda,_Maryland"
        },
        "description": "Custom deck building in North Bethesda, MD by the community's own local contractor — headquartered at 11810 Grand Park Ave. Elevated split-level decks, composite rear decks, multi-level outdoor living builds, and under-deck dry space systems across White Flint Farm, Luxmanor, Tilden Woods, and the Pike District.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "18000",
            "maxPrice": "92000",
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
            "name": "North Bethesda, MD",
            "item": "https://www.dmv-gc.com/service/decks/north-bethesda-md"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does it cost to build a deck in North Bethesda, MD?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Deck construction in North Bethesda, MD typically costs between $18,000 and $92,000 depending on home type, size, material, and features. A ground-level or low-elevation deck for a ranch or townhome runs $18,000–$32,000. A composite elevated split-level deck costs $34,000–$62,000. An elevated deck with under-deck drainage system runs $44,000–$72,000. A multi-level deck with pergola and built-in features costs $55,000–$92,000. As North Bethesda's local contractor headquartered at 11810 Grand Park Ave, DMV-GC Group provides free in-home consultations with honest, itemized estimates."
            }
          },
          {
            "@type": "Question",
            "name": "Is DMV-GC Group based in North Bethesda?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. DMV-GC Group is headquartered at 11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852 — in the Pike District redevelopment area near the White Flint Metro station. We are North Bethesda's local licensed deck contractor, with direct familiarity with every neighborhood's housing stock, the Montgomery County permit process, and the White Flint Metro area's property market."
            }
          },
          {
            "@type": "Question",
            "name": "What deck type works best for North Bethesda's split-level homes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "North Bethesda's 1960s–70s split-levels in White Flint Farm, Luxmanor, and surrounding neighborhoods have main living floors 4–6 feet above rear grade — creating a natural elevated rear deck connection from the living or dining room. An elevated composite or pressure-treated rear deck with stairs to the lower yard is the most functional configuration, often paired with an under-deck drainage system that converts the 4–6 feet of clearance below into a usable covered dry patio. DMV-GC Group has built elevated split-level decks throughout North Bethesda's established neighborhoods — minutes from our Grand Park Avenue office."
            }
          },
          {
            "@type": "Question",
            "name": "Does DMV-GC Group handle Montgomery County deck permits for North Bethesda?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. North Bethesda is an unincorporated community in Montgomery County — all deck permits go through Montgomery County DPS. DMV-GC Group files all required building permits with structural drawings and manages all county correspondence, plan review, and inspection scheduling as a standard part of every North Bethesda deck project — from our office minutes from your home."
            }
          },
          {
            "@type": "Question",
            "name": "Is DMV-GC Group licensed for deck building in North Bethesda, MD?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in North Bethesda and Montgomery County. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every deck project. As North Bethesda's local contractor, we stand behind our work in the community where we operate every day."
            }
          }
        ]
      }
    ]
  };

const faqData = [
  { eventKey: "0", question: "How much does it cost to build a deck in North Bethesda, MD?", answer: "Deck construction in North Bethesda typically costs $18,000–$92,000 depending on home type, size, material, and features. A compact Pike District townhome deck runs $18,000–$32,000. An elevated split-level deck in pressure-treated costs $26,000–$46,000. A composite elevated split-level deck runs $34,000–$62,000. Adding an under-deck drainage system brings that to $44,000–$72,000. A multi-level deck with pergola and outdoor kitchen runs $55,000–$92,000. Montgomery County permits are included in every scope. Free in-home consultations from our North Bethesda office." },
  { eventKey: "1", question: "Is DMV-GC Group actually based in North Bethesda?", answer: "Yes. DMV-GC Group is headquartered at 11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852 — in the Pike District, steps from the White Flint Metro. We are not a contractor commuting from another county. We are North Bethesda's local licensed deck contractor with direct familiarity with White Flint Farm, Luxmanor, Tilden Woods, and the Pike District — and the Montgomery County DPS permit process that governs every deck project here." },
  { eventKey: "2", question: "What is an under-deck drainage system and is it worth adding in North Bethesda?", answer: "An under-deck drainage system is a waterproof ceiling installed beneath an elevated deck that channels rain through gutters and downspouts — converting the under-deck area from a wet, muddy space to a functional covered outdoor room. For North Bethesda's split-levels with 4–6 feet of clearance beneath the elevated deck, this is consistently the most popular add-on. At $9,000–$18,000 additional, it adds a second fully usable outdoor zone without consuming any extra yard footprint — one of the best dollar-per-square-foot outdoor investments available in North Bethesda. DMV-GC Group integrates under-deck system design into new deck builds from the first drawing, and can also retrofit to existing elevated decks." },
  { eventKey: "3", question: "Does DMV-GC Group handle Montgomery County deck permits for North Bethesda?", answer: "Yes. North Bethesda is in unincorporated Montgomery County — all deck permits go through Montgomery County DPS. DMV-GC Group files all required building permits with complete structural drawings and manages all county correspondence, plan review, and inspection scheduling from our North Bethesda office. Homeowners never need to contact the county directly for any part of the permit process." },
  { eventKey: "4", question: "Is DMV-GC Group licensed for deck building in North Bethesda, MD?", answer: "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in North Bethesda and Montgomery County. We employ licensed electricians and plumbers in-house, are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every deck project. As the community's local contractor, we stand behind our work in the neighborhood where we operate every day." }
];

export default function DecksNorthBethesdaMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => { setActiveMenuItem("service"); }, []);
  return (
    <main>
      <div className="city-service-detail-page decks-north-bethesda-md">
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
            North Bethesda, MD
          </nav>
          <div className="hero">
            <div className="hero-location-tag">
              📍 Serving North Bethesda, MD
            </div>
            <h1>
              Deck Building in North Bethesda, MD — Custom Deck Contractor for Split-Levels, Colonials &amp; Townhomes
            </h1>
            <div className="hero-meta">
              <span className="badge hq">
                🏠 Our Headquarters — 11810 Grand Park Ave, Suite 500
              </span>
              <span className="badge">
                ⭐ 4.9 Rating · 97+ Reviews
              </span>
              <span className="badge">
                ✓ MHIC Licensed &amp; Insured
              </span>
              <span className="badge">
                ✓ MoCo Permits Handled
              </span>
              <span className="badge dark">
                📞 +1 240-730-1292
              </span>
            </div>
          </div>
          <div className="hq-banner">
            <div className="icon">
              🏠
            </div>
            <div>
              <h3>
                DMV-GC Group Is North Bethesda&apos;s Own Deck Contractor — Headquartered at 11810 Grand Park Ave, Suite 500
              </h3>
              <p>
                When you hire DMV-GC Group for a North Bethesda deck project, you&apos;re hiring the team that works here every day — headquartered in the Pike District, steps from the White Flint Metro station. We know every North Bethesda neighborhood&apos;s housing stock from the inside: the 1960s–70s split-levels of White Flint Farm and Luxmanor, the colonials of Tilden Woods, the townhomes of the Pike District redevelopment corridor. We know the Montgomery County permit process and can schedule consultations faster, respond to mid-project questions sooner, and follow up on punch list items the same day — because our office is minutes from your home, not an hour away.
              </p>
            </div>
          </div>
          <div className="intro-box">
            Looking for a trusted
            <strong>
              deck contractor in North Bethesda, MD
            </strong>
            ? North Bethesda&apos;s diverse housing — 1960s–70s split-levels and colonials in White Flint Farm, Luxmanor, and Tilden Woods; newer Pike District townhomes; and Randolph Hills homes near the Kensington border — creates a full range of deck opportunities. The most common and compelling North Bethesda deck build is the elevated rear deck on a split-level home, where the main living floor sits 4–6 feet above rear grade and an under-deck dry space system converts the clearance below into a second usable outdoor zone. As North Bethesda&apos;s local licensed design-build contractor, DMV-GC Group manages the complete deck process in-house — design, Montgomery County permits, construction, and inspection — from our office minutes from every neighborhood we serve.
          </div>
          <div className="trust-bar">
            <div className="trust-item">
              <div className="icon">
                🏠
              </div>
              <strong>
                Local HQ
              </strong>
              <span>
                11810 Grand Park Ave, Suite 500
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
            Deck Building Services in North Bethesda, MD
          </h2>
          <div className="service-grid">
            <div className="service-item">
              Elevated Split-Level Deck Design &amp; Build
            </div>
            <div className="service-item">
              Composite Deck (Trex / TimberTech / Azek)
            </div>
            <div className="service-item">
              Pressure-Treated &amp; Cedar Deck
            </div>
            <div className="service-item">
              Ground-Level Ranch &amp; Townhome Platform Deck
            </div>
            <div className="service-item">
              Multi-Level Deck with Stairs
            </div>
            <div className="service-item">
              Under-Deck Drainage &amp; Dry Space System
            </div>
            <div className="service-item">
              Pergola &amp; Covered Deck Structure
            </div>
            <div className="service-item">
              Outdoor Kitchen &amp; Grill Station
            </div>
            <div className="service-item">
              Cable &amp; Wood Railing Systems
            </div>
            <div className="service-item">
              Built-In Seating &amp; Storage
            </div>
            <div className="service-item">
              Deck Lighting Systems
            </div>
            <div className="service-item">
              Deck Replacement &amp; Structural Rebuild
            </div>
            <div className="service-item">
              Structural Assessment of Existing Decks
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
                About DMV-GC Group — North Bethesda&apos;s Local Licensed Deck Contractor
              </h4>
              <p>
                DMV-GC Group is headquartered at 11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852 — in the Pike District, steps from White Flint Metro. We have built decks, converted basements to ADUs, remodeled kitchens and bathrooms, and completed whole-home renovations throughout every North Bethesda neighborhood. Our team knows the split-level housing stock of White Flint Farm and Luxmanor, the colonial configurations of Tilden Woods, the compact lower-level footprints of Pike District townhomes, and the Montgomery County DPS permit process that governs every North Bethesda deck project. Maryland MHIC licensed. 1-year workmanship warranty on every project.
              </p>
              <div className="author-creds">
                <span className="cred hq">
                  HQ: 11810 Grand Park Ave
                </span>
                <span className="cred">
                  MHIC Licensed
                </span>
                <span className="cred">
                  Split-Level Specialists
                </span>
                <span className="cred">
                  MoCo Permit Experts
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
            Types of Decks We Build in North Bethesda, MD
          </h2>
          <p>
            North Bethesda&apos;s housing stock spans several construction eras and configurations — each presenting different deck opportunities. Here is what we build most commonly across the community:
          </p>
          <div className="deck-type-grid">
            <div className="deck-type-card">
              <span className="deck-tag">
                Most Common — White Flint Farm &amp; Luxmanor
              </span>
              <h3>
                Elevated Split-Level Rear Deck
              </h3>
              <p>
                North Bethesda&apos;s dominant deck type — an elevated rear deck off the main living floor of a 1960s–70s split-level, sitting 4–6 feet above rear grade. Accessed from a living room or dining room sliding door. The elevated position gives the deck excellent sight lines over the rear yard and creates 4–6 feet of clearance below — often converted to a covered dry patio with an under-deck drainage system. Composite decking with cable or wood railing, stairs to lower yard, and Montgomery County permit all managed from our Grand Park Avenue office nearby.
              </p>
              <div className="deck-cost">
                Typical Cost: $34,000 – $62,000
              </div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">
                White Flint Farm &amp; Tilden Woods
              </span>
              <h3>
                Colonial Rear Deck — Full Basement Homes
              </h3>
              <p>
                North Bethesda&apos;s colonials in White Flint Farm and Tilden Woods have full basements and rear elevations that vary by specific home — some near grade, others elevated 2–4 feet. A rear deck off the main floor, with stairs to the yard and an optional lower landing, creates excellent indoor-outdoor flow from the kitchen or family room. Composite decking in warm tones is the most popular material choice for Tilden Woods and White Flint Farm colonials.
              </p>
              <div className="deck-cost">
                Typical Cost: $28,000 – $56,000
              </div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">
                Pike District Townhomes
              </span>
              <h3>
                Compact Rear Deck or Rooftop Terrace
              </h3>
              <p>
                Pike District and Grand Park Avenue townhomes have compact rear yards — often 15–25 feet of depth — and in some cases rooftop terrace potential on the upper level. A compact composite rear deck maximizes the usable outdoor space within the lot&apos;s constraints. For townhomes with rooftop access, a rooftop terrace with low-profile decking, cable railing, and integrated planters creates a premium outdoor room with Pike District and White Flint Metro views. HOA coordination included where applicable.
              </p>
              <div className="deck-cost">
                Typical Cost: $18,000 – $44,000
              </div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">
                For Larger Rear Yards
              </span>
              <h3>
                Multi-Level Deck with Pergola &amp; Features
              </h3>
              <p>
                White Flint Farm and Luxmanor homes on larger corner or end lots, or Randolph Hills properties with deeper rear yards, support more ambitious multi-level deck builds — upper deck off the living floor, lower deck near grade, connected by stairs, with a pergola over the upper level, outdoor kitchen integration, and cable railing. These are the North Bethesda deck projects that rival the scope of what we build in Potomac and Chevy Chase — at a market price point that makes the investment proportionate.
              </p>
              <div className="deck-cost">
                Typical Cost: $55,000 – $92,000
              </div>
            </div>
          </div>
          <h2>
            Under-Deck Drainage Systems for North Bethesda Split-Levels — Double Your Outdoor Space
          </h2>
          <p>
            North Bethesda&apos;s split-level homes in White Flint Farm and Luxmanor have 4–6 feet of clearance beneath the main-floor deck — a space that is typically muddy, exposed, and underused. An under-deck drainage system converts this clearance into a genuinely functional covered outdoor area, effectively doubling the usable outdoor space from one deck build. It is consistently the most popular add-on on North Bethesda split-level deck projects — and one of the best value-per-dollar additions in the deck campaign.
          </p>
          <div className="underdeck-grid">
            <div className="underdeck-box">
              <div className="icon">
                🌧️
              </div>
              <h3>
                What It Is
              </h3>
              <p>
                A waterproof ceiling system installed beneath the elevated deck — aluminum panels or polycarbonate channels that collect rainwater from the deck boards above and route it through concealed gutters to downspouts at the deck perimeter. The result: a dry outdoor space below the deck, usable even in rain.
              </p>
            </div>
            <div className="underdeck-box">
              <div className="icon">
                📐
              </div>
              <h3>
                What You Get Below
              </h3>
              <p>
                At 4–6 feet of clearance — typical for North Bethesda split-levels — the under-deck space can be finished with concrete or paver flooring, patio furniture, outdoor lighting, and even a ceiling fan. A private, covered outdoor room that didn&apos;t exist before the deck was built.
              </p>
            </div>
            <div className="underdeck-box">
              <div className="icon">
                💰
              </div>
              <h3>
                Value Add
              </h3>
              <p>
                Adding an under-deck system to a North Bethesda split-level deck build typically costs $9,000–$18,000 additional — and adds a second fully usable outdoor zone without consuming any additional yard footprint. One of the best dollar-per-square-foot outdoor space investments available.
              </p>
            </div>
            <div className="underdeck-box">
              <div className="icon">
                🔧
              </div>
              <h3>
                Integrated from Day One
              </h3>
              <p>
                DMV-GC Group integrates under-deck system design into the deck framing from the first draft — sizing joist spacing and beam positioning to accommodate the ceiling system correctly. Retrofitting to an existing deck is possible but more complex; new build integration is the cleaner and more cost-effective path.
              </p>
            </div>
            <div className="underdeck-box">
              <div className="icon">
                🏠
              </div>
              <h3>
                Local Expertise
              </h3>
              <p>
                As North Bethesda&apos;s local contractor, DMV-GC Group has installed under-deck systems on split-level homes throughout White Flint Farm and Luxmanor — minutes from our Grand Park Avenue office. We know the typical clearance heights, drainage patterns, and finishing options for these specific homes.
              </p>
            </div>
            <div className="underdeck-box">
              <div className="icon">
                🔄
              </div>
              <h3>
                Retrofit Option Too
              </h3>
              <p>
                Already have an elevated deck but no drainage system? DMV-GC Group can retrofit an under-deck drainage ceiling to an existing elevated North Bethesda split-level deck — no demolition of the deck surface required. We assess the existing framing spacing during a consultation to confirm retrofit feasibility.
              </p>
            </div>
          </div>
          <h2>
            Popular Deck Features for North Bethesda Homes
          </h2>
          <div className="feature-grid">
            <div className="feature-box">
              <div className="icon">
                🌧️
              </div>
              <strong>
                Under-Deck Drainage
              </strong>
              <span>
                Most popular North Bethesda add-on — converts the 4–6 ft clearance beneath split-level decks into a dry, covered outdoor room
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
                Horizontal cable railing preserves sightlines over North Bethesda rear yards — popular on split-level decks where elevation commands good views
              </span>
            </div>
            <div className="feature-box">
              <div className="icon">
                ☂️
              </div>
              <strong>
                Pergola &amp; Shade
              </strong>
              <span>
                Shade structure over the main deck — wood or aluminum pergola for North Bethesda&apos;s hot summers, with string light support
              </span>
            </div>
            <div className="feature-box">
              <div className="icon">
                🍳
              </div>
              <strong>
                Outdoor Kitchen
              </strong>
              <span>
                Built-in grill, counter, and refrigeration — in-house licensed gas, electrical, and plumbing, one contract from design to finish
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
                Post cap, step, and rail lighting on low-voltage systems — evening use for North Bethesda&apos;s outdoor-friendly spring and fall seasons
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
                Integrated benches along the deck perimeter — maximizes guest capacity without furniture crowding the deck surface
              </span>
            </div>
          </div>
          <h2>
            North Bethesda Neighborhoods We Serve for Deck Building
          </h2>
          <div className="neighborhood-grid">
            <div className="neighborhood-card">
              <h3>
                White Flint Farm
              </h3>
              <span className="hood-tag">
                Most active deck market · Split-levels · White Flint Metro proximity
              </span>
              <p>
                North Bethesda&apos;s most active deck renovation market — 1960s–70s split-levels with main living floors 4–6 feet above rear grade and rear yards that open up below deck level. Elevated composite deck with under-deck drainage system is the dominant project type here. 0.8–1.2 miles to White Flint Metro Red Line station. MoCo permits. As our local neighborhood, we know these homes specifically.
              </p>
            </div>
            <div className="neighborhood-card">
              <h3>
                Luxmanor
              </h3>
              <span className="hood-tag">
                Split-levels &amp; colonials · Larger lots
              </span>
              <p>
                Established 1960s–70s split-levels and colonials on Luxmanor Drive and adjacent streets. Similar split-level deck opportunity to White Flint Farm — elevated rear deck with under-deck potential. Some larger corner and end lots support multi-level builds and pergola additions. MoCo permits. Minutes from our Grand Park Avenue office.
              </p>
            </div>
            <div className="neighborhood-card">
              <h3>
                Pike District / Grand Park Ave
              </h3>
              <span className="hood-tag">
                DMV-GC Group&apos;s own neighborhood · Townhomes · White Flint Metro steps away
              </span>
              <p>
                The redevelopment corridor surrounding our own office at 11810 Grand Park Ave. Newer townhomes (2000s–2010s) with compact rear yards and rooftop terrace potential. HOA coordination included where applicable. Strongest Metro proximity in North Bethesda — steps from White Flint station. We know these buildings from the inside.
              </p>
            </div>
            <div className="neighborhood-card">
              <h3>
                Tilden Woods
              </h3>
              <span className="hood-tag">
                1970s–80s colonials · Good lot sizes
              </span>
              <p>
                1970s–80s single-family colonials on Old Georgetown Road and adjacent streets. Full basements and good rear yard depths support colonial-style elevated rear decks of 280–400 sq ft. Some properties have sloped lots toward stream corridors — multi-level deck potential where grade allows. MoCo permits.
              </p>
            </div>
            <div className="neighborhood-card">
              <h3>
                Randolph Hills
              </h3>
              <span className="hood-tag">
                Established neighborhood · Kensington border
              </span>
              <p>
                Established neighborhood bordering Kensington and Garrett Park — 1950s–70s construction with mix of split-levels and colonials. Some concrete block foundation characteristics in the older 1950s–60s stock — assessed during consultation, same as Wheaton&apos;s Glenmont. Good rear yard sizes. MoCo permits.
              </p>
            </div>
            <div className="neighborhood-card">
              <h3>
                Tuckerman Lane / Nebel Street Area
              </h3>
              <span className="hood-tag">
                Newer construction · Metro-proximate
              </span>
              <p>
                Newer townhomes and mixed-use residential in the White Flint redevelopment zone along Tuckerman Lane and Nebel Street. Among the most Metro-proximate residential addresses in North Bethesda. Compact lots require efficient deck design. HOA coordination where applicable. MoCo permits.
              </p>
            </div>
          </div>
          <h2>
            Our Deck Building Process in North Bethesda
          </h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">
                1
              </div>
              <div className="step-content">
                <h3>
                  Free In-Home Consultation — From Your Neighborhood&apos;s Own Contractor
                </h3>
                <p>
                  We visit your North Bethesda home — minutes from our Grand Park Avenue office — assess the home type and rear elevation, walk the rear yard, evaluate existing conditions, and discuss your vision and budget. For split-level homes, we note the elevation above grade and assess under-deck potential. For townhomes, we assess rear yard depth and rooftop terrace feasibility. No cost, no obligation.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                2
              </div>
              <div className="step-content">
                <h3>
                  Custom Deck Design — Home-Type Appropriate
                </h3>
                <p>
                  Full deck layout, structural plan, elevation drawings, railing style, material selection, and under-deck system design (where included) — developed for your specific North Bethesda home&apos;s configuration. For elevated split-level decks, structural beam and post sizing calculated from actual loads. Under-deck system panel dimensions integrated into the joist framing plan where included. Full drawings prepared for Montgomery County permit submission.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                3
              </div>
              <div className="step-content">
                <h3>
                  Montgomery County Permit Filing
                </h3>
                <p>
                  We file all required building permits with Montgomery County DPS — from our North Bethesda office. Our permit team manages all county correspondence, plan review, and inspection scheduling throughout the project. Homeowners never need to contact the county directly.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                4
              </div>
              <div className="step-content">
                <h3>
                  Foundation Assessment &amp; Footings
                </h3>
                <p>
                  For Randolph Hills and older North Bethesda homes with 1950s–60s construction, the foundation wall type is assessed before ledger attachment is specified. For White Flint Farm and Luxmanor split-levels with poured concrete or standard frame construction, standard ledger attachment with proper flashing. Post holes drilled to frost depth, footings poured, MoCo footing inspection managed.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                5
              </div>
              <div className="step-content">
                <h3>
                  Framing, Decking, Under-Deck System &amp; Features
                </h3>
                <p>
                  Framing installed per structural drawings — joist spacing accommodating under-deck panel system where included. Composite decking, railing, stairway, under-deck drainage ceiling, pergola where included, outdoor kitchen rough-in and finish, and lighting — coordinated by a project manager based steps from the job site. MoCo framing inspection managed.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                6
              </div>
              <div className="step-content">
                <h3>
                  Final Inspection, Walkthrough &amp; 1-Year Warranty
                </h3>
                <p>
                  Montgomery County final inspection managed from our local office. Thorough walkthrough, every punch list item addressed same day if possible — local response advantage. 1-year workmanship warranty activated.
                </p>
              </div>
            </div>
          </div>
          <h2>
            Deck Building Cost in North Bethesda, MD
          </h2>
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
                  Notes for North Bethesda
                </th>
              </tr>
              <tr>
                <td>
                  Compact Rear Deck — Pike District Townhome (150–220 sq ft)
                </td>
                <td>
                  $18,000 – $32,000
                </td>
                <td>
                  Compact footprint, efficient layout. HOA coordination where applicable. MoCo permit. Steps from our Grand Park Ave office.
                </td>
              </tr>
              <tr>
                <td>
                  Elevated Split-Level Deck — PT (280–360 sq ft)
                </td>
                <td>
                  $26,000 – $46,000
                </td>
                <td>
                  White Flint Farm and Luxmanor split-levels. 4–6 ft elevation. Stairs to lower yard. Railing required. MoCo permit.
                </td>
              </tr>
              <tr>
                <td>
                  Elevated Split-Level Deck — Composite (280–380 sq ft)
                </td>
                <td>
                  $34,000 – $62,000
                </td>
                <td>
                  Trex or TimberTech on PT frame. 25–30 yr lifespan. Cable or wood railing. MoCo permit. Most popular North Bethesda configuration.
                </td>
              </tr>
              <tr>
                <td>
                  Elevated Composite Deck + Under-Deck System
                </td>
                <td>
                  $44,000 – $72,000
                </td>
                <td>
                  Adds waterproof drainage ceiling below deck — dry covered patio, usable in rain. Most popular add-on for White Flint Farm and Luxmanor split-levels.
                </td>
              </tr>
              <tr>
                <td>
                  Colonial Composite Rear Deck — Tilden Woods (280–400 sq ft)
                </td>
                <td>
                  $32,000 – $58,000
                </td>
                <td>
                  Full basement colonials on good-sized lots. Standard elevation, stairs to yard. Pergola add-on popular. MoCo permit.
                </td>
              </tr>
              <tr>
                <td>
                  Multi-Level Deck with Pergola &amp; Outdoor Kitchen
                </td>
                <td>
                  $55,000 – $92,000
                </td>
                <td>
                  Larger-lot White Flint Farm, Luxmanor, or Randolph Hills properties. Two connected levels, shade structure, built-in kitchen. MoCo permit. In-house trades.
                </td>
              </tr>
              <tr>
                <td>
                  Deck Replacement (Remove &amp; Rebuild)
                </td>
                <td>
                  $28,000 – $60,000
                </td>
                <td>
                  MoCo permit required. Structural ledger assessment included. Opportunity to add under-deck drainage system during rebuild.
                </td>
              </tr>
            </tbody>
          </table>
          <div className="tip">
            💡
            <strong>
              North Bethesda Deck Value:
            </strong>
            A composite elevated deck on a White Flint Farm or Luxmanor split-level — with under-deck drainage system — typically adds $32,000–$52,000 to appraised value and significantly improves resale appeal in a community where the White Flint Metro proximity and Pike District redevelopment continue to support property value appreciation. As the local contractor here, we have a direct stake in the quality of work done in our own community — and in the value it returns to our neighbors.
          </div>
          <div className="cta-banner">
            <h2>
              Get a Free Deck Consultation in North Bethesda
            </h2>
            <p>
              We&apos;re right here — headquartered at 11810 Grand Park Ave, Suite 500. Call us or schedule online and we&apos;ll visit you quickly. Free in-home consultation, no obligation.
            </p>
            <Link href="/contact-us" className="cta-btn">
              Schedule Free Consultation
            </Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">
              📞 Call +1 240-730-1292
            </a>
          </div>
          <h2>
            What North Bethesda Homeowners Say About DMV-GC Group
          </h2>
          <div className="review-grid">
            <div className="review-card">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-text">
                &quot;Our White Flint Farm split-level had 5 feet of clearance under the rear deck area. DMV-GC Group designed the elevated Trex deck with the under-deck drainage system integrated from the start — the covered patio below is where we spend most of our summer evenings. The MoCo permit was handled completely by their team. They&apos;re literally our neighborhood contractor.&quot;
              </p>
              <div className="review-author">
                — Verified Homeowner ·
                <span className="review-location">
                  White Flint Farm, North Bethesda MD
                </span>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-text">
                &quot;We have a Luxmanor split-level and wanted cable railing for the rear yard view. DMV-GC Group&apos;s design kept the cable railing on the deck perimeter and painted wood posts at the stair — perfect combination. When a question came up mid-build, someone from their Grand Park Ave office was at our house within the hour.&quot;
              </p>
              <div className="review-author">
                — Verified Homeowner ·
                <span className="review-location">
                  Luxmanor, North Bethesda MD
                </span>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-text">
                &quot;We&apos;re in a Pike District townhome with a compact rear yard. DMV-GC Group designed a smart composite deck that uses the full usable footprint efficiently — built-in bench seating along the back wall and planters on the sides. The HOA coordination was included. We use it every weekend from April through October.&quot;
              </p>
              <div className="review-author">
                — Verified Homeowner ·
                <span className="review-location">
                  Pike District, North Bethesda MD
                </span>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-text">
                &quot;Our Tilden Woods colonial needed a multi-level deck — upper dining area off the slider, lower grilling zone near grade, pergola on top. DMV-GC Group built the whole thing: outdoor kitchen with gas line and refrigeration, cable railing, the pergola with string lights. The Montgomery County permit was filed and managed from their office around the corner.&quot;
              </p>
              <div className="review-author">
                — Verified Homeowner ·
                <span className="review-location">
                  Tilden Woods, North Bethesda MD
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
              North Bethesda homeowners trust DMV-GC Group — their own local contractor — for deck projects that take advantage of the split-level elevation, design the under-deck space as a second usable outdoor zone, manage the Montgomery County permit process completely, and deliver quality that enhances a community we call home.
            </p>
          </div>
          <h2>
            Serving All North Bethesda, MD Neighborhoods for Deck Building
          </h2>
          <div className="areas-grid">
            <span className="area-pill">
              White Flint Farm
            </span>
            <span className="area-pill">
              Luxmanor
            </span>
            <span className="area-pill">
              Pike District
            </span>
            <span className="area-pill">
              Grand Park Ave
            </span>
            <span className="area-pill">
              Tilden Woods
            </span>
            <span className="area-pill">
              Randolph Hills
            </span>
            <span className="area-pill">
              Tuckerman Lane
            </span>
            <span className="area-pill">
              Nebel Street Area
            </span>
            <span className="area-pill">
              Bethesda
            </span>
            <span className="area-pill">
              Rockville
            </span>
          </div>
          <div className="nearby-box">
            <h3>
              Also serving Bethesda, MD — directly south of North Bethesda
            </h3>
            <p>
              DMV-GC Group builds custom decks throughout Bethesda, which borders North Bethesda to the south along Old Georgetown Road and Wisconsin Avenue. Bethesda homeowners benefit from the same local team, Montgomery County permit expertise, and 1-year warranty.
              <Link href="/service/decks">
                View our full deck building service page &rarr;
              </Link>
            </p>
          </div>
          <h2>
            Frequently Asked Questions — Deck Building in North Bethesda, MD
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
              Explore Our Other Services in North Bethesda
            </h2>
            <ul>
              <li>
                <Link href="/service/kitchen-remodeling/north-bethesda-md">
                  Kitchen Remodeling in North Bethesda, MD
                </Link>
              </li>
              <li>
                <Link href="/service/bathroom-remodeling">
                  Bathroom Remodeling in North Bethesda, MD
                </Link>
              </li>
              <li>
                <Link href="/service/basement-remodeling/north-bethesda-md">
                  Basement Remodeling in North Bethesda, MD
                </Link>
              </li>
              <li>
                <Link href="/service/adu/north-bethesda-md">
                  ADU Construction in North Bethesda, MD
                </Link>
              </li>
              <li>
                <Link href="/service/home-additions">
                  Home Additions in North Bethesda, MD
                </Link>
              </li>
              <li>
                <Link href="/service/design-build">
                  Design-Build Contractor in North Bethesda, MD
                </Link>
              </li>
            </ul>
          </div>
          <div className="cta-banner">
            <h2>
              Ready to Build Your North Bethesda Deck?
            </h2>
            <p>
              We&apos;re right here at 11810 Grand Park Ave, Suite 500. Call us at
              <strong>
                +1 240-730-1292
              </strong>
              or schedule your free in-home consultation. We&apos;ll assess your split-level elevation, design the deck and under-deck system that maximizes your outdoor space, and manage the MoCo permit from start to finish.
            </p>
            <Link href="/contact-us" className="cta-btn">
              Get Free Deck Estimate in North Bethesda &rarr;
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
