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
      name: "DMV-GC Group",
      alternateName: "DMV General Contracting Group LLC",
      image: "https://www.dmv-gc.com/logo.png",
      url: "https://www.dmv-gc.com",
      telephone: "+12407301292",
      email: "support@dmv-gc.com",
      foundingDate: "2018",
      description:
        "Licensed design-build general contractor serving Kensington, MD. Specializing in ADU construction for Kensington's Victorian, Craftsman, and historic homes — basement ADUs, garage conversions, and attached in-law suites — with Town of Kensington permit expertise.",
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
        { "@type": "City", name: "Kensington", sameAs: "https://en.wikipedia.org/wiki/Kensington,_Maryland" },
        { "@type": "City", name: "Chevy Chase" },
        { "@type": "City", name: "Garrett Park" },
        { "@type": "City", name: "Silver Spring" },
        { "@type": "City", name: "Wheaton" },
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
      priceRange: "$$$",
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/adu/kensington-md#service",
      serviceType: "ADU Construction",
      name: "ADU Construction in Kensington, MD",
      alternateName: ["Accessory Dwelling Unit", "In-Law Suite", "Basement Apartment", "Garage Conversion"],
      provider: { "@id": "https://www.dmv-gc.com/#business" },
      areaServed: { "@type": "City", name: "Kensington", sameAs: "https://en.wikipedia.org/wiki/Kensington,_Maryland" },
      description:
        "Full-service ADU design and construction in Kensington, MD. Basement ADU conversions, garage conversions, and attached in-law suites for Kensington's Victorian, Craftsman, and historic homes — with Town of Kensington permit expertise and historic home construction experience.",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "65000",
          maxPrice: "220000",
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
        { "@type": "ListItem", position: 4, name: "Kensington, MD", item: "https://www.dmv-gc.com/service/adu/kensington-md" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to build an ADU in Kensington, MD?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ADU construction in Kensington, MD typically costs between $65,000 and $220,000 depending on ADU type and scope. A basement ADU conversion runs $75,000–$130,000. A garage conversion ADU runs $65,000–$120,000. An attached in-law suite addition costs $110,000–$220,000. Detached ADUs are less common in Kensington due to smaller lot sizes but are feasible on some properties. Kensington's Victorian and Craftsman homes may require additional work addressing older systems — galvanized plumbing, older electrical — before ADU construction begins. DMV-GC Group provides free in-home consultations with honest, detailed estimates.",
          },
        },
        {
          "@type": "Question",
          name: "Does the Town of Kensington have its own ADU permit process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Kensington is an incorporated town within Montgomery County, and properties within the town limits require permits from the Town of Kensington rather than Montgomery County DPS. The Town has its own plan review process and inspection staff. DMV-GC Group verifies the correct permit jurisdiction for every Kensington address — Town permits vs. Montgomery County permits — before filing anything. A small number of Kensington-mailing-address properties fall outside the town limits and require county permits; we verify each specific address using parcel boundary data.",
          },
        },
        {
          "@type": "Question",
          name: "Can I build an ADU on a small Kensington lot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your specific lot size and the ADU type. Montgomery County's ADU ordinance requires a minimum lot size of 6,000 sq ft for an ADU. Many of Kensington's historic lots are at or just above this threshold. For smaller Kensington lots, basement ADU conversions and garage conversions are often the most feasible options — since they use existing structure rather than adding new building footprint. DMV-GC Group confirms ADU feasibility for your specific Kensington property during the free consultation.",
          },
        },
        {
          "@type": "Question",
          name: "Can I convert my Kensington garage into an ADU?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, if the garage has sufficient square footage and ceiling height. Many of Kensington's older detached garages — built in the 1920s–1940s — have enough footprint for a studio or one-bedroom ADU. The conversion involves insulation, HVAC, plumbing rough-in, egress windows or doors, interior framing, drywall, flooring, kitchen, and bathroom. Town of Kensington permits and a Certificate of Occupancy are required. DMV-GC Group assesses garage conversion feasibility during the free in-home consultation.",
          },
        },
        {
          "@type": "Question",
          name: "How does Kensington's historic character affect ADU construction?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kensington is not on the National Register of Historic Places like Garrett Park, so there is no formal federal historic review for ADU projects. However, the Town of Kensington's permit review process may consider architectural compatibility for any new addition or garage conversion that affects the exterior appearance of a historic home. DMV-GC Group designs all Kensington ADU additions to be architecturally compatible with the Victorian and Craftsman character of the existing homes — both because it's good design and because it facilitates smoother town permit review.",
          },
        },
        {
          "@type": "Question",
          name: "Is DMV-GC Group licensed for ADU construction in Kensington, MD?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home improvement and construction work in Kensington. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every ADU project completed in Kensington.",
          },
        },
      ],
    },
  ],
};

