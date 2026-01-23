import { BookOpen, Heart, ShieldCheck, Users } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

const features = [
  {
    icon: Heart,
    title: "Acolhimento",
    description:
      "Um olhar atento para cada aluno, respeitando seu tempo e individualidade.",
    color: "bg-[#ff3b30]", // Ajustado para usar o vermelho da sua paleta
  },
  {
    icon: BookOpen,
    title: "Ensino Forte",
    description:
      "Metodologia sociointeracionista que prepara para os desafios reais.",
    color: "bg-[#004aad]", // Ajustado para o azul principal
  },
  {
    icon: Users,
    title: "Comunidade",
    description:
      "Família e escola caminhando juntas no desenvolvimento da criança.",
    color: "bg-[#004aad]/80",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "Monitoramento e controle de acesso para sua total tranquilidade.",
    color: "bg-[#004aad]/60",
  },
];

export function Features() {
  return (
    /* 1. Aplicamos as classes utilitárias que configuramos: clip-paper e paper-shadow */
    <section className="relative w-full overflow-hidden bg-white py-24 clip-paper paper-shadow">
      {/* Camada: Linhas do Caderno */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage: `
            linear-gradient(#94a3b8 1px, transparent 1px), 
            linear-gradient(90deg, #ff3b30 1.5px, transparent 1.5px)
          `,
          backgroundSize: "100% 2.8rem, 100% 100%",
          backgroundPosition: "0 3.5rem, 5rem 0",
          opacity: 0.12,
        }}
      />

      {/* Camada: Textura de Papel Amassado */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20 mix-blend-multiply"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/crinkled-paper-pinking.png")',
          backgroundSize: "750px",
        }}
      />

      {/* 2. Respiro extra no container (px-8 md:px-16) para não cortar os cards nas bordas */}
      <div className="container relative z-10 mx-auto px-8 md:px-16">
        <FadeIn direction="up" distance={30}>
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl font-black uppercase text-[#004aad] md:text-5xl">
              Por que escolher o <br />
              <span className="text-[#ff3b30]">João Pedro?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-lg text-slate-600">
              Mais do que ensino, oferecemos um ambiente onde seu filho se sente
              parte de algo maior.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FadeIn
              key={index}
              direction="up"
              delay={index * 0.15}
              distance={40}
            >
              {/* Ajustamos o bg para white/40 e backdrop-blur para as linhas do caderno aparecerem sutilmente atrás do card */}
              <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white/40 p-8 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-2 hover:shadow-xl">
                <div
                  className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${feature.color} opacity-10 transition-transform group-hover:scale-150`}
                />
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} text-white shadow-lg`}
                >
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-display text-2xl font-black text-[#004aad]">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.6}>
          <div className="mt-16 text-center">
            <Link
              href="/diferenciais"
              className="inline-block rounded-full bg-[#ff3b30] px-10 py-4 font-bold text-white shadow-lg transition-all hover:bg-[#e0352b] hover:shadow-red-200 active:scale-95"
            >
              Veja nossos Diferenciais
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
