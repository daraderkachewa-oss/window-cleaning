"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { PROCESS_STEPS } from "@/lib/constants";

export default function Process() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.09 });

  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          left: "-5%", top: "40%",
          width: "450px", height: "450px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,87,133,0.22) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
        <div className="reveal-item section-label mb-6">Как проходит работа</div>

        <div className="reveal-item mb-14">
          <h2
            style={{
              fontSize: "clamp(28px, 3.2vw, 50px)",
              fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1,
              color: "#ddeeff", maxWidth: "640px",
            }}
          >
            От заявки до{" "}
            <span className="gradient-text">подписанного акта</span> — 6 этапов
          </h2>
        </div>

        {/* Timeline grid */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute pointer-events-none"
            style={{
              top: "44px", left: "calc(1/12 * 100% + 20px)",
              right: "calc(1/12 * 100% + 20px)",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(90,174,232,0.20) 20%, rgba(90,174,232,0.20) 80%, transparent)",
            }}
          />

          {PROCESS_STEPS.map(({ number, title, description }) => (
            <div
              key={number}
              className="reveal-item glass glow-card flex flex-col gap-4 cursor-default"
              style={{ padding: "24px 22px 28px" }}
            >
              {/* Step badge */}
              <div
                className="flex items-center justify-center rounded-full shrink-0"
                style={{
                  width: 40, height: 40,
                  border: "1.5px solid rgba(90,174,232,0.30)",
                  background: "rgba(74,143,196,0.10)",
                }}
              >
                <span
                  style={{
                    fontSize: "12px", fontWeight: 800,
                    color: "#5aaee8",
                  }}
                >
                  {number}
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "14px", fontWeight: 700,
                    letterSpacing: "-0.01em", color: "#ddeeff",
                    marginBottom: "8px", lineHeight: 1.3,
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: "12.5px", lineHeight: 1.68, color: "rgba(221,238,255,0.48)" }}>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-item mt-12 text-center">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary text-sm"
          >
            Начать с осмотра объекта
          </button>
        </div>
      </div>
    </section>
  );
}
