"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  ArrowRight, ChevronRight, Check, BookOpen, Calendar, Tag,
  TrendingUp, Users, Sparkles,
} from "lucide-react";
import { BLOGS } from "@/app/data/blogs";

const PARTICLES = [
  { top: "16%", left: "8%",  color: "bg-aqua-400",   dur: 18, dx: 40,  dy: -30 },
  { top: "70%", left: "16%", color: "bg-accent-400", dur: 22, dx: -35, dy: 40  },
  { top: "26%", left: "88%", color: "bg-plum-400",   dur: 20, dx: 45,  dy: 35  },
  { top: "80%", left: "76%", color: "bg-aqua-300",   dur: 24, dx: -40, dy: -35 },
  { top: "48%", left: "50%", color: "bg-accent-300", dur: 19, dx: 30,  dy: 45  },
];

export default function BlogPage() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* ============================================================
          BANNER — DARK
      ============================================================ */}
      <section
        className="relative flex min-h-[520px] items-center overflow-hidden pb-20 pt-[160px] lg:min-h-[600px]"
        style={{
          background:
            "linear-gradient(140deg, #0e1230 0%, #1a2152 38%, #241b52 68%, #2e1a48 100%)",
        }}
      >
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
              transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
            />
          ))}
        </div>

        <div className="container-x relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">

            {/* LEFT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 text-[13px] text-white/50"
              >
                <Link href="/" className="transition hover:text-aqua-300">Home</Link>
                <ChevronRight className="size-3.5" />
                <span className="text-white/85">Blog</span>
              </motion.div>

              <motion.span
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm"
              >
                <BookOpen className="size-3.5" />
                Insights & Ideas
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22 }}
                className="mt-6 text-[38px] font-extrabold leading-[1.06] tracking-tight text-white sm:text-[52px] lg:text-[58px]"
              >
                Ideas Worth{" "}
                <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
                  Your Time.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.34 }}
                className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/60"
              >
                Marketing strategy, industry trends and practical takeaways from
                campaigns we've actually run — no fluff.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.46 }}
                className="mt-9 flex flex-wrap items-center gap-2.5"
              >
                {["Actionable takeaways", "Real campaign data", "Updated regularly"].map(
                  (c, i) => (
                    <motion.span
                      key={c}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.8,
                      }}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-[13px] font-semibold text-white backdrop-blur-sm"
                    >
                      <Check className="size-3.5 text-aqua-300" strokeWidth={3} />
                      {c}
                    </motion.span>
                  )
                )}
              </motion.div>
            </div>

            {/* RIGHT — ILLUSTRATION */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="pointer-events-none absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-aqua-500/25 via-plum-500/20 to-accent-500/25 blur-[90px]" />

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

              {[
                { Icon: BookOpen,   label: "Fresh Insights",   cls: "-left-4 top-4",     d: 4.5, dir: -14, grad: "from-brand-600 to-plum-600" },
                { Icon: TrendingUp, label: "Growth Tactics",   cls: "-right-2 top-1/3",  d: 5.5, dir: 16,  grad: "from-accent-500 to-plum-600" },
                { Icon: Users,      label: "Client Learnings", cls: "bottom-6 left-2",   d: 5.0, dir: -12, grad: "from-aqua-500 to-brand-600" },
              ].map((c, i) => (
                <motion.div
                  key={c.label}
                  animate={{ y: [0, c.dir, 0] }}
                  transition={{
                    duration: c.d,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.6,
                  }}
                  className={`absolute z-20 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl ${c.cls}`}
                >
                  <span className={`grid size-9 place-items-center rounded-xl bg-gradient-to-br ${c.grad} text-white`}>
                    <c.Icon className="size-4" />
                  </span>
                  <p className="text-[13px] font-bold text-white">{c.label}</p>
                </motion.div>
              ))}

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 mx-auto w-full max-w-[420px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/blogs-banner.png"
                  alt="Cybertricks Media blog"
                  className="h-auto w-full object-contain drop-shadow-[0_25px_50px_rgba(111,207,231,0.3)]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
      </section>

      {/* ============================================================
          BLOG GRID — LIGHT
      ============================================================ */}
      <section className="relative overflow-hidden bg-canvas py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(43,57,144,0.16) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, #000 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, #000 30%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute -left-40 top-1/4 size-[450px] rounded-full bg-aqua-400/14 blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[450px] rounded-full bg-accent-400/14 blur-[140px]" />

        <div className="container-x relative z-10">
          <div ref={headRef} className="mx-auto max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent-500" />
              </span>
              Latest Articles
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[44px]"
            >
              From Our{" "}
              <span className="grad-text-anim">Newsroom.</span>
            </motion.h2>
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {BLOGS.map((blog, i) => (
              <BlogCard key={blog.slug} blog={blog} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ================= BLOG CARD ================= */
function BlogCard({ blog, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-[26px] border border-line bg-white transition-all duration-400 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_26px_58px_-24px_rgba(43,57,144,0.45)]"
    >
      <Link href={`/blog/${blog.slug}`} className="block">
        <div className="relative h-[200px] w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11.5px] font-bold text-brand-600 backdrop-blur-sm">
            <Tag className="size-3" />
            {blog.category}
          </span>
        </div>

        <div className="p-6">
          <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-ink-mute">
            <Calendar className="size-3.5" />
            {blog.date}
          </span>

          <h3 className="mt-3 text-[18px] font-extrabold leading-snug tracking-tight text-ink transition-colors duration-300 group-hover:text-brand-600">
            {blog.title}
          </h3>

          <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft line-clamp-3">
            {blog.excerpt}
          </p>

          <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-600">
            Read Article
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}