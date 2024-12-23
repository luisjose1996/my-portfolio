"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import InboxDownAnimation from "../../lottie/inbox-down/InboxDown.json";
import InboxDownLightAnimation from "../../lottie/inbox-down/InboxDownLight.json";

const Download = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const downloadContainer = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    let lotInstance: any;
    
    const loadLottie = async () => {
      const lot = await import("lottie-web");

      if (!downloadContainer.current) return;

      // Destroy existing instance if it exists
      if (lottieRef.current) {
        lottieRef.current.destroy();
      }

      lotInstance = lot.default.loadAnimation({
        name: "DownloadIcon",
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: resolvedTheme === "light" ? InboxDownLightAnimation : InboxDownAnimation,
        container: downloadContainer.current,
        rendererSettings: {
          preserveAspectRatio: "xMinYMin slice",
        },
      });

      lottieRef.current = lotInstance;
    };

    if (mounted) {
      loadLottie();
    }

    return () => {
      if (lotInstance) {
        lotInstance.destroy();
      }
    };
  }, [mounted, resolvedTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const lottieHover = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  }

  const lottieLeave = () => {
    if (lottieRef.current) {
      lottieRef.current.stop();
    }
  }

  if (!mounted) {
    return (
      <a
        href="/Dhamira-L-Naveda-Resume.pdf"
        download
        className="relative z-10"
      >
        <div className="h-10 w-10 opacity-50 hover:opacity-100 transition-opacity" />
      </a>
    );
  }

  return (
    <a
      href="/Dhamira-L-Naveda-Resume.pdf"
      download
      className="relative z-10"
    >
      <div
        ref={downloadContainer}
        onMouseEnter={lottieHover}
        onMouseLeave={lottieLeave}
        className="h-10 w-10 opacity-50 hover:opacity-100 transition-opacity"
      />
    </a>
  );
};

export default Download;
