import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Phone, Clock, Mail } from "lucide-react";
import { SITE } from "@/lib/site";
import logo from "@/assets/logo-tupiniquim.png";

export function Footer() {
  return (
    <footer className="bg-[var(--gradient-dark)] border-t border-border mt-20">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt={`${SITE.name} logo`} className="h-14 w-auto" />
            <span className="font-display text-lg tracking-[0.18em]"></span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Chopp artesanal premium em {SITE.city}/{SITE.state}. Entrega rápida, chopeiras
            profissionais e qualidade que faz seu evento inesquecível.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gold mb-4 uppercase tracking-wider">
            Navegação
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-gold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/sobre" className="hover:text-gold">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/choppes" className="hover:text-gold">
                Produtos
              </Link>
            </li>
            <li>
              <Link to="/eventos" className="hover:text-gold">
                Eventos
              </Link>
            </li>
            <li>
              <Link to="/revendedores" className="hover:text-gold">
                Revendedores
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gold mb-4 uppercase tracking-wider">Contato</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <Phone className="w-4 h-4 text-gold shrink-0" /> {SITE.phone}
            </li>
            <li className="flex gap-2">
              <Mail className="w-4 h-4 text-gold shrink-0" /> {SITE.email}
            </li>
            <li className="flex gap-2">
              <MapPin className="w-4 h-4 text-gold shrink-0" /> {SITE.address}
            </li>
            <li className="flex gap-2">
              <Clock className="w-4 h-4 text-gold shrink-0" /> {SITE.hours}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gold mb-4 uppercase tracking-wider">
            Atendemos
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {SITE.region}. Entregamos chopp gelado para festas, eventos e bares.
          </p>
          <a
            href={"https://www.instagram.com/hypebeersm"}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 text-sm text-gold hover:underline"
          >
            <Instagram className="w-4 h-4" /> @hypebeersm
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
          </p>
          <p>Beba com moderação. Venda proibida para menores de 18 anos.</p>
        </div>
      </div>
    </footer>
  );
}
