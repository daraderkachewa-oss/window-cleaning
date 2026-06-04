"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react";

type Orb = {
  className: string;
  style: React.CSSProperties;
  depth: number; // parallax strength multiplier
};

const ORBS: Orb[] = [
  {
    // top-right electric glow — the Halo signature
    depth: 1,
    className: "",
    style: {
      top: "-8%",
      right: "-6%",
      width: "46vw",
      height: "46vw",
      background: "radial-gradient(circle, rgba(58,142,210,0.55), rgba(42,127,196,0.15) 55%, transparent 72%)",
    },
  },
  {
    depth: -1.4,
    className: "",
    style: {
      top: "34%",
      left: "-12%",
      width: "40vw",
      height: "40vw",
      background: "radial-gradient(circle, rgba(0,80,130,0.5), transparent 68%)",
    },
  },
  {
    depth: 0.7,
    className: "",
    style: {
      top: "120%",
      right: "8%",
      width: "38vw",
      height: "38vw",
      background: "radial-gradient(circle, rgba(127,197,245,0.28), transparent 66%)",
    },
  },
  {
    depth: -0.8,
    className: "",
    style: {
      top: "210%",
      left: "5%",
      width: "34vw",
      height: "34vw",
      background: "radial-gradient(circle, rgba(0,53,86,0.85), transparent 70%)",
    },
  },
  {
    depth: 1.2,
    className: "",
    style: {
      top: "300%",
      right: "-4%",
      width: "42vw",
      height: "42vw",
      background: "radial-gradient(circle, rgba(58,142,210,0.4), transparent 70%)",
    },
  },
];

function ParallaxOrb({ orb, progress }: { orb: Orb; progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], [0, orb.depth * 320]);
  return <motion.div className="orb" style={{ ...orb.style, y }} />;
}

export default function Atmosphere() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  return (
    <div
      ref={ref}
      aria-hidden
      style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none", overflow: "hidden" }}
    >
      {ORBS.map((orb, i) =>
        reduce ? (
          <div key={i} className="orb" style={orb.style} />
        ) : (
          <ParallaxOrb key={i} orb={orb} progress={scrollYProgress} />
        )
      )}
    </div>
  );
}
