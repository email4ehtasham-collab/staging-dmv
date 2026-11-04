"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import projectStories from "@/data/our-stories/StoriesData";
import ProjectsVideos from "@/components/ProjectsVideos/ProjectsVideos";

import styles from "./style.module.scss";
import Link from "next/link";

interface StoryPart {
    slug: string;
    title: string;
    thumbnail: string;
    videoUrl: string;
    imgPosition?: string;
    projectLink: string;
}

interface Project {
    id: number;
    slug: string;
    projectName: string;
    projectDesc: string;
    parts: StoryPart[];
    projectLink: string;

}


export default function Stories() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const videoSlug = searchParams.get("video") ?? undefined;

    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    useEffect(() => {
        if (videoSlug) {
            for (const project of projectStories as Project[]) {
                const foundPart = project.parts.find(part => part.slug === videoSlug);
                if (foundPart) {
                    setSelectedVideo(foundPart.videoUrl);
                    break;
                }
            }
        } else {
            setSelectedVideo(null);
        }
    }, [videoSlug]);

    const closeModal = () => {
        setSelectedVideo(null);
        router.push("/our-stories", { scroll: false });
    };

    return (
        <>
            <section className={`section-bg-light ${styles["our-stories-section"]}`}>
                <div className="container">
                    <div className={styles["series-wrapper"]}>
                        {[...projectStories].reverse().map((project, pIndex) => {
                            const featuredPart = project.parts[project.parts.length - 1];

                            return (
                                <div
                                    className={`${styles["series-row"]} ${pIndex % 2 !== 0 ? styles["row-reverse"] : ""}`}
                                    key={project.id}
                                >
                                    <div
                                        className={styles["featured-side"]}
                                        onClick={() => router.push(`/our-stories?video=${featuredPart.slug}`, { scroll: false })}
                                    >
                                        <div className={styles["large-thumb-box"]}>
                                            <Image
                                                src={featuredPart.thumbnail}
                                                alt={featuredPart.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                                                quality={95}
                                                style={{ objectFit: 'cover', objectPosition: featuredPart.imgPosition || 'center' }}
                                                priority={pIndex < 2}
                                            />
                                            <div className={styles["play-badge"]}>
                                                <svg viewBox="0 0 64 64"><polygon points="24,16 24,48 48,32" /></svg>
                                            </div>
                                            {project.projectLink && (
                                                <Link href={project.projectLink} target="_blank" className={styles["project-link-overlay"]} onClick={(e) => e.stopPropagation()} >
                                                <svg width="25" height="25" viewBox="0 0 24 24">
                                                    <path
                                                    d="M7 17L17 7M17 7H8M17 7V16"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    />
                                                </svg>
                                                View Project
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    <div className={styles["content-side"]}>
                                        <div className={styles["info-header"]}>
                                            <span className={styles["tag"]}>Project Series</span>
                                            <h2 className={styles["project-title"]}>{project.projectName}</h2>
                                            <p className={styles["main-desc"]}>{project.projectDesc}</p>
                                        </div>

                                        {project.parts.length > 1 && (
                                            <div className={` mt-4 ${styles["parts-section"]}`}>
                                                <div className={styles["section-label"]}>Explore all parts</div>
                                                <div className={styles["thumbs-strip"]}>
                                                    {project.parts
                                                        .filter((part) => part.slug !== featuredPart.slug)
                                                        .map((part, vIndex) => (
                                                        <div
                                                            key={part.slug}
                                                            className={styles["mini-item"]}
                                                            onClick={() => router.push(`/our-stories?video=${part.slug}`, { scroll: false })}
                                                        >
                                                            <div className={styles["mini-thumb"]}>
                                                                <Image
                                                                    src={part.thumbnail}
                                                                    alt={part.title}
                                                                    fill
                                                                    sizes="250px"
                                                                    quality={90}
                                                                    style={{ objectFit: 'cover' }}
                                                                />
                                                                <div className={styles["play-icon-sm"]}>
                                                                    <svg viewBox="0 0 64 64"><polygon points="24,16 24,48 48,32" /></svg>
                                                                </div>
                                                                <div className={styles["part-num"]}>{vIndex + 1}</div>
                                                            </div>
                                                            <div className={styles["mini-meta"]}>
                                                                <h5>Part {vIndex + 1}</h5>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <ProjectsVideos />
            {selectedVideo && (
                <div className={`modal fade show d-block ${styles["modal-fullscreen"]}`} tabIndex={-1} onClick={closeModal}>
                    <div className="modal-dialog modal-fullscreen" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content bg-dark border-0">
                            <div className="modal-header border-0 pb-0">
                                <button type="button" className="btn-close btn-close-white ms-auto" onClick={closeModal} style={{ zIndex: 100 }}></button>
                            </div>
                            <div className="modal-body p-0">
                                <iframe
                                    src={`${selectedVideo}?autoplay=1`}
                                    title="Video"
                                    allow="autoplay"
                                    allowFullScreen
                                    style={{
                                        width: "100%",
                                        height: "calc(100vh - 60px)",
                                        border: "none"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {selectedVideo && <div className="modal-backdrop fade show"></div>}
        </>
    );
}