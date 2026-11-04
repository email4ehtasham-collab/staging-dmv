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
        "description": "Licensed deck builder serving Laurel, MD. Custom deck construction across all three Laurel jurisdictions — City of Laurel, Montgomery County DPS (West Laurel/Montpelier), and Prince George's County DPS (Laurel Lakes/Russett) — with permit expertise for all three authorities and deck designs for Laurel's diverse housing stock.",
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
            "name": "Laurel",
            "sameAs": "https://en.wikipedia.org/wiki/Laurel,_Maryland"
          },
          {
            "@type": "City",
            "name": "Beltsville"
          },
          {
            "@type": "City",
            "name": "College Park"
          },
          {
            "@type": "City",
            "name": "Greenbelt"
          },
          {
            "@type": "City",
            "name": "Rockville"
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
        "@id": "https://www.dmv-gc.com/service/decks/laurel-md#service",
        "serviceType": "Deck Building",
        "name": "Deck Building in Laurel, MD",
        "alternateName": [
          "Custom Deck Construction",
          "Composite Deck",
          "Split-Level Deck",
          "Townhome Deck",
          "MARC Commuter Deck"
        ],
        "provider": {
          "@id": "https://www.dmv-gc.com/#business"
        },
        "areaServed": {
          "@type": "City",
          "name": "Laurel",
          "sameAs": "https://en.wikipedia.org/wiki/Laurel,_Maryland"
        },
        "description": "Custom deck building in Laurel, MD. Composite rear decks, elevated split-level decks, townhome patio decks, and multi-level outdoor living builds across all Laurel neighborhoods — City of Laurel, West Laurel, Montpelier, Laurel Lakes, and Russett — with permit management for all three governing authorities.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "16000",
            "maxPrice": "85000",
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
            "name": "Laurel, MD",
            "item": "https://www.dmv-gc.com/service/decks/laurel-md"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does it cost to build a deck in Laurel, MD?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Deck construction in Laurel, MD typically costs between $16,000 and $85,000 depending on neighborhood, home type, size, and material. A compact townhome patio deck runs $16,000–$28,000. A pressure-treated rear deck for a Laurel colonial or split-level costs $20,000–$36,000. A composite rear deck runs $28,000–$52,000. A multi-level deck with pergola and features costs $45,000–$85,000. Permit costs vary by jurisdiction — City of Laurel, Montgomery County, or Prince George's County — and are included in DMV-GC Group's detailed project proposals. Free in-home consultations available for all Laurel neighborhoods."
            }
          },
          {
            "@type": "Question",
            "name": "How many permit jurisdictions does Laurel, MD have for deck building?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Laurel, MD has three distinct permit jurisdictions for deck construction — more than any single-city community in the DMV-GC Group service area. Properties within the City of Laurel's incorporated limits file deck permits with the City at 8103 Sandy Spring Road. Properties in West Laurel, Montpelier, and other western Laurel areas outside the city use Montgomery County DPS. Properties in Laurel Lakes, Russett, and other eastern Laurel areas use Prince George's County DPS. Mailing address alone does not determine jurisdiction — parcel boundary data does. DMV-GC Group verifies the correct permit authority for every Laurel address before any application is filed."
            }
          },
          {
            "@type": "Question",
            "name": "Does DMV-GC Group handle all three Laurel permit jurisdictions?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. DMV-GC Group handles deck permit applications with the City of Laurel (8103 Sandy Spring Road), Montgomery County DPS (for West Laurel and Montpelier), and Prince George's County DPS (for Laurel Lakes and Russett). Each authority has its own application format, plan review timeline, and inspection schedule. Our permit team manages all correspondence with whichever authority governs your specific Laurel address."
            }
          },
          {
            "@type": "Question",
            "name": "What deck type works best for Laurel's colonial and split-level homes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Laurel's 1960s–80s colonials and split-levels in neighborhoods like Laurel Lakes, Montpelier, and Old Laurel have rear elevations typically 2–5 feet above grade — suitable for a standard elevated rear deck off the main living or dining room. Composite decking is the most popular choice in Laurel's market — 25–30 year lifespan, low maintenance, and good value at Laurel's mid-range price points. An elevated composite rear deck of 250–360 sq ft is the dominant project type across Laurel's single-family neighborhoods."
            }
          },
          {
            "@type": "Question",
            "name": "Is DMV-GC Group licensed for deck building in Laurel, MD?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Laurel across all three jurisdictions. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every Laurel deck project."
            }
          }
        ]
      }
    ]
  };

