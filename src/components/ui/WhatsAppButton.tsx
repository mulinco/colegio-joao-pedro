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
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    // Mostra o balão de conversa após 3 segundos para atrair os pais
    const bubbleTimer = setTimeout(() => {
      setShowBubble(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(bubbleTimer);
    };
  }, []);

  const whatsappUrl = `https://wa.me/5521998382038?text=Olá! Gostaria de mais informações sobre o Colégio João Pedro.`;

  const handleConfirm = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

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

  const bubbleVariants: Variants = {
    hidden: { opacity: 0, x: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
              Olá! 👋 Como podemos ajudar na educação do seu filho hoje? <br />
              <span className="font-bold text-[#004aad]">
                Colégio João Pedro
              </span>
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleConfirm}
                className="flex items-center justify-center gap-2 rounded-full bg-[#25d366] py-4 font-bold text-white transition-all hover:bg-[#1eb954] hover:shadow-lg hover:shadow-green-200 active:scale-95"
              >
                Sim, falar agora <ExternalLink size={18} />
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
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
          {/* Balão de Conversa (Tooltip) */}
          <AnimatePresence>
            {showBubble && !isOpen && (
              <motion.div
                variants={bubbleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative mr-2 max-w-[240px] rounded-2xl rounded-br-none border border-gray-100 bg-white p-4 shadow-xl"
              >
                <button
                  onClick={() => setShowBubble(false)}
                  className="absolute -left-2 -top-2 rounded-full bg-white p-1 text-gray-400 shadow-md hover:text-[#ff3b30]"
                >
                  <X size={12} />
                </button>
                <p className="text-sm font-medium text-gray-700">
                  Olá! 👋 Precisando de ajuda com a matrícula ou dúvidas?
                </p>
                {/* Triângulo do balão */}
                <div className="absolute -bottom-2 right-0 h-4 w-4 bg-white [clip-path:polygon(100%_0,0_0,100%_100%)]"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botão Flutuante */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl transition-all hover:scale-110 active:scale-95"
          >
            <MessageCircle size={32} fill="currentColor" />
            <span className="absolute right-0 top-0 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-[#ff3b30]"></span>
            </span>
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-8 py-4 font-bold text-white shadow-lg shadow-green-900/20 transition-all hover:scale-105 active:scale-95"
        >
          <MessageCircle size={20} fill="currentColor" />
          {label || "Falar no WhatsApp"}
        </button>
      )}

      {mounted && ReactDOM.createPortal(modalContent, document.body)}
    </>
  );
}
