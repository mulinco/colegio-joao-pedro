import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn"; // Importando o componente

export function About() {
  return (
    <section id="sobre" className="overflow-hidden bg-white py-20">
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        {/* Lado Esquerdo: Imagem entrando pela esquerda */}
        <FadeIn direction="right" distance={100} duration={1.2}>
          <div className="relative h-[400px] w-full overflow-hidden rounded-[2.5rem] border-[6px] border-[#004aad] shadow-xl md:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
              alt="Crianças aprendendo juntas em grupo"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#004aad]/10 mix-blend-multiply"></div>
          </div>
        </FadeIn>

        {/* Lado Direito: Texto entrando pela direita com escalonamento (stagger) */}
        <div className="space-y-8">
          <FadeIn direction="left" delay={0.2}>
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-[#ff3b30]">
                Nossa Essência
              </span>
              <h2 className="mt-2 text-5xl font-black tracking-tight text-[#004aad] md:text-6xl">
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
