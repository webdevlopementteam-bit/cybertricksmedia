"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  ChevronRight,
  Check,
  TrendingUp,
  Users,
  Award,
  ShoppingBag,
  Building2,
  Share2,
  Quote,
  Sparkles,
  Target,
  BarChart3,
  Factory,
  CalendarDays,
  Globe2,
} from "lucide-react";

/* ================= CLIENT STORIES ================= */

const CLIENTS = [
  {
    name: "Grahshanti Dhoop Agarbatti",
    eyebrow: "Client Since 2019",
    year: "2019",
    Icon: Sparkles,
    gradient: "from-brand-600 to-plum-600",
    category:
      "Brand Building • Film Production • Creative Campaigns",
    title: "From digital presence to global recognition.",
    desc:
      "Since 2019, Grahshanti Dhoop Agarbatti has trusted Cybertricks Media Pvt. Ltd. with its digital journey. From building a strong digital presence and brand identity to conceptualizing and executing film production and creative campaigns, we have worked closely with the brand to elevate its visibility and reach. Our integrated digital and creative efforts have contributed to Grahshanti Dhoop Agarbatti’s journey from a growing Indian brand to a global brand.",
    highlight:
      "Now proudly associated with renowned Bollywood actor Anupam Kher as its Brand Ambassador.",
    footer:
      "From digital presence to global recognition — a partnership built on trust since 2019.",
  },

  {
    name: "Jawla Advance Technology LLP",
    eyebrow: "Associated Since 2019",
    year: "2019",
    Icon: Factory,
    gradient: "from-aqua-500 to-brand-600",
    category:
      "Digital Marketing • Online Branding • B2B",
    title:
      "Turning industry leadership into digital leadership.",
    desc:
      "Since 2019, Jawla Advance Technology LLP, a recognized industry leader in packaging machinery and automation solutions, has partnered with Cybertricks Media | Bharat Bizmart to strengthen its digital presence and brand visibility. Through strategic digital marketing, online branding, and consistent digital communication.",
    highlight:
      "Showcasing industry expertise, innovative packaging solutions, and leadership in the packaging machinery sector to a wider global audience.",
    footer:
      "From industry leadership to digital leadership — building a stronger brand presence together since 2019.",
  },

  {
    name: "Sharma Billiards Accessories",
    eyebrow: "Associated Since 2021",
    year: "2021",
    Icon: Award,
    gradient: "from-plum-600 to-accent-500",
    category:
      "Digital Marketing • Online Branding • Manufacturing",
    title:
      "Championship-level craftsmanship, stronger digital presence.",
    desc:
      "Since 2021, Sharma Billiards Accessories, a trusted name in Pool & Billiards Table Manufacturing, has partnered with Cybertricks Media | Bharat Bizmart to strengthen its digital presence and brand visibility. Through strategic digital marketing, online branding, and consistent digital communication, we have helped bring this industry expertise to a wider audience and strengthen the brand’s presence in the digital space.",
    highlight:
      "Trusted by national and international players, the brand has built a strong reputation for quality, precision, and craftsmanship.",
    footer:
      "From championship-level craftsmanship to a powerful digital presence — growing together since 2021.",
  },

  {
    name: "Xtreme Machines",
    eyebrow: "Associated Since 2023",
    year: "2023",
    Icon: Factory,
    gradient: "from-accent-500 to-plum-600",
    category:
      "Digital Marketing • Online Branding • B2B",
    title:
      "From manufacturing excellence to global visibility.",
    desc:
      "Since 2023, Xtreme Machines, a renowned manufacturer of Filler Masterbatch Machines, has partnered with Cybertricks Media | Bharat Bizmart to strengthen its digital presence and brand visibility. Through strategic digital marketing, online branding, and consistent digital communication, we have helped showcase its expertise to a wider B2B audience and strengthen its presence in the global market.",
    highlight:
      "Trusted by national and international buyers, Xtreme Machines has established a strong reputation for quality, innovation, and reliable manufacturing solutions.",
    footer:
      "From manufacturing excellence to digital visibility — empowering Xtreme Machines to reach further since 2023.",
  },

  {
    name: "Medical And Surgical Solutions (MSS)",
    eyebrow: "Associated Since 2022",
    year: "2022",
    Icon: ShoppingBag,
    gradient: "from-brand-600 to-aqua-500",
    category:
      "E-Commerce • Platform Development • Digital Sales",
    title:
      "From medical supplies to digital commerce.",
    desc:
      "Since 2022, Medical And Surgical Solutions (MSS), a renowned seller of medical supplies, has partnered with Cybertricks Media | Bharat Bizmart for e-commerce platform development and digital sales growth.",
    highlight:
      "We developed and strengthened MSS’s online commerce presence, creating a more effective digital channel to showcase its medical products, connect with customers, and drive online sales.",
    footer:
      "From medical supplies to digital commerce — enabling MSS to grow its business online since 2022.",
  },
];

