import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/site/SectionTitle";
import breweryImg from "@/assets/brewery.jpg";
import barrelsImg from "@/assets/barrels.jpg";
import { ShieldCheck, Leaf, Thermometer, Award } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Tupiniquim · Cervejaria Artesanal em Santa Maria/RS" },
      {
        name: "description",
        content: "Conheça a história, missão e processo artesanal da Cervejaria Tupiniquim",
      },
      { property: "og:title", content: "Sobre a Cervejaria Tupiniquim" },
      {
        property: "og:description",
        content: "Tradição cervejeira artesanal e qualidade premium em cada litro.",
      },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden">
        <img
          src={breweryImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="container-x relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">Nossa história</span>
          <h1 className="text-4xl md:text-6xl font-display mt-3 mb-5">
            Paixão por <span className="text-gold-grad">chopp de verdade</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Há mais de duas décadas produzindo chopp premium em Porto Alegre/{SITE.state}, com
            receitas próprias e ingredientes selecionados. Distribuição em {SITE.city}/{SITE.state}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={breweryImg}
            alt="Fábrica Tupiniquim"
            loading="lazy"
            width={1600}
            height={1100}
            className="rounded-2xl shadow-[var(--shadow-elegant)]"
          />
          <div>
            <SectionTitle
              center={false}
              eyebrow="Missão"
              title="Servir o |melhor chopp| da região"
              subtitle="Levar a experiência de uma cervejaria premium para cada festa, bar e ponto de revenda — com qualidade, agilidade e atendimento próximo."
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--gradient-dark)]">
        <div className="container-x">
          <SectionTitle eyebrow="Valores" title="O que nos move" />
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                i: ShieldCheck,
                t: "Qualidade premium",
                d: "Controle de qualidade em todas as etapas.",
              },
              { i: Leaf, t: "Ingredientes nobres", d: "Maltes e lúpulos selecionados." },
              { i: Thermometer, t: "Sempre gelado", d: "Logística refrigerada até seu evento." },
              { i: Award, t: "Tradição", d: "Mais de 27 anos de história artesanal." },
            ].map((v, i) => (
              <div key={i} className="card-premium p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--gradient-gold)] grid place-items-center mx-auto mb-4 text-primary-foreground">
                  <v.i className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-semibold mb-1">{v.t}</h3>
                <p className="text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle
              center={false}
              eyebrow="Processo"
              title="Do |malte ao copo|"
              subtitle="Cada lote passa por moagem, mostura, fervura, fermentação controlada e maturação lenta. Tudo monitorado para garantir o sabor que você ama."
            />
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Seleção rigorosa de maltes e lúpulos",
                "Fermentação em tanques inox controlados",
                "Maturação lenta para perfil sensorial completo",
                "Envase a frio mantendo carbonatação ideal",
                "Logística refrigerada até o ponto de consumo",
              ].map((s) => (
                <li key={s} className="flex gap-3">
                  <span className="text-gold mt-1">●</span> {s}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={barrelsImg}
            alt="Maturação em barris"
            loading="lazy"
            width={1400}
            height={1000}
            className="rounded-2xl shadow-[var(--shadow-elegant)]"
          />
        </div>
      </section>
    </>
  );
}
