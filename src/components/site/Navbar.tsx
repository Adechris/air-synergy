import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products & Services" },
  // { to: "/#why", label: "Why Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--ink)] shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          : "bg-[var(--ink)]"
      } border-b border-[var(--brand)]/40`}
      style={{ backgroundColor: "var(--ink)" }}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-bold tracking-wide text-[var(--brand-2)]">
            AIR SYNERGY
          </span>
          <span className="label-eyebrow text-[10px] text-white/70">Technology Limited</span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="text-[13px] font-medium uppercase tracking-[0.18em] text-white/85 transition-colors hover:text-[var(--brand-2)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden items-center gap-2 bg-[var(--brand)] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[var(--brand-2)] lg:inline-flex"
        >
          Get In Touch <ArrowRight className="h-4 w-4" />
        </Link>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="rounded-sm border border-white/20 p-2 text-white lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-[var(--ink)] px-6 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl font-bold text-[var(--brand-2)]">
              AIR SYNERGY
            </span>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-sm border border-white/20 p-2 text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="mt-16 flex flex-col gap-6">
            {links.map((l) => (
              <a
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-bold uppercase text-white hover:text-[var(--brand-2)]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-auto inline-flex items-center justify-center gap-2 bg-[var(--brand)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white"
          >
            Get In Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
