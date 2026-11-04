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
      "description": "Licensed design-build general contractor headquartered in North Bethesda, MD at 11810 Grand Park Ave, Suite 500. Specializing in ADU construction across North Bethesda's diverse housing — basement ADUs, split-level lower-level conversions, garage conversions, and attached in-law suites — with full Montgomery County permit and Certificate of Occupancy management.",
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
        { "@type": "City", "name": "Kensington" }
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
      "@id": "https://www.dmv-gc.com/service/adu/north-bethesda-md#service",
      "serviceType": "ADU Construction",
      "name": "ADU Construction in North Bethesda, MD",
      "alternateName": ["Accessory Dwelling Unit", "In-Law Suite", "Basement Apartment", "Garage Conversion", "Split-Level ADU"],
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "North Bethesda", "sameAs": "https://en.wikipedia.org/wiki/North_Bethesda,_Maryland" },
      "description": "Full-service ADU design and construction in North Bethesda, MD. Basement ADU conversions, split-level lower-level ADUs, garage conversions, and attached in-law suite additions — managed by North Bethesda's own licensed design-build contractor with full Montgomery County permit and COO management.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "60000", "maxPrice": "220000", "priceCurrency": "USD" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "ADU Construction", "item": "https://www.dmv-gc.com/service/adu" },
        { "@type": "ListItem", "position": 4, "name": "North Bethesda, MD", "item": "https://www.dmv-gc.com/service/adu/north-bethesda-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to build an ADU in North Bethesda, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ADU construction in North Bethesda, MD typically costs between $60,000 and $220,000 depending on ADU type and scope. A split-level lower-level ADU conversion runs $60,000–$110,000. A basement ADU conversion costs $65,000–$120,000. A garage conversion ADU costs $60,000–$108,000. An attached in-law suite addition costs $100,000–$220,000. As North Bethesda's local contractor headquartered at 11810 Grand Park Ave, DMV-GC Group provides free in-home consultations with detailed, honest estimates."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group based in North Bethesda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group is headquartered at 11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852 — in the Pike District redevelopment area near the White Flint Metro station. We are North Bethesda's local licensed ADU contractor, with direct familiarity with every neighborhood's housing stock, the Montgomery County permit process, and the White Flint Metro rental market that makes North Bethesda ADU investments so compelling."
          }
        },
        {
          "@type": "Question",
          "name": "Can I convert a North Bethesda split-level lower level into an ADU?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — and split-level lower-level ADU conversions are among the most practical and cost-effective ADU paths in North Bethesda. North Bethesda has a high concentration of 1960s–1970s split-level homes in White Flint Farm, Luxmanor, and surrounding neighborhoods where the lower level is partially above grade, naturally lit, and often has an existing side entrance. Many also have existing lower-level half bath rough-ins that reduce the cost of adding a bathroom. DMV-GC Group assesses split-level ADU feasibility during the free in-home consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group handle ADU permits in North Bethesda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. North Bethesda is an unincorporated community in Montgomery County — all ADU permits go through Montgomery County's Department of Permitting Services (DPS). DMV-GC Group handles all required building, electrical, and plumbing permits plus the Certificate of Occupancy application and all required inspections. As North Bethesda's local contractor, our permit team manages all county correspondence from application through final COO issuance — homeowners never need to contact Montgomery County directly."
          }
        },
        {
          "@type": "Question",
          "name": "What makes the White Flint Metro good for North Bethesda ADU investment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The White Flint Metro station — Red Line, between Rockville and Bethesda — is within walking or short biking distance of North Bethesda's established single-family neighborhoods including White Flint Farm and Luxmanor. This transit access creates consistent rental demand from commuters to DC, Bethesda, and Rockville who prioritize Metro access. A split-level or basement ADU in North Bethesda near the White Flint station typically rents for $1,500–$2,100/month, generating payback on a $65,000–$95,000 investment in approximately 4–5 years."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for ADU construction in North Bethesda, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in North Bethesda and Montgomery County. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every ADU project in North Bethesda."
          }
        }
      ]
    }
  ]
};

