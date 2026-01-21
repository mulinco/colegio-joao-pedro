"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FadeIn from "@/components/ui/FadeIn";

gsap.registerPlugin(ScrollTrigger);

export default function DirecaoQuote() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
        },
      }
    );
  }, []);

  return (
    <section className="relative z-10 my-16 px-6">
      <FadeIn>
        {/* Reduzi o max-width para 3xl e o padding drasticamente */}
        <div
          ref={sectionRef}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] bg-[#004aad] p-8 text-center shadow-xl md:p-12"
        >
          {/* Círculo de fundo ainda mais discreto */}
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/5 blur-2xl" />

          {/* Citação menor e com menos margem */}
          <blockquote className="relative z-10 mb-8 text-lg font-medium italic leading-relaxed tracking-tight text-white md:text-xl">
            “Nossa missão não é apenas ensinar conteúdos, mas formar seres
            humanos capazes de transformar o mundo ao seu redor com ética,
            inteligência e empatia.”
          </blockquote>

          {/* Assinatura compacta */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-3">
            {/* Foto menor (h-12 w-12) */}
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1887&auto=format&fit=crop"
                alt="Foto da Diretora Pedagógica"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center">
              {/* Texto da assinatura muito mais sutil */}
              <h4 className="font-display text-sm font-bold uppercase tracking-widest text-[#ff3b30]">
                — Ana Paula Souza
              </h4>
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/50">
                Diretora Pedagógica
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
