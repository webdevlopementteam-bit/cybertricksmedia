"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowRight, ArrowLeft, Quote, Star, MessageSquareQuote } from "lucide-react";

/* ================= TESTIMONIALS ================= */
const REVIEWS = [
  {
    name: "GME Foods",
    role: "Food & Beverages",
    initials: "GF",
    rating: 5,
    text: "Every brand needs a team of professionals who help in brand building. I highly recommend Bharat Bizmart & Sunny Rathore's team. They work with strategy and help you achieve your branding and business goals.",
    gradient: "from-brand-600 to-plum-600",
  },
  {
    name: "HPP Group",
    role: "Manufacturing",
    initials: "HP",
    rating: 5,
    text: "I've been working with this social media agency for some time now, and I'm really happy with their work. They understand my brand well and handle everything smoothly. I don't have to worry about what to post — they manage it all with care. Creative, quick to respond, and always ready to help.",
    gradient: "from-plum-600 to-accent-500",
  },
  {
    name: "Orion Bathing Concepts",
    role: "Home & Interiors",
    initials: "OB",
    rating: 5,
    text: "I am really impressed with your creatives. The entire team is hard-working and dedicated. I like how the responses are quick. Overall it is a good experience working with you.",
    gradient: "from-aqua-500 to-brand-600",
  },
  {
    name: "Sharma Billiards",
    role: "Sports & Leisure",
    initials: "SB",
    rating: 5,
    text: "I am happy with the services that you are providing. It's good that you are ready to accept suggestions and give valuable inputs yourself.",
    gradient: "from-accent-500 to-plum-600",
  },
  {
    name: "Rohit Furniture",
    role: "Furniture & Interiors",
    initials: "RF",
    rating: 5,
    text: "Cybertricks Media team is good at designing creatives and promoting our brands. Keep up the excellent work.",
    gradient: "from-brand-600 to-aqua-500",
  },
  {
    name: "Nippon Toys",
    role: "Toys & Retail",
    initials: "NT",
    rating: 5,
    text: "Always available to answer my questions. Very knowledgeable about the services they provide. Would recommend to anyone!",
    gradient: "from-plum-600 to-brand-600",
  },
  {
    name: "Ryaann Ace",
    role: "Manufacturing",
    initials: "RA",
    rating: 5,
    text: "Thank you for helping us grow our business with your amazing creatives.",
    gradient: "from-aqua-500 to-plum-600",
  },
  {
    name: "Ilahi Mechanical Works",
    role: "Industrial Machinery",
    initials: "IM",
    rating: 5,
    text: "Good quality leads and business generation. Exactly what we were looking for.",
    gradient: "from-accent-500 to-brand-600",
  },
  {
    name: "Prisha Dustbins Pvt Ltd",
    role: "Industrial Products",
    initials: "PD",
    rating: 5,
    text: "One-stop solution for advertising, and the team is just one call away. That reliability is rare in this industry.",
    gradient: "from-brand-600 to-plum-600",
  },
  {
    name: "Rudhar",
    role: "Business Services",
    initials: "RU",
    rating: 5,
    text: "I am taking multiple services like SMO, SEO and more — and I'm satisfied with all of them.",
    gradient: "from-plum-600 to-accent-500",
  },
  {
    name: "SMM Machinery",
    role: "Industrial Machinery",
    initials: "SM",
    rating: 5,
    text: "I am happy to work with them. They are the best in digital marketing.",
    gradient: "from-aqua-500 to-brand-600",
  },
  {
    name: "Mr Shine",
    role: "Consumer Products",
    initials: "MS",
    rating: 5,
    text: "They are the perfect brand builder.",
    gradient: "from-accent-500 to-plum-600",
  },
  {
    name: "Shah Satnam",
    role: "Business Services",
    initials: "SS",
    rating: 5,
    text: "I have been associated with them for the past 2 years. I highly recommend them.",
    gradient: "from-brand-600 to-aqua-500",
  },
  {
    name: "Atal Hose Engg.",
    role: "Engineering",
    initials: "AH",
    rating: 5,
    text: "SMO expert agency. They know exactly what they're doing.",
    gradient: "from-plum-600 to-brand-600",
  },
  {
    name: "Maskeen Toys",
    role: "Toys & Retail",
    initials: "MT",
    rating: 5,
    text: "Opted for their digital services — 100% recommended for any brand serious about growing online.",
    gradient: "from-aqua-500 to-plum-600",
  },
  {
    name: "N J Renewable Energy",
    role: "Renewable Energy",
    initials: "NJ",
    rating: 5,
    text: "Very professional services throughout. A pleasure to work with.",
    gradient: "from-accent-500 to-brand-600",
  },
  {
    name: "YuLong Gattuwala",
    role: "Manufacturing",
    initials: "YG",
    rating: 5,
    text: "These guys are perfect in advertising solutions — especially Mr Sunny Rathore, who has all the expertise in brand management.",
    gradient: "from-brand-600 to-plum-600",
  },
  {
    name: "Grahshanti Dhoop Agarbatti",
    role: "Consumer Products",
    initials: "GD",
    rating: 5,
    text: "Sunny ji is a good brand creator. Thank you for everything.",
    gradient: "from-plum-600 to-accent-500",
  },
  {
    name: "The Mann School",
    role: "Education",
    initials: "TM",
    rating: 5,
    text: "Consistent, professional and creative. They understood our institution's tone from day one.",
    gradient: "from-aqua-500 to-brand-600",
  },
];

