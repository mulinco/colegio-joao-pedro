"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const words = text.split(" ");

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const wordSpans = containerRef.current.querySelectorAll(".word");

      gsap.fromTo(
        wordSpans,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          delay: delay / 1000,
          ease: "power3.out",
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className="word mr-2 inline-block whitespace-nowrap"
          style={{ opacity: 0 }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
