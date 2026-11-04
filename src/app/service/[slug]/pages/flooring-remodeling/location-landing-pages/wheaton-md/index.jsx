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
      "url": "https://www.dmv-gc.com",
      "telephone": "+12407301292",
      "email": "support@dmv-gc.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "11810 Grand Park Ave, Suite 500",
        "addressLocality": "North Bethesda",
        "addressRegion": "MD",
        "postalCode": "20852",
        "addressCountry": "US"
      },
      "areaServed": { "@type": "City", "name": "Wheaton", "sameAs": "https://en.wikipedia.org/wiki/Wheaton,_Maryland" },
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "MHIC License #156178" },
        { "@type": "EducationalOccupationalCredential", "name": "DLCP License #410526000209" }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "97", "bestRating": "5" },
      "priceRange": "$$$"
    },
    {
      "@type": "Service",
      "name": "Flooring Installation in Wheaton, MD",
      "serviceType": "Flooring Installation",
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Wheaton" },
      "description": "Full-service flooring installation, refinishing, and replacement in Wheaton, MD. Hardwood refinishing for postwar colonials, LVP for split-level lower levels and below-grade ADU spaces, porcelain tile for bathrooms, and whole-home flooring replacement across Glenmont, Wheaton Hills, Forest Estates, and all Wheaton neighborhoods — with split-level two-zone expertise and below-grade moisture management.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "4", "maxPrice": "18", "priceCurrency": "USD", "unitCode": "SQFT" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Flooring", "item": "https://www.dmv-gc.com/service/flooring-remodeling" },
        { "@type": "ListItem", "position": 4, "name": "Wheaton, MD", "item": "https://www.dmv-gc.com/service/flooring-remodeling/wheaton-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does flooring installation cost in Wheaton, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Flooring installation in Wheaton, MD typically costs $4–$18 per square foot installed depending on material. Hardwood refinishing costs $3–$6 per square foot. New hardwood installation runs $8–$15 per square foot. LVP installation costs $5–$10 per square foot and is the correct choice for Wheaton's split-level lower levels and below-grade ADU spaces. Porcelain tile costs $8–$18 per square foot. A typical Wheaton split-level whole-home flooring package — hardwood on the upper level and premium LVP below grade — runs $10,000–$24,000. DMV-GC Group provides free, detailed zone-by-zone estimates for every Wheaton home."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best flooring for Wheaton's split-level homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wheaton's split-level homes — which make up the majority of the community's single-family housing stock — require a two-zone flooring approach. The upper main level (living room, dining room, kitchen, upper bedrooms) is above grade and suitable for hardwood or engineered hardwood. The lower level (family room, laundry, ADU or rental space) is at or below grade and must use LVP or other fully waterproof flooring. Solid hardwood installed below grade in a Wheaton split-level will cup, buckle, and develop moisture-driven squeaks within a few seasons regardless of how well it was installed. Premium LVP on the lower level, matched in tone to the upper-level hardwood, is the correct two-zone strategy."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group refinish original hardwood floors in Wheaton?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Wheaton's 1950s–70s colonials and split-levels frequently have original strip hardwood on the upper main level — often 2.25-inch or 3-inch oak — that is structurally sound and refinishable. DMV-GC Group checks remaining wood thickness above the tongue during the free consultation before recommending refinishing. When viable, refinishing costs $3–$6 per square foot versus $8–$15 for new hardwood replacement. We always recommend refinishing when the floor supports it."
          }
        },
        {
          "@type": "Question",
          "name": "What flooring is best for a Wheaton ADU lower-level conversion?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Premium LVP is the correct flooring choice for Wheaton's split-level lower-level ADU conversions — consistently. It is 100% waterproof, handles below-grade moisture without cupping or buckling, is highly durable for rental use (important for ADU tenant turnover), available in realistic wood looks, and floats over minor slab irregularities without adhesive. DMV-GC Group installs LVP as part of full Wheaton ADU conversion projects — flooring coordinated with plumbing, electrical, and egress under one contract."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for flooring installation in Wheaton, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC license (#156178) — required for all home improvement work in Wheaton and Montgomery County. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every Wheaton flooring project."
          }
        }
      ]
    }
  ]
};

