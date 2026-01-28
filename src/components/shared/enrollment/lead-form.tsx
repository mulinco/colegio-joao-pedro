"use client";

import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { HelpCircle, AlertCircle, Loader2, CheckCircle2 } from "lucide-react";
import { useLeadForm } from "@/components/shared/enrollment/use-lead-form";

export function LeadForm() {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isSuccess,
    setIsSuccess,
  } = useLeadForm();

  // Tela de Sucesso integrada no componente
  if (isSuccess) {
    return (
      <FadeIn direction="up">
        <div className="space-y-6 py-24 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
            <CheckCircle2 size={40} className="animate-bounce" />
          </div>
          <h2 className="font-display text-4xl font-black uppercase text-[#004aad]">
            Agendamento Solicitado!
          </h2>
          <p className="mx-auto max-w-sm font-body text-gray-600">
            Recebemos seus dados. Em breve nossa secretaria entrará em contato
            via WhatsApp para confirmar a visita.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="text-sm font-black uppercase tracking-widest text-[#ff3b30] hover:underline"
          >
            Fazer outro agendamento
          </button>
        </div>
      </FadeIn>
    );
  }

  return (
    <div className="relative py-12">
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        {/* Uso do FadeIn para envolver o Grid e resolver o erro de linting */}
        <FadeIn direction="up" distance={40}>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* COLUNA DA ESQUERDA: TEXTOS */}
            <div className="space-y-6">
              <h2 className="font-display text-4xl font-black leading-tight text-[#004aad] md:text-5xl">
                O futuro do seu filho <br />
                <span className="font-display text-[#ff3b30]">
                  começa aqui.
                </span>
              </h2>
              <p className="max-w-md font-body text-lg leading-relaxed text-gray-700">
                No Colégio João Pedro, acreditamos que cada aluno é único. Nossa
                metodologia foca na autonomia, no pensamento crítico e no
                acolhimento.
              </p>

              <div className="mt-8 rounded-2xl border border-[#004aad]/10 bg-white/40 p-6 shadow-sm backdrop-blur-sm">
                <div className="mb-2 flex items-center gap-3">
                  <HelpCircle className="text-[#ff3b30]" size={20} />
                  <h4 className="font-bold text-[#004aad]">
                    Ainda com dúvidas?
                  </h4>
                </div>
                <p className="mb-3 font-body text-sm text-gray-600">
                  Confira nossa central de perguntas frequentes sobre matrículas
                  e metodologia.
                </p>
                <Link
                  href="/faq"
                  className="inline-block text-sm font-black text-[#ff3b30] hover:underline"
                >
                  Ver todas as dúvidas frequentes →
                </Link>
              </div>
            </div>

            {/* COLUNA DA DIREITA: FORMULÁRIO */}
            <div className="rounded-[2.5rem] p-4 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nome do Responsável */}
                <div className="space-y-1">
                  <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                    Nome do Responsável
                  </label>
                  <input
                    {...register("parentName")}
                    className={`w-full rounded-2xl border bg-white/90 px-5 py-3.5 outline-none transition-all focus:ring-2 focus:ring-[#004aad]/10 ${errors.parentName ? "border-red-500" : "border-gray-100"}`}
                    placeholder="Nome completo (Mín. 2 nomes)"
                  />
                  {errors.parentName && (
                    <p className="mt-1 flex items-center gap-1 text-[10px] font-bold text-red-500">
                      <AlertCircle size={12} /> {errors.parentName.message}
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
                    className={`w-full rounded-2xl border bg-white/90 px-5 py-3.5 outline-none transition-all focus:ring-2 focus:ring-[#004aad]/10 ${errors.email ? "border-red-500" : "border-gray-100"}`}
                    placeholder="exemplo@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 flex items-center gap-1 text-[10px] font-bold text-red-500">
                      <AlertCircle size={12} /> {errors.email.message}
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
                      maxLength={14}
                      onChange={(e) => {
                        let val = e.target.value.replace(/\D/g, "");
                        if (val.length > 11) val = val.slice(0, 11);
                        if (val.length > 2)
                          val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
                        e.target.value = val;
                      }}
                      className={`w-full rounded-2xl border bg-white/90 px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#004aad]/10 ${errors.phone ? "border-red-500" : "border-gray-100"}`}
                      placeholder="(21) 999999999"
                    />
                    {errors.phone && (
                      <p className="mt-1 flex items-center gap-1 text-[10px] font-bold text-red-500">
                        <AlertCircle size={12} /> {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Nome do Aluno */}
                  <div className="space-y-1">
                    <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                      Nome do Aluno
                    </label>
                    <input
                      {...register("studentName")}
                      className={`w-full rounded-2xl border bg-white/90 px-5 py-3.5 outline-none transition-all focus:ring-2 focus:ring-[#004aad]/10 ${errors.studentName ? "border-red-500" : "border-gray-100"}`}
                      placeholder="Nome e Sobrenome"
                    />
                    {errors.studentName && (
                      <p className="mt-1 flex items-center gap-1 text-[10px] font-bold text-red-500">
                        <AlertCircle size={12} /> {errors.studentName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Série */}
                <div className="space-y-1">
                  <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                    Série de interesse
                  </label>
                  <select
                    {...register("grade")}
                    className={`w-full cursor-pointer appearance-none rounded-2xl border bg-white/90 px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#004aad]/10 ${errors.grade ? "border-red-500" : "border-gray-100"}`}
                  >
                    <option value="">Selecione...</option>
                    <option value="infantil">Ed. Infantil</option>
                    <option value="fundamental1">Fund. I</option>
                    <option value="fundamental2">Fund. II</option>
                    <option value="medio">Ensino Médio</option>
                  </select>
                  {errors.grade && (
                    <p className="mt-1 text-[10px] font-bold text-red-500">
                      {errors.grade.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#ff3b30] py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#e0352b] hover:shadow-xl active:scale-95 disabled:bg-gray-400"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Enviando...
                    </>
                  ) : (
                    "Agendar Minha Visita"
                  )}
                </button>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
