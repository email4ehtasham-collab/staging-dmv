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
      name: "DMV-GC Group",
      alternateName: "DMV General Contracting Group LLC",
      image: "https://www.dmv-gc.com/logo.png",
      url: "https://www.dmv-gc.com",
      telephone: "+12407301292",
      email: "support@dmv-gc.com",
      foundingDate: "2018",
      description:
        "Licensed design-build general contractor serving Garrett Park, MD. Specializing in ADU construction for Garrett Park's National Register Historic District Victorian and Craftsman homes — basement ADU conversions and garage conversions — with Town of Garrett Park permit expertise and historic home construction experience.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "11810 Grand Park Ave, Suite 500",
        addressLocality: "North Bethesda",
        addressRegion: "MD",
        postalCode: "20852",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 39.0458, longitude: -77.1139 },
      areaServed: [
        { "@type": "City", name: "Garrett Park", sameAs: "https://en.wikipedia.org/wiki/Garrett_Park,_Maryland" },
        { "@type": "City", name: "Kensington" },
        { "@type": "City", name: "North Bethesda" },
        { "@type": "City", name: "Rockville" },
        { "@type": "City", name: "Wheaton" },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "MHIC License",
          credentialCategory: "Maryland Home Improvement Contractor License",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "DLCP License",
          credentialCategory: "Washington DC Department of Licensing and Consumer Protection",
        },
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "97", bestRating: "5" },
      priceRange: "$$$",
    },
    {
      "@type": "Service",
      "@id": "https://www.dmv-gc.com/service/adu/garrett-park-md#service",
      serviceType: "ADU Construction",
      name: "ADU Construction in Garrett Park, MD",
      alternateName: ["Accessory Dwelling Unit", "In-Law Suite", "Basement Apartment", "Garage Conversion"],
      provider: { "@id": "https://www.dmv-gc.com/#business" },
      areaServed: { "@type": "City", name: "Garrett Park", sameAs: "https://en.wikipedia.org/wiki/Garrett_Park,_Maryland" },
      description:
        "Full-service ADU design and construction in Garrett Park, MD. Basement ADU conversions and garage conversions for Garrett Park's historic Victorian and Craftsman homes — with Town of Garrett Park permit expertise, National Register Historic District awareness, and sensitive historic home construction practices.",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: "68000",
          maxPrice: "210000",
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dmv-gc.com/" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.dmv-gc.com/services" },
        { "@type": "ListItem", position: 3, name: "ADU Construction", item: "https://www.dmv-gc.com/service/adu" },
        { "@type": "ListItem", position: 4, name: "Garrett Park, MD", item: "https://www.dmv-gc.com/service/adu/garrett-park-md" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does it cost to build an ADU in Garrett Park, MD?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "ADU construction in Garrett Park, MD typically costs between $68,000 and $210,000 depending on ADU type and scope. A basement ADU conversion runs $75,000–$135,000. A garage conversion ADU costs $68,000–$125,000. An attached in-law suite addition costs $110,000–$210,000. Garrett Park's historic Victorian homes add specific construction considerations — older systems, stone or block foundations, ceiling height constraints — that can add 10–20% to project cost compared to newer suburban construction. DMV-GC Group provides free in-home consultations with honest, detailed estimates that account for these site-specific factors.",
          },
        },
        {
          "@type": "Question",
          name: "Does the Town of Garrett Park have its own ADU permit process?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Garrett Park is an incorporated town within Montgomery County, and all construction permits for properties within the town limits must be obtained from the Town of Garrett Park — not from Montgomery County's Department of Permitting Services. The Town has its own plan review and inspection process. DMV-GC Group handles the complete Town of Garrett Park ADU permit process in-house, including all plan preparation, submission, and inspection scheduling. We also verify jurisdiction for every Garrett Park address since a small number of properties near the town boundary use MoCo permits instead.",
          },
        },
        {
          "@type": "Question",
          name: "Is Garrett Park a historic district? Does that affect ADU construction?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Town of Garrett Park is listed on the National Register of Historic Places as a historic district — one of the few entire towns in Maryland to hold this designation. For interior ADU work — finishing a basement, converting an existing garage interior — the National Register designation does not add federal review requirements, as the National Register does not restrict private property owners' interior modifications. However, any exterior modification visible from a public street — new egress window openings in the front facade, exterior door changes — may require review under Maryland's historic preservation framework. DMV-GC Group assesses every Garrett Park ADU project for historic district implications during the consultation and designs exterior modifications to be sensitive to and compatible with the Victorian and Craftsman character of Garrett Park's historic homes.",
          },
        },
        {
          "@type": "Question",
          name: "What ADU types work best in Garrett Park's small historic lots?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Given Garrett Park's small lot sizes — many between 5,000 and 9,000 sq ft — the most practical ADU types are basement conversions and garage conversions, since both use existing structure without adding new building footprint. Attached in-law suite additions are feasible on some of Garrett Park's larger parcels but require setback compliance assessment. Detached backyard cottages are the least common ADU type in Garrett Park due to lot size and setback constraints. DMV-GC Group confirms what is feasible on your specific Garrett Park property during the free consultation.",
          },
        },
        {
          "@type": "Question",
          name: "Does DMV-GC Group have experience with Garrett Park's Victorian and Craftsman homes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. DMV-GC Group has completed renovation projects in Garrett Park and neighboring Kensington — both communities with concentrations of late 19th and early 20th century Victorian, Queen Anne, and Craftsman homes. We understand the specific construction characteristics of these homes: stone and rubble foundations, narrow framing bays, galvanized plumbing, knob-and-tube or early panel electrical, and ceiling height variations in below-grade spaces. These factors are assessed honestly during the free consultation and factored into every estimate before construction begins.",
          },
        },
        {
          "@type": "Question",
          name: "Is DMV-GC Group licensed for ADU construction in Garrett Park, MD?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. DMV-GC Group holds a Maryland MHIC (Home Improvement Contractor) license — required for all home improvement and construction work in Garrett Park. We are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every ADU project completed in Garrett Park.",
          },
        },
      ],
    },
  ],
};

