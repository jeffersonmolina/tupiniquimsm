export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-12`}>
      {eyebrow && (
        <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-display leading-tight">
        {title.split("|").map((p, i) =>
          i % 2 === 1 ? (
            <span key={i} className="text-gold-grad">
              {p}
            </span>
          ) : (
            <span key={i}>{p}</span>
          ),
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
