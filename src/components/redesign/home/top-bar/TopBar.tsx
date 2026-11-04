import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import styles from "./top-bar.module.scss";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" className={styles.licenseIcon}>
      <path d="M8 1.5 13 3v4.2c0 3-2.1 5.7-5 6.8-2.9-1.1-5-3.8-5-6.8V3l5-1.5Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="m5.8 8 1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" className={styles.hoursIcon}>
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 4.5V8l2.4 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" className={styles.phoneIcon}>
      <path d="M5 2.6 6.7 4.2c.2.2.3.5.2.8l-.5 1.4c.8 1.3 1.9 2.4 3.2 3.2L11 9.1c.3-.1.6 0 .8.2l1.6 1.7c.2.2.2.6 0 .8l-1.1 1.1c-.5.5-1.2.7-1.9.6C6.6 13 3 9.4 2.6 5.6c-.1-.7.1-1.4.6-1.9l1.1-1.1c.2-.2.6-.2.8 0Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function TopBar() {
  return (
    <div className={styles.topBar} role="region" aria-label="Licensing and contact information">
      <Container className={styles.inner}>
        <div className={styles.license}>
          <Badge variant="accent" icon={<ShieldIcon />} className={`${styles.licenseBadge} nostars`}>
            Licensed in Maryland (MHIC #156178) &amp; Washington, DC (DLCP #410526000209)
          </Badge>
        </div>
        <div className={styles.hours}>
          <ClockIcon />
          <span>Open 7 days a week</span>
        </div>
        <Link href="tel:+12407301292" className={styles.phone}>
          <PhoneIcon />
          <span>(240) 730-1292</span>
        </Link>
      </Container>
    </div>
  );
}
