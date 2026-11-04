import Link from 'next/link';
import Image from 'next/image';
import StarsIcon from '@/assets/stars.svg';
import styles from './style.module.scss';
import Handicon from '@/assets/hand-cursor-icon.svg'
import BeforeAfterSlider from './BeforeAfterSlider';

const PROJECTS_DATA = [
	{
		id: "8",
		title: "Bathroom Remodeling | Glover Park, Washington, D.C",
		firstImage: {
			imageUrl: '/images/before-after/primary-bathroom-entry-powder-room/after.jpg',
			alt: "After result"
		},
		secondImage: {
			imageUrl: '/images/before-after/primary-bathroom-entry-powder-room/before.jpg',
			alt: "Before result"
		}
	},
	{
		id: "1",
		title: "Chaplain St NW",
		firstImage: {
			imageUrl: '/images/before-after/chaplain-st-nw/after.jpg',
			alt: "After cleaning result"
		},
		secondImage: {
			imageUrl: '/images/before-after/chaplain-st-nw/before.jpg',
			alt: "Before cleaning result"
		}
	},
	{
		id: "7",
		title: "townhouse-renovation",
		firstImage: {
			imageUrl: '/images/before-after/townhouse-renovation-silver-spring/after.jpg',
			alt: "Townhouse Renovation After "
		},
		secondImage: {
			imageUrl: '/images/before-after/townhouse-renovation-silver-spring/before.jpg',
			alt: "Townhouse Renovation Before"
		}
	},
	{
		id: "2",
		title: "ADU Northwest",
		firstImage: {
			imageUrl: '/images/before-after/adu-northwest/after.jpg',
			alt: "After ADU"
		},
		secondImage: {
			imageUrl: '/images/before-after/adu-northwest/before.jpg',
			alt: "Before ADU"
		}
	},
	{
		id: "3",
		title: "kitchen remodel",
		firstImage: {
			imageUrl: '/images/before-after/julia-mike/after.jpg',
			alt: "kitchen"
		},
		secondImage: {
			imageUrl: '/images/before-after/julia-mike/before.jpg',
			alt: "kitchen"
		}
	},
	{
		id: "4",
		title: "kitchen remodel",
		firstImage: {
			imageUrl: '/images/before-after/global-park/after.jpg',
			alt: "After kitchen"
		},
		secondImage: {
			imageUrl: '/images/before-after/global-park/before.jpg',
			alt: "Before kitchen"
		}
	},
	{
		id: "5",
		title: "ADU",
		firstImage: {
			imageUrl: '/images/before-after/calvert-st-kitchen/after.jpg',
			alt: "After ADU"
		},
		secondImage: {
			imageUrl: '/images/before-after/calvert-st-kitchen/before.jpg',
			alt: "Before ADU"
		}
	},
	{
		id: "6",
		title: "ADU",
		firstImage: {
			imageUrl: '/images/before-after/robert-bean/after.jpg',
			alt: "After ADU"
		},
		secondImage: {
			imageUrl: '/images/before-after/robert-bean/before.jpg',
			alt: "Before ADU"
		}
	}
];

const FeaturedProjects = ({ activeProjectId = "0" }: { activeProjectId?: string }) => {
	const activeProject = PROJECTS_DATA.find(p => p.id === activeProjectId) || PROJECTS_DATA[0];

	return (
		<section className={`section ${styles['featured-projects-section']}`}>
			<div className='container'>
				<div className='h-list justify-content-between flex-lg-nowrap mb-4 ' data-gap="0" data-gap-lg="40">
					<div className='grid' data-gap="10">
						<h3 className='section-title'>
							<div className={'stars-icon'}>
                                <StarsIcon />
                            </div>
							Featured Projects
						</h3>
						<p>Explore our “Successful Projects” to see how we turn ideas into well-finished living spaces. From initial concept to final touches, our portfolio displays our years of experience in home renovations and remodeling with a legacy of excellence in construction. Every home we work on is shaped around real-life needs, aesthetic appeal, practical design, innovation, and lasting appeal.</p>
					</div>
					
				</div>
				<div className={`button-holder animated-primary-button mb-3 mb-md-4 ${styles["animated-primary-button"] }` }>
					<Link href={`projects`} className={`btn button-primary btn-c-rounded`} >
						View All Projects
						<Handicon />
					</Link>
				</div>
				
				<div className={styles['featured-content-wrapper']}>
					<div className={styles['slider-column']}>
						<BeforeAfterSlider 
							key={activeProject.id} 
							firstImage={activeProject.firstImage} 
							secondImage={activeProject.secondImage} 
						/>
					</div>
					<div className={styles['thumbnails-column']}>
						{PROJECTS_DATA.map((project) => (
							// <Link  href={`javascript:void(0)`}
							// 	className={`${styles['thumbnail-item']} ${activeProject.id === project.id ? styles['active'] : ''}`}
							// >
							<Link 
								key={project.id} 
								href={`?project_id=${project.id}`}
								scroll={false}
								className={`${styles['thumbnail-item']} ${activeProject.id === project.id ? styles['active'] : ''}`}
							>
								<div className={styles['thumbnail-image-wrapper']}>
								<Image 
									src={project.firstImage.imageUrl} 
									alt={project.title} 
									fill 
									sizes="150px"
									loading="lazy"
									style={{ objectFit: 'cover' }}
								/>
									<div className={styles['thumbnail-overlay']}>
										<span>View</span>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProjects;