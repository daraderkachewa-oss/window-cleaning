"use client";

import { CASES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";
import BeforeAfter from "./motion/BeforeAfter";

const BLOCKS = [
  { key: "problem", label: "Проблема", dot: "bg-amber-300" },
  { key: "solution", label: "Решение", dot: "bg-[var(--accent-bright)]" },
  { key: "result", label: "Результат", dot: "bg-emerald-300" },
] as const;

export default function Cases() {
  return (
    <section id="works" className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Кейсы"
          title={<>Объекты, которые <span className="gradient-text">говорят за нас</span></>}
          subtitle="Потяните за разделитель, чтобы сравнить состояние остекления до и после нашей работы."
        />

        <div className="mt-16 space-y-16 lg:space-y-24">
          {CASES.map((c, i) => (
            <Reveal key={c.id}>
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <BeforeAfter before={c.before} after={c.after} alt={c.name} />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">{c.name}</h3>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="rounded-full border border-[#5286AC]/20 bg-[#003556]/40 px-4 py-2 text-[13px] backdrop-blur-xl">
                      <span className="text-[var(--ink-muted)]">Площадь: </span>
                      <span className="font-medium text-white">{c.area}</span>
                    </span>
                    <span className="rounded-full border border-[#5286AC]/20 bg-[#003556]/40 px-4 py-2 text-[13px] backdrop-blur-xl">
                      <span className="text-[var(--ink-muted)]">Срок: </span>
                      <span className="font-medium text-white">{c.duration}</span>
                    </span>
                  </div>

                  <dl className="mt-6 space-y-4">
                    {BLOCKS.map((b) => (
                      <div key={b.key} className="flex gap-3">
                        <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${b.dot}`} />
                        <div>
                          <dt className="text-[12px] font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
                            {b.label}
                          </dt>
                          <dd className="mt-1 text-[14.5px] leading-relaxed text-[var(--ink-dim)]">
                            {c[b.key]}
                          </dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
