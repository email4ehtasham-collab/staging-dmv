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
      "description": "Licensed design-build general contractor serving Rockville, MD. Specializing in ADU construction across Rockville's diverse housing — basement ADUs, garage conversions, and in-law suite additions — with City of Rockville and Montgomery County permit expertise and HOA coordination for King Farm, Fallsgrove, and Congressional.",
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
        { "@type": "City", "name": "Gaithersburg" },
        { "@type": "City", "name": "North Bethesda" },
        { "@type": "City", "name": "Potomac" },
        { "@type": "City", "name": "Germantown" }
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
      "@id": "https://www.dmv-gc.com/service/adu/rockville-md#service",
      "serviceType": "ADU Construction",
      "name": "ADU Construction in Rockville, MD",
      "alternateName": ["Accessory Dwelling Unit", "In-Law Suite", "Basement Apartment", "Garage Conversion"],
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Rockville", "sameAs": "https://en.wikipedia.org/wiki/Rockville,_Maryland" },
      "description": "Full-service ADU design and construction in Rockville, MD. Basement ADU conversions, garage conversions, and in-law suite additions across all Rockville neighborhoods — with City of Rockville and Montgomery County permit expertise and HOA coordination for King Farm, Fallsgrove, and Congressional.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "58000", "maxPrice": "205000", "priceCurrency": "USD" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "ADU Construction", "item": "https://www.dmv-gc.com/service/adu" },
        { "@type": "ListItem", "position": 4, "name": "Rockville, MD", "item": "https://www.dmv-gc.com/service/adu/rockville-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to build an ADU in Rockville, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ADU construction in Rockville, MD typically costs between $58,000 and $205,000 depending on ADU type, neighborhood, and HOA requirements. A basement ADU conversion runs $62,000–$118,000. A garage conversion ADU costs $58,000–$108,000. An attached in-law suite addition costs $98,000–$205,000. Newer construction neighborhoods like King Farm and Fallsgrove have basement rough-ins and higher ceiling heights that can reduce costs versus older stock. DMV-GC Group provides free in-home consultations with detailed estimates."
          }
        },
        {
          "@type": "Question",
          "name": "Does Rockville use City permits or Montgomery County permits for ADU construction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on your property's location. The City of Rockville is an incorporated municipality with its own Department of Community Development that issues building permits for properties within the city limits — including King Farm, Fallsgrove, West End, and Twinbrook neighborhoods. Properties in unincorporated areas with Rockville mailing addresses — including parts of Congressional, some areas north of Rockville Pike, and others — require Montgomery County DPS permits instead. DMV-GC Group verifies the correct permit authority for every Rockville address using parcel boundary data before filing any application."
          }
        },
        {
          "@type": "Question",
          "name": "Can I build an ADU in King Farm or Fallsgrove?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. King Farm and Fallsgrove are within the City of Rockville — so City permits apply. Both communities also have active HOAs with Architectural Review Committees that must approve exterior modifications before city permits are filed. Basement ADUs with no exterior impact typically do not require ARC review. Any new entrance, egress window opening, garage conversion, or addition affecting the home's exterior requires ARC approval first. DMV-GC Group prepares all required ARC documentation and manages the review process as a standard part of King Farm and Fallsgrove ADU projects. Both communities have newer construction with higher ceilings and often existing rough-ins — making basement ADUs here particularly practical."
          }
        },
        {
          "@type": "Question",
          "name": "What ADU types work best in Rockville?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most practical ADU types across Rockville's diverse housing stock are: basement ADU conversions (most common across all Rockville neighborhoods); garage conversions (where a detached or attached garage exists); and attached in-law suite additions (on lots with sufficient rear yard room). Newer communities like King Farm and Fallsgrove have 8'–9' basement ceilings and often existing plumbing rough-ins — making basement ADUs particularly cost-effective here. Older neighborhoods like West End and Twinbrook have solid basements but may have older systems requiring assessment. DMV-GC Group evaluates which ADU type is most practical for your specific Rockville property during the free consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group handle HOA coordination for King Farm and Fallsgrove ADU projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group handles all HOA coordination for King Farm, Fallsgrove, Congressional, and any other Rockville HOA community — including ARC documentation preparation, submission, and review management. We design all ADU additions to be compatible with each community's architectural character before ARC submission, minimizing revision requests. HOA review and city permit processing run concurrently wherever possible to minimize total project timeline."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for ADU construction in Rockville, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Rockville. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every ADU project completed in Rockville."
          }
        }
      ]
    }
  ]
};

