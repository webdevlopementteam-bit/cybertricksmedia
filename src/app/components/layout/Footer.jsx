"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { ArrowRight, ArrowUp, Send, Check, MapPin } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { CONTACT, SOCIALS } from "@/app/data/navigation";

config.autoAddCss = false;

/* ================= 4 BALANCED COLUMNS ================= */
const COLUMNS = [
  [
    {
      title: "Social Media Marketing",
      href: "/social-media-marketing",
      links: [
        { label: "Facebook Marketing", href: "/facebook-marketing" },
        { label: "Instagram Marketing", href: "/instagram-marketing" },
        { label: "LinkedIn Marketing", href: "/linkedin-marketing" },
        { label: "Threads Marketing", href: "/threads-marketing" },
        { label: "YouTube Marketing", href: "/youtube-marketing" },
        { label: "Content Marketing", href: "/content-marketing" },
        { label: "Twitter Marketing", href: "/twitter-marketing" },
      ],
    },
    {
      title: "Search Engine Marketing",
      href: "/search-engine-marketing",
      links: [
        { label: "SEO (Search Engine Optimization)", href: "/search-engine-optimization" },
        { label: "AEO (Answer Engine Optimization)", href: "/artificial-engine-optimization" },
        { label: "GEO (Generative Engine Optimization)", href: "/geographical-engine-optimization" },
        { label: "Google My Business (GMB)", href: "/google-my-business" },
      ],
    },
  ],
  [
    {
      title: "Film Production",
      href: "/film-production",
      links: [
        { label: "TV Ads Film Making", href: "/tv-ads-film-making-service" },
        { label: "Corporate Film Making", href: "/corporate-film-making-service" },
        { label: "Short Film Making", href: "/short-film-making-service" },
        { label: "Radio Jingles Making", href: "/radio-jingles-making-service" },
        { label: "Chroma Spots Making", href: "/chroma-spots-making-service" },
        { label: "AI Videos", href: "/ai-videos" },
        { label: "Tele Shopping Ads", href: "/tele-shopping-ads-making-service" },
        { label: "Web Series Making", href: "/web-series-making-service" },
        { label: "Hindi Feature Film", href: "/hindi-feature-film-making-service" },
        { label: "Video Song Making", href: "/video-song-making-service" },
        { label: "Product Explainer Videos", href: "/product-explainer-video-making-service-etc" },
      ],
    },
    {
      title: "Event & PR",
      href: "/event-and-pr",
      links: [
        { label: "Event Management", href: "/event-management" },
        { label: "PR Management", href: "/pr-management" },
        { label: "Award Shows", href: "/award-shows-exhibitions" },
      ],
    },
  ],
  [
    {
      title: "Sponsored Ads",
      href: "/sponsored-ads",
      links: [
        { label: "Google Adwords", href: "/google-adwords" },
        { label: "Meta Ads", href: "/meta-ad" },
        { label: "YouTube Ads", href: "/youtube-ad" },
        { label: "OTT Advertising", href: "/ott-advertising-service" },
      ],
    },
    {
      title: "Advertising",
      href: "/advertising",
      links: [
        { label: "Outdoor Advertising", href: "/outdoor-advertising-service" },
        { label: "Indoor Advertising", href: "/indoor-advertising-service" },
        { label: "Cinema Advertising", href: "/cinema-advertising-service" },
        { label: "TV Advertising", href: "/tv-advertising-service" },
        { label: "Radio Advertising", href: "/radio-advertising-service" },
      ],
    },
  ],
  [
    {
      title: "Development",
      href: "/development",
      links: [
        { label: "Web Development", href: "/web-development" },
        { label: "Mobile App Development", href: "/mobile-app-development" },
        { label: "UI/UX Design", href: "/ui-ux-design" },
        { label: "CRM Software", href: "/crm-software" },
      ],
    },
    {
      title: "Brand & Influence",
      href: "/brand-influence",
      links: [
        { label: "Brand Management", href: "/brand-management" },
        { label: "Celebrity Endorsement", href: "/celebrity-endorsement" },
        { label: "Influencer Marketing", href: "/influencer-marketing" },
        { label: "Affiliate Marketing", href: "/affiliate-marketing" },
      ],
    },
    {
      title: "AI & Events",
      href: "/ai-services",
      links: [
        { label: "AI Services", href: "/ai-services" },
      ],
    },
    
  ],
];

