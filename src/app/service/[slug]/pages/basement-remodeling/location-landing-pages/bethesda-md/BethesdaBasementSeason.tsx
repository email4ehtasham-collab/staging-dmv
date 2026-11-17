import Badge from "@/components/Common/Badge";
import Container from "@/components/Common/Container";
import SectionHeading from "@/components/Common/SectionHeading";
import styles from "../../../bathroom-remodeling/location-landing-pages/bethesda-md/bethesda-bathroom-cost-drivers.module.scss";

export default function BethesdaBasementSeason() {
    return (
        <section className={styles.section} aria-labelledby="bethesda-basement-season-title">
            <Container>
                <div className={styles.header}>
                    <SectionHeading
                        id="bethesda-basement-season-title"
                        align="center"
                        eyebrow={<Badge>Season and Timing</Badge>}
                        title="What Time of Year Is Best to Finish a Basement?"
                        text="Interior finishing runs year-round, and fall and winter slots are often easier to book."
                    />
                </div>

                <div className={styles.grid}>
                    <article className={styles.card}>
                        <div className={styles.cardTop}>
                            <span className={styles.iconBox}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M12 7v5l3 2" />
                                </svg>
                            </span>
                            <span className={styles.step}>01</span>
                        </div>
                        <h3 className={styles.cardTitle}>Schedule water and egress work for dry weather</h3>
                        <p className={styles.cardText}>
                            Waterproofing and digging an egress well go best in dry weather, so we schedule that part for
                            spring through early fall when we can.
                        </p>
                    </article>
                </div>

                <div className={styles.noteBanner}>
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <span>Home offices, wellness rooms and flexible guest space are the most requested layouts this year.</span>
                </div>
            </Container>
        </section>
    );
}
