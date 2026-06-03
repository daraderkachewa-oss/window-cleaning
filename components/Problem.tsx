"use client";
import { useRef, MouseEvent } from "react";
import { TrendingDown, Users, AlertTriangle, Layers } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const PROBLEMS = [
  {
    icon: TrendingDown,
    title: "Снижение арендной ставки",
    description:
      "Загрязнённый фасад сигнализирует арендаторам об уровне управления объектом. По данным CBRE, ухоженность здания влияет на ставку до 8–12%.",
    tag: "Финансы",
  },
  {
    icon: Users,
    title: "Первое впечатление клиентов",
    description:
      "73% посетителей формируют мнение о компании ещё до входа. Загрязнённое остекление напрямую влияет на трафик ваших арендаторов.",
    tag: "Репутация",
  },
  {
    icon: AlertTriangle,
    title: "Деградация фасада",
    description:
      "Кислотные осадки и минеральные отложения разрушают поверхность за 2–3 сезона. Замена стеклопакета в 40–60 раз дороже регулярного обслуживания.",
    tag: "Инфраструктура",
  },
  {
    icon: Layers,
    title: "Потери на освещении",
    description:
      "Загрязнённое стекло снижает световой поток на 20–35%. Прямые потери на электроэнергии и ухудшение условий работы сотрудников.",
    tag: "Эксплуатация",
  },
];

/* Cursor-tracking glow card */
function GlowCard({
  icon: Icon, title, description, tag, idx,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  tag: string;
  idx: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mx", `${x}%`);
    card.style.setProperty("--my", `${y}%`);
  };

  return (
    <div
      ref={cardRef}
      className="reveal-item glass glow-card flex flex-col gap-5 cursor-default"
      style={{ padding: "28px 28px 32px" }}
      onMouseMove={handleMouseMove}
    >
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
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
            fontSize: "10px", fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "rgba(90,174,232,0.60)",
            background: "rgba(74,143,196,0.08)",
            border: "1px solid rgba(90,174,232,0.12)",
            borderRadius: "999px",
            padding: "4px 10px",
          }}
        >
          {tag}
        </span>
      </div>

      {/* Number accent */}
      <div
        style={{
          fontSize: "48px", fontWeight: 800,
          letterSpacing: "-0.04em", lineHeight: 1,
          color: "rgba(90,174,232,0.08)",
          position: "absolute",
          top: 16, right: 24,
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      >
        {String(idx + 1).padStart(2, "0")}
      </div>

      <div className="relative z-[2]">
        <h3
          style={{
            fontSize: "18px", fontWeight: 700,
            letterSpacing: "-0.01em",
            color: "#ddeeff",
            marginBottom: "10px",
            lineHeight: 1.25,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "14px", lineHeight: 1.7,
            color: "rgba(221,238,255,0.55)",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Problem() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.12 });

  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      {/* Section glow */}
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          top: "-10%", right: "-5%",
          width: "500px", height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,87,133,0.25) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">

        {/* Header */}
        <div
          className="reveal-item section-label mb-6"
          style={{ justifyContent: "flex-start" }}
        >
          Почему это важно
        </div>

        <div
          className="reveal-item grid lg:grid-cols-2 gap-5 items-end mb-16"
        >
          <h2
            style={{
              fontSize: "clamp(28px, 3.2vw, 50px)",
              fontWeight: 700,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "#ddeeff",
            }}
          >
            Загрязнённое остекление{" "}
            <span className="gradient-text">снижает ценность актива</span>
          </h2>
          <p
            style={{
              fontSize: "clamp(14px, 1.3vw, 17px)",
              lineHeight: 1.75,
              color: "rgba(221,238,255,0.55)",
            }}
          >
            Фасад — это лицо объекта недвижимости. Его состояние напрямую
            отражается на арендной ставке, репутации УК и стоимости самого актива.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROBLEMS.map((p, i) => (
            <GlowCard key={p.title} {...p} idx={i} />
          ))}
        </div>

        {/* CTA bridge */}
        <div
          className="reveal-item mt-14 flex flex-col sm:flex-row items-center justify-center gap-5"
          style={{ textAlign: "center" }}
        >
          <p
            style={{
              fontSize: "15px",
              color: "rgba(221,238,255,0.45)",
            }}
          >
            Регулярное обслуживание устраняет все эти риски и стоит
            значительно меньше их последствий
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-ghost shrink-0 text-sm"
          >
            Рассчитать стоимость →
          </button>
        </div>

      </div>
    </section>
  );
}
