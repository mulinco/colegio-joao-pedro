// app/(site)/layout.tsx
import { Header } from "@/components/layout/header";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      <Header />
      {children}
      <WhatsAppButton />
      <Footer />
      <BackToTop />
    </>
  );
}
