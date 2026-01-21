"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FlowingMenu from "@/components/ui/FlowingMenu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { text: "A Escola", link: isHome ? "#sobre" : "/#sobre" },
    { text: "Proposta", link: "/proposta" },
    { text: "Diferenciais", link: "/diferenciais" },
    { text: "Infraestrutura", link: "/estrutura" },
    { text: "Dúvidas", link: "/faq" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex justify-center p-6 transition-all duration-500">
      {/* Container Flutuante estilo 'Pill' */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`relative flex items-center gap-2 rounded-full border px-3 py-2 transition-all duration-500 ${
          isScrolled
            ? "border-gray-200 bg-white/70 shadow-2xl backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* LOGO COMPACTA */}
        <Link href="/" className="flex items-center gap-2 px-3 py-1">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#004aad] text-[10px] font-black text-white shadow-lg">
            CJP
          </span>
          {!isScrolled && (
            <span className="hidden text-sm font-black tracking-tighter text-[#004aad] md:block">
              João Pedro
            </span>
          )}
        </Link>

        {/* NAVEGAÇÃO DESKTOP COM INDICADOR DESLIZANTE */}
        <div className="hidden items-center gap-1 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.text}
              href={item.link}
              onMouseEnter={() => setHoveredLink(item.text)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-600 transition-colors hover:text-[#004aad]"
            >
              {item.text}
              {/* Indicador Animado (Background Pill) */}
              {hoveredLink === item.text && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 z-[-1] rounded-full bg-[#004aad]/5"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 pl-2">
          <Link
            href="/#contato"
            className="rounded-full bg-[#ff3b30] px-5 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            Matrículas
          </Link>

          {/* BOTÃO MENU MOBILE */}
          <button
            className="rounded-full p-2 text-[#004aad] hover:bg-gray-100 md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.nav>

      {/* MENU MOBILE (FlowingMenu) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[110]"
          >
            <FlowingMenu
              items={menuItems.map((i) => ({
                ...i,
                image:
                  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop",
              }))}
              onItemClick={() => setIsMobileMenuOpen(false)}
              speed={20}
              textColor="#004aad"
              marqueeTextColor="#fff"
              marqueeBgColor="#ff3b30"
              bgColor="#fff"
              borderColor="#eee"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute right-8 top-8 z-[120] rounded-full bg-[#ff3b30] p-4 text-white shadow-2xl"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
