"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { Quote, Crown, ArrowRight, Check } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

const LEADER = {
  name: "Sunny Rathore",
  role: "Founder & Managing Director",
  img: "/about/sunny.jpeg",
  linkedin: "https://www.linkedin.com/in/sunny-rathor/",
  quote:
    "A brand isn't a logo or a tagline. It's the feeling someone gets when they hear your name. Our entire job is engineering that feeling.",
  bio1: "Sunny Rathore founded Cybertricks Media with a simple belief — that great branding shouldn't be a luxury only big companies can afford. Over 17 years he has built the group from a three-person studio into a multi-vertical media house spanning advertising, film production, publishing and B2B commerce.",
  bio2: "He still sits in on client strategy calls personally, because he believes the person selling the vision should be the one accountable for delivering it. That habit is why 92% of our clients stay past their first year.",
  points: [
    "17+ years in advertising and brand building",
    "Built a 6-brand media group from the ground up",
    "Personally mentored a 50-member creative team",
  ],
  tags: ["Brand Strategy", "Business Growth", "Media & Films", "Leadership"],
};

export default function ManagementSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-canvas py-24 lg:py-28">
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(43,57,144,0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 50% 25%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 25%, #000 30%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-1/4 size-[440px] rounded-full bg-aqua-400/14 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[440px] rounded-full bg-plum-400/14 blur-[140px]" />

      <div className="container-x relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600"
          >
            <Crown className="size-3.5" />
            Management
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[44px]"
          >
            The Man Behind{" "}
            <span className="grad-text-anim">The Vision.</span>
          </motion.h2>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* ---------- LEFT: BIG PHOTO ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.94 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[430px]"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-gradient-to-br from-aqua-400/25 via-plum-500/20 to-accent-500/25 blur-[60px]" />

            {/* Decorative offset frame */}
            <motion.div
              animate={{ rotate: [0, 2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -bottom-5 -right-5 h-full w-full rounded-[32px] border-2 border-dashed border-accent-300/50"
            />

            {/* Photo */}
            <div className="relative overflow-hidden rounded-[32px] border border-line bg-white p-2.5 shadow-[0_30px_70px_-30px_rgba(43,57,144,0.5)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-canvas">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LEADER.img}
                  alt={LEADER.name}
                  className="h-full w-full object-cover object-top"
                />

                {/* Bottom gradient */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/85 to-transparent" />

                {/* Name plate */}
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[20px] font-extrabold leading-tight text-white">
                      {LEADER.name}
                    </p>
                    <p className="mt-1 text-[13px] text-white/75">{LEADER.role}</p>
                  </div>

                  <a
                    href={LEADER.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${LEADER.name} on LinkedIn`}
                    className="grid size-11 shrink-0 place-items-center rounded-full bg-white/95 text-brand-600 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-brand-600 hover:to-accent-500 hover:text-white"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Floating experience badge */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-10 z-20 rounded-2xl border border-line bg-white px-5 py-4 shadow-[0_18px_44px_-18px_rgba(43,57,144,0.5)]"
            >
              <p className="text-[26px] font-extrabold leading-none grad-text">17+</p>
              <p className="mt-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-mute">
                Years
              </p>
            </motion.div>
          </motion.div>

          {/* ---------- RIGHT: CONTENT ---------- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Quote */}
            <div className="relative rounded-[26px] border border-line bg-white p-7 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-[4px] rounded-t-[26px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
              <Quote className="size-8 text-brand-200" />
              <p className="mt-4 text-[18px] font-semibold leading-relaxed text-ink sm:text-[21px]">
                {LEADER.quote}
              </p>
            </div>

            {/* Bio */}
            <p className="mt-7 text-[15.5px] leading-relaxed text-ink-soft">
              {LEADER.bio1}
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-ink-soft">
              {LEADER.bio2}
            </p>

            {/* Points */}
            <div className="mt-8 space-y-3">
              {LEADER.points.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, x: 22 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span className="text-[14.5px] font-medium text-ink">{p}</span>
                </motion.div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {LEADER.tags.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.07 }}
                  className="rounded-full bg-brand-50 px-3.5 py-1.5 text-[12.5px] font-semibold text-brand-600"
                >
                  {t}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.05 }}
              className="mt-9"
            >
              <Link href="/contact-us" className="btn-shine">
                <span className="btn-shine-text">
                  Talk to Our Team
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}