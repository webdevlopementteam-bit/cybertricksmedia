"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  ArrowRight, ArrowLeft, ChevronRight, Trophy, Medal, Sparkles,
  X, Maximize2, Award as AwardIcon,
} from "lucide-react";

/* ================= AWARDS LIST ================= */
const AWARDS = [
  "Emerging Digital Marketing Company of 2025 by CED",
  "Best Advertising Company 2024 by BKDM",
  "Best Digital Marketing Agency 2023 by EEC",
  "Best Marketing Agency 2023",
  "Best Use Of Technology 2023",
  "Emerging Business & Education Award Show, Conference and Exhibition Organiser 2023",
  "Best Outreach Partner Facilitated by NCCN in Dec 22",
  "Won EDU Award for K12TIMES under Emerging K12 Media in 2019 by NCCN",
  "Emerging B2B Portal by FIWA in 2019",
  "Best B2B Marketplace facilitated by Brain Foundation in Dec 22",
  "Emerging B2B Marketplace Facilitated by EU Media & CED Foundation in Nov 22",
  "Emerging K12 Media Facilitated by GSLC in July 22",
  "Emerging Advertising & Media House Facilitated by EU Media in June 22",
  "Emerging B2B Platform Facilitated by FIWA in Feb 20",
  "Won MSME Award for B2BSTREETS under Innovative Concept into MSME Monitoring in 2019 by NCCN",
];

/* ================= GALLERY ================= */
const GALLERY = [
  { id: 1, img: "/awards/award1.webp" },
  { id: 2, img: "/awards/award2.webp"},
  { id: 3, img: "/awards/award3.webp"},
  { id: 4, img: "/awards/award4.webp" },
  { id: 5, img: "/awards/award5.webp" },
  { id: 6, img: "/awards/award6.webp"},
  { id: 7, img: "/awards/award7.webp" },
];

/* Featured image shown beside the list */
const FEATURED = "/awards/award1.webp";

const PARTICLES = [
  { top: "16%", left: "8%",  color: "bg-aqua-400",   dur: 18, dx: 40,  dy: -30 },
  { top: "70%", left: "16%", color: "bg-accent-400", dur: 22, dx: -35, dy: 40  },
  { top: "26%", left: "88%", color: "bg-plum-400",   dur: 20, dx: 45,  dy: 35  },
  { top: "80%", left: "76%", color: "bg-aqua-300",   dur: 24, dx: -40, dy: -35 },
  { top: "48%", left: "50%", color: "bg-accent-300", dur: 19, dx: 30,  dy: 45  },
];

