"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "motion/react";
import {
  Gift,
  Sparkles,
  RotateCcw,
  Copy,
  Check,
  ArrowRight,
  Megaphone,
  Clapperboard,
  Code2,
  Share2,
  Search,
  Users,
} from "lucide-react";

/* ================================================
   WIN CHANCE — 0.5 = 50% win, 50% lose
   Isse hi badal ke ratio control karo.
   0.7 = zyada win  |  0.3 = zyada lose
================================================ */
const WIN_CHANCE = 0.5;

/* ================= SERVICES ================= */
const GAME_SERVICES = [
  {
    key: "SEO",
    label: "SEO & Search",
    Icon: Search,
    gradient: "from-brand-600 to-plum-600",
  },
  {
    key: "SMM",
    label: "Social Media",
    Icon: Share2,
    gradient: "from-plum-600 to-accent-500",
  },
  {
    key: "ADS",
    label: "Paid Ads",
    Icon: Megaphone,
    gradient: "from-accent-500 to-plum-600",
  },
  {
    key: "FILM",
    label: "Film Production",
    Icon: Clapperboard,
    gradient: "from-aqua-500 to-brand-600",
  },
  {
    key: "WEB",
    label: "Web & App",
    Icon: Code2,
    gradient: "from-brand-600 to-aqua-500",
  },
  {
    key: "BRAND",
    label: "Branding & PR",
    Icon: Users,
    gradient: "from-plum-600 to-brand-600",
  },
];

/* ================= WIN PRIZES ================= */
const WIN_PRIZES = [
  { value: "20% OFF", note: "on your first campaign" },
  { value: "15% OFF", note: "on any 3-month plan" },
  { value: "FREE AUDIT", note: "complete brand & website audit" },
  { value: "25% OFF", note: "on annual retainers" },
  { value: "FREE SESSION", note: "60-min strategy call with our team" },
];

/* ================= LOSE MESSAGES ================= */
const LOSE_LINES = [
  {
    title: "This box was empty.",
    note: "No discount this time — but our free strategy call is always on the house.",
  },
  {
    title: "So close!",
    note: "That box had nothing inside. Give it one more shot, luck loves a second try.",
  },
  {
    title: "Not this one.",
    note: "The offer was hiding in another box. Reset and pick again!",
  },
];

const CONFETTI = Array.from({ length: 26 }).map((_, i) => ({
  id: i,
  x: (Math.random() - 0.5) * 420,
  y: -(Math.random() * 260 + 120),
  rotate: Math.random() * 720 - 360,
  delay: Math.random() * 0.35,
  color: [
    "bg-accent-500",
    "bg-aqua-400",
    "bg-plum-500",
    "bg-brand-500",
    "bg-accent-300",
  ][i % 5],
  size: Math.random() > 0.5 ? "size-2" : "size-1.5",
}));

