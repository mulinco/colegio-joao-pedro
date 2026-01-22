"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import SplitText from "@/components/ui/SplitText";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Microscope, Trophy, BookOpen, Coffee } from "lucide-react";
import { CLIENT_CONFIG } from "@/constants/config";
import FinalCTA from "@/components/sections/FinalCTA";

// Definição das categorias e fotos
const CATEGORIES = [
  "Todos",
  "Laboratórios",
  "Esportes",
  "Salas",
  "Convivência",
];

const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Laboratórios",
    title: "Laboratório de Ciências",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop",
    icon: <Microscope size={20} />,
  },
  {
    id: 2,
    category: "Esportes",
    title: "Quadra Poliesportiva",
    img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
    icon: <Trophy size={20} />,
  },
  {
    id: 3,
    category: "Salas",
    title: "Sala de Aula Interativa",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
    icon: <BookOpen size={20} />,
  },
  {
    id: 4,
    category: "Convivência",
    title: "Pátio Central",
    img: "https://images.unsplash.com/photo-1706323625335-dad461b68fe5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Coffee size={20} />,
  },
  {
    id: 5,
    category: "Laboratórios",
    title: "Espaço Maker",
    img: "https://images.unsplash.com/photo-1633828763399-e29f1cd3f4c1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Microscope size={20} />,
  },
];

export default function EstruturaPage() {
  const [filter, setFilter] = useState("Todos");

  const filteredItems =
    filter === "Todos"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <main className="min-h-screen bg-transparent pb-20 pt-32">
      <div className="container mx-auto px-4">
        {/* HERO */}
        <header className="mb-16 text-center">
          <FadeIn direction="up">
            <span className="mb-4 inline-block rounded-full bg-[#ff3b30]/10 px-4 py-1 text-sm font-bold uppercase tracking-widest text-[#ff3b30]">
              Ambientes de Aprendizado
            </span>
          </FadeIn>
          <h1 className="mb-6 font-display text-[clamp(2.5rem,8vw,4.5rem)] font-black text-[#004aad]">
            <SplitText text="INFRAESTRUTURA" />
          </h1>

          <FadeIn delay={0.5}>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Espaços modernos planejados para estimular a criatividade, a
              investigação científica e o bem-estar dos nossos alunos.
            </p>
          </FadeIn>
        </header>

        {/* FILTROS */}
        <FadeIn direction="up" delay={0.7}>
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-6 py-2 text-sm font-bold transition-all ${
                  filter === cat
                    ? "bg-[#004aad] text-white shadow-lg"
                    : "border border-gray-100 bg-white text-[#004aad] hover:bg-[#004aad]/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* CONTAINER: Trocamos 'grid' por 'flex flex-wrap justify-center' */}
        <div className="flex flex-wrap justify-center gap-8">
          {filteredItems.map((item) => (
            <FadeIn
              key={item.id}
              direction="up"
              distance={20}
              /* DEFINIÇÃO DE LARGURA:
         - w-full: 100% no mobile
         - md:w-[calc(50%-1rem)]: 2 colunas no tablet (descontando o gap)
         - lg:w-[calc(33.333%-1.5rem)]: 3 colunas no desktop
      */
              className="w-full flex-shrink-0 flex-grow-0 md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <div className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-sm transition-all hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004aad]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="mb-2 flex items-center gap-2 text-[#ff3b30]">
                    {item.icon}
                    <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* CTA FINAL */}
      <FadeIn direction="up" delay={0.7} className="mt-20">
        <FinalCTA />
      </FadeIn>
      {/* BOTÃO DE VOLTA */}
      <div className="mt-20 text-center">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-bold text-[#004aad] transition-colors hover:text-[#ff3b30]"
        >
          <ArrowLeft
            size={20}
            className="transition-transform group-hover:-translate-x-2"
          />
          Voltar para a Home
        </Link>
      </div>
    </main>
  );
}
