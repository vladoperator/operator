import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { menuSections, type Lang, type Tag } from "@/i18n/menu-data";

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

  return (
    <div className="bg-background">
      {/* Header */}
      <section className="border-b border-border bg-[var(--color-charcoal)] py-20 text-cream sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)]">{t("menu.eyebrow")}</p>
          <h1 className="mt-5 font-serif text-5xl text-cream sm:text-6xl">{t("menu.title")}</h1>
          <p className="mx-auto mt-5 max-w-xl text-sm text-cream/70">
            {t("menu.subtitle")}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        {/* Legend */}
        <aside className="mb-20 border border-[var(--color-gold)]/40 bg-card p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <Info className="h-5 w-5 text-[var(--color-gold)]" />
            <h2 className="font-serif text-xl">{t("menu.legendTitle")}</h2>
          </div>
          <ul className="mt-5 grid gap-2.5 text-sm text-foreground/85 sm:grid-cols-2">
            <li>{t("menu.legend.breakfast")} <strong>{t("menu.legend.breakfastTime")}</strong></li>
            <li>{t("menu.legend.main")} <strong>{t("menu.legend.mainTime")}</strong></li>
            <li><span className="mr-1">🌶️</span> {t("menu.legend.spicy")}</li>
            <li><span className="mr-1">🐟</span> {t("menu.legend.fish")}</li>
            <li><span className="mr-1">🧄</span> {t("menu.legend.garlic")}</li>
            <li><span className="mr-1">⏱️</span> {t("menu.legend.slow")}</li>
            <li className="sm:col-span-2 pt-1 text-muted-foreground">
              {t("menu.legend.allergy")}
            </li>
          </ul>
        </aside>

        {/* Sections */}
        <div className="space-y-20">
          {menuSections.map((section) => (
            <section key={section.sectionKey}>
              <div className="mb-10 flex items-center gap-6">
                <div className="h-px flex-1 bg-border" />
                <h2 className="font-serif text-3xl uppercase tracking-[0.15em] sm:text-4xl">
                  {t(`menu.sections.${section.sectionKey}`)}
                </h2>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="space-y-10">
                {section.subgroups.map((sg, i) => (
                  <div key={i}>
                    {sg.nameKey && (
                      <h3 className="mb-5 text-center font-serif text-lg italic text-[var(--color-bronze)]">
                        {t(`menu.groups.${sg.nameKey}`)}
                      </h3>
                    )}
                    <ul className="grid gap-x-12 gap-y-5 sm:grid-cols-2">
                      {sg.items.map((item) => (
                        <li key={item.name.en} className="group">
                          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
                            <div className="min-w-0">
                              <div className="flex flex-wrap items-baseline gap-x-2">
                                <span className="font-serif text-lg text-foreground">{item.name[L]}</span>
                                {item.tags?.map((t) => (
                                  <span key={t} className="text-sm" title={t}>{tagIcon[t]}</span>
                                ))}
                              </div>
                              {item.desc && (
                                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                  {item.desc[L]}
                                </p>
                              )}
                            </div>
                            <span className="shrink-0 font-serif text-base text-[var(--color-bronze)]">
                              {item.price}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}