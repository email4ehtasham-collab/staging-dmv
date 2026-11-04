import Link from "next/link";
import Data from "@/data/services/ServiceData";
import Card from "@/components/generic/service/Card";
import StarsIcon from '@/assets/stars.svg';
import ServiceSlider from "./ServiceSlider";
import styles from "./style.module.scss";

const OurServices = () => {
	const servicesToDisplay = Data.slice(0, 6);

	return (
		<section className={`section ${styles["featured-services"]}`}>
			<div className="container">

				<div className='h-list justify-content-between flex-lg-nowrap mb-4 ' data-gap="0" data-gap-lg="40">
					<div className='grid' data-gap="10">
						<h3 className='section-title'>
							<div className={'stars-icon'}>
								<StarsIcon />
							</div>
							Our Exclusive Services
						</h3>
						<p>Bring your home improvement ideas to life with a skilled team that values craftsmanship with smart design. From early concept to completion, we redefine post-construction standards with creativity, precision, and close attention to perfection.</p>
						<p>Our team of professional experts offers home renovation services by combining traditional craftsmanship with modern building techniques to create results that stand the test of time, meeting everyday living needs.</p>
					</div>
				</div>

				<div className={`button-holder animated-primary-button mb-3 mb-lg-0 ${styles["animated-primary-button"]}`}>
					<Link href="/services" className="btn button-primary btn-c-rounded">
						View All Services
					</Link>
				</div>

				<div className={styles["service-cards"]}>
				{/* <ServiceSlider> */}
					{servicesToDisplay.map((item, index) => (
						<Card key={index} id={item.id} image={item.image} cover={item.cover} title={item.title} description={item.desc} slug={item.slug} />
					))}
				{/* </ServiceSlider> */}
				</div>

			</div>
		</section>
	);
};

export default OurServices;