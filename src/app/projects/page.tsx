import ResponsiveImage from "@/components/Common/ResponsiveImage";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/resolve";
import NavitemActive from "@/components/Common/NavitemActive";
import ProjectCard from "@/components/generic/project/Card";
import projectData from "@/data/projects/ProjectsData";

import StarsIcon from '@/assets/stars.svg';

import styles from "./style.module.scss";
import ProjectsVideos from "@/components/ProjectsVideos/ProjectsVideos";
import PageSchema from "@/components/Schema/PageSchema";
import { withOgImage } from "@/data/seo/ogImages";

const baseMetadata: Metadata = {
  title: "Home Renovation Projects & Portfolio | DMV General Contracting Group Bethesda MD",
  description: "Browse DMV General Contracting Group's completed home renovation projects in Bethesda MD. Before & after photos of kitchen remodels, bathroom renovations, basement finishing & more.",
  
  alternates: {
    canonical: "/projects",
  },
};

export function generateMetadata(): Promise<Metadata> {
  return pageMetadata("/projects", baseMetadata).then((metadata) => withOgImage(metadata, "/projects"));
}

export default function ProjectsPage() {
    return (
        <main className="page-wrapper">
            <PageSchema path="/projects" />
            <NavitemActive nav="project" />
            <div className={styles['banner-holder']}>
                <div className={`image-holder ${styles["image-holder"]}`}>
                    <ResponsiveImage src="/images/projects-galary/kitchen-after.webp" alt="banner" priority />
                </div>
                <div className={styles['content-data']}>
                    <h1>Our Projects</h1>
                </div>
            </div>

            <section className="section">
                <div className="container">

                    <h2 className="section-title h3">
                        <div className={'stars-icon'}>
                            <StarsIcon />
                        </div>
                        Our Projects
                    </h2>
                    <div className="row">
                        {projectData.slice().reverse().map((project, index) => (
                            <div className="col-12 col-md-6 col-lg-4 gx-4 gy-5" key={index}>
                                <ProjectCard afterImage={project.images[0].imageUrl2} slug={project.slug} id={project.id} category={project.category} description={project.description} cardImage={project.images[0].image} imageAlt={project.imageAlt} />
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <ProjectsVideos />
        </main>
    );
}