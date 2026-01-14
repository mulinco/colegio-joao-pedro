// components/ui/WhatsAppButton.tsx
"use client";

import { MessageCircle } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export function WhatsAppButton() {
  const buttonRef = useRef(null);

  useGSAP(
    () => {
      // Efeito de "respiração" no botão
      gsap.to(buttonRef.current, {
        scale: 1.1,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: buttonRef }
  );

  return (
    <a
      href="https://wa.me/5521999999999" // Troque pelo número real do colégio
      target="_blank"
      rel="noopener noreferrer"
      ref={buttonRef}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl transition-all hover:rotate-12"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />

      {/* Efeito de Pulsação (Ping) */}
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25d366] opacity-40"></span>
    </a>
  );
}
