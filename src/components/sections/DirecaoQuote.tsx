import Image from "next/image";

export default function DirecaoQuote() {
  return (
    <section className="relative z-10 mb-20 mt-32 px-6">
      <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-gray-50 bg-white p-12 shadow-xl md:p-20">
        <div className="text-center">
          {/* Aspas estilizadas */}
          <span className="mb-6 block font-serif text-6xl leading-none text-[#004aad]/20">
            “
          </span>

          <blockquote className="mb-12 px-4 text-2xl font-light italic leading-relaxed text-gray-700 md:px-12 md:text-3xl">
            Nossa missão não é apenas ensinar conteúdos, mas formar seres
            humanos capazes de transformar o mundo ao seu redor com ética,
            inteligência e empatia. O CJP é a extensão da sua casa.
          </blockquote>

          {/* Assinatura Centralizada */}
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-[#004aad] shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1887&auto=format&fit=crop"
                alt="Foto da Diretora Pedagógica"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center">
              <h4 className="text-xl font-bold text-[#004aad]">
                Ana Paula Souza
              </h4>
              <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                Diretora Pedagógica
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
