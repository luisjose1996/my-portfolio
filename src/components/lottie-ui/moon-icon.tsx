"use client"

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import MoonAnimation from "../../lottie/moon/Moon.json";
import MoonLightAnimation from "../../lottie/moon/MoonLight.json";

const MoonIcon = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const moonIconContainer = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    let lotInstance: any;
    
    const loadLottie = async () => {
      const lot = await import("lottie-web");

      if (!moonIconContainer.current) return;

      // Destroy existing instance if it exists
      if (lottieRef.current) {
        lottieRef.current.destroy();
      }

      lotInstance = lot.default.loadAnimation({
        name: "MoonIcon",
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: resolvedTheme === "light" ? MoonLightAnimation : MoonAnimation,
        container: moonIconContainer.current,
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
      <div
        className={`group/moon h-full w-full flex items-center justify-center`}
      >
        <div className={`h-10 w-10 opacity-50 transition-opacity`} />
      </div>
    );
  }

  return (
    <div
      onMouseEnter={lottieHover}
      onMouseLeave={lottieLeave}
      className={`group/moon h-full w-full flex items-center justify-center`}
    >
      <div
        ref={moonIconContainer}
        className={`h-10 w-10 ${resolvedTheme !== "light" ? "" : "opacity-50"} group-hover/moon:opacity-100 transition-opacity`}
      />
    </div>
  );
};

export default MoonIcon;
