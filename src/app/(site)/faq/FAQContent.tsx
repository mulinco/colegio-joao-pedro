"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import SplitText from "@/components/ui/SplitText";
import { Plus, Minus, ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const faqs = [
  {
    question: "Qual é a linha pedagógica do colégio?",
    answer:
      "Seguimos a linha Sociointeracionista, onde o aluno é o protagonista do seu aprendizado e o professor atua como mediador, estimulando a troca de conhecimentos e a interação social.",
  },
  {
    question: "Como posso agendar uma visita guiada?",
    answer:
      "As visitas podem ser agendadas diretamente pelo nosso formulário na Home ou através do botão flutuante de WhatsApp. Nossa equipe pedagógica terá prazer em apresentar nossa estrutura.",
  },
  {
    question: "O colégio oferece atividades extracurriculares?",
    answer:
      "Sim! Oferecemos Robótica, Judô, Ballet, Iniciação Científica e Programa Bilíngue, integrando tecnologia e cultura ao dia a dia escolar.",
  },
  {
    question: "Como funciona o sistema de avaliação?",
    answer:
      "Nossa avaliação é contínua e processual. Além das provas bimestrais, consideramos projetos, participação em laboratórios e o desenvolvimento de competências socioemocionais.",
  },
  {
    question: "Existe suporte para alunos com dificuldades?",
    answer:
      "Sim, contamos com um núcleo de apoio pedagógico especializado para acompanhamento individualizado, garantindo que nenhum aluno fique para trás em sua jornada.",
  },
];

export function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-transparent pb-20 pt-32">
      <div className="container mx-auto max-w-3xl px-4">
        {/* CABEÇALHO */}
        <section className="mb-16 text-center">
          <FadeIn direction="up">
            <span className="mb-4 inline-block rounded-full bg-[#004aad]/10 px-4 py-1 text-sm font-bold uppercase tracking-widest text-[#004aad]">
              Dúvidas Comuns
            </span>
          </FadeIn>
          <h1 className="mb-6 font-display text-5xl font-black text-[#004aad] md:text-6xl">
            <SplitText text="FAQ" />
          </h1>
          <FadeIn delay={0.5}>
            <p className="text-lg text-gray-600">
              Encontre aqui as respostas para as principais perguntas sobre o
              dia a dia no Colégio João Pedro.
            </p>
          </FadeIn>
        </section>

        {/* ACORDEÃO */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={0.1 * index} direction="up">
              <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors"
                >
                  <span
                    className={`text-lg font-bold ${openIndex === index ? "text-[#ff3b30]" : "text-[#004aad]"}`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 ${openIndex === index ? "rotate-180 bg-[#ff3b30] text-white" : "bg-[#004aad]/5 text-[#004aad]"}`}
                  >
                    {openIndex === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="mt-2 border-t border-gray-50 p-6 pt-0 leading-relaxed text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA FINAL */}
        <FadeIn delay={0.8} direction="up">
          <div className="mt-20 rounded-[2.5rem] bg-[#004aad] p-10 text-center text-white shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">Ainda tem dúvidas?</h2>
            <p className="mb-8 text-blue-100">
              Nossa equipe de atendimento está pronta para conversar com você.
            </p>
            <WhatsAppButton variant="inline" label="Falar no WhatsApp" />
          </div>
        </FadeIn>

        {/* VOLTAR */}
        <div className="mt-12 text-center">
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
