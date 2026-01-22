import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { Gallery } from "@/components/sections/gallery";
import { LeadForm } from "@/components/shared/enrollment/lead-form";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fffcf5] bg-transparent">
      <Hero />
      <About />
      <Features />
      <Gallery />
      <LeadForm />
    </div>
  );
}
