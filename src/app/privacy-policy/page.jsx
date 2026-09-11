"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  ArrowRight, ChevronRight, ShieldCheck, Info, Database, Settings2,
  Cookie, Share2, Lock, UserCheck, Baby, ExternalLink, RefreshCw,
  Headphones, Mail, MapPin, Calendar,
} from "lucide-react";

const LAST_UPDATED = "4th December 2025";
const CONTACT_EMAIL = "info@cybertricksmedia.com";
const ADDRESS =
  "201/7, 2nd Floor, Dimension Tower, Vardhaman Market, West Enclave, Pitampura, Delhi – 110034";

/* ================= PRIVACY CONTENT ================= */
const SECTIONS = [
  {
    n: "01",
    id: "introduction",
    title: "Introduction",
    icon: Info,
    gradient: "from-brand-600 to-plum-600",
    body: [
      'Welcome to CyberTricks Media ("we", "us", "our", "CyberTricksMedia.com"). This Privacy Policy describes how we collect, use, disclose, store, and protect information when you visit or use our website. By using CyberTricksMedia.com, you agree to the practices described in this policy.',
    ],
  },
  {
    n: "02",
    id: "information-we-collect",
    title: "What Information We Collect",
    icon: Database,
    gradient: "from-plum-600 to-accent-500",
    subs: [
      {
        title: "2.1 Information You Provide Voluntarily",
        intro: "We may collect information that you provide directly when you:",
        points: [
          "Contact us via contact forms or email (e.g. name, email address, message content).",
          "Subscribe to our newsletter, mailing list, or other communications.",
          "Participate in any surveys, feedback forms, or user-generated content/comment sections.",
        ],
      },
      {
        title: "2.2 Automatically Collected Information",
        intro:
          "When you visit our website, we may automatically collect certain information about your device and use, including:",
        points: [
          "IP address, browser type and version, operating system, device type.",
          "Pages you visit on our site, time and date of visit, duration of visit, referring/exit pages, and other usage/statistical data.",
          "Cookies, web beacons, or other tracking technologies; depending on your browser settings, this may include unique device identifiers or session identifiers.",
        ],
      },
    ],
  },
  {
    n: "03",
    id: "how-we-use",
    title: "How We Use Your Information",
    icon: Settings2,
    gradient: "from-aqua-500 to-brand-600",
    intro: "We may use the collected data for purposes such as:",
    points: [
      "Operating, maintaining, and improving our website and services.",
      "Responding to your inquiries or communications.",
      "Sending you newsletters, updates, or promotional materials (only if you subscribe).",
      "Analyzing website usage and trends to understand how users engage with our content.",
      "Personalizing user experience and content as appropriate.",
    ],
  },
  {
    n: "04",
    id: "cookies",
    title: "Cookies and Tracking Technologies",
    icon: Cookie,
    gradient: "from-accent-500 to-plum-600",
    body: [
      "We and/or our third-party service providers may use cookies and similar tracking technologies to collect information about your interaction with our site. Cookies help us improve user experience, analyze traffic, and tailor content.",
      "You may choose to disable cookies via your browser settings. However, disabling cookies may affect certain features or usability of the website.",
    ],
  },
  {
    n: "05",
    id: "data-sharing",
    title: "Data Sharing & Third-Party Services",
    icon: Share2,
    gradient: "from-brand-600 to-aqua-500",
    intro:
      "We may share your information with third-party service providers only when needed — for example:",
    points: [
      "Analytics providers (to help understand usage patterns).",
      "Email service providers (to deliver newsletters or communications, if you choose to subscribe).",
      "Other service providers who support our website operations (hosting, maintenance, security, etc.).",
    ],
    outro:
      "We do not sell or rent your personal information to third parties for marketing or promotional purposes.",
  },
  {
    n: "06",
    id: "data-security",
    title: "Data Storage, Security & Retention",
    icon: Lock,
    gradient: "from-plum-600 to-brand-600",
    body: [
      "We use reasonable measures to protect the personal information we collect — including technical and organizational safeguards to prevent unauthorized access, disclosure, or loss.",
      "We retain personal data only as long as needed to fulfill the purposes outlined in this policy (e.g. fulfilling your request, delivering communications, analytics), or as required by applicable laws.",
    ],
  },
  {
    n: "07",
    id: "your-rights",
    title: "Your Rights",
    icon: UserCheck,
    gradient: "from-aqua-500 to-plum-600",
    intro:
      "Depending on your jurisdiction and applicable laws, you may have certain rights regarding your personal data, including:",
    points: [
      "The right to access information we hold about you.",
      "The right to request correction or deletion of your personal data.",
      "The right to opt-out of receiving communications from us.",
    ],
    outro:
      "If you wish to exercise these rights, you may contact us via the contact details provided below.",
  },
  {
    n: "08",
    id: "childrens-privacy",
    title: "Children's Privacy",
    icon: Baby,
    gradient: "from-accent-500 to-brand-600",
    body: [
      "Our website is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us — we will take steps to delete that information.",
    ],
  },
  {
    n: "09",
    id: "external-links",
    title: "Links to Other Websites",
    icon: ExternalLink,
    gradient: "from-brand-600 to-plum-600",
    body: [
      "Our site may contain links to external websites operated by third parties. Once you leave our website, this Privacy Policy no longer applies. We encourage you to review the privacy policies of every site you visit.",
    ],
  },
  {
    n: "10",
    id: "policy-changes",
    title: "Changes to This Policy",
    icon: RefreshCw,
    gradient: "from-plum-600 to-accent-500",
    body: [
      'We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top. If material changes occur, we will notify users by posting a prominent notice on the site or via email (for subscribers). We encourage you to review this page periodically.',
    ],
  },
];

