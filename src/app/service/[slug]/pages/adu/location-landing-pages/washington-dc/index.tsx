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
      "description":
        "DLCP-licensed design-build general contractor serving Washington, DC. Specializing in ADU construction for DC's rowhouse stock — English basement ADU conversions, basement apartment buildouts, and carriage house ADUs — with DC DOB permit expertise and HPRB historic district coordination.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "11810 Grand Park Ave, Suite 500",
        addressLocality: "North Bethesda",
        addressRegion: "MD",
        postalCode: "20852",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 39.0458, longitude: -77.1139 },
      areaServed: [
        { "@type": "City", name: "Washington", sameAs: "https://en.wikipedia.org/wiki/Washington,_D.C." },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "MHIC License",
          credentialCategory: "Maryland Home Improvement Contractor License",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "DLCP License",
          credentialCategory: "Washington DC Department of Licensing and Consumer Protection",
        },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "97", bestRating: "5" },
      priceRange: "$$$$",
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/adu/washington-dc#service",
      serviceType: "ADU Construction",
      name: "ADU Construction in Washington, DC",
      alternateName: [
        "Accessory Dwelling Unit",
        "English Basement ADU",
        "Rowhouse Basement Apartment",
        "Carriage House ADU",
        "In-Law Suite",
      ],
      provider: { "@id": "https://www.dmv-gc.com/#business" },
      areaServed: { "@type": "City", name: "Washington", sameAs: "https://en.wikipedia.org/wiki/Washington,_D.C." },
      description:
        "Full-service ADU design and construction in Washington, DC. English basement ADU conversions, rowhouse basement apartment buildouts, and carriage house ADUs — with DC DLCP license, DC DOB permit management, and HPRB historic district coordination across all DC neighborhoods.",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "85000",
          maxPrice: "175000",
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dmv-gc.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", position: 3, name: "ADU Construction", item: "https://www.dmv-gc.com/service/adu" },
        {
          "@type": "ListItem",
          position: 4,
          name: "Washington, DC",
          item: "https://www.dmv-gc.com/service/adu/washington-dc",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to build an ADU in Washington, DC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ADU construction in Washington, DC typically costs between $85,000 and $175,000 depending on ADU type and scope. An English basement ADU conversion — the most common DC ADU type — runs $90,000–$150,000. A below-grade basement ADU conversion costs $85,000–$140,000. A carriage house or rear structure ADU runs $95,000–$160,000. DC's urban construction premium — labor, logistics, permit fees, and DC DOB processing — adds 15–25% compared to comparable projects in Maryland suburbs. Projects in DC historic districts that involve exterior modifications requiring HPRB review add additional timeline but not necessarily large cost. DMV-GC Group provides free in-home consultations with detailed estimates.",
          },
        },
        {
          "@type": "Question",
          name: "Does DMV-GC Group hold a DC DLCP license for ADU construction in Washington, DC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. DMV-GC Group holds a Washington DC DLCP (Department of Licensing and Consumer Protection) license — legally required for all home improvement work in the District of Columbia, including ADU construction. A Maryland MHIC license alone does not authorize ADU work in DC. DMV-GC Group holds both MHIC (Maryland) and DLCP (DC) licenses — one of the relatively small number of contractors in the DMV area fully licensed to perform ADU construction in both jurisdictions. Before hiring any contractor for DC ADU work, verify their DLCP license at DC's licensing portal.",
          },
        },
        {
          "@type": "Question",
          name: "What is an English basement ADU and how does it work in DC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An English basement is the semi-below-grade level of a DC rowhouse — partially below street grade on the front but at or above grade on the rear, with its own separate entrance typically below the main stoop. English basement ADU conversions are the most common ADU type in DC's rowhouse neighborhoods. The conversion requires a separate entrance (often already in place at the below-stoop door), egress window compliance in sleeping areas, a full kitchen, a full bathroom (with ejector pump where the floor is below the sewer line), fire-rated ceiling separation, and a DC Certificate of Occupancy. DMV-GC Group designs, builds, and permits complete English basement ADU conversions in all DC neighborhoods.",
          },
        },
        {
          "@type": "Question",
          name: "Does DC historic district designation affect ADU construction?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For interior ADU work — finishing, kitchen, bathroom, framing — DC historic district designation does not add requirements beyond standard DC DOB permits. HPRB (Historic Preservation Review Board) reviews exterior changes, not interior renovations. However, any exterior modification that is part of the ADU project and is visible from a public street — a new egress window opening in the front facade, changes to the English basement entrance on the primary front facade — may require HPRB review or a Certificate of No Objection in a historic district. DMV-GC Group assesses every DC ADU project for HPRB applicability during the consultation and designs exterior modifications to avoid historic review where possible — typically by siting egress windows at the rear rather than the front.",
          },
        },
        {
          "@type": "Question",
          name: "Do DC ADU bathrooms require ejector pumps?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Often yes. DC rowhouse basements and English basements are frequently at or below the elevation of the city sewer line, meaning waste from below-grade bathroom fixtures cannot drain by gravity. An ejector pump — a sealed pit in the floor with a pump that pushes waste up to the gravity drain line — is required when the proposed bathroom floor elevation is below the existing drain invert. DMV-GC Group's licensed plumbers assess drain invert elevation on every DC ADU bathroom project before any plumbing is designed or priced.",
          },
        },
        {
          "@type": "Question",
          name: "Does DC require a Certificate of Occupancy for a basement ADU?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A Certificate of Occupancy (COO) from the DC Department of Buildings is required before any basement or English basement ADU in Washington, DC can be legally rented or occupied. An unpermitted basement unit — without a COO — is illegal to rent under DC law, creates insurance and mortgage complications, and may result in fines and required removal. DMV-GC Group manages the complete COO process — DC DOB permit application, all required inspections, and COO issuance — as a standard part of every DC ADU project.",
          },
        },
      ],
    },
  ],
};

