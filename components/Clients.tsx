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
    <section
      id="clients"
      className="relative overflow-hidden"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(13,74,119,0.07)" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
        <div className="reveal-item section-label mb-6">Клиенты</div>

        <div className="reveal-item mb-12 flex flex-col lg:flex-row items-start lg:items-end gap-5">
          <h2
            className="flex-1"
            style={{
              fontSize: "clamp(26px, 3vw, 46px)",
              fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1,
              color: "#ddeeff",
            }}
          >
            Нам доверяют{" "}
            <span className="gradient-text">ведущие управляющие компании</span>
          </h2>
          <p
            style={{
              fontSize: "15px", lineHeight: 1.7,
              color: "rgba(221,238,255,0.48)", maxWidth: "300px",
            }}
          >
            Работаем с управляющими компаниями и собственниками объектов с 2014 года.
          </p>
        </div>

        {/* Marquee */}
        <div className="reveal-item overflow-hidden relative">
          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: "120px",
              background: "linear-gradient(90deg, var(--base), transparent)",
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: "120px",
              background: "linear-gradient(-90deg, var(--base), transparent)",
            }}
          />

          <div className="marquee-track">
            {[...CLIENT_NAMES, ...CLIENT_NAMES].map((name, i) => (
              <div
                key={i}
                className="glass shrink-0 mx-3 flex items-center justify-center"
                style={{ minWidth: "250px", padding: "16px 28px", borderRadius: "1rem" }}
              >
                <span
                  style={{
                    fontSize: "13px", fontWeight: 600, textAlign: "center",
                    color: "rgba(221,238,255,0.62)",
                  }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <div
          className="reveal-item glass mt-10 grid sm:grid-cols-3 gap-px overflow-hidden"
          style={{ borderRadius: "1.5rem" }}
        >
          {[
            { value: "100%",    label: "юридические лица в клиентах" },
            { value: "68%",     label: "продлевают договор на 2+ год" },
            { value: "NPS 94",  label: "индекс лояльности клиентов"  },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-1.5 text-center"
              style={{ padding: "32px 20px" }}
            >
              <div
                style={{
                  fontSize: "clamp(26px, 3vw, 36px)",
                  fontWeight: 800, letterSpacing: "-0.03em",
                  color: "#ddeeff",
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontSize: "12px", fontWeight: 500,
                  color: "rgba(90,174,232,0.65)",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
