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
      "description": "Licensed design-build general contractor serving Wheaton, MD. Specializing in ADU construction for Wheaton's diverse postwar housing stock — basement ADU conversions, split-level lower-level ADUs, and garage conversions — with full Montgomery County permit and Certificate of Occupancy management.",
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
        { "@type": "City", "name": "Wheaton", "sameAs": "https://en.wikipedia.org/wiki/Wheaton,_Maryland" },
        { "@type": "City", "name": "Silver Spring" },
        { "@type": "City", "name": "Kensington" },
        { "@type": "City", "name": "Gaithersburg" },
        { "@type": "City", "name": "Rockville" }
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
      "@id": "https://www.dmv-gc.com/service/adu/wheaton-md#service",
      "serviceType": "ADU Construction",
      "name": "ADU Construction in Wheaton, MD",
      "alternateName": ["Accessory Dwelling Unit", "In-Law Suite", "Basement Apartment", "Garage Conversion", "Split-Level ADU"],
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Wheaton", "sameAs": "https://en.wikipedia.org/wiki/Wheaton,_Maryland" },
      "description": "Full-service ADU design and construction in Wheaton, MD. Basement ADU conversions, split-level lower-level ADUs, and garage conversions — with Montgomery County permit and Certificate of Occupancy management. Serving Wheaton's diverse housing stock with transit-oriented ADU design.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "55000", "maxPrice": "190000", "priceCurrency": "USD" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "ADU Construction", "item": "https://www.dmv-gc.com/service/adu" },
        { "@type": "ListItem", "position": 4, "name": "Wheaton, MD", "item": "https://www.dmv-gc.com/service/adu/wheaton-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to build an ADU in Wheaton, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ADU construction in Wheaton, MD typically costs between $55,000 and $190,000 depending on ADU type and scope. A split-level lower-level ADU conversion runs $55,000\u2013$100,000. A basement ADU conversion costs $60,000\u2013$115,000. A garage conversion ADU costs $58,000\u2013$105,000. An attached in-law suite addition costs $95,000\u2013$190,000. Wheaton's value-oriented market means ADU investments here offer some of the strongest ROI percentages in Montgomery County — particularly given dual transit access from the Metro and Purple Line. DMV-GC Group provides free in-home consultations with detailed estimates."
          }
        },
        {
          "@type": "Question",
          "name": "How does the Purple Line affect ADU rental demand in Wheaton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Purple Line — Maryland's new east-west light rail connecting Bethesda to New Carrollton — has a station in Wheaton that dramatically expands the community's transit connectivity. Combined with the existing Wheaton Metro station on the Red Line, Wheaton now has dual transit access: north-south via Metro Red Line and east-west via Purple Line. This dual connectivity makes Wheaton one of the strongest ADU rental markets in Montgomery County — renters can reach DC, Bethesda, Silver Spring, College Park, and New Carrollton without a car, creating demand that supports ADU rents of $1,300\u2013$1,900/month."
          }
        },
        {
          "@type": "Question",
          "name": "Can I convert a Wheaton split-level lower level into an ADU?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — split-level lower-level conversions are the most common and cost-effective ADU type in Wheaton. Like Silver Spring, Wheaton has a high concentration of postwar split-levels where the lower level is partially above grade, naturally lit, and often has an existing side entrance. These features reduce the cost and complexity of ADU conversion compared to fully below-grade basements. Many Wheaton split-levels were also built with lower-level half baths or laundry rough-ins that further reduce bathroom addition costs. DMV-GC Group assesses your specific split-level during the free consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group handle ADU permits in Wheaton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Wheaton is an unincorporated community in Montgomery County — all ADU permits are processed through Montgomery County's Department of Permitting Services (DPS). DMV-GC Group handles all required building, electrical, and plumbing permits, plus the Certificate of Occupancy application and all required inspections. Homeowners never need to contact Montgomery County directly for any part of the ADU permit process."
          }
        },
        {
          "@type": "Question",
          "name": "What ADU types work best in Wheaton's concrete block foundation homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wheaton's 1950s\u20131960s construction includes many homes with concrete block foundations — which require a different moisture management approach than poured concrete. Before finishing a concrete block basement as an ADU, DMV-GC Group assesses the foundation for moisture infiltration through the block and recommends appropriate interior waterproofing. With proper moisture management, concrete block basement ADUs are fully feasible and perform well long-term. Alternatively, split-level lower-level ADUs — which are partially above grade and inherently less moisture-prone — are often the more straightforward option in Wheaton's older housing stock."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for ADU construction in Wheaton, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home improvement and construction work in Wheaton and Montgomery County. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every ADU project completed in Wheaton."
          }
        }
      ]
    }
  ]
};