const faqData = [
  {
    eventKey: "0",
    question: "How much does it cost to build an ADU in Washington, DC?",
    answer:
      "ADU construction in DC typically costs $85,000–$160,000+ depending on type. An English basement ADU conversion runs $90,000–$135,000 without an ejector pump, or $100,000–$150,000 with an ejector pump bathroom. A below-grade basement ADU costs $85,000–$140,000. A carriage house or rear structure ADU runs $95,000–$160,000. DC's urban construction premium adds 15–25% over comparable suburban Maryland projects. HPRB review for historic district exterior modifications adds timeline but not typically large cost. DMV-GC Group provides free in-home consultations with itemized estimates specific to your DC property.",
  },
  {
    eventKey: "1",
    question: "Does DMV-GC Group have a DC DLCP license for ADU construction?",
    answer:
      "Yes. DMV-GC Group holds a Washington DC DLCP license — legally required for all home improvement work in DC including ADU construction. We also hold a Maryland MHIC license. A Maryland-only contractor without a DLCP license cannot legally perform ADU work in DC, cannot pull DC permits in their own name, and cannot obtain a DC Certificate of Occupancy. Verify any contractor's DLCP license at DC's online licensing portal before signing any contract for DC ADU work.",
  },
  {
    eventKey: "2",
    question: "What is an English basement and how is it converted to an ADU in DC?",
    answer:
      "An English basement is the semi-below-grade level of a DC rowhouse — partially below street grade on the front but at or above grade on the rear — with its own separate entrance typically below the main stoop. Converting it to a legal ADU requires: egress window compliance in sleeping areas, a full kitchen, a full bathroom (with ejector pump where the floor is below the sewer line), fire-rated ceiling separation from the main dwelling, interconnected smoke and CO detectors, and a DC Certificate of Occupancy. DMV-GC Group manages the complete English basement ADU conversion process — design, permits, construction, and COO.",
  },
  {
    eventKey: "3",
    question: "Does DC historic district status affect my English basement ADU project?",
    answer:
      "For interior work only — no. HPRB reviews exterior changes to historic properties, not interior renovations. Finishing the English basement, installing a kitchen and bathroom, framing walls — all proceed with standard DC DOB permits regardless of historic district status. The only common DC ADU scope that triggers HPRB review in a historic district is a new exterior opening in the front facade. DMV-GC Group's standard approach is to site all egress windows at the rear of the property — avoiding front facade modifications and keeping the project on a straightforward DC DOB permit path in the vast majority of cases.",
  },
  {
    eventKey: "4",
    question: "Does my DC English basement ADU need an ejector pump?",
    answer:
      "Often yes. DC rowhouse basements and English basements are frequently at or below the elevation of the city sewer line, meaning waste from a below-grade bathroom cannot drain by gravity. An ejector pump is required when the proposed bathroom floor elevation is below the existing drain invert — which is the case for many DC rowhouses. DMV-GC Group's licensed plumbers assess drain elevation on every DC ADU project before any plumbing is designed or priced.",
  },
  {
    eventKey: "5",
    question: "Is a Certificate of Occupancy required for a DC English basement ADU?",
    answer:
      "Yes — absolutely. A DC DOB Certificate of Occupancy is legally required before any English basement ADU in Washington DC can be rented or occupied. Renting an unpermitted DC basement unit without a COO is illegal under DC law, creates significant liability, and can result in fines and orders to vacate. DMV-GC Group manages the complete DC DOB COO process — all required building, electrical, and plumbing inspections — as a standard part of every DC ADU project.",
  },
];

