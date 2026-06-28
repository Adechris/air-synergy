import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cog,
  Wrench,
  Wind,
  Factory,
  Settings,
  Hammer,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import productsHero from "../assets/products-hero.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Services — Air Synergy Limited" },
      {
        name: "description",
        content:
          "Complete range of air compressor solutions: piston, screw, oil-free, parts and full maintenance services.",
      },
      { property: "og:title", content: "Products & Services — Air Synergy Limited" },
      {
        property: "og:description",
        content: "Piston, screw, oil-free compressors and full servicing across Nigeria.",
      },
      { property: "og:image", content: productsHero },
    ],
  }),
  component: ProductsPage,
});

const products = [
  {
    id: "piston",
    Icon: Cog,
    name: "Piston Air Compressors",
    short: "Reliable reciprocating compressors for workshop and light industrial duty.",
    full: "Single and two-stage reciprocating compressors built to last. Ideal for workshops, automotive repair, small fabrication and intermittent industrial duty.",
    specs: [
      ["Power", "1 – 50 HP"],
      ["Pressure", "8 – 15 bar"],
      ["Tank", "100L – 500L"],
      ["Type", "Belt or direct drive"],
    ],
    industries: ["Workshops", "Automotive", "Carpentry", "Small Fabrication"],
  },
  {
    id: "screw",
    Icon: Settings,
    name: "Screw Air Compressors",
    short: "Heavy-duty rotary screw units for continuous industrial operation.",
    full: "Rotary screw compressors engineered for 24/7 industrial use. Variable speed and fixed-speed options for the lowest total cost of ownership.",
    specs: [
      ["Power", "50 – 500 HP"],
      ["Pressure", "7 – 13 bar"],
      ["Drive", "VSD / Fixed"],
      ["Cooling", "Air / Water"],
    ],
    industries: ["Manufacturing", "Textile", "Plastics", "Heavy Industry"],
  },
  {
    id: "oil-free",
    Icon: Wind,
    name: "Oil-Free Compressors",
    short: "Class-zero clean air for food, pharma and medical applications.",
    full: "Certified oil-free compressors that deliver contamination-free air. Essential for industries where air purity is non-negotiable.",
    specs: [
      ["Certification", "ISO 8573-1 Class 0"],
      ["Power", "5 – 200 HP"],
      ["Application", "Food, Pharma, Medical"],
      ["Filtration", "Multi-stage"],
    ],
    industries: ["Food & Beverage", "Pharmaceutical", "Hospitals", "Electronics"],
  },
  {
    id: "systems",
    Icon: Factory,
    name: "Industrial Compressor Systems",
    short: "Custom-engineered compressed air systems for full-scale plant operations.",
    full: "End-to-end compressed air system design including compressors, dryers, receivers, filtration and distribution piping.",
    specs: [
      ["Design", "Custom-engineered"],
      ["Capacity", "High volume"],
      ["Includes", "Dryers, filters, piping"],
      ["Service", "Turnkey install"],
    ],
    industries: ["Process Plants", "Power Generation", "Cement & Mining", "Large Manufacturing"],
  },
  {
    id: "parts",
    Icon: Hammer,
    name: "Parts & Accessories",
    short: "Genuine OEM parts, filters, belts and valves for every brand.",
    full: "We stock and supply OEM-grade replacement parts for all major compressor brands — keeping your equipment in peak condition.",
    specs: [
      ["Stock", "OEM parts"],
      ["Range", "All major brands"],
      ["Includes", "Filters, belts, valves, oils"],
      ["Delivery", "Nationwide"],
    ],
    industries: ["All Compressor Users"],
  },
  {
    id: "service",
    Icon: Wrench,
    name: "Maintenance & Servicing",
    short: "Preventive maintenance and emergency response on all major brands.",
    full: "Scheduled preventive maintenance contracts and emergency call-out services. Our engineers know every leading compressor brand.",
    specs: [
      ["Plans", "Preventive contracts"],
      ["Response", "Emergency call-out"],
      ["Coverage", "All brands"],
      ["Reporting", "Detailed logs"],
    ],
    industries: ["Manufacturing", "Hospitals", "Workshops", "Commercial"],
  },
];

const otherServices = [
  {
    icon: "🏗️",
    title: "Cement Supply",
    text: "Quality cement brands supplied in bulk or retail quantities.",
  },
  {
    icon: "🌾",
    title: "Foodstuffs & Commodities",
    text: "Reliable supply of essential food items and commodities.",
  },
  {
    icon: "📦",
    title: "General Merchandise",
    text: "Other essential goods — contact us with your requirements.",
  },
];

