'use client';

import Link from "next/link";
import { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { useMyContext } from "@/hooks/context";

import "../city-service-style.scss";
import "./style.scss";

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
      "description": "Licensed design-build general contractor headquartered in North Bethesda, MD at 11810 Grand Park Ave, Suite 500. Specializing in basement remodeling across North Bethesda's diverse housing stock — established single-family homes, townhomes in Pike District and White Flint, and newer construction throughout the I-270 corridor.",
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
        { "@type": "City", "name": "North Bethesda", "sameAs": "https://en.wikipedia.org/wiki/North_Bethesda,_Maryland" },
        { "@type": "City", "name": "Bethesda" },
        { "@type": "City", "name": "Rockville" },
        { "@type": "City", "name": "Garrett Park" },
        { "@type": "City", "name": "Potomac" }
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "MHIC License", "credentialCategory": "Maryland Home Improvement Contractor License" },
        { "@type": "EducationalOccupationalCredential", "name": "DLCP License", "credentialCategory": "Washington DC Department of Licensing and Consumer Protection" }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "97", "bestRating": "5" },
      "priceRange": "$$$"
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/basement-remodeling/north-bethesda-md#service",
      "serviceType": "Basement Remodeling",
      "name": "Basement Remodeling in North Bethesda, MD",
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "North Bethesda", "sameAs": "https://en.wikipedia.org/wiki/North_Bethesda,_Maryland" },
      "description": "Full-service basement remodeling in North Bethesda, MD. Recreation rooms, home offices, guest suites, ADU conversions, and full basement finishing for North Bethesda's established single-family homes, Pike District townhomes, and newer construction — managed by the area's local licensed design-build contractor.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "22000", "maxPrice": "130000", "priceCurrency": "USD" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Basement Remodeling", "item": "https://www.dmv-gc.com/service/basement-remodeling" },
        { "@type": "ListItem", "position": 4, "name": "North Bethesda, MD", "item": "https://www.dmv-gc.com/service/basement-remodeling/north-bethesda-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does basement remodeling cost in North Bethesda, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Basement remodeling in North Bethesda, MD typically costs between $22,000 and $130,000 depending on scope, home type, and finish level. A townhome basement finishing (Pike District, White Flint) runs $22,000–$42,000. A full single-family basement finishing costs $32,000–$65,000. A mid-range renovation with bathroom and home office runs $45,000–$80,000. A full ADU conversion with egress windows, separate entrance, kitchen, and bathroom typically costs $68,000–$115,000. North Bethesda's diverse housing stock means renovation scope and cost vary significantly by home type and neighborhood. DMV-GC Group provides free in-home consultations with detailed estimates."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group based in North Bethesda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group is headquartered at 11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852 — in the heart of the Pike District redevelopment area. We are North Bethesda's local licensed design-build contractor, serving the community from an office that is minutes from every North Bethesda neighborhood we serve. This means faster response times, direct familiarity with local neighborhoods and housing stock, and a team that is genuinely invested in the community."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group handle permits for basement remodeling in North Bethesda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. North Bethesda is an unincorporated community in Montgomery County — all basement remodeling permits are processed through Montgomery County's Department of Permitting Services (DPS). DMV-GC Group's in-house permit team handles all required building, electrical, and plumbing permits and manages all county correspondence and inspection scheduling. For ADU projects, we also manage the Certificate of Occupancy process."
          }
        },
        {
          "@type": "Question",
          "name": "Can DMV-GC Group convert a North Bethesda basement into a legal ADU?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. ADU basement conversions are popular in North Bethesda given the area's White Flint Metro access and strong rental demand. A legal basement ADU in Montgomery County requires egress windows in sleeping areas, a separate entrance, a full kitchen or kitchenette, a full bathroom, fire-rated separation, and a Certificate of Occupancy. DMV-GC Group designs, builds, and permits complete ADU conversions in North Bethesda — managing all Montgomery County permits and the COO process in-house."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group finish townhome basements in North Bethesda's Pike District?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Townhome basement finishing in Pike District and White Flint is one of our most common North Bethesda project types. Townhome lower levels in these communities typically measure 400–650 sq ft — smart layout design maximizes the usable space for a home office, recreation room, or guest suite with egress window and bathroom. Many Pike District townhomes also have HOA guidelines covering contractor access and work hours, which DMV-GC Group coordinates as a standard part of every applicable project."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for basement remodeling in North Bethesda, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home renovation work in North Bethesda and Montgomery County. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every basement remodeling project completed in North Bethesda."
          }
        }
      ]
    }
  ]
};

