"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.1 });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#105785]/15 blur-[120px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal-item section-label mb-6">Как проходит работа</div>
        <div className="reveal-item mb-16">
          <h2
            className="font-[700] text-[#E0EBFC] leading-[1.1] tracking-[-0.02em] max-w-2xl"
            style={{ fontSize: "clamp(30px, 3.5vw, 52px)" }}
          >
            От заявки до{" "}
            <span className="gradient-text">подписанного акта</span> — 6 этапов
          </h2>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5286AC]/30 to-transparent pointer-events-none" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5">
            {PROCESS_STEPS.map(({ number, title, description }) => (
              <div
                key={number}
                className="reveal-item glass-panel p-6 flex flex-col gap-4 transition-glass hover:border-[#5286AC]/40 hover:-translate-y-1 cursor-default relative"
              >
                {/* Step number */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#5286AC]/40 flex items-center justify-center shrink-0 bg-[#5286AC]/10">
                    <span className="text-[#5286AC] font-[800] text-sm">{number}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-[600] text-[#E0EBFC] text-base mb-2 leading-tight">{title}</h3>
                  <p className="text-[#E0EBFC]/55 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-item mt-12 text-center">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 bg-[#5286AC] hover:bg-[#5286AC]/90 text-[#E0EBFC] font-[700] px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_24px_rgba(82,134,172,0.4)] hover:-translate-y-0.5"
          >
            Начать с осмотра объекта
          </button>
        </div>
      </div>
    </section>
  );
}
