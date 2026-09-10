"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Clapperboard,
  Smartphone,
  Megaphone,
} from "lucide-react";

const SLIDES = [
  {
    eyebrow: "AI-ENABLED DIGITAL MARKETING",
    mini: "INTELLIGENCE × PERFORMANCE",
    line1: "Marketing That",
    line2: "Thinks Ahead.",
    sub: "Predictive targeting, automated creatives and campaigns that learn what works and double down on it — while your competitors are still reading last month's report.",
    Icon: Sparkles,
  },
  {
    eyebrow: "SEO • AEO • GEO",
    mini: "SEARCH × VISIBILITY",
    line1: "Be the Answer,",
    line2: "Not an Option.",
    sub: "Rank on Google today and get quoted by AI assistants tomorrow. Built for how people actually search now — not how they searched in 2018.",
    Icon: Globe,
  },
  {
    eyebrow: "FILM PRODUCTION & AD FILMS",
    mini: "STORY × CINEMA",
    line1: "Every Brand",
    line2: "Has a Story.",
    sub: "TV commercials, corporate films, web series and AI videos — produced in-house with cinematic precision and sound that sells.",
    Icon: Clapperboard,
  },
  {
    eyebrow: "WEB & APP DEVELOPMENT",
    mini: "DESIGN × TECHNOLOGY",
    line1: "Designed to Impress.",
    line2: "Built to Convert.",
    sub: "Lightning-fast websites and apps that load in under two seconds and turn visitors into enquiries — built by developers who understand marketing.",
    Icon: Smartphone,
  },
  {
    eyebrow: "BRAND MANAGEMENT & INFLUENCE",
    mini: "IDENTITY × INFLUENCE",
    line1: "Get Your Brand",
    line2: "Talked About.",
    sub: "Positioning, identity, celebrity endorsements and influencer campaigns that make people recognise your name before they ever see your ad.",
    Icon: Megaphone,
  },
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);

  const slide = SLIDES[index];
  const Icon = slide.Icon;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6500);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <>
      {/* =====================================================
          DESKTOP
          ONLY VIDEO
      ===================================================== */}

      <section className="relative hidden h-[700px] w-full overflow-hidden bg-transparent lg:block mt-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          className="h-full w-full object-contain"
        >
          <source src="/hero-banners.mp4" type="video/mp4" />
        </video>
      </section>

      {/* =====================================================
          MOBILE / TABLET
          VIDEO HIDDEN — SLIDES + BACKGROUND
      ===================================================== */}

      <section className="relative min-h-[700px] w-full overflow-hidden bg-[#f7f8fc] lg:hidden mt-20">
        {/* =================================================
            PREMIUM BACKGROUND
        ================================================= */}

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Main subtle gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(
                  ellipse 75% 60% at 85% 20%,
                  rgba(43,57,144,0.09),
                  transparent 68%
                ),
                radial-gradient(
                  ellipse 70% 55% at 0% 90%,
                  rgba(111,207,231,0.10),
                  transparent 70%
                ),
                radial-gradient(
                  ellipse 65% 55% at 70% 100%,
                  rgba(224,69,154,0.055),
                  transparent 72%
                ),
                linear-gradient(
                  145deg,
                  #fbfcff 0%,
                  #f7f8fc 52%,
                  #f5f4fa 100%
                )
              `,
            }}
          />

          {/* =================================================
              TOP LEFT HALF CIRCLE
          ================================================= */}

          <motion.div
            animate={{
              rotate: [0, 2, 0],
              y: [0, -5, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-[190px] -top-[185px] size-[370px] rounded-full border-[3px] border-brand-600/[0.09]"
          />

          <div className="absolute -left-[155px] -top-[150px] size-[300px] rounded-full border-[7px] border-transparent bg-gradient-to-br from-aqua-400/20 via-brand-600/15 to-accent-500/20 [mask:linear-gradient(#fff_0_0)_border-box,linear-gradient(#fff_0_0)_padding-box] [mask-composite:xor] [-webkit-mask:linear-gradient(#fff_0_0)_border-box,linear-gradient(#fff_0_0)_padding-box] [-webkit-mask-composite:xor]" />

          {/* =================================================
              BOTTOM LEFT HALF CIRCLE
          ================================================= */}

          <motion.div
            animate={{
              rotate: [0, -2, 0],
              y: [0, 7, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-[230px] -left-[175px] size-[410px] rounded-full border-[3px] border-aqua-400/[0.09]"
          />

          <div className="absolute -bottom-[195px] -left-[140px] size-[340px] rounded-full border-[7px] border-transparent bg-gradient-to-tr from-aqua-400/20 via-brand-600/15 to-plum-500/15 [mask:linear-gradient(#fff_0_0)_border-box,linear-gradient(#fff_0_0)_padding-box] [mask-composite:xor] [-webkit-mask:linear-gradient(#fff_0_0)_border-box,linear-gradient(#fff_0_0)_padding-box] [-webkit-mask-composite:xor]" />

          {/* =================================================
              RIGHT LARGE CIRCLES
          ================================================= */}

          <div className="absolute -right-[270px] top-[20px] size-[500px] rounded-full border border-brand-600/[0.055]" />

          <div className="absolute -right-[205px] top-[85px] size-[370px] rounded-full border border-plum-500/[0.055]" />

          {/* =================================================
              SOFT GLOWS
          ================================================= */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.3, 0.55, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[0%] top-[25%] size-[280px] rounded-full bg-brand-600/[0.07] blur-[80px]"
          />

          <div className="absolute -bottom-[120px] right-[20%] size-[280px] rounded-full bg-aqua-400/[0.07] blur-[80px]" />

          {/* =================================================
              MOVING BALLS
          ================================================= */}

          <motion.span
            animate={{
              x: [0, 18, -8, 0],
              y: [0, -20, 10, 0],
              opacity: [0.25, 0.7, 0.3, 0.25],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[12%] top-[22%] size-2 rounded-full bg-brand-600/35"
          />

          <motion.span
            animate={{
              x: [0, -15, 10, 0],
              y: [0, 18, -8, 0],
              opacity: [0.2, 0.65, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[17%] top-[28%] size-1.5 rounded-full bg-accent-500/40"
          />

          <motion.span
            animate={{
              x: [0, 16, -10, 0],
              y: [0, 12, -15, 0],
              opacity: [0.2, 0.7, 0.3, 0.2],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[78%] bottom-[25%] size-2 rounded-full bg-aqua-500/40"
          />

          <motion.span
            animate={{
              x: [0, -12, 8, 0],
              y: [0, -14, 10, 0],
              opacity: [0.2, 0.6, 0.25, 0.2],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[20%] bottom-[20%] size-1.5 rounded-full bg-plum-500/35"
          />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(43,57,144,0.05) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  90deg,
                  rgba(43,57,144,0.05) 1px,
                  transparent 1px
                )
              `,
              backgroundSize: "42px 42px",
              maskImage:
                "radial-gradient(ellipse 80% 70% at 50% 45%, black, transparent 78%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 70% at 50% 45%, black, transparent 78%)",
            }}
          />
        </div>

        {/* =================================================
            MOBILE CONTENT
        ================================================= */}

        <div className="relative z-20 flex min-h-[700px] items-center px-5 pb-16 pt-20 sm:px-8">
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: 45,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mx-auto max-w-[620px]"
              >
                {/* Top label */}
                <div className="flex items-center gap-2.5">
                  <span className="h-px w-8 bg-gradient-to-r from-brand-600 to-accent-500" />

                  <span className="text-[8.5px] font-bold uppercase tracking-[0.17em] text-brand-600">
                    India's 360° Media & Advertising Powerhouse
                  </span>
                </div>

                {/* Eyebrow */}
                <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-brand-200/70 bg-white/65 px-3.5 py-2.5 shadow-[0_10px_30px_-22px_rgba(43,57,144,0.5)] backdrop-blur-xl">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-50" />

                    <span className="relative size-2 rounded-full bg-accent-500" />
                  </span>

                  <span className="text-[9.5px] font-bold uppercase tracking-[0.12em] text-brand-600">
                    {slide.eyebrow}
                  </span>
                </div>

                {/* Heading */}
                <h1 className="mt-6 text-[42px] font-extrabold leading-[1.1] tracking-[-0.045em] text-ink sm:text-[55px]">
                  {slide.line1}
                  <br />

                  <span className="grad-text-anim">
                    {slide.line2}
                  </span>
                </h1>

                {/* Accent */}
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  animate={{
                    width: 65,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                  className="mt-5 h-[3px] rounded-full bg-gradient-to-r from-brand-600 via-plum-500 to-accent-500"
                />

                {/* Description */}
                <p className="mt-5 max-w-[570px] text-[14.5px] leading-[1.7] text-ink-soft sm:text-[16px]">
                  {slide.sub}
                </p>

                {/* Feature pills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    slide.eyebrow.includes("AI")
                      ? "Predictive Growth"
                      : slide.eyebrow.includes("SEO")
                      ? "Search Visibility"
                      : slide.eyebrow.includes("FILM")
                      ? "Cinematic Production"
                      : slide.eyebrow.includes("WEB")
                      ? "Conversion Ready"
                      : "Brand Influence",

                    slide.eyebrow.includes("AI")
                      ? "Smarter Campaigns"
                      : slide.eyebrow.includes("SEO")
                      ? "AI Search Ready"
                      : slide.eyebrow.includes("FILM")
                      ? "Stories That Sell"
                      : slide.eyebrow.includes("WEB")
                      ? "Built for Speed"
                      : "Make Noise",
                  ].map((text, i) => (
                    <motion.span
                      key={text}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.25 + i * 0.08,
                      }}
                      className="inline-flex items-center gap-2 rounded-xl border border-brand-100 bg-white/60 px-3 py-2.5 text-[10.5px] font-semibold text-ink-soft shadow-[0_10px_30px_-25px_rgba(43,57,144,0.45)] backdrop-blur-md"
                    >
                      <span className="grid size-5 place-items-center rounded-md bg-brand-600/[0.07] text-brand-600">
                        <Icon className="size-3" />
                      </span>

                      {text}
                    </motion.span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-brand-600 via-plum-500 to-accent-500 px-5 py-3.5 text-[12px] font-bold text-white shadow-[0_16px_35px_-20px_rgba(43,57,144,0.65)]"
                  >
                    Start a Conversation

                    <span className="grid size-6 place-items-center rounded-full bg-white/15">
                      <ArrowRight className="size-3" />
                    </span>
                  </a>

                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/60 px-5 py-3.5 text-[12px] font-bold text-brand-600 backdrop-blur-md"
                  >
                    Explore Services

                    <ArrowRight className="size-3" />
                  </a>
                </div>

                {/* Stats */}
                <div className="mt-8 flex items-center gap-6">
                  <div>
                    <p className="text-[19px] font-extrabold text-ink">
                      500+
                    </p>

                    <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-ink-mute">
                      Brands
                    </p>
                  </div>

                  <div className="h-7 w-px bg-line" />

                  <div>
                    <p className="text-[19px] font-extrabold text-ink">
                      360°
                    </p>

                    <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-ink-mute">
                      Solutions
                    </p>
                  </div>

                  <div className="h-7 w-px bg-line" />

                  <div>
                    <p className="text-[19px] font-extrabold text-ink">
                      ROI
                    </p>

                    <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-ink-mute">
                      Focused
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* =================================================
            MOBILE SLIDE DOTS
        ================================================= */}

        <div className="absolute bottom-6 left-0 right-0 z-30 px-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === i
                      ? "w-10 bg-gradient-to-r from-brand-600 via-plum-500 to-accent-500"
                      : "w-1.5 bg-ink-mute/25"
                  }`}
                />
              ))}
            </div>

            <span className="text-[9px] font-bold tracking-[0.16em] text-ink-mute">
              0{index + 1} / 05
            </span>
          </div>
        </div>

        {/* Bottom line */}
        <div className="absolute inset-x-0 bottom-0 z-40 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
      </section>
    </>
  );
}