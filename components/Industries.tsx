"use client";
import { Building2, ShoppingBag, Briefcase, Car, Hotel, HeartPulse, Home, GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ICON_MAP: Record<string, React.ElementType> = {
  building2: Building2,
  shoppingBag: ShoppingBag,
  briefcase: Briefcase,
  car: Car,
  hotel: Hotel,
  heartPulse: HeartPulse,
  home: Home,
  graduationCap: GraduationCap,
};

const INDUSTRIES = [
  { title: "Бизнес-центры", icon: "building2" },
  { title: "Торговые центры", icon: "shoppingBag" },
  { title: "Офисные здания", icon: "briefcase" },
  { title: "Автосалоны", icon: "car" },
  { title: "Гостиницы", icon: "hotel" },
  { title: "Медицинские центры", icon: "heartPulse" },
  { title: "Жилые комплексы", icon: "home" },
  { title: "Образовательные учреждения", icon: "graduationCap" },
];

export default function Industries() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.08 });

  return (
    <section className="relative py-20 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal-item section-label mb-6">Объекты</div>
        <div className="reveal-item mb-12">
          <h2
            className="font-[700] text-[#E0EBFC] leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px, 3vw, 48px)" }}
          >
            Работаем с любыми{" "}
            <span className="gradient-text">типами объектов</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {INDUSTRIES.map(({ title, icon }) => {
            const Icon = ICON_MAP[icon];
            return (
              <div
                key={title}
                className="reveal-item glass-panel p-5 flex flex-col items-center gap-3 text-center transition-glass hover:bg-[#105785]/30 hover:border-[#5286AC]/40 hover:-translate-y-1 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-[#5286AC]/15 border border-[#5286AC]/20 flex items-center justify-center">
                  <Icon size={18} className="text-[#5286AC]" />
                </div>
                <span className="text-[#E0EBFC]/80 font-[600] text-xs leading-tight">{title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
