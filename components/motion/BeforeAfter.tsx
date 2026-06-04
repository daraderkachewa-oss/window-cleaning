"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfter({
  before,
  after,
  alt,
}: {
  before: string;
  after: string;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(55);
  const [drag, setDrag] = useState(false);
  const reduce = useReducedMotion();

  function update(clientX: number) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { clipPath: "inset(0 0 100% 0)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      onPointerMove={(e) => {
        if (e.pointerType === "mouse" || drag) update(e.clientX);
      }}
      onPointerDown={(e) => {
        setDrag(true);
        update(e.clientX);
      }}
      onPointerUp={() => setDrag(false)}
      onPointerLeave={() => setDrag(false)}
      className="relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-3xl border border-[#5286AC]/20"
    >
      {/* After (base layer) */}
      <Image src={after} alt={`${alt} — после мойки`} fill sizes="(max-width:1024px) 100vw, 50vw" className="pointer-events-none object-cover" />
      <span className="absolute bottom-4 right-4 rounded-full border border-[#5286AC]/30 bg-[#0a1a2f]/70 px-3 py-1 text-[11px] font-medium text-[var(--accent-bright)] backdrop-blur-md">
        После
      </span>

      {/* Before (clipped overlay) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before} alt={`${alt} — до мойки`} fill sizes="(max-width:1024px) 100vw, 50vw" className="pointer-events-none object-cover" />
        <div className="absolute inset-0 bg-[#04101d]/25 mix-blend-multiply" />
        <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-[#04101d]/70 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-md">
          До
        </span>
      </div>

      {/* Handle */}
      <div className="absolute inset-y-0 w-px bg-white/80 shadow-[0_0_12px_rgba(127,197,245,0.8)]" style={{ left: `${pos}%`, transform: "translateX(-0.5px)" }}>
        <span className="absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-[#0a1a2f]/80 text-white backdrop-blur-md">
          <MoveHorizontal size={18} />
        </span>
      </div>
    </motion.div>
  );
}
