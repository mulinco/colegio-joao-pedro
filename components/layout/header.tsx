"use client"; // Necessário para detectar o scroll e interação do menu

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ícones comuns, se não tiver, me avise que troco por SVG

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efeito para mudar a cor do header quando rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 py-3 shadow-sm backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-black tracking-tighter text-[#004aad]"
        >
          {/* Se tiver a imagem do logo, use <Image /> aqui. Por enquanto texto: */}
          <span className="rounded bg-[#004aad] px-2 py-1 text-white">CJP</span>
          <span>Colégio João Pedro</span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#sobre"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-[#004aad]"
          >
            A Escola
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-[#004aad]"
          >
            Diferenciais
          </Link>
          <Link
            href="#galeria"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-[#004aad]"
          >
            Estrutura
          </Link>
          <Link
            href="#contato"
            className="text-sm font-medium text-gray-600 transition-colors hover:text-[#004aad]"
          >
            Contato
          </Link>

          <button className="rounded-full bg-[#004aad] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-700">
            Portal do Aluno
          </button>
        </nav>

        {/* BOTÃO MOBILE (HAMBURGUER) */}
        <button
          className="text-[#004aad] md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE EXPANDIDO */}
      {isMobileMenuOpen && (
        <div className="animate-in slide-in-from-top-5 absolute left-0 right-0 top-full flex flex-col gap-4 border-t border-gray-100 bg-white p-4 shadow-xl md:hidden">
          <Link
            href="#sobre"
            className="block py-2 text-gray-600 hover:text-[#004aad]"
          >
            A Escola
          </Link>
          <Link
            href="#features"
            className="block py-2 text-gray-600 hover:text-[#004aad]"
          >
            Diferenciais
          </Link>
          <Link
            href="#galeria"
            className="block py-2 text-gray-600 hover:text-[#004aad]"
          >
            Estrutura
          </Link>
          <button className="w-full rounded-lg bg-[#004aad] py-3 font-bold text-white">
            Portal do Aluno
          </button>
        </div>
      )}
    </header>
  );
}
