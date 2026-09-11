"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight, ChevronRight, Sparkles, Award, Users, TrendingUp,
} from "lucide-react";

const WORDS = ["Advertising.", "Films.", "Branding.", "Growth."];

const PARTICLES = [
  { top: "16%", left: "8%",  color: "bg-aqua-400",   dur: 18, dx: 40,  dy: -30 },
  { top: "70%", left: "16%", color: "bg-accent-400", dur: 22, dx: -35, dy: 40  },
  { top: "26%", left: "88%", color: "bg-plum-400",   dur: 20, dx: 45,  dy: 35  },
  { top: "80%", left: "76%", color: "bg-aqua-300",   dur: 24, dx: -40, dy: -35 },
  { top: "48%", left: "50%", color: "bg-accent-300", dur: 19, dx: 30,  dy: 45  },
];

export default function AboutBanner() {
  return (
    <section
      className="relative flex min-h-[560px] items-center overflow-hidden lg:min-h-[600px]"
      style={{
        background:
          "linear-gradient(140deg, #0e1230 0%, #1a2152 38%, #241b52 68%, #2e1a48 100%)",
      }}
    >
      {/* ============ BACKGROUND ============ */}
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

      {/* ============ CONTENT ============ */}
      <div className="container-x relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">

          {/* ---------- LEFT ---------- */}
          <div>
            {/* Breadcrumb */}
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
              <span className="text-white/85">About Us</span>
            </motion.div>

            {/* Eyebrow */}
            

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22 }}
              className="mt-6 text-[40px] font-extrabold leading-[1.06] tracking-tight text-white sm:text-[54px] lg:text-[60px]"
            >
              We Build Brands{" "}
              <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
                People Remember.
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.34 }}
              className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/60"
            >
              A group of companies working across advertising, film production,
              branding and AI-powered digital marketing — trusted by 3,800+ brands
              across India.
            </motion.p>

            {/* Word chips */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.46 }}
              className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-2.5"
            >
              {WORDS.map((w, i) => (
                <motion.span
                  key={w}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.7,
                  }}
                  className="rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-[14px] font-semibold text-white backdrop-blur-sm"
                >
                  {w}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.58 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link href="/contact-us" className="btn-shine">
                <span className="btn-shine-text">
                  Work With Us
                  <ArrowRight className="size-4" />
                </span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/25 px-6 py-3.5 text-[14.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
              >
                Our Services
              </Link>
            </motion.div>
          </div>

          {/* ---------- RIGHT: ILLUSTRATION ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-aqua-500/25 via-plum-500/20 to-accent-500/25 blur-[90px]" />

            {/* Rotating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute left-1/2 top-1/2 size-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute left-1/2 top-1/2 size-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.08]"
            />

            {/* Floating stat cards */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-4 z-20 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-aqua-400 to-brand-600 text-white">
                <Award className="size-4" />
              </span>
              <div>
                <p className="text-[14px] font-bold leading-none text-white">20+</p>
                <p className="mt-1 text-[10.5px] text-white/55">Awards Won</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              className="absolute -right-2 top-1/3 z-20 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-plum-600 text-white">
                <Users className="size-4" />
              </span>
              <div>
                <p className="text-[14px] font-bold leading-none text-white">4,200+</p>
                <p className="mt-1 text-[10.5px] text-white/55">Happy Clients</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute bottom-6 left-2 z-20 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-plum-500 to-accent-500 text-white">
                <TrendingUp className="size-4" />
              </span>
              <div>
                <p className="text-[14px] font-bold leading-none text-white">92%</p>
                <p className="mt-1 text-[10.5px] text-white/55">Retention Rate</p>
              </div>
            </motion.div>

            {/* Illustration */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 mx-auto w-full max-w-[420px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/about/about-banners.png"
                alt="Cybertricks Media team at work"
                className="h-auto w-full object-contain drop-shadow-[0_25px_50px_rgba(111,207,231,0.3)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ============ BOTTOM LINE ============ */}
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
    </section>
  );
}