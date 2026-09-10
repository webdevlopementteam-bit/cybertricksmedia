"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  ArrowRight, ChevronRight, Send, Check, MapPin, Clock,
  MessageSquare, Sparkles, Copy, ShieldCheck, Zap, Building2,
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

/* ================= CONFIG ================= */
const UPI_ID = "bharatbizmart@barodampay";

const WEB3FORMS_ACCESS_KEY = "75064bc8-0384-4b3b-9da8-d29f46f65e7b";
const THANK_YOU_PAGE = "/thank-you";

const PHONE_1 = "+91 92666 12221";
const PHONE_1_HREF = "tel:+919266612221";

const PHONE_2 = "011-461-20491";
const PHONE_2_HREF = "tel:01146120491";

const EMAIL = "info@cybertricksmedia.com";
const WHATSAPP = "https://wa.me/919266612221";

const SERVICES = [
  "AI Enabled Marketing",
  "Digital Marketing",
  "Film Production",
  "Affiliate Marketing",
  "Business Leads",
  "Web & App Development",
  "Branding & PR",
  "Something Else",
];

const BUDGETS = ["Under ₹25K", "₹25K – ₹1L", "₹1L – ₹5L", "₹5L+", "Not sure yet"];

const CONTACT_CARDS = [
  {
  Icon: null,
  fa: faPhone,
  label: "Call Us",
  value: (
    <span className="flex flex-col gap-1">
      <a href={PHONE_1_HREF} className="hover:text-brand-600 transition">
        {PHONE_1}
      </a>
      <a href={PHONE_2_HREF} className="hover:text-brand-600 transition">
        {PHONE_2}
      </a>
    </span>
  ),
  sub: "Mon–Sat, 10 AM – 7 PM",
  href: PHONE_1_HREF,
  gradient: "from-brand-600 to-plum-600",
},
  {
    Icon: null,
    fa: faEnvelope,
    label: "Email Us",
    value: EMAIL,
    sub: "We reply within 4 hours",
    href: `mailto:${EMAIL}`,
    gradient: "from-plum-600 to-accent-500",
  },
  {
    Icon: null,
    fa: faWhatsapp,
    label: "WhatsApp",
    value: "Chat with us",
    sub: "Fastest way to reach us",
    href: WHATSAPP,
    gradient: "from-aqua-500 to-brand-600",
  },
  {
    Icon: MapPin,
    fa: null,
    label: "Visit Us",
    value: "Pitampura, Delhi",
    sub: "Dimension Tower, West Enclave",
    href: "#map",
    gradient: "from-accent-500 to-plum-600",
  },
];

const PARTICLES = [
  { top: "16%", left: "8%",  color: "bg-aqua-400",   dur: 18, dx: 40,  dy: -30 },
  { top: "70%", left: "16%", color: "bg-accent-400", dur: 22, dx: -35, dy: 40  },
  { top: "26%", left: "88%", color: "bg-plum-400",   dur: 20, dx: 45,  dy: 35  },
  { top: "80%", left: "76%", color: "bg-aqua-300",   dur: 24, dx: -40, dy: -35 },
  { top: "48%", left: "50%", color: "bg-accent-300", dur: 19, dx: 30,  dy: 45  },
];

