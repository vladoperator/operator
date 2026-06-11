import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, X, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { T as TSS_SERVER_FUNCTION, g as getServerFnById, c as createServerFn } from "./server-CGw0Y4il.js";
import { z } from "zod";
import "node:async_hooks";
import "h3-v2";
import "@tanstack/router-core";
import "seroval";
import "@tanstack/history";
import "@tanstack/router-core/ssr/client";
import "@tanstack/router-core/ssr/server";
import "@tanstack/react-router/ssr/server";
const heroImg = "/assets/hero-BN5tamU-.jpg";
const aboutImg = "/assets/about-CyOri0Q-.jpg";
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const sendReservation = createServerFn({
  method: "POST"
}).inputValidator(z.object({
  name: z.string().min(1),
  date: z.string().min(1),
  time: z.string().min(1),
  guests: z.number().min(1)
})).handler(createSsrRpc("9f4bb2cd98d614225fcadf4b7fd806933c5bafeac5c38edd29a85a82bbf19d7a"));
function Index() {
  const {
    t
  } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "19:00",
    guests: 2
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const times = Array.from({
    length: 15
  }, (_, i) => {
    const h = (8 + i).toString().padStart(2, "0");
    return `${h}:00`;
  });
  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const result = await sendReservation({
        data: form
      });
      if (result.success) {
        setModalOpen(true);
      } else {
        setError("Could not submit reservation. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError(err?.message || "An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  const closeModal = () => {
    setModalOpen(false);
    setForm({
      name: "",
      date: "",
      time: "19:00",
      guests: 2
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative isolate flex min-h-[88vh] items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Crosta restaurant interior", width: 1920, height: 1280, className: "absolute inset-0 -z-10 h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-black/80" }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6 text-center text-cream", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-[var(--color-gold)]", children: t("hero.eyebrow") }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl", children: [
          t("hero.title1"),
          /* @__PURE__ */ jsx("br", {}),
          t("hero.title2")
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-6 max-w-xl text-base text-cream/80 sm:text-lg", children: t("hero.subtitle") }),
        /* @__PURE__ */ jsxs(Link, { to: "/menu", className: "mt-10 inline-flex items-center gap-2 border border-[var(--color-gold)] bg-transparent px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-[var(--color-gold)] transition-all hover:bg-[var(--color-gold)] hover:text-[var(--color-charcoal)]", children: [
          t("hero.cta"),
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "reservations", className: "bg-background py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-[var(--color-bronze)]", children: t("reservations.eyebrow") }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-serif text-4xl sm:text-5xl", children: t("reservations.title") }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-lg text-sm text-muted-foreground", children: t("reservations.subtitle") })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: submit, className: "mt-12 grid gap-5 rounded-sm border border-border bg-card p-8 sm:grid-cols-2 sm:p-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs uppercase tracking-[0.18em] text-muted-foreground", children: t("reservations.name") }),
          /* @__PURE__ */ jsx("input", { required: true, type: "text", value: form.name, onChange: (e) => setForm({
            ...form,
            name: e.target.value
          }), className: "mt-2 w-full border-b border-border bg-transparent py-2.5 outline-none focus:border-[var(--color-gold)]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs uppercase tracking-[0.18em] text-muted-foreground", children: t("reservations.date") }),
          /* @__PURE__ */ jsx("input", { required: true, type: "date", value: form.date, onChange: (e) => setForm({
            ...form,
            date: e.target.value
          }), className: "mt-2 w-full border-b border-border bg-transparent py-2.5 outline-none focus:border-[var(--color-gold)]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs uppercase tracking-[0.18em] text-muted-foreground", children: t("reservations.time") }),
          /* @__PURE__ */ jsx("select", { value: form.time, onChange: (e) => setForm({
            ...form,
            time: e.target.value
          }), className: "mt-2 w-full border-b border-border bg-transparent py-2.5 outline-none focus:border-[var(--color-gold)]", children: times.map((t2) => /* @__PURE__ */ jsx("option", { value: t2, children: t2 }, t2)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs uppercase tracking-[0.18em] text-muted-foreground", children: t("reservations.guests") }),
          /* @__PURE__ */ jsx("input", { required: true, type: "number", min: 1, max: 20, value: form.guests, onChange: (e) => setForm({
            ...form,
            guests: Number(e.target.value)
          }), className: "mt-2 w-full border-b border-border bg-transparent py-2.5 outline-none focus:border-[var(--color-gold)]" })
        ] }),
        error && /* @__PURE__ */ jsx("div", { className: "sm:col-span-2 text-sm text-destructive border border-destructive/20 bg-destructive/5 p-3 text-center", children: error }),
        /* @__PURE__ */ jsx("button", { type: "submit", disabled: submitting, className: "sm:col-span-2 mt-4 bg-[var(--color-charcoal)] px-8 py-4 text-xs uppercase tracking-[0.25em] text-cream transition-colors hover:bg-[var(--color-gold)] hover:text-[var(--color-charcoal)] disabled:opacity-50 disabled:cursor-not-allowed", children: submitting ? "Submitting..." : t("reservations.submit") })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "about", className: "border-t border-border bg-[var(--color-charcoal)] py-24 text-cream sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]", children: t("about.eyebrow") }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-serif text-4xl text-cream sm:text-5xl", children: t("about.title") }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-base leading-relaxed text-cream/80", children: t("about.body") }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 h-px w-20 bg-[var(--color-gold)]" }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-sm leading-relaxed text-cream/65", children: t("about.body2") })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: aboutImg, alt: "Artisan baker", width: 1280, height: 1280, loading: "lazy", className: "h-full w-full object-cover" }) })
    ] }) }),
    modalOpen && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-md border border-[var(--color-gold)]/40 bg-background p-10 text-center shadow-2xl", children: [
      /* @__PURE__ */ jsx("button", { onClick: closeModal, className: "absolute right-4 top-4 text-muted-foreground hover:text-foreground", "aria-label": t("reservations.close"), children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsx(Sparkles, { className: "mx-auto h-10 w-10 text-[var(--color-gold)]" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-5 font-serif text-3xl", children: t("reservations.confirmedTitle") }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: t("reservations.confirmedBody") }),
      /* @__PURE__ */ jsx("button", { onClick: closeModal, className: "mt-8 inline-block bg-[var(--color-charcoal)] px-8 py-3 text-xs uppercase tracking-[0.25em] text-cream hover:bg-[var(--color-gold)] hover:text-[var(--color-charcoal)]", children: t("reservations.close") })
    ] }) })
  ] });
}
export {
  Index as component
};