/* ================= HERO PARTICLES ================= */

const PARTICLES = [
  {
    top: "16%",
    left: "8%",
    color: "bg-aqua-400",
    dur: 18,
    dx: 40,
    dy: -30,
  },
  {
    top: "70%",
    left: "16%",
    color: "bg-accent-400",
    dur: 22,
    dx: -35,
    dy: 40,
  },
  {
    top: "26%",
    left: "88%",
    color: "bg-plum-400",
    dur: 20,
    dx: 45,
    dy: 35,
  },
  {
    top: "80%",
    left: "76%",
    color: "bg-aqua-300",
    dur: 24,
    dx: -40,
    dy: -35,
  },
  {
    top: "48%",
    left: "50%",
    color: "bg-accent-300",
    dur: 19,
    dx: 30,
    dy: 45,
  },
];

/* ================= SERVICES ================= */

const SERVICES = [
  "Digital Presence",
  "Brand Identity",
  "Creative Campaigns",
  "Digital Marketing",
  "E-Commerce",
  "B2B Branding",
];

/* ================= PAGE ================= */

export default function SuccessStoriesPage() {
  const headRef = useRef(null);

  const headInView = useInView(headRef, {
    once: true,
    margin: "-100px",
  });

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
        style={{
          top: p.top,
          left: p.left,
        }}
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

        {/* Breadcrumb */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="flex items-center gap-2 text-[13px] text-white/50"
        >
          <Link
            href="/"
            className="transition hover:text-aqua-300"
          >
            Home
          </Link>

          <ChevronRight className="size-3.5" />

          <span className="text-white/85">
            Success Stories
          </span>
        </motion.div>

        {/* Badge */}

        <motion.span
          initial={{
            opacity: 0,
            y: 22,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.12,
          }}
          className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm"
        >
          <TrendingUp className="size-3.5" />

          Real Results, Real Brands
        </motion.span>

        {/* Heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.22,
          }}
          className="mt-6 text-[38px] font-extrabold leading-[1.06] tracking-tight text-white sm:text-[52px] lg:text-[58px]"
        >
          Numbers That{" "}

          <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
            Speak for Themselves.
          </span>
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.34,
          }}
          className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/60"
        >
          From D2C brands to real estate launches — here&apos;s how we&apos;ve
          helped businesses turn marketing spend into measurable growth.
        </motion.p>

        {/* Tags */}

        <motion.div
          initial={{
            opacity: 0,
            y: 22,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.46,
          }}
          className="mt-9 flex flex-wrap items-center gap-2.5"
        >
          {[
            "Verified Results",
            "Long-Term Partnerships",
            "Cross-Industry Experience",
          ].map((c, i) => (
            <motion.span
              key={c}
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-[13px] font-semibold text-white backdrop-blur-sm"
            >
              <Check
                className="size-3.5 text-aqua-300"
                strokeWidth={3}
              />

              {c}
            </motion.span>
          ))}
        </motion.div>

      </div>

      {/* ============================================================
          RIGHT — ILLUSTRATION
      ============================================================ */}

      <motion.div
        initial={{
          opacity: 0,
          x: 50,
          scale: 0.92,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative hidden lg:block"
      >

        {/* Glow */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-aqua-500/25 via-plum-500/20 to-accent-500/25 blur-[90px]" />

        {/* Orbit 1 */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 42,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 size-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
        />

        {/* Orbit 2 */}

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 size-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.08]"
        />

        {/* Floating Chips */}

        {[
          {
            Icon: TrendingUp,
            label: "3.2x ROI",
            cls: "-left-4 top-4",
            d: 4.5,
            dir: -14,
            grad: "from-brand-600 to-plum-600",
          },
          {
            Icon: Users,
            label: "150+ Brands",
            cls: "-right-2 top-1/3",
            d: 5.5,
            dir: 16,
            grad: "from-accent-500 to-plum-600",
          },
          {
            Icon: Award,
            label: "94% Retention",
            cls: "bottom-6 left-2",
            d: 5.0,
            dir: -12,
            grad: "from-aqua-500 to-brand-600",
          },
        ].map((c, i) => (
          <motion.div
            key={c.label}
            animate={{
              y: [0, c.dir, 0],
            }}
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

            <p className="text-[13px] font-bold text-white">
              {c.label}
            </p>
          </motion.div>
        ))}

        {/* Banner Image */}

        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 mx-auto w-full max-w-[420px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}

          <img
            src="/success-banners.png"
            alt="Cybertricks Media success stories"
            className="h-auto w-full object-contain drop-shadow-[0_25px_50px_rgba(111,207,231,0.3)]"
          />
        </motion.div>

      </motion.div>
    </div>
  </div>

  {/* Bottom gradient */}

  <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
</section>

      {/* ============================================================
          INTRO
      ============================================================ */}

      <section className="relative overflow-hidden bg-canvas py-16">
        <div className="container-x">

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-brand-600">
                More Than A Client List
              </p>

              <h2 className="mt-3 text-[30px] font-extrabold leading-tight tracking-tight text-ink sm:text-[39px]">
                Partnerships that{" "}
                <span className="grad-text-anim">
                  grow with time.
                </span>
              </h2>
            </div>

            <div className="rounded-[28px] border border-line bg-white p-7 shadow-[0_20px_50px_-35px_rgba(43,57,144,0.35)] sm:p-8">

              <p className="text-[15.5px] leading-relaxed text-ink-soft">
                From brand identity and creative campaigns to digital
                marketing, B2B visibility and e-commerce development,
                every partnership is built around the business&apos;s
                real goals — not a one-size-fits-all playbook.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {SERVICES.map((service) => (
                  <span
                    key={service}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50/60 px-3.5 py-2 text-[12px] font-semibold text-brand-600"
                  >
                    <span className="size-1.5 rounded-full bg-accent-500" />
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CLIENT STORIES
      ============================================================ */}

      <section className="relative overflow-hidden bg-canvas pb-20 pt-6">

        {/* Dots */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.38]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(43,57,144,0.14) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "radial-gradient(ellipse 70% 65% at 50% 15%, #000 25%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 65% at 50% 15%, #000 25%, transparent 100%)",
          }}
        />

        {/* Background glow */}

        <div className="pointer-events-none absolute -left-48 top-1/3 size-[480px] rounded-full bg-aqua-400/10 blur-[150px]" />

        <div className="pointer-events-none absolute -right-48 bottom-1/4 size-[480px] rounded-full bg-accent-400/10 blur-[150px]" />

        <div className="container-x relative z-10">

          {/* Heading */}

          <div
            ref={headRef}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.span
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                headInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
              }}
              className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent-500" />
              </span>

              Our Client Stories
            </motion.span>

            <motion.h2
              initial={{
                opacity: 0,
                y: 26,
              }}
              animate={
                headInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.7,
                delay: 0.12,
              }}
              className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[45px]"
            >
              Real Brands.{" "}
              <span className="grad-text-anim">
                Real Partnerships.
              </span>
            </motion.h2>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                headInView
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.7,
                delay: 0.24,
              }}
              className="mt-5 text-[16px] leading-relaxed text-ink-soft"
            >
              A closer look at the brands we&apos;ve worked with
              and the digital journeys we&apos;ve helped shape.
            </motion.p>
          </div>

          {/* Client cards */}

          <div className="mt-14 space-y-7">
            {CLIENTS.map((client, i) => (
              <ClientCard
                key={client.name}
                client={client}
                index={i}
              />
            ))}
          </div>

          {/* ========================================================
              CTA
          ======================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative mt-10 overflow-hidden rounded-[30px] p-9 text-white sm:p-11"
            style={{
              background:
                "linear-gradient(120deg, #1e2762 0%, #2B3990 35%, #7B3FA0 70%, #E0459A 100%)",
            }}
          >

            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-white/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-aqua-400/20 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">

              <div className="flex items-start gap-5">

                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                  <Sparkles className="size-6" />
                </span>

                <div>

                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-aqua-200">
                    Your Brand Could Be Next
                  </p>

                  <h3 className="mt-2 text-[23px] font-extrabold leading-tight tracking-tight sm:text-[29px]">
                    Let&apos;s build a story worth sharing.
                  </h3>

                  <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-white/70">
                    Tell us where your brand is today and where you
                    want it to go. We&apos;ll help you build the digital
                    journey to get there.
                  </p>

                </div>
              </div>

              <Link
                href="/contact-us"
                className="btn-shine shrink-0"
              >
                <span className="btn-shine-text">
                  Start Your Story
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

/* ================================================================
   CLIENT CARD
================================================================ */

function ClientCard({ client, index }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const { Icon } = client;

  const reversed = index % 2 === 1;

  return (
    <motion.article
      ref={ref}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.65,
        delay: index * 0.06,
      }}
      className="group relative overflow-hidden rounded-[30px] border border-line bg-white shadow-[0_20px_55px_-35px_rgba(43,57,144,0.38)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_65px_-30px_rgba(43,57,144,0.42)]"
    >

      {/* Top gradient */}

      <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />

      <div
        className={`grid items-stretch lg:grid-cols-[0.38fr_1fr] ${
          reversed
            ? "lg:grid-cols-[1fr_0.38fr]"
            : ""
        }`}
      >

        {/* ==========================================================
            BRAND PANEL
        ========================================================== */}

        <div
          className={`relative overflow-hidden p-7 sm:p-9 ${
            reversed
              ? "lg:order-2"
              : ""
          }`}
          style={{
            background:
              "linear-gradient(145deg, #f5f7ff 0%, #ffffff 55%, #fdf5fc 100%)",
          }}
        >

          {/* Decorative circle */}

          <div
            className={`pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-gradient-to-br ${client.gradient} opacity-[0.08] blur-2xl transition-transform duration-700 group-hover:scale-125`}
          />

          <div className="relative flex h-full min-h-[230px] flex-col justify-between">

            <div>

              {/* Icon */}

              <div
                className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${client.gradient} text-white shadow-[0_16px_32px_-14px_rgba(43,57,144,0.55)] transition-transform duration-300 group-hover:scale-105`}
              >
                <Icon className="size-6" />
              </div>

              {/* Since */}

              <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-[11px] font-bold text-ink-soft">
                <CalendarDays className="size-3.5 text-brand-600" />

                {client.eyebrow}
              </span>

            </div>

            <div className="mt-8">

              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-500">
                Partnership
              </p>

              <p className="mt-1 text-[32px] font-extrabold tracking-tight text-ink">
                {client.year}
              </p>

              <div className="mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-aqua-400 to-accent-500" />

            </div>

          </div>
        </div>

        {/* ==========================================================
            CONTENT
        ========================================================== */}

        <div
          className={`p-7 sm:p-9 ${
            reversed
              ? "lg:order-1"
              : ""
          }`}
        >

          {/* Category */}

          <div className="flex flex-wrap items-center justify-between gap-3">

            <span className="inline-flex items-center gap-2 rounded-full bg-canvas px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-600">
              <span className="size-1.5 rounded-full bg-accent-500" />

              {client.category}
            </span>

            <span className="hidden items-center gap-1.5 text-[12px] font-semibold text-ink-mute sm:inline-flex">
              <Globe2 className="size-3.5" />

              Digital Growth
            </span>

          </div>

          {/* Client name */}

          <h3 className="mt-6 max-w-3xl text-[25px] font-extrabold leading-tight tracking-tight text-ink sm:text-[31px]">
            {client.name}
          </h3>

          {/* Title */}

          <p className="mt-2 max-w-2xl text-[18px] font-bold leading-snug text-brand-600">
            {client.title}
          </p>

          {/* Description */}

          <p className="mt-5 max-w-4xl text-[14.8px] leading-[1.8] text-ink-soft">
            {client.desc}
          </p>

          {/* Highlight */}

          <div className="mt-6 rounded-2xl border border-brand-100 bg-gradient-to-r from-brand-50/80 to-accent-50/70 p-5">

            <div className="flex items-start gap-3">

              <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-white text-brand-600 shadow-sm">
                <Check
                  className="size-4"
                  strokeWidth={3}
                />
              </span>

              <p className="text-[14px] font-semibold leading-relaxed text-ink">
                {client.highlight}
              </p>

            </div>
          </div>

          {/* Footer quote */}

          <div className="mt-6 flex items-start gap-3 border-t border-line pt-5">

            <Quote className="mt-0.5 size-5 shrink-0 text-accent-500" />

            <p className="text-[13.5px] font-semibold italic leading-relaxed text-ink-mute">
              {client.footer}
            </p>

          </div>

        </div>
      </div>
    </motion.article>
  );
}