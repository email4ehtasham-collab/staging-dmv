"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ClientReviews from "./ClientReviews";

function findTargetSection() {
  const byId = document.getElementById("licensed-insured");
  if (byId) return byId;

  const headings = Array.from(document.querySelectorAll("h1, h2, h3"));
  const textOf = (heading: Element) => (heading.textContent || "").trim();
  const sectionOf = (heading: Element | undefined) => heading?.closest("section") ?? heading?.parentElement ?? null;

  const why =
    headings.find((item) => /^why\b/i.test(textOf(item)) && /choose|hire us/i.test(textOf(item))) ||
    headings.find((item) => /^why\b/i.test(textOf(item)));
  const about = headings.find((item) => /^about\s+(dmv|us)\b/i.test(textOf(item)));
  const cta = headings.find((item) => /^(ready|start|request|get a|schedule|book|contact)\b/i.test(textOf(item)));

  return sectionOf(why) ?? sectionOf(about) ?? sectionOf(cta);
}

export default function ReviewsBeforeWhyChooseUs() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const target = findTargetSection();
    if (!target?.parentElement) return;

    const element = document.createElement("div");
    target.parentElement.insertBefore(element, target);
    setHost(element);

    return () => {
      element.remove();
    };
  }, []);

  return host ? createPortal(<ClientReviews id="home-reviews" />, host) : <ClientReviews id="home-reviews" />;
}
