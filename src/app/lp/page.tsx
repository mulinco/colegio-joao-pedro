"use client";
// Seções da Landing Page
import { Hero } from "@/components/lp/sections/Hero";
import { Problem } from "@/components/lp/sections/Problem";
import { Methodology } from "@/components/lp/sections/Methodology";
import { Infrastructure } from "@/components/lp/sections/Infrastructure";
import { Testimonial } from "@/components/lp/sections/Testimonial";
import { History } from "@/components/lp/sections/History";
import { FAQ } from "@/components/lp/sections/FAQ";
import { ContactForm } from "@/components/lp/sections/ContactForm";
import { Navbar } from "@/components/lp/sections/Navbar";

// Componentes de UI Globais
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";

export default function LandingPage() {
  const scrollToContact = () => {
    document
      .getElementById("matricula")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent font-body text-slate-900">
      {/* Camada: Textura de Papel */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20 mix-blend-multiply"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/crinkled-paper-pinking.png")',
          backgroundSize: "750px",
        }}
      />
      <Navbar onCTA={scrollToContact} />
      <main className="relative z-10">
        <Hero onCTA={scrollToContact} />
        <Problem />
        <Methodology />
        <Infrastructure />
        <Testimonial />
        <History />
        <FAQ />
        <ContactForm />
      </main>

      <WhatsAppButton />
      <BackToTop />

      <footer className="relative z-10 py-12 text-center font-display text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
        © {new Date().getFullYear()} Colégio João Pedro • Ponira Lab
      </footer>
    </div>
  );
}
