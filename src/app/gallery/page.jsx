"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  X,
  Camera,
  Images,
  Maximize2,
  Sparkles,
  Play,
  Video as VideoIcon,
} from "lucide-react";

/* ================= GALLERY ITEMS ================= */
const CATEGORIES = [
  "All",
  "Office Life",
  "Events",
  "Award Nights",
  "Film Sets",
  "Team",
];

/*
  ratio : "tall" = 3/4 | "wide" = 16/10 | "normal" = 4/3 | "square" = 1/1
  type  : "image" (default) | "video"
  Categories are interleaved so the "All" view looks mixed,
  and ratios vary WITHIN each category so filtered views look good too.
*/
const PHOTOS = [
  /* ---------- ROUND 1 ---------- */
  { id: 1,  cat: "Award Nights", ratio: "tall",   img: "/awards/award1.webp" },
  { id: 2,  cat: "Office Life",  ratio: "tall",   type: "video", src: "/officelife/ofc3.mp4" },
  { id: 3,  cat: "Film Sets",    ratio: "normal", img: "/gallery/film1.png" },
  { id: 4,  cat: "Team",         ratio: "wide",   img: "/gallery/team1.jpeg" },
  { id: 5,  cat: "Events",       ratio: "square", img: "/event/event1.png" },

  /* ---------- ROUND 2 ---------- */
  { id: 6,  cat: "Award Nights", ratio: "normal", img: "/awards/award2.webp" },
  { id: 7,  cat: "Office Life",  ratio: "normal", type: "video", src: "/officelife/ofc4.mp4" },
  { id: 8,  cat: "Film Sets",    ratio: "tall",   img: "/gallery/film3.png" },
  { id: 9,  cat: "Team",         ratio: "normal", img: "/gallery/team2.jpeg" },
  { id: 10, cat: "Events",       ratio: "wide",   img: "/event/event2.png" },

  /* ---------- ROUND 3 ---------- */
  { id: 11, cat: "Award Nights", ratio: "square", img: "/awards/award3.webp" },
  { id: 13, cat: "Film Sets",    ratio: "square", img: "/gallery/film4.png" },
  { id: 14, cat: "Team",         ratio: "tall",   img: "/gallery/team3.jpeg" },
  { id: 15, cat: "Events",       ratio: "normal", img: "/event/event3.png" },

  /* ---------- ROUND 4 ---------- */
  { id: 16, cat: "Award Nights", ratio: "normal", img: "/awards/award4.webp" },
  { id: 17, cat: "Office Life",  ratio: "tall",   type: "video", src: "/officelife/ofc6.mp4" },
  { id: 18, cat: "Film Sets",    ratio: "wide",   img: "/gallery/film5.png" },
  { id: 19, cat: "Team",         ratio: "normal", img: "/gallery/team4.jpeg" },
  { id: 20, cat: "Events",       ratio: "square", img: "/event/event4.png" },

  /* ---------- ROUND 5 ---------- */
  { id: 21, cat: "Award Nights", ratio: "tall",   img: "/awards/award5.webp" },
  { id: 22, cat: "Office Life",  ratio: "tall",   type: "video", src: "/officelife/ofc7.mp4" },
  { id: 23, cat: "Film Sets",    ratio: "normal", img: "/gallery/film6.png" },
  { id: 24, cat: "Team",         ratio: "square", img: "/gallery/team5.jpeg" },
  { id: 25, cat: "Events",       ratio: "tall",   img: "/event/event5.png" },

  /* ---------- ROUND 6 ---------- */
  { id: 26, cat: "Award Nights", ratio: "square", img: "/awards/award6.webp" },
  { id: 27, cat: "Office Life",  ratio: "normal", type: "video", src: "/officelife/ofc8.mp4" },
  { id: 28, cat: "Film Sets",    ratio: "tall",   img: "/gallery/film7.png" },
  { id: 29, cat: "Team",         ratio: "wide",   img: "/gallery/team6.jpeg" },
  { id: 30, cat: "Events",       ratio: "normal", img: "/event/event6.png" },

  /* ---------- ROUND 7 ---------- */
  { id: 31, cat: "Award Nights", ratio: "normal", img: "/awards/award7.webp" },
  { id: 32, cat: "Events",       ratio: "square", img: "/event/event7.png" },
  { id: 33, cat: "Events",       ratio: "wide",   img: "/event/event8.png" },
  { id: 34, cat: "Events",       ratio: "normal", img: "/event/event9.png" },
  { id: 35, cat: "Events",       ratio: "tall",   img: "/event/event10.png" },

  /* ---------- REMAINING EVENTS ---------- */
  { id: 36, cat: "Events",       ratio: "square", img: "/event/event11.png" },
  { id: 37, cat: "Events",       ratio: "normal", img: "/event/event12.png" },
  { id: 38, cat: "Events",       ratio: "wide",   img: "/event/event13.png" },
  { id: 39, cat: "Events",       ratio: "square", img: "/event/event14.jpg" },
  { id: 40, cat: "Events",       ratio: "tall",   img: "/event/event15.png" },
  { id: 41, cat: "Events",       ratio: "normal", img: "/event/event16.png" },
  { id: 42, cat: "Events",       ratio: "square", img: "/event/event17.png" },
  { id: 43, cat: "Events",       ratio: "wide",   img: "/event/event18.png" },
  { id: 44, cat: "Events",       ratio: "normal", img: "/event/event19.jpeg" },
  { id: 45, cat: "Events",       ratio: "tall",   img: "/event/event20.jpeg" },
  { id: 46, cat: "Events",       ratio: "square", img: "/event/event21.jpeg" },
  { id: 47, cat: "Events",       ratio: "normal", img: "/event/event22.jpeg" },
];

