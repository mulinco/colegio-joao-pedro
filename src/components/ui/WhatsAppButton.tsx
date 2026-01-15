"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { MessageCircle, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface WhatsAppButtonProps {
  variant?: "fixed" | "inline";
  label?: string;
}

export function WhatsAppButton({
  variant = "fixed",
  label,
}: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Solução para o erro de Cascading Renders:
  // Usamos o setTimeout para tirar a atualização da 'fila' imediata do React
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/5521999999999?text=Olá! Gostaria de mais informações.`;

  const handleConfirm = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  // Tipagem explícita para evitar erros no motion.div
  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-[#004aad]/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10 w-full max-w-sm rounded-[2.5rem] border border-white bg-[#fffcf5] p-8 text-center shadow-2xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-6 text-gray-400 transition-colors hover:text-[#ff3b30]"
            >
              <X size={24} />
            </button>

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#25d366]/10 text-[#25d366]">
              <MessageCircle size={40} fill="currentColor" />
            </div>

            <h3 className="mb-2 text-2xl font-black text-[#004aad]">
              Iniciar Conversa?
            </h3>
            <p className="mb-8 leading-relaxed text-gray-600">
              Você será levado ao WhatsApp oficial do <br />
              <span className="font-bold text-[#004aad]">
                Colégio João Pedro
              </span>
              .
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleConfirm}
                className="flex items-center justify-center gap-2 rounded-full bg-[#25d366] py-4 font-bold text-white transition-all hover:bg-[#1eb954] hover:shadow-lg hover:shadow-green-200 active:scale-95"
              >
                Sim, iniciar agora <ExternalLink size={18} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="py-2 text-sm font-bold text-gray-400 transition-colors hover:text-[#004aad]"
              >
                Agora não
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {variant === "fixed" ? (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl transition-all hover:scale-110 active:scale-95"
        >
          <MessageCircle size={32} fill="currentColor" />
          <span className="absolute right-0 top-0 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex h-4 w-4 rounded-full bg-[#ff3b30]"></span>
          </span>
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-8 py-4 font-bold text-white shadow-lg shadow-green-900/20 transition-all hover:scale-105 active:scale-95"
        >
          <MessageCircle size={20} fill="currentColor" />
          {label || "Falar no WhatsApp"}
        </button>
      )}

      {/* Renderização via Portal após a montagem segura no cliente */}
      {mounted && ReactDOM.createPortal(modalContent, document.body)}
    </>
  );
}
