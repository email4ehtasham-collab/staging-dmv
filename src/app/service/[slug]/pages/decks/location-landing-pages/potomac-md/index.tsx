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
      "description": "Licensed deck builder serving Potomac, MD. Specializing in custom multi-level composite decks, pool decks, and fully equipped outdoor kitchens for Potomac estate properties — including Avenel, Travilah, and the River Road corridor.",
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
        { "@type": "City", "name": "Cabin John" }
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "MHIC License", "credentialCategory": "Maryland Home Improvement Contractor License" }
      ],
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "97", "bestRating": "5" },
      "priceRange": "$$$$"
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/decks/potomac-md#service",
      "serviceType": "Deck Building",
      "name": "Deck Building in Potomac, MD",
      "alternateName": ["Custom Deck Construction", "Composite Deck", "Pool Deck", "Outdoor Kitchen", "Multi-Level Deck"],
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Potomac", "sameAs": "https://en.wikipedia.org/wiki/Potomac,_Maryland" },
      "description": "Custom deck building in Potomac, MD. Multi-level composite decks, pool decks, outdoor kitchens, and premium hardwood decks for Potomac's estate properties — designed to estate scale, permitted through Montgomery County, and built with the quality Potomac's premium market demands.",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "priceSpecification": { "@type": "PriceSpecification", "minPrice": "25000", "maxPrice": "200000", "priceCurrency": "USD" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dmv-gc.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Decks", "item": "https://www.dmv-gc.com/service/decks" },
        { "@type": "ListItem", "position": 4, "name": "Potomac, MD", "item": "https://www.dmv-gc.com/service/decks/potomac-md" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to build a deck in Potomac, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Deck construction in Potomac, MD typically costs between $25,000 and $200,000+ depending on size, materials, and features. A mid-range composite deck runs $35,000–$65,000. A large multi-level composite deck with pergola costs $65,000–$110,000. A full outdoor living space with deck, outdoor kitchen, and pergola on a Potomac estate property can reach $120,000–$200,000+. Potomac's estate properties often support larger and more ambitious deck builds than most Montgomery County communities — and the premium real estate values mean quality deck investments return well at resale. DMV-GC Group provides free in-home consultations with detailed estimates."
          }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group handle permits for deck building in Potomac, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Potomac is in unincorporated Montgomery County — all deck building permits go through Montgomery County's Department of Permitting Services (DPS). DMV-GC Group handles all required building permits, structural drawings, and inspection scheduling as a standard part of every Potomac deck project. Homeowners never need to contact the county directly."
          }
        },
        {
          "@type": "Question",
          "name": "Does Avenel HOA approval affect deck building in Potomac?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If your Potomac property is within Avenel or another HOA community, the HOA's Architectural Review Committee (ARC) must approve the deck design before Montgomery County permits are filed. ARC review considers the deck's size, materials, color, placement, and visibility from neighboring properties. DMV-GC Group prepares all required ARC documentation and manages the review process as a standard part of every Avenel and HOA-governed deck project. We design decks to ARC standards from the first draft to minimize revision requests."
          }
        },
        {
          "@type": "Question",
          "name": "What deck materials are best for Potomac, MD estates?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For Potomac's estate properties, composite decking (Trex, TimberTech, or Azek) is the most popular choice — delivering the low-maintenance performance that busy estate owners want without the annual staining and sealing that wood requires. Ipe hardwood is the premium natural wood choice for Potomac — one of the hardest and most durable woods available, with a deep brown color that weathers beautifully and a lifespan of 40–75 years. PVC decking (Azek) is ideal for pool deck areas and shaded spots where moisture and mildew resistance are priorities. DMV-GC Group helps Potomac homeowners select the right material for each zone of their deck project."
          }
        },
        {
          "@type": "Question",
          "name": "Can DMV-GC Group build a deck with an outdoor kitchen in Potomac?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Outdoor kitchen integration is one of the most requested features on Potomac deck projects — built-in grills, countertops, refrigeration, sinks, and storage within the deck structure. DMV-GC Group designs and builds fully integrated outdoor kitchens as part of deck projects, managing all plumbing, electrical, and gas line connections in-house with licensed trades. This is a single-contract project — not a deck contractor and a separate outdoor kitchen company."
          }
        },
        {
          "@type": "Question",
          "name": "Is DMV-GC Group licensed for deck building in Potomac, MD?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home improvement and construction work in Potomac and Montgomery County. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every deck project completed in Potomac."
          }
        }
      ]
    }
  ]
};