const faqData = [
  { eventKey: "0", question: "How much does it cost to build an ADU in Wheaton, MD?", answer: "ADU construction in Wheaton typically costs $55,000–$190,000 depending on type. A split-level lower-level ADU runs $55,000–$100,000 — the most affordable and common option. A below-grade basement ADU costs $60,000–$115,000, with block foundation homes adding $4,500–$12,000 for waterproofing. A garage conversion runs $58,000–$105,000. An attached in-law suite addition costs $95,000–$190,000. DMV-GC Group provides free in-home consultations with itemized estimates for every Wheaton ADU type." },
  { eventKey: "1", question: "How does the Purple Line affect ADU investment in Wheaton?", answer: "The Purple Line gives Wheaton dual transit access — Red Line Metro north-south and Purple Line east-west — making it one of the most transit-connected communities in Montgomery County. This expands the renter pool to include commuters accessing destinations along the entire Purple Line corridor (Silver Spring, College Park, New Carrollton, Bethesda), supporting ADU rents of $1,300–$1,900/month and strong occupancy rates. The Purple Line is also driving property value appreciation along the Wheaton corridor, increasing the equity return on ADU investments made today." },
  { eventKey: "2", question: "My Wheaton home has a concrete block foundation — can I still build a basement ADU?", answer: "Yes — but moisture management must be addressed first. Concrete block walls are more porous than poured concrete, and finishing over an unaddressed block moisture problem creates tenant issues within 2–3 years. DMV-GC Group installs an interior drainage mat system and perimeter drain channel routing to a sump pit — permanently managing moisture before any finish work begins. This adds $4,500–$12,000 to the project cost but is non-negotiable for a basement ADU that will perform well long-term. Alternatively, if your home has a split-level lower level, that above-grade option avoids the block moisture issue entirely." },
  { eventKey: "3", question: "Can I convert my Wheaton split-level lower level into a legal ADU?", answer: "Yes — and split-level lower-level conversions are the most practical and cost-effective ADU path for most Wheaton properties. The partially above-grade configuration provides natural light, code-compliant ceiling heights, and often an existing separate entrance that reduce both cost and complexity. Many Wheaton split-levels also have existing plumbing rough-ins on the lower level that further reduce bathroom addition costs. DMV-GC Group assesses your specific split-level&apos;s configuration during the free consultation." },
  { eventKey: "4", question: "Does DMV-GC Group handle Montgomery County permits for Wheaton ADUs?", answer: "Yes. Wheaton is in unincorporated Montgomery County — all permits go through Montgomery County DPS. DMV-GC Group handles all required building, electrical, and plumbing permits plus the Certificate of Occupancy application and all required inspections. Our permit team manages all county correspondence from application through final COO issuance. Wheaton homeowners never need to contact Montgomery County directly." },
  { eventKey: "5", question: "Is DMV-GC Group licensed for ADU construction in Wheaton, MD?", answer: "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Wheaton and Montgomery County. We employ licensed plumbers and electricians in-house, are fully bonded, carry comprehensive general liability insurance and workers&apos; compensation coverage, and provide a 1-year workmanship warranty on every Wheaton ADU project." }
];

