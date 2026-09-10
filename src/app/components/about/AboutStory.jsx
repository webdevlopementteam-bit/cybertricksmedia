"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { ArrowRight, Check, Building2 } from "lucide-react";

const MILESTONES = [
  {
    year: "2018",
    title: "Initial",
    desc: "Stepped Into the World of Digital Marketing & Advertising Services",
  },
  {
    year: "2019",
    title: "The Beginning",
    desc: "Started as a small operating office in Jhandewalan Delhi with Four people and 4 Laptops.",
  },
  {
    year: "2020",
    title: "Going Digital",
    desc: "Added SEO, social media and performance marketing as brands moved online during Covid Time",
  },
  {
    year: "2023",
    title: "The Times Of MSME Excellence Awards Edition 1 & 2",
    desc: "Oragnised Successful Business Awards Shows with a combined 800+ Business Owners under one roof.",
  },
  {
    year: "2024",
    title: "The Group",
    desc: "Expanded into a group of companies — Digital Media, Publishing, Marketplace and films.",
  },
  {
    year: "2025",
    title: "AI First",
    desc: "Introduced AI Enabled Digital Marketing, came with customer success stories, more focused on result oriented packages.",
  },
  {
    year: "2026",
    title: "Multi Awards",
    desc: "Recognised for Excellence in AI-Powered Digital Marketing & Advertising & 8 More Awards.",
  },
];

const POINTS = [
  "Human creativity powered by AI intelligence",
  "End-to-end digital, creative & technology solutions",
  "Cinematic storytelling with sharp business strategy",
  "Built to strengthen brands and drive measurable growth",
];

export default function AboutStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-canvas py-24 lg:py-28"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(43,57,144,0.15) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 50% 20%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 50% 20%, #000 30%, transparent 100%)",
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-1/4 size-[430px] rounded-full bg-aqua-400/14 blur-[135px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[430px] rounded-full bg-accent-400/14 blur-[135px]" />

      <div className="container-x relative z-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          {/* ---------- LEFT: WHO WE ARE ---------- */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600"
            >
              <Building2 className="size-3.5" />
              Who We Are
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[44px]"
            >
              A Creative Powerhouse{" "}
              <span className="grad-text-anim">Built for Growth.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="mt-5 text-[16px] leading-[1.8] text-ink-soft"
            >
              <strong className="font-semibold text-ink">
                Cybertricks Media Pvt. Ltd.
              </strong>{" "}
              is a next-generation creative and technology group helping brands{" "}
              <strong className="font-semibold text-ink">
                build, grow and lead in the digital era.
              </strong>{" "}
              We bring together{" "}
              <strong className="font-semibold text-ink">
                AI-enabled Digital Marketing, Advertising, Film Production,
                Branding, CRM, Web & App Development
              </strong>{" "}
              under one powerful ecosystem.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-5 text-[16px] leading-[1.8] text-ink-soft"
            >
              We don’t just create campaigns — we{" "}
              <strong className="font-semibold text-ink">create impact.</strong>{" "}
              From the first idea to the final execution, our team brings
              together{" "}
              <strong className="font-semibold text-ink">
                human creativity, AI-powered intelligence, cinematic
                storytelling, technology and sharp business strategy
              </strong>{" "}
              to turn your vision into a brand people remember.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="mt-5 text-[16px] leading-[1.8] text-ink-soft"
            >
              Whether you’re an{" "}
              <strong className="font-semibold text-ink">
                MSME, SME, corporate, institution or individual,
              </strong>{" "}
              we deliver end-to-end solutions designed to strengthen your brand,
              expand your reach and drive measurable business growth.
            </motion.p>

            {/* What We Bring */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-7"
            >
              <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.12em] text-brand-600">
                What We Bring to the Table
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "AI-powered creative & digital intelligence",
                  "Complete 360° brand & marketing solutions",
                  "Cinematic storytelling & high-impact advertising",
                  "Web, App & technology-driven experiences",
                  "Result-oriented strategies built for growth",
                  "One powerful ecosystem from idea to execution",
                ].map((p, i) => (
                  <motion.div
                    key={p}
                    initial={{ opacity: 0, x: -18 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.55 + i * 0.08,
                    }}
                    className="flex items-start gap-2.5"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                      <Check className="size-3" strokeWidth={3} />
                    </span>

                    <span className="text-[14px] font-medium leading-relaxed text-ink">
                      {p}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Closing Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-8 border-l-2 border-brand-500 pl-5"
            >
              <p className="text-[20px] font-extrabold tracking-tight text-ink">
                Think. Create.{" "}
                <span className="grad-text-anim">Transform. Grow.</span>
              </p>

              <p className="mt-2 text-[14.5px] leading-[1.75] text-ink-soft">
                With{" "}
                <strong className="font-semibold text-ink">
                  creative excellence powered by technology and AI,
                </strong>{" "}
                we make brands more visible, more engaging and{" "}
                <strong className="font-semibold text-ink">
                  impossible to ignore.
                </strong>
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8"
            >
              <Link href="/contact-us" className="btn-shine">
                <span className="btn-shine-text">
                  Start a Conversation
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* ---------- RIGHT: TIMELINE ---------- */}
          <div className="relative">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-mute"
            >
              Our Journey
            </motion.p>

            {/* Vertical line */}
            <motion.span
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{
                duration: 1.4,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="absolute left-[19px] top-[52px] w-[2px] origin-top bg-gradient-to-b from-aqua-400 via-plum-500 to-accent-500"
              style={{ height: "calc(100% - 90px)" }}
            />

            <div className="space-y-7">
              {MILESTONES.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + i * 0.14,
                  }}
                  className="group relative flex gap-5"
                >
                  {/* Dot */}
                  <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full border-[3px] border-canvas bg-gradient-to-br from-brand-600 to-plum-600 text-[11px] font-bold text-white shadow-[0_8px_20px_-6px_rgba(43,57,144,0.6)] transition-transform duration-300 group-hover:scale-110">
                    <span className="absolute inset-0 rounded-full bg-accent-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="relative size-2 rounded-full bg-white" />
                  </span>

                  {/* Card */}
                  <div className="flex-1 rounded-2xl border border-line bg-white p-5 transition-all duration-400 group-hover:-translate-y-1 group-hover:border-transparent group-hover:shadow-[0_20px_46px_-20px_rgba(43,57,144,0.45)]">
                    <div className="flex items-center gap-3">
                      <span className="text-[20px] font-extrabold leading-none grad-text">
                        {m.year}
                      </span>

                      <span className="h-px flex-1 bg-line" />
                    </div>

                    <p className="mt-3 text-[15.5px] font-bold text-ink">
                      {m.title}
                    </p>

                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink-soft">
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
