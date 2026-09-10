"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowLeft, ArrowRight, Award, Sparkles } from "lucide-react";

const RECOGNITIONS = [
  {
    id: 1,
    title: "MSME Registered",
    subtitle: "Government Recognised",
    image: "/home/msme.png",
  },
  {
    id: 2,
    title: "Startup India",
    subtitle: "Recognised Startup",
    image: "/home/startup.png",
  },
  {
    id: 3,
    title: "ISO 9001:2015",
    subtitle: "Quality Management",
    image: "/home/iso.png",
  },
 {
  id: 4,
  title: "GeM Registered",
  subtitle: "Government e-Marketplace",
  image: "/home/GEM.jpg",
},
];

export default function RecognitionSection() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#eef8ff] py-16 lg:py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-[380px] w-[380px] rounded-full bg-cyan-300/20 blur-[100px]" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-violet-300/20 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(#8db9d9 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Decorative curves */}
      <div className="pointer-events-none absolute -left-[10%] top-[22%] h-[300px] w-[120%] rounded-[50%] border border-white/70" />

      <div className="pointer-events-none absolute -left-[10%] top-[28%] h-[300px] w-[120%] rounded-[50%] border border-white/50" />

      <div className="container-x relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-600 shadow-sm backdrop-blur">
            <Award className="size-3.5" />
            Trust & Credibility
          </span>

          <h2 className="mt-5 text-[34px] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[44px] lg:text-[50px]">
            Recognised for{" "}
            <span className="grad-text-anim">
              Excellence & Impact.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-ink-soft sm:text-[16px]">
            Our work, commitment and quality have earned recognition from
            trusted organisations and industry platforms.
          </p>
        </motion.div>

        {/* Recognition Cards */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative mt-14"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {RECOGNITIONS.slice(0, 4).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.3 + index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative"
              >
                <div className="relative h-[250px] overflow-hidden rounded-[28px] border border-white/80 bg-white/85 p-5 shadow-[0_20px_60px_-30px_rgba(43,57,144,0.35)] backdrop-blur-xl transition-all duration-500 group-hover:shadow-[0_28px_70px_-30px_rgba(43,57,144,0.5)]">
                  {/* Glow */}
                  <div className="absolute -right-10 -top-10 size-28 rounded-full bg-brand-100/60 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                  {/* Logo area */}
                  <div className="relative flex h-[155px] items-center justify-center rounded-[20px] bg-gradient-to-br from-slate-50 via-white to-blue-50">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-[105px] max-w-[150px] object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative mt-4">
                    <h3 className="text-[15px] font-bold text-ink">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[12px] font-medium text-ink-mute">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

     
        </motion.div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"
        >
          <Sparkles className="size-4 text-accent-500" />

          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-mute">
            Building a Better Tomorrow
          </p>

          <span className="hidden h-1 w-1 rounded-full bg-brand-400 sm:block" />

          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-mute">
            Together We Grow
          </p>
        </motion.div>
      </div>
    </section>
  );
}