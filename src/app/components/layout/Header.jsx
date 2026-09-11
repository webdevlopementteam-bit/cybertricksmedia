"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ChevronDown, ChevronRight, Menu, X, ArrowRight } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { NAV, CONTACT, SOCIALS } from "@/app/data/navigation";
import { cn } from "@/app/lib/utils";

config.autoAddCss = false;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const enter = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  const leave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };

  const activeItem = NAV.find((n) => n.label === openMenu);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* ================= TOP UTILITY BAR ================= */}
      <motion.div
        initial={false}
        animate={{ height: scrolled ? 0 : 40, opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden bg-gradient-to-r from-brand-800 via-brand-600 to-plum-600 text-white"
      >
        <div className="mx-auto flex h-10 max-w-[1400px] items-center justify-between px-5 text-[13px]">
          <div className="flex items-center gap-6">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-2 transition hover:text-aqua-300"
            >
              <FontAwesomeIcon icon={faPhone} className="h-3.5 w-3.5" />
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.emailHref}
              className="hidden items-center gap-2 transition hover:text-aqua-300 sm:flex"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5" />
              {CONTACT.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden text-white/70 md:inline">
              Award-Winning Advertising &amp; Digital Marketing Company
            </span>
            <div className="flex items-center gap-1">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="grid size-7 place-items-center rounded-full text-white/85 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:text-aqua-300"
                >
                  <FontAwesomeIcon icon={s.icon} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ================= MAIN BAR ================= */}
      <div
        className={cn(
          "relative z-50 border-b transition-all duration-300", // <-- "relative z-50" add kiya
          scrolled
            ? "border-line bg-white/85 shadow-[0_10px_35px_-12px_rgba(43,57,144,0.22)] backdrop-blur-xl"
            : "border-transparent bg-white",
        )}
      >
        <div
  className={cn(
    "mx-auto flex max-w-[1500px] items-center justify-between px-5 transition-all duration-300",
    scrolled ? "h-[60px] lg:h-[68px]" : "h-[72px] lg:h-[88px]",
  )}
>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Cybertricks Media Pvt Ltd"
              width={350}
              height={100}
              priority
              className={cn(
                "w-auto transition-all duration-300",
                scrolled ? "h-10 lg:h-16" : "h-14 lg:h-20",
              )}
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden h-full items-center gap-0.5 lg:flex"
            onMouseLeave={leave}
          >
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative flex h-full items-center"
                onMouseEnter={() =>
                  item.type ? enter(item.label) : setOpenMenu(null)
                }
              >
                <NavButton item={item} active={openMenu === item.label} />

                <AnimatePresence>
                  {item.type === "dropdown" && openMenu === item.label && (
                    <DropdownPanel item={item} />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact-us"
              className="group relative hidden overflow-hidden rounded-full bg-gradient-to-r from-brand-600 to-plum-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(43,57,144,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-10px_rgba(224,69,154,0.55)] md:inline-flex"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get a Free Quote
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-plum-600 to-accent-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Link>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid size-11 place-items-center rounded-full border border-line bg-white text-brand-600 transition hover:border-accent-300 hover:text-accent-500 lg:hidden"
            >
              {mobileOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        {/* Scroll progress */}
        <motion.div
          style={{ scaleX: progress }}
          className="h-[3px] origin-left bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500"
        />
      </div>

      {/* ================= MEGA PANEL ================= */}
      <AnimatePresence>
        {activeItem?.type === "mega" && (
          <MegaPanel
            item={activeItem}
            onEnter={() => enter(activeItem.label)}
            onLeave={leave}
          />
        )}
      </AnimatePresence>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}

/* ================= NAV BUTTON ================= */
function NavButton({ item, active }) {
  return (
    <Link
      href={item.href}
      className={cn(
        "group relative rounded-full px-4 py-2.5 text-[15px] font-medium transition-colors",
        active ? "text-brand-600" : "text-ink-soft hover:text-brand-600",
      )}
    >
      <span className="flex items-center gap-1.5">
        {item.label}
        {item.type && (
          <ChevronDown
            className={cn(
              "size-3.5 transition-transform duration-300",
              active && "rotate-180",
            )}
          />
        )}
      </span>
      <span
        className={cn(
          "absolute inset-x-4 bottom-1 h-[2.5px] origin-left rounded-full bg-gradient-to-r from-brand-600 via-plum-500 to-accent-500 transition-transform duration-300",
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
        )}
      />
    </Link>
  );
}

/* ================= SMALL DROPDOWN ================= */
function DropdownPanel({ item }) {
  const align = item.align || "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "absolute top-full z-50 pt-3",
        align === "right" && "right-0",
        align === "left" && "left-0",
        align === "center" && "left-1/2 -translate-x-1/2",
      )}
    >
      <div className="w-[250px] overflow-hidden rounded-2xl border border-line bg-white shadow-[0_28px_70px_-22px_rgba(43,57,144,0.38)]">
        <div className="h-[3px] w-full bg-gradient-to-r from-aqua-400 via-plum-500 to-accent-500" />

        <ul className="p-2">
          {item.links.map((l, i) => (
            <motion.li
              key={l.href}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.035 * i, duration: 0.25 }}
            >
              <Link
                href={l.href}
                className="group flex items-center justify-between rounded-xl px-4 py-2.5 text-[14.5px] text-ink-soft transition-all hover:bg-gradient-to-r hover:from-brand-50 hover:to-plum-50 hover:text-brand-600"
              >
                {l.label}
                <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ================= MEGA PANEL — TWO PANEL LAYOUT ================= */
function MegaPanel({ item, onEnter, onLeave }) {
  const [active, setActive] = useState(0);
  const col = item.columns[active];

  return (
    <motion.div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-x-0 top-full hidden lg:block"
    >
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-b-3xl border border-line bg-white shadow-[0_35px_90px_-25px_rgba(43,57,144,0.35)]">
        <div className="grid grid-cols-[300px_1fr]">
          {/* ---------- LEFT: CATEGORY LIST ---------- */}
          <div className="relative border-r border-line bg-canvas p-4">
            <p className="mb-2 px-3 pt-2 text-[10.5px] font-bold uppercase tracking-[0.14em] text-ink-mute">
              Service Categories
            </p>

            <ul className="space-y-0.5">
              {item.columns.map((c, i) => (
                <li key={c.title}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className={cn(
                      "group relative flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors duration-200",
                      active === i
                        ? "text-brand-600"
                        : "text-ink hover:text-brand-600",
                    )}
                  >
                    {active === i && (
                      <motion.span
                        layoutId="mega-active"
                        className="absolute inset-0 rounded-xl bg-white shadow-[0_10px_26px_-14px_rgba(43,57,144,0.5)]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}

                    <span
                      className={cn(
                        "relative grid size-9 shrink-0 place-items-center rounded-xl transition-all duration-300",
                        active === i
                          ? "bg-gradient-to-br from-brand-600 to-plum-600 text-white shadow-[0_10px_22px_-8px_rgba(43,57,144,0.6)]"
                          : "bg-gradient-to-br from-brand-50 to-plum-50 text-brand-600",
                      )}
                    >
                      <c.icon className="size-4" />
                    </span>

                    <span className="relative min-w-0 flex-1 text-[14px] font-semibold leading-tight">
                      {c.title}
                    </span>

                    <ChevronRight
                      className={cn(
                        "relative size-3.5 shrink-0 transition-all duration-300",
                        active === i
                          ? "translate-x-0 text-accent-500 opacity-100"
                          : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60",
                      )}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- RIGHT: LINKS ---------- */}
          <div className="relative flex flex-col p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={col.title}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1"
              >
                {/* Category header */}
                <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-600 to-plum-600 text-white shadow-[0_12px_28px_-10px_rgba(43,57,144,0.5)]">
                      <col.icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-[17px] font-bold leading-tight text-ink">
                        {col.title}
                      </p>
                      <p className="mt-0.5 text-[12.5px] text-ink-mute">
                        {col.links.length} services available
                      </p>
                    </div>
                  </div>

                  <Link
                    href={col.href}
                    className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-[13px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-r hover:from-brand-600 hover:to-plum-600 hover:text-white"
                  >
                    View Overview
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Links grid */}
                <ul className="mt-6 grid grid-cols-3 gap-x-6 gap-y-1">
                  {col.links.map((l, i) => (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.02 * i, duration: 0.22 }}
                    >
                      <Link
                        href={l.href}
                        className="group flex items-center gap-2 rounded-lg px-2 py-2 text-[13.5px] leading-snug text-ink-soft transition-all duration-200 hover:bg-brand-50 hover:text-brand-600"
                      >
                        <span className="h-px w-0 shrink-0 bg-accent-500 transition-all duration-300 group-hover:w-3" />
                        <span className="min-w-0">{l.label}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* CTA strip */}
            <div className="grad-deep mt-7 flex items-center justify-between rounded-2xl px-7 py-5 text-white">
              <div>
                <p className="text-[15px] font-semibold">
                  Not sure which service fits your brand?
                </p>
                <p className="text-sm text-white/75">
                  Get a free 30-minute strategy session with our experts.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:text-accent-600"
              >
                Book a Call
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ================= MOBILE MENU ================= */
function MobileMenu({ onClose }) {
  const [open, setOpen] = useState(null);
  const [openCol, setOpenCol] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 bg-white lg:hidden"
    >
      <div className="h-[88px]" />
      <div className="h-[calc(100vh-88px)] overflow-y-auto px-5 pb-28">
        {NAV.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * i, duration: 0.35 }}
            className="border-b border-line py-1"
          >
            <div className="flex items-center justify-between">
              <Link
                href={item.href}
                onClick={onClose}
                className="py-4 text-[17px] font-semibold text-ink"
              >
                {item.label}
              </Link>
              {item.type && (
                <button
                  onClick={() =>
                    setOpen(open === item.label ? null : item.label)
                  }
                  aria-label={`Toggle ${item.label}`}
                  className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-brand-50 to-plum-50 text-brand-600"
                >
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform",
                      open === item.label && "rotate-180",
                    )}
                  />
                </button>
              )}
            </div>

            <AnimatePresence>
              {open === item.label && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 pb-4">
                    {item.type === "mega"
                      ? item.columns.map((col) => (
                          <div
                            key={col.title}
                            className="overflow-hidden rounded-2xl border border-line"
                          >
                            {/* Category header */}
                            <button
                              onClick={() =>
                                setOpenCol(
                                  openCol === col.title ? null : col.title,
                                )
                              }
                              className={cn(
                                "flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors",
                                openCol === col.title
                                  ? "bg-brand-50"
                                  : "bg-canvas",
                              )}
                            >
                              <span
                                className={cn(
                                  "grid size-8 shrink-0 place-items-center rounded-lg transition-all",
                                  openCol === col.title
                                    ? "bg-gradient-to-br from-brand-600 to-plum-600 text-white"
                                    : "bg-white text-brand-600",
                                )}
                              >
                                <col.icon className="size-4" />
                              </span>

                              <span className="min-w-0 flex-1 text-[14px] font-semibold text-ink">
                                {col.title}
                              </span>

                              <span className="shrink-0 text-[11px] font-bold text-ink-mute">
                                {col.links.length}
                              </span>

                              <ChevronDown
                                className={cn(
                                  "size-4 shrink-0 text-ink-mute transition-transform",
                                  openCol === col.title && "rotate-180",
                                )}
                              />
                            </button>

                            <AnimatePresence>
                              {openCol === col.title && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25 }}
                                  className="overflow-hidden bg-white"
                                >
                                  <ul className="space-y-0.5 p-2">
                                    <li>
                                      <Link
                                        href={col.href}
                                        onClick={onClose}
                                        className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-[13.5px] font-semibold text-brand-600"
                                      >
                                        View All {col.title}
                                        <ArrowRight className="size-3.5" />
                                      </Link>
                                    </li>
                                    {col.links.map((l) => (
                                      <li key={l.href}>
                                        <Link
                                          href={l.href}
                                          onClick={onClose}
                                          className="block rounded-lg px-3 py-2.5 text-[13.5px] text-ink-soft"
                                        >
                                          {l.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))
                      : item.links.map((l) => (
                          <Link
                            key={l.href}
                            href={l.href}
                            onClick={onClose}
                            className="block pl-2 text-[15px] text-ink-soft"
                          >
                            {l.label}
                          </Link>
                        ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        <Link
          href="/contact-us"
          onClick={onClose}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 via-plum-600 to-accent-500 py-4 text-[15px] font-semibold text-white"
        >
          Get a Free Quote <ArrowRight className="size-4" />
        </Link>

        <div className="mt-8 space-y-3 text-center">
          <a
            href={CONTACT.phoneHref}
            className="block text-sm font-medium text-ink"
          >
            {CONTACT.phone}
          </a>
          <a href={CONTACT.emailHref} className="block text-sm text-ink-soft">
            {CONTACT.email}
          </a>
          <div className="flex items-center justify-center gap-3 pt-3">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-brand-50 to-plum-50 text-brand-600 transition hover:from-brand-600 hover:to-accent-500 hover:text-white"
              >
                <FontAwesomeIcon icon={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
