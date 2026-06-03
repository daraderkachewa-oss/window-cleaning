import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeInUp = (element: Element | null, delay = 0) => {
  if (!element) return;
  gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    { opacity: 1, y: 0, duration: 0.8, delay, ease: "power3.out" }
  );
};

export const staggerReveal = (elements: NodeListOf<Element> | Element[], stagger = 0.15) => {
  gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.7, stagger, ease: "power3.out" }
  );
};

export const createScrollReveal = (
  trigger: Element,
  targets: string | Element | Element[],
  options?: {
    start?: string;
    stagger?: number;
    y?: number;
    duration?: number;
  }
) => {
  const { start = "top 80%", stagger = 0.12, y = 30, duration = 0.8 } = options || {};

  return gsap.fromTo(
    targets,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger,
        start,
        once: true,
      },
    }
  );
};

export const createCounter = (
  element: Element,
  endValue: number,
  duration = 2,
  suffix = ""
) => {
  const obj = { value: 0 };
  return gsap.to(obj, {
    value: endValue,
    duration,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      once: true,
    },
    onUpdate: () => {
      element.textContent = Math.round(obj.value) + suffix;
    },
  });
};

export const magneticEffect = (element: HTMLElement, strength = 0.3) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;
    gsap.to(element, { x: deltaX, y: deltaY, duration: 0.3, ease: "power2.out" });
  };
  const handleMouseLeave = () => {
    gsap.to(element, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
  };
  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);
  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};
