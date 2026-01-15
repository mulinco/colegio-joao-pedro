import { BookOpen, Heart, ShieldCheck, Users } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

const features = [
  {
    icon: Heart,
    title: "Acolhimento",
    description:
      "Um olhar atento para cada aluno, respeitando seu tempo e individualidade.",
    color: "bg-accent",
  },
  {
    icon: BookOpen,
    title: "Ensino Forte",
    description:
      "Metodologia sociointeracionista que prepara para os desafios reais.",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Comunidade",
    description:
      "Família e escola caminhando juntas no desenvolvimento da criança.",
    color: "bg-primary-light",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "Monitoramento e controle de acesso para sua total tranquilidade.",
    color: "bg-primary-lighter",
  },
];

export function Features() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Título e Subtítulo com entrada suave vinda de baixo */}
        <FadeIn direction="up" distance={30}>
          <div className="mb-12 text-center">
            <h2 className="font-display text-4xl font-bold uppercase text-primary md:text-5xl">
              Por que escolher o{" "}
              <span className="text-accent">João Pedro?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-lg text-slate-600">
              Mais do que ensino, oferecemos um ambiente onde seu filho se sente
              parte de algo maior.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            /* O segredo do profissionalismo: 
               Cada card tem um delay baseado no index (0.1, 0.2, 0.3...)
            */
            <FadeIn
              key={index}
              direction="up"
              delay={index * 0.15}
              distance={40}
            >
              <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-background p-8 transition-all hover:-translate-y-2 hover:shadow-xl">
                <div
                  className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${feature.color} opacity-10 transition-transform group-hover:scale-150`}
                />
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} text-white shadow-lg`}
                >
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-display text-3xl font-bold text-primary">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn direction="up" delay={0.6}>
          <div className="mt-12 text-center">
            <Link
              href="/diferenciais"
              className="rounded-full bg-[#ff3b30] px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-[#d92b22] hover:shadow-red-200 active:scale-95"
            >
              Veja nossos Diferenciais
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
