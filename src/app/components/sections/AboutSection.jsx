"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  ArrowRight,
  Check,
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

/* ================= ORBIT CIRCLES ================= */

const ORBITS = [
  {
    size: 460,
    duration: 34,
    reverse: false,
    ring: "border-brand-200",
    icons: [
      // Social Media
      { Icon: FaFacebookF, color: "from-blue-600 to-blue-500" },
      { Icon: FaInstagram, color: "from-pink-600 to-purple-500" },
      { Icon: FaLinkedinIn, color: "from-sky-700 to-sky-500" },
      { Icon: FaYoutube, color: "from-red-600 to-red-500" },

      // Threads
      { Icon: FaThreads, color: "from-slate-800 to-slate-600" },

      // SEO
      { Icon: FaMagnifyingGlass, color: "from-brand-600 to-accent-500" },
    ],
  },

  {
    size: 330,
    duration: 27,
    reverse: true,
    ring: "border-plum-200",
    icons: [
      // Search + Sponsored + Film
      { Icon: FaGoogle, color: "from-blue-600 to-green-500" },
      { Icon: FaMeta, color: "from-blue-700 to-cyan-500" },
      { Icon: FaClapperboard, color: "from-purple-600 to-pink-500" },
      { Icon: FaBullhorn, color: "from-orange-600 to-pink-500" },
    ],
  },

  {
    size: 210,
    duration: 20,
    reverse: false,
    ring: "border-accent-200",
    icons: [
      // Development + Brand + AI
      { Icon: FaCode, color: "from-indigo-600 to-blue-500" },
      { Icon: FaMobileScreen, color: "from-cyan-600 to-blue-500" },
      { Icon: FaUserTie, color: "from-violet-600 to-purple-500" },
      { Icon: FaRobot, color: "from-purple-600 to-cyan-500" },
    ],
  },
];

/* ================= FLOATING BALLS ================= */

const BALLS = [
  {
    top: "12%",
    left: "8%",
    color: "bg-accent-500",
    dur: 16,
    dx: 40,
    dy: -30,
  },
  {
    top: "28%",
    left: "72%",
    color: "bg-aqua-500",
    dur: 21,
    dx: -35,
    dy: 45,
  },
  {
    top: "55%",
    left: "18%",
    color: "bg-plum-600",
    dur: 18,
    dx: 50,
    dy: 35,
  },
  {
    top: "70%",
    left: "60%",
    color: "bg-brand-600",
    dur: 24,
    dx: -45,
    dy: -40,
  },
  {
    top: "40%",
    left: "45%",
    color: "bg-accent-400",
    dur: 19,
    dx: 30,
    dy: 50,
  },
  {
    top: "85%",
    left: "88%",
    color: "bg-aqua-400",
    dur: 23,
    dx: -40,
    dy: -35,
  },
  {
    top: "5%",
    left: "50%",
    color: "bg-plum-500",
    dur: 20,
    dx: 45,
    dy: 40,
  },
];

/* ================= HIGHLIGHTS ================= */

const HIGHLIGHTS = [
  "AI-enabled digital & creative solutions",
  "360° solutions under one powerful ecosystem",
  "Built for MSMEs, SMEs, corporates & institutions",
  "Creativity powered by technology, AI & strategy",
];

/* ================= STATS ================= */

const STATS = [
  { value: "4200+", label: "Happy Clients" },
  { value: "92%", label: "Satisfaction Rate" },
  { value: "17+", label: "Years of Expertise" },
];

/* ================= ABOUT SECTION ================= */

