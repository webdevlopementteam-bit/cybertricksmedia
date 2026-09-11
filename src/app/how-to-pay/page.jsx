"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Script from "next/script";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ChevronRight,
  Check,
  Copy,
  ShieldCheck,
  CreditCard,
  QrCode,
  Landmark,
  Loader2,
  Sparkles,
  FileText,
  Clock,
  Headphones,
} from "lucide-react";

/* ================= CONFIG — apni details daal do ================= */
const RAZORPAY_KEY = "rzp_live_RnTQx98kmhZ9VX";
const COMPANY = "Cybertricks Media Pvt Ltd";
const UPI_ID = "cybertricksmedi101500.rzp@rxairtel";
const SUPPORT_PHONE = "+91 92666 12221";
const SUPPORT_EMAIL = "info@cybertricksmedia.com";

const BANK = [
  { label: "Account Name", value: "Cybertricks Media Pvt Ltd" },
  { label: "Account Number", value: "88800796664" },
  { label: "IFSC Code", value: "IDFB0020225" },
  { label: "Bank Name", value: "IDFC FIRST BANK" },
  { label: "Branch", value: "No H-3/27, Ground Floor, Rohini Residential Scheme, Nearby Gray Saffron Hotel, Sector 18, New Delhi 110089 (India)" },
];

const QUICK_AMOUNTS = [5000, 10000, 25000, 50000];

const METHODS = [
  {
    key: "card",
    label: "Card / Netbanking",
    Icon: CreditCard,
    sub: "Instant via Razorpay",
    gradient: "from-brand-600 to-plum-600",
  },
  {
    key: "upi",
    label: "UPI / QR Scan",
    Icon: QrCode,
    sub: "GPay, PhonePe, Paytm",
    gradient: "from-plum-600 to-accent-500",
  },
  {
    key: "bank",
    label: "Bank Transfer",
    Icon: Landmark,
    sub: "NEFT, RTGS, IMPS",
    gradient: "from-aqua-500 to-brand-600",
  },
];

const STEPS = [
  {
    n: "01",
    t: "Fill the details",
    d: "Tell us what the payment is for and enter the amount from your invoice.",
    Icon: FileText,
  },
  {
    n: "02",
    t: "Pay securely",
    d: "Card, UPI, netbanking or wallet — all handled by Razorpay's secure gateway.",
    Icon: ShieldCheck,
  },
  {
    n: "03",
    t: "Get your receipt",
    d: "Invoice and payment receipt land in your inbox the same working day.",
    Icon: Clock,
  },
];

const PARTICLES = [
  { top: "16%", left: "8%", color: "bg-aqua-400", dur: 18, dx: 40, dy: -30 },
  { top: "70%", left: "16%", color: "bg-accent-400", dur: 22, dx: -35, dy: 40 },
  { top: "26%", left: "88%", color: "bg-plum-400", dur: 20, dx: 45, dy: 35 },
  { top: "80%", left: "76%", color: "bg-aqua-300", dur: 24, dx: -40, dy: -35 },
  { top: "48%", left: "50%", color: "bg-accent-300", dur: 19, dx: 30, dy: 45 },
];

const EMPTY = {
  payment_for: "",
  amount: "",
  first_name: "",
  last_name: "",
  company: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  country: "India",
  mobile: "",
  email: "",
  details: "",
};

