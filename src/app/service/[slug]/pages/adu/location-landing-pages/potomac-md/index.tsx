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
      "description": "Licensed design-build general contractor serving Potomac, MD. Specializing in ADU construction on Potomac's estate properties — detached backyard cottages, garage conversions, basement ADU apartments, and attached in-law suites — including full architectural design, Montgomery County zoning coordination, and permit management.",
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
        { "@type": "City", "name": "Potomac", "sameAs": "https://en.wikipedia.org/wiki/Potomac,_Maryland" },
        { "@type": "City", "name": "Bethesda" },
        { "@type": "City", "name": "North Bethesda" },
        { "@type": "City", "name": "Chevy Chase" },
        { "@type": "City", "name": "Rockville" }
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "MHIC License", "credentialCategory": "Maryland Home Improvement Contractor License" },
        { "@type": "EducationalOccupationalCredential", "name": "DLCP License", "credentialCategory": "Washington DC Department of Licensing and Consumer Protection" }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "97", "bestRating": "5" },
      "priceRange": "$$$$"
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/adu/potomac-md#service",
      "serviceType": "ADU Construction",
      "name": "ADU Construction in Potomac, MD",
      "alternateName": ["Accessory Dwelling Unit", "In-Law Suite", "Carriage House", "Guest Cottage", "Garage Conversion"],
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Potomac", "sameAs": "https://en.wikipedia.org/wiki/Potomac,_Maryland" },
      "description": "Full-service ADU design and construction in Potomac, MD. Detached backyard cottages on estate lots, garage conversions, basement ADU apartments, and attached in-law suites — designed by our in-house architects, permitted through Montgomery County, and built by our licensed construction team.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "80000", "maxPrice": "450000", "priceCurrency": "USD" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "ADU Construction Services Potomac MD",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Detached ADU / Backyard Cottage" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Garage Conversion ADU" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Basement ADU / Apartment" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Attached In-Law Suite Addition" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pool House / Guest Cottage" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ADU Architectural Design & Permits" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "ADU Construction", "item": "https://www.dmv-gc.com/service/adu" },
        { "@type": "ListItem", "position": 4, "name": "Potomac, MD", "item": "https://www.dmv-gc.com/service/adu/potomac-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to build an ADU in Potomac, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ADU construction in Potomac, MD typically costs between $80,000 and $450,000+ depending on ADU type, size, and finish level. A basement ADU conversion runs $80,000–$140,000. A garage conversion ADU runs $70,000–$140,000. An attached in-law suite addition costs $130,000–$260,000. A detached backyard cottage — the most popular ADU type in Potomac given the large lot sizes — typically runs $175,000–$450,000+. Potomac's estate properties often have the lot coverage and setback room to accommodate larger, more substantial detached ADUs than most Montgomery County communities. DMV-GC Group provides free in-home consultations with detailed estimates."
          }
        },
        {
          "@type": "Question",
          "name": "What are the Montgomery County ADU zoning rules for Potomac?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In Montgomery County (which governs unincorporated Potomac), an ADU is permitted on any single-family residential lot that meets size requirements under the county's ADU ordinance. Key rules include: the lot must be at least 6,000 sq ft (most Potomac properties exceed this significantly); the ADU cannot exceed 1,200 sq ft or 50% of the main house floor area (whichever is less); setback requirements apply to detached ADUs; only one ADU is permitted per lot; the property owner must occupy either the main house or the ADU; and a Certificate of Occupancy is required before the ADU can be rented or occupied. DMV-GC Group verifies all applicable zoning rules for your specific Potomac property during the free consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Can I build a detached ADU (backyard cottage) on a Potomac estate property?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — and Potomac's large estate lots are among the most favorable in Montgomery County for detached ADU construction. With lots commonly ranging from 1 to 5+ acres in Avenel, Travilah, and the River Road corridor, Potomac homeowners typically have ample room to accommodate a detached ADU while meeting all setback and lot coverage requirements. DMV-GC Group's in-house architects design detached ADUs from a single-bedroom cottage to a fully appointed two-bedroom guest house, managing all Montgomery County permits and zoning approvals."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group handle ADU permits in Potomac?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group handles the complete ADU permit process in Potomac and Montgomery County — including architectural design drawings, zoning confirmation, building permit application, all required trade permits (electrical, plumbing, mechanical), and Certificate of Occupancy inspection. Our in-house permit team manages every step. Potomac homeowners never need to contact Montgomery County directly or manage any aspect of the permit or zoning process."
          }
        },
        {
          "@type": "Question",
          "name": "Can I convert my garage into an ADU in Potomac?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Garage conversion ADUs are a popular and cost-effective option in Potomac, particularly for homeowners with attached 3-car garages where one bay can be converted while maintaining parking for the main residence. The conversion involves adding insulation, HVAC, plumbing rough-in, egress windows or doors, interior framing, drywall, flooring, kitchen and bathroom. Montgomery County permits and a Certificate of Occupancy are required. DMV-GC Group handles the complete design and construction of garage conversion ADUs in Potomac."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for ADU construction in Potomac, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home improvement and construction work in Potomac and Montgomery County. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every ADU project completed in Potomac."
          }
        }
      ]
    }
  ]
};

