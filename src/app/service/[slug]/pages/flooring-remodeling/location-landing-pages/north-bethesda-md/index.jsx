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
      "areaServed": {
        "@type": "City",
        "name": "North Bethesda",
        "sameAs": "https://en.wikipedia.org/wiki/North_Bethesda,_Maryland"
      },
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "MHIC License #156178"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "DLCP License #410526000209"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "97",
        "bestRating": "5"
      },
      "priceRange": "$$$"
    },
    {
      "@type": "Service",
      "name": "Flooring Installation in North Bethesda, MD",
      "serviceType": "Flooring Installation",
      "provider": {
        "@id": "https://www.dmv-gc.com/#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "North Bethesda"
      },
      "description": "Full-service flooring installation and replacement in North Bethesda, MD. LVP, engineered hardwood, wide-plank oak, and porcelain tile for Pike & Rose condos, White Flint townhomes, Wildwood single-family homes — with concrete slab subfloor expertise and condo HOA acoustic rule compliance.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "4",
          "maxPrice": "18",
          "priceCurrency": "USD",
          "unitCode": "SQFT"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.dmv-gc.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.dmv-gc.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Flooring",
          "item": "https://www.dmv-gc.com/service/flooring-remodeling"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "North Bethesda, MD",
          "item": "https://www.dmv-gc.com/service/flooring-remodeling/north-bethesda-md"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does flooring installation cost in North Bethesda, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Flooring in North Bethesda typically costs $3–$32 per square foot. For condos: premium LVP with acoustic underlayment runs $6–$12/sq ft; engineered hardwood glue-down runs $8–$16/sq ft; porcelain tile on slab runs $8–$16/sq ft. For single-family homes: wide-plank white oak runs $10–$18/sq ft; hardwood refinishing costs $3–$6/sq ft. A Pike & Rose condo whole-unit package runs $8,000–$22,000. A Wildwood single-family package runs $14,000–$28,000."
          }
        },
        {
          "@type": "Question",
          "name": "Can I install solid hardwood floors in a North Bethesda condo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. North Bethesda condos have concrete slab subfloors. Solid hardwood nail-down requires a wood subfloor. The correct hardwood spec for a condo is engineered hardwood, which can be glued to concrete with moisture-blocking adhesive. Premium engineered hardwood with a 4mm+ wear layer provides the same look and feel as solid hardwood without the installation problems."
          }
        },
        {
          "@type": "Question",
          "name": "Do North Bethesda condo HOAs allow new flooring installation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most do, but require acoustic underlayment beneath hard flooring. The specific requirement varies by building — minimum IIC rating, specific product, or prior written approval. Standard 1mm foam does not meet most North Bethesda condo minimums. DMV-GC Group obtains and reviews the building's flooring rules before any materials are ordered and specifies the correct acoustic underlayment product with published tested assembly ratings."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for flooring in North Bethesda, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds Maryland MHIC license #156178 and is headquartered at 11810 Grand Park Ave, Suite 500 — in North Bethesda. Fully bonded, insured, and backed by a 1-year workmanship warranty on every project."
          }
        }
      ]
    }
  ]
};