export default function OfferGameSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [step, setStep] = useState("select"); // select | play | result
  const [service, setService] = useState(null);
  const [picked, setPicked] = useState(null);
  const [opening, setOpening] = useState(false);
  const [result, setResult] = useState(null);
  const [copied, setCopied] = useState(false);

  // Streak guard — same result 2 baar se zyada lagataar nahi aayega
  const streak = useRef({ type: null, count: 0 });

  const winAudio = useRef(null);
  const loseAudio = useRef(null);
  const clickAudio = useRef(null);

  const playSound = (audioRef) => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = 0;
    a.play().catch(() => {});
  };

  /* ---------- PRIZE DRAW ---------- */
  const drawPrize = () => {
    const s = streak.current;
    let win = Math.random() < WIN_CHANCE;

    // Agar last 2 same the, to is baar ulta result force karo
    if (s.count >= 2) win = s.type === "lose";

    const type = win ? "win" : "lose";
    if (s.type === type) s.count += 1;
    else {
      s.type = type;
      s.count = 1;
    }

    return win
      ? {
          type: "win",
          ...WIN_PRIZES[Math.floor(Math.random() * WIN_PRIZES.length)],
        }
      : {
          type: "lose",
          ...LOSE_LINES[Math.floor(Math.random() * LOSE_LINES.length)],
        };
  };

  const chooseService = (s) => {
    playSound(clickAudio);
    setService(s);
    setStep("play");
  };

  const openBox = (idx) => {
    if (opening) return;
    playSound(clickAudio);
    setPicked(idx);
    setOpening(true);

    const prize = drawPrize();

    setTimeout(() => {
      setResult(prize);
      setStep("result");
      setOpening(false);
      playSound(prize.type === "win" ? winAudio : loseAudio);
    }, 1500);
  };

  // Sirf boxes pe wapas — service same rahegi
  const playAgain = () => {
    setPicked(null);
    setResult(null);
    setCopied(false);
    setStep("play");
  };

  // Poora reset
  const resetAll = () => {
    setStep("select");
    setService(null);
    setPicked(null);
    setResult(null);
    setCopied(false);
  };

  const couponCode =
    service && result?.type === "win"
      ? `CTM-${service.key}-${result.value.replace(/[^0-9A-Z]/g, "").slice(0, 4)}`
      : "";

  const copyCode = () => {
    navigator.clipboard?.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-canvas py-16 lg:py-20"
    >
      {/* ============ AUDIO ============ */}
      <audio ref={winAudio} preload="auto" src="/home/won.mpeg" />
      <audio ref={loseAudio} preload="auto" src="/home/oops.mpeg" />
      <audio ref={clickAudio} preload="auto" src="/sounds/click.mp3" />

      {/* ============ BACKGROUND ============ */}
      <div className="pointer-events-none absolute -left-40 top-10 size-[420px] rounded-full bg-aqua-400/16 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 size-[420px] rounded-full bg-accent-400/16 blur-[130px]" />

      <div className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-line bg-white p-8 shadow-[0_30px_80px_-40px_rgba(43,57,144,0.4)] sm:p-12"
        >
          <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
          <div className="pointer-events-none absolute -right-20 -top-20 size-52 rounded-full bg-accent-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 size-52 rounded-full bg-aqua-400/20 blur-3xl" />

          {/* ============ HEADING ============ */}
          <div className="relative text-center">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-accent-200 bg-accent-50 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-accent-600">
              <Sparkles className="size-3.5" />
              Limited Time
            </span>

            <h2 className="mt-5 text-[28px] font-extrabold leading-[1.15] tracking-tight text-ink sm:text-[38px]">
              Feeling Lucky?{" "}
              <motion.span
                className="grad-text-anim inline-block"
                animate={{
                  scale: [1, 1.04, 1],
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                Unlock Your Offer.
              </motion.span>
            </h2>

            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Pick the service you need, open a box, and see what we&apos;ve got
              waiting for you.
            </p>
          </div>

          {/* ============ STEPS ============ */}
          <div className="relative mt-10 min-h-[320px]">
            <AnimatePresence mode="wait">
              {/* ---------- STEP 1: SELECT SERVICE ---------- */}
              {/* ---------- STEP 1: SELECT SERVICE ---------- */}
              {step === "select" && (
                <motion.div
                  key="select"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.45 }}
                  className="relative"
                >
                  {/* Step Header */}
                  <div className="mb-7 flex items-center justify-center gap-3">
                    <span className="rounded-full bg-gradient-to-r from-plum-100 to-accent-100 px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-plum-600">
                      Step 1
                    </span>

                    <span className="h-px w-8 bg-line" />

                    <p className="text-[14px] font-bold text-ink">
                      What are you looking for?
                    </p>
                  </div>

                  {/* Services Panel */}
                  <div className="rounded-[28px] border border-line bg-white/80 p-4 shadow-[0_20px_50px_-30px_rgba(43,57,144,0.3)] sm:p-5">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
                      {GAME_SERVICES.map((s, i) => (
                        <motion.button
                          key={s.key}
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: i * 0.06,
                            duration: 0.4,
                          }}
                          onClick={() => chooseService(s)}
                          whileHover={{
                            y: -5,
                            scale: 1.02,
                          }}
                          whileTap={{ scale: 0.97 }}
                          className="group relative flex min-h-[138px] flex-col items-center justify-center overflow-hidden rounded-[22px] border border-line bg-gradient-to-b from-white to-canvas p-4 transition-all duration-300 hover:border-transparent hover:shadow-[0_18px_40px_-18px_rgba(43,57,144,0.45)]"
                        >
                          {/* Hover Glow */}
                          <span
                            className={`pointer-events-none absolute -right-8 -top-8 size-20 rounded-full bg-gradient-to-br ${s.gradient} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30`}
                          />

                          {/* Icon */}
                          <span
                            className={`relative grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${s.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2`}
                          >
                            <s.Icon className="size-6" />
                          </span>

                          {/* Label */}
                          <span className="relative mt-3 text-center text-[13px] font-bold leading-tight text-ink sm:text-[13.5px]">
                            {s.label}
                          </span>

                          {/* Arrow */}
                          <span className="absolute bottom-3 right-3 grid size-6 place-items-center rounded-full bg-white text-ink-mute opacity-0 shadow-sm transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                            <ArrowRight className="size-3.5" />
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Hint */}
                  <div className="mt-6 flex items-center justify-center gap-2 text-center text-[12px] text-ink-mute">
                    <Sparkles className="size-3.5 text-accent-500" />
                    Choose a service &amp; try your luck
                    <Sparkles className="size-3.5 text-plum-500" />
                  </div>
                </motion.div>
              )}

              {/* ---------- STEP 2: PICK A BOX ---------- */}
              {step === "play" && (
                <motion.div
                  key="play"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.45 }}
                  className="relative"
                >
                  {/* Step Header */}
                  <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
                    <span className="rounded-full bg-gradient-to-r from-plum-100 to-accent-100 px-5 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-plum-600">
                      Step 2
                    </span>

                    <span className="hidden h-px w-8 bg-white/30 sm:block" />

                    <p className="text-[14px] font-bold text-ink">
                      Pick a box and see what&apos;s inside!
                    </p>
                  </div>

                  {/* Selected Service */}
                  <div className="mb-6 text-center">
                    <span className="text-[12px] text-ink-mute">
                      Your selected service
                    </span>

                    <div className="mt-1 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5">
                      {service?.Icon && (
                        <service.Icon className="size-3.5 text-brand-600" />
                      )}

                      <span className="text-[12.5px] font-bold text-brand-600">
                        {service?.label}
                      </span>
                    </div>
                  </div>

                  {/* BOX GAME PANEL */}
                  <div className="relative overflow-hidden rounded-[30px] border border-white/10 px-4 py-10 sm:px-8 sm:py-12">
                    {/* Background Glow */}
                    <div className="pointer-events-none absolute -left-20 top-0 size-56 rounded-full bg-aqua-400/20 blur-[80px]" />
                    <div className="pointer-events-none absolute -right-20 bottom-0 size-64 rounded-full bg-accent-400/25 blur-[90px]" />

                    {/* Decorative Shapes */}
                    <div className="pointer-events-none absolute left-8 top-8 size-20 rounded-full border border-white/10" />
                    <div className="pointer-events-none absolute right-10 top-12 size-12 rounded-full bg-white/5" />
                    <div className="pointer-events-none absolute bottom-8 left-1/3 size-24 rounded-full bg-plum-400/10 blur-xl" />

                    {/* Boxes */}
                    <div className="relative z-10 flex flex-wrap items-end justify-center gap-8 sm:gap-12 lg:gap-16">
                      {[0, 1, 2].map((idx) => (
                        <motion.div
                          key={idx}
                          className="relative flex flex-col items-center"
                        >
                          {/* Box Glow / Platform */}
                          <motion.div
                            animate={
                              picked === idx && opening
                                ? {
                                    scale: [1, 1.12, 1],
                                    opacity: [0.5, 0.9, 0.5],
                                  }
                                : {
                                    scale: [1, 1.04, 1],
                                  }
                            }
                            transition={{
                              duration: opening && picked === idx ? 1.2 : 2.4,
                              repeat: opening && picked === idx ? 0 : Infinity,
                              ease: "easeInOut",
                              delay: idx * 0.2,
                            }}
                            className="absolute bottom-7 h-7 w-32 rounded-full bg-accent-400/40 blur-xl"
                          />

                          {/* Box Button */}
                          <motion.button
                            onClick={() => openBox(idx)}
                            disabled={opening}
                            animate={
                              picked === idx && opening
                                ? {
                                    rotate: [0, -7, 7, -7, 7, -3, 3, 0],
                                    scale: [1, 1.08, 1.08, 1.08, 1],
                                    y: [0, -8, 0],
                                  }
                                : {
                                    y: [0, -7, 0],
                                  }
                            }
                            transition={
                              picked === idx && opening
                                ? {
                                    duration: 1.3,
                                    ease: "easeInOut",
                                  }
                                : {
                                    duration: 2.6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: idx * 0.3,
                                  }
                            }
                            whileHover={
                              !opening
                                ? {
                                    scale: 1.08,
                                    y: -10,
                                  }
                                : {}
                            }
                            whileTap={
                              !opening
                                ? {
                                    scale: 0.96,
                                  }
                                : {}
                            }
                            className={`group relative z-10 h-[122px] w-[122px] sm:h-[145px] sm:w-[145px] ${
                              opening && picked !== idx
                                ? "opacity-25 grayscale"
                                : ""
                            } disabled:cursor-not-allowed`}
                            aria-label={`Open box ${idx + 1}`}
                          >
                            {/* Box Shadow */}
                            <span className="absolute bottom-1 left-1/2 h-4 w-[82%] -translate-x-1/2 rounded-full bg-black/30 blur-md" />

                            {/* Box Body */}
                            <span className="absolute bottom-2 left-1/2 h-[76px] w-[94px] -translate-x-1/2 rounded-b-[13px] rounded-t-[5px] border border-white/20 bg-gradient-to-br from-[#ff4b8b] via-[#e82d70] to-[#b81758] shadow-[0_16px_25px_-10px_rgba(0,0,0,0.55)] transition-transform duration-300 group-hover:scale-[1.04] sm:h-[91px] sm:w-[112px]">
                              {/* Vertical Ribbon */}
                              <span className="absolute left-1/2 top-0 h-full w-[18px] -translate-x-1/2 bg-gradient-to-r from-[#ffd66b] via-[#fff0a8] to-[#e9a72f] shadow-[0_0_8px_rgba(255,214,107,0.35)] sm:w-[21px]" />

                              {/* Horizontal Ribbon */}
                              <span className="absolute left-0 top-1/2 h-[18px] w-full -translate-y-1/2 bg-gradient-to-b from-[#ffd66b] via-[#fff0a8] to-[#e9a72f] shadow-[0_0_8px_rgba(255,214,107,0.35)] sm:h-[21px]" />

                              {/* Highlight */}
                              <span className="absolute left-2 top-2 h-5 w-10 rounded-full bg-white/20 blur-md" />
                            </span>

                            {/* Lid */}
                            <span className="absolute left-1/2 top-[27px] h-[25px] w-[105px] -translate-x-1/2 rounded-[6px] border border-white/20 bg-gradient-to-b from-[#ff70a6] to-[#e72d70] shadow-[0_8px_12px_-6px_rgba(0,0,0,0.5)] sm:top-[29px] sm:h-[29px] sm:w-[126px]">
                              <span className="absolute left-1/2 top-0 h-full w-[18px] -translate-x-1/2 bg-gradient-to-r from-[#ffd66b] via-[#fff0a8] to-[#e9a72f] sm:w-[21px]" />
                            </span>

                            {/* Bow */}
                            <span className="absolute left-1/2 top-[7px] -translate-x-1/2">
                              <span className="absolute -left-[23px] top-0 h-[22px] w-[29px] rotate-[25deg] rounded-[50%_45%_45%_50%] border border-[#e7a72f] bg-gradient-to-br from-[#fff0a8] to-[#e8a62c] sm:-left-[27px] sm:h-[26px] sm:w-[34px]" />
                              <span className="absolute -right-[23px] top-0 h-[22px] w-[29px] -rotate-[25deg] rounded-[45%_50%_50%_45%] border border-[#e7a72f] bg-gradient-to-br from-[#fff0a8] to-[#e8a62c] sm:-right-[27px] sm:h-[26px] sm:w-[34px]" />
                              <span className="absolute left-1/2 top-[7px] size-6 -translate-x-1/2 rounded-full border border-[#e7a72f] bg-gradient-to-br from-[#fff2ad] to-[#e8a62c] sm:size-7" />
                            </span>

                            {/* Sparkles */}
                            <Sparkles className="absolute -right-1 top-2 size-4 text-accent-200 opacity-0 transition-all duration-300 group-hover:rotate-12 group-hover:opacity-100" />
                          </motion.button>

                          {/* Box Number */}
                          <span className="relative z-20 mt-1 rounded-full bg-white px-6 py-2 text-[11px] font-extrabold tracking-[0.08em] text-brand-700 shadow-lg sm:px-7 sm:py-2.5 sm:text-[12px]">
                            BOX {idx + 1}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom Message */}
                    <div className="relative z-10 mt-9 flex items-center justify-center gap-2 text-[13px] font-medium text-white/70">
                      <Sparkles className="size-4 text-accent-300" />
                      Big offers are waiting — which one will you get?
                      <Sparkles className="size-4 text-aqua-300" />
                    </div>
                  </div>

                  {/* Bottom Benefits */}
                  {!opening && (
                    <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11.5px] font-semibold text-ink-mute">
                      <span className="inline-flex items-center gap-1.5">
                        <Gift className="size-3.5 text-accent-500" />
                        Exciting Discounts
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <Check className="size-3.5 text-aqua-500" />
                        Free Audits
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <Sparkles className="size-3.5 text-plum-500" />
                        Strategy Calls
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <Sparkles className="size-3.5 text-accent-500" />
                        And More!
                      </span>
                    </div>
                  )}

                  {/* Opening Message */}
                  {opening && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 text-center"
                    >
                      <p className="text-[14px] font-bold text-plum-600">
                        Opening your box...
                      </p>

                      <p className="mt-1 text-[12px] text-ink-mute">
                        Let&apos;s see what&apos;s waiting inside!
                      </p>
                    </motion.div>
                  )}

                  {/* Change Service */}
                  {!opening && (
                    <div className="mt-6 text-center">
                      <button
                        onClick={resetAll}
                        className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink-mute underline-offset-4 transition hover:text-accent-600 hover:underline"
                      >
                        ← Change service
                      </button>
                    </div>
                  )}
                </motion.div>
              )}

              {/* ---------- STEP 3: RESULT ---------- */}
              {step === "result" && result && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative text-center"
                >
                  {/* Confetti — only on win */}
                  {result.type === "win" && (
                    <div className="pointer-events-none absolute inset-x-0 top-24 z-20 flex justify-center">
                      {CONFETTI.map((c) => (
                        <motion.span
                          key={c.id}
                          initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                          animate={{
                            opacity: 0,
                            x: c.x,
                            y: c.y,
                            rotate: c.rotate,
                          }}
                          transition={{
                            duration: 1.9,
                            delay: c.delay,
                            ease: "easeOut",
                          }}
                          className={`absolute ${c.size} rounded-[2px] ${c.color}`}
                        />
                      ))}
                    </div>
                  )}

                  {/* ---------- IMAGE ---------- */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.15,
                      type: "spring",
                      stiffness: 200,
                      damping: 16,
                    }}
                    className="relative mx-auto w-[180px] sm:w-[220px]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        result.type === "win"
                          ? "/home/won.png"
                          : "/home/loose.png"
                      }
                      alt={
                        result.type === "win"
                          ? "You won a discount"
                          : "Better luck next time"
                      }
                      className="h-auto w-full object-contain"
                    />
                  </motion.div>

                  {/* ---------- WIN ---------- */}
                  {result.type === "win" ? (
                    <>
                      <motion.h3
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="mt-6 text-[26px] font-extrabold tracking-tight text-ink sm:text-[32px]"
                      >
                        Wow! You got{" "}
                        <span className="grad-text-anim">{result.value}</span>
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="mt-2.5 text-[15px] text-ink-soft"
                      >
                        {result.note} — on{" "}
                        <span className="font-semibold text-brand-600">
                          {service?.label}
                        </span>
                      </motion.p>

                      {/* Coupon */}
                      <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55 }}
                        className="mx-auto mt-7 flex w-fit items-center gap-3 rounded-2xl border-2 border-dashed border-accent-300 bg-accent-50 px-5 py-3.5"
                      >
                        <span className="font-mono text-[16px] font-bold tracking-wider text-accent-600">
                          {couponCode}
                        </span>
                        <button
                          onClick={copyCode}
                          aria-label="Copy coupon code"
                          className="grid size-8 place-items-center rounded-lg bg-white text-accent-600 transition hover:bg-accent-500 hover:text-white"
                        >
                          {copied ? (
                            <Check className="size-4" />
                          ) : (
                            <Copy className="size-3.5" />
                          )}
                        </button>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.65 }}
                        className="mt-8 flex flex-wrap items-center justify-center gap-3"
                      >
                        <Link href="/contact-us" className="btn-shine">
                          <span className="btn-shine-text">
                            Claim My Offer
                            <ArrowRight className="size-4" />
                          </span>
                        </Link>
                        <button
                          onClick={playAgain}
                          className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-line bg-white px-6 py-3.5 text-[14.5px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-300 hover:text-accent-600"
                        >
                          <RotateCcw className="size-4" />
                          Play Again
                        </button>
                      </motion.div>
                    </>
                  ) : (
                    /* ---------- LOSE ---------- */
                    <>
                      <motion.h3
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="mt-6 text-[26px] font-extrabold tracking-tight text-ink sm:text-[32px]"
                      >
                        Oops!{" "}
                        <span className="text-ink-mute">{result.title}</span>
                      </motion.h3>

                      <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="mx-auto mt-2.5 max-w-sm text-[15px] leading-relaxed text-ink-soft"
                      >
                        {result.note}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.58 }}
                        className="mt-8 flex flex-wrap items-center justify-center gap-3"
                      >
                        <button onClick={playAgain} className="btn-shine">
                          <span className="btn-shine-text">
                            <RotateCcw className="size-4" />
                            Try Again
                          </span>
                        </button>
                        <Link
                          href="/contact-us"
                          className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-line bg-white px-6 py-3.5 text-[14.5px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-300 hover:text-accent-600"
                        >
                          Book a Free Call
                        </Link>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ============ FOOTNOTE ============ */}
          <p className="relative mt-8 text-center text-[12px] text-ink-mute">
            *Offers valid for new clients only. One coupon per business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
