"use client";

import { useRef, useState, forwardRef, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Check,
  Trophy,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  Loader2,
  Star,
  Award,
  Mic2,
  Ticket,
  Handshake,
  Send,
  Building2,
  Link2,
  PlayCircle,
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
  poster: "/award-show.jpeg",
  trophyLeft: "/trophy.png",
  trophyRight: "/trophy.png",
};

const PARTNERS = [
  { name: "The Times of MSME", img: "/timesmsme.png" },
  { name: "Shighra AI", img: "/shingraai.png" },
  { name: "Gen Next Films", img: "/gnf.png" },
  { name: "The K12 Times", img: "/k12times.png" },
];

const SPARKS = [
  { top: "12%", left: "6%", size: 3, dur: 4.0 },
  { top: "24%", left: "18%", size: 2, dur: 5.5 },
  { top: "68%", left: "10%", size: 4, dur: 4.8 },
  { top: "40%", left: "88%", size: 3, dur: 5.2 },
  { top: "76%", left: "80%", size: 2, dur: 6.0 },
  { top: "18%", left: "72%", size: 3, dur: 4.4 },
  { top: "88%", left: "44%", size: 2, dur: 5.8 },
  { top: "8%", left: "48%", size: 3, dur: 5.0 },
];

/* ---------- Cards shown in the "Details" section (preview only) ---------- */
const PARTICIPATION_PREVIEW = [
  {
    value: "Sponsor",
    Icon: Handshake,
    desc: "Brand visibility across the event",
  },
  { value: "Awardee", Icon: Trophy, desc: "Nominate yourself or your company" },
  {
    value: "Exhibitor",
    Icon: Building2,
    desc: "Showcase your products & services",
  },
  { value: "Delegates", Icon: Ticket, desc: "Attend the business conference" },
  { value: "Guest", Icon: Mic2, desc: "Attend as an invited guest" },
];

/* ================================================================
   GOOGLE FORM — replicated field by field (every radio -> dropdown)
================================================================ */
const PARTICIPATION_AS_OPTIONS = [
  "Sponsor",
  "Awardee",
  "Exhibitor",
  "Delegates",
  "Guest",
  "Other",
];

const PARTICIPATION_TYPE_OPTIONS = [
  "Individual",
  "Company",
  "NGO",
  "Institution",
  "Exhibitor",
  "Visitor",
  "Other",
];

const YOU_ARE_A_OPTIONS = [
  "Manufacturer",
  "Supplier",
  "Trader",
  "Importer & Exporter",
  "Service Provider",
  "Institution",
  "Startup",
  "Hotel/Club/Bar/Resort",
  "Artist/Influencer",
  "Other",
];

const INDUSTRY_OPTIONS = [
  "Agriculture",
  "FMCG",
  "Hospitals, Medical & Pharma",
  "IT & Telecom Services",
  "Automobile",
  "Industrial Plants, Machinery & Equipment",
  "Edutech Service",
  "Institutions, Schools & Universities",
  "Fashion, Apparels & Clothing",
  "Media, Advertising, Publishing Services & Event Management",
  "Film & Animation",
  "Packaging Machines, Materials & Other Solutions",
  "Art, Craft, Handicrafts & Gifts",
  "Real Estate",
  "Digital Marketing, App Developments & Cyber Security",
  "Consumer Electronics, Household Appliances & Goods",
  "Travel, Tourism & Hospitality",
  "Financial & Business Consultants",
  "Health, Beauty & Wellness",
  "HR, Staffing & Recruitment",
  "E Vehicle & E Support System",
  "E Commerce & Retail Business",
  "Other Products & Machineries",
  "Individual",
  "Other Services",
  "NGO",
  "Home Decor",
  "Bathroom Fitting & Accessories",
  "Plants & Machinery",
  "Furniture/Home or Office Furnishing",
  "Luxury Items & Accessories",
  "Artists/Youtuber/Influencer",
  "Health, Fitness & Beauty",
  "Hotel, Bar & Restaurants",
  "School/University/Institute",
  "Sports & Games",
  "Interior & Exterior",
  "Service Providers",
  "Industrial Supplies",
  "Beverages",
  "Other",
];

