import { MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/5 bg-[#050505] text-cream">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[var(--color-gold)]/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8">
        <div className="grid gap-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block group">
              <h2 className="font-serif text-4xl text-cream tracking-wide group-hover:opacity-80 transition-opacity">
                Crosta<span className="text-[var(--color-gold)]"> · </span>Kitchen
              </h2>
            </Link>
            <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-cream/60">
              {t("hero.subtitle")}
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 hover:text-[var(--color-gold)]">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 hover:text-[var(--color-gold)]">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
              {t("footer.eyebrow")}
            </h3>
            <div className="mt-6 space-y-4">
              <div className="flex gap-3 text-sm font-light text-cream/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" />
                <span>{t("footer.address")}</span>
              </div>
              <div className="flex gap-3 text-sm font-light text-cream/70">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" />
                <span>{t("footer.hours")}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--color-gold)]">
              {t("nav.home")}
            </h3>
            <nav className="mt-6 flex flex-col space-y-3">
              {[
                { label: t("nav.menu"), to: "/menu", hash: undefined },
                { label: t("nav.reservations"), to: "/", hash: "reservations" },
                { label: t("nav.about"), to: "/", hash: "about" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  hash={link.hash}
                  className="w-fit text-sm font-light text-cream/60 transition-colors hover:text-[var(--color-gold)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs font-light text-cream/40">
            © {new Date().getFullYear()} Crosta Kitchen Bakery. {t("footer.rights")}
          </p>
          <div className="flex gap-6 text-xs font-light text-cream/40">
            <a href="#" className="hover:text-cream/80 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream/80 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}