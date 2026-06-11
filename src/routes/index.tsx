import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Sparkles, X, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import { sendReservation } from "../lib/api/reservation.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crosta Kitchen Bakery — A Premium Dining Experience" },
      { name: "description", content: "Discover Crosta Kitchen Bakery in Chișinău — elegant atmosphere, artisan bakery, and exquisite seasonal cuisine." },
      { property: "og:title", content: "Crosta Kitchen Bakery" },
      { property: "og:description", content: "A premium dining experience in an elegant atmosphere." },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", date: "", time: "19:00", guests: 2 });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const times = Array.from({ length: 15 }, (_, i) => {
    const h = (8 + i).toString().padStart(2, "0");
    return `${h}:00`;
  });

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const result = await sendReservation({ data: form });
      if (result.success) {
        setModalOpen(true);
      } else {
        setError("Could not submit reservation. Please try again.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "An unexpected error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setForm({ name: "", date: "", time: "19:00", guests: 2 });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[88vh] items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Crosta restaurant interior"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="mx-auto max-w-4xl px-6 text-center text-cream">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)]">
            {t("hero.eyebrow")}
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            {t("hero.title1")}<br />{t("hero.title2")}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-cream/80 sm:text-lg">
            {t("hero.subtitle")}
          </p>
          <Link
            to="/menu"
            className="mt-10 inline-flex items-center gap-2 border border-[var(--color-gold)] bg-transparent px-8 py-3.5 text-xs uppercase tracking-[0.25em] text-[var(--color-gold)] transition-all hover:bg-[var(--color-gold)] hover:text-[var(--color-charcoal)]"
          >
            {t("hero.cta")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* RESERVATIONS */}
      <section id="reservations" className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-bronze)]">{t("reservations.eyebrow")}</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">{t("reservations.title")}</h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
              {t("reservations.subtitle")}
            </p>
          </div>

          <form onSubmit={submit} className="mt-12 grid gap-5 rounded-sm border border-border bg-card p-8 sm:grid-cols-2 sm:p-10">
            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">{t("reservations.name")}</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full border-b border-border bg-transparent py-2.5 outline-none focus:border-[var(--color-gold)]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">{t("reservations.date")}</label>
              <input
                required
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="mt-2 w-full border-b border-border bg-transparent py-2.5 outline-none focus:border-[var(--color-gold)]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">{t("reservations.time")}</label>
              <select
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="mt-2 w-full border-b border-border bg-transparent py-2.5 outline-none focus:border-[var(--color-gold)]"
              >
                {times.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">{t("reservations.guests")}</label>
              <input
                required
                type="number"
                min={1}
                max={20}
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                className="mt-2 w-full border-b border-border bg-transparent py-2.5 outline-none focus:border-[var(--color-gold)]"
              />
            </div>
            {error && (
              <div className="sm:col-span-2 text-sm text-destructive border border-destructive/20 bg-destructive/5 p-3 text-center">
                {error}
              </div>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="sm:col-span-2 mt-4 bg-[var(--color-charcoal)] px-8 py-4 text-xs uppercase tracking-[0.25em] text-cream transition-colors hover:bg-[var(--color-gold)] hover:text-[var(--color-charcoal)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : t("reservations.submit")}
            </button>
          </form>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border bg-[var(--color-charcoal)] py-24 text-cream sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">{t("about.eyebrow")}</p>
            <h2 className="mt-3 font-serif text-4xl text-cream sm:text-5xl">{t("about.title")}</h2>
            <p className="mt-6 text-base leading-relaxed text-cream/80">
              {t("about.body")}
            </p>
            <div className="mt-8 h-px w-20 bg-[var(--color-gold)]" />
            <p className="mt-8 text-sm leading-relaxed text-cream/65">
              {t("about.body2")}
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={aboutImg}
              alt="Artisan baker"
              width={1280}
              height={1280}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md border border-[var(--color-gold)]/40 bg-background p-10 text-center shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
              aria-label={t("reservations.close")}
            >
              <X className="h-5 w-5" />
            </button>
            <Sparkles className="mx-auto h-10 w-10 text-[var(--color-gold)]" />
            <h2 className="mt-5 font-serif text-3xl">{t("reservations.confirmedTitle")}</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              {t("reservations.confirmedBody")}
            </p>
            <button
              onClick={closeModal}
              className="mt-8 inline-block bg-[var(--color-charcoal)] px-8 py-3 text-xs uppercase tracking-[0.25em] text-cream hover:bg-[var(--color-gold)] hover:text-[var(--color-charcoal)]"
            >
              {t("reservations.close")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
