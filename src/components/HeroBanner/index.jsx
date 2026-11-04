import NextLink from "next/link";
import Image from "next/image";
import PlayIcon from "/public/images/play-icon.svg";
import styles from "./style.module.scss";
import GoogleCalendarButton from "../GoogleCalendarButton/GoogleCalendarButton";

function HeroBanner() {
    return (
        <div className={styles['hero-banner']}>
            <div className="container">
                <div className={`${styles['image-holder']} ${styles['background-image']}`}>
                    <Image 
                        src="/images/banner.webp" 
                        alt="banner" 
                        fill 
                        priority 
                        sizes="100vw"
                        style={{ objectFit: 'cover', objectPosition: 'right' }}
                    />
                </div>
                <div className={styles['content-data']}>
                    <div>
                        <label className={`badge ${styles['top-label']}`}>DLCP & MHIC LICENSED - BONDED - INSURED</label>
                        <h1>Renovation Done <span className='text-secondary'>Right</span>, <br /> From Design To Completion</h1>
                        <h2>Trusted Design-Build Contractor <br /> Serving Washington DC & Maryland</h2>
                        {/* <p className='font-weight-600 mb-0'>DMV General Contracting Group is a licensed general contractor and design-build remodeling company serving North Bethesda, MD, and the surrounding DMV area. We handle kitchen & bathroom renovations, home additions, basement remodels, exterior renovations & more — with in-house architectural, engineering, permits & inspection, electrical, plumbing and HVAC teams.</p> */}
                        <p className='font-weight-600 mb-0'>DMV General Contracting Group is a licensed general contractor and design-build remodeling company serving North Bethesda, MD, and the DMV area. We specialize in kitchen and bathroom remodels, home additions, basement finishing, and exterior renovations, with in-house architecture, engineering, permitting, electrical, plumbing, and HVAC services.</p>
                        <div className={`h-list justify-content-center my-4 justify-content-md-start ${styles['buttons-holder']}`} data-gap="15">
                            {/* <NextLink href="/contact-us" className="btn button-primary btn-c-rounded">Get Free Quote</NextLink> */}
                            <GoogleCalendarButton variant="inline" />
                            <NextLink href="/our-stories" className={`btn button-primary btn-c-rounded h-list ${styles['view-work']}`} data-gap="5">
                                <PlayIcon />
                                View Our Work
                            </NextLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;