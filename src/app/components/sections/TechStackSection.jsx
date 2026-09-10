"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowRight, Cpu, Check } from "lucide-react";

/* ================= TOOLS ================= */
const TOOLS = [
   {
    name: "Google Ads",
    color: "#4285F4",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
        <path d="M12 11v2.4h5.79c-.23 1.5-1.75 4.4-5.79 4.4-3.48 0-6.32-2.88-6.32-6.44S8.52 4.92 12 4.92c1.98 0 3.31.85 4.07 1.57l2.77-2.67C17.06 2.17 14.73 1.2 12 1.2 6.42 1.2 1.9 5.72 1.9 11.3S6.42 21.4 12 21.4c5.87 0 9.76-4.12 9.76-9.93 0-.67-.07-1.18-.16-1.68H12v1.21Z" />
      </svg>
    ),
  },
  {
    name: "Meta Ads",
    color: "#0081FB",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
        <path d="M6.92 5c2.34 0 4.11 1.72 5.08 3.6.97-1.88 2.74-3.6 5.08-3.6C20.34 5 23 7.83 23 12.06c0 4.13-2.6 6.94-5.8 6.94-2.11 0-3.63-1.15-5.2-3.85-1.57 2.7-3.09 3.85-5.2 3.85C3.6 19 1 16.19 1 12.06 1 7.83 3.66 5 6.92 5Zm0 2.35c-1.93 0-3.5 1.85-3.5 4.71 0 2.83 1.44 4.59 3.42 4.59 1.5 0 2.6-.94 4.14-3.62l.36-.63c-1.6-3.2-2.85-5.05-4.42-5.05Zm10.16 0c-1.57 0-2.82 1.85-4.42 5.05l.36.63c1.54 2.68 2.64 3.62 4.14 3.62 1.98 0 3.42-1.76 3.42-4.59 0-2.86-1.57-4.71-3.5-4.71Z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#000000",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
        <path d="M11.57 0h.83l.02.01c.55.03 1.1.1 1.64.22 1.7.36 3.28 1.14 4.6 2.28a11.98 11.98 0 0 1 4.1 7.28c.08.5.13.99.16 1.49v.86l-.02.24c-.05.83-.19 1.65-.42 2.44a11.97 11.97 0 0 1-8.32 8.24c-.55.15-1.11.25-1.68.31-.13.01-.27.01-.4.03h-.86c-.09-.02-.19-.02-.28-.02a11.98 11.98 0 0 1-7.9-3.55A11.94 11.94 0 0 1 .06 13.1c-.03-.3-.05-.6-.06-.9v-.4c.02-.4.04-.8.09-1.2A11.97 11.97 0 0 1 8.6.35c.5-.13 1-.22 1.51-.28.31-.4.63-.5.94-.07h.52ZM9.02 7.36v9.28h1.66V9.42l6.34 8.14a8.63 8.63 0 0 0 1.4-1.15L11.6 7.36H9.02Zm5.9 0v5.6l1.66 2.14V7.36h-1.66Z" />
      </svg>
    ),
  },
  {
    name: "React Native",
    color: "#61DAFB",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
        <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26s-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9Z" />
      </svg>
    ),
  },
  
 
  {
    name: "GA4",
    color: "#E37400",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
        <path d="M22.84 2.998v17.999a2.919 2.919 0 0 1-2.919 2.919 2.919 2.919 0 0 1-2.918-2.919V2.998A2.919 2.919 0 0 1 19.921.079a2.919 2.919 0 0 1 2.919 2.919ZM12 8.836a2.919 2.919 0 0 0-2.919 2.919v9.242a2.919 2.919 0 0 0 5.838 0v-9.242A2.919 2.919 0 0 0 12 8.836Zm-7.921 8.406a2.919 2.919 0 1 0 0 5.838 2.919 2.919 0 0 0 0-5.838Z" />
      </svg>
    ),
  },
  {
    name: "Search Console",
    color: "#458CF5",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
        <path d="M9.5 3a6.5 6.5 0 1 0 3.94 11.68l5.44 5.44a1.1 1.1 0 0 0 1.56-1.56l-5.44-5.44A6.5 6.5 0 0 0 9.5 3Zm0 2.2a4.3 4.3 0 1 1 0 8.6 4.3 4.3 0 0 1 0-8.6ZM6.6 9.2h1.6v3.1H6.6V9.2Zm2.3-2.2h1.6v5.3H8.9V7Zm2.3 3.4h1.6v1.9h-1.6v-1.9Z" />
      </svg>
    ),
  },
  {
  name: "Cyber Security",
  color: "#10B981",
  svg: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
      <path d="M12 1 3.5 4.6v6.1c0 5.3 3.6 10.2 8.5 11.4 4.9-1.2 8.5-6.1 8.5-11.4V4.6L12 1Zm0 2.2 6.5 2.75v4.75c0 4.3-2.8 8.3-6.5 9.4-3.7-1.1-6.5-5.1-6.5-9.4V5.95L12 3.2Zm3.4 5.15-4.65 4.65-2.15-2.15-1.3 1.3 3.45 3.45 5.95-5.95-1.3-1.3Z" />
    </svg>
  ),
},
  {
    name: "Photoshop",
    color: "#31A8FF",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
        <path d="M3.5 1h17A2.5 2.5 0 0 1 23 3.5v17a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 1 20.5v-17A2.5 2.5 0 0 1 3.5 1Zm2.6 5.4v11.2h2.06v-3.85h1.32c2.28 0 3.87-1.4 3.87-3.72 0-2.28-1.5-3.63-3.8-3.63H6.1Zm2.06 1.8h1.2c1.13 0 1.85.6 1.85 1.85 0 1.27-.72 1.9-1.9 1.9H8.16V8.2Zm7.8 1.7c-1.72 0-2.9.95-2.9 2.35 0 1.2.7 1.87 2.1 2.3l.72.22c.75.24 1 .43 1 .82 0 .43-.4.7-1.1.7-.8 0-1.6-.28-2.2-.63v1.8c.6.3 1.4.47 2.28.47 1.86 0 3.05-.95 3.05-2.42 0-1.2-.68-1.87-2.1-2.3l-.75-.23c-.7-.22-.97-.4-.97-.77 0-.4.36-.65 1-.65.72 0 1.5.24 2.05.55V10.4c-.55-.3-1.35-.5-2.18-.5Z" />
      </svg>
    ),
  },
  {
    name: "Illustrator",
    color: "#FF9A00",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
        <path d="M3.5 1h17A2.5 2.5 0 0 1 23 3.5v17a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 1 20.5v-17A2.5 2.5 0 0 1 3.5 1ZM8.9 6.2 5.3 17.5h2.1l.75-2.5h3.4l.8 2.5h2.2L10.9 6.2H8.9Zm1 2.4 1.15 4.6H8.7l1.2-4.6Zm6.55-2.5c-.7 0-1.2.5-1.2 1.2 0 .7.48 1.2 1.18 1.2.72 0 1.2-.5 1.2-1.2 0-.7-.48-1.2-1.18-1.2Zm-1 3.4v8h2v-8h-2Z" />
      </svg>
    ),
  },
  {
    name: "Premiere Pro",
    color: "#9999FF",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
        <path d="M3.5 1h17A2.5 2.5 0 0 1 23 3.5v17a2.5 2.5 0 0 1-2.5 2.5h-17A2.5 2.5 0 0 1 1 20.5v-17A2.5 2.5 0 0 1 3.5 1ZM5.8 6.3v11.4h2.15v-3.9h1.4c2.4 0 4.05-1.45 4.05-3.85 0-2.35-1.55-3.75-3.95-3.75H5.8Zm2.15 1.85h1.3c1.2 0 1.95.62 1.95 1.9 0 1.3-.75 1.95-2 1.95H7.95V8.15Zm7 1.55v8h2.05v-5.1c.35-.35.9-.55 1.55-.55.2 0 .4.02.6.05V9.75a2.5 2.5 0 0 0-.5-.05c-.75 0-1.35.3-1.75.85l-.1-.75h-1.85Z" />
      </svg>
    ),
  },
  {
  name: "Flutter",
  color: "#02569B",
  svg: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
      <path d="M14.3 1 3.6 11.7l3.3 3.3L21.2 1h-6.9Zm0 9.7-5.8 5.8 5.8 5.8h6.9l-5.8-5.8 5.8-5.8h-6.9Z" />
    </svg>
  ),
},
  {
    name: "Figma",
    color: "#F24E1E",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-full">
        <path d="M8.5 1h7a3.75 3.75 0 0 1 2.2 6.79A3.75 3.75 0 0 1 15.5 15h-.25A3.75 3.75 0 1 1 8.5 12.5V15a3.75 3.75 0 1 1-2.2-6.79A3.75 3.75 0 0 1 8.5 1Zm0 1.9a1.85 1.85 0 0 0 0 3.7h1.85V2.9H8.5Zm3.75 0v3.7H15.5a1.85 1.85 0 0 0 0-3.7h-3.25ZM8.5 8.5a1.85 1.85 0 0 0 0 3.7h1.85V8.5H8.5Zm6 0a1.85 1.85 0 0 0 0 3.7 1.85 1.85 0 0 0 0-3.7Zm-6 5.6a1.85 1.85 0 1 0 1.85 1.85V14.1H8.5Z" />
      </svg>
    ),
  },
];

