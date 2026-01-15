// app/proposta/page.tsx
"use client";

import { Footer } from "@/components/layout/footer";
import FadeIn from "@/components/ui/FadeIn";
import SplitText from "@/components/ui/SplitText";
import { BookOpen, Users, Lightbulb, Target, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CounterItem } from "@/components/ui/CounterItem";
import { FlaskConical, Cpu, Globe, Sprout } from "lucide-react";
import { CLIENT_CONFIG } from "@/constants/config";

export default function PropostaPage() {
  const pilares = [
    {
      icon: <Users className="text-[#ff3b30]" size={32} />,
      title: "Sociointeracionismo",
      desc: "Acreditamos que o conhecimento é construído através da interação social e da troca de experiências entre alunos e educadores.",
    },
    {
      icon: <Lightbulb className="text-[#ff3b30]" size={32} />,
      title: "Pensamento Crítico",
      desc: "Incentivamos o questionamento e a análise profunda, preparando cidadãos conscientes e capazes de transformar a realidade.",
    },
    {
      icon: <Target className="text-[#ff3b30]" size={32} />,
      title: "Autonomia",
      desc: "Desenvolvemos a capacidade do aluno de gerir seu próprio aprendizado, promovendo a responsabilidade e o protagonismo.",
    },
    {
      icon: <BookOpen className="text-[#ff3b30]" size={32} />,
      title: "Excelência Acadêmica",
      desc: "Base sólida de conhecimentos aliados às competências do século XXI, garantindo o sucesso em exames e na vida profissional.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#fffcf5] pb-20 pt-32">
      <div className="container mx-auto px-4">
        {/* HERO DA PÁGINA */}
        <section className="mb-20 text-center">
          <FadeIn direction="up">
            <span className="mb-4 inline-block rounded-full bg-[#004aad]/10 px-4 py-1 text-sm font-bold uppercase tracking-widest text-[#004aad]">
              Nossa Essência
            </span>
          </FadeIn>
          <h1 className="mb-6 text-5xl font-black text-[#004aad] md:text-7xl">
            <SplitText text="PROPOSTA" />{" "}
            <span className="whitespace-nowrap">
              <SplitText text="PEDAGÓGICA" />
            </span>
          </h1>
          <FadeIn delay={0.5}>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
              No Colégio João Pedro, o ensino vai além da sala de aula.
              Construímos pontes entre o saber teórico e a prática social,
              focando no desenvolvimento integral do ser humano.
            </p>
          </FadeIn>
        </section>

        {/* OS PILARES */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pilares.map((pilar, index) => (
            <FadeIn key={index} delay={0.2 * index} direction="up">
              <div className="h-full rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ff3b30]/5">
                  {pilar.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-[#004aad]">
                  {pilar.title}
                </h3>
                <p className="leading-relaxed text-gray-600">{pilar.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* SEÇÃO DE CITAÇÃO */}
        <FadeIn direction="up" delay={0.8}>
          <div className="mt-20 rounded-[3rem] bg-[#004aad] p-12 text-center text-white shadow-2xl">
            <blockquote className="mx-auto max-w-3xl text-2xl font-medium italic md:text-3xl">
              &ldquo;A educação não transforma o mundo. A educação muda as
              pessoas. As pessoas transformam o mundo.&rdquo;
            </blockquote>
            <cite className="mt-6 block font-bold uppercase not-italic tracking-widest text-[#ff3b30]">
              — Paulo Freire
            </cite>
          </div>
        </FadeIn>

        <section className="mt-20 border-t border-gray-100 pt-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <FadeIn direction="right">
              <h2 className="mb-6 text-4xl font-black text-[#004aad]">
                Parceria que <br />{" "}
                <span className="text-[#ff3b30]">Gera Resultados</span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Acreditamos que a educação de excelência só acontece quando
                escola e família caminham juntas. Por isso, mantemos canais de
                comunicação transparentes e uma gestão acolhedora.
              </p>
              <ul className="space-y-4">
                {[
                  "Atendimento personalizado",
                  "App exclusivo para pais",
                  "Reuniões trimestrais",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 font-bold text-[#004aad]"
                  >
                    <div className="h-2 w-2 rounded-full bg-[#ff3b30]" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <div className="relative aspect-video overflow-hidden rounded-[3rem] border-2 border-[#004aad]/20 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1655337690446-e10ecbe6541c?q=80&w=1165&auto=format&fit=crop"
                  alt="Reunião de Pais e Professores no Colégio João Pedro"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SEÇÃO DE NÚMEROS (CONTADORES) */}
        <section className="mb-20 border-y border-gray-100 bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <CounterItem value={25} suffix="+" label="Anos de História" />
              <CounterItem value={100} suffix="%" label="Aprovação" />
              <CounterItem value={500} suffix="+" label="Alunos Formados" />
              <CounterItem value={40} suffix="+" label="Educadores" />
            </div>
          </div>
        </section>

        {/* SEÇÃO: METODOLOGIA POR SEGMENTO */}
        <section className="mb-20">
          <FadeIn direction="up">
            <h2 className="mb-12 text-center text-4xl font-black text-[#004aad]">
              Excelência em cada <span className="text-[#ff3b30]">Etapa</span>
            </h2>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {/* EDUCAÇÃO INFANTIL */}
            <FadeIn delay={0.2}>
              <div className="group rounded-[2.5rem] border border-gray-50 bg-white p-10 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
                <h3 className="mb-4 text-2xl font-black text-[#ff3b30]">
                  Educação Infantil
                </h3>
                <p className="mb-6 text-gray-600">
                  Foco no lúdico, na socialização e no desenvolvimento motor
                  através da descoberta guiada.
                </p>
                <ul className="space-y-3 text-sm font-bold text-[#004aad]">
                  <li>• Horta Pedagógica</li>
                  <li>• Atividades Sensoriais</li>
                  <li>• Inglês Inicial</li>
                </ul>
              </div>
            </FadeIn>

            {/* ENSINO FUNDAMENTAL */}
            <FadeIn delay={0.4}>
              <div className="group rounded-[2.5rem] bg-[#004aad] p-10 text-white shadow-xl">
                <h3 className="mb-4 text-2xl font-black text-[#ff3b30]">
                  Ensino Fundamental
                </h3>
                <p className="mb-6 text-blue-100">
                  Consolidação da alfabetização, raciocínio lógico e construção
                  da autonomia acadêmica.
                </p>
                <ul className="space-y-3 text-sm font-bold text-white">
                  <li>• Iniciação Científica</li>
                  <li>• Robótica e Maker</li>
                  <li>• Programa Socioemocional</li>
                </ul>
              </div>
            </FadeIn>

            {/* ENSINO MÉDIO */}
            <FadeIn delay={0.6}>
              <div className="group rounded-[2.5rem] border border-gray-50 bg-white p-10 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
                <h3 className="mb-4 text-2xl font-black text-[#ff3b30]">
                  Ensino Médio
                </h3>
                <p className="mb-6 text-gray-600">
                  Excelência acadêmica com foco em resultados, projeto de vida e
                  escolha profissional.
                </p>
                <ul className="space-y-3 text-sm font-bold text-[#004aad]">
                  <li>• Simulados Semanais</li>
                  <li>• Orientação Vocacional</li>
                  <li>• Aprofundamento ENEM</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SEÇÃO: DIFERENCIAIS TÉCNICOS */}
        <section className="bg-[#fffcf5] py-20">
          <div className="container mx-auto px-4">
            <FadeIn direction="up">
              <div className="mb-16 text-center">
                <h2 className="text-4xl font-black text-[#004aad] md:text-5xl">
                  Tecnologia a Serviço do{" "}
                  <span className="text-[#ff3b30]">Saber</span>
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                  Nossa infraestrutura foi planejada para que o aluno não apenas
                  receba o conhecimento, mas o construa através da
                  experimentação técnica.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Laboratório de Ciências */}
              <FadeIn delay={0.1}>
                <div className="flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-6 rounded-2xl bg-[#ff3b30]/10 p-4 text-[#ff3b30]">
                    <FlaskConical size={40} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#004aad]">
                    Investigação Científica
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Laboratórios modernos onde a biologia e a química saem dos
                    livros para a prática experimental guiada.
                  </p>
                </div>
              </FadeIn>

              {/* Espaço Maker */}
              <FadeIn delay={0.2}>
                <div className="flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-6 rounded-2xl bg-[#ff3b30]/10 p-4 text-[#ff3b30]">
                    <Cpu size={40} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#004aad]">
                    Espaço Maker & Robótica
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Ambiente dedicado à prototipagem e ao raciocínio lógico,
                    integrando tecnologia e criatividade.
                  </p>
                </div>
              </FadeIn>

              {/* Programa Bilíngue */}
              <FadeIn delay={0.3}>
                <div className="flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-6 rounded-2xl bg-[#ff3b30]/10 p-4 text-[#ff3b30]">
                    <Globe size={40} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#004aad]">
                    Imersão Bilíngue
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Ensino de língua inglesa integrado ao currículo, preparando
                    o aluno para um contexto globalizado.
                  </p>
                </div>
              </FadeIn>

              {/* Horta Pedagógica */}
              <FadeIn delay={0.4}>
                <div className="flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-6 rounded-2xl bg-[#ff3b30]/10 p-4 text-[#ff3b30]">
                    <Sprout size={40} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#004aad]">
                    Educação Ambiental
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Horta pedagógica que estimula o contato com a natureza e o
                    aprendizado sobre sustentabilidade.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* VOLTAR */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-bold text-[#004aad] transition-colors hover:text-[#ff3b30]"
          >
            <ArrowLeft
              size={20}
              className="transition-transform group-hover:-translate-x-2"
            />
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </main>
  );
}
