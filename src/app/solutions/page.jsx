"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Check,
  Layers,
  Sparkles,
  Megaphone,
  Radio,
  Clapperboard,
  Crown,
  CalendarDays,
  Smartphone,
  Code2,
  Trophy,
  Cpu,
  ShieldCheck,
  Gamepad2,
  Database,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaGoogle,
  FaMeta,
  FaClapperboard,
  FaBullhorn,
  FaCode,
  FaMobileScreen,
  FaUserTie,
  FaRobot,
  FaThreads,
  FaMagnifyingGlass,
} from "react-icons/fa6";

/* ================= SOLUTIONS ================= */
const SOLUTIONS = [
  {
    id: 1,
    name: "Digital Marketing",
    tagline: "Rank, reach and revenue",
    desc: "SEO, AEO, GEO, paid ads and social — engineered by data, measured in sales.",
    href: "/digital-marketing",
    Icon: Megaphone,
    gradient: "from-brand-600 to-plum-600",
    b1: "bg-brand-400",
    b2: "bg-plum-400",
    tags: ["SEO", "Paid Ads", "Social"],
  },
  {
    id: 2,
    name: "Advertising",
    tagline: "Own every screen and street",
    desc: "Hoardings, cinema, TV and radio — planned, negotiated and verified across India.",
    href: "/advertising",
    Icon: Radio,
    gradient: "from-plum-600 to-accent-500",
    b1: "bg-plum-400",
    b2: "bg-accent-400",
    tags: ["Outdoor", "Cinema", "TV & Radio"],
  },
  {
    id: 3,
    name: "Film Production",
    tagline: "Script to final cut, in-house",
    desc: "TV commercials, corporate films, web series and AI videos with a full crew.",
    href: "/film-production",
    Icon: Clapperboard,
    gradient: "from-accent-500 to-plum-600",
    b1: "bg-accent-400",
    b2: "bg-plum-400",
    tags: ["TVC", "Corporate", "Web Series"],
  },
  {
    id: 4,
    name: "Brand Management",
    tagline: "Names people remember",
    desc: "Positioning, identity and a twelve-month roadmap — then the team that runs it.",
    href: "/brand-management",
    Icon: Crown,
    gradient: "from-aqua-500 to-brand-600",
    b1: "bg-aqua-400",
    b2: "bg-brand-400",
    tags: ["Identity", "Strategy", "Guidelines"],
  },
  {
    id: 5,
    name: "Media & Event Management",
    tagline: "Moments that make headlines",
    desc: "Launches, dealer meets and conferences — venue to run-sheet, plus the PR around it.",
    href: "/media-and-event-management",
    Icon: CalendarDays,
    gradient: "from-brand-600 to-aqua-500",
    b1: "bg-brand-400",
    b2: "bg-aqua-400",
    tags: ["Events", "PR", "Launches"],
  },
  {
    id: 6,
    name: "Mobile App Development",
    tagline: "Apps people keep installed",
    desc: "Android and iOS builds with the backend, analytics and store launch handled.",
    href: "/mobile-app-development",
    Icon: Smartphone,
    gradient: "from-plum-600 to-brand-600",
    b1: "bg-plum-400",
    b2: "bg-brand-400",
    tags: ["Android", "iOS", "Cross-Platform"],
  },
  {
    id: 7,
    name: "Web Development",
    tagline: "Fast sites that convert",
    desc: "Responsive, SEO-ready websites with Core Web Vitals in the green from day one.",
    href: "/web-development",
    Icon: Code2,
    gradient: "from-aqua-500 to-plum-600",
    b1: "bg-aqua-400",
    b2: "bg-plum-400",
    tags: ["Responsive", "SEO Ready", "CMS"],
  },
  {
    id: 8,
    name: "Award Shows & Exhibitions",
    tagline: "Stages worth standing on",
    desc: "Full award nights and exhibition stalls — designed, built, branded and run.",
    href: "/award-shows-exhibitions",
    Icon: Trophy,
    gradient: "from-accent-500 to-brand-600",
    b1: "bg-accent-400",
    b2: "bg-brand-400",
    tags: ["Award Nights", "Stalls", "Production"],
  },
  {
    id: 9,
    name: "AI Services",
    tagline: "Automation that earns its keep",
    desc: "Predictive targeting, automated creatives and chatbots that actually answer.",
    href: "/ai-services",
    Icon: Cpu,
    gradient: "from-brand-600 to-accent-500",
    b1: "bg-brand-400",
    b2: "bg-accent-400",
    tags: ["Automation", "Predictive", "Chatbots"],
  },
  {
    id: 10,
    name: "Cyber Security",
    tagline: "Never be the headline",
    desc: "Audits, hardening, SSL, backups and monitoring for your site and infrastructure.",
    href: "/cyber-security",
    Icon: ShieldCheck,
    gradient: "from-plum-600 to-aqua-500",
    b1: "bg-plum-400",
    b2: "bg-aqua-400",
    tags: ["Audits", "Hardening", "Monitoring"],
  },
  {
    id: 11,
    name: "Gaming App Development",
    tagline: "Built to be played twice",
    desc: "2D and 3D game builds with monetisation, leaderboards and live-ops baked in.",
    href: "/gaming-app-development",
    Icon: Gamepad2,
    gradient: "from-accent-500 to-plum-600",
    b1: "bg-accent-400",
    b2: "bg-plum-400",
    tags: ["2D & 3D", "Monetisation", "Live Ops"],
  },
  {
    id: 12,
    name: "CRM Software",
    tagline: "Built around your sales team",
    desc: "Custom CRM with your pipeline, your fields and automations that save real hours.",
    href: "/crm-software",
    Icon: Database,
    gradient: "from-aqua-500 to-accent-500",
    b1: "bg-aqua-400",
    b2: "bg-accent-400",
    tags: ["Custom Build", "Pipeline", "Automation"],
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
export default function SolutionsPage() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(null);

  return (
    <>
      {/* ============================================================
          BANNER — DARK
      ============================================================ */}
      <section
        className="relative flex min-h-[500px] items-center overflow-hidden pb-20 pt-[160px] lg:min-h-[600px]"
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
            {/* ---------- LEFT ---------- */}
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
                <span className="text-white/85">Solutions</span>
              </motion.div>

              <motion.span
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm"
              >
                <Layers className="size-3.5" />
                {SOLUTIONS.length} Complete Solutions
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22 }}
                className="mt-6 text-[38px] font-extrabold leading-[1.06] tracking-tight text-white sm:text-[50px] lg:text-[56px]"
              >
                Whatever the Problem,{" "}
                <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
                  There&apos;s a Team for It.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.34 }}
                className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/60"
              >
                Twelve complete solutions, one accountable partner. Pick the one
                that solves today&apos;s problem — we&apos;ll be here when the
                next one shows up.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.46 }}
                className="mt-9 flex flex-wrap items-center gap-2.5"
              >
                {[
                  "Single point of contact",
                  "One invoice",
                  "No vendor juggling",
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

            {/* ---------- RIGHT: FLOATING ICON CLUSTER ---------- */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden h-[400px] lg:block"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 size-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-aqua-500/25 via-plum-500/20 to-accent-500/25 blur-[90px]" />

              {/* Rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute left-1/2 top-1/2 size-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/12"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute left-1/2 top-1/2 size-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
              />

              {/* Orbiting icons — outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 size-[380px] -translate-x-1/2 -translate-y-1/2"
              >
                {[
                  { Icon: FaFacebookF, gradient: "from-blue-600 to-blue-500" },
                  {
                    Icon: FaInstagram,
                    gradient: "from-pink-600 to-purple-500",
                  },
                  { Icon: FaLinkedinIn, gradient: "from-sky-700 to-sky-500" },
                  { Icon: FaYoutube, gradient: "from-red-600 to-red-500" },
                  { Icon: FaThreads, gradient: "from-slate-800 to-slate-600" },
                  {
                    Icon: FaMagnifyingGlass,
                    gradient: "from-brand-600 to-accent-500",
                  },
                ].map(({ Icon, gradient }, i) => {
                  const a = (360 / 6) * i;
                  const r = 190;
                  const x = r * Math.cos((a * Math.PI) / 180);
                  const y = r * Math.sin((a * Math.PI) / 180);

                  return (
                    <div
                      key={i}
                      className="absolute left-1/2 top-1/2"
                      style={{ transform: `translate(${x}px, ${y}px)` }}
                    >
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 45,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="-ml-7 -mt-7"
                      >
                        <div
                          className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-[0_12px_30px_-8px_rgba(0,0,0,0.6)]`}
                        >
                          <Icon className="size-5" />
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Orbiting icons — inner ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 size-[260px] -translate-x-1/2 -translate-y-1/2"
              >
                {[
                  { Icon: FaCode, gradient: "from-indigo-600 to-blue-500" },
                  {
                    Icon: FaMobileScreen,
                    gradient: "from-cyan-600 to-blue-500",
                  },
                  {
                    Icon: FaUserTie,
                    gradient: "from-violet-600 to-purple-500",
                  },
                  { Icon: FaRobot, gradient: "from-purple-600 to-cyan-500" },
                ].map(({ Icon, gradient }, i) => {
                  const a = (360 / 4) * i + 45;
                  const r = 130;
                  const x = r * Math.cos((a * Math.PI) / 180);
                  const y = r * Math.sin((a * Math.PI) / 180);

                  return (
                    <div
                      key={i}
                      className="absolute left-1/2 top-1/2"
                      style={{ transform: `translate(${x}px, ${y}px)` }}
                    >
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 32,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="-ml-6 -mt-6"
                      >
                        <div
                          className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-[0_10px_26px_-8px_rgba(0,0,0,0.6)]`}
                        >
                          <Icon className="size-4" />
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Centre badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 grid size-[130px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-aqua-400 via-plum-600 to-accent-500 shadow-[0_0_60px_-10px_rgba(224,69,154,0.8)]"
              >
                <div className="text-center">
                  <p className="text-[34px] font-extrabold leading-none text-white">
                    12
                  </p>
                  <p className="mt-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-white/85">
                    Solutions
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
      </section>

      {/* ============================================================
          SOLUTION CARDS — LIGHT
      ============================================================ */}
      <section
        ref={gridRef}
        className="relative overflow-hidden bg-canvas py-20"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(43,57,144,0.16) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "radial-gradient(ellipse 75% 50% at 50% 12%, #000 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 50% at 50% 12%, #000 30%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute -left-40 top-1/3 size-[440px] rounded-full bg-aqua-400/14 blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[440px] rounded-full bg-accent-400/14 blur-[140px]" />

        <div className="container-x relative z-10">
          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent-500" />
              </span>
              Our Solutions
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[44px]"
            >
              Built for Brands That{" "}
              <span className="grad-text-anim">Refuse to Stall.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-5 text-[16px] leading-relaxed text-ink-soft"
            >
              Pick the one that solves today&apos;s problem. Most clients start
              with one and end up with three.
            </motion.p>
          </div>

          {/* ---------- CARDS ---------- */}
          <div
            onMouseLeave={() => setHovered(null)}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {SOLUTIONS.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 34 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.06 }}
                onMouseEnter={() => setHovered(i)}
                className={`transition-all duration-500 ${
                  hovered !== null && hovered !== i
                    ? "opacity-60 lg:scale-[0.98]"
                    : "opacity-100"
                }`}
              >
                <Link
                  href={s.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-line bg-white p-7 shadow-[0_8px_28px_-16px_rgba(43,57,144,0.25)] transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_34px_70px_-28px_rgba(43,57,144,0.5)]"
                >
                  {/* ===== HALF BUBBLES — alternate corners ===== */}
                  {/* Top-right */}
                  <span
                    className={`pointer-events-none absolute -right-14 -top-14 size-32 rounded-full ${s.b1} opacity-[0.18] transition-all duration-700 group-hover:scale-[1.7] group-hover:opacity-25`}
                  />
                  <span
                    className={`pointer-events-none absolute -right-8 -top-8 size-20 rounded-full ${s.b1} opacity-[0.14] transition-all duration-700 group-hover:scale-[1.5]`}
                  />

                  {/* Bottom-left */}
                  <span
                    className={`pointer-events-none absolute -bottom-14 -left-14 size-32 rounded-full ${s.b2} opacity-[0.18] transition-all duration-700 group-hover:scale-[1.7] group-hover:opacity-25`}
                  />
                  <span
                    className={`pointer-events-none absolute -bottom-8 -left-8 size-20 rounded-full ${s.b2} opacity-[0.14] transition-all duration-700 group-hover:scale-[1.5]`}
                  />

                  {/* ===== HEADER ROW ===== */}
                  <div className="relative flex items-start justify-between">
                    <span
                      className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${s.gradient} text-white shadow-[0_14px_32px_-12px_rgba(43,57,144,0.6)] transition-all duration-400 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <s.Icon className="size-6" />
                    </span>

                    <span className="text-[26px] font-extrabold leading-none tabular-nums text-line transition-colors duration-400 group-hover:text-brand-200">
                      {String(s.id).padStart(2, "0")}
                    </span>
                  </div>

                  {/* ===== BODY ===== */}
                  <h3 className="relative mt-6 text-[19px] font-extrabold leading-snug tracking-tight text-ink transition-colors duration-300 group-hover:text-brand-600 sm:text-[21px]">
                    {s.name}
                  </h3>

                  <p
                    className={`relative mt-1.5 bg-gradient-to-r ${s.gradient} bg-clip-text text-[13px] font-bold text-transparent`}
                  >
                    {s.tagline}
                  </p>

                  <p className="relative mt-3.5 flex-1 text-[14px] leading-relaxed text-ink-soft">
                    {s.desc}
                  </p>

                  {/* ===== TAGS ===== */}
                  <div className="relative mt-5 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line bg-canvas px-2.5 py-1 text-[11.5px] font-semibold text-ink-soft transition-colors duration-300 group-hover:border-brand-200 group-hover:bg-brand-50 group-hover:text-brand-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* ===== FOOTER ===== */}
                  <div className="relative mt-6 flex items-center justify-between border-t border-line pt-5">
                    <span className="text-[13.5px] font-bold text-ink transition-colors duration-300 group-hover:text-brand-600">
                      Explore Solution
                    </span>

                    <span
                      className={`grid size-9 place-items-center rounded-full bg-canvas text-ink-mute transition-all duration-400 group-hover:bg-gradient-to-br ${s.gradient} group-hover:text-white`}
                    >
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>

                  {/* ===== BOTTOM SWEEP LINE ===== */}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r ${s.gradient} transition-transform duration-500 group-hover:scale-x-100`}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* ---------- CTA ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="relative mt-16 overflow-hidden rounded-[28px] p-9 text-white sm:p-11"
            style={{
              background:
                "linear-gradient(120deg, #1e2762 0%, #2B3990 35%, #7B3FA0 70%, #E0459A 100%)",
            }}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-white/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-aqua-400/25 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div className="flex items-start gap-5">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/20 text-white backdrop-blur-sm">
                  <Sparkles className="size-6" />
                </span>
                <div>
                  <h3 className="max-w-lg text-[24px] font-extrabold leading-tight tracking-tight sm:text-[30px]">
                    Need two or three of these together?
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] text-white/70">
                    That&apos;s where the real advantage kicks in — one team,
                    one strategy, one invoice.
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-brand-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-accent-600"
                >
                  Build My Plan
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/35 px-7 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/12"
                >
                  All Services
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
