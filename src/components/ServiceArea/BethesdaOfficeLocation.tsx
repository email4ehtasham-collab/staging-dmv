import type { ReactNode } from "react";
import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import { GOOGLE_BUSINESS_PROFILE_URL } from "@/data/home/homePageMedia";
import styles from "./bethesda-office-location.module.scss";

// Office NAP card, driving directions and My Maps embed. The defaults are the Bethesda
// service-page versions; the area pages (Bethesda, Washington, DC) pass their own.
const MAP_EMBED_URL = "https://www.google.com/maps/d/embed?mid=1JRgCEcvd6nI6fuvITm45SnbhRtyNbNk&ehbc=2E312F&noprof=1";
const BETHESDA_WIKI_URL = "https://en.wikipedia.org/wiki/Bethesda,_Maryland";

type BethesdaOfficeLocationProps = {
  /** Section H2, e.g. "Bathroom Remodels Across Bethesda, MD". */
  title: string;
  /** What the crews work on, e.g. "bathrooms" or "basements". */
  workNoun: string;
  /** iframe title: Brand | Keyword in Bethesda, MD. */
  mapTitle: string;
  /** My Maps embed URL (defaults to the Bethesda service-page map). */
  mapUrl?: string;
  /** Text under the H2 (defaults to the Bethesda paragraph with zip codes). */
  text?: ReactNode;
  napTitle?: string;
  directionsTitle?: string;
  /** Directions body: intro, steps and closing line (defaults to the downtown Bethesda route). */
  directions?: ReactNode;
  sectionId?: string;
};

export default function BethesdaOfficeLocation({
  title,
  workNoun,
  mapTitle,
  mapUrl = MAP_EMBED_URL,
  text,
  napTitle = "Our office near Bethesda",
  directionsTitle = "Driving from downtown Bethesda",
  directions,
  sectionId = "bethesda-location",
}: BethesdaOfficeLocationProps) {
  return (
    <section id={sectionId} className={styles.section} aria-labelledby={`${sectionId}-title`}>
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id={`${sectionId}-title`}
            align="center"
            eyebrow={<Badge>Area We Serve</Badge>}
            title={title}
            text={
              text ?? (
              <>
                <Link target="_blank" href={BETHESDA_WIKI_URL}>
                  Bethesda
                </Link>{" "}
                is an unincorporated community in Montgomery County, just northwest of DC. Our crews work on {workNoun}{" "}
                around Bethesda Row, Woodmont Triangle and the Bethesda Metro station, and in the neighborhoods near the
                NIH campus and Walter Reed. We cover zip codes <strong>20814</strong>, <strong>20816</strong> and{" "}
                <strong>20817</strong>.
              </>
              )
            }
          />
        </div>

        <div className={styles.grid}>
          <div className={styles.copy}>
            <div className={styles.napCard}>
              <strong className={styles.napTitle}>{napTitle}</strong>
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
              <strong className={styles.directionsTitle}>{directionsTitle}</strong>
              {directions ?? (
              <>
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
              </>
              )}
            </div>
          </div>

          <div className={styles.mapWrap}>
            <iframe
              src={mapUrl}
              title={mapTitle}
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
