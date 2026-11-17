import Image from "next/image";
import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import AboutVideoButton from "./AboutVideoButton";
import styles from "./about.module.scss";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" className={styles.buttonIcon}>
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArchitectsIcon() {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" >
      <path d="M17.8516 13.4766L19.9609 17.1875L19.6875 19.4531C19.6484 19.8828 19.2188 20.1172 18.8281 19.9609L16.7188 19.0625L14.6094 15.3906C15.7812 14.9219 16.8359 14.2578 17.8516 13.4766ZM19.4922 9.76562C17.4219 13.0078 13.8672 15 10 15C8.59375 15 7.26562 14.7656 5.97656 14.2969L3.24219 19.0625L1.13281 19.9609C0.742188 20.1172 0.3125 19.8828 0.273438 19.4531L0 17.1875L2.77344 12.3828C1.91406 11.6797 1.17188 10.8594 0.585938 9.96094C0.390625 9.64844 0.507812 9.25781 0.78125 9.0625L1.875 8.4375C2.1875 8.28125 2.53906 8.35938 2.73438 8.63281C3.08594 9.21875 3.55469 9.72656 4.02344 10.1562L6.71875 5.54688C6.40625 5.03906 6.25 4.41406 6.25 3.75C6.25 1.67969 7.89062 0 10 0C12.0703 0 13.75 1.67969 13.75 3.75C13.75 4.41406 13.5547 5.03906 13.2422 5.54688L15.2734 9.0625C14.375 9.96094 13.2812 10.625 12.0703 10.9766L10.0781 7.5C10.0391 7.5 10 7.5 9.96094 7.5C9.96094 7.5 9.92188 7.5 9.88281 7.5L7.26562 12.0703C8.125 12.3438 9.0625 12.5 10 12.5C12.9688 12.5 15.7422 11.0156 17.3438 8.51562C17.5 8.24219 17.8516 8.125 18.1641 8.28125L19.2578 8.90625C19.5703 9.0625 19.6875 9.49219 19.4922 9.76562ZM10 2.5C9.29688 2.5 8.75 3.08594 8.75 3.75C8.75 4.45312 9.29688 5 10 5C10.6641 5 11.25 4.45312 11.25 3.75C11.25 3.08594 10.6641 2.5 10 2.5Z" fill="#c63940"/>
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.9531 0C17.3047 0 17.6172 0.15625 17.8516 0.390625L19.9609 2.5V10.0781C19.8828 9.96094 19.7656 9.88281 19.6875 9.76562L13.9844 5.15625L15 4.21875C15.2734 3.98438 15.2734 3.59375 15.0391 3.35938C14.8047 3.08594 14.4141 3.08594 14.1406 3.32031L11.0547 6.17188C11.0156 6.17188 11.0156 6.17188 11.0156 6.17188C10.3516 6.75781 9.33594 6.60156 8.82812 6.05469C8.28125 5.46875 8.28125 4.49219 8.90625 3.86719L12.7734 0.351562C13.0078 0.117188 13.2812 0 13.5938 0H16.9531ZM21.25 2.53906H25V12.5391H22.5C21.7969 12.5391 21.25 11.9531 21.25 11.2891V2.53906ZM23.125 11.2891C23.4375 11.2891 23.75 10.9766 23.75 10.6641C23.75 10.3125 23.4375 10.0391 23.125 10.0391C22.7734 10.0391 22.5 10.3125 22.5 10.6641C22.5 10.9766 22.7734 11.2891 23.125 11.2891ZM0 12.5V2.53906H3.75V11.25C3.75 11.9531 3.16406 12.5 2.5 12.5H0ZM1.875 10.0391C1.52344 10.0391 1.25 10.3125 1.25 10.6641C1.25 10.9766 1.52344 11.2891 1.875 11.2891C2.1875 11.2891 2.5 10.9766 2.5 10.6641C2.5 10.3125 2.1875 10.0391 1.875 10.0391ZM18.8672 10.7422C19.4141 11.1719 19.4922 11.9531 19.0625 12.5L18.7109 12.9688C18.2422 13.5156 17.4609 13.5938 16.9531 13.1641L16.7188 12.9688L15.5078 14.4922C15 15.1172 14.0625 15.1953 13.4375 14.6875L12.7734 14.1016H12.7344C11.875 15.1562 10.3125 15.3516 9.21875 14.4531L5.70312 11.25H5V2.5L7.10938 0.390625C7.34375 0.15625 7.65625 0 8.00781 0H11.2891L8.08594 2.92969C6.95312 3.98438 6.875 5.78125 7.89062 6.91406C8.94531 8.04688 10.7031 8.16406 11.875 7.07031L13.0469 6.01562L18.8672 10.7422Z" fill="#D4AF37"/>
    </svg>

  );
}

export default function About() {
  return (
    <section className={styles.section} aria-labelledby="about-title">
      <Container className={styles.inner}>
        <div className={styles.media}>
          <Image
            src="/videos/dmv-video-poster.jpg"
            alt="The DMV General Contracting Group design and build team"
            fill
            sizes="(max-width: 1024px) 100vw, 698px"
            className={styles.mediaImage}
          />
          <div className={styles.mediaOverlay} />
          <AboutVideoButton />
        </div>

        <div className={styles.copy}>
          <SectionHeading
            id="about-title"
            eyebrow={<Badge>Who Are We?</Badge>}
            title="DMV General Contracting Group LLC"
          />
          <div className={styles.paragraphs}>
            <p>
              DMV General Contracting Group LLC is a design-build general contractor based in North Bethesda, Maryland. Our team brings 35 years of experience in residential construction to every kitchen, bathroom, basement, ADU, addition and whole-home renovation we take on.
            </p>
            <p>
              We keep architecture, engineering, permitting, electrical, plumbing and HVAC in-house, so the people who design your project are the same team that builds it. We are licensed by the Maryland Home Improvement Commission <span className={styles.inlineLink}> (MHIC #156178) </span> and the DC Department of Licensing and Consumer Protection <span className={styles.inlineLink}> (DLCP #410526000209), </span> and we carry general liability insurance.
            </p>
            <p>
              Homeowners rate us 4.9 out of 5 on Google. Every project comes with a 1-year warranty, and you can call us 7 days a week at <a href="tel:+12407301292" className={styles.inlineLink}>(240) 730-1292</a>.
            </p>
          </div>

          <div className={styles.features}>
            <div className={`${styles.feature} ${styles.featureBrand}`}>
              <div className="h-list align-items-center" data-gap="10">
              <span className={styles.featureIcon}>
                <ArchitectsIcon />
              </span>
                <h6 className={styles.featureTitle}>In-House Architects</h6>
              </div>
                <p className={styles.featureText}>Streamlined design, 3D renderings, and permit approvals under one roof.</p>
            </div>
            <div className={`${styles.feature} ${styles.featureAccent}`}>
              <div className="h-list align-items-center" data-gap="10">
              <span className={styles.featureIcon}>
                <ClockIcon />
              </span>
                <h6 className={styles.featureTitle}>Fixed Budget &amp; Time</h6>
              </div>
                <p className={styles.featureText}>Transparent pricing schedules with guaranteed project completion timelines.</p>
            </div>
          </div>

          <div className={styles.actions}>
            <Button href="/contact-us" data-estimate-trigger icon={<ArrowIcon />}>
              Schedule A Free Consultation
            </Button>
            <Button href="/our-team" variant="secondary" icon={<ArrowIcon />}>
              Meet Our Team
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
