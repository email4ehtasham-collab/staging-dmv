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
        "Licensed design-build general contractor serving Chevy Chase, MD. Specializing in ADU construction for Chevy Chase's Colonial Revival and historic homes across all five incorporated villages and unincorporated sections — basement ADU conversions, garage conversions, and in-law suite additions — with multi-jurisdiction permit expertise.",
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
        { "@type": "City", name: "Chevy Chase", sameAs: "https://en.wikipedia.org/wiki/Chevy_Chase,_Maryland" },
        { "@type": "City", name: "Bethesda" },
        { "@type": "City", name: "Kensington" },
        { "@type": "City", name: "Silver Spring" },
        { "@type": "City", name: "Washington DC" },
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
      "@id": "https://www.dmv-gc.com/service/adu/chevy-chase-md#service",
      serviceType: "ADU Construction",
      name: "ADU Construction in Chevy Chase, MD",
      alternateName: ["Accessory Dwelling Unit", "In-Law Suite", "Basement Apartment", "Garage Conversion", "Carriage House"],
      provider: { "@id": "https://www.dmv-gc.com/#business" },
      areaServed: { "@type": "City", name: "Chevy Chase", sameAs: "https://en.wikipedia.org/wiki/Chevy_Chase,_Maryland" },
      description:
        "Full-service ADU design and construction in Chevy Chase, MD. Basement ADU conversions, garage conversions, and in-law suite additions across all Chevy Chase villages and unincorporated sections — with multi-village permit expertise and historic Colonial Revival home construction experience.",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "80000",
          maxPrice: "280000",
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
        { "@type": "ListItem", position: 4, name: "Chevy Chase, MD", item: "https://www.dmv-gc.com/service/adu/chevy-chase-md" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to build an ADU in Chevy Chase, MD?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ADU construction in Chevy Chase, MD typically costs between $80,000 and $280,000 depending on ADU type, village jurisdiction, and finish level. A basement ADU conversion runs $85,000–$145,000. A garage or carriage house conversion costs $80,000–$145,000. An attached in-law suite addition costs $130,000–$280,000. Chevy Chase's premium real estate market and historic Colonial Revival homes — many dating to the 1900s–1930s — add construction complexity compared to newer suburban markets. DMV-GC Group provides free in-home consultations with detailed, honest estimates.",
          },
        },
        {
          "@type": "Question",
          name: "How many permit jurisdictions does Chevy Chase, MD have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chevy Chase, Maryland has up to six different permit jurisdictions depending on which part of the community your property is in. The five incorporated villages — Chevy Chase Village, Town of Chevy Chase, Village of Chevy Chase Section 3, Village of Chevy Chase Section 5, and Village of Martin's Additions — each have their own Town or Village government that issues building permits. Unincorporated Chevy Chase (including Chevy Chase View and other areas) uses Montgomery County DPS permits. DMV-GC Group verifies the exact permit jurisdiction for every Chevy Chase address using parcel boundary data before any application is filed.",
          },
        },
        {
          "@type": "Question",
          name: "Can I build an ADU in Chevy Chase Village?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Chevy Chase Village — the largest and most prominent of the five incorporated villages — has its own permit process through the Village of Chevy Chase Village government. ADU construction within Chevy Chase Village requires Village permits, not Montgomery County DPS permits. The Village's review process considers the design and exterior impact of any new construction or modification, with sensitivity to the Colonial Revival and Tudor character of the neighborhood's historic homes. Interior basement ADUs with no exterior modification typically have a more straightforward Village review. DMV-GC Group handles the complete Chevy Chase Village ADU permit process in-house.",
          },
        },
        {
          "@type": "Question",
          name: "What ADU types work best in Chevy Chase's historic Colonial Revival homes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The most practical ADU types for Chevy Chase's 1900s–1930s Colonial Revival and Tudor homes are basement conversions and garage or carriage house conversions. Both types use existing structure without adding new building footprint — important on Chevy Chase's typically modest lot sizes and in the context of historic home character preservation. Basement ADUs with no exterior modification have minimal historic impact. Garage/carriage house conversions at the rear of the property also have lower street-facing impact than front-facing modifications. Attached in-law suite additions are feasible on some Chevy Chase properties with sufficient rear yard depth. DMV-GC Group assesses all options during the free consultation.",
          },
        },
        {
          "@type": "Question",
          name: "Does DMV-GC Group have experience with Chevy Chase's historic homes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. DMV-GC Group has completed renovation projects throughout Chevy Chase's Colonial Revival and Tudor neighborhoods — including kitchen, bathroom, and basement renovations in homes dating to the 1900s–1930s. We understand the specific construction characteristics of this era: plaster walls, older foundation types, narrower framing bays, galvanized plumbing in pre-1950 homes, and ceiling height variations in below-grade spaces. These factors are assessed honestly during the free consultation and factored into every Chevy Chase estimate before construction begins.",
          },
        },
        {
          "@type": "Question",
          name: "Is DMV-GC Group licensed for ADU construction in Chevy Chase, MD?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Chevy Chase. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every ADU project completed in Chevy Chase.",
          },
        },
      ],
    },
  ],
};

