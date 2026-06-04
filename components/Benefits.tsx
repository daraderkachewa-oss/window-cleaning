"use client";

import { Icon } from "./Icon";
import { BENEFITS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion/Stagger";

export default function Benefits() {
  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Почему выбирают нас"
          title={<>Подрядчик, за которым <span className="gradient-text">не нужно следить</span></>}
          subtitle="Шесть принципов, которые превращают разовую мойку в управляемый и предсказуемый процесс."
        />

        <Stagger className="mt-14 grid gap-4 md:grid-cols-2" stagger={0.07}>
          {BENEFITS.map((b) => (
            <StaggerItem key={b.title}>
              <div className="group flex h-full items-start gap-5 rounded-2xl border border-[#5286AC]/20 bg-[#003556]/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-[var(--glass-border-lit)] hover:bg-[#003556]/55">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[#5286AC]/25 bg-[rgba(127,197,245,0.1)] text-[var(--accent-bright)] transition-transform duration-300 group-hover:scale-105">
                  <Icon name={b.icon} size={22} />
                </span>
                <div>
                  <h3 className="font-display text-[17px] font-semibold text-white">{b.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[var(--ink-dim)]">{b.text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
