import GoogleReviewsWidget from "./GoogleReviewsWidget";
import StarsIcon from '@/assets/stars.svg';
import styles from "./style.module.scss";

const GoogleReviews = () => {
	return (
		<section className='section testimonials-main'>
			<div className="container">
				<div className='h-list justify-content-between flex-nowrap mb-4' data-gap="10">
					<div className='grid' data-gap="10">
						<h3 className='section-title'>
							<div className={'stars-icon'}>
                                <StarsIcon />
                            </div>	
							What Our Clients Say About Us
						</h3>
						<p>Good projects start with reliable and skilled people. At DMV General Contracting Group, our reputation is built on satisfied homeowners. Client satisfaction sits at the core of everything we do.</p>
					</div>
				</div>
			</div>
			<GoogleReviewsWidget />
		</section>
	);
};

export default GoogleReviews;