"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { CLIENTS } from "@/app/data/clients";

/* Split into 3 rows */
const chunk = (arr, n) => {
  const size = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (_, i) => arr.slice(i * size, i * size + size));
};

const ROWS = chunk(CLIENTS, 3);

export default function PortfolioSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-canvas py-24 lg:py-16"
    >
      {/* ============ BACKGROUND ============ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(43,57,144,0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 75% 55% at 50% 30%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 55% at 50% 30%, #000 30%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-1/3 size-[430px] rounded-full bg-aqua-400/14 blur-[135px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[430px] rounded-full bg-accent-400/14 blur-[135px]" />

      {/* ============ HEADING ============ */}
      <div className="container-x relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600"
          >
            <Sparkles className="size-3.5" />
            Our Portfolio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[46px]"
          >
            Brands That{" "}
            <span className="grad-text-anim">Grew With Us.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-5 text-[16px] leading-relaxed text-ink-soft"
          >
            From local manufacturers to national names — 3,800+ businesses have
            trusted us with their brand.
          </motion.p>
        </div>
      </div>

      {/* ============ MARQUEE ROWS ============ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="relative mt-16 space-y-5"
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-canvas to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-canvas to-transparent sm:w-40" />

        {ROWS.map((row, i) => (
          <MarqueeRow
            key={i}
            items={row}
            reverse={i % 2 === 1}
            speed={[46, 40, 52][i]}
          />
        ))}
      </motion.div>

      {/* ============ CTA ============ */}
      <div className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-col items-center gap-5"
        >
          <p className="text-center text-[14.5px] text-ink-soft">
            Ready to see your logo here?
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact-us" className="btn-shine">
              <span className="btn-shine-text">
                Become Our Next Client
                <ArrowRight className="size-4" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= MARQUEE ROW ================= */
function MarqueeRow({ items, reverse, speed }) {
  return (
    <div className="marquee group">
      <div
        className="marquee-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {[...items, ...items].map((c, i) => (
          <div
            key={`${c.name}-${i}`}
            title={c.name}
            className="group/card relative grid h-[104px] w-[190px] shrink-0 place-items-center rounded-2xl border border-line bg-white px-7 shadow-[0_4px_20px_-10px_rgba(43,57,144,0.25)] transition-all duration-400 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_20px_46px_-18px_rgba(43,57,144,0.45)] sm:h-[112px] sm:w-[210px]"
          >
            {/* Gradient top strip on hover */}
            <span className="absolute inset-x-6 top-0 h-[2.5px] scale-x-0 rounded-full bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500 transition-transform duration-400 group-hover/card:scale-x-100" />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.img}
              alt={c.name}
              loading="lazy"
              className="max-h-[58px] w-full object-contain transition-all duration-400"
            />
          </div>
        ))}
      </div>
    </div>
  );
}