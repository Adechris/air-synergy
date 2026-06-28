import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Shield, Award, HeartHandshake, Star } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import { StatsStrip } from "../components/site/StatsStrip";
import aboutHero from "../assets/about-hero.jpg";
import aboutImg from "../assets/about-compressor.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Air Synergy Limited" },
      {
        name: "description",
        content:
          "Built on experience. Driven by precision. Learn the story, mission and values of Air Synergy Limited.",
      },
      { property: "og:title", content: "About — Air Synergy Limited" },
      {
        property: "og:description",
        content: "15+ years powering Nigerian industry with reliable air compressor solutions.",
      },
      { property: "og:image", content: aboutHero },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    Icon: Shield,
    title: "Integrity",
    text: "We say what we'll do, and we do it. Honest pricing, honest advice.",
  },
  {
    Icon: Award,
    title: "Quality",
    text: "Only certified, industrial-grade equipment. No shortcuts.",
  },
  {
    Icon: Star,
    title: "Reliability",
    text: "Equipment and support our clients can depend on, every single day.",
  },
  {
    Icon: HeartHandshake,
    title: "Customer First",
    text: "Your operations are our priority — before, during and after the sale.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="relative -mt-[72px] flex min-h-[70svh] items-end overflow-hidden bg-[var(--ink)]">
        <img
          src={aboutHero}
          alt="Industrial factory floor"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-[var(--ink)]/40" />
        <div className="container-x relative z-10 pb-24 pt-40 text-white">
          <Reveal>
            <div className="label-eyebrow text-[var(--brand-2)]">About Us</div>
            <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase leading-[0.95]">
              Built on Experience.
              <br />
              <span className="text-[var(--brand-2)]">Driven by Precision.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-white/80">
              For some years, Air Synergy Technology Limited has powered Nigerian industry with
              reliable air compressor solutions, engineering expertise and a service ethic that puts
              our clients first.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-white py-24">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal dir="left">
            <img
              src={aboutImg}
              alt="Compressor close-up"
              width={1280}
              height={1280}
              loading="lazy"
              className="aspect-[5/4] w-full object-cover shadow-2xl"
            />
          </Reveal>
          <Reveal dir="right">
            <div className="label-eyebrow text-[var(--brand)]">Our Story</div>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-[var(--ink)]">
              From Workshop Floor to Plant Scale
            </h2>
            <p className="mt-6 leading-relaxed text-[var(--steel)]">
              Founded with a clear mission — to bring world-class compressed air technology to
              Nigerian industries — Air Synergy Technology Limited has grown into one of the
              country's most trusted compressor specialists. From the small workshop to the large
              manufacturing plant, our team has delivered solutions that keep operations running.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--steel)]">
              Today we serve manufacturers, hospitals, food producers, construction firms and
              workshops across Lagos, Abuja, Port Harcourt and beyond.
            </p>
            <blockquote className="mt-8 border-l-[5px] border-[var(--brand)] bg-[var(--light-grey)] py-5 pl-6 pr-4 font-display text-xl italic text-[var(--ink)]">
              "Our mission is simple — supply the right equipment, install it properly and keep it
              running."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-[var(--light-grey)] py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal dir="left">
            <div className="h-full border-l-[5px] border-[var(--brand)] bg-[var(--ink)] p-10 text-white">
              <Target className="h-10 w-10 text-[var(--brand-2)]" />
              <h3 className="mt-5 font-display text-3xl font-bold uppercase">Mission</h3>
              <p className="mt-4 leading-relaxed text-white/80">
                To deliver industrial air compressor solutions that empower Nigerian businesses with
                uninterrupted, efficient and reliable compressed air — backed by world-class
                technical support.
              </p>
            </div>
          </Reveal>
          <Reveal dir="right">
            <div className="h-full bg-[var(--brand)] p-10 text-white">
              <Eye className="h-10 w-10 text-white" />
              <h3 className="mt-5 font-display text-3xl font-bold uppercase">Vision</h3>
              <p className="mt-4 leading-relaxed text-white/90">
                To be the most trusted compressed air partner in West Africa — known for engineering
                excellence, integrity and an unwavering commitment to our clients' success.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-white py-24">
        <div className="container-x">
          <Reveal>
            <div className="text-center">
              <div className="label-eyebrow text-[var(--brand)]">Our Values</div>
              <h2 className="mt-4 font-display text-4xl font-bold uppercase text-[var(--ink)]">
                What We Stand For
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} dir="up" delay={i * 0.06}>
                <div className="h-full border-t-[3px] border-[var(--brand)] bg-[var(--light-grey)] p-7 transition-shadow hover:shadow-lg">
                  <v.Icon className="h-10 w-10 text-[var(--brand)]" />
                  <h3 className="mt-5 font-display text-xl font-bold uppercase">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--steel)]">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* <StatsStrip /> */}
    </>
  );
}
