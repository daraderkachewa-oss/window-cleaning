"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { REVIEWS } from "@/lib/constants";

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.1 });

  const prev = () => setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setCurrent((c) => (c + 1) % REVIEWS.length);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#5286AC]/8 blur-[130px]" />
      </div>

      <div ref={ref} className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="reveal-item section-label mb-6 justify-center">Отзывы клиентов</div>
        <div className="reveal-item mb-12 text-center">
          <h2
            className="font-[700] text-[#E0EBFC] leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px, 3vw, 48px)" }}
          >
            Говорят те, кто{" "}
            <span className="gradient-text">работает с нами</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="reveal-item relative">
          <div className="glass-panel p-10 lg:p-14 relative overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-8 right-10 opacity-10">
              <Quote size={80} className="text-[#5286AC]" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: REVIEWS[current].rating }).map((_, i) => (
                <Star key={i} size={16} className="text-[#5286AC] fill-[#5286AC]" />
              ))}
            </div>

            <blockquote className="text-[#E0EBFC]/85 text-xl lg:text-2xl leading-relaxed font-[400] mb-8 relative z-10">
              «{REVIEWS[current].text}»
            </blockquote>

            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-[600] text-[#E0EBFC] text-base">{REVIEWS[current].name}</div>
                <div className="text-[#5286AC] text-sm mt-0.5">{REVIEWS[current].title}</div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-[#5286AC]/40 hover:border-[#5286AC] flex items-center justify-center text-[#E0EBFC]/60 hover:text-[#E0EBFC] transition-all"
                  aria-label="Предыдущий"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-[#5286AC]/40 hover:border-[#5286AC] flex items-center justify-center text-[#E0EBFC]/60 hover:text-[#E0EBFC] transition-all"
                  aria-label="Следующий"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "w-6 h-2 bg-[#5286AC]" : "w-2 h-2 bg-[#5286AC]/30"
                }`}
                aria-label={`Отзыв ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
