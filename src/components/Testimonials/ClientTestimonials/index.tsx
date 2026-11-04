import testimonialsvideosData from "../TestimonialsData";
import StarsIcon from '@/assets/stars.svg';
import TestimonialVideoGrid from "./TestimonialVideoGrid";
import styles from "./style.module.scss";

const ClientTestimonials = ({ testimonialVideo }: { testimonialVideo?: string }) => {
    const filteredVideos = testimonialsvideosData
        .filter((video) => video.video_type === "review")
        .slice(1, 4);

    return (
        <section className={`section section-bg-light ${styles["client-testimonials"]}`}>
            <div className="container">
                <div className={styles["data-holder"]}>
                    <div className={`grid ${styles["content-data"]}`}>
                        <h3 className="section-title">
                            <div className={'stars-icon'}>
                                <StarsIcon />
                            </div>
                            Client Testimonials
                        </h3>

                        <div>
                            <p>
                                DMV General Contracting Group is a trusted Design-Build home remodeling company providing professional renovation and construction services for homeowners who want to transform their living spaces into something more functional, beautiful, and aligned with their lifestyle. With extensive experience in the home remodeling industry, we are committed to delivering results that not only meet expectations but consistently exceed them.
                            </p>

                            <p>
                                Our team manages the entire remodeling journey—from concept development and planning to design, construction, and the final finishing touches—ensuring every project is completed with precision and craftsmanship.
                            </p>

                            <p>
                                The client video testimonials below feature real homeowners sharing their experiences working with DMV General Contracting Group. They talk about the remodeling process, our team’s professionalism, the quality of the workmanship, and the impact the renovation had on their homes.
                            </p>
                            <p>
                                These stories represent the trust our clients place in us and the pride we take in every project. Our goal is always the same: to help homeowners renovate, remodel, and upgrade their spaces while improving how their homes look, feel, and function.
                            </p>
                        </div>
                    </div>

                    <TestimonialVideoGrid videos={filteredVideos} initialVideoId={testimonialVideo} />
                </div>
            </div>
        </section>
    );
};

export default ClientTestimonials;