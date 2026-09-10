"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  ArrowRight, ChevronRight, Truck, Send, Clock, PackageX,
  AlertCircle, Headphones, Mail, Cloud, LayoutDashboard, KanbanSquare,
} from "lucide-react";

/* ================= SHIPPING CONTENT ================= */
const SECTIONS = [
  {
    n: "01",
    id: "delivery-of-digital-services",
    title: "Delivery of Digital Services",
    icon: Send,
    gradient: "from-brand-600 to-plum-600",
    intro:
      "All services (advertisements, marketing campaigns, designs, branding assets, etc.) are delivered digitally via:",
    channels: [
      { label: "Email", icon: Mail },
      { label: "Cloud platforms", icon: Cloud },
      { label: "Project management tools", icon: KanbanSquare },
      { label: "Client dashboards", icon: LayoutDashboard },
    ],
  },
  {
    n: "02",
    id: "delivery-timelines",
    title: "Delivery Timelines",
    icon: Clock,
    gradient: "from-plum-600 to-accent-500",
    points: [
      "Delivery timelines vary based on service chosen and client approvals.",
      "Standard delivery is communicated during onboarding.",
    ],
  },
  {
    n: "03",
    id: "no-physical-shipping",
    title: "No Physical Shipping",
    icon: PackageX,
    gradient: "from-aqua-500 to-brand-600",
    body: [
      "Cybertricks Media Pvt. Ltd. does not ship any physical products unless specifically mentioned for a project.",
    ],
  },
  {
    n: "04",
    id: "delayed-deliveries",
    title: "Delayed Deliveries",
    icon: AlertCircle,
    gradient: "from-accent-500 to-plum-600",
    body: [
      "Delays caused by missing information, incorrect inputs, or late approvals from the client are not the responsibility of Cybertricks Media Pvt. Ltd.",
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cancellation & Refund Policy", href: "/cancellation-refund-policy" },
];

const PARTICLES = [
  { top: "16%", left: "8%",  color: "bg-aqua-400",   dur: 18, dx: 40,  dy: -30 },
  { top: "70%", left: "16%", color: "bg-accent-400", dur: 22, dx: -35, dy: 40  },
  { top: "26%", left: "88%", color: "bg-plum-400",   dur: 20, dx: 45,  dy: 35  },
  { top: "80%", left: "76%", color: "bg-aqua-300",   dur: 24, dx: -40, dy: -35 },
  { top: "48%", left: "50%", color: "bg-accent-300", dur: 19, dx: 30,  dy: 45  },
];

export default function ShippingPolicyPage() {
  const secRef = useRef(null);
  const inView = useInView(secRef, { once: true, margin: "-100px" });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 140;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ============================================================
          BANNER — DARK
      ============================================================ */}
      <section
        className="relative flex min-h-[420px] items-center overflow-hidden pb-16 pt-[160px] lg:min-h-[460px]"
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
        <div className="pointer-events-none absolute -left-40 top-0 size-[460px] rounded-full bg-aqua-500/16 blur-[150px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 size-[460px] rounded-full bg-accent-500/18 blur-[150px]" />

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
              transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
            />
          ))}
        </div>

        <div className="container-x relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-[13px] text-white/50"
          >
            <Link href="/" className="transition hover:text-aqua-300">Home</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-white/85">Shipping &amp; Delivery Policy</span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm"
          >
            <Truck className="size-3.5" />
            Legal
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="mt-6 max-w-3xl text-[36px] font-extrabold leading-[1.06] tracking-tight text-white sm:text-[48px] lg:text-[52px]"
          >
            Shipping &amp;{" "}
            <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
              Delivery Policy
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-white/60"
          >
            Although Cybertricks Media Pvt. Ltd. primarily provides digital services,
            this shipping policy applies to scenarios where digital deliverables are
            transferred to clients.
          </motion.p>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
      </section>

      {/* ============================================================
          CONTENT — LIGHT
      ============================================================ */}
      <section ref={secRef} className="relative overflow-hidden bg-canvas py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(43,57,144,0.15) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "radial-gradient(ellipse 70% 50% at 50% 10%, #000 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 50% at 50% 10%, #000 30%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute -left-40 top-1/3 size-[430px] rounded-full bg-aqua-400/14 blur-[135px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[430px] rounded-full bg-accent-400/14 blur-[135px]" />

        <div className="container-x relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:gap-12">

            {/* ---------- SIDEBAR ---------- */}
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="lg:sticky lg:top-32 lg:self-start"
            >
              <div className="relative overflow-hidden rounded-[26px] border border-line bg-white p-6">
                <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-mute">
                  On This Page
                </p>

                <ul className="mt-4 space-y-1">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <button
                        onClick={() => scrollTo(s.id)}
                        className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-300 hover:bg-brand-50"
                      >
                        <span className="text-[12px] font-extrabold tabular-nums text-ink-mute transition-colors group-hover:text-accent-500">
                          {s.n}
                        </span>
                        <span className="min-w-0 flex-1 text-[13.5px] font-semibold leading-snug text-ink transition-colors group-hover:text-brand-600">
                          {s.title}
                        </span>
                        <ChevronRight className="size-3.5 shrink-0 -translate-x-1 text-ink-mute opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-line pt-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-mute">
                    Other Policies
                  </p>
                  <ul className="mt-3 space-y-2">
                    {LEGAL_LINKS.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="group flex items-center gap-1.5 text-[13.5px] text-ink-soft transition-colors hover:text-brand-600"
                        >
                          <span className="h-px w-0 bg-accent-500 transition-all duration-300 group-hover:w-3" />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.aside>

            {/* ---------- SECTIONS ---------- */}
            <div className="space-y-5">
              {SECTIONS.map((s, i) => (
                <motion.article
                  key={s.id}
                  id={s.id}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.09 }}
                  className="group relative scroll-mt-32 overflow-hidden rounded-[26px] border border-line bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_26px_58px_-26px_rgba(43,57,144,0.45)] sm:p-9"
                >
                  {/* Corner bubbles */}
                  <span
                    className={`pointer-events-none absolute -right-14 -top-14 size-32 rounded-full bg-gradient-to-br ${s.gradient} opacity-[0.12] transition-transform duration-700 group-hover:scale-150`}
                  />
                  <span
                    className={`pointer-events-none absolute -bottom-14 -left-14 size-32 rounded-full bg-gradient-to-br ${s.gradient} opacity-[0.09] transition-transform duration-700 group-hover:scale-150`}
                  />

                  {/* Header */}
                  <div className="relative flex items-start gap-4">
                    <span
                      className={`grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${s.gradient} text-white shadow-[0_12px_28px_-10px_rgba(43,57,144,0.5)] transition-transform duration-300 group-hover:scale-110`}
                    >
                      <s.icon className="size-5" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-mute">
                        Section {s.n}
                      </p>
                      <h2 className="mt-1 text-[21px] font-extrabold leading-tight tracking-tight text-ink sm:text-[24px]">
                        {s.title}
                      </h2>
                    </div>
                  </div>

                  {/* Intro */}
                  {s.intro && (
                    <p className="relative mt-6 text-[15px] leading-relaxed text-ink-soft">
                      {s.intro}
                    </p>
                  )}

                  {/* Delivery channels */}
                  {s.channels && (
                    <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
                      {s.channels.map((c, ci) => (
                        <motion.div
                          key={c.label}
                          initial={{ opacity: 0, y: 12 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.45, delay: 0.35 + ci * 0.08 }}
                          className="flex items-center gap-3 rounded-2xl border border-line bg-canvas p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-white hover:shadow-[0_16px_36px_-18px_rgba(43,57,144,0.4)]"
                        >
                          <span
                            className={`grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${s.gradient} text-white`}
                          >
                            <c.icon className="size-4" />
                          </span>
                          <p className="text-[14.5px] font-semibold text-ink">
                            {c.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Bullet points */}
                  {s.points && (
                    <ul className="relative mt-6 space-y-3.5">
                      {s.points.map((p) => (
                        <li key={p} className="flex items-start gap-3">
                          <span
                            className={`mt-[7px] size-1.5 shrink-0 rounded-full bg-gradient-to-br ${s.gradient}`}
                          />
                          <p className="text-[15px] leading-relaxed text-ink-soft">{p}</p>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Body paragraphs */}
                  {s.body && (
                    <div className="relative mt-6 space-y-4">
                      {s.body.map((p, bi) => (
                        <p key={bi} className="text-[15px] leading-relaxed text-ink-soft">
                          {p}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Bottom sweep */}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r ${s.gradient} transition-transform duration-500 group-hover:scale-x-100`}
                  />
                </motion.article>
              ))}

              {/* ---------- CTA ---------- */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="relative overflow-hidden rounded-[26px] p-8 text-white sm:p-10"
                style={{
                  background:
                    "linear-gradient(120deg, #1e2762 0%, #2B3990 35%, #7B3FA0 70%, #E0459A 100%)",
                }}
              >
                <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-white/15 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 size-56 rounded-full bg-aqua-400/25 blur-3xl" />

                <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                  <div className="flex items-start gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/20 text-white backdrop-blur-sm">
                      <Headphones className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-[20px] font-extrabold leading-tight tracking-tight sm:text-[24px]">
                        Waiting on a delivery?
                      </h3>
                      <p className="mt-2 max-w-md text-[14.5px] text-white/70">
                        Reach out and we&apos;ll tell you exactly where your project
                        stands.
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/contact-us"
                    className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14.5px] font-semibold text-brand-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-accent-600"
                  >
                    Contact Us
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}