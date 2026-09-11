"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  ChevronRight,
  Check,
  Layers,
  Share2,
  Search,
  Megaphone,
  Clapperboard,
  Radio,
  Code2,
  Users,
  Sparkles,
   CalendarDays,
} from "lucide-react";

/* Must exactly match the video files' background colour */
const BG = "#F9FAFF";

/* ================= 8 MAIN SERVICES ================= */
const SERVICES = [
  {
    id: "01",
    tag: "Social Media Marketing",
    title: "Where Your Audience Already Lives",
    desc: "Facebook, Instagram, LinkedIn, YouTube, Threads and X — managed as one strategy, not seven separate accounts. Content that people actually stop for.",
    points: [
      "Facebook & Instagram Marketing",
      "LinkedIn & Threads Marketing",
      "YouTube Marketing",
      "Content Marketing",
    ],
    href: "/social-media-marketing",
    video: "/home/digital.mp4",
    Icon: Share2,
    gradient: "from-brand-600 to-plum-600",
  },
  {
    id: "02",
    tag: "Search Engine Marketing",
    title: "Be the Answer, Not an Option",
    desc: "Traditional SEO plus AEO and GEO — so you rank on Google today and get quoted by AI assistants tomorrow. Built for how people actually search now.",
    points: [
      "Search Engine Optimization (SEO)",
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
      "Google My Business (GMB)",
    ],
    href: "/search-engine-marketing",
    video: "/home/SEO-video.mp4",
    Icon: Search,
    gradient: "from-aqua-500 to-brand-600",
  },
  {
    id: "03",
    tag: "Sponsored Ads",
    title: "Instant Traffic, Tracked to the Rupee",
    desc: "Google, Meta, YouTube and OTT campaigns where every rupee is tied to a click, a lead or a sale. No spend without a number to show for it.",
    points: ["Google Adwords", "Meta Ads", "YouTube Ads", "OTT Advertising"],
    href: "/sponsored-ads",
    video: "/home/Sponsored-video.mp4",
    Icon: Megaphone,
    gradient: "from-plum-600 to-accent-500",
  },
  {
    id: "04",
    tag: "Film Production",
    title: "Every Brand Has a Story",
    desc: "TV commercials, corporate films, web series, jingles and AI videos — produced in-house with cinematic precision and sound that sells.",
    points: [
      "TV Ads & Corporate Films",
      "Short Films & Web Series",
      "AI Videos & Chroma Spots",
      "Radio Jingles & Video Songs",
    ],
    href: "/film-production",
    video: "/home/Filming.mp4",
    Icon: Clapperboard,
    gradient: "from-accent-500 to-plum-600",
  },
  {
    id: "05",
    tag: "Advertising",
    title: "Own Every Screen and Street",
    desc: "Hoardings, cinema screens, television and radio — offline advertising planned, negotiated and executed across India with verified reach reports.",
    points: [
      "Outdoor & Indoor Advertising",
      "Cinema Advertising",
      "TV Advertising",
      "Radio Advertising",
    ],
    href: "/advertising",
    video: "/home/Advertising.mp4",
    Icon: Radio,
    gradient: "from-brand-600 to-aqua-500",
  },
  {
    id: "06",
    tag: "Development",
    title: "Designed to Impress, Built to Convert",
    desc: "Lightning-fast websites, mobile apps, custom CRM and interfaces people enjoy using — built by developers who understand marketing, not just code.",
    points: [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "CRM Software",
    ],
    href: "/web-development",
    video: "/home/website.mp4",
    Icon: Code2,
    gradient: "from-aqua-500 to-plum-600",
  },
  {
    id: "07",
    tag: "Brand & Influence",
    title: "Get Your Brand Talked About",
    desc: "Brand strategy, celebrity endorsements, influencer campaigns and affiliate networks that put your name in front of the people who actually matter.",
    points: [
      "Brand Management",
      "Celebrity Endorsement",
      "Influencer Marketing",
      "Affiliate Marketing",
    ],
    href: "/brand-management",
    video: "/home/Affiliates.mp4",
    Icon: Users,
    gradient: "from-plum-600 to-brand-600",
  },
  {
  id: "08",
  tag: "AI Services",
  title: "Work Smarter With AI-Powered Growth",
  desc: "AI-powered marketing, automation, intelligent content and smart business workflows designed to save time and create better results.",
  points: [
    "AI Marketing & Automation",
    "AI Content & Creative Solutions",
    "AI Chatbots & Assistants",
    "AI-Powered Business Solutions",
  ],
  href: "/ai-services",
  video: "/home/ai-enabled.mp4",
  Icon: Sparkles,
  gradient: "from-accent-500 to-brand-600",
},

{
  id: "09",
  tag: "Event & PR",
  title: "Create Moments That Get Noticed",
  desc: "From product launches and conferences to PR campaigns and award shows — we plan, execute and amplify every important moment.",
  points: [
    "Event Management",
    "PR Management",
    "Award Shows & Exhibitions",
    "Event Promotion & Media Coverage",
  ],
  href: "/event-and-pr",
  video: "/home/Events.mp4",
  Icon: CalendarDays,
  gradient: "from-brand-600 to-plum-600",
},
];

