"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  ChevronRight,
  Check,
  Layers,
  Calendar,
  MapPin,
  Quote,
  Award,
  Users,
  Sparkles,
  Newspaper,
  Share2,
  Mail,
} from "lucide-react";

/* ================= HIGHLIGHTS ================= */
const HIGHLIGHTS = [
  {
    Icon: Users,
    title: "High-Level Keynote Addresses",
    desc: "By senior government officials, industry leaders, and global subject matter experts, offering insights into growth, innovation, and policy advancements for MSMEs and SMEs.",
  },
  {
    Icon: Layers,
    title: "Engaging Business Sessions",
    desc: "Featuring key government representatives (MSME Department, GeM Department and related govt. departments), focusing on schemes, digital transformation, and the future of the sector.",
  },
  {
    Icon: Award,
    title: "The Times of MSME Excellence Awards Ceremony",
    desc: "Honoring outstanding MSMEs and entrepreneurs for their leadership, resilience, and innovation in advancing India's economic ecosystem.",
  },
  {
    Icon: Share2,
    title: "Strategic Networking Opportunities",
    desc: "Promoting collaboration, investment, and new partnerships — paving the way for future growth within the MSME and SME sectors.",
  },
];

const BRANDS = [
  "Bharat BizMart",
  "Cyber Tricks Media",
  "The K12 Times",
  "Gen Next Films",
  "The Times of MSME",
];

const PARTICLES = [
  { top: "16%", left: "8%", color: "bg-aqua-400", dur: 18, dx: 40, dy: -30 },
  { top: "70%", left: "16%", color: "bg-accent-400", dur: 22, dx: -35, dy: 40 },
  { top: "26%", left: "88%", color: "bg-plum-400", dur: 20, dx: 45, dy: 35 },
  { top: "80%", left: "76%", color: "bg-aqua-300", dur: 24, dx: -40, dy: -35 },
  { top: "48%", left: "50%", color: "bg-accent-300", dur: 19, dx: 30, dy: 45 },
];