const faqData = [
  {
    eventKey: "0",
    question: "How much does it cost to build an ADU in Chevy Chase, MD?",
    answer: "ADU construction in Chevy Chase typically costs $80,000–$290,000 depending on type. A carriage house conversion runs $80,000–$145,000. A basement ADU costs $85,000–$145,000, with pre-1940 homes adding $6,000–$30,000 for systems remediation. An attached in-law suite addition costs $130,000–$280,000. A detached backyard cottage (where feasible) costs $170,000–$290,000. Chevy Chase's premium market and historic homes mean ADU costs here run higher than in most Montgomery County communities — but so does the rental income and property value addition. DMV-GC Group provides free in-home consultations with honest, itemized estimates.",
  },
  {
    eventKey: "1",
    question: "Which permit authority governs my Chevy Chase ADU?",
    answer: "It depends on your specific parcel location. Chevy Chase has five incorporated villages — Chevy Chase Village, Town of Chevy Chase, Chevy Chase Section 3, Chevy Chase Section 5, and Martin's Additions — each with its own permit authority. Unincorporated areas with Chevy Chase mailing addresses use Montgomery County DPS. DMV-GC Group verifies the correct jurisdiction for every Chevy Chase address using parcel boundary data before any application is filed. This verification is free and takes less than one business day.",
  },
  {
    eventKey: "2",
    question: "Does Chevy Chase Village have its own ADU permit process?",
    answer: "Yes. Chevy Chase Village — the largest of the five incorporated villages — has its own village government and issues its own building permits for all construction within the village boundaries. ADU projects in Chevy Chase Village require village permits, not Montgomery County DPS permits. The village's plan review process considers architectural compatibility for any exterior modification. Basement ADUs with no exterior impact have a more straightforward review path. DMV-GC Group handles the complete Chevy Chase Village permit process in-house.",
  },
  {
    eventKey: "3",
    question: "Can I convert my Chevy Chase carriage house into an ADU?",
    answer: "Yes, if the carriage house has sufficient square footage and ceiling height. Chevy Chase's older carriage houses vary significantly in size and structural condition — DMV-GC Group assesses square footage, ceiling height, framing condition, foundation condition, and utility connection distance during the free consultation. Where the structure is viable, a carriage house conversion is often the most distinctive and premium ADU option in Chevy Chase — retaining the historic character of the original structure while creating a genuinely attractive rental unit.",
  },
  {
    eventKey: "4",
    question: "Does historic construction in Chevy Chase add cost to ADU projects?",
    answer: "Yes, typically 10–25% above comparable projects in newer construction. The primary cost additions are: older systems remediation (galvanized plumbing, limited electrical panels); stone or early concrete foundation moisture management; and the premium finish quality appropriate to Chevy Chase's market position. DMV-GC Group identifies and prices all of these honestly during the free consultation — so the estimate you receive reflects your specific home's actual conditions, not a suburban baseline that will be revised after construction starts.",
  },
  {
    eventKey: "5",
    question: "Is DMV-GC Group licensed for ADU construction in Chevy Chase, MD?",
    answer: "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Chevy Chase across all five villages and unincorporated areas. We employ licensed plumbers and electricians in-house, are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every Chevy Chase ADU project.",
  },
];

