"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  ArrowRight, ChevronRight, ChevronDown, Check, Sparkles, Layers,
  Users, Target, BarChart3, Settings, Compass, Palette, TrendingUp,
  Megaphone, ShieldCheck, Zap, Search, Star, Crown, Code2, Clapperboard,
  Radio, MapPin, Store, Video, Music, Film, Building2, CalendarDays,
  Newspaper, Trophy, PenTool, Smartphone, Database, Handshake,
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
  Users, Target, BarChart3, Settings, Compass, Palette, TrendingUp,
  Megaphone, ShieldCheck, Zap, Search, Star, Crown, Code2, Clapperboard,
  Radio, MapPin, Store, Video, Music, Film, Building2, CalendarDays,
  Newspaper, Trophy, PenTool, Smartphone, Database, Handshake, Sparkles, Layers,
};

const BRANDS = {
  facebook: faFacebookF, instagram: faInstagram, linkedin: faLinkedinIn,
  youtube: faYoutube, x: faXTwitter, threads: faThreads,
  google: faGoogle, meta: faMeta,
};

const PARTICLES = [
  { top: "16%", left: "8%",  color: "bg-aqua-400",   dur: 18, dx: 40,  dy: -30 },
  { top: "70%", left: "16%", color: "bg-accent-400", dur: 22, dx: -35, dy: 40  },
  { top: "26%", left: "88%", color: "bg-plum-400",   dur: 20, dx: 45,  dy: 35  },
  { top: "80%", left: "76%", color: "bg-aqua-300",   dur: 24, dx: -40, dy: -35 },
  { top: "48%", left: "50%", color: "bg-accent-300", dur: 19, dx: 30,  dy: 45  },
];

function Ico({ name, className = "size-5" }) {
  const I = LUCIDE[name] || Layers;
  return <I className={className} />;
}

