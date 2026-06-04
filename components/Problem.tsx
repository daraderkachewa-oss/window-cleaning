"use client";

import { Icon } from "./Icon";
import { PROBLEMS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import GlowCard from "./motion/GlowCard";
import { Stagger, StaggerItem } from "./motion/Stagger";

export default function Problem() {
  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Почему это важно"
          title={
            <>
              Загрязнённое остекление <span className="gradient-text">снижает ценность</span> объекта
            </>
          }
          subtitle="Фасад — это лицо здания и первый аргумент в переговорах с арендаторами. Вот что теряет объект, пока стекло остаётся грязным."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p) => (
            <StaggerItem key={p.title}>
              <GlowCard className="h-full rounded-3xl border border-[#5286AC]/20 bg-[#003556]/40 p-7 backdrop-blur-xl">
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-[#5286AC]/25 bg-[rgba(127,197,245,0.1)] text-[var(--accent-bright)]">
                  <Icon name={p.icon} size={22} />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--ink-dim)]">{p.text}</p>
              </GlowCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
