import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#081A0F] text-white">
      <div className="industrial-grid-bg absolute inset-0 opacity-40" aria-hidden />
      <div className="container-x relative py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.3fr]">
          <div>
            <div className="font-display text-3xl font-bold tracking-wide text-[var(--brand-2)]">
              AIR SYNERGY
            </div>
            <div className="label-eyebrow mt-1 text-white/60">Technology Limited</div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/70">
              Powering Nigerian Industry. Every Day.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Facebook, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center border border-white/15 text-white/80 transition-colors hover:border-[var(--brand-2)] hover:text-[var(--brand-2)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="label-eyebrow mb-5 text-[var(--brand-2)]">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li>
                <Link to="/" className="hover:text-[var(--brand-2)]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[var(--brand-2)]">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[var(--brand-2)]">
                  Products
                </Link>
              </li>
              {/* <li><a href="/#why" className="hover:text-[var(--brand-2)]">Why Us</a></li> */}
              <li>
                <Link to="/contact" className="hover:text-[var(--brand-2)]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="label-eyebrow mb-5 text-[var(--brand-2)]">Our Products</h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li>Piston Compressors</li>
              <li>Screw Compressors</li>
              <li>Oil-Free Compressors</li>
              <li>Parts & Accessories</li>
              <li>Maintenance & Servicing</li>
            </ul>
          </div>

          <div>
            <h4 className="label-eyebrow mb-5 text-[var(--brand-2)]">Contact</h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-2)]" /> Lagos, Nigeria
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-2)]" /> +234 800 000
                0000
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-2)]" />{" "}
                info@airsynergy.com
              </li>
            </ul>
            {/* <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-[var(--brand)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-[var(--brand-2)]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a> */}
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-[var(--brand-2)]/60 to-transparent" />

        <div className="mt-6 flex flex-col items-start justify-between gap-4 text-xs text-white/50 sm:flex-row sm:items-center">
          <span>
            © {new Date().getFullYear()} Air Synergy Technology Limited. All rights reserved.
          </span>
          <span className="label-eyebrow text-white/40">Built for industry.</span>
        </div>
      </div>
    </footer>
  );
}
