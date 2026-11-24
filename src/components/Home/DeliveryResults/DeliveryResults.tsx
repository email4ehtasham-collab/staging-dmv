import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "./delivery-results.module.scss";

type IconName = "experience" | "rating" | "network" | "availability";

function StarIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M8.00016 11.5133L12.1202 13.9999L11.0268 9.31325L14.6668 6.15992L9.8735 5.75325L8.00016 1.33325L6.12683 5.75325L1.3335 6.15992L4.9735 9.31325L3.88016 13.9999L8.00016 11.5133Z"
        fill="#FBBF24"
      />
    </svg>
  );
}

function RatingStars() {
  return (
    <span className={styles.ratingStars} role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} />
      ))}
    </span>
  );
}

const stats = [
  {
    icon: "experience" as IconName,
    label: "Experience",
    value: "35+",
    title: "Years Building in DMV",
    text: "Years of residential construction",
  },
  {
    icon: "rating" as IconName,
    label: "Rating",
    value: "4.9/5",
    title: "Average Google Rating",
    text: "Based on verified client feedback",
  },
  {
    icon: "network" as IconName,
    label: "Network",
    value: "13",
    title: "Communities",
    text: "DC + 12 in Maryland",
  },
  {
    icon: "availability" as IconName,
    label: "Availability",
    value: "7 days",
    title: "Here for You",
    text: "A week you can reach us",
  },
];

function StatIcon({ name }: { name: IconName }) {
  if (name === "experience") {
    return (
      <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.3606 4.60863H5.11865V27H2.3606C1.06079 27 0 25.9317 0 24.6227V6.98327C0 5.67695 1.06079 4.60863 2.3606 4.60863ZM14.0562 0H18.7532C20.2141 0 21.4092 1.20355 21.4092 2.67485V4.10287H19.7173V2.66944C19.7173 2.15286 19.2983 1.73094 18.7854 1.73094H14.0239C13.511 1.73094 13.092 2.15286 13.092 2.66944V4.10287H11.4001V2.67485C11.4001 1.20355 12.5952 0 14.0562 0ZM6.52051 4.60863H26.1653V27H6.52051V4.60863ZM27.5671 4.60863H30.6394C31.9365 4.60863 33 5.67695 33 6.98598V24.6254C33 25.9317 31.9392 27.0027 30.6394 27.0027H27.5671V4.60863Z" fillRule="evenodd" clipRule="evenodd" fill="currentColor"/>
        <path d="M16.5 23C20.6421 23 24 19.6421 24 15.5C24 11.3579 20.6421 8 16.5 8C12.3579 8 9 11.3579 9 15.5C9 19.6421 12.3579 23 16.5 23Z" fill="#F8FAFC" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
        <path d="M16.5 11.0005V15.5005L19.5 17.0005" fill="#F8FAFC" strokeLinecap="round" strokeLinejoin="round" stroke="currentColor"/>
      </svg>
    );
  }

  if (name === "rating") {
    return (
      <svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.91528 18.5383C6.91528 18.9895 6.55005 19.3521 6.10156 19.3521C5.65039 19.3521 5.28784 18.9868 5.28784 18.5383C5.28784 15.4419 6.54199 12.6382 8.57227 10.6079C10.6025 8.57764 13.4062 7.32349 16.5027 7.32349C19.5991 7.32349 22.4028 8.57764 24.4331 10.6079C26.4634 12.6382 27.7175 15.4419 27.7175 18.5383C27.7175 18.9895 27.3523 19.3521 26.9038 19.3521C26.4553 19.3521 26.0901 18.9868 26.0901 18.5383C26.0901 15.8904 25.0186 13.4949 23.2837 11.76C21.5488 10.0251 19.1533 8.95361 16.5054 8.95361C13.8574 8.95361 11.4619 10.0278 9.72705 11.76C7.98682 13.4949 6.91528 15.8931 6.91528 18.5383ZM23.5845 24.2693C23.5415 22.9856 23.614 22.9668 22.1128 22.4055C21.2319 22.0752 20.1067 21.6562 19.2983 21.1541C18.3477 22.0349 17.738 23.042 17.7166 24.2693H23.5845ZM9.41553 24.2693C9.4585 22.9856 9.38599 22.9668 10.8872 22.4055C11.7681 22.0752 12.8933 21.6562 13.7017 21.1541C14.6523 22.0349 15.262 23.042 15.2834 24.2693H9.41553ZM14.5879 19.9429C14.6282 19.6179 13.6667 18.3853 13.4922 17.7917C13.1162 17.1956 12.9819 16.2449 13.3928 15.6138C13.5566 15.364 13.4868 14.9155 13.4868 14.5718C13.4868 11.137 19.5051 11.1343 19.5051 14.5718C19.5051 15.0068 19.4058 15.3372 19.6421 15.6782C20.0369 16.2502 19.8328 17.2627 19.4998 17.7944C19.2876 18.4148 18.2805 19.5911 18.3503 19.9456C18.4094 21.7073 14.5745 21.6482 14.5879 19.9429ZM33 9.47461L31.6196 11.2578L32.5999 13.2881L30.4783 12.5254L28.8508 14.0857L28.9207 11.8325L26.9333 10.7664L29.0979 10.1353L29.498 7.91431L30.7656 9.77808L33 9.47461ZM25.9907 2.46265L25.6873 4.69702L27.551 5.96729L25.3328 6.37012L24.7017 8.53467L23.6355 6.54736L21.3823 6.61719L22.9426 4.98975L22.1772 2.86548L24.2075 3.8457L25.9907 2.46265ZM0 9.47461L2.23438 9.77808L3.50464 7.91431L3.90747 10.1326L6.07202 10.7637L4.08472 11.8298L4.15454 14.083L2.52441 12.5227L0.400146 13.2854L1.38037 11.2551L0 9.47461ZM7.00928 2.46265L8.79248 3.84302L10.8228 2.86279L10.0627 4.98438L11.623 6.61182L9.36987 6.54199L8.30371 8.5293L7.67261 6.36475L5.45166 5.9646L7.31543 4.69434L7.00928 2.46265ZM16.5 0L17.354 2.08667L19.6018 2.25317L17.8831 3.71143L18.4202 5.90283L16.5027 4.71582L14.5852 5.90283L15.1223 3.71143L13.3982 2.25317L15.646 2.08667L16.5 0Z" fill="currentColor"/>
      </svg>
    );
  }

  if (name === "network") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
        <circle cx="12" cy="10" r="6" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3 20c1.8-3.2 5-5 9-5s7.2 1.8 9 5M12 4v12M6 10h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7.3V12l3.2 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function DeliveryResults() {
  return (
    <section id="results" className={styles.section} aria-labelledby="results-title">
      <Container>
        <div className={styles.header}>
          <SectionHeading
            id="results-title"
            align="center"
            eyebrow={<Badge>Proven Excellence</Badge>}
            title="Building Trust Through Delivered Results"
          />
        </div>

        <div className={styles.grid}>
          {stats.map((stat) => (
            <article key={stat.title} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.icon}>
                  <StatIcon name={stat.icon} />
                </span>
                {stat.icon === "rating" ? (
                  <RatingStars />
                ) : stat.label ? (
                  <span className={styles.label}>{stat.label}</span>
                ) : null}
              </div>
              <p className={styles.value}>{stat.value}</p>
              <h3 className={styles.cardTitle}>{stat.title}</h3>
              <p className={styles.cardText}>{stat.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
