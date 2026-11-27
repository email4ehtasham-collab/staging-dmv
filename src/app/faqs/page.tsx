import ResponsiveImage from "@/components/Common/ResponsiveImage";
import { Accordion } from 'react-bootstrap';
import NavitemActive from '@/components/Common/NavitemActive';
import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/resolve";

import styles from './style.module.scss';
import Faqs from './faqs';

const baseMetadata: Metadata = {
  title: "FAQs Concerning Our General Contractor Services",
  description: "Find clear answers to frequently asked questions about our general contractor services, including quality standards, expectations, timelines, and warranties.",
  
  alternates: {
    canonical: "/faqs",
  },
};

export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/faqs", baseMetadata);
}

function FaqPage() {

	return (
		<main className='page-wrapper'>
			<NavitemActive nav="faqs" />
			<div className={styles['banner-holder']}>
				<div className={`image-holder ${styles["image-holder"]}`}>
					<ResponsiveImage src={'/images/faq-banner.webp'} alt={'faq banner'} priority />
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