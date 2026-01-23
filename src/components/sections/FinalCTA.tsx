"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LeadForm } from "../shared/enrollment/lead-form";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Mantendo sua animação de entrada
    gsap.fromTo(
      wrapperRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="w-full bg-transparent px-4 py-20 md:px-10"
    >
      {/* 2. A FOLHA DE PAPEL */}
      <div className="relative mx-auto max-w-7xl overflow-hidden bg-white py-24 clip-paper paper-shadow">
        {/* Camada: Linhas do Caderno */}
        <div
          className="pointer-events-none absolute inset-0 -z-20"
          style={{
            backgroundImage: `
              linear-gradient(#94a3b8 1px, transparent 1px), 
              linear-gradient(90deg, #ff3b30 1.5px, transparent 1.5px)
            `,
            backgroundSize: "100% 2.8rem, 100% 100%",
            backgroundPosition: "0 3.5rem, 5rem 0",
            opacity: 0.12,
          }}
        />

        {/* Camada: Textura Amassada */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-20 mix-blend-multiply"
          style={{
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/crinkled-paper-pinking.png")',
            backgroundSize: "750px",
          }}
        />
        <LeadForm />
      </div>
    </section>
  );
}
