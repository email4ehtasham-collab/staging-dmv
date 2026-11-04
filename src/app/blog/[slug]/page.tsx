import { Metadata } from "next";
import { notFound } from "next/navigation";

import blogRoutes from "./blogRoutes";
import blogsData from "@/data/blogs/BlogsData";
import NavitemActive from "@/components/Common/NavitemActive";

import StarsIcon from '@/assets/stars.svg';

import "./style.scss";

export function generateStaticParams() {
  const slugs = new Set<string>([
    ...blogsData.map((blog) => blog.slug),
    ...Object.keys(blogRoutes),
  ]);

  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {

  const { slug } = await params;

  const blog = blogsData.find((b) => b.slug === slug);

  return {
    title: blog?.meta_title || "Blog",
    description: blog?.meta_description || "",

    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogDetailPage(
    { params }: { params: Promise<{ slug: string }> }
    ) {
    const { slug } = await params;
    const BlogComponent = blogRoutes[slug];
    const tService = blogsData.find((serv) => serv.slug === slug);

    if (BlogComponent) {
        return (
            <>
                <NavitemActive nav="blog" />
                <BlogComponent />
            </>
        );
    }

    if (tService) {
        return (
            <main className="page-wrapper blog-detail-page" >
                <NavitemActive nav="blog" />
                <section className="page-content">
                    <div className="container">

                        <h1 className="section-title mb-2">
                            <div className={'stars-icon'}>
                                <StarsIcon />
                            </div>
                            {tService.title}
                        </h1>

                        {tService.desc &&
                            tService.desc
                                .replace(/<\/?br\s*\/?>/gi, "\n")
                                .split("\n")
                                .map((line, i) =>
                                    line.trim() ? <p key={i}>{line.trim()}</p> : null
                                )
                        }

                        {tService.image && (
                            <div className="image-holder main-image">
                                <img
                                    src={`.${tService.image}`}
                                    alt={tService.title}
                                />
                            </div>
                        )}

                        {tService.main_points?.map((item, idx) => {
                            const lines = item.point_desc
                                .replace(/<br\s*\/?>/g, "\n")
                                .split("\n");

                            let listItems = [];

                            return (
                                <div className="desc-item" key={idx}>
                                    <h4 className="fw-bold mb-3">
                                        {item.point_title}
                                    </h4>

                                    <div className="description-holder mb-4">
                                        {lines.map((line, index) => {
                                            line = line.trim();

                                            if (line === "") return <br key={index} />;
                                            return <p key={index}>{line}</p>;
                                        })}

                                        {listItems.length > 0 && (
                                            <ul className="list-items">{listItems}</ul>
                                        )}
                                    </div>
                                </div>
                            );
                        })}

                        {tService.content && (
                            <div
                                className="blog-html-content"
                                dangerouslySetInnerHTML={{ __html: tService.content }}
                            />
                        )}

                        {tService.points_items?.map((item, idx) => {
                            const lines = item.point_desc
                                .replace(/<br\s*\/?>/g, "\n")
                                .split("\n");

                            let listItems = [];

                            return (
                                <div className="desc-item" key={idx}>
                                    <h5 className="desc-item--title">
                                        {item.point_title}
                                    </h5>

                                    <div className="description-holder mb-4">
                                        {lines.map((line, index) => {
                                            line = line.trim();

                                            if (line === "\\ul") {
                                                listItems = [];
                                                return null;
                                            }

                                            if (line.startsWith("-")) {
                                                listItems.push(
                                                    <li key={index}>
                                                        {line.slice(1).trim()}
                                                    </li>
                                                );
                                                return null;
                                            }

                                            if (line === "") return <br key={index} />;
                                            return <p key={index}>{line}</p>;
                                        })}

                                        {listItems.length > 0 && (
                                            <ul className="list-items">
                                                {listItems}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            );
                        })}

                        {tService.last_desc && <p>{tService.last_desc}</p>}

                    </div>
                </section>
            </main>
        );
    }

    // 3. Not found
    return notFound();
}