const stepsData = [
  {
    num: 1,
    title: "Free In-Home Consultation — From Your Neighborhood's Own Contractor",
    desc: "We visit your North Bethesda home — minutes from our Grand Park Avenue office — and assess your existing basement: ceiling heights, foundation type, moisture conditions, plumbing rough-ins, electrical panel, and ADU feasibility. For townhome projects, we also verify HOA requirements upfront. No cost, no obligation."
  },
  {
    num: 2,
    title: "HOA Documentation (If Applicable)",
    desc: "For Pike District, White Flint, and any other North Bethesda HOA community, we prepare and submit all required documentation — COI, contractor registration, scope description, work-hour scheduling — running concurrently with permit processing wherever possible."
  },
  {
    num: 3,
    title: "Moisture Assessment & Design Development",
    desc: "Written moisture findings and recommendations are provided before any design work begins. Our design team then develops a floor plan specific to your basement footprint and your goals — maximizing usable space, natural light, and finish quality within your budget."
  },
  {
    num: 4,
    title: "Montgomery County Permit Processing",
    desc: "We file all required Montgomery County DPS permits — building, electrical, plumbing — and for ADU projects, initiate the Certificate of Occupancy process. Our permit team manages all county correspondence and inspection scheduling from application through final sign-off."
  },
  {
    num: 5,
    title: "Construction — Framing Through Final Finishes",
    desc: "Our licensed in-house crews complete all framing, electrical, plumbing, HVAC, egress windows, drywall, flooring, cabinetry, bathroom, and all finish work — coordinated by a dedicated project manager and inspected at each required stage by Montgomery County."
  },
  {
    num: 6,
    title: "County Inspections, Final Walkthrough & 1-Year Warranty",
    desc: "We manage all required Montgomery County final inspections — including Certificate of Occupancy for ADU projects. After sign-off, we conduct a thorough walkthrough with you, address every punch list item, and activate your 1-year workmanship warranty."
  }
];

const faqData = [
  {
    eventKey: "0",
    question: "How much does basement remodeling cost in North Bethesda, MD?",
    answer: "Basement remodeling in North Bethesda typically costs $22,000–$115,000 depending on home type and scope. A Pike District townhome finishing runs $22,000–$42,000. A full single-family finishing costs $32,000–$65,000. A mid-range renovation with bathroom runs $45,000–$80,000. A full ADU conversion costs $68,000–$115,000. As North Bethesda&apos;s local contractor, DMV-GC Group provides free in-home consultations with itemized estimates based on the actual conditions of your specific home."
  },
  {
    eventKey: "1",
    question: "Is DMV-GC Group actually based in North Bethesda?",
    answer: "Yes. DMV-GC Group is headquartered at 11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852 — in the Pike District redevelopment area, steps from the White Flint Metro. We are not a contractor traveling from another county. We are North Bethesda&apos;s local licensed design-build team with direct familiarity with every neighborhood, every housing type, and every Montgomery County permit requirement specific to this community."
  },
  {
    eventKey: "2",
    question: "Does DMV-GC Group handle HOA coordination for Pike District townhomes?",
    answer: "Yes. DMV-GC Group handles all HOA coordination for Pike District, White Flint, and any other North Bethesda HOA community — including COI submission, contractor registration, work-hour compliance, and egress window notification where required. As the Pike District&apos;s local contractor, we have direct experience with these communities&apos; specific requirements. This is included in our standard service, not an add-on."
  },
  {
    eventKey: "3",
    question: "Can DMV-GC Group build a legal ADU in a North Bethesda basement?",
    answer: "Yes. ADU basement conversions are a growing project type in North Bethesda given the White Flint Metro access and rising property values. A legal Montgomery County ADU requires egress windows, separate entrance, kitchen or kitchenette, full bathroom, fire-rated separation, and a Certificate of Occupancy. DMV-GC Group manages the entire process — including the Montgomery County COO application and all required inspections."
  },
  {
    eventKey: "4",
    question: "Does DMV-GC Group handle permits for basement remodeling in North Bethesda?",
    answer: "Yes. North Bethesda is an unincorporated community in Montgomery County — all permits go through Montgomery County DPS. DMV-GC Group handles all required building, electrical, and plumbing permits, plus the Certificate of Occupancy application for ADU projects. Our permit team — based in North Bethesda — manages all county correspondence and inspections from application through final sign-off."
  },
  {
    eventKey: "5",
    question: "Is DMV-GC Group licensed for basement remodeling in North Bethesda, MD?",
    answer: "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home renovation work in North Bethesda and Montgomery County. We employ licensed plumbers and electricians in-house, are fully bonded, carry comprehensive general liability insurance and workers&apos; compensation coverage, and provide a 1-year workmanship warranty on every basement project. And as North Bethesda&apos;s local contractor, we stand behind our work in the community where we operate every day."
  }
];

