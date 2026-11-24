"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import VideoModal from "@/components/video-modal";
import styles from "./style.module.scss";

interface TestimonialVideoGridProps {
    videos: any[];
    initialVideoId?: string;
}

const TestimonialVideoGrid = ({ videos, initialVideoId }: TestimonialVideoGridProps) => {
    const router = useRouter();
    
    // Initialize state from prop for SSR consistency
    const [selectedVideo, setSelectedVideo] = useState<string | null>(() => {
        if (initialVideoId) {
            const foundVideo = videos.find((v) => String(v.slug) === initialVideoId);
            return foundVideo ? foundVideo.videoUrl : null;
        }
        return null;
    });

    useEffect(() => {
        if (initialVideoId) {
            const foundVideo = videos.find((v) => String(v.slug) === initialVideoId);
            if (foundVideo) {
                setSelectedVideo(foundVideo.videoUrl);
            } else {
                setSelectedVideo(null);
            }
        } else {
            setSelectedVideo(null);
        }
    }, [initialVideoId, videos]);

    const handleOpen = (slug: string) => {
        const params = new URLSearchParams(window.location.search);
        params.set("testimonial_video", slug);
        router.push(`?${params.toString()}`, { scroll: false });
    };

    const handleClose = () => {
        setSelectedVideo(null);
        const params = new URLSearchParams(window.location.search);
        params.delete("testimonial_video");
        router.push(
            params.toString() ? `?${params.toString()}` : window.location.pathname,
            { scroll: false }
        );
    };

    return (
        <>
            <div className={styles["videos-grid"]}>
                {videos.map((video) => (
                    <div className={styles["project-video-holder"]} key={video.id} >
                        <div className={styles["video-thumbnail"]}>
                            <Image 
                                src={video.thumbnail} 
                                alt={`testimonial ${video.imageAlt || ''}`}
                                width={400}
                                height={250}
                                style={{ objectFit: 'cover' }}
                            />
                            <div className={styles["play-button"]} onClick={() => handleOpen(video.slug)}>
                                <svg viewBox="0 0 64 64">
                                    <polygon points="24,16 24,48 48,32" />
                                </svg>
                            </div>

                            {video.projectLink && (
                                <Link href={video.projectLink} target="_blank" className="font-weight-bold mt-2 d-inline-block" >
                                    <span className={styles["go-to-project"]}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" >
                                            <path
                                                d="M7 17L17 7M17 7H8M17 7V16"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <VideoModal
                isOpen={!!selectedVideo}
                onClose={handleClose}
                channel="custom"
                src={selectedVideo ?? ""}
                title="Testimonial Video"
            />
        </>
    );
};

export default TestimonialVideoGrid;