const faqData = [
  {
    eventKey: "0",
    question: "How much does it cost to build an ADU in North Bethesda, MD?",
    answer: "ADU construction in North Bethesda typically costs $60,000–$220,000 depending on type. A split-level lower-level ADU runs $60,000–$110,000 — the most affordable and practical option for White Flint Farm and Luxmanor split-levels. A townhome lower-level ADU costs $60,000–$95,000. A below-grade basement ADU costs $65,000–$120,000. A garage conversion runs $60,000–$108,000. An attached in-law suite addition costs $100,000–$220,000. Where a plumbing rough-in exists, the bathroom addition cost is reduced by $5,000–$10,000. DMV-GC Group provides free in-home consultations with itemized estimates from our North Bethesda office."
  },
  {
    eventKey: "1",
    question: "Is DMV-GC Group actually based in North Bethesda?",
    answer: "Yes. DMV-GC Group is headquartered at 11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852 — in the Pike District, steps from the White Flint Metro. We are not a contractor commuting from another county. We are North Bethesda's local licensed ADU contractor with direct familiarity with every neighborhood's housing stock, the Montgomery County permit process, and the White Flint Metro rental market that makes North Bethesda ADU investments so compelling."
  },
  {
    eventKey: "2",
    question: "Can I convert my North Bethesda split-level lower level into a legal ADU?",
    answer: "Yes — and this is the most practical ADU path for most North Bethesda split-level homes. The partially above-grade lower level provides natural light, code-compliant ceiling heights, and often an existing side entrance that reduce cost and complexity versus a fully below-grade basement ADU. Many North Bethesda split-levels also have existing plumbing rough-ins on the lower level that further reduce bathroom addition costs. DMV-GC Group assesses your specific split-level during the free consultation — from our office minutes away."
  },
  {
    eventKey: "3",
    question: "Does DMV-GC Group handle Montgomery County ADU permits from North Bethesda?",
    answer: "Yes. North Bethesda is in unincorporated Montgomery County — all ADU permits go through Montgomery County DPS. DMV-GC Group handles all required building, electrical, and plumbing permits plus the Certificate of Occupancy application and all required inspections — managed from our North Bethesda office. Homeowners never need to contact Montgomery County directly for any part of the ADU permit process."
  },
  {
    eventKey: "4",
    question: "What is the rental income potential for a North Bethesda ADU?",
    answer: "A quality split-level or basement ADU in White Flint Farm or Luxmanor — walkable to White Flint Metro — realistically rents for $1,500–$2,100/month in the current North Bethesda market. At this range, a $70,000–$95,000 ADU investment reaches full payback in approximately 4–5 years in rental income alone — and adds $90,000–$145,000 to the home's appraised value at COO issuance."
  },
  {
    eventKey: "5",
    question: "Is DMV-GC Group licensed for ADU construction in North Bethesda, MD?",
    answer: "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in North Bethesda and Montgomery County. We employ licensed plumbers and electricians in-house, are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every ADU project in North Bethesda. And as the community's local contractor, we stand behind our work in the neighborhood where we operate every day."
  }
];

