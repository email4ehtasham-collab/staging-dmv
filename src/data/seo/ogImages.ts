import type { Metadata } from "next";

// Open Graph / Twitter share images (1200x630, in public/og/).
// Pages listed here get their own image; every other page gets DEFAULT_OG_IMAGE.
// An image set in the SEO dashboard (ogImage) always wins over these.

type OgImage = { url: string; alt: string };

const SITE = "https://www.dmv-gc.com";

export const DEFAULT_OG_IMAGE: OgImage = {
  url: `${SITE}/og/dmv-general-contracting-default.jpg`,
  alt: "Renovated condo kitchen with white cabinets and a stainless range hood by DMV General Contracting Group",
};

const PAGE_OG_IMAGES: Record<string, OgImage> = {
  "/": {
    url: `${SITE}/og/home-remodeling-maryland-dc.jpg`,
    alt: "Open-concept condo kitchen with a navy island, remodeled in DC by DMV General Contracting Group",
  },
  "/service/kitchen-remodeling": {
    url: `${SITE}/og/kitchen-remodeling-maryland.jpg`,
    alt: "Bethesda condo kitchen with white cabinets, a stainless range and a vented hood",
  },
  "/service/bathroom-remodeling": {
    url: `${SITE}/og/bathroom-remodeling-maryland.jpg`,
    alt: "Chevy Chase bathroom with a white vanity, a tiled tub surround and hexagon floor tile",
  },
  "/service/basement-remodeling": {
    url: `${SITE}/og/basement-remodeling-maryland.jpg`,
    alt: "Finished basement family room with a sectional sofa, a fireplace wall and a kitchenette",
  },
  "/service/adu": {
    url: `${SITE}/og/adu-builder-maryland-dc.jpg`,
    alt: "Two-story detached accessory dwelling unit behind a fenced yard in Northwest DC",
  },
  "/service/home-additions": {
    url: `${SITE}/og/home-additions-maryland.jpg`,
    alt: "Screened porch addition built above a garage in Chevy Chase, MD",
  },
  "/service-area/bethesda-md": {
    url: `${SITE}/og/general-contractor-bethesda-md.jpg`,
    alt: "General contractor remodeling a home in Bethesda, MD",
  },
  "/service-area/washington-dc": {
    url: `${SITE}/og/general-contractor-washington-dc.jpg`,
    alt: "General contractor remodeling a rowhouse in Washington, DC",
  },
};

export function ogImageFor(path: string): OgImage {
  return PAGE_OG_IMAGES[path] ?? DEFAULT_OG_IMAGE;
}

/** Adds og:image and twitter:image to page metadata unless one is already set. */
export function withOgImage(metadata: Metadata, path: string): Metadata {
  const image = ogImageFor(path);
  const og = metadata.openGraph ?? {};
  const tw = metadata.twitter ?? {};

  return {
    ...metadata,
    openGraph: og.images ? og : { ...og, images: [{ url: image.url, width: 1200, height: 630, alt: image.alt }] },
    twitter: tw.images ? tw : { ...tw, images: [{ url: image.url, alt: image.alt }] },
  };
}
