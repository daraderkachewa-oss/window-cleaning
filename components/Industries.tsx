"use client";

import { useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "motion/react";
import { Icon } from "./Icon";
import { INDUSTRIES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion/Stagger";

const IMAGES: Record<string, string> = {
  "Бизнес-центры":               "/images/gal-bc-1.jpg",
  "Торговые центры":             "/images/gal-mall-1.jpg",
  "Офисные здания":              "/images/gal-office-1.jpg",
  "Автосалоны":                  "/images/gal-auto-1.jpg",
  "Гостиницы":                   "/images/gal-bc-2.jpg",
  "Медицинские центры":          "/images/gal-office-2.jpg",
  "Жилые комплексы":             "/images/gal-bc-3.jpg",
  "Образовательные учреждения":  "/images/gal-office-3.jpg",
};

const IMG_W = 240;
const IMG_H = 160;

export default function Industries() {
  const [active, setActive] = useState<string | null>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 280, damping: 24 });
  const y = useSpring(rawY, { stiffness: 280, damping: 24 });
  const transform = useMotionTemplate`translate(${x}px, ${y}px)`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    rawX.set(e.clientX - r.left + 24);
    rawY.set(e.clientY - r.top - IMG_H / 2);
  }

  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-28">
      <div
        className="relative mx-auto max-w-7xl"
        onMouseMove={onMove}
        onMouseLeave={() => setActive(null)}
      >
        <SectionHeading
          eyebrow="Объекты"
          title={<>Где мы <span className="gradient-text">работаем</span></>}
          subtitle="Берём в работу любые типы коммерческой и жилой недвижимости с фасадным остеклением."
        />

        {/* Floating cursor image — follows mouse with spring physics */}
        <AnimatePresence>
          {active && IMAGES[active] && (
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.82, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              exit={{ opacity: 0, scale: 0.78, rotate: -4 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              style={{
                transform,
                width: IMG_W,
                height: IMG_H,
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 30,
                pointerEvents: "none",
              }}
              className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.75)]"
            >
              <Image
                src={IMAGES[active]}
                alt={active}
                fill
                sizes="240px"
                className="object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <Stagger className="mt-14 divide-y divide-white/[0.07]" stagger={0.05}>
          {INDUSTRIES.map((it, i) => (
            <StaggerItem key={it.title}>
              <div
                className="group -mx-2 flex cursor-default items-center justify-between rounded-lg px-2 py-5 transition-colors duration-200 hover:bg-white/[0.025]"
                onMouseEnter={() => setActive(it.title)}
              >
                <span className="w-10 shrink-0 font-display text-[clamp(0.9rem,1.4vw,1.1rem)] font-medium text-white/30 transition-colors duration-200 group-hover:text-white/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-[clamp(1.35rem,3vw,2.4rem)] font-semibold text-white transition-colors duration-200 group-hover:text-[var(--accent-bright)]">
                  {it.title}
                </span>
                <span className="shrink-0 text-white/20 transition-colors duration-200 group-hover:text-[var(--accent-bright)]">
                  <Icon name={it.icon} size={24} />
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
