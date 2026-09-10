"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

/* ================= BRANDS ================= */
const BRANDS = [
  {
    name: "Bharat Bizmart",
    tag: "B2B Marketplace",
    img: "/home/bharat.png",
    href: "https://bharatbizmart.com",
  },
  {
    name: "The Times of MSME",
    tag: "Business Media",
    img: "/home/msme.jpeg",
    href: "https://thetimesofmsme.com",
  },
  {
    name: "The K12 Times",
    tag: "Education Media",
    img: "/home/k12.png",
    href: "https://thek12times.com",
  },
  {
    name: "Gen Next Films",
    tag: "Film Production",
    img: "/home/gennext.png",
    href: "#",
  },
  {
    name: "My Filmy Story",
    tag: "Entertainment",
    img: "/home/film2.png",
    href: "https://myfilmystory.com",
  },
  {
    name: "Cybertricks",
    tag: "Visual Storytelling",
    img: "/logo.png",
    href: "#",
  },
];

/* ================= HONEYCOMB SLOTS =================
   Flat-top hexagon, s = 85  →  width 170, height 147
   6 positions around a center hex
==================================================== */
const HEX_W = 170;
const HEX_H = 147;

const SLOTS = [
  { x: 0, y: -147 },        // top
  { x: 127.5, y: -73.5 },   // top-right
  { x: 127.5, y: 73.5 },    // bottom-right
  { x: 0, y: 147 },         // bottom
  { x: -127.5, y: 73.5 },   // bottom-left
  { x: -127.5, y: -73.5 },  // top-left
];

const HEX_CLIP = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";

const PARTICLES = [
  { top: "12%", left: "8%",  color: "bg-aqua-400",   dur: 18, dx: 40,  dy: -30 },
  { top: "74%", left: "16%", color: "bg-accent-400", dur: 22, dx: -35, dy: 40  },
  { top: "24%", left: "90%", color: "bg-plum-400",   dur: 20, dx: 45,  dy: 35  },
  { top: "86%", left: "80%", color: "bg-aqua-300",   dur: 24, dx: -40, dy: -35 },
  { top: "50%", left: "48%", color: "bg-accent-300", dur: 19, dx: 30,  dy: 45  },
];

/* Fisher-Yates shuffle that guarantees at least one move */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  const same = a.every((v, i) => v === arr[i]);
  return same ? [...a.slice(1), a[0]] : a;
}

