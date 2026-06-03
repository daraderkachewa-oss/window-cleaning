"use client";
import { Timer, ShieldOff, HardHat, FileText, Search } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GUARANTEES } from "@/lib/constants";

const ICONS = [Timer, ShieldOff, HardHat, FileText, Search];

export default function Guarantees() {
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.1 });

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#105785]/15 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal-item section-label mb-6">Гарантии</div>
        <div className="reveal-item mb-14">
          <h2
            className="font-[700] text-[#E0EBFC] leading-[1.1] tracking-[-0.02em] max-w-2xl"
            style={{ fontSize: "clamp(30px, 3.5vw, 52px)" }}
          >
            Пять гарантий,{" "}
            <span className="gradient-text">закрепленных в договоре</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {GUARANTEES.map(({ title, description }, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={title}
                className="reveal-item glass-panel p-6 flex flex-col gap-4 transition-glass hover:border-[#5286AC]/50 hover:-translate-y-1 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-[#5286AC]/20 flex items-center justify-center">
                  <Icon size={18} className="text-[#5286AC]" />
                </div>
                <div>
                  <h3 className="font-[600] text-[#E0EBFC] text-base mb-2">{title}</h3>
                  <p className="text-[#E0EBFC]/55 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
