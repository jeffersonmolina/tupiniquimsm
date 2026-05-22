import { CHOPPS } from "@/lib/choppes";
import { wa } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export function ChoppGrid({ limit }: { limit?: number }) {
  const list = limit ? CHOPPS.slice(0, limit) : CHOPPS;
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((c) => (
        <article key={c.slug} className="card-premium group overflow-hidden flex flex-col">
          <div
            className="h-44 relative overflow-hidden"
            style={{
              background: `radial-gradient(120% 100% at 50% 0%, ${c.hue} 0%, oklch(0.14 0.02 250) 75%)`,
            }}
          >
            <div className="absolute inset-0 opacity-30 mix-blend-overlay"
              style={{ background: "radial-gradient(60% 50% at 50% 30%, white, transparent)" }} />
            <div className="absolute bottom-3 left-5 right-5 flex items-end justify-between">
              <h3 className="text-3xl font-display text-white drop-shadow">{c.name}</h3>
              <span className="text-xs px-2 py-1 rounded-full border border-white/30 text-white/90 backdrop-blur">
                {c.intensity}
              </span>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <p className="text-sm text-muted-foreground mb-4">{c.short}</p>
            <dl className="grid grid-cols-3 gap-2 text-center text-xs mb-5">
              <Stat label="IBU" value={String(c.ibu)} />
              <Stat label="ABV" value={c.abv} />
              <Stat label="Cor" value={c.color} />
            </dl>
            <div className="space-y-2 text-xs text-muted-foreground mb-6">
              <p><span className="text-gold/90 font-medium">Perfil:</span> {c.profile}</p>
              <p><span className="text-gold/90 font-medium">Harmonização:</span> {c.pairing}</p>
            </div>
            <a
              href={wa(`Olá! Quero pedir o chopp ${c.name}.`)}
              target="_blank"
              rel="noopener"
              className="mt-auto btn-ghost-gold text-sm hover:bg-gold hover:text-primary-foreground"
            >
              <MessageCircle className="w-4 h-4" /> Pedir {c.name}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-secondary/60 py-2">
      <div className="text-gold font-semibold text-sm">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
