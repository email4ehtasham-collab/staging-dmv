import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import { GOOGLE_BUSINESS_PROFILE_URL } from "@/data/home/homePageMedia";
import styles from "./bethesda-kitchen-location.module.scss";

// Bethesda-only My Maps embed.
const MAP_EMBED_URL = "https://www.google.com/maps/d/embed?mid=1JRgCEcvd6nI6fuvITm45SnbhRtyNbNk&ehbc=2E312F&noprof=1";
const MAP_TITLE = "DMV General Contracting Group LLC | Kitchen Remodeling in Bethesda, MD";
const BETHESDA_WIKI_URL = "https://en.wikipedia.org/wiki/Bethesda,_Maryland";

export default function BethesdaKitchenLocation() {
  return (
    <section id="bethesda-location" className={styles.section} aria-labelledby="bethesda-kitchen-location-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="bethesda-kitchen-location-title"
            align="center"
            eyebrow={<Badge>Area We Serve</Badge>}
            title="Kitchen Remodels Across Bethesda, MD"
            text={
              <>
                <Link target="_blank" href={BETHESDA_WIKI_URL}>
                  Bethesda
                </Link>{" "}
                is an unincorporated community in Montgomery County, just northwest of DC. Our crews work on kitchens
                around Bethesda Row, Woodmont Triangle and the Bethesda Metro station, and in the neighborhoods near the
                NIH campus and Walter Reed. We cover zip codes <strong>20814</strong>, <strong>20816</strong> and{" "}
                <strong>20817</strong>.
              </>
            }
          />
        </div>

        <div className={styles.grid}>
          <div className={styles.copy}>
            <div className={styles.napCard}>
              <strong className={styles.napTitle}>Our office near Bethesda</strong>
              <p>
                <a href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                  DMV General Contracting Group LLC
                  <br />
                  11810 Grand Park Ave #500, North Bethesda, MD 20852
                </a>
              </p>
              <p>
                Phone: <a href="tel:+12407301292">+1 240-730-1292</a>
                <br />
                Open 7 days a week
              </p>
            </div>

            <div className={styles.directions}>
              <strong className={styles.directionsTitle}>Driving from downtown Bethesda</strong>
              <p>
                From the Bethesda Metro station at 7450 Wisconsin Avenue, the drive is about 5 miles and takes about 11
                minutes. Follow these 3 steps:
              </p>
              <ol>
                <li>Head north on Wisconsin Avenue (MD-355), which becomes Rockville Pike.</li>
                <li>After about 4 miles on Rockville Pike, turn left onto Old Georgetown Road.</li>
                <li>Turn right onto Grand Park Avenue; our office is at #500.</li>
              </ol>
              <p>
                The route ends at 11810 Grand Park Ave #500, North Bethesda, MD <strong>20852</strong>.
              </p>
            </div>
          </div>

          <div className={styles.mapWrap}>
            <iframe
              src={MAP_EMBED_URL}
              title={MAP_TITLE}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
