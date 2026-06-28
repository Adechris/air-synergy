import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Cog,
  Wrench,
  Wind,
  Factory,
  Settings,
  Hammer,
  ShieldCheck,
  Zap,
  PhoneCall,
  BadgeDollarSign,
  Trophy,
  CheckCircle2,
  Truck,
  Quote,
  Star,
  MessageCircle,
} from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { StatsStrip } from "../components/site/StatsStrip";
import heroImg from "../assets/hero-compressor.jpg";
import aboutImg from "../assets/about-compressor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Air Synergy Limited — Industrial Air Compressor Solutions in Nigeria" },
      {
        name: "description",
        content:
          "Industrial-grade air compressors, parts and 24/7 servicing across Nigeria. We also supply cement, foodstuffs and essential commodities.",
      },
      { property: "og:title", content: "Air Synergy Limited — Power That Never Stops Working" },
      {
        property: "og:description",
        content:
          "Trusted air compressor specialists for Nigeria's industries. Piston, screw, oil-free, parts and maintenance.",
      },
    ],
  }),
  component: Index,
});

const products = [
  {
    Icon: Cog,
    name: "Piston Air Compressors",
    desc: "Reliable reciprocating compressors built for workshop and light industrial duty.",
    tags: ["Portable", "1–50 HP", "Workshop"],
  },
  {
    Icon: Settings,
    name: "Screw Air Compressors",
    desc: "Heavy-duty rotary screw units engineered for continuous industrial operation.",
    tags: ["Heavy Duty", "50–500 HP", "Continuous"],
  },
  {
    Icon: Wind,
    name: "Oil-Free Compressors",
    desc: "Class-zero clean air for food, pharmaceutical and medical applications.",
    tags: ["Food Grade", "Medical", "Clean Air"],
  },
  {
    Icon: Factory,
    name: "Industrial Compressor Systems",
    desc: "Custom-engineered compressed air systems for full-scale plant operations.",
    tags: ["Custom Build", "High Capacity", "Plant"],
  },
  {
    Icon: Hammer,
    name: "Compressor Parts & Accessories",
    desc: "Genuine OEM parts, filters, belts, valves and consumables for every brand.",
    tags: ["OEM Parts", "Filters", "Valves"],
  },
  {
    Icon: Wrench,
    name: "Maintenance & Servicing",
    desc: "Preventive maintenance and emergency response across all major brands.",
    tags: ["Preventive", "Emergency", "All Brands"],
  },
];

const steps = [
  {
    n: 1,
    icon: "🔍",
    title: "Consultation",
    desc: "Understand your industrial need and recommend the right compressor.",
  },
  {
    n: 2,
    icon: "📋",
    title: "Quotation",
    desc: "Transparent pricing with full technical specifications.",
  },
  {
    n: 3,
    icon: "🚚",
    title: "Supply & Delivery",
    desc: "Fast delivery to your site or facility, nationwide.",
  },
  {
    n: 4,
    icon: "⚙️",
    title: "Install & Support",
    desc: "Professional setup, training and ongoing maintenance.",
  },
];

const benefits = [
  {
    Icon: Trophy,
    title: "Quality Guaranteed",
    text: "Only industrial-grade, certified compressor equipment from trusted global manufacturers.",
  },
  {
    Icon: Truck,
    title: "Fast Delivery",
    text: "We supply and deliver across Nigeria — Lagos, Abuja, Port Harcourt and beyond.",
  },
  {
    Icon: Wrench,
    title: "Full Technical Support",
    text: "From installation to routine maintenance — our engineers are always available.",
  },
  {
    Icon: BadgeDollarSign,
    title: "Competitive Pricing",
    text: "Direct supplier relationships mean better value without compromising quality.",
  },
  {
    Icon: PhoneCall,
    title: "24/7 Availability",
    text: "Industrial operations don't stop — neither do we. Round-the-clock support.",
  },
  {
    Icon: CheckCircle2,
    title: "Proven Track Record",
    text: "Over 15 years serving Nigerian industries with reliable compressor solutions.",
  },
];

const otherServices = [
  {
    icon: "🏗️",
    title: "Cement Supply",
    text: "Quality cement brands supplied in bulk or retail quantities for construction projects.",
  },
  {
    icon: "🌾",
    title: "Foodstuffs & Commodities",
    text: "Reliable supply of essential food items and commodities for businesses and households.",
  },
  {
    icon: "📦",
    title: "General Merchandise",
    text: "Other essential goods and supplies — contact us to discuss your specific needs.",
  },
];