const faqData = [
  {
    eventKey: "0",
    question: "How much does it cost to build an ADU in Kensington, MD?",
    answer: "ADU construction in Kensington typically costs $65,000–$280,000 depending on type. A garage conversion runs $65,000–$120,000. A basement ADU conversion costs $75,000–$130,000. An attached in-law suite addition costs $110,000–$220,000. A detached backyard cottage (where lot size allows) costs $140,000–$280,000. Older historic homes add 10–20% for systems remediation. DMV-GC Group provides free in-home consultations with honest, itemized estimates for every Kensington ADU type.",
  },
  {
    eventKey: "1",
    question: "Does the Town of Kensington have its own ADU permit process?",
    answer: "Yes. Properties within the Town of Kensington's limits require permits from the Town — not Montgomery County DPS. The Town has its own plan review and inspection process. DMV-GC Group verifies the correct jurisdiction for every Kensington address using parcel boundary data and manages the complete Town permit process in-house. We also verify whether your specific address is in the town or in unincorporated Montgomery County — which is not always obvious from the mailing address.",
  },
  {
    eventKey: "2",
    question: "Can I build an ADU on a small Kensington lot?",
    answer: "It depends on the specific lot size and ADU type. Montgomery County's ADU ordinance requires a minimum 6,000 sq ft lot. For lots at or just above this threshold, basement ADU conversions and garage conversions are typically the most feasible options — since they add no new building footprint and avoid detached structure setback requirements. DMV-GC Group confirms feasibility for your specific Kensington lot during the free consultation.",
  },
  {
    eventKey: "3",
    question: "Can I convert my Kensington detached garage into an ADU?",
    answer: "Yes, if the garage has sufficient square footage and ceiling height. Kensington's 1920s–1940s detached garages vary significantly in size and condition — DMV-GC Group assesses square footage, ceiling height, structural condition, slab condition, and utility connection distance during the free consultation. Where the garage is viable, conversion is often the fastest and most cost-effective ADU path on a small Kensington lot.",
  },
  {
    eventKey: "4",
    question: "What are the biggest challenges for ADU construction in Kensington's older homes?",
    answer: "The four most common challenges are: (1) basement ceiling height — Victorian basements often have 6'4\"–7'2\" clearance, at or below the 7-foot minimum; (2) stone or block foundation moisture — must be addressed before finishing; (3) older systems — galvanized plumbing and older electrical that need assessment and often updating; and (4) small lot sizes — which may limit detached ADU feasibility. DMV-GC Group addresses all four honestly during the consultation, so there are no surprises mid-project.",
  },
  {
    eventKey: "5",
    question: "Is DMV-GC Group licensed for ADU construction in Kensington, MD?",
    answer: "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home improvement and construction work in Kensington. We employ licensed plumbers and electricians in-house, are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every ADU project in Kensington.",
  },
];

