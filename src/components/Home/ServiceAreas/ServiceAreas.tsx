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
              text={
                <>
                  We serve Washington, DC and 12 Maryland communities from our North Bethesda office near Pike & Rose. Most of our Maryland work is in <Link target="_blank" href="https://en.wikipedia.org/wiki/Montgomery_County,_Maryland">Montgomery County</Link>, and we also work in Laurel. In Washington, DC, many of our projects are rowhouses, townhomes and condos, where party walls, English basements and condo board rules shape the plan.
                </>
              }
            />
            <p className={styles.label}>These are the 12 Maryland communities we serve most often:</p>

            <ul className={styles.areas} aria-label="Maryland service areas">
              {areas.map((area) => (
                <li key={area}>
                  <span className={styles.dot} aria-hidden="true" />
                  {area === "Bethesda" ? (
                    <Link href="/service-area/bethesda-md" className={styles.areaLink}>
                      {area}
                    </Link>
                  ) : (
                    area
                  )}
                </li>
              ))}
            </ul>

            <div className={styles.district}>
              <p>
                <strong>In the District, we work across Washington, DC.</strong> From rowhouse kitchens to condo bathrooms and garage ADUs, we manage the permits, inspections and building rules that come with DC projects.
              </p>
              <div className={styles.company}>
                <span>DMV General Contracting Group LLC</span>
                <span><strong>Phone: </strong><a href="tel:+12407301292">+1 240-730-1292</a></span>
                <span><strong>Email: </strong><a href="mailto:support@dmv-gc.com">support@dmv-gc.com</a></span>
                <address>11810 Grand Park Ave, Suite 500 North Bethesda, MD 20852</address>
                <span>Open 7 days a week</span>
              </div>
            </div>
          </div>

          <div className={styles.visual}>
            <Image
              src="/images/banner-v3.webp"
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
