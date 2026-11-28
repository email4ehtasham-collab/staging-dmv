import type { ReactNode } from "react";
import Link from "next/link";
import { cityServiceHref } from "@/data/services/cityServiceHref";
import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import { HomeServicesData } from "@/data/services/ServiceData";
import ServiceCard, { type ServiceCardData } from "./ServiceCard";
import styles from "./services.module.scss";

const supportingLinks = [
  { label: "Framing", href: "/service/framing" },
  { label: "Drywall", href: "/service/drywall" },
  { label: "Flooring", href: "/service/flooring-remodeling" },
  { label: "Electrical", href: "/service/electrical-services" },
  { label: "Plumbing", href: "/service/plumbing-services" },
  { label: "HVAC", href: "/service/hvac" },
  { label: "Roofing", href: "/service/roofing" },
  { label: "Siding", href: "/service/siding-installation" },
  { label: "Decks", href: "/service/decks" },
  { label: "Patios", href: "/service/patios" },
];

export type ServiceCardOverride = Partial<Omit<ServiceCardData, "slug">> & Pick<ServiceCardData, "slug">;

type ServicesProps = {
  eyebrow?: string;
  title?: string;
  text?: ReactNode;
  align?: "left" | "center";
  serviceOverrides?: ServiceCardOverride[];
  serviceOrder?: string[];
  /** City slug (e.g. "bethesda-md"): links go to that city's service page when it exists, else to the hub. */
  citySlug?: string;
  /** Set false to hide the small label above each card title. */
  showCardEyebrow?: boolean;
};

function getServices(serviceOverrides?: ServiceCardOverride[], serviceOrder?: string[]): ServiceCardData[] {
  const allServices = HomeServicesData as ServiceCardData[];
  const merged = allServices.map((service) => {
    const override = serviceOverrides?.find((item) => item.slug === service.slug);
    return override ? { ...service, ...override } : service;
  });

  if (!serviceOrder?.length) {
    return merged;
  }

  const ordered = serviceOrder
    .map((slug) => merged.find((service) => service.slug === slug))
    .filter((service): service is ServiceCardData => Boolean(service));

  return [
    ...ordered,
    ...merged.filter((service) => !serviceOrder.includes(service.slug)),
  ];
}

export default function Services({
  eyebrow = "Our Exclusive Services",
  title = "Our Home Remodeling Services in Maryland and DC",
  text = "These are seven of the main remodeling services we offer across Maryland and Washington, DC. Each one has its own page with details on design, permits, costs and timelines, and the rest of our services are listed after these seven.",
  align = "left",
  serviceOverrides,
  serviceOrder,
  citySlug,
  showCardEyebrow = true,
}: ServicesProps = {}) {
  const services = getServices(serviceOverrides, serviceOrder).map((service) =>
    citySlug && (!service.href || service.href === `/service/${service.slug}`)
      ? { ...service, href: cityServiceHref(service.slug, citySlug) }
      : service
  );

  return (
    <section id="services" className={styles.section} aria-labelledby="services-title">
      <Container>
        <div className={`${styles.header} ${align === "center" ? styles.headerCentered : ""}`}>
          <SectionHeading
            className={styles.heading}
            id="services-title"
            align={align}
            eyebrow={<Badge>{eyebrow}</Badge>}
            title={title}
            text={text}
          />
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} showEyebrow={showCardEyebrow} />
          ))}
        </div>

        <div className={styles.beyond}>
          <div className={styles.beyondCopy}>
            <p>
              Beyond these seven services, we also take on the supporting work that remodels depend on, from framing, drywall and flooring to electrical, plumbing, HVAC, roofing, siding, decks and patios.{" "}
              <Link href="/services">See all of our services.</Link>
            </p>
            <ul className={styles.tags} aria-label="Supporting remodeling services">
              {supportingLinks.map((link) => (
                <li key={link.href}>
                  <Link href={citySlug ? cityServiceHref(link.href.replace("/service/", ""), citySlug) : link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Button href="/contact-us" data-estimate-trigger className={styles.beyondButton}>
            Get a Free Estimate
          </Button>
        </div>
      </Container>
    </section>
  );
}
