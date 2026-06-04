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

        {/* Bento grid — asymmetric */}
        <Stagger className="mt-14 grid gap-4 md:grid-cols-3" stagger={0.07}>

          {/* Card 0: Wide hero — Работа по регламенту */}
          <StaggerItem className="md:col-span-2">
            <div className="group flex h-full items-start gap-6 rounded-3xl border border-[#5286AC]/20 bg-[#003556]/40 p-8 backdrop-blur-xl transition-all duration-300 hover:border-[var(--glass-border-lit)] hover:bg-[#003556]/55">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-[#5286AC]/25 bg-[rgba(127,197,245,0.1)] text-[var(--accent-bright)]">
                <Icon name={BENEFITS[0].icon} size={26} />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">{BENEFITS[0].title}</h3>
                <p className="mt-2 text-base leading-relaxed text-white/75">{BENEFITS[0].text}</p>
              </div>
            </div>
          </StaggerItem>

          {/* Card 1: Normal — Фотоотчёт */}
          <StaggerItem>
            <div className="group flex h-full flex-col rounded-3xl border border-[#5286AC]/20 bg-[#003556]/40 p-7 backdrop-blur-xl transition-all duration-300 hover:border-[var(--glass-border-lit)] hover:bg-[#003556]/55">
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-[#5286AC]/25 bg-[rgba(127,197,245,0.1)] text-[var(--accent-bright)]">
                <Icon name={BENEFITS[1].icon} size={22} />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{BENEFITS[1].title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-white/70">{BENEFITS[1].text}</p>
            </div>
          </StaggerItem>

          {/* Card 2: Normal — Договор */}
          <StaggerItem>
            <div className="group flex h-full flex-col rounded-3xl border border-[#5286AC]/20 bg-[#003556]/40 p-7 backdrop-blur-xl transition-all duration-300 hover:border-[var(--glass-border-lit)] hover:bg-[#003556]/55">
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-[#5286AC]/25 bg-[rgba(127,197,245,0.1)] text-[var(--accent-bright)]">
                <Icon name={BENEFITS[2].icon} size={22} />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{BENEFITS[2].title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-white/70">{BENEFITS[2].text}</p>
            </div>
          </StaggerItem>

          {/* Card 3: Normal — Безопасные технологии */}
          <StaggerItem>
            <div className="group flex h-full flex-col rounded-3xl border border-[#5286AC]/20 bg-[#003556]/40 p-7 backdrop-blur-xl transition-all duration-300 hover:border-[var(--glass-border-lit)] hover:bg-[#003556]/55">
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-[#5286AC]/25 bg-[rgba(127,197,245,0.1)] text-[var(--accent-bright)]">
                <Icon name={BENEFITS[3].icon} size={22} />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{BENEFITS[3].title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-white/70">{BENEFITS[3].text}</p>
            </div>
          </StaggerItem>

          {/* Card 4: Normal — Оборудование */}
          <StaggerItem>
            <div className="group flex h-full flex-col rounded-3xl border border-[#5286AC]/20 bg-[#003556]/40 p-7 backdrop-blur-xl transition-all duration-300 hover:border-[var(--glass-border-lit)] hover:bg-[#003556]/55">
              <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-[#5286AC]/25 bg-[rgba(127,197,245,0.1)] text-[var(--accent-bright)]">
                <Icon name={BENEFITS[4].icon} size={22} />
              </span>
              <h3 className="font-display text-lg font-semibold text-white">{BENEFITS[4].title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-white/70">{BENEFITS[4].text}</p>
            </div>
          </StaggerItem>

          {/* Card 5: Wide accent — Гибкий график */}
          <StaggerItem className="md:col-span-2">
            <div className="group flex h-full items-start gap-6 rounded-3xl border border-[var(--accent-bright)]/25 bg-[rgba(127,197,245,0.06)] p-8 backdrop-blur-xl transition-all duration-300 hover:border-[var(--accent-bright)]/50 hover:bg-[rgba(127,197,245,0.1)]">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-[var(--accent-bright)]/30 bg-[rgba(127,197,245,0.12)] text-[var(--accent-bright)]">
                <Icon name={BENEFITS[5].icon} size={26} />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">{BENEFITS[5].title}</h3>
                <p className="mt-2 text-base leading-relaxed text-white/75">{BENEFITS[5].text}</p>
              </div>
            </div>
          </StaggerItem>

        </Stagger>
      </div>
    </section>
  );
}
