import type { ReactNode } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import NavitemActive from "@/components/Common/NavitemActive";
import ResponsiveImage from "@/components/Common/ResponsiveImage";
import SectionHeading from "@/components/Common/SectionHeading";
import Estimate from "@/components/Home/Estimate/Estimate";
import RecentProjects from "@/components/Home/RecentProjects/RecentProjects";
import locationStyles from "@/components/ServiceLocation/service-location.module.scss";
import servicesData from "@/data/services/ServiceData";
import styles from "./style.module.scss";

export const metadata: Metadata = {
  title: "General Contractor & Remodeling Services in Maryland & DC",
  description:
    "All remodeling and construction services from DMV General Contracting in Maryland and DC, from kitchens and ADUs to roofing and decks.",
  alternates: {
    canonical: "https://dmv-gc.com/services",
  },
};

type ServiceItem = {
  title: string;
  slug: string;
  text: ReactNode;
};

function InlineLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <span className={styles.inlineLink} data-href={href}>
      {children}
    </span>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false">
      <path d="m4.5 2.5 3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="m10 2.6 2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L10 2.6Z" />
    </svg>
  );
}

function normalizeImagePath(src?: string) {
  if (typeof src !== "string") {
    return "/images/services/general-contractor.webp";
  }
  if (src.startsWith("./")) {
    return src.slice(1);
  }
  return src;
}

function getServiceImage(slug: string, title: string) {
  const service = servicesData.find((item) => item.slug === slug);

  return {
    src: normalizeImagePath(service?.cover || service?.image),
    alt: service?.imageAlt || title,
  };
}

const remodelingServices: ServiceItem[] = [
  {
    title: "Kitchen Remodeling",
    slug: "kitchen-remodeling",
    text: (
      <>
        We redesign and rebuild kitchens, from new cabinets and counters in the same footprint to open layouts with
        relocated plumbing. Pricing tiers and schedules sit on the{" "}
        <InlineLink href="/service/kitchen-remodeling">kitchen remodeling page</InlineLink>.
      </>
    ),
  },
  {
    title: "Bathroom Remodeling",
    slug: "bathroom-remodeling",
    text: (
      <>
        We renovate powder rooms, hall baths and primary suites with properly waterproofed showers, ventilation and
        lighting. Tile, layout and budget guidance is collected on the{" "}
        <InlineLink href="/service/bathroom-remodeling">bathroom remodeling page</InlineLink>.
      </>
    ),
  },
  {
    title: "Basement Remodeling",
    slug: "basement-remodeling",
    text: (
      <>
        We convert raw or tired basements into dry, insulated living areas, from media rooms to bedrooms with
        code-compliant escape windows. Read more about <InlineLink href="/service/basement-remodeling">basement remodeling</InlineLink>.
      </>
    ),
  },
  {
    title: "Accessory Dwelling Units",
    slug: "adu",
    text: (
      <>
        We design and build backyard cottages, garage apartments and basement units under current Maryland and DC
        rules. Meet us as your <InlineLink href="/service/adu">ADU builder</InlineLink>.
      </>
    ),
  },
  {
    title: "Whole-Home Renovation",
    slug: "whole-home-renovation",
    text: (
      <>
        We renovate most or all of a house at once, including layout, systems and finishes, on one schedule. Learn how{" "}
        <InlineLink href="/service/whole-home-renovation">whole-home renovation</InlineLink> works.
      </>
    ),
  },
  {
    title: "Home Additions",
    slug: "home-additions",
    text: (
      <>
        We build second stories, rear rooms, bump-outs and primary suites that tie into the existing house. Explore{" "}
        <InlineLink href="/service/home-additions">home additions</InlineLink>.
      </>
    ),
  },
  {
    title: "Design-Build",
    slug: "design-build",
    text: (
      <>
        We handle design, engineering, permits and construction under one contract for any of the projects above. Find
        out about <InlineLink href="/service/design-build">design-build remodeling</InlineLink>.
      </>
    ),
  },
];

const interiorStructure: ServiceItem[] = [
  {
    title: "Framing.",
    slug: "framing",
    text: (
      <>
        We frame new walls, rooms and additions and add beams where walls come out; see <InlineLink href="/service/framing">framing</InlineLink>.
      </>
    ),
  },
  {
    title: "Drywall.",
    slug: "drywall",
    text: (
      <>
        We hang, tape and finish drywall for new rooms and repairs; see{" "}
        <InlineLink href="/service/drywall">drywall installation</InlineLink>.
      </>
    ),
  },
  {
    title: "Flooring.",
    slug: "flooring-remodeling",
    text: (
      <>
        We install hardwood, tile, luxury vinyl and engineered floors; see{" "}
        <InlineLink href="/service/flooring-remodeling">flooring remodeling</InlineLink>.
      </>
    ),
  },
  {
    title: "Carpet.",
    slug: "carpet-installation",
    text: (
      <>
        We fit wall-to-wall carpet for bedrooms, basements and stairs; see{" "}
        <InlineLink href="/service/carpet-installation">carpet installation</InlineLink>.
      </>
    ),
  },
];

