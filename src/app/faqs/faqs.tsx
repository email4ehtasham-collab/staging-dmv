"use client";

import { Accordion } from 'react-bootstrap';

import faq_data from './data';

import StarsIcon from '@/assets/stars.svg';

function Faqs() {

	return (
		<section className='section'>
			<div className='container'>
				<h3 className='section-title mb-5'>
					<div className={'stars-icon'}>
						<StarsIcon />
					</div>
					FAQs
				</h3>
				<Accordion defaultActiveKey={'0'}>
					{faq_data.map((item, index) => (
						<Accordion.Item key={index} eventKey={index.toString()}>
							<Accordion.Header>{item.title}</Accordion.Header>
							<Accordion.Body>{item.desc}</Accordion.Body>
						</Accordion.Item>
					))}
				</Accordion>
			</div>
		</section>
	)
}

export default Faqs;