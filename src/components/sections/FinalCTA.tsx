"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LeadForm } from "../shared/enrollment/lead-form"; // Importando sua função exportada

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Animação de entrada sutil para a seção inteira
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
    // O segredo está aqui: w-full e bg-white sem max-width ou rounded
    <section ref={wrapperRef} className="w-full bg-white">
      {/* O LeadForm entra puro e ocupa o espaço necessário */}
      <LeadForm />
    </section>
  );
}
