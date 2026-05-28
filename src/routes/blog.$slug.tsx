import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { POSTS } from "./blog";
import { wa } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Artigo"} | Golden Chopp` },
      { name: "description", content: loaderData?.excerpt ?? "Artigo Golden Chopp" },
      { property: "og:title", content: loaderData?.title ?? "Artigo" },
      { property: "og:description", content: loaderData?.excerpt ?? "" },
      { property: "og:type", content: "article" },
    ],
    links: loaderData ? [{ rel: "canonical", href: `/blog/${loaderData.slug}` }] : [],
  }),
  component: Page,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">Artigo não encontrado.</div>
  ),
});

function Page() {
  const post = Route.useLoaderData();
  return (
    <article className="section-pad">
      <div className="container-x max-w-3xl">
        <Link to="/blog" className="text-sm text-gold">
          ← Blog
        </Link>
        <h1 className="text-4xl md:text-5xl font-display mt-4 mb-4">{post.title}</h1>
        <p className="text-muted-foreground text-lg mb-10">{post.excerpt}</p>
        <div className="prose prose-invert max-w-none text-foreground/85 space-y-5 leading-relaxed">
          <p>
            No mundo do chopp artesanal, pequenos detalhes fazem toda a diferença. Neste guia
            rápido, reunimos as melhores práticas para você aproveitar ao máximo a experiência
            premium da Golden Chopp.
          </p>
          <h2 className="text-2xl font-display text-gold mt-8">Por que isso importa</h2>
          <p>
            O chopp é um produto vivo. Temperatura, pressão e tempo entre o envase e o consumo
            influenciam diretamente no sabor, aroma e cremosidade da espuma. Por isso, contamos com
            logística refrigerada e chopeiras profissionais em todas as entregas.
          </p>
          <h2 className="text-2xl font-display text-gold mt-8">Nossa recomendação</h2>
          <p>
            Se a dúvida persistir, fale com nosso time. Atendemos rapidamente pelo WhatsApp e
            ajudamos você a escolher o melhor para o seu momento — seja uma festa em casa, um grande
            evento ou o reabastecimento do seu ponto de revenda.
          </p>
        </div>
        <div className="mt-12 card-premium p-6 text-center">
          <p className="mb-4 text-muted-foreground">Pronto para experimentar?</p>
          <a
            href={wa("Olá! Vim do blog e quero pedir um chopp.")}
            target="_blank"
            rel="noopener"
            className="btn-gold btn-gold-hover"
          >
            <MessageCircle className="w-5 h-5" /> Pedir no WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
