import { CountUp } from "./CountUp";

const stats = [
  { icon: "⚙️", n: 500, suffix: "+", label: "Units Supplied" },
  { icon: "🏭", n: 200, suffix: "+", label: "Industrial Clients" },
  { icon: "📅", n: 15, suffix: "+", label: "Years Experience" },
  { icon: "🔧", n: 24, suffix: "/7", label: "Technical Support" },
];

export function StatsStrip() {
  return (
    <section className="relative bg-[var(--brand)] text-white">
      <div className="container-x grid grid-cols-2 gap-y-10 py-16 md:grid-cols-4 md:py-20">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl">{s.icon}</div>
            <div className="mt-2 font-display text-5xl font-bold leading-none tracking-tight md:text-[52px]">
              <CountUp to={s.n} suffix={s.suffix} />
            </div>
            <div className="label-eyebrow mt-3 text-white/80">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
