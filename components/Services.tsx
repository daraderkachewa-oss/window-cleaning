"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Icon } from "./Icon";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion/Stagger";

export default function Services() {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const dur = reduce ? 0 : 0.28;

  return (
    <section id="services" className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Услуги"
          title={<>Полный цикл работ <span className="gradient-text">со стеклом</span></>}
          subtitle="От разовой послестроительной очистки до сервисного договора на регулярное обслуживание объекта."
        />

        <Stagger className="mt-14 divide-y divide-white/[0.07]" stagger={0.07}>
          {SERVICES.map((s, i) => {
            const isActive = active === i;
            return (
              <StaggerItem key={s.title}>
                <div
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setActive(active === i ? null : i)}
                  className="group cursor-pointer py-6 transition-colors duration-200"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-display w-10 shrink-0 text-sm font-semibold text-[var(--accent-bright)] opacity-70 group-hover:opacity-100 transition-opacity">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="flex-1 font-display text-[clamp(1rem,2.4vw,1.8rem)] font-semibold text-white/80 transition-colors duration-200 group-hover:text-white">
                      {s.title}
                    </h3>
                    <span className="shrink-0 text-white/20 transition-all duration-200 group-hover:text-[var(--accent-bright)] group-hover:rotate-12">
                      <Icon name={s.icon} size={22} />
                    </span>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: dur, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex items-end justify-between gap-8 pl-16 pt-3 pb-1">
                          <p className="text-base leading-relaxed text-white/70 max-w-xl">
                            {s.description}
                          </p>
                          <a
                            href="#contacts"
                            className="inline-flex shrink-0 items-center gap-1.5 text-[13px] font-semibold text-[var(--accent-bright)] transition-colors hover:text-white"
                          >
                            Запросить расчёт
                            <ArrowUpRight size={14} />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
