"use client";
import { useRef, MouseEvent } from "react";
import { ClipboardList, Camera, FileCheck, Wrench, ShieldCheck, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BENEFITS } from "@/lib/constants";

const ICONS = [ClipboardList, Camera, FileCheck, Wrench, ShieldCheck, Clock];

function GlowCard({
  title, description, index,
}: {
  title: string; description: string; index: number;
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
      <div
        className="flex items-center justify-center rounded-2xl shrink-0"
        style={{
          width: 48, height: 48,
          background: "rgba(74,143,196,0.12)",
          border: "1px solid rgba(90,174,232,0.18)",
          transition: "background 0.3s",
        }}
      >
        <Icon size={20} style={{ color: "#5aaee8" }} />
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
    </div>
  );
}

export default function Benefits() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.1 });

  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          bottom: "-5%", right: "-5%",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,143,196,0.14) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
        <div className="reveal-item section-label mb-6">Почему выбирают нас</div>

        <div className="reveal-item grid lg:grid-cols-2 gap-5 items-end mb-14">
          <h2
            style={{
              fontSize: "clamp(28px, 3.2vw, 50px)",
              fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1,
              color: "#ddeeff",
            }}
          >
            Работаем по стандартам{" "}
            <span className="gradient-text">которые можно проверить</span>
          </h2>
          <p style={{ fontSize: "16px", lineHeight: 1.75, color: "rgba(221,238,255,0.52)" }}>
            Каждый аспект работы задокументирован, проверяем и понятен заказчику.
            Не нужно верить нам на слово — всё фиксируется в документах.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {BENEFITS.map(({ title, description }, i) => (
            <GlowCard key={title} title={title} description={description} index={i} />
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="reveal-item glass flex flex-col sm:flex-row items-center gap-6"
          style={{ padding: "32px 36px" }}
        >
          <div className="flex-1">
            <h3
              style={{
                fontSize: "20px", fontWeight: 700,
                letterSpacing: "-0.015em", color: "#ddeeff",
                marginBottom: "6px",
              }}
            >
              Хотите убедиться лично?
            </h3>
            <p style={{ fontSize: "15px", lineHeight: 1.65, color: "rgba(221,238,255,0.52)" }}>
              Предлагаем бесплатный аудит вашего объекта с составлением технического заключения.
            </p>
          </div>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary shrink-0 text-sm"
          >
            Заказать аудит объекта
          </button>
        </div>
      </div>
    </section>
  );
}
