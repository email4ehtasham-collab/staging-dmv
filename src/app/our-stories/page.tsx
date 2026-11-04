import { Metadata } from "next";
import { Suspense } from "react";
import Stories from "./stories";

import styles from "./style.module.scss";
import NavitemActive from "@/components/Common/NavitemActive";
import GoogleReviews from "@/components/Testimonials/GoogleReviews";

export const metadata: Metadata = {
    title: "Behind The Scenes Where Our Construction Projects Take Shape",
    description:
        "Step behind the scenes to see how our expert team plans, builds, and designs throughout a construction project from early planning to on-site execution.",

    alternates: {
        canonical: `/our-stories`,
    },
};

export default function OurStoriesPage() {
    return (
        <main className="page-wrapper">
            <NavitemActive nav="our-stories" />

            <div className={styles["banner-holder"]}>
                <div className={styles["circle"] + " " + styles["circle-1"]}></div>
                <div className={styles["circle"] + " " + styles["circle-2"]}></div>
                <div className={styles["circle"] + " " + styles["circle-3"]}></div>
                <div className={styles["circle"] + " " + styles["circle-4"]}></div>
                <div className={styles["circle"] + " " + styles["circle-5"]}></div>
                <div className="container">
                    <div className={styles["content-data"]}>
                        <h4>Behind the scenes</h4>
                        <h1>Renovation <span>Journeys</span></h1>
                        <p>
                            Discover the unseen journey behind our projects. From planning to execution, we capture real actions, challenges, and teamwork that shape success. Experience the true process behind every creative story.
                        </p>
                    </div>
                </div>
            </div>

            <Suspense fallback={null}>
                <Stories />
            </Suspense>
            <GoogleReviews />
        </main>
    );
}