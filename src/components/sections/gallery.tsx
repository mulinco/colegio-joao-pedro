"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const galleryItems = [
  {
    title: "Biblioteca Interativa",
    category: "Conhecimento",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1600&auto=format&fit=crop",
    color: "bg-[#004aad]",
  },
  {
    title: "Quadra Poliesportiva",
    category: "Esportes",
    image:
      "https://images.unsplash.com/photo-1544999214-cb3cb61e8499?q=80&w=1170&auto=format&fit=crop",
    color: "bg-[#ff3b30]",
  },
  {
    title: "Laboratório Maker",
    category: "Inovação",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
    color: "bg-[#004aad]",
  },
  {
    title: "Ateliê de Artes",
    category: "Criatividade",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1171&auto=format&fit=crop",
    color: "bg-[#ff3b30]",
  },
  {
    title: "Espaço Nutrição",
    category: "Saúde",
    image:
      "https://images.unsplash.com/photo-1588075592765-2feb7de1f86d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "bg-[#004aad]",
  },
  {
    title: "Área de Convivência",
    category: "Social",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop",
    color: "bg-[#ff3b30]",
  },
];

export function Gallery() {
  return (
    <section
      id="galeria"
      className="relative w-full overflow-hidden bg-[#fffdf5] py-24 md:py-32"
    >
      {/* Pattern de fundo suave */}
      <div
        className="absolute top-0 h-full w-full opacity-5"
        style={{
          backgroundImage: "radial-gradient(#005eb3 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Título com Animação */}
        <FadeIn direction="up" distance={40}>
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-3 text-sm font-bold uppercase tracking-widest text-[#ff3b30]">
              Nosso Espaço
            </span>
            <h2 className="font-display text-5xl font-black uppercase leading-none text-[#004aad] md:text-6xl lg:text-7xl">
              Um ambiente para <br />
              <span className="text-[#ff3b30]">criar memórias</span>
            </h2>
          </div>
        </FadeIn>

        {/* Grid 3x2 Harmonizado */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <FadeIn
              key={index}
              direction="up"
              delay={0.1 * index}
              distance={50}
            >
              <div className="group relative h-[400px] w-full overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-xl transition-all duration-500 hover:shadow-2xl">
                {/* Imagem com efeito de zoom no hover */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlay de gradiente que muda de cor no hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90`}
                />

                {/* Conteúdo do Card */}
                <div className="absolute bottom-8 left-8">
                  <span className="mb-2 block translate-y-4 transform text-xs font-bold uppercase tracking-widest text-[#ff3b30] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-black text-white md:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center"></div>
        <div className="mt-12 text-center">
          <Link
            href="/estrutura"
            className="rounded-full border-2 border-[#004aad] px-8 py-4 font-bold text-[#004aad] transition-all hover:bg-[#004aad] hover:text-white active:scale-95"
          >
            Ver Galeria Completa
          </Link>
        </div>
      </div>
    </section>
  );
}
