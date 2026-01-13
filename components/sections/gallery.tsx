"use client";

import Image from "next/image";

export function Gallery() {
  return (
    <section
      id="galeria"
      className="relative w-full overflow-hidden bg-[#fffdf5] py-20"
    >
      {/* Background Pattern suave */}
      <div
        className="absolute top-0 h-full w-full opacity-5"
        style={{
          backgroundImage: "radial-gradient(#005eb3 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-2 font-bold text-[#ff3b30]">NOSSO ESPAÇO</span>
          <h2 className="text-4xl font-black uppercase leading-tight text-[#004aad] md:text-5xl">
            Um ambiente para <br className="hidden md:block" />
            <span className="text-[#ff3b30]">criar memórias</span>
          </h2>
        </div>

        {/* GRID DE IMAGENS */}
        <div className="grid h-auto grid-cols-1 gap-4 md:h-[600px] md:grid-cols-4 md:grid-rows-2">
          {/* 1. Biblioteca (Grande) */}
          <div className="group relative min-h-[300px] overflow-hidden rounded-3xl bg-slate-200 md:col-span-2 md:row-span-2">
            <Image
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop"
              alt="Biblioteca escolar moderna com estantes de livros"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 rounded-xl bg-white/90 px-4 py-2 font-bold text-[#004aad] shadow-lg backdrop-blur-md">
              Biblioteca Interativa
            </div>
          </div>

          {/* 2. Quadra (Pequena) - CORRIGIDO */}
          <div className="group relative min-h-[200px] overflow-hidden rounded-3xl bg-slate-200 md:col-span-1 md:row-span-1">
            <Image
              src="https://images.unsplash.com/photo-1544999214-cb3cb61e8499?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Quadra de Esportes"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Sombra para destaque */}
            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/30" />

            {/* Label agora visível em TODOS os tamanhos e com fundo branco */}
            <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-3 py-1.5 text-sm font-bold text-[#004aad] shadow-lg backdrop-blur-md">
              Quadra Poliesportiva
            </div>
          </div>

          {/* 3. Laboratório (Pequeno) - CORRIGIDO */}
          <div className="group relative min-h-[200px] overflow-hidden rounded-3xl bg-slate-200 md:col-span-1 md:row-span-1">
            <Image
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop"
              alt="Laboratório de Ciências com equipamentos"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/30" />

            {/* Label visível em todas as telas com estilo padrão */}
            <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 px-3 py-1.5 text-sm font-bold text-[#004aad] shadow-lg backdrop-blur-md">
              Laboratório
            </div>
          </div>

          {/* 4. Área de Convivência (Larga) */}
          <div className="group relative min-h-[200px] overflow-hidden rounded-3xl bg-slate-200 md:col-span-2 md:row-span-1">
            <Image
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
              alt="Crianças estudando ao ar livre"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 rounded-xl bg-white/90 px-4 py-2 font-bold text-[#004aad] shadow-lg backdrop-blur-md">
              Área de Convivência
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
