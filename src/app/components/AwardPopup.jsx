"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { X, Trophy, ArrowRight, Calendar } from "lucide-react";

/* ================= CONFIG ================= */
const DELAY = 7000; // 7 seconds
const STORAGE_KEY = "ctm-award-popup-seen";
const POSTER = "/award-show.jpeg";

/* Safe storage — iOS Safari private mode throws on setItem() */
const storage = {
  get(key) {
    try {
      return window.sessionStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.sessionStorage.setItem(key, value);
    } catch {
      /* private mode — ignore, popup will simply show again */
    }
  },
};

export default function AwardPopup() {
  const [open, setOpen] = useState(false);

  /* Timer */
  useEffect(() => {
    if (storage.get(STORAGE_KEY)) return;

    const t = setTimeout(() => {
      setOpen(true);
      storage.set(STORAGE_KEY, "1");
    }, DELAY);

    return () => clearTimeout(t);
  }, []);

  /* Lock page scroll while open */
  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  /* Esc to close */
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={() => setOpen(false)}
          data-lenis-prevent
          className="no-scrollbar fixed inset-0 z-[80] overflow-y-auto overscroll-contain bg-black/85"
          style={{
            WebkitBackdropFilter: "blur(12px)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="flex min-h-full items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl"
            >
              {/* Golden glow behind */}
              <div className="pointer-events-none absolute -inset-8 rounded-[46px] bg-gradient-to-br from-[#ffd97a]/30 via-[#c9922e]/20 to-[#8a5f1c]/25 blur-[70px]" />

              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute -right-2 -top-2 z-40 grid size-11 place-items-center rounded-full border border-[#d9a441]/40 bg-[#140d03] text-[#ffd97a] shadow-[0_10px_30px_-8px_rgba(0,0,0,0.9)] transition-all duration-300 hover:scale-110 hover:bg-[#ffd97a] hover:text-[#1a1103] sm:-right-4 sm:-top-4"
              >
                <X className="size-5" />
              </button>

              {/* Card */}
              <div
                className="relative overflow-hidden rounded-[26px] border-2 border-[#d9a441]/40 shadow-[0_40px_100px_-30px_rgba(255,217,122,0.45)]"
                style={{
                  background:
                    "radial-gradient(ellipse 100% 60% at 50% 0%, #2a1c06 0%, #140d03 55%, #0a0703 100%)",
                }}
              >
                {/* Gold top strip */}
                <div className="absolute inset-x-0 top-0 z-30 h-[4px] bg-gradient-to-r from-[#c9922e] via-[#ffd97a] to-[#c9922e]" />

                {/* ---------- POSTER (clickable) ---------- */}
                <Link
                  href="/award-show"
                  onClick={() => setOpen(false)}
                  className="group relative block overflow-hidden"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={POSTER}
                    alt="The Times of MSME Excellence Awards & Business Conference 2026"
                    onError={(e) => {
                      console.error("Popup poster failed to load:", POSTER);
                      e.currentTarget.style.display = "none";
                    }}
                    className="block h-auto w-full transition-transform duration-[900ms] group-hover:scale-[1.04]"
                  />

                  {/* Hover darken */}
                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/25" />

                  {/* Shine sweep */}
                  <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-1000 group-hover:left-[150%]" />

                  {/* Live badge */}
                  <span
                    className="absolute left-4 top-5 z-20 inline-flex items-center gap-2 rounded-full border border-[#ffd97a]/40 bg-black/60 px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#ffd97a]"
                    style={{
                      WebkitBackdropFilter: "blur(8px)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <span className="relative flex size-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ffd97a] opacity-75" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-[#ffd97a]" />
                    </span>
                    Nominations Open
                  </span>
                </Link>

                {/* ---------- FOOTER BAR ---------- */}
                <div className="relative flex flex-col items-center gap-4 border-t border-[#d9a441]/20 px-6 py-5 sm:flex-row sm:justify-between sm:px-8">
                  {/* Glow */}
                  <div className="pointer-events-none absolute -bottom-16 left-1/4 size-48 rounded-full bg-[#ffd97a]/12 blur-3xl" />

                  <div className="relative flex items-center gap-3.5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#ffd97a] to-[#c9922e] text-[#1a1103] shadow-[0_10px_26px_-8px_rgba(255,217,122,0.7)]">
                      <Trophy className="size-5" />
                    </span>
                    <div>
                      <p className="text-[14.5px] font-extrabold leading-tight text-white">
                        Nominate, Sponsor &amp; Exhibit
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 text-[12px] text-white/50">
                        <Calendar className="size-3" />
                        Last date — October 31, 2026
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/award-show"
                    onClick={() => setOpen(false)}
                    className="btn-gold relative w-full justify-center sm:w-auto"
                  >
                    <span className="btn-gold-text">
                      Apply Now
                      <ArrowRight className="size-4" />
                    </span>
                  </Link>
                </div>
              </div>

              {/* Skip link */}
              <button
                onClick={() => setOpen(false)}
                className="mx-auto mt-5 block text-[13px] font-medium text-white/40 underline-offset-4 transition hover:text-white/70 hover:underline"
              >
                Maybe later
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}