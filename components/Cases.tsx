"use client";
import { MapPin, Clock, Maximize2, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CASES } from "@/lib/constants";

export default function Cases() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.15 });

  return (
    <section id="cases" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-[400px] h-[400px] rounded-full bg-[#5286AC]/8 blur-[130px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal-item section-label mb-6">Кейсы</div>
        <div className="reveal-item grid lg:grid-cols-2 gap-6 items-end mb-16">
          <h2
            className="font-[700] text-[#E0EBFC] leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(30px, 3.5vw, 52px)" }}
          >
            Реальные объекты,{" "}
            <span className="gradient-text">конкретные результаты</span>
          </h2>
          <p className="text-[#E0EBFC]/60 text-lg leading-relaxed">
            Каждый кейс — это задача с конкретными ограничениями, техническим решением и измеримым результатом.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <div
              key={c.id}
              className="reveal-item glass-panel overflow-hidden transition-glass hover:border-[#5286AC]/40 hover:-translate-y-1 cursor-default group"
            >
              {/* Image placeholder with before/after */}
              <div className="relative h-56 bg-gradient-to-br from-[#105785]/50 to-[#003556]/80 overflow-hidden">
                <div className="absolute inset-0 flex">
                  <div className="flex-1 bg-[#003556]/60 flex items-center justify-center border-r border-[#5286AC]/20">
                    <span className="text-[#E0EBFC]/30 text-xs font-[600] uppercase tracking-widest">До</span>
                  </div>
                  <div className="flex-1 bg-[#5286AC]/20 flex items-center justify-center">
                    <span className="text-[#E0EBFC]/30 text-xs font-[600] uppercase tracking-widest">После</span>
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4 bg-[#003556]/80 backdrop-blur-sm border border-[#5286AC]/30 rounded-full px-3 py-1">
                  <span className="text-[#5286AC] text-xs font-[600]">
                    {c.category === "business-center" && "Бизнес-центр"}
                    {c.category === "mall" && "ТРЦ"}
                    {c.category === "auto" && "Автосалон"}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <h3 className="font-[700] text-[#E0EBFC] text-xl mb-4">{c.name}</h3>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 mb-5">
                  <div className="flex items-center gap-1.5 text-[#5286AC] text-xs font-[500]">
                    <Maximize2 size={12} />
                    {c.area}
                  </div>
                  <div className="flex items-center gap-1.5 text-[#5286AC] text-xs font-[500]">
                    <Clock size={12} />
                    {c.duration}
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-[#5286AC] text-xs font-[600] uppercase tracking-wide">Задача</span>
                    <p className="text-[#E0EBFC]/60 text-sm mt-1 leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <span className="text-[#5286AC] text-xs font-[600] uppercase tracking-wide">Результат</span>
                    <p className="text-[#E0EBFC]/70 text-sm mt-1 leading-relaxed font-[500]">{c.result}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-item mt-12 text-center">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-[#5286AC] hover:text-[#E0EBFC] font-[600] text-sm border border-[#5286AC]/40 hover:border-[#5286AC] rounded-full px-6 py-3 transition-all duration-300"
          >
            Обсудить ваш объект <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