export default function PressReleasePage() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* ============================================================
          BANNER — DARK (services-style right illustration)
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
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            {/* LEFT */}
            <div>
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
                <span className="text-white/85">Press Release</span>
              </motion.div>

              <motion.span
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm"
              >
                <Newspaper className="size-3.5" />
                Official Press Release
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22 }}
                className="mt-6 text-[32px] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[42px] lg:text-[46px]"
              >
                From Strength to Legacy:{" "}
                <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
                  3rd Edition of The Times of MSME Excellence Awards.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.34 }}
                className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/60"
              >
                Building on the success of its 1st and 2nd Editions, the
                Excellence Awards & Business Conference 2025 returns — organized
                by visionary entrepreneur Mr. Sunny Rathor.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.46 }}
                className="mt-9 flex flex-wrap items-center gap-2.5"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-[13px] font-semibold text-white backdrop-blur-sm">
                  <Calendar className="size-3.5 text-aqua-300" />
                  May 8, 2025
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-[13px] font-semibold text-white backdrop-blur-sm">
                  <MapPin className="size-3.5 text-aqua-300" />
                  New Delhi, India
                </span>
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

              {/* Floating chips */}
              {[
                {
                  Icon: Award,
                  label: "Excellence Awards",
                  cls: "-left-4 top-4",
                  d: 4.5,
                  dir: -14,
                  grad: "from-brand-600 to-plum-600",
                },
                {
                  Icon: Users,
                  label: "Business Conference",
                  cls: "-right-2 top-1/3",
                  d: 5.5,
                  dir: 16,
                  grad: "from-accent-500 to-plum-600",
                },
                {
                  Icon: Sparkles,
                  label: "3rd Edition",
                  cls: "bottom-6 left-2",
                  d: 5.0,
                  dir: -12,
                  grad: "from-aqua-500 to-brand-600",
                },
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
                  <span
                    className={`grid size-9 place-items-center rounded-xl bg-gradient-to-br ${c.grad} text-white`}
                  >
                    <c.Icon className="size-4" />
                  </span>
                  <p className="text-[13px] font-bold text-white">{c.label}</p>
                </motion.div>
              ))}

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 mx-auto w-full max-w-[420px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/press-banners.png"
                  alt="The Times of MSME Excellence Awards"
                  className="h-auto w-full object-contain drop-shadow-[0_25px_50px_rgba(111,207,231,0.3)]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
      </section>

      {/* ============================================================
          PRESS RELEASE BODY — LIGHT
      ============================================================ */}
      <section className="relative overflow-hidden bg-canvas py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(43,57,144,0.16) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "radial-gradient(ellipse 70% 50% at 50% 0%, #000 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 50% at 50% 0%, #000 30%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute -left-40 top-1/4 size-[450px] rounded-full bg-aqua-400/14 blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[450px] rounded-full bg-accent-400/14 blur-[140px]" />

        <div ref={headRef} className="container-x relative z-10 max-w-4xl">
          {/* ---------- INTRO PARAGRAPHS ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="grid gap-8 rounded-[28px] border border-line bg-white p-8 sm:p-11 lg:grid-cols-[1.15fr_0.85fr] lg:items-center"
          >
            <div>
              <p className="text-[15.5px] leading-relaxed text-ink-soft">
                <span className="font-bold text-ink">
                  New Delhi, India – May 8, 2025 –
                </span>{" "}
                Building on the immense success of its 1st and 2nd Editions, the
                3rd Edition of The Times of MSME Excellence Awards & Business
                Conference 2025 is all set to be organized by visionary
                entrepreneur{" "}
                <span className="font-semibold text-brand-600">
                  Mr. Sunny Rathor
                </span>
                . After two years of tremendous growth and recognition, this
                annual Excellence Awards & Business Conference event continues
                to strengthen its legacy as India&apos;s premier platform for
                celebrating excellence and fostering transformative growth
                within the Micro, Small, and Medium Enterprises (MSME) and Small
                and Medium Enterprises (SMEs) sectors.
              </p>

              <p className="mt-5 text-[15.5px] leading-relaxed text-ink-soft">
                The 2025 Edition is going to be organised on an international
                level, marking yet another milestone in the journey of
                empowering MSMEs and SMEs across India. This year&apos;s event
                promises to bring together a diverse group of business leaders,
                policymakers, entrepreneurs, and global enablers, who will
                engage in forward-thinking discussions and recognize the
                outstanding contributions of MSMEs and SMEs to India&apos;s
                economic growth.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[340px] overflow-hidden rounded-[22px] shadow-[0_25px_55px_-20px_rgba(43,57,144,0.35)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/press.jpeg"
                alt="The Times of MSME Excellence Awards & Business Conference 2025 — 3rd Edition, presented by Cybertricks Media, powered by Bharat BizMart"
                className="h-auto w-full object-contain"
              />
            </div>
          </motion.div>

          {/* ---------- HIGHLIGHTS ---------- */}
          <div className="mt-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[24px] font-extrabold leading-tight tracking-tight text-ink sm:text-[28px]"
            >
              Event <span className="grad-text-anim">Highlights.</span>
            </motion.h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={headInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="group relative overflow-hidden rounded-[24px] border border-line bg-white p-6 transition-all duration-400 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_22px_50px_-22px_rgba(43,57,144,0.4)]"
                >
                  <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-[0_10px_24px_-8px_rgba(43,57,144,0.5)]">
                    <h.Icon className="size-5" />
                  </span>
                  <p className="mt-4 text-[16px] font-bold text-ink">
                    {h.title}
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                    {h.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ---------- QUOTE ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative mt-10 overflow-hidden rounded-[28px] p-9 text-white sm:p-11"
            style={{
              background:
                "linear-gradient(120deg, #1e2762 0%, #2B3990 35%, #7B3FA0 70%, #E0459A 100%)",
            }}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-white/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-aqua-400/25 blur-3xl" />

            <Quote className="relative size-9 text-white/40" />
            <p className="relative mt-4 text-[19px] font-medium leading-relaxed sm:text-[22px]">
              &quot;The Times of MSME Excellence Awards is not just a
              recognition ceremony – it&apos;s a movement designed to elevate
              India&apos;s MSME and SMEs sectors to new heights. With each
              edition, we aim to connect more stakeholders, amplify
              transformative stories, and create powerful opportunities for
              growth and progress.&quot;
            </p>
            <p className="relative mt-6 text-[14.5px] font-semibold text-aqua-200">
              — Mr. Sunny Rathor, Founder and Curator of the event
            </p>
          </motion.div>

          {/* ---------- CLOSING PARAGRAPH ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 rounded-[28px] border border-line bg-white p-8 sm:p-11"
          >
            <p className="text-[15.5px] leading-relaxed text-ink-soft">
              The event garnered widespread media coverage and was praised for
              its seamless execution and high-impact content. As India&apos;s
              MSMEs & SMEs continue to be the driving force behind the
              nation&apos;s economic engine, The Times of MSME Excellence Awards
              & Business Conference remains a cornerstone event for policy
              advocacy, business development, and national recognition.
            </p>
          </motion.div>

          {/* ---------- ABOUT THE ORGANIZER ---------- */}
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative mt-10 overflow-hidden rounded-[28px] border border-line bg-white p-8 sm:p-11"
          >
            <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
            <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-accent-400/16 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 size-56 rounded-full bg-aqua-400/18 blur-3xl" />

            <div className="relative flex items-start gap-5">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-[0_14px_32px_-12px_rgba(43,57,144,0.6)]">
                <Users className="size-6" />
              </span>
              <div>
                <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-accent-500">
                  About the Organizer
                </p>
                <h3 className="mt-2 text-[22px] font-extrabold leading-tight tracking-tight text-ink sm:text-[26px]">
                  Sunny Rathor — Founder & CEO
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  Sunny Rathor is a distinguished entrepreneur and strategic
                  business leader, recognized for establishing innovative
                  platforms that foster leadership, innovation, and excellence
                  across diverse sectors. As the Founder and CEO of Bharat
                  BizMart, Cyber Tricks Media, The K12 Times, Gen Next Films and
                  The Times of MSME, he has played a pivotal role in advancing
                  India&apos;s MSME and SMEs ecosystem. Through initiatives such
                  as The Times of MSME Excellence Awards & Business Conference,
                  Mr. Rathor remains deeply committed to enabling sustainable
                  growth, encouraging entrepreneurial excellence, and enhancing
                  the global visibility of Indian enterprises. His visionary
                  leadership continues to contribute significantly to
                  India&apos;s economic progress and industrial transformation.
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {BRANDS.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-line bg-canvas px-4 py-1.5 text-[13px] font-semibold text-ink-soft"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ---------- MEDIA CONTACT CTA ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mt-10 overflow-hidden rounded-[28px] border border-line bg-white p-9 sm:p-11"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-accent-400/16 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 size-56 rounded-full bg-aqua-400/18 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div className="flex items-start gap-5">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-[0_14px_32px_-12px_rgba(43,57,144,0.6)]">
                  <Mail className="size-6" />
                </span>
                <div>
                  <h3 className="text-[22px] font-extrabold leading-tight tracking-tight text-ink sm:text-[27px]">
                    Media & Press Inquiries
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] text-ink-soft">
                    For quotes, interviews or press assets related to this
                    release, reach out to our press desk.
                  </p>
                </div>
              </div>

              <Link href="/contact-us" className="btn-shine shrink-0">
                <span className="btn-shine-text">
                  Contact Press Desk
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
