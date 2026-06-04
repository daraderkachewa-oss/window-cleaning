"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionTemplate } from "motion/react";
import { CASES } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import Reveal from "./motion/Reveal";

const BLOCKS = [
  { key: "problem", label: "Проблема" },
  { key: "solution", label: "Решение" },
  { key: "result", label: "Результат" },
] as const;

// Alternating image layout per case
const LAYOUTS = [
  { imgSide: "right-0", imgWidth: "w-[56%]", grad: "bg-gradient-to-r", textCol: 0 },
  { imgSide: "left-0",  imgWidth: "w-[56%]", grad: "bg-gradient-to-l", textCol: 1 },
  { imgSide: "right-0", imgWidth: "w-[48%]", grad: "bg-gradient-to-r", textCol: 0 },
  { imgSide: "left-0",  imgWidth: "w-[52%]", grad: "bg-gradient-to-l", textCol: 1 },
];

function CaseTitle({ name }: { name: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 10%"],
  });
  const pct = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const bg = useMotionTemplate`linear-gradient(to right, #ffffff ${pct}, rgba(234,243,255,0.14) ${pct})`;

  return (
    <motion.h2
      ref={ref}
      style={{
        backgroundImage: bg,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
      className="font-display font-bold leading-[0.95] tracking-[-0.04em] text-[clamp(3rem,8vw,8.5rem)]"
    >
      {name}
    </motion.h2>
  );
}

export default function Cases() {
  return (
    <section id="works" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Кейсы"
          title={<>Объекты, которые <span className="gradient-text">говорят за нас</span></>}
          subtitle="Реальные результаты работы на коммерческих объектах Москвы и Московской области."
        />
      </div>

      <div className="mt-20">
        {CASES.map((c, i) => {
          const layout = LAYOUTS[i % LAYOUTS.length];
          const isRight = layout.textCol === 1;

          return (
            <div key={c.id} className="relative border-t border-white/[0.07]">
              {/* Photo — absolute, z-0 */}
              <div className={`pointer-events-none absolute top-0 ${layout.imgSide} ${layout.imgWidth} h-full overflow-hidden`} style={{ zIndex: 0 }}>
                <Image
                  src={c.after}
                  alt={c.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 56vw"
                  className="object-cover opacity-45"
                />
                {/* directional fade so text stays readable */}
                <div className={`absolute inset-0 ${layout.grad} from-[#030a16] via-[#030a16]/50 to-transparent`} />
              </div>

              {/* Content — z-10 */}
              <div className="relative mx-auto max-w-7xl px-4 sm:px-6" style={{ zIndex: 10 }}>

                {/* Index + giant title */}
                <div className="pt-14 pb-6">
                  <Reveal>
                    <span className="mb-3 block font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-white/35">
                      {String(i + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(CASES.length).padStart(2, "0")}
                    </span>
                  </Reveal>
                  <CaseTitle name={c.name} />
                </div>

                {/* Stats + text */}
                <div className={`grid gap-10 pb-16 lg:grid-cols-2 ${isRight ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>

                  {/* Glass-frost meta badges */}
                  <Reveal>
                    <div className="flex flex-wrap gap-3 pt-1">
                      <div className="glass-frost inline-flex flex-col px-5 py-3.5">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35">Площадь</span>
                        <span className="mt-1 font-display text-[1.1rem] font-semibold text-white">{c.area}</span>
                      </div>
                      <div className="glass-frost inline-flex flex-col px-5 py-3.5">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35">Срок</span>
                        <span className="mt-1 font-display text-[1.1rem] font-semibold text-white">{c.duration}</span>
                      </div>
                    </div>
                  </Reveal>

                  {/* Problem / Solution / Result */}
                  <Reveal delay={0.1}>
                    <dl className="space-y-5 max-w-md">
                      {BLOCKS.map((b) => (
                        <div key={b.key}>
                          <dt
                            className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-bright)]"
                            style={{ textShadow: "0 0 10px rgba(127, 197, 245, 0.55)" }}
                          >
                            {b.label}
                          </dt>
                          <dd className="mt-1.5 text-base leading-relaxed text-white/75">
                            {c[b.key]}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </Reveal>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
