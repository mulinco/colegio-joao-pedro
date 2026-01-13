"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const formSchema = z.object({
  parentName: z.string().min(3, "Digite o nome completo do responsável"),
  studentName: z.string().min(3, "Digite o nome do aluno"),
  email: z.string().email("Digite um e-mail válido"),
  phone: z.string().min(10, "Digite um telefone com DDD"),
  grade: z.string().min(1, "Selecione uma série de interesse"),
});

type FormData = z.infer<typeof formSchema>;

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  }

  return (
    /* Trocamos 'bg-primary' por 'bg-[#004aad]' para garantir a cor exata */
    <section
      id="contato"
      className="w-full overflow-hidden bg-[#004aad] py-20 text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <FadeIn direction="right" distance={80}>
              <h2 className="font-display text-5xl font-bold uppercase leading-none md:text-6xl">
                O futuro do seu filho <br />
                <span className="text-[#ff3b30]">começa agora</span>
              </h2>
            </FadeIn>

            <FadeIn direction="right" delay={0.2} distance={80}>
              <p className="max-w-[500px] text-lg text-blue-100/90">
                Agende uma visita guiada e conheça nossa proposta pedagógica na
                prática. Vagas limitadas para o ano letivo de 2026.
              </p>
            </FadeIn>

            <div className="space-y-4 pt-4">
              <FadeIn direction="up" delay={0.4} distance={30}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl font-bold">
                    1
                  </div>
                  <p>Preencha o formulário ao lado</p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.6} distance={30}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl font-bold">
                    2
                  </div>
                  <p>Nossa equipe pedagógica entra em contato</p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.8} distance={30}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff3b30] text-xl font-bold">
                    3
                  </div>
                  <p>Você visita a escola e tira suas dúvidas</p>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn direction="left" delay={0.6} duration={1.2} distance={100}>
            <div className="relative mx-auto w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
              {isSuccess ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center text-center text-slate-800">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Send className="h-10 w-10" />
                  </div>
                  <h3 className="mb-2 font-display text-3xl font-bold text-[#004aad]">
                    Recebemos seu contato!
                  </h3>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 text-sm font-bold text-[#004aad] underline"
                  >
                    Enviar outro contato
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5 text-slate-800"
                >
                  <h3 className="mb-6 font-display text-3xl font-bold text-[#004aad]">
                    Agende sua Visita
                  </h3>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700">
                      Nome do Responsável
                    </label>
                    <input
                      {...register("parentName")}
                      placeholder="Seu nome completo"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#004aad] focus:ring-2 focus:ring-[#004aad]/20"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700">
                      E-mail
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#004aad] focus:ring-2 focus:ring-[#004aad]/20"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700">
                      Celular / WhatsApp
                    </label>
                    <input
                      {...register("phone")}
                      placeholder="(21) 99999-9999"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#004aad] focus:ring-2 focus:ring-[#004aad]/20"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-slate-700">
                        Nome do Aluno
                      </label>
                      <input
                        {...register("studentName")}
                        placeholder="Nome do filho(a)"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#004aad] focus:ring-2 focus:ring-[#004aad]/20"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-slate-700">
                        Série (2026)
                      </label>
                      <select
                        {...register("grade")}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#004aad] focus:ring-2 focus:ring-[#004aad]/20"
                      >
                        <option value="">Selecione...</option>
                        <option value="infantil">Ed. Infantil</option>
                        <option value="fundamental1">Fundamental I</option>
                        <option value="fundamental2">Fundamental II</option>
                        <option value="medio">Ensino Médio</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center rounded-xl bg-[#ff3b30] py-4 text-lg font-bold text-white transition-all hover:opacity-90 hover:shadow-lg disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />{" "}
                        Enviando...
                      </>
                    ) : (
                      "Solicitar Contato"
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