const PARTICLES = [
  { top: "16%", left: "8%", color: "bg-aqua-400", dur: 18, dx: 40, dy: -30 },
  { top: "70%", left: "16%", color: "bg-accent-400", dur: 22, dx: -35, dy: 40 },
  { top: "26%", left: "88%", color: "bg-plum-400", dur: 20, dx: 45, dy: 35 },
  { top: "80%", left: "76%", color: "bg-aqua-300", dur: 24, dx: -40, dy: -35 },
  { top: "48%", left: "50%", color: "bg-accent-300", dur: 19, dx: 30, dy: 45 },
];

/* ================================================================
   PAGE
================================================================ */
export default function ServicesPage() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* ============================================================
          BANNER — DARK
      ============================================================ */}
      <section
        className="relative flex min-h-[520px] items-center overflow-hidden py-20 lg:min-h-[600px]"
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
                <span className="text-white/85">Services</span>
              </motion.div>

              <motion.span
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm"
              >
                <Layers className="size-3.5" />8 Core Verticals
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22 }}
                className="mt-6 text-[38px] font-extrabold leading-[1.06] tracking-tight text-white sm:text-[52px] lg:text-[58px]"
              >
                One Team.{" "}
                <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
                  Every Channel.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.34 }}
                className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/60"
              >
                From the first idea to the final campaign — social, search,
                films, hoardings, websites and events, all built under one roof
                by the same people who pitch it to you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.46 }}
                className="mt-9 flex flex-wrap items-center gap-2.5"
              >
                {[
                  "No outsourcing",
                  "Transparent pricing",
                  "No lock-in contracts",
                ].map((c, i) => (
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
                ))}
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
                  Icon: Share2,
                  label: "Social Media",
                  cls: "-left-4 top-4",
                  d: 4.5,
                  dir: -14,
                  grad: "from-brand-600 to-plum-600",
                },
                {
                  Icon: Clapperboard,
                  label: "Film Production",
                  cls: "-right-2 top-1/3",
                  d: 5.5,
                  dir: 16,
                  grad: "from-accent-500 to-plum-600",
                },
                {
                  Icon: Code2,
                  label: "Development",
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
                  src="/services-banner.png"
                  alt="Cybertricks Media services"
                  className="h-auto w-full object-contain drop-shadow-[0_25px_50px_rgba(111,207,231,0.3)]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
      </section>

      {/* ============================================================
          SERVICES — LIGHT
      ============================================================ */}
      <section
        className="relative overflow-hidden py-20"
        style={{ backgroundColor: BG }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[340px] opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(43,57,144,0.16) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.5) 55%, transparent 100%)",
          }}
        />

        <div className="container-x relative z-10">
          {/* Heading */}
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
              What We Do
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[44px]"
            >
              Nine Ways We{" "}
              <span className="grad-text-anim">Grow Your Brand.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-5 text-[16px] leading-relaxed text-ink-soft"
            >
              Pick one, or let us build a plan that uses several. Most clients
              start with one and end up with three.
            </motion.p>
          </div>

          {/* Rows */}
          <div className="mt-16 space-y-16 lg:space-y-20">
            {SERVICES.map((s, i) => (
              <ServiceRow key={s.id} service={s} reverse={i % 2 === 1} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            ref={ctaRef}
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative mt-20 overflow-hidden rounded-[28px] border border-line bg-white p-9 sm:p-11"
          >
            <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
            <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-accent-400/16 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 size-56 rounded-full bg-aqua-400/18 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div className="flex items-start gap-5">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-[0_14px_32px_-12px_rgba(43,57,144,0.6)]">
                  <Layers className="size-6" />
                </span>
                <div>
                  <h3 className="text-[22px] font-extrabold leading-tight tracking-tight text-ink sm:text-[27px]">
                    Not sure which one you need?
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] text-ink-soft">
                    Tell us the goal in one line. We&apos;ll tell you honestly
                    which service gets you there fastest.
                  </p>
                </div>
              </div>

              <Link href="/contact-us" className="btn-shine shrink-0">
                <span className="btn-shine-text">
                  Get a Free Strategy Call
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

/* ================= SERVICE ROW ================= */
function ServiceRow({ service, reverse }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const { Icon } = service;

  return (
    <div ref={ref} className="grid items-center lg:grid-cols-2">
      {/* ---------- CONTENT ---------- */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={reverse ? "lg:order-2" : "lg:order-1"}
      >
        <div className="flex items-center gap-4">
          <span
            className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-[0_12px_30px_-10px_rgba(43,57,144,0.5)]`}
          >
            <Icon className="size-5" />
          </span>
          <span className="text-[42px] font-extrabold leading-none text-line">
            {service.id}
          </span>
        </div>

        <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.16em] text-accent-500">
          {service.tag}
        </p>

        <h3 className="mt-3 text-[28px] font-extrabold leading-[1.15] tracking-tight text-ink sm:text-[36px]">
          {service.title}
        </h3>

        <p className="mt-4 max-w-lg text-[15.5px] leading-relaxed text-ink-soft">
          {service.desc}
        </p>

        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {service.points.map((p, idx) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + idx * 0.09 }}
              className="flex items-center gap-3"
            >
              <span
                className={`grid size-5 shrink-0 place-items-center rounded-full bg-gradient-to-br ${service.gradient} text-white`}
              >
                <Check className="size-3" strokeWidth={3} />
              </span>
              <span className="text-[14.5px] font-medium text-ink">{p}</span>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link
            href={service.href}
            className="group inline-flex items-center gap-3 rounded-full border-[1.5px] border-line bg-white px-6 py-3.5 text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_16px_38px_-14px_rgba(43,57,144,0.5)]"
          >
            Explore Service
            <span
              className={`grid size-7 place-items-center rounded-full bg-gradient-to-br ${service.gradient} text-white transition-transform duration-300 group-hover:translate-x-1`}
            >
              <ArrowRight className="size-3.5" />
            </span>
          </Link>

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-[14.5px] font-semibold text-brand-600 transition-all duration-300 hover:text-accent-600"
          >
            Get a Quote
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </motion.div>

      {/* ---------- VIDEO ---------- */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`flex items-center justify-center ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="relative flex h-[500px] w-full max-w-[520px] items-center justify-center">
          {/* Very soft contact shadow — grounds the subject */}
          <div
            className="pointer-events-none absolute bottom-[84px] left-1/2 h-[14px] w-[180px] -translate-x-1/2 rounded-[50%] blur-[18px]"
            style={{ background: "rgba(43,57,144,0.13)" }}
          />

          {/* VIDEO — background matches the section exactly */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="relative h-full w-full object-contain"
            style={{
              maskImage:
                "linear-gradient(to bottom, #000 0%, #000 82%, rgba(0,0,0,0.45) 90%, rgba(0,0,0,0) 97%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 0%, #000 82%, rgba(0,0,0,0.45) 90%, rgba(0,0,0,0) 97%)",
            }}
          >
            <source src={service.video} type="video/webm" />
            <source src={service.video} type="video/mp4" />
          </video>
        </div>
      </motion.div>
    </div>
  );
}