const faqData = [
  { eventKey: "0", question: "How much does it cost to build a deck in Laurel, MD?", answer: "Deck construction in Laurel typically costs $16,000–$85,000 depending on neighborhood, home type, size, and scope. A compact Russett townhome deck runs $16,000–$32,000. A pressure-treated colonial rear deck costs $20,000–$36,000. A composite rear deck runs $26,000–$52,000. An elevated split-level deck in Montpelier costs $30,000–$58,000. Adding an under-deck drainage system brings that to $40,000–$68,000. A multi-level deck with pergola and outdoor kitchen runs $48,000–$85,000. All permit fees — City, MoCo, or PG County — are included in DMV-GC Group's project proposals. Free in-home consultations from our North Bethesda office." },
  { eventKey: "1", question: "Which permit authority governs my Laurel deck project?", answer: "It depends on your specific parcel. Properties within the incorporated City of Laurel use City DPS at 8103 Sandy Spring Road. Properties in West Laurel and Montpelier use Montgomery County DPS. Properties in Laurel Lakes, Russett, and South Laurel use Prince George's County DPS. Your mailing address alone does not determine jurisdiction — parcel boundary data does. DMV-GC Group verifies the correct authority for every Laurel address before any application is filed, at no cost, as the first step of every Laurel deck project." },
  { eventKey: "2", question: "Does my Russett or Laurel Lakes HOA need to approve a deck before permits are filed?", answer: "Many Laurel planned communities — including sections of Russett and Laurel Lakes — have active HOAs with exterior modification review requirements. HOA approval is typically required before the building permit is filed with Prince George's County DPS. DMV-GC Group confirms HOA requirements during the consultation, prepares all required HOA documentation, and manages the HOA submission process in-house. Permit application is prepared in parallel with HOA submission to minimize total pre-construction timeline." },
  { eventKey: "3", question: "What is the best deck material for Laurel homes?", answer: "Composite decking — Trex, TimberTech, or Azek — is the most popular and practical choice for Laurel's mid-range single-family and townhome market. At 25–30 years of low-maintenance lifespan, composite outperforms pressure-treated in longevity and appearance at a cost premium that is well-justified in Laurel's resale-active market. Pressure-treated is a practical choice for cost-conscious projects on homes where the resale timeline is longer. Ipe hardwood is available for premium Montpelier and Old Laurel properties where the investment level warrants it. DMV-GC Group presents all three options with honest cost-benefit context during the consultation." },
  { eventKey: "4", question: "Is DMV-GC Group licensed for deck building in Laurel, MD?", answer: "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Laurel across all three jurisdictions (City, Montgomery County, and Prince George's County). We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every Laurel deck project." }
];

