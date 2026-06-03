"use client";
import { useRef, MouseEvent } from "react";
import { Timer, ShieldOff, HardHat, FileText, Search } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GUARANTEES } from "@/lib/constants";

const ICONS = [Timer, ShieldOff, HardHat, FileText, Search];

function GlowCard({ title, description, index }: { title: string; description: string; index: number }) {
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
      className="reveal-item glass glow-card flex flex-col gap-4 cursor-default"
      style={{ padding: "24px 24px 28px" }}
      onMouseMove={onMouseMove}
    >
      <div
        className="flex items-center justify-center rounded-xl shrink-0"
        style={{
          width: 42, height: 42,
          background: "rgba(74,143,196,0.12)",
          border: "1px solid rgba(90,174,232,0.18)",
        }}
      >
        <Icon size={17} style={{ color: "#5aaee8" }} />
      </div>
      <div>
        <h3
          style={{
            fontSize: "15px", fontWeight: 700,
            letterSpacing: "-0.01em", color: "#ddeeff",
            marginBottom: "8px",
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: "13px", lineHeight: 1.7, color: "rgba(221,238,255,0.50)" }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Guarantees() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.09 });

  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: "100px", paddingBottom: "100px" }}
    >
      {/* Subtle section tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(13,74,119,0.08)" }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
        <div className="reveal-item section-label mb-6">Гарантии</div>

        <div className="reveal-item mb-14">
          <h2
            style={{
              fontSize: "clamp(28px, 3.2vw, 50px)",
              fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1,
              color: "#ddeeff", maxWidth: "640px",
            }}
          >
            Пять гарантий,{" "}
            <span className="gradient-text">закреплённых в договоре</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {GUARANTEES.map(({ title, description }, i) => (
            <GlowCard key={title} title={title} description={description} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
