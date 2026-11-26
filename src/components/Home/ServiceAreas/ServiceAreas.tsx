import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import { GOOGLE_BUSINESS_PROFILE_URL } from "@/data/home/homePageMedia";
import styles from "./service-areas.module.scss";

const SERVICE_AREA_MAP_EMBED_URL =
  "https://www.google.com/maps/d/u/0/embed?mid=18yZmZjXwVotzSHlIUaeEYMgoXUZnUI0&ehbc=2E312F&noprof=1";

const areas = [
  { name: "Bethesda", zips: "20814, 20816, 20817" },
  { name: "North Bethesda", zips: "20852" },
  { name: "Rockville", zips: "20850, 20851, 20852, 20853" },
  { name: "Potomac", zips: "20854" },
  { name: "Chevy Chase", zips: "20815" },
  { name: "Gaithersburg", zips: "20877, 20878, 20879, 20882" },
  { name: "Kensington", zips: "20895" },
  { name: "Silver Spring", zips: "20901, 20902, 20903, 20904, 20905, 20906, 20910" },
  { name: "Wheaton", zips: "20902, 20906" },
  { name: "Garrett Park", zips: "20896" },
  { name: "Cabin John", zips: "20818" },
  { name: "Laurel", zips: "20707, 20708, 20723, 20724" },
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
                  We serve <strong>Washington, DC</strong> and <strong>12 Maryland communities</strong> from our <strong>North Bethesda</strong> office near <strong>Pike & Rose</strong>. Most of our Maryland work is in <Link target="_blank" href="https://en.wikipedia.org/wiki/Montgomery_County,_Maryland">Montgomery County</Link>, and we also work in <strong>Laurel</strong>. In Washington, DC, many of our projects are <strong>rowhouses, townhomes and condos</strong>, where party walls, English basements and condo board rules shape the plan.
                </>
              }
            />
            <p className={styles.label}>These are the 12 Maryland communities we serve most often, with their zip codes:</p>

            <ul className={styles.areas} aria-label="Maryland service areas">
              {areas.map((area) => (
                <li key={area.name}>
                  <span className={styles.dot} aria-hidden="true" />
                  {area.name === "Bethesda" ? (
                    <Link href="/service-area/bethesda-md" className={styles.areaLink}>
                      {area.name}
                    </Link>
                  ) : (
                    area.name
                  )}
                  <strong className={styles.zips}>{area.zips}</strong>
                </li>
              ))}
            </ul>

            <div className={styles.district}>
              <p>
                <strong>In the District, we work across Washington, DC.</strong> From rowhouse kitchens to condo bathrooms and garage ADUs, we manage the permits, inspections and building rules that come with DC projects. Our DC zip codes are <strong>20001 to 20012</strong>, <strong>20015 to 20020</strong>, <strong>20024</strong>, <strong>20032</strong>, <strong>20036</strong> and <strong>20037</strong>.
              </p>
              <div className={styles.company}>
                <span><Link href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer">DMV General Contracting Group LLC</Link></span>
                <span><strong>Phone: </strong><a href="tel:+12407301292">+1 240-730-1292</a></span>
                <span><strong>Email: </strong><a href="mailto:support@dmv-gc.com">support@dmv-gc.com</a></span>
                <address><Link href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer">11810 Grand Park Ave #500, North Bethesda, MD 20852</Link></address>
                <span>Open 7 days a week</span>
              </div>
            </div>
          </div>

          <div className={styles.mapVisual}>
            <iframe
              src={SERVICE_AREA_MAP_EMBED_URL}
              title="DMV General Contracting Group LLC | General Contractor Service Areas in Montgomery County, MD and Washington, DC"
              className={styles.areaMap}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className={`${styles.officeCard} ${styles.officeCardStatic}`}>
              <span className={styles.eyebrow}>North Bethesda Office</span>
              <p>Near Pike &amp; Rose, serving DC and 12 Maryland communities</p>
              <address><Link href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer">11810 Grand Park Ave #500, North Bethesda, MD 20852</Link></address>
              <Link href="/contact-us" data-estimate-trigger>Get a Free Estimate</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
