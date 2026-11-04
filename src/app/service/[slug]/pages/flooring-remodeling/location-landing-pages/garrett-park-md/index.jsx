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
        "postalCode": "20896",
        "addressCountry": "US"
      },
      "areaServed": { "@type": "City", "name": "Garrett Park", "sameAs": "https://en.wikipedia.org/wiki/Garrett_Park,_Maryland" },
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "MHIC License #156178" },
        { "@type": "EducationalOccupationalCredential", "name": "DLCP License #410526000209" }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "97", "bestRating": "5" },
      "priceRange": "$$$"
    },
    {
      "@type": "Service",
      "name": "Flooring Installation in Garrett Park, MD",
      "serviceType": "Flooring Installation",
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Garrett Park" },
      "description": "Full-service flooring installation, refinishing, and replacement in Garrett Park, MD. Original hardwood refinishing for 1900s–1940s bungalows and colonials in Garrett Park's National Register Historic District — with old-home subfloor expertise, crawlspace moisture awareness, and the authentic material choices that Garrett Park's historic character deserves.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "3", "maxPrice": "18", "priceCurrency": "USD", "unitCode": "SQFT" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Flooring", "item": "https://www.dmv-gc.com/service/flooring-remodeling" },
        { "@type": "ListItem", "position": 4, "name": "Garrett Park, MD", "item": "https://www.dmv-gc.com/service/flooring-remodeling/garrett-park-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does flooring installation cost in Garrett Park, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Flooring installation in Garrett Park, MD typically costs $3–$18 per square foot installed depending on material. Hardwood refinishing — the most appropriate and most cost-effective first choice for Garrett Park's 1900s–1940s bungalows — costs $3–$6 per square foot. New hardwood installation runs $8–$15 per square foot. LVP installation costs $5–$10 per square foot. Porcelain tile costs $8–$18 per square foot. Older Garrett Park homes frequently have crawlspace moisture conditions and diagonal plank subfloors that require assessment before any material is specified — DMV-GC Group evaluates both during the free in-home consultation and includes all required prep in the itemized estimate."
          }
        },
        {
          "@type": "Question",
          "name": "Can original hardwood floors in Garrett Park's historic bungalows be refinished?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usually yes — and for Garrett Park's 1900s–1940s bungalows and colonials, refinishing original hardwood is almost always the right first choice when the wood is structurally sound. Garrett Park's oldest homes were floored with old-growth Douglas fir or oak strip that is denser and more dimensionally stable than modern plantation-grown equivalents. Original floors that have survived 80–100 years in a Garrett Park bungalow carry the authentic material character of the home — character that no new flooring product can replicate. DMV-GC Group checks remaining wood thickness above the tongue before recommending refinishing. When viable — as it often is — refinishing preserves what is genuinely irreplaceable at $3–$6 per square foot, compared to $8–$15 for new hardwood that will never match the density or grain of the original."
          }
        },
        {
          "@type": "Question",
          "name": "Does Garrett Park's National Register Historic District designation affect interior flooring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Garrett Park's National Register Historic District designation and the Town's historic preservation guidelines apply to exterior changes visible from public streets — facade modifications, window replacements, additions, and similar exterior work. Interior renovations — including flooring — are not reviewed or regulated by historic preservation authorities. A Garrett Park homeowner can install any flooring type inside their home without historic review. The reason to choose authentic, character-appropriate flooring in Garrett Park is not regulatory but practical: the original wide-plank or strip hardwood in these homes is part of what makes them worth owning, and preserving or authentically restoring it adds value that generic modern replacements do not."
          }
        },
        {
          "@type": "Question",
          "name": "What flooring works best in Garrett Park's older homes with crawlspace foundations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Garrett Park's pre-1950 homes frequently have crawlspace foundations rather than full basements. Crawlspace moisture — especially seasonally elevated in Garrett Park's shaded, wooded lots — can cause solid hardwood on the first floor to cup, squeak, and buckle if the crawlspace is not properly managed. DMV-GC Group assesses crawlspace moisture conditions before specifying first-floor flooring. Where moisture is confirmed manageable, solid or engineered hardwood on the main floor is viable. Where crawlspace moisture is elevated, engineered hardwood (more dimensionally stable) or LVP (entirely moisture-immune) is the honest recommendation. We never recommend solid hardwood over a high-moisture crawlspace regardless of how authentic it would be — flooring that fails in two seasons is not authentic, it is wrong."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for flooring installation in Garrett Park, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC license (#156178) — required for all home improvement work in Garrett Park. When flooring is part of a broader renovation requiring a Town of Garrett Park building permit, DMV-GC Group handles the permit application with the Town's permit office at 4600 Oxford Street — the same Town permit process we navigate for deck and ADU projects in Garrett Park. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every Garrett Park flooring project."
          }
        }
      ]
    }
  ]
};

