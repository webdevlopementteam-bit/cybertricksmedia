"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  ArrowRight, ChevronRight, Plus, Check, Layers,
  Search, Sparkles, MapPin, Store, Tv, Film, Clapperboard, Video, Music,
  Radio, ShoppingBag, MonitorPlay, Building2, Signpost, Projector,
  Code2, Smartphone, Palette, Database, ShieldCheck, Crown, Star, Users,
  Handshake, CalendarDays, Newspaper, Trophy, PenTool, BarChart3, Target,
  Zap, Megaphone, Share2,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF, faInstagram, faLinkedinIn, faYoutube, faXTwitter,
  faThreads, faGoogle, faMeta,
} from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

/* ================= ICON MAPS ================= */
const LUCIDE = {
  Search, Sparkles, MapPin, Store, Tv, Film, Clapperboard, Video, Music,
  Radio, ShoppingBag, MonitorPlay, Building2, Signpost, Projector,
  Code2, Smartphone, Palette, Database, ShieldCheck, Crown, Star, Users,
  Handshake, CalendarDays, Newspaper, Trophy, PenTool, BarChart3, Target,
  Zap, Megaphone, Share2, Layers,
};

const BRANDS = {
  facebook: faFacebookF,
  instagram: faInstagram,
  linkedin: faLinkedinIn,
  youtube: faYoutube,
  x: faXTwitter,
  threads: faThreads,
  google: faGoogle,
  meta: faMeta,
};

const PARTICLES = [
  { top: "16%", left: "8%",  color: "bg-aqua-400",   dur: 18, dx: 40,  dy: -30 },
  { top: "70%", left: "16%", color: "bg-accent-400", dur: 22, dx: -35, dy: 40  },
  { top: "26%", left: "88%", color: "bg-plum-400",   dur: 20, dx: 45,  dy: 35  },
  { top: "80%", left: "76%", color: "bg-aqua-300",   dur: 24, dx: -40, dy: -35 },
  { top: "48%", left: "50%", color: "bg-accent-300", dur: 19, dx: 30,  dy: 45  },
];

/* Renders a lucide OR fontawesome icon from a string name */
function SubIcon({ sub, className = "size-5" }) {
  if (sub?.fa && BRANDS[sub.fa]) {
    return <FontAwesomeIcon icon={BRANDS[sub.fa]} className="h-4 w-4" />;
  }
  const I = LUCIDE[sub?.icon] || Layers;
  return <I className={className} />;
}

/* Renders a value-card icon from a string name */
function ValueIcon({ name, className = "size-5" }) {
  const I = LUCIDE[name] || Layers;
  return <I className={className} />;
}

