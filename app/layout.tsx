import type { Metadata } from "next";
import { Karantina, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const karantina = Karantina({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-karantina",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Colégio João Pedro",
  description: "Criando um mundo de possibilidades",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${karantina.variable} ${jakarta.variable} bg-background font-body text-primary antialiased`}
      >
        {children}
        <Header />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