const NorthBethesdaMD = () => {
  const { setActiveMenuItem } = useMyContext();

  useEffect(() => {
    setActiveMenuItem("service");
  }, []);

  const faqData = [
    {
      question: "How much does flooring installation cost in North Bethesda, MD?",
      answer: `Flooring in North Bethesda costs $3–$32 per square foot depending on building type and material. For condo and high-rise units: premium LVP with acoustic underlayment runs $6–$12/sq ft; engineered hardwood glue-down runs $8–$16/sq ft; large-format porcelain tile on slab runs $8–$16/sq ft. For single-family homes: wide-plank white oak runs $10–$18/sq ft; hardwood refinishing costs $3–$6/sq ft; LVP for lower levels costs $5–$10/sq ft. A typical Pike & Rose condo whole-unit flooring replacement runs $8,000–$22,000. A typical Wildwood single-family package runs $14,000–$28,000. Free in-home estimates for all North Bethesda building types.`
    },
    {
      question: "Can I install solid hardwood in my North Bethesda condo?",
      answer: `No. North Bethesda's condo buildings have concrete slab subfloors. Solid hardwood nail-down requires a wood subfloor — it cannot be driven into concrete. Gluing solid hardwood to concrete is possible but not recommended because solid hardwood's seasonal dimensional movement exceeds what a concrete bond can withstand over multiple years. The correct specification is engineered hardwood — cross-ply core resists dimensional movement, glued to concrete with moisture-blocking adhesive. Premium engineered hardwood with a 4mm+ wear layer provides the same look and feel as solid hardwood without the installation and longevity problems.`
    },
    {
      question: "What acoustic underlayment does my North Bethesda condo HOA require?",
      answer: `It depends on your specific building. North Bethesda condo associations universally require acoustic underlayment under hard flooring, but the specific requirement varies — some specify minimum IIC rating (commonly IIC 50 or higher), some require a specific product, and some require prior written approval. Standard 1mm foam does not meet most North Bethesda condo minimums. DMV-GC Group obtains your specific building's flooring rules before materials are ordered, specifies the correct acoustic underlayment with published tested assembly ratings, and handles any prior-approval submission your building requires.`
    },
    {
      question: "Does DMV-GC Group coordinate freight elevator access for North Bethesda condo flooring projects?",
      answer: `Yes — this is a standard part of every North Bethesda condo flooring project. We contact building management to reserve freight elevator access for material delivery and debris removal, confirm permitted work hours, and ensure debris removal is scheduled within building restrictions. Managing building logistics before the project starts prevents day-of delays that occur when elevator access has not been reserved or debris scheduling has not been confirmed.`
    },
    {
      question: "Is DMV-GC Group licensed for flooring in North Bethesda, MD?",
      answer: `Yes — and we are headquartered here. DMV-GC Group holds Maryland MHIC license #156178 and operates from 11810 Grand Park Ave, Suite 500, North Bethesda. Fully bonded, comprehensive general liability and workers' compensation coverage, and a 1-year workmanship warranty on every North Bethesda flooring project — whether in a Pike & Rose condo unit or a Wildwood single-family home.`
    }
  ];

  return (
    <div className="city-service-detail-page flooring-north-bethesda-md">
      <div className="container">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>›</span><Link href="/services">Services</Link><span>›</span><Link href="/service/flooring-remodeling">Flooring Installation</Link><span>›</span>North Bethesda, MD
        </nav>

        <div className="hero">
          <span className="hero-location-tag">📍 Serving North Bethesda, MD — Our Home Base</span>
          <h1>Flooring Installation &amp; Replacement in North Bethesda, MD</h1>
          <div className="hero-meta">
            <span className="badge home">🏠 DMV-GC Headquartered Here</span>
            <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
            <span className="badge">✓ MHIC Licensed &amp; Insured</span>
            <span className="badge">✓ Condo HOA Acoustic Compliance</span>
            <span className="badge">✓ Slab &amp; Plywood Subfloor Expertise</span>
            <span className="badge dark">📞 +1 240-730-1292</span>
          </div>
        </div>

        <div className="hq-box">
          <div className="hq-icon">📍</div>
          <div>
            <h3>DMV-GC Group Is Based in North Bethesda — 11810 Grand Park Ave, Suite 500</h3>
            <p>We are not a contractor who occasionally serves North Bethesda — we are headquartered here. Our office is in the Grand Park corridor, steps from Pike &amp; Rose. We know the buildings, the HOA processes, and condo management contacts. When a Pike &amp; Rose condo owner or a Wildwood homeowner calls us, they are calling the local contractor — not a regional company routing a crew from Silver Spring or Rockville.</p>
          </div>
        </div>

        <div className="nb-banner">
          <div className="icon">🏢</div>
          <div>
            <h3>North Bethesda&apos;s Flooring Market Is Two Markets in One — Concrete Slab High-Rises and Single-Family Plywood-Subfloor Homes — and Each Needs a Completely Different Approach</h3>
            <p>Every other page in our flooring campaign addresses a community with a dominant housing type: Kensington&apos;s 1920s bungalows, Garrett Park&apos;s historic Tudors, Gaithersburg&apos;s Kentlands colonials, Chevy Chase&apos;s estate Tudors. North Bethesda has all of the above — and concrete slab high-rises and mid-rises on top of it. The Pike &amp; Rose corridor and White Flint area have seen North Bethesda&apos;s most significant recent development: luxury condo towers and mid-rise units where every floor sits on concrete slab, where solid hardwood nail-down is never the right answer, and where condo HOA acoustic rules govern what underlayment must be installed beneath any hard flooring. Meanwhile, Wildwood&apos;s single-family colonials and Luxmanor&apos;s established homes have the plywood subfloors and 1970s–80s hardwood that make them much more similar to Rockville or Gaithersburg in flooring terms. DMV-GC Group serves both North Bethesda populations — with the concrete slab expertise the condo market demands and the single-family knowledge the residential neighborhoods need — from an office that is literally in the neighborhood.</p>
          </div>
        </div>

        <div className="intro-box">
          Looking for a trusted <strong>flooring contractor in North Bethesda, MD</strong>? DMV General Contracting Group — headquartered at 11810 Grand Park Ave, Suite 500 — installs, replaces, and refinishes all types of flooring for North Bethesda homeowners and condo owners. Premium LVP and engineered hardwood for Pike &amp; Rose and White Flint slab-construction units. Wide-plank oak and hardwood refinishing for Wildwood, Luxmanor, and single-family North Bethesda homes. Large-format porcelain and natural stone tile throughout. Condo HOA acoustic underlayment compliance handled on every multi-unit building project before materials are ordered.
        </div>

        <div className="trust-bar">
          <div className="trust-item"><div className="icon">🏠</div><strong>Headquartered Here</strong><span>11810 Grand Park Ave, Suite 500, North Bethesda</span></div>
          <div className="trust-item"><div className="icon">🏢</div><strong>Condo Slab Expertise</strong><span>LVP &amp; engineered hardwood on concrete — correct spec</span></div>
          <div className="trust-item"><div className="icon">⭐</div><strong>4.9-Star Rated</strong><span>97+ verified homeowner reviews</span></div>
          <div className="trust-item"><div className="icon">🛡️</div><strong>MHIC Licensed</strong><span>Bonded, insured, 1-year warranty</span></div>
        </div>

        <h2>Flooring Services We Offer in North Bethesda, MD</h2>
        <div className="service-list">
          <div className="service-item">Premium LVP — Condo &amp; Slab-on-Grade Units</div>
          <div className="service-item">Engineered Hardwood — Glued-Down on Concrete Slab</div>
          <div className="service-item">Wide-Plank White Oak — Single-Family Homes</div>
          <div className="service-item">Hardwood Refinishing — Older North Bethesda Homes</div>
          <div className="service-item">Condo HOA Acoustic Underlayment Compliance</div>
          <div className="service-item">Large-Format Porcelain &amp; Ceramic Tile</div>
          <div className="service-item">Natural Stone Tile (Marble, Travertine)</div>
          <div className="service-item">Concrete Slab Moisture Assessment (Pre-Install)</div>
          <div className="service-item">Subfloor Leveling (Self-Leveling Compound on Slab)</div>
          <div className="service-item">Building Management Coordination — Elevator &amp; Access</div>
          <div className="service-item">Carpet Installation &amp; Replacement</div>
          <div className="service-item">Whole-Unit Condo Flooring Replacement</div>
          <div className="service-item">Stair Tread &amp; Riser Replacement</div>
          <div className="service-item">Flooring as Part of Full Kitchen / Bath Remodel</div>
        </div>

        <div className="author-box">
          <div className="author-avatar">🪵</div>
          <div className="author-info">
            <h4>About DMV-GC Group — North Bethesda&apos;s Local Licensed Flooring Contractor</h4>
            <p>DMV General Contracting Group is based at 11810 Grand Park Ave, Suite 500 — in North Bethesda. We have completed flooring projects in Pike &amp; Rose condos, White Flint mid-rise units, Wildwood single-family homes, and Luxmanor properties. We know the condo HOA acoustic requirements at North Bethesda&apos;s major buildings, the concrete slab conditions in high-rise units, and the plywood subfloor patterns in the single-family neighborhoods. MHIC licensed, insured, 1-year workmanship warranty on every project.</p>
            <div className="author-creds">
              <span className="cred">MHIC #156178</span>
              <span className="cred">Headquartered in North Bethesda</span>
              <span className="cred">Condo HOA Acoustic Compliance</span>
              <span className="cred">Slab Subfloor Specialists</span>
              <span className="cred">4.9★ Rated</span>
              <span className="cred">1-Year Warranty</span>
            </div>
          </div>
        </div>

        <h2>North Bethesda&apos;s Two Flooring Markets — Concrete Slab vs. Plywood Subfloor</h2>
        <p>The single most important question in any North Bethesda flooring project is: what is the subfloor? The answer determines which materials are possible, which installation methods apply, and which HOA rules must be followed.</p>

        <div className="building-grid">
          <div className="building-card slab">
            <h3>🏢 Concrete Slab Subfloor</h3>
            <div className="b-tag">Pike &amp; Rose · White Flint · High-Rise &amp; Mid-Rise</div>
            <ul>
              <li>All condo towers and mid-rise units on Rockville Pike corridor</li>
              <li><strong>Solid hardwood nail-down is NOT possible on concrete</strong></li>
              <li>Engineered hardwood — glued down with moisture-blocking adhesive</li>
              <li>Premium LVP — floated with acoustic underlayment ⭐ Most popular</li>
              <li>Large-format porcelain tile — thin-set directly on slab</li>
              <li>Concrete moisture test required before hardwood or LVP</li>
              <li>Self-leveling compound where slab has low spots or lippage</li>
              <li>Condo HOA acoustic underlayment rules — checked before materials ordered</li>
              <li>Building management coordination for elevator and freight access</li>
            </ul>
          </div>
          <div className="building-card plywood">
            <h3>🏠 Plywood Subfloor</h3>
            <div className="b-tag">Wildwood · Luxmanor · Single-Family Homes</div>
            <ul>
              <li>Wildwood, Luxmanor, and North Bethesda single-family colonials</li>
              <li>Solid hardwood nail-down installation viable above grade</li>
              <li>Wide-plank white oak 5&quot; — most popular upgrade direction</li>
              <li>Original hardwood refinishing where 1970s–80s stock survives</li>
              <li>LVP for below-grade finished lower levels and kitchens</li>
              <li>Subfloor levelness checked before wide-plank installation</li>
              <li>No condo HOA acoustic rules — standard MoCo residential process</li>
              <li>Same scope as Rockville and Gaithersburg single-family projects</li>
            </ul>
          </div>
        </div>

        <h2>Condo HOA Acoustic Rules in North Bethesda — What to Know Before Ordering Flooring</h2>
        <div className="acoustic-box">
          <h3>🔇 Why North Bethesda Condo Flooring Requires Acoustic Underlayment Compliance</h3>
          <ul>
            <li><strong>The impact noise problem:</strong> In concrete slab multi-story buildings, hard flooring — LVP, engineered hardwood, tile — transmits impact noise (footsteps, dropped items, moving furniture) through the slab to units below with very high efficiency. Concrete has no natural sound absorption. Without acoustic underlayment between the hard flooring and the slab, the unit below hears every footstep clearly. This is why North Bethesda condo associations universally require acoustic underlayment beneath any hard flooring installed in units above ground level.</li>
            <li><strong>IIC ratings — what condo HOA rules specify:</strong> Most North Bethesda condo associations specify a minimum Impact Insulation Class (IIC) rating for the floor-ceiling assembly — commonly IIC 50 or higher. Standard 1mm foam underlayment does not meet most North Bethesda condo building minimums. DMV-GC Group specifies acoustic underlayment products with published tested assembly ratings — Impact Barrier QT, QuietWalk Plus, FloorMuffler UltraSeal, or building-specified equivalents — that meet the actual requirement rather than approximating it.</li>
            <li><strong>Obtaining the condo HOA flooring rules:</strong> Every North Bethesda condo building has different rules — some specify IIC rating, some require a specific product, some require prior written approval before installation begins. DMV-GC Group obtains the specific rules for every condo building before any materials are ordered. We have encountered buildings that require an underlayment spec sheet submitted to the HOA before work begins, and buildings that require only verbal confirmation. We handle the correct process for each building.</li>
            <li><strong>Building access coordination:</strong> Condo flooring projects require advance coordination with building management for freight elevator reservation, debris removal scheduling, and work hour restrictions. DMV-GC Group handles all building management coordination before the project start date. No day-of surprises because building logistics are managed before day one.</li>
            <li><strong>Tile is generally exempt:</strong> Large-format porcelain tile installed with standard thin-set on concrete slab does not require acoustic underlayment under most North Bethesda condo association rules — tile&apos;s natural mass provides some impact sound resistance. DMV-GC Group confirms this with each building&apos;s specific rules before assuming tile is exempt.</li>
          </ul>
        </div>

        <h2>Why Solid Hardwood Cannot Be Installed in North Bethesda Condos</h2>
        <div className="warning">
          ⚠️ <strong>Solid Hardwood on Concrete Slab — Never the Right Answer:</strong> Solid hardwood nail-down installation requires driving cleats or staples through the hardwood tongue into a wood subfloor. Concrete cannot accept nails or staples in this way. Gluing solid hardwood to concrete is technically possible but not recommended because solid hardwood&apos;s seasonal dimensional movement — swelling in humidity, contracting in dryness — is too great for a glued-down bond to concrete to withstand over multiple seasonal cycles. The correct hardwood specification for any North Bethesda condo is engineered hardwood — which has a cross-ply core that resists dimensional movement and can be glued to concrete with moisture-blocking adhesive. A 4mm+ wear layer provides the same visual quality as solid hardwood. DMV-GC Group will not install solid hardwood on a concrete slab regardless of how the request is framed.
        </div>

        <h2>Flooring Types We Install in North Bethesda, MD</h2>
        <div className="floor-type-grid">
          <div className="floor-card">
            <span className="floor-label">Condo &amp; High-Rise — Most Popular</span>
            <h3>Premium Luxury Vinyl Plank (LVP)</h3>
            <p>The dominant flooring choice in North Bethesda&apos;s Pike &amp; Rose and White Flint condo market. 100% waterproof, dimensionally stable on concrete slab, floated over acoustic underlayment to meet condo HOA noise requirements, available in wide-plank wood looks at 7&quot;–9&quot; widths that read as contemporary and refined. COREtec Plus HD, Shaw Floorte Pro 5, or Karndean Korlok specified for North Bethesda condo projects. A full condo unit in LVP with proper acoustic underlayment achieves most North Bethesda building minimum IIC ratings without additional modification.</p>
            <div className="floor-meta"><strong>Lifespan:</strong> 25–30 years &nbsp;|&nbsp; <strong>Cost:</strong> $6–$12/sq ft installed incl. underlayment</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">Condo Premium — Authentic Wood Surface</span>
            <h3>Engineered Hardwood (Glue-Down on Slab)</h3>
            <p>For condo owners who want an authentic hardwood surface rather than LVP&apos;s reproduction wood look. Engineered hardwood glued to concrete with moisture-blocking adhesive. A 4mm+ wear layer of real oak or walnut provides a surface that can be lightly sanded and refinished once — genuinely oak or walnut rather than a photograph of it. Wide-plank white oak engineered hardwood — 5&quot;–7&quot; planks in natural to warm stain — is the most popular engineered hardwood specification in North Bethesda&apos;s condo renovation market.</p>
            <div className="floor-meta"><strong>Lifespan:</strong> 25–40 years &nbsp;|&nbsp; <strong>Cost:</strong> $8–$16/sq ft installed</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">Single-Family — Wildwood &amp; Luxmanor</span>
            <h3>Wide-Plank Solid White Oak</h3>
            <p>For North Bethesda&apos;s single-family colonials in Wildwood, Luxmanor, and adjacent neighborhoods — where plywood subfloors make solid hardwood nail-down viable — wide-plank white oak (5&quot;) is the dominant upgrade direction. Same material specification as King Farm, Fallsgrove, and Gaithersburg&apos;s planned communities. LVP in kitchen and below-grade family room completes the whole-home flooring package.</p>
            <div className="floor-meta"><strong>Lifespan:</strong> 50–100 years &nbsp;|&nbsp; <strong>Cost:</strong> $10–$18/sq ft installed</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">Kitchens &amp; Wet Areas — All Building Types</span>
            <h3>LVP — Waterproof Specification</h3>
            <p>LVP is the correct kitchen and wet-area specification in every North Bethesda building type — condo or single-family. In condos, LVP is often specified throughout the unit including kitchen. In single-family homes, LVP bridges the kitchen and below-grade lower level. Color coordination between kitchen LVP and adjacent living-area hardwood or engineered hardwood is specified before either material is ordered.</p>
            <div className="floor-meta"><strong>Lifespan:</strong> 25–30 years &nbsp;|&nbsp; <strong>Cost:</strong> $5–$10/sq ft installed</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">Bathrooms — All Building Types</span>
            <h3>Large-Format Porcelain &amp; Natural Stone Tile</h3>
            <p>Large-format porcelain — 24x24 or larger — for primary bathroom renovations in both condo and single-family projects. Marble-look or concrete-look porcelain at the standard level; Carrara marble for premium condo unit primary bathrooms. Tile on concrete slab installs directly with standard thin-set — no uncoupling membrane needed unlike in Chevy Chase&apos;s diagonal plank subfloor homes. Older single-family plywood subfloors checked for deflection before specifying direct installation.</p>
            <div className="floor-meta"><strong>Lifespan:</strong> 50+ years &nbsp;|&nbsp; <strong>Cost:</strong> $8–$22/sq ft installed</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">Single-Family Older Homes</span>
            <h3>Hardwood Refinishing</h3>
            <p>Wildwood and Luxmanor single-family homes from the 1970s–80s frequently have original hardwood that is refinishable — similar to Rockville&apos;s Twinbrook in construction era and hardwood condition. DMV-GC Group checks remaining thickness and squeak sources before recommending refinishing. Where viable, refinishing at $3–$6/sq ft versus $10–$18/sq ft for wide-plank replacement is the clear economic choice. Plank width change desire = replacement path. Stain color change desire = refinishing path.</p>
            <div className="floor-meta"><strong>Lifespan:</strong> Extends original 20–40 years &nbsp;|&nbsp; <strong>Cost:</strong> $3–$6/sq ft</div>
          </div>
        </div>

        <h2>Best Flooring by Room — Condo vs. Single-Family North Bethesda</h2>
        <div className="table-responsive">
          <div className="table-holder">
            <table className="room-table">
              <thead>
                <tr><th>Room</th><th>Condo / High-Rise (Concrete Slab)</th><th>Single-Family Home (Plywood Subfloor)</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Living / Dining</strong></td><td>Premium LVP with acoustic underlayment ⭐ or engineered hardwood glue-down</td><td>Wide-plank white oak solid hardwood ⭐ or refinish existing</td></tr>
                <tr><td><strong>Kitchen</strong></td><td>LVP (same as living area for visual continuity)</td><td>LVP matched to adjacent hardwood tone</td></tr>
                <tr><td><strong>Primary Bedroom</strong></td><td>LVP or engineered hardwood, acoustic underlayment required</td><td>Solid white oak or refinished original hardwood</td></tr>
                <tr><td><strong>Primary Bathroom</strong></td><td>Large-format porcelain on slab — no membrane needed</td><td>Large-format porcelain — membrane if older plywood deflects</td></tr>
                <tr><td><strong>Secondary Bedrooms</strong></td><td>LVP or carpet — acoustic compliance still required for LVP</td><td>Solid oak or carpet</td></tr>
                <tr><td><strong>What NOT to install</strong></td><td>❌ Solid hardwood nail-down — never on concrete slab</td><td>❌ Solid hardwood below-grade — LVP only below grade</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>North Bethesda Neighborhoods We Serve for Flooring</h2>
        <div className="neighborhood-grid">
          <div className="neighborhood-card">
            <h3>Pike &amp; Rose / White Flint</h3>
            <div className="n-tag">Condo / High-Rise</div>
            <p>North Bethesda&apos;s most active condo flooring market. Luxury high-rise and mid-rise buildings along Rockville Pike and Old Georgetown Road. Concrete slab throughout. LVP with acoustic underlayment and engineered hardwood glue-down are the only viable hardwood-type specifications. Condo HOA rules checked before every project. Building management coordination for elevator and freight access handled before project start.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Wildwood</h3>
            <div className="n-tag sfh">Single-Family</div>
            <p>Established 1960s–80s single-family neighborhood with colonials and split-levels. Plywood subfloors throughout. Original hardwood in many homes — refinishable in most cases. Wide-plank white oak upgrade popular in fully-carpeted homes. LVP for below-grade lower levels. Same flooring approach as North Bethesda&apos;s equivalent in the Rockville and Gaithersburg single-family markets.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Luxmanor</h3>
            <div className="n-tag sfh">Single-Family</div>
            <p>1960s–70s single-family colonials and split-levels west of Rockville Pike. Mix of original hardwood homes and fully carpeted homes. Refinishable hardwood frequently found under carpet. Wide-plank upgrade viable for homes with clean plywood subfloors. Split-level two-zone strategy applies for below-grade lower-level spaces. MoCo DPS permit jurisdiction.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Tuckerman Lane / Grosvenor Area</h3>
            <div className="n-tag sfh">Single-Family</div>
            <p>Established single-family corridor between North Bethesda and Chevy Chase. 1960s–80s colonials with plywood subfloors and original hardwood in many homes. Near Grosvenor Metro (Red Line). Standard single-family flooring scope — refinishing viable hardwood, wide-plank oak upgrade where plank width change is the goal, LVP below grade.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Nicholson Lane Area</h3>
            <div className="n-tag">Mixed</div>
            <p>Mix of single-family homes and newer townhome communities east of Rockville Pike. Newer townhomes have plywood subfloors; older single-family may have diagonal plank subfloor in oldest examples. Wide-plank oak for above-grade townhome main floors. LVP for lower-level finished spaces. HOA checked for acoustic rules in attached townhome construction.</p>
          </div>
          <div className="neighborhood-card">
            <h3>Grand Park / DMV-GC HQ Area</h3>
            <div className="n-tag">Mixed</div>
            <p>The Grand Park corridor including our own office at 11810 Grand Park Ave, Suite 500. Mix of newer mid-rise condo buildings and adjacent townhome communities. We are on-site in this area faster than any contractor in Montgomery County — literally around the corner from Grand Park condo and townhome projects.</p>
          </div>
        </div>

        <h2>Our Flooring Installation Process in North Bethesda</h2>
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-content">
              <h3>Free In-Home Consultation — Subfloor Type Confirmed First</h3>
              <p>The first question at every North Bethesda flooring consultation: concrete slab or plywood? For condo and high-rise units, this establishes that solid hardwood is off the table and shapes all subsequent material discussion. We obtain and review the condo building&apos;s HOA flooring rules before the consultation ends — so material and underlayment selection happens at the first visit. No cost, no obligation.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-content">
              <h3>HOA Acoustic Compliance — Underlayment Spec Selected</h3>
              <p>For condo projects: specific acoustic underlayment product selected based on the building&apos;s IIC requirement, with published tested assembly ratings confirmed. Where the building requires prior HOA approval before installation begins, that submission is prepared and filed. Building management contacted for freight elevator reservation, debris removal scheduling, and work-hour confirmation.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-content">
              <h3>Concrete Moisture Testing &amp; Subfloor Leveling</h3>
              <p>For slab units: concrete moisture tested with calcium chloride or in-situ RH test before any hardwood or LVP is installed. Elevated moisture addressed with moisture-blocking adhesive for engineered hardwood glue-down or moisture barrier for LVP float. Self-leveling compound applied where slab has low spots. For single-family plywood subfloors: soft spots and high spots addressed before any material delivery.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-content">
              <h3>Material Delivery &amp; Installation</h3>
              <p>For condo buildings: materials delivered via freight elevator during reserved access window, stored in unit for acclimation. LVP floated with acoustic underlayment, expansion gaps maintained at all walls and transitions. Engineered hardwood glued with trowel-applied moisture-blocking adhesive. Tile thin-set directly on clean slab with lippage-control system on large-format installations. For single-family: nail-down solid oak, LVP below grade.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">5</div>
            <div className="step-content">
              <h3>Trim, Transitions &amp; Final Walkthrough</h3>
              <p>New baseboards, quarter round, transition strips at all material changes, stair nosings where applicable. In condo buildings: all corridor-to-unit transitions flush-mounted rather than raised, eliminating tripping hazard at unit entry. Complete cleanup. Final walkthrough and written warranty documentation at project close.</p>
            </div>
          </div>
        </div>

        <h2>Flooring Installation Cost in North Bethesda, MD</h2>
        <div className="table-responsive">
          <div className="table-holder">
            <table className="cost-table">
              <thead>
                <tr><th>Flooring Type</th><th>Installed Cost (per sq ft)</th><th>700 Sq Ft Estimate</th></tr>
              </thead>
              <tbody>
                <tr><td>Premium LVP — Condo (includes acoustic underlayment)</td><td>$6 – $12</td><td>$4,200 – $8,400</td></tr>
                <tr><td>Engineered Hardwood — Glue-Down on Slab</td><td>$8 – $16</td><td>$5,600 – $11,200</td></tr>
                <tr><td>Wide-Plank White Oak — Single-Family Nail-Down</td><td>$10 – $18</td><td>$7,000 – $12,600</td></tr>
                <tr><td>Hardwood Refinishing — Single-Family Older Homes</td><td>$3 – $6</td><td>$2,100 – $4,200</td></tr>
                <tr><td>Large-Format Porcelain Tile — On Slab (no membrane)</td><td>$8 – $16</td><td>$5,600 – $11,200</td></tr>
                <tr><td>Large-Format Porcelain + Uncoupling Membrane (plywood)</td><td>$10 – $20</td><td>$7,000 – $14,000</td></tr>
                <tr><td>Carrara Marble Tile — Premium Condo Bathrooms</td><td>$18 – $32</td><td>$12,600 – $22,400</td></tr>
                <tr><td>Carpet (bedrooms)</td><td>$4 – $10</td><td>$2,800 – $7,000</td></tr>
                <tr><td>Acoustic Underlayment Premium (above standard foam)</td><td>$1.00 – $2.50</td><td>$700 – $1,750</td></tr>
                <tr><td>Typical Pike &amp; Rose / White Flint Condo Package<br /><small>(LVP throughout + porcelain tile bathrooms, acoustic underlayment included)</small></td><td>Mixed</td><td>$8,000 – $22,000</td></tr>
                <tr><td>Typical Wildwood / Luxmanor Single-Family Package<br /><small>(Main: white oak · Kitchen/lower: LVP · Primary bath: tile)</small></td><td>Mixed</td><td>$14,000 – $28,000</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="tip">
          💡 <strong>North Bethesda Condo ROI:</strong> A whole-unit LVP replacement in a Pike &amp; Rose or White Flint condo — removing builder carpet or worn vinyl and installing premium wide-plank LVP with acoustic underlayment — typically adds $8,000–$15,000 to appraised value. White Flint Metro Red Line proximity and the Pike &amp; Rose live-work-play environment make North Bethesda condos an active resale market where presentation-ready flooring commands a meaningful premium.
        </div>

        <div className="cta-banner">
          <h2>Get a Free Flooring Estimate in North Bethesda</h2>
          <p>We&apos;re based here. We&apos;ll visit your North Bethesda condo or home, confirm subfloor type, check your building&apos;s HOA acoustic rules, and give you a detailed estimate — free of charge, no obligation. Fastest response time in the area.</p>
          <Link href="/contact-us" className="cta-btn">Schedule Free Flooring Consultation →</Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
        </div>

        <h2>What North Bethesda Homeowners &amp; Condo Owners Say About DMV-GC Group</h2>
        <div className="review-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;We replaced the builder carpet in our Pike &amp; Rose condo with 7-inch white oak LVP. DMV-GC Group obtained our building&apos;s HOA flooring requirements before the consultation ended, specified the correct acoustic underlayment for our building&apos;s IIC minimum, coordinated the freight elevator reservation with building management, and installed everything in two days. Not one issue with the condo association.&quot;</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">Pike &amp; Rose, North Bethesda MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;We asked about solid hardwood for our White Flint high-rise unit. DMV-GC Group explained clearly why it&apos;s not possible on a concrete slab — nail-down won&apos;t work and glued-down solid hardwood fails over seasonal cycles. They specified 5-inch engineered white oak glued with moisture-blocking adhesive. It looks exactly like solid hardwood. We&apos;re glad someone told us the truth before we ordered the wrong material.&quot;</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">White Flint, North Bethesda MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;We have a Wildwood colonial and did the full flooring upgrade — 5-inch white oak on the main level, LVP in the kitchen and lower family room. DMV-GC Group is headquartered around the corner from us. The crew was on-site faster than any contractor we&apos;ve used in Montgomery County. The oak-to-LVP transition at the kitchen entry is seamless — same warm tone, zero visual gap between materials.&quot;</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">Wildwood, North Bethesda MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;We had Carrara marble tile installed in our condo primary bathroom. DMV-GC Group tested the slab moisture before specifying the tile adhesive — elevated moisture required a modified adhesive mortar rather than standard thin-set. The tile was set with lippage control and sealed on completion. No tile movement two years later. The moisture testing before the spec was made is what other contractors skip.&quot;</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">North Bethesda Condo, MD</span></div>
          </div>
        </div>

        <div className="highlight">
          <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> North Bethesda homeowners and condo owners trust DMV-GC Group — the contractor headquartered in the neighborhood — for flooring projects that specify the right material for each subfloor type, comply with condo HOA acoustic rules before materials are ordered, coordinate building access professionally, and deliver results that hold up in North Bethesda&apos;s active condo and single-family resale market.</p>
        </div>

        <h2>Serving All North Bethesda, MD Communities for Flooring</h2>
        <div className="areas-grid">
          <span className="area-pill">Pike &amp; Rose</span>
          <span className="area-pill">White Flint</span>
          <span className="area-pill">Wildwood</span>
          <span className="area-pill">Luxmanor</span>
          <span className="area-pill">Nicholson Lane Area</span>
          <span className="area-pill">Tuckerman Lane</span>
          <span className="area-pill">Grosvenor Area</span>
          <span className="area-pill">Grand Park</span>
          <span className="area-pill">Marinelli Road</span>
          <span className="area-pill">Rockville Pike Corridor</span>
        </div>

        <div className="nearby-box">
          <h3>Also serving Bethesda, MD — immediately south of North Bethesda</h3>
          <p>Bethesda&apos;s 1940s–60s colonials and split-levels are DMV-GC Group&apos;s next stop south. Same old-home flooring expertise, same honest refinish vs. replace approach, same commitment to specifying the right material for each home&apos;s actual construction conditions. <Link href="/service/flooring-remodeling">View our full flooring service page →</Link></p>
        </div>

        <h2>Frequently Asked Questions — Flooring in North Bethesda, MD</h2>
        <Accordion defaultActiveKey="0" flush>
          {faqData.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <div className="internal-links">
          <h2>Explore Our Other Services in North Bethesda, MD</h2>
          <ul>
            <li><Link href="/service/kitchen-remodeling/north-bethesda-md">Kitchen Remodeling in North Bethesda, MD</Link></li>
            <li><Link href="/service/bathroom-remodeling/north-bethesda-md">Bathroom Remodeling in North Bethesda, MD</Link></li>
            <li><Link href="/service/basement-remodeling/north-bethesda-md">Basement Remodeling in North Bethesda, MD</Link></li>
            <li><Link href="/service/adu/north-bethesda-md">ADU Construction in North Bethesda, MD</Link></li>
            <li><Link href="/service/decks/north-bethesda-md">Deck Building in North Bethesda, MD</Link></li>
            <li><Link href="/service/home-additions">Home Additions in North Bethesda, MD</Link></li>
          </ul>
        </div>

        <div className="cta-banner">
          <h2>Ready to Transform Your North Bethesda Home or Condo&apos;s Floors?</h2>
          <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free consultation. We&apos;re headquartered at Grand Park Ave — your local flooring contractor who knows Pike &amp; Rose condos, Wildwood colonials, and every building type in between.</p>
          <Link href="/contact-us" className="cta-btn">Get Free Flooring Estimate in North Bethesda →</Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
        </div>
      </div>
    </div>
  );
};

export default NorthBethesdaMD;
