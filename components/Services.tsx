"use client";
import { Building, Layers, Maximize, Hammer, CalendarCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  building: Building,
  layers: Layers,
  maximize: Maximize,
  hammer: Hammer,
  calendar: CalendarCheck,
};

export default function Services() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.12 });

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#105785]/10 blur-[100px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal-item section-label mb-6">Услуги</div>
        <div className="reveal-item grid lg:grid-cols-2 gap-6 items-end mb-16">
          <h2
            className="font-[700] text-[#E0EBFC] leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(30px, 3.5vw, 52px)" }}
          >
            Полный спектр работ с{" "}
            <span className="gradient-text">фасадным остеклением</span>
          </h2>
          <p className="text-[#E0EBFC]/60 text-lg leading-relaxed">
            Специализируемся исключительно на очистке стеклянных поверхностей коммерческой недвижимости.
            Не занимаемся смежными работами — это позволяет нам быть лучшими в своей нише.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-5">
          {SERVICES.map(({ id, title, description, icon }, idx) => {
            const Icon = ICON_MAP[icon];
            const isLarge = idx === 0 || idx === 4;
            return (
              <div
                key={id}
                className={`reveal-item glass-panel p-7 lg:p-8 flex flex-col gap-5 transition-glass hover:bg-[#105785]/30 hover:border-[#5286AC]/40 hover:shadow-[0_0_50px_rgba(82,134,172,0.15)] hover:-translate-y-1 cursor-default ${
                  isLarge ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#5286AC]/15 border border-[#5286AC]/20 flex items-center justify-center">
                    <Icon size={22} className="text-[#5286AC]" />
                  </div>
                  <span className="text-[#5286AC]/40 font-[800] text-2xl">{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="font-[600] text-[#E0EBFC] text-xl mb-3 leading-tight">{title}</h3>
                  <p className="text-[#E0EBFC]/60 text-sm leading-relaxed">{description}</p>
                </div>
                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-auto text-[#5286AC] hover:text-[#E0EBFC] text-sm font-[600] tracking-wide transition-colors self-start"
                >
                  Получить расчет →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
