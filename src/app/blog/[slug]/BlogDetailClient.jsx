"use client";

import { useRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, useInView } from "motion/react";
import { ChevronRight, Calendar, Tag, ArrowRight, Sparkles } from "lucide-react";
import { BLOGS } from "@/app/data/blogs";


/* ================= MINI PARSER — bold **, link [text](url), image ![alt](src) ================= */
function parseInline(text, keyPrefix) {
  const parts = [];
  const regex = /(\*\*(.+?)\*\*)|(\[(.+?)\]\((.+?)\))/g;
  let lastIndex = 0;
  let match;
  let idx = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[1]) {
      parts.push(<strong key={`${keyPrefix}-b-${idx}`} className="font-bold text-ink">{match[2]}</strong>);
    } else if (match[3]) {
      parts.push(
        <Link key={`${keyPrefix}-l-${idx}`} href={match[5]} className="font-semibold text-brand-600 underline decoration-brand-300 underline-offset-2 hover:text-accent-600">
          {match[4]}
        </Link>
      );
    }
    idx++;
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

function renderContent(content) {
  const blocks = content.trim().split(/\n\s*\n/);

  return blocks.map((block, i) => {
    const trimmed = block.trim();

    const imgMatch = trimmed.match(/^!\[(.*?)\]\((.+?)\)$/);
    if (imgMatch) {
      return (
        <div key={i} className="my-8 overflow-hidden rounded-[22px] shadow-[0_25px_55px_-20px_rgba(43,57,144,0.3)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgMatch[2]} alt={imgMatch[1]} className="h-auto w-full object-cover" />
        </div>
      );
    }

    if (trimmed.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-10 mb-4 text-[24px] font-extrabold leading-tight tracking-tight text-ink sm:text-[28px]">
          {parseInline(trimmed.replace(/^## /, ""), i)}
        </h2>
      );
    }

    if (trimmed.split("\n").every((l) => l.trim().startsWith("- "))) {
      const items = trimmed.split("\n").map((l) => l.replace(/^- /, ""));
      return (
        <ul key={i} className="my-5 space-y-2.5 pl-1">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-ink-soft">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-500" />
              <span>{parseInline(item, `${i}-${j}`)}</span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={i} className="mb-5 text-[15.5px] leading-relaxed text-ink-soft">
        {parseInline(trimmed, i)}
      </p>
    );
  });
}

export default function BlogDetailClient({ slug }) {
  const blog = BLOGS.find((b) => b.slug === slug);
  if (!blog) return notFound();

  const bodyRef = useRef(null);
  const bodyInView = useInView(bodyRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* ============================================================
          BANNER — DARK
      ============================================================ */}
      <section
        className="relative flex min-h-[380px] items-center overflow-hidden pb-16 pt-[160px]"
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
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 40%, #000 30%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute -left-40 top-0 size-[420px] rounded-full bg-aqua-500/16 blur-[150px]" />
        <div className="pointer-events-none absolute -right-40 bottom-0 size-[420px] rounded-full bg-accent-500/18 blur-[150px]" />

        <div className="container-x relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-[13px] text-white/50"
          >
            <Link href="/" className="transition hover:text-aqua-300">Home</Link>
            <ChevronRight className="size-3.5" />
            <Link href="/blog" className="transition hover:text-aqua-300">Blog</Link>
            <ChevronRight className="size-3.5" />
            <span className="text-white/85">{blog.category}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-3xl text-[30px] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[40px]"
          >
            {blog.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-2.5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-[13px] font-semibold text-white backdrop-blur-sm">
              <Calendar className="size-3.5 text-aqua-300" />
              {blog.date}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-[13px] font-semibold text-white backdrop-blur-sm">
              <Tag className="size-3.5 text-aqua-300" />
              {blog.category}
            </span>
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
      </section>

      {/* ============================================================
          FEATURED IMAGE + CONTENT — LIGHT
      ============================================================ */}
      <section className="relative overflow-hidden bg-canvas py-16">
        <div className="container-x relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[26px] shadow-[0_30px_65px_-25px_rgba(43,57,144,0.35)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={blog.image} alt={blog.title} className="h-auto w-full object-cover" />
          </motion.div>

          <motion.div
            ref={bodyRef}
            initial={{ opacity: 0, y: 26 }}
            animate={bodyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mt-10 rounded-[28px] border border-line bg-white p-8 sm:p-11"
          >
            {renderContent(blog.content)}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mt-10 overflow-hidden rounded-[28px] border border-line bg-white p-9 sm:p-11"
          >
            <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
            <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-accent-400/16 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-7 lg:flex-row lg:items-center">
              <div className="flex items-start gap-5">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-[0_14px_32px_-12px_rgba(43,57,144,0.6)]">
                  <Sparkles className="size-6" />
                </span>
                <div>
                  <h3 className="text-[22px] font-extrabold leading-tight tracking-tight text-ink sm:text-[27px]">
                    Want a strategy built around your brand?
                  </h3>
                  <p className="mt-2 max-w-md text-[15px] text-ink-soft">
                    Let's talk about where your marketing stands today and where it
                    could go.
                  </p>
                </div>
              </div>

              <Link href="/contact-us" className="btn-shine shrink-0">
                <span className="btn-shine-text">
                  Get a Free Strategy Call
                  <ArrowRight className="size-4" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}