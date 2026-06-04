"use client";

import Image from "next/image";
import { TECHNOLOGIES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import GlowCard from "./motion/GlowCard";
import { Stagger, StaggerItem } from "./motion/Stagger";

export default function Technologies() {
  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Технологии"
          title={<>Технологии, которые <span className="gradient-text">видно на стекле</span></>}
          subtitle="Оборудование и материалы, обеспечивающие результат без разводов и вреда для конструкций."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TECHNOLOGIES.map((t) => (
            <StaggerItem key={t.title}>
              <GlowCard className="group relative h-[380px] overflow-hidden rounded-3xl border border-[#5286AC]/20">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04101d] via-[#04101d]/55 to-[#04101d]/15" />
                <span className="absolute left-5 top-5 rounded-full border border-[#5286AC]/30 bg-[#0a1a2f]/70 px-3 py-1 text-[11px] font-medium tracking-wide text-[var(--accent-bright)] backdrop-blur-md">
                  {t.detail}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-lg font-semibold text-white">{t.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--ink-dim)]">{t.text}</p>
                </div>
              </GlowCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
