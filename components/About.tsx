"use client";

import { STATS } from "@/lib/constants";
import Reveal from "./motion/Reveal";
import Counter from "./motion/Counter";
import { Stagger, StaggerItem } from "./motion/Stagger";

export default function About() {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <div className="max-w-xl">
            <Reveal>
              <span className="eyebrow">О компании</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="display-xl mt-5 text-[clamp(1.9rem,4vw,3.1rem)]">
                Десять лет на высоте — и ни одного компромисса по{" "}
                <span className="gradient-text">качеству</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-[15px] leading-relaxed text-[var(--ink-dim)] md:text-base">
              Мы — специализированный подрядчик по мойке фасадного остекления коммерческой
              недвижимости. Работаем только с юридическими лицами по договору, используем собственный
              парк оборудования и закрываем объект полным пакетом документов. За годы работы вымыты
              миллионы квадратных метров стекла — от автосалонов до башен класса А.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {STATS.map((s) => (
            <StaggerItem key={s.label}>
              <div className="h-full rounded-3xl border border-[#5286AC]/20 bg-[#003556]/40 p-7 backdrop-blur-xl">
                <span className="font-display block text-[clamp(2.4rem,5vw,3.4rem)] font-bold leading-none gradient-text">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className="mt-4 block text-[14px] text-[var(--ink-dim)]">{s.label}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
