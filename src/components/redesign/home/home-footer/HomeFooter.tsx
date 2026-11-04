import Link from "next/link";
import Container from "@/components/Common/Container";
import styles from "./home-footer.module.scss";

const serviceLinks = [
  { label: "Kitchen remodeling", href: "/service/kitchen-remodeling" },
  { label: "Bathroom remodeling", href: "/service/bathroom-remodeling" },
  { label: "Basement remodeling", href: "/service/basement-remodeling" },
  { label: "ADU construction", href: "/service/adu" },
  { label: "Whole-home renovation", href: "/services" },
  { label: "Home additions", href: "/service/home-additions" },
  { label: "Design-build", href: "/service/design-build" },
  { label: "All services", href: "/services" },
];

const companyLinks = [
  { label: "About us", href: "/about-us" },
  { label: "Our team", href: "/our-team" },
  { label: "Projects", href: "/projects" },
  { label: "Client reviews", href: "/testimonials" },
  { label: "Permits", href: "/#permits" },
  { label: "Blog", href: "/blogs" },
  { label: "FAQS", href: "/faqs" },
  { label: "Contact", href: "/contact-us" },
];

const areaLinks = [
  { label: "Washington, DC", href: "/#areas" },
  { label: "Bethesda", href: "/#areas" },
  { label: "North Bethesda", href: "/#areas" },
  { label: "Rockville", href: "/#areas" },
  { label: "Potomac", href: "/#areas" },
  { label: "Silver Spring", href: "/#areas" },
  { label: "Gaithersburg", href: "/#areas" },
  { label: "All areas", href: "/#areas" },
];

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M7.2 3.5 9.6 8 7.9 9.7c1.1 2.3 2.9 4.1 5.2 5.2l1.7-1.7 4.5 2.4-.6 2.3c-.2.8-.9 1.4-1.7 1.4C10.2 19.3 4.7 13.8 4.7 7c0-.8.6-1.5 1.4-1.7l1.1-.3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="m4.5 7 7.5 5.5L19.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path d="M14 8.5V6.8c0-.7.4-1.1 1.2-1.1H16V3h-2c-2.2 0-3.4 1.3-3.4 3.5v2H8.5V11h2.1v10H14V11h2.2l.5-2.5H14Z" fill="currentColor" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10v7M8 7.2v.1M11.5 17v-4.2c0-1.4.8-2.3 2.2-2.3 1.3 0 2.1.9 2.1 2.3V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function HomeFooter() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.contactBar}>
          <div className={styles.contactItem}>
            <span className={`${styles.contactIcon} ${styles.contactIconBrand}`}>
              <MapPinIcon />
            </span>
            <div className={styles.contactText}>
              <p className={styles.contactLabel}>Head office</p>
              <address className={`${styles.contactValue} ${styles.address}`}>
                11810 Grand Park Ave, Suite 500, North Bethesda, MD 20852
              </address>
            </div>
          </div>

          <div className={styles.contactItem}>
            <span className={`${styles.contactIcon} ${styles.contactIconGold}`}>
              <PhoneIcon />
            </span>
            <div className={styles.contactText}>
              <p className={styles.contactLabel}>Direct phone</p>
              <a className={styles.contactValue} href="tel:+12407301292">
                (240) 730-1292
              </a>
            </div>
          </div>

          <div className={styles.contactItem}>
            <span className={`${styles.contactIcon} ${styles.contactIconBrand}`}>
              <MailIcon />
            </span>
            <div className={styles.contactText}>
              <p className={styles.contactLabel}>Email enquiries</p>
              <a className={styles.contactValue} href="mailto:support@dmv-gc.com">
                support@dmv-gc.com
              </a>
            </div>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.intro}>
            <p className={styles.description}>
              Licensed residential general contractor in Maryland and Washington, DC, with 35 years of experience. Design, permits and construction under one contract.
            </p>

            <div className={styles.legalRow}>
              <span>MD MHIC #156178</span>
              <span>DC DLCP #410526000209</span>
            </div>
            <p className={styles.insurance}>General liability insured</p>

            <p className={styles.hours}>Open 7 days a week</p>

            <div className={styles.socials}>
              <a href="https://www.facebook.com/DMVGCGroupLLC" target="_blank" rel="noopener noreferrer" aria-label="DMV GC on Facebook">
                <FacebookIcon />
              </a>
              <a href="https://www.linkedin.com/company/104760932/admin/dashboard" target="_blank" rel="noopener noreferrer" aria-label="DMV GC on LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://www.instagram.com/dmvgcgroupllc" target="_blank" rel="noopener noreferrer" aria-label="DMV GC on Instagram">
                <InstagramIcon />
              </a>
            </div>

            <Link href="/contact-us" data-estimate-trigger className={styles.estimateButton}>
              Get a Free Estimate
            </Link>
          </div>

          <nav className={`${styles.linkColumn} ${styles.services}`} aria-label="Services">
            <h2>Services</h2>
            <ul>
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={`${styles.linkColumn} ${styles.company}`} aria-label="Company">
            <h2>Company</h2>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={`${styles.linkColumn} ${styles.areas}`} aria-label="Service areas">
            <h2>Service areas</h2>
            <ul>
              {areaLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2026 DMV General Contracting Group LLC. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/license">Terms Conditions</Link>
            <Link href="/license">Privacy Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
