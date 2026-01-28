import type { Metadata } from "next";
import { DiferenciaisContent } from "./DiferenciaisContent";

export const metadata: Metadata = {
  title: "Diferenciais | Colégio João Pedro",
  description:
    "Conheça o que nos torna únicos: acolhimento, ensino forte e nossa comunidade.",
};

export default function Page() {
  return <DiferenciaisContent />;
}
