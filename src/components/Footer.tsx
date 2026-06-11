import { MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer id="contact" className="border-t border-border bg-[var(--color-charcoal)] text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">{t("footer.eyebrow")}</p>
            <h2 className="mt-3 font-serif text-3xl text-cream">{t("footer.title")}</h2>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3 text-sm text-cream/85">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" />
              <span>{t("footer.address")}</span>
            </div>
            <div className="flex gap-3 text-sm text-cream/85">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" />
              <span>{t("footer.hours")}</span>
            </div>
          </div>
          <div className="md:text-right">
            <p className="font-serif text-2xl text-cream">Crosta</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cream/60">{t("footer.tagline")}</p>
          </div>
        </div>
        <div className="mt-12 border-t border-cream/15 pt-6 text-center text-xs text-cream/60">
          © {new Date().getFullYear()} Crosta Kitchen Bakery. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}