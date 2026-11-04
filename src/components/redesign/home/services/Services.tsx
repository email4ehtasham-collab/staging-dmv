import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import ServiceData from "@/data/services/ServiceData";
import styles from "./services.module.scss";

const featuredServiceSlugs = [
  "kitchen-remodeling",
  "home-additions",
  "bathroom-remodeling",
  "decks",
  "basement-remodeling",
  "flooring-remodeling",
];

const services = featuredServiceSlugs
  .map((slug) => ServiceData.find((service) => service.slug === slug))
  .filter(Boolean);

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

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" className={styles.arrowIcon}>
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            className={styles.heading}
            id="services-title"
            eyebrow={<Badge>Our Exclusive Services</Badge>}
            title="Our Home Remodeling Services in Maryland and DC"
            text="These are seven of the main remodeling services we offer across Maryland and Washington, DC. Each one has its own page with details on design, permits, costs and timelines, and the rest of our services are listed after these seven."
          />
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/service/${service.slug}`}
              className={styles.card}
              aria-label={`View ${service.title} service`}
            >
              <div className={styles.media}>
                <Image
                  src={service.image.replace(/^\./, "")}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 460px"
                  className={styles.image}
                />
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.desc}</p>
                <span className={styles.details}>
                  View Details
                  <ArrowIcon />
                </span>
              </div>
            </Link>
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
                  <Link href={link.href}>{link.label}</Link>
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