export default function BrandsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  // order[i] = slot index for brand i
  const [order, setOrder] = useState([0, 1, 2, 3, 4, 5]);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    if (!inView || paused) return;
    const t = setInterval(() => setOrder((o) => shuffle(o)), 3000);
    return () => clearInterval(t);
  }, [inView, paused]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(140deg, #12163a 0%, #1a2152 38%, #241b52 68%, #2e1a48 100%)",
      }}
    >
      {/* ============ HEX PATTERN BACKGROUND ============ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='56' height='100' viewBox='0 0 56 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 0L56 16v32L28 64 0 48V16z' fill='none' stroke='%23ffffff' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundSize: "56px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 65% at 50% 45%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 65% at 50% 45%, #000 30%, transparent 100%)",
        }}
      />

      {/* ============ GLOWS ============ */}
      <div className="pointer-events-none absolute -left-40 top-0 size-[460px] rounded-full bg-aqua-500/14 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[460px] rounded-full bg-accent-500/16 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 size-[420px] -translate-y-1/2 rounded-full bg-plum-600/14 blur-[150px]" />

      {/* ============ PARTICLES ============ */}
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
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-8">

          {/* ================= LEFT — CONTENT ================= */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm"
            >
              <Sparkles className="size-3.5" />
              Our Ecosystem
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[46px]"
            >
              One Group.{" "}
              <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
                Six Voices.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/60"
            >
              Every brand under our roof was built to solve a different problem —
              from B2B trade to business journalism to feature films. Together they
              give us reach, credibility and creative muscle that a single agency
              simply can&apos;t match.
            </motion.p>

            {/* Brand name list */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.36 }}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {BRANDS.map((b, i) => (
                <span
                  key={b.name}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={`cursor-default rounded-full border px-3.5 py-2 text-[13px] font-medium transition-all duration-300 ${
                    hovered === i
                      ? "border-accent-400/60 bg-accent-500/20 text-white"
                      : "border-white/15 bg-white/[0.06] text-white/65"
                  }`}
                >
                  {b.name}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.48 }}
              className="mt-9"
            >
              <Link href="/about-us" className="btn-shine">
                <span className="btn-shine-text">
                  Explore the Group
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* ================= RIGHT — HONEYCOMB ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => {
              setPaused(false);
              setHovered(null);
            }}
            className="relative flex h-[340px] items-center justify-center sm:h-[420px] lg:h-[500px]"
          >
            {/* Glow behind comb */}
            <div className="pointer-events-none absolute size-[380px] rounded-full bg-gradient-to-br from-aqua-500/20 via-plum-500/18 to-accent-500/20 blur-[80px]" />

            {/* Scale wrapper */}
            <div className="relative scale-[0.62] sm:scale-[0.78] lg:scale-100">

              {/* ---------- CENTER HEX ---------- */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 z-20"
                style={{
                  width: HEX_W,
                  height: HEX_H,
                  marginLeft: -HEX_W / 2,
                  marginTop: -HEX_H / 2,
                }}
              >
                <div
                  className="grid h-full w-full place-items-center bg-gradient-to-br from-aqua-400 via-plum-600 to-accent-500 shadow-[0_0_50px_-10px_rgba(224,69,154,0.7)]"
                  style={{ clipPath: HEX_CLIP }}
                >
                  <div className="text-center">
                    <p className="text-[34px] font-extrabold leading-none text-white">
                      06
                    </p>
                    <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/85">
                      Brands
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ---------- BRAND HEXES ---------- */}
              {BRANDS.map((b, i) => {
                const slot = SLOTS[order[i]];
                const isHot = hovered === i;

                return (
                  <motion.a
                    key={b.name}
                    href={b.href}
                    target={b.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    animate={{
                      x: slot.x,
                      y: slot.y,
                      scale: isHot ? 1.12 : 1,
                      zIndex: isHot ? 30 : 10,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 110,
                      damping: 18,
                      mass: 0.9,
                    }}
                    className="absolute left-1/2 top-1/2 block cursor-pointer"
                    style={{
                      width: HEX_W,
                      height: HEX_H,
                      marginLeft: -HEX_W / 2,
                      marginTop: -HEX_H / 2,
                    }}
                  >
                    {/* Gradient border hex */}
                    <div
                      className={`h-full w-full p-[2px] transition-all duration-300 ${
                        isHot
                          ? "bg-gradient-to-br from-aqua-400 via-plum-400 to-accent-500"
                          : "bg-white/20"
                      }`}
                      style={{ clipPath: HEX_CLIP }}
                    >
                      {/* Inner hex */}
                      <div
                        className={`grid h-full w-full place-items-center px-7 transition-colors duration-300 ${
                          isHot ? "bg-white" : "bg-white/95"
                        }`}
                        style={{ clipPath: HEX_CLIP }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={b.img}
                          alt={b.name}
                          className="max-h-[52px] w-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Hover glow */}
                    {isHot && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="pointer-events-none absolute inset-0 -z-10 blur-xl"
                        style={{
                          background:
                            "linear-gradient(135deg, #6FCFE7, #A76AC8, #E0459A)",
                          clipPath: HEX_CLIP,
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Hover label */}
            <motion.div
              animate={{ opacity: hovered !== null ? 1 : 0, y: hovered !== null ? 0 : 10 }}
              transition={{ duration: 0.25 }}
              className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 backdrop-blur-xl"
            >
              <p className="whitespace-nowrap text-[13.5px] font-bold text-white">
                {hovered !== null ? BRANDS[hovered].name : ""}
              </p>
              <p className="text-center text-[11px] text-white/55">
                {hovered !== null ? BRANDS[hovered].tag : ""}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ============ EDGE GRADIENT LINES ============ */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-accent-500 via-plum-500 to-aqua-400" />
    </section>
  );
}