"use client";

import { Icon } from "./Icon";
import { GUARANTEES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import GlowCard from "./motion/GlowCard";
import { Stagger, StaggerItem } from "./motion/Stagger";

export default function Guarantees() {
  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Гарантии"
          title={<>Что мы <span className="gradient-text">гарантируем</span> по договору</>}
          subtitle="Каждое обязательство закреплено документально — не на словах, а в условиях контракта."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5" stagger={0.08}>
          {GUARANTEES.map((g) => (
            <StaggerItem key={g.title}>
              <GlowCard className="flex h-full flex-col rounded-3xl border border-[#5286AC]/20 bg-[#003556]/40 p-6 backdrop-blur-xl">
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-[#5286AC]/25 bg-[rgba(127,197,245,0.1)] text-[var(--accent-bright)]">
                  <Icon name={g.icon} size={22} />
                </span>
                <h3 className="font-display text-[16px] font-semibold leading-snug text-white">{g.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--ink-dim)]">{g.text}</p>
              </GlowCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
