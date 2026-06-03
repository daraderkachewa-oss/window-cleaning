"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealOptions {
  y?: number;
  x?: number;
  opacity?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  delay?: number;
}

export function useScrollReveal<T extends HTMLElement>(
  selector?: string,
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const element = ref.current;
    if (!element) return;

    const targets = selector ? element.querySelectorAll(selector) : [element];
    const { y = 30, x = 0, opacity = 0, duration = 0.8, stagger = 0.12, start = "top 85%", delay = 0 } = options;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity, y, x },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          stagger,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start,
            once: true,
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, []);

  return ref;
}
