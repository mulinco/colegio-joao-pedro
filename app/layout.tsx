import type { Metadata } from "next";
import { Karantina, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";

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
        className={`${karantina.variable} ${jakarta.variable} overflow-x-hidden bg-background font-body text-primary antialiased md:overflow-x-visible`}
      >
        {children}
        <ScrollProgress />
        <Header />
        <WhatsAppButton />
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
