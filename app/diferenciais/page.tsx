"use client";

import FadeIn from "@/components/ui/FadeIn";
import SplitText from "@/components/ui/SplitText";
import { Languages, Heart, Zap, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DiferenciaisPage() {
  const diferenciais = [
    {
      title: "Programa Bilíngue",
      subtitle: "Inglês além da sala de aula",
      description:
        "Nossa metodologia de imersão prepara os alunos para um mundo globalizado, integrando o idioma em atividades práticas e projetos interdisciplinares.",
      icon: <Languages size={32} className="text-[#ff3b30]" />,
      img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
      reverse: false,
    },
    {
      title: "Educação Socioemocional",
      subtitle: "Formando cidadãos resilientes",
      description:
        "Trabalhamos competências como empatia, autoconhecimento e colaboração, garantindo que o desenvolvimento intelectual caminhe junto com o bem-estar emocional.",
      icon: <Heart size={32} className="text-[#ff3b30]" />,
      img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop",
      reverse: true,
    },
    {
      title: "Tecnologia & Robótica",
      subtitle: "O futuro construído hoje",
      description:
        "Através do pensamento computacional e da cultura maker, incentivamos a solução de problemas reais com ferramentas tecnológicas de ponta.",
      icon: <Zap size={32} className="text-[#ff3b30]" />,
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
      reverse: false,
    },
  ];

  return (
    <main className="min-h-screen bg-[#fffcf5] pb-20 pt-32">
      <div className="container mx-auto px-4">
        {/* CABEÇALHO */}
        <section className="mb-24 text-center">
          <FadeIn direction="up">
            <span className="mb-4 inline-block rounded-full bg-[#004aad]/10 px-4 py-1 text-sm font-bold uppercase tracking-widest text-[#004aad]">
              Por que nos escolher?
            </span>
          </FadeIn>
          <h1 className="mb-6 text-5xl font-black text-[#004aad] md:text-7xl">
            <SplitText text="DIFERENCIAIS" />
          </h1>
          <FadeIn delay={0.5}>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Muito além do conteúdo acadêmico, oferecemos uma formação completa
              que prepara para a vida.
            </p>
          </FadeIn>
        </section>

        {/* LISTA DE DIFERENCIAIS */}
        <div className="space-y-32">
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-12 md:flex-row ${item.reverse ? "md:flex-row-reverse" : ""}`}
            >
              {/* Texto */}
              <div className="flex-1 space-y-6">
                <FadeIn direction={item.reverse ? "left" : "right"}>
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-widest text-[#ff3b30]">
                        {item.subtitle}
                      </h3>
                      <h2 className="text-3xl font-black text-[#004aad] md:text-4xl">
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
            className="group inline-flex items-center gap-2 font-bold text-[#004aad] transition-colors hover:text-[#ff3b30]"
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
<span>Conheça nossa proposta pedagógica</span>;
