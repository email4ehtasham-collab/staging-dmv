'use client';
import { useEffect } from "react";
import Link from "next/link";
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
      "description": "Licensed design-build general contractor serving Rockville, MD. Specializing in basement remodeling across Rockville&apos;s diverse housing stock — single-family colonials, townhomes in King Farm and Fallsgrove, and mid-century ranches — with City of Rockville permit expertise.",
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
        { "@type": "City", "name": "North Bethesda" },
        { "@type": "City", "name": "Gaithersburg" },
        { "@type": "City", "name": "Potomac" },
        { "@type": "City", "name": "Garrett Park" }
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "MHIC License", "credentialCategory": "Maryland Home Improvement Contractor License" },
        { "@type": "EducationalOccupationalCredential", "name": "DLCP License", "credentialCategory": "Washington DC Department of Licensing and Consumer Protection" }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "97", "bestRating": "5" },
      "priceRange": "$$"
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/basement-remodeling/rockville-md#service",
      "serviceType": "Basement Remodeling",
      "name": "Basement Remodeling in Rockville, MD",
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Rockville", "sameAs": "https://en.wikipedia.org/wiki/Rockville,_Maryland" },
      "description": "Full-service basement remodeling in Rockville, MD. Recreation rooms, home offices, guest suites, ADU conversions, and full basement finishing across Rockville&apos;s diverse housing stock — with City of Rockville permit handling and HOA coordination for King Farm, Fallsgrove, and Congressional.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "18000", "maxPrice": "115000", "priceCurrency": "USD" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Basement Remodeling", "item": "https://www.dmv-gc.com/service/basement-remodeling" },
        { "@type": "ListItem", "position": 4, "name": "Rockville, MD", "item": "https://www.dmv-gc.com/service/basement-remodeling/rockville-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does basement remodeling cost in Rockville, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Basement remodeling in Rockville, MD typically costs between $18,000 and $115,000 depending on scope, home type, and finish level. A townhome basement finishing (King Farm, Fallsgrove) runs $18,000\u2013$40,000. A full single-family basement finishing costs $28,000\u2013$58,000. A mid-range renovation with bathroom and home office runs $40,000\u2013$75,000. A full ADU conversion with egress windows, separate entrance, kitchen, and bathroom typically costs $65,000\u2013$115,000. DMV-GC Group provides free in-home consultations with detailed estimates."
          }
        },
        {
          "@type": "Question",
          "name": "Does Rockville require City permits for basement remodeling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Rockville is an incorporated city \u2014 properties within the City of Rockville\u2019s boundaries require permits from the City of Rockville\u2019s Department of Community Planning and Development Services, not from Montgomery County DPS. Properties in unincorporated areas with Rockville mailing addresses (including parts of Fallsgrove and some North Bethesda-adjacent areas) require Montgomery County permits. DMV-GC Group verifies the correct permit jurisdiction for every Rockville address before filing any permits."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group handle HOA requirements for basement remodeling in King Farm and Fallsgrove?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. King Farm, Fallsgrove, and Congressional are planned communities with active HOAs. DMV-GC Group prepares and submits all required HOA documentation \u2014 certificates of insurance, contractor registration, scope descriptions, and work-hour compliance scheduling \u2014 as a standard part of every project in these communities. Homeowners never need to manage HOA coordination themselves."
          }
        },
        {
          "@type": "Question",
          "name": "Can DMV-GC Group convert a Rockville basement into a legal ADU?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. ADU basement conversions are increasingly popular in Rockville, driven by the city\u2019s strong rental market and access to the Rockville and Shady Grove Metro stations. A legal basement ADU requires egress windows in sleeping areas, a separate entrance, a full kitchen or kitchenette, a full bathroom, fire-rated separation between the unit and main dwelling, and a Certificate of Occupancy. DMV-GC Group designs, builds, and permits complete ADU conversions in Rockville \u2014 including all City of Rockville permit applications and COO inspections."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a basement remodel take in Rockville, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Rockville basement renovations take 6\u201312 weeks from construction start to completion. A townhome finishing takes 5\u20138 weeks. A full ADU conversion takes 10\u201314 weeks. City of Rockville permit processing typically takes 3\u20135 weeks. HOA review (King Farm, Fallsgrove, Congressional) runs concurrently with permit processing where possible. DMV-GC Group manages the complete timeline in-house."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for basement remodeling in Rockville, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license \u2014 required for all home renovation work in Rockville. We are fully bonded, carry comprehensive general liability insurance and workers\u2019 compensation coverage, and provide a 1-year workmanship warranty on every basement remodeling project completed in Rockville."
          }
        }
      ]
    }
  ]
};