const faqData = [
  {
    eventKey: "0",
    question: "How much does it cost to build an ADU in Garrett Park, MD?",
    answer: "ADU construction in Garrett Park typically costs $68,000–$210,000 depending on type. A garage conversion runs $68,000–$125,000. A basement ADU conversion costs $75,000–$135,000, with older homes adding $5,000–$28,000 for systems remediation. An attached in-law suite addition costs $110,000–$210,000. A detached cottage (where feasible) costs $145,000–$270,000. Historic home construction typically adds 10–25% versus comparable work in newer suburban homes. DMV-GC Group provides free in-home consultations with honest estimates that account for your specific home's systems and foundation conditions.",
  },
  {
    eventKey: "1",
    question: "Does the Town of Garrett Park have its own ADU permit process?",
    answer: "Yes. All building permits in Garrett Park must be obtained from the Town of Garrett Park at 4600 Oxford Street — not from Montgomery County DPS. The Town has its own plan review and inspection staff. Filing with the wrong authority produces invalid permits and no valid Town Certificate of Occupancy. DMV-GC Group handles the complete Town permit process and verifies jurisdiction using parcel boundary data before filing anything.",
  },
  {
    eventKey: "2",
    question: "Does Garrett Park's National Register listing restrict ADU construction?",
    answer: "The National Register listing does not restrict interior modifications. Finishing a basement, converting a garage interior, adding plumbing and electrical — all proceed with Town building permits without federal historic review. Exterior modifications visible from a public street — new openings in front facades, new additions — require design sensitivity to the historic character and may warrant SHPO consultation for certain scopes. DMV-GC Group assesses historic implications for every exterior ADU scope before design begins and designs all exterior work to be compatible with Garrett Park's Victorian and Craftsman character.",
  },
  {
    eventKey: "3",
    question: "Can I build an ADU on a small Garrett Park lot?",
    answer: "It depends on the ADU type. Garrett Park's typical 5,000–9,000 sq ft lots must meet Montgomery County's 6,000 sq ft minimum for any ADU — most Garrett Park properties qualify. For basement and garage conversions, lot size is not a constraint since no new footprint is added. For attached additions and detached cottages, rear yard setback requirements must be met — feasibility varies by property. DMV-GC Group confirms feasibility for your specific Garrett Park lot during the free consultation.",
  },
  {
    eventKey: "4",
    question: "What are the biggest challenges for ADU construction in Garrett Park's historic homes?",
    answer: "The four most common challenges are: (1) basement ceiling height — Victorian basements often measure 6'4\"–7'4\", at or below the 7-foot code minimum; (2) stone or rubble foundation moisture — must be assessed and managed before finishing; (3) older systems — galvanized plumbing and limited electrical panels requiring assessment and often updating; and (4) small lot sizes limiting detached ADU feasibility. DMV-GC Group addresses all four honestly during the consultation, with written assessment findings and clear recommendations before any design or construction begins.",
  },
  {
    eventKey: "5",
    question: "Is DMV-GC Group licensed for ADU construction in Garrett Park, MD?",
    answer: "Yes. DMV-GC Group holds a Maryland MHIC license — required for all home improvement and construction work in Garrett Park. We employ licensed plumbers and electricians in-house, are fully bonded, carry comprehensive general liability insurance and workers' compensation coverage, and provide a 1-year workmanship warranty on every ADU project in Garrett Park.",
  },
];

