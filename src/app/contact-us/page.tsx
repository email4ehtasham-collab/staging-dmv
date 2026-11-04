import { Metadata } from "next";
import NavitemActive from '@/components/Common/NavitemActive';
import ContactForm from '@/components/ContactForm';

import styles from './style.module.scss';
import GoogleMap from '@/components/GoogleMap';

import StarsIcon from '@/assets/stars.svg';

export const metadata: Metadata = {
  title: "Contact DMV General Contracting Group | Free Consultation Bethesda MD",
  description: "Contact DMV General Contracting Group for a free in-home consultation. Call +1 240-730-1292 or email support@dmv-gc.com. Serving Bethesda, Maryland and Washington DC.",
  
  	alternates: {
      	canonical: `/contact-us`,
    },
};


function ContactPage() {

	return (
		<main className='page-wrapper'>
			<NavitemActive nav="contact" />
			<div className={styles['banner-holder']}>
				<div className={`image-holder ${styles["image-holder"]}`}>
					<img src={'/images/contact-us-banner.jpg'} alt={'contact-us-banner'} />
				</div>
				<div className={styles['content-data']}>
					{/* <span className='sub-title'>Specializing in Home remodeling</span> */}
					<h1>Contact Us</h1>
				</div>
			</div>
			<section className='section section-bg-light page-content'>
				<div className='container'>
					<h3 className='section-title'>
						<div className={'stars-icon'}>
							<StarsIcon />
						</div>
						Drop Us a Line!
					</h3>
					<div className={`grid mt-4 ${styles['form-holder-grid']}`} grid-item-width="1/2" data-gap="40">
						<ContactForm />
						<div>
							<div className='mb-3'>
								<h4 className='mb-2'>Better Yet, See Us in Person!</h4>
								<p>We love our customers, DMV General Contracting Group LLC is committed to providing exceptional construction services to our valued clients. For inquiries, project collaborations, or any questions you may have, please feel free to contact us.</p>
							</div>
							<div className='mb-3'>
								<h4>Call us</h4>
								<p><a className='text-decoration-none text-content' href="tel:+1 (240) 730-1292">+1 240-730-1292</a></p>
							</div>
							<div className='mb-3'>
								<h4>Email us</h4>
								<p><a className='text-decoration-none text-content' href="mailto:support@dmv-gc.com">support@dmv-gc.com</a></p>
							</div>
							<div className='mb-3'>
								<h4>Office Address</h4>
								<p>11810 Grand Park Ave. Suite 500 North Bethesda, MD 20852</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<GoogleMap />
		</main>
	)
}

export default ContactPage;