const faqData = [
  { eventKey: "0", question: "How much does it cost to build an ADU in Potomac, MD?", answer: "ADU construction in Potomac typically costs $70,000–$450,000+ depending on ADU type and size. A garage conversion runs $70,000–$140,000. A basement ADU conversion costs $80,000–$160,000. An attached in-law suite addition costs $130,000–$280,000. A detached backyard cottage ranges from $175,000 for a small one-bedroom to $450,000+ for a fully appointed 1,200 sq ft two-bedroom cottage. Potomac's premium market and larger structures mean ADU costs here run higher than most Montgomery County communities. DMV-GC Group provides free in-home consultations with detailed estimates for every ADU type." },
  { eventKey: "1", question: "What are the zoning rules for ADUs in Potomac?", answer: "Potomac is in unincorporated Montgomery County, governed by the county's ADU ordinance. Key rules: the lot must be at least 6,000 sq ft (virtually all Potomac properties qualify); the ADU cannot exceed 1,200 sq ft or 50% of the main home's floor area; the property owner must occupy either the main home or the ADU; only one ADU per lot; a Certificate of Occupancy is required before occupancy. Detached ADU setback and lot coverage requirements vary by Potomac's zoning district (typically RE-1 or RE-2). DMV-GC Group confirms all applicable requirements for your specific property during the free consultation." },
  { eventKey: "2", question: "Can I build a detached ADU on my Potomac estate lot?", answer: "Yes — and Potomac's large estate lots are among the most favorable in all of Montgomery County for detached ADU construction. Lots of 1–5+ acres in Avenel, Travilah, and the River Road corridor typically have ample room to meet all setback and coverage requirements while building a genuinely substantial detached ADU of 600–1,200 sq ft. DMV-GC Group assesses your specific lot conditions and confirms feasibility during the free consultation." },
  { eventKey: "3", question: "Does my Avenel HOA affect ADU construction?", answer: "Yes. Avenel's HOA has an Architectural Review Committee (ARC) that must approve exterior modifications including new structures and additions. ADU construction in Avenel requires ARC approval before Montgomery County permits are filed. DMV-GC Group prepares all required ARC documentation — architectural drawings, material specifications, site plan — and manages the review process. We submit ARC and county permits concurrently wherever possible to minimize total timeline." },
  { eventKey: "4", question: "Does DMV-GC Group handle all ADU permits in Potomac?", answer: "Yes. DMV-GC Group handles the complete ADU permit process — architectural drawings, zoning confirmation, Montgomery County building permit, all required trade permits (electrical, plumbing, mechanical), and Certificate of Occupancy. Our in-house architects prepare all required drawings and our permit team manages all county correspondence and inspection scheduling. Potomac homeowners never need to contact Montgomery County directly for any part of the ADU permit process." },
  { eventKey: "5", question: "Is DMV-GC Group licensed for ADU construction in Potomac, MD?", answer: "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home improvement and construction work in Potomac and Montgomery County. We employ licensed plumbers, licensed electricians, and in-house architects. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every ADU project completed in Potomac." }
];

