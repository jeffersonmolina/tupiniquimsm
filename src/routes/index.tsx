import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Truck, Snowflake, MapPin, Wrench, Award, Star, ArrowRight, ShoppingBag, Users, Beer } from "lucide-react";
import heroImg from "@/assets/hero-chopp.jpg";
import breweryImg from "@/assets/brewery.jpg";
import eventImg from "@/assets/event.jpg";
import barrelsImg from "@/assets/barrels.jpg";
import chopeiraImg from "@/assets/chopeira.jpg";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ChoppGrid } from "@/components/site/ChoppGrid";
import { SITE, wa } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Golden Chopp — Chopp Artesanal Premium em Santa Maria/RS" },
      { name: "description", content: "Chopp artesanal gelado entregue em até 60 minutos em Santa Maria/RS. Chopeiras profissionais, 7 estilos e atendimento premium. Peça agora no WhatsApp." },
      { property: "og:title", content: "Golden Chopp — Chopp Artesanal Premium" },
      { property: "og:description", content: "Chopp artesanal gelado, entrega rápida e chopeiras profissionais em Santa Maria/RS." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Chopp artesanal premium sendo servido"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-background/40" />
        <div className="container-x relative z-10 py-24">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold mb-5">
              <span className="w-8 h-px bg-gold" /> Cervejaria artesanal · Santa Maria/RS
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display leading-[1.05] mb-6 uppercase">
              Atendimento em <span className="text-gold-grad">Santa Maria/RS</span> e região central do estado
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-9 leading-relaxed">
              Entrega rápida, chopeiras profissionais e qualidade premium em cada litro.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={wa("Olá! Quero fazer um pedido de chopp.")} target="_blank" rel="noopener"
                className="btn-gold btn-gold-hover">
                <MessageCircle className="w-5 h-5" /> Pedir no WhatsApp
              </a>
              <Link to="/revendedores" className="btn-ghost-gold hover:bg-gold hover:text-primary-foreground">
                <Users className="w-5 h-5" /> Quero ser revendedor
              </Link>
              <Link to="/choppes" className="btn-ghost-gold hover:bg-gold hover:text-primary-foreground">
                <Beer className="w-5 h-5" /> Ver sabores
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* TRUST */}
      <section className="container-x -mt-12 relative z-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { icon: Truck, t: "Entrega rápida", d: "Em até 60 min" },
            { icon: Snowflake, t: "Sempre gelado", d: "Temperatura ideal" },
            { icon: MapPin, t: "Atendimento regional", d: "Santa Maria e região" },
            { icon: Wrench, t: "Chopeiras pro", d: "Equipamentos inclusos" },
            { icon: Award, t: "+10 anos", d: "Tradição artesanal" },
          ].map((b, i) => (
            <div key={i} className="card-premium p-5 flex items-center gap-3 hover:-translate-y-1 transition-transform">
              <div className="w-11 h-11 rounded-full bg-[var(--gradient-gold)] grid place-items-center text-primary-foreground shrink-0">
                <b.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">{b.t}</div>
                <div className="text-xs text-muted-foreground">{b.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={breweryImg} alt="Cervejaria artesanal Golden Chopp" loading="lazy" width={1600} height={1100}
              className="rounded-2xl shadow-[var(--shadow-elegant)] w-full h-auto" />
            <img src={barrelsImg} alt="Barris de maturação" loading="lazy" width={1400} height={1000}
              className="hidden md:block absolute -bottom-10 -right-6 w-1/2 rounded-2xl border-4 border-background shadow-[var(--shadow-elegant)]" />
          </div>
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Sobre nós</span>
            <h2 className="text-3xl md:text-5xl font-display leading-tight mt-3 mb-5">
              Tradição cervejeira com <span className="text-gold-grad">alma artesanal</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A {SITE.name} nasceu da paixão por chopp de verdade — feito com maltes selecionados,
              lúpulos nobres e água pura da serra gaúcha. Cada barril sai da fábrica com o mesmo
              cuidado de um lote especial.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Mais de uma década aprimorando processos, controle de qualidade rigoroso e uma
              estrutura logística pronta para entregar chopp gelado quando você precisar.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[["+10", "anos de tradição"], ["7", "estilos premium"], ["+500", "eventos atendidos"]].map(([n, l]) => (
                <div key={l} className="text-center card-premium py-5">
                  <div className="text-3xl font-display text-gold-grad">{n}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
            <Link to="/sobre" className="btn-ghost-gold hover:bg-gold hover:text-primary-foreground">
              Conheça nossa história <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CHOPPS */}
      <section className="section-pad bg-[var(--gradient-dark)]">
        <div className="container-x">
          <SectionTitle
            eyebrow="Nossos Chopps"
            title="7 estilos para |cada momento|"
            subtitle="Receitas autorais com maltes nobres e lúpulos selecionados. Escolha o seu e peça pelo WhatsApp."
          />
          <ChoppGrid />
          <div className="text-center mt-12">
            <Link to="/choppes" className="btn-gold btn-gold-hover">
              Ver catálogo completo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* EVENTOS */}
      <section className="section-pad">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Eventos</span>
            <h2 className="text-3xl md:text-5xl font-display leading-tight mt-3 mb-5">
              O <span className="text-gold-grad">chopp perfeito</span> para o seu evento.
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Casamentos, formaturas, corporativos ou aquela festa entre amigos — entregamos
              barris, chopeiras e suporte completo para o seu evento ser inesquecível.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {["Casamentos", "Aniversários", "Formaturas", "Corporativos", "Open Bar", "Feiras", "Festas privadas", "Eventos esportivos"].map((e) => (
                <div key={e} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {e}
                </div>
              ))}
            </div>
            <a href={wa("Olá! Quero um orçamento para meu evento.")} target="_blank" rel="noopener"
              className="btn-gold btn-gold-hover">
              <MessageCircle className="w-5 h-5" /> Solicite um orçamento rápido
            </a>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <img src={eventImg} alt="Evento com chopp artesanal" loading="lazy" width={1600} height={1100}
              className="rounded-2xl col-span-2 shadow-[var(--shadow-elegant)]" />
            <img src={chopeiraImg} alt="Chopeira profissional" loading="lazy" width={1200} height={1400}
              className="rounded-2xl shadow-[var(--shadow-elegant)] h-full object-cover" />
            <img src={barrelsImg} alt="Barris de chopp" loading="lazy" width={1400} height={1000}
              className="rounded-2xl shadow-[var(--shadow-elegant)] h-full object-cover" />
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section-pad bg-[var(--gradient-dark)]">
        <div className="container-x">
          <SectionTitle eyebrow="Como funciona" title="Do |WhatsApp| até o seu copo" />
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "Escolha seu chopp", d: "Veja nosso catálogo e escolha o estilo ideal." },
              { n: "02", t: "Solicite no WhatsApp", d: "Atendimento rápido e orçamento na hora." },
              { n: "03", t: "Receba gelado", d: "Entregamos com chopeira e tudo pronto." },
              { n: "04", t: "Aproveite", d: "Curta seu evento com chopp premium." },
            ].map((s) => (
              <div key={s.n} className="card-premium p-6 relative overflow-hidden">
                <div className="text-5xl font-display text-gold-grad opacity-50 mb-3">{s.n}</div>
                <h3 className="text-lg font-semibold mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="section-pad">
        <div className="container-x">
          <SectionTitle eyebrow="Depoimentos" title="O que dizem |nossos clientes|" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: "Mariana S.", e: "Casamento", t: "Chopp impecável, gelado e cremoso do início ao fim. Atendimento nota 10!" },
              { n: "Lucas P.", e: "Festa de 30 anos", t: "Entrega no horário, chopeira excelente e sabores incríveis. Recomendo demais." },
              { n: "Empresa Vetor", e: "Confraternização", t: "Profissionalismo do começo ao fim. Nossos convidados elogiaram muito." },
            ].map((d, i) => (
              <div key={i} className="card-premium p-7">
                <div className="flex gap-0.5 mb-4 text-gold">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-foreground/90 italic leading-relaxed mb-5">"{d.t}"</p>
                <div className="text-sm">
                  <div className="font-semibold">{d.n}</div>
                  <div className="text-muted-foreground text-xs">{d.e}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVENDEDORES CTA */}
      <section className="section-pad">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
            style={{ background: "var(--gradient-gold)" }}>
            <div className="absolute inset-0 opacity-20"
              style={{ background: "radial-gradient(60% 60% at 50% 0%, white, transparent)" }} />
            <div className="relative z-10 max-w-2xl mx-auto text-primary-foreground">
              <ShoppingBag className="w-10 h-10 mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl font-display mb-4">
                Seja um revendedor Golden Chopp
              </h2>
              <p className="mb-8 text-primary-foreground/85">
                Produto premium, alta saída, suporte comercial completo. Comece sua renda extra com a gente.
              </p>
              <Link to="/revendedores" className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-7 py-3 rounded-full hover:scale-105 transition-transform">
                Quero ser revendedor <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
