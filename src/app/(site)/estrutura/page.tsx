import type { Metadata } from "next";
import { EstruturaContent } from "./EstruturaContent";

export const metadata: Metadata = {
  title: "Estrutura | Colégio João Pedro",
  description:
    "Explore nosso ambiente planejado para o desenvolvimento e segurança dos nossos alunos.",
};

export default function Page() {
  return <EstruturaContent />;
}
