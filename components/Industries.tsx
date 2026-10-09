import { Icon } from "./Icon";
import { INDUSTRIES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import { Stagger, StaggerItem } from "./motion/Stagger";

export default function Industries() {
  return (
    <section className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Объекты"
          title={<>Где мы <span className="gradient-text">работаем</span></>}
          subtitle="Берём в работу любые типы коммерческой и жилой недвижимости с фасадным остеклением."
        />

        <Stagger className="mt-14 divide-y divide-white/[0.07]" stagger={0.05}>
          {INDUSTRIES.map((it, i) => (
            <StaggerItem key={it.title}>
              <div className="group -mx-2 flex cursor-default items-center justify-between rounded-lg px-2 py-5 transition-colors duration-200 hover:bg-white/[0.025]">
                <span className="w-10 shrink-0 font-display text-[clamp(0.9rem,1.4vw,1.1rem)] font-medium text-white/30 transition-colors duration-200 group-hover:text-white/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-[clamp(1.05rem,3vw,2.4rem)] font-semibold text-white transition-colors duration-200 group-hover:text-[var(--accent-bright)]">
                  {it.title}
                </span>
                <span className="shrink-0 text-white/20 transition-colors duration-200 group-hover:text-[var(--accent-bright)]">
                  <Icon name={it.icon} size={24} />
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
