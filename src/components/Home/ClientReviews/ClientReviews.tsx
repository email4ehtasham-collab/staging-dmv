import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./client-reviews.module.scss";

const reviews = [
  {
    quote: "DMV GC transformed our outdated kitchen into a modern masterpiece. Our project manager kept us updated daily and stuck strictly to the timeline and original estimate.",
    name: "Michael R.",
    project: "Kitchen Remodel",
    location: "Bethesda, MD",
    image: "/images/projects-galary/calvert-st-kitchen/1.jpg",
    alt: "Completed kitchen remodel in Bethesda, Maryland",
  },
  {
    quote: "Handling permits in DC can be a nightmare, but the DMV GC team handled everything seamlessly. Their crew was respectful, clean, and delivered top-tier quality.",
    name: "Sarah L.",
    project: "Bathroom Remodel",
    location: "Washington, DC",
    image: "/images/services/bathroom.webp",
    alt: "Completed bathroom remodel in Washington, DC",
  },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path d="m10 1.8 2.47 5 5.53.8-4 3.9.94 5.5L10 14.4 5.06 17l.94-5.5-4-3.9 5.53-.8L10 1.8Z" fill="currentColor" />
    </svg>
  );
}

export default function ClientReviews() {
  return (
    <section id="reviews" className={styles.section} aria-labelledby="reviews-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="reviews-title"
            align="center"
            eyebrow={<Badge>Testimonials</Badge>}
            title="What Our Clients Say"
            text={
              <>
                Our clients rate us 4.9 out of 5 on Google. You can read every review on our <Link href="https://www.google.com/maps/place/DMV+General+Contracting+Group+LLC/@39.0493761,-77.1200241,17z/data=!3m1!4b1!4m6!3m5!1s0x158dd0ef2148a11:0xceda33050d2dcdfb!8m2!3d39.049372!4d-77.1174492!16s%2Fg%2F11v3gbzc44?hl=en&entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D">Google Business Profile</Link> and more client stories on our{" "}
                <Link href="/testimonials">client reviews page</Link>.
              </>
            }
          />
        </div>

        <div className={styles.grid}>
          {reviews.map((review) => (
            <article key={review.name} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={review.image}
                  alt={review.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 345px"
                  className={styles.image}
                />
              </div>
              <div className={styles.body}>
                <div className={styles.stars} aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} />
                  ))}
                </div>
                <blockquote className={styles.quote}>&ldquo;{review.quote}&rdquo;</blockquote>
                <p className={styles.name}>{review.name}</p>
                <p className={styles.meta}>{review.location} &middot; {review.project}</p>
              </div>
            </article>
          ))}

          <article className={styles.storiesCard}>
            <div className={styles.storiesIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M4 5.5h16v11H9l-5 3v-14Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 9h8M8 12.5h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Homeowner Stories</h3>
            <p>See more real kitchens, bathrooms, additions and ADUs from homeowners across DC and Maryland.</p>
            <Link href="/testimonials">Explore Client Stories</Link>
          </article>

          <article className={styles.summary}>
            <span className={styles.google}>Google Reviews</span>
            <div className={styles.score}>
              <strong>4.9</strong>
              <span>/5</span>
            </div>
            <div className={styles.summaryStars} aria-label="4.9 out of 5 stars">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon key={index} />
              ))}
            </div>
            <p>Average rating across 97+ verified Google reviews in the DMV area.</p>
            <Button
              href="https://www.google.com/maps/place/DMV+General+Contracting+Group+LLC/@39.0493761,-77.1200241,17z/data=!3m1!4b1!4m6!3m5!1s0x158dd0ef2148a11:0xceda33050d2dcdfb!8m2!3d39.049372!4d-77.1174492!16s%2Fg%2F11v3gbzc44?hl=en&entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className={styles.summaryButton}
            >
              Read Every Review on Google
            </Button>
          </article>
        </div>
      </Container>
    </section>
  );
}
