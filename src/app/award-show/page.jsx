"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  ArrowRight, ChevronRight, ChevronDown, X, Check, Trophy, Calendar,
  MapPin, Clock, Users, Sparkles, Loader2, Star, Award, Mic2, Ticket,
  Handshake, Building2, Send,
} from "lucide-react";

/* ================= CONFIG ================= */
const WEB3FORMS_KEY = "75064bc8-0384-4b3b-9da8-d29f46f65e7b"; 

const EVENT = {
  edition: "3rd Edition",
  host: "Mr. Sunny Rathore",
  title: "The Times of MSME Excellence",
  subtitle: "Awards & Business Conference 2026",
  lastDate: "October 31, 2026",
  eventDate: "December 2026",
  location: "Delhi",
  poweredBy: "BharatBizmart.com",
  poster: "/images/award-show/poster.jpg",
};

const APPLY_TYPES = [
  { value: "Sponsorship", label: "Sponsorship", Icon: Handshake, desc: "Brand visibility across the event" },
  { value: "Awardee", label: "Awardee / Nominee", Icon: Trophy, desc: "Nominate yourself or your company" },
  { value: "Delegate", label: "Delegate", Icon: Ticket, desc: "Attend the business conference" },
  { value: "Guest", label: "Guest", Icon: Mic2, desc: "Attend as an invited guest" },
];

const HONOURING = [
  "MSME", "SME", "Startups", "MSME Eco System",
  "Institutions", "Service Providers", "Individuals", "Hospitality",
];

const PARTNERS = [
  { name: "The Times of MSME", img: "/images/award-show/p-1.png" },
  { name: "Shighra AI", img: "/images/award-show/p-2.png" },
  { name: "Gen Next Films", img: "/images/award-show/p-3.png" },
  { name: "The K12 Times", img: "/images/award-show/p-4.png" },
];

const SPARKS = [
  { top: "12%", left: "6%",  size: 3, dur: 4.0 },
  { top: "24%", left: "18%", size: 2, dur: 5.5 },
  { top: "68%", left: "10%", size: 4, dur: 4.8 },
  { top: "40%", left: "88%", size: 3, dur: 5.2 },
  { top: "76%", left: "80%", size: 2, dur: 6.0 },
  { top: "18%", left: "72%", size: 3, dur: 4.4 },
  { top: "88%", left: "44%", size: 2, dur: 5.8 },
  { top: "8%",  left: "48%", size: 3, dur: 5.0 },
];