export default function DecksLaurelMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => { setActiveMenuItem("service"); }, []);
  return (
    <main>
      <div className="city-service-detail-page decks-laurel-md">
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
            Laurel, MD
          </nav>
          <div className="hero">
            <div className="hero-location-tag">
              📍 Serving Laurel, MD
            </div>
            <h1>
              Deck Building in Laurel, MD — Custom Deck Contractor for All Three Laurel Jurisdictions
            </h1>
            <div className="hero-meta">
              <span className="badge">
                ⭐ 4.9 Rating · 97+ Reviews
              </span>
              <span className="badge">
                ✓ MHIC Licensed &amp; Insured
              </span>
              <span className="badge">
                ✓ City · MoCo · PG County Permits
              </span>
              <span className="badge">
                ✓ All Laurel Neighborhoods Served
              </span>
              <span className="badge dark">
                📞 +1 240-730-1292
              </span>
            </div>
          </div>
          <div className="juris-banner">
            <div className="icon">
              🏛️
            </div>
            <div>
              <h3>
                Laurel Has Three Permit Jurisdictions — More Than Any Single-City Community We Serve — and Your Mailing Address Alone Does Not Tell You Which One Governs Your Deck
              </h3>
              <p>
                Laurel, Maryland is the most jurisdictionally complex city in the DMV-GC Group deck campaign. The City of Laurel is incorporated and issues its own permits at 8103 Sandy Spring Road. West Laurel and Montpelier — outside the city limits to the west — use Montgomery County DPS. Laurel Lakes, Russett, and other eastern Laurel communities outside the city use Prince George&apos;s County DPS. Three different governments, three different permit offices, three different plan review processes, three different inspection schedules — all within one postal code. Contractors who assume all Laurel addresses use one authority routinely file with the wrong office, produce invalid permits, and create compliance problems that follow the homeowner at resale. DMV-GC Group verifies the correct jurisdiction for every Laurel address using parcel boundary data before any permit application is prepared.
              </p>
            </div>
          </div>
          <div className="intro-box">
            Looking for a trusted
            <strong>
              deck contractor in Laurel, MD
            </strong>
            ? Laurel&apos;s housing is as diverse as its jurisdictions — 1960s–80s colonials and split-levels in Old Laurel and Laurel Lakes, 1980s–90s colonials in Montpelier and West Laurel, newer planned community townhomes in Russett, and a range of housing styles throughout the city&apos;s neighborhoods along the Patuxent River corridor. Laurel is a MARC commuter community — both Penn and Camden Lines serve the area — and its strong employment base via Fort Meade, NSA, and the US-1/MD-32 corridor makes deck investment here consistently return-positive. DMV-GC Group manages the complete Laurel deck project in-house — design, correct permit authority identification, permit filing, construction, and inspection — across every Laurel neighborhood, under one contract.
          </div>
          <div className="trust-bar">
            <div className="trust-item">
              <div className="icon">
                🏛️
              </div>
              <strong>
                All 3 Jurisdictions
              </strong>
              <span>
                City · MoCo DPS · PG County DPS
              </span>
            </div>
            <div className="trust-item">
              <div className="icon">
                📋
              </div>
              <strong>
                Permit Expertise
              </strong>
              <span>
                All three authorities handled in-house
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
            Deck Building Services in Laurel, MD
          </h2>
          <div className="service-grid">
            <div className="service-item">
              Rear Yard Deck Design &amp; Build (All Neighborhoods)
            </div>
            <div className="service-item">
              Composite Deck (Trex / TimberTech / Azek)
            </div>
            <div className="service-item">
              Pressure-Treated &amp; Cedar Deck
            </div>
            <div className="service-item">
              Elevated Split-Level Deck
            </div>
            <div className="service-item">
              Townhome Compact Rear Deck
            </div>
            <div className="service-item">
              Multi-Level Deck with Stairs
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
              City of Laurel Permit Filing
            </div>
            <div className="service-item">
              Montgomery County &amp; PG County Permit Filing
            </div>
          </div>
          <div className="author-box">
            <div className="author-avatar">
              🏠
            </div>
            <div className="author-info">
              <h4>
                About DMV-GC Group — Laurel&apos;s Licensed Deck Contractor Across All Three Jurisdictions
              </h4>
              <p>
                DMV-GC Group has completed deck builds, ADU conversions, kitchen remodels, and bathroom renovations throughout Laurel&apos;s neighborhoods — Old Laurel, Laurel Lakes, Montpelier, West Laurel, and Russett. We have filed deck permits with the City of Laurel, Montgomery County DPS, and Prince George&apos;s County DPS — and understand the timeline and documentation differences between all three. We hold a Maryland MHIC license and back every Laurel deck project with a 1-year workmanship warranty.
              </p>
              <div className="author-creds">
                <span className="cred">
                  MHIC Licensed
                </span>
                <span className="cred">
                  City of Laurel Permits
                </span>
                <span className="cred">
                  MoCo DPS Permits
                </span>
                <span className="cred">
                  PG County DPS Permits
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
            Laurel&apos;s Three Permit Jurisdictions — Which One Governs Your Deck
          </h2>
          <p>
            Understanding which permit authority governs your specific Laurel address is the first and most consequential step in any Laurel deck project. Here is what each jurisdiction covers:
          </p>
          <div className="juris-grid">
            <div className="juris-card city">
              <h3>
                🏛️ City of Laurel
              </h3>
              <div className="permit-tag">
                City DPS — 8103 Sandy Spring Rd
              </div>
              <ul>
                <li>
                  Incorporated city with its own permit authority
                </li>
                <li>
                  Address: 8103 Sandy Spring Road, Laurel, MD 20707
                </li>
                <li>
                  Old Laurel / historic core: City permits
                </li>
                <li>
                  Laurel town center area: City permits
                </li>
                <li>
                  Many neighborhoods along US-1 corridor: City permits
                </li>
                <li>
                  City has own plan review, inspection schedule
                </li>
                <li>
                  Verify by parcel — city boundary is not obvious from address
                </li>
              </ul>
            </div>
            <div className="juris-card moco">
              <h3>
                📋 Montgomery County
              </h3>
              <div className="permit-tag">
                MoCo DPS — West Laurel
              </div>
              <ul>
                <li>
                  Unincorporated MoCo west of the city
                </li>
                <li>
                  West Laurel: Montgomery County DPS
                </li>
                <li>
                  Montpelier: Montgomery County DPS
                </li>
                <li>
                  Hammond area (west): Montgomery County DPS
                </li>
                <li>
                  Same MoCo DPS process as Rockville, North Bethesda
                </li>
                <li>
                  BGE utility territory (west of city)
                </li>
                <li>
                  COO required before occupancy
                </li>
              </ul>
            </div>
            <div className="juris-card pgco">
              <h3>
                📋 Prince George&apos;s County
              </h3>
              <div className="permit-tag">
                PG County DPS — East Laurel
              </div>
              <ul>
                <li>
                  Unincorporated PG County east of the city
                </li>
                <li>
                  Laurel Lakes: Prince George&apos;s County DPS
                </li>
                <li>
                  Russett: Prince George&apos;s County DPS
                </li>
                <li>
                  South Laurel neighborhoods: PG County DPS
                </li>
                <li>
                  Pepco utility territory (east of city)
                </li>
                <li>
                  PG County permit process differs from MoCo
                </li>
                <li>
                  COO required before occupancy
                </li>
              </ul>
            </div>
          </div>
          <div className="warning">
            ⚠️
            <strong>
              Laurel Jurisdiction Warning:
            </strong>
            Laurel is the only community in the DMV-GC Group campaign area where a single city&apos;s postal addresses span three different permit authorities across two different counties. Contractors who routinely work in Montgomery County or Prince George&apos;s County individually may not know that Laurel requires them to work with the other county — or with the City — depending on the specific parcel. DMV-GC Group uses parcel boundary data to confirm jurisdiction for every Laurel address before any permit work begins.
          </div>
          <h2>
            Types of Decks We Build in Laurel, MD
          </h2>
          <p>
            Laurel&apos;s housing spans multiple decades and styles — from 1960s colonials to 1990s planned community townhomes — each with different deck opportunities:
          </p>
          <div className="deck-type-grid">
            <div className="deck-type-card">
              <span className="deck-tag">
                Old Laurel &amp; Laurel Lakes — Most Common
              </span>
              <h3>
                Elevated Colonial Rear Deck
              </h3>
              <p>
                Laurel&apos;s 1960s–80s colonials in Old Laurel, Laurel Lakes, and along the US-1 corridor have rear elevations typically 2–5 feet above grade — accessed from a sliding door or French door at the main living level. A composite rear deck of 240–360 sq ft with wood or cable railing and stairs to the yard is the dominant project type across Laurel&apos;s single-family neighborhoods. Permit filed with City of Laurel (for city-limit properties), MoCo DPS (for Montpelier and West Laurel), or PG County DPS (for Laurel Lakes and South Laurel) — confirmed before design begins.
              </p>
              <div className="deck-cost">
                Typical Cost: $26,000 – $52,000
              </div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">
                Montpelier &amp; West Laurel
              </span>
              <h3>
                Split-Level Elevated Deck
              </h3>
              <p>
                Montpelier and West Laurel&apos;s 1970s–80s split-levels have main living floors 4–6 feet above rear grade — same elevated deck opportunity as Wheaton, Silver Spring, and North Bethesda. Composite elevated deck with stairs, optional under-deck drainage system for the 4–6 ft clearance below. Montgomery County DPS permits for West Laurel and Montpelier — same MoCo process DMV-GC Group manages for all our MoCo communities. BGE utility territory for any gas line work.
              </p>
              <div className="deck-cost">
                Typical Cost: $30,000 – $58,000
              </div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">
                Russett &amp; Planned Communities
              </span>
              <h3>
                Townhome Compact Rear Deck
              </h3>
              <p>
                Russett and other Laurel planned community townhomes have compact rear yards — typically 15–25 feet of usable depth — and HOA oversight in many cases. A compact composite rear deck of 140–220 sq ft maximizes the usable outdoor space within the lot&apos;s constraints and HOA guidelines. Prince George&apos;s County DPS permits for Russett and South Laurel planned communities. HOA coordination included where applicable. DMV-GC Group assesses rear yard dimensions and HOA requirements during the consultation before any design begins.
              </p>
              <div className="deck-cost">
                Typical Cost: $16,000 – $32,000
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
                Laurel&apos;s larger-lot single-family homes — particularly in Montpelier, West Laurel, and some Old Laurel properties near the Patuxent River corridor — support multi-level deck builds with pergola shade structure, outdoor kitchen integration, and cable railing. These are Laurel&apos;s most ambitious deck projects, on par with what we build in Silver Spring and Wheaton. Permit authority confirmed before design; HOA coordination included where applicable.
              </p>
              <div className="deck-cost">
                Typical Cost: $48,000 – $85,000
              </div>
            </div>
          </div>
          <h2>
            Laurel, MD Neighborhoods We Serve for Deck Building
          </h2>
          <div className="neighborhood-grid">
            <div className="neighborhood-card">
              <h3>
                Old Laurel / Historic Core
              </h3>
              <div className="juris-badge city">
                City of Laurel Permits
              </div>
              <p>
                Laurel&apos;s oldest established neighborhoods along Main Street and the US-1 corridor. Mix of early-20th-century homes, 1950s–60s colonials, and postwar bungalows. City of Laurel DPS permits. Good rear yard sizes relative to lot footprint. MARC Penn Line — Laurel station — provides direct commuter access to DC and Baltimore. Active renovation market.
              </p>
            </div>
            <div className="neighborhood-card">
              <h3>
                Montpelier
              </h3>
              <div className="juris-badge moco">
                Montgomery County Permits
              </div>
              <p>
                1970s–80s planned community west of the city limits with colonials and split-levels on tree-lined streets. Montgomery County DPS permits — same MoCo process as Rockville and North Bethesda. Some Montpelier sections have HOA oversight. Larger lot sizes than city neighborhoods — supports mid-to-large deck footprints. BGE utility territory.
              </p>
            </div>
            <div className="neighborhood-card">
              <h3>
                West Laurel
              </h3>
              <div className="juris-badge moco">
                Montgomery County Permits
              </div>
              <p>
                Established residential neighborhoods west of the city boundary, bordering Burtonsville and the I-95/MD-198 corridor. Montgomery County DPS. Mix of colonials and split-levels from the 1970s–80s. Some of Laurel&apos;s larger rear yards — good deck footprint potential. Fort Meade/NSA commuters via MD-32 west. BGE territory.
              </p>
            </div>
            <div className="neighborhood-card">
              <h3>
                Laurel Lakes
              </h3>
              <div className="juris-badge pgco">
                Prince George&apos;s County Permits
              </div>
              <p>
                1970s–80s planned community east of the city limits with lake-adjacent homes and a mix of colonials and townhomes. Prince George&apos;s County DPS permits. HOA review required for exterior modifications in many sections. Rear yard deck investment well-supported by Laurel Lakes&apos; established property values. Pepco utility territory.
              </p>
            </div>
            <div className="neighborhood-card">
              <h3>
                Russett
              </h3>
              <div className="juris-badge pgco">
                Prince George&apos;s County Permits
              </div>
              <p>
                1990s planned community with townhomes and smaller single-family homes in south Laurel. Prince George&apos;s County DPS. Active HOA with exterior modification review. Compact rear yards — townhome deck design optimized for usable footprint within constraints. MARC Camden Line at Laurel station nearby. Pepco territory.
              </p>
            </div>
            <div className="neighborhood-card">
              <h3>
                South Laurel / Laurel Park
              </h3>
              <div className="juris-badge pgco">
                Prince George&apos;s County Permits
              </div>
              <p>
                Established Prince George&apos;s County neighborhoods in the south Laurel area. Mix of 1960s–80s single-family colonials and ranches. PG County DPS permits. Good deck investment opportunity — established neighborhood with strong resale activity and Fort Meade employment corridor proximity. Pepco utility territory.
              </p>
            </div>
          </div>
          <h2>
            Popular Deck Features for Laurel Homes
          </h2>
          <div className="feature-grid">
            <div className="feature-box">
              <div className="icon">
                ☂️
              </div>
              <strong>
                Pergola &amp; Shade
              </strong>
              <span>
                Essential for Laurel&apos;s hot summers — wood or aluminum pergola over the main deck area with string light support
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
                Built-in grill and counter — in-house licensed gas and electrical, one contract. BGE gas in West Laurel/Montpelier, Pepco electric in Russett/Laurel Lakes
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
                Horizontal cable railing for rear yard sightlines — popular on Montpelier and West Laurel split-levels with elevated deck views
              </span>
            </div>
            <div className="feature-box">
              <div className="icon">
                🌧️
              </div>
              <strong>
                Under-Deck Drainage
              </strong>
              <span>
                For Montpelier and West Laurel split-level elevated decks — dry covered patio below, most popular add-on for 4–6 ft clearance homes
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
                Post cap, step, and rail LED lighting — extends Laurel deck use through spring and fall evenings and the long summer outdoor season
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
                Integrated bench seating along the perimeter — practical for Laurel&apos;s active family neighborhoods and compact townhome decks where furniture space is limited
              </span>
            </div>
          </div>
          <h2>
            Our Deck Building Process in Laurel
          </h2>
          <div className="steps">
            <div className="step">
              <div className="step-num">
                1
              </div>
              <div className="step-content">
                <h3>
                  Free In-Home Consultation &amp; Jurisdiction Verification
                </h3>
                <p>
                  We visit your Laurel home, assess the home type and rear yard, discuss your vision and budget — and verify using parcel boundary data whether your specific address falls under City of Laurel, Montgomery County DPS, or Prince George&apos;s County DPS jurisdiction. We also confirm any applicable HOA requirements for Montpelier, Laurel Lakes, Russett, and other communities with HOA oversight. No cost, no obligation.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                2
              </div>
              <div className="step-content">
                <h3>
                  Custom Deck Design — Sized for Your Home &amp; Lot
                </h3>
                <p>
                  Full deck layout, structural plan, elevation drawings, railing style, material specification, and feature plan — designed for your specific Laurel home type and rear yard dimensions. For split-level homes, under-deck drainage system integration designed from the first drawing where included. Full structural drawings prepared for the applicable permit authority.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                3
              </div>
              <div className="step-content">
                <h3>
                  HOA Coordination (Where Required)
                </h3>
                <p>
                  For Montpelier, Laurel Lakes, Russett, and other Laurel communities with active HOA oversight, DMV-GC Group prepares and submits all required HOA documentation — site plan, elevation drawings, material specifications — and manages all HOA correspondence before the permit application is filed. Permit application is prepared in parallel with HOA submission to minimize total pre-construction timeline.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                4
              </div>
              <div className="step-content">
                <h3>
                  Permit Filing — Correct Authority
                </h3>
                <p>
                  We file the building permit with the correct authority: City of Laurel at 8103 Sandy Spring Road, Montgomery County DPS, or Prince George&apos;s County DPS — whichever was confirmed in Step 1. Our permit team manages all plan review correspondence and inspection scheduling with whichever authority governs your property. Three different permit offices require three different application approaches — we handle all of them in-house.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                5
              </div>
              <div className="step-content">
                <h3>
                  Foundation Assessment &amp; Footings
                </h3>
                <p>
                  Foundation wall type assessed for correct ledger attachment specification. Post holes drilled to frost depth, footings poured, required footing inspection managed with the applicable permit authority. For split-level elevated decks, elevation above grade confirmed and post heights specified accordingly.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                6
              </div>
              <div className="step-content">
                <h3>
                  Framing, Decking, Features &amp; Lighting
                </h3>
                <p>
                  Framing installed per structural drawings, then composite or pressure-treated decking, railing, stairway, under-deck drainage where included, pergola where included, outdoor kitchen rough-in and finish where included, and deck lighting — managed by a project manager throughout. Framing inspection managed with applicable permit authority.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                7
              </div>
              <div className="step-content">
                <h3>
                  Final Inspection, Walkthrough &amp; 1-Year Warranty
                </h3>
                <p>
                  Final inspection managed with City of Laurel, MoCo DPS, or PG County DPS depending on jurisdiction. Thorough walkthrough, every punch list item addressed, and 1-year workmanship warranty activated.
                </p>
              </div>
            </div>
          </div>
          <h2>
            Deck Building Cost in Laurel, MD
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
                  Notes for Laurel
                </th>
              </tr>
              <tr>
                <td>
                  Compact Townhome Rear Deck — Russett / Planned Communities (140–220 sq ft)
                </td>
                <td>
                  $16,000 – $32,000
                </td>
                <td>
                  PG County DPS permits. HOA coordination included. Compact footprint, efficient layout. Pepco electric territory.
                </td>
              </tr>
              <tr>
                <td>
                  PT Rear Deck — Old Laurel / Laurel Lakes Colonial (240–320 sq ft)
                </td>
                <td>
                  $20,000 – $36,000
                </td>
                <td>
                  City or PG County permit confirmed before filing. Elevated 2–4 ft. Standard PT with wood railing and stairs.
                </td>
              </tr>
              <tr>
                <td>
                  Composite Rear Deck — Colonial / Split-Level (260–360 sq ft)
                </td>
                <td>
                  $26,000 – $52,000
                </td>
                <td>
                  Trex or TimberTech. Cable or wood railing. Permit per confirmed jurisdiction — City, MoCo, or PG County.
                </td>
              </tr>
              <tr>
                <td>
                  Elevated Split-Level Deck — Montpelier / West Laurel (280–380 sq ft)
                </td>
                <td>
                  $30,000 – $58,000
                </td>
                <td>
                  MoCo DPS permits. BGE gas territory. 4–6 ft elevation. Cable railing. Under-deck drainage option.
                </td>
              </tr>
              <tr>
                <td>
                  Elevated Composite Deck + Under-Deck Drainage System
                </td>
                <td>
                  $40,000 – $68,000
                </td>
                <td>
                  Split-level elevated deck with dry covered patio below. Most popular add-on for Montpelier and West Laurel split-levels.
                </td>
              </tr>
              <tr>
                <td>
                  Multi-Level Deck with Pergola &amp; Outdoor Kitchen
                </td>
                <td>
                  $48,000 – $85,000
                </td>
                <td>
                  Montpelier, West Laurel, or Old Laurel larger-lot properties. Two levels, shade structure, built-in kitchen. In-house licensed trades.
                </td>
              </tr>
              <tr>
                <td>
                  Deck Replacement (Remove &amp; Rebuild)
                </td>
                <td>
                  $24,000 – $55,000
                </td>
                <td>
                  Permit required per applicable authority. Jurisdiction re-confirmed before filing. Ledger assessment included. Upgrade to composite common.
                </td>
              </tr>
            </tbody>
          </table>
          <div className="tip">
            💡
            <strong>
              Laurel Deck Value:
            </strong>
            A composite rear deck on a Laurel single-family home — correctly permitted through the applicable authority — typically adds $26,000–$46,000 to appraised value. Laurel&apos;s dual MARC line access (Penn Line at Laurel station, Camden Line at Muirkirk), Fort Meade and NSA employment proximity via MD-32, and I-95/US-1 corridor convenience create steady demand from buyers who work across the DC–Baltimore corridor. Deck investment in Laurel&apos;s active resale market consistently returns well — particularly for homes that appeal to Fort Meade and NSA professionals who commute via MD-32 and value private outdoor space.
          </div>
          <div className="cta-banner">
            <h2>
              Get a Free Deck Consultation in Laurel
            </h2>
            <p>
              We&apos;ll visit your Laurel home, verify your jurisdiction — City, MoCo, or PG County — coordinate any HOA requirements, and build the deck your home deserves. No cost, no obligation.
            </p>
            <Link href="/contact-us" className="cta-btn">
              Schedule Free Consultation
            </Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">
              📞 Call +1 240-730-1292
            </a>
          </div>
          <h2>
            What Laurel Homeowners Say About DMV-GC Group
          </h2>
          <div className="review-grid">
            <div className="review-card">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-text">
                &quot;Our Montpelier split-level has 5 feet of clearance under the rear deck area. DMV-GC Group designed the composite deck with the under-deck drainage system built in from the start — we use the covered space below every summer. Montgomery County permit was handled completely. They confirmed we were MoCo, not City of Laurel, before anything else.&quot;
              </p>
              <div className="review-author">
                — Verified Homeowner ·
                <span className="review-location">
                  Montpelier, Laurel MD
                </span>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-text">
                &quot;We&apos;re in Laurel Lakes — Prince George&apos;s County, not Montgomery County. Every contractor we called assumed MoCo. DMV-GC Group checked the parcel data immediately and confirmed PG County DPS. Filed the correct permit, passed all PG County inspections on first visit. The composite deck with pergola is exactly what we wanted.&quot;
              </p>
              <div className="review-author">
                — Verified Homeowner ·
                <span className="review-location">
                  Laurel Lakes, Laurel MD
                </span>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-text">
                &quot;Our Russett townhome has a small rear yard and an HOA with exterior review. DMV-GC Group coordinated the HOA submission, got it approved, then filed with Prince George&apos;s County DPS. The compact composite deck they built uses every inch of the footprint smartly — built-in bench seating on both sides. Passed PG County final inspection without issues.&quot;
              </p>
              <div className="review-author">
                — Verified Homeowner ·
                <span className="review-location">
                  Russett, Laurel MD
                </span>
              </div>
            </div>
            <div className="review-card">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-text">
                &quot;Our Old Laurel colonial is within City of Laurel limits — City permit, not county. DMV-GC Group filed with the City at Sandy Spring Road and managed the entire inspection process. Multi-level composite deck with an outdoor kitchen and pergola. We entertain out there every weekend from April to October. The permit process was invisible to us.&quot;
              </p>
              <div className="review-author">
                — Verified Homeowner ·
                <span className="review-location">
                  Old Laurel, MD
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
              Laurel homeowners trust DMV-GC Group for deck projects that navigate the three-jurisdiction permit complexity correctly — City of Laurel, Montgomery County, or Prince George&apos;s County confirmed before any application is filed — and deliver quality construction across every Laurel neighborhood under one contract.
            </p>
          </div>
          <h2>
            Serving All Laurel, MD Neighborhoods for Deck Building
          </h2>
          <div className="areas-grid">
            <span className="area-pill">
              Old Laurel
            </span>
            <span className="area-pill">
              Montpelier
            </span>
            <span className="area-pill">
              West Laurel
            </span>
            <span className="area-pill">
              Laurel Lakes
            </span>
            <span className="area-pill">
              Russett
            </span>
            <span className="area-pill">
              South Laurel
            </span>
            <span className="area-pill">
              Laurel Park
            </span>
            <span className="area-pill">
              Hammond
            </span>
            <span className="area-pill">
              Beltsville
            </span>
            <span className="area-pill">
              College Park
            </span>
          </div>
          <div className="nearby-box">
            <h3>
              Also serving Rockville, MD — Montgomery County&apos;s major employment hub to the west
            </h3>
            <p>
              Montpelier and West Laurel homeowners who work along the I-270 corridor toward Rockville will find DMV-GC Group&apos;s Rockville deck expertise and the same Montgomery County DPS permit management on that side of the county.
              <Link href="/service/decks/rockville-md">
                View our Rockville deck page &rarr;
              </Link>
            </p>
          </div>
          <h2>
            Frequently Asked Questions — Deck Building in Laurel, MD
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
              Explore Our Other Services in Laurel
            </h2>
            <ul>
              <li>
                <Link href="/service/kitchen-remodeling">
                  Kitchen Remodeling in Laurel, MD
                </Link>
              </li>
              <li>
                <Link href="/service/bathroom-remodeling/laurel-md">
                  Bathroom Remodeling in Laurel, MD
                </Link>
              </li>
              <li>
                <Link href="/service/basement-remodeling/laurel-md">
                  Basement Remodeling in Laurel, MD
                </Link>
              </li>
              <li>
                <Link href="/service/adu/laurel-md">
                  ADU Construction in Laurel, MD
                </Link>
              </li>
              <li>
                <Link href="/service/home-additions">
                  Home Additions in Laurel, MD
                </Link>
              </li>
              <li>
                <Link href="/service/design-build">
                  Design-Build Contractor in Laurel, MD
                </Link>
              </li>
            </ul>
          </div>
          <div className="cta-banner">
            <h2>
              Ready to Build Your Laurel Deck?
            </h2>
            <p>
              Call us at
              <strong>
                +1 240-730-1292
              </strong>
              or schedule your free in-home consultation. We&apos;ll identify your jurisdiction — City, MoCo, or PG County — coordinate any HOA requirements, and manage the complete permit and construction process from first drawing to final inspection.
            </p>
            <Link href="/contact-us" className="cta-btn">
              Get Free Deck Estimate in Laurel &rarr;
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