/* Images used in the banner's floating photo stack */
const STACK = [
  "/awards/award1.png",
  "/gallery/team1.jpeg",
  "/event/event1.png",
];

const RATIO = {
  tall: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  normal: "aspect-[4/3]",
  square: "aspect-square",
};

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
export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [openIdx, setOpenIdx] = useState(null);

  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });

  const filtered =
    filter === "All" ? PHOTOS : PHOTOS.filter((p) => p.cat === filter);

  const videoCount = PHOTOS.filter((p) => p.type === "video").length;

  const close = useCallback(() => setOpenIdx(null), []);
  const next = useCallback(
    () => setOpenIdx((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length],
  );
  const prev = useCallback(
    () =>
      setOpenIdx((i) =>
        i === null ? null : (i - 1 + filtered.length) % filtered.length,
      ),
    [filtered.length],
  );

  /* Keyboard nav + scroll lock */
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

  const active = openIdx !== null ? filtered[openIdx] : null;

  return (
    <>
      {/* ============================================================
          BANNER — DARK
      ============================================================ */}
      <section
        className="relative flex min-h-[500px] items-center overflow-hidden py-20 lg:min-h-[560px]"
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
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            {/* LEFT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 text-[13px] text-white/50"
              >
                <Link href="/" className="transition hover:text-aqua-300">
                  Home
                </Link>
                <ChevronRight className="size-3.5" />
                <span className="text-white/85">Gallery</span>
              </motion.div>

              <motion.span
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm"
              >
                <Sparkles className="size-3.5" />
                Behind the Scenes
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22 }}
                className="mt-6 text-[40px] font-extrabold leading-[1.06] tracking-tight text-white sm:text-[54px] lg:text-[60px]"
              >
                The Work Looks Good.{" "}
                <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
                  So Do the Days.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.34 }}
                className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/60"
              >
                Award nights, film sets, client meets and ordinary Tuesdays at
                the office — a look at how the work actually gets made.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.46 }}
                className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-5"
              >
                {[
                  { v: `${PHOTOS.length}+`, l: "Moments Captured" },
                  { v: `${videoCount}`, l: "Videos" },
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
                    {i < 1 && (
                      <span className="hidden h-9 w-px bg-white/15 sm:block" />
                    )}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — FLOATING PHOTO STACK */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden h-[340px] lg:block"
            >
              <div className="pointer-events-none absolute left-1/2 top-1/2 size-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-aqua-500/25 via-plum-500/20 to-accent-500/25 blur-[90px]" />

              {[
                { img: STACK[0], rot: -9, x: -70, y: 10,  z: 10, d: 5.0 },
                { img: STACK[1], rot: 6,  x: 60,  y: -20, z: 20, d: 6.0 },
                { img: STACK[2], rot: -2, x: 0,   y: 40,  z: 30, d: 5.5 },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [p.y, p.y - 16, p.y] }}
                  transition={{
                    duration: p.d,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                  style={{ rotate: `${p.rot}deg`, x: p.x, zIndex: p.z }}
                  className="absolute left-1/2 top-1/2 -ml-[110px] -mt-[140px] w-[220px] overflow-hidden rounded-[22px] border-[6px] border-white bg-white shadow-[0_28px_60px_-24px_rgba(0,0,0,0.65)]"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-canvas">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.img}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
      </section>

      {/* ============================================================
          GALLERY GRID — LIGHT
      ============================================================ */}
      <section
        ref={gridRef}
        className="relative overflow-hidden bg-canvas py-24"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-40"
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
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600"
            >
              <Images className="size-3.5" />
              Our Gallery
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[44px]"
            >
              Fifteen Years,{" "}
              <span className="grad-text-anim">One Frame at a Time.</span>
            </motion.h2>
          </div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-10 flex flex-wrap justify-center gap-2.5"
          >
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setFilter(c);
                  setOpenIdx(null);
                }}
                className={`relative rounded-full px-5 py-2.5 text-[13.5px] font-semibold transition-all duration-400 ${
                  filter === c
                    ? "text-white"
                    : "border border-line bg-white text-ink-soft hover:-translate-y-0.5 hover:text-brand-600"
                }`}
              >
                {filter === c && (
                  <motion.span
                    layoutId="gal-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-600 via-plum-600 to-accent-500 shadow-[0_12px_28px_-12px_rgba(43,57,144,0.6)]"
                    transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{c}</span>
              </button>
            ))}
          </motion.div>

          {/* ---------- MASONRY ---------- */}
          <div
            key={filter}
            className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:balance]"
          >
            {filtered.map((p, i) => {
              const isVideo = p.type === "video";

              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, scale: 0.94, y: 24 }}
                  animate={gridInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.04, 0.6) }}
                  onClick={() => setOpenIdx(i)}
                  className="group relative mb-4 block w-full cursor-pointer break-inside-avoid overflow-hidden rounded-[22px] border border-line bg-white shadow-[0_8px_26px_-14px_rgba(43,57,144,0.3)] transition-shadow duration-500 hover:shadow-[0_30px_64px_-26px_rgba(43,57,144,0.55)]"
                >
                  <div
                    className={`relative w-full overflow-hidden ${RATIO[p.ratio]}`}
                  >
                    {isVideo ? (
                      <video
                        src={p.src}
                        poster={p.img}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover grayscale-[0.35] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={p.img}
                        alt={p.cat}
                        loading="lazy"
                        className="h-full w-full object-cover grayscale-[0.35] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    )}

                    {/* Gradient tint */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-600/0 to-accent-500/0 transition-all duration-500 group-hover:from-brand-600/25 group-hover:to-accent-500/25 group-hover:mix-blend-multiply" />

                    {/* Dark bottom */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                    {/* VIDEO badge — always visible */}
                    {isVideo && (
                      <span className="pointer-events-none absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-wider text-white backdrop-blur-md transition-opacity duration-400 group-hover:opacity-0">
                        <VideoIcon className="size-3" />
                        Video
                      </span>
                    )}

                    {/* Category chip */}
                    <span className="absolute left-4 top-4 -translate-y-2 rounded-full bg-white/95 px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-wider text-brand-600 opacity-0 backdrop-blur-sm transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                      {p.cat}
                    </span>

                    {/* Expand / Play icon */}
                    <span className="absolute right-4 top-4 grid size-9 -translate-y-2 place-items-center rounded-full bg-white/95 text-brand-600 opacity-0 backdrop-blur-sm transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                      {isVideo ? (
                        <Play className="size-3.5 fill-brand-600" />
                      ) : (
                        <Maximize2 className="size-3.5" />
                      )}
                    </span>

                    {/* Center play button for videos */}
                    {isVideo && (
                      <span className="pointer-events-none absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 scale-90 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white opacity-0 shadow-[0_14px_34px_-10px_rgba(43,57,144,0.7)] transition-all duration-400 group-hover:scale-100 group-hover:opacity-100">
                        <Play className="size-5 fill-white" />
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <p className="mt-16 text-center text-[15px] text-ink-soft">
              Nothing in this category yet.
            </p>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="relative mt-16 overflow-hidden rounded-[28px] border border-line bg-white p-9 sm:p-11"
          >
            <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
            <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-accent-400/16 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 size-56 rounded-full bg-aqua-400/18 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div className="flex items-start gap-5">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-[0_14px_32px_-12px_rgba(43,57,144,0.6)]">
                  <Camera className="size-6" />
                </span>
                <div>
                  <h3 className="text-[22px] font-extrabold leading-tight tracking-tight text-ink sm:text-[27px]">
                    Want to see your brand in these frames?
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] text-ink-soft">
                    Come visit the studio, or just start with a call. Both work.
                  </p>
                </div>
              </div>

              <Link href="/contact-us" className="btn-shine shrink-0">
                <span className="btn-shine-text">
                  Get in Touch
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          LIGHTBOX
      ============================================================ */}
      <AnimatePresence>
        {active && (
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

            <div className="absolute left-5 top-6 z-30 flex items-center gap-2.5">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[13px] font-semibold text-white backdrop-blur-md">
                {openIdx + 1} / {filtered.length}
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-wider text-aqua-300 backdrop-blur-md">
                {active.cat}
              </span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-3 top-1/2 z-30 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/25 sm:left-6"
            >
              <ArrowLeft className="size-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-3 top-1/2 z-30 grid size-12 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/25 sm:right-6"
            >
              <ArrowRight className="size-5" />
            </button>

            <motion.div
              key={active.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-[24px] bg-ink"
            >
              <div className="absolute inset-x-0 top-0 z-20 h-[4px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />

              {active.type === "video" ? (
                <video
                  key={active.src}
                  src={active.src}
                  poster={active.img}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[80vh] w-full object-contain"
                />
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={active.img}
                  alt={active.cat}
                  className="max-h-[80vh] w-full object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}