"use client";

import { Icon } from "./Icon";
import { INDUSTRIES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion/Stagger";

export default function Industries() {
  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Объекты"
          title={<>Где мы <span className="gradient-text">работаем</span></>}
          subtitle="Берём в работу любые типы коммерческой и жилой недвижимости с фасадным остеклением."
        />

        <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4" stagger={0.06}>
          {INDUSTRIES.map((it) => (
            <StaggerItem key={it.title}>
              <div className="group flex h-full items-center gap-4 rounded-2xl border border-[#5286AC]/20 bg-[#003556]/40 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--glass-border-lit)] hover:bg-[#003556]/55">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-[#5286AC]/25 bg-[rgba(127,197,245,0.08)] text-[var(--accent-bright)] transition-colors group-hover:bg-[rgba(127,197,245,0.16)]">
                  <Icon name={it.icon} size={20} />
                </span>
                <span className="text-[14.5px] font-medium leading-tight text-[var(--ink)]">{it.title}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
