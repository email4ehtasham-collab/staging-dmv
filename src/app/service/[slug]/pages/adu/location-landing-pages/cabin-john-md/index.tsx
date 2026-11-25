'use client';

import "../city-service-style.scss";
import Link from "next/link";
import { useEffect } from "react";
import { useMyContext } from "@/hooks/context";

const faqs = [
  {
    question: "Can you build an ADU in Cabin John, MD?",
    answer: "Yes. Cabin John lots are governed by Montgomery County ADU rules. One attached or detached ADU is allowed on a lot with a single-family detached home, up to 75% of the main house since October 5, 2026.",
  },
  {
    question: "What ADU type fits a Cabin John lot?",
    answer: "Larger Cabin John lots often suit detached backyard cottages. Where setbacks are tighter, an attached in-law suite, basement unit or garage conversion is usually the better fit.",
  },
  {
    question: "How much does an ADU cost near Cabin John?",
    answer: "Most new ADUs in Maryland cost $150,000 to $300,000. Converting a garage or basement costs $60,000 to $150,000. Utility runs and a new foundation are itemized separately.",
  },
];

export default function ADUCabinJohnMD() {
  const { setActiveMenuItem } = useMyContext();
  useEffect(() => {
    setActiveMenuItem("service");
  }, []);

  return (
    <main>
      <div className="city-service-detail-page adu-cabin-john-md">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link><span>›</span>
            <Link href="/services">Services</Link><span>›</span>
            <Link href="/service/adu">ADU Builder</Link><span>›</span>
            Cabin John, MD
          </nav>

          <div className="hero">
            <div className="hero-location-tag">Serving Cabin John, MD</div>
            <h1>ADU Builder in Cabin John, Maryland</h1>
            <p>
              DMV General Contracting Group designs and builds accessory dwelling units on Cabin John lots, from the first zoning check through DHCA licensing, Montgomery County permits and final inspection.
            </p>
            <div className="hero-meta">
              <span className="badge">MHIC #156178</span>
              <span className="badge">DC DLCP #410526000209</span>
              <span className="badge">4.9 out of 5 on Google</span>
              <span className="badge dark">Call +1 240-730-1292</span>
            </div>
          </div>

          <div className="intro-box">
            Cabin John is governed by Montgomery County ADU rules. Accessory dwelling units are allowed by right on single-family lots, and the unit can be up to 75% of the main house. We check your exact address before drawing the plan.
          </div>

          <div className="trust-bar">
            <div className="trust-item"><strong>Lot check</strong><span>Setbacks and coverage</span></div>
            <div className="trust-item"><strong>Montgomery County</strong><span>DHCA and DPS permits handled</span></div>
            <div className="trust-item"><strong>One contract</strong><span>Design, permits and construction</span></div>
            <div className="trust-item"><strong>1-year warranty</strong><span>Workmanship on every ADU</span></div>
          </div>

          <h2>ADU Options for Cabin John Lots</h2>
          <div className="service-grid">
            <div className="service-item">Detached backyard cottage</div>
            <div className="service-item">Apartment over a garage</div>
            <div className="service-item">Attached in-law suite</div>
            <div className="service-item">Basement apartment</div>
            <div className="service-item">Garage conversion</div>
          </div>

          <h2>Typical ADU Costs</h2>
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
            <div className="step"><span className="step-num">1</span><div className="step-content"><h3 className="h3">Zoning and site check</h3><p>We confirm setbacks, lot coverage and utility routes for your Cabin John address.</p></div></div>
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
          <p>Book a free ADU feasibility check, or call <a href="tel:+12407301292">+1 240-730-1292</a> any day. See the full <Link href="/service/adu">ADU builder guide</Link> for Maryland and Washington, DC.</p>
        </div>
      </div>
    </main>
  );
}
