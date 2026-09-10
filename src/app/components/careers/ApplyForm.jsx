"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Send, Loader2, Sparkles, AlertCircle } from "lucide-react";
import { JOBS } from "./OpeningsSection";

/* ================= CONFIG ================= */
const WEB3FORMS_KEY = "75064bc8-0384-4b3b-9da8-d29f46f65e7b"; // 👈 web3forms.com se key le kar yahan paste karo

export default function ApplyForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.target);
    formData.append("access_key", WEB3FORMS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        window.location.href = "/thank-you?type=application";
      } else {
        setError(data.message || "Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
      setLoading(false);
    }
  };

  return (
    <section
      id="apply"
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-28"
      style={{
        background:
          "linear-gradient(140deg, #12163a 0%, #1a2152 40%, #241b52 70%, #2e1a48 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-0 size-[460px] rounded-full bg-aqua-500/14 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[460px] rounded-full bg-accent-500/16 blur-[140px]" />

      <div className="container-x relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <div className="text-center">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] text-aqua-300 backdrop-blur-sm">
              <Sparkles className="size-3.5" />
              Apply Now
            </span>

            <h2 className="mt-6 text-[32px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[42px]">
              Tell Us{" "}
              <span className="bg-gradient-to-r from-aqua-300 via-plum-300 to-accent-400 bg-clip-text text-transparent">
                About Yourself.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-md text-[15.5px] leading-relaxed text-white/60">
              We read every application ourselves. If it&apos;s a fit, you&apos;ll
              hear from us within a week.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-11 rounded-[28px] border border-white/12 bg-white/[0.06] p-7 backdrop-blur-xl sm:p-9"
          >
            {/* Hidden fields */}
            <input type="hidden" name="subject" value="New Job Application — Cybertricks Media" />
            <input type="hidden" name="from_name" value="Cybertricks Careers" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" placeholder="Your full name" required />
              <Field label="Email Address" name="email" type="email" placeholder="you@email.com" required />
              <Field label="Phone Number" name="phone" type="tel" placeholder="+91 00000 00000" required />

              {/* Position */}
              <div>
                <label className="mb-2 block text-[13px] font-semibold text-white/80">
                  Position Applying For <span className="text-accent-400">*</span>
                </label>
                <select
                  id="position-select"
                  name="position"
                  required
                  defaultValue=""
                  className="w-full rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-3.5 text-[14.5px] text-white outline-none transition-colors focus:border-accent-400/60"
                >
                  <option value="" disabled className="bg-[#1a2152]">
                    Select a role
                  </option>
                  {JOBS.map((j) => (
                    <option key={j.title} value={j.title} className="bg-[#1a2152]">
                      {j.title}
                    </option>
                  ))}
                  <option value="Other / General Application" className="bg-[#1a2152]">
                    Other / General Application
                  </option>
                </select>
              </div>

              <Field label="Total Experience" name="experience" placeholder="e.g. 2 years" required />
              <Field label="Current / Expected CTC" name="ctc" placeholder="e.g. 4.5 LPA" />
              <Field
                label="Portfolio / LinkedIn URL"
                name="portfolio"
                type="url"
                placeholder="https://"
                className="sm:col-span-2"
              />

              {/* Message */}
              <div className="sm:col-span-2">
                <label className="mb-2 block text-[13px] font-semibold text-white/80">
                  Why should we hire you? <span className="text-accent-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your work, what you're good at, and why this role interests you."
                  className="w-full resize-none rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-3.5 text-[14.5px] text-white outline-none transition-colors placeholder:text-white/35 focus:border-accent-400/60"
                />
              </div>
            </div>

            {/* Resume note */}
            <p className="mt-5 rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3.5 text-[13px] leading-relaxed text-white/55">
              After submitting, please email your CV to{" "}
              <a
                href="mailto:info@cybertricksmedia.com"
                className="font-semibold text-aqua-300 underline-offset-4 hover:underline"
              >
                info@cybertricksmedia.com
              </a>{" "}
              with your name in the subject line.
            </p>

            {/* Error */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 flex items-center gap-2.5 rounded-2xl border border-red-400/30 bg-red-500/15 px-4 py-3.5 text-[13.5px] text-red-200"
              >
                <AlertCircle className="size-4 shrink-0" />
                {error}
              </motion.div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-shine mt-7 w-full justify-center disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              <span className="btn-shine-text">
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="size-4" />
                  </>
                )}
              </span>
            </button>
          </form>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
    </section>
  );
}

/* ================= FIELD ================= */
function Field({ label, name, type = "text", placeholder, required, className = "" }) {
  return (
    <div className={className}>
      <label className="mb-2 block text-[13px] font-semibold text-white/80">
        {label} {required && <span className="text-accent-400">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/15 bg-white/[0.07] px-4 py-3.5 text-[14.5px] text-white outline-none transition-colors placeholder:text-white/35 focus:border-accent-400/60"
      />
    </div>
  );
}