const COMPANY_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Awards", href: "/awards-recognition" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/job-openings" },
  { label: "How To Pay", href: "/how-to-pay" },
];

const NETWORK = [
  { label: "Bharat Bizmart", href: "https://bharatbizmart.com" },
  { label: "The Times of MSME", href: "https://thetimesofmsme.com" },
  { label: "The K12 Times", href: "https://thek12times.com" },
  { label: "My Filmy Story", href: "https://myfilmystory.com" },
];

const LEGAL = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Refund Policy", href: "/cancellation-refund-policy" },
];

const PARTICLES = [
  { top: "12%", left: "8%",  color: "bg-aqua-400",   dur: 19, dx: 40,  dy: -30 },
  { top: "68%", left: "18%", color: "bg-accent-400", dur: 23, dx: -35, dy: 40  },
  { top: "26%", left: "88%", color: "bg-plum-400",   dur: 21, dx: 45,  dy: 35  },
  { top: "80%", left: "74%", color: "bg-aqua-300",   dur: 25, dx: -40, dy: -35 },
  { top: "45%", left: "52%", color: "bg-accent-300", dur: 20, dx: 30,  dy: 45  },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const subscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 3500);
  };

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer
        ref={ref}
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(150deg, #0e1230 0%, #161c47 35%, #221a4e 68%, #2c1845 100%)",
        }}
      >
        {/* ============ BACKGROUND ============ */}
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 20%, #000 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 20%, #000 30%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute -left-40 top-0 size-[480px] rounded-full bg-aqua-500/14 blur-[150px]" />
        <div className="pointer-events-none absolute -right-40 top-1/3 size-[480px] rounded-full bg-accent-500/16 blur-[150px]" />

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {PARTICLES.map((p, i) => (
            <motion.span
              key={i}
              className={`absolute size-[5px] rounded-full ${p.color}`}
              style={{ top: p.top, left: p.left }}
              animate={{
                x: [0, p.dx, 0, -p.dx * 0.6, 0],
                y: [0, p.dy, -p.dy * 0.5, p.dy * 0.3, 0],
                opacity: [0.2, 0.85, 0.4, 0.8, 0.2],
                scale: [1, 1.7, 1.1, 1.5, 1],
              }}
              transition={{
                duration: p.dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.9,
              }}
            />
          ))}
        </div>



        {/* ================= MAIN GRID — 5 COLUMNS ================= */}
        <div className="container-x relative z-10 pt-16">
          <div className="grid gap-x-8 gap-y-12 lg:grid-cols-[1.25fr_repeat(4,1fr)]">

            {/* ---------- CONTACT COLUMN ---------- */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Link href="/" className="inline-block rounded-2xl bg-white p-3">
                <Image
                  src="/logo.png"
                  alt="Cybertricks Media Pvt Ltd"
                  width={190}
                  height={48}
                  className="h-9 w-auto"
                />
              </Link>

              <p className="mt-5 text-[13.5px] leading-relaxed text-white/55">
                A creative powerhouse in advertising, film production, branding and
                AI-powered digital marketing — trusted by 3,800+ brands.
              </p>

              {/* Contact rows */}
              <div className="mt-6 space-y-3">
                <a
                  href="tel:919266612221"
                  className="group flex items-center gap-3 text-[13.5px] text-white/70 transition hover:text-white"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white/10 text-aqua-300 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-aqua-400 group-hover:to-brand-600 group-hover:text-white">
                    <FontAwesomeIcon icon={faPhone} className="h-3 w-3" />
                  </span>
                  +91 92666 12221
                </a>
                <a
                  href="tel:01146120491"
                  className="group flex items-center gap-3 text-[13.5px] text-white/70 transition hover:text-white"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white/10 text-aqua-300 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-aqua-400 group-hover:to-brand-600 group-hover:text-white">
                    <FontAwesomeIcon icon={faPhone} className="h-3 w-3" />
                  </span>
                  011-461-20491
                </a>

                <a
                  href={CONTACT.emailHref}
                  className="group flex items-center gap-3 text-[13.5px] text-white/70 transition hover:text-white"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white/10 text-plum-300 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-plum-500 group-hover:to-accent-500 group-hover:text-white">
                    <FontAwesomeIcon icon={faEnvelope} className="h-3 w-3" />
                  </span>
                  {CONTACT.email}
                </a>

                <div className="flex items-start gap-3 text-[13.5px] leading-relaxed text-white/70">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-white/10 text-accent-300">
                    <MapPin className="size-3.5" />
                  </span>
                  <span>
                    201/7, 2nd Floor, Dimension Tower, Vardhaman Market, West
                    Enclave, Pitampura, Delhi&nbsp;–&nbsp;110034
                  </span>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-6 flex flex-wrap gap-2">
                {SOCIALS.map((s) => (
<a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="grid size-9 place-items-center rounded-lg border border-white/15 bg-white/[0.07] text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-brand-600 hover:to-accent-500 hover:text-white"
                  >
                    <FontAwesomeIcon icon={s.icon} className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>

              {/* Company links */}
              <div className="mt-7 border-t border-white/10 pt-6">
                <p className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/40">
                  Company
                </p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {COMPANY_LINKS.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[13px] text-white/55 transition-colors duration-300 hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* ---------- 4 SERVICE COLUMNS ---------- */}
            {COLUMNS.map((groups, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + ci * 0.08 }}
                className="space-y-8"
              >
                {groups.map((g) => (
                  <div key={g.title}>
                    <Link href={g.href} className="group flex items-start gap-2.5">
                      <span className="mt-0.5 h-4 w-[3px] shrink-0 rounded-full bg-gradient-to-b from-aqua-400 to-accent-500" />
                      <p className="text-[12px] font-bold uppercase leading-tight tracking-[0.1em] text-white transition-colors group-hover:text-aqua-300">
                        {g.title}
                      </p>
                    </Link>

                    <ul className="mt-4 space-y-2.5">
                      {g.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            className="group flex items-start gap-1.5 text-[13px] leading-snug text-white/55 transition-colors duration-300 hover:text-white"
                          >
                            <span className="mt-[7px] h-px w-0 shrink-0 bg-accent-400 transition-all duration-300 group-hover:w-2.5" />
                            <span>{l.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= NETWORK STRIP ================= */}
        <div className="container-x relative z-10 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-3 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-sm"
          >
            <span className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-white/40">
              Our Network
            </span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />

            {NETWORK.map((n) => (
              <a
                key={n.href}
                href={n.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-white/12 px-3.5 py-1.5 text-[13px] text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/50 hover:bg-accent-500/15 hover:text-white"
              >
                {n.label}
                <ArrowRight className="size-3 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="relative z-10 mt-14 border-t border-white/10">
          <div className="container-x flex flex-col items-center justify-between gap-5 py-7 lg:flex-row">
            <p className="text-center text-[13px] text-white/45 lg:text-left">
              © 2024–{new Date().getFullYear()} Cybertricks Media Pvt Ltd. All
              rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {LEGAL.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[13px] text-white/45 transition hover:text-accent-300"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <button
              onClick={toTop}
              aria-label="Back to top"
              className="group grid size-11 shrink-0 place-items-center rounded-full border border-white/20 bg-white/[0.07] text-white transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-aqua-400 hover:to-accent-500"
            >
              <ArrowUp className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* ============ GIANT WORDMARK ============ */}
        <div className="pointer-events-none relative z-0 select-none overflow-hidden">
          <p className="whitespace-nowrap text-center text-[13vw] font-extrabold leading-[0.78] tracking-tighter text-white/[0.035]">
            CYBERTRICKS
          </p>
        </div>

        {/* ============ TOP EDGE LINE ============ */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />
      </footer>

      {/* ================= FLOATING WHATSAPP ================= */}
      <a
        href="https://wa.me/9266612221"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-6 right-6 z-40 flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] px-4 py-4 shadow-[0_14px_36px_-10px_rgba(37,211,102,0.7)] transition-all duration-400 hover:gap-2.5 hover:pr-6"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25" />
        <FontAwesomeIcon icon={faWhatsapp} className="relative h-6 w-6 text-white" />
        <span className="relative max-w-0 overflow-hidden whitespace-nowrap text-[14px] font-semibold text-white transition-all duration-400 group-hover:max-w-[120px]">
          Chat with us
        </span>
      </a>
    </>
  );
}