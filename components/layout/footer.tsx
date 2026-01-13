"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn"; // Importando sua animação manual

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    /* Trava do Azul oficial (#004aad) para emendar perfeitamente com o LeadForm.
       Adicionamos 'overflow-hidden' para evitar barras de rolagem durante a animação.
    */
    <footer className="overflow-hidden bg-[#004aad] pt-16 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Coluna 1: Logo e Social - Entrada inicial */}
          <FadeIn direction="up" delay={0.1} distance={30}>
            <div className="space-y-4">
              <h3 className="font-display text-3xl font-bold uppercase tracking-wide">
                Colégio <br /> João Pedro
              </h3>
              <p className="text-blue-100/80">
                Criando um mundo de possibilidades através de um ensino
                humanizado e sociointeracionista.
              </p>
              <div className="flex gap-4 pt-2">
                {[
                  { Icon: Instagram, href: "#" },
                  { Icon: Facebook, href: "#" },
                  { Icon: Linkedin, href: "#" },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    className="rounded-full bg-white/10 p-2 transition-colors hover:bg-[#ff3b30] hover:text-white"
                  >
                    <social.Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Coluna 2: Institucional - Pequeno atraso */}
          <FadeIn direction="up" delay={0.2} distance={30}>
            <div>
              <h4 className="mb-6 text-lg font-bold text-[#ff3b30]">
                Institucional
              </h4>
              <ul className="space-y-3 text-sm text-blue-100/80">
                {[
                  "Sobre Nós",
                  "Proposta Pedagógica",
                  "Estrutura",
                  "Blog",
                  "Trabalhe Conosco",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Coluna 3: Segmentos - Médio atraso */}
          <FadeIn direction="up" delay={0.3} distance={30}>
            <div>
              <h4 className="mb-6 text-lg font-bold text-[#ff3b30]">
                Segmentos
              </h4>
              <ul className="space-y-3 text-sm text-blue-100/80">
                {[
                  "Educação Infantil",
                  "Fundamental I",
                  "Fundamental II",
                  "Ensino Médio",
                  "Período Integral",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Coluna 4: Contato - Último atraso das colunas */}
          <FadeIn direction="up" delay={0.4} distance={30}>
            <div>
              <h4 className="mb-6 text-lg font-bold text-[#ff3b30]">Contato</h4>
              <ul className="space-y-4 text-sm text-blue-100/80">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#ff3b30]" />
                  <span>
                    Rua das Laranjeiras, 123
                    <br />
                    Rio de Janeiro - RJ
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#ff3b30]" />
                  <span>(21) 2222-3333</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-[#ff3b30]" />
                  <span>contato@colegiojoaopedro.com.br</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Barra de Direitos Autorais - Entrada suave final */}
        <FadeIn direction="up" delay={0.6} distance={20}>
          <div className="mt-16 border-t border-white/10 py-8 text-center text-sm text-blue-100/60">
            <p>
              © {currentYear} Colégio João Pedro. Todos os direitos reservados.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
