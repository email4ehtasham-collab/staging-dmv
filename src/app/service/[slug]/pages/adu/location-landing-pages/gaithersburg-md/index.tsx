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
      "description": "Licensed design-build general contractor serving Gaithersburg, MD. Specializing in ADU construction across Gaithersburg's diverse housing — basement ADUs, garage conversions, and in-law suite additions — with both City of Gaithersburg and Montgomery County permit expertise.",
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
        { "@type": "City", "name": "Gaithersburg", "sameAs": "https://en.wikipedia.org/wiki/Gaithersburg,_Maryland" },
        { "@type": "City", "name": "Rockville" },
        { "@type": "City", "name": "North Bethesda" },
        { "@type": "City", "name": "Germantown" },
        { "@type": "City", "name": "Potomac" }
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
      "@id": "https://www.dmv-gc.com/service/adu/gaithersburg-md#service",
      "serviceType": "ADU Construction",
      "name": "ADU Construction in Gaithersburg, MD",
      "alternateName": ["Accessory Dwelling Unit", "In-Law Suite", "Basement Apartment", "Garage Conversion"],
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Gaithersburg", "sameAs": "https://en.wikipedia.org/wiki/Gaithersburg,_Maryland" },
      "description": "Full-service ADU design and construction in Gaithersburg, MD. Basement ADUs, garage conversions, and in-law suite additions across all Gaithersburg neighborhoods — with City of Gaithersburg and Montgomery County permit expertise and HOA coordination for Kentlands, Lakelands, and Crown Farm.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "58000", "maxPrice": "200000", "priceCurrency": "USD" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "ADU Construction", "item": "https://www.dmv-gc.com/service/adu" },
        { "@type": "ListItem", "position": 4, "name": "Gaithersburg, MD", "item": "https://www.dmv-gc.com/service/adu/gaithersburg-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to build an ADU in Gaithersburg, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ADU construction in Gaithersburg, MD typically costs between $58,000 and $200,000 depending on ADU type, neighborhood, and HOA requirements. A basement ADU conversion runs $60,000–$115,000. A garage conversion ADU costs $58,000–$105,000. An attached in-law suite addition costs $95,000–$200,000. HOA architectural review in communities like Kentlands and Lakelands adds design coordination cost but not necessarily construction cost. DMV-GC Group provides free in-home consultations with detailed, honest estimates."
          }
        },
        {
          "@type": "Question",
          "name": "Does Gaithersburg use City permits or Montgomery County permits for ADU construction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It depends on which part of Gaithersburg your property is in. The City of Gaithersburg is an incorporated municipality with its own Department of Public Works and Planning that issues building permits for properties within the city limits. Properties in unincorporated areas with Gaithersburg mailing addresses — including Crown Farm, Washingtonian Center area, and others — require Montgomery County DPS permits instead. DMV-GC Group verifies the correct permit authority for every Gaithersburg address using parcel boundary data before filing any application — this is one of the most commonly mishandled permit questions in Gaithersburg construction."
          }
        },
        {
          "@type": "Question",
          "name": "Can I build an ADU in Kentlands or Lakelands?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but ADU projects in Kentlands and Lakelands require Architectural Review Committee (ARC) approval from the community's HOA before building permits are filed with the City of Gaithersburg. The ARC reviews proposed designs for compatibility with the community's New Urbanist architectural character. Basement ADUs — which have no exterior impact — typically do not require ARC review for interior-only work, but any new exterior opening, separate entrance modification, or addition will. DMV-GC Group prepares all required ARC documentation and manages the review process as a standard part of Kentlands and Lakelands ADU projects."
          }
        },
        {
          "@type": "Question",
          "name": "What ADU types work best in Gaithersburg?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most practical ADU types for Gaithersburg's diverse housing stock are: basement ADU conversions (most common in Gaithersburg's 1970s–2000s single-family homes); garage conversions (where a detached garage exists); and attached in-law suite additions (on lots with sufficient rear yard room after setbacks). Gaithersburg's newer construction — particularly in Kentlands, Lakelands, and Crown Farm — often has basements with higher ceilings and better rough-in infrastructure than older stock, making basement ADU conversions particularly straightforward in these communities. DMV-GC Group assesses which type is most feasible for your specific property during the free consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group handle HOA coordination for Kentlands and Lakelands ADU projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group handles all HOA coordination for Kentlands, Lakelands, Crown Farm, and any other Gaithersburg HOA community — including ARC documentation preparation, submission, and review management. We design all ADU additions to be compatible with each community's architectural character before submitting to the ARC, minimizing the likelihood of revision requests. HOA review runs concurrently with permit preparation wherever possible to minimize total project timeline."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for ADU construction in Gaithersburg, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home improvement and construction work in Gaithersburg. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every ADU project completed in Gaithersburg."
          }
        }
      ]
    }
  ]
};