export default function ADUKensingtonMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => {
    setActiveMenuItem("service");
  }, []);

  return (
    <div className="city-service-detail-page adu-kensington-md">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/services">Services</Link>
          <span>›</span>
          <Link href="/service/adu">ADU Construction</Link>
          <span>›</span>
          Kensington, MD
        </nav>

        <div className="hero">
          <div className="hero-location-tag">📍 Serving Kensington, MD</div>
          <h1>ADU Construction in Kensington, MD — Accessory Dwelling Unit Contractor</h1>
          <div className="hero-meta">
            <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
            <span className="badge">✓ MHIC Licensed &amp; Insured</span>
            <span className="badge">✓ Town Permit Process Handled</span>
            <span className="badge">✓ Free In-Home Consultation</span>
            <span className="badge dark">📞 +1 240-730-1292</span>
          </div>
        </div>

        <div className="town-banner">
          <div className="icon">🏛️</div>
          <div>
            <h3>Kensington ADU Permits — Town Hall, Not Montgomery County</h3>
            <p>
              Kensington is an incorporated town within Montgomery County — properties within the town limits require
              permits from the Town of Kensington, not from Montgomery County's Department of Permitting Services. Many
              contractors file Kensington permits with the wrong authority, causing delays and invalid inspections.
              DMV-GC Group verifies the correct permit jurisdiction for every Kensington address using parcel boundary
              data — before filing a single application — and manages the complete Town of Kensington ADU permit process
              in-house.
            </p>
          </div>
        </div>

        <div className="intro-box">
          Planning to build an <strong>ADU in Kensington, MD</strong>? Kensington's Victorian-era and Craftsman homes —
          many dating to the 1890s–1930s — present a specific set of considerations for ADU construction that differ
          from newer suburban communities. Lot sizes are generally modest by Montgomery County standards. Older homes may
          have detached garages that are strong ADU conversion candidates. Basements are present in most homes and can be
          converted to legal ADU units. And the Town of Kensington's own permit process — separate from the county —
          governs all construction within the town limits. DMV-GC Group brings the historic home construction expertise,
          older systems knowledge, and Town permit experience to deliver Kensington ADU projects that work within these
          real-world constraints.
        </div>

        <div className="trust-bar">
          <div className="trust-item">
            <div className="icon">🏛️</div>
            <strong>Historic Home Expertise</strong>
            <span>Victorian, Craftsman &amp; Colonial Revival</span>
          </div>
          <div className="trust-item">
            <div className="icon">📋</div>
            <strong>Town Permits Handled</strong>
            <span>Town of Kensington process — managed</span>
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

        <h2>Types of ADUs We Build in Kensington, MD</h2>
        <p>
          Kensington's smaller lot sizes and historic housing stock make some ADU types more feasible than others. Here
          is a realistic assessment of the ADU types that work in Kensington — with cost ranges for this market:
        </p>

        <div className="adu-type-grid">
          <div className="adu-type-card">
            <span className="adu-tag">Most Feasible in Kensington</span>
            <h3>Basement ADU Conversion</h3>
            <p>
              Converting an existing basement to a legal rental unit is the most practical ADU path for most Kensington
              properties — it adds no new building footprint, avoids setback constraints entirely, and uses existing
              structure. Kensington's Victorian and Craftsman basements have specific considerations (ceiling height,
              stone foundations, older systems) that DMV-GC Group assesses honestly before any design begins. Includes
              egress windows, separate entrance, kitchen, bathroom, fire separation, and Montgomery County COO.
            </p>
            <div className="adu-cost">Typical Cost: $75,000 – $130,000</div>
          </div>
          <div className="adu-type-card">
            <span className="adu-tag">Best for Older Detached Garages</span>
            <h3>Garage Conversion ADU</h3>
            <p>
              Many of Kensington's Victorian and Craftsman homes have detached garages — built in the 1920s–1940s,
              separate from the main house — that are strong ADU conversion candidates. Where the garage has sufficient
              square footage (typically 300+ sq ft) and ceiling height (7'+), conversion to a studio or one-bedroom ADU
              is feasible. Includes insulation, HVAC, plumbing, egress, interior framing, kitchen, and bathroom. Town
              permit and COO required.
            </p>
            <div className="adu-cost">Typical Cost: $65,000 – $120,000</div>
          </div>
          <div className="adu-type-card">
            <span className="adu-tag">For Larger Lots</span>
            <h3>Attached In-Law Suite Addition</h3>
            <p>
              A new addition built onto the side or rear of the main home — separate entrance, bedroom, bathroom, and
              kitchen or kitchenette. Feasible on Kensington's larger lots where setback requirements can be met.
              Architecturally designed to be compatible with the Victorian or Craftsman character of the existing home —
              essential for both aesthetic and town permit approval. Includes full structural design and Town of
              Kensington permits.
            </p>
            <div className="adu-cost">Typical Cost: $110,000 – $220,000</div>
          </div>
          <div className="adu-type-card">
            <span className="adu-tag">Where Lot Size Allows</span>
            <h3>Detached ADU — Backyard Cottage</h3>
            <p>
              New construction of a standalone structure in the rear yard. Less common in Kensington than in Potomac or
              Bethesda due to smaller lot sizes — but feasible on Kensington's larger parcels that exceed the 6,000 sq
              ft minimum with enough room for a detached structure after meeting setback requirements. Where feasible, a
              detached ADU maximizes privacy and rental income potential.
            </p>
            <div className="adu-cost">Typical Cost: $140,000 – $280,000</div>
          </div>
        </div>

        <div className="author-box">
          <div className="author-avatar">🏠</div>
          <div className="author-info">
            <h4>About DMV-GC Group — Kensington's Licensed ADU Construction Contractor</h4>
            <p>
              DMV-GC Group is based in North Bethesda — minutes from Kensington's historic town center on Connecticut
              Avenue. We have completed renovation projects throughout Kensington's Victorian, Queen Anne, and Craftsman
              homes and understand both the construction challenges and the Town permit process that ADU projects here
              require. We hold a Maryland MHIC license, carry full general liability insurance, and back every ADU
              project with a 1-year workmanship warranty.
            </p>
            <div className="author-creds">
              <span className="cred">MHIC Licensed</span>
              <span className="cred">Historic Home Expertise</span>
              <span className="cred">Licensed Plumbers</span>
              <span className="cred">Licensed Electricians</span>
              <span className="cred">4.9★ Rated</span>
              <span className="cred">1-Year Warranty</span>
            </div>
          </div>
        </div>

        <h2>ADU Construction in Kensington's Historic Homes — What's Different</h2>
        <p>
          Building an ADU in a Kensington Victorian or Craftsman home is not the same as building one in a 1990s
          colonial or a newer suburb. The specific characteristics of Kensington's older housing stock create real-world
          constraints and considerations that need to be assessed honestly before any ADU project is designed or priced.
        </p>

        <div className="challenge-grid">
          <div className="challenge-card">
            <h3>📏 Basement Ceiling Height</h3>
            <p>
              Victorian and Craftsman basements in Kensington frequently have ceiling heights of 6'4"–7'2" — at or just
              above the 7-foot minimum required for habitable ADU space. This is the most common constraint in Kensington
              basement ADU projects. DMV-GC Group measures every square foot of ceiling height and identifies where HVAC
              rerouting can recover clearance before any ADU floor plan is designed. Areas that don't meet the minimum
              cannot be counted as habitable ADU space.
            </p>
          </div>
          <div className="challenge-card">
            <h3>💧 Stone &amp; Block Foundation Moisture</h3>
            <p>
              Kensington's oldest homes have rubble stone or early block foundation walls that manage moisture
              differently than modern poured concrete. A basement ADU in a home with an unaddressed moisture history will
              develop moisture problems after it's rented — and fixing them requires removing finished work. DMV-GC
              Group's moisture assessment is a required first step before any basement ADU design is finalized. The
              assessment is in writing, honest, and free.
            </p>
          </div>
          <div className="challenge-card">
            <h3>🔧 Older Plumbing &amp; Electrical</h3>
            <p>
              Homes built before 1950 in Kensington often have galvanized steel supply lines and older electrical
              systems. For a basement ADU where a tenant will rely on water pressure and electrical capacity, these
              systems must be assessed and — where degraded — updated before the ADU is occupied. DMV-GC Group's
              licensed plumbers and electricians assess all systems in the ADU zone during the initial consultation.
            </p>
          </div>
          <div className="challenge-card">
            <h3>🏘️ Lot Size Constraints</h3>
            <p>
              Kensington's historic lots tend to be smaller than most Montgomery County communities — many between 6,000
              and 9,000 sq ft. This directly affects ADU feasibility: detached ADUs require enough rear yard area to
              meet setback requirements while leaving the ADU footprint. On smaller Kensington lots, basement and garage
              conversion ADUs are typically the most practical path. DMV-GC Group confirms ADU feasibility for your
              specific lot before any design work begins.
            </p>
          </div>
        </div>

        <h2>Town of Kensington ADU Permit Process</h2>
        <p>
          Kensington's incorporation as a town within Montgomery County creates a permit jurisdiction that many
          contractors mishandle. All construction within the Town of Kensington's limits — including ADU projects —
          requires permits from the <strong>Town of Kensington</strong>, not from Montgomery County DPS. Filing with the
          wrong authority is one of the most common and costly contractor mistakes in Kensington ADU projects.
        </p>

        <div className="spec-box">
          <h3>📋 Town of Kensington ADU Permit Process — What to Expect</h3>
          <ul>
            <li>
              <strong>Issuing authority:</strong> Town of Kensington Town Hall. All building, electrical, and plumbing
              permits for ADU projects within the town limits are issued by the Town — not by Montgomery County DPS.
            </li>
            <li>
              <strong>Zoning compliance:</strong> Kensington properties must comply with Montgomery County's ADU
              ordinance (which governs the zoning rules — lot size minimum, ADU size limits, setbacks) even though
              building permits are issued by the Town. DMV-GC Group verifies compliance with both the county's zoning
              ordinance and the Town's building permit requirements before filing anything.
            </li>
            <li>
              <strong>Plan review:</strong> The Town reviews submitted drawings before issuing ADU permits. Plans must
              show the proposed floor plan, egress window locations, separate entrance design, kitchen and bathroom
              layout, electrical layout, and any structural work. DMV-GC Group prepares all required drawings in-house.
            </li>
            <li>
              <strong>Architectural compatibility:</strong> For attached additions and garage conversions that modify
              the exterior of a historic Kensington home, the Town's review may consider whether the proposed design is
              compatible with the character of the existing structure. DMV-GC Group designs all Kensington ADU additions
              to be architecturally compatible with Victorian and Craftsman aesthetics.
            </li>
            <li>
              <strong>Certificate of Occupancy:</strong> A COO is required before the ADU can be legally occupied or
              rented. DMV-GC Group manages the COO application and all required inspections through the Town of
              Kensington process.
            </li>
            <li>
              <strong>Properties outside town limits:</strong> A small number of Kensington-mailing-address properties
              fall outside the incorporated town limits — in unincorporated Montgomery County. These properties require
              Montgomery County DPS permits rather than Town permits. DMV-GC Group verifies the exact jurisdiction for
              every Kensington address using parcel boundary data before filing anything.
            </li>
          </ul>
        </div>

        <div className="note">
          ⚠️ <strong>Common Mistake:</strong> Contractors who file Kensington ADU permits with Montgomery County DPS
          receive a permit — but the Town of Kensington's inspectors will not conduct inspections for properties within
          the town limits. The ADU ends up uninspected, without a valid Certificate of Occupancy, and cannot legally be
          rented. DMV-GC Group eliminates this risk by verifying jurisdiction at the start of every Kensington project.
        </div>

        <h2>Benefits of Building an ADU in Kensington</h2>
        <p>
          Kensington's MARC rail connection (Kensington station on the Brunswick Line), proximity to Silver Spring and
          Bethesda, and desirable community character create solid rental demand for quality ADU units. Here is why
          Kensington homeowners are investing in ADUs:
        </p>

        <div className="benefit-grid">
          <div className="benefit-box">
            <div className="icon">💰</div>
            <strong>Rental Income</strong>
            <span>$1,400–$2,200/month for a quality basement or garage conversion ADU in Kensington's rental market</span>
          </div>
          <div className="benefit-box">
            <div className="icon">📈</div>
            <strong>Property Value</strong>
            <span>A legal, permitted ADU adds $80,000–$160,000 to property values in Kensington's appreciating market</span>
          </div>
          <div className="benefit-box">
            <div className="icon">👨‍👩‍👧</div>
            <strong>Multigenerational Living</strong>
            <span>House aging parents or adult children on the same property with full independence and privacy</span>
          </div>
          <div className="benefit-box">
            <div className="icon">🚂</div>
            <strong>MARC Rail Access</strong>
            <span>Kensington's MARC station drives transit-oriented rental demand — commuters to DC and Frederick prefer walkable transit access</span>
          </div>
          <div className="benefit-box">
            <div className="icon">🏡</div>
            <strong>Preserve the Main Home</strong>
            <span>A basement or garage ADU adds rental income without any visual change to the street-facing character of Kensington's historic homes</span>
          </div>
          <div className="benefit-box">
            <div className="icon">🔑</div>
            <strong>Long-Term Flexibility</strong>
            <span>Rent it now, use it as a guest suite later, or offer it as in-law housing — an ADU adapts to your household's changing needs</span>
          </div>
        </div>

        <h2>Kensington Detached Garage Conversions — What Makes Them Work</h2>
        <p>
          Kensington's Victorian and Craftsman homes frequently have detached garages built in the 1920s–1940s —
          separate structures behind the house, originally designed for car storage in an era when cars were new. Many
          of these garages have been used for storage for decades and have never been seriously evaluated as ADU
          candidates. Here is what makes a Kensington garage a strong — or weak — ADU conversion candidate:
        </p>

        <div className="spec-box">
          <h3>🚗 Kensington Detached Garage — ADU Feasibility Assessment</h3>
          <ul>
            <li>
              <strong>Minimum square footage:</strong> A functional studio ADU requires approximately 300–350 sq ft of
              livable space — enough for a sleeping area, bathroom, and kitchenette. A one-bedroom ADU requires 450–550+
              sq ft. Kensington's older single-car garages (typically 12'x20' = 240 sq ft) may be too small for a
              code-compliant ADU without expansion. Two-car garages (typically 20'x20' = 400 sq ft) are often a better
              candidate.
            </li>
            <li>
              <strong>Ceiling height:</strong> The finished ceiling height of the ADU must meet the 7-foot minimum for
              habitable space. Older garages with low-pitched roofs may have insufficient interior height for a standard
              finished ceiling — especially after adding insulation and drywall to the ceiling. DMV-GC Group measures
              the existing interior height during every garage assessment.
            </li>
            <li>
              <strong>Foundation condition:</strong> Older Kensington garages are often built on a concrete slab with no
              formal foundation — or on rubble stone piers. The slab condition (cracks, settlement, moisture) must be
              assessed before any interior finishing. Plumbing for a bathroom requires cutting through the slab for
              drain installation.
            </li>
            <li>
              <strong>Structural condition:</strong> Garages from the 1920s–1940s used wood framing that may have
              deteriorated where it contacts grade — sill plates, bottom plates, and wall sheathing near the ground. A
              structural assessment before conversion planning is essential for any garage of this age.
            </li>
            <li>
              <strong>Utility connections:</strong> Electrical service to the garage (if present) must be evaluated for
              capacity — a dedicated sub-panel is required for an ADU. Water and sewer connections to the garage are
              rarely present and must be run from the main house — the distance affects cost significantly.
            </li>
            <li>
              <strong>Town of Kensington setbacks:</strong> The existing garage must meet the Town of Kensington's
              setback requirements for an ADU use — or a variance may be needed if the structure is non-conforming.
              DMV-GC Group confirms setback compliance for every Kensington garage before any conversion is designed.
            </li>
          </ul>
        </div>

        <h2>Our ADU Construction Process in Kensington</h2>

        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-content">
              <h3>Free In-Home Consultation &amp; Feasibility Assessment</h3>
              <p>
                We visit your Kensington home and assess all ADU options honestly — basement ceiling heights and
                moisture conditions, garage dimensions and structural condition, lot size and setback room for addition
                or detached ADU. We tell you which ADU types are genuinely feasible on your specific property and
                provide a realistic preliminary budget range. No cost, no obligation.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-content">
              <h3>Jurisdiction Verification</h3>
              <p>
                We verify whether your Kensington address falls within the incorporated Town of Kensington limits or in
                unincorporated Montgomery County — confirming which permit authority governs your project before any
                design or application begins. This verification uses parcel boundary data, not mailing address
                assumption.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-content">
              <h3>Systems Assessment &amp; Pre-ADU Remediation Plan</h3>
              <p>
                For basement ADU projects: written moisture assessment and older systems evaluation (plumbing,
                electrical). For garage conversions: structural assessment of framing, slab, and sill plate condition.
                Any required remediation — galvanized plumbing replacement, electrical upgrade, moisture management — is
                designed and priced before ADU design begins.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-content">
              <h3>ADU Design Development</h3>
              <p>
                Our design team develops a floor plan, egress window layout, separate entrance design, kitchen, and
                bathroom configuration — all within the actual constraints confirmed during the assessment phase. For
                attached additions and garage conversions, exterior design is developed to be compatible with the
                Victorian or Craftsman character of the existing home.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">5</div>
            <div className="step-content">
              <h3>Town of Kensington Permit Filing</h3>
              <p>
                We prepare all required drawings and file all applications with the Town of Kensington — building,
                electrical, and plumbing permits. Our permit team manages all Town correspondence, plan review
                responses, and inspection scheduling throughout the project.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">6</div>
            <div className="step-content">
              <h3>Construction — Systems, Structure &amp; Finishes</h3>
              <p>
                Pre-ADU remediation (moisture management, plumbing, electrical) is completed first. Then structural work
                (framing, egress windows, separate entrance), followed by mechanical rough-ins, insulation, drywall,
                flooring, kitchen, bathroom, and all finish work — coordinated by a dedicated project manager
                throughout.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">7</div>
            <div className="step-content">
              <h3>Town Inspections, COO &amp; 1-Year Warranty</h3>
              <p>
                We manage all required Town of Kensington inspections and the Certificate of Occupancy process. After
                COO issuance, we conduct a final walkthrough, address every punch list item, and activate your 1-year
                workmanship warranty.
              </p>
            </div>
          </div>
        </div>

        <h2>ADU Construction Cost in Kensington, MD</h2>
        <p>
          Here is a realistic cost breakdown for <strong>ADU construction in Kensington, Maryland</strong>. Costs for
          older historic homes typically run 10–20% higher than comparable projects in newer construction — reflecting
          additional systems work and moisture management requirements:
        </p>

        <div className="table-responsive">
          <div className="table-holder">
            <table className="cost-table">
              <tbody>
                <tr>
                  <th>ADU Type</th>
                  <th>Typical Cost Range</th>
                  <th>Notes for Kensington</th>
                </tr>
                <tr>
                  <td>Basement ADU Conversion</td>
                  <td>$75,000 – $130,000</td>
                  <td>
                    Includes moisture management, egress windows, separate entrance, kitchen, bathroom, fire separation,
                    COO. Older homes may add 10–15% for systems remediation.
                  </td>
                </tr>
                <tr>
                  <td>Garage Conversion ADU (existing structure)</td>
                  <td>$65,000 – $120,000</td>
                  <td>
                    Older garages may require sill plate replacement, structural reinforcement, and longer utility runs
                    from main house — all assessed during consultation.
                  </td>
                </tr>
                <tr>
                  <td>Garage Conversion + Small Addition</td>
                  <td>$90,000 – $150,000</td>
                  <td>
                    Where the existing garage is slightly undersized, a small bump-out addition can bring it to
                    ADU-viable square footage.
                  </td>
                </tr>
                <tr>
                  <td>Attached In-Law Suite Addition</td>
                  <td>$110,000 – $220,000</td>
                  <td>
                    New addition with separate entrance, bedroom, bathroom, and kitchen. Architectural compatibility
                    with Victorian/Craftsman character required.
                  </td>
                </tr>
                <tr>
                  <td>Detached ADU — Backyard Cottage (where feasible)</td>
                  <td>$140,000 – $280,000</td>
                  <td>
                    New construction. Feasibility depends on lot size and setback room. Less common in Kensington than
                    in larger-lot communities.
                  </td>
                </tr>
                <tr>
                  <td>Pre-ADU Systems Remediation (if needed)</td>
                  <td>$5,000 – $25,000</td>
                  <td>
                    Galvanized plumbing replacement, electrical panel upgrade, moisture management — assessed and priced
                    separately before ADU construction begins.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="tip">
          💡 <strong>Kensington ADU ROI:</strong> A basement ADU or garage conversion in Kensington at $75,000–$120,000
          generating $1,400–$2,000/month in rent pays for itself in approximately 4–7 years — and adds $80,000–$140,000
          to property value. MARC Brunswick Line access from the Kensington station is the strongest rental demand
          driver in this market, attracting commuters to DC, Gaithersburg, and Frederick who prioritize transit access.
        </div>

        <div className="cta-banner">
          <h2>Get a Free ADU Consultation in Kensington</h2>
          <p>
            We'll visit your Kensington home, assess your ADU options honestly — basement feasibility, garage potential,
            lot size for addition — confirm your Town permit jurisdiction, and provide a realistic estimate. No cost, no
            obligation.
          </p>
          <Link href="/contact-us" className="cta-btn">
            Schedule Free ADU Consultation
          </Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">
            📞 Call +1 240-730-1292
          </a>
        </div>

        <h2>What Kensington Homeowners Say About DMV-GC Group</h2>

        <div className="review-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              "We converted our 1920s detached garage into a one-bedroom ADU — DMV-GC Group found structural issues with
              the original framing during their assessment and addressed them before any finish work started. The Town of
              Kensington permits were handled entirely by their team. We're renting it for $1,650/month."
            </p>
            <div className="review-author">
              — Verified Homeowner · <span className="review-location">Historic Core, Kensington MD</span>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              "The basement ADU in our 1910 Victorian was complicated — stone foundation, low ceiling in parts,
              galvanized pipes. DMV-GC Group assessed all of it upfront, gave us honest numbers for the remediation, and
              then delivered a beautiful basement apartment. The MARC commuters who've rented it love the walkability."
            </p>
            <div className="review-author">
              — Verified Homeowner · <span className="review-location">Connecticut Avenue Area, Kensington MD</span>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              "Two other contractors didn't know that Kensington has its own permit process separate from Montgomery
              County. DMV-GC Group knew immediately, filed correctly with the Town, and our ADU project was inspected
              and got its COO without a single problem. That expertise made all the difference."
            </p>
            <div className="review-author">
              — Verified Homeowner · <span className="review-location">Kensington Heights, MD</span>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              "We wanted an in-law suite addition for my mother-in-law. DMV-GC Group designed it to match our Craftsman
              home's exterior — same siding, same window trim detail, same roof pitch. The Town reviewer actually
              complimented the design during the permit review. Mom moved in six months after we started."
            </p>
            <div className="review-author">
              — Verified Homeowner · <span className="review-location">Rock Creek Hills, Kensington MD</span>
            </div>
          </div>
        </div>

        <div className="highlight">
          <p>
            ⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Kensington homeowners trust DMV-GC Group for
            ADU projects that navigate the Town's permit process correctly, address the real-world constraints of
            historic home construction honestly, and deliver quality that suits the character of this community.
          </p>
        </div>

        <h2>Serving Kensington and Surrounding Areas for ADU Construction</h2>

        <div className="areas-grid">
          <span className="area-pill">Kensington, MD</span>
          <span className="area-pill">Historic Core</span>
          <span className="area-pill">Kensington Heights</span>
          <span className="area-pill">Rock Creek Hills</span>
          <span className="area-pill">Garrett Park</span>
          <span className="area-pill">Silver Spring</span>
          <span className="area-pill">Chevy Chase</span>
          <span className="area-pill">Wheaton</span>
          <span className="area-pill">North Bethesda</span>
          <span className="area-pill">Bethesda</span>
        </div>

        <div className="nearby-box">
          <h3>Also serving Garrett Park, MD — Kensington's neighboring historic town</h3>
          <p>
            DMV-GC Group builds ADUs throughout Garrett Park, which borders Kensington to the north and shares the same
            concentration of Victorian and Craftsman homes with similar ADU construction considerations — including
            Garrett Park's own Town permit process.{' '}
            <Link href="/service/adu">View our full ADU construction service page →</Link>
          </p>
        </div>

        <Accordion defaultActiveKey="0" flush>
          {faqData.map((faq) => (
            <Accordion.Item eventKey={faq.eventKey} key={faq.eventKey}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <div className="internal-links">
          <h2>Explore Our Other Services in Kensington</h2>
          <ul>
            <li>
              <Link href="/service/kitchen-remodeling/kensington-md">Kitchen Remodeling in Kensington, MD</Link>
            </li>
            <li>
              <Link href="/service/bathroom-remodeling/kensington-md">Bathroom Remodeling in Kensington, MD</Link>
            </li>
            <li>
              <Link href="/service/basement-remodeling/kensington-md">Basement Remodeling in Kensington, MD</Link>
            </li>
            <li>
              <Link href="/service/home-additions">Home Additions in Kensington, MD</Link>
            </li>
            <li>
              <Link href="/service/design-build">Design-Build Contractor in Kensington, MD</Link>
            </li>
            <li>
              <Link href="/service/electrical-services">Electrical Services for Historic Homes in Kensington</Link>
            </li>
          </ul>
        </div>

        <div className="cta-banner">
          <h2>Ready to Build Your Kensington ADU?</h2>
          <p>
            Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. We'll assess your
            property honestly, confirm your Town permit jurisdiction, and design the ADU that works within Kensington's
            real-world constraints.
          </p>
          <Link href="/contact-us" className="cta-btn">
            Get Free ADU Consultation in Kensington →
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
