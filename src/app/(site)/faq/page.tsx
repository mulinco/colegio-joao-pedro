import type { Metadata } from "next";
import { FAQContent } from "./FAQContent";

export const metadata: Metadata = {
  title: "Dúvidas Frequentes | Colégio João Pedro",
  description:
    "Tire suas dúvidas sobre matrículas, metodologia e horários do Colégio João Pedro.",
};

export default function Page() {
  return <FAQContent />;
}