export default function AboutSection() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-canvas py-24 lg:py-32"
    >
      {/* ============================================================
          BACKGROUND GLOW BLOBS
      ============================================================ */}

      <div className="pointer-events-none absolute -left-40 top-20 size-[420px] rounded-full bg-aqua-400/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 size-[420px] rounded-full bg-accent-400/20 blur-[120px]" />

      {/* ============================================================
          FLOATING BALLS
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {BALLS.map((b, i) => (
          <motion.span
            key={i}
            className={`absolute size-[6px] rounded-full ${b.color} opacity-70`}
            style={{
              top: b.top,
              left: b.left,
            }}
            animate={{
              x: [0, b.dx, 0, -b.dx * 0.6, 0],
              y: [0, b.dy, -b.dy * 0.5, b.dy * 0.3, 0],
              opacity: [0.3, 0.85, 0.5, 0.9, 0.3],
              scale: [1, 1.6, 1.1, 1.4, 1],
            }}
            transition={{
              duration: b.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      <div className="container-x relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-10">

          {/* ==========================================================
              LEFT — ORBIT VISUAL
          ========================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.88,
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto flex h-[480px] w-full max-w-[520px] items-center justify-center"
          >

            {/* Soft radial backdrop */}

            <div className="absolute size-[420px] rounded-full bg-gradient-to-br from-brand-50 via-plum-50 to-accent-50 blur-2xl" />

            {/* ========================================================
                ORBIT RINGS
            ======================================================== */}

            {ORBITS.map((orbit, oi) => (
              <motion.div
                key={oi}
                animate={{
                  rotate: orbit.reverse ? -360 : 360,
                }}
                transition={{
                  duration: orbit.duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className={`absolute rounded-full border border-dashed ${orbit.ring}`}
                style={{
                  width: orbit.size,
                  height: orbit.size,
                }}
              >
                {orbit.icons.map((item, ii) => {
                  const angle =
                    (360 / orbit.icons.length) * ii;

                  const r = orbit.size / 2;

                  const x =
                    r *
                    Math.cos(
                      (angle * Math.PI) / 180
                    );

                  const y =
                    r *
                    Math.sin(
                      (angle * Math.PI) / 180
                    );

                  return (
                    <div
                      key={ii}
                      className="absolute left-1/2 top-1/2"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      <motion.div
                        animate={{
                          rotate: orbit.reverse
                            ? 360
                            : -360,
                        }}
                        transition={{
                          duration: orbit.duration,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="-ml-7 -mt-7"
                      >
                        <div
                          className={`grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-[0_10px_28px_-8px_rgba(43,57,144,0.5)] transition-transform duration-300 hover:scale-110`}
                        >
                          <item.Icon className="size-5" />
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
            ))}

            {/* ========================================================
                CENTER BADGE
            ======================================================== */}

            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 grid size-32 place-items-center rounded-full bg-white shadow-[0_20px_50px_-15px_rgba(43,57,144,0.4)]"
            >
              <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-aqua-400 via-plum-600 to-accent-500 p-[2px]">

                <div className="grid h-full w-full place-items-center rounded-full bg-white text-center">

                  <div>
                    <p className="text-[26px] font-extrabold leading-none grad-text">
                      17+
                    </p>

                    <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-ink-mute">
                      Years
                    </p>
                  </div>

                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* ==========================================================
              RIGHT — CONTENT
          ========================================================== */}

          <div className="relative">

            {/* ================= EYEBROW ================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 24,
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
                duration: 0.6,
                delay: 0.15,
              }}
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600">

                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />

                  <span className="relative inline-flex size-2 rounded-full bg-accent-500" />
                </span>

                Who We Are

              </span>
            </motion.div>

            {/* ================= HEADING ================= */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 28,
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
                duration: 0.7,
                delay: 0.28,
              }}
              className="mt-6 text-[34px] font-extrabold leading-[1.12] tracking-tight text-ink sm:text-[42px] lg:text-[46px]"
            >
              A Creative Powerhouse{" "}

              <span className="grad-text-anim">
                Built for Growth.
              </span>
            </motion.h2>

            {/* ========================================================
                PARAGRAPH 1
            ======================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 24,
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
                duration: 0.7,
                delay: 0.4,
              }}
              className="mt-5 text-[16px] leading-relaxed text-ink-soft"
            >
              Cybertricks Media Pvt. Ltd. is a next-generation
              creative and technology group helping brands build,
              grow and lead in the digital era. We bring together
              AI-enabled Digital Marketing, Advertising, Film
              Production, Branding, CRM, Web & App Development
              under one powerful ecosystem.
            </motion.p>

            {/* ========================================================
                PARAGRAPH 2
            ======================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 24,
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
                duration: 0.7,
                delay: 0.5,
              }}
              className="mt-4 text-[16px] leading-relaxed text-ink-soft"
            >
              We don’t just create campaigns—we create impact.
              From the first idea to the final execution, our team
              combines human creativity, AI-powered intelligence,
              cinematic storytelling, technology and sharp business
              strategy to turn your vision into a brand people
              remember.
            </motion.p>

            {/* ========================================================
                PARAGRAPH 3
            ======================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 24,
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
                duration: 0.7,
                delay: 0.58,
              }}
              className="mt-4 text-[16px] leading-relaxed text-ink-soft"
            >
              Whether you’re an MSME, SME, corporate, institution
              or individual, we deliver end-to-end solutions
              designed to strengthen your brand, expand your reach
              and drive measurable business growth.
            </motion.p>

            {/* ========================================================
                TAGLINE
            ======================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 24,
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
                duration: 0.7,
                delay: 0.66,
              }}
              className="mt-5 text-[17px] font-extrabold text-brand-600"
            >
              Think. Create. Transform. Grow.
            </motion.p>

            {/* ========================================================
                FINAL DESCRIPTION
            ======================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 24,
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
                duration: 0.7,
                delay: 0.74,
              }}
              className="mt-3 text-[15.5px] leading-relaxed text-ink-soft"
            >
              With creative excellence powered by technology and
              AI, we make brands more visible, more engaging and
              impossible to ignore.
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
                y: 18,
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
                duration: 0.6,
                delay: 0.82,
              }}
              className="mt-3 text-[14px] font-semibold text-brand-600"
            >
              Cybertricks Media Pvt. Ltd. — Where Creativity Meets
              Technology.
            </motion.p>

            {/* ========================================================
                HIGHLIGHTS
            ======================================================== */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{
                    opacity: 0,
                    x: -18,
                  }}
                  animate={
                    inView
                      ? {
                          opacity: 1,
                          x: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.9 + i * 0.09,
                  }}
                  className="flex items-start gap-2.5"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                    <Check
                      className="size-3"
                      strokeWidth={3}
                    />
                  </span>

                  <span className="text-[14.5px] font-medium text-ink">
                    {h}
                  </span>
                </motion.div>
              ))}

            </div>

            {/* ========================================================
                STATS — UNCHANGED
            ======================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 24,
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
                duration: 0.7,
                delay: 1.15,
              }}
              className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-5 rounded-2xl border border-line bg-white/70 px-7 py-5 backdrop-blur-sm"
            >
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className="flex items-center gap-9"
                >
                  <div>
                    <p className="text-[26px] font-extrabold leading-none grad-text">
                      {s.value}
                    </p>

                    <p className="mt-1.5 text-[12.5px] font-medium text-ink-mute">
                      {s.label}
                    </p>
                  </div>

                  {i < STATS.length - 1 && (
                    <span className="hidden h-9 w-px bg-line sm:block" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* ========================================================
                CTA
            ======================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 22,
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
                duration: 0.6,
                delay: 1.28,
              }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >

              <Link
                href="/about-us"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-600 to-plum-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_16px_38px_-12px_rgba(43,57,144,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_-12px_rgba(224,69,154,0.55)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Know More About Us

                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>

                <span className="absolute inset-0 bg-gradient-to-r from-plum-600 to-accent-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-line bg-white px-6 py-3.5 text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-300 hover:text-accent-600"
              >
                Talk to Our Team
              </Link>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}