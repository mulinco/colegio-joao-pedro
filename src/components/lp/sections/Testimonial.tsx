// src/components/lp/sections/Testimonial.tsx
import Image from "next/image";
import { SectionTitle } from "../ui/SectionTitle";

export const Testimonial = () => (
  <section className="relative mx-4 overflow-hidden rounded-[4rem] bg-[#004aad] py-24 text-white shadow-2xl md:mx-6">
    <div className="container mx-auto px-6 text-center">
      <SectionTitle title="Quem vive, aprova" subtitle="Depoimentos" light />
      <div className="mx-auto max-w-4xl">
        <blockquote className="mb-12 text-3xl font-medium italic leading-tight md:text-5xl">
          “Nossa missão não é apenas ensinar conteúdos, mas formar seres humanos
          capazes de transformar o mundo.”
        </blockquote>
        <div className="flex flex-col items-center">
          <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full border-4 border-[#ff3b30] bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=200"
              alt="Diretora"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <p className="font-display text-2xl font-black uppercase tracking-[0.3em] text-[#ff3b30]">
            Ana Paula Souza
          </p>
          <p className="font-display text-[11px] font-black uppercase tracking-[0.4em] opacity-60">
            Diretora Pedagógica
          </p>
        </div>
      </div>
    </div>
  </section>
);
