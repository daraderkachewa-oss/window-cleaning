"use client";
import { useRef, MouseEvent } from "react";
import { Building, Layers, Maximize, Hammer, CalendarCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  building: Building, layers: Layers, maximize: Maximize,
  hammer: Hammer, calendar: CalendarCheck,
};

function ServiceCard({
  id, title, description, icon, index,
}: {
  id: string; title: string; description: string; icon: string; index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = ICON_MAP[icon];

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    cardRef.current!.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    cardRef.current!.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <div
      ref={cardRef}
      className="reveal-item glass glow-card flex flex-col gap-5 cursor-default"
      style={{ padding: "28px 28px 32px" }}
      onMouseMove={onMouseMove}
    >
      <div className="flex items-start justify-between gap-2">
        <div
          className="flex items-center justify-center rounded-2xl shrink-0"
          style={{
            width: 48, height: 48,
            background: "rgba(74,143,196,0.12)",
            border: "1px solid rgba(90,174,232,0.18)",
          }}
        >
          <Icon size={20} style={{ color: "#5aaee8" }} />
        </div>
        <span
          style={{
            fontSize: "32px", fontWeight: 800,
            letterSpacing: "-0.04em", lineHeight: 1,
            color: "rgba(90,174,232,0.07)",
            userSelect: "none",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div>
        <h3
          style={{
            fontSize: "17px", fontWeight: 700,
            letterSpacing: "-0.01em", lineHeight: 1.25,
            color: "#ddeeff", marginBottom: "10px",
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: "13.5px", lineHeight: 1.72, color: "rgba(221,238,255,0.52)" }}>
          {description}
        </p>
      </div>
      <button
        onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
        className="mt-auto t-all self-start"
        style={{
          fontSize: "12px", fontWeight: 600,
          letterSpacing: "0.04em", color: "rgba(90,174,232,0.65)",
        }}
      >
        Получить расчет →
      </button>
    </div>
  );
}

export default function Services() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.1 });

  return (
    <section
      id="services"
      className="relative overflow-hidden"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          top: 0, left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "300px", borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(16,87,133,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
        <div className="reveal-item section-label mb-6">Услуги</div>
        <div className="reveal-item grid lg:grid-cols-2 gap-5 items-end mb-14">
          <h2
            style={{
              fontSize: "clamp(28px, 3.2vw, 50px)",
              fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1,
              color: "#ddeeff",
            }}
          >
            Полный спектр работ с{" "}
            <span className="gradient-text">фасадным остеклением</span>
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "rgba(221,238,255,0.52)" }}>
            Специализируемся исключительно на очистке стеклянных поверхностей.
            Не занимаемся смежными работами — это позволяет быть лучшими в нише.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {SERVICES.map((s, i) => <ServiceCard key={s.id} {...s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
