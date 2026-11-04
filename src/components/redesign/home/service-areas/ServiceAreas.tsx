import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./service-areas.module.scss";

const areas = [
  "Bethesda",
  "North Bethesda",
  "Rockville",
  "Potomac",
  "Chevy Chase",
  "Gaithersburg",
  "Kensington",
  "Silver Spring",
  "Wheaton",
  "Garrett Park",
  "Cabin John",
  "Laurel",
];

export default function ServiceAreas() {
  return (
    <section id="areas" className={styles.section} aria-labelledby="areas-title">
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <SectionHeading
              id="areas-title"
              eyebrow={<Badge>Areas We Serve</Badge>}
              title="General Contractor for Washington, DC and Montgomery County, MD"
              text="We serve Washington, DC and 12 Maryland communities from our North Bethesda office near Pike & Rose. Most of our Maryland work is in Montgomery County, and we also work in Laurel. In Washington, DC, many of our projects are rowhouses, townhomes and condos, where party walls, English basements and condo board rules shape the plan."
            />
            <p className={styles.label}>These are the 12 Maryland communities we serve most often:</p>

            <ul className={styles.areas} aria-label="Maryland service areas">
              {areas.map((area) => (
                <li key={area}>
                  <span className={styles.dot} aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>

            <div className={styles.district}>
              <p>
                <strong>In the District, we work across <Link href="/service-area/washington-dc" className="text-secondary">Washington, DC</Link>.</strong> From rowhouse kitchens to condo bathrooms and garage ADUs, we manage the permits, inspections and building rules that come with DC projects.
              </p>
              <div className={styles.company}>
                <span>DMV General Contracting Group LLC</span>
                <a href="tel:+12407301292">Phone: (240) 730-1292</a>
                <a href="mailto:support@dmv-gc.com">Email: support@dmv-gc.com</a>
                <address>11810 Grand Park Ave, Suite 500 North Bethesda, MD 20852</address>
                <span>Open 7 days a week</span>
              </div>
            </div>
          </div>

          <div className={styles.visual}>
            <Image
              src="/images/banner-v3.jpg"
              alt="Washington DC and Maryland residential neighborhood"
              fill
              sizes="(max-width: 1024px) 100vw, 626px"
              className={styles.image}
            />
            <div className={styles.overlay} />
            <div className={styles.officeCard}>
              <span className={styles.eyebrow}>North Bethesda Office</span>
              <p>Near Pike &amp; Rose, serving DC and 12 Maryland communities</p>
              <address>11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852</address>
              <Link href="/contact-us" data-estimate-trigger>Get a Free Estimate</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
