"use client";

import {
  Loader2,
  CheckCircle2,
  Phone,
  MapPin,
  AlertCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/components/lp/ui/FadeIn";
import { useLeadForm } from "@/components/shared/enrollment/use-lead-form";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isSuccess,
    setIsSuccess,
  } = useLeadForm();

  return (
    <section id="matricula" className="relative px-6 py-24">
      <div className="container relative mx-auto max-w-5xl overflow-hidden rounded-[4rem] bg-[#004aad] p-8 text-white shadow-2xl md:p-16">
        <FadeIn direction="up">
          <div className="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-[#ff3b30] opacity-10 blur-3xl" />

          <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
            {/* LADO ESQUERDO - AGORA CENTRALIZADO */}
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="flex flex-col items-center space-y-4">
                <h2 className="font-display text-5xl font-black uppercase leading-[0.85] md:text-7xl">
                  AGENDE SUA <br />{" "}
                  <span className="text-[#ff3b30]">VISITA GUIADA.</span>
                </h2>
                {/* Adicionado mx-auto para centralizar o bloco do parágrafo e text-center para o texto */}
                <p className="mx-auto max-w-md font-body text-xl font-medium italic leading-relaxed text-blue-100">
                  &quot;Deixe seus dados e receba nosso plano pedagógico
                  completo.&quot;
                </p>
              </div>

              <div className="space-y-6 pt-4">
                {/* Adicionado justify-center para centralizar o ícone e o número na linha */}
                <div className="flex items-center justify-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff3b30]">
                    <Phone size={24} />
                  </div>
                  <p className="font-body text-lg font-bold">(21) 2222-3333</p>
                </div>
              </div>
            </div>

            {/* LADO DIREITO */}
            <div className="rotate-1 rounded-[3rem] bg-white p-4 text-slate-900 shadow-2xl">
              <div className="overflow-hidden rounded-[2.5rem] border-4 border-dashed border-[#004aad]/10 bg-white">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-4 p-12 text-center"
                    >
                      <CheckCircle2
                        size={60}
                        className="mx-auto text-green-500"
                      />
                      <h3 className="font-display text-2xl font-black uppercase text-[#004aad]">
                        Enviado!
                      </h3>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="text-xs font-bold uppercase text-[#ff3b30] underline"
                      >
                        Novo Agendamento
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5 p-8">
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-[#004aad]">
                          Responsável
                        </label>
                        <input
                          {...register("parentName")}
                          className={`w-full rounded-2xl border bg-gray-50 px-5 py-4 outline-none transition-all ${errors.parentName ? "border-red-500" : "border-gray-100"}`}
                          placeholder="Nome Completo"
                        />
                        {errors.parentName && (
                          <span className="flex items-center gap-1 text-[10px] font-bold text-red-500">
                            <AlertCircle size={12} />{" "}
                            {errors.parentName.message}
                          </span>
                        )}
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-[#004aad]">
                          WhatsApp
                        </label>
                        <input
                          {...register("phone")}
                          maxLength={14}
                          className={`w-full rounded-2xl border bg-gray-50 px-5 py-4 outline-none ${errors.phone ? "border-red-500" : "border-gray-100"}`}
                          placeholder="(21) 999999999"
                          onChange={(e) => {
                            let val = e.target.value.replace(/\D/g, "");
                            if (val.length > 2)
                              val = `(${val.slice(0, 2)}) ${val.slice(2, 11)}`;
                            e.target.value = val;
                          }}
                        />
                        {errors.phone && (
                          <span className="flex items-center gap-1 text-[10px] font-bold text-red-500">
                            <AlertCircle size={12} /> {errors.phone.message}
                          </span>
                        )}
                      </div>

                      <div className="space-y-1">
                        <label className="text-[11px] font-bold uppercase text-[#004aad]">
                          Série
                        </label>
                        <select
                          {...register("grade")}
                          className={`w-full appearance-none rounded-2xl border bg-gray-50 px-5 py-4 outline-none ${errors.grade ? "border-red-500" : "border-gray-100"}`}
                        >
                          <option value="">Selecione...</option>
                          <option value="infantil">Educação Infantil</option>
                          <option value="fundamental-1">
                            Ensino Fundamental I
                          </option>
                          <option value="fundamental-2">
                            Ensino Fundamental II
                          </option>
                          <option value="medio">Ensino Médio</option>
                        </select>
                        {errors.grade && (
                          <span className="mt-1 flex items-center gap-1 text-[10px] font-bold text-red-500">
                            <AlertCircle size={12} /> {errors.grade.message}
                          </span>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#ff3b30] px-6 py-4 text-base font-black text-white transition-all active:scale-95 disabled:opacity-70 sm:text-lg md:px-8 md:py-5 md:text-xl"
                      >
                        {isSubmitting ? (
                          <Loader2 className="animate-spin" size={24} />
                        ) : (
                          "Garantir Minha Visita"
                        )}
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
