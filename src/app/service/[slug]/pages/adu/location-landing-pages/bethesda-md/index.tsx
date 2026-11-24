'use client';

import "../city-service-style.scss";
import Link from "next/link";
import { useEffect } from "react";
import { useMyContext } from "@/hooks/context";

const faqs = [
  {
    question: "Can you build an ADU in Bethesda, MD?",
    answer: "Yes. Montgomery County allows one attached or detached ADU on lots with a single-family detached home. Since October 5, 2026, the unit can be up to 75% of the size of the main house. You apply to DHCA for an ADU license before the building permit.",
  },
  {
    question: "How much does an ADU cost in Bethesda?",
    answer: "Most new ADUs in Maryland cost $150,000 to $300,000. Converting a garage or basement costs $60,000 to $150,000. Site work for water, sewer, electric and a new foundation appears as its own estimate line.",
  },
  {
    question: "Do Bethesda ADUs need extra parking?",
    answer: "No parking space is required within 1 mile of Metrorail, the Purple Line or MARC. Elsewhere, one on-site space is required, with a waiver option.",
  },
];

export default function ADUBethesdaMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => {
    setActiveMenuItem("service");
  }, []);

  return (
    <main>
      <div className="city-service-detail-page adu-bethesda-md">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/services">Services</Link><span>›</span>
            <Link href="/service/adu">ADU Builder</Link><span>›</span>
            Bethesda, MD
          </nav>

          <div className="hero">
            <div className="hero-location-tag">Serving Bethesda, MD</div>
            <h1>ADU Builder in Bethesda, Maryland</h1>
            <p>
              DMV General Contracting Group checks your lot, designs the unit, files the permits and builds it under one contract. Bethesda lots close to Metrorail often support detached cottages, basement units and attached in-law suites.
            </p>
            <div className="hero-meta">
              <span className="badge">MHIC #156178</span>
              <span className="badge">DC DLCP #410526000209</span>
              <span className="badge">4.9 out of 5 on Google</span>
              <span className="badge dark">Call (240) 730-1292</span>
            </div>
          </div>

          <div className="intro-box">
            Accessory dwelling units are allowed by right on single-family lots in Montgomery County. Since October 5, 2026, the unit can be up to 75% of the main house. We apply for the DHCA ADU license before the building permit and design the unit around your exact address.
          </div>

          <div className="trust-bar">
            <div className="trust-item"><strong>Lot check</strong><span>Setbacks, coverage and utilities</span></div>
            <div className="trust-item"><strong>DHCA license</strong><span>Filed before the building permit</span></div>
            <div className="trust-item"><strong>One contract</strong><span>Design, permits and construction</span></div>
            <div className="trust-item"><strong>1-year warranty</strong><span>Workmanship on every ADU</span></div>
          </div>

          <h2>ADU Types We Build in Bethesda</h2>
          <div className="service-grid">
            <div className="service-item">Detached backyard cottage</div>
            <div className="service-item">Apartment over a garage</div>
            <div className="service-item">Attached unit or in-law suite</div>
            <div className="service-item">Basement unit</div>
            <div className="service-item">Garage conversion</div>
          </div>

          <h2>ADU Costs in Bethesda</h2>
          <div className="table-responsive">
            <table className="cost-table">
              <thead><tr><th>ADU type</th><th>Typical cost</th></tr></thead>
              <tbody>
                <tr><td>Garage or basement conversion</td><td>$60,000–$150,000</td></tr>
                <tr><td>Attached ADU or in-law suite</td><td>$120,000–$250,000</td></tr>
                <tr><td>Detached new build</td><td>$150,000–$300,000+</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Our ADU Process</h2>
          <div className="steps">
            <div className="step"><span className="step-num">1</span><div className="step-content"><h3 className="h3">Zoning and site check</h3><p>We confirm setbacks, lot coverage, utility routes and the ADU rules for your address.</p></div></div>
            <div className="step"><span className="step-num">2</span><div className="step-content"><h3 className="h3">Design</h3><p>We draw the plan, elevations and site layout, and price the job line by line.</p></div></div>
            <div className="step"><span className="step-num">3</span><div className="step-content"><h3 className="h3">License and permits</h3><p>We apply for the DHCA ADU license first, then file with Montgomery County DPS.</p></div></div>
            <div className="step"><span className="step-num">4</span><div className="step-content"><h3 className="h3">Build and inspect</h3><p>We build, pass inspections and finish the interior before final sign-off.</p></div></div>
          </div>

          <h2>Frequently Asked Questions</h2>
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary><h3 className="h3">{faq.question}</h3></summary>
              <p>{faq.answer}</p>
            </details>
          ))}

          <h2>Request a Free ADU Feasibility Check</h2>
          <p>Book a free ADU feasibility check, or call <a href="tel:+12407301292">(240) 730-1292</a> any day. See the full <Link href="/service/adu">ADU builder guide</Link> for Maryland and Washington, DC.</p>
        </div>
      </div>
    </main>
  );
}
