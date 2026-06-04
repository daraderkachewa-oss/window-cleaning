"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import MagneticButton from "./motion/MagneticButton";
import { CONTACTS } from "@/lib/constants";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
  };

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">

      {/* Z-0: Full-bleed photo background */}
      <Image
        src="/images/hero.jpg"
        alt="Промышленный альпинист моет остекление стеклянного фасада небоскрёба"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_28%]"
        style={{ zIndex: 0 }}
      />

      {/* Z-1: Cinematic veil — heavy blur with reveal window (upper-right) */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          backdropFilter: "blur(48px) saturate(115%)",
          WebkitBackdropFilter: "blur(48px) saturate(115%)",
          background: "linear-gradient(135deg, rgba(3,10,22,0.72) 0%, rgba(3,10,22,0.35) 55%, rgba(3,10,22,0.10) 100%)",
          maskImage: "radial-gradient(58% 62% at 72% 30%, transparent 0%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.92) 74%)",
          WebkitMaskImage: "radial-gradient(58% 62% at 72% 30%, transparent 0%, rgba(0,0,0,0.55) 42%, rgba(0,0,0,0.92) 74%)",
        }}
      />

      {/* Z-2: Mesh gradient orbs — atmospheric tinting over the veil */}
      <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: "5%", right: "3%",
          width: 620, height: 620,
          background: "radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)",
          filter: "blur(120px)",
          animation: "orb-float-a 20s ease-in-out infinite",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", bottom: "10%", right: "12%",
          width: 530, height: 530,
          background: "radial-gradient(circle, rgba(29,78,216,0.22) 0%, transparent 70%)",
          filter: "blur(120px)",
          animation: "orb-float-b 26s ease-in-out infinite",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", top: "40%", left: "8%",
          width: 410, height: 410,
          background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)",
          filter: "blur(120px)",
          animation: "orb-float-c 18s ease-in-out infinite",
          borderRadius: "50%",
        }} />
      </div>

      {/* Z-10: Content — anchored to bottom of viewport */}
      <div className="relative flex flex-1 items-end" style={{ zIndex: 10 }}>
        <div className="mx-auto w-full max-w-7xl grid grid-cols-1 items-start gap-12 px-6 pb-20 pt-40 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">

          {/* LEFT — heading monument */}
          <motion.div
            variants={reduce ? undefined : container}
            initial={reduce ? undefined : "hidden"}
            animate={reduce ? undefined : "show"}
          >
            <motion.span variants={reduce ? undefined : item} className="eyebrow">
              {CONTACTS.region}
            </motion.span>

            <motion.h1
              variants={reduce ? undefined : item}
              className="display-xl mt-3 max-w-[720px] text-[clamp(1.75rem,4.8vw,4.25rem)] lg:max-w-none"
              style={{ lineHeight: 1.08 }}
            >
              Мойка{" "}
              <span className="gradient-text">остекления</span>
              <br />
              фасадов без остановки
              <br />
              работы объектов.
            </motion.h1>
          </motion.div>

          {/* RIGHT — navigation block */}
          <motion.div
            variants={reduce ? undefined : container}
            initial={reduce ? undefined : "hidden"}
            animate={reduce ? undefined : "show"}
            className="pb-1"
          >
            <motion.p
              variants={reduce ? undefined : item}
              className="text-[16px] leading-relaxed text-[var(--ink-dim)]"
            >
              Профессиональная мойка остекления фасадов с применением передовых технологий и
              экосертифицированных средств. Работаем на территории Москвы и Московской области.
            </motion.p>

            <motion.div variants={reduce ? undefined : item} className="mt-8 inline-flex">
              <div className="liquid-glass flex items-center gap-2 rounded-full p-1.5">
                <a
                  href="#services"
                  className="relative z-10 rounded-full px-3 py-2.5 text-[14px] font-medium text-[var(--ink-dim)] transition-colors hover:text-white sm:px-5 sm:py-3 sm:text-[15px]"
                >
                  Наши услуги
                </a>
                <MagneticButton href="#contacts" className="btn btn-primary relative z-10">
                  Получить расчёт
                  <ArrowRight size={18} />
                </MagneticButton>
              </div>
            </motion.div>

            <motion.ul
              variants={reduce ? undefined : item}
              className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[13px] text-[var(--ink-muted)]"
            >
              {["Договор с юрлицами", "Фотоотчёт по каждому выезду", "Гибкий график"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-[var(--accent-bright)]" />
                  {t}
                </li>
              ))}
            </motion.ul>
          </motion.div>

        </div>
      </div>

      {/* Z-20: Chips — desktop only, hidden on mobile to avoid overlapping content */}
      <div className="hidden lg:block" style={{ position: "absolute", inset: 0, zIndex: 20, pointerEvents: "none" }}>
        <div className="relative mx-auto h-full w-full max-w-7xl px-6">

          {/* "10+ лет" chip — upper reveal zone */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.6, ease: EASE }}
            className="glass-frost absolute right-6 overflow-hidden px-5 py-4 text-right"
            style={{ top: "24%", pointerEvents: "auto" }}
          >
            <img
              src="/brand-logo.svg"
              alt=""
              aria-hidden
              className="pointer-events-none absolute -left-2 -top-2 h-14 w-auto opacity-20"
              style={{ filter: "drop-shadow(0 0 6px rgba(127,197,245,0.3))" }}
            />
            <span className="font-display relative block text-xl font-semibold gradient-text">10+ лет</span>
            <span className="relative text-[12px] text-[var(--ink-muted)]">на высоте</span>
          </motion.div>

          {/* Rating chip — below trust badges */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: EASE }}
            className="glass-frost absolute right-6 flex items-center gap-3 overflow-hidden px-5 py-4"
            style={{ bottom: "24px", pointerEvents: "auto" }}
          >
            <img
              src="/brand-logo.svg"
              alt=""
              aria-hidden
              className="pointer-events-none absolute -right-2 -bottom-2 h-16 w-auto opacity-20"
              style={{ filter: "drop-shadow(0 0 8px rgba(127,197,245,0.4))" }}
            />
            <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[rgba(127,197,245,0.12)]">
              <Star size={17} className="text-[var(--accent-bright)]" fill="currentColor" />
            </span>
            <span className="relative leading-tight">
              <span className="font-display block text-lg font-semibold text-white">4.9 / 5.0</span>
              <span className="text-[12px] text-[var(--ink-muted)]">оценка заказчиков</span>
            </span>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
