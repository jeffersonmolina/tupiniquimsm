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
            className="h-72 relative overflow-hidden flex items-end justify-center"
            style={{
              background: `radial-gradient(120% 90% at 50% 10%, ${c.accent}55 0%, oklch(0.14 0.02 250) 70%)`,
            }}
          >
            <div
              className="absolute inset-0 opacity-20 mix-blend-overlay"
              style={{ background: "radial-gradient(60% 50% at 50% 20%, white, transparent)" }}
            />
            <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full border border-white/30 text-white/90 backdrop-blur">
              {c.intensity}
            </span>
            <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-black/40 text-gold backdrop-blur">
              {c.volume}
            </span>
            <img
              src={c.image}
              alt={`Chopp ${c.name} Tupiniquim - ${c.volume}`}
              loading="lazy"
              className="relative z-10 h-[260px] w-auto object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.55)] transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105"
            />
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="text-2xl font-display">{c.name}</h3>
              <span className="text-xs text-gold/80">{c.color}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{c.short}</p>
            <dl className="grid grid-cols-3 gap-2 text-center text-xs mb-5">
              <Stat label="IBU" value={String(c.ibu)} />
              <Stat label="ABV" value={c.abv} />
              <Stat label="Volume" value={c.volume.replace("Barrilete ", "")} />
            </dl>
            <div className="space-y-2 text-xs text-muted-foreground mb-6">
              <p><span className="text-gold/90 font-medium">Perfil:</span> {c.profile}</p>
              <p><span className="text-gold/90 font-medium">Harmonização:</span> {c.pairing}</p>
            </div>
            <a
              href={wa(`Olá! Quero pedir o Chopp ${c.name} (${c.volume}) da Tupiniquim.`)}
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