/* ================================================================
   PAGE
================================================================ */
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    service: "", budget: "", message: "",
  });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });
  const payRef = useRef(null);
  const payInView = useInView(payRef, { once: true, margin: "-100px" });

  /* Live IST clock */
  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    tick();
    const t = setInterval(tick, 30000);
    return () => clearInterval(t);
  }, []);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const filled = Object.entries(form).filter(
    ([k, v]) => k !== "company" && v.trim()
  ).length;
  const progress = Math.round((filled / 6) * 100);

  const submit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,

        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        service: form.service,
        budget: form.budget,
        message: form.message,

        subject: `New Project Brief from ${form.name}`,
        from_name: "Cybertricks Media Website",

        redirect: `${window.location.origin}${THANK_YOU_PAGE}`,
      }),
    });

    const result = await response.json();

    if (result.success) {
      window.location.href = THANK_YOU_PAGE;
    } else {
      console.error("Web3Forms Error:", result);
      alert("Something went wrong while submitting the form. Please try again.");
    }
  } catch (error) {
    console.error("Submission Error:", error);
    alert("Unable to submit the form. Please check your internet connection and try again.");
  }
};

  const copyUpi = () => {
    navigator.clipboard?.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const input =
    "w-full rounded-2xl border border-line bg-canvas px-4 py-3.5 text-[14.5px] text-ink outline-none transition-all duration-300 placeholder:text-ink-mute focus:border-accent-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(224,69,154,0.1)]";

  return (
    <>
            {/* ============================================================
          BANNER — DARK
      ============================================================ */}
      <section
        className="relative flex min-h-[520px] items-center overflow-hidden pb-20 pt-[160px] lg:min-h-[620px]"
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
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">

            {/* ---------- LEFT ---------- */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 text-[13px] text-white/50"
              >
                <Link href="/" className="transition hover:text-aqua-300">Home</Link>
                <ChevronRight className="size-3.5" />
                <span className="text-white/85">Contact Us</span>
              </motion.div>

              <motion.span
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-green-400" />
                </span>
                We&apos;re online · {time} IST
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22 }}
                className="mt-6 text-[38px] font-extrabold leading-[1.06] tracking-tight text-white sm:text-[52px] lg:text-[58px]"
              >
                Tell Us the Goal.{" "}
                <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
                  We&apos;ll Map the Route.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.34 }}
                className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/60"
              >
                No sales scripts, no 40-slide decks. Just a straight conversation
                about what you want to grow and how we&apos;d do it.
              </motion.p>

              {/* Quick chips */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.46 }}
                className="mt-9 flex flex-wrap items-center gap-2.5"
              >
                {["4-hour reply", "Free strategy call", "No lock-in contracts"].map(
                  (c, i) => (
                    <motion.span
                      key={c}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.8,
                      }}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-[13px] font-semibold text-white backdrop-blur-sm"
                    >
                      <Check className="size-3.5 text-aqua-300" strokeWidth={3} />
                      {c}
                    </motion.span>
                  )
                )}
              </motion.div>
            </div>

            {/* ---------- RIGHT: ILLUSTRATION ---------- */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-aqua-500/25 via-plum-500/20 to-accent-500/25 blur-[90px]" />

              {/* Rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute left-1/2 top-1/2 size-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute left-1/2 top-1/2 size-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.08]"
              />

              {/* Floating card — WhatsApp */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 top-4 z-20 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl"
              >
                <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-aqua-400 to-brand-600 text-white">
                  <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[13.5px] font-bold leading-none text-white">
                    Instant Reply
                  </p>
                  <p className="mt-1 text-[10.5px] text-white/55">On WhatsApp</p>
                </div>
              </motion.div>

              {/* Floating card — Response time */}
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                className="absolute -right-2 top-1/3 z-20 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl"
              >
                <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-accent-500 to-plum-600 text-white">
                  <Zap className="size-4" />
                </span>
                <div>
                  <p className="text-[13.5px] font-bold leading-none text-white">
                    4 Hours
                  </p>
                  <p className="mt-1 text-[10.5px] text-white/55">Avg. response</p>
                </div>
              </motion.div>

              {/* Floating card — Clients */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="absolute bottom-6 left-2 z-20 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl"
              >
                <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-plum-500 to-accent-500 text-white">
                  <MessageSquare className="size-4" />
                </span>
                <div>
                  <p className="text-[13.5px] font-bold leading-none text-white">
                    3,800+
                  </p>
                  <p className="mt-1 text-[10.5px] text-white/55">Conversations</p>
                </div>
              </motion.div>

              {/* Illustration */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 mx-auto w-full max-w-[420px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/contact-banners.png"
                  alt="Get in touch with Cybertricks Media"
                  className="h-auto w-full object-contain drop-shadow-[0_25px_50px_rgba(111,207,231,0.3)]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
      </section>

      {/* ============================================================
          CONTACT CARDS
      ============================================================ */}
      <section className="relative overflow-hidden bg-canvas pt-16">
        <div className="container-x relative z-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CARDS.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[24px] border border-line bg-white p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_26px_58px_-24px_rgba(43,57,144,0.45)]"
              >
                <div className={`pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-gradient-to-br ${c.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25`} />

                <span className={`relative grid size-12 place-items-center rounded-2xl bg-gradient-to-br ${c.gradient} text-white shadow-[0_12px_28px_-10px_rgba(43,57,144,0.5)] transition-transform duration-300 group-hover:scale-110`}>
                  {c.fa ? (
                    <FontAwesomeIcon icon={c.fa} className="h-5 w-5" />
                  ) : (
                    <c.Icon className="size-5" />
                  )}
                </span>

                <p className="relative mt-5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-mute">
                  {c.label}
                </p>
                <p className="relative mt-1.5 break-words text-[15px] font-bold text-ink">
                  {c.value}
                </p>
                <p className="relative mt-1 text-[12.5px] text-ink-soft">{c.sub}</p>

                <ArrowRight className="absolute bottom-6 right-6 size-4 text-ink-mute transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FORM + LIVE BRIEF PREVIEW
      ============================================================ */}
      <section ref={formRef} className="relative overflow-hidden bg-canvas py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(43,57,144,0.15) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 30%, #000 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 55% at 50% 30%, #000 30%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute -left-40 top-1/3 size-[430px] rounded-full bg-aqua-400/14 blur-[135px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[430px] rounded-full bg-accent-400/14 blur-[135px]" />

        <div className="container-x relative z-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">

            {/* ---------- FORM ---------- */}
            <motion.div
              initial={{ opacity: 0, x: -34 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-[30px] border border-line bg-white p-8 sm:p-10"
            >
              <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />

              <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-canvas px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600">
                <MessageSquare className="size-3.5" />
                Project Brief
              </span>

              <h2 className="mt-5 text-[26px] font-extrabold leading-tight tracking-tight text-ink sm:text-[32px]">
                Start with the basics.
              </h2>

              {/* Progress */}
              <div className="mt-6 flex items-center gap-3">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-line">
                  <motion.div
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4 }}
                    className="h-full rounded-full bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500"
                  />
                </div>
                <span className="shrink-0 text-[12.5px] font-bold text-ink-mute">
                  {progress}%
                </span>
              </div>

              <form onSubmit={submit} className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required value={form.name} onChange={set("name")} placeholder="Your name *" className={input} />
                  <input value={form.company} onChange={set("company")} placeholder="Company name" className={input} />
                  <input required type="email" value={form.email} onChange={set("email")} placeholder="Email address *" className={input} />
                  <input required type="tel" value={form.phone} onChange={set("phone")} placeholder="Phone number *" className={input} />
                </div>

                {/* Service pills */}
                <div>
                  <p className="mb-2.5 text-[12px] font-bold uppercase tracking-[0.12em] text-ink-mute">
                    What do you need?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm({ ...form, service: s })}
                        className={`rounded-full border px-3.5 py-2 text-[12.5px] font-semibold transition-all duration-300 ${
                          form.service === s
                            ? "border-transparent bg-gradient-to-r from-brand-600 to-plum-600 text-white shadow-[0_10px_24px_-10px_rgba(43,57,144,0.6)]"
                            : "border-line bg-canvas text-ink-soft hover:-translate-y-0.5 hover:text-brand-600"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget pills */}
                <div>
                  <p className="mb-2.5 text-[12px] font-bold uppercase tracking-[0.12em] text-ink-mute">
                    Monthly budget
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm({ ...form, budget: b })}
                        className={`rounded-full border px-3.5 py-2 text-[12.5px] font-semibold transition-all duration-300 ${
                          form.budget === b
                            ? "border-transparent bg-gradient-to-r from-plum-600 to-accent-500 text-white shadow-[0_10px_24px_-10px_rgba(224,69,154,0.6)]"
                            : "border-line bg-canvas text-ink-soft hover:-translate-y-0.5 hover:text-accent-600"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us about the project — what's the goal? *"
                  className={`${input} resize-none`}
                />

                <button type="submit" className="btn-shine w-full justify-center">
                  <span className="btn-shine-text">
                    {sent ? "Brief Received!" : "Send Project Brief"}
                    {sent ? <Check className="size-4" /> : <Send className="size-4" />}
                  </span>
                </button>

                <AnimatePresence>
                  {sent && (
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-center text-[13.5px] font-medium text-green-600"
                    >
                      Thanks! We&apos;ll get back to you within 4 working hours.
                    </motion.p>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

            {/* ---------- LIVE BRIEF PREVIEW ---------- */}
            <motion.div
              initial={{ opacity: 0, x: 34 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:sticky lg:top-32 lg:self-start"
            >
              <div
                className="relative overflow-hidden rounded-[30px] p-8 text-white sm:p-9"
                style={{
                  background:
                    "linear-gradient(140deg, #12163a 0%, #1a2152 40%, #241b52 70%, #2e1a48 100%)",
                }}
              >
                <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-accent-500/25 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 size-56 rounded-full bg-aqua-500/25 blur-3xl" />

                <span className="relative inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm">
                  <Sparkles className="size-3.5" />
                  Live Preview
                </span>

                <p className="relative mt-5 text-[13px] text-white/50">
                  This is what lands on our desk:
                </p>

                {/* Brief card */}
                <div className="relative mt-4 space-y-3.5 rounded-2xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur-xl">
                  <Row label="From" value={form.name || "—"} />
                  <Row label="Company" value={form.company || "—"} />
                  <Row label="Email" value={form.email || "—"} />
                  <Row label="Phone" value={form.phone || "—"} />
                  <Row label="Service" value={form.service || "—"} highlight />
                  <Row label="Budget" value={form.budget || "—"} highlight />

                  <div className="border-t border-white/10 pt-3.5">
                    <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/40">
                      The Goal
                    </p>
                    <p className="mt-1.5 min-h-[52px] text-[13.5px] leading-relaxed text-white/80">
                      {form.message || "Waiting for your message…"}
                    </p>
                  </div>
                </div>

                {/* Promises */}
                <div className="relative mt-7 space-y-3">
                  {[
                    { Icon: Zap, t: "Reply in 4 hours", d: "Working days, usually much sooner." },
                    { Icon: ShieldCheck, t: "No spam, ever", d: "One human reply. No drip sequences." },
                    { Icon: Building2, t: "Free strategy call", d: "30 minutes, no obligation to buy." },
                  ].map((p, i) => (
                    <motion.div
                      key={p.t}
                      initial={{ opacity: 0, x: 20 }}
                      animate={formInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-white/10 text-aqua-300">
                        <p.Icon className="size-4" />
                      </span>
                      <div>
                        <p className="text-[13.5px] font-bold text-white">{p.t}</p>
                        <p className="mt-0.5 text-[12.5px] text-white/50">{p.d}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================
          UPI PAYMENT
      ============================================================ */}
      <section ref={payRef} className="relative overflow-hidden bg-white py-20">
        <div className="pointer-events-none absolute -left-40 top-0 size-[430px] rounded-full bg-aqua-400/12 blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 size-[430px] rounded-full bg-accent-400/12 blur-[140px]" />

        <div className="container-x relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={payInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-5xl overflow-hidden rounded-[30px] border border-line bg-canvas p-8 sm:p-12"
          >
            <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
            <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-accent-400/16 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-aqua-400/18 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">

              {/* Left */}
              <div>
                <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600">
                  <ShieldCheck className="size-3.5" />
                  Secure Payment
                </span>

                <h2 className="mt-5 text-[28px] font-extrabold leading-tight tracking-tight text-ink sm:text-[36px]">
                  Already a client?{" "}
                  <span className="grad-text-anim">Pay in seconds.</span>
                </h2>

                <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-ink-soft">
                  Scan the code with any UPI app — GPay, PhonePe, Paytm, BHIM or your
                  bank app. Send us the screenshot and we&apos;ll share the invoice
                  the same day.
                </p>

                {/* UPI ID */}
                <div className="mt-7">
                  <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-mute">
                    Or pay to this UPI ID
                  </p>
                  <div className="mt-2.5 flex w-fit items-center gap-3 rounded-2xl border-2 border-dashed border-accent-300 bg-accent-50 px-5 py-3.5">
                    <span className="font-mono text-[14.5px] font-bold text-accent-600 sm:text-[15.5px]">
                      {UPI_ID}
                    </span>
                    <button
                      onClick={copyUpi}
                      aria-label="Copy UPI ID"
                      className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-accent-600 transition hover:bg-accent-500 hover:text-white"
                    >
                      {copied ? <Check className="size-4" /> : <Copy className="size-3.5" />}
                    </button>
                  </div>
                  {copied && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-[12.5px] font-medium text-green-600"
                    >
                      Copied to clipboard
                    </motion.p>
                  )}
                </div>

                {/* App logos */}
                <div className="mt-7">
                  <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-mute">
                    Works with
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2.5">
                    {["GPay", "PhonePe", "Paytm", "BHIM", "Amazon Pay"].map((a) => (
                      <span
                        key={a}
                        className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[12.5px] font-semibold text-ink-soft"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/how-to-pay"
                  className="group mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-brand-600 transition hover:text-accent-600"
                >
                  Other payment methods
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Right — SCANNER */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={payInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative mx-auto w-full max-w-[330px]"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -inset-5 rounded-[36px] bg-gradient-to-br from-aqua-400/30 via-plum-500/25 to-accent-500/30 blur-[50px]" />

                {/* Card */}
                <div className="relative overflow-hidden rounded-[28px] border border-line bg-white p-6 shadow-[0_30px_70px_-30px_rgba(43,57,144,0.5)]">
                  <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />

                  <p className="text-center text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-mute">
                    Scan to Pay
                  </p>

                  {/* QR */}
                  <div className="relative mt-5 overflow-hidden rounded-2xl bg-canvas p-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/scanner.jpg"
                      alt={`UPI QR code for ${UPI_ID}`}
                      className="h-auto w-full object-contain"
                    />

           

                    {/* Corner brackets */}
                    <span className="pointer-events-none absolute left-3 top-3 size-7 rounded-tl-lg border-l-[3px] border-t-[3px] border-aqua-500" />
                    <span className="pointer-events-none absolute right-3 top-3 size-7 rounded-tr-lg border-r-[3px] border-t-[3px] border-plum-500" />
                    <span className="pointer-events-none absolute bottom-3 left-3 size-7 rounded-bl-lg border-b-[3px] border-l-[3px] border-plum-500" />
                    <span className="pointer-events-none absolute bottom-3 right-3 size-7 rounded-br-lg border-b-[3px] border-r-[3px] border-accent-500" />
                  </div>

                  <p className="mt-5 text-center text-[15px] font-bold text-ink">
                    Cybertricks Media Pvt Ltd
                  </p>
                  <p className="mt-1 text-center font-mono text-[12px] text-ink-soft">
                    {UPI_ID}
                  </p>

                  <div className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-green-50 py-3">
                    <ShieldCheck className="size-4 text-green-600" />
                    <span className="text-[12.5px] font-semibold text-green-700">
                      100% Secure · Bank Verified
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          MAP
      ============================================================ */}
      <section id="map" className="relative overflow-hidden bg-canvas py-20">
        <div className="container-x relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]"
          >
            {/* Info */}
            <div className="relative overflow-hidden rounded-[28px] border border-line bg-white p-8">
              <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />

              <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-canvas px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600">
                <MapPin className="size-3.5" />
                Our Office
              </span>

              <h3 className="mt-5 text-[22px] font-extrabold leading-tight tracking-tight text-ink">
                Office Address
              </h3>

              <p className="mt-4 text-[14.5px] leading-relaxed text-ink-soft">
                201/7, 2nd Floor, Dimension Tower, Vardhaman Market, West Enclave,
                Pitampura, Delhi&nbsp;–&nbsp;110034
              </p>

              <div className="mt-6 space-y-3 border-t border-line pt-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <Clock className="size-4" />
                  </span>
                  <div>
                    <p className="text-[13.5px] font-bold text-ink">Mon – Sat</p>
                    <p className="text-[12.5px] text-ink-soft">10:00 AM – 7:00 PM</p>
                  </div>
                </div>

                <div className="group flex items-start gap-3">
  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-gradient-to-br group-hover:from-brand-600 group-hover:to-accent-500 group-hover:text-white">
    <FontAwesomeIcon icon={faPhone} className="h-3.5 w-3.5" />
  </span>

  <div>
    <a
      href={PHONE_1_HREF}
      className="block text-[13.5px] font-bold text-ink hover:text-brand-600"
    >
      {PHONE_1}
    </a>

    <a
      href={PHONE_2_HREF}
      className="mt-1 block text-[13.5px] font-bold text-ink hover:text-brand-600"
    >
      {PHONE_2}
    </a>

    <p className="mt-1 text-[12.5px] text-ink-soft">
      Call before visiting
    </p>
  </div>
</div>
              </div>

              <a
                href="https://maps.google.com/?q=Cybertricks+Media+Pvt+Ltd+Pitampura"
                target="_blank"
                rel="noreferrer"
                className="btn-shine mt-7 w-full justify-center"
              >
                <span className="btn-shine-text">
                  Get Directions
                  <ArrowRight className="size-4" />
                </span>
              </a>
            </div>

            {/* Map */}
            <div className="relative overflow-hidden rounded-[28px] border border-line bg-white p-2.5 shadow-[0_24px_60px_-30px_rgba(43,57,144,0.45)]">
              <iframe
                title="Cybertricks Media office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.8618468348786!2d77.1470095!3d28.693779000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0304b69c0ab1%3A0x458b36d9719370af!2sCybertricks%20Media%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1735219022178!5m2!1sen!2sin"
                className="h-[380px] w-full rounded-[20px] lg:h-full lg:min-h-[420px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ================= PREVIEW ROW ================= */
function Row({ label, value, highlight }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="shrink-0 text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/40">
        {label}
      </span>
      <motion.span
        key={value}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className={`truncate text-right text-[13.5px] font-semibold ${
          highlight && value !== "—" ? "text-accent-300" : "text-white"
        }`}
      >
        {value}
      </motion.span>
    </div>
  );
}