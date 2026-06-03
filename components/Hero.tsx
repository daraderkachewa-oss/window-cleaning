"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowRight, Shield, Clock, FileText, MapPin } from "lucide-react";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      /* Орбы — появляются первыми, масштаб из нуля */
      gsap.fromTo(".hero-orb", { scale: 0.4, opacity: 0 }, {
        scale: 1, opacity: 1, duration: 2.4, ease: "power2.out", stagger: 0.3,
      });

      /* Основной контент — снизу вверх */
      const tl = gsap.timeline({ delay: 0.25 });
      tl.fromTo(".hero-eyebrow",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" })
        .fromTo(".hero-h1 .line",
          { opacity: 0, y: 48, skewX: -2 },
          { opacity: 1, y: 0, skewX: 0, duration: 0.85, stagger: 0.12, ease: "power3.out" }, "-=0.3")
        .fromTo(".hero-sub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.65, ease: "power3.out" }, "-=0.4")
        .fromTo(".hero-badge",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power3.out" }, "-=0.35")
        .fromTo(".hero-cta",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.1, ease: "power3.out" }, "-=0.3")
        .fromTo(".hero-card",
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" }, "-=0.6")
        .fromTo(".hero-scroll-hint",
          { opacity: 0 },
          { opacity: 1, duration: 0.4 }, "-=0.1");
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const goto = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={rootRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* ── Ambient orbs ───────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {/* Большой cyan-glow справа-сверху — главная доминанта */}
        <div
          className="hero-orb orb-1 absolute"
          style={{
            top: "-12%", right: "-8%",
            width: "720px", height: "720px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(74,143,196,0.55) 0%, rgba(74,143,196,0.18) 45%, transparent 72%)",
            filter: "blur(72px)",
          }}
        />
        {/* Синеватый glow слева-снизу */}
        <div
          className="hero-orb orb-2 absolute"
          style={{
            bottom: "-15%", left: "-10%",
            width: "640px", height: "640px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16,87,133,0.60) 0%, rgba(16,87,133,0.18) 50%, transparent 72%)",
            filter: "blur(90px)",
          }}
        />
        {/* Маленький highlight по центру */}
        <div
          className="hero-orb orb-3 absolute"
          style={{
            top: "38%", left: "42%",
            width: "320px", height: "320px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(90,174,232,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Тонкая сетка — noise texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235aaee8' fill-opacity='1'%3E%3Ccircle cx='0.5' cy='0.5' r='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ── Layout ─────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 xl:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-12 xl:gap-20 items-center">

          {/* LEFT ─ Text */}
          <div>
            {/* Eyebrow */}
            <div className="hero-eyebrow glass-soft inline-flex items-center gap-2.5 px-4 py-2 mb-8">
              <MapPin size={12} className="text-[#5aaee8]" />
              <span
                className="text-[#5aaee8] font-[600]"
                style={{ fontSize: "11px", letterSpacing: "0.18em" }}
              >
                МОСКВА И МОСКОВСКАЯ ОБЛАСТЬ
              </span>
            </div>

            {/* H1 — three visually separate lines */}
            <h1
              className="hero-h1 font-[800] leading-[1.02] mb-6"
              style={{
                fontSize: "clamp(46px, 5.8vw, 84px)",
                letterSpacing: "-0.03em",
                color: "#ddeeff",
              }}
            >
              <span className="line block">Безупречно чистое</span>
              <span
                className="line block gradient-text"
                style={{ paddingBottom: "0.06em" }}
              >
                фасадное
              </span>
              <span className="line block">остекление.</span>
            </h1>

            {/* Sub */}
            <p
              className="hero-sub leading-[1.75] mb-10 max-w-xl"
              style={{
                fontSize: "clamp(15px, 1.5vw, 18px)",
                color: "rgba(221,238,255,0.60)",
                fontWeight: 400,
              }}
            >
              Работаем с управляющими компаниями, бизнес-центрами и ТРЦ
              по договору. Фотоотчет после каждого выезда, полный пакет
              закрывающих документов, соблюдение сроков — закреплено контрактом.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2.5 mb-10">
              {[
                { Icon: Shield,   text: "Безопасные технологии" },
                { Icon: Clock,    text: "Без остановки объекта"  },
                { Icon: FileText, text: "Договор и документы"    },
              ].map(({ Icon, text }) => (
                <div
                  key={text}
                  className="hero-badge glass-soft flex items-center gap-2 px-4 py-2"
                >
                  <Icon size={13} className="text-[#5aaee8] shrink-0" />
                  <span
                    style={{
                      fontSize: "12px", fontWeight: 500,
                      color: "rgba(221,238,255,0.70)",
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                className="hero-cta btn-primary text-sm"
                onClick={() => goto("#contact")}
              >
                Получить расчет <ArrowRight size={15} />
              </button>
              <button
                className="hero-cta btn-ghost text-sm"
                onClick={() => goto("#contact")}
              >
                Заказать аудит объекта
              </button>
            </div>
          </div>

          {/* RIGHT ─ Visual card */}
          <div className="hero-card hidden lg:block">
            <GlassCard goto={goto} />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="hero-scroll-hint absolute bottom-7 left-1/2 -translate-x-1/2
                   flex flex-col items-center gap-1.5"
        aria-hidden
      >
        <span
          style={{
            fontSize: "10px", fontWeight: 600,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "rgba(90,174,232,0.50)",
          }}
        >
          прокрутите
        </span>
        <div
          className="w-px h-8"
          style={{
            background: "linear-gradient(to bottom, rgba(90,174,232,0.4), transparent)",
          }}
        />
      </div>
    </section>
  );
}

/* ── Floating glass card on the right ───────────────────────── */
function GlassCard({ goto }: { goto: (id: string) => void }) {
  return (
    <div className="relative">
      {/* Main panel */}
      <div
        className="glass glow-card"
        style={{ padding: "2px" }} /* border-wrapper trick */
      >
        <div
          className="rounded-[calc(1.5rem-2px)] overflow-hidden"
          style={{ background: "rgba(0,24,46,0.70)" }}
        >
          {/* Фото-зона */}
          <div
            className="relative flex items-center justify-center"
            style={{
              height: "280px",
              background: "linear-gradient(145deg, rgba(16,87,133,0.50) 0%, rgba(0,20,38,0.80) 100%)",
            }}
          >
            {/* Декоративные линии архитектуры */}
            {[220, 170, 120].map((s) => (
              <div
                key={s}
                className="absolute rounded-full border"
                style={{
                  width: s, height: s,
                  borderColor: "rgba(90,174,232,0.10)",
                  top: "50%", left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              />
            ))}
            {/* Logo faint overlay */}
            <div className="opacity-[0.12] relative z-10">
              <Image src="/logo.svg" alt="" width={90} height={118} className="object-contain" />
            </div>
            {/* Glow spot inside card */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 70% 30%, rgba(74,143,196,0.30) 0%, transparent 65%)",
              }}
            />
          </div>

          {/* Stats strip */}
          <div
            className="grid grid-cols-3 divide-x"
            style={{ borderTop: "1px solid rgba(90,174,232,0.10)" }}
          >
            {[
              { n: "10+",   label: "лет опыта"  },
              { n: "500+",  label: "объектов"   },
              { n: "2 млн", label: "м² очищено" },
            ].map(({ n, label }) => (
              <div
                key={label}
                className="flex flex-col items-center py-5 gap-1"
                style={{ borderRight: "1px solid rgba(90,174,232,0.10)" }}
              >
                <span
                  style={{
                    fontSize: "22px", fontWeight: 800,
                    letterSpacing: "-0.02em", color: "#ddeeff",
                  }}
                >
                  {n}
                </span>
                <span
                  style={{
                    fontSize: "10px", fontWeight: 500,
                    letterSpacing: "0.08em", color: "#5aaee8",
                    textTransform: "uppercase",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating chip — top left */}
      <div
        className="glass-soft absolute -left-10 top-14 flex items-center gap-2.5 px-4 py-3"
        style={{ borderRadius: "1rem" }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{ background: "rgba(90,174,232,0.15)", border: "1px solid rgba(90,174,232,0.25)" }}
        >
          <Shield size={14} className="text-[#5aaee8]" />
        </div>
        <div>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "#ddeeff", lineHeight: 1.2 }}>
            Застрахованная
          </div>
          <div style={{ fontSize: "11px", fontWeight: 500, color: "rgba(221,238,255,0.55)" }}>
            ответственность
          </div>
        </div>
      </div>

      {/* Floating chip — bottom right */}
      <button
        onClick={() => goto("#contact")}
        className="glass-soft absolute -right-6 -bottom-5 flex items-center gap-2 px-5 py-3 t-all hover:border-[rgba(90,174,232,0.35)]"
        style={{ borderRadius: "1rem" }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: "#5aaee8", boxShadow: "0 0 6px #5aaee8" }}
        />
        <span style={{ fontSize: "12px", fontWeight: 600, color: "#ddeeff" }}>
          Расчет за 30 минут
        </span>
      </button>
    </div>
  );
}
