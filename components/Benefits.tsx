"use client";
import { ClipboardList, Camera, FileCheck, Wrench, ShieldCheck, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BENEFITS } from "@/lib/constants";

const ICONS = [ClipboardList, Camera, FileCheck, Wrench, ShieldCheck, Clock];

export default function Benefits() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.1 });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[#5286AC]/10 blur-[140px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal-item section-label mb-6">Почему выбирают нас</div>
        <div className="reveal-item grid lg:grid-cols-2 gap-6 items-end mb-16">
          <h2
            className="font-[700] text-[#E0EBFC] leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(30px, 3.5vw, 52px)" }}
          >
            Работаем по стандартам{" "}
            <span className="gradient-text">которые можно проверить</span>
          </h2>
          <p className="text-[#E0EBFC]/60 text-lg leading-relaxed">
            Каждый аспект работы задокументирован, проверяем и понятен заказчику.
            Не нужно верить нам на слово — все фиксируется в документах.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map(({ title, description }, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={title}
                className="reveal-item glass-panel p-7 transition-glass hover:bg-[#105785]/30 hover:border-[#5286AC]/40 hover:-translate-y-1 cursor-default group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#5286AC]/15 border border-[#5286AC]/20 flex items-center justify-center mb-5 group-hover:bg-[#5286AC]/25 transition-colors">
                  <Icon size={22} className="text-[#5286AC]" />
                </div>
                <h3 className="font-[700] text-[#E0EBFC] text-lg mb-3">{title}</h3>
                <p className="text-[#E0EBFC]/60 text-sm leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="reveal-item mt-14 flex flex-col sm:flex-row items-center gap-6 glass-panel p-8 lg:p-10">
          <div className="flex-1">
            <h3 className="font-[700] text-[#E0EBFC] text-2xl mb-2">Хотите убедиться лично?</h3>
            <p className="text-[#E0EBFC]/60">
              Предлагаем бесплатный аудит вашего объекта с составлением технического заключения.
            </p>
          </div>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="shrink-0 bg-[#5286AC] hover:bg-[#5286AC]/90 text-[#E0EBFC] font-[700] px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_24px_rgba(82,134,172,0.4)] hover:-translate-y-0.5 whitespace-nowrap"
          >
            Заказать аудит объекта
          </button>
        </div>
      </div>
    </section>
  );
}