function ProductsPage() {
  return (
    <>
      <section className="relative -mt-[72px] flex min-h-[60svh] items-end overflow-hidden bg-[var(--ink)]">
        <img
          src={productsHero}
          alt="Engineer inspecting industrial compressor"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-[var(--ink)]/40" />
        <div className="container-x relative z-10 pb-20 pt-36 text-white">
          <Reveal>
            <div className="label-eyebrow text-[var(--brand-2)]">Products & Services</div>
            <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase leading-[0.95]">
              Complete Air Compressor <span className="text-[var(--brand-2)]">Solutions</span>
            </h1>
            <p className="mt-6 max-w-2xl text-white/80">
              From compact piston units to full plant-scale systems — and the parts, servicing and
              engineering support that keep them running.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-[var(--light-grey)] py-24">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.id} dir="up" delay={i * 0.05}>
                <a
                  href={`#${p.id}`}
                  className="group flex h-full flex-col border-t-[3px] border-[var(--brand)] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_-10px_rgba(26,107,60,0.35)]"
                >
                  <p.Icon className="h-10 w-10 text-[var(--brand)]" />
                  <h3 className="mt-5 font-display text-xl font-bold uppercase">{p.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--steel)]">
                    {p.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] group-hover:text-[var(--brand-2)]">
                    Read more <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DETAIL SECTIONS */}
      <section className="bg-white">
        {products.map((p, i) => (
          <div
            key={p.id}
            id={p.id}
            className={`${i % 2 ? "bg-[var(--light-grey)]" : "bg-white"} scroll-mt-24 border-t border-[var(--border)] py-20`}
          >
            <div className="container-x grid items-start gap-14 lg:grid-cols-[1fr_1.3fr]">
              <Reveal dir="left">
                <div className="bg-[var(--ink)] p-10 text-white">
                  <p.Icon className="h-12 w-12 text-[var(--brand-2)]" />
                  <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-tight">
                    {p.name}
                  </h2>
                  <p className="mt-4 leading-relaxed text-white/80">{p.full}</p>
                  {/* <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 bg-[var(--brand-2)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:bg-white hover:text-[var(--brand)]"
                  >
                    Request Quote <ArrowRight className="h-4 w-4" />
                  </Link> */}
                </div>
              </Reveal>
              <Reveal dir="right">
                <div className="label-eyebrow text-[var(--brand)]">Key Specifications</div>
                <table className="mt-4 w-full border border-[var(--border)] text-sm">
                  <tbody>
                    {p.specs.map(([k, v]) => (
                      <tr key={k} className="border-b border-[var(--border)] last:border-b-0">
                        <th className="w-1/3 bg-white px-5 py-3 text-left font-semibold uppercase tracking-wider text-[var(--ink)]">
                          {k}
                        </th>
                        <td className="px-5 py-3 text-[var(--steel)]">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="mt-8 label-eyebrow text-[var(--brand)]">Typical Industries</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.industries.map((ind) => (
                    <span
                      key={ind}
                      className="bg-[var(--brand-light)] px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--brand)]"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </section>

      {/* SERVICE PLANS */}
      <section className="bg-[var(--brand)] py-24 text-white">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal dir="left">
            <div className="label-eyebrow text-white/80">Maintenance Plans</div>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight">
              Keep It Running. Always.
            </h2>
            <p className="mt-5 text-white/90">
              Our maintenance plans are built around your operations. Choose preventive contracts to
              maximize uptime, or call us when emergencies strike — we respond fast.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[var(--brand)] hover:scale-105 transition-transform"
            >
              Schedule a Service <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal dir="right">
            <ul className="space-y-4">
              {[
                "Scheduled preventive maintenance",
                "24/7 emergency call-out response",
                "OEM parts and consumables",
                "Compressor health diagnostics",
                "Energy efficiency audits",
                "Detailed service reports",
              ].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-3 border-l-[3px] border-white/40 bg-white/10 px-5 py-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                  <span className="text-white/95">{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="bg-[var(--light-grey)] py-24">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <div className="label-eyebrow text-[var(--brand)]">Beyond Compressors</div>
              <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight text-[var(--ink)]">
                Other Supplies We Provide
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {otherServices.map((s, i) => (
              <Reveal key={s.title} dir="up" delay={i * 0.06}>
                <div className="h-full border-t-[3px] border-[var(--brand)] bg-white p-7 shadow-sm">
                  <div className="text-3xl">{s.icon}</div>
                  <h3 className="mt-4 font-display text-lg font-bold uppercase">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--steel)]">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
