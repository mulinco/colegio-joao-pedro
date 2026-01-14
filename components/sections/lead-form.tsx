"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link"; // IMPORTANTE: Adicione o import do Link
import { HelpCircle } from "lucide-react"; // Opcional: Ícone de ajuda

const contactFormSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  grade: z.string().min(1, "Selecione uma série"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      console.log("Dados captados:", data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      router.push("/thanks");
    } catch (error) {
      console.error("Erro no envio:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* LADO ESQUERDO: Dizeres Motivacionais */}
          <FadeIn direction="right" distance={40}>
            <div className="space-y-6">
              <h2 className="text-4xl font-black leading-tight text-[#004aad] md:text-5xl">
                O futuro do seu filho <br />
                <span className="text-[#ff3b30]">começa aqui.</span>
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-gray-600">
                No Colégio João Pedro, acreditamos que cada aluno é único. Nossa
                metodologia foca na autonomia, no pensamento crítico e no
                acolhimento necessário para transformar potencial em realidade.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#ff3b30]" />
                  <span className="font-bold text-gray-700">
                    Ensino Sociointeracionista
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#ff3b30]" />
                  <span className="font-bold text-gray-700">
                    Estrutura Moderna e Segura
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-[#ff3b30]" />
                  <span className="font-bold text-gray-700">
                    Equipe Pedagógica Especializada
                  </span>
                </div>
              </div>

              {/* --- BLOCO DE FAQ ADICIONADO AQUI --- */}
              <FadeIn delay={0.4} direction="up">
                <div className="mt-8 rounded-2xl border border-[#004aad]/10 bg-[#004aad]/5 p-6">
                  <div className="mb-2 flex items-center gap-3">
                    <HelpCircle className="text-[#ff3b30]" size={20} />
                    <h4 className="font-bold text-[#004aad]">
                      Ainda com dúvidas?
                    </h4>
                  </div>
                  <p className="mb-4 text-sm text-gray-600">
                    Confira nossa central de perguntas frequentes sobre
                    matrículas, horários e metodologia.
                  </p>
                  <Link
                    href="/faq"
                    className="text-sm font-black text-[#ff3b30] transition-all hover:underline"
                  >
                    Ver todas as dúvidas frequentes →
                  </Link>
                </div>
              </FadeIn>
              {/* ------------------------------------- */}
            </div>
          </FadeIn>

          {/* LADO DIREITO: Formulário */}
          <FadeIn direction="left" distance={40} delay={0.2}>
            <div className="rounded-[2.5rem] border border-gray-100 bg-gray-50 p-8 shadow-inner md:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* ... (campos do formulário permanecem iguais) */}
                <div className="space-y-1">
                  <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                    Nome do Responsável
                  </label>
                  <input
                    {...register("name")}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 outline-none transition-all focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad]"
                    placeholder="Nome completo"
                  />
                  {errors.name && (
                    <p className="ml-1 text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                    E-mail do Responsável
                  </label>
                  <input
                    {...register("email")}
                    className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 outline-none transition-all focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad]"
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
                      className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 outline-none transition-all focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad]"
                      placeholder="(21) 99999-9999"
                    />
                    {errors.phone && (
                      <p className="ml-1 text-xs text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                      Nome do Aluno
                    </label>
                    <input
                      {...register("name")}
                      className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3.5 outline-none transition-all focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad]"
                      placeholder="Nome completo"
                    />
                    {errors.name && (
                      <p className="ml-1 text-xs text-red-500">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                      Série
                    </label>
                    <select
                      {...register("grade")}
                      className="w-full appearance-none rounded-2xl border border-gray-200 bg-white px-5 py-3.5 outline-none transition-all focus:border-[#004aad] focus:ring-1 focus:ring-[#004aad]"
                    >
                      <option value="">Selecione...</option>
                      <option value="infantil">Ed. Infantil</option>
                      <option value="fundamental1">Fund. I</option>
                      <option value="fundamental2">Fund. II</option>
                      <option value="medio">Ensino Médio</option>
                    </select>
                    {errors.grade && (
                      <p className="ml-1 text-xs text-red-500">
                        {errors.grade.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 w-full rounded-full bg-[#ff3b30] py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#d92b22] hover:shadow-red-200 active:scale-95 disabled:opacity-50"
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
