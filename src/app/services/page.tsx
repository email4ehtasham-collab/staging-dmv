import NavitemActive from "@/components/Common/NavitemActive";
import ServiceCard from "@/components/generic/service/Card";
import servicesData from "@/data/services/ServiceData";
import { Metadata } from "next";

import StarsIcon from '@/assets/stars.svg';

import styles from "./style.module.scss";

export const metadata: Metadata = {
  title: "Home Renovation Services | General Contractor Bethesda MD | DMV-GC",
  description: "Explore DMV General Contracting Group's full range of home renovation services — kitchen, bathroom, basement, roofing, electrical & more across Maryland & Washington DC",
  
  alternates: {
    canonical: "services",
  },
};


export default function ServicesPage() {
    return (
        <main className="page-wrapper">
            <NavitemActive nav="service" />
            <div className={styles['banner-holder']}>
                <div className={`image-holder ${styles["image-holder"]}`}>
                    <img src="/images/services-banner.jpg" alt="banner" />
                </div>
                <div className={styles['content-data']}>
                    <h1>Our Services</h1>
                </div>
            </div>

            <section className="section">
                <div className="container">

                    <h3 className="section-title">
                        <div className={'stars-icon'}>
                            <StarsIcon />
                        </div>
                        Our Services
                    </h3>
                    <div className="row">
                        {servicesData.map((service, index) => (
                            <div className="col-12 col-md-6 col-lg-4 gx-4 gy-5" key={index}>
                                <ServiceCard image={service.image} cover={service.cover} title={service.title} description={service.desc} slug={service.slug} id={service.id} />
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}