import Link from "next/link";
import Image from "next/image";
import styles from "./cardstyle.module.scss";

function Card({ image, title, description, slug, id, cover }) {
  if (!slug) return null;

  return (
    <div id={id} className={styles["service-card"]}>
        <div className={"image-holder "  + styles["properties-image"]}>
            <Image 
                src={cover.startsWith('.') ? cover.substring(1) : cover} 
                alt={title} 
                width={400} 
                height={250} 
                style={{ objectFit: 'cover' }}
            />
        </div>
        <div className='grid card-details' data-gap="10" grid-item-width="1/1">
            <h4 className='font-weight-bold'><Link className="text-decoration-none text-content" href={`/service/${slug}`}>{title}</Link></h4>
                <p>
                    {`${description.slice(0, 250)}...`}
                </p>
        </div>
        <Link href={`/service/${slug}`} className='h-list justify-content-between bottom-buttons' data-gap="10">
            <div className='w-100'>
                <span className={'btn button-primary btn-c-rounded w-100'}>View Details</span>
            </div>
        </Link>
    </div>
  );
}

export default Card;