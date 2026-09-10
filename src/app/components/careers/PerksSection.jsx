"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Sparkles, GraduationCap, Rocket, HeartHandshake, CalendarCheck, Trophy,
} from "lucide-react";

const PERKS = [
  {
    Icon: Rocket,
    title: "Real Work From Day One",
    desc: "No coffee runs. You'll be on live client accounts in your first fortnight.",
    gradient: "from-aqua-500 to-brand-600",
  },
  {
    Icon: GraduationCap,
    title: "We Pay for Your Learning",
    desc: "Courses, certifications and tools — if it makes you better at the job, it's covered.",
    gradient: "from-brand-600 to-plum-600",
  },
  {
    Icon: CalendarCheck,
    title: "Sane Working Hours",
    desc: "Deadlines matter, but so does dinner at home. We don't glorify burnout.",
    gradient: "from-plum-600 to-accent-500",
  },
  {
    Icon: Trophy,
    title: "Performance Bonuses",
    desc: "Quarterly incentives tied to actual outcomes, not attendance registers.",
    gradient: "from-accent-500 to-plum-600",
  },
  {
    Icon: HeartHandshake,
    title: "Flat, Open Culture",
    desc: "The founder sits in the same room. Your idea can reach him the same day.",
    gradient: "from-brand-600 to-aqua-500",
  },
  {
    Icon: Sparkles,
    title: "Work Across Verticals",
    desc: "Marketing, films, publishing, tech — try things you'd never touch elsewhere.",
    gradient: "from-aqua-500 to-plum-600",
  },
];

export default function PerksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-canvas py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(43,57,144,0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 50% 20%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 20%, #000 30%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-1/4 size-[430px] rounded-full bg-aqua-400/14 blur-[135px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[430px] rounded-full bg-accent-400/14 blur-[135px]" />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600"
          >
            <Sparkles className="size-3.5" />
            Why Join Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[44px]"
          >
            More Than{" "}
            <span className="grad-text-anim">Just a Salary.</span>
          </motion.h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PERKS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 + i * 0.09 }}
              className="group relative overflow-hidden rounded-[24px] border border-line bg-white p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_24px_54px_-24px_rgba(43,57,144,0.45)]"
            >
              <div
                className={`pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-gradient-to-br ${p.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
              />
              <span
                className={`relative grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${p.gradient} text-white shadow-[0_12px_28px_-10px_rgba(43,57,144,0.5)] transition-transform duration-300 group-hover:scale-110`}
              >
                <p.Icon className="size-5" />
              </span>
              <p className="relative mt-5 text-[16.5px] font-bold text-ink">
                {p.title}
              </p>
              <p className="relative mt-2 text-[14px] leading-relaxed text-ink-soft">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}