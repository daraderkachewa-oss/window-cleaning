"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.07 });

  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-10 xl:px-12">
        <div className="reveal-item section-label mb-6">Частые вопросы</div>

        <div className="reveal-item mb-12">
          <h2
            style={{
              fontSize: "clamp(26px, 3vw, 46px)",
              fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1,
              color: "#ddeeff",
            }}
          >
            Вопросы, которые задают{" "}
            <span className="gradient-text">до подписания договора</span>
          </h2>
        </div>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="reveal-item glass overflow-hidden t-all"
              style={{
                borderColor: open === i
                  ? "rgba(90,174,232,0.28)"
                  : "rgba(90,174,232,0.12)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start gap-4 text-left"
                style={{ padding: "20px 24px" }}
              >
                <span
                  style={{
                    fontSize: "11px", fontWeight: 800,
                    color: "#5aaee8", flexShrink: 0, marginTop: "2px",
                    letterSpacing: "0.06em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="flex-1"
                  style={{
                    fontSize: "15px", fontWeight: 600,
                    letterSpacing: "-0.01em", lineHeight: 1.4,
                    color: "#ddeeff",
                  }}
                >
                  {item.question}
                </span>
                <span
                  className="shrink-0 t-all"
                  style={{
                    color: open === i ? "#5aaee8" : "rgba(90,174,232,0.45)",
                    marginTop: "2px",
                  }}
                >
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <div
                style={{
                  maxHeight: open === i ? "400px" : "0",
                  opacity: open === i ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.35s ease, opacity 0.25s ease",
                }}
              >
                <div style={{ padding: "0 24px 22px 52px" }}>
                  <p style={{ fontSize: "14px", lineHeight: 1.75, color: "rgba(221,238,255,0.55)" }}>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-item mt-10 text-center">
          <p style={{ fontSize: "14px", color: "rgba(221,238,255,0.38)", marginBottom: "14px" }}>
            Не нашли ответ на свой вопрос?
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-ghost text-sm"
          >
            Задать вопрос напрямую →
          </button>
        </div>
      </div>
    </section>
  );
}
