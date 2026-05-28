import { createFileRoute } from "@tanstack/react-router";
import { SITE, wa } from "@/lib/site";
import { MessageCircle, Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Cervejaria Tupiniquim · Santa Maria/RS" },
      {
        name: "description",
        content:
          "Fale com a Tupiniquim pelo WhatsApp, telefone ou e-mail. Atendemos Santa Maria e região central do RS.",
      },
      { property: "og:title", content: "Contato Tupiniquim" },
      { property: "og:description", content: "Fale agora pelo WhatsApp." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="section-pad">
      <div className="container-x grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-gold">Contato</span>
          <h1 className="text-4xl md:text-5xl font-display mt-3 mb-5">
            Fale com a <span className="text-gold-grad">Tupiniquim</span>
          </h1>
          <p className="text-muted-foreground mb-8">
            O WhatsApp é nosso canal mais rápido — respondemos em minutos durante o expediente.
          </p>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-gold" /> {SITE.phone}
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-gold" /> {SITE.email}
            </li>
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-gold" /> {SITE.address}
            </li>
            <li className="flex gap-3">
              <Clock className="w-5 h-5 text-gold" /> {SITE.hours}
            </li>
            <li className="flex gap-3">
              <Instagram className="w-5 h-5 text-gold" /> @hypebeersm
            </li>
          </ul>
          <a
            href={wa("Olá! Quero falar com a Tupiniquim.")}
            target="_blank"
            rel="noopener"
            className="btn-gold btn-gold-hover mt-8"
          >
            <MessageCircle className="w-5 h-5" /> Falar no WhatsApp
          </a>
        </div>
        <div className="card-premium overflow-hidden">
          <iframe
            title="Mapa Tupiniquim"
            src="https://www.google.com/maps?q=Rua+Silva+Jardim,+1032,+Santa+Maria,+RS&output=embed"
            className="w-full h-full min-h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
