import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { wa } from "@/lib/site";
import { TrendingUp, Headphones, Truck, Megaphone, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/revendedores")({
  head: () => ({
    meta: [
      { title: "Seja Revendedor — Chopp Artesanal Premium | Tupiniquim" },
      {
        name: "description",
        content:
          "Revenda chopp artesanal Tupiniquim com alta margem, suporte comercial e logística. Baixo investimento, produto premium e crescimento garantido.",
      },
      { property: "og:title", content: "Programa de Revendedores Tupiniquim" },
      {
        property: "og:description",
        content: "Comece sua renda extra revendendo chopp artesanal premium.",
      },
      { property: "og:url", content: "/revendedores" },
    ],
    links: [{ rel: "canonical", href: "/revendedores" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <section className="section-pad">
        <div className="container-x text-center max-w-3xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">Revendedores</span>
          <h1 className="text-4xl md:text-6xl font-display mt-3 mb-5">
            Comece sua <span className="text-gold-grad">renda extra</span> revendendo chopp
            premiado.
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Produto consolidado, margem atrativa, suporte comercial completo e logística pronta.
            Faça parte da rede Parceiros Tupiniquim.
          </p>
        </div>
      </section>

      <section className="container-x grid md:grid-cols-2  lg:grid-cols-4 gap-5 mb-20">
        {[
          { i: TrendingUp, t: "Alta margem", d: "Lucratividade entre as melhores do mercado." },
          { i: Truck, t: "Logística pronta", d: "Entregamos no seu ponto refrigerado." },
          { i: Headphones, t: "Suporte contínuo", d: "Time comercial dedicado para você." },
          { i: Megaphone, t: "Marketing da marca", d: "Material gráfico e divulgação regional." },
        ].map((b, i) => (
          <div key={i} className="card-premium p-6">
            <div className="w-11 h-11 rounded-full bg-[var(--gradient-gold)] grid place-items-center mb-4 text-primary-foreground">
              <b.i className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-semibold mb-1">{b.t}</h3>
            <p className="text-sm text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </section>

      <section className="section-pad bg-[var(--gradient-dark)]">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionTitle
              center={false}
              eyebrow="Como funciona"
              title="Simples, |direto| e lucrativo"
            />
            <ol className="space-y-5">
              {[
                ["Cadastro rápido", "Preencha o formulário ao lado e nosso time entra em contato."],
                ["Análise comercial", "Avaliamos a região e desenhamos um plano juntos."],
                ["Primeira remessa", "Enviamos chopp, materiais e treinamento básico."],
                ["Cresça com a gente", "Suporte contínuo e novos produtos no portfólio."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-[var(--gradient-gold)] text-primary-foreground grid place-items-center font-semibold shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <FormRevenda />
        </div>
      </section>
    </>
  );
}

function FormRevenda() {
  const [f, setF] = useState({ nome: "", cidade: "", telefone: "", tipo: "Bar / Pub" });
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Quero ser revendedor.\nNome: ${f.nome}\nCidade: ${f.cidade}\nTelefone: ${f.telefone}\nTipo de negócio: ${f.tipo}`;
    window.open(wa(msg), "_blank");
  };
  return (
    <form onSubmit={send} className="card-premium p-7 space-y-4">
      <h3 className="text-xl font-display">Quero ser revendedor</h3>
      <Input
        label="Nome"
        value={f.nome}
        onChange={(v) => setF({ ...f, nome: v })}
        required
        maxLength={80}
      />
      <Input
        label="Cidade"
        value={f.cidade}
        onChange={(v) => setF({ ...f, cidade: v })}
        required
        maxLength={60}
      />
      <Input
        label="Telefone / WhatsApp"
        value={f.telefone}
        onChange={(v) => setF({ ...f, telefone: v })}
        required
        maxLength={20}
      />
      <div>
        <label className="text-xs uppercase tracking-wider text-muted-foreground">
          Tipo de negócio
        </label>
        <select
          value={f.tipo}
          onChange={(e) => setF({ ...f, tipo: e.target.value })}
          className="mt-1 w-full bg-secondary/60 border border-border rounded-lg px-3 py-2.5"
        >
          {["Bar / Pub", "Restaurante", "Distribuidora", "Eventos", "Outro"].map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn-gold btn-gold-hover w-full justify-center">
        <MessageCircle className="w-5 h-5" /> Enviar pelo WhatsApp
      </button>
    </form>
  );
}

function Input({
  label,
  value,
  onChange,
  required,
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        maxLength={maxLength}
        className="mt-1 w-full bg-secondary/60 border border-border rounded-lg px-3 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-gold/60"
      />
    </div>
  );
}
