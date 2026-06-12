import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Sparkles, X, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
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

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);

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

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Crosta restaurant interior"
            width={1920}
            height={1280}
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/90" />
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto max-w-5xl px-6 text-center text-cream pt-20"
        >
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] font-medium">
            {t("hero.eyebrow")}
          </motion.p>
          <motion.h1 variants={fadeUp} className="mt-8 font-serif text-6xl leading-[1.05] tracking-tight sm:text-7xl md:text-8xl text-shadow-premium">
            {t("hero.title1")}<br />
            <span className="text-white/90">{t("hero.title2")}</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mx-auto mt-8 max-w-2xl text-base text-cream/70 sm:text-lg font-light leading-relaxed">
            {t("hero.subtitle")}
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              to="/menu"
              className="mt-12 inline-flex items-center gap-3 border border-[var(--color-gold)]/50 bg-black/20 backdrop-blur-md px-10 py-4 text-xs uppercase tracking-[0.25em] text-[var(--color-gold)] transition-all duration-500 hover:bg-[var(--color-gold)] hover:text-black hover:border-[var(--color-gold)] hover:shadow-[0_0_30px_rgba(202,138,4,0.3)] rounded-full group"
            >
              {t("hero.cta")}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0 overflow-hidden relative">
            <motion.div 
              animate={{ y: [0, 64] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="w-full h-1/2 bg-[var(--color-gold)]"
            />
          </div>
        </motion.div>
      </section>

      {/* RESERVATIONS */}
      <section id="reservations" className="relative bg-background py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-background to-background"></div>
        <div className="relative mx-auto max-w-4xl px-6">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.3em] text-[var(--color-bronze)] font-medium">
              {t("reservations.eyebrow")}
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-serif text-5xl sm:text-6xl tracking-tight">
              {t("reservations.title")}
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground/80 leading-relaxed font-light">
              {t("reservations.subtitle")}
            </motion.p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={submit} 
            className="mt-16 grid gap-8 glass-panel rounded-3xl p-8 sm:grid-cols-2 sm:p-12 relative z-10"
          >
            <div className="sm:col-span-2 group">
              <label className="block text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/70 transition-colors group-focus-within:text-[var(--color-gold)]">
                {t("reservations.name")}
              </label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full border-b border-border/50 bg-transparent py-3 text-lg outline-none transition-colors focus:border-[var(--color-gold)]"
                placeholder="John Doe"
              />
            </div>
            <div className="group">
              <label className="block text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/70 transition-colors group-focus-within:text-[var(--color-gold)]">
                {t("reservations.date")}
              </label>
              <input
                required
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="mt-2 w-full border-b border-border/50 bg-transparent py-3 text-lg outline-none transition-colors focus:border-[var(--color-gold)]"
              />
            </div>
            <div className="group">
              <label className="block text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/70 transition-colors group-focus-within:text-[var(--color-gold)]">
                {t("reservations.time")}
              </label>
              <select
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="mt-2 w-full border-b border-border/50 bg-transparent py-3 text-lg outline-none transition-colors focus:border-[var(--color-gold)]"
              >
                {times.map((t) => (
                  <option key={t} value={t} className="bg-background">{t}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2 group">
              <label className="block text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/70 transition-colors group-focus-within:text-[var(--color-gold)]">
                {t("reservations.guests")}
              </label>
              <input
                required
                type="number"
                min={1}
                max={20}
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })}
                className="mt-2 w-full border-b border-border/50 bg-transparent py-3 text-lg outline-none transition-colors focus:border-[var(--color-gold)]"
              />
            </div>
            
            {error && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="sm:col-span-2 text-sm text-destructive border border-destructive/20 bg-destructive/5 rounded-lg p-4 text-center">
                {error}
              </motion.div>
            )}
            
            <div className="sm:col-span-2 mt-6">
              <button
                type="submit"
                disabled={submitting}
                className="w-full relative overflow-hidden rounded-full bg-foreground px-8 py-5 text-xs font-medium uppercase tracking-[0.25em] text-background transition-all hover:bg-[var(--color-gold)] hover:text-black hover:shadow-[0_0_20px_rgba(202,138,4,0.3)] disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {submitting ? "Submitting..." : t("reservations.submit")}
                  {!submitting && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                </span>
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative bg-[#0a0a0a] py-32 sm:py-48 overflow-hidden text-cream">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[var(--color-gold)]/5 via-transparent to-transparent"></div>
        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-24">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.p variants={fadeUp} className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--color-gold)]">
              {t("about.eyebrow")}
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
              {t("about.title")}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-8 text-base font-light leading-relaxed text-cream/70">
              {t("about.body")}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 h-px w-24 bg-gradient-to-r from-[var(--color-gold)] to-transparent" />
            <motion.p variants={fadeUp} className="mt-10 text-sm font-light leading-relaxed text-cream/50">
              {t("about.body2")}
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--color-gold)]/20 to-transparent blur-2xl opacity-50 rounded-[40px]"></div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src={aboutImg}
                alt="Artisan baker"
                width={1280}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md rounded-3xl border border-[var(--color-gold)]/30 bg-black/90 p-12 text-center shadow-[0_0_50px_rgba(202,138,4,0.15)]"
          >
            <button
              onClick={closeModal}
              className="absolute right-6 top-6 text-white/50 hover:text-white transition-colors"
              aria-label={t("reservations.close")}
            >
              <X className="h-5 w-5" />
            </button>
            <div className="mx-auto w-16 h-16 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-[var(--color-gold)]" />
            </div>
            <h2 className="font-serif text-4xl text-white">{t("reservations.confirmedTitle")}</h2>
            <p className="mt-4 text-sm font-light leading-relaxed text-white/60">
              {t("reservations.confirmedBody")}
            </p>
            <button
              onClick={closeModal}
              className="mt-10 inline-flex w-full justify-center rounded-full bg-[var(--color-gold)] px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-black transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              {t("reservations.close")}
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}