const LEGAL_LINKS = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Shipping & Delivery Policy", href: "/shipping-policy" },
  { label: "Cancellation & Refund Policy", href: "/cancellation-refund-policy" },
];

const PARTICLES = [
  { top: "16%", left: "8%",  color: "bg-aqua-400",   dur: 18, dx: 40,  dy: -30 },
  { top: "70%", left: "16%", color: "bg-accent-400", dur: 22, dx: -35, dy: 40  },
  { top: "26%", left: "88%", color: "bg-plum-400",   dur: 20, dx: 45,  dy: 35  },
  { top: "80%", left: "76%", color: "bg-aqua-300",   dur: 24, dx: -40, dy: -35 },
  { top: "48%", left: "50%", color: "bg-accent-300", dur: 19, dx: 30,  dy: 45  },
];

export default function PrivacyPolicyPage() {
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
        className="relative flex min-h-[420px] items-center overflow-hidden py-16  lg:min-h-[470px]"
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
            <span className="text-white/85">Privacy Policy</span>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm"
          >
            <ShieldCheck className="size-3.5" />
            Legal
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="mt-6 max-w-3xl text-[38px] font-extrabold leading-[1.06] tracking-tight text-white sm:text-[50px] lg:text-[54px]"
          >
            Privacy{" "}
            <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
              Policy
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="mt-6 max-w-2xl text-[16.5px] leading-relaxed text-white/60"
          >
            How we collect, use, disclose, store and protect your information when
            you visit or use our website.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.44 }}
            className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 text-[13px] text-white/70 backdrop-blur-sm"
          >
            <Calendar className="size-3.5 text-aqua-300" />
            Last updated: <span className="font-semibold text-white">{LAST_UPDATED}</span>
          </motion.div>
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
              "radial-gradient(ellipse 70% 50% at 50% 8%, #000 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 50% at 50% 8%, #000 30%, transparent 100%)",
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

                <ul className="mt-4 space-y-0.5">
                  {SECTIONS.map((s) => (
                    <li key={s.id}>
                      <button
                        onClick={() => scrollTo(s.id)}
                        className="group flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors duration-300 hover:bg-brand-50"
                      >
                        <span className="text-[12px] font-extrabold tabular-nums text-ink-mute transition-colors group-hover:text-accent-500">
                          {s.n}
                        </span>
                        <span className="min-w-0 flex-1 text-[13px] font-semibold leading-snug text-ink transition-colors group-hover:text-brand-600">
                          {s.title}
                        </span>
                        <ChevronRight className="size-3.5 shrink-0 -translate-x-1 text-ink-mute opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      onClick={() => scrollTo("contact-us")}
                      className="group flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition-colors duration-300 hover:bg-brand-50"
                    >
                      <span className="text-[12px] font-extrabold tabular-nums text-ink-mute transition-colors group-hover:text-accent-500">
                        11
                      </span>
                      <span className="min-w-0 flex-1 text-[13px] font-semibold leading-snug text-ink transition-colors group-hover:text-brand-600">
                        Contact Us
                      </span>
                      <ChevronRight className="size-3.5 shrink-0 -translate-x-1 text-ink-mute opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </button>
                  </li>
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
                  transition={{ duration: 0.6, delay: 0.12 + i * 0.06 }}
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
                      <h2 className="mt-1 text-[20px] font-extrabold leading-tight tracking-tight text-ink sm:text-[23px]">
                        {s.title}
                      </h2>
                    </div>
                  </div>

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

                  {/* Intro + points */}
                  {s.intro && (
                    <p className="relative mt-6 text-[15px] leading-relaxed text-ink-soft">
                      {s.intro}
                    </p>
                  )}

                  {s.points && (
                    <ul className="relative mt-4 space-y-3">
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

                  {s.outro && (
                    <p className="relative mt-5 rounded-2xl border border-line bg-canvas p-4 text-[14.5px] font-medium leading-relaxed text-ink">
                      {s.outro}
                    </p>
                  )}

                  {/* Sub-sections */}
                  {s.subs && (
                    <div className="relative mt-6 space-y-6">
                      {s.subs.map((sub) => (
                        <div key={sub.title}>
                          <h3 className="text-[15.5px] font-bold text-ink">
                            {sub.title}
                          </h3>
                          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                            {sub.intro}
                          </p>
                          <ul className="mt-3.5 space-y-3">
                            {sub.points.map((p) => (
                              <li key={p} className="flex items-start gap-3">
                                <span
                                  className={`mt-[7px] size-1.5 shrink-0 rounded-full bg-gradient-to-br ${s.gradient}`}
                                />
                                <p className="text-[15px] leading-relaxed text-ink-soft">
                                  {p}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bottom sweep */}
                  <span
                    className={`absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r ${s.gradient} transition-transform duration-500 group-hover:scale-x-100`}
                  />
                </motion.article>
              ))}

              {/* ---------- SECTION 11: CONTACT ---------- */}
              <motion.article
                id="contact-us"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="group relative scroll-mt-32 overflow-hidden rounded-[26px] border border-line bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_26px_58px_-26px_rgba(43,57,144,0.45)] sm:p-9"
              >
                <span className="pointer-events-none absolute -right-14 -top-14 size-32 rounded-full bg-gradient-to-br from-aqua-500 to-brand-600 opacity-[0.12] transition-transform duration-700 group-hover:scale-150" />
                <span className="pointer-events-none absolute -bottom-14 -left-14 size-32 rounded-full bg-gradient-to-br from-aqua-500 to-brand-600 opacity-[0.09] transition-transform duration-700 group-hover:scale-150" />

                <div className="relative flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-aqua-500 to-brand-600 text-white shadow-[0_12px_28px_-10px_rgba(43,57,144,0.5)] transition-transform duration-300 group-hover:scale-110">
                    <Headphones className="size-5" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-mute">
                      Section 11
                    </p>
                    <h2 className="mt-1 text-[20px] font-extrabold leading-tight tracking-tight text-ink sm:text-[23px]">
                      Contact Us
                    </h2>
                  </div>
                </div>

                <p className="relative mt-6 text-[15px] leading-relaxed text-ink-soft">
                  If you have any questions about this Privacy Policy or our data
                  practices, please contact us at:
                </p>

                <div className="relative mt-5 space-y-3">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="group/row flex items-center gap-3.5 rounded-2xl border border-line bg-canvas p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-white hover:shadow-[0_16px_36px_-18px_rgba(43,57,144,0.45)]"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-plum-600 text-white">
                      <Mail className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute">
                        Email
                      </p>
                      <p className="mt-0.5 truncate text-[14.5px] font-semibold text-ink transition-colors group-hover/row:text-brand-600">
                        {CONTACT_EMAIL}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3.5 rounded-2xl border border-line bg-canvas p-4">
                    <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-plum-600 to-accent-500 text-white">
                      <MapPin className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute">
                        Address
                      </p>
                      <p className="mt-0.5 text-[14.5px] font-semibold leading-relaxed text-ink">
                        {ADDRESS}
                      </p>
                    </div>
                  </div>
                </div>

                <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-aqua-500 to-brand-600 transition-transform duration-500 group-hover:scale-x-100" />
              </motion.article>

              {/* ---------- CTA ---------- */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.85 }}
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
                      <ShieldCheck className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-[20px] font-extrabold leading-tight tracking-tight sm:text-[24px]">
                        Want your data removed?
                      </h3>
                      <p className="mt-2 max-w-md text-[14.5px] text-white/70">
                        Write to us and we&apos;ll action your request as quickly as
                        we can.
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