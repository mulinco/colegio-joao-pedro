// src/components/lp/sections/Hero.tsx
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";

export const Hero = ({ onCTA }: { onCTA: () => void }) => {
  const nextYear = new Date().getFullYear() + 1;

  return (
    <section className="relative px-6 pb-24 pt-40">
      <div className="container mx-auto grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="space-y-8 text-center lg:text-left">
          <FadeIn direction="down">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-100 px-4 py-1.5 font-display text-[11px] font-black uppercase tracking-[0.3em] text-[#ff3b30]">
              <Star size={14} className="fill-current" />
              Inscrições Abertas {nextYear}
            </div>
          </FadeIn>

          <FadeIn direction="up">
            <h1 className="font-display text-6xl font-black uppercase leading-[0.95] tracking-normal text-[#004aad] md:text-8xl">
              EDUCAÇÃO QUE <br />
              <span className="text-[#ff3b30]">TRANSFORMA.</span>
            </h1>

            <p className="mx-auto max-w-lg font-body text-xl font-medium leading-relaxed tracking-normal text-gray-700 lg:mx-0">
              Onde o aprendizado é uma experiência de encontro, diálogo e
              construção coletiva. Seu filho merece o futuro que começa agora.
            </p>
          </FadeIn>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <button
              onClick={onCTA}
              className="group flex h-16 items-center justify-center gap-3 rounded-full bg-[#004aad] px-10 font-display text-xl font-black uppercase tracking-[0.1em] text-white shadow-2xl transition-all hover:bg-[#003a8c] active:scale-95"
            >
              Agendar Minha Visita
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>

            {/* Prova Social (Avatares) */}
            <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/50 px-6 py-3 shadow-sm backdrop-blur">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-slate-100"
                  >
                    <Image
                      src={`https://i.pravatar.cc/100?u=${i + 10}`}
                      alt="Responsável"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="font-mono text-[10px] font-bold uppercase leading-tight tracking-[0.1em] text-[#004aad]">
                Mais de 500 <br /> famílias confiam
              </p>
            </div>
          </div>
        </div>

        {/* Coluna da Imagem com Testemunhal Flutuante */}
        <div className="relative">
          {/* Brilho de fundo (Efeito de ADS) */}
          <div className="absolute inset-0 -z-10 rounded-full bg-[#004aad]/5 blur-3xl" />

          <FadeIn direction="left">
            <div className="relative aspect-[4/5] rotate-2 overflow-hidden rounded-[4rem] border-[12px] border-white shadow-2xl transition-transform duration-700 hover:rotate-0">
              <Image
                src="https://images.unsplash.com/photo-1635605626768-70e52429d4c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Alunos felizes"
                fill
                className="object-cover"
                priority // Carregamento prioritário para o LCP
              />

              {/* Card Flutuante de Depoimento */}
              <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white bg-white/90 p-6 text-center shadow-lg backdrop-blur-md">
                <p className="font-display font-mono text-base font-bold uppercase italic leading-tight tracking-normal text-[#004aad]">
                  &quot;Aqui meu filho aprendeu a ser protagonista do próprio
                  futuro.&quot;
                </p>
                <p className="mt-2 font-display font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-[#ff3b30]">
                  — Marina, mãe do 4º ano
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
