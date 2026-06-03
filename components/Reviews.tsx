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

  const r = REVIEWS[current];

  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          left: "50%", top: "50%", transform: "translate(-50%,-50%)",
          width: "700px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(74,143,196,0.10) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-10 xl:px-12">
        <div
          className="reveal-item section-label mb-6"
          style={{ justifyContent: "center" }}
        >
          Отзывы клиентов
        </div>

        <div className="reveal-item text-center mb-12">
          <h2
            style={{
              fontSize: "clamp(26px, 3vw, 46px)",
              fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1,
              color: "#ddeeff",
            }}
          >
            Говорят те, кто{" "}
            <span className="gradient-text">работает с нами</span>
          </h2>
        </div>

        <div className="reveal-item">
          <div
            className="glass relative overflow-hidden"
            style={{ padding: "48px 48px 44px" }}
          >
            {/* Big faint quote */}
            <div
              className="absolute pointer-events-none"
              aria-hidden
              style={{ top: 20, right: 28, opacity: 0.06 }}
            >
              <Quote size={100} style={{ color: "#5aaee8" }} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={15}
                  style={{ color: "#5aaee8", fill: "#5aaee8" }}
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote
              style={{
                fontSize: "clamp(17px, 2vw, 22px)",
                fontWeight: 400, lineHeight: 1.72,
                color: "rgba(221,238,255,0.82)",
                marginBottom: "32px",
                position: "relative", zIndex: 1,
              }}
            >
              «{r.text}»
            </blockquote>

            {/* Author + controls */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <div
                  style={{
                    fontSize: "15px", fontWeight: 700,
                    color: "#ddeeff", marginBottom: "3px",
                  }}
                >
                  {r.name}
                </div>
                <div style={{ fontSize: "13px", color: "rgba(90,174,232,0.70)", fontWeight: 500 }}>
                  {r.title}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Предыдущий"
                  className="t-all flex items-center justify-center rounded-full"
                  style={{
                    width: 40, height: 40,
                    border: "1px solid rgba(90,174,232,0.20)",
                    color: "rgba(221,238,255,0.50)",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(90,174,232,0.50)";
                    (e.currentTarget as HTMLButtonElement).style.color = "#ddeeff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(90,174,232,0.20)";
                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(221,238,255,0.50)";
                  }}
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  aria-label="Следующий"
                  className="t-all flex items-center justify-center rounded-full"
                  style={{
                    width: 40, height: 40,
                    border: "1px solid rgba(90,174,232,0.20)",
                    color: "rgba(221,238,255,0.50)",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(90,174,232,0.50)";
                    (e.currentTarget as HTMLButtonElement).style.color = "#ddeeff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(90,174,232,0.20)";
                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(221,238,255,0.50)";
                  }}
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Отзыв ${i + 1}`}
                className="t-all rounded-full"
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  background: i === current
                    ? "#5aaee8"
                    : "rgba(90,174,232,0.25)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
