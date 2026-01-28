// src/components/lp/sections/History.tsx
import Image from "next/image";

export const History = () => (
  <section id="sobre" className="px-6 py-24">
    <div className="container mx-auto grid items-center gap-16 md:grid-cols-2">
      <div className="space-y-6 text-center md:text-left">
        <span className="text-xs font-black uppercase tracking-[0.4em] text-[#ff3b30]">
          Nossa História
        </span>
        <h2 className="font-display text-5xl font-black uppercase leading-[0.95] text-[#004aad] md:text-7xl">
          25 ANOS DE <br /> <span className="text-[#ff3b30]">COMPROMISSO.</span>
        </h2>
        <p className="text-lg font-medium italic leading-relaxed text-gray-600">
          Fundado em 1999, o Colégio João Pedro nasceu para ser o segundo lar do
          aluno. Unimos a tradição do ensino forte com a leveza do acolhimento.
        </p>
        <div className="grid grid-cols-2 gap-8 pt-6">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm">
            <p className="font-display text-5xl font-black text-[#004aad]">
              100%
            </p>
            <p className="text-[10px] font-black uppercase text-gray-400">
              Aprovação ENEM
            </p>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm">
            <p className="font-display text-5xl font-black text-[#ff3b30]">
              +5K
            </p>
            <p className="text-[10px] font-black uppercase text-gray-400">
              Alunos Formados
            </p>
          </div>
        </div>
      </div>
      <div className="group relative -rotate-1 rounded-[3rem] bg-white p-4 shadow-2xl">
        <div className="relative aspect-video w-full overflow-hidden rounded-[2.5rem]">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000"
            alt="História"
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>
);
