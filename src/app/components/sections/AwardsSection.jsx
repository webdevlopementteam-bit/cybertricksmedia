"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "motion/react";
import { ArrowRight, ArrowLeft, Trophy } from "lucide-react";

/* ================= AWARDS ================= */
const AWARDS = [
  { img: "/awards/award1.webp" },
  { img: "/awards/award2.webp" },
  { img: "/awards/award3.webp" },
  { img: "/awards/award4.webp" },
  { img: "/awards/award5.webp" },
  { img: "/awards/award6.webp" },
  { img: "/awards/award7.webp" },
];

const AUTOPLAY = 4000;
const PER_VIEW = 3;

export default function AwardsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const isVisible = useInView(ref, { margin: "-120px" });

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(null);

  const maxIndex = Math.max(0, AWARDS.length - PER_VIEW);

  useEffect(() => {
    if (!inView || paused) return;
    const t = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTOPLAY);
    return () => clearInterval(t);
  }, [inView, paused, maxIndex]);

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-28"
      style={{
        background:
          "linear-gradient(140deg, #12163a 0%, #1a2152 40%, #241b52 70%, #2e1a48 100%)",
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
            "radial-gradient(ellipse 80% 60% at 50% 40%, #000 35%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #000 35%, transparent 100%)",
        }}
      />
      <div 
  className="pointer-events-none absolute -left-40 top-0 size-[280px] rounded-full bg-aqua-500/16 blur-[80px]" 
  style={{ willChange: "transform", transform: "translateZ(0)" }}
/>
      <div 
  className="pointer-events-none absolute -right-40 bottom-0 size-[280px] rounded-full bg-accent-500/16 blur-[80px]" 
  style={{ willChange: "transform", transform: "translateZ(0)" }}
/>

      {/* ================= ROTATING TROPHY — LEFT CORNER ================= */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -left-16 top-1/2 z-0 hidden -translate-y-1/2 lg:block xl:-left-8"
      >
        {/* Glow behind trophy */}
       <div 
  className="absolute left-1/2 top-1/2 size-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aqua-400/25 blur-[60px]" 
  style={{ willChange: "transform", transform: "translateZ(0)" }}
/>

        {/* Rotating rings */}
        <motion.div
          animate={isVisible ? { rotate: 360 } : {}}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 size-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
        />
        <motion.div
          animate={isVisible ? { rotate: -360 } : {}}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 size-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.07]"
        />

        {/* Trophy — spins on Y axis + floats */}
        <div className="relative" style={{ perspective: "1200px" }}>
          <motion.div
            animate={isVisible ? { y: [0, -18, 0] } : {}}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              animate={isVisible ? { rotateY: 360 } : {}}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{ transformStyle: "preserve-3d", willChange: "transform" }}
              className="w-[240px] xl:w-[290px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/home/award.png"
                alt="Award trophy"
                width={290}
                height={550}
                decoding="async"
                className="h-[550px] w-full object-contain drop-shadow-[0_25px_50px_rgba(111,207,231,0.4)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="container-x relative z-10">
        <div className="lg:pl-[300px] xl:pl-[340px]">
          {/* ---------- HEADING ---------- */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm"
              >
                <Trophy className="size-3.5" />
                Recognition
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 26 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="mt-5 text-[32px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[44px]"
              >
                Shelves Don&apos;t Lie.{" "}
                <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
                  Neither Do We.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.24 }}
                className="mt-4 max-w-md text-[15.5px] leading-relaxed text-white/60"
              >
                National and international honours earned for work that actually
                moved the needle for our clients.
              </motion.p>
            </div>

            {/* Arrows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="flex shrink-0 items-center gap-2.5"
            >
              <button
                onClick={prev}
                aria-label="Previous award"
                className="grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-aqua-400/60 hover:bg-white/20"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next award"
                className="grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/60 hover:bg-white/20"
              >
                <ArrowRight className="size-4" />
              </button>
            </motion.div>
          </div>

          {/* ---------- SLIDER ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => {
              setPaused(false);
              setHovered(null);
            }}
            className="relative mt-12 overflow-hidden"
          >
            <motion.div
              animate={{ x: `-${index * (100 / PER_VIEW)}%` }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-5"
            >
              {AWARDS.map((a, i) => (
                <div
                  key={i}
                  className="group relative w-[78%] shrink-0 sm:w-[46%] lg:w-[calc(33.333%-0.9rem)]"
                >
                  {/* Card */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] border border-white/12 bg-white/[0.05] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/30 group-hover:shadow-[0_30px_70px_-25px_rgba(224,69,154,0.5)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={a.img}
                      alt={a.title}
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Dark overlay on hover */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#12163a]/95 via-[#12163a]/25 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                    {/* ---------- HOVER LABEL — RIGHT BOTTOM ---------- */}
                    <AnimatePresence>
                      {hovered === i && (
                        <motion.div
                          initial={{ opacity: 0, y: 20, x: 20 }}
                          animate={{ opacity: 1, y: 0, x: 0 }}
                          exit={{ opacity: 0, y: 20, x: 20 }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="absolute bottom-4 right-4 max-w-[82%] rounded-2xl border border-white/20 bg-white/[0.14] p-4 text-right backdrop-blur-2xl"
                        >
                          <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-aqua-300">
                            {a.company}
                          </p>

                          <p className="mt-1.5 text-[14px] font-bold leading-snug text-white">
                            {a.title}
                          </p>

                          <p className="mt-1 text-[11.5px] text-white/60">
                            {a.org}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Trophy badge — top right */}
                    <div className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-gradient-to-br from-aqua-400 to-plum-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                      <Trophy className="size-4" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ---------- DOTS + CTA ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row"
          >
            {/* Dots */}
            <div className="flex items-center gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-400 ${
                    index === i
                      ? "w-9 bg-gradient-to-r from-aqua-400 to-accent-500"
                      : "w-1.5 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <Link href="/awards-recognition" className="btn-shine">
              <span className="btn-shine-text">
                View All Awards
                <ArrowRight className="size-4" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ============ EDGE LINES ============ */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-accent-500 via-plum-500 to-aqua-400" />
    </section>
  );
}
