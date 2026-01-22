"use client";

import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { useLeadForm } from "./use-lead-form";

export function LeadForm() {
  const { register, handleSubmit, errors, isSubmitting } = useLeadForm();

  return (
    <section id="contato" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Coluna da Esquerda (Texto) - Mantive IGUAL ao seu */}
          <FadeIn direction="right" distance={40}>
            <div className="space-y-6">
              <h2 className="font-display text-4xl font-black leading-tight text-[#004aad] md:text-5xl">
                O futuro do seu filho <br />
                <span className="font-display text-[#ff3b30]">
                  começa aqui.
                </span>
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-gray-600">
                No Colégio João Pedro, acreditamos que cada aluno é único. Nossa
                metodologia foca na autonomia, no pensamento crítico e no
                acolhimento necessário para transformar potencial em realidade.
              </p>

              <FadeIn delay={0.4} direction="up">
                <div className="mt-8 rounded-2xl border border-[#004aad]/10 bg-[#004aad]/5 p-6">
                  <div className="mb-2 flex items-center gap-3">
                    <HelpCircle className="text-[#ff3b30]" size={20} />
                    <h4 className="font-bold text-[#004aad]">
                      Ainda com dúvidas?
                    </h4>
                  </div>
                  <p>
                    Confira nossa central de perguntas frequentes sobre
                    matrículas, horários e metodologia.
                  </p>
                  <Link
                    href="/faq"
                    className="text-sm font-black text-[#ff3b30] hover:underline"
                  >
                    Ver todas as dúvidas frequentes →
                  </Link>
                </div>
              </FadeIn>
            </div>
          </FadeIn>

          {/* Coluna da Direita (Form) - Seu visual de volta! */}
          <FadeIn direction="left" distance={40} delay={0.2}>
            <div className="rounded-[2.5rem] border border-gray-100 bg-gray-50 p-8 shadow-inner md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nome do Responsável */}
                <div className="space-y-1">
                  <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                    Nome do Responsável
                  </label>
                  <input
                    {...register("parentName")}
                    className={`w-full rounded-2xl border bg-white px-5 py-3.5 outline-none transition-all focus:ring-2 focus:ring-[#004aad]/10 ${errors.parentName ? "border-red-500" : "border-gray-200"}`}
                    placeholder="Nome completo"
                  />
                  {errors.parentName && (
                    <p className="ml-1 text-xs text-red-500">
                      {errors.parentName.message}
                    </p>
                  )}
                </div>

                {/* E-mail */}
                <div className="space-y-1">
                  <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                    E-mail do Responsável
                  </label>
                  <input
                    {...register("email")}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#004aad]/10"
                    placeholder="exemplo@email.com"
                  />
                  {errors.email && (
                    <p className="ml-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* WhatsApp */}
                  <div className="space-y-1">
                    <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                      WhatsApp
                    </label>
                    <input
                      {...register("phone")}
                      className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#004aad]/10"
                      placeholder="(21) 99999-9999"
                    />
                  </div>

                  {/* Nome do Aluno - CORRIGIDO para studentName */}
                  <div className="space-y-1">
                    <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                      Nome do Aluno
                    </label>
                    <input
                      {...register("studentName")}
                      className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#004aad]/10"
                      placeholder="Nome completo do aluno"
                    />
                  </div>
                </div>

                {/* Série */}
                <div className="space-y-1">
                  <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                    Série
                  </label>
                  <select
                    {...register("grade")}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#004aad]/10"
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
                  className="mt-4 w-full rounded-full bg-[#ff3b30] py-4 text-lg font-bold text-white transition-all hover:bg-[#e0352b] active:scale-95 disabled:bg-gray-400"
                >
                  {isSubmitting ? "Enviando..." : "Agendar Minha Visita"}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
