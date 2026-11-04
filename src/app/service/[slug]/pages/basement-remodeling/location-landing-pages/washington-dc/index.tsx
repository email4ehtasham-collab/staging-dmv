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
      "description": "DLCP-licensed design-build general contractor serving Washington, DC. Specializing in rowhouse basement remodeling, English basement ADU conversions, ejector pump bathroom additions, and historic district basement renovation across all DC neighborhoods.",
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
        { "@type": "City", "name": "Washington", "sameAs": "https://en.wikipedia.org/wiki/Washington,_D.C." }
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
      "@id": "https://www.dmv-gc.com/service/basement-remodeling/washington-dc#service",
      "serviceType": "Basement Remodeling",
      "name": "Basement Remodeling in Washington, DC",
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Washington", "sameAs": "https://en.wikipedia.org/wiki/Washington,_D.C." },
      "description": "Full-service basement remodeling in Washington, DC. Rowhouse basement finishing, English basement ADU conversions, below-grade bathroom additions with ejector pumps, home offices, and family rooms — serving all DC neighborhoods with DLCP license, DC DOB permits, and HPRB historic district coordination.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "35000", "maxPrice": "175000", "priceCurrency": "USD" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Basement Remodeling", "item": "https://www.dmv-gc.com/service/basement-remodeling" },
        { "@type": "ListItem", "position": 4, "name": "Washington, DC", "item": "https://www.dmv-gc.com/service/basement-remodeling/washington-dc" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does basement remodeling cost in Washington, DC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Basement remodeling in Washington, DC typically costs between $35,000 and $175,000 depending on scope and home type. A standard rowhouse basement finishing runs $35,000–$65,000. A mid-range basement with bathroom (ejector pump) and home office runs $55,000–$90,000. A full English basement ADU conversion with separate entrance, kitchen, and legal rental unit typically costs $80,000–$140,000. Basement work in DC's historic districts (Capitol Hill, Georgetown, Dupont Circle) may add complexity for any exterior modifications. DMV-GC Group provides free in-home consultations with detailed estimates."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group hold a DC DLCP license for basement remodeling in Washington, DC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Washington DC DLCP (Department of Licensing and Consumer Protection) license — required for all home improvement work in the District of Columbia. A Maryland MHIC license alone does not authorize work in DC. Any contractor performing basement renovation work in DC without a valid DLCP license is operating illegally. DMV-GC Group holds both MHIC (Maryland) and DLCP (DC) licenses, covering work throughout the DMV area."
          }
        },
        {
          "@type": "Question",
          "name": "What is an English basement in Washington, DC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An English basement is a semi-below-grade space in a DC rowhouse — partially below street level but with windows above grade on the front or rear of the home, allowing natural light. English basements in DC are commonly converted into separate rental units (often called 'English basement apartments'), with their own entrance typically at the below-grade front door or a rear entrance. Converting a DC rowhouse English basement into a legal rental unit requires DC DOB permits, a Certificate of Occupancy, and often a separate electric meter — all of which DMV-GC Group handles in-house."
          }
        },
        {
          "@type": "Question",
          "name": "Do DC basement bathrooms require ejector pumps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In many cases, yes. DC rowhouse basements are typically below the city sewer line, which means waste from a below-grade bathroom cannot drain by gravity into the main drain. An ejector pump (also called a sewage ejector) receives waste from the below-grade bathroom fixtures in a sealed pit, then pumps it up to the gravity drain line. DMV-GC Group's licensed plumbers assess the relative elevation of the existing drain line versus the proposed bathroom fixtures for every DC basement bathroom addition — confirming whether an ejector pump is needed and sizing it correctly for the fixture count."
          }
        },
        {
          "@type": "Question",
          "name": "Does DC's historic district designation affect basement remodeling?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For interior basement renovation — finishing, framing, drywall, flooring — DC historic district designation typically does not add regulatory requirements beyond standard DC DOB permits. However, any exterior modification visible from a public street — including new egress windows in the front of a rowhouse, new exterior doors at the front facade, or changes to the English basement entrance — may require Historic Preservation Review Board (HPRB) review or a Certificate of No Objection from the State Historic Preservation Office. DMV-GC Group assesses any exterior scope items for HPRB implications during the consultation for every DC historic district project."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a basement remodel take in Washington, DC?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most DC basement renovations take 7–14 weeks from construction start to completion. A standard rowhouse basement finishing takes 6–9 weeks. A full English basement ADU conversion takes 10–14 weeks. DC DOB permit processing typically takes 4–8 weeks before construction begins. HPRB review for exterior modifications adds additional time where required. DMV-GC Group manages the complete timeline in-house."
          }
        }
      ]
    }
  ]
};

