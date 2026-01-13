"use client";

import { useEffect, useRef } from "react";
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

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Seleciona todas as letras (spans) dentro do container
      const chars = containerRef.current.querySelectorAll(".char");

      gsap.fromTo(
        chars,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.03,
          delay: delay / 1000, // converte ms para segundos
          ease: "power3.out",
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="char inline-block"
          style={{ opacity: 0, whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
