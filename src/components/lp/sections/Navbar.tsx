"use client";

import React, { useState, useEffect } from "react";

interface NavbarProps {
  onCTA: () => void;
}

export const Navbar = ({ onCTA }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const nextYear = new Date().getFullYear() + 1;

  // Efeito para mudar o estilo da navbar ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 z-[100] flex w-full justify-center p-4 transition-all duration-500 md:p-6">
      <nav
        className={`flex items-center gap-4 rounded-full border px-4 py-3 shadow-2xl backdrop-blur-xl transition-all duration-500 md:gap-8 md:px-8 ${
          scrolled
            ? "scale-95 border-white/20 bg-white/10" // Quase transparente ao rolar
            : "scale-100 border-transparent bg-white/40" // Estado inicial
        }`}
      >
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#004aad] font-display text-[12px] font-black tracking-widest text-white shadow-lg">
            JP
          </div>
          <span
            className={`hidden font-display text-2xl font-black uppercase tracking-tight transition-colors sm:block ${
              scrolled ? "text-[#004aad]/80" : "text-[#004aad]"
            }`}
          >
            João Pedro
          </span>
        </div>

        {/* DIVIDER */}
        <div
          className={`hidden h-6 w-[1px] transition-colors md:block ${
            scrolled ? "bg-white/20" : "bg-[#004aad]/10"
          }`}
        />

        {/* BOTÃO CTA */}
        <button
          onClick={onCTA}
          className="rounded-full bg-[#ff3b30] px-6 py-2.5 font-display text-[11px] font-black uppercase tracking-[0.2em] text-white shadow-xl transition-all hover:scale-105 hover:bg-[#e0352b] active:scale-95 md:px-8 md:text-[13px]"
        >
          Matrículas {nextYear}
        </button>
      </nav>
    </header>
  );
};