/* ================================================================
   PAGE
================================================================ */
export default function AwardShowPage() {
  const [open, setOpen] = useState(false);

  const detailRef = useRef(null);
  const detailInView = useInView(detailRef, { once: true, margin: "-100px" });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ============================================================
          HERO — BLACK & GOLD
      ============================================================ */}
      <section
        className="relative flex min-h-[620px] items-center overflow-hidden pb-24 pt-[170px] lg:min-h-[700px]"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 0%, #3d2a08 0%, #1a1103 40%, #0a0703 75%, #050301 100%)",
        }}
      >
        {/* Golden top glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#f5c451]/25 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 size-[420px] rounded-full bg-[#c9922e]/15 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 size-[420px] rounded-full bg-[#c9922e]/15 blur-[130px]" />

        {/* Sparkles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {SPARKS.map((s, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-[#ffd97a]"
              style={{
                top: s.top,
                left: s.left,
                width: s.size,
                height: s.size,
                boxShadow: "0 0 12px 2px rgba(255,217,122,0.8)",
              }}
              animate={{ opacity: [0.15, 1, 0.15], scale: [1, 1.8, 1] }}
              transition={{
                duration: s.dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        <div className="container-x relative z-10 text-center">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-[13px] text-[#d9b45e]/60"
          >
            <Link href="/" className="transition hover:text-[#ffd97a]">Home</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-[#ffd97a]/90">Award Show</span>
          </motion.div>

          {/* Presents */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-[13px] font-medium uppercase tracking-[0.3em] text-white/50"
          >
            Cybertricks Media &amp; Bharat Bizmart Present
          </motion.p>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mx-auto mt-5 max-w-4xl font-serif text-[36px] font-normal leading-[1.1] tracking-wide sm:text-[54px] lg:text-[64px]"
            style={{
              background:
                "linear-gradient(180deg, #fff8e1 0%, #ffd97a 35%, #d9a441 70%, #b8842b 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Nominate, Sponsor &amp; Exhibit
          </motion.h1>

          {/* Edition line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-6 text-[14px] font-medium text-white/70 sm:text-[16px]"
          >
            {EVENT.edition} by <span className="text-[#ffd97a]">{EVENT.host}</span>
          </motion.p>

          {/* Event name */}
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-3 text-[24px] font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[36px] lg:text-[42px]"
          >
            The Times of{" "}
            <span className="text-[#ffd97a]">MSME Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
            className="mt-2 text-[15px] font-semibold uppercase tracking-[0.14em] text-[#d9b45e] sm:text-[19px]"
          >
            {EVENT.subtitle}
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mx-auto mt-8 flex max-w-md items-center gap-4"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d9a441]/60" />
            <Star className="size-4 fill-[#ffd97a] text-[#ffd97a]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d9a441]/60" />
          </motion.div>

          {/* Date chips */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              { Icon: Clock, label: "Last Date", value: EVENT.lastDate },
              { Icon: Calendar, label: "Event", value: EVENT.eventDate },
              { Icon: MapPin, label: "Location", value: EVENT.location },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-3 rounded-2xl border border-[#d9a441]/25 bg-[#ffd97a]/[0.06] px-5 py-3 backdrop-blur-sm"
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#ffd97a] to-[#c9922e] text-[#1a1103]">
                  <c.Icon className="size-4" />
                </span>
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/40">
                    {c.label}
                  </p>
                  <p className="mt-0.5 text-[14px] font-bold text-white">{c.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button onClick={() => setOpen(true)} className="btn-gold">
              <span className="btn-gold-text">
                <Trophy className="size-4" />
                Apply Now
              </span>
            </button>

            <a
              href="#details"
              className="inline-flex items-center gap-2 rounded-full border border-[#d9a441]/40 px-7 py-4 text-[15px] font-semibold text-[#ffd97a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffd97a]/10"
            >
              Event Details
            </a>
          </motion.div>

          {/* Powered by */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-9 text-[12px] uppercase tracking-[0.2em] text-white/35"
          >
            Powered by <span className="text-[#d9b45e]">{EVENT.poweredBy}</span>
          </motion.p>
        </div>

        {/* Bottom gold line */}
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-[#ffd97a] to-transparent" />
      </section>

      {/* ============================================================
          POSTER + DETAILS
      ============================================================ */}
      <section
        id="details"
        ref={detailRef}
        className="relative overflow-hidden py-20"
        style={{
          background:
            "linear-gradient(180deg, #050301 0%, #0f0a02 40%, #140d03 100%)",
        }}
      >
        <div className="pointer-events-none absolute -left-40 top-1/4 size-[420px] rounded-full bg-[#c9922e]/12 blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[420px] rounded-full bg-[#ffd97a]/10 blur-[140px]" />

        <div className="container-x relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

            {/* ---------- POSTER (clickable) ---------- */}
            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={detailInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -inset-6 rounded-[36px] bg-gradient-to-br from-[#ffd97a]/25 via-[#c9922e]/18 to-[#8a5f1c]/20 blur-[60px]" />

              <button
                onClick={() => setOpen(true)}
                className="group relative block w-full overflow-hidden rounded-[26px] border-2 border-[#d9a441]/35 bg-[#0a0703] p-2 shadow-[0_30px_80px_-30px_rgba(217,164,65,0.5)] transition-all duration-500 hover:-translate-y-2 hover:border-[#ffd97a]/70"
              >
                <div className="relative overflow-hidden rounded-[20px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={EVENT.poster}
                    alt="The Times of MSME Excellence Awards 2026"
                    className="h-auto w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Click prompt */}
                  <div className="pointer-events-none absolute inset-0 grid place-items-center">
                    <span className="flex scale-90 items-center gap-3 rounded-full bg-gradient-to-r from-[#ffd97a] to-[#c9922e] px-7 py-4 text-[15px] font-bold text-[#1a1103] opacity-0 shadow-[0_16px_40px_-10px_rgba(255,217,122,0.7)] transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                      <Trophy className="size-4" />
                      Click to Apply
                    </span>
                  </div>

                  {/* Shine sweep */}
                  <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-1000 group-hover:left-[150%]" />
                </div>
              </button>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 -top-4 z-20 rounded-2xl border border-[#d9a441]/40 bg-[#140d03] px-5 py-3.5 shadow-[0_18px_44px_-18px_rgba(255,217,122,0.6)]"
              >
                <p className="text-[20px] font-extrabold leading-none text-[#ffd97a]">
                  2026
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/45">
                  {EVENT.edition}
                </p>
              </motion.div>
            </motion.div>

            {/* ---------- DETAILS ---------- */}
            <motion.div
              initial={{ opacity: 0, x: 34 }}
              animate={detailInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.15 }}
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[#d9a441]/30 bg-[#ffd97a]/[0.07] px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#ffd97a]">
                <Sparkles className="size-3.5" />
                Honouring Excellence
              </span>

              <h2 className="mt-6 text-[30px] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[40px]">
                Recognising the businesses{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(90deg, #fff8e1, #ffd97a, #d9a441)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  that build India.
                </span>
              </h2>

              <p className="mt-5 text-[16px] leading-relaxed text-white/55">
                A night that brings together MSME founders, policymakers, investors
                and service providers under one roof — followed by a full business
                conference the same day. Nominations are open across every category.
              </p>

              {/* Honouring chips */}
              <div className="mt-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/35">
                  Categories Honoured
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {HONOURING.map((h, i) => (
                    <motion.span
                      key={h}
                      initial={{ opacity: 0, y: 12 }}
                      animate={detailInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.35 + i * 0.06 }}
                      className="rounded-full border border-[#d9a441]/25 bg-[#ffd97a]/[0.05] px-3.5 py-1.5 text-[13px] font-medium text-white/75"
                    >
                      {h}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Apply types preview */}
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {APPLY_TYPES.map((t, i) => (
                  <motion.button
                    key={t.value}
                    initial={{ opacity: 0, y: 16 }}
                    animate={detailInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
                    onClick={() => setOpen(true)}
                    className="group flex items-center gap-3.5 rounded-2xl border border-[#d9a441]/20 bg-[#ffd97a]/[0.04] p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#ffd97a]/50 hover:bg-[#ffd97a]/[0.09]"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#ffd97a] to-[#c9922e] text-[#1a1103] transition-transform duration-300 group-hover:scale-110">
                      <t.Icon className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[14px] font-bold text-white">{t.label}</p>
                      <p className="mt-0.5 truncate text-[11.5px] text-white/45">
                        {t.desc}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={detailInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-9"
              >
                <button onClick={() => setOpen(true)} className="btn-gold">
                  <span className="btn-gold-text">
                    Submit Your Application
                    <ArrowRight className="size-4" />
                  </span>
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* ---------- PARTNERS ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={detailInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-16"
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#d9a441]/30" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">
                Presented Alongside
              </p>
              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#d9a441]/30" />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {PARTNERS.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={detailInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.08 }}
                  className="group grid aspect-[16/7] place-items-center rounded-2xl border border-[#d9a441]/25 bg-gradient-to-br from-[#ffd97a]/[0.12] to-[#c9922e]/[0.06] px-6 transition-all duration-400 hover:-translate-y-1 hover:border-[#ffd97a]/50"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.name}
                    className="max-h-[44px] w-full object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          APPLICATION MODAL
      ============================================================ */}
      <AnimatePresence>
        {open && <ApplyModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

/* ================================================================
   APPLICATION MODAL
================================================================ */
/* ================================================================
   APPLICATION MODAL
================================================================ */
function ApplyModal({ onClose }) {
  const [form, setForm] = useState({
    applyFor: "",
    name: "",
    mobile: "",
    company: "",
    address: "",
    willingToPay: false,
  });
  const [dropOpen, setDropOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [payError, setPayError] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const submit = async (e) => {
    e.preventDefault();

    if (!form.applyFor) {
      setError("Please select what you are applying for.");
      return;
    }

    if (!form.willingToPay) {
      setPayError(true);
      setError("Please confirm you are willing to pay the Media & PR charges.");
      return;
    }

    setLoading(true);
    setError("");
    setPayError(false);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Award Show 2026 — ${form.applyFor} Application from ${form.name}`,
          from_name: "Cybertricks Award Show",
          "Applying For": form.applyFor,
          "Full Name": form.name,
          "Mobile Number": form.mobile,
          "Company / Brand": form.company,
          "Full Address": form.address,
          "Willing to Pay Media & PR Charges": "Yes",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setDone(true);
      } else {
        setError("Something went wrong. Please try again or call us.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const input =
    "w-full rounded-2xl border border-[#d9a441]/25 bg-[#ffd97a]/[0.04] px-4 py-3.5 text-[14.5px] text-white outline-none transition-all duration-300 placeholder:text-white/30 focus:border-[#ffd97a]/70 focus:bg-[#ffd97a]/[0.08]";
  const lbl =
    "mb-2 block text-[11.5px] font-bold uppercase tracking-[0.1em] text-white/45";

  const selected = APPLY_TYPES.find((t) => t.value === form.applyFor);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      data-lenis-prevent
      className="no-scrollbar fixed inset-0 z-[70] overflow-y-auto overscroll-contain bg-black/85 backdrop-blur-md"
    >
      {/* Centering wrapper — allows scroll when content is taller than screen */}
      <div className="flex min-h-full items-center justify-center p-4 sm:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl overflow-hidden rounded-[28px] border border-[#d9a441]/30"
          style={{
            background:
              "radial-gradient(ellipse 100% 60% at 50% 0%, #2a1c06 0%, #140d03 50%, #0a0703 100%)",
          }}
        >
          {/* Gold top strip */}
          <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-[#c9922e] via-[#ffd97a] to-[#c9922e]" />

          {/* Glows */}
          <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-[#ffd97a]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 size-56 rounded-full bg-[#c9922e]/15 blur-3xl" />

          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-6 z-30 grid size-10 place-items-center rounded-full border border-[#d9a441]/30 bg-[#ffd97a]/10 text-[#ffd97a] transition hover:bg-[#ffd97a] hover:text-[#1a1103]"
          >
            <X className="size-4" />
          </button>

          <div className="relative p-7 sm:p-10">
            <AnimatePresence mode="wait">
              {done ? (
                /* ---------- SUCCESS ---------- */
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <motion.span
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="mx-auto grid size-20 place-items-center rounded-full bg-gradient-to-br from-[#ffd97a] to-[#c9922e] text-[#1a1103] shadow-[0_20px_50px_-15px_rgba(255,217,122,0.8)]"
                  >
                    <Check className="size-9" strokeWidth={3} />
                  </motion.span>

                  <h3 className="mt-7 text-[26px] font-extrabold text-white sm:text-[32px]">
                    Application Received!
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-white/55">
                    Thank you for applying as a{" "}
                    <span className="font-semibold text-[#ffd97a]">
                      {form.applyFor}
                    </span>
                    . Our team will review your application and get back to you
                    within 2 working days.
                  </p>

                  <button onClick={onClose} className="btn-gold mt-8">
                    <span className="btn-gold-text">Close</span>
                  </button>
                </motion.div>
              ) : (
                /* ---------- FORM ---------- */
                <motion.div key="form" initial={{ opacity: 1 }}>
                  <div className="text-center">
                    <span className="inline-flex items-center gap-2.5 rounded-full border border-[#d9a441]/30 bg-[#ffd97a]/[0.07] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#ffd97a]">
                      <Award className="size-3.5" />
                      Awards 2026
                    </span>

                    <h3 className="mt-5 text-[24px] font-extrabold leading-tight text-white sm:text-[30px]">
                      Apply for{" "}
                      <span
                        style={{
                          background:
                            "linear-gradient(90deg, #fff8e1, #ffd97a, #d9a441)",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: "transparent",
                        }}
                      >
                        The Times of MSME Excellence
                      </span>
                    </h3>

                    <p className="mt-2.5 text-[13.5px] text-white/45">
                      Last date to apply — {EVENT.lastDate}
                    </p>
                  </div>

                  <form onSubmit={submit} className="mt-8 space-y-5">
                    {/* ---------- DROPDOWN ---------- */}
                    <div className="relative">
                      <label className={lbl}>I want to apply for *</label>

                      <button
                        type="button"
                        onClick={() => setDropOpen((v) => !v)}
                        className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 ${
                          dropOpen
                            ? "border-[#ffd97a]/70 bg-[#ffd97a]/[0.08]"
                            : "border-[#d9a441]/25 bg-[#ffd97a]/[0.04]"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          {selected ? (
                            <>
                              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#ffd97a] to-[#c9922e] text-[#1a1103]">
                                <selected.Icon className="size-4" />
                              </span>
                              <span className="text-[14.5px] font-semibold text-white">
                                {selected.label}
                              </span>
                            </>
                          ) : (
                            <span className="text-[14.5px] text-white/35">
                              Select an option
                            </span>
                          )}
                        </span>
                        <ChevronDown
                          className={`size-4 shrink-0 text-[#ffd97a] transition-transform duration-300 ${
                            dropOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {dropOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.22 }}
                            className="absolute inset-x-0 top-full z-40 mt-2 overflow-hidden rounded-2xl border border-[#d9a441]/30 bg-[#140d03] p-2 shadow-[0_28px_70px_-20px_rgba(0,0,0,0.9)]"
                          >
                            {APPLY_TYPES.map((t) => (
                              <button
                                key={t.value}
                                type="button"
                                onClick={() => {
                                  setForm({ ...form, applyFor: t.value });
                                  setDropOpen(false);
                                  setError("");
                                }}
                                className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition-colors duration-200 ${
                                  form.applyFor === t.value
                                    ? "bg-[#ffd97a]/15"
                                    : "hover:bg-[#ffd97a]/[0.07]"
                                }`}
                              >
                                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[#ffd97a] to-[#c9922e] text-[#1a1103]">
                                  <t.Icon className="size-4" />
                                </span>
                                <span className="min-w-0">
                                  <span className="block text-[14px] font-bold text-white">
                                    {t.label}
                                  </span>
                                  <span className="mt-0.5 block text-[11.5px] text-white/45">
                                    {t.desc}
                                  </span>
                                </span>
                                {form.applyFor === t.value && (
                                  <Check className="ml-auto size-4 shrink-0 text-[#ffd97a]" />
                                )}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* ---------- FIELDS ---------- */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className={lbl}>Full Name *</label>
                        <input
                          required
                          value={form.name}
                          onChange={set("name")}
                          placeholder="Your full name"
                          className={input}
                        />
                      </div>
                      <div>
                        <label className={lbl}>Mobile Number *</label>
                        <input
                          required
                          type="tel"
                          value={form.mobile}
                          onChange={set("mobile")}
                          placeholder="10-digit mobile"
                          className={input}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={lbl}>Company or Brand Name *</label>
                      <input
                        required
                        value={form.company}
                        onChange={set("company")}
                        placeholder="Your company or brand"
                        className={input}
                      />
                    </div>

                    <div>
                      <label className={lbl}>Full Address *</label>
                      <textarea
                        required
                        rows={3}
                        value={form.address}
                        onChange={set("address")}
                        placeholder="Street, city, state and PIN code"
                        className={`${input} resize-none`}
                      />
                    </div>

                    {/* ---------- REQUIRED CHECKBOX ---------- */}
                    <motion.button
                      type="button"
                      animate={payError ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
                      transition={{ duration: 0.45 }}
                      onClick={() => {
                        setForm({ ...form, willingToPay: !form.willingToPay });
                        setPayError(false);
                        setError("");
                      }}
                      className={`flex w-full items-start gap-3.5 rounded-2xl border p-4 text-left transition-all duration-300 ${
                        form.willingToPay
                          ? "border-[#ffd97a]/60 bg-[#ffd97a]/[0.09]"
                          : payError
                          ? "border-red-400/70 bg-red-500/10"
                          : "border-[#d9a441]/25 bg-[#ffd97a]/[0.04] hover:border-[#d9a441]/45"
                      }`}
                    >
                      <span
                        className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border-2 transition-all duration-300 ${
                          form.willingToPay
                            ? "border-transparent bg-gradient-to-br from-[#ffd97a] to-[#c9922e] text-[#1a1103]"
                            : payError
                            ? "border-red-400"
                            : "border-[#d9a441]/50"
                        }`}
                      >
                        {form.willingToPay && (
                          <Check className="size-3" strokeWidth={4} />
                        )}
                      </span>
                      <span className="text-[14px] leading-relaxed text-white/80">
                        Yes, I am willing to pay Media &amp; PR charges for the
                        event.{" "}
                        <span className="font-bold text-[#ffd97a]">*</span>
                      </span>
                    </motion.button>

                    {/* ---------- ERROR ---------- */}
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-xl bg-red-500/15 px-4 py-3 text-center text-[13.5px] font-medium text-red-300"
                      >
                        {error}
                      </motion.p>
                    )}

                    {/* ---------- SUBMIT ---------- */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-gold w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      <span className="btn-gold-text">
                        {loading ? (
                          <>
                            <Loader2 className="size-4 animate-spin" />
                            Submitting…
                          </>
                        ) : (
                          <>
                            Submit Application
                            <Send className="size-4" />
                          </>
                        )}
                      </span>
                    </button>

                    <p className="text-center text-[12px] text-white/35">
                      Your details are used only for this event and never shared.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}