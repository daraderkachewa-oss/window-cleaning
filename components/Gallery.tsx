"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY, GALLERY_FILTERS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const reduce = useReducedMotion();
  const scroller = useRef<HTMLDivElement>(null);
  const items = filter === "all" ? GALLERY : GALLERY.filter((g) => g.category === filter);

  // Reset to the start whenever the category changes.
  useEffect(() => {
    scroller.current?.scrollTo({ left: 0, behavior: "auto" });
  }, [filter]);

  function page(dir: number) {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  }

  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Галерея"
          title={<>Фотографии <span className="gradient-text">с объектов</span></>}
          subtitle="Реальные работы по категориям недвижимости. Листайте ленту и переключайте фильтр."
          center
        />

        {/* Filters */}
        <Reveal delay={0.05}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
            {GALLERY_FILTERS.map((f) => {
              const isActive = filter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`relative rounded-full px-5 py-2.5 text-[13.5px] font-medium transition-colors ${
                    isActive ? "text-white" : "text-[var(--ink-dim)] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="gal-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-[var(--glass-border-lit)] bg-[rgba(127,197,245,0.14)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {f.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Slider */}
        <div className="relative mt-12">
          <button
            onClick={() => page(-1)}
            aria-label="Назад"
            className="absolute left-0 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#5286AC]/25 bg-[#0a1a2f]/80 p-3 text-white backdrop-blur-xl transition-colors hover:border-[var(--glass-border-lit)] sm:grid"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => page(1)}
            aria-label="Вперёд"
            className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 translate-x-1/2 place-items-center rounded-full border border-[#5286AC]/25 bg-[#0a1a2f]/80 p-3 text-white backdrop-blur-xl transition-colors hover:border-[var(--glass-border-lit)] sm:grid"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scroller}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-3"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {items.map((g) => (
                <motion.div
                  key={g.src}
                  layout={!reduce}
                  initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
                  transition={{ duration: reduce ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative aspect-[4/3] w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#5286AC]/20 sm:w-[330px] lg:w-[380px]"
                >
                  <Image
                    src={g.src}
                    alt={g.label}
                    fill
                    sizes="(max-width:640px) 80vw, 380px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04101d]/85 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 translate-y-1 text-[14px] font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {g.label}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