const stepsData = [
  {
    num: 1,
    title: "Free In-Home Consultation \u2014 English Basement Assessment",
    desc: "We visit your DC rowhouse and assess the full basement stack \u2014 English basement level configuration, ceiling heights, existing entrance and window locations, moisture conditions, existing drain elevation for ejector pump assessment, galvanized plumbing presence, and party wall considerations. No cost, no obligation."
  },
  {
    num: 2,
    title: "Ejector Pump & Plumbing Feasibility Assessment",
    desc: "Our licensed plumber assesses the existing drain invert elevation relative to the proposed bathroom floor elevation \u2014 confirming whether gravity drain is possible or an ejector pump is required, and sizing the pump if needed. This is documented before any bathroom is priced."
  },
  {
    num: 3,
    title: "HPRB Assessment for Any Exterior Work",
    desc: "For projects in DC historic districts that involve any exterior modification \u2014 new window opening, new entrance door, changes to the English basement facade \u2014 we assess whether HPRB review or a Certificate of No Objection is required and advise on the most efficient path to approval before design is finalized."
  },
  {
    num: 4,
    title: "Custom Design & DC DOB Permit Filing",
    desc: "Our design team develops the floor plan and our permit team prepares all required drawings and files all applications with DC\u2019s Department of Buildings. For ADU projects, we simultaneously initiate the Certificate of Occupancy process. HPRB and DOB applications run concurrently wherever possible."
  },
  {
    num: 5,
    title: "Construction \u2014 Ejector Pit, Framing, Mechanicals, Finishes",
    desc: "Ejector pit excavation and installation happens first where required. Then electrical rough-in, plumbing rough-in including ejector system, framing, HVAC extension, drywall, flooring, kitchen, bathroom tile and fixtures, and all finish work \u2014 coordinated by a dedicated DC project manager throughout."
  },
  {
    num: 6,
    title: "DC DOB Inspections, COO & 1-Year Warranty",
    desc: "We manage all required DC DOB inspections \u2014 rough framing, rough electrical, rough plumbing, and final \u2014 plus the Certificate of Occupancy inspection for ADU projects. After DC sign-off, we conduct a thorough walkthrough, address every punch list item, and activate your 1-year workmanship warranty."
  }
];

const faqData = [
  {
    eventKey: "0",
    question: "How much does basement remodeling cost in Washington, DC?",
    answer: "Basement remodeling in DC typically costs $35,000\u2013$175,000 depending on scope. A standard rowhouse basement finishing runs $35,000\u2013$65,000. A mid-range renovation with bathroom and office runs $55,000\u2013$90,000. A full English basement ADU conversion costs $80,000\u2013$140,000. Projects in historic districts with exterior modifications add HPRB review costs. DMV-GC Group provides free in-home consultations with itemized estimates for every DC basement scope."
  },
  {
    eventKey: "1",
    question: "Does DMV-GC Group hold a DC DLCP license for basement renovation work?",
    answer: "Yes. DMV-GC Group holds a Washington DC DLCP (Department of Licensing and Consumer Protection) license \u2014 legally required for all home improvement work in DC. A Maryland MHIC license does not authorize DC work. We also hold a Maryland MHIC license, making us one of the few contractors in the DMV area fully licensed for both jurisdictions. You can verify our DLCP license at DC\u2019s online licensing portal."
  },
  {
    eventKey: "2",
    question: "What is an English basement and can it be converted to a rental unit?",
    answer: "An English basement is the semi-below-grade level of a DC rowhouse \u2014 partially below street grade on the front with its own separate entrance typically below the main stoop. Yes, English basements can be converted to legal rental units with a DC Certificate of Occupancy, making them a legal ADU. The conversion requires a separate entrance (often already in place), egress window compliance in sleeping areas, full kitchen, full bathroom, fire-rated ceiling separation, and a COO \u2014 all of which DMV-GC Group designs, builds, and permits."
  },
  {
    eventKey: "3",
    question: "Do DC basement bathrooms require ejector pumps?",
    answer: "In many cases yes. DC rowhouse basements are often at or below the elevation of the gravity sewer line, meaning waste from below-grade fixtures cannot drain by gravity. An ejector pump \u2014 a sealed pit in the basement floor with a pump that pushes waste up to the gravity drain line \u2014 is required when the proposed bathroom floor elevation is below the existing drain invert. DMV-GC Group\u2019s licensed plumbers assess this on every DC basement bathroom project before pricing."
  },
  {
    eventKey: "4",
    question: "Does DC\u2019s historic district designation affect basement remodeling?",
    answer: "For interior work only \u2014 no. HPRB reviews exterior changes, not interior renovation. Interior finishing, framing, drywall, bathrooms, and kitchens proceed with standard DC DOB permits in historic districts. However, any exterior modification \u2014 new window opening, new entrance door, changes to the front facade \u2014 in a historic district requires HPRB review or a Certificate of No Objection before DOB permits are issued. DMV-GC Group assesses every DC project for HPRB applicability during the consultation."
  },
  {
    eventKey: "5",
    question: "How long do DC DOB permits take for basement remodeling?",
    answer: "DC DOB permit processing for basement renovation typically takes 4\u20138 weeks from application to permit issuance. Projects that also require HPRB review add 4\u20138 additional weeks for the historic review process. DMV-GC Group submits all applications as early as possible and runs DOB and HPRB applications simultaneously where applicable to minimize the pre-construction timeline."
  }
];

