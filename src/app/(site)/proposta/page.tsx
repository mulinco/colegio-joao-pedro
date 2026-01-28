// src/app/proposta/page.tsx
import type { Metadata } from "next";
import PropostaContent from "./PropostaContent";

// Aqui o Next.js consegue ler os metadados perfeitamente
export const metadata: Metadata = {
  title: "Proposta Pedagógica | Colégio João Pedro",
  description: "Conheça nossa metodologia sociointeracionista.",
};

export default function Page() {
  return <PropostaContent />;
}