const faqData = [
  { eventKey: "0", question: "How much does it cost to build a deck in Potomac, MD?", answer: "Deck construction in Potomac typically costs $35,000–$200,000+ depending on size, material, and features. A single-level composite deck (300–400 sq ft) runs $35,000–$55,000. A multi-level composite deck (500–800 sq ft) costs $55,000–$95,000. An Ipe hardwood deck costs $45,000–$85,000. Adding an outdoor kitchen runs $25,000–$65,000 more. A full outdoor living build — deck, kitchen, pergola, and pool integration — can reach $110,000–$200,000+. DMV-GC Group provides free in-home consultations with detailed, itemized estimates for every Potomac deck scope." },
  { eventKey: "1", question: "Does DMV-GC Group handle permits for deck building in Potomac?", answer: "Yes. Potomac is in unincorporated Montgomery County — all deck permits go through Montgomery County DPS. DMV-GC Group files all required building permits with complete structural drawings prepared by our in-house engineers, and manages all county correspondence, plan review, and inspection scheduling. For Avenel and other HOA properties, we also handle ARC documentation and review management. Homeowners never need to contact the county or HOA directly." },
  { eventKey: "2", question: "Does Avenel HOA need to approve my deck design?", answer: "Yes. If your Potomac property is within Avenel's community boundaries, the HOA's Architectural Review Committee must approve the deck design before Montgomery County permits are filed. The ARC reviews size, material, color, placement, and visibility. DMV-GC Group prepares all required ARC documentation and manages the review process — and we design Avenel decks to ARC standards from the first draft to minimize revision requests. ARC and permit applications run simultaneously wherever possible." },
  { eventKey: "3", question: "What is the best deck material for a Potomac estate property?", answer: "For most Potomac estate primary decks, composite (Trex Transcend or TimberTech Legacy) offers the best balance of appearance, durability, and low maintenance. For pool deck surrounds, Azek PVC is the superior choice — 100% waterproof and slip-resistant. For homeowners who want a natural wood deck that makes a genuine statement and lasts a lifetime, Brazilian Ipe is the only wood we recommend at this investment level — its 40–75 year lifespan, Class A fire resistance, and exceptional density make it the premium choice for Potomac estates." },
  { eventKey: "4", question: "Can DMV-GC Group integrate an outdoor kitchen into a Potomac deck?", answer: "Yes — and this is one of the most commonly requested features on Potomac deck projects. DMV-GC Group's in-house licensed plumbers, electricians, and gas line specialists handle all utility connections for outdoor kitchen installations. This is a single-contract project — not a deck contractor plus a separate outdoor kitchen company. The kitchen design is integrated with the deck structure from the first design draft." },
  { eventKey: "5", question: "Is DMV-GC Group licensed for deck building in Potomac, MD?", answer: "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Potomac and Montgomery County. We carry comprehensive general liability insurance and workers' compensation coverage, are fully bonded, and provide a 1-year workmanship warranty on every deck project. Our in-house structural engineers prepare all required structural drawings for Montgomery County plan review." }
];

