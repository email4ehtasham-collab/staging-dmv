import Link from "next/link";

import StarsIcon from '@/assets/stars.svg';

import styles from "./style.module.scss";

function CalltoAction() {
  return (
    <section className={`section py-5 ${styles['call-to-action']}`}>
        <div className="container">
            <div className={styles['data-holder']}>
                <div className="row justify-content-center">
                    <div className="">
                        <h3 className="section-title mb-3">
                            <div className={'stars-icon'}>
                                <StarsIcon />
                            </div>
                            Planning a Home Renovation or Upgrade?
                        </h3>
                        <h5 className="mb-4">Ready to begin your home project with a team you can rely on? <Link className='fw-bold text-white' href={'/contact-us'}>Get in Touch!</Link></h5>
                        <Link href="/contact-us" className="btn btn-light btn-c-rounded text-primary">Get Started</Link>
                    </div>
                </div>
                <div className={styles['image-holder']}>
                    <img 
                        src='/images/cta-image.webp' 
                        className='cta-image' 
                        alt="cta image" 
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default CalltoAction;