const AUTOPLAY = 5000;

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const listRef = useRef(null);

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    if (!inView || paused) return;
    const t = setInterval(() => {
      setDir(1);
      setActive((i) => (i + 1) % REVIEWS.length);
    }, AUTOPLAY);
    return () => clearInterval(t);
  }, [inView, paused]);



  const next = () => {
    setDir(1);
    setActive((i) => (i + 1) % REVIEWS.length);
  };
  const prev = () => {
    setDir(-1);
    setActive((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-canvas py-24 lg:py-28"
    >
      {/* ============ BACKGROUND ============ */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(43,57,144,0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, #000 30%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-1/4 size-[430px] rounded-full bg-aqua-400/16 blur-[135px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[430px] rounded-full bg-accent-400/16 blur-[135px]" />

      <div className="container-x relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* ================= LEFT — HEADING + LIST ================= */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600"
            >
              <MessageSquareQuote className="size-3.5" />
              Client Voices
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[44px]"
            >
              They Stayed.{" "}
              <span className="grad-text-anim">Here&apos;s Why.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-5 max-w-md text-[16px] leading-relaxed text-ink-soft"
            >
              We didn&apos;t write these. Our clients did — after the results
              showed up.
            </motion.p>

            {/* ---------- CLIENT LIST ---------- */}
            

            {/* ---------- RATING SUMMARY ---------- */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.48 }}
              className="mt-8 flex items-center gap-5 rounded-2xl border border-line bg-white/70 px-6 py-4 backdrop-blur-sm"
            >
              <div>
                <p className="text-[30px] font-extrabold leading-none grad-text">
                  4.9
                </p>
                <div className="mt-2 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3 fill-accent-500 text-accent-500" />
                  ))}
                </div>
              </div>
              <span className="h-11 w-px bg-line" />
              <div>
                <p className="text-[16px] font-bold text-ink-soft">
                  92% client retention rate
                </p>
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT — 3D CARD STACK ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative flex h-[440px] items-center justify-center sm:h-[420px]"
            style={{ perspective: "1400px" }}
          >
            {/* Big quote mark */}
            <Quote className="pointer-events-none absolute -top-4 left-2 size-24 text-brand-100 sm:size-32" />

            {/* Stack */}
            <div className="relative h-full w-full max-w-[540px]">
              {REVIEWS.map((r, i) => {
                let offset = i - active;
                if (offset < 0) offset += REVIEWS.length;

                const visible = offset < 3;

                return (
                  <motion.div
                    key={r.name}
                    animate={{
                      y: offset * 22,
                      scale: 1 - offset * 0.055,
                      opacity: visible ? 1 - offset * 0.25 : 0,
                      zIndex: REVIEWS.length - offset,
                      rotateX: offset * 3,
                      filter: `blur(${Math.min(offset, 3) * 1.2}px)`,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 130,
                      damping: 20,
                      mass: 0.85,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "top center",
                      pointerEvents: visible ? "auto" : "none",
                    }}
                    className="absolute inset-x-0 top-6"
                  >
                    <div className="relative overflow-hidden rounded-[28px] border border-line bg-white p-8 shadow-[0_30px_70px_-30px_rgba(43,57,144,0.45)] sm:p-10">
                      {/* Gradient top strip */}
                      <div
                        className={`absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r ${r.gradient}`}
                      />

                      {/* Corner glow */}
                      <div
                        className={`pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-gradient-to-br ${r.gradient} opacity-[0.12] blur-3xl`}
                      />

                      {/* Stars */}
                      <div className="relative flex gap-1">
                        {Array.from({ length: r.rating }).map((_, si) => (
                          <motion.span
                            key={si}
                            initial={{ opacity: 0, scale: 0.4 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: offset === 0 ? si * 0.07 : 0 }}
                          >
                            <Star className="size-4 fill-accent-500 text-accent-500" />
                          </motion.span>
                        ))}
                      </div>

                      {/* Text */}
                      <p className="relative mt-6 min-h-[104px] text-[16.5px] leading-relaxed text-ink sm:text-[17.5px]">
                        {r.text}
                      </p>

                      {/* Author */}
                      <div className="relative mt-8 flex items-center gap-3.5 border-t border-line pt-6">
                        <span
                          className={`grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${r.gradient} text-[15px] font-bold text-white`}
                        >
                          {r.initials}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-[15px] font-bold text-ink">
                            {r.name}
                          </p>
                          <p className="mt-0.5 truncate text-[13px] text-ink-soft">
                            {r.role}
                          </p>
                        </div>

                        {/* Index */}
                        <span className="ml-auto shrink-0 text-[13px] font-bold text-ink-mute">
                          {String(i + 1).padStart(2, "0")}
                          <span className="text-line"> / {REVIEWS.length}</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ---------- ARROWS ---------- */}
            <div className="absolute -bottom-2 left-0 flex items-center gap-2.5">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="grid size-11 place-items-center rounded-full border border-line bg-white text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-600 hover:shadow-[0_12px_28px_-12px_rgba(43,57,144,0.5)]"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="grid size-11 place-items-center rounded-full border border-line bg-white text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-300 hover:text-accent-600 hover:shadow-[0_12px_28px_-12px_rgba(224,69,154,0.5)]"
              >
                <ArrowRight className="size-4" />
              </button>

              {/* Progress bar */}
              <div className="ml-3 h-1 w-24 overflow-hidden rounded-full bg-line">
                <motion.div
                  key={active}
                  initial={{ width: "0%" }}
                  animate={{ width: paused ? "0%" : "100%" }}
                  transition={{ duration: paused ? 0 : AUTOPLAY / 1000, ease: "linear" }}
                  className="h-full rounded-full bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <p className="text-[14.5px] text-ink-soft">
            Want a review like this with your name on it?
          </p>
          <Link href="/contact-us" className="btn-shine">
            <span className="btn-shine-text">
              Start Your Project
              <ArrowRight className="size-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}