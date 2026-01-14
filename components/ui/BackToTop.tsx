"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);

  useEffect(() => {
    // 1. Controle de Visibilidade por Scroll
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 2. Observer para detectar o Footer (Troca de cor)
    const footer = document.querySelector("footer");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverFooter(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footer) observer.observe(footer);
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (footer) observer.unobserve(footer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className={`fixed bottom-[112px] right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full border border-white/20 shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 ${
            isOverFooter
              ? "bg-[#004aad]/40 text-white"
              : "bg-[#004aad]/20 text-[#004aad]"
          }`}
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={32} strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
