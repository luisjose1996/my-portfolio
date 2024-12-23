"use client"

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import SunAnimation from "../../lottie/sun/Sun.json";
import SunLightAnimation from "../../lottie/sun/SunLight.json";

const SunIcon = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const sunIconContainer = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<any>(null);

  useEffect(() => {
    let lotInstance: any;
    
    const loadLottie = async () => {
      const lot = await import("lottie-web");

      if (!sunIconContainer.current) return;

      // Destroy existing instance if it exists
      if (lottieRef.current) {
        lottieRef.current.destroy();
      }

      lotInstance = lot.default.loadAnimation({
        name: "SunIcon",
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: resolvedTheme === "light" ? SunAnimation : SunLightAnimation,
        container: sunIconContainer.current,
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
        className={`group/sun h-full w-full flex items-center justify-center`}
      >
        <div className={`h-10 w-10 opacity-50 transition-opacity`} />
      </div>
    );
  }

  return (
    <div
      onMouseEnter={lottieHover}
      onMouseLeave={lottieLeave}
      className={`group/sun h-full w-full flex items-center justify-center`}
    >
      <div
        ref={sunIconContainer}
        className={`h-10 w-10 ${resolvedTheme === "light" ? "" : "opacity-50"} group-hover/sun:opacity-100 transition-opacity`}
      />
    </div>
  );
};

export default SunIcon;
