import Image from "next/image";

export function Hero() {
  const today = new Date();
  const nextYear = today.getFullYear() + 1;

  return (
    <section className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 py-12 pt-32 md:grid-cols-2 md:py-20">
      <div className="space-y-6 text-center md:text-left">
        <div className="inline-flex items-center rounded-full border border-transparent bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
          Matrículas Abertas {nextYear}
        </div>

        <h1 className="text-4xl font-black leading-tight tracking-tight text-[#004aad] md:text-6xl">
          CRIANDO UM MUNDO <br />
          <span className="text-[#ff3b30]">DE POSSIBILIDADES</span>
        </h1>

        <p className="mx-auto max-w-[500px] text-lg text-gray-600 md:mx-0">
          No Colégio João Pedro, o aprendizado acontece no encontro. Um espaço
          de crescimento, diálogo e autonomia para o seu filho.
        </p>

        <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row">
          <button className="h-12 w-full rounded-full bg-[#ff3b30] px-8 text-lg font-medium text-white transition-colors hover:bg-[#d92b22] md:w-auto">
            Agendar Visita
          </button>

          <button className="h-12 w-full rounded-full border border-[#004aad] px-6 font-medium text-[#004aad] transition-colors hover:bg-blue-50 md:w-auto">
            Conhecer a Escola
          </button>
        </div>

        <div className="flex justify-center gap-4 pt-4 text-xs font-medium text-gray-500 md:justify-start">
          <span className="flex items-center gap-1">Sociointeracionismo</span>
          <span className="flex items-center gap-1">Período Integral</span>
        </div>
      </div>

      <div className="relative mx-auto mt-4 flex h-[400px] w-full max-w-[500px] items-center justify-center md:mt-0 md:h-[550px]">
        <div className="absolute z-0 h-[90%] w-full rotate-3 transform rounded-[2.5rem] bg-gradient-to-tr from-[#004aad] to-[#003a8c] shadow-2xl md:w-[90%] md:translate-x-4 md:translate-y-4"></div>

        <div className="absolute -bottom-6 -right-6 z-0 h-24 w-24 rounded-full bg-[#ff3b30] opacity-40 blur-2xl"></div>

        <div className="relative z-10 h-[90%] w-[90%] overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-white shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1674049406486-4b1f6e1845fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Aluno estudando e sorrindo"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
        </div>

        <div className="absolute bottom-6 left-2 z-20 max-w-[180px] rounded-xl border-l-[6px] border-[#ff3b30] bg-white/95 p-4 shadow-lg backdrop-blur md:-left-2 md:bottom-10 md:max-w-[200px]">
          <p className="text-xs font-bold text-[#004aad] md:text-sm">
            &quot;Aprender é uma experiência.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
