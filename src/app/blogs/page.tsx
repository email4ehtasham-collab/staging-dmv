import { Metadata } from "next";
import BlogCard from "@/components/generic/blog/Card";
import blogData from "@/data/blogs/BlogsData";
import NavitemActive from "@/components/Common/NavitemActive";

import styles from "./style.module.scss";

export const metadata: Metadata = {
  title: "Discover Our Construction Blogs for Modern Building Ideas",
  description: "Read up-to-date construction blogs covering modern designs, remodeling ideas, design trends, and practical real-world insights to plan smarter building projects.",

    alternates: {
        canonical: `/blogs`,
    },
};

export default function ProjectsPage() {
    return (
        <main className="page-wrapper">
            <NavitemActive nav="blog" />
            <div className={styles['banner-holder']}>
                <div className={`image-holder ${styles["image-holder"]}`}>
                    <img src="/images/blogs-page-bg.jpg" alt="banner" />
                </div>
                <div className={styles['content-data']}>
                    <h1>Blogs</h1>
                </div>
            </div>
            <section className="section">
                <div className="container">

                    <div className='grid' grid-item-width="1/1" data-gap="40">
                        {blogData.slice().reverse().map((blog, index) => (
                            <BlogCard key={blog.id} image={blog.image} title={blog.title} description={blog.desc} slug={blog.slug}  />
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}