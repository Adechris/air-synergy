import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, MessageCircle, Clock, Check, Send } from "lucide-react";
import { Reveal } from "../components/site/Reveal";
import contactHero from "../assets/contact-hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Air Synergy Limited" },
      {
        name: "description",
        content:
          "Talk to Air Synergy Limited about air compressors, parts, servicing and supply enquiries. Lagos, Nigeria.",
      },
      { property: "og:title", content: "Contact — Air Synergy Limited" },
      { property: "og:description", content: "We're ready to help. Get a quote within 24 hours." },
      { property: "og:image", content: contactHero },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone"),
  company: z.string().optional(),
  subject: z.string().min(1, "Choose a subject"),
  message: z.string().min(10, "Tell us a bit more"),
});
type FormValues = z.infer<typeof schema>;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (_: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
  };

  return (
    <>
      <section className="relative -mt-[72px] flex min-h-[55svh] items-end overflow-hidden bg-[var(--ink)]">
        <img
          src={contactHero}
          alt="Industrial pipes"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-[var(--ink)]/30" />
        <div className="container-x relative z-10 pb-20 pt-36 text-white">
          <Reveal>
            <div className="label-eyebrow text-[var(--brand-2)]">Contact</div>
            <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase leading-[0.95]">
              Let's Talk. <span className="text-[var(--brand-2)]">We're Ready to Help.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-white/80">
              Tell us about your operation and we'll get back within 24 hours with a specification
              and quote.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--light-grey)] py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          {/* FORM */}
          <Reveal dir="left">
            <div className="bg-white p-8 shadow-lg sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="grid h-20 w-20 place-items-center rounded-full bg-[var(--brand)] text-white"
                  >
                    <Check className="h-10 w-10" strokeWidth={3} />
                  </motion.div>
                  <h3 className="mt-6 font-display text-2xl font-bold uppercase text-[var(--ink)]">
                    Thank you!
                  </h3>
                  <p className="mt-3 max-w-md text-[var(--steel)]">
                    Your message has been received. Our team will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--brand)] hover:text-[var(--brand-2)]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="label-eyebrow text-[var(--brand)]">Send Us A Message</div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full Name" error={errors.fullName?.message}>
                      <input
                        {...register("fullName")}
                        className={inputCls}
                        placeholder="David James"
                      />
                    </Field>
                    <Field label="Email Address" error={errors.email?.message}>
                      <input
                        {...register("email")}
                        type="email"
                        className={inputCls}
                        placeholder="you@company.com"
                      />
                    </Field>
                    <Field label="Phone Number" error={errors.phone?.message}>
                      <input {...register("phone")} className={inputCls} placeholder="+234..." />
                    </Field>
                    <Field label="Company (optional)" error={errors.company?.message}>
                      <input
                        {...register("company")}
                        className={inputCls}
                        placeholder="Company name"
                      />
                    </Field>
                  </div>
                  <Field label="Subject" error={errors.subject?.message}>
                    <select {...register("subject")} className={inputCls} defaultValue="">
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option>Air Compressor Enquiry</option>
                      <option>Request a Quote</option>
                      <option>Maintenance & Servicing</option>
                      <option>Cement / Foodstuffs Supply</option>
                      <option>General Enquiry</option>
                    </select>
                  </Field>
                  <Field label="Message" error={errors.message?.message}>
                    <textarea
                      {...register("message")}
                      rows={5}
                      className={inputCls}
                      placeholder="Tell us about your requirements..."
                    />
                  </Field>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-2 bg-[var(--brand)] px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[var(--brand-2)] hover:shadow-[0_10px_30px_rgba(46,155,90,0.4)] disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          {/* INFO */}
          <Reveal dir="right">
            <div className="space-y-5">
              <InfoCard Icon={MapPin} title="Visit Us">
                Lagos, Nigeria
              </InfoCard>
              <InfoCard Icon={Phone} title="Call Us" href="tel:+2348000000000">
                +234 800 000 0000
              </InfoCard>
              <InfoCard Icon={Mail} title="Email Us" href="mailto:info@airsynergy.ng">
                info@airsynergy.com
              </InfoCard>

              {/* <a
                href="https://wa.me/2348000000000?text=Hello%20Air%20Synergy%20Limited%2C%20I%27d%20like%20to%20enquire%20about..."
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-[var(--brand-2)] px-6 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-transform hover:scale-[1.02] hover:bg-[var(--brand)]"
              >
                <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
              </a> */}

              <InfoCard Icon={Clock} title="Working Hours">
                Mon – Fri: 8AM – 6PM
                <br />
                Sat: 9AM – 3PM
              </InfoCard>
            </div>
          </Reveal>
        </div>

        <div className="container-x mt-12">
          <Reveal>
            <div className="overflow-hidden border-l-[5px] border-[var(--brand)] shadow-lg">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Lagos,Nigeria&output=embed"
                className="h-[400px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const inputCls =
  "w-full border border-[var(--border)] bg-white px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand)]/20";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--ink)]">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
    </label>
  );
}

function InfoCard({
  Icon,
  title,
  children,
  href,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
  href?: string;
}) {
  const inner = (
    <div className="flex items-start gap-4 border-l-[4px] border-[var(--brand)] bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="grid h-11 w-11 shrink-0 place-items-center bg-[var(--brand-light)] text-[var(--brand)]">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
          {title}
        </div>
        <div className="mt-1 text-[15px] text-[var(--ink)]">{children}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
