"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useCounter(endValue: number, duration = 2.5) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const element = ref.current;
    if (!element) return;

    if (prefersReduced) {
      setCount(endValue);
      return;
    }

    const obj = { value: 0 };
    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      once: true,
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;
        gsap.to(obj, {
          value: endValue,
          duration,
          ease: "power2.out",
          onUpdate: () => setCount(Math.round(obj.value)),
        });
      },
    });

    return () => trigger.kill();
  }, [endValue, duration]);

  return { count, ref };
}
