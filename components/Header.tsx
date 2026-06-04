"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/constants";
import MagneticButton from "./motion/MagneticButton";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={reduce ? false : { y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-500 sm:px-6 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`rounded-full transition-all duration-500 ${
            scrolled ? "glass-nav px-4 py-2.5" : "px-1"
          }`}
        >
          <a href="#top" aria-label="На главную">
            <Logo height={44} />
          </a>
        </div>

        {/* Centered glass pill nav (desktop) */}
        <nav className="glass-nav hidden items-center gap-1 rounded-full px-2 py-2 lg:flex">
          {NAV.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors ${
                  isActive ? "text-white" : "text-[var(--ink-dim)] hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-[rgba(127,197,245,0.14)] ring-1 ring-[var(--glass-border-lit)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <MagneticButton href="#contacts" className="btn btn-primary hidden md:inline-flex">
            Получить расчёт
          </MagneticButton>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Меню"
            className="glass-nav grid h-11 w-11 place-items-center rounded-full text-[var(--ink)] lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mx-4 lg:hidden"
          >
            <div className="glass mt-1 rounded-3xl p-3">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-[15px] text-[var(--ink-dim)] transition-colors hover:bg-[rgba(127,197,245,0.1)] hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contacts"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-2 w-full"
              >
                Получить расчёт
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
