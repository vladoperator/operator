import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { i as instance } from "../_libs/i18next.mjs";
import { B as Browser } from "../_libs/i18next-browser-languagedetector+[...].mjs";
import { u as useTranslation, i as initReactI18next } from "../_libs/react-i18next.mjs";
import { G as Globe, C as ChevronDown, X, M as Menu, a as MapPin, b as Clock } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";



import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/use-sync-external-store.mjs";
const appCss = "/assets/styles-jG7ijDNZ.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function Navbar() {
  const { t, i18n: i18n2 } = useTranslation();
  const [open, setOpen] = reactExports.useState(false);
  const [langOpen, setLangOpen] = reactExports.useState(false);
  const lang = (i18n2.resolvedLanguage ?? "en").toUpperCase();
  const setLang = (code) => i18n2.changeLanguage(code.toLowerCase());
  const links = [
    { label: t("nav.home"), to: "/", hash: void 0 },
    { label: t("nav.menu"), to: "/menu", hash: void 0 },
    { label: t("nav.reservations"), to: "/", hash: "reservations" },
    { label: t("nav.about"), to: "/", hash: "about" },
    { label: t("nav.contact"), to: "/", hash: "contact" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "font-serif text-xl tracking-wide text-foreground sm:text-2xl", children: [
        "Crosta",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[var(--color-gold)]", children: " · " }),
        "Kitchen Bakery"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-8 lg:flex", children: [
        links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: l.to,
            hash: l.hash,
            className: "text-sm uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-[var(--color-gold)]",
            children: l.label
          },
          l.label
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => setLangOpen((v) => !v),
              className: "inline-flex items-center gap-1.5 rounded-sm border border-border px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-foreground/80 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5" }),
                lang,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3 w-3" })
              ]
            }
          ),
          langOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 mt-2 w-24 rounded-sm border border-border bg-card shadow-lg", children: ["EN", "RO", "RU"].map((code) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => {
                setLang(code);
                setLangOpen(false);
              },
              className: "block w-full px-4 py-2 text-left text-xs uppercase tracking-[0.18em] hover:bg-secondary",
              children: code
            },
            code
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "lg:hidden",
          onClick: () => setOpen((v) => !v),
          "aria-label": "Toggle menu",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-6 w-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-6 w-6" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border bg-background lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col px-5 py-4", children: [
      links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: l.to,
          hash: l.hash,
          onClick: () => setOpen(false),
          className: "py-3 text-sm uppercase tracking-[0.18em] text-foreground/80 hover:text-[var(--color-gold)]",
          children: l.label
        },
        l.label
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex gap-2 border-t border-border pt-3", children: ["EN", "RO", "RU"].map((code) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setLang(code),
          className: `rounded-sm border px-3 py-1.5 text-xs uppercase tracking-[0.18em] ${lang === code ? "border-[var(--color-gold)] text-[var(--color-gold)]" : "border-border text-foreground/70"}`,
          children: code
        },
        code
      )) })
    ] }) })
  ] });
}
function Footer() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { id: "contact", className: "border-t border-border bg-[var(--color-charcoal)] text-cream", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-16 sm:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]", children: t("footer.eyebrow") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-serif text-3xl text-cream", children: t("footer.title") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-sm text-cream/85", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("footer.address") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 text-sm text-cream/85", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("footer.hours") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif text-2xl text-cream", children: "Crosta" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs uppercase tracking-[0.25em] text-cream/60", children: t("footer.tagline") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 border-t border-cream/15 pt-6 text-center text-xs text-cream/60", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Crosta Kitchen Bakery. ",
      t("footer.rights")
    ] })
  ] }) });
}
const en = {
  nav: {
    home: "Home",
    menu: "Menu",
    reservations: "Reservations",
    about: "About",
    contact: "Contact"
  },
  hero: {
    eyebrow: "Est. Chișinău",
    title1: "A Premium Dining",
    title2: "Experience",
    subtitle: "Experience the finest culinary creations in an elegant atmosphere.",
    cta: "Explore Menu"
  },
  reservations: {
    eyebrow: "Bookings",
    title: "Make a Reservation",
    subtitle: "Reserve your table and let us prepare an unforgettable evening for you.",
    name: "Name",
    date: "Date",
    time: "Time",
    guests: "Guests",
    submit: "Book Table",
    confirmedTitle: "Reservation Confirmed!",
    confirmedBody: "Thank you for choosing Crosta. We look forward to serving you.",
    close: "Close"
  },
  about: {
    eyebrow: "About",
    title: "Our Story",
    body: "At Crosta Kitchen Bakery, we believe in creating memorable dining experiences. We source the finest ingredients to bring you exquisite dishes crafted with passion and culinary expertise.",
    body2: "From our artisan bakery to our seasonal kitchen, every plate tells a story rooted in craft, care, and respect for the produce we serve."
  },
  footer: {
    eyebrow: "Contact",
    title: "Visit Us",
    address: "Chișinău MD, Strada Miron Costin 13/7, MD-2000",
    hours: "Open Daily: 8:00 – 22:00",
    rights: "All rights reserved.",
    tagline: "Kitchen Bakery"
  },
  menu: {
    eyebrow: "À la carte",
    title: "Our Signature Menu",
    subtitle: "Seasonal compositions from our kitchen and bakery, crafted with care from the finest ingredients.",
    legendTitle: "Сноски / Условные обозначения",
    legend: {
      breakfast: "We are happy to serve breakfast from",
      breakfastTime: "9:00 to 21:00",
      main: "Main menu is served from",
      mainTime: "12:00 to 23:00",
      spicy: "spicy or piquant",
      fish: "caution: fish bones",
      garlic: "contains garlic",
      slow: "preparation takes more than 25 minutes",
      allergy: "If you have allergies or dietary preferences, please let us know."
    },
    sections: {
      breakfasts: "Breakfasts",
      appetizers: "Appetizers",
      salads: "Salads",
      soups: "Soups",
      hot: "Hot Dishes with Side"
    },
    groups: {
      egg: "Egg Dishes",
      future: "Back to the Future",
      favorites: "Your Favorites",
      vegans: "For Vegans' Joy",
      cheeses: "Farm Cheeses",
      home: "Brought from Home",
      bread: "With our fresh bread",
      cool: "Summer and cool",
      hit: "Always hit the spot"
    }
  }
};
const ro = {
  nav: {
    home: "Acasă",
    menu: "Meniu",
    reservations: "Rezervări",
    about: "Despre",
    contact: "Contact"
  },
  hero: {
    eyebrow: "Fondat în Chișinău",
    title1: "O Experiență Culinară",
    title2: "Premium",
    subtitle: "Descoperiți cele mai fine creații culinare într-o atmosferă elegantă.",
    cta: "Vezi Meniul"
  },
  reservations: {
    eyebrow: "Rezervări",
    title: "Rezervați o Masă",
    subtitle: "Rezervați-vă masa și lăsați-ne să vă pregătim o seară de neuitat.",
    name: "Nume",
    date: "Data",
    time: "Ora",
    guests: "Persoane",
    submit: "Rezervă Masa",
    confirmedTitle: "Rezervare Confirmată!",
    confirmedBody: "Vă mulțumim că ați ales Crosta. Vă așteptăm cu drag.",
    close: "Închide"
  },
  about: {
    eyebrow: "Despre noi",
    title: "Povestea Noastră",
    body: "La Crosta Kitchen Bakery credem în crearea unor experiențe culinare memorabile. Folosim cele mai fine ingrediente pentru a vă oferi preparate rafinate, lucrate cu pasiune și măiestrie.",
    body2: "De la brutăria noastră artizanală până la bucătăria de sezon, fiecare farfurie spune o poveste despre meșteșug, grijă și respect pentru produsele pe care le servim."
  },
  footer: {
    eyebrow: "Contact",
    title: "Vizitați-ne",
    address: "Chișinău MD, Strada Miron Costin 13/7, MD-2000",
    hours: "Deschis Zilnic: 8:00 – 22:00",
    rights: "Toate drepturile rezervate.",
    tagline: "Kitchen Bakery"
  },
  menu: {
    eyebrow: "À la carte",
    title: "Meniul Nostru de Autor",
    subtitle: "Compoziții de sezon din bucătăria și brutăria noastră, lucrate cu grijă din cele mai fine ingrediente.",
    legendTitle: "Note / Semne convenționale",
    legend: {
      breakfast: "Servim micul dejun între",
      breakfastTime: "9:00 și 21:00",
      main: "Meniul principal se servește între",
      mainTime: "12:00 și 23:00",
      spicy: "picant sau iute",
      fish: "atenție: oase de pește",
      garlic: "conține usturoi",
      slow: "prepararea durează peste 25 de minute",
      allergy: "Dacă aveți alergii sau preferințe alimentare, vă rugăm să ne anunțați."
    },
    sections: {
      breakfasts: "Mic Dejun",
      appetizers: "Aperitive",
      salads: "Salate",
      soups: "Supe",
      hot: "Feluri Calde cu Garnitură"
    },
    groups: {
      egg: "Preparate cu Ouă",
      future: "Înapoi în Copilărie",
      favorites: "Preferatele Voastre",
      vegans: "Bucuria Veganilor",
      cheeses: "Brânzeturi de Fermă",
      home: "Aduse de Acasă",
      bread: "Cu pâinea noastră proaspătă",
      cool: "Vară și răcoritoare",
      hit: "Mereu pe gustul tău"
    }
  }
};
const ru = {
  nav: {
    home: "Главная",
    menu: "Меню",
    reservations: "Бронирование",
    about: "О нас",
    contact: "Контакты"
  },
  hero: {
    eyebrow: "Основано в Кишинёве",
    title1: "Премиальный",
    title2: "Ресторанный Опыт",
    subtitle: "Откройте для себя изысканные кулинарные творения в элегантной атмосфере.",
    cta: "Открыть Меню"
  },
  reservations: {
    eyebrow: "Бронь",
    title: "Забронировать Столик",
    subtitle: "Забронируйте столик — мы подготовим для вас незабываемый вечер.",
    name: "Имя",
    date: "Дата",
    time: "Время",
    guests: "Гостей",
    submit: "Забронировать",
    confirmedTitle: "Бронирование Подтверждено!",
    confirmedBody: "Благодарим, что выбрали Crosta. Мы будем рады вас видеть.",
    close: "Закрыть"
  },
  about: {
    eyebrow: "О нас",
    title: "Наша История",
    body: "В Crosta Kitchen Bakery мы создаём незабываемые гастрономические впечатления. Мы выбираем лучшие ингредиенты, чтобы подавать вам изысканные блюда, приготовленные со страстью и мастерством.",
    body2: "От нашей пекарни до сезонной кухни — каждая тарелка рассказывает историю ремесла, заботы и уважения к продуктам."
  },
  footer: {
    eyebrow: "Контакты",
    title: "Найти Нас",
    address: "Кишинёв, ул. Мирон Костин 13/7, MD-2000",
    hours: "Ежедневно: 8:00 – 22:00",
    rights: "Все права защищены.",
    tagline: "Kitchen Bakery"
  },
  menu: {
    eyebrow: "À la carte",
    title: "Наше Фирменное Меню",
    subtitle: "Сезонные блюда нашей кухни и пекарни, приготовленные с заботой из лучших ингредиентов.",
    legendTitle: "Сноски / Условные обозначения",
    legend: {
      breakfast: "Завтраки подаются с",
      breakfastTime: "9:00 до 21:00",
      main: "Основное меню подаётся с",
      mainTime: "12:00 до 23:00",
      spicy: "острое или пикантное",
      fish: "осторожно: рыбные кости",
      garlic: "содержит чеснок",
      slow: "приготовление занимает более 25 минут",
      allergy: "Если у вас есть аллергии или особые предпочтения, пожалуйста, сообщите нам."
    },
    sections: {
      breakfasts: "Завтраки",
      appetizers: "Закуски",
      salads: "Салаты",
      soups: "Супы",
      hot: "Горячие Блюда с Гарниром"
    },
    groups: {
      egg: "Блюда из яиц",
      future: "Назад в детство",
      favorites: "Ваши любимые",
      vegans: "Радость веганов",
      cheeses: "Фермерские сыры",
      home: "Принесённое из дома",
      bread: "С нашим свежим хлебом",
      cool: "Летние и прохладные",
      hit: "Всегда в точку"
    }
  }
};
if (!instance.isInitialized) {
  instance.use(Browser).use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ro: { translation: ro },
      ru: { translation: ru }
    },
    fallbackLng: "en",
    supportedLngs: ["en", "ro", "ru"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      lookupLocalStorage: "crosta-lang"
    }
  });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$2 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Crosta Kitchen Bakery — Premium Dining in Chișinău" },
      { name: "description", content: "A premium dining experience at Crosta Kitchen Bakery — elegant atmosphere, fresh bakery, and exquisite cuisine in Chișinău." },
      { name: "author", content: "Crosta Kitchen Bakery" },
      { property: "og:title", content: "Crosta Kitchen Bakery" },
      { property: "og:description", content: "A premium dining experience in Chișinău." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Crosta" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$2.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
const $$splitComponentImporter$1 = () => import("./menu-C_8Wbn1n.mjs");
const Route$1 = createFileRoute("/menu")({
  head: () => ({
    meta: [{
      title: "Menu — Crosta Kitchen Bakery"
    }, {
      name: "description",
      content: "Explore the signature menu at Crosta Kitchen Bakery — breakfast, appetizers, salads, soups and hot dishes crafted from the finest ingredients."
    }, {
      property: "og:title",
      content: "Menu — Crosta Kitchen Bakery"
    }, {
      property: "og:description",
      content: "Our signature menu in Chișinău."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-CCMSoQZI.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Crosta Kitchen Bakery — A Premium Dining Experience"
    }, {
      name: "description",
      content: "Discover Crosta Kitchen Bakery in Chișinău — elegant atmosphere, artisan bakery, and exquisite seasonal cuisine."
    }, {
      property: "og:title",
      content: "Crosta Kitchen Bakery"
    }, {
      property: "og:description",
      content: "A premium dining experience in an elegant atmosphere."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const MenuRoute = Route$1.update({
  id: "/menu",
  path: "/menu",
  getParentRoute: () => Route$2
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$2
});
const rootRouteChildren = {
  IndexRoute,
  MenuRoute
};
const routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
