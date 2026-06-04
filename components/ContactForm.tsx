"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { CONTACTS, REQUISITES, FORMSPREE_URL } from "@/lib/constants";
import { PhoneIcon, TelegramIcon, MailIcon } from "./Icon";
import Reveal from "./motion/Reveal";
import MagneticButton from "./motion/MagneticButton";

type Status = "idle" | "loading" | "success" | "error";

const FIELDS = [
  { name: "name", label: "Имя", type: "text", required: true, placeholder: "Как к вам обращаться" },
  { name: "phone", label: "Телефон", type: "tel", required: true, placeholder: "+7 (___) ___-__-__" },
  { name: "company", label: "Компания", type: "text", required: true, placeholder: "Название организации" },
  { name: "address", label: "Адрес объекта", type: "text", required: true, placeholder: "Город, улица, дом" },
];

function Person({ p }: { p: typeof CONTACTS.director }) {
  return (
    <div className="rounded-2xl border border-[#5286AC]/20 bg-[#003556]/40 p-5 backdrop-blur-xl">
      <div className="text-[15px] font-semibold text-white">{p.name}</div>
      <div className="text-[13px] text-[var(--ink-muted)]">{p.title}</div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <a href={p.phoneHref} className="inline-flex items-center gap-2 text-[15px] font-medium text-[var(--ink)] transition-colors hover:text-[var(--accent-bright)]">
          <PhoneIcon size={18} className="text-[var(--accent-bright)]" />
          {p.phone}
        </a>
        <a
          href={p.telegram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Telegram — ${p.name}`}
          className="grid h-9 w-9 place-items-center rounded-full border border-[#5286AC]/25 text-[var(--accent-bright)] transition-colors hover:border-[var(--glass-border-lit)] hover:bg-[rgba(127,197,245,0.12)]"
        >
          <TelegramIcon size={18} />
        </a>
      </div>
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacts" className="relative px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Left — contacts & requisites */}
          <div>
            <Reveal>
              <span className="eyebrow">Контакты</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="display-xl mt-5 text-[clamp(1.9rem,4vw,2.9rem)]">
                Рассчитаем стоимость <span className="gradient-text">по вашему объекту</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-[15px] leading-relaxed text-[var(--ink-dim)]">
                Оставьте заявку или свяжитесь напрямую — выезд на объект для оценки бесплатный.
                Работаем по {CONTACTS.region}.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-7 space-y-3">
                <Person p={CONTACTS.director} />
                <Person p={CONTACTS.specialist} />
                <a
                  href={CONTACTS.emailHref}
                  className="flex items-center gap-3 rounded-2xl border border-[#5286AC]/20 bg-[#003556]/40 p-5 backdrop-blur-xl transition-colors hover:border-[var(--glass-border-lit)]"
                >
                  <MailIcon size={20} className="text-[var(--accent-bright)]" />
                  <span className="text-[15px] font-medium text-white">{CONTACTS.email}</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-5 rounded-2xl border border-[#5286AC]/15 bg-[#003556]/25 p-5 text-[12.5px] leading-relaxed text-[var(--ink-muted)] backdrop-blur-xl">
                <div className="text-[var(--ink-dim)]">{REQUISITES.name}</div>
                <div className="mt-1">ИНН {REQUISITES.inn} · ОГРНИП {REQUISITES.ogrnip}</div>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <Reveal delay={0.1}>
            <div className="liquid-glass rounded-3xl p-7 md:p-9">
              <form onSubmit={onSubmit} className="relative z-10">
                <div className="grid gap-4 sm:grid-cols-2">
                  {FIELDS.map((f) => (
                    <label key={f.name} className="block">
                      <span className="mb-2 block text-[13px] font-medium text-[var(--ink-dim)]">
                        {f.label}
                        {f.required && <span className="text-[var(--accent-bright)]"> *</span>}
                      </span>
                      <input
                        name={f.name}
                        type={f.type}
                        required={f.required}
                        placeholder={f.placeholder}
                        className="w-full rounded-2xl border border-[#5286AC]/20 bg-[#0a1a2f]/50 px-4 py-3.5 text-[15px] text-white outline-none transition-colors placeholder:text-[var(--ink-faint)] focus:border-[var(--glass-border-lit)] focus:bg-[#0a1a2f]/70"
                      />
                    </label>
                  ))}
                </div>

                <label className="mt-4 block">
                  <span className="mb-2 block text-[13px] font-medium text-[var(--ink-dim)]">
                    Комментарий
                  </span>
                  <textarea
                    name="comment"
                    rows={3}
                    placeholder="Площадь остекления, тип объекта, пожелания по срокам…"
                    className="w-full resize-none rounded-2xl border border-[#5286AC]/20 bg-[#0a1a2f]/50 px-4 py-3.5 text-[15px] text-white outline-none transition-colors placeholder:text-[var(--ink-faint)] focus:border-[var(--glass-border-lit)] focus:bg-[#0a1a2f]/70"
                  />
                </label>

                <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <MagneticButton type="submit" disabled={status === "loading"} className="btn btn-primary">
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Отправляем…
                      </>
                    ) : (
                      <>
                        Получить расчёт
                        <ArrowRight size={18} />
                      </>
                    )}
                  </MagneticButton>
                  <p className="text-[12px] leading-relaxed text-[var(--ink-muted)]">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <Link href="/privacy" className="text-[var(--accent-bright)] underline-offset-2 hover:underline">
                      политикой конфиденциальности
                    </Link>
                    .
                  </p>
                </div>

                {/* Glass notifications */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="mt-5 flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3.5 text-[14px] text-emerald-200 backdrop-blur-xl"
                    >
                      <CheckCircle2 size={18} />
                      Заявка отправлена. Свяжемся с вами в ближайшее время.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="mt-5 flex items-center gap-3 rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3.5 text-[14px] text-red-200 backdrop-blur-xl"
                    >
                      <AlertCircle size={18} />
                      Не удалось отправить. Позвоните нам по телефону — мы на связи.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
