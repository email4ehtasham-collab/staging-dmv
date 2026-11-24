import React from 'react'
import Link from 'next/link';

import styles from './style.module.scss';

function StartJourney() {
    return (
        <section className={`section ${styles['start-journey']}`}>
            <div className={`container ${styles['container']}`}>
                <h2 className='fw-bold text-center'>Building a Timeless Legacy Through Innovation and Craftsmanship</h2>
                <p className='text-center'> Our commitment lies in building a timeless legacy that combines <span className='fw-bold'>innovative construction practices</span> with classic craftsmanship, so that each project stands the test of time.</p>
                <div className='text-center'>
                    <Link className={`btn btn-light btn-c-rounded text-primary`} href="/contact-us" >Visit Us</Link>
                </div>
            </div>
        </section>
    )
}

export default StartJourney;