const faqData = [
  {
    eventKey: "0",
    question: "How much does it cost to build an ADU in Rockville, MD?",
    answer: "ADU construction in Rockville typically costs $58,000–$205,000 depending on type and neighborhood. A newer King Farm or Fallsgrove basement ADU runs $62,000–$100,000. An established neighborhood basement ADU costs $64,000–$118,000. A garage conversion runs $58,000–$108,000. An attached in-law suite costs $98,000–$205,000. A detached backyard cottage costs $138,000–$260,000. Where a rough-in exists, the bathroom addition cost is reduced $6,000–$12,000. DMV-GC Group provides free in-home consultations with itemized estimates."
  },
  {
    eventKey: "1",
    question: "Does my Rockville ADU need City or County permits?",
    answer: "It depends on your specific parcel location — not your mailing address. Properties within the City of Rockville use City of Rockville Department of Community Development permits (111 Maryland Avenue). Properties in unincorporated Montgomery County with Rockville mailing addresses use Montgomery County DPS permits. DMV-GC Group verifies the correct jurisdiction for every Rockville address using parcel boundary data before filing anything. Congressional addresses especially need verification — some are City, some are County."
  },
  {
    eventKey: "2",
    question: "Does a King Farm basement ADU require HOA ARC approval?",
    answer: "For interior-only basement ADUs with no exterior modification — no new windows, no new entrance changes, no exterior changes visible from the street — King Farm ARC review is typically not required. You proceed to City of Rockville permits directly. However, any exterior modification — new egress window opening, new entrance addition, garage conversion, room addition — requires King Farm Citizens Assembly ARC approval before city permits are filed. DMV-GC Group determines the correct path for your specific King Farm ADU scope and manages ARC submissions where needed."
  },
  {
    eventKey: "3",
    question: "Do King Farm and Fallsgrove homes have basement rough-ins?",
    answer: "Many do — a significant proportion of 1990s–2000s construction in King Farm and Fallsgrove was built with basement plumbing rough-ins (a drain stub-out in the slab for a future bathroom). Completing an existing rough-in saves $6,000–$12,000 versus cutting new drain trenches. DMV-GC Group checks for rough-ins during every King Farm and Fallsgrove consultation. Finding one meaningfully reduces the cost of the basement bathroom addition."
  },
  {
    eventKey: "4",
    question: "What makes Rockville a strong ADU investment market?",
    answer: "Two primary drivers: Shady Grove Metro (Red Line terminus) within 1–2 miles of King Farm and Fallsgrove, and the I-270 biotech corridor employment base (NIH, FDA, NIST, and major biotech companies). Together these support ADU rents of $1,400–$2,100/month and consistent occupancy. A well-executed basement ADU at $65,000–$90,000 in the Shady Grove Metro corridor reaches full payback in approximately 4–5 years in rental income — and adds $90,000–$130,000 to appraised value at COO issuance."
  },
  {
    eventKey: "5",
    question: "Is DMV-GC Group licensed for ADU construction in Rockville, MD?",
    answer: "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Rockville. We employ licensed plumbers and electricians in-house, are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every ADU project in Rockville — whether permitted through the City or the County."
  }
];

