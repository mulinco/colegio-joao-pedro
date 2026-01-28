// src/components/lp/sections/Problem.tsx
import { ShieldCheck, Zap } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";

export const Problem = () => (
  <section className="bg-white/40 py-24 backdrop-blur-md">
    <div className="container mx-auto px-6">
      <div className="mx-auto grid max-w-4xl items-center gap-12 md:grid-cols-2">
        <FadeIn direction="right">
          <h3 className="font-display text-4xl font-black uppercase leading-[0.95] text-[#004aad] md:text-6xl">
            MUITAS ESCOLAS ENSINAM CONTEÚDOS, <br />{" "}
            <span className="text-[#ff3b30]">POUCAS ENSINAM A VIVER.</span>
          </h3>
        </FadeIn>
        <FadeIn direction="left">
          <div className="space-y-6 text-lg font-medium text-gray-600">
            <p>
              O mundo mudou. Não basta apenas decorar fórmulas. Se você sente
              que seu filho precisa de mais{" "}
              <strong>acolhimento, segurança e autonomia</strong>, você está no
              lugar certo.
            </p>
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-lg bg-red-100 p-2 text-[#ff3b30]">
                <ShieldCheck size={24} />
              </div>
              <p className="text-sm italic leading-snug">
                Insegurança com o ambiente escolar e falta de transparência na
                comunicação pedagógica.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-lg bg-red-100 p-2 text-[#ff3b30]">
                <Zap size={24} />
              </div>
              <p className="text-sm italic leading-snug">
                Falta de tecnologia integrada e bilinguismo real no cotidiano do
                aluno.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);
