import servicesData from "@/data/services/ServiceData";

type ServiceHeroImageData = {
  src: string;
  alt: string;
};

const FALLBACK_IMAGE = "/images/services/general-contractor.webp";

function normalizeImagePath(src?: string) {
  if (typeof src !== "string" || src.length === 0) {
    return FALLBACK_IMAGE;
  }
  if (src.startsWith("../")) {
    return `/${src.slice(3)}`;
  }
  if (src.startsWith("./")) {
    return `/${src.slice(2)}`;
  }
  return src;
}

export function getServiceHeroImage(serviceHref?: string): ServiceHeroImageData {
  const parts = (serviceHref ?? "").split("/").filter(Boolean);
  const slug = parts[0] === "service" ? parts[1] : parts[parts.length - 1];
  const service = servicesData.find((item) => item.slug === slug);

  return {
    src: normalizeImagePath(service?.image || service?.cover || FALLBACK_IMAGE),
    alt: service?.imageAlt || (service?.title ? `${service.title} services` : "Home remodeling services"),
  };
}

export function getFallbackHeroImage(): ServiceHeroImageData {
  return {
    src: FALLBACK_IMAGE,
    alt: "Home remodeling and general contracting services",
  };
}