export default function ADURockvilleMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => {
    setActiveMenuItem("service");
  }, []);

  return (
    <main>
      <div className="city-service-detail-page adu-rockville-md">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/services">Services</Link><span>›</span>
            <Link href="/service/adu">ADU Construction</Link><span>›</span>
            Rockville, MD
          </nav>

          <div className="hero">
            <div className="hero-location-tag">📍 Serving Rockville, MD</div>
            <h1>ADU Construction in Rockville, MD — Accessory Dwelling Unit Contractor</h1>
            <div className="hero-meta">
              <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
              <span className="badge">✓ MHIC Licensed & Insured</span>
              <span className="badge">✓ City & County Permits Handled</span>
              <span className="badge">✓ HOA / ARC Coordination</span>
              <span className="badge dark">📞 +1 240-730-1292</span>
            </div>
          </div>

          <div className="permit-banner">
            <div className="icon">🏛️</div>
            <div>
              <h3>Rockville ADU Permits — City of Rockville or Montgomery County? Your Address Alone Won't Tell You</h3>
              <p>Like Gaithersburg, Rockville is an incorporated city within Montgomery County — but a meaningful number of properties with Rockville mailing addresses fall outside the city limits and require Montgomery County DPS permits instead. King Farm, Fallsgrove, West End, and Twinbrook are within city limits. Parts of Congressional, Traville, and areas north of Norbeck Road fall in unincorporated Montgomery County. Filing with the wrong authority means invalid permits, uninspected work, and no Certificate of Occupancy. DMV-GC Group verifies the correct permit jurisdiction for every Rockville address using parcel boundary data — before any design work or application is prepared.</p>
            </div>
          </div>

          <div className="intro-box">
            Planning to build an <strong>ADU in Rockville, MD</strong>? Rockville is one of Montgomery County's most diverse and dynamic ADU markets — a city where planned communities like King Farm and Fallsgrove sit alongside established mid-century neighborhoods like West End and Twinbrook, all anchored by the Shady Grove Metro station and strong I-270 corridor employment. Whether you're converting a basement in a King Farm single-family home, finishing a Fallsgrove townhome lower level, or building an in-law suite addition in an established West End colonial, DMV-GC Group's licensed team manages the complete process — jurisdiction verification, HOA coordination, City or County permits, construction, and Certificate of Occupancy — under one contract.
          </div>

          <div className="trust-bar">
            <div className="trust-item">
              <div className="icon">🏛️</div>
              <strong>City & County Permits</strong>
              <span>Both jurisdictions managed in-house</span>
            </div>
            <div className="trust-item">
              <div className="icon">🏘️</div>
              <strong>HOA / ARC Expertise</strong>
              <span>King Farm, Fallsgrove & Congressional</span>
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

          <h2>Types of ADUs We Build in Rockville, MD</h2>
          <p>
            Rockville's housing stock spans a wide range — from 1950s–70s colonials and ranches in established West End and Twinbrook neighborhoods to 1990s–2000s planned community construction in King Farm and Fallsgrove. Each presents different ADU opportunities:
          </p>

          <div className="adu-type-grid">
            <div className="adu-type-card">
              <span className="adu-tag">Most Common Across All Rockville</span>
              <h3>Basement ADU Conversion</h3>
              <p>Rockville's single-family homes across all neighborhoods have basements well-suited to ADU conversion. Newer King Farm and Fallsgrove construction (1990s–2000s) often has 8'–9' ceilings, poured concrete foundations, and existing plumbing rough-ins — making conversions particularly practical. Established West End and Twinbrook homes (1950s–70s) have solid basements with standard configurations. Includes egress windows, separate entrance, kitchen, bathroom, fire separation, and COO from City or County depending on jurisdiction.</p>
              <div className="adu-cost">Typical Cost: $62,000 – $118,000</div>
            </div>
            <div className="adu-type-card">
              <span className="adu-tag">Fastest Path</span>
              <h3>Garage Conversion ADU</h3>
              <p>Where a detached or attached garage exists, conversion is often one of the fastest ADU paths in Rockville. In King Farm and Fallsgrove, garage conversions affecting the exterior require HOA ARC review before City permits are filed. In established neighborhoods, detached garages on larger lots are strong standalone conversion candidates. DMV-GC Group assesses garage size, ceiling height, and utility connection feasibility during the free consultation.</p>
              <div className="adu-cost">Typical Cost: $58,000 – $108,000</div>
            </div>
            <div className="adu-type-card">
              <span className="adu-tag">For Multigenerational Living</span>
              <h3>Attached In-Law Suite Addition</h3>
              <p>A new addition built onto the main home — separate entrance, bedroom, bathroom, and kitchen. Most feasible in West End, Twinbrook, and Congressional area homes with larger rear yards. In King Farm and Fallsgrove, additions require HOA ARC review for architectural compatibility. DMV-GC Group designs all Rockville additions to be compatible with the existing home's character — both for good design and to facilitate ARC approval.</p>
              <div className="adu-cost">Typical Cost: $98,000 – $205,000</div>
            </div>
            <div className="adu-type-card">
              <span className="adu-tag">Where Lot Size Allows</span>
              <h3>Detached ADU — Backyard Cottage</h3>
              <p>New construction of a standalone structure in the rear yard. Feasibility depends on lot size and HOA guidelines. More common in West End and Congressional area homes on larger parcels than in denser King Farm and Fallsgrove. Where feasible and HOA-permitted, a detached ADU provides maximum privacy and the strongest rental income potential. DMV-GC Group confirms feasibility for your specific Rockville lot during the consultation.</p>
              <div className="adu-cost">Typical Cost: $138,000 – $260,000</div>
            </div>
          </div>

          <div className="author-box">
            <div className="author-avatar">🏠</div>
            <div className="author-info">
              <h4>About DMV-GC Group — Rockville's Licensed ADU Construction Contractor</h4>
              <p>DMV-GC Group is based in North Bethesda — directly adjacent to Rockville along Rockville Pike. We have completed kitchen, bathroom, and basement renovation projects throughout Rockville's neighborhoods — from King Farm townhomes to West End colonials. We understand Rockville's permit dual-jurisdiction complexity, the HOA ARC processes in King Farm, Fallsgrove, and Congressional, and the construction characteristics of each neighborhood's housing stock. We hold a Maryland MHIC license and back every project with a 1-year workmanship warranty.</p>
              <div className="author-creds">
                <span className="cred">MHIC Licensed</span>
                <span className="cred">City & County Permits</span>
                <span className="cred">HOA / ARC Experience</span>
                <span className="cred">Licensed Plumbers</span>
                <span className="cred">Licensed Electricians</span>
                <span className="cred">4.9★ Rated</span>
              </div>
            </div>
          </div>

          <h2>City of Rockville vs Montgomery County — Which Permits Your ADU?</h2>
          <p>
            Rockville's incorporated city limits create the same permit dual-jurisdiction that Gaithersburg homeowners face — but with Rockville-specific neighborhood boundaries. Getting this wrong means permits issued by the wrong authority, uninspected work, and no valid Certificate of Occupancy.
          </p>

          <div className="jurisdiction-grid">
            <div className="jurisdiction-card city">
              <h3>🏛️ City of Rockville Permits</h3>
              <ul>
                <li>Issuing authority: City of Rockville, Department of Community Development, 111 Maryland Avenue</li>
                <li>Covers: Properties within the incorporated city limits</li>
                <li>Neighborhoods typically in City: King Farm, Fallsgrove, West End, Twinbrook, Rockville Town Center area, College Gardens</li>
                <li>City has its own plan review and inspection staff — separate from county</li>
                <li>Zoning compliance still governed by Montgomery County ADU ordinance</li>
                <li>King Farm and Fallsgrove HOA ARC approval required before city permits filed</li>
              </ul>
            </div>
            <div className="jurisdiction-card county">
              <h3>📋 Montgomery County DPS Permits</h3>
              <ul>
                <li>Issuing authority: Montgomery County Department of Permitting Services</li>
                <li>Covers: Unincorporated areas with Rockville mailing addresses</li>
                <li>Areas typically in County: Parts of Congressional, Traville, areas north of Norbeck Road, some Rockville Pike corridor properties</li>
                <li>Montgomery County ADU ordinance and building code apply</li>
                <li>Some county-jurisdiction Rockville properties still have HOAs — verified separately</li>
                <li>Montgomery County COO required before ADU occupancy</li>
              </ul>
            </div>
          </div>

          <div className="warning">
            ⚠️ <strong>Common Mistake:</strong> Rockville and Gaithersburg are the two Rockville Pike corridor cities where contractors most commonly file permits with the wrong authority. DMV-GC Group verifies jurisdiction using parcel boundary data at the start of every Rockville project — not mailing address assumption. This verification is free and takes less than one business day.
          </div>

          <h2>HOA Coordination for Rockville's Planned Communities</h2>
          <p>
            Several of Rockville's most active ADU markets are in HOA-governed planned communities. DMV-GC Group handles all HOA coordination as standard practice for every applicable Rockville ADU project.
          </p>

          <div className="hoa-grid">
            <div className="hoa-card">
              <h3>🏘️ King Farm</h3>
              <p>King Farm is a large New Urbanist planned community (late 1990s–2000s) in the City of Rockville — one of the most recognizable planned developments in Montgomery County. The King Farm Citizens Assembly HOA has an Architectural Review Committee that must approve all exterior modifications before City permits are filed. Basement ADUs with no exterior change typically bypass ARC review. Any new entrance, egress window opening visible from the street, garage conversion, or addition requires ARC documentation and approval. DMV-GC Group prepares all King Farm ARC submissions in-house.</p>
            </div>
            <div className="hoa-card">
              <h3>🏘️ Fallsgrove</h3>
              <p>Fallsgrove is a 2000s-era planned community adjacent to King Farm — similar New Urbanist design principles and an active HOA ARC process. City of Rockville permits apply. Fallsgrove's single-family homes and townhomes have newer construction basements with 8'–9' ceiling heights and often existing rough-ins — making basement ADU conversions here particularly practical and cost-effective. DMV-GC Group manages Fallsgrove ARC submissions and city permit processing simultaneously.</p>
            </div>
            <div className="hoa-card">
              <h3>🏘️ Congressional</h3>
              <p>Congressional is an established planned community near the Rockville/North Bethesda border — mix of city and county jurisdiction properties. Congressional's HOA has its own design review process for exterior modifications. DMV-GC Group verifies both the permit jurisdiction and the HOA requirements for every Congressional address before any design begins.</p>
            </div>
            <div className="hoa-card">
              <h3>🏘️ Other Rockville HOA Communities</h3>
              <p>Many of Rockville's established neighborhoods — College Gardens, Rockville Estates, and others — also have HOAs with varying design review authority. DMV-GC Group identifies the applicable HOA and its specific ADU requirements for every Rockville property during the consultation, before any design or permit work begins.</p>
            </div>
          </div>

          <h2>King Farm & Fallsgrove — Why Basement ADUs Work Especially Well Here</h2>
          <p>
            King Farm and Fallsgrove's late 1990s–2000s construction gives their basements specifications that make ADU conversion more practical and cost-effective than in older Rockville housing stock — similar to the advantages we outlined for Gaithersburg's Kentlands and Lakelands:
          </p>

          <div className="spec-box">
            <h3>🏗️ Newer Construction ADU Advantages in King Farm & Fallsgrove</h3>
            <ul>
              <li><strong>8'–9' ceiling heights:</strong> Comfortable, open-feeling ADU spaces well above the 7-foot code minimum — eliminating ceiling height as a constraint and creating basement apartments that feel like proper living spaces rather than cramped utility areas.</li>
              <li><strong>Poured concrete foundations:</strong> More moisture-resistant than the concrete block found in older Wheaton and Silver Spring homes. Interior moisture management is simpler and less costly in King Farm and Fallsgrove homes.</li>
              <li><strong>Existing plumbing rough-ins:</strong> A significant proportion of King Farm and Fallsgrove homes were built with basement bathroom rough-ins — a drain stub-out in the slab. Completing an existing rough-in saves $6,000–$12,000 versus cutting new drain trenches through the slab. DMV-GC Group checks for rough-ins during every newer-construction Rockville consultation.</li>
              <li><strong>200-amp electrical panels:</strong> Standard in 1990s–2000s construction — providing adequate capacity for ADU sub-panels without main panel upgrades in most cases.</li>
              <li><strong>Modern framing and insulation:</strong> 2x6 exterior wall framing with proper insulation is standard in King Farm and Fallsgrove — meaning basement perimeter walls require less intervention before finish work than older homes with minimal insulation.</li>
              <li><strong>Wider basement stairs:</strong> Newer construction typically provides 36"–42" stair widths — better for ADU access than the 28"–32" stairs found in older mid-century homes.</li>
            </ul>
          </div>

          <h2>Shady Grove Metro & I-270 Corridor — Rockville's ADU Rental Demand Drivers</h2>
          <p>
            Rockville's ADU rental market is driven by two complementary demand sources that together create one of the strongest rental environments in Montgomery County:
          </p>

          <div className="benefit-grid">
            <div className="benefit-box">
              <div className="icon">🚇</div>
              <strong>Shady Grove Metro</strong>
              <span>Red Line terminus — direct access to DC, Bethesda, and Silver Spring without transfers. King Farm and Fallsgrove are within 1–2 miles of Shady Grove station, supporting strong transit-oriented rental demand.</span>
            </div>
            <div className="benefit-box">
              <div className="icon">🏢</div>
              <strong>I-270 Tech Corridor</strong>
              <span>NIH, FDA, NIST, and dozens of biotech and federal contractor employers along I-270 create professional renter demand for quality Rockville housing — supporting ADU rents of $1,400–$2,100/month.</span>
            </div>
            <div className="benefit-box">
              <div className="icon">🚌</div>
              <strong>MARC & Ride On</strong>
              <span>Rockville MARC station (Brunswick Line) plus Ride On bus network provide additional transit options for renters without cars — expanding the ADU tenant pool beyond Metro-dependent commuters.</span>
            </div>
            <div className="benefit-box">
              <div className="icon">🎓</div>
              <strong>Academic Employment</strong>
              <span>Universities and research institutions in the greater Rockville area — including Montgomery College's Rockville campus — create graduate student and academic professional rental demand year-round.</span>
            </div>
            <div className="benefit-box">
              <div className="icon">💰</div>
              <strong>Strong Rental Rates</strong>
              <span>$1,400–$2,100/month for quality basement ADUs in Rockville — among the highest for Montgomery County non-Bethesda communities.</span>
            </div>
            <div className="benefit-box">
              <div className="icon">📈</div>
              <strong>Property Value Addition</strong>
              <span>A permitted ADU adds $85,000–$145,000 to Rockville property values — in a market with consistent appreciation driven by the I-270 corridor employment base.</span>
            </div>
          </div>

          <h2>Serving All Rockville, MD Neighborhoods for ADU Construction</h2>

          <div className="neighborhood-grid">
            <div className="neighborhood-card">
              <h3>King Farm</h3>
              <div className="permit-tag city">City Permits</div>
              <p>New Urbanist planned community (late 1990s–2000s). Newer construction with 8'–9' ceilings, poured concrete, often existing rough-ins. Basement ADUs with no exterior change bypass ARC review — any exterior modification requires King Farm Citizens Assembly ARC approval before city permits. Shady Grove Metro proximity supports strong rental demand.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Fallsgrove</h3>
              <div className="permit-tag city">City Permits</div>
              <p>2000s planned community adjacent to King Farm. Same construction advantages — high ceilings, rough-ins common, poured concrete. Fallsgrove HOA ARC review for exterior modifications. Basement ADU conversions are the dominant and most cost-effective ADU type here. Strong rental market from shared King Farm/Fallsgrove employer proximity.</p>
            </div>
            <div className="neighborhood-card">
              <h3>West End / College Gardens</h3>
              <div className="permit-tag city">City Permits</div>
              <p>Established 1950s–70s single-family neighborhoods within city limits. Full basements with standard ceiling heights and poured concrete foundations. Lot sizes more generous than King Farm — stronger case for attached additions and occasionally detached ADUs. Less restrictive HOA environments in most of this area. City of Rockville permits.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Twinbrook</h3>
              <div className="permit-tag city">City Permits</div>
              <p>Mid-century neighborhood (1950s–60s) within city limits. Mix of Cape Cods, split-levels, and ranches. Full basements are common. Some older homes may have concrete block foundations — moisture assessment recommended. Strong rental market from walkable access to Twinbrook Metro station (Red Line). City of Rockville permits.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Congressional</h3>
              <div className="permit-tag county">Verify Jurisdiction</div>
              <p>Established planned community near the Rockville/North Bethesda border — mix of city and county jurisdiction depending on specific parcel. Some Congressional properties use City permits; others use County. DMV-GC Group verifies jurisdiction for every Congressional address. Active HOA with design review requirements regardless of permit authority.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Traville / North Rockville</h3>
              <div className="permit-tag county">County Permits</div>
              <p>Newer developments and established neighborhoods north of Rockville Pike in unincorporated Montgomery County with Rockville mailing addresses. Montgomery County DPS permits. Mix of construction eras — newer construction has basement advantages similar to King Farm/Fallsgrove. Good lot sizes in some areas for attached additions.</p>
            </div>
          </div>

          <h2>Our ADU Construction Process in Rockville</h2>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Free In-Home Consultation & Feasibility Assessment</h3>
                <p>We visit your Rockville home and assess all ADU options — basement ceiling height and rough-in presence, garage feasibility, lot size for addition potential. For King Farm and Fallsgrove homes, we identify which ADU scopes require ARC review and which proceed directly to permits. No cost, no obligation.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Jurisdiction Verification — City vs County</h3>
                <p>We confirm whether your Rockville address is within the City limits or unincorporated Montgomery County using parcel boundary data. This free, one-business-day verification eliminates the most costly permit mistake in Rockville ADU construction before any application is prepared.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>HOA / ARC Assessment (If Applicable)</h3>
                <p>For King Farm, Fallsgrove, Congressional, and other HOA communities, we determine whether the proposed ADU scope requires ARC review — and if so, prepare all required documentation. Basement ADUs with no exterior modification typically bypass ARC; additions and garage conversions affecting the exterior require it.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>ADU Design Development</h3>
                <p>Floor plan, egress window layout, separate entrance design, kitchen and bathroom configuration — designed within the confirmed constraints of your specific home. For newer King Farm and Fallsgrove homes, we identify and incorporate existing rough-ins into the bathroom design. For ARC submissions, exterior design is developed to be compatible with the community's architectural character from the first draft.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">5</div>
              <div className="step-content">
                <h3>ARC Submission + Permit Filing — Concurrent Where Possible</h3>
                <p>HOA ARC submission and City or County permit filing run simultaneously wherever the HOA allows — minimizing total pre-construction timeline. Our team manages all correspondence with both the permit authority and the HOA throughout.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">6</div>
              <div className="step-content">
                <h3>Construction — Egress, Mechanicals & Finishes</h3>
                <p>Egress window installation where needed, then electrical, plumbing, HVAC, framing, drywall, flooring, kitchen, bathroom, and all finish work — coordinated by a dedicated project manager and inspected at each stage by City or County inspectors depending on jurisdiction.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">7</div>
              <div className="step-content">
                <h3>Inspections, COO & 1-Year Warranty</h3>
                <p>We manage all required inspections with the correct authority and the Certificate of Occupancy process. After COO issuance — from City or County depending on jurisdiction — we conduct a final walkthrough, address every punch list item, and activate your 1-year workmanship warranty.</p>
              </div>
            </div>
          </div>

          <h2>ADU Construction Cost in Rockville, MD</h2>

          <table className="cost-table">
            <tbody>
              <tr>
                <th>ADU Type</th>
                <th>Typical Cost Range</th>
                <th>Notes for Rockville</th>
              </tr>
              <tr>
                <td>Basement ADU — Newer Construction (King Farm / Fallsgrove)</td>
                <td>$62,000 – $100,000</td>
                <td>High ceilings, poured concrete, often existing rough-ins reduce cost. Basement-only scope = no ARC review needed in most cases.</td>
              </tr>
              <tr>
                <td>Basement ADU — Established Neighborhoods (West End / Twinbrook)</td>
                <td>$64,000 – $118,000</td>
                <td>1950s–70s construction. Standard ceilings, poured concrete in most cases. Full scope: egress, entrance, kitchen, bath, COO.</td>
              </tr>
              <tr>
                <td>Garage Conversion ADU</td>
                <td>$58,000 – $108,000</td>
                <td>ARC review required in King Farm/Fallsgrove for exterior changes. Utility run distance from main house is primary cost variable.</td>
              </tr>
              <tr>
                <td>Attached In-Law Suite Addition</td>
                <td>$98,000 – $205,000</td>
                <td>ARC review in King Farm/Fallsgrove. Designed for architectural compatibility. Most common in West End and Congressional area homes with larger rear yards.</td>
              </tr>
              <tr>
                <td>Detached ADU — Backyard Cottage</td>
                <td>$138,000 – $260,000</td>
                <td>Feasibility depends on lot size and HOA guidelines. More common on larger West End/Congressional parcels than in denser King Farm/Fallsgrove.</td>
              </tr>
              <tr>
                <td>Rough-In Completion (where present)</td>
                <td>Saves $6,000 – $12,000</td>
                <td>Common in King Farm and Fallsgrove construction. Completing existing drain stub-out vs cutting new slab trenches. Checked during free consultation.</td>
              </tr>
              <tr>
                <td>Separate Electrical Meter (Pepco)</td>
                <td>$2,000 – $4,500</td>
                <td>Recommended for rental ADUs. DMV-GC Group coordinates Pepco meter separation as part of most ADU projects.</td>
              </tr>
            </tbody>
          </table>

          <div className="tip">
            💡 <strong>Rockville ADU ROI:</strong> A King Farm or Fallsgrove basement ADU at $65,000–$90,000 — renting at $1,500–$1,900/month near the Shady Grove Metro and I-270 corridor — reaches full payback in approximately 4–5 years in rental income alone, while adding $90,000–$130,000 to appraised value at COO issuance. The combination of Metro access, biotech corridor employment, and King Farm's community appeal makes this one of the strongest ADU investment cases in Montgomery County outside of Bethesda.
          </div>

          <div className="cta-banner">
            <h2>Get a Free ADU Consultation in Rockville</h2>
            <p>We'll visit your Rockville home, verify your permit jurisdiction, assess HOA requirements, check for rough-ins in newer construction, and give you a realistic estimate. No cost, no obligation.</p>
            <Link href="/contact-us" className="cta-btn">Schedule Free ADU Consultation</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
          </div>

          <h2>What Rockville Homeowners Say About DMV-GC Group</h2>

          <div className="review-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Our King Farm home had a plumbing rough-in in the basement slab — DMV-GC Group found it immediately during the consultation. They confirmed the basement ADU wouldn't need ARC review since there's no exterior change, filed the City permits, and completed the conversion in 10 weeks. The rough-in saved us about $9,000 on the bathroom."</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">King Farm, Rockville MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"We wanted an in-law suite addition for my parents on our Fallsgrove home. DMV-GC Group designed it to match our home's exterior from the first draft — the Fallsgrove ARC approved it without a single revision request. The addition is seamless. My parents love being close by with their own space."</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Fallsgrove, Rockville MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Our Congressional home needed jurisdiction verification first — DMV-GC Group confirmed we were in unincorporated MoCo, not City of Rockville, and filed with Montgomery County DPS. Two contractors we called assumed City permits and would have filed incorrectly. That verification saved us months of potential delay."</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Congressional, Rockville MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Our West End colonial basement ADU is rented to an NIH researcher at $1,750/month. DMV-GC Group handled the City of Rockville permits, designed a smart two-bedroom layout within our 900 sq ft basement, and finished on time and on budget. The COO process was managed completely by their team."</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">West End, Rockville MD</span></div>
            </div>
          </div>

          <div className="highlight">
            <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Rockville homeowners trust DMV-GC Group for ADU projects that get the City vs County permit question right, navigate King Farm and Fallsgrove ARC coordination, identify rough-ins in newer construction, and deliver legal, rentable units that capitalize on Rockville's Shady Grove Metro and I-270 corridor rental demand.</p>
          </div>

          <h2>Serving All Rockville, MD Neighborhoods for ADU Construction</h2>

          <div className="areas-grid">
            <span className="area-pill">King Farm</span>
            <span className="area-pill">Fallsgrove</span>
            <span className="area-pill">West End</span>
            <span className="area-pill">Twinbrook</span>
            <span className="area-pill">College Gardens</span>
            <span className="area-pill">Congressional</span>
            <span className="area-pill">Traville</span>
            <span className="area-pill">Gaithersburg</span>
            <span className="area-pill">North Bethesda</span>
            <span className="area-pill">Potomac</span>
          </div>

          <div className="nearby-box">
            <h3>Also serving Gaithersburg, MD — directly north of Rockville</h3>
            <p>DMV-GC Group builds ADUs throughout Gaithersburg — which borders Rockville to the north and shares the same dual-jurisdiction complexity (City of Gaithersburg vs Montgomery County) and planned community HOA landscape. <Link href="/service/adu/gaithersburg-md">View our Gaithersburg ADU page →</Link></p>
          </div>

          <h2>Frequently Asked Questions — ADU Construction in Rockville, MD</h2>
          <Accordion defaultActiveKey="0" flush>
            {faqData.map((faq) => (
              <Accordion.Item eventKey={faq.eventKey} key={faq.eventKey}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="internal-links">
            <h2>Explore Our Other Services in Rockville</h2>
            <ul>
              <li><Link href="/service/kitchen-remodeling/rockville-md">Kitchen Remodeling in Rockville, MD</Link></li>
              <li><Link href="/service/bathroom-remodeling">Bathroom Remodeling in Rockville, MD</Link></li>
              <li><Link href="/service/basement-remodeling/rockville-md">Basement Remodeling in Rockville, MD</Link></li>
              <li><Link href="/service/home-additions">Home Additions in Rockville, MD</Link></li>
              <li><Link href="/service/flooring-remodeling">Flooring Installation in Rockville, MD</Link></li>
              <li><Link href="/service/design-build">Design-Build Contractor in Rockville, MD</Link></li>
            </ul>
          </div>

          <div className="cta-banner">
            <h2>Ready to Build Your Rockville ADU?</h2>
            <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. We'll verify your jurisdiction, assess HOA requirements, check for rough-ins, and design the ADU that works for your Rockville home and neighborhood.</p>
            <Link href="/contact-us" className="cta-btn">Get Free ADU Consultation in Rockville →</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
    </main>
  );
}
