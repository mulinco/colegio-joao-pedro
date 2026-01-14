"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Aparece logo após 200px de rolagem (mais rápido)
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    // Limpeza para evitar erros de performance
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-[112px] right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#004aad] text-white shadow-2xl transition-all hover:scale-110 active:scale-95"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={28} strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