export default function ADUGarrettParkMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => {
    setActiveMenuItem("service");
  }, []);

  return (
    <div className="city-service-detail-page adu-garrett-park-md">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/services">Services</Link>
          <span>›</span>
          <Link href="/service/adu">ADU Construction</Link>
          <span>›</span>
          Garrett Park, MD
        </nav>

        <div className="hero">
          <div className="hero-location-tag">📍 Serving Garrett Park, MD</div>
          <h1>ADU Construction in Garrett Park, MD — Accessory Dwelling Unit Contractor</h1>
          <div className="hero-meta">
            <span className="badge hist">🏛️ National Register Historic District</span>
            <span className="badge">⭐ 4.9 Rating · 97+ Reviews</span>
            <span className="badge">✓ MHIC Licensed &amp; Insured</span>
            <span className="badge">✓ Town Permit Process Handled</span>
            <span className="badge dark">📞 +1 240-730-1292</span>
          </div>
        </div>

        <div className="historic-banner">
          <div className="icon">🏛️</div>
          <div>
            <h3>Garrett Park Is a National Register Historic District — And Its ADU Permits Come From the Town, Not Montgomery County</h3>
            <p>Garrett Park holds two distinctions that every ADU contractor must understand before starting work here. First: the entire town is listed on the National Register of Historic Places — one of the few complete municipalities in Maryland to hold this designation. This means exterior modifications affecting the historic character of homes must be designed with sensitivity and, for certain scopes, reviewed under Maryland's historic preservation framework. Second: Garrett Park is an incorporated town, and all building permits come from the Town of Garrett Park at 4600 Oxford Street — not from Montgomery County DPS. DMV-GC Group handles both the historic district awareness and the Town permit process as standard practice on every Garrett Park ADU project.</p>
          </div>
        </div>

        <div className="intro-box">
          Planning to build an <strong>ADU in Garrett Park, MD</strong>? Garrett Park is one of Montgomery County's most distinctive communities — a small, tree-canopied town of fewer than 1,000 residents where Victorian cottages, Queen Anne homes, and Craftsman bungalows from the 1880s–1930s line quiet streets near the MARC Brunswick Line station. ADU construction here requires a contractor who understands the Town's permit process, the historic character of Garrett Park's housing stock, and the real-world construction constraints of homes that are 80–130 years old. DMV-GC Group brings all three — managing the complete Town of Garrett Park ADU permit process, designing additions that respect the historic character, and building within the actual constraints of these remarkable older homes.
        </div>

        <div className="trust-bar">
          <div className="trust-item">
            <div className="icon">🏛️</div>
            <strong>Historic District Expertise</strong>
            <span>National Register sensitivity built in</span>
          </div>
          <div className="trust-item">
            <div className="icon">📋</div>
            <strong>Town Permits Handled</strong>
            <span>Town of Garrett Park — 4600 Oxford St</span>
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

        <h2>Types of ADUs We Build in Garrett Park, MD</h2>
        <p>
          Garrett Park's small lot sizes, historic housing stock, and National Register designation shape which ADU types are most feasible here. Here is an honest assessment of the options:
        </p>

        <div className="adu-type-grid">
          <div className="adu-type-card">
            <span className="adu-tag">Most Feasible — No Exterior Impact</span>
            <h3>Basement ADU Conversion</h3>
            <p>Converting an existing basement into a legal ADU is the most practical path for most Garrett Park properties — it adds no new building footprint, requires no exterior structural modification visible from the street, and avoids historic character concerns for the primary facades. Garrett Park's Victorian and Craftsman basements have specific constraints — ceiling height, foundation type, older systems — that DMV-GC Group assesses honestly during the free consultation. A well-executed basement ADU in Garrett Park can be a genuinely attractive unit with good ceiling height and, in homes on sloped lots, natural light from rear windows.</p>
            <div className="adu-cost">Typical Cost: $75,000 – $135,000</div>
          </div>
          <div className="adu-type-card">
            <span className="adu-tag">Strong Option Where Garage Exists</span>
            <h3>Detached Garage Conversion ADU</h3>
            <p>Many of Garrett Park's older homes have detached garages — built in the 1920s–1940s, separate from the main house, typically accessed from the rear alley or rear yard. Where the garage has adequate square footage and ceiling height, conversion to a studio or one-bedroom ADU is feasible. Being a separate structure from the main home, a rear-yard garage conversion typically has less historic design impact on the primary street facade. Town of Garrett Park permits and a Certificate of Occupancy are required. Structural assessment of older garage framing is essential before conversion is designed.</p>
            <div className="adu-cost">Typical Cost: $68,000 – $125,000</div>
          </div>
          <div className="adu-type-card">
            <span className="adu-tag">For Larger Lots With Design Review</span>
            <h3>Attached In-Law Suite Addition</h3>
            <p>A new addition built onto the rear of the main home — separate entrance, bedroom, bathroom, and kitchen. Less common in Garrett Park than in communities with larger lots, but feasible on some of the town's larger rear-yard properties. Any addition affecting the exterior of a Garrett Park home should be designed from the outset to be architecturally compatible with the Victorian or Craftsman character of the existing structure — both as a matter of good design and because the Town's review process considers compatibility. DMV-GC Group designs Garrett Park additions to this standard from the first draft.</p>
            <div className="adu-cost">Typical Cost: $110,000 – $210,000</div>
          </div>
          <div className="adu-type-card">
            <span className="adu-tag">Rarely Feasible in Garrett Park</span>
            <h3>Detached Backyard Cottage</h3>
            <p>New construction of a standalone ADU structure in the rear yard. Garrett Park's small lot sizes — many between 5,000 and 9,000 sq ft — make it difficult to accommodate a new detached structure while meeting the setback requirements of the applicable Montgomery County zoning district. Where a property has a sufficiently large rear yard and the Town's setback requirements can be met, a detached cottage is possible — but this is the exception rather than the rule in Garrett Park. DMV-GC Group confirms feasibility during the consultation.</p>
            <div className="adu-cost">Typical Cost: $145,000 – $270,000</div>
          </div>
        </div>

        <div className="author-box">
          <div className="author-avatar">🏠</div>
          <div className="author-info">
            <h4>About DMV-GC Group — Garrett Park's Licensed ADU Construction Contractor</h4>
            <p>DMV-GC Group has completed renovation projects in Garrett Park and neighboring Kensington — both communities concentrated with late Victorian and early 20th century homes where historic home construction expertise is essential. We understand the Town of Garrett Park permit process at 4600 Oxford Street, the National Register Historic District implications for exterior modifications, and the real-world construction characteristics of Garrett Park's older housing stock — stone foundations, galvanized plumbing, older electrical, ceiling height variation. We hold a Maryland MHIC license and back every project with a 1-year workmanship warranty.</p>
            <div className="author-creds">
              <span className="cred">MHIC Licensed</span>
              <span className="cred">Historic Home Expertise</span>
              <span className="cred">Town Permit Experience</span>
              <span className="cred">Licensed Plumbers</span>
              <span className="cred">Licensed Electricians</span>
              <span className="cred">4.9★ Rated</span>
            </div>
          </div>
        </div>

        <h2>Garrett Park's National Register Historic District — What It Means for ADU Construction</h2>
        <p>
          The Town of Garrett Park was platted in 1887 as a Victorian-era railroad suburb along the B&O Railroad's Metropolitan Branch — today's MARC Brunswick Line. The town's remarkably intact collection of late Victorian, Queen Anne, Folk Victorian, and early Craftsman homes earned it a listing on the National Register of Historic Places as a historic district. This designation is one of the most significant in Montgomery County and shapes how ADU construction should be approached here.
        </p>

        <div className="historic-grid">
          <div className="historic-card">
            <h3>🏠 What the National Register Does NOT Restrict</h3>
            <p>The National Register of Historic Places listing does not give the federal government authority over private property renovations. Interior modifications — finishing a basement, converting a garage interior, adding a bathroom — are not subject to federal historic review and proceed with Town of Garrett Park building permits like any other construction. The National Register designation alone does not restrict what Garrett Park homeowners can do inside their own homes.</p>
          </div>
          <div className="historic-card">
            <h3>🏛️ What Requires Careful Consideration</h3>
            <p>Exterior modifications that affect the historic character of a Garrett Park home — new openings in primary street-facing facades, changes to historic porch or entry features, new additions visible from the street — should be designed with sensitivity to the historic character. For any exterior scope that could be considered an "adverse effect" on a listed historic property, consultation with Maryland's State Historic Preservation Office (SHPO) may be appropriate. DMV-GC Group assesses every Garrett Park exterior ADU scope for historic review implications before design begins.</p>
          </div>
          <div className="historic-card">
            <h3>🪟 Egress Windows — Front vs Rear</h3>
            <p>Egress window installation for basement ADUs requires cutting a new opening in the foundation wall. For Garrett Park homes, the location matters: a new egress window on the rear or side of the home — not visible from the public street — has minimal historic impact and typically proceeds with Town permits only. A new opening in the front foundation wall — visible from the street — requires more careful design and may warrant SHPO review. DMV-GC Group designs all Garrett Park egress window installations to minimize historic impact, siting them at the rear or least-visible side of the home wherever the floor plan allows.</p>
          </div>
          <div className="historic-card">
            <h3>🚗 Rear Garage Conversions — Lower Impact</h3>
            <p>Garrett Park's rear-yard detached garages — accessed from alleys behind the homes — are generally less visible from the primary street and thus have lower historic impact when converted to an ADU. A well-executed garage conversion that retains the garage's exterior character while creating a functional interior ADU is one of the most historically sensitive ADU paths available in Garrett Park. DMV-GC Group designs garage conversions to maintain the exterior appearance of the original structure wherever possible.</p>
          </div>
        </div>

        <h2>Town of Garrett Park Permit Process for ADUs</h2>
        <p>
          Like neighboring Kensington, Garrett Park is an incorporated town with its own permit authority — entirely separate from Montgomery County DPS. All ADU permits in Garrett Park must be obtained from the Town, not the County.
        </p>

        <div className="spec-box">
          <h3>📋 Town of Garrett Park ADU Permits — What to Know</h3>
          <ul>
            <li><strong>Permit authority:</strong> Town of Garrett Park, 4600 Oxford Street, Garrett Park, MD 20896. All building, electrical, and plumbing permits for properties within the town limits are issued by the Town — not by Montgomery County DPS.</li>
            <li><strong>Zoning compliance:</strong> While building permits come from the Town, zoning requirements — ADU lot size minimum, size limits, setbacks — are governed by Montgomery County's ADU ordinance, which applies throughout unincorporated and incorporated county territory. DMV-GC Group verifies compliance with both the county's zoning requirements and the Town's building permit requirements before filing any application.</li>
            <li><strong>Plan review:</strong> The Town reviews submitted drawings before issuing permits. Required drawings include floor plan, egress window locations, separate entrance design, electrical layout, plumbing plan, and any structural modifications. DMV-GC Group prepares all required drawings in-house.</li>
            <li><strong>Historic compatibility:</strong> The Town's review for exterior modifications considers compatibility with Garrett Park's historic character. DMV-GC Group designs all exterior modifications — entrance additions, egress windows, garage conversion exteriors — to be compatible with the Victorian and Craftsman character of Garrett Park's homes, facilitating smoother Town review.</li>
            <li><strong>Certificate of Occupancy:</strong> Required before the ADU can be legally rented or occupied. Issued by the Town of Garrett Park after all required inspections pass. DMV-GC Group manages the COO process as part of every ADU project.</li>
            <li><strong>Jurisdiction verification:</strong> A very small number of properties near the Garrett Park boundary use Montgomery County DPS permits rather than Town permits. DMV-GC Group verifies the correct jurisdiction for every Garrett Park address using parcel boundary data before filing anything.</li>
          </ul>
        </div>

        <div className="warning">
          ⚠️ <strong>Permit Warning:</strong> Contractors who file Garrett Park ADU permits with Montgomery County DPS receive county permits — but Town of Garrett Park inspectors will not conduct inspections for projects within the town limits under county authority. The result is uninspected work, no valid Town Certificate of Occupancy, and an ADU that cannot legally be rented. DMV-GC Group eliminates this risk by verifying jurisdiction at the start of every Garrett Park project.
        </div>

        <h2>ADU Construction in Garrett Park's Older Homes — Real Constraints, Honestly Assessed</h2>
        <p>
          Garrett Park's Victorian and Craftsman homes from the 1880s–1930s are architecturally irreplaceable — and they present specific construction realities for ADU projects that a contractor experienced only in newer suburban homes will not anticipate. DMV-GC Group assesses all of these during the free consultation, so there are no surprises mid-project.
        </p>

        <div className="spec-box">
          <h3>🔧 Historic Home ADU Construction Realities in Garrett Park</h3>
          <ul>
            <li><strong>Foundation type:</strong> Garrett Park's oldest homes — 1880s–1910s — commonly have rubble stone or early brick foundations. These are more porous than poured concrete and require interior moisture management rather than exterior waterproofing. The masonry quality and pointing condition must be assessed before any basement ADU is designed. Some foundations have been partially repaired or reinforced over the decades — the current condition, not the original construction, is what matters.</li>
            <li><strong>Basement ceiling height:</strong> Victorian basements were functional utility spaces, not living areas. Ceiling heights of 6'4"–7'4" are common — at or below the 7-foot minimum required for habitable ADU space. DMV-GC Group measures every square foot of ceiling height in Garrett Park basements during the consultation. Areas below the minimum cannot count as habitable ADU space. Where HVAC and plumbing rerouting can recover a few inches of clearance, we identify and price that option.</li>
            <li><strong>Galvanized plumbing:</strong> Homes built before 1950 in Garrett Park often retain galvanized steel supply lines — which corrode from the inside over decades, restricting flow and eventually failing. For a basement ADU where a tenant depends on water pressure, corroded galvanized supply lines must be replaced before the unit is rented. DMV-GC Group's licensed plumbers assess supply line condition and provide a replacement recommendation during the consultation for every pre-1950 Garrett Park home.</li>
            <li><strong>Electrical systems:</strong> Older Garrett Park homes may have original or early-replacement electrical panels with limited capacity for ADU circuits. A sub-panel for the ADU requires adequate capacity in the main panel — if the main panel is at or near capacity, an upgrade is required before ADU electrical work can be sized and installed. DMV-GC Group's licensed electricians assess panel capacity during the consultation.</li>
            <li><strong>Knob-and-tube wiring:</strong> Some of Garrett Park's oldest homes retain segments of original knob-and-tube wiring — an early 20th century wiring system that cannot be buried under insulation and is incompatible with modern circuit protection. Where knob-and-tube is present in the basement ADU zone, its scope and condition must be assessed and appropriate remediation designed before ADU electrical work proceeds.</li>
            <li><strong>Tree canopy and exterior access:</strong> Garrett Park's dense mature tree canopy — one of the community's defining characteristics — can affect equipment access to rear yards for any exterior foundation or drainage work. Delivery and equipment access routes must be planned before any exterior scope is scheduled. DMV-GC Group identifies access constraints during the site visit.</li>
          </ul>
        </div>

        <h2>Garrett Park ADU Rental Demand — MARC Brunswick Line Access</h2>
        <p>
          Garrett Park's MARC Brunswick Line station — walkable from essentially every home in the town — is the primary rental demand driver for ADUs here. The Brunswick Line connects Garrett Park to Union Station in Washington DC (approximately 35 minutes), making Garrett Park a genuine transit-oriented community for DC commuters who want a distinctive, historic setting rather than a conventional suburban apartment.
        </p>

        <div className="tip">
          💡 <strong>Garrett Park ADU Rental Market:</strong> A quality basement or garage conversion ADU in Garrett Park — walkable to the MARC station — commands $1,500–$2,100/month. The combination of historic charm, walkability, and MARC access attracts professional renters who value the character of the community and are willing to pay a premium over comparable units in neighboring Wheaton or Kensington. A $80,000–$110,000 basement ADU investment paying $1,700/month reaches full payback in approximately 4–5 years — with ongoing rental income and meaningful property value addition thereafter.
        </div>

        <h2>Benefits of Building an ADU in Garrett Park</h2>

        <div className="benefit-grid">
          <div className="benefit-box">
            <div className="icon">💰</div>
            <strong>Rental Income</strong>
            <span>$1,500–$2,100/month for quality ADUs — MARC walkability and historic character command a premium over neighboring communities</span>
          </div>
          <div className="benefit-box">
            <div className="icon">📈</div>
            <strong>Property Value</strong>
            <span>A permitted ADU adds $90,000–$150,000 to Garrett Park property values — in a market where historic homes are consistently sought after</span>
          </div>
          <div className="benefit-box">
            <div className="icon">🚂</div>
            <strong>MARC Station Walkability</strong>
            <span>Every Garrett Park home is walkable to the MARC Brunswick Line — the strongest ADU rental demand driver in the community</span>
          </div>
          <div className="benefit-box">
            <div className="icon">👨‍👩‍👧</div>
            <strong>Multigenerational Living</strong>
            <span>House aging parents or adult children on the same property — in a community that strongly values multi-generational family presence</span>
          </div>
          <div className="benefit-box">
            <div className="icon">🏛️</div>
            <strong>Preserve Historic Character</strong>
            <span>Basement and garage ADUs add rental income with zero visual impact on Garrett Park's street-facing historic facades</span>
          </div>
          <div className="benefit-box">
            <div className="icon">🌳</div>
            <strong>Small Town Appeal</strong>
            <span>Garrett Park's character attracts renters who specifically want this community — reducing vacancy and turnover compared to generic suburban rental units</span>
          </div>
        </div>

        <h2>Our ADU Construction Process in Garrett Park</h2>

        <div className="steps">
          <div className="step">
            <div className="step-num">1</div>
            <div className="step-content">
              <h3>Free In-Home Consultation — Historic Home Assessment</h3>
              <p>We visit your Garrett Park home and assess all ADU options honestly — basement ceiling heights and foundation type, garage dimensions and structural condition, lot size for addition potential, and equipment access constraints from the tree canopy. We identify every older-systems consideration and give you a realistic picture of what is feasible before any design begins. No cost, no obligation.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">2</div>
            <div className="step-content">
              <h3>Older Systems Assessment</h3>
              <p>Our licensed plumbers assess galvanized supply line condition. Our licensed electricians assess panel capacity and knob-and-tube presence. Foundation moisture conditions are documented. Any required pre-ADU remediation — plumbing replacement, electrical upgrade, moisture management — is designed and priced before ADU construction scope is finalized. No surprises mid-project.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">3</div>
            <div className="step-content">
              <h3>Historic District Scope Assessment</h3>
              <p>We assess every exterior ADU modification for historic district implications. Egress windows sited at rear or least-visible side. Additions designed for architectural compatibility from the first draft. Where any exterior scope warrants SHPO consultation, we identify it before design is finalized — not after permits are filed.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">4</div>
            <div className="step-content">
              <h3>ADU Design Development</h3>
              <p>Our design team develops the floor plan within the actual constraints confirmed during the assessment phase — ceiling heights, foundation type, existing entrance configuration, egress window locations away from primary facades. For garage conversions, exterior design maintains the original structure's character while creating a functional interior ADU space.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">5</div>
            <div className="step-content">
              <h3>Town of Garrett Park Permit Filing</h3>
              <p>We prepare all required drawings and file all applications with the Town of Garrett Park at 4600 Oxford Street — building, electrical, and plumbing permits. Our permit team manages all Town correspondence, plan review responses, and inspection scheduling throughout the project.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">6</div>
            <div className="step-content">
              <h3>Pre-ADU Remediation + Construction</h3>
              <p>Plumbing remediation, electrical work, and moisture management are completed first. Then egress windows, framing, mechanical rough-ins, insulation, drywall, flooring, kitchen, bathroom, and all finish work — coordinated by a dedicated project manager and inspected at each required stage by Town inspectors.</p>
            </div>
          </div>
          <div className="step">
            <div className="step-num">7</div>
            <div className="step-content">
              <h3>Town COO, Final Walkthrough &amp; 1-Year Warranty</h3>
              <p>We manage all required Town of Garrett Park final inspections and the Certificate of Occupancy process. After COO issuance, we conduct a thorough final walkthrough, address every punch list item, and activate your 1-year workmanship warranty.</p>
            </div>
          </div>
        </div>

        <h2>ADU Construction Cost in Garrett Park, MD</h2>
        <p>
          Here is a realistic cost breakdown for <strong>ADU construction in Garrett Park, Maryland</strong>. Costs for historic homes run 10–25% higher than comparable projects in newer construction — reflecting older systems remediation, foundation moisture management, and sensitive historic construction practices:
        </p>

        <div className="table-responsive">
          <div className="table-holder">
            <table className="cost-table">
              <tbody>
                <tr>
                  <th>ADU Type</th>
                  <th>Typical Cost Range</th>
                  <th>Notes for Garrett Park</th>
                </tr>
                <tr>
                  <td>Basement ADU Conversion</td>
                  <td>$75,000 – $135,000</td>
                  <td>Includes moisture management, egress windows (rear/side siting), separate entrance, kitchen, bathroom, fire separation, Town COO. Older homes add 10–20% for systems remediation.</td>
                </tr>
                <tr>
                  <td>Detached Garage Conversion ADU</td>
                  <td>$68,000 – $125,000</td>
                  <td>Structural assessment of 1920s–40s framing required. Utility run from main house is primary cost variable. Exterior character preserved where possible.</td>
                </tr>
                <tr>
                  <td>Attached In-Law Suite Addition</td>
                  <td>$110,000 – $210,000</td>
                  <td>Designed for architectural compatibility with Victorian/Craftsman character. Rear-yard siting preferred to minimize street-facing historic impact.</td>
                </tr>
                <tr>
                  <td>Detached Backyard Cottage (where feasible)</td>
                  <td>$145,000 – $270,000</td>
                  <td>Feasibility depends on lot size after setbacks. Less common in Garrett Park than in larger-lot communities.</td>
                </tr>
                <tr>
                  <td>Pre-ADU Older Systems Remediation</td>
                  <td>$5,000 – $28,000</td>
                  <td>Galvanized plumbing replacement, electrical panel upgrade, knob-and-tube remediation where present, foundation moisture management — assessed and priced before ADU construction begins.</td>
                </tr>
                <tr>
                  <td>Rear Egress Window (historically sensitive siting)</td>
                  <td>$4,500 – $10,000</td>
                  <td>Stone or rubble foundation cutting may add cost vs. poured concrete. Window well drain and waterproofing at opening included.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="cta-banner">
          <h2>Get a Free ADU Consultation in Garrett Park</h2>
          <p>We'll visit your historic Garrett Park home, assess ADU feasibility honestly — basement constraints, garage potential, older systems, historic implications — confirm your Town permit jurisdiction, and provide a realistic estimate. No cost, no obligation.</p>
          <Link href="/contact-us" className="cta-btn">Schedule Free ADU Consultation</Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 Call +1 240-730-1292</a>
        </div>

        <h2>What Garrett Park Homeowners Say About DMV-GC Group</h2>

        <div className="review-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Our 1905 Victorian has a stone foundation basement. DMV-GC Group assessed the moisture situation honestly, managed it correctly, and converted the basement into a one-bedroom ADU. The egress window went in the rear — no impact on our front facade at all. Town permit and COO handled entirely by their team."</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">Oxford Street, Garrett Park MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Our detached garage from the 1930s is now a beautiful studio ADU. DMV-GC Group kept the exterior looking like the original garage — same board-and-batten siding, same roofline — while completely rebuilding the interior. MARC commuters are the ideal tenants and we've never had a vacancy."</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">Rokeby Avenue, Garrett Park MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"The galvanized pipes were the issue we didn't know about. DMV-GC Group's plumber found severely restricted flow during the consultation and told us before we committed to the project. They replaced the supply lines as part of the ADU scope — our water pressure throughout the whole house is better now."</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">Strathmore Avenue, Garrett Park MD</span></div>
          </div>
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">"Most contractors we talked to didn't know Garrett Park uses Town permits, not MoCo. DMV-GC Group knew immediately, filed with the Town at Oxford Street, and our project moved smoothly through plan review and inspections. The basement ADU is rented to a DC commuter at $1,850/month."</p>
            <div className="review-author">— Verified Homeowner · <span className="review-location">Keswick Street, Garrett Park MD</span></div>
          </div>
        </div>

        <div className="highlight">
          <p>⭐ <strong>4.9-star rated with 97+ verified reviews.</strong> Garrett Park homeowners trust DMV-GC Group for ADU projects that navigate the Town's permit process correctly, respect the National Register Historic District character, address older home construction constraints honestly, and deliver legal, rentable units that enhance rather than diminish these remarkable historic homes.</p>
        </div>

        <h2>Serving Garrett Park and Surrounding Areas for ADU Construction</h2>

        <div className="areas-grid">
          <span className="area-pill">Garrett Park, MD</span>
          <span className="area-pill">Oxford Street</span>
          <span className="area-pill">Rokeby Avenue</span>
          <span className="area-pill">Strathmore Avenue</span>
          <span className="area-pill">Kensington</span>
          <span className="area-pill">North Bethesda</span>
          <span className="area-pill">Wheaton</span>
          <span className="area-pill">Rockville</span>
          <span className="area-pill">Bethesda</span>
        </div>

        <div className="nearby-box">
          <h3>Also serving Kensington, MD — Garrett Park's neighboring historic town</h3>
          <p>DMV-GC Group builds ADUs throughout Kensington, which borders Garrett Park to the south and shares the same concentration of Victorian and Craftsman homes with similar construction considerations and its own separate Town permit process. <Link href="/service/adu/kensington-md">View our Kensington ADU page →</Link></p>
        </div>

        <h2>Frequently Asked Questions — ADU Construction in Garrett Park, MD</h2>
        <Accordion defaultActiveKey="0" flush>
          {faqData.map((faq) => (
            <Accordion.Item eventKey={faq.eventKey} key={faq.eventKey}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <div className="internal-links">
          <h2>Explore Our Other Services in Garrett Park</h2>
          <ul>
            <li><Link href="/service/kitchen-remodeling/garrett-park-md">Kitchen Remodeling in Garrett Park, MD</Link></li>
            <li><Link href="/service/bathroom-remodeling">Bathroom Remodeling in Garrett Park, MD</Link></li>
            <li><Link href="/service/basement-remodeling/garrett-park-md">Basement Remodeling in Garrett Park, MD</Link></li>
            <li><Link href="/service/home-additions">Home Additions in Garrett Park, MD</Link></li>
            <li><Link href="/service/design-build">Design-Build Contractor in Garrett Park, MD</Link></li>
            <li><Link href="/service/electrical-services">Electrical Services for Historic Homes in Garrett Park</Link></li>
          </ul>
        </div>

        <div className="cta-banner">
          <h2>Ready to Build Your Garrett Park ADU?</h2>
          <p>Call us at <strong>+1 240-730-1292</strong> or schedule your free in-home consultation. We'll assess your historic home's ADU potential honestly — basement constraints, garage feasibility, older systems, historic implications — and design the ADU that works for your property and this remarkable community.</p>
          <Link href="/contact-us" className="cta-btn">Get Free ADU Consultation in Garrett Park →</Link>
          <a href="tel:+1 (240) 730-1292" className="cta-btn outline">📞 +1 240-730-1292</a>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }} />
    </div>
  );
}
