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
      "image": "https://www.dmv-gc.com/logo.png",
      "url": "https://www.dmv-gc.com",
      "telephone": "+12407301292",
      "email": "support@dmv-gc.com",
      "foundingDate": "2018",
      "description": "Licensed design-build general contractor serving Kensington, MD. Specializing in hardwood refinishing, LVP, tile, and carpet installation for Kensington's 1920s–40s bungalows and colonials.",
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
        { "@type": "City", "name": "Kensington", "sameAs": "https://en.wikipedia.org/wiki/Kensington,_Maryland" },
        { "@type": "City", "name": "North Kensington" },
        { "@type": "City", "name": "South Kensington" },
        { "@type": "City", "name": "Garrett Park" },
        { "@type": "City", "name": "Chevy Chase" },
        { "@type": "City", "name": "Silver Spring" },
        { "@type": "City", "name": "Wheaton" },
        { "@type": "City", "name": "Potomac" }
      ],
      "hasCredential": [
        { "@type": "EducationalOccupationalCredential", "name": "MHIC #133211" },
        { "@type": "EducationalOccupationalCredential", "name": "Licensed General Contractor - Maryland" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "412",
        "bestRating": "5"
      },
      "openingHours": "Mo-Sa 08:00-18:00",
      "priceRange": "$$",
      "sameAs": [
        "https://www.facebook.com/dmvgcgroup",
        "https://www.instagram.com/dmvgcgroup",
        "https://www.yelp.com/biz/dmv-gc-group-north-bethesda"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/flooring-remodeling/kensington-md#service",
      "serviceType": "Flooring Installation",
      "provider": { "@id": "https://www.dmv-gc.com/#business" },
      "areaServed": { "@type": "City", "name": "Kensington", "sameAs": "https://en.wikipedia.org/wiki/Kensington,_Maryland" },
      "description": "Flooring installation and refinishing in Kensington, MD — hardwood refinishing, LVP, tile, carpet, subfloor repair, and whole-home flooring packages for 1920s–40s bungalows and colonials.",
      "hasOfferCatalog": [
        {
          "@type": "Offer",
          "name": "Hardwood Refinishing",
          "priceSpecification": { "@type": "PriceSpecification", "price": "3", "minPrice": "3", "maxPrice": "6", "priceCurrency": "USD" }
        },
        {
          "@type": "Offer",
          "name": "New Hardwood Installation",
          "priceSpecification": { "@type": "PriceSpecification", "price": "8", "minPrice": "8", "maxPrice": "15", "priceCurrency": "USD" }
        },
        {
          "@type": "Offer",
          "name": "LVP Installation",
          "priceSpecification": { "@type": "PriceSpecification", "price": "5", "minPrice": "5", "maxPrice": "10", "priceCurrency": "USD" }
        },
        {
          "@type": "Offer",
          "name": "Porcelain Tile",
          "priceSpecification": { "@type": "PriceSpecification", "price": "8", "minPrice": "8", "maxPrice": "18", "priceCurrency": "USD" }
        },
        {
          "@type": "Offer",
          "name": "Whole-Home Flooring Package",
          "priceSpecification": { "@type": "PriceSpecification", "price": "10000", "minPrice": "10000", "maxPrice": "28000", "priceCurrency": "USD" }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.dmv-gc.com/service/flooring-remodeling/kensington-md#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does flooring installation cost in Kensington, MD?",
          "acceptedAnswer": { "@type": "Answer", "text": "Flooring in Kensington typically costs $3–$18 per square foot depending on material and zone. Hardwood refinishing costs $3–$6 per square foot. New hardwood installation runs $8–$15 per square foot. LVP for kitchens and basements costs $5–$10 per square foot. Porcelain tile runs $8–$18 per square foot. A typical Kensington home package runs $8,000–$18,000 for a 1,500–2,000 sq ft home. DMV-GC Group provides free, itemized zone-by-zone estimates." }
        },
        {
          "@type": "Question",
          "name": "How do I know if my Kensington hardwood floors can be refinished?",
          "acceptedAnswer": { "@type": "Answer", "text": "The key factor is remaining wood thickness above the tongue. Original ¾-inch strip hardwood needs at least 3/16\" above the tongue to safely sand. DMV-GC Group checks remaining thickness during the free in-home consultation using a thickness gauge. If sufficient thickness remains and the wood is structurally sound, refinishing is almost always the right choice." }
        },
        {
          "@type": "Question",
          "name": "Why does tile crack in older Kensington homes?",
          "acceptedAnswer": { "@type": "Answer", "text": "The most common cause is installation over diagonal plank subfloor boards without an uncoupling membrane. Diagonal plank subfloors move seasonally, and that movement telegraphs through a rigid tile installation and cracks the tiles or grout joints. DMV-GC Group installs uncoupling membrane as a standard part of every tile project on older Kensington subfloors." }
        },
        {
          "@type": "Question",
          "name": "Is LVP a good choice for a Kensington home with a crawlspace?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes — LVP is often the best choice for first-floor rooms with crawlspace foundations where moisture is a concern. LVP is 100% waterproof and dimensionally stable, so it will not cup, buckle, or squeak in response to seasonal moisture changes. DMV-GC Group recommends a vapor barrier under LVP in crawlspace homes." }
        },
        {
          "@type": "Question",
          "name": "What does the flooring installation process look like in Kensington?",
          "acceptedAnswer": { "@type": "Answer", "text": "Every Kensington flooring project follows this same five-step process: free in-home consultation, detailed written estimate, subfloor preparation, expert installation by our in-house crews, and a final walkthrough. Most projects complete in 3–10 days. All permits are handled by our team." }
        },
        {
          "@type": "Question",
          "name": "Does DMV-GC Group provide flooring warranties?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every project includes our workmanship warranty — one full year with no proration. Material warranties are provided by the manufacturer (typically 15–50 years for hardwood and LVP, lifetime for some tile). We also offer maintenance guidance so your warranty stays valid." }
        }
      ]
    }
  ]
};

