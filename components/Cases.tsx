"use client";
import { useRef, MouseEvent } from "react";
import { Clock, Maximize2, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CASES } from "@/lib/constants";

const CATEGORY_LABEL: Record<string, string> = {
  "business-center": "Бизнес-центр",
  mall: "ТРЦ",
  auto: "Автосалон",
};

function CaseCard({ c }: { c: (typeof CASES)[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    cardRef.current!.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    cardRef.current!.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <div
      ref={cardRef}
      className="reveal-item glass glow-card overflow-hidden cursor-default flex flex-col"
      onMouseMove={onMouseMove}
    >
      {/* Visual zone */}
      <div
        className="relative flex"
        style={{
          height: "200px",
          background: "linear-gradient(145deg, rgba(16,87,133,0.55) 0%, rgba(0,20,38,0.85) 100%)",
        }}
      >
        {/* Before / After split */}
        <div
          className="flex-1 flex items-end justify-start p-4"
          style={{ borderRight: "1px solid rgba(90,174,232,0.10)" }}
        >
          <span
            style={{
              fontSize: "10px", fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "rgba(221,238,255,0.28)",
            }}
          >
            До
          </span>
        </div>
        <div className="flex-1 flex items-end justify-end p-4">
          <span
            style={{
              fontSize: "10px", fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "rgba(221,238,255,0.28)",
            }}
          >
            После
          </span>
        </div>

        {/* Glow inside */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 65% 35%, rgba(74,143,196,0.22) 0%, transparent 65%)",
          }}
        />

        {/* Category badge */}
        <div
          className="absolute top-4 left-4 glass-soft px-3 py-1"
          style={{ borderRadius: "999px" }}
        >
          <span
            style={{
              fontSize: "10px", fontWeight: 700,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#5aaee8",
            }}
          >
            {CATEGORY_LABEL[c.category]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 flex-1" style={{ padding: "24px 24px 28px" }}>
        <h3
          style={{
            fontSize: "18px", fontWeight: 700,
            letterSpacing: "-0.015em", color: "#ddeeff",
          }}
        >
          {c.name}
        </h3>

        {/* Meta */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-1.5" style={{ color: "#5aaee8" }}>
            <Maximize2 size={12} />
            <span style={{ fontSize: "12px", fontWeight: 600 }}>{c.area}</span>
          </div>
          <div className="flex items-center gap-1.5" style={{ color: "#5aaee8" }}>
            <Clock size={12} />
            <span style={{ fontSize: "12px", fontWeight: 600 }}>{c.duration}</span>
          </div>
        </div>

        {/* Problem / Result */}
        <div className="space-y-3">
          <div>
            <div
              style={{
                fontSize: "10px", fontWeight: 700,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "rgba(90,174,232,0.60)", marginBottom: "5px",
              }}
            >
              Задача
            </div>
            <p style={{ fontSize: "13px", lineHeight: 1.68, color: "rgba(221,238,255,0.52)" }}>
              {c.problem}
            </p>
          </div>
          <div>
            <div
              style={{
                fontSize: "10px", fontWeight: 700,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "rgba(90,174,232,0.60)", marginBottom: "5px",
              }}
            >
              Результат
            </div>
            <p style={{ fontSize: "13px", lineHeight: 1.68, color: "rgba(221,238,255,0.68)", fontWeight: 500 }}>
              {c.result}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cases() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.13 });

  return (
    <section
      id="cases"
      className="relative overflow-hidden"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          top: "-5%", right: "-5%",
          width: "460px", height: "460px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,143,196,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
        <div className="reveal-item section-label mb-6">Кейсы</div>

        <div className="reveal-item grid lg:grid-cols-2 gap-5 items-end mb-14">
          <h2
            style={{
              fontSize: "clamp(28px, 3.2vw, 50px)",
              fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1,
              color: "#ddeeff",
            }}
          >
            Реальные объекты,{" "}
            <span className="gradient-text">конкретные результаты</span>
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "rgba(221,238,255,0.52)" }}>
            Каждый кейс — задача с конкретными ограничениями, техническим
            решением и измеримым результатом.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {CASES.map((c) => <CaseCard key={c.id} c={c} />)}
        </div>

        <div className="reveal-item mt-12 text-center">
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-ghost text-sm inline-flex items-center gap-2"
          >
            Обсудить ваш объект <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
