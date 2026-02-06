"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LeadForm } from "../shared/enrollment/lead-form";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const wrapperRef = useRef(null);

  useEffect(() => {
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
      {/* 1. CAMADA DE SOMBRA (WRAPPER)
          Esta div permite que a sombra 'vaze' sem ser cortada pelo overflow.
          Usamos o mesmo drop-shadow agressivo que funcionou antes.
      */}
      <div className="relative mx-auto max-w-7xl drop-shadow-[0_20px_10px_rgba(0,0,0,0.1)] drop-shadow-[0_50px_40px_rgba(0,0,0,0.15)] filter">
        {/* 2. A FOLHA DE PAPEL (CONTEÚDO)
            Aqui mantemos o overflow-hidden e o clip-paper.
        */}
        <div className="relative overflow-hidden bg-white py-24 clip-paper">
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

          {/* O formulário de matrícula */}
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