const CATEGORY_INDIVIDUAL_OPTIONS = [
  "A. Young Entrepreneur of the Year",
  "B. Founder Of The Year",
  "C. Women Entrepreneur of the Year",
  "D. Innovator of the Year",
  "E. Global Entrepreneur of the Year",
  "F. Social Entrepreneur of the Year",
  "G. Creative Entrepreneur of the Year",
  "H. Star of the Year",
  "I. Bhartiya Udyog Ratna",
  "Other",
];

const CATEGORY_MSME_OPTIONS = [
  "A. SME Of the Year",
  "B. Young MSME Of the Year",
  "C. Innovative MSME of the Year",
  "D. Emerging MSME of the Year",
  "E. Digital MSME Of the Year",
  "F. Emerging Brand Of The Year",
  "Other",
];

// TODO: the "Category For Startup & Startup Eco System" field was already a
// dropdown on your Google Form but its option list wasn't visible in the
// screenshot ("Choose" with nothing expanded). Send me the options and I'll
// drop them in here.
const CATEGORY_STARTUP_OPTIONS = [
  "A. Startup of the year",
  "B. Reliable Startup of the year",
  "C. Best Tech Solution Startup of the Year",
  "D. Best Service Startup of the Year",
  "E. Best Co Working Space",
  "F. Best Mentor",
  "G. Emerging Angle Investor",
  "H. Best Biz Support System",
  "Other",
];

const CATEGORY_SPECIAL_OPTIONS = [
  "A. Silver Jubilee Award",
  "B. Golden Jubilee Award",
  "C. Best Family Business Award",
  "D. Life Time Achievement",
  "E. Best Client Service Award",
  "F. Business Star of the Year",
  "G. Brand Of The Year (Category)",
  "H. Businessman Of The Year (Category)",
  "I. Leader Of 2024",
  "J. Emerging Manufacturer",
  "K. Emerging Supplier",
  "L. Emerging Brand",
  "M. Emerging Exporter",
  "Other",
];

const GROWTH_OPTIONS = [
  "Upto 1 Cr",
  "1 Cr to 10 Cr",
  "10 Cr to 50 Cr",
  "50 Cr to 100 Cr",
  "100 Cr+",
];

// TODO: paste the correct YouTube links/IDs here — you said you'll add these yourself.
const EDITION_VIDEOS = [
  { title: "2023 Edition Highlights", youtubeId: "https://youtu.be/51NFPe_eivM" },
  { title: "2024 Edition Highlights", youtubeId: "https://youtu.be/j8V-vv2V9z4" },
];

/* ---------- shared field styles (used by both the form + preview) ---------- */
const inputCls =
  "w-full rounded-2xl border border-[#d9a441]/25 bg-[#ffd97a]/[0.04] px-4 py-3.5 text-[14.5px] text-white/90 outline-none transition-all duration-300 placeholder:text-white/35 focus:border-[#ffd97a]/70 focus:bg-[#ffd97a]/[0.08]";
const lblCls =
  "mb-2 block text-[11.5px] font-bold uppercase tracking-[0.1em] text-white/75";