export default function BasementNorthBethesdaMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => {
    setActiveMenuItem("service");
  }, []);

  return (
    <div className="city-service-detail-page basement-north-bethesda-md">
      <div className="container">

        {/* BREADCRUMB */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>&rsaquo;</span>
          <Link href="/services">Services</Link><span>&rsaquo;</span>
          <Link href="/service/basement-remodeling">Basement Remodeling</Link><span>&rsaquo;</span>
          North Bethesda, MD
        </nav>

        {/* HERO */}
        <div className="hero">
          <div className="hero-location-tag">📍 Serving North Bethesda, MD</div>
          <h1>Basement Remodeling Contractor in North Bethesda, MD</h1>
          <div className="hero-meta">
            <span className="badge hq">🏠 Our Headquarters &mdash; 11810 Grand Park Ave, Suite 500</span>
            <span className="badge">⭐ 4.9 Rating &middot; 97+ Reviews</span>
            <span className="badge">✓ MHIC Licensed &amp; Insured</span>
            <span className="badge">✓ 1-Year Warranty</span>
            <span className="badge dark">📞 +1 240-730-1292</span>
          </div>
        </div>

        {/* HQ BANNER */}
        <div className="hq-banner">
          <div className="icon">🏠</div>
          <div>
            <h3>DMV-GC Group Is Headquartered in North Bethesda &mdash; We Are Your Local Contractor</h3>
            <p>DMV-GC Group&apos;s office is at 11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852 &mdash; in the heart of the Pike District, steps from the White Flint Metro station. We are not a contractor who drives in from another county. We are North Bethesda&apos;s local licensed design-build team &mdash; deeply familiar with every neighborhood, every housing type, and every permit requirement in this community. When you hire DMV-GC Group for a North Bethesda basement renovation, you&apos;re hiring the team that works here, lives nearby, and is genuinely invested in this community&apos;s homes.</p>
          </div>
        </div>

        {/* INTRO */}
        <div className="intro-box">
          Looking for a trusted <strong>basement remodeling contractor in North Bethesda, MD</strong>? North Bethesda is one of Montgomery County&apos;s most dynamic communities &mdash; a diverse mix of established single-family neighborhoods along Rockville Pike and Old Georgetown Road, newer townhome communities in the Pike District and White Flint redevelopment corridor, and a wide range of housing types from 1960s&ndash;70s colonials to 2000s construction. Basements throughout North Bethesda represent some of the most practical renovation opportunities in the county &mdash; and DMV-GC Group is the local team that knows these neighborhoods from the inside. As your community&apos;s own licensed design-build contractor, we handle every basement renovation scope in North Bethesda &mdash; managing Montgomery County permits, HOA coordination where applicable, and construction under one contract from design through final inspection.
        </div>

        {/* TRUST BAR */}
        <div className="trust-bar">
          <div className="trust-item">
            <div className="icon">🏠</div>
            <strong>Local HQ</strong>
            <span>11810 Grand Park Ave, Suite 500</span>
          </div>
          <div className="trust-item">
            <div className="icon">📋</div>
            <strong>MoCo Permits Handled</strong>
            <span>Montgomery County DPS &mdash; managed</span>
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

        {/* SERVICES */}
        <h2>Basement Remodeling Services We Offer in North Bethesda, MD</h2>
        <p>
          North Bethesda&apos;s housing stock spans more construction eras and home types than almost any other unincorporated community in Montgomery County &mdash; from 1960s ranches and colonials to 1980s&ndash;90s townhomes to newer Pike District construction. DMV-GC Group handles basement renovations across every home type, with the local knowledge and permit expertise that comes from being headquartered right here.
        </p>

        <div className="service-grid">
          <div className="service-item">Full Basement Finishing</div>
          <div className="service-item">Townhome Basement Finishing (Pike District / White Flint)</div>
          <div className="service-item">ADU Basement Conversion (Legal Rental)</div>
          <div className="service-item">Recreation Room &amp; Family Room</div>
          <div className="service-item">Home Office Buildout</div>
          <div className="service-item">Basement Guest Suite with Egress</div>
          <div className="service-item">Basement Bathroom Addition</div>
          <div className="service-item">Wet Bar &amp; Entertainment Area</div>
          <div className="service-item">Home Gym Space</div>
          <div className="service-item">Egress Window Installation</div>
          <div className="service-item">Waterproofing &amp; Moisture Management</div>
          <div className="service-item">Montgomery County Permit Processing</div>
        </div>

        {/* AUTHOR BOX */}
        <div className="author-box">
          <div className="author-avatar">🏠</div>
          <div className="author-info">
            <h4>About DMV-GC Group &mdash; North Bethesda&apos;s Local Licensed Basement Remodeling Contractor</h4>
            <p>DMV-GC Group is headquartered at 11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852 &mdash; in the Pike District redevelopment area near the White Flint Metro. We have completed basement renovations, kitchen remodels, and bathroom renovations throughout every North Bethesda neighborhood &mdash; from White Flint Farm and Luxmanor to Tilden Woods and the Rockville Pike corridor. As the community&apos;s local contractor, we have a direct stake in the quality of work we do here. We hold a Maryland MHIC license and back every project with a 1-year warranty.</p>
            <div className="author-creds">
              <span className="cred hq">HQ: 11810 Grand Park Ave</span>
              <span className="cred">MHIC Licensed</span>
              <span className="cred">Licensed Plumbers</span>
              <span className="cred">Licensed Electricians</span>
              <span className="cred">4.9★ Rated</span>
              <span className="cred">1-Year Warranty</span>
            </div>
          </div>
        </div>

        {/* HOME TYPES */}
        <h2>North Bethesda&apos;s Diverse Housing Stock &mdash; Basement Renovation by Home Type</h2>
        <p>
          North Bethesda&apos;s housing spans a wider range than its relatively compact geography would suggest. The community has grown through multiple development eras &mdash; from postwar single-family construction in its established western neighborhoods to the dense mixed-use redevelopment currently underway in the Pike District and White Flint area. Each home type presents different basement renovation opportunities:
        </p>

        <div className="home-type-grid">
          <div className="home-type-box">
            <div className="icon">🏡</div>
            <h3>Established Single-Family (Luxmanor / White Flint Farm)</h3>
            <p>1960s&ndash;70s colonials and split-levels in North Bethesda&apos;s established western neighborhoods. Full basement footprints of 700&ndash;1,100 sq ft. Split-level lower levels &mdash; partially above grade &mdash; are common and well-suited to family room and home office finishing. Full basement below-grade spaces have excellent renovation potential.</p>
          </div>
          <div className="home-type-box">
            <div className="icon">🏘️</div>
            <h3>Pike District &amp; White Flint Townhomes</h3>
            <p>Newer townhome construction (2000s&ndash;2010s) in the redeveloping Pike District area near Grand Park Avenue. Compact lower levels of 400&ndash;650 sq ft &mdash; smart layout design maximizes the usable space. Many townhomes in these communities have HOA guidelines covering contractor access and work hours. Metro-adjacent location supports ADU rental demand.</p>
          </div>
          <div className="home-type-box">
            <div className="icon">🏠</div>
            <h3>Tilden Woods &amp; Mid-County</h3>
            <p>1970s&ndash;80s single-family homes in established neighborhoods along Old Georgetown Road and surrounding streets. Full below-grade basements with standard ceiling heights &mdash; excellent candidates for recreation rooms, home offices, and guest suites. Solid renovation market with strong buyer interest in finished basement spaces.</p>
          </div>
          <div className="home-type-box">
            <div className="icon">🏗️</div>
            <h3>Newer Construction (2000s&ndash;2010s)</h3>
            <p>Single-family and townhome construction from the 2000s&ndash;2010s throughout North Bethesda&apos;s newer developments. Poured concrete foundations, often with plumbing rough-ins already in place. Full finishing with bathroom completion is the most common scope &mdash; these homes were built anticipating basement renovation.</p>
          </div>
          <div className="home-type-box">
            <div className="icon">🛤️</div>
            <h3>Rockville Pike Corridor</h3>
            <p>Homes along the Rockville Pike / MD-355 corridor and adjacent streets. Mix of construction eras &mdash; from mid-century to relatively recent. The corridor&apos;s commercial activity and redevelopment pressure makes investment in these homes&apos; lower levels a particularly sound decision in the context of rising property values.</p>
          </div>
          <div className="home-type-box">
            <div className="icon">🏰</div>
            <h3>Randolph Hills / Garrett Park Border</h3>
            <p>Established single-family neighborhoods bordering Garrett Park and Kensington. Mix of 1950s&ndash;70s construction. Some homes here have older foundation types similar to those in Kensington&apos;s historic stock &mdash; assessment of system age is recommended before finalizing scope. Full finishing and recreation room projects are the most common types.</p>
          </div>
        </div>

        {/* HOA SECTION */}
        <h2>HOA Coordination for Pike District &amp; White Flint Townhome Communities</h2>
        <p>
          The newer townhome communities in North Bethesda&apos;s Pike District and White Flint redevelopment area &mdash; including communities along Grand Park Avenue, Nebel Street, and the surrounding area &mdash; have active HOAs with guidelines covering contractor access, work hours, parking, and exterior modifications. DMV-GC Group coordinates all HOA requirements as a standard part of every applicable project &mdash; and as the contractor whose own office is in the Pike District, we have direct familiarity with these communities.
        </p>

        <div className="spec-box">
          <h3>🏘️ HOA Coordination &mdash; What We Handle in North Bethesda&apos;s Planned Communities</h3>
          <ul>
            <li><strong>Certificate of Insurance (COI):</strong> Pike District and White Flint HOAs require contractor COIs &mdash; naming the HOA as additional insured &mdash; before any work begins. DMV-GC Group provides this as a standard deliverable for every HOA community project.</li>
            <li><strong>Contractor registration:</strong> Some communities require contractors to register with the property management company before beginning work. DMV-GC Group handles this proactively as part of project setup.</li>
            <li><strong>Work hour compliance:</strong> Most North Bethesda planned communities restrict construction to weekday daytime hours &mdash; typically 8 AM to 5 or 6 PM. All DMV-GC Group trades are scheduled within these windows without exception.</li>
            <li><strong>Parking and material staging:</strong> Pike District&apos;s urban-adjacent density means parking and staging logistics require careful planning. DMV-GC Group coordinates all delivery and staging with building management and HOA guidelines before any materials arrive on site.</li>
            <li><strong>Egress window notification:</strong> Any exterior modification &mdash; including egress window installation &mdash; may require HOA notification or approval in Pike District and White Flint communities. DMV-GC Group determines the specific requirement for your community before any exterior work is designed.</li>
            <li>HOA documentation submission runs concurrently with Montgomery County permit processing wherever possible &mdash; minimizing total project timeline.</li>
          </ul>
        </div>

        {/* ADU SECTION */}
        <h2>ADU Basement Conversions in North Bethesda &mdash; White Flint Metro Drives Demand</h2>
        <p>
          North Bethesda&apos;s White Flint Metro station &mdash; Red Line, between Rockville and Bethesda &mdash; creates consistent transit-accessible rental demand that makes basement ADU conversions a compelling investment for homeowners in single-family areas within walking or biking distance of the station. The area&apos;s ongoing redevelopment and rising property values reinforce the investment case.
        </p>
        <p>
          A legal basement ADU in North Bethesda (unincorporated Montgomery County) requires egress windows in sleeping areas, a separate entrance, kitchen or kitchenette, full bathroom, fire-rated separation, and a Montgomery County Certificate of Occupancy &mdash; all of which DMV-GC Group designs, builds, and permits in-house.
        </p>

        <div className="tip">
          💡 <strong>North Bethesda ADU ROI:</strong> The White Flint Metro&apos;s Red Line access supports basement rental rates of $1,450&ndash;$2,100/month in North Bethesda&apos;s single-family neighborhoods. A full ADU conversion ($68,000&ndash;$95,000) pays for itself in approximately 4&ndash;6 years in rental income &mdash; and adds $85,000&ndash;$120,000 to the home&apos;s appraised value in a market where Pike District redevelopment continues to lift surrounding property values.
        </div>

        {/* USE TYPES */}
        <h2>Most Popular Basement Uses in North Bethesda Homes</h2>

        <div className="use-type-grid">
          <div className="use-type-box">
            <div className="icon">💼</div>
            <h3>Home Office</h3>
            <p>The most requested basement use across all North Bethesda home types. Dedicated remote work space with built-in shelving, dedicated circuits, task lighting, and sound separation from the main living floors. Particularly practical in North Bethesda&apos;s established single-family homes.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🎮</div>
            <h3>Family / Recreation Room</h3>
            <p>The most common project in North Bethesda&apos;s 1960s&ndash;80s single-family homes &mdash; converting an unfinished basement into a comfortable family space that adds immediate livability and real estate appeal.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🏘️</div>
            <h3>ADU Rental Unit</h3>
            <p>Legal, COO-permitted rental unit driven by White Flint Metro access. The highest-ROI basement project for North Bethesda homeowners within transit distance of the Red Line. Payback of 4&ndash;6 years at current rental rates.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🛏️</div>
            <h3>Guest / In-Law Suite</h3>
            <p>Bedroom with egress window plus bathroom &mdash; a self-contained space that adds a legal bedroom to the home&apos;s count and meets the needs of North Bethesda&apos;s growing multigenerational household community.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🏋️</div>
            <h3>Home Gym</h3>
            <p>Rubber flooring, mirror wall, and enhanced ventilation &mdash; a functional gym in even a modest footprint. Popular in North Bethesda&apos;s health-conscious, young-professional community, particularly in newer Pike District townhomes where a gym is otherwise an additional monthly expense.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🎬</div>
            <h3>Media Room</h3>
            <p>A dedicated screen room with acoustic treatment, larger display, and blackout shades &mdash; an upgrade from a standard family room for homeowners in North Bethesda&apos;s larger single-family colonials with the basement footprint to support a dedicated media space.</p>
          </div>
        </div>

        {/* MOISTURE SECTION */}
        <h2>Basement Moisture Assessment in North Bethesda Homes</h2>
        <p>
          North Bethesda&apos;s housing spans construction eras from the 1950s to the 2010s &mdash; each with different baseline moisture management. Older homes in Luxmanor, White Flint Farm, and Randolph Hills have foundations that predate modern waterproofing practices. Newer construction in Pike District townhomes has better baseline moisture control. In all cases, a pre-renovation moisture assessment is the correct first step.
        </p>

        <div className="spec-box">
          <h3>💧 Pre-Renovation Moisture Check &mdash; What We Assess</h3>
          <ul>
            <li><strong>Foundation type by era:</strong> Pre-1960 homes may have block foundations; 1960s&ndash;80s homes typically have poured concrete; 2000s+ construction has poured concrete with waterproofing membranes. Each warrants a different assessment approach.</li>
            <li><strong>Efflorescence and staining:</strong> White mineral deposits on walls or water staining at the floor-wall joint indicate historical moisture movement &mdash; requires investigation before finishing.</li>
            <li><strong>Sump pump condition:</strong> Age, cycling frequency, capacity, and battery backup status. Montgomery County&apos;s clay-heavy soils in many North Bethesda neighborhoods can create groundwater conditions that require active sump management.</li>
            <li><strong>Grading and downspouts:</strong> Ground sloping toward the foundation and downspouts discharging within 4 feet of the wall are the most common correctable causes of moisture in North Bethesda&apos;s older homes.</li>
            <li><strong>Newer construction rough-ins:</strong> Many North Bethesda homes from the 2000s&ndash;2010s were built with plumbing rough-ins in the basement slab. DMV-GC Group checks for existing rough-ins during every consultation for newer-construction homes &mdash; finding one significantly reduces the cost of adding a basement bathroom.</li>
            <li>Written moisture assessment with findings and recommendations is provided before any design or pricing is finalized for any North Bethesda basement renovation.</li>
          </ul>
        </div>

        {/* NEIGHBORHOODS */}
        <h2>Serving All North Bethesda, MD Neighborhoods for Basement Remodeling</h2>

        <div className="neighborhood-grid">
          <div className="neighborhood-card">
            <h3>Pike District / Grand Park Area</h3>
            <p>DMV-GC Group&apos;s own headquarters &mdash; 11810 Grand Park Ave, Suite 500 &mdash; is right here. Newer townhomes and mixed-use construction in the White Flint redevelopment zone. HOA coordination and Montgomery County DPS permits both managed. Metro-adjacent location supports ADU rental demand.</p>
          </div>
          <div className="neighborhood-card">
            <h3>White Flint Farm</h3>
            <p>Established single-family neighborhood with 1960s&ndash;70s colonials and split-levels. Full basements well-suited to family room and home office finishing. Split-level lower levels are partially above grade &mdash; natural light and ceiling height advantages. Strong renovation market from long-term owner-occupants investing in their homes.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Luxmanor</h3>
            <p>Established single-family neighborhood with 1960s&ndash;70s construction along Luxmanor Drive and adjacent streets. Full basements, standard ceiling heights, poured concrete foundations. Recreation rooms, home offices, and ADU conversions are the most common project types. Proximity to White Flint Metro supports ADU rental demand.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Tilden Woods</h3>
            <p>1970s&ndash;80s single-family neighborhood along Old Georgetown Road. Full below-grade basements with standard configurations &mdash; excellent candidates for full finishing across multiple rooms. Strong buyer interest in finished basements in this established neighborhood.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Randolph Hills</h3>
            <p>Mid-century neighborhood bordering Garrett Park and Kensington. Mix of 1950s&ndash;70s construction &mdash; some homes have older foundation systems similar to Kensington&apos;s stock. Assessment recommended before finalizing scope. Full finishing and recreation room projects are the most common types.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Nebel Street / Hoya Saxa Area</h3>
            <p>Newer townhome and single-family developments along Nebel Street and surrounding areas in the White Flint / Pike District redevelopment zone. Mix of newer construction with poured concrete foundations and often existing rough-ins. HOA coordination included where applicable.</p>
          </div>
        </div>

        {/* COST TABLE */}
        <h2>Basement Remodeling Cost in North Bethesda, MD</h2>
        <p>
          Here is a realistic cost breakdown for <strong>basement remodeling in North Bethesda, Maryland</strong>. As North Bethesda&apos;s local contractor, DMV-GC Group provides estimates that reflect the actual costs in this market &mdash; no out-of-area pricing surprises:
        </p>

        <table className="cost-table">
          <thead>
            <tr>
              <th>Scope / Home Type</th>
              <th>Typical Cost Range</th>
              <th>What&apos;s Included</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Townhome Basement Finishing (Pike District)</td>
              <td>$22,000 &ndash; $42,000</td>
              <td>Framing, drywall, LVP or carpet, recessed lighting, electrical, HOA coordination, MoCo permit</td>
            </tr>
            <tr>
              <td>Split-Level Lower Level Finishing</td>
              <td>$22,000 &ndash; $40,000</td>
              <td>Framing, drywall, flooring, lighting, electrical, paint &mdash; natural light from existing windows</td>
            </tr>
            <tr>
              <td>Full Single-Family Basement Finishing</td>
              <td>$32,000 &ndash; $65,000</td>
              <td>Full framing, drywall, flooring, lighting, electrical, HVAC extension, MoCo permit</td>
            </tr>
            <tr>
              <td>Basement Bathroom Addition</td>
              <td>$16,000 &ndash; $36,000</td>
              <td>Below-grade plumbing (ejector pump if needed), full bathroom build-out, tile, fixtures</td>
            </tr>
            <tr>
              <td>Egress Window Installation</td>
              <td>$3,800 &ndash; $8,500</td>
              <td>Concrete cutting, window well, drainage, window installation, interior finishing, MoCo permit</td>
            </tr>
            <tr>
              <td>Home Office Buildout (within finished basement)</td>
              <td>$8,000 &ndash; $20,000</td>
              <td>Built-in cabinetry, dedicated circuits, task lighting, soundproofing</td>
            </tr>
            <tr>
              <td>Wet Bar / Entertainment Area</td>
              <td>$12,000 &ndash; $30,000</td>
              <td>Custom cabinetry, countertops, sink, refrigeration, plumbing &amp; electrical</td>
            </tr>
            <tr>
              <td>Mid-Range Full Renovation with Bathroom</td>
              <td>$45,000 &ndash; $80,000</td>
              <td>Full finishing, bathroom addition, egress window, MoCo permit, HOA coordination</td>
            </tr>
            <tr>
              <td>Full ADU Basement Conversion</td>
              <td>$68,000 &ndash; $115,000</td>
              <td>Full finishing, egress windows, separate entrance, kitchen, bathroom, fire separation, MoCo COO</td>
            </tr>
          </tbody>
        </table>

        <div className="highlight">
          <p>🏠 <strong>Local Advantage:</strong> As the contractor headquartered in North Bethesda, DMV-GC Group can often schedule consultations faster, respond to mid-project questions more quickly, and coordinate inspections more efficiently than contractors commuting from other parts of Montgomery County. For North Bethesda homeowners, working with a local team has practical benefits that go beyond the renovation itself.</p>
        </div>

        {/* CTA MID PAGE */}
        <div className="cta-banner">
          <h2>Get a Free Basement Remodeling Estimate in North Bethesda</h2>
          <p>We&apos;re right here in the community &mdash; at 11810 Grand Park Ave, Suite 500. Call us or schedule online and we&apos;ll come to you quickly. Free in-home consultation, no obligation.</p>
          <Link href="/contact-us" className="cta-btn">Schedule Free In-Home Consultation</Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
        </div>

        {/* PROCESS */}
        <h2>Our Basement Remodeling Process in North Bethesda</h2>

        <div className="steps">
          {stepsData.map((step) => (
            <div className="step" key={step.num}>
              <div className="step-num">{step.num}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* REVIEWS */}
        <h2>What North Bethesda Homeowners Say About DMV-GC Group</h2>

        <div className="review-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;DMV-GC Group is literally our neighborhood contractor &mdash; their office is on Grand Park Avenue, five minutes from our house. That made a real difference: faster consultation scheduling, quick responses when questions came up mid-project, and a team that clearly knows North Bethesda. The basement recreation room and home office they built are excellent.&quot;</p>
            <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">White Flint Farm, North Bethesda MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;Our Pike District townhome basement was a raw, unfinished space. DMV-GC Group handled the townhome HOA coordination, filed the MoCo permits, and turned it into a home office and guest room with a half bath. Compact space, but the layout makes every square foot work. Very pleased.&quot;</p>
            <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Pike District, North Bethesda MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;We converted our Luxmanor colonial basement into a legal ADU &mdash; egress window, separate entrance, kitchenette, full bath, and the Montgomery County COO. We&apos;ve been renting it for $1,700/month. The White Flint Metro proximity made finding a tenant easy. DMV-GC Group handled every step professionally.&quot;</p>
            <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Luxmanor, North Bethesda MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;Our Tilden Woods home had a plumbing rough-in in the basement slab that we didn&apos;t know about. DMV-GC Group found it during the consultation &mdash; saved us a significant amount on the bathroom addition. That&apos;s the kind of thing a contractor who knows the area&apos;s housing stock finds that others miss.&quot;</p>
            <div className="review-author">&mdash; Verified Homeowner &middot; <span className="review-location">Tilden Woods, North Bethesda MD</span></div>
          </div>
        </div>

        <div className="highlight">
          <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> DMV-GC Group is North Bethesda&apos;s own licensed design-build contractor &mdash; serving the community from our Pike District office with the local knowledge, permit expertise, and quality that homeowners in this area deserve from a team that truly calls North Bethesda home.</p>
        </div>

        {/* SERVICE AREAS */}
        <h2>Serving North Bethesda and Surrounding Areas for Basement Remodeling</h2>

        <div className="areas-grid">
          <span className="area-pill">North Bethesda, MD</span>
          <span className="area-pill">Pike District</span>
          <span className="area-pill">White Flint Farm</span>
          <span className="area-pill">Luxmanor</span>
          <span className="area-pill">Tilden Woods</span>
          <span className="area-pill">Randolph Hills</span>
          <span className="area-pill">Bethesda</span>
          <span className="area-pill">Rockville</span>
          <span className="area-pill">Garrett Park</span>
          <span className="area-pill">Potomac</span>
        </div>

        <div className="nearby-box">
          <h3>Also serving Bethesda, MD &mdash; directly south of North Bethesda</h3>
          <p>DMV-GC Group completes basement renovations throughout Bethesda &mdash; directly south of North Bethesda along Wisconsin Avenue and Old Georgetown Road. Bethesda homeowners benefit from the same local team, Montgomery County permit expertise, and 1-year warranty. <Link href="/service/basement-remodeling">View our full basement remodeling service page &rarr;</Link></p>
        </div>

        {/* FAQ */}
        <h2>Frequently Asked Questions &mdash; Basement Remodeling in North Bethesda, MD</h2>
        <Accordion defaultActiveKey="0" flush>
          {faqData.map((faq) => (
            <Accordion.Item eventKey={faq.eventKey} key={faq.eventKey}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        {/* INTERNAL LINKS */}
        <div className="internal-links">
          <h2>Explore Our Other Remodeling Services in North Bethesda</h2>
          <ul>
            <li><Link href="/service/kitchen-remodeling/north-bethesda-md">Kitchen Remodeling in North Bethesda, MD</Link></li>
            <li><Link href="/service/bathroom-remodeling">Bathroom Remodeling in North Bethesda, MD</Link></li>
            <li><Link href="/service/home-additions">Home Additions in North Bethesda, MD</Link></li>
            <li><Link href="/service/adu">ADU Construction in North Bethesda, MD</Link></li>
            <li><Link href="/service/flooring-remodeling">Flooring Installation in North Bethesda, MD</Link></li>
            <li><Link href="/service/design-build">Design-Build Contractor in North Bethesda, MD</Link></li>
          </ul>
        </div>

        {/* FINAL CTA */}
        <div className="cta-banner">
          <h2>Ready to Transform Your North Bethesda Basement?</h2>
          <p>We&apos;re your local contractor &mdash; headquartered right here in North Bethesda at 11810 Grand Park Ave. Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation today.</p>
          <Link href="/contact-us" className="cta-btn">Get Free Basement Estimate in North Bethesda &rarr;</Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
        </div>

        {/* SCHEMA JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </div>
    </div>
  );
}
