"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send } from "lucide-react";

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
    console.log("Dados do Lead:", data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
  }

  return (
    <section id="contato" className="w-full bg-primary py-20 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="font-display text-5xl font-bold uppercase leading-none md:text-6xl">
              O futuro do seu filho <br />
              <span className="text-accent">começa agora</span>
            </h2>
            <p className="max-w-[500px] text-lg text-blue-100/90">
              Agende uma visita guiada e conheça nossa proposta pedagógica na
              prática. Vagas limitadas para o ano letivo de 2026.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl font-bold">
                  1
                </div>
                <p>Preencha o formulário ao lado</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-xl font-bold">
                  2
                </div>
                <p>Nossa equipe pedagógica entra em contato</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold">
                  3
                </div>
                <p>Você visita a escola e tira suas dúvidas</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
            {isSuccess ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center text-slate-800">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Send className="h-10 w-10" />
                </div>
                <h3 className="mb-2 font-display text-3xl font-bold text-primary">
                  Recebemos seu contato!
                </h3>
                <p className="text-slate-500">
                  Nossa equipe vai te chamar no WhatsApp em breve para agendar a
                  visita.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 text-sm font-bold text-primary underline"
                >
                  Enviar outro contato
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 text-slate-800"
              >
                <h3 className="mb-6 font-display text-3xl font-bold text-primary">
                  Agende sua Visita
                </h3>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-slate-700">
                    Nome do Responsável
                  </label>
                  <input
                    {...register("parentName")}
                    placeholder="Seu nome completo"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {errors.parentName && (
                    <span className="text-xs text-red-500">
                      {errors.parentName.message}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-slate-700">
                    E-mail
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-bold text-slate-700">
                    Celular / WhatsApp
                  </label>
                  <input
                    {...register("phone")}
                    placeholder="(21) 99999-9999"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700">
                      Nome do Aluno
                    </label>
                    <input
                      {...register("studentName")}
                      placeholder="Nome do filho(a)"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                    {errors.studentName && (
                      <span className="text-xs text-red-500">
                        {errors.studentName.message}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700">
                      Série (2026)
                    </label>
                    <select
                      {...register("grade")}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Selecione...</option>
                      <option value="infantil">Ed. Infantil</option>
                      <option value="fundamental1">Fundamental I</option>
                      <option value="fundamental2">Fundamental II</option>
                      <option value="medio">Ensino Médio</option>
                    </select>
                    {errors.grade && (
                      <span className="text-xs text-red-500">
                        {errors.grade.message}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center rounded-xl bg-accent py-4 text-lg font-bold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20 disabled:opacity-70"
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
        </div>
      </div>
    </section>
  );
}
