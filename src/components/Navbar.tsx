import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Globe, Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/use-theme";

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const location = useLocation();
  const { theme, toggleTheme, isDark } = useTheme();
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

  const isActive = (to: string, hash?: string) => {
    if (hash) {
      return location.pathname === to && location.hash === hash;
    }
    return location.pathname === to && !location.hash;
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed left-4 right-4 z-50 transition-all duration-500 ease-out ${
        scrolled ? "top-4" : "top-6"
      }`}
    >
      <div className="mx-auto max-w-7xl rounded-2xl border transition-colors duration-500 bg-white/60 dark:bg-black/50 backdrop-blur-xl border-black/5 dark:border-white/10 shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 sm:px-8">
          <Link to="/" className="font-serif text-xl tracking-wider text-charcoal dark:text-white sm:text-2xl hover:opacity-80 transition-opacity">
            Crosta<span className="text-[var(--color-gold)]"> · </span>Kitchen Bakery
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            <div 
              className="relative flex items-center gap-2"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {links.map((l, i) => {
                const active = isActive(l.to, l.hash);
                return (
                  <Link
                    key={l.label}
                    to={l.to}
                    hash={l.hash}
                    onMouseEnter={() => setHoveredIndex(i)}
                    className={`relative py-2 px-4 text-xs uppercase tracking-[0.2em] transition-colors z-10 ${
                      active ? "text-[var(--color-gold)] font-medium" : "text-charcoal/80 dark:text-white/80 hover:text-charcoal dark:hover:text-white"
                    }`}
                  >
                    {l.label}
                    {hoveredIndex === i && (
                      <motion.div
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 26 }}
                      />
                    )}
                    {active && (
                      <motion.div
                        layoutId="nav-active-line"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-[var(--color-gold)] rounded-full z-20"
                        transition={{ type: "spring", stiffness: 350, damping: 26 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 border border-black/10 dark:border-white/10 text-charcoal/80 dark:text-white/80 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:bg-black/5 dark:hover:bg-white/5 transition-all cursor-pointer relative overflow-hidden"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -15, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 15, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="flex items-center justify-center"
                >
                  {isDark ? (
                    <Sun className="h-4.5 w-4.5" />
                  ) : (
                    <Moon className="h-4.5 w-4.5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            <div className="relative">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-charcoal/80 dark:text-white/80 backdrop-blur-sm transition-all hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:bg-black/5 dark:hover:bg-white/5"
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
                    className="absolute right-0 mt-3 w-32 overflow-hidden rounded-xl border border-black/5 dark:border-white/10 bg-white/95 dark:bg-black/90 backdrop-blur-xl shadow-2xl"
                  >
                    {(["EN", "RO", "RU"] as const).map((code) => (
                      <button
                        key={code}
                        onClick={() => {
                          setLang(code);
                          setLangOpen(false);
                        }}
                        className="block w-full px-5 py-3 text-left text-xs uppercase tracking-[0.18em] text-charcoal/80 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/10 hover:text-charcoal hover:text-white transition-colors"
                      >
                        {code}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 border border-black/10 dark:border-white/10 text-charcoal/80 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-4.5 w-4.5" />
              ) : (
                <Moon className="h-4.5 w-4.5" />
              )}
            </button>

            <button
              className="rounded-full p-2 text-charcoal/80 dark:text-white/80 hover:bg-black/5 dark:hover:bg-white/5 hover:text-charcoal dark:hover:text-white transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-black/5 dark:border-white/10 lg:hidden"
            >
              <motion.nav 
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.06 }
                  }
                }}
                initial="hidden"
                animate="show"
                className="flex flex-col px-6 py-6 space-y-4"
              >
                {links.map((l) => (
                  <motion.div
                    key={l.label}
                    variants={{
                      hidden: { y: 15, opacity: 0 },
                      show: { y: 0, opacity: 1, transition: { ease: [0.16, 1, 0.3, 1] } }
                    }}
                  >
                    <Link
                      to={l.to}
                      hash={l.hash}
                      onClick={() => setOpen(false)}
                      className={`text-sm uppercase tracking-[0.2em] transition-colors ${
                        isActive(l.to, l.hash) ? "text-[var(--color-gold)] font-medium" : "text-charcoal/80 dark:text-white/80 hover:text-charcoal dark:hover:text-white"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  variants={{
                    hidden: { y: 15, opacity: 0 },
                    show: { y: 0, opacity: 1 }
                  }}
                  className="mt-4 flex gap-3 pt-4 border-t border-black/5 dark:border-white/10"
                >
                  {(["EN", "RO", "RU"] as const).map((code) => (
                    <button
                      key={code}
                      onClick={() => setLang(code)}
                      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all ${
                        lang === code
                          ? "border-[var(--color-gold)] text-[var(--color-gold)] bg-[var(--color-gold)]/10"
                          : "border-black/10 dark:border-white/10 text-charcoal/70 dark:text-white/70 hover:border-black/30 dark:hover:border-white/30"
                      }`}
                    >
                      {code}
                    </button>
                  ))}
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}