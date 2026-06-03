"use client";
import { useState, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FORMSPREE_URL, CONTACTS } from "@/lib/constants";
import { Phone, Mail, Send, CheckCircle, AlertCircle, MessageCircle } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  company: string;
  address: string;
  area: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", company: "", address: "", area: "", message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.1 });

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", company: "", address: "", area: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputClass =
    "w-full bg-[#003556]/60 border border-[#5286AC]/20 focus:border-[#5286AC]/60 rounded-xl px-5 py-4 text-[#E0EBFC] placeholder-[#E0EBFC]/30 text-base font-[400] outline-none transition-all duration-200 focus:bg-[#003556]/80 focus:shadow-[0_0_0_2px_rgba(82,134,172,0.15)]";

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#5286AC]/12 blur-[140px]" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[#105785]/20 blur-[120px]" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal-item section-label mb-6">Контакты</div>
        <div className="reveal-item mb-14">
          <h2
            className="font-[700] text-[#E0EBFC] leading-[1.1] tracking-[-0.02em] max-w-2xl"
            style={{ fontSize: "clamp(30px, 3.5vw, 52px)" }}
          >
            Получите расчет{" "}
            <span className="gradient-text">за 30 минут</span>
          </h2>
          <p className="text-[#E0EBFC]/60 text-lg mt-4">
            Оставьте заявку — мы перезвоним, зафиксируем параметры объекта и подготовим смету.
          </p>
        </div>

        <div className="reveal-item grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-panel p-8 lg:p-10 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[#E0EBFC]/50 text-xs font-[600] uppercase tracking-wide mb-2 block">Ваше имя *</label>
                <input required value={form.name} onChange={set("name")} placeholder="Иван Иванов" className={inputClass} />
              </div>
              <div>
                <label className="text-[#E0EBFC]/50 text-xs font-[600] uppercase tracking-wide mb-2 block">Телефон *</label>
                <input required value={form.phone} onChange={set("phone")} placeholder="+7 (___) ___-__-__" type="tel" className={inputClass} />
              </div>
            </div>
            <div>
              <label className="text-[#E0EBFC]/50 text-xs font-[600] uppercase tracking-wide mb-2 block">Компания *</label>
              <input required value={form.company} onChange={set("company")} placeholder="ООО «Название компании»" className={inputClass} />
            </div>
            <div>
              <label className="text-[#E0EBFC]/50 text-xs font-[600] uppercase tracking-wide mb-2 block">Адрес объекта</label>
              <input value={form.address} onChange={set("address")} placeholder="Москва, ул. Примерная, 1" className={inputClass} />
            </div>
            <div>
              <label className="text-[#E0EBFC]/50 text-xs font-[600] uppercase tracking-wide mb-2 block">Площадь остекления (примерно)</label>
              <input value={form.area} onChange={set("area")} placeholder="Например: 3 000 м²" className={inputClass} />
            </div>
            <div>
              <label className="text-[#E0EBFC]/50 text-xs font-[600] uppercase tracking-wide mb-2 block">Комментарий</label>
              <textarea value={form.message} onChange={set("message")} placeholder="Опишите задачу: тип загрязнения, особенности объекта, предпочтительные сроки..." rows={4} className={`${inputClass} resize-none`} />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-3 bg-[#5286AC] hover:bg-[#5286AC]/90 disabled:opacity-60 disabled:cursor-not-allowed text-[#E0EBFC] font-[700] text-base tracking-wide py-5 rounded-xl transition-all duration-300 hover:shadow-[0_0_32px_rgba(82,134,172,0.4)] hover:-translate-y-0.5"
            >
              {status === "loading" ? (
                <>
                  <div className="w-5 h-5 border-2 border-[#E0EBFC]/40 border-t-[#E0EBFC] rounded-full animate-spin" />
                  Отправляем заявку...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Получить расчет за 30 минут
                </>
              )}
            </button>

            <p className="text-[#E0EBFC]/30 text-xs text-center">
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a href="/privacy" className="text-[#5286AC] hover:underline">Политикой обработки персональных данных</a>.
            </p>

            {/* Status messages */}
            {status === "success" && (
              <div className="flex items-center gap-3 glass-panel p-4 border-[#5286AC]/40 bg-[#5286AC]/10">
                <CheckCircle size={20} className="text-[#5286AC] shrink-0" />
                <p className="text-[#E0EBFC]/80 text-sm">Заявка отправлена! Мы свяжемся с вами в течение 30 минут.</p>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-3 glass-panel p-4 border-red-500/30 bg-red-500/10">
                <AlertCircle size={20} className="text-red-400 shrink-0" />
                <p className="text-[#E0EBFC]/80 text-sm">Произошла ошибка. Пожалуйста, позвоните нам напрямую.</p>
              </div>
            )}
          </form>

          {/* Contacts */}
          <div className="space-y-6">
            {[CONTACTS.director, CONTACTS.specialist].map((person) => (
              <div key={person.name} className="glass-panel p-7">
                <div className="text-[#5286AC] text-xs font-[600] uppercase tracking-widest mb-1">{person.title}</div>
                <div className="text-[#E0EBFC] font-[700] text-xl mb-3">{person.name}</div>
                <a
                  href={person.phoneHref}
                  className="flex items-center gap-3 text-[#E0EBFC]/80 hover:text-[#E0EBFC] transition-colors text-lg font-[600]"
                >
                  <Phone size={18} className="text-[#5286AC]" />
                  {person.phone}
                </a>
              </div>
            ))}

            <div className="glass-panel p-7 space-y-4">
              <a
                href={`mailto:${CONTACTS.email}`}
                className="flex items-center gap-3 text-[#E0EBFC]/70 hover:text-[#E0EBFC] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#5286AC]/15 border border-[#5286AC]/20 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#5286AC]" />
                </div>
                <span className="font-[500]">{CONTACTS.email}</span>
              </a>
              <a
                href={CONTACTS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#E0EBFC]/70 hover:text-[#E0EBFC] transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#5286AC]/15 border border-[#5286AC]/20 flex items-center justify-center shrink-0">
                  <MessageCircle size={16} className="text-[#5286AC]" />
                </div>
                <span className="font-[500]">Telegram</span>
              </a>
            </div>

            {/* Working hours */}
            <div className="glass-panel p-7">
              <div className="text-[#5286AC] text-xs font-[600] uppercase tracking-widest mb-3">Режим работы</div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#E0EBFC]/60">Звонки и заявки</span>
                  <span className="text-[#E0EBFC] font-[500]">Пн–Вс, 08:00–22:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#E0EBFC]/60">Выполнение работ</span>
                  <span className="text-[#E0EBFC] font-[500]">Круглосуточно</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#E0EBFC]/60">Расчет стоимости</span>
                  <span className="text-[#E0EBFC] font-[500]">30 минут</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
