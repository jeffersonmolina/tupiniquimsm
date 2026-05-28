import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { wa } from "@/lib/site";
import { MessageCircle, Calculator } from "lucide-react";
import eventImg from "@/assets/event.jpg";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Chopp para Eventos em Santa Maria/RS — Casamentos, Formaturas | Golden Chopp" },
      {
        name: "description",
        content:
          "Chopp artesanal para casamentos, formaturas, corporativos e festas em Santa Maria/RS. Chopeiras profissionais e calculadora de litros.",
      },
      { property: "og:title", content: "Chopp para Eventos" },
      {
        property: "og:description",
        content: "O chopp perfeito para casamentos, formaturas e festas.",
      },
      { property: "og:url", content: "/eventos" },
    ],
    links: [{ rel: "canonical", href: "/eventos" }],
  }),
  component: Page,
});

const TYPES = [
  { t: "Casamentos", d: "Open bar de chopp para o dia mais especial." },
  { t: "Aniversários", d: "Festa redonda com chopp gelado a noite toda." },
  { t: "Formaturas", d: "Energia e qualidade para celebrar a conquista." },
  { t: "Corporativos", d: "Confraternizações com toque premium." },
  { t: "Open Bar", d: "Pacotes completos com chopeira e atendimento." },
  { t: "Feiras", d: "Estrutura para grandes públicos." },
  { t: "Festas privadas", d: "Atendimento personalizado." },
  { t: "Eventos esportivos", d: "Chopp gelado para a torcida." },
];

function Page() {
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <img
          src={eventImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="container-x relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">Eventos</span>
          <h1 className="text-4xl md:text-6xl font-display mt-3 mb-5">
            Chopp para o <span className="text-gold-grad">seu evento</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Chopeiras profissionais, barris gelados e suporte completo para sua festa.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TYPES.map((e) => (
              <div key={e.t} className="card-premium p-6 hover:-translate-y-1 transition-transform">
                <h3 className="font-semibold text-lg mb-2 text-gold">{e.t}</h3>
                <p className="text-sm text-muted-foreground">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Calculadora />

      <section className="section-pad">
        <div className="container-x text-center">
          <SectionTitle
            eyebrow="Vamos conversar"
            title="Solicite um |orçamento rápido|"
            subtitle="Conta pra gente sobre seu evento e enviamos uma proposta personalizada em minutos."
          />
          <a
            href={wa("Olá! Quero um orçamento para meu evento.")}
            target="_blank"
            rel="noopener"
            className="btn-gold btn-gold-hover"
          >
            <MessageCircle className="w-5 h-5" /> Solicitar orçamento no WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

function Calculadora() {
  const [people, setPeople] = useState(30);
  const [hours, setHours] = useState(2);
  const litersPerHour = 0.4; // estimativa por pessoa/hora
  const totalLiters = Math.ceil(people * hours * litersPerHour);
  const barrels30 = Math.ceil(totalLiters / 30);
  const barrels50 = Math.ceil(totalLiters / 50);
  const style =
    totalLiters < 60
      ? "Pilsen ou Helles"
      : totalLiters < 200
        ? "Pilsen, IPA e Weiss"
        : "Mix premium (Pilsen, IPA, Red Ale e Weiss)";

  return (
    <section className="section-pad bg-[var(--gradient-dark)]">
      <div className="container-x">
        <SectionTitle
          eyebrow="Calculadora"
          title="Quantos |litros| seu evento precisa?"
          subtitle="Informe convidados e duração — sugerimos a quantidade ideal e o mix recomendado."
        />
        <div className="card-premium p-6 md:p-10 max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            <Field
              label="Convidados"
              value={people}
              setValue={setPeople}
              min={10}
              max={2000}
              step={10}
            />
            <Field
              label="Duração (horas)"
              value={hours}
              setValue={setHours}
              min={1}
              max={12}
              step={1}
            />
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-4 text-center">
            <Result label="Litros sugeridos" value={`${totalLiters} L`} />
            <Result label="Barris 30L" value={`${barrels30}`} />
            <Result label="Barris 50L" value={`${barrels50}`} />
          </div>
          <div className="mt-6 p-4 rounded-xl bg-secondary/60 text-sm text-center">
            <Calculator className="w-4 h-4 inline mr-1 text-gold" />
            <span className="text-muted-foreground">Mix recomendado:</span>{" "}
            <span className="text-gold font-medium">{style}</span>
          </div>
          <div className="text-center mt-8">
            <a
              href={wa(
                `Olá! Quero orçamento para ${people} pessoas, ${hours}h — cerca de ${totalLiters}L.`,
              )}
              target="_blank"
              rel="noopener"
              className="btn-gold btn-gold-hover"
            >
              <MessageCircle className="w-5 h-5" /> Pedir orçamento com esses dados
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  setValue,
  min,
  max,
  step,
}: {
  label: string;
  value: number;
  setValue: (n: number) => void;
  min: number;
  max: number;
  step: number;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <div className="mt-2 flex items-center gap-3">
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => setValue(Math.max(min, Math.min(max, Number(e.target.value) || min)))}
          className="w-28 bg-secondary/60 border border-border rounded-lg px-3 py-2 text-foreground"
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="flex-1 accent-[var(--gold)]"
        />
      </div>
    </div>
  );
}

function Result({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-secondary/60 py-5">
      <div className="text-3xl font-display text-gold-grad">{value}</div>
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
