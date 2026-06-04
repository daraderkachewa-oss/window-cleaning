"use client";

import { Icon } from "./Icon";
import { PROCESS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion/Stagger";

export default function Process() {
  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Как проходит работа"
          title={<>Шесть этапов — <span className="gradient-text">от звонка до акта</span></>}
          subtitle="Прозрачный процесс, в котором заказчик видит каждый шаг и контролирует результат."
          center
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* connecting line */}
          <div className="absolute bottom-6 left-[27px] top-6 w-px bg-gradient-to-b from-[var(--accent-bright)] via-[var(--accent)]/40 to-transparent" />
          <Stagger className="space-y-5" stagger={0.1}>
            {PROCESS.map((step) => (
              <StaggerItem key={step.number}>
                <div className="relative flex items-stretch gap-5">
                  <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-[#5286AC]/30 bg-[#0a1a2f] text-[var(--accent-bright)] shadow-[0_0_30px_-8px_rgba(127,197,245,0.5)]">
                    <Icon name={step.icon} size={22} />
                  </span>
                  <div className="flex-1 rounded-2xl border border-[#5286AC]/20 bg-[#003556]/40 p-5 backdrop-blur-xl transition-colors duration-300 hover:border-[var(--glass-border-lit)]">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm font-semibold text-[var(--accent)]">{step.number}</span>
                      <h3 className="font-display text-[17px] font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-[var(--ink-dim)]">{step.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
