import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/2348000000000?text=Hello%20Air%20Synergy%20Limited%2C%20I%27d%20like%20to%20enquire%20about..."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[var(--brand-2)] text-white shadow-[0_10px_30px_rgba(46,155,90,0.45)] ring-4 ring-[var(--brand-2)]/20 transition-transform hover:scale-110 hover:bg-[var(--brand)]"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
