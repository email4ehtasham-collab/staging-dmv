import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import { GOOGLE_BUSINESS_PROFILE_URL } from "@/data/home/homePageMedia";
import styles from "./locate-us.module.scss";

const MY_MAPS_EMBED_URL =
  "https://www.google.com/maps/d/u/0/embed?mid=14K4I-pr3k4OBWe-bVzHUcLC4edyEKd8&ehbc=2E312F&noprof=1";

export default function LocateUs() {
  return (
    <section id="locate" className={styles.section} aria-labelledby="locate-title">
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <SectionHeading
              id="locate-title"
              eyebrow={<Badge>Our Office</Badge>}
              title="Locate DMV General Contracting Group LLC"
              text={
                <>
                  Our office is at <strong>11810 Grand Park Ave #500, North Bethesda, MD 20852</strong>, near{" "}
                  <strong>Pike &amp; Rose</strong> in <strong>Montgomery County</strong>. The building sits just off{" "}
                  <strong>Rockville Pike (MD-355)</strong> and <strong>Old Georgetown Road</strong>. The{" "}
                  <strong>North Bethesda Metro station</strong> on the <strong>Red Line</strong> is 0.4 miles away, about
                  an 8-minute walk. From here, our <strong>Maryland general contractor</strong> team drives to homes in{" "}
                  <strong>Bethesda</strong>, <strong>Rockville</strong>, <strong>Potomac</strong> and{" "}
                  <strong>Washington, DC</strong> for free in-home consultations.
                </>
              }
            />

            <div className={styles.nap}>
              <Link href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer" className={styles.napName}>
                DMV General Contracting Group LLC
              </Link>
              <address>
                <Link href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer">
                  11810 Grand Park Ave #500, North Bethesda, MD 20852
                </Link>
              </address>
              <span>
                <strong>Phone: </strong>
                <a href="tel:+12407301292">+1 240-730-1292</a>
              </span>
              <span>
                <strong>Hours: </strong>Open 7 days a week
              </span>
            </div>

            <div className={styles.route}>
              <h3>Driving from Reagan National Airport (DCA)</h3>
              <p>
                From <strong>Ronald Reagan Washington National Airport (DCA)</strong>, the drive is about{" "}
                <strong>22 miles</strong> and takes about <strong>30 minutes</strong> in usual traffic. Follow these 5 steps:
              </p>
              <ol>
                <li>
                  Leave the airport on the ramp to the <strong>George Washington Memorial Parkway</strong> north.
                </li>
                <li>
                  Stay on the parkway for about 12 miles, then take the exit for <strong>I-495 North</strong> toward Maryland.
                </li>
                <li>
                  After 4 miles, keep left onto <strong>I-270 North</strong>.
                </li>
                <li>
                  Take <strong>exit 4</strong> for <strong>Montrose Road</strong> and continue onto{" "}
                  <strong>Josiah Henson Parkway</strong>.
                </li>
                <li>
                  Turn right onto <strong>East Jefferson Street</strong>, follow <strong>Executive Boulevard</strong> and{" "}
                  <strong>Old Georgetown Road</strong>, then turn left onto <strong>Grand Park Avenue</strong>.
                </li>
              </ol>
              <p>Our office is on the left, just after the turn onto Grand Park Avenue.</p>
            </div>

            <div className={styles.route}>
              <h3>Driving from Downtown Bethesda</h3>
              <p>
                From the <strong>Bethesda Metro station</strong> at <strong>7450 Wisconsin Avenue</strong>, the drive is about{" "}
                <strong>5 miles</strong> and takes about <strong>11 minutes</strong>. Follow these 3 steps:
              </p>
              <ol>
                <li>
                  Head north on <strong>Wisconsin Avenue (MD-355)</strong>, which becomes <strong>Rockville Pike</strong>.
                </li>
                <li>
                  After about 4 miles on Rockville Pike, turn left onto <strong>Old Georgetown Road</strong>.
                </li>
                <li>
                  Turn right onto <strong>Grand Park Avenue</strong>.
                </li>
              </ol>
              <p>
                The office is on the left. Call <a href="tel:+12407301292">+1 240-730-1292</a> if you need help finding us.
              </p>
            </div>
          </div>

          <div className={styles.mapWrap}>
            <iframe
              src={MY_MAPS_EMBED_URL}
              title="DMV General Contracting Group LLC | General Contractor in North Bethesda, Maryland"
              className={styles.map}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <Link href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
              Open DMV General Contracting Group LLC in Google Maps
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
