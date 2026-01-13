"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
      );

      gsap.fromTo(
        linksRef.current,
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.1,
        }
      );
    }
  }, [isMobileMenuOpen]);

  // Função tipada corretamente para o TypeScript
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  const menuItems = [
    { name: "A Escola", href: "#sobre" },
    { name: "Diferenciais", href: "#features" },
    { name: "Estrutura", href: "#galeria" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/10 bg-white/10 py-3 shadow-lg backdrop-blur-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-black tracking-tighter text-[#004aad]"
        >
          <span className="rounded bg-[#004aad] px-2 py-1 text-white shadow-xl">
            CJP
          </span>
          <span
            className={`overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out ${isScrolled ? "max-w-0 opacity-0" : "max-w-[300px] opacity-100"}`}
          >
            Colégio João Pedro
          </span>
        </Link>

        <nav
          className={`hidden items-center gap-8 transition-all duration-500 ${isScrolled ? "pointer-events-none -translate-y-2 opacity-0" : "translate-y-0 opacity-100 md:flex"}`}
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-bold text-gray-700 transition-colors hover:text-[#ff3b30]"
            >
              {item.name}
            </Link>
          ))}
          <button className="rounded-full bg-[#004aad] px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-blue-800 active:scale-95">
            Portal do Aluno
          </button>
        </nav>

        <button
          className={`rounded-lg p-2 text-[#004aad] transition-all duration-300 hover:bg-white/20 ${isScrolled ? "block" : "md:hidden"}`}
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            if (!isMobileMenuOpen) linksRef.current = [];
          }}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="absolute left-0 right-0 top-full flex flex-col gap-2 border-t border-white/20 bg-white/95 p-6 shadow-2xl backdrop-blur-2xl"
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              /* @ts-expect-error - O Link do Next.js às vezes gera conflito de tipos com refs do GSAP */
              ref={addToRefs}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block border-b border-gray-100 py-4 text-xl font-bold text-gray-800 transition-colors hover:text-[#004aad]"
            >
              {item.name}
            </Link>
          ))}
          <div ref={addToRefs}>
            <button className="mt-4 w-full rounded-xl bg-[#004aad] py-4 text-lg font-bold text-white shadow-lg transition-transform active:scale-95">
              Portal do Aluno
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