const KensingtonMD = () => {
  const { setActiveMenuItem } = useMyContext();

  useEffect(() => {
    setActiveMenuItem("service");
  }, []);

  const faqData = [
    {
      question: "How much does flooring installation cost in Kensington, MD?",
      answer: "Flooring in Kensington typically costs $3–$18 per square foot depending on material and zone. Hardwood refinishing costs $3–$6 per square foot. New hardwood installation runs $8–$15 per square foot. LVP for kitchens and basements costs $5–$10 per square foot. Porcelain tile runs $8–$18 per square foot. A typical Kensington home package — refinishing original hardwood in the main living areas and installing LVP or tile in kitchens and baths — runs $8,000–$18,000 for a 1,500–2,000 sq ft home. DMV-GC Group provides free, itemized zone-by-zone estimates."
    },
    {
      question: "How do I know if my Kensington hardwood floors can be refinished?",
      answer: "The key factor is remaining wood thickness above the tongue. Original ¾-inch strip hardwood needs at least 3/16\" above the tongue to safely sand without compromising the mechanical connection. DMV-GC Group checks remaining thickness during the free in-home consultation using a thickness gauge. If sufficient thickness remains and the wood is structurally sound (not cupped, rotted, or buckled), refinishing is almost always the right choice — more authentic and significantly less expensive than replacement."
    },
    {
      question: "Why does tile crack in older Kensington homes?",
      answer: "The most common cause of tile failure in older Kensington homes is installation directly over diagonal plank subfloor boards without an uncoupling membrane. Diagonal plank subfloors have joints between boards that move seasonally — when the boards expand and contract, that movement telegraphs through a rigid tile installation and cracks the tiles or grout joints. An uncoupling membrane (such as Schlüter DITRA) absorbs this movement and prevents it from reaching the tile above. DMV-GC Group installs uncoupling membrane as a standard part of every tile project on older Kensington subfloors — the step that determines whether tile lasts 50 years or 2."
    },
    {
      question: "Is LVP a good choice for a Kensington home with a crawlspace?",
      answer: "Yes — LVP is often the best choice for first-floor rooms in Kensington homes with crawlspace foundations where moisture is a concern. Because LVP is 100% waterproof and dimensionally stable regardless of humidity, it will not cup, buckle, or squeak in response to seasonal moisture changes. DMV-GC Group recommends a vapor barrier under LVP in crawlspace homes and uses an embedded moisture meter to check humidity levels in the wood subfloor before installation."
    },
    {
      question: "What does the flooring installation process look like in Kensington?",
      answer: "Every Kensington flooring project follows this same five-step process: free in-home consultation, detailed written estimate, subfloor preparation, expert installation by our in-house crews, and a final walkthrough. Most projects — from simple refinishes to full installations — complete in 3–10 days. Larger whole-home projects can take 2–4 weeks. All permits are handled by our team, so you don't have to deal with the Town of Kensington or Montgomery County directly."
    },
    {
      question: "Does DMV-GC Group provide flooring warranties?",
      answer: "Yes. Every DMV-GC Group flooring project includes our workmanship warranty — we guarantee our installation work for one full year with no proration. Material warranties are provided by the manufacturer and vary depending on product (typically 15–50 years for hardwood and LVP, lifetime for some tile). We also offer maintenance guidance so your warranty stays valid."
    }
  ];

  return (
    <div className="city-service-detail-page flooring-kensington-md">
      <div className="container">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />

        <nav className="breadcrumb">
          <Link href="/">Home</Link><span>›</span>
          <Link href="/services">Services</Link><span>›</span>
          <Link href="/service/flooring-remodeling">Flooring Installation</Link><span>›</span>
          <span>Kensington, MD</span>
        </nav>

        <div className="hero">
          <span className="hero-location-tag">📍 Serving Kensington, MD &amp; Surrounding Areas</span>
          <h1>Flooring Installation &amp; Replacement in Kensington, MD</h1>
          <div className="hero-meta">
            <span className="badge">✓ Licensed &amp; Insured</span>
            <span className="badge">✓ Free In-Home Consultation</span>
            <span className="badge dark">📞 +1 240-730-1292</span>
          </div>
        </div>

        <div className="oldhouse-banner">
          <div className="banner-icon">🏠</div>
          <div className="banner-text">
            <h3>🏠 1920s–40s Kensington Homes — Original Floors Still in Service</h3>
            <p>Kensington was built primarily in the 1920s–40s, and many homes still have their <strong>original hardwood floors</strong> — usually ¾-inch red or white oak strip flooring. These floors were milled from old-growth trees and are far denser than modern flooring, which is why so many are still in service after 80–100 years. The floor you&apos;re thinking about replacing may actually be worth refinishing instead. Before you rip it out, read the section below on original hardwood refinishing — it could save you thousands.</p>
          </div>
        </div>

        <div className="intro-box">
          <p>Looking for a <strong>flooring contractor in Kensington, MD</strong>? From the 1920s–40s bungalows and colonials along Connecticut Avenue to the newer homes in Woodland Hills, Kensington homeowners trust DMV-GC Group for <strong>hardwood refinishing, LVP, tile, and carpet installation</strong>. From Georgetown Prep to Garrett Park, our flooring team serves the greater Kensington area with a level of care that&apos;s becoming rare in the trades — we protect your home, we over-communicate, and we get the details right the first time. If it&apos;s a flooring project, we handle it. Licensed, insured, and rated 4.9 stars across hundreds of reviews.</p>
        </div>

        <div className="trust-bar">
          <div className="trust-item">
            <div className="icon">🏗️</div>
            <strong>In-House Teams</strong>
            <span>No subcontractor roulette — our own crews install</span>
          </div>
          <div className="trust-item">
            <div className="icon">📋</div>
            <strong>Permits Handled</strong>
            <span>Town of Kensington permits — fully managed</span>
          </div>
          <div className="trust-item">
            <div className="icon">⭐</div>
            <strong>4.9-Star Rated</strong>
            <span>Trusted by homeowners across Kensington</span>
          </div>
          <div className="trust-item">
            <div className="icon">📞</div>
            <strong>Free Consultations</strong>
            <span>In-home estimates — no pressure, ever</span>
          </div>
        </div>

        <h2>Flooring Services We Offer in Kensington, MD</h2>
        <p>Every flooring project, from a single-room repair to a whole-home renovation, gets the same DMV-GC Group treatment: honest assessment, precise estimation, and flawless installation.</p>

        <div className="service-list">
          <div className="service-item">Hardwood floor installation &amp; refinishing</div>
          <div className="service-item">LVP &amp; luxury vinyl plank flooring</div>
          <div className="service-item">Tile flooring (porcelain, ceramic, natural stone)</div>
          <div className="service-item">Carpet installation &amp; replacement</div>
          <div className="service-item">Subfloor repair &amp; replacement</div>
          <div className="service-item">Floor leveling &amp; concrete moisture testing</div>
          <div className="service-item">Engineered hardwood installation</div>
          <div className="service-item">Stair treads, risers &amp; railings</div>
          <div className="service-item">Waterproofing &amp; moisture barriers</div>
          <div className="service-item">Old hardwood floor repair (patch &amp; weave)</div>
          <div className="service-item">Whole-home flooring packages</div>
          <div className="service-item">Free in-home consultation &amp; measurement</div>
          <div className="service-item">Demolition &amp; disposal of old flooring</div>
          <div className="service-item">Flooring for basements &amp; below-grade areas</div>
        </div>

        <div className="author-box">
          <div className="author-avatar">🏗️</div>
          <div className="author-info">
            <h4>Written by the DMV-GC Group Flooring Team</h4>
            <p>We&apos;re the licensed, in-house flooring installers serving Kensington, MD — no third-party subcontractors. The information on this page comes from real on-site experience with Kensington&apos;s older homes, and every project we complete is backed by our craftsmanship warranty.</p>
            <div className="author-creds">
              <span className="cred">MD Licensed Contractor</span>
              <span className="cred">In-House Installation Crews</span>
              <span className="cred">MHIC #133211</span>
              <span className="cred">4.9★ Google Rating</span>
            </div>
          </div>
        </div>

        <h2>Kensington&apos;s Older Homes — Subfloor Realities Every Homeowner Should Understand</h2>
        <p>Before choosing a floor, it&apos;s essential to understand what&apos;s underneath it. Kensington&apos;s older homes were built with construction methods that differ fundamentally from modern homes — and the right flooring choice depends on your subfloor type.</p>

        <div className="subfloor-grid">
          <div className="subfloor-card">
            <h3>😀 Diagonal plank subfloors</h3>
            <p>Found in many homes built before 1950. These provide a strong, stable base but require specific installation techniques — especially if you&apos;re installing tile, which needs a decoupling membrane to prevent cracking.</p>
          </div>
          <div className="subfloor-card">
            <h3>😀 Original hardwood over joists</h3>
            <p>¾-inch strip hardwood nailed directly over joists — the classic Kensington setup. These floors can almost always be refinished rather than replaced, saving thousands.</p>
          </div>
          <div className="subfloor-card">
            <h3>⚠️ Pine or softwood subfloors</h3>
            <p>Found in some 1920s–40s homes, particularly in bedrooms and closets. Softer woods dent and scratch easily, and may indicate there was carpet over them. More prep needed before installing new flooring.</p>
          </div>
          <div className="subfloor-card">
            <h3>😀 Concrete slab (first-floor or basement areas)</h3>
            <p>For slab-on-grade installations, moisture testing is essential before any flooring goes down. LVP or engineered wood is the recommended solution for these areas.</p>
          </div>
        </div>

        <div className="highlight">
          <p><strong>Why it matters:</strong> The single biggest mistake we see is homeowners selecting the floor first and ignoring the subfloor. Selecting the right flooring for your subfloor saves you from costly failures 6–24 months after installation.</p>
        </div>

        <h2>Flooring Types We Install in Kensington, MD</h2>
        <p>Kensington homeowners have a wide range of flooring options — here&apos;s how we help you choose:</p>

        <div className="floor-type-grid">
          <div className="floor-card">
            <span className="floor-label">BEST MATCH FOR ERA</span>
            <h3>Hardwood Flooring</h3>
            <p>Restore, refinish, or install new ¾-inch solid hardwood. For Kensington&apos;s 1920s–40s homes, solid hardwood is the era-authentic choice and adds the most value.</p>
            <div className="floor-meta"><strong>Ideal For:</strong> Living rooms, dining rooms, hallways, bedrooms</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">WATERPROOF</span>
            <h3>LVP (Luxury Vinyl Plank)</h3>
            <p>100% waterproof, scratch-resistant, and dimensionally stable. Perfect for suburban family living — kitchens, mudrooms, basements, and homes with kids and pets.</p>
            <div className="floor-meta"><strong>Ideal For:</strong> Kitchens, basements, mudrooms</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">GREAT VALUE</span>
            <h3>Laminate Flooring</h3>
            <p>Durable and budget-friendly. Modern laminates look and feel much better than older versions, with improved water resistance.</p>
            <div className="floor-meta"><strong>Ideal For:</strong> Bedrooms, home offices, lower-traffic spaces</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">PET &amp; KID FRIENDLY</span>
            <h3>Tile Flooring</h3>
            <p>Porcelain, ceramic, and natural stone. Timeless and durable — the best choice for bathrooms, kitchens, and entryways.</p>
            <div className="floor-meta"><strong>Ideal For:</strong> Bathrooms, kitchens, entryways</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">SOFT &amp; COZY</span>
            <h3>Carpet Flooring</h3>
            <p>Soft underfoot, insulates, and reduces noise. Ideal for bedrooms, stairs, and playrooms.</p>
            <div className="floor-meta"><strong>Ideal For:</strong> Bedrooms, stairs, playrooms</div>
          </div>
          <div className="floor-card">
            <span className="floor-label">MODERN LUXURY</span>
            <h3>Engineered Hardwood</h3>
            <p>Real wood veneer over plywood core. Resists moisture and temperature changes better than solid hardwood — great for basements and condos.</p>
            <div className="floor-meta"><strong>Ideal For:</strong> Basements, condos, over radiant heat</div>
          </div>
        </div>

        <h2>Hardwood Floor Refinishing in Kensington — The Honest Assessment</h2>
        <p>Kensington&apos;s 1920s–40s homes were built with old-growth ¾-inch hardwood — denser, more durable, and more valuable than most new flooring. Refinishing your existing hardwood is usually the smartest move.</p>
        <div className="highlight">
          <p><strong>Hardwood refinishing vs. replacement:</strong> If your Kensington hardwood floors are structurally sound and have sufficient thickness, refinishing typically costs $3–$6 per square foot — a fraction of the $15–$20 per square foot for new hardwood. Refinishing also preserves the original old-growth wood that adds character and value to your home.</p>
        </div>

        <h2>Best Flooring by Room — Guide for Kensington Homeowners</h2>
        <p>Choose the right flooring for every room with this at-a-glance guide:</p>
        <div className="table-responsive">
          <div className="table-holder">
            <table className="room-table">
              <thead>
                <tr>
                  <th>Room</th>
                  <th>Best Flooring</th>
                  <th>Why</th>
                  <th>Cost/SF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Living Room / Dining Room</td>
                  <td>Hardwood (refinish preferred)</td>
                  <td>Era-authentic for 1920s–40s homes, high value</td>
                  <td>$3–$6</td>
                </tr>
                <tr>
                  <td>Kitchen</td>
                  <td>LVP or Porcelain Tile</td>
                  <td>Waterproof and easy to clean</td>
                  <td>$5–$10</td>
                </tr>
                <tr>
                  <td>Bathrooms</td>
                  <td>Porcelain Tile</td>
                  <td>Waterproof, durable, no swelling</td>
                  <td>$8–$18</td>
                </tr>
                <tr>
                  <td>Basement</td>
                  <td>LVP or Engineered Hardwood</td>
                  <td>Moisture-resistant, won&apos;t warp</td>
                  <td>$5–$10</td>
                </tr>
                <tr>
                  <td>Bedrooms</td>
                  <td>Hardwood or Carpet</td>
                  <td>Warm, quiet, comfortable</td>
                  <td>$3–$8</td>
                </tr>
                <tr>
                  <td>Hallways &amp; Stairs</td>
                  <td>Hardwood (hallways) / Carpet (stairs)</td>
                  <td>Durable traffic areas</td>
                  <td>$3–$8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>Our Flooring Installation Process in Kensington</h2>
        <p>We follow a simple, proven process that keeps your project on schedule and on budget:</p>
        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-content">
              <h3>Free In-Home Consultation</h3>
              <p>We visit your Kensington home, assess your subfloor, measure accurately, and discuss your goals and budget.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-content">
              <h3>Detailed Written Estimate</h3>
              <p>You get a precise, itemized estimate with no surprises — including material options at multiple price points.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-content">
              <h3>Subfloor Preparation</h3>
              <p>We inspect, repair, and level the subfloor before any new flooring goes down.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-content">
              <h3>Expert Installation</h3>
              <p>Our in-house crews handle the installation meticulously — from acclimation to the final trim.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">5</div>
            <div className="step-content">
              <h3>Final Walkthrough</h3>
              <p>We walk through your finished floors together and make sure everything is perfect.</p>
            </div>
          </div>
        </div>

        <h2>Flooring Installation Cost in Kensington, MD</h2>
        <p>Here&apos;s what Kensington homeowners typically pay for common flooring projects:</p>
        <div className="table-responsive">
          <div className="table-holder">
            <table className="cost-table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Price Range</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hardwood refinishing</td>
                  <td>$3–$6 / SF</td>
                  <td>Sand, stain, seal with Bona or similar</td>
                </tr>
                <tr>
                  <td>New hardwood installation</td>
                  <td>$8–$15 / SF</td>
                  <td>Material and labor</td>
                </tr>
                <tr>
                  <td>LVP installation</td>
                  <td>$5–$10 / SF</td>
                  <td>Click-lock or glue-down</td>
                </tr>
                <tr>
                  <td>Porcelain tile</td>
                  <td>$8–$18 / SF</td>
                  <td>Material and labor</td>
                </tr>
                <tr>
                  <td>Whole-home flooring package</td>
                  <td>$10,000–$28,000</td>
                  <td>Typical 1,500–2,000 SF home</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="note">
          <strong>Cost note:</strong> These are general estimates. Your project cost depends on materials, square footage, subfloor condition, and scope. We provide free, itemized estimates for every Kensington project.
        </div>

        <h2>Why Kensington Homeowners Choose DMV-GC Group for Flooring</h2>
        <div className="why-grid">
          <div className="why-box">
            <div className="icon">🏗️</div>
            <strong>In-House Installation</strong>
            <span>No subcontracted crews — our own licensed installers do the work.</span>
          </div>
          <div className="why-box">
            <div className="icon">🔍</div>
            <strong>Honest Assessment</strong>
            <span>We&apos;ll tell you if refinishing beats replacement — even if it means a smaller invoice.</span>
          </div>
          <div className="why-box">
            <div className="icon">📋</div>
            <strong>Permits &amp; Compliance</strong>
            <span>Town of Kensington permits handled by our team.</span>
          </div>
          <div className="why-box">
            <div className="icon">⭐</div>
            <strong>4.9-Star Rated</strong>
            <span>Hundreds of reviews across Kensington and the DMV.</span>
          </div>
          <div className="why-box">
            <div className="icon">📞</div>
            <strong>Responsive Support</strong>
            <span>Real humans answer the phone — no call centers.</span>
          </div>
          <div className="why-box">
            <div className="icon">🛡️</div>
            <strong>Craftsmanship Warranty</strong>
            <span>Our work is backed by a written workmanship warranty.</span>
          </div>
        </div>

        <h2>What Kensington Homeowners Say About DMV-GC Group</h2>
        <div className="review-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;DMV refinished our original 1940s oak floors and they look incredible — like new, but with the warmth of the old wood.&quot;</p>
            <div className="review-author">Sarah M. — <span className="review-location">Kensington, MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;They installed LVP in our basement and tile in both baths. Professional, punctual, and the cleanest crew we&apos;ve ever had.&quot;</p>
            <div className="review-author">David R. — <span className="review-location">Kensington, MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;We had a subfloor issue that two other contractors missed. DMV caught it, fixed it, and the floors are perfect.&quot;</p>
            <div className="review-author">Priya K. — <span className="review-location">Kensington, MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">&quot;The estimate was accurate to the dollar. No surprises, no upselling — just great work.&quot;</p>
            <div className="review-author">James T. — <span className="review-location">Kensington, MD</span></div>
          </div>
        </div>
        <div className="highlight">
          <p><strong>Get your free quote:</strong> We offer free in-home consultations for all Kensington flooring projects. <a href="tel:+1 (240) 730-1292">Call +1 240-730-1292</a> or <Link href="/contact-us">request your consultation online</Link>.</p>
        </div>

        <div className="cta-banner">
          <h2>Get a Free Flooring Estimate in Kensington</h2>
          <p>Licensed flooring contractor serving Kensington, MD. Free consultation, honest pricing, in-house installation.</p>
          <Link href="/contact-us" className="cta-btn">Get Free Estimate</Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">Call +1 240-730-1292</a>
        </div>

        <h2>Serving Kensington and Surrounding Areas for Flooring</h2>
        <p>DMV-GC Group proudly provides flooring services across the greater Kensington area — from the historic heart of Kensington to the neighborhoods that surround it.</p>
        <div className="areas-grid">
          <span className="area-pill">Kensington</span>
          <span className="area-pill">North Kensington</span>
          <span className="area-pill">South Kensington</span>
          <span className="area-pill">Woodland Hills</span>
          <span className="area-pill">Rock Creek Hills</span>
          <span className="area-pill">The Park at Kensington</span>
          <span className="area-pill">Georgetown Prep</span>
          <span className="area-pill">Garrett Park</span>
          <span className="area-pill">Chevy Chase</span>
          <span className="area-pill">Bethesda</span>
          <span className="area-pill">Silver Spring</span>
          <span className="area-pill">Wheaton</span>
          <span className="area-pill">Potomac</span>
        </div>

        <div className="nearby-box">
          <h3>Also serving Silver Spring, MD — just south of Kensington</h3>
          <p>Silver Spring&apos;s housing stock mirrors Kensington&apos;s — split-levels, colonials, and an active ADU market. If you&apos;re just over the border, DMV-GC Group can help there too. <Link href="/service/flooring-remodeling/silver-spring-md">View our Silver Spring flooring page →</Link></p>
        </div>

        <h2>Frequently Asked Questions — Flooring in Kensington, MD</h2>
        <Accordion defaultActiveKey="0" flush>
          {faqData.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <div className="internal-links">
          <h3>Explore More Flooring Services</h3>
          <ul>
            <li><Link href="/service/flooring-remodeling">Flooring Installation Services</Link></li>
            <li><Link href="/service/flooring-remodeling/potomac-md">Flooring in Potomac, MD</Link></li>
            <li><Link href="/service/flooring-remodeling/silver-spring-md">Flooring in Silver Spring, MD</Link></li>
            <li><Link href="/service/flooring-remodeling/wheaton-md">Flooring in Wheaton, MD</Link></li>
          </ul>
        </div>

        <div className="cta-banner">
          <h2>Ready to Start Your Kensington Flooring Project?</h2>
          <p>Join hundreds of Kensington homeowners who trust DMV-GC Group for beautiful, durable floors.</p>
          <Link href="/contact-us" className="cta-btn">Get Free Estimate</Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">Call +1 240-730-1292</a>
        </div>
      </div>
    </div>
  );
};

export default KensingtonMD;
