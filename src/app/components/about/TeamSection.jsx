"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowRight, Users, Coffee, Heart, Zap, Smile } from "lucide-react";

const STATS = [
  { value: "50+", label: "Team Members" },
  { value: "8", label: "Departments" },
  { value: "4.8", label: "Employee Rating" },
  { value: "3.5", label: "Avg. Years With Us" },
];

const CULTURE = [
  {
    Icon: Zap,
    title: "Ideas Beat Hierarchy",
    desc: "The best idea in the room wins — it doesn't matter who it came from.",
    gradient: "from-aqua-500 to-brand-600",
  },
  {
    Icon: Heart,
    title: "We Own the Outcome",
    desc: "No blame games. If something breaks, we fix it and learn from it.",
    gradient: "from-plum-600 to-accent-500",
  },
  {
    Icon: Smile,
    title: "Work Hard, Stay Human",
    desc: "Deadlines matter. So does going home to your family on time.",
    gradient: "from-accent-500 to-plum-600",
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-1/4 size-[430px] rounded-full bg-aqua-400/12 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[430px] rounded-full bg-accent-400/12 blur-[140px]" />

      <div className="container-x relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-canvas px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600"
          >
            <Users className="size-3.5" />
            The Team
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[44px]"
          >
            50 People. <span className="grad-text-anim">One Standard.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-5 text-[16px] leading-relaxed text-ink-soft"
          >
            Strategists, designers, filmmakers, developers and marketers — sitting
            in one office, solving one problem at a time.
          </motion.p>
        </div>

        {/* ---------- GROUP PHOTO ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.95, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -inset-6 rounded-[44px] bg-gradient-to-r from-aqua-400/20 via-plum-500/18 to-accent-500/20 blur-[70px]" />

          {/* Frame */}
          <div className="group relative overflow-hidden rounded-[34px] border border-line bg-white p-3 shadow-[0_35px_80px_-35px_rgba(43,57,144,0.5)]">
            <div className="relative aspect-[16/8] overflow-hidden rounded-[26px] bg-canvas sm:aspect-[16/7]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/about/team.jpeg"
                alt="The Cybertricks Media team"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />

              {/* Bottom gradient */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />

              {/* Caption */}
              <div className="absolute inset-x-6 bottom-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end sm:inset-x-9 sm:bottom-8">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                    <span className="relative flex size-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-accent-400" />
                    </span>
                    Pitampura, Delhi
                  </p>
                  <p className="mt-3 text-[20px] font-extrabold leading-tight text-white sm:text-[26px]">
                    This is the whole crew.
                  </p>
                </div>

                <p className="max-w-xs text-[13.5px] leading-relaxed text-white/70">
                  No outsourcing, no freelance patchwork. Everything you get is made
                  by these people.
                </p>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 -top-6 z-20 hidden rounded-2xl border border-line bg-white px-5 py-4 shadow-[0_18px_44px_-18px_rgba(43,57,144,0.5)] sm:block"
          >
            <p className="text-[26px] font-extrabold leading-none grad-text">50+</p>
            <p className="mt-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-mute">
              Strong
            </p>
          </motion.div>
        </motion.div>

        {/* ---------- STATS ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-12 grid grid-cols-2 gap-5 rounded-[26px] border border-line bg-canvas px-8 py-8 sm:grid-cols-4"
        >
          {STATS.map((s, i) => (
            <div key={s.label} className="relative text-center">
              {i < STATS.length - 1 && (
                <span className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-line sm:block" />
              )}
              <p className="text-[28px] font-extrabold leading-none grad-text sm:text-[32px]">
                {s.value}
              </p>
              <p className="mt-2 text-[12.5px] font-medium text-ink-mute">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ---------- CULTURE CARDS ---------- */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {CULTURE.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.12 }}
              className="group relative overflow-hidden rounded-[24px] border border-line bg-canvas p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-transparent hover:bg-white hover:shadow-[0_24px_54px_-24px_rgba(43,57,144,0.45)]"
            >
              <div
                className={`pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-gradient-to-br ${c.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
              />

              <span
                className={`relative grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${c.gradient} text-white shadow-[0_12px_28px_-10px_rgba(43,57,144,0.5)] transition-transform duration-300 group-hover:scale-110`}
              >
                <c.Icon className="size-5" />
              </span>

              <p className="relative mt-5 text-[16.5px] font-bold text-ink">
                {c.title}
              </p>
              <p className="relative mt-2 text-[14px] leading-relaxed text-ink-soft">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ---------- HIRING CTA ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="relative mt-14 overflow-hidden rounded-[28px] border border-line bg-canvas p-9 sm:p-11"
        >
          <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
          <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-accent-400/16 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 size-56 rounded-full bg-aqua-400/18 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
            <div className="flex items-start gap-5">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-[0_14px_32px_-12px_rgba(43,57,144,0.6)]">
                <Coffee className="size-6" />
              </span>
              <div>
                <h3 className="text-[22px] font-extrabold leading-tight tracking-tight text-ink sm:text-[27px]">
                  There&apos;s a desk with your name on it.
                </h3>
                <p className="mt-2 max-w-md text-[15px] text-ink-soft">
                  We&apos;re always looking for people who care about the craft more
                  than the job title.
                </p>
              </div>
            </div>

            <Link href="/job-openings" className="btn-shine shrink-0">
              <span className="btn-shine-text">
                View Open Roles
                <ArrowRight className="size-4" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}