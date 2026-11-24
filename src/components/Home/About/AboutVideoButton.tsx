"use client";

import { useState } from "react";
import VideoModal from "@/components/video-modal";
import styles from "./about.module.scss";

const VIDEO_ID = "V3Kbl8qa8AE";

function PlayIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false" className={styles.playIcon}>
      <path d="M4 2.6v6.8L9.4 6 4 2.6Z" fill="currentColor" />
    </svg>
  );
}

export default function AboutVideoButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={styles.videoButton}
        aria-label="Play the 2 minute 15 second company introduction video"
        aria-haspopup="dialog"
        onClick={() => setIsOpen(true)}
      >
        <span className={styles.mediaContent}>
          <span className={styles.mediaLabel}>Company Introduction</span>
          <span className={styles.mediaTitle}>Meet Our Founders &amp; Engineering Leadership</span>
          <span className={styles.playLink}>
            <span className={styles.playIconWrap}>
              <PlayIcon />
            </span>
            <span>2:15 MIN</span>
          </span>
        </span>
      </button>

      <VideoModal isOpen={isOpen} onClose={() => setIsOpen(false)} channel="youtube" videoId={VIDEO_ID} />
    </>
  );
}