export default function ADUPotomacMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => { setActiveMenuItem("service"); }, []);
  return (
    <main>
      <div className="city-service-detail-page adu-potomac-md">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/services">Services</Link><span>›</span>
            <Link href="/service/adu">ADU Construction</Link><span>›</span>
            Potomac, MD
          </nav>

          <div className="hero">
            <div className="hero-location-tag">📍 Serving Potomac, MD</div>
            <h1>ADU Construction in Potomac, MD — Accessory Dwelling Unit Contractor</h1>
            <div className="hero-meta">
              <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
              <span className="badge">✓ MHIC Licensed & Insured</span>
              <span className="badge">✓ In-House Architects & Permits</span>
              <span className="badge">✓ Free In-Home Consultation</span>
              <span className="badge dark">📞 +1 240-730-1292</span>
            </div>
          </div>

          <div className="intro-box">
            Planning to build an <strong>ADU in Potomac, MD</strong>? Potomac's large estate properties — many sitting on one to five or more acres in Avenel, Travilah, and the River Road corridor — offer some of the most favorable conditions for ADU construction in all of Montgomery County. Whether you want to build a detached guest cottage on your rear acreage, convert one bay of a multi-car garage, finish the basement into a legal rental apartment, or add an attached in-law suite, DMV-GC Group's licensed design-build team handles every step — architectural design, Montgomery County zoning approval, permit management, construction, and Certificate of Occupancy — all under one contract.
          </div>

          <div className="trust-bar">
            <div className="trust-item">
              <div className="icon">🏗️</div>
              <strong>Design-Build In-House</strong>
              <span>Architects, engineers & builders — one team</span>
            </div>
            <div className="trust-item">
              <div className="icon">📋</div>
              <strong>Full Permit Handling</strong>
              <span>Montgomery County zoning & permits</span>
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

          <h2>What Is an ADU? — And Why Potomac Properties Are Ideal</h2>
          <p>
            An <strong>Accessory Dwelling Unit (ADU)</strong> — also called an in-law suite, guest cottage, carriage house, or backyard apartment — is a fully self-contained secondary residential unit built on the same lot as a primary home. An ADU has its own bedroom, bathroom, kitchen or kitchenette, and separate entrance — it functions as a complete independent living space.
          </p>
          <p>
            In Potomac and throughout unincorporated Montgomery County, ADUs are permitted under the county's ADU ordinance on any qualifying single-family residential lot. And Potomac's estate properties are among the most favorable for ADU construction in the entire county — for a simple reason: the lots are large enough to accommodate a genuinely substantial detached ADU without crowding the primary residence, and the homes are valuable enough that the ADU addition creates proportionally significant value.
          </p>

          <div className="highlight">
            <p>💡 <strong>Potomac ADU Opportunity:</strong> On Potomac's typical 1–5 acre estate lots, a well-designed detached ADU adds $150,000–$350,000+ to property value and generates $2,500–$4,500/month in rental income — making it one of the highest absolute-dollar-return investments available in the Montgomery County real estate market.</p>
          </div>

          <h2>Types of ADUs We Build in Potomac, MD</h2>
          <p>
            DMV-GC Group builds all ADU types in Potomac — from detached cottages on rear acreage to basement apartment conversions. Here are the four main types we complete in Potomac, with typical cost ranges for this market:
          </p>

          <div className="adu-type-grid">
            <div className="adu-type-card">
              <span className="adu-tag">Most Popular in Potomac</span>
              <h3>Detached ADU — Backyard Cottage / Guest House</h3>
              <p>A brand-new, standalone structure built in your rear yard — fully separate from the main home. Complete with kitchen, bathroom, bedroom(s), living space, and private entrance. On Potomac's large estate lots, detached ADUs can be built at genuine residential scale — 600–1,200 sq ft — with quality that matches the primary home. Ideal as a rental unit, guest house, caretaker's quarters, or multi-generational living space.</p>
              <div className="adu-cost">Typical Cost: $175,000 – $450,000+</div>
            </div>
            <div className="adu-type-card">
              <span className="adu-tag">Best ROI per Dollar</span>
              <h3>Basement ADU Conversion</h3>
              <p>Convert an existing unfinished or partially finished basement into a fully legal, permitted apartment. Egress windows, separate entrance, full kitchen, bathroom, and bedroom within the home's existing footprint. Potomac's large estate homes often have 1,500–3,000 sq ft of basement space — basement ADUs here can be genuinely spacious, well-appointed units rather than compact urban apartments.</p>
              <div className="adu-cost">Typical Cost: $80,000 – $160,000</div>
            </div>
            <div className="adu-type-card">
              <span className="adu-tag">Fastest Timeline</span>
              <h3>Garage Conversion ADU</h3>
              <p>Transform one bay of a multi-car garage into a comfortable, legal living space while maintaining parking for the main residence. Potomac's estate homes commonly have 3- and 4-car garages — converting one bay creates a studio or one-bedroom ADU with minimal impact on the main home's functionality. HVAC, plumbing, insulation, egress, and all interior finishes handled by DMV-GC Group.</p>
              <div className="adu-cost">Typical Cost: $70,000 – $140,000</div>
            </div>
            <div className="adu-type-card">
              <span className="adu-tag">For Multigenerational Living</span>
              <h3>Attached In-Law Suite Addition</h3>
              <p>A new addition built onto the side or rear of the main home — sharing a wall but with a completely separate entrance, living area, bedroom, kitchen, and bathroom. Ideal for aging parents or adult children who want proximity with privacy. On Potomac's large lots, additions can be built at generous scale without crowding the existing structure.</p>
              <div className="adu-cost">Typical Cost: $130,000 – $280,000</div>
            </div>
          </div>

          <div className="author-box">
            <div className="author-avatar">🏠</div>
            <div className="author-info">
              <h4>About DMV-GC Group — Potomac's Licensed ADU Design-Build Contractor</h4>
              <p>DMV-GC Group is based in North Bethesda — minutes from Potomac. Our in-house team includes licensed architects, structural engineers, licensed electricians, licensed plumbers, and HVAC specialists — all the disciplines a complete ADU project requires, under one roof and one contract. We have completed ADU projects on Potomac estate properties and are familiar with the Montgomery County ADU ordinance requirements specific to Potomac's zoning districts. We hold a Maryland MHIC license and back every project with a 1-year workmanship warranty.</p>
              <div className="author-creds">
                <span className="cred">MHIC Licensed</span>
                <span className="cred">In-House Architects</span>
                <span className="cred">Licensed Plumbers</span>
                <span className="cred">Licensed Electricians</span>
                <span className="cred">4.9★ Rated</span>
                <span className="cred">1-Year Warranty</span>
              </div>
            </div>
          </div>

          <h2>Why Potomac Estate Properties Are Ideal for ADU Construction</h2>
          <p>
            Most Montgomery County ADU projects are constrained by small suburban lots — setback requirements, impervious surface limits, and lot coverage percentages leave little room for a meaningful detached ADU. Potomac is different. Here is why Potomac's estate properties offer ADU advantages that most of the county cannot match:
          </p>

          <div className="estate-grid">
            <div className="estate-box">
              <div className="icon">📐</div>
              <h3>Large Lot Size</h3>
              <p>Potomac lots in Avenel, Travilah, and River Road commonly range from 1 to 5+ acres. Montgomery County's ADU setback and lot coverage rules that restrict suburban ADUs to minimal footprints simply do not bind on these lots — leaving room for genuinely substantial detached structures.</p>
            </div>
            <div className="estate-box">
              <div className="icon">🏛️</div>
              <h3>High Base Property Value</h3>
              <p>On a $1.5–$3M Potomac estate, a $200,000–$300,000 ADU investment adds proportionally significant value. The same ADU in a lower-value neighborhood adds less absolute value — Potomac's base values amplify the return on ADU construction.</p>
            </div>
            <div className="estate-box">
              <div className="icon">🏠</div>
              <h3>Multi-Car Garages</h3>
              <p>Potomac estates commonly have 3- and 4-car attached or detached garages. Converting one bay to an ADU while maintaining two or three parking spaces creates a rental unit or in-law suite with minimal impact on the home's functionality.</p>
            </div>
            <div className="estate-box">
              <div className="icon">💰</div>
              <h3>Premium Rental Market</h3>
              <p>Potomac's proximity to DC, Bethesda, NIH, and major employers supports above-average rental rates for quality units. A well-finished detached ADU or basement apartment in Potomac commands $2,500–$4,500/month — among the highest ADU rents in Montgomery County.</p>
            </div>
            <div className="estate-box">
              <div className="icon">🏊</div>
              <h3>Pool House Conversion</h3>
              <p>Many Potomac estate properties have pool houses or cabana structures. Where these structures meet Montgomery County's minimum standards, converting an existing pool house to a legal ADU — with kitchen, bathroom, and proper egress — can be the most cost-effective path to a detached ADU on a Potomac property.</p>
            </div>
            <div className="estate-box">
              <div className="icon">👨‍👩‍👧</div>
              <h3>Multi-Gen Living Demand</h3>
              <p>Potomac's established family community and high-value homes make multigenerational living — parents or adult children in an on-property ADU — a natural fit. The lot sizes and existing structures on Potomac properties often make implementing this vision easier here than anywhere else in the county.</p>
            </div>
          </div>

          <h2>Montgomery County ADU Zoning Rules — What Potomac Homeowners Need to Know</h2>
          <p>
            Potomac is in unincorporated Montgomery County, so ADU construction is governed by Montgomery County's ADU ordinance. Here are the key rules that apply to Potomac properties:
          </p>

          <div className="spec-box">
            <h3>📋 Montgomery County ADU Ordinance — Key Requirements for Potomac</h3>
            <ul>
              <li><strong>Lot size minimum:</strong> The lot must be at least 6,000 sq ft to permit an ADU — essentially every Potomac single-family property qualifies, as most Potomac lots are significantly larger.</li>
              <li><strong>ADU size limit:</strong> An ADU cannot exceed 1,200 sq ft or 50% of the gross floor area of the primary dwelling, whichever is less. Most Potomac estates have main homes well over 4,000 sq ft, meaning the 1,200 sq ft cap is the binding limit — which still allows a generous 2-bedroom ADU.</li>
              <li><strong>Detached ADU setbacks:</strong> A detached ADU must comply with the rear and side yard setback requirements of the zoning district. Potomac's RE-2 and RE-1 zoning districts have larger setback requirements than denser suburban zones — but Potomac's large lots almost always provide ample room to meet them.</li>
              <li><strong>Lot coverage:</strong> The total impervious surface and building coverage limits of the zoning district apply. On Potomac's large estate lots, a detached ADU footprint rarely challenges these limits.</li>
              <li><strong>One ADU per lot:</strong> Only one ADU is permitted on each single-family lot in Montgomery County.</li>
              <li><strong>Owner-occupancy:</strong> The property owner must reside in either the primary dwelling or the ADU. Investment properties where neither unit is owner-occupied do not qualify for an ADU permit under the county's current ordinance.</li>
              <li><strong>Certificate of Occupancy:</strong> A COO from Montgomery County is required before the ADU can be legally occupied or rented. DMV-GC Group manages the COO application and all required inspections as a standard part of every ADU project.</li>
              <li><strong>Separate utilities:</strong> Separate electric metering is recommended for rental ADUs — DMV-GC Group coordinates meter separation with Pepco as part of most ADU projects. Water and sewer typically remain on the main home's account unless separate connections are specifically requested.</li>
              <li><strong>Design standards:</strong> Montgomery County's ADU ordinance requires the ADU to be architecturally compatible with the primary home. On Potomac estate properties, this compatibility standard often results in detached ADUs that are genuinely attractive structures — matching the materials and character of the main home. DMV-GC Group's architects design to this standard as a matter of course.</li>
            </ul>
          </div>

          <div className="note">
            ⚠️ <strong>HOA Note for Avenel and Other Planned Communities:</strong> Portions of Potomac — including Avenel — are governed by HOAs that may have additional architectural review requirements beyond Montgomery County's ADU ordinance. If your property is in an HOA community, ADU design and placement may require HOA Architectural Review Committee (ARC) approval before Montgomery County permits are filed. DMV-GC Group identifies any HOA review requirements during the consultation and advises on the most efficient path to approval.
          </div>

          <h2>Benefits of Building an ADU on Your Potomac Property</h2>

          <div className="benefit-grid">
            <div className="benefit-box">
              <div className="icon">💰</div>
              <strong>Rental Income</strong>
              <span>Generate $2,500–$4,500/month in the Potomac market — among the highest ADU rents in Montgomery County</span>
            </div>
            <div className="benefit-box">
              <div className="icon">📈</div>
              <strong>Property Value</strong>
              <span>ADUs typically add $150,000–$350,000+ to Potomac estate property values</span>
            </div>
            <div className="benefit-box">
              <div className="icon">👨‍👩‍👧</div>
              <strong>Multigenerational Living</strong>
              <span>House aging parents or adult children with full privacy and independence on your estate property</span>
            </div>
            <div className="benefit-box">
              <div className="icon">🏠</div>
              <strong>Guest House</strong>
              <span>A dedicated guest cottage that provides hotel-quality accommodation without displacing family from the main home</span>
            </div>
            <div className="benefit-box">
              <div className="icon">💼</div>
              <strong>Home Office / Studio</strong>
              <span>A separate structure for a private professional office, art studio, or creative space — fully separated from the main home</span>
            </div>
            <div className="benefit-box">
              <div className="icon">🔑</div>
              <strong>Caretaker Quarters</strong>
              <span>On-property housing for a property manager, estate caretaker, or household staff — practical for larger Potomac estate properties</span>
            </div>
          </div>

          <h2>ADU Design Quality in Potomac — Matching the Main Home</h2>
          <p>
            On a Potomac estate property where the main home has been built and finished to a high standard, an ADU that looks like an afterthought undermines both the property's aesthetic and its market value. DMV-GC Group's in-house architects design Potomac ADUs to architectural standards that are compatible with — and complementary to — the primary residence. This means:
          </p>

          <div className="process-grid">
            <div className="process-card">
              <h3>🏛️ Architectural Compatibility</h3>
              <p>Exterior materials, roof pitch, window proportions, and architectural details that match or complement the main home. A Colonial Revival estate does not get a modern flat-roof ADU. A contemporary home does not get a Victorian cottage. Architectural compatibility is both a Montgomery County requirement and a sound design principle.</p>
            </div>
            <div className="process-card">
              <h3>🔧 Quality of Systems</h3>
              <p>Separate HVAC system sized for the ADU's square footage — not tapped from the main home's system. Independent electrical sub-panel. Plumbing to match the fixture quality of the price point. Insulation to current energy code. A quality ADU functions as a complete home, not a roughed-in afterthought.</p>
            </div>
            <div className="process-card">
              <h3>🪟 Interior Finishes</h3>
              <p>Kitchen and bathroom finishes that match the rental or use context — a $3,500/month rental unit warrants stone countertops and quality fixtures. A caretaker's cottage warrants durable, practical materials. DMV-GC Group's design team specifies finishes appropriate to the intended use and price point of each Potomac ADU.</p>
            </div>
            <div className="process-card">
              <h3>🌿 Site Integration</h3>
              <p>A detached ADU on a Potomac estate lot needs to be sited and landscaped in a way that feels intentional — not dropped in the rear yard without context. We assess the existing landscape, drainage, trees, and sight lines during the design phase to site the ADU where it looks like it belongs.</p>
            </div>
          </div>

          <h2>Our ADU Construction Process in Potomac</h2>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Free In-Home Consultation & Site Assessment</h3>
                <p>We visit your Potomac property, assess the lot for ADU siting opportunities — existing structures, trees, drainage, setbacks, HOA considerations — and confirm your goals. We provide a realistic overview of what's feasible on your specific property and a preliminary budget range. No cost, no obligation.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Zoning Confirmation & HOA Review Assessment</h3>
                <p>We confirm the applicable Montgomery County zoning district for your property, verify all ADU size, setback, and coverage requirements, and determine whether your HOA (Avenel, or others) requires ARC review before county permits are filed. This confirmation happens before any design work begins.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>Architectural Design Development</h3>
                <p>Our in-house architects develop full architectural drawings — floor plan, elevations, site plan, and sections — for the ADU. Design is reviewed with you and refined until the design meets your vision, Montgomery County's requirements, and any HOA architectural compatibility standards.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>HOA ARC Submission (If Required)</h3>
                <p>For Avenel and other HOA communities, we prepare and submit all required ARC documentation — architectural drawings, material specifications, site plan — and manage the review process. HOA review and Montgomery County permit processing run concurrently wherever possible.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">5</div>
              <div className="step-content">
                <h3>Montgomery County Permit Filing</h3>
                <p>We file all required Montgomery County permits — building, electrical, plumbing, mechanical — with full architectural and engineering drawings. Our permit team manages all county correspondence, plan review comments, and inspection scheduling throughout the project.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">6</div>
              <div className="step-content">
                <h3>Foundation, Framing & Construction</h3>
                <p>Full construction of the ADU — from site preparation and foundation through framing, exterior, roofing, mechanical rough-ins, insulation, drywall, flooring, kitchen, bathroom, and all interior finishes. Coordinated by a dedicated project manager throughout.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">7</div>
              <div className="step-content">
                <h3>Certificate of Occupancy & 1-Year Warranty</h3>
                <p>We manage all required Montgomery County inspections and the Certificate of Occupancy process — the document that legally permits the ADU to be occupied or rented. After COO issuance, we conduct a final walkthrough, address every punch list item, and activate your 1-year workmanship warranty.</p>
              </div>
            </div>
          </div>

          <h2>ADU Construction Cost in Potomac, MD</h2>
          <p>
            Here is a realistic cost breakdown for <strong>ADU construction in Potomac, Maryland</strong>. Costs reflect Potomac's premium market — larger structures, higher finish quality, and more complex site conditions than most Montgomery County ADU projects:
          </p>

          <table className="cost-table">
            <tbody>
              <tr>
                <th>ADU Type</th>
                <th>Typical Cost Range</th>
                <th>Notes</th>
              </tr>
              <tr>
                <td>Basement ADU Conversion</td>
                <td>$80,000 – $160,000</td>
                <td>Full finishing, egress windows, separate entrance, kitchen, bathroom, fire separation, COO. Potomac's large basements often support generous 1–2 bedroom ADU configurations.</td>
              </tr>
              <tr>
                <td>Garage Conversion ADU (one bay)</td>
                <td>$70,000 – $140,000</td>
                <td>HVAC, insulation, plumbing rough-in, egress, kitchen, bathroom, interior finishes, permits, COO. Studio or one-bedroom configuration within one garage bay.</td>
              </tr>
              <tr>
                <td>Pool House Conversion to ADU</td>
                <td>$60,000 – $130,000</td>
                <td>Where an existing pool house structure has adequate square footage and height, conversion may be the most cost-effective path to a detached ADU in Potomac.</td>
              </tr>
              <tr>
                <td>Attached In-Law Suite Addition</td>
                <td>$130,000 – $280,000</td>
                <td>New addition with bedroom, bathroom, kitchen, living area, and private entrance. Size typically 500–900 sq ft in Potomac market.</td>
              </tr>
              <tr>
                <td>Detached ADU — 1 Bedroom (600–700 sq ft)</td>
                <td>$175,000 – $280,000</td>
                <td>New construction. Full kitchen, bathroom, living area, private entrance. Architectural compatibility with main home included.</td>
              </tr>
              <tr>
                <td>Detached ADU — 2 Bedroom (800–1,000 sq ft)</td>
                <td>$240,000 – $380,000</td>
                <td>New construction. Full 2-bed/1-bath or 2-bed/2-bath ADU. Maximum rental income potential. Most popular detached ADU configuration in Potomac.</td>
              </tr>
              <tr>
                <td>Detached ADU — Full Cottage (1,000–1,200 sq ft)</td>
                <td>$320,000 – $450,000+</td>
                <td>Maximum size allowed under Montgomery County ADU ordinance. Full residential quality — 2 bedrooms, 2 bathrooms, full kitchen, laundry, covered porch. Highest rental income and property value impact.</td>
              </tr>
            </tbody>
          </table>

          <div className="tip">
            💡 <strong>Potomac ADU Payback:</strong> A 1,000–1,200 sq ft detached ADU in Potomac at $320,000–$400,000 total investment, renting at $3,500–$4,500/month, reaches full payback in approximately 7–9 years in rental income — and adds $250,000–$350,000+ in immediate property value. The net investment recovery timeline, accounting for value added, is often 3–5 years or less.
          </div>

          <div className="cta-banner">
            <h2>Get a Free ADU Consultation for Your Potomac Property</h2>
            <p>We'll visit your Potomac estate, assess your ADU options — detached cottage, garage conversion, basement ADU — confirm the zoning and HOA requirements, and provide a detailed estimate. No cost, no obligation.</p>
            <Link href="/contact-us" className="cta-btn">Schedule Free ADU Consultation</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
          </div>

          <h2>What Potomac Homeowners Say About DMV-GC Group</h2>

          <div className="review-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"DMV-GC Group built us a 1,100 sq ft detached guest cottage on our Travilah property that is genuinely beautiful — matched to our Colonial's exterior perfectly. The Montgomery County permit process was handled entirely by their team. We're renting it for $4,200/month and it's never been vacant. Best investment we've made in this property."</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Travilah, Potomac MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"We converted the third bay of our Avenel garage into a one-bedroom in-law suite for my mother. DMV-GC Group handled the Avenel HOA architectural review and the Montgomery County permits simultaneously. The suite is beautiful — you'd never guess it used to be a garage bay. My mother loves it."</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Avenel, Potomac MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"Our Potomac home has 2,800 sq ft of unfinished basement. DMV-GC Group converted part of it into a two-bedroom ADU — egress windows, separate entrance from the side of the house, full kitchen, two bathrooms. The COO came through without a single issue. Current tenant pays $3,100/month."</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">River Road Corridor, Potomac MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"The pool house conversion was the most cost-effective option for our property and DMV-GC Group identified that immediately during the consultation. We spent $95,000 converting an existing structure to a legal ADU rather than $300,000+ for new construction. Their upfront assessment saved us a significant amount."</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Brickyard Road, Potomac MD</span></div>
            </div>
          </div>

          <div className="highlight">
            <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> DMV-GC Group is trusted by Potomac homeowners for ADU projects of every type — from basement conversions to full detached cottages — with the architectural design quality, permit expertise, and construction craftsmanship that Potomac's estate market expects.</p>
          </div>

          <h2>Serving Potomac and Surrounding Areas for ADU Construction</h2>

          <div className="areas-grid">
            <span className="area-pill">Potomac, MD</span>
            <span className="area-pill">Avenel</span>
            <span className="area-pill">Travilah</span>
            <span className="area-pill">River Road Corridor</span>
            <span className="area-pill">Bethesda</span>
            <span className="area-pill">North Bethesda</span>
            <span className="area-pill">Chevy Chase</span>
            <span className="area-pill">Cabin John</span>
            <span className="area-pill">Rockville</span>
            <span className="area-pill">Washington DC</span>
          </div>

          <div className="nearby-box">
            <h3>Also serving Bethesda, MD for ADU construction</h3>
            <p>DMV-GC Group builds ADUs throughout Bethesda — the next community south of Potomac along the I-270 / MD-355 corridor. Bethesda homeowners benefit from the same licensed design-build team, in-house architects, and full Montgomery County permit management. <Link href="/service/adu">View our full ADU construction service page &rarr;</Link></p>
          </div>

          <h2>Frequently Asked Questions — ADU Construction in Potomac, MD</h2>
          <Accordion defaultActiveKey="0" flush>
            {faqData.map((faq) => (
              <Accordion.Item eventKey={faq.eventKey} key={faq.eventKey}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="internal-links">
            <h2>Explore Our Other Services in Potomac</h2>
            <ul>
              <li><Link href="/service/kitchen-remodeling/potomac-md">Kitchen Remodeling in Potomac, MD</Link></li>
              <li><Link href="/service/bathroom-remodeling/potomac-md">Bathroom Remodeling in Potomac, MD</Link></li>
              <li><Link href="/service/basement-remodeling/potomac-md">Basement Remodeling in Potomac, MD</Link></li>
              <li><Link href="/service/home-additions">Home Additions in Potomac, MD</Link></li>
              <li><Link href="/service/design-build">Design-Build Contractor in Potomac, MD</Link></li>
              <li><Link href="/service/deck-building">Deck Building in Potomac, MD</Link></li>
            </ul>
          </div>

          <div className="cta-banner">
            <h2>Ready to Build Your Potomac ADU?</h2>
            <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. We'll assess your Potomac property, confirm what's feasible, and design the ADU that makes the most of your estate lot.</p>
            <Link href="/contact-us" className="cta-btn">Get Free ADU Consultation in Potomac &rarr;</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
    </main>
  );
}