export default function ADUWheatonMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => { setActiveMenuItem("service"); }, []);
  return (
    <main>
      <div className="city-service-detail-page adu-wheaton-md">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/services">Services</Link><span>›</span>
            <Link href="/service/adu">ADU Construction</Link><span>›</span>
            Wheaton, MD
          </nav>

          <div className="hero">
            <div className="hero-location-tag">📍 Serving Wheaton, MD</div>
            <h1>ADU Construction in Wheaton, MD — Accessory Dwelling Unit Contractor</h1>
            <div className="hero-meta">
              <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
              <span className="badge">✓ MHIC Licensed &amp; Insured</span>
              <span className="badge">✓ Montgomery County Permits Handled</span>
              <span className="badge">✓ Free In-Home Consultation</span>
              <span className="badge dark">📞 +1 240-730-1292</span>
            </div>
          </div>

          <div className="transit-banner">
            <div className="icon">🚇</div>
            <div>
              <h3>Wheaton&apos;s Dual Transit Access — Red Line Metro + Purple Line — Creates One of Montgomery County&apos;s Strongest ADU Markets</h3>
              <p>Wheaton is uniquely positioned in the Montgomery County ADU market: the Wheaton Metro station provides Red Line access to DC, Bethesda, and Rockville, while the Purple Line — Maryland&apos;s new east-west light rail — adds connections to Silver Spring, College Park, and New Carrollton. No other Montgomery County community outside of Bethesda has this level of transit connectivity. For ADU investors, this dual access translates directly into rental demand: commuters seeking transit-accessible housing actively seek Wheaton, supporting ADU rents of $1,300–$1,900/month and among the fastest payback timelines in the county.</p>
            </div>
          </div>

          <div className="intro-box">
            Planning to build an <strong>ADU in Wheaton, MD</strong>? Wheaton is one of Montgomery County&apos;s most compelling ADU investment communities — a diverse, transit-rich neighborhood where postwar split-levels, colonials, and Cape Cods offer practical ADU paths at accessible price points, and where dual Metro and Purple Line access creates the rental demand to make those investments pay off. DMV-GC Group&apos;s licensed design-build team handles the complete ADU process in Wheaton — design, Montgomery County DPS permits, Certificate of Occupancy, and construction — from first consultation through the day your tenant moves in.
          </div>

          <div className="trust-bar">
            <div className="trust-item">
              <div className="icon">🚇</div>
              <strong>Dual Transit ADUs</strong>
              <span>Red Line Metro + Purple Line access</span>
            </div>
            <div className="trust-item">
              <div className="icon">📋</div>
              <strong>MoCo Permits &amp; COO</strong>
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

          <h2>Types of ADUs We Build in Wheaton, MD</h2>
          <p>
            Wheaton&apos;s postwar housing stock — primarily split-levels, colonials, and Cape Cods built in the 1950s–1970s — mirrors Silver Spring&apos;s in many respects but has its own specific characteristics. Here is a realistic assessment of the ADU types that work in Wheaton:
          </p>

          <div className="adu-type-grid">
            <div className="adu-type-card">
              <span className="adu-tag">Most Common in Wheaton</span>
              <h3>Split-Level Lower-Level ADU</h3>
              <p>Wheaton&apos;s dominant housing type is the postwar split-level — partially above grade on the lower level, with natural light from side windows and typically an existing side entrance. These are the most natural and cost-effective ADU conversions in the Wheaton market. Ceiling heights of 7&apos;4&quot;–8&apos;0&quot;, existing light, and often an existing door dramatically reduce complexity versus a fully below-grade basement ADU. Includes egress window compliance where needed, kitchen or kitchenette, bathroom, fire separation, and Montgomery County COO.</p>
              <div className="adu-cost">Typical Cost: $55,000 – $100,000</div>
            </div>
            <div className="adu-type-card">
              <span className="adu-tag">Full Basement ADU</span>
              <h3>Below-Grade Basement ADU Conversion</h3>
              <p>Wheaton&apos;s colonials and Cape Cods have full below-grade basements — typically 600–900 sq ft — that are solid ADU conversion candidates. Key consideration unique to Wheaton: the community&apos;s 1950s–1960s construction stock includes a significant proportion of concrete block foundation homes, which require interior moisture management before finishing. DMV-GC Group assesses block foundation moisture as a standard step before any Wheaton basement ADU design is finalized.</p>
              <div className="adu-cost">Typical Cost: $60,000 – $115,000</div>
            </div>
            <div className="adu-type-card">
              <span className="adu-tag">Where Garage Exists</span>
              <h3>Garage Conversion ADU</h3>
              <p>Where a detached or attached garage exists on the property, conversion is often one of the faster and most accessible ADU paths in Wheaton. Wheaton&apos;s postwar homes with detached single-car garages — common on lots along Veirs Mill Road and University Boulevard — should be assessed for square footage, ceiling height, and utility connection feasibility before proceeding. DMV-GC Group evaluates garage conversion potential during the free consultation.</p>
              <div className="adu-cost">Typical Cost: $58,000 – $105,000</div>
            </div>
            <div className="adu-type-card">
              <span className="adu-tag">For Larger Lots</span>
              <h3>Attached In-Law Suite Addition</h3>
              <p>A new addition built onto the side or rear of the main home — separate entrance, bedroom, bathroom, and kitchen. Wheaton&apos;s lots are generally modest by Montgomery County standards, but larger parcels in Glenmont and Layhill-adjacent areas may have sufficient rear yard room to accommodate an addition while meeting setback requirements. DMV-GC Group confirms feasibility during the free consultation.</p>
              <div className="adu-cost">Typical Cost: $95,000 – $190,000</div>
            </div>
          </div>

          <div className="author-box">
            <div className="author-avatar">🏠</div>
            <div className="author-info">
              <h4>About DMV-GC Group — Wheaton&apos;s Licensed ADU Construction Contractor</h4>
              <p>DMV-GC Group is based in North Bethesda, adjacent to Wheaton along the Viers Mill Road corridor. Our team has completed basement renovations, ADU conversions, and kitchen remodels throughout Wheaton&apos;s neighborhoods — including split-levels along University Boulevard and colonials near Wheaton Regional Park. We understand both Wheaton&apos;s specific housing stock (including concrete block foundations) and the Montgomery County permit and COO process. We hold a Maryland MHIC license and back every project with a 1-year workmanship warranty.</p>
              <div className="author-creds">
                <span className="cred">MHIC Licensed</span>
                <span className="cred">Block Foundation Experience</span>
                <span className="cred">Licensed Plumbers</span>
                <span className="cred">Licensed Electricians</span>
                <span className="cred">4.9★ Rated</span>
                <span className="cred">1-Year Warranty</span>
              </div>
            </div>
          </div>

          <h2>The Purple Line Effect on Wheaton ADU Investment</h2>
          <p>
            The Purple Line — Maryland&apos;s east-west light rail connecting Bethesda to New Carrollton through Silver Spring and College Park — fundamentally changes the ADU investment calculus in Wheaton. Before the Purple Line, Wheaton&apos;s transit access was the Red Line Metro north-south corridor. The Purple Line adds an entirely new axis of transit connectivity that Silver Spring does not fully share.
          </p>

          <div className="transit-grid">
            <div className="transit-card">
              <h3>🚇 Red Line Metro (Existing)</h3>
              <p>Wheaton Metro station on the Red Line provides direct access to DC (Shady Grove branch), Bethesda, Silver Spring, and all stations to Glenmont. One-seat ride to downtown DC in approximately 35 minutes. This existing connectivity already supports strong transit-oriented rental demand in Wheaton.</p>
            </div>
            <div className="transit-card">
              <h3>🚊 Purple Line (New)</h3>
              <p>The Purple Line&apos;s Wheaton station adds east-west light rail connectivity — direct service to Silver Spring, Takoma/Langley Park, College Park, New Carrollton, and Bethesda. This dramatically expands the commuter catchment area for Wheaton renters: workers accessing destinations along the entire Purple Line corridor can now reach Wheaton transit-efficiently.</p>
            </div>
            <div className="transit-card">
              <h3>📈 Combined Rental Impact</h3>
              <p>Dual transit access makes Wheaton one of the most transit-connected communities in Montgomery County outside of Bethesda and Silver Spring downtown. For ADU rental purposes, this expands the renter pool — both Red Line commuters and Purple Line commuters can be reached — supporting higher occupancy rates and rents of $1,300–$1,900/month for quality ADU units.</p>
            </div>
            <div className="transit-card">
              <h3>🏘️ Appreciation Trajectory</h3>
              <p>The Purple Line&apos;s completion is driving property value appreciation along the entire corridor, including Wheaton. ADU investments made now — before the full market repricing of the Purple Line&apos;s value — benefit from both current rental income and the appreciation potential of transit-adjacent properties in a community that is actively attracting new investment and development.</p>
            </div>
          </div>

          <h2>Concrete Block Foundations in Wheaton — What ADU Buyers Need to Know</h2>
          <p>
            Wheaton&apos;s 1950s–1960s construction boom produced a significant number of homes with concrete block foundation walls — a construction method common in postwar Maryland but less prevalent in newer construction. For ADU purposes, concrete block foundations require specific moisture management that differs from poured concrete.
          </p>

          <div className="spec-box">
            <h3>🧱 Concrete Block Foundation ADUs — DMV-GC Group&apos;s Assessment Approach</h3>
            <ul>
              <li><strong>Why block is different:</strong> Concrete block walls are inherently more porous than poured concrete — moisture migrates through the mortar joints and block faces rather than through cracks as in poured concrete. This means interior moisture management must address the entire wall surface, not just specific crack locations.</li>
              <li><strong>Assessment first:</strong> DMV-GC Group evaluates every Wheaton block foundation basement for moisture infiltration signs — efflorescence (white mineral deposits on block faces), mortar joint deterioration, and staining at the floor-wall joint — before any ADU design is finalized. An ADU built over an unaddressed block foundation moisture problem will develop tenant complaints and damage within 2–3 years.</li>
              <li><strong>Interior waterproofing approach:</strong> The most reliable moisture management for Wheaton block foundations is interior waterproofing — a drainage mat system on the interior of the block wall directing any moisture to a perimeter drain channel that routes to a sump pit. This approach manages moisture permanently without requiring exterior excavation in Wheaton&apos;s typically developed rear yards.</li>
              <li><strong>Framing strategy:</strong> Block foundation walls must be furred out with a pressure-treated framing system before drywall is applied — the framing creates an air gap between the block and the finish wall that prevents moisture from wicking directly into the drywall. DMV-GC Group uses pressure-treated bottom plates on all Wheaton block foundation ADU projects as a standard practice.</li>
              <li><strong>Sump pump specification:</strong> Montgomery County&apos;s clay soils and Wheaton&apos;s terrain create groundwater conditions that require properly sized sump pumps — with battery backup — for any finished basement ADU. Battery backup is non-negotiable for a rented ADU where the homeowner may not be present during a power outage storm event.</li>
              <li><strong>Alternative: split-level ADU:</strong> Where a Wheaton home has both a split-level lower level and a full below-grade basement, the split-level lower level is often the more straightforward ADU choice — the partially above-grade walls are less prone to block moisture infiltration, and the existing light and entrance reduce conversion costs. DMV-GC Group assesses both options and recommends the most practical path for your specific home.</li>
            </ul>
          </div>

          <h2>Benefits of Building an ADU in Wheaton</h2>

          <div className="benefit-grid">
            <div className="benefit-box">
              <div className="icon">💰</div>
              <strong>Rental Income</strong>
              <span>$1,300–$1,900/month for a quality split-level or basement ADU — supported by dual transit access</span>
            </div>
            <div className="benefit-box">
              <div className="icon">📈</div>
              <strong>Property Value</strong>
              <span>A permitted ADU adds $75,000–$120,000 to Wheaton property values — in a market appreciating with Purple Line investment</span>
            </div>
            <div className="benefit-box">
              <div className="icon">🚇</div>
              <strong>Dual Transit Premium</strong>
              <span>Red Line + Purple Line connectivity attracts a broader renter pool than single-line communities</span>
            </div>
            <div className="benefit-box">
              <div className="icon">👨‍👩‍👧</div>
              <strong>Multigenerational Living</strong>
              <span>House aging parents or adult children on the same property — with full independence</span>
            </div>
            <div className="benefit-box">
              <div className="icon">💵</div>
              <strong>Lowest Entry Cost</strong>
              <span>Wheaton&apos;s accessible ADU price points — $55,000–$90,000 for split-level conversion — offer the fastest payback in the campaign</span>
            </div>
            <div className="benefit-box">
              <div className="icon">🔑</div>
              <strong>Strong Payback Timeline</strong>
              <span>At current Wheaton rents, a $60,000–$80,000 ADU investment pays for itself in approximately 4–5 years</span>
            </div>
          </div>

          <h2>Serving All Wheaton, MD Neighborhoods for ADU Construction</h2>

          <div className="neighborhood-grid">
            <div className="neighborhood-card">
              <h3>Wheaton Hills / Glenmont</h3>
              <p>Established split-level and colonial neighborhoods in northern Wheaton near the Glenmont Metro terminus. High concentration of split-levels with existing lower-level configurations — natural ADU candidates. Strong rental demand from Metro access at both Wheaton and Glenmont stations. Many homes here have existing side entrances on the lower level, reducing ADU conversion complexity.</p>
            </div>
            <div className="neighborhood-card">
              <h3>University Boulevard Corridor</h3>
              <p>Mix of postwar colonials and split-levels along the University Boulevard (MD-193) corridor. Some of Wheaton&apos;s widest lots are found here — increasing feasibility for attached addition ADUs in addition to basement and split-level conversions. Purple Line connectivity particularly strong in this corridor.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Wheaton Regional Park Area</h3>
              <p>Established single-family neighborhoods adjacent to Wheaton Regional Park. Mature tree canopy and established landscaping — construction access planning needed for any rear-yard ADU work. Full below-grade basements are more common here than split-levels, and block foundation assessment is recommended before finalizing ADU type.</p>
            </div>
            <div className="neighborhood-card">
              <h3>Veirs Mill Road Corridor</h3>
              <p>Dense mix of single-family, townhome, and older construction along Veirs Mill Road toward Kensington. Lot sizes vary — some constrained. Basement and split-level ADUs are the most practical options for most properties here. Strong WMATA bus connections in addition to Metro and Purple Line access.</p>
            </div>
          </div>

          <h2>Montgomery County ADU Requirements for Wheaton Homeowners</h2>
          <p>
            Wheaton is in unincorporated Montgomery County — all ADU permits go through Montgomery County DPS, and the county&apos;s ADU ordinance governs all zoning requirements. Key rules for Wheaton:
          </p>

          <div className="spec-box">
            <h3>📋 Montgomery County ADU Ordinance — Key Rules for Wheaton</h3>
            <ul>
              <li><strong>Lot size minimum:</strong> 6,000 sq ft. Most Wheaton single-family properties qualify, though some lots in denser parts of the community are at or near this threshold. DMV-GC Group verifies lot size during the consultation.</li>
              <li><strong>ADU size maximum:</strong> 1,200 sq ft or 50% of the main home&apos;s floor area, whichever is less. For Wheaton&apos;s typical 1,100–1,800 sq ft postwar homes, the 50% rule is often binding — a 1,200 sq ft split-level cannot have an ADU larger than 600 sq ft.</li>
              <li><strong>Egress in sleeping areas:</strong> Every bedroom in the ADU requires egress window compliance. Split-level above-grade windows may already satisfy this — below-grade windows typically require installation or enlargement.</li>
              <li><strong>Separate entrance:</strong> Required for all ADU types. Many Wheaton split-levels have this already. Below-grade basement ADUs typically require a new side or rear entrance cut.</li>
              <li><strong>Owner-occupancy:</strong> The property owner must reside in either the main home or the ADU. Pure investment property ADUs are not permitted under the current county ordinance.</li>
              <li><strong>Certificate of Occupancy:</strong> Required before the ADU can legally be rented. DMV-GC Group manages the COO process — all inspections and sign-offs — as part of every Wheaton ADU project.</li>
            </ul>
          </div>

          <h2>Our ADU Construction Process in Wheaton</h2>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Free In-Home Consultation &amp; ADU Feasibility Assessment</h3>
                <p>We visit your Wheaton home and assess all ADU paths — split-level lower level configuration, below-grade basement dimensions and foundation type, garage feasibility, and lot size for addition potential. For split-levels we check existing entrance and ceiling heights. For basements we assess foundation type and moisture conditions. No cost, no obligation.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Block Foundation Assessment (If Applicable)</h3>
                <p>For below-grade basement ADU projects in Wheaton&apos;s concrete block foundation homes, we provide a written moisture assessment with specific findings and waterproofing recommendations before any design begins. Any required interior waterproofing is designed and priced before construction scope is finalized.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>ADU Design Development</h3>
                <p>Our design team develops a floor plan optimized for your specific ADU space — split-level or basement footprint, natural light conditions, egress requirements, separate entrance configuration, kitchen, and bathroom layout. For Wheaton&apos;s smaller footprints, layout efficiency is particularly important.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>Montgomery County Permit Filing + COO Application</h3>
                <p>We file all required Montgomery County DPS permits and simultaneously initiate the Certificate of Occupancy application. Our permit team manages all county correspondence and inspection scheduling throughout the project.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">5</div>
              <div className="step-content">
                <h3>Waterproofing, Egress &amp; Construction</h3>
                <p>Interior waterproofing (where required for block foundations) is completed first. Then egress window installation, framing, electrical, plumbing, HVAC, drywall, flooring, kitchen, bathroom, and all finish work — coordinated by a dedicated project manager and inspected at each required stage by Montgomery County.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">6</div>
              <div className="step-content">
                <h3>County Inspections, COO &amp; 1-Year Warranty</h3>
                <p>We manage all final Montgomery County inspections and the Certificate of Occupancy process. After COO issuance, we conduct a final walkthrough, address every punch list item, and activate your 1-year workmanship warranty. Your ADU is legally ready to rent.</p>
              </div>
            </div>
          </div>

          <h2>ADU Construction Cost in Wheaton, MD</h2>
          <p>
            Here is a realistic cost breakdown for <strong>ADU construction in Wheaton, Maryland</strong>. Wheaton&apos;s accessible price points and strong transit-driven rental demand create some of the best ADU ROI in Montgomery County:
          </p>

          <table className="cost-table">
            <tbody>
              <tr>
                <th>ADU Type</th>
                <th>Typical Cost Range</th>
                <th>Notes for Wheaton</th>
              </tr>
              <tr>
                <td>Split-Level Lower-Level ADU</td>
                <td>$55,000 – $100,000</td>
                <td>Most cost-effective Wheaton option. Existing light, height, and often entrance reduces work. Rough-in completion where present saves $5K–$8K additional.</td>
              </tr>
              <tr>
                <td>Below-Grade Basement ADU (poured concrete)</td>
                <td>$60,000 – $110,000</td>
                <td>Standard approach for Wheaton colonials and Cape Cods with poured concrete foundations.</td>
              </tr>
              <tr>
                <td>Below-Grade Basement ADU (concrete block)</td>
                <td>$68,000 – $115,000</td>
                <td>Adds interior waterproofing system and pressure-treated framing — necessary pre-ADU work for block foundation homes. Assessed during free consultation.</td>
              </tr>
              <tr>
                <td>Garage Conversion ADU</td>
                <td>$58,000 – $105,000</td>
                <td>Feasibility depends on garage size and condition. Utility run distance from main house is the primary cost variable for Wheaton&apos;s detached garages.</td>
              </tr>
              <tr>
                <td>Attached In-Law Suite Addition</td>
                <td>$95,000 – $190,000</td>
                <td>More common on Wheaton&apos;s larger parcels in Glenmont and University Boulevard area. Setback feasibility confirmed during consultation.</td>
              </tr>
              <tr>
                <td>Interior Waterproofing (block foundations)</td>
                <td>$4,500 – $12,000</td>
                <td>Drainage mat + perimeter channel + sump system. Sized and priced based on linear footage of block wall requiring treatment.</td>
              </tr>
              <tr>
                <td>Separate Electrical Meter (Pepco)</td>
                <td>$2,000 – $4,500</td>
                <td>Recommended for rental ADUs. DMV-GC Group coordinates Pepco meter separation as part of most ADU projects.</td>
              </tr>
            </tbody>
          </table>

          <div className="tip">
            💡 <strong>Wheaton ADU ROI:</strong> A split-level lower-level ADU in Wheaton at $60,000–$80,000 — renting at $1,400–$1,700/month near the Metro or Purple Line corridor — reaches full payback in approximately 4–5 years in rental income alone, while adding $75,000–$110,000 to appraised value at COO issuance. As the Purple Line drives continued appreciation along the Wheaton corridor, the equity component of this return continues to grow after the initial investment is recovered.
          </div>

          <div className="cta-banner">
            <h2>Get a Free ADU Consultation in Wheaton</h2>
            <p>We&apos;ll visit your Wheaton home, assess your split-level lower level or basement for ADU feasibility, check the foundation type, confirm Montgomery County requirements, and give you a realistic estimate. No cost, no obligation.</p>
            <Link href="/contact-us" className="cta-btn">Schedule Free ADU Consultation</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
          </div>

          <h2>What Wheaton Homeowners Say About DMV-GC Group</h2>

          <div className="review-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our Wheaton Hills split-level already had a side door on the lower level. DMV-GC Group converted it into a full ADU — kitchenette, bathroom, living area — in about 9 weeks. COO came through, tenant moved in. We&apos;re getting $1,500/month from a Purple Line commuter who works in Silver Spring. Couldn&apos;t be happier.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Wheaton Hills, Wheaton MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our home has a concrete block foundation basement. DMV-GC Group told us upfront about the waterproofing requirement and why it mattered — other contractors just wanted to start framing. They installed the drainage system first, then built the ADU. Two years in, zero moisture issues and the tenant is still there.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">University Boulevard Area, Wheaton MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;The Montgomery County COO process was new to us. DMV-GC Group handled every step — permits, inspections, the final COO application — and kept us informed throughout. The inspector passed everything first time. The whole project was exactly on the timeline they quoted.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Glenmont Area, Wheaton MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;We wanted an ADU for my in-laws but didn&apos;t know which type made sense for our lot. DMV-GC Group assessed everything during the free consultation — told us the split-level option was better than the basement for our specific house and why. They were right. The in-law suite is perfect.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Veirs Mill Road Area, Wheaton MD</span></div>
            </div>
          </div>

          <div className="highlight">
            <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Wheaton homeowners trust DMV-GC Group for ADU projects that take advantage of the community&apos;s dual transit access — with the block foundation expertise, Montgomery County permit knowledge, and construction quality to deliver a legal, rentable unit efficiently.</p>
          </div>

          <h2>Serving Wheaton and Surrounding Areas for ADU Construction</h2>

          <div className="areas-grid">
            <span className="area-pill">Wheaton, MD</span>
            <span className="area-pill">Wheaton Hills</span>
            <span className="area-pill">Glenmont</span>
            <span className="area-pill">University Boulevard</span>
            <span className="area-pill">Veirs Mill Road</span>
            <span className="area-pill">Silver Spring</span>
            <span className="area-pill">Kensington</span>
            <span className="area-pill">Rockville</span>
            <span className="area-pill">Gaithersburg</span>
            <span className="area-pill">North Bethesda</span>
          </div>

          <div className="nearby-box">
            <h3>Also serving Silver Spring, MD — directly south of Wheaton</h3>
            <p>DMV-GC Group builds ADUs throughout Silver Spring, which borders Wheaton to the south and shares the same split-level housing stock and Red Line access. Silver Spring homeowners benefit from the same licensed design-build team and Montgomery County permit expertise. <Link href="/service/adu/silver-spring-md">View our Silver Spring ADU page &rarr;</Link></p>
          </div>

          <h2>Frequently Asked Questions — ADU Construction in Wheaton, MD</h2>
          <Accordion defaultActiveKey="0" flush>
            {faqData.map((faq) => (
              <Accordion.Item eventKey={faq.eventKey} key={faq.eventKey}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>

          <div className="internal-links">
            <h2>Explore Our Other Services in Wheaton</h2>
            <ul>
              <li><Link href="/service/kitchen-remodeling/wheaton-md">Kitchen Remodeling in Wheaton, MD</Link></li>
              <li><Link href="/service/bathroom-remodeling">Bathroom Remodeling in Wheaton, MD</Link></li>
              <li><Link href="/service/basement-remodeling/wheaton-md">Basement Remodeling in Wheaton, MD</Link></li>
              <li><Link href="/service/home-additions">Home Additions in Wheaton, MD</Link></li>
              <li><Link href="/service/flooring-remodeling">Flooring Installation in Wheaton, MD</Link></li>
              <li><Link href="/service/design-build">Design-Build Contractor in Wheaton, MD</Link></li>
            </ul>
          </div>

          <div className="cta-banner">
            <h2>Ready to Build Your Wheaton ADU?</h2>
            <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. We&apos;ll assess your split-level or basement, check the foundation type, and show you exactly what&apos;s possible — and what it will cost.</p>
            <Link href="/contact-us" className="cta-btn">Get Free ADU Consultation in Wheaton &rarr;</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
          </div>

        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
    </main>
  );
}
