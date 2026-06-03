"use client";
import { Droplets, Ruler, Wrench, Leaf } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TECHNOLOGIES } from "@/lib/constants";

const ICONS = [Droplets, Ruler, Wrench, Leaf];

export default function Technologies() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.12 });

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#105785]/10 to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal-item section-label mb-6">Технологии</div>
        <div className="reveal-item grid lg:grid-cols-2 gap-6 items-end mb-14">
          <h2
            className="font-[700] text-[#E0EBFC] leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(30px, 3.5vw, 52px)" }}
          >
            Оборудование —{" "}
            <span className="gradient-text">наше конкурентное преимущество</span>
          </h2>
          <p className="text-[#E0EBFC]/60 text-lg leading-relaxed">
            Собственный парк профессионального оборудования позволяет нам контролировать качество
            и соблюдать сроки независимо от внешних факторов.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TECHNOLOGIES.map(({ title, description, detail }, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={title}
                className="reveal-item glass-panel p-7 flex flex-col gap-5 transition-glass hover:bg-[#105785]/30 hover:border-[#5286AC]/40 hover:-translate-y-1 cursor-default"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#5286AC]/15 border border-[#5286AC]/20 flex items-center justify-center shrink-0">
                    <Icon size={22} className="text-[#5286AC]" />
                  </div>
                  <span className="text-[#5286AC] font-[700] text-xs bg-[#5286AC]/10 border border-[#5286AC]/20 rounded-full px-3 py-1 shrink-0">
                    {detail}
                  </span>
                </div>
                <div>
                  <h3 className="font-[600] text-[#E0EBFC] text-lg mb-2">{title}</h3>
                  <p className="text-[#E0EBFC]/60 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
