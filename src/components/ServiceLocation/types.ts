import type { ReactNode } from "react";

export type ServiceLocationFact = {
  label: string;
  value: ReactNode;
  note?: string;
};

export type ServiceLocationHeroData = {
  serviceName: string;
  serviceHref: string;
  locationName: string;
  badge: string;
  title: string;
  titleAccent?: string;
  intro: string;
  credentials: string[];
  factsTitle: string;
  factsCtaText: string;
  factsCtaLabel: string;
  facts: ServiceLocationFact[];
};

export type ServiceLocationOverviewItem = {
  title: string;
  text?: string;
};

export type ServiceLocationOverviewData = {
  eyebrow: string;
  title: string;
  text: string;
  paragraphs: string[];
  itemsTitle: string;
  items: ServiceLocationOverviewItem[];
  image: string;
  imageAlt: string;
  imageBadge: string;
  imageCaption: string;
  mediaFacts: ServiceLocationFact[];
  note: string;
};

export type ServiceLocationCostRow = {
  level: string;
  title: string;
  range: string;
  text: string;
  badge?: string;
};

export type ServiceLocationCostsData = {
  eyebrow: string;
  title: string;
  text: string;
  featured?: {
    range: string;
    label: string;
  };
  rows: ServiceLocationCostRow[];
  note: string;
  ctaLabel?: string;
};

export type ServiceLocationConsultation = {
  title: string;
  text: string;
  ctaLabel: string;
};

export type ServiceLocationProcessStep = {
  number: string;
  title: string;
  side: "left" | "right";
  text: string;
};

export type ServiceLocationProcessDuration = {
  value: string;
  text: string;
};

export type ServiceLocationProcessData = {
  title: string;
  text: string;
  steps: ServiceLocationProcessStep[];
  durations: ServiceLocationProcessDuration[];
};

export type ServiceLocationFaq = {
  question: string;
  answer: string;
};

export type ServiceLocationFaqData = {
  eyebrow: string;
  title: string;
  text: string;
  items: ServiceLocationFaq[];
};

export type ServiceLocationContent = {
  hero: ServiceLocationHeroData;
  overview: ServiceLocationOverviewData;
  costs: ServiceLocationCostsData;
  consultation: ServiceLocationConsultation;
  process: ServiceLocationProcessData;
  licensedVariant?: "home" | "kitchen" | "bethesda";
  projectsServiceType?: string;
  faq: ServiceLocationFaqData;
  estimateVariant?: "home" | "kitchen";
};
