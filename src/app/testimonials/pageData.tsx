"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import VideoModal from "@/components/video-modal";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import testimonialVideos from "@/data/testimonials/testimonialsVideosData";

import StarsIcon from '@/assets/stars.svg';

const StyledCom = styled.div`

    .testimonial-section {
        padding: 60px 0;

        .video-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .video-thumbnail {
            position: relative;
            cursor: pointer;
			border-radius: 10px;
			overflow: hidden;
			height: 200px;


            img {
                width: 100%;
				height: 100%;
                object-fit: cover;
            }

            .play-button {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                border-radius: 50px;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
				color: black;
				padding: 5px 10px;
            }

            .play-button svg {
                fill: var(--secondary-color-dark);
                width: 40px;
                height: 40px;
            }
        }
		.review-video-holder  {
			grid-column: 1 / -1;

			// > h3{display: none}
			
			.video-thumbnail{
				height: 500px;
			}
		}
			.project-video-holder > a{color: var(--primary-color); display: block; margin-top: 10px; font-weight: 700}
			.project-video-holder > a:hover{color: var(--secondary-color-dark);}
		// .review-video-holder div:last-of-type{background: red;}

    }
`;


export default function PageData() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const router = useRouter();
    const searchParams = useSearchParams();
    const videoId = searchParams.get("video") ?? undefined;

    useEffect(() => {
        if (videoId) {
            const foundVideo = testimonialVideos.find(
                (v) => String(v.slug) === videoId
            );

            if (foundVideo) {
                setSelectedVideo(foundVideo.videoUrl);
            }
        } else {
            setSelectedVideo(null);
        }
    }, [videoId]);

    const handleClose = () => {
        setSelectedVideo(null);
        router.push("/testimonials", { scroll: false });
    };

    return (
        <StyledCom>
            <section className="section section-bg-light testimonial-section">
                <div className="container">
                    <div className="video-grid">
                        {testimonialVideos .slice() .reverse() .map((video, index) => video.video_type === "review" ? (
                        <div className="review-video-holder" key={index}>
                            <div className="video-thumbnail" onClick={()=>
                                router.push( `/testimonials?video=${video.slug}`, { scroll: false } ) } >
                                <img src={video.thumbnail} alt="" />
                                <div className="play-button">
                                    <svg viewBox="0 0 64 64">
                                        <polygon points="24,16 24,48 48,32" />
                                    </svg>
                                    <div className="pe-3">
                                        Watch Video
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="h-list align-items-center mb-3 gap-3">
                                    <h4>{video.title}</h4>

                                    <Link href={ video.projectLink || "#" } className="d-flex align-items-center fw-bold font-size-16 text-primary"> {video.projectLink ? "View Project" : ""}
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </Link>
                                </div>

                                <p>{video.desc}</p>
                            </div>

                            {video.bottom_title ? (
                            <h3 className="section-title mt-5">
                                <div className={'stars-icon'}>
                                    <StarsIcon />
                                </div>    
                                Our Recent Projects
                            </h3>
                        ) : null}
                        </div>
                        ) : (
                        <div className="project-video-holder" key={index}>
                            <div className="video-thumbnail" onClick={()=>
                                router.push( `/testimonials?video=${video.slug}`, { scroll: false } ) } >
                                <img src={video.thumbnail} alt="" />
                                <div className="play-button">
                                    <svg viewBox="0 0 64 64">
                                        <polygon points="24,16 24,48 48,32" />
                                    </svg>
                                </div>
                            </div>

                            <Link href={ video.projectLink || "#" } className="font-weight-bold mt-2"> {video.title}
                            </Link>
                        </div>
                        ) )}
                    </div>
                </div>
            </section>

            <VideoModal
                isOpen={!!selectedVideo}
                onClose={handleClose}
                channel="custom"
                src={selectedVideo ?? ""}
                title="Video"
            />
        </StyledCom>
    );
}