const HIGHLIGHTS = [
  "Enterprise-grade, licensed tools only",
  "Verified Meta & Google partner platforms",
  "Latest framework versions, always updated",
];

export default function TechStackSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-20 lg:py-24">
      {/* ============ BACKGROUND ============ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(43,57,144,0.14) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-1/4 size-[420px] rounded-full bg-aqua-400/12 blur-[135px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[420px] rounded-full bg-accent-400/12 blur-[135px]" />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* ================= LEFT — CONTENT ================= */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-canvas px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600"
            >
              <Cpu className="size-3.5" />
              Our Stack
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 text-[32px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[42px]"
            >
              Technology and Tools{" "}
              <span className="grad-text-anim">We Use.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="mt-5 max-w-lg text-[16px] leading-relaxed text-ink-soft"
            >
              At Cybertricks Media Pvt Ltd, we harness the latest technologies and
              tools to deliver exceptional results for our clients. These tools
              empower us to build faster sites, sharper creatives and campaigns that
              are measured properly.
            </motion.p>

            <div className="mt-8 space-y-3">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: -18 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.09 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span className="text-[14.5px] font-medium text-ink">{h}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-9"
            >
              <Link href="/contact-us" className="btn-shine">
                <span className="btn-shine-text">
                  Discuss Your Project
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* ================= RIGHT — TOOL GRID ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow behind grid */}
            <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-gradient-to-br from-aqua-400/18 via-plum-500/14 to-accent-500/18 blur-[60px]" />

            <div className="relative overflow-hidden rounded-[28px] border border-line bg-canvas p-2.5 shadow-[0_28px_66px_-30px_rgba(43,57,144,0.45)]">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[20px] bg-line sm:grid-cols-3 lg:grid-cols-4">
                {TOOLS.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.45, delay: 0.35 + i * 0.05 }}
                    className="group relative flex aspect-[4/3] flex-col items-center justify-center gap-2.5 bg-white p-3 transition-colors duration-400 hover:bg-canvas"
                  >
                    {/* Corner accent on hover */}
                    <span className="pointer-events-none absolute -right-8 -top-8 size-20 rounded-full bg-gradient-to-br from-brand-500 to-accent-500 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25" />

                    {/* Icon */}
                    <span
                      className="relative size-8 text-ink-mute transition-all duration-400 group-hover:scale-110 sm:size-9"
                      style={{ "--brand": t.color }}
                    >
                      <span className="absolute inset-0 transition-opacity duration-400 group-hover:opacity-0">
                        {t.svg}
                      </span>
                      <span
                        className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
                        style={{ color: t.color }}
                      >
                        {t.svg}
                      </span>
                    </span>

                    {/* Name */}
                    <p className="relative text-center text-[11.5px] font-semibold leading-tight text-ink-soft transition-colors duration-300 group-hover:text-ink">
                      {t.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating count badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -bottom-5 -left-5 z-20 hidden rounded-2xl border border-line bg-white px-5 py-4 shadow-[0_18px_44px_-18px_rgba(43,57,144,0.5)] sm:block"
            >
              <p className="text-[24px] font-extrabold leading-none grad-text">
                50+
              </p>
              <p className="mt-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-mute">
                Tools
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}