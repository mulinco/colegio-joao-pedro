import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-16 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="font-display text-3xl font-bold uppercase tracking-wide">
              Colégio <br /> João Pedro
            </h3>
            <p className="text-blue-100/80">
              Criando um mundo de possibilidades através de um ensino humanizado
              e sociointeracionista.
            </p>
            <div className="flex gap-4 pt-2">
              <Link
                href="#"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-accent hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-accent">
              Institucional
            </h4>
            <ul className="space-y-3 text-sm text-blue-100/80">
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Proposta Pedagógica
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Estrutura
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Trabalhe Conosco
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-accent">Segmentos</h4>
            <ul className="space-y-3 text-sm text-blue-100/80">
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Educação Infantil
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Fundamental I
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Fundamental II
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Ensino Médio
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Período Integral
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-accent">Contato</h4>
            <ul className="space-y-4 text-sm text-blue-100/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span>
                  Rua das Laranjeiras, 123
                  <br />
                  Rio de Janeiro - RJ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <span>(21) 2222-3333</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <span>contato@colegiojoaopedro.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 py-8 text-center text-sm text-blue-100/60">
          <p>
            © {currentYear} Colégio João Pedro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
