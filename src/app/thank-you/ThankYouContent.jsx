"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { Check, ArrowRight, Home, Mail, Clock, ArrowLeft } from "lucide-react";

const CONTENT = {
  application: {
    badge: "Application Received",
    title: "Thanks for applying!",
    body: "Your application has landed in our inbox. Our team reviews every profile personally — if there's a fit, you'll hear from us within a week.",
    next: [
      { Icon: Mail, text: "Email your CV to info@cybertricksmedia.com" },
      { Icon: Clock, text: "We usually respond within 5–7 working days" },
    ],
    cta: { label: "View More Roles", href: "/job-openings" },
  },
  contact: {
    badge: "Message Received",
    title: "Thanks for reaching out!",
    body: "We've got your message and someone from our team will get back to you shortly. Meanwhile, feel free to explore what we do.",
    next: [
      { Icon: Clock, text: "Expect a reply within 24 working hours" },
      { Icon: Mail, text: "Urgent? Call us at +91 92666 12221" },
    ],
    cta: { label: "Explore Our Services", href: "/services" },
  },
  default: {
    badge: "Submitted Successfully",
    title: "Thank you!",
    body: "We've received your submission. Our team will review it and get back to you as soon as possible.",
    next: [
      { Icon: Clock, text: "We typically respond within 24 working hours" },
      { Icon: Mail, text: "Questions? Write to info@cybertricksmedia.com" },
    ],
    cta: { label: "Back to Home", href: "/" },
  },
};

const CONFETTI = Array.from({ length: 32 }).map((_, i) => ({
  id: i,
  x: (Math.random() - 0.5) * 560,
  y: -(Math.random() * 320 + 140),
  rotate: Math.random() * 720 - 360,
  delay: Math.random() * 0.4,
  color: ["bg-accent-500", "bg-aqua-400", "bg-plum-500", "bg-brand-500", "bg-accent-300"][i % 5],
  size: Math.random() > 0.5 ? "size-2" : "size-1.5",
}));

export default function ThankYouContent() {
  const params = useSearchParams();
  const type = params.get("type") || "default";
  const data = CONTENT[type] || CONTENT.default;

  const [count, setCount] = useState(12);

  useEffect(() => {
    const t = setInterval(() => setCount((c) => (c <= 1 ? 0 : c - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (count === 0) window.location.href = "/";
  }, [count]);

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-40 pb-20"
      style={{
        background:
          "linear-gradient(140deg, #0e1230 0%, #1a2152 38%, #241b52 68%, #2e1a48 100%)",
      }}
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 45%, #000 30%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-0 size-[480px] rounded-full bg-aqua-500/16 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[480px] rounded-full bg-accent-500/18 blur-[150px]" />

      {/* Confetti */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 z-20 flex justify-center">
        {CONFETTI.map((c) => (
          <motion.span
            key={c.id}
            initial={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
            animate={{ opacity: 0, x: c.x, y: c.y, rotate: c.rotate }}
            transition={{ duration: 2.2, delay: c.delay, ease: "easeOut" }}
            className={`absolute ${c.size} rounded-[2px] ${c.color}`}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-2xl text-center">
        {/* Check circle */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 190, damping: 15, delay: 0.1 }}
          className="relative mx-auto grid size-24 place-items-center"
        >
          <motion.span
            animate={{ scale: [1, 1.35, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-aqua-400/40"
          />
          <div className="relative grid size-24 place-items-center rounded-full bg-gradient-to-br from-aqua-400 via-plum-500 to-accent-500 shadow-[0_20px_50px_-15px_rgba(224,69,154,0.7)]">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 260 }}
            >
              <Check className="size-11 text-white" strokeWidth={3} />
            </motion.span>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-green-400" />
          </span>
          {data.badge}
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6 text-[36px] font-extrabold leading-[1.08] tracking-tight text-white sm:text-[50px]"
        >
          {data.title.split("!")[0]}
          <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
            !
          </span>
        </motion.h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mx-auto mt-5 max-w-lg text-[16px] leading-relaxed text-white/60"
        >
          {data.body}
        </motion.p>

        {/* Next steps */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.82 }}
          className="mx-auto mt-9 max-w-md space-y-3"
        >
          {data.next.map((n, i) => (
            <div
              key={i}
              className="flex items-center gap-3.5 rounded-2xl border border-white/12 bg-white/[0.06] px-5 py-4 text-left backdrop-blur-xl"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                <n.Icon className="size-4" />
              </span>
              <span className="text-[14px] text-white/75">{n.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link href="/" className="btn-shine">
            <span className="btn-shine-text">
              <Home className="size-4" />
              Back to Home
            </span>
          </Link>

          <Link
            href={data.cta.href}
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/25 px-6 py-3.5 text-[14.5px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10"
          >
            {data.cta.label}
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>

        {/* Auto redirect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.15 }}
          className="mt-10"
        >
          <p className="text-[13px] text-white/40">
            Redirecting to homepage in{" "}
            <span className="font-mono font-bold text-aqua-300">{count}s</span>
          </p>

          <div className="mx-auto mt-3 h-1 w-40 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 12, ease: "linear" }}
              className="h-full rounded-full bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500"
            />
          </div>

          <button
            onClick={() => window.history.back()}
            className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-white/45 transition hover:text-white"
          >
            <ArrowLeft className="size-3.5" />
            Stay on this page
          </button>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
    </section>
  );
}