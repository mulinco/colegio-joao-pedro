import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { Gallery } from "@/components/sections/gallery";
import FInalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fffcf5]">
      <Hero />

      {/* 1. CONTÊINER PAI (A SOMBRA): 
          Ele não tem overflow-hidden, então a sombra pode 'vazar' livremente.
          O drop-shadow aqui é o que faz o papel saltar da tela.
      */}
      <div className="relative mx-4 my-12 drop-shadow-[0_20px_10px_rgba(0,0,0,0.1)] drop-shadow-[0_50px_40px_rgba(0,0,0,0.15)] filter md:mx-12 lg:mx-auto lg:max-w-[1400px]">
        {/* 2. CONTÊINER FILHO (O PAPEL):
            Aqui sim vai o seu recorte (clip-paper) e o overflow-hidden.
        */}
        <section className="relative overflow-hidden bg-white py-24 clip-paper">
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

          {/* Camada: Textura de Papel */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-20 mix-blend-multiply"
            style={{
              backgroundImage:
                'url("https://www.transparenttextures.com/patterns/crinkled-paper-pinking.png")',
              backgroundSize: "750px",
            }}
          />

          <div className="space-y-0">
            <About />
            <Features />
          </div>
        </section>
      </div>

      <Gallery />
      <FInalCTA />
    </div>
  );
}
