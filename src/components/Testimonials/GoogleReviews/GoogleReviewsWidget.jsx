"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./widgetstyle.module.scss"; 

export default function GoogleReviewsWidget() {
  const [mounted, setMounted] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMessage = (event) => {
      if (event.data && event.data.type === "RESIZE_GOOGLE_REVIEWS") {
        if (iframeRef.current) {
          iframeRef.current.style.height = `${event.data.height}px`;
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [mounted]);

  if (!mounted) {
    return <div className={styles.container} style={{ minHeight: "200px" }} />;
  }

  // Yahan aapki saari CSS iframe ke andar inject ho rahi hai
  const iframeHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        #widget-wrapper {
          width: 100%;
          display: inline-block;
        }

        /* --- AAPKA CUSTOM STYLE YAHAN HAI --- */
        .sk-ww-google-reviews { max-width: 100% !important; border: 0 !important; padding: 0 !important; }
        .sk-ww-google-reviews .sk-masonry-item:first-child { display: none !important; }
        .sk-ww-google-reviews .sk-image-gallery { display: none !important; }
        .sk-ww-google-reviews .sk-post__owners { display: none !important; }
        .sk_branding {
          display: none !important;
          opacity: 0 !important;
          pointer-events: none !important;
          position: absolute !important;
          height: 0 !important;
          width: 0 !important;
        }
        .sk-ww-google-reviews .sk-popup-overlay { width: 100% !important; }
      </style>
    </head>
    <body>
      <div id="widget-wrapper">
        <div class="sk-ww-google-reviews" data-embed-id="25669158"></div>
      </div>

      <script src="https://widgets.sociablekit.com/google-reviews/widget.js" defer></script>

      <script>
        const wrapper = document.getElementById('widget-wrapper');
        const resizeObserver = new ResizeObserver((entries) => {
          for (let entry of entries) {
            const currentHeight = entry.target.offsetHeight;
            if (currentHeight > 0) {
              window.parent.postMessage({ 
                type: 'RESIZE_GOOGLE_REVIEWS', 
                height: currentHeight 
              }, '*');
            }
          }
        });
        
        if (wrapper) {
          resizeObserver.observe(wrapper);
        }
      </script>
    </body>
    </html>
  `;

  return (
    <div className={styles.container}>
      <iframe
        ref={iframeRef}
        title="Google Reviews"
        srcDoc={iframeHtml}
        scrolling="no"
        style={{
          width: "100%",
          height: "0px", 
          border: "none",
          transition: "height 0.3s ease", 
        }}
      />
    </div>
  );
}