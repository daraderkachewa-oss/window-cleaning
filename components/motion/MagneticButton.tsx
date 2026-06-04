"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  strength?: number;
  ariaLabel?: string;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  disabled,
  strength = 0.45,
  ariaLabel,
}: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  function handleMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  const interaction = reduce ? {} : { whileHover: { scale: 1.03 }, whileTap: { scale: 0.96 } };
  const common = {
    ref: ref as React.Ref<never>,
    className,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    style: { x: sx, y: sy },
    ...interaction,
  };

  if (href) {
    return (
      <motion.a href={href} aria-label={ariaLabel} {...common}>
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button type={type} onClick={onClick} disabled={disabled} aria-label={ariaLabel} {...common}>
      {children}
    </motion.button>
  );
}