export default function BasementWashingtonDC() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => { setActiveMenuItem("service"); }, []);
  return (
    <div className="city-service-detail-page basement-washington-dc">
      <div className="container">

        {/* BREADCRUMB */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>&rsaquo;</span>
          <Link href="/services">Services</Link><span>&rsaquo;</span>
          <Link href="/service/basement-remodeling">Basement Remodeling</Link><span>&rsaquo;</span>
          Washington, DC
        </nav>

        {/* HERO */}
        <div className="hero">
          <div className="hero-location-tag">📍 Serving Washington, DC</div>
          <h1>Basement Remodeling Contractor in Washington, DC</h1>
          <div className="hero-meta">
            <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
            <span className="badge red">✓ DLCP Licensed — Washington DC</span>
            <span className="badge">✓ MHIC Licensed — Maryland</span>
            <span className="badge">✓ 1-Year Warranty</span>
            <span className="badge dark">📞 +1 240-730-1292</span>
          </div>
        </div>

        {/* DLCP BANNER */}
        <div className="dlcp-banner">
          <div className="icon">🏛️</div>
          <div>
            <h3>DC Basement Remodeling Requires a DLCP License — Not Just a Maryland MHIC</h3>
            <p>Washington DC is a separate jurisdiction from Maryland — a Maryland MHIC license alone does not legally authorize home improvement work in the District of Columbia. All basement renovation work in DC requires a contractor licensed by DC&apos;s Department of Licensing and Consumer Protection (DLCP). DMV-GC Group holds both a Maryland MHIC license and a Washington DC DLCP license — one of the relatively small number of contractors in the DMV area fully licensed to work in both jurisdictions. Before hiring any contractor for DC basement work, verify their DLCP license at DC&apos;s licensing portal.</p>
          </div>
        </div>

        {/* INTRO */}
        <div className="intro-box">
          Looking for a trusted <strong>basement remodeling contractor in Washington, DC</strong>? DC&apos;s rowhouse neighborhoods — Capitol Hill, Petworth, Columbia Heights, Shaw, Bloomingdale, Takoma, and dozens of others — sit on top of basements that represent some of the most practical renovation opportunities in the city. Whether it&apos;s finishing a raw utility space into a home office and family room, converting an English basement into a legal rental unit, or adding a below-grade bathroom with an ejector pump, DMV-GC Group&apos;s DLCP-licensed design-build team handles every scope of DC basement renovation — managing DC DOB permits, HPRB historic district coordination, and all construction under one contract.
        </div>

        {/* TRUST BAR */}
        <div className="trust-bar">
          <div className="trust-item">
            <div className="icon">🏛️</div>
            <strong>DLCP Licensed</strong>
            <span>Washington DC — legally required</span>
          </div>
          <div className="trust-item">
            <div className="icon">📋</div>
            <strong>DC DOB Permits</strong>
            <span>All permits handled in-house</span>
          </div>
          <div className="trust-item">
            <div className="icon">⭐</div>
            <strong>4.9-Star Rated</strong>
            <span>97+ verified homeowner reviews</span>
          </div>
          <div className="trust-item">
            <div className="icon">🛡️</div>
            <strong>1-Year Warranty</strong>
            <span>Bonded, insured, licensed</span>
          </div>
        </div>

        {/* SERVICES */}
        <h2>Basement Remodeling Services We Offer in Washington, DC</h2>
        <p>
          DC&apos;s rowhouse stock — primarily built between the 1880s and 1940s across Northwest, Northeast, and Southeast DC — presents basement renovation opportunities that are specific to this housing type. DMV-GC Group handles every scope of DC basement renovation with the DLCP license, DC permit expertise, and historic district experience the District requires.
        </p>

        <div className="service-grid">
          <div className="service-item">Rowhouse Basement Finishing</div>
          <div className="service-item">English Basement ADU Conversion</div>
          <div className="service-item">Below-Grade Bathroom with Ejector Pump</div>
          <div className="service-item">Home Office Buildout</div>
          <div className="service-item">Family Room &amp; Recreation Room</div>
          <div className="service-item">Guest Suite with Egress Window</div>
          <div className="service-item">Separate Entrance Addition</div>
          <div className="service-item">Kitchenette / Wet Bar</div>
          <div className="service-item">Waterproofing &amp; Moisture Management</div>
          <div className="service-item">Galvanized Plumbing Replacement</div>
          <div className="service-item">HPRB Historic District Coordination</div>
          <div className="service-item">DC DOB Permit Processing</div>
        </div>

        {/* AUTHOR BOX */}
        <div className="author-box">
          <div className="author-avatar">🏠</div>
          <div className="author-info">
            <h4>About DMV-GC Group — Washington DC&apos;s DLCP-Licensed Basement Remodeling Contractor</h4>
            <p>DMV-GC Group holds a Washington DC DLCP license and a Maryland MHIC license — making us one of the few design-build contractors in the DMV area fully authorized to complete renovation work in both jurisdictions. Our team has completed basement renovations and English basement ADU conversions throughout DC&apos;s rowhouse neighborhoods, and we manage DC DOB permits and HPRB historic district coordination in-house. We back every DC basement project with a 1-year workmanship warranty.</p>
            <div className="author-creds">
              <span className="cred red">DLCP Licensed — DC</span>
              <span className="cred">MHIC Licensed — MD</span>
              <span className="cred">Licensed Plumbers</span>
              <span className="cred">Licensed Electricians</span>
              <span className="cred">4.9★ Rated</span>
              <span className="cred">1-Year Warranty</span>
            </div>
          </div>
        </div>

        {/* DC ROWHOUSE BASEMENTS */}
        <h2>DC Rowhouse Basements — What Makes Them Different</h2>
        <p>
          A DC rowhouse basement is not the same as a suburban colonial basement. The rowhouse form — attached on both sides, built to the lot line, with a narrow footprint and often party walls shared with adjacent homes — creates specific basement renovation considerations that don&apos;t exist in detached suburban construction.
        </p>

        <div className="english-basement-grid">
          <div className="eb-card">
            <h3>🏠 The English Basement</h3>
            <p>Many DC rowhouses have an &quot;English basement&quot; — a semi-below-grade level with its own front entrance below the main stoop. This level is typically 3–4 feet below street grade on the front and at or above grade on the rear, giving it natural light from rear windows. English basements in DC are the most commonly converted basement type — into rental units, home offices, in-law suites, and guest apartments. They often have their own entrance already in place, which simplifies the separate entrance requirement for ADU conversion.</p>
          </div>
          <div className="eb-card">
            <h3>🪟 Below-Grade vs Semi-Grade</h3>
            <p>Some DC rowhouses have a true below-grade basement below the English basement level — a sub-basement used for mechanical equipment and storage. These fully below-grade spaces have very limited headroom (often 5&apos;6&quot;–6&apos;6&quot;) and cannot be finished as habitable space but can be used for utility and storage. DMV-GC Group assesses the full vertical stack of a DC rowhouse basement during every consultation to identify what is and isn&apos;t finishable.</p>
          </div>
          <div className="eb-card">
            <h3>🏗️ Party Walls</h3>
            <p>DC rowhouses share walls with adjacent properties — party walls. Any renovation work that affects a party wall — structural modifications, penetrations for plumbing or electrical, or opening up an adjacent wall — requires neighbor notification and in many cases a party wall agreement before work can begin. DMV-GC Group identifies any party wall implications during the design phase and advises on the correct path before any work is designed or priced.</p>
          </div>
          <div className="eb-card">
            <h3>📐 Narrow Footprint</h3>
            <p>DC rowhouses are typically 15–20 feet wide — much narrower than a detached suburban home. This means the basement floor plan must be designed with the narrow dimension as the primary constraint. Efficient layout design — maximizing usable space without dead zones or awkward circulation — is essential in DC rowhouse basements. DMV-GC Group&apos;s design team has experience creating practical floor plans within DC&apos;s typical 15–20 foot widths.</p>
          </div>
        </div>

        {/* ENGLISH BASEMENT ADU */}
        <h2>English Basement ADU Conversions in Washington, DC</h2>
        <p>
          Converting a DC rowhouse English basement into a legal rental unit is one of the highest-ROI renovations available to DC homeowners. In a city where basement apartments rent for $1,600–$2,800/month depending on neighborhood, size, and finishes, the return on a quality conversion is compelling — and the Certificate of Occupancy that makes it legal adds directly to the home&apos;s appraised value.
        </p>
        <p>
          A legal English basement ADU in DC requires specific components under DC building code:
        </p>

        <div className="spec-box">
          <h3>🏘️ DC Legal English Basement ADU — Required Components</h3>
          <ul>
            <li><strong>Certificate of Occupancy (COO):</strong> Issued by the DC Department of Buildings after final inspection — the document that legally authorizes the basement to be occupied as a residential dwelling unit. DMV-GC Group manages the COO application and all required DC DOB inspections as a standard part of every English basement ADU project.</li>
            <li><strong>Separate entrance:</strong> An English basement&apos;s existing front entrance (the below-stoop door) typically satisfies this requirement. Where no separate entrance exists, DMV-GC Group designs and builds one — either from the front below grade or from a rear alley or yard door.</li>
            <li><strong>Egress window in every sleeping area:</strong> DC code requires minimum egress window dimensions in any room used as a bedroom. For English basements with rear windows above grade, existing rear windows may already satisfy egress requirements. Front windows that are below grade require egress window wells. DMV-GC Group assesses existing window configurations for egress compliance during the consultation.</li>
            <li><strong>Full kitchen:</strong> A legal dwelling unit requires food preparation capability. In English basement ADUs, a full kitchen with range, refrigerator, dishwasher, and sink is standard — both for rental appeal and for code compliance.</li>
            <li><strong>Full bathroom:</strong> Toilet, sink, and shower or tub — all with properly permitted plumbing, including ejector pump where needed for below-grade fixtures (see section below).</li>
            <li><strong>Separate electrical meter (recommended):</strong> A second electrical meter for the ADU allows the tenant to pay their own electric bill separately from the main unit. DMV-GC Group coordinates meter separation with Pepco as part of most English basement ADU projects.</li>
            <li><strong>Fire-rated ceiling assembly:</strong> The floor-ceiling assembly between the ADU and the main dwelling must achieve minimum fire separation — typically 1-hour rating, addressed through proper drywall specification on the basement ceiling. This protects both the tenant below and the owner above.</li>
            <li><strong>Smoke and CO detectors:</strong> Interconnected detectors in every room and near sleeping areas — verified by DC DOB inspector as part of COO process.</li>
            <li><strong>Minimum ceiling height:</strong> DC code requires 7 feet in habitable rooms. English basements in DC typically measure 7&apos;0&quot;–8&apos;6&quot; — most meet this requirement without intervention, though ductwork and pipe routing may reduce clearance in some areas.</li>
          </ul>
        </div>

        <div className="tip">
          💡 <strong>DC English Basement ADU ROI:</strong> English basement ADUs in DC&apos;s Northwest rowhouse neighborhoods (Capitol Hill, Columbia Heights, Petworth, Bloomingdale) rent for $1,600–$2,800/month depending on size and finishes. A full conversion costing $80,000–$120,000 pays for itself in 4–6 years in rental income alone — and adds $100,000–$160,000 to the home&apos;s appraised value in DC&apos;s premium real estate market.
        </div>

        {/* EJECTOR PUMPS */}
        <h2>Below-Grade Bathrooms in DC Rowhouses — The Ejector Pump Requirement</h2>
        <p>
          Adding a bathroom to a DC rowhouse basement is one of the most consistently requested renovation items — and one where contractors unfamiliar with below-grade plumbing create problems. The core issue: DC&apos;s sewer system runs at a fixed elevation below street grade. In many rowhouses, the basement slab is at or near the same elevation as the sewer line — meaning waste from a below-grade bathroom cannot drain by gravity into the sewer. An ejector pump is required.
        </p>

        <div className="spec-box">
          <h3>🔧 Ejector Pump — How It Works in a DC Rowhouse Basement</h3>
          <ul>
            <li><strong>What an ejector pump does:</strong> An ejector pump (sewage ejector) receives waste from below-grade bathroom fixtures — toilet, sink, shower — in a sealed fiberglass or polyethylene pit in the basement floor. When the pit reaches a set level, the pump activates and pushes the waste up through a discharge pipe to the gravity drain line above, which then flows by gravity to the street sewer. The system is completely sealed and odor-controlled when correctly installed.</li>
            <li><strong>When is an ejector pump needed?</strong> DMV-GC Group&apos;s licensed plumbers assess the elevation of the existing drain stack relative to the proposed bathroom floor elevation on every DC basement bathroom project. If the proposed toilet flange elevation is below the existing drain invert, an ejector pump is required. This is true for most DC rowhouse basements where the bathroom is on the basement level.</li>
            <li><strong>Ejector pit installation:</strong> The ejector pit requires cutting through the concrete basement slab — typically an 18&quot;–24&quot; diameter excavation to a depth of 24&quot;–30&quot; below the slab. The sealed pit is set in the excavation and the slab is patched around it. The pit must be accessible for maintenance — it is typically covered with a sealed lid that sits flush with the finished floor.</li>
            <li><strong>Venting:</strong> The ejector system requires a separate vent stack running up through the home to the roof — connecting to the main vent stack or running its own independent vent. Routing this vent through a DC rowhouse requires careful planning to avoid conflicts with existing framing, finished spaces above, and the narrow footprint.</li>
            <li><strong>Pump sizing:</strong> Ejector pumps are sized based on the number of fixtures they serve and the vertical lift required. Undersized pumps fail prematurely. DMV-GC Group&apos;s plumbers size every ejector pump to the specific fixture count and vertical elevation difference of your DC basement.</li>
            <li><strong>Gravity drain vs ejector — when gravity works:</strong> In some DC rowhouses where the basement slab is significantly above the sewer line — typically in homes on higher ground or with unusually deep sewer connections — gravity drain may be possible without an ejector. DMV-GC Group assesses this during the consultation, always confirming drain feasibility before pricing any DC basement bathroom addition.</li>
          </ul>
        </div>

        {/* HISTORIC DISTRICTS */}
        <h2>Historic District Basement Renovation in Washington, DC</h2>
        <p>
          A significant portion of DC&apos;s rowhouse neighborhoods are designated historic districts — meaning exterior modifications to homes in these areas require review by the DC Historic Preservation Review Board (HPRB) or a Certificate of No Objection from the State Historic Preservation Office before DC DOB permits can be issued.
        </p>
        <p>
          For <strong>interior</strong> basement renovations — finishing, framing, drywall, flooring, bathroom — historic district designation typically does not add permit requirements beyond standard DC DOB. The HPRB reviews exterior changes, not interior renovations.
        </p>
        <p>
          For <strong>exterior</strong> modifications that may be part of a basement renovation — new egress window openings, new exterior doors, changes to the English basement entrance, or modifications to the front facade below the stoop — HPRB review may be required in historic districts.
        </p>

        <div className="spec-box">
          <h3>🏛️ DC Historic Districts — What Triggers HPRB Review for Basement Projects</h3>
          <ul>
            <li><strong>New opening in front facade:</strong> Cutting a new window or door opening in the front facade of a rowhouse in a historic district requires HPRB review — even if the opening is at the English basement level below the stoop.</li>
            <li><strong>Changes to existing English basement entrance:</strong> Modifying the surround, door, or stoop configuration of an existing English basement entrance may require HPRB review or a Certificate of No Objection depending on the specific historic district and the nature of the change.</li>
            <li><strong>Rear modifications — generally not HPRB:</strong> Changes to the rear facade of a rowhouse — new rear door, rear egress window — typically do not require HPRB review because they are not visible from a public street. However, some historic districts extend review to alley-facing changes. DMV-GC Group assesses this on a district-by-district basis.</li>
            <li><strong>Interior modifications — not HPRB:</strong> All interior basement work — framing, drywall, flooring, bathroom, kitchen — does not require HPRB review regardless of historic district status.</li>
            <li><strong>Certificate of No Objection:</strong> For minor changes in historic districts, a faster &quot;Certificate of No Objection&quot; may be available from the State Historic Preservation Office rather than a full HPRB hearing. DMV-GC Group determines which path applies for each specific project and jurisdiction.</li>
            <li>DC historic districts where basement projects most commonly encounter HPRB review: Capitol Hill HD, Georgetown HD, Dupont Circle HD, Logan Circle HD, U Street HD, Strivers&apos; Section HD, 16th Street HD, and others. DMV-GC Group is familiar with the specific review requirements of each.</li>
          </ul>
        </div>

        <div className="note">
          ⚠️ <strong>DC Permit Note:</strong> DC DOB permit processing for basement renovation projects typically takes 4–8 weeks. For projects that also require HPRB review, add 4–8 additional weeks for the historic review process. DMV-GC Group initiates all permit and HPRB applications simultaneously wherever possible to minimize the total pre-construction timeline.
        </div>

        {/* USE TYPES */}
        <h2>Most Popular Basement Uses in DC Rowhouses</h2>

        <div className="use-type-grid">
          <div className="use-type-box">
            <div className="icon">🏘️</div>
            <h3>English Basement ADU</h3>
            <p>The highest-ROI basement project for DC homeowners — a legal, COO-permitted rental unit at $1,600–$2,800/month. Payback of 4–6 years in DC&apos;s premium rental market. Most popular in Northwest DC rowhouse neighborhoods.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">💼</div>
            <h3>Home Office</h3>
            <p>Dedicated remote work space — particularly practical in DC rowhouses where the narrow footprint limits private workspace on main floors. Built-in shelving, dedicated circuits, and soundproofing from the floors above.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🎮</div>
            <h3>Family Room</h3>
            <p>An open recreation space for everyday use — converting raw basement space into a comfortable lower-level family room adds livability without requiring the complexity of a full ADU conversion.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🛏️</div>
            <h3>Guest Suite / In-Law Suite</h3>
            <p>Bedroom with egress window compliance plus bathroom — a self-contained space for guests or family members that provides privacy without displacing main-floor rooms in a typically tight DC rowhouse footprint.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">🍸</div>
            <h3>Wet Bar &amp; Entertainment</h3>
            <p>Custom wet bar with cabinetry, countertops, under-counter refrigeration, and plumbing — integrated into an open entertainment space in DC rowhouses with English basements that get used for regular entertaining.</p>
          </div>
          <div className="use-type-box">
            <div className="icon">📚</div>
            <h3>Library / Study</h3>
            <p>Floor-to-ceiling built-in bookshelves and reading nook — a library that suits the character of DC&apos;s older rowhouses. Particularly popular in Capitol Hill and Georgetown, where the Victorian and Federal architecture inspires period-appropriate interior design.</p>
          </div>
        </div>

        {/* MOISTURE */}
        <h2>Basement Moisture in DC Rowhouses — What to Check Before Finishing</h2>
        <p>
          DC rowhouse basements have moisture considerations specific to urban infill construction. Many DC rowhouses were built in the late 19th and early 20th centuries with foundation walls that predate modern waterproofing. The dense urban environment — impervious surfaces, alley drainage, and the urban heat island effect — also creates different moisture conditions than suburban homes.
        </p>

        <div className="spec-box">
          <h3>💧 Pre-Renovation Moisture Assessment for DC Rowhouses</h3>
          <ul>
            <li><strong>Foundation wall type and condition:</strong> DC rowhouses from the 1880s–1910s typically have brick foundation walls — often the same brick as the above-grade structure. Brick foundations are porous and require interior moisture management rather than exterior waterproofing. Homes from the 1920s–40s may have poured concrete or block foundations.</li>
            <li><strong>Rear yard drainage:</strong> DC rowhouses typically have small rear yards — often paved or densely planted. Rear yard drainage that doesn&apos;t move water away from the foundation creates concentrated moisture exposure at the rear foundation wall. Downspout discharge at the rear should be directed to the alley or to a below-grade dry well, not discharged against the foundation.</li>
            <li><strong>Alley-adjacent moisture:</strong> Rowhouses with rear alley access sometimes experience moisture from the alley drainage slope directing water toward the rear foundation. DMV-GC Group checks alley grade relative to the foundation during every DC consultation.</li>
            <li><strong>Window well condition:</strong> Below-grade English basement windows and any sub-basement windows need functional window wells with working drains. Clogged window well drains are one of the most common moisture sources in DC rowhouse basements.</li>
            <li><strong>Sewer backup risk:</strong> DC rowhouses in some neighborhoods are served by combined sewer systems (storm and sanitary in one pipe). During heavy rain events, combined sewer overflow can cause basement backflow through floor drains or toilet connections. For ADU projects where the basement is occupied, a check valve or backflow preventer on the sewer connection is strongly recommended.</li>
            <li>DMV-GC Group provides a written moisture assessment with findings and recommendations before any DC basement renovation design is finalized.</li>
          </ul>
        </div>

        {/* NEIGHBORHOODS */}
        <h2>Serving All Washington, DC Neighborhoods for Basement Remodeling</h2>

        <div className="neighborhood-grid">
          <div className="neighborhood-card">
            <h3>Capitol Hill</h3>
            <div className="hist-tag">Historic District</div>
            <p>Dense rowhouse neighborhood with Victorian and Federal-style homes from the 1880s–1910s. English basement ADU conversions are extremely common here. HPRB review required for any exterior facade modifications. DC DOB permits for all work.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Petworth</h3>
            <p>Northwest DC rowhouse neighborhood with primarily early 20th-century construction. One of the most active English basement ADU conversion markets in the city — strong rental demand from Metro access. DC DOB permits, no historic district overlay for most of Petworth.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Columbia Heights</h3>
            <p>Dense mixed rowhouse and apartment neighborhood with Victorian-era through mid-century construction. Basement ADU conversions and home office buildouts are the dominant renovation types. DC DOB permits, some blocks in historic district overlay.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Shaw / Bloomingdale</h3>
            <p>Northwest DC neighborhoods with Victorian rowhouses from the 1880s–1910s. Active renovation market — English basement ADUs and family room finishing are the most common scopes. Parts of Shaw are in historic district overlay — HPRB assessment needed for exterior work.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Dupont Circle</h3>
            <div className="hist-tag">Historic District</div>
            <p>Prestigious NW DC neighborhood with late Victorian and Edwardian rowhouses. HPRB review required for exterior modifications. Interior basement finishing and English basement ADU conversions are permitted without HPRB. High-end finishes standard for this market.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Georgetown</h3>
            <div className="hist-tag">Historic District</div>
            <p>DC&apos;s most prominent historic district — all exterior modifications require HPRB review. Interior basement renovations proceed with standard DC DOB permits. Georgetown rowhouses are among the most valuable in the city; basement ADU conversions here command premium rents of $2,200–$2,800/month.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Takoma DC / 16th Street Heights</h3>
            <p>Northwest DC neighborhoods bordering Maryland with a mix of detached homes and rowhouses. Less restrictive historic overlay than inner-DC neighborhoods — more renovation flexibility. Strong rental market from proximity to Metro.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Northeast DC / Trinidad / Brookland</h3>
            <p>Diverse Northeast DC rowhouse neighborhoods with mid-century and Victorian construction. Growing renovation market — basement ADU conversions and family room finishing are active. DC DOB permits, limited historic district overlay in most of NE DC.</p>
          </div>
        </div>

        {/* COST TABLE */}
        <h2>Basement Remodeling Cost in Washington, DC</h2>
        <p>
          Here is a realistic cost breakdown for <strong>basement remodeling in Washington, DC</strong>. DC costs reflect the urban construction premium — labor, logistics, permit fees, and material delivery in a dense urban environment — compared to suburban Maryland work:
        </p>

        <div className="table-responsive">
          <div className="table-holder">
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Scope / Space Type</th>
                  <th>Typical Cost Range</th>
                  <th>What&apos;s Included</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rowhouse Basement Finishing (standard)</td>
                  <td>$35,000 – $65,000</td>
                  <td>Framing, drywall, LVP or carpet flooring, recessed lighting, electrical, paint, DC DOB permit</td>
                </tr>
                <tr>
                  <td>Below-Grade Bathroom with Ejector Pump</td>
                  <td>$22,000 – $45,000</td>
                  <td>Ejector pit excavation, pump, plumbing, full bathroom build-out, tile, fixtures, venting</td>
                </tr>
                <tr>
                  <td>Egress Window Installation</td>
                  <td>$5,000 – $11,000</td>
                  <td>Brick or concrete cutting, window well, drainage, window installation, interior finishing, permit</td>
                </tr>
                <tr>
                  <td>Kitchen / Kitchenette Installation</td>
                  <td>$18,000 – $42,000</td>
                  <td>Cabinetry, countertops, appliances, sink, plumbing, electrical, permits</td>
                </tr>
                <tr>
                  <td>Separate Entrance Addition</td>
                  <td>$6,000 – $16,000</td>
                  <td>New exterior door, steps, landing, brick work, waterproofing, permit</td>
                </tr>
                <tr>
                  <td>Separate Electrical Meter (Pepco)</td>
                  <td>$2,500 – $5,500</td>
                  <td>Sub-panel installation, meter base, Pepco coordination, electrical permit</td>
                </tr>
                <tr>
                  <td>Mid-Range Basement with Bathroom &amp; Office</td>
                  <td>$55,000 – $90,000</td>
                  <td>Full finishing, ejector pump bathroom, home office, egress window, DC DOB permit</td>
                </tr>
                <tr>
                  <td>English Basement ADU Conversion</td>
                  <td>$80,000 – $140,000</td>
                  <td>Full finishing, kitchen, bathroom with ejector, separate meter, fire separation, COO</td>
                </tr>
                <tr>
                  <td>English Basement ADU + HPRB Review</td>
                  <td>$85,000 – $155,000</td>
                  <td>All of above plus HPRB coordination for historic district exterior modifications</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="warning">
          ⚠️ <strong>Unlicensed Contractor Warning:</strong> DC basement renovation is an area where unlicensed contractors — or Maryland-licensed contractors without a DLCP license — regularly solicit work. Work completed by an unlicensed contractor in DC cannot be permitted, inspected, or legally sold with confidence. Before hiring any contractor for DC basement work, verify their DLCP license at DC&apos;s online licensing verification portal. DMV-GC Group&apos;s DLCP license is current, verifiable, and required before we set foot on any DC job site.
        </div>

        {/* CTA MID PAGE */}
        <div className="cta-banner">
          <h2>Get a Free Basement Remodeling Estimate in Washington, DC</h2>
          <p>We&apos;ll visit your DC rowhouse, assess your basement — English basement configuration, ejector pump feasibility, HPRB applicability — and provide a detailed estimate. No cost, no obligation.</p>
          <Link href="/contact-us" className="cta-btn">Schedule Free In-Home Consultation</Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
        </div>

        {/* PROCESS */}
        <h2>Our Basement Remodeling Process in Washington, DC</h2>

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
        <h2>What Washington, DC Homeowners Say About DMV-GC Group</h2>

        <div className="review-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;DMV-GC Group converted our Capitol Hill rowhouse English basement into a legal rental unit — kitchen, full bathroom with ejector pump, separate meter, and the DC Certificate of Occupancy. The tenant pays $2,100/month. The whole project was managed perfectly and the finish quality is excellent.&quot;</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">Capitol Hill, Washington DC</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;Our Petworth rowhouse basement is now a home office and family room that gets used every day. DMV-GC Group handled the DC DOB permits, assessed the ejector pump need for our bathroom addition, and finished the space beautifully. Everything on time, on budget. Highly recommend.&quot;</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">Petworth, Washington DC</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;We&apos;re in Dupont Circle historic district and were worried about HPRB. DMV-GC Group assessed our exterior scope and confirmed that our rear egress window addition didn&apos;t require HPRB review — only the standard DOB permit. Saved us weeks of review process and the basement apartment is now rented.&quot;</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">Dupont Circle, Washington DC</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;Two contractors we talked to didn&apos;t have DC DLCP licenses — they were just going to pull MD permits and hope no one noticed. DMV-GC Group is properly licensed for DC work. The difference in professionalism shows in how they handled the permits, the inspections, and the finished result.&quot;</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">Columbia Heights, Washington DC</span></div>
          </div>
        </div>

        <div className="highlight">
          <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> DMV-GC Group is one of the few design-build contractors serving the DMV area with both a Maryland MHIC license and a Washington DC DLCP license — legally authorized and experienced in both jurisdictions, for both suburban Maryland and DC rowhouse basement renovation.</p>
        </div>

        {/* SERVICE AREAS */}
        <h2>Serving All Washington, DC Neighborhoods for Basement Remodeling</h2>

        <div className="areas-grid">
          <span className="area-pill">Capitol Hill</span>
          <span className="area-pill">Petworth</span>
          <span className="area-pill">Columbia Heights</span>
          <span className="area-pill">Shaw</span>
          <span className="area-pill">Bloomingdale</span>
          <span className="area-pill">Dupont Circle</span>
          <span className="area-pill">Georgetown</span>
          <span className="area-pill">Logan Circle</span>
          <span className="area-pill">16th Street Heights</span>
          <span className="area-pill">Takoma DC</span>
          <span className="area-pill">Brookland</span>
          <span className="area-pill">Trinidad</span>
          <span className="area-pill">Northeast DC</span>
          <span className="area-pill">Chevy Chase DC</span>
        </div>

        <div className="nearby-box">
          <h3>Also serving Chevy Chase, MD — directly adjacent to DC&apos;s Chevy Chase neighborhood</h3>
          <p>DMV-GC Group completes basement renovations throughout Chevy Chase, MD — directly north of DC&apos;s Chevy Chase neighborhood along Connecticut Avenue. Our MHIC license covers all Maryland work, and our DLCP license covers all DC work — one contractor for both sides of the border. <Link href="/service/basement-remodeling/chevy-chase-md">View our Chevy Chase basement remodeling page &rarr;</Link></p>
        </div>

        {/* FAQ */}
        <h2>Frequently Asked Questions — Basement Remodeling in Washington, DC</h2>
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
          <h2>Explore Our Other Remodeling Services in Washington, DC</h2>
          <ul>
            <li><Link href="/service/kitchen-remodeling/washington-dc">Kitchen Remodeling in Washington, DC</Link></li>
            <li><Link href="/service/bathroom-remodeling/washington-dc">Bathroom Remodeling in Washington, DC</Link></li>
            <li><Link href="/service/home-additions">Home Additions &amp; Pop-Backs in Washington, DC</Link></li>
            <li><Link href="/service/adu">ADU Construction in Washington, DC</Link></li>
            <li><Link href="/service/design-build">Design-Build Contractor in Washington, DC</Link></li>
            <li><Link href="/service/electrical-services">Electrical Services in Washington, DC</Link></li>
          </ul>
        </div>

        {/* FINAL CTA */}
        <div className="cta-banner">
          <h2>Ready to Transform Your Washington, DC Basement?</h2>
          <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. DLCP-licensed and available 7 days a week throughout all DC neighborhoods.</p>
          <Link href="/contact-us" className="cta-btn">Get Free DC Basement Estimate &rarr;</Link>
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