const stepsData = [
  {
    num: 1,
    title: "Free In-Home Consultation & Jurisdiction Verification",
    desc: "We visit your Rockville home, assess the existing basement \u2014 ceiling heights, foundation type, moisture conditions, plumbing rough-ins, electrical panel \u2014 and immediately verify whether your property falls within the City of Rockville or Montgomery County permit jurisdiction. This confirmation happens before any design or pricing begins. No cost, no obligation."
  },
  {
    num: 2,
    title: "HOA Documentation (If Applicable)",
    desc: "For King Farm, Fallsgrove, Congressional, and any other Rockville HOA community, we prepare and submit all required HOA documentation \u2014 running concurrently with permit processing wherever possible to avoid timeline delays."
  },
  {
    num: 3,
    title: "Moisture Assessment & Remediation Plan",
    desc: "We assess moisture conditions and provide written findings and options before any design work begins. Any required moisture management \u2014 sump pump upgrade, window well drainage, interior drainage channel \u2014 is addressed before finishing starts."
  },
  {
    num: 4,
    title: "Custom Design & City of Rockville Permit Filing",
    desc: "Our designers develop a floor plan tailored to your basement\u2019s footprint and your goals. Our permit team prepares all required drawings and files with the City of Rockville\u2019s Department of Community Planning and Development Services \u2014 managing plan review and all required correspondence."
  },
  {
    num: 5,
    title: "Construction \u2014 Framing Through Final Finishes",
    desc: "Our licensed in-house crews complete all framing, electrical, plumbing, HVAC, egress windows, drywall, flooring, cabinetry, bathroom, and all finish work \u2014 coordinated by a dedicated project manager and inspected at each required stage by the City of Rockville."
  },
  {
    num: 6,
    title: "City Inspections, Final Walkthrough & 1-Year Warranty",
    desc: "We manage all required City of Rockville final inspections \u2014 including Certificate of Occupancy for ADU projects. After sign-off, we conduct a thorough walkthrough, address every punch list item, and activate your 1-year workmanship warranty."
  }
];

const faqData = [
  {
    eventKey: "0",
    question: "How much does basement remodeling cost in Rockville, MD?",
    answer: "Basement remodeling in Rockville typically costs $18,000\u2013$115,000 depending on home type and scope. A King Farm townhome finishing runs $18,000\u2013$38,000. A full single-family finishing costs $28,000\u2013$58,000. A mid-range renovation with bathroom runs $40,000\u2013$75,000. A full ADU conversion costs $65,000\u2013$115,000. DMV-GC Group provides free in-home consultations with itemized estimates for every Rockville home type and scope."
  },
  {
    eventKey: "1",
    question: "Does Rockville require City permits for basement remodeling?",
    answer: "Yes \u2014 for properties within the incorporated City of Rockville. Permits are issued by the City of Rockville\u2019s Department of Community Planning and Development Services at 111 Maryland Avenue, not Montgomery County DPS. Properties with Rockville mailing addresses outside the city limits require Montgomery County permits. DMV-GC Group verifies the correct jurisdiction for every Rockville address before filing any permit application."
  },
  {
    eventKey: "2",
    question: "Does DMV-GC Group handle HOA coordination for King Farm and Fallsgrove?",
    answer: "Yes. DMV-GC Group manages all HOA coordination for King Farm, Fallsgrove, Congressional, and any other Rockville HOA community \u2014 including COI submission, contractor registration, work-hour compliance, and egress window notification where required. This is included as standard, not an add-on. HOA submission runs concurrently with City permit processing wherever possible."
  },
  {
    eventKey: "3",
    question: "Can DMV-GC Group build a legal ADU in a Rockville basement?",
    answer: "Yes. ADU basement conversions are a growing project type in Rockville given the city\u2019s Red Line and Shady Grove Metro access. A legal ADU requires egress windows, separate entrance, kitchen or kitchenette, full bathroom, fire-rated separation, and a Certificate of Occupancy \u2014 all handled by DMV-GC Group, including the City of Rockville COO application and inspections."
  },
  {
    eventKey: "4",
    question: "Do Fallsgrove homes have plumbing rough-ins in the basement?",
    answer: "Many do. Fallsgrove\u2019s newer (2000s) single-family homes were often built with a plumbing rough-in installed in the basement slab \u2014 a stub-out for a future bathroom. DMV-GC Group checks for existing rough-ins during every Fallsgrove consultation. If one is present, it significantly reduces the cost of adding a basement bathroom by eliminating the need to cut trenches through the concrete slab for new drain lines."
  },
  {
    eventKey: "5",
    question: "Is DMV-GC Group licensed for basement remodeling in Rockville, MD?",
    answer: "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license \u2014 required for all home renovation work in Rockville. We employ licensed plumbers and electricians in-house, are fully bonded, carry comprehensive general liability insurance and workers\u2019 compensation coverage, and provide a 1-year workmanship warranty on every basement project in Rockville."
  }
];

