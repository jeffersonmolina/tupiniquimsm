import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { SITE, wa } from "@/lib/site";
import logo from "@/assets/logo-tupiniquim.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/choppes", label: "Produtos" },
  { to: "/eventos", label: "Eventos" },
  { to: "/revendedores", label: "Revendedores" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Ir para a página inicial">
          <img
            src={logo}
            alt=""
            className="h-11 md:h-14 w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-105"
          />
          <span className="hidden sm:inline font-display text-base md:text-lg tracking-[0.18em]"></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Navegação principal">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={wa("Olá! Quero fazer um pedido de chopp.")}
            target="_blank"
            rel="noopener"
            className="hidden md:inline-flex btn-gold btn-gold-hover text-sm py-2.5 px-5"
          >
            <MessageCircle className="w-4 h-4" />
            Pedir no WhatsApp
          </a>
          <button
            className="lg:hidden p-2 text-foreground"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in"
      >
        <div className="container-x py-6 flex flex-col gap-4">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="text-base text-foreground/90 hover:text-gold py-1"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={wa("Olá! Quero fazer um pedido de chopp.")}
            target="_blank"
            rel="noopener"
            className="btn-gold btn-gold-hover mt-2 justify-center"
          >
            <MessageCircle className="w-4 h-4" /> Pedir no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
