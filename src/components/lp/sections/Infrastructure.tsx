// src/components/lp/sections/Infrastructure.tsx
import Image from "next/image";
import { FadeIn } from "../ui/FadeIn";
import { SectionTitle } from "../ui/SectionTitle";

const items = [
  {
    label: "Laboratório",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800",
  },
  {
    label: "Espaço Maker",
    img: "https://images.unsplash.com/photo-1633828763399-e29f1cd3f4c1?q=80&w=800",
  },
  {
    label: "Biblioteca",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800",
  },
  {
    label: "Esportes",
    img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800",
  },
  {
    label: "Pátio",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
  },
  {
    label: "Horta",
    img: "https://images.unsplash.com/photo-1588075592765-2feb7de1f86d?q=80&w=800",
  },
];

export const Infrastructure = () => (
  <section className="px-6 py-24">
    <div className="container mx-auto">
      <SectionTitle title="Nosso Espaço" subtitle="Onde a mágica acontece" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-[3rem] border-4 border-white shadow-xl">
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#004aad]/80 to-transparent p-8 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="w-full text-center font-display text-3xl font-black uppercase text-white">
                  {item.label}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);
