"use client";

import CommonModal from "@/components/Common/Modal";
import styles from "./video-modal.module.scss";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
} & (
  | {
      channel: "youtube";
      videoId: string;
    }
  | {
      channel?: "custom";
      src: string;
    }
);

export default function VideoModal({ isOpen, onClose, title = "Video", ...props }: PropsType) {
  let src = "";

  if (props.channel === "youtube") {
    src = `https://www.youtube.com/embed/${props.videoId}`;
  } else {
    src = props.src;
  }

  const autoplaySrc = src ? `${src}${src.includes("?") ? "&" : "?"}autoplay=1` : "";

  return (
    <CommonModal
      open={isOpen}
      onClose={onClose}
      fullscreen
      ariaLabel={title}
      contentClassName={styles.content}
      bodyClassName={styles.body}
    >
      <div className={styles.frame}>
        {isOpen && autoplaySrc ? (
          <iframe
            src={autoplaySrc}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className={styles.iframe}
          />
        ) : null}
      </div>
    </CommonModal>
  );
}