const faqData = [
  {
    eventKey: "0",
    question: "How much does it cost to build an ADU in Gaithersburg, MD?",
    answer: "ADU construction in Gaithersburg typically costs $58,000–$200,000 depending on type and neighborhood. A basement ADU in newer Kentlands or Lakelands construction runs $60,000–$100,000. A basement ADU in older established neighborhoods costs $62,000–$115,000. A garage conversion runs $58,000–$105,000. An attached in-law suite addition costs $95,000–$200,000. A detached backyard cottage costs $140,000–$260,000. Where a plumbing rough-in already exists, the bathroom addition cost is reduced by $6,000–$12,000. DMV-GC Group provides free in-home consultations with itemized estimates."
  },
  {
    eventKey: "1",
    question: "Does my Gaithersburg ADU need City or County permits?",
    answer: "It depends on your specific parcel location. Properties within the incorporated City of Gaithersburg use City of Gaithersburg Department of Public Works and Planning permits. Properties in unincorporated Montgomery County with Gaithersburg mailing addresses — including Crown Farm and parts of the Washingtonian corridor — use Montgomery County DPS permits. DMV-GC Group verifies the correct jurisdiction for every Gaithersburg address using parcel boundary data before filing anything. This verification is free and takes less than one business day."
  },
  {
    eventKey: "2",
    question: "Can I build an ADU in Kentlands without ARC approval?",
    answer: "For interior-only basement ADUs with no exterior modification — no new windows, no new entrance, no exterior changes — ARC review from the Kentlands Community Foundation is typically not required. You proceed directly to City of Gaithersburg permits. However, any exterior modification — a new egress window opening, a new separate entrance, a garage conversion — requires ARC review before city permits are filed. DMV-GC Group determines which path applies for your specific Kentlands ADU scope and manages the ARC process where needed."
  },
  {
    eventKey: "3",
    question: "Does newer construction in Kentlands and Lakelands make basement ADUs easier?",
    answer: "Yes — significantly. Kentlands and Lakelands homes (1990s–2010s construction) commonly have 8'–9' basement ceiling heights, poured concrete foundations, existing plumbing rough-ins, and 200-amp electrical panels — all of which reduce the cost and complexity of basement ADU conversion compared to older housing stock. Where a rough-in already exists, the bathroom addition cost is reduced by $6,000–$12,000. DMV-GC Group checks for rough-ins during every Gaithersburg newer-construction consultation."
  },
  {
    eventKey: "4",
    question: "Is Crown Farm in the City of Gaithersburg or Montgomery County?",
    answer: "Crown Farm is in unincorporated Montgomery County — despite having a Gaithersburg mailing address. Crown Farm ADU projects require Montgomery County DPS permits, not City of Gaithersburg permits. Crown Farm also has its own HOA with design guidelines that apply independently of the permit authority. DMV-GC Group handles both layers — county permits and Crown Farm HOA coordination — for all Crown Farm ADU projects."
  },
  {
    eventKey: "5",
    question: "Is DMV-GC Group licensed for ADU construction in Gaithersburg, MD?",
    answer: "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Gaithersburg. We employ licensed plumbers and electricians in-house, are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every ADU project in Gaithersburg — whether permitted through the City or the County."
  }
];

