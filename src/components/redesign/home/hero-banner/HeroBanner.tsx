import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Common/Badge";
import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import styles from "./hero-banner.module.scss";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" className={styles.buttonIcon}>
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false" className={`${styles.buttonIcon} ${styles.phoneIcon}`}>
      <path d="M5 2.6 6.7 4.2c.2.2.3.5.2.8l-.5 1.4c.8 1.3 1.9 2.4 3.2 3.2L11 9.1c.3-.1.6 0 .8.2l1.6 1.7c.2.2.2.6 0 .8l-1.1 1.1c-.5.5-1.2.7-1.9.6C6.6 13 3 9.4 2.6 5.6c-.1-.7.1-1.4.6-1.9l1.1-1.1c.2-.2.6-.2.8 0Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false" className={styles.star}>
      <path d="m10 1.7 2.5 5.1 5.6.8-4.1 4 1 5.6-5-2.6-5 2.6 1-5.6-4.1-4 5.6-.8L10 1.7Z" fill="currentColor" />
    </svg>
  );
}

export default function HeroBanner() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.inner}>
        <div className={styles.content}>
          <Badge className="nostars">Residential general contractor · Maryland & DC</Badge>
          <h1 id="hero-title" className={styles.title}>
            Licensed Maryland General Contractor for Home Remodels <span className={styles.highlight}> From Design To Completion</span>
          </h1>
          <p className={styles.lede}>
            DMV General Contracting Group is a licensed residential general contractor in Maryland and Washington, DC, with 35 years of experience in home remodeling. We design, permit and build kitchens, bathrooms, basements, ADUs, additions and whole-home renovations under one contract, so you never have to hire and schedule separate trades yourself.
          </p>
          <div className={styles.actions}>
            <Button href="/contact-us" data-estimate-trigger icon={<ArrowIcon />}>
              Get Free Estimate
            </Button>
            <Button href="tel:+12407301292" variant="secondary" icon={<PhoneIcon />} iconPosition="left">
              (240) 730-1292
            </Button>
          </div>
          <p className={styles.note}>
            We follow the building codes and permit rules of every area we work in, from Montgomery County DPS in Bethesda, Potomac and Silver Spring to the City of Rockville, the City of Gaithersburg, Laurel and the DC Department of Buildings.
          </p>
        </div>

        <div className={styles.media}>
          <div className={styles.mediaFrame}>
            <Image
              src="/images/banner-kitchen.jpg"
              alt="Custom open-concept kitchen remodel in Bethesda"
              fill
              sizes="(max-width: 1024px) 100vw, 699px"
              className={styles.mediaImage}
            />
            <div className={styles.mediaOverlay} />
            <div className={styles.featured}>
              <Badge variant="accent" className={`${styles.featuredBadge} nostars`}>
                Featured Transformation
              </Badge>
              <p className={styles.featuredTitle}>Bethesda Custom Open-Concept Kitchen</p>
              <p className={styles.featuredMeta}>Design, Architectural Engineering, Permits &amp; Complete Remodel</p>
            </div>
          </div>

          <aside className={styles.reviewCard} aria-label="Google review rating">
            <div className={styles.reviewTop}>
              <span className={styles.rating}>4.9</span>
              <span className={styles.stars} role="img" aria-label="Rated 5 out of 5">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </span>
            </div>
            <p className={styles.reviewText}>Homeowners rate us 4.9 out of 5 on Google.</p>
            <Link href="https://www.google.com/maps/place/DMV+General+Contracting+Group+LLC/@39.0493761,-77.1200241,17z/data=!3m1!4b1!4m6!3m5!1s0x158dd0ef2148a11:0xceda33050d2dcdfb!8m2!3d39.049372!4d-77.1174492!16s%2Fg%2F11v3gbzc44?hl=en&entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D" className={styles.reviewLink}>
              <span>Read reviews</span>
              <ArrowIcon />
            </Link>
          </aside>
        </div>
      </Container>
    </section>
  );
}
