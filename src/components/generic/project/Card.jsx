"use client";
import ResponsiveImage from "@/components/Common/ResponsiveImage";

import Link from "next/link";

import styles from "./cardstyle.module.scss";


function Card({ cardImage, afterImage, id, category, description, slug , imageAlt }) {
  if (!slug) return null;

  return (
    <div id={slug} className={styles["project-card"]}>
        <div className={`image-holder ${styles["card-image"]}`}>
            {parseInt(id) <= -1 ? (
                <ResponsiveImage src={afterImage} />
            ) : (
                <ResponsiveImage src={cardImage} alt={imageAlt ? imageAlt : category } />
            )}
            <ResponsiveImage src={afterImage} />
        </div>
        <div className={`${styles['card-details']}`}>
            <Link className="text-content text-decoration-none" href={`/project/${slug}`}>
                <h2 className='mb-2 h4'>{category}</h2>
            </Link>
            <div className={styles['description-holder']}>
                <p>{description}</p>
            </div>
            <Link href={`/project/${slug}`} className='btn button-primary btn-c-rounded w-100'>View Project</Link>
        </div>
    </div>
  );
}

export default Card;