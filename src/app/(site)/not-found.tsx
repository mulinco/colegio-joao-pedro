import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada | Colégio João Pedro",
  description: "Desculpe, a página que você está procurando não existe.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4 py-20">
      <div className="container max-w-2xl text-center">
        <FadeIn direction="up" distance={20}>
          {/* O "404" com a cor principal do colégio */}
          <h1 className="font-display text-9xl font-black text-[#004aad]/10 md:text-[12rem]">
            404
          </h1>

          <div className="-mt-12 space-y-6 md:-mt-20">
            <h2 className="font-display text-3xl font-black text-[#004aad] md:text-5xl">
              Ops! Esse caminho não <br />
              <span className="text-[#ff3b30]">está no mapa.</span>
            </h2>

            <p className="mx-auto max-w-md text-lg text-gray-600">
              Parece que a página que você procura não existe ou foi movida. Não
              se preocupe, o aprendizado continua por outros caminhos!
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
              {/* Botão Principal - Voltando para Home */}
              <Link
                href="/"
                className="flex items-center gap-2 rounded-full bg-[#ff3b30] px-8 py-4 text-lg font-bold text-white transition-all hover:bg-[#e0352b] hover:shadow-lg active:scale-95"
              >
                <Home size={20} />
                Voltar ao Início
              </Link>

              {/* Botão Secundário - Página de Proposta */}
              <Link
                href="/proposta"
                className="flex items-center gap-2 rounded-full border-2 border-[#004aad] px-8 py-4 text-lg font-bold text-[#004aad] transition-all hover:bg-[#004aad] hover:text-white active:scale-95"
              >
                Conhecer a Escola
              </Link>
            </div>
            <div className="mt-12 border-t border-gray-100 pt-8">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#004aad]">
                Talvez você estivesse procurando:
              </p>
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-medium text-gray-500">
                <li>
                  <Link
                    href="/proposta"
                    className="transition-colors hover:text-[#ff3b30]"
                  >
                    Proposta Pedagógica
                  </Link>
                </li>
                <li>
                  <Link
                    href="/estrutura"
                    className="transition-colors hover:text-[#ff3b30]"
                  >
                    Nossa Infraestrutura
                  </Link>
                </li>
                <li>
                  <Link
                    href="/diferenciais"
                    className="transition-colors hover:text-[#ff3b30]"
                  >
                    Diferenciais
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="transition-colors hover:text-[#ff3b30]"
                  >
                    Dúvidas Frequentes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* Detalhe visual lúdico (opcional) */}
        <FadeIn delay={0.4} direction="up">
          <div className="mt-16 flex justify-center gap-8 opacity-20">
            <Search size={40} className="text-[#004aad]" />
            <div className="h-10 w-px bg-gray-300" />
            <div className="flex items-center gap-2 font-display font-bold text-[#004aad]">
              COLÉGIO JOÃO PEDRO
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