/* ================================================================
   COMPONENT
================================================================ */
export default function ServicePage({ data }) {
  const [activeGroup, setActiveGroup] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const hlRef = useRef(null);
  const hlInView = useInView(hlRef, { once: true, margin: "-100px" });
  const grpRef = useRef(null);
  const grpInView = useInView(grpRef, { once: true, margin: "-100px" });
  const prcRef = useRef(null);
  const prcInView = useInView(prcRef, { once: true, margin: "-100px" });
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

  if (!data) return null;

  const totalFeatures = data.groups.reduce((n, g) => n + g.items.length, 0);
  const group = data.groups[activeGroup];

  return (
    <>
      {/* ============================================================
          BANNER — DARK
      ============================================================ */}
      <section
        className="relative flex min-h-[520px] items-center overflow-hidden pb-20 pt-[160px] lg:min-h-[620px]"
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
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 100%)",
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
              transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
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
                <Link href={data.parent.href} className="transition hover:text-aqua-300">
                  {data.parent.label}
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
                {data.fa && BRANDS[data.fa] ? (
                  <FontAwesomeIcon icon={BRANDS[data.fa]} className="h-3 w-3" />
                ) : (
                  <Sparkles className="size-3.5" />
                )}
                {totalFeatures} Services Included
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22 }}
                className="mt-6 text-[36px] font-extrabold leading-[1.07] tracking-tight text-white sm:text-[48px] lg:text-[54px]"
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
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <Link href="/contact-us" className="btn-shine">
                  <span className="btn-shine-text">
                    Get a Free Proposal
                    <ArrowRight className="size-4" />
                  </span>
                </Link>
                <Link
                  href={data.parent.href}
                  className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/25 px-6 py-3.5 text-[14.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
                >
                  All {data.parent.label}
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.56 }}
                className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-5"
              >
                {data.stats.map((s, i) => (
                  <div key={s.l} className="flex items-center gap-9">
                    <div>
                      <p className="text-[24px] font-extrabold leading-none text-white sm:text-[28px]">
                        {s.v}
                      </p>
                      <p className="mt-1.5 text-[12.5px] font-medium text-white/50">{s.l}</p>
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

              {/* Floating chips */}
              {data.highlights.slice(0, 3).map((h, i) => {
                const pos = ["-left-4 top-4", "-right-2 top-1/3", "bottom-6 left-2"][i];
                const dir = [-14, 16, -12][i];
                const dur = [4.5, 5.5, 5.0][i];
                return (
                  <motion.div
                    key={h.t}
                    animate={{ y: [0, dir, 0] }}
                    transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
                    className={`absolute z-20 flex max-w-[210px] items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl ${pos}`}
                  >
                    <span className={`grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${data.gradient} text-white`}>
                      <Ico name={h.icon} className="size-4" />
                    </span>
                    <p className="text-[12.5px] font-bold leading-tight text-white">{h.t}</p>
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
          HIGHLIGHTS
      ============================================================ */}
      <section ref={hlRef} className="relative overflow-hidden bg-white py-16">
        <div className="pointer-events-none absolute -left-40 top-0 size-[400px] rounded-full bg-aqua-400/12 blur-[130px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 size-[400px] rounded-full bg-accent-400/12 blur-[130px]" />

        <div className="container-x relative z-10">
          <div className="grid gap-5 sm:grid-cols-3">
            {data.highlights.map((h, i) => (
              <motion.div
                key={h.t}
                initial={{ opacity: 0, y: 28 }}
                animate={hlInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative overflow-hidden rounded-[24px] border border-line bg-canvas p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-transparent hover:bg-white hover:shadow-[0_24px_54px_-24px_rgba(43,57,144,0.45)]"
              >
                <span className={`pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-gradient-to-br ${data.gradient} opacity-[0.14] transition-transform duration-700 group-hover:scale-150`} />
                <span className={`pointer-events-none absolute -bottom-12 -left-12 size-32 rounded-full bg-gradient-to-br ${data.gradient} opacity-[0.1] transition-transform duration-700 group-hover:scale-150`} />

                <span className={`relative grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${data.gradient} text-white shadow-[0_12px_28px_-10px_rgba(43,57,144,0.5)] transition-transform duration-300 group-hover:scale-110`}>
                  <Ico name={h.icon} />
                </span>

                <p className="relative mt-5 text-[16.5px] font-bold text-ink">{h.t}</p>
                <p className="relative mt-2 text-[14px] leading-relaxed text-ink-soft">{h.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHAT'S INCLUDED — TAB SWITCHER
      ============================================================ */}
      <section ref={grpRef} className="relative overflow-hidden bg-canvas py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(43,57,144,0.16) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, #000 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, #000 30%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute -right-40 top-1/3 size-[440px] rounded-full bg-plum-400/14 blur-[140px]" />

        <div className="container-x relative z-10">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={grpInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent-500" />
              </span>
              What&apos;s Included
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              animate={grpInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 text-[32px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[42px]"
            >
              {totalFeatures} Deliverables.{" "}
              <span className="grad-text-anim">One Monthly Fee.</span>
            </motion.h2>
          </div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={grpInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-10 flex flex-wrap justify-center gap-2.5"
          >
            {data.groups.map((g, i) => (
              <button
                key={g.title}
                onClick={() => setActiveGroup(i)}
                className={`relative flex items-center gap-2.5 rounded-full px-5 py-3 text-[13.5px] font-semibold transition-all duration-400 ${
                  activeGroup === i
                    ? "text-white"
                    : "border border-line bg-white text-ink-soft hover:-translate-y-0.5 hover:text-brand-600"
                }`}
              >
                {activeGroup === i && (
                  <motion.span
                    layoutId="svc-pill"
                    className={`absolute inset-0 rounded-full bg-gradient-to-r ${data.gradient} shadow-[0_12px_28px_-12px_rgba(43,57,144,0.6)]`}
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                <Ico name={g.icon} className="relative z-10 size-4" />
                <span className="relative z-10">{g.title}</span>
                <span
                  className={`relative z-10 rounded-full px-1.5 py-0.5 text-[10.5px] font-bold ${
                    activeGroup === i ? "bg-white/25 text-white" : "bg-brand-50 text-brand-600"
                  }`}
                >
                  {g.items.length}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Items */}
         <div className="mt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid auto-rows-min items-start gap-4 md:grid-cols-2"
              >
                {group.items.map((item, i) => (
                  <motion.div
                    key={item.t}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group relative overflow-hidden rounded-[22px] border border-line bg-white p-6 transition-all duration-400 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_22px_50px_-24px_rgba(43,57,144,0.45)]"
                  >
                    <span className={`pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-gradient-to-br ${data.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25`} />

                    <div className="relative flex items-start gap-3.5">
                      <span className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gradient-to-br ${data.gradient} text-white`}>
                        <Check className="size-3" strokeWidth={3} />
                      </span>

                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-[15.5px] font-bold leading-snug text-ink">
                            {item.t}
                          </p>
                          {item.ai && (
                            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-gradient-to-r from-aqua-400 to-plum-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                              <Sparkles className="size-2.5" />
                              AI
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                          {item.d}
                        </p>
                      </div>
                    </div>

                    <span className={`absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r ${data.gradient} transition-transform duration-500 group-hover:scale-x-100`} />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROCESS
      ============================================================ */}
      <section
        ref={prcRef}
        className="relative overflow-hidden py-20"
        style={{
          background:
            "linear-gradient(135deg, #12163a 0%, #1a2152 40%, #241b52 70%, #2e1a48 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage: "radial-gradient(ellipse 75% 60% at 50% 40%, #000 35%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 60% at 50% 40%, #000 35%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute -left-40 top-0 size-[440px] rounded-full bg-aqua-500/14 blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 size-[440px] rounded-full bg-accent-500/16 blur-[140px]" />

        <div className="container-x relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={prcInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm"
            >
              <Compass className="size-3.5" />
              How We Work
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              animate={prcInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 text-[32px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[42px]"
            >
              Four Steps.{" "}
              <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
                No Guesswork.
              </span>
            </motion.h2>
          </div>

          <div className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Connecting line */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={prcInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
              className="absolute left-0 right-0 top-[38px] hidden h-px origin-left bg-gradient-to-r from-aqua-400/40 via-plum-400/40 to-accent-400/40 lg:block"
            />

            {data.process.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 28 }}
                animate={prcInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.13 }}
                className="group relative"
              >
                <span className="relative z-10 grid size-[76px] place-items-center rounded-2xl border border-white/15 bg-white/[0.08] text-[22px] font-extrabold text-white backdrop-blur-xl transition-all duration-400 group-hover:scale-105 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-brand-600 group-hover:to-accent-500">
                  {p.n}
                </span>

                <p className="mt-5 text-[17px] font-bold text-white">{p.t}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-white/55">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-accent-500 via-plum-500 to-aqua-400" />
      </section>

      {/* ============================================================
          FAQ + CTA
      ============================================================ */}
      <section ref={faqRef} className="relative overflow-hidden bg-canvas py-20">
        <div className="pointer-events-none absolute -left-40 top-1/4 size-[430px] rounded-full bg-aqua-400/14 blur-[135px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[430px] rounded-full bg-accent-400/14 blur-[135px]" />

        <div className="container-x relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={faqInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-32 lg:self-start"
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600">
                <Search className="size-3.5" />
                FAQs
              </span>

              <h2 className="mt-6 text-[32px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[40px]">
                Questions We{" "}
                <span className="grad-text-anim">Get Asked a Lot.</span>
              </h2>

              <p className="mt-5 max-w-sm text-[15.5px] leading-relaxed text-ink-soft">
                Something not covered here? Call us — we&apos;d rather answer it now
                than after you&apos;ve signed.
              </p>

              <Link href="/contact-us" className="btn-shine mt-8">
                <span className="btn-shine-text">
                  Ask Us Directly
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </motion.div>

            {/* FAQ list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={faqInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="overflow-hidden rounded-[26px] border border-line bg-white"
            >
              {data.faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={f.q}
                    className={`group relative border-b border-line last:border-b-0 ${
                      open ? "bg-canvas" : "bg-white"
                    } transition-colors duration-400`}
                  >
                    <span
                      className={`absolute inset-y-0 left-0 w-[4px] origin-top bg-gradient-to-b ${data.gradient} transition-transform duration-400 ${
                        open ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                      }`}
                    />

                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center gap-4 px-6 py-5 text-left sm:px-8"
                    >
                      <span
                        className={`text-[13px] font-extrabold tabular-nums transition-colors ${
                          open ? "text-accent-500" : "text-ink-mute"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`min-w-0 flex-1 text-[15.5px] font-bold leading-snug transition-colors ${
                          open ? "text-brand-600" : "text-ink"
                        }`}
                      >
                        {f.q}
                      </span>

                      <ChevronDown
                        className={`size-4 shrink-0 transition-all duration-400 ${
                          open ? "rotate-180 text-accent-500" : "text-ink-mute"
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-6 pl-[62px] pr-8 text-[14.5px] leading-relaxed text-ink-soft sm:pl-[74px]">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative mt-16 overflow-hidden rounded-[28px] p-9 text-white sm:p-11"
            style={{
              background:
                "linear-gradient(120deg, #1e2762 0%, #2B3990 35%, #7B3FA0 70%, #E0459A 100%)",
            }}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-white/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-aqua-400/25 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div className="flex items-start gap-5">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/20 text-white backdrop-blur-sm">
                  {data.fa && BRANDS[data.fa] ? (
                    <FontAwesomeIcon icon={BRANDS[data.fa]} className="h-6 w-6" />
                  ) : (
                    <Sparkles className="size-6" />
                  )}
                </span>
                <div>
                  <h3 className="max-w-lg text-[24px] font-extrabold leading-tight tracking-tight sm:text-[30px]">
                    Ready to make {data.eyebrow} actually work?
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] text-white/70">
                    Tell us your goal in one line. We&apos;ll come back with a plan,
                    a timeline and a price — no obligation.
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-brand-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-accent-600"
                >
                  Get Started
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