import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { SITE } from "@/lib/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-display text-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          O conteúdo que você procura não existe ou foi movido.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-gold btn-gold-hover">
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Esta página não carregou</h1>
        <p className="mt-2 text-sm text-muted-foreground">Tente novamente em instantes.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-gold btn-gold-hover"
          >
            Tentar de novo
          </button>
          <a href="/" className="btn-ghost-gold">
            Início
          </a>
        </div>
      </div>
    </div>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE.name,
  image: "/og.jpg",
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
    addressLocality: SITE.city,
    addressRegion: SITE.state,
    addressCountry: "BR",
  },
  areaServed: SITE.region,
  priceRange: "$$",
  openingHours: "Mo-Sa 09:00-22:00",
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tupiniquim — Chopp Artesanal Premium em Santa Maria/RS" },
      {
        name: "description",
        content:
          "Chopp artesanal premium em Santa Maria/RS. Entrega rápida, chopeiras profissionais e qualidade gelada para festas, eventos e revendedores.",
      },
      { name: "theme-color", content: "#0f1422" },
      { property: "og:title", content: "Tupiniquim — Chopp Artesanal Premium" },
      {
        property: "og:description",
        content: "Entrega rápida, chopeiras profissionais e chopp sempre gelado em Santa Maria/RS.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Tupiniquim" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700;900&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <a href="#conteudo-principal" className="skip-link">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo-principal" className="flex-1 pt-16 md:pt-20" tabIndex={-1}>
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </QueryClientProvider>
  );
}