export default function ADUNorthBethesdaMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => {
    setActiveMenuItem("service");
  }, []);

  return (
    <main>
      <div className="city-service-detail-page adu-north-bethesda-md">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/services">Services</Link><span>›</span>
            <Link href="/service/adu">ADU Construction</Link><span>›</span>
            North Bethesda, MD
          </nav>

          <div className="hero">
            <div className="hero-location-tag">📍 Serving North Bethesda, MD</div>
            <h1>ADU Construction in North Bethesda, MD — Accessory Dwelling Unit Contractor</h1>
            <div className="hero-meta">
              <span className="badge hq">🏠 Our Headquarters — 11810 Grand Park Ave, Suite 500</span>
              <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
              <span className="badge">✓ MHIC Licensed & Insured</span>
              <span className="badge">✓ Montgomery County Permits Handled</span>
              <span className="badge dark">📞 +1 240-730-1292</span>
            </div>
          </div>

          <div className="hq-banner">
            <div className="icon">🏠</div>
            <div>
              <h3>DMV-GC Group Is North Bethesda&apos;s Own ADU Contractor — Headquartered at 11810 Grand Park Ave</h3>
              <p>DMV-GC Group&apos;s office is at 11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852 — in the heart of the Pike District redevelopment area, steps from the White Flint Metro station. When you hire DMV-GC Group for a North Bethesda ADU project, you&apos;re hiring the team that works here every day. We know every neighborhood&apos;s housing stock — from White Flint Farm split-levels to Luxmanor colonials to Pike District townhomes — and we know the Montgomery County permit and COO process that every North Bethesda ADU requires. Faster consultation scheduling, quicker mid-project responses, and a genuine stake in the quality of work done in our own community.</p>
            </div>
          </div>

          <div className="intro-box">
            Planning to build an <strong>ADU in North Bethesda, MD</strong>? North Bethesda is one of the most compelling ADU investment communities in Montgomery County — a diverse mix of established 1960s–70s split-levels and colonials in White Flint Farm, Luxmanor, and Tilden Woods, newer Pike District and White Flint townhomes, and the White Flint Metro Red Line station that drives consistent transit-oriented rental demand. As North Bethesda&apos;s local licensed design-build contractor, DMV-GC Group manages the complete ADU process in-house — design, Montgomery County permits, Certificate of Occupancy, and construction — from the first consultation to the day your tenant moves in.
          </div>

          <div className="trust-bar">
            <div className="trust-item">
              <div className="icon">🏠</div>
              <strong>Local HQ</strong>
              <span>11810 Grand Park Ave, Suite 500</span>
            </div>
            <div className="trust-item">
              <div className="icon">📋</div>
              <strong>MoCo Permits & COO</strong>
              <span>Montgomery County — fully managed</span>
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

          <h2>Types of ADUs We Build in North Bethesda, MD</h2>
          <p>
            North Bethesda&apos;s housing spans multiple construction eras — from 1960s–70s split-levels and colonials in established western neighborhoods to 2000s–2010s Pike District townhomes — each presenting different ADU opportunities:
          </p>

          <div className="adu-type-grid">
            <div className="adu-type-card">
              <span className="adu-tag">Best for Split-Levels</span>
              <h3>Split-Level Lower-Level ADU</h3>
              <p>White Flint Farm, Luxmanor, and surrounding established neighborhoods have a high concentration of 1960s–70s split-levels where the lower level is partially above grade — naturally lit, with ceiling heights of 7&apos;4&quot;–8&apos;2&quot;, and often an existing side entrance. These are the most natural and cost-effective ADU conversions in North Bethesda. Many also have existing lower-level half bath rough-ins that reduce bathroom addition costs by $5,000–$10,000. DMV-GC Group — headquartered right here — assesses your split-level during the free consultation.</p>
              <div className="adu-cost">Typical Cost: $60,000 – $110,000</div>
            </div>
            <div className="adu-type-card">
              <span className="adu-tag">Full Basement ADU</span>
              <h3>Below-Grade Basement ADU Conversion</h3>
              <p>North Bethesda&apos;s colonials and Cape Cods have full below-grade basements — typically 700–1,100 sq ft — that are strong ADU conversion candidates. Newer construction in the Pike District area (2000s–2010s) often has 8&apos;–9&apos; ceilings and poured concrete foundations with existing rough-ins. Established neighborhood basements from the 1960s–70s have standard configurations — good ceiling heights and poured concrete in most cases. Includes egress windows, separate entrance, kitchen, bathroom, fire separation, and MoCo COO.</p>
              <div className="adu-cost">Typical Cost: $65,000 – $120,000</div>
            </div>
            <div className="adu-type-card">
              <span className="adu-tag">Where Garage Exists</span>
              <h3>Garage Conversion ADU</h3>
              <p>Where a detached or attached garage exists, conversion is often one of the faster ADU paths in North Bethesda. Particularly relevant for established neighborhood homes in White Flint Farm and Luxmanor that have detached garages with sufficient square footage. Includes insulation, HVAC, plumbing, egress, interior finishes, kitchen, and bathroom — all with Montgomery County permits and COO managed by the community&apos;s own contractor.</p>
              <div className="adu-cost">Typical Cost: $60,000 – $108,000</div>
            </div>
            <div className="adu-type-card">
              <span className="adu-tag">For Larger Lots</span>
              <h3>Attached In-Law Suite Addition</h3>
              <p>A new addition built onto the main home with separate entrance, bedroom, bathroom, and kitchen. Most feasible in White Flint Farm and Luxmanor homes on larger parcels with sufficient rear yard room after setbacks. Pike District townhomes have constrained rear yards — additions are less common here. DMV-GC Group confirms lot feasibility during the free consultation and designs all additions to be architecturally compatible with the existing home.</p>
              <div className="adu-cost">Typical Cost: $100,000 – $220,000</div>
            </div>
          </div>

          <div className="author-box">
            <div className="author-avatar">🏠</div>
            <div className="author-info">
              <h4>About DMV-GC Group — North Bethesda&apos;s Local Licensed ADU Contractor</h4>
              <p>DMV-GC Group is headquartered at 11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852 — in the Pike District, steps from the White Flint Metro. We have completed ADU conversions, basement renovations, kitchen remodels, and bathroom renovations throughout every North Bethesda neighborhood — from White Flint Farm split-levels to Tilden Woods colonials to Pike District townhomes. Our team knows this community&apos;s housing stock from the inside. We hold a Maryland MHIC license and back every project with a 1-year workmanship warranty.</p>
              <div className="author-creds">
                <span className="cred hq">HQ: 11810 Grand Park Ave</span>
                <span className="cred">MHIC Licensed</span>
                <span className="cred">Split-Level ADU Specialists</span>
                <span className="cred">Licensed Plumbers</span>
                <span className="cred">Licensed Electricians</span>
                <span className="cred">4.9★ Rated</span>
              </div>
            </div>
          </div>

          <h2>North Bethesda Split-Level ADUs — The Community&apos;s Most Practical ADU Path</h2>
          <p>
            North Bethesda&apos;s established western neighborhoods — White Flint Farm, Luxmanor, and adjacent streets — have a high concentration of 1960s–70s split-level homes. For ADU purposes, these homes offer advantages that reduce both cost and complexity compared to fully below-grade basement conversions.
          </p>

          <div className="split-level-grid">
            <div className="split-level-box">
              <div className="icon">☀️</div>
              <h3>Natural Light Included</h3>
              <p>Split-level lower levels in North Bethesda are 3–5 feet above grade — full-height side windows bring natural light into the ADU without egress window excavation. This makes the space feel like a proper apartment, not a basement unit — supporting higher rents.</p>
            </div>
            <div className="split-level-box">
              <div className="icon">📏</div>
              <h3>Code Ceiling Heights</h3>
              <p>7&apos;4&quot;–8&apos;2&quot; — consistently above the 7-foot code minimum. No ceiling height constraint, no HVAC rerouting needed to recover clearance. Standard finished ceiling throughout the ADU space.</p>
            </div>
            <div className="split-level-box">
              <div className="icon">🚪</div>
              <h3>Existing Side Entrance</h3>
              <p>Many North Bethesda split-levels have an original side door on the lower level. This existing entrance often satisfies the ADU&apos;s separate entrance requirement — no new door cut or foundation modification needed.</p>
            </div>
            <div className="split-level-box">
              <div className="icon">🔧</div>
              <h3>Rough-In Plumbing</h3>
              <p>A meaningful proportion of North Bethesda split-levels were built with lower-level half bath or laundry rough-ins. Completing an existing rough-in saves $5,000–$10,000 on the bathroom addition versus cutting new drain trenches through the slab.</p>
            </div>
            <div className="split-level-box">
              <div className="icon">💰</div>
              <h3>Lower Project Cost</h3>
              <p>Existing light, adequate height, and often a separate entrance mean less preparatory work than below-grade conversions. The result is a faster, more cost-effective ADU that still generates the same rental income at White Flint Metro rates.</p>
            </div>
            <div className="split-level-box">
              <div className="icon">🚇</div>
              <h3>White Flint Rent Premium</h3>
              <p>A split-level ADU with natural light and separate entrance in a home walkable to White Flint Metro commands $100–$200/month more than a comparable below-grade unit — and attracts a broader, more stable renter pool.</p>
            </div>
          </div>

          <h2>White Flint Metro & Pike District — North Bethesda&apos;s ADU Rental Demand Engine</h2>
          <p>
            North Bethesda&apos;s ADU investment case is anchored by one primary factor: the White Flint Metro station on the Red Line, within walking or short biking distance of the established single-family neighborhoods where ADU conversions are most common. This transit access creates the consistent rental demand that makes North Bethesda ADU investments financially compelling.
          </p>

          <div className="spec-box">
            <h3>🚇 White Flint Metro — What It Means for North Bethesda ADU Rental Income</h3>
            <ul>
              <li><strong>Red Line access:</strong> White Flint station provides direct Red Line service to Bethesda (8 minutes), Silver Spring (15 minutes), and DC (25–35 minutes depending on destination) — making North Bethesda highly accessible for DC-area commuters who want suburban living with Metro convenience.</li>
              <li><strong>Walkable neighborhoods:</strong> White Flint Farm and Luxmanor are within 0.5–1.5 miles of White Flint station — close enough for commuters to walk or bike. This proximity directly supports premium rental rates of $1,500–$2,100/month for quality ADU units in these neighborhoods.</li>
              <li><strong>Pike District development:</strong> The ongoing Pike District redevelopment along Rockville Pike is transforming the White Flint area with new retail, restaurants, and amenities — increasing the appeal of North Bethesda as a place to live and supporting continued rental market appreciation.</li>
              <li><strong>I-270 corridor employment:</strong> North Bethesda&apos;s position between Bethesda and Rockville gives ADU renters access to both DC employment (via Metro) and the I-270 biotech corridor (NIH, FDA, major biotech companies) by car — expanding the potential renter pool beyond Metro-only commuters.</li>
              <li><strong>Rental rate context:</strong> A quality split-level or basement ADU in North Bethesda&apos;s White Flint Farm or Luxmanor neighborhoods — walkable to White Flint Metro — realistically rents for $1,500–$2,100/month. At this range, a $70,000–$95,000 ADU investment reaches full payback in approximately 4–5 years in rental income alone.</li>
            </ul>
          </div>

          <h2>Montgomery County ADU Permits for North Bethesda Homeowners</h2>
          <p>
            North Bethesda is an unincorporated community in Montgomery County — unlike neighboring Kensington, Garrett Park, or the Chevy Chase villages, there is no separate Town or Village permit authority here. All ADU permits go through Montgomery County DPS. As the contractor headquartered in North Bethesda, DMV-GC Group manages this process from our office minutes from your home.
          </p>

          <div className="spec-box">
            <h3>📋 Montgomery County ADU Requirements — North Bethesda</h3>
            <ul>
              <li><strong>Lot size minimum:</strong> 6,000 sq ft — the vast majority of North Bethesda single-family properties qualify. Pike District townhomes on smaller lots should be verified during the consultation.</li>
              <li><strong>ADU size maximum:</strong> 1,200 sq ft or 50% of the main home&apos;s gross floor area, whichever is less. For North Bethesda&apos;s typical 1,400–2,400 sq ft homes, the 50% rule often applies — a 1,600 sq ft split-level&apos;s ADU cannot exceed 800 sq ft.</li>
              <li><strong>Egress in sleeping areas:</strong> Every bedroom in the ADU requires egress window compliance. Split-level above-grade side windows often already satisfy this — below-grade windows typically require enlargement or installation.</li>
              <li><strong>Separate entrance:</strong> Required. Many split-levels already have this. Below-grade basement ADUs without an existing side entrance require a new entrance cut.</li>
              <li><strong>Owner-occupancy:</strong> The property owner must reside in either the main home or the ADU. Pure investment properties without owner-occupancy do not qualify under the current county ordinance.</li>
              <li><strong>Certificate of Occupancy:</strong> Required before the ADU can be legally rented or occupied. DMV-GC Group manages the COO application and all required Montgomery County inspections as a standard part of every North Bethesda ADU project — from our office in the community.</li>
            </ul>
          </div>

          <h2>Benefits of Building an ADU in North Bethesda</h2>

          <div className="benefit-grid">
            <div className="benefit-box">
              <div className="icon">💰</div>
              <strong>Rental Income</strong>
              <span>$1,500–$2,100/month for quality split-level or basement ADUs — supported by White Flint Metro access</span>
            </div>
            <div className="benefit-box">
              <div className="icon">📈</div>
              <strong>Property Value</strong>
              <span>A permitted ADU adds $90,000–$145,000 to North Bethesda property values — in an appreciating Pike District corridor market</span>
            </div>
            <div className="benefit-box">
              <div className="icon">🚇</div>
              <strong>White Flint Metro</strong>
              <span>Red Line access within walking distance of White Flint Farm and Luxmanor — the strongest single rental demand driver in the community</span>
            </div>
            <div className="benefit-box">
              <div className="icon">👨‍👩‍👧</div>
              <strong>Multigenerational Living</strong>
              <span>House aging parents or adult children on the same property — a split-level lower level provides complete privacy with proximity</span>
            </div>
            <div className="benefit-box">
              <div className="icon">🏠</div>
              <strong>Local Contractor Advantage</strong>
              <span>As the contractor headquartered here, DMV-GC Group responds faster, knows the housing stock better, and has a real stake in North Bethesda project quality</span>
            </div>
            <div className="benefit-box">
              <div className="icon">🔑</div>
              <strong>Fast Payback</strong>
              <span>At current White Flint area rents, a $70,000–$95,000 ADU investment pays for itself in approximately 4–5 years in rental income alone</span>
            </div>
          </div>

          <h2>Serving All North Bethesda, MD Neighborhoods for ADU Construction</h2>

          <div className="neighborhood-grid">
            <div className="neighborhood-card">
              <h3>White Flint Farm</h3>
              <p>Established 1960s–70s neighborhood with high concentration of split-levels — the dominant ADU type here. Many homes within 0.8–1.2 miles of White Flint Metro station. Strong transit-oriented rental demand. Existing side entrances and rough-ins common on split-level lower levels. The most active ADU conversion market in North Bethesda.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Luxmanor</h3>
              <p>Established 1960s–70s colonials and split-levels along Luxmanor Drive and adjacent streets. Full basements in colonials provide 700–1,000+ sq ft of ADU potential. Split-levels here also offer the same natural light and entrance advantages as White Flint Farm. Metro proximity supports strong rental rates.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Pike District / Grand Park Ave</h3>
              <p>DMV-GC Group&apos;s own neighborhood — 11810 Grand Park Ave, Suite 500. Newer townhomes (2000s–2010s) with compact lower levels of 400–650 sq ft. HOA coordination included where applicable. Metro proximity is strongest here — steps from White Flint station. Smart layout design maximizes usable ADU space in townhome footprints.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Tilden Woods</h3>
              <p>1970s–80s single-family homes along Old Georgetown Road. Full below-grade basements with standard configurations — strong ADU conversion candidates. Less split-level concentration than White Flint Farm, but solid basement ADU opportunities in the colonial stock. Good lot sizes for attached additions in some cases.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Randolph Hills</h3>
              <p>Established neighborhood bordering Kensington and Garrett Park. Mix of 1950s–70s construction. Some homes have older foundation configurations similar to Kensington — assessment recommended before finalizing ADU type. Strong rental demand from proximity to both White Flint Metro and Kensington MARC (Brunswick Line) station.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Nebel Street / Hoya Saxa Area</h3>
              <p>Newer townhome and mixed-use developments in the White Flint redevelopment zone — among the most Metro-proximate residential addresses in North Bethesda. Newer construction with poured concrete and often existing rough-ins. HOA coordination included where applicable. Strongest absolute Metro-proximity rental demand in North Bethesda.</p>
            </div>
          </div>

          <h2>Our ADU Construction Process in North Bethesda</h2>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Free In-Home Consultation — From Your Neighborhood&apos;s Own Contractor</h3>
                <p>We visit your North Bethesda home — minutes from our Grand Park Avenue office — and assess all ADU options. Split-level lower level configuration, existing entrance and rough-in presence, below-grade basement conditions, garage feasibility, lot size for addition. For townhomes in the Pike District, we also confirm HOA requirements upfront. No cost, no obligation.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Rough-In Check &amp; Moisture Assessment</h3>
                <p>For split-level and basement ADU projects, we check for existing plumbing rough-ins that reduce bathroom costs, and assess moisture conditions in below-grade basement areas. Any required moisture management is documented and priced before ADU design is finalized — no surprises after construction starts.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>ADU Design Development</h3>
                <p>Our design team develops a floor plan optimized for your specific ADU space — split-level configuration, basement footprint, natural light conditions, egress requirements, and separate entrance design. For townhome projects, layout efficiency is the primary design priority within the compact lower level footprint.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>Montgomery County Permit Filing + COO Application</h3>
                <p>We file all required Montgomery County DPS permits and simultaneously initiate the Certificate of Occupancy application — from our North Bethesda office. Our permit team manages all county correspondence and inspection scheduling throughout the project.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">5</div>
              <div className="step-content">
                <h3>Construction — Egress, Mechanicals &amp; Finishes</h3>
                <p>Egress window installation where needed, then electrical, plumbing, HVAC, framing, drywall, flooring, kitchen, bathroom, and all finish work — coordinated by a dedicated project manager and inspected at each required stage by Montgomery County. Our crews are based here — response time for any mid-project questions is measured in minutes, not hours.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">6</div>
              <div className="step-content">
                <h3>County Inspections, COO &amp; 1-Year Warranty</h3>
                <p>We manage all required Montgomery County final inspections and the Certificate of Occupancy process. After COO issuance, we conduct a final walkthrough, address every punch list item, and activate your 1-year workmanship warranty. Your ADU is legally ready to rent.</p>
              </div>
            </div>
          </div>

          <h2>ADU Construction Cost in North Bethesda, MD</h2>
          <p>
            Here is a realistic cost breakdown for <strong>ADU construction in North Bethesda, Maryland</strong>. As the local contractor, these are the actual costs you&apos;ll encounter — not estimates built for a different market:
          </p>

          <table className="cost-table">
            <tbody>
              <tr>
                <th>ADU Type</th>
                <th>Typical Cost Range</th>
                <th>Notes for North Bethesda</th>
              </tr>
              <tr>
                <td>Split-Level Lower-Level ADU</td>
                <td>$60,000 – $110,000</td>
                <td>Most cost-effective option for White Flint Farm and Luxmanor split-levels. Existing light, height, and often entrance reduces work. Rough-in completion saves $5K–$10K where present.</td>
              </tr>
              <tr>
                <td>Townhome Lower-Level ADU (Pike District)</td>
                <td>$60,000 – $95,000</td>
                <td>Compact 400–650 sq ft footprint — smart layout design maximizes usable space. HOA coordination included where applicable. Strong Metro-proximity rental demand.</td>
              </tr>
              <tr>
                <td>Below-Grade Basement ADU</td>
                <td>$65,000 – $120,000</td>
                <td>Standard for North Bethesda colonials and Cape Cods. Egress windows, separate entrance, kitchen, bathroom, fire separation, MoCo COO included.</td>
              </tr>
              <tr>
                <td>Garage Conversion ADU</td>
                <td>$60,000 – $108,000</td>
                <td>Feasibility depends on garage size and ceiling height. More common in established White Flint Farm and Luxmanor homes than in Pike District townhomes.</td>
              </tr>
              <tr>
                <td>Attached In-Law Suite Addition</td>
                <td>$100,000 – $220,000</td>
                <td>Feasibility depends on rear yard setback room. Most common in White Flint Farm and Luxmanor homes with larger rear yards.</td>
              </tr>
              <tr>
                <td>Rough-In Completion (where present)</td>
                <td>Saves $5,000 – $10,000</td>
                <td>Common in North Bethesda split-levels and 1960s–70s construction. Checked during free consultation — a frequently found cost saver in this community.</td>
              </tr>
              <tr>
                <td>Separate Electrical Meter (Pepco)</td>
                <td>$2,000 – $4,500</td>
                <td>Recommended for rental ADUs. Pepco coordination included. Allows tenant to pay own electric bill.</td>
              </tr>
            </tbody>
          </table>

          <div className="tip">
            💡 <strong>North Bethesda ADU ROI:</strong> A split-level lower-level ADU in White Flint Farm or Luxmanor at $70,000–$90,000 — renting at $1,600–$1,900/month walkable to White Flint Metro — reaches full payback in approximately 4–5 years in rental income alone, while adding $95,000–$130,000 to appraised value at COO issuance. As the Pike District redevelopment continues to raise North Bethesda&apos;s profile and property values, ADU investments made now benefit from both current rental income and ongoing appreciation in a community that is actively transforming.
          </div>

          <div className="cta-banner">
            <h2>Get a Free ADU Consultation in North Bethesda</h2>
            <p>We&apos;re your local contractor — headquartered right here at 11810 Grand Park Ave. Call us or schedule online and we&apos;ll visit you quickly. Free in-home consultation, no obligation.</p>
            <Link href="/contact-us" className="cta-btn">Schedule Free ADU Consultation</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
          </div>

          <h2>What North Bethesda Homeowners Say About DMV-GC Group</h2>

          <div className="review-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our White Flint Farm split-level already had a side door on the lower level and a half-bath rough-in in the slab. DMV-GC Group found the rough-in during the consultation, completed it as part of the ADU bathroom, and converted the whole lower level into a legal ADU in 10 weeks. The White Flint Metro commuter we rented to hasn&apos;t left in two years.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">White Flint Farm, North Bethesda MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;DMV-GC Group is literally our neighborhood contractor — their office is on Grand Park Avenue, five minutes from our house in Luxmanor. When questions came up mid-project, someone was there the same day. The basement ADU they built is excellent. We&apos;re renting to an NIH researcher at $1,850/month.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Luxmanor, North Bethesda MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;We have a Pike District townhome with a small lower level. DMV-GC Group designed a smart layout that fits a home office and guest suite — with bathroom — within 520 sq ft. The Montgomery County COO process was managed completely by their team. The HOA coordination was included at no extra charge.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Pike District, North Bethesda MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;We converted our Tilden Woods colonial basement into a two-bedroom ADU. DMV-GC Group handled the Montgomery County permits, designed a floor plan that uses the full 950 sq ft intelligently, and delivered on time and on budget. The COO came through on the first inspection. Our tenant has been there since month one.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Tilden Woods, North Bethesda MD</span></div>
            </div>
          </div>

          <div className="highlight">
            <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> North Bethesda homeowners trust DMV-GC Group — their own local contractor — for ADU projects that take advantage of the White Flint Metro rental market, identify rough-ins that reduce costs, and deliver legal, rentable units efficiently from the team that calls this community home.</p>
          </div>

          <h2>Serving All North Bethesda, MD Neighborhoods for ADU Construction</h2>

          <div className="areas-grid">
            <span className="area-pill">North Bethesda, MD</span>
            <span className="area-pill">White Flint Farm</span>
            <span className="area-pill">Luxmanor</span>
            <span className="area-pill">Pike District</span>
            <span className="area-pill">Tilden Woods</span>
            <span className="area-pill">Randolph Hills</span>
            <span className="area-pill">Bethesda</span>
            <span className="area-pill">Rockville</span>
            <span className="area-pill">Kensington</span>
            <span className="area-pill">Garrett Park</span>
          </div>

          <div className="nearby-box">
            <h3>Also serving Bethesda, MD — directly south of North Bethesda</h3>
            <p>DMV-GC Group builds ADUs throughout Bethesda, which borders North Bethesda to the south along Old Georgetown Road and Wisconsin Avenue. Bethesda homeowners benefit from the same local team, Montgomery County permit expertise, and 1-year warranty. <Link href="/service/adu">View our full ADU construction service page →</Link></p>
          </div>

          <h2>Frequently Asked Questions — ADU Construction in North Bethesda, MD</h2>
          <Accordion defaultActiveKey="0" flush>
            {faqData.map((faq) => (
              <Accordion.Item eventKey={faq.eventKey} key={faq.eventKey}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="internal-links">
            <h2>Explore Our Other Services in North Bethesda</h2>
            <ul>
              <li><Link href="/service/kitchen-remodeling/north-bethesda-md">Kitchen Remodeling in North Bethesda, MD</Link></li>
              <li><Link href="/service/bathroom-remodeling">Bathroom Remodeling in North Bethesda, MD</Link></li>
              <li><Link href="/service/basement-remodeling/north-bethesda-md">Basement Remodeling in North Bethesda, MD</Link></li>
              <li><Link href="/service/home-additions">Home Additions in North Bethesda, MD</Link></li>
              <li><Link href="/service/flooring-remodeling">Flooring Installation in North Bethesda, MD</Link></li>
              <li><Link href="/service/design-build">Design-Build Contractor in North Bethesda, MD</Link></li>
            </ul>
          </div>

          <div className="cta-banner">
            <h2>Ready to Build Your North Bethesda ADU?</h2>
            <p>We&apos;re right here — headquartered at 11810 Grand Park Ave, Suite 500. Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. We&apos;ll assess your split-level or basement, check for rough-ins, and show you exactly what&apos;s possible.</p>
            <Link href="/contact-us" className="cta-btn">Get Free ADU Consultation in North Bethesda →</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
    </main>
  );
}
