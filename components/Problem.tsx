"use client";

import { Icon } from "./Icon";
import { PROBLEMS } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
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

        {/* Bento grid — asymmetric sizes */}
        <Stagger className="mt-14 grid gap-4 md:grid-cols-3" stagger={0.07}>
          {/* Card 0: wide hero card */}
          <StaggerItem className="md:col-span-2">
            <div className="group flex h-full flex-col rounded-3xl border border-[#5286AC]/20 bg-[#003556]/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-[var(--glass-border-lit)] hover:bg-[#003556]/55">
              <span className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-[#5286AC]/25 bg-[rgba(127,197,245,0.1)] text-[var(--accent-bright)]">
                <Icon name={PROBLEMS[0].icon} size={26} />
              </span>
              <h3 className="font-display text-xl font-semibold text-white md:text-2xl">{PROBLEMS[0].title}</h3>
              <p className="mt-3 text-base leading-relaxed text-white/75">{PROBLEMS[0].text}</p>
            </div>
          </StaggerItem>

          {/* Card 1: normal */}
          <StaggerItem>
            <div className="group flex h-full flex-col rounded-3xl border border-[#5286AC]/20 bg-[#003556]/40 p-7 backdrop-blur-xl transition-all duration-300 hover:border-[var(--glass-border-lit)] hover:bg-[#003556]/55">
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-[#5286AC]/25 bg-[rgba(127,197,245,0.1)] text-[var(--accent-bright)]">
                <Icon name={PROBLEMS[1].icon} size={22} />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{PROBLEMS[1].title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">{PROBLEMS[1].text}</p>
            </div>
          </StaggerItem>

          {/* Card 2: normal */}
          <StaggerItem>
            <div className="group flex h-full flex-col rounded-3xl border border-[#5286AC]/20 bg-[#003556]/40 p-7 backdrop-blur-xl transition-all duration-300 hover:border-[var(--glass-border-lit)] hover:bg-[#003556]/55">
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-[#5286AC]/25 bg-[rgba(127,197,245,0.1)] text-[var(--accent-bright)]">
                <Icon name={PROBLEMS[2].icon} size={22} />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{PROBLEMS[2].title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/70">{PROBLEMS[2].text}</p>
            </div>
          </StaggerItem>

          {/* Card 3: wide footer card — horizontal layout */}
          <StaggerItem className="md:col-span-2">
            <div className="group flex h-full items-start gap-6 rounded-3xl border border-[#5286AC]/20 bg-[#003556]/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-[var(--glass-border-lit)] hover:bg-[#003556]/55">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-[#5286AC]/25 bg-[rgba(127,197,245,0.1)] text-[var(--accent-bright)]">
                <Icon name={PROBLEMS[3].icon} size={26} />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">{PROBLEMS[3].title}</h3>
                <p className="mt-2 text-base leading-relaxed text-white/75">{PROBLEMS[3].text}</p>
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
