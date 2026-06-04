"use client";

import { GUARANTEES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
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

        {/* Typographic numbered list — Swiss grid style */}
        <Stagger className="mt-14 divide-y divide-white/[0.07]" stagger={0.08}>
          {GUARANTEES.map((g, i) => (
            <StaggerItem key={g.title}>
              <div className="grid grid-cols-[3.5rem_1fr] gap-6 py-8 items-start lg:grid-cols-[5rem_1fr_1.4fr]">
                {/* Large dim index */}
                <span className="font-display text-[2.8rem] font-bold leading-none text-white/10 lg:text-[3.5rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Title */}
                <h3 className="font-display text-[1.15rem] font-semibold text-white pt-1 lg:text-xl">
                  {g.title}
                </h3>
                {/* Description — hidden on mobile grid, shown below on sm */}
                <p className="col-span-full lg:col-span-1 text-base leading-relaxed text-white/70 lg:pt-1 pl-[3.5rem] lg:pl-0">
                  {g.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
