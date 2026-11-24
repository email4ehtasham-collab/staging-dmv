"use client";

import { useState } from "react";
import Image from "next/image";
import VideoModal from "@/components/video-modal";
import styles from "./style.module.scss";

interface AboutVideoModalProps {
    videoUrl: string;
    posterImage: string;
}

const AboutVideoModal = ({ videoUrl, posterImage }: AboutVideoModalProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className={styles["video-poster"]} onClick={() => setIsModalOpen(true)}>
                <Image 
                    src={posterImage} 
                    alt="DMV GC Video" 
                    width={600} 
                    height={400}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />

                <button className={`d-flex align-items-center justify-content-center ${styles["play-button"]}`}>
                    <svg width="50px" viewBox="0 0 64 64">
                        <polygon points="24,16 24,48 48,32" fill="white"></polygon>
                    </svg>
                </button>
            </div>

            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                channel="custom"
                src={videoUrl}
                title="About DMV GC Video"
            />
        </>
    );
};

export default AboutVideoModal;