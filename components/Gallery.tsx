"use client";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CATEGORIES = [
  { id: "all",    label: "Все объекты"       },
  { id: "bc",     label: "Бизнес-центры"     },
  { id: "trc",    label: "Торговые комплексы" },
  { id: "auto",   label: "Автосалоны"        },
  { id: "office", label: "Офисные здания"    },
];

const GALLERY_ITEMS = [
  { id: 1, category: "bc",     title: "БЦ Авиа Плаза",  area: "8 400 м²",  wide: true  },
  { id: 2, category: "trc",    title: "ТРЦ Галерея",    area: "14 200 м²", wide: false },
  { id: 3, category: "auto",   title: "Премиум Авто",   area: "2 800 м²",  wide: false },
  { id: 4, category: "office", title: "Офисный центр",  area: "5 600 м²",  wide: false },
  { id: 5, category: "bc",     title: "БЦ Горизонт",    area: "11 000 м²", wide: false },
  { id: 6, category: "trc",    title: "ТЦ Панорама",    area: "6 200 м²",  wide: true  },
];

const GRADIENTS = [
  "linear-gradient(145deg, rgba(16,87,133,0.65) 0%, rgba(0,20,38,0.88) 100%)",
  "linear-gradient(145deg, rgba(74,143,196,0.35) 0%, rgba(16,87,133,0.70) 100%)",
  "linear-gradient(145deg, rgba(0,26,50,0.80) 0%, rgba(74,143,196,0.28) 100%)",
  "linear-gradient(145deg, rgba(16,87,133,0.55) 0%, rgba(74,143,196,0.35) 100%)",
  "linear-gradient(145deg, rgba(74,143,196,0.25) 0%, rgba(0,20,38,0.85) 100%)",
  "linear-gradient(145deg, rgba(0,20,38,0.70) 0%, rgba(16,87,133,0.60) 100%)",
];

export default function Gallery() {
  const [active, setActive] = useState("all");
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.07 });

  const filtered = active === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.category === active);

  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
        <div className="reveal-item section-label mb-6">Галерея</div>

        <div className="reveal-item mb-10">
          <h2
            style={{
              fontSize: "clamp(26px, 3vw, 46px)",
              fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1,
              color: "#ddeeff",
            }}
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
              className="t-all"
              style={{
                fontSize: "12px", fontWeight: 600,
                letterSpacing: "0.04em",
                padding: "8px 18px", borderRadius: "999px",
                border: active === c.id
                  ? "1px solid rgba(90,174,232,0.40)"
                  : "1px solid rgba(90,174,232,0.14)",
                background: active === c.id
                  ? "rgba(74,143,196,0.16)"
                  : "transparent",
                color: active === c.id ? "#ddeeff" : "rgba(221,238,255,0.45)",
                boxShadow: active === c.id
                  ? "0 0 20px rgba(90,174,232,0.20)"
                  : "none",
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className={`reveal-item glass glow-card overflow-hidden cursor-default${item.wide ? " sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div
                className="relative flex items-end"
                style={{
                  height: "200px",
                  background: GRADIENTS[i % GRADIENTS.length],
                }}
              >
                {/* Decorative glass lines */}
                {[180, 120, 60].map((s) => (
                  <div
                    key={s}
                    className="absolute rounded-full"
                    style={{
                      width: s, height: s,
                      border: "1px solid rgba(90,174,232,0.08)",
                      top: "50%", left: "50%",
                      transform: "translate(-50%,-50%)",
                      pointerEvents: "none",
                    }}
                  />
                ))}
                <div
                  className="glass-soft relative m-4"
                  style={{
                    padding: "10px 16px",
                    borderRadius: "12px",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#ddeeff" }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: "11px", fontWeight: 500, color: "#5aaee8", marginTop: "2px" }}>
                    {item.area}
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