const GarrettParkMD = () => {
  const { setActiveMenuItem } = useMyContext();

  useEffect(() => {
    setActiveMenuItem("service");
  }, []);

  const faqData = [
    {
      question: "How much does flooring installation cost in Garrett Park, MD?",
      answer: `Flooring in Garrett Park typically costs $3–$22 per square foot depending on material and scope. Hardwood refinishing — the most common and most appropriate project for Garrett Park's historic homes — costs $3–$6 per square foot. A screen-and-recoat (finish layer only) costs $1.50–$3 per square foot. New solid hardwood installation runs $8–$15 per square foot. Engineered hardwood runs $6–$12. LVP costs $5–$10 per square foot. Porcelain tile with uncoupling membrane runs $10–$20 per square foot. Period hex or subway tile for bathrooms runs $12–$22 per square foot. Squeak repair is priced per location and included in the pre-refinishing assessment. DMV-GC Group provides free itemized estimates after the in-home assessment.`
    },
    {
      question: "Will refinishing remove all the character from my original Garrett Park floors?",
      answer: `No — when done correctly, refinishing restores the floor's appearance while preserving what makes it distinctive. The grain, density, and patina of old-growth oak or fir are properties of the wood itself, not the finish on top. Sanding removes the worn finish and a thin layer of wood surface — the old-growth character remains in every board. A natural or warm stain with a matte or satin finish (rather than the high-gloss polyurethane of the 1990s) actually reveals the wood's grain and character more authentically than the heavy finish coats that were applied in previous decades. Many Garrett Park homeowners are surprised at how much more beautiful their original floors look after refinishing than they imagined.`
    },
    {
      question: "Does Garrett Park's historic district prevent me from changing my flooring?",
      answer: `No. Garrett Park's National Register Historic District designation governs exterior changes visible from public streets, not interior renovations. You can install any flooring material inside your home without historic review or approval. When flooring is part of a broader renovation requiring a building permit, the Town of Garrett Park issues permits at 4600 Oxford Street — DMV-GC Group handles Town permit submissions for applicable renovation scopes. Flooring-only projects typically do not require a building permit.`
    },
    {
      question: "Why does DMV-GC Group check crawlspace moisture before recommending hardwood in Garrett Park?",
      answer: `Garrett Park's wooded, shaded lots create crawlspace humidity levels that can be higher than comparable properties in less shaded neighborhoods. Elevated crawlspace moisture causes solid hardwood on the first floor to absorb moisture, swell in summer, contract in winter, and over time cup, buckle, and develop persistent squeaks. This failure mode is not related to installation quality — it is a material mismatch with the actual conditions. Engineered hardwood is more dimensionally stable under these conditions; LVP is entirely moisture-immune. DMV-GC Group checks crawlspace moisture before specifying any first-floor flooring material in Garrett Park and recommends the material that will actually perform well in that home's specific conditions.`
    },
    {
      question: "Is DMV-GC Group licensed for flooring in Garrett Park, MD?",
      answer: `Yes. DMV-GC Group holds Maryland MHIC license #156178 — required for all home improvement work in Garrett Park. When renovation scope requires a Town of Garrett Park building permit, we handle the application with the Town permit office at 4600 Oxford Street. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every Garrett Park flooring project.`
    }
  ];

  return (
    <div className="city-service-detail-page flooring-garrett-park-md">
      <div className="container">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />

        <nav className="breadcrumb">
          <Link href="/">Home</Link><span>›</span>
          <Link href="/services">Services</Link><span>›</span>
          <Link href="/service/flooring-remodeling">Flooring Installation</Link><span>›</span>
          <span>Garrett Park, MD</span>
        </nav>

        <div className="hero">
          <span className="hero-location-tag">📍 Serving Garrett Park, MD</span>
          <h1>Flooring Installation &amp; Replacement in Garrett Park, MD</h1>
          <div className="hero-meta">
            <span className="badge hist">🏛️ National Register Historic District</span>
            <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
            <span className="badge">✓ MHIC Licensed &amp; Insured</span>
            <span className="badge">✓ 1-Year Warranty</span>
            <span className="badge">✓ Free In-Home Consultation</span>
            <span className="badge dark">📞 +1 240-730-1292</span>
          </div>
        </div>

        <div className="historic-banner">
          <div className="icon">🏠</div>
          <div>
            <h3>Garrett Park&apos;s Historic Bungalows Have Original Hardwood That Is Genuinely Irreplaceable — and Almost Always the Right Floor to Restore Rather Than Remove</h3>
            <p>Garrett Park is a National Register Historic District — one of the few fully incorporated towns in Maryland whose entire residential character is recognized at the federal level for its historic significance. The 1900s–1940s bungalows, cottages, and colonial revivals along Strathmore Avenue, Rokeby Avenue, and the streets that run perpendicular to the old Baltimore and Ohio Railroad corridor were built with old-growth Douglas fir or oak strip hardwood that has a density, grain character, and dimensional stability that no modern lumber — however high-grade — can match. When a Garrett Park homeowner lifts the carpet in a 1922 bungalow and finds the original floor beneath it, they have found something that took a century to mature and cannot be replicated at any price. DMV-GC Group&apos;s first recommendation is always to assess whether that original floor can be refinished — and in most cases, it can. When new flooring is required, we select materials that complement Garrett Park&apos;s historic character rather than competing with it.</p>
          </div>
        </div>

        <div className="intro-box">
          Looking for a trusted <strong>flooring contractor in Garrett Park, MD</strong>? DMV General Contracting Group installs, replaces, and refinishes all types of flooring for Garrett Park homeowners — with a particular specialty in the original hardwood refinishing that the community&apos;s historic bungalows most frequently need. Garrett Park&apos;s housing is almost uniformly pre-1950 construction — the same era as Kensington&apos;s older streets, but within a defined historic district that gives the community a collective architectural identity worth preserving. Diagonal plank subfloors, crawlspace foundations, original oak and fir strip hardwood under decades of carpet — these are the conditions DMV-GC Group&apos;s team has assessed and worked with throughout Garrett Park and adjacent communities. We understand what the floors in these homes actually need: an honest evaluation, a quality refinish when the wood supports it, and careful new material selection when it does not.
        </div>

        <div className="trust-bar">
          <div className="trust-item">
            <div className="icon">🏛️</div>
            <strong>Historic District Expertise</strong>
            <span>1900s–1940s bungalow flooring specialists</span>
          </div>
          <div className="trust-item">
            <div className="icon">🪵</div>
            <strong>Original Hardwood Refinishing</strong>
            <span>Old-growth oak &amp; fir preserved where viable</span>
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

        <h2>Flooring Services We Offer in Garrett Park, MD</h2>
        <p>
          DMV General Contracting Group provides a full range of flooring services in Garrett Park — with the old-home construction expertise that the community&apos;s 1900s–1940s housing stock requires at every step.
        </p>

        <div className="service-list">
          <div className="service-item">Original Hardwood Refinishing &amp; Resanding</div>
          <div className="service-item">Old-Growth Fir &amp; Oak Floor Restoration</div>
          <div className="service-item">Hardwood Floor Installation (Solid &amp; Engineered)</div>
          <div className="service-item">Custom Stain Color &amp; Matte/Satin Finish</div>
          <div className="service-item">Diagonal Plank Subfloor Assessment &amp; Repair</div>
          <div className="service-item">Crawlspace Moisture Assessment (Pre-Install)</div>
          <div className="service-item">Luxury Vinyl Plank (LVP) Installation</div>
          <div className="service-item">Porcelain &amp; Ceramic Tile Installation</div>
          <div className="service-item">Uncoupling Membrane (Tile on Old Subfloors)</div>
          <div className="service-item">Natural Stone Tile (Marble, Travertine)</div>
          <div className="service-item">Carpet Installation &amp; Replacement</div>
          <div className="service-item">Whole-Home Flooring Assessment &amp; Replacement</div>
          <div className="service-item">Stair Tread &amp; Riser Replacement</div>
          <div className="service-item">Flooring as Part of Full Kitchen / Bath Remodel</div>
        </div>

        <div className="author-box">
          <div className="author-avatar">🪵</div>
          <div className="author-info">
            <h4>About DMV-GC Group — Garrett Park&apos;s Licensed Flooring Contractor</h4>
            <p>DMV General Contracting Group has completed flooring projects, kitchen remodels, bathroom renovations, ADU conversions, and whole-home renovations throughout Garrett Park&apos;s historic neighborhood. We understand the diagonal plank subfloors, the crawlspace moisture conditions, the old-growth oak and fir strip hardwood, and the care required when working in homes whose character is measured in decades rather than years. We are familiar with Garrett Park&apos;s Town permit process at 4600 Oxford Street for any renovation scope requiring Town approval. MHIC licensed, insured, and backed by a 1-year workmanship warranty on every project.</p>
            <div className="author-creds">
              <span className="cred">MHIC #156178</span>
              <span className="cred">Historic District Knowledge</span>
              <span className="cred">Original Hardwood Specialists</span>
              <span className="cred">Diagonal Plank Subfloor Expertise</span>
              <span className="cred">4.9★ Rated</span>
              <span className="cred">1-Year Warranty</span>
            </div>
          </div>
        </div>

        <h2>What Garrett Park&apos;s 1900s–1940s Construction Means for Your Flooring Project</h2>
        <p>
          Working in Garrett Park&apos;s historic homes requires understanding the construction conditions that age has created. Every one of the following characteristics is something DMV-GC Group assesses before any material is specified or ordered.
        </p>

        <div className="oldhouse-grid">
          <div className="oldhouse-card">
            <h3>🪵 Old-Growth Hardwood — What Makes It Special</h3>
            <p>The original strip hardwood in Garrett Park&apos;s 1900s–1940s bungalows was cut from old-growth forests — trees that grew slowly over centuries, producing wood with tight annual rings, high density, and extraordinary dimensional stability compared to modern plantation-grown lumber. A 1920s Garrett Park bungalow&apos;s original oak or fir floor is not just old — it is made from material that is no longer commercially available at any price. When that floor is structurally sound and has remaining thickness for sanding, refinishing it is not just cost-effective — it preserves something genuinely irreplaceable.</p>
          </div>
          <div className="oldhouse-card">
            <h3>📐 Diagonal Plank Subfloor</h3>
            <p>Garrett Park&apos;s pre-1950 homes have diagonal plank subfloors — 1×6 or 1×8 boards laid at 45 degrees over the floor joists, the pre-plywood construction standard. This subfloor type is structurally sound but has board-to-board joints that move seasonally. Tile installation over diagonal plank subfloor without an uncoupling membrane leads to cracked tiles within a few years. DMV-GC Group installs Schlüter DITRA or equivalent uncoupling membrane as a standard step on every tile project in Garrett Park homes — the same protocol as in Kensington&apos;s equally aged housing stock.</p>
          </div>
          <div className="oldhouse-card">
            <h3>💧 Crawlspace Moisture</h3>
            <p>Garrett Park&apos;s wooded, shaded lots — many of them adjacent to the old rail corridor green space — create crawlspace conditions that can be more humid than comparable lots in less shaded neighborhoods. Crawlspace moisture causes solid hardwood on the first floor to cup and squeak regardless of installation quality. DMV-GC Group checks crawlspace moisture before specifying first-floor hardwood. Where moisture is elevated, engineered hardwood or LVP is the honest recommendation, even when solid hardwood would be more authentic to the period. Flooring that fails within two seasons is never the right choice.</p>
          </div>
          <div className="oldhouse-card">
            <h3>🔍 Remaining Hardwood Thickness</h3>
            <p>Original ¾-inch strip hardwood loses a thin layer with each sanding. After 80–100 years and potentially one or two previous refinishes, remaining thickness above the tongue may be ½ inch, 3/8 inch, or less. DMV-GC Group checks remaining thickness with a gauge before recommending refinishing — we never recommend sanding a floor that does not have sufficient material remaining. When thickness is marginal, we advise on options: a light screen-and-recoat that removes only the finish layer (not wood), versus a full sand that would deplete the remaining thickness.</p>
          </div>
          <div className="oldhouse-card">
            <h3>🔧 Squeaky Floors — What Causes Them</h3>
            <p>Many Garrett Park bungalows have floors that squeak — and many homeowners assume refinishing will fix the problem. It will not. Squeaks in older Garrett Park homes come from seasonal wood movement at the board-to-subfloor interface, loose subfloor boards, or gaps that have opened between subfloor boards over decades. DMV-GC Group addresses squeak sources before any refinishing begins — re-securing loose subfloor boards from below where crawlspace access allows, and using appropriate fasteners or construction adhesive at squeak points identified from above. A refinished floor that still squeaks is a job half done.</p>
          </div>
          <div className="oldhouse-card">
            <h3>🏠 Renovation Context — Broader Scope Awareness</h3>
            <p>Garrett Park&apos;s oldest homes — those built before 1940 — may also have galvanized plumbing and knob-and-tube wiring that is being addressed as part of a broader renovation. When flooring is installed as part of a kitchen or bathroom remodel that also involves plumbing or electrical work, sequencing matters: flooring goes in after rough-in work but before finish work. DMV-GC Group coordinates flooring with all other trades in-house when the project scope includes multiple systems, ensuring the flooring is not damaged by subsequent tradespeople or installed in the wrong sequence.</p>
          </div>
        </div>

        <h2>Flooring Types We Install in Garrett Park, MD</h2>

        <div className="floor-type-grid">
          <div className="floor-card">
            <span className="floor-label">Almost Always the Right First Choice</span>
            <h3>Original Hardwood Refinishing</h3>
            <p>The most appropriate flooring service for the vast majority of Garrett Park&apos;s historic homes — and the one that delivers the best combination of authenticity, value, and longevity when the original floor is refinishable. DMV-GC Group&apos;s refinishing process for Garrett Park bungalows begins with a thickness check and squeak assessment, proceeds through drum and edge sanding calibrated to the remaining material, offers the full range of stain colors (from natural warm oak to medium walnut tones), and finishes with multiple coats of oil-modified polyurethane or water-based finish in matte or satin sheen. The result is a floor that looks as it would have when the house was built — but without 80 years of wear.</p>
            <div className="floor-meta"><strong>Lifespan:</strong> Extends original floor 20–40 more years &nbsp;|&nbsp; <strong>Cost:</strong> $3–$6/sq ft</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">When Original Is Beyond Refinishing</span>
            <h3>New Solid or Engineered Hardwood</h3>
            <p>When original hardwood has insufficient remaining thickness, significant rot or water damage, or is absent — new hardwood is the right replacement for Garrett Park&apos;s historic rooms. For period authenticity, 2.25-inch or 3-inch strip in white or red oak with a natural to warm stain most closely matches the original flooring character of a Garrett Park bungalow. Wider plank — 4 or 5 inches — is a contemporary upgrade that some homeowners prefer; it does not read as incongruous in a historic home but does not match the original either. Engineered hardwood preferred where crawlspace moisture conditions make solid hardwood&apos;s dimensional movement a concern. Always acclimated to the home before installation.</p>
            <div className="floor-meta"><strong>Lifespan:</strong> 50–100 yrs (solid) · 25–40 yrs (engineered) &nbsp;|&nbsp; <strong>Cost:</strong> $8–$15/sq ft installed</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">Kitchens, Bathrooms &amp; Crawlspace-Adjacent Rooms</span>
            <h3>Luxury Vinyl Plank (LVP)</h3>
            <p>LVP is the practical and correct specification for Garrett Park kitchens, bathrooms, and any first-floor room where crawlspace moisture assessment indicates elevated humidity. 100% waterproof, dimensionally stable regardless of crawlspace conditions, and available in wood-look patterns that complement adjacent hardwood. For Garrett Park homeowners who are concerned about authenticity, LVP in a kitchen or bathroom that was not original to the 1920s floor plan anyway — or in a modern addition — does not compromise the historic character of the home&apos;s original rooms. Premium COREtec or Karndean specified for all Garrett Park LVP projects.</p>
            <div className="floor-meta"><strong>Lifespan:</strong> 20–30 yrs &nbsp;|&nbsp; <strong>Cost:</strong> $5–$10/sq ft installed</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">Bathrooms — Period-Compatible Options</span>
            <h3>Porcelain &amp; Ceramic Tile</h3>
            <p>Tile for Garrett Park bathrooms — with uncoupling membrane as a mandatory step on the diagonal plank subfloor. For period authenticity, classic 3-inch hex tile in white with dark grout, white subway tile with pencil border, or basket-weave mosaic are all historically appropriate for 1920s–1940s bathroom renovations. Large-format contemporary porcelain is also available for homeowners who prefer a more current aesthetic in newer bathroom additions. All tile installations on Garrett Park&apos;s original subfloors receive Schlüter DITRA or equivalent membrane to prevent cracking at the plank joints below.</p>
            <div className="floor-meta"><strong>Lifespan:</strong> 50+ yrs &nbsp;|&nbsp; <strong>Cost:</strong> $8–$18/sq ft installed (incl. membrane)</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">Bedrooms — Where Hardwood Is Absent</span>
            <h3>Carpet</h3>
            <p>Where original hardwood is absent or too degraded to refinish in upper-floor bedrooms, quality carpet over a good pad is a practical and comfortable alternative. Warm neutral tones in wool-blend or quality nylon are appropriate to Garrett Park&apos;s traditional interior character. Carpet also naturally addresses any noise concern between floors in homes where the original subfloor has gaps that transmit sound. For homeowners who want hardwood throughout including bedrooms, engineered hardwood over the original subfloor is the more moisture-resilient choice than solid where upper-floor conditions are uncertain.</p>
            <div className="floor-meta"><strong>Lifespan:</strong> 10–15 yrs &nbsp;|&nbsp; <strong>Cost:</strong> $4–$10/sq ft installed</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">Budget Option — Secondary Spaces</span>
            <h3>Laminate</h3>
            <p>A cost-effective hard-floor option for Garrett Park secondary spaces, ADU lower-level areas, or rooms where budget is the primary constraint. Not recommended for kitchens, bathrooms, or any moisture-exposure zone. Modern laminate in wood-look patterns provides acceptable appearance at lower cost than hardwood or LVP. For Garrett Park&apos;s historic main rooms, laminate is never the right choice — the original floors deserve better. For a back bedroom, home office, or lower-level ADU space, laminate can be a practical solution.</p>
            <div className="floor-meta"><strong>Lifespan:</strong> 15–25 yrs &nbsp;|&nbsp; <strong>Cost:</strong> $4–$8/sq ft installed</div>
          </div>
        </div>

        <h2>Garrett Park&apos;s National Register Historic District — What It Means (and Doesn&apos;t Mean) for Flooring</h2>

        <div className="spec-box">
          <h3>🏛️ Historic District — Interior Flooring Is Not Regulated</h3>
          <ul>
            <li><strong>Interior flooring is not reviewed:</strong> Garrett Park&apos;s National Register Historic District designation and the Town&apos;s historic preservation guidelines govern exterior changes visible from public streets — additions, facade modifications, window replacements, roofing, and similar exterior work. Interior renovations, including flooring of any type, are not subject to historic review or approval. A Garrett Park homeowner can install LVP, new hardwood, or any other flooring type inside their home without any historic preservation process.</li>
            <li><strong>Town of Garrett Park permits for broader renovation scope:</strong> If flooring installation is part of a broader renovation requiring a building permit — such as a kitchen remodel that modifies the floor plan, a bathroom addition, or a structural change — the Town of Garrett Park issues its own building permits at 4600 Oxford Street, not Montgomery County DPS. DMV-GC Group handles Town permit submissions for all applicable Garrett Park renovation scopes. Flooring-only projects typically do not require a building permit.</li>
            <li><strong>The reason to choose authentic flooring is not regulatory — it is practical:</strong> The original hardwood in a Garrett Park historic home adds value, authenticity, and character that no regulation requires but that every informed buyer recognizes. Homeowners who restore original floors rather than replacing them with modern substitutes routinely receive positive buyer response at resale. The motivation for choosing authentic, character-appropriate flooring in Garrett Park is the home&apos;s long-term value — not a permit requirement.</li>
            <li><strong>Historic floor replacement considerations:</strong> When original flooring must be replaced — due to irreparable damage, insufficient thickness, or absence — DMV-GC Group recommends materials that are compatible with the home&apos;s historic character rather than incongruous with it. Strip hardwood in oak or fir in natural to warm tones is the most period-compatible new hardwood choice for Garrett Park bungalows. Contemporary wide-plank or highly processed finishes are available but are not the first recommendation in a historic district home.</li>
          </ul>
        </div>

        <h2>Refinishing vs. Replacing Original Garrett Park Hardwood — A Direct Comparison</h2>

        <div className="highlight">
          <p>🪵 <strong>The Central Question for Every Garrett Park Flooring Project:</strong> Is the original hardwood refinishable? If yes — refinish. The old-growth oak or fir in a Garrett Park bungalow has a density, grain character, and patina that cannot be reproduced. Refinishing at $3–$6 per square foot preserves it. Replacing it at $8–$15 per square foot with modern lumber produces a floor that looks new but lacks the material character of what was there.</p>
        </div>

        <div className="table-responsive">
          <div className="table-holder">
            <table className="room-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Refinishing Original Floor</th>
                  <th>New Hardwood Installation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Cost</strong></td>
                  <td>$3–$6/sq ft</td>
                  <td>$8–$15/sq ft installed</td>
                </tr>
                <tr>
                  <td><strong>Material authenticity</strong></td>
                  <td>Old-growth density — not reproducible</td>
                  <td>Modern plantation-grown lumber</td>
                </tr>
                <tr>
                  <td><strong>Disruption</strong></td>
                  <td>3–5 days including dry time</td>
                  <td>5–8 days including subfloor prep</td>
                </tr>
                <tr>
                  <td><strong>Stain flexibility</strong></td>
                  <td>Full range — natural to dark</td>
                  <td>Full range — same or wider</td>
                </tr>
                <tr>
                  <td><strong>Squeak resolution</strong></td>
                  <td>Addressed before sanding — not from sanding itself</td>
                  <td>New installation — fresh start</td>
                </tr>
                <tr>
                  <td><strong>Environmental impact</strong></td>
                  <td>Low — no demolition, no new lumber</td>
                  <td>Higher — demolition waste + new lumber</td>
                </tr>
                <tr>
                  <td><strong>Right when</strong></td>
                  <td>Sufficient thickness, structurally sound, manageable moisture</td>
                  <td>Too thin, damaged, absent, or plank width change desired</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>Addressing Squeaky Floors in Garrett Park Bungalows — Before Refinishing Begins</h2>
        <p>
          Squeaky floors are among the most common complaints in Garrett Park&apos;s historic homes — and among the most misunderstood. A refinishing job that does not address the squeak sources first leaves a beautiful-looking floor that still creaks underfoot. Here is what DMV-GC Group does before any sanding begins:
        </p>

        <div className="tip">
          🔧 <strong>Squeak Assessment &amp; Pre-Refinishing Repair:</strong> We identify squeak locations by walking the floor with the homeowner and mapping each one. Where crawlspace access is available, we can access the subfloor from below to re-secure loose boards and add blocking where needed — the most effective and least invasive squeak repair method. Where crawlspace access is not sufficient, we use a combination of long screws driven through the subfloor into the joists from above (countersunk and filled before sanding) and construction adhesive at seasonal-gap locations. Squeaks from seasonal wood movement — boards expanding and contracting at their edges — are minimized but not always eliminable in 100-year-old construction; we are honest about what is treatable and what is a permanent characteristic of the building&apos;s age.
        </div>

        <h2>Our Flooring Installation Process in Garrett Park</h2>

        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-content">
              <h3>Free In-Home Consultation — Historic Home Assessment</h3>
              <p>We visit your Garrett Park home, walk the existing floors to identify squeak locations, check remaining hardwood thickness where refinishing is being considered, assess crawlspace moisture if accessible, and review subfloor condition in any area where tile or LVP is planned. For homes undergoing broader renovation simultaneously, we discuss flooring sequencing within the overall project timeline. No cost, no obligation.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-content">
              <h3>Honest Refinish vs. Replace Recommendation</h3>
              <p>Based on our assessment, we give you a direct recommendation: refinish the original floors if thickness, moisture, and structural condition support it — replace with the most period-compatible new hardwood if not. We bring stain samples to show color options in your home&apos;s specific light before any commitment is made. We present the full cost of each path so you can make an informed decision.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-content">
              <h3>Squeak Repair &amp; Subfloor Preparation</h3>
              <p>Squeak sources addressed from below (crawlspace) or above as conditions allow. Loose subfloor boards re-secured. For tile areas: uncoupling membrane installed over the diagonal plank subfloor. For LVP areas: subfloor surface cleaned, any high spots leveled. All subfloor preparation completed before any finish material is applied or installed.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-content">
              <h3>Refinishing or New Installation</h3>
              <p>For refinishing: drum and edge sanding at appropriate grit sequence for remaining wood thickness, hand scraping in corners and against baseboards, stain application with your approved color, and multiple coats of finish with dry time between. For new installation: hardwood acclimated 3–7 days, then nail-down with appropriate fastener schedule, or engineered hardwood where moisture conditions require. Tile and LVP installed per zone as specified.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">5</div>
            <div className="step-content">
              <h3>Trim, Transitions &amp; Final Walkthrough</h3>
              <p>New baseboards, shoe molding, threshold and transition strips, and stair nosings where applicable. Thorough cleanup of all sanding dust and finish residue — particularly important in historic homes where dust migration into historic millwork and trim is a concern. Final walkthrough with you before close-out.</p>
            </div>
          </div>
        </div>

        <h2>Flooring Installation Cost in Garrett Park, MD</h2>

        <div className="table-responsive">
          <div className="table-holder">
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Flooring Type</th>
                  <th>Installed Cost (per sq ft)</th>
                  <th>700 Sq Ft Estimate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hardwood Refinishing (original floors)</td>
                  <td>$3 – $6</td>
                  <td>$2,100 – $4,200</td>
                </tr>
                <tr>
                  <td>Screen &amp; Recoat Only (finish layer only)</td>
                  <td>$1.50 – $3</td>
                  <td>$1,050 – $2,100</td>
                </tr>
                <tr>
                  <td>Solid Hardwood — New Installation (2.25&quot;–3&quot; strip)</td>
                  <td>$8 – $15</td>
                  <td>$5,600 – $10,500</td>
                </tr>
                <tr>
                  <td>Engineered Hardwood (crawlspace moisture safer)</td>
                  <td>$6 – $12</td>
                  <td>$4,200 – $8,400</td>
                </tr>
                <tr>
                  <td>Premium LVP (kitchen, moisture zones)</td>
                  <td>$5 – $10</td>
                  <td>$3,500 – $7,000</td>
                </tr>
                <tr>
                  <td>Porcelain Tile with Uncoupling Membrane</td>
                  <td>$10 – $20</td>
                  <td>$7,000 – $14,000</td>
                </tr>
                <tr>
                  <td>Period Hex or Subway Tile (bathroom)</td>
                  <td>$12 – $22</td>
                  <td>$8,400 – $15,400</td>
                </tr>
                <tr>
                  <td>Carpet (bedrooms where hardwood absent)</td>
                  <td>$4 – $10</td>
                  <td>$2,800 – $7,000</td>
                </tr>
                <tr>
                  <td>Squeak Repair (pre-refinishing add-on)</td>
                  <td>$150 – $500 per zone</td>
                  <td>Varies by number of locations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="note">
          📌 <strong>Screen &amp; Recoat Option:</strong> If your Garrett Park floors have a sound finish that is simply dull, scratched at the surface, or faded — but the finish has not worn through to bare wood — a screen-and-recoat is the lightest-touch option. Screening abrades only the finish layer (not the wood), then a fresh finish coat is applied. Cost is $1.50–$3 per square foot versus $3–$6 for a full sand-and-refinish. DMV-GC Group identifies which approach is appropriate during the consultation — screen-and-recoat is only valid when the existing finish is intact everywhere; if bare wood spots are present, a full sand is required.
        </div>

        <h2>Why Garrett Park Homeowners Choose DMV-GC Group for Flooring</h2>

        <div className="why-grid">
          <div className="why-box">
            <div className="icon">🏛️</div>
            <strong>Historic Home First Approach</strong>
            <span>Original floors assessed for refinishability before any replacement is discussed — preserving what is genuinely irreplaceable</span>
          </div>
          <div className="why-box">
            <div className="icon">🔧</div>
            <strong>Squeak Repair Before Refinishing</strong>
            <span>Squeak sources addressed from crawlspace or above before sanding — not ignored and buried under new finish</span>
          </div>
          <div className="why-box">
            <div className="icon">📐</div>
            <strong>Diagonal Plank &amp; Crawlspace Expertise</strong>
            <span>Old-home subfloor conditions understood — uncoupling membrane for tile, moisture assessment before hardwood specification</span>
          </div>
          <div className="why-box">
            <div className="icon">🪵</div>
            <strong>Period-Compatible Material Selection</strong>
            <span>New flooring chosen to complement Garrett Park&apos;s historic character — not generic contemporary products in a 1922 bungalow</span>
          </div>
          <div className="why-box">
            <div className="icon">🛡️</div>
            <strong>MHIC Licensed &amp; Warrantied</strong>
            <span>Maryland MHIC #156178. Fully bonded, insured, 1-year workmanship warranty on every Garrett Park flooring project</span>
          </div>
          <div className="why-box">
            <div className="icon">⭐</div>
            <strong>4.9-Star Rated</strong>
            <span>97+ verified reviews. Garrett Park clients specifically cite honest assessment of original floors and quality of refinishing craftsmanship</span>
          </div>
        </div>

        <h2>What Garrett Park Homeowners Say About DMV-GC Group</h2>

        <div className="review-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;Our 1924 Garrett Park bungalow had original fir floors under 40-year-old carpet in the living room, dining room, and hallway. DMV-GC Group checked the thickness, confirmed they were refinishable, and addressed two persistent squeaks from below the crawlspace before sanding. The floors came out with a warm natural tone and satin finish — exactly right for the house. Nothing new could match this wood.&quot;</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">Strathmore Avenue, Garrett Park MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;We wanted hex tile in our 1930s bathroom to match the period. DMV-GC Group installed it over the original diagonal plank subfloor with the DITRA uncoupling membrane. It&apos;s been three years and not one cracked tile. They explained that without the membrane, the tile would have failed within a year over our old subfloor. The detail knowledge of old-home construction made the difference.&quot;</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">Rokeby Avenue, Garrett Park MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;Our 1938 colonial had a crawlspace with elevated moisture. DMV-GC Group checked it during the consultation and recommended engineered hardwood rather than solid for the main floor — said solid would cup within a season or two given our conditions. The engineered hardwood they installed has been there four years with zero movement, zero squeaking. The right call made before the project started.&quot;</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">Keswick Street, Garrett Park MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;We did the flooring as part of our kitchen renovation — LVP for the kitchen, refinishing for the adjacent dining room hardwood. DMV-GC Group coordinated both, installed the LVP after the cabinets were in, and matched the LVP color to the newly refinished dining room floor exactly. The transition between the two rooms looks completely intentional. One team, no conflicts.&quot;</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">Garrett Park, MD</span></div>
          </div>
        </div>

        <div className="highlight">
          <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Garrett Park homeowners trust DMV-GC Group for flooring projects that begin with the honest question — can the original floors be restored? — address old-home construction conditions correctly, and deliver results that honor the character of a National Register Historic District community.</p>
        </div>

        <div className="cta-banner">
          <h2>Get a Free Flooring Estimate in Garrett Park</h2>
          <p>We&apos;ll visit your Garrett Park home, assess your original floors honestly, check crawlspace moisture, identify squeak sources, and give you a clear refinish vs. replace recommendation — free of charge, no obligation.</p>
          <Link href="/contact-us" className="cta-btn">Schedule Free Flooring Consultation →</Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
        </div>

        <h2>Serving Garrett Park and Surrounding Areas for Flooring</h2>

        <div className="areas-grid">
          <span className="area-pill">Garrett Park Historic District</span>
          <span className="area-pill">Strathmore Avenue</span>
          <span className="area-pill">Rokeby Avenue</span>
          <span className="area-pill">Keswick Street</span>
          <span className="area-pill">Kenilworth Avenue</span>
          <span className="area-pill">Kensington</span>
          <span className="area-pill">North Bethesda</span>
          <span className="area-pill">Rockville</span>
          <span className="area-pill">Chevy Chase</span>
          <span className="area-pill">Silver Spring</span>
        </div>

        <div className="nearby-box">
          <h3>Also serving Kensington, MD — directly south of Garrett Park on the MARC Brunswick Line</h3>
          <p>Kensington&apos;s 1920s–40s bungalows share the same original hardwood floors, diagonal plank subfloors, and crawlspace conditions as Garrett Park&apos;s historic homes. DMV-GC Group applies the same old-home flooring expertise in Kensington with the same honest refinish-first approach. <Link href="/service/flooring-remodeling/kensington-md">View our Kensington flooring page →</Link></p>
        </div>

        <h2>Frequently Asked Questions — Flooring in Garrett Park, MD</h2>
        <Accordion defaultActiveKey="0" flush>
          {faqData.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <div className="internal-links">
          <h2>Explore Our Other Services in Garrett Park, MD</h2>
          <ul>
            <li><Link href="/service/kitchen-remodeling/garrett-park-md">Kitchen Remodeling in Garrett Park, MD</Link></li>
            <li><Link href="/service/bathroom-remodeling/garrett-park-md">Bathroom Remodeling in Garrett Park, MD</Link></li>
            <li><Link href="/service/basement-remodeling/garrett-park-md">Basement Remodeling in Garrett Park, MD</Link></li>
            <li><Link href="/service/adu/garrett-park-md">ADU Construction in Garrett Park, MD</Link></li>
            <li><Link href="/service/decks/garrett-park-md">Deck Building in Garrett Park, MD</Link></li>
            <li><Link href="/service/home-additions">Home Additions in Garrett Park, MD</Link></li>
          </ul>
        </div>

        <div className="cta-banner">
          <h2>Ready to Restore Your Garrett Park Home&apos;s Floors?</h2>
          <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. We&apos;ll assess your original floors with the respect they deserve — and tell you honestly whether restoration or replacement is the right path for your historic home.</p>
          <Link href="/contact-us" className="cta-btn">Get Free Flooring Estimate in Garrett Park →</Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
        </div>
      </div>
    </div>
  );
};

export default GarrettParkMD;
