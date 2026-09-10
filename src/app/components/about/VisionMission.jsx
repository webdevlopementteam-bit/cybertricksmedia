"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { Eye, Target, Heart, Compass } from "lucide-react";

const TABS = [
  {
    key: "vision",
    label: "Our Vision",
    Icon: Eye,
    gradient: "from-aqua-500 to-brand-600",
    heading: "To be India's most trusted creative and growth partner.",
    body: "We want a world where a small manufacturer in Pitampura has access to the same quality of branding, film-making and marketing muscle as a Fortune 500 company. Scale shouldn't decide who gets to tell a great story.",
    points: [
      "Democratise world-class creative for every business size",
      "Build an ecosystem, not just an agency",
      "Lead India's shift to AI-powered marketing",
    ],
  },
  {
    key: "mission",
    label: "Our Mission",
    Icon: Target,
    gradient: "from-plum-600 to-accent-500",
    heading: "Turn every brief into measurable business growth.",
    body: "We don't chase impressions or awards for their own sake. Every campaign we run, every film we shoot and every website we build exists to move one number that actually matters to our client — revenue.",
    points: [
      "Strategy before creative, always",
      "Transparent reporting on every rupee spent",
      "End-to-end delivery, no outsourcing surprises",
    ],
  },
  {
    key: "values",
    label: "Our Values",
    Icon: Heart,
    gradient: "from-accent-500 to-plum-600",
    heading: "Do good work. Say what you mean. Show up.",
    body: "Our clients stay an average of three years — not because of contracts, but because we treat their money like our own and their deadlines like they matter. That's the whole philosophy.",
    points: [
      "Honesty over hype in every conversation",
      "Ownership — we fix what breaks, no blame games",
      "Long-term relationships over short-term wins",
    ],
  },
];

export default function VisionMission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const tab = TABS[active];

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-24 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-0 size-[440px] rounded-full bg-aqua-400/12 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[440px] rounded-full bg-accent-400/12 blur-[140px]" />

      <div className="container-x relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-canvas px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600"
          >
            <Compass className="size-3.5" />
            What Drives Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[44px]"
          >
            The Compass{" "}
            <span className="grad-text-anim">We Navigate By.</span>
          </motion.h2>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {TABS.map((t, i) => (
            <button
              key={t.key}
              onClick={() => setActive(i)}
              className={`relative flex items-center gap-2.5 rounded-full px-6 py-3.5 text-[14.5px] font-semibold transition-all duration-400 ${
                active === i
                  ? "text-white"
                  : "border border-line bg-canvas text-ink-soft hover:-translate-y-0.5 hover:text-brand-600"
              }`}
            >
              {active === i && (
                <motion.span
                  layoutId="vm-pill"
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${t.gradient} shadow-[0_14px_32px_-12px_rgba(43,57,144,0.6)]`}
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                />
              )}
              <t.Icon className="relative z-10 size-4" />
              <span className="relative z-10">{t.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.34 }}
          className="relative mx-auto mt-10 max-w-5xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.key}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -24, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[32px] border border-line bg-canvas p-9 sm:p-12"
            >
              {/* Top strip */}
              <div className={`absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r ${tab.gradient}`} />

              {/* Corner glow */}
              <div className={`pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-gradient-to-br ${tab.gradient} opacity-[0.14] blur-3xl`} />

              {/* Watermark icon */}
              <tab.Icon className="pointer-events-none absolute -bottom-8 -right-4 size-52 text-brand-50" />

              <div className="relative grid gap-9 lg:grid-cols-[1.4fr_1fr]">
                <div>
                  <span className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${tab.gradient} text-white shadow-[0_14px_32px_-12px_rgba(43,57,144,0.6)]`}>
                    <tab.Icon className="size-6" />
                  </span>

                  <h3 className="mt-7 max-w-lg text-[24px] font-extrabold leading-[1.2] tracking-tight text-ink sm:text-[30px]">
                    {tab.heading}
                  </h3>

                  <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-ink-soft">
                    {tab.body}
                  </p>
                </div>

                <div className="space-y-3">
                  {tab.points.map((p, i) => (
                    <motion.div
                      key={p}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, delay: 0.15 + i * 0.1 }}
                      className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4"
                    >
                      <span className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${tab.gradient} text-[11px] font-bold text-white`}>
                        {i + 1}
                      </span>
                      <span className="text-[14px] font-medium leading-relaxed text-ink">
                        {p}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}