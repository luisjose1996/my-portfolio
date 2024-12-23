"use client"

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import EyeAnimation from "../../lottie/eye/Eye.json";
import EyeLightAnimation from "../../lottie/eye/EyeLight.json";

const SendIcon = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const sendIconContainer = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    let lotInstance: any;
    
    const loadLottie = async () => {
      const lot = await import("lottie-web");

      if (!sendIconContainer.current) return;

      // Destroy existing instance if it exists
      if (lottieRef.current) {
        lottieRef.current.destroy();
      }

      lotInstance = lot.default.loadAnimation({
        name: "SendIcon",
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: resolvedTheme === "light" ? EyeLightAnimation : EyeAnimation,
        container: sendIconContainer.current,
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
        target="_blank"
        rel="noreferrer noopener"
        className="relative z-10"
      >
        <div className="h-10 w-10 opacity-50 hover:opacity-100 transition-opacity" />
      </a>
    );
  }

  return (
    <a
      href="/Dhamira-L-Naveda-Resume.pdf"
      target="_blank"
      rel="noreferrer noopener"
      className="relative z-10"
    >
      <div
        ref={sendIconContainer}
        onMouseEnter={lottieHover}
        onMouseLeave={lottieLeave}
        className="h-10 w-10 opacity-50 hover:opacity-100 transition-opacity"
      />
    </a>
  );
};

export default SendIcon;
