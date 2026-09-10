"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  Check,
  Sparkles,
  Megaphone,
  Clapperboard,
  Handshake,
  Target,
  Code2,
} from "lucide-react";

/* Must exactly match the video files' background colour */
const BG = "#F9FAFF";

const SERVICES = [
  {
    id: "01",
    tag: "AI Enabled Marketing",
    title: "Marketing That Thinks Ahead",
    desc: "AI-powered targeting, predictive creatives and automated campaign optimisation that learns what works and doubles down on it.",
    points: [
      "AI Campaign Optimisation",
      "Predictive Audience Targeting",
      "Automated Content & Creatives",
    ],
    href: "/ai-services",
    video: "/home/ai-enabled.mp4",
    Icon: Sparkles,
    gradient: "from-aqua-500 to-plum-600",
  },
  {
    id: "02",
    tag: "Digital Marketing",
    title: "Rankings, Reach and Revenue",
    desc: "SEO, AEO, GEO, paid ads and social media — engineered by data and measured in real business growth, not vanity metrics.",
    points: ["SEO, AEO & GEO", "Google & Meta Ads", "Social Media Management"],
    href: "/digital-marketing",
    video: "/home/digital.mp4",
    Icon: Megaphone,
    gradient: "from-brand-600 to-plum-600",
  },
  {
    id: "03",
    tag: "Film Production",
    title: "Every Brand Has a Story",
    desc: "TV commercials, corporate films, web series and AI-powered videos — produced with cinematic precision and sound that sells.",
    points: [
      "TV & OTT Ad Films",
      "Corporate & Brand Films",
      "AI Video Production",
    ],
    href: "/film-production",
    video: "/home/Filming.mp4",
    Icon: Clapperboard,
    gradient: "from-plum-600 to-accent-500",
  },
  {
    id: "04",
    tag: "Affiliate Marketing",
    title: "Pay Only for Real Results",
    desc: "Performance-driven partner networks where every rupee is tied to an actual sale, signup or lead. No spend without return.",
    points: [
      "Partner Network Building",
      "Commission-Based Campaigns",
      "Real-Time Tracking & Payouts",
    ],
    href: "/affiliate-marketing",
    video: "/home/Affiliates.mp4",
    Icon: Handshake,
    gradient: "from-accent-500 to-plum-600",
  },
  {
    id: "05",
    tag: "Business Leads",
    title: "Fill Your Pipeline, Not Your Inbox",
    desc: "Verified, intent-driven leads matched to your industry and budget — so your sales team talks to buyers, not browsers.",
    points: [
      "Verified B2B & B2C Leads",
      "Industry-Specific Targeting",
      "CRM Integration & Nurturing",
    ],
    href: "/solutions",
    video: "/home/Leads.mp4",
    Icon: Target,
    gradient: "from-brand-600 to-aqua-500",
  },
  {
    id: "06",
    tag: "Web & App Development",
    title: "Designed to Impress, Built to Convert",
    desc: "Lightning-fast websites, scroll-stopping video edits and graphics that make your brand impossible to scroll past.",
    points: [
      "Web & App Development",
      "UI/UX & Graphic Design",
      "CRM Software",
    ],
    href: "/web-development",
    video: "/home/website.mp4",
    Icon: Code2,
    gradient: "from-aqua-500 to-brand-600",
  },
];

export default function ServicesSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-100px" });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <section
      className="relative overflow-hidden py-16"
      style={{ backgroundColor: BG }}
    >
      {/*
        Decoration is confined to the TOP of the section only.
        Anything sitting behind the videos would show as a
        rectangle, because the videos have a solid background.
      */}
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
        {/* ================= HEADING ================= */}
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
            className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[46px]"
          >
            One Team. <span className="grad-text-anim">Every Channel.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-5 text-[16px] leading-relaxed text-ink-soft"
          >
            From the first idea to the final campaign, everything your brand
            needs lives under one roof.
          </motion.p>
        </div>

        {/* ================= SERVICE ROWS ================= */}
        <div className="mt-20 space-y-16 lg:space-y-20">
          {SERVICES.map((s, i) => (
            <ServiceRow key={s.id} service={s} reverse={i % 2 === 1} />
          ))}
        </div>

        {/* ================= VIEW ALL BUTTON ================= */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 24 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <Link href="/services" className="btn-shine">
            <span className="btn-shine-text">
              View All Services
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
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

        <ul className="mt-7 space-y-3">
          {service.points.map((p, idx) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + idx * 0.1 }}
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
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-9"
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
        </motion.div>
      </motion.div>

      {/* ---------- VIDEO ---------- */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1,
        }}
        className={`flex items-center justify-center ${
          reverse ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="relative flex h-[550px] w-full max-w-[520px] items-center justify-center">
          {/* Very soft contact shadow — grounds the subject */}
          <div
            className="pointer-events-none absolute bottom-[92px] left-1/2 h-[14px] w-[180px] -translate-x-1/2 rounded-[50%] blur-[18px]"
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