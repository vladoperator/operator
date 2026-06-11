import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const lang = (i18n.resolvedLanguage ?? "en").toUpperCase() as "EN" | "RO" | "RU";
  const setLang = (code: "EN" | "RO" | "RU") => i18n.changeLanguage(code.toLowerCase());

  const links = [
    { label: t("nav.home"), to: "/", hash: undefined as string | undefined },
    { label: t("nav.menu"), to: "/menu", hash: undefined },
    { label: t("nav.reservations"), to: "/", hash: "reservations" },
    { label: t("nav.about"), to: "/", hash: "about" },
    { label: t("nav.contact"), to: "/", hash: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="font-serif text-xl tracking-wide text-foreground sm:text-2xl">
          Crosta<span className="text-[var(--color-gold)]"> · </span>Kitchen Bakery
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="text-sm uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-[var(--color-gold)]"
            >
              {l.label}
            </Link>
          ))}
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-foreground/80 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
            >
              <Globe className="h-3.5 w-3.5" />
              {lang}
              <ChevronDown className="h-3 w-3" />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-24 rounded-sm border border-border bg-card shadow-lg">
                {(["EN", "RO", "RU"] as const).map((code) => (
                  <button
                    key={code}
                    onClick={() => {
                      setLang(code);
                      setLangOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-xs uppercase tracking-[0.18em] hover:bg-secondary"
                  >
                    {code}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.18em] text-foreground/80 hover:text-[var(--color-gold)]"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2 border-t border-border pt-3">
              {(["EN", "RO", "RU"] as const).map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`rounded-sm border px-3 py-1.5 text-xs uppercase tracking-[0.18em] ${
                    lang === code
                      ? "border-[var(--color-gold)] text-[var(--color-gold)]"
                      : "border-border text-foreground/70"
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}