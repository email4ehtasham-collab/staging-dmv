// Footer/FooterContent.tsx

import Link from "next/link";
import Image from "next/image";

import styles from "../style.module.scss";

import DiscoverdText from "@/assets/discover-text.svg";
import Arrow from "@/assets/arrow.svg";
import Container from "@/components/Common/Container";

export default function FooterOldDesign() {
  return (
    <footer className={`footer-main ${styles['footer']}`}>
      <Container>
        {/* <div className='h-list justify-content-center discover-property-btn'>
            <Link href="/contact-us" className='position-relative'>
                <DiscoverdText />
                <div className='arrow-holder'>
                    <Arrow />
                </div>
            </Link>
        </div> */}
        <div className={styles['menu-main-holder']}>
            <div className={styles["content-detail-holder"]}>
                <div className="h-list justify-content-md-around flex-sm-column flex-md-row align-items-sm-start" data-gap="30" data-gap-md="10">
                    <div className="h-list flex-nowrap" data-gap="15"> 
                        <svg fill="currentcolor" className="text-primary" height="38px" width="38px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.42 489.42">
                            <path d="M46.1,138.368c4.2,2.1,16.1,8.4,29.1-6.2c5.2-7.3,10.4-14.6,16.6-21.8c7.3-8.3,6.2-21.8-2.1-29.1 c-8.3-7.3-21.8-6.2-29.1,2.1s-14.6,17.7-20.8,27C33.7,119.668,36.8,132.068,46.1,138.368z"/>
                            <path d="M249,40.568c19.8,0,39.5,3.1,58.3,9.4c12.6,3.7,21.8-4.2,26-12.5c3.1-11.4-3.1-22.9-13.5-26 c-22.9-7.3-45.8-11.4-69.7-11.4c-11.4,0-20.8,8.3-20.8,19.8S237.6,40.568,249,40.568z"/>
                            <path d="M434.2,167.468c7.3,17.7,11.4,36.4,13.5,55.1c0,0,1.2,23.2,22.9,19.8c21.5-2.8,18.7-23.9,18.7-23.9 c-2.1-22.9-8.3-45.8-16.6-66.6c-5.2-10.4-16.6-15.6-27-11.4C435.2,145.668,430,157.068,434.2,167.468z"/>
                            <path d="M359.3,75.968c16.6,11.4,31.2,25,43.7,40.6c9.3,11.6,25,6.8,28.1,3.1c8.3-7.3,10.4-20.8,3.1-29.1 c-14.6-17.7-32.3-34.3-52-47.9c-9.4-6.2-21.8-4.2-28.1,5.2S349.9,69.668,359.3,75.968z"/>
                            <path d="M134.6,72.768c16.6-10.4,35.4-18.7,54.1-23.9c11.4-3.1,17.7-14.6,14.6-25c-3.1-11.4-14.6-17.7-25-14.6 c-22.9,6.2-44.7,15.6-64.5,28.1c-9.4,6.2-12.5,18.7-6.2,28.1C111.7,71.768,120.5,77.968,134.6,72.768z"/>
                            <path d="M468.5,268.368c-11.4-3.1-21.8,4.2-23.9,15.6c-2.1,9.4-8.5,31.3-8.6,33.4c-27.5,71.5-93.5,121.8-169.3,129.9 c-74.6,7.8-147.2-25.9-189.3-86.5l38.5,8.5c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-81.1-17.7 c-5.2-1-21.4,0-25,15.6l-17.7,82.2c-2.1,10.4,4.2,21.8,15.6,23.9c12.7,1.3,21.8-6.2,25-16.6l6.2-28.2 c46.3,62.7,129.9,109.1,223.7,99c94.6-10.2,174.8-73.9,206-163.3c1-2.6,5.7-24.4,7.3-32.3 C487.3,280.868,480,270.468,468.5,268.368z"/>
                            <path d="M164.6,265.268h95.9c11.4,0,19.8-9.4,20.8-20.8v-142.2c0-11.4-9.4-20.8-20.8-20.8c-11.4,0-20.8,9.4-20.8,20.8v121.4h-75.1 c-11.4,0-20.8,9.4-20.8,20.8S153.1,265.268,164.6,265.268z"/>
                        </svg>
                        <div className="cta-text">
                            <h4>Hours</h4>
                            <span>Available 7 Days a Week</span>
                        </div>
                    </div>
                    <div className="h-list" data-gap="15">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="text-primary">
                            <path d="M36 6.72222C36 22.8919 22.8919 36 6.72222 36C5.9927 36 5.2694 35.9734 4.55325 35.9209C3.73139 35.8606 3.32045 35.8306 2.94639 35.6152C2.63657 35.4369 2.34276 35.1207 2.18747 34.7987C2 34.4099 2 33.9564 2 33.0496V27.728C2 26.9653 2 26.5839 2.12552 26.2571C2.23639 25.9683 2.41648 25.7112 2.64997 25.5084C2.91428 25.2787 3.27266 25.1483 3.9894 24.8877L10.0468 22.685C10.8807 22.3819 11.2976 22.2302 11.6932 22.2559C12.042 22.2785 12.3777 22.3977 12.6629 22.5998C12.9863 22.829 13.2146 23.2094 13.6711 23.9704L15.2222 26.5556C20.2276 24.2887 24.2853 20.2257 26.5556 15.2222L23.9704 13.6711C23.2094 13.2146 22.829 12.9863 22.5998 12.6629C22.3977 12.3777 22.2785 12.042 22.2559 11.6932C22.2302 11.2976 22.3819 10.8807 22.685 10.0468L24.8877 3.9894C25.1483 3.27266 25.2787 2.91428 25.5084 2.64997C25.7112 2.41648 25.9683 2.23639 26.2571 2.12552C26.5839 2 26.9653 2 27.728 2H33.0496C33.9564 2 34.4099 2 34.7987 2.18747C35.1207 2.34276 35.4369 2.63657 35.6152 2.94639C35.8306 3.32047 35.8606 3.73139 35.9209 4.55327C35.9734 5.2694 36 5.9927 36 6.72222Z" stroke="currentcolor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <div className="cta-text">
                            <h4>Call us</h4>
                            <span><Link className='text-decoration-none text-white' href="tel:+1 (240) 730-1292">+1 240-730-1292</Link></span>
                        </div>
                    </div>
                    <div className="h-list" data-gap="15">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-primary">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 5.172C8 4.068 8.896 4 10 4H30C31.104 4 32 4.068 32 5.172V7.67004L20.894 13.224C20.332 13.504 19.668 13.504 19.106 13.224L8 7.67004V5.172ZM4.552 10.418L18.212 17.248C19.338 17.812 20.662 17.812 21.788 17.248L35.448 10.418C35.786 10.25 36 9.90405 36 9.52405V3.172C36 0.961997 34.21 0 32 0H8C5.79 0 4 0.961997 4 3.172V9.52405C4 9.90405 4.214 10.25 4.552 10.418ZM36 33.172C36 34.276 35.104 36 34 36H6C4.896 36 4 34.276 4 33.172V20.2321C4 19.4901 4.782 19.006 5.448 19.338C13.8 23.514 11.234 22.232 18.238 25.734C19.348 26.29 20.656 26.298 21.772 25.754C28.714 22.386 25.796 23.794 34.568 19.582C35.23 19.262 36 19.746 36 20.484V33.172ZM34.212 15.036L20.894 21.696C20.332 21.976 19.668 21.976 19.106 21.696L5.78799 15.036C3.12999 13.708 0 15.642 0 18.614V35.172C0 37.382 1.79 40 4 40H36C38.21 40 40 37.382 40 35.172V18.614C40 15.642 36.87 13.708 34.212 15.036Z" fill="currentcolor"/>
                        </svg>
                        <div className="cta-text">
                            <h4>Email us</h4>
                            <span><Link className='text-decoration-none text-white' href="mailto:support@dmv-gc.com">support@dmv-gc.com</Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`grid justify-content-between align-items-start ${styles['footer-grid']}`} grid-item-width="1/3" data-gap="30">
                <div className=''>
                    <div className='mb-3'>
                        <Link href={'/'} className={styles['logo-holder']}>
                            <Image 
                                src='/images/logo.png' 
                                alt='DMV General Contracting Group â€”Licensed General Contractor North Bethesda MD 240-730-1292' 
                                width={230}
                                height={70}
                                style={{ objectFit: 'contain' }}
                            />
                        </Link>
                    </div>
                    <p className="font-size-14">We are Leaders in the industry. Architects, Engineers, Design/Build, Permit Processing and Project Management. All our services are in-house including: Structural, Electrical, Plumbing and HVAC. </p>
                    <div>
                        <h5 className={`my-2 fw-bold text-content`} >Licensed</h5>
                        <ul className='d-flex list-unstyled p-0 m-0 gap-2'>
                            <li className='font-size-14 d-flex align-items-center'>
                                <span className='text-primary fw-bold' style={{minWidth: '40px'}}>MD:</span> <Link target="_blank" className="text-content" rel="noopener noreferrer" href="/license/MHIC-License.pdf"> MHIC #156178</Link>
                            </li>
                            <li>|</li>
                            <li className='font-size-14 d-flex align-items-center'>
                                <span className='text-primary fw-bold' style={{minWidth: '40px'}}>DC:</span> <Link target="_blank" className="text-content" rel="noopener noreferrer" href="/license/DC-License-2026.pdf">DLCP #410526000209</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid" grid-item-width="1/1" data-gap="20">
                    <h4 className={styles['sec-item-title']} >Contact Us</h4>
                    <div>
                        <h5 className="mb-2 font-size-16 fw-bold">DMV General Contracting Group LLC</h5>
                        <div className='mb-2'>
                            <h6 >Call us</h6>
                            <p className='font-size-14 mb-0'><Link href="tel:+1 (240) 730-1292" className="text-decoration-none text-content">+1 240-730-1292</Link></p>
                        </div>
                        <div className='mb-2'>
                            <h6>Email us</h6>
                            <p className='font-size-14 mb-0'><Link href="mailto:support@dmv-gc.com" className="text-decoration-none text-content">support@dmv-gc.com</Link></p>
                        </div>
                        <div className='mb-2'>
                            <h6>Office Address</h6>
                            <p className='font-size-14 mb-0'>11810 Grand Park Ave. Suite 500 North Bethesda, MD 20852</p>
                        </div>
                    </div>
                </div>
                <div className="grid" grid-item-width="1/1" data-gap="20">
                    <h4 className={styles['sec-item-title']} >Subscribe</h4>
                    <span>Don't forget to subscribe to our Newsletter.</span>
                    <div className='primary-input-holder'>
                        <form action="https://formspree.io/f/mbjnoawe" method="POST">
                            <input className="form-control" name='Newsletter Email' placeholder='Enter Your Email' />
                            <button className={`btn p-0 ${styles['submit-email']}`} type="submit">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.7843 1.22287C24.1593 0.584123 23.2343 0.347873 22.3718 0.597873L2.25928 6.40912C1.34928 6.66162 0.704275 7.38287 0.530525 8.29787C0.353025 9.23037 0.973025 10.4154 1.78303 10.9104L8.07178 14.7504C8.71677 15.1454 9.54928 15.0466 10.083 14.5116L17.2843 7.31037C17.6468 6.93412 18.2468 6.93412 18.6093 7.31037C18.9718 7.67162 18.9718 8.26037 18.6093 8.63537L11.3955 15.8366C10.8605 16.3716 10.7605 17.2016 11.1543 17.8479L14.9968 24.1604C15.4468 24.9091 16.2218 25.3354 17.0718 25.3354C17.1718 25.3354 17.2843 25.3354 17.3843 25.3216C18.3593 25.1979 19.1343 24.5341 19.4218 23.5966L25.3843 3.63537C25.6468 2.78537 25.4093 1.86037 24.7843 1.22287Z" fill="currentcolor"/>
                                    <path d="M9.81424 21.928C10.1792 22.2942 10.1792 22.888 9.81424 23.2542L8.10674 24.9605C7.92424 25.1442 7.68424 25.2355 7.44424 25.2355C7.20424 25.2355 6.96424 25.1442 6.78174 24.9605C6.41549 24.5942 6.41549 24.0017 6.78174 23.6355L8.48799 21.928C8.85424 21.563 9.44799 21.563 9.81424 21.928ZM8.83462 17.193C9.19962 17.5592 9.19962 18.153 8.83462 18.5192L7.12712 20.2255C6.94461 20.4092 6.70461 20.5005 6.46461 20.5005C6.22461 20.5005 5.98462 20.4092 5.80212 20.2255C5.43587 19.8592 5.43587 19.2667 5.80212 18.9005L7.50836 17.193C7.87461 16.828 8.46837 16.828 8.83462 17.193ZM4.13312 15.7025C4.49812 16.0687 4.49812 16.6625 4.13312 17.0287L2.42562 18.735C2.24312 18.9187 2.00312 19.01 1.76312 19.01C1.52312 19.01 1.28312 18.9187 1.10062 18.735C0.734365 18.3687 0.734365 17.7762 1.10062 17.41L2.80687 15.7025C3.17312 15.3375 3.76687 15.3375 4.13312 15.7025Z" fill="currentcolor"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className={`image-holder ${styles['main-image-holder']}`}>
            <Image 
                src='/images/footer-image.svg' 
                alt='dmv buildings' 
                width={1200}
                height={300}
                style={{ width: '100%', height: 'auto' }}
            />
        </div>
        <div className={`h-list justify-content-between ${styles['sub-footer']}`}>
            <div className='h-list' data-gap="10" data-gap-md="50">
                <div>Â© 2025 DMV General Contracting Group LLC. All Rights Reserved.</div>
                <div>Terms & Conditions</div>
            </div>
            <div className='h-list' data-gap="15">
                <Link target='_blank' href="https://www.facebook.com/DMVGCGroupLLC" className={`icon-rounded ${styles['icon-item']}`}>
                    <svg width="13" height="24" viewBox="0 0 13 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.7442 3.98403H13.0002V0.168036C11.9079 0.0544523 10.8104 -0.00162514 9.71221 3.58369e-05C6.44822 3.58369e-05 4.21622 1.99203 4.21622 5.64003V8.78402H0.532227V13.056H4.21622V24H8.63221V13.056H12.3042L12.8562 8.78402H8.63221V6.06003C8.63221 4.80003 8.96821 3.98403 10.7442 3.98403Z" fill="currentcolor"/>
                    </svg>
                </Link>
                <Link target='_blank' href="https://www.linkedin.com/company/dmv-general-contracting-group-llc" className={`icon-rounded ${styles['icon-item']}`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.4701 0.000139831H1.53006C1.33964 -0.00250479 1.15056 0.0323873 0.973624 0.102824C0.796689 0.17326 0.635362 0.27786 0.498856 0.410652C0.36235 0.543443 0.25334 0.701824 0.178051 0.876749C0.102761 1.05167 0.062667 1.23972 0.0600586 1.43014V18.5701C0.062667 18.7606 0.102761 18.9486 0.178051 19.1235C0.25334 19.2985 0.36235 19.4568 0.498856 19.5896C0.635362 19.7224 0.796689 19.827 0.973624 19.8975C1.15056 19.9679 1.33964 20.0028 1.53006 20.0001H18.4701C18.6605 20.0028 18.8496 19.9679 19.0265 19.8975C19.2034 19.827 19.3648 19.7224 19.5013 19.5896C19.6378 19.4568 19.7468 19.2985 19.8221 19.1235C19.8974 18.9486 19.9375 18.7606 19.9401 18.5701V1.43014C19.9375 1.23972 19.8974 1.05167 19.8221 0.876749C19.7468 0.701824 19.6378 0.543443 19.5013 0.410652C19.3648 0.27786 19.2034 0.17326 19.0265 0.102824C18.8496 0.0323873 18.6605 -0.00250479 18.4701 0.000139831ZM6.09006 16.7401H3.09006V7.74014H6.09006V16.7401ZM4.59006 6.48014C4.17632 6.48014 3.77953 6.31578 3.48697 6.02323C3.19442 5.73067 3.03006 5.33388 3.03006 4.92014C3.03006 4.5064 3.19442 4.10961 3.48697 3.81705C3.77953 3.5245 4.17632 3.36014 4.59006 3.36014C4.80975 3.33522 5.03224 3.35699 5.24293 3.42402C5.45363 3.49105 5.6478 3.60183 5.81272 3.7491C5.97763 3.89637 6.10958 4.07682 6.19993 4.27862C6.29028 4.48043 6.33698 4.69904 6.33698 4.92014C6.33698 5.14124 6.29028 5.35985 6.19993 5.56166C6.10958 5.76346 5.97763 5.94391 5.81272 6.09118C5.6478 6.23845 5.45363 6.34923 5.24293 6.41626C5.03224 6.48329 4.80975 6.50505 4.59006 6.48014ZM16.9101 16.7401H13.9101V11.9101C13.9101 10.7001 13.4801 9.91014 12.3901 9.91014C12.0527 9.91261 11.7242 10.0184 11.4489 10.2133C11.1735 10.4082 10.9645 10.6828 10.8501 11.0001C10.7718 11.2352 10.7379 11.4827 10.7501 11.7301V16.7301H7.75006C7.75006 16.7301 7.75006 8.55014 7.75006 7.73014H10.7501V9.00014C11.0226 8.52725 11.419 8.13766 11.8965 7.87334C12.374 7.60902 12.9146 7.47999 13.4601 7.50014C15.4601 7.50014 16.9101 8.79014 16.9101 11.5601V16.7401Z" fill="currentcolor"/>
                    </svg>
                </Link>
                <Link target='_blank' href="https://www.instagram.com/dmvgcgroupllc" className={`icon-rounded ${styles['icon-item']}`}>
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" stroke="currentcolor" strokeWidth="2"/>
                    <circle cx="16.5" cy="7.5" r="1.5" fill="currentcolor"/>
                    <circle cx="12" cy="12" r="3" stroke="currentcolor" strokeWidth="2"/>
                </svg>
                </Link>
            </div>
        </div>
      </Container>
    </footer>
  );
}