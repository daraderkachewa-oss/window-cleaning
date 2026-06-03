"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCounter } from "@/hooks/useCounter";
import { STATS } from "@/lib/constants";

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value, 2.4);
  return (
    <div
      className="glass glow-card flex flex-col items-center justify-center gap-2 text-center"
      style={{ padding: "36px 24px" }}
    >
      <div
        style={{
          fontSize: "clamp(40px, 4vw, 60px)",
          fontWeight: 800,
          letterSpacing: "-0.035em",
          lineHeight: 1,
          color: "#ddeeff",
        }}
      >
        <span ref={ref as React.RefObject<HTMLSpanElement>}>{count}</span>
        <span style={{ color: "#5aaee8" }}>{suffix}</span>
      </div>
      <div
        style={{
          fontSize: "11px", fontWeight: 600,
          letterSpacing: "0.15em", textTransform: "uppercase",
          color: "rgba(90,174,232,0.65)",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.10 });

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          bottom: "-10%", left: "-8%",
          width: "560px", height: "560px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,87,133,0.28) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
        <div className="reveal-item section-label mb-6">О компании</div>

        <div className="reveal-item grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          <div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.2vw, 50px)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                color: "#ddeeff",
                marginBottom: "24px",
              }}
            >
              10 лет специализации на{" "}
              <span className="gradient-text">фасадном остеклении</span>
            </h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(221,238,255,0.58)", marginBottom: "14px" }}>
              Мы занимаемся исключительно очисткой светопрозрачных фасадов коммерческой недвижимости.
              За 10 лет разработали собственные технологические регламенты для каждого типа
              загрязнений и конструкций.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "rgba(221,238,255,0.58)" }}>
              Работаем только с юридическими лицами по договору. Весь документооборот — без
              напоминаний со стороны заказчика.
            </p>
          </div>

          <div className="space-y-3">
            {[
              "Собственный парк оборудования — не арендуем технику",
              "Все сотрудники в штате — нет субподрядчиков",
              "Застрахованная ответственность за ущерб",
              "Работаем в ночное время и выходные без доплат",
              "Фотофиксация до и после каждого выезда",
              "Полный пакет документов в течение 2 рабочих дней",
            ].map((item, i) => (
              <div
                key={i}
                className="reveal-item flex items-start gap-3"
              >
                <div
                  className="shrink-0 mt-1 rounded-full flex items-center justify-center"
                  style={{
                    width: 20, height: 20,
                    background: "rgba(74,143,196,0.12)",
                    border: "1px solid rgba(90,174,232,0.22)",
                  }}
                >
                  <div
                    className="rounded-full"
                    style={{ width: 6, height: 6, background: "#5aaee8" }}
                  />
                </div>
                <span style={{ fontSize: "15px", lineHeight: 1.6, color: "rgba(221,238,255,0.65)" }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-item grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  );
}
