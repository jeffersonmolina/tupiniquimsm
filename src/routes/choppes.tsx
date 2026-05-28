import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ChoppGrid } from "@/components/site/ChoppGrid";
import { CHOPPS, type Chopp } from "@/lib/choppes";

export const Route = createFileRoute("/choppes")({
  head: () => ({
    meta: [
      { title: "Nossos Chopes — +10 estilos artesanais premium | Cervejaria Tupiniquim" },
      {
        name: "description",
        content:
          "Conheça os estilos de chopp: Pilsen, Helles, Weiss, Red Ale, IPA, Bock e Lager. Peça pelo WhatsApp.",
      },
      { property: "og:title", content: "Catálogo de Chopes Artesanais" },
      {
        property: "og:description",
        content: "Estilos premium com IBU, ABV, harmonização e perfil sensorial.",
      },
      { property: "og:url", content: "/choppes" },
    ],
    links: [{ rel: "canonical", href: "/choppes" }],
  }),
  component: Page,
});

function Page() {
  const groups: { title: string; subtitle: string; products: Chopp[] }[] = [
    {
      title: "Chopp",
      subtitle: "Barriletes prontos para servir, com estilos leves, intensos e refrescantes.",
      products: CHOPPS.filter((product) => product.category === "chopp"),
    },
    {
      title: "Cerveja",
      subtitle: "Rótulos em 600 ml para levar a experiência Tupiniquim para qualquer momento.",
      products: CHOPPS.filter((product) => product.category === "cerveja"),
    },
    {
      title: "Barril",
      subtitle: "Barris para eventos, bares e festas com chopeira profissional.",
      products: CHOPPS.filter((product) => product.category === "barril"),
    },
  ];

  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionTitle
          eyebrow="Catálogo"
          title="Nossos |Produtos|"
          subtitle="+10 estilos cuidadosamente desenvolvidos para harmonizar com qualquer momento."
        />
        <div className="space-y-16">
          {groups.map((group) => (
            <section key={group.title}>
              <div className="mb-7 max-w-2xl">
                <span className="text-xs uppercase tracking-[0.3em] text-gold">Produtos</span>
                <h2 className="mt-2 text-3xl md:text-4xl font-display">{group.title}</h2>
                <p className="mt-2 text-sm md:text-base text-muted-foreground">
                  {group.subtitle}
                </p>
              </div>
              <ChoppGrid products={group.products} />
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
