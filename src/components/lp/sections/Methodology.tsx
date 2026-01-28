import { BookOpen, Trophy, Languages, Heart } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";
import { SectionTitle } from "../ui/SectionTitle";

const items = [
  {
    icon: BookOpen,
    color: "bg-[#004aad]",
    title: "Sociointeracionismo",
    desc: "O aluno constrói o saber através da troca de experiências com mediadores especializados.",
  },
  {
    icon: Trophy,
    color: "bg-[#004aad]",
    title: "Cultura Maker",
    desc: "Laboratórios de robótica e prototipagem onde a ideia vira projeto real.",
  },
  {
    icon: Languages,
    color: "bg-[#004aad]",
    title: "Inglês Interativo",
    desc: "Bilinguismo integrado desde a Educação Infantil, transformando o idioma em ferramenta natural.",
  },
  {
    icon: Heart,
    color: "bg-[#ff3b30]",
    title: "Olhar Individual",
    desc: "Acompanhamento humanizado que respeita o ritmo de cada um.",
  },
];

export const Methodology = () => (
  <section className="relative overflow-hidden bg-white px-6 py-24">
    <div className="container relative z-10 mx-auto">
      <SectionTitle title="Nossa Metodologia" subtitle="Como ensinamos" />

      {/* AJUSTE AQUI: 
          grid-cols-1 (mobile)
          sm:grid-cols-2 (tablet)
          lg:grid-cols-4 (desktop - 4 na mesma linha)
      */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="group h-full rounded-[2.5rem] border border-transparent bg-[#fff4d7]/40 p-8 text-center transition-all duration-500 hover:border-gray-200 hover:bg-white hover:shadow-xl">
              <div
                className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} text-white shadow-lg transition-transform group-hover:rotate-12 group-hover:scale-110`}
              >
                <item.icon size={28} />
              </div>
              <h4 className="mb-3 font-display text-2xl font-black uppercase tracking-tight text-[#004aad]">
                {item.title}
              </h4>
              <p className="font-body text-sm font-medium italic leading-relaxed text-gray-600">
                &quot;{item.desc}&quot;
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
