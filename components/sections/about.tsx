import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="overflow-hidden bg-white py-20">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        {/* Lado Esquerdo: Imagem */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-[2.5rem] border-[6px] border-[#004aad] shadow-xl md:h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
            alt="Crianças aprendendo juntas em grupo"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#004aad]/10 mix-blend-multiply"></div>
        </div>

        {/* Lado Direito: Texto */}
        <div className="space-y-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-[#ff3b30]">
              Nossa Essência
            </span>
            <h2 className="mt-2 text-5xl font-black tracking-tight text-[#004aad] md:text-6xl">
              SOBRE NÓS
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-gray-600 md:text-xl">
            <p>
              No Colégio João Pedro, acreditamos que{" "}
              <strong className="text-[#004aad]">
                aprender é uma experiência
              </strong>{" "}
              que acontece no encontro com o outro.
            </p>

            <p>
              Nosso ensino é baseado no{" "}
              <strong className="text-[#004aad]">sociointeracionismo</strong>,
              onde cada descoberta ganha significado na troca de ideias, na
              curiosidade e na vivência do dia a dia.
            </p>

            <p>
              Criamos um{" "}
              <strong className="text-[#ff3b30]">ambiente acolhedor</strong>,
              onde as crianças são incentivadas a{" "}
              <span className="font-semibold text-gray-800">
                explorar, questionar e construir conhecimento
              </span>{" "}
              com <strong className="text-[#004aad]">autonomia</strong>.
            </p>

            <p className="border-l-4 border-[#ff3b30] pl-4 font-medium italic text-gray-800">
              &quot;Mais do que uma escola, somos um espaço de crescimento,
              diálogo e aprendizado.&quot;
            </p>
          </div>

          <div className="pt-4">
            <button className="group flex items-center gap-2 text-lg font-bold text-[#004aad] transition-colors hover:text-[#ff3b30]">
              Conheça nossa proposta pedagógica
              <span className="transform transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