export default function HowToPayPage() {
  const [tab, setTab] = useState("card");
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(null);
  const [copied, setCopied] = useState(null);
  const [rzpReady, setRzpReady] = useState(false);

  const secRef = useRef(null);
  const inView = useInView(secRef, { once: true, margin: "-100px" });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const copy = (val, key) => {
    navigator.clipboard?.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  /* ---------- RAZORPAY ---------- */
  const startPayment = async (e) => {
    e.preventDefault();
    if (!window.Razorpay) {
      alert("Payment gateway is still loading. Please try again in a moment.");
      return;
    }

    setLoading(true);

    const options = {
      key: RAZORPAY_KEY,
      amount: Math.round(Number(form.amount) * 100),
      currency: "INR",
      name: COMPANY,
      description: form.payment_for || "Service Payment",
      image: "/logo.png",
      prefill: {
        name: `${form.first_name} ${form.last_name}`.trim(),
        email: form.email,
        contact: form.mobile,
      },
      notes: {
        company: form.company,
        address: `${form.address}, ${form.city}, ${form.state} ${form.zip}, ${form.country}`,
        details: form.details,
      },
      theme: { color: "#2B3990" },
      modal: {
        ondismiss: () => setLoading(false),
      },
      handler: async (response) => {
        try {
          await fetch("/api/payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...form,
              payment_id: response.razorpay_payment_id,
            }),
          });
        } catch (err) {
          console.error("Record failed:", err);
        }
        setLoading(false);
        setDone(response.razorpay_payment_id);
        setForm(EMPTY);
        window.scrollTo({ top: 400, behavior: "smooth" });
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", () => setLoading(false));
    rzp.open();
  };

  const input =
    "w-full rounded-2xl border border-line bg-canvas px-4 py-3.5 text-[14.5px] text-ink outline-none transition-all duration-300 placeholder:text-ink-mute focus:border-accent-400 focus:bg-white focus:shadow-[0_0_0_4px_rgba(224,69,154,0.1)]";
  const lbl =
    "mb-2 block text-[12px] font-bold uppercase tracking-[0.1em] text-ink-mute";

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
        onLoad={() => setRzpReady(true)}
      />

      {/* ============================================================
          BANNER — DARK
      ============================================================ */}
      <section
        className="relative flex min-h-[520px] items-center overflow-hidden py-16 lg:min-h-[600px]"
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
              transition={{
                duration: p.dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8,
              }}
            />
          ))}
        </div>

        <div className="container-x relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
            {/* LEFT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 text-[13px] text-white/50"
              >
                <Link href="/" className="transition hover:text-aqua-300">
                  Home
                </Link>
                <ChevronRight className="size-3.5" />
                <span className="text-white/85">How To Pay</span>
              </motion.div>

              <motion.span
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 }}
                className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm"
              >
                <ShieldCheck className="size-3.5" />
                256-bit Secure · Razorpay Verified
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22 }}
                className="mt-6 text-[38px] font-extrabold leading-[1.06] tracking-tight text-white sm:text-[52px] lg:text-[56px]"
              >
                Three Ways to Pay.{" "}
                <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
                  All of Them Take a Minute.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.34 }}
                className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/60"
              >
                Card, UPI or bank transfer — pick whichever is easiest. Your
                invoice and receipt reach you the same working day.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.46 }}
                className="mt-9 flex flex-wrap items-center gap-2.5"
              >
                {[
                  "No hidden charges",
                  "GST invoice included",
                  "Instant confirmation",
                ].map((c, i) => (
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
                ))}
              </motion.div>
            </div>

            {/* RIGHT — ILLUSTRATION */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative hidden lg:block"
            >
              <div className="pointer-events-none absolute left-1/2 top-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-aqua-500/25 via-plum-500/20 to-accent-500/25 blur-[90px]" />

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

              {/* Floating chips */}
              {[
                {
                  Icon: CreditCard,
                  label: "Card / Netbanking",
                  cls: "-left-4 top-4",
                  d: 4.5,
                  dir: -14,
                  grad: "from-brand-600 to-plum-600",
                },
                {
                  Icon: QrCode,
                  label: "UPI / QR Scan",
                  cls: "-right-2 top-1/3",
                  d: 5.5,
                  dir: 16,
                  grad: "from-plum-600 to-accent-500",
                },
                {
                  Icon: Landmark,
                  label: "Bank Transfer",
                  cls: "bottom-6 left-2",
                  d: 5.0,
                  dir: -12,
                  grad: "from-aqua-500 to-brand-600",
                },
              ].map((c, i) => (
                <motion.div
                  key={c.label}
                  animate={{ y: [0, c.dir, 0] }}
                  transition={{
                    duration: c.d,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.6,
                  }}
                  className={`absolute z-20 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl ${c.cls}`}
                >
                  <span
                    className={`grid size-9 place-items-center rounded-xl bg-gradient-to-br ${c.grad} text-white`}
                  >
                    <c.Icon className="size-4" />
                  </span>
                  <p className="text-[13px] font-bold text-white">{c.label}</p>
                </motion.div>
              ))}

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 mx-auto w-full max-w-[420px]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/pay-banner.png"
                  alt="Cybertricks Media payment options"
                  className="h-auto w-full object-contain drop-shadow-[0_25px_50px_rgba(111,207,231,0.3)]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
      </section>

      {/* ============================================================
          METHOD TABS + CONTENT
      ============================================================ */}
      <section
        ref={secRef}
        className="relative overflow-hidden bg-canvas py-20"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(43,57,144,0.16) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "radial-gradient(ellipse 75% 50% at 50% 10%, #000 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 50% at 50% 10%, #000 30%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute -left-40 top-1/3 size-[440px] rounded-full bg-aqua-400/14 blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 bottom-1/4 size-[440px] rounded-full bg-accent-400/14 blur-[140px]" />

        <div className="container-x relative z-10">
          {/* ---------- SUCCESS BANNER ---------- */}
          <AnimatePresence>
            {done && (
              <motion.div
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-10 overflow-hidden"
              >
                <div className="flex flex-col items-start gap-4 rounded-[24px] border-2 border-green-200 bg-green-50 p-7 sm:flex-row sm:items-center">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-green-500 text-white">
                    <Check className="size-6" strokeWidth={3} />
                  </span>
                  <div className="flex-1">
                    <p className="text-[18px] font-extrabold text-green-800">
                      Payment successful. Thank you!
                    </p>
                    <p className="mt-1 text-[14px] text-green-700">
                      Payment ID:{" "}
                      <span className="font-mono font-bold">{done}</span> — save
                      this for your records. Invoice reaches your inbox today.
                    </p>
                  </div>
                  <button
                    onClick={() => setDone(null)}
                    className="shrink-0 rounded-full bg-white px-5 py-2.5 text-[13.5px] font-semibold text-green-700"
                  >
                    Make Another Payment
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ---------- METHOD CARDS ---------- */}
          <div className="grid gap-4 sm:grid-cols-3">
            {METHODS.map((m, i) => (
              <motion.button
                key={m.key}
                initial={{ opacity: 0, y: 26 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                onClick={() => setTab(m.key)}
                className={`group relative overflow-hidden rounded-[24px] border p-6 text-left transition-all duration-400 ${
                  tab === m.key
                    ? "border-transparent bg-white shadow-[0_26px_58px_-24px_rgba(43,57,144,0.5)]"
                    : "border-line bg-white/60 hover:-translate-y-1 hover:bg-white"
                }`}
              >
                {tab === m.key && (
                  <motion.span
                    layoutId="pay-bar"
                    className={`absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r ${m.gradient}`}
                    transition={{ type: "spring", stiffness: 300, damping: 28 }}
                  />
                )}

                <span
                  className={`grid size-12 place-items-center rounded-2xl transition-all duration-400 ${
                    tab === m.key
                      ? `bg-gradient-to-br ${m.gradient} text-white shadow-[0_12px_28px_-10px_rgba(43,57,144,0.5)]`
                      : "bg-brand-50 text-brand-600 group-hover:scale-110"
                  }`}
                >
                  <m.Icon className="size-5" />
                </span>

                <p
                  className={`mt-4 text-[16px] font-bold transition-colors ${
                    tab === m.key ? "text-brand-600" : "text-ink"
                  }`}
                >
                  {m.label}
                </p>
                <p className="mt-1 text-[13px] text-ink-soft">{m.sub}</p>
              </motion.button>
            ))}
          </div>

          {/* ---------- PANEL ---------- */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {/* ============ RAZORPAY FORM ============ */}
              {tab === "card" && (
                <motion.div
                  key="card"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4 }}
                  className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr]"
                >
                  {/* FORM */}
                  <div className="relative overflow-hidden rounded-[30px] border border-line bg-white p-8 sm:p-10">
                    <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />

                    <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-canvas px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600">
                      <CreditCard className="size-3.5" />
                      Payment Details
                    </span>

                    <h2 className="mt-5 text-[26px] font-extrabold leading-tight tracking-tight text-ink sm:text-[32px]">
                      Pay online in{" "}
                      <span className="grad-text-anim">under a minute.</span>
                    </h2>

                    <form onSubmit={startPayment} className="mt-8 space-y-5">
                      {/* Payment for */}
                      <div>
                        <label className={lbl}>Payment For *</label>
                        <input
                          required
                          value={form.payment_for}
                          onChange={set("payment_for")}
                          placeholder="e.g. SEO Retainer — March 2026 / Invoice #CTM-1042"
                          className={input}
                        />
                      </div>

                      {/* Amount */}
                      <div>
                        <label className={lbl}>Amount (₹) *</label>
                        <input
                          required
                          type="number"
                          min="1"
                          value={form.amount}
                          onChange={set("amount")}
                          placeholder="Enter amount as per invoice"
                          className={input}
                        />
                        <div className="mt-2.5 flex flex-wrap gap-2">
                          {QUICK_AMOUNTS.map((a) => (
                            <button
                              key={a}
                              type="button"
                              onClick={() =>
                                setForm({ ...form, amount: String(a) })
                              }
                              className={`rounded-full border px-3.5 py-1.5 text-[12.5px] font-semibold transition-all duration-300 ${
                                form.amount === String(a)
                                  ? "border-transparent bg-gradient-to-r from-brand-600 to-plum-600 text-white"
                                  : "border-line bg-canvas text-ink-soft hover:-translate-y-0.5 hover:text-brand-600"
                              }`}
                            >
                              ₹{a.toLocaleString("en-IN")}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Name */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className={lbl}>First Name *</label>
                          <input
                            required
                            value={form.first_name}
                            onChange={set("first_name")}
                            placeholder="First name"
                            className={input}
                          />
                        </div>
                        <div>
                          <label className={lbl}>Last Name</label>
                          <input
                            value={form.last_name}
                            onChange={set("last_name")}
                            placeholder="Last name"
                            className={input}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={lbl}>Company Name</label>
                        <input
                          value={form.company}
                          onChange={set("company")}
                          placeholder="Company / business name"
                          className={input}
                        />
                      </div>

                      <div>
                        <label className={lbl}>Address</label>
                        <input
                          value={form.address}
                          onChange={set("address")}
                          placeholder="Street address"
                          className={input}
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-3">
                        <div>
                          <label className={lbl}>City</label>
                          <input
                            value={form.city}
                            onChange={set("city")}
                            placeholder="City"
                            className={input}
                          />
                        </div>
                        <div>
                          <label className={lbl}>State</label>
                          <input
                            value={form.state}
                            onChange={set("state")}
                            placeholder="State"
                            className={input}
                          />
                        </div>
                        <div>
                          <label className={lbl}>Zip Code</label>
                          <input
                            value={form.zip}
                            onChange={set("zip")}
                            placeholder="PIN code"
                            className={input}
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-3">
                        <div>
                          <label className={lbl}>Country</label>
                          <input
                            value={form.country}
                            onChange={set("country")}
                            placeholder="Country"
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
                        <div>
                          <label className={lbl}>Email *</label>
                          <input
                            required
                            type="email"
                            value={form.email}
                            onChange={set("email")}
                            placeholder="you@company.com"
                            className={input}
                          />
                        </div>
                      </div>

                      <div>
                        <label className={lbl}>Other Details</label>
                        <textarea
                          rows={3}
                          value={form.details}
                          onChange={set("details")}
                          placeholder="GSTIN, PO number or anything else we should note"
                          className={`${input} resize-none`}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading || !rzpReady}
                        className="btn-shine w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        <span className="btn-shine-text">
                          {loading ? (
                            <>
                              <Loader2 className="size-4 animate-spin" />
                              Opening gateway…
                            </>
                          ) : !rzpReady ? (
                            <>
                              <Loader2 className="size-4 animate-spin" />
                              Loading gateway…
                            </>
                          ) : (
                            <>
                              Proceed to Pay{" "}
                              {form.amount
                                ? `₹${Number(form.amount).toLocaleString("en-IN")}`
                                : ""}
                              <ArrowRight className="size-4" />
                            </>
                          )}
                        </span>
                      </button>

                      <p className="flex items-center justify-center gap-2 text-[12.5px] text-ink-mute">
                        <ShieldCheck className="size-3.5 text-green-600" />
                        Secured by Razorpay. We never see or store your card
                        details.
                      </p>
                    </form>
                  </div>

                  {/* SIDE PANEL */}
                  <div className="lg:sticky lg:top-32 lg:self-start">
                    <div
                      className="relative overflow-hidden rounded-[30px] p-8 text-white"
                      style={{
                        background:
                          "linear-gradient(140deg, #12163a 0%, #1a2152 40%, #241b52 70%, #2e1a48 100%)",
                      }}
                    >
                      <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-accent-500/25 blur-3xl" />
                      <div className="pointer-events-none absolute -bottom-20 -left-20 size-56 rounded-full bg-aqua-500/25 blur-3xl" />

                      <span className="relative inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm">
                        <Sparkles className="size-3.5" />
                        Order Summary
                      </span>

                      <div className="relative mt-6 space-y-3.5 rounded-2xl border border-white/12 bg-white/[0.06] p-5 backdrop-blur-xl">
                        <SumRow
                          label="Paying For"
                          value={form.payment_for || "—"}
                        />
                        <SumRow
                          label="Name"
                          value={
                            `${form.first_name} ${form.last_name}`.trim() || "—"
                          }
                        />
                        <SumRow label="Company" value={form.company || "—"} />
                        <SumRow label="Email" value={form.email || "—"} />

                        <div className="border-t border-white/10 pt-3.5">
                          <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/40">
                            Total Amount
                          </p>
                          <p className="mt-1.5 text-[30px] font-extrabold leading-none text-white">
                            {form.amount
                              ? `₹${Number(form.amount).toLocaleString("en-IN")}`
                              : "₹0"}
                          </p>
                        </div>
                      </div>

                      <div className="relative mt-7 space-y-3">
                        {[
                          {
                            Icon: ShieldCheck,
                            t: "PCI-DSS Compliant",
                            d: "Bank-grade encryption on every transaction.",
                          },
                          {
                            Icon: Clock,
                            t: "Instant Confirmation",
                            d: "Payment ID shown the moment it clears.",
                          },
                          {
                            Icon: FileText,
                            t: "GST Invoice",
                            d: "Emailed to you the same working day.",
                          },
                        ].map((p) => (
                          <div key={p.t} className="flex items-start gap-3">
                            <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-white/10 text-aqua-300">
                              <p.Icon className="size-4" />
                            </span>
                            <div>
                              <p className="text-[13.5px] font-bold text-white">
                                {p.t}
                              </p>
                              <p className="mt-0.5 text-[12.5px] text-white/50">
                                {p.d}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="relative mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                        {[
                          "Visa",
                          "Mastercard",
                          "RuPay",
                          "UPI",
                          "Netbanking",
                          "Wallets",
                        ].map((m) => (
                          <span
                            key={m}
                            className="rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-[11.5px] font-semibold text-white/75"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ============ UPI QR ============ */}
              {tab === "upi" && (
                <motion.div
                  key="upi"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-[30px] border border-line bg-white p-8 sm:p-12"
                >
                  <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-plum-500 to-accent-500" />
                  <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-accent-400/16 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-aqua-400/18 blur-3xl" />

                  <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
                    <div>
                      <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-canvas px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600">
                        <QrCode className="size-3.5" />
                        UPI Payment
                      </span>

                      <h2 className="mt-5 text-[28px] font-extrabold leading-tight tracking-tight text-ink sm:text-[36px]">
                        Scan and pay in{" "}
                        <span className="grad-text-anim">ten seconds.</span>
                      </h2>

                      <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-ink-soft">
                        Open any UPI app, scan the code and enter the amount
                        from your invoice. Send us the screenshot on WhatsApp
                        and we&apos;ll share the receipt the same day.
                      </p>

                      <div className="mt-7">
                        <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-mute">
                          Or pay to this UPI ID
                        </p>
                        <div className="mt-2.5 flex w-fit items-center gap-3 rounded-2xl border-2 border-dashed border-accent-300 bg-accent-50 px-5 py-3.5">
                          <span className="font-mono text-[14.5px] font-bold text-accent-600 sm:text-[15.5px]">
                            {UPI_ID}
                          </span>
                          <button
                            onClick={() => copy(UPI_ID, "upi")}
                            aria-label="Copy UPI ID"
                            className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-accent-600 transition hover:bg-accent-500 hover:text-white"
                          >
                            {copied === "upi" ? (
                              <Check className="size-4" />
                            ) : (
                              <Copy className="size-3.5" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="mt-7">
                        <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-mute">
                          Works with
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2.5">
                          {[
                            "GPay",
                            "PhonePe",
                            "Paytm",
                            "BHIM",
                            "Amazon Pay",
                            "CRED",
                          ].map((a) => (
                            <span
                              key={a}
                              className="rounded-full border border-line bg-canvas px-3.5 py-1.5 text-[12.5px] font-semibold text-ink-soft"
                            >
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* QR CARD */}
                    <div className="relative mx-auto w-full max-w-[330px]">
                      <div className="pointer-events-none absolute -inset-5 rounded-[36px] bg-gradient-to-br from-aqua-400/30 via-plum-500/25 to-accent-500/30 blur-[50px]" />

                      <div className="relative overflow-hidden rounded-[28px] border border-line bg-white p-6 shadow-[0_30px_70px_-30px_rgba(43,57,144,0.5)]">
                        <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />

                        <p className="text-center text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink-mute">
                          Scan to Pay
                        </p>

                        <div className="relative mt-5 overflow-hidden rounded-2xl bg-canvas p-3">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src="/razorpay-scanner.png"
                            alt={`UPI QR code for ${UPI_ID}`}
                            className="h-auto w-full object-contain"
                          />

                     

                          <span className="pointer-events-none absolute left-3 top-3 size-7 rounded-tl-lg border-l-[3px] border-t-[3px] border-aqua-500" />
                          <span className="pointer-events-none absolute right-3 top-3 size-7 rounded-tr-lg border-r-[3px] border-t-[3px] border-plum-500" />
                          <span className="pointer-events-none absolute bottom-3 left-3 size-7 rounded-bl-lg border-b-[3px] border-l-[3px] border-plum-500" />
                          <span className="pointer-events-none absolute bottom-3 right-3 size-7 rounded-br-lg border-b-[3px] border-r-[3px] border-accent-500" />
                        </div>

                        <p className="mt-5 text-center text-[15px] font-bold text-ink">
                          {COMPANY}
                        </p>
                        <p className="mt-1 text-center font-mono text-[12px] text-ink-soft">
                          {UPI_ID}
                        </p>

                        <div className="mt-5 flex items-center justify-center gap-2 rounded-2xl bg-green-50 py-3">
                          <ShieldCheck className="size-4 text-green-600" />
                          <span className="text-[12.5px] font-semibold text-green-700">
                            Bank Verified Merchant
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ============ BANK TRANSFER ============ */}
              {tab === "bank" && (
                <motion.div
                  key="bank"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-[30px] border border-line bg-white p-8 sm:p-12"
                >
                  <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-aqua-500 to-brand-600" />
                  <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-aqua-400/16 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-plum-400/16 blur-3xl" />

                  <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                      <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-canvas px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-brand-600">
                        <Landmark className="size-3.5" />
                        Bank Transfer
                      </span>

                      <h2 className="mt-5 text-[28px] font-extrabold leading-tight tracking-tight text-ink sm:text-[36px]">
                        NEFT, RTGS or{" "}
                        <span className="grad-text-anim">IMPS.</span>
                      </h2>

                      <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-ink-soft">
                        Transfer directly from your bank account. Please mention
                        your invoice number in the remarks so we can match the
                        payment quickly.
                      </p>

                      <div className="mt-7 rounded-2xl border border-line bg-canvas p-5">
                        <p className="text-[12.5px] font-bold text-ink">
                          After transferring
                        </p>
                        <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                          Send the UTR or reference number to{" "}
                          <a
                            href={`mailto:${SUPPORT_EMAIL}`}
                            className="font-semibold text-brand-600 hover:text-accent-600"
                          >
                            {SUPPORT_EMAIL}
                          </a>{" "}
                          or WhatsApp us at{" "}
                          <a
                            href={`tel:${SUPPORT_PHONE.replace(/\s/g, "")}`}
                            className="font-semibold text-brand-600 hover:text-accent-600"
                          >
                            {SUPPORT_PHONE}
                          </a>
                          . Receipt follows within a few hours.
                        </p>
                      </div>
                    </div>

                    {/* BANK DETAILS */}
                    <div className="overflow-hidden rounded-[24px] border border-line">
                      {BANK.map((b, i) => (
                        <div
                          key={b.label}
                          className={`group flex items-center justify-between gap-4 px-6 py-5 transition-colors duration-300 hover:bg-brand-50 ${
                            i % 2 === 0 ? "bg-white" : "bg-canvas"
                          } ${i < BANK.length - 1 ? "border-b border-line" : ""}`}
                        >
                          <div className="min-w-0">
                            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-mute">
                              {b.label}
                            </p>
                            <p className="mt-1 truncate font-mono text-[15px] font-bold text-ink">
                              {b.value}
                            </p>
                          </div>

                          <button
                            onClick={() => copy(b.value, b.label)}
                            aria-label={`Copy ${b.label}`}
                            className="grid size-9 shrink-0 place-items-center rounded-xl border border-line bg-white text-ink-mute transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-br hover:from-brand-600 hover:to-accent-500 hover:text-white"
                          >
                            {copied === b.label ? (
                              <Check className="size-4" />
                            ) : (
                              <Copy className="size-3.5" />
                            )}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ---------- STEPS ---------- */}
          <div className="mt-20">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-[28px] font-extrabold leading-tight tracking-tight text-ink sm:text-[36px]">
                How It <span className="grad-text-anim">Works.</span>
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="group relative overflow-hidden rounded-[24px] border border-line bg-white p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_24px_54px_-24px_rgba(43,57,144,0.45)]"
                >
                  <span className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-accent-400 opacity-[0.14] transition-transform duration-700 group-hover:scale-150" />
                  <span className="pointer-events-none absolute -bottom-10 -left-10 size-28 rounded-full bg-aqua-400 opacity-[0.14] transition-transform duration-700 group-hover:scale-150" />

                  <div className="relative flex items-start justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-plum-600 text-white shadow-[0_12px_28px_-10px_rgba(43,57,144,0.5)] transition-transform duration-300 group-hover:scale-110">
                      <s.Icon className="size-5" />
                    </span>
                    <span className="text-[26px] font-extrabold leading-none text-line">
                      {s.n}
                    </span>
                  </div>

                  <p className="relative mt-5 text-[16.5px] font-bold text-ink">
                    {s.t}
                  </p>
                  <p className="relative mt-2 text-[14px] leading-relaxed text-ink-soft">
                    {s.d}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ---------- SUPPORT CTA ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mt-16 overflow-hidden rounded-[28px] p-9 text-white sm:p-11"
            style={{
              background:
                "linear-gradient(120deg, #1e2762 0%, #2B3990 35%, #7B3FA0 70%, #E0459A 100%)",
            }}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-white/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-aqua-400/25 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div className="flex items-start gap-5">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-white/20 text-white backdrop-blur-sm">
                  <Headphones className="size-6" />
                </span>
                <div>
                  <h3 className="max-w-lg text-[24px] font-extrabold leading-tight tracking-tight sm:text-[30px]">
                    Payment stuck or need a custom invoice?
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] text-white/70">
                    Call us on {SUPPORT_PHONE} — someone picks up between 10 AM
                    and 7 PM, Monday to Saturday.
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 flex-wrap gap-3">
                <a
                  href={`tel:${SUPPORT_PHONE.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-[15px] font-semibold text-brand-700 transition-all duration-300 hover:-translate-y-0.5 hover:text-accent-600"
                >
                  Call Support
                  <ArrowRight className="size-4" />
                </a>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/35 px-7 py-4 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/12"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ================= SUMMARY ROW ================= */
function SumRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="shrink-0 text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/40">
        {label}
      </span>
      <span className="truncate text-right text-[13.5px] font-semibold text-white">
        {value}
      </span>
    </div>
  );
}