export default function BasementRockvilleMD() {
  const { setActiveMenuItem } = useMyContext();

  useEffect(() => {
    setActiveMenuItem("service");
  }, []);

  return (
    <div className="city-service-detail-page basement-rockville-md">
      <div className="container">

        {/* BREADCRUMB */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>&rsaquo;</span>
          <Link href="/services">Services</Link><span>&rsaquo;</span>
          <Link href="/service/basement-remodeling">Basement Remodeling</Link><span>&rsaquo;</span>
          Rockville, MD
        </nav>

        {/* HERO */}
        <div className="hero">
          <div className="hero-location-tag">📍 Serving Rockville, MD</div>
          <h1>Basement Remodeling Contractor in Rockville, MD</h1>
          <div className="hero-meta">
            <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
            <span className="badge">✓ MHIC Licensed &amp; Insured</span>
            <span className="badge">✓ 1-Year Warranty</span>
            <span className="badge">✓ City Permits &amp; HOA Handled</span>
            <span className="badge dark">📞 +1 240-730-1292</span>
          </div>
        </div>

        {/* PERMIT BANNER */}
        <div className="permit-banner">
          <div className="icon">🏛️</div>
          <div>
            <h3>City of Rockville Permits — Not Montgomery County</h3>
            <p>Rockville is Montgomery County&apos;s county seat and one of Maryland&apos;s largest incorporated cities. Properties within the City of Rockville require permits from the City&apos;s Department of Community Planning and Development Services — not Montgomery County DPS. Many contractors get this wrong, causing permit delays and invalid inspections. DMV-GC Group verifies every Rockville address against city boundary data before filing any permit application.</p>
          </div>
        </div>

        {/* INTRO */}
        <div className="intro-box">
          Looking for a trusted <strong>basement remodeling contractor in Rockville, MD</strong>? As Montgomery County&apos;s county seat and one of Maryland&apos;s largest incorporated cities, Rockville offers one of the most diverse housing landscapes in the region — from compact King Farm townhomes with efficient lower levels to spacious colonials in Congressional and Fallsgrove, from mid-century ranches along Veirs Mill Road to newer single-family homes in the I-270 corridor. DMV-GC Group&apos;s licensed design-build team serves the full range of Rockville&apos;s neighborhoods — handling City of Rockville permit processing, HOA coordination for planned communities, and construction from design through final inspection, all under one contract.
        </div>

        {/* TRUST BAR */}
        <div className="trust-bar">
          <div className="trust-item">
            <div className="icon">🏛️</div>
            <strong>City Permit Experts</strong>
            <span>City of Rockville process — handled</span>
          </div>
          <div className="trust-item">
            <div className="icon">🏘️</div>
            <strong>HOA Coordination</strong>
            <span>King Farm, Fallsgrove &amp; Congressional</span>
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
        <h2>Basement Remodeling Services We Offer in Rockville, MD</h2>
        <p>
          Rockville&apos;s housing stock spans more construction eras and home types than almost any other city in Montgomery County — from 1950s ranches and split-levels to 1970s–80s colonials to modern townhomes in planned communities. DMV-GC Group handles basement renovations across every home type, with the permit expertise and HOA coordination that Rockville&apos;s diverse landscape requires.
        </p>

        <div className="service-grid">
          <div className="service-item">Full Basement Finishing</div>
          <div className="service-item">Townhome Basement Finishing (King Farm / Fallsgrove)</div>
          <div className="service-item">Recreation Room &amp; Family Room</div>
          <div className="service-item">Home Office Buildout</div>
          <div className="service-item">Basement Guest Suite with Egress</div>
          <div className="service-item">Basement Bathroom Addition</div>
          <div className="service-item">ADU Basement Conversion</div>
          <div className="service-item">Wet Bar &amp; Entertainment Area</div>
          <div className="service-item">Home Gym Space</div>
          <div className="service-item">Egress Window Installation</div>
          <div className="service-item">Waterproofing &amp; Moisture Management</div>
          <div className="service-item">City of Rockville Permit Processing</div>
        </div>

        {/* AUTHOR BOX */}
        <div className="author-box">
          <div className="author-avatar">🏠</div>
          <div className="author-info">
            <h4>About DMV-GC Group — Rockville&apos;s Licensed Basement Remodeling Contractor</h4>
            <p>DMV-GC Group is based in North Bethesda — directly south of Rockville along MD-355. Our team has completed basement renovations throughout Rockville&apos;s neighborhoods, from King Farm townhomes to mid-century colonials along Veirs Mill Road to larger single-family homes in Congressional and Fallsgrove. We understand the City of Rockville&apos;s permit process as distinct from Montgomery County&apos;s, and we verify the correct jurisdiction for every Rockville address before filing anything. We hold a Maryland MHIC license and back every project with a 1-year warranty.</p>
            <div className="author-creds">
              <span className="cred">MHIC Licensed</span>
              <span className="cred">Licensed Plumbers</span>
              <span className="cred">Licensed Electricians</span>
              <span className="cred">City Permit Specialists</span>
              <span className="cred">4.9★ Rated</span>
              <span className="cred">1-Year Warranty</span>
            </div>
          </div>
        </div>

        {/* CITY PERMITS */}
        <h2>City of Rockville Permits for Basement Remodeling — What Homeowners Need to Know</h2>
        <p>
          Rockville is Montgomery County&apos;s county seat — and one of the most common permit jurisdiction mistakes in Montgomery County construction occurs right here. Many contractors assume that because Rockville is in Montgomery County, permits go through Montgomery County DPS. They don&apos;t — at least not for properties within the incorporated city limits.
        </p>

        <div className="spec-box">
          <h3>📋 City of Rockville Permit Jurisdiction — The Key Details</h3>
          <ul>
            <li><strong>Issuing authority for incorporated Rockville:</strong> City of Rockville, Department of Community Planning and Development Services, 111 Maryland Avenue, Rockville, MD 20850. All building, electrical, plumbing, and mechanical permits for properties within the city limits are issued and inspected by the City — not by Montgomery County DPS.</li>
            <li><strong>City of Rockville plan review:</strong> The City reviews submitted drawings before issuing permits. For basement renovations, drawings must show the proposed floor plan, electrical layout, and any plumbing work. DMV-GC Group prepares all required drawings in-house and manages the City&apos;s plan review process.</li>
            <li><strong>City inspection staff:</strong> The City of Rockville has its own inspection staff separate from the county. Inspections are scheduled through the City&apos;s permit portal. DMV-GC Group manages all inspection scheduling and coordinates access throughout construction.</li>
            <li><strong>Montgomery County jurisdiction areas:</strong> Many properties with Rockville mailing addresses — particularly in newer developments to the north and west of the city, and in areas along I-270 — are in unincorporated Montgomery County and require Montgomery County DPS permits. The mailing address alone is not a reliable indicator of jurisdiction.</li>
            <li><strong>King Farm:</strong> Located within the incorporated City of Rockville — City permits apply.</li>
            <li><strong>Fallsgrove:</strong> Located within the incorporated City of Rockville — City permits apply.</li>
            <li><strong>Congressional:</strong> Partially within and partially outside the city limits depending on exact address — DMV-GC Group verifies each specific parcel.</li>
            <li><strong>North Bethesda border areas:</strong> Some properties along the Rockville/North Bethesda border use Rockville as their mailing city but fall in Montgomery County&apos;s unincorporated jurisdiction or in North Bethesda. Verification is essential.</li>
            <li>DMV-GC Group uses parcel-level boundary data — not zip codes or mailing addresses — to verify the correct permit jurisdiction for every Rockville project before filing anything.</li>
          </ul>
        </div>

        <div className="note">
          ⚠️ <strong>Common Rockville Permit Mistake:</strong> A contractor who files your City of Rockville basement renovation with Montgomery County DPS will receive a permit — but Montgomery County inspectors will not conduct inspections for properties within the City limits. The work proceeds without valid inspections, creating code compliance problems at resale. DMV-GC Group&apos;s permit team eliminates this risk entirely by verifying jurisdiction at the start of every project.
        </div>

        {/* HOUSING TYPES */}
        <h2>Basement Renovation for Rockville&apos;s Diverse Housing Stock</h2>
        <p>
          Rockville&apos;s size and history as one of Maryland&apos;s oldest and largest cities means its housing spans a wider range than any comparable community in Montgomery County — from homes built in the 1920s near the historic district to brand-new townhomes in King Farm completed in the 2000s. Each home type presents different basement renovation opportunities and considerations:
        </p>

        <div className="home-type-grid">
          <div className="home-type-box">
            <div className="icon">🏘️</div>
            <h3>King Farm Townhomes</h3>
            <p>Planned community townhomes with compact 400–650 sq ft lower levels — efficient layout design is key. Home office, recreation room, or guest suite with egress window and bathroom are the most common scopes. HOA coordination and City permits both required.</p>
          </div>
          <div className="home-type-box">
            <div className="icon">🏡</div>
            <h3>Fallsgrove Single-Family</h3>
            <p>Newer (2000s) single-family homes with generous basement footprints and poured concrete foundations. Many have plumbing rough-ins in place. Full finishing with multiple rooms — family room, home office, guest suite — is practical within these larger spaces.</p>
          </div>
          <div className="home-type-box">
            <div className="icon">🏛️</div>
            <h3>Congressional</h3>
            <p>Established 1970s–80s colonials in one of Rockville&apos;s most desirable neighborhoods. Full basements with standard ceiling heights — excellent candidates for recreation rooms, home offices, and guest suites. Mix of City and County jurisdiction depending on exact address.</p>
          </div>
          <div className="home-type-box">
            <div className="icon">🏠</div>
            <h3>Veirs Mill / Mid-Century</h3>
            <p>1950s–60s ranches and split-levels along Veirs Mill Road and surrounding streets. Split-level lower levels are partially above grade — natural light, workable ceiling heights, and sometimes existing exterior doors make these ideal finishing candidates.</p>
          </div>
          <div className="home-type-box">
            <div className="icon">🏰</div>
            <h3>Historic Rockville / East Rockville</h3>
            <p>Older homes near the historic Rockville town center — some pre-WWII construction with older foundation systems. Similar considerations to Garrett Park and Kensington: assessment of ceiling heights, foundation type, and older systems before finalizing scope.</p>
          </div>
          <div className="home-type-box">
            <div className="icon">🌳</div>
            <h3>Twinbrook / Hungerford</h3>
            <p>Established mid-century neighborhoods with 1950s–60s Cape Cods and colonials. Basements here are typically standard below-grade with poured concrete or block foundations. Full finishing, recreation rooms, and ADU conversions are common project types.</p>
          </div>
        </div>

        {/* HOA */}
        <h2>HOA Coordination for King Farm, Fallsgrove &amp; Congressional</h2>
        <p>
          Several of Rockville&apos;s most active renovation markets are in planned communities with HOAs. DMV-GC Group handles all HOA coordination as a standard part of every applicable project — homeowners in these communities never need to manage the HOA process themselves.
        </p>

        <div className="spec-box">
          <h3>🏘️ HOA Coordination — What DMV-GC Group Manages</h3>
          <ul>
            <li><strong>Certificate of Insurance (COI):</strong> HOAs in King Farm, Fallsgrove, and Congressional require contractor COIs — naming the HOA as additional insured — before any work begins. DMV-GC Group provides this as a standard deliverable for every HOA community project.</li>
            <li><strong>Contractor registration:</strong> Some Rockville HOAs require contractors to register with the property management company before beginning work. DMV-GC Group handles this registration proactively as part of project setup.</li>
            <li><strong>Work hour compliance:</strong> Most Rockville planned communities restrict construction activity to weekday daytime hours — typically 8 AM to 5 or 6 PM. All DMV-GC Group trades are scheduled within these windows.</li>
            <li><strong>Exterior modification notification:</strong> Egress window installation — which modifies the exterior of the home — may require HOA notification or approval in King Farm and Fallsgrove. DMV-GC Group determines the specific requirement for each community before any exterior work is designed.</li>
            <li><strong>Dumpster and material staging:</strong> HOA rules on dumpster placement and material delivery staging are coordinated by DMV-GC Group before any deliveries are scheduled.</li>
            <li>HOA documentation submission runs concurrently with City of Rockville permit processing wherever possible — minimizing total project timeline.</li>
          </ul>
        </div>

        {/* ADU */}
        <h2>ADU Basement Conversions in Rockville — Metro Access Drives Demand</h2>
        <p>
          Rockville has two Metro stations — Rockville (Red Line) and Shady Grove (Red Line terminus) — making it one of the most transit-accessible communities in upper Montgomery County. This Metro access drives consistent rental demand that makes basement ADU conversions a compelling investment for Rockville homeowners.
        </p>
        <p>
          A legal basement ADU in Rockville requires all the standard Montgomery County components — egress windows, separate entrance, kitchen or kitchenette, full bathroom, fire-rated separation, and Certificate of Occupancy — but the permits are issued by the City of Rockville, not the county. DMV-GC Group manages the City&apos;s ADU permit and COO process in full.
        </p>

        <div className="tip">
          💡 <strong>Rockville ADU ROI:</strong> Rockville&apos;s Red Line access supports basement rental rates of $1,400–$2,000/month depending on size, location, and finishes. A full ADU conversion ($65,000–$95,000) pays for itself in approximately 4–6 years in rental income alone — and adds $80,000–$115,000 to the home&apos;s appraised value. Homes in Twinbrook, Veirs Mill, and areas closest to the Rockville and Shady Grove stations see the strongest rental demand.
        </div>

        {/* USE TYPES */}
        <h2>Most Popular Basement Uses in Rockville Homes</h2>

        <div className="use-type-grid">
          <div className="use-type-box">
            <div className="icon">💼</div>
            <h3>Home Office</h3>
            <p>Dedicated remote work space — the most requested basement use across all of Rockville&apos;s home types. Built-in shelving, task lighting, dedicated electrical circuits, and sound separation from the main living floors.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🎮</div>
            <h3>Family / Recreation Room</h3>
            <p>Open, comfortable family space for everyday use. The most common project in Rockville&apos;s single-family homes — converting an unfinished basement into a usable family room adds immediate livability and resale value.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🏘️</div>
            <h3>ADU Rental Unit</h3>
            <p>Legal, COO-permitted rental unit driven by Rockville&apos;s Red Line and Shady Grove Metro access. The highest-ROI basement project for Rockville homeowners in transit-accessible neighborhoods.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🛏️</div>
            <h3>Guest Suite</h3>
            <p>Bedroom with egress window plus bathroom — a self-contained guest space that adds a legal bedroom to the home&apos;s count. Particularly practical in Rockville&apos;s larger single-family colonials where the basement provides dedicated guest space without displacing main-floor rooms.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🏋️</div>
            <h3>Home Gym</h3>
            <p>Rubber flooring, mirror wall, and dedicated ventilation — a functional gym in even a modest footprint. Popular in Rockville&apos;s health-conscious, active community, particularly in Fallsgrove and Congressional single-family homes.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🎬</div>
            <h3>Media Room</h3>
            <p>Dedicated screen room with projector or large display, acoustic treatment, and blackout shades. Practical in Rockville&apos;s larger single-family home basements — an upgrade from a standard family room for homeowners who want a true cinematic experience.</p>
          </div>
        </div>

        {/* WATERPROOFING */}
        <h2>Basement Moisture Assessment in Rockville Homes</h2>
        <p>
          Rockville&apos;s diverse housing stock spans construction eras that approached basement moisture management very differently. Older mid-century homes along Veirs Mill Road and in Twinbrook have foundations that predate modern waterproofing practices. Newer construction in Fallsgrove and King Farm has better baseline moisture control but still requires assessment before finishing.
        </p>

        <div className="spec-box">
          <h3>💧 What We Check Before Finishing Any Rockville Basement</h3>
          <ul>
            <li><strong>Foundation type by era:</strong> Pre-1960 homes may have block foundations; 1960s–90s construction typically has poured concrete; 2000s construction (King Farm, Fallsgrove) has poured concrete with better waterproofing membranes. Each requires a different moisture assessment approach.</li>
            <li><strong>Efflorescence and staining:</strong> White mineral deposits on walls or water staining at the floor-wall joint indicate historical moisture movement — requires investigation before finishing.</li>
            <li><strong>Sump pump condition:</strong> Age, cycling frequency, capacity, and battery backup status. Rockville&apos;s elevated position and clay-heavy soils in some neighborhoods create groundwater conditions that require active sump management in some homes.</li>
            <li><strong>Window wells:</strong> Clogged window well drains are a frequent source of moisture intrusion in Rockville&apos;s mid-century and 1970s–80s homes — easily corrected but important to address before finishing.</li>
            <li><strong>Downspout discharge:</strong> Downspouts discharging within 4 feet of the foundation — common in Rockville&apos;s older neighborhoods where extensions have deteriorated — redirect significant volumes of water toward the foundation during heavy rain.</li>
            <li>DMV-GC Group provides a written moisture assessment with findings and specific recommendations before any design or pricing is finalized for any Rockville basement renovation.</li>
          </ul>
        </div>

        {/* NEIGHBORHOODS */}
        <h2>Serving All Rockville, MD Neighborhoods for Basement Remodeling</h2>

        <div className="neighborhood-grid">
          <div className="neighborhood-card">
            <h3>King Farm</h3>
            <p>Award-winning planned community with active HOA. Mix of townhomes and single-family homes — compact lower levels in townhomes, larger basements in single-family homes. City of Rockville permits and HOA coordination both managed by DMV-GC Group.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Fallsgrove</h3>
            <p>Newer planned community with 2000s single-family construction. Generous basement footprints with poured concrete foundations and often existing plumbing rough-ins. City of Rockville permits and HOA coordination included.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Congressional</h3>
            <p>Established 1970s–80s colonials in one of Rockville&apos;s most desirable neighborhoods. Full basements, standard ceiling heights, well-maintained homes — excellent candidates for multi-room finishing. Jurisdiction varies by specific address — always verified.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Twinbrook</h3>
            <p>Mid-century neighborhood with 1950s–60s Cape Cods and colonials. Block or poured concrete foundations, standard basement depths. Recreation rooms, home offices, and ADU conversions are the most common project types. Strong rental demand from Metro proximity.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Veirs Mill Road Corridor</h3>
            <p>Established corridor with mid-century ranches and split-levels. Split-level lower levels are partially above grade — natural light, workable ceiling heights. City of Rockville permits apply for most of this area.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Historic Rockville / West End</h3>
            <p>Older homes near the historic town center — some pre-WWII construction. Older basement conditions warrant thorough assessment of foundation type, ceiling heights, and systems before finalizing scope and budget. City of Rockville permits apply.</p>
          </div>
        </div>

        {/* COST TABLE */}
        <h2>Basement Remodeling Cost in Rockville, MD</h2>
        <p>
          Here is a realistic cost breakdown for <strong>basement remodeling in Rockville, Maryland</strong>. City of Rockville permit fees are comparable to county fees but processed through the City&apos;s own system:
        </p>

        <div className="table-responsive">
          <div className="table-holder">
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
                  <td>Townhome Basement Finishing (King Farm)</td>
                  <td>$18,000 – $38,000</td>
                  <td>Framing, drywall, LVP or carpet, recessed lighting, electrical, HOA coordination, City permit</td>
                </tr>
                <tr>
                  <td>Single-Family Full Basement Finishing</td>
                  <td>$28,000 – $58,000</td>
                  <td>Full framing, drywall, flooring, lighting, electrical, HVAC extension, City permit</td>
                </tr>
                <tr>
                  <td>Basement Bathroom Addition</td>
                  <td>$16,000 – $36,000</td>
                  <td>Below-grade plumbing (ejector pump if needed), full bathroom build-out, tile, fixtures</td>
                </tr>
                <tr>
                  <td>Egress Window Installation</td>
                  <td>$3,800 – $8,500</td>
                  <td>Concrete cutting, window well, drainage, window installation, interior finishing, City permit</td>
                </tr>
                <tr>
                  <td>Home Office Buildout (within finished basement)</td>
                  <td>$8,000 – $20,000</td>
                  <td>Built-in cabinetry, dedicated circuits, task lighting, soundproofing</td>
                </tr>
                <tr>
                  <td>Wet Bar / Entertainment Area</td>
                  <td>$12,000 – $30,000</td>
                  <td>Custom cabinetry, countertops, sink, refrigeration, plumbing &amp; electrical</td>
                </tr>
                <tr>
                  <td>Mid-Range Full Renovation with Bathroom</td>
                  <td>$40,000 – $75,000</td>
                  <td>Full finishing, bathroom addition, egress window, City permit, HOA coordination</td>
                </tr>
                <tr>
                  <td>Full ADU Basement Conversion</td>
                  <td>$65,000 – $115,000</td>
                  <td>Full finishing, egress windows, separate entrance, kitchen, bathroom, fire separation, City COO</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="tip">
          💡 <strong>Fallsgrove &amp; King Farm Tip:</strong> Many Fallsgrove single-family homes were built with a plumbing rough-in already installed in the basement slab. Completing an existing rough-in — rather than cutting new trenches for plumbing — is significantly less expensive. DMV-GC Group checks for existing rough-ins during every Fallsgrove and King Farm consultation. If one is in place, it directly reduces the cost of adding a basement bathroom.
        </div>

        {/* MID PAGE CTA */}
        <div className="cta-banner">
          <h2>Get a Free Basement Remodeling Estimate in Rockville</h2>
          <p>We&apos;ll visit your Rockville home, confirm your permit jurisdiction, assess ADU feasibility, and provide a detailed estimate — at no cost and no obligation.</p>
          <Link href="/contact-us" className="cta-btn">Schedule Free In-Home Consultation</Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
        </div>

        {/* PROCESS */}
        <h2>Our Basement Remodeling Process in Rockville</h2>

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
        <h2>What Rockville Homeowners Say About DMV-GC Group</h2>

        <div className="review-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;Our King Farm townhome basement was small but DMV-GC Group designed a layout that makes it feel like a proper room — home office on one side, sitting area on the other, half bath added. They handled the King Farm HOA process and the City of Rockville permits without any involvement from us.&quot;</p>
            <div className="review-author">&mdash; Verified Homeowner · <span className="review-location">King Farm, Rockville MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;Our Fallsgrove colonial had a plumbing rough-in in the basement we didn&apos;t know about. DMV-GC Group found it during the consultation and it saved us $8,000 on the bathroom addition — no trench cutting needed. That&apos;s the kind of thing you only know if you actually know what you&apos;re doing.&quot;</p>
            <div className="review-author">&mdash; Verified Homeowner · <span className="review-location">Fallsgrove, Rockville MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;We live near Twinbrook and converted our basement to a rental ADU. DMV-GC Group handled the City of Rockville permits and the Certificate of Occupancy — both of which I had no idea how to navigate. We&apos;ve been renting the unit for $1,600/month. Best decision we&apos;ve made with this house.&quot;</p>
            <div className="review-author">&mdash; Verified Homeowner · <span className="review-location">Twinbrook, Rockville MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;Our Congressional colonial had a full unfinished basement — 1,100 sq ft. DMV-GC Group finished it into a recreation room, guest suite with egress window and bathroom, and a wet bar. The project came in on budget and on schedule. The quality of the finish work is excellent.&quot;</p>
            <div className="review-author">&mdash; Verified Homeowner · <span className="review-location">Congressional, Rockville MD</span></div>
          </div>
        </div>

        <div className="highlight">
          <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> DMV-GC Group serves all of Rockville&apos;s neighborhoods — from King Farm townhomes to Congressional colonials — with the same licensed team, City of Rockville permit expertise, and 1-year workmanship warranty on every project.</p>
        </div>

        {/* SERVICE AREAS */}
        <h2>Serving Rockville and Surrounding Areas for Basement Remodeling</h2>

        <div className="areas-grid">
          <span className="area-pill">Rockville, MD</span>
          <span className="area-pill">King Farm</span>
          <span className="area-pill">Fallsgrove</span>
          <span className="area-pill">Congressional</span>
          <span className="area-pill">Twinbrook</span>
          <span className="area-pill">Veirs Mill</span>
          <span className="area-pill">North Bethesda</span>
          <span className="area-pill">Gaithersburg</span>
          <span className="area-pill">Garrett Park</span>
          <span className="area-pill">Potomac</span>
        </div>

        <div className="nearby-box">
          <h3>Also serving North Bethesda, MD — directly south of Rockville</h3>
          <p>DMV-GC Group is headquartered in North Bethesda at 11810 Grand Park Ave Suite 500 — making Rockville one of our closest service areas. We complete basement renovations throughout North Bethesda with the same licensed team and quality standards. <Link href="/service/basement-remodeling">View our full basement remodeling service page &rarr;</Link></p>
        </div>

        {/* FAQ */}
        <h2>Frequently Asked Questions — Basement Remodeling in Rockville, MD</h2>
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
          <h2>Explore Our Other Remodeling Services in Rockville</h2>
          <ul>
            <li><Link href="/service/kitchen-remodeling/rockville-md">Kitchen Remodeling in Rockville, MD</Link></li>
            <li><Link href="/service/bathroom-remodeling">Bathroom Remodeling in Rockville, MD</Link></li>
            <li><Link href="/service/home-additions">Home Additions in Rockville, MD</Link></li>
            <li><Link href="/service/adu">ADU Construction in Rockville, MD</Link></li>
            <li><Link href="/service/flooring-remodeling">Flooring Installation in Rockville, MD</Link></li>
            <li><Link href="/service/design-build">Design-Build Contractor in Rockville, MD</Link></li>
          </ul>
        </div>

        {/* FINAL CTA */}
        <div className="cta-banner">
          <h2>Ready to Transform Your Rockville Basement?</h2>
          <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. Available 7 days a week throughout Rockville and the DMV area.</p>
          <Link href="/contact-us" className="cta-btn">Get Free Basement Estimate in Rockville &rarr;</Link>
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
