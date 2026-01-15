"use client";

import FadeIn from "@/components/ui/FadeIn";
import SplitText from "@/components/ui/SplitText";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CLIENT_CONFIG } from "@/constants/config";
import { Languages, Heart, Zap } from "lucide-react";

const iconMap = {
  Languages: <Languages size={32} className="text-accent" />,
  Heart: <Heart size={32} className="text-accent" />,
  Zap: <Zap size={32} className="text-accent" />,
};
export default function DiferenciaisPage() {
  return (
    // Usando bg-background que vem do seu config!
    <main className="min-h-screen bg-background pb-20 pt-32">
      <div className="container mx-auto px-4">
        
        {/* CABEÇALHO - Cores dinâmicas */}
        <section className="mb-24 text-center">
          <FadeIn direction="up">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-bold uppercase tracking-widest text-primary">
              Por que escolher o {CLIENT_CONFIG.shortName}?
            </span>
          </FadeIn>
          <h1 className="mb-6 text-5xl font-black text-primary md:text-7xl">
            <SplitText text="DIFERENCIAIS" />
          </h1>
          <FadeIn delay={0.5}>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Muito além do conteúdo acadêmico, oferecemos para os alunos do {CLIENT_CONFIG.name} uma formação completa.
            </p>
          </FadeIn>
        </section>

        {/* LISTA DE DIFERENCIAIS AUTOMATIZADA */}
        <div className="space-y-32">
          {CLIENT_CONFIG.content.diferenciais.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-12 md:flex-row ${item.reverse ? "md:flex-row-reverse" : ""}`}
            >
              {/* Texto */}
              <div className="flex-1 space-y-6">
                <FadeIn direction={item.reverse ? "left" : "right"}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-sm">
                      {iconMap[item.iconName as keyof typeof iconMap]}
                    </div>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-widest text-accent">
                        {item.subtitle}
                      </h3>
                      <h2 className="text-3xl font-black text-primary md:text-4xl">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </FadeIn>
              </div>

              {/* Imagem */}
              <div className="flex-1">
                <FadeIn direction={item.reverse ? "right" : "left"} delay={0.3}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[3rem] border-4 border-white shadow-2xl">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>

        {/* VOLTAR */}
        <div className="mt-32 text-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-accent"
          >
            <ArrowLeft
              size={20}
              className="transition-transform group-hover:-translate-x-2"
            />
            Voltar para a Home
          </Link>
        </div>
      </div>
    </main>
  );
}