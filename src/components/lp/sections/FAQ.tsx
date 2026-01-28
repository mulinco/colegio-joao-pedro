import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";

const items = [
  { q: "Qual a linha pedagógica?", a: "Seguimos a linha Sociointeracionista." },
  {
    q: "Quais os horários?",
    a: "Turnos Matutino, Vespertino e modalidade de Período Integral para todos os segmentos.",
  },
  {
    q: "Como agendar visita?",
    a: "Preencha o formulário abaixo ou fale diretamente no nosso WhatsApp.",
  },
  {
    q: "Oferece robótica?",
    a: "Sim! Laboratório maker integrado com kits de robótica e impressão 3D.",
  },
];

export const FAQ = () => (
  <section className="bg-white/60 px-6 py-24">
    <div className="container mx-auto max-w-3xl">
      <SectionTitle title="Dúvidas Comuns" subtitle="Transparência total" />
      <div className="space-y-2">
        {items.map((item, i) => (
          <FAQItem key={i} q={item.q} a={item.a} />
        ))}
      </div>
    </div>
  </section>
);

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="font-display text-xl font-black uppercase text-[#004aad]">
          {q}
        </span>
        {open ? (
          <Minus className="text-[#ff3b30]" />
        ) : (
          <Plus className="text-[#004aad]" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <p className="pt-4 font-medium italic text-gray-600">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