export default function DecksPotomacMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => { setActiveMenuItem("service"); }, []);
  return (
    <main>
      <div className="city-service-detail-page decks-potomac-md">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/services">Services</Link><span>›</span>
            <Link href="/service/decks">Deck Building</Link><span>›</span>
            Potomac, MD
          </nav>

          <div className="hero">
            <div className="hero-location-tag">📍 Serving Potomac, MD</div>
            <h1>Deck Building in Potomac, MD — Custom Deck Contractor for Estate Properties</h1>
            <div className="hero-meta">
              <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
              <span className="badge">✓ MHIC Licensed &amp; Insured</span>
              <span className="badge">✓ MoCo Permits Handled</span>
              <span className="badge">✓ Avenel HOA Coordination</span>
              <span className="badge dark">📞 +1 240-730-1292</span>
            </div>
          </div>

          <div className="estate-banner">
            <div className="icon">🏡</div>
            <div>
              <h3>Potomac Estate Properties Deserve a Deck Built at Estate Scale — Not a Suburban Afterthought</h3>
              <p>Potomac's estate properties — many on 1–5+ acres in Avenel, Travilah, and the River Road corridor — represent some of the most valuable residential real estate in Montgomery County. A deck here is not a modest backyard platform: it is a fully integrated outdoor living environment that connects the home to its landscape, hosts serious entertaining, and complements a property where the primary residence may be worth $2–5 million or more. DMV-GC Group designs and builds Potomac decks at the scale and quality these properties demand — multi-level structures, integrated outdoor kitchens, pool deck integration, and premium material selection — all managed with Montgomery County permits and, where applicable, Avenel HOA ARC coordination.</p>
            </div>
          </div>

          <div className="intro-box">
            Looking for a trusted <strong>deck contractor in Potomac, MD</strong>? Whether you're replacing an aging wood deck on a River Road colonial, building a new multi-level composite deck off a Travilah contemporary, or designing a full outdoor living space with kitchen, pergola, and pool deck surround, DMV-GC Group's licensed design-build team handles every scope of custom deck construction in Potomac. We manage architectural design, structural engineering, Montgomery County permits, Avenel HOA ARC review, and complete construction under one contract — delivering the outdoor living spaces that Potomac's estate properties deserve.
          </div>

          <div className="trust-bar">
            <div className="trust-item">
              <div className="icon">🏡</div>
              <strong>Estate-Scale Decks</strong>
              <span>Multi-level, pool deck &amp; outdoor kitchens</span>
            </div>
            <div className="trust-item">
              <div className="icon">📋</div>
              <strong>All Permits Handled</strong>
              <span>MoCo DPS + Avenel ARC coordination</span>
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

          <h2>Deck Building Services We Offer in Potomac, MD</h2>
          <p>
            Potomac's estate properties call for the full range of outdoor living construction — from primary deck structures to fully integrated outdoor environments. DMV-GC Group handles every scope:
          </p>

          <div className="service-grid">
            <div className="service-item">Custom Multi-Level Deck Design &amp; Build</div>
            <div className="service-item">Composite Deck (Trex / TimberTech / Azek)</div>
            <div className="service-item">Ipe &amp; Hardwood Premium Deck</div>
            <div className="service-item">Pressure-Treated Wood Deck</div>
            <div className="service-item">Pool Deck Construction &amp; Surround</div>
            <div className="service-item">Outdoor Kitchen &amp; Grill Station Integration</div>
            <div className="service-item">Pergola &amp; Shade Structure</div>
            <div className="service-item">Covered Deck / Outdoor Room</div>
            <div className="service-item">Cable, Glass &amp; Aluminum Railing Systems</div>
            <div className="service-item">Built-In Seating &amp; Storage</div>
            <div className="service-item">Deck Lighting (Post Cap, Rail, Step, String)</div>
            <div className="service-item">Under-Deck Waterproofing Systems</div>
            <div className="service-item">Deck Replacement &amp; Structural Rebuild</div>
            <div className="service-item">Montgomery County Permit Processing</div>
            <div className="service-item">Avenel HOA ARC Documentation</div>
            <div className="service-item">Structural Engineering (In-House)</div>
          </div>

          <div className="author-box">
            <div className="author-avatar">🏠</div>
            <div className="author-info">
              <h4>About DMV-GC Group — Potomac's Licensed Custom Deck Contractor</h4>
              <p>DMV-GC Group is based in North Bethesda — minutes from Potomac. Our design-build team includes in-house structural engineers, licensed carpenters, licensed electricians, and licensed plumbers — all the disciplines that a complete Potomac estate deck project requires, under one contract. We are deeply familiar with the Montgomery County permit process for large deck structures and with the Avenel HOA ARC review requirements for exterior modifications. We hold a Maryland MHIC license and back every deck project with a 1-year workmanship warranty.</p>
              <div className="author-creds">
                <span className="cred">MHIC Licensed</span>
                <span className="cred">In-House Structural Engineers</span>
                <span className="cred">Licensed Electricians</span>
                <span className="cred">Licensed Plumbers</span>
                <span className="cred">4.9★ Rated</span>
                <span className="cred">1-Year Warranty</span>
              </div>
            </div>
          </div>

          <h2>Types of Decks We Build for Potomac Estate Properties</h2>
          <p>
            Potomac's estate properties have the acreage, architectural ambition, and home values to support deck builds that most Montgomery County communities cannot. Here are the deck types most commonly built on Potomac properties:
          </p>

          <div className="deck-type-grid">
            <div className="deck-type-card">
              <span className="deck-tag">Most Popular in Potomac</span>
              <h3>Multi-Level Composite Deck</h3>
              <p>Two or more connected deck levels — ideal for Potomac's sloped lots and large rear yards where multiple outdoor zones for dining, lounging, grilling, and entertaining are practical at estate scale. Upper level connects to the home's primary living floor; lower level connects to the pool area, garden, or lower yard. Trex, TimberTech, or Azek composite — low maintenance, durable, available in premium colors that complement estate architecture.</p>
              <div className="deck-cost">Starting from $55,000</div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">Premium Natural Choice</span>
              <h3>Ipe Hardwood Deck</h3>
              <p>Brazilian Ipe is the premium natural wood choice for Potomac estate decks — extraordinarily hard (rated Class A fire resistance without treatment), resistant to rot, insects, and weathering, with a lifespan of 40–75 years and a deep, rich brown color that weathers to a distinguished silver-grey if left unfinished or maintains its warm tone with periodic oil application. Ipe decks on Potomac estates are a genuine lifetime investment — not a 15–20 year maintenance cycle.</p>
              <div className="deck-cost">Starting from $45,000</div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">Full Outdoor Living</span>
              <h3>Deck with Outdoor Kitchen &amp; Pergola</h3>
              <p>The full Potomac estate outdoor living build — a large composite or hardwood deck integrating a built-in outdoor kitchen (grill, countertops, refrigeration, sink, storage), a custom pergola or covered structure for shade and weather protection, cable or glass railings for unobstructed views, and integrated lighting for evening use. All plumbing, electrical, and gas line work handled by DMV-GC Group's in-house licensed trades — one contract, one team.</p>
              <div className="deck-cost">Starting from $90,000</div>
            </div>
            <div className="deck-type-card">
              <span className="deck-tag">Pool Integration</span>
              <h3>Pool Deck &amp; Surround</h3>
              <p>A pool deck designed to integrate with Potomac's estate pool areas — surrounding the pool edge, connecting to the main home deck structure, and providing safe, attractive surfacing for pool access. PVC/Azek decking is preferred for pool surrounds — completely waterproof, mold-resistant, and slip-resistant even when wet. Pool deck design must address drainage, slope requirements, and pool equipment access. DMV-GC Group coordinates pool deck design with existing pool structure and landscaping.</p>
              <div className="deck-cost">Starting from $35,000</div>
            </div>
          </div>

          <h2>Deck Material Comparison — What Works Best for Potomac, MD Estates</h2>
          <p>
            Potomac's climate — hot humid summers, frequent rain, and cold winters — combined with the estate-scale investment these properties represent makes material selection particularly important. Here is how the main deck materials compare for Potomac conditions:
          </p>

          <table className="material-table">
            <tbody>
              <tr>
                <th>Material</th>
                <th>Lifespan</th>
                <th>Maintenance</th>
                <th>Cost (Installed)</th>
                <th>Best For Potomac</th>
              </tr>
              <tr>
                <td><strong>Composite (Trex / TimberTech)</strong> — Most Popular</td>
                <td>25–30 years</td>
                <td>Very low — occasional cleaning</td>
                <td>$35–$65/sq ft</td>
                <td>Multi-level decks where low maintenance matters most. Best balance of appearance, durability, and value for most Potomac builds.</td>
              </tr>
              <tr>
                <td><strong>Ipe Hardwood</strong></td>
                <td>40–75 years</td>
                <td>Low — oil every 1–2 years</td>
                <td>$50–$85/sq ft</td>
                <td>The prestige choice for Potomac estate properties. Lifetime performance, exceptional natural beauty, and Class A fire resistance without chemical treatment.</td>
              </tr>
              <tr>
                <td><strong>PVC / Azek</strong></td>
                <td>30+ years</td>
                <td>Very low — soap and water</td>
                <td>$40–$70/sq ft</td>
                <td>Pool deck surrounds and shaded areas. 100% waterproof, mold-resistant, and slip-resistant when wet — the best material for pool environments.</td>
              </tr>
              <tr>
                <td><strong>Cedar</strong></td>
                <td>20–25 years</td>
                <td>Medium — seal annually</td>
                <td>$30–$50/sq ft</td>
                <td>Natural look at a lower cost than Ipe. Requires annual maintenance. Better suited to smaller secondary deck structures than to primary Potomac estate decks.</td>
              </tr>
              <tr>
                <td><strong>Pressure-Treated Wood</strong></td>
                <td>15–20 years</td>
                <td>Medium — seal every 2–3 years</td>
                <td>$18–$35/sq ft</td>
                <td>Structural framing — DMV-GC Group uses pressure-treated lumber for all deck framing regardless of the chosen decking surface material. Not typically the primary surface choice for Potomac estate decks.</td>
              </tr>
            </tbody>
          </table>

          <div className="tip">
            💡 <strong>DMV-GC Group Recommendation for Potomac:</strong> For most Potomac estate primary decks, composite decking (Trex Transcend or TimberTech Legacy) offers the best balance of low maintenance and premium appearance. For pool deck surrounds, Azek PVC is the superior choice. For homeowners who want a genuine natural wood statement on a Potomac estate, Ipe is the only wood we recommend — its durability and fire resistance justify the premium over cedar or other softwoods at this investment level.
          </div>

          <h2>Pool Deck Integration for Potomac Estate Properties</h2>
          <p>
            Many Potomac estate properties have swimming pools — and a deck that doesn't integrate thoughtfully with the pool area represents a missed opportunity. DMV-GC Group designs Potomac pool deck projects as a unified system: the primary deck structure, the pool surround, the connection between them, and the functional requirements of a pool environment all addressed in a single coherent design.
          </p>

          <div className="pool-grid">
            <div className="pool-card">
              <h3>🏊 Pool Surround Materials</h3>
              <p>Pool deck surrounds require materials that handle constant water exposure, resist mold and algae, provide slip resistance when wet, and stay cool enough for bare feet in summer sun. PVC/Azek is DMV-GC Group's standard recommendation for pool surround areas — it meets all of these requirements and requires almost no maintenance. Composite can be used in areas slightly removed from the pool edge. Natural stone pavers or concrete are alternative options where a non-deck surface is preferred.</p>
            </div>
            <div className="pool-card">
              <h3>🔧 Pool Equipment Access</h3>
              <p>Pool mechanical equipment — pump, filter, heater, and chemical storage — must remain accessible for maintenance. DMV-GC Group designs pool deck structures with planned equipment access panels or removable sections so that pool maintenance can be performed without damaging the deck surface. This planning happens during design — not as an afterthought during construction.</p>
            </div>
            <div className="pool-card">
              <h3>💧 Drainage Design</h3>
              <p>Pool decks must drain actively — pool water, rainfall, and splashing create significant water volume that must be directed away from the deck structure and away from the foundation. DMV-GC Group designs all Potomac pool deck projects with adequate slope-to-drain, channel drains at pool perimeter where needed, and drainage routing to appropriate discharge points — not toward the foundation.</p>
            </div>
            <div className="pool-card">
              <h3>🌿 Transition to Landscape</h3>
              <p>On Potomac's estate properties, the pool deck doesn't simply end at its edge — it transitions to the broader landscape. Steps down to lawn areas, integration with existing garden beds, and material transitions between the deck surface and surrounding hardscape or softscape are all part of the design scope. DMV-GC Group's designers assess the existing landscape context before finalizing any Potomac pool deck design.</p>
            </div>
          </div>

          <h2>Premium Deck Features for Potomac Estate Properties</h2>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="icon">🍳</div>
              <strong>Outdoor Kitchen</strong>
              <span>Built-in grill, countertops, sink, refrigeration, storage — fully plumbed and wired by in-house licensed trades</span>
            </div>
            <div className="feature-box">
              <div className="icon">🌿</div>
              <strong>Pergola &amp; Covered Structure</strong>
              <span>Custom timber or aluminum pergola — shade for Potomac's hot summers, architectural character, and support for string lights or climbing vines</span>
            </div>
            <div className="feature-box">
              <div className="icon">💡</div>
              <strong>Integrated Lighting</strong>
              <span>Post cap lights, rail lighting, step lights, recessed deck lights, and landscape lighting — all on low-voltage systems managed by a single controller</span>
            </div>
            <div className="feature-box">
              <div className="icon">🔒</div>
              <strong>Cable &amp; Glass Railings</strong>
              <span>Horizontal cable railing for modern aesthetic with unobstructed views across Potomac's rear yards and wooded landscapes. Frameless glass panels for maximum view preservation</span>
            </div>
            <div className="feature-box">
              <div className="icon">🪑</div>
              <strong>Built-In Seating</strong>
              <span>Custom bench seating with storage beneath — clean, integrated, and designed to match the deck material and railing style</span>
            </div>
            <div className="feature-box">
              <div className="icon">🌧️</div>
              <strong>Under-Deck System</strong>
              <span>Convert the space beneath an elevated Potomac deck into a dry, covered patio area — extending usable outdoor living space even in rain</span>
            </div>
          </div>

          <h2>Permits &amp; Avenel HOA — What Potomac Homeowners Need to Know</h2>
          <p>
            Deck construction in Potomac involves two parallel processes — Montgomery County permits and, for Avenel and other HOA communities, HOA Architectural Review Committee approval. DMV-GC Group manages both simultaneously.
          </p>

          <p><strong>Montgomery County Permits:</strong> Potomac is in unincorporated Montgomery County — all deck permits go through Montgomery County DPS. A building permit is required for any deck attached to the home, over 30 inches above grade, 200 sq ft or larger, or supporting any structure (pergola, roof). DMV-GC Group files all required permits with structural drawings and manages all MoCo correspondence and inspections.</p>

          <p><strong>Avenel HOA ARC:</strong> Avenel's HOA Architectural Review Committee must approve the deck design before Montgomery County permits are filed. The ARC reviews proposed deck size, materials, color, placement relative to property lines, and visibility from neighboring properties. DMV-GC Group prepares all required ARC documentation — site plan, elevation drawings, material specifications — and manages the review process. We design all Avenel decks to ARC standards from the first draft to minimize revision requests and approval delays.</p>

          <div className="note">
            ⚠️ <strong>Unpermitted Deck Warning:</strong> Montgomery County has identified many Potomac homes with unpermitted decks — built without required permits and often without proper structural footings. An unpermitted deck creates insurance gaps, structural liability, and complications at resale. Before purchasing a Potomac home with an existing deck, or before rebuilding one, verify its permit status. DMV-GC Group can assess an existing deck's structural and permit status during a consultation.
          </div>

          <h2>Our Deck Building Process in Potomac</h2>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-content">
                <h3>Free In-Home Consultation &amp; Site Assessment</h3>
                <p>We visit your Potomac property, walk the proposed deck area, assess terrain and slope, evaluate existing structures (pool, landscape), and discuss your vision, intended use, and budget. We provide a realistic overview of what is achievable on your specific property and a preliminary budget range. No cost, no obligation.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-content">
                <h3>Custom Deck Design &amp; Material Selection</h3>
                <p>Our design team creates a detailed deck layout, structural plan, elevation drawings, and material specifications. For multi-level and pool-integrated designs, we develop a full site plan showing how the deck relates to the home, pool, and surrounding landscape. You choose decking material, railing style, features, and color before any permit or ARC application is filed.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-content">
                <h3>Avenel ARC Submission (Where Applicable)</h3>
                <p>For Avenel and other HOA properties, we prepare and submit all required ARC documentation — site plan, elevation drawings, material specifications — and manage the review process. ARC and MoCo permit applications run simultaneously wherever the HOA allows, minimizing total pre-construction timeline.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-content">
                <h3>Montgomery County Permit Filing</h3>
                <p>We file all required Montgomery County building permits with complete structural drawings prepared by our in-house engineers. Our permit team manages all MoCo correspondence, plan review responses, and inspection scheduling throughout the project.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">5</div>
              <div className="step-content">
                <h3>Site Prep, Footings &amp; Framing</h3>
                <p>Post hole drilling, concrete footing installation (to frost depth, sized for the deck's structural loads), and pressure-treated framing — all to Montgomery County code requirements. For pool deck projects, drainage design is implemented at the framing stage.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">6</div>
              <div className="step-content">
                <h3>Decking, Railings, Features &amp; Lighting</h3>
                <p>Installation of the chosen decking boards, railing system, stairways, outdoor kitchen rough-ins and finish work, pergola framing and finish, lighting wiring, and all integrated features — coordinated by a dedicated project manager throughout.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">7</div>
              <div className="step-content">
                <h3>MoCo Final Inspection, Walkthrough &amp; 1-Year Warranty</h3>
                <p>Montgomery County performs the required structural inspection. After approval, we conduct a thorough walkthrough with you, address every punch list item, and activate your 1-year workmanship warranty.</p>
              </div>
            </div>
          </div>

          <h2>Deck Building Cost in Potomac, MD</h2>
          <p>
            Here is a realistic cost breakdown for <strong>deck construction in Potomac, Maryland</strong>. Costs reflect the estate scale and premium quality typical of Potomac deck projects:
          </p>

          <table className="cost-table">
            <tbody>
              <tr>
                <th>Deck Type / Scope</th>
                <th>Typical Cost Range</th>
                <th>Notes for Potomac</th>
              </tr>
              <tr>
                <td>Single-Level Composite Deck (300–400 sq ft)</td>
                <td>$35,000 – $55,000</td>
                <td>Trex or TimberTech with standard railing and stairs. Footings, framing, and MoCo permit included.</td>
              </tr>
              <tr>
                <td>Multi-Level Composite Deck (500–800 sq ft)</td>
                <td>$55,000 – $95,000</td>
                <td>Two levels with cable or glass railing, stairs, integrated lighting. Most common Potomac estate deck scope.</td>
              </tr>
              <tr>
                <td>Ipe Hardwood Deck (300–500 sq ft)</td>
                <td>$45,000 – $85,000</td>
                <td>Premium natural wood. Lifetime performance. Higher material cost fully justified by 40–75 year lifespan on Potomac estate properties.</td>
              </tr>
              <tr>
                <td>Pool Deck Surround (varies by pool size)</td>
                <td>$35,000 – $75,000</td>
                <td>Azek PVC for pool area. Includes drainage design, pool equipment access, and transition to main deck structure.</td>
              </tr>
              <tr>
                <td>Outdoor Kitchen Integration (add-on)</td>
                <td>$25,000 – $65,000</td>
                <td>Built-in grill, countertops, refrigeration, sink, gas line, electrical, plumbing — in-house licensed trades, one contract.</td>
              </tr>
              <tr>
                <td>Pergola / Covered Structure (add-on)</td>
                <td>$18,000 – $45,000</td>
                <td>Custom timber or aluminum. Footings, structural design, finish. Integrated with deck structure.</td>
              </tr>
              <tr>
                <td>Full Outdoor Living Build (deck + kitchen + pergola)</td>
                <td>$110,000 – $200,000+</td>
                <td>Complete outdoor environment. Potomac estate scale. All permits, ARC coordination, and in-house trades included.</td>
              </tr>
              <tr>
                <td>Deck Replacement (Remove Old &amp; Rebuild)</td>
                <td>$40,000 – $85,000</td>
                <td>Demolition and disposal of existing structure + new composite or hardwood deck. Permit required even for like-for-like replacement.</td>
              </tr>
            </tbody>
          </table>

          <div className="highlight">
            <p>📈 <strong>Potomac Deck ROI:</strong> A well-built deck on a Potomac estate typically returns 65–80% of its cost in immediate appraised value — and at Potomac's premium property values, that absolute dollar return is substantial. A $75,000 multi-level composite deck with outdoor kitchen adds $50,000–$60,000 to appraised value immediately — and significantly increases the property's appeal to the high-end buyers who actively seek move-in ready outdoor living spaces on Potomac estate properties.</p>
          </div>

          <div className="cta-banner">
            <h2>Get a Free Deck Design Consultation in Potomac</h2>
            <p>We'll visit your Potomac property, assess the site and terrain, discuss your vision for the outdoor space, and provide a detailed estimate. No cost, no obligation.</p>
            <Link href="/contact-us" className="cta-btn">Schedule Free Consultation</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
          </div>

          <h2>What Potomac Homeowners Say About DMV-GC Group</h2>

          <div className="review-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;DMV-GC Group built us a three-level Trex deck on our Travilah property — connecting the main living floor, a middle entertaining level, and a lower pool deck area. The Avenel ARC approval came through first try. The deck is exactly what we envisioned and the construction quality is exceptional.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Travilah, Potomac MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;We wanted an Ipe deck with a full outdoor kitchen. DMV-GC Group designed it, handled the Montgomery County structural permit, ran the gas line and electrical in-house, and built everything under one contract. The Ipe is stunning — it looks better every year. We cook outside three seasons.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">River Road Corridor, Potomac MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;Our old pressure-treated deck was 22 years old and unpermitted — we didn't know when we bought the house. DMV-GC Group assessed it, told us honestly it needed full replacement, handled the MoCo permit for the new build, and replaced it with a TimberTech composite that will outlast us. Professional from start to finish.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Avenel, Potomac MD</span></div>
            </div>
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">&quot;The pool deck integration was the most complex part — coordinating the surround, the drainage slope, the pool equipment access panels, and connecting it to the main deck level. DMV-GC Group planned every detail before breaking ground. The result is a completely seamless outdoor living space we use every day in summer.&quot;</p>
              <div className="review-author">— Verified Homeowner · <span className="review-location">Brickyard Road, Potomac MD</span></div>
            </div>
          </div>

          <div className="highlight">
            <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Potomac homeowners trust DMV-GC Group for estate-scale deck projects that match the quality and ambition of their properties — with the permit expertise, Avenel ARC experience, and in-house trade capability to deliver complete outdoor living environments under one contract.</p>
          </div>

          <h2>Serving Potomac and Surrounding Areas for Deck Building</h2>

          <div className="areas-grid">
            <span className="area-pill">Potomac, MD</span>
            <span className="area-pill">Avenel</span>
            <span className="area-pill">Travilah</span>
            <span className="area-pill">River Road Corridor</span>
            <span className="area-pill">Brickyard Road</span>
            <span className="area-pill">Bethesda</span>
            <span className="area-pill">North Bethesda</span>
            <span className="area-pill">Chevy Chase</span>
            <span className="area-pill">Cabin John</span>
            <span className="area-pill">Rockville</span>
          </div>

          <div className="nearby-box">
            <h3>Also serving Bethesda, MD and Cabin John, MD for deck building</h3>
            <p>DMV-GC Group builds custom decks throughout Bethesda — directly east of Potomac — and Cabin John — directly north. Both communities benefit from the same licensed design-build team, in-house structural engineers, and Montgomery County permit expertise. <Link href="/service/decks">View our full deck building service page →</Link></p>
          </div>

          <h2>Frequently Asked Questions — Deck Building in Potomac, MD</h2>
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
              <li><Link href="/service/adu/potomac-md">ADU Construction in Potomac, MD</Link></li>
              <li><Link href="/service/home-additions">Home Additions in Potomac, MD</Link></li>
              <li><Link href="/service/patios">Patio Installation in Potomac, MD</Link></li>
            </ul>
          </div>

          <div className="cta-banner">
            <h2>Ready to Build Your Potomac Deck?</h2>
            <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free design consultation. We'll visit your Potomac property and design the outdoor living space your estate deserves.</p>
            <Link href="/contact-us" className="cta-btn">Get Free Deck Estimate in Potomac →</Link>
            <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
          </div>

        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
    </main>
  );
}
