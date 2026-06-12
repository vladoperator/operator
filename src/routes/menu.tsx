import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { menuSections, type Lang, type Tag } from "@/i18n/menu-data";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PageWrapper, SplitText } from "../components/AnimatedElements";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Crosta Kitchen Bakery" },
      { name: "description", content: "Explore the signature menu at Crosta Kitchen Bakery — breakfast, appetizers, salads, soups and hot dishes crafted from the finest ingredients." },
      { property: "og:title", content: "Menu — Crosta Kitchen Bakery" },
      { property: "og:description", content: "Our signature menu in Chișinău." },
    ],
  }),
  component: MenuPage,
});

const tagIcon: Record<Tag, string> = {
  spicy: "🌶️",
  fish: "🐟",
  garlic: "🧄",
  slow: "⏱️",
};

function MenuPage() {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? "en") as Lang;
  const L = (lang in { en: 1, ro: 1, ru: 1 } ? lang : "en") as Lang;

  const [activeSection, setActiveSection] = useState<string>("breakfasts");

  useEffect(() => {
    const sections = ["breakfasts", "appetizers", "salads", "soups", "hot"];
    const observers = sections.map((sec) => {
      const el = document.getElementById(`section-${sec}`);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sec);
          }
        },
        {
          rootMargin: "-25% 0px -55% 0px", // Trigger when section occupies the active middle band of viewport
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((o) => {
        if (o) o.observer.unobserve(o.el);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`section-${id}`);
    if (el) {
      const offset = el.getBoundingClientRect().top + window.pageYOffset - 160;
      window.scrollTo({ top: offset, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <PageWrapper className="bg-background min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border bg-[var(--color-charcoal)] py-24 text-cream sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[var(--color-gold)]/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] font-medium">
            {t("menu.eyebrow")}
          </p>
          <h1 className="mt-5 font-serif text-5xl text-cream sm:text-6xl tracking-tight">
            <SplitText text={t("menu.title")} type="words" />
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm text-cream/70 font-light leading-relaxed">
            {t("menu.subtitle")}
          </p>
        </div>
      </section>

      {/* Sticky Category Nav */}
      <div className="sticky top-20 z-40 bg-background/85 backdrop-blur-xl border-b border-border/40 py-4 shadow-sm">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex gap-2 overflow-x-auto pb-1 justify-start sm:justify-center no-scrollbar">
            {menuSections.map((section) => {
              const secKey = section.sectionKey;
              const active = activeSection === secKey;
              return (
                <button
                  key={secKey}
                  onClick={() => scrollToSection(secKey)}
                  className={`relative px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer whitespace-nowrap rounded-full ${
                    active ? "text-[var(--color-gold)]" : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  <span className="relative z-10">{t(`menu.sections.${secKey}`)}</span>
                  {active && (
                    <motion.div
                      layoutId="menu-category-active"
                      className="absolute inset-0 bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/20 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 26 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        {/* Legend */}
        <aside className="mb-24 border border-[var(--color-gold)]/20 bg-card/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[var(--color-gold)]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-center gap-3">
            <Info className="h-5 w-5 text-[var(--color-gold)]" />
            <h2 className="font-serif text-xl">{t("menu.legendTitle")}</h2>
          </div>
          <ul className="mt-6 grid gap-3.5 text-sm text-foreground/80 sm:grid-cols-2">
            <li className="font-light">{t("menu.legend.breakfast")} <strong>{t("menu.legend.breakfastTime")}</strong></li>
            <li className="font-light">{t("menu.legend.main")} <strong>{t("menu.legend.mainTime")}</strong></li>
            <li className="font-light"><span className="mr-2">🌶️</span> {t("menu.legend.spicy")}</li>
            <li className="font-light"><span className="mr-2">🐟</span> {t("menu.legend.fish")}</li>
            <li className="font-light"><span className="mr-2">🧄</span> {t("menu.legend.garlic")}</li>
            <li className="font-light"><span className="mr-2">⏱️</span> {t("menu.legend.slow")}</li>
            <li className="sm:col-span-2 pt-2 text-muted-foreground/70 text-xs font-light">
              {t("menu.legend.allergy")}
            </li>
          </ul>
        </aside>

        {/* Sections */}
        <div className="space-y-28">
          {menuSections.map((section) => (
            <section 
              key={section.sectionKey} 
              id={`section-${section.sectionKey}`}
              className="scroll-mt-36"
            >
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-12 flex items-center gap-6"
              >
                <div className="h-px flex-1 bg-border/60" />
                <h2 className="font-serif text-3xl uppercase tracking-[0.15em] sm:text-4xl text-foreground text-center">
                  {t(`menu.sections.${section.sectionKey}`)}
                </h2>
                <div className="h-px flex-1 bg-border/60" />
              </motion.div>

              <div className="space-y-16">
                {section.subgroups.map((sg, i) => (
                  <div key={i}>
                    {sg.nameKey && (
                      <h3 className="mb-8 text-center font-serif text-lg italic text-[var(--color-bronze)]">
                        {t(`menu.groups.${sg.nameKey}`)}
                      </h3>
                    )}
                    <motion.ul 
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-100px" }}
                      className="grid gap-x-12 gap-y-4 sm:grid-cols-2"
                    >
                      {sg.items.map((item) => (
                        <motion.li 
                          key={item.name.en} 
                          variants={fadeUp}
                          className="group rounded-2xl p-4 transition-all duration-500 hover:bg-white/5 dark:hover:bg-white/[0.015] border border-transparent hover:border-border/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                        >
                          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
                            <div className="min-w-0">
                              <div className="flex flex-wrap items-baseline gap-x-2">
                                <span className="font-serif text-lg text-foreground group-hover:text-[var(--color-gold)] transition-colors duration-300">
                                  {item.name[L]}
                                </span>
                                {item.tags?.map((t) => (
                                  <span key={t} className="text-sm" title={t}>{tagIcon[t]}</span>
                                ))}
                              </div>
                              {item.desc && (
                                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground/85 font-light">
                                  {item.desc[L]}
                                </p>
                              )}
                            </div>
                            <span className="shrink-0 font-serif text-base text-[var(--color-bronze)] font-medium">
                              {item.price}
                            </span>
                          </div>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}