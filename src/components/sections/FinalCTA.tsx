"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { scale: 0.95, opacity: 0, y: 30 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <section className="px-6 py-24">
      {" "}
      {/* Removida a cor de fundo aqui */}
      <div
        ref={containerRef}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-[#004aad] p-12 text-center text-white shadow-2xl md:p-24"
      >
        {/* Detalhe decorativo sutil com o Vermelho do Colégio */}
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[#ff3b30] opacity-10 blur-3xl" />

        <h2 className="mb-8 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          O futuro do seu filho começa com a escolha certa hoje.
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-lg font-light text-white/90 md:text-2xl">
          Venha conhecer de perto nossa infraestrutura e conversar com nossa
          equipe pedagógica. Estamos de portas abertas para receber sua família.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/00000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center rounded-full bg-[#fffcf5] px-10 py-5 font-bold text-[#004aad] shadow-xl transition-all duration-300 hover:bg-[#ff3b30] hover:text-white active:scale-95"
          >
            <span className="relative z-10">Agendar Visita Guiada</span>
          </a>
        </div>
      </div>
    </section>
  );
}
