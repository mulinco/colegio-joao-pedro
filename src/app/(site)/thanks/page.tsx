import type { Metadata } from "next";
import { ThanksContent } from "./ThanksContent";

export const metadata: Metadata = {
  title: "Obrigado | Colégio João Pedro",
  description:
    "Agradecemos o seu interesse! Entraremos em contato com você em breve.",
};

export default function Page() {
  return <ThanksContent />;
}
