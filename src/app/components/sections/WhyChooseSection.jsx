"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  ArrowRight, ShieldCheck, Zap, LineChart, Headphones, Award, Layers,
} from "lucide-react";

const REASONS = [
  {
    Icon: Layers,
    title: "Everything Under One Roof",
    desc: "Digital Market, Ads, films, SEO and PR — no juggling five agencies, no lost briefs.",
    gradient: "from-aqua-400 to-brand-500",
  },
  {
    Icon: LineChart,
    title: "Numbers Over Noise",
    desc: "Every campaign is tracked, reported and optimised. You always see where the money went.",
    gradient: "from-plum-500 to-accent-500",
  },
  {
    Icon: Zap,
    title: "Built to Move Fast",
    desc: "Tight turnarounds, quick approvals and a team that actually picks up the phone.",
    gradient: "from-accent-500 to-plum-600",
  },
  {
    Icon: ShieldCheck,
    title: "No Lock-Ins, No Surprises",
    desc: "Flexible monthly plans, transparent pricing and zero hidden charges. Ever.",
    gradient: "from-brand-500 to-aqua-400",
  },
];

const BADGES = [
  { Icon: Award, label: "Award Winning" },
  { Icon: Headphones, label: "Dedicated Manager" },
  { Icon: ShieldCheck, label: "100% Transparent" },
];

const PARTICLES = [
  { top: "14%", left: "6%",  color: "bg-aqua-400",   dur: 18, dx: 40,  dy: -30 },
  { top: "72%", left: "14%", color: "bg-accent-400", dur: 22, dx: -35, dy: 40  },
  { top: "26%", left: "92%", color: "bg-plum-400",   dur: 20, dx: 45,  dy: 35  },
  { top: "84%", left: "78%", color: "bg-aqua-300",   dur: 24, dx: -40, dy: -35 },
  { top: "48%", left: "52%", color: "bg-accent-300", dur: 19, dx: 30,  dy: 45  },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-20"
      style={{
        background:
          "linear-gradient(135deg, #12163a 0%, #1a2152 40%, #241b52 70%, #2e1a48 100%)",
      }}
    >
      {/* ============ DOT GRID ============ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 75% 60% at 50% 40%, #000 35%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 60% at 50% 40%, #000 35%, transparent 100%)",
        }}
      />

      {/* ============ GLOWS ============ */}
      <div className="pointer-events-none absolute -left-40 top-0 size-[460px] rounded-full bg-aqua-500/14 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[460px] rounded-full bg-accent-500/16 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 size-[420px] -translate-y-1/2 rounded-full bg-plum-600/12 blur-[150px]" />

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
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* ================= LEFT — ILLUSTRATION ================= */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.94 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow behind image */}
            <div className="pointer-events-none absolute inset-8 rounded-full bg-gradient-to-br from-aqua-500/25 via-plum-500/20 to-accent-500/25 blur-[80px]" />

            {/* Rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/12 sm:size-[480px]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute left-1/2 top-1/2 size-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10 sm:size-[370px]"
            />

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 top-6 z-20 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl sm:left-2"
            >
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-aqua-400 to-brand-500 text-white">
                <Award className="size-4" />
              </span>
              <div>
                <p className="text-[13px] font-bold leading-none text-white">20+ Awards</p>
                <p className="mt-1 text-[10.5px] text-white/55">National & Global</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -right-2 bottom-10 z-20 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl sm:right-2"
            >
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-accent-500 to-plum-600 text-white">
                <LineChart className="size-4" />
              </span>
              <div>
                <p className="text-[13px] font-bold leading-none text-white">92% Retention</p>
                <p className="mt-1 text-[10.5px] text-white/55">Clients who stay</p>
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 mx-auto w-full max-w-[460px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/home/why.webp"
                alt="Why choose Cybertricks Media"
                className="h-auto w-full object-contain"
              />
            </motion.div>
          </motion.div>

          {/* ================= RIGHT — CONTENT ================= */}
          <div>
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent-400" />
              </span>
              Why Cybertricks
            </motion.span>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[46px]"
            >
              Agencies Promise.{" "}
              <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
                We Deliver.
              </span>
            </motion.h2>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/60"
            >
              Over 4,146 brands didn&apos;t stay with us because of a pitch deck.
              They stayed because the work kept working.
            </motion.p>

            {/* Reason cards */}
            <div className="mt-9 space-y-3.5">
              {REASONS.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.45 + i * 0.12 }}
                  className="group relative flex gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl transition-all duration-400 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.09]"
                >
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-accent-500/0 blur-2xl transition-all duration-500 group-hover:bg-accent-500/25" />

                  <span
                    className={`relative grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${r.gradient} text-white shadow-[0_10px_26px_-8px_rgba(111,207,231,0.6)] transition-transform duration-300 group-hover:scale-110`}
                  >
                    <r.Icon className="size-5" />
                  </span>

                  <div className="relative">
                    <p className="text-[15.5px] font-bold text-white">{r.title}</p>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-white/55">
                      {r.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {BADGES.map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  <b.Icon className="size-4 text-aqua-300" />
                  <span className="text-[13.5px] font-medium text-white/70">
                    {b.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.12 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link href="/contact-us" className="btn-shine">
                <span className="btn-shine-text">
                  Let&apos;s Work Together
                  <ArrowRight className="size-4" />
                </span>
              </Link>

              <Link
                href="/awards-recognition"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/25 px-6 py-3.5 text-[14.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
              >
                See Our Awards
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ============ EDGE GRADIENT LINES ============ */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-accent-500 via-plum-500 to-aqua-400" />
    </section>
  );
}