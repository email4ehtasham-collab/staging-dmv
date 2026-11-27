"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  fetchGoogleReviews,
  truncateReviewText,
  type GoogleReview,
} from "@/components/Testimonials/GoogleReviews/googleReviewsFeed";
import styles from "./client-reviews.module.scss";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

function StarIcon({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      opacity={active ? 1 : 0.25}
      aria-hidden="true"
      focusable="false"
    >
      <path d="m10 1.8 2.47 5 5.53.8-4 3.9.94 5.5L10 14.4 5.06 17l.94-5.5-4-3.9 5.53-.8L10 1.8Z" />
    </svg>
  );
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button type="button" onClick={onClick} className="slick-arrow slick-next" aria-label="Next reviews">
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden="true">
        <path d="M1 9H21M21 9L13 1M21 9L13 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <button type="button" onClick={onClick} className="slick-arrow slick-prev" aria-label="Previous reviews">
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" aria-hidden="true">
        <path d="M21 9H1M1 9L9 1M1 9L9 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const rating = Number(review.rating) || 5;
  const date = new Date(review.review_date_time);
  const formattedDate = Number.isNaN(date.getTime())
    ? ""
    : date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  const preview = truncateReviewText(review.review_text);

  return (
    <article className={styles.card}>
      <div className={styles.body}>
        <div className={styles.reviewTop}>
          {review.reviewer_photo_link ? (
            <Image
              src={review.reviewer_photo_link}
              alt=""
              width={44}
              height={44}
              className={styles.avatar}
            />
          ) : (
            <span className={styles.avatarFallback}>{review.reviewer_name.charAt(0)}</span>
          )}
          <div>
            <p className={styles.reviewerName}>{review.reviewer_name}</p>
            <p className={styles.meta}>{formattedDate}</p>
          </div>
        </div>

        <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon key={index} active={index < rating} />
          ))}
        </div>

        <blockquote className={styles.quote}>&ldquo;{preview.text}&rdquo;</blockquote>

        <Link
          href={review.reviewer_link || "https://www.google.com/maps/place/DMV+General+Contracting+Group+LLC"}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.readMore}
        >
          {preview.truncated ? "Read more on Google" : "View on Google"}
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
            <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </article>
  );
}

export default function GoogleReviewsSlider() {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetchGoogleReviews()
      .then((items) => {
        if (active) setReviews(items);
      })
      .catch(() => {
        if (active) setReviews([]);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <div className={styles.sliderFallback}>
        <div className={styles.card}><div className={styles.body}>Loading Google reviews...</div></div>
        <div className={styles.card}><div className={styles.body}>Loading Google reviews...</div></div>
      </div>
    );
  }

  if (!reviews.length) {
    return (
      <div className={styles.card}>
        <div className={styles.body}>Google reviews are temporarily unavailable.</div>
      </div>
    );
  }

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings}>
      {reviews.map((review) => (
        <div className={styles.slide} key={review.id}>
          <ReviewCard review={review} />
        </div>
      ))}
    </Slider>
  );
}