export default function ADUGaithersburgMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => {
    setActiveMenuItem("service");
  }, []);

  return (
    <main>
      <div className="city-service-detail-page adu-gaithersburg-md">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/services">Services</Link><span>›</span>
            <Link href="/service/adu">ADU Construction</Link><span>›</span>
            Gaithersburg, MD
          </nav>

          <div className="hero">
            <div className="hero-location-tag">📍 Serving Gaithersburg, MD</div>
            <h1>ADU Construction in Gaithersburg, MD — Accessory Dwelling Unit Contractor</h1>
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
              <h3>Gaithersburg ADU Permits — City or County? It Depends on Your Address</h3>
              <p>Gaithersburg is one of the most permit-complex communities in Montgomery County. The City of Gaithersburg is an incorporated municipality with its own Department of Public Works and Planning — but a significant number of properties with Gaithersburg mailing addresses fall outside the city limits and require Montgomery County DPS permits instead. Crown Farm, Washingtonian Center area, and other developments are outside the city limits despite their Gaithersburg address. DMV-GC Group verifies the correct permit jurisdiction for every Gaithersburg address using parcel boundary data — before filing a single application. Filing with the wrong authority is one of the most common and costly mistakes made by contractors in this community.</p>
            </div>
          </div>

          <div className="intro-box">
            Planning to build an <strong>ADU in Gaithersburg, MD</strong>? Gaithersburg is one of Montgomery County's most diverse ADU markets — a city with planned New Urbanist communities like Kentlands and Lakelands, established postwar neighborhoods, newer construction in Crown Farm and the Washingtonian corridor, and everything in between. Each part of Gaithersburg has its own permit authority, HOA considerations, and ADU feasibility profile. DMV-GC Group's licensed team navigates all of it — verifying your specific jurisdiction, coordinating HOA architectural review where required, and managing construction from design through Certificate of Occupancy in one seamless process.
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
              <span>Kentlands, Lakelands & Crown Farm</span>
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

          <h2>Types of ADUs We Build in Gaithersburg, MD</h2>
          <p>
            Gaithersburg's housing spans a wider range of construction eras and styles than almost any other Montgomery County community — from 1960s–70s colonials in established neighborhoods to 1990s Kentlands townhomes to 2000s–2010s Crown Farm construction. Here is a realistic assessment of the ADU types that work across Gaithersburg's diverse neighborhoods:
          </p>

          <div className="adu-type-grid">
            <div className="adu-type-card">
              <span className="adu-tag">Most Common in Gaithersburg</span>
              <h3>Basement ADU Conversion</h3>
              <p>Gaithersburg's single-family homes — particularly in established neighborhoods like Lakeland, Diamond Farms, and Flower Hill — have full basements that are strong ADU conversion candidates. Newer construction in Kentlands, Lakelands, and Crown Farm often has higher ceilings and better rough-in infrastructure, making basement ADU conversions particularly practical. Includes egress windows, separate entrance, kitchen or kitchenette, bathroom, fire separation, and COO — from either the City of Gaithersburg or Montgomery County DPS depending on jurisdiction.</p>
              <div className="adu-cost">Typical Cost: $60,000 – $115,000</div>
            </div>
            <div className="adu-type-card">
              <span className="adu-tag">Quickest Path</span>
              <h3>Garage Conversion ADU</h3>
              <p>Where a detached or attached garage exists, conversion is often the fastest ADU path in Gaithersburg — particularly for homeowners in established neighborhoods with older detached garages. HOA consideration: garage conversions that change the exterior appearance of the home (new windows, new door) may require ARC review in Kentlands and Lakelands. DMV-GC Group assesses HOA applicability during the free consultation for every Gaithersburg garage conversion project.</p>
              <div className="adu-cost">Typical Cost: $58,000 – $105,000</div>
            </div>
            <div className="adu-type-card">
              <span className="adu-tag">For Larger Lots</span>
              <h3>Attached In-Law Suite Addition</h3>
              <p>A new addition built onto the main home — separate entrance, bedroom, bathroom, and kitchen. Gaithersburg's established single-family neighborhoods (Diamond Farms, Flower Hill, Lakeland) have lots generous enough for additions in many cases. In Kentlands and Lakelands, attached additions require ARC architectural review for compatibility with the community's New Urbanist character. DMV-GC Group designs Gaithersburg additions to ARC standards from the start.</p>
              <div className="adu-cost">Typical Cost: $95,000 – $200,000</div>
            </div>
            <div className="adu-type-card">
              <span className="adu-tag">Where Lot Allows</span>
              <h3>Detached ADU — Backyard Cottage</h3>
              <p>New construction of a standalone structure in the rear yard. Less common in Gaithersburg's planned communities where lot coverage limits and HOA design guidelines constrain detached structures. More feasible on larger parcels in established neighborhoods outside the planned community boundaries. Where feasible and permitted by the HOA, a detached ADU provides maximum privacy and the strongest rental income potential.</p>
              <div className="adu-cost">Typical Cost: $140,000 – $260,000</div>
            </div>
          </div>

          <div className="author-box">
            <div className="author-avatar">🏠</div>
            <div className="author-info">
              <h4>About DMV-GC Group — Gaithersburg's Licensed ADU Construction Contractor</h4>
              <p>DMV-GC Group has completed kitchen, bathroom, and basement renovation projects throughout Gaithersburg's diverse neighborhoods — from Kentlands townhomes to Diamond Farms colonials to Crown Farm townhomes. We understand Gaithersburg's permit dual-jurisdiction complexity, the HOA ARC processes in Kentlands and Lakelands, and the construction characteristics of each neighborhood's housing stock. We hold a Maryland MHIC license and back every project with a 1-year workmanship warranty.</p>
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

          <h2>City of Gaithersburg vs Montgomery County — Which Permit Authority Governs Your ADU?</h2>
          <p>
            This is the single most important question to answer correctly before any Gaithersburg ADU project begins — and the most commonly mishandled. Gaithersburg's mailing address covers both the incorporated city and surrounding unincorporated county land. The permit authority is determined by your property's parcel location, not your mailing address.
          </p>

          <div className="jurisdiction-grid">
            <div className="jurisdiction-card city">
              <h3>🏛️ City of Gaithersburg Permits</h3>
              <ul>
                <li>Issuing authority: City of Gaithersburg Department of Public Works and Planning</li>
                <li>Covers: Properties within the incorporated city limits</li>
                <li>Neighborhoods typically in City: Kentlands, Lakelands, Olde Towne, Lakeland, Diamond Farms, Flower Hill</li>
                <li>City has its own plan review staff and inspection schedule</li>
                <li>City ADU rules must comply with Montgomery County's ADU ordinance for zoning, plus City building code for construction</li>
                <li>HOA ARC approval required for Kentlands and Lakelands before city permits are filed</li>
              </ul>
            </div>
            <div className="jurisdiction-card county">
              <h3>📋 Montgomery County DPS Permits</h3>
              <ul>
                <li>Issuing authority: Montgomery County Department of Permitting Services</li>
                <li>Covers: Properties in unincorporated Montgomery County with Gaithersburg mailing addresses</li>
                <li>Neighborhoods typically in County: Crown Farm, Washingtonian Center area, Rio, parts of Quince Orchard area</li>
                <li>County ADU ordinance and building code apply</li>
                <li>Some county-jurisdiction Gaithersburg properties still have HOA requirements — verified separately from permit jurisdiction</li>
                <li>Montgomery County COO required before ADU occupancy</li>
              </ul>
            </div>
          </div>

          <div className="warning">
            ⚠️ <strong>Common Contractor Mistake:</strong> Many contractors assume all Gaithersburg properties use the same permit authority. Filing a City permit application for a county-jurisdiction property — or a county application for a city-jurisdiction property — results in invalid permits, uninspected work, and a COO that cannot be issued. DMV-GC Group verifies jurisdiction using parcel boundary data at the start of every Gaithersburg project. This verification is free, takes less than a day, and eliminates the risk entirely.
          </div>

          <h2>HOA & ARC Coordination for Gaithersburg's Planned Communities</h2>
          <p>
            Several of Gaithersburg's most active ADU markets are governed by HOAs with Architectural Review Committees — adding a design approval step before permits can be filed. DMV-GC Group handles all HOA coordination as a standard part of every applicable Gaithersburg ADU project.
          </p>

          <div className="hoa-grid">
            <div className="hoa-card">
              <h3>🏘️ Kentlands</h3>
              <p>Kentlands is a New Urbanist community designed by Andres Duany and Elizabeth Plater-Zyberk — one of the most architecturally cohesive planned communities in the DC area. The Kentlands Community Foundation's ARC maintains strict design standards for all exterior modifications. Any ADU work affecting the exterior — new entrance, new windows, addition — requires ARC review before City of Gaithersburg permits are filed. Basement ADUs with no exterior modification typically proceed with city permits only. DMV-GC Group designs all Kentlands ADU additions to ARC standards from the start, minimizing revision requests.</p>
            </div>
            <div className="hoa-card">
              <h3>🏘️ Lakelands</h3>
              <p>Lakelands is a sister community to Kentlands — same New Urbanist design principles, adjacent location, and similar ARC process. Exterior ADU modifications require Lakelands HOA ARC approval before city permits. Interior basement ADUs with no exterior change typically do not. DMV-GC Group is familiar with Lakelands' ARC review requirements and designs all Lakelands ADU additions for architectural compatibility with the community's character.</p>
            </div>
            <div className="hoa-card">
              <h3>🏘️ Crown Farm</h3>
              <p>Crown Farm is a newer mixed-use development in unincorporated Montgomery County — requiring county permits, not city permits. Crown Farm's HOA has its own design standards for modifications. ADU projects in Crown Farm must comply with both Montgomery County's ADU ordinance and Crown Farm's HOA guidelines. DMV-GC Group handles both layers of the approval process simultaneously.</p>
            </div>
            <div className="hoa-card">
              <h3>🏘️ Other Gaithersburg HOA Communities</h3>
              <p>Many of Gaithersburg's established neighborhoods — Flower Hill, Diamond Farms, Quince Orchard area developments — also have HOAs with varying levels of ARC authority. DMV-GC Group identifies the applicable HOA and its specific ADU-relevant requirements for every Gaithersburg property during the free consultation, before any design or permit work begins.</p>
            </div>
          </div>

          <h2>Gaithersburg's Newer Construction — Why Basement ADUs Are Practical Here</h2>
          <p>
            One of Gaithersburg's underappreciated ADU advantages is its proportion of newer construction — Kentlands (1990s–2000s), Lakelands (2000s–2010s), and Crown Farm (2000s–2010s) all have homes built with basement specifications that are more favorable for ADU conversion than older stock. Here is why:
          </p>

          <div className="spec-box">
            <h3>🏗️ Newer Construction Basement ADU Advantages in Gaithersburg</h3>
            <ul>
              <li><strong>Higher standard ceiling heights:</strong> Homes built since the 1990s in Gaithersburg commonly have 8'0"–9'0" basement ceiling heights — well above the 7-foot habitable space minimum. This eliminates ceiling height as a constraint and creates comfortable, open-feeling ADU spaces.</li>
              <li><strong>Poured concrete foundations:</strong> Newer Gaithersburg construction uses poured concrete foundations rather than the concrete block found in older Wheaton and Silver Spring homes — meaning interior moisture management is more straightforward and less costly.</li>
              <li><strong>Rough-in plumbing:</strong> Many Kentlands, Lakelands, and Crown Farm homes were built with basement plumbing rough-ins — a drain stub-out in the slab for a future bathroom. Completing an existing rough-in rather than cutting new drain trenches saves $6,000–$12,000 on the bathroom addition. DMV-GC Group checks for rough-ins during every consultation for newer Gaithersburg homes.</li>
              <li><strong>Egress window rough openings:</strong> Some newer Gaithersburg homes have basement egress window openings already framed in — or at minimum, window wells already excavated — reducing or eliminating the egress window installation cost.</li>
              <li><strong>Modern electrical panels:</strong> 200-amp panels with adequate capacity for ADU circuits are standard in newer Gaithersburg construction — meaning a sub-panel for the ADU can typically be added without upgrading the main panel.</li>
              <li><strong>Wider staircase access:</strong> Newer construction basements often have wider stair configurations — improving the sense of entrance to the ADU and simplifying the separate entrance design compared to older narrow basement stairways.</li>
            </ul>
          </div>

          <h2>Benefits of Building an ADU in Gaithersburg</h2>

          <div className="benefit-grid">
            <div className="benefit-box">
              <div className="icon">💰</div>
              <strong>Rental Income</strong>
              <span>$1,350–$2,000/month for a quality basement ADU in Gaithersburg — strong demand from I-270 corridor employers</span>
            </div>
            <div className="benefit-box">
              <div className="icon">📈</div>
              <strong>Property Value</strong>
              <span>A permitted ADU adds $80,000–$140,000 to Gaithersburg property values — in a growing I-270 tech corridor market</span>
            </div>
            <div className="benefit-box">
              <div className="icon">🏢</div>
              <strong>I-270 Employer Proximity</strong>
              <span>NIH, FDA, NIST, and major biotech employers in the I-270 corridor create professional-renter demand for quality ADU units</span>
            </div>
            <div className="benefit-box">
              <div className="icon">👨‍👩‍👧</div>
              <strong>Multigenerational Living</strong>
              <span>House aging parents or adult children on the same property — a growing need in Gaithersburg's established family community</span>
            </div>
            <div className="benefit-box">
              <div className="icon">🚇</div>
              <strong>MARC & Metro Access</strong>
              <span>Gaithersburg's MARC Brunswick Line station and Metro bus connections support transit-oriented rental demand</span>
            </div>
            <div className="benefit-box">
              <div className="icon">🔑</div>
              <strong>Strong Payback</strong>
              <span>At Gaithersburg's current rents, a $65,000–$90,000 ADU investment pays back in approximately 4–6 years</span>
            </div>
          </div>

          <h2>Serving All Gaithersburg, MD Neighborhoods for ADU Construction</h2>

          <div className="neighborhood-grid">
            <div className="neighborhood-card">
              <h3>Kentlands</h3>
              <div className="permit-tag city">City Permits</div>
              <p>New Urbanist planned community (1990s–2000s). Basement ADUs are the most practical option here — no exterior modification means no ARC review required for interior-only work. Any exterior addition or garage conversion requires Kentlands Community Foundation ARC approval before city permits. Newer construction with 8'–9' ceilings and often existing rough-ins makes basement conversions particularly practical.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Lakelands</h3>
              <div className="permit-tag city">City Permits</div>
              <p>Sister New Urbanist community to Kentlands (2000s–2010s). Same ARC process for exterior modifications. Basement ADUs — interior only — proceed with city permits directly. Higher ceiling heights and newer infrastructure make basement conversions the dominant ADU type here. Strong rental demand from the same Kentlands employer base.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Crown Farm</h3>
              <div className="permit-tag county">County Permits</div>
              <p>Mixed-use development in unincorporated Montgomery County — despite Gaithersburg mailing address. Montgomery County DPS permits, not city permits. Crown Farm HOA has its own design guidelines. Newer construction (2000s–2010s) with modern basement specifications. Good rental demand from the Washingtonian corridor employment base.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Diamond Farms / Flower Hill</h3>
              <div className="permit-tag city">City Permits</div>
              <p>Established 1970s–80s single-family neighborhoods within the city limits. Full basements with poured concrete foundations — solid ADU conversion candidates. Lot sizes generous enough for additions in many cases. Less restrictive HOA environments than Kentlands/Lakelands for most exterior modifications.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Lakeland / Olde Towne Gaithersburg</h3>
              <div className="permit-tag city">City Permits</div>
              <p>Older established neighborhoods near Gaithersburg's historic town center. Mix of construction eras — some older homes with block foundations (assessment recommended) alongside mid-century colonials. Walking distance to the MARC Brunswick Line Gaithersburg station — strong transit-oriented rental demand.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Quince Orchard / Rio Area</h3>
              <div className="permit-tag county">County Permits</div>
              <p>Mix of 1980s–2000s single-family homes in unincorporated county area with Gaithersburg mailing addresses. Montgomery County DPS permits. Good lot sizes in many cases — stronger case for detached ADUs on larger parcels than in the denser planned communities. Proximity to Quince Orchard Road and I-270 employment corridor.</p>
            </div>
          </div>

          <h2>Our ADU Construction Process in Gaithersburg</h2>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Free In-Home Consultation & Feasibility Assessment</h3>
                <p>We visit your Gaithersburg home and assess ADU options — basement ceiling height and rough-in presence, garage feasibility, lot size for addition — and identify the most practical and cost-effective ADU type for your specific property. No cost, no obligation.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Jurisdiction Verification — City vs County</h3>
                <p>We confirm whether your Gaithersburg property falls within the City limits or unincorporated Montgomery County using parcel boundary data. This single verification step eliminates the most common and costly mistake in Gaithersburg ADU construction. Takes less than one business day and is completely free.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>HOA / ARC Assessment (If Applicable)</h3>
                <p>For Kentlands, Lakelands, Crown Farm, and other HOA communities, we determine whether the proposed ADU scope requires ARC review — and if so, prepare all required documentation. Basement ADUs with no exterior modification typically do not require ARC review; additions and garage conversions typically do. This determination happens before any design work begins.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>ADU Design Development</h3>
                <p>Our design team develops a floor plan and, where required, exterior design drawings for ARC submission — all designed to be compatible with your community's architectural character from the first draft. For basement ADUs in newer Gaithersburg homes, we verify rough-in locations and incorporate them into the bathroom design.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">5</div>
              <div className="step-content">
                <h3>ARC Submission + Permit Filing — Concurrent</h3>
                <p>Where both HOA ARC review and building permits are required, we submit both simultaneously wherever the HOA allows — minimizing the total pre-construction timeline. Our team manages all city or county correspondence and all HOA communications throughout.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">6</div>
              <div className="step-content">
                <h3>Construction — Egress, Mechanicals & Finishes</h3>
                <p>Egress window installation where needed, then electrical, plumbing, HVAC, framing, drywall, flooring, kitchen, bathroom, and all finish work — coordinated by a dedicated project manager and inspected at each required stage by the correct authority (City or County).</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">7</div>
              <div className="step-content">
                <h3>Inspections, COO & 1-Year Warranty</h3>
                <p>We manage all required inspections with the correct authority and the Certificate of Occupancy process. After COO issuance, we conduct a final walkthrough, address every punch list item, and activate your 1-year workmanship warranty. Your Gaithersburg ADU is legally ready to rent.</p>
              </div>
            </div>
          </div>

          <h2>ADU Construction Cost in Gaithersburg, MD</h2>

          <table className="cost-table">
            <tbody>
              <tr>
                <th>ADU Type</th>
                <th>Typical Cost Range</th>
                <th>Notes for Gaithersburg</th>
              </tr>
              <tr>
                <td>Basement ADU — Newer Construction (Kentlands / Lakelands / Crown Farm)</td>
                <td>$60,000 – $100,000</td>
                <td>High ceilings, poured concrete, often existing rough-ins. Most cost-effective Gaithersburg ADU. No exterior modification = no ARC review required.</td>
              </tr>
              <tr>
                <td>Basement ADU — Established Neighborhoods (Diamond Farms / Flower Hill)</td>
                <td>$62,000 – $115,000</td>
                <td>1970s–80s construction. Standard ceiling heights, poured concrete in most cases. Full scope including egress, entrance, kitchen, bath, COO.</td>
              </tr>
              <tr>
                <td>Garage Conversion ADU</td>
                <td>$58,000 – $105,000</td>
                <td>ARC review required in Kentlands/Lakelands for exterior changes. Older detached garages in established neighborhoods assessed for structural condition and utility run distance.</td>
              </tr>
              <tr>
                <td>Attached In-Law Suite Addition</td>
                <td>$95,000 – $200,000</td>
                <td>ARC review required in Kentlands/Lakelands. Designed for architectural compatibility. More common in established neighborhoods with larger rear yards.</td>
              </tr>
              <tr>
                <td>Detached ADU — Backyard Cottage</td>
                <td>$140,000 – $260,000</td>
                <td>Feasibility depends on lot size and HOA guidelines. Most practical in established neighborhoods outside planned community boundaries.</td>
              </tr>
              <tr>
                <td>Rough-In Completion (if present)</td>
                <td>Saves $6,000 – $12,000</td>
                <td>Completing an existing basement plumbing rough-in instead of cutting new drain trenches through the slab. Verified during free consultation.</td>
              </tr>
            </tbody>
          </table>

          <div className="tip">
            💡 <strong>Gaithersburg ADU ROI:</strong> The I-270 corridor's concentration of NIH, FDA, NIST, and major biotech employers creates strong professional rental demand in Gaithersburg. A quality basement ADU at $65,000–$90,000 renting for $1,500–$1,900/month pays for itself in approximately 4–5 years — and adds $85,000–$130,000 to appraised value at COO issuance. Kentlands and Lakelands basement ADUs command particularly strong rents given the communities' desirability.
          </div>

          <div className="cta-banner">
            <h2>Get a Free ADU Consultation in Gaithersburg</h2>
            <p>We'll visit your home, verify your permit jurisdiction, assess HOA requirements, evaluate your basement or garage for ADU feasibility, and give you a realistic estimate. No cost, no obligation.</p>
            <Link href="/contact-us" className="cta-btn">Schedule Free ADU Consultation</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
          </div>

          <h2>What Gaithersburg Homeowners Say About DMV-GC Group</h2>

          <div className="review-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Our Kentlands home had an unfinished basement with a plumbing rough-in already in the slab. DMV-GC Group found it during the consultation, confirmed no ARC review was needed for the interior-only work, and converted it into a legal ADU in 11 weeks. The City of Gaithersburg inspector passed everything first time."</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Kentlands, Gaithersburg MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Two contractors we talked to didn't know Crown Farm uses county permits, not city permits. DMV-GC Group knew immediately, verified our parcel jurisdiction, and filed with Montgomery County DPS. No delays, no permit mistakes. The basement ADU is rented to an NIH researcher at $1,750/month."</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Crown Farm, Gaithersburg MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"We wanted an in-law suite addition to our Lakelands home. DMV-GC Group designed it to match our home's New Urbanist exterior from the start — before even submitting to the ARC. The ARC approved it without any revision requests. The addition looks like it was always part of the original design."</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Lakelands, Gaithersburg MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Our Diamond Farms colonial had a full basement ready for ADU conversion. DMV-GC Group handled the City of Gaithersburg permits, designed a smart two-room layout within the footprint, and delivered on time and on budget. The rental income has been consistent since month one."</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Diamond Farms, Gaithersburg MD</span></div>
            </div>
          </div>

          <div className="highlight">
            <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Gaithersburg homeowners trust DMV-GC Group for ADU projects that navigate the City vs County permit question correctly, handle HOA ARC coordination in Kentlands and Lakelands, and deliver legal, rentable units efficiently across every Gaithersburg neighborhood.</p>
          </div>

          <h2>Serving All Gaithersburg, MD Neighborhoods for ADU Construction</h2>

          <div className="areas-grid">
            <span className="area-pill">Kentlands</span>
            <span className="area-pill">Lakelands</span>
            <span className="area-pill">Crown Farm</span>
            <span className="area-pill">Diamond Farms</span>
            <span className="area-pill">Flower Hill</span>
            <span className="area-pill">Lakeland</span>
            <span className="area-pill">Olde Towne Gaithersburg</span>
            <span className="area-pill">Quince Orchard</span>
            <span className="area-pill">Rockville</span>
            <span className="area-pill">North Bethesda</span>
          </div>

          <div className="nearby-box">
            <h3>Also serving Rockville, MD — directly south of Gaithersburg</h3>
            <p>DMV-GC Group builds ADUs throughout Rockville, which borders Gaithersburg to the south. Rockville also has its own city permit jurisdiction separate from Montgomery County — the same dual-jurisdiction expertise that makes DMV-GC Group the right choice for Gaithersburg applies equally in Rockville. <Link href="/service/adu">View our full ADU construction service page →</Link></p>
          </div>

          <h2>Frequently Asked Questions — ADU Construction in Gaithersburg, MD</h2>
          <Accordion defaultActiveKey="0" flush>
            {faqData.map((faq) => (
              <Accordion.Item eventKey={faq.eventKey} key={faq.eventKey}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="internal-links">
            <h2>Explore Our Other Services in Gaithersburg</h2>
            <ul>
              <li><Link href="/service/kitchen-remodeling/gaithersburg-md">Kitchen Remodeling in Gaithersburg, MD</Link></li>
              <li><Link href="/service/bathroom-remodeling">Bathroom Remodeling in Gaithersburg, MD</Link></li>
              <li><Link href="/service/basement-remodeling/gaithersburg-md">Basement Remodeling in Gaithersburg, MD</Link></li>
              <li><Link href="/service/home-additions">Home Additions in Gaithersburg, MD</Link></li>
              <li><Link href="/service/flooring-remodeling">Flooring Installation in Gaithersburg, MD</Link></li>
              <li><Link href="/service/design-build">Design-Build Contractor in Gaithersburg, MD</Link></li>
            </ul>
          </div>

          <div className="cta-banner">
            <h2>Ready to Build Your Gaithersburg ADU?</h2>
            <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. We'll verify your permit jurisdiction, assess HOA requirements, and design the ADU that works for your Gaithersburg home and neighborhood.</p>
            <Link href="/contact-us" className="cta-btn">Get Free ADU Consultation in Gaithersburg →</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
    </main>
  );
}
