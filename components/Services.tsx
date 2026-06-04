"use client";

import { Icon } from "./Icon";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import GlowCard from "./motion/GlowCard";
import { Stagger, StaggerItem } from "./motion/Stagger";

export default function Services() {
  return (
    <section id="services" className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Услуги"
          title={<>Полный цикл работ <span className="gradient-text">со стеклом</span></>}
          subtitle="От разовой послестроительной очистки до сервисного договора на регулярное обслуживание объекта."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <StaggerItem key={s.title}>
              <GlowCard className="group flex h-full flex-col rounded-3xl border border-[#5286AC]/20 bg-[#003556]/40 p-7 backdrop-blur-xl">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#5286AC]/25 bg-[rgba(127,197,245,0.1)] text-[var(--accent-bright)]">
                    <Icon name={s.icon} size={22} />
                  </span>
                  <span className="font-display text-2xl font-semibold text-[var(--ink-faint)]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display mt-6 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-[var(--ink-dim)]">
                  {s.description}
                </p>
                <a
                  href="#contacts"
                  className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--accent-bright)] transition-colors hover:text-white"
                >
                  Запросить расчёт
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </GlowCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
