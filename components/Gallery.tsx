"use client";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CATEGORIES = [
  { id: "all", label: "Все объекты" },
  { id: "bc", label: "Бизнес-центры" },
  { id: "trc", label: "Торговые комплексы" },
  { id: "auto", label: "Автосалоны" },
  { id: "office", label: "Офисные здания" },
];

const GALLERY_ITEMS = [
  { id: 1, category: "bc", title: "БЦ Авиа Плаза", area: "8 400 м²", col: "col-span-2" },
  { id: 2, category: "trc", title: "ТРЦ Галерея", area: "14 200 м²", col: "" },
  { id: 3, category: "auto", title: "Премиум Авто", area: "2 800 м²", col: "" },
  { id: 4, category: "office", title: "Офисный центр", area: "5 600 м²", col: "" },
  { id: 5, category: "bc", title: "БЦ Горизонт", area: "11 000 м²", col: "" },
  { id: 6, category: "trc", title: "ТЦ Панорама", area: "6 200 м²", col: "col-span-2" },
];

const GRADIENT_PRESETS = [
  "from-[#105785]/60 to-[#003556]",
  "from-[#5286AC]/30 to-[#105785]/60",
  "from-[#003556] to-[#5286AC]/20",
  "from-[#105785]/40 to-[#5286AC]/30",
  "from-[#5286AC]/20 to-[#003556]/80",
  "from-[#003556]/60 to-[#105785]/50",
];

export default function Gallery() {
  const [active, setActive] = useState("all");
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.08 });

  const filtered = active === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === active);

  return (
    <section className="relative py-20 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal-item section-label mb-6">Галерея</div>
        <div className="reveal-item mb-10">
          <h2
            className="font-[700] text-[#E0EBFC] leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px, 3vw, 48px)" }}
          >
            Наши <span className="gradient-text">объекты</span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="reveal-item flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2 rounded-full text-sm font-[600] transition-all duration-300 ${
                active === c.id
                  ? "bg-[#5286AC] text-[#E0EBFC] shadow-[0_0_16px_rgba(82,134,172,0.4)]"
                  : "border border-[#5286AC]/30 text-[#E0EBFC]/60 hover:border-[#5286AC]/60 hover:text-[#E0EBFC]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`reveal-item relative group rounded-2xl overflow-hidden border border-[#5286AC]/20 transition-all duration-300 hover:border-[#5286AC]/50 hover:-translate-y-1 ${item.col}`}
            >
              <div
                className={`h-56 bg-gradient-to-br ${GRADIENT_PRESETS[i % GRADIENT_PRESETS.length]} flex items-end`}
              >
                {/* Decorative glass pattern */}
                <div className="absolute inset-0 opacity-10">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="absolute border border-[#5286AC]/40" style={{
                      inset: `${j * 20}px`,
                      borderRadius: "inherit",
                    }} />
                  ))}
                </div>
                <div className="relative p-5 w-full">
                  <div className="glass-panel-light p-3 inline-block">
                    <div className="text-[#E0EBFC] font-[600] text-sm">{item.title}</div>
                    <div className="text-[#5286AC] font-[500] text-xs mt-0.5">{item.area}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
