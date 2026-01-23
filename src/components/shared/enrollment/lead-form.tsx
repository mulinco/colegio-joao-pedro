"use client";

import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { useLeadForm } from "./use-lead-form";

export function LeadForm() {
  const { register, handleSubmit, errors, isSubmitting } = useLeadForm();

  return (
    /* 1. Removido o <section> com clip-paper e backgrounds. 
      Agora usamos uma div simples, pois o FinalCTA já é o "papel".
    */
    <div className="relative py-12">
      {/* Aumentamos o padding horizontal (px-6 md:px-12) para o conteúdo 
        ficar longe das bordas irregulares do papel.
      */}
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Coluna da Esquerda: Textos */}
          <FadeIn direction="right" distance={40}>
            <div className="space-y-6">
              <h2 className="font-display text-4xl font-black leading-tight text-[#004aad] md:text-5xl">
                O futuro do seu filho <br />
                <span className="font-display text-[#ff3b30]">
                  começa aqui.
                </span>
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-gray-700">
                No Colégio João Pedro, acreditamos que cada aluno é único. Nossa
                metodologia foca na autonomia, no pensamento crítico e no
                acolhimento necessário para transformar potencial em realidade.
              </p>

              {/* Box de Dúvidas: Mantido com fundo leve para destaque */}
              <FadeIn delay={0.4} direction="up">
                <div className="mt-8 rounded-2xl border border-[#004aad]/10 bg-white/40 p-6 shadow-sm backdrop-blur-sm">
                  <div className="mb-2 flex items-center gap-3">
                    <HelpCircle className="text-[#ff3b30]" size={20} />
                    <h4 className="font-bold text-[#004aad]">
                      Ainda com dúvidas?
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Confira nossa central de perguntas frequentes sobre
                    matrículas, horários e metodologia.
                  </p>
                  <Link
                    href="/faq"
                    className="mt-2 inline-block text-sm font-black text-[#ff3b30] hover:underline"
                  >
                    Ver todas as dúvidas frequentes →
                  </Link>
                </div>
              </FadeIn>
            </div>
          </FadeIn>

          {/* Coluna da Direita: Formulário */}
          <FadeIn direction="left" distance={40} delay={0.2}>
            {/* 2. CARD LIMPO: Removido bg-white/80 e sombras pesadas. 
              Agora as linhas do caderno do FinalCTA vão aparecer aqui!
            */}
            <div className="rounded-[2.5rem] p-4 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                    Nome do Responsável
                  </label>
                  <input
                    {...register("parentName")}
                    className={`w-full rounded-2xl border bg-white/90 px-5 py-3.5 outline-none transition-all focus:ring-2 focus:ring-[#004aad]/10 ${errors.parentName ? "border-red-500" : "border-gray-100"}`}
                    placeholder="Nome completo"
                  />
                  {errors.parentName && (
                    <p className="ml-1 text-xs text-red-500">
                      {errors.parentName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                    E-mail do Responsável
                  </label>
                  <input
                    {...register("email")}
                    className="w-full rounded-2xl border border-gray-100 bg-white/90 px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#004aad]/10"
                    placeholder="exemplo@email.com"
                  />
                  {errors.email && (
                    <p className="ml-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                      WhatsApp
                    </label>
                    <input
                      {...register("phone")}
                      className="w-full rounded-2xl border border-gray-100 bg-white/90 px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#004aad]/10"
                      placeholder="(21) 99999-9999"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                      Nome do Aluno
                    </label>
                    <input
                      {...register("studentName")}
                      className="w-full rounded-2xl border border-gray-100 bg-white/90 px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#004aad]/10"
                      placeholder="Nome do aluno"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                    Série de interesse
                  </label>
                  <select
                    {...register("grade")}
                    className="w-full rounded-2xl border border-gray-100 bg-white/90 px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#004aad]/10"
                  >
                    <option value="">Selecione...</option>
                    <option value="infantil">Ed. Infantil</option>
                    <option value="fundamental1">Fund. I</option>
                    <option value="fundamental2">Fund. II</option>
                    <option value="medio">Ensino Médio</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 w-full rounded-full bg-[#ff3b30] py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#e0352b] hover:shadow-xl active:scale-95 disabled:bg-gray-400"
                >
                  {isSubmitting ? "Enviando..." : "Agendar Minha Visita"}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
