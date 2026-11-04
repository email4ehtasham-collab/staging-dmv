"use client";

import Link from "next/link";

import styles from "./cardstyle.module.scss";


function Card({ cardImage, afterImage, id, category, description, slug , imageAlt }) {
  if (!slug) return null;

  return (
    <div id={slug} className={styles["project-card"]}>
        <div className={`image-holder ${styles["card-image"]}`}>
            {parseInt(id) <= -1 ? (
                <img src={afterImage} />
            ) : (
                <img src={cardImage} alt={imageAlt ? imageAlt : category } />
            )}
            <img src={afterImage} />
        </div>
        <div className={`${styles['card-details']}`}>
            <Link className="text-content text-decoration-none" href={`/project/${slug}`}>
                <h4 className='mb-2'>{category}</h4>
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