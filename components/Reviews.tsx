"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { REVIEWS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";

export default function Reviews() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const go = useCallback((d: number) => {
    setDir(d);
    setIdx((i) => (i + d + REVIEWS.length) % REVIEWS.length);
  }, []);

  useEffect(() => {
    if (paused || reduce) return;
    const t = setInterval(() => {
      setDir(1);
      setIdx((i) => (i + 1) % REVIEWS.length);
    }, 6500);
    return () => clearInterval(t);
  }, [paused, reduce]);

  const r = REVIEWS[idx];
  const variants = {
    enter: (d: number) => ({ opacity: 0, x: reduce ? 0 : d > 0 ? 64 : -64 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: reduce ? 0 : d > 0 ? -64 : 64 }),
  };

  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Отзывы"
          title={<>Что говорят <span className="gradient-text">заказчики</span></>}
          center
        />

        <div
          className="relative mx-auto mt-12 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative overflow-hidden rounded-3xl border border-[#5286AC]/20 bg-[#003556]/40 p-8 backdrop-blur-xl md:p-12">
            <Quote size={56} className="text-[var(--accent)]/25" />
            <div className="relative min-h-[210px] sm:min-h-[180px]">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={idx}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="mb-5 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className="text-[var(--accent-bright)]" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-[16px] leading-relaxed text-[var(--ink)] md:text-[18px]">{r.text}</p>
                  <div className="mt-7">
                    <div className="font-display text-[16px] font-semibold text-white">{r.name}</div>
                    <div className="text-[13.5px] text-[var(--ink-muted)]">
                      {r.title} · {r.company}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDir(i > idx ? 1 : -1);
                    setIdx(i);
                  }}
                  aria-label={`Отзыв ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === idx ? "w-7 bg-[var(--accent-bright)]" : "w-2 bg-[var(--ink-faint)] hover:bg-[var(--ink-muted)]"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Предыдущий отзыв"
                className="grid h-11 w-11 place-items-center rounded-full border border-[#5286AC]/20 bg-[#003556]/40 text-[var(--ink)] backdrop-blur-xl transition-colors hover:border-[var(--glass-border-lit)] hover:text-white"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Следующий отзыв"
                className="grid h-11 w-11 place-items-center rounded-full border border-[#5286AC]/20 bg-[#003556]/40 text-[var(--ink)] backdrop-blur-xl transition-colors hover:border-[var(--glass-border-lit)] hover:text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
