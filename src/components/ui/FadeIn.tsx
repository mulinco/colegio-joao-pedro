"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string; // ADICIONAMOS ISSO AQUI
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  distance = 50,
  className = "", // E ISSO AQUI
}: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const offsets = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
      };

      gsap.fromTo(
        elementRef.current,
        { opacity: 0, ...offsets[direction] },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: duration,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: elementRef }
  );

  return (
    /* AGORA O CLASSNAME É APLICADO À DIV */
    <div ref={elementRef} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
