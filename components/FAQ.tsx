"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.08 });

  return (
    <section className="relative py-20 overflow-hidden">
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="reveal-item section-label mb-6">Частые вопросы</div>
        <div className="reveal-item mb-12">
          <h2
            className="font-[700] text-[#E0EBFC] leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px, 3vw, 48px)" }}
          >
            Вопросы, которые задают{" "}
            <span className="gradient-text">до подписания договора</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="reveal-item glass-panel overflow-hidden transition-glass"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start gap-4 p-6 lg:p-7 text-left"
              >
                <span className="text-[#5286AC] font-[800] text-sm shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-[600] text-[#E0EBFC] text-base lg:text-lg leading-tight">
                  {item.question}
                </span>
                <span className="shrink-0 text-[#5286AC] ml-4 mt-0.5">
                  {open === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 lg:px-7 pb-6 lg:pb-7 pl-12 lg:pl-14">
                  <p className="text-[#E0EBFC]/65 text-base leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-item mt-10 text-center">
          <p className="text-[#E0EBFC]/50 mb-4">Не нашли ответ на свой вопрос?</p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-[#5286AC] hover:text-[#E0EBFC] font-[600] text-sm border border-[#5286AC]/40 hover:border-[#5286AC] rounded-full px-6 py-3 transition-all duration-300"
          >
            Задать вопрос напрямую →
          </button>
        </div>
      </div>
    </section>
  );
}
