import Link from 'next/link';

import styles from './style.module.scss';

import StartJourney from '@/components/StartJourney';
import OurServices from '@/components/OurServices/OurServices';
import CalltoAction from '@/components/CalltoAction';
import NavitemActive from "@/components/Common/NavitemActive";

import { Metadata } from "next";

import StarsIcon from '@/assets/stars.svg';

export const metadata: Metadata = {
  title: "About DMV General Contracting Group | Licensed General Contractor Bethesda MD",
  description: "Learn about DMV General Contracting Group — a trusted design-build general contractor serving Bethesda MD, Virginia & DC. Years of experience, licensed in-house teams & 4.9★ rated. Meet our team.",
  
  alternates: {
    canonical: "/about-us",
  },
};

function AboutPage() {

	return (
		<main className='page-wrapper'>
			<NavitemActive nav="about" />
			<div className={styles['about-page']}>
				<div className={styles['banner-holder']}>
					<div className={`image-holder ${styles['main-image-holder']}`}>
						<img src={'/images/hero-banner.jpg'} alt={'banner'} />
					</div>
					<div className={styles['content-data']}>
						{/* <span className='sub-title'>Specializing in Home remodeling</span> */}
						<h1>About DMV-GC</h1>
					</div>
				</div>
				<section className='section page-content'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-8'>
								<h3 className='section-title mb-2'>
									<div className={'stars-icon'}>
										<StarsIcon />
									</div>
									About DMV General Contracting Group
								</h3>
								<p>We are a full-service <span className='fw-bold'>general contractor</span> keenly focused on home improvement and residential construction projects that are built to start. With a vision to redefine the excellent standards in the industry, we began this <span className='fw-bold'>construction company</span> serving homeowners who want unparalleled <span className='fw-bold'>building and renovation solutions</span> without any stress and shortcuts.</p>
								<div className='desc-item'>
									<h5 className={styles['desc-item--title']}>Our Mission:</h5>
									<p>We strive to exceed client's expectations with a focus on reliable construction, smart design, and renovations that add function, comfort, and long-term value to every project we take on.</p>
								</div>
								<div className='desc-item'>
									<h5 className={styles['desc-item--title']}>Core Values:</h5>
									<p>Each of our projects reflects our promise to treat and improve your home as if it were our own.</p>
								</div>
								<div className='desc-item'>
									<h5 className={styles['desc-item--title']}>Licensed:</h5>
									<ul className='d-flex list-unstyled p-0 m-0 gap-4'>
										<li className='d-flex align-items-center'>
											<span className='text-primary fw-bold' style={{minWidth: '40px'}}>MD:</span> MHIC #156178
										</li>
										<li>|</li>
										<li className='d-flex align-items-center'>
											<span className='text-primary fw-bold' style={{minWidth: '40px'}}>DC:</span> DLCP #410526000209
										</li>
									</ul>
									
								</div>
							</div>
							<div className='col-md-4'>
								<div className={`image-holder ${styles['gus-image']}`}>
									<img src={'/images/gus-port.jpg'} alt={'banner'} />
								</div>
							</div>
						</div>					
					</div>
				</section>
				<StartJourney />
				<section className={`section section-bg-light ${styles['why-choose-us']}`}>
					<div className='container'>
						<h3 className='section-title mb-4'>
							<div className={'stars-icon'}>
								<StarsIcon />
							</div>
							Why Choose DMV General Contracting Group?
						</h3>
						<div className={`grid pt-4 ${styles['why-choose-us--grid']}`} grid-item-width="1/2" data-gap="50" data-gap-v="10" data-gap-v-md="20">
							<div className='desc-item'>
								<h4 className={styles['desc-item--title']}>Expertise:</h4>
								<p>We approach every project with a clear builder’s mindset, instead of just a sales pitch. Our team knows well how to plan work in realistic timelines to build what performs well in everyday life.</p>
							</div>
							<div className='desc-item'>
								<h4 className={styles['desc-item--title']}>Innovation:</h4>
								<p>We use proven construction techniques utilizing modern tools to design smart and build cleaner. From early design planning to final clean finishes, we present solutions that stand out and reduce last-minute surprises while keeping the project going on smoothly.</p>
							</div>
							<div className='desc-item'>
								<h4 className={styles['desc-item--title']}>Client-Centric Focus:</h4>
								<p>Our clients are at the heart of everything we do. We take the time to understand their unique needs, tailoring our services to create bespoke solutions that resonate with their vision.</p>
							</div>
							<div className='desc-item'>
								<h4 className={styles['desc-item--title']}>Commitment to Quality:</h4>
								<p>Quality is not merely a key goal; it is a standard that we prioritize in every project we undertake, as we truly care how a home will look and stay months and years later. From framing and finishes to final walkthrough, we promise high-quality so your home feels right to you always.</p>
							</div>
						</div>
					</div>
				</section>
				<OurServices />
				<CalltoAction />
			</div>
		</main>
	)
}

export default AboutPage;