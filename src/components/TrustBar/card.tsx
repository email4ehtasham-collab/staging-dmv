import React from 'react'
import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.scss";

interface TrustBarCardProps {
    title: string;
    image: string;
}

function TrustBarCard({ title, image }: TrustBarCardProps) {
  return (
    <div className={styles['trust-bar-card']}>
        <Link href={`/`}>
            <div className={`icon-rounded ${styles['image-holder']}`}>
                <Image src={image} alt={title} width={64} height={64} />
            </div>
            <span className={styles['title']}>{title}</span>
        </Link>
    </div>
  )
}

export default TrustBarCard;