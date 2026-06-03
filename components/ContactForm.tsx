"use client";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { FORMSPREE_URL, CONTACTS } from "@/lib/constants";
import { Phone, Mail, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  company: string;
  address: string;
  area: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "rgba(0,26,50,0.55)",
  border: "1px solid rgba(90,174,232,0.14)",
  borderRadius: "12px",
  padding: "14px 18px",
  fontSize: "14px",
  fontWeight: 400,
  color: "#ddeeff",
  outline: "none",
  transition: "border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease",
  fontFamily: "inherit",
};

function Field({
  label, children,
}: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        style={{
          fontSize: "10px", fontWeight: 700,
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: "rgba(90,174,232,0.55)",
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "", phone: "", company: "",
    address: "", area: "", message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const ref = useScrollReveal<HTMLDivElement>(".reveal-item", { stagger: 0.09 });

  const set = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [field]: e.target.value }));

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(90,174,232,0.40)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(90,174,232,0.08)";
    e.currentTarget.style.background = "rgba(0,30,56,0.70)";
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(90,174,232,0.14)";
    e.currentTarget.style.boxShadow = "none";
    e.currentTarget.style.background = "rgba(0,26,50,0.55)";
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
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", phone: "", company: "", address: "", area: "", message: "" });
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ paddingTop: "120px", paddingBottom: "120px" }}
    >
      {/* Glows */}
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          bottom: "-5%", right: "-5%",
          width: "550px", height: "550px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,143,196,0.18) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        aria-hidden
        style={{
          top: "-5%", left: "-5%",
          width: "450px", height: "450px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,87,133,0.22) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
        <div className="reveal-item section-label mb-6">Контакты</div>

        <div className="reveal-item mb-14">
          <h2
            style={{
              fontSize: "clamp(28px, 3.2vw, 50px)",
              fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.1,
              color: "#ddeeff", maxWidth: "600px",
            }}
          >
            Получите расчет{" "}
            <span className="gradient-text">за 30 минут</span>
          </h2>
          <p
            style={{
              fontSize: "16px", lineHeight: 1.75,
              color: "rgba(221,238,255,0.50)",
              marginTop: "14px",
            }}
          >
            Оставьте заявку — мы перезвоним, зафиксируем параметры объекта
            и подготовим детализированную смету.
          </p>
        </div>

        <div className="reveal-item grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Form ── */}
          <form
            onSubmit={handleSubmit}
            className="glass flex flex-col gap-4"
            style={{ padding: "36px 36px 40px" }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Ваше имя *">
                <input
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Иван Иванов"
                  style={inputBase}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </Field>
              <Field label="Телефон *">
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+7 (___) ___-__-__"
                  style={inputBase}
                  onFocus={focusStyle}
                  onBlur={blurStyle}
                />
              </Field>
            </div>

            <Field label="Компания *">
              <input
                required
                value={form.company}
                onChange={set("company")}
                placeholder="ООО «Название компании»"
                style={inputBase}
                onFocus={focusStyle}
                onBlur={blurStyle}
              />
            </Field>

            <Field label="Адрес объекта">
              <input
                value={form.address}
                onChange={set("address")}
                placeholder="Москва, ул. Примерная, 1"
                style={inputBase}
                onFocus={focusStyle}
                onBlur={blurStyle}
              />
            </Field>

            <Field label="Площадь остекления (примерно)">
              <input
                value={form.area}
                onChange={set("area")}
                placeholder="Например: 3 000 м²"
                style={inputBase}
                onFocus={focusStyle}
                onBlur={blurStyle}
              />
            </Field>

            <Field label="Комментарий">
              <textarea
                value={form.message}
                onChange={set("message")}
                placeholder="Опишите задачу: тип загрязнения, особенности объекта, предпочтительные сроки..."
                rows={4}
                style={{ ...inputBase, resize: "none" }}
                onFocus={focusStyle}
                onBlur={blurStyle}
              />
            </Field>

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full justify-center"
              style={{ marginTop: "4px", opacity: status === "loading" ? 0.65 : 1 }}
            >
              {status === "loading" ? (
                <>
                  <div
                    className="rounded-full border-2"
                    style={{
                      width: 18, height: 18,
                      borderColor: "rgba(255,255,255,0.35)",
                      borderTopColor: "#fff",
                      animation: "spin 0.7s linear infinite",
                    }}
                  />
                  Отправляем...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Получить расчет за 30 минут
                </>
              )}
            </button>

            <p
              style={{
                fontSize: "11px", textAlign: "center",
                color: "rgba(221,238,255,0.28)",
                lineHeight: 1.6,
              }}
            >
              Нажимая кнопку, вы соглашаетесь с{" "}
              <a
                href="/privacy"
                style={{ color: "rgba(90,174,232,0.65)" }}
                className="hover:underline"
              >
                Политикой обработки персональных данных
              </a>.
            </p>

            {/* Status toasts */}
            {status === "success" && (
              <div
                className="glass flex items-center gap-3"
                style={{
                  padding: "14px 18px", borderRadius: "12px",
                  borderColor: "rgba(90,174,232,0.35)",
                  background: "rgba(74,143,196,0.10)",
                }}
              >
                <CheckCircle size={18} style={{ color: "#5aaee8", flexShrink: 0 }} />
                <p style={{ fontSize: "13px", color: "rgba(221,238,255,0.80)" }}>
                  Заявка отправлена! Мы свяжемся с вами в течение 30 минут.
                </p>
              </div>
            )}
            {status === "error" && (
              <div
                className="glass flex items-center gap-3"
                style={{
                  padding: "14px 18px", borderRadius: "12px",
                  borderColor: "rgba(220,60,60,0.30)",
                  background: "rgba(220,60,60,0.08)",
                }}
              >
                <AlertCircle size={18} style={{ color: "#f87171", flexShrink: 0 }} />
                <p style={{ fontSize: "13px", color: "rgba(221,238,255,0.80)" }}>
                  Ошибка отправки. Пожалуйста, позвоните нам напрямую.
                </p>
              </div>
            )}
          </form>

          {/* ── Contacts ── */}
          <div className="space-y-4">

            {/* Михаил Анатольевич */}
            <div className="glass" style={{ padding: "24px 26px" }}>
              <div
                style={{
                  fontSize: "10px", fontWeight: 700,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "rgba(90,174,232,0.55)", marginBottom: "4px",
                }}
              >
                {CONTACTS.director.title}
              </div>
              <div
                style={{
                  fontSize: "18px", fontWeight: 700,
                  color: "#ddeeff", marginBottom: "12px",
                  letterSpacing: "-0.01em",
                }}
              >
                {CONTACTS.director.name}
              </div>
              <a
                href={CONTACTS.director.phoneHref}
                className="flex items-center gap-3 t-all"
                style={{ fontSize: "17px", fontWeight: 600, color: "rgba(221,238,255,0.75)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ddeeff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(221,238,255,0.75)")}
              >
                <Phone size={16} style={{ color: "#5aaee8" }} />
                {CONTACTS.director.phone}
              </a>
            </div>

            {/* Даниил Михайлович */}
            <div className="glass" style={{ padding: "24px 26px" }}>
              <div
                style={{
                  fontSize: "10px", fontWeight: 700,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "rgba(90,174,232,0.55)", marginBottom: "4px",
                }}
              >
                {CONTACTS.specialist.title}
              </div>
              <div
                style={{
                  fontSize: "18px", fontWeight: 700,
                  color: "#ddeeff", marginBottom: "12px",
                  letterSpacing: "-0.01em",
                }}
              >
                {CONTACTS.specialist.name}
              </div>
              <a
                href={CONTACTS.specialist.phoneHref}
                className="flex items-center gap-3 t-all"
                style={{ fontSize: "17px", fontWeight: 600, color: "rgba(221,238,255,0.75)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#ddeeff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(221,238,255,0.75)")}
              >
                <Phone size={16} style={{ color: "#5aaee8" }} />
                {CONTACTS.specialist.phone}
              </a>
            </div>

            {/* Email + Telegram */}
            <div className="glass" style={{ padding: "22px 26px" }}>
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${CONTACTS.email}`}
                  className="flex items-center gap-3 t-all"
                  style={{ color: "rgba(221,238,255,0.60)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ddeeff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(221,238,255,0.60)")}
                >
                  <div
                    className="flex items-center justify-center rounded-xl shrink-0"
                    style={{
                      width: 38, height: 38,
                      background: "rgba(74,143,196,0.12)",
                      border: "1px solid rgba(90,174,232,0.18)",
                    }}
                  >
                    <Mail size={15} style={{ color: "#5aaee8" }} />
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 500 }}>{CONTACTS.email}</span>
                </a>
                <a
                  href={CONTACTS.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 t-all"
                  style={{ color: "rgba(221,238,255,0.60)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#ddeeff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(221,238,255,0.60)")}
                >
                  <div
                    className="flex items-center justify-center rounded-xl shrink-0"
                    style={{
                      width: 38, height: 38,
                      background: "rgba(74,143,196,0.12)",
                      border: "1px solid rgba(90,174,232,0.18)",
                    }}
                  >
                    <MessageCircle size={15} style={{ color: "#5aaee8" }} />
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 500 }}>Telegram</span>
                </a>
              </div>
            </div>

            {/* Режим работы */}
            <div className="glass" style={{ padding: "22px 26px" }}>
              <div
                style={{
                  fontSize: "10px", fontWeight: 700,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "rgba(90,174,232,0.55)", marginBottom: "14px",
                }}
              >
                Режим работы
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { key: "Звонки и заявки",   val: "Пн–Вс, 08:00–22:00" },
                  { key: "Выполнение работ",  val: "Круглосуточно"       },
                  { key: "Расчет стоимости",  val: "30 минут"            },
                ].map(({ key, val }) => (
                  <div key={key} className="flex justify-between items-center">
                    <span style={{ fontSize: "13px", color: "rgba(221,238,255,0.45)" }}>{key}</span>
                    <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(221,238,255,0.80)" }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