export default function ADUWashingtonDC() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => {
    setActiveMenuItem("service");
  }, []);

  return (
    <div className="city-service-detail-page adu-washington-dc">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/services">Services</Link>
          <span>›</span>
          <Link href="/service/adu">ADU Construction</Link>
          <span>›</span>
          Washington, DC
        </nav>

        <div className="hero">
          <div className="hero-location-tag">📍 Serving Washington, DC</div>
          <h1>ADU Construction in Washington, DC — English Basement &amp; Rowhouse ADU Contractor</h1>
          <div className="hero-meta">
            <span className="badge red">✓ DLCP Licensed — Washington DC</span>
            <span className="badge">✓ MHIC Licensed — Maryland</span>
            <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
            <span className="badge">✓ DC DOB Permits Handled</span>
            <span className="badge dark">📞 +1 240-730-1292</span>
          </div>
        </div>

        <div className="dlcp-banner">
          <div className="icon">🏛️</div>
          <div>
            <h3>DC ADU Construction Requires a DLCP License — A Maryland MHIC Alone Is Not Enough</h3>
            <p>
              Washington DC is a separate jurisdiction from Maryland — a Maryland MHIC license alone does not legally
              authorize ADU construction or any other home improvement work in the District of Columbia. All contractors
              performing ADU work in DC must hold a valid DLCP (Department of Licensing and Consumer Protection) license
              issued by DC. DMV-GC Group holds both a Maryland MHIC license and a Washington DC DLCP license — one of the
              relatively small number of contractors in the DMV area fully licensed to build ADUs in both Maryland and DC.
              Before hiring any contractor for a DC ADU project, verify their DLCP license at DC's online licensing portal.
            </p>
          </div>
        </div>

        <div className="intro-box">
          Planning to build an <strong>ADU in Washington, DC</strong>? DC&apos;s rowhouse neighborhoods — Capitol Hill,
          Petworth, Columbia Heights, Shaw, Georgetown, Bloomingdale, and dozens of others — sit on top of one of the most
          compelling ADU opportunities in the entire East Coast. English basement conversions in DC rowhouses rent for
          $1,700–$3,000/month and often pay back within 4–6 years in rental income alone. But DC ADU construction has
          specific requirements — a DLCP license, DC DOB permits, a Certificate of Occupancy, and for certain exterior
          modifications in historic districts, HPRB coordination — that only a contractor experienced in DC&apos;s
          regulatory environment can navigate correctly. DMV-GC Group&apos;s DLCP-licensed design-build team manages the
          complete DC ADU process from design through COO, in every DC neighborhood.
        </div>

        <div className="trust-bar">
          <div className="trust-item">
            <div className="icon">🏛️</div>
            <strong>DLCP Licensed — DC</strong>
            <span>Legally required for DC ADU work</span>
          </div>
          <div className="trust-item">
            <div className="icon">📋</div>
            <strong>DC DOB Permits &amp; COO</strong>
            <span>Full DC permit process managed</span>
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

        <h2>Types of ADUs We Build in Washington, DC</h2>
        <p>
          DC&apos;s rowhouse housing stock — primarily built between the 1880s and 1940s across Northwest, Northeast, and
          Southeast DC — creates specific ADU opportunities that differ from suburban Maryland. Here are the ADU types that
          are most practical in DC&apos;s rowhouse neighborhoods:
        </p>

        <div className="adu-type-grid">
          <div className="adu-type-card">
            <span className="adu-tag">Most Common DC ADU Type</span>
            <h3>English Basement ADU Conversion</h3>
            <p>
              The English basement — the semi-below-grade level of a DC rowhouse with its own entrance below the main
              stoop — is the dominant ADU type in DC&apos;s rowhouse neighborhoods. It is often the most practical because
              the separate entrance is typically already in place, the level is partially above grade giving natural light
              from rear windows, and ceiling heights in English basements commonly reach 7&apos;4″–8&apos;6″. A legal
              English basement ADU requires a separate entrance, egress window compliance in sleeping areas, full kitchen,
              full bathroom (with ejector pump where needed), fire-rated ceiling separation, and a DC Certificate of
              Occupancy. Rents $1,700–$3,000/month depending on neighborhood and size.
            </p>
            <div className="adu-cost">Typical Cost: $90,000 – $150,000</div>
          </div>
          <div className="adu-type-card">
            <span className="adu-tag">Full Below-Grade Basement</span>
            <h3>Rowhouse Basement ADU Conversion</h3>
            <p>
              Some DC rowhouses have a fully below-grade basement below the English basement level — a sub-basement with
              limited ceiling height. Where ceiling heights meet the 7-foot minimum and the space is large enough for
              habitable use, this level can also be converted to a legal ADU unit. More commonly, the English basement is
              the ADU and the sub-basement serves as storage and mechanical. DMV-GC Group assesses the full vertical
              stack of every DC rowhouse consultation to identify which level is the right ADU candidate.
            </p>
            <div className="adu-cost">Typical Cost: $85,000 – $140,000</div>
          </div>
          <div className="adu-type-card">
            <span className="adu-tag">Where Rear Structure Exists</span>
            <h3>Carriage House / Rear Structure ADU</h3>
            <p>
              Some DC properties — particularly in Capitol Hill, Georgetown, and older NW DC neighborhoods — have rear
              carriage houses or outbuildings accessed from the alley behind the home. Where these structures have
              sufficient square footage and are structurally sound, conversion to a legal ADU is feasible. Rear
              alley-accessed structures have minimal street-facing historic impact. DC DOB permits and COO required. DLCP
              license required for all DC construction.
            </p>
            <div className="adu-cost">Typical Cost: $95,000 – $160,000</div>
          </div>
          <div className="adu-type-card">
            <span className="adu-tag">For Detached Homes</span>
            <h3>Attached In-Law Suite / New ADU Structure</h3>
            <p>
              DC&apos;s rowhouse form — attached on both sides, built to the lot line — makes new construction additions
              and detached ADU structures impractical for most rowhouse properties. For DC&apos;s detached single-family
              homes — more common in upper NW DC and parts of SE and NE — attached in-law suite additions and in some
              cases detached ADU structures are feasible. DMV-GC Group assesses DC home type and lot configuration during
              the free consultation to identify what is actually buildable on your specific property.
            </p>
            <div className="adu-cost">Typical Cost: $120,000 – $200,000+</div>
          </div>
        </div>

        <div className="author-box">
          <div className="author-avatar">🏠</div>
          <div className="author-info">
            <h4>About DMV-GC Group — Washington DC&apos;s DLCP-Licensed ADU Contractor</h4>
            <p>
              DMV-GC Group holds a Washington DC DLCP license and a Maryland MHIC license — making us one of the few
              design-build contractors in the DMV area fully authorized to complete ADU construction in both
              jurisdictions. Our team has built English basement ADU conversions and rowhouse basement units throughout
              DC&apos;s neighborhoods — managing DC DOB permits, ejector pump plumbing, egress window installation, and
              HPRB historic district coordination in-house. We back every DC ADU project with a 1-year workmanship
              warranty.
            </p>
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

        <h2>English Basement ADUs in DC — The Most Valuable Rowhouse Investment</h2>
        <p>
          The DC English basement ADU conversion is the highest-ROI renovation available to most DC rowhouse owners — and
          one of the most consequential renovations that can go wrong if handled by a contractor without DC-specific
          experience. Here is what makes a successful English basement ADU conversion in DC:
        </p>

        <div className="english-basement-grid">
          <div className="eb-card">
            <h3>🏠 What Qualifies as a Legal DC ADU</h3>
            <p>
              A legal English basement ADU in DC requires — at minimum — a separate entrance, egress window compliance in
              sleeping areas, a full kitchen (range, refrigerator, sink, counter space), a full bathroom (toilet, sink,
              shower or tub), fire-rated ceiling separation between the ADU and the main dwelling (typically 1-hour
              assembly), smoke and CO interconnected detectors, minimum 7-foot ceiling height in habitable rooms, and a DC
              Certificate of Occupancy. DMV-GC Group designs every English basement ADU to meet all of these requirements
              before construction begins.
            </p>
          </div>
          <div className="eb-card">
            <h3>🚿 Ejector Pump — When It&apos;s Required</h3>
            <p>
              DC rowhouse basements and English basements are frequently at or below the elevation of the city sewer
              line — meaning waste from below-grade bathroom fixtures cannot drain by gravity. DMV-GC Group&apos;s
              licensed plumbers assess the relative elevation of the existing drain invert versus the proposed bathroom
              floor on every DC ADU project before any plumbing is designed. Where an ejector pump is required, we size
              and install it correctly — sealed fiberglass pit, proper discharge line, separate vent stack, and battery
              backup for below-grade rental units where the homeowner may be away during power outages.
            </p>
          </div>
          <div className="eb-card">
            <h3>⚡ Separate Electrical Meter</h3>
            <p>
              A separate Pepco electric meter for the ADU is recommended for any DC English basement rental — allowing
              the tenant to pay their own electric bill, simplifying accounting, and adding value at resale. DMV-GC Group
              coordinates meter separation with Pepco as a standard part of most DC English basement ADU projects —
              handling all required electrical permit work and utility coordination in-house.
            </p>
          </div>
          <div className="eb-card">
            <h3>🔥 Fire-Rated Ceiling Separation</h3>
            <p>
              The floor-ceiling assembly between the ADU and the main dwelling must achieve the required fire rating —
              protecting both the tenant below and the owner above. In DC rowhouses this typically means a 1-hour rated
              assembly, achieved through proper drywall specification on the basement ceiling. DMV-GC Group specifies and
              documents the correct fire separation assembly on every DC ADU project for DC DOB plan review compliance.
            </p>
          </div>
        </div>

        <h2>DC ADU Zoning Rules — What Homeowners Need to Know</h2>
        <p>
          Washington DC has its own ADU regulations under the DC Zoning Regulations — distinct from Maryland&apos;s
          Montgomery County ADU ordinance and applicable only within the District. Key rules for DC homeowners:
        </p>

        <div className="spec-box">
          <h3>📋 DC ADU Zoning Rules — Key Requirements</h3>
          <ul>
            <li>
              <strong>ADU types permitted in DC:</strong> DC zoning permits ADUs in residential zones as accessory
              dwelling units within or attached to an existing single-family home, or in a separate accessory structure
              on the same lot. English basement conversions in rowhouses — the most common DC ADU type — fall under the
              &quot;within the existing structure&quot; category.
            </li>
            <li>
              <strong>ADU size limits:</strong> DC&apos;s ADU regulations limit the size of an accessory dwelling unit,
              with specific limits varying by zone. In most DC residential zones, the ADU cannot be larger than a set
              percentage of the gross floor area of the primary dwelling. DMV-GC Group verifies the applicable size limit
              for your specific DC zoning designation during the consultation.
            </li>
            <li>
              <strong>One ADU per lot:</strong> DC zoning permits one ADU per single-family lot — the same limitation as
              Maryland&apos;s county ADU ordinances.
            </li>
            <li>
              <strong>Owner-occupancy in DC:</strong> Unlike Montgomery County&apos;s ADU ordinance which requires
              owner-occupancy, DC&apos;s ADU regulations do not impose an owner-occupancy requirement for all ADU types.
              However, homeowners should verify the current DC zoning regulation applicable to their specific zone and ADU
              type during the consultation — regulations are subject to change.
            </li>
            <li>
              <strong>DC DOB permits required:</strong> All ADU construction in DC requires permits from the DC Department
              of Buildings (formerly DCRA). DMV-GC Group files all required DC DOB building, electrical, and plumbing
              permits in-house. DC DOB permit processing for ADU projects typically takes 4–8 weeks before construction
              can begin.
            </li>
            <li>
              <strong>Certificate of Occupancy mandatory:</strong> A DC DOB Certificate of Occupancy is required before
              any ADU can be legally rented or occupied. An unpermitted basement unit in DC without a COO is illegal to
              rent, creates insurance gaps, and is subject to fines and required correction. The COO process involves DC
              DOB final inspections of all building systems.
            </li>
            <li>
              <strong>DLCP license required for all construction:</strong> Every contractor performing any home
              improvement or construction work in DC must hold a valid DLCP license. Verify your contractor&apos;s DLCP
              license at DC&apos;s licensing portal before signing any contract.
            </li>
          </ul>
        </div>

        <h2>HPRB Historic Districts — How They Affect DC ADU Construction</h2>
        <p>
          A significant portion of DC&apos;s rowhouse neighborhoods are designated historic districts — meaning exterior
          modifications that affect the historic character of homes require review by the DC Historic Preservation Review
          Board (HPRB) or a Certificate of No Objection from the State Historic Preservation Office before DC DOB
          permits are issued.
        </p>

        <div className="spec-box">
          <h3>🏛️ HPRB Review for DC ADU Projects — What Triggers It</h3>
          <ul>
            <li>
              <strong>Interior ADU work — no HPRB required:</strong> Finishing a basement, installing a kitchen, adding a
              bathroom, framing walls — all interior ADU work proceeds with standard DC DOB permits regardless of historic
              district status. HPRB reviews exterior changes, not interior renovations.
            </li>
            <li>
              <strong>Egress window in rear — typically no HPRB:</strong> An egress window cut in the rear foundation
              wall — not visible from the public street — typically does not require HPRB review. DMV-GC Group sites all
              DC ADU egress windows at the rear of the property wherever the floor plan allows, specifically to avoid
              triggering historic review.
            </li>
            <li>
              <strong>New front facade opening — HPRB review likely:</strong> Any new opening in the front facade of a
              rowhouse in a historic district — including a new egress window at the English basement level visible from
              the street — requires HPRB review or a Certificate of No Objection before DC DOB permits are issued.
            </li>
            <li>
              <strong>English basement entrance modifications:</strong> Significant changes to the existing English
              basement entrance — the door, surround, or stoop configuration visible from the street — may require HPRB
              review depending on the specific historic district and the nature of the change.
            </li>
            <li>
              <strong>DC historic districts where ADU projects most commonly encounter HPRB:</strong> Capitol Hill HD,
              Georgetown HD, Dupont Circle HD, Logan Circle HD, U Street HD, Strivers&apos; Section HD, Takoma DC HD,
              16th Street Heights HD.
            </li>
            <li>
              <strong>Certificate of No Objection path:</strong> For minor changes, a faster &quot;Certificate of No
              Objection&quot; from the State Historic Preservation Office may be available rather than a full HPRB
              hearing. DMV-GC Group identifies which path applies and pursues the most efficient route for each specific
              project.
            </li>
            <li>
              <strong>Timeline impact:</strong> HPRB review adds 4–8 weeks to the pre-construction timeline. DMV-GC Group
              initiates DC DOB permit applications and any required HPRB submissions simultaneously wherever possible to
              minimize total timeline.
            </li>
          </ul>
        </div>

        <div className="note">
          ⚠️ <strong>Design Strategy:</strong> DMV-GC Group&apos;s standard approach for DC ADU projects in historic
          districts is to design egress windows at the rear of the property from the outset — avoiding front facade
          modifications that would trigger HPRB review. This keeps the ADU project on a straightforward DC DOB permit
          path without historic review delays in the vast majority of cases.
        </div>

        <h2>Why DC English Basement ADUs Are One of the Best Real Estate Investments in the Region</h2>

        <div className="benefit-grid">
          <div className="benefit-box">
            <div className="icon">💰</div>
            <strong>Premium Rental Income</strong>
            <span>
              $1,700–$3,000/month for DC English basement ADUs — the highest rental rates in the DMV campaign
            </span>
          </div>
          <div className="benefit-box">
            <div className="icon">📈</div>
            <strong>High Value Addition</strong>
            <span>
              A permitted DC English basement ADU adds $130,000–$250,000+ to DC rowhouse values in premium
              neighborhoods
            </span>
          </div>
          <div className="benefit-box">
            <div className="icon">🚇</div>
            <strong>Metro Access Throughout DC</strong>
            <span>
              DC&apos;s Metro system serves every quadrant — ADU renters have unmatched transit access to employers,
              universities, and amenities
            </span>
          </div>
          <div className="benefit-box">
            <div className="icon">🏘️</div>
            <strong>Existing Entrance Often In Place</strong>
            <span>
              The English basement&apos;s below-stoop door typically satisfies the separate entrance requirement —
              reducing ADU conversion complexity and cost
            </span>
          </div>
          <div className="benefit-box">
            <div className="icon">⚡</div>
            <strong>Fast Payback</strong>
            <span>
              At $2,000+/month, a $100,000–$130,000 DC English basement ADU reaches full payback in approximately 4–6
              years
            </span>
          </div>
          <div className="benefit-box">
            <div className="icon">🔑</div>
            <strong>Highest Absolute ROI in Campaign</strong>
            <span>
              DC rental rates — the highest in the campaign — combined with strong property value addition make DC the
              most financially compelling ADU market we serve
            </span>
          </div>
        </div>

        <h2>Serving All Washington, DC Neighborhoods for ADU Construction</h2>

        <div className="neighborhood-grid">
          <div className="neighborhood-card">
            <h3>Capitol Hill</h3>
            <div className="hist-tag">Historic District</div>
            <p>
              DC&apos;s most active English basement ADU conversion market. Victorian and Federal rowhouses from the
              1880s–1910s. Existing below-stoop entrances on most properties. HPRB review required for any front facade
              exterior modification — rear egress windows proceed with DC DOB permits only. Rents $1,800–$2,600/month
              for quality English basement ADUs.
            </p>
          </div>
          <div className="neighborhood-card">
            <h3>Petworth</h3>
            <p>
              Northwest DC rowhouse neighborhood with 1900s–1920s construction. One of the most active English basement
              ADU conversion markets in DC — strong Metro and bus access drives rental demand. DC DOB permits — no
              historic district overlay for most of Petworth. Rents $1,700–$2,200/month.
            </p>
          </div>
          <div className="neighborhood-card">
            <h3>Columbia Heights</h3>
            <p>
              Dense NW DC neighborhood with Victorian-era through mid-century construction. Strong Metro access (Columbia
              Heights Green/Yellow Line station) drives ADU rental demand. Basement ADU conversions and English basement
              units both common here. Some blocks in historic district overlay — assessed during consultation.
            </p>
          </div>
          <div className="neighborhood-card">
            <h3>Shaw / Bloomingdale</h3>
            <p>
              Victorian rowhouse neighborhoods in NW DC with active renovation markets. English basement ADUs and
              rowhouse basement units both common ADU types. Parts of Shaw are in historic district overlay — rear egress
              window siting the standard approach. Rents $1,800–$2,500/month for quality ADU units.
            </p>
          </div>
          <div className="neighborhood-card">
            <h3>Georgetown</h3>
            <div className="hist-tag">Historic District</div>
            <p>
              DC&apos;s most stringent historic district — all exterior modifications require HPRB review. Interior ADU
              work proceeds with DC DOB permits. Georgetown English basement ADUs command some of DC&apos;s highest rents
              — $2,200–$3,000/month for quality units — making the investment case particularly strong despite the more
              complex historic review for any exterior modification.
            </p>
          </div>
          <div className="neighborhood-card">
            <h3>Dupont Circle / Logan Circle</h3>
            <div className="hist-tag">Historic District</div>
            <p>
              Prestigious NW DC historic districts with late Victorian and Edwardian rowhouses. HPRB review for exterior
              modifications. Interior English basement ADU conversions proceed with standard DC DOB permits. Dupont and
              Logan Circle ADUs rent for $2,000–$2,800/month — among DC&apos;s premium markets.
            </p>
          </div>
          <div className="neighborhood-card">
            <h3>Takoma DC / 16th Street Heights</h3>
            <p>
              Northwest DC neighborhoods bordering Maryland. Mix of detached homes and rowhouses — more ADU type
              flexibility than pure rowhouse neighborhoods. Strong rental demand from proximity to the Maryland border and
              Metro access. Some historic district overlay — assessed during consultation.
            </p>
          </div>
          <div className="neighborhood-card">
            <h3>Northeast DC — Brookland / Trinidad</h3>
            <p>
              Diverse NE DC rowhouse neighborhoods with growing ADU renovation markets. More accessible entry price
              points than NW DC premium neighborhoods — lower construction cost with still-strong rental demand from
              Metro access and NE DC&apos;s improving amenity base. DC DOB permits, limited historic district overlay in
              most of NE DC.
            </p>
          </div>
        </div>

        <h2>Our ADU Construction Process in Washington, DC</h2>

        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-content">
              <h3>Free In-Home Consultation — English Basement &amp; Rowhouse Assessment</h3>
              <p>
                We visit your DC rowhouse and assess the ADU opportunity — English basement configuration, ceiling
                heights, existing entrance, rear window egress potential, ejector pump need (drain invert elevation
                assessment), older systems condition, and historic district implications for any exterior scope. No cost,
                no obligation.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-content">
              <h3>Ejector Pump Feasibility Assessment</h3>
              <p>
                Our licensed plumbers assess the drain invert elevation relative to the proposed bathroom floor on every
                DC ADU project. We confirm whether gravity drain is possible or an ejector pump is required, and size the
                pump correctly for the fixture count and vertical lift — before any plumbing is designed or priced.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-content">
              <h3>Historic District Assessment &amp; Egress Window Siting</h3>
              <p>
                For DC ADU projects in historic districts, we assess every exterior modification for HPRB implications.
                Egress windows are sited at the rear of the property from the first design draft — avoiding front facade
                openings that trigger HPRB review in the vast majority of cases. Where HPRB review is unavoidable, we
                initiate the process concurrently with DC DOB permit preparation.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-content">
              <h3>ADU Design Development</h3>
              <p>
                Complete floor plan, kitchen layout, bathroom configuration (including ejector pump integration), egress
                window locations, fire separation specification, and separate electrical meter plan — all designed for DC
                DOB plan review compliance and submitted with complete drawings.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">5</div>
            <div className="step-content">
              <h3>DC DOB Permit Filing + COO Application</h3>
              <p>
                We file all required DC DOB permits — building, electrical, plumbing — with our DLCP license. DC DOB
                permit processing typically takes 4–8 weeks. For projects with HPRB review, we submit simultaneously
                wherever possible. Our permit team manages all DC DOB correspondence and inspection scheduling.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">6</div>
            <div className="step-content">
              <h3>Construction — Ejector Pit, Egress, Mechanicals &amp; Finishes</h3>
              <p>
                Ejector pit excavation and installation first where required. Then egress window installation at the
                rear, electrical rough-in, plumbing rough-in, framing, HVAC extension, drywall, flooring, kitchen,
                bathroom tile and fixtures, and all finish work — coordinated by a DC project manager and inspected at
                each required stage by DC DOB.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">7</div>
            <div className="step-content">
              <h3>DC DOB Inspections, COO Issuance &amp; 1-Year Warranty</h3>
              <p>
                We manage all required DC DOB inspections — rough framing, rough electrical, rough plumbing, and final —
                plus the Certificate of Occupancy process. After COO issuance, we conduct a final walkthrough, address
                every punch list item, and activate your 1-year workmanship warranty. Your DC ADU is legally ready to
                rent.
              </p>
            </div>
          </div>
        </div>

        <h2>ADU Construction Cost in Washington, DC</h2>
        <p>
          Here is a realistic cost breakdown for <strong>ADU construction in Washington, DC</strong>. DC costs reflect
          the urban construction premium — labor, logistics, DC DOB permit fees, and the specific technical requirements
          of rowhouse ADU construction:
        </p>

        <table className="cost-table">
          <tbody>
            <tr>
              <th>ADU Type / Scope</th>
              <th>Typical Cost Range</th>
              <th>Notes for Washington DC</th>
            </tr>
            <tr>
              <td>English Basement ADU Conversion (standard)</td>
              <td>$90,000 – $135,000</td>
              <td>
                Full finishing, kitchen, bathroom, fire separation, COO. Existing separate entrance in place. Rear
                egress window. No HPRB involvement.
              </td>
            </tr>
            <tr>
              <td>English Basement ADU with Ejector Pump Bathroom</td>
              <td>$100,000 – $150,000</td>
              <td>
                Adds ejector pit excavation, sealed pit, pump, discharge line, and separate vent stack to the standard
                scope above.
              </td>
            </tr>
            <tr>
              <td>Below-Grade Basement ADU Conversion</td>
              <td>$85,000 – $140,000</td>
              <td>
                Requires new separate entrance cut, egress windows (rear siting), kitchen, ejector pump bathroom, fire
                separation, COO.
              </td>
            </tr>
            <tr>
              <td>Carriage House / Rear Structure ADU</td>
              <td>$95,000 – $160,000</td>
              <td>
                Structural assessment of existing structure, utility connections from main house, full interior
                buildout, DC DOB permits, COO.
              </td>
            </tr>
            <tr>
              <td>New Separate Entrance (where not existing)</td>
              <td>$6,000 – $16,000</td>
              <td>
                New exterior door cut in foundation wall, steps, landing, brick work, waterproofing. Rear or side
                preferred for historic district properties.
              </td>
            </tr>
            <tr>
              <td>Separate Electrical Meter (Pepco)</td>
              <td>$2,500 – $5,500</td>
              <td>Sub-panel, meter base, Pepco coordination, electrical permit. Strongly recommended for DC rental ADUs.</td>
            </tr>
            <tr>
              <td>HPRB Review (where exterior modification required)</td>
              <td>$0 additional cost</td>
              <td>
                DMV-GC Group manages HPRB submissions at no additional cost — but adds 4–8 weeks to pre-construction
                timeline for affected scope items.
              </td>
            </tr>
          </tbody>
        </table>

        <div className="tip">
          💡 <strong>DC ADU ROI — Highest in Campaign:</strong> A quality English basement ADU in Capitol Hill, Petworth,
          or Columbia Heights at $100,000–$130,000 renting at $1,900–$2,400/month reaches full payback in approximately
          4–6 years in rental income alone — and adds $140,000–$220,000 to the DC rowhouse&apos;s appraised value at COO
          issuance. DC&apos;s premium rental market, combined with the English basement&apos;s natural advantage (existing
          entrance, partial above-grade exposure, natural light from rear), makes this the highest absolute-dollar ADU
          investment return of any community in the DMV-GC Group campaign.
        </div>

        <div className="cta-banner">
          <h2>Get a Free DC ADU Consultation</h2>
          <p>
            We&apos;ll visit your DC rowhouse, assess your English basement or basement for ADU feasibility — entrance,
            egress, ejector pump need, historic district implications — and provide a detailed estimate. DLCP-licensed,
            no obligation.
          </p>
          <Link href="/contact-us" className="cta-btn">
            Schedule Free ADU Consultation
          </Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">
            📞 Call +1 240-730-1292
          </a>
        </div>

        <h2>What Washington, DC Homeowners Say About DMV-GC Group</h2>

        <div className="review-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              &quot;DMV-GC Group converted our Capitol Hill rowhouse English basement into a legal ADU — full kitchen,
              bathroom with ejector pump, separate Pepco meter, and the DC Certificate of Occupancy. Our tenant pays
              $2,200/month and it&apos;s never been vacant. The DLCP-licensed work means everything is above
              board.&quot;
            </p>
            <div className="review-author">
              — Verified Homeowner · <span className="review-location">Capitol Hill, Washington DC</span>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              &quot;We&apos;re in the Dupont Circle historic district. DMV-GC Group sited the egress window at the rear —
              no HPRB review needed. The DC DOB permit process was handled completely by their team. The English basement
              ADU is rented to a State Department employee at $2,450/month.&quot;
            </p>
            <div className="review-author">
              — Verified Homeowner · <span className="review-location">Dupont Circle, Washington DC</span>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              &quot;Two contractors we interviewed didn&apos;t have DC DLCP licenses — they were Maryland-only. DMV-GC
              Group is properly licensed for DC work. The professionalism showed throughout: DC DOB permits filed
              correctly, all inspections passed, COO issued without a problem. Our Petworth basement ADU rents for
              $1,850/month.&quot;
            </p>
            <div className="review-author">
              — Verified Homeowner · <span className="review-location">Petworth, Washington DC</span>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              &quot;The ejector pump question was the thing that scared us most — we&apos;d heard horror stories about
              contractors skipping it. DMV-GC Group&apos;s plumber assessed the drain elevation on the first visit and
              confirmed we needed one. They installed it correctly, sized it for two bathrooms, with battery backup.
              Zero issues in three years of renting.&quot;
            </p>
            <div className="review-author">
              — Verified Homeowner · <span className="review-location">Shaw, Washington DC</span>
            </div>
          </div>
        </div>

        <div className="highlight">
          <p>
            ⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Washington DC homeowners trust DMV-GC Group for
            ADU projects that require the DLCP license, DC DOB permits, ejector pump expertise, and HPRB historic
            district awareness that Maryland-only contractors cannot provide — with the quality and warranty that
            DC&apos;s premium rowhouse market demands.
          </p>
        </div>

        <h2>Serving All Washington, DC Neighborhoods for ADU Construction</h2>

        <div className="areas-grid">
          <span className="area-pill">Capitol Hill</span>
          <span className="area-pill">Petworth</span>
          <span className="area-pill">Columbia Heights</span>
          <span className="area-pill">Shaw</span>
          <span className="area-pill">Bloomingdale</span>
          <span className="area-pill">Georgetown</span>
          <span className="area-pill">Dupont Circle</span>
          <span className="area-pill">Logan Circle</span>
          <span className="area-pill">U Street</span>
          <span className="area-pill">16th Street Heights</span>
          <span className="area-pill">Takoma DC</span>
          <span className="area-pill">Brookland</span>
          <span className="area-pill">Trinidad</span>
          <span className="area-pill">Northeast DC</span>
          <span className="area-pill">Chevy Chase DC</span>
        </div>

        <div className="nearby-box">
          <h3>Also serving Chevy Chase, MD — directly north of DC on Connecticut Avenue</h3>
          <p>
            DMV-GC Group builds ADUs throughout Chevy Chase, MD — immediately north of DC on Connecticut Avenue. Chevy
            Chase homeowners benefit from the same licensed design-build team with multi-village permit expertise.{" "}
            <Link href="/service/adu/chevy-chase-md">View our Chevy Chase ADU page →</Link>
          </p>
        </div>

        <h2>Frequently Asked Questions — ADU Construction in Washington, DC</h2>
        <Accordion defaultActiveKey="0" flush>
          {faqData.map((faq) => (
            <Accordion.Item eventKey={faq.eventKey} key={faq.eventKey}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <div className="internal-links">
          <h2>Explore Our Other Services in Washington, DC</h2>
          <ul>
            <li>
              <Link href="/service/kitchen-remodeling/washington-dc">Kitchen Remodeling in Washington, DC</Link>
            </li>
            <li>
              <Link href="/service/bathroom-remodeling/washington-dc">Bathroom Remodeling in Washington, DC</Link>
            </li>
            <li>
              <Link href="/service/basement-remodeling/washington-dc">Basement Remodeling in Washington, DC</Link>
            </li>
            <li>
              <Link href="/service/home-additions">Home Additions in Washington, DC</Link>
            </li>
            <li>
              <Link href="/service/design-build">Design-Build Contractor in Washington, DC</Link>
            </li>
            <li>
              <Link href="/service/electrical-services">Electrical Services in Washington, DC</Link>
            </li>
          </ul>
        </div>

        <div className="cta-banner">
          <h2>Ready to Build Your Washington, DC ADU?</h2>
          <p>
            Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. DLCP-licensed and
            available throughout all DC neighborhoods — we&apos;ll assess your English basement or rowhouse ADU
            opportunity and show you exactly what&apos;s possible.
          </p>
          <Link href="/contact-us" className="cta-btn">
            Get Free DC ADU Consultation →
          </Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">
            📞 +1 240-730-1292
          </a>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
    </div>
  );
}
