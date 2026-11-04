import { Accordion } from 'react-bootstrap';
import NavitemActive from '@/components/Common/NavitemActive';
import { Metadata } from "next";

import styles from './style.module.scss';
import Faqs from './faqs';

export const metadata: Metadata = {
  title: "FAQs Concerning Our General Contractor Services",
  description: "Find clear answers to frequently asked questions about our general contractor services, including quality standards, expectations, timelines, and warranties.",
  
  alternates: {
    canonical: "/faqs",
  },
};

function FaqPage() {

	return (
		<main className='page-wrapper'>
			<NavitemActive nav="faqs" />
			<div className={styles['banner-holder']}>
				<div className={`image-holder ${styles["image-holder"]}`}>
					<img src={'/images/faq-banner.jpg'} alt={'faq banner'} />
				</div>
				<div className={styles['content-data']}>
					<h1>FAQS</h1>
				</div>
			</div>
			<Faqs />
		</main>
	)
}

export default FaqPage;