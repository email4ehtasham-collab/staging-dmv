"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import VideoModal from "@/components/video-modal";
import ProjectsVideosSlider from "./ProjectsVideosSlider";
import { VideoItem } from "./types";

export default function ProjectsVideosContent({ videos }: { videos: VideoItem[] }) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleClose = () => setSelectedVideo(null);

  return (
    <>
      <ProjectsVideosSlider>
        {videos.slice().reverse().map((video, index) => (
          <div className="project-video-holder" key={index}>
            <div
              className="video-thumbnail"
              onClick={() => setSelectedVideo(video.videoUrl)}
            >
              <Image src={video.thumbnail} alt={video.title} fill sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 25vw" style={{ objectFit: "cover" }} />
              <div className="play-button">
                <svg viewBox="0 0 64 64">
                  <polygon points="24,16 24,48 48,32" />
                </svg>
              </div>
              {video.projectLink && (
                <Link
                  href={video.projectLink}
                  target="_blank"
                  className="project-link-overlay"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24">
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
        ))}
      </ProjectsVideosSlider>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={handleClose}
        channel="custom"
        src={selectedVideo ?? ""}
        title="Video"
      />
    </>
  );
}
