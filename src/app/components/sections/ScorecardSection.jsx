"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { Zap, Rocket, Target, Activity, ArrowUpRight } from "lucide-react";

/* ================= COUNTER HOOK ================= */
function useCounter(target, start, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(eased * target));
      if (p < 1) frame = requestAnimationFrame(tick);
      else setCount(target);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target, duration]);

  return count.toLocaleString("en-IN");
}

const BARS = [38, 52, 44, 68, 58, 79, 66, 88, 74, 95, 82, 100];

const PARTICLES = [
  { top: "15%", left: "8%", color: "bg-aqua-400", dur: 18, dx: 40, dy: -30 },
  { top: "68%", left: "18%", color: "bg-accent-400", dur: 22, dx: -35, dy: 40 },
  { top: "28%", left: "88%", color: "bg-plum-400", dur: 20, dx: 45, dy: 35 },
  { top: "82%", left: "72%", color: "bg-aqua-300", dur: 24, dx: -40, dy: -35 },
  { top: "45%", left: "95%", color: "bg-accent-300", dur: 19, dx: 30, dy: 45 },
];

export default function ScorecardSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });

  const leads = useCounter(2243198, inView, 2400);
  const years = useCounter(17, inView, 1600);
  const camps = useCounter(7214, inView, 2000);
  const live = useCounter(4146, inView, 2200);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(135deg, #12163a 0%, #1a2152 40%, #241b52 70%, #2e1a48 100%)",
      }}
    >
      {/* ============ DOT GRID ============ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 80% 65% at 50% 40%, #000 35%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 65% at 50% 40%, #000 35%, transparent 100%)",
        }}
      />

      {/* ============ GLOWS ============ */}
      <div className="pointer-events-none absolute -left-40 top-0 size-[460px] rounded-full bg-aqua-500/14 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[460px] rounded-full bg-accent-500/16 blur-[140px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-plum-600/10 blur-[150px]" />

      {/* ============ FLOATING PARTICLES ============ */}
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
        {/* ================= HEADING ================= */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm"
            >
              <Activity className="size-3.5" />
              Track Record
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-5 max-w-xl text-[34px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[46px]"
            >
              Proof, Not{" "}
              <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
                Promises.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="max-w-sm text-[15px] leading-relaxed text-white/55 lg:text-right"
          >
            Every number here belongs to a real brand we helped scale. No vanity
            metrics, no rounding up.
          </motion.p>
        </div>

        {/* ================= BENTO GRID ================= */}
        <div className="mt-14 grid gap-5 lg:grid-cols-4 lg:grid-rows-2">
          {/* ---------- CARD 1 — LEADS (BIG) ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.06] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.09] hover:shadow-[0_30px_70px_-25px_rgba(111,207,231,0.35)] lg:col-span-2 lg:row-span-2"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-gradient-to-br from-accent-500/30 to-plum-500/25 blur-3xl" />

            <div className="relative">
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-aqua-400 to-plum-600 text-white shadow-[0_10px_30px_-8px_rgba(111,207,231,0.6)]">
                  <Target className="size-5" />
                </span>
                <ArrowUpRight className="size-5 text-white/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent-400" />
              </div>

              <p className="mt-8 text-[52px] font-extrabold leading-none tracking-tight text-white sm:text-[68px]">
                {leads}
              </p>
              <p className="mt-3 text-[17px] font-semibold text-white">
                Leads Unlocked
              </p>
              <p className="mt-1.5 max-w-xs text-[14px] leading-relaxed text-white/55">
                Qualified enquiries driven straight into our clients&apos;
                pipelines.
              </p>
            </div>

            {/* Bar chart */}
            <div className="relative mt-10 flex h-24 items-end gap-1.5">
              {BARS.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={
                    inView
                      ? {
                          height: [
                            `${Math.max(20, h - 18)}%`,
                            `${h}%`,
                            `${Math.max(25, h - 10)}%`,
                            `${Math.min(100, h + 8)}%`,
                            `${Math.max(20, h - 18)}%`,
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2.4 + (i % 3) * 0.35,
                    delay: 0.7 + i * 0.06,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-brand-500 via-plum-400 to-accent-400 opacity-75 transition-opacity duration-300 group-hover:opacity-100"
                />
              ))}
            </div>
          </motion.div>

          {/* ---------- CARD 2 — YEARS ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="group relative overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.06] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.09] hover:shadow-[0_30px_70px_-25px_rgba(111,207,231,0.35)]"
          >
            <div className="pointer-events-none absolute -bottom-12 -left-12 size-40 rounded-full bg-aqua-400/25 blur-3xl" />

            <div className="relative flex items-center gap-5">
              <div className="relative shrink-0">
                <svg width="76" height="76" className="-rotate-90">
                  <circle
                    cx="38"
                    cy="38"
                    r="32"
                    stroke="rgba(255,255,255,0.14)"
                    strokeWidth="6"
                    fill="none"
                  />
                  <motion.circle
                    cx="38"
                    cy="38"
                    r="32"
                    stroke="url(#ringGrad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 32}
                    initial={{ strokeDashoffset: 2 * Math.PI * 32 }}
                    animate={
                      inView
                        ? { strokeDashoffset: 2 * Math.PI * 32 * 0.15 }
                        : {}
                    }
                    transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#6FCFE7" />
                      <stop offset="55%" stopColor="#A76AC8" />
                      <stop offset="100%" stopColor="#E963A8" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="absolute inset-0 grid place-items-center">
                  <Zap className="size-5 text-aqua-300" />
                </span>
              </div>

              <div>
                <p className="text-[38px] font-extrabold leading-none tracking-tight text-white">
                  {years}
                </p>
                <p className="mt-2 text-[14.5px] font-semibold text-white/85">
                  Years in the Game
                </p>
              </div>
            </div>
          </motion.div>

          {/* ---------- CARD 3 — CAMPAIGNS (GRADIENT) ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="group relative overflow-hidden rounded-[28px] p-7 text-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_-25px_rgba(224,69,154,0.7)]"
            style={{
              background:
                "linear-gradient(135deg, #3f4fae 0%, #8f4cb2 55%, #E0459A 100%)",
            }}
          >
            <div className="pointer-events-none absolute -right-10 -top-10 size-36 rounded-full bg-white/20 blur-2xl" />

            <div className="relative">
              <span className="grid size-11 place-items-center rounded-2xl bg-white/25 backdrop-blur-sm">
                <Rocket className="size-5" />
              </span>
              <p className="mt-6 text-[38px] font-extrabold leading-none tracking-tight">
                {camps}
              </p>
              <p className="mt-2 text-[14.5px] font-semibold">
                Campaigns Delivered
              </p>

              <div className="mt-5 flex gap-1.5">
                {Array.from({ length: 10 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0.15, scaleY: 0.4 }}
                    animate={inView ? { opacity: 1, scaleY: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 + i * 0.07 }}
                    className="h-1.5 flex-1 rounded-full bg-white"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* ---------- CARD 4 — LIVE (WIDE) ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="group relative flex items-center justify-between overflow-hidden rounded-[28px] border border-white/12 bg-white/[0.06] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.09] hover:shadow-[0_30px_70px_-25px_rgba(224,69,154,0.4)] lg:col-span-2"
          >
            <div className="pointer-events-none absolute -bottom-14 -right-14 size-48 rounded-full bg-gradient-to-br from-plum-400/30 to-aqua-400/25 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/30 bg-accent-500/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-accent-300">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent-400" />
                </span>
                Live Now
              </span>

              <p className="mt-4 text-[38px] font-extrabold leading-none tracking-tight text-white sm:text-[44px]">
                {live}
              </p>
              <p className="mt-2 text-[14.5px] font-semibold text-white/85">
                Brands Scaling With Us
              </p>
            </div>

            <div className="relative hidden items-end gap-2 sm:flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.span
                  key={i}
                  animate={{ height: [22, 54, 30, 46, 22] }}
                  transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.28,
                  }}
                  className="w-2.5 rounded-full bg-gradient-to-t from-aqua-400 to-accent-400 opacity-80"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ============ EDGE GRADIENT LINES ============ */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-accent-500 via-plum-500 to-aqua-400" />
    </section>
  );
}
