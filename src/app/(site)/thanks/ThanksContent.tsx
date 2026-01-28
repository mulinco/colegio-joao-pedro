// app/thanks/page.tsx
"use client";

import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SplitText from "@/components/ui/SplitText";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obrigado!",
};

export function ThanksContent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-transparent px-4 text-center">
      {/* Ícone de Sucesso Animado */}
      <FadeIn direction="up" distance={30}>
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-[#25d366] shadow-inner">
          <CheckCircle2 size={56} />
        </div>
      </FadeIn>

      <h1 className="mb-4 text-4xl font-black text-[#004aad] md:text-6xl">
        <SplitText text="MUITO OBRIGADO!" />
      </h1>

      <FadeIn delay={0.6}>
        <p className="mx-auto mb-10 max-w-md text-lg text-gray-600">
          A mensagem foi enviada com sucesso. Em breve, nossa equipe pedagógica
          entrará em contato para agendar sua visita ao{" "}
          <strong>Colégio João Pedro</strong>.
        </p>
      </FadeIn>

      <FadeIn delay={1.0}>
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full bg-[#ff3b30] px-8 py-4 font-bold text-white transition-all hover:bg-[#d92b22] hover:shadow-xl active:scale-95"
        >
          <ArrowLeft
            size={20}
            className="transition-transform group-hover:-translate-x-1"
          />
          Voltar para o Início
        </Link>
      </FadeIn>

      {/* Detalhe decorativo sutil no fundo */}
      <div className="absolute -z-10 h-[400px] w-[400px] rounded-full bg-[#004aad]/5 blur-3xl"></div>
    </main>
  );
}
