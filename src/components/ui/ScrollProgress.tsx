"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollProgress() {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(progressBarRef.current, {
        scaleX: 1, // Começa em 0 e vai até 1 (100%)
        ease: "none",
        scrollTrigger: {
          trigger: "body", // Monitora o corpo da página
          start: "top top", // Começa no topo
          end: "bottom bottom", // Termina no final da página
          scrub: 0.3, // Acompanha o movimento do mouse com um leve suavizado
        },
      });
    },
    { scope: progressBarRef }
  );

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-1 origin-left">
      <div
        ref={progressBarRef}
        className="h-full w-full scale-x-0 bg-gradient-to-r from-[#ff3b30] via-[#004aad] to-[#004aad] shadow-[0_0_8px_rgba(0,74,173,0.4)]"
      />
    </div>
  );
}