/* ================================================================
   PAGE
================================================================ */
export default function AwardsPage() {
  const [openIdx, setOpenIdx] = useState(null);

  const listRef = useRef(null);
  const listInView = useInView(listRef, { once: true, margin: "-100px" });
  const galRef = useRef(null);
  const galInView = useInView(galRef, { once: true, margin: "-100px" });

  const close = useCallback(() => setOpenIdx(null), []);
  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i + 1) % GALLERY.length)),
    []
  );
  const prev = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length)),
    []
  );

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIdx, close, next, prev]);

  return (
    <>
      {/* ============================================================
          BANNER — DARK
      ============================================================ */}
      <section
        className="relative flex min-h-[520px] items-center overflow-hidden pb-20 pt-[160px] lg:min-h-[600px]"
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
              transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
            />
          ))}
        </div>

        <div className="container-x relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">

            {/* LEFT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 text-[13px] text-white/50"
              >
                <Link href="/" className="transition hover:text-aqua-300">Home</Link>
                <ChevronRight className="size-3.5" />
                <span className="text-white/85">Awards &amp; Recognition</span>
              </motion.div>

              <motion.span
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm"
              >
                <Sparkles className="size-3.5" />
                20+ Honours &amp; Counting
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22 }}
                className="mt-6 text-[38px] font-extrabold leading-[1.06] tracking-tight text-white sm:text-[52px] lg:text-[58px]"
              >
                Shelves Don&apos;t Lie.{" "}
                <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
                  Neither Do We.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.34 }}
                className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/60"
              >
                We are honored to be recognized with an array of awards which we have
                received for making a difference with our services that matters to our
                clients.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.46 }}
                className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-5"
              >
                {[
                  { v: 20, l: "Awards Won" },
                  { v: "2019–26", l: "Years Recognised" },
                ].map((s, i) => (
                  <div key={s.l} className="flex items-center gap-9">
                    <div>
                      <p className="text-[26px] font-extrabold leading-none text-white sm:text-[30px]">
                        {s.v}
                      </p>
                      <p className="mt-1.5 text-[12.5px] font-medium text-white/50">
                        {s.l}
                      </p>
                    </div>
                    {i < 1 && <span className="hidden h-9 w-px bg-white/15 sm:block" />}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — TROPHY */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="pointer-events-none absolute left-1/2 top-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua-400/25 blur-[100px]" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute left-1/2 top-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute left-1/2 top-1/2 size-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.08]"
              />

              <div className="relative" style={{ perspective: "1200px" }}>
                <motion.div
                  animate={{ y: [0, -18, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.div
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="mx-auto w-[260px]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/home/award.png"
                      alt="Award trophy"
                      className="h-[500px] w-full object-contain drop-shadow-[0_25px_50px_rgba(111,207,231,0.4)]"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
      </section>

      {/* ============================================================
          FEATURED IMAGE + AWARDS LIST
      ============================================================ */}
      <section ref={listRef} className="relative overflow-hidden bg-canvas py-20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[320px] opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(43,57,144,0.15) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute -left-40 top-1/3 size-[430px] rounded-full bg-aqua-400/14 blur-[135px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[430px] rounded-full bg-accent-400/14 blur-[135px]" />

        <div className="container-x relative z-10">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={listInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600"
            >
              <Medal className="size-3.5" />
              The Trophy Cabinet
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              animate={listInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[44px]"
            >
              Every One of These{" "}
              <span className="grad-text-anim">Has a Client Behind It.</span>
            </motion.h2>
          </div>

          {/* Image + List */}
          <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">

            {/* ---------- FEATURED IMAGE ---------- */}
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              animate={listInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:sticky lg:top-32 lg:self-start"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-gradient-to-br from-aqua-400/25 via-plum-500/20 to-accent-500/25 blur-[60px]" />

              {/* Dashed offset frame */}
              <motion.div
                animate={{ rotate: [0, 1.6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -bottom-5 -right-5 h-full w-full rounded-[32px] border-2 border-dashed border-accent-300/50"
              />

              {/* Image card */}
              <div className="group relative overflow-hidden rounded-[32px] border border-line bg-white p-2.5 shadow-[0_30px_70px_-30px_rgba(43,57,144,0.5)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-canvas">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={FEATURED}
                    alt="Cybertricks Media award recognition"
                    className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/85 to-transparent" />

              
                </div>
              </div>

              {/* Floating count badge */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-10 z-20 rounded-2xl border border-line bg-white px-5 py-4 shadow-[0_18px_44px_-18px_rgba(43,57,144,0.5)]"
              >
                <p className="text-[26px] font-extrabold leading-none grad-text">
                  20+
                </p>
                <p className="mt-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-mute">
                  Awards
                </p>
              </motion.div>
            </motion.div>

            {/* ---------- AWARDS LIST ---------- */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={listInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[28px] border border-line bg-white p-7 sm:p-9"
            >
              <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
              <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-accent-400/14 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 size-40 rounded-full bg-aqua-400/16 blur-3xl" />

              <p className="relative text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-mute">
                Complete List
              </p>

              <ul className="relative mt-6 space-y-1">
                {AWARDS.map((a, i) => (
                  <motion.li
                    key={a}
                    initial={{ opacity: 0, x: 20 }}
                    animate={listInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.25 + i * 0.05 }}
                    className="group flex items-start gap-3.5 rounded-xl px-3 py-1 transition-colors duration-300 hover:bg-brand-50"
                  >
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-plum-600 text-[10px] font-bold text-white transition-transform duration-300 group-hover:scale-110">
                      {i + 1}
                    </span>
                    <span className="text-[14.5px] leading-relaxed text-ink-soft transition-colors duration-300 group-hover:text-ink">
                      {a}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          GALLERY
      ============================================================ */}
      <section ref={galRef} className="relative overflow-hidden bg-white py-20">
        <div className="pointer-events-none absolute -left-40 top-1/4 size-[400px] rounded-full bg-aqua-400/12 blur-[130px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[400px] rounded-full bg-accent-400/12 blur-[130px]" />

        <div className="container-x relative z-10">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={galInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-canvas px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600"
            >
              <AwardIcon className="size-3.5" />
              Award Gallery
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              animate={galInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 text-[32px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[42px]"
            >
              Moments Worth{" "}
              <span className="grad-text-anim">Framing.</span>
            </motion.h2>
          </div>

          {/* Grid */}
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {GALLERY.map((g, i) => (
              <motion.div
                key={g.id}
                initial={{ opacity: 0, y: 30, scale: 0.94 }}
                animate={galInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.55, delay: 0.25 + i * 0.06 }}
                onClick={() => setOpenIdx(i)}
                className="group relative cursor-pointer overflow-hidden rounded-[22px] border border-line bg-canvas shadow-[0_8px_26px_-14px_rgba(43,57,144,0.3)] transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_30px_64px_-26px_rgba(43,57,144,0.5)]"
              >
                <div className="relative aspect-square overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={g.img}
                    alt={g.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                  <span className="absolute right-4 top-4 grid size-9 -translate-y-2 place-items-center rounded-full bg-white/95 text-brand-600 opacity-0 backdrop-blur-sm transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                    <Maximize2 className="size-3.5" />
                  </span>

                  <p className="absolute inset-x-4 bottom-4 translate-y-3 text-[13.5px] font-bold text-white opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                    {g.title}
                  </p>
                </div>

                <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={galInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
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
                  <Trophy className="size-6" />
                </span>
                <div>
                  <h3 className="max-w-lg text-[22px] font-extrabold leading-tight tracking-tight sm:text-[28px]">
                    Want work that wins awards for your brand?
                  </h3>
                  <p className="mt-2.5 max-w-md text-[15px] text-white/70">
                    The same team that earned these is the one that will handle your
                    project.
                  </p>
                </div>
              </div>

              <Link
                href="/contact-us"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-brand-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-accent-600"
              >
                Start Your Project
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          LIGHTBOX
      ============================================================ */}
      <AnimatePresence>
        {openIdx !== null && GALLERY[openIdx] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[60] grid place-items-center bg-ink/85 p-4 backdrop-blur-md sm:p-8"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 z-30 grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-accent-500"
            >
              <X className="size-5" />
            </button>

            <span className="absolute left-5 top-6 z-30 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white backdrop-blur-md">
              {openIdx + 1} / {GALLERY.length}
            </span>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
              className="absolute left-3 top-1/2 z-30 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/25 sm:left-6"
            >
              <ArrowLeft className="size-5" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
              className="absolute right-3 top-1/2 z-30 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/25 sm:right-6"
            >
              <ArrowRight className="size-5" />
            </button>

            <motion.div
              key={GALLERY[openIdx].id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-[24px] bg-white"
            >
              <div className="absolute inset-x-0 top-0 z-20 h-[4px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />

              <div className="max-h-[70vh] overflow-hidden bg-canvas">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={GALLERY[openIdx].img}
                  alt={GALLERY[openIdx].title}
                  className="h-full max-h-[70vh] w-full object-contain"
                />
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-[16px] font-extrabold text-ink">
                  {GALLERY[openIdx].title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}