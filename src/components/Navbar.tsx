import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const lang = (i18n.resolvedLanguage ?? "en").toUpperCase() as "EN" | "RO" | "RU";
  const setLang = (code: "EN" | "RO" | "RU") => i18n.changeLanguage(code.toLowerCase());

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: t("nav.home"), to: "/", hash: undefined as string | undefined },
    { label: t("nav.menu"), to: "/menu", hash: undefined },
    { label: t("nav.reservations"), to: "/", hash: "reservations" },
    { label: t("nav.about"), to: "/", hash: "about" },
    { label: t("nav.contact"), to: "/", hash: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-4 right-4 z-50 transition-all duration-500 ease-out ${
        scrolled ? "top-4" : "top-6"
      }`}
    >
      <div className={`mx-auto max-w-7xl rounded-2xl border transition-colors duration-500 bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl`}>
        <div className="flex items-center justify-between px-6 py-4 sm:px-8">
          <Link to="/" className="font-serif text-xl tracking-wider text-white sm:text-2xl hover:opacity-80 transition-opacity">
            Crosta<span className="text-[var(--color-gold)]"> · </span>Kitchen Bakery
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l, i) => (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                className="relative text-xs uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-[var(--color-gold)] group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="inline-flex items-center gap-1.5 rounded-full border border-foreground/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm transition-all hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:bg-foreground/5"
              >
                <Globe className="h-3.5 w-3.5" />
                {lang}
                <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-3 w-32 overflow-hidden rounded-xl border border-white/10 bg-black/60 backdrop-blur-xl shadow-2xl"
                  >
                    {(["EN", "RO", "RU"] as const).map((code) => (
                      <button
                        key={code}
                        onClick={() => {
                          setLang(code);
                          setLangOpen(false);
                        }}
                        className="block w-full px-5 py-3 text-left text-xs uppercase tracking-[0.18em] text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                      >
                        {code}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <button
            className="rounded-full p-2 text-white/80 hover:bg-foreground/5 hover:text-white lg:hidden transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/10 lg:hidden"
            >
              <nav className="flex flex-col px-6 py-6 space-y-4">
                {links.map((l) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    hash={l.hash}
                    onClick={() => setOpen(false)}
                    className="text-sm uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-[var(--color-gold)]"
                  >
                    {l.label}
                  </Link>
                ))}
                <div className="mt-4 flex gap-3 pt-4 border-t border-white/10">
                  {(["EN", "RO", "RU"] as const).map((code) => (
                    <button
                      key={code}
                      onClick={() => setLang(code)}
                      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all ${
                        lang === code
                          ? "border-[var(--color-gold)] text-[var(--color-gold)] bg-[var(--color-gold)]/10"
                          : "border-foreground/10 text-white/70 hover:border-foreground/30"
                      }`}
                    >
                      {code}
                    </button>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}