"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Componente do Ícone Oficial do WhatsApp
const WhatsAppIcon = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.122.554 4.197 1.604 6.04L0 24l6.117-1.605a11.782 11.782 0 005.925 1.599h.005c6.635 0 12.03-5.394 12.033-12.034a11.812 11.812 0 00-3.568-8.508z" />
  </svg>
);

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
              {/* Ícone no Modal */}
              <WhatsAppIcon size={40} />
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
                <div className="absolute -bottom-2 right-0 h-4 w-4 bg-white [clip-path:polygon(100%_0,0_0,100%_100%)]"></div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setIsOpen(true)}
            className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl transition-all hover:scale-110 active:scale-95"
          >
            {/* Ícone no Botão Fixo */}
            <WhatsAppIcon size={32} />
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
          {/* Ícone no Botão Inline */}
          <WhatsAppIcon size={20} />
          {label || "Falar no WhatsApp"}
        </button>
      )}

      {mounted && ReactDOM.createPortal(modalContent, document.body)}
    </>
  );
}
