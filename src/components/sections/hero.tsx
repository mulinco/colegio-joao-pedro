"use client";

import Image from "next/image";
import Link from "next/link";
import SplitText from "@/components/ui/SplitText";
import FadeIn from "@/components/ui/FadeIn";
import { CLIENT_CONFIG } from "@/constants/config";

export function Hero() {
  const today = new Date();
  const nextYear = today.getFullYear() + 1;

  return (
    <section className="container mx-auto grid grid-cols-1 items-center gap-12 overflow-hidden px-4 py-12 pt-32 md:grid-cols-2 md:py-20">
      {/* --- COLUNA DA ESQUERDA --- */}
      <div className="space-y-6 text-center md:text-left">
        <FadeIn direction="down" distance={20}>
          <div className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-[#ff3b30]">
            Matrículas Abertas {nextYear}
          </div>
        </FadeIn>

        <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
          <SplitText
            text="CRIANDO UM MUNDO"
            className="font-karantina block text-[#004aad]"
          />
          <SplitText
            text="DE POSSIBILIDADES"
            className="font-karantina block text-[#ff3b30]"
            delay={500}
          />
        </h1>

        <FadeIn direction="up" delay={0.8}>
          <p className="mx-auto max-w-[500px] text-lg text-gray-600 md:mx-0">
            No Colégio João Pedro, o aprendizado acontece no encontro. Um espaço
            de crescimento, diálogo e autonomia para o seu filho.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={1.0}>
          <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row">
            {/* Botão de Agendamento: Link para âncora de contato na Home */}
            <Link
              href="/#contato"
              className="flex h-12 w-full items-center justify-center rounded-full bg-[#ff3b30] px-8 text-lg font-bold text-white transition-all hover:bg-[#d92b22] hover:shadow-lg active:scale-95 md:w-auto"
            >
              Agendar Visita
            </Link>

            {/* Botão de Conhecer: Link para a página de Proposta Pedagógica */}
            <Link
              href="/proposta"
              className="flex h-12 w-full items-center justify-center rounded-full border border-[#004aad] px-8 font-bold text-[#004aad] transition-all hover:bg-blue-50 active:scale-95 md:w-auto"
            >
              Conhecer a Escola
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* --- COLUNA DA DIREITA (IMPACTO RETANGULAR) --- */}
      {/* Aumentamos o max-w para 600px para ela esticar mais para os lados */}
      <div className="relative mx-auto mt-4 flex h-[450px] w-full max-w-[1000px] items-center justify-center md:mt-0 md:h-[550px]">
        {/* Fundo Azul: Ajustado para ser mais largo (w-[95%]) */}
        <FadeIn
          direction="left"
          delay={0.4}
          className="absolute z-0 h-[85%] w-[95%]"
        >
          <div className="h-full w-full rotate-2 transform rounded-[2.5rem] bg-gradient-to-tr from-[#004aad] to-[#003a8c] shadow-2xl md:translate-x-4 md:translate-y-2"></div>
        </FadeIn>

        {/* Moldura da Imagem: Agora ocupa 100% da largura do container para o aspecto retangular */}
        <FadeIn
          direction="up"
          delay={0.6}
          className="relative z-10 h-[85%] w-full overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-white shadow-xl"
        >
          <Image
            src={CLIENT_CONFIG.assets.hero} 
            alt={`Destaque do ${CLIENT_CONFIG.name}`}
            fill
            className="object-cover"
            priority
          />
        </FadeIn>

        {/* Balão de Frase */}
        <FadeIn
          direction="up"
          delay={1.5}
          className="absolute bottom-4 left-0 z-20 md:-left-4 md:bottom-8"
        >
          <div className="max-w-[180px] rounded-xl border-l-[6px] border-[#ff3b30] bg-white/95 p-4 shadow-lg backdrop-blur md:max-w-[220px]">
            <p className="text-xs font-bold text-[#004aad] md:text-base">
              &quot;Aprender é uma experiência.&quot;
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
