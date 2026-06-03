"use client";
import { useRef, MouseEvent } from "react";
import { Droplets, Ruler, Wrench, Leaf } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TECHNOLOGIES } from "@/lib/constants";

const ICONS = [Droplets, Ruler, Wrench, Leaf];

function GlowCard({
  title, description, detail, index,
}: {
  title: string; description: string; detail: string; index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = ICONS[index];

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
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "rgba(90,174,232,0.70)",
            background: "rgba(74,143,196,0.08)",
            border: "1px solid rgba(90,174,232,0.14)",
            borderRadius: "999px",
            padding: "4px 10px",
            whiteSpace: "nowrap",
          }}
        >
          {detail}
        </span>
      </div>
      <div>
        <h3
          style={{
            fontSize: "17px", fontWeight: 700,
            letterSpacing: "-0.01em", color: "#ddeeff",
            marginBottom: "10px",
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: "13.5px", lineHeight: 1.72, color: "rgba(221,238,255,0.52)" }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Technologies() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.11 });

  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(13,74,119,0.10) 50%, transparent 100%)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
        <div className="reveal-item section-label mb-6">Технологии</div>

        <div className="reveal-item grid lg:grid-cols-2 gap-5 items-end mb-14">
          <h2
            style={{
              fontSize: "clamp(28px, 3.2vw, 50px)",
              fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1,
              color: "#ddeeff",
            }}
          >
            Оборудование —{" "}
            <span className="gradient-text">наше конкурентное преимущество</span>
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "rgba(221,238,255,0.52)" }}>
            Собственный парк профессионального оборудования позволяет контролировать качество
            и соблюдать сроки независимо от внешних факторов.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECHNOLOGIES.map(({ title, description, detail }, i) => (
            <GlowCard
              key={title}
              title={title}
              description={description}
              detail={detail}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
