import { notFound } from "next/navigation";
import { Metadata } from "next";
import ServiceData from "@/data/services/ServiceData";
import NavitemActive from "@/components/Common/NavitemActive";
import getDynamicComponent from "../getDynamicComponent";

import OurValues from "@/components/OurValues";
import StarsIcon from '@/assets/stars.svg';

import styles from "./style.module.scss";

export function generateStaticParams() {
    return ServiceData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {

  const { slug } = await params;

  const service = ServiceData.find(
    (s) => s.slug === slug
  );

  return {
    title: service?.meta_title || "Service",
    description: service?.meta_description || "",
    
    alternates: {
        canonical: `/service/${slug}`,
    },
  };

}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params; // ✅ REQUIRED in Next 16

    const service = ServiceData.find((s) => s.slug === slug);

    if (!service) return notFound();

    if (service.newService) {
        const DynamicComponent = getDynamicComponent(slug);

        if (DynamicComponent) {
            return <DynamicComponent data={service} />;
        }
    }

    return (
        <main className="page-wrapper">
            <NavitemActive nav="service" />
            <div className="container">
                <h3 className="section-title mb-2">
                    <div className={'stars-icon'}>
                        <StarsIcon />
                    </div>
                    {service.title}
                </h3>

                <p>{service.desc}</p>
                <p>{service.desc_dt_1}</p>

                <div className={`image-holder ${styles["main-image"]}`}>
                    <img
                    src={`.${service.image}`}
                    alt={service.title}
                    />
                </div>

                <h3 className="mt-5 mb-4">
                    {service.points_main_title}
                </h3>

                {service.points_items?.map((item, index) => (
                    <div className="desc-item" key={index}>
                    <h5 className={styles["desc-item--title"]}>
                        {item.point_title}
                    </h5>
                    <p className="mb-4">
                        {item.point_desc}
                    </p>
                    </div>
                ))}
                <p>{service.last_desc}</p>

            </div>
            <OurValues />
        </main>
    );
}