export default function ADUChevyChaseMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => {
    setActiveMenuItem("service");
  }, []);

  return (
    <div className="city-service-detail-page adu-chevy-chase-md">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/services">Services</Link>
          <span>›</span>
          <Link href="/service/adu">ADU Construction</Link>
          <span>›</span>
          Chevy Chase, MD
        </nav>

        <div className="hero">
          <div className="hero-location-tag">📍 Serving Chevy Chase, MD</div>
          <h1>ADU Construction in Chevy Chase, MD — Accessory Dwelling Unit Contractor</h1>
          <div className="hero-meta">
            <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
            <span className="badge">✓ MHIC Licensed &amp; Insured</span>
            <span className="badge">✓ All Five Villages Served</span>
            <span className="badge">✓ Historic Home Expertise</span>
            <span className="badge dark">📞 +1 240-730-1292</span>
          </div>
        </div>

        <div className="village-banner">
          <div className="icon">🏛️</div>
          <div>
            <h3>Chevy Chase Has Up to Six Different Permit Jurisdictions — Knowing Which One Governs Your Property Is Step One</h3>
            <p>
              Chevy Chase, Maryland is not one jurisdiction — it is a mosaic of five incorporated villages (Chevy Chase Village, Town of Chevy Chase, Village of Chevy Chase Section 3, Village of Chevy Chase Section 5, and Village of Martin's Additions), plus unincorporated areas governed by Montgomery County. Each village has its own government and issues its own building permits. Filing an ADU permit application with the wrong authority — or with Montgomery County when your property is in a village — produces invalid permits, uninspected work, and no Certificate of Occupancy. DMV-GC Group verifies the exact village or county jurisdiction for every Chevy Chase address using parcel boundary data before any design or application work begins.
            </p>
          </div>
        </div>

        <div className="intro-box">
          Planning to build an <strong>ADU in Chevy Chase, MD</strong>? Chevy Chase is one of the most architecturally distinguished and permit-complex communities in Montgomery County — a neighborhood where Colonial Revival, Tudor, and Craftsman homes from the 1900s–1940s line Connecticut Avenue's residential corridors, and where the community's five incorporated villages each maintain independent permit authority. An ADU here demands a contractor who understands the historic character of these homes, knows which village's permit office governs your specific property, and can design an ADU that belongs in this setting. DMV-GC Group brings all three — managing the complete multi-village permit process, designing within the character of Chevy Chase's historic housing stock, and building to the premium standard these homes deserve.
        </div>

        <div className="trust-bar">
          <div className="trust-item">
            <div className="icon">🏛️</div>
            <strong>All 5 Villages Handled</strong>
            <span>Multi-jurisdiction permit expertise</span>
          </div>
          <div className="trust-item">
            <div className="icon">🏠</div>
            <strong>Historic Home Expertise</strong>
            <span>Colonial Revival &amp; Tudor construction</span>
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

        <h2>Types of ADUs We Build in Chevy Chase, MD</h2>
        <p>
          Chevy Chase's 1900s–1940s Colonial Revival and Tudor homes, combined with the community's typically modest lot sizes relative to its home values, shape which ADU types are most practical here. Here is an honest assessment:
        </p>

        <div className="adu-type-grid">
          <div className="adu-type-card">
            <span className="adu-tag">Most Feasible — Zero Street Impact</span>
            <h3>Basement ADU Conversion</h3>
            <p>
              Converting an existing basement into a legal ADU is the most practical path for most Chevy Chase properties — it adds no new footprint, requires no exterior modification visible from the primary street facade, and works within the existing structure of the historic home. Chevy Chase's Colonial Revival basements have specific characteristics — plaster or poured concrete foundations, ceiling heights ranging from 6'8" to 8'0" depending on construction era, and older systems in pre-1950 homes — that DMV-GC Group assesses honestly during the consultation. A well-executed Chevy Chase basement ADU can be a genuinely elegant unit that suits the character of the home above.
            </p>
            <div className="adu-cost">Typical Cost: $85,000 – $145,000</div>
          </div>
          <div className="adu-type-card">
            <span className="adu-tag">Premium Option — Rear Yard</span>
            <h3>Carriage House / Garage Conversion ADU</h3>
            <p>
              Many of Chevy Chase's older homes have detached garages — sometimes built as true carriage houses — at the rear of the property. Where these structures have sufficient square footage and ceiling height, conversion to a studio or one-bedroom ADU is feasible. A rear-yard carriage house conversion has lower impact on the street-facing historic character than a front-facing addition. These ADUs often command premium rents in Chevy Chase given their detached character and often charming architectural proportions. Structural assessment of older carriage house framing is essential before design begins.
            </p>
            <div className="adu-cost">Typical Cost: $80,000 – $145,000</div>
          </div>
          <div className="adu-type-card">
            <span className="adu-tag">For Rear-Yard Depth</span>
            <h3>Attached In-Law Suite Addition</h3>
            <p>
              A new addition built onto the rear of the main home — separate entrance, bedroom, bathroom, and kitchen. More feasible on Chevy Chase's larger parcels, particularly in Chevy Chase Village and Martin's Additions where some homes sit on 10,000–15,000 sq ft lots. Additions in all five Chevy Chase villages must be designed to be architecturally compatible with the existing home's Colonial Revival or Tudor character — this is both a design standard and a permit review expectation. DMV-GC Group designs every Chevy Chase addition from the first draft to meet this standard.
            </p>
            <div className="adu-cost">Typical Cost: $130,000 – $280,000</div>
          </div>
          <div className="adu-type-card">
            <span className="adu-tag">Rarely Feasible in Chevy Chase</span>
            <h3>Detached Backyard Cottage</h3>
            <p>
              New construction of a standalone ADU structure in the rear yard. Chevy Chase's lot sizes — typically 7,500–12,000 sq ft — combined with required setbacks make this the least common ADU type in the community. Where a property has a sufficiently deep rear yard and the relevant village's setback requirements can be met, a cottage is possible — but the existing carriage house conversion is almost always the more practical and cost-effective path where a detached structure is the goal. DMV-GC Group confirms feasibility during the consultation.
            </p>
            <div className="adu-cost">Typical Cost: $170,000 – $290,000</div>
          </div>
        </div>

        <div className="author-box">
          <div className="author-avatar">🏠</div>
          <div className="author-info">
            <h4>About DMV-GC Group — Chevy Chase's Licensed ADU Construction Contractor</h4>
            <p>
              DMV-GC Group has completed kitchen, bathroom, and basement renovation projects throughout Chevy Chase's Colonial Revival neighborhoods — in Chevy Chase Village, Martin's Additions, and the unincorporated sections alike. We understand the construction characteristics of the 1900s–1940s homes that define this community, the multi-village permit landscape, and the premium finish quality these homes demand. We hold a Maryland MHIC license and back every project with a 1-year workmanship warranty.
            </p>
            <div className="author-creds">
              <span className="cred">MHIC Licensed</span>
              <span className="cred">Multi-Village Permits</span>
              <span className="cred">Historic Home Expertise</span>
              <span className="cred">Licensed Plumbers</span>
              <span className="cred">Licensed Electricians</span>
              <span className="cred">4.9★ Rated</span>
            </div>
          </div>
        </div>

        <h2>Chevy Chase's Five Incorporated Villages — Which One Governs Your Property?</h2>
        <p>
          This is the first and most critical question for any Chevy Chase ADU project. The five incorporated villages of Chevy Chase each have independent municipal governments and issue their own building permits. The unincorporated remainder of the Chevy Chase community uses Montgomery County DPS. Knowing which authority applies to your specific parcel — not just your mailing address — is non-negotiable before any permit work begins.
        </p>

        <div className="village-grid">
          <div className="village-card">
            <h3>Chevy Chase Village</h3>
            <div className="permit-source">Village Permits</div>
            <p>
              The largest and most prominent of the five incorporated villages — centered along Connecticut Avenue north of the DC line. The Village of Chevy Chase Village has its own government and issues building permits through its own office. Predominantly Colonial Revival and Tudor homes from the 1910s–1940s. Lot sizes of 9,000–15,000 sq ft on many streets. Basement ADUs and carriage house conversions are the dominant ADU types. Village review considers architectural compatibility for any exterior modification.
            </p>
          </div>
          <div className="village-card">
            <h3>Town of Chevy Chase</h3>
            <div className="permit-source">Town Permits</div>
            <p>
              Incorporated town with its own permit authority. Located in the central Chevy Chase area. Mix of Colonial Revival and Craftsman homes. Town plan review and inspection process separate from all other villages and from the county. DMV-GC Group manages Town of Chevy Chase permit submissions in-house for all ADU project types.
            </p>
          </div>
          <div className="village-card">
            <h3>Village of Chevy Chase Section 3</h3>
            <div className="permit-source">Village Permits</div>
            <p>
              Incorporated village with its own permit authority — distinct from both Chevy Chase Village and Section 5. Located along the western corridor of the Chevy Chase community. Similar Colonial Revival housing character. Village permits required for all construction within the Section 3 boundary. DMV-GC Group verifies Section 3 vs Section 5 vs unincorporated status for every applicable address.
            </p>
          </div>
          <div className="village-card">
            <h3>Village of Chevy Chase Section 5</h3>
            <div className="permit-source">Village Permits</div>
            <p>
              Incorporated village with its own permit authority — separate from Section 3 despite geographic adjacency. Village permits required. The Section numbering system creates regular confusion for contractors unfamiliar with Chevy Chase's municipal structure. DMV-GC Group uses parcel boundary data to confirm which Section — or county jurisdiction — applies to every Chevy Chase project.
            </p>
          </div>
          <div className="village-card">
            <h3>Village of Martin's Additions</h3>
            <div className="permit-source">Village Permits</div>
            <p>
              Incorporated village with its own permit authority. Located in the southern portion of the Chevy Chase community adjacent to the DC line. Some of the community's most elegant homes — larger lots, mature trees, and Colonial Revival architecture at its finest. Village plan review for exterior modifications. Basement ADUs with no exterior change have a more streamlined review path.
            </p>
          </div>
          <div className="village-card">
            <h3>Unincorporated Chevy Chase</h3>
            <div className="permit-source county">County Permits</div>
            <p>
              Areas with Chevy Chase mailing addresses that fall outside all five village boundaries — including Chevy Chase View and other areas — use Montgomery County DPS permits. These properties are often mistakenly filed as village permit projects. DMV-GC Group verifies county vs village jurisdiction using parcel boundary data for every Chevy Chase address before any application is filed.
            </p>
          </div>
        </div>

        <div className="warning">
          ⚠️ <strong>Most Complex Permit Landscape in the Campaign:</strong> Chevy Chase's five-village structure means a contractor working on three adjacent Chevy Chase homes could be filing permits with three completely different permit authorities. DMV-GC Group verifies jurisdiction for every address individually — never assuming that proximity to a known village address means the same jurisdiction applies.
        </div>

        <h2>ADU Construction in Chevy Chase's Historic Homes — What to Assess Before Designing</h2>
        <p>
          Chevy Chase's 1900s–1940s Colonial Revival and Tudor homes are architecturally exceptional — and they present specific construction realities for ADU projects that require honest pre-design assessment. DMV-GC Group addresses all of these during the free consultation.
        </p>

        <div className="spec-box">
          <h3>🔧 Historic Home ADU Assessment — Chevy Chase Specific</h3>
          <ul>
            <li>
              <strong>Foundation type and era:</strong> Homes built before 1920 in Chevy Chase commonly have rubble stone or early brick foundations — more porous than poured concrete and requiring interior moisture management. Homes from the 1920s–1940s more commonly have poured concrete or concrete block. The foundation type determines the moisture management approach for any basement ADU.
            </li>
            <li>
              <strong>Basement ceiling height:</strong> Chevy Chase basement ceiling heights vary meaningfully by construction era — 1910s–1920s homes often have 6'6"–7'4" heights, while 1930s–1940s construction more commonly reaches 7'4"–8'0". DMV-GC Group measures every square foot during the consultation. Areas below the 7-foot minimum cannot count as habitable ADU space.
            </li>
            <li>
              <strong>Plaster walls and ceilings:</strong> Chevy Chase's older homes typically have original plaster walls — not drywall. Plaster is heavier than drywall and requires different fastening for any work affecting the plaster on the floors above the ADU. Where the ADU ceiling is a plaster floor-ceiling assembly, the fire separation strategy must account for plaster's specific characteristics.
            </li>
            <li>
              <strong>Galvanized plumbing:</strong> Pre-1950 Chevy Chase homes frequently retain original or partial galvanized steel supply lines. DMV-GC Group's licensed plumbers assess supply line condition and water pressure during the consultation for every older Chevy Chase home — addressing any degraded galvanized lines before the ADU is designed for tenant use.
            </li>
            <li>
              <strong>Electrical panel capacity:</strong> Older Chevy Chase homes may have 100-amp or sub-100-amp panels. An ADU sub-panel requires adequate main panel capacity. Where the existing panel is at capacity, an upgrade is required before ADU electrical work is sized. DMV-GC Group's licensed electricians assess panel capacity during the consultation.
            </li>
            <li>
              <strong>Carriage house structural condition:</strong> Chevy Chase's older carriage houses and detached garages — built in the 1910s–1940s — may have deteriorated sill plates, under-sized framing, and foundation conditions that require structural attention before interior conversion. A structural assessment of any older Chevy Chase carriage house is essential before conversion design begins.
            </li>
            <li>
              <strong>Finish quality expectations:</strong> Chevy Chase homes are among the most valuable in Montgomery County. An ADU that looks incongruously low-quality relative to the main home reduces both rental appeal and property value. DMV-GC Group specifies finishes for Chevy Chase ADU projects appropriate to the premium position of these homes in the market.
            </li>
          </ul>
        </div>

        <h2>Benefits of Building an ADU in Chevy Chase</h2>
        <p>
          Chevy Chase's location — straddling the DC line along Connecticut Avenue, walkable to Friendship Heights and Tenleytown Metro stations, minutes from Bethesda — creates one of the strongest ADU rental markets in all of Montgomery County.
        </p>

        <div className="benefit-grid">
          <div className="benefit-box">
            <div className="icon">💰</div>
            <strong>Premium Rental Income</strong>
            <span>$1,800–$2,800/month for quality basement and carriage house ADUs — among the highest in Montgomery County</span>
          </div>
          <div className="benefit-box">
            <div className="icon">📈</div>
            <strong>High Value Addition</strong>
            <span>A permitted ADU adds $130,000–$220,000 to Chevy Chase property values — proportionate to the premium base value of these homes</span>
          </div>
          <div className="benefit-box">
            <div className="icon">🚇</div>
            <strong>Metro Proximity</strong>
            <span>Friendship Heights (Red Line) and Tenleytown (Red Line) Metro stations within walking distance of most Chevy Chase MD addresses</span>
          </div>
          <div className="benefit-box">
            <div className="icon">🏙️</div>
            <strong>DC Border Premium</strong>
            <span>Chevy Chase MD's Connecticut Avenue location — immediately north of DC — attracts DC-employed renters who want Maryland taxes with DC access</span>
          </div>
          <div className="benefit-box">
            <div className="icon">👨‍👩‍👧</div>
            <strong>Multigenerational Living</strong>
            <span>House aging parents or adult children on the same property — the basement ADU or carriage house provides complete independence with proximity</span>
          </div>
          <div className="benefit-box">
            <div className="icon">🔑</div>
            <strong>Strong Payback</strong>
            <span>At $2,000+/month, an $85,000–$120,000 Chevy Chase basement ADU reaches full payback in approximately 4–5 years</span>
          </div>
        </div>

        <h2>Our ADU Construction Process in Chevy Chase</h2>

        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-content">
              <h3>Free In-Home Consultation — Historic Home &amp; Village Assessment</h3>
              <p>
                We visit your Chevy Chase home and assess all ADU options — basement ceiling height and foundation type, carriage house or garage dimensions and structural condition, lot size for addition potential. We also document the historic construction characteristics that affect scope and cost. No cost, no obligation.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-content">
              <h3>Village Jurisdiction Verification</h3>
              <p>
                We confirm which of the five villages — or unincorporated Montgomery County — governs your specific Chevy Chase parcel using parcel boundary data. This single verification step is the most important preparatory action for any Chevy Chase ADU project and prevents the most costly permit mistakes in this community.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-content">
              <h3>Historic Home Systems Assessment</h3>
              <p>
                Licensed plumbers assess galvanized supply line condition and water pressure. Licensed electricians assess main panel capacity. Foundation moisture conditions are evaluated. Any required pre-ADU remediation — plumbing replacement, electrical upgrade, moisture management — is designed and priced before ADU scope is finalized.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-content">
              <h3>ADU Design Development</h3>
              <p>
                Our design team develops a floor plan within the confirmed constraints of your Chevy Chase home — ceiling heights, foundation type, entrance configuration, egress window siting away from primary street facades. For carriage house conversions, exterior design preserves the historic character of the original structure. For additions, exterior design is developed to be compatible with the Colonial Revival or Tudor character of the main home.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">5</div>
            <div className="step-content">
              <h3>Village Permit Filing (Correct Authority)</h3>
              <p>
                We file all required permits with the correct village government — Chevy Chase Village, Town of Chevy Chase, Section 3, Section 5, or Martin's Additions — or with Montgomery County DPS for unincorporated properties. Our permit team manages all correspondence and inspection scheduling with the applicable authority throughout the project.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">6</div>
            <div className="step-content">
              <h3>Pre-ADU Remediation + Construction</h3>
              <p>
                Any required plumbing, electrical, or moisture remediation is completed first. Then egress windows (sited rear/side), framing, mechanical rough-ins, insulation, drywall, flooring, kitchen, bathroom, and all finish work — at the premium quality level appropriate to Chevy Chase's market.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">7</div>
            <div className="step-content">
              <h3>Village Inspections, COO &amp; 1-Year Warranty</h3>
              <p>
                We manage all required inspections with the correct village or county authority and the Certificate of Occupancy process. After COO issuance, we conduct a thorough final walkthrough, address every punch list item, and activate your 1-year workmanship warranty.
              </p>
            </div>
          </div>
        </div>

        <h2>ADU Construction Cost in Chevy Chase, MD</h2>
        <p>
          Here is a realistic cost breakdown for <strong>ADU construction in Chevy Chase, Maryland</strong>. Costs reflect the premium quality expected in this market and the construction complexity of historic homes:
        </p>

        <div className="table-responsive">
          <div className="table-holder">
            <table className="cost-table">
              <tbody>
                <tr>
                  <th>ADU Type</th>
                  <th>Typical Cost Range</th>
                  <th>Notes for Chevy Chase</th>
                </tr>
                <tr>
                  <td>Basement ADU Conversion</td>
                  <td>$85,000 – $145,000</td>
                  <td>
                    Includes moisture management, egress windows (rear/side siting), separate entrance, kitchen, bathroom, fire separation, village COO. Pre-1940 homes add 10–20% for systems remediation. Premium finishes throughout.
                  </td>
                </tr>
                <tr>
                  <td>Carriage House / Garage Conversion ADU</td>
                  <td>$80,000 – $145,000</td>
                  <td>
                    Structural assessment of older framing required. Utility run distance from main house is primary variable. Exterior character of original structure preserved where possible.
                  </td>
                </tr>
                <tr>
                  <td>Attached In-Law Suite Addition</td>
                  <td>$130,000 – $280,000</td>
                  <td>
                    Designed for compatibility with Colonial Revival or Tudor character. Village permit review for exterior modifications in all five villages. Rear-yard siting preferred.
                  </td>
                </tr>
                <tr>
                  <td>Detached Backyard Cottage (where feasible)</td>
                  <td>$170,000 – $290,000</td>
                  <td>
                    Feasibility depends on rear yard depth after setbacks. Less common than carriage house conversion in Chevy Chase. Premium construction standard to match community.
                  </td>
                </tr>
                <tr>
                  <td>Pre-ADU Systems Remediation</td>
                  <td>$6,000 – $30,000</td>
                  <td>
                    Galvanized plumbing replacement, electrical panel upgrade, foundation moisture management — assessed and priced separately before ADU construction begins.
                  </td>
                </tr>
                <tr>
                  <td>Separate Electrical Meter (Pepco)</td>
                  <td>$2,500 – $5,000</td>
                  <td>
                    Recommended for rental ADUs. Pepco coordination included. Older homes with limited panel capacity may require panel upgrade before meter separation.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="tip">
          💡 <strong>Chevy Chase ADU ROI:</strong> A quality basement ADU in Chevy Chase at $95,000–$125,000 renting at $2,000–$2,500/month near the Friendship Heights or Tenleytown Metro reaches full payback in approximately 4–5 years in rental income — and adds $130,000–$200,000+ to the home's appraised value at COO issuance. On Chevy Chase's premium base home values, the ADU addition represents a proportionally larger absolute value gain than in most Montgomery County communities. The combination of DC-adjacent location, Red Line Metro access, and Chevy Chase's prestige make this one of the strongest absolute-dollar ADU investments in the entire campaign.
        </div>

        <div className="cta-banner">
          <h2>Get a Free ADU Consultation in Chevy Chase</h2>
          <p>
            We'll visit your Chevy Chase home, verify your village permit jurisdiction, assess your basement and carriage house options, evaluate older systems honestly, and give you a realistic estimate. No cost, no obligation.
          </p>
          <Link href="/contact-us" className="cta-btn">
            Schedule Free ADU Consultation
          </Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">
            📞 Call +1 240-730-1292
          </a>
        </div>

        <h2>What Chevy Chase Homeowners Say About DMV-GC Group</h2>

        <div className="review-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              "Our 1928 Colonial in Chevy Chase Village needed a basement ADU. DMV-GC Group verified we needed Village permits — not county — before anything else. The stone foundation moisture was managed correctly, the egress window went in the rear, and the Village inspector passed everything on the first inspection. Renting at $2,300/month to a DC commuter."
            </p>
            <div className="review-author">
              — Verified Homeowner · <span className="review-location">Chevy Chase Village, MD</span>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              "We converted our 1930s carriage house into a one-bedroom ADU. DMV-GC Group kept the original exterior — the board-and-batten siding and the old wooden doors on the front — and completely rebuilt the interior. The Martin's Additions Village permit process was handled entirely by their team. It's the most charming rental unit I've ever seen."
            </p>
            <div className="review-author">
              — Verified Homeowner · <span className="review-location">Martin's Additions, Chevy Chase MD</span>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              "Three contractors we called didn't know that our Section 3 address has its own village permit process. DMV-GC Group identified it immediately, filed with the correct Village authority, and we had no permit delays or corrections. That knowledge of the multi-village structure is genuinely rare — and it saved us significant time."
            </p>
            <div className="review-author">
              — Verified Homeowner · <span className="review-location">Chevy Chase Section 3, MD</span>
            </div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">
              "The finish quality of our basement ADU genuinely matches the main house. DMV-GC Group understood from the first conversation that Chevy Chase homes have a standard — and they delivered it. The galvanized pipes were replaced, the moisture was managed, and the result is a beautiful apartment that we're proud to rent out."
            </p>
            <div className="review-author">
              — Verified Homeowner · <span className="review-location">Town of Chevy Chase, MD</span>
            </div>
          </div>
        </div>

        <div className="highlight">
          <p>
            ⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Chevy Chase homeowners trust DMV-GC Group for ADU projects that navigate the five-village permit complexity correctly, address historic home construction honestly, and deliver the premium quality that this community's exceptional homes deserve.
          </p>
        </div>

        <h2>Serving All Chevy Chase, MD Communities for ADU Construction</h2>

        <div className="areas-grid">
          <span className="area-pill">Chevy Chase Village</span>
          <span className="area-pill">Town of Chevy Chase</span>
          <span className="area-pill">Chevy Chase Section 3</span>
          <span className="area-pill">Chevy Chase Section 5</span>
          <span className="area-pill">Martin's Additions</span>
          <span className="area-pill">Chevy Chase View</span>
          <span className="area-pill">Bethesda</span>
          <span className="area-pill">Kensington</span>
          <span className="area-pill">Silver Spring</span>
          <span className="area-pill">Washington DC</span>
        </div>

        <div className="nearby-box">
          <h3>Also serving Bethesda, MD — directly west of Chevy Chase</h3>
          <p>
            DMV-GC Group builds ADUs throughout Bethesda, which borders Chevy Chase to the west and shares a similar premium market position and Colonial Revival housing stock.{' '}
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
          <h2>Explore Our Other Services in Chevy Chase</h2>
          <ul>
            <li>
              <Link href="/service/kitchen-remodeling/chevy-chase-md">Kitchen Remodeling in Chevy Chase, MD</Link>
            </li>
            <li>
              <Link href="/service/bathroom-remodeling">Bathroom Remodeling in Chevy Chase, MD</Link>
            </li>
            <li>
              <Link href="/service/basement-remodeling/chevy-chase-md">Basement Remodeling in Chevy Chase, MD</Link>
            </li>
            <li>
              <Link href="/service/home-additions">Home Additions in Chevy Chase, MD</Link>
            </li>
            <li>
              <Link href="/service/design-build">Design-Build Contractor in Chevy Chase, MD</Link>
            </li>
            <li>
              <Link href="/service/electrical-services">Electrical Services for Historic Homes in Chevy Chase</Link>
            </li>
          </ul>
        </div>

        <div className="cta-banner">
          <h2>Ready to Build Your Chevy Chase ADU?</h2>
          <p>
            Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. We'll identify your village jurisdiction, assess your basement and carriage house, and design the ADU that suits your historic Chevy Chase home.
          </p>
          <Link href="/contact-us" className="cta-btn">
            Get Free ADU Consultation in Chevy Chase →
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
