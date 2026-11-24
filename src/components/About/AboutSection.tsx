import Link from "next/link";
import StarsIcon from "@/assets/stars.svg";
import AboutVideoModal from "./AboutVideoModal";
import styles from "./style.module.scss";

const AboutSection = () => {
    const videoUrl = "https://www.youtube.com/embed/V3Kbl8qa8AE";
    const posterImage = "/videos/dmv-video-poster.jpg";

    return (
        <section className={`${styles["about-us-section"]} section section-bg-light`}>
            <div className="container">
                <div className={styles["data-holder"]}>
                    <div
                        className={styles["content-data"] + " grid"}
                        grid-item-width="1/1"
                        data-gap="10"
                    >
                        <h3 className="section-title">
                            <div className={"stars-icon"}>
                                <StarsIcon />
                            </div>
                            Who Are We?
                        </h3>

                        <div>
                            <p>
                                DMV General Contracting Group is a trusted Design-Build home remodeling company offering the most reliable home remodeling and construction services for homeowners looking to upgrade spaces that actually fit real-life needs. With several years of experience in the industry, we are committed to delivering exceptional results, even exceeding our client's expectations.
                            </p>

                            <p>
                                Our professional team handles everything from ideas and planning to designing and final finishes. We help homeowners renovate, remodel, and upgrade their spaces, improving how their homes look, feel, and function.
                            </p>
                        </div>

                        <div>
                            <Link
                                href="/about-us"
                                className={"btn button-primary btn-c-rounded"}
                            >
                                Read More
                            </Link>
                        </div>
                    </div>

                    <div className={styles["video-holder"] + " video-holder"}>
                        <AboutVideoModal videoUrl={videoUrl} posterImage={posterImage} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;