"use client";
import ResponsiveImage from "@/components/Common/ResponsiveImage";

import Link from "next/link";

import styles from "./cardstyle.module.scss";

import Arrow from "@/assets/arrow-v2.svg";

function Card({ image, title, description, slug,  }) {
  if (!slug) return null;

  return (
    <div id={slug} className={styles["blog-card"]}>
        <div className={`image-holder ${styles["blog-image"]}`}>
            <ResponsiveImage src={image} alt={title} />
        </div>
        <div className='grid' data-gap="10" grid-item-width="1/1">
            <h2 className='font-weight-bold h4'>
                <Link href={`/blog/${slug}`} >
                    {title}
                </Link>
            </h2>
            <div className='description-holder'>
                <p>
                    {`${description.slice(0, 250)}...`}
                </p>
            </div>
            <Link href={`/blog/${slug}`} className={`h-list btn button-primary btn-c-rounded px-4 text-decoration-none ${styles["read-more-button"]}`} data-gap="5">
                Read Post
                <Arrow />
            </Link>
        </div>
    </div>
  );
}

export default Card;