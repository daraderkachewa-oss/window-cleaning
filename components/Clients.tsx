"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CLIENT_NAMES = [
  "Управляющая компания «Северная Звезда»",
  "ГК «РосПрофит»",
  "Сеть клиник «Клариум»",
  "ТРЦ «Панорама»",
  "БЦ «Авиа Плаза»",
  "Facility Group «ПримаФМ»",
  "УК «Столица Менеджмент»",
  "Концерн «АвтоПремиум»",
  "БЦ «Горизонт»",
  "ТЦ «Галерея»",
];

export default function Clients() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.08 });

  return (
    <section id="clients" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#105785]/10 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal-item section-label mb-6">Клиенты</div>
        <div className="reveal-item mb-12 flex flex-col lg:flex-row items-start lg:items-end gap-4">
          <h2
            className="font-[700] text-[#E0EBFC] leading-[1.1] tracking-[-0.02em] flex-1"
            style={{ fontSize: "clamp(28px, 3vw, 48px)" }}
          >
            Нам доверяют{" "}
            <span className="gradient-text">ведущие управляющие компании</span>
          </h2>
          <p className="text-[#E0EBFC]/60 lg:max-w-xs text-base">
            Работаем с управляющими компаниями и собственниками объектов с 2014 года.
          </p>
        </div>

        {/* Marquee */}
        <div className="reveal-item overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#003556] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#003556] to-transparent z-10 pointer-events-none" />
          <div className="marquee-track">
            {[...CLIENT_NAMES, ...CLIENT_NAMES].map((name, i) => (
              <div
                key={i}
                className="shrink-0 glass-panel mx-3 px-8 py-5 flex items-center justify-center"
                style={{ minWidth: "260px" }}
              >
                <span className="text-[#E0EBFC]/70 font-[600] text-sm text-center">{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust block */}
        <div className="reveal-item mt-12 glass-panel p-8 lg:p-10 grid sm:grid-cols-3 gap-6 text-center">
          {[
            { value: "100%", label: "юридические лица" },
            { value: "68%", label: "продлевают договор на 2+ год" },
            { value: "NPS 94", label: "индекс лояльности" },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-[800] text-[#E0EBFC] text-3xl mb-1">{value}</div>
              <div className="text-[#5286AC] font-[500] text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
