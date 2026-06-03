"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowDown, Shield, Clock, FileText, MapPin } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      tl.fromTo(".hero-label", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" })
        .fromTo(".hero-h1", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }, "-=0.2")
        .fromTo(".hero-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.4")
        .fromTo(".hero-badges", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }, "-=0.3")
        .fromTo(".hero-ctas", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.2")
        .fromTo(".hero-image", { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.8")
        .fromTo(".hero-scroll", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=0.2");
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAudit = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb-1 absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-[#105785]/25 blur-[140px]" />
        <div className="orb-2 absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#5286AC]/20 blur-[160px]" />
        <div className="orb-3 absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full bg-[#5286AC]/10 blur-[120px]" />
        {/* Decorative circles */}
        <div className="absolute right-[5%] top-[10%] w-[700px] h-[700px] rounded-full border border-[#5286AC]/8" />
        <div className="absolute right-[8%] top-[15%] w-[500px] h-[500px] rounded-full border border-[#5286AC]/6" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT: Text */}
        <div className="z-10">
          <div className="hero-label section-label mb-6">
            Москва и Московская область
          </div>

          <h1
            className="hero-h1 font-[800] text-[#E0EBFC] leading-[1.05] tracking-[-0.02em] mb-6"
            style={{ fontSize: "clamp(44px, 5.5vw, 80px)" }}
          >
            Безупречно чистое{" "}
            <span className="gradient-text">фасадное остекление</span>{" "}
            без остановки работы объекта
          </h1>

          <p
            className="hero-sub text-[#E0EBFC]/70 font-[400] leading-relaxed mb-8"
            style={{ fontSize: "clamp(16px, 1.6vw, 20px)" }}
          >
            Работаем с управляющими компаниями, бизнес-центрами и ТРЦ по договору.
            Фотоотчет после каждого выезда, полный пакет закрывающих документов,
            соблюдение сроков — закреплено контрактом.
          </p>

          {/* Trust badges */}
          <div className="hero-badges flex flex-wrap gap-3 mb-10">
            {[
              { icon: Shield, text: "Безопасные технологии" },
              { icon: Clock, text: "Без остановки объекта" },
              { icon: FileText, text: "Договор и документы" },
              { icon: MapPin, text: "Москва и МО" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="hero-badges flex items-center gap-2 bg-[#003556]/60 backdrop-blur-sm border border-[#5286AC]/20 rounded-full px-4 py-2"
              >
                <Icon size={14} className="text-[#5286AC] shrink-0" />
                <span className="text-[#E0EBFC]/80 text-sm font-[500]">{text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-ctas flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="group relative inline-flex items-center justify-center gap-2 bg-[#5286AC] hover:bg-[#5286AC]/90 text-[#E0EBFC] font-[700] tracking-wide px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_32px_rgba(82,134,172,0.5)] hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10">Получить расчет</span>
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-15deg]" />
            </button>
            <button
              onClick={scrollToAudit}
              className="inline-flex items-center justify-center gap-2 border border-[#5286AC]/50 hover:border-[#5286AC] text-[#E0EBFC]/80 hover:text-[#E0EBFC] font-[600] tracking-wide px-8 py-4 rounded-full transition-all duration-300 hover:bg-[#5286AC]/10"
            >
              Заказать аудит объекта
            </button>
          </div>
        </div>

        {/* RIGHT: Visual */}
        <div className="hero-image relative z-10 hidden lg:block">
          <div className="relative">
            {/* Main frame */}
            <div className="relative rounded-3xl overflow-hidden border border-[#5286AC]/20 shadow-[0_0_80px_rgba(82,134,172,0.15)]">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#105785]/40 to-[#003556]/60 flex items-center justify-center">
                {/* Placeholder visual — glass architecture */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003556] via-transparent to-transparent" />
                  {/* Logo overlay */}
                  <div className="relative z-10 opacity-20">
                    <Image src="/logo.svg" alt="" width={200} height={260} className="object-contain" />
                  </div>
                  {/* Stats overlay */}
                  <div className="absolute bottom-6 left-6 right-6 glass-panel p-5">
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { n: "10+", label: "лет опыта" },
                        { n: "500+", label: "объектов" },
                        { n: "2 млн", label: "м² очищено" },
                      ].map(({ n, label }) => (
                        <div key={label} className="text-center">
                          <div className="text-[#E0EBFC] font-[800] text-2xl">{n}</div>
                          <div className="text-[#5286AC] font-[500] text-xs mt-0.5">{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -left-10 top-1/3 glass-panel p-4 max-w-[180px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#5286AC]/20 border border-[#5286AC]/30 flex items-center justify-center shrink-0">
                  <Shield size={16} className="text-[#5286AC]" />
                </div>
                <div>
                  <div className="text-[#E0EBFC] font-[600] text-xs leading-tight">Застрахованная ответственность</div>
                </div>
              </div>
            </div>

            {/* Logo decoration */}
            <div className="absolute -right-8 -top-8 opacity-15">
              <Image src="/logo.svg" alt="" width={120} height={156} className="object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#5286AC] animate-bounce">
        <span className="text-xs font-[500] tracking-widest uppercase">Прокрутите</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}
