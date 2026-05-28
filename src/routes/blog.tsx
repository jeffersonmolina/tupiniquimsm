import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionTitle } from "@/components/site/SectionTitle";

export const POSTS = [
  {
    slug: "como-escolher-chopp-festa",
    title: "Como escolher chopp para festa",
    excerpt: "Guia rápido com estilos, quantidades e dicas para acertar.",
  },
  {
    slug: "quantos-litros-chopp-comprar",
    title: "Quantos litros de chopp comprar?",
    excerpt: "A regra simples que evita sobra e falta no seu evento.",
  },
  {
    slug: "diferenca-ipa-pilsen",
    title: "Diferença entre IPA e Pilsen",
    excerpt: "Aroma, amargor e quando escolher cada um.",
  },
  {
    slug: "como-servir-chopp",
    title: "Como servir chopp corretamente",
    excerpt: "O passo a passo para uma espuma cremosa de verdade.",
  },
  {
    slug: "temperatura-ideal-chopp",
    title: "Temperatura ideal do chopp",
    excerpt: "Entre 0 e 4°C — entenda por quê.",
  },
  {
    slug: "melhores-estilos-churrasco",
    title: "Melhores estilos para churrasco",
    excerpt: "Combinações que valorizam carne e amigos.",
  },
  {
    slug: "harmonizacao-chopp",
    title: "Harmonização de chopp",
    excerpt: "Como combinar estilos com sua comida favorita.",
  },
  {
    slug: "como-funciona-chopeira",
    title: "Como funciona uma chopeira",
    excerpt: "Componentes, refrigeração e cuidados básicos.",
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog do Chopp — Dicas, guias e harmonização | Tupiniquim" },
      {
        name: "description",
        content:
          "Guias práticos sobre chopp artesanal: como escolher, quantos litros comprar, harmonização e cuidados com a chopeira.",
      },
      { property: "og:title", content: "Blog Tupiniquim" },
      { property: "og:description", content: "Tudo sobre chopp artesanal em um só lugar." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionTitle
          eyebrow="Blog"
          title="Dicas e |guias| do mundo do chopp"
          subtitle="Conteúdo prático para clientes, anfitriões e revendedores."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="card-premium p-7 group hover:-translate-y-1 transition-transform"
            >
              <div
                className="h-32 -mx-7 -mt-7 mb-5 rounded-t-2xl"
                style={{ background: "var(--gradient-gold)", opacity: 0.85 }}
              />
              <h3 className="text-xl font-display mb-2 group-hover:text-gold transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground">{p.excerpt}</p>
              <span className="inline-block mt-4 text-xs text-gold uppercase tracking-wider">
                Ler artigo →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
