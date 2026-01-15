import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about"; // <--- Importe aqui
import { Features } from "@/components/sections/features";
import { Gallery } from "@/components/sections/gallery";
import { LeadForm } from "@/components/sections/lead-form";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Features />
      <Gallery />
      <LeadForm />
    </div>
  );
}
