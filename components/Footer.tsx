"use client";
import Image from "next/image";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { CONTACTS, REQUISITES } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Услуги",      href: "#services" },
  { label: "Наши работы", href: "#cases"    },
  { label: "О компании",  href: "#about"    },
  { label: "Клиенты",     href: "#clients"  },
  { label: "Контакты",    href: "#contact"  },
];

const SERVICES_LIST = [
  "Мойка стеклянных фасадов",
  "Мойка витражного остекления",
  "Мойка панорамных окон",
  "Послестроительная очистка",
  "Регулярное обслуживание",
];

export default function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        paddingTop: "64px", paddingBottom: "32px",
        borderTop: "1px solid rgba(90,174,232,0.10)",
        background: "rgba(0,16,30,0.60)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
        <div className="grid lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div>
            <button
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-9 h-9 relative">
                <Image src="/logo.svg" alt="Логотип" fill className="object-contain" />
              </div>
              <span
                style={{
                  fontSize: "12px", fontWeight: 700,
                  letterSpacing: "0.20em", textTransform: "uppercase",
                  color: "rgba(221,238,255,0.80)",
                }}
              >
                ЯМЩИК
              </span>
            </button>
            <p style={{ fontSize: "13px", lineHeight: 1.7, color: "rgba(221,238,255,0.38)", marginBottom: "18px" }}>
              Профессиональная мойка фасадного остекления коммерческой недвижимости в Москве и МО.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={CONTACTS.director.phoneHref}
                className="flex items-center gap-2 t-all"
                style={{ fontSize: "13px", color: "rgba(221,238,255,0.45)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(221,238,255,0.80)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(221,238,255,0.45)")}
              >
                <Phone size={13} style={{ color: "#5aaee8" }} />
                {CONTACTS.director.phone}
              </a>
              <a
                href={`mailto:${CONTACTS.email}`}
                className="flex items-center gap-2 t-all"
                style={{ fontSize: "13px", color: "rgba(221,238,255,0.45)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(221,238,255,0.80)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(221,238,255,0.45)")}
              >
                <Mail size={13} style={{ color: "#5aaee8" }} />
                {CONTACTS.email}
              </a>
              <a
                href={CONTACTS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 t-all"
                style={{ fontSize: "13px", color: "rgba(221,238,255,0.45)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(221,238,255,0.80)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(221,238,255,0.45)")}
              >
                <MessageCircle size={13} style={{ color: "#5aaee8" }} />
                Telegram
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div
              style={{
                fontSize: "11px", fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "rgba(221,238,255,0.35)", marginBottom: "18px",
              }}
            >
              Навигация
            </div>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="t-all text-left"
                    style={{ fontSize: "13px", color: "rgba(221,238,255,0.45)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(221,238,255,0.80)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(221,238,255,0.45)")}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div
              style={{
                fontSize: "11px", fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "rgba(221,238,255,0.35)", marginBottom: "18px",
              }}
            >
              Услуги
            </div>
            <ul className="flex flex-col gap-3">
              {SERVICES_LIST.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="t-all text-left"
                    style={{ fontSize: "13px", color: "rgba(221,238,255,0.45)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(221,238,255,0.80)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(221,238,255,0.45)")}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA + Реквизиты */}
          <div>
            <div
              style={{
                fontSize: "11px", fontWeight: 700,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "rgba(221,238,255,0.35)", marginBottom: "14px",
              }}
            >
              Быстрый расчет
            </div>
            <p style={{ fontSize: "13px", lineHeight: 1.65, color: "rgba(221,238,255,0.40)", marginBottom: "16px" }}>
              Расчет стоимости — 30 минут после осмотра. Выезд на объект бесплатно.
            </p>
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary w-full justify-center text-sm mb-5"
              style={{ padding: "12px 20px" }}
            >
              Получить расчет
            </button>

            <div
              style={{
                padding: "14px 16px",
                borderRadius: "12px",
                border: "1px solid rgba(90,174,232,0.10)",
                background: "rgba(74,143,196,0.05)",
              }}
            >
              <div
                style={{
                  fontSize: "10px", fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "rgba(90,174,232,0.40)", marginBottom: "8px",
                }}
              >
                Реквизиты
              </div>
              <div style={{ fontSize: "11px", lineHeight: 1.8, color: "rgba(221,238,255,0.38)" }}>
                {REQUISITES.name}<br />
                ИНН: {REQUISITES.inn}<br />
                ОГРНИП: {REQUISITES.ogrnip}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(90,174,232,0.08)", paddingTop: "24px" }}
        >
          <p style={{ fontSize: "11px", color: "rgba(221,238,255,0.25)" }}>
            © {new Date().getFullYear()} {REQUISITES.name}. Все права защищены.
          </p>
          <div className="flex gap-5">
            <a
              href="/privacy"
              className="t-all"
              style={{ fontSize: "11px", color: "rgba(221,238,255,0.25)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(221,238,255,0.55)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(221,238,255,0.25)")}
            >
              Политика конфиденциальности
            </a>
            <a
              href="/terms"
              className="t-all"
              style={{ fontSize: "11px", color: "rgba(221,238,255,0.25)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(221,238,255,0.55)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(221,238,255,0.25)")}
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