/* ================================================================
   COMPONENT
================================================================ */
export default function CategoryPage({ data }) {
  const [open, setOpen] = useState(0);

  const valRef = useRef(null);
  const valInView = useInView(valRef, { once: true, margin: "-100px" });
  const listRef = useRef(null);
  const listInView = useInView(listRef, { once: true, margin: "-100px" });

  if (!data) return null;

  return (
    <>
      {/* ============================================================
          BANNER — DARK
      ============================================================ */}
      <section
        className="relative flex min-h-[520px] items-center overflow-hidden py-20 lg:min-h-[600px]"
        style={{
          background:
            "linear-gradient(140deg, #0e1230 0%, #1a2152 38%, #241b52 68%, #2e1a48 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute -left-40 top-0 size-[480px] rounded-full bg-aqua-500/16 blur-[150px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 size-[480px] rounded-full bg-accent-500/18 blur-[150px]" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {PARTICLES.map((p, i) => (
            <motion.span
              key={i}
              className={`absolute size-[5px] rounded-full ${p.color}`}
              style={{ top: p.top, left: p.left }}
              animate={{
                x: [0, p.dx, 0, -p.dx * 0.6, 0],
                y: [0, p.dy, -p.dy * 0.5, p.dy * 0.3, 0],
                opacity: [0.25, 0.9, 0.45, 0.85, 0.25],
                scale: [1, 1.7, 1.1, 1.5, 1],
              }}
              transition={{
                duration: p.dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            />
          ))}
        </div>

        <div className="container-x relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">

            {/* ---------- LEFT ---------- */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap items-center gap-2 text-[13px] text-white/50"
              >
                <Link href="/" className="transition hover:text-aqua-300">Home</Link>
                <ChevronRight className="size-3.5" />
                <Link href="/services" className="transition hover:text-aqua-300">
                  Services
                </Link>
                <ChevronRight className="size-3.5" />
                <span className="text-white/85">{data.eyebrow}</span>
              </motion.div>

              <motion.span
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm"
              >
                <Layers className="size-3.5" />
                {data.subs.length} Services Inside
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22 }}
                className="mt-6 text-[36px] font-extrabold leading-[1.07] tracking-tight text-white sm:text-[50px] lg:text-[56px]"
              >
                {data.title}{" "}
                <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
                  {data.titleAccent}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.34 }}
                className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/60"
              >
                {data.intro}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.46 }}
                className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-5"
              >
                {data.stats.map((s, i) => (
                  <div key={s.l} className="flex items-center gap-9">
                    <div>
                      <p className="text-[24px] font-extrabold leading-none text-white sm:text-[28px]">
                        {s.v}
                      </p>
                      <p className="mt-1.5 text-[12.5px] font-medium text-white/50">
                        {s.l}
                      </p>
                    </div>
                    {i < data.stats.length - 1 && (
                      <span className="hidden h-9 w-px bg-white/15 sm:block" />
                    )}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ---------- RIGHT: ILLUSTRATION ---------- */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="pointer-events-none absolute left-1/2 top-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-aqua-500/25 via-plum-500/20 to-accent-500/25 blur-[90px]" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute left-1/2 top-1/2 size-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.08]"
              />

              {/* Floating sub-service chips */}
              {data.subs.slice(0, 3).map((s, i) => {
                const pos = ["-left-4 top-4", "-right-2 top-1/3", "bottom-6 left-2"][i];
                const dir = [-14, 16, -12][i];
                const dur = [4.5, 5.5, 5.0][i];
                return (
                  <motion.div
                    key={s.name}
                    animate={{ y: [0, dir, 0] }}
                    transition={{
                      duration: dur,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.6,
                    }}
                    className={`absolute z-20 flex max-w-[210px] items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl ${pos}`}
                  >
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${data.gradient} text-white`}
                    >
                      <SubIcon sub={s} className="size-4" />
                    </span>
                    <p className="truncate text-[12.5px] font-bold text-white">
                      {s.name}
                    </p>
                  </motion.div>
                );
              })}

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 mx-auto w-full max-w-[400px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={data.banner}
                  alt={data.eyebrow}
                  className="h-auto w-full object-contain drop-shadow-[0_25px_50px_rgba(111,207,231,0.3)]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
      </section>

      {/* ============================================================
          VALUE CARDS — LIGHT
      ============================================================ */}
      <section ref={valRef} className="relative overflow-hidden bg-white py-16">
        <div className="pointer-events-none absolute -left-40 top-0 size-[400px] rounded-full bg-aqua-400/12 blur-[130px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 size-[400px] rounded-full bg-accent-400/12 blur-[130px]" />

        <div className="container-x relative z-10">
          <div className="grid gap-5 sm:grid-cols-3">
            {data.values.map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 28 }}
                animate={valInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative overflow-hidden rounded-[24px] border border-line bg-canvas p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-transparent hover:bg-white hover:shadow-[0_24px_54px_-24px_rgba(43,57,144,0.45)]"
              >
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-gradient-to-br ${data.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                />

                <span
                  className={`relative grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${data.gradient} text-white shadow-[0_12px_28px_-10px_rgba(43,57,144,0.5)] transition-transform duration-300 group-hover:scale-110`}
                >
                  <ValueIcon name={v.icon} />
                </span>

                <p className="relative mt-5 text-[16.5px] font-bold text-ink">{v.t}</p>
                <p className="relative mt-2 text-[14px] leading-relaxed text-ink-soft">
                  {v.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          EXPANDING INDEX — LIGHT
      ============================================================ */}
      <section ref={listRef} className="relative overflow-hidden bg-canvas py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(43,57,144,0.16) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "radial-gradient(ellipse 70% 50% at 50% 0%, #000 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 50% at 50% 0%, #000 30%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute -right-40 top-1/3 size-[440px] rounded-full bg-plum-400/14 blur-[140px]" />

        <div className="container-x relative z-10">
          {/* Heading */}
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={listInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent-500" />
                </span>
                Inside {data.eyebrow}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 26 }}
                animate={listInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="mt-6 max-w-xl text-[32px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[42px]"
              >
                Pick What You Need.{" "}
                <span className="grad-text-anim">Or Take It All.</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={listInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="max-w-sm text-[15px] leading-relaxed text-ink-soft lg:text-right"
            >
              Tap any service to read more, or head straight to its page for the full
              breakdown.
            </motion.p>
          </div>

          {/* Rows */}
          <div className="mt-12 overflow-hidden rounded-[28px] border border-line bg-white">
            {data.subs.map((s, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 22 }}
                  animate={listInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.06 }}
                  className={`group relative border-b border-line last:border-b-0 ${
                    isOpen ? "bg-canvas" : "bg-white"
                  } transition-colors duration-400`}
                >
                  {/* Left gradient bar */}
                  <span
                    className={`absolute inset-y-0 left-0 w-[4px] origin-top bg-gradient-to-b ${data.gradient} transition-transform duration-400 ${
                      isOpen ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                    }`}
                  />

                  {/* Header row */}
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-5 px-6 py-6 text-left sm:px-9 sm:py-7"
                  >
                    <span
                      className={`shrink-0 text-[15px] font-extrabold tabular-nums transition-colors duration-300 ${
                        isOpen ? "text-accent-500" : "text-ink-mute"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`grid size-11 shrink-0 place-items-center rounded-2xl transition-all duration-400 ${
                        isOpen
                          ? `bg-gradient-to-br ${data.gradient} text-white shadow-[0_12px_28px_-10px_rgba(43,57,144,0.5)]`
                          : "bg-brand-50 text-brand-600 group-hover:scale-110"
                      }`}
                    >
                      <SubIcon sub={s} />
                    </span>

                    <span
                      className={`min-w-0 flex-1 text-[17px] font-bold leading-snug transition-all duration-300 sm:text-[20px] ${
                        isOpen ? "text-brand-600" : "text-ink group-hover:translate-x-1"
                      }`}
                    >
                      {s.name}
                    </span>

                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-400 ${
                        isOpen
                          ? "rotate-45 border-transparent bg-gradient-to-br from-brand-600 to-accent-500 text-white"
                          : "border-line text-ink-mute group-hover:border-accent-300 group-hover:text-accent-500"
                      }`}
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>

                  {/* Expanded body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-8 sm:pl-[124px] sm:pr-9">
                          <p className="max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                            {s.desc}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {s.tags.map((t) => (
                              <span
                                key={t}
                                className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1.5 text-[12.5px] font-semibold text-brand-600"
                              >
                                <Check className="size-3" strokeWidth={3} />
                                {t}
                              </span>
                            ))}
                          </div>

                          <div className="mt-7 flex flex-wrap items-center gap-3">
                            <Link
                              href={s.href}
                              className="group/btn inline-flex items-center gap-3 rounded-full border-[1.5px] border-line bg-white px-6 py-3.5 text-[14.5px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_16px_38px_-14px_rgba(43,57,144,0.5)]"
                            >
                              Explore {s.name.split("(")[0].trim()}
                              <span
                                className={`grid size-7 place-items-center rounded-full bg-gradient-to-br ${data.gradient} text-white transition-transform duration-300 group-hover/btn:translate-x-1`}
                              >
                                <ArrowRight className="size-3.5" />
                              </span>
                            </Link>

                            <Link
                              href="/contact-us"
                              className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-[14px] font-semibold text-brand-600 transition-all duration-300 hover:text-accent-600"
                            >
                              Get a Quote
                              <ArrowRight className="size-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={listInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative mt-16 overflow-hidden rounded-[28px] p-9 text-white sm:p-11"
            style={{
              background:
                "linear-gradient(120deg, #1e2762 0%, #2B3990 35%, #7B3FA0 70%, #E0459A 100%)",
            }}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-white/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-aqua-400/25 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div>
                <h3 className="max-w-lg text-[24px] font-extrabold leading-tight tracking-tight sm:text-[30px]">
                  Still deciding which one fits?
                </h3>
                <p className="mt-3 max-w-md text-[15px] text-white/70">
                  Tell us the goal in one line and we&apos;ll tell you honestly which
                  of these {data.subs.length} gets you there fastest.
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-brand-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-accent-600"
                >
                  Book a Free Call
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/35 px-7 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/12"
                >
                  All Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}