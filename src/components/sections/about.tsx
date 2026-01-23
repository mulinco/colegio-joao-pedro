import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export function About() {
  return (
    /* 1. Aplicamos o clip-path e a sombra na section principal */
    <section
      id="sobre"
      className="relative overflow-hidden bg-white py-24 clip-paper paper-shadow"
    >
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

      {/* 2. Ajustamos o container para ter mais padding horizontal (px-8 md:px-16)
          isso evita que o conteúdo chegue perto do corte irregular do papel.
      */}
      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-12 px-8 md:grid-cols-2 md:px-16">
        {/* Lado Esquerdo: Imagem */}
        <FadeIn direction="right" distance={100} duration={1.2}>
          <div className="relative h-[400px] w-full overflow-hidden rounded-[2.5rem] border-[6px] border-[#004aad] shadow-xl md:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
              alt="Crianças aprendendo juntas em grupo"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Overlay sutil para integrar a imagem ao papel */}
            <div className="absolute inset-0 bg-[#004aad]/5 mix-blend-multiply"></div>
          </div>
        </FadeIn>

        {/* Lado Direito: Texto */}
        <div className="space-y-8">
          <FadeIn direction="left" delay={0.2}>
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-[#ff3b30]">
                Nossa Essência
              </span>
              <h2 className="mt-2 font-display text-5xl font-black tracking-tight text-[#004aad] md:text-6xl">
                SOBRE NÓS
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-6 text-lg leading-relaxed text-gray-600 md:text-xl">
            <FadeIn direction="up" delay={0.4}>
              <p>
                No Colégio João Pedro, acreditamos que{" "}
                <strong className="text-[#004aad]">
                  aprender é uma experiência
                </strong>{" "}
                que acontece no encontro com o outro.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <p>
                Nosso ensino é baseado no{" "}
                <strong className="text-[#004aad]">sociointeracionismo</strong>,
                onde cada descoberta ganha significado na troca de ideias, na
                curiosidade e na vivência do dia a dia.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <p className="border-l-4 border-[#ff3b30] pl-4 font-medium italic text-gray-800">
                &quot;Mais do que uma escola, somos um espaço de crescimento,
                diálogo e aprendizado.&quot;
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.8}>
            <div className="pt-4">
              <Link
                href="/proposta"
                className="group inline-flex items-center gap-2 text-lg font-bold text-[#004aad] transition-colors hover:text-[#ff3b30]"
              >
                Conheça nossa proposta pedagógica
                <span className="transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