const WheatonMD = () => {
  const { setActiveMenuItem } = useMyContext();

  useEffect(() => {
    setActiveMenuItem("service");
  }, []);

  const faqData = [
    {
      question: "How much does flooring installation cost in Wheaton, MD?",
      answer: "Flooring in Wheaton typically costs $3–$18 per square foot depending on material and zone. Hardwood refinishing costs $3–$6 per square foot. New hardwood installation runs $8–$15 per square foot. Premium LVP for lower levels and ADU spaces costs $5–$10 per square foot. Porcelain tile runs $8–$18 per square foot. A typical Wheaton split-level package — hardwood refinishing or new hardwood on the upper level, premium LVP on the lower level, and tile in bathrooms — runs $10,000–$24,000. DMV-GC Group provides free, itemized zone-by-zone estimates for every Wheaton home."
    },
    {
      question: "Why does solid hardwood fail on Wheaton split-level lower levels?",
      answer: "The lower level of a Wheaton split-level sits on or directly adjacent to a concrete slab. Concrete slabs transmit ground moisture upward seasonally — summer humidity causes the slab to release moisture vapor, which solid hardwood absorbs and swells from. Winter dryness causes contraction. This seasonal cycle causes solid hardwood to cup (edges rise), buckle (boards lift from subfloor), and develop persistent squeaks that cannot be corrected without full removal and replacement. This is a material mismatch with the conditions, not an installation quality issue. LVP is 100% waterproof and dimensionally stable regardless of below-grade moisture — the technically correct specification for Wheaton split-level lower levels."
    },
    {
      question: "What LVP is best for a Wheaton ADU rental unit?",
      answer: "For ADU rental units, DMV-GC Group specifies commercial-grade LVP with a wear layer of 12mil or greater — COREtec Plus, Shaw Floorté Pro, or equivalent. The thicker wear layer handles the heavier foot traffic and furniture dragging that rental use generates, and resists the surface scratching that thinner residential-grade LVP shows within a few years of rental occupancy. The investment in a 12mil wear layer versus an 8mil residential product is typically $0.50–$1.50 per square foot — worthwhile for a rental floor that needs to last through multiple tenant cycles without replacement."
    },
    {
      question: "Can my original Wheaton split-level hardwood be refinished?",
      answer: "Often yes — Wheaton's 1950s–70s split-levels frequently have original 2.25-inch or 3-inch strip oak on the upper main level that has survived under carpet in reasonable condition. DMV-GC Group checks the remaining thickness above the tongue during the free consultation. If sufficient thickness remains and the wood is structurally sound, refinishing is the right choice at $3–$6 per square foot — far less than the $8–$15 per square foot cost of replacement, and more authentic to the home's original character."
    },
    {
      question: "Is DMV-GC Group licensed for flooring in Wheaton, MD?",
      answer: "Yes. DMV-GC Group holds Maryland MHIC license #156178 — required for all home improvement work in Wheaton and Montgomery County. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every Wheaton flooring project."
    }
  ];

  return (
    <div className="city-service-detail-page flooring-wheaton-md">
      <div className="container">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />

        <nav className="breadcrumb">
          <Link href="/">Home</Link><span>›</span>
          <Link href="/services">Services</Link><span>›</span>
          <Link href="/service/flooring-remodeling">Flooring Installation</Link><span>›</span>
          <span>Wheaton, MD</span>
        </nav>

        <div className="hero">
          <div className="hero-location-tag">📍 Serving Wheaton, MD</div>
          <h1>Flooring Installation &amp; Replacement in Wheaton, MD</h1>
          <div className="hero-meta">
            <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
            <span className="badge">✓ MHIC Licensed &amp; Insured</span>
            <span className="badge">✓ DLCP Licensed</span>
            <span className="badge">✓ 1-Year Warranty</span>
            <span className="badge">✓ Free In-Home Consultation</span>
            <span className="badge dark">📞 +1 240-730-1292</span>
          </div>
        </div>

        <div className="wheaton-banner">
          <div className="icon">🏠</div>
          <div>
            <h3>Wheaton&apos;s Split-Levels Are the Heart of the Community&apos;s Housing Stock — and They Need a Two-Zone Flooring Approach That Most Contractors Don&apos;t Offer</h3>
            <p>Wheaton&apos;s 1950s–70s split-levels in Glenmont, Forest Estates, Wheaton Hills, and along University Boulevard are among the most frequently renovated homes in Montgomery County — active ADU conversions, kitchen remodels, bathroom upgrades, and whole-home refreshes are the norm, not the exception. But across all these renovations, the most common flooring mistake is the same: solid hardwood installed on the lower level of a split-level home, where it meets the below-grade moisture that the concrete slab transmits and begins to cup, buckle, and squeak within a few seasons. The upper level and the lower level of a Wheaton split-level are fundamentally different environments. The right flooring strategy recognizes that difference from the first material discussion — hardwood above grade, premium LVP below — and DMV-GC Group builds every Wheaton flooring proposal around that distinction.</p>
          </div>
        </div>

        <div className="intro-box">
          Looking for a trusted <strong>flooring contractor in Wheaton, MD</strong>? DMV General Contracting Group installs, replaces, and refines all types of flooring for Wheaton homeowners — hardwood, luxury vinyl plank (LVP), porcelain and ceramic tile, laminate, and carpet. Wheaton&apos;s housing ranges from 1950s–70s split-levels and colonials in Glenmont and Forest Estates to postwar capes and ranches near Veirs Mill Road to newer townhomes and mid-rise condos near Wheaton and Glenmont Metro stations. Wheaton is also one of Montgomery County&apos;s most active ADU markets — lower-level split-level conversions are common throughout the community, and LVP is the consistent correct flooring choice for every one of them. DMV-GC Group&apos;s flooring team understands Wheaton&apos;s specific housing mix and installs the right material for every zone and every home type.
        </div>

        <div className="trust-bar">
          <div className="trust-item">
            <div className="icon">🏠</div>
            <strong>Split-Level Two-Zone Strategy</strong>
            <span>Hardwood above · LVP below — every time</span>
          </div>
          <div className="trust-item">
            <div className="icon">🏗️</div>
            <strong>ADU Flooring Specialists</strong>
            <span>LVP coordinated with full ADU conversions</span>
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

        <h2>Flooring Services We Offer in Wheaton, MD</h2>
        <p>
          DMV General Contracting Group provides a full range of flooring services in Wheaton — with particular depth in split-level two-zone strategy, below-grade LVP installation for ADU conversions, and postwar hardwood refinishing.
        </p>

        <div className="service-list">
          <div className="service-item">Hardwood Floor Refinishing &amp; Resanding</div>
          <div className="service-item">Hardwood Floor Installation (Solid &amp; Engineered)</div>
          <div className="service-item">Below-Grade LVP — Split-Level Lower Level</div>
          <div className="service-item">ADU Conversion Flooring (LVP + Tile)</div>
          <div className="service-item">Porcelain &amp; Ceramic Tile Installation</div>
          <div className="service-item">Natural Stone Tile (Marble, Travertine)</div>
          <div className="service-item">Laminate Flooring Installation</div>
          <div className="service-item">Carpet Installation &amp; Replacement</div>
          <div className="service-item">Concrete Slab Moisture Assessment &amp; Barrier</div>
          <div className="service-item">Subfloor Assessment &amp; Leveling</div>
          <div className="service-item">Whole-Home Flooring Replacement</div>
          <div className="service-item">Stair Tread &amp; Riser Replacement</div>
          <div className="service-item">Transition Strip &amp; Threshold Installation</div>
          <div className="service-item">Flooring as Part of Full Kitchen / Bath Remodel</div>
        </div>

        <div className="author-box">
          <div className="author-avatar">🪵</div>
          <div className="author-info">
            <h4>About DMV-GC Group — Wheaton&apos;s Licensed Flooring Contractor</h4>
            <p>DMV General Contracting Group has installed and refinished flooring throughout Wheaton&apos;s neighborhoods — Glenmont split-levels, Forest Estates colonials, Wheaton Hills homes, and Veirs Mill Road capes. We have completed full ADU conversions throughout Wheaton where LVP is installed as part of a complete lower-level transformation including plumbing, electrical, and egress — all coordinated in-house. We understand Wheaton&apos;s split-level below-grade moisture conditions, the original hardwood in its postwar housing stock, and the specific demands of ADU rental flooring for durability and turnover. MHIC licensed, insured, and backed by a 1-year workmanship warranty on every project.</p>
            <div className="author-creds">
              <span className="cred">MHIC #156178</span>
              <span className="cred">Split-Level Two-Zone</span>
              <span className="cred">ADU LVP Specialists</span>
              <span className="cred">Below-Grade Moisture Expertise</span>
              <span className="cred">4.9★ Rated</span>
              <span className="cred">1-Year Warranty</span>
            </div>
          </div>
        </div>

        <h2>Wheaton&apos;s Two-Zone Flooring Strategy — Upper Level vs Lower Level</h2>
        <p>
          Every Wheaton split-level flooring project starts with the same fundamental question: which level are we flooring, and what are the moisture conditions there? The answer determines the material — not aesthetic preference alone.
        </p>

        <div className="zone-grid">
          <div className="zone-card upper">
            <h3>🪵 Upper Main Level</h3>
            <div className="zone-tag">Above Grade — Hardwood Zone</div>
            <ul>
              <li>Living room, dining room, main kitchen</li>
              <li>Upper bedrooms and hallway</li>
              <li>Above grade — not in contact with slab moisture</li>
              <li>Original hardwood often present and refinishable</li>
              <li>New hardwood appropriate where original is absent</li>
              <li>Engineered hardwood preferred where any moisture uncertainty exists</li>
              <li>LVP a strong practical option for kitchen and high-traffic areas</li>
              <li>Hardwood adds the most resale value here — buyers expect it</li>
            </ul>
          </div>
          <div className="zone-card lower">
            <h3>💧 Lower Level</h3>
            <div className="zone-tag">At / Below Grade — LVP Zone</div>
            <ul>
              <li>Family room, laundry, lower-level bedrooms</li>
              <li>ADU / rental unit space — active in Wheaton</li>
              <li>On or adjacent to concrete slab — moisture present seasonally</li>
              <li>Solid hardwood here = cupping, buckling, squeaking within seasons</li>
              <li>Engineered hardwood: marginal — still moisture-sensitive</li>
              <li>LVP: 100% waterproof, floats over slab, realistic wood look</li>
              <li>Porcelain tile for lower-level bathrooms and laundry rooms</li>
              <li>Durable wear layer essential for ADU rental turnover</li>
            </ul>
          </div>
        </div>

        <div className="tip">
          💡 <strong>ADU Lower Level — Wheaton&apos;s Most Requested Flooring Scope:</strong> Wheaton is one of Montgomery County&apos;s most active ADU markets. Lower-level conversions to rental units are common across Glenmont, Forest Estates, and Wheaton Hills. For every ADU conversion, DMV-GC Group installs premium LVP throughout the lower level — waterproof for below-grade conditions, durable for rental turnover, and visually warm enough to make the ADU feel like a quality living space rather than a finished basement. LVP flooring is specified and installed as part of every DMV-GC Group Wheaton ADU project, coordinated with plumbing, electrical, and egress under one contract.
        </div>

        <h2>Flooring Types We Install in Wheaton, MD</h2>

        <div className="floor-type-grid">
          <div className="floor-card">
            <span className="floor-label">Upper Level — First Choice</span>
            <h3>Hardwood Refinishing</h3>
            <p>The right first recommendation for Wheaton&apos;s 1950s–70s colonials and split-level upper levels with surviving original strip hardwood. Wheaton&apos;s postwar housing frequently has original 2.25-inch or 3-inch oak that has remained under carpet for decades — structurally sound but cosmetically worn. DMV-GC Group checks remaining wood thickness above the tongue before recommending refinishing. When viable, restoring the original floor at $3–$6 per square foot is far more cost-effective than replacing it at $8–$15 per square foot — and produces a floor with the authentic character of old-growth oak that modern replacements cannot fully replicate.</p>
            <div className="floor-meta"><strong>Lifespan:</strong> Extends original floor 20–40 more years &nbsp;|&nbsp; <strong>Cost:</strong> $3–$6/sq ft</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">Upper Level — New Installation</span>
            <h3>Solid &amp; Engineered Hardwood</h3>
            <p>When original hardwood is beyond refinishing or absent on the upper main level, new solid or engineered hardwood is the right replacement. White oak in natural to warm medium stain is the most popular current choice in Wheaton&apos;s renovation market. For upper-level rooms where there is any crawlspace moisture concern below — less common in Wheaton&apos;s slab-founded split-levels than in Kensington&apos;s crawlspace homes, but present in some properties — engineered hardwood is the more dimensionally stable choice over solid. Solid hardwood is fully appropriate for confirmed dry above-grade installations with standard plywood subfloor.</p>
            <div className="floor-meta"><strong>Lifespan:</strong> 50–100 yrs (solid) · 25–40 yrs (engineered) &nbsp;|&nbsp; <strong>Cost:</strong> $8–$15/sq ft installed</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">Lower Level &amp; ADU — The Only Right Choice</span>
            <h3>Luxury Vinyl Plank (LVP)</h3>
            <p>LVP is the correct flooring for every Wheaton split-level lower level and ADU conversion — not a compromise, not a budget choice, the technically correct specification for the conditions. 100% waterproof against the below-grade slab moisture that Wheaton&apos;s split-level lower levels seasonally experience. Dimensionally stable regardless of humidity. Floating installation tolerates minor slab irregularities without adhesive. Available in highly realistic wood looks matched to complement the upper-level hardwood. Durable wear layer resists the tenant foot traffic that ADU rental units generate. DMV-GC Group specifies COREtec, Shaw Floorté, or Karndean at 12mil or greater wear layer for ADU units and active households.</p>
            <div className="floor-meta"><strong>Lifespan:</strong> 20–30 yrs &nbsp;|&nbsp; <strong>Cost:</strong> $5–$10/sq ft installed</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">Bathrooms &amp; Kitchen</span>
            <h3>Porcelain &amp; Ceramic Tile</h3>
            <p>The correct choice for Wheaton bathrooms on all levels and kitchen floors where waterproofing is essential. Large-format porcelain (18×18 or 24×24) in a neutral stone-look or wood-look for kitchen floors; white or soft-grey subway tile for bathroom walls and shower surrounds; smaller mosaic or hex for shower floors. For lower-level ADU bathrooms specifically, a complete waterproof tile installation — floor, walls, and wet area — creates a rental unit bathroom that is genuinely durable for multiple tenant cycles. DMV-GC Group coordinates tile installation with the plumbing rough-in on ADU conversions so the waterproofing system is continuous from drain to wall tile.</p>
            <div className="floor-meta"><strong>Lifespan:</strong> 50+ yrs &nbsp;|&nbsp; <strong>Cost:</strong> $8–$18/sq ft installed</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">Upper Bedrooms — Comfort</span>
            <h3>Carpet</h3>
            <p>Carpet remains a practical choice for Wheaton upper-level bedrooms where hardwood is absent or where comfort over performance is the priority. Quality nylon or wool pile over a good pad provides warmth and quiet that hard flooring does not. For lower-level bedrooms in ADU conversions, LVP is the correct choice over carpet — more durable for rental use, easier to clean between tenants, and moisture-appropriate for the below-grade environment. DMV-GC Group matches flooring type to room use and zone consistently throughout every Wheaton project.</p>
            <div className="floor-meta"><strong>Lifespan:</strong> 10–15 yrs &nbsp;|&nbsp; <strong>Cost:</strong> $4–$10/sq ft installed</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">Metro-Adjacent Condos &amp; Townhomes</span>
            <h3>LVP or Engineered Hardwood on Slab</h3>
            <p>Newer condos and townhomes near Wheaton and Glenmont Metro stations are commonly built on concrete slab throughout — no crawlspace, no basement, slab from ground level to upper floors. Solid hardwood nail-down installation is not possible on concrete slab. LVP floating is the most practical choice — waterproof, no adhesive required, tolerates the minor levelness variations common in slab construction. Engineered hardwood can be glued down to slab where the natural wood look is important and moisture is confirmed low. DMV-GC Group verifies subfloor type before specifying materials for Wheaton Metro-area condo and townhome projects.</p>
            <div className="floor-meta"><strong>Lifespan:</strong> 20–30 yrs (LVP) · 25–40 yrs (engineered) &nbsp;|&nbsp; <strong>Cost:</strong> $5–$12/sq ft installed</div>
          </div>
        </div>

        <h2>Best Flooring by Room — Guide for Wheaton Homeowners</h2>

        <table className="room-table">
          <tr>
            <th>Room / Zone</th>
            <th>Best Choice</th>
            <th>Why</th>
            <th>Avoid</th>
          </tr>
          <tr>
            <td><strong>Upper Level — Living / Dining</strong></td>
            <td>Hardwood or Refinish Original ⭐</td>
            <td>Highest resale value; original oak often viable for refinishing at $3–$6/sq ft; buyers expect hardwood here</td>
            <td>Carpet over existing hardwood</td>
          </tr>
          <tr>
            <td><strong>Upper Level — Kitchen</strong></td>
            <td>LVP or Porcelain Tile ⭐</td>
            <td>Waterproof for cooking zone; LVP in a tone matching adjacent hardwood creates visual continuity</td>
            <td>Solid hardwood (moisture at sink)</td>
          </tr>
          <tr>
            <td><strong>Upper Level — Bedrooms</strong></td>
            <td>Hardwood or Carpet</td>
            <td>Hardwood for resale value and visual continuity with living areas; carpet for bedroom warmth and quiet</td>
            <td>Tile (cold and hard)</td>
          </tr>
          <tr>
            <td><strong>Lower Level — Family Room</strong></td>
            <td>LVP ⭐</td>
            <td>Below grade on slab — solid hardwood will fail here; LVP is 100% waterproof and handles Wheaton&apos;s seasonal slab moisture</td>
            <td>Solid hardwood, laminate</td>
          </tr>
          <tr>
            <td><strong>Lower Level — ADU / Rental Unit</strong></td>
            <td>LVP ⭐</td>
            <td>Waterproof, highly durable for rental turnover, easy to clean, realistic wood look; 12mil+ wear layer for rental use</td>
            <td>Carpet (hard to clean for rental)</td>
          </tr>
          <tr>
            <td><strong>Bathrooms — All Levels</strong></td>
            <td>Porcelain Tile ⭐</td>
            <td>Waterproof, hygienic, durable; lower-level ADU bathrooms tiled floor-to-wall for complete waterproofing</td>
            <td>Hardwood, laminate, carpet</td>
          </tr>
          <tr>
            <td><strong>Metro-Area Condo / Townhome (Slab)</strong></td>
            <td>LVP or Engineered Hardwood</td>
            <td>Concrete slab — no nail-down; LVP floats over slab; engineered hardwood glued down where moisture is confirmed low</td>
            <td>Solid hardwood nail-down (not possible on slab)</td>
          </tr>
        </table>

        <h2>Wheaton Neighborhoods We Serve for Flooring</h2>

        <div className="neighborhood-grid">
          <div className="neighborhood-card">
            <h3>Glenmont</h3>
            <span className="hood-tag">1960s–70s split-levels · Glenmont Metro (Red Line) · Active ADU market</span>
            <p>Wheaton&apos;s most active ADU market — Glenmont split-levels are being converted to lower-level rental units throughout the neighborhood, driven by Glenmont Metro Red Line access and strong rental demand. LVP throughout the lower level is the consistent flooring specification for every Glenmont ADU conversion DMV-GC Group completes. Upper levels: hardwood refinishing or new installation. Two-zone strategy applied to every Glenmont project.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Forest Estates</h3>
            <span className="hood-tag">1950s–60s colonials &amp; split-levels · Good lot sizes</span>
            <p>Established neighborhood with 1950s–60s colonials and split-levels on tree-lined streets. Colonials here sometimes have full basements rather than split-level lower levels — above-grade throughout, making hardwood viable on all floors in some homes. Original hardwood refinishing is frequently the right choice in Forest Estates&apos; colonials where the original floor has survived. DMV-GC Group assesses each home&apos;s specific configuration before recommending any material.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Wheaton Hills</h3>
            <span className="hood-tag">1960s–70s split-levels · University Boulevard corridor</span>
            <p>1960s–70s split-levels along University Boulevard and adjacent streets. Active renovation market with a mix of whole-home refreshes and targeted ADU conversions. Two-zone split-level flooring strategy is the consistent approach for Wheaton Hills projects. Original hardwood on upper levels in good condition in many homes — DMV-GC Group checks thickness before recommending refinish or replace.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Veirs Mill Road Area</h3>
            <span className="hood-tag">1950s–60s capes &amp; ranches</span>
            <p>Postwar capes and ranches along and near Veirs Mill Road — smaller footprints than the split-level neighborhoods but active renovation market. Cape cods here have upper bedrooms accessed by stair from the main level — original hardwood on the main level common. Ranches are fully above-grade, making hardwood appropriate throughout. LVP for kitchens and bathrooms across all home types in this area.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Wheaton &amp; Glenmont Metro Areas</h3>
            <span className="hood-tag">Newer condos &amp; townhomes · Dual Metro access</span>
            <p>Newer construction townhomes and condos near Wheaton Metro (Red Line) and Glenmont Metro (Red Line end of line) stations. Concrete slab subfloors throughout — LVP floating or engineered hardwood glued down are the correct approaches. HOA restrictions may apply in condo buildings for flooring types and installation methods (some buildings require floating installation only to limit noise transmission). DMV-GC Group verifies subfloor type and HOA requirements before specifying any material.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Kemp Mill / Layhill Road Area</h3>
            <span className="hood-tag">1960s–70s mix · Diverse housing types</span>
            <p>Diverse 1960s–70s housing mix bordering Kemp Mill and the Layhill Road corridor — colonials, split-levels, and ranches in different proportions. Active renovation market with practical budget sensibility. LVP for below-grade and wet areas; hardwood refinishing or new installation for main-level living areas where the budget supports it; practical laminate for secondary bedrooms where budget is the primary driver. DMV-GC Group calibrates material recommendations to each home&apos;s specific scope and budget.</p>
          </div>
        </div>

        <h2>Our Flooring Installation Process in Wheaton</h2>

        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-content">
              <h3>Free In-Home Consultation — Zone-First Assessment</h3>
              <p>We visit your Wheaton home, identify whether you have a split-level two-zone situation, assess existing floor condition on the upper level (including remaining hardwood thickness where refinishing is being considered), and evaluate below-grade conditions on the lower level. For ADU conversions, we assess the complete lower-level scope — flooring, plumbing, electrical, egress — and can provide a full ADU proposal if requested. No cost, no obligation.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-content">
              <h3>Zone-Specific Material Recommendations</h3>
              <p>We recommend hardwood refinishing or new hardwood for the upper level (with stain direction samples), and premium LVP for the lower level — with LVP color and pattern selected to complement the upper-level material visually. Full written estimate by room and zone, including all required subfloor prep. No surprises mid-project when conditions are discovered during demolition.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-content">
              <h3>Subfloor Preparation</h3>
              <p>Upper level: loose boards re-secured, soft spots patched, sanding sequence determined. Lower level: existing flooring removed, slab surface cleaned, high spots ground down, moisture barrier installed beneath LVP where slab moisture testing indicates it is needed. Tile areas: appropriate waterproofing membrane and backer installed. All prep completed before any finish material is specified or ordered for that zone.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-content">
              <h3>Installation by Zone</h3>
              <p>Upper level: hardwood refinishing (sand, stain approval, finish coats with dry time) or new hardwood installation with proper nail or staple schedule. Lower level: LVP floating installation with correct expansion gaps, seam staggering, and perimeter transitions. Bathrooms: tile set with waterproofing membrane, appropriate mortar, and grout. Stairway between levels: matching stair nosings and transitions at zone boundaries.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">5</div>
            <div className="step-content">
              <h3>Trim, Transitions &amp; Final Cleanup</h3>
              <p>Baseboards, shoe molding, stair nosings, and material transition strips installed throughout — particularly clean transitions at the stairway between hardwood upper level and LVP lower level. Final cleanup of all debris, sawdust, and finish residue. Walkthrough with you before close-out — every detail reviewed before we call the project complete.</p>
            </div>
          </div>
        </div>

        <h2>Flooring Installation Cost in Wheaton, MD</h2>

        <table className="cost-table">
          <tr>
            <th>Flooring Type</th>
            <th>Installed Cost (per sq ft)</th>
            <th>600 Sq Ft Estimate</th>
          </tr>
          <tr>
            <td>Hardwood Refinishing (upper level)</td>
            <td>$3 – $6</td>
            <td>$1,800 – $3,600</td>
          </tr>
          <tr>
            <td>Solid Hardwood — New Installation</td>
            <td>$8 – $15</td>
            <td>$4,800 – $9,000</td>
          </tr>
          <tr>
            <td>Engineered Hardwood</td>
            <td>$6 – $12</td>
            <td>$3,600 – $7,200</td>
          </tr>
          <tr>
            <td>Premium LVP (lower level / ADU)</td>
            <td>$5 – $10</td>
            <td>$3,000 – $6,000</td>
          </tr>
          <tr>
            <td>Porcelain / Ceramic Tile (bathrooms)</td>
            <td>$8 – $18</td>
            <td>$4,800 – $10,800</td>
          </tr>
          <tr>
            <td>Laminate (secondary rooms)</td>
            <td>$4 – $8</td>
            <td>$2,400 – $4,800</td>
          </tr>
          <tr>
            <td>Carpet (upper bedrooms)</td>
            <td>$4 – $10</td>
            <td>$2,400 – $6,000</td>
          </tr>
          <tr>
            <td>Typical Wheaton Split-Level Package<br /><small>(Upper: hardwood/refinish · Lower: LVP · Baths: tile)</small></td>
            <td>Mixed</td>
            <td>$10,000 – $24,000</td>
          </tr>
        </table>

        <div className="highlight">
          <p>💰 <strong>Wheaton Flooring ROI:</strong> A correctly specified whole-home flooring update — hardwood or refinished original on the upper level, premium LVP on the lower level, tile in bathrooms — typically adds $16,000–$28,000 to appraised value on a Wheaton single-family home and significantly improves buyer appeal. Glenmont and Wheaton Metro Red Line access, combined with Wheaton&apos;s active resale market and growing buyer interest in ADU-ready homes, means move-in-ready flooring in the right materials consistently returns well at sale. Buyers specifically notice when the lower level has been done correctly — LVP rather than hardwood that is already beginning to cup.</p>
        </div>

        <h2>Why Wheaton Homeowners Choose DMV-GC Group for Flooring</h2>

        <div className="why-grid">
          <div className="why-box">
            <div className="icon">🏠</div>
            <strong>Two-Zone Expertise</strong>
            <span>Upper and lower levels assessed separately — right material for each zone without the below-grade hardwood failure other contractors don&apos;t prevent</span>
          </div>
          <div className="why-box">
            <div className="icon">🏗️</div>
            <strong>ADU Flooring Integration</strong>
            <span>LVP specified and installed as part of full Wheaton ADU conversions — coordinated with plumbing, electrical, and egress under one contract</span>
          </div>
          <div className="why-box">
            <div className="icon">🪵</div>
            <strong>Honest Refinish Advice</strong>
            <span>We check thickness on upper-level original hardwood before recommending refinish or replace — always refinish when the floor is viable</span>
          </div>
          <div className="why-box">
            <div className="icon">💧</div>
            <strong>Below-Grade Moisture Management</strong>
            <span>Slab moisture testing, vapor barrier where needed, and correct LVP specification — preventing the lower-level flooring failures that follow wrong material choices</span>
          </div>
          <div className="why-box">
            <div className="icon">🛡️</div>
            <strong>MHIC Licensed &amp; Warrantied</strong>
            <span>Maryland MHIC #156178. Fully bonded, insured, 1-year workmanship warranty on every Wheaton flooring project</span>
          </div>
          <div className="why-box">
            <div className="icon">⭐</div>
            <strong>4.9-Star Rated</strong>
            <span>97+ verified reviews. Wheaton clients specifically cite correct zone-based specification and ADU flooring durability after multiple tenant cycles</span>
          </div>
        </div>

        <h2>What Wheaton Homeowners Say About DMV-GC Group</h2>

        <div className="review-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;Our Glenmont split-level ADU conversion included LVP throughout the lower level as part of the full project. DMV-GC Group coordinated the flooring with the plumbing and electrical — everything installed in the right sequence. The LVP they selected looks warm and attractive — our ADU tenant commented on it specifically. Two tenant cycles in and it looks as good as when it was installed.&quot;</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">Glenmont, Wheaton MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;We had solid hardwood installed on our lower level by a previous contractor five years ago. It cupped badly within two summers. DMV-GC Group removed it, installed LVP over a moisture barrier, and refinished the original hardwood upstairs. They explained exactly why the hardwood failed below grade. The right materials in the right places — no moisture problems since.&quot;</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">Forest Estates, Wheaton MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;Our Wheaton Hills split-level had original hardwood under carpet in the living and dining room. DMV-GC Group lifted a section, confirmed there was enough thickness, and refinished the whole upper level in a natural warm tone with satin finish. They used LVP in the lower family room. The stair transition between the two looks completely intentional — exactly matched in tone.&quot;</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">Wheaton Hills, MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;We live in a condo near Wheaton Metro — concrete slab throughout. Other contractors quoted solid hardwood nail-down, which is not possible on our slab. DMV-GC Group specified LVP floating installation, verified the HOA allowed it, and installed throughout the main living area. No adhesive, no damage to the slab, and the floor looks and feels like real hardwood.&quot;</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">Wheaton Metro Area, MD</span></div>
          </div>
        </div>

        <div className="highlight">
          <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Wheaton homeowners trust DMV-GC Group for flooring projects that apply the correct two-zone strategy to split-level homes, prevent the below-grade hardwood failure that the wrong material causes, specify premium LVP for ADU conversions that holds up through multiple tenant cycles, and coordinate flooring with the broader renovation project — ADU, kitchen, or bathroom — under one contract.</p>
        </div>

        <div className="cta-banner">
          <h2>Get a Free Flooring Estimate in Wheaton</h2>
          <p>We&apos;ll visit your Wheaton home, assess both levels of your split-level independently, check upper-level original floor refinishability, and give you a zone-by-zone estimate — free of charge, no obligation.</p>
          <Link href="/contact-us" className="cta-btn">Schedule Free Flooring Consultation →</Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
        </div>

        <h2>Serving All Wheaton, MD Neighborhoods for Flooring</h2>

        <div className="areas-grid">
          <span className="area-pill">Glenmont</span>
          <span className="area-pill">Forest Estates</span>
          <span className="area-pill">Wheaton Hills</span>
          <span className="area-pill">Veirs Mill Road</span>
          <span className="area-pill">Kemp Mill</span>
          <span className="area-pill">Layhill Road</span>
          <span className="area-pill">Wheaton Metro Area</span>
          <span className="area-pill">Glenmont Metro Area</span>
          <span className="area-pill">Silver Spring</span>
          <span className="area-pill">Kensington</span>
        </div>

        <div className="nearby-box">
          <h3>Also serving Silver Spring, MD — directly south of Wheaton</h3>
          <p>Silver Spring&apos;s housing stock mirrors Wheaton&apos;s — split-levels, colonials, and active ADU market with the same two-zone flooring challenge. DMV-GC Group applies the same zone-based flooring expertise across both communities. <Link href="/service/flooring-remodeling/silver-spring-md">View our Silver Spring flooring page →</Link></p>
        </div>

        <h2>Frequently Asked Questions — Flooring in Wheaton, MD</h2>
        <Accordion defaultActiveKey="0" flush>
          {faqData.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <div className="internal-links">
          <h2>Explore Our Other Services in Wheaton, MD</h2>
          <ul>
            <li><Link href="/service/kitchen-remodeling/wheaton-md">Kitchen Remodeling in Wheaton, MD</Link></li>
            <li><Link href="/service/bathroom-remodeling/wheaton-md">Bathroom Remodeling in Wheaton, MD</Link></li>
            <li><Link href="/service/basement-remodeling/wheaton-md">Basement Remodeling in Wheaton, MD</Link></li>
            <li><Link href="/service/adu/wheaton-md">ADU Construction in Wheaton, MD</Link></li>
            <li><Link href="/service/decks/wheaton-md">Deck Building in Wheaton, MD</Link></li>
            <li><Link href="/service/home-additions">Home Additions in Wheaton, MD</Link></li>
          </ul>
        </div>

        <div className="cta-banner">
          <h2>Ready to Transform Your Wheaton Home&apos;s Floors?</h2>
          <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home flooring consultation. We&apos;ll assess both zones of your split-level, recommend the right material for each, and deliver results that last — above grade and below.</p>
          <Link href="/contact-us" className="cta-btn">Get Free Flooring Estimate in Wheaton →</Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
        </div>
      </div>
    </div>
  );
};

export default WheatonMD;