const testimonials = [
  {
    quote:
      "Air Synergy delivered and commissioned our 200HP screw compressor in record time. Their support has been outstanding.",
    name: "Adewale Johnson",
    // role: "Plant Manager · Lagos Manufacturing Co.",
    stars: 5,
  },
  {
    quote:
      "Their engineers know their craft. Our downtime has dropped significantly since we moved our servicing contract to Air Synergy.",
    name: "Ngozi Eze",
    // role: "Operations Director · Pharma Industries",
    stars: 5,
  },
  {
    quote:
      "Best compressor supplier we've worked with in Nigeria. Honest pricing, fast delivery and reliable equipment.",
    name: "David James",
    // role: "Procurement Lead · Northern Foods",
    stars: 5,
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-[72px] min-h-[100svh] overflow-hidden bg-[var(--ink)]">
        <img
          src={heroImg}
          alt="Industrial air compressor installation"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/95 via-[var(--ink)]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-transparent to-[var(--ink)]/40" />

        <div className="container-x relative z-10 flex min-h-[100svh] flex-col justify-center pt-32 pb-28">
          <Reveal dir="up">
            <div className="label-eyebrow text-[var(--brand-2)]">
              Industrial Air Compressor Solutions
            </div>
          </Reveal>
          <Reveal dir="up" delay={0.1}>
            <h1 className="mt-6 font-display text-[clamp(3rem,8vw,5.5rem)] font-bold uppercase leading-[0.95] tracking-tight text-white">
              Power That Never
              <br />
              <span className="text-[var(--brand-2)]">Stops Working.</span>
            </h1>
          </Reveal>
          <Reveal dir="up" delay={0.2}>
            <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-white/80">
              Air Synergy Technology Limited delivers industrial-grade air compressor solutions
              engineered for performance, durability and reliability — keeping your operations
              running at full capacity.
            </p>
          </Reveal>
          <Reveal dir="up" delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 bg-[var(--brand)] px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-[var(--brand-2)] hover:shadow-[0_10px_40px_rgba(46,155,90,0.5)]"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/40 bg-white/0 px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
          <Reveal dir="up" delay={0.4}>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-white/60">
              <span>⚙️ Industrial Grade</span>
              <span className="text-[var(--brand-2)]">•</span>
              <span>✅ Certified</span>
              <span className="text-[var(--brand-2)]">•</span>
              <span>🔧 Full Support</span>
            </div>
          </Reveal>
        </div>

        {/* diagonal cut */}
        <div className="absolute inset-x-0 bottom-0 h-16">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
            <polygon points="0,100 100,40 100,100" fill="var(--brand)" />
          </svg>
        </div>
      </section>

      {/* <StatsStrip /> */}

      {/* WHAT WE DO */}
      <section className="bg-[var(--light-grey)] py-24">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal dir="left">
            <div className="label-eyebrow text-[var(--brand)]">Our Core Business</div>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,2.6rem)] font-bold uppercase leading-tight text-[var(--ink)]">
              Nigeria's Trusted Air Compressor Specialists
            </h2>
            <p className="mt-6 text-[var(--steel)] leading-relaxed">
              Air Synergy Technology Limited supplies, installs and maintains industrial air
              compressor systems for manufacturing plants, workshops, hospitals and commercial
              operations across Nigeria. From single-stage piston units to large-capacity screw
              systems, we engineer the right solution for every application.
            </p>
            <blockquote className="my-8 border-l-[5px] border-[var(--brand)] bg-white py-5 pl-6 pr-4 font-display text-xl italic text-[var(--ink)] shadow-sm">
              "From small workshops to large-scale manufacturing plants — we have the right
              compressor for every application."
            </blockquote>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)] hover:text-[var(--brand-2)]"
            >
              See Our Products{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal dir="right">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 border-2 border-[var(--brand)]/30" />
              <img
                src={aboutImg}
                alt="Industrial compressor unit"
                width={1280}
                height={1280}
                loading="lazy"
                className="aspect-[5/4] w-full object-cover shadow-2xl"
              />
              <div className="absolute -bottom-5 -left-5 bg-[var(--brand)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-xl">
                ISO Certified Equipment
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="relative bg-[var(--ink)] py-28 text-white">
        <div className="industrial-grid-bg absolute inset-0 opacity-30" aria-hidden />
        <div className="container-x relative">
          <Reveal>
            <div className="text-center">
              <div className="label-eyebrow text-[var(--brand-2)]">Our Products</div>
              <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.25rem)] font-bold uppercase leading-tight">
                Industrial Compressor Solutions
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-white/70">
                We supply a comprehensive range of air compressor systems built for every industrial
                need.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.name} dir="up" delay={i * 0.05}>
                <div className="group relative h-full border-t-[3px] border-[var(--brand-2)] bg-[#1A2B20] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_var(--brand-2),0_20px_60px_-10px_rgba(46,155,90,0.45)]">
                  <p.Icon className="h-10 w-10 text-[var(--brand-2)]" />
                  <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide text-white">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-white/65">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-[var(--brand)]/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--brand-2)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {/* <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-2)] hover:text-white"
                  >
                    Request Quote <ArrowRight className="h-3.5 w-3.5" />
                  </Link> */}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <div className="label-eyebrow text-[var(--brand)]">Our Process</div>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,2.75rem)] font-bold uppercase leading-tight text-[var(--ink)]">
                From Order to Operation — We Handle Everything
              </h2>
            </div>
          </Reveal>

          <div className="relative mt-16 grid gap-12 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-[var(--brand-2)]/60 md:block" />
            {steps.map((s, i) => (
              <Reveal key={s.n} dir="up" delay={i * 0.1} className="relative text-center">
                <div className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full bg-[var(--brand)] font-display text-2xl font-bold text-white shadow-lg ring-8 ring-white">
                  {s.n}
                </div>
                <div className="mt-4 text-2xl">{s.icon}</div>
                <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-wide text-[var(--ink)]">
                  {s.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm text-[var(--steel)]">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="noise-overlay relative bg-[var(--brand)] py-28 text-white">
        <div className="container-x relative">
          <Reveal>
            <div className="text-center">
              <div className="label-eyebrow text-white/80">Why Choose Us</div>
              <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.25rem)] font-bold uppercase leading-tight">
                Built for Industry.{" "}
                <span className="text-[var(--brand-light)]">Trusted by Professionals.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} dir="up" delay={i * 0.05}>
                <div className="h-full border border-white/15 bg-white/[0.06] p-7 backdrop-blur transition-all hover:border-white/40 hover:bg-white/[0.1]">
                  <b.Icon className="h-9 w-9 text-white" />
                  <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-wide">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/80">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="bg-[var(--light-grey)] py-24">
        <div className="container-x">
          <Reveal>
            <div className="max-w-2xl">
              <div className="label-eyebrow text-[var(--brand)]">Beyond Compressors</div>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,2.6rem)] font-bold uppercase leading-tight text-[var(--ink)]">
                We Also Supply Essential Business Goods
              </h2>
              <p className="mt-5 text-[var(--steel)]">
                In addition to our core air compressor business, Air Synergy Limited supplies a
                range of essential commodities to businesses and individuals across Nigeria.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {otherServices.map((s, i) => (
              <Reveal key={s.title} dir="up" delay={i * 0.08}>
                <div className="h-full border-t-[3px] border-[var(--brand)] bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-3xl">{s.icon}</div>
                  <h3 className="mt-4 font-display text-lg font-bold uppercase tracking-wide text-[var(--ink)]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--steel)]">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm italic text-[var(--steel)]">
            Contact us to discuss availability, pricing and delivery for any of these items.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[var(--ink)] py-24 text-white">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <div className="label-eyebrow text-[var(--brand-2)]">Client Testimonials</div>
              <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,2.75rem)] font-bold uppercase leading-tight">
                Trusted by Industries Across Nigeria
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} dir="up" delay={i * 0.08}>
                <div className="relative h-full border-l-[4px] border-[var(--brand-2)] bg-[#1A2B20] p-8">
                  <Quote className="h-8 w-8 text-[var(--brand-2)]" />
                  <p className="mt-4 text-[15px] italic leading-relaxed text-white/85">
                    "{t.quote}"
                  </p>
                  <div className="mt-6">
                    <div className="font-display font-bold uppercase tracking-wide">{t.name}</div>
                    <div className="text-xs text-[var(--brand-2)]">{t.role}</div>
                    <div className="mt-2 flex gap-1">
                      {Array.from({ length: t.stars }).map((_, k) => (
                        <Star
                          key={k}
                          className="h-4 w-4 fill-[var(--brand-2)] text-[var(--brand-2)]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="noise-overlay relative bg-[var(--brand)] py-24 text-white">
        <div className="container-x relative text-center">
          <Reveal>
            <h2 className="font-display text-[clamp(2.25rem,5.5vw,3.5rem)] font-bold uppercase leading-tight">
              Ready to Power Your Operations?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/85">
              Get in touch with our team today for a consultation and competitive quote.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--brand)] transition-transform hover:scale-105"
            >
              Contact Us Now <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/85">
              <span>📞 Call us</span>
              <span>
                <MessageCircle className="mr-1 inline h-4 w-4" /> WhatsApp
              </span>
              <span>📧 Email</span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
