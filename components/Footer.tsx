"use client";
import Image from "next/image";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { CONTACTS, REQUISITES } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "Наши работы", href: "#cases" },
  { label: "О компании", href: "#about" },
  { label: "Клиенты", href: "#clients" },
  { label: "Контакты", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden border-t border-[#5286AC]/15">
      <div className="absolute inset-0 bg-[#002845]/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 relative">
                <Image src="/logo.svg" alt="Логотип" fill className="object-contain" />
              </div>
              <span className="text-[#E0EBFC] font-[700] text-sm tracking-widest uppercase">ЯМЩИК</span>
            </div>
            <p className="text-[#E0EBFC]/50 text-sm leading-relaxed mb-5">
              Профессиональная мойка фасадного остекления коммерческой недвижимости в Москве и МО.
            </p>
            <div className="flex flex-col gap-2">
              <a href={CONTACTS.director.phoneHref} className="flex items-center gap-2 text-[#E0EBFC]/60 hover:text-[#E0EBFC] text-sm transition-colors">
                <Phone size={14} className="text-[#5286AC]" />
                {CONTACTS.director.phone}
              </a>
              <a href={`mailto:${CONTACTS.email}`} className="flex items-center gap-2 text-[#E0EBFC]/60 hover:text-[#E0EBFC] text-sm transition-colors">
                <Mail size={14} className="text-[#5286AC]" />
                {CONTACTS.email}
              </a>
              <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#E0EBFC]/60 hover:text-[#E0EBFC] text-sm transition-colors">
                <MessageCircle size={14} className="text-[#5286AC]" />
                Telegram
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="text-[#E0EBFC] font-[700] text-sm uppercase tracking-widest mb-5">Навигация</div>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-[#E0EBFC]/50 hover:text-[#E0EBFC] text-sm transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-[#E0EBFC] font-[700] text-sm uppercase tracking-widest mb-5">Услуги</div>
            <ul className="space-y-3">
              {[
                "Мойка стеклянных фасадов",
                "Мойка витражного остекления",
                "Мойка панорамных окон",
                "Послестроительная очистка",
                "Регулярное обслуживание",
              ].map((s) => (
                <li key={s}>
                  <button
                    onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-[#E0EBFC]/50 hover:text-[#E0EBFC] text-sm transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <div className="text-[#E0EBFC] font-[700] text-sm uppercase tracking-widest mb-5">Быстрый расчет</div>
            <p className="text-[#E0EBFC]/50 text-sm mb-5">
              Расчет стоимости — 30 минут после осмотра. Выезд на объект бесплатно.
            </p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full bg-[#5286AC] hover:bg-[#5286AC]/90 text-[#E0EBFC] font-[600] text-sm py-3.5 px-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(82,134,172,0.3)]"
            >
              Получить расчет
            </button>
            <div className="mt-4 p-4 rounded-xl border border-[#5286AC]/15 bg-[#5286AC]/5">
              <div className="text-[#E0EBFC]/40 text-xs mb-1 uppercase tracking-wide font-[600]">Реквизиты</div>
              <div className="text-[#E0EBFC]/60 text-xs leading-relaxed">
                {REQUISITES.name}<br />
                ИНН: {REQUISITES.inn}<br />
                ОГРНИП: {REQUISITES.ogrnip}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#5286AC]/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#E0EBFC]/35 text-xs">
            © {new Date().getFullYear()} {REQUISITES.name}. Все права защищены.
          </p>
          <div className="flex gap-5">
            <a href="/privacy" className="text-[#E0EBFC]/35 hover:text-[#E0EBFC]/60 text-xs transition-colors">
              Политика конфиденциальности
            </a>
            <a href="/terms" className="text-[#E0EBFC]/35 hover:text-[#E0EBFC]/60 text-xs transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
