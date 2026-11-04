import StarsIcon from '@/assets/stars.svg';

import styles from './style.module.scss';

const OurValues = () => {
  return (
    <section className={`section section-bg-light ${styles['our-values']} `}>
		<div className='container'>
			<div className={styles['content-data-holder']}>
				<div className='grid' data-gap="10">
					<h3 className='section-title'>
						<div className={'stars-icon'}>
							<StarsIcon />
						</div>	
						Core Values
					</h3>
					<h5 className='text-primary fw-bold'>Core Values at DMV General Contracting Group</h5>
					<p className='mb-1'>At our residential contracting company, our work is followed by a clear set of values that shape and determine how we approach every residential remodeling and home renovation project.</p>
					<p>These core principles then influence our aspirations, decisions, and actions, defining the way we treat every home as our own. Also, they showcase our commitment to high-quality craftsmanship and long-term client relationships.</p>
				</div>
				<div className={`grid ${styles['cards-holder']}`} grid-item-width="1/2" data-gap="0">
					<div className={styles['card-item']}>
						<div className='h-list' data-gap="20">
							<div className={`icon-rounded ${styles['icon-rounded']}`}>
								<svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M13.2831 1.54864C13.9182 0.0215481 16.0815 0.0215472 16.7167 1.54864L19.6661 8.64007L27.3219 9.25383C28.9706 9.386 29.6391 11.4434 28.383 12.5194L22.5501 17.5159L24.3321 24.9866C24.7159 26.5954 22.9657 27.867 21.5543 27.0048L14.9999 23.0014L8.44543 27.0048C7.03398 27.867 5.28384 26.5954 5.66759 24.9866L7.44964 17.5159L1.61673 12.5194C0.36066 11.4434 1.02915 9.386 2.67777 9.25383L10.3336 8.64007L13.2831 1.54864Z" fill="currentcolor"/>
								</svg>
							</div>
							<h4>Trust</h4>
						</div>
						<p>Trust is the backbone of the DMV General Contracting Group. We build our client's trust through honest expectations, clear communication, and dependable services. We keep them informed throughout the entire home remodeling process.</p>
					</div>
					<div className={styles['card-item']}>
						<div className='h-list' data-gap="20">
							<div className={`icon-rounded ${styles['icon-rounded']}`}>
								<svg width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.0746 0.974129C16.3458 0.855629 16.6542 0.855629 16.9254 0.974129C22.1937 3.27596 27.1868 6.08983 31.8417 9.35268C32.1786 9.5888 32.3489 9.99817 32.2789 10.4036C32.2089 10.8089 31.9111 11.1375 31.5146 11.2469C30.5443 11.5148 29.5823 11.8032 28.6291 12.1106C24.7601 13.3584 21.0357 14.9284 17.4875 16.7891L17.4829 16.7915C17.322 16.8759 17.1615 16.9609 17.0013 17.0464C16.6885 17.2136 16.3128 17.2136 15.9999 17.0464C15.8382 16.96 15.6762 16.8742 15.5138 16.7891C13.7593 15.869 11.9617 15.0201 10.1249 14.246V13.9291C10.1249 13.743 10.2204 13.5779 10.3682 13.4883C12.5004 12.1966 14.6998 11.0046 16.9599 9.91906C17.4889 9.66499 17.7117 9.03023 17.4576 8.50128C17.2036 7.97234 16.5688 7.7495 16.0398 8.00357C13.7176 9.11902 11.4578 10.3437 9.26708 11.6709C8.62479 12.06 8.193 12.6968 8.05098 13.4103C6.83984 12.9444 5.61278 12.5105 4.37079 12.11C3.41762 11.8026 2.45567 11.5147 1.4854 11.2469C1.08885 11.1375 0.791114 10.8089 0.721101 10.4035C0.651088 9.99815 0.821378 9.58879 1.15825 9.35266C5.81319 6.08981 10.8063 3.27596 16.0746 0.974129Z" fill="currentcolor"/>
									<path d="M18.0028 18.9207C21.4578 17.0746 25.0878 15.5139 28.8614 14.27C29.0516 16.2743 29.173 18.2985 29.2233 20.3402C29.2341 20.7783 28.9749 21.1781 28.5705 21.3469C24.5314 23.0332 20.6895 25.0982 17.0891 27.4975C16.7323 27.7353 16.2675 27.7353 15.9107 27.4975C12.3103 25.0982 8.46841 23.0332 4.42931 21.3469C4.02494 21.1781 3.76569 20.7783 3.77648 20.3402C3.82679 18.2984 3.94823 16.274 4.13843 14.2695C5.44318 14.6996 6.73076 15.1675 7.99988 15.672V17.4718C7.36471 17.8392 6.93738 18.5259 6.93738 19.3125C6.93738 20.0142 7.27749 20.6364 7.80186 21.0234C7.67504 21.5626 7.48736 22.0903 7.2388 22.5956C7.88012 22.8983 8.51595 23.2107 9.1461 23.5326C9.50499 22.8027 9.76522 22.0366 9.92675 21.2543C10.6696 20.9232 11.1874 20.1783 11.1874 19.3125C11.1874 18.5259 10.76 17.8392 10.1249 17.4718V16.5583C11.7844 17.2834 13.4099 18.0719 14.9985 18.9207C15.9371 19.4222 17.0641 19.4222 18.0028 18.9207Z" fill="currentcolor"/>
									<path d="M5.82136 24.5716C6.41513 23.9778 6.88783 23.309 7.2388 22.5956C7.88012 22.8983 8.51595 23.2107 9.1461 23.5326C8.69482 24.4504 8.0872 25.3109 7.32396 26.0742C6.90903 26.4891 6.23629 26.4891 5.82136 26.0742C5.40643 25.6592 5.40643 24.9865 5.82136 24.5716Z" fill="currentcolor"/>
								</svg>
							</div>
							<h4>Excellence</h4>
						</div>
						<p>We are committed to excellence in almost all post-construction aspects. From meticulous planning to final execution, our company strives for the highest standards of quality craftsmanship and long-lasting results.</p>
					</div>
					<div className={styles['card-item']}>
						<div className='h-list' data-gap="20">
							<div className={`icon-rounded ${styles['icon-rounded']}`}>
								<svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M9.6875 5.5625C9.6875 2.62849 12.066 0.25 15 0.25C17.934 0.25 20.3125 2.62849 20.3125 5.5625C20.3125 8.49651 17.934 10.875 15 10.875C12.066 10.875 9.6875 8.49651 9.6875 5.5625Z" fill="currentcolor"/>
									<path fillRule="evenodd" clipRule="evenodd" d="M20.3125 9.8125C20.3125 7.46529 22.2153 5.5625 24.5625 5.5625C26.9097 5.5625 28.8125 7.46529 28.8125 9.8125C28.8125 12.1597 26.9097 14.0625 24.5625 14.0625C22.2153 14.0625 20.3125 12.1597 20.3125 9.8125Z" fill="currentcolor"/>
									<path fillRule="evenodd" clipRule="evenodd" d="M1.1875 9.8125C1.1875 7.46529 3.09029 5.5625 5.4375 5.5625C7.78471 5.5625 9.6875 7.46529 9.6875 9.8125C9.6875 12.1597 7.78471 14.0625 5.4375 14.0625C3.09029 14.0625 1.1875 12.1597 1.1875 9.8125Z" fill="currentcolor"/>
									<path fillRule="evenodd" clipRule="evenodd" d="M6.93897 17.4165C8.6361 14.7629 11.6118 13 15 13C18.3886 13 21.3646 14.7633 23.0617 17.4175C24.2349 19.2524 24.7425 21.4649 24.5044 23.6221C24.4672 23.9592 24.2712 24.2583 23.9771 24.4271C21.3317 25.945 18.2655 26.8125 15 26.8125C11.7345 26.8125 8.66833 25.945 6.02293 24.4271C5.72875 24.2583 5.53284 23.9592 5.49563 23.6221C5.25749 21.4645 5.76533 19.2516 6.93897 17.4165Z" fill="currentcolor"/>
									<path d="M5.1999 16.1927C5.18284 16.2189 5.16589 16.2452 5.14903 16.2716C3.7813 18.4101 3.15536 20.957 3.34751 23.4678C2.48611 23.3369 1.65032 23.1265 0.848106 22.8439L0.685249 22.7866C0.388158 22.682 0.180572 22.4122 0.155587 22.0982L0.141891 21.9261C0.130691 21.7853 0.125 21.6432 0.125 21.5C0.125 18.6456 2.37615 16.317 5.1999 16.1927Z" fill="currentcolor"/>
									<path d="M26.653 23.4677C26.8451 20.9574 26.2195 18.4111 24.8522 16.2728C24.8351 16.246 24.8179 16.2193 24.8006 16.1927C27.6241 16.3173 29.875 18.6458 29.875 21.5C29.875 21.6432 29.8693 21.7853 29.8581 21.9261L29.8444 22.0982C29.8194 22.4122 29.6118 22.682 29.3148 22.7866L29.1519 22.8439C28.3498 23.1264 27.5142 23.3368 26.653 23.4677Z" fill="currentcolor"/>
								</svg>
							</div>
							<h4>Client-Centric</h4>
						</div>
						<p>Your goals are our priority, as we know every home upgradation begins with proper listening. We first take time to understand your needs and vision to plan each home remodeling project beforehand.</p>
					</div>
					<div className={styles['card-item']}>
						<div className='h-list' data-gap="20">
							<div className={`icon-rounded ${styles['icon-rounded']}`}>
								<svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M12.7831 1.54864C13.4182 0.0215481 15.5815 0.0215472 16.2167 1.54864L19.1661 8.64007L26.8219 9.25383C28.4706 9.386 29.1391 11.4434 27.883 12.5194L22.0501 17.5159L23.8321 24.9866C24.2159 26.5954 22.4657 27.867 21.0543 27.0048L14.4999 23.0014L7.94543 27.0048C6.53398 27.867 4.78384 26.5954 5.16759 24.9866L6.94964 17.5159L1.11673 12.5194C-0.13934 11.4434 0.529147 9.386 2.17777 9.25383L9.83357 8.64007L12.7831 1.54864Z" fill="currentcolor"/>
								</svg>
							</div>
							<h4>Our Commitment</h4>
						</div>
						<p>Our commitment goes beyond merely project completion. We stand behind our work even long after the project ends. This way, we stay focused on responsible building practices and home renovation solutions.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
  );
};

export default OurValues;