const homeSystems: ServiceItem[] = [
  {
    title: "Electrical.",
    slug: "electrical-services",
    text: (
      <>
        We upgrade panels, rewire older homes and add circuits and lighting; see{" "}
        <InlineLink href="/service/electrical-services">electrical services</InlineLink>.
      </>
    ),
  },
  {
    title: "Plumbing.",
    slug: "plumbing-services",
    text: (
      <>
        We replace supply and drain lines, move fixtures and install water heaters; see{" "}
        <InlineLink href="/service/plumbing-services">plumbing services</InlineLink>.
      </>
    ),
  },
  {
    title: "Heating and cooling.",
    slug: "hvac",
    text: (
      <>
        We install and replace furnaces, air conditioners, heat pumps and mini-splits; see{" "}
        <InlineLink href="/service/hvac">HVAC services</InlineLink>.
      </>
    ),
  },
];

const exteriorServices: ServiceItem[] = [
  {
    title: "Roofs.",
    slug: "roofing",
    text: (
      <>
        We replace and repair asphalt shingle and other roof systems; see <InlineLink href="/service/roofing">roofing</InlineLink>.
      </>
    ),
  },
  {
    title: "Siding.",
    slug: "siding-installation",
    text: (
      <>
        We install vinyl, fiber cement and wood siding and match existing materials on additions; see{" "}
        <InlineLink href="/service/siding-installation">siding installation</InlineLink>.
      </>
    ),
  },
];

const outdoorLiving: ServiceItem[] = [
  {
    title: "Decks.",
    slug: "decks",
    text: (
      <>
        We build and rebuild wood and composite decks to current code; see <InlineLink href="/service/decks">deck building</InlineLink>.
      </>
    ),
  },
  {
    title: "Patios.",
    slug: "patios",
    text: (
      <>
        We lay paver, stone and poured concrete outdoor floors; see <InlineLink href="/service/patios">patios</InlineLink>.
      </>
    ),
  },
  {
    title: "Hardscaping.",
    slug: "hardscaping",
    text: (
      <>
        We build retaining walls, walkways and steps; see <InlineLink href="/service/hardscaping">hardscaping</InlineLink>.
      </>
    ),
  },
  {
    title: "Concrete.",
    slug: "concrete",
    text: (
      <>
        We pour driveways, slabs and footings; see <InlineLink href="/service/concrete">concrete work</InlineLink>.
      </>
    ),
  },
  {
    title: "Fences.",
    slug: "fence-installation",
    text: (
      <>
        We put up privacy, picket and pool fences; see <InlineLink href="/service/fence-installation">fence installation</InlineLink>.
      </>
    ),
  },
];

const propertyServices: ServiceItem[] = [
  {
    title: "Junk removal.",
    slug: "junk-removal",
    text: (
      <>
        We haul away furniture, appliances, construction debris and household clutter; see{" "}
        <InlineLink href="/service/junk-removal">junk removal</InlineLink>.
      </>
    ),
  },
];

const costRows = [
  {
    project: "Kitchen remodel",
    cost: "$35,000–$75,000 mid-range",
  },
  {
    project: "Bathroom remodel",
    cost: "$25,000–$45,000",
  },
  {
    project: "Basement finishing",
    cost: "$30–$85 per sq ft",
  },
  {
    project: "ADU",
    cost: "$150,000–$300,000 for a new build",
  },
  {
    project: "Home addition",
    cost: "$200–$400 per sq ft",
  },
  {
    project: "Whole-home renovation",
    cost: "$100–$250 per sq ft",
  },
];

const questions = [
  {
    question: "Do You Handle Small Jobs as Well as Full Remodels?",
    answer:
      "Yes. We set no lower limit on job size. Small jobs we regularly take on include a new vanity and toilet, a panel upgrade or a section of fence. At the other end are full remodels such as a gut kitchen, a second-story addition or a whole-house renovation.",
  },
  {
    question: "Do You Use Subcontractors?",
    answer:
      "Our design, engineering, permitting, electrical, plumbing and HVAC teams are in-house. When a project needs a specialty trade outside those, we bring in licensed subcontractors and supervise them ourselves, under our permits and our warranty, so you still deal with one company.",
  },
];

const advantages = [
  {
    title: "One Point of Contact",
    text: "A single project lead coordinates every service on your job, so you never chase separate trades.",
  },
  {
    title: "Licensed in Maryland and DC",
    text: "We work under MHIC #156178 and DC DLCP #410526000209, with 35 years of residential experience.",
  },
  {
    title: "One Warranty",
    text: "Carpentry, wiring, plumbing or roofing: every trade we perform shares one 1-year workmanship guarantee.",
  },
];

const areas = [
  { label: "General contractor in Montgomery County", href: "/service/design-build" },
  { label: "General contractor in Washington, DC", href: "/service/design-build" },
  { label: "General contractor in Bethesda", href: "/service-area/bethesda-md" },
  { label: "General contractor in North Bethesda", href: "/service/design-build/north-bethesda-md" },
  { label: "General contractor in Rockville", href: "/service/design-build/rockville-md" },
  { label: "General contractor in Kensington", href: "/service/design-build/kensington-md" },
  { label: "General contractor in Potomac", href: "/service/design-build/potomac-md" },
  { label: "General contractor in Wheaton", href: "/service/design-build/wheaton-md" },
  { label: "General contractor in Silver Spring", href: "/service/design-build/silver-spring-md" },
  { label: "General contractor in Gaithersburg", href: "/service/design-build/gaithersburg-md" },
  { label: "General contractor in Garrett Park", href: "/service/design-build" },
  { label: "General contractor in Chevy Chase", href: "/service/design-build/chevy-chase-md" },
  { label: "General contractor in Cabin John", href: "/service/design-build/cabin-john-md" },
  { label: "General contractor in Laurel", href: "/service/design-build/laurel-md" },
];

function ServiceGrid({ items }: { items: ServiceItem[] }) {
  return (
    <div className={styles.serviceGrid}>
      {items.map((item) => {
        const image = getServiceImage(item.slug, item.title);

        return (
          <article className={styles.serviceCard} key={item.title}>
            <div className={styles.serviceMedia}>
              <ResponsiveImage src={image.src} alt={image.alt} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className={styles.serviceBody}>
              <h3 className={styles.serviceTitle}>{item.title}</h3>
              <p className={styles.serviceText}>{item.text}</p>
            </div>
            <Link
              href={`/service/${item.slug}`}
              className={styles.serviceCardLink}
              aria-label={`Open ${item.title} page`}
            />
          </article>
        );
      })}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className={locationStyles.page}>
      <NavitemActive nav="service" />

      <section className={locationStyles.hero} aria-labelledby="services-title">
        <Container>
          <nav className={locationStyles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronIcon />
            <span aria-current="page">Services</span>
          </nav>

          <div className={locationStyles.heroGrid}>
            <div className={locationStyles.content}>
              <Badge className="nostars">Services</Badge>
              <h1 id="services-title" className={locationStyles.title}>
                Home Remodeling Services in Maryland: Every Trade Under One Licensed Contractor
              </h1>
              <p className={locationStyles.intro}>
                Every one of the home remodeling services in Maryland and Washington, DC listed on this page is
                delivered by DMV General Contracting Group, a licensed residential general contractor that also works
                as a design-build firm. Our general contractor services in Maryland run from full-house remodels down
                to single-trade jobs, with no minimum project size and a 1-year warranty on our workmanship. The
                services below are grouped into six categories: remodeling, interior structure, home systems, exterior,
                outdoor living and property services.
              </p>

              <div className={locationStyles.trustBadges} aria-label="Credentials and ratings">
                <span className={locationStyles.trustBadge}>MHIC #156178</span>
                <span className={locationStyles.trustBadge}>DC DLCP #410526000209</span>
                <span className={locationStyles.trustBadge}>
                  <StarIcon />
                  <span>4.9 on Google</span>
                </span>
                <span className={locationStyles.trustBadge}>1-year warranty</span>
                <span className={locationStyles.trustBadge}>No minimum project size</span>
              </div>

              <div className={locationStyles.ctaRow}>
                <Button href="/contact-us" data-estimate-trigger>
                  Get a free estimate
                </Button>
                <a className={locationStyles.phoneLink} href="tel:+12407301292">
                  (240) 730-1292
                </a>
              </div>
            </div>

            <aside className={locationStyles.factsCard} aria-labelledby="services-facts-title">
              <h2 id="services-facts-title" className={locationStyles.factsTitle}>
                The services below are grouped into six categories:
              </h2>
              <ul className={locationStyles.factsList}>
                <li><span className={locationStyles.factValue}>Remodeling</span></li>
                <li><span className={locationStyles.factValue}>Interior structure</span></li>
                <li><span className={locationStyles.factValue}>Home systems</span></li>
                <li><span className={locationStyles.factValue}>Exterior</span></li>
                <li><span className={locationStyles.factValue}>Outdoor living</span></li>
                <li><span className={locationStyles.factValue}>Property services</span></li>
              </ul>
              <div className={locationStyles.factsCta}>
                <p>Not sure which service fits? Get a free estimate and we will scope it with you.</p>
                <Button href="/contact-us" variant="secondary" data-estimate-trigger className={locationStyles.factsButton}>
                  Get a free estimate
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="remodeling-services-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeading
              id="remodeling-services-title"
              align="center"
              eyebrow={<Badge className="nostars">Services</Badge>}
              title="Remodeling Services"
              text="Our seven core remodeling services cover the projects homeowners ask about most:"
            />
          </div>
          <ServiceGrid items={remodelingServices} />
          <p className={styles.note}>
            Each core service page includes typical costs, the process and answers to common questions.
          </p>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="interior-structure-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeading
              id="interior-structure-title"
              align="center"
              title="Interior Structure Services"
              text="These trades support larger remodels and are also available on their own:"
            />
          </div>
          <ServiceGrid items={interiorStructure} />
          <p className={styles.note}>Booking them with a remodel keeps every trade on the same schedule.</p>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="home-systems-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeading
              id="home-systems-title"
              align="center"
              title="Home Systems Services"
              text="Our licensed tradespeople pull the permits these jobs require in Maryland and DC:"
            />
          </div>
          <ServiceGrid items={homeSystems} />
          <p className={styles.note}>Every systems job is inspected before the walls are closed.</p>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="exterior-services-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeading
              id="exterior-services-title"
              align="center"
              title="Exterior Services"
              text="The outside of the house is covered by two services:"
            />
          </div>
          <ServiceGrid items={exteriorServices} />
          <p className={styles.note}>
            Both are often paired with an addition so the old and new parts of the house match.
          </p>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="outdoor-living-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeading
              id="outdoor-living-title"
              align="center"
              title="Outdoor Living Services"
              text="Five services extend your living space outdoors:"
            />
          </div>
          <ServiceGrid items={outdoorLiving} />
          <p className={styles.note}>Landscaping requests are handled through our hardscaping team.</p>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="property-services-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeading
              id="property-services-title"
              align="center"
              title="Property Services"
              text="One service clears the way before or after any project:"
            />
          </div>
          <ServiceGrid items={propertyServices} />
          <p className={styles.note}>Trash removal requests go to the same crew.</p>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="services-cost-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeading
              id="services-cost-title"
              align="center"
              eyebrow={<Badge className="nostars">Cost and Pricing</Badge>}
              title="What Do Home Remodeling Projects Cost in Maryland?"
              text="Costs depend on the project type and size, and these are the typical 2026 ranges our service pages use:"
            />
          </div>

          <div className={styles.contentTableWrap}>
            <table className={styles.contentTable}>
              <thead>
                <tr>
                  <th scope="col">Project</th>
                  <th scope="col">Typical cost</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((row) => (
                  <tr key={row.project}>
                    <th scope="row">{row.project}</th>
                    <td>{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={styles.note}>
            Each service page breaks its range down by tier, and your written estimate replaces these averages with a
            price for your home.
          </p>

          <div className={styles.qaGrid}>
            {questions.map((item) => (
              <article className={styles.qaCard} key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <RecentProjects />

      <section className={`${styles.section} ${styles.sectionSoft}`} aria-labelledby="one-contractor-title">
        <Container>
          <div className={styles.relatedWorkHeader}>
            <Badge className="nostars">Why choose us</Badge>
            <h2 id="one-contractor-title">Why Use One Contractor for Every Service</h2>
            <p>Three advantages come from keeping every trade with one company:</p>
          </div>

          <div className={styles.relatedWorkGrid}>
            {advantages.map((advantage, index) => (
              <article className={styles.relatedWorkCard} key={advantage.title}>
                <span className={styles.relatedWorkNumber}>{String(index + 1).padStart(2, "0")}</span>
                <h3>{advantage.title}</h3>
                <p>{advantage.text}</p>
              </article>
            ))}
          </div>

          <p className={styles.relatedWorkNote}>
            That keeps responsibility clear from the estimate to the final walkthrough.
          </p>
        </Container>
      </section>

      <section className={styles.section} aria-labelledby="service-areas-title">
        <Container>
          <div className={styles.sectionHeader}>
            <SectionHeading
              id="service-areas-title"
              align="center"
              eyebrow={<Badge className="nostars">Area we serve</Badge>}
              title="Home Remodeling Services in Montgomery County and Washington, DC"
              text="Our crews cover the District, every corner of Montgomery County and the city of Laurel. Choose your area:"
            />
          </div>
          <div className={styles.areaGrid}>
            {areas.map((area) => (
              <Link href={area.href} className={styles.areaLink} key={area.label}>
                {area.label}
              </Link>
            ))}
          </div>
          <p className={styles.note}>Area pages describe local permit rules alongside the services available nearby.</p>
        </Container>
      </section>

      <Estimate variant="services" />
    </main>
  );
}
