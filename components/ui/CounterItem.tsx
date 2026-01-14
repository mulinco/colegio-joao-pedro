"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function CounterItem({ value, suffix = "", label }: CounterProps) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = numberRef.current;
    if (!node) return;

    gsap.fromTo(
      node,
      { innerText: 0 },
      {
        innerText: value,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: node,
          start: "top 90%", // Inicia quando o número entra na visão
        },
      }
    );
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-4xl font-black text-[#ff3b30] md:text-6xl">
        <span ref={numberRef}>0</span>
        {suffix}
      </div>
      <p className="mt-2 text-sm font-bold uppercase tracking-wider text-[#004aad] md:text-base">
        {label}
      </p>
    </div>
  );
}
