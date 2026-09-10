"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  Briefcase,
  MapPin,
  Clock,
  ChevronDown,
  ArrowRight,
  Check,
} from "lucide-react";

const CATEGORIES = ["All", "Marketing", "Sales", "Accounts"];

export const JOBS = [
  {
    title: "Team Manager – Sales",
    cat: "Sales",
    openings: 1,
    type: "Full-time",
    location: "Pitampura, Delhi",
    exp: "4–7 years",
    desc: "Lead the sales team, drive revenue growth, manage targets, and build strong client relationships while mentoring the sales team.",
    skills: [
      "Sales Team Management",
      "B2B Sales",
      "Target & Revenue Management",
      "Client Relationship Management",
    ],
  },
  {
    title: "Senior Sales Executive",
    cat: "Sales",
    openings: 2,
    type: "Full-time",
    location: "Pitampura, Delhi",
    exp: "2–5 years",
    desc: "Drive new business through outbound sales, client meetings, pitching, follow-ups, and relationship building.",
    skills: [
      "B2B Sales",
      "Lead Generation",
      "Client Pitching",
      "Negotiation & Follow-ups",
    ],
  },
  {
    title: "Sales Executive – Fresher",
    cat: "Sales",
    openings: 2,
    type: "Full-time",
    location: "Pitampura, Delhi",
    exp: "Fresher",
    desc: "Start your sales career by connecting with prospects, understanding their requirements, and helping convert qualified leads into clients.",
    skills: [
      "Good Communication",
      "Lead Generation",
      "Client Handling",
      "Eagerness to Learn",
    ],
  },
  {
    title: "Senior Executive – SEO",
    cat: "Marketing",
    openings: 1,
    type: "Full-time",
    location: "Pitampura, Delhi",
    exp: "2–4 years",
    desc: "Own organic growth across client accounts through technical SEO, content strategy, keyword research, on-page optimisation, and reporting.",
    skills: [
      "On-page & Technical SEO",
      "Keyword Research",
      "GA4 & Search Console",
      "SEO Strategy & Reporting",
    ],
  },
  {
    title: "SMO Executive",
    cat: "Marketing",
    openings: 1,
    type: "Full-time",
    location: "Pitampura, Delhi",
    exp: "1–3 years",
    desc: "Manage social media activities, content planning, audience engagement, and performance across major social platforms.",
    skills: [
      "Social Media Management",
      "Content Planning",
      "Audience Engagement",
      "Social Media Analytics",
    ],
  },
  {
    title: "Accounts Executive",
    cat: "Accounts",
    openings: 1,
    type: "Full-time",
    location: "Pitampura, Delhi",
    exp: "1–3 years",
    desc: "Handle day-to-day accounting activities, invoices, payments, reconciliations, records, and financial documentation.",
    skills: [
      "Bookkeeping",
      "Invoice & Payment Handling",
      "Bank Reconciliation",
      "MS Excel / Accounting Software",
    ],
  },
];

export default function OpeningsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState(null);

  const filtered =
    cat === "All" ? JOBS : JOBS.filter((j) => j.cat === cat);

  const applyTo = (title) => {
    const el = document.getElementById("apply");
    const select = document.getElementById("position-select");

    if (select) {
      select.value = title;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }

    el?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="openings"
      ref={ref}
      className="relative overflow-hidden bg-white py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 size-[430px] rounded-full bg-plum-400/12 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[430px] rounded-full bg-aqua-400/12 blur-[140px]" />

      <div className="container-x relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-canvas px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600"
          >
            <Briefcase className="size-3.5" />
            Open Positions
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 text-[34px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[44px]"
          >
            Find Your{" "}
            <span className="grad-text-anim">Next Role.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft"
          >
            We&apos;re growing our team. Explore the roles we&apos;re
            currently hiring for and find your place with us.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-11 flex flex-wrap justify-center gap-2.5"
        >
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCat(c);
                setOpen(null);
              }}
              className={`relative rounded-full px-5 py-2.5 text-[14px] font-semibold transition-all duration-300 ${
                cat === c
                  ? "text-white"
                  : "border border-line bg-canvas text-ink-soft hover:-translate-y-0.5 hover:text-brand-600"
              }`}
            >
              {cat === c && (
                <motion.span
                  layoutId="job-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-600 to-plum-600 shadow-[0_12px_28px_-12px_rgba(43,57,144,0.6)]"
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10">{c}</span>
            </button>
          ))}
        </motion.div>

        {/* Job List */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mx-auto mt-10 max-w-4xl space-y-4"
        >
          {filtered.map((job, i) => {
            const isOpen = open === job.title;

            return (
              <motion.div
                key={job.title}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.05,
                }}
                className={`group overflow-hidden rounded-[24px] border bg-white transition-all duration-400 ${
                  isOpen
                    ? "border-transparent shadow-[0_26px_60px_-26px_rgba(43,57,144,0.45)]"
                    : "border-line hover:-translate-y-0.5 hover:shadow-[0_18px_44px_-22px_rgba(43,57,144,0.4)]"
                }`}
              >
                {/* Header */}
                <button
                  onClick={() =>
                    setOpen(isOpen ? null : job.title)
                  }
                  className="flex w-full items-center gap-4 p-6 text-left sm:p-7"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-[17.5px] font-bold text-ink sm:text-[19px]">
                        {job.title}
                      </h3>

                      {/* Openings Count */}
                      <span className="rounded-full bg-accent-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-600">
                        {job.openings}{" "}
                        {job.openings === 1
                          ? "Opening"
                          : "Openings"}
                      </span>

                      {/* Job Type */}
                      <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-600">
                        {job.type}
                      </span>
                    </div>

                    <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px] text-ink-soft">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5" />
                        {job.location}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        {job.exp}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="size-3.5" />
                        {job.cat}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`grid size-10 shrink-0 place-items-center rounded-full transition-all duration-400 ${
                      isOpen
                        ? "rotate-180 bg-gradient-to-br from-brand-600 to-accent-500 text-white"
                        : "border border-line text-ink-mute group-hover:text-brand-600"
                    }`}
                  >
                    <ChevronDown className="size-4" />
                  </span>
                </button>

                {/* Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-line px-6 pb-7 pt-6 sm:px-7">
                        <p className="text-[15px] leading-relaxed text-ink-soft">
                          {job.desc}
                        </p>

                        <p className="mt-6 text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-mute">
                          What we&apos;re looking for
                        </p>

                        <div className="mt-3.5 grid gap-2.5 sm:grid-cols-2">
                          {job.skills.map((s) => (
                            <div
                              key={s}
                              className="flex items-start gap-2.5"
                            >
                              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                                <Check
                                  className="size-3"
                                  strokeWidth={3}
                                />
                              </span>

                              <span className="text-[14px] font-medium text-ink">
                                {s}
                              </span>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={() => applyTo(job.title)}
                          className="btn-shine mt-7"
                        >
                          <span className="btn-shine-text">
                            Apply for This Role
                            <ArrowRight className="size-4" />
                          </span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.6,
          }}
          className="mt-10 text-center text-[14.5px] text-ink-soft"
        >
          Don&apos;t see your role?{" "}
          <a
            href="#apply"
            className="font-semibold text-brand-600 underline-offset-4 transition hover:text-accent-600 hover:underline"
          >
            Send us your CV anyway
          </a>{" "}
          — we keep good profiles on file.
        </motion.p>
      </div>
    </section>
  );
}