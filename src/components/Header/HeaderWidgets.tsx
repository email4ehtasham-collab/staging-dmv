"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ChatIcon from "/public/images/chat-icon.svg";
import GoogleCalendarButton from "@/components/GoogleCalendarButton/GoogleCalendarButton";
import { openEstimateScheduler } from "@/components/GoogleCalendarButton/openEstimateScheduler";
import styles from "./header-widgets.module.scss";

const SupportChatPopup = dynamic(() => import("@/components/chat/SupportChatPopup"), { ssr: false });

export default function HeaderWidgets() {
  const [isChatModuleActive, setIsChatModuleActive] = useState(false);

  useEffect(() => {
    const handleEstimateClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const trigger = target?.closest<HTMLElement>("[data-estimate-trigger]");
      if (trigger) {
        event.preventDefault();
        openEstimateScheduler();
      }
    };

    document.addEventListener("click", handleEstimateClick, true);
    return () => document.removeEventListener("click", handleEstimateClick, true);
  }, []);

  return (
    <>
      <GoogleCalendarButton />

      <div className={styles.chatHolder}>
        <SupportChatPopup isActive={isChatModuleActive} onClose={() => setIsChatModuleActive(false)} />

        <button
          type="button"
          className={styles.chatButton}
          aria-label="Open support chat"
          onClick={() => setIsChatModuleActive((current) => !current)}
        >
          <span className={styles.arrowHolder}>
            <ChatIcon />
          </span>
          <span className={styles.content}>Chat with us!</span>
        </button>
      </div>
    </>
  );
}