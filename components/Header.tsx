"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Главная",     href: "#hero"     },
  { label: "Услуги",      href: "#services" },
  { label: "Наши работы", href: "#cases"    },
  { label: "Клиенты",     href: "#clients"  },
  { label: "О компании",  href: "#about"    },
  { label: "Контакты",    href: "#contact"  },
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
    gsap.fromTo(header,
      { opacity: 0, y: -16 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    setActive(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(0,20,38,0.75)"
            : "transparent",
          backdropFilter: scrolled ? "blur(28px) saturate(150%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(28px) saturate(150%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(90,174,232,0.10)" : "none",
          boxShadow: scrolled ? "0 4px 40px rgba(0,30,60,0.5)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-3 group"
            aria-label="На главную"
          >
            <div className="w-9 h-9 relative">
              <Image src="/logo.svg" alt="Логотип компании" fill className="object-contain" />
            </div>
            <span
              style={{
                fontSize: "12px", fontWeight: 700,
                letterSpacing: "0.20em", textTransform: "uppercase",
                color: "rgba(221,238,255,0.85)",
                transition: "color 0.2s",
              }}
              className="group-hover:!text-[#ddeeff]"
            >
              ЯМЩИК
            </span>
          </button>

          {/* Desktop nav — pill */}
          <nav
            className="hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-full"
            style={{
              background: "rgba(0,30,55,0.55)",
              border: "1px solid rgba(90,174,232,0.10)",
              backdropFilter: "blur(16px)",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="relative px-4 py-2 rounded-full transition-all duration-200"
                style={{
                  fontSize: "13px",
                  fontWeight: active === item.href ? 600 : 500,
                  color: active === item.href
                    ? "#ddeeff"
                    : "rgba(221,238,255,0.50)",
                  background: active === item.href
                    ? "rgba(90,174,232,0.12)"
                    : "transparent",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("#contact")}
            className="hidden lg:flex btn-primary text-sm"
            style={{ padding: "11px 24px" }}
          >
            Получить расчет
          </button>

          {/* Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
            style={{ color: "#ddeeff", padding: 8 }}
            aria-label="Меню"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 lg:hidden"
          style={{
            background: "rgba(0,20,38,0.96)",
            backdropFilter: "blur(32px)",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              style={{
                fontSize: "24px", fontWeight: 600,
                color: "rgba(221,238,255,0.75)",
                transition: "color 0.2s",
              }}
              className="hover:!text-[#ddeeff]"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-primary mt-4"
          >
            Получить расчет
          </button>
        </div>
      )}
    </>
  );
}
