import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ChoppGrid } from "@/components/site/ChoppGrid";

export const Route = createFileRoute("/choppes")({
  head: () => ({
    meta: [
      { title: "Nossos Chopps — 7 estilos artesanais premium | Golden Chopp" },
      { name: "description", content: "Conheça os 7 estilos de chopp artesanal Golden Chopp: Pilsen, Helles, Weiss, Red Ale, IPA, Bock e Lager. Peça pelo WhatsApp." },
      { property: "og:title", content: "Catálogo de Chopps Artesanais" },
      { property: "og:description", content: "7 estilos premium com IBU, ABV, harmonização e perfil sensorial." },
      { property: "og:url", content: "/choppes" },
    ],
    links: [{ rel: "canonical", href: "/choppes" }],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionTitle
          eyebrow="Catálogo"
          title="Nossos |Chopps Artesanais|"
          subtitle="7 estilos cuidadosamente desenvolvidos para harmonizar com qualquer momento."
        />
        <ChoppGrid />
      </div>
    </section>
  );
}
