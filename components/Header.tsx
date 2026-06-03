"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Главная", href: "#hero" },
  { label: "Услуги", href: "#services" },
  { label: "Наши работы", href: "#cases" },
  { label: "Клиенты", href: "#clients" },
  { label: "О компании", href: "#about" },
  { label: "Контакты", href: "#contact" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    gsap.fromTo(
      header,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.3 }
    );
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    setActive(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#003556]/80 backdrop-blur-2xl border-b border-[#5286AC]/20 shadow-[0_4px_40px_rgba(0,53,86,0.5)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-3 group"
            aria-label="На главную"
          >
            <div className="w-10 h-10 relative">
              <Image src="/logo.svg" alt="Логотип компании" fill className="object-contain" />
            </div>
            <span className="text-[#E0EBFC] font-700 text-sm tracking-widest uppercase opacity-90 group-hover:opacity-100 transition-opacity">
              ЯМЩИК
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`text-sm font-500 tracking-wide transition-all duration-200 relative group ${
                  active === item.href
                    ? "text-[#E0EBFC]"
                    : "text-[#E0EBFC]/60 hover:text-[#E0EBFC]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#5286AC] transition-all duration-300 ${
                    active === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("#contact")}
            className="hidden lg:flex items-center gap-2 bg-[#5286AC] hover:bg-[#5286AC]/90 text-[#E0EBFC] text-sm font-600 tracking-wide px-6 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_24px_rgba(82,134,172,0.4)] hover:-translate-y-0.5"
          >
            Получить расчет
          </button>

          {/* Mobile menu btn */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#E0EBFC] p-2"
            aria-label="Меню"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#003556]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-2xl font-600 text-[#E0EBFC]/80 hover:text-[#E0EBFC] transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="mt-4 bg-[#5286AC] text-[#E0EBFC] text-lg font-600 px-8 py-4 rounded-full"
          >
            Получить расчет
          </button>
        </div>
      )}
    </>
  );
}
