import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import styles from "./bethesda-projects-reviews.module.scss";

const googleReviewsUrl =
  "https://www.google.com/maps/place/DMV+General+Contracting+Group+LLC/@39.0493761,-77.1200241,17z/data=!3m1!4b1!4m6!3m5!1s0x158dd0ef2148a11:0xceda33050d2dcdfb!8m2!3d39.049372!4d-77.1174492!16s%2Fg%2F11v3gbzc44?hl=en&entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D";

const projects = [
  {
    location: "Northwest DC",
    image: "/images/projects-galary/57-washignton-garage/main.webp",
    imageAlt: "New accessory dwelling unit in Northwest Washington, DC",
    title: "New Accessory Dwelling Unit",
    text: "A second, self-contained home now stands on this Northwest Washington lot, built by our team through DOB review to final approval.",
    href: "/project/nw-dc-adu-construction",
  },
  {
    location: "DC Townhome",
    image: "/images/projects-galary/dc-200002/after-1.webp",
    imageAlt: "Kitchen and first-floor renovation in a Washington, DC townhome",
    title: "Kitchen and First-Floor Renovation",
    text: "This townhome's entire main level was redone, with the kitchen rebuilt as part of one connected renovation.",
    href: "/project/dc-townhome-kitchen-first-floor-renovation",
  },
];

function HardHatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M4 15a8 8 0 0 1 16 0" />
      <path d="M2 15h20v3H2z" />
      <path d="M9 15V6a3 3 0 0 1 6 0v9" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="m10 1.8 2.47 5 5.53.8-4 3.9.94 5.5L10 14.4 5.06 17l.94-5.5-4-3.9 5.53-.8L10 1.8Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M21.8 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.5a4.7 4.7 0 0 1-2 3.1v2.6h3.3c1.9-1.8 3-4.4 3-7.5Z" />
      <path d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.6c-.9.6-2.1 1-3.4 1a5.9 5.9 0 0 1-5.6-4.1H3v2.7A10 10 0 0 0 12 22Z" />
      <path d="M6.4 13.9a6 6 0 0 1 0-3.8V7.4H3a10 10 0 0 0 0 9.2l3.4-2.7Z" />
      <path d="M12 5.9c1.5 0 2.8.5 3.9 1.5l2.9-2.9A9.8 9.8 0 0 0 12 2a10 10 0 0 0-9 5.4l3.4 2.7A5.9 5.9 0 0 1 12 5.9Z" />
    </svg>
  );
}

export default function DcProjectsReviews() {
  return (
    <section className={styles.section} aria-label="Washington, DC projects and testimonials">
      <Container>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article className={styles.projectCard} key={project.href}>
              <div>
                <div className={styles.media}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={styles.image}
                  />
                  <span className={styles.location}>{project.location}</span>
                </div>
                <div className={styles.projectBody}>
                  <div className={styles.badgeWrap}>
                    <Badge className={`${styles.cardBadge} nostars`} icon={<HardHatIcon />}>
                      Case Studies &amp; Projects
                    </Badge>
                  </div>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectText}>{project.text}</p>
                </div>
              </div>
              <div className={styles.projectFooter}>
                <Link href={project.href} className={styles.primaryLink}>
                  View the project <ArrowIcon />
                </Link>
                <Link href="/projects" className={styles.secondaryLink}>
                  Our remodeling projects page <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}

          <article className={`${styles.reviewsCard} ${styles.reviewsCardWide}`}>
            <div>
              <div className={styles.badgeWrap}>
                <Badge variant="accent" className={`${styles.cardBadge} nostars`} icon={<StarIcon />}>
                  Testimonials
                </Badge>
              </div>
              <h2 className={styles.reviewsTitle}>What DC Homeowners Say</h2>

              <div className={styles.rating}>
                <strong className={styles.score}>4.9</strong>
                <div>
                  <div className={styles.stars} aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon key={index} />
                    ))}
                  </div>
                  <span className={styles.ratingLabel}>Google rating</span>
                </div>
              </div>

              <div className={styles.reviewsText}>
                On Google, our average from District and Maryland clients is 4.9 stars. Reviewers often mention tidy job sites and quick replies, and the fuller stories sit under our{" "}
                <Link href="/testimonials" className={styles.inlineLink}>
                  client reviews page
                </Link>
                .
              </div>
            </div>

            <div className={styles.reviewsFooter}>
              <Button
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<GoogleIcon />}
                iconPosition="left"
              >
                Read Reviews on Google
              </Button>
              <Button href="/testimonials" variant="secondary" className={styles.secondaryButton}>
                Client Reviews
              </Button>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