/* ================================================================
   PAGE
================================================================ */
export default function AwardShowPage() {
  const detailRef = useRef(null);
  const detailInView = useInView(detailRef, { once: true, margin: "-100px" });

  const applyRef = useRef(null);
  const scrollToApply = () =>
    applyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      {/* ============================================================
          HERO — BLACK & GOLD
      ============================================================ */}
      <section
        className="relative flex min-h-[620px] items-center overflow-hidden py-20 lg:min-h-[700px]"
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

        {/* ---------- TROPHIES — vertically centered, swing 0deg -> 180deg -> 0deg ---------- */}
        <div
          className="pointer-events-none absolute inset-y-0 left-2 hidden w-[130px] items-center sm:flex lg:left-8 lg:w-[170px]"
          style={{ perspective: 900 }}
        >
          <motion.img
            src={EVENT.trophyLeft}
            alt=""
            aria-hidden
            className="w-full object-contain"
            style={{
              filter: "drop-shadow(0 18px 30px rgba(0,0,0,0.55))",
              transformStyle: "preserve-3d",
            }}
            animate={{ rotateY: [0, 180, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 right-2 hidden w-[130px] items-center sm:flex lg:right-8 lg:w-[170px]"
          style={{ perspective: 900 }}
        >
          <motion.img
            src={EVENT.trophyRight}
            alt=""
            aria-hidden
            className="w-full object-contain"
            style={{
              filter: "drop-shadow(0 18px 30px rgba(0,0,0,0.55))",
              transformStyle: "preserve-3d",
            }}
            animate={{ rotateY: [0, 180, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          />
        </div>

        <div className="container-x relative z-10 text-center">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-[13px] text-[#d9b45e]"
          >
            <Link href="/" className="transition hover:text-[#ffd97a]">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-[#ffd97a]">Award Show</span>
          </motion.div>

          {/* Presents */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-[13px] font-medium uppercase tracking-[0.3em] text-white/70"
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
            className="mt-6 text-[14px] font-medium text-white/85 sm:text-[16px]"
          >
            {EVENT.edition} by{" "}
            <span className="text-[#ffd97a]">{EVENT.host}</span>
          </motion.p>

          {/* Event name */}
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-3 text-[24px] font-extrabold uppercase leading-tight tracking-wide text-white sm:text-[36px] lg:text-[42px]"
          >
            The Times of <span className="text-[#ffd97a]">MSME Excellence</span>
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
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">
                    {c.label}
                  </p>
                  <p className="mt-0.5 text-[14px] font-bold text-white/90">
                    {c.value}
                  </p>
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
            <button onClick={scrollToApply} className="btn-gold">
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
            className="mt-9 text-[12px] uppercase tracking-[0.2em] text-white/60"
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
            {/* ---------- POSTER (links to apply section) ---------- */}
            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={detailInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -inset-6 rounded-[36px] bg-gradient-to-br from-[#ffd97a]/25 via-[#c9922e]/18 to-[#8a5f1c]/20 blur-[60px]" />

              <button
                onClick={scrollToApply}
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
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-4 -top-4 z-20 rounded-2xl border border-[#d9a441]/40 bg-[#140d03] px-5 py-3.5 shadow-[0_18px_44px_-18px_rgba(255,217,122,0.6)]"
              >
                <p className="text-[20px] font-extrabold leading-none text-[#ffd97a]">
                  2026
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/70">
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

              <p className="mt-5 text-[16px] leading-relaxed text-white/80">
                A night that brings together MSME founders, policymakers,
                investors and service providers under one roof — followed by a
                full business conference the same day. Nominations are open
                across every category.
              </p>

              {/* Participation preview */}
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {PARTICIPATION_PREVIEW.map((t, i) => (
                  <motion.button
                    key={t.value}
                    initial={{ opacity: 0, y: 16 }}
                    animate={detailInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.55 + i * 0.08 }}
                    onClick={scrollToApply}
                    className="group flex items-center gap-3.5 rounded-2xl border border-[#d9a441]/20 bg-[#ffd97a]/[0.04] p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#ffd97a]/50 hover:bg-[#ffd97a]/[0.09]"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#ffd97a] to-[#c9922e] text-[#1a1103] transition-transform duration-300 group-hover:scale-110">
                      <t.Icon className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[14px] font-bold text-white/90">
                        {t.value}
                      </p>
                      <p className="mt-0.5 truncate text-[11.5px] text-white/60">
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
                <button onClick={scrollToApply} className="btn-gold">
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
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">
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
                    className="max-h-[130px] w-full object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          APPLICATION FORM — inline section at the bottom of the page
      ============================================================ */}
      <ApplySection ref={applyRef} />

      {/* ============================================================
          EDITION VIDEOS — below the form
      ============================================================ */}
      <VideoSection />
    </>
  );
}


function SelectField({
  id,
  label,
  required,
  options,
  value,
  onSelect,
  otherValue,
  onOtherChange,
  placeholder = "Select an option",
  openField,
  setOpenField,
}) {
  const open = openField === id;
  const showOther = options.includes("Other") && value === "Other";

  return (
    <div className="relative">
      {label && (
        <label className={lblCls}>
          {label}
          {required ? " *" : ""}
        </label>
      )}

      <button
        type="button"
        onClick={() => setOpenField((v) => (v === id ? null : id))}
        className={`flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 ${
          open
            ? "border-[#ffd97a]/70 bg-[#ffd97a]/[0.08]"
            : "border-[#d9a441]/25 bg-[#ffd97a]/[0.04]"
        }`}
      >
        <span
          className={`truncate text-[14.5px] ${value ? "font-semibold text-white/90" : "text-white/45"}`}
        >
          {value || placeholder}
        </span>
        <ChevronDown
          className={`size-4 shrink-0 text-[#ffd97a] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="no-scrollbar absolute inset-x-0 top-full z-40 mt-2 max-h-72 overflow-y-auto overscroll-contain rounded-2xl border border-[#d9a441]/30 bg-[#140d03] p-2 shadow-[0_28px_70px_-20px_rgba(0,0,0,0.9)]"
            data-lenis-prevent
            style={{ touchAction: "pan-y" }}
            onWheel={(e) => {
              // Stop this wheel event from bubbling up to any page-level
              // smooth-scroll library so mouse-wheel scrolling works
              // reliably inside the dropdown, same as touch drag already does.
              e.stopPropagation();
              const el = e.currentTarget;
              el.scrollTop += e.deltaY;
            }}
          >
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onSelect(opt);
                  setOpenField(null);
                }}
                className={`flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-[13.5px] transition-colors duration-200 ${
                  value === opt
                    ? "bg-[#ffd97a]/15 text-white/90"
                    : "text-white/80 hover:bg-[#ffd97a]/[0.07]"
                }`}
              >
                <span>{opt}</span>
                {value === opt && (
                  <Check className="size-4 shrink-0 text-[#ffd97a]" />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {showOther && (
        <input
          value={otherValue}
          onChange={onOtherChange}
          placeholder="Please specify"
          className={`${inputCls} mt-3`}
        />
      )}
    </div>
  );
}

/* ================================================================
   Reusable: multi-select checkbox group (Growth / turnover)
================================================================ */
function CheckboxGroup({ label, options, values, onToggle }) {
  return (
    <div>
      <label className={lblCls}>{label}</label>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        {options.map((opt) => {
          const checked = values.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onToggle(opt)}
              className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-all duration-300 ${
                checked
                  ? "border-[#ffd97a]/60 bg-[#ffd97a]/[0.09]"
                  : "border-[#d9a441]/25 bg-[#ffd97a]/[0.04] hover:border-[#d9a441]/45"
              }`}
            >
              <span
                className={`grid size-5 shrink-0 place-items-center rounded-md border-2 transition-all duration-300 ${
                  checked
                    ? "border-transparent bg-gradient-to-br from-[#ffd97a] to-[#c9922e] text-[#1a1103]"
                    : "border-[#d9a441]/50"
                }`}
              >
                {checked && <Check className="size-3" strokeWidth={4} />}
              </span>
              <span className="text-[13.5px] text-white/85">{opt}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}


const ApplySection = forwardRef(function ApplySection(_props, ref) {
  const emptyForm = {
    email: "",
    participationAs: "",
    participationAsOther: "",
    participationType: "",
    participationTypeOther: "",
    youAreA: "",
    youAreAOther: "",
    industry: "",
    industryOther: "",
    categoryIndividual: "",
    categoryIndividualOther: "",
    categoryMsme: "",
    categoryMsmeOther: "",
    categoryStartup: "",
    categorySpecial: "",
    categorySpecialOther: "",
    customCategories: "",
    companyName: "",
    contactPerson: "",
    mobile: "",
    whatsapp: "",
    website: "",
    socialLinks: "",
    yearEstablished: "",
    growth: [],
    productName: "",
    additionalInfo: "",
    documentLink: "",
    agree: false,
  };

  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [agreeError, setAgreeError] = useState(false);
  const [openField, setOpenField] = useState(null);
  const successRef = useRef(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const toggleGrowth = (opt) =>
    setForm((f) => ({
      ...f,
      growth: f.growth.includes(opt)
        ? f.growth.filter((g) => g !== opt)
        : [...f.growth, opt],
    }));

  // When the thank-you card appears, bring it into view so the popup is
  // always seen properly, even on long forms / mobile screens.
  useEffect(() => {
    if (done && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [done]);

  const submit = async (e) => {
    e.preventDefault();

    if (
      !form.email ||
      !form.participationAs ||
      !form.companyName ||
      !form.contactPerson ||
      !form.mobile ||
      !form.whatsapp
    ) {
      setError("Please fill all required (*) fields.");
      return;
    }
    if (!form.agree) {
      setAgreeError(true);
      setError("Please agree to the Terms & Conditions to continue.");
      return;
    }

    setLoading(true);
    setError("");
    setAgreeError(false);

    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `Award Show 2026 — ${form.participationAs} Application from ${form.contactPerson}`,
        from_name: "Cybertricks Award Show",
        // Web3Forms uses this field to know where to reply to.
        Email: form.email,
        "Participation As":
          form.participationAs === "Other"
            ? form.participationAsOther
            : form.participationAs,
        "Participation Type":
          form.participationType === "Other"
            ? form.participationTypeOther
            : form.participationType,
        "You Are A":
          form.youAreA === "Other" ? form.youAreAOther : form.youAreA,
        Industry:
          form.industry === "Other" ? form.industryOther : form.industry,
        "Category (Individual)":
          form.categoryIndividual === "Other"
            ? form.categoryIndividualOther
            : form.categoryIndividual,
        "Category (MSME/SME)":
          form.categoryMsme === "Other"
            ? form.categoryMsmeOther
            : form.categoryMsme,
        "Category (Startup)": form.categoryStartup,
        "Category (Special Awards)":
          form.categorySpecial === "Other"
            ? form.categorySpecialOther
            : form.categorySpecial,
        "Customized Categories": form.customCategories,
        "Full Name of The Company": form.companyName,
        "Full Name Of Contact Person": form.contactPerson,
        "Mobile No.": form.mobile,
        "Whatsapp No.": form.whatsapp,
        Website: form.website,
        "Social Handle Links": form.socialLinks,
        "Year Of Establishment": form.yearEstablished,
        "Growth (Annual Turnover for 3 Years)": form.growth.join(", "),
        "Product Or Service Name": form.productName,
        "Additional Information": form.additionalInfo,
        "Document / Photo / Logo / Udyam Link": form.documentLink,
        // honeypot field required by Web3Forms spam protection — must stay empty
        botcheck: "",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
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

  return (
    <section
      id="apply"
      ref={ref}
      className="relative overflow-hidden py-12 sm:pt-20 sm:pb-10"
      style={{
        background:
          "radial-gradient(ellipse 100% 55% at 50% 0%, #2a1c06 0%, #140d03 45%, #0a0703 80%, #050301 100%)",
      }}
    >
      <div className="pointer-events-none absolute -left-32 top-1/3 size-[420px] rounded-full bg-[#c9922e]/12 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 size-[420px] rounded-full bg-[#ffd97a]/10 blur-[140px]" />
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#ffd97a] to-transparent" />

      <div className="container-x relative z-10">
        <div className="mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="done"
                ref={successRef}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="rounded-[28px] border border-[#d9a441]/30 bg-[#0a0703]/60 p-10 text-center backdrop-blur-sm sm:p-14"
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
                <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-white/80">
                  Thank you, {form.contactPerson}. Our team will review your
                  application and get back to you within 2 working days.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setForm(emptyForm);
                    setDone(false);
                  }}
                  className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full border border-[#d9a441]/40 px-6 py-3 text-[14px] font-semibold text-[#ffd97a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ffd97a]/10"
                >
                  Submit Another Application
                </button>
              </motion.div>
            ) : (
              <motion.div key="form" initial={{ opacity: 1 }}>
                <div className="text-center">
                  <span className="inline-flex items-center gap-2.5 rounded-full border border-[#d9a441]/30 bg-[#ffd97a]/[0.07] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#ffd97a]">
                    <Award className="size-3.5" />
                    Awards 2026
                  </span>

                  <h3 className="mt-5 text-[26px] font-extrabold leading-tight text-white sm:text-[34px]">
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

                  <p className="mt-2.5 text-[13.5px] text-white/70">
                    Last date to apply — {EVENT.lastDate}
                  </p>
                </div>

                {/* honeypot field for Web3Forms spam protection, kept hidden */}
                <form
                  onSubmit={submit}
                  className="mt-10 space-y-5 rounded-[28px] border border-[#d9a441]/25 bg-[#0a0703]/50 p-6 backdrop-blur-sm sm:p-9"
                >
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={lblCls}>
                        Full Name of The Company *
                      </label>
                      <input
                        required
                        value={form.companyName}
                        onChange={set("companyName")}
                        placeholder="Your company or brand"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className={lblCls}>
                        Full Name Of Contact Person *
                      </label>
                      <input
                        required
                        value={form.contactPerson}
                        onChange={set("contactPerson")}
                        placeholder="Your full name"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={lblCls}>Mobile No. *</label>
                      <input
                        required
                        type="tel"
                        value={form.mobile}
                        onChange={set("mobile")}
                        placeholder="10-digit mobile"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className={lblCls}>Whatsapp No. *</label>
                      <input
                        required
                        type="tel"
                        value={form.whatsapp}
                        onChange={set("whatsapp")}
                        placeholder="10-digit WhatsApp number"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={lblCls}>Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@company.com"
                      className={inputCls}
                    />
                  </div>

                  <SelectField
                    id="participationAs"
                    openField={openField}
                    setOpenField={setOpenField}
                    label="Participation As"
                    required
                    options={PARTICIPATION_AS_OPTIONS}
                    value={form.participationAs}
                    onSelect={(v) =>
                      setForm((f) => ({ ...f, participationAs: v }))
                    }
                    otherValue={form.participationAsOther}
                    onOtherChange={set("participationAsOther")}
                  />

                  <SelectField
                    id="participationType"
                    openField={openField}
                    setOpenField={setOpenField}
                    label="Participation Type"
                    options={PARTICIPATION_TYPE_OPTIONS}
                    value={form.participationType}
                    onSelect={(v) =>
                      setForm((f) => ({ ...f, participationType: v }))
                    }
                    otherValue={form.participationTypeOther}
                    onOtherChange={set("participationTypeOther")}
                  />

                  <SelectField
                    id="youAreA"
                    openField={openField}
                    setOpenField={setOpenField}
                    label="You Are a ?"
                    options={YOU_ARE_A_OPTIONS}
                    value={form.youAreA}
                    onSelect={(v) => setForm((f) => ({ ...f, youAreA: v }))}
                    otherValue={form.youAreAOther}
                    onOtherChange={set("youAreAOther")}
                  />

                  <SelectField
                    id="industry"
                    openField={openField}
                    setOpenField={setOpenField}
                    label="Your Industry ?"
                    options={INDUSTRY_OPTIONS}
                    value={form.industry}
                    onSelect={(v) => setForm((f) => ({ ...f, industry: v }))}
                    otherValue={form.industryOther}
                    onOtherChange={set("industryOther")}
                  />

                  <SelectField
                    id="categoryIndividual"
                    openField={openField}
                    setOpenField={setOpenField}
                    label="Category For Individual (Emerging)?"
                    options={CATEGORY_INDIVIDUAL_OPTIONS}
                    value={form.categoryIndividual}
                    onSelect={(v) =>
                      setForm((f) => ({ ...f, categoryIndividual: v }))
                    }
                    otherValue={form.categoryIndividualOther}
                    onOtherChange={set("categoryIndividualOther")}
                  />

                  <SelectField
                    id="categoryMsme"
                    openField={openField}
                    setOpenField={setOpenField}
                    label="Category For MSME/SME (Emerging)?"
                    options={CATEGORY_MSME_OPTIONS}
                    value={form.categoryMsme}
                    onSelect={(v) =>
                      setForm((f) => ({ ...f, categoryMsme: v }))
                    }
                    otherValue={form.categoryMsmeOther}
                    onOtherChange={set("categoryMsmeOther")}
                  />

                  <SelectField
                    id="categoryStartup"
                    openField={openField}
                    setOpenField={setOpenField}
                    label="Category For Startup & Startup Eco System"
                    options={CATEGORY_STARTUP_OPTIONS}
                    value={form.categoryStartup}
                    onSelect={(v) =>
                      setForm((f) => ({ ...f, categoryStartup: v }))
                    }
                    placeholder="Choose"
                  />

                  <SelectField
                    id="categorySpecial"
                    openField={openField}
                    setOpenField={setOpenField}
                    label="Category For Special Awards?"
                    options={CATEGORY_SPECIAL_OPTIONS}
                    value={form.categorySpecial}
                    onSelect={(v) =>
                      setForm((f) => ({ ...f, categorySpecial: v }))
                    }
                    otherValue={form.categorySpecialOther}
                    onOtherChange={set("categorySpecialOther")}
                  />

                  <div>
                    <label className={lblCls}>Customized Categories</label>
                    <input
                      value={form.customCategories}
                      onChange={set("customCategories")}
                      placeholder="Any custom award category"
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className={lblCls}>Website If Any</label>
                    <input
                      value={form.website}
                      onChange={set("website")}
                      placeholder="https://"
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className={lblCls}>Social Handle Links If Any</label>
                    <input
                      value={form.socialLinks}
                      onChange={set("socialLinks")}
                      placeholder="Instagram, LinkedIn, etc."
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className={lblCls}>Year Of Establishment</label>
                    <input
                      value={form.yearEstablished}
                      onChange={set("yearEstablished")}
                      placeholder="e.g. 2015"
                      className={inputCls}
                    />
                  </div>

                  <CheckboxGroup
                    label="Growth (Annual Turnover for 3 Years)"
                    options={GROWTH_OPTIONS}
                    values={form.growth}
                    onToggle={toggleGrowth}
                  />

                  <div>
                    <label className={lblCls}>Product Or Service Name</label>
                    <input
                      value={form.productName}
                      onChange={set("productName")}
                      placeholder="What do you offer"
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className={lblCls}>
                      Additional Information If Any or Comment
                    </label>
                    <textarea
                      rows={3}
                      value={form.additionalInfo}
                      onChange={set("additionalInfo")}
                      placeholder="Anything else we should know"
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {/* ---------- DOCUMENT LINK (replaces file upload —
                       Web3Forms free plan doesn't support file attachments) ---------- */}
                  <div>
                    <label className={lblCls}>
                      Document Link (Photo, Logo, Udyam, MSME etc if any)
                    </label>
                    <div className="flex items-center gap-3 rounded-2xl border border-[#d9a441]/25 bg-[#ffd97a]/[0.04] px-4 py-3.5 transition-all duration-300 focus-within:border-[#ffd97a]/70 focus-within:bg-[#ffd97a]/[0.08]">
                      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#ffd97a] to-[#c9922e] text-[#1a1103]">
                        <Link2 className="size-4" />
                      </span>
                      <input
                        type="url"
                        value={form.documentLink}
                        onChange={set("documentLink")}
                        placeholder="Paste Google Drive / shareable link here"
                        className="w-full bg-transparent text-[14.5px] text-white/90 outline-none placeholder:text-white/35"
                      />
                    </div>
                    <p className="mt-2 text-[11.5px] text-white/50">
                      Upload your file to Google Drive (or similar) first, set
                      sharing to "Anyone with the link", then paste the link
                      here.
                    </p>
                  </div>

                  {/* ---------- REQUIRED CHECKBOX ---------- */}
                  <motion.button
                    type="button"
                    animate={
                      agreeError ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }
                    }
                    transition={{ duration: 0.45 }}
                    onClick={() => {
                      setForm((f) => ({ ...f, agree: !f.agree }));
                      setAgreeError(false);
                      setError("");
                    }}
                    className={`flex w-full items-start gap-3.5 rounded-2xl border p-4 text-left transition-all duration-300 ${
                      form.agree
                        ? "border-[#ffd97a]/60 bg-[#ffd97a]/[0.09]"
                        : agreeError
                          ? "border-red-400/70 bg-red-500/10"
                          : "border-[#d9a441]/25 bg-[#ffd97a]/[0.04] hover:border-[#d9a441]/45"
                    }`}
                  >
                    <span
                      className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border-2 transition-all duration-300 ${
                        form.agree
                          ? "border-transparent bg-gradient-to-br from-[#ffd97a] to-[#c9922e] text-[#1a1103]"
                          : agreeError
                            ? "border-red-400"
                            : "border-[#d9a441]/50"
                      }`}
                    >
                      {form.agree && (
                        <Check className="size-3" strokeWidth={4} />
                      )}
                    </span>
                    <span className="text-[14px] leading-relaxed text-white/85">
                      Terms &amp; Conditions — I AGREE{" "}
                      <span className="font-bold text-[#ffd97a]">*</span>
                    </span>
                  </motion.button>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl bg-red-500/15 px-4 py-3 text-center text-[13.5px] font-medium text-red-300"
                    >
                      {error}
                    </motion.p>
                  )}

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

                  <p className="text-center text-[12px] text-white/50">
                    Your details are used only for this event and never shared.
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Global helper: hides scrollbars everywhere this class is used,
          instead of showing the site's purple/pink theme scrollbar on
          this gold-themed page. Scrolling itself still works fully. */}
      <style>{`
        .no-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE / old Edge */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, new Edge */
        }
      `}</style>
    </section>
  );
});


function VideoSection() {

  const getYouTubeId = (input) => {
    if (!input) return "";
    const trimmed = input.trim();
    // Already a bare ID (no slashes/dots) — use as-is.
    if (!/[./]/.test(trimmed)) return trimmed;

    const patterns = [
      /youtu\.be\/([^?&/]+)/,
      /youtube\.com\/watch\?v=([^&]+)/,
      /youtube\.com\/embed\/([^?&/]+)/,
      /youtube\.com\/shorts\/([^?&/]+)/,
    ];
    for (const re of patterns) {
      const match = trimmed.match(re);
      if (match) return match[1];
    }
    return trimmed;
  };

  return (
    <section
      className="relative overflow-hidden pt-10 pb-20"
      style={{
        background: "linear-gradient(180deg, #050301 0%, #0a0703 100%)",
      }}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-[#ffd97a]/8 blur-[140px]" />

      <div className="container-x relative z-10">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-[#d9a441]/30 bg-[#ffd97a]/[0.07] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#ffd97a]">
            <PlayCircle className="size-3.5" />
            Watch
          </span>
          <h2 className="mt-5 text-[28px] font-extrabold text-white sm:text-[36px]">
            Edition Highlights
          </h2>
          <p className="mt-2 text-[14.5px] text-white/70">
            A look back at the moments from our previous edition.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {EDITION_VIDEOS.map((v, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[22px] border border-[#d9a441]/25 bg-[#0a0703] shadow-[0_20px_60px_-25px_rgba(217,164,65,0.4)]"
            >
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${getYouTubeId(v.youtubeId)}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="px-4 py-3 text-[13px] font-semibold text-white/85">
                {v.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}