import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
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
  const { t, i18n } = useTranslation();
  const [open, setOpen] = reactExports.useState(false);
  const [langOpen, setLangOpen] = reactExports.useState(false);
  const lang = (i18n.resolvedLanguage ?? "en").toUpperCase();
  const setLang = (code) => i18n.changeLanguage(code.toLowerCase());
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
const $$splitComponentImporter = () => import("./index-Dm2UNlr0.mjs");
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
