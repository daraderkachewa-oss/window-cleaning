import Link from "next/link";
import { NAV, CONTACTS, REQUISITES } from "@/lib/constants";
import { PhoneIcon, TelegramIcon, MailIcon } from "./Icon";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative px-4 pb-8 pt-10 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="liquid-glass rounded-[2rem] p-8 md:p-12">
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.3fr_0.8fr_1.2fr_1fr]">
            {/* Brand */}
            <div>
              <Logo height={48} />
              <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-[var(--ink-muted)]">
                Профильная мойка остекления фасадов коммерческой недвижимости. Работаем по{" "}
                {CONTACTS.region}.
              </p>
            </div>

            {/* Nav */}
            <div>
              <div className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
                Навигация
              </div>
              <ul className="space-y-2.5 text-[14px]">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="liquid-link">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <div className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
                Контакты
              </div>
              <ul className="space-y-3 text-[14px]">
                <li className="flex items-center gap-2">
                  <PhoneIcon size={16} className="text-[var(--accent)]" />
                  <a href={CONTACTS.director.phoneHref} className="liquid-link">
                    {CONTACTS.director.phone}
                  </a>
                  <a href={CONTACTS.director.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-[var(--accent)] hover:text-white">
                    <TelegramIcon size={15} />
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneIcon size={16} className="text-[var(--accent)]" />
                  <a href={CONTACTS.specialist.phoneHref} className="liquid-link">
                    {CONTACTS.specialist.phone}
                  </a>
                  <a href={CONTACTS.specialist.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-[var(--accent)] hover:text-white">
                    <TelegramIcon size={15} />
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MailIcon size={16} className="text-[var(--accent)]" />
                  <a href={CONTACTS.emailHref} className="liquid-link">
                    {CONTACTS.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Requisites */}
            <div>
              <div className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
                Реквизиты
              </div>
              <div className="text-[13px] leading-relaxed text-[var(--ink-muted)]">
                <div className="text-[var(--ink-dim)]">{REQUISITES.name}</div>
                <div className="mt-2">ИНН {REQUISITES.inn}</div>
                <div>ОГРНИП {REQUISITES.ogrnip}</div>
              </div>
            </div>
          </div>

          <div className="divider-line relative z-10 my-8" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-4 text-[13px] text-[var(--ink-muted)] sm:flex-row">
            <span>© {year} {REQUISITES.name}. Все права защищены.</span>
            <div className="flex gap-6">
              <Link href="/privacy" className="liquid-link">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="liquid-link">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
